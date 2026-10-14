import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// THE FEYNMAN LECTURES ON PHYSICS (New Millennium Edition) — Master Library
// Chapter 15: Quantum Mechanics (Sections 15.1 – 15.5 as mapped in library.ts)
// Sources: Feynman Vol. I, Lectures 37–38 (the two-hole experiment, wave and
// particle viewpoints) + Feynman Vol. III, Lectures 1–21 (amplitudes, spin,
// two-state systems, the Schrödinger equation, hydrogen, superconductivity).
// All worked-example numbers are Feynman’s own. Math is LaTeX, rendered by
// KaTeX through the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const physCh15Content: SectionContent[] = [
  // ------------------------------------------------------------------ 15.1
  {
    sectionId: 'phys-ch15-s1',
    readingTime: 10,
    intro: 'Feynman opens quantum mechanics with the one experiment that contains “the only mystery”: an electron gun, a wall with two holes, and a detector that clicks. Done with bullets the probabilities add; done with waves the intensities interfere; done with electrons the arrivals come in lumps — and the lumps pile up into an interference pattern. Between those three sentences sits the whole of quantum mechanics, including the uncertainty principle, which Feynman derives from the experiment itself rather than from formalism.',
    objectives: [
      'Contrast the bullet, wave and electron versions of the two-hole experiment and state what each implies about probabilities',
      'State and apply the three rules for combining probability amplitudes, including when interference is lost',
      'Explain why watching the electrons with light destroys the interference pattern, and why dimming the lamp or lengthening its wavelength fails to evade the effect',
      'Derive the Heisenberg uncertainty relation from the diffraction of a slit and from the recoil of the wall, and interpret it as a statement about predictability',
    ],
    concepts: [
      {
        term: 'The experiment with bullets',
        kind: 'law',
        statement: 'Bullets fired at a wall with two holes arrive at the backstop **in identical lumps**, and the probability of arrival with both holes open is the plain sum of the single-hole probabilities: $$P_{12} = P_1 + P_2.$$',
        detail: 'The machine gun sprays bullets over a wide angle, so any single bullet may land anywhere, but counting clicks at a movable detector (a box of sand) for equal times gives a smooth probability curve $P_{12}$. Blocking hole 2 gives the curve $P_1$, blocking hole 1 gives the symmetric curve $P_2$, and the both-holes curve is exactly their sum — “no interference.” The essential experimental fact is lumpiness: at low firing rate either nothing arrives or exactly one whole bullet arrives, never a half.',
      },
      {
        term: 'The experiment with waves',
        kind: 'law',
        statement: 'Water waves through the two holes give intensities that **interfere**: with heights written as complex amplitudes, $$I_{12} = |\\hat{h}_1 + \\hat{h}_2|^{2} = I_1 + I_2 + 2\\sqrt{I_1 I_2}\\cos\\delta,$$ where $\\delta$ is the phase difference between the two contributions at the detector.',
        detail: 'Constructive interference occurs where the detector is a whole number of wavelengths farther from one hole than from the other; destructive interference where the path difference is an odd number of half-wavelengths. The intensity can take any value at all — there is no lumpiness — and the cross term $2\\sqrt{I_1 I_2}\\cos\\delta$ has no counterpart in the bullet experiment. This is the machinery of Chapter 7’s interference, now written in the complex-amplitude notation that quantum mechanics will borrow.',
      },
      {
        term: 'The experiment with electrons',
        kind: 'insight',
        statement: 'Electrons arrive at the backstop **in identical lumps, like bullets, yet their probability of arrival is distributed like the intensity of a wave**: $P_{12} = |\\phi_1 + \\phi_2|^{2}$, which is not $P_1 + P_2$.',
        detail: 'The detector clicks erratically — click… click-click… click — but every click is the same size, and two detectors never click simultaneously. Nevertheless the accumulated curve shows maxima and minima. The mathematics is exactly the water-wave mathematics with two complex numbers $\\phi_1$ and $\\phi_2$: $P_1 = |\\phi_1|^{2}$, $P_2 = |\\phi_2|^{2}$, and $P_{12} = |\\phi_1 + \\phi_2|^{2}$. At the centre of the pattern $P_{12}$ is more than twice $P_1 + P_2$; at some points closing one hole increases the count. “An electron behaves sometimes like a particle and sometimes like a wave” means precisely this: lumps, distributed by interference.',
      },
      {
        term: 'Proposition A and its failure',
        kind: 'insight',
        statement: '“Each electron either goes through hole 1 or through hole 2” — Proposition A — **cannot be maintained** when nothing in the experiment distinguishes the two routes, because it would force $P_{12} = P_1 + P_2$, contradicting the observed interference.',
        detail: 'Every escape hatch fails: the electron cannot split in half (it always arrives whole), and no complicated trajectory game reproduces the observed curve. The resolution is operational, not mechanical: if a piece of apparatus could determine which hole the electron used, then one may say it went through one hole or the other; when no such apparatus exists, the statement is forbidden — deductions drawn from it give wrong answers. This is the logical tightrope on which all of quantum mechanics walks.',
      },
      {
        term: 'Watching the electrons: the lamp experiment',
        kind: 'method',
        statement: 'Placing a strong light source behind the holes makes each electron visible as a flash near one hole or the other — never both — and the recorded distribution becomes the no-interference sum $P^{\\prime}_{12} = P^{\\prime}_{1} + P^{\\prime}_{2}$; with the light off, the interference returns.',
        detail: 'Sorting the clicks into “seen at 1” and “seen at 2” reproduces the single-hole curves. Turning the lamp down does not weaken the flashes — each scattered photon delivers the same-sized jolt — it only makes some electrons pass unseen, and those unseen electrons show the wavy distribution. Photons, like electrons, arrive in lumps; dimming the source reduces their rate, not their size.',
      },
      {
        term: 'The wavelength compromise',
        kind: 'insight',
        statement: 'To disturb the electrons gently one uses longer-wavelength light — but once the wavelength exceeds the hole separation, the flash becomes too fuzzy to tell **which** hole, and the interference reappears.',
        detail: 'The photon momentum is $p = h/\\lambda$, so the recoil jolt shrinks as the wavelength grows. But a microscope cannot resolve two spots closer than about a wavelength (Chapter 8), so the which-hole information disappears at exactly the moment the disturbance becomes negligible. There is no arrangement — no wavelength, no brightness, no trick — that yields the which-hole information without destroying the pattern.',
      },
      {
        term: 'Heisenberg’s uncertainty principle',
        kind: 'theorem',
        statement: 'If a measurement determines the $x$-component of momentum to within $\\Delta p$, the $x$-position cannot be known better than $$\\Delta x \\ge \\frac{\\hbar}{2\\,\\Delta p},$$ and no apparatus can be built that determines which of two alternatives was taken without destroying the interference between them.',
        detail: 'Feynman demonstrates the general statement with the wall on rollers: measuring the plate’s recoil reveals which hole the electron used, but the plate’s own position uncertainty — guaranteed by the same principle — shifts the whole pattern up and down by roughly the max-to-min distance, smearing the fringes. The uncertainty principle “protects” quantum mechanics: if position and momentum could be measured simultaneously to arbitrary accuracy, the theory would collapse, and nobody has ever found a way around it. It is a statement about predictability, not about clumsy hands — retrodiction (“it must have had this momentum to arrive there”) is not what the inequality constrains.',
      },
      {
        term: 'The rules of quantum mechanics (the summary)',
        kind: 'law',
        statement: 'For an ideal experiment: (1) the probability of an event is the absolute square of a complex **probability amplitude**, $P = |\\phi|^{2}$; (2) if the event can occur in several indistinguishable ways, the amplitude is the sum of the amplitudes for each way, $\\phi = \\phi_1 + \\phi_2$; (3) if an experiment is capable of determining which alternative actually occurred, the probabilities add, $P = P_1 + P_2$.',
        detail: 'These three sentences are the whole machinery — there is no deeper “gearing” behind them, and no one has found any. Rule 2 is where interference lives; rule 3 is where it dies. Everything in the rest of this chapter — ammonia, spin, hydrogen, superconductors — is these three rules applied to different choices of base states.',
      },
      {
        term: 'Physics has given up exact prediction',
        kind: 'insight',
        statement: 'Quantum mechanics predicts only the **probability** of each outcome of an ideally prepared experiment — not the outcome itself — and no “internal machinery” inside the electron can restore determinism without contradicting the interference experiments.',
        detail: 'If the electron carried hidden instructions fixing its hole and its landing point, those instructions could not depend on which hole we later block, and $P_{12}$ would have to equal $P_1 + P_2$ — which it does not. Feynman is careful to add that classical physics is also unpredictable in practice (Chapter 2’s cascade of tiny errors grows exponentially), but quantum indeterminacy is fundamental. The uncertainty principle is not ignorance of a deeper reality; it is the way nature is.',
      },
    ],
    examples: [
      {
        title: 'Interference arithmetic: equal amplitudes',
        problem: 'Two holes deliver electrons to a detector point with equal-amplitude contributions, $|\\phi_1| = |\\phi_2| = a$, and a relative phase $\\delta$ set by the geometry. Compare the quantum prediction $P_{12}$ with the “bullet” answer $P_1 + P_2$.',
        steps: [
          { label: 'Step 1: Write the combined probability', text: 'The rule for indistinguishable alternatives gives $P_{12} = |\\phi_1 + \\phi_2|^{2}$. Expand it exactly as for water waves: $$P_{12} = |\\phi_1|^{2} + |\\phi_2|^{2} + 2|\\phi_1||\\phi_2|\\cos\\delta.$$' },
          { label: 'Step 2: Insert equal magnitudes', text: 'With $|\\phi_1| = |\\phi_2| = a$: $P_{12} = 2a^{2}(1 + \\cos\\delta) = 4a^{2}\\cos^{2}(\\delta/2)$, while the bullet rule would give $P_1 + P_2 = 2a^{2}$ whatever $\\delta$. The interference term $2a^{2}\\cos\\delta$ carries all the difference.' },
          { label: 'Step 3: Evaluate the extremes', text: 'In phase ($\\delta = 0$): $P_{12} = 4a^{2}$ — twice the naive sum, four times one hole alone. Out of phase ($\\delta = \\pi$): $P_{12} = 0$ — electrons that would have arrived through either hole alone cancel completely. At $\\delta = \\pi/2$ the two rules agree by accident.' },
          { label: 'Step 4: Read the physics', text: 'Take $|\\phi_1|^{2} = |\\phi_2|^{2} = 0.10$ counts per second. The bullet rule predicts a fixed $0.20$ per second at this point; quantum mechanics predicts anything from $0$ to $0.40$ per second depending on $\\delta$ — which is why moving the detector across the backstop traces out fringes.' },
        ],
        result: 'Quantum: $P_{12} = 4a^{2}\\cos^{2}(\\delta/2)$, oscillating between $0$ and $4a^{2}$; classical addition of probabilities gives the constant $2a^{2}$. The entire two-hole experiment is this one line of algebra.',
      },
      {
        title: 'The uncertainty principle from a single slit',
        problem: 'Particles of horizontal momentum $p_0$ arrive at a slit of width $B$. Show that the diffraction spread of the emerging beam forces $\\Delta y\\,\\Delta p_y \\approx h$, and explain why the product cannot be beaten by choosing a clever slit width.',
        steps: [
          { label: 'Step 1: Fix the position', text: 'A particle that passes the slit has its vertical coordinate known to about $\\Delta y \\approx B$ — this is the position measurement.' },
          { label: 'Step 2: Let the wave diffract', text: 'Beyond the slit the beam spreads to the first diffraction minimum at $\\Delta\\theta = \\lambda/B$ (Chapter 8), so the vertical momentum acquires a spread $\\Delta p_y = p_0\\,\\Delta\\theta = p_0\\lambda/B$.' },
          { label: 'Step 3: Use the de Broglie relation', text: 'With $\\lambda = h/p_0$, the product is $\\Delta y\\,\\Delta p_y = B \\cdot p_0\\lambda/B = p_0\\lambda = h = 2\\pi\\hbar$ — of the order of the exact bound $\\hbar/2$ up to factors of $2\\pi$ that the crude argument cannot resolve.' },
          { label: 'Step 4: Check the trade-off', text: 'Halving $B$ doubles the momentum spread — a narrower slit means a wider pattern, exactly as observed with microwaves in Chapter 8. Making the slit wider buys momentum certainty at the price of losing position certainty; no value of $B$ makes both small.' },
        ],
        result: '$\\Delta y\\,\\Delta p_y \\approx h$, the order-of-magnitude form of Heisenberg’s $\\Delta y\\,\\Delta p_y \\ge \\hbar/2$. The slit is a position measurement whose unavoidable consequence is momentum uncertainty — not clumsy apparatus, but wave nature.',
      },
      {
        title: 'The recoil of the wall',
        problem: 'Suppose the hole plate is mounted on rollers so its recoil tells which hole the electron used. Why does the interference pattern still vanish?',
        steps: [
          { label: 'Step 1: Set up the recoil measurement', text: 'An electron reaching a detector above the axis must be deflected downward, so the plate takes an upward kick if the electron used hole 1 and a downward kick if it used hole 2. Comparing the plate’s momentum before and after reveals the route — apparently without touching the electron at all.' },
          { label: 'Step 2: Ask what the measurement demands', text: 'To distinguish the two kicks, the plate’s momentum must be known more sharply than the momentum difference between the two routes. By the uncertainty principle, its position is then uncertain by at least $\\hbar/2\\Delta p$.' },
          { label: 'Step 3: Watch the pattern move', text: 'If the plate’s position is uncertain, so are the holes — the whole interference pattern shifts up and down randomly from electron to electron by exactly the max-to-min distance implied by that uncertainty.' },
          { label: 'Step 4: Conclude', text: 'The random shifts smear the fringes away completely. The electron was never touched, yet the pattern is gone — the uncertainty principle closes the loophole automatically, which is why Feynman says it “protects” quantum mechanics.' },
        ],
        result: 'Which-hole information via plate recoil costs the plate a position uncertainty that smears the fringes; interference and path knowledge cannot coexist, in accordance with the general uncertainty principle.',
      },
    ],
    keyTakeaways: [
      'Bullets: lumps and $P_{12} = P_1 + P_2$. Waves: continuous intensity and interference. Electrons: lumps and interference — $P_{12} = |\\phi_1 + \\phi_2|^{2}$.',
      'The three rules: probability is the absolute square of an amplitude; amplitudes add for indistinguishable alternatives; probabilities add when the alternatives are distinguishable in principle.',
      'Watching the electrons — with photons of wavelength short enough to resolve the holes — always destroys the interference, and no dimness or wavelength trick evades it.',
      'Heisenberg: $\\Delta x\\,\\Delta p \\ge \\hbar/2$, understood experimentally as the impossibility of a which-hole apparatus that does not disturb the pattern.',
      'Proposition A (“it goes through one hole or the other”) is usable only when an apparatus could in principle check it; otherwise deductions from it give wrong predictions.',
      'Quantum mechanics predicts probabilities only — physics has “given up” exact prediction, and no hidden internal machinery can restore it without contradicting experiment.',
    ],
    quiz: [
      {
        q: 'In the two-hole experiment, electrons arrive at the backstop:',
        options: ['In fractions of a lump when the rate is low, building up intensity smoothly', 'In identical lumps, distributed according to $|\\phi_1 + \\phi_2|^{2}$', 'As continuous waves with no lumpiness at all', 'In identical lumps, distributed according to $P_1 + P_2$'],
        answer: 1,
        explanation: 'Each click is the same size — electrons “always arrive in identical lumps” — but the accumulated probability curve shows interference, $P_{12} = |\\phi_1 + \\phi_2|^{2}$, which is the wave-like part.',
      },
      {
        q: 'The lamp is placed behind the holes and every arriving electron is seen as a flash near one hole or the other. What distribution do the electrons now show?',
        options: ['The same interference pattern as with the light off', 'A pattern with twice the fringe contrast', 'The no-interference sum $P^{\\prime}_{12} = P^{\\prime}_{1} + P^{\\prime}_{2}$', 'A pattern identical to the water-wave intensity curve'],
        answer: 2,
        explanation: 'Watching makes the alternatives distinguishable, so probabilities — not amplitudes — add, and the interference disappears. Turn the light off and the fringes return.',
      },
      {
        q: 'To disturb the electrons less, the wavelength of the watching light is steadily increased. What happens?',
        options: ['The flashes get weaker until interference survives alongside which-hole knowledge', 'The flashes keep the same size but the wavelength eventually exceeds the hole spacing, so which-hole information is lost and interference returns', 'The electrons absorb the photons and stop reaching the backstop', 'Nothing — wavelength has no effect on the scattering of light by charge'],
        answer: 1,
        explanation: 'Photon momentum $p = h/\\lambda$ shrinks with wavelength, but resolution is also of order $\\lambda$: once $\\lambda$ exceeds the hole separation the flash is too fuzzy to identify the hole, and the interference pattern comes back.',
      },
      {
        q: 'Which statement of the uncertainty principle is Feynman’s general one?',
        options: ['Measuring a position always physically damages the instrument', 'No apparatus can determine which of two alternatives was taken without destroying the interference between them', 'Momentum can never be measured exactly at any time', 'Two holes can never be closer together than a wavelength of light'],
        answer: 1,
        explanation: 'The general form concerns which-way information and interference; $\\Delta x \\ge \\hbar/2\\Delta p$ is the special case applied to position and momentum, which Feynman derives from the slit-diffraction and recoiling-wall arguments.',
      },
      {
        q: 'According to the summary rules, when an event can occur in several indistinguishable alternative ways:',
        options: ['The probabilities of the alternatives add', 'The amplitudes of the alternatives add before taking the absolute square', 'The event cannot occur at all', 'The largest single probability wins'],
        answer: 1,
        explanation: 'Rule 2: $\\phi = \\phi_1 + \\phi_2$ and $P = |\\phi_1 + \\phi_2|^{2}$. Probabilities add only when rule 3 applies — when an experiment is capable of determining which alternative occurred.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.2
  {
    sectionId: 'phys-ch15-s2',
    readingTime: 10,
    intro: 'Volume III rebuilds the two-hole story as bookkeeping. An amplitude is written with Dirac’s bracket $\\langle x|s\\rangle$; amplitudes multiply along a route and add across routes. Applied to particles that are truly indistinguishable, the bookkeeping splits nature in two: bosons, whose exchanged amplitudes add with a plus sign, and fermions, whose exchanged amplitudes add with a minus. Out of that single sign difference come the laser, the blackbody spectrum, the periodic table, the rigidity of matter — and, by minimizing energy against the uncertainty principle, the size of the hydrogen atom itself.',
    objectives: [
      'Write amplitudes in Dirac bracket notation and combine them with the multiplication and addition rules',
      'Distinguish when to add amplitudes (indistinguishable alternatives) from when to add probabilities (distinct final states)',
      'State the Bose and Fermi exchange rules and compute identical-particle scattering probabilities, including the 90° special cases',
      'Derive the Bose enhancement factor and the Planck mean occupation number from the $(n+1)|a|^{2}$ emission rule',
      'Estimate the size and ground-state energy of the hydrogen atom by minimizing energy subject to the uncertainty principle',
    ],
    concepts: [
      {
        term: 'Dirac bracket notation',
        kind: 'notation',
        statement: 'The amplitude that a particle which leaves a source $s$ will arrive at $x$ is written $\\langle x|s\\rangle$ — a single complex number, read right to left: **finish | start**.',
        detail: 'The condition on the right of the vertical bar is the starting condition, the one on the left the final condition. Brackets can be cut into a “bra” $\\langle\\chi|$ and a “ket” $|\\varphi\\rangle$, which will later let us write whole states and operators without choosing a representation. All the two-hole arithmetic of Section 15.1 survives unchanged in this notation.',
      },
      {
        term: 'Laws for combining amplitudes',
        kind: 'law',
        statement: 'Amplitudes for **successive** events multiply, and amplitudes for **alternative indistinguishable** routes add: $$\\langle x|s\\rangle_{\\text{both holes}} = \\langle x|1\\rangle\\langle 1|s\\rangle + \\langle x|2\\rangle\\langle 2|s\\rangle.$$',
        detail: 'For a particle that passes hole 1 and then hole $a$ of a second wall and then reaches $x$, the amplitude is a product of three brackets, and the full amplitude is a double sum over all such routes, $\\langle x|s\\rangle = \\sum_{i,\\alpha}\\langle x|\\alpha\\rangle\\langle\\alpha|i\\rangle\\langle i|s\\rangle$. Crucially, to predict everything beyond the first wall you need only the two numbers $\\langle 1|s\\rangle$ and $\\langle 2|s\\rangle$ — two complex numbers contain the whole future. For two non-interacting particles the joint amplitude is the product of the individual ones.',
      },
      {
        term: 'The free-particle amplitude',
        kind: 'law',
        statement: 'Apart from a numerical factor, the amplitude for a particle of definite momentum $\\mathbf{p}$ to go from $\\mathbf{r}_1$ to $\\mathbf{r}_2$ in empty space is $$\\langle \\mathbf{r}_2|\\mathbf{r}_1\\rangle = \\frac{e^{i\\mathbf{p}\\cdot\\mathbf{r}_{12}/\\hbar}}{r_{12}},$$ with $\\mathbf{r}_{12} = \\mathbf{r}_2 - \\mathbf{r}_1$.',
        detail: 'The amplitude propagates as a wave of wave number $k = p/\\hbar$, falling off as $1/r$ — the quantum version of a spherical wave. In general the amplitude also depends on time and satisfies a wave equation — the Schrödinger equation of Section 15.5. Feynman warns against picturing it as a real wave in space: for two particles the amplitude lives in six space variables, not three.',
      },
      {
        term: 'Never add amplitudes for distinct final states',
        kind: 'law',
        statement: 'Amplitudes may be summed only for **indistinguishable alternatives inside** an experiment; for different final conditions you square first and then add: $$P = |a\\phi_1 + b\\phi_2|^{2} + |a\\phi_2 + b\\phi_1|^{2}.$$',
        detail: 'In the watched two-hole experiment, $a$ is the amplitude that a photon scatters into detector $D_1$ from the electron at hole 1 and $b$ the amplitude that it does so from hole 2. Short-wavelength design makes $b \\approx 0$, and the $D_1$-coincidence curve is single-hole-like; long-wavelength light gives $b \\approx a$ and the interference reappears — a quantitative version of the lamp experiment. But the amplitude for “photon in $D_1$” and “photon in $D_2$” must never be added: once the photon is counted, nature has already committed. “Nature does not know what you are looking at, and she behaves the way she is going to behave whether you bother to take down the data or not.”',
      },
      {
        term: 'Identical particles: Bose and Fermi rules',
        kind: 'law',
        statement: 'If two identical particles are exchanged, the total amplitude is multiplied by $e^{i\\delta}$ with $e^{2i\\delta} = 1$, so only two classes exist: **Bose particles** add the exchanged amplitude with a $+$ sign, **Fermi particles** with a $-$ sign — $|f(\\theta) \\pm f(\\pi-\\theta)|^{2}$.',
        detail: 'Bose particles: the photon, the mesons, the graviton. Fermi particles: the electron, the muon, the neutrinos, the nucleons and baryons. The experiment is $\\alpha$-particle scattering: for $\\alpha$’s on oxygen the probabilities add, but for $\\alpha$’s on $\\alpha$’s the amplitudes interfere — at $90^{\\circ}$ the Bose answer $4|f(\\pi/2)|^{2}$ is exactly twice the distinguishable-particle answer $2|f(\\pi/2)|^{2}$. For electrons with parallel spins the Fermi answer at $90^{\\circ}$ is $|f - f|^{2} = 0$, and an unpolarized electron beam gives one half of the classical result.',
      },
      {
        term: 'Composite particles and the spin–statistics connection',
        kind: 'insight',
        statement: 'A composite object behaves as a boson or a fermion according to whether it contains an **even or odd number** of fermions — equivalently, integral spin means Bose behavior and half-integral spin means Fermi behavior.',
        detail: 'The $\\alpha$ particle (two protons + two neutrons) exchanges four fermion pairs in all when two $\\alpha$’s are interchanged, so the signs cancel and it is a boson; $\\mathrm{He}^{4}$ (spin 0) is boson-like while $\\mathrm{He}^{3}$ (spin 1/2) is fermion-like, which is why the two isotopes superflow differently. Pauli proved from quantum field theory and relativity that half-integral spin must go with the minus sign, but no elementary explanation exists — “it appears to be one of the few places in physics where there is a rule which can be stated very simply, but for which no one has found a simple and easy explanation.”',
      },
      {
        term: 'Bose enhancement and the blackbody spectrum',
        kind: 'law',
        statement: 'With $n$ identical bosons already in a state, the probability of emitting one more into that state is $(n+1)|a|^{2}$; absorbing one is $n|a|^{2}$; balance against Boltzmann populations gives the mean occupancy $$\\bar{n} = \\frac{1}{e^{\\hbar\\omega/kT} - 1}.$$',
        detail: 'The $n!$ enhancement of joint Bose scattering is the microscopic origin: a state with $n$ bosons attracts the $(n+1)$-th with probability boosted by the factor $(n+1)$. The emission rule contains Einstein’s $A$ and $B$ coefficients of Chapter 10 — spontaneous emission $|a|^{2}$, induced emission $n|a|^{2}$, absorption $n|a|^{2}$, all with equal coefficients when intensity is counted in photons. Equating upward and downward rates, $N_g\\,n = N_e(n+1)$ with $N_e/N_g = e^{-\\hbar\\omega/kT}$, yields the Planck factor; Feynman notes the marvel that a box mode populated by non-interacting bosons is mathematically identical to a harmonic oscillator with levels $n\\hbar\\omega$.',
      },
      {
        term: 'The exclusion principle',
        kind: 'law',
        statement: 'Two Fermi particles can never occupy exactly the same state — as the two alternatives merge, the amplitude $\\langle 1|a\\rangle\\langle 2|b\\rangle - \\langle 2|a\\rangle\\langle 1|b\\rangle$ **vanishes identically** unless their spins are opposite.',
        detail: 'This one rule makes the world: the variety of the periodic table, the stability and rigidity of matter (two electrons per location, spins opposed, force the rest outward), the directional chemistry of bonds (two shared electrons between nuclei is the maximum), ferromagnetism’s mysterious strong alignment, and nuclear structure — deuterium binds with parallel nucleon spins, but di-proton $\\mathrm{He}^{2}$ cannot exist because parallel protons are excluded and anti-parallel ones bind too weakly. Remove the rule and every atom would be a featureless ball of electrons piled on its nucleus.',
      },
      {
        term: 'The size of the hydrogen atom',
        kind: 'method',
        statement: 'Confining the electron to a region of size $a$ costs kinetic energy $\\hbar^{2}/2ma^{2}$ against the Coulomb attraction $-e^{2}/a$; minimizing $$E(a) = \\frac{\\hbar^{2}}{2ma^{2}} - \\frac{e^{2}}{a}$$ gives the Bohr radius $a_0 = \\hbar^{2}/me^{2} = 0.528$ Å and the energy $E_0 = -me^{4}/2\\hbar^{2} = -13.6$ eV.',
        detail: 'The momentum spread forced by the uncertainty relation is $p \\approx \\hbar/a$. Setting $dE/da = 0$ gives $-\\hbar^{2}/ma^{3} + e^{2}/a^{2} = 0$, hence $a_0 = \\hbar^{2}/me^{2} = 0.528 \\times 10^{-10}$ m. Atoms are of angstrom size, their ionization energy is one Rydberg, 13.6 eV, and “we now understand why we do not fall through the floor”: squeezing atoms raises the electron momenta, and hence the energy — the rigidity of matter is a quantum effect. The argument is dimensional analysis plus the uncertainty principle; that it lands on the exact numbers is, Feynman admits, a happy conspiracy of constants.',
      },
    ],
    examples: [
      {
        title: 'Identical-particle scattering at 90°',
        problem: 'A collision experiment sends one particle into counter $D_1$ at angle $\\theta$ and the other into $D_2$. The single-particle scattering amplitude is $f(\\theta)$. Compare the $90^{\\circ}$ counting rates for (a) distinguishable particles, (b) identical $\\alpha$ particles, (c) identical electrons with parallel spins, and (d) unpolarized electrons.',
        steps: [
          { label: 'Step 1: Distinguishable particles', text: 'The routes “a into $D_1$, b into $D_2$” and the exchange are distinguishable in principle, so probabilities add: $P = |f(\\theta)|^{2} + |f(\\pi-\\theta)|^{2}$. At $\\theta = \\pi/2$ the two terms are equal: $P = 2|f(\\pi/2)|^{2}$.' },
          { label: 'Step 2: Identical bosons ($\\alpha$ on $\\alpha$)', text: 'The exchanged alternative is indistinguishable and adds with a plus sign: $P = |f(\\theta) + f(\\pi-\\theta)|^{2}$. At $90^{\\circ}$ this is $|2f(\\pi/2)|^{2} = 4|f(\\pi/2)|^{2}$ — twice the distinguishable result, exactly as observed for $\\mathrm{He}^{4}$ targets but not for $\\mathrm{He}^{3}$ or oxygen.' },
          { label: 'Step 3: Identical fermions, parallel spins', text: 'Electrons add with a minus sign: $P = |f(\\theta) - f(\\pi-\\theta)|^{2}$. At $90^{\\circ}$ this is exactly zero — antiparallel arrival is forbidden by the exclusion principle when the spins are parallel.' },
          { label: 'Step 4: Unpolarized electrons', text: 'Random spins give the four cases of Table 3-1: halves of parallel–parallel (interference with the minus sign) and halves of opposite spins (no interference). Total: $\\tfrac{1}{2}|f(\\theta)-f(\\pi-\\theta)|^{2} + \\tfrac{1}{2}|f(\\theta)|^{2} + \\tfrac{1}{2}|f(\\pi-\\theta)|^{2}$, which at $90^{\\circ}$ reduces to $|f(\\pi/2)|^{2}$ — one half of the classical $2|f|^{2}$.' },
        ],
        result: 'At $\\theta = 90^{\\circ}$: distinguishable $2|f|^{2}$; bosons $4|f|^{2}$; parallel-spin fermions $0$; unpolarized fermions $|f|^{2}$. The same apparatus reads out the statistics of the particles it scatters.',
      },
      {
        title: 'Size and energy of the hydrogen atom',
        problem: 'Use the uncertainty principle to estimate the radius $a_0$ of the hydrogen atom and its ground-state energy, and check the numbers.',
        steps: [
          { label: 'Step 1: Write the energy as a function of confinement', text: 'A confinement $a$ forces $p \\approx \\hbar/a$, so the kinetic energy is $p^{2}/2m = \\hbar^{2}/2ma^{2}$, while the electron–proton attraction contributes $-e^{2}/a$ (with $e^{2}$ shorthand for $q_e^{2}/4\\pi\\varepsilon_0$): $$E(a) = \\frac{\\hbar^{2}}{2ma^{2}} - \\frac{e^{2}}{a}.$$' },
          { label: 'Step 2: Minimize', text: 'Set $dE/da = -\\hbar^{2}/ma^{3} + e^{2}/a^{2} = 0$. Multiplying by $a^{3}$: $-\\hbar^{2}/m + e^{2}a = 0$, so $a_0 = \\hbar^{2}/me^{2}$.' },
          { label: 'Step 3: Insert the value', text: 'With $\\hbar = 1.055\\times10^{-34}$ J·s, $m = 9.11\\times10^{-31}$ kg and $e^{2} = 2.31\\times10^{-28}$ J·m: $a_0 = (1.11\\times10^{-68})/(2.10\\times10^{-58}) \\approx 5.3\\times10^{-11}$ m $= 0.528$ Å — the Bohr radius.' },
          { label: 'Step 4: Evaluate the energy', text: 'Substituting $a_0$ back: $E_0 = -e^{2}/2a_0 = -me^{4}/2\\hbar^{2} = -13.6$ eV. The negative sign means the electron is bound: it takes 13.6 eV — one Rydberg — to ionize hydrogen, the number spectroscopy confirms.' },
        ],
        result: '$a_0 = \\hbar^{2}/me^{2} = 0.528$ Å and $E_0 = -13.6$ eV. The atom settles at the one size where confinement cost and Coulomb gain balance — the reason matter has an atomic scale at all.',
      },
      {
        title: 'Photons in a state: hot microwaves, empty light',
        problem: 'A cavity mode of frequency $\\omega$ sits in thermal equilibrium at temperature $T$. Compute the mean number of photons in the mode for (a) a 24 GHz maser mode at room temperature ($T = 300$ K) and (b) a visible photon of energy 2 eV in a hot furnace at $3000$ K.',
        steps: [
          { label: 'Step 1: State the Bose mean number', text: 'Balancing emission $(n+1)|a|^{2}$ against absorption $n|a|^{2}$ with $N_e/N_g = e^{-\\hbar\\omega/kT}$ gives $\\bar{n} = 1/(e^{\\hbar\\omega/kT} - 1)$.' },
          { label: 'Step 2: The maser mode at 300 K', text: 'For $f = 2.4\\times10^{10}$ Hz: $\\hbar\\omega = hf = 6.63\\times10^{-34} \\times 2.4\\times10^{10} = 1.59\\times10^{-23}$ J $\\approx 10^{-4}$ eV. With $kT = 4.14\\times10^{-21}$ J $\\approx 1/40$ eV, the ratio is $\\hbar\\omega/kT \\approx 0.004$, so $\\bar{n} \\approx 1/0.004 \\approx 260$ photons crowd into the single mode.' },
          { label: 'Step 3: Visible light in a furnace', text: 'For a 2 eV photon at $T = 3000$ K ($kT \\approx 0.26$ eV): $\\hbar\\omega/kT \\approx 7.7$, so $\\bar{n} = 1/(e^{7.7} - 1) \\approx 4.5\\times10^{-4}$. Visible modes are essentially empty — which is why induced emission dominates at microwave frequencies (masers) while spontaneous emission dominates for light (lasers need ingenuity).' },
          { label: 'Step 4: The rule of thumb', text: 'Modes with $\\hbar\\omega \\ll kT$ hold many photons each and behave classically; modes with $\\hbar\\omega \\gg kT$ are dark. The crossover at $\\hbar\\omega \\approx kT$ is the Wien peak of the blackbody spectrum of Chapter 10.' },
        ],
        result: 'About 260 photons occupy a 24 GHz mode at 300 K, while a 2 eV mode at 3000 K holds less than one photon in a thousand — the Bose factor governs where stimulated emission matters.',
      },
    ],
    keyTakeaways: [
      'Amplitudes multiply along a route and add across indistinguishable routes; for distinguishable final states, square first and then add probabilities.',
      'A free particle of momentum $\\mathbf{p}$ carries the amplitude $e^{i\\mathbf{p}\\cdot\\mathbf{r}/\\hbar}/r$ — wave behavior with no real wave in space.',
      'Exchange symmetry has only two signs: bosons add exchanged amplitudes with $+$, fermions with $-$; at $90^{\\circ}$ scattering this means $4|f|^{2}$, $2|f|^{2}$ or $0$ depending on the particles and spins.',
      'Composite particles are bosons or fermions according to the evenness of their fermion count — $\\mathrm{He}^{4}$ versus $\\mathrm{He}^{3}$.',
      'The $(n+1)$-fold Bose emission enhancement gives the Einstein coefficients and the Planck factor $\\bar{n} = 1/(e^{\\hbar\\omega/kT}-1)$.',
      'The exclusion principle — no two fermions in the same state — builds the periodic table, chemical bonding, ferromagnetism and the stability of matter.',
      'Minimizing $E(a) = \\hbar^{2}/2ma^{2} - e^{2}/a$ against the uncertainty principle yields $a_0 = 0.528$ Å and $E_0 = -13.6$ eV: the atom’s size and binding.',
    ],
    quiz: [
      {
        q: 'For a particle that goes from the source $s$ through hole 1 to point $x$, the amplitude is:',
        options: [`$\\langle x|1\\rangle + \\langle 1|s\\rangle$`, `$\\langle x|1\\rangle\\langle 1|s\\rangle$`, `$\\langle 1|x\\rangle\\langle s|1\\rangle$`, `$|\\langle x|s\\rangle|^{2}$`],
        answer: 1,
        explanation: 'Successive events multiply: the amplitude is $\\langle x|1\\rangle\\langle 1|s\\rangle$, read right to left (source to hole to detector). Addition is reserved for alternative routes to the same final condition.',
      },
      {
        q: 'Two identical particles scatter. Exchanging the roles of the two particles multiplies the amplitude by $e^{i\\delta}$. What values can $e^{i\\delta}$ take?',
        options: ['Any phase whatsoever, depending on the particle', 'Only $+1$ or $-1$, because exchanging twice must return the original situation', 'Only $+1$, since probabilities are positive', 'Only $i$ or $-i$ for fermions'],
        answer: 1,
        explanation: 'A second exchange restores the original process, so $(e^{i\\delta})^{2} = 1$: the exchanged amplitude enters with the same sign (Bose) or the opposite sign (Fermi). Both classes occur in nature.',
      },
      {
        q: 'The amplitude to emit a photon into a state that already contains $n$ photons is increased by the factor:',
        options: [`$n$`, `$\\sqrt{n}$`, `$\\sqrt{n+1}$`, `$n+1$`],
        answer: 2,
        explanation: 'The emission probability grows by $(n+1)$, so the amplitude grows by $\\sqrt{n+1}$ — the Bose enhancement that underlies stimulated emission, lasers and the Planck spectrum.',
      },
      {
        q: 'Why does lithium have one loosely held valence electron while helium is inert?',
        options: ['Lithium’s nucleus is smaller, so it attracts electrons weakly', 'The exclusion principle allows only two electrons in the lowest state, so lithium’s third electron must occupy a wider, higher-energy state', 'Helium’s electrons repel each other more strongly', 'Lithium atoms are heavier and move faster'],
        answer: 1,
        explanation: 'Two electrons (opposite spins) can share the lowest orbital; a third is excluded and must sit farther out, where it is weakly bound — the seed of all valence chemistry.',
      },
      {
        q: 'In Feynman’s estimate of the hydrogen atom, what balances the Coulomb attraction as $a$ shrinks?',
        options: ['The photon pressure of the electron’s radiation', 'The kinetic energy $\\hbar^{2}/2ma^{2}$ that the uncertainty principle forces on a confined electron', 'The proton’s magnetic moment', 'The repulsion of other electrons in the atom'],
        answer: 1,
        explanation: 'Confinement to size $a$ implies $p \\approx \\hbar/a$, hence kinetic energy $\\hbar^{2}/2ma^{2}$ that blows up as $a$ shrinks; the minimum of $E(a)$ is the Bohr radius, 0.528 Å.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.3
  {
    sectionId: 'phys-ch15-s3',
    readingTime: 9,
    intro: 'To do quantum mechanics “properly” Feynman picks a system with no classical analog: spin-one atoms filtered by a Stern–Gerlach magnet. The filter splits a beam into three pure states, and every manipulation of filters teaches a law — base states have no memory, wide-open filters do nothing, and interfering amplitudes are the machinery underneath. The same bookkeeping, extended to time, produces the Hamiltonian matrix $H_{ij}$, the operator that makes states move; for spin one-half it condenses into the three Pauli matrices.',
    objectives: [
      'Describe the Stern–Gerlach filter and the base states of a spin-one particle, and explain why base states have no memory of the past',
      'State and apply the three general laws of amplitudes, including the resolution rule over a complete set of base states',
      'Explain the interference experiment that shows a filter with all channels open changes nothing',
      'Write the time-evolution equations of the amplitudes and identify the Hamiltonian matrix, its Hermiticity and its meaning as the energy matrix',
      'Use the Pauli spin matrices to write the Hamiltonian of a spin one-half particle in a magnetic field and verify their multiplication table',
    ],
    concepts: [
      {
        term: 'The Stern–Gerlach filter',
        kind: 'definition',
        statement: 'An inhomogeneous magnetic field splits a beam of spin-one atoms into **three separate beams** — the three base states $+$, $0$ and $-$ with respect to that apparatus (the $z$-components of angular momentum $+\\hbar$, $0$ and $-\\hbar$).',
        detail: 'Feynman’s “improved” apparatus uses three magnets to split and recombine the beams so that all atoms leave along one axis, with masks available to block any channel. Atoms that pass an identical second filter with the same channel open come through 100%: the filter has produced a **polarized beam** whose future in that apparatus is completely determined. Spin one-half gives two beams, spin two gives five — the whole discussion generalizes by adding terms.',
      },
      {
        term: 'Base states',
        kind: 'definition',
        statement: 'A set of **base states** is a set of states into which a filtering process can separate the atoms such that the future behavior in any one of them depends only on the nature of that state — **not on any previous history**.',
        detail: 'There is nothing unique about a particular set — the $S$ states, the $T$ states and the $R$ states are equally valid base sets, “in a certain representation.” The test for purity is that no further filtering by an identical apparatus can split the beam. Real apparatus also sorts by position, momentum and internal excitation; the idealized three-state treatment deliberately freezes everything else. Furnace beams, by contrast, are “unpolarized” mixtures with classical, coin-toss randomness — a different kind of probability from the quantum kind.',
      },
      {
        term: 'The three general laws of amplitudes',
        kind: 'law',
        statement: 'For base states $i, j$ and arbitrary states $\\varphi, \\chi$: **I.** $\\langle j|i\\rangle = \\delta_{ji}$; **II.** $\\langle\\chi|\\varphi\\rangle = \\sum_{\\text{all } i} \\langle\\chi|i\\rangle\\langle i|\\varphi\\rangle$; **III.** $\\langle\\varphi|\\chi\\rangle = \\langle\\chi|\\varphi\\rangle^{*}$.',
        detail: 'Law I says distinct base states are orthogonal; law II resolves an arbitrary amplitude through any complete set; law III guarantees probability conservation — particles cannot get “lost.” The laws carry no commitment to which base set you use, and “one of the great games of quantum mechanics is to make use of the fact that things can be calculated in more than one way.”',
      },
      {
        term: 'Interference with open filters',
        kind: 'insight',
        statement: 'With all channels of $T$ open, an $S$-filtered beam passes any later analysis exactly as if $T$ were not there — the three amplitudes recombine to unity; with masks inserted, opening **more** channels can let **fewer** atoms through.',
        detail: 'The $S \\to T \\to S^{\\prime}$ experiments give $N \\to \\alpha N \\to \\beta\\alpha N$ with masks, but $N \\to N \\to N$ without them: $\\sum_i \\langle 0S|i\\rangle\\langle i|+S\\rangle = 0$ while $\\sum_i \\langle +S|i\\rangle\\langle i|+S\\rangle = 1$. “Humpty Dumpty has been put back together again” — the splitting itself destroys nothing; the blocking masks are what discard the information. The proviso is that the open filter must disturb all channels equally: an extra field that shifted phases would change the interference.',
      },
      {
        term: 'States as vectors, apparatuses as matrices',
        kind: 'notation',
        statement: 'A state is described by the set of amplitudes $C_i = \\langle i|\\psi\\rangle$ — a **state vector** $|\\psi\\rangle = \\sum_i |i\\rangle C_i$ — and any apparatus $A$ is described by the matrix of amplitudes $\\langle j|A|i\\rangle$ that maps input base states to output base states.',
        detail: 'The amplitude for “start in $\\varphi$, pass through $A$, end in $\\chi$” is $\\langle\\chi|A|\\varphi\\rangle = \\sum_{ij}\\langle\\chi|j\\rangle\\langle j|A|i\\rangle\\langle i|\\varphi\\rangle$. Apparatuses in series multiply as matrix products — $C = B \\cdot A$, with the first apparatus on the right — and the order matters. For spin one, three numbers describe a state and nine describe an apparatus; that is the entire mathematics of the chapter. The analogy with vectors is close ($\\hat{e}_i \\cdot \\hat{e}_j = \\delta_{ij}$), with one essential difference: $\\langle\\varphi|\\chi\\rangle = \\langle\\chi|\\varphi\\rangle^{*}$, the order of a bracket matters.',
      },
      {
        term: 'Time evolution and the Hamiltonian matrix',
        kind: 'law',
        statement: 'Waiting from $t_1$ to $t_2$ is itself an “apparatus” $U(t_2, t_1)$; expanding for a small interval $\\Delta t$ defines the **Hamiltonian matrix** $H_{ij}$ through $$i\\hbar\\,\\frac{dC_i}{dt} = \\sum_j H_{ij}\\,C_j.$$',
        detail: 'For a small step, $U_{ij} = \\delta_{ij} - (i/\\hbar)H_{ij}\\Delta t$. The coefficients $H_{ij}$ “contain the physics of the situation” — the fields, potentials and couplings — and knowing them answers every question about how the state evolves: **“Know your Hamiltonian.”** No one knows the complete $H_{ij}$ for the whole universe; excellent approximations exist for electrons in atoms and other nonrelativistic situations. In the one-state limit the equation reads $i\\hbar\\,dC_1/dt = H_{11}C_1$, whose solution $C_1 = e^{-iH_{11}t/\\hbar}$ is a state of definite energy $E = H_{11}$ — the Hamiltonian deserves its other name, the energy matrix.',
      },
      {
        term: 'Hermiticity from probability conservation',
        kind: 'theorem',
        statement: 'Because the total probability $\\sum_i |C_i|^{2}$ of finding the system somewhere cannot change with time, the Hamiltonian must satisfy $$H_{ij}^{*} = H_{ji}.$$',
        detail: 'Conservation of particles — you still have the object you started with — forces this condition for any starting state. It is the matrix statement that $\\hat{H}$ is a Hermitian operator, and it guarantees that its eigenvalues (the allowed energies) are real. The ammonia example below exhibits the pattern concretely: $H_{12} = H_{21} = -A$.',
      },
      {
        term: 'Spin one-half base states',
        kind: 'definition',
        statement: 'A spin one-half particle has just two base states, $|+\\rangle$ and $|-\\rangle$ along any chosen axis; the state of a spin pointing at polar angles $\\theta,\\phi$ has amplitudes $\\cos(\\theta/2)e^{-i\\phi/2}$ and $\\sin(\\theta/2)e^{+i\\phi/2}$ in that basis.',
        detail: 'Spin “up” along a direction at angle $\\theta$ to $z$ therefore has probability $\\cos^{2}(\\theta/2)$ of passing a $+z$ filter and $\\sin^{2}(\\theta/2)$ of failing it — the spin-one-half analogue of the spin-one projection amplitudes of Chapter 5 of the volume. A magnetic field $B_z$ rotates the spin direction about $z$ at the angular velocity $\\omega = 2\\mu B_z/\\hbar$: the precession of atomic magnets, here derived exactly.',
      },
      {
        term: 'The Pauli spin matrices',
        kind: 'definition',
        statement: 'Writing the spin one-half Hamiltonian as $H = E_0 - \\mu(\\sigma_x B_x + \\sigma_y B_y + \\sigma_z B_z)$ requires the three matrices $$\\sigma_z = \\begin{pmatrix}1 & 0\\\\ 0 & -1\\end{pmatrix}, \\quad \\sigma_x = \\begin{pmatrix}0 & 1\\\\ 1 & 0\\end{pmatrix}, \\quad \\sigma_y = \\begin{pmatrix}0 & -i\\\\ i & 0\\end{pmatrix},$$ the Pauli spin matrices.',
        detail: 'They satisfy $\\sigma_x^{2} = \\sigma_y^{2} = \\sigma_z^{2} = 1$ and $\\sigma_x\\sigma_y = -\\sigma_y\\sigma_x = i\\sigma_z$ (and cyclic permutations) — the algebra that “anyone who is going to work in quantum physics really has to memorize.” Any $2\\times2$ matrix at all is a linear combination of $1, \\sigma_x, \\sigma_y, \\sigma_z$, so the sigmas are the complete arithmetic of every two-state system: ammonia, dyes, the proton–neutron “isotopic spin,” anything. What began as geometry of a spinning charge becomes a universal algebra.',
      },
    ],
    examples: [
      {
        title: 'The ammonia molecule as a two-state system',
        problem: 'Model $\\mathrm{NH_3}$ by two base states — nitrogen “up” $|1\\rangle$ and nitrogen “down” $|2\\rangle$ — with $H_{11} = H_{22} = E_0$ and $H_{12} = H_{21} = -A$. Find the stationary states and their energies.',
        steps: [
          { label: 'Step 1: Write the amplitude equations', text: 'The Hamiltonian dynamics gives $i\\hbar\\,\\dot{C}_1 = E_0C_1 - AC_2$ and $i\\hbar\\,\\dot{C}_2 = -AC_1 + E_0C_2$. The molecule, once prepared in $|1\\rangle$, will not stay there: the flip-flop amplitude $A$ moves it.' },
          { label: 'Step 2: Form the symmetric and antisymmetric combinations', text: 'Add and subtract: $i\\hbar\\,\\dot{C}_{II} = (E_0 - A)C_{II}$ for $C_{II} = (C_1 + C_2)/\\sqrt{2}$, and $i\\hbar\\,\\dot{C}_{I} = (E_0 + A)C_{I}$ for $C_{I} = (C_1 - C_2)/\\sqrt{2}$. Each equation is now the one-state equation of definite energy.' },
          { label: 'Step 3: Read off the stationary states', text: 'The normalized states $|II\\rangle = (|1\\rangle + |2\\rangle)/\\sqrt{2}$ and $|I\\rangle = (|1\\rangle - |2\\rangle)/\\sqrt{2}$ are stationary, with $E_{II} = E_0 - A$ and $E_{I} = E_0 + A$: the levels straddle $E_0$, split by $2A$.' },
          { label: 'Step 4: Interpret', text: 'If the nitrogen could not flip ($A = 0$) the two configurations would be degenerate at $E_0$. The flipping splits them symmetric–antisymmetric — the same mathematics that Feynman will use for the hydrogen molecule ion, benzene and the hydrogen hyperfine states. The measured splitting $2A$ corresponds to $24\\times10^{9}$ cycles per second (Section 15.4).' },
        ],
        result: 'Two stationary states $|I\\rangle = (|1\\rangle - |2\\rangle)/\\sqrt{2}$ at $E_0 + A$ and $|II\\rangle = (|1\\rangle + |2\\rangle)/\\sqrt{2}$ at $E_0 - A$, separated by $2A$ — the “inversion doublet” of ammonia.',
      },
      {
        title: 'Checking the Pauli algebra',
        problem: 'Verify the products $\\sigma_x^{2} = 1$ and $\\sigma_x\\sigma_y = i\\sigma_z$, and use them to assemble the Hamiltonian of a spin one-half particle in a magnetic field.',
        steps: [
          { label: 'Step 1: Square $\\sigma_x$', text: '$\\sigma_x^{2} = \\begin{pmatrix}0 & 1\\\\ 1 & 0\\end{pmatrix}\\begin{pmatrix}0 & 1\\\\ 1 & 0\\end{pmatrix} = \\begin{pmatrix}1 & 0\\\\ 0 & 1\\end{pmatrix} = 1$ — flipping the spin twice restores it, so each measurement axis gives $\\pm1$.' },
          { label: 'Step 2: Multiply $\\sigma_x\\sigma_y$', text: '$\\sigma_x\\sigma_y = \\begin{pmatrix}0 & 1\\\\ 1 & 0\\end{pmatrix}\\begin{pmatrix}0 & -i\\\\ i & 0\\end{pmatrix} = \\begin{pmatrix}i & 0\\\\ 0 & -i\\end{pmatrix} = i\\sigma_z$. Reversing the order flips the sign: $\\sigma_y\\sigma_x = -i\\sigma_z$ — the matrices do not commute.' },
          { label: 'Step 3: Assemble the Hamiltonian', text: 'For a magnetic moment $\\mu$ in field $\\mathbf{B}$, the amplitude equations condense to $\\hat{H} = E_0 - \\mu\\,\\boldsymbol{\\sigma}\\cdot\\mathbf{B}$. In matrix form: $\\begin{pmatrix}E_0 - \\mu B_z & -\\mu(B_x - iB_y)\\\\ -\\mu(B_x + iB_y) & E_0 + \\mu B_z\\end{pmatrix}$, Hermitian as required.' },
          { label: 'Step 4: Extract the physics', text: 'Along $z$ the energies $E_0 \\mp \\mu B_z$ are the two spin orientations; a field component in $x$ provides the flip-flop amplitude, exactly like the $-A$ of ammonia — spin resonance is the maser story told for a different two-state system.' },
        ],
        result: 'The sigma squares are the unit matrix, the cross products are $\\pm i$ times the third sigma, and $\\hat{H} = E_0 - \\mu\\boldsymbol{\\sigma}\\cdot\\mathbf{B}$ compactly encodes both the energy splitting and the flip-flop of a spin one-half particle.',
      },
      {
        title: 'A wide-open filter does nothing',
        problem: 'A beam prepared in the $+S$ state passes a $T$ filter with all three channels open and then an $S^{\\prime}$ analyzer. Show that the machinery of law II reproduces the observed perfect transmission for $S^{\\prime} = S$ and complete extinction for the $0S$ selection.',
        steps: [
          { label: 'Step 1: Resolve through the $T$ base', text: 'By law II, $\\langle\\chi|+S\\rangle = \\sum_i \\langle\\chi|i\\rangle\\langle i|+S\\rangle$ with $i = +T, 0T, -T$. Each term is a route through one open channel of $T$.' },
          { label: 'Step 2: Same selection ($+S$)', text: 'The three terms recombine: $\\langle+S|+T\\rangle\\langle+T|+S\\rangle + \\langle+S|0T\\rangle\\langle 0T|+S\\rangle + \\langle+S|-T\\rangle\\langle-T|+S\\rangle = 1$. All $N$ atoms come through — as though $T$ were not there.' },
          { label: 'Step 3: Orthogonal selection ($0S$)', text: 'The same sum with $\\langle 0S|$ in front equals $\\langle 0S|+S\\rangle = 0$: not one atom arrives, although each individual amplitude (for example the one through $0T$) is nonzero.' },
          { label: 'Step 4: Insert the masks and watch it change', text: 'Block any channel of $T$ and one term is removed: the transmission drops to $\\beta\\alpha N$-type partial products — opening a channel can reduce the count through interference, the “old, deep mystery” of quantum mechanics in a new bottle.' },
        ],
        result: 'With all channels open the amplitudes over the $T$ base reconstruct $\\langle\\chi|+S\\rangle$ exactly; blocking channels removes interfering alternatives and changes the outcome — the Stern–Gerlach twin of the two-hole experiment.',
      },
    ],
    keyTakeaways: [
      'A Stern–Gerlach filter splits a spin-one beam into three pure base states whose future behavior is independent of their past.',
      'The three laws: $\\langle j|i\\rangle = \\delta_{ji}$; $\\langle\\chi|\\varphi\\rangle = \\sum_i\\langle\\chi|i\\rangle\\langle i|\\varphi\\rangle$ over any complete set; $\\langle\\varphi|\\chi\\rangle = \\langle\\chi|\\varphi\\rangle^{*}$.',
      'A filter with all channels open leaves the state unchanged — masks, not splittings, destroy information.',
      'States are column vectors of amplitudes $C_i$; apparatuses are matrices $\\langle j|A|i\\rangle$; series apparatuses multiply right-to-left.',
      'Dynamics is the Hamiltonian matrix: $i\\hbar\\,dC_i/dt = \\sum_j H_{ij}C_j$, with $H_{ij}^{*} = H_{ji}$ enforcing probability conservation.',
      'For one state, $C = e^{-iEt/\\hbar}$ with $E = H_{11}$ — the Hamiltonian is the energy matrix; the whole problem of physics is knowing it.',
      'Spin one-half is the universal two-state algebra: $\\sigma_i^{2} = 1$, $\\sigma_i\\sigma_j = -\\sigma_j\\sigma_i = i\\sigma_k$, and $\\hat{H} = E_0 - \\mu\\boldsymbol{\\sigma}\\cdot\\mathbf{B}$.',
    ],
    quiz: [
      {
        q: 'A beam of spin-one atoms passes one Stern–Gerlach filter set to transmit only the $+S$ state, then a second identical filter. What fraction passes the second filter?',
        options: ['One third', 'One half', 'All of it', 'None of it'],
        answer: 2,
        explanation: 'The first filter produces a polarized beam in a pure base state; an identical apparatus cannot split it further, so 100% of the atoms take the same upper path. Base states are precisely those with this no-further-filtering property.',
      },
      {
        q: 'In the $S \\to T \\to S^{\\prime}$ experiments, inserting masks in $T$ lets a fraction through, but removing all the masks restores the full beam. Why?',
        options: ['The masks heat the atoms and change their spin', 'The three beams recombine coherently: their amplitudes interfere back to the original state', 'The unmasked magnet is switched off and produces no field', 'Atoms remember their original state only when unobserved'],
        answer: 1,
        explanation: 'With every channel open, $\\sum_i\\langle\\chi|i\\rangle\\langle i|+S\\rangle = \\langle\\chi|+S\\rangle$ — Humpty Dumpty is put back together. The blocking masks are what discard the alternatives and with them the interference.',
      },
      {
        q: 'The Hamiltonian matrix must satisfy $H_{ij}^{*} = H_{ji}$ because:',
        options: ['The equations would otherwise be unsolvable', 'The total probability of finding the system in some state must not change with time', 'Matrices in physics are always symmetric', 'The energy levels must be complex conjugates'],
        answer: 1,
        explanation: 'Probability conservation — you cannot lose the particle — forces Hermiticity for any starting state. As a bonus it makes the eigenvalues (the energies) real.',
      },
      {
        q: 'The product $\\sigma_x\\sigma_y$ of two Pauli matrices equals:',
        options: [`$\\sigma_z$`, `$i\\sigma_z$`, `$-i\\sigma_z$`, `$1$`],
        answer: 1,
        explanation: '$\\sigma_x\\sigma_y = i\\sigma_z$, while $\\sigma_y\\sigma_x = -i\\sigma_z$ — the sigmas anticommute, which is the arithmetic behind the “uncertainty” of non-commuting observables.',
      },
      {
        q: 'For a one-state system with constant $H_{11}$, the solution of $i\\hbar\\,dC_1/dt = H_{11}C_1$ describes:',
        options: ['An amplitude growing exponentially in time', 'A state of definite energy $E = H_{11}$, oscillating in phase as $e^{-iEt/\\hbar}$', 'A state whose probability decays as $e^{-2Et/\\hbar}$', 'A superposition of two energies'],
        answer: 1,
        explanation: '$C_1 = e^{-iH_{11}t/\\hbar}$ has constant magnitude — the probability never changes — and rotates in phase at the frequency $E/\\hbar$: the signature of a stationary state, and the reason $H$ deserves to be called the energy matrix.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.4
  {
    sectionId: 'phys-ch15-s4',
    readingTime: 10,
    intro: 'The two-state machinery pays its bills. Ammonia in an electric field becomes the maser, turning a $10^{-4}$ eV level splitting into the most stable oscillator of its era. The same algebra colors benzene and the dye industry, lets neutral K-mesons oscillate into their antiparticles, and splits hydrogen’s ground state into the 21 cm line by which radio astronomy maps the galaxies. Finally, releasing an electron to wander a whole crystal lattice produces energy bands, holes, doped semiconductors and the transistor — Feynman’s proof that quantum mechanics is an engineering subject.',
    objectives: [
      'Analyze the ammonia molecule in static and oscillating electric fields, and describe the operation of the maser cavity',
      'Compute transition probabilities at and off resonance, and explain the resulting line shape and atomic-clock precision',
      'Survey other two-state systems — benzene, dyes, K-mesons — and the hydrogen hyperfine splitting with its 21 cm line',
      'Derive the energy band $E = E_0 - 2A\\cos kb$ of an electron in a lattice and the effective-mass picture',
      'Explain holes, donor and acceptor doping, n-type and p-type material, junction rectification and the transistor',
    ],
    concepts: [
      {
        term: 'Ammonia in a static electric field',
        kind: 'law',
        statement: 'The two base states of ammonia carry opposite electric dipole moments $\\pm\\mu$, so a field $\\mathcal{E}$ shifts their energies to $E_0 \\pm \\mu\\mathcal{E}$; the Hamiltonian becomes $$\\hat{H} = \\begin{pmatrix}E_0 + \\mu\\mathcal{E} & -A\\\\ -A & E_0 - \\mu\\mathcal{E}\\end{pmatrix},$$ with the flip-flop amplitude $-A$ unchanged.',
        detail: 'The electrons sit closer to the nitrogen, leaving the hydrogens slightly positive, so flipping the nitrogen flips the dipole and changes the energy in the field by $2\\mu\\mathcal{E}$. Neither $\\mu$ nor $A$ can be computed for so complicated a molecule — both are measured. Because the two states of definite energy are mixtures of the dipole states, the field couples to the transitions; that coupling is the handle the maser uses.',
      },
      {
        term: 'The ammonia maser',
        kind: 'insight',
        statement: 'Ammonia’s inversion doublet is split by $2A$ corresponding to a frequency of **24,000 megacycles per second** ($\\lambda = 1\\tfrac{1}{4}$ cm, $E \\approx 10^{-4}$ eV) — microwaves, not light; a beam sorted into the upper state and sent through a resonant cavity delivers its excess energy to the field.',
        detail: 'A quadrupole electric field separates the beam: the $|I\\rangle$ molecules (higher energy) are focused into the cavity, the rest discarded. Cavity fields oscillating at $\\omega_0 = 2A/\\hbar$ induce the downward transition, and the emitted energy maintains the oscillation — the molecular energy is converted into an external electromagnetic field. If the cavity is long enough that $\\mu\\mathcal{E}_0 T/\\hbar = \\pi/2$, a molecule entering in $|I\\rangle$ leaves with certainty in $|II\\rangle$. Feynman’s joke about the constants: for once the numbers — 24 GHz, 1.25 cm, $10^{-4}$ eV — are all nature’s own.',
      },
      {
        term: 'Transitions in an oscillating field: resonance and line shape',
        kind: 'law',
        statement: 'On resonance ($\\omega = \\omega_0 = 2A/\\hbar$) the probabilities flop between the two states like a coupled pendulum, $$P_{I} = \\cos^{2}\\!\\left(\\frac{\\mu\\mathcal{E}_0 t}{\\hbar}\\right), \\qquad P_{II} = \\sin^{2}\\!\\left(\\frac{\\mu\\mathcal{E}_0 t}{\\hbar}\\right);$$ off resonance the probability for a transit time $T$ is $P(I \\to II) = [\\mu\\mathcal{E}_0 T/\\hbar]^{2}\\,\\sin^{2}[(\\omega-\\omega_0)T/2]/[(\\omega-\\omega_0)T/2]^{2}$, a diffraction-like curve of width $\\sim 1/T$.',
        detail: 'The derivation factors out the fast $e^{-iEt/\\hbar}$ phases, leaving slowly varying amplitudes $\\gamma_I, \\gamma_{II}$ obeying $i\\hbar\\,\\dot{\\gamma}_I = \\mu\\mathcal{E}_0\\gamma_{II}$; each then satisfies a harmonic-oscillator equation, and the rapidly oscillating $\\omega+\\omega_0$ terms average away. The sum $P_I + P_{II} = 1$ always — the molecule is always in some state. This is Rabi’s flopping, the same mathematics as the magnetic resonance of Chapter 14 and of every NMR machine since. For a molecule resident one millisecond in the cavity at $f_0 = 24{,}000$ Mc, the probability falls to zero for a detuning of only five parts in $10^{8}$ — that sharpness is the basis of ammonia “atomic” clocks, where the line is so narrow that the molecule itself defines the standard of frequency.',
      },
      {
        term: 'Absorption of light and the dipole matrix element',
        kind: 'law',
        statement: 'For broadband light of spectral intensity $I(\\omega)$, the transition probability per unit time is proportional to the intensity and to the square of the **electric dipole matrix element**: $P(I \\to II) \\propto \\mu^{2} I(\\omega_0) T$ with $\\mu_{mn}\\mathcal{E} = \\langle m|\\hat{H}|n\\rangle$.',
        detail: 'The ammonia analysis thus becomes the general theory of absorption and emission of light by any atom or molecule — the quantum-mechanical computation of Einstein’s $B_{mn}$ coefficient from Chapter 10. Three features survive generally: probability proportional to time, to intensity, and to $|\\mu_{mn}|^{2}$. Where the dipole element vanishes (as between the symmetric states of benzene), the transition is forbidden and higher effects must carry it.',
      },
      {
        term: 'Benzene and the colors of dyes',
        kind: 'insight',
        statement: 'Benzene’s two equivalent double-bond arrangements form a two-state system whose symmetric ground state $(|1\\rangle + |2\\rangle)/\\sqrt{2}$ is bound below either picture — by enough ($2A \\approx 1.5$ eV) that the absorption sits in the **ultraviolet**; in dye molecules the same splitting lands in the visible.',
        detail: 'Chemists expected two isomers of ortho-dibromobenzene (bromines across a single or a double bond) but find only one — because there is only one stationary state, the symmetric combination. Electrons flip much more easily than the nitrogen nucleus flips in ammonia, so $A$ is far larger and the splitting optical rather than microwave. In magenta the flipping shifts the charge center a long way, making $\\mu$ large and the absorption intense — that is what a dye is; tweak the structure (malachite green replaces two hydrogens by $\\mathrm{CH_3}$) and the color changes.',
      },
      {
        term: 'The neutral K-meson (and the neutrino analogy)',
        kind: 'insight',
        statement: 'The neutral K-meson $K^{0}$ and its antiparticle $\\bar{K}^{0}$ are coupled by the weak interactions into two stationary states of **different lifetimes and different decay modes** — a two-state oscillation in which a beam of $K^{0}$’s periodically becomes rich in $\\bar{K}^{0}$.',
        detail: 'The backdrop is strangeness conservation: strong interactions conserve the new quantum number invented by Gell-Mann and Nishijima (explaining which reactions never occur), but weak interactions do not, and they couple the $K^{0}$ (strangeness $+1$) to the $\\bar{K}^{0}$ (strangeness $-1$). The coupled stationary states $K_1$ and $K_2$ then decay with the two-pion and three-pion modes at very different rates. The mathematics is ammonia’s — one particle oscillating into another — and it is the same physics that later describes neutrino flavor oscillations between massive and interaction eigenstates.',
      },
      {
        term: 'The hydrogen hyperfine splitting and the 21 cm line',
        kind: 'law',
        statement: 'The spins of the electron and proton in hydrogen’s ground state couple through $\\hat{H} = E_0 + A\\,\\boldsymbol{\\sigma}_e\\cdot\\boldsymbol{\\sigma}_p$: the triplet states $|{+}{+}\\rangle$, $(|{+}{-}\\rangle + |{-}{+}\\rangle)/\\sqrt{2}$, $|{-}{-}\\rangle$ lie at $E = A$ and the singlet $(|{+}{-}\\rangle - |{-}{+}\\rangle)/\\sqrt{2}$ at $E = -3A$, with $4A = h f$ and $$f = 1{,}420{,}405{,}751.8\\ \\text{Hz}.$$', 
        detail: 'The Hamiltonian is fixed by symmetry alone — the only rotationally invariant combination of two spins is the dot product (plus a constant), a shortcut Dirac sharpened with the spin-exchange operator $\\boldsymbol{\\sigma}_e\\cdot\\boldsymbol{\\sigma}_p = 2\\hat{P}_{\\text{exch}} - 1$. The measured frequency is accurate to 2 parts in $10^{11}$, “one of the most remarkably accurate measurements in physics” — theory manages only 3 parts in $10^{5}$, so everyone takes $A$ from experiment. The wavelength, $\\lambda = c/f \\approx 21$ cm, is the radio-astronomer’s beacon: Doppler shifts of the 21 cm line map the motion of hydrogen gas through the galaxies.',
      },
      {
        term: 'Electrons in a crystal lattice: energy bands',
        kind: 'law',
        statement: 'An electron hopping between atoms of spacing $b$ with amplitude $iA/\\hbar$ has stationary states $C_n = e^{ikx_n}e^{-iEt/\\hbar}$ with $$E = E_0 - 2A\\cos kb,$$ an energy band from $E_0 - 2A$ to $E_0 + 2A$ in which the electron moves like a classical particle of **effective mass** $m_{\\text{eff}} = \\hbar^{2}/2Ab^{2}$.',
        detail: 'A localized electron — a wave packet of nearby $k$’s — travels at the group velocity $v = (2Ab^{2}/\\hbar)k$ and obeys $E = \\tfrac{1}{2}m_{\\text{eff}}v^{2}$ with $m_{\\text{eff}}v = \\hbar k$. The effective mass is not the free electron’s (typically 2–20 times it) and can even be anisotropic. This is the answer to the mystery of how an electron rides through a crystal “as if in a vacuum”: the amplitude leaks pip-pip-pip from atom to atom. In three dimensions $E = E_0 - 2A_x\\cos k_xa - 2A_y\\cos k_yb - 2A_z\\cos k_zc$; different atomic states spawn different overlapping bands, with **gaps** of forbidden energy between them.',
      },
      {
        term: 'Holes, doping and the junction',
        kind: 'law',
        statement: 'A missing electron in a filled band behaves as a **positive particle** (a hole) with its own effective mass; adding arsenic (valence 5) to germanium donates electrons (n-type), aluminum (valence 3) accepts them and creates holes (p-type); a p–n junction passes current as $$I = I_0\\left(e^{q\\Delta V/kT} - 1\\right),$$ rectifying, and two junctions make a transistor.',
        detail: 'Thermal pair creation goes as $e^{-E_{\\text{gap}}/kT}$, and in equilibrium $N_n N_p$ is fixed at each temperature — doping one carrier type suppresses the other. A donor’s extra electron is bound by only about $10^{-2}$ eV and ionizes at room temperature. In the junction, the majority holes climb a potential hill of the built-in voltage $V$; forward bias lowers the hill and the current rises as $e^{q\\Delta V/kT}$, while the reverse current saturates at the small $I_0$ set by minority carriers. The p–n–p transistor — emitter, base, collector — biases its two junctions so a small base current steers a large collector current: the amplifying element of solid-state electronics.',
      },
    ],
    examples: [
      {
        title: 'The maser numbers: 24 GHz from $10^{-4}$ eV',
        problem: 'Ammonia’s inversion doublet has a measured separation of $10^{-4}$ eV. Verify that this corresponds to the stated frequency of 24,000 megacycles per second and a wavelength of $1\\tfrac{1}{4}$ cm.',
        steps: [
          { label: 'Step 1: Convert the energy split to a frequency', text: 'With $2A = hf$: $f = 2A/h = (1.6\\times10^{-23}\\ \\text{J})/(6.63\\times10^{-34}\\ \\text{J·s}) = 2.4\\times10^{10}$ Hz $= 24{,}000$ megacycles per second — microwave territory, far below the optical.' },
          { label: 'Step 2: Convert to wavelength', text: '$\\lambda = c/f = (3\\times10^{8})/(2.4\\times10^{10}) = 1.25$ cm $= 1\\tfrac{1}{4}$ cm, as Feynman quotes — the maser cavity is built a few centimetres across.' },
          { label: 'Step 3: Check the energy scale', text: 'Converting back: $hf = 6.63\\times10^{-34} \\times 2.4\\times10^{10} = 1.6\\times10^{-23}$ J $= 1.0\\times10^{-4}$ eV. Atomic excitations need eV (optical); molecular vibrations, $10^{-1}$ eV (infrared); rotations, far infrared. The inversion split is the smallest of all — hence the maser line in the microwave band.' },
          { label: 'Step 4: Design the cavity transit', text: 'For a complete flip the cavity length must satisfy $\\mu\\mathcal{E}_0 T/\\hbar = \\pi/2$: a molecule entering in the upper state $|I\\rangle$ leaves in $|II\\rangle$, having deposited $2A = hf$ of energy into the field. With the beam pre-sorted to contain only upper-state molecules, the net energy always flows from molecules to cavity.' },
        ],
        result: '$f = 2A/h \\approx 2.4\\times10^{10}$ Hz and $\\lambda = 1.25$ cm; the $10^{-4}$ eV inversion doublet is the narrowest molecular energy scale, which is exactly why it makes such a good frequency standard.',
      },
      {
        title: 'The 21-centimeter line',
        problem: 'Hydrogen’s hyperfine splitting satisfies $4A = hf$ with $f = 1{,}420{,}405{,}751.8$ Hz. Compute the wavelength and the energy, and locate the states involved.',
        steps: [
          { label: 'Step 1: Identify the transition', text: 'The singlet $|IV\\rangle = (|{+}{-}\\rangle - |{-}{+}\\rangle)/\\sqrt{2}$ sits at $E = -3A$; each of the three triplet states sits at $E = +A$. The transition from any triplet state down to the singlet releases $4A$.' },
          { label: 'Step 2: Convert to wavelength', text: '$\\lambda = c/f = (3\\times10^{8}\\ \\text{m/s})/(1.4204\\times10^{9}\\ \\text{Hz}) = 0.211$ m — the famous 21 centimeters.' },
          { label: 'Step 3: Convert to energy', text: '$4A = hf = 6.63\\times10^{-34} \\times 1.42\\times10^{9} = 9.4\\times10^{-25}$ J $\\approx 5.9\\times10^{-6}$ eV, so $A \\approx 1.5$ micro-electron-volts — a millionth of the 13.6 eV that binds the atom, but far larger than the width of the line.' },
          { label: 'Step 4: Use it', text: 'Radiation at 21 cm is emitted and absorbed by atomic hydrogen gas in the galaxy. Radio telescopes tuned there measure the gas’s velocity through the Doppler shift of the line and its amount through the intensity — the workhorse observation that mapped the spiral arms.' },
        ],
        result: '$\\lambda \\approx 21.1$ cm and $4A \\approx 5.9\\ \\mu\\text{eV}$; the singlet–triplet transition of hydrogen’s ground state is the 21 cm line of radio astronomy, measured to 2 parts in $10^{11}$.',
      },
      {
        title: 'The rectifier curve of a p–n junction',
        problem: 'A germanium p–n junction carries the characteristic $I = I_0(e^{q\\Delta V/kT} - 1)$. Evaluate the forward and reverse currents at room temperature ($kT/q \\approx 25$ mV) for $\\Delta V = \\pm 0.1$ V, and describe the use of the curve as a rectifier.',
        steps: [
          { label: 'Step 1: Forward bias, $\\Delta V = +0.1$ V', text: 'The exponent is $q\\Delta V/kT = 100/25 = 4$, so $I = I_0(e^{4} - 1) = I_0(54.6 - 1) \\approx 55\\,I_0$ — the current grows exponentially with forward voltage.' },
          { label: 'Step 2: Reverse bias, $\\Delta V = -0.1$ V', text: 'The exponent is $-4$, so $I = I_0(e^{-4} - 1) = -0.98\\,I_0$: the reverse current saturates at $-I_0$ no matter how much voltage is applied (within the model), because it is limited by the small density of minority carriers on the far side.' },
          { label: 'Step 3: Draw the asymmetry', text: 'At $\\pm 25$ mV the two currents are already $1.7\\,I_0$ forward versus $-0.63\\,I_0$ reverse; the ratio of magnitudes at $\\pm 0.1$ V is about $55:1$. An alternating voltage across the junction therefore delivers a net one-way current — rectification, just as Feynman notes, by the same mathematics as the ratchet-and-pawl of Chapter 10.' },
          { label: 'Step 4: Add a second junction', text: 'Make the bar p–n–p: with the emitter at zero, the base slightly negative and the collector far more negative, holes injected at the emitter diffuse through the thin base and fall down the collector hill. The base current controls a much larger collector current — the transistor, the solid-state descendant of the vacuum tube.' },
        ],
        result: 'Forward $\\approx 55\\,I_0$, reverse $\\approx -I_0$ at $\\pm 0.1$ V: an exponential rectifier whose p–n–p double junction amplifies — the quantum mechanics of bands turned into electronics.',
      },
    ],
    keyTakeaways: [
      'A field that distinguishes the two base states of a two-state system ($E_0 \\pm \\mu\\mathcal{E}$) also couples them, enabling induced transitions — the maser principle.',
      'Ammonia’s $2A = hf = 10^{-4}$ eV splitting gives 24,000 Mc/s at 1.25 cm wavelength; on resonance the state flops as $\\cos^{2}(\\mu\\mathcal{E}_0 t/\\hbar)$ and $\\sin^{2}(\\mu\\mathcal{E}_0 t/\\hbar)$.',
      'The resonance line has width $\\sim 1/T$; one millisecond in the cavity narrows it to 5 parts in $10^{8}$ — the precision of ammonia clocks.',
      'Two-state physics is everywhere: benzene’s single ground state, dye colors from a visible-energy flip, and $K^{0}$–$\\bar{K}^{0}$ mixing (the pattern later reused for neutrino oscillations).',
      'Hydrogen’s electron and proton spins split the ground state by $\\hat{H} = A\\,\\boldsymbol{\\sigma}_e\\cdot\\boldsymbol{\\sigma}_p$ into triplet ($E = A$) and singlet ($E = -3A$), radiating at $f = 1420.4$ MHz — the 21 cm line.',
      'In a lattice, $E = E_0 - 2A\\cos kb$ makes a band of allowed energies with effective mass $\\hbar^{2}/2Ab^{2}$; between bands lie gaps.',
      'Holes act as positive carriers; donors make n-type and acceptors p-type material; the junction obeys $I = I_0(e^{q\\Delta V/kT}-1)$ and two junctions make a transistor.',
    ],
    quiz: [
      {
        q: 'Why does ammonia radiate microwaves rather than light when it drops between its two lowest states?',
        options: ['The nitrogen atom is too heavy to radiate light', 'The inversion splitting $2A \\approx 10^{-4}$ eV corresponds to $hf$ at 24 GHz — below the infrared and into the microwave region', 'Ammonia is forbidden to radiate at optical frequencies by symmetry', 'The molecule is so small that only $\\gamma$-rays fit'],
        answer: 1,
        explanation: 'Electronic excitations are eV (optical), vibrations $10^{-1}$ eV (infrared), rotations far infrared — the inversion doublet at $10^{-4}$ eV lies deeper still, giving $f = 2A/h \\approx 2.4\\times10^{10}$ Hz.',
      },
      {
        q: 'A molecule enters a perfectly resonant cavity in the upper state $|I\\rangle$ and the cavity is sized so $\\mu\\mathcal{E}_0 T/\\hbar = \\pi/2$. It leaves:',
        options: ['In the same upper state, having absorbed energy', 'In the lower state $|II\\rangle$ with certainty, having deposited $2A$ of energy into the cavity field', 'In an equal superposition of the two states', 'Unchanged, because resonance only affects molecules already in the lower state'],
        answer: 1,
        explanation: 'On resonance $P_{II} = \\sin^{2}(\\mu\\mathcal{E}_0 T/\\hbar) = \\sin^{2}(\\pi/2) = 1$: the flip is complete, and the lost energy $E_I - E_{II} = 2A$ goes into the cavity oscillation — the maser action.',
      },
      {
        q: 'Only one form of ortho-dibromobenzene exists chemically. The quantum-mechanical reason is:',
        options: ['The bromine atoms are too heavy to sit at different separations', 'The two “alternatives” for the double bonds are base states of a two-state system, and the single real ground state is their symmetric combination', 'Benzene rings rapidly rotate, averaging the structures', 'One of the two forms is radioactive and decays'],
        answer: 1,
        explanation: 'The electrons flip between the two bond arrangements, splitting the levels; only the lower symmetric stationary state is populated at ordinary temperatures, so there is a single chemical species — exactly as the two-state analysis predicts.',
      },
      {
        q: 'The 21 cm line of hydrogen arises from:',
        options: ['An electron jumping between the $n = 1$ and $n = 2$ Bohr orbits', 'The hyperfine transition between the triplet and singlet spin configurations of the ground state, with $4A = hf$', 'The rotation of the whole molecule', 'The vibration of the proton inside the nucleus'],
        answer: 1,
        explanation: 'The electron and proton magnetic moments couple through $\\hat{H} = A\\,\\boldsymbol{\\sigma}_e\\cdot\\boldsymbol{\\sigma}_p$; the singlet lies $4A$ below the triplet, and $4A = h \\times 1420.4$ MHz gives $\\lambda \\approx 21$ cm.',
      },
      {
        q: 'In a one-dimensional lattice, the effective mass $m_{\\text{eff}} = \\hbar^{2}/2Ab^{2}$ differs from the free electron mass because:',
        options: ['Electrons gain weight inside crystals', 'The band curvature $d^{2}E/dk^{2}$ — set by the hopping amplitude $A$ and spacing $b$ — controls the response of the wave packet to forces', 'The lattice drags on the electron mechanically', 'Relativistic time dilation inside the solid'],
        answer: 1,
        explanation: 'Near the band minimum $E \\approx E_{\\min} + Ab^{2}k^{2}$, so a packet obeys $E = \\tfrac{1}{2}m_{\\text{eff}}v^{2}$ with $m_{\\text{eff}}$ determined entirely by the curvature — a collective property of the lattice, typically 2–20 times the free mass.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.5
  {
    sectionId: 'phys-ch15-s5',
    readingTime: 11,
    intro: 'The final step is to let the base states be “the particle at position $x$” — a continuum of them. The amplitudes become a wavefunction $\\psi(x)$, and the Hamiltonian machinery collapses into one differential equation: Schrödinger’s. Confine its solutions and energy quantization falls out by curvature; apply it to the Coulomb field and the hydrogen spectrum and the periodic table appear; write its observables as operators and the algebra of Chapter 14 finds its quantum voice. And because the equation is linear, $10^{22}$ electrons can share one wavefunction — which is superconductivity: the Meissner effect, quantized flux and Josephson’s junctions are quantum interference blown up to human scale.',
    objectives: [
      'Take the continuum limit of the lattice equations to obtain the free-particle Schrödinger equation, and add the potential-energy term',
      'Explain how the curvature of the wavefunction forces discrete bound-state energies, and count nodes',
      'Separate the hydrogen equation in polar coordinates and assemble the quantum numbers $n$, $l$, $m$ and the level formula $E_n = -13.6\\ \\text{eV}/n^{2}$',
      'Describe the shapes of the hydrogen wavefunctions and the structure of the periodic table built from them',
      'State the operator formalism and the two kinds of momentum, and summarize the quantum mechanics of superconductors: Meissner effect, flux quantization and the Josephson relations',
    ],
    concepts: [
      {
        term: 'The wavefunction and the Schrödinger equation',
        kind: 'law',
        statement: 'With base states $|x\\rangle$ for every point of the line, the amplitude $\\psi(x) \\equiv \\langle x|\\psi\\rangle$ is the **wavefunction** ($|\\psi|^{2}$ the probability density, $\\int|\\psi|^{2}dx = 1$); taking the lattice spacing $b \\to 0$ at fixed $Ab^{2} = \\hbar^{2}/2m$ turns the hopping equation into the free-particle law, and adding the potential gives the **Schrödinger equation** $$i\\hbar\\,\\frac{\\partial\\psi}{\\partial t} = -\\frac{\\hbar^{2}}{2m}\\nabla^{2}\\psi + V\\psi,$$ the first quantum-mechanical equation ever written (Schrödinger, 1926).',
        detail: 'The Taylor combination $2C(x) - C(x+b) - C(x-b) \\approx -b^{2}\\,\\partial^{2}C/\\partial x^{2}$ shows the amplitude at one point feeding its neighbors through the second derivative — a “diffusion of probability amplitude.” The $i$ makes it utterly different from heat diffusion: diffusion gives real exponentials, the Schrödinger equation gives complex waves. A particle of definite momentum $p$ has $\\psi \\propto e^{ipx/\\hbar}$ — flat probability density, total position uncertainty — and Fourier analysis (Chapter 6) is the dictionary between the position and momentum representations. The potential adds $V(\\mathbf{r})\\psi$, the term that was $E_0(x)$ varying slowly from site to site in the lattice picture; for $N$ particles the equation holds in $3N$ variables with $V$ the total electrostatic energy $\\sum Z_iZ_j e^{2}/r_{ij}$. It omits magnetism and relativity (Dirac’s equation repairs both) yet explains, in principle, all of atomic structure and chemistry; in practice only hydrogen and helium yield to exact solution. Feynman is emphatic that the lattice argument is motivation, not derivation: the equation “came out of the mind of Schrödinger,” and survives because it fits the world.',
      },
      {
        term: 'Why energy is quantized',
        kind: 'insight',
        statement: 'Substituting $\\psi = a(x)e^{-iEt/\\hbar}$ gives $\\dfrac{d^{2}a}{dx^{2}} = \\dfrac{2m}{\\hbar^{2}}(V - E)a$: where $V > E$ the curvature drives $a$ away from the axis (exponential tails), where $V < E$ it curves back (oscillation) — and only for special values of $E$ do the tails die off at both ends.',
        detail: 'This is Feynman’s graphical quantization: a random energy sends the wavefunction off to infinity on one side; only discrete energies thread the needle, each with one more node than the last. In a box of width $L$ the fit of standing waves gives $\\lambda_n = 2L/n$ and $E_n \\propto n^{2}$; the harmonic oscillator’s levels, equally spaced by $\\hbar\\omega$, were met in Section 15.2 as the Bose-mode ladder. Above the top of the well every energy is allowed — the continuum of scattering states.',
      },
      {
        term: 'The hydrogen atom solved',
        kind: 'law',
        statement: 'In the Coulomb potential $V = -e^{2}/r$, separating $\\psi = Y_{l,m}(\\theta,\\phi)F_l(r)$ gives the angular equation with eigenvalue $K_l = l(l+1)$ and the radial equation with an added centrifugal term $l(l+1)\\hbar^{2}/2mr^{2}$; the series solution terminates only for integers $n \\ge l+1$, yielding $$E_n = -\\frac{me^{4}}{2\\hbar^{2}n^{2}} = -\\frac{13.6\\ \\text{eV}}{n^{2}}.$$',
        detail: 'The scale changes $r = (\\hbar^{2}/me^{2})\\rho$ and $E = (me^{4}/2\\hbar^{2})\\epsilon$ — the Bohr radius and the Rydberg of Section 15.2 — reduce the equation to dimensionless form. The pseudo-potential $l(l+1)\\hbar^{2}/2mr^{2}$ is the quantum centrifugal barrier, exactly the classical $L^{2}/2mr^{2}$ with $l^{2} \\to l(l+1)$. The states are labeled by $n$ (energy), $l$ (total orbital angular momentum) and $m$ (its $z$-component, from $-l$ to $+l$); the energy depends only on $n$, so the levels are degenerate in $l$ and $m$.',
      },
      {
        term: 'Hydrogen wavefunctions and the periodic table',
        kind: 'insight',
        statement: 'The ground state ($1s$: $n=1$, $l=0$, $m=0$) is a spherically symmetric blob, maximum at the nucleus, falling off monotonically; higher states carry $n-1$ nodal surfaces, and the $2(2l+1)$ states of each sub-shell $l$ plus the two spin directions set the electron capacity of every element’s shells.',
        detail: 'Approximating each electron of a $Z$-electron atom as moving in the spherically averaged field of the rest, the hydrogen orbitals survive with shifted energies — and the exclusion principle stacks them. Helium fills $1s$ (ionization 24.6 eV, inert); lithium’s third electron must enter $2s$ (ionization only 5.4 eV — chemically active); neon completes $2p$ at 21.6 eV and is inert again; sodium starts $3s$ at 5.1 eV; argon closes at 15.8 eV; the $3d$ sub-shell fills through the transition metals to copper and zinc. Every column of the periodic table is a returning outer-shell configuration — “you can see why the chemical properties repeat with increasing atomic number.”',
      },
      {
        term: 'Operators',
        kind: 'definition',
        statement: 'An operation on a state produces a new state, $|\\varphi\\rangle = \\hat{A}|\\psi\\rangle$; the operator is represented numerically by the matrix $A_{ij} = \\langle i|\\hat{A}|j\\rangle$ in any chosen base, with the adjoint defined by $\\langle\\varphi|\\hat{A}|\\psi\\rangle^{*} = \\langle\\psi|\\hat{A}^{\\dagger}|\\varphi\\rangle$ — and $\\hat{A}^{\\dagger} = \\hat{A}$ (Hermitian) for measurable quantities.',
        detail: 'Operators are to quantum algebra what vectors were to mechanics: a compact notation independent of coordinates, with matrices as their components. Angular momentum is defined through the infinitesimal rotation operator $\\hat{R}_z(\\epsilon) = 1 + (i/\\hbar)\\epsilon\\hat{J}_z$, and momentum through the displacement operator $\\hat{D}_x(\\delta) = 1 + (i/\\hbar)\\delta\\hat{p}_x$ — conservation laws follow from symmetries exactly as in Chapter 17 of the volume. In the $x$-representation the momentum operator is $\\hat{p}_x = -i\\hbar\\,\\partial/\\partial x$, and expected values become integrals like $\\langle\\psi|\\hat{H}|\\psi\\rangle = \\int\\psi^{*}\\hat{H}\\psi\\,dx$ — the average-energy machinery behind the variational approximations used on molecules.',
      },
      {
        term: 'Superconductivity: pairs as bosons',
        kind: 'law',
        statement: 'Lattice vibrations leave the electrons of many metals with a weak net attraction, binding them into **Cooper pairs**; a pair is a boson, and at low temperature all pairs condense into one shared state $\\psi(\\mathbf{r}) = \\rho^{1/2}(\\mathbf{r})e^{i\\theta(\\mathbf{r})}$ whose phase gradient and vector potential together carry the current: $$\\mathbf{J} = \\left[\\frac{\\hbar}{m}\\nabla\\theta - \\frac{q}{m}\\mathbf{A}\\right]\\rho.$$',
        detail: 'The pairs are enormous and overlapping — many occupy the same space at once — and the Bose tendency to share a state (Section 15.2) locks them all into the lowest state. Charge density $\\rho$ stays almost perfectly uniform (the ion background enforces neutrality), so all the physics lives in the phase $\\theta$. Broken pairs — “normal” electrons, present with probability $\\propto e^{-E_{\\text{pair}}/kT}$ — make up the second fluid of the two-fluid picture: superconductor plus normal electron gas.',
      },
      {
        term: 'The Meissner effect and the London equation',
        kind: 'law',
        statement: 'Inside a lump of superconductor $\\theta$ is constant, so the current obeys the London equation $\\mathbf{J} = -(\\rho q/m)\\mathbf{A}$; combined with $\\nabla^{2}\\mathbf{A} = -\\mathbf{J}/\\varepsilon_0c^{2}$ this gives $\\nabla^{2}\\mathbf{A} = \\lambda^{2}\\mathbf{A}$ — fields penetrate only a depth $1/\\lambda$, about **$2\\times10^{-6}$ cm in lead**.',
        detail: 'Resistance vanishes because no single electron can be knocked out of the collective state — a current, once started, keeps going forever. A superconductor is more than a perfect conductor: cooled below its critical temperature in a magnetic field it actively expels the flux (Meissner and Ochsenfeld, 1933), starting surface currents of exactly the strength needed to cancel the interior field. With $\\lambda^{2} = q^{2}\\rho/\\varepsilon_0 mc^{2} = 8\\pi N r_0$ written with the electron’s electromagnetic radius $r_0 = 2.8\\times10^{-13}$ cm and density $N$, a metal with $3\\times10^{22}$ conduction electrons per cm³ gives $1/\\lambda \\approx 2\\times10^{-6}$ cm.',
      },
      {
        term: 'Flux quantization and the Josephson junction',
        kind: 'law',
        statement: 'The single-valuedness of $\\psi$ forces the flux through a superconducting ring to be quantized in units $2\\pi\\hbar/q$; since the carrier is a pair ($q = 2q_e$), the flux quantum is $$\\Phi_0 = \\frac{\\pi\\hbar}{q_e} \\approx 2\\times10^{-7}\\ \\text{gauss·cm}^{2}.$$ A thin insulating barrier couples two superconductors into a two-state system whose current obeys the **Josephson relations** $J = J_0\\sin\\delta$ and $\\dot{\\delta} = qV/\\hbar$.',
        detail: 'London predicted quantization with the single-electron unit; Deaver and Fairbank at Stanford and Doll and Näbauer in Germany found exactly half of that in 1961 — the experimental proof that the carriers are pairs. The Josephson junction is the two-state story once more: a dc voltage makes the phase difference $\\delta$ advance uniformly, so the current oscillates at $f = qV/h$ — voltage to frequency by pure quantum logic; a microwave field at $\\omega = qV_0/\\hbar$ produces resonant steps (Shapiro). Two junctions in parallel interfere like the two holes of Section 15.1, the phase difference between the arms set by the enclosed flux — a quantum interferometer the size of a lab instrument.',
      },
    ],
    examples: [
      {
        title: 'The hydrogen level ladder',
        problem: 'Using $E_n = -13.6\\ \\text{eV}/n^{2}$, tabulate the first three levels of hydrogen and compute the wavelengths of the $2 \\to 1$ and $3 \\to 2$ transitions.',
        steps: [
          { label: 'Step 1: Evaluate the levels', text: '$E_1 = -13.6/1 = -13.6$ eV; $E_2 = -13.6/4 = -3.40$ eV; $E_3 = -13.6/9 = -1.51$ eV. The levels crowd together toward $E = 0$, the ionization limit — the free-electron continuum.' },
          { label: 'Step 2: The $2 \\to 1$ transition', text: 'Photon energy $\\Delta E = E_2 - E_1 = -3.40 - (-13.6) = 10.2$ eV. With $hc = 1240$ eV·nm: $\\lambda = 1240/10.2 = 121.6$ nm — the Lyman-$\\alpha$ line, deep in the ultraviolet.' },
          { label: 'Step 3: The $3 \\to 2$ transition', text: '$\\Delta E = -1.51 - (-3.40) = 1.89$ eV, so $\\lambda = 1240/1.89 = 656$ nm — the red H$\\alpha$ line of the Balmer series, the strongest line of the visible hydrogen spectrum.' },
          { label: 'Step 4: Note the $n^{2}$ signature', text: 'The Ritz combination principle of Chapter 2’s preview is automatic here: every line frequency is $(E_n - E_m)/h$ with $E_n \\propto 1/n^{2}$, so line differences combine exactly as the spectroscopists found before quantum mechanics explained why.' },
        ],
        result: '$E_1 = -13.6$, $E_2 = -3.40$, $E_3 = -1.51$ eV; the $2\\to1$ line is 121.6 nm (ultraviolet) and the $3\\to2$ line is 656 nm (visible red) — Schrödinger’s equation reproducing the hydrogen spectrum from first principles.',
      },
      {
        title: 'Trapped flux comes in quanta',
        problem: 'A superconducting tin cylinder 1.3 cm long, plated on a 1.3-millimeter-diameter copper wire, is cooled below its transition in a small axial field which is then switched off. What fluxes can remain trapped, and what did the experiment establish?',
        steps: [
          { label: 'Step 1: State the quantization condition', text: 'Single-valuedness of $\\psi$ around the ring requires $\\oint\\nabla\\theta\\cdot d\\mathbf{s} = 2\\pi n$; with $\\mathbf{J} = 0$ deep in the metal this leaves $2\\pi n\\hbar = q\\Phi$, so $\\Phi = n\\,(2\\pi\\hbar/q)$.' },
          { label: 'Step 2: Insert the pair charge', text: 'The superconducting carriers are Cooper pairs, $q = 2q_e$, so the unit is $\\Phi_0 = \\pi\\hbar/q_e \\approx 2\\times10^{-7}$ gauss·cm² — half of London’s original single-electron prediction.' },
          { label: 'Step 3: Size the field', text: 'For a cylinder a tenth of a millimetre across ($\\sim10^{-2}$ cm diameter), one flux quantum corresponds to a field of order $\\Phi_0/A \\sim 4\\times10^{-7}/(7.9\\times10^{-5}) \\sim 5\\times10^{-3}$ gauss — about one percent of the Earth’s field, demanding the magnetic shielding and pickup-coil technique of the real experiments.' },
          { label: 'Step 4: Read the 1961 result', text: 'Deaver and Fairbank (and independently Doll and Näbauer) measured the trapped flux in exactly integer multiples of $\\Phi_0 = \\pi\\hbar/q_e$ — half of London’s value — confirming both flux quantization itself and that the superconducting charge is a pair of electrons.' },
        ],
        result: 'Trapped flux $\\Phi = n\\Phi_0$ with $\\Phi_0 = \\pi\\hbar/q_e \\approx 2\\times10^{-7}$ gauss·cm²: a macroscopic, purely quantum-mechanical effect visible with a millimetre-scale apparatus.',
      },
      {
        title: 'A voltage-to-frequency converter',
        problem: 'A Josephson junction is biased with a steady voltage $V_0 = 1$ microvolt. At what frequency does the supercurrent oscillate, and what happens when microwaves are added?',
        steps: [
          { label: 'Step 1: Use the second Josephson relation', text: 'The phase difference across the junction advances at $\\dot{\\delta} = qV_0/\\hbar$, so the current $J = J_0\\sin\\delta$ oscillates at $f = \\omega/2\\pi = qV_0/h$.' },
          { label: 'Step 2: Insert the numbers', text: 'With $q = 2q_e = 3.20\\times10^{-19}$ C, $V_0 = 10^{-6}$ V and $h = 6.63\\times10^{-34}$ J·s: $f = (3.20\\times10^{-25})/(6.63\\times10^{-34}) = 4.8\\times10^{8}$ Hz — about 484 MHz per microvolt of bias.' },
          { label: 'Step 3: Irradiate with microwaves', text: 'Adding a small ac voltage $v\\cos\\omega t$ on top of the dc bias modulates $\\delta$; the averaged current acquires a dc component whenever the drive satisfies $\\omega = qV_0/\\hbar$ — voltage steps appear in the junction characteristic at precisely quantized heights (the Shapiro resonance observed in 1963).' },
          { label: 'Step 4: The metrological point', text: 'Because $f$ depends only on the constants $q$ and $h$ and a measurable frequency, a Josephson junction converts voltage into frequency exactly — the basis of the modern volt standard, and another instance of the two-state machinery of this chapter doing practical work.' },
        ],
        result: '$f = 2q_eV_0/h \\approx 4.8\\times10^{8}$ Hz at one microvolt; with microwaves at $\\omega = qV_0/\\hbar$ the junction locks into resonant steps — quantum mechanics as a frequency meter for voltage.',
      },
    ],
    keyTakeaways: [
      'The wavefunction $\\psi(x) = \\langle x|\\psi\\rangle$ makes position itself a base state; $|\\psi|^{2}$ is the probability density, and $e^{ipx/\\hbar}$ is the state of definite momentum.',
      'Schrödinger’s equation $i\\hbar\\,\\partial\\psi/\\partial t = -\\tfrac{\\hbar^{2}}{2m}\\nabla^{2}\\psi + V\\psi$ is the continuum limit of the lattice hopping equation, with the potential adding a position-dependent energy term.',
      'Bound states get discrete energies from wavefunction curvature: only special energies let the exponential tails die at both ends, one node at a time.',
      'Hydrogen separates into $Y_{l,m}(\\theta,\\phi)F_l(r)$ with centrifugal term $l(l+1)\\hbar^{2}/2mr^{2}$, giving $E_n = -13.6\\ \\text{eV}/n^{2}$ and the quantum numbers $n \\ge l+1$, $|m| \\le l$.',
      'Stacking hydrogen-like orbitals under the exclusion principle builds the periodic table: filled shells are inert, lone outer electrons are chemically active, and the pattern repeats each shell.',
      'Operators $\\hat{A}$ with matrices $\\langle i|\\hat{A}|j\\rangle$ put rotations, displacements and momentum into one algebra; $\\hat{p}_x = -i\\hbar\\,\\partial/\\partial x$ and $\\hat{J}_z$ from $\\hat{R}_z(\\epsilon)$ are defined by their operations.',
      'In superconductors the Cooper-pair condensate $\\psi = \\rho^{1/2}e^{i\\theta}$ gives the London current $\\mathbf{J} = -(\\rho q/m)\\mathbf{A}$: the Meissner effect, penetration depth $\\sim2\\times10^{-6}$ cm, flux quantized in units $\\pi\\hbar/q_e$, and Josephson’s $J = J_0\\sin\\delta$ with $\\dot{\\delta} = qV/\\hbar$.',
    ],
    quiz: [
      {
        q: 'Which term makes the Schrödinger equation behave so differently from the ordinary diffusion equation?',
        options: ['The second spatial derivative on the right-hand side', 'The imaginary coefficient $i\\hbar$ on the time derivative, which turns exponential decay into oscillating waves', 'The mass $m$ in the denominator', 'The potential-energy term $V\\psi$'],
        answer: 1,
        explanation: 'Both equations have the same structure, but the $i$ in $i\\hbar\\,\\partial\\psi/\\partial t$ converts real exponential solutions into complex waves — the amplitude “diffuses” into oscillations instead of spreading monotonically.',
      },
      {
        q: 'In the graphical solution for a particle bound in a one-dimensional well, why does the wavefunction blow up for almost every trial energy $E$?',
        options: ['The potential is usually too strong for the particle', 'Where $V > E$ the curvature drives $a(x)$ away from the axis, so the tails diverge unless $E$ is tuned precisely', 'The wavefunction must be imaginary outside the well', 'Energy conservation forbids bound states in general'],
        answer: 1,
        explanation: 'Outside the well $d^{2}a/dx^{2} = (2m/\\hbar^{2})(V-E)a$ curves the solution away from the axis; only for special energies does it approach zero at both infinities — which is why the bound spectrum is discrete.',
      },
      {
        q: 'The trapped flux through a superconducting ring comes in units of $\\pi\\hbar/q_e$ rather than $2\\pi\\hbar/q_e$ because:',
        options: ['The ring is smaller than a wavelength', 'The superconducting carriers are Cooper pairs with charge $q = 2q_e$, halving the flux quantum from London’s single-electron prediction', 'The magnetic field reverses inside the ring', 'Half the flux escapes through the surface layer'],
        answer: 1,
        explanation: 'Single-valuedness of the pair wavefunction gives $2\\pi n\\hbar = q\\Phi$ with $q = 2q_e$, hence $\\Phi = n\\pi\\hbar/q_e$; the 1961 experiments found exactly this half-sized unit, proving the pairing.',
      },
      {
        q: 'Across a Josephson junction with a dc voltage $V_0$ applied, the supercurrent:',
        options: ['Flows as a steady dc current proportional to $V_0$', 'Oscillates at the frequency $f = qV_0/h$, with no dc current at all', 'Vanishes because insulators block pairs', 'Grows linearly until the junction melts'],
        answer: 1,
        explanation: 'The phase advances uniformly, $\\dot{\\delta} = qV_0/\\hbar$, so $J = J_0\\sin\\delta$ averages to zero and only the oscillation at $qV_0/h$ remains — about 484 MHz per microvolt for the pair charge.',
      },
      {
        q: 'Why does the exclusion principle enter the construction of the periodic table before any detail of electron–electron repulsion is considered?',
        options: ['Because repulsion is absent in atoms', 'Because each orbital state can hold at most two electrons (opposite spins), so shells fill in order and the outer configuration determines chemistry', 'Because protons also obey the exclusion principle', 'Because the nuclear charge is quantized'],
        answer: 1,
        explanation: 'In the independent-electron, central-field approximation the capacity of each sub-shell is $2(2l+1)$; filling them in order of energy reproduces the ionization energies (He 24.6, Li 5.4, Ne 21.6 eV) and the entire periodic recurrence of chemistry.',
      },
    ],
  },
]

export const physCh15Formulas: FormulaEntry[] = [
  {
    chapterId: 'phys-ch15',
    section: '15.1',
    name: 'Amplitude combination rule',
    formula: 'P₁₂ = |φ₁ + φ₂|²',
    note: 'indistinguishable alternatives add as amplitudes before squaring',
    latex: 'P_{12} = |\\phi_{1} + \\phi_{2}|^{2} = |\\phi_{1}|^{2} + |\\phi_{2}|^{2} + 2|\\phi_{1}||\\phi_{2}|\\cos\\delta',
  },
  {
    chapterId: 'phys-ch15',
    section: '15.1',
    name: 'Heisenberg uncertainty principle',
    formula: 'Δx·Δp ≥ ℏ/2',
    note: 'no which-way apparatus can avoid disturbing the interference',
    latex: '\\Delta x\\,\\Delta p \\ge \\frac{\\hbar}{2}',
  },
  {
    chapterId: 'phys-ch15',
    section: '15.3',
    name: 'Hamiltonian matrix evolution',
    formula: 'iℏ dCᵢ/dt = Σⱼ HᵢⱼCⱼ',
    note: 'the energy matrix H_ij drives the amplitudes; Hᵢⱼ* = Hⱼᵢ',
    latex: 'i\\hbar\\,\\frac{dC_{i}}{dt} = \\sum_{j} H_{ij}C_{j}',
  },
  {
    chapterId: 'phys-ch15',
    section: '15.4',
    name: 'Ammonia maser resonance',
    formula: '2A = ℏω₀ = h·24 GHz',
    note: 'inversion doublet 10⁻⁴ eV; wavelength 1¼ cm',
    latex: 'E_{I} - E_{II} = 2A = \\hbar\\omega_{0}, \\qquad f_{0} = 24\\times10^{9}\\ \\mathrm{Hz}',
  },
  {
    chapterId: 'phys-ch15',
    section: '15.4',
    name: 'Hydrogen hyperfine splitting (21 cm line)',
    formula: '4A = h·1420.4057518 MHz',
    note: 'triplet at E = A, singlet at E = −3A; radio-astronomy beacon',
    latex: 'E_{\\text{triplet}} - E_{\\text{singlet}} = 4A = hf, \\qquad f = 1420.4057518\\ \\mathrm{MHz}',
  },
  {
    chapterId: 'phys-ch15',
    section: '15.4',
    name: 'Energy band in a crystal lattice',
    formula: 'E = E₀ − 2A·cos(kb)',
    note: 'band width 4A; effective mass m_eff = ℏ²/2Ab²',
    latex: 'E = E_{0} - 2A\\cos kb, \\qquad m_{\\mathrm{eff}} = \\frac{\\hbar^{2}}{2Ab^{2}}',
  },
  {
    chapterId: 'phys-ch15',
    section: '15.5',
    name: 'Schrödinger equation',
    formula: 'iℏ ∂ψ/∂t = −(ℏ²/2m)∇²ψ + Vψ',
    note: 'the continuum limit of the lattice amplitude equation',
    latex: 'i\\hbar\\,\\frac{\\partial\\psi}{\\partial t} = -\\frac{\\hbar^{2}}{2m}\\nabla^{2}\\psi + V\\psi',
  },
  {
    chapterId: 'phys-ch15',
    section: '15.5',
    name: 'Hydrogen energy levels',
    formula: 'Eₙ = −13.6 eV/n²',
    note: 'Bohr radius 0.528 Å sets the size of the atom',
    latex: 'E_{n} = -\\frac{me^{4}}{2\\hbar^{2}n^{2}} = -\\frac{13.6\\ \\mathrm{eV}}{n^{2}}',
  },
]
