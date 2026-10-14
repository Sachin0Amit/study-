import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 15
// Mechanical Waves (Secs 15.1–15.8)
// ============================================================================

export const youngCh15Content: SectionContent[] = [
  {
    sectionId: "young-ch15-s1",
    readingTime: 4,
    intro: "Mechanical waves carry energy through matter without carrying matter: shaking one end sends a disturbance down the line. This section sorts transverse from longitudinal waves and pulses from periodic trains.",
    objectives: [
      "Define mechanical waves via medium disturbance",
      "Distinguish transverse from longitudinal motion",
      "Distinguish pulses from periodic wavetrains"
    ],
    concepts: [
      {
        term: "Mechanical wave",
        kind: "definition",
        statement: "A **mechanical wave** is a **traveling disturbance** in a medium, transporting **energy** while matter oscillates locally.",
        detail: "Stadium waves circle stands though fans stay seated — energy laps, people do not."
      },
      {
        term: "Transverse wave",
        kind: "definition",
        statement: "**Transverse**: medium oscillates **perpendicular** to travel (strings, water ripples, $S$-quakes).",
        detail: "Flick a rope sideways; the hump races forward while rope moves across."
      },
      {
        term: "Longitudinal wave",
        kind: "definition",
        statement: "**Longitudinal**: medium oscillates **parallel** to travel — compressions and rarefactions ($P$-quakes, sound, springs).",
        detail: "Slam a slinky end; density pulses march along the coils."
      },
      {
        term: "Pulse versus periodic",
        kind: "definition",
        statement: "A **pulse** is one shot; a **periodic wave** repeats every **period $T$** under continuous shaking.",
        detail: "Single flick versus steady $5\\ \\mathrm{Hz}$ hand oscillation."
      },
      {
        term: "Medium, not matter, travels",
        kind: "insight",
        statement: "**No net matter transport**: each particle orbits its equilibrium while the **pattern** advances at $v$.",
        detail: "Corks bob as swells pass; only the phase marches ashore."
      }
    ],
    examples: [
      {
        title: "Rope versus slinky",
        problem: "Classify a rope flick and a slinky shove.",
        steps: [
          { label: "Rope", text: "Sideways motion, forward travel: transverse." },
          { label: "Slinky", text: "Coil bunching along travel: longitudinal." },
          { label: "Energy", text: "Both carry hand work down the line without moving rope or coils along." }
        ],
        result: "Flick transverse; shove longitudinal."
      },
      {
        title: "Stadium wave speed",
        problem: "A stadium wave circles $400\\ \\mathrm{m}$ in $20\\ \\mathrm{s}$. Fans bob $0.50\\ \\mathrm{m}$. What travels?",
        steps: [
          { label: "Pattern", text: "$v = 400/20 = 20\\ \\mathrm{m/s}$ around." },
          { label: "Matter", text: "Each fan rises $0.50\\ \\mathrm{m}$ and sits — zero net transport." },
          { label: "Moral", text: "Phase laps at $20\\ \\mathrm{m/s}$; people stay home." }
        ],
        result: "Energy laps; matter bobs."
      }
    ],
    keyTakeaways: [
      "Waves move energy; media only oscillate.",
      "Across means transverse; along means longitudinal.",
      "Pulses are single; periodic trains repeat at $T$."
    ],
    quiz: [
      {
        q: "A mechanical wave transports:",
        options: ["Matter downstream", "Energy via local oscillation without net matter flow", "Nothing", "Only light"],
        answer: 1,
        explanation: "Particles orbit equilibrium; the disturbance advances."
      },
      {
        q: "Rope flicked sideways is:",
        options: ["Longitudinal", "Transverse", "Neither", "A pulse of light"],
        answer: 1,
        explanation: "Motion across travel defines transverse."
      },
      {
        q: "Sound in air is:",
        options: ["Transverse", "Longitudinal (compressions along travel)", "A surface wave only", "Electromagnetic"],
        answer: 1,
        explanation: "Air bunches and spreads along the propagation direction."
      }
    ]
  },
  {
    sectionId: "young-ch15-s2",
    readingTime: 5,
    intro: "Periodic waves repeat in space (wavelength $\\lambda$) and time (period $T$): $v = \\lambda f$. This section links speed, wavelength, and frequency and practices the most-used wave equation.",
    objectives: [
      "Define $\\lambda$, $T$, $f$, and amplitude for periodic waves",
      "Use $v = \\lambda f = \\lambda/T$",
      "Explain why $v$ is set by the medium, $f$ by the source"
    ],
    concepts: [
      {
        term: "Wavelength and period",
        kind: "definition",
        statement: "**Wavelength $\\lambda$** is crest-to-crest distance; **period $T$** is crest-to-crest time at one point.",
        detail: "Ocean $\\lambda = 50\\ \\mathrm{m}$, $T = 6.0\\ \\mathrm{s}$: slow heave, long span."
      },
      {
        term: "Wave speed equation",
        kind: "theorem",
        statement: "**$v = \\lambda f = \\lambda/T$**: one wavelength passes per period.",
        detail: "Above: $v = 50/6.0 = 8.33\\ \\mathrm{m/s}$ toward shore."
      },
      {
        term: "Source sets f, medium sets v",
        kind: "insight",
        statement: "**Frequency is inherited from the source**; **speed is fixed by the medium**; $\\lambda = v/f$ adjusts at boundaries.",
        detail: "$440\\ \\mathrm{Hz}$ tuning fork sings $440$ in air and water, but wavelengths differ ($0.78$ vs $3.4\\ \\mathrm{m}$)."
      },
      {
        term: "Amplitude of a wave",
        kind: "definition",
        statement: "**Amplitude $A$** is maximum medium displacement — loudness or brightness of the wave.",
        detail: "Doubling rope-shake height doubles $A$; energy quadruples (Sec 15.5)."
      },
      {
        term: "Wave number preview",
        kind: "notation",
        statement: "**$k = 2\\pi/\\lambda$** ($\\mathrm{rad/m}$) counts spatial radians — partner of $\\omega = 2\\pi f$.",
        detail: "$v = \\omega/k$ restates $\\lambda f$ in angular units."
      }
    ],
    figures: [
      {
        caption: "One $\\lambda$ passes per $T$: $v = \\lambda/T = \\lambda f$ along the propagation axis",
        svg: `<svg viewBox="0 0 720 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wavelength and period"><path d="M 60 90 Q 120 40 180 90 T 300 90 T 420 90 T 540 90" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="180" y1="90" x2="180" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="300" y1="90" x2="300" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><line x1="180" y1="150" x2="300" y2="150" stroke="currentColor" stroke-width="1.5"/><text x="240" y="170" font-size="12" text-anchor="middle" fill="currentColor">lambda</text><line x1="420" y1="90" x2="540" y2="90" stroke="currentColor" stroke-width="2"/><polygon points="540,90 526,84 526,96" fill="currentColor"/><text x="480" y="75" font-size="12" fill="currentColor">v</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Ocean swell",
        problem: "$\\lambda = 50\\ \\mathrm{m}$, $T = 6.0\\ \\mathrm{s}$. Find $v$ and $f$.",
        steps: [
          { label: "Frequency", text: "$f = 1/6.0 = 0.167\\ \\mathrm{Hz}$." },
          { label: "Speed", text: "$v = 50 \\times 0.167 = 8.33\\ \\mathrm{m/s}$." },
          { label: "Storm check", text: "Long $\\lambda$ outruns chop — dispersion sorts swells ashore." }
        ],
        result: "$0.167\\ \\mathrm{Hz}$; $8.33\\ \\mathrm{m/s}$."
      },
      {
        title: "Tuning fork in air",
        problem: "$440\\ \\mathrm{Hz}$ fork, $v = 344\\ \\mathrm{m/s}$. Find $\\lambda$.",
        steps: [
          { label: "Wavelength", text: "$\\lambda = 344/440 = 0.782\\ \\mathrm{m}$." },
          { label: "Water check", text: "In water ($1480\\ \\mathrm{m/s}$): $\\lambda = 3.36\\ \\mathrm{m}$ — same $f$." },
          { label: "Moral", text: "Source clocks $f$; medium paces $v$." }
        ],
        result: "$0.782\\ \\mathrm{m}$ in air."
      }
    ],
    keyTakeaways: [
      "$v = \\lambda f$ meters each cycle past a point.",
      "Sources dictate $f$; media dictate $v$.",
      "$\\lambda$ stretches or squeezes to satisfy both."
    ],
    quiz: [
      {
        q: "$\\lambda = 50\\ \\mathrm{m}$, $T = 6.0\\ \\mathrm{s}$ gives $v$:",
        options: ["$300\\ \\mathrm{m/s}$", "$8.33\\ \\mathrm{m/s}$", "$0.12\\ \\mathrm{m/s}$", "Zero"],
        answer: 1,
        explanation: "$\\lambda/T = 8.33\\ \\mathrm{m/s}$."
      },
      {
        q: "Crossing into faster medium with fixed $f$, $\\lambda$:",
        options: ["Shrinks", "Stretches ($\\lambda = v/f$)", "Vanishes", "Stays always"],
        answer: 1,
        explanation: "Same cycles per second spaced over faster travel."
      },
      {
        q: "$440\\ \\mathrm{Hz}$ in air ($344\\ \\mathrm{m/s}$) has $\\lambda$ about:",
        options: ["$344\\ \\mathrm{m}$", "$0.78\\ \\mathrm{m}$", "$440\\ \\mathrm{m}$", "$1.3\\ \\mathrm{mm}$"],
        answer: 1,
        explanation: "$344/440 = 0.782\\ \\mathrm{m}$."
      }
    ]
  },
  {
    sectionId: "young-ch15-s3",
    readingTime: 7,
    intro: "Sinusoidal traveling waves read $y = A\\sin(kx-\\omega t+\\phi)$: every particle does SHM while the pattern marches at $\\omega/k$. This section decodes each symbol and differentiates for particle velocity and acceleration.",
    objectives: [
      "Write $y(x,t) = A\\sin(kx \\mp \\omega t+\\phi)$ for $\\pm x$ travel",
      "Extract $A$, $k$, $\\omega$, $\\phi$ from wave data",
      "Compute $v_y$ and $a_y$ of medium particles"
    ],
    concepts: [
      {
        term: "Traveling-wave function",
        kind: "definition",
        statement: "**$y(x,t) = A\\sin(kx-\\omega t+\\phi)$** travels **$+x$** at **$v = \\omega/k$**; $+$ sign travels $-x$.",
        detail: "Freezing $t$ shows $\\sin kx$ in space; freezing $x$ shows $-\\sin\\omega t$ in time."
      },
      {
        term: "Wave number and angular frequency",
        kind: "notation",
        statement: "**$k = 2\\pi/\\lambda$**, **$\\omega = 2\\pi f = v k$** — spatial and temporal radians per unit.",
        detail: "$\\lambda = 2.0\\ \\mathrm{m}$, $f = 5.0\\ \\mathrm{Hz}$: $k = \\pi$, $\\omega = 10\\pi$, $v = 10\\ \\mathrm{m/s}$."
      },
      {
        term: "Phase constant",
        kind: "method",
        statement: "**$\\phi$ shifts** the wave at origin: $y(0,0) = A\\sin\\phi$; snapshots fix it.",
        detail: "Crest at origin at $t = 0$: $\\phi = \\pi/2$ (sine to cosine)."
      },
      {
        term: "Particle velocity",
        kind: "theorem",
        statement: "**$v_y = \\partial y/\\partial t = -\\omega A\\cos(kx-\\omega t+\\phi)$** — each particle does SHM at $\\omega$.",
        detail: "Peak $\\omega A$ crossing zero; rest at crests — transverse SHM per point."
      },
      {
        term: "Particle acceleration",
        kind: "theorem",
        statement: "**$a_y = -\\omega^2 y$** — SHM restoring per particle, max $\\omega^2A$ at crests.",
        detail: "Wave speed $v = \\omega/k$ is pattern pace, never $v_y$ particle pace."
      }
    ],
    examples: [
      {
        title: "Decoding a wave",
        problem: "$y = 0.060\\sin(\\pi x-10\\pi t)$ (SI). Find $A$, $\\lambda$, $f$, $v$, direction.",
        steps: [
          { label: "Read", text: "$A = 0.060\\ \\mathrm{m}$; $k = \\pi$: $\\lambda = 2.0\\ \\mathrm{m}$; $\\omega = 10\\pi$: $f = 5.0\\ \\mathrm{Hz}$." },
          { label: "Speed", text: "$v = 10\\pi/\\pi = 10\\ \\mathrm{m/s}$; minus sign: $+x$." },
          { label: "Particle peak", text: "$v_{y,\\max} = 10\\pi \\times 0.060 = 1.88\\ \\mathrm{m/s}$ — far below $v$." }
        ],
        result: "$6.0\\ \\mathrm{cm}$, $2.0\\ \\mathrm{m}$, $5.0\\ \\mathrm{Hz}$, $10\\ \\mathrm{m/s}$ $+x$."
      },
      {
        title: "Snapshot to function",
        problem: "At $t = 0$, $y = 0$ everywhere with positive slope in $x$; each particle heads $-y$. Write the form.",
        steps: [
          { label: "Space", text: "$y(x,0) = A\\sin kx$: $\\phi = 0$." },
          { label: "Time", text: "$v_y = -\\omega A < 0$ at origin: minus-sign ($+x$) traveler." },
          { label: "Function", text: "$y = A\\sin(kx-\\omega t)$." }
        ],
        result: "$y = A\\sin(kx-\\omega t)$ matches both snapshot and motion."
      }
    ],
    keyTakeaways: [
      "$A\\sin(kx\\mp\\omega t+\\phi)$ encodes shape, pace, and start.",
      "$v = \\omega/k$ is pattern speed; $\\omega A$ is particle speed.",
      "Freeze $t$ for space shape; freeze $x$ for time SHM."
    ],
    quiz: [
      {
        q: "$y = 0.060\\sin(\\pi x-10\\pi t)$ travels:",
        options: ["$-x$ at $10\\pi\\ \\mathrm{m/s}$", "$+x$ at $10\\ \\mathrm{m/s}$", "Zero speed", "$+y$ direction"],
        answer: 1,
        explanation: "$\\omega/k = 10$; minus sign sends $+x$."
      },
      {
        q: "Particle peak speed for above is:",
        options: ["$10\\ \\mathrm{m/s}$", "$1.88\\ \\mathrm{m/s}$", "$0.060\\ \\mathrm{m/s}$", "Zero"],
        answer: 1,
        explanation: "$\\omega A = 10\\pi \\times 0.060 = 1.88\\ \\mathrm{m/s}$."
      },
      {
        q: "Crest at origin at $t = 0$ needs phase:",
        options: ["$0$", "$\\pi/2$", "$\\pi$", "$2\\pi$ always zero"],
        answer: 1,
        explanation: "$A\\sin\\phi = A$ forces $\\phi = \\pi/2$."
      }
    ]
  },
  {
    sectionId: "young-ch15-s4",
    readingTime: 6,
    intro: "String wave speed follows tension and heft: $v = \\sqrt{F/\\mu}$. This section derives it by Newton second law on a hump and tunes strings by tension, length, and gauge.",
    objectives: [
      "State $v = \\sqrt{F/\\mu}$ for transverse string waves",
      "Derive it from centripetal dynamics of a hump",
      "Tune pitch by $F$, $\\mu$, and $L$"
    ],
    concepts: [
      {
        term: "String wave speed",
        kind: "theorem",
        statement: "**$v = \\sqrt{F/\\mu}$** with tension $F$ ($\\mathrm{N}$) and linear density $\\mu$ ($\\mathrm{kg/m}$).",
        detail: "$F = 100\\ \\mathrm{N}$, $\\mu = 0.010$: $v = 100\\ \\mathrm{m/s}$."
      },
      {
        term: "Derivation idea",
        kind: "theorem",
        statement: "A hump of radius $R$ needs **$F_{\\mathrm{rad}} = \\mu\\Delta s\\,v^2/R$** from tension components **$2F\\sin(\\theta/2) \\approx F\\Delta s/R$** — cancel $\\Delta s/R$ for $v^2 = F/\\mu$.",
        detail: "Tension curvature funds the centripetal turn of each moving hump."
      },
      {
        term: "Tension versus heft",
        kind: "insight",
        statement: "**Taut speeds up** ($\\sqrt{F}$), **heavy slows down** ($1/\\sqrt{\\mu}$) — guitar logic.",
        detail: "Tuning pegs raise $F$; bass strings fatten $\\mu$."
      },
      {
        term: "Temperature and stretch",
        kind: "insight",
        statement: "Warming **loosens $F$** (flat pitch); stretching **thins $\\mu$** and raises $F$ (sharp).",
        detail: "Players retune as stages heat — physics in the pegs."
      },
      {
        term: "General media preview",
        kind: "insight",
        statement: "**$v = \\sqrt{\\mathrm{stiffness}/\\mathrm{density}}$** generalizes: strings ($F/\\mu$), sound ($B/\\rho$), light ($1/\\sqrt{\\epsilon_0\\mu_0}$).",
        detail: "Stiff-light media run fast; slack-heavy crawl."
      }
    ],
    figures: [
      {
        caption: "Hump dynamics: tension curvature $F\\Delta s/R$ supplies $\\mu\\Delta s\\,v^2/R$, giving $v = \\sqrt{F/\\mu}$",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="String wave speed derivation"><path d="M 100 140 Q 360 20 620 140" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="300" y1="80" x2="270" y2="130" stroke="currentColor" stroke-width="1.5"/><line x1="420" y1="80" x2="450" y2="130" stroke="currentColor" stroke-width="1.5"/><text x="360" y="60" font-size="11" text-anchor="middle" fill="currentColor">hump at speed v</text><text x="270" y="150" font-size="11" fill="currentColor">F tension</text><text x="430" y="150" font-size="11" fill="currentColor">F tension</text><text x="360" y="175" font-size="11" text-anchor="middle" fill="currentColor" opacity="0.7">net inward: F ds / R = mu ds v squared / R</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Guitar string",
        problem: "A $0.65\\ \\mathrm{m}$ steel string ($\\mu = 5.0 \\times 10^{-3}$) sounds $196\\ \\mathrm{Hz}$ fundamental ($\\lambda = 1.30\\ \\mathrm{m}$). Find $F$.",
        steps: [
          { label: "Speed", text: "$v = 1.30 \\times 196 = 254.8\\ \\mathrm{m/s}$." },
          { label: "Tension", text: "$F = \\mu v^2 = 5.0 \\times 10^{-3} \\times 64{,}923 = 324.6\\ \\mathrm{N}$." },
          { label: "Octave", text: "Doubling $f$ needs $4$ times $F$ ($1300\\ \\mathrm{N}$) — pegs cannot; shorten instead." }
        ],
        result: "$325\\ \\mathrm{N}$ tension."
      },
      {
        title: "Heavy versus light",
        problem: "Same $F = 100\\ \\mathrm{N}$: $\\mu = 0.010$ versus $0.040\\ \\mathrm{kg/m}$. Speeds?",
        steps: [
          { label: "Light", text: "$v = \\sqrt{10{,}000} = 100\\ \\mathrm{m/s}$." },
          { label: "Heavy", text: "$v = \\sqrt{2500} = 50\\ \\mathrm{m/s}$ — half." },
          { label: "Pitch", text: "Same length: heavy sounds one octave down." }
        ],
        result: "$100$ vs $50\\ \\mathrm{m/s}$ — heft halves speed."
      }
    ],
    keyTakeaways: [
      "$v = \\sqrt{F/\\mu}$ prices tension against heft.",
      "Hump curvature dynamics proves the root.",
      "Stiffness-over-density roots govern all waves."
    ],
    quiz: [
      {
        q: "$F = 100\\ \\mathrm{N}$, $\\mu = 0.010$ gives $v$:",
        options: ["$10\\ \\mathrm{m/s}$", "$100\\ \\mathrm{m/s}$", "$1000\\ \\mathrm{m/s}$", "$1.0\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "$\\sqrt{100/0.010} = 100\\ \\mathrm{m/s}$."
      },
      {
        q: "Quadrupling tension multiplies $v$ by:",
        options: ["4", "2 ($\\sqrt{4}$)", "16", "1"],
        answer: 1,
        explanation: "Square-root dependence on $F$."
      },
      {
        q: "Bass strings are fat because:",
        options: ["Looks", "Larger $\\mu$ lowers $v$ and pitch at fixed $L$, $F$", "Higher tension always", "Shorter length"],
        answer: 1,
        explanation: "$v = \\sqrt{F/\\mu}$: heft slows the wave, dropping $f = v/2L$."
      }
    ]
  },
  {
    sectionId: "young-ch15-s5",
    readingTime: 6,
    intro: "Traveling waves ferry power $P = \\frac{1}{2}\\mu\\omega^2A^2v$ and intensity $I = P/A_{\\mathrm{area}}$. This section derives the quadratic price of loudness and spreads intensity over spheres.",
    objectives: [
      "State $P = \\frac{1}{2}\\sqrt{\\mu F}\\,\\omega^2A^2$ for strings",
      "Define intensity $I = P/4\\pi r^2$ for 3D spreading",
      "Explain $A^2$ and $1/r^2$ scaling"
    ],
    concepts: [
      {
        term: "Wave power",
        kind: "theorem",
        statement: "**$P_{\\max} = \\frac{1}{2}\\mu\\omega^2A^2v = \\frac{1}{2}\\sqrt{\\mu F}\\,\\omega^2A^2$** average over cycles.",
        detail: "$\\mu = 0.010$, $v = 100$, $\\omega = 20\\pi$, $A = 0.020$: $P = 7.90\\ \\mathrm{W}$."
      },
      {
        term: "Quadratic costs",
        kind: "insight",
        statement: "**Power scales $\\omega^2A^2$**: doubling amplitude or frequency **quadruples** power.",
        detail: "Concert bass (large $A$, low $f$) and piccolo (small $A$, high $f$) both cost watts."
      },
      {
        term: "Intensity",
        kind: "definition",
        statement: "**Intensity $I = P/A_{\\mathrm{area}}$** ($\\mathrm{W/m^2}$) — power per perpendicular area.",
        detail: "Faint whisper $10^{-10}$, conversation $10^{-6}$, pain $1\\ \\mathrm{W/m^2}$."
      },
      {
        term: "Inverse-square spreading",
        kind: "theorem",
        statement: "Isotropic source: **$I = P/4\\pi r^2$** — doubling $r$ quarters $I$.",
        detail: "$100\\ \\mathrm{W}$ at $10\\ \\mathrm{m}$: $0.0796\\ \\mathrm{W/m^2}$."
      },
      {
        term: "Amplitude fades as 1/r",
        kind: "insight",
        statement: "Since $I \\propto A^2$: **$A \\propto 1/r$** outward — energy spread thins the swing.",
        detail: "Earthquake $A$ halves each distance doubling (geometric part)."
      }
    ],
    examples: [
      {
        title: "String power",
        problem: "$\\mu = 0.010$, $F = 100\\ \\mathrm{N}$ ($v = 100$), $f = 10\\ \\mathrm{Hz}$ ($\\omega = 62.8$), $A = 0.020\\ \\mathrm{m}$. Find $P$.",
        steps: [
          { label: "Formula", text: "$P = 0.5 \\times 0.010 \\times 3948 \\times 0.00040 \\times 100 = 0.789\\ \\mathrm{W}$? Recompute: $0.5 \\times 0.010 = 0.005$; $\\times 3948 = 19.74$; $\\times 0.0004 = 0.00790$; $\\times 100 = 0.790\\ \\mathrm{W}$." },
          { label: "Double A", text: "$A = 0.040$: $P = 3.16\\ \\mathrm{W}$ — four times." },
          { label: "Double f", text: "Also four times — quadratic both ways." }
        ],
        result: "$0.790\\ \\mathrm{W}$; quadruples with $2A$ or $2f$."
      },
      {
        title: "Lantern intensity",
        problem: "A $100\\ \\mathrm{W}$ isotropic sound source: $I$ at $10\\ \\mathrm{m}$?",
        steps: [
          { label: "Area", text: "$4\\pi \\times 100 = 1257\\ \\mathrm{m^2}$." },
          { label: "Intensity", text: "$I = 100/1257 = 0.0796\\ \\mathrm{W/m^2}$." },
          { label: "At 20 m", text: "$0.0199$ — quartered." }
        ],
        result: "$0.0796\\ \\mathrm{W/m^2}$ at $10\\ \\mathrm{m}$."
      }
    ],
    keyTakeaways: [
      "Wave power goes $\\omega^2A^2$ — loud and shrill both cost.",
      "Intensity divides power by area served.",
      "Spheres dilute as $1/r^2$; amplitudes as $1/r$."
    ],
    quiz: [
      {
        q: "Doubling wave amplitude multiplies power by:",
        options: ["2", "4", "8", "1"],
        answer: 1,
        explanation: "$P \\propto A^2$."
      },
      {
        q: "$100\\ \\mathrm{W}$ isotropic at $10\\ \\mathrm{m}$ gives $I$:",
        options: ["$10\\ \\mathrm{W/m^2}$", "$0.0796\\ \\mathrm{W/m^2}$", "$1000\\ \\mathrm{W/m^2}$", "Zero"],
        answer: 1,
        explanation: "$100/4\\pi(100) = 0.0796\\ \\mathrm{W/m^2}$."
      },
      {
        q: "Amplitude outdoors fades with distance as:",
        options: ["$1/r^2$", "$1/r$ (since $I \\propto A^2 \\propto 1/r^2$)", "Grows", "Constant"],
        answer: 1,
        explanation: "Square-root of intensity spreading."
      }
    ]
  },
  {
    sectionId: "young-ch15-s6",
    readingTime: 6,
    intro: "Waves add by superposition: overlapping displacements sum point by point. This section builds constructive and destructive interference and derives the fixed-end ($\\pi$ flip) versus free-end (no flip) reflection rules.",
    objectives: [
      "State superposition $y = y_1+y_2$",
      "Predict constructive vs destructive from phase",
      "Apply fixed ($\\pi$ flip) and free (no flip) reflections"
    ],
    concepts: [
      {
        term: "Superposition principle",
        kind: "law",
        statement: "**Overlapping waves add displacement by displacement**: $y(x,t) = y_1+y_2$ (linear media).",
        detail: "Two $3.0\\ \\mathrm{cm}$ crests meeting make $6.0$; crest-trough cancel to zero."
      },
      {
        term: "Constructive interference",
        kind: "definition",
        statement: "**In phase** ($\\Delta\\phi = 0, 2\\pi, \\ldots$): **amplitudes add** — $A_1+A_2$.",
        detail: "Path difference $m\\lambda$ aligns crests — loud, bright."
      },
      {
        term: "Destructive interference",
        kind: "definition",
        statement: "**Antiphase** ($\\Delta\\phi = \\pi, 3\\pi, \\ldots$): **amplitudes subtract** — $|A_1-A_2|$.",
        detail: "Path difference $(m+\\frac{1}{2})\\lambda$ pits crest against trough — quiet, dark."
      },
      {
        term: "Fixed-end reflection",
        kind: "theorem",
        statement: "**Fixed end reflects inverted** ($\\pi$ phase flip): crest returns trough — node forced at the wall.",
        detail: "Rope tied to a wall snaps back upside down."
      },
      {
        term: "Free-end reflection",
        kind: "theorem",
        statement: "**Free end reflects upright** (no flip): crest returns crest — antinode at the end.",
        detail: "Rope on a frictionless ring slides freely and doubles momentarily."
      }
    ],
    figures: [
      {
        caption: "Superposition $y = y_1+y_2$: in-phase doubles, antiphase cancels; fixed ends flip by $\\pi$",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Interference and reflection"><path d="M 60 80 Q 110 40 160 80 T 260 80" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 60 130 Q 110 90 160 130 T 260 130" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="280" y="90" font-size="11" fill="currentColor">sum: double or zero</text><line x1="450" y1="40" x2="450" y2="140" stroke="currentColor" stroke-width="3"/><path d="M 350 90 Q 400 50 450 90" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 450 90 Q 400 130 350 130" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 4"/><text x="470" y="90" font-size="11" fill="currentColor">fixed wall: flip</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Two-speaker cancellation",
        problem: "Two speakers emit $344\\ \\mathrm{Hz}$ ($\\lambda = 1.0\\ \\mathrm{m}$) in phase. Where is it quiet $3.0\\ \\mathrm{m}$ from speaker one?",
        steps: [
          { label: "Condition", text: "Quiet needs $\\Delta r = (m+\\frac{1}{2})\\lambda$." },
          { label: "Distances", text: "$r_2 = 3.5, 4.5, \\ldots\\ \\mathrm{m}$ from speaker two." },
          { label: "Loud", text: "$r_2 = 3.0, 4.0, \\ldots$: $\\Delta r = m\\lambda$ — double." }
        ],
        result: "Quiet at half-integer spacing; loud at integer."
      },
      {
        title: "Rope echo",
        problem: "A crest reaches a fixed wall. What returns?",
        steps: [
          { label: "Rule", text: "Fixed: $\\pi$ flip — trough returns." },
          { label: "Free check", text: "Ring end: crest returns crest." },
          { label: "Standing seed", text: "Repeated flips plus superposition build standing waves (next section)." }
        ],
        result: "Inverted echo from fixed; upright from free."
      }
    ],
    keyTakeaways: [
      "Overlaps sum displacements — interference is arithmetic.",
      "Phase decides double versus zero.",
      "Walls flip ($\\pi$); free ends do not."
    ],
    quiz: [
      {
        q: "Constructive interference needs path difference:",
        options: ["$(m+\\frac{1}{2})\\lambda$", "$m\\lambda$ (in phase)", "$\\lambda/4$ always", "Zero amplitude"],
        answer: 1,
        explanation: "Integer wavelengths align crest on crest."
      },
      {
        q: "Fixed-end reflection:",
        options: ["No change", "Inverts by $\\pi$ — crest to trough", "Doubles frequency", "Stops the wave"],
        answer: 1,
        explanation: "Zero-displacement boundary forces a node via cancellation."
      },
      {
        q: "Superposition states:",
        options: ["$y = y_1 \\times y_2$", "$y = y_1+y_2$ point by point", "$y = 0$ always", "$y = y_1/y_2$"],
        answer: 1,
        explanation: "Linear media add displacements independently."
      }
    ]
  },
  {
    sectionId: "young-ch15-s7",
    readingTime: 6,
    intro: "Two opposite travelers of equal amplitude freeze into a standing wave: $y = 2A\\sin kx\\cos\\omega t$ with nodes and antinodes. This section builds it from superposition and maps the fixed-string harmonics.",
    objectives: [
      "Derive $y = 2A\\sin kx\\cos\\omega t$ from $+x$ plus $-x$ waves",
      "Locate nodes ($kx = m\\pi$) and antinodes",
      "State $f_n = nv/2L$ for fixed-fixed strings"
    ],
    concepts: [
      {
        term: "Standing wave",
        kind: "definition",
        statement: "**Standing wave** $y = 2A\\sin kx\\cos\\omega t$: **spatial sine times temporal cosine** — shape frozen, amplitude breathing.",
        detail: "No travel: energy sloshes between $K$ and $U$ in place."
      },
      {
        term: "Nodes and antinodes",
        kind: "definition",
        statement: "**Nodes** ($\\sin kx = 0$) rest always; **antinodes** swing $\\pm 2A$ — spaced $\\lambda/4$ apart, same-type $\\lambda/2$.",
        detail: "$L = 1.0\\ \\mathrm{m}$ fundamental: node-node ends, antinode center."
      },
      {
        term: "Fixed-string harmonics",
        kind: "theorem",
        statement: "Fixed-fixed $L$: **$L = n\\lambda_n/2$**, **$f_n = nv/2L$**, $n = 1, 2, \\ldots$.",
        detail: "$L = 0.65\\ \\mathrm{m}$, $v = 255$: $f_1 = 196$, $f_2 = 392$, $f_3 = 588\\ \\mathrm{Hz}$."
      },
      {
        term: "Derivation from superposition",
        kind: "theorem",
        statement: "**$A\\sin(kx-\\omega t)+A\\sin(kx+\\omega t) = 2A\\sin kx\\cos\\omega t$** by sine addition — travelers cancel into standing.",
        detail: "Incident plus fixed-end reflection (flipped) is exactly this pair."
      },
      {
        term: "Melting versus freezing",
        kind: "insight",
        statement: "**Nodes never move** though the string blurs; strobing at $\\omega$ freezes the envelope $\\pm 2A\\sin kx$.",
        detail: "Touching a node (fret, harmonic) leaves the mode ringing — touching elsewhere kills it."
      }
    ],
    examples: [
      {
        title: "Guitar harmonics",
        problem: "$L = 0.65\\ \\mathrm{m}$, $v = 255\\ \\mathrm{m/s}$. Find first three $f_n$.",
        steps: [
          { label: "Fundamental", text: "$f_1 = 255/1.30 = 196\\ \\mathrm{Hz}$." },
          { label: "Overtones", text: "$f_2 = 392$, $f_3 = 588\\ \\mathrm{Hz}$." },
          { label: "Nodes", text: "$n = 2$: center node; $n = 3$: nodes at $L/3$, $2L/3$." }
        ],
        result: "$196$, $392$, $588\\ \\mathrm{Hz}$ — octave plus fifth."
      },
      {
        title: "Node touch",
        problem: "Touch a ringing fundamental lightly at center. What survives?",
        steps: [
          { label: "Center", text: "Fundamental antinode at center — touching kills $n = 1$." },
          { label: "Survivor", text: "$n = 2$ has a node there — rings on (octave harmonic)." },
          { label: "Technique", text: "Guitar harmonics: fret $12$ sounds $f_2$." }
        ],
        result: "Fundamental dies; second harmonic rings."
      }
    ],
    keyTakeaways: [
      "Opposite travelers freeze into $2A\\sin kx\\cos\\omega t$.",
      "Nodes rest; antinodes swing double.",
      "Fixed strings quantize $f_n = nv/2L$."
    ],
    quiz: [
      {
        q: "Standing wave $2A\\sin kx\\cos\\omega t$ has nodes where:",
        options: ["$\\cos\\omega t = 0$", "$\\sin kx = 0$ ($kx = m\\pi$)", "Everywhere", "Nowhere"],
        answer: 1,
        explanation: "Spatial factor zeroes motion for all time there."
      },
      {
        q: "$L = 0.65\\ \\mathrm{m}$, $v = 255$ fundamental is:",
        options: ["$392\\ \\mathrm{Hz}$", "$196\\ \\mathrm{Hz}$", "$98\\ \\mathrm{Hz}$", "$588\\ \\mathrm{Hz}$"],
        answer: 1,
        explanation: "$v/2L = 196\\ \\mathrm{Hz}$."
      },
      {
        q: "Touching a fundamental antinode:",
        options: ["Leaves it ringing", "Kills it, but node-shared harmonics survive", "Raises pitch", "Breaks the string"],
        answer: 1,
        explanation: "Forced node contradicts antinode motion; compatible modes persist."
      }
    ]
  },
  {
    sectionId: "young-ch15-s8",
    readingTime: 5,
    intro: "Normal modes are the allowed standing patterns: integer half-wavelengths with musical frequencies. This section quantizes the string, names fundamentals and overtones, and tunes instruments by $f_1 = v/2L$.",
    objectives: [
      "Quantize $\\lambda_n = 2L/n$, $f_n = nf_1$",
      "Name fundamental, harmonics, overtones",
      "Tune strings by tension, length, and density"
    ],
    concepts: [
      {
        term: "Normal modes",
        kind: "definition",
        statement: "**Normal modes** are the **independent standing patterns** $n = 1, 2, \\ldots$ — any motion sums them.",
        detail: "Plucked shape is a chord of modes decaying at different rates — timbre."
      },
      {
        term: "Quantization",
        kind: "theorem",
        statement: "**$\\lambda_n = 2L/n$**, **$f_n = nv/2L = nf_1$** — integer harmonics of the fundamental.",
        detail: "Fretting halves $L$: octave up ($2f_1$)."
      },
      {
        term: "Harmonic vocabulary",
        kind: "notation",
        statement: "**Fundamental = first harmonic** ($n = 1$); **overtones** count above it ($n = 2$ first overtone).",
        detail: "$196$, $392$ (first overtone), $588\\ \\mathrm{Hz}$ on the example guitar."
      },
      {
        term: "Tuning law",
        kind: "method",
        statement: "**$f_1 = (1/2L)\\sqrt{F/\\mu}$** — tighten, shorten, or lighten to sharpen.",
        detail: "Pegs ($F$), frets ($L$), gauges ($\\mu$) are the three tuners."
      },
      {
        term: "Timbre from mixture",
        kind: "insight",
        statement: "**Timbre is mode mixture**: sharp plucks excite high $n$ (bright); soft bows favor $n = 1$ (mellow).",
        detail: "Fourier analysis reads the recipe; synthesizers rebuild it."
      }
    ],
    figures: [
      {
        caption: "First three normal modes: $L = \\lambda/2$, $\\lambda$, $3\\lambda/2$ with $f_n = nf_1$",
        svg: `<svg viewBox="0 0 720 200" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Normal modes"><line x1="80" y1="40" x2="80" y2="170" stroke="currentColor" stroke-width="3"/><line x1="640" y1="40" x2="640" y2="170" stroke="currentColor" stroke-width="3"/><path d="M 80 105 Q 220 40 360 105 T 640 105" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 80 130 Q 220 70 360 130 T 500 130 T 640 130" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="1 0"/><path d="M 80 155 Q 173 110 267 155 T 453 155 T 640 155" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 3"/><text x="360" y="25" font-size="11" text-anchor="middle" fill="currentColor">n=1, 2, 3: f, 2f, 3f</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Fret octave",
        problem: "Open string $f_1 = 196\\ \\mathrm{Hz}$. Fret at midpoint. New $f_1$?",
        steps: [
          { label: "Halve", text: "$L \\to L/2$: $f_1 \\to 2 \\times 196 = 392\\ \\mathrm{Hz}$." },
          { label: "Harmonics", text: "New series $392$, $784$, $\\ldots$." },
          { label: "Fifth", text: "Fret at $2L/3$ length: $f = 196 \\times 3/2 = 294\\ \\mathrm{Hz}$ (perfect fifth)." }
        ],
        result: "$392\\ \\mathrm{Hz}$ octave; $294$ fifth."
      },
      {
        title: "Tuning a flat string",
        problem: "A string reads $190\\ \\mathrm{Hz}$, target $196$. By what factor raise $F$?",
        steps: [
          { label: "Scaling", text: "$f \\propto \\sqrt{F}$: factor $(196/190)^2 = 1.064$." },
          { label: "Pegs", text: "Tighten $6.4$% — semitone-class tweak." },
          { label: "Check", text: "$325 \\to 346\\ \\mathrm{N}$ on the example string." }
        ],
        result: "$6.4$% more tension."
      }
    ],
    keyTakeaways: [
      "Boundaries quantize: $\\lambda_n = 2L/n$.",
      "Music is integer ratios of $f_1$.",
      "$f_1 = \\sqrt{F/\\mu}/2L$ is the tuner equation."
    ],
    quiz: [
      {
        q: "Third harmonic of $196\\ \\mathrm{Hz}$ is:",
        options: ["$392\\ \\mathrm{Hz}$", "$588\\ \\mathrm{Hz}$", "$196\\ \\mathrm{Hz}$", "$98\\ \\mathrm{Hz}$"],
        answer: 1,
        explanation: "$3f_1 = 588\\ \\mathrm{Hz}$."
      },
      {
        q: "Fretting at half length gives:",
        options: ["Same pitch", "Octave up ($2f$)", "Octave down", "Silence"],
        answer: 1,
        explanation: "$f_1 \\propto 1/L$."
      },
      {
        q: "Timbre differences come from:",
        options: ["Fundamental only", "Mixture of normal-mode amplitudes", "String color", "Room size only"],
        answer: 1,
        explanation: "Mode recipe sets brightness; Fourier reads it."
      }
    ]
  }
];
