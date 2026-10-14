import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 17
// Waves—II — sections 17-1 … 17-8 (ids hall-ch17-s1 … hall-ch17-s8)
// Core results: v = √(B/ρ) and 331√(T/273 K) m/s in air, Δp(m) = ρvωs(m),
// Δφ = (2π/λ)ΔL, I = ½ρvω²s(m)², β = 10 log10(I/I₀), pipe modes nv/4L
// (odd n, one end closed), beat frequency |f₂ − f₁|, Doppler (v±vD)/(v∓vS),
// Mach cone sin θ = v/vS.
// ============================================================================

export const hallCh17Content: SectionContent[] = [
  // ------------------------------------------------------------------ 17-1
  {
    sectionId: 'hall-ch17-s1',
    readingTime: 7,
    intro: "Clap your hands in a canyon and the cliff answers back a moment later: sound is a wave, and waves take time. Sound is a traveling disturbance of pressure and density in a material medium — air, water, steel — launched by anything that vibrates, from a loudspeaker cone to your vocal folds. Its speed is enormous compared with a sprinter yet small enough to notice, and it is set by exactly the competition met in Chapter 16: how strongly the medium resists compression, and how much inertia it packs per volume.",
    objectives: [
      'Explain how a vibrating object generates a longitudinal sound wave, and why sound cannot cross a vacuum',
      'Apply $v = \\sqrt{B/\\rho}$ and the ideal-gas form $v = \\sqrt{\\gamma RT/M}$ to find the speed of sound',
      'Use the temperature rule $v = 331\\sqrt{T/273\\ \\mathrm{K}}$ m/s for air and rank speeds across media',
    ],
    concepts: [
      {
        term: 'Sound is a longitudinal pressure wave',
        kind: 'definition',
        statement: "**Sound is a longitudinal wave of pressure and density that travels through a material medium, produced by an oscillating source** — the pumping cone of a loudspeaker alternately crowds and thins the air in front of it. With no medium there is no sound: the bell ringing inside an evacuated jar falls silent.",
        detail: 'Because a fluid cannot resist shear, sound in air must be longitudinal: transverse mechanical waves need a shearing restoring force that fluids lack.',
      },
      {
        term: 'Speed from elasticity and inertia',
        kind: 'law',
        statement: "**In a fluid the speed of sound is $v = \\sqrt{B/\\rho}$, with $B$ the (adiabatic) bulk modulus and $\\rho$ the density; in a long solid rod, $v = \\sqrt{Y/\\rho}$ with Young\u2019s modulus $Y$.** Stiffer media transmit faster; denser media, with more inertia, slower — the string law $\\sqrt{\\tau/\\mu}$ in bulk form.",
        detail: 'Water carries sound at 1482 m/s (about 4.3 times air) and steel at roughly $6\\times10^{3}$ m/s: their enormous stiffness outweighs their higher densities.',
      },
      {
        term: 'Speed of sound in air',
        kind: 'law',
        statement: "**For an ideal gas the adiabatic bulk modulus is $B = \\gamma p$, giving $v = \\sqrt{\\gamma p/\\rho} = \\sqrt{\\gamma RT/M}$, so in air** $$v = 331\\ \\mathrm{m/s\\ at\\ } 0^\\circ\\mathrm{C}, \\qquad v \\approx 331\\sqrt{\\frac{T}{273\\ \\mathrm{K}}}\\ \\mathrm{m/s}.$$ The speed depends on temperature but not on pressure: raising $p$ at fixed $T$ raises $\\rho$ in the same proportion, leaving $p/\\rho$ unchanged.",
        detail: 'Air at 20 °C: 343 m/s. At 30 °C: 349 m/s. Helium, with $M$ seven times lighter than air, runs near 970 m/s — the chipmunk-voice effect.',
      },
      {
        term: 'Newton\u2019s 280 m/s mistake',
        kind: 'insight',
        statement: "**Newton computed the speed of sound assuming the compressions stay at constant temperature ($B = p$) and got 280 m/s — about 15% below measurement, and the mismatch stood for a century. Laplace\u2019s correction: sound compressions are far too fast to exchange heat, so they are adiabatic, $B = \\gamma p$ — giving exactly 331 m/s.**",
        detail: 'The episode is a standing lesson: the same modulus measured slowly and quickly can differ, and thermodynamics hides inside wave speeds.',
      },
      {
        term: "Speed of Sound: solution protocol",
        kind: "method",
        statement: "**Solve Speed of Sound problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is sound: intensity, sources, beats and Doppler; the working equation is $I = P/4\\pi r^2$, $\\beta = 10\\log(I/I_0)$, $f_{\\text{beat}} = |f_1-f_2|$, $f' = f(v\\pm v_D)/(v\\mp v_S)$; every substitution must carry its units so the final unit (decibels and hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $60\\ \\text{dB}$ conversation at $10^{-6}\\ \\text{W/m}^2$; $10\\%$ Doppler shift at $30\\ \\text{m/s}$; $v_S,v_D < v$; $I_0 = 10^{-12}\\ \\text{W/m}^2$ reference.",
      },
    ],
    examples: [
      {
        title: 'From lightning flash to thunder',
        problem: 'You see a lightning flash and hear the thunder 3.0 s later. The air temperature is 30 °C. How far away was the strike? (Light\u2019s travel time is negligible.)',
        steps: [
          { label: 'Speed at 30 °C', text: '$v = 331\\sqrt{303/273} = 331(1.054) = 349$ m/s.' },
          { label: 'Distance', text: '$d = vt = (349)(3.0) = 1047$ m.' },
          { label: 'Round and check', text: 'About 1.0 km — consistent with the rule of thumb that a 5-second gap means roughly one mile: $5\\ \\mathrm{s} \\times 343\\ \\mathrm{m/s} = 1715$ m $\\approx 1.07$ mi.' },
        ],
        result: 'The strike hit about $1.0\\times10^{3}$ m away.',
      },
      {
        title: "Speed of Sound: decibel check",
        problem: "A source radiates $1.0\\ \\text{mW}$ uniformly. Find $I$ at $r = 5\\ \\text{m}$ and the sound level.",
        steps: [
          { label: "Intensity", text: "$I = P/4\\pi r^2 = 10^{-3}/(4\\pi\\times 25) = 3.18\\times 10^{-6}\\ \\text{W/m}^2$." },
          { label: "Level", text: "$\\beta = 10\\log(I/10^{-12}) = 65\\ \\text{dB}$." },
        ],
        result: "$I \\approx 3.18\\times 10^{-6}\\ \\text{W/m}^2$ ($65\\ \\text{dB}$).",
      },
    ],
    keyTakeaways: [
      'Sound is a longitudinal pressure wave; it needs a medium and is launched by an oscillating source.',
      '$v = \\sqrt{B/\\rho}$ in fluids and $v = \\sqrt{\\gamma RT/M}$ in gases: temperature-dependent, pressure-independent in air.',
      'Air: 331 m/s at 0 °C rising to 343 m/s at 20 °C via $v = 331\\sqrt{T/273\\ \\mathrm{K}}$; water 1482 m/s; steel several thousand.',
    ],
    quiz: [
      {
        q: 'All else equal, warming the air from 0 °C to 20 °C makes sound travel:',
        options: ['slower', 'faster', 'at the same speed', 'four times as fast'],
        answer: 1,
        explanation: 'Warmer air means larger $T$ in $\\sqrt{\\gamma RT/M}$: 331 m/s grows to about 343 m/s.',
      },
      {
        q: 'The air pressure doubles at constant temperature. The speed of sound:',
        options: ['doubles', 'halves', 'is unchanged', 'rises by a factor of √2'],
        answer: 2,
        explanation: 'Doubling $p$ at fixed $T$ doubles $\\rho$ too; $p/\\rho = RT/M$ is untouched.',
      },
      {
        q: 'Sound passes from air into water. In the water it moves:',
        options: ['slower, because water is denser', 'not at all', 'faster, because water is far less compressible', 'at the same speed'],
        answer: 2,
        explanation: 'Water\u2019s bulk modulus exceeds its extra density: $B/\\rho$ is about 20 times larger than in air, giving 1482 m/s.',
      },
      {
        q: 'Laplace corrected Newton\u2019s 280 m/s to 331 m/s by recognizing that:',
        options: ['the amplitude matters', 'Young\u2019s modulus should replace the bulk modulus', 'air drag had been omitted', 'sound compressions are adiabatic: $B = \\gamma p$'],
        answer: 3,
        explanation: 'The compressions and rarefactions of sound are too rapid to exchange heat, so $B = \\gamma p$, not $p$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 17-2
  {
    sectionId: 'hall-ch17-s2',
    readingTime: 6,
    intro: "A sound wave in air is two descriptions braided into one motion: elements of the air shift back and forth along the line of travel (a displacement wave), and because they crowd and thin as they do, the pressure and density rise and fall in step (a pressure wave). The two waves describe the same physics, yet they are a quarter cycle out of phase — a subtlety that decides where a pipe\u2019s ends fall and that exam writers love to probe.",
    objectives: [
      'Write the displacement wave $s(x,t) = s_m\\cos(kx - \\omega t)$ and its associated pressure wave',
      'Relate pressure amplitude to displacement amplitude: $\\Delta p_m = \\rho v\\omega s_m$',
      'Locate compressions and rarefactions, and explain the quarter-cycle offset between pressure and displacement',
    ],
    concepts: [
      {
        term: 'The displacement wave',
        kind: 'notation',
        statement: "**Air elements oscillate along the propagation axis with displacement** $$s(x,t) = s_m\\cos(kx - \\omega t),$$ where $s_m$ is the displacement amplitude — for everyday sounds, a few micrometers or far less.",
      },
      {
        term: 'The pressure wave',
        kind: 'law',
        statement: "**The pressure variation about equilibrium is** $$\\Delta p = -\\rho v^2\\frac{\\partial s}{\\partial x} = \\Delta p_m\\sin(kx - \\omega t), \\qquad \\Delta p_m = \\rho v\\omega s_m.$$ Pressure crests where the displacement curve is steepest: the pressure wave is $\\pi/2$ — a quarter cycle — out of phase with the displacement wave.",
        detail: 'The minus sign encodes that pressure rises where elements crowd: where $\\partial s/\\partial x < 0$, displaced elements from behind run into those ahead.',
      },
      {
        term: 'Compressions and rarefactions',
        kind: 'definition',
        statement: "**A compression is a region of maximum pressure and density, where elements are crowded; a rarefaction is the zone of minimum pressure where they are spread apart.** The traveling wave is a train of alternating compressions and rarefactions moving at $v$.",
      },
      {
        term: 'The 90° trap',
        kind: 'insight',
        statement: "**Pressure is extreme exactly where displacement is zero.** At a pressure crest the elements are passing through their equilibrium positions at top speed; what makes the pressure peak is that their neighbors are displaced toward that spot. Conversely, where displacement is maximum, the pressure is momentarily at equilibrium.",
        detail: 'This quarter-cycle offset reappears at the ends of pipes (17-5): an open end is a pressure node but a displacement antinode.',
      },
      {
        term: "Traveling Sound Waves: solution protocol",
        kind: "method",
        statement: "**Solve Traveling Sound Waves problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is sound: intensity, sources, beats and Doppler; the working equation is $I = P/4\\pi r^2$, $\\beta = 10\\log(I/I_0)$, $f_{\\text{beat}} = |f_1-f_2|$, $f' = f(v\\pm v_D)/(v\\mp v_S)$; every substitution must carry its units so the final unit (decibels and hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $60\\ \\text{dB}$ conversation at $10^{-6}\\ \\text{W/m}^2$; $10\\%$ Doppler shift at $30\\ \\text{m/s}$; $v_S,v_D < v$; $I_0 = 10^{-12}\\ \\text{W/m}^2$ reference.",
      },
    ],
    examples: [
      {
        title: 'Pressure amplitude of a loud tone',
        problem: 'A 1000 Hz tone in air ($\\rho = 1.21$ kg/m³, $v = 343$ m/s) has displacement amplitude $s_m = 1.2\\ \\mu$m. Find the pressure amplitude.',
        steps: [
          { label: 'Angular frequency', text: '$\\omega = 2\\pi f = 2\\pi(1000) = 6283$ rad/s.' },
          { label: 'Pressure amplitude', text: '$\\Delta p_m = \\rho v\\omega s_m = (1.21)(343)(6283)(1.2\\times10^{-6}) = 3.1$ Pa.' },
          { label: 'Scale it', text: 'The pressure amplitude at the threshold of hearing (1 kHz) is about $2.9\\times10^{-5}$ Pa, so this tone sits roughly $10^{5}$ times the threshold pressure amplitude.' },
        ],
        result: '$\\Delta p_m \\approx 3.1$ Pa — only $3\\times10^{-5}$ of atmospheric pressure, yet fully audible: the ear is a spectacular detector.',
      },
      {
        title: "Traveling Sound Waves: decibel check",
        problem: "A source radiates $1.0\\ \\text{mW}$ uniformly. Find $I$ at $r = 10\\ \\text{m}$ and the sound level.",
        steps: [
          { label: "Intensity", text: "$I = P/4\\pi r^2 = 10^{-3}/(4\\pi\\times 100) = 7.96\\times 10^{-7}\\ \\text{W/m}^2$." },
          { label: "Level", text: "$\\beta = 10\\log(I/10^{-12}) = 59\\ \\text{dB}$." },
        ],
        result: "$I \\approx 7.96\\times 10^{-7}\\ \\text{W/m}^2$ ($59\\ \\text{dB}$).",
      },
    ],
    keyTakeaways: [
      'Sound in air = displacement wave $s_m\\cos(kx-\\omega t)$ + pressure wave $\\Delta p_m\\sin(kx-\\omega t)$, a quarter cycle out of phase.',
      '$\\Delta p_m = \\rho v\\omega s_m$: pressure amplitude grows with frequency and displacement amplitude.',
      'Compressions and rarefactions travel at $v$; the air elements shuttle back and forth about fixed equilibrium positions.',
    ],
    quiz: [
      {
        q: 'At a point where the pressure variation is maximum, the displacement of the air element there is:',
        options: ['maximum', 'zero', 'half its amplitude', 'equal to the wavelength'],
        answer: 1,
        explanation: 'The two waves are $\\pi/2$ out of phase: pressure extremes coincide with zero displacement.',
      },
      {
        q: 'The pressure wave and the displacement wave of the same sound differ in phase by:',
        options: ['$\\pi$ rad', '$\\pi/2$ rad', 'zero', '$2\\pi$ rad'],
        answer: 1,
        explanation: 'A quarter cycle: $s \\propto \\cos(kx-\\omega t)$ while $\\Delta p \\propto \\sin(kx-\\omega t)$.',
      },
      {
        q: 'Doubling the frequency at fixed displacement amplitude does what to the pressure amplitude?',
        options: ['doubles it', 'halves it', 'leaves it unchanged', 'quadruples it'],
        answer: 0,
        explanation: '$\\Delta p_m = \\rho v\\omega s_m$ is proportional to $\\omega$.',
      },
      {
        q: 'Sound waves in air are longitudinal because:',
        options: ['air molecules are too light to move sideways', 'gravity forces the motion along the tube', 'a fluid has no shear restoring force, so only compressional waves survive', 'the wavelength is too long for transverse motion'],
        answer: 2,
        explanation: 'Transverse mechanical waves require a shear restoring force; fluids cannot supply one.',
      },
    ],
  },
  // ------------------------------------------------------------------ 17-3
  {
    sectionId: 'hall-ch17-s3',
    readingTime: 5,
    intro: "Two loudspeakers playing the same tone fill a room with an invisible landscape: walk a few steps and the sound swells; another step and it nearly vanishes. The physics is the Chapter 16 interference rule imported to sound — waves that stay sinusoidal in space and time, where the path difference alone decides whether crests meet crests (loud) or crests meet troughs (near silence).",
    objectives: [
      'Convert path difference to phase difference with $\\Delta\\phi = (2\\pi/\\lambda)\\Delta L$',
      'Classify outcomes: $\\Delta L = m\\lambda$ fully constructive, $\\Delta L = (m+\\frac{1}{2})\\lambda$ fully destructive',
      'Explain dead spots and noise-canceling headphones as interference effects',
    ],
    concepts: [
      {
        term: 'Phase from path difference',
        kind: 'law',
        statement: "**Two sound sources oscillating in phase launch waves that arrive at a listener with phase difference** $$\\Delta\\phi = \\frac{2\\pi}{\\lambda}\\Delta L,$$ where $\\Delta L$ is the difference in path lengths. Each extra wavelength of path advances the phase by $2\\pi$; each extra half-wavelength flips a crest into a trough.",
      },
      {
        term: 'Fully constructive and fully destructive',
        kind: 'definition',
        statement: "**$\\Delta L = m\\lambda$ ($m$ an integer): fully constructive — amplitudes add to $2s_m$. $\\Delta L = (m+\\frac{1}{2})\\lambda$: fully destructive — silence.** Every other geometry lands between, with resultant amplitude between $0$ and $2s_m$.",
      },
      {
        term: 'A room is an interference chamber',
        kind: 'insight',
        statement: "**Reflections multiply the paths.** Sound reaching you directly mixes with sound bounced from walls and furniture, so shifting your head by half a wavelength — about 0.5 m for a 700 Hz tone — can swing a spot from constructive to destructive. Recording engineers fight these comb-filter effects with padding and geometry.",
      },
      {
        term: 'Anti-sound',
        kind: 'insight',
        statement: "**Noise-canceling headphones manufacture destructive interference**: a microphone samples the ambient noise and the speaker replays it with phase shifted by $\\pi$, so crest meets trough at the eardrum and the net pressure oscillation collapses.",
      },
      {
        term: "Interference: solution protocol",
        kind: "method",
        statement: "**Solve Interference problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is sound: intensity, sources, beats and Doppler; the working equation is $I = P/4\\pi r^2$, $\\beta = 10\\log(I/I_0)$, $f_{\\text{beat}} = |f_1-f_2|$, $f' = f(v\\pm v_D)/(v\\mp v_S)$; every substitution must carry its units so the final unit (decibels and hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $60\\ \\text{dB}$ conversation at $10^{-6}\\ \\text{W/m}^2$; $10\\%$ Doppler shift at $30\\ \\text{m/s}$; $v_S,v_D < v$; $I_0 = 10^{-12}\\ \\text{W/m}^2$ reference.",
      },
    ],
    examples: [
      {
        title: 'Walking the interference field',
        problem: 'Two in-phase speakers emit 686 Hz tones; the speed of sound is 343 m/s. A listener stands 3.60 m from one speaker and 4.10 m from the other. Is the tone there loud or silent? Where would it flip?',
        steps: [
          { label: 'Wavelength', text: '$\\lambda = v/f = 343/686 = 0.50$ m.' },
          { label: 'Path difference', text: '$\\Delta L = 4.10 - 3.60 = 0.50$ m $= 1.0\\lambda$ — an integer multiple of $\\lambda$.' },
          { label: 'Verdict', text: '$\\Delta L = m\\lambda$ with $m = 1$: fully constructive — the tone is loud, amplitude $2s_m$.' },
          { label: 'Flip it', text: 'Move until $\\Delta L = (m+\\frac{1}{2})\\lambda$ — for instance $\\Delta L = 0.75$ m $= 1.5\\lambda$ — and crest meets trough: near silence.' },
        ],
        result: 'At the given spot the 686 Hz tone is maximal; shifting to a path difference of 0.75 m would null it.',
      },
      {
        title: "Interference: decibel check",
        problem: "A source radiates $1.0\\ \\text{mW}$ uniformly. Find $I$ at $r = 15\\ \\text{m}$ and the sound level.",
        steps: [
          { label: "Intensity", text: "$I = P/4\\pi r^2 = 10^{-3}/(4\\pi\\times 225) = 3.54\\times 10^{-7}\\ \\text{W/m}^2$." },
          { label: "Level", text: "$\\beta = 10\\log(I/10^{-12}) = 55.5\\ \\text{dB}$." },
        ],
        result: "$I \\approx 3.54\\times 10^{-7}\\ \\text{W/m}^2$ ($55.5\\ \\text{dB}$).",
      },
    ],
    keyTakeaways: [
      '$\\Delta\\phi = (2\\pi/\\lambda)\\Delta L$; integer wavelengths of path mismatch give constructive interference, half-integer give destructive.',
      'Dead spots and sweet spots in rooms arise from direct plus reflected paths interfering.',
      'Noise cancellation is engineered destructive interference — the anti-noise shifted by $\\pi$ radians.',
    ],
    quiz: [
      {
        q: 'A listener is equidistant from two identical in-phase speakers ($\\Delta L = 0$). The tone there is:',
        options: ['silent', 'maximally loud', 'half amplitude', 'impossible to predict'],
        answer: 1,
        explanation: 'Zero path difference means the waves arrive in phase: fully constructive, amplitude $2s_m$.',
      },
      {
        q: 'With $\\lambda = 0.50$ m, a path difference of 1.25 m gives interference that is:',
        options: ['fully destructive', 'fully constructive', 'partly constructive', 'impossible to classify'],
        answer: 0,
        explanation: '$1.25/0.50 = 2.5 = 2 + \\frac{1}{2}$ wavelengths: a half-wavelength offset means crest meets trough.',
      },
      {
        q: 'Noise-canceling headphones cancel sound by:',
        options: ['absorbing sound in foam', 'replaying the noise shifted by half a cycle', 'raising the ambient air pressure', 'refracting sound around the ear'],
        answer: 1,
        explanation: 'The anti-noise is emitted with a $\\pi$ phase shift, so it arrives in destructive opposition.',
      },
    ],
  },
  // ------------------------------------------------------------------ 17-4
  {
    sectionId: 'hall-ch17-s4',
    readingTime: 7,
    intro: "The ear copes with intensities spanning a factor of a trillion — from the faintest 1000 Hz tone a healthy ear can catch, about $10^{-12}$ W/m², to the roar that hurts, about 1 W/m². Linear scales drown such a range, so loudness is measured logarithmically, in decibels. The decibel is not merely a convenience: it mirrors how hearing itself compresses stimulus into sensation.",
    objectives: [
      'Compute intensity $I = P/A$ and apply the inverse-square law $I = P/4\\pi r^2$ for a point source',
      'Relate intensity to wave amplitude: $I = \\frac{1}{2}\\rho v\\omega^2 s_m^2$',
      'Convert between intensity and sound level $\\beta = (10\\ \\mathrm{dB})\\log_{10}(I/I_0)$ and do decibel arithmetic',
    ],
    concepts: [
      {
        term: 'Intensity',
        kind: 'definition',
        statement: "**Intensity is the average energy transported per unit area per unit time, perpendicular to the wave\u2019s travel: $I = P/A$, in W/m².** A point source radiating power $P$ uniformly gives $I = P/4\\pi r^2$ at distance $r$ — geometric dilution, not absorption.",
      },
      {
        term: 'Intensity of a sinusoidal sound wave',
        kind: 'law',
        statement: "**For $s = s_m\\cos(kx-\\omega t)$,** $$I = \\tfrac{1}{2}\\rho v\\omega^2 s_m^2 = \\frac{\\Delta p_m^2}{2\\rho v}.$$ Intensity grows with the square of frequency and of displacement amplitude — the sound twin of the string\u2019s $P = \\frac{1}{2}\\mu v\\omega^2 A^2$.",
      },
      {
        term: 'Sound level in decibels',
        kind: 'law',
        statement: "**The sound level is** $$\\beta = (10\\ \\mathrm{dB})\\log_{10}\\!\\left(\\frac{I}{I_0}\\right), \\qquad I_0 = 10^{-12}\\ \\mathrm{W/m^2}$$ — the intensity of the barest audible 1000 Hz tone. Multiplying intensity by 10 adds 10 dB; doubling it adds about 3 dB. So $\\beta = 0$ dB is the hearing threshold and 120 dB ($I = 1$ W/m²) the pain threshold.",
        detail: '0 dB does not mean silence — it means $I = I_0$; negative decibels describe sounds below the threshold of a healthy ear.',
      },
      {
        term: 'Decibel landmarks',
        kind: 'insight',
        statement: "**Rough guides: a whisper near 20 dB, ordinary conversation near 60 dB, a jackhammer up close near 95 dB, and 120 dB pain.** Because the scale is logarithmic, 30 dB is not moderately louder than 20 dB — it is ten times the intensity, and 40 dB is a hundred times.",
      },
      {
        term: "Intensity and Sound Level: solution protocol",
        kind: "method",
        statement: "**Solve Intensity and Sound Level problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is sound: intensity, sources, beats and Doppler; the working equation is $I = P/4\\pi r^2$, $\\beta = 10\\log(I/I_0)$, $f_{\\text{beat}} = |f_1-f_2|$, $f' = f(v\\pm v_D)/(v\\mp v_S)$; every substitution must carry its units so the final unit (decibels and hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $60\\ \\text{dB}$ conversation at $10^{-6}\\ \\text{W/m}^2$; $10\\%$ Doppler shift at $30\\ \\text{m/s}$; $v_S,v_D < v$; $I_0 = 10^{-12}\\ \\text{W/m}^2$ reference.",
      },
    ],
    examples: [
      {
        title: 'A jackhammer at work',
        problem: 'At 2.0 m from a jackhammer the sound level is 95 dB. (a) Find the intensity there. (b) Find the sound level at 6.0 m, assuming the power spreads uniformly over spheres centered on the machine.',
        steps: [
          { label: 'Un-log', text: '$\\beta = 95$ dB gives $I = I_0 10^{\\beta/10} = (10^{-12})(10^{9.5}) = 3.2\\times10^{-3}$ W/m².' },
          { label: 'Spread to 6.0 m', text: "Tripling $r$ divides the intensity by $3^2 = 9$: $I' = 3.5\\times10^{-4}$ W/m²." },
          { label: 'Re-log', text: "$\\beta' = (10\\ \\mathrm{dB})\\log_{10}(3.5\\times10^{-4}/10^{-12}) = (10)(8.55) = 85.5$ dB." },
          { label: 'Shortcut', text: "Equivalently $\\beta' = 95 - 10\\log_{10}9 = 95 - 9.5 = 85.5$ dB: distance factors subtract directly in decibels." },
        ],
        result: 'About $3.2\\times10^{-3}$ W/m² at 2.0 m, falling to roughly 85.5 dB at 6.0 m.',
      },
      {
        title: "Intensity and Sound Level: decibel check",
        problem: "A source radiates $1.0\\ \\text{mW}$ uniformly. Find $I$ at $r = 5\\ \\text{m}$ and the sound level.",
        steps: [
          { label: "Intensity", text: "$I = P/4\\pi r^2 = 10^{-3}/(4\\pi\\times 25) = 3.18\\times 10^{-6}\\ \\text{W/m}^2$." },
          { label: "Level", text: "$\\beta = 10\\log(I/10^{-12}) = 65\\ \\text{dB}$." },
        ],
        result: "$I \\approx 3.18\\times 10^{-6}\\ \\text{W/m}^2$ ($65\\ \\text{dB}$).",
      },
    ],
    keyTakeaways: [
      '$I = P/A$; a point source spreads its power over $4\\pi r^2$, so intensity falls as $1/r^2$.',
      '$I = \\frac{1}{2}\\rho v\\omega^2 s_m^2$: quadratic in frequency and in displacement amplitude.',
      '$\\beta = (10\\ \\mathrm{dB})\\log_{10}(I/I_0)$ with $I_0 = 10^{-12}$ W/m²: ten times the intensity is +10 dB, twice is about +3 dB, nine times the area distance is −9.5 dB.',
    ],
    quiz: [
      {
        q: 'The intensity of a sound is multiplied by 10. The sound level rises by:',
        options: ['3 dB', '6 dB', '1 dB', '10 dB'],
        answer: 3,
        explanation: 'The logarithm adds 1, and the scale multiplies it by 10 dB.',
      },
      {
        q: 'Your distance from a steady point source doubles. The sound level drops by about:',
        options: ['3 dB', '6 dB', '10 dB', '12 dB'],
        answer: 1,
        explanation: 'Twice the distance quarters the intensity: $-10\\log_{10}4 \\approx -6$ dB.',
      },
      {
        q: 'A second identical machine starts beside the first (doubling the total acoustic power). The sound level rises by about:',
        options: ['1 dB', '3 dB', '6 dB', '10 dB'],
        answer: 1,
        explanation: 'Doubling intensity adds $10\\log_{10}2 \\approx 3$ dB — far less than twice as loud.',
      },
      {
        q: 'A sound level of 60 dB corresponds to what intensity?',
        options: ['$6\\times10^{-6}$ W/m²', '$10^{-6}$ W/m²', '$6\\times10^{-2}$ W/m²', '$10^{-6.5}$ W/m²'],
        answer: 1,
        explanation: '$I = I_0 10^{\\beta/10} = (10^{-12})(10^{6}) = 10^{-6}$ W/m².',
      },
    ],
  },
  // ------------------------------------------------------------------ 17-5
  {
    sectionId: 'hall-ch17-s5',
    readingTime: 7,
    intro: "Why does a clarinet sound woody and a flute silvery when both are essentially tubes of air? Because standing waves are hostage to their boundaries. A closed pipe end must be a displacement node; an open end is very nearly a displacement antinode. Which wavelengths can fit those constraints decides which frequencies survive — and the surviving set, the instrument\u2019s harmonics, is its timbre.",
    objectives: [
      'State the boundary condition at each pipe end: closed = displacement node, open = displacement antinode',
      'Compute the modes of open–open pipes ($f_n = nv/2L$) and closed–open pipes (odd $f_n = nv/4L$ only)',
      'Connect pipe and string modes to pitch, registers and timbre of real instruments',
    ],
    concepts: [
      {
        term: 'Boundary conditions of a pipe',
        kind: 'law',
        statement: "**At a closed end the air cannot move along the pipe: a displacement node — and therefore a pressure antinode. At an open end the pressure is pinned near atmospheric: a pressure node — and therefore a displacement antinode.** (The antinode sits just outside the pipe mouth; HRW\u2019s treatment ignores this small end correction.)",
        detail: 'The pressure–displacement quarter-cycle offset of Section 17-2 is what makes the two ends opposite kinds of boundary.',
      },
      {
        term: 'Open–open pipe',
        kind: 'law',
        statement: "**A pipe open at both ends must fit a displacement antinode at each end, so $L = n\\lambda/2$ and** $$f_n = \\frac{nv}{2L}, \\qquad n = 1, 2, 3, \\ldots$$ All harmonics are present. The flute and the organ\u2019s open pipes work this way.",
      },
      {
        term: 'Closed–open pipe',
        kind: 'law',
        statement: "**A pipe closed at one end must fit a node at the closed end and an antinode at the open end: $L = n\\lambda/4$ with $n$ odd, so** $$f_n = \\frac{nv}{4L}, \\qquad n = 1, 3, 5, \\ldots$$ Only odd harmonics survive. The fundamental sits an octave below an equal-length open pipe, and the even harmonics are missing — the clarinet.",
        detail: 'The missing even harmonics give the clarinet its dark, reedy tone; opening a register key jumps the pitch to the third harmonic — a twelfth up, not an octave.',
      },
      {
        term: 'Strings meet pipes',
        kind: 'insight',
        statement: "**A string fixed at both ends is the same mathematics with two nodes instead of two antinodes: $f_n = nv/2L$ with $v = \\sqrt{\\tau/\\mu}$.** A violinist changes pitch by shortening $L$ (fingering) or switching to a heavier string (smaller $v$); a trombonist changes $L$ with a slide; a flutist opens holes to shorten the sounding length. Pitch is geometry plus wave speed.",
        detail: 'The player\u2019s breath or bow supplies a broadband push; the column or string resonates at its natural frequencies, which select the heard tone.',
      },
      {
        term: "Sources of Musical Sound: solution protocol",
        kind: "method",
        statement: "**Solve Sources of Musical Sound problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is sound: intensity, sources, beats and Doppler; the working equation is $I = P/4\\pi r^2$, $\\beta = 10\\log(I/I_0)$, $f_{\\text{beat}} = |f_1-f_2|$, $f' = f(v\\pm v_D)/(v\\mp v_S)$; every substitution must carry its units so the final unit (decibels and hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $60\\ \\text{dB}$ conversation at $10^{-6}\\ \\text{W/m}^2$; $10\\%$ Doppler shift at $30\\ \\text{m/s}$; $v_S,v_D < v$; $I_0 = 10^{-12}\\ \\text{W/m}^2$ reference.",
      },
    ],
    examples: [
      {
        title: 'Clarinet versus flute',
        problem: 'Both instruments have a 0.60 m sounding length (take $v = 343$ m/s). Compare the lowest three frequencies each can sound.',
        steps: [
          { label: 'Flute (open–open)', text: '$f_n = nv/2L = n(343/1.20) = n(286)$ Hz: 286, 572, 857 Hz — all harmonics present.' },
          { label: 'Clarinet (closed–open)', text: '$f_n = nv/4L = n(343/2.40)$ Hz: $n = 1$ gives 143 Hz, $n = 3$ gives 429 Hz, $n = 5$ gives 715 Hz — odd integers only.' },
          { label: 'Compare', text: 'The clarinet\u2019s fundamental is an octave below the flute\u2019s (143 vs 286 Hz), and its next usable mode jumps by a factor of 3 — a twelfth, not an octave.' },
          { label: 'Why', text: 'Two antinodes fit half-wavelengths ($L = n\\lambda/2$); a node plus an antinode fit quarter-wavelengths ($L = n\\lambda/4$, $n$ odd) — hence the factor-of-2 offset and the odd-only ladder.' },
        ],
        result: 'Flute: 286, 572, 857 Hz. Clarinet: 143, 429, 715 Hz — missing every even harmonic.',
      },
      {
        title: "Sources of Musical Sound: decibel check",
        problem: "A source radiates $1.0\\ \\text{mW}$ uniformly. Find $I$ at $r = 10\\ \\text{m}$ and the sound level.",
        steps: [
          { label: "Intensity", text: "$I = P/4\\pi r^2 = 10^{-3}/(4\\pi\\times 100) = 7.96\\times 10^{-7}\\ \\text{W/m}^2$." },
          { label: "Level", text: "$\\beta = 10\\log(I/10^{-12}) = 59\\ \\text{dB}$." },
        ],
        result: "$I \\approx 7.96\\times 10^{-7}\\ \\text{W/m}^2$ ($59\\ \\text{dB}$).",
      },
    ],
    keyTakeaways: [
      'Closed pipe end = displacement node and pressure antinode; open end = displacement antinode and pressure node.',
      'Open–open: $f_n = nv/2L$, all harmonics. Closed–open: $f_n = nv/4L$, odd $n$ only.',
      'Pitch comes from the surviving modes ($L$ and $v$); timbre comes from which harmonics the instrument sustains.',
    ],
    quiz: [
      {
        q: 'A pipe closed at one end supports which harmonics?',
        options: ['all integer multiples of the fundamental', 'odd multiples only', 'even multiples only', 'none above the fundamental'],
        answer: 1,
        explanation: 'Node at one end, antinode at the other: $L = n\\lambda/4$ can be satisfied only with odd $n$.',
      },
      {
        q: 'The lowest frequency of a pipe open at both ends is $v/2L$. Doubling the length:',
        options: ['doubles the frequency', 'halves the frequency', 'leaves it unchanged', 'quadruples it'],
        answer: 1,
        explanation: '$f_1 = v/2L$ is inversely proportional to length: twice the pipe, half the pitch.',
      },
      {
        q: 'At the closed end of a pipe, the pressure variation is:',
        options: ['a pressure node (zero variation)', 'undefined', 'exactly atmospheric always', 'a pressure antinode (maximum variation)'],
        answer: 3,
        explanation: 'The wall blocks the displacement, so the air there compresses and decompresses fully: maximum $\\Delta p$.',
      },
      {
        q: 'Opening tone holes along a flute effectively:',
        options: ['shortens the sounding length, raising the pitch', 'lengthens it, lowering the pitch', 'changes the air temperature', 'damps all harmonics equally'],
        answer: 0,
        explanation: 'The first open hole pins a pressure node there, so the standing wave occupies only the shorter remaining column.',
      },
    ],
  },
  // ------------------------------------------------------------------ 17-6
  {
    sectionId: 'hall-ch17-s6',
    readingTime: 5,
    intro: "Tune a guitar by ear and you listen for the throb: strike the string against a reference and you hear not two notes but one note pulsing — loud, soft, loud, soft. The pulsing is the interference of two waves of nearly equal frequency, and its rate measures the frequency mismatch exactly. Beats turn frequency measurement into rhythm measurement, which is how every orchestra in the world gets tuned.",
    objectives: [
      'Superpose two equal-amplitude waves of slightly different frequencies and describe the beat pattern',
      'Apply $f_{\\text{beat}} = |f_2 - f_1|$ and explain why loudness maxima occur at this rate',
      'Use beats to tune: interpret slowing beats as convergence on the target frequency',
    ],
    concepts: [
      {
        term: 'Beats',
        kind: 'definition',
        statement: "**When two waves of slightly different frequencies $f_1$ and $f_2$ (equal amplitude $A$) superpose, the resultant alternates between large amplitude $2A$ and zero: a fast oscillation at the average frequency whose envelope — the loudness — swells and fades.** The slow pulsing is the beat.",
      },
      {
        term: 'Beat frequency',
        kind: 'law',
        statement: "**The sum is** $$y = 2A\\cos\\!\\left(2\\pi\\,\\frac{f_1 - f_2}{2}\\,t\\right)\\sin\\!\\left(2\\pi\\,\\frac{f_1 + f_2}{2}\\,t\\right),$$ a carrier at the average frequency inside an envelope $2A|\\cos(\\pi(f_1 - f_2)t)|$. **The loudness peaks recur at the beat frequency** $$f_{\\text{beat}} = |f_2 - f_1|.$$",
        detail: 'The envelope returns to full strength once per $1/|f_2-f_1|$ seconds: four beats over 4 s means the frequencies differ by 4 Hz.',
      },
      {
        term: 'The ear\u2019s limit',
        kind: 'insight',
        statement: "**Beats are audible only while $|f_2 - f_1|$ is roughly 10 Hz or less.** Beyond that the throbbing blurs into roughness, and further still the ear simply resolves two separate tones. Tuners work inside the beat zone deliberately.",
        detail: 'Piano tuners also exploit beats between harmonics of different strings — a string\u2019s second harmonic against a reference\u2019s fundamental — to check intervals by ear.',
      },
      {
        term: "Beats: solution protocol",
        kind: "method",
        statement: "**Solve Beats problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is sound: intensity, sources, beats and Doppler; the working equation is $I = P/4\\pi r^2$, $\\beta = 10\\log(I/I_0)$, $f_{\\text{beat}} = |f_1-f_2|$, $f' = f(v\\pm v_D)/(v\\mp v_S)$; every substitution must carry its units so the final unit (decibels and hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $60\\ \\text{dB}$ conversation at $10^{-6}\\ \\text{W/m}^2$; $10\\%$ Doppler shift at $30\\ \\text{m/s}$; $v_S,v_D < v$; $I_0 = 10^{-12}\\ \\text{W/m}^2$ reference.",
      },
      {
        term: "Beats: scales and validity",
        kind: "insight",
        statement: "**Beats lives at $60\\ \\text{dB}$ conversation at $10^{-6}\\ \\text{W/m}^2$; $10\\%$ Doppler shift at $30\\ \\text{m/s}$ and the textbook model holds while $v_S,v_D < v$; $I_0 = 10^{-12}\\ \\text{W/m}^2$ reference.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Beats calculation gives seconds when decibels and hertz demands meters, or a value orders of magnitude beyond $60\\ \\text{dB}$ conversation at $10^{-6}\\ \\text{W/m}^2$; $10\\%$ Doppler shift at $30\\ \\text{m/s}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    figures: [
      {
        caption: "Beats from $f_1 = 6.0$ Hz and $f_2 = 7.0$ Hz (equal amplitudes $A$). Top: the two component sinusoids; bottom: their sum — a carrier at the average frequency 6.5 Hz inside the dashed envelope $\\pm 2A\\cos(\\pi t)$. Loudness peaks at $t = 0, 1, 2$ s and dies at $t = 0.5, 1.5$ s: one beat per second, exactly $|7.0 - 6.0|$ Hz. At the silent instants the two waves are in fully destructive opposition; at the loud instants, fully constructive.",
        svg: `<svg viewBox="0 0 720 470" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Beats: two sinusoids of 6 and 7 Hz and their amplitude-modulated sum"><defs><marker id="bt-mk" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="60" y1="70" x2="660" y2="70" stroke="currentColor" stroke-width="1" opacity="0.3"/><polyline points="60.0,70.0 62.4,62.3 64.8,55.3 67.2,49.6 69.6,45.7 72.0,44.1 74.4,44.7 76.8,47.7 79.2,52.7 81.6,59.2 84.0,66.7 86.4,74.6 88.8,81.9 91.2,88.3 93.6,92.9 96.0,95.5 98.4,95.8 100.8,93.8 103.2,89.6 105.6,83.7 108.0,76.5 110.4,68.7 112.8,61.0 115.2,54.2 117.6,48.8 120.0,45.3 122.4,44.0 124.8,45.1 127.2,48.4 129.6,53.7 132.0,60.4 134.4,68.0 136.8,75.8 139.2,83.1 141.6,89.2 144.0,93.5 146.4,95.8 148.8,95.7 151.2,93.2 153.6,88.7 156.0,82.5 158.4,75.2 160.8,67.4 163.2,59.8 165.6,53.2 168.0,48.0 170.4,44.9 172.8,44.0 175.2,45.5 177.6,49.2 180.0,54.7 182.4,61.7 184.8,69.3 187.2,77.1 189.6,84.2 192.0,90.0 194.4,94.1 196.8,95.9 199.2,95.4 201.6,92.6 204.0,87.8 206.4,81.4 208.8,73.9 211.2,66.1 213.6,58.6 216.0,52.2 218.4,47.4 220.8,44.6 223.2,44.1 225.6,45.9 228.0,50.0 230.4,55.8 232.8,62.9 235.2,70.7 237.6,78.3 240.0,85.3 242.4,90.8 244.8,94.5 247.2,96.0 249.6,95.1 252.0,92.0 254.4,86.8 256.8,80.2 259.2,72.6 261.6,64.8 264.0,57.5 266.4,51.3 268.8,46.8 271.2,44.3 273.6,44.2 276.0,46.5 278.4,50.8 280.8,56.9 283.2,64.2 285.6,72.0 288.0,79.6 290.4,86.3 292.8,91.6 295.2,94.9 297.6,96.0 300.0,94.7 302.4,91.2 304.8,85.8 307.2,79.0 309.6,71.3 312.0,63.5 314.4,56.3 316.8,50.4 319.2,46.2 321.6,44.2 324.0,44.5 326.4,47.1 328.8,51.7 331.2,58.1 333.6,65.4 336.0,73.3 338.4,80.8 340.8,87.3 343.2,92.3 345.6,95.3 348.0,95.9 350.4,94.3 352.8,90.4 355.2,84.7 357.6,77.7 360.0,70.0 362.4,62.3 364.8,55.3 367.2,49.6 369.6,45.7 372.0,44.1 374.4,44.7 376.8,47.7 379.2,52.7 381.6,59.2 384.0,66.7 386.4,74.6 388.8,81.9 391.2,88.3 393.6,92.9 396.0,95.5 398.4,95.8 400.8,93.8 403.2,89.6 405.6,83.7 408.0,76.5 410.4,68.7 412.8,61.0 415.2,54.2 417.6,48.8 420.0,45.3 422.4,44.0 424.8,45.1 427.2,48.4 429.6,53.7 432.0,60.4 434.4,68.0 436.8,75.8 439.2,83.1 441.6,89.2 444.0,93.5 446.4,95.8 448.8,95.7 451.2,93.2 453.6,88.7 456.0,82.5 458.4,75.2 460.8,67.4 463.2,59.8 465.6,53.2 468.0,48.0 470.4,44.9 472.8,44.0 475.2,45.5 477.6,49.2 480.0,54.7 482.4,61.7 484.8,69.3 487.2,77.1 489.6,84.2 492.0,90.0 494.4,94.1 496.8,95.9 499.2,95.4 501.6,92.6 504.0,87.8 506.4,81.4 508.8,73.9 511.2,66.1 513.6,58.6 516.0,52.2 518.4,47.4 520.8,44.6 523.2,44.1 525.6,45.9 528.0,50.0 530.4,55.8 532.8,62.9 535.2,70.7 537.6,78.3 540.0,85.3 542.4,90.8 544.8,94.5 547.2,96.0 549.6,95.1 552.0,92.0 554.4,86.8 556.8,80.2 559.2,72.6 561.6,64.8 564.0,57.5 566.4,51.3 568.8,46.8 571.2,44.3 573.6,44.2 576.0,46.5 578.4,50.8 580.8,56.9 583.2,64.2 585.6,72.0 588.0,79.6 590.4,86.3 592.8,91.6 595.2,94.9 597.6,96.0 600.0,94.7 602.4,91.2 604.8,85.8 607.2,79.0 609.6,71.3 612.0,63.5 614.4,56.3 616.8,50.4 619.2,46.2 621.6,44.2 624.0,44.5 626.4,47.1 628.8,51.7 631.2,58.1 633.6,65.4 636.0,73.3 638.4,80.8 640.8,87.3 643.2,92.3 645.6,95.3 648.0,95.9 650.4,94.3 652.8,90.4 655.2,84.7 657.6,77.7 660.0,70.0" fill="none" stroke="currentColor" stroke-width="2.2" opacity="0.75"/><text x="66" y="36" font-size="14.5" fill="currentColor">y₁ (6.0 Hz)</text><line x1="60" y1="180" x2="660" y2="180" stroke="currentColor" stroke-width="1" opacity="0.3"/><polyline points="60.0,180.0 62.4,171.0 64.8,163.2 67.2,157.4 69.6,154.3 72.0,154.5 74.4,157.7 76.8,163.7 79.2,171.7 81.6,180.7 84.0,189.6 86.4,197.3 88.8,202.9 91.2,205.8 93.6,205.4 96.0,202.0 98.4,195.8 100.8,187.7 103.2,178.7 105.6,169.8 108.0,162.2 110.4,156.8 112.8,154.2 115.2,154.7 117.6,158.4 120.0,164.7 122.4,172.9 124.8,182.0 127.2,190.8 129.6,198.3 132.0,203.5 134.4,205.9 136.8,205.1 139.2,201.2 141.6,194.7 144.0,186.5 146.4,177.4 148.8,168.6 151.2,161.3 153.6,156.2 156.0,154.1 158.4,155.1 160.8,159.2 163.2,165.8 165.6,174.2 168.0,183.3 170.4,191.9 172.8,199.2 175.2,204.1 177.6,206.0 180.0,204.7 182.4,200.4 184.8,193.7 187.2,185.2 189.6,176.1 192.0,167.5 194.4,160.4 196.8,155.7 199.2,154.0 201.6,155.5 204.0,160.0 206.4,166.9 208.8,175.4 211.2,184.6 213.6,193.1 216.0,200.0 218.4,204.5 220.8,206.0 223.2,204.3 225.6,199.6 228.0,192.5 230.4,183.9 232.8,174.8 235.2,166.3 237.6,159.6 240.0,155.3 242.4,154.0 244.8,155.9 247.2,160.8 249.6,168.1 252.0,176.7 254.4,185.8 256.8,194.2 259.2,200.8 261.6,204.9 264.0,205.9 266.4,203.8 268.8,198.7 271.2,191.4 273.6,182.6 276.0,173.5 278.4,165.3 280.8,158.8 283.2,154.9 285.6,154.1 288.0,156.5 290.4,161.7 292.8,169.2 295.2,178.0 297.6,187.1 300.0,195.3 302.4,201.6 304.8,205.3 307.2,205.8 309.6,203.2 312.0,197.8 314.4,190.2 316.8,181.3 319.2,172.3 321.6,164.2 324.0,158.0 326.4,154.6 328.8,154.2 331.2,157.1 333.6,162.7 336.0,170.4 338.4,179.3 340.8,188.3 343.2,196.3 345.6,202.3 348.0,205.5 350.4,205.7 352.8,202.6 355.2,196.8 357.6,189.0 360.0,180.0 362.4,171.0 364.8,163.2 367.2,157.4 369.6,154.3 372.0,154.5 374.4,157.7 376.8,163.7 379.2,171.7 381.6,180.7 384.0,189.6 386.4,197.3 388.8,202.9 391.2,205.8 393.6,205.4 396.0,202.0 398.4,195.8 400.8,187.7 403.2,178.7 405.6,169.8 408.0,162.2 410.4,156.8 412.8,154.2 415.2,154.7 417.6,158.4 420.0,164.7 422.4,172.9 424.8,182.0 427.2,190.8 429.6,198.3 432.0,203.5 434.4,205.9 436.8,205.1 439.2,201.2 441.6,194.7 444.0,186.5 446.4,177.4 448.8,168.6 451.2,161.3 453.6,156.2 456.0,154.1 458.4,155.1 460.8,159.2 463.2,165.8 465.6,174.2 468.0,183.3 470.4,191.9 472.8,199.2 475.2,204.1 477.6,206.0 480.0,204.7 482.4,200.4 484.8,193.7 487.2,185.2 489.6,176.1 492.0,167.5 494.4,160.4 496.8,155.7 499.2,154.0 501.6,155.5 504.0,160.0 506.4,166.9 508.8,175.4 511.2,184.6 513.6,193.1 516.0,200.0 518.4,204.5 520.8,206.0 523.2,204.3 525.6,199.6 528.0,192.5 530.4,183.9 532.8,174.8 535.2,166.3 537.6,159.6 540.0,155.3 542.4,154.0 544.8,155.9 547.2,160.8 549.6,168.1 552.0,176.7 554.4,185.8 556.8,194.2 559.2,200.8 561.6,204.9 564.0,205.9 566.4,203.8 568.8,198.7 571.2,191.4 573.6,182.6 576.0,173.5 578.4,165.3 580.8,158.8 583.2,154.9 585.6,154.1 588.0,156.5 590.4,161.7 592.8,169.2 595.2,178.0 597.6,187.1 600.0,195.3 602.4,201.6 604.8,205.3 607.2,205.8 609.6,203.2 612.0,197.8 614.4,190.2 616.8,181.3 619.2,172.3 621.6,164.2 624.0,158.0 626.4,154.6 628.8,154.2 631.2,157.1 633.6,162.7 636.0,170.4 638.4,179.3 640.8,188.3 643.2,196.3 645.6,202.3 648.0,205.5 650.4,205.7 652.8,202.6 655.2,196.8 657.6,189.0 660.0,180.0" fill="none" stroke="currentColor" stroke-width="2.2" opacity="0.75"/><text x="66" y="146" font-size="14.5" fill="currentColor">y₂ (7.0 Hz)</text><line x1="60" y1="330" x2="660" y2="330" stroke="currentColor" stroke-width="1" opacity="0.3"/><polyline points="60.0,278.0 63.0,278.0 66.0,278.1 69.0,278.2 72.0,278.4 75.0,278.6 78.0,278.9 81.0,279.3 84.0,279.6 87.0,280.1 90.0,280.5 93.0,281.1 96.0,281.7 99.0,282.3 102.0,282.9 105.0,283.7 108.0,284.4 111.0,285.2 114.0,286.1 117.0,287.0 120.0,287.9 123.0,288.9 126.0,289.9 129.0,291.0 132.0,292.1 135.0,293.2 138.0,294.4 141.0,295.6 144.0,296.9 147.0,298.1 150.0,299.4 153.0,300.8 156.0,302.1 159.0,303.5 162.0,304.9 165.0,306.4 168.0,307.9 171.0,309.3 174.0,310.9 177.0,312.4 180.0,313.9 183.0,315.5 186.0,317.1 189.0,318.7 192.0,320.3 195.0,321.9 198.0,323.5 201.0,325.1 204.0,326.7 207.0,328.4 210.0,330.0 213.0,328.4 216.0,326.7 219.0,325.1 222.0,323.5 225.0,321.9 228.0,320.3 231.0,318.7 234.0,317.1 237.0,315.5 240.0,313.9 243.0,312.4 246.0,310.9 249.0,309.3 252.0,307.9 255.0,306.4 258.0,304.9 261.0,303.5 264.0,302.1 267.0,300.8 270.0,299.4 273.0,298.1 276.0,296.9 279.0,295.6 282.0,294.4 285.0,293.2 288.0,292.1 291.0,291.0 294.0,289.9 297.0,288.9 300.0,287.9 303.0,287.0 306.0,286.1 309.0,285.2 312.0,284.4 315.0,283.7 318.0,282.9 321.0,282.3 324.0,281.7 327.0,281.1 330.0,280.5 333.0,280.1 336.0,279.6 339.0,279.3 342.0,278.9 345.0,278.6 348.0,278.4 351.0,278.2 354.0,278.1 357.0,278.0 360.0,278.0 363.0,278.0 366.0,278.1 369.0,278.2 372.0,278.4 375.0,278.6 378.0,278.9 381.0,279.3 384.0,279.6 387.0,280.1 390.0,280.5 393.0,281.1 396.0,281.7 399.0,282.3 402.0,282.9 405.0,283.7 408.0,284.4 411.0,285.2 414.0,286.1 417.0,287.0 420.0,287.9 423.0,288.9 426.0,289.9 429.0,291.0 432.0,292.1 435.0,293.2 438.0,294.4 441.0,295.6 444.0,296.9 447.0,298.1 450.0,299.4 453.0,300.8 456.0,302.1 459.0,303.5 462.0,304.9 465.0,306.4 468.0,307.9 471.0,309.3 474.0,310.9 477.0,312.4 480.0,313.9 483.0,315.5 486.0,317.1 489.0,318.7 492.0,320.3 495.0,321.9 498.0,323.5 501.0,325.1 504.0,326.7 507.0,328.4 510.0,330.0 513.0,328.4 516.0,326.7 519.0,325.1 522.0,323.5 525.0,321.9 528.0,320.3 531.0,318.7 534.0,317.1 537.0,315.5 540.0,313.9 543.0,312.4 546.0,310.9 549.0,309.3 552.0,307.9 555.0,306.4 558.0,304.9 561.0,303.5 564.0,302.1 567.0,300.8 570.0,299.4 573.0,298.1 576.0,296.9 579.0,295.6 582.0,294.4 585.0,293.2 588.0,292.1 591.0,291.0 594.0,289.9 597.0,288.9 600.0,287.9 603.0,287.0 606.0,286.1 609.0,285.2 612.0,284.4 615.0,283.7 618.0,282.9 621.0,282.3 624.0,281.7 627.0,281.1 630.0,280.5 633.0,280.1 636.0,279.6 639.0,279.3 642.0,278.9 645.0,278.6 648.0,278.4 651.0,278.2 654.0,278.1 657.0,278.0 660.0,278.0" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5" stroke-dasharray="6 5"/><polyline points="60.0,382.0 63.0,382.0 66.0,381.9 69.0,381.8 72.0,381.6 75.0,381.4 78.0,381.1 81.0,380.7 84.0,380.4 87.0,379.9 90.0,379.5 93.0,378.9 96.0,378.3 99.0,377.7 102.0,377.1 105.0,376.3 108.0,375.6 111.0,374.8 114.0,373.9 117.0,373.0 120.0,372.1 123.0,371.1 126.0,370.1 129.0,369.0 132.0,367.9 135.0,366.8 138.0,365.6 141.0,364.4 144.0,363.1 147.0,361.9 150.0,360.6 153.0,359.2 156.0,357.9 159.0,356.5 162.0,355.1 165.0,353.6 168.0,352.1 171.0,350.7 174.0,349.1 177.0,347.6 180.0,346.1 183.0,344.5 186.0,342.9 189.0,341.3 192.0,339.7 195.0,338.1 198.0,336.5 201.0,334.9 204.0,333.3 207.0,331.6 210.0,330.0 213.0,331.6 216.0,333.3 219.0,334.9 222.0,336.5 225.0,338.1 228.0,339.7 231.0,341.3 234.0,342.9 237.0,344.5 240.0,346.1 243.0,347.6 246.0,349.1 249.0,350.7 252.0,352.1 255.0,353.6 258.0,355.1 261.0,356.5 264.0,357.9 267.0,359.2 270.0,360.6 273.0,361.9 276.0,363.1 279.0,364.4 282.0,365.6 285.0,366.8 288.0,367.9 291.0,369.0 294.0,370.1 297.0,371.1 300.0,372.1 303.0,373.0 306.0,373.9 309.0,374.8 312.0,375.6 315.0,376.3 318.0,377.1 321.0,377.7 324.0,378.3 327.0,378.9 330.0,379.5 333.0,379.9 336.0,380.4 339.0,380.7 342.0,381.1 345.0,381.4 348.0,381.6 351.0,381.8 354.0,381.9 357.0,382.0 360.0,382.0 363.0,382.0 366.0,381.9 369.0,381.8 372.0,381.6 375.0,381.4 378.0,381.1 381.0,380.7 384.0,380.4 387.0,379.9 390.0,379.5 393.0,378.9 396.0,378.3 399.0,377.7 402.0,377.1 405.0,376.3 408.0,375.6 411.0,374.8 414.0,373.9 417.0,373.0 420.0,372.1 423.0,371.1 426.0,370.1 429.0,369.0 432.0,367.9 435.0,366.8 438.0,365.6 441.0,364.4 444.0,363.1 447.0,361.9 450.0,360.6 453.0,359.2 456.0,357.9 459.0,356.5 462.0,355.1 465.0,353.6 468.0,352.1 471.0,350.7 474.0,349.1 477.0,347.6 480.0,346.1 483.0,344.5 486.0,342.9 489.0,341.3 492.0,339.7 495.0,338.1 498.0,336.5 501.0,334.9 504.0,333.3 507.0,331.6 510.0,330.0 513.0,331.6 516.0,333.3 519.0,334.9 522.0,336.5 525.0,338.1 528.0,339.7 531.0,341.3 534.0,342.9 537.0,344.5 540.0,346.1 543.0,347.6 546.0,349.1 549.0,350.7 552.0,352.1 555.0,353.6 558.0,355.1 561.0,356.5 564.0,357.9 567.0,359.2 570.0,360.6 573.0,361.9 576.0,363.1 579.0,364.4 582.0,365.6 585.0,366.8 588.0,367.9 591.0,369.0 594.0,370.1 597.0,371.1 600.0,372.1 603.0,373.0 606.0,373.9 609.0,374.8 612.0,375.6 615.0,376.3 618.0,377.1 621.0,377.7 624.0,378.3 627.0,378.9 630.0,379.5 633.0,379.9 636.0,380.4 639.0,380.7 642.0,381.1 645.0,381.4 648.0,381.6 651.0,381.8 654.0,381.9 657.0,382.0 660.0,382.0" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5" stroke-dasharray="6 5"/><polyline points="60.0,330.0 62.4,313.3 64.8,298.4 67.2,286.9 69.6,280.1 72.0,278.5 74.4,282.4 76.8,291.4 79.2,304.3 81.6,319.9 84.0,336.3 86.4,351.9 88.8,364.9 91.2,374.0 93.6,378.3 96.0,377.5 98.4,371.6 100.8,361.5 103.2,348.3 105.6,333.5 108.0,318.7 110.4,305.5 112.8,295.2 115.2,288.9 117.6,287.2 120.0,290.0 122.4,296.9 124.8,307.0 127.2,319.2 129.6,331.9 132.0,344.0 134.4,353.9 136.8,360.9 139.2,364.3 141.6,363.9 144.0,360.0 146.4,353.1 148.8,344.3 151.2,334.5 153.6,324.9 156.0,316.6 158.4,310.3 160.8,306.5 163.2,305.6 165.6,307.3 168.0,311.3 170.4,316.8 172.8,323.2 175.2,329.5 177.6,335.1 180.0,339.4 182.4,342.1 184.8,343.0 187.2,342.3 189.6,340.3 192.0,337.5 194.4,334.4 196.8,331.6 199.2,329.4 201.6,328.1 204.0,327.8 206.4,328.3 208.8,329.4 211.2,330.6 213.6,331.7 216.0,332.2 218.4,331.9 220.8,330.6 223.2,328.4 225.6,325.6 228.0,322.5 230.4,319.7 232.8,317.7 235.2,317.0 237.6,317.9 240.0,320.6 242.4,324.9 244.8,330.5 247.2,336.8 249.6,343.2 252.0,348.7 254.4,352.7 256.8,354.4 259.2,353.5 261.6,349.7 264.0,343.4 266.4,335.1 268.8,325.5 271.2,315.7 273.6,306.9 276.0,300.0 278.4,296.1 280.8,295.7 283.2,299.1 285.6,306.1 288.0,316.0 290.4,328.1 292.8,340.8 295.2,353.0 297.6,363.1 300.0,370.0 302.4,372.8 304.8,371.1 307.2,364.8 309.6,354.5 312.0,341.3 314.4,326.5 316.8,311.7 319.2,298.5 321.6,288.4 324.0,282.5 326.4,281.7 328.8,286.0 331.2,295.1 333.6,308.1 336.0,323.7 338.4,340.1 340.8,355.7 343.2,368.6 345.6,377.6 348.0,381.5 350.4,379.9 352.8,373.1 355.2,361.6 357.6,346.7 360.0,330.0 362.4,313.3 364.8,298.4 367.2,286.9 369.6,280.1 372.0,278.5 374.4,282.4 376.8,291.4 379.2,304.3 381.6,319.9 384.0,336.3 386.4,351.9 388.8,364.9 391.2,374.0 393.6,378.3 396.0,377.5 398.4,371.6 400.8,361.5 403.2,348.3 405.6,333.5 408.0,318.7 410.4,305.5 412.8,295.2 415.2,288.9 417.6,287.2 420.0,290.0 422.4,296.9 424.8,307.0 427.2,319.2 429.6,331.9 432.0,344.0 434.4,353.9 436.8,360.9 439.2,364.3 441.6,363.9 444.0,360.0 446.4,353.1 448.8,344.3 451.2,334.5 453.6,324.9 456.0,316.6 458.4,310.3 460.8,306.5 463.2,305.6 465.6,307.3 468.0,311.3 470.4,316.8 472.8,323.2 475.2,329.5 477.6,335.1 480.0,339.4 482.4,342.1 484.8,343.0 487.2,342.3 489.6,340.3 492.0,337.5 494.4,334.4 496.8,331.6 499.2,329.4 501.6,328.1 504.0,327.8 506.4,328.3 508.8,329.4 511.2,330.6 513.6,331.7 516.0,332.2 518.4,331.9 520.8,330.6 523.2,328.4 525.6,325.6 528.0,322.5 530.4,319.7 532.8,317.7 535.2,317.0 537.6,317.9 540.0,320.6 542.4,324.9 544.8,330.5 547.2,336.8 549.6,343.2 552.0,348.7 554.4,352.7 556.8,354.4 559.2,353.5 561.6,349.7 564.0,343.4 566.4,335.1 568.8,325.5 571.2,315.7 573.6,306.9 576.0,300.0 578.4,296.1 580.8,295.7 583.2,299.1 585.6,306.1 588.0,316.0 590.4,328.1 592.8,340.8 595.2,353.0 597.6,363.1 600.0,370.0 602.4,372.8 604.8,371.1 607.2,364.8 609.6,354.5 612.0,341.3 614.4,326.5 616.8,311.7 619.2,298.5 621.6,288.4 624.0,282.5 626.4,281.7 628.8,286.0 631.2,295.1 633.6,308.1 636.0,323.7 638.4,340.1 640.8,355.7 643.2,368.6 645.6,377.6 648.0,381.5 650.4,379.9 652.8,373.1 655.2,361.6 657.6,346.7 660.0,330.0" fill="none" stroke="currentColor" stroke-width="3"/><text x="66" y="270" font-size="15" font-weight="bold" fill="currentColor">y₁ + y₂</text><line x1="210" y1="266" x2="210" y2="322" stroke="currentColor" stroke-width="1" stroke-dasharray="3 5" opacity="0.35"/><line x1="360" y1="266" x2="360" y2="322" stroke="currentColor" stroke-width="1" stroke-dasharray="3 5" opacity="0.35"/><line x1="510" y1="266" x2="510" y2="322" stroke="currentColor" stroke-width="1" stroke-dasharray="3 5" opacity="0.35"/><text x="210" y="256" text-anchor="middle" font-size="13" fill="currentColor">silent</text><text x="510" y="256" text-anchor="middle" font-size="13" fill="currentColor">silent</text><text x="360" y="256" text-anchor="middle" font-size="13" fill="currentColor">loud</text><line x1="60" y1="386" x2="60" y2="396" stroke="currentColor" stroke-width="1.5"/><line x1="210" y1="386" x2="210" y2="396" stroke="currentColor" stroke-width="1.5"/><line x1="360" y1="386" x2="360" y2="396" stroke="currentColor" stroke-width="1.5"/><line x1="510" y1="386" x2="510" y2="396" stroke="currentColor" stroke-width="1.5"/><line x1="660" y1="386" x2="660" y2="396" stroke="currentColor" stroke-width="1.5"/><text x="60" y="414" text-anchor="middle" font-size="12.5" fill="currentColor">0</text><text x="210" y="414" text-anchor="middle" font-size="12.5" fill="currentColor">0.5</text><text x="360" y="414" text-anchor="middle" font-size="12.5" fill="currentColor">1.0</text><text x="510" y="414" text-anchor="middle" font-size="12.5" fill="currentColor">1.5</text><text x="660" y="414" text-anchor="middle" font-size="12.5" fill="currentColor">2.0 s</text><text x="360" y="442" text-anchor="middle" font-size="14" fill="currentColor">envelope (dashed): amplitude 2A|cos(πt)| — loud at t = 0, 1, 2 s, silent at t = 0.5, 1.5 s</text><text x="360" y="464" text-anchor="middle" font-size="14" fill="currentColor">beat frequency = |7.0 − 6.0| = 1 Hz; the carrier oscillates at the average 6.5 Hz</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Which way was it flat?',
        problem: 'A tuning fork sounds 440 Hz. A guitar string played with it beats 4 times per second. Tightening the string very slightly makes the beats slow down. What was the string\u2019s original frequency?',
        steps: [
          { label: 'Two candidates', text: 'Beats of 4 Hz mean $f_{\\text{string}} = 440 \\pm 4$: either 444 Hz or 436 Hz — the beat count alone cannot tell sharp from flat.' },
          { label: 'The tightening test', text: 'Tightening raises $v = \\sqrt{\\tau/\\mu}$ and hence raises the string\u2019s frequency.' },
          { label: 'Interpret', text: 'The beats slowed, so the string moved toward 440 Hz — it was below and is rising: originally 436 Hz.' },
          { label: 'Finish', text: 'Keep tightening until the beats vanish entirely; at that point the string is exactly 440 Hz.' },
        ],
        result: 'The string was flat at 436 Hz; the slowing beats under tightening expose the sign that the beat count alone hides.',
      },
      {
        title: "Beats: decibel check",
        problem: "A source radiates $1.0\\ \\text{mW}$ uniformly. Find $I$ at $r = 15\\ \\text{m}$ and the sound level.",
        steps: [
          { label: "Intensity", text: "$I = P/4\\pi r^2 = 10^{-3}/(4\\pi\\times 225) = 3.54\\times 10^{-7}\\ \\text{W/m}^2$." },
          { label: "Level", text: "$\\beta = 10\\log(I/10^{-12}) = 55.5\\ \\text{dB}$." },
        ],
        result: "$I \\approx 3.54\\times 10^{-7}\\ \\text{W/m}^2$ ($55.5\\ \\text{dB}$).",
      },
    ],
    keyTakeaways: [
      'Nearly equal frequencies superpose into a carrier at the average frequency inside the envelope $2A|\\cos(\\pi(f_1-f_2)t)|$.',
      'Loudness maxima — beats — recur at $f_{\\text{beat}} = |f_2 - f_1|$.',
      'Beats slower than roughly 10 Hz are heard as throbbing; tuning means driving the beat frequency to zero.',
    ],
    quiz: [
      {
        q: 'Two tones at 505 Hz and 510 Hz produce beats at:',
        options: ['2.5 Hz', '5 Hz', '1015 Hz', '0 Hz'],
        answer: 1,
        explanation: '$f_{\\text{beat}} = |510 - 505| = 5$ Hz.',
      },
      {
        q: 'As two nearly matched strings are brought closer in frequency, the beats:',
        options: ['speed up', 'slow toward zero', 'keep the same rate', 'double in rate'],
        answer: 1,
        explanation: 'The beat frequency is the frequency difference; perfect tuning makes it vanish.',
      },
      {
        q: 'Two tones at 500 Hz and 600 Hz are played together. You hear:',
        options: ['beats at 100 Hz', 'two separate tones — the difference is far beyond the beat zone', 'silence', 'a pure 550 Hz tone'],
        answer: 1,
        explanation: 'A 100 Hz difference is far beyond the roughly 10 Hz beat zone: the ear resolves two tones instead of throbbing.',
      },
      {
        q: 'The envelope of two beating equal-amplitude waves peaks at:',
        options: [`$A$`, `$A/2$`, 'zero', `$2A$`],
        answer: 3,
        explanation: 'At each loud instant the two waves are momentarily in phase, doubling the amplitude to $2A$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 17-7
  {
    sectionId: 'hall-ch17-s7',
    readingTime: 8,
    intro: "Stand on a sidewalk as the ambulance wails past: the tone is high, high, high — then drops the instant the truck passes. Nothing about the siren changed; what changed is the motion of the source relative to the air carrying the sound, and the wavefronts it leaves behind tell the whole story. Getting the sign conventions right in the Doppler formulas is a perennial exam exercise, and the wavefront picture is the way never to get them wrong.",
    objectives: [
      'Explain the Doppler effect with wavefront bunching ahead of a moving source and stretching behind',
      "Apply $f' = f(v \\pm v_D)/v$ for a moving detector and $f' = fv/(v \\mp v_S)$ for a moving source",
      'Combine motions with the general formula and choose signs so that approach raises the detected frequency',
    ],
    concepts: [
      {
        term: 'The Doppler effect',
        kind: 'definition',
        statement: "**When the source or the detector moves relative to the medium, the detected frequency differs from the emitted frequency.** Motion toward — by either party — raises the detected frequency; motion away lowers it.",
      },
      {
        term: 'Moving detector',
        kind: 'law',
        statement: "**A detector moving at $v_D$ through still air meets wavefronts at the combined rate** $$f' = f\\,\\frac{v \\pm v_D}{v},$$ plus for motion toward the source, minus for away. The wavelength in the air is untouched — the detector simply runs through the crests faster or slower.",
      },
      {
        term: 'Moving source',
        kind: 'law',
        statement: "**A source moving at $v_S$ crowds its wavefronts ahead and stretches them behind: the wavelength becomes $\\lambda' = (v \\mp v_S)/f$, and** $$f' = \\frac{fv}{v \\mp v_S}$$ — minus sign in the denominator when the source approaches the detector, plus when it recedes. Here the wavelength itself changes; the wave speed in the medium is still $v$.",
        detail: "Ahead of the source each new crest starts from a nearer position, so crests stack closer together: shorter $\\lambda'$, higher $f'$. Behind, they spread: longer $\\lambda'$, lower $f'$.",
      },
      {
        term: 'Signs, wind and light',
        kind: 'insight',
        statement: "**The general formula $f' = f\\,(v \\pm v_D)/(v \\mp v_S)$ never fails if you (i) choose signs so that approach gives $f' > f$, and (ii) measure all speeds relative to the medium — in a wind, that means the moving air\u2019s frame.** For light the same physical idea survives, but the medium-free relativistic formula replaces it — the recession redshift of galaxies is its cosmic application.",
        detail: 'Radar speed guns, weather Doppler radar and blood-flow ultrasound all time the echoes of waves bouncing off moving targets.',
      },
      {
        term: "The Doppler Effect: solution protocol",
        kind: "method",
        statement: "**Solve The Doppler Effect problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is sound: intensity, sources, beats and Doppler; the working equation is $I = P/4\\pi r^2$, $\\beta = 10\\log(I/I_0)$, $f_{\\text{beat}} = |f_1-f_2|$, $f' = f(v\\pm v_D)/(v\\mp v_S)$; every substitution must carry its units so the final unit (decibels and hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $60\\ \\text{dB}$ conversation at $10^{-6}\\ \\text{W/m}^2$; $10\\%$ Doppler shift at $30\\ \\text{m/s}$; $v_S,v_D < v$; $I_0 = 10^{-12}\\ \\text{W/m}^2$ reference.",
      },
    ],
    figures: [
      {
        caption: "The Doppler effect for a source moving right at $v_S = 0.6v$. Each circle is a wavefront emitted 1 s apart, centered on the source\u2019s position at emission (labeled 0 s, 1 s, 2 s; the source is at the labeled later position now). Ahead of the source the circles bunch — shorter wavelength $\\lambda' = (v - v_S)/f$, higher detected frequency $f' = fv/(v - v_S)$; behind they stretch — $\\lambda' = (v + v_S)/f$, lower frequency.",
        svg: `<svg viewBox="0 0 720 410" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Doppler effect: wavefront circles bunched ahead of a moving source and stretched behind"><defs><marker id="dp-mk" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><circle cx="220" cy="190" r="180" fill="none" stroke="currentColor" stroke-width="2" opacity="0.32"/><circle cx="256" cy="190" r="120" fill="none" stroke="currentColor" stroke-width="2" opacity="0.5"/><circle cx="292" cy="190" r="60" fill="none" stroke="currentColor" stroke-width="2" opacity="0.7"/><line x1="150" y1="190" x2="330" y2="190" stroke="currentColor" stroke-width="1.2" stroke-dasharray="5 6" opacity="0.35"/><circle cx="220" cy="190" r="3.5" fill="currentColor"/><text x="220" y="208" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.8">0 s</text><circle cx="256" cy="190" r="3.5" fill="currentColor"/><text x="256" y="208" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.8">1 s</text><circle cx="292" cy="190" r="3.5" fill="currentColor"/><text x="292" y="208" text-anchor="middle" font-size="12" fill="currentColor" opacity="0.8">2 s</text><circle cx="328" cy="190" r="7" fill="currentColor" fill-opacity="0.18" stroke="currentColor" stroke-width="2.5"/><text x="328" y="168" text-anchor="middle" font-size="13.5" fill="currentColor">source now</text><line x1="342" y1="190" x2="424" y2="190" stroke="currentColor" stroke-width="2.5" marker-end="url(#dp-mk)"/><text x="384" y="176" text-anchor="middle" font-size="16" font-style="italic" fill="currentColor">vₛ</text><circle cx="612" cy="190" r="5" fill="none" stroke="currentColor" stroke-width="2"/><text x="612" y="214" text-anchor="middle" font-size="13" fill="currentColor">detector</text><text x="505" y="96" text-anchor="middle" font-size="14" fill="currentColor">bunched ahead: shorter λ, higher detected f</text><text x="205" y="308" text-anchor="middle" font-size="14" fill="currentColor">stretched behind: longer λ, lower detected f</text><text x="360" y="382" text-anchor="middle" font-size="13.5" fill="currentColor" opacity="0.9">each circle is a wavefront emitted 1 s apart, centered where the source was; here vₛ = 0.6 v</text><text x="360" y="402" text-anchor="middle" font-size="13.5" fill="currentColor" opacity="0.9">a detector ahead of the source counts crests at f′ = f v/(v − vₛ)</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'The passing siren',
        problem: "An ambulance siren emits 1200 Hz as the truck travels at 30 m/s through still air ($v = 343$ m/s). (a) What frequency does a pedestrian hear as the truck approaches? (b) After it passes? (c) A cyclist rides toward the approaching truck at 5.0 m/s — what frequency do they hear?",
        steps: [
          { label: 'Approaching source', text: "$f' = fv/(v - v_S) = 1200\\times343/313 = 1315$ Hz — about 10% sharp." },
          { label: 'Receding source', text: "$f' = fv/(v + v_S) = 1200\\times343/373 = 1104$ Hz." },
          { label: 'The drop', text: 'The swing from 1315 Hz to 1104 Hz — a ratio of 1.19, roughly a minor third in music — happens the instant the truck passes.' },
          { label: 'Cyclist', text: "Now both move toward each other: $f' = f(v + v_D)/(v - v_S) = 1200\\times348/313 = 1334$ Hz." },
        ],
        result: '1315 Hz approaching, 1104 Hz receding, 1334 Hz for the cyclist closing in at 5.0 m/s.',
      },
      {
        title: "The Doppler Effect: Doppler numbers",
        problem: "A $1000\\ \\text{Hz}$ siren approaches at $20\\ \\text{m/s}$ ($v_{\\text{sound}} = 343\\ \\text{m/s}$). What frequency is heard?",
        steps: [
          { label: "Formula", text: "$f' = f\\,v/(v-v_S)$ for approach." },
          { label: "Substitute", text: "$f' = 1000\\times 343/323 = 1060\\ \\text{Hz}$." },
          { label: "Shift", text: "Up by $61.9\\ \\text{Hz}$ ($\\approx 6.19\\%$)." },
        ],
        result: "$f' \\approx 1060\\ \\text{Hz}$.",
      },
    ],
    keyTakeaways: [
      'Approach raises and recession lowers the detected frequency. For source motion the wavelength itself changes; for detector motion it does not.',
      "$f' = f(v \\pm v_D)/(v \\mp v_S)$: fix the signs by the rule that approaching must give $f' > f$.",
      'All speeds are measured relative to the medium (the wind\u2019s frame for sound); light requires the relativistic version.',
    ],
    quiz: [
      {
        q: 'A source moves toward you at speed $v_S$. Compared with the emitted wave, the wave in front of the source has:',
        options: ['shorter wavelength and higher frequency', 'longer wavelength and lower frequency', 'the same wavelength, higher frequency', 'shorter wavelength, same frequency'],
        answer: 0,
        explanation: "The moving source bunches its crests: $\\lambda' = (v - v_S)/f$ shrinks and $f' = fv/(v - v_S)$ rises.",
      },
      {
        q: 'You drive toward a stationary source at $v_D$. The sound wave in the air has:',
        options: ['shorter wavelength and higher frequency', 'unchanged wavelength; you intercept crests at a higher rate', 'longer wavelength and lower frequency', 'unchanged detected frequency'],
        answer: 1,
        explanation: "The wavefronts are untouched; by running into them you count more per second: $f' = f(v + v_D)/v$.",
      },
      {
        q: 'A detector and a source approach each other, each moving at 30 m/s relative to the still air. The detected frequency is:',
        options: [`$f(v + 30)/v$`, `$fv/(v - 30)$`, `$f(v + 30)/(v - 30)$`, `$f$`],
        answer: 2,
        explanation: 'Both effects raise the frequency: numerator takes the detector\u2019s plus, denominator the source\u2019s minus.',
      },
      {
        q: 'Wind blows steadily from the source toward the detector. To apply the Doppler formula correctly you should:',
        options: ['use the wind speed as $v_D$', 'measure all speeds in the frame of the moving air', 'ignore the wind — it cannot affect sound', 'add the wind speed to the source frequency'],
        answer: 1,
        explanation: 'The medium carries the wave; all speeds in the formulas are speeds relative to the medium.',
      },
    ],
  },
  // ------------------------------------------------------------------ 17-8
  {
    sectionId: 'hall-ch17-s8',
    readingTime: 5,
    intro: "Push a source through air faster than the sound it emits and something qualitatively new happens: the wavefronts, each a sphere born at an earlier position, can no longer spread out ahead of the source. Instead they pile into a cone that sweeps the sky behind it — the shock wave — and when the cone\u2019s edge crosses your ears you hear the sonic boom. The geometry of overlapping spheres, nothing more, fixes the cone\u2019s angle.",
    objectives: [
      'Define supersonic motion and the Mach number',
      'Derive and apply $\\sin\\theta = v/v_S$ for the half-angle of the Mach cone',
      'Explain when an observer hears the boom, and connect the physics to Cherenkov radiation',
    ],
    concepts: [
      {
        term: 'Mach number',
        kind: 'definition',
        statement: "**A source is supersonic when its speed $v_S$ exceeds the speed $v$ of the waves it emits. The Mach number is $M = v_S/v$ — Mach 2 means twice the speed of sound.**",
      },
      {
        term: 'The Mach cone',
        kind: 'law',
        statement: "**The spherical wavefronts emitted along the path nest inside one another and share a common tangent cone whose surface makes half-angle $\\theta$ with the direction of travel:** $$\\sin\\theta = \\frac{v}{v_S} = \\frac{1}{M}.$$ The construction: while the source advances a distance $v_St$, the wavefront emitted at the start has grown to radius $vt$; the right triangle has hypotenuse $v_St$ and opposite side $vt$.",
        detail: 'Faster source, narrower cone: Mach 2 gives $\\theta = 30^\\circ$; Mach 1.75 gives $34.8^\\circ$.',
      },
      {
        term: 'The sonic boom',
        kind: 'insight',
        statement: "**The cone surface carries a sharp, sudden pressure jump.** An observer hears the boom not when the plane breaks the sound barrier but when the trailing cone sweeps past — after the plane has already gone by. The pressure signature is typically a double boom (an N-wave: overpressure, then underpressure).",
        detail: 'The boom is not a one-time event: the cone drags along under the flight path continuously, carving a kilometers-wide boom carpet on the ground.',
      },
      {
        term: 'Cherenkov light',
        kind: 'insight',
        statement: "**A charged particle pushed through a medium faster than light travels in that medium ($c/n$) emits a cone of blue light — Cherenkov radiation, the exact optical twin of the sonic boom.** Reactor pools glow blue from it, and detectors time the cone\u2019s angle to measure particle speeds.",
      },
      {
        term: "Supersonic Speeds, Shock Waves: solution protocol",
        kind: "method",
        statement: "**Solve Supersonic Speeds, Shock Waves problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is sound: intensity, sources, beats and Doppler; the working equation is $I = P/4\\pi r^2$, $\\beta = 10\\log(I/I_0)$, $f_{\\text{beat}} = |f_1-f_2|$, $f' = f(v\\pm v_D)/(v\\mp v_S)$; every substitution must carry its units so the final unit (decibels and hertz) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $60\\ \\text{dB}$ conversation at $10^{-6}\\ \\text{W/m}^2$; $10\\%$ Doppler shift at $30\\ \\text{m/s}$; $v_S,v_D < v$; $I_0 = 10^{-12}\\ \\text{W/m}^2$ reference.",
      },
    ],
    examples: [
      {
        title: 'F-16 overhead',
        problem: 'A fighter jet streaks at Mach 1.75 at an altitude of 1500 m (take $v = 343$ m/s). (a) Find the Mach cone half-angle. (b) How far behind the point directly under the jet does the boom first strike the ground? (c) How fast is the jet?',
        steps: [
          { label: 'Half-angle', text: '$\\sin\\theta = 1/M = 1/1.75 = 0.571$, so $\\theta = \\sin^{-1}(0.571) = 34.8^\\circ$.' },
          { label: 'Ground geometry', text: 'The cone trails behind the jet; where it meets the ground, $\\tan\\theta = h/d$, so $d = h/\\tan\\theta = 1500/0.696 = 2155$ m.' },
          { label: 'Speed', text: '$v_S = Mv = 1.75 \\times 343 = 600$ m/s (about 2160 km/h).' },
          { label: 'Interpret', text: 'You hear the boom about $2155/600 = 3.6$ s after the jet passed overhead — it is long gone when the sound arrives.' },
        ],
        result: '$\\theta \\approx 35^\\circ$; the boom lands about $2.2\\times10^{3}$ m behind the sub-point; the jet flies at roughly $6.0\\times10^{2}$ m/s.',
      },
      {
        title: "Supersonic Speeds, Shock Waves: Doppler numbers",
        problem: "A $1000\\ \\text{Hz}$ siren approaches at $30\\ \\text{m/s}$ ($v_{\\text{sound}} = 343\\ \\text{m/s}$). What frequency is heard?",
        steps: [
          { label: "Formula", text: "$f' = f\\,v/(v-v_S)$ for approach." },
          { label: "Substitute", text: "$f' = 1000\\times 343/313 = 1100\\ \\text{Hz}$." },
          { label: "Shift", text: "Up by $95.8\\ \\text{Hz}$ ($\\approx 9.58\\%$)." },
        ],
        result: "$f' \\approx 1100\\ \\text{Hz}$.",
      },
    ],
    keyTakeaways: [
      'Supersonic means $v_S > v$; the Mach number is $M = v_S/v$.',
      '$\\sin\\theta = v/v_S = 1/M$ fixes the Mach cone; faster flight narrows it.',
      'The boom is heard when the cone sweeps the observer — after the source has passed; Cherenkov radiation is the same physics with light.',
    ],
    quiz: [
      {
        q: 'A jet flies at exactly Mach 2. The half-angle of its Mach cone is:',
        options: ['45°', '30°', '60°', '90°'],
        answer: 1,
        explanation: '$\\sin\\theta = 1/M = 1/2$, so $\\theta = 30^\\circ$.',
      },
      {
        q: "Increasing a supersonic plane's speed:",
        options: ['narrows the cone', 'widens the cone', 'leaves the cone unchanged', 'makes the cone disappear'],
        answer: 0,
        explanation: '$\\sin\\theta = v/v_S$ shrinks as $v_S$ grows: the cone tightens around the flight path.',
      },
      {
        q: 'An observer on the ground first hears the boom of a supersonic jet:',
        options: ['the instant it breaks the sound barrier', 'when the Mach cone sweeps over them, after the jet has passed', 'the instant the jet is directly overhead', 'never'],
        answer: 1,
        explanation: 'The boom rides the cone trailing behind the jet, so it arrives only after the jet has gone by.',
      },
      {
        q: 'Cherenkov radiation occurs when a charged particle travels through a medium:',
        options: ['faster than $c$', 'at exactly $c$', 'slower than sound in that medium', 'faster than light travels in that medium, $c/n$'],
        answer: 3,
        explanation: 'Light in a medium moves at $c/n$; a particle exceeding that emits the optical shock cone.',
      },
    ],
  },
]
