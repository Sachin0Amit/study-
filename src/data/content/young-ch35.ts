import type { SectionContent } from "../library";

// Young & Freedman University Physics 15th ed., Chapter 35: Interference.

export const youngCh35Content: SectionContent[] = [
  {
    sectionId: "young-ch35-s1",
    readingTime: 5,
    intro: "Interference needs coherence: waves marching in lockstep long enough to hold a stable phase relationship. Separate light bulbs cannot interfere; split light from one source can. Young defines temporal and spatial coherence as the gatekeepers of every fringe in this chapter.",
    objectives: [
      "Define coherent versus incoherent sources",
      "Distinguish temporal and spatial coherence with coherence length",
      "Explain why two independent bulbs show no fringes"
    ],
    concepts: [
      {
        term: "Coherence",
        kind: "definition",
        statement: "**Coherent waves hold fixed phase difference** over the observation time; incoherent ones randomize it and wash fringes to uniform glow.",
        detail: "Phase jitter faster than the eye or detector averages $\\cos\\delta$ to zero."
      },
      {
        term: "Common-source trick",
        kind: "method",
        statement: "**Split one wavefront or one amplitude**, then recombine: each copy shares the source's random jumps, preserving relative phase.",
        detail: "Young's slits split wavefront; thin films and Michelson split amplitude."
      },
      {
        term: "Temporal coherence",
        kind: "definition",
        statement: "**Coherence length $l_{c} \\sim \\lambda^{2}/\\Delta\\lambda$** is the path gap that still interferes; narrow lines interfere farther.",
        detail: "Filtered sodium ($\\Delta\\lambda \\sim 0.01$ nm) reaches centimeters; white light only microns."
      },
      {
        term: "Spatial coherence",
        kind: "definition",
        statement: "**Extended sources blur fringes** unless the source is small or distant enough that paths stay matched.",
        detail: "Sunlight through a pinhole gains spatial coherence at the price of brightness."
      },
      {
        term: "Monochromatic ideal",
        kind: "insight",
        statement: " Textbook fringes assume **single-$\\lambda$ coherent light**; lasers approximate it best, filters approximately.",
        detail: "Mixed colors superpose independent fringe systems, washing out beyond a few orders."
      }
    ],
    examples: [
      {
        title: "Coherence length of filtered light",
        problem: "$\\lambda = 589$ nm, $\\Delta\\lambda = 0.01$ nm. Estimate $l_{c}$.",
        steps: [
          { label: "Step 1: Formula", text: "$l_{c} \\approx \\lambda^{2}/\\Delta\\lambda = (589 \\times 10^{-9})^{2}/(0.01 \\times 10^{-9})$." },
          { label: "Step 2: Number", text: "$(3.469 \\times 10^{-13})/(10^{-11}) = 3.47 \\times 10^{-2}$ m." },
          { label: "Step 3: Meaning", text: "Arms differing by centimeters still fringe; white light ($l_{c} \\sim 1$ microM) needs matched glass." }
        ],
        result: "$l_{c} \\approx 3.5$ cm for the filtered sodium line."
      },
      {
        title: "Two bulbs never fringe",
        problem: "Two $1$ mW identical bulbs illuminate a screen. Why is there no fringe pattern?",
        steps: [
          { label: "Step 1: Random phases", text: "Each atomic emission randomizes phase every $\u2009\\sim 10^{-8}$ s independently per bulb." },
          { label: "Step 2: Averaging", text: "Detectors average billions of random $\\delta$ values; $\\langle\\cos\\delta\\rangle = 0$." },
          { label: "Step 3: Result", text: "Intensities add: $2$ times one bulb, uniform." }
        ],
        result: "Independent sources add intensities, never amplitudes."
      }
    ],
    keyTakeaways: [
      "Stable fringes need fixed relative phase: coherence.",
      "Split one source into two copies to guarantee coherence.",
      "Coherence length $\\lambda^{2}/\\Delta\\lambda$ limits allowable path gaps."
    ],
    quiz: [
      {
        q: "Coherent sources have:",
        options: ["Equal amplitude only", "Fixed phase difference over time", "Different frequencies", "Random polarization always"],
        answer: 1,
        explanation: "Fixed relative phase lets the cross term survive averaging."
      },
      {
        q: "Interference from two independent bulbs vanishes because:",
        options: ["Amplitudes are zero", "Relative phase randomizes faster than detection", "Wavelengths are too long", "Light is too dim"],
        answer: 1,
        explanation: "Averaged cosine of random phase is zero."
      },
      {
        q: "Narrower spectral line gives:",
        options: ["Shorter coherence length", "Longer coherence length", "No change", "Zero intensity"],
        answer: 1,
        explanation: "$l_{c} \\sim \\lambda^{2}/\\Delta\\lambda$ grows as linewidth shrinks."
      }
    ]
  },
  {
    sectionId: "young-ch35-s2",
    readingTime: 7,
    intro: "Young's double slit turns path difference into position: bright fringes where slits differ by whole wavelengths, dark where they differ by half. With slit spacing $d$ and screen distance $R$, fringe spacing $\\Delta y = R\\lambda/d$ measures wavelengths directly. This geometry is the chapter's flagship result.",
    objectives: [
      "Derive path difference $\\delta = d\\sin\\theta$ and bright condition $d\\sin\\theta = m\\lambda$",
      "Compute fringe positions $y_{m} = Rm\\lambda/d$ in the small-angle limit",
      "Use fringe spacing to measure $\\lambda$ or $d$"
    ],
    concepts: [
      {
        term: "Path difference",
        kind: "theorem",
        statement: "Far-field rays from slits spaced $d$ differ by **$\\delta = d\\sin\\theta$**, constructive when $\\delta = m\\lambda$.",
        detail: "Right-triangle geometry with nearly parallel rays gives the sine projection."
      },
      {
        term: "Bright and dark fringes",
        kind: "law",
        statement: "**Bright: $d\\sin\\theta = m\\lambda$**; **dark: $d\\sin\\theta = (m+1/2)\\lambda$** for integers $m$.",
        detail: "Whole waves reinforce; half-wave offsets cancel."
      },
      {
        term: "Small-angle screen positions",
        kind: "theorem",
        statement: "On a distant screen **$y_{m} = Rm\\lambda/d$**, evenly spaced by **$\\Delta y = R\\lambda/d$**.",
        detail: "With $\\sin\\theta \\approx \\tan\\theta = y/R$ the pattern becomes a ruler for $\\lambda$."
      },
      {
        term: "Order number",
        kind: "notation",
        statement: "**$m = 0, \\pm 1, \\pm 2$** counts fringes from center; higher orders spread wider and fade with coherence.",
        detail: "White light shows color-fringed orders because each $\\lambda$ scales its own $y_{m}$."
      },
      {
        term: "Why slits must be narrow",
        kind: "insight",
        statement: "Each slit must be **narrow enough to diffract broadly** so the two beams overlap; wide slits envelope the fringes.",
        detail: "Chapter 36 multiplies this fringe comb by the single-slit envelope."
      }
    ],
    figures: [
      {
        caption: "Double slit geometry: path difference $d\\sin\\theta$ gives $y_{m} = Rm\\lambda/d$ on a distant screen",
        svg: '<svg viewBox="0 0 400 210" style="width:100%;height:auto" role="img" aria-label="Double slit geometry: path difference dsintheta gives y_m = Rmlambda/d on a distant screen"><rect x="0" y="0" width="400" height="210" fill="none"/><line x1="100" y1="30" x2="100" y2="180" stroke="currentColor" stroke-width="3"/><rect x="96" y="88" width="8" height="10" fill="none" stroke="currentColor" stroke-width="1"/><rect x="96" y="112" width="8" height="10" fill="none" stroke="currentColor" stroke-width="1"/><line x1="100" y1="93" x2="340" y2="60" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="117" x2="340" y2="60" stroke="currentColor" stroke-width="1.5"/><line x1="340" y1="20" x2="340" y2="190" stroke="currentColor" stroke-width="2"/><path d="M 100 93 L 128 93 L 128 97" fill="none" stroke="currentColor" stroke-width="1"/><text x="132" y="97" font-size="12" fill="currentColor">d sin(theta)</text><text x="345" y="65" font-size="12" fill="currentColor">ym</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Measuring green light",
        problem: "Slits $d = 0.250$ mm, screen $R = 1.20$ m; third bright fringe at $y_{3} = 8.64$ mm. Find $\\lambda$.",
        steps: [
          { label: "Step 1: Formula", text: "$\\lambda = y_{m}d/(Rm) = (8.64 \\times 10^{-3})(0.250 \\times 10^{-3})/(1.20 \\times 3)$." },
          { label: "Step 2: Number", text: "Numerator $2.16 \\times 10^{-6}$; denominator $3.60$; $\\lambda = 6.00 \\times 10^{-7}$ m." },
          { label: "Step 3: Color", text: "$600$ nm orange; spacing check $R\\lambda/d = 2.88$ mm per order." }
        ],
        result: "$\\lambda = 600$ nm."
      },
      {
        title: "Fringe spacing design",
        problem: "Want $\\Delta y = 2.00$ mm with $\\lambda = 500$ nm on $R = 2.00$ m. Choose $d$.",
        steps: [
          { label: "Step 1: Invert", text: "$d = R\\lambda/\\Delta y = (2.00)(500 \\times 10^{-9})/(2.00 \\times 10^{-3})$." },
          { label: "Step 2: Number", text: "$d = 5.00 \\times 10^{-4}$ m $= 0.500$ mm." },
          { label: "Step 3: Orders", text: "Tenth order sits $20.0$ mm out, still paraxial." }
        ],
        result: "$d = 0.500$ mm gives $2.00$ mm fringes."
      }
    ],
    keyTakeaways: [
      "Path gap $d\\sin\\theta$ decides bright ($m\\lambda$) versus dark (half-integer).",
      "Distant-screen fringes sit at $y_{m} = Rm\\lambda/d$, spacing $R\\lambda/d$.",
      "Fringe metrology measures $\\lambda$ from geometry alone."
    ],
    quiz: [
      {
        q: "d = 0.1 mm, lambda = 500 nm, R = 1 m. Fringe spacing is:",
        options: ["$0.5$ mm", "$5.0$ mm", "$50$ mm", "$0.05$ mm"],
        answer: 1,
        explanation: "$R\\lambda/d = 1\\times 5\\times 10^{-7}/10^{-4} = 5\\times 10^{-3}$ m."
      },
      {
        q: "Third dark fringe satisfies:",
        options: ["$d sin theta = 3 lambda$", "$d sin theta = 2.5 lambda$", "$d sin theta = 3.5 lambda$", "$d sin theta = 0$"],
        answer: 1,
        explanation: "Dark means half-integer: m = 2 gives 2.5 lambda for the third (0-indexed) dark."
      },
      {
        q: "Doubling slit spacing d:",
        options: ["Doubles fringe spacing", "Halves fringe spacing", "No change", "Doubles brightness only"],
        answer: 1,
        explanation: "Spacing $R\\lambda/d$ is inverse in d."
      },
      {
        q: "White-light double slit shows:",
        options: ["Sharp white fringes everywhere", "White center, color-fringed orders", "No fringes", "Only red fringes"],
        answer: 1,
        explanation: "Each color scales its own comb; only m = 0 overlaps fully."
      }
    ]
  },
  {
    sectionId: "young-ch35-s3",
    readingTime: 7,
    intro: "Amplitudes add, then square: $I = I_{0}\\cos^{2}(\\phi/2)$ maps phase gap $\\phi = 2\\pi d\\sin\\theta/\\lambda$ to brightness. Phasor addition of the two waves makes the cosine law obvious. Maxima hit $4I_{0}$ while staying energy-conserving on average.",
    objectives: [
      "Relate phase $\\phi = 2\\pi\\delta/\\lambda$ to path difference",
      "Derive $I = I_{0}\\cos^{2}(\\phi/2)$ with peak $4I_{0}$",
      "Add two waves as phasors for arbitrary phase"
    ],
    concepts: [
      {
        term: "Phase from path",
        kind: "definition",
        statement: "Path gap $\\delta$ converts to phase **$\\phi = 2\\pi\\delta/\\lambda = (2\\pi d/\\lambda)\\sin\\theta$**.",
        detail: "One full wavelength of extra path is $2\\pi$ radians of phase."
      },
      {
        term: "Two-slit intensity law",
        kind: "theorem",
        statement: "Equal slits of single intensity $I_{0}$ give **$I = 4I_{0}\\cos^{2}(\\phi/2)$**.",
        detail: "Center $\\phi = 0$ quadruples; nulls $\\phi = \\pi$ cancel exactly."
      },
      {
        term: "Phasor proof",
        kind: "method",
        statement: "Place two amplitude phasors tip-to-tail at angle $\\phi$; **resultant $2A\\cos(\\phi/2)$**, squared for intensity.",
        detail: "Same vector tool as AC circuits, now for optical fields."
      },
      {
        term: "Energy check",
        kind: "insight",
        statement: "Average over fringes is **$2I_{0}$**, exactly the incoherent sum; interference redistributes, never creates, energy.",
        detail: "$\\langle\\cos^{2}\\rangle = 1/2$ times peak $4I_{0}$ gives $2I_{0}$."
      },
      {
        term: "Unequal slits",
        kind: "theorem",
        statement: "With $I_{1} \\ne I_{2}$, **$I = I_{1}+I_{2}+2\\sqrt{I_{1}I_{2}}\\cos\\phi$**; contrast drops below full extinction.",
        detail: "Visibility $V = 2\\sqrt{I_{1}I_{2}}/(I_{1}+I_{2})$ quantifies fringe depth."
      }
    ],
    figures: [
      {
        caption: "Phasor sum of two equal waves: resultant $2A\cos(\phi/2)$ closes at $\phi = \pi$",
        svg: '<svg viewBox="0 0 400 190" style="width:100%;height:auto" role="img" aria-label="Phasor sum of two equal waves: resultant 2A\cos(\phi/2) closes at \phi = \pi"><rect x="0" y="0" width="400" height="190" fill="none"/><line x1="120" y1="95" x2="220" y2="95" stroke="currentColor" stroke-width="2.5"/><line x1="220" y1="95" x2="300" y2="45" stroke="currentColor" stroke-width="2.5"/><line x1="120" y1="95" x2="300" y2="45" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,4"/><path d="M 250 95 A 30 30 0 0 0 245 75" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="255" y="90" font-size="12" fill="currentColor">phi</text><text x="150" y="115" font-size="12" fill="currentColor">A</text><text x="250" y="60" font-size="12" fill="currentColor">A</text><text x="200" y="160" font-size="12" fill="currentColor">bright phi=0; dark phi=pi (folded back)</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Halfway to the null",
        problem: "Two-slit peak single intensity $I_{0} = 1.00$ mW/m-squared. Find $I$ at $\\phi = 60^{\\circ}$.",
        steps: [
          { label: "Step 1: Law", text: "$I = 4I_{0}\\cos^{2}(\\phi/2) = 4(1.00)\\cos^{2}30^{\\circ}$." },
          { label: "Step 2: Number", text: "$\\cos 30^{\\circ} = 0.8660$; squared $0.750$; $I = 3.00$ mW/m-squared." },
          { label: "Step 3: Sense", text: "Still $75$ percent of the $4.00$ peak only $30$ degrees of half-phase out." }
        ],
        result: "$I = 3.00$ mW/m-squared."
      },
      {
        title: "Unequal-slit contrast",
        problem: "Slit intensities $9$ and $4$ units. Find max, min, and visibility.",
        steps: [
          { label: "Step 1: Extrema", text: "$I_{max} = (3+2)^{2} = 25$; $I_{min} = (3-2)^{2} = 1$." },
          { label: "Step 2: Visibility", text: "$V = (25-1)/(25+1) = 24/26 = 0.923$." },
          { label: "Step 3: Lesson", text: "Nearly full contrast persists despite $2:1$ amplitude ratio." }
        ],
        result: "$25$ max, $1$ min, visibility $92$ percent."
      }
    ],
    keyTakeaways: [
      "Phase $\\phi = 2\\pi d\\sin\\theta/\\lambda$ drives $I = 4I_{0}\\cos^{2}(\\phi/2)$.",
      "Peaks quadruple single-slit intensity; nulls cancel fully for equal slits.",
      "Averaged brightness still sums to $2I_{0}$: redistribution, not creation."
    ],
    quiz: [
      {
        q: "Equal slits, phase phi = pi. Intensity is:",
        options: ["$4I_0$", "$2I_0$", "Zero", "$I_0$"],
        answer: 2,
        explanation: "$\\cos^{2}(\\pi/2) = 0$ full cancellation."
      },
      {
        q: "Peak double-slit intensity versus one slit alone is:",
        options: ["Equal", "Double", "Quadruple", "Half"],
        answer: 2,
        explanation: "Amplitudes double so intensity quadruples at the center."
      },
      {
        q: "Unequal slits reduce:",
        options: ["Fringe positions", "Fringe contrast (visibility)", "Wavelength", "Screen distance"],
        answer: 1,
        explanation: "Minima no longer reach zero; formula with cross term quantifies it."
      }
    ]
  },
  {
    sectionId: "young-ch35-s4",
    readingTime: 8,
    intro: "Soap bubbles shine by amplitude splitting: one reflection off the top surface interferes with one off the bottom. The $180^{\\circ}$ flip at a higher-index bounce plus $2nt$ of travel decides the color. Quarter-wave coatings weaponize the same physics to kill reflections.",
    objectives: [
      "State reflection phase-shift rules for $n$ steps up versus down",
      "Derive thin-film conditions $2nt = m\\lambda$ versus $(m+1/2)\\lambda$ per case",
      "Design single-layer antireflection coatings"
    ],
    concepts: [
      {
        term: "Reflection phase shifts",
        kind: "law",
        statement: "**Higher-$n$ bounce flips phase by $\\pi$; lower-$n$ bounce flips nothing**; transmission never flips.",
        detail: "Air-to-glass reflects inverted; glass-to-air reflects upright."
      },
      {
        term: "Film in air (soap)",
        kind: "theorem",
        statement: "One flip total, so **dark: $2nt = m\\lambda$; bright: $2nt = (m+1/2)\\lambda$** for near-normal viewing.",
        detail: "Zero thickness is dark (king's black): the two flips cancel exactly."
      },
      {
        term: "Newton's rings",
        kind: "method",
        statement: "Air wedge of varying $t$ maps **equal-thickness contours as rings** with $r_{m} = \\sqrt{m\\lambda R}$ for dark rings.",
        detail: "Lens-on-flat gap grows quadratically, so rings crowd outward."
      },
      {
        term: "Antireflection coating",
        kind: "method",
        statement: "Coat with $n_{c} = \\sqrt{n_{glass}}$ at **quarter-wave thickness $t = \\lambda/(4n_{c})$** so the two reflections cancel.",
        detail: "Magnesium fluoride ($n = 1.38$) on glass ($1.52$) kills green glare; multilayers broadband it."
      },
      {
        term: "Color from white",
        kind: "insight",
        statement: "Each $t$ **cancels one band and boosts its complement**, painting thickness as hue under white light.",
        detail: "Oil slicks and temper colors are thickness maps read by eye."
      }
    ],
    figures: [
      {
        caption: "Thin film: top bounce flips by $\\pi$, bottom path adds $2nt$; $2nt = m\\lambda$ cancels for soap in air",
        svg: '<svg viewBox="0 0 400 210" style="width:100%;height:auto" role="img" aria-label="Thin film: top bounce flips by pi, bottom path adds 2nt; 2nt = mlambda cancels for soap in air"><rect x="0" y="0" width="400" height="210" fill="none"/><rect x="80" y="90" width="240" height="50" fill="none" stroke="currentColor" stroke-width="2"/><text x="170" y="118" font-size="13" fill="currentColor">film n, t</text><line x1="140" y1="30" x2="170" y2="90" stroke="currentColor" stroke-width="2"/><line x1="170" y1="90" x2="120" y2="30" stroke="currentColor" stroke-width="2"/><line x1="170" y1="90" x2="190" y2="140" stroke="currentColor" stroke-width="1.5"/><line x1="190" y1="140" x2="240" y2="60" stroke="currentColor" stroke-width="1.5"/><text x="95" y="50" font-size="12" fill="currentColor">pi flip</text><text x="245" y="60" font-size="12" fill="currentColor">no flip + 2nt</text><text x="80" y="170" font-size="12" fill="currentColor">air above and below: one flip total</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Soap color at 300 nm",
        problem: "Soap $n = 1.33$, $t = 300$ nm in air, normal viewing. Which $\\lambda$ is brightest in reflection?",
        steps: [
          { label: "Step 1: Bright condition", text: "$2nt = (m+1/2)\\lambda$; $2nt = 2(1.33)(300) = 798$ nm." },
          { label: "Step 2: Orders", text: "$m = 0$: $\\lambda = 1596$ nm infrared; $m = 1$: $\\lambda = 798/1.5 = 532$ nm green." },
          { label: "Step 3: Color", text: "Green boosted, magenta (its complement) deepened; visible color is green." }
        ],
        result: "$532$ nm green bright; film looks green-magenta patterned."
      },
      {
        title: "AR coating for green",
        problem: "Design $\\lambda = 550$ nm AR coat on glass $n = 1.52$ with $n_{c} = 1.38$.",
        steps: [
          { label: "Step 1: Check flips", text: "Air-to-coat flips; coat-to-glass flips: two flips, so cancel needs $2n_{c}t = \\lambda/2$." },
          { label: "Step 2: Thickness", text: "$t = \\lambda/(4n_{c}) = 550/(4 \\times 1.38) = 99.6$ nm." },
          { label: "Step 3: Note", text: "Exact only at $550$ nm normal; stacks widen the band." }
        ],
        result: "$t \\approx 100$ nm of MgF2 kills green reflection."
      }
    ],
    keyTakeaways: [
      "Count pi flips first, then add $2nt$ of travel phase.",
      "Soap in air: dark at $2nt = m\\lambda$, bright at half-integer.",
      "Quarter-wave $n_{c} = \\sqrt{n}$ coatings cancel glare by the same rule."
    ],
    quiz: [
      {
        q: "Air-to-glass reflection phase shift is:",
        options: ["Zero", "pi (half wave)", "pi/2", "2pi"],
        answer: 1,
        explanation: "Higher-n bounce inverts the field."
      },
      {
        q: "Soap film in air at zero thickness looks:",
        options: ["Bright white", "Dark", "Red", "Blue"],
        answer: 1,
        explanation: "One net flip makes the two equal reflections cancel: $2nt = 0 = m lambda$ dark."
      },
      {
        q: "AR coating thickness for lambda in medium is:",
        options: ["Half wave", "Quarter wave", "Full wave", "Two waves"],
        answer: 1,
        explanation: "Round trip $2nt = lambda/2$ needs $t = lambda/(4n)$ with matched flips."
      },
      {
        q: "Newton's rings map:",
        options: ["Equal angle", "Equal thickness", "Equal index", "Equal time"],
        answer: 1,
        explanation: "Each ring is a contour of constant gap t."
      }
    ]
  },
  {
    sectionId: "young-ch35-s5",
    readingTime: 6,
    intro: "Michelson split one beam, bounced the halves down perpendicular arms, and recombined them to count wavelengths. Moving one mirror by $\\lambda/4$ swaps bright for dark; counting fringes measures distance to nanometers. The null ether result also crowned relativity.",
    objectives: [
      "Trace Michelson arms and the $2d$ path difference",
      "Convert fringe count $N$ to displacement $\\Delta d = N\\lambda/2$",
      "Explain the Michelson-Morley null result significance"
    ],
    concepts: [
      {
        term: "Interferometer layout",
        kind: "definition",
        statement: "Beam splitter sends halves to **mirrors M1, M2 and recombines** them; compensator glass equalizes dispersion.",
        detail: "Extended source gives circular fringes of equal inclination; collimated gives straight fringes."
      },
      {
        term: "Fringe counting rule",
        kind: "theorem",
        statement: "Mirror shift $\\Delta d$ changes round trip by $2\\Delta d$, so **$N = 2\\Delta d/\\lambda$ fringes pass**.",
        detail: "$\\lambda/4$ motion flips bright to dark; $\\lambda/2$ advances one full fringe."
      },
      {
        term: "Metrology",
        kind: "method",
        statement: "Counting $N$ with known $\\lambda$ **measures length to fractions of a wave**; known $d$ measures $\\lambda$.",
        detail: "Gauge blocks, Fourier spectrometers, and LIGO all descend from this counting."
      },
      {
        term: "Michelson-Morley null",
        kind: "law",
        statement: "No ether-wind fringe shift appeared on rotation, forcing **$c$ constant in all frames** and seeding special relativity.",
        detail: "Expected $0.4$ fringe shift at $30$ km/s orbital speed; observed below $0.01$."
      },
      {
        term: "LIGO scale-up",
        kind: "insight",
        statement: "LIGO is a **$4$ km Michelson measuring $10^{-19}$ m** via Fabry-Perot arm multiplication and power recycling.",
        detail: "Gravitational waves appear as differential arm strain oscillating the fringe."
      }
    ],
    examples: [
      {
        title: "Counting to microns",
        problem: "$N = 500$ red fringes ($\\lambda = 633$ nm) pass as a mirror moves. Find $\\Delta d$.",
        steps: [
          { label: "Step 1: Rule", text: "$\\Delta d = N\\lambda/2 = 500(633 \\times 10^{-9})/2$." },
          { label: "Step 2: Number", text: "$= 1.5825 \\times 10^{-4}$ m $= 158$ microM." },
          { label: "Step 3: Precision", text: "Half-fringe interpolation reaches tens of nm with cheap optics." }
        ],
        result: "Mirror moved $158$ microM."
      },
      {
        title: "Ether expectation",
        problem: "Arms $L = 11$ m, $\\lambda = 500$ nm, ether wind $v = 3.0 \\times 10^{4}$ m/s. Estimate expected shift.",
        steps: [
          { label: "Step 1: Fractional", text: "Round-trip difference $\\approx 2L(v^{2}/c^{2})/\\lambda$." },
          { label: "Step 2: Number", text: "$v^{2}/c^{2} = 10^{-8}$; $N = 2(11)(10^{-8})/(5 \\times 10^{-7}) = 0.44$ fringe." },
          { label: "Step 3: Null", text: "Apparatus resolved $0.01$ fringe yet saw none: ether ruled out." }
        ],
        result: "Expected $0.44$ fringe, observed zero."
      }
    ],
    keyTakeaways: [
      "Michelson converts $\\Delta d$ to counted fringes via $N = 2\\Delta d/\\lambda$.",
      "Quarter-wave motion flips the fringe; half-wave advances one.",
      "Null ether drift made $c$ invariant and launched relativity."
    ],
    quiz: [
      {
        q: "Mirror moves lambda/4 in Michelson. Fringe changes by:",
        options: ["Full fringe", "Half fringe (bright to dark)", "Quarter fringe", "None"],
        answer: 1,
        explanation: "Round trip $lambda/2$ is half a cycle."
      },
      {
        q: "100 fringes of 500 nm light pass. Mirror moved:",
        options: ["$50$ microns", "$25$ microns", "$100$ microns", "$10$ microns"],
        answer: 1,
        explanation: "$100\\times 500/2$ nm $= 25{,}000$ nm $= 25$ microns."
      },
      {
        q: "Michelson-Morley null implied:",
        options: ["Ether exists", "c is frame independent", "Light is sound", "Mirrors contract glass"],
        answer: 1,
        explanation: "No wind shift survived, forcing invariant light speed."
      }
    ]
  }
];
