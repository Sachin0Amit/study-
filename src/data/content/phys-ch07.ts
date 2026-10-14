import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// THE FEYNMAN LECTURES ON PHYSICS — MASTER PHYSICS LIBRARY
// Chapter 7: Sound, Harmonics and Waves
// Source: Feynman, Leighton & Sands, Vol. I, Lectures 47–52
//   47 Sound. The wave equation  ·  48 Beats  ·  49 Modes
//   50 Harmonics  ·  51 Waves  ·  52 Symmetry in Physical Laws
// (PDF pp. 837–933 of the New Millennium Edition.)
// All worked-example numbers are the book’s own, or recomputations of them.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const physCh7Content: SectionContent[] = [
  // ------------------------------------------------------------------ 7.1
  {
    sectionId: 'phys-ch7-s1',
    readingTime: 11,
    intro: 'A wave is an oscillation that travels: the harmonic oscillator of Chapter 6, set loose to propagate through space. Feynman chooses sound as his example not because it is the most important wave, but because it is the one wave we can derive from first principles — sound is a branch of mechanics, and the derivation of its wave equation from Newton’s laws is "perhaps the greatest art of mathematical physics": explaining new phenomena in terms of old ones whose laws we already know.',
    objectives: [
      'Explain why $f(x - ct)$ represents a disturbance travelling at speed $c$, and why superposition holds for such waves',
      'Derive the three physical relations of sound propagation and combine them into the one-dimensional wave equation',
      'Compute the speed of sound from $c_s^2 = \\gamma P/\\rho$ and from the kinetic-theory result $c_s = (\\gamma/3)^{1/2}v_{\\mathrm{av}}$',
      'Use the decibel scale with Feynman’s reference pressure $P_{\\mathrm{ref}} = 2\\times 10^{-10}$ bar',
      'Distinguish Newton’s isothermal speed of sound from Laplace’s adiabatic (correct) result',
    ],
    concepts: [
      {
        term: 'Wave as a travelling function',
        kind: 'definition',
        statement: 'Any disturbance of the form $f(x - ct)$ is a wave moving in the $+x$ direction with speed $c$: to find the field at a later time $t$ you simply shift the picture by $ct$, since $f(x - ct) = f(x + \\Delta x - c(t + \\Delta t))$ when $\\Delta x = c\\,\\Delta t$.',
        detail: 'A wave $g(x + ct)$ travels toward negative $x$ equally well. Feynman’s catalogue of travelling disturbances: sound (longitudinal elastic waves in gas), longitudinal and transverse elastic waves in solids (earthquakes contain both), long gravity swells and short surface-tension ripples on water, light and radiowaves, and the matter waves of quantum mechanics whose frequency is proportional to energy and whose wave number is proportional to momentum. This chapter treats only waves whose speed is independent of wavelength — true for light in vacuum, nearly true for sound in air. If high frequencies travelled faster than low ones, a sharp noise would arrive as a musical arpeggio and a white flash would arrive red first, then white, then blue.',
      },
      {
        term: 'Principle of superposition',
        kind: 'law',
        statement: 'If $\\chi_1(x, t)$ and $\\chi_2(x, t)$ are solutions of the wave equation, so is $\\chi_1 + \\chi_2$: waves pass through one another without disturbing each other.',
        detail: 'The proof is one line: the wave equation is linear in $\\chi$, so the second derivatives of the sum are the sums of the second derivatives. This is why the light crossing your line of vision does not scramble the light arriving from an object — rays criss-cross in a bright room without effect. Superposition is the foundation for every interference and diffraction phenomenon in Chapter 8, and for the Fourier analysis of Section 7.3.',
      },
      {
        term: 'The kinetic-theory precondition',
        kind: 'insight',
        statement: 'Sound can be described by a smooth displacement field $\\chi(x, t)$ only because the wavelength is **much larger than the mean free path** of the air molecules.',
        detail: 'If molecules simply diffused from compressed regions to rarefied regions, density differences would smear away and no wave would exist. Sound survives because molecules rushing out of a high-pressure region hand their momentum to the adjacent region by collisions before they travel far. So we describe the gas on a scale large compared with the mean free path: $\\chi$ is the displacement of the centre of mass of a small gas element, and $P$ and $\\rho$ are local averages. Near a wavelength of order the mean free path (a million times shorter than audible wavelengths) the theory fails — which is exactly the scale at which absorption sets in.',
      },
      {
        term: 'Relation I — motion changes density',
        kind: 'law',
        statement: 'Conservation of matter for a slab of air whose faces are displaced by $\\chi(x, t)$ and $\\chi(x + \\Delta x, t)$ gives $\\rho_e = -\\rho_0\\,(\\partial\\chi/\\partial x)$, where $\\rho_e$ is the excess density and $\\rho_0$ the equilibrium density.',
        detail: 'The same mass $\\rho_0\\,\\Delta x$ that occupied $\\Delta x$ now occupies $\\Delta x + (\\partial\\chi/\\partial x)\\Delta x$. The sign is right by inspection: if the displacement increases with $x$ the air is stretched, and the density must fall.',
      },
      {
        term: 'Relation II — density changes pressure',
        kind: 'law',
        statement: 'Expanding the equation of state $P = f(\\rho)$ about equilibrium, $P_e = \\kappa\\rho_e$ with $\\kappa = (dP/d\\rho)_0$, valid because sound pressures are tiny compared with one atmosphere.',
        detail: 'How tiny: Feynman measures sound on the decibel scale $$I = 20\\log_{10}(P/P_{\\mathrm{ref}})\\ \\text{dB}, \\qquad P_{\\mathrm{ref}} = 2\\times 10^{-10}\\ \\text{bar},$$ where 1 bar $= 10^5$ N/m² and 1 atm $= 1.0133$ bar. A pressure amplitude of $P = 10^3 P_{\\mathrm{ref}} = 2\\times 10^{-7}$ bar (root-mean-square) is a moderately intense 60 dB; 120 dB is painful to the ear. Explosions, with overpressures of order 1 atm, fall outside this linear theory.',
      },
      {
        term: 'Relation III — pressure gradients drive motion',
        kind: 'law',
        statement: 'The net force per unit area on a slab of thickness $\\Delta x$ is $-(\\partial P_e/\\partial x)\\,\\Delta x$, so Newton’s second law reads $\\rho_0\\,(\\partial^2\\chi/\\partial t^2) = -\\partial P_e/\\partial x$.',
        detail: 'Only the excess pressure varies from place to place, so its gradient is what pushes the slab. These three relations — kinematics, equation of state, dynamics — are all the physics sound contains.',
      },
      {
        term: 'The wave equation for sound',
        kind: 'theorem',
        statement: 'Eliminating $P_e$ and $\\rho_e$ between the three relations yields $$\\frac{\\partial^2 \\chi}{\\partial x^2} = \\frac{1}{c_s^2}\\,\\frac{\\partial^2 \\chi}{\\partial t^2}, \\qquad c_s^2 = \\kappa = (dP/d\\rho)_0.$$',
        detail: 'Substituting the trial solution $\\chi = f(x - vt)$ gives $\\partial^2\\chi/\\partial x^2 = f{\\,}{\\!}^{\\prime\\prime}$ and $\\partial^2\\chi/\\partial t^2 = v^2 f{\\,}{\\!}^{\\prime\\prime}$, so the equation is satisfied only if $v = c_s$: the mechanics of gases predicts that every sound disturbance travels at one fixed speed. The same mathematics applied to a plane light wave gives $\\partial^2 E_y/\\partial x^2 = (1/c^2)\\,\\partial^2 E_y/\\partial t^2$, a consequence of Maxwell’s equations that we develop in Chapter 13. Because the equation is second order in $t$, waves travelling in either direction, and their superpositions, are automatically solutions.',
      },
      {
        term: 'Adiabatic speed of sound',
        kind: 'theorem',
        statement: 'In a sound wave the compressions heat and the rarefactions cool with **no time for heat to flow**, so $P$ follows the adiabatic law $P = \\text{const}\\cdot\\rho^{\\gamma}$, giving $$c_s^2 = \\frac{\\gamma P}{\\rho} = \\frac{\\gamma kT}{m} = \\frac{\\gamma RT}{\\mu}.$$',
        detail: 'Newton was the first to compute $dP/d\\rho$ and assumed the temperature stayed fixed — the isothermal speed, which is wrong. Laplace saw that as long as the wavelength is long compared with the mean free path, negligible heat flows between compression and rarefaction. The adiabatic result depends only on the gas temperature, not on the pressure or density: heating the gas speeds sound, regardless of how thin or dense the air is. Combining the adiabatic result with $kT = \\tfrac{1}{3}m\\langle v^2\\rangle$ gives $$c_s = \\left(\\frac{\\gamma}{3}\\right)^{1/2} v_{\\mathrm{av}},$$ the speed of sound as a fixed fraction — about $0.68$ for air — of the average molecular speed: satisfying rather than obvious, since the argument alone could not exclude the fastest or slowest molecules doing the carrying.',
      },
      {
        term: 'Energy and intensity of a sound wave',
        kind: 'definition',
        statement: 'The energy a wave can deliver is proportional to the **square of its amplitude**; for sound the useful "amplitude" is the excess pressure $P_e$, and the ear’s response is roughly logarithmic, which is why the decibel scale exists.',
        detail: 'Doubling the pressure amplitude multiplies the energy by four yet adds only 6 dB (since $20\\log_{10}2 \\approx 6$); a tenfold pressure increase adds 20 dB. Speech-level pressures are about one part in a million of an atmosphere. The full bookkeeping of energy among the harmonics of a complex tone is the energy theorem of Section 7.3.',
      },
    ],
    examples: [
      {
        title: 'Deriving the wave equation step by step',
        problem: 'Starting from Newton’s laws for the air, derive the one-dimensional wave equation and identify the propagation speed.',
        steps: [
          { label: 'Step 1: Kinematics (Relation I)', text: 'Matter conservation for the displaced slab gives $\\rho_0\\,\\Delta x = \\rho[\\Delta x + (\\partial\\chi/\\partial x)\\Delta x]$. Writing $\\rho = \\rho_0 + \\rho_e$ and keeping only first-order small quantities ($\\rho_e$, $\\chi$, $\\partial\\chi/\\partial x$ are all tiny), the product $\\rho_e\\,(\\partial\\chi/\\partial x)$ is second order and drops out: $\\rho_e = -\\rho_0\\,(\\partial\\chi/\\partial x)$.' },
          { label: 'Step 2: Equation of state (Relation II)', text: 'Linearize $P = f(\\rho)$ about equilibrium: $P_0 + P_e = f(\\rho_0) + \\rho_e f{\\,}{\\!}^{\\prime}(\\rho_0)$, so $P_e = \\kappa\\rho_e$ with $\\kappa = (dP/d\\rho)_0$.' },
          { label: 'Step 3: Dynamics (Relation III)', text: 'The pressure difference across the slab is $-[\\partial P_e/\\partial x]\\,\\Delta x$; with slab mass $\\rho_0\\Delta x$ and acceleration $\\partial^2\\chi/\\partial t^2$, Newton’s law reads $\\rho_0\\,(\\partial^2\\chi/\\partial t^2) = -\\partial P_e/\\partial x$.' },
          { label: 'Step 4: Eliminate the extras', text: 'Substitute $P_e = \\kappa\\rho_e$ into III, then $\\rho_e$ from I: $\\rho_0\\,(\\partial^2\\chi/\\partial t^2) = \\kappa\\rho_0\\,(\\partial^2\\chi/\\partial x^2)$. The density $\\rho_0$ cancels completely.' },
          { label: 'Step 5: Test the travelling wave', text: 'Try $\\chi = f(x - vt)$: the left side becomes $v^2 f{\\,}{\\!}^{\\prime\\prime}$, the right side $c_s^2 f{\\,}{\\!}^{\\prime\\prime}$. The equation holds for arbitrary $f$ only when $v = c_s = \\sqrt{\\kappa}$.' },
        ],
        result: '$\\partial^2\\chi/\\partial x^2 = c_s^{-2}\\,\\partial^2\\chi/\\partial t^2$ with $c_s^2 = (dP/d\\rho)_0$; every sound disturbance, of any shape, travels at this one speed, in either direction.',
      },
      {
        title: 'Speed of sound in air, two ways',
        problem: 'Compute the speed of sound in air at 20 °C (a) from the bulk properties $c_s = (\\gamma P/\\rho)^{1/2}$ and (b) from the molecular-speed relation $c_s = (\\gamma/3)^{1/2}v_{\\mathrm{av}}$, with $\\gamma = 1.40$, $\\mu = 28.9$ g/mol, $R = 8.314$ J/(mol·K), $T = 293$ K.',
        steps: [
          { label: 'Step 1: Temperature form', text: 'Rewrite $c_s^2 = \\gamma P/\\rho$ using $PV = RT$ per mole: $P/\\rho = RT/\\mu$, so $c_s^2 = \\gamma RT/\\mu$.' },
          { label: 'Step 2: Insert numbers', text: '$c_s^2 = 1.40 \\times 8.314 \\times 293 / 0.0289 = 3410/0.0289 = 1.18\\times 10^5$ m²/s².' },
          { label: 'Step 3: Take the root', text: '$c_s = 343$ m/s — the familiar value for room-temperature air, depending on temperature alone, not on pressure.' },
          { label: 'Step 4: Cross-check with molecules', text: 'The rms molecular speed is $v_{\\mathrm{av}} = (3RT/\\mu)^{1/2} = (2.53\\times 10^5)^{1/2} = 503$ m/s. Then $c_s = (\\gamma/3)^{1/2}\\,v_{\\mathrm{av}} = 0.683 \\times 503 = 344$ m/s.' },
        ],
        result: 'Both routes agree: $c_s \\approx 343$–344 m/s, i.e. the sound speed is about 0.68 of the average molecular speed, as the kinetic-theory relation demands.',
      },
      {
        title: 'Reading a decibel rating',
        problem: 'A loud conversation produces a root-mean-square pressure amplitude of $2\\times 10^{-7}$ bar. What is the acoustic pressure level, and what pressure would a painful 120 dB correspond to?',
        steps: [
          { label: 'Step 1: Ratio to the reference', text: 'With $P_{\\mathrm{ref}} = 2\\times 10^{-10}$ bar, the ratio is $P/P_{\\mathrm{ref}} = 10^3$.' },
          { label: 'Step 2: Apply the scale', text: '$I = 20\\log_{10}(10^3) = 20 \\times 3 = 60$ dB — a "moderately intense" sound by Feynman’s calibration.' },
          { label: 'Step 3: Scale up to pain threshold', text: 'For 120 dB, $20\\log_{10}(P/P_{\\mathrm{ref}}) = 120$ gives $P/P_{\\mathrm{ref}} = 10^6$, i.e. $P = 2\\times 10^{-4}$ bar — still only $2\\times 10^{-4}$ of an atmosphere.' },
          { label: 'Step 4: Note the linearity regime', text: 'Even at the pain threshold the pressure swing is a few parts in ten thousand of $P_0$, which is why the linearization $P_e = \\kappa\\rho_e$ is safe for everything we call sound.' },
        ],
        result: '60 dB for the conversation; 120 dB corresponds to $2\\times 10^{-4}$ bar — violent to the ear, negligible compared with atmospheric pressure.',
      },
    ],
    keyTakeaways: [
      'A wave is any function $f(x \\mp ct)$; superposition holds because the wave equation is linear in the displacement.',
      'Sound follows from three mechanical facts — motion changes density ($\\rho_e = -\\rho_0\\,\\partial\\chi/\\partial x$), density changes pressure ($P_e = \\kappa\\rho_e$), and pressure gradients accelerate the gas — which combine into $\\partial^2\\chi/\\partial x^2 = c_s^{-2}\\,\\partial^2\\chi/\\partial t^2$.',
      'The speed of sound is fixed by the medium alone: $c_s^2 = (dP/d\\rho)_0$, which for adiabatic compression is $c_s^2 = \\gamma P/\\rho = \\gamma RT/\\mu$.',
      'Newton’s isothermal calculation was wrong; Laplace’s adiabatic argument is correct because no heat flows between compression and rarefaction over one wavelength.',
      'The speed of sound is about $\\sqrt{\\gamma/3} \\approx 0.68$ times the average molecular speed, and depends on temperature only.',
      'The decibel scale $I = 20\\log_{10}(P/P_{\\mathrm{ref}})$ with $P_{\\mathrm{ref}} = 2\\times 10^{-10}$ bar reflects the ear’s roughly logarithmic response; 60 dB is $2\\times 10^{-7}$ bar.',
      'The smooth-field description requires wavelengths long compared with the mean free path — the scale at which the theory, and the wave, die.',
    ],
    quiz: [
      {
        q: 'Which substitution verifies that $\\chi(x, t) = f(x - ct)$ solves the wave equation with speed $c$?',
        options: [
          `$\\partial^2\\chi/\\partial t^2 = c^2 f{\\,}{\\!}^{\\prime\\prime}$ while $\\partial^2\\chi/\\partial x^2 = f{\\,}{\\!}^{\\prime\\prime}$, so the equation demands $v = c$`,
          'The first time derivative vanishes identically for any travelling wave',
          'Both second derivatives are zero, so any speed satisfies the equation',
          'Only sine and cosine functions can satisfy a wave equation',
        ],
        answer: 0,
        explanation: 'Differentiating twice in $x$ gives $f{\\,}{\\!}^{\\prime\\prime}$; differentiating twice in $t$ gives $c^2 f{\\,}{\\!}^{\\prime\\prime}$. Equating them through the wave equation forces the propagation speed to equal the wave speed $c$ — which is how $c_s^2 = (dP/d\\rho)_0$ is discovered.',
      },
      {
        q: 'Why was Newton’s calculation of the speed of sound incorrect?',
        options: [
          'He used the wrong value of the density of air',
          'He assumed the compressions stay at constant temperature, when in fact they are adiabatic',
          'He forgot that sound requires a medium to travel through',
          'He neglected the pressure of the surrounding atmosphere',
        ],
        answer: 1,
        explanation: 'Newton supposed heat flowed so fast that temperature stayed uniform — the isothermal derivative. In a sound wave there is no time for heat to flow between compression and rarefaction, so $P\\rho^{-\\gamma}$ is constant and $dP/d\\rho = \\gamma P/\\rho$, Laplace’s correction.',
      },
      {
        q: 'The speed of sound in a given gas depends only on:',
        options: ['Its pressure', 'Its density', 'Its temperature', 'The frequency of the sound'],
        answer: 2,
        explanation: 'From $c_s^2 = \\gamma P/\\rho$ and the gas law $P/\\rho = RT/\\mu$, the pressure and density cancel out: $c_s^2 = \\gamma RT/\\mu$. Heating the gas raises the sound speed regardless of pressure; and within this chapter the speed is independent of wavelength.',
      },
      {
        q: 'A sound level of 60 dB corresponds to a root-mean-square pressure amplitude of:',
        options: ['$2\\times 10^{-10}$ bar', '$2\\times 10^{-7}$ bar', '$2\\times 10^{-4}$ bar', '1 bar'],
        answer: 1,
        explanation: '60 dB means $20\\log_{10}(P/P_{\\mathrm{ref}}) = 60$, so $P = 10^3 P_{\\mathrm{ref}} = 10^3 \\times 2\\times 10^{-10} = 2\\times 10^{-7}$ bar — a "moderately intense" sound, still a million times weaker than atmospheric pressure.',
      },
      {
        q: 'For the smooth displacement field $\\chi(x, t)$ to describe a sound wave, the wavelength must be:',
        options: [
          'Short compared with the mean free path, so molecules carry the signal far',
          'Long compared with the mean free path, so collisions transmit momentum between adjacent regions',
          'Exactly equal to the mean free path',
          'Of any size; the mean free path is irrelevant',
        ],
        answer: 1,
        explanation: 'Molecules escaping a compression must hand momentum to the neighbouring region through collisions rather than free-flight across it; otherwise the density difference just smears away. Audible wavelengths exceed the mean free path by factors of about a million.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.2
  {
    sectionId: 'phys-ch7-s2',
    readingTime: 11,
    intro: 'What happens when two waves of different frequency share the same place? First the answer is tame — a slow pulsation called a beat — but pursuing it leads to some of the deepest ideas in physics: the group velocity that carries signals (and resolves an apparent faster-than-light paradox), and the normal modes of any bounded system, which Feynman calls "the most far-reaching principle of mathematical physics" and the seed of quantum energy levels.',
    objectives: [
      'Add two cosine waves of different frequencies and identify the beat frequency of the intensity',
      'Explain amplitude modulation and why a transmitter broadcasting at 800 kilocycles occupies a band of frequencies',
      'Distinguish phase velocity $v_p = \\omega/k$ from group velocity $v_g = d\\omega/dk$, and resolve the $v_p > c$ paradox for x-rays in glass',
      'Analyze two coupled pendulums as a superposition of two normal modes',
      'Derive the discrete mode frequencies of a string fixed at both ends and of a rectangular drumhead',
    ],
    concepts: [
      {
        term: 'Beats: interference in time',
        kind: 'definition',
        statement: 'Adding two equal-amplitude tones gives $$\\cos\\omega_1 t + \\cos\\omega_2 t = 2\\cos\\tfrac{1}{2}(\\omega_1 + \\omega_2)t\\;\\cos\\tfrac{1}{2}(\\omega_1 - \\omega_2)t$$ — a rapid oscillation at the average frequency whose size swells and falls slowly.',
        detail: 'The intensity, not the amplitude, is what we hear pulsate, and it repeats at $\\omega_1 - \\omega_2$, twice the envelope frequency written in the formula: $$I = A_1^2 + A_2^2 + 2A_1A_2\\cos(\\omega_1 - \\omega_2)t,$$ which swings between $(A_1 + A_2)^2$ and $(A_1 - A_2)^2$ — zero only when the amplitudes are equal. The ear has trouble following more than about ten beats per second. A rotating-vector picture makes it visual: two phasors at nearly the same angular speed drift in and out of alignment, so their resultant periodically grows to the sum and shrinks to the difference.',
      },
      {
        term: 'Side bands of a modulated carrier',
        kind: 'law',
        statement: 'An amplitude-modulated signal $S = (1 + b\\cos\\omega_m t)\\cos\\omega_c t$ is **identically** the sum of three pure frequencies: $S = \\cos\\omega_c t + \\tfrac{1}{2}b\\cos(\\omega_c + \\omega_m)t + \\tfrac{1}{2}b\\cos(\\omega_c - \\omega_m)t$.',
        detail: 'The "carrier" at $\\omega_c$ acquires side bands at $\\omega_c \\pm \\omega_m$ — beats turned into technology. A radio station nominally at 800 kilocycles per second actually radiates over a band from roughly 790 to 810 kc/s when the programme carries audio up to 10 kc/s, which is why stations must be spaced apart and receivers must not be too selective. Television needs about 4 megacycles per second (500 lines scanned in a thirtieth of a second demand $250 \\times 500 \\times 30$ pieces of information per second), so its channels are 6 mc/s wide — starting at channel 2, 54 to 60 mc/s — and clever engineers suppress one side band to halve the bandwidth.',
      },
      {
        term: 'Group velocity',
        kind: 'theorem',
        statement: 'The envelope of two waves of nearby frequencies travels at $$v_g = \\frac{d\\omega}{dk},$$ which differs from the phase velocity whenever the medium is dispersive.',
        detail: 'For a wave $e^{i(\\omega t - kx)}$ the **phase velocity** is $v_p = \\omega/k$, the speed at which the nodes or crests of a single frequency march along; when $\\omega = kc$ (sound in air, light in vacuum) it is the same for every frequency and there is nothing more to say. In a dispersive medium such as glass for x-rays, $k$ is a non-linear function of $\\omega$ — and then $v_g$ and $v_p$ part company. The modulation carries the signal, so $v_g$ is the speed at which information and energy travel. For x-rays in glass the index is $n = 1 - Nq_e^2/2\\epsilon_0 m\\omega^2$, less than one, so $v_p = \\omega/k > c$ — seemingly a disaster. But writing $k = \\omega/c - a/\\omega c$ gives $dk/d\\omega = 1/c + a/\\omega^2 c$, so $$v_g = \\frac{c}{1 + a/\\omega^2} < c:$$ the phases can outrun light but the modulations cannot. A pure unmodulated wave has no "start" and carries no signal.',
      },
      {
        term: 'Group velocity of a matter wave',
        kind: 'theorem',
        statement: 'With $E = \\hbar\\omega$ and $p = \\hbar k$, the relativistic relation $E^2 - p^2c^2 = m^2c^4$ forces $\\omega = c\\sqrt{k^2 + m^2c^2/\\hbar^2}$, whose **group** velocity is $v_g = c^2 k/\\omega = c^2 p/E = v$, the classical particle velocity.',
        detail: 'The phase velocity $\\omega/k$ again exceeds $c$ — harmless, since the lump of probability amplitude that locates the particle rides at $d\\omega/dk$. Quantum mechanics could not reproduce classical mechanics unless the group velocity were the particle velocity, and it is. Here two threads of Chapter 48 — beat mathematics and de Broglie’s matter waves — merge into one argument.',
      },
      {
        term: 'Reflection and standing waves',
        kind: 'law',
        statement: 'A wave $F(x - ct)$ reaching a clamped end at $x = 0$ reflects inverted: the total motion is $y = F(x - ct) - F(-x - ct)$, and for a sinusoidal wave the result is the standing wave $y = -2i\\,e^{i\\omega t}\\sin(\\omega x/c)$.',
        detail: 'Every point oscillates at the same frequency $\\omega$, but at the nodes — where $\\sin(\\omega x/c) = 0$, i.e. $\\omega x/c = 0, \\pi, 2\\pi, \\ldots$ — there is no motion at all. A pattern in which every point moves sinusoidally at one common frequency, with fixed stationary nodes, is the signature of a **mode**. The wavelength is $\\lambda = 2\\pi c/\\omega$, the same as that of the travelling waves composing it.',
      },
      {
        term: 'Modes of a string fixed at both ends',
        kind: 'theorem',
        statement: 'Fitting the sine into a string of length $L$ demands $kL = n\\pi$, so the allowed frequencies are $$\\omega_n = \\frac{n\\pi c}{L}, \\qquad n = 1, 2, 3, \\ldots$$ integral multiples of the fundamental $\\omega_1 = \\pi c/L$ (for which $\\lambda_1 = 2L$).',
        detail: 'The first mode has wavelength $2L$; the second has one node in the middle, $\\lambda = L$, and twice the frequency; the third has $3\\omega_1$, and so on. Confined waves always have discrete natural frequencies — the single most important characteristic of bounded systems, true no matter how complicated the system is.',
      },
      {
        term: 'Coupled pendulums: two modes, one motion',
        kind: 'method',
        statement: 'Two identical pendulums joined by a weak spring have exactly two pure motions: both swinging **together** at $\\omega_1 = \\omega_0$ (spring never stretched) and swinging **oppositely** at $\\omega_2 = (\\omega_0^2 + 2k/m)^{1/2}$ (spring adds restoring force).',
        detail: 'Start one pendulum alone and watch energy slosh back and forth as its amplitude collapses and the other’s grows — that exchange is a beat between the two modes. Any motion of the pair is a superposition of the two mode shapes with suitable amplitudes and phases. Trying $x = Ae^{i\\omega t}$, $y = Be^{i\\omega t}$ in the coupled equations and demanding consistency reproduces both frequencies and the mode shapes $A = B$ and $A = -B$.',
      },
      {
        term: 'The great principle: every linear system is a set of oscillators',
        kind: 'theorem',
        statement: 'For a linear system with time-independent character, **any** motion — however complicated — is a superposition of special sinusoidal motions (modes) whose frequencies and shapes are properties of the system alone; the system is equivalent to a set of independent harmonic oscillators.',
        detail: 'Feynman rates this the most general and wonderful principle of mathematical physics: an airplane wing whips in complicated fashion, yet it is a sum of mode oscillations. Quantum mechanics translates it: frequency becomes energy, so a quantum system confined like a wave on a string has **discrete energies** — the origin of atomic energy levels. A two-degree-of-freedom system like the coupled pendulums has two modes; a string has infinitely many; a drumhead a double infinity.',
      },
      {
        term: 'Modes in two dimensions',
        kind: 'law',
        statement: 'For a rectangular drumhead of sides $a$ and $b$ clamped on its boundary, the modes satisfy $$\\frac{1}{\\lambda^2} = \\frac{n^2}{4a^2} + \\frac{m^2}{4b^2},$$ with two independent integers.',
        detail: 'For $a = 2b$ the frequencies are $\\omega^2 = (\\pi c/b)^2(4m^2 + n^2)/4$: the book’s first five modes come out as $1.12, 1.41, 1.80, 2.06, 2.24$ in units of the reference $\\omega_0$ — and the striking fact is that these are **not** multiples of one another. Harmonic relations are special to the uniform string; a hanging chain (tension varying with height), the vocal tract, and any 2-D surface have inharmonic modes. This is why filling one’s lungs with helium shifts the resonances of the vocal cavity and drastically alters the voice.',
      },
    ],
    examples: [
      {
        title: 'Beats between two tones',
        problem: 'Two sources oscillate as $\\cos 10\\pi t$ and $\\cos 8\\pi t$ (5 and 4 cycles per second). Describe the sum, its envelope, and the frequency at which the loudness beats.',
        steps: [
          { label: 'Step 1: Apply the sum formula', text: 'With $\\omega_1 = 10\\pi$ and $\\omega_2 = 8\\pi$: the sum is $2\\cos(9\\pi t)\\cos(\\pi t)$ — a 4.5-cycle-per-second tone whose amplitude follows the slow curve $\\pm\\cos(\\pi t)$.' },
          { label: 'Step 2: Identify the envelope', text: 'The amplitude is contained between the two opposed cosine curves $\\pm 2\\cos(\\pi t)$; mathematically the amplitude pulsates at $\\tfrac{1}{2}(\\omega_1 - \\omega_2) = \\pi$ rad/s, once per second.' },
          { label: 'Step 3: Correct to intensity', text: 'The intensity is the square of the amplitude and repeats whenever the high-frequency wave returns to the same phase relationship — every $180^\\circ$ of the envelope — so the loudness beats at $\\omega_1 - \\omega_2 = 2\\pi$ rad/s: once per second.' },
          { label: 'Step 4: Unequal amplitudes', text: 'If the amplitudes were $A_1 \\ne A_2$, the intensity $I = A_1^2 + A_2^2 + 2A_1A_2\\cos(\\omega_1-\\omega_2)t$ would swing between $(A_1+A_2)^2$ and $(A_1-A_2)^2$ without ever reaching zero.' },
        ],
        result: 'A 4.5-cycle-per-second tone beating in loudness once per second; the intensity beat frequency is always the difference $\\omega_1 - \\omega_2$, not half of it.',
      },
      {
        title: 'Energy exchange between coupled pendulums',
        problem: 'Two identical pendulums have $\\omega_0^2 = 4.0$ s⁻² and a coupling spring contributing $2k/m = 1.5$ s⁻². One pendulum is released from rest with the other stationary. Find the mode frequencies and the period of the energy exchange.',
        steps: [
          { label: 'Step 1: In-phase mode', text: 'When both pendulums swing together the spring length never changes: $\\omega_1 = \\omega_0 = 2.00$ rad/s.' },
          { label: 'Step 2: Opposite-phase mode', text: 'When they swing oppositely the spring force adds to gravity: $\\omega_2 = (\\omega_0^2 + 2k/m)^{1/2} = (4.0 + 1.5)^{1/2} = 2.35$ rad/s.' },
          { label: 'Step 3: Interpret the initial condition', text: 'Releasing one pendulum excites both modes equally: in mode 1 it starts displaced, in mode 2 likewise, while the second pendulum receives $A = B$ and $A = -B$ contributions that initially cancel.' },
          { label: 'Step 4: Beat period', text: 'The relative phase of the two modes drifts at $\\omega_2 - \\omega_1 = 0.35$ rad/s, so the energy sloshes back and forth with period $T = 2\\pi/(\\omega_2 - \\omega_1) = 2\\pi/0.35 = 18$ s.' },
        ],
        result: 'Modes at 2.00 and 2.35 rad/s; the first pendulum falls nearly still and the second takes all the energy every 18 seconds — beats between modes, with $\\omega_1 = \\omega_0$ and $\\omega_2^2 = \\omega_0^2 + 2k/m$.',
      },
      {
        title: 'Modes of a string',
        problem: 'A string of length $L = 0.75$ m is fixed at both ends and carries transverse waves at speed $c = 300$ m/s (set by its tension). Find the first three mode frequencies and the fundamental period.',
        steps: [
          { label: 'Step 1: Fundamental', text: 'The first mode has $\\lambda_1 = 2L = 1.5$ m, so $\\omega_1 = \\pi c/L = 400\\pi$ rad/s, i.e. $f_1 = c/2L = 200$ Hz.' },
          { label: 'Step 2: Higher modes', text: 'Successive modes add one node each: $f_2 = 2f_1 = 400$ Hz ($\\lambda_2 = L$), $f_3 = 3f_1 = 600$ Hz ($\\lambda_3 = L/2 = 0.5$ m).' },
          { label: 'Step 3: Repetition period', text: 'A plucked string repeats its whole shape after the time for a wave to travel two lengths, $T = 2L/c = 1.5/300 = 5$ ms — one period of the 200 Hz fundamental, confirming the motion is periodic.' },
          { label: 'Step 4: Why it sings', text: 'Since every mode frequency is an integer multiple of $f_1$, any superposition repeats with period $T$ — the string necessarily produces a musical tone rather than noise.' },
        ],
        result: '$f_n = n \\times 200$ Hz for $n = 1, 2, 3, \\ldots$; fundamental wavelength 1.5 m and repetition period 5 ms.',
      },
    ],
    keyTakeaways: [
      'Two added tones of nearby frequency produce a wave at the average frequency whose intensity beats at the difference frequency $\\omega_1 - \\omega_2$, between $(A_1+A_2)^2$ and $(A_1-A_2)^2$.',
      'Amplitude modulation is beats written forward: a carrier at $\\omega_c$ modulated at $\\omega_m$ splits into side bands at $\\omega_c \\pm \\omega_m$, forcing stations and channels to occupy bands of finite width.',
      'Phase velocity $\\omega/k$ moves the nodes; group velocity $d\\omega/dk$ moves the signal. X-rays in glass have $v_p > c$ but $v_g = c/(1 + a/\\omega^2) < c$.',
      'For matter waves, $E = \\hbar\\omega$ and $p = \\hbar k$ give group velocity exactly the classical particle velocity $c^2p/E$ — quantum mechanics riding on beat mathematics.',
      'A wave hitting a clamped end reflects inverted; two oppositely travelling sinusoidal waves make a standing wave with fixed nodes.',
      'A string fixed at both ends supports only $\\omega_n = n\\pi c/L$; two coupled pendulums support $\\omega_0$ and $(\\omega_0^2 + 2k/m)^{1/2}$ with shapes "together" and "opposite".',
      'Any motion of any linear system is a superposition of its modes — the system is equivalent to independent oscillators — which in quantum mechanics becomes the existence of discrete energy levels; but harmonic relations are special, as the rectangular drumhead ($a = 2b$) with modes at $1.12, 1.41, 1.80, 2.06, 2.24$ shows.',
    ],
    quiz: [
      {
        q: 'Two equal-amplitude tones at 440 Hz and 444 Hz sound together. At what rate does the heard loudness pulsate?',
        options: ['2 Hz', '4 Hz', '442 Hz', '8 Hz'],
        answer: 1,
        explanation: 'The amplitude envelope varies at half the difference, 2 Hz, but the intensity — what the ear registers — returns to a maximum each time the carrier is in step with itself, i.e. at the full difference $\\omega_1 - \\omega_2$: 4 pulsations per second.',
      },
      {
        q: 'A radio station transmits at a nominal 800 kilocycles per second with audio content up to 10 kc/s. Over what range does it actually radiate?',
        options: [
          'Exactly 800 kc/s only — the crystal oscillator fixes the frequency',
          '790 to 810 kc/s, because the modulation creates side bands at $\\omega_c \\pm \\omega_m$',
          '780 to 820 kc/s, since both side bands double the audio band',
          '500 to 1500 kc/s, the whole broadcast band',
        ],
        answer: 1,
        explanation: 'Modulation is not a metaphor: $(1 + b\\cos\\omega_m t)\\cos\\omega_c t$ is algebraically identical to three pure waves at $\\omega_c$ and $\\omega_c \\pm \\omega_m$. The moment the announcer speaks, the "800 kc/s" station spreads over $\\pm 10$ kc/s.',
      },
      {
        q: 'X-rays in glass have a phase velocity greater than $c$. Why does this not violate relativity?',
        options: [
          'Glass is opaque to x-rays, so no signal travels',
          'The speed of light in glass is larger than $c$',
          'Signals travel at the group velocity $d\\omega/dk$, which works out to less than $c$',
          'Phase velocity only applies to sound waves',
        ],
        answer: 2,
        explanation: 'A pure wave has no start and cannot serve as a signal; to send one you must modulate, which mixes frequencies, and the modulation envelope moves at $v_g = c/(1 + a/\\omega^2) < c$. The nodes are mathematical points, not messengers.',
      },
      {
        q: 'Two identical pendulums are coupled by a spring. In which mode does the system oscillate at a frequency higher than either pendulum alone?',
        options: [
          'Both pendulums swinging together — the spring is then unstretched and adds nothing',
          'The pendulums swinging oppositely — the spring pulls against the motion and stiffens the system',
          'Both modes have the same frequency',
          'Neither mode; coupling only transfers energy, never changes frequency',
        ],
        answer: 1,
        explanation: 'In-phase, the spring keeps constant length and $\\omega_1 = \\omega_0$. Anti-phase, the spring stretches twice per swing and adds restoring force: $\\omega_2^2 = \\omega_0^2 + 2k/m > \\omega_0^2$.',
      },
      {
        q: 'A string fixed at both ends has fundamental frequency $f_1$. Its third mode has:',
        options: ['Frequency $3f_1$ and two internal nodes', 'Frequency $3f_1$ and three internal nodes', 'Frequency $f_1/3$ and wavelength $2L/3$', 'Frequency $2f_1$ and one node'],
        answer: 0,
        explanation: 'The modes are $\\omega_n = n\\pi c/L$ with $\\lambda_n = 2L/n$: the third mode has frequency $3f_1$, wavelength $2L/3$, and nodes dividing the string into three loops — two strictly interior nodes plus the two fixed ends.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.3
  {
    sectionId: 'phys-ch7-s3',
    readingTime: 12,
    intro: 'Pythagoras discovered that strings whose lengths are in small-integer ratios sound pleasant together — the first quantitative law of nature found outside geometry. Two and a half millennia later we can say exactly why: a plucked string is a sum of harmonics, and consonance is the coincidence of harmonics between two notes. This section completes the mathematics (Fourier’s theorem), then tours the general world of waves — bow waves, shock waves, earthquake waves, and the beautifully complicated waves of water.',
    objectives: [
      'Distinguish noise, pitch, loudness and quality as properties of the pressure-versus-time curve',
      'State Fourier’s theorem and compute the Fourier coefficients of a periodic function from the orthogonality integrals',
      'Apply the energy theorem to relate total wave energy to the harmonic content',
      'Explain the origin of timbre, consonance, and nonlinear distortion (harmonics, rectification, intermodulation)',
      'Derive the Mach cone angle and describe shock waves, waves in solids, and the two-regime dispersion of water waves',
    ],
    concepts: [
      {
        term: 'Musical tones are periodic',
        kind: 'definition',
        statement: 'Noise is an irregular vibration of the eardrum; a **musical tone** is a pressure curve that repeats with period $T$. Loudness corresponds to the magnitude of the pressure changes, pitch to the period, and "quality" to the shape of the repeating pattern.',
        detail: 'A plucked string necessarily repeats: any wave on it returns to its starting position and direction after travelling two full lengths, taking $T = 2L/c$, because reflection at each end simply re-launches the same shape. The sound it drives into the air repeats with the same period — which is why strings sing.',
      },
      {
        term: 'Fourier’s theorem',
        kind: 'theorem',
        statement: 'Any periodic function encountered in physics can be written as $$f(t) = a_0 + \\sum_{n=1}^{\\infty}\\left(a_n\\cos n\\omega t + b_n\\sin n\\omega t\\right), \\qquad \\omega = \\frac{2\\pi}{T}.$$ The coefficients follow from Fourier’s averaging trick — multiply by, say, $\\cos 7\\omega t$ and average over a period, which kills every term but the matching one: $$a_n = \\frac{2}{T}\\int_0^T f(t)\\cos n\\omega t\\,dt, \\qquad b_n = \\frac{2}{T}\\int_0^T f(t)\\sin n\\omega t\\,dt.$$',
        detail: 'The constant $a_0$ (usually zero for sound) shifts the average pressure. The one proviso: at a jump discontinuity the series converges to the halfway value — the physicist’s rule that a discontinuous function, being only ever a simplification of a real one, should be defined with halfway values at its breaks. Phase can be absorbed by using both sines and cosines at each frequency, since $\\cos(\\omega t + \\phi) = \\cos\\phi\\cos\\omega t - \\sin\\phi\\sin\\omega t$. The integrals $\\int_0^T \\sin n\\omega t\\cos m\\omega t\\,dt$ vanish, and $\\int_0^T \\cos n\\omega t\\cos m\\omega t\\,dt$ is $T/2$ for $n = m$ and zero otherwise — the sieve that isolates each coefficient. Analysis is the reverse of synthesis: “it is easy to make a cake from a recipe; but can we write down the recipe if we are given a cake?”',
      },
      {
        term: 'The square wave',
        kind: 'method',
        statement: 'The odd square wave ($+1$ for the first half-period, $-1$ for the second) has only odd harmonics with amplitudes falling as $1/n$: $$f(t) = \\frac{4}{\\pi}\\left(\\sin\\omega t + \\tfrac{1}{3}\\sin 3\\omega t + \\tfrac{1}{5}\\sin 5\\omega t + \\cdots\\right).$$',
        detail: 'Check it at $t = T/4$ ($\\omega t = \\pi/2$): every sine is $\\pm 1$, giving $(4/\\pi)(1 - \\tfrac{1}{3} + \\tfrac{1}{5} - \\cdots)$, and the bracket is the Leibniz series for $\\pi/4$ — so $f = 1$, exactly right. The same series converges to the halfway value zero at the jumps.',
      },
      {
        term: 'Energy theorem (Parseval)',
        kind: 'theorem',
        statement: 'The energy in one period equals the sum of the energies of the Fourier components: $$\\int_0^T f^2(t)\\,dt = T a_0^2 + \\frac{T}{2}\\sum_{n=1}^{\\infty}\\left(a_n^2 + b_n^2\\right).$$',
        detail: 'All cross terms vanish by the same orthogonality that extracts the coefficients. Applied to the square wave, $\\int f^2 dt = T$ gives $1 = (4/\\pi)^2 \\cdot \\tfrac{1}{2}(1 + \\tfrac{1}{3^2} + \\tfrac{1}{5^2} + \\cdots)$, proving the odd reciprocal squares sum to $\\pi^2/8$; the parabola $(t - T/2)^2$ similarly yields $\\pi^4/90$ for the fourth powers — a result needed for blackbody radiation in Chapter 10.',
      },
      {
        term: 'Timbre, vowels and consonance',
        kind: 'insight',
        statement: 'The **quality** of a tone is the set of relative strengths of its harmonics — the $a$’s and $b$’s — and two notes sound consonant when their harmonics coincide: for lengths in ratio 2:3 (a fifth) the second harmonic of the shorter equals the third harmonic of the longer; dissonance is rapid beats between upper harmonics that nearly coincide.',
        detail: 'An electric organ manufactures voices this way: the keys pick the fundamental, the stops set the harmonic mix, and the machine mimics flute or oboe. The ear is nearly deaf to the relative phases of harmonics — one oscillator per frequency suffices — though microphones and other physical instruments do care. Vowel sounds arise because the mouth cavity resonates, boosting some of the harmonics from the vocal cords; a given vowel keeps its emphasized absolute frequencies even as the pitch changes. Piano demonstration: press $C{\\,}{\\!}^{\\prime}$ silently (damper lifted), strike $C$ — the second harmonic of $C$ rings $C{\\,}{\\!}^{\\prime}$ after $C$ is damped; the third harmonic of $C$ similarly stirs $G{\\,}{\\!}^{\\prime}$. Labelling three successive C’s as 2, 4, 8 and the G’s as 3, 6, 12 displays the whole arithmetic. Why coincidence should please the ear remains undefined — physics has advanced on experiment and mathematics, less on aesthetics. The tempered scale replaces the perfect fifth $3/2$ by $2^{7/12} = 1.499$, close enough for most ears, twelve equal steps to the octave.',
      },
      {
        term: 'Nonlinear response: harmonics and modulation',
        kind: 'law',
        statement: 'A device with $x_{\\mathrm{out}} = K(x_{\\mathrm{in}} + \\epsilon x_{\\mathrm{in}}^2)$ driven by $\\cos\\omega t$ outputs the fundamental plus its **second harmonic** and a DC shift (rectification); driven by two tones it also produces sum and difference frequencies $\\omega_1 \\pm \\omega_2$ (intermodulation).',
        detail: 'Feeding $\\cos\\omega t$ through the quadratic gives $K(\\cos\\omega t + \\epsilon/2 + (\\epsilon/2)\\cos 2\\omega t)$. With two inputs the cross term $2AB\\cos\\omega_1 t\\cos\\omega_2 t$ is either "a modulated amplitude $AB\\cos\\omega_2 t$ riding $\\cos\\omega_1 t$" or "two new frequencies" — the same fact in two languages, connected by beats. All these effects scale as the product of two amplitudes, so they matter for strong signals: the ear itself is believed nonlinear (loud pure tones seem to acquire harmonics); hi-fi designers fight the loudspeaker’s nonlinearity; radio transmitters and receivers exploit it on purpose. And since lasers arrived, even light is nonlinear: strong red light passing through glass excretes a little blue — the second harmonic of an optical frequency.',
      },
      {
        term: 'Bow waves, shocks and the bore',
        kind: 'law',
        statement: 'A source outrunning its own waves concentrates them onto a cone of half-angle $\\sin\\theta = c_w/v$ — and when wave speed grows with amplitude, as compressed air is hotter and carries sound faster, the crests of a compression overtake its front and sharpen it into a **shock**.',
        detail: 'In the time the source advances $x_3 - x_1 \\propto v$, each earlier wavefront has grown only to $r_3 \\propto c_w$; the common tangent to the family of spheres is the cone. No special "source" is needed — any object outrunning the waves of its medium sheds them automatically. A charged particle in glass, where light travels at $c/n$ (about $2c/3$), can outrun the light and radiate a cone of it: Cherenkov radiation, whose cone angle measures the particle’s speed — work honored with the 1958 Nobel Prize (Cherenkov, Frank and Tamm). In air, overpressures of order one atmosphere raise the wave speed about twenty percent; a real front is then only of order one mean free path thick, where the smooth theory fails. A shock always outruns sound in the gas ahead but lags sound in the gas behind — you cannot hear it coming. For the water bore, conserving mass and momentum gives the front speed $$u^2 = \\frac{g h_2 (h_1 + h_2)}{2 h_1},$$ reducing to the long-wave speed $\\sqrt{gh}$ when $h_1 \\approx h_2$. Energy is **not** conserved across a strong bore or shock — it becomes the churning foam, or heat in the gas.',
      },
      {
        term: 'Waves in solids and in the Earth',
        kind: 'insight',
        statement: 'Solids carry longitudinal (compression) waves and, unlike fluids, transverse (shear) waves, always slower; earthquakes launch both, and their arrival-time difference measures the distance to the quake.',
        detail: 'The transverse waves are the closer analogues of polarized light; sound has no polarization, being pure compression. The shortest possible wavelength is set by the atomic spacing — beyond that, dispersion enters and the very concept of a continuum wave gives way to coupled-oscillator mode patterns (two neighbours moving oppositely), the language of the solid’s heat capacity. Inside the Earth, wave speed varies with depth so rays curve, and the core refuses to transmit transverse waves — the evidence that the Earth’s centre is liquid. The great Chilean earthquake of May 1960 rang the whole planet: Fourier analysis of the seismographs revealed the Earth’s normal modes as sharp peaks, including a split fundamental doublet at periods of 54.7 and 53.1 minutes.',
      },
      {
        term: 'Water waves: the worst possible example',
        kind: 'insight',
        statement: 'Deep-water gravity waves have phase velocity $v_{\\mathrm{phase}} = (g\\lambda/2\\pi)^{1/2}$ — long waves travel faster — and their **group velocity is one-half** of that; capillary ripples obey $v = (2\\pi T_s/\\lambda\\rho)^{1/2}$ with the opposite trend, short waves faster.',
        detail: 'Water particles move in circles that shrink with depth, mixing longitudinal and transverse motion; the restoring force is gravity for long swells and surface tension $T_s$ for ripples. Combined: $v_{\\mathrm{phase}} = (T_s k/\\rho + g/k)^{1/2}$, fast at both extremes with a minimum in between; group velocity is $\\tfrac{1}{2}v_{\\mathrm{phase}}$ for gravity waves but $\\tfrac{3}{2}v_{\\mathrm{phase}}$ for ripples. Consequences abound: a distant boat’s long swells arrive first and the chop shortens with time; fine ripples run ahead of a fishing line while long "slurps" trail the object; a wave reaching shallow water slows, over-curves and breaks — nobody has yet fully computed the breaking shape.',
      },
    ],
    examples: [
      {
        title: 'Synthesizing and checking the square wave',
        problem: 'Verify that the Fourier series of the odd square wave, $f(t) = (4/\\pi)(\\sin\\omega t + \\tfrac{1}{3}\\sin 3\\omega t + \\tfrac{1}{5}\\sin 5\\omega t + \\cdots)$, really equals $+1$ at $t = T/4$.',
        steps: [
          { label: 'Step 1: Evaluate the sines', text: 'At $\\omega t = \\pi/2$ every odd sine is $\\pm 1$: $\\sin(\\pi/2) = 1$, $\\sin(3\\pi/2) = -1$, $\\sin(5\\pi/2) = 1$, alternating in sign.' },
          { label: 'Step 2: Assemble the series', text: '$f = (4/\\pi)(1 - \\tfrac{1}{3} + \\tfrac{1}{5} - \\tfrac{1}{7} + \\cdots)$ — the Leibniz series, whose sum is $\\pi/4$.' },
          { label: 'Step 3: Conclude', text: '$f = (4/\\pi)(\\pi/4) = 1$, exactly the defined value of the square wave in its "on" interval.' },
          { label: 'Step 4: Energy check', text: 'Since $f^2 = 1$ almost everywhere, $\\int_0^T f^2 dt = T = (T/2)(4/\\pi)^2(1 + \\tfrac{1}{9} + \\tfrac{1}{25} + \\cdots)$, so the odd reciprocal squares sum to $\\pi^2/8 = 0.8225$ — the energy theorem as a bonus identity.' },
        ],
        result: 'The series converges to the correct values everywhere except the jumps, where it delivers the halfway value zero; only odd harmonics appear, with amplitudes $4/n\\pi$.',
      },
      {
        title: 'Piano strings resonating in sympathy',
        problem: 'Label the frequencies of three middle C’s as 2, 4, 8 and of the G’s above them as 3, 6, 12. Predict what you hear when you press $C{\\,}{\\!}^{\\prime}$ silently, strike $C$, then release it — and what happens if instead you press $G$ silently and strike $C{\\,}{\\!}^{\\prime}$.',
        steps: [
          { label: 'Step 1: First experiment', text: 'Striking $C$ (fundamental 2) also sounds its second harmonic (4) — which is exactly $C{\\,}{\\!}^{\\prime}$, whose damper you lifted. After you release $C$, the $C{\\,}{\\!}^{\\prime}$ strings keep ringing softly as they die away.' },
          { label: 'Step 2: Why it works', text: 'The pressed string is driven at its own natural frequency by resonance — the driven-oscillator physics of Chapter 6 — and stores energy at 4.' },
          { label: 'Step 3: Second experiment', text: 'Striking $C{\\,}{\\!}^{\\prime}$ (fundamental 4) sounds its third harmonic (12), which is $G{\\,}{\\!}^{\\prime}$ — but you pressed plain $G$ (3). Its **fourth** harmonic is 12, so it is the fourth harmonic of $G$ that is excited.' },
          { label: 'Step 4: Listen closely', text: 'What you actually hear as the faint dying tone is $G{\\,}{\\prime\\prime}$, two octaves above the pressed $G$ — the 12 that both strings share.' },
        ],
        result: 'Consonance is shared harmonics: 2-in-3 (the fifth) makes harmonic 4 of one string equal harmonic 6 of the other; every pleasing interval in the scale is a small-integer coincidence of this kind.',
      },
      {
        title: 'Group velocity of ocean swell',
        problem: 'A storm sends out long swells of wavelength 10 m (in deep water). At what speed does the group of swells travel, and what is the wave period?',
        steps: [
          { label: 'Step 1: Phase velocity', text: 'For gravity waves $v_{\\mathrm{phase}} = (g\\lambda/2\\pi)^{1/2} = (9.8 \\times 10/6.28)^{1/2} = (15.6)^{1/2} = 3.95$ m/s.' },
          { label: 'Step 2: Group velocity', text: 'Since $v_{\\mathrm{phase}} \\propto \\lambda^{1/2}$, the group travels at half the phase velocity: $v_g = 1.98$ m/s.' },
          { label: 'Step 3: Period', text: 'The period of the oscillation is $T = \\lambda/v_{\\mathrm{phase}} = 10/3.95 = 2.5$ s.' },
          { label: 'Step 4: What a swimmer sees', text: 'Individual crests overtake the group from behind, growing as they enter it, dying at the front — each crest moves at 3.95 m/s while the wave group, and the energy, advances at only 1.98 m/s.' },
        ],
        result: 'Phase velocity 3.95 m/s, group velocity 1.98 m/s, period 2.5 s: half-speed delivery of the wave energy.',
      },
    ],
    keyTakeaways: [
      'A musical tone is a periodic pressure curve; pitch is its period, loudness its pressure scale, quality its waveform shape.',
      'Fourier’s theorem writes any periodic physical function as harmonics at $n\omega$, each coefficient isolated by multiplying by the matching harmonic and averaging; the energy theorem $\int f^2 dt = Ta_0^2 + (T/2)\sum(a_n^2 + b_n^2)$ then makes total energy the sum of harmonic energies — applied to the square wave it proves $\sum 1/n^2 = \pi^2/8$ over odd $n$.',
      'Timbre is the harmonic recipe; consonance is harmonic coincidence (a fifth is 2:3 because harmonic 4 equals harmonic 6); the ear ignores relative phases, and the tempered fifth $2^{7/12} = 1.499$ approximates 3/2.',
      'A quadratic nonlinearity rectifies, doubles frequencies, and intermodulates — producing $\\omega_1 \\pm \\omega_2$; lasers now do this to light itself.',
      'A source outrunning its own waves makes a Mach cone, $\sin\theta = c_w/v$ (Cherenkov light is the same effect in glass); amplitude-dependent wave speed then sharpens compressions into shocks that outrun the undisturbed sound speed — the bore is the hydraulic analogue, with $u^2 = gh_2(h_1+h_2)/2h_1$.',
      'Solids carry slower transverse as well as longitudinal waves; their arrival-time split locates earthquakes, the core’s failure to transmit them proves it liquid, and the 1960 Chile quake revealed Earth’s normal modes — 54.7- and 53.1-minute doublet included.',
      'Water waves are maximally perverse: circular particle orbits, $v_{\\mathrm{phase}} = (g\\lambda/2\\pi)^{1/2}$ with half-speed groups for swells, capillary ripples behaving oppositely, and a minimum wave speed in between.',
    ],
    quiz: [
      {
        q: 'In Fourier analysis, how is the coefficient $a_7$ of a periodic function $f(t)$ isolated?',
        options: [
          'By evaluating $f$ at seven equally spaced points and summing',
          'By multiplying $f(t)$ by $\\cos 7\\omega t$ and averaging over one period — every other term averages to zero',
          'By differentiating $f$ seven times',
          'By taking the largest peak of $f$ in one period',
        ],
        answer: 1,
        explanation: 'Orthogonality is a sieve: $\\cos 7\\omega t$ times any other harmonic averages to zero over a whole number of periods, and times $\\cos 7\\omega t$ itself averages to $1/2$, leaving $a_7 = (2/T)\\int_0^T f\\cos 7\\omega t\\,dt$.',
      },
      {
        q: 'The Fourier series of the odd square wave contains:',
        options: [
          'All harmonics with equal amplitudes',
          'Only odd harmonics, with amplitudes proportional to $1/n$',
          'Only even harmonics, with amplitudes proportional to $1/n^2$',
          'Only the sine terms at even multiples of $\\omega$',
        ],
        answer: 1,
        explanation: 'The square wave is $f(t) = (4/\\pi)(\\sin\\omega t + \\tfrac{1}{3}\\sin 3\\omega t + \\tfrac{1}{5}\\sin 5\\omega t + \\cdots)$: odd frequencies only, amplitude $4/n\\pi$ — the sharper the corners demanded, the more high harmonics needed.',
      },
      {
        q: 'A quadratic nonlinearity $x_{\\mathrm{out}} = K(x_{\\mathrm{in}} + \\epsilon x_{\\mathrm{in}}^2)$ is fed two pure tones $\\omega_1$ and $\\omega_2$. Which frequencies appear in the output?',
        options: [
          'Only $\\omega_1$ and $\\omega_2$',
          `$\\omega_1$, $\\omega_2$, their second harmonics, a DC shift, and the sum and difference frequencies $\\omega_1 \\pm \\omega_2$`,
          'Only $\\omega_1 + \\omega_2$',
          'A continuous noise spectrum',
        ],
        answer: 1,
        explanation: 'Squaring produces $\\cos^2\\omega t = \\tfrac{1}{2}(1 + \\cos 2\\omega t)$ (rectification plus second harmonic for each tone) and the cross term $2AB\\cos\\omega_1 t\\cos\\omega_2 t = AB[\\cos(\\omega_1+\\omega_2)t + \\cos(\\omega_1-\\omega_2)t]$ — modulation and side bands are the same phenomenon.',
      },
      {
        q: 'Why do two notes a fifth apart (frequency ratio 3:2) sound consonant, according to the harmonic theory?',
        options: [
          'Their fundamentals beat at exactly 3 Hz',
          'An upper harmonic of one coincides exactly with an upper harmonic of the other, so no beats arise between them',
          'The ear cannot resolve frequencies that close',
          'The two notes share the same waveform',
        ],
        answer: 1,
        explanation: 'With lengths 2:3, harmonic 4 of the lower equals harmonic 6 of the higher; all shared harmonics coincide exactly. Dissonance, by contrast, is near-coincidence of upper harmonics producing rapid beats.',
      },
      {
        q: 'For deep-water gravity waves, the group velocity is:',
        options: ['Twice the phase velocity', 'Equal to the phase velocity', 'One-half of the phase velocity', 'Zero, since water returns to its place'],
        answer: 2,
        explanation: 'Because $v_{\\mathrm{phase}} \\propto \\lambda^{1/2}$, differentiation gives $v_g = \\tfrac{1}{2}v_{\\mathrm{phase}}$: crests march through the group at double the group speed — which is why a boat wake behaves so differently from a sound wake.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.4
  {
    sectionId: 'phys-ch7-s4',
    readingTime: 10,
    intro: 'Feynman closes Volume I with the deepest organizing idea in physics: symmetry. A law is symmetrical if there is something you can do to an experiment — move it, turn it, delay it, wait, run the film backwards, mirror it — after which it looks the same. The list of nature’s symmetries turns out to be a map of the conservation laws, and the one entry that fails — mirror symmetry, in weak decays — is one of the great surprises of twentieth-century physics.',
    objectives: [
      'State Weyl’s definition of symmetry and list Feynman’s table of symmetry operations',
      'Distinguish the symmetry of physical laws from the (accidental) asymmetry of particular situations',
      'Identify which operations are not symmetries (scale changes, uniform rotation) and why time reversal is subtle',
      'Connect each space–time symmetry to its conservation law via quantum mechanics',
      'Explain the Wu experiment and why parity conservation fails in weak decays',
    ],
    concepts: [
      {
        term: 'Symmetry, Weyl’s definition',
        kind: 'definition',
        statement: 'A thing is symmetrical if there is something we can do to it so that, after we have done it, **it looks the same as it did before** — and a physical law is symmetrical when the phenomena are unchanged by the corresponding operation on the experiment.',
        detail: 'Feynman’s table of operations under which the phenomena remain invariant: translation in space; translation in time; rotation through a fixed angle; uniform velocity in a straight line (Lorentz transformation); reversal of time; reflection of space; interchange of identical atoms or particles; quantum-mechanical phase; and matter–antimatter (charge conjugation). All are stated "as far as we know today" — the list is empirical, not logical. A particular situation may be grossly unsymmetrical without violating any symmetry of the **laws**: standing in New Orleans looking at Chicago, Florida lies to the right — but that is geography, not physics. Likewise the right-hand thread of a random screw is the history of machine shops, not of nature. The physical question is always whether the *laws* forbid the mirror-image arrangement of a whole situation. When the entire relevant environment is transformed along with the apparatus — move the whole Earth with the experiment, or turn everything else along with the tilted instrument — the phenomena come out the same.',
      },
      {
        term: 'Symmetries that fail: scale, rotation — and the Martian test',
        kind: 'insight',
        statement: 'The laws are **not** invariant under a change of scale: a cathedral of matchsticks scaled up would collapse, a sodium atom in a five-times-larger box still emits the same wavelength, and atoms fix an absolute size; nor are they invariant under uniform rotation — and because scale fails, an absolute length can be defined with no artefact: “we are 17,000,000,000 hydrogen atoms high.”',
        detail: 'Galileo discovered the scale failure and published it alongside his laws of motion in "Two New Sciences", drawing the bones of a dog and of a super-dog ten times larger with quite different proportions. Today the atomic structure of matter explains it: you cannot build an apparatus of five atoms and scale it up. The Foucault pendulum detects the Earth’s rotation without looking outside; a rotating spaceship’s experiments differ from stationary ones. Feynman’s thought experiment: describe humanity to a Martian by telephone — no samples, no pictures, only words. Size, shape, five-bumped prongs: all fine. But "put the heart on the left side" is impossible to convey — unless you can cite a phenomenon that is not mirror-symmetric, and for gravity, electromagnetism and nuclear forces everything is symmetric.',
      },
      {
        term: 'Time reversal: irreversibility from numbers',
        kind: 'insight',
        statement: 'All large-scale phenomena are irreversible ("the moving finger writes, and having writ, moves on"), yet the fundamental laws are completely reversible in time: run the film of the atoms backwards and no physicist could object.',
        detail: 'An egg splattering is absurd reversed; the same molecules watched individually are perfectly symmetric between forward and backward. The irreversibility we see is a consequence of the enormous numbers of particles involved — the subject we take up again with entropy in Chapter 10. Reversal of time therefore belongs on the symmetry list at the microscopic level.',
      },
      {
        term: 'Symmetry implies conservation',
        kind: 'theorem',
        statement: 'In quantum mechanics, **every symmetry of the laws corresponds to a conservation law**: translation in space to conservation of momentum, translation in time to conservation of energy, rotation to conservation of angular momentum, and quantum-mechanical phase to conservation of charge.',
        detail: 'Feynman states this "for a reason which we cannot make clear at the level of the present discussion" — a fact most physicists still find staggering, and among the most beautiful things in physics. The phase symmetry: since only $|\\psi|^2$ is observable, $\\psi^{\\prime} = \\psi e^{i\\Delta}$ leaves all physics unchanged for constant $\\Delta$; the associated conserved quantity appears to be electric charge.',
      },
      {
        term: 'Polar and axial vectors',
        kind: 'definition',
        statement: 'An **honest** (polar) vector, like the step $\\mathbf{r}$ from one object to another, reverses under reflection like the space itself; an **axial** vector, like the angular velocity of a spinning wheel, does not reverse relative to the (reversed) geometry — it flips relative to polar vectors.',
        detail: 'Equations must be built so that reflection changes the sign of every axial vector and every cross product, leaving the physics intact: $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$ survives because the right-hand rule becomes a left-hand rule; in $\\mathbf{F} = q\\mathbf{v} \\times \\mathbf{B}$ the sign change of the cross product must be cancelled by $\\mathbf{B} \\to -\\mathbf{B}$, so the poles of a magnet swap north and south under reflection. Right-hand rules always occur in even numbers in any real phenomenon, so the phenomena look symmetric.',
      },
      {
        term: 'Mirror symmetry of molecules and life',
        kind: 'insight',
        statement: 'Synthetic alanine is a 50/50 mixture of the L (left-handed) and D (right-handed) mirror molecules, chemically identical in every measurement — but **all proteins use L-alanine exclusively**, and the lopsidedness of life is inherited, not fundamental.',
        detail: 'Artificial sugar does not rotate the plane of polarization; feed it to bacteria and they eat one-handed sugar only, leaving the other half rotating the opposite way. A perfectly mirrored frog could live and breathe, but would starve among ordinary flies — unless we handed it mirrored flies too. The presumption: one lopsided organic molecule arose by accident at life’s beginning, and every enzyme since has propagated the same handedness. The asymmetry of living things testifies to their common origin, not to an asymmetry of physical law.',
      },
      {
        term: 'The τ–θ puzzle and the fall of parity',
        kind: 'insight',
        statement: 'A charged particle discovered around 1954 decayed into three $\\pi$-mesons (call it $\\tau$) and another into two $\\pi$-mesons ($\\theta$) — with identical masses within error, identical lifetimes, and production always in the same 14 percent to 86 percent ratio: manifestly one particle with two decay modes, yet reflection symmetry (conservation of **parity**) in quantum mechanics forbade one particle doing both.',
        detail: 'Lee and Yang proposed testing the assumption elsewhere; the first experiment was done by Wu of Columbia with magnetically aligned cobalt-60 nuclei at very low temperature. When the alignment field $\\mathbf{B}$ pointed upward, most decay electrons came out **downward**. The mirror experiment would spit electrons up: the action is unsymmetrical — "the magnet has grown hairs." The south pole of a magnet is now physically distinguished: it is the pole that β-decay electrons flee.',
      },
      {
        term: 'The rule of the failure',
        kind: 'law',
        statement: 'Parity fails only in the **slow weak decays**, and the rule is lopsided: spin-carrying particles such as electrons and neutrinos emerge with spin tending to the **left** — angular momentum (an axial vector) preferentially opposite to velocity (a polar vector).',
        detail: 'The cobalt nucleus carries $5\\hbar$ before disintegration and $4\\hbar$ after, so the electron and neutrino must carry their spins along their directions of flight; the electrons spin mostly leftward, checked at Caltech by Boehm and Wapstra (after some contrary experiments proved wrong). One can now telephone the Martian: wind the coils so the current enters on the right, chill the cobalt until the electrons run from foot to head, and "right" is defined. Why this rule holds, nobody yet knows.',
      },
      {
        term: 'Antimatter and the restored symmetry',
        kind: 'insight',
        statement: 'Dirac’s theory demanded the positron (found at Caltech by Anderson) — equal mass, reversed charge, annihilating with the electron into $\\gamma$-rays — and every particle has such an antiparticle; with reflection symmetry broken, the natural question is whether reflection **plus** changing matter to antimatter restores the symmetry.',
        detail: 'When a symmetry fails, the first move is to re-audit the whole list: does the mirror image of the Wu experiment behave identically if it is built of antimatter — positrons emitted the other way, magnetic poles relabelled? The combined operation of reflection and charge conjugation is then the candidate true symmetry of the weak interactions.',
      },
    ],
    examples: [
      {
        title: 'Auditing $\\mathbf{F} = q\\mathbf{v} \\times \\mathbf{B}$ under reflection',
        problem: 'Show that the magnetic force law is consistent with reflection symmetry once $\\mathbf{B}$ is classified as an axial vector.',
        steps: [
          { label: 'Step 1: Classify the vectors', text: 'Force $\\mathbf{F}$ and velocity $\\mathbf{v}$ are polar: both are "steps in space" (force from a push, velocity as a displacement rate) and reverse under mirror reflection like the geometry itself.' },
          { label: 'Step 2: The cross product', text: 'Under reflection the right-hand rule becomes a left-hand rule, so every cross product $\\mathbf{v} \\times \\mathbf{B}$ acquires an extra sign change relative to its factors.' },
          { label: 'Step 3: Cancel the signs', text: 'For $\\mathbf{F} = q\\mathbf{v} \\times \\mathbf{B}$ to keep the same form, the sign flip of the cross product must be cancelled by $\\mathbf{B} \\to -\\mathbf{B}$: the magnetic field must be an axial vector. Equivalently, reflecting the apparatus swaps a magnet’s north and south poles.' },
          { label: 'Step 4: Check a phenomenon', text: 'A current-carrying coil and an electron passing it curve, say, eastward; build the mirror-image coil (current reversed) and send the mirror-image electron — it curves in the mirror-image direction. Two right-hand rules (source field and force) enter, so their "handedness" cancels: no experiment on magnetic forces can define an absolute right.', }
        ],
        result: 'The equation survives reflection provided $\\mathbf{B}$ is axial and poles swap under mirroring — the deep reason the law of magnetism looks the same in a mirror.',
      },
      {
        title: 'Reading the Wu experiment',
        problem: 'Cobalt-60 nuclei, spin $5\\hbar$, are aligned at low temperature with a field $\\mathbf{B}$ pointing up; they beta-decay to daughter nuclei of spin $4\\hbar$. Most electrons are observed to leave downward. Explain why this single observation destroys reflection symmetry and lets you define "right" over the telephone.',
        steps: [
          { label: 'Step 1: The asymmetry', text: 'Electrons leaving preferentially along $-\\mathbf{B}$ is already a statement linking a direction of space to the sign of $\\mathbf{B}$: the mirrored apparatus (B reversed in the mirror) would emit them along the mirror direction, i.e. upward — a different observable outcome.' },
          { label: 'Step 2: "The magnet has grown hairs"', text: 'Before Wu, no experiment could tell north pole from south pole: both were conventions (a compass needle is painted). Now the south pole is *the pole that β-electrons tend to leave* — a physical, not conventional, distinction.' },
          { label: 'Step 3: Spin bookkeeping', text: 'The nucleus loses one unit $\\hbar$ ($5 \\to 4$), so electron and (anti)neutrino must carry their spins along their flight directions — and the electrons in fact spin mostly leftward relative to their motion.' },
          { label: 'Step 4: The telephone call', text: 'Instruct the Martian: build the coil, run the current so it enters on what you call the right, chill the cobalt, and arrange that the decay electrons stream from foot to head — the current direction that achieves this defines "right" absolutely, no samples exchanged.', }
        ],
        result: 'One weak-decay experiment replaces all conventions: right and left, and north and south, become physically distinguishable — parity is not conserved.',
      },
      {
        title: 'The τ–θ puzzle by the numbers',
        problem: 'What quantitative facts forced physicists to suspect that reflection symmetry, not the data, was wrong?',
        steps: [
          { label: 'Step 1: Compare the particles', text: 'The $\\tau^+$ decays to $\\pi^+\\pi^+\\pi^-$ and the $\\theta^+$ to $\\pi^+\\pi^0$; within experimental error their masses are equal and their lifetimes are equal.' },
          { label: 'Step 2: Compare their production', text: 'Whenever they are made, they appear in the same ratio — about 14 percent $\\tau$ to 86 percent $\\theta$ — exactly what one particle with two competing decay channels should do (the ratio is just the branching odds).' },
          { label: 'Step 3: The contradiction', text: 'Quantum mechanics plus reflection symmetry (parity conservation) proved that one and the same particle could not decay into both two-pion and three-pion final states — the two final states have opposite parity.' },
          { label: 'Step 4: Draw the moral', text: 'Three coincidences of mass, lifetime and production ratio are too much: the suspicion grew that reflection symmetry itself fails for weak decays, and Wu’s cobalt experiment confirmed it.', }
        ],
        result: 'The "two" particles are one (today the $K^+$); the data were right and the symmetry was wrong.',
      },
    ],
    keyTakeaways: [
      'A symmetry operation is something you can do to an experiment such that it still comes out the same: translations in space and time, rotations, uniform velocity, time reversal, reflection, interchange of identical particles, quantum phase, and matter–antimatter.; and asymmetry of circumstances (geography, screw-thread history) is not asymmetry of laws — the whole relevant environment must be transformed along with the apparatus.',
      'Scale changes and uniform rotation are **not** symmetries: atoms fix an absolute length (Galileo’s super-dog bones), and a Foucault pendulum detects rotation from inside.',
      'Macroscopic irreversibility coexists with microscopic time-reversal symmetry; the arrow of time is a matter of statistics, not of the fundamental laws.',
      'In quantum mechanics each symmetry yields a conservation law: space translation → momentum, time translation → energy, rotation → angular momentum, phase → charge.',
      'Polar vectors reverse under reflection; axial vectors and cross products pick up relative sign changes — $\\mathbf{B}$ is axial and magnet poles swap under mirroring, which is why $\\mathbf{F} = q\\mathbf{v} \\times \\mathbf{B}$ is mirror-symmetric.',
      'Life’s one-handed molecules record a historical accident propagated by enzymes, not a failure of physics: a mirrored frog would thrive on mirrored flies.',
      'Parity fails in weak decays: Wu’s aligned cobalt-60 spat electrons preferentially downward, distinguishing the magnet’s south pole physically — spin-carrying decay products come out spinning to the left. The τ–θ puzzle (equal masses, lifetimes, 14/86 branching) had already forced one particle into two parity-forbidden decays — when a symmetry fails, re-audit the list: reflection plus matter–antimatter interchange is the candidate restored symmetry.',
    ],
    quiz: [
      {
        q: 'By Weyl’s definition as quoted by Feynman, an object or law is symmetrical if:',
        options: [
          'It is perfectly smooth and featureless',
          'There is something we can do to it after which it looks the same as before',
          'It contains no arrows or directions whatsoever',
          'It is made of identical parts arranged evenly',
        ],
        answer: 1,
        explanation: 'Symmetry is defined by the existence of a non-trivial operation — a rotation, translation, reflection, delay — that leaves the thing apparently unchanged. The question for physics is which operations leave the *laws* invariant.',
      },
      {
        q: 'Which conservation law does symmetry under translation in time produce (in quantum mechanics)?',
        options: ['Momentum conservation', 'Energy conservation', 'Angular momentum conservation', 'Charge conservation'],
        answer: 1,
        explanation: 'Translation in space ↔ momentum; time translation ↔ energy; rotation ↔ angular momentum; quantum-mechanical phase ↔ charge. Feynman presents these correspondences as among the most profound and beautiful facts in physics.',
      },
      {
        q: 'A matchstick cathedral scaled up a thousand times would collapse. Which lesson does this illustrate?',
        options: [
          'The laws of physics are not invariant under a change of scale — matter is atomic, and atom sizes are absolute',
          'Wood is a poor structural material',
          'Gravity grows stronger over large distances',
          'Reflection symmetry fails for large objects',
        ],
        answer: 0,
        explanation: 'Galileo’s observation, published with his laws of motion in "Two New Sciences": strengths do not scale in proportion to sizes. Because atoms have a definite size, one cannot scale a five-atom apparatus up or down — this very fact lets us define an absolute length.',
      },
      {
        q: 'In Wu’s cobalt-60 experiment, why did the preferential downward emission of electrons violate reflection symmetry?',
        options: [
          'Because electrons are negatively charged',
          'Because the mirrored arrangement would emit them upward — a mirror-world experiment with a genuinely different outcome',
          'Because cobalt nuclei cannot be magnetically aligned',
          'Because electron spin is always opposite to its motion',
        ],
        answer: 1,
        explanation: 'Alignment against a field $\\mathbf{B}$ plus emission along $-\\mathbf{B}$ ties a flight direction to a magnetic direction. The mirror image of the setup (B reversed, geometry reversed) emits along the mirror direction, so the two worlds disagree observably: "the magnet has grown hairs," and north and south become physically distinct.',
      },
      {
        q: 'All proteins in living things use only L-alanine (left-handed amino acids). Feynman’s interpretation is that:',
        options: [
          'Mirror symmetry is violated by the chemistry of carbon',
          'Left-handed molecules are energetically preferred in all reactions',
          'A one-sided historical accident at the origin of life was propagated by the enzymes ever since',
          'Laboratory syntheses cannot make right-handed molecules',
        ],
        answer: 2,
        explanation: 'Synthesis in a flask makes equal mixtures; both handednesses behave identically in every physical measurement. Life uses one hand because the first replicating machinery happened to be lopsided, and every enzyme since has fitted only that hand — evidence of common origin, not of asymmetric physics.',
      },
    ],
  },
]

// ============================================================================
// Chapter 7 formula sheet — Unicode fallback + KaTeX
// ============================================================================

export const physCh7Formulas: FormulaEntry[] = [
  {
    chapterId: 'phys-ch7',
    section: '7.1',
    name: 'Wave equation for sound',
    formula: '∂²χ/∂x² = (1/cₛ²) ∂²χ/∂t²',
    note: 'χ is the air displacement; follows from Newton’s laws',
    latex: '\\frac{\\partial^2\\chi}{\\partial x^2} = \\frac{1}{c_s^2}\\frac{\\partial^2\\chi}{\\partial t^2}',
  },
  {
    chapterId: 'phys-ch7',
    section: '7.1',
    name: 'Speed of sound (adiabatic)',
    formula: 'cₛ = √(γP/ρ) = √(γRT/μ)',
    note: 'Laplace: compressions adiabatic; depends on T only',
    latex: 'c_s = \\sqrt{\\frac{\\gamma P}{\\rho}} = \\sqrt{\\frac{\\gamma RT}{\\mu}}',
  },
  {
    chapterId: 'phys-ch7',
    section: '7.2',
    name: 'Beat intensity',
    formula: 'I = A₁² + A₂² + 2A₁A₂cos(ω₁ − ω₂)t',
    note: 'loudness pulsates at the difference frequency',
    latex: 'I = A_1^2 + A_2^2 + 2A_1A_2\\cos(\\omega_1-\\omega_2)t',
  },
  {
    chapterId: 'phys-ch7',
    section: '7.2',
    name: 'Group velocity',
    formula: 'v_g = dω/dk,  v_p = ω/k',
    note: 'signals and energy ride the group, not the phase',
    latex: 'v_g = \\frac{d\\omega}{dk}',
  },
  {
    chapterId: 'phys-ch7',
    section: '7.2',
    name: 'Modes of a fixed string',
    formula: 'ωₙ = nπc/L,  n = 1, 2, 3, …',
    note: 'discrete harmonics of a bounded wave; λ₁ = 2L',
    latex: '\\omega_n = \\frac{n\\pi c}{L}',
  },
  {
    chapterId: 'phys-ch7',
    section: '7.3',
    name: 'Fourier series',
    formula: 'f(t) = a₀ + Σₙ(aₙcos nωt + bₙsin nωt)',
    note: 'any periodic physical function, ω = 2π/T',
    latex: 'f(t) = a_0 + \\sum_{n=1}^{\\infty}\\left(a_n\\cos n\\omega t + b_n\\sin n\\omega t\\right)',
  },
  {
    chapterId: 'phys-ch7',
    section: '7.3',
    name: 'Mach cone half-angle',
    formula: 'sin θ = c_w/v',
    note: 'source outrunning its own waves; Cherenkov light',
    latex: '\\sin\\theta = \\frac{c_w}{v}',
  },
  {
    chapterId: 'phys-ch7',
    section: '7.3',
    name: 'Deep-water gravity wave speed',
    formula: 'v_phase = √(gλ/2π),  v_g = v_phase/2',
    note: 'long swells travel faster; group is half as fast',
    latex: 'v_{\\mathrm{phase}} = \\sqrt{\\frac{g\\lambda}{2\\pi}}',
  },
]
