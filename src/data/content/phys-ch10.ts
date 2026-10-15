import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// The Feynman Lectures on Physics (New Millennium Edition) — Master Library
// Chapter 10: Kinetic Theory and Thermodynamics (Feynman Vol. I, Lectures 39–46)
// Merged into 5 master sections; all worked-example numbers are Feynman’s own.
// Math is LaTeX, rendered by KaTeX through the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const physCh10Content: SectionContent[] = [
  // ------------------------------------------------------------------ 10.1
  {
    sectionId: 'hall-ch19-s23',
    readingTime: 11,
    intro: '“All things are made of atoms” was the sentence Feynman would rescue on the desert island in Chapter 1; now we cash it in. Matter is too complicated to solve directly from Newton’s laws — it takes probability, and eventually quantum mechanics — but one chain of reasoning goes all the way through: molecules bang, pressure results, temperature is the average kinetic energy, and the ideal gas law $PV = NkT$ falls out before we have looked inside a single atom.',
    objectives: [
      'Derive the pressure of a gas from molecular bombardment, obtaining $P = nm\\langle v_x^2\\rangle$ and $PV = (2/3)U$',
      'Apply isotropy to show $\\langle v_x^2\\rangle = \\langle v^2\\rangle/3$ and connect mean kinetic energy to temperature',
      'Derive the adiabatic law $PV^\\gamma = C$ and state $\\gamma$ for monatomic and photon gases',
      'Use the ideal gas law with atoms, moles and $R = N_0 k$',
      'Count the degrees of freedom of a polyatomic molecule and split its energy between translation and internal motion',
    ],
    concepts: [
      {
        term: 'The atomic viewpoint and its limits',
        kind: 'insight',
        statement: 'Matter is too complicated to analyze directly from the laws of mechanics and electricity; the successful approach is a **physical idea of what is big and what is small**, refined by repetition with ever more accuracy.',
        detail: 'Two warnings frame the whole subject. First, the mathematics wants probability theory — we ask not where every atom goes but how many go here on the average (Chapter 2’s random walk returns below). Second, atoms actually obey quantum mechanics, so several classical results will be fundamentally wrong; Feynman flags each one as it appears. The reward for tolerating this roughness is astonishing: from almost no machinery we will derive pressure, temperature, evaporation, diffusion and the laws of thermodynamics.',
      },
      {
        term: 'Pressure as bombardment',
        kind: 'definition',
        statement: 'Gas pressure is the force per unit area that a piston must supply to stand still against molecular bombardment: $$P = F/A, \\qquad dW = -P\\,dV.$$',
        detail: 'If our ears were a few times more sensitive we would hear a perpetual rushing — the eardrum is under an irregular tattoo of molecular hits, matched from both sides so the net force is zero (until an elevator or a bad cold unbalances it). The piston receives momentum per second from the collisions; our holding force must pour momentum back at exactly that rate. The minus sign in $dW = -P\\,dV$ says compressing a gas does work on it.',
      },
      {
        term: 'The momentum bookkeeping',
        kind: 'method',
        statement: 'One elastic hit on the piston delivers $2mv_x$; the atoms reaching unit area per second number $\\tfrac{1}{2}n\\langle v_x\\rangle$-scaled by velocity, so averaging both factors: $$P = nm\\langle v_x^2\\rangle.$$',
        detail: 'The count: in time $t$, every atom within a distance $v_x t$ of the wall arrives — that is $nv_x t A$ atoms per area $A$, i.e. $nv_x$ per second (only half are headed toward the piston). Each brings $2mv_x$ of momentum, so the force per area is $2nmv_x^2$ for one speed class, and $nm\\langle v_x^2\\rangle$ once the averaging is done honestly — the factor of 2 cancels the factor of one-half headed the wrong way.',
      },
      {
        term: 'Isotropy and the two-thirds',
        kind: 'law',
        statement: 'Nothing distinguishes the $x$-direction, so $\\langle v_x^2\\rangle = \\langle v_y^2\\rangle = \\langle v_z^2\\rangle = \\tfrac{1}{3}\\langle v^2\\rangle$, giving $$P = \\tfrac{2}{3}n\\left\\langle \\tfrac{1}{2}mv^2\\right\\rangle, \\qquad PV = \\tfrac{2}{3}U \\ \\ \\text{(monatomic)}.$$',
        detail: 'For a monatomic gas with no internal motions, the center-of-mass kinetic energy is the whole internal energy $U$. Writing more generally $PV = (\\gamma - 1)U$ — a hundred-year-old convention — the monatomic value is $\\gamma = 5/3$. This single formula already answers why equal volumes of gas at equal pressure and temperature contain equal numbers of molecules, Avogadro’s insight, deduced from Newton’s laws.',
      },
      {
        term: 'Adiabatic compression',
        kind: 'law',
        statement: 'If no heat leaks in or out, the work done all goes into $U$, and with $\\gamma$ constant the gas obeys $$PV^\\gamma = C \\ \\text{(constant)}.$$',
        detail: 'The derivation is three lines: $dU = (P\\,dV + V\\,dP)/(\\gamma - 1)$ from $U = PV/(\\gamma - 1)$, plus the adiabatic condition $-P\\,dV = dU$, giving $\\gamma P\\,dV + V\\,dP = 0$, which integrates to $\\gamma\\ln V + \\ln P = \\ln C$. Adiabatic means “heat does not go through” (Greek $a$ + $dia$ + $bainein$). A squeezed gas heats — Chapter 10.4 will make this the workhorse of every engine cycle.',
      },
      {
        term: 'The photon gas',
        kind: 'insight',
        statement: 'The same kinetic argument with photons (momentum $p = E/c$) gives $$PV = U/3, \\qquad \\gamma = 4/3, \\qquad PV^{4/3} = C$$ — the compressibility of radiation inside very hot stars.',
        detail: 'Each photon kick carries $2p_x$ instead of $2mv_x$, and $\\mathbf{p}\\cdot\\mathbf{v} = pc$ is the photon’s energy; redoing the average gives $PV = N\\langle p\\cdot v\\rangle/3 = U/3$. The sun is not hot enough for this to dominate (too many atoms remain), but in still hotter stars radiation pressure computed this way matters structurally.',
      },
      {
        term: 'Temperature is average kinetic energy',
        kind: 'definition',
        statement: 'Two gases in thermal equilibrium have equal average molecular kinetic energies; defining the Kelvin scale so that this average is linear in $T$ gives $$\\left\\langle \\tfrac{1}{2}mv^2\\right\\rangle = \\tfrac{3}{2}kT, \\qquad k = 1.38\\times 10^{-23}\\ \\text{J/K},$$ with $\\tfrac{1}{2}kT$ per independent direction of motion.',
        detail: 'The proof that heavy and light atoms share kinetic energy comes from watching collisions in the center-of-mass system: the relative velocity ends up equally likely to point anywhere, which forces $\\langle m_1v_1^2\\rangle = \\langle m_2v_2^2\\rangle$ (the average of $\\mathbf{v}_1\\cdot\\mathbf{v}_2$ vanishes). A jiggling piston between two gases reaches the same mean-square speed of bombardment on both sides. The centigrade scale is this same scale with zero placed at 273.16 K. The definition is free of any particular substance — a theme that returns with full force in Section 10.4.',
      },
      {
        term: 'The ideal gas law, moles and R',
        kind: 'law',
        statement: 'Inserting $\\tfrac{3}{2}kT$ into the pressure formula yields $$PV = NkT,$$ with $N$ the number of atoms; chemists count in moles, $N_0 = 6.02\\times 10^{23}$, and write $PV = NRT$ with $R = N_0k = 8.317\\ \\text{J·mol}^{-1}\\text{K}^{-1}$.',
        detail: 'At the same temperature, pressure and volume, the number of atoms is fixed — an amazing conclusion from Newton’s laws, and the physical content of Avogadro’s rule that equal volumes of combining gases stand in simple integer proportions. A mole is the number of atoms in 12 grams of carbon-12; molecular weights are masses in grams of a mole. Nothing in the law cares what the gas is made of.',
      },
      {
        term: 'Molecules with internal parts',
        kind: 'theorem',
        statement: 'An $r$-atom molecule has $3r$ degrees of freedom and total kinetic energy $\\tfrac{3}{2}rkT$: $\\tfrac{3}{2}kT$ for the center-of-mass flight, and $\\tfrac{3}{2}(r-1)kT$ of internal rotation and vibration — **whether or not forces hold the atoms together**.',
        detail: 'The theorem that each independent direction contributes $\\tfrac{1}{2}kT$ survives forces: collisions exchange energy only through how fast things move at the instant of contact, so even a spring-coupled diatomic molecule shares $\\tfrac{3}{2}kT$ per atom. For the diatomic pair: two atoms at $\\tfrac{3}{2}kT$ each equals CM translation $\\tfrac{3}{2}kT$ plus rotation $kT$ (two axes) plus vibration $\\tfrac{1}{2}kT$ — a bookkeeping that Section 10.2 will test against experiment, with famous consequences.',
      },
    ],
    examples: [
      {
        title: 'Deriving PV = NkT from the bombardment',
        problem: 'A box of volume $V$ contains $N$ monatomic gas molecules. Reproduce Feynman’s derivation of the ideal gas law from the momentum delivered to a piston of area $A$.',
        steps: [
          { label: 'Step 1: Momentum per hit', text: 'An atom arriving with $x$-velocity $v_x$ rebounds elastically, delivering $2mv_x$ of momentum to the piston.' },
          { label: 'Step 2: Hits per second', text: 'In time $t$, every atom within $v_x t$ of the piston arrives: $nv_x tA$ of them. Per second that is $nv_xA$ — and only half the atoms are headed that way, so $\\tfrac{1}{2}nv_xA$ on average per speed class.' },
          { label: 'Step 3: Force and pressure', text: 'Force = (momentum per hit) times (hits per second): $F = 2mv_x \\cdot nv_xA$, so $P = F/A = nm\\langle v_x^2\\rangle$ once averaged over all molecules.' },
          { label: 'Step 4: Use isotropy', text: `$\\langle v_x^2\\rangle = \\tfrac{1}{3}\\langle v^2\\rangle$, so $P = \\tfrac{2}{3}n\\langle\\tfrac{1}{2}mv^2\\rangle$; multiplying by $V$ with $N = nV$: $$PV = N\\cdot\\tfrac{2}{3}\\left\\langle\\tfrac{1}{2}mv^2\\right\\rangle.$$` },
          { label: 'Step 5: Define temperature', text: 'The mean kinetic energy is a property only of temperature; putting $\\langle\\tfrac{1}{2}mv^2\\rangle = \\tfrac{3}{2}kT$ gives $PV = NkT$ — Avogadro’s law as a theorem of Newtonian mechanics.' },
        ],
        result: 'Five short steps from “atoms bounce elastically” to $PV = NkT$, with the bonus $PV = (2/3)U$ for a monatomic gas.',
      },
      {
        title: 'How fast is helium at room temperature?',
        problem: 'Compute the root-mean-square speed of helium atoms (mass $m = 6.6\\times 10^{-27}$ kg) in a room at $T = 300$ K.',
        steps: [
          { label: 'Step 1: Mean kinetic energy', text: '$\\langle\\tfrac{1}{2}mv^2\\rangle = \\tfrac{3}{2}kT = 1.5 \\times 1.38\\times 10^{-23} \\times 300 = 6.2\\times 10^{-21}$ J.' },
          { label: 'Step 2: Mean square speed', text: '$\\langle v^2\\rangle = 2(6.2\\times 10^{-21})/m = 1.24\\times 10^{-20}/6.6\\times 10^{-27} \\approx 1.9\\times 10^{6}\\ \\text{m}^2/\\text{s}^2$.' },
          { label: 'Step 3: Root mean square', text: '$v_\\text{rms} = \\sqrt{1.9\\times 10^{6}} \\approx 1.4\\times 10^{3}$ m/s — helium atoms cross a lecture hall in a few milliseconds.' },
          { label: 'Step 4: Heavy molecules go slower', text: 'The same $\\tfrac{3}{2}kT$ belongs to any gas at 300 K: an oxygen molecule, 8 times heavier than helium-4 per atom-pair, moves with $\\tfrac{1}{\\sqrt{8}}$ of the speed — equal energy, unequal fleetness.' },
        ],
        result: 'About 1.4 km/s for helium at 300 K; thermal speeds are far above sound speed per molecule, and $\\tfrac{3}{2}kT \\approx 6.2\\times 10^{-21}$ J sets the energy scale of everyday chemistry.',
      },
      {
        title: 'Adiabatic squeeze of a monatomic gas',
        problem: 'A monatomic ideal gas at $P_1 = 1$ atm and $T_1 = 300$ K is compressed quickly to half its volume. Find the final pressure and temperature.',
        steps: [
          { label: 'Step 1: The adiabatic law', text: 'With $\\gamma = 5/3$ for a monatomic gas: $P_2V_2^{5/3} = P_1V_1^{5/3}$.' },
          { label: 'Step 2: Pressure ratio', text: 'With $V_2 = V_1/2$: $P_2 = P_1(V_1/V_2)^{5/3} = 2^{5/3}P_1 \\approx 3.17P_1$ — more than the factor 2 an isotherm would give.' },
          { label: 'Step 3: Temperature from the adiabats', text: 'Since $TV^{\\gamma-1} = $ const along an adiabat: $T_2 = T_1(V_1/V_2)^{2/3} = 2^{2/3}\\times 300 \\approx 476$ K.' },
          { label: 'Step 4: Why it heats', text: 'All the piston work went into molecular energy — no heat escaped, so the faster bombardment means both higher pressure and higher temperature. Diesel engines live on this effect.' },
        ],
        result: 'Halving the volume adiabatically multiplies the pressure by $2^{5/3} \\approx 3.2$ and drives the temperature from 300 K to about 476 K.',
      },
    ],
    keyTakeaways: [
      'Pressure is molecular bombardment: each elastic hit gives $2mv_x$, the arriving rate is $nv_x$ per unit area, and $P = nm\\langle v_x^2\\rangle$.',
      'Isotropy supplies the one-third: $P = (2/3)n\\langle\\text{KE}\\rangle$, so $PV = (2/3)U$ for a monatomic gas and $PV = (\\gamma - 1)U$ generally.',
      'With no heat exchange, $PV^\\gamma = C$; a monatomic gas has $\\gamma = 5/3$, a photon gas $4/3$.',
      'Temperature is defined by the mean translational kinetic energy: $\\langle\\frac{1}{2}mv^2\\rangle = \\frac{3}{2}kT$ with $k = 1.38\\times 10^{-23}$ J/K, regardless of species.',
      '$PV = NkT$ in atoms or $PV = NRT$ in moles, with $R = N_0k = 8.317$ J·mol⁻¹·K⁻¹ — Avogadro’s equal-volumes rule derived from Newton’s laws.',
      'An $r$-atom molecule carries $\\frac{3}{2}rkT$: translation $\\frac{3}{2}kT$ plus internal rotation and vibration $\\frac{3}{2}(r-1)kT$, forces or no forces.',
      'The classical program has known cracks — quantum mechanics will partially unlearn some of these results, as Section 10.2 discovers.',
    ],
    quiz: [
      {
        q: 'In Feynman’s derivation, why does the factor of 2 from the elastic rebound ($2mv_x$) disappear from the final pressure formula?',
        options: [
          'Because the collisions are not really elastic',
          'Because only half the molecules are moving toward the piston at any moment',
          'Because the piston area cancels it',
          'Because $v_x$ averages to zero',
        ],
        answer: 1,
        explanation: 'Hits per second number $nv_xA$ only for atoms headed at the wall — half the population — so the 2 in $2mv_x$ is cancelled by the averaging over directions, leaving $P = nm\\langle v_x^2\\rangle$.',
      },
      {
        q: 'Why is $\\langle v_x^2\\rangle$ exactly one-third of $\\langle v^2\\rangle$?',
        options: [
          'Because molecules are spherical',
          'Because the three velocity components are equal and independent on average — nothing distinguishes a direction',
          'Because the gas is monatomic',
          'Because the piston reflects molecules at half speed',
        ],
        answer: 1,
        explanation: 'No direction is special in equilibrium, so $\\langle v_x^2\\rangle = \\langle v_y^2\\rangle = \\langle v_z^2\\rangle$, and the three add to $\\langle v^2\\rangle$. This isotropy step is what produces the two-thirds in $PV = (2/3)U$.',
      },
      {
        q: 'The Boltzmann constant $k = 1.38\\times 10^{-23}$ J/K fixes the conversion between temperature and:',
        options: [
          'Total molecular energy per mole',
          'Mean translational kinetic energy per molecule, $\\frac{3}{2}kT$',
          'The pressure of one gram of gas',
          'The specific heat of every substance',
        ],
        answer: 1,
        explanation: 'Temperature is defined so the mean kinetic energy is linear in $T$: $\\frac{3}{2}kT$ per molecule, $\\frac{1}{2}kT$ per independent direction. The scale is otherwise arbitrary — Kelvin is a convention.',
      },
      {
        q: 'A monatomic ideal gas is compressed adiabatically to half its volume. The pressure multiplies by about:',
        options: ['2', '2.5', '3.2', 'It stays constant'],
        answer: 2,
        explanation: 'With $\\gamma = 5/3$: $P_2 = P_1 2^{5/3} \\approx 3.17P_1$. The extra factor beyond 2 is the temperature rise — the work done on the gas went into molecular kinetic energy.',
      },
      {
        q: 'For a gas of photons in a box, kinetic theory predicts:',
        options: [
          '$PV = \\frac{2}{3}U$ exactly as for atoms',
          `$PV = \\frac{1}{3}U$, so $\\gamma = 4/3$`,
          `$PV = U$ with $\\gamma = 1$`,
          'Photons exert no pressure because they are massless',
        ],
        answer: 1,
        explanation: 'Each photon carries momentum $p = E/c$, and $\\mathbf{p}\\cdot\\mathbf{v} = pc = E$, so $PV = N\\langle\\mathbf{p}\\cdot\\mathbf{v}\\rangle/3 = U/3$ — the compressibility law of radiation in very hot stars.',
      },
    ],
  },

  // ------------------------------------------------------------------ 10.2
  {
    sectionId: 'hall-ch19-s24',
    readingTime: 11,
    intro: 'Statistical mechanics asks two questions: how are molecules distributed in space when forces act on them, and how are they distributed in velocity? The answers are astonishingly clean — space arrangements follow Boltzmann’s exponential $e^{-\\text{P.E.}/kT}$, velocities follow the same law in kinetic energy, and every quadratic term earns $\\tfrac{1}{2}kT$. Then experiment delivers the historical slap: the specific heats of hydrogen and oxygen refuse to obey, and the crack that opens is the one quantum mechanics eventually fills.',
    objectives: [
      'Derive the exponential atmosphere $n = n_0e^{-mgh/kT}$ from hydrostatic balance',
      'State Boltzmann’s law for arbitrary conservative forces and the local rule $F = kT\\,d(\\ln n)/dx$',
      'Reconstruct the Maxwell distribution of molecular speeds from the atmosphere trick and normalize it',
      'Count the $kT$ budget of monatomic and diatomic molecules and compare predicted $\\gamma$ with Table 40-1',
      'Explain the classical failure and the quantum fix: populations $e^{-\\Delta E/kT}$ and frozen-out modes',
    ],
    concepts: [
      {
        term: 'The two questions of statistical mechanics',
        kind: 'insight',
        statement: 'Equilibrium theory asks how molecules are spread **in space** (depends on the forces) and **in velocity** (never depends on the forces) — and the two answers are independent.',
        detail: 'Collision rates that redistribute velocities do not depend on external forces, so the velocity distribution is a universal object, derivable once for all gases. The spatial distribution depends on potential energy alone. Limiting ourselves to thermal equilibrium is what earns the name “statistical mechanics” rather than kinetic theory.',
      },
      {
        term: 'The exponential atmosphere',
        kind: 'law',
        statement: 'In an isothermal atmosphere the number density falls with height as $$n(h) = n_0e^{-mgh/kT}$$ — the potential energy $mgh$ sits in the exponent, divided by $kT$.',
        detail: 'Pressure must fall by the weight of gas in each slab: $dP = -mgn\\,dh$, and with $P = nkT$ at constant $T$ the differential equation $dn/dh = -(mg/kT)n$ integrates to the exponential. In a real atmosphere the temperature is not uniform (winds mix it), but the tendency remains: oxygen falls away with altitude faster than nitrogen, and hydrogen — the lightest — dominates at very great heights because its exponential dies slowest.',
      },
      {
        term: 'Boltzmann’s law',
        kind: 'law',
        statement: 'For any conservative force, the equilibrium density is $$n = (\\text{const})\\,e^{-\\text{P.E.}/kT}$$ — probability of a spatial arrangement varies exponentially with minus its potential energy over $kT$.',
        detail: 'The local form $F = kT\\,d(\\ln n)/dx$ says the force that balances the density gradient is $kT$ times the logarithmic gradient. If the force is not conservative, no thermal equilibrium exists at all — atoms running around cyclic paths would generate or lose energy endlessly. For many interacting molecules the probability of a whole arrangement is the exponential of minus the total pair potential energy $\\sum V(r_{ij})$ over $kT$: this one formula contains, in principle, the liquefaction and freezing of every substance — the “many-body problem” whose difficulty is not writing the law but evaluating it.',
      },
      {
        term: 'The Maxwell distribution',
        kind: 'theorem',
        statement: 'The fraction of molecules with a velocity component above $u$ falls as $e^{-mu^2/2kT}$, so the distribution of a single component is $$f(u)\\,du = \\sqrt{\\frac{m}{2\\pi kT}}\\ e^{-mu^2/2kT}\\,du,$$ and the three components multiply: $f(v_x,v_y,v_z) \\propto e^{-m(v_x^2 + v_y^2 + v_z^2)/2kT}$.',
        detail: 'Feynman’s trick: only molecules with vertical speed exceeding $u$ can climb to height $h$ where $\\tfrac{1}{2}mu^2 = mgh$; the density there is down by $e^{-mgh/kT}$, so the fraction passing below with $v_z > u$ is exactly $e^{-mu^2/2kT}$. Differentiating the flux integral recovers $f(u) \\propto e^{-mu^2/2kT}$, and the normalizing constant uses the Gaussian integral $\\int_{-\\infty}^{\\infty}e^{-x^2}dx = \\sqrt{\\pi}$ (proved by squaring and going to polar coordinates). Collisions do not spoil it: the argument tracks energies, and energy merely changes hands.',
      },
      {
        term: 'Learn it in momentum',
        kind: 'insight',
        statement: 'The distribution of momenta is $f(p)\\,dp = Ce^{-\\text{K.E.}/kT}dp$ per unit momentum range — the form that remains true **even in relativity**, unlike the velocity form.',
        detail: 'Velocity and momentum are proportional only at low speed; at relativistic speeds the momentum variable keeps the exponential law. The general slogan to remember: probabilities go as $e^{-\\text{energy}/kT}$, kinetic or potential — one easy rule with rather beautiful reach.',
      },
      {
        term: 'Equipartition: each quadratic term gets ½kT',
        kind: 'law',
        statement: 'Every independent quadratic term in the energy — each degree of freedom — carries an average $\\tfrac{1}{2}kT$, whatever the mass, spring constant or moment of inertia involved.',
        detail: 'This is the “principle of equal a priori probabilities” in action: collisions scramble energy among all quadratic reservoirs until each is equally filled. For a harmonic vibration the potential energy is another quadratic term, so a vibrating mode holds $\\tfrac{1}{2}kT$ kinetic plus $\\tfrac{1}{2}kT$ potential — a full $kT$ per mode. In Chapter 6’s language, every harmonic oscillator in thermal equilibrium carries average energy $kT$ classically.',
      },
      {
        term: 'The specific-heat budget',
        kind: 'method',
        statement: 'Counting the $\\tfrac{1}{2}kT$ reservoirs predicts $\\gamma$: monatomic $U = \\tfrac{3}{2}NkT$ gives $\\gamma = 5/3$; a rigid diatomic rotor $\\tfrac{5}{2}kT$ gives $\\gamma = 1.40$; a springy diatomic $\\tfrac{7}{2}kT$ gives $\\gamma = 9/7 = 1.286$.',
        detail: 'The diatomic bookkeeping: translation $\\tfrac{3}{2}kT$, rotation about two axes $kT$, vibration ($\\tfrac{1}{2}$ kinetic + $\\tfrac{1}{2}$ potential) $kT$ — total $\\tfrac{7}{2}kT$. Measured $\\gamma$: He 1.660, Ar 1.668, Kr 1.68 (monatomic — perfect); H₂ 1.404, O₂ 1.399, HI 1.40 at 100°C (rigid!); Br₂ 1.32 at 300°C, I₂ 1.30 (nearly springy); NH₃ 1.310; C₂H₆ 1.22 (eight atoms — classical counting makes no sense at all).',
      },
      {
        term: 'The failure of classical physics',
        kind: 'insight',
        statement: 'Maxwell, in his 1859 summary of the dynamical theory of gases, closed by proving that his own $\\tfrac{1}{2}kT$ theorem made the known relation between the two specific heats impossible — “the greatest difficulty yet encountered by the molecular theory.”',
        detail: 'Nothing classical fixes it: adding more energy modes only pushes $\\gamma$ down toward 1, away from experiment; including the electrons’ internal motions makes it worse. Worse still, $\\gamma$ of hydrogen varies with temperature — from about 1.6 at $-185°$C to 1.3 at 2000°C — which no constant bookkeeping allows. Jeans, around 1890, guessed the truth: some motions “freeze out” at low temperature — a phrase with no meaning in classical mechanics.',
      },
      {
        term: 'The quantum fix',
        kind: 'law',
        statement: 'In quantum statistical mechanics the relative probability of occupying a state of energy $E_i$ is $$\\frac{P_1}{P_0} = \\frac{e^{-E_1/kT}}{e^{-E_0/kT}} = e^{-(E_1 - E_0)/kT},$$ and a harmonic oscillator’s levels are spaced $\\hbar\\omega$ apart — so modes with $\\hbar\\omega \\gg kT$ are simply not excited.',
        detail: 'Statistical mechanics is one of the subjects quantum mechanics makes easier, not harder: replace the smooth classical energy by discrete levels and keep the exponential. If $kT \\ll \\hbar\\omega$, the chance of the first excited state is tiny and the oscillator’s energy stays near the ground value — frozen, contributing nothing to the specific heat. Iodine is heavy, its vibrational $\\hbar\\omega$ low, so room-temperature $kT$ exceeds the spacing and it vibrates classically ($\\gamma = 1.30$); hydrogen’s stiff, light vibration has $\\hbar\\omega$ well above room-temperature $kT$, so its vibration is frozen and $\\gamma$ sits at the rigid value. Rotation too is quantized, with spacings that only hydrogen (the lightest rotor) fails to fill at room temperature — Chapter 15’s oscillators, arriving early.',
      },
    ],
    examples: [
      {
        title: 'Oxygen versus hydrogen at 8 kilometers',
        problem: 'In an isothermal atmosphere at $T = 293$ K, compare the densities of oxygen ($m = 5.3\\times 10^{-26}$ kg) and hydrogen ($m = 3.3\\times 10^{-27}$ kg) at $h = 8$ km relative to ground level.',
        steps: [
          { label: 'Step 1: The thermal energy scale', text: '$kT = 1.38\\times 10^{-23} \\times 293 = 4.0\\times 10^{-21}$ J.' },
          { label: 'Step 2: Oxygen exponent', text: '$mgh/kT = (5.3\\times 10^{-26})(9.8)(8\\times 10^3)/(4.0\\times 10^{-21}) \\approx 1.04$, so $n(h)/n_0 = e^{-1.04} \\approx 0.35$ — oxygen has lost two-thirds of its density.' },
          { label: 'Step 3: Hydrogen exponent', text: '$mgh/kT \\approx 0.065$ for the sixteen-fold lighter molecule, so $n(h)/n_0 \\approx 0.94$ — hydrogen barely notices 8 km.' },
          { label: 'Step 4: Extrapolate', text: 'At 80 km the exponents are roughly 10 and 0.65: oxygen is down by $e^{-10} \\approx 4.5\\times 10^{-5}$ while hydrogen is still above half — the light gas owns the top of every atmosphere.' },
        ],
        result: 'At 8 km: O₂ down to about 35%, H₂ still at 94%. The exponential sorts atmospheres by mass — Feynman’s Fig. 40-2 in numbers.',
      },
      {
        title: 'The diatomic kT budget versus experiment',
        problem: 'Predict $\\gamma$ for a diatomic gas treated as (a) a rigid rotor and (b) two atoms on a spring, and compare with Feynman’s Table 40-1.',
        steps: [
          { label: 'Step 1: Rigid rotor', text: 'Translation $\\tfrac{3}{2}kT$ plus rotation about two axes $kT$ gives $\\tfrac{5}{2}kT$ per molecule; then $\\gamma - 1 = 2/5$ and $\\gamma = 1.40$.' },
          { label: 'Step 2: Springy molecule', text: 'Add vibration, one kinetic plus one potential half: $\\tfrac{1}{2}kT + \\tfrac{1}{2}kT = kT$, total $\\tfrac{7}{2}kT$, so $\\gamma - 1 = 2/7$ and $\\gamma = 9/7 = 1.286$.' },
          { label: 'Step 3: Compare with measurement', text: 'H₂ 1.404, O₂ 1.399, HI 1.40 — all at the rigid value 1.40, not the springy 1.286. Br₂ 1.32 and I₂ 1.30 sit near the springy value; He 1.660, Ar 1.668 confirm the monatomic $5/3$.' },
          { label: 'Step 4: The dilemma', text: 'The same molecule cannot be both rigid and springy — and worse, $\\gamma$ of hydrogen drifts from 1.6 at $-185°$C to 1.3 at 2000°C. No classical counting can produce this.' },
        ],
        result: 'Classical equipartition brackets the data (1.40 and 1.286) but cannot choose between them per molecule or per temperature — the specific-heat failure that broke classical physics.',
      },
      {
        title: 'Freeze-out arithmetic',
        problem: 'A molecular vibration has level spacing $\\hbar\\omega = 10kT$ at some temperature. What fraction of molecules occupy the first excited vibrational state, and what does the mode contribute to the specific heat?',
        steps: [
          { label: 'Step 1: Boltzmann ratio', text: 'The relative population of the first excited state is $P_1/P_0 = e^{-\\hbar\\omega/kT} = e^{-10} \\approx 4.5\\times 10^{-5}$ — one molecule in twenty thousand.' },
          { label: 'Step 2: Energy in the mode', text: 'With essentially every oscillator in its ground state, a small temperature change shifts almost nothing: the mode stores and releases essentially no energy.' },
          { label: 'Step 3: Specific heat contribution', text: 'The frozen mode contributes no $\\tfrac{1}{2}kT$ reservoirs — hydrogen’s vibration is exactly this case at ordinary temperatures, which is why its $\\gamma$ measures rigid at 1.40.' },
          { label: 'Step 4: The thaw', text: 'Heat the gas and $kT$ climbs toward $\\hbar\\omega$: level 2, then 3 acquire population, the levels blur toward a continuum, and the classical $kT$ per oscillator returns — the measured $\\gamma$ of hydrogen slides from 1.6 toward 1.3 as temperature rises.' },
        ],
        result: 'A spacing of $10kT$ leaves $4.5\\times 10^{-5}$ of molecules excited — the mode is frozen out, exactly Jeans’s phrase, finally made quantitative by quantum mechanics.',
      },
    ],
    keyTakeaways: [
      'The isothermal atmosphere is exponential: $n = n_0e^{-mgh/kT}$ — potential energy over $kT$ in the exponent; light gases dominate at height.',
      'Boltzmann’s law is general: probability of a spatial arrangement goes as $e^{-\\text{P.E.}/kT}$, and equilibrium exists only for conservative forces.',
      'The Maxwell distribution of a velocity component is $\\sqrt{m/2\\pi kT}\\,e^{-mu^2/2kT}$; the three components multiply into a function of $v^2$ alone.',
      'State the law in momentum, not velocity: $f(p) \\propto e^{-\\text{K.E.}/kT}$ survives relativity intact.',
      'Equipartition gives every quadratic term $\\tfrac{1}{2}kT$: $\\gamma = 5/3$ monatomic, 1.40 rigid diatomic, 1.286 springy diatomic.',
      'The classical theory fails on specific heats — Maxwell called it the greatest difficulty of the molecular theory, and $\\gamma(H_2)$ varies with temperature.',
      'The quantum fix replaces smooth energy by levels with Boltzmann populations $e^{-\\Delta E/kT}$; modes with $\\hbar\\omega \\gg kT$ freeze out and stop counting.',
    ],
    quiz: [
      {
        q: 'Why does hydrogen dominate the very top of an isothermal atmosphere?',
        options: [
          'Hydrogen is chemically inert and does not react away',
          'Its small mass makes the exponent $mgh/kT$ small, so its density falls slowest with height',
          'Hydrogen is hotter than the other gases at altitude',
          'Thermal diffusion pushes light molecules upward',
        ],
        answer: 1,
        explanation: 'Each species follows $n = n_0e^{-mgh/kT}$; the heavier the molecule, the faster the exponential dies. At great heights all the heavy exponentials have decayed and only hydrogen remains appreciable.',
      },
      {
        q: 'The normalizing constant of the Maxwell distribution $f(u) = Ce^{-mu^2/2kT}$ is $C = \\sqrt{m/2\\pi kT}$, obtained from which integral?',
        options: [
          `$\\int_0^\\infty e^{-x}dx = 1$`,
          '$\\int_{-\\infty}^{\\infty} e^{-x^2}dx = \\sqrt{\\pi}$, proved by squaring and switching to polar coordinates',
          `$\\int e^{-x^2/2}dx = 2$`,
          'The integral does not exist in closed form',
        ],
        answer: 1,
        explanation: 'Feynman proves $I^2 = \\int\\!\\int e^{-(x^2+y^2)}dxdy = \\int 2\\pi r e^{-r^2}dr = \\pi$, so $I = \\sqrt{\\pi}$; normalization then fixes $C$.',
      },
      {
        q: 'A rigid diatomic molecule (no vibration) has $\\gamma$ equal to:',
        options: ['5/3 ≈ 1.667', '9/7 ≈ 1.286', '7/5 = 1.40', '4/3 ≈ 1.333'],
        answer: 2,
        explanation: 'Translation contributes $\\tfrac{3}{2}kT$ and rotation about two axes adds $kT$: $U = \\tfrac{5}{2}NkT$, so $\\gamma - 1 = 2/5$ and $\\gamma = 1.40$ — the measured value for H₂, O₂ and HI at 100°C.',
      },
      {
        q: 'What did Maxwell identify as “the greatest difficulty yet encountered by the molecular theory”?',
        options: [
          'The viscosity of gases was too large to compute',
          'The equipartition theorem made the known relation between the two specific heats impossible',
          'The exponential atmosphere disagreed with mountain measurements',
          'Brownian motion had no explanation',
        ],
        answer: 1,
        explanation: 'His 1859 paper proved the $\\tfrac{1}{2}kT$ theorem and then showed it contradicted the measured specific heats — the first clear indication that classical physics itself was wrong.',
      },
      {
        q: 'In the quantum fix, a harmonic oscillator with level spacing $\\hbar\\omega \\gg kT$ will:',
        options: [
          'Carry the full classical energy $kT$ as before',
          'Be found almost entirely in its ground state, contributing nothing to the specific heat',
          'Gain energy in units of $kT$ instead of $\\hbar\\omega$',
          'Stop radiating because it is too cold',
        ],
        answer: 1,
        explanation: 'The Boltzmann factor $e^{-\\hbar\\omega/kT}$ is then negligibly small for every excited level: the mode is “frozen out,” holding nearly fixed energy regardless of small temperature changes — Jeans’s guess made exact.',
      },
    ],
  },

  // ------------------------------------------------------------------ 10.3
  {
    sectionId: 'hall-ch19-s25',
    readingTime: 12,
    intro: 'Watch a speck of dust under a microscope and you are watching molecules: the speck jiggles because it is being kicked by things too small to see, and its wanderings carry, in one measurable number, the size of atoms. Between Einstein’s 1905 analysis and Feynman’s retelling, this section connects Brownian motion to mobility, diffusion, evaporation, hot filaments and ionized stars — kinetic theory doing real laboratory and astronomical work.',
    objectives: [
      'Explain why a suspended particle shares $\\tfrac{3}{2}kT$ with the molecules and how this makes molecular motion visible',
      'Derive the random-walk law $\\langle R_N^2\\rangle = NL^2$ and Einstein’s result $\\langle R^2\\rangle = 6kTt/\\mu$',
      'Compute collision survival probabilities and mean free paths from the cross section relation $\\sigma_c n_0 l = 1$',
      'Derive the drift velocity, mobility and their link to diffusion, $D = \\mu kT$',
      'Apply the Boltzmann factor to evaporation, thermionic emission and thermal ionization',
    ],
    concepts: [
      {
        term: 'The Brownian movement',
        kind: 'definition',
        statement: 'Tiny particles suspended in a liquid or gas jiggle perpetually — discovered by the botanist Robert Brown in 1827 on pollen grains, and even on specks trapped in quartz that had been sealed for millions of years — because they are being bombarded by molecules.',
        detail: 'Not life, not currents: motion. The deep statement is that a suspended particle in equilibrium shares the same mean kinetic energy $\\tfrac{3}{2}kT$ as a gas molecule, however heavy it is — it is simply a very big, very slow “molecule.” A micron-size particle moves at the order of a millimeter per second, but reverses direction so often that it gets nowhere we can see directly. Feynman’s sly proof that the particle must share $kT$: replace the water by an imaginary ideal gas of fine pellets at the same temperature; the particle must be in equilibrium with the pellets, and equilibrium with one thing at $T$ means equilibrium with everything at $T$.',
      },
      {
        term: 'Fluctuation limits of instruments',
        kind: 'insight',
        statement: 'Thermal jiggling sets absolute sensitivity limits: a galvanometer mirror wobbles by $\\langle\\theta^2\\rangle = kT/I\\omega_0^2$, and a resonant circuit carries Johnson noise with $\\langle V_L^2\\rangle = L\\omega_0^2kT$ and noise power $P(\\omega)d\\omega = (2/\\pi)kT\\,d\\omega$.',
        detail: 'The mirror on a quartz fiber is a torsional oscillator: kinetic $\\tfrac{1}{2}I\\omega^2$ and potential $\\tfrac{1}{2}I\\omega_0^2\\theta^2$ each average $\\tfrac{1}{2}kT$. The same logic drives the electrical resonant circuit, where $\\tfrac{1}{2}LI^2 = \\tfrac{1}{2}kT$. Wherever the damping of an instrument comes from, there its fluctuations come from — cool the right part (fiber or gas) to buy sensitivity. Classical statistical mechanics even predicted the blackbody spectrum $I(\\omega) = \\omega^2kT/\\pi^2c^2$ (Rayleigh’s law), which explodes at high frequency — the ultraviolet catastrophe that Planck’s quantum oscillator energy $\\hbar\\omega/(e^{\\hbar\\omega/kT}-1)$ cures, replacing $kT$ per mode. The same substitution fixes Johnson noise at low temperature.',
      },
      {
        term: 'The random walk',
        kind: 'law',
        statement: 'For $N$ independent steps of length $L$, $$\\langle R_N^2\\rangle = NL^2$$ — the **mean square** displacement, not the mean, grows with the number of steps, hence with time: $\\langle R^2\\rangle = \\alpha t$.',
        detail: 'The proof is one line: $R_N = R_{N-1} + L$, and averaging kills the cross term because step directions are uncorrelated: $\\langle R_N^2\\rangle = \\langle R_{N-1}^2\\rangle + L^2$; induction finishes it. This is Chapter 2’s drunken sailor again — a 36-step walk ends about 6 step-lengths from the bar. A water molecule suffers about $10^{14}$ collisions per second, so in a hundredth of a second it has already had $10^{12}$ kicks and utterly forgotten where it was: the step-to-step independence hypothesis is superbly justified.',
      },
      {
        term: 'Einstein’s Brownian formula',
        kind: 'theorem',
        statement: 'A particle of mobility $\\mu$ (drag force $\\mu v$ per unit force) in equilibrium at temperature $T$ obeys $$\\left\\langle R^2\\right\\rangle = \\frac{6kTt}{\\mu}$$ — its mean square displacement grows linearly in time with a rate fixed by temperature and drag.',
        detail: 'Model the motion by $m\\,d^2x/dt^2 + \\mu\\,dx/dt = F_\\text{irregular}$; multiply by $x$, average, and use that the irregular force is uncorrelated with position while $\\tfrac{1}{2}m\\langle v^2\\rangle = \\tfrac{1}{2}kT$: the result is $d\\langle x^2\\rangle/dt = 2kT/\\mu$, and the factor 3 for the three directions gives $6kTt/\\mu$. This equation is how $k$ — and with it Avogadro’s number $N_0 = R/k$ — was first measured: watch a dirt particle patiently, measure how far it wanders, measure its drift under gravity to get $\\mu$. There is no fluctuation without dissipation: the drag is the price of the kicks.',
      },
      {
        term: 'Mean free path and collision cross section',
        kind: 'definition',
        statement: 'With mean time $\\tau$ between collisions, the survival probability is $$P(t) = e^{-t/\\tau},$$ the mean free path is $l = \\tau v$, and the collision cross section satisfies $$\\sigma_c n_0 l = 1.$$',
        detail: 'The chance of a collision in $dt$ is $dt/\\tau$; integrating the survivors gives the exponential. The chance of surviving one mean lifetime is only $e^{-1} \\approx 0.37$ — less than one-half, because short intervals are common and long runs are rare but long. The cross section picture: each target molecule shades an area $\\sigma_c$ (for hard spheres $\\pi(r_1+r_2)^2$), and one collision happens on average when the shaded areas in a unit-base cylinder of length $l$ just cover it once.',
      },
      {
        term: 'Mobility and drift',
        kind: 'law',
        statement: 'A “special” molecule pushed by a force $F$ through a background gas drifts with $$v_\\text{drift} = \\frac{F\\tau}{m} = \\mu F, \\qquad \\mu = \\frac{\\tau}{m},$$ where $\\tau$ is the mean time between momentum-randomizing collisions.',
        detail: 'The tempting textbook argument — “it accelerates for a time $\\tau$, so average half the final velocity” — is wrong by a factor of 2: short collision intervals arrive more often but contribute less, and the honest average of the velocity itself needs no half. Ionic conduction follows directly: a box of $n_i$ ions per unit volume between plates $b$ apart carries $I = \\mu q^2 n_i (A/b)V$ — Ohm’s law itself emerges from the kinetic picture, with the resistance tied to $m$ and $\\tau$. For heavy particles, replace $\\tau$ by the longer “forgetting time” for forward momentum.',
      },
      {
        term: 'Diffusion — Fick’s law',
        kind: 'law',
        statement: 'A density gradient drives a molecular current $$J_x = -D\\frac{dn_a}{dx}, \\qquad D = \\tfrac{1}{3}lv$$ for a gas, with $l$ the mean free path and $v$ the molecular speed.',
        detail: 'The counting: molecules crossing a plane from the left started a mean free path away, so the imbalance is $\\sim l\\,dn/dx$; doing the solid-angle bookkeeping properly supplies the exact factor $1/3$. Diffusion is not convection — it is spreading by molecular motion alone, slow because a molecule must fight its way through $\\sigma_c n_0$ targets per meter.',
      },
      {
        term: 'The Einstein relation',
        kind: 'theorem',
        statement: 'Mobility and diffusion are two faces of one physics: $$D = \\mu kT,$$ exactly — even in complicated media where the elementary kinetic derivation would fail.',
        detail: 'The proof needs only equilibrium: apply a force that exactly stops the diffusion current, so the steady gradient obeys both Fick’s law and Boltzmann’s $n = n_0e^{-U/kT}$; comparing the two conditions forces $D = \\mu kT$ with no adjustable factors. First deduced by Einstein, it links the drift we can drive (sedimentation, electrophoresis) to the spreading we cannot stop.',
      },
      {
        term: 'The Boltzmann factor at work',
        kind: 'method',
        statement: 'Phenomena that require borrowing an energy $W$ share one temperature dependence: $e^{-W/kT}$ — evaporation ($nV_a = e^{-W/kT}$), thermionic emission ($I \\propto e^{-q_e\\phi/kT}$), thermal ionization (Saha), and chemical reaction rates (activation energy $A^*$).',
        detail: 'Evaporation: the vapor density over a liquid is the liquid density times the exponential of minus the binding energy per molecule. Thermionic emission is evaporation of electrons from a metal: one electron volt corresponds to $kT$ at 11,600 K, so a filament at 1100 K emits suppressed by roughly $e^{-10}$ — and because the exponent is huge, small temperature changes swing the current wildly while prefactors barely matter. The Saha equation $n_en_i/n_a = (1/V_a)e^{-W/kT}$ adds a subtlety: an already-occupied site does not count as available, which is why dilute gases (stellar interiors, interstellar space) ionize more than naive energy arguments suggest. Chemical rates involve a different energy — the activation barrier $A^*$, lowerable by catalysts — while the equilibrium composition depends only on the reaction energy $W$. Even heat conduction yields: $\\kappa = kv/((\\gamma - 1)\\sigma_c)$, independent of gas density — more carriers, proportionally shorter flights.',
      },
    ],
    examples: [
      {
        title: 'Surviving without a collision',
        problem: 'A molecule suffers 60 collisions per hour, so $\\tau = 1$ minute. What fraction of molecules collides in the next second, and what is the probability of surviving two mean lifetimes?',
        steps: [
          { label: 'Step 1: The instantaneous rate', text: 'The chance of a collision in a short interval $dt$ is $dt/\\tau$: with $\\tau = 60$ s, one second costs a fraction $1/60$ of the survivors — about 1.7%.' },
          { label: 'Step 2: The survival law', text: 'Counting the survivors of a cohort $N_0$ gives the differential equation $dN/dt = -N/\\tau$, so $N(t) = N_0e^{-t/\\tau}$ and $P(t) = e^{-t/\\tau}$.' },
          { label: 'Step 3: Two lifetimes', text: '$P(2\\tau) = e^{-2} \\approx 0.135$ — only about one molecule in seven makes it that long collision-free.' },
          { label: 'Step 4: The paradox resolved', text: 'The chance of surviving even one mean lifetime is $e^{-1} \\approx 0.37$, less than one-half — yet the mean is still $\\tau$, because rare long runs drag the average up. The same law governs radioactive decay, light bulbs and next-collision waiting from any arbitrary instant (the mean from now to the next collision is also $\\tau$).' },
        ],
        result: 'Per-second collision fraction $1/60$; $P(\\tau) \\approx 0.37$, $P(2\\tau) \\approx 0.135$ — the exponential clock has no memory.',
      },
      {
        title: 'Electrons boiling off tungsten',
        problem: 'A vacuum-tube filament runs at about 1100 K. Using Feynman’s conversion — one electron volt corresponds to $kT$ at 11,600 K — estimate the suppression factor for a work function of about 1 eV.',
        steps: [
          { label: 'Step 1: The conversion', text: 'An energy of $q_e\\phi$ with $\\phi = 1$ V matches $kT$ when $T = 11{,}600$ K; thermionic emission carries the Boltzmann factor $e^{-q_e\\phi/kT}$.' },
          { label: 'Step 2: The exponent at 1100 K', text: '$q_e\\phi/kT = 11{,}600/1{,}100 \\approx 10.5$, so the current is suppressed by $e^{-10.5} \\approx 2.7\\times 10^{-5}$ — Feynman’s “something like $e^{-10}$.”' },
          { label: 'Step 3: Why the prefactor hardly matters', text: 'With so large an exponent, a 10% rise in temperature swings the emission by orders of magnitude, while errors in the prefactor (from classical or even quantum approximations) change it by factors of order one.' },
          { label: 'Step 4: The lesson', text: 'The exponential rule dominates whenever $W \\gg kT$: evaporation, filaments, ionization and chemistry all live on the steep part of the curve.' },
        ],
        result: 'At 1100 K a 1-eV barrier suppresses emission by about $e^{-10} \\sim 10^{-5}$ — which is exactly why tube filaments glow white-hot and why small temperature changes matter enormously.',
      },
      {
        title: 'From Brownian wandering to Avogadro’s number',
        problem: 'A colloidal particle of measured mobility $\\mu = 2\\times 10^{-8}$ kg/s (found from its sedimentation speed) is watched for $t = 60$ s at $T = 300$ K. Predict its mean square displacement, and show how the observation determines $k$.',
        steps: [
          { label: 'Step 1: The one-dimensional rate', text: 'Einstein: $d\\langle x^2\\rangle/dt = 2kT/\\mu = 2(1.38\\times 10^{-23})(300)/(2\\times 10^{-8}) \\approx 4.1\\times 10^{-13}\\ \\text{m}^2/\\text{s}$.' },
          { label: 'Step 2: Three dimensions, one minute', text: '$\\langle R^2\\rangle = 6kTt/\\mu = 3\\times(4.1\\times 10^{-13}) \\times 60 \\approx 7.4\\times 10^{-11}\\ \\text{m}^2$, so $R_\\text{rms} \\approx 8.6\\ \\mu$m — a visible blur under the microscope.' },
          { label: 'Step 3: Invert for $k$', text: 'Measuring $\\langle R^2\\rangle$ with a stopwatch and grid gives $k = \\mu\\langle R^2\\rangle/(6Tt)$; with the numbers above, $k \\approx 1.4\\times 10^{-23}$ J/K.' },
          { label: 'Step 4: The historic payoff', text: 'Since the gas constant $R = 8.317$ J·mol⁻¹·K⁻¹ was already known, $N_0 = R/k \\approx 6\\times 10^{23}$ — the number of atoms in a mole, counted by watching dirt jiggle. This is how the atomic hypothesis finally won.' },
        ],
        result: 'The particle wanders about $9\\ \\mu$m rms per minute; the same measurement yields $k$ and hence Avogadro’s number — Einstein’s 1905 analysis turned Brownian motion into a counting instrument for atoms.',
      },
    ],
    keyTakeaways: [
      'A suspended particle is just a heavy molecule: it shares $\\tfrac{3}{2}kT$, and its visible jiggle is the invisible molecular motion made macroscopic.',
      'Fluctuations limit instruments — galvanometer mirrors, resonant circuits (Johnson noise), even the classical blackbody law — and the quantum fix is the oscillator energy $\\hbar\\omega/(e^{\\hbar\\omega/kT}-1)$.',
      'Random walks obey $\\langle R_N^2\\rangle = NL^2$: mean square displacement grows linearly with time, the signature of diffusion.',
      'Einstein’s $\\langle R^2\\rangle = 6kTt/\\mu$ turned microscope observations of drifting specks into measurements of $k$ and Avogadro’s number.',
      'Collisions are exponential: survival $P(t) = e^{-t/\\tau}$, mean free path $l = \\tau v$, and $\\sigma_c n_0 l = 1$ ties mean free paths to molecular sizes.',
      'Drift under force goes as $v_\\text{drift} = \\mu F$ with $\\mu = \\tau/m$ — Ohm’s law for ionized gases falls out — and diffusion obeys $J = -D\\,dn/dx$ with $D = lv/3$, welded to mobility by the exact Einstein relation $D = \\mu kT$.',
      'Any process that must borrow energy $W$ is governed by $e^{-W/kT}$: evaporation, hot filaments (1 eV ↔ 11,600 K), ionization and chemistry.',
    ],
    quiz: [
      {
        q: 'Why must a heavy colloidal particle share the same average kinetic energy $\\tfrac{3}{2}kT$ as the water molecules around it?',
        options: [
          'Because heavy objects store more heat',
          'Because equilibrium with one thing at temperature $T$ implies equilibrium with everything at $T$ — otherwise a hypothetical ideal-gas “pellet” atmosphere around it would heat or cool spontaneously',
          'Because the particle is small compared to the wavelength of light',
          'Because water is incompressible',
        ],
        answer: 1,
        explanation: 'Feynman’s argument: replace the water by an imaginary ideal gas of pellets at the same temperature. The particle must equilibrate to it like any gas molecule; if it did not, one could extract energy from a single-temperature system.',
      },
      {
        q: 'For a random walk of $N$ steps of length $L$, the typical distance from the origin after $N$ steps is about:',
        options: [`$NL$`, `$L\\sqrt{N}$`, `$L/N$`, `$N^2L$`],
        answer: 1,
        explanation: 'The mean square displacement is $\\langle R_N^2\\rangle = NL^2$, so the typical (rms) distance is $L\\sqrt{N}$ — a 36-step walk ends about 6 step-lengths out. Mean square, not mean, is proportional to time.',
      },
      {
        q: 'The probability that a molecule survives a time equal to the mean time between collisions, $\\tau$, is:',
        options: ['Exactly 1/2', `$e^{-1} \\approx 0.37$`, `$1 - 1/e \\approx 0.63$`, 'Zero'],
        answer: 1,
        explanation: 'Survival follows $P(t) = e^{-t/\\tau}$, so $P(\\tau) = e^{-1} \\approx 0.37$. Fewer than half outlast the average, because short collision-free intervals are common while rare long runs keep the mean at $\\tau$.',
      },
      {
        q: 'The Einstein relation connects the diffusion coefficient $D$ and the mobility $\\mu$ by:',
        options: ['$D = \\mu kT$ exactly', `$D = 2\\mu kT$`, `$D = \\mu/kT$`, '$D$ and $\\mu$ are independent'],
        answer: 0,
        explanation: 'Balancing the diffusive current against the drift current in equilibrium, and comparing with Boltzmann’s $n = n_0e^{-U/kT}$, gives $D = \\mu kT$ with no extra factors — valid even in complicated media.',
      },
      {
        q: 'One electron volt corresponds to $kT$ at what temperature?',
        options: ['1,100 K', '11,600 K', '300 K', '116,000 K'],
        answer: 1,
        explanation: 'Feynman’s conversion: 1 eV matches $kT$ at about 11,600 K. A 1100 K filament therefore suppresses 1-eV thermionic emission by roughly $e^{-10}$, which is why the exponent dominates every prefactor.',
      },
    ],
  },

  // ------------------------------------------------------------------ 10.4
  {
    sectionId: 'phys-ch10-s4',
    readingTime: 11,
    intro: 'Thermodynamics is the physics you can do when you refuse to look inside the material: the relations among pressure, volume, temperature, heat and work hold no matter what the molecules are doing. Carnot founded the subject by asking how to build the best possible engine — an engineering question — and out fell the second law, absolute temperature, and entropy. Feynman’s route keeps the atoms in sight (Chapter 10.1 already gave us $PV = NkT$), but the beauty here is that we never need them.',
    objectives: [
      'State the first law with Feynman’s sign convention $\\Delta U = Q + W$ and apply $dW = -P\\,dV$',
      'State the second law in both of its equivalent forms and prove their equivalence',
      'Walk the four steps of the Carnot cycle and prove $Q_1/T_1 = Q_2/T_2$ for any reversible engine',
      'Derive the efficiency $W/Q_1 = (T_1 - T_2)/T_1$ and the absolute temperature definition $Q = ST$',
      'Compute entropy changes for reversible cycles, friction and heat flow, and apply the thermodynamic toolbox',
    ],
    concepts: [
      {
        term: 'Thermodynamics without atoms',
        kind: 'insight',
        statement: 'A whole network of relations among the properties of substances can be derived **without knowing the internal machinery** — and historically was, before the atomic picture was accepted.',
        detail: 'Example: pull a rubber band and it warms; let it relax against your lip and it cools; heat a stretched band holding a weight and it contracts. The molecular spaghetti (long chains with cross-links, kinked by thermal bombardment) explains this, but the relation between the two effects is guaranteed regardless. A silly engine — a bicycle wheel with rubber-band spokes, heated by lamps on one side — turns slowly on 400 watts while barely lifting a fly: the question of how to do work with heat efficiently is what launched thermodynamics, one of the few times engineering contributed fundamentally to physical theory (Claude Shannon’s information theory being another, related, one).',
      },
      {
        term: 'The first law',
        kind: 'law',
        statement: 'The heat $Q$ put into a system plus the work $W$ done on it equals the increase of its internal energy: $$\\Delta U = Q + W, \\qquad dQ + dW = dU.$$',
        detail: 'Feynman’s sign story: he counts both heat and work as positive when they enter the system, so compression ($dV < 0$) does work $dW = -P\\,dV > 0$. This is the conservation of energy of Chapter 4, extended to include heat as a form of energy transfer — no more, no less. Carnot did not have it: the second law was discovered before the first, and Carnot’s careful logic survives even though Clapeyron’s popularization assumed the false caloric theory.',
      },
      {
        term: 'The second law',
        kind: 'law',
        statement: 'A process whose only net result is to take heat from a reservoir at a single temperature and convert it to work is impossible — and this is equivalent to: **heat cannot, of itself, flow from a cold object to a hot one**.',
        detail: 'Work can always be converted to heat at a single temperature (friction); the reverse is what nature forbids. The equivalence proof: if we could extract work from the ocean at one temperature, we could spend that work rubbing something already hotter, pumping heat from cold to hot with no other change. Note the careful phrase “only net result”: compressed air expanding with a big sea to rewarm it does do work — but restoring everything (recompressing) costs more than was gained. Rotation is detectable (Section 9.2), but no cyclic single-temperature engine exists.',
      },
      {
        term: 'Reversible engines and the Carnot cycle',
        kind: 'method',
        statement: 'The ideal engine is **reversible** — no friction, and heat exchanged only across infinitesimal temperature differences — and the prototype cycle is: (1) isothermal expansion at $T_1$ absorbing $Q_1$; (2) adiabatic expansion, cooling $T_1 \\to T_2$; (3) isothermal compression at $T_2$ delivering $Q_2$; (4) adiabatic compression back to the start.',
        detail: 'On the $P$–$V$ diagram the two isotherms follow $PV = NkT$ and the two adiabats the steeper $PV^\\gamma = $ const (equivalently $TV^{\\gamma-1} = $ const). The net work per cycle is the enclosed area — $\\int P\\,dV$ around the loop. Every step can be reversed by an infinitesimal change, which is precisely what makes the argument that follows airtight.',
      },
      {
        term: 'Carnot’s theorem',
        kind: 'theorem',
        statement: 'No engine working between $T_1$ and $T_2$ can do more work than a reversible engine — and two reversible engines, of any design whatsoever, do exactly the same work.',
        detail: 'The proof is a coupling: run the supposed super-engine forward and the reversible engine backward with part of the output; if the combination delivered net work from the single-temperature reservoir at $T_2$, the second law would be violated. Therefore the maximum work — the efficiency — is a property of the world, not of the substance: rubber bands, steam, alcohol or anything else all yield the same number. This is the only real restriction thermodynamics places on materials.',
      },
      {
        term: 'Absolute temperature and the efficiency',
        kind: 'law',
        statement: 'For the reversible engine, $Q_1/T_1 = Q_2/T_2$, so the work and efficiency are $$W = Q_1 - Q_2 = Q_1\\frac{T_1 - T_2}{T_1}, \\qquad \\eta = \\frac{W}{Q_1} = 1 - \\frac{T_2}{T_1}.$$',
        detail: 'The proof for an ideal gas: $Q_1 = NkT_1\\ln(V_b/V_a)$ on the hot isotherm, $Q_2 = NkT_2\\ln(V_c/V_d)$ on the cold one; the adiabats give $T_1V_b^{\\gamma-1} = T_2V_c^{\\gamma-1}$ and $T_1V_a^{\\gamma-1} = T_2V_d^{\\gamma-1}$, whose ratio forces $V_b/V_a = V_c/V_d$, so the logarithms match and $Q_1/T_1 = Q_2/T_2$ — and by Carnot’s theorem this holds for every reversible engine. Absolute temperature is then defined without any substance: a reversible engine between a body and the one-degree standard delivers heat $Q_S = S\\cdot 1°$; if the body supplies seven times that heat, the body is at seven degrees. The scale coincides with the kinetic-theory (gas) scale — man chose his units well for once.',
      },
      {
        term: 'Entropy',
        kind: 'definition',
        statement: 'Entropy is heat divided by temperature: in a reversible change, $$dS = \\frac{dQ}{T}, \\qquad \\Delta S = \\int_a^b\\frac{dQ}{T},$$ and the integral is path-independent — $S$ is a function of the state (of $V$ and $T$).',
        detail: 'In a reversible cycle there is no net change of $S$ anywhere, reservoirs included. For an ideal gas, an isothermal expansion gives $\\Delta S = Nk\\ln(V_2/V_1)$, and matching the adiabats yields $S(V,T) = Nk\\ln V + Nk\\ln T^{1/(\\gamma-1)} + a$, with the constant $a$ fixed by Nernst’s heat theorem — the third law: the entropy of any object at absolute zero is zero. Two laws to remember them by: the energy of the universe is constant; the entropy of the universe always increases.',
      },
      {
        term: 'Entropy changes in real processes',
        kind: 'insight',
        statement: 'Irreversible processes always increase the world’s entropy: friction generating heat $Q$ at temperature $T$ adds $Q/T$; heat $\\Delta Q$ falling from $T_1$ to $T_2$ adds $$\\Delta S = \\frac{\\Delta Q}{T_2} - \\frac{\\Delta Q}{T_1} > 0.$$',
        detail: 'Since no process is absolutely reversible, every event leaks entropy — a reversible process is the idealization in which the leak is minimal. The hot-stone arithmetic is the model: the stone loses $\\Delta Q/T_1$, the water gains $\\Delta Q/T_2$, and because $T_2 < T_1$ the gain exceeds the loss. This is the quantitative arrow of time that Section 10.5 traces to its molecular roots.',
      },
      {
        term: 'The thermodynamic toolbox',
        kind: 'method',
        statement: 'From the two laws flow the working equations: $$\\left(\\frac{\\partial U}{\\partial V}\\right)_T = T\\left(\\frac{\\partial P}{\\partial T}\\right)_V - P,$$ the Clausius–Clapeyron equation $\\dfrac{L}{T(V_G - V_L)} = \\dfrac{\\partial P_\\text{vap}}{\\partial T}$, and for radiation $U/V = (4\\sigma/c)T^4$ with $\\sigma = 5.67\\times 10^{-8}\\ \\text{W·m}^{-2}\\text{K}^{-4}$.',
        detail: 'The master relation connects two observable effects — heating at constant volume versus heat needed to expand isothermally — for any substance, from gas to rubber band (replace $P\\,dV$ by $-F\\,dL$ and the same equations run the rubber engine). Clausius–Clapeyron integrates (with $V_G \\gg V_L$ and constant $L$) to the vapor pressure law $P = \\text{const}\\,e^{-L/RT}$ — the kinetic-theory evaporation formula of Section 10.3 raised to exactness. For blackbody radiation, $PV = U/3$ in the master relation gives $P \\propto T^4$; thermodynamics alone cannot deliver the Stefan–Boltzmann constant $\\sigma = k^4\\pi^2/60\\hbar^3c^3$ — that needs the quantum distribution, a fair division of labor.',
      },
    ],
    examples: [
      {
        title: 'Tracing the Carnot cycle for an ideal gas',
        problem: 'One mole of ideal monatomic gas runs a Carnot cycle between $T_1 = 400$ K and $T_2 = 300$ K, doubling its volume on each isotherm. Compute $Q_1$, $Q_2$, the work and the efficiency.',
        steps: [
          { label: 'Step 1: Heat on the hot isotherm', text: 'Isothermal expansion at $T_1$: $\\Delta U = 0$, so $Q_1 = \\int P\\,dV = RT_1\\ln(V_b/V_a) = 8.317 \\times 400 \\times \\ln 2 \\approx 2306$ J.' },
          { label: 'Step 2: Heat on the cold isotherm', text: 'Similarly $Q_2 = RT_2\\ln(V_c/V_d)$; and the adiabats ($TV^{\\gamma-1} = $ const) force $V_b/V_a = V_c/V_d$, so $Q_2 = 8.317 \\times 300 \\times 0.693 \\approx 1730$ J delivered to the cold reservoir.' },
          { label: 'Step 3: The work', text: '$W = Q_1 - Q_2 \\approx 2306 - 1730 = 576$ J per cycle — the enclosed area of the $P$–$V$ loop.' },
          { label: 'Step 4: The efficiency', text: '$\\eta = W/Q_1 = 576/2306 = 0.25$, and indeed $(T_1 - T_2)/T_1 = 100/400 = 0.25$. Also $Q_1/T_1 = 5.77 = Q_2/T_2$ — the reversible-engine identity in numbers.' },
        ],
        result: '$Q_1 \\approx 2306$ J, $Q_2 \\approx 1730$ J, $W \\approx 576$ J, $\\eta = 25\\%$: the logarithms cancel to give exactly Carnot’s fraction.',
      },
      {
        title: 'An engine that would break the second law',
        problem: 'Between reservoirs at 500 K and 300 K, someone claims an engine that takes $Q_1 = 100$ J per cycle and delivers $W\' = 50$ J. Check the entropy bookkeeping.',
        steps: [
          { label: 'Step 1: The claimed reject heat', text: 'First law: $Q_2\' = Q_1 - W\' = 100 - 50 = 50$ J dumped into the 300 K reservoir.' },
          { label: 'Step 2: Entropy of the universe', text: 'Hot reservoir: $-100/500 = -0.200$ J/K. Cold reservoir: $+50/300 = +0.167$ J/K. Net: $-0.033$ J/K — negative, which is forbidden.' },
          { label: 'Step 3: The reversible ceiling', text: 'A reversible engine would deliver $W = Q_1(T_1 - T_2)/T_1 = 100 \\times 200/500 = 40$ J and dump 60 J: then $100/500 = 60/300 = 0.200$ J/K exactly, net entropy zero.' },
          { label: 'Step 4: Interpret', text: 'The claim exceeds the reversible maximum by 10 J per cycle; run backward as a refrigerator, the pair of them would pump heat from cold to hot with no other change — the second-law violation in its second form.' },
        ],
        result: 'Only $W \\le 40$ J per 100 J is lawful between 500 K and 300 K; the excess 10 J would have to come with negative entropy production.',
      },
      {
        title: 'A hot stone in cold water',
        problem: 'A stone at $T_1 = 400$ K drops $\\Delta Q = 60$ J of heat directly into water at $T_2 = 300$ K. Compute the entropy change of the world, and compare with the reversible transfer.',
        steps: [
          { label: 'Step 1: The stone loses', text: '$\\Delta S_\\text{stone} = -\\Delta Q/T_1 = -60/400 = -0.150$ J/K.' },
          { label: 'Step 2: The water gains', text: '$\\Delta S_\\text{water} = +\\Delta Q/T_2 = +60/300 = +0.200$ J/K.' },
          { label: 'Step 3: The net', text: '$\\Delta S_\\text{world} = 0.200 - 0.150 = +0.050$ J/K — positive, as the second law demands for any real (irreversible) heat flow.' },
          { label: 'Step 4: The reversible alternative', text: 'Interpose a Carnot engine between stone and water: it would deliver $W = \\Delta Q(1 - T_2/T_1) = 60 \\times 0.25 = 15$ J of work while transferring the heat with zero net entropy change — the 15 J is exactly the “value” lost by dumping the heat directly.' },
        ],
        result: 'Direct contact wastes 15 J and produces $+0.05$ J/K of entropy; the same heat moved reversibly would have powered 15 J of work with zero entropy production.',
      },
    ],
    keyTakeaways: [
      'First law: $\\Delta U = Q + W$ — heat in plus work done on the system; with Feynman’s signs, compression does $dW = -P\\,dV$.',
      'Second law: no cyclic process converts heat to work at a single temperature — equivalently, heat does not flow by itself from cold to hot.',
      'The Carnot cycle (two isotherms, two adiabats) is the reversible benchmark; its work is the enclosed $\\int P\\,dV$ area.',
      'For any reversible engine $Q_1/T_1 = Q_2/T_2$ — proved for an ideal gas, guaranteed for every substance by Carnot’s theorem.',
      'Efficiency $\\eta = 1 - T_2/T_1$ is a property of the temperatures alone; absolute temperature itself is defined by the reversible engine ($Q = ST$).',
      'Entropy $dS = dQ/T$ is a state function; reversible cycles conserve it, and every irreversible process — friction, heat conduction — increases the world’s total.',
      'The toolbox: $(\\partial U/\\partial V)_T = T(\\partial P/\\partial T)_V - P$, Clausius–Clapeyron, and $U/V = (4\\sigma/c)T^4$ with $\\sigma = 5.67\\times 10^{-8}$ W·m⁻²·K⁻⁴.',
    ],
    quiz: [
      {
        q: 'In Feynman’s statement of the first law, $\\Delta U = Q + W$, both $Q$ and $W$ are counted positive when:',
        options: [
          'Heat leaves and the gas expands',
          'Heat is put into the system and work is done on the system',
          'The cycle runs clockwise',
          'Temperature rises',
        ],
        answer: 1,
        explanation: 'Both contributions are measured entering the system: heat added plus work done on it equals the internal-energy gain. Compressing a gas ($dV < 0$) therefore does $dW = -P\\,dV > 0$.',
      },
      {
        q: 'Which statement of the second law is equivalent to “heat cannot be taken in at one temperature and converted to work with no other change”?',
        options: [
          'Energy cannot be created or destroyed',
          'Heat cannot, of itself, flow from a cold object to a hot one',
          'Entropy is a state function',
          'No engine can be perfectly lubricated',
        ],
        answer: 1,
        explanation: 'If single-temperature heat could become work, that work could be dissipated by friction into something already hotter — a self-driven cold-to-hot flow. Carnot’s two postulates stand or fall together.',
      },
      {
        q: 'A reversible engine runs between 500 K and 300 K. Its maximum efficiency is:',
        options: ['60%', '40%', '50%', '100% minus friction losses'],
        answer: 1,
        explanation: '$\\eta = (T_1 - T_2)/T_1 = 200/500 = 40\\%$, independent of the working substance — no design, lubricant or fuel can beat the reversible engine between the same temperatures.',
      },
      {
        q: 'Heat $\\Delta Q$ flows directly from a hot stone at $T_1$ into cold water at $T_2 < T_1$. The world’s entropy changes by:',
        options: [
          '$\\Delta Q/T_1 - \\Delta Q/T_2$ (negative)',
          '$\\Delta Q/T_2 - \\Delta Q/T_1$ (positive)',
          'Zero, because energy is conserved',
          `$\\Delta Q(T_1 - T_2)$`,
        ],
        answer: 1,
        explanation: 'The water gains $\\Delta Q/T_2$, the stone loses $\\Delta Q/T_1$, and since $T_2 < T_1$ the sum is positive — every spontaneous heat flow manufactures entropy.',
      },
      {
        q: 'Why is the absolute thermodynamic temperature scale “independent of any substance”?',
        options: [
          'Because mercury thermometers are very linear',
          'Because it is defined by the heat ratio of a reversible engine between the body and a one-degree standard',
          'Because all gases are ideal at low pressure',
          'Because entropy is always integer-valued',
        ],
        answer: 1,
        explanation: 'A reversible engine absorbing $Q$ at the body’s temperature and delivering $Q_S$ at 1° defines $Q = ST$: if seven times more heat is absorbed than delivered, the body is at seven degrees. Carnot’s theorem guarantees the same number for every engine and substance.',
      },
    ],
  },

  // ------------------------------------------------------------------ 10.5
  {
    sectionId: 'hall-ch20-s16',
    readingTime: 12,
    intro: 'Can a machine turn one-way on molecular chaos? Bolt the vanes of a windmill into a box of gas, gear the axle to a ratchet and pawl, and — so the daydream goes — the Brownian jiggling winds the wheel forever, lifting fleas for free. Feynman’s dissection of this gadget is the most elementary proof of the second law we possess: every step is just $e^{-\\epsilon/kT}$ bookkeeping, yet out of it come Carnot’s efficiency, the rectifier curve, Maxwell’s demon’s failure, and the arrow of time itself.',
    objectives: [
      'Explain the essential parts of the ratchet and pawl — spring, damping — and why the device fails at uniform temperature',
      'Compute the forward and backward rates and derive the reversibility condition $(\\epsilon + L\\theta)/T_1 = \\epsilon/T_2$',
      'Show that the ratchet, run reversibly, reproduces exactly the Carnot efficiency $Q_1/Q_2 = T_1/T_2$',
      'Analyze the loaded isothermal ratchet and the hot-ratchet reversal using $\\omega = (\\theta/\\tau)e^{-\\epsilon/kT}(e^{-L\\theta/kT} - 1)$',
      'Define entropy microscopically as $S = k\\ln W$, compute the entropy of mixing, and discuss the arrow of time',
    ],
    concepts: [
      {
        term: 'How a ratchet works — and why it cannot',
        kind: 'insight',
        statement: 'A vaned wheel in a gas box, geared through a ratchet and pawl, seems to harvest Brownian motion — but at uniform temperature the **probability of accumulating the pawl-lifting energy $\\epsilon$ equals the probability that the pawl is accidentally up**, both $e^{-\\epsilon/kT}$, and the wheel goes nowhere on average.',
        detail: 'Two unglamorous parts are essential: a spring to reset the pawl, and damping to stop the pawl bouncing — a perfectly elastic pawl would bounce and let teeth slip under it. The damping dumps energy into the wheel as heat, so the whole gadget warms and the pawl itself becomes a Brownian object: every so often it lifts itself over a tooth exactly when a fluctuation tries to turn the axle backward. Forward borrowings and backward slips balance exactly, and the wheel merely jiggles. It is not hard to demonstrate — but it is the fundamental deep principle on which all of thermodynamics is based.',
      },
      {
        term: 'The ratchet as an engine',
        kind: 'method',
        statement: 'With vanes at $T_1$ and ratchet at $T_2 < T_1$, a forward step must borrow $\\epsilon + L\\theta$ from the vanes (pawl lift plus work against the load torque $L$ through angle $\\theta$), while a backward slip needs only $\\epsilon$ at the ratchet: $$\\text{forward rate} = \\tfrac{1}{\\tau}e^{-(\\epsilon + L\\theta)/kT_1}, \\qquad \\text{backward rate} = \\tfrac{1}{\\tau}e^{-\\epsilon/kT_2}.$$',
        detail: 'The energy ledger (Feynman’s Table 46-1): forward — takes $L\\theta + \\epsilon$ from the vane gas, does work $L\\theta$ on the load, gives $\\epsilon$ to the ratchet as heat. Backward — takes $\\epsilon$ from the ratchet, releases work $L\\theta$ to the falling load, and delivers $L\\theta + \\epsilon$ as heat to the vanes. Every number is the same, with signs reversed; which rate wins decides whether the flea rises or falls. When the rates are exactly equal, the machine is in its reversible condition.',
      },
      {
        term: 'The reversibility condition gives Carnot',
        kind: 'theorem',
        statement: 'Setting the rates equal: $$\\frac{\\epsilon + L\\theta}{T_1} = \\frac{\\epsilon}{T_2}, \\qquad\\text{hence}\\qquad \\frac{Q_1}{Q_2} = \\frac{\\epsilon + L\\theta}{\\epsilon} = \\frac{T_1}{T_2},$$ and the work fraction is $L\\theta/(L\\theta + \\epsilon) = (T_1 - T_2)/T_1$.',
        detail: 'The molecular bookkeeping reproduces the entire Carnot result of Section 10.4 — no engines, no cycles, no postulates about heat, just two exponentials and energy conservation. Run slightly off the balance point, the machine either lifts the weight slowly (drawing heat from the vanes and dumping some at the ratchet) or lets it down (a refrigerator), exactly the two modes of a reversible engine. This was the main point of the lecture: an elementary, kinetic version of Carnot’s theorem.',
      },
      {
        term: 'The loaded ratchet at one temperature',
        kind: 'law',
        statement: 'At $T_1 = T_2 = T$ with load torque $L$, the average angular velocity is $$\\omega = \\frac{\\theta}{\\tau}e^{-\\epsilon/kT}\\left(e^{-L\\theta/kT} - 1\\right),$$ strongly asymmetric in $L$ — easy to drive forward, hard to drive back.',
        detail: 'Plot $\\omega$ against $L$: as $L$ grows positive (opposing motion), $\\omega$ saturates at a small backward crawl $-(\\theta/\\tau)e^{-\\epsilon/kT}$; as $L$ goes negative (helping), the exponential $e^{|L\\theta|/kT}$ takes off. The identical mathematics describes an electrical rectifier — field for force, current for angular velocity — and gives the typical rectifier’s asymmetric current–voltage curve. With the load removed entirely, if $T_2 > T_1$ the ratchet runs the wrong way: a hot pawl, always pushing on an inclined tooth, walks the wheel backwards.',
      },
      {
        term: 'Reversible laws, irreversible world',
        kind: 'insight',
        statement: 'The equations of mechanics are symmetric under $t \\to -t$: for every motion there is an opposite motion, and a sufficiently complicated system left alone “tries everything” — so **no machine can be designed that prefers one direction in the long run**.',
        detail: 'Substituting $-t$ into Newton’s equations changes nothing (only second time derivatives appear), so if a motion is a solution, its time-reverse is too. Complication is the essential ingredient: a lone wheel spinning in empty space keeps its direction forever (angular momentum conservation), but in a complex enough system with the walls absorbing special conserved quantities, no arrangement of gears can beat the symmetry. Maxwell’s demon fails the same way: any finite demon — even a spring-held trap door over a hole — has a finite specific heat, heats up from its own observations, and is soon shaking with Brownian motion so badly it cannot tell whether the molecules are coming or going. The trap door is just another ratchet and pawl.',
      },
      {
        term: 'Order, disorder and S = k ln W',
        kind: 'definition',
        statement: 'The entropy of a configuration is Boltzmann’s constant times the logarithm of the number of internal arrangements $W$ that look the same from outside: $$S = k\\ln W,$$ and the world always goes from the more restricted (ordered) arrangements to the more numerous (disordered) ones.',
        detail: 'It is not pleasant-versus-unpleasant order: it is counting. Neon on one side of a box and argon on the other can be arranged in far fewer ways than a mixture; pulling out the barrier multiplies the available arrangements, and the entropy rises by $Nk\\ln 2$ — even though temperature and energy have not changed at all. The reverse movie — unmixing — violates no single collision; it merely requires every molecule to have exactly the right velocity, an astronomically improbable coincidence of pure order.',
      },
      {
        term: 'The arrow of time',
        kind: 'insight',
        statement: 'Irreversibility comes from order going to disorder — and the order in the present world is a **memory of still higher order at the beginning**: the universe started with extraordinarily low entropy for its energy content.',
        detail: 'Could today’s order be a mere fluctuation? Feynman’s test: a fluctuation predicts disorder wherever we have not yet looked, while a genuinely ordered beginning predicts order everywhere. Every day astronomers point telescopes at new stars, and the new stars behave like the old ones — so the world is not a local accident; its order is a relic. That low-entropy start is why heat flows, why we grow and decay, why we remember the past (the direction of higher order) and not the future. “The entire universe is in a glass of wine” — and the ratchet’s one-wayness is not a property of its gears but of its being part of a one-way universe.',
      },
    ],
    examples: [
      {
        title: 'The ratchet balance sheet at 400 K and 300 K',
        problem: 'A ratchet engine has vanes at $T_1 = 400$ K and ratchet at $T_2 = 300$ K. Take the pawl energy as $\\epsilon = kT_2$ and find the load, work and heat per step in the reversible condition.',
        steps: [
          { label: 'Step 1: Write the balance condition', text: 'Reversibility requires $(\\epsilon + L\\theta)/T_1 = \\epsilon/T_2$, i.e. the forward and backward rates equal: $e^{-(\\epsilon + L\\theta)/kT_1} = e^{-\\epsilon/kT_2}$.' },
          { label: 'Step 2: Solve for the work per step', text: 'With $\\epsilon = kT_2$: $L\\theta = \\epsilon(T_1 - T_2)/T_2 = k(T_1 - T_2) = 100k$ — the load torque times tooth angle is exactly $k(T_1 - T_2)$ per step.' },
          { label: 'Step 3: The heat taken per step', text: 'A forward step borrows $\\epsilon + L\\theta = kT_2 + k(T_1 - T_2) = kT_1 = Q_1$ from the vanes and delivers $\\epsilon = kT_2 = Q_2$ to the ratchet.' },
          { label: 'Step 4: Verify Carnot', text: '$Q_1/Q_2 = T_1/T_2 = 400/300$, and the work fraction is $L\\theta/Q_1 = k(T_1 - T_2)/kT_1 = 100/400 = 25\\%$ — the ratchet is a Carnot engine, tooth by tooth.' },
        ],
        result: 'Per step: work $k(T_1 - T_2)$, heat in $kT_1$, heat out $kT_2$; efficiency exactly $(T_1 - T_2)/T_1 = 25\\%$.',
      },
      {
        title: 'Entropy of mixing: neon and argon',
        problem: 'A box holds 1 mole of neon on one side of a barrier and 1 mole of argon on the other, both at temperature $T$. The barrier is removed. Compute the entropy change.',
        steps: [
          { label: 'Step 1: Model the mixing', text: 'Imagine two pistons — one permeable only to neon, one only to argon — and slide each to its end of the box: each gas expands isothermally into twice its volume.' },
          { label: 'Step 2: Isothermal entropy', text: 'For each gas, $\\Delta S = \\int dQ/T$ with $dQ = P\\,dV = NkT\\,dV/V$, giving $\\Delta S = Nk\\ln(V_2/V_1) = R\\ln 2 \\approx 8.317 \\times 0.693 = 5.76$ J/K per mole.' },
          { label: 'Step 3: Both gases', text: '$\\Delta S_\\text{total} = 2R\\ln 2 \\approx 11.5$ J/K — i.e. $k\\ln 2$ per molecule, exactly the counting entropy $S = k\\ln W$ with the available arrangements doubled.' },
          { label: 'Step 4: The strange part', text: 'Temperature and total energy are completely unchanged — the entropy grew purely from configuration. No temperature change, no heat flow, yet the process is utterly irreversible: wait as long as you like, the gases never unmix.' },
        ],
        result: '$\\Delta S = 2R\\ln 2 \\approx 11.5$ J/K: disorder you can compute on your fingers, and the cleanest illustration that entropy counts arrangements.',
      },
      {
        title: 'The isothermal ratchet under load',
        problem: 'At temperature $T$ the ratchet carries a load with $L\\theta = 5kT$. Compare its response to forward-helping and backward-opposing loads of this size.',
        steps: [
          { label: 'Step 1: The velocity formula', text: '$\\omega = (\\theta/\\tau)e^{-\\epsilon/kT}(e^{-L\\theta/kT} - 1)$; write $L\\theta = 5kT$ with $L$ opposing forward motion.' },
          { label: 'Step 2: Opposing load', text: 'The bracket is $e^{-5} - 1 \\approx -0.993$: the wheel creeps backward at nearly the saturation rate $(\\theta/\\tau)e^{-\\epsilon/kT}$, no matter how much harder you pull.' },
          { label: 'Step 3: Helping load', text: 'Reverse the load ($-L\\theta = 5kT$): the bracket is $e^{+5} - 1 \\approx 147$, so the wheel spins about 150 times faster forward than it creeps backward under equal-magnitude load.' },
          { label: 'Step 4: The rectifier moral', text: 'This factor-of-150 asymmetry from a mere $5kT$ is the mechanical picture of a diode’s curve — and it exists only because the pawl spring and damping (the irreversibility) are present. Remove dissipation and the asymmetry, the ratcheting, and the second law all evaporate together.' },
        ],
        result: 'A $5kT$ load gives a forward-to-backward response ratio of about $150$ — easy one way, nearly impossible the other, the signature curve of every rectifier.',
      },
    ],
    keyTakeaways: [
      'The ratchet needs a spring and damping to function — and the same damping makes the pawl a Brownian object whose accidental liftings cancel the harvested fluctuations at uniform temperature.',
      'Between different temperatures the rate balance $(\\epsilon + L\\theta)/T_1 = \\epsilon/T_2$ makes the ratchet a reversible engine with exactly Carnot’s efficiency, $Q_1/Q_2 = T_1/T_2$.',
      'If the ratchet is hotter than the vanes ($T_2 > T_1$), the machine runs backwards — a hot pawl deliberately walks the wheel the wrong way.',
      'The loaded isothermal ratchet obeys $\\omega = (\\theta/\\tau)e^{-\\epsilon/kT}(e^{-L\\theta/kT} - 1)$ — the rectifier’s asymmetric curve, mechanical edition.',
      'The fundamental laws are time-symmetric; no complicated isolated machine can prefer a direction in the long run, and Maxwell’s demon fails because any finite demon heats up and forgets.',
      'Entropy is counting: $S = k\\ln W$; mixing neon and argon adds $Nk\\ln 2$ with no change of energy or temperature.',
      'The arrow of time is a memory: the universe began in a state of unusually low entropy, and its one-way relaxation is why heat flows, engines run, ratchets ratchet — and we remember the past.',
    ],
    quiz: [
      {
        q: 'At $T_1 = T_2 = T$, why does the ratchet and pawl produce no net rotation?',
        options: [
          'The pawl spring eventually breaks from fatigue',
          'The chance of borrowing the pawl energy $\\epsilon$ for a forward step equals the chance the pawl is accidentally up — both are $e^{-\\epsilon/kT}$ — so forward and backward steps balance',
          'The gas molecules stop colliding with the vanes at equilibrium',
          'Friction stops the wheel, and friction is not Brownian',
        ],
        answer: 1,
        explanation: 'The pawl is itself at temperature $T$ and has its own Brownian fluctuations: it lifts by accident just as often as the vanes can accumulate $\\epsilon$. The two exponentials are identical, so the wheel jiggles but goes nowhere — the second law at the molecular scale.',
      },
      {
        q: 'In the reversible condition, the ratchet’s forward-step energy $\\epsilon + L\\theta$ at $T_1$ and pawl energy $\\epsilon$ at $T_2$ satisfy:',
        options: [
          `$(\\epsilon + L\\theta)/T_1 = \\epsilon/T_2$, leading directly to $Q_1/Q_2 = T_1/T_2$`,
          '$\\epsilon + L\\theta = \\epsilon$ always',
          `$(\\epsilon + L\\theta)T_1 = \\epsilon T_2$`,
          'No relation — the ratchet is not an engine',
        ],
        answer: 0,
        explanation: 'Equality of the forward and backward rates requires the two Boltzmann exponents to match, and the resulting heat ratio is exactly Carnot’s — the whole theorem of Section 10.4 recovered from two exponentials.',
      },
      {
        q: 'What happens if the ratchet and pawl are kept hotter than the vanes ($T_2 > T_1$)?',
        options: [
          'Nothing — the machine simply stops',
          'The machine runs forward even faster',
          'The wheel turns in the direction opposite to its design — the bouncing hot pawl pushes the teeth the wrong way',
          'The second law is violated and work is extracted from a single temperature',
        ],
        answer: 2,
        explanation: 'A hot pawl is always pushing on an inclined plane; if it lifts past a tooth point, the plane slides by and it falls on the next incline, driving the wheel backwards — hard to believe at first sight, but forced by the rates.',
      },
      {
        q: 'One mole each of neon and argon, separated by a barrier in a box, are allowed to mix at constant temperature. The entropy change is:',
        options: [
          'Zero — no heat flows and temperature is unchanged',
          '$R\\ln 2 \\approx 5.8$ J/K',
          '$2R\\ln 2 \\approx 11.5$ J/K — $k\\ln 2$ per molecule',
          '$2RT \\approx 5$ kJ/K',
        ],
        answer: 2,
        explanation: 'Each gas doubles its accessible volume, contributing $R\\ln 2$; both together give $2R\\ln 2 \\approx 11.5$ J/K. The entropy of pure configuration — no energy changes hands, yet the process is irreversible.',
      },
      {
        q: 'Why does Feynman reject the idea that the world’s present order is a random fluctuation?',
        options: [
          'Because fluctuations are forbidden by quantum mechanics',
          'Because a fluctuation would predict disorder where we have not yet looked, while astronomers keep finding the same order in every new star they turn to',
          'Because the universe is infinite',
          'Because entropy cannot decrease even briefly',
        ],
        answer: 1,
        explanation: 'The most probable fluctuation producing local order leaves the unseen rest of the world mixed; an ordered beginning predicts order everywhere. Each newly observed star behaving “normally” is fresh evidence that the order is a memory of a low-entropy start — the origin of the arrow of time.',
      },
      // PYQ-pattern: JEE Mains 2019 — ideal gas law (rephrased, values changed)
      {
        q: 'A vessel holds $V = 24.6 \\text{ L}$ of gas at $P = 1.00 \\times 10^{5} \\text{ Pa}$ and $T = 300 \\text{ K}$. With $R = 8.314 \\text{ J/mol}\\cdot\\text{K}$, the amount of gas is:',
        options: [`$986 \\text{ mol}$`, `$0.50 \\text{ mol}$`, `$1.0 \\text{ mol}$`, `$2.0 \\text{ mol}$`],
        answer: 2,
        explanation: 'Step 1: Given $P = 1.00 \\times 10^{5} \\text{ Pa}$, $V = 24.6 \\text{ L}$, $T = 300 \\text{ K}$. Step 2: Governing law is the ideal gas relation $PV = nRT$. Step 3: Key equation: $$n = \\frac{PV}{RT} = \\frac{(1.00 \\times 10^{5})(2.46 \\times 10^{-2})}{(8.314)(300)}.$$ Step 4: Numerics give $n = 2460/2494 \\approx 0.99 \\text{ mol} \\approx 1.0 \\text{ mol}$ after converting $24.6 \\text{ L} = 2.46 \\times 10^{-2} \\text{ m}^{3}$; units $\\text{Pa}\\cdot\\text{m}^{3}/\\text{J}$ reduce to moles. Step 5: Distractors fail because $986$ uses liters as cubic meters, $0.50$ halves the volume, and $2.0$ doubles it. Step 6: Conclude the vessel holds about **$1.0 \\text{ mol}$**.',
      },
      // PYQ-pattern: GATE PH 2020 — kinetic theory speeds (rephrased, values changed)
      {
        q: 'For oxygen ($M = 0.032 \\text{ kg/mol}$) at $T = 300 \\text{ K}$, the root-mean-square molecular speed is closest to:',
        options: [`$395 \\text{ m/s}$`, `$484 \\text{ m/s}$`, `$968 \\text{ m/s}$`, `$48 \\text{ m/s}$`],
        answer: 1,
        explanation: 'Step 1: Given molar mass $M = 0.032 \\text{ kg/mol}$ and $T = 300 \\text{ K}$ with $R = 8.314 \\text{ J/mol}\\cdot\\text{K}$. Step 2: Governing law is equipartition $\\frac{1}{2}m\\langle v^{2}\\rangle = \\frac{3}{2}kT$, or $v_{rms} = \\sqrt{3RT/M}$. Step 3: Key equation: $$v_{rms} = \\sqrt{\\frac{3(8.314)(300)}{0.032}} = \\sqrt{233800}.$$ Step 4: Numerics give $v_{rms} \\approx 484 \\text{ m/s}$; units of $\\sqrt{\\text{J/kg}}$ are $\\text{m/s}$. Step 5: Distractors fail because $395$ is the most probable speed $\\sqrt{2RT/M}$, $968$ doubles the correct value, and $48$ slips a decimal place. Step 6: Conclude **$v_{rms} \\approx 484 \\text{ m/s}$**.',
      },
      // PYQ-pattern: JEE Advanced 2017 — adiabatic process (rephrased, values changed)
      {
        q: 'One mole of monatomic ideal gas ($\\gamma = \\frac{5}{3}$) at $T_{1} = 300 \\text{ K}$ expands adiabatically until its volume doubles. The final temperature is closest to:',
        options: [`$189 \\text{ K}$`, `$150 \\text{ K}$`, `$300 \\text{ K}$`, `$600 \\text{ K}$`],
        answer: 0,
        explanation: 'Step 1: Given $T_{1} = 300 \\text{ K}$, volume ratio $V_{2}/V_{1} = 2$, $\\gamma = \\frac{5}{3}$. Step 2: Governing law is the adiabatic condition $TV^{\\gamma-1} = \\text{constant}$, so $T_{2} = T_{1}/2^{\\gamma-1}$. Step 3: Key equation: $$T_{2} = \\frac{300}{2^{2/3}} = \\frac{300}{1.587}.$$ Step 4: Numerics give $T_{2} \\approx 189 \\text{ K}$; kelvins are mandatory here since the law needs absolute temperature. Step 5: Distractors fail because $150$ assumes $T$ halves like $V$ doubles, $300$ is the isothermal answer, and $600$ doubles instead of cooling. Step 6: Conclude the gas cools to about **$189 \\text{ K}$**.',
      },
      // PYQ-pattern: JEE Mains 2022 — Carnot engine (rephrased, values changed)
      {
        q: 'A reversible engine works between $T_{1} = 600 \\text{ K}$ and $T_{2} = 300 \\text{ K}$ and absorbs $Q_{1} = 1200 \\text{ J}$ per cycle. The work output per cycle is:',
        options: [`$1200 \\text{ J}$`, `$300 \\text{ J}$`, `$150 \\text{ J}$`, `$600 \\text{ J}$`],
        answer: 3,
        explanation: 'Step 1: Given hot reservoir $T_{1} = 600 \\text{ K}$, cold reservoir $T_{2} = 300 \\text{ K}$, intake $Q_{1} = 1200 \\text{ J}$. Step 2: Governing law is Carnot efficiency $\\eta = W/Q_{1} = 1 - T_{2}/T_{1}$. Step 3: Key equation: $$\\eta = 1 - \\frac{300}{600} = \\frac{1}{2}, \\qquad W = \\eta Q_{1} = \\frac{1200}{2}.$$ Step 4: Numerics give $W = 600 \\text{ J}$; units are joules and $W < Q_{1}$ as the second law demands. Step 5: Distractors fail because $1200$ converts all heat to work, $300$ halves the correct $600$ value, and $150$ quarters it. Step 6: Conclude the engine delivers **$600 \\text{ J}$ per cycle**.',
      },
      // PYQ-pattern: GATE PH 2018 — Boltzmann factor (rephrased, values changed)
      {
        q: 'In an isothermal atmosphere the density falls as $n = n_{0}e^{-h/H}$ with scale height $H$. At altitude $h = 2H$ the density ratio $n/n_{0}$ equals:',
        options: [`$0.50$`, `$0.135$`, `$0.018$`, `$1.0$`],
        answer: 1,
        explanation: 'Step 1: Given exponential profile $n = n_{0}e^{-h/H}$ evaluated at $h = 2H$. Step 2: Governing law is the Boltzmann factor $e^{-U/kT}$, which for $U = mgh$ gives the barometric falloff. Step 3: Key equation: $$\\frac{n}{n_{0}} = e^{-2H/H} = e^{-2} \\approx 0.135.$$ Step 4: Numerics use $e^{2} \\approx 7.39$ so $1/7.39 \\approx 0.135$; the ratio is dimensionless as required. Step 5: Distractors fail because $0.50$ assumes linear halving per scale height, $0.018 = e^{-4}$ applies the exponent twice, and $1.0$ ignores the altitude entirely. Step 6: Conclude the density drops to about **$0.135$ of the surface value**.',
      },
      // PYQ-pattern: JEE Mains 2023 — entropy change (rephrased, values changed)
      {
        q: 'One mole of ideal gas undergoes free expansion doubling its volume at fixed temperature. With $R = 8.314 \\text{ J/mol}\\cdot\\text{K}$, the entropy change of the gas is:',
        options: [`$0$`, `$11.5 \\text{ J/K}$`, `$5.76 \\text{ J/K}$`, `$-5.76 \\text{ J/K}$`],
        answer: 2,
        explanation: 'Step 1: Given $n = 1$ mole and volume ratio $V_{2}/V_{1} = 2$ at constant $T$. Step 2: Governing law is $\\Delta S = nR\\ln(V_{2}/V_{1})$ for the isothermal volume change. Step 3: Key equation: $$\\Delta S = (1)(8.314)\\ln 2 = (8.314)(0.693).$$ Step 4: Numerics give $\\Delta S \\approx 5.76 \\text{ J/K}$; units $\\text{J/K}$ match entropy and the sign is positive for expansion. Step 5: Distractors fail because $0$ confuses free expansion with a reversible cycle net, $11.5$ is the two-mole mixing value $2R\\ln 2$, and the negative sign claims order grew. Step 6: Conclude entropy rises by **$5.76 \\text{ J/K}$**.',
      },
    ],
  },
]

export const physCh10Formulas: FormulaEntry[] = [
  {
    chapterId: 'hall-ch19',
    section: '19.23',
    name: 'Ideal gas law',
    formula: 'PV = NkT',
    latex: 'PV = NkT',
    note: 'N = atoms; k = 1.38×10⁻²³ J/K; in moles PV = nRT, R = 8.317 J/mol·K',
  },
  {
    chapterId: 'hall-ch19',
    section: '19.23',
    name: 'Equipartition / temperature',
    formula: '⟨½mv²⟩ = (3/2)kT; ½kT per direction',
    latex: '\\left\\langle \\tfrac{1}{2}mv^2 \\right\\rangle = \\tfrac{3}{2}kT',
    note: 'defines the Kelvin scale; equal average KE for all gases at one T',
  },
  {
    chapterId: 'hall-ch19',
    section: '19.23',
    name: 'Adiabatic compression',
    formula: 'PVᵞ = C (γ = 5/3 monatomic)',
    latex: 'PV^{\\gamma} = C, \\qquad TV^{\\gamma - 1} = C',
    note: 'no heat exchange; a squeezed gas heats — the engine stroke',
  },
  {
    chapterId: 'hall-ch19',
    section: '19.24',
    name: 'Boltzmann distribution',
    formula: 'n = n₀·exp(−U/kT)',
    latex: 'n = n_0\\,e^{-U/kT}',
    note: 'probability falls exponentially with potential energy; mgh for the atmosphere',
  },
  {
    chapterId: 'hall-ch19',
    section: '19.24',
    name: 'Maxwell speed distribution',
    formula: 'f(u) = √(m/2πkT)·exp(−mu²/2kT)',
    latex: 'f(u) = \\sqrt{\\frac{m}{2\\pi kT}}\\ e^{-mu^2/2kT}',
    note: 'one velocity component; the three multiply to a function of v² alone',
  },
  {
    chapterId: 'hall-ch19',
    section: '19.25',
    name: 'Einstein’s Brownian displacement',
    formula: '⟨R²⟩ = 6kTt/μ',
    latex: '\\langle R^2 \\rangle = \\frac{6kTt}{\\mu}',
    note: 'watch a speck under a microscope and weigh Avogadro’s number',
  },
  {
    chapterId: 'hall-ch20',
    section: '20.16',
    name: 'Entropy (statistical and thermodynamic)',
    formula: 'S = k ln W; dS = dQ/T',
    latex: 'S = k\\ln W, \\qquad dS = \\frac{dQ}{T}',
    note: 'counting arrangements; reversible heat over temperature; S = 0 at T = 0',
  },
]
