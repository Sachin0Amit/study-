import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 16
// Sound and Hearing (Sections 16.1 – 16.9)
// ============================================================================

export const youngCh16Content: SectionContent[] = [
  {
    sectionId: "young-ch16-s1",
    readingTime: 5,
    intro: "Sound is the most familiar mechanical wave: a traveling pattern of compressions and rarefactions in air that the ear decodes as pitch and loudness. Young builds the full sinusoidal description of displacement and pressure, connecting what the molecules do to what the ear hears.",
    objectives: [
      "Describe sound as a longitudinal wave and distinguish displacement amplitude from pressure amplitude",
      "Write the sinusoidal wave functions for particle displacement and pressure fluctuation",
      "Relate frequency, wavelength, and wave speed to the audible range of human hearing",
    ],
    concepts: [
      {
        term: "Longitudinal sound wave",
        kind: "definition",
        statement: "A **sound wave** is a longitudinal mechanical wave in which fluid or solid particles oscillate parallel to the propagation direction, producing alternating **compressions** (high density and pressure) and **rarefactions** (low density and pressure).",
        detail: "Unlike a transverse string wave, nothing material travels with the sound; each air parcel oscillates about its equilibrium position while the disturbance pattern advances at the wave speed.",
      },
      {
        term: "Sinusoidal displacement wave",
        kind: "definition",
        statement: "For a harmonic sound wave traveling in the positive $x$-direction, the particle displacement is $s(x,t) = s_{\\max} \\cos(kx - \\omega t)$, where $s_{\\max}$ is the displacement amplitude, $k = 2\\pi/\\lambda$ is the wave number, and $\\omega = 2\\pi f$ is the angular frequency.",
        detail: "The molecules themselves move only micrometers even for loud sounds; it is the phase pattern $kx - \\omega t$ that races forward at $v = \\omega/k = \\lambda f$.",
      },
      {
        term: "Pressure amplitude",
        kind: "theorem",
        statement: "The gauge-pressure fluctuation is $p(x,t) = -Bk\\, s_{\\max} \\sin(kx - \\omega t)$, so the **pressure amplitude** is $p_{\\max} = Bk s_{\\max} = \\rho v \\omega s_{\\max}$, a quarter cycle out of phase with the displacement.",
        detail: "Where the displacement is zero the crowding of neighboring parcels is greatest, so pressure nodes sit at displacement antinodes. The minus sign records that a positive displacement slope dilutes the gas.",
      },
      {
        term: "Audible range and waveforms",
        kind: "notation",
        statement: "Human hearing spans roughly $20\\ \\mathrm{Hz} \\le f \\le 20{,}000\\ \\mathrm{Hz}$; frequency is perceived as **pitch**, while the waveform shape (harmonic content) is perceived as **timbre** or tone quality.",
        detail: "Frequencies below hearing are infrasonic and above it ultrasonic; a pure tone is sinusoidal, while musical instruments superpose harmonics $f, 2f, 3f, \\ldots$ that give each instrument its characteristic voice.",
      },
      {
        term: "Pressure amplitude scale",
        kind: "insight",
        statement: "Audible pressure amplitudes span an astonishing range: the threshold of hearing is $p_{\\max} \\approx 3 \\times 10^{-5}\\ \\mathrm{Pa}$, while the threshold of pain near $p_{\\max} \\approx 30\\ \\mathrm{Pa}$ is a million times larger in pressure and a trillion times larger in intensity.",
        detail: "This factor of $10^{12}$ in intensity is why the logarithmic decibel scale of Section 16.3 is practically mandatory.",
      },
    ],
    examples: [
      {
        title: "Pressure amplitude of ordinary speech",
        problem: "A conversational tone at $f = 500\\ \\mathrm{Hz}$ has displacement amplitude $s_{\\max} = 2.0 \\times 10^{-8}\\ \\mathrm{m}$ in air ($\\rho = 1.20\\ \\mathrm{kg/m^3}$, $v = 344\\ \\mathrm{m/s}$). Find the pressure amplitude and the ratio to atmospheric pressure.",
        steps: [
          { label: "Angular frequency", text: "$\\omega = 2\\pi f = 2\\pi(500) = 3.14 \\times 10^{3}\\ \\mathrm{rad/s}$." },
          { label: "Pressure amplitude", text: "$p_{\\max} = \\rho v \\omega s_{\\max} = (1.20)(344)(3.14 \\times 10^{3})(2.0 \\times 10^{-8}) = 2.59 \\times 10^{-2}\\ \\mathrm{Pa}$." },
          { label: "Fraction of atmosphere", text: "$p_{\\max}/p_{\\mathrm{atm}} = 2.59 \\times 10^{-2} / 1.01 \\times 10^{5} \\approx 2.6 \\times 10^{-7}$ — less than one part per million." },
        ],
        result: "$p_{\\max} \\approx 2.6 \\times 10^{-2}\\ \\mathrm{Pa}$, about $3 \\times 10^{-7}$ of atmospheric pressure.",
      },
      {
        title: "Wavelengths across the audible band",
        problem: "Find the wavelengths in air ($v = 344\\ \\mathrm{m/s}$) of the lowest audible tone $f = 20\\ \\mathrm{Hz}$ and the highest $f = 20{,}000\\ \\mathrm{Hz}$.",
        steps: [
          { label: "Low end", text: "$\\lambda = v/f = 344/20 = 17.2\\ \\mathrm{m}$ — longer than a bus." },
          { label: "High end", text: "$\\lambda = 344/20{,}000 = 1.72 \\times 10^{-2}\\ \\mathrm{m} = 1.72\\ \\mathrm{cm}$." },
          { label: "Middle C check", text: "For $f = 262\\ \\mathrm{Hz}$, $\\lambda = 344/262 = 1.31\\ \\mathrm{m}$, comparable to organ-pipe lengths in Section 16.4." },
        ],
        result: "Audible wavelengths run from $17.2\\ \\mathrm{m}$ down to $1.72\\ \\mathrm{cm}$.",
      },
    ],
    keyTakeaways: [
      "Sound is a longitudinal wave of compressions and rarefactions; particles oscillate while the pattern travels.",
      "Displacement $s(x,t) = s_{\\max}\\cos(kx - \\omega t)$ and pressure $p(x,t)$ differ in phase by a quarter cycle.",
      "Hearing covers $20\\ \\mathrm{Hz}$ to $20{,}000\\ \\mathrm{Hz}$; pressure amplitudes span six orders of magnitude.",
    ],
    quiz: [
      {
        q: "In a sound wave the pressure fluctuation relative to the particle displacement is:",
        options: ["In phase with the displacement", "A quarter cycle out of phase with the displacement", "At twice the frequency of the displacement", "Independent of the displacement amplitude"],
        answer: 1,
        explanation: "Because pressure depends on the crowding of parcels, $p(x,t)$ varies as $\\sin(kx - \\omega t)$ while $s(x,t)$ varies as $\\cos(kx - \\omega t)$ — a quarter-cycle shift.",
      },
      {
        q: "A sound wave of $f = 344\\ \\mathrm{Hz}$ in air ($v = 344\\ \\mathrm{m/s}$) has wavelength:",
        options: ["$0.344\\ \\mathrm{m}$", "$1.00\\ \\mathrm{m}$", "$3.44\\ \\mathrm{m}$", "$344\\ \\mathrm{m}$"],
        answer: 1,
        explanation: "$\\lambda = v/f = 344/344 = 1.00\\ \\mathrm{m}$.",
      },
      {
        q: "Which statement about the audible range is correct?",
        options: ["Humans hear $2\\ \\mathrm{Hz}$ to $2000\\ \\mathrm{Hz}$", "Humans hear $20\\ \\mathrm{Hz}$ to $20{,}000\\ \\mathrm{Hz}$, with pitch set by frequency", "Ultrasound is below $20\\ \\mathrm{Hz}$", "Timbre is determined by wave speed alone"],
        answer: 1,
        explanation: "The audible band is about $20\\ \\mathrm{Hz}$ to $20{,}000\\ \\mathrm{Hz}$; frequency sets pitch and harmonic content sets timbre.",
      },
    ],
  },
  {
    sectionId: "young-ch16-s2",
    readingTime: 5,
    intro: "Why does sound race through steel nearly fifteen times faster than through air? Young derives the wave speed from elasticity and inertia, showing that the same square-root law $v = \\sqrt{\\text{stiffness}/\\text{density}}$ governs fluids and solids, with temperature tuning the speed in gases.",
    objectives: [
      "State and apply $v = \\sqrt{B/\\rho}$ for fluids and $v = \\sqrt{Y/\\rho}$ for solid rods",
      "Compute the temperature dependence of the speed of sound in an ideal gas",
      "Compare sound speeds in air, water, and solids with numerical values",
    ],
    concepts: [
      {
        term: "Speed of sound in a fluid",
        kind: "law",
        statement: "In a fluid of bulk modulus $B$ and density $\\rho$, longitudinal waves travel at $v = \\sqrt{B/\\rho}$, derived by applying $\\sum F = ma$ to a thin oscillating slab of the medium.",
        detail: "Greater stiffness raises the restoring force and the speed; greater density raises the inertia and lowers it. The derivation parallels the string-wave derivation with tension replaced by bulk modulus.",
      },
      {
        term: "Speed of sound in a solid rod",
        kind: "law",
        statement: "For longitudinal waves on a thin solid rod of Young's modulus $Y$ and density $\\rho$, $v = \\sqrt{Y/\\rho}$; in extended solids transverse shear waves also propagate at a lower speed set by the shear modulus.",
        detail: "Young's worked values: steel $v \\approx 5940\\ \\mathrm{m/s}$, aluminum $6420\\ \\mathrm{m/s}$, granite $6000\\ \\mathrm{m/s}$ — an order of magnitude above air.",
      },
      {
        term: "Newton-Laplace speed in an ideal gas",
        kind: "theorem",
        statement: "For an ideal gas the adiabatic bulk modulus is $B = \\gamma p$, so $v = \\sqrt{\\gamma p/\\rho} = \\sqrt{\\gamma RT/M}$, which depends on temperature but not on pressure.",
        detail: "Newton's isothermal guess ($\\gamma = 1$) gave too low a value; Laplace recognized that rapid compressions are adiabatic ($\\gamma = 1.40$ for diatomic air), fixing the discrepancy.",
      },
      {
        term: "Temperature dependence in air",
        kind: "method",
        statement: "Because $v \\propto \\sqrt{T}$, the speed in air is well approximated by $v = (331.5\\ \\mathrm{m/s})\\sqrt{T/273.15\\ \\mathrm{K}}$, giving $v \\approx 344\\ \\mathrm{m/s}$ at $20^{\\circ}\\mathrm{C}$ and about $0.60\\ \\mathrm{m/s}$ more per Celsius degree near room temperature.",
        detail: "Pressure cancels because $p/\\rho = RT/M$ at fixed temperature — a high-altitude balloon hears the same speed at the same temperature despite thin air.",
      },
      {
        term: "Why water and steel are faster",
        kind: "insight",
        statement: "Water ($v \\approx 1490\\ \\mathrm{m/s}$) beats air ($344\\ \\mathrm{m/s}$) because its bulk modulus ($2.2 \\times 10^{9}\\ \\mathrm{Pa}$) outweighs its $1000$-fold density penalty; stiffness wins over inertia.",
        detail: "This is why whale calls cross ocean basins and why tapping a rail is heard through steel long before the airborne sound arrives.",
      },
    ],
    figures: [
      {
        caption: "Square-root law $v = \\sqrt{\\text{stiffness}/\\rho}$: air, water, and steel compared on a common speed axis.",
        svg: `<svg viewBox="0 0 400 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart comparing sound speeds in air water and steel"><line x1="60" y1="150" x2="380" y2="150" stroke="currentColor" stroke-width="1.5"/><text x="60" y="170" font-size="12" fill="currentColor">0</text><text x="360" y="170" font-size="12" fill="currentColor">6000 m/s</text><rect x="60" y="110" width="18" height="28" fill="currentColor" opacity="0.35" stroke="currentColor"/><text x="60" y="100" font-size="12" fill="currentColor">air 344</text><rect x="60" y="60" width="80" height="28" fill="currentColor" opacity="0.55" stroke="currentColor"/><text x="60" y="50" font-size="12" fill="currentColor">water 1490</text><rect x="60" y="10" width="317" height="28" fill="currentColor" opacity="0.8" stroke="currentColor"/><text x="60" y="32" font-size="12" fill="currentColor">steel 5940</text></svg>`,
        afterConcept: 5,
      },
    ],
    examples: [
      {
        title: "Speed of sound on a cold day",
        problem: "Compute $v$ in air at $T = 0^{\\circ}\\mathrm{C} = 273.15\\ \\mathrm{K}$ and at $30^{\\circ}\\mathrm{C} = 303.15\\ \\mathrm{K}$ using $v = 331.5\\sqrt{T/273.15}$.",
        steps: [
          { label: "At freezing", text: "$v = 331.5\\sqrt{273.15/273.15} = 331.5\\ \\mathrm{m/s}$." },
          { label: "At 30 C", text: "$v = 331.5\\sqrt{303.15/273.15} = 331.5\\sqrt{1.1098} = 331.5(1.0535) = 349.2\\ \\mathrm{m/s}$." },
          { label: "Difference", text: "$349.2 - 331.5 = 17.7\\ \\mathrm{m/s}$ over $30$ degrees, about $0.59\\ \\mathrm{m/s}$ per degree." },
        ],
        result: "$331.5\\ \\mathrm{m/s}$ at $0^{\\circ}\\mathrm{C}$ rising to $349\\ \\mathrm{m/s}$ at $30^{\\circ}\\mathrm{C}$.",
      },
      {
        title: "Depth sounding with water's speed",
        problem: "A ship's sonar pulse returns $1.20\\ \\mathrm{s}$ after transmission. Using $v = 1490\\ \\mathrm{m/s}$ for seawater, find the ocean depth.",
        steps: [
          { label: "Round trip", text: "Total path $= v t = (1490)(1.20) = 1788\\ \\mathrm{m}$." },
          { label: "One way", text: "Depth $= 1788/2 = 894\\ \\mathrm{m}$." },
          { label: "Air comparison", text: "In air the same delay would imply only $344(1.20)/2 = 206\\ \\mathrm{m}$ — water's stiffness wins." },
        ],
        result: "Depth $\\approx 894\\ \\mathrm{m}$.",
      },
    ],
    keyTakeaways: [
      "Fluid speed $v = \\sqrt{B/\\rho}$ and rod speed $v = \\sqrt{Y/\\rho}$: stiffness over inertia under a square root.",
      "In gases $v = \\sqrt{\\gamma RT/M}$ depends on temperature, not pressure; Laplace's $\\gamma$ fixed Newton's error.",
      "Representative speeds: air $344\\ \\mathrm{m/s}$, water $1490\\ \\mathrm{m/s}$, steel $5940\\ \\mathrm{m/s}$.",
    ],
    quiz: [
      {
        q: "If the absolute temperature of air doubles at fixed composition, the speed of sound:",
        options: ["Doubles", "Increases by $\\sqrt{2} \\approx 1.41$", "Halves", "Is unchanged because pressure also doubles"],
        answer: 1,
        explanation: "$v = \\sqrt{\\gamma RT/M} \\propto \\sqrt{T}$, so doubling $T$ multiplies $v$ by $\\sqrt{2}$.",
      },
      {
        q: "Sound travels faster in water than in air mainly because:",
        options: ["Water is denser", "Water's bulk modulus is enormously larger, outweighing its density", "Water is colder", "Pressure is higher underwater"],
        answer: 1,
        explanation: "$v = \\sqrt{B/\\rho}$: water's $B \\approx 2.2 \\times 10^{9}\\ \\mathrm{Pa}$ dominates the $1000$-fold density increase, giving $1490\\ \\mathrm{m/s}$ versus $344\\ \\mathrm{m/s}$.",
      },
      {
        q: "Newton's original calculation of the speed of sound was too low because he:",
        options: ["Used the wrong density of air", "Assumed isothermal compressions instead of adiabatic", "Ignored humidity", "Used Celsius instead of kelvin"],
        answer: 1,
        explanation: "Sound-frequency compressions are too fast for heat flow, so the adiabatic modulus $B = \\gamma p$ with $\\gamma = 1.40$ applies, not the isothermal $B = p$.",
      },
    ],
  },
  {
    sectionId: "young-ch16-s3",
    readingTime: 6,
    intro: "Loudness is physics plus psychology: the ear responds to intensity, but perceives ratios, not differences. Young derives the intensity of a sinusoidal wave and builds the decibel scale that compresses a trillion-fold intensity range into a hundred decibels.",
    objectives: [
      "Derive and apply $I = p_{\\max}^{2}/(2\\rho v)$ for a sinusoidal sound wave",
      "Convert between intensity and decibel level with $\\beta = 10\\log(I/I_{0})$",
      "Explain the inverse-square falloff of intensity with distance from a point source",
    ],
    concepts: [
      {
        term: "Intensity of a sinusoidal wave",
        kind: "theorem",
        statement: "The time-averaged intensity is $I = \\tfrac{1}{2}\\rho v\\, \\omega^{2} s_{\\max}^{2} = p_{\\max}^{2}/(2\\rho v)$, the average rate of energy transport per unit area perpendicular to propagation.",
        detail: "Intensity grows as the square of amplitude and of frequency: doubling the pressure amplitude quadruples the loudness physics, which is why $+6\\ \\mathrm{dB}$ means double the pressure.",
      },
      {
        term: "Decibel scale",
        kind: "definition",
        statement: "The sound intensity level is $\\beta = (10\\ \\mathrm{dB})\\log(I/I_{0})$ with reference $I_{0} = 10^{-12}\\ \\mathrm{W/m^{2}}$, the approximate threshold of hearing at $1\\ \\mathrm{kHz}$.",
        detail: "Every $10\\ \\mathrm{dB}$ multiplies intensity by $10$; every $3\\ \\mathrm{dB}$ approximately doubles it. A $120\\ \\mathrm{dB}$ rock concert carries $10^{12}$ times the threshold intensity.",
      },
      {
        term: "Loudness perception",
        kind: "insight",
        statement: "Perceived loudness is roughly logarithmic (Weber-Fechner behavior): equal decibel steps sound like equal loudness steps, and $10\\ \\mathrm{dB}$ sounds about twice as loud.",
        detail: "Equal-loudness contours show the ear is most sensitive near $3$–$4\\ \\mathrm{kHz}$; a $100\\ \\mathrm{Hz}$ tone needs far more intensity to sound as loud as a $1\\ \\mathrm{kHz}$ tone.",
      },
      {
        term: "Inverse-square law for intensity",
        kind: "law",
        statement: "For a point source of power $P$ radiating uniformly, $I = P/(4\\pi r^{2})$: intensity falls as the inverse square of distance because the same power crosses ever-larger spheres.",
        detail: "Doubling the distance drops intensity by a factor of $4$ and the level by $6\\ \\mathrm{dB}$ — the practical rule for placing speakers and measuring noise.",
      },
      {
        term: "Reference pressure amplitude",
        kind: "notation",
        statement: "The intensity reference $I_{0} = 10^{-12}\\ \\mathrm{W/m^{2}}$ corresponds to $p_{\\max} = \\sqrt{2\\rho v I_{0}} \\approx 2.8 \\times 10^{-5}\\ \\mathrm{Pa}$ in air, the standard $0\\ \\mathrm{dB}$ point.",
        detail: "Sound-pressure level in decibels is equivalently $20\\log(p/p_{\\mathrm{ref}})$ because intensity goes as pressure squared and $2 \\times 10 = 20$.",
      },
    ],
    examples: [
      {
        title: "Decibels of a busy street",
        problem: "Traffic noise measures $I = 3.2 \\times 10^{-5}\\ \\mathrm{W/m^{2}}$. Find the intensity level in decibels.",
        steps: [
          { label: "Ratio", text: "$I/I_{0} = 3.2 \\times 10^{-5}/10^{-12} = 3.2 \\times 10^{7}$." },
          { label: "Log", text: "$\\log(3.2 \\times 10^{7}) = \\log 3.2 + 7 = 0.505 + 7 = 7.505$." },
          { label: "Level", text: "$\\beta = 10(7.505) = 75.1\\ \\mathrm{dB}$." },
        ],
        result: "$\\beta \\approx 75\\ \\mathrm{dB}$, typical of heavy traffic.",
      },
      {
        title: "How far to drop 20 dB",
        problem: "A small speaker radiates $P = 2.0\\ \\mathrm{W}$ uniformly. At what distance does the level fall to $80\\ \\mathrm{dB}$ ($I = 10^{-4}\\ \\mathrm{W/m^{2}}$)?",
        steps: [
          { label: "Inverse square", text: "$I = P/(4\\pi r^{2})$, so $r = \\sqrt{P/(4\\pi I)}$." },
          { label: "Substitute", text: "$r = \\sqrt{2.0/(4\\pi \\times 10^{-4})} = \\sqrt{2.0/1.2566 \\times 10^{-3}} = \\sqrt{1591.5} = 39.9\\ \\mathrm{m}$." },
          { label: "Sanity check", text: "At $1\\ \\mathrm{m}$, $I = 2/(4\\pi) = 0.159\\ \\mathrm{W/m^{2}} = 112\\ \\mathrm{dB}$; dropping $32\\ \\mathrm{dB}$ needs a factor $\\sqrt{10^{3.2}} \\approx 40$ in distance. Consistent." },
        ],
        result: "$r \\approx 40\\ \\mathrm{m}$.",
      },
    ],
    keyTakeaways: [
      "Intensity $I = p_{\\max}^{2}/(2\\rho v)$ scales with amplitude squared and frequency squared.",
      "Decibels $\\beta = 10\\log(I/I_{0})$ compress $10^{12}$ in intensity into $120\\ \\mathrm{dB}$.",
      "Point-source intensity obeys $I = P/(4\\pi r^{2})$: double the distance, lose $6\\ \\mathrm{dB}$.",
    ],
    quiz: [
      {
        q: "Doubling the pressure amplitude of a sound wave changes its intensity by a factor of:",
        options: ["$\\sqrt{2}$", "$2$", "$4$", "$8$"],
        answer: 2,
        explanation: "$I = p_{\\max}^{2}/(2\\rho v)$ is quadratic in amplitude: $2^{2} = 4$.",
      },
      {
        q: "A sound at $90\\ \\mathrm{dB}$ compared with one at $80\\ \\mathrm{dB}$ carries:",
        options: ["Twice the intensity", "Ten times the intensity", "Half the intensity", "The same intensity but twice the loudness perception exactly"],
        answer: 1,
        explanation: "Each $10\\ \\mathrm{dB}$ is one power of ten in intensity: $90 - 80 = 10\\ \\mathrm{dB}$ means $10$ times the intensity.",
      },
      {
        q: "Moving from $2\\ \\mathrm{m}$ to $4\\ \\mathrm{m}$ from a point source, the intensity level:",
        options: ["Drops by $3\\ \\mathrm{dB}$", "Drops by $6\\ \\mathrm{dB}$", "Drops by $12\\ \\mathrm{dB}$", "Is unchanged"],
        answer: 1,
        explanation: "Doubling $r$ quarters $I = P/(4\\pi r^{2})$, and $10\\log(1/4) = -6.02\\ \\mathrm{dB}$.",
      },
      {
        q: "The reference intensity $I_{0} = 10^{-12}\\ \\mathrm{W/m^{2}}$ is chosen as:",
        options: ["The pain threshold", "Approximately the hearing threshold at $1\\ \\mathrm{kHz}$", "The intensity of normal speech at $1\\ \\mathrm{m}$", "One watt per square centimeter"],
        answer: 1,
        explanation: "$0\\ \\mathrm{dB}$ marks the edge of audibility for a $1\\ \\mathrm{kHz}$ tone in a healthy young ear.",
      },
    ],
  },
  {
    sectionId: "young-ch16-s4",
    readingTime: 6,
    intro: "Organ pipes, flutes, and the human vocal tract all sing by trapping standing sound waves. Young imposes the displacement boundary conditions at open and closed ends and reads off the allowed harmonic series that give each instrument its voice.",
    objectives: [
      "Apply node-antinode boundary conditions at open and closed pipe ends",
      "Compute harmonic frequencies for open and stopped pipes with $f_{n} = nv/(2L)$ and $f_{n} = nv/(4L)$",
      "Distinguish displacement nodes from pressure nodes in standing sound waves",
    ],
    concepts: [
      {
        term: "Boundary conditions for sound",
        kind: "definition",
        statement: "An **open end** is a displacement antinode (pressure node) because the air moves freely against atmospheric pressure; a **closed end** is a displacement node (pressure antinode) because the wall blocks motion.",
        detail: "This is the reverse of a string, where a fixed end is a displacement node: for sound the free atmosphere is the soft boundary and the wall is the hard one.",
      },
      {
        term: "Open-pipe normal modes",
        kind: "theorem",
        statement: "An open pipe of length $L$ supports wavelengths $\\lambda_{n} = 2L/n$ and frequencies $f_{n} = nv/(2L)$ for $n = 1, 2, 3, \\ldots$, containing all harmonics.",
        detail: "Both ends must be displacement antinodes, so an integer number of half-wavelengths fits: $L = n\\lambda/2$. The flute and the open organ pipe use this full harmonic ladder.",
      },
      {
        term: "Stopped-pipe normal modes",
        kind: "theorem",
        statement: "A stopped pipe (one end closed) supports $\\lambda_{n} = 4L/n$ and $f_{n} = nv/(4L)$ for odd $n = 1, 3, 5, \\ldots$ only — the even harmonics are missing.",
        detail: "One node plus one antinode forces an odd number of quarter-wavelengths: $L = n\\lambda/4$ with $n$ odd. The clarinet's hollow chalumeau timbre is this missing-even signature.",
      },
      {
        term: "Displacement versus pressure pictures",
        kind: "insight",
        statement: "Displacement nodes coincide with pressure antinodes and vice versa, because pressure peaks where neighboring parcels are maximally squeezed — exactly where no parcel moves.",
        detail: "Dust figures (Kundt's tube) collect at displacement nodes, which are pressure antinodes; a microphone probe instead reads pressure maxima at the closed end.",
      },
      {
        term: "End correction",
        kind: "method",
        statement: "A real open end behaves as if the pipe were slightly longer, $L_{\\mathrm{eff}} \\approx L + 0.6d$ per open end of diameter $d$; instrument makers shorten the tube to compensate.",
        detail: "The correction is a few percent for typical organ pipes and explains why textbook $nv/(2L)$ predictions run slightly sharp of measured pitches.",
      },
    ],
    figures: [
      {
        caption: "First three standing modes of an open pipe (all harmonics) and a stopped pipe (odd harmonics only). Loops mark displacement antinodes.",
        svg: `<svg viewBox="0 0 400 230" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Standing wave modes in open and stopped pipes"><text x="10" y="18" font-size="13" fill="currentColor">open L, n=1,2,3</text><text x="210" y="18" font-size="13" fill="currentColor">stopped L, n=1,3,5</text><line x1="10" y1="40" x2="190" y2="40" stroke="currentColor" stroke-width="1"/><path d="M10,70 Q55,30 100,70 T190,70" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10,110 Q43,70 76,110 T142,110 T190,110" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10,150 Q33,110 55,150 T100,150 T145,150 T190,150" fill="none" stroke="currentColor" stroke-width="2"/><rect x="210" y="40" width="6" height="130" fill="currentColor"/><path d="M216,70 Q258,30 300,70 T384,70" fill="none" stroke="currentColor" stroke-width="2"/><path d="M216,120 Q246,80 274,120 T330,120 T384,120" fill="none" stroke="currentColor" stroke-width="2"/><path d="M216,165 Q234,130 252,165 T288,165 T324,165 T360,165 T384,165" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Tuning an open organ pipe",
        problem: "An open organ pipe of length $L = 1.72\\ \\mathrm{m}$ sounds its fundamental in air at $v = 344\\ \\mathrm{m/s}$. Find $f_{1}$ and the next two harmonics.",
        steps: [
          { label: "Fundamental", text: "$f_{1} = v/(2L) = 344/(2 \\times 1.72) = 344/3.44 = 100\\ \\mathrm{Hz}$." },
          { label: "Harmonics", text: "$f_{2} = 2f_{1} = 200\\ \\mathrm{Hz}$; $f_{3} = 3f_{1} = 300\\ \\mathrm{Hz}$." },
          { label: "Interpretation", text: "All integer multiples sound, giving the bright open-pipe timbre." },
        ],
        result: "$100\\ \\mathrm{Hz}$, $200\\ \\mathrm{Hz}$, $300\\ \\mathrm{Hz}$.",
      },
      {
        title: "A stopped pipe of the same length",
        problem: "Close one end of the same $1.72\\ \\mathrm{m}$ pipe. Find the three lowest sounding frequencies.",
        steps: [
          { label: "Fundamental", text: "$f_{1} = v/(4L) = 344/(4 \\times 1.72) = 344/6.88 = 50.0\\ \\mathrm{Hz}$ — an octave below the open pipe." },
          { label: "Next modes", text: "Only odd $n$: $f_{3} = 3(50.0) = 150\\ \\mathrm{Hz}$; $f_{5} = 5(50.0) = 250\\ \\mathrm{Hz}$." },
          { label: "Missing", text: "$100\\ \\mathrm{Hz}$ and $200\\ \\mathrm{Hz}$ cannot resonate — the stopped pipe's hollow sound." },
        ],
        result: "$50.0\\ \\mathrm{Hz}$, $150\\ \\mathrm{Hz}$, $250\\ \\mathrm{Hz}$.",
      },
    ],
    keyTakeaways: [
      "Open ends are displacement antinodes; closed ends are displacement nodes (pressure antinodes).",
      "Open pipes sound $f_{n} = nv/(2L)$ for all $n$; stopped pipes sound $f_{n} = nv/(4L)$ for odd $n$ only.",
      "The missing even harmonics give stopped pipes and clarinets their characteristic hollow timbre.",
    ],
    quiz: [
      {
        q: "An open pipe and a stopped pipe have equal length $L$. The stopped pipe's fundamental is:",
        options: ["Equal to the open pipe's", "One octave above", "One octave below", "Two octaves below"],
        answer: 2,
        explanation: "$f_{1}^{\\mathrm{open}} = v/(2L)$ versus $f_{1}^{\\mathrm{stopped}} = v/(4L)$ — exactly half the frequency, one octave lower.",
      },
      {
        q: "Which harmonics can a stopped pipe produce?",
        options: ["All integer harmonics", "Only odd harmonics", "Only even harmonics", "Only the fundamental"],
        answer: 1,
        explanation: "The node-antinode pair forces $L = n\\lambda/4$ with $n$ odd, so $f_{n} = nv/(4L)$ for $n = 1, 3, 5, \\ldots$.",
      },
      {
        q: "At a displacement node of a standing sound wave, the pressure fluctuation is:",
        options: ["Zero", "At a maximum (pressure antinode)", "At the same frequency but half amplitude", "Undefined"],
        answer: 1,
        explanation: "No motion means maximum crowding: displacement nodes are pressure antinodes.",
      },
    ],
  },
  {
    sectionId: "young-ch16-s5",
    readingTime: 4,
    intro: "Blow across a bottle top and it hums at one favored pitch no matter how you blow. That is resonance: a system driven at its natural frequency builds a large standing-wave response, the principle behind every wind instrument and acoustic amplifier.",
    objectives: [
      "Explain resonance as large-amplitude response to driving at a natural frequency",
      "Describe how instruments use resonance to select and amplify pitch",
      "Distinguish free vibration from driven resonance with examples",
    ],
    concepts: [
      {
        term: "Resonance",
        kind: "definition",
        statement: "When a system capable of oscillation is driven at or near one of its **natural frequencies**, the steady-state amplitude grows far beyond the static response — this selective amplification is **resonance**.",
        detail: "Pushing a swing once per period is the mechanical prototype; the bottle hum and the sounding board of a guitar are the acoustic versions.",
      },
      {
        term: "Resonance in air columns",
        kind: "law",
        statement: "An air column responds strongly when the driving frequency matches a normal-mode frequency $f_{n}$ of Section 16.4; off resonance the response collapses because successive reflections cancel.",
        detail: "Organ builders voice each pipe by adjusting its resonance; singers shatter glasses only by holding the goblet's resonant pitch steadily.",
      },
      {
        term: "Forced versus free vibration",
        kind: "insight",
        statement: "A struck tuning fork rings at its natural frequency and decays (**free vibration**), while a continuously blown pipe holds whatever resonance the air supply feeds (**driven vibration**) — instruments combine both stages.",
        detail: "The reed or lips supply broadband energy; the column's resonances filter and amplify only the harmonic ladder, which is why a trumpet and a flute sound different on the same written note.",
      },
      {
        term: "Helmholtz resonance",
        kind: "method",
        statement: "A cavity of volume $V$ with a neck of area $A$ and length $L$ resonates at $f = (v/2\\pi)\\sqrt{A/(VL)}$, with the neck air acting as the mass and the cavity air as the spring.",
        detail: "The bottle hum ($\\sim 100$–$200\\ \\mathrm{Hz}$) and the body resonance of a guitar are Helmholtz modes, not pipe modes — one lumped sloshing rather than a standing wave.",
      },
      {
        term: "Quality factor preview",
        kind: "notation",
        statement: "Sharp resonances have high **quality factor** $Q = f_{0}/\\Delta f$, where $\\Delta f$ is the resonance width; low damping gives tall narrow peaks and long ring times.",
        detail: "A good tuning fork has $Q \\sim 10^{4}$ and rings for many seconds, while a stuffed room's broad weak resonances die almost instantly.",
      },
    ],
    examples: [
      {
        title: "Bottle as Helmholtz resonator",
        problem: "A $500\\ \\mathrm{mL}$ ($V = 5.0 \\times 10^{-4}\\ \\mathrm{m^3}$) bottle has neck area $A = 3.0 \\times 10^{-4}\\ \\mathrm{m^2}$ and neck length $L = 0.060\\ \\mathrm{m}$. Estimate its hum with $v = 344\\ \\mathrm{m/s}$.",
        steps: [
          { label: "Ratio", text: "$A/(VL) = 3.0 \\times 10^{-4}/(5.0 \\times 10^{-4} \\times 0.060) = 3.0 \\times 10^{-4}/3.0 \\times 10^{-5} = 10$." },
          { label: "Root", text: "$\\sqrt{10} = 3.162$." },
          { label: "Frequency", text: "$f = (344/2\\pi)(3.162) = 54.75 \\times 3.162 = 173\\ \\mathrm{Hz}$." },
        ],
        result: "$f \\approx 173\\ \\mathrm{Hz}$, near F below middle C — the familiar bottle hum.",
      },
      {
        title: "Sympathetic tuning fork",
        problem: "Two identical $440\\ \\mathrm{Hz}$ forks stand side by side; one is struck. Explain quantitatively why the second starts sounding, and why a $442\\ \\mathrm{Hz}$ fork barely responds.",
        steps: [
          { label: "Resonant drive", text: "Sound at $440\\ \\mathrm{Hz}$ drives the second fork exactly at its natural frequency, so each cycle adds energy in phase." },
          { label: "Off-resonance suppression", text: "At $442\\ \\mathrm{Hz}$ the $2\\ \\mathrm{Hz}$ detuning makes the drive slip out of phase every $0.25\\ \\mathrm{s}$ (beats of Section 16.7), so energy alternately enters and leaves." },
          { label: "Result", text: "High-$Q$ forks amplify only within about $\\Delta f \\sim f/Q \\sim 0.04\\ \\mathrm{Hz}$; $2\\ \\mathrm{Hz}$ off is hundreds of widths away." },
        ],
        result: "Exact resonance builds amplitude cycle by cycle; even $0.5$ percent detuning kills the response.",
      },
    ],
    keyTakeaways: [
      "Driving at a natural frequency produces resonance: large selective response.",
      "Wind instruments filter broadband reed energy through air-column resonances.",
      "Cavity Helmholtz modes ($f \\propto \\sqrt{A/(VL)}$) explain bottle hums and guitar bodies.",
    ],
    quiz: [
      {
        q: "Blowing harder across a bottle top mainly changes the hum's:",
        options: ["Pitch", "Loudness", "Resonant frequency formula", "Neck length"],
        answer: 1,
        explanation: "The Helmholtz frequency is fixed by geometry; harder blowing feeds more energy into the same resonance, raising loudness.",
      },
      {
        q: "A singer shatters a glass by:",
        options: ["Singing as loudly as possible at any pitch", "Holding the glass's resonant frequency so amplitude accumulates", "Singing two notes at once", "Cooling the glass first"],
        answer: 1,
        explanation: "Only sustained driving at resonance lets lightly damped vibrations build to breaking strain.",
      },
      {
        q: "High quality factor $Q$ means a resonance is:",
        options: ["Low and broad", "Tall and narrow with long ring time", "Independent of damping", "Always at high frequency"],
        answer: 1,
        explanation: "$Q = f_{0}/\\Delta f$: less damping gives a narrower, taller peak that rings longer.",
      },
    ],
  },
  {
    sectionId: "young-ch16-s6",
    readingTime: 5,
    intro: "Two speakers playing the same tone create zones of loud sound and zones of near silence across the room. Young applies superposition to coherent sources and derives the path-difference conditions that predict every maximum and minimum.",
    objectives: [
      "State the path-difference conditions for constructive and destructive interference",
      "Locate interference maxima and minima for two coherent sources",
      "Explain why real-room acoustics requires coherent, single-frequency sources",
    ],
    concepts: [
      {
        term: "Coherent sources",
        kind: "definition",
        statement: "Two sources are **coherent** if they emit waves of the same frequency with a constant phase difference; only coherent waves produce a stable interference pattern.",
        detail: "Two speakers wired to one amplifier are coherent; two separate orchestras are not, because their relative phase wanders and the pattern washes out.",
      },
      {
        term: "Constructive interference condition",
        kind: "theorem",
        statement: "Waves arriving with path difference $\\Delta d = d_{2} - d_{1} = m\\lambda$ for integer $m = 0, \\pm 1, \\pm 2, \\ldots$ arrive in phase and interfere **constructively**, giving maximum amplitude.",
        detail: "In-phase superposition doubles the pressure amplitude and quadruples the intensity at the antinodal lines.",
      },
      {
        term: "Destructive interference condition",
        kind: "theorem",
        statement: "Path difference $\\Delta d = (m + \\tfrac{1}{2})\\lambda$ brings the waves half a cycle apart for **destructive** interference and minimum amplitude.",
        detail: "Ideal cancellation gives silence, but real rooms add wall reflections, so minima are quiet rather than perfectly silent.",
      },
      {
        term: "Two-speaker geometry",
        kind: "method",
        statement: "For speakers separated by $d$ with screen distance $L \\gg d$, maxima fall at lateral positions $y_{m} = m\\lambda L/d$, exactly the double-slit geometry reused in optics.",
        detail: "Measuring the spacing between loud zones gives $\\lambda$ and hence $v = \\lambda f$ — an acoustic Young experiment.",
      },
      {
        term: "Phase reversal on reflection",
        kind: "insight",
        statement: "Reflection from a rigid wall preserves the displacement phase but the round trip adds path; interference of direct and reflected waves creates the room modes that boom at some seats and vanish at others.",
        detail: "Concert-hall designers break up these standing patterns with diffusers so no seat sits in a permanent node.",
      },
    ],
    figures: [
      {
        caption: "Two coherent sources: hyperbolic lines of constructive interference ($\\Delta d = m\\lambda$) alternate with destructive lines ($\\Delta d = (m+1/2)\\lambda$).",
        svg: `<svg viewBox="0 0 400 200" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two-source interference maxima and minima"><circle cx="90" cy="100" r="5" fill="currentColor"/><circle cx="150" cy="100" r="5" fill="currentColor"/><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M240,20 Q215,100 240,180" opacity="0.9"/><path d="M290,20 Q250,100 290,180" opacity="0.45"/><path d="M340,20 Q285,100 340,180" opacity="0.9"/><path d="M265,20 Q232,100 265,180" opacity="0.45" stroke-dasharray="5 4"/></g><text x="238" y="195" font-size="11" fill="currentColor">max</text><text x="288" y="195" font-size="11" fill="currentColor">min</text><text x="336" y="195" font-size="11" fill="currentColor">max</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Loud and quiet seats",
        problem: "Two speakers $3.00\\ \\mathrm{m}$ apart emit $f = 344\\ \\mathrm{Hz}$ ($\\lambda = 1.00\\ \\mathrm{m}$ with $v = 344\\ \\mathrm{m/s}$). A listener sits $10.0\\ \\mathrm{m}$ out on the center line extended $1.50\\ \\mathrm{m}$ sideways. Is it loud or quiet?",
        steps: [
          { label: "Distances", text: "$d_{1} = \\sqrt{10.0^{2} + (1.50 - 1.50)^{2}} = 10.0\\ \\mathrm{m}$ to near speaker center; more precisely $d_{1} = \\sqrt{10^{2} + 0^{2}} = 10.0$, $d_{2} = \\sqrt{10^{2} + 3.0^{2}} = 10.44\\ \\mathrm{m}$." },
          { label: "Path difference", text: "$\\Delta d = 10.44 - 10.0 = 0.44\\ \\mathrm{m} \\approx 0.44\\lambda$ — close to half a wavelength." },
          { label: "Verdict", text: "Near $(m + 1/2)\\lambda$ with $m = 0$: destructive, a quiet seat. Moving about $0.3\\ \\mathrm{m}$ sideways reaches $\\Delta d = 0.5\\lambda$ exactly." },
        ],
        result: "Near-destructive: a quiet seat close to the $m = 0$ minimum.",
      },
      {
        title: "Speaker spacing from fringe spacing",
        problem: "In a hall with $L = 12.0\\ \\mathrm{m}$, adjacent loud zones are $2.00\\ \\mathrm{m}$ apart for $f = 688\\ \\mathrm{Hz}$ ($\\lambda = 0.500\\ \\mathrm{m}$). Find the speaker separation $d$.",
        steps: [
          { label: "Fringe formula", text: "$\\Delta y = \\lambda L/d$, so $d = \\lambda L/\\Delta y$." },
          { label: "Substitute", text: "$d = (0.500)(12.0)/2.00 = 3.00\\ \\mathrm{m}$." },
          { label: "Check", text: "Wider speaker spacing would squeeze the zones together — the acoustic double slit." },
        ],
        result: "$d = 3.00\\ \\mathrm{m}$.",
      },
    ],
    keyTakeaways: [
      "Coherence (same frequency, fixed phase) is required for stable interference.",
      "Maxima at $\\Delta d = m\\lambda$; minima at $\\Delta d = (m + 1/2)\\lambda$.",
      "Fringe spacing $\\Delta y = \\lambda L/d$ maps the acoustic double slit.",
    ],
    quiz: [
      {
        q: "Two coherent sources produce silence at a point where the path difference is:",
        options: ["$2\\lambda$", "$3\\lambda$", "$2.5\\lambda$", "$0$"],
        answer: 2,
        explanation: "Half-integer multiples $(m + 1/2)\\lambda$ give destructive interference; $2.5\\lambda$ qualifies.",
      },
      {
        q: "Two separate radios playing the same station show no stable interference pattern because:",
        options: ["Their frequencies differ slightly and drift", "Sound cannot interfere", "The intensity is too low", "Decibels add linearly"],
        answer: 0,
        explanation: "Independent tuners are not coherent — their relative phase wanders, washing out the pattern.",
      },
      {
        q: "If the speaker separation $d$ doubles with $\\lambda$ and $L$ fixed, adjacent maxima:",
        options: ["Move twice as far apart", "Move half as far apart", "Stay put", "Disappear"],
        answer: 1,
        explanation: "$\\Delta y = \\lambda L/d$ is inversely proportional to $d$.",
      },
    ],
  },
  {
    sectionId: "young-ch16-s7",
    readingTime: 4,
    intro: "Strike two nearly identical tuning forks together and the sound throbs in and out. Young shows that beats are not a new frequency but a slow amplitude modulation, and that the beat rate directly reads the frequency difference.",
    objectives: [
      "Derive the beat frequency $f_{\\mathrm{beat}} = |f_{a} - f_{b}|$ from superposition",
      "Use beats to tune instruments with quantitative examples",
      "Distinguish beats from the missing fundamental and combination tones",
    ],
    concepts: [
      {
        term: "Beat frequency",
        kind: "theorem",
        statement: "Superposing $\\cos(2\\pi f_{a}t) + \\cos(2\\pi f_{b}t)$ gives an oscillation at the average frequency $f_{\\mathrm{av}} = (f_{a}+f_{b})/2$ with amplitude modulated at $f_{\\mathrm{beat}} = |f_{a} - f_{b}|$.",
        detail: "The trig identity $\\cos A + \\cos B = 2\\cos[2\\pi f_{\\mathrm{av}}t]\\cos[\\pi(f_{a}-f_{b})t]$ separates the fast carrier from the slow envelope; intensity maxima occur twice per envelope cycle, matching the counted throbs.",
      },
      {
        term: "Envelope versus carrier",
        kind: "definition",
        statement: "The **carrier** oscillates at $f_{\\mathrm{av}}$ while the **envelope** swells and fades at $f_{\\mathrm{beat}}$; the ear hears one pitch throbbing in loudness, not two pitches.",
        detail: "Beats are audible as distinct throbs only below about $10$–$15\\ \\mathrm{Hz}$ of difference; larger gaps are heard as roughness or as two separate tones.",
      },
      {
        term: "Tuning with beats",
        kind: "method",
        statement: "Musicians tune by counting beats against a standard: adjusting string tension until $f_{\\mathrm{beat}} \\to 0$ means the frequencies match to better than $1\\ \\mathrm{Hz}$.",
        detail: "Hearing $3$ beats per second against a $440\\ \\mathrm{Hz}$ fork means the string is at $437$ or $443\\ \\mathrm{Hz}$; tightening raises pitch, resolving the ambiguity.",
      },
      {
        term: "Beats need near-equal amplitudes",
        kind: "insight",
        statement: "Clean beats require comparable amplitudes; if one tone dominates, the modulation depth shrinks and the throbbing nearly vanishes even at the same $f_{\\mathrm{beat}}$.",
        detail: "Piano tuners therefore compare each string against its neighbors at matched loudness before judging the beat rate.",
      },
      {
        term: "From beats to roughness",
        kind: "notation",
        statement: "As $|f_{a} - f_{b}|$ grows past $\\sim 15\\ \\mathrm{Hz}$, throbs blur into **roughness** and then into separate pitches — the perceptual bridge between rhythm and harmony.",
        detail: "Choir dissonance lives in this zone: nearly-but-not-quite unison intervals sound rough precisely because of fast unresolved beats.",
      },
    ],
    examples: [
      {
        title: "Tuning a violin A string",
        problem: "A violinist bows an A string together with a $440\\ \\mathrm{Hz}$ fork and hears $4$ beats per second. After slightly loosening the string the beat rate rises to $5$ per second. What was the string's frequency?",
        steps: [
          { label: "Candidates", text: "$f = 440 \\pm 4$, i.e. $436$ or $444\\ \\mathrm{Hz}$." },
          { label: "Loosening test", text: "Loosening lowers $f$. If $f$ had been $444$, loosening would move it toward $440$ and beats would slow; they quickened instead." },
          { label: "Conclusion", text: "The string was at $436\\ \\mathrm{Hz}$ (loosening drives it to $435$, $5\\ \\mathrm{Hz}$ off)." },
        ],
        result: "The string was flat at $436\\ \\mathrm{Hz}$.",
      },
      {
        title: "Beat period of twin engines",
        problem: "Twin propellers turn at $f_{a} = 40.0\\ \\mathrm{Hz}$ and $f_{b} = 41.5\\ \\mathrm{Hz}$ blade-pass frequencies. Find the beat frequency and the time between loud throbs.",
        steps: [
          { label: "Beat rate", text: "$f_{\\mathrm{beat}} = |41.5 - 40.0| = 1.5\\ \\mathrm{Hz}$." },
          { label: "Period", text: "$T_{\\mathrm{beat}} = 1/1.5 = 0.667\\ \\mathrm{s}$ between successive loud maxima." },
          { label: "Perception", text: "Passengers hear the cabin drone swell every two-thirds of a second — the classic out-of-sync throb." },
        ],
        result: "$1.5\\ \\mathrm{Hz}$ beats, one surge every $0.67\\ \\mathrm{s}$.",
      },
    ],
    keyTakeaways: [
      "Beats come from superposition: carrier at $f_{\\mathrm{av}}$, envelope at $|f_{a} - f_{b}|$.",
      "Counting beats tunes instruments to $1\\ \\mathrm{Hz}$ precision.",
      "Above $\\sim 15\\ \\mathrm{Hz}$ difference, beats blur into roughness and then two pitches.",
    ],
    quiz: [
      {
        q: "Forks at $512\\ \\mathrm{Hz}$ and $516\\ \\mathrm{Hz}$ sounded together produce:",
        options: ["A $514\\ \\mathrm{Hz}$ tone throbbing $4$ times per second", "A $4\\ \\mathrm{Hz}$ tone", "No audible sound", "A $1028\\ \\mathrm{Hz}$ tone"],
        answer: 0,
        explanation: "Carrier $(512+516)/2 = 514\\ \\mathrm{Hz}$ with envelope $|516-512| = 4\\ \\mathrm{Hz}$.",
      },
      {
        q: "A tuner hears $2$ beats/s against $440\\ \\mathrm{Hz}$ and the beats slow when she tightens the string. The string is:",
        options: ["At $442\\ \\mathrm{Hz}$", "At $438\\ \\mathrm{Hz}$", "Exactly at $440\\ \\mathrm{Hz}$", "An octave off"],
        answer: 1,
        explanation: "Tightening raises frequency; slowing beats mean approaching $440$ from below, so $f = 438\\ \\mathrm{Hz}$.",
      },
      {
        q: "Beats are heard as separate loudness throbs only when the frequency difference is:",
        options: ["Exactly zero", "Small, below about $10$–$15\\ \\mathrm{Hz}$", "Larger than $1000\\ \\mathrm{Hz}$", "Greater than the average frequency"],
        answer: 1,
        explanation: "Slow envelopes are trackable as throbs; fast ones fuse into roughness or two tones.",
      },
    ],
  },
  {
    sectionId: "young-ch16-s8",
    readingTime: 7,
    intro: "A passing ambulance slides from high whine to low moan as it goes by. Young derives the Doppler shift for moving sources and observers from first principles, with sign rules that handle every combination and real radar and medical applications.",
    objectives: [
      "Derive $f_{L} = f_{S}(v + v_{L})/(v + v_{S})$ and state the sign conventions",
      "Solve moving-source, moving-observer, and combined Doppler problems numerically",
      "Explain electromagnetic Doppler applications from radar to cosmology",
    ],
    concepts: [
      {
        term: "Doppler wavelength shift",
        kind: "definition",
        statement: "Motion changes the effective wavelength: a source receding at $v_{S}$ stretches each cycle to $\\lambda^{\\prime} = (v + v_{S})/f_{S}$, while an approaching observer meets wavefronts at the faster relative speed $v + v_{L}$.",
        detail: "The effect is purely kinematic — the source frequency never changes; only the spacing of wavefronts in the medium and the meeting rate change.",
      },
      {
        term: "General Doppler formula",
        kind: "theorem",
        statement: "With $v_{L}$ positive toward the source and $v_{S}$ positive away from the listener, $f_{L} = f_{S}(v + v_{L})/(v + v_{S})$, valid for speeds well below the wave speed.",
        detail: "Approaching means $v_{L} > 0$ or $v_{S} < 0$, both raising $f_{L}$; receding lowers it. Swapping one sign convention is the classic exam trap.",
      },
      {
        term: "Moving source only",
        kind: "method",
        statement: "For a stationary listener ($v_{L} = 0$), $f_{L} = f_{S}v/(v + v_{S})$: an ambulance approaching at $30\\ \\mathrm{m/s}$ with $f_{S} = 700\\ \\mathrm{Hz}$ is heard at $700(344)/(344-30) = 767\\ \\mathrm{Hz}$.",
        detail: "Wavefronts bunch ahead of the source and spread behind it, which is why the pitch drops discontinuously as the vehicle passes.",
      },
      {
        term: "Moving observer only",
        kind: "method",
        statement: "For a stationary source ($v_{S} = 0$), $f_{L} = f_{S}(v + v_{L})/v$: walking toward a $1000\\ \\mathrm{Hz}$ siren at $2\\ \\mathrm{m/s}$ raises the heard pitch to $1006\\ \\mathrm{Hz}$.",
        detail: "Here the wavelength in air is unchanged; the observer simply harvests wavefronts faster, like walking into rain.",
      },
      {
        term: "Electromagnetic Doppler",
        kind: "law",
        statement: "Light needs no medium, so only relative velocity matters: for $u \\ll c$ the fractional shift is $\\Delta f/f \\approx \\mp u/c$, receding redshifts and approaching blueshifts.",
        detail: "Police radar, medical ultrasound, and Hubble galactic redshifts all read speeds from this shift; the full relativistic formula of Chapter 37 takes over near $c$.",
      },
    ],
    figures: [
      {
        caption: "Wavefronts from a source moving right: compressed ahead ($\\lambda$ short, pitch high) and stretched behind ($\\lambda$ long, pitch low).",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Doppler wavefronts bunched ahead of a moving source"><g fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="258" cy="85" r="12"/><circle cx="250" cy="85" r="28"/><circle cx="240" cy="85" r="46"/><circle cx="228" cy="85" r="66" opacity="0.7"/><circle cx="214" cy="85" r="88" opacity="0.45"/></g><circle cx="262" cy="85" r="6" fill="currentColor"/><line x1="262" y1="85" x2="300" y2="85" stroke="currentColor" stroke-width="2"/><text x="303" y="89" font-size="13" fill="currentColor">vS</text><text x="300" y="60" font-size="12" fill="currentColor">short λ</text><text x="130" y="60" font-size="12" fill="currentColor">long λ</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "The passing ambulance",
        problem: "An ambulance siren emits $f_{S} = 700\\ \\mathrm{Hz}$ and travels at $v_{S} = -30\\ \\mathrm{m/s}$ (toward listener) then $+30\\ \\mathrm{m/s}$ (away). Take $v = 344\\ \\mathrm{m/s}$ and a stationary listener. Find both heard pitches.",
        steps: [
          { label: "Approaching", text: "$f_{L} = 700(344)/(344 - 30) = 700(344/314) = 700(1.0955) = 767\\ \\mathrm{Hz}$." },
          { label: "Receding", text: "$f_{L} = 700(344)/(344 + 30) = 700(344/374) = 700(0.9198) = 644\\ \\mathrm{Hz}$." },
          { label: "Drop", text: "The pitch falls $767 - 644 = 123\\ \\mathrm{Hz}$, about three semitones, at the instant of passing." },
        ],
        result: "$767\\ \\mathrm{Hz}$ approaching, $644\\ \\mathrm{Hz}$ receding.",
      },
      {
        title: "Police radar double shift",
        problem: "A radar gun at $f = 10.525\\ \\mathrm{GHz}$ reflects from a car approaching at $30.0\\ \\mathrm{m/s}$. Estimate the round-trip beat shift using $\\Delta f \\approx 2uf/c$ with $c = 3.00 \\times 10^{8}\\ \\mathrm{m/s}$.",
        steps: [
          { label: "One-way fraction", text: "$u/c = 30.0/3.00 \\times 10^{8} = 1.00 \\times 10^{-7}$." },
          { label: "Double (there and back)", text: "$\\Delta f = 2(1.00 \\times 10^{-7})(10.525 \\times 10^{9}) = 2.105 \\times 10^{3}\\ \\mathrm{Hz}$." },
          { label: "Reading", text: "A $2.1\\ \\mathrm{kHz}$ beat on a $10.5\\ \\mathrm{GHz}$ carrier gives $30\\ \\mathrm{m/s}$ ($108\\ \\mathrm{km/h}$)." },
        ],
        result: "$\\Delta f \\approx 2.11\\ \\mathrm{kHz}$ for $30\\ \\mathrm{m/s}$.",
      },
    ],
    keyTakeaways: [
      "General form $f_{L} = f_{S}(v + v_{L})/(v + v_{S})$ with $v_{L}$ toward and $v_{S}$ away positive.",
      "Moving sources change wavelength; moving observers change meeting rate.",
      "Electromagnetic shift $\\Delta f/f \\approx u/c$ powers radar, sonar imaging, and redshift cosmology.",
    ],
    quiz: [
      {
        q: "A source approaches a stationary listener at half the speed of sound. The heard frequency is:",
        options: ["$0.5\\,f_{S}$", "$1.5\\,f_{S}$", "$2.0\\,f_{S}$", "Unchanged"],
        answer: 2,
        explanation: "$f_{L} = f_{S}v/(v - v/2) = 2f_{S}$ — an octave up.",
      },
      {
        q: "An observer runs away from a stationary source at speed $v_{L} < 0$. The wavelength in the air:",
        options: ["Increases", "Decreases", "Is unchanged; only the meeting rate drops", "Becomes infinite"],
        answer: 2,
        explanation: "Observer motion does not re-space the wavefronts; it only changes how fast they are met, $f_{L} = f_{S}(v+v_{L})/v$.",
      },
      {
        q: "The pitch drop as an ambulance passes occurs because:",
        options: ["The siren frequency jumps", "The source velocity flips from toward to away, switching $\\lambda$ from compressed to stretched", "Air temperature changes", "Beats with a reflected wave begin"],
        answer: 1,
        explanation: "$v_{S}$ changes sign at passing: wavefronts go from bunched ($f$ high) to spread ($f$ low) discontinuously.",
      },
      {
        q: "A galaxy's light is redshifted by $0.01$ percent. It is:",
        options: ["Approaching at $0.0001c$", "Receding at $0.0001c$", "At rest", "Moving transversely only"],
        answer: 1,
        explanation: "Redshift means longer wavelength, lower frequency: recession with $u/c = \\Delta\\lambda/\\lambda = 10^{-4}$.",
      },
    ],
  },
  {
    sectionId: "young-ch16-s9",
    readingTime: 4,
    intro: "When a jet outruns its own sound, wavefronts pile into a cone of concentrated pressure — the sonic boom. Young closes the chapter with Mach number and the geometry of the shock cone that extends Doppler physics past the wave speed.",
    objectives: [
      "Define Mach number $M = v_{S}/v$ and the supersonic condition",
      "Derive the Mach-cone half-angle $\\sin\\alpha = v/v_{S}$",
      "Explain why sonic booms are continuous, not a one-time bang",
    ],
    concepts: [
      {
        term: "Mach number",
        kind: "definition",
        statement: "The **Mach number** $M = v_{S}/v$ compares source speed to wave speed; $M < 1$ is subsonic, $M = 1$ is sonic, and $M > 1$ is supersonic.",
        detail: "A $680\\ \\mathrm{m/s}$ jet in $340\\ \\mathrm{m/s}$ air flies at $M = 2.0$; rifle bullets and space shuttles re-entering routinely exceed $M = 1$.",
      },
      {
        term: "Shock wavefront",
        kind: "definition",
        statement: "For $v_{S} > v$ the spherical wavefronts overlap along a tangent **shock cone** where pressure disturbances add coherently into a large-amplitude boom.",
        detail: "Unlike ordinary sound, a shock is a near-discontinuity in pressure and density that propagates faster than small-amplitude waves would.",
      },
      {
        term: "Mach-cone angle",
        kind: "theorem",
        statement: "In time $t$ the source advances $v_{S}t$ while sound expands $vt$, so the cone half-angle satisfies $\\sin\\alpha = vt/(v_{S}t) = v/v_{S} = 1/M$.",
        detail: "Faster flight narrows the cone: $M = 1$ gives a flat $90^{\\circ}$ wall of sound, $M = 2$ gives $\\alpha = 30^{\\circ}$.",
      },
      {
        term: "Continuous boom carpet",
        kind: "insight",
        statement: "The boom is not emitted once at breaking the sound barrier — the cone trails the aircraft continuously, so every ground point hears a bang as the cone sweeps past.",
        detail: "That is why supersonic flight is banned over land: the entire flight path lays down a boom carpet, with double bangs from nose and tail shocks.",
      },
      {
        term: "Bow waves and wakes",
        kind: "notation",
        statement: "The Mach cone is the acoustic twin of a ship's bow wave ($\\sin\\alpha = v_{\\mathrm{wave}}/v_{\\mathrm{ship}}$): any wave outrun by its source piles into the same geometry.",
        detail: "Kelvin ship wakes, Cherenkov light from superluminal-in-medium particles, and sonic booms are one phenomenon with different wave speeds.",
      },
    ],
    figures: [
      {
        caption: "Mach cone for $M = 2$: source outruns wavefronts; envelope half-angle $\\sin\\alpha = 1/M = 0.5$ gives $\\alpha = 30^{\\circ}$.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Mach cone geometry"><g fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="270" cy="85" r="15"/><circle cx="240" cy="85" r="30" opacity="0.85"/><circle cx="210" cy="85" r="45" opacity="0.7"/><circle cx="180" cy="85" r="60" opacity="0.45"/></g><line x1="300" y1="85" x2="180" y2="16" stroke="currentColor" stroke-width="2"/><line x1="300" y1="85" x2="180" y2="154" stroke="currentColor" stroke-width="2"/><circle cx="300" cy="85" r="6" fill="currentColor"/><text x="308" y="70" font-size="13" fill="currentColor">jet M=2</text><text x="232" y="42" font-size="12" fill="currentColor">α=30°</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Cone angle of a fighter jet",
        problem: "A jet flies at $v_{S} = 688\\ \\mathrm{m/s}$ where $v = 344\\ \\mathrm{m/s}$. Find $M$ and the Mach-cone half-angle.",
        steps: [
          { label: "Mach number", text: "$M = 688/344 = 2.00$." },
          { label: "Angle", text: "$\\sin\\alpha = 1/M = 0.500$, so $\\alpha = 30.0^{\\circ}$." },
          { label: "Faster check", text: "At $M = 3$, $\\alpha = \\arcsin(1/3) = 19.5^{\\circ}$ — narrower, as claimed." },
        ],
        result: "$M = 2.00$, $\\alpha = 30.0^{\\circ}$.",
      },
      {
        title: "When is the boom heard",
        problem: "The Mach-2 jet above flies level at altitude $h = 5000\\ \\mathrm{m}$ directly over an observer. How far past overhead (horizontal distance) is the jet when the boom arrives?",
        steps: [
          { label: "Geometry", text: "The cone half-angle from the flight path satisfies $\\tan\\alpha = h/x$, where $x$ is the horizontal distance past overhead." },
          { label: "Solve", text: "$x = h/\\tan\\alpha = 5000/\\tan 30^{\\circ} = 5000/0.5774 = 8660\\ \\mathrm{m}$." },
          { label: "Delay", text: "At $688\\ \\mathrm{m/s}$ the jet covers that in $8660/688 = 12.6\\ \\mathrm{s}$ after passing overhead." },
        ],
        result: "Boom arrives when the jet is $8.66\\ \\mathrm{km}$ past, $12.6\\ \\mathrm{s}$ after overhead.",
      },
    ],
    keyTakeaways: [
      "Supersonic means $M = v_{S}/v > 1$; wavefronts pile into a shock cone.",
      "Cone geometry $\\sin\\alpha = 1/M$ narrows with speed.",
      "Booms trail continuously — a carpet, not a one-time bang.",
    ],
    quiz: [
      {
        q: "An aircraft at $M = 1.5$ produces a Mach-cone half-angle of:",
        options: ["$\\arcsin(1.5) = 90^{\\circ}$", "$\\arcsin(1/1.5) \\approx 41.8^{\\circ}$", "$\\arccos(1.5)$", "$48.2^{\\circ}$ exactly"],
        answer: 1,
        explanation: "$\\sin\\alpha = 1/M = 0.6667$, so $\\alpha = 41.8^{\\circ}$.",
      },
      {
        q: "People on the ground hear a sonic boom:",
        options: ["Only at the instant the plane breaks the sound barrier", "Continuously along the flight path as the cone sweeps over each point", "Only if the plane accelerates", "Only above Mach 3"],
        answer: 1,
        explanation: "The shock cone trails the aircraft for the whole supersonic leg; each ground point hears it once as the cone passes.",
      },
      {
        q: "The water-wave analogue of a sonic boom is:",
        options: ["A tide", "A ship's bow wave when the ship outruns surface waves", "A tsunami in deep water", "Capillary ripples"],
        answer: 1,
        explanation: "Same geometry $\\sin\\alpha = v_{\\mathrm{wave}}/v_{\\mathrm{source}}$ whenever a source outruns its waves.",
      },
    ],
  },
]
