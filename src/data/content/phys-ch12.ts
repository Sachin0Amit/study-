import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// THE FEYNMAN LECTURES MASTER PHYSICS LIBRARY — Chapter 12
// Dielectrics, Magnetostatics and Induction (Feynman Vol. II, Lectures 10–17)
// Sources: R. P. Feynman, "The Feynman Lectures on Physics", New Millennium
// Edition, Vol. II: L10 Dielectrics, L11 Inside Dielectrics, L12 Electrostatic
// Analogs, L13 Magnetostatics, L14 The Magnetic Field in Various Situations,
// L15 The Vector Potential, L16 Induced Currents, L17 The Laws of Induction.
// All worked-example numbers are Feynman's own and have been recomputed.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const physCh12Content: SectionContent[] = [
  // ------------------------------------------------------------------ 12.1
  {
    sectionId: 'hall-ch25-s13',
    readingTime: 12,
    intro: 'Faraday found that stuffing an insulator between the plates of a capacitor increases its capacitance by a factor κ — yet an insulator, by definition, carries no free charge at all. Feynman’s program in Lectures 10–12 is to explain this paradox atom by atom, then to cash in the whole subject: because the mathematics of electrostatics is the same mathematics that governs heat flow, stretched membranes, neutron diffusion and illumination, learning one subject means learning them all at once.',
    objectives: [
      'Derive the dielectric constant κ from the polarization P, showing that $\\kappa = 1 + \\chi$ and that a dielectric raises capacitance by the factor κ',
      'Compute the electronic and orientational (polar-molecule) contributions to the polarizability, including the $1/T$ Curie law',
      'Apply the local-field correction $E + P/3\\epsilon_0$ to obtain the Clausius–Mossotti equation for dense liquids',
      'Explain ferroelectricity in barium titanate as the runaway condition $N\\alpha = 3$',
      'Translate electrostatic solutions to heat flow, membrane deflection, neutron diffusion and illumination problems',
    ],
    concepts: [
      {
        term: 'The dielectric constant κ',
        kind: 'definition',
        statement: 'If an insulator completely fills the space between the plates of a parallel-plate capacitor, the capacitance is increased by a factor **κ** which depends only on the nature of the material; κ is the **dielectric constant**, equal to unity for vacuum.',
        detail: 'With the charge on the plates held fixed, a larger $C$ means a smaller voltage, and since the voltage is the integral of the electric field across the gap, the field inside the capacitor must be reduced even though the charges on the plates are unchanged. Gauss’s law then forces the conclusion that charge of the opposite sign appears on the surface of the dielectric itself. Faraday discovered the effect with a simple electroscope and a parallel-plate capacitor.',
      },
      {
        term: 'The polarization vector P',
        kind: 'definition',
        statement: 'When a field is applied to matter, each atom acquires an induced dipole moment; the **polarization** $P$ is the dipole moment per unit volume, $$P = Nq\\delta,$$ where $N$ is the number of atoms per unit volume, $q$ the charge displaced and $\\delta$ the separation of the positive and negative charge centers.',
        detail: 'For fields that are not too enormous the induced moment is proportional to the field. Feynman’s first model of a dielectric — small conducting spheres embedded in an ideal insulator — already contains everything essential: what matters is only that many little dipoles are induced, not the mechanism. A modern picture distorts the electron cloud of each atom so that its center of gravity no longer coincides with the nucleus.',
      },
      {
        term: 'Polarization charge',
        kind: 'law',
        statement: 'A uniform polarization produces a surface charge density $\\sigma_{\\text{pol}} = P \\cdot n$ on each face; a nonuniform polarization produces a volume charge density $$\\rho_{\\text{pol}} = -\\nabla \\cdot P.$$',
        detail: 'This is a perfectly real charge density — it is called “polarization charge” only to remind us how it got there. Applying Gauss’s law to a pillbox inside a filled capacitor gives the field in the dielectric, $E = (\\sigma_{\\text{free}} - P)/\\epsilon_0$; the surface charge exists only because $\\sigma_{\\text{free}}$ exists, and disappears by relaxing back into the material when the plates are discharged.',
      },
      {
        term: 'Susceptibility, D and permittivity',
        kind: 'notation',
        statement: 'Writing $P = \\chi\\epsilon_0 E$ defines the **electric susceptibility** $\\chi$, so the field is reduced by $1/(1+\\chi)$ and the capacitance rises by $$\\kappa = 1 + \\chi.$$ The historical shorthand $D = \\epsilon_0 E + P = \\epsilon E$ with $\\epsilon = \\kappa\\epsilon_0$ gives the compact electrostatic equations $\\nabla \\cdot D = \\rho_{\\text{free}}$, $\\nabla \\times E = 0$.',
        detail: 'Feynman’s warning: $D = \\epsilon E$ is an attempt to describe a property of matter, and like Hooke’s law it is only an approximation — it fails for large fields, for some substances even at small fields, and the “constant” can depend on how fast $E$ changes with time. The fundamental equations are always $\\nabla \\cdot E = \\rho/\\epsilon_0$ with $\\rho$ the total charge, plus $\\nabla \\times E = 0$.',
      },
      {
        term: 'Electronic polarization',
        kind: 'method',
        statement: 'Modeling the atom as an electron bound by a spring of natural frequency $\\omega_0$, a static field displaces it by $x = qE/m\\omega_0^2$, giving the polarizability $$\\alpha = \\frac{q_e^2}{\\epsilon_0 m\\omega_0^2} = \\frac{4\\pi e^2}{m\\omega_0^2}$$ and, for a gas, $\\kappa - 1 = N\\alpha$.',
        detail: 'The estimate $\\omega_0 \\approx me^2/2\\hbar^3$ from the ionization energy of hydrogen gives $\\alpha \\approx 16\\pi(\\hbar^2/me^2)^3 = 16\\pi a_0^3$, where $a_0 = 0.528$ Å is the Bohr radius — a polarizability with the dimensions of a volume. An exact quantum-mechanical calculation changes the $16\\pi$ to $18\\pi$, about 12% higher.',
      },
      {
        term: 'Polar molecules and Curie’s law',
        kind: 'law',
        statement: 'Molecules such as water carry a permanent moment $p_0$; thermal collisions oppose the aligning torque of the field, and Boltzmann statistics gives the orientation polarization $$P = \\frac{Np_0^2 E}{3kT}.$$ The $1/T$ dependence is **Curie’s law**.',
        detail: 'The energy of a dipole in a field is $U = -p_0 \\cdot E$, so the population at angle $\\theta$ goes as $e^{p_0E\\cos\\theta/kT}$; expanding the exponential for ordinary fields and integrating over solid angle yields the factor of 3. The moment appears squared because the aligning force is proportional to $p_0$ and the mean moment produced is again proportional to $p_0$. Because the heavy molecules turn slowly, the polar contribution falls away above the microwave region while the electronic part survives to optical frequencies.',
      },
      {
        term: 'The local field and Clausius–Mossotti',
        kind: 'theorem',
        statement: 'In a dense material the field that polarizes a given atom is not the average field $E$ but the field in a spherical cavity, $$E_{\\text{hole}} = E + \\frac{P}{3\\epsilon_0},$$ which leads to the **Clausius–Mossotti equation** $$\\frac{\\kappa - 1}{\\kappa + 2} \\cdot 3 = N\\alpha.$$',
        detail: 'A slot cut parallel to $E$ measures $E$; a slot cut perpendicular measures $E + P/\\epsilon_0$; a spherical hole — the natural environment of an atom in a liquid — sits one third of the way between. The field inside a uniformly polarized sphere is $-P/3\\epsilon_0$, and superposition adds it back. When $N\\alpha$ is small (a gas) the formula reduces to $\\kappa - 1 = N\\alpha$. For water the naive calculation fails badly ($N\\alpha = 13.2$, predicting a negative κ against the observed 80) because permanent dipoles need Onsager’s better treatment.',
      },
      {
        term: 'Ferroelectricity; BaTiO₃',
        kind: 'insight',
        statement: 'When the feedback of polarization on the local field is strong enough that $N\\alpha$ reaches 3, the polarization runs away and the lattice locks in a permanent internal moment — a **ferroelectric**. In barium titanate this happens below the critical temperature $T_c = 118\\,^\\circ\\text{C}$, and just above $T_c$ the dielectric constant follows the Curie–Weiss law $\\kappa - 1 \\approx 9/\\beta(T - T_c)$, reaching 50,000 to 100,000.',
        detail: 'Along the oxygen–titanium chains the field of one dipole polarizes its neighbors; the chain locks when $\\alpha = a^3/0.383$ with $a = 2 \\times 10^{-8}$ cm, requiring an ionic polarizability of about $9.2 \\times 10^{-24}$ cm³ from the titanium ion. Straight chains would polarize antiparallel (an antiferroelectric); BaTiO₃ is ferroelectric only because the weaker intermediate chains of barium and oxygen atoms couple the strong chains parallel. Electrets — wax frozen in a field — are the disposable cousins of this effect.',
      },
      {
        term: 'Electrostatic analogs',
        kind: 'insight',
        statement: 'The equations $\\nabla \\cdot (\\kappa \\nabla\\phi) = -\\rho_{\\text{free}}/\\epsilon_0$, $\\nabla \\times E = 0$ are solved identically by steady heat flow ($h = -K\\nabla T$), the stretched membrane ($f = -\\nabla \\cdot \\tau\\nabla u$), neutron diffusion ($J = -D\\nabla N$), irrotational “dry water” flow and illumination — **the same equations have the same solutions**.',
        detail: 'Point heat source $\\to$ $1/r$ temperature and $1/r^2$ heat flow, exactly as for point charges; a point source near an insulated surface uses an image source, as for a charge near a conductor. Feynman’s reason for the “underlying unity of nature”: the common element is space itself — the simplest vector equations involving only spatial derivatives of smooth quantities must look like electrostatics. Caveat: the analogies can break at boundaries (a perfect heat insulator, $K = 0$, has no dielectric counterpart).',
      },
    ],
    examples: [
      {
        title: 'The dielectric constant of hydrogen gas',
        problem: 'Estimate κ for monatomic hydrogen gas at standard conditions (0 °C, 1 atm), where there are $N = 2.69 \\times 10^{19}$ atoms per cm³ and the Bohr radius is $a_0 = 0.528 \\times 10^{-8}$ cm, and compare with the measured value.',
        steps: [
          { label: 'Step 1: Polarizability of the model atom', text: 'Using the estimate $\\alpha \\approx 16\\pi a_0^3$ from the ionization energy $E_\\approx me^4/2\\hbar^2$ interpreted as $\\hbar\\omega_0$, we get $\\alpha = 16\\pi(0.528 \\times 10^{-8})^3 = 7.4 \\times 10^{-24}$ cm³.' },
          { label: 'Step 2: Gas formula', text: 'For a dilute gas $\\kappa - 1 = N\\alpha = (2.69 \\times 10^{19})(7.4 \\times 10^{-24}) = 1.99 \\times 10^{-4}$, so $$\\kappa = 1.00020.$$' },
          { label: 'Step 3: Compare with experiment', text: 'The measured value for hydrogen gas is $\\kappa_{\\text{exp}} = 1.00026$ — good agreement, since real H₂ is diatomic; an exact quantum treatment (the $16\\pi$ becomes $18\\pi$) closes most of the gap.' },
          { label: 'Step 4: A stiffer atom', text: 'Helium takes 24.6 eV to ionize versus hydrogen’s 13.6 eV, so $\\omega_0$ is about twice as large and $\\alpha$ about one quarter as large: $\\kappa_{\\text{He}} \\approx 1.000050$, against the measured 1.000068.' },
        ],
        result: 'The crude spring-model atom predicts κ = 1.00020 for hydrogen (experiment: 1.00026) and 1.000050 for helium (experiment: 1.000068) — the dielectric constant of a nonpolar gas follows from atomic constants.',
      },
      {
        title: 'Clausius–Mossotti predicts a liquid from its gas',
        problem: 'Carbon disulfide gas at 0 °C has $\\kappa = 1.0029$, so $N\\alpha = 0.0029$. The liquid at 20 °C is 381 times as dense. Predict the dielectric constant of liquid CS₂.',
        steps: [
          { label: 'Step 1: Scale up Nα', text: 'Assuming the molecular polarizability does not change on condensation, $N\\alpha$ in the liquid is $381 \\times 0.0029 = 1.11$. The $N\\alpha/3$ term is now about 0.37 — far from negligible, so the dilute-gas formula will not do.' },
          { label: 'Step 2: Apply Clausius–Mossotti', text: 'The local-field correction gives $$\\kappa - 1 = \\frac{N\\alpha}{1 - (N\\alpha/3)} = \\frac{1.11}{1 - 0.37} = 1.76,$$ so $\\kappa = 2.76$.' },
          { label: 'Step 3: Check against the data', text: 'The observed dielectric constant of liquid CS₂ is 2.64 — reasonable agreement. The same procedure works even better for argon (predicted 1.517 vs observed 1.54) and oxygen (1.509 vs 1.507); carbon tetrachloride is the worst of the table (2.45 vs 2.24).' },
          { label: 'Step 4: Note the failure mode', text: 'For polar water the same arithmetic gives $N\\alpha = 13.2$, which would make κ negative — the observed value is 80. Orientation polarization of permanent dipoles needs Onsager’s treatment, not the spherical-cavity electronic formula.' },
        ],
        result: 'Clausius–Mossotti predicts κ = 2.76 for liquid carbon disulfide against the measured 2.64 — the local field $E + P/3\\epsilon_0$ explains most of a liquid’s dielectric constant from gas data.',
      },
      {
        title: 'Heat lost by an insulated pipe (an electrostatics problem)',
        problem: 'A cylinder of radius $a$ (a steam pipe or a current-carrying wire) is held at temperature $T_1$; it is covered by a concentric insulating sheath of conductivity $K$ with outer radius $b$, whose surface is held at $T_2$. Find the total heat $G$ lost per length $L$ of pipe.',
        steps: [
          { label: 'Step 1: Match the analogs', text: 'Steady heat flow obeys $\\nabla \\cdot (K\\nabla T) = -s$, the exact twin of $\\nabla \\cdot (\\kappa \\nabla\\phi) = -\\rho_{\\text{free}}/\\epsilon_0$: the heat current $h$ corresponds to $E$, the temperature $T$ to $\\phi$, and $G$ to the flux of $E$ — the charge on a cylindrical capacitor per unit length.' },
          { label: 'Step 2: Gauss-like argument', text: 'By symmetry $h$ depends only on $r$; a gaussian cylinder of length $L$ and radius $r$ gives $2\\pi r L h = G$, so $h = G/2\\pi r L$.' },
          { label: 'Step 3: Integrate the gradient', text: 'With $h = -K\\,dT/dr$, separation of variables gives $dT/dr = -G/2\\pi KLr$; integrating from $a$ to $b$ yields $T_2 - T_1 = -(G/2\\pi KL)\\ln(b/a)$.' },
          { label: 'Step 4: Read off the answer', text: 'Solving for the heat loss, $$G = \\frac{2\\pi K L (T_1 - T_2)}{\\ln(b/a)},$$ which is term-for-term the charge on the cylindrical condenser, $Q = 2\\pi\\epsilon_0 L(\\phi_1 - \\phi_2)/\\ln(b/a)$.' },
        ],
        result: 'The insulated-pipe problem is solved by copying the cylindrical capacitor: the same mathematics has the same solutions.',
      },
    ],
    keyTakeaways: [
      'A dielectric raises capacitance by κ because polarization charge $\\sigma_{\\text{pol}} = P \\cdot n$ partly cancels the free charge; $\\kappa = 1 + \\chi$ with $P = \\chi\\epsilon_0 E$.',
      'Nonuniform polarization leaves behind a real volume charge $\\rho_{\\text{pol}} = -\\nabla \\cdot P$; the deep equations are always $\\nabla \\cdot E = \\rho/\\epsilon_0$ and $\\nabla \\times E = 0$ with $\\rho$ the total charge.',
      'Electronic polarization gives $\\alpha = q_e^2/\\epsilon_0 m\\omega_0^2 \\approx 16\\pi a_0^3$ for hydrogen and $\\kappa - 1 = N\\alpha$ for gases; polar molecules add $P = Np_0^2E/3kT$ (Curie’s law).',
      'The atom in a liquid feels $E + P/3\\epsilon_0$, which converts the gas law into Clausius–Mossotti, $3(\\kappa - 1)/(\\kappa + 2) = N\\alpha$.',
      'At $N\\alpha = 3$ the polarization runs away: barium titanate locks in a permanent moment below 118 °C and shows κ of 50,000 to 100,000 just above, following Curie–Weiss.',
      'D = ε₀E + P and ε = κε₀ are bookkeeping, not physics — like Hooke’s law they are approximations of a complicated material.',
      'Heat flow, membranes, neutron diffusion, ideal fluid flow and illumination obey the same equations as electrostatics; solving one subject solves them all, up to the boundary conditions.',
    ],
    quiz: [
      {
        q: 'A slab completely fills a parallel-plate capacitor whose free charge is held fixed. What does the polarization of the slab do to the field between the plates?',
        options: ['It leaves the field unchanged because insulators carry no charge', 'It reduces the field, because surface polarization charge opposes the free charge', 'It increases the field, because polarization charge adds to the free charge', 'It reverses the field direction inside the slab'],
        answer: 1,
        explanation: 'Gauss’s law applied to a pillbox spanning the dielectric surface gives $E = (\\sigma_{\\text{free}} - P)/\\epsilon_0$: the induced surface charge has the sign opposite to the neighboring plate charge, so the field — and hence the voltage and the energy stored at fixed charge — is reduced, which is exactly the observed increase of capacitance by the factor κ.',
      },
      {
        q: 'The Clausius–Mossotti equation differs from the dilute-gas result $\\kappa - 1 = N\\alpha$ because:',
        options: ['Quantum mechanics changes the polarizability in liquids', 'The field polarizing each atom in a dense medium is $E + P/3\\epsilon_0$, not the average field E', 'Liquids contain ions that screen the external field', 'The polarization charge changes sign in dense materials'],
        answer: 1,
        explanation: 'An atom in a liquid sits, on average, in a spherical cavity. The field in such a hole exceeds the average field by $P/3\\epsilon_0$ (one third of the way from a slot parallel to $E$ to a slot perpendicular), so $P = \\epsilon_0 N\\alpha(E + P/3\\epsilon_0)$, giving $\\kappa - 1 = N\\alpha/(1 - N\\alpha/3)$.',
      },
      {
        q: 'For a gas of polar molecules, the orientation contribution to $\\kappa - 1$ is proportional to:',
        options: ['$N p_0^2 / 3\\epsilon_0 kT$ — inversely as the absolute temperature', '$N p_0^2 kT$ — proportional to the temperature', 'The square of the permanent moment only, independent of density', 'The cube of the dipole moment divided by the field'],
        answer: 0,
        explanation: 'Boltzmann weighting $e^{p_0 E \\cos\\theta/kT}$ over orientations gives $P = Np_0^2E/3kT$, so $\\kappa - 1 = Np_0^2/3\\epsilon_0 kT$: hotter molecules are disaligned by collisions more effectively (Curie’s law), and the moment enters squared — once for the torque, once for the resulting alignment.',
      },
      {
        q: 'Barium titanate becomes ferroelectric below 118 °C. In Feynman’s picture the transition happens because:',
        options: ['The titanium ion overcomes the restoring force and shifts permanently when the local-field feedback reaches $N\\alpha = 3$', 'Electrons tunnel between oxygen atoms at low temperature', 'The crystal contracts until the plates of each unit cell touch', 'Thermal expansion increases N until the lattice melts'],
        answer: 0,
        explanation: 'As α grows, the polarization enlarges the local field, which polarizes each atom more — a feedback that runs away when $N\\alpha = 3$. The lattice then jams with a self-generated permanent moment; thermal expansion lowers $N$ with temperature, so just above $T_c$ the dielectric constant is enormous and varies as $9/\\beta(T - T_c)$ (Curie–Weiss).',
      },
      {
        q: 'In Feynman’s neutron-diffusion analogy, a uniform spherical source of neutrons in a graphite block produces a density ratio of center to edge of:',
        options: ['1 — the density is uniform everywhere', '3/2 — the same mathematics as the potential of a uniformly charged sphere', '2 — diffusion doubles the central density', 'It depends on the reactor geometry and cannot be found from electrostatics'],
        answer: 1,
        explanation: 'The neutron density satisfies the same Poisson equation as the electrostatic potential of a uniform ball of charge: $N_{\\text{outside}} = S_0a^3/3Dr$ and $N_{\\text{inside}} = (S_0/3D)(3a^2/2 - r^2/2)$. At the center the value goes as $3a^2/2$, at the edge as $a^2$, ratio 3/2 — “our knowledge of electrostatics gives us a good start on the physics of nuclear reactors.”',
      },
    ],
  },

  // ------------------------------------------------------------------ 12.2
  {
    sectionId: 'hall-ch29-s14',
    readingTime: 12,
    intro: 'A moving charge feels a force that is perpendicular to everything — to its velocity and to a mysterious direction in space called the magnetic field. Feynman builds magnetostatics from that force law, finds the fields of wires and solenoids with Ampère’s law, and then introduces the vector potential A — which classical physics treats as a computational convenience but quantum mechanics reveals to be, in Feynman’s sense, “real.”',
    objectives: [
      'State the Lorentz force and derive the force density $j \\times B$ on a current-carrying wire',
      'Apply Ampère’s law $\\oint B \\cdot ds = I/\\epsilon_0 c^2$ to find the fields of a long wire and a long solenoid',
      'Explain why there are no magnetic charges and how magnetized iron is nevertheless equivalent to internal currents',
      'Construct the vector potential $B = \\nabla \\times A$, fix the gauge $\\nabla \\cdot A = 0$, and use the electrostatics-like equation $\\nabla^2 A = -j/\\epsilon_0 c^2$',
      'Distinguish the “mechanical” energy $-\\mu \\cdot B$ of a current loop from the true energy $+\\mu \\cdot B$, and describe how quantum mechanics makes A observable through the phase $\\oint A \\cdot ds$',
    ],
    concepts: [
      {
        term: 'The magnetic field and the Lorentz force',
        kind: 'law',
        statement: 'The force on a charge has two parts: one independent of its motion (the electric field), and the **magnetic** part, which is always at right angles to the velocity and proportional to the velocity component at right angles to a fixed direction in space. Together, $$F = q(E + v \\times B).$$',
        detail: 'B is measured in webers per square meter (equivalently newton-seconds per coulomb-meter). The strange directional character of the magnetic force is demonstrated by deflecting the beam of a cathode-ray tube with a bar magnet. The unit vector direction and the constant of proportionality are both bundled into the single vector B.',
      },
      {
        term: 'Current density and charge conservation',
        kind: 'law',
        statement: 'The current density is $j = \\rho v$ for a charge distribution drifting at velocity $v$ (or $j = Nqv$ for discrete carriers), and the total current through a surface is $I = \\int j \\cdot n\\,dS$. Charge is indestructible, so $$\\nabla \\cdot j = -\\frac{\\partial\\rho}{\\partial t}.$$',
        detail: 'Charge is conserved in the strongest sense — it never appears from nowhere. In magnetostatics the currents must be steady, which forces $\\nabla \\cdot j = 0$: charges flow only in closed loops (circuits with generators and batteries, but no charging or discharging condensers).',
      },
      {
        term: 'The force on a current',
        kind: 'law',
        statement: 'Summing $qv \\times B$ over the moving charges in a wire gives the force per unit volume $j \\times B$, and for a thin wire, $$\\Delta F = I \\times B\\,\\Delta L.$$',
        detail: 'The magnetic force on a wire depends only on the total current — not on the amount of charge per carrier or even its sign. Parallel currents in the same direction attract; opposite currents repel. Because the result is invariant under a change of handedness convention (the right-hand rule is used twice), electromagnetism is mirror-symmetric — B is an axial vector.',
      },
      {
        term: 'No magnetic charges',
        kind: 'insight',
        statement: 'The magnetostatic equations are $$\\nabla \\cdot B = 0, \\qquad c^2 \\nabla \\times B = \\frac{j}{\\epsilon_0}.$$ The first says the lines of B never begin or end — **no magnetic charges have ever been discovered**; wherever there are currents, lines of B loop around them.',
        detail: '“Magnetostatics” is really the study of steady currents: a field requires moving charges, so the situation is a dynamic one we approximate by a steady flow. The absence of magnetic charge is true not only for statics but always. Iron’s magnetism comes from electrons spinning on their axes — internal currents already counted in $j$; two electrons per atom cooperate, making a bar magnet equivalent to a solenoid with a surface current.',
      },
      {
        term: 'Ampère’s law',
        kind: 'law',
        statement: 'By Stokes’ theorem the circulation of B around any closed curve equals the current through the loop divided by $\\epsilon_0 c^2$: $$\\oint_\\Gamma B \\cdot ds = \\frac{I_{\\text{through }\\Gamma}}{\\epsilon_0 c^2}.$$',
        detail: 'This law plays the role in magnetostatics that Gauss’s law played in electrostatics — powerful when symmetry helps, incomplete otherwise (one must also use $\\nabla \\cdot B = 0$). The constant $1/4\\pi\\epsilon_0 c^2$ is exactly $10^{-7}$ in the mks system, because this equation is used to define the ampere.',
      },
      {
        term: 'Fields of a wire and a solenoid',
        kind: 'method',
        statement: 'For a long straight wire, symmetry gives circular field lines and $$B = \\frac{1}{4\\pi\\epsilon_0 c^2}\\frac{2I}{r}.$$ For a long solenoid of $n$ turns per unit length the field inside is uniform, $$B_0 = \\frac{nI}{\\epsilon_0 c^2},$$ and negligible outside.',
        detail: 'At one meter from a current of one ampere the field is $2 \\times 10^{-7}$ webers per square meter. Outside the solenoid the lines of B must return around the end — the field of a bar magnet — which is the first hint that the “ends” of a magnet are not places where lines begin, only places where they turn around.',
      },
      {
        term: 'The vector potential',
        kind: 'definition',
        statement: 'Because $\\nabla \\cdot B = 0$ always, we may always write $$B = \\nabla \\times A,$$ defining the **vector potential**. A is not unique: $A^{\\prime} = A + \\nabla\\psi$ gives the same B for any scalar $\\psi$ (a gauge transformation), and for magnetostatics we choose the convenient gauge $\\nabla \\cdot A = 0$.',
        detail: 'With this choice A satisfies three Poisson equations, $\\nabla^2 A = -j/\\epsilon_0 c^2$, one per component, so $A(1) = \\frac{1}{4\\pi\\epsilon_0 c^2}\\int \\frac{j(2)\\,dV_2}{r_{12}}$ — the x-component of A is the scalar potential of the charge distribution $j_x/c^2$. For a uniform field, $A = \\frac{1}{2}B \\times r$; for a circuit, $A(1) = \\frac{1}{4\\pi\\epsilon_0 c^2}\\oint \\frac{I\\,ds_2}{r_{12}}$. Taking the curl of the integral gives the **Biot–Savart law**, $B(1) = \\frac{1}{4\\pi\\epsilon_0 c^2}\\int \\frac{j(2) \\times \\hat e_{12}}{r_{12}^2}\\,dV_2$ — B directly from the currents, though usually harder to evaluate than the electrostatics-like integrals for A.',
      },
      {
        term: 'Magnetic dipoles and their energies',
        kind: 'law',
        statement: 'A small loop of any shape is a **magnetic dipole** with moment $\\mu = I \\times (\\text{area})$ directed by the right-hand rule; its distant vector potential is $A = \\mu \\times \\hat e_R/4\\pi\\epsilon_0 c^2 R^2$, its torque is $\\tau = \\mu \\times B$, and the workable “mechanical” energy is $$U_{\\text{mech}} = -\\mu \\cdot B.$$',
        detail: 'The total (true) energy is $U_{\\text{total}} = +\\mu \\cdot B$ — the negative of $U_{\\text{mech}}$ — because the sources maintaining the currents must also be counted: a moving loop does electrical work on its current source exactly equal to the mechanical work done on the loop. $U_{\\text{mech}}$ is a “fake” energy that nevertheless gives correct forces by virtual work at constant currents, the exact analog of using $-\\frac{1}{2}CV^2$ at constant voltage for a capacitor. For arbitrary steady currents, $U = \\frac{1}{2}\\int j \\cdot A\\,dV$.',
      },
      {
        term: 'A and quantum mechanics',
        kind: 'insight',
        statement: 'The law that replaces $F = qv \\times B$ in quantum mechanics: a magnetic field changes the **phase** of the amplitude of a particle by $$\\text{phase change} = \\frac{q}{\\hbar}\\int_{\\text{trajectory}} A \\cdot ds,$$ so the interference of two paths depends on $\\oint A \\cdot ds$ — the flux of B between them.',
        detail: 'Outside a long solenoid B is zero but A is not ($A = nIa^2/2\\epsilon_0 c^2 r_0$). In the Bohm–Aharonov experiment a magnetized iron whisker between the two slits shifts the electron interference pattern even though the electrons never enter the field region — A acts where B cannot. The experiment was suggested only in 1956, thirty years after the equation was written. In modern quantum electrodynamics E and B are being replaced by A and φ as the fundamental quantities.',
      },
    ],
    examples: [
      {
        title: 'The field of a long straight wire',
        problem: 'Use Ampère’s law to find the magnetic field outside a long straight wire carrying a current $I$, and evaluate it one meter from a one-ampere current.',
        steps: [
          { label: 'Step 1: Symmetry', text: 'The field lines circle the wire; on a circle of radius $r$ concentric with the wire, B has constant magnitude and points along the path, so $\\oint B \\cdot ds = B \\cdot 2\\pi r$.' },
          { label: 'Step 2: Apply Ampère’s law', text: 'The current through the loop is $I$, so $$B \\cdot 2\\pi r = \\frac{I}{\\epsilon_0 c^2},$$ which gives the inverse-distance law $$B = \\frac{1}{4\\pi\\epsilon_0 c^2}\\frac{2I}{r}.$$' },
          { label: 'Step 3: Insert the exact constant', text: 'The combination $1/4\\pi\\epsilon_0 c^2$ is exactly $10^{-7}$ in the mks system — this equation defines the ampere.' },
          { label: 'Step 4: Evaluate', text: 'At $r = 1$ m and $I = 1$ A: $B = 10^{-7} \\times 2 = 2 \\times 10^{-7}$ webers per square meter. The same calculation run through the vector potential ($A_z = -\\frac{I}{2\\pi\\epsilon_0 c^2}\\ln r_0$, then $B = \\nabla \\times A$) reproduces the identical circulating field.' },
        ],
        result: 'B falls off as $1/r$, and one meter from one ampere of current the field is $2 \\times 10^{-7}$ Wb/m² — the number that fixes the definition of the ampere.',
      },
      {
        title: 'The vector potential outside a solenoid',
        problem: 'A very long solenoid of radius $a$ with $n$ turns per unit length carries a current $I$. Show that although $B = 0$ outside, the vector potential there is $A = nIa^2/2\\epsilon_0 c^2 r_0$, circulating about the axis.',
        steps: [
          { label: 'Step 1: Field inside', text: 'Ampère’s law on a rectangular loop threading the winding gives the uniform interior field $B = nI/\\epsilon_0 c^2$; outside, symmetry plus $\\nabla \\cdot B = 0$ make the field negligible for a very long solenoid.' },
          { label: 'Step 2: Circulation of A', text: 'By Stokes’ theorem the circulation of A around any circle of radius $r_0 > a$ equals the flux of B through it: $2\\pi r_0 A = \\pi a^2 B = \\pi a^2 nI/\\epsilon_0 c^2$ — the same for every such circle, since no B lies between them.' },
          { label: 'Step 3: Solve for A', text: 'Therefore $A = \\frac{nIa^2}{2\\epsilon_0 c^2 r_0}$, perpendicular to the radius at every point, with the constant $K = nIa^2/2\\epsilon_0 c^2$. Taking the curl of this field confirms $\\nabla \\times A = 0$ outside the coil.' },
          { label: 'Step 4: Physical content', text: 'A is not zero even where B is — the stage for the Bohm–Aharonov experiment: an electron confined to the field-free region still has its interference fringes shifted by $\\frac{q}{\\hbar}\\oint A \\cdot ds = \\frac{q}{\\hbar} \\times$ (flux inside).' },
        ],
        result: 'Outside a long solenoid the field vanishes but the potential $A = nIa^2/2\\epsilon_0 c^2 r_0$ survives, carrying in its circulation a memory of the enclosed flux.',
      },
      {
        title: 'The magnetic dipole moment of a small loop',
        problem: 'Find the vector potential and field of a small rectangular loop of sides $a$ and $b$ carrying a current $I$, at distances large compared with the loop size.',
        steps: [
          { label: 'Step 1: Borrow the electrostatic dipole', text: 'The $j_x$ distribution of the loop looks like two oppositely charged rods; the scalar potential of such a pair at large distances is the dipole potential $\\phi = \\frac{1}{4\\pi\\epsilon_0}\\frac{p \\cdot \\hat e_R}{R^2}$ with $p = \\lambda ab$. Replacing $\\lambda$ by $I/c^2$ gives $A_x = -\\frac{Iab}{4\\pi\\epsilon_0 c^2}\\frac{y}{R^3}$, and similarly $A_y = \\frac{Iab}{4\\pi\\epsilon_0 c^2}\\frac{x}{R^3}$.' },
          { label: 'Step 2: Identify the moment', text: 'The strength of A is proportional to the current times the area: define the **magnetic dipole moment** $\\mu = Iab$, directed along the normal to the loop by the right-hand rule.' },
          { label: 'Step 3: Vector form', text: 'The potential circulates about the axis exactly as the current does: $$A = \\frac{1}{4\\pi\\epsilon_0 c^2}\\frac{\\mu \\times \\hat e_R}{R^2}.$$ Taking the curl, the components of B behave exactly like those of E for an electric dipole along the axis.' },
          { label: 'Step 4: Interpretation', text: 'The “dipole field” is misleadingly named: it is produced by a circulating current, not by a pair of magnetic poles. The agreement of the far fields is a consequence of both satisfying source-free equations with zero divergence and zero curl far from the sources.' },
        ],
        result: 'Every small current loop is a magnetic dipole with $\\mu = I \\times$ (area) and distant potential $A = \\mu \\times \\hat e_R/4\\pi\\epsilon_0 c^2R^2$ — the building block of atomic magnetism.',
      },
    ],
    keyTakeaways: [
      'The complete force law is $F = q(E + v \\times B)$; the magnetic force is perpendicular to both v and B and vanishes for charges at rest.',
      'Charge conservation $\\nabla \\cdot j = -\\partial\\rho/\\partial t$ is absolute; magnetostatics is the steady-current special case $\\nabla \\cdot j = 0$.',
      'Ampère’s law $\\oint B \\cdot ds = I_{\\text{enc}}/\\epsilon_0 c^2$ gives $B = (1/4\\pi\\epsilon_0 c^2)(2I/r)$ for a wire and $B = nI/\\epsilon_0 c^2$ inside a solenoid; $1/4\\pi\\epsilon_0 c^2 = 10^{-7}$ defines the ampere.',
      'There are no magnetic charges ($\\nabla \\cdot B = 0$, always); the magnetism of iron is the spin currents of its electrons — a bar magnet is a solenoid.',
      'Because $\\nabla \\cdot B = 0$ identically, $B = \\nabla \\times A$ always; with the gauge $\\nabla \\cdot A = 0$ the components of A satisfy Poisson’s equation with source $j/\\epsilon_0 c^2$, so all of electrostatics transfers component by component.',
      'For a current loop, $\\tau = \\mu \\times B$ and $U_{\\text{mech}} = -\\mu \\cdot B$ give correct forces at constant currents, but the true energy of a dipole is $+\\mu \\cdot B$; for current distributions $U = \\frac{1}{2}\\int j \\cdot A\\,dV$.',
      'Quantum mechanics makes A physical: the phase shift $\\frac{q}{\\hbar}\\oint A \\cdot ds$ moves interference fringes even where B is zero, as the iron-whisker experiment showed.',
    ],
    quiz: [
      {
        q: 'Ampère’s law for steady currents reads $\\oint B \\cdot ds = I/\\epsilon_0 c^2$. What does the constant $1/\\epsilon_0 c^2$ equal in the mks system?',
        options: [`$4\\pi \\times 10^{-7}$, because the whole combination $1/4\\pi\\epsilon_0 c^2$ is exactly $10^{-7}$`, 'It depends on the wire material', '$9 \\times 10^{16}$, the square of the speed of light', '$1/(4\\pi\\epsilon_0)$, the Coulomb constant'],
        answer: 0,
        explanation: 'The field of a long wire is $B = (1/4\\pi\\epsilon_0c^2)(2I/r)$, and $1/4\\pi\\epsilon_0 c^2 = 10^{-7}$ exactly — this equation is what defines the unit of current, the ampere: one meter from a one-ampere wire, $B = 2 \\times 10^{-7}$ Wb/m².',
      },
      {
        q: 'Why can B always be written as the curl of a vector potential?',
        options: ['Because steady currents always close on themselves', 'Because the divergence of B is identically zero — and the divergence of a curl is always zero', 'Because there are no electric fields in magnetostatics', 'Because B is an axial vector rather than a polar vector'],
        answer: 1,
        explanation: 'The third Maxwell equation, $\\nabla \\cdot B = 0$, holds always (statics and dynamics), and any divergence-free field can be written as a curl: $B = \\nabla \\times A$. The representation is not unique — $A^{\\prime} = A + \\nabla\\psi$ works equally well — which is the freedom of gauge.',
      },
      {
        q: 'A small current loop sits in a uniform magnetic field. Which statement about its energy is correct?',
        options: ['Its true energy is always $-\\mu \\cdot B$', 'The workable mechanical energy is $-\\mu \\cdot B$, but the true energy is $+\\mu \\cdot B$ once the current sources are included', 'The energy is zero because the net force on the loop vanishes in a uniform field', 'The energy is $\\frac{1}{2}LI^2$ only if the loop is a solenoid'],
        answer: 1,
        explanation: 'Moving the loop does electrical work on the source keeping the current constant, equal in magnitude to the mechanical work; summing the complete ledger gives $U_{\\text{total}} = -U_{\\text{mech}} = +\\mu \\cdot B$. Virtual work with $U_{\\text{mech}}$ at constant current still gives the right forces — the magnetic analog of using $-\\frac{1}{2}CV^2$ for a capacitor at constant voltage.',
      },
      {
        q: 'In the Bohm–Aharonov arrangement, electrons pass on both sides of a long magnetized whisker but never through its field. What do they experience?',
        options: ['Nothing at all, since B is zero along their paths', 'A shift in their interference pattern proportional to $\\oint A \\cdot ds$, the flux enclosed between the paths', 'A force $qv \\times B$ from the leaking fringing field', 'A change in the magnitude of their momentum but no phase effect'],
        answer: 1,
        explanation: 'The quantum phase change along a path is $\\frac{q}{\\hbar}\\int A \\cdot ds$; the difference between the two paths is $\\frac{q}{\\hbar}\\oint A \\cdot ds$, which equals the enclosed flux even though B is arbitrarily small everywhere the electrons go. A is “real” in the sense that it must be specified at the particle’s position.',
      },
      {
        q: 'A parallel-wire transmission line carries equal and opposite steady currents. The wires will:',
        options: ['Repel, because opposite currents repel', 'Attract, because parallel currents in the same direction attract — but here the currents are opposite, so they repel', 'Neither attract nor repel because the net current is zero', 'Attract with a force proportional to $I^2$ per unit length, since antiparallel currents repel'],
        answer: 0,
        explanation: 'Feynman’s summary of the right-hand-rule bookkeeping: when currents are in the same direction the wires attract; when they move in opposite directions they repel. The observed forces are unchanged if every right-hand rule is replaced by a left-hand rule, because the handedness is used twice — electromagnetic interactions are symmetric under reflection.',
      },
    ],
  },

  // ------------------------------------------------------------------ 12.3
  {
    sectionId: 'hall-ch30-s22',
    readingTime: 11,
    intro: '“What is the use of a newborn baby?” Faraday replied, and the baby became Boulder Dam. Between the qualitative phenomena of Lecture 16 and the complete laws of Lecture 17 stands the central equation of electrodynamics — Faraday’s law — together with Feynman’s famous warning: the convenient “flux rule” works for circuits whose material stays the same, but it is the sum of two physically distinct effects, and each must be invoked to understand the exceptions.',
    objectives: [
      'Define the electromotive force and state the flux rule for the three ways an emf can be generated',
      'Derive Faraday’s law $\\nabla \\times E = -\\partial B/\\partial t$ and its integral form, and explain Lenz’s minus sign',
      'Distinguish motional ($v \\times B$) emf from transformer (induced E-field) emf, and analyze the two standard exceptions to the flux rule',
      'Compute mutual and self-inductances, including the solenoid via magnetic energy, and the bound $|M| \\le \\sqrt{L_1L_2}$',
      'Evaluate the energy $U = \\frac{1}{2}LI^2 = \\frac{\\epsilon_0c^2}{2}\\int B \\cdot B\\,dV$ stored in magnetic fields',
    ],
    concepts: [
      {
        term: 'Electromotive force',
        kind: 'definition',
        statement: 'The **emf** is the tangential force per unit charge integrated once around the complete circuit — the total work done on a single charge that travels the loop. Current flows whenever there is more push in one direction around the circuit than the other.',
        detail: 'Faraday found that emfs arise in three ways: by moving the wire, by moving a magnet near the wire, or by changing a current in a nearby wire. The first is a $v \\times B$ effect; the last two require a new law of physics.',
      },
      {
        term: 'The flux rule',
        kind: 'law',
        statement: 'When the magnetic flux through a circuit changes — for any reason — the emf equals the rate of change of the flux: $$\\mathcal{E} = -\\frac{d}{dt}\\int_S B \\cdot n\\,da.$$',
        detail: 'The rule covers both a moving circuit in a steady field and a fixed circuit in a changing field. For the U-shaped loop with sliding crossbar, flux $wLB$ gives $\\mathcal{E} = wBv$, matching the $v \\times B$ force per unit charge integrated along the bar.',
      },
      {
        term: 'Faraday’s law',
        kind: 'law',
        statement: 'In a region where the magnetic field changes with time, electric fields are generated: $$\\nabla \\times E = -\\frac{\\partial B}{\\partial t},$$ or in integral form $\\oint_\\Gamma E \\cdot ds = -\\frac{d}{dt}(\\text{flux through }\\Gamma)$ for a fixed curve $\\Gamma$.',
        detail: 'It was Faraday’s experimental discovery, first written in differential form by Maxwell as one of his equations. Unlike the electrostatic field of charges, this E-field has a nonzero circulation and exists even in free space, with no conductor at all — the basis of the betatron and of transformer action between coils.',
      },
      {
        term: 'Lenz’s law and inductive inertia',
        kind: 'law',
        statement: 'The emf always acts to oppose the change of flux: if a current flowed in the sense of the emf, it would produce a B opposing the change. A current in a self-inductance has **inertia** — the back-emf fights increases of current and sustains it against decreases.',
        detail: 'This is the minus sign in Faraday’s law. Dramatic demonstrations: a conducting ring flies off an electromagnet when the current is switched on; eddy currents brake a copper-pendulum swinging between magnet poles (cutting slots in the plate kills the effect); a superconducting sheet expels flux entirely — below 3.8 K tin is a perfect conductor and can levitate a magnet.',
      },
      {
        term: 'Two distinct phenomena — and the exceptions',
        kind: 'insight',
        statement: 'Feynman’s caveat: the flux rule is “the combined effects of two quite separate phenomena” — the $v \\times B$ force on charges in moving material, and the induced E-field of $\\nabla \\times E = -\\partial B/\\partial t$. It fails when there is no wire at all or when the path of the current moves within an extended conductor.',
        detail: 'A copper disc rotating in a steady field (Faraday’s generator) develops an emf with no change of linked flux; two rocking plates in a uniform field change their flux linkage enormously with practically no emf. In such cases one must return to the two basic laws, $F = q(E + v \\times B)$ and $\\nabla \\times E = -\\partial B/\\partial t$. “We know of no other place in physics where such a simple and accurate general principle requires for its real understanding an analysis in terms of two different phenomena.”',
      },
      {
        term: 'The betatron',
        kind: 'method',
        statement: 'An electron on a circle of radius $r$ in an axially symmetric, increasing field is accelerated by the induced E-field: $E = \\frac{r}{2}\\frac{dB_{\\text{av}}}{dt}$, so $p = \\frac{qr}{2}\\Delta B_{\\text{av}}$. Staying on the circle requires $$\\Delta B_{\\text{av}} = 2\\Delta B_{\\text{orbit}}.$$',
        detail: 'The average field inside the orbit must grow at twice the rate of the field at the orbit. Betatrons reach tens or hundreds of millions of volts; beyond a few hundred MeV the electrons radiate (synchrotron radiation) and the machine is replaced by the synchrotron.',
      },
      {
        term: 'The alternating-current generator',
        kind: 'method',
        statement: 'A coil of $N$ turns and area $S$ rotating at angular velocity $\\omega$ in a uniform field B has flux $BS\\cos\\omega t$ and emf $$\\mathcal{E} = NBS\\omega\\sin\\omega t = V_0\\sin\\omega t;$$ the current in a resistance $R$ is $I = (V_0/R)\\sin\\omega t$ and the delivered power is $\\mathcal{E}I$.',
        detail: 'The torque on the coil is $\\tau = NISB\\sin\\theta$, and the mechanical work rate $\\omega\\tau$ exactly equals the electrical power $\\mathcal{E}I$ — the motor run backwards is a generator, tied to energy conservation. Slip rings give AC; a commutator that reverses the connections every half turn gives DC. Three coils at 120° make three-phase power and a rotating magnetic field that spins an induction motor.',
      },
      {
        term: 'Mutual inductance',
        kind: 'definition',
        statement: 'For fixed coils with slowly varying currents, the emf in coil 2 is proportional to the rate of change of the current in coil 1: $\\mathcal{E}_2 = M_{21}\\,dI_1/dt$. The constant is the **mutual inductance**, given by Neumann’s double line integral $$M_{12} = M_{21} = -\\frac{1}{4\\pi\\epsilon_0c^2}\\oint_1\\oint_2\\frac{ds_2 \\cdot ds_1}{r_{12}}.$$',
        detail: 'For a long solenoid of $N_1$ turns, length $l$, cross-section $S$ with a coil of $N_2$ turns wound on it, $M_{21} = N_1N_2S/\\epsilon_0c^2l$. The equality $M_{12} = M_{21}$ — however hard the direct computation — follows from the symmetry of the double integral and the vector potential.',
      },
      {
        term: 'Self-inductance and magnetic energy',
        kind: 'law',
        statement: 'The energy stored in building up the current of any inductive system is $$U = \\tfrac{1}{2}LI^2,$$ and equivalently the energy of a distribution of steady currents is $U = \\frac{1}{2}\\int j \\cdot A\\,dV = \\frac{\\epsilon_0c^2}{2}\\int B \\cdot B\\,dV$. For two coupled coils, $U = \\frac{1}{2}L_1I_1^2 + \\frac{1}{2}L_2I_2^2 + MI_1I_2$, which forces $|M| \\le \\sqrt{L_1L_2}$.',
        detail: 'The energy expression in terms of B is more generally valid than the others: it survives into dynamics, whereas $\\frac{1}{2}\\int\\rho\\phi\\,dV$ and $\\frac{1}{2}\\int j \\cdot A\\,dV$ are statics-only. Writing $M = k\\sqrt{L_1L_2}$ defines the coefficient of coupling, near one for tightly coupled transformer coils. A long solenoid of radius $r$, length $L$ and $n$ turns per unit length has $L_{\\text{ind}} = \\pi r^2n^2L/\\epsilon_0c^2$; the inductance of a single wire diverges logarithmically as its diameter shrinks, so the current distribution inside conductors must be faced.',
      },
    ],
    examples: [
      {
        title: 'The sliding crossbar: emf, force and energy bookkeeping',
        problem: 'A U-shaped circuit of resistance $R$ is completed by a crossbar of length $w$ sliding at speed $v$ through a uniform field B perpendicular to the circuit plane. Verify that the mechanical work done equals the electrical energy delivered.',
        steps: [
          { label: 'Step 1: The emf two ways', text: 'The flux is $wLB$, so the flux rule gives $\\mathcal{E} = wBv$; directly, the force per unit charge $vB$ acts along the bar for a length $w$, giving $\\mathcal{E} = wvB$ — the same answer.' },
          { label: 'Step 2: Current and braking force', text: 'The current is $I = \\mathcal{E}/R = vBw/R$, and the field acts back on the bar with $F = BIw = \\frac{B^2w^2}{R}v$ — a velocity-proportional drag, the signature of eddy-current forces (which is how a household wattmeter registers energy).' },
          { label: 'Step 3: Mechanical power in', text: 'The rate of working against the drag is $\\frac{dW}{dt} = Fv = \\frac{v^2B^2w^2}{R}$.' },
          { label: 'Step 4: Electrical power out', text: 'The electrical power delivered to the resistance is $\\mathcal{E}I = (vBw)(vBw/R) = \\frac{v^2B^2w^2}{R}$ — identical. All the mechanical energy appears as electrical energy, and the drag force is largest for the best conductors ($F \\propto 1/R$).' },
        ],
        result: 'Every joule of mechanical work spent pulling the bar returns as heat in R: motional emf conserves energy term by term.',
      },
      {
        title: 'Self-inductance of a long solenoid from the field energy',
        problem: 'A solenoid of radius $r = 2.0$ cm, length $\\ell = 0.50$ m, wound with $n = 1000$ turns per meter, carries $I = 1.0$ A. Find its inductance and stored energy, with $1/\\epsilon_0c^2 = 4\\pi \\times 10^{-7}$.',
        steps: [
          { label: 'Step 1: The interior field', text: 'Inside, $B = nI/\\epsilon_0c^2 = 4\\pi \\times 10^{-7} \\times 1000 \\times 1.0 = 1.26 \\times 10^{-3}$ T; outside, B is negligible.' },
          { label: 'Step 2: Field energy', text: 'The volume is $\\pi r^2\\ell = \\pi(0.020)^2(0.50) = 6.28 \\times 10^{-4}$ m³, so $$U = \\frac{\\epsilon_0c^2}{2}B^2(\\text{Vol}) = \\frac{(1.26 \\times 10^{-3})^2}{2 \\times 4\\pi \\times 10^{-7}}(6.28 \\times 10^{-4}) = 4.0 \\times 10^{-4}\\ \\text{J}.$$' },
          { label: 'Step 3: Equate to ½LI²', text: 'Setting $U = \\frac{1}{2}LI^2$ gives $L = 2U/I^2 = 7.9 \\times 10^{-4}$ H — about 0.79 mH. Symbolically, $L_{\\text{ind}} = \\pi r^2n^2\\ell/\\epsilon_0c^2$ (Feynman’s Eq. 17.50).' },
          { label: 'Step 4: Consistency check', text: 'Direct substitution: $\\pi(0.020)^2(1000)^2(0.50) \\times 4\\pi \\times 10^{-7} = 7.9 \\times 10^{-4}$ H. The inductance depends only on geometry — the $I^2$ in the numerator of the energy is canceled by the $I^2$ hidden in the fields.' },
        ],
        result: 'L ≈ 0.79 mH for this solenoid, storing about 0.4 mJ at one ampere — geometry alone fixes the inductance.',
      },
      {
        title: 'The betatron condition',
        problem: 'An electron is held on a circular orbit of radius $r$ inside an axially symmetric magnetic field that is being increased. Show that the field at the orbit must satisfy $\\Delta B_{\\text{av}} = 2\\Delta B_{\\text{orbit}}$.',
        steps: [
          { label: 'Step 1: Induced accelerating field', text: 'Faraday’s law on the orbit: $2\\pi rE = \\frac{d}{dt}(B_{\\text{av}}\\pi r^2)$, so $E = \\frac{r}{2}\\frac{dB_{\\text{av}}}{dt}$, tangential to the orbit everywhere.' },
          { label: 'Step 2: Momentum growth', text: 'The relativistic equation of motion $qE = dp/dt$ integrates to $p = p_0 + \\frac{qr}{2}\\Delta B_{\\text{av}}$: the momentum is proportional to the average field inside the orbit.' },
          { label: 'Step 3: Orbit constraint', text: 'To stay on the circle, the transverse force must supply the rotation of the momentum: $qvB_{\\text{orbit}} = pv/r$, so $B_{\\text{orbit}} = p/qr$ — the field at the orbit must grow in step with the momentum.' },
          { label: 'Step 4: Combine', text: 'Since $\\Delta p = \\frac{qr}{2}\\Delta B_{\\text{av}}$ requires $\\Delta B_{\\text{orbit}} = \\Delta p/qr = \\frac{1}{2}\\Delta B_{\\text{av}}$, the average field inside the orbit must increase at **twice** the rate of the field at the orbit itself.' },
        ],
        result: 'The 2-to-1 rule of the betatron — the design condition that lets one magnet simultaneously accelerate an electron and hold it on its circle.',
      },
    ],
    keyTakeaways: [
      'The emf is the line integral of force per unit charge around the whole circuit; the flux rule $\\mathcal{E} = -d\\Phi/dt$ summarizes three distinct ways to generate it.',
      'Faraday’s law $\\nabla \\times E = -\\partial B/\\partial t$ is a new law of physics: changing magnetic fields generate circulating electric fields, with or without wires present.',
      'The flux rule is the sum of two separate phenomena — $v \\times B$ forces and induced E-fields; for the rotating disc (emf, no flux change) and the rocking plates (flux change, no emf) it fails, and only the two basic laws give the right answer.',
      'Lenz’s minus sign makes inductance an inertia: self-inductance opposes changes of current, and opening a circuit with a large electromagnet can arc across the switch.',
      'The AC generator obeys $\\mathcal{E} = NBS\\omega\\sin\\omega t$, and its mechanical input power $\\omega\\tau$ equals its electrical output $\\mathcal{E}I$ exactly.',
      'Mutual inductance is symmetric, $M_{12} = M_{21}$, and bounded: $|M| \\le \\sqrt{L_1L_2}$ (coupling coefficient $k$).',
      'Magnetic energy is $U = \\frac{1}{2}LI^2 = \\frac{\\epsilon_0c^2}{2}\\int B\\cdot B\\,dV$; the field form remains valid for dynamic fields, when the $j \\cdot A$ and $\\rho\\phi$ forms fail. A solenoid has $L_{\\text{ind}} = \\pi r^2n^2\\ell/\\epsilon_0 c^2$ — pure geometry, like every inductance.',
    ],
    quiz: [
      {
        q: 'A copper disc rotates in a uniform magnetic field, with one contact on the shaft and one on the rim. The flux through the circuit is constant, yet the galvanometer deflects. Why?',
        options: ['The flux rule has a hidden correction term for rotating bodies', 'The $v \\times B$ force on charges in the moving metal drives an emf that cannot be equated to a flux change', 'The galvanometer is picking up radiation from the spinning disc', 'Charge builds on the rim until the field is screened'],
        answer: 1,
        explanation: 'This is Feynman’s first exception: the material of the “circuit” within the disc is continually changing even though the geometric path is fixed. Only the two basic laws — $F = q(E + v\\times B)$ and $\\nabla\\times E = -\\partial B/\\partial t$ — are always right; the flux rule is their combined result for circuits whose material stays put.',
      },
      {
        q: 'Two curved metal plates in a uniform field make contact at a point and are connected to a galvanometer. Rocking the plates changes the imagined flux linkage enormously, yet almost no emf appears. Why?',
        options: ['The rocking motion is too slow to induce measurable currents', 'The contact resistance dominates the circuit', 'The motions are so small that the $v \\times B$ forces are tiny, and no changing B-field exists to make up the difference', 'The flux through the plates is actually constant during rocking'],
        answer: 2,
        explanation: 'Feynman’s second exception works the other way: the flux-rule bookkeeping assumes the current path is fixed in the material, but here the contact point sweeps to a new location. With small rocking amplitudes, $v \\times B$ is negligible and $\\partial B/\\partial t$ is zero — so no emf, despite the large apparent flux change.',
      },
      {
        q: 'By Lenz’s law, a conducting ring placed on the end of an electromagnet when the current is switched on will:',
        options: ['Be attracted and stick to the core', 'Fly into the air, because the induced current opposes the increase of flux', 'Heal in place without motion, dissipating energy quietly', 'Rotate to align its plane with the field'],
        answer: 1,
        explanation: 'The induced current circulates so as to make a pole opposing the growing field; like poles repel, and the ring leaps. A thin radial cut removes the circulating current and the force disappears — proof that the force comes from the induced currents, not from the field directly.',
      },
      {
        q: 'Two coils have self-inductances $L_1$ and $L_2$ and mutual inductance $M$. Which relation must hold?',
        options: ['$M$ can exceed $\\sqrt{L_1L_2}$ for tightly wound iron-core transformers', '$|M| \\le \\sqrt{L_1L_2}$, because the total energy $\\frac{1}{2}L_1I_1^2 + \\frac{1}{2}L_2I_2^2 + MI_1I_2$ must be positive for all currents', '$M = L_1L_2$ always', '$M$ is zero unless the coils are identical'],
        answer: 1,
        explanation: 'Choosing $I_2 = -(M/L_2)I_1$ nulls the cross term and reduces the energy to $\\frac{1}{2}(L_1 - M^2/L_2)I_1^2$; if the energy of a system built up from zero current were negative, currents would grow spontaneously. Hence $M^2 < L_1L_2$, and $M = k\\sqrt{L_1L_2}$ with $k \\le 1$ the coupling coefficient.',
      },
      {
        q: 'The magnetic energy of a steady-current distribution can be written in terms of the fields as:',
        options: ['$U = \\frac{1}{2}\\int\\rho\\phi\\,dV$, as in electrostatics', '$U = \\frac{\\epsilon_0c^2}{2}\\int B \\cdot B\\,dV$, and this form remains correct for dynamic fields', '$U = \\frac{1}{2}\\int j \\cdot A\\,dV$, equally valid at all frequencies', '$U = \\frac{1}{2}CV^2$ with C the stray capacitance of the circuit'],
        answer: 1,
        explanation: 'Both $\\frac{1}{2}\\int j\\cdot A\\,dV$ and $\\frac{1}{2}LI^2$ are statics-only results; the field form $U = (\\epsilon_0c^2/2)\\int B\\cdot B\\,dV$ (with its electric twin $U = (\\epsilon_0/2)\\int E\\cdot E\\,dV$) survives into electrodynamics — Feynman stresses that the validity of any static formula must be demonstrated over again for the dynamic case.',
      },
    ],
  },
]

export const physCh12Formulas: FormulaEntry[] = [
  {
    chapterId: 'hall-ch25',
    section: '25.13',
    name: 'Dielectric constant and polarization charge',
    formula: 'κ = 1 + χ, ρ_pol = −∇·P',
    note: 'P = χε₀E; nonuniform polarization leaves real charge behind',
    latex: '\\kappa = 1 + \\chi, \\qquad \\rho_{\\text{pol}} = -\\nabla \\cdot P',
  },
  {
    chapterId: 'hall-ch25',
    section: '25.13',
    name: 'Clausius–Mossotti equation',
    formula: '3(κ − 1)/(κ + 2) = Nα',
    note: 'local field E + P/3ε₀; dilute gas limit κ − 1 = Nα',
    latex: '\\frac{3(\\kappa - 1)}{\\kappa + 2} = N\\alpha',
  },
  {
    chapterId: 'hall-ch25',
    section: '25.13',
    name: 'Orientation polarization (Curie’s law)',
    formula: 'P = Np₀²E/3kT',
    note: 'polar molecules; κ − 1 varies as 1/T',
    latex: 'P = \\frac{N p_0^2 E}{3kT}',
  },
  {
    chapterId: 'hall-ch29',
    section: '29.14',
    name: 'Ampère’s law (steady currents)',
    formula: '∮ B·ds = I_enc/ε₀c²',
    note: 'wire: B = (1/4πε₀c²)(2I/r); solenoid: B = nI/ε₀c²',
    latex: '\\oint_\\Gamma B \\cdot ds = \\frac{I_{\\text{enc}}}{\\epsilon_0 c^{2}}',
  },
  {
    chapterId: 'hall-ch29',
    section: '29.14',
    name: 'Vector potential',
    formula: 'B = ∇×A, A′ = A + ∇ψ',
    note: 'gauge freedom; with ∇·A = 0: ∇²A = −j/ε₀c²',
    latex: 'B = \\nabla \\times A, \\qquad A^{\\prime} = A + \\nabla\\psi',
  },
  {
    chapterId: 'hall-ch30',
    section: '30.22',
    name: 'Faraday’s law of induction',
    formula: '∮ E·ds = −d/dt ∮ B·da',
    note: 'emf = −dΦ/dt; differential form ∇×E = −∂B/∂t',
    latex: '\\oint_\\Gamma E \\cdot ds = -\\frac{d}{dt}\\int_S B \\cdot n\\, da',
  },
  {
    chapterId: 'hall-ch30',
    section: '30.22',
    name: 'Energy of an inductance',
    formula: 'U = ½LI²',
    note: 'field form: U = (ε₀c²/2)∫B·B dV, valid even dynamically',
    latex: 'U = \\tfrac{1}{2}LI^{2} = \\frac{\\epsilon_0 c^{2}}{2}\\int B \\cdot B\\, dV',
  },
  {
    chapterId: 'hall-ch30',
    section: '30.22',
    name: 'Coupled coils',
    formula: 'U = ½L₁I₁² + ½L₂I₂² + MI₁I₂, |M| ≤ √(L₁L₂)',
    note: 'M₁₂ = M₂₁; coupling coefficient k = M/√(L₁L₂)',
    latex: 'U = \\tfrac{1}{2}L_1I_1^{2} + \\tfrac{1}{2}L_2I_2^{2} + MI_1I_2',
  },
]
