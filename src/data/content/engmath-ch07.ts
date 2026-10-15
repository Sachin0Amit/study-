import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 7: Complex Variables I
// Sections 7.1 – 7.4. Master study content.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh07Content: SectionContent[] = [
  // ---------------------------------------------------------------- 7.1
  {
    sectionId: 'engmath-ch7-s1',
    readingTime: 7,
    intro: 'Complex numbers extend the real line into a plane where magnitude and angle jointly locate each point. Modulus-argument form and De Moivre relations turn multiplication into rotation plus scaling. This section fixes algebra, geometry, domains and the vocabulary of paths and contours used throughout complex integration.',
    objectives: [
      'Convert between Cartesian and modulus-argument forms and apply De Moivre relations',
      'Classify domains, paths and contours including simply connected regions',
      'Parametrize line segments and circles for later contour integrals'
    ],
    concepts: [
      {
        term: 'Modulus and argument',
        kind: 'definition',
        statement: 'For $z = x + iy$ the **modulus** is $|z| = \\sqrt{x^{2} + y^{2}}$ and an **argument** $\\theta = \\arg z$ satisfies $x = |z|\\cos\\theta$ and $y = |z|\\sin\\theta$, coded as `abs(z)` and `arg(z)`. The principal value $\\mathrm{Arg}\\, z$ lies in $(-\\pi, \\pi]$. Conjugation reflects across the real axis as $\\bar{z} = x - iy$.',
        detail: 'Modulus measures distance from the origin while argument measures direction. The identities $|z|^{2} = z\\bar{z}$ and $|z_{1}z_{2}| = |z_{1}||z_{2}|$ convert geometry into algebra. Arguments add under multiplication but only modulo $2\\pi$.'
      },
      {
        term: 'Polar and exponential forms',
        kind: 'notation',
        statement: 'Every nonzero $z$ has **polar** form $z = r(\\cos\\theta + i\\sin\\theta)$ and **exponential** form $z = re^{i\\theta}$ with $r = |z|$, written in code as `r*exp(i*theta)`. Multiplication adds exponents while division subtracts them. Integer powers follow $z^{n} = r^{n}e^{in\\theta}$.',
        detail: 'The exponential form makes rotation explicit: multiplying by $e^{i\\phi}$ rotates by $\\phi$ without changing $r$. Roots split evenly around a circle: the $n$th roots of $z$ share modulus $r^{1/n}$ with arguments spaced by $2\\pi/n$.'
      },
      {
        term: 'De Moivre relations',
        kind: 'theorem',
        statement: 'The **De Moivre** identity $(\\cos\\theta + i\\sin\\theta)^{n} = \\cos n\\theta + i\\sin n\\theta$ holds for integer $n$, remembered as `cos_n_plus_i_sin_n`. It converts powers into multiple angles. It also inverts to express $\\cos^{n}\\theta$ and $\\sin^{n}\\theta$ through cosines and sines of multiples.',
        detail: 'Combined with binomial expansion, De Moivre yields closed forms for $\\cos 3\\theta$ and $\\sin 3\\theta$ used in trigonometric integrals. For rational exponents it describes all branches of roots. The identity is the real-variable shadow of $e^{in\\theta} = (e^{i\\theta})^{n}$.'
      },
      {
        term: 'Domains and simply connected regions',
        kind: 'definition',
        statement: 'A **domain** is an open connected set where every point owns a small disk inside the set, tested conceptually by `is_open_and_connected`. It is **simply connected** when every closed loop can shrink to a point without leaving the set. Disks are simply connected while annuli and punctured planes are not.',
        detail: 'Analyticity theorems need simply connected domains because holes trap circulation. The vocabulary of interior, exterior, boundary and closure pins down where hypotheses hold. Sketching the region first prevents applying Cauchy results across a hidden slit or pole.'
      },
      {
        term: 'Paths and contours',
        kind: 'notation',
        statement: 'A **path** is a continuous $z(t) = x(t) + iy(t)$ with $a \\le t \\le b$, and a **contour** is a path built from finitely many smooth pieces joined end to end, stored as `piecewise_smooth`. Closed means $z(a) = z(b)$ and simple means no self-crossing except at the join. Positive sense for one loop is counterclockwise.',
        detail: 'Segments use $z(t) = z_{0} + t(z_{1} - z_{0})$ with $0 \\le t \\le 1$, while circles use $z(t) = z_{0} + Re^{it}$. Piecewise assembly handles rectangles and keyholes by chaining pieces. Orientation signs propagate into every contour integral.'
      }
    ],
    examples: [
      {
        title: 'Roots of unity from exponential form',
        problem: 'Find all cube roots of $z = 8i$ in Cartesian form using modulus-argument conversion.',
        steps: [
          { label: 'Step 1', text: 'Write $8i = 8e^{i\\pi/2}$ since $|8i| = 8$ and its argument is $\\pi/2$. The modulus of each cube root is $8^{1/3} = 2$.\n```text\n|8i| = 8; arg = pi/2; root modulus = 2\n```' },
          { label: 'Step 2', text: 'Divide the argument by $3$ and add multiples of $2\\pi/3$: $\\theta_{k} = \\pi/6 + 2k\\pi/3$ for $k = 0, 1, 2$. Thus $w_{k} = 2e^{i\\theta_{k}}$.' },
          { label: 'Step 3', text: 'Convert: $w_{0} = 2(\\cos\\pi/6 + i\\sin\\pi/6) = \\sqrt{3} + i$, $w_{1} = 2(\\cos 5\\pi/6 + i\\sin 5\\pi/6) = -\\sqrt{3} + i$, $w_{2} = 2(\\cos 3\\pi/2 + i\\sin 3\\pi/2) = -2i$. Cubing any $w_{k}$ returns $8i$.' }
        ],
        result: 'Cube roots are $\\sqrt{3} + i$, $-\\sqrt{3} + i$ and $-2i$, equally spaced by $120^{\\circ}$ on $|w| = 2$.'
      },
      {
        title: 'Parametrize a rectangular contour',
        problem: 'Give a piecewise parametrization of the positively oriented rectangle with corners $0$, $2$, $2 + i$ and $i$.',
        steps: [
          { label: 'Step 1', text: 'Traverse counterclockwise: $C_{1}$ from $0$ to $2$ as $z_{1}(t) = t$ with $0 \\le t \\le 2$, then $C_{2}$ from $2$ to $2 + i$ as $z_{2}(t) = 2 + it$ with $0 \\le t \\le 1$.' },
          { label: 'Step 2', text: 'Continue with $C_{3}$ from $2 + i$ to $i$ as $z_{3}(t) = (2 - t) + i$ with $0 \\le t \\le 2$, then $C_{4}$ from $i$ to $0$ as $z_{4}(t) = i(1 - t)$ with $0 \\le t \\le 1$.' },
          { label: 'Step 3', text: 'Concatenation $C = C_{1} + C_{2} + C_{3} + C_{4}$ is closed, simple and positively oriented. Each piece has constant speed, so later $dz$ factors are trivial.\n```text\nC1: t; C2: 2+i*t; C3: (2-t)+i; C4: i*(1-t)\n```' }
        ],
        result: 'Four segments $z_{1}(t) = t$, $z_{2}(t) = 2 + it$, $z_{3}(t) = (2 - t) + i$, $z_{4}(t) = i(1 - t)$ chain into the positively oriented rectangle.'
      }
    ],
    keyTakeaways: [
      'Modulus $|z| = \\sqrt{x^{2} + y^{2}}$ and argument $\\theta$ give $z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}$.',
      'De Moivre $(\\cos\\theta + i\\sin\\theta)^{n} = \\cos n\\theta + i\\sin n\\theta$ turns powers into multiple angles.',
      'Domains are open connected sets; simply connected means every loop shrinks without leaving the set.',
      'Contours chain smooth pieces such as $z(t) = z_{0} + t(z_{1} - z_{0})$ and $z(t) = z_{0} + Re^{it}$ with orientation tracked.'
    ],
    quiz: [
      {
        q: 'The principal argument $\\mathrm{Arg}\\, z$ of $z = -1 - i$ equals:',
        options: [`$\\frac{3\\pi}{4}$`, `$-\\frac{3\\pi}{4}$`, `$\\frac{\\pi}{4}$`, `$-\\frac{\\pi}{4}$`],
        answer: 1,
        explanation: 'Step 1: Locate $-1 - i$ in the third quadrant where both real and imaginary parts are negative. Step 2: Compute the reference angle $\\tan^{-1}(1) = \\pi/4$ and add $\\pi$ for the third quadrant. Step 3: Normalize into $(-\\pi, \\pi]$ to get $-3\\pi/4$.'
      },
      {
        q: 'If $z_{1} = r_{1}e^{i\\theta_{1}}$ and $z_{2} = r_{2}e^{i\\theta_{2}}$, then $z_{1}z_{2}$ equals:',
        options: [`$r_{1}r_{2}e^{i(\\theta_{1} - \\theta_{2})}$`, `$(r_{1} + r_{2})e^{i\\theta_{1}\\theta_{2}}$`, `$\\sqrt{r_{1}r_{2}}e^{i(\\theta_{1} + \\theta_{2})}$`, `$r_{1}r_{2}e^{i(\\theta_{1} + \\theta_{2})}$`],
        answer: 3,
        explanation: 'Step 1: Multiply moduli because lengths scale successively. Step 2: Add arguments because rotations compose. Step 3: Reject subtraction and root forms, which belong to division and root extraction respectively.'
      },
      {
        // PYQ-pattern — roots of a complex number (rephrased, values changed)
        q: 'The number of distinct fourth roots of $1 + i$ in the complex plane is:',
        options: [`$4$`, `$1$`, `$2$`, 'Infinitely many'],
        answer: 0,
        explanation: 'Step 1: Write $1 + i$ in polar form with nonzero modulus $\\sqrt{2}$. Step 2: Recall every nonzero complex number owns exactly $n$ distinct $n$th roots. Step 3: Conclude four roots spaced by $\\pi/2$ on a circle of radius $2^{1/8}$.'
      },
      {
        q: 'Which region is simply connected?',
        options: ['The annulus $1 < |z| < 2$', 'The punctured plane $z \\ne 0$', 'The open unit disk $|z| < 1$', 'The plane with the negative real axis removed plus the origin'],
        answer: 2,
        explanation: 'Step 1: Test whether every loop can contract without leaving the set. Step 2: Observe annuli and punctured planes trap loops around the missing hole. Step 3: Confirm the full disk has no hole so all loops shrink freely.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.2
  {
    sectionId: 'engmath-ch7-s2',
    readingTime: 9,
    intro: 'Differentiability in the complex sense is far stricter than real differentiability because the difference quotient must approach one limit from every direction in the plane. The Cauchy-Riemann equations encode that rigidity in two real partial differential equations. This section states them in Cartesian and polar form and shows how harmonic functions pair into analytic wholes.',
    objectives: [
      'Test analyticity with Cartesian and polar Cauchy-Riemann equations',
      'Verify harmonicity and construct harmonic conjugates by partial integration',
      'Locate points where polynomial, exponential and logarithmic maps fail to be analytic'
    ],
    concepts: [
      {
        term: 'Complex differentiability and analyticity',
        kind: 'definition',
        statement: 'A function $f(z)$ is **differentiable** at $z_{0}$ when the limit $f^{\\prime}(z_{0}) = \\lim_{\\Delta z \\to 0} \\Delta f/\\Delta z$ exists independent of approach direction, coded as `limit_direction_free`. It is **analytic** at $z_{0}$ when differentiable throughout some neighborhood of $z_{0}$, and entire when analytic on all of $\\mathbb{C}$.',
        detail: 'Real differentiability allows different slopes along $x$ and $y$, while complex differentiability forces them into one complex slope. Polynomials are entire, rational maps are analytic away from denominator zeros, and $\\bar{z}$ is differentiable nowhere.'
      },
      {
        term: 'Cauchy-Riemann in Cartesian form',
        kind: 'theorem',
        statement: 'Writing $f(z) = u(x, y) + iv(x, y)$, the **Cauchy-Riemann** system $u_{x} = v_{y}$ and $u_{y} = -v_{x}$ is necessary for differentiability, checked in code as `ux - vy == 0 and uy + vx == 0`. With continuous partials it is also sufficient. The derivative then reads $f^{\\prime} = u_{x} + iv_{x} = v_{y} - iu_{y}$.',
        detail: 'Approaching $\\Delta z$ along the real axis gives $u_{x} + iv_{x}$, while approaching along the imaginary axis gives $v_{y} - iu_{y}$; equality of the two directional limits forces the system. Discontinuous partials can satisfy the equations at isolated points without genuine differentiability.'
      },
      {
        term: 'Cauchy-Riemann in polar form',
        kind: 'theorem',
        statement: 'In **polar** coordinates with $u(r, \\theta)$ and $v(r, \\theta)$, the system becomes $u_{r} = v_{\\theta}/r$ and $v_{r} = -u_{\\theta}/r$, coded as `ur - vtheta_over_r`. It suits powers, roots and logarithms centered at the origin. The derivative is $f^{\\prime} = e^{-i\\theta}(u_{r} + iv_{r})$.',
        detail: 'Polar form avoids messy Cartesian conversion for $z^{n}$ and $\\log z$. For $f(z) = z^{2} = r^{2}\\cos 2\\theta + ir^{2}\\sin 2\\theta$ both equations reduce to identities. For $f(z) = \\bar{z}$ the system fails everywhere except possibly the origin.'
      },
      {
        term: 'Harmonic functions',
        kind: 'definition',
        statement: 'A twice-differentiable real $u(x, y)$ is **harmonic** when it satisfies Laplace $u_{xx} + u_{yy} = 0$, tested by `laplacian(u) == 0`. Real and imaginary parts of every analytic function are harmonic. Conversely each harmonic $u$ on a simply connected domain owns a harmonic conjugate $v$ making $u + iv$ analytic.',
        detail: 'Differentiating $u_{x} = v_{y}$ in $x$ and $u_{y} = -v_{x}$ in $y$ and adding gives $u_{xx} + u_{yy} = 0$. The functions $x^{2} - y^{2}$ and $2xy$ pair as real and imaginary parts of $z^{2}$. Non-harmonic $u$ such as $x^{2} + y^{2}$ can never belong to an analytic function.'
      },
      {
        term: 'Harmonic conjugate construction',
        kind: 'method',
        statement: 'To build the **conjugate**, integrate $v_{y} = u_{x}$ in $y$ to get $v$ up to a function of $x$, coded as `integrate_ux_dy`, then enforce $v_{x} = -u_{y}$ to fix the leftover. The result is unique up to an additive real constant. Failure of $u_{xx} + u_{yy} = 0$ stops the procedure immediately.',
        detail: 'For $u = x^{2} - y^{2}$ one gets $v_{y} = 2x$ so $v = 2xy + g(x)$, and $v_{x} = 2y + g_{x}$ must equal $2y$, forcing $g$ constant. The same pipeline recovers $\\sin x \\sinh y$ type conjugates for exponential-trigonometric pairs.'
      }
    ],
    examples: [
      {
        title: 'Test a cubic polynomial for analyticity',
        problem: 'Show $f(z) = z^{3}$ is entire and compute $f^{\\prime}$ via Cauchy-Riemann.',
        steps: [
          { label: 'Step 1', text: 'Expand $(x + iy)^{3} = (x^{3} - 3xy^{2}) + i(3x^{2}y - y^{3})$, so $u = x^{3} - 3xy^{2}$ and $v = 3x^{2}y - y^{3}$.\n```text\nu = x^3 - 3*x*y^2; v = 3*x^2*y - y^3\n```' },
          { label: 'Step 2', text: 'Compute $u_{x} = 3x^{2} - 3y^{2}$, $v_{y} = 3x^{2} - 3y^{2}$, $u_{y} = -6xy$, $v_{x} = 6xy$. Hence $u_{x} = v_{y}$ and $u_{y} = -v_{x}$ at every point with continuous partials.' },
          { label: 'Step 3', text: 'Thus $f$ is entire with $f^{\\prime} = u_{x} + iv_{x} = 3(x^{2} - y^{2}) + i6xy = 3z^{2}$, matching the real power rule.' }
        ],
        result: '$f(z) = z^{3}$ satisfies Cauchy-Riemann everywhere, so it is entire with $f^{\\prime}(z) = 3z^{2}$.'
      },
      {
        title: 'Construct a harmonic conjugate',
        problem: 'Given $u(x, y) = e^{x}\\cos y$, verify harmonicity and find $v$ so that $f = u + iv$ is analytic.',
        steps: [
          { label: 'Step 1', text: 'Compute $u_{x} = e^{x}\\cos y$, $u_{xx} = e^{x}\\cos y$, $u_{y} = -e^{x}\\sin y$, $u_{yy} = -e^{x}\\cos y$. Sum gives $u_{xx} + u_{yy} = 0$, so $u$ is harmonic on $\\mathbb{C}$.' },
          { label: 'Step 2', text: 'Set $v_{y} = u_{x} = e^{x}\\cos y$ and integrate in $y$: $v = e^{x}\\sin y + g(x)$.' },
          { label: 'Step 3', text: 'Enforce $v_{x} = e^{x}\\sin y + g_{x} = -u_{y} = e^{x}\\sin y$, so $g_{x} = 0$ and $v = e^{x}\\sin y + C$. Hence $f(z) = e^{z} + iC$.\n```text\nv_y = e^x cos y -> v = e^x sin y + g(x); g constant\n```' }
        ],
        result: 'Harmonic conjugate is $v(x, y) = e^{x}\\sin y + C$, giving the entire function $f(z) = e^{z}$ up to an imaginary constant.'
      }
    ],
    keyTakeaways: [
      'Analytic at $z_{0}$ means differentiable in a full neighborhood, not merely at the point.',
      'Cartesian Cauchy-Riemann $u_{x} = v_{y}$ and $u_{y} = -v_{x}$ with continuous partials characterizes analyticity.',
      'Polar form $u_{r} = v_{\\theta}/r$ and $v_{r} = -u_{\\theta}/r$ handles centered powers and logarithms cleanly.',
      'Real and imaginary parts of analytic maps are harmonic, and conjugates follow from $v_{y} = u_{x}$ plus $v_{x} = -u_{y}$.'
    ],
    quiz: [
      {
        q: 'For $f(z) = u + iv$ with continuous partials, analyticity is equivalent to:',
        options: [`$u_{x} = v_{y}$ and $u_{y} = -v_{x}$`, `$u_{x} = v_{x}$ and $u_{y} = v_{y}$`, `$u_{xx} = v_{yy}$`, `$u + v = 0$`],
        answer: 0,
        explanation: 'Step 1: Equate the real-axis and imaginary-axis difference quotients to force the pair. Step 2: Invoke continuity of partials to make the condition sufficient as well. Step 3: Reject the diagonal equalities, which describe no complex slope.'
      },
      {
        // PYQ-pattern — Cauchy-Riemann test for analyticity (rephrased, values changed)
        q: 'The function $f(z) = |z|^{2} = x^{2} + y^{2}$ is:',
        options: ['Entire', 'Analytic on the real axis', 'Analytic only at $z = 0$', 'Nowhere analytic as a complex function'],
        answer: 2,
        explanation: 'Step 1: Identify $u = x^{2} + y^{2}$ and $v = 0$, so $u_{x} = 2x$ and $v_{y} = 0$. Step 2: Solve $2x = 0$ and $2y = 0$ to find the equations hold only at the origin. Step 3: Recall analyticity needs a neighborhood, so a single point does not qualify.'
      },
      {
        q: 'In polar form the Cauchy-Riemann equations read:',
        options: [`$u_{r} = v_{r}$ and $u_{\\theta} = v_{\\theta}$`, `$u_{r} = v_{\\theta}/r$ and $v_{r} = -u_{\\theta}/r$`, `$u_{r} + v_{r} = 0$`, `$r u_{r} = r v_{r} = 0$`],
        answer: 1,
        explanation: 'Step 1: Convert the Cartesian chain rule through $x = r\\cos\\theta$ and $y = r\\sin\\theta$. Step 2: Isolate radial and angular derivatives to expose the $1/r$ scaling. Step 3: Match the stated pair and discard the unscaled alternatives.'
      },
      {
        q: 'If $u(x, y) = x^{2} - y^{2}$, its harmonic conjugate (up to constant) is:',
        options: [`$x^{2} + y^{2}$`, `$-2xy$`, `$y^{2} - x^{2}$`, `$2xy$`],
        answer: 3,
        explanation: 'Step 1: Check $u_{xx} + u_{yy} = 2 - 2 = 0$ so a conjugate exists. Step 2: Integrate $v_{y} = u_{x} = 2x$ to $v = 2xy + g(x)$. Step 3: Enforce $v_{x} = 2y = -u_{y}$ to confirm $g$ is constant.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Cauchy-Riemann as infinitesimal rotation and scaling',
        blocks: [
          {
            kind: 'theorem',
            body: 'Write $f(z) = u(x,y) + i v(x,y)$ with $z = x + i y$. Then $f$ is complex differentiable at $z_{0}$ exactly when $(u,v)$ is real differentiable there with Jacobian $\\begin{bmatrix} a & -b \\\\ b & a \\end{bmatrix}$, equivalently $u_{x} = v_{y}$ and $u_{y} = -v_{x}$ at the point. In that case $f^{{\\prime}}(z_{0}) = u_{x} + i v_{x} = v_{y} - i u_{y}$. In Wirtinger form with $\\partial_{\\bar{z}} = (\\partial_{x} + i \\partial_{y})/2$ and $\\partial_{z} = (\\partial_{x} - i \\partial_{y})/2$, analyticity is $\\partial_{\\bar{z}} f = 0$ and $df = f^{{\\prime}} \\, dz$. The Jacobian acts as rotation by $\\arg f^{{\\prime}}$ plus scaling by $|f^{{\\prime}}|$.'
          },
          {
            kind: 'proof',
            body: 'If $f^{{\\prime}}(z_{0}) = a + i b$ exists, then $f(z_{0} + h) - f(z_{0}) = (a+ib)(h_{x} + i h_{y}) + o(|h|)$, whose real and imaginary parts give the matrix above. Conversely the matrix form yields $(a+ib)(h_{x}+ih_{y})$ plus $o(|h|)$, so the complex difference quotient converges. Approaching along real $h$ gives $f^{{\\prime}} = u_{x} + i v_{x}$ while imaginary $h$ gives $f^{{\\prime}} = v_{y} - i u_{y}$; equating both expressions is Cauchy Riemann. Polar form $u_{r} = r^{-1} v_{\\theta}$, $v_{r} = -r^{-1} u_{\\theta}$ follows by chain rule for $r > 0$.'
          },
          {
            kind: 'remark',
            body: 'Differentiating $u_{x} = v_{y}$ and $u_{y} = -v_{x}$ gives $u_{xx} + u_{yy} = 0$ and $v_{xx} + v_{yy} = 0$: real and imaginary parts are **harmonic**. Locally every harmonic $u$ on a simply connected domain has a conjugate $v(x,y) = \\int_{(x_{0},y_{0})}^{(x,y)} -u_{y} \\, dx + u_{x} \\, dy$, path independent by Green. Sharpness matters: Looman Menchoff shows continuity plus Cauchy Riemann almost everywhere still forces analyticity, while $u = x^{2} + y^{2}$ is smooth but not harmonic, so no analytic function has it as a real part.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 7.3
  {
    sectionId: 'engmath-ch7-s3',
    readingTime: 8,
    intro: 'Contour integration extends line integration to complex-valued functions of a complex variable. Each integral reduces to two real line integrals, one for the real part and one for the imaginary part. This section defines the integral from parametrizations, bounds it with the ML inequality and isolates when path choice stops mattering.',
    objectives: [
      'Evaluate contour integrals by parametrization $\\int_{C} f(z)\\,dz = \\int_{a}^{b} f(z(t))z^{\\prime}(t)\\,dt$',
      'Apply the ML bound $|\\int_{C} f| \\le ML$ for estimates',
      'Decide path independence from existence of antiderivatives'
    ],
    concepts: [
      {
        term: 'Contour integral by parametrization',
        kind: 'definition',
        statement: 'The **contour integral** $\\int_{C} f(z)\\,dz = \\int_{a}^{b} f(z(t))\\,z^{\\prime}(t)\\,dt$ multiplies field values by complex velocity `f_times_zprime`. Splitting $f = u + iv$ and $dz = dx + idy$ recovers two real line integrals. Reversing $C$ negates the value.',
        detail: 'No speed factor $|z^{\\prime}|$ appears, unlike scalar arc-length integrals, because $dz$ itself carries direction. For $f(z) = 1$ the integral gives the complex displacement $z(b) - z(a)$. For closed $C$ it need not vanish.'
      },
      {
        term: 'ML inequality',
        kind: 'theorem',
        statement: 'If $|f(z)| \\le M$ on $C$ and $L$ is the length of $C$, then the **ML bound** $|\\int_{C} f(z)\\,dz| \\le ML$ holds, coded as `M_times_L`. It estimates without integrating. Equality is rare and needs constant argument of the integrand.',
        detail: 'The proof passes absolute values inside and bounds $|z^{\\prime}(t)|$ by length. Typical use shows integrals over large circles or small detours vanish in limits. Crude $M$ values still suffice for vanishing arguments.'
      },
      {
        term: 'Antiderivative and path independence',
        kind: 'theorem',
        statement: 'If $F^{\\prime} = f$ throughout a domain $D$, then the **antiderivative** relation $\\int_{C} f(z)\\,dz = F(z_{1}) - F(z_{0})$ depends only on endpoints, stored as `F_end_minus_F_start`. In particular closed-loop integrals vanish. Polynomials, exponentials and sine-cosine pairs all own global antiderivatives.',
        detail: 'This is the complex fundamental theorem of calculus. It explains why $\\oint_{C} z^{n}\\,dz = 0$ for $n \\ne -1$: the power owns $z^{n+1}/(n+1)$. The missing case $1/z$ has no single-valued antiderivative on punctured domains.'
      },
      {
        term: 'Simply connected path independence',
        kind: 'insight',
        statement: 'On a **simply connected** domain where $f$ is analytic, integrals between fixed endpoints agree for all paths, flagged by `same_endpoints_same_value`. Holes break the property because loops can trap nonzero circulation. Checking the domain for holes precedes any deformation claim.',
        detail: 'Analyticity plus simple connectivity lets one morph paths without changing values, the working form of Cauchy theorem. The punctured-plane integral of $1/z$ around the origin equals $2\\pi i$ on every enclosing loop, proving dependence on homotopy class.'
      },
      {
        term: 'Real and imaginary split',
        kind: 'method',
        statement: 'Writing $\\int_{C} (u + iv)(dx + idy)$ expands into **two real integrals** $(\\int_{C} u\\,dx - v\\,dy) + i(\\int_{C} v\\,dx + u\\,dy)$ evaluated with `real_plus_i_imag`. This split proves estimates and connects complex integrals to Green theorem. It also debugs sign slips by separating real and imaginary bookkeeping.',
        detail: 'Each bracket is an ordinary vector line integral of a plane field. Cauchy-Riemann makes the two plane fields conservative precisely when $f$ is analytic. The decomposition is the bridge from complex analysis back to vector calculus.'
      }
    ],
    examples: [
      {
        title: 'Integral of z-squared along a parabola versus a line',
        problem: 'Evaluate $\\int_{C} z^{2}\\,dz$ from $0$ to $1 + i$ along (a) the line segment and (b) the parabola $y = x^{2}$, and confirm path independence.',
        steps: [
          { label: 'Step 1', text: 'An antiderivative is $F(z) = z^{3}/3$, so every path must give $F(1 + i) - F(0) = (1 + i)^{3}/3 = (-2 + 2i)/3$.\n```text\nF = z^$3/3$; F(1+i) - F(0) = (-2 + 2i)/3\n```' },
          { label: 'Step 2', text: 'Along the segment $z(t) = t + it$ with $0 \\le t \\le 1$, $dz = (1 + i)\\,dt$ and $\\int_{0}^{1} (t + it)^{2}(1 + i)\\,dt$ simplifies to the same $(-2 + 2i)/3$ after expansion.' },
          { label: 'Step 3', text: 'Along $z(t) = t + it^{2}$ with $0 \\le t \\le 1$, $dz = (1 + 2it)\\,dt$ and direct expansion again collapses to $(-2 + 2i)/3$, confirming endpoint-only dependence.' }
        ],
        result: 'Both paths give $(-2 + 2i)/3 = F(1 + i) - F(0)$, illustrating antiderivative-based path independence.'
      },
      {
        title: 'ML bound on a large semicircle',
        problem: 'Show $\\left|\\int_{C_{R}} e^{iz}/(1 + z^{2})\\,dz\\right| \\to 0$ as $R \\to \\infty$, where $C_{R}$ is $|z| = R$ with $\\Im z \\ge 0$.',
        steps: [
          { label: 'Step 1', text: 'On $C_{R}$ write $z = Re^{i\\theta}$ with $0 \\le \\theta \\le \\pi$. Then $|e^{iz}| = e^{-R\\sin\\theta} \\le 1$ and $|1 + z^{2}| \\ge R^{2} - 1$ by reverse triangle.' },
          { label: 'Step 2', text: 'Hence $|f(z)| \\le 1/(R^{2} - 1) = M$ and length $L = \\pi R$. The ML bound gives $|\\int_{C_{R}}| \\le \\pi R/(R^{2} - 1)$.' },
          { label: 'Step 3', text: 'As $R \\to \\infty$ the fraction behaves like $\\pi/R \\to 0$. The arc contribution vanishes, leaving only the real-axis integral in residue applications.\n```text\n|integral| <= pi*R/(R^2 - 1) -> 0 as R -> infinity\n```' }
        ],
        result: 'Arc integral bounded by $\\pi R/(R^{2} - 1)$, which tends to $0$, justifying closure in the upper half-plane.'
      }
    ],
    keyTakeaways: [
      'Parametrization $\\int_{C} f(z)\\,dz = \\int_{a}^{b} f(z(t))\\,z^{\\prime}(t)\\,dt$ reduces every contour integral to one ordinary integral.',
      'ML bound $|\\int_{C} f| \\le ML$ with $M$ the maximum modulus and $L$ the length gives vanishing estimates.',
      'Antiderivatives give $\\int_{C} f = F(z_{1}) - F(z_{0})$ and force closed-loop integrals to zero.',
      'Analyticity on simply connected domains implies path independence; holes permit nonzero loop values such as $2\\pi i$ for $1/z$.'
    ],
    quiz: [
      {
        q: 'Parametrizing $C$ by $z(t)$ with $a \\le t \\le b$, $\\int_{C} f(z)\\,dz$ equals:',
        options: [`$\\int_{a}^{b} f(z(t))\\,|z^{\\prime}(t)|\\,dt$`, `$f(z(b)) - f(z(a))$ for every continuous $f$`, '$0$ whenever $C$ is closed', `$\\int_{a}^{b} f(z(t))\\,z^{\\prime}(t)\\,dt$`],
        answer: 3,
        explanation: 'Step 1: Multiply the field value by complex velocity $z^{\\prime}(t)$, not its modulus. Step 2: Reject the modulus form, which belongs to scalar arc-length integrals. Step 3: Reject universal endpoint and zero claims, which need antiderivatives or analyticity.'
      },
      {
        // PYQ-pattern — ML bound estimate on a circular arc (rephrased, values changed)
        q: 'If $|f(z)| \\le 5$ on a contour $C$ of length $2$, then $|\\int_{C} f(z)\\,dz|$ is at most:',
        options: [`$5$`, `$10$`, `$2$`, `$25$`],
        answer: 1,
        explanation: 'Step 1: Identify $M = 5$ and $L = 2$ in the ML inequality. Step 2: Multiply to get the ceiling $ML = 10$. Step 3: Note the bound is not generally sharp and larger lengths scale it linearly.'
      },
      {
        q: 'If $f$ owns an antiderivative $F$ with $F^{\\prime} = f$ on $D$, then for $C$ in $D$ from $z_{0}$ to $z_{1}$:',
        options: [`$\\int_{C} f(z)\\,dz = F(z_{0}) - F(z_{1})$`, `$\\int_{C} f(z)\\,dz = 0$ only when $z_{0} = z_{1} = 0$`, `$\\int_{C} f(z)\\,dz = F(z_{1}) - F(z_{0})$`, 'Path always matters and endpoints are irrelevant'],
        answer: 2,
        explanation: 'Step 1: Apply the complex fundamental theorem directly to the endpoint pair. Step 2: Check orientation so the final antiderivative minus the initial one appears. Step 3: Deduce closed loops vanish as the special case $z_{1} = z_{0}$.'
      },
      {
        q: 'The integral $\\oint_{|z|=1} \\bar{z}\\,dz$ equals:',
        options: [`$2\\pi i$`, `$0$`, `$-2\\pi i$`, `$\\pi$`],
        answer: 0,
        explanation: 'Step 1: Parametrize $z = e^{i\\theta}$ so $\\bar{z} = e^{-i\\theta}$ and $dz = ie^{i\\theta}\\,d\\theta$. Step 2: Multiply to get integrand $i\\,d\\theta$ independent of $\\theta$. Step 3: Integrate $\\int_{0}^{2\\pi} i\\,d\\theta = 2\\pi i$, nonzero because $\\bar{z}$ is nowhere analytic.'
      }
    ]
  },
  // ---------------------------------------------------------------- 7.4
  {
    sectionId: 'engmath-ch7-s4',
    readingTime: 9,
    intro: 'Cauchy theorem promotes path independence from antiderivatives to all analytic functions on simply connected domains. Its integral formula then recovers interior values from boundary data and forces infinite differentiability. This section states the theorem, the deformation principle and the formula with its derivative extension.',
    objectives: [
      'Apply Cauchy theorem and deform contours around holes correctly',
      'Evaluate interior values and derivatives with Cauchy integral formulas',
      'Infer Liouville boundedness consequences and Taylor existence preview'
    ],
    concepts: [
      {
        term: 'Cauchy integral theorem',
        kind: 'theorem',
        statement: 'If $f$ is **analytic** on and inside a simple closed contour $C$, then $\\oint_{C} f(z)\\,dz = 0$, coded as `closed_analytic_zero`. Simple connectivity of the interior is essential. The result converts many loop integrals to zero on sight.',
        detail: 'Splitting into real and imaginary parts and applying Green theorem with Cauchy-Riemann shows both real integrals vanish. The hypothesis must cover the full interior: one interior singularity voids the conclusion. Disks and rectangles are the standard safe domains.'
      },
      {
        term: 'Contour deformation principle',
        kind: 'method',
        statement: 'When $f$ is analytic in the region between two closed contours, the **deformation** principle says integrals over both are equal after orientation matching, tracked by `deform_without_crossing`. A complicated outer loop can shrink to a small circle around an isolated singularity. Crossing a singularity changes the value by the trapped residue.',
        detail: 'The proof joins the contours with a cut, applies Cauchy theorem to the simply connected cut region and cancels the cut contributions. Keyhole and indented paths are systematic deformation tools. Always preserve positive orientation on the outer piece and negative on inner holes.'
      },
      {
        term: 'Cauchy integral formula',
        kind: 'theorem',
        statement: 'For $f$ analytic on and inside positively oriented $C$ and $z_{0}$ inside $C$, the **formula** $f(z_{0}) = \\frac{1}{2\\pi i}\\oint_{C} f(z)/(z - z_{0})\\,dz$ recovers interior values from boundary data via `boundary_to_interior`. The denominator must be linear with a single interior zero.',
        detail: 'Deform $C$ to a tiny circle around $z_{0}$ where $f(z) \\approx f(z_{0})$, then $\\oint dz/(z - z_{0}) = 2\\pi i$ factors out. Points outside $C$ give zero because the integrand remains analytic inside. The formula exhibits analytic functions as infinitely rigid: boundary values fix the interior.'
      },
      {
        term: 'Derivatives from the boundary',
        kind: 'theorem',
        statement: 'Under the same hypotheses, **derivatives** obey $f^{(n)}(z_{0}) = \\frac{n!}{2\\pi i}\\oint_{C} f(z)/(z - z_{0})^{n+1}\\,dz$ computed as `nth_derivative_formula`. Hence every analytic function owns derivatives of all orders. Estimates from this representation bound growth by boundary maxima.',
        detail: 'Differentiation under the integral sign is legitimate because the kernel is smooth away from $z_{0}$. The factorial growth explains why Taylor coefficients carry $1/n!$ normalization. Cauchy estimates $|f^{(n)}(z_{0})| \\le n!M/R^{n}$ follow by ML bounding on a circle of radius $R$.'
      },
      {
        term: 'Liouville preview and Taylor promise',
        kind: 'insight',
        statement: 'The **Liouville** observation that bounded entire functions are constant follows by letting $R \\to \\infty$ in the derivative estimate with `R_to_infinity`. It also promises Taylor expansion: analyticity at $z_{0}$ guarantees a convergent power series nearby. Poles and essential points are exactly where the promise breaks.',
        detail: 'If $|f| \\le M$ on all of $\\mathbb{C}$, then $|f^{\\prime}(z_{0})| \\le M/R \\to 0$ for every center, forcing constant behavior. The fundamental theorem of algebra is a one-line corollary. Full series machinery belongs to the next chapter on Taylor and Laurent forms.'
      }
    ],
    examples: [
      {
        title: 'Apply Cauchy theorem to an entire integrand',
        problem: 'Evaluate $\\oint_{C} (z^{3} + 2z)\\,dz$ where $C$ is $|z| = 5$ positively oriented.',
        steps: [
          { label: 'Step 1', text: 'The integrand is a polynomial, hence entire with no singularities anywhere. The interior of $|z| = 5$ is simply connected and fully covered.\n```text\nintegrand entire -> Cauchy theorem gives 0 directly\n```' },
          { label: 'Step 2', text: 'Cauchy integral theorem applies immediately: the closed integral of an analytic function over a loop with analytic interior vanishes.' },
          { label: 'Step 3', text: 'No parametrization is needed. Deforming $C$ to any other loop would preserve the zero value.' }
        ],
        result: '$\\oint_{C} (z^{3} + 2z)\\,dz = 0$ by direct application of Cauchy integral theorem.'
      },
      {
        title: 'Recover a value with Cauchy formula',
        problem: 'Evaluate $\\oint_{C} e^{z}/(z - 1)\\,dz$ where $C$ is $|z| = 3$ positively oriented.',
        steps: [
          { label: 'Step 1', text: 'Set $f(z) = e^{z}$, analytic everywhere, and $z_{0} = 1$ inside $|z| = 3$. The integrand matches $f(z)/(z - z_{0})$ exactly.' },
          { label: 'Step 2', text: 'Cauchy formula gives $\\oint_{C} f(z)/(z - 1)\\,dz = 2\\pi i\\,f(1) = 2\\pi i\\,e$.' },
          { label: 'Step 3', text: 'Had $z_{0}$ been outside, for instance $z_{0} = 5$, the same integral would vanish by Cauchy theorem. Location relative to $C$ decides everything.\n```text\nz0 = 1 inside |z| = 3 -> 2*pi*i*e; outside -> 0\n```' }
        ],
        result: 'Integral equals $2\\pi i\\,e$. Moving the pole outside $C$ would change the answer to $0$.'
      }
    ],
    keyTakeaways: [
      'Cauchy theorem $\\oint_{C} f = 0$ needs analyticity on and inside a simple closed $C$.',
      'Deformation preserves values while the moving contour avoids singularities.',
      'Formula $f(z_{0}) = \\frac{1}{2\\pi i}\\oint_{C} f(z)/(z - z_{0})\\,dz$ rebuilds interior from boundary.',
      'Derivative formula $f^{(n)}(z_{0}) = \\frac{n!}{2\\pi i}\\oint_{C} f(z)/(z - z_{0})^{n+1}\\,dz$ forces infinite differentiability and Liouville rigidity.'
    ],
    quiz: [
      {
        q: 'If $f$ is analytic on and inside simple closed $C$, then $\\oint_{C} f(z)\\,dz$ equals:',
        options: [`$2\\pi i$`, '$f$ at the center', `$0$`, 'The length of $C$'],
        answer: 2,
        explanation: 'Step 1: Verify the hypothesis covers the full interior with no singularities. Step 2: Apply Cauchy integral theorem to conclude vanishing. Step 3: Distinguish from the formula case where a denominator zero sits inside.'
      },
      {
        // PYQ-pattern — Cauchy integral formula evaluation (rephrased, values changed)
        q: 'For $C$: $|z| = 3$ positively oriented, $\\oint_{C} e^{z}/(z - 1)\\,dz$ equals:',
        options: [`$2\\pi i\\,e$`, `$0$`, `$2\\pi i$`, `$e$`],
        answer: 0,
        explanation: 'Step 1: Identify $f(z) = e^{z}$ analytic and $z_{0} = 1$ inside the circle. Step 2: Apply $\\oint f(z)/(z - z_{0}) = 2\\pi i\\,f(z_{0})$. Step 3: Evaluate $f(1) = e$ to obtain $2\\pi i\\,e$.'
      },
      {
        q: 'Deforming $C_{1}$ into $C_{2}$ without crossing singularities preserves $\\oint f$ because:',
        options: ['Lengths of the contours are equal', 'Both contours share the same center', 'Parametrizations can always be matched term by term', '$f$ remains analytic in the region swept by the deformation'],
        answer: 3,
        explanation: 'Step 1: Join the contours by a cut to form a simply connected combined region. Step 2: Apply Cauchy theorem where analyticity holds throughout the swept zone. Step 3: Cancel cut contributions to leave equality of the two loop integrals.'
      },
      {
        q: 'If $g$ is entire and bounded with $|g(z)| \\le 7$ for all $z$, then $g$ must be:',
        options: ['$0$ everywhere', 'Constant by Liouville reasoning', 'A nonconstant polynomial', '$e^{z}$ up to scaling'],
        answer: 1,
        explanation: 'Step 1: Bound $g^{\\prime}(z_{0})$ by $7/R$ on $|z - z_{0}| = R$ via Cauchy estimates. Step 2: Let $R \\to \\infty$ to force every derivative to zero. Step 3: Conclude $g$ is constant, though not necessarily zero.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Cauchy theory to Liouville and the fundamental theorem',
        blocks: [
          {
            kind: 'theorem',
            body: 'If $f$ is analytic on and inside a positively oriented simple closed contour $C$, then $\\oint_{C} f(z) \\, dz = 0$ and $f(a) = (2\\pi i)^{-1} \\oint_{C} f(z)/(z-a) \\, dz$ for $a$ inside. Differentiation under the integral gives $f^{(n)}(a) = n! (2\\pi i)^{-1} \\oint_{C} f(z)/(z-a)^{n+1} \\, dz$ and the **Cauchy estimates** $|f^{(n)}(a)| \\leq n! M R^{-n}$ when $|f| \\leq M$ on $|z - a| = R$. Analyticity therefore propagates to all orders with radius reaching the nearest singularity. Deformation invariance lets $C$ shrink or expand across analytic regions.'
          },
          {
            kind: 'proof',
            body: 'Goursat subdivides the interior into squares where the modulus of $\\oint f$ is controlled by $\\max |f(z) - f(z_{0}) - f^{{\\prime}}(z_{0})(z-z_{0})|$ times area, forcing the loop integral to vanish as meshes refine. For the formula, excise a small circle $|z - a| = \\epsilon$: deformation gives $\\oint_{C} f(z)/(z-a) \\, dz = \\int_{0}^{2\\pi} f(a + \\epsilon e^{i\\theta}) i \\, d\\theta$, and continuity sends the right side to $2\\pi i f(a)$ as $\\epsilon \\to 0$ by the $ML$ bound $|f(a+\\epsilon e^{i\\theta}) - f(a)| \\cdot 2\\pi$. Uniform convergence on compact subdisks justifies differentiating in $a$.'
          },
          {
            kind: 'application',
            body: '**Liouville** follows in one line: bounded entire $f$ with $|f| \\leq M$ has $|f^{{\\prime}}(a)| \\leq M/R$ for every $R$, hence $f^{{\\prime}} \\equiv 0$. The fundamental theorem of algebra is a corollary: nonconstant polynomial $p$ with no zero makes $1/p$ bounded entire, since $|p(z)| \\to \\infty$, contradicting Liouville. Morera provides the converse: continuous $f$ with vanishing loop integrals is analytic. Maximum modulus and open mapping extend the rigidity to global geometry.'
          },
        ]
      }
    ],
  }
]
