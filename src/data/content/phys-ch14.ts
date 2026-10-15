import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// The Feynman Lectures on Physics, Vol. II — Master Library Chapter 14
// Relativistic Fields, Matter and Curved Space
// (Lectures 19, 25–31, 34–42 as mapped in library-parts/physics.ts)
// All worked-example numbers are Feynman’s own, recomputed independently.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const physCh14Content: SectionContent[] = [
  // ------------------------------------------------------------------ 14.1
  {
    sectionId: 'hall-ch37-s25',
    readingTime: 10,
    intro: 'Maxwell’s equations were relativistically correct half a century before relativity was discovered — Lorentz found his transformation as the one that left them unchanged. This section rebuilds electrodynamics in the four-dimensional notation that makes that invariance manifest: four-vectors, the four-potential, the field tensor, and the rules by which electric and magnetic fields mix when you change frames. Following Feynman, we set $c = 1$ in the derivations and put the $c$’s back in the results.',
    objectives: [
      'Write the scalar product of two four-vectors and explain why it is an invariant',
      'Assemble the four-potential and state all of Maxwell’s equations in one line of four-vector notation',
      'Transform electric and magnetic fields between inertial frames and resolve the moving-wire magnet mysteries',
      'Compute the pancake-shaped field of a charge moving at $0.9c$',
      'State the relativistic equation of motion in terms of the four-force and proper time',
    ],
    concepts: [
      {
        term: 'The four-vector',
        kind: 'definition',
        statement: 'A **four-vector** is a set of four quantities $a_\\mu = (a_t, a_x, a_y, a_z)$ that transform under a Lorentz transformation exactly as the coordinates $(t, x, y, z)$ do. The energy and momentum of a particle already form one: $p_\\mu = (E, \\boldsymbol{p})$.',
        detail: 'Feynman works in units where $c = 1$ — one meter of time is the time light needs to travel one meter — so every $c$ disappears from the algebra and the space-time symmetry stands out. Not every three-vector extends to a four-vector: the ordinary velocity $\\boldsymbol{v} = d\\boldsymbol{x}/dt$ fails, because $dt$ in the denominator is not an invariant. Dividing by the invariant $\\sqrt{1-v^2}$ repairs it, giving the four-velocity $u_\\mu = (1, \\boldsymbol{v})/\\sqrt{1-v^2}$ and the clean law $p_\\mu = m_0 u_\\mu$ (dividing a four-vector by the invariant scalar $m_0$ changes nothing).',
      },
      {
        term: 'The scalar product of four-vectors',
        kind: 'law',
        statement: 'The dot product of two four-vectors is defined with a minus sign on the space parts, and it is an invariant — the same number in every inertial frame: $$a_\\mu b_\\mu = a_t b_t - \\boldsymbol{a}\\cdot\\boldsymbol{b}.$$ In particular the "length" of a four-vector is $a_\\mu a_\\mu = a_t^2 - \\boldsymbol{a}\\cdot\\boldsymbol{a}$.',
        detail: 'This is the four-dimensional heir of the invariance of $r^2 = x^2 + y^2 + z^2$ under rotations, which Chapter 11 of the physics library used to define vectors. Useful special cases: the momentum four-vector of any particle has length $p_\\mu p_\\mu = E^2 - p^2 = M^2$ (evaluate it in the rest frame, where $p_\\mu = (M, \\boldsymbol{0})$), and the four-velocity is the unit four-vector, $u_\\mu u_\\mu = 1$. The convention writes $a_\\mu b_\\mu$ with no dot; watch out, some authors reverse all the signs.',
      },
      {
        term: 'The four-gradient and the D’Alembertian',
        kind: 'notation',
        statement: 'The gradient operator must be defined with minus signs on its space parts, $\\nabla_\\mu = (\\partial/\\partial t, -\\nabla)$, for the gradient of a scalar to transform as a four-vector. Its self-scalar-product is the **D’Alembertian**, $$\\Box^2 = \\nabla_\\mu\\nabla_\\mu = \\frac{\\partial^2}{\\partial t^2} - \\nabla^2,$$ the four-dimensional analog of the Laplacian.',
        detail: 'The naive guess $(\\partial/\\partial t, \\nabla)$ has "a couple of signs wrong" — working out $\\Delta\\phi$ for a moving observer exposes them. The four-divergence of the current density then reads $\\nabla_\\mu j_\\mu = \\partial\\rho/\\partial t + \\nabla\\cdot\\boldsymbol{j}$ (double negatives cancel), so the conservation of charge becomes $\\nabla_\\mu j_\\mu = 0$ — an invariant statement. If charge is conserved in one frame, it is conserved in all frames; this is exactly the local conservation that Section 14.2 elevates into a general principle.',
      },
      {
        term: 'The four-potential — all of Maxwell in one line',
        kind: 'law',
        statement: 'The scalar and vector potentials are components of a single **four-potential** $A_\\mu = (\\phi, \\boldsymbol{A})$. In the Lorenz gauge $\\nabla_\\mu A_\\mu = 0$, the complete equations of electrodynamics are $$\\Box^2 A_\\mu = \\frac{j_\\mu}{\\epsilon_0}, \\qquad \\nabla_\\mu j_\\mu = 0.$$',
        detail: '"There, in one tiny space on the page, are all of the Maxwell equations — beautiful and simple." Nothing new is deduced — it is the four wave equations of Chapter 13 relabelled — but the form displays the Lorentz invariance directly. Feynman immediately spoofs the fashion for such compression with his "unworldliness" $U = \\sum_i U_i = 0$, built from the squares of all the mismatches of physics ($U_1 = (F - ma)^2$, $U_2 = (\\nabla\\cdot\\boldsymbol{E} - \\rho/\\epsilon_0)^2$, and so on): one equation containing all of physics, and a pure trick. The honest content of the four-vector form is that every law of nature — meson waves, neutrinos — shares this invariance.',
      },
      {
        term: 'Potentials of a uniformly moving charge',
        kind: 'method',
        statement: 'For a charge $q$ moving at constant velocity, the potentials at $(x, y, z)$ at time $t$ are simplest in the frame riding with the charge, where $\\phi\' = q/4\\pi\\epsilon_0 r\'$. Transforming back gives a $\\phi$ expressed through the coordinates of the **present** position, and a vector potential $\\boldsymbol{A} = \\boldsymbol{v}\\phi/c^2$.',
        detail: 'The influence physically travels from the retarded position at speed $c$, but for uniform motion the retarded position is uniquely determined by the present one. For arbitrary motion one plays the "projected position" game: find the position and velocity at the retarded time, then pretend the charge continued uniformly to the projected position — the potentials (but not the fields) depend only on position and velocity, never on the acceleration, at the retarded time. Feynman’s desert-island summary: (1) $A_\\mu$ is a four-vector, (2) the Coulomb potential $q/4\\pi\\epsilon_0 r$ holds for a stationary charge, (3) only the retarded position and velocity matter — from these three facts all of electrodynamics can be reconstructed.',
      },
      {
        term: 'The fields of a uniformly moving charge',
        kind: 'insight',
        statement: 'The electric field of a uniformly moving charge points radially away from its **present** position, but it is squashed into a pancake: at the sides the Coulomb field is multiplied by $1/\\sqrt{1-v^2/c^2}$, while ahead of and behind the charge it is multiplied by $(1 - v^2/c^2)$. The magnetic field is $$\\boldsymbol{B} = \\frac{\\boldsymbol{v}\\times\\boldsymbol{E}}{c^2}.$$',
        detail: 'Sidewise, $E = (q/4\\pi\\epsilon_0\\sqrt{1-v^2/c^2})/r^2$ — still inverse-square, but "bigger than the Coulomb potential by the ratio of the energy of the particle to its rest mass." Straight ahead, $E = q(1-v^2/c^2)/4\\pi\\epsilon_0 r^2$. A handy picture: draw the Coulomb field-line pattern on paper and set it travelling — the Lorentz contraction squeezes the lines together at the sides and spreads them ahead and behind, in exactly the right density. But field lines are not real: add a moving magnet and new electric fields destroy the picture. For slow charges, $\\boldsymbol{B} = (q/4\\pi\\epsilon_0 c^2)\\,\\boldsymbol{v}\\times\\boldsymbol{r}/r^3$ — the current-element field of magnetostatics recovered.',
      },
      {
        term: 'The field tensor $F_{\\mu\\nu}$',
        kind: 'definition',
        statement: '$\\boldsymbol{E}$ and $\\boldsymbol{B}$ are not four-vectors. They are the six independent components of one object — an **antisymmetric tensor of the second rank**: $F_{\\mu\\nu} = \\nabla_\\mu A_\\nu - \\nabla_\\nu A_\\mu$, with $F_{xy} = -B_z$, $F_{yz} = -B_x$, $F_{zx} = -B_y$ and $F_{xt} = E_x$, $F_{yt} = E_y$, $F_{zt} = E_z$.',
        detail: 'Of the sixteen subscript pairs, $F_{\\mu\\mu} = 0$ and $F_{\\mu\\nu} = -F_{\\nu\\mu}$ leave six. The construction generalizes the cross product: in three dimensions an antisymmetric object like $\\tau_{ij} = r_iF_j - r_jF_i$ has three components that "by luck" transform like a vector — which is why we can speak of torque and $\\boldsymbol{B}$ as vectors at all. In four dimensions six components cannot masquerade as four, so the luck runs out and the tensor nature is exposed. "You’ve come a long way. Remember way back when we defined what a velocity meant? Now we are talking about an antisymmetric tensor of the second rank in four dimensions."',
      },
      {
        term: 'Lorentz transformation of the fields',
        kind: 'law',
        statement: 'Under a boost of speed $v$ along $x$, the components parallel to the motion are unchanged and the transverse components mix: $$E\'_\\parallel = E_\\parallel, \\quad \\boldsymbol{E}\'_\\perp = \\frac{(\\boldsymbol{E} + \\boldsymbol{v}\\times\\boldsymbol{B})_\\perp}{\\sqrt{1-v^2/c^2}}, \\qquad B\'_\\parallel = B_\\parallel, \\quad \\boldsymbol{B}\'_\\perp = \\frac{(\\boldsymbol{B} - \\boldsymbol{v}\\times\\boldsymbol{E}/c^2)_\\perp}{\\sqrt{1-v^2/c^2}}.$$',
        detail: 'A pure electric field, seen by an observer moving perpendicular to it, gains a magnetic part $\\boldsymbol{B}\' = -\\boldsymbol{v}\\times\\boldsymbol{E}\'/c^2$; a pure magnetic field gains an electric part. The once-famous airplane problem illustrates the scale: flying through the earth’s vertical field, a wire across the cabin should develop a $\\boldsymbol{v}\\times\\boldsymbol{B}$ field of order millivolts per meter — but atmospheric electricity (irregular fields of order $100$ volts per meter, Chapter 9 of Vol. II) swamps the signal, and the scheme never worked. The transformations also expose a scandal: for two charges moving on orthogonal paths, the forces are not equal and opposite — action does not equal reaction. The missing momentum is carried by the field, as Section 14.2 shows.',
      },
      {
        term: 'The relativistic equation of motion',
        kind: 'law',
        statement: 'The force law generalizes to $d(m_0\\boldsymbol{v}/\\sqrt{1-v^2/c^2})/dt = q(\\boldsymbol{E} + \\boldsymbol{v}\\times\\boldsymbol{B})$. In four-vector form, with $s$ the **proper time** ($ds = dt\\sqrt{1-v^2/c^2}$, the time kept by a clock riding with the particle): $$m_0\\frac{d^2x_\\mu}{ds^2} = q\\,u_\\nu F_{\\mu\\nu}.$$',
        detail: 'The trick is always the same: $d/dt$ of a four-vector is not a four-vector, but $d/ds$ is, because $s$ is invariant. The four-force is $f_\\mu = (\\boldsymbol{F}\\cdot\\boldsymbol{v}, \\boldsymbol{F})/\\sqrt{1-v^2/c^2}$; its time component works out to $f_t = q\\boldsymbol{v}\\cdot\\boldsymbol{E}/\\sqrt{1-v^2/c^2}$ — the rate of doing work, since $(\\boldsymbol{v}\\times\\boldsymbol{B})\\cdot\\boldsymbol{v} = 0$. The result looks like $F = ma$ but is not: unlike the Maxwell case, where the four-vector rewriting changed nothing physical, here the relativistic mechanics is genuinely different from Newton’s law.',
      },
    ],
    examples: [
      {
        title: 'The antiproton threshold — four-vector algebra at work',
        problem: 'Antiprotons are made by slamming a proton into a proton at rest in a hydrogen target: $P + P \\rightarrow P + P + P + \\bar{P}$ (baryon conservation forces three protons plus the antiproton). What incident energy is just enough?',
        steps: [
          { label: 'Step 1: Think in the center-of-mass frame', text: 'At threshold the debris is a single glob at rest in the CM frame: $p_{c\\mu} = (4M, \\boldsymbol{0})$, so its invariant length is $p_{c\\mu}p_{c\\mu} = 16M^2$, where $M$ is the proton (equal to antiproton) rest mass.' },
          { label: 'Step 2: Square the conservation law', text: 'Four-momentum conservation gives $(p_{a\\mu} + p_{b\\mu})(p_{a\\mu} + p_{b\\mu}) = p_{c\\mu}p_{c\\mu}$. Since any particle satisfies $p_\\mu p_\\mu = M^2$, this reads $M^2 + 2p_{a\\mu}p_{b\\mu} + M^2 = 16M^2$, hence $p_{a\\mu}p_{b\\mu} = 7M^2$.' },
          { label: 'Step 3: Evaluate the invariant in the lab', text: 'The target proton is at rest, $p_{b\\mu} = (M, \\boldsymbol{0})$, so the scalar product is simply $p_{a\\mu}p_{b\\mu} = ME_a$. Setting this equal to $7M^2$ gives $E_a = 7M$ for the total energy of the incident proton.' },
          { label: 'Step 4: Insert numbers', text: 'With $M = 938$ MeV, the threshold is $7M \\approx 6.6$ GeV total, i.e. $6M \\approx 5.6$ GeV of kinetic energy.' },
          { label: 'Step 5: Check against the machine', text: 'The Bevatron at Berkeley was designed to give about $6.2$ GeV of kinetic energy to its protons — comfortably above the $5.6$ GeV threshold, which is exactly why it could discover the antiproton.' },
        ],
        result: 'Threshold total energy $E_a = 7M \\approx 6.6$ GeV (kinetic $6M \\approx 5.6$ GeV); the whole computation never left invariant scalar products.',
      },
      {
        title: 'Is the current-carrying wire charged?',
        problem: 'A wire is electrically neutral in the lab but carries a current density $j_x$. A charge drifting parallel to the wire at speed $v$ feels a magnetic attraction. How can a neutral wire attract anything?',
        steps: [
          { label: 'Step 1: Pack charge and current into a four-vector', text: 'The charge density and current density form $j_\\mu = (\\rho, \\boldsymbol{j})$ — established in Chapter 13 by exactly this kind of argument.' },
          { label: 'Step 2: Transform to the drifting frame', text: 'With $\\rho = 0$ in the lab, the Lorentz transformation gives $\\rho\' = -vj_x/\\sqrt{1-v^2}$ and $j_x\' = j_x/\\sqrt{1-v^2}$ (units $c = 1$). The moving observer finds the wire electrically charged.' },
          { label: 'Step 3: Interpret', text: 'In the charge’s frame the force is a plain electrostatic attraction from this line charge; in the lab frame the same deflection is bookkept as a magnetic $\\boldsymbol{v}\\times\\boldsymbol{B}$ force. One phenomenon, two descriptions, related by the field tensor.' },
          { label: 'Step 4: Use the sources', text: 'Feynman’s point is procedural: knowing $\\rho\'$ and $j_x\'$, one can feed them straight into Maxwell’s equations in the moving frame and find the fields there — the relativistic notation does the mystery-solving automatically.' },
        ],
        result: 'Magnetism in one frame is electrostatics in another; the four-current transformation is the whole secret of the "mysteries" of current–charge interactions.',
      },
      {
        title: 'The field of a charge moving at $0.9c$',
        problem: 'A charge moves at constant speed $v = 0.9c$. Compare its electric field at a given distance to the side with the field the same distance directly ahead.',
        steps: [
          { label: 'Step 1: Transverse field', text: 'To the side, $E_\\perp = \\dfrac{q}{4\\pi\\epsilon_0 r^2}\\,\\dfrac{1}{\\sqrt{1-v^2/c^2}}$. With $v^2/c^2 = 0.81$, we have $1 - v^2/c^2 = 0.19$ and $1/\\sqrt{0.19} \\approx 2.3$.' },
          { label: 'Step 2: Longitudinal field', text: 'Straight ahead (or behind), $E_\\parallel = \\dfrac{q}{4\\pi\\epsilon_0 r^2}(1 - v^2/c^2) = 0.19$ times the Coulomb value at the same distance.' },
          { label: 'Step 3: Compare', text: 'The side field is about $2.3$ times Coulomb and the forward field about $0.19$ times Coulomb — a ratio of roughly $1/(1-v^2/c^2)^{3/2} \\approx 12$. As $v \\rightarrow c$ the field collapses into a thin disk perpendicular to the motion.' },
          { label: 'Step 4: Add the magnetic field', text: 'The magnetic field circulates around the line of motion with $\\boldsymbol{B} = \\boldsymbol{v}\\times\\boldsymbol{E}/c^2$, matching the low-velocity current-element formula of Chapter 12.' },
        ],
        result: 'At $v = 0.9c$: side field $\\approx 2.3\\times$ Coulomb, forward field $\\approx 0.19\\times$ Coulomb — the field lines crowd into the transverse plane.',
      },
    ],
    keyTakeaways: [
      'A four-vector transforms like $(t, x, y, z)$; the scalar product $a_\\mu b_\\mu = a_t b_t - \\boldsymbol{a}\\cdot\\boldsymbol{b}$ is invariant under Lorentz transformations.',
      'The four-gradient needs minus signs, $\\nabla_\\mu = (\\partial/\\partial t, -\\nabla)$, and its square is the D’Alembertian $\\Box^2 = \\partial^2/\\partial t^2 - \\nabla^2$.',
      'Charge conservation $\\nabla_\\mu j_\\mu = 0$ and the wave equation $\\Box^2 A_\\mu = j_\\mu/\\epsilon_0$ (Lorenz gauge) put all of Maxwell’s equations in one invariant line.',
      'Electric and magnetic fields are the six components of the antisymmetric second-rank tensor $F_{\\mu\\nu}$; parallel components survive a boost unchanged, transverse components mix through $\\boldsymbol{v}\\times\\boldsymbol{B}$ and $\\boldsymbol{v}\\times\\boldsymbol{E}/c^2$.',
      'A uniformly moving charge has a radial field from its present position — enhanced transversely by $1/\\sqrt{1-v^2/c^2}$, reduced longitudinally by $(1-v^2/c^2)$ — with $\\boldsymbol{B} = \\boldsymbol{v}\\times\\boldsymbol{E}/c^2$.',
      'The equation of motion $m_0\\,d^2x_\\mu/ds^2 = q\\,u_\\nu F_{\\mu\\nu}$ uses proper time $s$; the four-force’s time component is the rate of doing work $q\\boldsymbol{v}\\cdot\\boldsymbol{E}$.',
      'Notation cannot create physics (Feynman’s "unworldliness" $U = 0$ joke), but manifest Lorentz invariance guarantees new laws written in four-vector form obey the principle of relativity.',
    ],
    quiz: [
      {
        q: 'Which of the following is NOT a four-vector?',
        options: ['The energy–momentum $p_\\mu = (E, \\boldsymbol{p})$ of a particle', 'The current density $j_\\mu = (\\rho, \\boldsymbol{j})$', 'The ordinary velocity triple $(1, v_x, v_y, v_z)$ built from $dx/dt$', 'The four-potential $A_\\mu = (\\phi, \\boldsymbol{A})$'],
        answer: 2,
        explanation: 'The $dt$ in each denominator is frame-dependent, so the velocity components do not transform like $(t, x, y, z)$. Multiplying by $1/\\sqrt{1-v^2}$ (dividing by proper time) repairs this, giving the four-velocity.',
      },
      {
        q: 'For the four-vector $a_\\mu = (5, 3, 0, 0)$, what is the value of the invariant $a_\\mu a_\\mu$?',
        options: ['34', '16', '25', '0'],
        answer: 1,
        explanation: 'The scalar product subtracts the space parts: $a_\\mu a_\\mu = 5^2 - 3^2 = 25 - 9 = 16$. Option 34 is the Euclidean answer that the minus sign exists to prevent.',
      },
      {
        q: 'An observer moves through a region where there is only a magnetic field $\\boldsymbol{B}$, perpendicular to her velocity $\\boldsymbol{v}$. What does she observe?',
        options: ['Exactly the same pure magnetic field', 'An electric field of approximately $\\boldsymbol{v}\\times\\boldsymbol{B}$ in addition to a magnetic field', 'An electric field parallel to her motion, and no magnetic field', 'No fields at all'],
        answer: 1,
        explanation: 'From the transformation table, $\\boldsymbol{E}\'_\\perp = (\\boldsymbol{E} + \\boldsymbol{v}\\times\\boldsymbol{B})_\\perp/\\sqrt{1-v^2/c^2} \\approx \\boldsymbol{v}\\times\\boldsymbol{B}$ for small speeds — the principle behind every "moving wire sees an EMF" argument.',
      },
      {
        q: 'How many independent components does the electromagnetic field tensor $F_{\\mu\\nu}$ have?',
        options: ['16', '10', '6', '4'],
        answer: 2,
        explanation: 'Antisymmetry ($F_{\\mu\\mu} = 0$, $F_{\\mu\\nu} = -F_{\\nu\\mu}$) reduces the $4\\times4 = 16$ combinations to six — three electric and three magnetic components of one object.',
      },
      {
        q: 'In Feynman’s antiproton-threshold calculation, the incident proton must arrive with kinetic energy of about:',
        options: [`$4M$`, `$6M$`, `$7M$`, `$16M$`],
        answer: 1,
        explanation: 'The total energy must be $E_a = 7M$, so the kinetic energy is $6M \\approx 5.6$ GeV. The final glob of four particles at rest in the CM frame fixes $p_{c\\mu}p_{c\\mu} = 16M^2$, and evaluating the same invariant in the lab gives $ME_a = 7M^2$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.2
  {
    sectionId: 'hall-ch33-s35',
    readingTime: 12,
    intro: 'Energy conservation must be more than a bookkeeping of the world total: relativity forbids energy from vanishing here and appearing there "simultaneously," so every conservation law must be local — energy that leaves a region must cross its boundary. Applying this to the electromagnetic field yields Poynting’s energy flow vector and its startling static-field examples, then the field momentum density, and finally the classical electron’s electromagnetic mass — the beautiful theory that "falls on its face" with the famous 4/3 problem. The section closes with charges threading through fields: helices, spectrometers, lenses and accelerators.',
    objectives: [
      'Explain why relativity demands local conservation laws with a density and a flux',
      'State the field energy density and the Poynting vector and verify them for light waves',
      'Trace the energy-flow pictures for a charging capacitor, a resistor, and a charge next to a magnet',
      'Compute the electromagnetic mass of a classical electron and expose the 4/3 problem',
      'Analyze helical motion, the 180-degree spectrometer, alternating-gradient focusing and crossed-field drift',
    ],
    concepts: [
      {
        term: 'Local conservation',
        kind: 'definition',
        statement: 'A conservation law is **local** when the decrease of a quantity in any region equals the flux of that quantity out through the boundary: for charge, $\\nabla\\cdot\\boldsymbol{j} = -\\partial\\rho/\\partial t$. For field energy the analogous statement is $$\\frac{\\partial u}{\\partial t} = -\\nabla\\cdot\\boldsymbol{S},$$ where $u$ is the energy density and $\\boldsymbol{S}$ the energy flux.',
        detail: '"World-wide" conservation — charge $Q_1$ fading at point 1 while $Q_2$ grows at point 2, keeping only the sum constant — cannot survive relativity, because "simultaneous moments" at distant points depend on the frame. Nonlocal interactions get in trouble with the relativity principle in exactly the same way in modern quantum field theory. Energy conservation is also local: if a light source radiates, the energy lost inside a mathematical surface equals the energy crossing it.',
      },
      {
        term: 'Field energy density',
        kind: 'law',
        statement: 'The electromagnetic field stores energy at the density $$u = \\frac{\\epsilon_0}{2}\\,\\boldsymbol{E}\\cdot\\boldsymbol{E} + \\frac{\\epsilon_0 c^2}{2}\\,\\boldsymbol{B}\\cdot\\boldsymbol{B},$$ an electric part plus a magnetic part, each of the form met before in statics. The full energy equation is $-\\partial u/\\partial t = \\nabla\\cdot\\boldsymbol{S} + \\boldsymbol{E}\\cdot\\boldsymbol{j}$.',
        detail: 'The derivation is Poynting’s (1884): eliminate $\\boldsymbol{j}$ from $\\boldsymbol{E}\\cdot\\boldsymbol{j}$ using the Maxwell equation for $\\nabla\\times\\boldsymbol{B}$, and force the result into "one time derivative plus one divergence." The term $\\boldsymbol{E}\\cdot\\boldsymbol{j}$ is the rate at which the field does work on matter — the force $q(\\boldsymbol{E} + \\boldsymbol{v}\\times\\boldsymbol{B})$ delivers power $q\\boldsymbol{E}\\cdot\\boldsymbol{v}$, since the magnetic part never works. Feynman’s tool for the vector juggling is the subscripted-derivative trick: write $\\nabla_{\\boldsymbol{B}}\\cdot(\\boldsymbol{B}\\times\\boldsymbol{E})$ so the operator announces what it acts on, juggle freely, then restore the ordinary convention.',
      },
      {
        term: 'The Poynting vector',
        kind: 'law',
        statement: 'The energy flux of the electromagnetic field is the **Poynting vector** $$\\boldsymbol{S} = \\epsilon_0 c^2\\,\\boldsymbol{E}\\times\\boldsymbol{B},$$ giving the energy crossing a unit area per second: the flow through $da$ is $\\boldsymbol{S}\\cdot\\boldsymbol{n}\\,da$.',
        detail: 'For a light wave, $cB = E$ with $\\boldsymbol{E}\\perp\\boldsymbol{B}$, so $|\\boldsymbol{E}\\times\\boldsymbol{B}| = E^2/c$ and $S = \\epsilon_0 cE^2$. Averaging $E = E_0\\cos\\omega(t - x/c)$ gives the intensity $\\langle S\\rangle = \\epsilon_0 c\\langle E^2\\rangle$ — the result of Chapter 8’s optics — and the average energy density $\\langle u\\rangle = \\epsilon_0\\langle E^2\\rangle$, so $\\langle S\\rangle = c\\langle u\\rangle$ exactly as it must be for energy marching at speed $c$.',
      },
      {
        term: 'Is the energy really there?',
        kind: 'insight',
        statement: 'Poynting’s $u$ and $\\boldsymbol{S}$ are not unique: one can add terms involving field derivatives and still satisfy the conservation equation, and "so far no one has thought of an experimental way to tell which one is right." The simplest form is adopted because nobody has ever found anything wrong with it.',
        detail: 'The gravity argument for caring: all energy is a source of gravitational attraction, so the energy density of electricity must be located properly to know which way the gravity force acts. Light is observed to be deflected by the sun — "Do you not want to allow that the light pulls equally on the sun?" — but no experiment has located the gravitational influence of an electromagnetic field precisely enough to settle the question. Everyone, Feynman included, takes the easy way out and accepts the simple expressions.',
      },
      {
        term: 'Energy flow in static situations',
        kind: 'insight',
        statement: 'Applied to steady or quasi-static configurations, the Poynting vector gives paradoxical but correct pictures: a charging capacitor receives its energy **through the edges of the gap**, not down the wires; a resistor is heated by energy flowing **inward** from the field outside it; and a point charge beside a magnet carries a permanent closed circulation of energy.',
        detail: 'For the capacitor: the changing $E$ makes a circling $B = (a/2c^2)\\dot{E}$ at radius $a$, so $\\boldsymbol{S}$ points radially inward at the rim. For the resistor: the external $E$ along the wire and the circling $B$ give a radially inward $\\boldsymbol{S}$ equal to the Joule heating — "the electrons are really being pushed by an electric field which has come from some charges very far away." For the static charge and magnet, $\\boldsymbol{E}\\times\\boldsymbol{B}\\neq0$ circulates in closed loops and nothing changes anywhere — less queer once you remember that a "static" magnet is really permanent circulating currents.',
      },
      {
        term: 'Field momentum',
        kind: 'law',
        statement: 'Whenever energy flows, it carries momentum: the momentum density of the electromagnetic field is $$\\boldsymbol{g} = \\frac{\\boldsymbol{S}}{c^2}.$$ For light, the momentum is $1/c$ times the energy: a flash of energy $U$ carries $p = U/c$.',
        detail: 'Einstein’s railroad-car proof: an energy $U$ emitted at one end and absorbed at the other displaces the car, since the energy has mass $U/c^2$; the center of gravity cannot move by internal tricks, so $Mx = (U/c^2)L$, and with the transit time $L/c$ this forces $p = U/c$. (Refuse the theorem and you lose conservation of angular momentum too — the boxcar shot from top to bottom must not change its angular momentum about a point on the track.) The circulating energy around a charge-and-magnet means circulating momentum, i.e. angular momentum — which is exactly what answers the solenoid-and-disc paradox of Chapter 12: the disc starts turning when the current is turned off because the angular momentum was stored in the field all along.',
      },
      {
        term: 'Electromagnetic mass and the 4/3 problem',
        kind: 'insight',
        statement: 'The field of a charged sphere of radius $a$ holds energy $U_{\\text{elec}} = e^2/2a$, and when the sphere moves slowly its field carries momentum $p = (2e^2/3ac^2)v$. The coefficient of $v$ is an **electromagnetic mass** $m_{\\text{elec}} = 2e^2/3ac^2$ — but this exceeds the mass $U_{\\text{elec}}/c^2 = e^2/2ac^2$ implied by relativity: $$U_{\\text{elec}} = \\tfrac{3}{4}\\,m_{\\text{elec}}c^2.$$',
        detail: 'This "4/3 problem" wrecked the dream that all mass might be electromagnetic. The missing bookkeeping is in the Poincaré stresses — the "rubber bands" of nonelectrical force that must hold the repelling charge together; including them in the energy and momentum restores consistency, but then the mass is no longer purely electromagnetic and "the beauty of the whole idea begins to disappear." The self-force on an accelerating electron is a series, $F = \\alpha(e^2/ac^2)\\ddot{x} - (2e^2/3c^3)\\dddot{x} + \\cdots$: the $\\ddot{x}$ term is the electromagnetic mass (diverges as $a \\rightarrow 0$), while the $\\dddot{x}$ term is the radiation resistance, which must be kept or energy conservation fails in radiating systems. Dirac’s half-retarded-minus-half-advanced recipe, the Wheeler–Feynman absorber theory, Born–Infeld nonlinear electrodynamics and Bopp’s nonlocal theory all tried to save the classical electron; every one fails to quantize consistently, and quantum electrodynamics inherits the same infinity. Experimentally electromagnetic mass is real: the neutron outweighs the proton by $1.3$ MeV, charged pions outweigh the neutral one by $4.6$ MeV, and the muon — an electron in every respect except its $206.77$-fold greater mass — remains unexplained.',
      },
      {
        term: 'Helical motion and the momentum spectrometer',
        kind: 'law',
        statement: 'In a uniform magnetic field the magnetic force $qvB$ supplies the centripetal term $vp/R$, giving the orbit radius $$R = \\frac{p}{qB}$$ — valid relativistically because it uses the momentum. Motion along the field is unaffected, so the general trajectory is a cylindrical **helix** of radius $R = p_\\perp/qB$.',
        detail: 'This is the workhorse of high-energy physics. In the "180-degree spectrometer," particles enter a uniform field and exit at $x = 2R$ from their entry point, so a counter at $C$ selects $p = qBx/2$; better still, particles of one momentum entering at different angles reconverge near $C$ — a focus that buys counting rate. An axial-field design accepts a large solid angle: helices of the same momentum but different starting angles refocus on the axis ($\\rho = a\\sin kz$, $\\theta = bz$). A uniform field over a large volume can be made by winding a coil on a sphere or ellipsoid with the current in each axial interval $\\Delta x$ kept equal.',
      },
      {
        term: 'Lenses, microscopes and accelerator guide fields',
        kind: 'method',
        statement: 'Electric and magnetic fields focus particle beams exactly as glass focuses light. An **electrostatic lens** works because electrons gain energy entering the field and so spend less time in the exit region — the impulses do not cancel; a **magnetic lens** uses sharp pole tips whose fringing field first rotates and then redirects the electrons toward the axis.',
        detail: 'The electron microscope should see everything: 50-kilovolt electrons have a wavelength of about $0.05$ angstrom, so with a half-reasonable aperture one could resolve $1/5$ of an angstrom and photograph molecules — "Biology would be easy; we would have a photograph of the DNA structure." The barrier is spherical aberration, provably irreducible for any static axially symmetric electron lens, which limits resolution to about $20$ angstroms. In synchrotrons, a guide field with relative gradient $n = (dB/B)/(dr/r)$ gives radial focusing for $n > -1$ and vertical focusing for $n < 0$ (weak focusing, $-1 < n < 0$; betatrons use $n = -0.6$). Strong focusing alternates gradient signs: a pair of quadrupole lenses focuses in both planes, because the particle is deflected less where the defocusing lens is weak and more where the focusing lens is strong — the same mathematics as the vibrating-pivot pendulum that stands stably upside down. In crossed fields $\\boldsymbol{E}\\perp\\boldsymbol{B}$, the motion is a circle drifting at $\\boldsymbol{v}_d = \\boldsymbol{E}\\times\\boldsymbol{B}/B^2$ with speed $E/B$ — the magnetron principle.',
      },
    ],
    examples: [
      {
        title: 'Where a charging capacitor gets its energy',
        problem: 'A circular parallel-plate capacitor of plate radius $a$ and gap $h$ is charged slowly. Show, by explicit bookkeeping, that the energy enters through the edges of the gap rather than down the wires.',
        steps: [
          { label: 'Step 1: Rate of energy storage', text: 'The stored energy is $U = (\\epsilon_0/2)E^2(\\pi a^2 h)$, so while $E$ grows, $dU/dt = \\epsilon_0 \\pi a^2 h\\, E\\dot{E}$.' },
          { label: 'Step 2: The magnetic field at the rim', text: 'The changing flux makes $B$ circle the axis; the last Maxwell equation gives $2\\pi a c^2 B = \\dot{E}\\,\\pi a^2$, i.e. $B = (a/2c^2)\\dot{E}$ at radius $a$.' },
          { label: 'Step 3: The Poynting flux at the rim', text: 'There $\\boldsymbol{S} = \\epsilon_0 c^2\\boldsymbol{E}\\times\\boldsymbol{B}$ points straight inward with magnitude $\\epsilon_0 c^2 E(a/2c^2)\\dot{E} = \\epsilon_0 aE\\dot{E}/2$.' },
          { label: 'Step 4: Total the influx', text: 'The cylindrical boundary has area $2\\pi ah$, so the total influx is $(\\epsilon_0 aE\\dot{E}/2)(2\\pi ah) = \\pi a^2 h\\,\\epsilon_0 E\\dot{E}$ — exactly the $dU/dt$ from Step 1.' },
          { label: 'Step 5: Why this is not crazy', text: 'Imagine the charging charges brought from far away: their weak, spread-out field strengthens and concentrates near the plates as they approach, so field energy that was "way out" moves toward the capacitor and ends up between the plates.' },
        ],
        result: 'The books balance perfectly for energy entering sideways through the gap’s edges: "the energy is not coming down the wires; it is coming in through the edges of the gap. That’s what this theory says!"',
      },
      {
        title: 'The classical electron radius and the 4/3 problem',
        problem: 'Model the electron as a sphere of radius $a$ carrying its charge on the surface. What radius would it need for its mass to be entirely electromagnetic, and why does the idea collapse?',
        steps: [
          { label: 'Step 1: Field energy', text: 'Integrating $u = \\epsilon_0 E^2/2$ from $a$ to infinity gives $U_{\\text{elec}} = e^2/2a$ — finite for finite $a$, infinite for a point charge.' },
          { label: 'Step 2: Field momentum of the moving sphere', text: 'With $\\boldsymbol{B} = \\boldsymbol{v}\\times\\boldsymbol{E}/c^2$ and $\\boldsymbol{g} = \\epsilon_0\\boldsymbol{E}\\times\\boldsymbol{B}$, integrating over space gives $p = (2e^2/3ac^2)v$ — the field itself is a carrier of inertia.' },
          { label: 'Step 3: The two masses disagree', text: 'From momentum, $m_{\\text{elec}} = 2e^2/3ac^2$; from relativity, $U_{\\text{elec}}/c^2 = e^2/2ac^2$. Combining, $U_{\\text{elec}} = (3/4)m_{\\text{elec}}c^2$ — the notorious 4/3 problem, discovered before relativity and deepened by it.' },
          { label: 'Step 4: Put in numbers', text: 'Setting $m_{\\text{elec}} = m_e$ gives $a = (2/3)\\,r_0$ with the classical electron radius $r_0 = e^2/m_ec^2 = 2.82\\times10^{-13}$ cm, so $a \\approx 1.9\\times10^{-13}$ cm — about one hundred-thousandth of an atomic diameter. (The factor $2/3$ itself is model-dependent: a uniformly charged sphere gives $4/5$, which is why the "nominal" $r_0$ is quoted instead.)' },
          { label: 'Step 5: The escape and the cost', text: 'Poincaré saw the way out: the nonelectrical stresses that must hold the charge together also carry energy and momentum, and only the sum of electromagnetic plus Poincaré contributions is relativistically consistent. Purely electromagnetic mass is impossible — other forces must exist in nature.' },
        ],
        result: 'A purely electromagnetic electron would have $a \\approx 1.9\\times10^{-13}$ cm, but the 4/3 discrepancy forces in nonelectrical stresses, ending the classical dream of explaining mass.',
      },
      {
        title: 'Yukawa: the mass of the nuclear "photon" from the range of the force',
        problem: 'Nuclear forces die out within about $10^{-13}$ cm. Yukawa proposed that the nuclear field’s quanta obey $(\\Box^2 - \\mu^2)\\phi = 0$. What particle mass does this predict?',
        steps: [
          { label: 'Step 1: The static potential', text: 'For time-independent fields the equation is $\\nabla^2\\phi = \\mu^2\\phi$. Since $\\nabla^2\\phi = (1/r)\\,\\partial^2(r\\phi)/\\partial r^2$, the solution is $r\\phi = Ke^{\\pm\\mu r}$, and finiteness at infinity keeps $\\phi = K\\,e^{-\\mu r}/r$ — the Yukawa potential, falling faster than Coulomb beyond the range $1/\\mu$.' },
          { label: 'Step 2: Fix the range', text: 'Nuclear forces do not extend beyond about $10^{-13}$ cm $= 10^{-15}$ m, so $\\mu \\approx 10^{15}\\ \\text{m}^{-1}$.' },
          { label: 'Step 3: The free-quantum condition', text: 'Substituting $\\phi = \\phi_0 e^{i(\\omega t - kz)}$ gives $\\omega^2/c^2 - k^2 = \\mu^2$. With $E = \\hbar\\omega$ and $p = \\hbar k$ this is $E^2/c^2 - p^2 = \\mu^2\\hbar^2$, so the quantum has mass $m = \\mu\\hbar/c$.' },
          { label: 'Step 4: Evaluate', text: 'With $\\mu = 10^{15}$ m$^{-1}$, the mass comes out to $3\\times10^{-25}$ g, or about $170$ MeV.' },
          { label: 'Step 5: Compare with nature', text: 'The observed $\\pi$-meson mass is $139.6$ MeV — the field-theory analogy lands within about 20 percent, which is why the pion is regarded as the "photon" of the nuclear force field.' },
        ],
        result: 'Range $1/\\mu \\approx 10^{-13}$ cm implies a quantum mass $\\mu\\hbar/c \\approx 170$ MeV, against the observed pion at $139.6$ MeV — pushing electrodynamics’ ideas to (and past) their domain of validity.',
      },
    ],
    keyTakeaways: [
      'Relativity demands local conservation: every conserved quantity needs a density and a flux, with $\\partial(\\text{density})/\\partial t = -\\nabla\\cdot(\\text{flux})$.',
      'The field energy density is $u = \\epsilon_0E^2/2 + \\epsilon_0c^2B^2/2$ and the energy flux is the Poynting vector $\\boldsymbol{S} = \\epsilon_0c^2\\boldsymbol{E}\\times\\boldsymbol{B}$, with $\\boldsymbol{E}\\cdot\\boldsymbol{j}$ the rate of work on matter; for light, $\\langle S\\rangle = \\epsilon_0 c\\langle E^2\\rangle$ and $\\langle u\\rangle = \\epsilon_0\\langle E^2\\rangle$, so energy moves at exactly $c$.',
      'Static-field energy flows are real: a capacitor fills through its edges, a resistor is heated from outside, and a charge beside a magnet carries circulating energy and angular momentum.',
      'Energy flow carries momentum at density $\\boldsymbol{g} = \\boldsymbol{S}/c^2$; a light flash of energy $U$ has momentum $U/c$.',
      'The electromagnetic mass $m_{\\text{elec}} = 2e^2/3ac^2$ conflicts with $U/c^2$ by the famous factor 4/3; Poincaré stresses restore consistency but kill the all-electromagnetic electron.',
      'A charge in a uniform field follows a helix with $R = p/qB$ (relativistically exact), the basis of momentum spectrometers and accelerators.',
      'Electron optics is limited not by wavelength but by irreducible spherical aberration: 50-kV electrons have $\\lambda \\approx 0.05$ angstrom, yet resolution stops near $20$ angstroms.',
    ],
    quiz: [
      {
        q: 'In the Poynting picture, how does the energy that heats a current-carrying resistor actually arrive?',
        options: ['It flows down the wire with the electrons', 'It enters radially through the cylindrical surface from the field outside the wire', 'It is created uniformly inside the metal by collisions', 'It flows out of the battery through the wire’s surface charges only'],
        answer: 1,
        explanation: 'The external electric field along the wire and the circling magnetic field make $\\boldsymbol{S} = \\epsilon_0c^2\\boldsymbol{E}\\times\\boldsymbol{B}$ point radially inward, with total influx equal to the Joule heating. Intuition says the energy flows along the wire; the theory says it comes in from the sides.',
      },
      {
        q: 'A light flash of energy $U$ is emitted and absorbed at opposite ends of a frictionless railroad car of mass $M$ and length $L$. From Einstein’s argument, the momentum carried by the flash is:',
        options: [`$U/c^2$`, `$U/c$`, `$Uc$`, `$McU/L$`],
        answer: 1,
        explanation: 'The energy has mass $U/c^2$ and moves at $c$, so $p = U/c$. The car must recoil by $Mx = (U/c^2)L$ to keep its center of gravity fixed — and with a transit time $L/c$ this forces exactly this momentum.',
      },
      {
        q: 'The "4/3 problem" of the classical electron is the discrepancy that:',
        options: ['The field energy is three-quarters electromagnetic and one-quarter mechanical', 'The momentum-derived mass exceeds the energy-derived mass, so $U = (3/4)mc^2$ instead of $mc^2$', 'The electron’s charge is 4/3 of the proton’s', 'The field momentum is 4/3 of the field energy times $c$'],
        answer: 1,
        explanation: 'Integrating the field gives $m_{\\text{elec}} = 2e^2/3ac^2$, while $U/c^2$ gives only $e^2/2ac^2$ — three-quarters as much. The cure, Poincaré stresses, contributes the missing energy and momentum but makes the electron no longer a purely electromagnetic object.',
      },
      {
        q: 'In a 180-degree uniform-field spectrometer, particles enter perpendicular to the field edge and land a distance $x$ from the entry point. The selected momentum is:',
        options: [`$qBx$`, `$qBx/2$`, `$2qBx$`, `$qBx^2$`],
        answer: 1,
        explanation: 'The landing distance is the diameter of the semicircular orbit, $x = 2R$, and $R = p/qB$, so $p = qBx/2$. The design’s bonus is focusing: different entry angles converge near the same point.',
      },
      {
        q: 'A positive charge moves in crossed uniform fields, $\\boldsymbol{E}\\perp\\boldsymbol{B}$. Its trajectory is a circle that drifts sideways at the speed:',
        options: ['$E/B$, toward $\\boldsymbol{E}\\times\\boldsymbol{B}$, independent of charge and mass', '$E/B$, opposite to $\\boldsymbol{E}\\times\\boldsymbol{B}$, proportional to the charge', `$B/E$, along $\\boldsymbol{E}$`, 'It does not drift; it simply orbits in place'],
        answer: 0,
        explanation: 'A frame moving at $\\boldsymbol{v}_d = \\boldsymbol{E}\\times\\boldsymbol{B}/B^2$ sees zero electric field, hence a pure circle; in the lab this is a cycloid drifting at $E/B$. Neither $q$ nor $m$ appears — the operating principle of the magnetron.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.3
  {
    sectionId: 'young-ch42-s15',
    readingTime: 9,
    intro: 'Matter is not a featureless continuum: when atoms settle into low-energy arrangements they repeat them, and the resulting internal geometry of crystals — cleavage planes, exact interfacial angles, anisotropic strength — is the visible trace of an invisible lattice. Describing properties that depend on direction requires a new mathematical object beyond vectors: the tensor. Feynman builds it from the polarizability of crystals, generalizes to inertia, stress and elasticity, and reconnects to the four-dimensional field tensor of Section 14.1.',
    objectives: [
      'Describe the repeating lattice structure of crystals and the evidence it leaves in external form',
      'Classify the chemical bonds that hold crystals together and their consequences for strength',
      'Prove that only one-, two-, three-, four- and sixfold rotational symmetries are possible',
      'Define the polarizability tensor and diagonalize it through the energy ellipsoid',
      'State the tensor of inertia, the stress tensor, and the rank counting for elasticity and piezoelectricity',
    ],
    concepts: [
      {
        term: 'The internal geometry of crystals',
        kind: 'definition',
        statement: 'A crystal is a three-dimensional **repeating pattern**: from any atom, two (or three) primitive vectors reach the nearest equivalent atoms, and every repetition of those steps lands in an identical environment. The pattern is found experimentally by x-ray diffraction.',
        detail: 'The two-dimensional analogy is wallpaper: one repeated design element, and a lattice of translations that maps it onto itself. The internal order shows up outside: binding is stronger along some directions, giving **cleavage planes** along which a knife splits the crystal; growth rates differ by direction, giving geometric habits. A quartz crystal makes a poor hexagon — the face sizes are accidents of growth — but the angles between faces are exactly $120^\\circ$ in every specimen; salt grains are never perfect cubes but their faces meet at exactly right angles; mica is tough in-plane and splits across; asbestos fibers pull apart in two directions but not the third.',
      },
      {
        term: 'Chemical bonds in crystals',
        kind: 'insight',
        statement: 'The mechanical personality of a crystal follows its bonding: **ionic** crystals (NaCl) are three-dimensional checkerboards of positive and negative ions; **covalent** crystals (diamond) share electrons toward each neighbor and are extremely hard; **molecular** crystals (sugar, paraffin) have strong molecules with weak attractions between them; **metals** are positive ions glued by a universal sea of shared electrons.',
        detail: 'Nature grades continuously between covalent and ionic — quartz’s Si–O bond is only partly covalent, leaving the atoms partly charged. Molecular crystals break easily because only the weak intermolecular bonds are sacrificed. Solid argon is the limiting case: saturated atoms with almost no attraction, packed like spheres at low temperature. Metals have no special directional bonds, so their atoms tend toward close-packed sphere arrangements — though which packing wins depends on subtle energy differences, so copper and silver choose face-centered cubic while beryllium and magnesium choose hexagonal.',
      },
      {
        term: 'Dislocations and the strength of metals',
        kind: 'insight',
        statement: 'A real metal is far softer than a perfect crystal would be, because slip proceeds **one atom at a time**: a dislocation — the "missing" half-row of atoms — travels across the slip plane, and only one bond climbs the energy hill at any moment. Strength comes from pinning these dislocations.',
        detail: 'Stretch a large-grained tin wire next to your ear and you hear a rush of ticks as planes snap into new positions. Pure iron crystals are soft; steel is iron with a little dissolved carbon, quenched so the carbon precipitates in grains that pin the dislocations. Pure copper work-hardens when bent — new dislocations tangle and jam each other — and can be annealed soft again by heat that "irons out" the dislocations. Dislocations also solve the puzzle of crystal growth: an atom landing on a finished face makes too few bonds, but the step that terminates at a screw dislocation always offers three-sided sites, so crystals prefer to grow in spirals around one.',
      },
      {
        term: 'Close packing and the cubic lattices',
        kind: 'method',
        statement: 'Stacking spheres as densely as possible layer by layer leaves two choices for every third layer: repeat over the first layer (hexagonal close packing) or nest in the alternate holes (which is the **face-centered cubic** lattice — a cube viewed corner-on has a hexagonal outline). The **body-centered cubic** lattice is the other common metal structure.',
        detail: 'Iron is body-centered cubic at low temperatures but face-centered cubic above about $1100^\\circ$C — above its Curie point — with quite different properties in the two forms; which lattice appears is not decided by sphere-packing alone but by the residual directionality of the interatomic forces (and, in metals, by the energy of the electron pool). The seven crystal classes built from the primitive vectors run from triclinic (a skewed box with no symmetry) through monoclinic, orthorhombic, tetragonal, trigonal and hexagonal to cubic.',
      },
      {
        term: 'Which rotational symmetries are possible',
        kind: 'theorem',
        statement: 'A lattice can be invariant under rotations of one full, one half, one third, one fourth, or one sixth of a turn — **fivefold symmetry is impossible**, and so is anything above sixfold. Combined with reflections, glides and inversions, this yields 17 distinct plane patterns and 230 space groups, grouped into the seven crystal classes.',
        detail: 'The proofs are two-line geometry: for more than sixfold symmetry the primitive-vector angle would be under $60^\\circ$, and the distance between the two neighbors would be shorter than the supposed primitive vectors — contradiction. For fivefold symmetry at $72^\\circ$, a lattice point exists that makes a still-shorter step. Inversion (mapping every $\\boldsymbol{R}$ to $-\\boldsymbol{R}$) is distinct in three dimensions from any rotation — a pattern of little arrows can reveal it. Feynman notes wryly that only three or four of the 17 possible wallpaper patterns are ever used — "is this a lack of imagination of designers, or are many of the possible patterns not pleasing to the eye?"',
      },
      {
        term: 'The tensor of polarizability',
        kind: 'definition',
        statement: 'In an anisotropic crystal the induced polarization is linear in the field but generally **not parallel** to it: $P_i = \\sum_j \\alpha_{ij}E_j$. The nine coefficients $\\alpha_{ij}$ form the **polarizability tensor**, and they are symmetric: $\\alpha_{xy} = \\alpha_{yx}$.',
        detail: 'Charges may move easily up-and-down but stiffly sideways, so a field at $45^\\circ$ produces a tilted polarization — the mechanism behind the double images of calcite. The symmetry of $\\alpha_{ij}$ is physical, not mathematical: run the cycle (turn on $E_x$, turn on $E_y$, turn off $E_x$, turn off $E_y$) and the net work must vanish, which forces the cross coefficients equal. The same mathematics describes conductivity ($j_i = \\sum\\sigma_{ij}E_j$) in crystals. A tensor of first rank is a vector; a scalar is a tensor of rank zero; and the electromagnetic field tensor $F_{\\mu\\nu}$ of Section 14.1 is a second-rank tensor in four dimensions.',
      },
      {
        term: 'The energy ellipsoid',
        kind: 'method',
        statement: 'The work done in polarizing a unit volume is $u_P = \\tfrac{1}{2}\\boldsymbol{E}\\cdot\\boldsymbol{P} = \\tfrac{1}{2}\\sum_{ij}\\alpha_{ij}E_iE_j$. The locus of fields giving a fixed energy, $\\alpha_{xx}E_x^2 + 2\\alpha_{xy}E_xE_y + \\alpha_{yy}E_y^2 = 2u_0$, is an **ellipse** — in three dimensions an ellipsoid whose principal axes diagonalize the tensor.',
        detail: 'In principal axes the tensor has only $\\alpha_{aa}, \\alpha_{bb}, \\alpha_{cc}$: a field along any principal axis polarizes along that same axis. If the three are equal the ellipsoid is a sphere, $\\alpha_{ij} = \\alpha\\delta_{ij}$ (the Kronecker delta is the unit tensor, the same in every rectangular frame), and the material is isotropic. Symmetry constrains the ellipsoid to share the crystal’s symmetry: cubic means sphere; tetragonal means two equal axes aligned with the crystal axis; orthorhombic pins all three axes to the crystal axes; monoclinic leaves only one pinned; triclinic allows anything. In each case the tensor can be measured entirely from polarization energies in various directions.',
      },
      {
        term: 'The tensor of inertia — and what a cross product really is',
        kind: 'insight',
        statement: 'For a rigid body, $\\boldsymbol{L} = I\\omega$ fails in direction: $L_i = \\sum_j I_{ij}\\omega_j$ with the symmetric **inertia tensor** $I_{ij} = \\sum m(r^2\\delta_{ij} - r_ir_j)$. The cross product of two vectors is likewise an antisymmetric second-rank tensor, $\\tau_{ij} = r_iF_j - r_jF_i$, which masquerades as a vector only by the luck of three dimensions.',
        detail: 'A rectangular block has different moments about its three axes, so unless it spins about a principal axis, $\\boldsymbol{L}$ is not parallel to $\\omega$. The tensor follows from writing the kinetic energy $\\sum\\tfrac{1}{2}mv^2$ with $\\boldsymbol{v} = \\boldsymbol{\\omega}\\times\\boldsymbol{r}$ and comparing with $\\text{KE} = \\tfrac{1}{2}\\sum I_{ij}\\omega_i\\omega_j$ — the diagonal terms are the familiar $I_{xx} = \\sum m(y^2 + z^2)$. Every axisymmetric-surface element ("what is the normal to $dx\\,dy$ — is it along $z$ or $t$?") becomes honest tensor bookkeeping in four dimensions, where six independent components cannot fold into four vector components.',
      },
      {
        term: 'The stress tensor and its relatives',
        kind: 'law',
        statement: 'Internal forces in a deformed body are described by the symmetric **stress tensor**: $S_{ij}$ is the $i$-component of the force per unit area across a surface normal to $j$, and the traction on any inclined surface follows from $S_{in} = \\sum_j S_{ij}n_j$. A hydrostatic pressure is the isotropic special case $S_{ij} = p\\,\\delta_{ij}$.',
        detail: 'The wedge (or little-cube) arguments show $S_{ij}$ is a tensor and, since an infinitesimal cube must not spin, that $S_{ij} = S_{ji}$; the tensor generally varies from point to point, making stress a tensor field — nine (really six) functions of position. Ranks climb from there: elasticity relates strain to stress through the fourth-rank $\\gamma_{ijkl}$ — nominally $3^4 = 81$ coefficients, reduced to 21 for the least symmetric crystal, 3 for cubic, and 2 (which can be built from $\\delta_{ij}\\delta_{kl}$ and $\\delta_{ik}\\delta_{jl} + \\delta_{il}\\delta_{jk}$) for isotropic solids. Piezoelectricity is third rank, $E_i = \\sum_{jk}P_{ijk}S_{jk}$ — and vanishes identically in any crystal with a center of inversion. Finally, in four dimensions the stress tensor becomes the stress-energy $S_{\\mu\\nu}$: $S_{tt}$ is the energy density, $S_{tx}$ is the Poynting vector, and by symmetry $S_{xt} = S_{tx}$ is the momentum density — Section 14.2’s $\\boldsymbol{g} = \\boldsymbol{S}/c^2$ reappearing as tensor symmetry.',
      },
    ],
    examples: [
      {
        title: 'Why fivefold symmetry is impossible',
        problem: 'Prove that no lattice can have fivefold rotational symmetry (and that nothing above sixfold works either).',
        steps: [
          { label: 'Step 1: Set up fivefold', text: 'Suppose the primitive vectors $\\boldsymbol{a}$ and $\\boldsymbol{b}$ have equal lengths and meet at $2\\pi/5 = 72^\\circ$. Points $B$ (a step $\\boldsymbol{a}$ away) and $C$ (a step $\\boldsymbol{b}$ away) are equivalent to the origin $A$.' },
          { label: 'Step 2: Find the shorter step', text: 'By the assumed fivefold symmetry there must also be an equivalent point $D$ rotated $72^\\circ$ from $C$. But the vector from $E$ (on the way to $D$) to $D$ is then strictly shorter than $\\boldsymbol{b}$, contradicting that $\\boldsymbol{b}$ was primitive — a lattice point closer than the "shortest" step exists.' },
          { label: 'Step 3: Forbid more than sixfold', text: 'If the primitive vectors met at less than $60^\\circ$, the gap between the tips of $\\boldsymbol{a}$ and $\\boldsymbol{b}$ would again be shorter than either — so the angle between primitive vectors must be $60^\\circ$ or larger, ruling out eightfold and all higher symmetries.' },
          { label: 'Step 4: Count the survivors', text: 'The only angles that survive are $180^\\circ$, $120^\\circ$, $90^\\circ$ and $60^\\circ$ — rotations by one half, one third, one fourth and one sixth of a turn (plus the trivial full turn). Added to reflections, glides and inversions, these generate the 17 wallpaper groups and the 230 space groups.' },
        ],
        result: 'Only $n = 1, 2, 3, 4, 6$ rotational symmetries are consistent with a lattice — quasicrystalline fivefold patterns necessarily lack true lattice periodicity.',
      },
      {
        title: 'Transforming the components of a tensor',
        problem: 'Two vectors $\\boldsymbol{a}$ and $\\boldsymbol{b}$ define nine products $T_{ij} = a_ib_j$. Show by direct calculation that $T_{ij}$ transforms as a tensor under a rotation of axes about $z$ by angle $\\theta$.',
        steps: [
          { label: 'Step 1: Transform the vectors', text: 'Under the rotation, $a_x\' = a_x\\cos\\theta + a_y\\sin\\theta$ and $b_y\' = b_y\\cos\\theta - b_x\\sin\\theta$, with $a_z\' = a_z$, $b_z\' = b_z$.' },
          { label: 'Step 2: Multiply out', text: '$a_x\'b_y\' = a_xb_y\\cos^2\\theta - a_xb_x\\cos\\theta\\sin\\theta + a_yb_y\\sin\\theta\\cos\\theta - a_yb_x\\sin^2\\theta$.' },
          { label: 'Step 3: Read off the tensor rule', text: 'In terms of $T_{ij}$ this is $T_{xy}\' = T_{xy}\\cos^2\\theta - T_{xx}\\cos\\theta\\sin\\theta + T_{yy}\\sin\\theta\\cos\\theta - T_{yx}\\sin^2\\theta$ — each new component is a linear combination of all the old ones, the defining behavior of a second-rank tensor.' },
          { label: 'Step 4: Note the payoff', text: 'Because rotations mix only two components at a time, symmetric tensors ($T_{xy} = T_{yx}$) can always be diagonalized — the algebraic fact behind the principal axes of the polarizability and inertia tensors.' },
        ],
        result: 'Every component of $T_{ij}$\' mixes linearly with the others — nine products transform together as one tensor object, not as three independent vectors.',
      },
      {
        title: 'A field at 45 degrees in an anisotropic crystal',
        problem: 'A crystal has principal polarizabilities $\\alpha_{xx}$ and $\\alpha_{yy}$ along its (well-chosen) axes, with off-diagonal terms zero. A field of magnitude $E_0$ is applied at $45^\\circ$ to both axes. Where does the polarization point, and what energy does it store? (Illustrative numbers: take $\\alpha_{xx} = 2\\alpha_{yy}$ — Feynman’s geometry, his Figure 31-1.)',
        steps: [
          { label: 'Step 1: Resolve the field', text: 'Along the crystal axes, $E_x = E_y = E_0/\\sqrt{2}$.' },
          { label: 'Step 2: Polarize each axis separately', text: '$P_x = \\alpha_{xx}E_0/\\sqrt{2} = 2\\alpha_{yy}E_0/\\sqrt{2}$ and $P_y = \\alpha_{yy}E_0/\\sqrt{2}$. The polarization is not parallel to the field.' },
          { label: 'Step 3: Find its direction', text: 'With $\\alpha_{xx} = 2\\alpha_{yy}$, $\\tan\\theta_P = P_y/P_x = \\alpha_{yy}/\\alpha_{xx} = 1/2$, so $\\boldsymbol{P}$ lies only about $26.6^\\circ$ from the $x$-axis while $\\boldsymbol{E}$ sits at $45^\\circ$ — the polarization is pulled toward the "easy" axis.' },
          { label: 'Step 4: Compute the energy', text: '$u_P = \\tfrac{1}{2}(\\alpha_{xx}E_x^2 + \\alpha_{yy}E_y^2) = \\tfrac{1}{2}(\\alpha_{xx} + \\alpha_{yy})E_0^2/2 = (3/4)\\alpha_{yy}E_0^2$ for the assumed ratio.' },
          { label: 'Step 5: Picture it', text: 'Fields of equal stored energy lie on the ellipse $\\alpha_{xx}E_x^2 + \\alpha_{yy}E_y^2 = 2u_0$ — the long axis along the stiff direction, the short axis along the easy one. Measuring the polarization energy in many directions maps this ellipsoid, and with it the entire tensor.' },
        ],
        result: 'The polarization tilts toward the easy axis ($\\approx 26.6^\\circ$ vs the field’s $45^\\circ$ for the illustrative ratio), and the constant-energy locus is the ellipsoid that completely characterizes the tensor.',
      },
    ],
    keyTakeaways: [
      'A crystal is a repeating pattern of atoms; its internal geometry reveals itself in cleavage planes, exact interfacial angles (quartz $120^\\circ$, salt $90^\\circ$) and anisotropic strength.',
      'Bonding runs from ionic (NaCl checkerboard) through covalent (diamond, hardest) to molecular (weak intermolecular bonds) and metallic (electron-sea glue); metals are soft because dislocations let slip proceed one atom at a time — carbon pinning makes steel, tangling makes work hardening, and screw dislocations let crystals grow at always-available step sites.',
      'Only one-, two-, three-, four- and sixfold rotations are compatible with a lattice; with reflections and glides these generate 17 plane patterns and 230 space groups in 7 classes.',
      'The polarizability tensor $P_i = \\sum_j\\alpha_{ij}E_j$ describes direction-dependent response; it is symmetric ($\\alpha_{xy} = \\alpha_{yx}$) by a four-step energy-cycle argument.',
      'Any symmetric second-rank tensor is diagonalized by its principal axes, visualized as an ellipsoid; crystal symmetry forces the ellipsoid to match — cubic crystals are necessarily isotropic dielectrics.',
      'The inertia tensor $I_{ij} = \\sum m(r^2\\delta_{ij} - r_ir_j)$ and the stress tensor $S_{ij}$ (symmetric, $S_{ij} = p\\delta_{ij}$ when hydrostatic) are the mechanical siblings of $\\alpha_{ij}$.',
      'Ranks add up: elasticity needs the fourth rank (81 coefficients cut to 21, or 3 for cubic, 2 for isotropic), piezoelectricity the third (zero if the crystal has inversion symmetry), and the four-dimensional stress-energy $S_{\\mu\\nu}$ unifies energy density, Poynting flow and momentum density.',
    ],
    quiz: [
      {
        q: 'Which rotational symmetry is impossible for a crystal lattice?',
        options: ['Threefold', 'Fourfold', 'Fivefold', 'Sixfold'],
        answer: 2,
        explanation: 'Equal primitive vectors at $72^\\circ$ always imply a still-shorter step to an equivalent lattice point, contradicting the definition of primitive vectors. Only $n = 1, 2, 3, 4, 6$ survive.',
      },
      {
        q: 'The polarizability ellipsoid of a cubic crystal is necessarily:',
        options: ['A strongly flattened ellipsoid aligned with the cube edges', 'A sphere — cubic crystals are isotropic dielectrics', 'An ellipsoid with two equal axes, like the tetragonal case', 'Undefined, since cubic crystals have no polarizability'],
        answer: 1,
        explanation: 'A cube is invariant under $90^\\circ$ rotations about three orthogonal axes, and the only ellipsoid with that property is a sphere — so $\\alpha_{ij} = \\alpha\\delta_{ij}$ and the polarization always parallels the field.',
      },
      {
        q: 'Why must $\\alpha_{xy} = \\alpha_{yx}$ for a real crystal?',
        options: ['It follows from the definition of a tensor', 'It follows from the lattice translational symmetry', 'It follows from zero net work around the cycle: field on $x$, field on $y$, field off $x$, field off $y$', 'It is an experimental fact with no theoretical explanation'],
        answer: 2,
        explanation: 'Running the polarization around the closed four-step cycle must cost no net work; the cross terms in the work are proportional to $\\alpha_{xy} + \\alpha_{yx}$ from one side and to $\\alpha_{yx} + \\alpha_{xy}$ from the other, forcing equality.',
      },
      {
        q: 'In three dimensions, the cross product of two polar vectors is best described as:',
        options: ['A true vector of a new kind', 'An antisymmetric second-rank tensor that happens to transform like a vector only in three dimensions', 'A symmetric tensor with three independent components', 'A scalar density that changes sign under inversion'],
        answer: 1,
        explanation: 'Objects like $\\tau_{ij} = r_iF_j - r_jF_i$ have three independent components that transform like a vector’s components — by luck, valid only in three dimensions. In four dimensions there are six components, and the disguise fails.',
      },
      {
        q: 'A crystal of the lowest possible symmetry needs how many independent elastic constants?',
        options: ['2', '3', '21', '81'],
        answer: 2,
        explanation: 'The fourth-rank elasticity tensor $\\gamma_{ijkl}$ nominally has $3^4 = 81$ coefficients; symmetry of the strain (6 values), of the stress (6 values) and exchange of the stress-strain pairs cuts these to 21. Cubic crystals need only 3 and isotropic solids only 2.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.4
  {
    sectionId: 'hall-ch28-s33',
    readingTime: 12,
    intro: 'Every atom is a magnet, yet almost no substance shows it: the weak responses called diamagnetism and paramagnetism are a thousand to a million times feebler than iron’s, and classical physics — as Feynman demonstrates before demolishing it — predicts neither. The honest theory is quantum mechanical: quantized angular momentum, discrete spin states, resonant spin flips. From there the chapter builds the machinery of real magnetic matter — magnetization currents, the H field, hysteresis, domains and the exchange interaction that makes iron magnetic for reasons that are not magnetic at all.',
    objectives: [
      'Distinguish diamagnetism from paramagnetism and give the Lenz-law mechanism for the induced diamagnetic moment',
      'Relate magnetic moments to angular momentum through the Landé g-factor and compute Larmor precession frequencies',
      'Explain why classical statistical mechanics forbids both effects in thermal equilibrium',
      'Derive Curie’s law and interpret the Rabi molecular-beam method and nuclear magnetic resonance',
      'Use magnetization currents, the H field, hysteresis loops and domain theory to describe ferromagnetic materials in practice',
    ],
    concepts: [
      {
        term: 'Diamagnetism and paramagnetism',
        kind: 'definition',
        statement: 'Hung between the pointed and flat poles of a strong electromagnet, most materials feel almost nothing. Those weakly **repelled** from the high field (bismuth is the classic) are diamagnetic; those weakly **attracted** (aluminum) are paramagnetic. Ferromagnets are stronger by a factor of a thousand to a million.',
        detail: 'Atoms with no permanent magnetic moment respond by induction: switching on $B$ generates circulating currents inside each atom that, by Lenz’s law, oppose the change. Turning on the field along $z$ twists the orbits by $\\Delta J = (q_er^2/2)B$, and since an orbital moment is $-q_eJ/2m$, the induced moment is $$\\Delta\\mu_z = -\\frac{q_e^2\\langle r^2\\rangle}{6m}B,$$ opposite to the field — pure diamagnetism. Atoms with permanent moments add the paramagnetic tendency to align, which thermal motion opposes; paramagnetism strengthens on cooling while diamagnetism hardly notices the temperature.',
      },
      {
        term: 'Magnetic moment and angular momentum',
        kind: 'law',
        statement: 'For any circulating charge, $\\boldsymbol{\\mu} = (q/2m)\\boldsymbol{J}$ — the ratio is fixed by the orbit, independent of speed or radius. For electrons in atoms the general quantum relation is $\\boldsymbol{\\mu} = -g\\,(q_e/2m)\\,\\boldsymbol{J}$ with the **Landé g-factor**: $g = 1$ for pure orbital moment, $g = 2$ for pure electron spin.',
        detail: 'Classically the orbital relation survives quantum mechanics "miraculously," but the electron’s spin moment is twice the orbital value for reasons that "are purely quantum-mechanical — there is no classical explanation." Nuclei follow $\\boldsymbol{\\mu} = g(q_e/2m_p)\\boldsymbol{J}$ with $g$ near one: the proton has $g = 2\\times2.79$, and the neutral neutron still manages $2\\times(-1.91)$ — it is "like a little magnet," a rotating negative charge distribution, despite zero net charge.',
      },
      {
        term: 'Larmor precession',
        kind: 'law',
        statement: 'An atomic magnet is a gyroscope: the torque $\\boldsymbol{\\mu}\\times\\boldsymbol{B}$ does not align it but makes it precess at $$\\omega_p = g\\,\\frac{q_e}{2m}B.$$ Handy numbers: for atoms $f_p = (1.4\\ \\text{megacycles/gauss})\\times g\\times B$; for nuclei $f_p = (0.76\\ \\text{kilocycles/gauss})\\times g\\times B$.',
        detail: 'The rate follows from the geometry of the tipping cone: $dJ/dt = \\omega_pJ\\sin\\theta$ must equal the torque $\\mu B\\sin\\theta$. The companion **Larmor theorem** says the motion of electrons in a weak field equals the no-field motion plus a uniform rotation at $\\omega_L = q_eB/2m$; the proof balances the Coriolis force $-2m\\boldsymbol{\\omega}\\times\\boldsymbol{v}$ against the magnetic force by choosing $2m\\omega = qB$. The theorem is the classical skeleton on which the quantum theory is later hung — and it is only exact for $g = 1$.',
      },
      {
        term: 'Why classical physics fails completely',
        kind: 'insight',
        statement: 'Classical statistical mechanics predicts **no magnetism at all** for matter in thermal equilibrium: the probability of any state of motion is proportional to $e^{-U/kT}$ with $U$ the kinetic plus potential energy — and since magnetic forces do no work ($\\boldsymbol{F}\\cdot\\boldsymbol{v} = q\\boldsymbol{E}\\cdot\\boldsymbol{v}$ only), the energy is independent of $B$. The equilibrium distribution is unchanged by the field, so no net moment can appear.',
        detail: 'Feynman stages the sequence honestly: classical theorems that "prove" paramagnetism, diamagnetism, precessing orbits — "except for the last theorem, every one of them will be wrong." An isolated spinning system like a star could respond, but a clamped piece of matter at a fixed temperature cannot. All magnetic properties of matter are quantum-mechanical; the classical arguments that follow are "phoney but useful" — right enough in structure to organize the facts, illegal in foundation.',
      },
      {
        term: 'Quantized angular momentum and magnetic energy',
        kind: 'definition',
        statement: 'Quantum mechanics restricts the component of angular momentum along any axis to the $2j+1$ values $J_z = j\\hbar, (j-1)\\hbar, \\ldots, -j\\hbar$, where the spin $j$ is an integer or half-integer, and the magnitude is $J\\cdot J = j(j+1)\\hbar^2$. The magnetic energy is correspondingly discrete: $U_{\\text{mag}} = g\\mu_BB\\,(J_z/\\hbar)$ with the **Bohr magneton** $\\mu_B = q_e\\hbar/2m$.',
        detail: 'For $j = 3/2$ (lithium nuclei) there are four equally likely states; the identity $J\\cdot J = 3\\langle J_z^2\\rangle$ (all directions equivalent) plus the average of the ladder values gives $j(j+1)\\hbar^2$. Because the maximum $J_z = j\\hbar$ is always less than $\\sqrt{j(j+1)}\\,\\hbar$, the angular momentum is never quite "all along $z$." The Stern–Gerlach experiment of 1922 made the discreteness visible: silver atoms from an oven, deflected in a strongly inhomogeneous pole gap, landed in **two** distinct spots rather than a smear — the direct experimental fact that a beam of randomly oriented atoms splits into discrete beams.',
      },
      {
        term: 'Magnetic resonance: the Rabi method and NMR',
        kind: 'method',
        statement: 'An atom in a field $B$ has levels separated by $\\hbar\\omega_p$, so a weak transverse field oscillating at $\\omega_p$ flips the spin — a sharp resonance. Rabi’s molecular-beam apparatus: magnet 1 (strong gradient) selects and splits, magnet 2 (uniform $B$ plus the oscillating tickler) flips at resonance, magnet 3 (inverted gradient) refocuses only the unflipped atoms to the detector; the detector current dips exactly at $\\omega = \\omega_p$, measuring $g(q/2m)$ with fantastic precision.',
        detail: 'Nuclear magnetic resonance applies the same physics to protons in water: with $g = 5.58$, the resonance at $5000$ gauss falls at $21.2$ megacycles per second (wobbled by $\\pm1$ gauss through auxiliary coils for easy display). Only about one proton in $10^{8}$ excess sits in the lower state, so the net absorption is tiny; a pinch of iron oxide supplies the "thermal contact" that lets the protons relax back down so the signal persists. The same apparatus is now the most convenient **proton magnetometer**, and shifted resonances map molecular environments (chemical shifts); electron spin resonance detects free radicals. Inverting the statistics gives cooling: adiabatic demagnetization of a paramagnetic salt reaches a few thousandths of a degree, and a second nuclear stage reaches a millionth of a degree.',
      },
      {
        term: 'Curie’s law',
        kind: 'law',
        statement: 'For weak fields the paramagnetic magnetization is proportional to $B/T$. For spin $1/2$ the exact law saturates: $$M = N\\mu_0\\tanh\\frac{\\mu_0B}{kT}, \\qquad M \\approx \\frac{N\\mu_0^2}{kT}\\,B \\;\\;(\\mu_0B \\ll kT).$$ For arbitrary spin $j$ the low-field result is $M = Ng^2\\mu_B^2j(j+1)B/3kT$.',
        detail: 'The populations of the two spin states go as $e^{\\mp\\mu_0B/kT}$; the hyperbolic tangent is just their normalized difference. Saturation means all moments aligned ($M \\rightarrow N\\mu_0$), but the numbers are cruel: with one Bohr magneton in $10{,}000$ gauss at room temperature, $\\mu_0B/kT \\approx 0.002$, so ordinary experiments live entirely in the linear Curie regime. The quantum result differs from the naive classical $M = N\\mu^2B/3kT$ only through the replacement $J\\cdot J \\rightarrow j(j+1)\\hbar^2$ — for $j = 1/2$, $\\boldsymbol{\\mu}\\cdot\\boldsymbol{\\mu} = 3\\mu_0^2$, which repairs the missing factor of 3.',
      },
      {
        term: 'Magnetization currents and the H field',
        kind: 'law',
        statement: 'The atomic current loops of magnetized matter are equivalent, on average, to a **magnetization current** $\\boldsymbol{j}_{\\text{mag}} = \\nabla\\times\\boldsymbol{M}$ — for uniform $M$ in a rod, an uncancelled surface current like a solenoid’s. Defining $$\\boldsymbol{H} = \\boldsymbol{B} - \\frac{\\boldsymbol{M}}{\\epsilon_0c^2},$$ Maxwell’s equation becomes $\\epsilon_0c^2\\nabla\\times\\boldsymbol{H} = \\boldsymbol{j}_{\\text{cond}} + \\partial\\boldsymbol{D}/\\partial t$: only conduction currents remain on the right.',
        detail: 'The block-by-block proof: a uniformly magnetized block $abc$ is a surface current $I = M_zb$ per unit height; between two blocks of slightly different magnetization the uncancelled difference is $\\Delta M_z b$, i.e. a volume current $j_y = -\\partial M_z/\\partial x$ — one term of the curl. For a torus wound with $N$ turns, integrating around the loop gives $Hl = NI/\\epsilon_0c^2$, so $H$ is fixed by the winding current alone — which is why it is called the magnetizing field. Beware the unit jungle: Feynman’s $H$ has the units of $B$ (gauss), while most engineering books use $H\' = \\epsilon_0c^2B - M$ in amperes per meter ($H$ in gauss $= 0.0126\\,H\'$ in amp/meter), and persist in calling the same unit of $H$ an oersted.',
      },
      {
        term: 'Ferromagnetism: exchange, domains and the Curie temperature',
        kind: 'insight',
        statement: 'Iron’s magnetization is locked in by an effective interaction about **ten thousand times stronger** than the direct magnetic force between atoms — the quantum "exchange" tendency rooted in the Pauli exclusion principle. Above the **Curie temperature** $T_c$ the alignment melts; below it the material magnetizes spontaneously, splitting into **domains** whose walls cost energy while their arrangement minimizes the external field.',
        detail: 'The local-field theory tries $B_a = H + \\lambda M/\\epsilon_0c^2$; with the spherical cavity value $\\lambda = 1/3$ it predicts for nickel $T_c = 0.24$ K against the observed $631$ K — a failure by a factor of about $2600$, forcing $\\lambda \\approx 900$. So ferromagnetism is not magnetism at all: the exclusion principle makes neighboring spins prefer parallel (via the conduction electrons’ mediation), a "force" that no classical field supplies. Domains form because external field energy scales with volume while wall energy scales with area (plus magnetostriction stresses): crystals smaller than about a hundredth of a millimeter stay single-domain. Magnetization proceeds by reversible wall motion, then irreversible jerky snaps — the Barkhausen clicks heard through a coil and loudspeaker, like sand settling in a can — then by smooth rotation against the anisotropy: iron’s easy axis is $[100]$, nickel’s $[111]$ (the $[110]$ curve extrapolates to $1/\\sqrt{2}$ of saturation, the $[111]$ to $1/\\sqrt{3}$). Materials are engineered to extremes: Alnico V (51% Fe, 8% Al, 14% Ni, 24% Co, 3% Cu) has a loop some 700 times wider than soft iron’s, with $B_r = 13{,}000$ gauss and $H_c = 550$ gauss, while supermalloy’s coercive force is $0.004$ gauss and its permeability approaches a million; the permalloys near 70–80% nickel sit where iron’s and nickel’s opposite anisotropies and magnetostrictions cancel. The saturation magnetization of iron comes out about $20{,}000$ gauss from $M_{\\text{sat}} = N\\mu$ against $21{,}500$ observed — the few-percent orbital contribution, also visible in the Einstein–de Haas gyromagnetic experiment, where flipping a bar’s magnetization makes the bar spin with $N\\hbar$ of angular momentum. Chromium is **antiferromagnetic** (alternating spins, no external effect, verified by neutron scattering), and ferrites combine antiferromagnetic sublattices of unequal moments into useful magnetic insulators.',
      },
    ],
    examples: [
      {
        title: 'Tuning in a proton: the NMR resonance',
        problem: 'A water sample sits in a large electromagnet whose field is wobbled around $5000$ gauss. At what oscillator frequency do the proton spins resonate?',
        steps: [
          { label: 'Step 1: Use the nuclear precession constant', text: 'For nuclei the precession frequency is $f_p = (0.76\\ \\text{kilocycles/gauss}) \\times g \\times B$.' },
          { label: 'Step 2: Insert the proton g-factor', text: 'The proton’s magnetic moment is anomalously large: $g = 5.58$. So $f_p = 0.76 \\times 5.58 = 4.24$ kilocycles per gauss.' },
          { label: 'Step 3: Multiply by the field', text: 'At $B = 5000$ gauss: $f_p = 4.24 \\times 5000 = 21{,}200$ kilocycles/s $\\approx 21.2$ megacycles per second.' },
          { label: 'Step 4: What is seen', text: 'As the wobbling field sweeps through resonance, the oscilloscope shows the power absorbed by spin flips — in practice a wiggly beat pattern, because the synchronized precessing protons drift slightly above and below the oscillator frequency. In pure water the signal is almost invisible until a little iron oxide is added to couple the protons thermally to the atomic motion.' },
        ],
        result: 'Protons resonate at about $21.2$ Mc/s in $5000$ gauss — now the standard way to measure magnetic fields (the proton magnetometer) and to read molecular structure (chemical shifts).',
      },
      {
        title: 'How big is $\\mu_0B/kT$? Curie’s law in the lab',
        problem: 'Estimate the alignment parameter for one Bohr magneton in a strong laboratory field ($10{,}000$ gauss $= 1$ weber/m$^2$) at room temperature, and check the linear regime of the magnetization curve.',
        steps: [
          { label: 'Step 1: Assemble the constants', text: 'The Bohr magneton is $\\mu_0 = q_e\\hbar/2m = 0.928\\times10^{-23}$ amp$\\cdot$m$^2$; Boltzmann’s energy at $300$ K is $kT = 1.38\\times10^{-23}\\times300 = 4.14\\times10^{-21}$ joule.' },
          { label: 'Step 2: Form the ratio', text: '$\\mu_0B/kT = (0.928\\times10^{-23}\\times1)/(4.14\\times10^{-21}) = 2.2\\times10^{-3} \\approx 0.002$.' },
          { label: 'Step 3: Linearize', text: 'Since $x \\approx 0.002 \\ll 1$, $\\tanh x \\approx x$ and $M = N\\mu_0\\tanh(\\mu_0B/kT) \\approx N\\mu_0^2B/kT$ — Curie’s law, accurate to a part in a thousand even at the limit of ordinary fields.' },
          { label: 'Step 4: The implication', text: 'Saturating a paramagnet needs $\\mu_0B \\sim kT$: fields of millions of gauss at room temperature, or millidegree temperatures in feasible fields — which is exactly the regime adiabatic demagnetization exploits.' },
        ],
        result: 'At $10{,}000$ gauss and room temperature one Bohr magneton gives $\\mu_0B/kT \\approx 0.002$ — Feynman’s number — so paramagnetism in the lab is the linear Curie regime, and only $N\\mu_0^2$ matters.',
      },
      {
        title: 'The Curie temperature that breaks the magnetic theory of iron',
        problem: 'Nickel has $N = 9.1\\times10^{28}$ atoms per cubic meter, one Bohr magneton each. Using the local-field theory with $\\lambda = 1/3$ (spherical cavity), predict $T_c$ and compare with experiment.',
        steps: [
          { label: 'Step 1: Write the mean-field condition', text: 'The Curie temperature is $T_c = \\mu\\lambda M_{\\text{sat}}/k\\epsilon_0c^2 = \\lambda N\\mu^2/k\\epsilon_0c^2$, where $M_{\\text{sat}} = N\\mu$.' },
          { label: 'Step 2: Compute $N\\mu^2$', text: 'With $\\mu = 0.928\\times10^{-23}$ amp$\\cdot$m$^2$: $N\\mu^2 = 9.1\\times10^{28}\\times(0.928\\times10^{-23})^2 = 7.8\\times10^{-18}$.' },
          { label: 'Step 3: Compute the denominator', text: 'Using $\\epsilon_0c^2 = 1/\\mu_0 = 8.0\\times10^{5}$, $k\\epsilon_0c^2 = 1.38\\times10^{-23}\\times8.0\\times10^{5} = 1.1\\times10^{-17}$.' },
          { label: 'Step 4: Assemble', text: '$T_c = \\tfrac{1}{3}\\times(7.8\\times10^{-18})/(1.1\\times10^{-17}) \\approx 0.24$ K.' },
          { label: 'Step 5: Compare with nature', text: 'Nickel’s ferromagnetism vanishes at $631$ K — the theory is low by a factor of about $2600$. Patching it à la Weiss requires $\\lambda \\approx 900$, an internal "field" at the atom that no real magnetic arrangement can supply: the interaction must be nonmagnetic — quantum exchange via the exclusion principle.' },
        ],
        result: 'Predicted $T_c \\approx 0.24$ K versus observed $631$ K — the failure factor $2600$ is the quantitative fingerprint that ferromagnetism is not caused by magnetic forces.',
      },
    ],
    keyTakeaways: [
      'Diamagnetism is universal Lenz-law induction ($\\Delta\\mu = -q_e^2\\langle r^2\\rangle B/6m$, opposing the field); paramagnetism is the partial alignment of permanent moments against thermal disorder.',
      'Moments tie to angular momentum as $\\boldsymbol{\\mu} = -g(q_e/2m)\\boldsymbol{J}$ — orbital $g = 1$, electron spin $g = 2$, proton $g = 2\\times2.79$, neutron $2\\times(-1.91)$ — and atomic magnets precess at $\\omega_p = g(q_e/2m)B$: $1.4$ megacycles per gauss for atoms, $0.76$ kilocycles per gauss for nuclei (times $g$).',
      'Classical statistical mechanics predicts zero magnetization in equilibrium: magnetic forces do no work, so the Boltzmann factor ignores $B$. Every magnetic property of matter is quantum-mechanical.',
      'Spin quantization gives $2j+1$ levels split by $g\\mu_BB$, $J\\cdot J = j(j+1)\\hbar^2$, and the Bohr magneton $\\mu_B = q_e\\hbar/2m$; Stern–Gerlach’s two silver spots displayed the discreteness directly.',
      'Curie’s law $M = Ng^2\\mu_B^2j(j+1)B/3kT$ holds because $\\mu_0B/kT \\approx 0.002$ in any ordinary lab field; the tanh saturation appears only near absolute zero.',
      'Magnetized matter carries $\\boldsymbol{j}_{\\text{mag}} = \\nabla\\times\\boldsymbol{M}$, and the field $\\boldsymbol{H} = \\boldsymbol{B} - \\boldsymbol{M}/\\epsilon_0c^2$ is set by conduction currents alone ($Hl = NI/\\epsilon_0c^2$ in a torus); hysteresis-loop area is heat per cycle, and the loop shape is a materials-design variable.',
      'Ferromagnetism comes from exchange (exclusion principle), not from magnetic fields — nickel’s $T_c$ fails by a factor of $2600$ otherwise; domains balance wall energy, field energy and magnetostriction, and easy axes ([100] for iron, [111] for nickel) reflect the crystal anisotropy.',
    ],
    quiz: [
      {
        q: 'A small cylinder of bismuth hangs between the sharp and flat poles of a strong electromagnet. What happens, and why?',
        options: ['It is strongly attracted — bismuth is ferromagnetic below room temperature', 'It is weakly repelled from the high-field region: induced atomic currents oppose the field (diamagnetism)', 'It is weakly attracted: its permanent moments partially align (paramagnetism)', 'Nothing at all: bismuth has no electrons'],
        answer: 1,
        explanation: 'Switching on the field induces circulating currents in each atom that by Lenz’s law oppose the increase, giving moments antiparallel to $B$ and a push out of the strong-field region. Aluminum, with permanent atomic moments, feels the opposite, paramagnetic attraction.',
      },
      {
        q: 'Compared with an orbital moment, the electron’s spin magnetic moment is:',
        options: ['Half as large for the same angular momentum', 'Exactly equal (the classical ratio $\\mu/J = q/2m$)', 'Twice as large for the same angular momentum', 'Zero — spin carries angular momentum but no moment'],
        answer: 2,
        explanation: 'For orbital motion $\\boldsymbol{\\mu} = (q/2m)\\boldsymbol{J}$ survives into quantum mechanics, but the spin moment is $\\boldsymbol{\\mu} = (q/m)\\boldsymbol{J}$ — twice the ratio, "for reasons that are purely quantum-mechanical — there is no classical explanation."',
      },
      {
        q: 'What does honest classical statistical mechanics predict for the magnetization of a box of matter in thermal equilibrium?',
        options: ['A small paramagnetic magnetization $N\\mu^2B/3kT$', 'A small diamagnetic magnetization', 'Exactly zero: the equilibrium distribution cannot depend on $B$ because magnetic forces do no work', 'It depends on whether the atoms have permanent moments'],
        answer: 2,
        explanation: 'The Boltzmann factor weighs states by their energy, and the energy of motion in a magnetic field is just kinetic plus potential — unaffected by $B$. Same motions, no net circulating current, hence no magnetism: "we can only get a satisfactory understanding from quantum mechanics."',
      },
      {
        q: 'In the Rabi molecular-beam apparatus, how is the resonance detected?',
        options: ['The beam brightens at resonance', 'The detector current drops when atoms are spin-flipped and miss the exit slit', 'The oscillating coil heats up measurably', 'The uniform-field magnet current suddenly rises'],
        answer: 1,
        explanation: 'Flipped atoms have the wrong orientation for magnet 3’s inverted gradient and follow paths that miss the exit slit, so the detector current dips sharply at $\\omega = \\omega_p$. Varying $\\omega$ maps the dip, and $\\omega_p$ in the known field gives $g(q/2m)$.',
      },
      {
        q: 'The mean-field (Weiss) theory of nickel with the spherical-cavity local field $\\lambda = 1/3$ predicts $T_c = 0.24$ K against the observed $631$ K. The accepted reason the theory fails is that:',
        options: ['Nickel’s density was mismeasured', 'The true alignment interaction is the quantum exchange of the exclusion principle, about ten thousand times stronger than the direct magnetic interaction', 'The Curie temperature should be measured in a stronger field', 'Domains raise the observed transition temperature by cooling the sample'],
        answer: 1,
        explanation: 'No genuine magnetic field at an atom can mimic $\\lambda \\approx 900$; the ordering comes from the exclusion-principle exchange interaction, which has "only an apparent force" character and points (in iron, cobalt, nickel) the "wrong" way relative to naive expectations.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.5
  {
    sectionId: 'hall-ch14-s25',
    readingTime: 12,
    intro: 'The final stretch runs from the stiffness of steel to the curvature of space-time. Hooke’s law and its tensors describe how solids stretch, twist, bend and buckle; "dry water" — von Neumann’s name for the beautiful, viscosity-free hydrodynamics that has almost nothing to do with real fluids — gives Bernoulli’s theorem and the dynamics of vortices; "wet water" brings back friction and the Reynolds number, whose single value selects among creeping flows, vortex streets and turbulence. Then, as a finale, the same least-action idea Feynman learned from his teacher Mr. Bader becomes Einstein’s theory: gravity is the curvature of space-time by matter.',
    objectives: [
      'State Hooke’s law with Young’s modulus and Poisson’s ratio and derive the bulk and shear moduli',
      'Compute torsional stiffness and the speeds of shear and longitudinal elastic waves',
      'Analyze the bent beam, the cantilever deflection and the Euler buckling force',
      'Apply Bernoulli’s theorem to tanks and pipes, and the Reynolds-number scaling to model testing',
      'State Einstein’s two laws of gravitation — curvature from mass, motion at maximum proper time — and evaluate their observable numbers',
    ],
    concepts: [
      {
        term: 'Hooke’s law, Young’s modulus and Poisson’s ratio',
        kind: 'law',
        statement: 'For sufficiently small deformations, force is proportional to extension. Writing the force per unit area (stress) and the fractional stretch (strain), $$\\frac{F}{A} = Y\\,\\frac{\\Delta l}{l},$$ where $Y$ is **Young’s modulus** — a property of the material alone. Stretching in one direction also contracts the transverse directions: $$\\frac{\\Delta w}{w} = \\frac{\\Delta h}{h} = -\\sigma\\,\\frac{\\Delta l}{l},$$ defining **Poisson’s ratio** $\\sigma$.',
        detail: 'The scaling arguments that isolate $Y$: two identical blocks in series stretch twice as much (so $\\Delta l \\propto l$), and two side by side need twice the force (so $F \\propto A$). Wood and steel break beyond a few percent strain, so the linear law is a small-deformation law; and since the equations are linear, superposition holds. Two constants ($Y$ and $\\sigma$) completely describe a homogeneous isotropic material — crystalline materials can need many more.',
      },
      {
        term: 'The family of moduli',
        kind: 'law',
        statement: 'Superposing three perpendicular compressions gives the hydrostatic response $\\Delta V/V = -3p(1-2\\sigma)/Y$, so the **bulk modulus** is $$K = \\frac{Y}{3(1-2\\sigma)}.$$ Cutting a sheared cube at $45^\\circ$ exposes pure tension and compression, giving the **shear modulus** $$\\mu = \\frac{Y}{2(1+\\sigma)}.$$ If the sides are held fixed while stretching, the effective modulus rises to $Y(1-\\sigma)/(1+\\sigma)(1-2\\sigma)$.',
        detail: 'Stability demands $K > 0$ and $\\mu > 0$ — otherwise one could extract work from a self-compressing block — so $-1 < \\sigma < 1/2$; in practice $0 < \\sigma < 1/2$ always, with rubber near the incompressible limit $\\sigma \\approx 1/2$ (bend an eraser and watch its compressed side bulge sideways). Handbooks often list $Y$ and $K$ rather than $Y$ and $\\sigma$.',
      },
      {
        term: 'Torsion and elastic waves',
        kind: 'law',
        statement: 'A cylindrical rod of radius $a$ and length $L$ twisted through angle $\\phi$ resists with $$\\tau = \\mu\\,\\frac{\\pi a^4}{2L}\\,\\phi$$ — the fourth power of the radius. Torsional disturbances propagate as shear waves at $$C_{\\text{shear}} = \\sqrt{\\mu/\\rho},$$ while compressional waves in a thick body travel at $C_{\\text{long}} = \\sqrt{Y(1-\\sigma)/\\rho(1+\\sigma)(1-2\\sigma)}$, so $\\mu < Y < Y\'$ and longitudinal waves always win the race.',
        detail: 'The derivation slices the rod into cylindrical shells, each in shear by $\\theta = r\\phi/L$, and integrates $r^3\\,dr$. A rod twice as thick is sixteen times as stiff in torsion. Seismologists use the arrival-time gap between the fast compressional and slower shear waves to estimate the distance to an earthquake from a single station — and measuring both speeds plus the density is one of the most precise ways to determine $Y$ and $\\sigma$.',
      },
      {
        term: 'The bent beam and buckling',
        kind: 'method',
        statement: 'In pure bending there is a **neutral surface** (through the section’s centroid) that neither stretches nor compresses; the strain at height $y$ is $y/R$. The bending moment satisfies $$M = \\frac{YI}{R}, \\qquad I = \\int y^2\\,dA,$$ where $I$ is the geometric moment of inertia of the cross-section. A cantilever of length $L$ with end load $W$ droops by $z(L) = WL^3/3YI$; a column under axial load $F$ buckles when $$F = \\pi^2\\,\\frac{YI}{L^2}$$ (the Euler force).',
        detail: 'Since stiffness is proportional to $I$, the material should be pushed as far from the neutral surface as possible — hence I-beams and H-sections (carried too far, the thin flanges buckle or twist instead). The cantilever deflection grows as the cube of length, and near the Euler force the deflection jumps discontinuously — the collapse mode of overloaded columns and the design constraint of space rockets, which must hold their own weight yet sacrifice nothing to dead structure. For large deflections the "elastica" curves obey the pendulum equation $d^2\\theta/dS^2 = -(F/YI)\\sin\\theta$.',
      },
      {
        term: 'Strain, stress and the limits of elasticity',
        kind: 'definition',
        statement: 'The general small deformation of a body is encoded in the symmetric **strain tensor** $e_{ij} = \\tfrac{1}{2}(\\partial u_j/\\partial x_i + \\partial u_i/\\partial x_j)$ — symmetrized so that pure rotations (which displace but do not strain) are excluded. For isotropic matter the stress is $S_{ij} = 2\\mu e_{ij} + \\lambda\\,\\delta_{ij}\\sum_k e_{kk}$, and the equation of motion $\\rho\\,\\partial^2\\boldsymbol{u}/\\partial t^2 = (\\lambda + \\mu)\\nabla(\\nabla\\cdot\\boldsymbol{u}) + \\mu\\nabla^2\\boldsymbol{u}$ splits into longitudinal and transverse waves.',
        detail: 'Real materials leave the linear regime: stress–strain curves bend over, small hystereses appear, and creep sets in (crumpled plastic that slowly unfolds is modeled as strong fibers plus viscous cells). Chalk, weak in tension, snaps perpendicular to a pull but on a $45^\\circ$ helicoidal surface under torsion — where the tension is maximal. Why Hooke’s law works at all: the energy is even in the strain, so the leading term is quadratic and the force linear. Cubic-crystal elastic constants (in $10^{12}$ dyn/cm$^2$) bear this out: for NaCl, $C_{xxxx} = 0.486$, $C_{xxyy} = 0.127$, $C_{xyxy} = 0.128$ — the central-force prediction $C_{xxyy} = C_{xyxy}$ holds for ionic crystals but fails for diamond ($10.76$, $1.25$, $5.76$), whose covalent bonds push sideways.',
      },
      {
        term: 'Dry water: ideal flow, vorticity, Bernoulli',
        kind: 'law',
        statement: 'A fluid cannot sustain shear — the measure of how easily it yields is its viscosity, here set to zero (von Neumann’s "dry water"). For an incompressible ideal fluid, $\\nabla\\cdot\\boldsymbol{v} = 0$, and Newton’s law along a streamline gives **Bernoulli’s theorem**: $$\\frac{p}{\\rho} + \\frac{v^2}{2} + \\phi = \\text{const}.$$ The acceleration of a fluid particle is $\\partial\\boldsymbol{v}/\\partial t + (\\boldsymbol{v}\\cdot\\nabla)\\boldsymbol{v}$ — the convective term accelerates even steady flows, as in a circular stream.',
        detail: 'Torricelli’s result follows at once for a tank draining through a small hole: $v_{\\text{out}} = \\sqrt{2gh}$, the free-fall speed. But the discharge is not $\\pi a^2v_{\\text{out}}$ — the jet converges, to 62 percent of the hole area for a sharp orifice (and provably exactly $1/2$ for a re-entrant tube, by a momentum argument). The Venturi constriction (low pressure where the speed is high) explains why two sheets of paper come together when you blow between them. With zero vorticity $\\boldsymbol{\\Omega} = \\nabla\\times\\boldsymbol{v}$, the flow equations copy electrostatics ($\\nabla\\cdot\\boldsymbol{v} = 0$, $\\nabla\\times\\boldsymbol{v} = 0$); circulation around a cylinder ($v = C/2\\pi r$, curl-free yet circulating, like $\\boldsymbol{B}$ around a wire) superposed on uniform flow gives lift. Helmholtz’s theorems: vortex lines never end and move with the fluid — angular momentum conservation, since pressure forces have no tangential component. The smoke ring from Feynman’s two-foot drum travels because each part of the ring carries the rest forward; and the theory’s two great failures are that it cannot create vorticity from rest, and it lets fluid slide along solid surfaces, which real fluids never do.',
      },
      {
        term: 'Wet water: viscosity and the Reynolds number',
        kind: 'law',
        statement: 'Viscosity is defined by the plane experiment: $F/A = \\eta v_0/d$, the shear stress proportional to the velocity gradient; in general $S_{ij} = \\eta(\\partial v_i/\\partial x_j + \\partial v_j/\\partial x_i)$, and the viscous force per unit volume is $\\eta\\nabla^2\\boldsymbol{v}$ (incompressible). All flows past a body of diameter $D$ at speed $V$ are governed by the single dimensionless **Reynolds number** $$R = \\frac{\\rho VD}{\\eta}$$ — two flows with equal $R$ "look" the same in scaled units.',
        detail: 'For water at $20^\\circ$C, $\\eta = 10^{-3}$ newton$\\cdot$sec/m$^2$ and $\\eta/\\rho = 10^{-6}$ m$^2$/s (air is fifteen times larger, $15\\times10^{-6}$; water just above freezing is $1.8$ times larger than at $20^\\circ$C). The cylinder story unfolds with $R$: at $R \\ll 1$ the creeping flow satisfies $\\nabla^2\\Omega = 0$ and a sphere feels Stokes drag $F = 6\\pi\\eta aV$; near $R \\sim 10$–$30$ a pair of attached vortices; above $R = 40$ vortices peel off alternately — the Kármán vortex street — and no steady solution exists; at several hundred a turbulent boundary layer grows upstream, and near $R = 10^5$ the drag coefficient drops sharply with increasing speed; by $R = 10^7$ new periodicities appear that "are as yet not entirely clear." The limit $\\eta \\rightarrow 0$ does not recover potential flow: the small coefficient $1/R$ multiplies the highest derivatives, and near the surface the velocity varies violently enough to compensate. The Couette experiment (oil between rotating cylinders with suspended aluminum powder) shows the whole ladder — steady flow, then horizontal Taylor bands, then wavy bands whose waves travel at about $1/3$ the inner cylinder’s speed ("no one knows why!"), then alternating quiet and turbulent spiral regions, then full chaos. Equal-$R$ scaling is the license for wind tunnels and model basins (with the Mach number added when compressibility matters).',
      },
      {
        term: 'Curved space: the bug’s geometry',
        kind: 'definition',
        statement: 'A space is **curved** when its internal geometry betrays itself: squares that fail to close, triangles whose angles do not sum to $180^\\circ$ (a sphere allows $270^\\circ$), circles whose circumference is not $2\\pi$ times the measured radius. The cleanest measure is the **excess radius**, $r_{\\text{excess}} = r_{\\text{meas}} - \\sqrt{A/4\\pi}$ for a sphere in three dimensions.',
        detail: 'Three two-dimensional worlds make the idea concrete: a plane (flat), a sphere (positive curvature — triangles sum high, $C < 2\\pi r_{\\text{meas}}$), and a hot plate whose rulers expand with temperature — which, with the right temperature profile, is geometrically identical to the sphere. A saddle gives negative curvature ($C > 2\\pi r$); a cylinder, astonishingly, is intrinsically flat (unroll it). No bug needs to see "outside": laying out a large square suffices — "it isn’t necessary to circumnavigate the globe to find out that it is a ball." In three dimensions the curvature has several components (six numbers per point); the sphere’s excess radius measures only the mean curvature, which is enough for most physics.',
      },
      {
        term: 'Gravity as geometry: Einstein’s two laws',
        kind: 'law',
        statement: 'Einstein’s theory of gravitation is two laws. (1) **Curvature from matter**: for a small sphere containing (nearly uniform) mass $M$, $$r_{\\text{excess}} = \\frac{G}{3c^2}\\,M.$$ (2) **Motion in the geometry**: a particle moves between events so that the proper time on its own clock is a maximum (a "straight line" of curved space-time).',
        detail: 'The constant $G/3c^2 \\approx 2.5\\times10^{-29}$ cm per gram, so the earth’s radius is $1.5$ millimeters more than its surface area allows, and the sun’s is half a kilometer more. The equivalence principle — a freely falling astronaut feels weightless; a rocket accelerating at $1g$ in empty space is indistinguishable from a room on earth — forces clocks at height $H$ to run fast by $$\\omega = \\omega_0\\left(1 + \\frac{gH}{c^2}\\right),$$ derived from the accelerating rocket’s Doppler shift and independently from energy conservation (a photon of energy $E$ has gravitational mass $E/c^2$ and picks up $EgH/c^2$ falling distance $H$). Pound and Rebka confirmed it with the Mössbauer effect over $20$ meters: about two parts in $10^{15}$. Combining the clock-height gain and the velocity loss, maximizing proper time over a trajectory means minimizing $\\int(mv^2/2 - m\\phi)\\,dt$ — exactly the principle of least action of Feynman’s Lecture 19, with the free-fall parabola as the answer: throw a ball so it returns in $100$ seconds and its wristwatch reads the most of any possible path. Einstein’s field equation states the curvature law in every reference frame (counting all energy, kinetic included), and nature has sided with Einstein against Newton in all three classic tests: Mercury’s orbit is not a fixed ellipse, starlight bends twice the Newtonian amount near the sun, and clock rates depend on position in the field.',
      },
    ],
    examples: [
      {
        title: 'Stiffness by scaling: torsion bars, cantilevers and buckling',
        problem: 'A steel drive shaft (radius $a$, length $L$) and a cantilevered beam loaded at its end are both to be made stiffer. What do the formulas say about doubling dimensions?',
        steps: [
          { label: 'Step 1: Torsional stiffness', text: 'Slicing the twisted rod into shells in shear gives $\\tau = \\mu(\\pi a^4/2L)\\phi$ — the stiffness $\\tau/\\phi$ grows as the fourth power of the radius.' },
          { label: 'Step 2: Double the diameter', text: 'With $a \\rightarrow 2a$, the stiffness multiplies by $2^4 = 16$: "a rod twice as thick is sixteen times as stiff for torsion." Shortening the shaft by half doubles the stiffness again through the $1/L$ factor.' },
          { label: 'Step 3: Cantilever deflection', text: 'Integrating $YI\\,d^2z/dx^2 = W(L - x)$ with the wall fixed gives $z(x) = (W/2YI)Lx^2 - (W/6YI)x^3$, so the tip droop is $z(L) = WL^3/3YI$ — deflection grows as the cube of length.' },
          { label: 'Step 4: Buckling threshold', text: 'An axially loaded column stays straight until $F = \\pi^2YI/L^2$ (the Euler force), then bows suddenly into a half-sine. Halving the unsupported length quadruples the load it can carry.' },
          { label: 'Step 5: The design lesson', text: 'All three formulas reward moving material away from the neutral axis (raising $I$) rather than adding it uniformly — the reason structural sections are I- and H-shaped, and the reason rockets, which must survive their own weight yet maximize payload, are limited by buckling rather than crushing.' },
        ],
        result: 'Torsion: $\\tau/\\phi = \\mu\\pi a^4/2L$ (16× for doubled diameter); cantilever: $WL^3/3YI$; column collapse at the Euler force $\\pi^2YI/L^2$.',
      },
      {
        title: 'Reynolds numbers in water, from silt to vortex streets',
        problem: 'Using $\\eta/\\rho = 10^{-6}$ m$^2$/s for water at $20^\\circ$C, characterize the flow around (a) a $1$-mm grain moving at $1$ mm/s, and (b) a $2$-cm cylinder moving at $5$ cm/s.',
        steps: [
          { label: 'Step 1: Write the scaling', text: 'The only dimensionless parameter is $R = \\rho VD/\\eta = VD/(\\eta/\\rho)$ — flows of equal $R$ look alike, which is what licenses wind-tunnel testing of models.' },
          { label: 'Step 2: The creeping grain', text: 'For the grain, $R = (10^{-3}\\,\\text{m/s})(10^{-3}\\,\\text{m})/10^{-6}\\,\\text{m}^2/\\text{s} = 1$ — deep in the Stokes regime, where inertia is negligible and the drag is $F = 6\\pi\\eta aV$.' },
          { label: 'Step 3: A number for the drag', text: 'With $a = 0.5$ mm and $\\eta = 10^{-3}$: $F = 6\\pi(10^{-3})(5\\times10^{-4})(10^{-3}) \\approx 9\\times10^{-9}$ newton — a few nanonewtons, tiny but entirely viscous in origin. (Derived arithmetic from Feynman’s constants and formula.)' },
          { label: 'Step 4: The cylinder', text: 'For the cylinder, $R = (0.05)(0.02)/10^{-6} = 1000$ — well past $R = 40$, so vortices peel off alternately from the two sides: a Kármán vortex street, with a time-dependent, periodic wake.' },
          { label: 'Step 5: Read the map', text: 'The same water, the same equations: only the scale of the obstacle and the speed decide between glassy creeping flow, attached vortices, orderly shedding, and (by $R \\sim 10^5$) a turbulent boundary layer and a drag that falls as speed rises.' },
        ],
        result: 'The grain sits at $R = 1$ (Stokes drag $\\approx 9$ nN); the cylinder at $R = 1000$ (Kármán vortex street) — one parameter selects the entire personality of the flow.',
      },
      {
        title: 'Einstein’s numbers: the curvature of the earth, the sun, and a 20-meter clock shift',
        problem: 'Evaluate Feynman’s two quantitative examples of general relativity: the excess radius of the earth and of the sun, and the gravitational frequency shift between the bottom and top of a $20$-meter column.',
        steps: [
          { label: 'Step 1: The curvature constant', text: 'Einstein’s law says the excess radius of a sphere is $(G/3c^2)M$ with $G/3c^2 \\approx 2.5\\times10^{-29}$ cm per gram.' },
          { label: 'Step 2: The earth', text: 'With $M_{\\oplus} = 6\\times10^{27}$ g: $r_{\\text{excess}} = 2.5\\times10^{-29}\\times6\\times10^{27} = 1.5\\times10^{-1}$ cm — the earth’s radius is about $1.5$ millimeters larger than its measured surface area would allow.' },
          { label: 'Step 3: The sun', text: 'With $M_{\\odot} = 2\\times10^{33}$ g: $r_{\\text{excess}} = 2.5\\times10^{-29}\\times2\\times10^{33} = 5\\times10^{4}$ cm — half a kilometer of hidden radius.' },
          { label: 'Step 4: The clock shift', text: 'A clock a height $H$ above another runs fast by $\\Delta\\omega/\\omega = gH/c^2$. For $H = 20$ m: $gH/c^2 = (9.8\\times20)/(3\\times10^8)^2 \\approx 2.2\\times10^{-15}$ — about two parts in $10^{15}$.' },
          { label: 'Step 5: The experimental verdict', text: 'Precisely this shift was measured by Pound and Rebka (1960) using the Mössbauer effect — "Einstein was perfectly correct." Above the earth’s surface the mean curvature is zero, but the curvature components are not; their presence is what we call gravity.' },
        ],
        result: 'Earth: $+1.5$ mm of excess radius; sun: $+0.5$ km; and a $20$-m height difference shifts clock rates by $\\approx 2\\times10^{-15}$ — measured, and right.',
      },
    ],
    keyTakeaways: [
      'Hooke’s law: stress $= Y\\times$ strain, with Poisson’s lateral contraction $\\Delta w/w = -\\sigma\\,\\Delta l/l$; the moduli are related ($K = Y/3(1-2\\sigma)$, $\\mu = Y/2(1+\\sigma)$), so stability forces $-1 < \\sigma < 1/2$.',
      'A torsion bar has stiffness $\\mu\\pi a^4/2L$ (doubling the diameter gives $16\\times$), and shear and longitudinal waves travel at $\\sqrt{\\mu/\\rho}$ and $\\sqrt{Y(1-\\sigma)/\\rho(1+\\sigma)(1-2\\sigma)}$ — the seismologist’s S-and-P distance gauge.',
      'Beams bend by $M = YI/R$ with $I = \\int y^2\\,dA$: cantilevers droop as $WL^3/3YI$ and columns buckle at the Euler force $\\pi^2YI/L^2$ — hence I-beams and rocket design.',
      'Strain must be symmetrized to exclude rotations; real materials creep, break along maximal-tension surfaces (chalk’s $45^\\circ$ torsion fracture), and obey Hooke only because strain energy is even in the strain.',
      'Dry water gives Bernoulli’s $p/\\rho + v^2/2 + \\phi = $ const, Torricelli’s $\\sqrt{2gh}$, circulation-induced lift and Helmholtz’s moving vortex lines — but it cannot make vorticity, and it wrongly lets fluid slip along solids.',
      'Viscosity enters through $\\eta$ (water: $\\eta/\\rho = 10^{-6}$ m$^2$/s at $20^\\circ$C), and the single Reynolds number $R = \\rho VD/\\eta$ selects among creeping flow (Stokes drag $6\\pi\\eta aV$), vortex streets ($R > 40$), boundary layers and turbulence; equal $R$ is the basis of model testing.',
      'Curved space is defined by internal geometry — excess radius, triangle sums — not by embedding (a cylinder is intrinsically flat, a saddle negatively curved); Einstein’s gravity adds $r_{\\text{excess}} = (G/3c^2)M$ (earth $1.5$ mm, sun $0.5$ km) plus motion at maximum proper time, with clocks running fast at height by $gH/c^2$ (two parts in $10^{15}$ over $20$ m).',
    ],
    quiz: [
      {
        q: 'Poisson’s ratio must be less than $1/2$ for any real material. Why?',
        options: ['So that rods do not shrink too visibly when stretched', 'Otherwise the bulk modulus would be negative and the material would expand spontaneously under pressure, yielding free mechanical energy', 'Because the shear modulus must exceed Young’s modulus', 'It is purely a convention with no physical content'],
        answer: 1,
        explanation: 'With $\\sigma > 1/2$, $K = Y/3(1-2\\sigma)$ turns negative: pressure would increase the volume, and the block would run away on its own — an unstable equilibrium from which work could be extracted. Similarly $\\mu > 0$ forces $\\sigma > -1$.',
      },
      {
        q: 'A drive shaft’s diameter is doubled (length unchanged). Its torsional stiffness increases by a factor of:',
        options: ['2', '4', '8', '16'],
        answer: 3,
        explanation: 'The stiffness $\\tau/\\phi = \\mu\\pi a^4/2L$ grows with the fourth power of the radius — doubling the diameter multiplies $a^4$ by sixteen. Feynman: "a rod twice as thick is sixteen times as stiff for torsion."',
      },
      {
        q: 'Water drains from a large tank through a small sharp-edged hole a depth $h$ below the surface. The efflux speed and the discharge rate are:',
        options: ['$\\sqrt{2gh}$, and the full hole area times that speed', '$\\sqrt{gh}$, and the full hole area', '$\\sqrt{2gh}$, but the jet contracts to about 62 percent of the hole area', '$2gh$, with a 50 percent contraction'],
        answer: 2,
        explanation: 'Bernoulli along a streamline gives the free-fall speed $\\sqrt{2gh}$, but the converging jet carries only about 62 percent of the naive discharge for a sharp orifice — exactly 50 percent for a re-entrant tube, provable by momentum conservation.',
      },
      {
        q: 'A model airplane is tested in a wind tunnel so that the flow around the model matches the full-scale flight. Besides the Mach number (if compressibility matters), the quantity that must match is:',
        options: ['The Reynolds number $R = \\rho VD/\\eta$', 'The absolute velocity $V$', 'The absolute size $D$', 'The ratio of viscosity to density alone'],
        answer: 0,
        explanation: 'Rescaling lengths by $D$, speeds by $V$ and times by $D/V$ leaves only the combination $\\rho VD/\\eta$ in the equations; equal $R$ means identical flow patterns in scaled units — the principle behind wind tunnels and model basins.',
      },
      {
        q: 'In general relativity, the free trajectory of a particle between two events is the one that:',
        options: ['Minimizes the coordinate distance travelled', 'Maximizes the proper time recorded by a clock carried along it', 'Minimizes the coordinate time of travel', 'Follows the path of maximum acceleration'],
        answer: 1,
        explanation: 'A "straight line" in space-time is uniform-velocity motion, which extremizes (maximizes) the watch reading. Including gravity, the maximizing trajectory is the free-fall parabola — and the same variational statement becomes the classical principle of least action, $\\int(mv^2/2 - m\\phi)\\,dt$ = minimum.',
      },
    ],
  },
]

// ============================================================================
// Formula entries — the chapter’s most useful laws, with Unicode and KaTeX
// ============================================================================

export const physCh14Formulas: FormulaEntry[] = [
  {
    chapterId: 'hall-ch37',
    section: '36.25',
    name: 'Four-vector scalar product',
    formula: 'aμbμ = atbt − a·b',
    note: 'invariant under Lorentz transformations; pμpμ = M²',
    latex: 'a_{\\mu} b_{\\mu} = a_t b_t - \\boldsymbol{a}\\cdot\\boldsymbol{b}',
  },
  {
    chapterId: 'hall-ch37',
    section: '36.25',
    name: 'Lorentz transformation of the fields',
    formula: 'E′⊥ = (E + v×B)⊥/√(1−v²/c²)',
    note: 'parallel components unchanged; B mixes with −v×E/c²',
    latex: "E'_{\\perp} = \\frac{(\\boldsymbol{E} + \\boldsymbol{v}\\times\\boldsymbol{B})_{\\perp}}{\\sqrt{1-v^2/c^2}}",
  },
  {
    chapterId: 'hall-ch33',
    section: '32.35',
    name: 'Field energy density',
    formula: 'u = ½ε₀E² + ½ε₀c²B²',
    note: 'energy stored per unit volume by the field',
    latex: 'u = \\frac{\\epsilon_0}{2}\\boldsymbol{E}\\cdot\\boldsymbol{E} + \\frac{\\epsilon_0 c^2}{2}\\boldsymbol{B}\\cdot\\boldsymbol{B}',
  },
  {
    chapterId: 'hall-ch33',
    section: '32.35',
    name: 'Poynting vector',
    formula: 'S = ε₀c²E×B',
    note: 'energy flow per unit area; momentum density g = S/c²',
    latex: '\\boldsymbol{S} = \\epsilon_0 c^2\\,\\boldsymbol{E}\\times\\boldsymbol{B}',
  },
  {
    chapterId: 'young-ch42',
    section: '40.15',
    name: 'Polarizability tensor',
    formula: 'Pi = Σj αijEj',
    note: 'P is generally not parallel to E in a crystal',
    latex: 'P_i = \\sum_j \\alpha_{ij}E_j',
  },
  {
    chapterId: 'hall-ch28',
    section: '28.33',
    name: 'Curie law (quantum form)',
    formula: 'M = N·g²µB²·j(j+1)·B/3kT',
    note: 'low-field paramagnetism; spin j, Bohr magneton µB',
    latex: 'M = \\frac{N g^2 \\mu_B^2\\, j(j+1)}{3kT}\\,B',
  },
  {
    chapterId: 'hall-ch14',
    section: '14.25',
    name: 'Hooke’s law (Young’s modulus)',
    formula: 'F/A = Y·∆l/l',
    note: 'stress = Young modulus × strain',
    latex: '\\frac{F}{A} = Y\\,\\frac{\\Delta l}{l}',
  },
  {
    chapterId: 'hall-ch14',
    section: '14.25',
    name: 'Einstein curvature law',
    formula: 'rexcess = (G/3c²)·M',
    note: 'radius excess of a sphere is set by the enclosed mass',
    latex: 'r_{\\mathrm{excess}} = \\frac{G}{3c^2}\\,M',
  },
]
