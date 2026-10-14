import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 26: Wave Optics (Sections 26.1 – 26.4)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh26Content: SectionContent[] = [
  {
    sectionId: "coletta-ch26-s1",
    readingTime: 5,
    intro: "Wave optics drops the ray pretense and tracks phase. Coletta restates Huygens' principle for light, defines coherence, and shows why two slits interfere while two bulbs do not. Phase difference is the currency of this chapter.",
    objectives: [
      "State Huygens' principle for light and derive the law of refraction sketch",
      "Distinguish coherent from incoherent sources with phase stability",
      "Compute phase difference from path difference $\\delta = 2\\pi\\Delta L/\\lambda$"
    ],
    concepts: [
      {
        term: "Huygens for light",
        kind: "law",
        statement: "Each wavefront point radiates wavelets whose envelope is the next front, bending rays toward slower media and deriving Snell's law from slower wavelet radii.",
        detail: "Blue light's slower speed in glass shrinks its wavelets more, bending it farther than red."
      },
      {
        term: "Coherence",
        kind: "definition",
        statement: "**Coherent** sources hold fixed phase relation over time; **incoherent** ones (two bulbs) randomize phases and wash fringes to uniform glow.",
        detail: "A single slit feeding two slits manufactures coherence by cloning one wavefront."
      },
      {
        term: "Phase versus path",
        kind: "theorem",
        statement: "Path difference $\\Delta L$ converts to phase $\\delta = 2\\pi\\Delta L/\\lambda$: each wavelength of extra travel adds one full cycle.",
        detail: "Half-wavelength extra means $\\pi$ radians and crest-on-trough cancellation."
      },
      {
        term: "Constructive condition",
        kind: "theorem",
        statement: "**Constructive** interference needs $\\Delta L = m\\lambda$ ($\\delta = 2\\pi m$); **destructive** needs $\\Delta L = (m + 1/2)\\lambda$.",
        detail: "These two lines predict every fringe position in the next sections."
      },
      {
        term: "Monochromatic ideal",
        kind: "notation",
        statement: "**Monochromatic** light holds one $\\lambda$ so fringes stay sharp; white light overlaps colors into a white center with rainbow edges.",
        detail: "Lasers approximate the ideal with coherence lengths of meters." }
    ],
    figures: [
      {
        caption: "Huygens wavelets refract: slower medium shrinks radii and bends the front",
        svg: '<svg role="img" aria-label="Huygens wavelets refract: slower medium shrinks radii and bends the front" viewBox="0 0 400 140" width="100%" height="140"><line x1="20" y1="70" x2="380" y2="70" stroke="currentColor" stroke-width="1.5"/><line x1="120" y1="10" x2="200" y2="70" stroke="currentColor" stroke-width="1.8"/><line x1="200" y1="70" x2="240" y2="130" stroke="currentColor" stroke-width="1.8"/><circle cx="170" cy="45" r="14" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="200" cy="70" r="14" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><circle cx="220" cy="95" r="9" fill="none" stroke="currentColor" stroke-width="1" opacity="0.6"/><text x="280" y="55" font-size="12" fill="currentColor">fast (air)</text><text x="280" y="105" font-size="12" fill="currentColor">slow (glass)</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Phase from path",
        problem: "Two rays at $600$ nm differ by $0.90$ micrometers. Find the phase difference and interference type.",
        steps: [
          { label: "Wavelengths", text: "$\\Delta L/\\lambda = 0.90/0.60 = 1.5$ waves." },
          { label: "Phase", text: "$\\delta = 2\\pi \\times 1.5 = 3\\pi$ radians." },
          { label: "Verdict", text: "Half-integer waves: destructive cancellation." }
        ],
        result: "$3\\pi$ rad, destructive."
      },
      {
        title: "Why bulbs do not fringe",
        problem: "Two filaments emit $550$ nm light with phases randomizing every $10^{-8}$ s. Can eyes see fringes?",
        steps: [
          { label: "Fringe demand", text: "Stable $\\delta$ over the observation time is required." },
          { label: "Reality", text: "Phases reshuffle $10^{8}$ times per second, averaging intensity to the sum." },
          { label: "Fix", text: "One source split in two preserves $\\delta$ and fringes appear." }
        ],
        result: "No stable fringes; incoherent sum only."
      }
    ],
    keyTakeaways: [
      "Huygens wavelets carry phase through refraction and diffraction.",
      "Only coherent sources hold $\\delta$ steady enough to fringe.",
      "Path converts to phase by $2\\pi$ per wavelength."
    ],
    quiz: [
      {
        q: "Path difference of $2.5\\lambda$ gives interference that is:",
        options: ["Constructive", "Destructive", "Absent", "Polarized"],
        answer: 1,
        explanation: "Half-integer multiples put crests on troughs."
      },
      {
        q: "Two independent bulbs show no fringes because they are:",
        options: ["Incoherent", "Too hot", "Unpolarized only", "Too dim"],
        answer: 0,
        explanation: "Random relative phase averages the cross term to zero."
      },
      {
        q: "Each extra wavelength of path adds phase of:",
        options: ["$2\\pi$", "Zero", "$\\pi/2$", "$\\pi$"],
        answer: 0,
        explanation: "One full cycle is $2\\pi$ radians by definition of the wave."
      }
    ]
  },
  {
    sectionId: "coletta-ch26-s2",
    readingTime: 7,
    intro: "Two slits paint alternating bright and dark bands whose spacing measures wavelength. Coletta derives $d\\sin\\theta = m\\lambda$ for maxima and extends interference to thin films with the half-wave flip. Oil slicks and lens coatings are the same physics as the slits.",
    objectives: [
      "Locate double-slit maxima with $d\\sin\\theta = m\\lambda$ and minima halfway",
      "Compute fringe spacing $y = m\\lambda L/d$ on a near screen",
      "Apply thin-film rules $2nt$ with phase-reversal counting"
    ],
    concepts: [
      {
        term: "Double-slit maxima",
        kind: "theorem",
        statement: "Slits spaced $d$ reinforce at $d\\sin\\theta = m\\lambda$ ($m = 0, \\pm1, \\dots$) and cancel at $d\\sin\\theta = (m + 1/2)\\lambda$.",
        detail: "The $m = 0$ center is brightest with symmetric orders fading by the single-slit envelope."
      },
      {
        term: "Fringe spacing",
        kind: "method",
        statement: "On a screen $L$ away with small angles, maxima sit at $y_{m} = m\\lambda L/d$, so spacing $\\Delta y = \\lambda L/d$ reads $\\lambda$ directly.",
        detail: "Red spreads wider than blue by the wavelength ratio, separating colors into fringe rainbows at high $m$."
      },
      {
        term: "Half-wave reflection flip",
        kind: "law",
        statement: "Reflecting off **higher** $n$ flips the wave by $\\pi$ (half wave); reflecting off lower $n$ flips nothing.",
        detail: "Air-to-soap flips while soap-to-air does not, deciding whether $2nt$ counts an extra half."
      },
      {
        term: "Thin-film interference",
        kind: "theorem",
        statement: "Films of thickness $t$ and index $n$ compare round trip $2nt$ against $\\lambda$ with flip counting: one flip gives bright $2nt = (m + 1/2)\\lambda$, two or zero flips give bright $2nt = m\\lambda$.",
        detail: "A $100$ nm oil layer ($n = 1.4$) kills green near $560$ nm and glows magenta by subtraction."
      },
      {
        term: "Antireflection coating",
        kind: "method",
        statement: "A quarter-wave layer $t = \\lambda/4n_{c}$ with $n_{c} = \\sqrt{n_{glass}}$ cancels the reflected wave by destructive pairing.",
        detail: "$100$ nm of $n = 1.38$ fluoride on glass nearly erases $550$ nm glare." }
    ],
    figures: [
      {
        caption: "Two-slit geometry: path difference $d\\sin\\theta = m\\lambda$ at bright fringes",
        svg: '<svg role="img" aria-label="Two-slit geometry: path difference dsintheta = mlambda at bright fringes" viewBox="0 0 400 150" width="100%" height="150"><line x1="100" y1="20" x2="100" y2="130" stroke="currentColor" stroke-width="3"/><rect x="96" y="60" width="8" height="8" fill="white" stroke="currentColor" stroke-width="1"/><rect x="96" y="85" width="8" height="8" fill="white" stroke="currentColor" stroke-width="1"/><line x1="104" y1="64" x2="330" y2="45" stroke="currentColor" stroke-width="1.6"/><line x1="104" y1="89" x2="330" y2="45" stroke="currentColor" stroke-width="1.2" opacity="0.7"/><line x1="330" y1="20" x2="330" y2="130" stroke="currentColor" stroke-width="1.5"/><circle cx="330" cy="45" r="4" fill="currentColor"/><text x="330" y="145" text-anchor="middle" font-size="11" fill="currentColor">screen: bright at mλ</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Measuring wavelength",
        problem: "Slits $d = 0.25$ mm project first-order bright $3.0$ mm from center on a screen $1.5$ m away. Find $\\lambda$.",
        steps: [
          { label: "Angle", text: "$\\sin\\theta \\approx y/L = 0.0030/1.5 = 0.0020$." },
          { label: "Wavelength", text: "$\\lambda = d\\sin\\theta = 2.5 \\times 10^{-4} \\times 0.0020 = 5.0 \\times 10^{-7}$ m." },
          { label: "Color", text: "$500$ nm green, as expected." }
        ],
        result: "About $5.0 \\times 10^{-7}$ m."
      },
      {
        title: "Soap-film color",
        problem: "A soap film ($n = 1.33$) $280$ nm thick is viewed at normal incidence in reflection. Which $\\lambda$ near $550$ nm is brightest?",
        steps: [
          { label: "Flips", text: "One flip (air-film), so bright means $2nt = (m + 1/2)\\lambda$." },
          { label: "Round trip", text: "$2nt = 2 \\times 1.33 \\times 280 = 744.8$ nm." },
          { label: "Orders", text: "$m = 1$ gives $\\lambda = 744.8/1.5 \\approx 497$ nm (blue-green); $m = 0$ gives $1490$ nm infrared." }
        ],
        result: "About $497$ nm reinforced."
      }
    ],
    keyTakeaways: [
      "Double slits brighten at $d\\sin\\theta = m\\lambda$ with spacing $\\lambda L/d$.",
      "Reflection off higher $n$ adds a half-wave flip.",
      "Films compare $2nt$ to $\\lambda$ with flip-aware rules."
    ],
    quiz: [
      {
        q: "Slit spacing doubles at fixed $\\lambda$, $L$. Fringe spacing:",
        options: ["Unchanged", "Doubles", "Halves", "Quadruples"],
        answer: 2,
        explanation: "$\\Delta y = \\lambda L/d$ is inversely proportional to $d$."
      },
      {
        q: "Second-order red versus second-order blue fringe sits:",
        options: ["Closer in", "Farther out", "At the same spot", "At center"],
        answer: 1,
        explanation: "$y_{m} = m\\lambda L/d$ grows with $\\lambda$."
      },
      {
        q: "Antireflection thickness for $\\lambda$ in coating $n_{c}$ is:",
        options: ["$\\lambda/4n_{c}$", "$\\lambda n_{c}$", "$2\\lambda$", "$\\lambda/2n_{c}$"],
        answer: 0,
        explanation: "Quarter-wave round-trips to half-wave cancellation with one flip."
      },
      {
        q: "Air-wedge fringes of equal thickness are spaced by:",
        options: ["$d$ slits", "Focal length", "$\\lambda/2$ in thickness", "$\\lambda$ in thickness"],
        answer: 2,
        explanation: "Each fringe steps half a wavelength of gap (round trip one wave)."
      }
    ]
  },
  {
    sectionId: "coletta-ch26-s3",
    readingTime: 6,
    intro: "Single slits and gratings spread light by diffraction: one slit nulls at $a\\sin\\theta = m\\lambda$ while gratings sharpen maxima at $d\\sin\\theta = m\\lambda$. Coletta uses both to measure wavelengths and to set resolution limits. Spectrometers live here.",
    objectives: [
      "Locate single-slit minima with $a\\sin\\theta = m\\lambda$",
      "Apply the grating equation and explain its sharp bright orders",
      "Connect grating dispersion to resolving power"
    ],
    concepts: [
      {
        term: "Single-slit minima",
        kind: "theorem",
        statement: "A slit of width $a$ nulls at $a\\sin\\theta = m\\lambda$ ($m = \\pm1, \\dots$) with a central maximum twice as wide as the rest.",
        detail: "Narrowing $a$ widens the pattern: confinement in space spreads angles."
      },
      {
        term: "Diffraction grating",
        kind: "definition",
        statement: "A **grating** of thousands of slits per cm reinforces at $d\\sin\\theta = m\\lambda$ with extremely narrow bright orders.",
        detail: "A $600$-line/mm grating ($d = 1667$ nm) throws first-order green near $19^{\\circ}$."
      },
      {
        term: "Grating sharpness",
        kind: "insight",
        statement: "More illuminated slits narrow each order ($\u007e1/N$ width), so gratings resolve close wavelengths that double slits smear.",
        detail: "A $2$ cm wide $600$/mm grating holds $12{,}000$ lines and resolves $\\lambda/\\Delta\\lambda \\approx 12{,}000$ in first order."
      },
      {
        term: "Resolving power",
        kind: "notation",
        statement: "**Resolving power** $R = \\lambda/\\Delta\\lambda = mN$ prices wavelength sorting by order times lines used.",
        detail: "Separating sodium $589.0$/$589.6$ nm needs $R \\approx 983$, easy in second order with $500$ lines."
      },
      {
        term: "X-ray diffraction preview",
        kind: "insight",
        statement: "Crystal planes act as 3D gratings with Bragg $2d\\sin\\theta = m\\lambda$, extending these ideas to atomic spacings.",
        detail: "X-ray $0.1$ nm waves fit the $0.2$ nm lattice the way green fits micron slits." }
    ],
    examples: [
      {
        title: "Single-slit width",
        problem: "First minimum of $650$ nm light sits $4.0$ cm from center on a screen $2.0$ m away. Find $a$.",
        steps: [
          { label: "Angle", text: "$\\sin\\theta \\approx 0.040/2.0 = 0.020$." },
          { label: "Width", text: "$a = \\lambda/\\sin\\theta = 6.50 \\times 10^{-7}/0.020 = 3.25 \\times 10^{-5}$ m." },
          { label: "Check", text: "$32.5$ micrometers, a fine mechanical slit." }
        ],
        result: "About $33$ micrometers."
      },
      {
        title: "Grating order",
        problem: "A $500$-line/mm grating is lit by $550$ nm at normal incidence. Find first-order angle.",
        steps: [
          { label: "Spacing", text: "$d = 10^{-3}/500 = 2.0 \\times 10^{-6}$ m." },
          { label: "Angle", text: "$\\sin\\theta = \\lambda/d = 5.50 \\times 10^{-7}/2.0 \\times 10^{-6} = 0.275$." },
          { label: "Evaluate", text: "$\\theta = \\arcsin 0.275 \\approx 15.96^{\\circ}$." }
        ],
        result: "About $16^{\\circ}$."
      }
    ],
    keyTakeaways: [
      "Single slits null at $a\\sin\\theta = m\\lambda$ with a wide center.",
      "Gratings sharpen $d\\sin\\theta = m\\lambda$ orders for spectrometry.",
      "Resolving power $mN$ prices wavelength sorting."
    ],
    quiz: [
      {
        q: "Slit width halves. Central maximum width:",
        options: ["Vanishes", "Halves", "Doubles", "Unchanged"],
        answer: 2,
        explanation: "Angles scale as $\\lambda/a$, so halving $a$ doubles the spread."
      },
      {
        q: "Grating orders sharpen when the beam covers:",
        options: ["Fewer lines", "More lines", "Wider slits only", "No grating"],
        answer: 1,
        explanation: "Width scales as $1/N$; more coherent contributors narrow the peak."
      },
      {
        q: "First-order grating angle grows when:",
        options: ["$\\lambda$ grows", "Order drops", "Screen nears", "$d$ grows"],
        answer: 0,
        explanation: "$\\sin\\theta = m\\lambda/d$ rises with wavelength."
      }
    ]
  },
  {
    sectionId: "coletta-ch26-s4",
    readingTime: 5,
    intro: "Polarization filters light by the direction of $\\vec{E}$, proving transverseness. Coletta covers Malus's $I = I_{0}\\cos^{2}\\theta$, Brewster's angle, and scattering's blue sky. Sunglasses and LCDs are applied polarization.",
    objectives: [
      "Apply Malus's law $I = I_{0}\\cos^{2}\\theta$ through polarizer pairs",
      "Find Brewster's angle $\\tan\\theta_{B} = n_{2}/n_{1}$ for glare-free reflection",
      "Explain sky polarization by scattering"
    ],
    concepts: [
      {
        term: "Polarization",
        kind: "definition",
        statement: "**Polarization** is the direction of $\\vec{E}$ oscillation; **unpolarized** light mixes all directions equally.",
        detail: "A polarizer passes one axis (ideally half the intensity) and blocks the cross axis."
      },
      {
        term: "Malus's law",
        kind: "law",
        statement: "Polarized intensity $I_{0}$ through an analyzer at angle $\\theta$ gives $I = I_{0}\\cos^{2}\\theta$: aligned passes, crossed blocks.",
        detail: "Crossed ideal polarizers ($90^{\\circ}$) transmit zero; inserting a $45^{\\circ}$ middle leaks $25$ percent of the original."
      },
      {
        term: "Brewster's angle",
        kind: "theorem",
        statement: "Reflection polarizes completely at $\\tan\\theta_{B} = n_{2}/n_{1}$ (about $53^{\\circ}$ air-to-glass), with reflected and refracted rays $90^{\\circ}$ apart.",
        detail: "Polarized sunglasses exploit this by blocking the horizontally polarized road glare."
      },
      {
        term: "Scattering polarization",
        kind: "insight",
        statement: "Molecules scatter transverse waves sideways as polarized light, painting the $90^{\\circ}$-from-Sun sky strongly polarized and blue by $1/\\lambda^{4}$.",
        detail: "Bees navigate by this pattern through their polarization-sensitive eyes."
      },
      {
        term: "LCD mechanism",
        kind: "method",
        statement: "Liquid crystals twist polarization between crossed polarizers pixel by pixel; voltage untwists selected pixels to black.",
        detail: "Each subpixel is a voltage-gated light valve, not a tiny lamp." }
    ],
    figures: [
      {
        caption: "Malus analyzer: $I = I_{0}\\cos^{2}\\theta$ from aligned to crossed",
        svg: '<svg role="img" aria-label="Malus analyzer: I = I_0cos^2theta from aligned to crossed" viewBox="0 0 400 130" width="100%" height="130"><line x1="60" y1="20" x2="60" y2="110" stroke="currentColor" stroke-width="3"/><line x1="200" y1="20" x2="200" y2="110" stroke="currentColor" stroke-width="3"/><line x1="185" y1="25" x2="215" y2="25" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="185" y1="65" x2="215" y2="65" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="185" y1="105" x2="215" y2="105" stroke="currentColor" stroke-width="1" opacity="0.4"/><line x1="60" y1="65" x2="200" y2="65" stroke="currentColor" stroke-width="2"/><text x="60" y="125" text-anchor="middle" font-size="11" fill="currentColor">polarizer</text><text x="200" y="125" text-anchor="middle" font-size="11" fill="currentColor">analyzer θ</text><text x="310" y="70" font-size="12" fill="currentColor">I = I0 cos²θ</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Sunglasses pair",
        problem: "Unpolarized $800$ lux meets two polarizers at $30^{\\circ}$ between axes. Find transmitted illuminance (ideal).",
        steps: [
          { label: "First polarizer", text: "Halves: $400$ lux polarized along axis one." },
          { label: "Malus", text: "$I = 400\\cos^{2}30 = 400 \\times 0.75 = 300$ lux." },
          { label: "Note", text: "Real sheets absorb more, transmitting nearer $25$ percent overall." }
        ],
        result: "About $300$ lux ideally."
      },
      {
        title: "Brewster glare",
        problem: "Find Brewster's angle for air ($n = 1.00$) to water ($n = 1.33$).",
        steps: [
          { label: "Formula", text: "$\\tan\\theta_{B} = 1.33$." },
          { label: "Angle", text: "$\\theta_{B} = \\arctan 1.33 \\approx 53.1^{\\circ}$ from normal." },
          { label: "Use", text: "Cameras polarize at this incidence to erase water glare." }
        ],
        result: "About $53^{\\circ}$."
      }
    ],
    keyTakeaways: [
      "Polarizers pass one $\\vec{E}$ axis; Malus prices tilted pairs.",
      "Brewster reflection polarizes glare for sunglasses to kill.",
      "Scattered skylight is polarized and blue."
    ],
    quiz: [
      {
        q: "Ideal polarizer on unpolarized light transmits:",
        options: ["One quarter", "Zero", "All", "Half"],
        answer: 3,
        explanation: "Averaging $\\cos^{2}$ over all incident angles gives $1/2$."
      },
      {
        q: "Crossed ideal polarizers transmit:",
        options: ["Double", "Half", "Zero", "Full"],
        answer: 2,
        explanation: "$\\cos^{2}90^{\\circ} = 0$ blocks the polarized beam completely."
      },
      {
        q: "Sky light $90^{\\circ}$ from the Sun is strongly polarized because scattering is:",
        options: ["Longitudinal", "Transverse dipole radiation", "Magnetic only", "Quantum tunneling"],
        answer: 1,
        explanation: "Sideways dipoles cannot radiate along their axis, filtering one polarization."
      }
    ]
  }
]
