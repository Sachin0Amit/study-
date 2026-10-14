import type { SectionContent } from "../library"

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition, Chapter 16
// Wave Motion and Sound (Sections 16.1 – 16.6)
// ============================================================================

export const ewenCh16Content: SectionContent[] = [
  {
    sectionId: "ewen-ch16-s1",
    readingTime: 6,
    intro: "One equation — $v = f\\lambda$ — describes ripples, string vibrations, and every signal a technician traces with a scope. This section defines amplitude, frequency, period, wavelength, and speed, and sorts transverse from longitudinal waves.",
    objectives: [
      "Define $f$, $T$, $\\lambda$, $A$, and $v$ and convert among them",
      "Apply $v = f\\lambda$ with $T = 1/f$ to strings, water, and rope waves",
      "Distinguish transverse and longitudinal motion with examples",
    ],
    concepts: [
      {
        term: "Frequency and period",
        kind: "definition",
        statement: "Frequency $f$ counts cycles per second (hertz); period $T = 1/f$ is the seconds per cycle.",
        detail: "A $60 \\text{ Hz}$ line voltage repeats every $1/60 \\approx 16.7 \\text{ ms}$.",
      },
      {
        term: "Wavelength and amplitude",
        kind: "definition",
        statement: "Wavelength $\\lambda$ is the meters per cycle; amplitude $A$ is the peak disturbance from equilibrium.",
        detail: "Amplitude sets energy and loudness; wavelength (with speed) sets pitch and channel spacing.",
      },
      {
        term: "Wave speed law",
        kind: "law",
        statement: "Wave speed is $v = f\\lambda$: one wavelength passes per period.",
        detail: "The medium sets $v$; the source sets $f$; $\\lambda$ adjusts to fit.",
      },
      {
        term: "Transverse versus longitudinal",
        kind: "definition",
        statement: "Transverse waves disturb perpendicular to travel (string, light); longitudinal waves disturb along travel (sound, spring coils).",
        detail: "Only transverse waves can be polarized — a key optical test in Chapter 22.",
      },
      {
        term: "Energy by frequency squared",
        kind: "insight",
        statement: "For the same amplitude, wave power grows with $f^{2}$: high-frequency vibration carries far more energy.",
        detail: "Ultrasonic cleaners and grinders exploit this concentration of power.",
      },
    ],
    figures: [
      {
        caption: "Wave anatomy: wavelength $\\lambda$ crest to crest, amplitude $A$ from equilibrium, speed $v = f\\lambda$.",
        svg: "<svg role='img' aria-label='Wave anatomy: wavelength lambda crest to crest, amplitude A from equilibrium, speed v = flambda.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"20\" y1=\"110\" x2=\"380\" y2=\"110\" stroke-dasharray=\"5 4\"/><path d=\"M20 110 Q60 30 100 110 Q140 190 180 110 Q220 30 260 110 Q300 190 340 110\"/><line x1=\"100\" y1=\"110\" x2=\"100\" y2=\"68\"/><line x1=\"100\" y1=\"30\" x2=\"180\" y2=\"30\" stroke-dasharray=\"4 4\"/><text x=\"105\" y=\"95\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">A</text><text x=\"120\" y=\"25\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">lambda</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Rope wave speed",
        problem: "A rope carries waves of $\\lambda = 2.50 \\text{ m}$ at $f = 4.00 \\text{ Hz}$. Find $v$ and $T$.",
        steps: [
          { label: "Step 1: Period", text: "$T = 1/f = 1/4.00 = 0.250 \\text{ s}$." },
          { label: "Step 2: Speed", text: "$v = f\\lambda = (4.00)(2.50) = 10.0 \\text{ m}/\\text{s}$." },
        ],
        result: "$T = 0.250 \\text{ s}$, $v = 10.0 \\text{ m}/\\text{s}$.",
      },
      {
        title: "Guitar string harmonic",
        problem: "A $0.650 \\text{ m}$ string fixed at both ends vibrates in its fundamental with nodes only at the ends. If the wave speed is $420 \\text{ m}/\\text{s}$, find $f$.",
        steps: [
          { label: "Step 1: Wavelength", text: "Fundamental fits half a wave: $\\lambda = 2L = 1.30 \\text{ m}$." },
          { label: "Step 2: Frequency", text: "$f = v/\\lambda = 420/1.30 = 323 \\text{ Hz}$." },
        ],
        result: "About $323 \\text{ Hz}$ (near middle-E range).",
      },
    ],
    keyTakeaways: [
      "$v = f\\lambda$ with $T = 1/f$ solves every basic wave problem.",
      "The medium fixes speed; the source fixes frequency.",
      "Transverse shakes across travel; longitudinal shakes along it.",
    ],
    quiz: [
      {
        q: "A wave has $v = 340 \\text{ m}/\\text{s}$ and $f = 170 \\text{ Hz}$. Its wavelength is:",
        options: ["$0.50 \\text{ m}$", "$2.00 \\text{ m}$", "$57{,}800 \\text{ m}$", "$510 \\text{ m}$"],
        answer: 1,
        explanation: "$\\lambda = v/f = 340/170 = 2.00 \\text{ m}$.",
      },
      {
        q: "Which is a longitudinal wave?",
        options: ["Light in vacuum", "A plucked string", "Sound in air", "A water-surface ripple"],
        answer: 2,
        explanation: "Sound compresses air along its travel direction; the others disturb transversely.",
      },
      {
        q: "Doubling only the frequency of a wave in the same medium:",
        options: ["Doubles $v$", "Halves $\\lambda$", "Doubles $\\lambda$", "Halves the period twice"],
        answer: 1,
        explanation: "$\\lambda = v/f$ with $v$ fixed, so $\\lambda$ halves (and $T$ halves once).",
      },
    ],
  },
  {
    sectionId: "ewen-ch16-s2",
    readingTime: 5,
    intro: "Radio, heat, light, and X-rays are one family — electromagnetic waves differing only in frequency. This section spans the spectrum from power-line $60 \\text{ Hz}$ to gamma rays, applies $c = f\\lambda$ with $c = 3.00 \\times 10^{8} \\text{ m}/\\text{s}$, and notes why only EM waves cross vacuum.",
    objectives: [
      "Order the EM spectrum bands from radio to gamma by $f$ and $\\lambda$",
      "Compute $f$ or $\\lambda$ from $c = f\\lambda$",
      "Explain why EM waves need no medium and all travel at $c$ in vacuum",
    ],
    concepts: [
      {
        term: "Electromagnetic wave",
        kind: "definition",
        statement: "An EM wave is a self-propagating oscillation of electric and magnetic fields, transverse and needing no medium.",
        detail: "Maxwell predicted them; Hertz generated radio waves to prove it.",
      },
      {
        term: "Spectrum order",
        kind: "notation",
        statement: "From low to high frequency: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma — with $c = f\\lambda$ throughout.",
        detail: "Visible light is one octave-like sliver ($380$–$750 \\text{ nm}$) inside a spectrum spanning $20+$ orders of magnitude.",
      },
      {
        term: "Speed of light",
        kind: "law",
        statement: "In vacuum every EM wave travels $c = 3.00 \\times 10^{8} \\text{ m}/\\text{s}$ ($186{,}000 \\text{ mi}/\\text{s}$).",
        detail: "In glass or water each color slows and bends — the refraction of Chapter 21.",
      },
      {
        term: "Photon energy preview",
        kind: "insight",
        statement: "Wave frequency is also photon energy ($E = hf$): gamma photons are individually violent while radio photons are feeble.",
        detail: "That is why shielding tracks frequency, not just intensity.",
      },
      {
        term: "Communications placement",
        kind: "insight",
        statement: "AM ($\u223c 1 \\text{ MHz}$, $\\lambda \\approx 300 \\text{ m}$), FM ($\u223c 100 \\text{ MHz}$, $3 \\text{ m}$), and Wi-Fi ($2.4 \\text{ GHz}$, $12.5 \\text{ cm}$) sit at $\\lambda = c/f$ slots.",
        detail: "Antenna lengths scale with $\\lambda$ — long masts for AM, stub antennas for microwaves.",
      },
    ],
    examples: [
      {
        title: "FM station wavelength",
        problem: "An FM station broadcasts at $101.1 \\text{ MHz}$. Find its wavelength.",
        steps: [
          { label: "Step 1: Write $c = f\\lambda$", text: "$\\lambda = c/f$." },
          { label: "Step 2: Substitute", text: "$\\lambda = 3.00 \\times 10^{8}/1.011 \\times 10^{8} = 2.97 \\text{ m}$." },
        ],
        result: "About $2.97 \\text{ m}$ — a half-wave antenna is roughly $1.5 \\text{ m}$.",
      },
      {
        title: "Microwave oven frequency check",
        problem: "A microwave oven uses $\\lambda = 12.2 \\text{ cm}$. Confirm its operating frequency.",
        steps: [
          { label: "Step 1: Convert", text: "$\\lambda = 0.122 \\text{ m}$." },
          { label: "Step 2: Divide", text: "$f = 3.00 \\times 10^{8}/0.122 = 2.46 \\times 10^{9} \\text{ Hz}$." },
        ],
        result: "$2.46 \\text{ GHz}$, the standard $2.45 \\text{ GHz}$ band.",
      },
    ],
    keyTakeaways: [
      "All EM waves satisfy $c = f\\lambda$ with $c = 3.00 \\times 10^{8} \\text{ m}/\\text{s}$ in vacuum.",
      "Frequency orders the spectrum and sets photon energy and hazard level.",
      "Antenna and cavity sizes scale directly with $\\lambda$.",
    ],
    quiz: [
      {
        q: "A $60 \\text{ Hz}$ power-line EM wave has wavelength about:",
        options: ["$5000 \\text{ km}$", "$5.0 \\text{ m}$", "$500 \\text{ nm}$", "$2.0 \\text{ mm}$"],
        answer: 0,
        explanation: "$3.00 \\times 10^{8}/60 = 5.0 \\times 10^{6} \\text{ m} = 5000 \\text{ km}$.",
      },
      {
        q: "Which travels fastest in vacuum?",
        options: ["Radio waves", "Visible light", "X-rays", "All the same at $c$"],
        answer: 3,
        explanation: "Vacuum speed is color-blind: every EM wave travels at $c$.",
      },
      {
        q: "Green light ($\\lambda = 550 \\text{ nm}$) has frequency about:",
        options: ["$5.5 \\times 10^{5} \\text{ Hz}$", "$5.5 \\times 10^{14} \\text{ Hz}$", "$1.8 \\times 10^{-6} \\text{ Hz}$", "$3.0 \\times 10^{8} \\text{ Hz}$"],
        answer: 1,
        explanation: "$f = c/\\lambda = 3.00 \\times 10^{8}/5.50 \\times 10^{-7} \\approx 5.45 \\times 10^{14} \\text{ Hz}$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch16-s3",
    readingTime: 6,
    intro: "Sound is a longitudinal pressure wave whose speed, loudness, and pitch follow strict rules. This section uses $v \\approx 343 \\text{ m}/\\text{s}$ at room temperature, the decibel scale, and the audible $20 \\text{ Hz}$–$20 \\text{ kHz}$ band for shop acoustics and sonar ranging.",
    objectives: [
      "Explain sound as longitudinal compressions with $v \\approx 343 \\text{ m}/\\text{s}$ in room air",
      "Relate intensity to decibels and amplitude",
      "Solve echo-ranging and pitch-wavelength problems",
    ],
    concepts: [
      {
        term: "Sound wave",
        kind: "definition",
        statement: "Sound is a longitudinal wave of compressions and rarefactions traveling $343 \\text{ m}/\\text{s}$ in $20^{\\circ}\\text{C}$ air ($1087 \\text{ ft}/\\text{s}$ at $0^{\\circ}\\text{C}$, faster when warm).",
        detail: "It needs a medium — no air, no sound — and travels faster in water ($1480 \\text{ m}/\\text{s}$) and steel ($\u223c 5000 \\text{ m}/\\text{s}$).",
      },
      {
        term: "Loudness and decibels",
        kind: "notation",
        statement: "Intensity level is $\\beta = 10\\log_{10}(I/I_{0})$ decibels with $I_{0} = 10^{-12} \\text{ W}/\\text{m}^{2}$; $10 \\text{ dB}$ multiplies intensity tenfold.",
        detail: "Whisper $\u223c 20 \\text{ dB}$, conversation $60 \\text{ dB}$, pain threshold $120 \\text{ dB}$; intensity falls as $1/d^{2}$.",
      },
      {
        term: "Pitch and frequency",
        kind: "definition",
        statement: "Pitch follows frequency across the audible $20$–$20{,}000 \\text{ Hz}$ band; ultrasound lies above, infrasound below.",
        detail: "Middle C is $262 \\text{ Hz}$ ($\\lambda \\approx 1.31 \\text{ m}$ in air).",
      },
      {
        term: "Echo ranging",
        kind: "method",
        statement: "Distance follows $d = v\\Delta t/2$: sound travels out and back in the measured time.",
        detail: "Sonar, ultrasonic testers, and parking sensors all divide by two for the round trip.",
      },
      {
        term: "Quality (timbre)",
        kind: "insight",
        statement: "Timbre is the harmonic recipe above the fundamental — why a trumpet and a flute differ on the same note.",
        detail: "Fourier analysis reads that recipe; filters and equalizers reshape it.",
      },
    ],
    figures: [
      {
        caption: "Longitudinal sound: compressions and rarefactions along the travel direction; one $\\lambda$ spans compression to compression.",
        svg: "<svg role='img' aria-label='Longitudinal sound: compressions and rarefactions along the travel direction; one lambda spans compression to compression.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"20\" y1=\"100\" x2=\"380\" y2=\"100\"/><ellipse cx=\"90\" cy=\"100\" rx=\"8\" ry=\"40\"/><ellipse cx=\"130\" cy=\"100\" rx=\"22\" ry=\"25\" opacity=\"0.4\"/><ellipse cx=\"180\" cy=\"100\" rx=\"8\" ry=\"40\"/><ellipse cx=\"220\" cy=\"100\" rx=\"22\" ry=\"25\" opacity=\"0.4\"/><ellipse cx=\"270\" cy=\"100\" rx=\"8\" ry=\"40\"/><line x1=\"90\" y1=\"150\" x2=\"180\" y2=\"150\"/><polygon points=\"180,150 170,145 170,155\" fill=\"currentColor\" stroke=\"none\"/><text x=\"105\" y=\"170\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">lambda</text><text x=\"40\" y=\"50\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">compression rarefaction</text></svg>",
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Sonar depth sounding",
        problem: "A ship's sonar echo returns $1.20 \\text{ s}$ after pinging (seawater $v = 1480 \\text{ m}/\\text{s}$). Find the depth.",
        steps: [
          { label: "Step 1: Round-trip distance", text: "$2d = (1480)(1.20) = 1776 \\text{ m}$." },
          { label: "Step 2: Halve", text: "$d = 888 \\text{ m}$." },
        ],
        result: "$888 \\text{ m}$ deep.",
      },
      {
        title: "Wavelength of middle C",
        problem: "Find the wavelength of $262 \\text{ Hz}$ middle C in room air ($343 \\text{ m}/\\text{s}$).",
        steps: [
          { label: "Step 1: Divide", text: "$\\lambda = 343/262 = 1.31 \\text{ m}$." },
        ],
        result: "$1.31 \\text{ m}$ (about $4.3 \\text{ ft}$).",
      },
    ],
    keyTakeaways: [
      "Sound is longitudinal with $v \\approx 343 \\text{ m}/\\text{s}$ in room air, faster in liquids and solids.",
      "Decibels are logarithmic: $+10 \\text{ dB}$ means $10\\times$ intensity.",
      "Echo distance is $v\\Delta t/2$ — always halve the round trip.",
    ],
    quiz: [
      {
        q: "Thunder arrives $6.0 \\text{ s}$ after lightning ($v = 343 \\text{ m}/\\text{s}$). The strike is about:",
        options: ["$57 \\text{ m}$ away", "$2.1 \\text{ km}$ away", "$12 \\text{ km}$ away", "$343 \\text{ km}$ away"],
        answer: 1,
        explanation: "One-way travel: $d = 343 \\times 6.0 \\approx 2060 \\text{ m} \\approx 2.1 \\text{ km}$.",
      },
      {
        q: "One sound is $100$ times as intense as another. The decibel difference is:",
        options: ["$2 \\text{ dB}$", "$10 \\text{ dB}$", "$20 \\text{ dB}$", "$100 \\text{ dB}$"],
        answer: 2,
        explanation: "$10\\log_{10}(100) = 20 \\text{ dB}$.",
      },
      {
        q: "Astronauts on a spacewalk cannot hear each other unaided because:",
        options: ["Sound is too slow", "Sound needs a medium and vacuum has none", "Their helmets absorb everything", "Sound reflects off the Moon"],
        answer: 1,
        explanation: "Longitudinal pressure waves require matter to compress; vacuum carries only EM waves and radios work fine.",
      },
    ],
  },
  {
    sectionId: "ewen-ch16-s4",
    readingTime: 5,
    intro: "A passing siren slides from high to low pitch — the Doppler effect. This section predicts the observed frequency shift for moving sources and observers, and applies it to radar guns, sonar, and medical ultrasound.",
    objectives: [
      "Explain the Doppler shift as wavelength bunching ahead and stretching behind",
      "Compute observed frequency for approaching and receding motion",
      "Apply Doppler ideas to radar, sonar, and flow measurement",
    ],
    concepts: [
      {
        term: "Doppler effect",
        kind: "definition",
        statement: "Motion between source and observer shifts observed frequency up on approach and down on recession.",
        detail: "Waves bunch ahead of an approaching source (shorter $\\lambda$, higher $f$) and spread behind it.",
      },
      {
        term: "Moving-observer formula",
        kind: "law",
        statement: "An observer moving at $v_{o}$ toward a stationary source hears $f' = f(v + v_{o})/v$.",
        detail: "Meeting the waves sooner raises the encounter rate; fleeing lowers it.",
      },
      {
        term: "Moving-source formula",
        kind: "law",
        statement: "A source moving at $v_{s}$ toward a stationary observer produces $f' = fv/(v - v_{s})$, and $fv/(v + v_{s})$ receding.",
        detail: "The denominator shrinks on approach, so $f'$ climbs faster than the observer-motion case.",
      },
      {
        term: "Sonic boom edge case",
        kind: "insight",
        statement: "When $v_{s} \\to v$, wavefronts pile into a shock cone — the sonic boom — and beyond $v$ the craft outruns its own sound.",
        detail: "Supersonic flight replaces pitch shift with a pressure shock heard as a boom.",
      },
      {
        term: "Doppler instruments",
        kind: "insight",
        statement: "Police radar, fetal monitors, and blood-flow meters read the frequency shift to get speed without contact.",
        detail: "Two-way (reflected) Doppler doubles the shift — the instrument compares outgoing and returned frequencies.",
      },
    ],
    examples: [
      {
        title: "Approaching ambulance",
        problem: "An ambulance siren emits $700 \\text{ Hz}$ and approaches at $30.0 \\text{ m}/\\text{s}$ ($v = 343 \\text{ m}/\\text{s}$). Find the heard frequency.",
        steps: [
          { label: "Step 1: Moving source, approach", text: "$f' = fv/(v - v_{s})$." },
          { label: "Step 2: Substitute", text: "$f' = 700(343)/(343 - 30.0) = 700(343/313) = 767 \\text{ Hz}$." },
        ],
        result: "$767 \\text{ Hz}$ — nearly a full tone sharp.",
      },
      {
        title: "Receding train horn",
        problem: "A train horn at $440 \\text{ Hz}$ recedes at $25.0 \\text{ m}/\\text{s}$. Find the observed pitch ($v = 343 \\text{ m}/\\text{s}$).",
        steps: [
          { label: "Step 1: Receding denominator", text: "$f' = 440(343)/(343 + 25.0)$." },
          { label: "Step 2: Evaluate", text: "$f' = 440(0.932) = 410 \\text{ Hz}$." },
        ],
        result: "$410 \\text{ Hz}$ — audibly flat.",
      },
    ],
    keyTakeaways: [
      "Approach raises $f$; recession lowers it — for sound and light alike.",
      "Use $f(v \\pm v_{o})/v$ for moving observers and $fv/(v \\mp v_{s})$ for moving sources.",
      "Radar and ultrasound velocimetry are Doppler shifts read as speed.",
    ],
    quiz: [
      {
        q: "A source approaches a stationary listener. The observed frequency:",
        options: ["Decreases", "Stays the same", "Increases", "Drops to zero"],
        answer: 2,
        explanation: "Wavefronts bunch ahead of the source, shortening $\\lambda$ and raising $f' = fv/(v - v_{s})$.",
      },
      {
        q: "A $500 \\text{ Hz}$ source recedes at the speed of sound. The stationary observer hears:",
        options: ["$1000 \\text{ Hz}$", "$500 \\text{ Hz}$", "$250 \\text{ Hz}$", "Nothing (infinite stretch)"],
        answer: 2,
        explanation: "$f' = 500(v)/(v + v) = 250 \\text{ Hz}$ — one octave flat.",
      },
      {
        q: "Police radar measures speed using:",
        options: ["Echo travel time only", "The Doppler shift of the reflected wave", "Signal amplitude", "Antenna temperature"],
        answer: 1,
        explanation: "Motion shifts the returned frequency; the shift is proportional to vehicle speed.",
      },
    ],
  },
  {
    sectionId: "ewen-ch16-s5",
    readingTime: 5,
    intro: "Push a swing at its natural rhythm and tiny pushes build giant motion — resonance. This section defines natural frequency, shows how sympathetic vibration and standing waves arise, and warns (with bridges and glasses) about undamped resonance.",
    objectives: [
      "Define natural frequency and the resonance condition",
      "Explain standing waves, nodes, and antinodes on strings and in pipes",
      "Give the string and pipe frequency formulas and a resonance-caution example",
    ],
    concepts: [
      {
        term: "Natural frequency",
        kind: "definition",
        statement: "Every elastic system vibrates freely at its natural frequency $f_{0}$, set by stiffness, mass, and geometry.",
        detail: "Tuning forks, bridges, and air columns each own a distinct $f_{0}$ fingerprint.",
      },
      {
        term: "Resonance",
        kind: "law",
        statement: "Driving a system at $f_{0}$ feeds energy in phase every cycle, so amplitude grows until damping or failure limits it.",
        detail: "Soldiers break step on bridges and singers shatter glasses for the same reason: matched rhythm accumulates.",
      },
      {
        term: "Standing waves and nodes",
        kind: "definition",
        statement: "Opposite-traveling waves of equal $f$ interfere into stationary patterns with nodes (still) and antinodes (maximum motion).",
        detail: "Strings, organ pipes, and microwave cavities all sort themselves into these patterns.",
      },
      {
        term: "String harmonics",
        kind: "theorem",
        statement: "A string of length $L$ fixed at both ends sounds $f_{n} = nv/2L$ for $n = 1, 2, 3, \\ldots$.",
        detail: "Fretting halves $L$ to double $f$ — one octave up.",
      },
      {
        term: "Pipe harmonics",
        kind: "theorem",
        statement: "Open pipes give $f_{n} = nv/2L$ (all harmonics); pipes closed at one end give $f_{n} = nv/4L$ with odd $n$ only.",
        detail: "A closed pipe sounds an octave below an equal-length open pipe and lacks even harmonics — the clarinet versus flute difference.",
      },
    ],
    figures: [
      {
        caption: "First three string harmonics: $L = \\lambda/2$, $\\lambda$, $3\\lambda/2$ with nodes at the fixed ends.",
        svg: "<svg role='img' aria-label='First three string harmonics: L = lambda/2, lambda, 3lambda/2 with nodes at the fixed ends.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"30\" y1=\"50\" x2=\"370\" y2=\"50\"/><line x1=\"30\" y1=\"110\" x2=\"370\" y2=\"110\"/><line x1=\"30\" y1=\"170\" x2=\"370\" y2=\"170\"/><path d=\"M40 50 Q200 100 360 50\"/><path d=\"M40 110 Q120 70 200 110 Q280 150 360 110\"/><path d=\"M40 170 Q93 130 147 170 Q200 210 253 170 Q307 130 360 170\"/><text x=\"10\" y=\"53\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">n=1</text><text x=\"10\" y=\"113\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">n=2</text><text x=\"10\" y=\"173\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">n=3</text></svg>",
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Organ pipe fundamental",
        problem: "An open organ pipe is $1.72 \\text{ m}$ long. Find its fundamental ($v = 343 \\text{ m}/\\text{s}$).",
        steps: [
          { label: "Step 1: Open-pipe formula", text: "$f_{1} = v/2L$." },
          { label: "Step 2: Substitute", text: "$f_{1} = 343/(2 \\times 1.72) = 99.7 \\text{ Hz}$." },
        ],
        result: "About $100 \\text{ Hz}$ (near G2).",
      },
      {
        title: "Closed-pipe clarinet tone",
        problem: "A $0.660 \\text{ m}$ tube closed at one end sounds its fundamental. Find $f$ and the next available harmonic.",
        steps: [
          { label: "Step 1: Fundamental", text: "$f_{1} = v/4L = 343/(4 \\times 0.660) = 130 \\text{ Hz}$." },
          { label: "Step 2: Next harmonic", text: "Only odd harmonics exist, so $f_{3} = 3f_{1} = 390 \\text{ Hz}$." },
        ],
        result: "$130 \\text{ Hz}$ and $390 \\text{ Hz}$ — the hollow clarinet timbre.",
      },
    ],
    keyTakeaways: [
      "Drive at $f_{0}$ and amplitude accumulates — resonance powers instruments and threatens structures.",
      "Fixed strings: $f_{n} = nv/2L$; open pipes the same; closed pipes $nv/4L$ (odd $n$).",
      "Standing waves sort into nodes and antinodes set by boundary conditions.",
    ],
    quiz: [
      {
        q: "Pushing a swing once per period with small pushes produces large motion. This is:",
        options: ["Damping", "Resonance", "Beating", "Polarization"],
        answer: 1,
        explanation: "In-phase driving at the natural frequency accumulates energy each cycle.",
      },
      {
        q: "A string fixed at both ends sounds $220 \\text{ Hz}$ fundamental. Its third harmonic is:",
        options: ["$110 \\text{ Hz}$", "$330 \\text{ Hz}$", "$440 \\text{ Hz}$", "$660 \\text{ Hz}$"],
        answer: 3,
        explanation: "$f_{3} = 3f_{1} = 660 \\text{ Hz}$.",
      },
      {
        q: "A pipe closed at one end differs from an open pipe of equal length by:",
        options: ["Sounding all harmonics an octave higher", "Sounding only odd harmonics, fundamental an octave lower", "Producing no standing waves", "Needing no air column"],
        answer: 1,
        explanation: "The closed end forces a node, giving $f_{n} = nv/4L$ (odd $n$) — half the open-pipe fundamental.",
      },
    ],
  },
  {
    sectionId: "ewen-ch16-s6",
    readingTime: 6,
    intro: "The pendulum clock, the car suspension, and the quartz crystal share one motion: simple harmonic motion. This section defines SHM through the restoring force $F = -kx$, derives the period formulas, and connects pendulums to timekeeping.",
    objectives: [
      "Define SHM and its restoring-force signature $F = -kx$",
      "Apply $T = 2\\pi\\sqrt{m/k}$ and the pendulum $T = 2\\pi\\sqrt{L/g}$",
      "Explain amplitude–period independence and energy swapping in SHM",
    ],
    concepts: [
      {
        term: "Simple harmonic motion",
        kind: "definition",
        statement: "SHM is periodic motion with restoring force $F = -kx$: acceleration points toward equilibrium with magnitude proportional to displacement.",
        detail: "Position follows $x = A\\cos(2\\pi f t)$; velocity peaks at center, acceleration peaks at the turning points.",
      },
      {
        term: "Mass-spring period",
        kind: "theorem",
        statement: "A mass $m$ on spring $k$ oscillates with $T = 2\\pi\\sqrt{m/k}$ and $f = (1/2\\pi)\\sqrt{k/m}$.",
        detail: "Stiffer springs race; heavier masses lumber — amplitude does not enter.",
      },
      {
        term: "Simple pendulum period",
        kind: "theorem",
        statement: "For small swings, $T = 2\\pi\\sqrt{L/g}$, independent of mass and (small) amplitude.",
        detail: "Only length and gravity matter — Galileo's timing discovery behind every grandfather clock.",
      },
      {
        term: "Energy exchange",
        kind: "insight",
        statement: "SHM swaps kinetic and potential energy each quarter cycle; total $E = \\tfrac{1}{2}kA^{2}$ is fixed without damping.",
        detail: "Maximum speed at equilibrium is $v_{max} = A\\sqrt{k/m}$.",
      },
      {
        term: "Damping and driving",
        kind: "insight",
        statement: "Friction decays SHM amplitude; periodic driving sustains it — and at $f_{0}$ produces resonance.",
        detail: "Shock absorbers add damping; escapements and circuits add timed driving.",
      },
    ],
    examples: [
      {
        title: "Seconds pendulum",
        problem: "Find the length of a simple pendulum with period $2.00 \\text{ s}$ ($g = 9.80 \\text{ m}/\\text{s}^{2}$).",
        steps: [
          { label: "Step 1: Invert the formula", text: "$L = g(T/2\\pi)^{2}$." },
          { label: "Step 2: Substitute", text: "$L = 9.80(2.00/6.283)^{2} = 9.80(0.1013) = 0.993 \\text{ m}$." },
        ],
        result: "$0.993 \\text{ m}$ — the classic meter-long seconds pendulum.",
      },
      {
        title: "Car suspension bounce",
        problem: "A $400 \\text{ kg}$ corner mass rides on a spring with $k = 25{,}000 \\text{ N}/\\text{m}$. Find the bounce frequency.",
        steps: [
          { label: "Step 1: Formula", text: "$f = (1/2\\pi)\\sqrt{k/m}$." },
          { label: "Step 2: Substitute", text: "$f = (1/6.283)\\sqrt{25{,}000/400} = (1/6.283)(7.906) = 1.26 \\text{ Hz}$." },
        ],
        result: "$1.26 \\text{ Hz}$ ($T = 0.794 \\text{ s}$) — typical soft-suspension ride.",
      },
    ],
    keyTakeaways: [
      "SHM means $F = -kx$; motion is sinusoidal with $v$ fastest at center.",
      "$T = 2\\pi\\sqrt{m/k}$ for springs, $T = 2\\pi\\sqrt{L/g}$ for pendulums — no amplitude dependence.",
      "Energy $\\tfrac{1}{2}kA^{2}$ shuttles between kinetic and potential each cycle.",
    ],
    quiz: [
      {
        q: "A pendulum is shortened to one-fourth its length. Its period becomes:",
        options: ["Four times longer", "Twice as long", "Half as long", "Unchanged"],
        answer: 2,
        explanation: "$T \\propto \\sqrt{L}$; $\\sqrt{1/4} = 1/2$.",
      },
      {
        q: "Doubling the amplitude of an ideal mass-spring oscillator:",
        options: ["Doubles the period", "Halves the frequency", "Leaves $T$ unchanged but quadruples energy", "Stops the motion"],
        answer: 2,
        explanation: "$T$ is amplitude-independent; $E = \\tfrac{1}{2}kA^{2}$ quadruples.",
      },
      {
        q: "At maximum displacement in SHM:",
        options: ["Velocity is maximum, acceleration zero", "Both velocity and acceleration are maximum", "Velocity is zero, acceleration is maximum", "Energy is zero"],
        answer: 2,
        explanation: "Turning points: momentarily at rest with the largest restoring force pulling back.",
      },
    ],
  },
]
