import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// The Feynman Lectures on Physics, Vol. II — Lectures 1–9
// Chapter 11: Vector Calculus and Electrostatics (Sections 11.1 – 11.5)
// Master study content. All worked-example numbers are Feynman’s own.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const physCh11Content: SectionContent[] = [
  // ------------------------------------------------------------------ 11.1
  {
    sectionId: 'hall-ch22-s18',
    readingTime: 10,
    intro: 'Feynman opens Volume II with a shock: the electrical force is a billion-billion-billion-billion times stronger than gravity, and the only reason you do not feel it is that positive and negative charge are mixed with almost perfect balance. To describe what is left over — the fields — he builds the language of flux and circulation first, then the differential toolkit: gradient, divergence and curl, all packaged in one hungry operator, $\\nabla$.',
    objectives: [
      'Explain why bulk matter feels almost no electrical force despite the enormous strength of the Coulomb attraction',
      'Define scalar and vector fields, and state the two integral measurements — flux and circulation — that characterize a vector field',
      'Compute the gradient, divergence and curl of given fields and state the physical meaning of each',
      'Write Maxwell’s four equations in differential form using $\\nabla$',
      'Derive the heat-flow law $h = -\\kappa\\nabla T$ and the second-derivative identities of the $\\nabla$ operator',
    ],
    concepts: [
      {
        term: 'The electrical force and its perfect balance',
        kind: 'insight',
        statement: 'The electrical force varies predominantly as the inverse square of the distance but is about $10^{42}$ times stronger than gravitation; like charges repel and unlike charges attract, so matter is a tight, fine mixture of positive protons and negative electrons whose forces cancel almost perfectly.',
        detail: 'If you stood at arm’s length from someone and each of you had one percent more electrons than protons, the repulsion would be enough to lift a weight equal to that of the entire earth. The stiffness of matter — the Empire State Building swings less than an inch in the wind — is this balance holding every charge in place. Chemical forces and the forces holding atoms together are the residual electrical forces where the balance is imperfect; nuclear forces hold the 92 protons of uranium together against their electrical repulsion, and the atomic bomb’s energy is really electrical energy released when that repulsion wins.',
      },
      {
        term: 'Field',
        kind: 'definition',
        statement: 'A **field** is any physical quantity which takes on different values at different points in space: a scalar field such as the temperature $T(x, y, z)$ has one number per point, and a vector field such as the heat flow $\\boldsymbol{h}(x, y, z, t)$ or the electric field $\\boldsymbol{E}(x, y, z, t)$ has a vector per point.',
        detail: 'We associate $\\boldsymbol{E}$ and $\\boldsymbol{B}$ with every point in space even when no charge is there — they give the force $\\boldsymbol{F} = q(\\boldsymbol{E} + \\boldsymbol{v} \\times \\boldsymbol{B})$ that a charge would feel, with the proviso that placing the test charge does not disturb the other charges. The crucial property that makes field language powerful is that the relationships between the values of the fields at one point and at a nearby point are very simple — a few differential equations describe the field completely.',
      },
      {
        term: 'Flux',
        kind: 'definition',
        statement: 'The **flux** of a vector field through a surface is the average outward normal component of the vector times the area of the surface, $$\\text{Flux} = (\\text{average normal component}) \\times (\\text{surface area}).$$',
        detail: 'The idea comes from fluid flow: if $\\boldsymbol{h}$ were the velocity of a liquid, the flux would be the net amount of fluid passing out through the surface per unit time. For the electric field the flux is not the flow of anything, but the same mathematical quantity — the surface integral of the normal component $\\boldsymbol{E} \\cdot \\boldsymbol{n}$ — keeps a useful physical significance. Field lines drawn with density proportional to field strength make the flux a literal line count.',
      },
      {
        term: 'Circulation',
        kind: 'definition',
        statement: 'The **circulation** of a vector field around a closed curve is the average tangential component of the vector (in a consistent sense) multiplied by the circumference of the loop, $$\\text{Circulation} = (\\text{average tangential component}) \\times (\\text{distance around}).$$',
        detail: 'Feynman’s picture: imagine the velocity field of a liquid, instantaneously frozen everywhere except inside a closed tube of uniform bore that follows the curve. If the liquid inside the tube keeps moving, the field circulates. With just flux and circulation — these two measurements — all the laws of electricity and magnetism can be stated at once.',
      },
      {
        term: 'Gradient and the operator ∇ (del)',
        kind: 'notation',
        statement: 'The three partial derivatives of a scalar field form the components of a vector field, the **gradient** $$\\nabla T = \\left( \\frac{\\partial T}{\\partial x}, \\frac{\\partial T}{\\partial y}, \\frac{\\partial T}{\\partial z} \\right),$$ and the change of $T$ between two nearby points separated by $\\Delta \\boldsymbol{R}$ is $\\Delta T = \\nabla T \\cdot \\Delta \\boldsymbol{R}$. Because the transformation properties of the derivatives did not depend on what scalar was being differentiated, the derivatives themselves can be abstracted into a **vector operator** $\\nabla = \\left( \\frac{\\partial}{\\partial x}, \\frac{\\partial}{\\partial y}, \\frac{\\partial}{\\partial z} \\right),$ which, as Jeans said, is left “hungry for something to differentiate.”',
        detail: 'The proof that $\\nabla T$ is a genuine vector — that the three derivatives transform correctly under a rotation of axes — is the argument Feynman runs twice: once by dotting with an arbitrary vector, once in full components. Physically, $\\nabla T$ points in the direction of steepest uphill increase of $T$, and its magnitude is the maximum rate of change with position. Heat flows across isothermal surfaces perpendicular to $\\nabla T$. Order matters: what is to be differentiated must sit to the right of $\\nabla$. The product $T\\nabla$ is still an operator, while $\\nabla T$ is a genuine physical vector. The pitfalls of treating $\\nabla$ as an ordinary vector are real \u2014 $(\\nabla\\psi) \\times (\\nabla\\phi)$ is generally not zero because the two operators act on different functions \u2014 and in curvilinear coordinates even $\\nabla^2 h_r \\neq (\\nabla^2 h)_r$, which is why Feynman sticks to rectangular components.',
      },
      {
        term: 'Divergence',
        kind: 'definition',
        statement: 'The **divergence** of a vector field is the scalar $$\\nabla \\cdot \\boldsymbol{h} = \\frac{\\partial h_x}{\\partial x} + \\frac{\\partial h_y}{\\partial y} + \\frac{\\partial h_z}{\\partial z},$$ the sum being invariant under coordinate transformations.',
        detail: 'Because a dot product of two vectors is a scalar, $\\nabla \\cdot \\boldsymbol{h}$ is a scalar field, and it must represent some physical quantity — Section 11.2 shows it is the outward flux per unit volume. Not every combination of derivatives shares this status: $\\partial h_y / \\partial x$ is neither a scalar nor a component of a vector.',
      },
      {
        term: 'Curl',
        kind: 'definition',
        statement: 'The **curl** of a vector field is the vector $\\nabla \\times \\boldsymbol{h}$ with components built by the usual cross-product rule, for example $$(\\nabla \\times \\boldsymbol{h})_z = \\frac{\\partial h_y}{\\partial x} - \\frac{\\partial h_x}{\\partial y},$$ and similarly for the $x$- and $y$-components.',
        detail: 'The name anticipates its physical meaning — the circulation per unit area — established with Stokes’ theorem in Section 11.2. Together the three combinations $\\nabla T = \\text{grad}\\;T$ (vector), $\\nabla \\cdot \\boldsymbol{h} = \\text{div}\\;\\boldsymbol{h}$ (scalar) and $\\nabla \\times \\boldsymbol{h} = \\text{curl}\\;\\boldsymbol{h}$ (vector) let us write the spatial variation of fields in a form independent of any particular axes.',
      },
      {
        term: 'Maxwell’s equations in ∇ form',
        kind: 'law',
        statement: 'The complete classical theory of the electromagnetic field is $$\\nabla \\cdot \\boldsymbol{E} = \\frac{\\rho}{\\epsilon_0}, \\qquad \\nabla \\times \\boldsymbol{E} = -\\frac{\\partial \\boldsymbol{B}}{\\partial t}, \\qquad \\nabla \\cdot \\boldsymbol{B} = 0, \\qquad c^2 \\nabla \\times \\boldsymbol{B} = \\frac{\\partial \\boldsymbol{E}}{\\partial t} + \\frac{\\boldsymbol{j}}{\\epsilon_0},$$ where $\\rho$ is the charge density and $\\boldsymbol{j}$ the current density.',
        detail: 'The constant $c^2$ is the square of the speed of light — magnetism is in reality a relativistic effect of electricity — and $\\epsilon_0$ is fixed by definition as $c^2 \\epsilon_0 = 10^7$ in mks units, so that $1/4\\pi\\epsilon_0 \\approx 9 \\times 10^{9}$. Chapter 13 develops these four equations in full; this chapter specializes them to statics.',
      },
      {
        term: 'The heat-flow analogy',
        kind: 'method',
        statement: 'For a slab of area $A$ and thickness $d$ held between temperatures $T_2$ and $T_1$, the heat transported per unit time is $J = \\kappa (T_2 - T_1) A / d$, and the local vector law is $$\\boldsymbol{h} = -\\kappa \\nabla T,$$ the differential equation of heat conduction.',
        detail: 'The magnitude of $\\boldsymbol{h}$ is the thermal energy passing per unit time and per unit area through a surface perpendicular to the flow, and the flow through any inclined element with unit normal $\\boldsymbol{n}$ is $\\boldsymbol{h} \\cdot \\boldsymbol{n}$. The minus sign says heat runs downhill in temperature. This physical system is Feynman’s standing model for every abstract field operation — temperature is his scalar field, heat flow his vector field, and Section 11.2 turns the same pair into the diffusion equation.',
      },
    ],
    examples: [
      {
        title: 'Magnetism as a relativistic remnant',
        problem: 'The magnetic force between two current-carrying wires looks nothing like a small correction, yet Feynman shows it is one. Estimate the size of the relativistic term $v^2/c^2$ for the electrons in an ordinary wire.',
        steps: [
          { label: 'Step 1: Estimate the drift speed', text: 'The average speed of the electrons along a current-carrying wire is about $0.01$ centimetre per second, that is $v \\approx 10^{-4}\\;\\text{m/s}$.' },
          { label: 'Step 2: Form the relativistic ratio', text: 'With $c \\approx 3 \\times 10^{8}\\;\\text{m/s}$, the ratio $v/c \\approx 3 \\times 10^{-13}$, so $v^2/c^2 \\approx 10^{-25}$. A truly negligible “correction” — on its own.' },
          { label: 'Step 3: Remember what cancelled', text: 'The “normal” electrical forces between the moving electrons are of the same order as the nuclear-scale electrical forces, but the wires contain the same number of protons as electrons, so those enormous forces balance to better than one part in $10^{25}$.' },
          { label: 'Step 4: Conclude', text: 'What survives the cancellation is precisely the tiny relativistic term of order $v^2/c^2$ — and that remnant is what we call the magnetic force. This is why the electromagnetic laws, unlike Newtonian mechanics, needed no change when relativity arrived: they were already correct to order $v^2/c^2$.' },
        ],
        result: 'Magnetism is the $10^{-25}$-sized relativistic residue of electrical forces whose direct effects have cancelled to one part in $10^{25}$.',
      },
      {
        title: 'Proving curl of a gradient is zero',
        problem: 'Show, as Feynman does by pure vector algebra, that $\\nabla \\times (\\nabla T) = 0$ for any scalar field $T$ whatsoever.',
        steps: [
          { label: 'Step 1: Recognize the pattern', text: 'The expression has the form $\\boldsymbol{A} \\times (\\boldsymbol{A} T)$, and $\\boldsymbol{A} \\times \\boldsymbol{A} = 0$ for any ordinary vector. The algebra suggests the answer is zero — but with operators one must check components.' },
          { label: 'Step 2: Write out one component', text: 'The $z$-component is $[\\nabla \\times (\\nabla T)]_z = \\frac{\\partial}{\\partial x}\\frac{\\partial T}{\\partial y} - \\frac{\\partial}{\\partial y}\\frac{\\partial T}{\\partial x}.$' },
          { label: 'Step 3: Invoke the equality of mixed partials', text: 'For any decent function, $\\frac{\\partial^2 T}{\\partial x\\, \\partial y} = \\frac{\\partial^2 T}{\\partial y\\, \\partial x}$, so the two terms cancel exactly. The same holds for the $x$- and $y$-components.' },
          { label: 'Step 4: Mark the boundary of the argument', text: 'The result holds because both $\\nabla$’s operate on the same function. It does not extend to $(\\nabla\\psi) \\times (\\nabla\\phi)$ with two different scalars — those two dels are different operators, and their cross product is generally nonzero.' },
        ],
        result: 'The curl of a gradient vanishes identically — the first of two “always zero” identities, companion to $\\nabla \\cdot (\\nabla \\times \\boldsymbol{h}) = 0$.',
      },
    ],
    keyTakeaways: [
      'The electrical force is $10^{42}$ times stronger than gravity; matter is stiff only because positive and negative charge cancel almost perfectly.',
      'A field is a quantity with different values at different points: temperature is a scalar field, heat flow and $\\boldsymbol{E}$ are vector fields.',
      'Flux (average normal component × area) and circulation (average tangential component × distance around) are the two measurements that summarize a vector field.',
      'The gradient $\\nabla T$ is a vector pointing along the steepest uphill slope of $T$; the divergence $\\nabla \\cdot \\boldsymbol{h}$ is a scalar; the curl $\\nabla \\times \\boldsymbol{h}$ is a vector.',
      'Treating $\\nabla$ as a hungry vector operator compresses Maxwell’s four equations — the complete classical theory of the electromagnetic field — into four short lines.',
      'The heat-flow law $\\boldsymbol{h} = -\\kappa \\nabla T$ is the model vector equation: each side is a vector, and no coordinate system is mentioned.',
      'Magnetism is a relativistic effect of electricity: a $v^2/c^2 \\approx 10^{-25}$ correction that becomes dominant only because the larger electrical terms cancel.',
    ],
    quiz: [
      {
        q: 'Two people stand at arm’s length, each carrying one percent more electrons than protons. Feynman says the repulsive force would be enough to:',
        options: ['Bend a steel rod', 'Lift the Empire State Building', 'Lift a weight equal to that of the entire earth', 'Cause a visible spark of a few kilovolts'],
        answer: 2,
        explanation: 'Not the Empire State Building, not Mount Everest — the repulsion would equal the weight of the entire earth. That is the strength of the electrical force that perfect charge balance routinely hides.',
      },
      {
        q: 'The flux of a vector field through a surface is defined as:',
        options: ['The average tangential component times the circumference', 'The average normal component times the surface area', 'The volume integral of the divergence', 'The line integral of the tangential component around the boundary'],
        answer: 1,
        explanation: 'Flux pairs with a surface and the normal component: Flux = (average normal component) × (surface area). The tangential component times the circumference is the circulation, the other of the two field measurements.',
      },
      {
        q: 'The gradient $\\nabla T$ of a scalar field points:',
        options: ['Along the isothermal surfaces', 'In the direction in which $T$ changes most slowly', 'In the direction of steepest increase of $T$', 'In the direction of the heat flow $\\boldsymbol{h}$'],
        answer: 2,
        explanation: 'The rate of change of $T$ in any direction is the component of $\\nabla T$ in that direction, so $\\nabla T$ points where its own component is largest — the steepest uphill slope. Heat flows opposite to $\\nabla T$ (downhill), across the isotherms.',
      },
      {
        q: 'Which of the three basic combinations of the operator $\\nabla$ produces a scalar field?',
        options: [`$\\nabla T$`, `$\\nabla \\cdot \\boldsymbol{h}$`, `$\\nabla \\times \\boldsymbol{h}$`, 'All three produce scalars'],
        answer: 1,
        explanation: 'Gradient of a scalar and curl of a vector are vectors; only the divergence $\\nabla \\cdot \\boldsymbol{h} = \\partial h_x/\\partial x + \\partial h_y/\\partial y + \\partial h_z/\\partial z$ is a scalar field, because it is a dot product.',
      },
      {
        q: 'In the heat-flow law $\\boldsymbol{h} = -\\kappa \\nabla T$, the minus sign is required because:',
        options: ['The thermal conductivity $\\kappa$ is defined as negative', 'Heat flows “downhill” in temperature, from hot to cold', 'The gradient points along the isotherms', 'Energy must be conserved in any volume'],
        answer: 1,
        explanation: 'The gradient points toward hotter regions, but heat flows from hot to cold — opposite the gradient. The minus sign encodes that. For a slab, the same physics reads $J = \\kappa (T_2 - T_1) A / d$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.2
  {
    sectionId: 'hall-ch22-s19',
    readingTime: 9,
    intro: 'Two theorems — Gauss’s and Stokes’ — are the bookkeeping that converts flux and circulation between integral and differential form. Feynman derives each the honest way: sum the flux out of the six faces of a tiny cube, walk the four sides of a tiny square. On the way the divergence acquires its meaning (outflow per unit volume), the curl acquires its meaning (circulation per unit area), and heat flow delivers the diffusion equation as a bonus.',
    objectives: [
      'State and apply the fundamental theorem for gradients, $\\psi(2) - \\psi(1) = \\int \\nabla\\psi \\cdot d\\boldsymbol{s}$',
      'Derive Gauss’s theorem (the divergence theorem) from the flux out of an infinitesimal cube',
      'Derive Stokes’ theorem from the circulation around an infinitesimal square, with the right-hand-rule sign convention',
      'Use Gauss’s theorem to obtain the $1/r^{2}$ field of a point source and the heat diffusion equation',
      'Explain why a curl-free field is a gradient and a divergence-free field is a curl',
    ],
    concepts: [
      {
        term: 'The line integral',
        kind: 'definition',
        statement: 'The **line integral** of a scalar function $f$ along a curve $\\Gamma$ is the limit of the sum $\\sum_i f_i \\Delta s_i$, where the curve is chopped into segments of length $\\Delta s_i$ and $f_i$ is evaluated on each segment.',
        detail: 'For a vector field the integrand becomes the tangential component: $(\\nabla\\psi)_t\\, \\Delta s = \\nabla\\psi \\cdot \\Delta \\boldsymbol{s}$. Feynman’s Theorem 1 then follows by telescoping — $\\psi(a) - \\psi(1) = (\\nabla\\psi)_1 \\cdot \\Delta \\boldsymbol{s}_1$, and so on down the chain.',
      },
      {
        term: 'Fundamental theorem for gradients (Theorem 1)',
        kind: 'theorem',
        statement: 'For any scalar field $\\psi$ and any curve $\\Gamma$ joining point (1) to point (2), $$\\psi(2) - \\psi(1) = \\int_{(1)}^{(2)} \\nabla\\psi \\cdot d\\boldsymbol{s},$$ and the value of the integral does not depend on which curve is chosen.',
        detail: 'Integrating the rate of change gives the total change. Each little step contributes $\\Delta\\psi_i = (\\nabla\\psi)_i \\cdot \\Delta\\boldsymbol{s}_i$, and the sum telescopes to $\\psi(2) - \\psi(1)$ no matter how the intermediate points are chosen — hence no matter what path connects the endpoints. This is the prototype of the potential concept used throughout electrostatics.',
      },
      {
        term: 'Flux through a closed surface',
        kind: 'definition',
        statement: 'The flux of $\\boldsymbol{h}$ out of a closed surface $S$ enclosing a volume $V$ is $\\int_S \\boldsymbol{h} \\cdot \\boldsymbol{n}\\, da$; when heat is conserved inside, this outflow equals $-dQ/dt$, the rate at which the heat content of the volume decreases.',
        detail: 'Here $da$ is a two-dimensional surface element ($da = dx\\, dy$ in the $xy$-plane) with outward unit normal $\\boldsymbol{n}$, and $dV = dx\\, dy\\, dz$ is a volume element. If heat is being generated inside at $W$ joules per second, the flux instead equals $W$. The word “flux” is generalized to mean the surface integral of the normal component even when, as for $\\boldsymbol{E}$, nothing is flowing.',
      },
      {
        term: 'Fluxes add across cuts',
        kind: 'insight',
        statement: 'If a volume is split by a “cut” into two volumes $V_1$ and $V_2$, the flux out of $V_1$ plus the flux out of $V_2$ equals the flux out of the original surface, because the contributions through the shared cut cancel: $\\boldsymbol{n}_1 = -\\boldsymbol{n}_2$.',
        detail: 'This additivity is the lever for both big theorems. Any volume can be subdivided into arbitrarily many small pieces, and the total flux through the outer surface is the sum of the fluxes out of all the pieces. Applied to loops instead of surfaces, the same argument shows circulations of sub-loops add to the circulation of the outer loop.',
      },
      {
        term: 'Gauss’s theorem (divergence theorem)',
        kind: 'theorem',
        statement: 'For any closed surface $S$ and the volume $V$ inside it, $$\\int_S \\boldsymbol{C} \\cdot \\boldsymbol{n}\\, da = \\int_V \\nabla \\cdot \\boldsymbol{C}\\; dV,$$ where $\\boldsymbol{C}$ is any vector field.',
        detail: 'The derivation: for a cube of edges $\\Delta x, \\Delta y, \\Delta z$, the flux out of the two $x$-faces is $\\frac{\\partial C_x}{\\partial x} \\Delta x \\Delta y \\Delta z$ (expand $C_x(2) = C_x(1) + \\frac{\\partial C_x}{\\partial x} \\Delta x$), and similarly for the other two pairs; summing gives the flux $= (\\nabla \\cdot \\boldsymbol{C})\\, \\Delta V$. Additivity over cuts then promotes this to any finite volume. The divergence of $\\boldsymbol{C}$ at a point $P$ is thereby revealed as the outgoing flux per unit volume in the neighborhood of $P$.',
      },
      {
        term: 'The point source and the 1/r² field',
        kind: 'method',
        statement: 'A point source liberating $W$ joules per second inside a block of metal produces, in steady state with heat conserved, a radial field $$\\boldsymbol{h} = \\frac{W}{4\\pi R^2}\\, \\boldsymbol{e}_r,$$ because the flux through any enclosing sphere is $h \\cdot 4\\pi R^2 = W$.',
        detail: 'This is Feynman’s model computation: symmetry (“physical intuition”) says the field is radial and spherically symmetric, and Gauss’s theorem then fixes the magnitude. The result — inverse square in the distance — is the heat-flow twin of Coulomb’s law, and the same argument will give the field of a point charge in Section 11.3.',
      },
      {
        term: 'The diffusion equation',
        kind: 'law',
        statement: 'Combining heat conservation $-\\partial q/\\partial t = \\nabla \\cdot \\boldsymbol{h}$ with the conduction law $\\boldsymbol{h} = -\\kappa \\nabla T$ gives $\\partial q/\\partial t = \\kappa \\nabla^2 T$; with a definite specific heat per unit volume, $\\Delta q = c_v \\Delta T$, the temperature obeys $$\\frac{\\partial T}{\\partial t} = D\\, \\nabla^2 T, \\qquad D = \\frac{\\kappa}{c_v}.$$',
        detail: 'The Laplacian $\\nabla^2 = \\partial^2/\\partial x^2 + \\partial^2/\\partial y^2 + \\partial^2/\\partial z^2$ appears here for the first time in its starring role. The diffusion equation governs heat flow, the diffusion of gases and of neutrons — Chapter 10 met its statistical cousin — and its electrostatic shadow, $\\nabla^2 \\phi = 0$, fills Section 11.4.',
      },
      {
        term: 'Stokes’ theorem',
        kind: 'theorem',
        statement: 'For any loop $\\Gamma$ and any surface $S$ bounded by it, $$\\oint_\\Gamma \\boldsymbol{C} \\cdot d\\boldsymbol{s} = \\int_S (\\nabla \\times \\boldsymbol{C}) \\cdot \\boldsymbol{n}\\; da.$$',
        detail: 'Fill the loop with tiny squares. Around one square in the $xy$-plane the four sides give $C_x(1)\\Delta x + C_y(2)\\Delta y - C_x(3)\\Delta x - C_y(4)\\Delta y = \\left( \\frac{\\partial C_y}{\\partial x} - \\frac{\\partial C_x}{\\partial y} \\right) \\Delta x \\Delta y = (\\nabla \\times \\boldsymbol{C})_z \\Delta a$ — the normal component of the curl times the area. Adjacent squares share sides that cancel, so the sum is the circulation around $\\Gamma$. The positive normal goes with the sense of travel by the right-hand rule: fingers along $d\\boldsymbol{s}$, thumb along $\\boldsymbol{n}$.',
      },
      {
        term: 'Curl-free and divergence-free fields',
        kind: 'theorem',
        statement: 'If $\\nabla \\times \\boldsymbol{C} = 0$ everywhere, then $\\boldsymbol{C}$ is the gradient of some scalar: $\\boldsymbol{C} = \\nabla\\psi$. If $\\nabla \\cdot \\boldsymbol{D} = 0$ everywhere, then $\\boldsymbol{D}$ is the curl of some vector: $\\boldsymbol{D} = \\nabla \\times \\boldsymbol{C}$.',
        detail: 'Stokes’ theorem makes the first one physical: zero curl means zero circulation around every loop, so the line integral from (1) to (2) is path-independent and can only be a function of the endpoints — a potential. The closed-surface companion argument: shrink the bounding loop of a surface to a point and the surface closes; the circulation goes to zero, so $\\int (\\nabla \\times \\boldsymbol{C}) \\cdot \\boldsymbol{n}\\, da = 0$ over any closed surface, and Gauss’s theorem then forces $\\nabla \\cdot (\\nabla \\times \\boldsymbol{C}) = 0$ at every point. These two theorems are why electrostatics can be done with a scalar potential (Section 11.3) and magnetostatics with a vector potential (Chapter 12).',
      },
    ],
    examples: [
      {
        title: 'Flux out of a small cube',
        problem: 'Compute the flux of a vector field $\\boldsymbol{C}$ out of a small cube with edges $\\Delta x, \\Delta y, \\Delta z$ aligned with the axes, and show it equals $(\\nabla \\cdot \\boldsymbol{C})\\, \\Delta V$.',
        steps: [
          { label: 'Step 1: The two x-faces', text: 'Face 1 (at smaller $x$) contributes $-C_x(1)\\, \\Delta y \\Delta z$. On face 2, $C_x(2) = C_x(1) + \\frac{\\partial C_x}{\\partial x} \\Delta x$, so face 2 contributes $\\left( C_x(1) + \\frac{\\partial C_x}{\\partial x} \\Delta x \\right) \\Delta y \\Delta z$. The pair sums to $\\frac{\\partial C_x}{\\partial x} \\Delta x \\Delta y \\Delta z$.' },
          { label: 'Step 2: The other two pairs', text: 'The $y$-faces give $\\frac{\\partial C_y}{\\partial y} \\Delta x \\Delta y \\Delta z$ and the $z$-faces give $\\frac{\\partial C_z}{\\partial z} \\Delta x \\Delta y \\Delta z$, by identical reasoning.' },
          { label: 'Step 3: Sum all six faces', text: 'Total flux $= \\left( \\frac{\\partial C_x}{\\partial x} + \\frac{\\partial C_y}{\\partial y} + \\frac{\\partial C_z}{\\partial z} \\right) \\Delta x \\Delta y \\Delta z = (\\nabla \\cdot \\boldsymbol{C})\\, \\Delta V$, where $\\Delta V = \\Delta x \\Delta y \\Delta z$.' },
          { label: 'Step 4: Promote to a theorem', text: 'Because fluxes add across cuts, any volume — however complicated its shape — is a sum of such cubes, and the surface integral equals the volume integral of the divergence. That is Gauss’s theorem: $\\int_S \\boldsymbol{C} \\cdot \\boldsymbol{n}\\, da = \\int_V \\nabla \\cdot \\boldsymbol{C}\\, dV$.' },
        ],
        result: 'The divergence is the outgoing flux per unit volume; summing it over a volume reproduces the flux through the boundary.',
      },
      {
        title: 'Field of a point source of heat',
        problem: 'A tiny resistor inside a large block of metal liberates $W$ joules per second, and the flow has reached a steady state. Find the heat-flow vector $\\boldsymbol{h}$ everywhere.',
        steps: [
          { label: 'Step 1: What is conserved', text: 'In steady state with no sources other than the point, all the generated heat must flow out through any closed surface surrounding the source: $\\int_S \\boldsymbol{h} \\cdot \\boldsymbol{n}\\, da = W$, the same $W$ for every such surface.' },
          { label: 'Step 2: Choose a friendly surface', text: 'Take a sphere of radius $R$ centered on the source. Symmetry (plus the guesswork Feynman calls physical intuition) says $\\boldsymbol{h}$ is radial and has the same magnitude everywhere on the sphere.' },
          { label: 'Step 3: Evaluate the integral', text: 'The normal component is just the magnitude $h$, constant over the sphere of area $4\\pi R^2$: $h \\cdot 4\\pi R^2 = W$.' },
          { label: 'Step 4: Solve and interpret', text: '$h = W / 4\\pi R^2$, that is $\\boldsymbol{h} = \\frac{W}{4\\pi R^2} \\boldsymbol{e}_r$. The field is proportional to the source strength and falls off as the inverse square of the distance — obtained without doing a single integral, purely from flux conservation plus symmetry.' },
        ],
        result: '$\\boldsymbol{h} = \\frac{W}{4\\pi R^2}\\boldsymbol{e}_r$ — the heat-flow template for Coulomb’s $1/r^{2}$ field of Section 11.3.',
      },
      {
        title: 'Circulation around a small square',
        problem: 'Compute the circulation of $\\boldsymbol{C}$ around a small square of sides $\\Delta x, \\Delta y$ lying in the $xy$-plane, and identify the result as a component of the curl.',
        steps: [
          { label: 'Step 1: Write the four sides', text: 'Travelling counterclockwise from the corner $(x, y)$: side 1 gives $C_x(1)\\Delta x$, side 2 gives $C_y(2)\\Delta y$, side 3 gives $-C_x(3)\\Delta x$ and side 4 gives $-C_y(4)\\Delta y$ — minus signs because we want the tangential component in the direction of travel.' },
          { label: 'Step 2: Subtract the parallel sides', text: 'The two $x$-sides give $[C_x(1) - C_x(3)]\\Delta x = -\\frac{\\partial C_x}{\\partial y} \\Delta x \\Delta y$, using $C_x(3) = C_x(1) + \\frac{\\partial C_x}{\\partial y} \\Delta y$. The two $y$-sides give $C_y(2)\\Delta y - C_y(4)\\Delta y = +\\frac{\\partial C_y}{\\partial x} \\Delta x \\Delta y$.' },
          { label: 'Step 3: Combine', text: 'Circulation $= \\left( \\frac{\\partial C_y}{\\partial x} - \\frac{\\partial C_x}{\\partial y} \\right) \\Delta x \\Delta y = (\\nabla \\times \\boldsymbol{C})_z \\Delta a$. The parenthesized combination is exactly the $z$-component of the curl.' },
          { label: 'Step 4: Tile any loop', text: 'In vector form the result is $\\oint \\boldsymbol{C} \\cdot d\\boldsymbol{s} = (\\nabla \\times \\boldsymbol{C}) \\cdot \\boldsymbol{n}\\, \\Delta a$ for a differential square of any orientation. Filling an arbitrary loop $\\Gamma$ with such squares — shared sides cancelling — turns the sum into Stokes’ theorem, and shows the curl is the circulation per unit area.' },
        ],
        result: 'Circulation around an infinitesimal loop = normal component of the curl × area; summed over a surface this is Stokes’ theorem.',
      },
    ],
    keyTakeaways: [
      'The line integral of a gradient is path-independent: $\\psi(2) - \\psi(1) = \\int \\nabla\\psi \\cdot d\\boldsymbol{s}$ along any curve.',
      'Fluxes through subdivided volumes (and circulations around subdivided loops) add across the cuts — this is what makes the big theorems work.',
      'Gauss’s theorem: the flux of any vector out of a closed surface equals the volume integral of its divergence; the divergence is outflow per unit volume.',
      'Stokes’ theorem: the circulation of any vector around a loop equals the surface integral of the normal component of its curl over any spanning surface.',
      'A point source of strength $W$ in a conserved flux gives a $1/r^{2}$ radial field, $W/4\\pi R^2$ — the heat-flow twin of Coulomb’s law.',
      'Curl-free fields are gradients (scalar potentials exist); divergence-free fields are curls (vector potentials exist) — the structural facts behind electrostatics and magnetostatics.',
      'Heat conservation plus $\\boldsymbol{h} = -\\kappa \\nabla T$ gives the diffusion equation $\\partial T / \\partial t = D \\nabla^2 T$ with $D = \\kappa / c_v$.',
    ],
    quiz: [
      {
        q: 'Gauss’s theorem says that the surface integral $\\int_S \\boldsymbol{C} \\cdot \\boldsymbol{n}\\, da$ over a closed surface equals:',
        options: ['The line integral of $\\boldsymbol{C}$ around the boundary of $S$', 'The volume integral of $\\nabla \\cdot \\boldsymbol{C}$ over the enclosed volume', 'The volume integral of $\\nabla \\times \\boldsymbol{C}$', 'Zero for any vector field'],
        answer: 1,
        explanation: 'The divergence theorem converts a closed-surface flux into the volume integral of the divergence. The line-integral statement belongs to Stokes’ theorem, and the “zero” answers are only true for special fields, such as the flux of a curl.',
      },
      {
        q: 'The circulation of a vector field around a closed loop is defined as the line integral of:',
        options: ['The normal component of the vector over any spanning surface', 'The tangential component of the vector, taken in a consistent sense around the loop', 'The divergence of the vector over the enclosed volume', 'The gradient of the vector along the loop'],
        answer: 1,
        explanation: 'Circulation pairs the loop with the tangential component. In the frozen-liquid picture it is the speed of the trapped liquid times the circumference.',
      },
      {
        q: 'A point source liberates $W$ joules per second inside a metal block in steady state. The magnitude of the heat-flow vector at radius $R$ is:',
        options: [`$W / 4\\pi R^2$`, `$W / 2\\pi R$`, `$W / 4\\pi R$`, `$W / R^3$`],
        answer: 0,
        explanation: 'Symmetry makes $\\boldsymbol{h}$ radial and constant on a sphere of radius $R$; the flux $h \\cdot 4\\pi R^2$ must carry all $W$, so $h = W/4\\pi R^2$. Note the $1/r^{2}$ (not $1/r$) falloff, matching Coulomb.',
      },
      {
        q: 'If $\\nabla \\times \\boldsymbol{C} = 0$ everywhere in space, then:',
        options: ['$\\boldsymbol{C}$ must be constant', 'The line integral of $\\boldsymbol{C}$ between two points is the same along every path, and $\\boldsymbol{C} = \\nabla\\psi$ for some scalar $\\psi$', 'The flux of $\\boldsymbol{C}$ through every closed surface vanishes', '$\\boldsymbol{C}$ is necessarily the curl of another field'],
        answer: 1,
        explanation: 'By Stokes’ theorem zero curl means zero circulation around every loop, so the integral from (1) to (2) depends only on the endpoints — which is exactly what being a gradient means. The last option describes divergence-free fields instead.',
      },
      {
        q: 'In deriving Stokes’ theorem, the circulation around one small square in the $xy$-plane comes out to be:',
        options: [`$(\\nabla \\cdot \\boldsymbol{C}) \\Delta x \\Delta y$`, `$(\\nabla \\times \\boldsymbol{C})_z \\Delta x \\Delta y$`, `$\\nabla^2 C_z \\Delta x \\Delta y \\Delta z$`, 'Zero for any vector field'],
        answer: 1,
        explanation: 'The four sides combine into $\\left( \\partial C_y / \\partial x - \\partial C_x / \\partial y \\right) \\Delta x \\Delta y$, which is precisely the $z$-component of the curl times the area of the square.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.3
  {
    sectionId: 'hall-ch23-s9',
    readingTime: 11,
    intro: 'Electrostatics proper. Maxwell’s equations split cleanly into an electric pair and a magnetic pair, and the electric pair is almost absurdly simple: the divergence of $\\boldsymbol{E}$ is $\\rho/\\epsilon_0$ and its curl is zero. From Coulomb’s law plus superposition Feynman builds the potential, then turns the flux idea into Gauss’s law and works the classic problems — sphere, line, plane, conductor — with a line of algebra each. A closing surprise: the law is inverse square to one part in a billion.',
    objectives: [
      'State the two equations of electrostatics and derive them from Coulomb’s law plus superposition',
      'Define the electrostatic potential and derive $\\boldsymbol{E} = -\\nabla\\phi$, explaining why path independence needs only radial symmetry, not the inverse square',
      'Derive Gauss’s law in integral and differential form, and explain why it requires the exponent in Coulomb’s law to be exactly two',
      'Compute the fields of a sphere, a spherical shell, an infinite line and an infinite plane of charge by symmetry plus Gauss’s law',
      'Explain the electrostatic properties of conductors and why no stable equilibrium exists in an electrostatic field',
    ],
    concepts: [
      {
        term: 'Statics splits Maxwell’s equations',
        kind: 'definition',
        statement: 'When nothing depends on time, Maxwell’s equations separate into two independent pairs — **electrostatics**, $\\nabla \\cdot \\boldsymbol{E} = \\rho/\\epsilon_0$ and $\\nabla \\times \\boldsymbol{E} = 0$, and **magnetostatics**, $\\nabla \\times \\boldsymbol{B} = \\boldsymbol{j}/\\epsilon_0 c^2$ and $\\nabla \\cdot \\boldsymbol{B} = 0$ — so electricity and magnetism are distinct phenomena until charges or currents change.',
        detail: 'Electrostatics is a neat example of a vector field with zero curl and a given divergence; magnetostatics a field with zero divergence and a given curl — which is why Feynman built the vector calculus first. The interdependence of $\\boldsymbol{E}$ and $\\boldsymbol{B}$ reappears only when the time-derivative terms matter, as in Chapter 13.',
      },
      {
        term: 'Coulomb’s law and superposition',
        kind: 'law',
        statement: 'Between two charges at rest the force is $$\\boldsymbol{F}_1 = \\frac{1}{4\\pi\\epsilon_0}\\, \\frac{q_1 q_2}{r_{12}^2}\\, \\boldsymbol{e}_{12} = -\\boldsymbol{F}_2,$$ along the line joining them; with many charges present, the force on any charge is the vector sum of the Coulomb forces from each of the others.',
        detail: 'That is all there is to electrostatics — Coulomb’s law plus the principle of superposition contain no more and no less than the two field equations. The constant is fixed by definition as $1/4\\pi\\epsilon_0 = 10^{-7} c^2 \\approx 9.0 \\times 10^{9}$ newton·metre²/coulomb². The field of a point charge follows by dividing by the test charge: $\\boldsymbol{E}(1) = \\frac{1}{4\\pi\\epsilon_0} \\frac{q_2}{r_{12}^2} \\boldsymbol{e}_{12}$, and for a continuous distribution with density $\\rho$, $\\boldsymbol{E}$ is the integral of $\\rho(2)\\, dV_2$ contributions over all space.',
      },
      {
        term: 'Electrostatic potential',
        kind: 'definition',
        statement: 'The work done against the field in carrying a unit charge from a reference point $P_0$ to a point $P$ defines the **potential** $$\\phi(P) = -\\int_{P_0}^{P} \\boldsymbol{E} \\cdot d\\boldsymbol{s},$$ a scalar field whose value is the potential energy a unit charge would have at $P$.',
        detail: 'For a single charge at the origin (reference at infinity), $\\phi = \\frac{q}{4\\pi\\epsilon_0 r}$. Potentials superpose like fields, and one scalar integral replaces the three vector integrals of $\\boldsymbol{E}$ — with $1/r$ easier to integrate than $x/r^3$. Crucially, path independence follows only from the force being radial and spherically symmetric; it did not require the $1/r^{2}$ dependence. Any radial force law has a potential.',
      },
      {
        term: 'E = −∇φ',
        kind: 'law',
        statement: 'The electric field is the negative gradient of the potential, $$\\boldsymbol{E} = -\\nabla\\phi,$$ the differential form of the definition of $\\phi$.',
        detail: 'Comparing $\\Delta W = \\frac{\\partial\\phi}{\\partial x}\\Delta x$ from the two-point work with $\\Delta W = -E_x \\Delta x$ from the field gives $E_x = -\\partial\\phi/\\partial x$, and similarly for $y$ and $z$. Since $\\boldsymbol{E}$ is a gradient, $\\nabla \\times \\boldsymbol{E} = 0$ automatically — the second equation of electrostatics comes free. Equipotential surfaces (spheres around a point charge) are everywhere perpendicular to the field lines.',
      },
      {
        term: 'Flux of E and Gauss’s law',
        kind: 'law',
        statement: 'The flux of $\\boldsymbol{E}$ out of any closed surface is zero if the surface encloses no charge, and $q/\\epsilon_0$ if it encloses charge $q$; in general $$\\oint_S \\boldsymbol{E} \\cdot \\boldsymbol{n}\\, da = \\frac{Q_{\\text{inside}}}{\\epsilon_0}, \\qquad \\text{equivalently} \\qquad \\nabla \\cdot \\boldsymbol{E} = \\frac{\\rho}{\\epsilon_0}.$$',
        detail: 'The proof for a point charge is geometric: subdivide the surface into truncated cones with apex at the charge. The two end faces of each cone carry equal and opposite flux — tilting an end face by $\\theta$ increases its area by $1/\\cos\\theta$ and decreases its normal field component by $\\cos\\theta$ — so the total is zero unless the charge lies inside, in which case a small sphere around it computes the flux as $\\frac{1}{4\\pi\\epsilon_0}\\frac{q}{r^2} \\cdot 4\\pi r^2 = q/\\epsilon_0$, independent of radius. Superposition extends this to any charge distribution. Note the whole argument dies if the exponent is not exactly two: Gauss’s law is the inverse square law in disguise.',
      },
      {
        term: 'Fields by symmetry: sphere, line, plane',
        kind: 'method',
        statement: 'With spherical, cylindrical or planar symmetry, Gauss’s law gives the field in one line: outside any spherical distribution $E = Q/4\\pi\\epsilon_0 R^2$; inside a uniform sphere $E = \\rho r / 3\\epsilon_0$; for an infinite line charge $$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r};$$ for an infinite sheet $$E = \\frac{\\sigma}{2\\epsilon_0},$$ and between two opposite sheets $E = \\sigma/\\epsilon_0$ with zero outside.',
        detail: 'Choose the gaussian surface to match the symmetry — a sphere through the field point, a coaxial cylinder of unit length, a box straddling the sheet — and the flux integral collapses to $E$ times an area. Outside a uniform sphere the answer is exactly that of a point charge at the center, the theorem Newton could not prove for years and Feynman gets in three lines. The list of easily solvable problems is soon exhausted; Sections 11.4 develops heavier machinery.',
      },
      {
        term: 'No stable electrostatic equilibrium',
        kind: 'insight',
        statement: 'There are no points of stable equilibrium in any electrostatic field — except right on top of another charge: a restoring field pointing inward toward $P_0$ on every side would have negative flux through a surrounding surface, contradicting Gauss’s law when no charge sits at $P_0$.',
        detail: 'The same argument extends to any rigid combination of charges: for the total force $\\boldsymbol{F} = q_1\\boldsymbol{E}_1 + q_2\\boldsymbol{E}_2$, the divergence $\\nabla \\cdot \\boldsymbol{F} = q_1(\\nabla \\cdot \\boldsymbol{E}_1) + q_2(\\nabla \\cdot \\boldsymbol{E}_2) = 0$ in free space, but stability needs it negative. Mechanical constraints can rescue equilibrium — a charge sliding in a tube with positive charges at both ends — but passive static fields cannot. This is why Thomson’s static atom had to yield to Rutherford–Bohr orbits and finally to quantum mechanics, where the uncertainty principle, not motion, keeps the electron spread out.',
      },
      {
        term: 'Electrostatics of conductors',
        kind: 'law',
        statement: 'In a conductor at electrostatic equilibrium the field is zero everywhere inside, the whole conductor is an equipotential, any excess charge resides on the surface (within one or two atomic layers), the field just outside is normal to the surface with $$E = \\frac{\\sigma}{\\epsilon_0},$$ and an empty cavity enclosed by the conductor has zero field and zero charge on its inner wall.',
        detail: 'Any leftover interior field would keep the free electrons moving, so equilibrium means zero field, hence constant $\\phi$, hence zero divergence and (by Gauss) zero interior charge density. The cavity result needs the circulation law too: Gauss’s law alone permits equal and opposite charges on the inner surface, but any field line across the cavity would give $\\oint \\boldsymbol{E} \\cdot d\\boldsymbol{s} \\neq 0$ through metal where $\\boldsymbol{E} = 0$ — impossible. Shielding therefore works both ways: no static outside charge produces fields inside a closed conductor, and (grounded) inside charges produce none outside. It is safe to sit inside a million-volt Van de Graaff terminal.',
      },
      {
        term: 'How exact is the inverse square law?',
        kind: 'insight',
        statement: 'Because a uniformly charged spherical shell produces exactly zero field inside only if the exponent is exactly two, null experiments bound the deviation: Maxwell found the exponent within $1/10{,}000$; Plimpton and Lawton (1936) pushed it to one part in a billion, and the Lamb–Retherford hydrogen-level measurements (1947) confirmed it to one part in a billion at atomic distances ($10^{-8}$ cm).',
        detail: 'The trick is geometric: paired cones through an interior point cut areas proportional to $r^2$, so charges proportional to area divided by $r^2$ give exactly cancelling fields. Comparing nearly-equal quantities is the basis of the most precise physical measurements. The law still holds at nuclear distances of order $10^{-13}$ cm; at $10^{-14}$ cm electrons scatter off protons as if the proton charge were smeared (the pion cloud), and the coefficient $1/4\\pi\\epsilon_0$ is known to be distance-independent to 15 parts per million. Benjamin Franklin noticed the zero field inside a conducting shell; Priestley guessed the connection to an inverse square law eighteen years before Coulomb’s measurement.',
      },
    ],
    examples: [
      {
        title: 'Field of a uniform sphere of charge — outside and inside',
        problem: 'A sphere of radius $R$ is filled with uniform charge density $\\rho$ and total charge $Q$. Find $\\boldsymbol{E}$ both outside ($r > R$) and inside ($r < R$) the sphere, and check the two answers agree at the surface.',
        steps: [
          { label: 'Step 1: Symmetry first', text: 'No direction is special for a sphere, so $\\boldsymbol{E}$ must be radial with a magnitude depending only on $r$. Take a spherical gaussian surface of radius $r$ concentric with the charge.' },
          { label: 'Step 2: Outside the sphere', text: 'The flux is $E \\cdot 4\\pi r^2$, and Gauss’s law sets it equal to $Q/\\epsilon_0$, so $E = \\frac{1}{4\\pi\\epsilon_0}\\frac{Q}{r^2}$ for $r > R$ — exactly the field of a point charge $Q$ at the center. This is Newton’s problem for gravitation, solved without the integral that delayed him for years.' },
          { label: 'Step 3: Inside the sphere', text: 'For $r < R$ the enclosed charge is only $\\rho \\cdot \\frac{4}{3}\\pi r^3$. Gauss’s law: $E \\cdot 4\\pi r^2 = \\rho \\frac{4}{3}\\pi r^3 / \\epsilon_0$, giving $$E = \\frac{\\rho r}{3\\epsilon_0}.$$ The field grows linearly from zero at the center.' },
          { label: 'Step 4: Check continuity', text: 'At $r = R$ the interior formula gives $\\rho R/3\\epsilon_0$; substituting $\\rho = \\frac{3Q}{4\\pi R^3}$ gives $\\frac{Q}{4\\pi\\epsilon_0 R^2}$ — precisely the exterior value. A thin spherical shell of the same total charge gives zero inside and the same point-charge field outside.' },
        ],
        result: 'Outside: $E = Q/4\\pi\\epsilon_0 r^2$. Inside: $E = \\rho r/3\\epsilon_0$, continuous at the surface — a result reused for the field inside an atomic nucleus.',
      },
      {
        title: 'Line charge and charged sheet in one line each',
        problem: 'Use Gauss’s law to find the field of (a) a very long straight line of charge with $\\lambda$ per unit length, and (b) an infinite plane sheet with surface density $\\sigma$; then assemble the field between two oppositely charged sheets.',
        steps: [
          { label: 'Step 1: Cylinder around the line', text: 'By symmetry the field is radial and depends only on $r$. Take a coaxial cylindrical gaussian surface of radius $r$ and unit length. The end faces contribute nothing (the field is tangential to them), and the curved face contributes $E \\cdot 2\\pi r$.' },
          { label: 'Step 2: Solve for the line', text: 'The charge enclosed is $\\lambda$ (one unit of length), so $E \\cdot 2\\pi r = \\lambda/\\epsilon_0$ and $$E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}.$$ The line-charge field falls as the first power of the distance.' },
          { label: 'Step 3: Box through the sheet', text: 'For the sheet the field is normal to the plane and equal on both sides. A rectangular gaussian box straddling the sheet, with two faces of area $A$ parallel to it, has flux $EA + EA$ and encloses charge $\\sigma A$: $2EA = \\sigma A/\\epsilon_0$, so $$E = \\frac{\\sigma}{2\\epsilon_0}$$ on each side.' },
          { label: 'Step 4: Superpose two sheets', text: 'Two parallel sheets with $+\\sigma$ and $-\\sigma$: outside, the two fields cancel exactly ($E = 0$); between them, they add to $\\sigma/\\epsilon_0$. This doubled field between the plates is the working field of the parallel-plate condenser of Section 11.4.' },
        ],
        result: 'Line: $\\lambda/2\\pi\\epsilon_0 r$. Single sheet: $\\sigma/2\\epsilon_0$ on each side. Two opposite sheets: $\\sigma/\\epsilon_0$ between, zero outside.',
      },
      {
        title: 'The field at a conductor’s surface',
        problem: 'Show that the electric field just outside the surface of a conductor is $\\sigma/\\epsilon_0$ — twice the field of an isolated sheet with the same local density — and explain the factor of two.',
        steps: [
          { label: 'Step 1: Pillbox gaussian surface', text: 'Take a small cylindrical box half inside and half outside the conductor, piercing the surface. The field inside the metal is zero, and just outside it is normal to the surface, so only the outer cap contributes to the flux: $E \\Delta a = \\sigma \\Delta a/\\epsilon_0$.' },
          { label: 'Step 2: State the result', text: 'Cancelling $\\Delta a$: $E = \\sigma/\\epsilon_0$ just outside the conductor — Feynman’s Eq. (5.8), the working tool for recovering surface charge from a known field.' },
          { label: 'Step 3: Why twice the isolated sheet', text: 'The charges in the immediate neighborhood of a point on the surface produce $\\sigma/2\\epsilon_0$ both inward and outward, just like an isolated sheet. The rest of the charges on the conductor “conspire” to add another $\\sigma/2\\epsilon_0$ outside — and the same amount inside, which cancels the inward half and enforces $E = 0$ in the metal.' },
          { label: 'Step 4: Read off the cavity argument', text: 'The same style of reasoning shows an empty cavity in a conductor has zero field: a gaussian surface in the metal enclosing the cavity sees zero flux (so zero net inner charge), and any residual $\\oint \\boldsymbol{E} \\cdot d\\boldsymbol{s}$ around a loop through the cavity would contradict the zero-circulation law.' },
        ],
        result: 'Just outside a conductor $E = \\sigma/\\epsilon_0$: the local patch supplies $\\sigma/2\\epsilon_0$ and the rest of the conductor’s charge adds the other half.',
      },
    ],
    keyTakeaways: [
      'Coulomb’s law plus superposition is the whole content of electrostatics; the field equations $\\nabla \\cdot \\boldsymbol{E} = \\rho/\\epsilon_0$ and $\\nabla \\times \\boldsymbol{E} = 0$ say no more and no less.',
      'The potential $\\phi = -\\int \\boldsymbol{E} \\cdot d\\boldsymbol{s}$ exists because the work around any closed path is zero — a fact requiring only radial symmetry, not the inverse square law. $\\boldsymbol{E} = -\\nabla\\phi$ gives the field from one scalar integral; equipotentials are perpendicular to field lines.',
      'Gauss’s law, $\\oint \\boldsymbol{E} \\cdot \\boldsymbol{n}\\, da = Q_{\\text{inside}}/\\epsilon_0$, is the inverse square law restated — and it fails unless the exponent is exactly two.',
      'By symmetry: sphere outside $Q/4\\pi\\epsilon_0 r^2$, inside $\\rho r/3\\epsilon_0$; line $\\lambda/2\\pi\\epsilon_0 r$; sheet $\\sigma/2\\epsilon_0$; between opposite sheets $\\sigma/\\epsilon_0$.',
      'No stable equilibrium exists in an electrostatic field — the reason atoms are not little solar systems of static charges.',
      'Conductors: $\\boldsymbol{E} = 0$ inside, charge on the surface, $E = \\sigma/\\epsilon_0$ just outside, and zero field in any empty cavity — shielding works both ways.',
      'Null experiments inside charged shells verify the exponent 2 to one part in a billion, from laboratory distances down to atomic scales.',
    ],
    quiz: [
      {
        q: 'Why does Gauss’s law hold only because the Coulomb force falls off exactly as $1/r^{2}$?',
        options: ['Because the flux integral would otherwise diverge at infinity', 'Because areas cut out by cones grow as $r^2$, so any other power leaves unbalanced flux through the two ends', 'Because the potential would cease to exist', 'Because superposition would fail for other powers'],
        answer: 1,
        explanation: 'The truncated-cone argument pairs fluxes through matched end faces: the field magnitude $\\propto 1/r^2$ exactly compensates the area $\\propto r^2$. An inverse-cube field would leave a net inward field inside a shell — which is exactly how the precision experiments are interpreted.',
      },
      {
        q: 'A very long line of charge carries $\\lambda$ per unit length. At distance $r$ the field magnitude is:',
        options: [`$\\lambda/4\\pi\\epsilon_0 r^2$`, `$\\lambda/2\\pi\\epsilon_0 r$`, `$\\sigma/2\\epsilon_0$`, `$\\lambda r/3\\epsilon_0$`],
        answer: 1,
        explanation: 'A coaxial cylinder of unit length encloses charge $\\lambda$ and has flux $E \\cdot 2\\pi r$, so $E = \\lambda/2\\pi\\epsilon_0 r$ — inverse first power of the distance, the signature of a line source.',
      },
      {
        q: 'The field just outside the surface of a conductor with local surface charge density $\\sigma$ is:',
        options: ['$\\sigma/2\\epsilon_0$, the same as an isolated sheet', `$\\sigma/\\epsilon_0$`, `$2\\sigma/\\epsilon_0$`, 'Zero, because the charge is inside the conductor'],
        answer: 1,
        explanation: 'A pillbox straddling the surface gives $E = \\sigma/\\epsilon_0$ — double the isolated-sheet value, because the rest of the conductor’s charges contribute an equal extra field outside while cancelling the field inside.',
      },
      {
        q: 'A positive test charge is placed at the center of an equilateral triangle of negative charges. The equilibrium there is:',
        options: ['Stable, because the net force is zero', 'Stable only if gravity is included', 'Unstable — no point of stable equilibrium exists in an electrostatic field', 'Stable only when the triangle rotates'],
        answer: 2,
        explanation: 'Stability would need the field to point inward on all sides of a surrounding surface — a negative net flux with no enclosed charge, which Gauss’s law forbids. The same argument extends to any rigid set of charges; static atoms built this way would collapse.',
      },
      {
        q: 'A small metal ball touches the inside of a charged hollow conductor and is then withdrawn. How much charge does it carry away?',
        options: ['The same as it would pick up touching the outside', 'Zero — the field and the surface charge inside the shell are exactly zero', 'Half the conductor’s total charge', 'An amount depending on the shape of the cavity'],
        answer: 1,
        explanation: 'The field in an empty cavity is zero and there is no charge on the inner surface, so the ball picks up nothing. This is Franklin’s observation, and the basis of the most precise tests of the inverse square law.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.4
  {
    sectionId: 'hall-ch22-s20',
    readingTime: 11,
    intro: 'When the charges are given, electrostatics is an integral; when conductors appear, it becomes a puzzle — the charges hide on surfaces until the whole conductor is an equipotential. Feynman’s elegant escape is the method of images: solve an easy problem with point charges, notice one of its equipotentials, and replace it by a metal sheet. Then dipoles, condensers, sharp points (with a peek at seeing atoms), and finally the complex-variable trick that solves all two-dimensional problems at once.',
    objectives: [
      'Combine the two electrostatic equations into the Poisson equation $\\nabla^2\\phi = -\\rho/\\epsilon_0$ and state its integral solution',
      'Derive the dipole potential and field, and the dipole moment of an arbitrary charge distribution',
      'Apply the method of images to a point charge near a grounded plane and near a grounded sphere',
      'Derive $Q = CV$ and $C = \\epsilon_0 A/d$ for parallel plates, and the capacitance $4\\pi\\epsilon_0 a$ of a sphere',
      'Explain why fields concentrate at sharp points on conductors, and how functions of a complex variable generate two-dimensional fields',
    ],
    concepts: [
      {
        term: 'Poisson’s equation',
        kind: 'law',
        statement: 'Substituting $\\boldsymbol{E} = -\\nabla\\phi$ into Gauss’s law collapses electrostatics into a single equation for the potential, $$\\nabla^2\\phi = -\\frac{\\rho}{\\epsilon_0},$$ whose solution for specified $\\rho$ is $\\phi(1) = \\frac{1}{4\\pi\\epsilon_0}\\int \\frac{\\rho(2)\\, dV_2}{r_{12}}$.',
        detail: 'The whole subject, from a mathematical point of view, is the study of solutions of this one equation, followed by $\\boldsymbol{E} = -\\nabla\\phi$. Where there is no charge it reduces to Laplace’s equation $\\nabla^2\\phi = 0$ — a boundary-value problem: even a charged beer can closed at both ends defeats analytic attack and needs numerical methods or physical analogs such as the electrolytic tank.',
      },
      {
        term: 'The electric dipole',
        kind: 'definition',
        statement: 'For charges $+q$ and $-q$ separated by $d$, observed at distances large compared with $d$, the potential is $$\\phi = \\frac{1}{4\\pi\\epsilon_0}\\,\\frac{p\\cos\\theta}{r^2}, \\qquad p = qd,$$ with $\\boldsymbol{p}$ pointing from $-q$ toward $+q$; the field falls as $1/r^3$.',
        detail: 'Expanding the two point-charge potentials to first order in $d$ (the binomial approximation of $r^2(1 - zd/r^2)^{-1/2}$) leaves the product $qd$ — the dipole moment. On the axis ($\\theta = 0$) the field is $2p/4\\pi\\epsilon_0 r^3$, twice its equatorial magnitude; the components follow from $E_z = -\\partial\\phi/\\partial z$: $E_z = \\frac{p}{4\\pi\\epsilon_0}\\frac{3\\cos^2\\theta - 1}{r^3}$ and $E_\\perp = \\frac{p}{4\\pi\\epsilon_0}\\frac{3\\cos\\theta\\sin\\theta}{r^3}$. In vector form $\\phi = -\\frac{1}{4\\pi\\epsilon_0}\\boldsymbol{p} \\cdot \\nabla \\frac{1}{r}$, the potential that reappears throughout the theory of radiation (Chapter 13) and matter.',
      },
      {
        term: 'Dipole moment of an arbitrary distribution',
        kind: 'definition',
        statement: 'Far from any neutral lump of charge, the potential expands as $\\phi = \\frac{1}{4\\pi\\epsilon_0}\\left( \\frac{Q}{R} + \\frac{\\boldsymbol{p} \\cdot \\boldsymbol{e}_R}{R^2} + \\cdots \\right)$ with the **dipole moment** $\\boldsymbol{p} = \\sum_i q_i \\boldsymbol{d}_i$ measured from any origin in the middle of the distribution.',
        detail: 'The first term dies if the object is neutral; what remains is the dipole term, falling as $1/R^2$. Feynman’s superposition gem: two uniformly charged spheres of opposite sign, slightly displaced, are equivalent to a surface density $\\sigma = \\sigma_0\\cos\\theta$ on a sphere, with dipole moment $p = 4\\pi\\sigma_0 a^3/3$ and a perfectly uniform field $E = \\sigma_0/3\\epsilon_0$ inside — a construction that returns in the theory of dielectrics (Chapter 12). The water molecule has a strong permanent dipole moment; carbon dioxide, by symmetry, has none and leads with a quadrupole ($1/R^3$) term.',
      },
      {
        term: 'Method of images',
        kind: 'method',
        statement: 'If a known charge configuration has an equipotential surface, replacing that surface by a thin sheet of metal at the same potential leaves the outside field unchanged — so the field of a point charge near such a conductor equals the field of the charge plus a fictitious **image charge** placed behind the surface. Charges on a conductor distribute themselves so that the surface is an equipotential; finding that distribution is a hard boundary-value problem — guess a distribution, compute $\\phi$ on the surface, and iterate until it is constant.',
        detail: 'Inside the metal the field is zero and the two regions are independent (Section 11.3), so only the outside solution matters. The image charge is not real — it is a bookkeeping device that enforces the boundary condition. For a grounded conducting plane, the image of $+q$ is simply $-q$ at the mirror position, because the midplane between equal and opposite charges is at zero potential. Nature solves it by letting the charges push and pull until they balance; for a human it is tedious unless a trick is available. This is the entry point for indirect methods: catalogs of solutions built backwards from known equipotential shapes \u2014 someone solved an easy problem with fixed charges, spotted an equipotential surface, and published the shape it fit.',
      },
      {
        term: 'Point charge near a grounded plane and sphere',
        kind: 'method',
        statement: 'For a charge $q$ at distance $a$ from a grounded plane, the image is $-q$ at distance $a$ behind it; the induced surface density is $$\\sigma(\\rho) = -\\frac{2aq}{4\\pi (a^2 + \\rho^2)^{3/2}},$$ which integrates to exactly $-q$, and the attraction is $$F = \\frac{1}{4\\pi\\epsilon_0}\\,\\frac{q^2}{(2a)^2}.$$ For a grounded sphere of radius $a$ centered a distance $b$ from $q$, the image is $q^{\\prime} = -(a/b)\\,q$ at distance $a^2/b$ from the center.',
        detail: 'The sphere works because a sphere is the locus of points whose distances from two fixed points are in a constant ratio: with $r_2/r_1 = a/b$ and $q^{\\prime}/q = -a/b$ the potential on the surface is zero. An insulated neutral sphere needs, in addition, a central charge $q^{\\prime\\prime} = +(a/b)q$ to keep the total charge zero — the net attraction persists because the nearby induced negative charge outweighs the far-side positive charge. Two oppositely charged spheres generate an infinite ladder of images, “like the picture on the box of baking powder,” which converges fast.',
      },
      {
        term: 'Condensers and capacitance',
        kind: 'definition',
        statement: 'For any two conductors carrying $+Q$ and $-Q$, the potential difference is proportional to the charge, $Q = CV$, defining the **capacity** $C$; for parallel plates $$C = \\frac{\\epsilon_0 A}{d},$$ and for a sphere (second terminal at infinity) $C = 4\\pi\\epsilon_0 a$.',
        detail: 'The proportionality is superposition: double the charge, double the field, double the work per unit charge. Between plates the field is $\\sigma/\\epsilon_0$ (Section 11.3), so $V = \\sigma d/\\epsilon_0 = Qd/\\epsilon_0 A$. The formula slightly underestimates a real condenser because the charge density rises near the edges — the field “fringes.” Units: one coulomb per volt is a farad, $\\epsilon_0 \\approx \\frac{1}{36\\pi \\times 10^9}$ farad per metre, and practical sizes run from a picofarad (plates of one square centimetre a millimetre apart) to thousands of microfarads in power-supply filters.',
      },
      {
        term: 'Sharp points and field emission',
        kind: 'insight',
        statement: 'On a conductor at given potential the field is highest where the radius of curvature is smallest: for a big sphere (radius $a$, charge $Q$) wired to a small sphere (radius $b$, charge $q$), equal potentials $Q/a = q/b$ give $$\\frac{E_a}{E_b} = \\frac{b}{a}$$ — the fields are inversely proportional to the radii.',
        detail: 'Charge crowds to the tip because that is as far as it can get from the rest of the surface; a high local $\\sigma$ means a high field, and air breaks down when the field is great enough for loose charges to knock electrons off atoms — the spark. The field-emission microscope exploits it: a needle tip of about 1000 angstroms in an evacuated bulb, with fields up to 40 million volts per centimetre, pulls electrons off radially onto a fluorescent coating. With helium ions instead of electrons the quantum wavelengths are smaller and magnifications of 2,000,000 times are reached — the ring pattern of individual tungsten atoms, human beings’ first look at atoms.',
      },
      {
        term: 'Two-dimensional fields and complex variables',
        kind: 'method',
        statement: 'For fields independent of $z$, write $z = x + iy$ and pick any ordinary function $F(z) = U(x, y) + iV(x, y)$: the Cauchy–Riemann relations $\\partial U/\\partial x = \\partial V / \\partial y$, $\\partial V/\\partial x = -\\partial U/\\partial y$ guarantee that **both** $U$ and $V$ satisfy the two-dimensional Laplace equation, so either can serve as an electrostatic potential and the other gives its field lines.',
        detail: 'Example: $F(z) = z^2$ gives $U = x^2 - y^2$ (equipotentials: rectangular hyperbolas) and $V = 2xy$ (orthogonal field lines) — the field at a right-angle conducting corner, with $E_x = -\\partial\\phi/\\partial x = -2x$ proportional to distance from the axis, the configuration of quadrupole lenses. $F(z) = \\sqrt{z}$ gives the field near the edge of a thin plate, $z^{2/3}$ the field outside a rectangular corner, $\\ln z$ a line charge, and $1/z$ the two-dimensional dipole. The method is powerful but limited: two dimensions only, and indirect.',
      },
      {
        term: 'Fields fixed by other laws of physics',
        kind: 'insight',
        statement: 'When the charges are neither fixed nor on conductors, their positions follow a second physical law: plasma electrons displaced by $s$ feel a restoring force giving oscillations at the **plasma frequency** $\\omega_p^2 = n_0 q_e^2/\\epsilon_0 m_e$, and ions around a charged colloidal particle shield it over the **Debye length** $D^2 = \\epsilon_0 kT/2n_0 q_e^2$.',
        detail: 'In a plasma the density change $n = n_0(1 - \\partial s/\\partial x)$ creates the charge density $\\rho = n_0 q_e \\partial s/\\partial x$, whose field pushes the electrons back — radio waves reflect from the ionosphere unless their frequency exceeds $\\omega_p$, and fast electrons crossing metal foils lose energy in quanta $\\hbar\\omega_p$. In an electrolyte, statistical mechanics distributes the ions as $n_0 e^{\\mp q_e\\phi/kT}$, the potential decays as $\\phi = (\\sigma D/\\epsilon_0) e^{-x/D}$, and enough salt thins the sheath until colloids coagulate — “salting out.” Above a grid of charged wires, Fourier components of the potential die away as $e^{-2\\pi z/a}$ — which is why copper screen shields almost as well as sheet metal.',
      },
    ],
    examples: [
      {
        title: 'Charge near a grounded conducting plane — the mirror charge',
        problem: 'A point charge $q$ sits a distance $a$ from a grounded, infinite conducting plane. Find the field, the induced surface charge density on the plane, and the force on the charge. Evaluate the force for $q = 1\\;\\mu\\text{C}$ at $a = 5$ cm.',
        steps: [
          { label: 'Step 1: Find the image problem', text: 'The plane halfway between $+q$ and an equal imaginary $-q$ at distance $a$ behind it is an equipotential at zero potential — exactly the grounded boundary condition. Replace the plane by the image charge: outside the conductor the field is that of $\\pm q$.' },
          { label: 'Step 2: Normal field on the plane', text: 'At a surface point a distance $\\rho$ from the foot of the charge, the normal component from $+q$ alone is $E_{n+} = -\\frac{1}{4\\pi\\epsilon_0} \\frac{aq}{(a^2 + \\rho^2)^{3/2}}$. The image doubles the normal component (and cancels the parallel ones).' },
          { label: 'Step 3: Recover the induced charge', text: 'Using $\\sigma = \\epsilon_0 E$ from Section 11.3: $$\\sigma(\\rho) = -\\frac{2aq}{4\\pi (a^2 + \\rho^2)^{3/2}}.$$ Integrating over the whole plane gives exactly $-q$ — the total induced charge equals the image, a strong check on the method.' },
          { label: 'Step 4: Force on the charge', text: 'The field at $q$ is the image’s field, so the attraction is $F = \\frac{1}{4\\pi\\epsilon_0}\\frac{q^2}{(2a)^2}$ — vastly easier than integrating the pull of $\\sigma(\\rho)$.' },
          { label: 'Step 5: Numbers', text: 'With $q = 10^{-6}\\;\\text{C}$ and $2a = 0.10\\;\\text{m}$: $F = (9 \\times 10^{9}) \\times (10^{-12}) / (10^{-2}) = 0.9\\;\\text{N}$, directed toward the plane.' },
        ],
        result: '$\\sigma(\\rho) = -\\frac{2aq}{4\\pi(a^2+\\rho^2)^{3/2}}$ integrating to $-q$; force $F = \\frac{1}{4\\pi\\epsilon_0}\\frac{q^2}{(2a)^2}$, about $0.9$ N for a microcoulomb at 5 cm.',
      },
      {
        title: 'Dipole field: on the axis versus on the equator',
        problem: 'From the dipole potential $\\phi = \\frac{1}{4\\pi\\epsilon_0} \\frac{p\\cos\\theta}{r^2}$, find the field on the axis of the dipole and on its perpendicular bisector, and compare.',
        steps: [
          { label: 'Step 1: Gradient of the potential', text: 'For a dipole along $z$, $\\phi = \\frac{1}{4\\pi\\epsilon_0} \\frac{pz}{r^3}$. Taking $-\\partial/\\partial z$ (holding the geometry straight) gives the axial-plus-polar components: $E_z = \\frac{p}{4\\pi\\epsilon_0} \\frac{3\\cos^2\\theta - 1}{r^3}$ and $E_\\perp = \\frac{p}{4\\pi\\epsilon_0} \\frac{3\\cos\\theta \\sin\\theta}{r^3}$.' },
          { label: 'Step 2: On the axis', text: 'At $\\theta = 0$ only $E_z$ survives: $E = \\frac{2p}{4\\pi\\epsilon_0 r^3}$, pointing along the dipole axis.' },
          { label: 'Step 3: On the equator', text: 'At $\\theta = 90°$ again only $E_z$ survives but with the sign flipped: $E = \\frac{p}{4\\pi\\epsilon_0 r^3}$, opposite to the dipole direction.' },
          { label: 'Step 4: Interpret', text: 'The axial field is twice the equatorial one, both falling as $1/r^3$ — one power faster than the point-charge field because the $1/r$ potentials of $+q$ and $-q$ nearly cancel. This far-field signature is why the dipole term dominates the fields of all neutral matter.' },
        ],
        result: 'Axis: $2p/4\\pi\\epsilon_0 r^3$; equator: $p/4\\pi\\epsilon_0 r^3$ opposite in sign — the dipole field falls as the cube of the distance.',
      },
      {
        title: 'Reading F(z) = z² as an electrostatics problem',
        problem: 'Show how the single function $F(z) = z^2$ generates the field near a right-angle conducting corner and the quadrupole-lens field.',
        steps: [
          { label: 'Step 1: Split into real and imaginary parts', text: 'With $z = x + iy$, $z^2 = (x^2 - y^2) + i(2xy)$, so $U = x^2 - y^2$ and $V = 2xy$. Both satisfy $\\nabla^2 f = 0$ — check: $\\partial^2(x^2 - y^2)/\\partial x^2 + \\partial^2(x^2 - y^2)/\\partial y^2 = 2 - 2 = 0$.' },
          { label: 'Step 2: Read the equipotentials', text: 'Taking $U$ as the potential, the equipotentials $x^2 - y^2 = A$ are rectangular hyperbolas; for $A = 0$ they degenerate into the two diagonal straight lines through the origin.' },
          { label: 'Step 3: Match a boundary-value problem', text: 'Two electrodes shaped like the hyperbolas (or a conductor folded into a right-angle corner) at different potentials produce exactly this field near the corner — the lines $V = 2xy =$ constant, orthogonal to the equipotentials, are the field lines.' },
          { label: 'Step 4: The quadrupole bonus', text: 'The field is $E_x = -\\partial U/\\partial x = -2x$ — proportional to the distance from the axis. Four hyperbola-shaped electrodes at potentials $\\pm V$ realize this field, focusing particle beams in a quadrupole lens; the field-line picture comes free from the curves $V = $ constant.' },
        ],
        result: 'One complex function delivers two solutions: $U$’s hyperbolas are the equipotentials, $V$’s hyperbolas the field lines, and $E_x = -2x$ is the quadrupole focusing field.',
      },
    ],
    keyTakeaways: [
      'Electrostatics is the Poisson equation $\\nabla^2\\phi = -\\rho/\\epsilon_0$; with conductors it becomes a boundary-value problem for Laplace’s equation $\\nabla^2\\phi = 0$.',
      'A dipole of moment $p = qd$ has potential $p\\cos\\theta/4\\pi\\epsilon_0 r^2$ and a field falling as $1/r^3$; any neutral object’s far field is its dipole field.',
      'Method of images: replace an equipotential surface of an easy point-charge problem by a conductor; for a grounded plane the image is the mirror charge $-q$. The induced density $\\sigma(\\rho) = -2aq/4\\pi(a^2+\\rho^2)^{3/2}$ integrates to $-q$, and the plane attracts the charge with $q^2/4\\pi\\epsilon_0(2a)^2$.',
      'For a sphere of radius $a$ with charge $q$ at distance $b$: image $-(a/b)q$ at $a^2/b$; add a central $+(a/b)q$ for an insulated neutral sphere.',
      'Capacitance is defined by $Q = CV$; parallel plates give $C = \\epsilon_0 A/d$, a sphere $4\\pi\\epsilon_0 a$, with one picofarad being $1\\;\\text{cm}^2$ of plate a millimetre apart.',
      'Fields at a conductor’s sharp points scale inversely with the radius of curvature — the principle of lightning rods and of the field-ion microscope that first showed single atoms.',
      'Any function of $z = x + iy$ splits into two functions of $x$ and $y$ that both solve the two-dimensional Laplace equation: pick $F(z)$, get the equipotentials and the field lines together.',
    ],
    quiz: [
      {
        q: 'The method of images for a point charge $q$ near a grounded conducting plane replaces the plane by:',
        options: ['A charge $+q$ at the mirror position behind the plane', 'A charge $-q$ at the mirror position behind the plane', 'A uniformly charged sheet $-\\sigma$ filling the plane', 'A grounded sphere behind the plane'],
        answer: 1,
        explanation: 'The midplane between equal and opposite charges is at zero potential — exactly the grounded boundary condition — so $-q$ at the mirror point reproduces the field everywhere on the charge’s side.',
      },
      {
        q: 'Integrating the induced surface density $\\sigma(\\rho) = -\\frac{2aq}{4\\pi(a^2+\\rho^2)^{3/2}}$ over the whole plane gives:',
        options: [`$-q/2$`, 'Zero, by symmetry', '$-q$, the full image charge', 'An amount depending on $a$'],
        answer: 2,
        explanation: 'Feynman offers this as the interesting check on the method: the total induced charge equals the image exactly. Any other result would mean the image construction had failed.',
      },
      {
        q: 'Compared with a point charge’s $1/r^{2}$ field, the electric field of a dipole falls off as:',
        options: [`$1/r$`, `$1/r^{2}$`, `$1/r^{3}$`, `$1/r^{4}$`],
        answer: 2,
        explanation: 'The potentials of $+q$ and $-q$, each $\\propto 1/r$, nearly cancel; the leading survivor is the dipole potential $\\propto 1/r^2$, whose gradient — the field — goes as $1/r^3$. On the axis the field is twice its equatorial value.',
      },
      {
        q: 'A big sphere of radius $a$ and a small sphere of radius $b$ are connected by a thin wire and charged together. The ratio of the surface fields is $E_a / E_b =$:',
        options: [`$a/b$`, '$b/a$ — the small sphere has the stronger field', '$1$ — connected conductors share the field equally', `$(a/b)^2$`],
        answer: 1,
        explanation: 'Equal potentials force $Q/a = q/b$; the surface field goes like charge over radius squared, so $E_a/E_b = (Q/a^2)/(q/b^2) = b/a$. Sharp points (small $b$) carry intense fields — hence sparks, lightning rods, and field-emission microscopes.',
      },
      {
        q: 'A complex function $F(z) = U(x, y) + iV(x, y)$ helps solve two-dimensional electrostatics because:',
        options: ['Complex numbers make the field rotate by 90 degrees', 'The Cauchy–Riemann equations force both $U$ and $V$ to satisfy Laplace’s equation', 'Every conductor is naturally two-dimensional', 'It converts Poisson’s equation into an algebraic equation'],
        answer: 1,
        explanation: 'For any ordinary function of $z$, $\\partial U/\\partial x = \\partial V/\\partial y$ and $\\partial V/\\partial x = -\\partial U/\\partial y$ imply $\\nabla^2 U = \\nabla^2 V = 0$ — two free solutions of Laplace’s equation per function, one for equipotentials and the orthogonal one for field lines.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.5
  {
    sectionId: 'hall-ch24-s16',
    readingTime: 11,
    intro: 'Energy ties electrostatics together and then sends it into the sky. Assembling charges, charging condensers, binding salt crystals and nuclei — all one bookkeeping of work — until Feynman relocates the energy to the field itself, $\\epsilon_0 E^2/2$ per cubic metre, with the unsettling bonus that a point charge would carry infinite energy. Then the atmosphere: a permanent 100 V/m field, a 400,000-volt planet-sized battery drained by 1800 amperes and recharged by forty thousand thunderstorms a day.',
    objectives: [
      'Compute the electrostatic energy of a system of point charges and of a uniformly charged sphere',
      'Derive $U = Q^2/2C = \\frac{1}{2}CV^2$ and use virtual work to find the force between condenser plates, explaining the factor $\\frac{1}{2}$',
      'Show that the energy can be located in the field with density $u = \\epsilon_0 E^2/2$, and evaluate it for a charged sphere',
      'Estimate the binding of ionic crystals and the electrostatic energy of nuclei from Feynman’s numbers',
      'Describe the atmospheric electric field, its currents, and the thunderstorm machinery that maintains it',
    ],
    concepts: [
      {
        term: 'The energy of charge systems and the uniform sphere',
        kind: 'law',
        statement: 'The electrostatic energy of a collection of charges is the sum over all pairs, $$U = \\sum_{\\text{all pairs}} \\frac{q_i q_j}{4\\pi\\epsilon_0 r_{ij}},$$ and for a continuous distribution the sum becomes the integral $U = \\frac{1}{2}\\int \\rho\\phi\\, dV$. Assembling a uniformly charged sphere of total charge $Q$ and radius $a$ by piling on thin spherical shells requires $U = \\frac{4\\pi\\rho^2 a^5}{15\\epsilon_0} = \\frac{3}{5}\\, \\frac{Q^2}{4\\pi\\epsilon_0 a},$ so the average of $1/r_{ij}$ over all pairs of points in the sphere is $6/5a$.',
        detail: 'Each pair’s energy is the work done against the field to bring the two charges together from infinity. The factor $\\frac{1}{2}$ in the integral form counts each pair twice — the same bookkeeping that puts $\\frac{1}{2}$ in $\\frac{1}{2}CV^2$. This pair-sum is the tool for crystals and nuclei below. At radius $r$ the charge already gathered is $Q_r = \\frac{4}{3}\\pi\\rho r^3$ and the shell being added is $dQ = \\rho 4\\pi r^2 dr$, so $dU = \\frac{Q_r dQ}{4\\pi\\epsilon_0 r} = \\frac{4\\pi\\rho^2 r^4 dr}{3\\epsilon_0}$; integrating from $0$ to $a$ gives the result. A thin spherical shell (or any sphere treated as a condenser with $C = 4\\pi\\epsilon_0 a$) has $U = Q^2/2C = \\frac{Q^2}{2 \\cdot 4\\pi\\epsilon_0 a}$, which is exactly $5/6$ of the uniform sphere\u2019s energy.',
      },
      {
        term: 'Energy of a condenser and forces on conductors',
        kind: 'law',
        statement: 'Charging a condenser by transferring charge in steps $dU = V\\, dQ = Q\\, dQ/C$ gives $$U = \\frac{Q^2}{2C} = \\frac{1}{2}CV^2,$$ and the principle of virtual work then gives the force between parallel plates as $F = Q^2/2\\epsilon_0 A = \\frac{1}{2}QE_0$.',
        detail: 'The surprising factor $\\frac{1}{2}$ in $F = \\frac{1}{2}QE_0$ arises because $E_0 = \\sigma/\\epsilon_0$ is the field outside the surface charge layer: within the layer the field ramps from zero to $E_0$, so the average field acting on the surface charges is only $E_0/2$. If the virtual displacement is made at constant voltage instead of constant charge, one must also account for the work done by the charging source — done correctly, the force is the same.',
      },
      {
        term: 'Energy in the field',
        kind: 'law',
        statement: 'The energy of any charge distribution can be written as an integral over all space of the **field energy density** $$u = \\frac{\\epsilon_0 E^2}{2}, \\qquad U = \\int_{\\text{all space}} \\frac{\\epsilon_0 E^2}{2}\\; dV.$$',
        detail: 'Start from $U = \\frac{1}{2}\\int\\rho\\phi\\, dV$, insert $\\rho = -\\epsilon_0\\nabla^2\\phi$, and use the identity $\\phi\\nabla^2\\phi = \\nabla \\cdot (\\phi\\nabla\\phi) - (\\nabla\\phi) \\cdot (\\nabla\\phi)$: Gauss’s theorem turns the first piece into a surface integral at infinity, which dies off as $1/R$ and vanishes, leaving $U = \\int \\frac{\\epsilon_0}{2}(\\nabla\\phi)^2 dV$. Locating energy in the field (rather than on the charges) is demanded by local conservation of energy and by gravitation — via $E = mc^2$ all energy is a source of gravity, so it must have an address. Applied to a point charge, the integral $\\int \\frac{q^2}{8\\pi\\epsilon_0 r^2} dr$ diverges at $r = 0$: the electron’s “self-energy” is infinite, a difficulty never fully resolved.',
      },
      {
        term: 'The energy of an ionic crystal',
        kind: 'insight',
        statement: 'Summing Coulomb pair energies over the NaCl lattice (ion spacing $a = 2.81$ angstroms) gives $$U = -1.747\\, \\frac{e^2}{a} = -8.94\\;\\text{eV per molecule},$$ against the measured dissociation energy of $7.92$ eV per molecule.',
        detail: 'Here $e^2$ is shorthand for $q_e^2/4\\pi\\epsilon_0 = 2.3068 \\times 10^{-28}$ newton·metre², so $e^2/a = 5.12$ eV. The first line of ions alone contributes $-2(e^2/a)\\ln 2 = -1.386\\, e^2/a$; summing every line gives the Madelung-like total $-1.747\\, e^2/a$. The 10 percent excess comes from the slight squashing of the “rigid” ions: the repulsion contributes about $1/9.4$ of the electrostatic term with opposite sign, bringing the estimate to $7.99$ eV, and the residual gap closes with the kinetic energy of crystal vibrations. This was the first macroscopic property computed from atomic physics.',
      },
      {
        term: 'The electrostatic energy of nuclei',
        kind: 'insight',
        statement: 'Treating a nucleus as a uniformly charged sphere, $U = \\frac{3}{5}\\frac{Z(Z-1)e^2}{r}$; the $1.982$ MeV by which the ground state of $\\text{C}^{11}$ exceeds that of $\\text{B}^{11}$, corrected by $0.784$ MeV of rest-mass difference, gives an electrostatic energy of $2.766$ MeV and a radius $r = 3.12 \\times 10^{-13}$ cm.',
        detail: 'The striking similarity of the excited-state ladders of $\\text{B}^{11}$ (five protons, six neutrons) and $\\text{C}^{11}$ (six and five) reveals that the nuclear parts of the $n$–$n$, $p$–$p$ and $n$–$p$ forces are identical; the small offset between the two spectra is electrical. Scattering measurements give $r = A^{1/3} r_0$ with $r_0 = 1.2 \\times 10^{-13}$ cm, predicting $2.7 \\times 10^{-13}$ cm for $A = 11$ — within about 15 percent of the electrostatic value; treating the extra proton as orbiting a core of five pairs (energy $\\frac{5}{6}$ of the sphere formula) closes most of the gap. Electricity works down to $10^{-13}$ cm.',
      },
      {
        term: 'The atmospheric potential gradient',
        kind: 'insight',
        statement: 'On an ordinary day the potential increases by about 100 volts per metre going up, so a person’s nose sits roughly 200 V above the feet; the total potential difference from ground to the conducting layers near 50 km altitude is about 400,000 volts.',
        detail: 'The sign corresponds to a negative charge on the earth. You feel nothing because your body is a good conductor: you and the ground form one equipotential, distorting the equipotential surfaces so that almost no potential difference remains between head and feet. The field can be measured by letting an insulated conductor (or a leaking bucket of water — drops carry off surface charge) settle to air potential, or by covering a grounded plate and reading the charge that flows off it: $\\sigma = \\epsilon_0 E$. A dielectrics preview: this same field polarizes the molecules of air, the subject of Chapter 12.',
      },
      {
        term: 'Currents in the clear atmosphere',
        kind: 'insight',
        statement: 'Air conducts feebly because cosmic rays and radioactivity ionize it; a current density of order $10^{-12}$ amperes per square metre flows downward everywhere, totalling about 1800 amperes over the whole earth — a 400,000-volt supply delivering roughly 700 megawatts.',
        detail: 'Left alone, that current would discharge the earth in about half an hour. Small ions drift at about 1 cm per second in the 100 V/m field; larger, slower ions from dust and sea-spray nuclei reduce the conductivity, which varies enormously from place to place. Conductivity rises rapidly with altitude (more cosmic rays, longer mean free paths), so near 50 km the air is effectively a conducting shell. The fair-weather current, averaged over the oceans, varies by $\\pm 15$ percent with a maximum at 7 p.m. Greenwich time everywhere on earth — the whole planetary circuit breathes in unison.',
      },
      {
        term: 'Thunderstorms: the batteries',
        kind: 'insight',
        statement: 'About 40,000 thunderstorms operate around the earth each day; their lightning bolts, nine times out of ten, carry negative charge down, replenishing the earth against the fair-weather drain of 1800 amperes.',
        detail: 'A storm is built of independent cells: warm moist air rises, condenses, and keeps rising because released condensation heat makes it cooler-slowing than the surroundings; entrainment of side air explains the measured cloud temperatures. In the mature stage the updraft reaches 10,000–15,000 m at about 60 miles per hour; supercooled drops and ice crystals separate charge — the top of the cell goes positive (6–7 km up, near $-20\\;^\\circ\\text{C}$), the bottom negative (3–4 km, between $0$ and $-10\\;^\\circ\\text{C}$), with a puzzling small positive pocket under the heavy rain. Cloud-to-ground potentials reach 20, 30, even 100 million volts. Each flash deposits 20–30 coulombs, and the cell rebuilds its charge in about 5 seconds — roughly 4 amperes per storm. Wilson’s theory: falling drops polarized by the 100 V/m field capture negative large ions on their underside and carry them down.',
      },
      {
        term: 'The anatomy of a lightning stroke',
        kind: 'insight',
        statement: 'A stroke begins with a dim **step leader** advancing from the cloud at a sixth of the speed of light in 50-metre jumps with 50-microsecond pauses; when it touches ground, the bright **return stroke** runs back up at about 10,000 amperes, delivering some 20 coulombs — then **dart leaders** retrace the path, and the whole sequence may repeat up to 42 times.',
        detail: 'The leader’s channel is a conducting wire full of negative charge; the return stroke is the rapid emptying of that channel upward. The sudden heating makes the thunder clap. Near the ground, discharges rise to meet the leader, especially from sharp points — which is why lightning prefers tall trees and why Artabanus told Xerxes that God’s bolts “fall ever on the highest houses and tallest trees.” Photographs with the rotating-lens Boys camera revealed this time structure.',
      },
    ],
    examples: [
      {
        title: 'Assembling a uniform sphere of charge',
        problem: 'Compute the work needed to assemble a sphere of radius $a$ filled with uniform charge density $\\rho$ (total charge $Q$) by bringing in charge shell by shell, and verify the answer against the condenser formula.',
        steps: [
          { label: 'Step 1: One shell', text: 'When the growing sphere has radius $r$, it holds $Q_r = \\frac{4}{3}\\pi\\rho r^3$. Bringing up the next shell $dQ = \\rho\\, 4\\pi r^2 dr$ from infinity costs $dU = \\frac{Q_r\\, dQ}{4\\pi\\epsilon_0 r}$.' },
          { label: 'Step 2: Substitute', text: '$dU = \\frac{(\\frac{4}{3}\\pi\\rho r^3)(\\rho 4\\pi r^2 dr)}{4\\pi\\epsilon_0 r} = \\frac{4\\pi\\rho^2 r^4\\, dr}{3\\epsilon_0}$.' },
          { label: 'Step 3: Integrate', text: '$U = \\int_0^a \\frac{4\\pi\\rho^2 r^4}{3\\epsilon_0} dr = \\frac{4\\pi\\rho^2 a^5}{15\\epsilon_0}$.' },
          { label: 'Step 4: Express in terms of Q', text: 'With $Q = \\frac{4}{3}\\pi\\rho a^3$, the energy becomes $$U = \\frac{3}{5}\\, \\frac{Q^2}{4\\pi\\epsilon_0 a}.$$ Equivalently, the average of $1/r_{ij}$ over all pairs of points in the sphere is $6/5a$.' },
          { label: 'Step 5: Cross-check as a condenser', text: 'A thin shell of the same $Q$ is a conductor of capacity $C = 4\\pi\\epsilon_0 a$, so $U = \\frac{Q^2}{2C} = \\frac{Q^2}{2 \\cdot 4\\pi\\epsilon_0 a}$ — exactly $5/6$ of the uniform sphere’s energy, since the shell’s charges sit farther apart on average.' },
        ],
        result: '$U = \\frac{3}{5}\\frac{Q^2}{4\\pi\\epsilon_0 a}$ for the uniform sphere; $\\frac{Q^2}{2 \\cdot 4\\pi\\epsilon_0 a}$ for a conducting shell.',
      },
      {
        title: 'Field-energy check: the same sphere, integrated over space',
        problem: 'Verify that the field-energy integral $U = \\int \\frac{\\epsilon_0 E^2}{2} dV$ reproduces the assembly result $4\\pi\\rho^2 a^5/15\\epsilon_0$ for the uniform sphere.',
        steps: [
          { label: 'Step 1: The two field regions', text: 'Inside ($r < a$) the field is $E = \\rho r/3\\epsilon_0$ (Section 11.3); outside it is the point-charge field $E = Q/4\\pi\\epsilon_0 r^2$.' },
          { label: 'Step 2: Energy inside', text: '$U_{\\text{in}} = \\int_0^a \\frac{\\epsilon_0}{2}\\left( \\frac{\\rho r}{3\\epsilon_0} \\right)^2 4\\pi r^2 dr = \\frac{4\\pi\\rho^2}{18\\epsilon_0} \\int_0^a r^4 dr = \\frac{4\\pi\\rho^2 a^5}{90\\epsilon_0}$.' },
          { label: 'Step 3: Energy outside', text: '$U_{\\text{out}} = \\int_a^\\infty \\frac{\\epsilon_0}{2} \\left( \\frac{Q}{4\\pi\\epsilon_0 r^2} \\right)^2 4\\pi r^2 dr = \\frac{Q^2}{8\\pi\\epsilon_0} \\int_a^\\infty \\frac{dr}{r^2} = \\frac{Q^2}{8\\pi\\epsilon_0 a}$; substituting $Q = \\frac{4}{3}\\pi\\rho a^3$ gives $\\frac{4\\pi\\rho^2 a^5}{18\\epsilon_0}$.' },
          { label: 'Step 4: Add and compare', text: '$U = \\frac{4\\pi\\rho^2 a^5}{\\epsilon_0}\\left( \\frac{1}{90} + \\frac{5}{90} \\right) = \\frac{4\\pi\\rho^2 a^5}{15\\epsilon_0}$ — exactly the shell-assembly answer. Locating the energy in the field with density $\\epsilon_0 E^2/2$ gives the same total as counting pair energies, as Eq. (8.30) promises.' },
        ],
        result: 'Both bookkeepings give $4\\pi\\rho^2 a^5/15\\epsilon_0$: the field-energy picture is numerically identical to the pair-sum picture.',
      },
      {
        title: 'The binding of salt and the radius of a nucleus',
        problem: 'First estimate the dissociation energy of NaCl from the Coulomb lattice sum. Then use the electrostatic energy difference of $\\text{B}^{11}$ and $\\text{C}^{11}$ to compute a nuclear radius.',
        steps: [
          { label: 'Step 1: Salt inputs', text: 'The ions sit $a = 2.81$ angstroms apart, and $e^2 = q_e^2/4\\pi\\epsilon_0 = 2.3068 \\times 10^{-28}\\;\\text{N\\,m}^2$, so $e^2/a = 5.12$ eV — already the right order of magnitude.' },
          { label: 'Step 2: The lattice sum', text: 'One line of ions contributes $-2(e^2/a)\\ln 2 = -1.386\\, e^2/a$; summing all lines gives $U = -1.747\\, e^2/a$, hence $U = -1.747 \\times 5.12 = -8.94$ eV per molecule.' },
          { label: 'Step 3: Compare with experiment', text: 'Measured dissociation: $7.92$ eV per molecule ($183$ kcal/mole $= 7.64 \\times 10^5$ J/mole). The overestimate is the ignored repulsion: allowing $1/9.4$ of the electrostatic term with opposite sign gives $7.99$ eV, and the remaining gap is vibrational kinetic energy.' },
          { label: 'Step 4: The nuclear pair', text: 'The ground state of $\\text{C}^{11}$ sits $1.982$ MeV above that of $\\text{B}^{11}$; replacing a neutron by a proton plus electron returns $0.784$ MeV of rest energy, so the electrostatic difference is $1.982 + 0.784 = 2.766$ MeV.' },
          { label: 'Step 5: Extract the radius', text: 'With $U = \\frac{3}{5}\\frac{Z(Z-1)e^2}{r}$, the difference is $\\frac{3}{5}(30 - 20)\\frac{e^2}{r} = \\frac{6 e^2}{r} = 2.766$ MeV, giving $r = 3.12 \\times 10^{-13}$ cm. Scattering gives $r = (11)^{1/3} \\times 1.2 \\times 10^{-13} = 2.7 \\times 10^{-13}$ cm — agreement within about 15 percent for this first nuclear computation.' },
        ],
        result: 'NaCl: $-8.94$ eV predicted vs $7.92$ eV measured. Nucleus: $r \\approx 3.1 \\times 10^{-13}$ cm, consistent with $A^{1/3}r_0$ — electricity works at nuclear dimensions.',
      },
    ],
    keyTakeaways: [
      'Electrostatic energy is a sum over pairs, $U = \\sum q_i q_j / 4\\pi\\epsilon_0 r_{ij}$; assembling a uniform sphere costs $\\frac{3}{5} Q^2/4\\pi\\epsilon_0 a$. A condenser stores $U = Q^2/2C = \\frac{1}{2}CV^2$; virtual work gives the plate force $F = Q^2/2\\epsilon_0 A = \\frac{1}{2}QE_0$, the half because the field ramps through the surface-charge layer.',
      'The same energy lives in the field with density $u = \\epsilon_0 E^2/2$ — verified exactly for the charged sphere — but a point charge then carries infinite self-energy.',
      'The NaCl lattice sums to $-1.747\\, e^2/a = -8.94$ eV per molecule against $7.92$ eV measured: chemistry is largely electrostatics.',
      'The $\\text{B}^{11}$–$\\text{C}^{11}$ offset of $2.766$ MeV is electrostatic, giving a nuclear radius near $3 \\times 10^{-13}$ cm and confirming charge-independent nuclear forces.',
      'The atmosphere holds a 100 V/m field — 200 V between your nose and feet — totaling about 400,000 V up to the 50-km conducting layer; you feel nothing because your body is an equipotential.',
      'Fair-weather air conducts about 1800 amperes down to earth (some 700 megawatts), which would discharge the planet in half an hour were it not recharged by lightning.',
      'Thunderstorm cells act as the batteries: negative bottoms and positive tops, tens of millions of volts, 20–30 coulombs per flash, 5-second recharge — and the step-leader/return-stroke/dart-leader sequence repeats up to dozens of times per flash.',
    ],
    quiz: [
      {
        q: 'The electrostatic energy density at a point where the field is $E$ is:',
        options: [`$\\epsilon_0 E^2$`, `$\\frac{1}{2}\\epsilon_0 E^2$`, `$\\frac{1}{2}\\epsilon_0 E$`, `$E^2/2\\epsilon_0$`],
        answer: 1,
        explanation: 'Locating the energy in the field gives $u = \\epsilon_0 E^2/2$ per unit volume, the quantity whose integral over all space exactly reproduces the pair-sum energy of the charges.',
      },
      {
        q: 'The force on one plate of a parallel-plate condenser comes out as $F = \\frac{1}{2}QE_0$ rather than $QE_0$ because:',
        options: ['Half the field lines end on the other plate', 'The field through the surface-charge layer itself ramps from zero to $E_0$, so the average field on those charges is $E_0/2$', 'Virtual work always introduces a factor of one half', 'The plate’s charge is only half of $Q$'],
        answer: 1,
        explanation: 'The field acting on the surface charges is not the full outside field: within the thin charged layer the field builds up from zero (inside the metal) to $E_0$, averaging $E_0/2$. Hence $F = Q^2/2\\epsilon_0 A = \\frac{1}{2}QE_0$.',
      },
      {
        q: 'Comparing a uniformly charged solid sphere and a thin conducting shell of the same radius and total charge, the shell’s energy is:',
        options: ['Larger, because conductors store more energy', 'The same', '$5/6$ of the uniform sphere’s energy', '$3/5$ of the uniform sphere’s energy'],
        answer: 2,
        explanation: 'The shell has $U = Q^2/2C$ with $C = 4\\pi\\epsilon_0 a$, which is $\\frac{1}{2}$ compared with the uniform sphere’s $\\frac{3}{5}$ — a ratio of exactly $5/6$. The shell’s charges sit farther apart on average.',
      },
      {
        q: 'Why is there no shock from the 200-volt difference between your nose and your feet on a clear day?',
        options: ['The 100 V/m field is too weak to ionize air', 'Your body is a relatively good conductor, so you and the ground form one equipotential surface', 'The atmospheric field reverses sign every few seconds', 'The body screens the field with its own surface charge only above 1000 V'],
        answer: 1,
        explanation: 'Your body distorts the equipotentials so that nearly zero potential difference remains between head and feet. Charge from the earth redistributes on you until the whole person-plus-ground is an equipotential.',
      },
      {
        q: 'What maintains the earth’s negative charge against the steady 1800-ampere fair-weather drain?',
        options: ['Cosmic rays ionizing the air', 'The rotation of the earth acting as a dynamo', 'Thunderstorms: lightning strokes that mostly bring negative charge down to the ground', 'Radioactivity in the ground pushing electrons upward'],
        answer: 2,
        explanation: 'About 40,000 thunderstorms per day act as the batteries of the global circuit: nine flashes in ten carry negative charge down (20–30 coulombs each), charging the earth negatively while the positive charge spreads through the high conducting layer to fair-weather regions.',
      },
    ],
  },
]

export const physCh11Formulas: FormulaEntry[] = [
  {
    chapterId: 'hall-ch23',
    section: '23.9',
    name: 'Coulomb’s law',
    formula: 'F = q₁q₂/4πε₀r²',
    latex: 'F = \\frac{1}{4\\pi\\epsilon_0}\\,\\frac{q_1 q_2}{r_{12}^2}',
    note: '1/4πε₀ ≈ 9 × 10⁹ N·m²/C²; plus superposition, all of electrostatics',
  },
  {
    chapterId: 'hall-ch23',
    section: '23.9',
    name: 'Gauss’s law',
    formula: '∮ E·n da = Q_inside/ε₀;  ∇·E = ρ/ε₀',
    latex: '\\oint_S \\boldsymbol{E} \\cdot \\boldsymbol{n}\\, da = \\frac{Q_{\\text{inside}}}{\\epsilon_0}, \\quad \\nabla \\cdot \\boldsymbol{E} = \\frac{\\rho}{\\epsilon_0}',
    note: 'the inverse square law in integral and differential form',
  },
  {
    chapterId: 'hall-ch23',
    section: '23.9',
    name: 'Electrostatic potential',
    formula: 'E = −∇φ;  φ = q/4πε₀r',
    latex: '\\boldsymbol{E} = -\\nabla\\phi, \\qquad \\phi = \\frac{q}{4\\pi\\epsilon_0 r}',
    note: 'curl-free E is always a gradient; potentials superpose',
  },
  {
    chapterId: 'hall-ch22',
    section: '22.19',
    name: 'Gauss’s theorem (divergence theorem)',
    formula: '∮ C·n da = ∫ ∇·C dV',
    latex: '\\oint_S \\boldsymbol{C} \\cdot \\boldsymbol{n}\\, da = \\int_V \\nabla \\cdot \\boldsymbol{C}\\, dV',
    note: 'divergence = outward flux per unit volume',
  },
  {
    chapterId: 'hall-ch22',
    section: '22.19',
    name: 'Stokes’ theorem',
    formula: '∮ C·ds = ∫ (∇×C)·n da',
    latex: '\\oint_\\Gamma \\boldsymbol{C} \\cdot d\\boldsymbol{s} = \\int_S (\\nabla \\times \\boldsymbol{C}) \\cdot \\boldsymbol{n}\\, da',
    note: 'curl = circulation per unit area; right-hand rule for the normal',
  },
  {
    chapterId: 'hall-ch23',
    section: '23.9',
    name: 'Fields by symmetry',
    formula: 'E = Q/4πε₀r²;  λ/2πε₀r;  σ/2ε₀;  ρr/3ε₀',
    latex: 'E = \\frac{Q}{4\\pi\\epsilon_0 r^2}, \\quad E = \\frac{\\lambda}{2\\pi\\epsilon_0 r}, \\quad E = \\frac{\\sigma}{2\\epsilon_0}, \\quad E = \\frac{\\rho r}{3\\epsilon_0}',
    note: 'sphere (outside), line, isolated sheet, inside a uniform sphere',
  },
  {
    chapterId: 'hall-ch22',
    section: '22.20',
    name: 'Capacitance and condenser energy',
    formula: 'Q = CV;  C = ε₀A/d;  U = Q²/2C = ½CV²',
    latex: 'Q = CV, \\qquad C = \\frac{\\epsilon_0 A}{d}, \\qquad U = \\frac{Q^2}{2C} = \\frac{1}{2}CV^2',
    note: 'sphere: C = 4πε₀a; force on a plate: ½QE₀',
  },
  {
    chapterId: 'hall-ch24',
    section: '24.16',
    name: 'Energy in the electric field',
    formula: 'u = ε₀E²/2;  U = ∫ (ε₀E²/2) dV',
    latex: 'u = \\frac{\\epsilon_0 E^2}{2}, \\qquad U = \\int \\frac{\\epsilon_0 E^2}{2}\\, dV',
    note: 'uniform sphere: U = (3/5)Q²/4πε₀a; point charge diverges',
  },
]
