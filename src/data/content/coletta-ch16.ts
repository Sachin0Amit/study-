import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 16: Mechanical Waves; Sound (Sections 16.1 – 16.6)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh16Content: SectionContent[] = [
  {
    sectionId: "coletta-ch16-s1",
    readingTime: 6,
    intro: "A wave carries energy and momentum through a medium without carrying the medium itself, from ripples on a string to sound in air. Coletta begins with the vocabulary every later section uses: transverse versus longitudinal motion, wavelength, frequency, amplitude, and the universal relation $v = f\\lambda$.",
    objectives: [
      "Distinguish transverse from longitudinal waves and identify wavelength, frequency, period, and amplitude on a wave diagram",
      "Apply the wave relation $v = f\\lambda$ to strings, sound, and water waves",
      "Explain why wave speed is set by the medium while frequency is set by the source"
    ],
    concepts: [
      {
        term: "Mechanical wave",
        kind: "definition",
        statement: "A **mechanical wave** is a traveling disturbance in which particles of the medium oscillate about equilibrium while the pattern advances; energy moves forward but the matter does not.",
        detail: "A cork on water bobs up and down as the ripple passes yet ends where it started, which is the signature that the wave transports energy rather than mass."
      },
      {
        term: "Transverse versus longitudinal",
        kind: "definition",
        statement: "In a **transverse** wave the medium oscillates perpendicular to the propagation direction, as on a shaken string; in a **longitudinal** wave it oscillates parallel to it, as compressions and rarefactions in sound with displacement $s(x,t)$ along $x$.",
        detail: "Only transverse waves can be polarized laterally, while sound in air is purely longitudinal because air has no shear stiffness to restore a sideways displacement."
      },
      {
        term: "Wavelength, frequency, and period",
        kind: "notation",
        statement: "The **wavelength** $\\lambda$ is the distance one cycle occupies, the **frequency** $f$ is cycles per second in hertz, and the **period** $T = 1/f$ is seconds per cycle, with angular frequency $\\omega = 2\\pi f$ and wave number $k = 2\\pi/\\lambda$.",
        detail: "Hearing spans roughly $20$ Hz to $20{,}000$ Hz, so at $v \\approx 343$ m/s audible wavelengths run from about $17$ m down to $1.7$ cm."
      },
      {
        term: "Wave speed relation",
        kind: "theorem",
        statement: "Every periodic wave satisfies $v = f\\lambda$: in one period $T$ the pattern advances exactly one wavelength, so $v = \\lambda/T = f\\lambda$.",
        detail: "The source fixes $f$ and the medium fixes $v$, so $\\lambda$ adjusts at every boundary; doubling the shake rate halves the spacing of crests on the same string."
      },
      {
        term: "Amplitude and energy",
        kind: "insight",
        statement: "The **amplitude** $A$ is the maximum displacement from equilibrium, and the energy carried scales as $A^{2}$ with loudness and brightness following the same square law.",
        detail: "Doubling how hard a string is plucked quadruples the radiated power, which is why intensity formulas later all contain a squared amplitude."
      }
    ],
    figures: [
      {
        caption: "Transverse wave with wavelength $\\lambda$ and amplitude $A$ traveling at $v = f\\lambda$",
        svg: '<svg role="img" aria-label="Transverse wave with wavelength lambda and amplitude A traveling at v = flambda" viewBox="0 0 400 160" width="100%" height="160"><line x1="0" y1="80" x2="400" y2="80" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" opacity="0.5"/><path d="M0,80 C40,20 80,20 120,80 S200,140 240,80 S320,20 400,80" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="120" y1="30" x2="240" y2="30" stroke="currentColor" stroke-width="1.2"/><polygon points="120,30 130,26 130,34" fill="currentColor"/><polygon points="240,30 230,26 230,34" fill="currentColor"/><text x="180" y="22" text-anchor="middle" font-size="13" fill="currentColor">λ</text><line x1="300" y1="80" x2="330" y2="42" stroke="currentColor" stroke-width="1.2"/><text x="342" y="52" font-size="13" fill="currentColor">A</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Wavelength of middle C",
        problem: "Middle C has frequency $f = 262$ Hz. What is its wavelength in air at $v = 343$ m/s?",
        steps: [
          { label: "Write the wave relation", text: "From $v = f\\lambda$, solve $\\lambda = v/f$." },
          { label: "Insert numbers", text: "$\\lambda = 343/262 \\approx 1.309$ m." },
          { label: "Check", text: "About $1.3$ m, comparable to the length of a cello string scale, which is sensible for a low musical tone." }
        ],
        result: "$\\lambda \\approx 1.31$ m."
      },
      {
        title: "Shake rate on a rope",
        problem: "Crests $2.5$ m apart travel down a rope at $7.5$ m/s. What is the frequency and period of the hand shaking the rope?",
        steps: [
          { label: "Solve for frequency", text: "$f = v/\\lambda = 7.5/2.5 = 3.0$ Hz." },
          { label: "Period", text: "$T = 1/f = 1/3.0 \\approx 0.333$ s per shake." },
          { label: "Interpret", text: "Three full up-down cycles per second produce the observed $2.5$ m spacing at that speed." }
        ],
        result: "$f = 3.0$ Hz and $T \\approx 0.33$ s."
      }
    ],
    keyTakeaways: [
      "Waves transport energy through oscillation about equilibrium, not bulk motion of the medium.",
      "The relation $v = f\\lambda$ ties source-controlled frequency to medium-controlled speed.",
      "Transverse means sideways motion and longitudinal means along-motion, as in sound."
    ],
    quiz: [
      {
        q: "Crests $0.50$ m apart pass a post at $4$ per second. What is the wave speed?",
        options: ["$0.125$ m/s", "$2.0$ m/s", "$4.5$ m/s", "$8.0$ m/s"],
        answer: 1,
        explanation: "Here $f = 4$ Hz and $\\lambda = 0.50$ m, so $v = f\\lambda = 2.0$ m/s."
      },
      {
        q: "A sound source doubles its frequency in the same air. What happens to the wavelength?",
        options: ["It halves", "It stays the same", "It quadruples", "It doubles"],
        answer: 0,
        explanation: "Speed $v$ is fixed by the medium, so $\\lambda = v/f$ halves when $f$ doubles."
      },
      {
        q: "Which statement correctly describes a mechanical wave?",
        options: ["Particles move at the wave speed", "Frequency is determined by the medium", "Matter is carried forward with the wave", "Energy is carried without net motion of the medium"],
        answer: 3,
        explanation: "The medium oscillates about equilibrium while the energy pattern advances; frequency comes from the source."
      }
    ]
  },
  {
    sectionId: "coletta-ch16-s2",
    readingTime: 6,
    intro: "Why does sound take seconds to cross a stadium while a string snap is nearly instant? Coletta shows that wave speed is a property of the medium: tension and mass density for strings, elasticity and inertia for sound. The same square-root pattern governs both.",
    objectives: [
      "Compute string wave speed from $v = \\sqrt{F/\\mu}$ and explain each dependence",
      "State the speed of sound in air and how it varies with temperature",
      "Compare wave speeds across strings, solids, liquids, and gases"
    ],
    concepts: [
      {
        term: "String wave speed",
        kind: "law",
        statement: "Transverse waves on a string obey $v = \\sqrt{F/\\mu}$, where $F$ is the tension and $\\mu = m/L$ is the linear mass density.",
        detail: "Tightening a guitar string raises $F$ and the pitch, while a thicker wound string raises $\\mu$ and lowers it at the same tension."
      },
      {
        term: "Speed of sound in air",
        kind: "definition",
        statement: "At $20^{\\circ}$C sound travels at about $v \\approx 343$ m/s, increasing roughly $0.6$ m/s per degree as $v \\approx 331\\sqrt{T/273}$ m/s with $T$ in kelvin.",
        detail: "At $0^{\\circ}$C the speed is about $331$ m/s, so a $20$-degree rise adds roughly $12$ m/s to every timing calculation."
      },
      {
        term: "Elasticity versus inertia",
        kind: "insight",
        statement: "Every wave speed has the form $v = \\sqrt{\\text{stiffness}/\\text{density}}$: stiffer media snap back faster and denser media respond more sluggishly.",
        detail: "Steel carries sound near $5000$ m/s and water near $1480$ m/s because their stiffness outweighs their density, while light air is slow despite its low density."
      },
      {
        term: "Temperature dependence",
        kind: "theorem",
        statement: "For an ideal gas the sound speed $v = \\sqrt{\\gamma P/\\rho} = \\sqrt{\\gamma RT/M}$ depends on absolute temperature but not on pressure at fixed temperature.",
        detail: "Doubling absolute temperature raises the speed by $\\sqrt{2}$, while compressing the gas at fixed temperature raises stiffness and density together so $v$ is unchanged."
      },
      {
        term: "Reflected and transmitted waves",
        kind: "insight",
        statement: "When a wave meets a boundary, part reflects and part transmits, with the reflected pulse inverting if the end is fixed and staying upright if the end is free.",
        detail: "This inversion rule is the seed of standing-wave nodes at fixed ends and antinodes at free ends in pipes and strings."
      }
    ],
    examples: [
      {
        title: "Speed on a guitar string",
        problem: "A steel string of mass $4.0$ g and length $0.65$ m is tensioned to $140$ N. Find the wave speed.",
        steps: [
          { label: "Linear density", text: "$\\mu = m/L = 0.0040/0.65 \\approx 6.15 \\times 10^{-3}$ kg/m." },
          { label: "Wave speed", text: "$v = \\sqrt{F/\\mu} = \\sqrt{140/6.15 \\times 10^{-3}} = \\sqrt{22764} \\approx 151$ m/s." },
          { label: "Check", text: "Fundamental $f = v/2L \\approx 151/1.30 \\approx 116$ Hz, near a low guitar pitch, which is plausible." }
        ],
        result: "$v \\approx 1.5 \\times 10^{2}$ m/s."
      },
      {
        title: "Lightning distance by thunder",
        problem: "Thunder arrives $6.0$ s after a flash on a $25^{\\circ}$C day. How far away was the strike?",
        steps: [
          { label: "Sound speed", text: "$v \\approx 331 + 0.6(25) = 346$ m/s." },
          { label: "Distance", text: "$d = vt = 346 \\times 6.0 = 2076$ m." },
          { label: "Light travel", text: "Light covers this in microseconds, so the delay is essentially all sound travel time." }
        ],
        result: "About $2.1$ km away."
      }
    ],
    keyTakeaways: [
      "String speed $v = \\sqrt{F/\\mu}$ rises with tension and falls with mass density.",
      "Sound in air is about $343$ m/s at room temperature and grows with $\\sqrt{T}$.",
      "All wave speeds balance stiffness against inertia in a square root."
    ],
    quiz: [
      {
        q: "Tension on a string is quadrupled with the same string. Wave speed changes by a factor of:",
        options: ["$16$", "$1/2$", "$2$", "$4$"],
        answer: 2,
        explanation: "Since $v \\propto \\sqrt{F}$, four times the tension doubles the speed."
      },
      {
        q: "Sound travels fastest in which medium?",
        options: ["Cold air", "Warm air", "Water", "Steel"],
        answer: 3,
        explanation: "Steel has enormous stiffness relative to its density, giving speeds near $5000$ m/s versus $1480$ m/s in water and $340$ m/s in air."
      },
      {
        q: "A pulse on a string reaches a wall-clamped end. The reflected pulse:",
        options: ["Is inverted", "Vanishes completely", "Doubles in wavelength", "Is upright and faster"],
        answer: 0,
        explanation: "A fixed end cannot move, so the reflected pulse must cancel the displacement there, which inverts it."
      }
    ]
  },
  {
    sectionId: "coletta-ch16-s3",
    readingTime: 7,
    intro: "A passing siren slides from high to low pitch even though the siren itself never changes. Coletta derives the Doppler shift for moving sources and moving observers separately, because the wavelength-bunching and wave-meeting mechanisms differ. The sign conventions are everything.",
    objectives: [
      "Apply the moving-source and moving-observer Doppler formulas with correct signs",
      "Explain the pitch-drop asymmetry using wavefront bunching versus encounter rate",
      "Solve two-sided motion and connect supersonic sources to shock waves"
    ],
    concepts: [
      {
        term: "Doppler effect",
        kind: "definition",
        statement: "The **Doppler effect** is the shift of observed frequency when source and observer move relative to the medium, with approach raising $f$ and recession lowering it.",
        detail: "It applies to sound, water waves, and light, but for sound the medium picks out a preferred frame so source and observer motion enter differently."
      },
      {
        term: "Moving source formula",
        kind: "theorem",
        statement: "A source moving at $v_{s}$ toward a stationary observer compresses the wavelength to $\\lambda^{\\prime} = (v - v_{s})/f$, giving $f^{\\prime} = f\\,v/(v - v_{s})$, with $v + v_{s}$ in the denominator for recession.",
        detail: "The shift comes from bunching wavefronts in space: the source chases its own crests on approach and stretches them on retreat."
      },
      {
        term: "Moving observer formula",
        kind: "theorem",
        statement: "An observer moving at $v_{o}$ toward a stationary source meets waves faster, giving $f^{\\prime} = f\\,(v + v_{o})/v$, with a minus sign for motion away.",
        detail: "Here the wavelength in the medium is unchanged and only the encounter rate shifts, so the formula is linear in $v_{o}$ rather than reciprocal."
      },
      {
        term: "General Doppler formula",
        kind: "method",
        statement: "For motion along the line joining source and observer, $f^{\\prime} = f\\,(v \\pm v_{o})/(v \\mp v_{s})$, taking the upper signs for approach and the lower signs for recession.",
        detail: "Coletta urges checking limits: $v_{s} \\to 0$ recovers the observer formula and $v_{o} \\to 0$ recovers the source formula."
      },
      {
        term: "Supersonic motion and shock waves",
        kind: "insight",
        statement: "When $v_{s} > v$, wavefronts pile into a conical **shock wave** with half-angle $\\sin\\theta = v/v_{s}$, heard as a sonic boom rather than a shifted tone.",
        detail: "The denominator $v - v_{s}$ would go negative, signaling that the steady-frequency picture breaks down and crests arrive as one impulsive cone."
      }
    ],
    figures: [
      {
        caption: "Wavefront bunching ahead of an approaching source shortens $\\lambda^{\\prime}$ and raises $f^{\\prime}$",
        svg: '<svg role="img" aria-label="Wavefront bunching ahead of an approaching source shortens lambda^prime and raises f^prime" viewBox="0 0 400 160" width="100%" height="160"><circle cx="120" cy="80" r="60" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.5"/><circle cx="120" cy="80" r="40" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.7"/><circle cx="120" cy="80" r="20" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="260" cy="80" r="60" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.5"/><circle cx="260" cy="80" r="44" fill="none" stroke="currentColor" stroke-width="1.2" opacity="0.7"/><circle cx="260" cy="80" r="28" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="120" cy="80" r="4" fill="currentColor"/><circle cx="260" cy="80" r="4" fill="currentColor"/><line x1="120" y1="80" x2="260" y2="80" stroke="currentColor" stroke-width="1" stroke-dasharray="4 3"/><text x="120" y="150" text-anchor="middle" font-size="12" fill="currentColor">stationary</text><text x="260" y="150" text-anchor="middle" font-size="12" fill="currentColor">moving right: bunched ahead</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Siren approaching",
        problem: "An ambulance siren emits $700$ Hz while driving at $30$ m/s toward a stationary listener. Take $v = 343$ m/s. What frequency is heard?",
        steps: [
          { label: "Choose formula", text: "Moving source approaching: $f^{\\prime} = fv/(v - v_{s})$." },
          { label: "Compute", text: "$f^{\\prime} = 700 \\times 343/(343 - 30) = 700 \\times 343/313 \\approx 700 \\times 1.0958 \\approx 767$ Hz." },
          { label: "Sense check", text: "A rise of about $67$ Hz, nearly a whole tone, matches the familiar siren wail on approach." }
        ],
        result: "About $7.7 \\times 10^{2}$ Hz heard."
      },
      {
        title: "Observer driving away",
        problem: "A driver recedes from a $500$ Hz factory whistle at $20$ m/s with $v = 343$ m/s. What frequency reaches the driver?",
        steps: [
          { label: "Choose formula", text: "Moving observer receding: $f^{\\prime} = f(v - v_{o})/v$." },
          { label: "Compute", text: "$f^{\\prime} = 500 \\times (343 - 20)/343 = 500 \\times 323/343 \\approx 500 \\times 0.9417 \\approx 471$ Hz." },
          { label: "Compare", text: "The drop of $29$ Hz is gentler than a source at the same speed would produce, showing the asymmetry." }
        ],
        result: "About $471$ Hz heard."
      }
    ],
    keyTakeaways: [
      "Approach raises and recession lowers observed frequency, with source motion bunching waves and observer motion changing encounter rate.",
      "Use $f^{\\prime} = f(v \\pm v_{o})/(v \\mp v_{s})$ with upper signs for approach.",
      "Supersonic sources replace the tone with a conical shock wave and sonic boom."
    ],
    quiz: [
      {
        q: "A source moves toward a stationary observer at $v_{s}$. The observed frequency is:",
        options: ["$f(v+v_{o})/v$", "$fv/(v+v_{s})$", "$f(v-v_{s})/v$", "$fv/(v-v_{s})$"],
        answer: 3,
        explanation: "Source motion compresses the wavelength, giving the reciprocal form $fv/(v - v_{s})$ on approach."
      },
      {
        q: "An observer walks toward a stationary siren. The wavelength in the air:",
        options: ["Doubles", "Shortens", "Lengthens", "Is unchanged"],
        answer: 3,
        explanation: "Observer motion does not rebunch the wavefronts; it only raises the rate at which they are met."
      },
      {
        q: "A jet exceeds the speed of sound. A ground listener hears:",
        options: ["An extremely high-pitched tone", "No shift at all", "A sonic boom as the shock cone passes", "The normal engine tone delayed"],
        answer: 2,
        explanation: "For $v_{s} > v$ the crests pile into a Mach cone, arriving as one impulsive boom."
      }
    ]
  },
  {
    sectionId: "coletta-ch16-s4",
    readingTime: 6,
    intro: "Loudness spans a trillionfold range of power, so Coletta pairs the physics of intensity with the logarithmic decibel scale that matches human hearing. The inverse-square falloff of intensity explains why doubling distance matters so much. This section turns faint-versus-deafening into numbers.",
    objectives: [
      "Relate power, intensity, and distance through $I = P/4\\pi r^{2}$",
      "Convert between intensity and decibels with $\\beta = 10\\log(I/I_{0})$",
      "Explain why equal decibel steps feel like equal loudness steps"
    ],
    concepts: [
      {
        term: "Wave power",
        kind: "definition",
        statement: "The **power** $P$ of a wave is the energy per unit time the source radiates, in watts, growing as the square of amplitude and the square of frequency.",
        detail: "A speaker driven twice as hard in cone excursion radiates four times the acoustic power at the same pitch."
      },
      {
        term: "Intensity",
        kind: "definition",
        statement: "**Intensity** $I = P/A$ is power per unit area in W/m$^{2}$, and for a point source spreading over spheres $I = P/4\\pi r^{2}$.",
        detail: "Doubling the distance quarters the intensity, so each doubling of range costs about $6$ dB of level."
      },
      {
        term: "Decibel scale",
        kind: "notation",
        statement: "Sound level $\\beta = 10\\log_{10}(I/I_{0})$ in decibels uses the hearing threshold $I_{0} = 10^{-12}$ W/m$^{2}$ as its zero, compressing twelve orders of magnitude into $0$–$120$ dB.",
        detail: "A $10$ dB rise means ten times the intensity, while a $3$ dB rise means roughly double the intensity."
      },
      {
        term: "Logarithmic hearing",
        kind: "insight",
        statement: "Human loudness perception is approximately logarithmic, so equal ratios of intensity sound like equal steps, which is exactly what the decibel scale encodes.",
        detail: "That is why $50$ dB to $60$ dB feels like a similar jump as $80$ dB to $90$ dB even though the second adds far more watts per square meter."
      },
      {
        term: "Adding incoherent sources",
        kind: "method",
        statement: "Intensities of independent sources add, $I = I_{1} + I_{2}$, so two identical $70$ dB machines give $73$ dB, not $140$ dB.",
        detail: "In decibels the rule is $\\beta = 10\\log(10^{\\beta_{1}/10} + 10^{\\beta_{2}/10})$, which students should evaluate numerically rather than by adding levels."
      }
    ],
    examples: [
      {
        title: "Decibels of a busy street",
        problem: "A street produces intensity $I = 3.2 \\times 10^{-5}$ W/m$^{2}$. What is the sound level?",
        steps: [
          { label: "Form the ratio", text: "$I/I_{0} = 3.2 \\times 10^{-5}/10^{-12} = 3.2 \\times 10^{7}$." },
          { label: "Take the log", text: "$\\log_{10}(3.2 \\times 10^{7}) = 7 + \\log_{10}3.2 \\approx 7 + 0.505 = 7.505$." },
          { label: "Multiply by 10", text: "$\\beta = 10 \\times 7.505 \\approx 75$ dB, a loud-traffic value." }
        ],
        result: "About $75$ dB."
      },
      {
        title: "Intensity at double distance",
        problem: "A speaker radiates $8.0$ W uniformly. Compare intensities at $2.0$ m and $4.0$ m.",
        steps: [
          { label: "At 2 meters", text: "$I_{2} = 8.0/(4\\pi \\times 4.0) = 8.0/50.27 \\approx 0.159$ W/m$^{2}$." },
          { label: "At 4 meters", text: "$I_{4} = 8.0/(4\\pi \\times 16.0) = 8.0/201.1 \\approx 0.0398$ W/m$^{2}$." },
          { label: "Ratio", text: "$I_{4}/I_{2} = 1/4$ exactly by the inverse square, a drop of about $6$ dB." }
        ],
        result: "$0.16$ W/m$^{2}$ versus $0.040$ W/m$^{2}$."
      }
    ],
    keyTakeaways: [
      "Intensity $I = P/4\\pi r^{2}$ falls with the square of distance from a point source.",
      "Decibels $\\beta = 10\\log(I/I_{0})$ compress the hearing range into $0$–$120$ dB.",
      "Independent intensities add, so doubling sources adds only $3$ dB."
    ],
    quiz: [
      {
        q: "Intensity is multiplied by $100$. The level rises by:",
        options: ["$10$ dB", "$20$ dB", "$100$ dB", "$2$ dB"],
        answer: 1,
        explanation: "$\\Delta\\beta = 10\\log 100 = 10 \\times 2 = 20$ dB."
      },
      {
        q: "Distance from a point source triples. Intensity becomes:",
        options: ["$1/9$ of before", "Unchanged", "$1/3$ of before", "$1/6$ of before"],
        answer: 0,
        explanation: "The same power spreads over $4\\pi(3r)^{2} = 9$ times the area."
      },
      {
        q: "Two identical $60$ dB fans run together. The combined level is:",
        options: ["$120$ dB", "$60$ dB", "$63$ dB", "$66$ dB"],
        answer: 2,
        explanation: "Intensity doubles, and $10\\log 2 \\approx 3$ dB, so the total is about $63$ dB."
      }
    ]
  },
  {
    sectionId: "coletta-ch16-s5",
    readingTime: 5,
    intro: "Behind every traveling wave is an individual particle of the medium shaking back and forth in simple harmonic motion. Coletta writes the clock of that motion explicitly as $y = A\\sin(\\omega t + \\phi)$ and connects wave properties to the oscillator physics of Chapter 15. Phase tells you where in the cycle each particle is.",
    objectives: [
      "Write the SHM displacement $y = A\\sin(\\omega t + \\phi)$ and interpret each symbol",
      "Find particle velocity and acceleration by differentiating the displacement",
      "Explain the role of phase constant $\\phi$ in setting the starting point"
    ],
    concepts: [
      {
        term: "Sinusoidal particle motion",
        kind: "definition",
        statement: "Each particle in a sinusoidal wave executes SHM with $y(t) = A\\sin(\\omega t + \\phi)$, where $\\omega = 2\\pi f$ sets the speed of oscillation and $\\phi$ sets where the cycle starts.",
        detail: "A snapshot of the whole string is $y(x) = A\\sin(kx + \\phi^{\\prime})$, the same sine shape written across space instead of time."
      },
      {
        term: "Particle velocity and acceleration",
        kind: "theorem",
        statement: "Differentiating gives $v_{y} = A\\omega\\cos(\\omega t + \\phi)$ and $a_{y} = -A\\omega^{2}\\sin(\\omega t + \\phi) = -\\omega^{2}y$, with maxima $v_{max} = A\\omega$ and $a_{max} = A\\omega^{2}$.",
        detail: "The particle moves fastest through equilibrium and momentarily stops at the crests, exactly opposite to the displacement curve."
      },
      {
        term: "Phase constant",
        kind: "notation",
        statement: "The **phase constant** $\\phi$ shifts the sine curve in time: $\\phi = 0$ starts at zero moving up, $\\phi = \\pi/2$ starts at the crest, and $\\phi = \\pi$ starts at zero moving down.",
        detail: "Phase differences, not absolute phases, decide constructive versus destructive interference when waves meet."
      },
      {
        term: "Traveling-wave function",
        kind: "method",
        statement: "The full disturbance $y(x,t) = A\\sin(kx \\mp \\omega t + \\phi)$ moves right for the minus sign and left for the plus sign, with $v = \\omega/k = f\\lambda$.",
        detail: "Freezing $t$ shows the spatial sine of wavelength $2\\pi/k$, while freezing $x$ shows the temporal sine of period $2\\pi/\\omega$."
      },
      {
        term: "Wave versus particle speed",
        kind: "insight",
        statement: "The **wave speed** $v$ carries the pattern forward while the **particle speed** $v_{y}$ oscillates sideways, and the two must never be confused.",
        detail: "A sound wave crosses a room at $343$ m/s while each air molecule merely jiggles micrometers at up to a few cm/s."
      }
    ],
    figures: [
      {
        caption: "One medium particle in SHM: $y = A\\sin(\\omega t)$ with velocity leading by a quarter cycle",
        svg: '<svg role="img" aria-label="One medium particle in SHM: y = Asin(omega t) with velocity leading by a quarter cycle" viewBox="0 0 400 160" width="100%" height="160"><line x1="30" y1="80" x2="380" y2="80" stroke="currentColor" stroke-width="1" opacity="0.5"/><path d="M30,80 C70,20 110,20 150,80 S230,140 270,80 S350,20 380,55" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M30,80 C70,140 110,140 150,80 S230,20 270,80" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4" opacity="0.6"/><circle cx="150" cy="80" r="5" fill="currentColor"/><text x="150" y="140" text-anchor="middle" font-size="12" fill="currentColor">particle at equilibrium, fastest</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Maximum jiggle speed",
        problem: "An air molecule in a $440$ Hz tone oscillates with amplitude $8.0$ micrometers. What is its maximum speed?",
        steps: [
          { label: "Angular frequency", text: "$\\omega = 2\\pi f = 2\\pi(440) \\approx 2765$ rad/s." },
          { label: "Maximum speed", text: "$v_{max} = A\\omega = 8.0 \\times 10^{-6} \\times 2765 \\approx 0.0221$ m/s." },
          { label: "Compare", text: "About $2$ cm/s of jiggle versus $343$ m/s of wave travel, a factor of fifteen thousand." }
        ],
        result: "$v_{max} \\approx 2.2$ cm/s."
      },
      {
        title: "Reading the phase",
        problem: "At $t = 0$ a string particle is at $y = A/2$ moving downward. What is $\\phi$ in $y = A\\sin(\\omega t + \\phi)$?",
        steps: [
          { label: "Position condition", text: "$\\sin\\phi = 1/2$ gives $\\phi = \\pi/6$ or $5\\pi/6$." },
          { label: "Velocity condition", text: "$v_{y} = A\\omega\\cos\\phi$ must be negative, so $\\cos\\phi < 0$." },
          { label: "Select", text: "Only $\\phi = 5\\pi/6$ has positive sine and negative cosine." }
        ],
        result: "$\\phi = 5\\pi/6$."
      }
    ],
    keyTakeaways: [
      "Each medium particle performs SHM with $y = A\\sin(\\omega t + \\phi)$.",
      "Velocity and acceleration follow by differentiation with maxima $A\\omega$ and $A\\omega^{2}$.",
      "Wave speed moves the pattern while particle speed merely jiggles the medium."
    ],
    quiz: [
      {
        q: "For $y = A\\sin(\\omega t)$, the particle speed is maximum when:",
        options: ["$y = A$", "$y = 0$", "$y = A/2$", "Acceleration is maximum"],
        answer: 1,
        explanation: "Speed peaks at equilibrium where the slope of the sine is steepest; displacement and acceleration peak at the crests."
      },
      {
        q: "Frequency doubles at fixed amplitude. Maximum particle acceleration changes by:",
        options: ["Factor $2$", "Factor $4$", "Factor $8$", "Unchanged"],
        answer: 1,
        explanation: "Since $a_{max} = A\\omega^{2}$ and $\\omega = 2\\pi f$, doubling $f$ quadruples the acceleration."
      },
      {
        q: "In $y(x,t) = A\\sin(kx - \\omega t)$ the wave travels:",
        options: ["Right at $k/\\omega$", "Nowhere; it is standing", "Left at $\\omega/k$", "Right at $\\omega/k$"],
        answer: 3,
        explanation: "The minus sign with $kx - \\omega t$ keeps phase constant as $x$ increases with time, so it moves right at $v = \\omega/k$."
      }
    ]
  },
  {
    sectionId: "coletta-ch16-s6",
    readingTime: 7,
    intro: "When waves overlap they add displacement by displacement, and the sum produces beats, standing waves, and musical pitch. Coletta uses superposition to derive the beat frequency and the quantized modes of strings and pipes. These are the physics behind every tuned instrument.",
    objectives: [
      "State the superposition principle and derive the beat frequency $|f_{1}-f_{2}|$",
      "Find string harmonics from $f_{n} = nv/2L$ with nodes and antinodes",
      "Find open- and closed-pipe resonances and identify the missing harmonics"
    ],
    concepts: [
      {
        term: "Superposition principle",
        kind: "law",
        statement: "When waves overlap, the net displacement is the algebraic sum $y = y_{1} + y_{2}$ at each point, with constructive addition for in-phase crests and cancellation for out-of-phase crest-on-trough.",
        detail: "The waves pass through each other unchanged afterward, which is why two conversations can cross a room without scrambling."
      },
      {
        term: "Beats",
        kind: "theorem",
        statement: "Two tones of nearly equal frequency $f_{1}$ and $f_{2}$ alternate between loud and soft at the **beat frequency** $f_{b} = |f_{1} - f_{2}|$.",
        detail: "Piano tuners listen for beats against a reference fork and tighten the string until the beating slows to zero."
      },
      {
        term: "Standing wave",
        kind: "definition",
        statement: "A **standing wave** is the stationary pattern of **nodes** (never moving) and **antinodes** (maximum motion) formed by two identical waves traveling in opposite directions.",
        detail: "No net energy flows past a node, so the pattern stores vibration between reflections instead of carrying it away."
      },
      {
        term: "String harmonics",
        kind: "theorem",
        statement: "A string fixed at both ends fits $L = n\\lambda_{n}/2$, giving harmonics $f_{n} = nv/2L$ for $n = 1, 2, 3, \\dots$ with $f_{1}$ the fundamental.",
        detail: "Touching the midpoint forces a node there and isolates the even harmonics, the flageolet trick of string players."
      },
      {
        term: "Pipe resonances",
        kind: "theorem",
        statement: "An **open** pipe has antinodes at both ends with $f_{n} = nv/2L$ for all $n$, while a **closed** pipe has a node at the stopped end with $f_{n} = nv/4L$ for odd $n = 1, 3, 5, \\dots$ only.",
        detail: "A clarinet sounds hollow beside a flute of the same length because its closed bore suppresses every even harmonic."
      },
      {
        term: "Resonance tuning method",
        kind: "method",
        statement: "To find an unknown frequency, count beats against a standard or slide a pipe to resonance: $f_{unknown} = f_{known} \\pm f_{b}$, resolved by checking whether raising the standard raises or lowers the beat rate.",
        detail: "Lengthening an air column lowers each resonance, so the direction the beats move identifies which side of the standard the unknown lies on."
      }
    ],
    examples: [
      {
        title: "Tuning with beats",
        problem: "A $512$ Hz fork and a piano string produce $4$ beats per second, and tightening the string lowers the beat rate. What is the string frequency?",
        steps: [
          { label: "Candidates", text: "$f = 512 \\pm 4$, so $508$ or $516$ Hz." },
          { label: "Use the tightening clue", text: "Tightening raises frequency; since the beat rate fell, the string was below and moving up toward $512$ Hz." },
          { label: "Decide", text: "The string must have been at $508$ Hz, rising toward unison." }
        ],
        result: "$508$ Hz."
      },
      {
        title: "Fundamental of a string",
        problem: "A $0.60$ m string with wave speed $240$ m/s is fixed at both ends. Find the fundamental and second harmonic.",
        steps: [
          { label: "Fundamental", text: "$f_{1} = v/2L = 240/1.20 = 200$ Hz." },
          { label: "Second harmonic", text: "$f_{2} = 2f_{1} = 400$ Hz with a node at the center." },
          { label: "Wavelengths", text: "$\\lambda_{1} = 1.20$ m and $\\lambda_{2} = 0.60$ m, each fitting the length rule." }
        ],
        result: "$f_{1} = 200$ Hz and $f_{2} = 400$ Hz."
      }
    ],
    keyTakeaways: [
      "Superposition adds displacements, producing beats at $|f_{1}-f_{2}|$.",
      "Fixed strings quantize to $f_{n} = nv/2L$ with nodes at the ends.",
      "Closed pipes keep only odd harmonics $f_{n} = nv/4L$ while open pipes keep all."
    ],
    quiz: [
      {
        q: "Forks of $440$ Hz and $444$ Hz sound together. The beat frequency is:",
        options: ["$442$ Hz", "$1$ Hz", "$2$ Hz", "$4$ Hz"],
        answer: 3,
        explanation: "Beats occur at the difference, $|444 - 440| = 4$ Hz."
      },
      {
        q: "A string fixed at both ends vibrates in its third harmonic. How many nodes (including ends) appear?",
        options: ["$2$", "$3$", "$4$", "$6$"],
        answer: 2,
        explanation: "The $n$th harmonic has $n + 1$ nodes, so $n = 3$ gives $4$ nodes."
      },
      {
        q: "A closed pipe of length $L$ sounds its fundamental. Its wavelength is:",
        options: ["$2L$", "$4L$", "$L/2$", "$L$"],
        answer: 1,
        explanation: "A quarter wavelength fits in the pipe (node to antinode), so $\\lambda = 4L$."
      },
      {
        q: "Two identical waves travel in opposite directions on a string. The result is:",
        options: ["Cancellation everywhere always", "A beat pattern in space", "A traveling wave of double speed", "A standing wave with nodes"],
        answer: 3,
        explanation: "Equal opposite waves sum to a stationary node-antinode pattern that stores energy."
      }
    ]
  }
]
