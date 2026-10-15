import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// THE FEYNMAN LECTURES MASTER PHYSICS LIBRARY — Chapter 13
// Maxwell's Equations and Electromagnetic Waves (Feynman Vol. II, L18–24, 32–33)
// Sources: R. P. Feynman, "The Feynman Lectures on Physics", New Millennium
// Edition, Vol. II: L18 The Maxwell Equations, L19 The Principle of Least
// Action, L20 Solutions in Free Space, L21 Solutions with Currents and
// Charges, L22 AC Circuits, L23 Cavity Resonators, L24 Waveguides,
// L32 Refractive Index of Dense Materials, L33 Reflection from Surfaces.
// All worked-example numbers are Feynman's own and have been recomputed.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const physCh13Content: SectionContent[] = [
  // ------------------------------------------------------------------ 13.1
  {
    sectionId: 'hall-ch33-s32',
    readingTime: 9,
    intro: 'Maxwell’s fix looks tiny — one extra term, $\\partial E/\\partial t$, added to the equation for the curl of B — but putting the four equations together produces something none of them contains alone: fields that leave their sources and travel through space by themselves. From two tabletop measurements of static electricity and magnetism, the speed of that travel falls out as $1/\\sqrt{\\mu_0\\epsilon_0}$, and it is the speed of light.',
    objectives: [
      'State all four Maxwell equations in words and in symbols, and explain the physical content of each',
      'Show why Ampère’s law for steady currents contradicts charge conservation, and how the displacement current $\\epsilon_0\\,d\\Phi_E/dt$ repairs it',
      'Verify the new term for a spherically symmetric current and for a charging capacitor',
      'Derive the speed of the electromagnetic wavefront from the two curl equations, and explain how static measurements predict c',
      'Introduce the potentials, the Lorenz gauge and the wave equation they satisfy',
    ],
    concepts: [
      {
        term: 'The four Maxwell equations',
        kind: 'law',
        statement: 'The complete, always-true (classical) field laws are: $$\\nabla \\cdot E = \\frac{\\rho}{\\epsilon_0} \\quad \\text{(flux of E)} = \\text{(charge inside)}/\\epsilon_0,$$ $$\\nabla \\times E = -\\frac{\\partial B}{\\partial t} \\quad \\text{(circulation of E)} = -\\frac{d}{dt}(\\text{flux of B}),$$ $$\\nabla \\cdot B = 0 \\quad \\text{(no magnetic charges)},$$ $$c^2\\nabla \\times B = \\frac{j}{\\epsilon_0} + \\frac{\\partial E}{\\partial t} \\quad \\text{(circulation of B)} = \\text{current}/\\epsilon_0 + \\frac{d}{dt}(\\text{flux of E}).$$',
        detail: 'Anything here that contradicts what was said in earlier chapters is true and what was said earlier is false — the earlier statements applied to special cases such as steady currents or fixed charges. Together with $\\nabla \\cdot j = -\\partial\\rho/\\partial t$, the force law $F = q(E + v \\times B)$, the law of motion and gravitation, this one table contains all of classical physics as known by 1905 — “we have climbed a great peak... nearly ready for Mount Everest, which is quantum mechanics.”',
      },
      {
        term: 'Maxwell’s fix: the displacement current',
        kind: 'insight',
        statement: 'The divergence of a curl is identically zero, so the steady-current law $\\nabla \\times B = j/\\epsilon_0c^2$ would force $\\nabla \\cdot j = 0$ — forbidding charge to pile up anywhere. Maxwell restored consistency by adding $\\partial E/\\partial t$ to the right-hand side; taking the divergence now returns exactly the conservation law $$\\nabla \\cdot j = -\\frac{\\partial\\rho}{\\partial t}.$$',
        detail: 'Maxwell reasoned with a mechanical model of the vacuum as an elastic solid, and his theory was resisted first for the model and then for lack of experimental justification. Today we keep the equations and discard the scaffolding: countless experiments confirm them, and accepting them forces the conclusion that charge is conserved — the equations have no answer to “what if charge were suddenly created?”.',
      },
      {
        term: 'How the new term works',
        kind: 'method',
        statement: 'For a spherically symmetric radial current the conduction and displacement terms cancel exactly ($\\partial E/\\partial t = -j/\\epsilon_0$), so there is no magnetic field at all. For a wire charging a parallel-plate capacitor, a loop around the **wire** is pierced by current $I$; the same loop displaced to pass **between the plates** is pierced by no current but by changing E-flux at the rate $I/\\epsilon_0$ — Ampère’s law gives the same B either way.',
        detail: 'The circulation of B depends on the current through the loop plus the rate of change of electric flux through it; the two source terms trade off so that any surface bounded by the loop gives the same answer. Maxwell’s small change, “by itself,” fixes bookkeeping; combined with the other equations it produces waves.',
      },
      {
        term: 'A travelling field',
        kind: 'insight',
        statement: 'An infinite current sheet suddenly set in motion fills space out to $x = \\pm vt$ with uniform, transverse E and B. Faraday’s law on a loop straddling the front gives $E = vB$; the Ampère–Maxwell law on a similar loop gives $c^2B = Ev$. Both can hold only for $$v = c.$$',
        detail: 'Stopping the current after a time T leaves a slab of field of thickness $cT$ marching through space, disconnected from any source: “the caterpillar has turned into a butterfly!” The fields maintain themselves — a changing B makes an E, a changing E makes a B, in a perpetual interplay that cannot stop. Superposing step solutions shows that the field profile at distance x is a graph of the source current’s history, drawn backwards and delayed by $x/c$.',
      },
      {
        term: 'The speed of light from statics',
        kind: 'law',
        statement: 'Measuring the force between two unit charges fixes $\\epsilon_0$ (Coulomb’s law); measuring the force between two unit currents fixes $\\epsilon_0c^2$ (Ampère). Their ratio gives $c^2$, and the experiments give $$c = 3.00 \\times 10^{8}\\ \\text{m/s}$$ — before anyone needs to mention light.',
        detail: 'The ratio is independent of the arbitrary choice of charge unit. Maxwell: “We can scarcely avoid the inference that light consists in the transverse undulations of the same medium which is the cause of electric and magnetic phenomena.” Light, radio, x-rays are all the same thing — little pieces of electric and magnetic field propagating on their own, differing only in wavelength.',
      },
      {
        term: 'Potentials, the Lorenz gauge and the wave equation',
        kind: 'method',
        statement: 'Writing $B = \\nabla \\times A$ and $E = -\\nabla\\phi - \\partial A/\\partial t$, and choosing the **Lorenz gauge** $\\nabla \\cdot A = -\\frac{1}{c^2}\\frac{\\partial\\phi}{\\partial t}$, the two source equations become four identical wave equations, $$\\nabla^2\\phi - \\frac{1}{c^2}\\frac{\\partial^2\\phi}{\\partial t^2} = -\\frac{\\rho}{\\epsilon_0}, \\qquad \\nabla^2 A - \\frac{1}{c^2}\\frac{\\partial^2 A}{\\partial t^2} = -\\frac{j}{\\epsilon_0c^2}.$$',
        detail: 'The gauge transformation now must change both potentials together, $A^{\\prime} = A + \\nabla\\psi$, $\\phi^{\\prime} = \\phi - \\partial\\psi/\\partial t$, leaving the fields untouched. The four potentials are beautifully separated — charge goes with φ, current with A — and in charge-free regions each satisfies the homogeneous wave equation, so solutions are waves moving at c. In this form the theory’s wave content is visible at a glance.',
      },
    ],
    examples: [
      {
        title: 'The magnetic field of a charging capacitor',
        problem: 'A current $I$ charges the plates of a parallel-plate capacitor through a thin wire. Show that Ampère’s law with Maxwell’s term gives the same field B at radius $r$ between the plates as beside the wire.',
        steps: [
          { label: 'Step 1: Loop around the wire', text: 'For a circle $\\Gamma_1$ of radius $r$ encircling the wire, the plane surface inside the circle is pierced by the current but (taking the wire a perfect conductor) by no electric flux: $$2\\pi r B = \\frac{I}{\\epsilon_0c^2}.$$' },
          { label: 'Step 2: Move the loop between the plates', text: 'Sliding the same circle down until its plane passes between the plates removes the piercing current — a naive reading of Ampère’s law would now say $B = 0$, which would be absurd.' },
          { label: 'Step 3: The displacement term takes over', text: 'The flat surface $S_2$ inside the circle now cuts the electric field between the plates. By Gauss’s law the flux of E equals $Q/\\epsilon_0$ for charge $Q$ on a plate, so $$c^2 \\cdot 2\\pi rB = \\frac{d}{dt}\\left(\\frac{Q}{\\epsilon_0}\\right) = \\frac{I}{\\epsilon_0}.$$' },
          { label: 'Step 4: Compare', text: 'Since $I = dQ/dt$, this is identical to Step 1: conduction current through one surface, changing electric flux through the other, the same B. The equation is self-consistent precisely because charge is conserved.' },
        ],
        result: 'Either surface bounded by the same loop gives the same circulation of B — the displacement current $\\epsilon_0\\,d\\Phi_E/dt$ carries the current’s story across the gap.',
      },
      {
        title: 'Why the wavefront moves at exactly c',
        problem: 'Behind a suddenly started current sheet the fields are uniform E and B, both transverse to the propagation. Show that the front can only travel at the speed $c = 1/\\sqrt{\\mu_0\\epsilon_0}$.',
        steps: [
          { label: 'Step 1: Faraday’s law across the front', text: 'Take a rectangular loop of length $L$ straddling the advancing front, with its long side along E. The B-flux through it grows at the rate $BLv$ (the field occupies newly swept area at speed $v$), so Faraday’s law gives $EL = BLv$, or $$E = vB.$$' },
          { label: 'Step 2: Ampère–Maxwell law across the front', text: 'Take a perpendicular loop with its long side along B, in a region free of currents. The E-flux grows at $vLE$, so $c^2BL = vLE$, or $$c^2B = Ev.$$' },
          { label: 'Step 3: Both conditions simultaneously', text: 'The two equations demand $v = E/B$ and $v = c^2B/E$. Multiplying them: $v^2 = c^2$, so $v = c$ — only one velocity is possible.' },
          { label: 'Step 4: Interpretation', text: 'The numerical value follows from two static experiments: the force between unit charges (giving $\\epsilon_0$) and the force between unit currents (giving $\\epsilon_0c^2$). Maxwell computed their ratio and found the speed of light.' },
        ],
        result: 'An electromagnetic disturbance in vacuum propagates at exactly $c = 3.00 \\times 10^{8}$ m/s — the number measured electrostatically and magnetostatically, and identified with light.',
      },
    ],
    keyTakeaways: [
      'Gauss’s law and $\\nabla \\cdot B = 0$ are true always; Faraday’s law is true always; only Ampère’s law needed Maxwell’s displacement term $\\partial E/\\partial t$.',
      'The displacement current exists because $\\nabla \\cdot j = -\\partial\\rho/\\partial t$: taking the divergence of the completed fourth equation returns charge conservation exactly.',
      'For a charging capacitor, the current through the wire and the changing E-flux between the plates are interchangeable sources of the same B.',
      'A suddenly started current sheet sends a transverse electromagnetic wave whose front must travel at c — derived from $E = vB$ and $c^2B = Ev$.',
      'Once detached from its source, a block of E and B maintains itself: each field’s changes regenerate the other, and it cannot disappear (it can only be absorbed by interference at charges).',
      'Static measurements alone — Coulomb’s constant and the force between currents — fix $c = 3.00 \\times 10^{8}$ m/s; light is an electromagnetic wave.',
      'In the Lorenz gauge the potentials satisfy four separated wave equations, one for φ sourced by ρ and three for A sourced by j.',
    ],
    quiz: [
      {
        q: 'Maxwell added $\\partial E/\\partial t$ to the equation for $\\nabla \\times B$ because:',
        options: ['Experiments with capacitors demanded an extra force on charges', 'The divergence of a curl is zero, so the steady-current law would forbid charge densities from changing with time', 'Faraday’s law lacked a symmetric partner', 'Magnetic charges were needed to conserve energy'],
        answer: 1,
        explanation: 'Taking $\\nabla \\cdot (\\nabla \\times B) = 0$ on the old law forces $\\nabla \\cdot j = 0$ — charge could never accumulate anywhere. Adding the displacement term makes the divergence of the right side $\\nabla \\cdot j + \\epsilon_0\\partial(\\nabla \\cdot E)/\\partial t = \\nabla \\cdot j + \\partial\\rho/\\partial t = 0$, which is exactly charge conservation.',
      },
      {
        q: 'Which Maxwell equation was discovered last, by pure theoretical argument, before any direct experimental confirmation?',
        options: [`$\\nabla \\cdot E = \\rho/\\epsilon_0$`, `$\\nabla \\times E = -\\partial B/\\partial t$`, `$\\nabla \\cdot B = 0$`, `$c^2\\nabla \\times B = j/\\epsilon_0 + \\partial E/\\partial t$`],
        answer: 3,
        explanation: 'Gauss’s law, the absence of magnetic charge and Faraday’s law all came from experiment. Only the displacement current was inferred by Maxwell from the requirement of consistency with charge conservation — the reason his theory was first resisted, and the reason it triumphed when Hertz found the waves in 1888.',
      },
      {
        q: 'A loop of wire is drawn around a charging capacitor so that its plane passes between the plates (no conduction current pierces it). What does the Ampère–Maxwell law give for the circulation of B around this loop?',
        options: ['Zero, because no current passes through the loop', 'The same value as for a loop around the wire, because the changing electric flux $\\epsilon_0\\,d\\Phi_E/dt$ replaces the current', 'Twice the value around the wire, since both plates contribute', 'It depends on the dielectric between the plates'],
        answer: 1,
        explanation: 'The flat surface inside the loop is pierced by the electric field between the plates, whose flux changes at the rate $I/\\epsilon_0$ (by Gauss’s law, the E-flux is $Q/\\epsilon_0$). The displacement current term supplies exactly what the missing conduction current would have: $c^2 \\cdot 2\\pi rB = I/\\epsilon_0$, the same B as beside the wire.',
      },
      {
        q: 'How can the speed of light be predicted without ever measuring light?',
        options: ['By measuring the energy of photoelectrons', 'By measuring the force between two unit charges and the force between two unit currents — their ratio fixes $c^2$', 'By timing electromagnetic pulses between two mirrors', 'By weighing a charged capacitor before and after charging'],
        answer: 1,
        explanation: 'The electrostatic experiments give $\\epsilon_0$, the magnetostatic ones give $\\epsilon_0c^2$; the ratio is independent of the arbitrary unit of charge and equals $c^2 = 9.0 \\times 10^{16}$ m²/s², so $c = 3.00 \\times 10^{8}$ m/s. Maxwell’s “scarcely avoidable inference”: light is the transverse undulation of the same medium — the electromagnetic field.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.2
  {
    sectionId: 'hall-ch33-s33',
    readingTime: 11,
    intro: 'Between Lecture 19’s digression — the principle of least action, Mr. Bader’s gift to a bored high-school student — and the machinery of Lectures 20–21 lies the payoff of all of electromagnetism: plane waves, spherical waves, and the 1/r radiation field of an accelerating charge. The radio waves carrying music through your room, the light from a galaxy a billion light-years away, and the signal from Mariner II past Venus are all the same mathematics: the wave equation, its retarded solutions, and the dipole radiator.',
    objectives: [
      'Derive the transversality and magnitude relations of plane waves: $E \\perp B \\perp k$ and $E = cB$',
      'Verify that $f(x - ct)$ solves the one-dimensional wave equation and that spherical waves fall off as $1/r$',
      'Write the general solution of Maxwell’s equations — the retarded potentials — and explain the physical meaning of the delay $t - r_{12}/c$',
      'Compute the radiation field of an oscillating dipole and identify the antenna radiation pattern and near-field cancellation',
      'State the principle of least action and show how minimum principles give practical numerical estimates',
    ],
    concepts: [
      {
        term: 'Plane waves in free space',
        kind: 'law',
        statement: 'In a region without charges or currents, Maxwell’s equations force any plane wave travelling in the $x$-direction to have $E_x = 0$, $B_x = 0$ (transverse fields), with E and B at right angles to each other, and with magnitudes locked by $$E = cB.$$',
        detail: 'Setting $\\rho = j = 0$ and letting fields vary only with x, the divergence equations kill the longitudinal components and the curl equations reduce to two coupled first-order equations whose combination is the wave equation for $E_y$. The result is general: for any electromagnetic wave, the fields are transverse, mutually perpendicular, and in the ratio c.',
      },
      {
        term: 'The wave equation and its solutions',
        kind: 'theorem',
        statement: 'Every component of E and B in free space satisfies $$\\nabla^2\\psi - \\frac{1}{c^2}\\frac{\\partial^2\\psi}{\\partial t^2} = 0.$$ In one dimension the general solution is $\\psi = f(x - ct) + g(x + ct)$ — two arbitrary rigid shapes travelling at speed c in opposite directions; the three-dimensional superposition of plane waves in all directions is the most general solution.',
        detail: 'A function of the single variable $x - ct$ keeps its shape while moving: its x-derivatives and t-derivatives are locked in the ratio $c^2$. This is the same equation satisfied by the potentials in the Lorenz gauge. The room you sit in is full of such solutions — light from the window, infrared from warm foreheads, radio carrying a jazz band, and tiny wiggles whose crests are a foot apart that left Mariner II millions of miles away.',
      },
      {
        term: 'Spherical waves',
        kind: 'law',
        statement: 'For a spherically symmetric solution, multiplying the wave equation by r reduces it to the one-dimensional equation for the product $r\\psi$, so $$\\psi = \\frac{f(t - r/c)}{r}$$ is an outgoing spherical wave: the shape $f$ travels outward at c while the amplitude decays as $1/r$.',
        detail: 'The $1/r$ falloff is energy bookkeeping — energy density goes as amplitude squared and the area of a sphere as $r^2$. Choosing the outgoing rather than incoming solution is an extra assumption, not contained in Maxwell’s equations: the equations are symmetric under $t \\to -t$, but experience says accelerated charges radiate outward. The singularity at the origin means a source must live there, just as the $1/r$ in $\\phi = a + b/r$ betrays a point charge in a “free-space” solution.',
      },
      {
        term: 'The general solution: retarded potentials',
        kind: 'method',
        statement: 'Given any distribution of charge and current, the potentials are computed from the sources as they were at the earlier time $t - r_{12}/c$: $$\\phi(1, t) = \\int \\frac{\\rho(2,\\, t - r_{12}/c)}{4\\pi\\epsilon_0 r_{12}}\\,dV_2, \\qquad A(1, t) = \\int \\frac{j(2,\\, t - r_{12}/c)}{4\\pi\\epsilon_0c^2 r_{12}}\\,dV_2,$$ and then $B = \\nabla \\times A$, $E = -\\nabla\\phi - \\partial A/\\partial t$.',
        detail: '“Here is the center of the universe of electromagnetism — the complete theory of electricity and magnetism, and of light.” The wave equation with sources is solved by superposing spherical waves from every volume element; the only effect of the $\\partial^2/\\partial t^2$ term is the retardation $t - r/c$ in the Coulomb-like potential. Influences propagate from point to point at the speed c — never faster.',
      },
      {
        term: 'Radiation from an accelerating charge',
        kind: 'law',
        statement: 'Far from any charge, the only surviving part of the field is proportional to its acceleration, evaluated at the retarded time and projected perpendicular to the line of sight: $$E = \\frac{q}{4\\pi\\epsilon_0c^2r}\\left[\\text{acceleration at } (t - r/c)\\right]_{\\perp}, \\qquad cB = \\hat e_r \\times E.$$',
        detail: 'This is the last term of the complete field of a moving point charge, $E = \\frac{q}{4\\pi\\epsilon_0}\\left[\\frac{\\hat e_r}{r^2} + \\frac{\\dot{\\hat e_r}}{cr^2} + \\frac{\\ddot{\\hat e_r}}{c^2} \\right]$ (retarded throughout): the first two terms are the Coulomb field with a first-order retardation correction — nearly the instantaneous field — while the third falls off only as $1/r$ and dominates at large distances.',
      },
      {
        term: 'The oscillating dipole and antennas',
        kind: 'method',
        statement: 'A charge wobbling against an equal opposite charge — dipole moment $p(t)$ — has the vector potential $A = \\dot p(t - r/c)/4\\pi\\epsilon_0c^2r$, and fields $$B = \\frac{[\\dot p + (r/c)\\ddot p]_{t-r/c} \\times r}{4\\pi\\epsilon_0c^2r^3}.$$ Far away, $B \\approx \\ddot p(t - r/c) \\times \\hat e_r/4\\pi\\epsilon_0c^2cr$ and E points along the projection of $\\ddot p$ perpendicular to the line of sight.',
        detail: 'The near-field terms ($1/r^2$ and $1/r^3$) almost cancel the retardation of each other: expanding in $r/c$, the $\\ddot p$ pieces cancel and the field looks like the instantaneous Biot–Savart field of the current $\\dot p$. The radiation term survives as the sole $1/r$ piece. A dipole antenna therefore radiates nothing along its axis and maximally at right angles — the familiar doughnut pattern — because only the acceleration component perpendicular to the line of sight radiates.',
      },
      {
        term: 'The principle of least action (cameo)',
        kind: 'insight',
        statement: 'The **action** along a path is the time integral of kinetic minus potential energy, $$S = \\int_{t_1}^{t_2} (\\text{KE} - \\text{PE})\\,dt,$$ and the true path of a particle is the one for which S is stationary: nearby trial paths change S only to second order.',
        detail: 'Feynman learned this from his high-school teacher Mr. Bader and found it fascinating ever after. A falling ball “chooses” a curved compromise — going fast early to keep the average of KE − PE small. Minimum principles are also practical: guessing a parabolic potential between coaxial cylinders and minimizing the computed capacitance gives $C/2\\pi\\epsilon_0 = (b^2 + 4ab + a^2)/3(b^2 - a^2)$ — within 0.2% of the true value even at $b/a = 2$, and excellent near $b/a = 1.1$. In electrodynamics the potentials A and φ enter the least-action principle directly — one more reason they are physically fundamental.',
      },
    ],
    examples: [
      {
        title: 'Reading a radio station’s history in the field',
        problem: 'An infinite current sheet in the yz-plane carries a surface current $J(t)$ (per unit width) in the y-direction, started from zero. Show that the electric field at distance x is a delayed, scaled copy of the current history.',
        steps: [
          { label: 'Step 1: The step solution', text: 'For a current J suddenly turned on, the fields behind the front (at x less than ct) are $E_y = cB_z = -J/2\\epsilon_0c$; beyond, they are zero. The wavefront moves out at c.' },
          { label: 'Step 2: Superpose', text: 'Any current history $J(t)$ is a sum (integral) of step currents of various sizes and starting times; since Maxwell’s equations are linear, the total field is the sum of the step fields.' },
          { label: 'Step 3: The result', text: 'The profile at distance x is the current-versus-time graph drawn backwards and delayed by $x/c$: $$E_y(t) = -\\frac{J(t - x/c)}{2\\epsilon_0 c}.$$' },
          { label: 'Step 4: Physical meaning', text: 'Standing miles away with a field meter, you could reconstruct exactly how the source current varied in time — the field is a message traveling at c. This same formula was derived in Vol. I from the radiated field of a sheet of oscillating dipoles; now it follows from Maxwell’s equations all the way down to the source.' },
        ],
        result: 'The space profile of the wave is a graph of the source’s time history, reversed and delayed by $x/c$ — radiation is a memory flying through space.',
      },
      {
        title: 'Radiation field of an oscillating dipole',
        problem: 'A dipole $p(t) = p_0\\sin\\omega t$ oscillates along the z-axis. Find the far magnetic field and describe the radiation pattern.',
        steps: [
          { label: 'Step 1: Vector potential', text: 'From the retarded integral, $A = \\frac{\\dot p(t - r/c)}{4\\pi\\epsilon_0c^2r}$ — a spherical wave whose source strength is $\\dot p/\\epsilon_0c^2$.' },
          { label: 'Step 2: Take the curl', text: 'Differentiating $A_z$ gives $B_x = \\frac{1}{4\\pi\\epsilon_0c^2}\\left[\\frac{y\\dot p}{r^3} + \\frac{y\\ddot p}{cr^2}\\right]_{t-r/c}$ and similarly for $B_y$; in vector form $$B = \\frac{[\\dot p + (r/c)\\ddot p] \\times r}{4\\pi\\epsilon_0c^2r^3}.$$' },
          { label: 'Step 3: Keep the radiation term', text: 'For $r \\gg c/\\omega$ the $\\ddot p$ term dominates: $B \\approx \\frac{\\ddot p(t - r/c)\\,\\sin\\theta}{4\\pi\\epsilon_0c^3r}$ along the azimuthal direction, where θ is the angle from the dipole axis. The companion electric field is E along the polar direction, with $cB = E$.' },
          { label: 'Step 4: The pattern', text: 'Since only the acceleration component perpendicular to the line of sight radiates, the field contains the factor $\\sin\\theta$: zero along the axis, maximum in the equatorial plane. The amplitude falls as $1/r$ and the intensity as $1/r^2$ — the doughnut pattern of every dipole antenna.' },
        ],
        result: 'Radiation is proportional to $\\ddot p$, delayed by $r/c$, polarized in the plane of $\\ddot p$ and the line of sight, and beamed as $\\sin\\theta$.',
      },
      {
        title: 'A minimum principle at work: capacitance by guesswork',
        problem: 'Estimate the capacitance per unit length of coaxial cylinders of radii a and b by guessing a trial potential and minimizing the computed energy.',
        steps: [
          { label: 'Step 1: Guess a family of fields', text: 'Instead of the true logarithmic potential, try the parabolic guess $\\phi = \\phi_0\\frac{x}{b - a}\\left[1 + \\alpha\\left(1 - \\frac{x}{b - a}\\right)\\right]$, with x measured from the inner cylinder; α is a free parameter.' },
          { label: 'Step 2: Compute the capacity from it', text: 'Integrating the square of the resulting field over the volume gives $\\frac{C}{2\\pi\\epsilon_0} = \\frac{a}{b - a}\\left[\\frac{2\\alpha^2}{6} + \\frac{b\\alpha}{3a} + 1 + \\alpha + \\frac{a^2}{3b^2}\\right]$.' },
          { label: 'Step 3: Minimize over α', text: 'The true capacitance must be lower than any trial value (the true field minimizes the energy), so pick α to make C as small as possible: ordinary calculus gives $\\alpha = -2b/(b + a)$.' },
          { label: 'Step 4: Compare with the exact answer', text: 'Substituting, $C/2\\pi\\epsilon_0 = (b^2 + 4ab + a^2)/3(b^2 - a^2)$. For $b/a = 2$ this is 1.444 against the true 1.4423; at $b/a = 1.1$ it gives 10.492065 versus the exact 10.492059; only at $b/a = 100$ does it fail badly (0.346 vs 0.217).' },
        ],
        result: 'A one-parameter guess plus a minimum principle lands within 0.2% of the exact capacitance — the practical power of least action, the same principle that (in its full form) governs the paths of particles.',
      },
    ],
    keyTakeaways: [
      'In vacuum every electromagnetic wave is transverse: $E \\perp B \\perp k$, with the fixed ratio $E = cB$.',
      'Each field component satisfies the wave equation $\\nabla^2\\psi - (1/c^2)\\partial^2\\psi/\\partial t^2 = 0$; general solutions are superpositions of $f(x - ct)$-type travelling shapes.',
      'Spherical waves from a point source go as $f(t - r/c)/r$ — the $1/r$ amplitude is the $1/r^2$ spreading of conserved energy.',
      'The general solution of Maxwell’s equations is the retarded potentials: integrate the sources as they were at $t - r_{12}/c$; influences never travel faster than c.',
      'Only acceleration radiates: the far field is $\\frac{q}{4\\pi\\epsilon_0c^2r}$ times the retarded acceleration projected perpendicular to the line of sight.',
      'Near an oscillating dipole the “static” terms nearly cancel the retardation, leaving the $1/r$ radiation proportional to $\ddot p$; the antenna pattern is $\\sin\\theta$ — nothing radiated along the axis, maximum broadside.',
      'The principle of least action, $S = \\int(\\text{KE} - \\text{PE})dt$ with the true path stationary, is both a deep law and a practical approximation engine.',
    ],
    quiz: [
      {
        q: 'For a plane electromagnetic wave in vacuum, which relation between the field magnitudes is always true?',
        options: [`$B = cE$`, `$E = cB$`, `$E = B$`, '$E = 2cB$ for circular polarization'],
        answer: 1,
        explanation: 'Maxwell’s equations in free space give two coupled first-order equations whose only consistent propagation speed is c, with the field ratio locked: $E = vB$ and $c^2B = Ev$ together force $v = c$ and $E = cB$. This holds for any electromagnetic wave, not just the special current-sheet solution.',
      },
      {
        q: 'The amplitude of a spherical electromagnetic wave falls off as $1/r$ because:',
        options: ['The wave is absorbed by the vacuum', 'Energy conservation: intensity (amplitude squared) must spread over spheres of area $4\\pi r^2$', 'The source gradually runs down', 'The $1/r^2$ Coulomb field dominates at large distances'],
        answer: 1,
        explanation: 'Energy density is proportional to the square of the field amplitude; if the total energy flowing outward is conserved, the density must fall as the area grows, i.e. as $1/r^2$, so the amplitude falls as $1/r$. This is exactly the structure of the solution $\\psi = f(t - r/c)/r$ of the spherical wave equation.',
      },
      {
        q: 'In the retarded potentials, why must the source density be evaluated at the time $t - r_{12}/c$?',
        options: ['It is a mathematical convenience with no physical meaning', 'Because electromagnetic influences propagate at the finite speed c, the field at point 1 now reflects the source as it was when the “message” left it', 'Because charges decay exponentially in time', 'Because the gauge condition requires it'],
        answer: 1,
        explanation: 'Solving the wave equation with sources by superposing spherical waves, the retardation appears automatically in the argument of the source function. The field here and now cannot know what the charge is doing now — only what it was doing one light-travel-time ago.',
      },
      {
        q: 'A charge moves at constant velocity (no acceleration). Far away, its radiated field is:',
        options: ['Proportional to its velocity, falling as $1/r$', 'Proportional to its speed squared', 'Zero — the $1/r$ radiation term is proportional to the retarded acceleration', 'Equal to its Coulomb field'],
        answer: 2,
        explanation: 'The far field carries the factor $\\ddot{\\hat e_r}$ — the second time derivative of the direction to the charge, which encodes its acceleration. Uniform motion gives only the near fields (the first two terms of the complete formula), which fall off as $1/r^2$; only acceleration produces a $1/r$ term that can carry energy to infinity.',
      },
      {
        q: 'Feynman’s minimum-principle estimate of a coaxial capacitance works best when:',
        options: ['The cylinders are very far apart ($b/a$ large)', 'The gap is small compared with the radii ($b/a$ near 1), where the trial field is nearly exact', 'The inner radius goes to zero', 'The potential is assumed logarithmic exactly'],
        answer: 1,
        explanation: 'At $b/a = 1.1$ the parabolic guess gives $C/2\\pi\\epsilon_0 = 10.492065$ against the exact 10.492059 — the trial field barely differs from the truth in a narrow gap. At $b/a = 100$ the estimate (0.346) misses by 60% because the true field is strongly curved where the guess is worst.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.3
  {
    sectionId: 'hall-ch31-s20',
    readingTime: 12,
    intro: 'Impedance is not an engineer’s trick — it is Maxwell’s equations in disguise. Feynman derives the complex impedance of L and C from Faraday’s law and the meaning of voltage, gets Kirchhoff’s rules from field theory, then pushes the frequency upward until lumped elements fail: a capacitor becomes a resonant can of fields, and a hollow pipe becomes a waveguide that carries light through plumbing.',
    objectives: [
      'Derive the impedances $z_L = i\\omega L$, $z_C = 1/i\\omega C$ and $z_R = R$ from the field equations, and use them with Kirchhoff’s rules',
      'Show that average power dissipation depends only on the real part of an impedance, and interpret reactance as energy sloshing',
      'Explain how the infinite L–C ladder becomes a filter with cutoff, and connect it to the transmission line with $v = 1/\\sqrt{L_0C_0} = c$',
      'Follow the high-frequency capacitor through its Bessel-function corrections to the resonant cavity, with $\\omega_0 = 2.405c/r$',
      'Analyze the rectangular waveguide: cutoff frequency, guide wavelength, phase and group velocities, and the TE/TM mode spectrum',
    ],
    concepts: [
      {
        term: 'Complex impedance',
        kind: 'definition',
        statement: 'For any lumped two-terminal element driven at angular frequency ω, write all quantities as complex exponentials $V = \\hat V e^{i\\omega t}$. The ratio $$z = \\frac{\\hat V}{\\hat I}$$ is the **impedance**. For the three ideal elements: $z_L = i\\omega L$, $z_C = 1/i\\omega C$, $z_R = R$.',
        detail: 'The ideal inductance is derived by integrating $\\nabla \\times E = -\\partial B/\\partial t$ around a loop through the coil and back outside it (where no field leaks): $V = L\\,dI/dt$. The ideal capacitor comes from $V = Q/C$ with $I = dQ/dt$. At dc the inductance shorts, the capacitor opens; only R survives. Elements that only respond are passive; generators are active.',
      },
      {
        term: 'Generators and Kirchhoff’s rules',
        kind: 'method',
        statement: 'An ideal generator imposes a terminal voltage equal to its emf regardless of current. With no magnetic field leaking between circuit elements, $\\oint E \\cdot ds = 0$ around any external path gives **Kirchhoff’s voltage rule** $\\sum V_n = 0$ around every loop; charge conservation at terminals gives the **current rule** $\\sum I_n = 0$ into every node.',
        detail: 'Both rules are Maxwell’s equations in lumped-element clothing. Series elements add as $z_s = z_1 + z_2$; parallel as $z_p = z_1z_2/(z_1 + z_2)$. Some circuits (bridges, two-generator networks) cannot be reduced this way and need the full loop-and-node equations — e.g. $I_1 = [z_2E_2 - (z_2 + z_3)E_1]/[z_1(z_2 + z_3) + z_2z_3]$.',
      },
      {
        term: 'Equivalent circuits',
        kind: 'theorem',
        statement: 'Because every network equation is linear in V and I, any two-terminal network of passive elements behaves at its terminals as a single impedance $z_{\\text{eff}}$; and any network containing generators behaves as an ideal generator $E_{\\text{eff}}$ in series with $z_{\\text{eff}}$: $V = E_{\\text{eff}} - I z_{\\text{eff}}$.',
        detail: 'This is the physics behind the Thévenin equivalent of circuit theory — a consequence of the linearity of Maxwell’s equations, not an electrical trick. It licenses replacing everything “behind” a pair of terminals by two numbers (functions of ω).',
      },
      {
        term: 'Energy, resistance and reactance',
        kind: 'law',
        statement: 'Writing any impedance as $z = R + iX$ (resistance plus **reactance**), the voltage across R is in phase with the current and that across X is in quadrature. The average power delivered is $$\\langle P \\rangle = \\tfrac{1}{2}I_0^2R$$ — only the real part dissipates; reactance merely sloshes energy back and forth each cycle.',
        detail: 'The inductance ($U = \\frac{1}{2}LI^2$) and capacitor ($U = \\frac{1}{2}CV^2$) are nondissipative: energy flows in and out with zero net transfer per cycle. A generator delivers $\\mathcal{E} I$; into a pure resistance that all becomes heat. Care is needed when multiplying: only the real parts of complex quantities are physical, and products are not linear operations.',
      },
      {
        term: 'Ladder networks and filters',
        kind: 'method',
        statement: 'An infinite ladder of series $z_1 = i\\omega L$ and shunt $z_2 = 1/i\\omega C$ has a real characteristic impedance below the **cutoff frequency** $$\\omega_0 = \\frac{2}{\\sqrt{LC}},$$ and absorbs energy continuously; above cutoff the propagation factor $\\alpha = (z_0 - z_1)/z_0$ has magnitude less than one and the voltage dies away section by section.',
        detail: 'Below cutoff, $|\\alpha| = 1$ with only a phase shift per section — energy propagates down the line; above, α is real and the signal decays exponentially. Swapping L and C turns the low-pass into a high-pass filter; cascading them makes band-pass filters. An L–C low-pass smooths the wobbles of rectified dc; a high-pass keeps the music and drops the turntable rumble. A finite ladder behaves like the infinite one if terminated in the characteristic impedance $z_0 = \\sqrt{L/C - \\omega^2L^2/4}$ (purely $R = \\sqrt{L/C}$ at dc).',
      },
      {
        term: 'The capacitor at high frequencies and the cavity',
        kind: 'method',
        statement: 'As ω rises, the changing E between capacitor plates generates a circulating B ($B = i\\omega rE/2c^2$), whose change regenerates a correction to E, and so on — the summed series is the Bessel function $$E = E_0 e^{i\\omega t}J_0(\\omega r/c).$$ When $\\omega a/c$ exceeds the first zero $2.405$ of $J_0$, the field reverses sign near the edge; closing the capacitor with a cylindrical wall at that radius creates a **resonant cavity** with $$\\omega_0 = 2.405\\frac{c}{r}.$$',
        detail: 'A sealed can of oscillating E and B is a resonant circuit with no wires at all: the E supplies the “capacitance,” the B (90° out of phase, circling the axis) the “inductance,” and the walls carry the necessary currents. Coupling loops feed and extract energy; the resonance curve is very sharp — Q’s of 100,000 or more with silver-plated walls. The Bessel function is to cylindrical waves what the cosine is to waves on a line.',
      },
      {
        term: 'Cavity modes',
        kind: 'insight',
        statement: 'A can of any shape has many resonant modes — distinct standing patterns of E and B, each with its own frequency found by solving Maxwell’s equations with E perpendicular to the walls. A 3-inch cylinder resonates not only near the predicted 3010 megacycles but also at 3300 and 3820 Mc, from modes whose fields lie across the diameter.',
        detail: 'A cube would have three equal-frequency modes; distorting it into a cylinder splits them slightly. To identify which mode is excited, poke a wire through a hole: the resonance is suppressed when the wire lies along E and barely affected when perpendicular. Real elements blur into field structures continuously as the frequency rises: the lumped L–C resonator evolves into a cavity by degrees.',
      },
      {
        term: 'The transmission line',
        kind: 'law',
        statement: 'A uniform two-conductor line is described by its inductance and capacitance per unit length, $L_0$ and $C_0$: $$\\frac{\\partial V}{\\partial x} = -L_0\\frac{\\partial I}{\\partial t}, \\qquad \\frac{\\partial I}{\\partial x} = -C_0\\frac{\\partial V}{\\partial t},$$ so both V and I satisfy the wave equation with speed $$v = \\frac{1}{\\sqrt{L_0C_0}} = c,$$ and each travelling wave obeys $V = z_0 I$ with $z_0 = \\sqrt{L_0/C_0}$.',
        detail: 'For the coaxial line, $L_0 = \\ln(b/a)/2\\pi\\epsilon_0c^2$ and $C_0 = 2\\pi\\epsilon_0/\\ln(b/a)$, so $L_0C_0 = 1/c^2$ exactly — the signal travels at the speed of light for any constant cross-section (with vacuum and surface currents). The characteristic impedance is $z_0 = \\ln(b/a)/2\\pi\\epsilon_0c$, typically 50 ohms to a few hundred ohms.',
      },
      {
        term: 'Waveguides and cutoff',
        kind: 'law',
        statement: 'A hollow rectangular pipe of width a carries the fundamental mode $E_y = E_0 e^{i(\\omega t - k_zz)}\\sin(\\pi x/a)$ with $$k_z = \\sqrt{\\frac{\\omega^2}{c^2} - \\frac{\\pi^2}{a^2}}.$$ For $\\omega$ below the **cutoff frequency** $\\omega_c = \\pi c/a$, $k_z$ is imaginary and the field decays as $e^{-k^{\\prime}z}$ instead of propagating.',
        detail: 'The guide wavelength is $\\lambda_g = \\lambda_0/\\sqrt{1 - (\\lambda_0/2a)^2}$; the phase velocity $v_p = c/\\sqrt{1 - (\\omega_c/\\omega)^2}$ exceeds c (only nodes move), while the group velocity $v_g = c\\sqrt{1 - (\\omega_c/\\omega)^2}$ is below c, with $v_pv_g = c^2$ — the same algebra as the relativistic $E^2 = p^2c^2 + m^2c^4$. Higher modes (more half-waves across the guide; TE and TM families) have higher cutoffs, so guides are usually run just above the fundamental cutoff. An imaginary wave number is not unphysical — it means a sine turned exponential.',
      },
    ],
    examples: [
      {
        title: 'A resonant can: the 3-inch cavity',
        problem: 'A cylindrical can 3.0 inches in diameter and 2.5 inches tall is fitted with coupling loops. Predict its lowest resonant frequency and compare with experiment.',
        steps: [
          { label: 'Step 1: The mode condition', text: 'The lowest mode needs the first zero of the Bessel function: $\\omega a/c = 2.405$, i.e. the resonant angular frequency is $\\omega_0 = 2.405c/r$ with r the radius.' },
          { label: 'Step 2: Insert the numbers', text: 'With $r = 1.5$ in $= 3.81$ cm: $$f_0 = \\frac{\\omega_0}{2\\pi} = \\frac{2.405 \\times 3.00 \\times 10^{10}\\ \\text{cm/s}}{2\\pi \\times 3.81\\ \\text{cm}} = 3.01 \\times 10^9\\ \\text{cycles/s},$$ about 3010 megacycles.' },
          { label: 'Step 3: Compare with measurement', text: 'Sweeping a signal generator near 3000 Mc shows the output peak at 3050 Mc — close, but not exact. The coupling-loop holes should lower, not raise, the answer; calibration and diameter-measurement errors are the likely culprits.' },
          { label: 'Step 4: The higher modes', text: 'Sweeping further reveals additional resonances at 3300 and 3820 Mc. These belong to modes with different field geometry (E across the diameter, or from end to side) — each pattern of fields satisfying Maxwell’s equations in the can has its own frequency.' },
        ],
        result: 'The can resonates at 3010 Mc as predicted (observed 3050), with further modes at 3300 and 3820 Mc — a completely wireless resonant circuit with a Q that can exceed 100,000.',
      },
      {
        title: 'Designing a 60-ohm coaxial line',
        problem: 'For the coaxial line with $z_0 = \\ln(b/a)/2\\pi\\epsilon_0c$, find the radius ratio that gives a 60-ohm characteristic impedance.',
        steps: [
          { label: 'Step 1: Assemble the constants', text: 'Since $1/\\epsilon_0c = 120\\pi$ ohms (about 377 Ω), the characteristic impedance is $$z_0 = \\frac{\\ln(b/a)}{2\\pi} \\times 120\\pi\\ \\Omega = 60\\ln(b/a)\\ \\Omega.$$' },
          { label: 'Step 2: Solve for the ratio', text: 'Setting $z_0 = 60$ Ω gives $\\ln(b/a) = 1$, so $b/a = e \\approx 2.72$: an outer conductor 2.72 times the inner radius.' },
          { label: 'Step 3: Check the propagation speed', text: 'The same geometry gives $L_0 = \\ln(b/a)/2\\pi\\epsilon_0c^2$ and $C_0 = 2\\pi\\epsilon_0/\\ln(b/a)$, whose product is $1/c^2$ — whatever the ratio, the wave travels at the speed of light.' },
          { label: 'Step 4: Design context', text: 'Because the geometric factor enters only logarithmically, all practical lines land between about 50 Ω and a few hundred Ω — which is why 50-ohm and 75-ohm cable became the standards of the trade.' },
        ],
        result: 'A radius ratio of e gives 60 Ω; real cables cluster near 50–75 Ω because impedance depends only logarithmically on geometry.',
      },
      {
        title: 'Guide wavelength and the two velocities',
        problem: 'A rectangular guide of inside width $a = 5.0$ cm carries a 4.0-GHz wave ($\\lambda_0 = 7.5$ cm). Find the guide wavelength, the phase velocity and the group velocity.',
        steps: [
          { label: 'Step 1: Cutoff check', text: 'The cutoff wavelength is $2a = 10$ cm, and $\\lambda_0 = 7.5 < 10$ cm, so the wave propagates. The ratio is $\\lambda_0/2a = 0.75$.' },
          { label: 'Step 2: Guide wavelength', text: '$$\\lambda_g = \\frac{\\lambda_0}{\\sqrt{1 - (\\lambda_0/2a)^2}} = \\frac{7.5\\ \\text{cm}}{\\sqrt{1 - 0.5625}} = \\frac{7.5}{0.661} = 11.3\\ \\text{cm}.$$ The wave appears stretched along the guide.' },
          { label: 'Step 3: Phase velocity', text: '$v_p = c/\\sqrt{1 - (\\omega_c/\\omega)^2} = c/0.661 = 4.5 \\times 10^8$ m/s — faster than light, but only the nodes move at this speed, never energy or information.' },
          { label: 'Step 4: Group velocity and the check', text: '$v_g = c\\sqrt{1 - (\\omega_c/\\omega)^2} = 0.661c = 2.0 \\times 10^8$ m/s, the speed at which pulses and power actually travel. The geometric mean: $v_pv_g = c^2$ — the same relation as the relativistic energy–momentum formula, which is why guided waves resemble particles with mass.' },
        ],
        result: 'λg = 11.3 cm, phase velocity 1.5c, group velocity 0.66c — the zigzag picture of two plane waves bouncing between the walls explains all three.',
      },
    ],
    keyTakeaways: [
      'Impedance is field theory: $z_L = i\\omega L$ comes from Faraday’s law around the winding, $z_C = 1/i\\omega C$ from the field between the plates.',
      'Kirchhoff’s rules ($\\sum V = 0$ around loops, $\\sum I = 0$ into nodes) hold because no magnetic field links the circuit outside the elements; every linear network then collapses to one impedance plus a generator.',
      'Only the real part of an impedance dissipates: $\\langle P\\rangle = \\frac{1}{2}I_0^2R$; reactance stores and returns energy.',
      'The infinite L–C ladder passes frequencies below $\\omega_0 = 2/\\sqrt{LC}$ and attenuates those above — the low-pass filter — and terminated correctly it becomes the transmission line, with $v = 1/\\sqrt{L_0C_0} = c$.',
      'At high frequency a capacitor’s field becomes $J_0(\\omega r/c)$; at the first zero (2.405) the structure closes into a resonant cavity, $\\omega_0 = 2.405c/r$, with Q up to 100,000 and many modes.',
      'A waveguide propagates only above its cutoff $\\omega_c = \\pi c/a$; below cutoff the field decays exponentially (an imaginary wave number).',
      'In a guide $v_p > c > v_g$ with $v_pv_g = c^2$: nodes race ahead while energy and signals travel at the group velocity — the guided wave is really two plane waves bouncing between the walls at $\\sin\\theta = \\lambda_0/2a$.',
    ],
    quiz: [
      {
        q: 'The impedance of an ideal capacitor at angular frequency ω is:',
        options: [`$z_C = i\\omega C$`, '$z_C = 1/i\\omega C$ — infinite at dc, shrinking as ω grows', `$z_C = \\omega C$`, '$z_C = R$ for all frequencies'],
        answer: 1,
        explanation: 'From $V = Q/C$ and $I = dQ/dt = i\\omega CV$, the ratio $V/I = 1/i\\omega C$. At dc (ω → 0) the impedance diverges — an open circuit; at high frequency the current prefers to flow into the capacitance between the turns rather than around the coil, which is why real inductors eventually stop working as inductances.',
      },
      {
        q: 'The average power dissipated in an impedance $z = R + iX$ carrying a peak current $I_0$ is:',
        options: [`$\\frac{1}{2}I_0^2|z|$`, '$\\frac{1}{2}I_0^2R$ — only the resistive part dissipates; the reactance returns its energy each cycle', '$\\frac{1}{2}I_0^2X$ since reactance stores energy', '$I_0^2R$ with no factor of one half'],
        answer: 1,
        explanation: 'Writing $E = I_0R\\cos\\omega t - I_0X\\sin\\omega t$ for a current $I_0\\cos\\omega t$, the time-average of the product keeps only the in-phase piece: $\\langle P\\rangle = I_0^2R/2$. The quadrature term integrates to zero over a cycle — energy flows into the reactance and comes back out.',
      },
      {
        q: 'A resonant cavity is related to an ordinary L–C circuit because:',
        options: ['Both must contain iron cores to resonate', 'The region of mostly-E field plays the capacitance and the region of mostly-B field plays the inductance; squeezing the coil turn by turn morphs one into the other', 'Cavities only resonate at audio frequencies', 'The cavity stores charge on its walls exactly like a capacitor stores charge on plates'],
        answer: 1,
        explanation: 'Feynman’s bridge: lower the inductance by removing turns, then parallel many one-turn straps, and the structure closes into a can whose E-region is the “capacity” and B-region the “inductance.” The cavity is simply the high-frequency limit of the L–C resonator, with $\\omega_0 = 2.405c/r$ for the fundamental cylindrical mode.',
      },
      {
        q: 'For a rectangular waveguide operated above cutoff, which statement is correct?',
        options: ['The phase velocity is less than c and the group velocity greater than c', 'The phase velocity exceeds c but signals and energy travel at the group velocity, which is less than c, with $v_pv_g = c^2$', 'Both phase and group velocities exceed c', 'Both equal c regardless of frequency'],
        answer: 1,
        explanation: 'From $k_z = \\sqrt{\\omega^2/c^2 - \\pi^2/a^2}$, $v_p = \\omega/k_z = c/\\sqrt{1 - (\\omega_c/\\omega)^2} > c$, while $v_g = d\\omega/dk_z = c\\sqrt{1 - (\\omega_c/\\omega)^2} < c$. Only wave nodes exceed c; modulation and energy stay subluminal, and the product of the two speeds is exactly $c^2$.',
      },
      {
        q: 'Below its cutoff frequency, a waveguide:',
        options: ['Reflects all power instantly with no fields inside', 'Supports oscillating fields that penetrate only a distance of order $a/\\pi$ before decaying exponentially', 'Resonates like a cavity at every frequency', 'Heats up until the wave is absorbed'],
        answer: 1,
        explanation: 'For $\\omega < \\omega_c = \\pi c/a$, $k_z = ik^{\\prime}$ with $k^{\\prime} = \\sqrt{\\pi^2/a^2 - \\omega^2/c^2}$, so the field varies as $e^{-k^{\\prime}z}$ — an exponential, not a wave. Far below cutoff the decay length is about $a/\\pi$, a third of the guide width. An imaginary wave number is meaningful: the sine turns into a dying exponential.',
      },
    ],
  },

  // ------------------------------------------------------------------ 13.4
  {
    sectionId: 'hall-ch33-s34',
    readingTime: 11,
    intro: 'Why does glass bend light, and why does it split white light into colors? Because its atoms are driven oscillators whose response depends on frequency. Feynman solves Maxwell’s equations inside matter with the polarizability $\\alpha(\\omega)$, obtains the refractive index and its absorption, follows the same theory into metals (skin depth, plasma frequency), and finishes at surfaces — where the amplitude and phase of reflected waves follow from nothing but continuity of the fields.',
    objectives: [
      'Derive the frequency-dependent polarizability of a damped atomic oscillator and the gas formula $n \\approx 1 + Nq^2/2\\epsilon_0m(\\omega_0^2 - \\omega^2)$',
      'Apply the local-field correction to obtain the Clausius–Mossotti equation for dense materials and mixtures',
      'Interpret the complex index: dispersion from the real part, absorption with coefficient $\\beta = 2\\omega n_I/c$ from the imaginary part',
      'Compute wave propagation in metals: the skin depth $\\delta = \\sqrt{2\\epsilon_0c^2/\\sigma\\omega}$ and the plasma frequency $n^2 = 1 - (\\omega_p/\\omega)^2$',
      'Derive the Fresnel reflection coefficients, total internal reflection, and the evanescent wave from boundary conditions on E and B',
    ],
    concepts: [
      {
        term: 'The driven atomic oscillator',
        kind: 'definition',
        statement: 'Model the atom as an electron of mass m bound with spring constant $m\\omega_0^2$ and damping $m\\gamma\\dot x$. Under a wave $E_0e^{i\\omega t}$ the displacement is $x = \\frac{q_e/m}{-\\omega^2 + i\\gamma\\omega + \\omega_0^2}E$, so the **polarizability** is $$\\alpha(\\omega) = \\frac{q_e^2/m\\epsilon_0}{-\\omega^2 + i\\gamma\\omega + \\omega_0^2}.$$',
        detail: 'The classical spring model is not a legitimate picture of an atom, but quantum mechanics reproduces the form: a sum over modes $k$ with natural frequencies $\\omega_{0k}$, damping $\\gamma_k$ and oscillator strengths $f_k$ of order unity. The polarization of N atoms per unit volume is $P = \\epsilon_0N\\alpha(\\omega)E$ — proportional to E, but by a complex, frequency-dependent factor: the polarization can lag the field in phase.',
      },
      {
        term: 'The index of a dilute gas',
        kind: 'law',
        statement: 'Putting $P = \\epsilon_0N\\alpha E$ into Maxwell’s equations gives a wave with $k^2 = (\\omega^2/c^2)(1 + N\\alpha)$, so $$n^2 = 1 + N\\alpha.$$ For a gas ($n \\approx 1$) this reduces to the Vol. I result $$n = 1 + \\frac{Nq_e^2}{2\\epsilon_0m}\\frac{1}{\\omega_0^2 - \\omega^2}.$$',
        detail: 'Writing $n^2 = 1 + \\epsilon$ as $n \\approx 1 + \\epsilon/2$ connects the two forms. The physics beneath the formula: the incident wave drives the atomic dipoles, their accelerated charges radiate new waves, and the interference of old and new waves is equivalent to a phase shift — hence a different phase velocity. The new treatment by differential equations hides this picture but handles dense materials easily.',
      },
      {
        term: 'Dense materials: Clausius–Mossotti again',
        kind: 'theorem',
        statement: 'In a dense material each atom is polarized by the local field $E + P/3\\epsilon_0$ (valid when the wavelength far exceeds the atomic spacing), giving $$\\frac{3(n^2 - 1)}{n^2 + 2} = N\\alpha,$$ and for a mixture, $\\sum_j N_j\\alpha_j$. Neighboring atoms also shift and damp the resonance frequencies, so solid-state $\\omega_0$ and γ differ from those of free atoms.',
        detail: 'The exact evaluation of $\\alpha(\\omega)$ in dense substances — finding the $f_k$, $\\gamma_k$ and $\\omega_{0k}$ — is a hard problem of quantum mechanics, solved from first principles for only a few simple substances. As ω → 0 the formula reduces to the static dielectric theory of Chapter 11: $n^2 \\to \\kappa$.',
      },
      {
        term: 'The complex index and absorption',
        kind: 'law',
        statement: 'Since $\\alpha$ is complex, write $n = n_R - in_I$. The plane wave becomes $$E_x = E_0e^{-\\omega n_Iz/c}e^{i\\omega(t - n_Rz/c)}$$ — a wave travelling at $c/n_R$ whose amplitude dies exponentially; the intensity goes as $e^{-\\beta z}$ with **absorption coefficient** $\\beta = 2\\omega n_I/c$.',
        detail: 'In transparent materials the length $c/\\omega n_I$ is large compared with the thickness of the sample. The same damping term $i\\gamma\\omega$ that absorbs light is what keeps $n$ finite at resonance — without it the index would diverge at $\\omega = \\omega_0$.',
      },
      {
        term: 'Waves in metals: the skin depth',
        kind: 'method',
        statement: 'Conduction electrons feel no restoring force: set $\\omega_0 = 0$, and with $\\gamma = 1/\\tau$ (τ the mean time between collisions, related to the conductivity by $\\sigma = Nq_e^2\\tau/m$), $$n^2 = 1 + \\frac{\\sigma/\\epsilon_0}{i\\omega(1 + i\\omega\\tau)}.$$ At low frequency ($\\omega\\tau \\ll 1$, $\\omega \\ll \\sigma/\\epsilon_0$), $n = \\sqrt{\\sigma/2\\epsilon_0\\omega}(1 - i)$ and the amplitude decays over the **skin depth** $$\\delta = \\sqrt{\\frac{2\\epsilon_0c^2}{\\sigma\\omega}}.$$',
        detail: 'For copper ($\\sigma = 5.76 \\times 10^7$ Ω⁻¹m⁻¹, $N = 8.5 \\times 10^{28}$ m⁻³, one electron per atom), $\\tau = 2.4 \\times 10^{-14}$ s, $1/\\tau = 4.1 \\times 10^{13}$ s⁻¹ and $\\sigma/\\epsilon_0 = 6.5 \\times 10^{18}$ s⁻¹ — so the metal is “low-frequency” for waves longer than 0.3 mm. This is why cavity (and waveguide) losses live in a thin surface layer, and why silver plating improves the Q.',
      },
      {
        term: 'The plasma frequency',
        kind: 'law',
        statement: 'At high frequency ($\\omega\\tau \\gg 1$) the damping drops out and $$n^2 = 1 - \\frac{Nq_e^2}{\\epsilon_0m\\omega^2} = 1 - \\left(\\frac{\\omega_p}{\\omega}\\right)^2.$$ Below $\\omega_p$ the index is imaginary and waves are attenuated; above it the metal becomes **transparent**.',
        detail: 'The observed ultraviolet transparency edge of the alkali metals matches $\\lambda_p = 2\\pi c/\\omega_p$ well: lithium 1550 Å (predicted 1550 Å), sodium 2100 Å (2090 Å), potassium 3150 Å (2870 Å). The same formulas describe the ionosphere — long radio waves are reflected, short waves pass through to satellites. Thin gold films transmit visible light (greenish) while absorbing infrared.',
      },
      {
        term: 'Reflection at a surface: the Fresnel coefficients',
        kind: 'law',
        statement: 'Matching the incident, reflected and transmitted plane waves at a boundary (tangential E and B continuous; $\\epsilon_0E_n + P_n$ continuous) gives, for E perpendicular to the plane of incidence, $$\\frac{E_r}{E_i} = \\frac{\\sin(\\theta_i - \\theta_t)}{\\sin(\\theta_i + \\theta_t)},$$ and for E in the plane, $E_r/E_i = \\tan(\\theta_i - \\theta_t)/\\tan(\\theta_i + \\theta_t)$; the reflected intensity is the square, and at normal incidence $$\\frac{I_r}{I_i} = \\left(\\frac{n_2 - n_1}{n_2 + n_1}\\right)^{\\!2}.$$',
        detail: 'The same boundary matching first reproduces the laws of reflection and Snell’s law ($n_1\\sin\\theta_i = n_2\\sin\\theta_t$) — frequency unchanged, angle of reflection equal to incidence. The parallel-polarized reflection vanishes when $\\theta_i + \\theta_t = 90^\\circ$ (Brewster’s angle). The amplitude of surface reflection is a property of the surface, not just of the material: coatings a fraction of a wavelength thick can cancel it (coated lenses).',
      },
      {
        term: 'Total internal reflection and evanescent waves',
        kind: 'insight',
        statement: 'For light going from glass (n) toward air at incidence beyond the critical angle $\\sin\\theta_c = 1/n$, the transmitted wave number becomes imaginary and the field in the air decays as $e^{-k_Ix}$ over distances of order the wavelength: **total internal reflection**, with fields that leak but do not carry a normal wave away.',
        detail: 'Bring a second prism within a wavelength or two and the tail shakes electrons in it — light tunnels across the gap (frustrated total reflection). With 3-cm microwaves and paraffin prisms (n = 1.50, critical angle 41.5°) the effect is table-top sized: a gap of a few centimeters passes both transmitted and reflected beams. For a pure imaginary index, reflection is exactly 100% — and strong absorbers reflect strongly at the frequencies they absorb, which is why concentrated red ink shines green and gold films look metallic.',
      },
    ],
    examples: [
      {
        title: 'The index of a sugar solution',
        problem: 'A 50%-by-weight sucrose solution has measured density 1.2296 g/cm³ and refractive index 1.4200 at 589.3 mμ. Pure water (55.5 mol/L) has $n = 1.333$ and $3(n^2-1)/(n^2+2) = 0.617$. Test the mixture formula.',
        steps: [
          { label: 'Step 1: Compute the mixture quantity', text: 'With $n = 1.4200$: $n^2 = 2.0164$, so $\\frac{3(n^2 - 1)}{n^2 + 2} = \\frac{3 \\times 1.0164}{4.0164} = 0.759$.' },
          { label: 'Step 2: Water contribution', text: 'Assuming water keeps its own polarizability per molecule, the water in the solution contributes in proportion to its concentration: $0.617 \\times \\frac{34.15}{55.5} = 0.379$ (34.15 mol of water per liter in the 50% solution).' },
          { label: 'Step 3: Sucrose contribution', text: 'The remainder, $0.759 - 0.379 = 0.380$, is $N_2\\alpha_2$ for the sucrose. With 1.798 mol of sucrose per liter (molecular weight 342), the polarizability per mole is $0.380/1.798 = 0.211$.' },
          { label: 'Step 4: The verdict', text: 'Repeating at every concentration gives $N_0\\alpha_2$ = 0.213, 0.211, 0.210 and 0.207 from 30% to pure crystal — “pretty close.” The polarizability of the sugar molecule barely depends on its surroundings, dilute or crystalline, so the mixture rule holds to a few percent.' },
        ],
        result: 'Mixture theory predicts a constant molecular polarizability $N_0\\alpha_2 \\approx 0.21$ across all concentrations — confirmed within about 2%.',
      },
      {
        title: 'Skin depth of copper at microwave frequencies',
        problem: 'Using $\\sigma = 5.76 \\times 10^{7}$ (Ω·m)⁻¹ and one free electron per atom ($N = 8.5 \\times 10^{28}$ m⁻³), find how deeply a 10,000-megacycle (3-cm) wave penetrates copper.',
        steps: [
          { label: 'Step 1: Find the collision time', text: 'From $\\sigma = Nq_e^2\\tau/m$: $\\tau = \\frac{\\sigma m}{Nq_e^2} = \\frac{(5.76\\times10^{7})(9.11\\times10^{-31})}{(8.5\\times10^{28})(1.6\\times10^{-19})^2} = 2.4 \\times 10^{-14}$ s (the book prints $10^{-12}$, but its own figure $1/\\tau = 4.1 \\times 10^{13}$ s⁻¹ confirms the exponent).' },
          { label: 'Step 2: Check the regime', text: '$1/\\tau = 4.1 \\times 10^{13}$ s⁻¹ and $\\sigma/\\epsilon_0 = 6.5 \\times 10^{18}$ s⁻¹; both far exceed $\\omega = 2\\pi \\times 10^{10}$ s⁻¹, so the low-frequency formulas apply — 3-cm waves have wavelengths far longer than the 0.3-mm boundary (very short radio waves).' },
          { label: 'Step 3: Compute the skin depth', text: 'With $2\\epsilon_0c^2/\\sigma = 0.028$ m²·s⁻¹, $$\\delta = \\sqrt{\\frac{0.028}{\\omega}} = \\sqrt{\\frac{0.028}{6.28 \\times 10^{10}}} = 6.7 \\times 10^{-5}\\ \\text{cm}.$$' },
          { label: 'Step 4: Interpret', text: 'The wave penetrates only a fraction of a micron. This is why a waveguide’s losses live in a thin surface layer, why silver plating improves cavity Q, and why a shield only a few skin depths thick keeps interference out.' },
        ],
        result: 'A 3-cm microwave enters copper only $6.7 \\times 10^{-5}$ cm — the skin effect, from $\\delta = \\sqrt{2\\epsilon_0c^2/\\sigma\\omega}$.',
      },
      {
        title: 'How much light does glass reflect?',
        problem: 'Light strikes an air–glass boundary ($n_1 = 1$, $n_2 = 1.5$) at normal incidence, and, separately, a strongly absorbing surface with a nearly pure imaginary index.',
        steps: [
          { label: 'Step 1: Apply the normal-incidence formula', text: 'At normal incidence, for either polarization, $$\\frac{I_r}{I_i} = \\left(\\frac{n_2 - n_1}{n_2 + n_1}\\right)^{\\!2} = \\left(\\frac{0.5}{2.5}\\right)^{\\!2} = 0.04.$$' },
          { label: 'Step 2: Interpret', text: 'Each clean air–glass surface reflects 4% of the light — the reason uncoated lenses and windows lose brightness and gain ghost images; anti-reflection coatings cancel this by interference in a thin film.' },
          { label: 'Step 3: The absorbing limit', text: 'For an index $n = -in_I$ (purely imaginary), the amplitude ratio is $\\frac{1 + in_I}{1 - in_I}$, whose squared magnitude is $\\frac{1 + n_I^2}{1 + n_I^2} = 1$ — **100% reflection**, regardless of how big $n_I$ is.' },
          { label: 'Step 4: The general rule', text: 'A very good absorber at any frequency is a very good reflector of that frequency: little gets inside to be absorbed. Concentrated red ink transmits red and shows a greenish metallic surface reflection; gold films on furnace goggles pass green light but reflect infrared.' },
        ],
        result: 'Glass reflects 4% per surface; a pure-imaginary index reflects 100% — strong absorption implies strong reflection, not a black surface.',
      },
    ],
    keyTakeaways: [
      'The atom is a driven, damped oscillator with $\\alpha(\\omega) = \\frac{q_e^2/m\\epsilon_0}{\\omega_0^2 - \\omega^2 + i\\gamma\\omega}$ (summed over quantum modes with strengths $f_k$); Maxwell’s equations in matter then give $n^2 = 1 + N\\alpha$, the gas formula $n \\approx 1 + \\frac{Nq_e^2}{2\\epsilon_0m(\\omega_0^2 - \\omega^2)}$ — dispersion.',
      'Dense materials need the local field: $3(n^2 - 1)/(n^2 + 2) = \\sum_jN_j\\alpha_j$ (Clausius–Mossotti), which also covers mixtures like sugar solutions.',
      'A complex index means absorption: intensity $\\propto e^{-\\beta z}$ with $\\beta = 2\\omega n_I/c$; the real part disperses, the imaginary part attenuates.',
      'In metals the conduction electrons give $\\gamma = 1/\\tau$ with $\\sigma = Nq_e^2\\tau/m$; at low frequency the wave dies over the skin depth $\\delta = \\sqrt{2\\epsilon_0c^2/\\sigma\\omega}$ (about $6.7 \\times 10^{-5}$ cm in copper at 3 cm wavelength).',
      'Above the plasma frequency $n^2 = 1 - (\\omega_p/\\omega)^2$ is real: metals become transparent in the ultraviolet (lithium at 1550 Å), and the ionosphere reflects long radio waves.',
      'Continuity of tangential E and B (and of $\\epsilon_0E_n + P_n$) at a sharp boundary yields reflection, Snell’s law and the Fresnel amplitudes; at normal incidence $R = [(n_2 - n_1)/(n_2 + n_1)]^2$.',
      'Beyond the critical angle the transmitted wave number is imaginary: total internal reflection with an evanescent tail of order a wavelength, which can tunnel across a small gap.',
    ],
    quiz: [
      {
        q: 'Blue light is bent more than red light by a glass prism because:',
        options: ['Blue photons carry more momentum and push harder on the atoms', 'The refractive index rises toward the blue: at higher ω the denominator $\\omega_0^2 - \\omega^2$ of the polarizability shrinks, so the driven electrons respond more strongly', 'Glass absorbs red light completely', 'The wavelength of blue light is longer inside the glass'],
        answer: 1,
        explanation: 'With resonances in the ultraviolet, visible frequencies sit below $\\omega_0$, where $\\alpha \\propto 1/(\\omega_0^2 - \\omega^2)$ grows as ω approaches the resonance — normal dispersion. The prism deflects each frequency by a different amount because n itself is a function of frequency.',
      },
      {
        q: 'The quantity $3(n^2 - 1)/(n^2 + 2)$ equals $N\\alpha$ in dense materials because:',
        options: ['The index is always close to one inside matter', 'Each atom is driven by the local field $E + P/3\\epsilon_0$ — the field inside a spherical cavity in the polarized medium', 'Dense materials have no resonances', 'Quartz crystals are anisotropic'],
        answer: 1,
        explanation: 'The wave’s field is nearly uniform over thousands of atoms, so the cavity argument of Chapter 11 carries over: $P = \\epsilon_0N\\alpha(E + P/3\\epsilon_0)$ solves to $P = \\epsilon_0N\\alpha E/(1 - N\\alpha/3)$, and substituting into the wave equation gives the Clausius–Mossotti form — strictly true for isotropic materials including cubic crystals.',
      },
      {
        q: 'A wave of angular frequency ω enters a conductor of conductivity σ (with $\\omega \\ll \\sigma/\\epsilon_0$ and $\\omega\\tau \\ll 1$). Its amplitude falls by $1/e$ in a distance:',
        options: ['$c/\\omega$ — one radian length of the wave', '$\\delta = \\sqrt{2\\epsilon_0c^2/\\sigma\\omega}$ — the skin depth, shrinking as frequency rises', '$1/\\sigma$ always', 'The whole thickness of the conductor, uniformly'],
        answer: 1,
        explanation: 'In the low-frequency regime the index is $n = \\sqrt{\\sigma/2\\epsilon_0\\omega}(1 - i)$: real and imaginary parts of equal size, so the wave oscillates and decays on the same scale, $\\delta = \\sqrt{2\\epsilon_0c^2/\\sigma\\omega}$. Higher frequency or better conductivity both thin the layer — which is why cavity walls are silver plated.',
      },
      {
        q: 'According to Feynman, why do strong absorbers look metallic and shiny?',
        options: ['The surface oxidizes into a mirror', 'A large imaginary index makes the reflection coefficient $|\\frac{1 + in_I}{1 - in_I}|^2 = 1$: waves are reflected before they can get inside to be absorbed', 'Absorbers emit their own light', 'Total internal reflection occurs at every surface'],
        answer: 1,
        explanation: 'At normal incidence the reflected amplitude ratio for an index $-in_I$ has magnitude exactly one. Hence the rule: a material that absorbs strongly at some frequency also reflects that frequency strongly — concentrated red ink transmits red but shows a greenish metallic sheen, reflecting the green it would otherwise absorb.',
      },
      {
        q: 'Light inside glass strikes the surface beyond the critical angle. What exists in the air beyond the surface?',
        options: ['A travelling refracted beam of reduced intensity', 'An evanescent field decaying as $e^{-k_Ix}$ over a distance of order the wavelength — energy returns into the glass as total reflection', 'Nothing at all — the boundary condition forbids any field', 'A standing wave filling all the air'],
        answer: 1,
        explanation: 'Snell’s law gives $\\sin\\theta_t > 1$, so $k_x^{\\prime\\prime}$ becomes imaginary and the “transmitted” wave is $E_t = E_0e^{-k_Ix}e^{i(\\omega t - k_yy)}$ — oscillating in time, sliding along the surface, but exponentially decaying into the air. Bring another prism within a wavelength and this tail drives currents in it: light tunnels through the gap.',
      },
    ],
  },
]

export const physCh13Formulas: FormulaEntry[] = [
  {
    chapterId: 'hall-ch33',
    section: '32.32',
    name: 'Maxwell’s fourth equation (with displacement current)',
    formula: 'c²∇×B = j/ε₀ + ∂E/∂t',
    note: 'the added term makes the equation consistent with charge conservation',
    latex: 'c^{2}\\nabla \\times B = \\frac{j}{\\epsilon_0} + \\frac{\\partial E}{\\partial t}',
  },
  {
    chapterId: 'hall-ch33',
    section: '32.33',
    name: 'Plane-wave field ratio',
    formula: 'E = cB',
    note: 'with E ⊥ B ⊥ direction of propagation; front speed c',
    latex: 'E = cB',
  },
  {
    chapterId: 'hall-ch33',
    section: '32.33',
    name: 'Retarded potentials (general solution)',
    formula: 'φ(1,t) = ∫ ρ(2, t − r₁₂/c) dV₂ / 4πε₀r₁₂',
    note: 'same form for A with source j/ε₀c²; influences travel at c',
    latex: '\\phi(1, t) = \\int \\frac{\\rho(2,\\, t - r_{12}/c)}{4\\pi\\epsilon_0 r_{12}}\\, dV_2',
  },
  {
    chapterId: 'hall-ch33',
    section: '32.33',
    name: 'Radiation field of an accelerated charge',
    formula: 'E = q·a⊥(t − r/c) / 4πε₀c²r',
    note: 'the 1/r term; only acceleration radiates, with cB = êr×E',
    latex: 'E = \\frac{q\\,a_{\\perp}(t - r/c)}{4\\pi\\epsilon_0c^{2}r}',
  },
  {
    chapterId: 'hall-ch31',
    section: '31.20',
    name: 'Impedances of L and C',
    formula: 'z_L = iωL, z_C = 1/iωC, z_R = R',
    note: 'average dissipation = ½I₀²·Re(z); reactance stores energy',
    latex: 'z_L = i\\omega L, \\qquad z_C = \\frac{1}{i\\omega C}, \\qquad z_R = R',
  },
  {
    chapterId: 'hall-ch31',
    section: '31.20',
    name: 'Cavity resonance and waveguide cutoff',
    formula: 'ω₀ = 2.405c/r; ω_c = πc/a',
    note: 'cylindrical can; rectangular guide propagates only above ωc',
    latex: '\\omega_0 = 2.405\\,\\frac{c}{r}, \\qquad \\omega_c = \\frac{\\pi c}{a}',
  },
  {
    chapterId: 'hall-ch33',
    section: '32.34',
    name: 'Refractive index (dilute gas)',
    formula: 'n ≈ 1 + Nq²/2ε₀m(ω₀² − ω²)',
    note: 'dense matter: 3(n²−1)/(n²+2) = Nα (Clausius–Mossotti)',
    latex: 'n \\approx 1 + \\frac{Nq^{2}}{2\\epsilon_0 m(\\omega_0^{2} - \\omega^{2})}',
  },
  {
    chapterId: 'hall-ch33',
    section: '32.34',
    name: 'Skin depth in a conductor',
    formula: 'δ = √(2ε₀c²/σω)',
    note: 'above the plasma frequency n² = 1 − (ωp/ω)² and metals clear',
    latex: '\\delta = \\sqrt{\\frac{2\\epsilon_0c^{2}}{\\sigma\\omega}}',
  },
]
