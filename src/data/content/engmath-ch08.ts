import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 8: Complex Variables II
// Sections 8.1 – 8.4. Master study content.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh08Content: SectionContent[] = [
  // ---------------------------------------------------------------- 8.1
  {
    sectionId: 'engmath-ch8-s1',
    readingTime: 9,
    intro: 'Power series extend Taylor polynomials to infinite order, while Laurent series admit negative powers to describe behavior near singularities. The gap between radius of convergence and annulus of convergence decides which expansion is valid where. This section builds both series and the classification of isolated singularities that follows from Laurent coefficients.',
    objectives: [
      'Determine radius of convergence and expand standard functions in Taylor form',
      'Construct Laurent expansions on annuli centered at singularities',
      'Classify isolated singularities as removable, pole or essential from principal parts'
    ],
    concepts: [
      {
        term: 'Taylor series of analytic functions',
        kind: 'theorem',
        statement: 'If $f$ is analytic at $z_{0}$, its **Taylor** series $f(z) = \\sum_{n=0}^{\\infty} a_{n}(z - z_{0})^{n}$ with $a_{n} = f^{(n)}(z_{0})/n!$ converges in the largest open disk free of singularities, coded as `taylor_disk`. Standard seeds include $e^{z}$, $\\sin z$ and $1/(1 - z)$. Termwise differentiation preserves the radius.',
        detail: 'The radius equals the distance from $z_{0}$ to the nearest singularity. For $1/(1 - z)$ at $z_{0} = 0$ the radius is $1$ because of the pole at $z = 1$. Entire functions enjoy infinite radius everywhere.'
      },
      {
        term: 'Radius of convergence',
        kind: 'method',
        statement: 'The **radius** $R$ follows from the ratio test $R = \\lim |a_{n}/a_{n+1}|$ or the root test $1/R = \\limsup |a_{n}|^{1/n}$, computed via `ratio_or_root`. Inside $|z - z_{0}| < R$ convergence is absolute, while outside it diverges. Behavior on $|z - z_{0}| = R$ needs separate checks.',
        detail: 'Ratio form suits factorials and exponentials, while root form suits powers with $n$th powers. A frequent slip is applying the ratio to the variable part instead of coefficients. The disk of convergence always reaches the closest singularity.'
      },
      {
        term: 'Laurent series on an annulus',
        kind: 'definition',
        statement: 'On an **annulus** $r < |z - z_{0}| < R$ the Laurent form $f(z) = \\sum_{n=-\\infty}^{\\infty} a_{n}(z - z_{0})^{n}$ splits into an analytic part plus a principal part of negative powers, stored as `negative_plus_nonneg`. Coefficients obey $a_{n} = \\frac{1}{2\\pi i}\\oint_{C} f(z)/(z - z_{0})^{n+1}\\,dz$. Different annuli around the same center give different expansions.',
        detail: 'The same rational function expands differently inside, between and outside its poles. Partial fractions isolate each pole contribution before geometric expansion. Choosing the wrong annulus is the dominant source of Laurent mistakes.'
      },
      {
        term: 'Isolated singularities',
        kind: 'definition',
        statement: 'A point $z_{0}$ is an **isolated singularity** when $f$ is analytic in some punctured disk $0 < |z - z_{0}| < \\delta$, flagged by `punctured_disk`. Non-isolated cases such as branch points of $\\log z$ fall outside this taxonomy. Classification reads directly from the Laurent principal part.',
        detail: 'Poles of rational maps, removable gaps like $\\sin z/z$ at the origin and essential points like $e^{1/z}$ are all isolated. Cluster points of poles, for instance from $1/\\sin(1/z)$ at the origin, are not isolated and need separate treatment.'
      },
      {
        term: 'Removable versus pole versus essential',
        kind: 'method',
        statement: 'The principal part decides the type: no negative powers means **removable**, finitely many with $a_{-m} \\ne 0$ means a **pole** of order $m$ via `finite_principal`, and infinitely many means **essential**. Limits confirm the reading: finite nonzero limit signals removable after filling, blow-up signals a pole, and wild oscillation signals essential.',
        detail: 'Riemann removable theorem fills the gap with the limiting value. Pole order equals the smallest $m$ making $(z - z_{0})^{m}f(z)$ analytic and nonzero at $z_{0}$. Casorati-Weierstrass density and Picard strength describe essential turbulence near the point.'
      }
    ],
    examples: [
      {
        title: 'Laurent expansion of a rational function in two annuli',
        problem: 'Expand $f(z) = 1/[(z - 1)(z - 3)]$ centered at $0$ for (a) $1 < |z| < 3$ and (b) $|z| > 3$.',
        steps: [
          { label: 'Step 1', text: 'Split by partial fractions: $f(z) = \\frac{1}{2}[1/(z - 3) - 1/(z - 1)]$. Each term expands geometrically once its ratio has modulus below $1$.\n```text\nf = ($1/2$)[1/(z-3) - 1/(z-1)]; expand each geometrically\n```' },
          { label: 'Step 2', text: 'For $1 < |z| < 3$ write $1/(z - 3) = -(1/3)\\sum_{n=0}^{\\infty} (z/3)^{n}$ and $1/(z - 1) = (1/z)\\sum_{n=0}^{\\infty} (1/z)^{n}$. Combining gives $f(z) = -\\frac{1}{2}\\sum_{n=0}^{\\infty} z^{n}/3^{n+1} - \\frac{1}{2}\\sum_{n=1}^{\\infty} z^{-n}$.' },
          { label: 'Step 3', text: 'For $|z| > 3$ both ratios invert: $1/(z - 3) = (1/z)\\sum_{n=0}^{\\infty} (3/z)^{n}$ and $1/(z - 1) = (1/z)\\sum_{n=0}^{\\infty} (1/z)^{n}$. Subtracting cancels the $1/z$ term and leaves only $z^{-n}$ with $n \\ge 2$.' }
        ],
        result: 'Inside $1 < |z| < 3$ the expansion mixes $z^{n}$ and $z^{-n}$, while outside $|z| > 3$ only negative powers $z^{-n}$ with $n \\ge 2$ survive.'
      },
      {
        title: 'Classify three singularities from Laurent form',
        problem: 'Classify the isolated singularity at $z = 0$ for (a) $\\sin z/z$, (b) $1/z^{2}(1 - z)$ and (c) $e^{1/z}$.',
        steps: [
          { label: 'Step 1', text: 'For (a), $\\sin z/z = 1 - z^{2}/6 + z^{4}/120 - \\cdots$ has no negative powers, so the singularity is removable with value $1$ after filling.' },
          { label: 'Step 2', text: 'For (b), $1/z^{2}(1 - z) = z^{-2} + z^{-1} + 1 + z + \\cdots$ has principal part $z^{-2} + z^{-1}$ with $a_{-2} \\ne 0$, so $z = 0$ is a pole of order $2$.' },
          { label: 'Step 3', text: 'For (c), $e^{1/z} = \\sum_{n=0}^{\\infty} z^{-n}/n!$ has infinitely many negative powers, so the singularity is essential with dense image near $0$.\n```text\n(a) no z^-n -> removable; (b) max m=2 -> pole 2; (c) infinite -> essential\n```' }
        ],
        result: '(a) removable, (b) pole of order $2$, (c) essential, read directly from the count of negative-power terms.'
      }
    ],
    keyTakeaways: [
      'Taylor $f(z) = \\sum a_{n}(z - z_{0})^{n}$ with $a_{n} = f^{(n)}(z_{0})/n!$ converges up to the nearest singularity.',
      'Radius from $R = \\lim |a_{n}/a_{n+1}|$ or $1/R = \\limsup |a_{n}|^{1/n}$ bounds absolute convergence.',
      'Laurent $\\sum_{n=-\\infty}^{\\infty} a_{n}(z - z_{0})^{n}$ on $r < |z - z_{0}| < R$ changes with the chosen annulus.',
      'Principal-part count gives removable (none), pole of order $m$ (finite) or essential (infinite).'
    ],
    quiz: [
      {
        q: 'The Taylor radius of $1/(1 - z)$ centered at $0$ is $1$ because:',
        options: [`$1$ is the distance to the nearest singularity at $z = 1$`, 'Coefficients grow like $n!$', 'The function is entire', 'Laurent series always have radius $1$'],
        answer: 0,
        explanation: 'Step 1: Locate the pole at $z = 1$ one unit from the center. Step 2: Recall the Taylor disk extends exactly to the closest singularity. Step 3: Confirm $\\sum z^{n}$ diverges for $|z| > 1$ by the geometric ratio.'
      },
      {
        q: 'The Laurent expansion of $1/[(z-1)(z-3)]$ valid for $1 < |z| < 3$ contains:',
        options: ['Only nonnegative powers of $z$', 'Only negative powers of $z$', 'Both $z^{n}$ with $n \\ge 0$ and $z^{-n}$ with $n \\ge 1$', 'No powers of $z$ at all'],
        answer: 2,
        explanation: 'Step 1: Expand $1/(z-3)$ in $z/3$ for the outer-safe term. Step 2: Expand $1/(z-1)$ in $1/z$ for the inner pole. Step 3: Combine to see mixed annulus structure with both directions present.'
      },
      {
        // PYQ-pattern: GATE 2011 — classification of an isolated singularity (rephrased, values changed)
        q: 'The singularity of $e^{1/z}$ at $z = 0$ is:',
        options: ['Removable', 'Essential', 'A pole of order $1$', 'A pole of order $2$'],
        answer: 1,
        explanation: 'Step 1: Write $e^{1/z} = \\sum_{n=0}^{\\infty} z^{-n}/n!$ valid for $z \\ne 0$. Step 2: Count infinitely many nonzero $a_{-n} = 1/n!$. Step 3: Apply the principal-part taxonomy to conclude essential behavior.'
      },
      {
        q: 'If $(z - 2)^{3}f(z)$ is analytic and nonzero at $z = 2$ while lower powers still blow up, then $z = 2$ is:',
        options: ['Removable', 'Essential', 'Not isolated', 'A pole of order $3$'],
        answer: 3,
        explanation: 'Step 1: Recall order is the smallest $m$ clearing the blow-up. Step 2: Test $m = 1$ and $m = 2$ fail while $m = 3$ succeeds. Step 3: Conclude a pole of order $3$ with $a_{-3} \\ne 0$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 8.2
  {
    sectionId: 'engmath-ch8-s2',
    readingTime: 8,
    intro: 'Residues distill a Laurent expansion to the single coefficient that survives closed-loop integration. Simple poles admit a one-line shortcut, higher-order poles need differentiation, and essential points force series reading. This section derives each residue recipe and shows when to switch between them.',
    objectives: [
      'Compute residues at simple poles via cover-up and limit formulas',
      'Apply the higher-order pole differentiation formula without index slips',
      'Extract residues at essential points from known series'
    ],
    concepts: [
      {
        term: 'Residue as surviving coefficient',
        kind: 'definition',
        statement: 'The **residue** $\\mathrm{Res}(f, z_{0}) = a_{-1}$ is the coefficient of $(z - z_{0})^{-1}$ in the Laurent expansion, coded as `coeff_minus_one`. Only this term integrates to $2\\pi i$ around $z_{0}$. All other integer powers integrate to zero on closed loops.',
        detail: 'For $f(z) = \\sum a_{n}(z - z_{0})^{n}$ termwise integration kills every $n \\ne -1$ because each owns an antiderivative. The residue is therefore the entire content of small-loop integration. Simple, multiple and essential cases differ only in how $a_{-1}$ is reached.'
      },
      {
        term: 'Simple-pole shortcut',
        kind: 'method',
        statement: 'At a **simple pole** the residue is $\\lim_{z \\to z_{0}} (z - z_{0})f(z)$, implemented as `limit_cover_up`. For a quotient $p(z)/q(z)$ with $q(z_{0}) = 0$ and $q^{\\prime}(z_{0}) \\ne 0$ this becomes $p(z_{0})/q^{\\prime}(z_{0})$. No differentiation beyond the limit is needed.',
        detail: 'Multiplying by $(z - z_{0})$ cancels the lone principal term and leaves $a_{-1}$ plus vanishing factors. The quotient form follows by lHopital reasoning on $(z - z_{0})/q(z)$. It handles distinct linear factors in one step each.'
      },
      {
        term: 'Higher-order pole formula',
        kind: 'theorem',
        statement: 'At a pole of order $m$ the **formula** $\\mathrm{Res}(f, z_{0}) = \\frac{1}{(m-1)!}\\lim_{z \\to z_{0}} \\frac{d^{m-1}}{dz^{m-1}}[(z - z_{0})^{m}f(z)]$ applies, coded as `diff_m_minus_1`. The factorial and differentiation order are both $m - 1$. Skipping the $(z - z_{0})^{m}$ clearing step is the standard failure mode.',
        detail: 'Clearing the pole leaves an analytic $g(z)$ whose Taylor coefficient $g^{(m-1)}(z_{0})/(m-1)!$ equals $a_{-1}$. For $m = 2$ this is a single derivative of $(z - z_{0})^{2}f(z)$. Higher $m$ values grow algebraically but follow the same pattern.'
      },
      {
        term: 'Residues from partial fractions',
        kind: 'method',
        statement: 'Splitting into **partial fractions** exposes each simple pole as $A/(z - z_{0})$ where $A$ is the residue, read by `partial_A`. Repeated linear factors produce chains whose top coefficient needs the higher-order formula. This route suits rational maps with factorable denominators.',
        detail: 'For distinct poles the cover-up value $A$ from $(z - z_{0})f(z)$ at $z_{0}$ is both the fraction constant and the residue. Grouping complex conjugate pairs keeps arithmetic real. Always verify recombination before trusting the split.'
      },
      {
        term: 'Residues at essential points',
        kind: 'insight',
        statement: 'At an **essential** singularity no finite formula reaches $a_{-1}$, so residues come from multiplying known series via `series_multiply`. Expansions of $e^{w}$, $\\sin w$ and $1/(1 - w)$ with $w = 1/z$ are the usual seeds. Only the $z^{-1}$ term after multiplication matters.',
        detail: 'For $z^{2}e^{1/z}$ multiply $z^{2}$ by $\\sum z^{-n}/n!$ and pick the $n = 3$ contribution $1/6$. Truncation is safe once higher terms cannot produce $z^{-1}$. Removable points always have residue zero since $a_{-1} = 0$.'
      }
    ],
    derivations: [
      {
        title: 'Residue at a Simple Pole by Cover-Up Limit',
        statement: 'Derivation of $\\mathrm{Res}(f, z_{0}) = \\lim_{z \\to z_{0}}(z - z_{0})f(z) = \\frac{p(z_{0})}{q^{\\prime}(z_{0})}$ for a simple pole of $f = p/q$',
        prerequisites: [
          'Laurent coefficient $\\mathrm{Res}(f, z_{0}) = a_{-1}$ of $(z - z_{0})^{-1}$',
          'Simple pole shape with one surviving principal term',
          'Limit of an analytic remainder vanishes at $z_{0}$',
        ],
        steps: [
          {
            label: 'Step 1: Write the Laurent shape at a simple pole',
            formula: '$$f(z) = \\frac{a_{-1}}{z - z_{0}} + a_{0} + a_{1}(z - z_{0}) + \\cdots$$',
            explanation: 'By definition a simple pole has exactly one negative power, so the principal part is a single term $a_{-1}$ over $z - z_{0}$ plus a Taylor-like analytic tail. This expansion works because Laurent theory guarantees convergence on a punctured neighbourhood. All higher negative powers are absent, which is what makes the pole simple.',
          },
          {
            label: 'Step 2: Clear the pole by multiplication',
            formula: '$$(z - z_{0})f(z) = a_{-1} + a_{0}(z - z_{0}) + \\cdots$$',
            explanation: 'Multiplying by $z - z_{0}$ cancels the lone denominator and shifts every analytic term up by one power. This works because multiplication distributes across the uniformly convergent series on compact subannuli. The residue $a_{-1}$ becomes the constant term while everything else carries a vanishing factor.',
          },
          {
            label: 'Step 3: Take the limit to isolate the residue',
            formula: '$$a_{-1} = \\lim_{z \\to z_{0}}(z - z_{0})f(z)$$',
            explanation: 'Letting $z$ tend to $z_{0}$ kills every term containing a positive power of $z - z_{0}$ by continuity. This limit works because the cleared function extends analytically across $z_{0}$ with value $a_{-1}$ there. Hence the residue is read without expanding the full series.',
          },
          {
            label: 'Step 4: Specialise to a quotient with a simple zero',
            formula: '$$\\mathrm{Res}\\left(\\frac{p}{q}, z_{0}\\right) = \\frac{p(z_{0})}{q^{\\prime}(z_{0})}$$',
            explanation: 'Write $q(z) = q^{\\prime}(z_{0})(z - z_{0}) + \\cdots$ near its simple zero, so $(z - z_{0})$ over $q(z)$ tends to $1$ over $q^{\\prime}(z_{0})$. This works because the linear Taylor term dominates at a simple zero while $p$ stays continuous with value $p(z_{0})$. The cover-up limit therefore collapses to the ratio of the numerator value to the denominator derivative.',
          },
        ],
        result: 'At a simple pole, $\\mathrm{Res}(f, z_{0}) = \\lim_{z \\to z_{0}}(z - z_{0})f(z)$, and for $p/q$ this is $\\frac{p(z_{0})}{q^{\\prime}(z_{0})}$, meaning one limit replaces the whole Laurent expansion.',
      },
    ],
    examples: [
      {
        title: 'Residues of a three-pole rational function',
        problem: 'Find all finite residues of $f(z) = z/[(z - 1)(z - 2)(z - 3)]$.',
        steps: [
          { label: 'Step 1', text: 'All poles are simple. At $z = 1$ the cover-up gives $(1)/[(1 - 2)(1 - 3)] = 1/2$, so $\\mathrm{Res}(f, 1) = 1/2$.\n```text\nRes at 1: 1/[(1-2)(1-3)] = $1/2$\n```' },
          { label: 'Step 2', text: 'At $z = 2$ the value is $2/[(2 - 1)(2 - 3)] = -2$, so $\\mathrm{Res}(f, 2) = -2$. At $z = 3$ it is $3/[(3 - 1)(3 - 2)] = 3/2$, so $\\mathrm{Res}(f, 3) = 3/2$.' },
          { label: 'Step 3', text: 'Check $1/2 - 2 + 3/2 = 0$, consistent with decay $O(z^{-2})$ at infinity whose residue at infinity balances the finite sum to zero.' }
        ],
        result: 'Residues are $1/2$ at $z = 1$, $-2$ at $z = 2$ and $3/2$ at $z = 3$, summing to $0$.'
      },
      {
        title: 'Double-pole residue with differentiation',
        problem: 'Compute $\\mathrm{Res}(f, 1)$ for $f(z) = e^{z}/(z - 1)^{2}$.',
        steps: [
          { label: 'Step 1', text: 'Pole order is $m = 2$ since $(z - 1)^{2}$ clears the denominator to $e^{z}$, analytic and nonzero at $z = 1$.' },
          { label: 'Step 2', text: 'Apply $\\mathrm{Res} = \\frac{d}{dz}[(z - 1)^{2}f(z)]$ at $z = 1$: derivative of $e^{z}$ is $e^{z}$, valued $e$ at $z = 1$.' },
          { label: 'Step 3', text: 'Thus residue equals $e$. The simple-pole shortcut without differentiation would wrongly give infinity here.\n```text\nm = 2: d/dz[e^z] at 1 = e -> residue e\n```' }
        ],
        result: '$\\mathrm{Res}(f, 1) = e$. One differentiation of the cleared function captures the $a_{-1}$ coefficient.'
      }
    ],
    keyTakeaways: [
      'Residue $a_{-1}$ is the only Laurent coefficient contributing to small-loop integrals.',
      'Simple poles use $\\lim (z - z_{0})f(z)$ or $p(z_{0})/q^{\\prime}(z_{0})$ for quotients.',
      'Order $m$ poles use $\\frac{1}{(m-1)!}\\lim d^{m-1}/dz^{m-1}[(z - z_{0})^{m}f(z)]$.',
      'Essential residues come from series multiplication; removable points have residue zero.'
    ],
    quiz: [
      {
        q: 'The residue of $f(z) = 1/(z - 4)$ at $z = 4$ equals:',
        options: [`$0$`, `$4$`, `$2\\pi i$`, `$1$`],
        answer: 3,
        explanation: 'Step 1: Recognize a simple pole with cleared value $(z-4)f = 1$. Step 2: Take the limit $1$ at $z = 4$. Step 3: Distinguish the residue $1$ from the loop integral $2\\pi i$ that multiplies it.'
      },
      {
        // PYQ-pattern: GATE 2009 — residue at a higher-order pole (rephrased, values changed)
        q: 'For $f(z) = e^{z}/(z - 1)^{2}$, $\\mathrm{Res}(f, 1)$ equals:',
        options: [`$0$`, `$e$`, `$1$`, `$2e$`],
        answer: 1,
        explanation: 'Step 1: Identify order $m = 2$ from the squared factor. Step 2: Differentiate the cleared $e^{z}$ once to get $e^{z}$. Step 3: Evaluate at $z = 1$ to obtain $e$.'
      },
      {
        q: 'For $p(z)/q(z)$ with simple zero $q(z_{0}) = 0$ and $q^{\\prime}(z_{0}) \\ne 0$, the residue equals:',
        options: [`$p(z_{0})q(z_{0})$`, `$p^{\\prime}(z_{0})/q(z_{0})$`, `$p(z_{0})/q^{\\prime}(z_{0})$`, '$0$ always'],
        answer: 2,
        explanation: 'Step 1: Factor $q(z) \\approx q^{\\prime}(z_{0})(z - z_{0})$ near the simple zero. Step 2: Cancel $(z - z_{0})$ against the cover-up factor. Step 3: Read the surviving ratio $p(z_{0})/q^{\\prime}(z_{0})$.'
      },
      {
        q: 'The residue of $z^{2}e^{1/z}$ at $z = 0$ equals:',
        options: [`$\\frac{1}{6}$`, `$1$`, `$\\frac{1}{2}$`, `$0$`],
        answer: 0,
        explanation: 'Step 1: Expand $e^{1/z} = \\sum z^{-n}/n!$ for $z \\ne 0$. Step 2: Multiply by $z^{2}$ to shift powers upward by two. Step 3: Isolate the $z^{-1}$ term from $n = 3$ with coefficient $1/6$.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Residues as contour functionals',
        blocks: [
          {
            kind: 'theorem',
            body: 'If $f(z) = \\sum_{n} a_{n} (z - z_{0})^{n}$ is the Laurent expansion on a punctured neighborhood, then $\\mathrm{Res}(f, z_{0}) = a_{-1}$. For a simple pole $\\mathrm{Res}(f,z_{0}) = \\lim_{z \\to z_{0}} (z-z_{0}) f(z)$, and for $g/h$ with simple zero of $h$ at $z_{0}$ the value is $g(z_{0})/h^{{\\prime}}(z_{0})$. For a pole of order $m$ the residue is $(m-1)!^{-1} \\lim_{z \\to z_{0}} d^{m-1}/dz^{m-1}[(z-z_{0})^{m} f(z)]$. Partial fractions reduce rational functions to these local models plus an entire part invisible to loops.'
          },
          {
            kind: 'derivation',
            body: 'Termwise integration is legitimate on compact subannuli by uniform convergence: $\\oint_{|z-z_{0}|=r} (z-z_{0})^{n} \\, dz$ vanishes for $n \\neq -1$ because $(z-z_{0})^{n+1}/(n+1)$ is an antiderivative, while $n = -1$ parametrizes as $\\int_{0}^{2\\pi} i \\, d\\theta = 2\\pi i$. Hence only $a_{-1}$ survives and $\\oint f = 2\\pi i \\, a_{-1}$. The higher pole formula differentiates the Taylor expansion of $(z-z_{0})^{m} f(z)$, whose $(m-1)$-st coefficient is $a_{-1}$. Removable singularities have zero residue since $a_{-1} = 0$.'
          },
          {
            kind: 'example',
            heading: 'An essential singularity hides infinitely many terms',
            body: 'For $e^{1/z} = \\sum_{n=0}^{\\infty} 1/(n! z^{n})$ the residue at $0$ is $1$, the $n = 1$ coefficient, despite the singularity being neither removable nor a pole. By contrast $e^{1/z^{2}} = \\sum 1/(n! z^{2n})$ has only even negative powers, so its residue is $0$ even though the singularity is wilder. Casorati Weierstrass says the image of any punctured neighborhood is dense, and Picard sharpens this to all but at most one value. Residues distill order from chaos to a single number.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 8.3
  {
    sectionId: 'engmath-ch8-s3',
    readingTime: 9,
    intro: 'Residue theorem fuses local Laurent data into global loop integrals: a closed contour integral equals two pi i times the sum of enclosed residues. Jordan lemma extends the reach to oscillatory integrals over large arcs. This section states the theorem, bounds the arc and evaluates full-period trigonometric integrals by unit-circle conversion.',
    objectives: [
      'Apply $\\oint_{C} f = 2\\pi i \\sum \\mathrm{Res}$ with correct enclosed-pole accounting',
      'Verify Jordan lemma hypotheses and discard vanishing arcs',
      'Convert $\\int_{0}^{2\\pi} R(\\cos\\theta, \\sin\\theta)\\,d\\theta$ to a unit-circle contour'
    ],
    concepts: [
      {
        term: 'Residue theorem',
        kind: 'theorem',
        statement: 'If $f$ is analytic on and inside positively oriented $C$ except at isolated $z_{k}$ inside, then **$\\oint_{C} f(z)\\,dz = 2\\pi i\\sum_{k} \\mathrm{Res}(f, z_{k})$** via `two_pi_i_sum`. Poles on $C$ are excluded and need indentation. Orientation reversal conjugates the sign.',
        detail: 'Small circles around each singularity contribute $2\\pi i$ times their $a_{-1}$, while the connecting cuts cancel. Only enclosed poles count: exterior residues are irrelevant. Multiple loops multiply each residue by its winding number.'
      },
      {
        term: 'Enclosed versus exterior poles',
        kind: 'method',
        statement: 'Listing **enclosed** poles starts with solving the denominator and testing $|z_{k} - center| < R$, coded as `inside_test`. Boundary cases $|z_{k} - center| = R$ stop the theorem. A quick modulus comparison avoids the most common inclusion slip.',
        detail: 'For $|z| = 2$ the poles $z = 1$ and $z = -1$ are inside while $z = 3$ stays outside. Upper half-plane closures keep only $\\Im z_{k} > 0$. Sketching poles before summing prevents dropped or extra terms.'
      },
      {
        term: 'Jordan lemma',
        kind: 'theorem',
        statement: 'For $a > 0$ and $f(z) \\to 0$ uniformly on large semicircles, the **Jordan** bound $\\left|\\int_{C_{R}} e^{iaz}f(z)\\,dz\\right| \\le \\pi M_{R}/a$ with $M_{R} = \\max_{C_{R}}|f|$ drives arc integrals to zero, checked by `M_R_to_zero`. It needs the upper half-plane arc and $a > 0$. Decay $M_{R} \\to 0$ is the trigger.',
        detail: 'The estimate uses $\\sin\\theta \\ge 2\\theta/\\pi$ on $[0, \\pi/2]$ to dominate $e^{-aR\\sin\\theta}$. Rational $f$ with denominator degree exceeding numerator degree by at least one qualifies. Without the oscillatory factor the weaker ML bound may still suffice.'
      },
      {
        term: 'Closing the contour',
        kind: 'method',
        statement: 'To evaluate a real integral, **close** the real segment with an arc whose contribution vanishes, forming `real_plus_arc`. Upper closure suits $e^{iaz}$ with $a > 0$, while lower closure suits $a < 0$. Even rational functions close either way with ML estimates.',
        detail: 'The closed loop captures enclosed upper poles, and the vanishing arc leaves the real axis as the only surviving piece. Indenting around real-axis poles adds half-residue corrections. Choosing the wrong half-plane keeps the arc alive and breaks the computation.'
      },
      {
        term: 'Trigonometric integrals over full periods',
        kind: 'method',
        statement: 'Substitution $z = e^{i\\theta}$ turns **$\\int_{0}^{2\\pi} R(\\cos\\theta, \\sin\\theta)\\,d\\theta$** into $\\oint_{|z|=1} R((z + z^{-1})/2, (z - z^{-1})/2i)\\,dz/(iz)$ via `unit_circle_map`. Cosine and sine become $z$-rational, $d\\theta$ becomes $dz/(iz)$, and residues inside $|z| < 1$ finish the work.',
        detail: 'Denominators like $a + b\\cos\\theta$ with $a > |b|$ map to quadratic $z$-denominators with one root inside and one outside. Only the interior root contributes. The method requires a full $0$ to $2\\pi$ range; partial ranges need different tools.'
      }
    ],
    examples: [
      {
        title: 'Loop integral enclosing two of three poles',
        problem: 'Evaluate $\\oint_{|z|=2} dz/[(z - 1)(z + 1)(z - 3)]$ positively oriented.',
        steps: [
          { label: 'Step 1', text: 'Poles at $1$, $-1$ and $3$. Inside $|z| = 2$ are $1$ and $-1$; $z = 3$ remains outside and is ignored.\n```text\ninside |z|=2: 1, -1; outside: 3\n```' },
          { label: 'Step 2', text: 'Residues: at $1$ value $1/[(2)(-2)] = -1/4$; at $-1$ value $1/[(-2)(-4)] = 1/8$. Sum equals $-1/8$.' },
          { label: 'Step 3', text: 'Multiply by $2\\pi i$ to get $2\\pi i(-1/8) = -\\pi i/4$. Direct partial-fraction integration term by term agrees.' }
        ],
        result: 'Integral equals $-\\pi i/4$, with only the two interior residues contributing.'
      },
      {
        title: 'Full-period cosine denominator via unit circle',
        problem: 'Evaluate $\\int_{0}^{2\\pi} d\\theta/(5 + 4\\cos\\theta)$.',
        steps: [
          { label: 'Step 1', text: 'Set $z = e^{i\\theta}$ so $\\cos\\theta = (z + z^{-1})/2$ and $d\\theta = dz/(iz)$. The integral becomes $\\oint_{|z|=1} 2\\,dz/[i(2z^{2} + 5z + 2)]$.' },
          { label: 'Step 2', text: 'Denominator $2z^{2} + 5z + 2 = (2z + 1)(z + 2)$ has roots $-1/2$ inside and $-2$ outside. Residue at $-1/2$ of $2/[i(2z + 1)(z + 2)]$ equals $2/[i(2)(3/2)] = 2/(3i)$.' },
          { label: 'Step 3', text: 'Multiply by $2\\pi i$ to get $2\\pi i \\cdot 2/(3i) = 4\\pi/3$ divided by the extra $2$ from clearing, leaving $2\\pi/3$.\n```text\ninside root -$1/2$ -> residue 2/(3i); *2pi*i -> 2pi/3\n```' }
        ],
        result: '$\\int_{0}^{2\\pi} d\\theta/(5 + 4\\cos\\theta) = 2\\pi/3$. Only the interior root $z = -1/2$ contributed.'
      }
    ],
    keyTakeaways: [
      'Residue theorem $\\oint_{C} f = 2\\pi i\\sum \\mathrm{Res}$ sums only enclosed isolated singularities.',
      'Inside testing $|z_{k} - center| < R$ (or $\\Im z_{k} > 0$ for half-planes) filters the pole list.',
      'Jordan bound with $M_{R} \\to 0$ kills upper arcs for $e^{iaz}$ with $a > 0$.',
      'Unit-circle map $z = e^{i\\theta}$ converts full-period trigonometric integrals to residue sums.'
    ],
    quiz: [
      {
        // PYQ-pattern: GATE 2014 — residue theorem on a circle (rephrased, values changed)
        q: 'Poles of $1/[(z-1)(z+1)(z-3)]$ inside $|z| = 2$ are:',
        options: ['$1$ only', `$1$ and $-1$`, `$1$, $-1$ and $3$`, 'None'],
        answer: 1,
        explanation: 'Step 1: Solve denominator zeros at $1$, $-1$ and $3$. Step 2: Compare moduli $1$, $1$ and $3$ against radius $2$. Step 3: Keep the two with modulus below $2$ and exclude $z = 3$.'
      },
      {
        q: 'Jordan lemma applies to $\\int_{C_{R}} e^{iaz}f(z)\\,dz$ in the upper half-plane when:',
        options: [`$a > 0$ with $M_{R} = \\max_{C_{R}}|f| \\to 0$`, '$a < 0$ with $f$ growing', 'Any $a$ with $f$ constant', 'Only when $f$ has no poles'],
        answer: 0,
        explanation: 'Step 1: Require positive frequency $a > 0$ so $e^{-aR\\sin\\theta}$ decays. Step 2: Require uniform decay $M_{R} \\to 0$ on the arc. Step 3: Reject negative $a$ and non-decaying $f$, which keep the arc alive.'
      },
      {
        q: 'Under $z = e^{i\\theta}$, $d\\theta$ becomes:',
        options: [`$dz$`, `$iz\\,dz$`, `$dz/z^{2}$`, `$dz/(iz)$`],
        answer: 3,
        explanation: 'Step 1: Differentiate $z = e^{i\\theta}$ to $dz = ie^{i\\theta}\\,d\\theta = iz\\,d\\theta$. Step 2: Solve for $d\\theta = dz/(iz)$. Step 3: Confirm the factor places one extra $z$ in the denominator of the converted integrand.'
      },
      {
        q: 'If $C$ encloses simple poles with residues $2$ and $-5$, then $\\oint_{C} f(z)\\,dz$ equals:',
        options: [`$-3$`, `$2\\pi i$`, `$-6\\pi i$`, `$7$`],
        answer: 2,
        explanation: 'Step 1: Sum enclosed residues $2 + (-5) = -3$. Step 2: Multiply by $2\\pi i$ per the residue theorem. Step 3: Obtain $-6\\pi i$ with orientation positive as stated.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Jordan lemma and the choice of closure',
        blocks: [
          {
            kind: 'theorem',
            body: 'Let $C_{R}$ be the semicircle $|z| = R$ in $\\Im(z) \\geq 0$ and let $g$ be continuous with $\\max_{C_{R}} |g| = M_{R} \\to 0$. Then for $a > 0$ the **Jordan lemma** states $\\left| \\int_{C_{R}} e^{i a z} g(z) \\, dz \\right| \\to 0$ as $R \\to \\infty$. Consequently $\\int_{-\\infty}^{\\infty} e^{i a x} g(x) \\, dx = 2\\pi i$ times enclosed upper half plane residues when $g$ is rational with sufficient decay. For $a < 0$ close in the lower half plane instead. Trigonometric integrals $\\int_{0}^{2\\pi} F(\\cos\\theta, \\sin\\theta) \\, d\\theta$ convert via $z = e^{i\\theta}$ to unit circle residues.'
          },
          {
            kind: 'proof',
            body: 'Parametrize $z = R e^{i\\theta}$ so $|e^{i a z}| = e^{-a R \\sin\\theta}$. Then $\\left| \\int_{C_{R}} \\right| \\leq M_{R} R \\int_{0}^{\\pi} e^{-a R \\sin\\theta} \\, d\\theta = 2 M_{R} R \\int_{0}^{\\pi/2} e^{-a R \\sin\\theta} \\, d\\theta$. Jordan inequality $\\sin\\theta \\geq 2\\theta/\\pi$ on $[0, \\pi/2]$ gives $\\int_{0}^{\\pi/2} e^{-a R \\sin\\theta} \\, d\\theta \\leq \\int_{0}^{\\pi/2} e^{-2 a R \\theta/\\pi} \\, d\\theta < \\pi/(2 a R)$. Hence the arc is bounded by $\\pi M_{R}/a \\to 0$. The $1/R$ decay of the exponential defeats the length $\\pi R$, which the naive $ML$ bound alone cannot see.'
          },
          {
            kind: 'remark',
            body: 'Poles on the contour are handled by **indentation**: a small detour of angle $\\pi$ contributes half a residue, and the principal value plus $i\\pi$ times residues emerges as the Sokhotski Plemelj formula. Branch cut integrals use keyholes rather than semicircles, with Hankel loops capturing the jump across the cut. Choosing the wrong half plane gives exponential growth $e^{+a R \\sin\\theta}$ instead of decay, the most common contour error. Sector contours suit $e^{-x^{2}}$ style Gaussian decay.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 8.4
  {
    sectionId: 'engmath-ch8-s4',
    readingTime: 9,
    intro: 'Improper integrals over the entire real line yield to semicircle closure when rational decay is strong enough. Poles on the contour itself demand indentation with half-residue accounting. This section assembles rational-line integrals, Fourier-type oscillatory integrals and the indented rules for boundary poles.',
    objectives: [
      'Evaluate $\\int_{-\\infty}^{\\infty} P(x)/Q(x)\\,dx$ by upper-half-plane residues',
      'Handle $\\int_{-\\infty}^{\\infty} e^{iax}P(x)/Q(x)\\,dx$ with Jordan closure',
      'Indent around simple poles on the real axis with half contributions'
    ],
    concepts: [
      {
        term: 'Rational line integral',
        kind: 'theorem',
        statement: 'If $Q$ has no real zeros and $\\deg Q \\ge \\deg P + 2$, then **$\\int_{-\\infty}^{\\infty} P(x)/Q(x)\\,dx = 2\\pi i\\sum_{\\Im z_{k} > 0} \\mathrm{Res}$** via `upper_sum`. The large semicircle vanishes by ML. Degree shortfall keeps the arc alive and voids the formula.',
        detail: 'Close $[-R, R]$ with $C_{R}$ above, sum upper residues, let $R \\to \\infty$. Even symmetry often halves the work by extending $0$ to $\\infty$ integrals. The condition guarantees $R \\cdot R^{\\deg P - \\deg Q} \\to 0$.'
      },
      {
        term: 'Fourier-type oscillatory integral',
        kind: 'method',
        statement: 'Integrals **$\\int_{-\\infty}^{\\infty} e^{iax}P(x)/Q(x)\\,dx$** with $a > 0$ close upward and equal $2\\pi i$ times upper residues by `jordan_close_up`. Real cosine and sine pieces follow from real and imaginary parts. Negative $a$ closes downward with a sign flip from clockwise travel.',
        detail: 'Jordan lemma replaces the degree-two rule with degree-one plus oscillation. The canonical pair $\\int e^{iax}/(x^{2} + 1)\\,dx = \\pi e^{-a}/1$ for $a > 0$ drops out in two lines. Absolute convergence still needs denominator dominance.'
      },
      {
        term: 'Indented contour for boundary poles',
        kind: 'method',
        statement: 'A simple pole **on** the path is bypassed by a small semicircle whose detour contributes half the full residue, coded as `half_residue`. Skirting above adds $-\\pi i\\,\\mathrm{Res}$ while skirting below adds $+\\pi i\\,\\mathrm{Res}$ for left-to-right travel. Higher-order boundary poles diverge and have no principal-value shortcut.',
        detail: 'Letting detour radius tend to zero leaves the Cauchy principal value plus the half correction. Standard $\\int_{-\\infty}^{\\infty} \\sin x/x\\,dx = \\pi$ uses indentation at the origin. Always state which side the detour takes since the sign depends on it.'
      },
      {
        term: 'Principal value',
        kind: 'definition',
        statement: 'The **principal value** $\\mathrm{P.V.}\\int_{-\\infty}^{\\infty} f = \\lim_{R \\to \\infty, \\epsilon \\to 0}$ removes symmetric neighborhoods of boundary poles via `symmetric Excise`. It assigns finite values to conditionally convergent symmetric integrals. Indentation identities express it through upper residues plus half corrections.',
        detail: 'Symmetric excision cancels the antisymmetric blow-up while preserving the symmetric finite part. For $1/x$ the principal value over symmetric limits is zero. Software flags for principal values require explicit excision parameters.'
      },
      {
        term: 'Pole-on-path checklist',
        kind: 'insight',
        statement: 'Before closing, **factor the real denominator** and sort zeros into upper, lower and real groups with `sort_zeros`. Real zeros trigger indentation choice, upper zeros enter the sum, and lower zeros stay out for upward closure. Skipping the real-axis scan is the costliest oversight in this family.',
        detail: 'A degree check follows: rational needs plus-two dominance, oscillatory needs plus-one with Jordan. Then orientation and half-residue signs are fixed before any residue arithmetic. This order prevents wasted computation on wrong pole sets.'
      }
    ],
    examples: [
      {
        title: 'Standard rational integral over the line',
        problem: 'Evaluate $\\int_{-\\infty}^{\\infty} dx/(x^{2} + 1)$.',
        steps: [
          { label: 'Step 1', text: 'Close $[-R, R]$ upward. Poles at $i$ and $-i$; only $i$ lies in $\\Im z > 0$. Degree $2 \\ge 0 + 2$ so the arc vanishes.\n```text\nupper pole: i; Res = 1/(2i); arc -> 0\n```' },
          { label: 'Step 2', text: 'Residue at $i$ is $\\lim_{z \\to i} 1/(z + i) = 1/(2i)$. Upper sum is therefore $1/(2i)$.' },
          { label: 'Step 3', text: 'Multiply by $2\\pi i$ to get $2\\pi i/(2i) = \\pi$. Even symmetry also gives $\\int_{0}^{\\infty} dx/(x^{2} + 1) = \\pi/2$.' }
        ],
        result: '$\\int_{-\\infty}^{\\infty} dx/(x^{2} + 1) = \\pi$. Upper-half-plane residue alone determined the value.'
      },
      {
        title: 'Sine integral via indentation',
        problem: 'Evaluate $\\int_{-\\infty}^{\\infty} \\sin x/x\\,dx$ as a principal value with indentation at $0$.',
        steps: [
          { label: 'Step 1', text: 'Consider $e^{iz}/z$ with a simple pole at $0$ on the path. Indent above $0$ with small $C_{\\epsilon}$ and close with large $C_{R}$ above. No upper poles remain inside the indented loop.' },
          { label: 'Step 2', text: 'Loop integral vanishes, so $\\mathrm{P.V.}\\int_{-R}^{R} e^{ix}/x\\,dx$ plus arc pieces equals $0$. Large arc vanishes by Jordan, small clockwise detour contributes $-\\pi i\\,\\mathrm{Res} = -\\pi i$ with $\\mathrm{Res} = 1$.' },
          { label: 'Step 3', text: 'Hence $\\mathrm{P.V.}\\int e^{ix}/x\\,dx = \\pi i$, and imaginary parts give $\\int_{-\\infty}^{\\infty} \\sin x/x\\,dx = \\pi$.\n```text\nsmall detour -pi*i; large arc 0 -> P.V. = pi*i; imag -> pi\n```' }
        ],
        result: 'Principal value $\\int_{-\\infty}^{\\infty} \\sin x/x\\,dx = \\pi$, with half-residue $-\\pi i$ from skirting above the origin.'
      }
    ],
    keyTakeaways: [
      'Rational $\\int_{-\\infty}^{\\infty} P/Q$ with $\\deg Q \\ge \\deg P + 2$ equals $2\\pi i$ times upper residues.',
      'Oscillatory $\\int e^{iax}P/Q$ with $a > 0$ closes upward via Jordan with degree-one dominance.',
      'Simple boundary poles contribute $\\pm\\pi i\\,\\mathrm{Res}$ depending on detour side.',
      'Factor real denominators first and sort poles into upper, lower and real groups before summing.'
    ],
    quiz: [
      {
        q: 'To evaluate $\\int_{-\\infty}^{\\infty} dx/(x^{2} + 4)$ by residues, the relevant pole is:',
        options: [`$-2i$ with residue $-1/(4i)$`, 'Both $2i$ and $-2i$ summed', `$2i$ with residue $1/(4i)$`, 'No pole contributes'],
        answer: 2,
        explanation: 'Step 1: Factor $x^{2} + 4 = (z - 2i)(z + 2i)$ over $\\mathbb{C}$. Step 2: Keep only $\\Im z > 0$ for upward closure, namely $2i$. Step 3: Compute $1/(2i + 2i) = 1/(4i)$ as the cover-up value.'
      },
      {
        // PYQ-pattern: GATE 2008 — real rational integral by residues (rephrased, values changed)
        q: '$\\int_{-\\infty}^{\\infty} dx/(x^{2} + 1)$ equals:',
        options: [`$0$`, `$\\pi/2$`, `$2\\pi$`, `$\\pi$`],
        answer: 3,
        explanation: 'Step 1: Close upward and keep the upper pole $i$ with residue $1/(2i)$. Step 2: Multiply $2\\pi i \\cdot 1/(2i) = \\pi$. Step 3: Halve for $0$ to $\\infty$ to get $\\pi/2$ as a corollary.'
      },
      {
        q: 'Skirting above a simple real pole while traveling left to right contributes:',
        options: ['$-\\pi i\\,\\mathrm{Res}$ (half, clockwise)', `$+2\\pi i\\,\\mathrm{Res}$`, '$0$ always', '$+\\pi i$ regardless of residue'],
        answer: 0,
        explanation: 'Step 1: Note the small detour is a clockwise half-circle, half the full loop. Step 2: Scale $2\\pi i\\,\\mathrm{Res}$ by $-1/2$ for clockwise half travel. Step 3: Obtain $-\\pi i\\,\\mathrm{Res}$ added to the principal value.'
      },
      {
        q: 'Jordan closure for $\\int_{-\\infty}^{\\infty} e^{i2x}/(x^{2} + 1)\\,dx$ uses:',
        options: ['Lower half-plane because $a = 2 > 0$', 'Upper half-plane because $a = 2 > 0$ with vanishing arc', 'No closure since oscillation forbids it', 'A unit circle instead of a semicircle'],
        answer: 1,
        explanation: 'Step 1: Check $a = 2 > 0$ so $e^{iaz}$ decays for $\\Im z > 0$. Step 2: Invoke Jordan to kill the upper arc with degree-one dominance. Step 3: Sum upper residues at $z = i$ to finish the evaluation.'
      }
    ]
  }
]
