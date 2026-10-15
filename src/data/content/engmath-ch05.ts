import type { SectionContent } from '../library'

// ============================================================================
// Engineering Mathematics — Chapter 5: PDEs and Separation of Variables
// Sections 5.1 – 5.4. Master study content.
// Math is LaTeX rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const engmathCh05Content: SectionContent[] = [
  // ---------------------------------------------------------------- 5.1
  {
    sectionId: 'engmath-ch5-s1',
    readingTime: 7,
    intro: 'Partial differential equations arise by eliminating arbitrary constants or arbitrary functions from a proposed solution surface. The number eliminated sets the order, and the elimination route decides linear versus nonlinear. This section practices both eliminations and fixes the vocabulary of order, degree and solution families.',
    objectives: [
      'Eliminate arbitrary constants to form first and second order PDEs',
      'Eliminate arbitrary functions to form first-order linear and nonlinear PDEs',
      'Classify order, degree and linearity of a given PDE'
    ],
    concepts: [
      {
        term: 'Elimination of arbitrary constants',
        kind: 'method',
        statement: 'A surface with `$n$` essential constants `$z = F(x, y, c_1, \\dots, c_n)$` yields a PDE by differentiating `$n$` times and **eliminating** the constants. The `elimination` differentiates with respect to `$x$` and `$y$` to get `$n$` extra relations, then removes `$c_1, \\dots, c_n$` algebraically. One constant typically gives first order, two constants typically give second order.',
        detail: 'Constants entering additively, like `$z = f(x, y) + c$`, vanish on first differentiation and produce parameter-free first-order equations.'
      },
      {
        term: 'Elimination of arbitrary functions',
        kind: 'method',
        statement: 'A form `$z = f(u) + g(v)$` with arbitrary `$f, g$` differentiates into relations where `$f^{\\prime}, g^{\\prime}$` appear, and eliminating them yields a **second-order** equation such as `$u_x v_y z_{xy}$`-type canonical forms. The `arbitrary` functions each cost one differentiation round, so two functions force second order. The wave equation `$u_{tt} = c^2 u_{xx}$` emerges exactly this way from `$u = f(x - ct) + g(x + ct)$`.',
        detail: 'A single arbitrary function `$z = f(u(x, y))$` eliminates to the first-order pair `$z_x = f^{\\prime} u_x$`, `$z_y = f^{\\prime} u_y$` and then `$u_y z_x - u_x z_y = 0$`.'
      },
      {
        term: 'Order, degree and linearity',
        kind: 'definition',
        statement: 'The **order** is the highest derivative present, the **degree** is its power after clearing radicals and fractions, and **linearity** means `$u$` and its derivatives appear only to the first power with no products. The `linear` test rejects `$u u_x$`, `$(u_{xx})^2$` and `$\\sin u$` at once. Degree is undefined while fractional powers or transcendental wrappings of the top derivative persist.',
        detail: 'The equation `$u_x + u_y = 0$` is first-order linear of degree one, while `$u_x^2 + u_y^2 = 1$` is first-order nonlinear of degree two.'
      },
      {
        term: 'Complete, general and singular solutions',
        kind: 'notation',
        statement: 'A **complete solution** (complete integral) carries as many essential constants as the order demands, the **general solution** of a linear equation adds homogeneous pieces to a particular one, and a **singular solution** meets the PDE while escaping the complete family. The `complete` integral for first order holds two constants in two independent variables. Envelopes of the complete family are the usual singular source.',
        detail: 'Linear PDEs admit superposition of homogeneous solutions, so one particular plus the homogeneous family covers everything.'
      },
      {
        term: 'Essential versus inessential constants',
        kind: 'insight',
        statement: 'Only **essential** constants raise the order: `$z = ax + by + ab$` has two essential constants and gives second order, while `$z = (x + c)^2 + (y + c)^2$` has one effective constant despite two appearances. The `essential` count equals the number of independent differentiation-and-elimination rounds the family survives. Testing essentiality by checking whether reparameterization absorbs a constant saves wasted differentiations.',
        detail: 'Additive and multiplicative repackagings like `$c_1 + c_2$` or `$c_1 c_2$` collapse two symbols into one essential parameter.'
      }
    ],
    examples: [
      {
        title: 'Form a PDE by eliminating two constants',
        problem: 'Eliminate `$a, b$` from `$z = ax + by + ab$` to obtain its PDE.',
        steps: [
          { label: 'Step 1: Differentiate', text: '```text\nz = a x + b y + a b\np = dz/dx = a,  q = dz/dy = b\nTwo constants -> need p and q, then eliminate\n```\nFirst-order derivatives `$p = z_x$` and `$q = z_y$` recover the constants as `$a = p$`, `$b = q$`.' },
          { label: 'Step 2: Eliminate', text: 'Substitute `$a = p$`, `$b = q$` back into `$z = ax + by + ab$` to get `$z = px + qy + pq$`. The `elimination` is algebraic substitution once `$p, q$` are known.' },
          { label: 'Step 3: Classify', text: 'The relation `$z = px + qy + pq$` is first order (only `$p, q$`) and nonlinear of degree two via `$pq$`. This is the **Clairaut-type** form in two variables.' }
        ],
        result: 'PDE `$z = px + qy + pq$`, first-order nonlinear.'
      },
      {
        title: 'Form the wave equation from travelling profiles',
        problem: 'Show `$u = f(x - ct) + g(x + ct)$` obeys `$u_{tt} = c^2 u_{xx}$`.',
        steps: [
          { label: 'Step 1: First derivatives', text: '```text\nLet s = x - c t, r = x + c t\nu = f(s) + g(r)\nu_x = df/ds + dg/dr,  u_t = -c df/ds + c dg/dr\n```\nChain rule splits each derivative across the left- and right-moving `arbitrary` profiles.' },
          { label: 'Step 2: Second derivatives', text: 'Differentiate again: `$u_{xx} = f^{\\prime\\prime} + g^{\\prime\\prime}$`, and `$u_{tt} = c^2 f^{\\prime\\prime} + c^2 g^{\\prime\\prime} = c^2 u_{xx}$`. Both arbitrary functions survive inside second derivatives, ready for elimination.' },
          { label: 'Step 3: Eliminate', text: 'Since `$u_{xx} = f^{\\prime\\prime} + g^{\\prime\\prime}$` and `$u_{tt} = c^2(f^{\\prime\\prime} + g^{\\prime\\prime})$`, the combination `$u_{tt} - c^2 u_{xx} = 0$` kills both `$f^{\\prime\\prime}$` and `$g^{\\prime\\prime}$` at once. The surviving PDE is linear, second order, homogeneous.' }
        ],
        result: 'Elimination yields `$u_{tt} = c^2 u_{xx}$`.'
      }
    ],
    keyTakeaways: [
      'Differentiate once per essential constant, then eliminate; count sets the typical order.',
      'Arbitrary functions eliminate into higher order: one function first order, two functions second order.',
      'Order is top derivative, degree its cleared power, linear means first-power with no products.',
      'Test essentiality first; repackaged constants do not raise order.'
    ],
    quiz: [
      // PYQ-pattern — PDE from eliminating constants (rephrased)
      {
        q: 'Eliminating `$a, b$` from `$z = ax + by + ab$` gives:',
        options: [`$p + q = 0$`, `$z = px + qy + pq$`, `$z = ax + by$`, `$p = q$`],
        answer: 1,
        explanation: 'First `$p = z_x = a$` and `$q = z_y = b$`. Next substitute `$a = p$`, `$b = q$` into the surface. Then `$z = px + qy + pq$`. Finally only `$p, q$` appear, so first order nonlinear.'
      },
      {
        q: 'The PDE `$u_{tt} = c^2 u_{xx}$` has order and degree:',
        options: ['First order, degree one', 'Second order, degree one', 'Second order, degree two', 'Order undefined'],
        answer: 1,
        explanation: 'First top derivatives `$u_{tt}, u_{xx}$` are second order. Next each appears to the first power with no products. Then degree is one. Finally linearity holds since coefficients are constant.'
      },
      // PYQ-pattern — arbitrary function elimination (rephrased)
      {
        q: 'Eliminating one arbitrary function `$f$` from `$z = f\\left(\\frac{x}{y}\\right)$` yields order:',
        options: ['Zero (algebraic)', 'First order', 'Second order', 'Third order'],
        answer: 1,
        explanation: 'First `$z_x = f^{\\prime} \\cdot \\frac{1}{y}$` in the form `$z_x = \\frac{f^{\\prime}}{y}$` and `$z_y = -\\frac{xf^{\\prime}}{y^2}$`. Next `$f^{\\prime}$` appears in both. Then eliminating `$f^{\\prime}$` gives `$xz_x + yz_y = 0$`. Finally one function costs one round, leaving first order.'
      },
      {
        q: 'Which PDE is linear?',
        options: [`$u_x^2 + u_y^2 = 1$`, `$u u_x + u_y = 0$`, `$u_{xx} + u_{yy} = x + y$`, `$\\sin(u_x) + u_y = 0$`],
        answer: 2,
        explanation: 'First the squared derivatives in option one break linearity. Next the product `$u u_x$` breaks it in option two. Then `$u_{xx} + u_{yy} = x + y$` has first-power derivatives with source `$x + y$`. Finally sine-wrapped derivatives break it in option four.'
      }
    ]
  },
  // ---------------------------------------------------------------- 5.2
  {
    sectionId: 'engmath-ch5-s2',
    readingTime: 9,
    intro: 'Three canonical equations dominate physics: the wave equation for vibrations, the heat equation for diffusion, and Laplace equation for steady states. Their constant-coefficient second-order template `$Au_{xx} + Bu_{xy} + Cu_{yy} = F$` classifies by the discriminant `$B^2 - 4AC$` into hyperbolic, parabolic and elliptic types. This section pairs each physical meaning with its type and boundary-data style.',
    objectives: [
      'Write the wave, heat and Laplace equations and state what each models',
      'Classify `$Au_{xx} + Bu_{xy} + Cu_{yy}$` by `$B^2 - 4AC$` sign',
      'Match each type to its natural initial and boundary data'
    ],
    concepts: [
      {
        term: 'Wave, heat and Laplace equations',
        kind: 'definition',
        statement: 'The **wave** equation `$u_{tt} = c^2 u_{xx}$` conserves energy and carries signals at speed `$c$`, the **heat** equation `$u_t = k u_{xx}$` smooths and decays with diffusivity `$k$`, and **Laplace** `$u_{xx} + u_{yy} = 0$` selects steady states with no time dependence. The `canonical` trio shares constant coefficients but differs in time order: second, first, and none. Poisson `$u_{xx} + u_{yy} = f$` adds a steady source to Laplace.',
        detail: 'Memorize by signature: two time derivatives vibrate, one time derivative diffuses, zero time derivatives equilibrate.'
      },
      {
        term: 'Classification discriminant',
        kind: 'theorem',
        statement: 'For `$Au_{xx} + Bu_{xy} + Cu_{yy} + \\cdots = 0$`, the **discriminant** `$\\Delta = B^2 - 4AC$` decides type: `$\\Delta > 0$` hyperbolic, `$\\Delta = 0$` parabolic, `$\\Delta < 0$` elliptic. The `discriminant` mirrors the conic classifier because characteristic curves obey `$A(dy)^2 - B\\,dx\\,dy + C(dx)^2 = 0$`. Only the principal (second-order) part matters; lower terms never change type.',
        detail: 'Wave is hyperbolic, heat is parabolic, Laplace is elliptic, checked in one line each.'
      },
      {
        term: 'Characteristic curves carry the signal',
        kind: 'insight',
        statement: 'Hyperbolic equations own two real **characteristic** families along which data travels, parabolic equations own one repeated family along which data diffuses, and elliptic equations own none, forcing global smoothness. The `characteristic` count `$2, 1, 0$` matches the discriminant sign directly. Discontinuities ride characteristics in hyperbolic problems but are instantly smoothed in parabolic ones.',
        detail: 'For the wave equation the characteristics `$x \\pm ct = \\text{constant}$` are exactly the travelling profiles of the previous section.'
      },
      {
        term: 'Well-posed data per type',
        kind: 'law',
        statement: 'Hyperbolic problems need **initial** position plus velocity (`$u, u_t$` at `$t = 0$`), parabolic problems need **initial** temperature (`$u$` at `$t = 0$`) plus boundary values for `$t > 0$`, and elliptic problems need **boundary** values only with no initial data. The `data` rule follows the time order: two time derivatives take two initial snapshots, one takes one, zero takes none. Supplying velocity data to a heat problem overdetermines it, while omitting boundary data underdetermines it.',
        detail: 'Dirichlet fixes `$u$` on the boundary, Neumann fixes the normal derivative, Robin mixes the two.'
      },
      {
        term: 'Canonical forms by change of variables',
        kind: 'method',
        statement: 'Characteristic coordinates straighten each type: hyperbolic reaches **`$u_{\\xi\\eta} = \\cdots$`**, parabolic reaches **`$u_{\\eta\\eta} = \\cdots$`** (heat-like), elliptic reaches **`$u_{\\xi\\xi} + u_{\\eta\\eta} = \\cdots$`** (Laplace-like). The `canonical` reduction differentiates the coordinate map by chain rule and collects second derivatives. Classification first selects the target form, so no reduction starts blind.',
        detail: 'Constant-coefficient wave form `$u_{\\xi\\eta} = 0$` integrates twice to `$F(\\xi) + G(\\eta)$`, the travelling pair again.'
      }
    ],
    examples: [
      {
        title: 'Classify three principal parts',
        problem: 'Classify `$3u_{xx} + 4u_{xy} + u_{yy} = 0$`, `$u_{xx} + 2u_{xy} + u_{yy} = 0$`, and `$u_{xx} + 4u_{xy} + 5u_{yy} = 0$`.',
        steps: [
          { label: 'Step 1: Read A, B, C', text: '```text\nEq1: A=3, B=4, C=1\nEq2: A=1, B=2, C=1\nEq3: A=1, B=4, C=5\nDelta = B^2 - 4AC in each case\n```\nOnly the second-order coefficients enter the `discriminant`; any first-order or source terms are ignored for typing.' },
          { label: 'Step 2: Compute discriminants', text: 'First: `$16 - 12 = 4 > 0$` hyperbolic. Second: `$4 - 4 = 0$` parabolic. Third: `$16 - 20 = -4 < 0$` elliptic. Each `discriminant` is one subtraction after the squares.' },
          { label: 'Step 3: Name them', text: 'Hyperbolic behaves wave-like with two characteristic families, parabolic heat-like with one, elliptic Laplace-like with none. Typing predicts the solution machinery before any solving starts.' }
        ],
        result: 'Hyperbolic, parabolic, elliptic in order.'
      },
      {
        title: 'Match data to type',
        problem: 'For `$u_{tt} = 9u_{xx}$` on `$0 < x < 2$`, `$t > 0$`, list the complete well-posed data set.',
        steps: [
          { label: 'Step 1: Type', text: '```text\nA = 9? Standardize: u_tt - 9 u_xx = 0\nPrincipal part in (x,t): A = -9? Use Delta on -9 u_xx + 1 u_tt\nHyperbolic (wave-like), speed c = 3\n```\nComparing with `$u_{tt} - c^2 u_{xx} = 0$` gives speed `$c = 3$`; the equation is **hyperbolic**.' },
          { label: 'Step 2: Initial data', text: 'Two time derivatives need `$u(x, 0) = f(x)$` and `$u_t(x, 0) = g(x)$` on `$[0, 2]$`. Position plus velocity launch the vibration; one snapshot would leave the motion undetermined.' },
          { label: 'Step 3: Boundary data', text: 'One condition per end for `$t > 0$`, such as fixed `$u(0, t) = u(2, t) = 0$` (Dirichlet) or prescribed slopes (Neumann). Initial plus boundary together close the problem.' }
        ],
        result: 'Position and velocity initially, plus one boundary condition at each end.'
      }
    ],
    keyTakeaways: [
      'Wave `$u_{tt} = c^2u_{xx}$` vibrates, heat `$u_t = ku_{xx}$` diffuses, Laplace `$u_{xx} + u_{yy} = 0$` equilibrates.',
      'Type by `$\\Delta = B^2 - 4AC$`: positive hyperbolic, zero parabolic, negative elliptic.',
      'Characteristics count `$2, 1, 0$` across the three types; signals ride them.',
      'Two time derivatives take two initial snapshots, one takes one, zero takes boundary only.'
    ],
    quiz: [
      // PYQ-pattern — classification by discriminant (rephrased)
      {
        q: '`$3u_{xx} + 4u_{xy} + u_{yy} = 0$` is:',
        options: ['Parabolic', 'Elliptic', 'Hyperbolic', 'Not second order'],
        answer: 2,
        explanation: 'First read `$A = 3$`, `$B = 4$`, `$C = 1$`. Next `$\\Delta = 16 - 12 = 4$`. Then `$\\Delta > 0$` signals hyperbolic. Finally two characteristic families exist.'
      },
      {
        q: 'The heat equation `$u_t = ku_{xx}$` with `$k > 0$` is:',
        options: ['Hyperbolic', 'Parabolic', 'Elliptic', 'Third order'],
        answer: 1,
        explanation: 'First only one second derivative `$u_{xx}$` appears. Next in `$Au_{xx} + Bu_{xt} + Cu_{tt}$` form, `$A = k$`, `$B = C = 0$`. Then `$\\Delta = 0 - 0 = 0$`. Finally zero discriminant means parabolic.'
      },
      // PYQ-pattern — Laplace equation type (rephrased)
      {
        q: '`$u_{xx} + u_{yy} = 0$` is:',
        options: ['Hyperbolic', 'Parabolic', 'Elliptic', 'Mixed type'],
        answer: 2,
        explanation: 'First read `$A = 1$`, `$B = 0$`, `$C = 1$`. Next `$\\Delta = 0 - 4 = -4$`. Then negative discriminant means elliptic. Finally no real characteristics exist and solutions are smooth inside.'
      },
      {
        q: 'Well-posed data for `$u_{tt} = c^2u_{xx}$` on a finite string include:',
        options: ['Only `$u(x, 0)$`', '`$u(x, 0)$` and `$u_t(x, 0)$` plus end conditions', 'Only end conditions with no initial data', 'The discriminant sign alone'],
        answer: 1,
        explanation: 'First two time derivatives need two initial snapshots. Next finite extent needs one condition per end. Then position plus velocity plus ends close the system. Finally fewer data underdetermine, more overdetermine.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Classification via principal symbols and well-posedness',
        blocks: [
          {
            kind: 'theorem',
            body: 'For $A u_{xx} + 2 B u_{xy} + C u_{yy} = F(x,y,u,u_{x},u_{y})$ with $A, B, C$ not all zero, the sign of $\\Delta = B^{2} - A C$ at a point is invariant under smooth changes of independent variables. The equation is **hyperbolic** where $\\Delta > 0$, **parabolic** where $\\Delta = 0$, and **elliptic** where $\\Delta < 0$. Near a point of fixed type there are coordinates straightening the principal part to $u_{\\xi\\eta}$, $u_{\\xi\\xi}$ or $u_{\\xi\\xi} + u_{\\eta\\eta}$ respectively. Correct data follow the type: Cauchy data for hyperbolic, initial data for parabolic, boundary data for elliptic.'
          },
          {
            kind: 'derivation',
            body: 'Characteristics satisfy $A (dy)^{2} - 2 B \\, dx \\, dy + C (dx)^{2} = 0$, so $dy/dx = (B \\pm \\sqrt{\\Delta})/A$ when $A \\neq 0$. Hyperbolic points admit two real families whose invariants $\\xi(x,y)$, $\\eta(x,y)$ serve as new coordinates; the chain rule then kills $u_{\\xi\\xi}$ and $u_{\\eta\\eta}$, leaving a multiple of $u_{\\xi\\eta}$. Parabolic points admit one family $\\xi$ completed by any transverse $\\eta$, leaving $u_{\\xi\\xi}$. Elliptic points admit complex conjugate families whose real and imaginary parts give $\\xi, \\eta$ and the sum of squares. The principal symbol $\\sigma(\\xi,\\eta) = A \\xi^{2} + 2 B \\xi\\eta + C \\eta^{2}$ organizes all cases.'
          },
          {
            kind: 'remark',
            body: 'Type dictates well-posedness in the Hadamard sense of existence, uniqueness and continuous dependence. The Cauchy problem for Laplace $u_{xx} + u_{yy} = 0$ with $u(x,0) = 0$ and $u_{y}(x,0) = n^{-1} \\sin(n x)$ has solution $u = n^{-2} \\sin(n x) \\sinh(n y)$, whose data tend to zero while $u(\\cdot, y)$ blows up for any $y > 0$ as $n \\to \\infty$. High frequencies are amplified, so the problem is ill posed. Petrovsky and Hormander conditions generalize the lesson: only hyperbolic and parabolic evolutions tolerate sideways Cauchy data.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 5.3
  {
    sectionId: 'engmath-ch5-s3',
    readingTime: 9,
    intro: 'Separation of variables builds PDE solutions as products of single-variable functions, converting one PDE into a matched set of ODEs joined by a separation constant. Homogeneous boundary conditions quantize that constant into eigenvalues with sine and cosine eigenfunctions. This section derives the product ansatz, the sign rule for the constant, and the superposition that meets initial data.',
    objectives: [
      'Apply `$u(x,t) = X(x)T(t)$` to reach paired ODEs with constant `$-\\lambda$`',
      'Enforce homogeneous ends to quantize `$\\lambda_n$` and eigenfunctions',
      'Superpose modes `$\\sum B_n \\phi_n$` and fit initial data by orthogonality'
    ],
    concepts: [
      {
        term: 'Product ansatz and split ODEs',
        kind: 'method',
        statement: 'Trying **`$u(x, t) = X(x)T(t)$`** in `$u_t = ku_{xx}$` gives `$X\\frac{dT}{dt} = k\\frac{d^2X}{dx^2} T$` in the clean form `$X\\frac{dT}{dt} = k\\frac{d^2X}{dx^2}T$`, and dividing by `$kXT$` separates to `$\\frac{\\frac{dT}{dt}}{kT} = \\frac{\\frac{d^2X}{dx^2}}{X} = -\\lambda$` properly `$\\frac{1}{kT}\\frac{dT}{dt} = \\frac{1}{X}\\frac{d^2X}{dx^2} = -\\lambda$`. The `product` reduces one PDE to two ODEs sharing the constant `$-\\lambda$`. Nonzero-product division assumes `$X, T$` nonvanishing, with the zero solution reattached at the end.',
        detail: 'The wave equation splits as `$\\frac{1}{c^2T}\\frac{d^2T}{dt^2} = \\frac{1}{X}\\frac{d^2X}{dx^2} = -\\lambda$`, two oscillators per mode.'
      },
      {
        term: 'Sign of the separation constant',
        kind: 'law',
        statement: 'With ends pinned to zero, only **`$-\\lambda$` with `$\\lambda > 0$`** yields nontrivial eigenfunctions: `$\\frac{d^2X}{dx^2} + \\lambda X = 0$` oscillates as `$A\\cos\\sqrt{\\lambda}x + B\\sin\\sqrt{\\lambda}x$` in `$\\frac{d^2X}{dx^2} + \\lambda X = 0$` form. The `sign` choice `$+\\lambda$` gives exponentials that cannot vanish at both ends except trivially, and `$\\lambda = 0$` gives a line with the same fate. Testing all three signs and keeping the oscillatory one is the disciplined route.',
        detail: 'Insulated (Neumann) ends instead admit `$\\lambda = 0$` with a constant mode, the steady-heat carrier.'
      },
      {
        term: 'Eigenvalues from homogeneous boundaries',
        kind: 'theorem',
        statement: 'Ends `$X(0) = X(L) = 0$` force **`$\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2$`** with eigenfunctions `$\\phi_n = \\sin\\frac{n\\pi x}{L}$` for `$n = 1, 2, \\dots$`. The `eigenvalue` ladder follows from `$B\\sin\\sqrt{\\lambda}L = 0$` with `$B \\ne 0$`, so `$\\sqrt{\\lambda}L = n\\pi$`. Each integer `$n$` contributes one mode shape with `$n - 1$` interior nodes.',
        detail: 'Mixed ends shift the ladder to half-integers, but the sine-cosine structure and integer counting persist.'
      },
      {
        term: 'Superposition and orthogonality',
        kind: 'theorem',
        statement: 'Linearity sums modes into **`$u = \\sum_{n} B_n \\phi_n(x) \\psi_n(t)$`** with time factors `$\\psi_n$` from the `$T$` equation, and orthogonality `$\\int_0^L \\phi_m \\phi_n\\,dx = 0$` for `$m \\ne n$` isolates each `$B_n$`. The `orthogonality` integral projects initial data onto the basis: `$B_n$` is the normalized inner product of the data with `$\\phi_n$`. Termwise differentiation is legitimate for smooth data with compatible ends.',
        detail: 'The norm `$\\int_0^L \\sin^2\\frac{n\\pi x}{L}\\,dx = \\frac{L}{2}$` supplies every denominator in the coefficient formulas.'
      },
      {
        term: 'Zero and trivial pitfalls',
        kind: 'insight',
        statement: 'The product `$X \\equiv 0$` or `$T \\equiv 0$` always meets the PDE and boundaries but carries no information, so eigenwork targets **nontrivial** pairs only. The `nontrivial` demand is why `$A = 0$` is imposed on the cosine coefficient at a pinned end rather than accepting `$A = B = 0$`. Forgetting to discard the trivial branch inflates every mode count by a ghost solution.',
        detail: 'Inhomogeneous boundaries must first be homogenized by subtracting a steady profile, since separation needs zero ends.'
      }
    ],
    examples: [
      {
        title: 'Separate the heat equation',
        problem: 'With `$u(x,t) = X(x)T(t)$` in `$u_t = ku_{xx}$`, derive the `$X$` and `$T$` equations for constant `$-\\lambda$`.',
        steps: [
          { label: 'Step 1: Insert the product', text: '```text\nAssume u = X(x) T(t), both nonvanishing\nPartial derivatives: u_t = X dT/dt, u_xx = d2X/dx2 T\nPDE becomes: X dT/dt = k d2X/dx2 T\n```\nEach derivative hits only its own `product` factor, leaving the other as a spectator.' },
          { label: 'Step 2: Divide and separate', text: 'Divide by `$kXT$` to get `$\\frac{1}{kT}\\frac{dT}{dt} = \\frac{1}{X}\\frac{d^2X}{dx^2}$`. Left depends only on `$t$`, right only on $x$, so both equal a constant written `$-\\lambda$`.' },
          { label: 'Step 3: Read the pair', text: 'Hence `$\\frac{d^2X}{dx^2} + \\lambda X = 0$` and `$\\frac{dT}{dt} + \\lambda k T = 0$`. The spatial ODE is eigenvalue-ready and the temporal ODE gives decay `$T_n = e^{-\\lambda_n k t}$`.' }
        ],
        result: 'Split pair `$\\frac{d^2X}{dx^2} + \\lambda X = 0$` and `$\\frac{dT}{dt} + \\lambda kT = 0$` in `$\\frac{d^2X}{dx^2}$`, `$\\frac{dT}{dt}$` form.'
      },
      {
        title: 'Quantize with pinned ends',
        problem: 'Impose `$u(0,t) = u(L,t) = 0$` on the heat modes and find `$\\lambda_n, \\phi_n$`.',
        steps: [
          { label: 'Step 1: Transfer boundaries', text: '```text\nEnds: X(0)T(t) = 0, X(L)T(t) = 0 for all t\nNontrivial T -> X(0) = 0, X(L) = 0\nd2X/dx2 + λX = 0 with zero ends\n```\nPinned PDE ends become zero `eigenvalue` ends for `$X$`, since `$T$` is not identically zero.' },
          { label: 'Step 2: Solve with sign kept', text: 'For `$\\lambda > 0$`, `$X = A\\cos\\sqrt{\\lambda}x + B\\sin\\sqrt{\\lambda}x$`; `$X(0) = 0$` forces `$A = 0$`. Then `$B\\sin\\sqrt{\\lambda}L = 0$` with `$B \\ne 0$` (else trivial) gives `$\\sqrt{\\lambda}L = n\\pi$`.' },
          { label: 'Step 3: Ladder', text: 'Thus `$\\lambda_n = \\left(\\frac{n\\pi}{L}\\right)^2$` and `$\\phi_n = \\sin\\frac{n\\pi x}{L}$` for `$n = 1, 2, \\dots$`. Negative `$\\lambda$` and zero give only the trivial branch here.' }
        ],
        result: 'Modes `$\\sin\\frac{n\\pi x}{L}$` with `$\\lambda_n = (n\\pi/L)^2$`.'
      }
    ],
    keyTakeaways: [
      'Products `$X(x)T(t)$` split the PDE into ODEs joined by one constant `$-\\lambda$`.',
      'Pinned ends select `$\\lambda > 0$` oscillatory branch; other signs give trivial only.',
      'Zero ends quantize `$\\lambda_n = (n\\pi/L)^2$` with `$\\sin\\frac{n\\pi x}{L}$` modes.',
      'Sum modes and project initial data by `$\\int_0^L$` orthogonality with norm `$L/2$`.'
    ],
    quiz: [
      // PYQ-pattern — separation constant ODEs (rephrased)
      {
        q: 'Separating `$u_t = ku_{xx}$` via `$u = XT$` with constant `$-\\lambda$` gives:',
        options: [`$\\frac{d^2X}{dx^2} - \\lambda X = 0$`, `$\\frac{d^2X}{dx^2} + \\lambda X = 0$ with $\\frac{dT}{dt} + \\lambda kT = 0$`, '$XT = -\\lambda$ everywhere', '$\\frac{dT}{dt} = \\frac{d^2X}{dx^2}$ with no constant'],
        answer: 1,
        explanation: 'First `$X\\frac{dT}{dt} = k\\frac{d^2X}{dx^2} T$` in `$X\\frac{dT}{dt} = k\\frac{d^2X}{dx^2}T$` form. Next divide by `$kXT$` to isolate `$t$` and `$x$` sides. Then both equal `$-\\lambda$`. Finally `$\\frac{d^2X}{dx^2} + \\lambda X = 0$` and `$\\frac{dT}{dt} + \\lambda kT = 0$`.'
      },
      {
        q: 'With $X(0) = X(L) = 0$, admissible `$\\lambda$` are:',
        options: ['All real numbers', 'Only `$\\lambda > 0$` in the ladder $(n\\pi/L)^2$', 'Only $\\lambda < 0$', 'Only `$\\lambda = 0$`'],
        answer: 1,
        explanation: 'First `$\\lambda = 0$` gives a line vanishing twice only trivially. Next `$\\lambda < 0$` gives exponentials with the same fate. Then `$\\lambda > 0$` oscillates and fits both ends. Finally `$\\sin\\sqrt{\\lambda}L = 0$` quantizes `$\\sqrt{\\lambda}L = n\\pi$`.'
      },
      // PYQ-pattern — eigenfunction for pinned rod (rephrased)
      {
        q: 'The first eigenfunction for `$\\frac{d^2X}{dx^2} + \\lambda X = 0$`, `$X(0) = X(L) = 0$` is:',
        options: [`$\\cos\\frac{\\pi x}{L}$`, `$\\sin\\frac{\\pi x}{L}$`, `$e^{\\pi x/L}$`, 'The constant `$1$`'],
        answer: 1,
        explanation: 'First `$X(0) = 0$` kills the cosine coefficient. Next `$n = 1$` is the lowest admissible integer. Then `$\\phi_1 = \\sin\\frac{\\pi x}{L}$`. Finally it has no interior nodes, as expected for the ground mode.'
      },
      {
        q: '`$\\int_0^L \\sin\\frac{m\\pi x}{L}\\sin\\frac{n\\pi x}{L}\\,dx$` for `$m \\ne n$` equals:',
        options: [`$L$`, `$L/2$`, `$0$`, '$1$ always'],
        answer: 2,
        explanation: 'First distinct sine modes are orthogonal on `$[0, L]$`. Next product-to-sum integrates to boundary sines vanishing at multiples of `$\\pi$`. Then the integral is `$0$`. Finally `$L/2$` is the norm for $m = n$, not here.'
      }
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Sturm-Liouville theory behind separation',
        blocks: [
          {
            kind: 'theorem',
            body: 'A regular **Sturm Liouville** problem $(p y^{{\\prime}})^{{\\prime}} + (\\lambda w - q) y = 0$ on $[a,b]$ with $p > 0$, $w > 0$ and separated homogeneous boundary conditions has real eigenvalues $\\lambda_{1} < \\lambda_{2} < \\cdots \\to \\infty$ and eigenfunctions $y_{n}$ orthogonal with weight $w$: $\\int_{a}^{b} y_{m} y_{n} w \\, dx = 0$ for $m \\neq n$. The normalized eigenfunctions are complete in the weighted $L^{2}$ space, so separated PDE solutions superpose as $\\sum c_{n} y_{n}(x) T_{n}(t)$ with $c_{n}$ from the initial data. Sign choices for the separation constant are eigenvalue problems in disguise.'
          },
          {
            kind: 'proof',
            body: 'The Lagrange identity $y_{m} L y_{n} - y_{n} L y_{m} = d/dx[p (y_{m} y_{n}^{{\\prime}} - y_{n} y_{m}^{{\\prime}})]$ with $L y = (p y^{{\\prime}})^{{\\prime}} - q y$ is verified by expanding the derivative. Integrating over $[a,b]$ and using $L y_{k} = -\\lambda_{k} w y_{k}$ gives $(\\lambda_{n} - \\lambda_{m}) \\int_{a}^{b} y_{m} y_{n} w \\, dx = [p (y_{m} y_{n}^{{\\prime}} - y_{n} y_{m}^{{\\prime}})]_{a}^{b}$. Separated boundary conditions $A y + B p y^{{\\prime}} = 0$ at each end force the boundary term to vanish, so distinct eigenvalues give orthogonality, and reality follows by pairing $\\lambda$ with its conjugate.'
          },
          {
            kind: 'example',
            heading: 'Pinned rod quantizes to a sine basis',
            body: 'With $y^{{\\prime\\prime}} + \\lambda y = 0$ and $y(0) = y(L) = 0$, nontrivial solutions require $\\sin(\\sqrt{\\lambda} L) = 0$, hence $\\lambda_{n} = (n \\pi / L)^{2}$ and $y_{n} = \\sin(n \\pi x / L)$ for $n = 1, 2, \\ldots$. Negative $\\lambda$ gives hyperbolic sines that cannot vanish twice, and $\\lambda = 0$ gives a line through two zeros, hence only the trivial solution. Expanding incompatible initial data produces Gibbs fringes at the endpoints, the PDE analogue of Fourier overshoot, cured in $L^{2}$ but not uniformly.'
          },
        ]
      }
    ],
  },
  // ---------------------------------------------------------------- 5.4
  {
    sectionId: 'engmath-ch5-s4',
    readingTime: 10,
    intro: 'Initial-boundary problems close the loop from data to series solution for the vibrating string and the conducting rod. Each run follows one pipeline: separate, quantize with the ends, attach the time factor, and fit the initial shape by sine coefficients. This section works both flagship problems end to end with convergence and uniqueness notes.',
    objectives: [
      'Solve the fixed-string wave problem to `$u = \\sum (A_n\\cos\\omega_n t + B_n\\sin\\omega_n t)\\sin\\frac{n\\pi x}{L}$`',
      'Solve the zero-end heat problem to `$u = \\sum B_n e^{-k\\lambda_n t}\\sin\\frac{n\\pi x}{L}$`',
      'Compute sine coefficients and state decay, frequency and uniqueness facts'
    ],
    concepts: [
      {
        term: 'Fixed-string series',
        kind: 'method',
        statement: 'With ends `$u(0,t) = u(L,t) = 0$`, data `$u(x,0) = f(x)$`, `$u_t(x,0) = g(x)$`, the wave solution is **`$u = \\sum_{n=1}^{\\infty}(A_n\\cos\\omega_n t + B_n\\sin\\omega_n t)\\sin\\frac{n\\pi x}{L}$`** with `$\\omega_n = \\frac{cn\\pi}{L}$`. The `series` superposes standing modes, each oscillating at its natural frequency `$\\omega_n$`. Coefficients `$A_n$` expand `$f$` and `$B_n\\omega_n$` expand `$g$` in the sine basis.',
        detail: 'Frequencies scale as `$1 : 2 : 3 \\cdots$`, the harmonic overtones of music and the reason separation sounds like Fourier analysis.'
      },
      {
        term: 'Heat-rod series with decay',
        kind: 'method',
        statement: 'With ends `$u(0,t) = u(L,t) = 0$` and data `$u(x,0) = f(x)$`, the heat solution is **`$u = \\sum_{n=1}^{\\infty} B_n e^{-k(n\\pi/L)^2 t}\\sin\\frac{n\\pi x}{L}$`**. The `decay` factor `$e^{-k\\lambda_n t}$` kills high modes fastest since `$\\lambda_n$` grows as `$n^2$`, so profiles smooth toward a sine hump and then toward zero. Coefficients `$B_n$` expand `$f$` in the sine basis at `$t = 0$`.',
        detail: 'Diffusivity `$k$` sets the clock: doubling `$k$` halves every modal time constant.'
      },
      {
        term: 'Sine coefficient formula',
        kind: 'method',
        statement: 'On `$[0, L]$` the coefficients are **`$B_n = \\frac{2}{L}\\int_0^L f(x)\\sin\\frac{n\\pi x}{L}\\,dx$`**, the projection of `$f$` onto mode `$n$` divided by the norm `$L/2$`. The `coefficient` integral is evaluated by parts or symmetry, and odd or even data about the midpoint zeroes alternate harmonics. Velocity data `$g$` uses the same formula with `$B_n\\omega_n$` in place of `$B_n$`.',
        detail: 'Data already a single sine, like `$f = \\sin\\frac{\\pi x}{L}$`, needs no integral: `$B_1 = 1$`, rest zero.'
      },
      {
        term: 'Steady plus transient split',
        kind: 'insight',
        statement: 'Nonzero fixed ends `$u(0) = A$`, `$u(L) = B$` are handled by subtracting the **steady line** `$u_s = A + \\frac{(B-A)x}{L}$`, leaving zero ends for the transient `$v = u - u_s$`. The `steady` profile meets Laplace `$\\frac{d^2u_s}{dx^2} = 0$` in `$\\frac{d^2u_s}{dx^2} = 0$` form and persists as `$t \\to \\infty$`, while the transient series decays to zero. Skipping the subtraction forces a sine series onto incompatible ends and ruins convergence.',
        detail: 'Time-independent sources instead build a steady Poisson profile with the transient decaying around it.'
      },
      {
        term: 'Uniqueness and energy decay',
        kind: 'theorem',
        statement: 'Well-posed heat and wave problems admit **at most one** sufficiently smooth solution: energy identities show two solutions difference carries zero energy, hence vanishes. The `uniqueness` proof multiplies the equation by `$u_t$` (wave) or `$u$` (heat) and integrates by parts to an energy budget. Heat energy `$\\int u^2\\,dx$` decays monotonically, while wave energy swaps between kinetic and elastic but stays constant.',
        detail: 'Uniqueness justifies the pipeline: any series built correctly that meets data and ends is the solution.'
      }
    ],
    examples: [
      {
        title: 'Plucked string with sine data',
        problem: 'Solve `$u_{tt} = 4u_{xx}$` on `$0 < x < 2$` with fixed ends, `$u(x,0) = \\sin\\frac{\\pi x}{2}$`, `$u_t(x,0) = 0$`.',
        steps: [
          { label: 'Step 1: Speed and modes', text: '```text\nc^2 = 4 -> c = 2, L = 2\nModes: sin(n pi x / 2), omega_n = c n pi / L = n pi\nInitial velocity zero -> all B_n = 0\n```\nZero launch velocity kills every sine-in-time term, leaving pure `series` cosines `$A_n\\cos n\\pi t$`.' },
          { label: 'Step 2: Match displacement', text: 'Data is already mode one: `$f = \\sin\\frac{\\pi x}{2}$` gives `$A_1 = 1$`, all other `$A_n = 0$` by `orthogonality`. No `coefficient` integral is needed for single-mode data.' },
          { label: 'Step 3: Answer', text: 'Hence `$u = \\cos\\pi t\\,\\sin\\frac{\\pi x}{2}$`. At `$t = 0$` the string shows the pluck, at `$t = \\frac{1}{2}$` it inverts through `$\\cos\\frac{\\pi}{2} = 0$` passage, with period `$2$`.' }
        ],
        result: '`$u = \\cos(\\pi t)\\sin(\\pi x/2)$`.'
      },
      {
        title: 'Heat rod with sine data',
        problem: 'Solve `$u_t = u_{xx}$` on `$0 < x < 1$` with zero ends and `$u(x,0) = \\sin\\pi x$`.',
        steps: [
          { label: 'Step 1: Modes and decay', text: '```text\nk = 1, L = 1\nlambda_n = (n pi)^2, time factor exp(-lambda_n t)\nData is mode one: B_1 = 1, rest 0\n```\nUnit diffusivity and length give modal clocks `$e^{-n^2\\pi^2 t}$`, with mode one slowest.' },
          { label: 'Step 2: Assemble', text: 'The `decay` series collapses to one term: `$u = e^{-\\pi^2 t}\\sin\\pi x$`. Initial check `$t = 0$` recovers `$\\sin\\pi x$`, and ends stay pinned since `$\\sin 0 = \\sin\\pi = 0$`.' },
          { label: 'Step 3: Read the physics', text: 'Peak at `$x = \\frac{1}{2}$` falls as `$e^{-\\pi^2 t}$`, roughly `$5.2$ percent` remaining at `$t = 0.3$` since `$e^{-2.96} \\approx 0.052$`. Higher modes would vanish sooner by `$n^2$` scaling.' }
        ],
        result: '`$u = e^{-\\pi^2 t}\\sin\\pi x$`.'
      }
    ],
    keyTakeaways: [
      'String: `$u = \\sum (A_n\\cos\\omega_n t + B_n\\sin\\omega_n t)\\sin\\frac{n\\pi x}{L}$`, `$\\omega_n = cn\\pi/L$`.',
      'Rod: `$u = \\sum B_n e^{-k\\lambda_n t}\\sin\\frac{n\\pi x}{L}$`; high modes die as `$n^2$`.',
      'Coefficients `$B_n = \\frac{2}{L}\\int_0^L f\\sin\\frac{n\\pi x}{L}$`; velocity uses `$B_n\\omega_n$`.',
      'Subtract steady profiles for nonzero ends; energy reasoning gives uniqueness.'
    ],
    quiz: [
      // PYQ-pattern — vibrating string series form (rephrased)
      {
        q: 'For fixed ends, the wave solution with `$u(x,0) = f$`, `$u_t(x,0) = 0$` takes the form:',
        options: [`$\\sum B_n e^{-k\\lambda_n t}\\sin\\frac{n\\pi x}{L}$`, `$\\sum A_n\\cos\\omega_n t\\,\\sin\\frac{n\\pi x}{L}$`, '$\\sum A_n\\sin\\omega_n t$` alone', 'A single constant'],
        answer: 1,
        explanation: 'First fixed ends give sine modes `$\\sin\\frac{n\\pi x}{L}$`. Next zero velocity kills `$\\sin\\omega_n t$` terms. Then displacement `$f$` expands in `$A_n$`. Finally each mode oscillates at `$\\omega_n = \\frac{cn\\pi}{L}$`.'
      },
      {
        q: 'In `$u = e^{-\\pi^2 t}\\sin\\pi x$` on `$[0,1]$`, the decay rate `$\\pi^2$` equals:',
        options: [`$k\\lambda_1$ with $k = 1$`, `$c\\omega_1$`, 'Always $1$', 'The boundary value'],
        answer: 0,
        explanation: 'First `$L = 1$` gives `$\\lambda_1 = \\pi^2$`. Next `$k = 1$` from `$u_t = u_{xx}$`. Then modal decay is `$e^{-k\\lambda_1 t}$`. Finally `$k\\lambda_1 = \\pi^2$`.'
      },
      // PYQ-pattern — heat series coefficient (rephrased)
      {
        q: 'If `$u(x,0) = \\sin\\frac{3\\pi x}{L}$` on `$[0,L]$` with zero ends, the heat-series coefficients are:',
        options: [`$B_3 = 1$, rest $0$`, `$B_1 = 1$, rest $0$`, 'All $B_n = 1$', 'All `$B_n = 0$`'],
        answer: 0,
        explanation: 'First data is exactly mode three. Next orthogonality zeroes all projections but `$n = 3$`. Then normalization gives `$B_3 = 1$`. Finally the solution is one decaying term.'
      },
      {
        q: 'Nonzero ends `$u(0) = A$`, `$u(L) = B$` for the heat rod are handled by:',
        options: ['Ignoring the ends and expanding anyway', 'Subtracting the steady line `$u_s = A + (B-A)x/L$` first', 'Setting $k = 0$', 'Using cosine modes only'],
        answer: 1,
        explanation: 'First separation needs homogeneous ends. Next `$u_s$` meets the ends with `$\\frac{d^2u_s}{dx^2} = 0$`. Then `$v = u - u_s$` has zero ends. Finally expand `$v$` in sines and add `$u_s$` back.'
      }
    ]
  }
]
