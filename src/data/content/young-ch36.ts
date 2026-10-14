import type { SectionContent } from "../library";

// Young & Freedman University Physics 15th ed., Chapter 36: Diffraction.

export const youngCh36Content: SectionContent[] = [
  {
    sectionId: "young-ch36-s1",
    readingTime: 5,
    intro: "Diffraction is Huygens spilling past edges, and its look depends on distance. Near-field Fresnel patterns show curved-wave structure; far-field Fraunhofer patterns are Fourier transforms with clean minima. Young sets the regimes so every later formula knows its domain.",
    objectives: [
      "Distinguish Fresnel versus Fraunhofer regimes",
      "State the far-field condition $R \\gg a^{2}/\\lambda$",
      "Explain why Fraunhofer patterns use parallel rays"
    ],
    concepts: [
      {
        term: "Diffraction defined",
        kind: "definition",
        statement: "**Deviation from ray propagation at edges and apertures**, from soft shadow borders to full fringe systems.",
        detail: "Always present; visible when $\\lambda$ rivals aperture size."
      },
      {
        term: "Fresnel regime",
        kind: "definition",
        statement: "**Near-field**: source and screen close, wave curvature matters, patterns are aperture images with fringed edges.",
        detail: "Exact integrals needed; straight-edge Cornu spirals live here."
      },
      {
        term: "Fraunhofer regime",
        kind: "theorem",
        statement: "**Far-field ($R \\gg a^{2}/\\lambda$)**: rays are parallel, phase is linear across the aperture, patterns are Fourier transforms.",
        detail: "Lenses pull infinity to their focal plane, so lab patterns are Fraunhofer at focus."
      },
      {
        term: "Fresnel number",
        kind: "notation",
        statement: "**$F = a^{2}/(R\\lambda)$**: $F \\gg 1$ Fresnel, $F \\ll 1$ Fraunhofer, $F \\sim 1$ transition.",
        detail: "$1$ mm slit at $1$ m with $500$ nm gives $F = 2$: borderline."
      },
      {
        term: "Why two theories",
        kind: "insight",
        statement: "Fraunhofer trades generality for **closed-form sinc and grating formulas**; Fresnel keeps curvature at the cost of special functions.",
        detail: "This chapter is Fraunhofer except for this section's framing."
      }
    ],
    examples: [
      {
        title: "Which regime?",
        problem: "Slit $a = 0.100$ mm, $\\lambda = 550$ nm, screen $R = 2.00$ m. Fresnel or Fraunhofer?",
        steps: [
          { label: "Step 1: Fresnel number", text: "$F = a^{2}/(R\\lambda) = (10^{-4})^{2}/(2.00 \\times 5.50 \\times 10^{-7}) = 10^{-8}/(1.10 \\times 10^{-6}) = 0.0091$." },
          { label: "Step 2: Verdict", text: "$F \\ll 1$: safely Fraunhofer." },
          { label: "Step 3: Contrast", text: "At $R = 2$ cm, $F = 0.91$: transitional Fresnel structure." }
        ],
        result: "Fraunhofer at $2$ m; borderline at centimeters."
      },
      {
        title: "Lens trick",
        problem: "Why does a lens give Fraunhofer at its focus even for close screens?",
        steps: [
          { label: "Step 1: Phase flattening", text: "Lens adds quadratic phase canceling curvature to the focal plane." },
          { label: "Step 2: Parallel mapping", text: "Each focal-plane point collects one parallel direction, exactly the far-field variable." },
          { label: "Step 3: Lab use", text: "Spectrometers place gratings before a lens and read Fraunhofer at focus." }
        ],
        result: "Focal plane is optical infinity."
      }
    ],
    keyTakeaways: [
      "Fresnel is near with curvature; Fraunhofer is far with parallel rays.",
      "$F = a^{2}/(R\\lambda) \\ll 1$ certifies Fraunhofer formulas.",
      "Lenses deliver Fraunhofer patterns to their focal planes."
    ],
    quiz: [
      {
        q: "Fraunhofer condition is:",
        options: ["R comparable to a", "R much larger than a-squared over lambda", "R zero", "Coherent only"],
        answer: 1,
        explanation: "Parallel-ray phase linearity needs large R or a lens."
      },
      {
        q: "Fresnel patterns differ by showing:",
        options: ["Pure sinc envelopes", "Curved-wave edge structure near the aperture", "No light at all", "Only polarization"],
        answer: 1,
        explanation: "Near field keeps quadratic phase and aperture imaging."
      },
      {
        q: "A lens at its focal plane yields:",
        options: ["Fresnel pattern", "Fraunhofer pattern", "Geometric shadow only", "No pattern"],
        answer: 1,
        explanation: "Lens maps directions to points, mimicking infinity."
      }
    ]
  },
  {
    sectionId: "young-ch36-s2",
    readingTime: 6,
    intro: "A single slit fans light into a broad central maximum twice as wide as its neighbors, with dark fringes at $a\\sin\\theta = m\\lambda$. Pairwise cancellation across the slit explains every minimum geometrically. Width and wavelength trade directly: narrower slit, wider pattern.",
    objectives: [
      "State single-slit minima $a\\sin\\theta = m\\lambda$ ($m \\ne 0$)",
      "Explain pairwise cancellation reasoning",
      "Compute central-maximum width $2R\\lambda/a$"
    ],
    concepts: [
      {
        term: "Single-slit minima",
        kind: "law",
        statement: "**Dark fringes at $a\\sin\\theta = m\\lambda$**, $m = \\pm 1, \\pm 2$, never $m = 0$.",
        detail: "Central peak spans $m = -1$ to $+1$, twice the width of side lobes."
      },
      {
        term: "Pairwise cancellation",
        kind: "method",
        statement: "Split the slit in halves (or $2m$ strips): **each point cancels a partner $a/2$ away** contributing half-wave path at the minimum.",
        detail: "Generalizes to any $m$ by $2m$ strips; elegant geometry replacing integrals."
      },
      {
        term: "Central width",
        kind: "theorem",
        statement: "Distant screen width **$W = 2R\\lambda/a$** between first minima.",
        detail: "$a = 0.1$ mm, $R = 2$ m, $550$ nm gives $W = 22$ mm."
      },
      {
        term: "Reciprocity",
        kind: "insight",
        statement: "**Narrower slit means wider pattern**: confinement in space spreads angles, a classical uncertainty preview.",
        detail: "Laser alignment slits exploit the fat bright center of a narrow opening."
      },
      {
        term: "Missing m = 0",
        kind: "insight",
        statement: "Zero path gap at $\\theta = 0$ means **all wavelets agree**, so the center is the brightest maximum, never a minimum.",
        detail: "$m = 0$ in the formula would falsely predict darkness on axis."
      }
    ],
    figures: [
      {
        caption: "Single slit: halves cancel when $a\\sin\\theta = \\lambda$, giving dark fringes at $a\\sin\\theta = m\\lambda$",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Single slit: halves cancel when asintheta = lambda, giving dark fringes at asintheta = mlambda"><rect x="0" y="0" width="400" height="200" fill="none"/><line x1="100" y1="30" x2="100" y2="170" stroke="currentColor" stroke-width="3"/><rect x="96" y="85" width="8" height="30" fill="none" stroke="currentColor" stroke-width="1"/><line x1="100" y1="85" x2="340" y2="60" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="115" x2="340" y2="60" stroke="currentColor" stroke-width="1.5"/><text x="60" y="95" font-size="12" fill="currentColor">top half</text><text x="55" y="125" font-size="12" fill="currentColor">bottom half</text><text x="200" y="70" font-size="12" fill="currentColor">cancel: half-wave gap</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "First minimum position",
        problem: "$a = 0.0800$ mm, $\\lambda = 633$ nm, $R = 1.50$ m. Where is the first dark fringe?",
        steps: [
          { label: "Step 1: Angle", text: "$\\sin\\theta = \\lambda/a = 633 \\times 10^{-9}/(8.00 \\times 10^{-5}) = 0.007913$." },
          { label: "Step 2: Position", text: "$y = R\\tan\\theta \\approx R\\sin\\theta = 1.50 \\times 0.007913 = 0.01187$ m." },
          { label: "Step 3: Width", text: "Central max spans $\\pm 11.9$ mm, full width $23.7$ mm." }
        ],
        result: "First minima at $\\pm 11.9$ mm; center $23.7$ mm wide."
      },
      {
        title: "Sound versus light slit",
        problem: "Door $a = 1$ m: compare first-minimum angles for $500$ Hz sound ($\\lambda = 0.68$ m) and $500$ nm light.",
        steps: [
          { label: "Step 1: Sound", text: "$\\sin\\theta = 0.68/1.00 = 0.68$, $\\theta = 42.8^{\\circ}$: huge fan." },
          { label: "Step 2: Light", text: "$\\sin\\theta = 5 \\times 10^{-7}$: $0.00003^{\\circ}$, needle beam." },
          { label: "Step 3: Moral", text: "Same law, seven orders apart in angle." }
        ],
        result: "Sound floods; light rays hold."
      }
    ],
    keyTakeaways: [
      "Minima at $a\\sin\\theta = m\\lambda$ ($m \\ne 0$) by pairwise cancellation.",
      "Central maximum is twice side-lobe width: $2R\\lambda/a$.",
      "Narrowing the slit widens the pattern."
    ],
    quiz: [
      {
        q: "Single slit a, first minimum is at:",
        options: ["$a\\sin\\theta = \\lambda/2$", "$a\\sin\\theta = \\lambda$", "$a\\sin\\theta = 0$", "$a\\sin\\theta = 2\\lambda$"],
        answer: 1,
        explanation: "Halves differ by half wave when full width differs by one wave."
      },
      {
        q: "Halving slit width:",
        options: ["Halves central width", "Doubles central width", "No change", "Removes minima"],
        answer: 1,
        explanation: "$W = 2R\\lambda/a$ is inverse in a."
      },
      {
        q: "Center theta = 0 is bright because:",
        options: ["Formula says m = 0 dark", "All paths equal, full reinforcement", "Polarization aligns", "Slit is closed"],
        answer: 1,
        explanation: "Zero path difference means zero phase difference everywhere."
      }
    ]
  },
  {
    sectionId: "young-ch36-s3",
    readingTime: 7,
    intro: "Integrating phasors across the slit turns geometry into the intensity law $I = I_{0}(\\sin\\alpha/\\alpha)^{2}$ with $\\alpha = \\pi a\\sin\\theta/\\lambda$. The phasor chain curls into arcs whose closures are the minima. Side lobes fall fast: first beside-center peaks carry only $4.5$ percent.",
    objectives: [
      "Write $\\alpha$ and the sinc-squared intensity law",
      "Locate minima and estimate side-lobe heights",
      "Explain the phasor-arc picture of the pattern"
    ],
    concepts: [
      {
        term: "Sinc-squared law",
        kind: "theorem",
        statement: "**$I = I_{0}[\\sin\\alpha/\\alpha]^{2}$** with **$\\alpha = (\\pi a/\\lambda)\\sin\\theta$**.",
        detail: "Zeros at $\\alpha = m\\pi$ reproduce $a\\sin\\theta = m\\lambda$."
      },
      {
        term: "Phasor arc",
        kind: "method",
        statement: "Slice the slit into phasors with progressive phase; **the chain forms a circular arc** whose chord is the resultant.",
        detail: "Full-circle closure gives zero (minima); small arcs give the bright center."
      },
      {
        term: "Side-lobe levels",
        kind: "theorem",
        statement: "First side lobe peaks near $\\alpha \\approx 1.43\\pi$ at **$4.5$ percent** of center; second at $1.6$ percent.",
        detail: "Rapid falloff concentrates $90$ percent of power in the center."
      },
      {
        term: "Narrowing limit",
        kind: "insight",
        statement: "As $a/\\lambda \\to 0$ the pattern **flattens to uniform**: a point source radiates equally all ways.",
        detail: "$\\sin\\alpha/\\alpha \\to 1$ everywhere."
      },
      {
        term: "Babinet preview",
        kind: "insight",
        statement: "Complementary screens (slit versus wire) give **identical patterns outside the forward beam**.",
        detail: "Used to size wires and particles from their diffraction halos."
      }
    ],
    examples: [
      {
        title: "Intensity at half-angle",
        problem: "Single slit: find $I/I_{0}$ at half the first-minimum angle ($a\\sin\\theta = \\lambda/2$).",
        steps: [
          { label: "Step 1: Alpha", text: "$\\alpha = \\pi(a\\sin\\theta)/\\lambda = \\pi/2$." },
          { label: "Step 2: Sinc", text: "$\\sin(\\pi/2)/(\\pi/2) = 2/\\pi = 0.6366$; squared $0.405$." },
          { label: "Step 3: Read", text: "Still $41$ percent of center halfway to the null." }
        ],
        result: "$I = 0.405\\,I_{0}$ at half angle."
      },
      {
        title: "First side-lobe height",
        problem: "Verify the $4.5$ percent claim at $\\alpha = 1.430\\pi$.",
        steps: [
          { label: "Step 1: Alpha", text: "$\\alpha = 4.493$ rad; $\\sin\\alpha = \\sin(4.493) = -0.9745$." },
          { label: "Step 2: Ratio", text: "$-0.9745/4.493 = -0.2169$; squared $0.0470$." },
          { label: "Step 3: Exact", text: "True peak solves $\\tan\\alpha = \\alpha$ at $4.493$ rad: $4.5$ percent confirmed." }
        ],
        result: "Side lobe $4.7$ percent near estimate, $4.5$ percent exact."
      }
    ],
    keyTakeaways: [
      "$I = I_{0}(\\sin\\alpha/\\alpha)^{2}$ with $\\alpha = \\pi a\\sin\\theta/\\lambda$.",
      "Phasor arcs close to zero at minima and nearly straighten at center.",
      "Side lobes are faint: $4.5$ percent, then $1.6$ percent."
    ],
    quiz: [
      {
        q: "alpha = pi gives intensity:",
        options: ["$I_0$", "Zero", "$0.405 I_0$", "$4 I_0$"],
        answer: 1,
        explanation: "$\\sin\\pi = 0$: first minimum."
      },
      {
        q: "Phasor chain across the slit at a minimum forms a:",
        options: ["Straight line", "Closed loop", "Single point", "Square"],
        answer: 1,
        explanation: "Resultant chord vanishes when the arc closes."
      },
      {
        q: "First side lobe is about:",
        options: ["$50$ percent", "$4.5$ percent", "$100$ percent", "$25$ percent"],
        answer: 1,
        explanation: "Sinc-squared envelope falls rapidly off center."
      }
    ]
  },
  {
    sectionId: "young-ch36-s4",
    readingTime: 6,
    intro: "Two finite slits multiply interference by diffraction: the $\\cos^{2}$ fringe comb lives inside the sinc envelope. Envelope zeros swallow whole fringes as missing orders. Young shows how measured patterns disentangle spacing $d$ from width $a$ independently.",
    objectives: [
      "Write $I = I_{0}\\cos^{2}\\beta\\,(\\sin\\alpha/\\alpha)^{2}$ for double slits",
      "Predict missing orders at $d/a$ integer ratios",
      "Extract $a$ from envelope and $d$ from fringe pitch"
    ],
    concepts: [
      {
        term: "Product pattern",
        kind: "theorem",
        statement: "**Interference $\\cos^{2}\\beta$ times diffraction $(\\sin\\alpha/\\alpha)^{2}$** with $\\beta = (\\pi d/\\lambda)\\sin\\theta$.",
        detail: "Fast fringes ride inside the slow envelope; both share $\\theta$."
      },
      {
        term: "Missing orders",
        kind: "theorem",
        statement: "When a fringe coincides with an envelope zero, **orders $m = \\pm(d/a), \\pm 2(d/a)$ vanish**.",
        detail: "$d = 4a$ kills every fourth fringe, a classic exam question."
      },
      {
        term: "Reading a and d",
        kind: "method",
        statement: "**Fringe pitch gives $d$; envelope width gives $a$** from independent $R\\lambda/d$ and $R\\lambda/a$ scales.",
        detail: "Count fringes per lobe to get $d/a$ directly."
      },
      {
        term: "More slits sharpen",
        kind: "insight",
        statement: "Adding slits **narrows fringes as $1/N$** while envelope stays fixed, previewing gratings.",
        detail: "Energy squeezes into sharper principal maxima."
      },
      {
        term: "Single-slit limit",
        kind: "insight",
        statement: "Closing one slit kills $\\beta$ fringes, leaving **pure envelope**: the product formula degrades gracefully.",
        detail: "Blocking tests distinguish interference from diffraction structure."
      }
    ],
    figures: [
      {
        caption: "Double-slit product: fast $\\cos^{2}$ fringes inside the slow single-slit envelope with a missing order",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Double-slit product: fast cos^2 fringes inside the slow single-slit envelope with a missing order"><rect x="0" y="0" width="400" height="200" fill="none"/><path d="M 40 150 C 100 150, 130 140, 160 60 C 180 20, 220 20, 240 60 C 270 140, 300 150, 360 150" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,4"/><path d="M 40 150 L 45 150 L 50 120 L 55 150 L 60 150 L 65 120 L 70 150 L 75 150 L 80 130 L 85 150 L 90 150 L 95 100 L 100 150 M 300 150 L 305 100 L 310 150 L 315 150 L 320 130 L 325 150" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 160 60 L 165 90 L 170 60 L 175 90 L 180 60 M 220 60 L 225 90 L 230 60 L 235 90 L 240 60" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="150" y="185" font-size="12" fill="currentColor">envelope (dashed) x fringes (solid)</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Missing fourth order",
        problem: "$d = 0.400$ mm, $a = 0.100$ mm. Which interference orders vanish?",
        steps: [
          { label: "Step 1: Ratio", text: "$d/a = 4$, so envelope zero $m_{diff} = 1$ lands on fringe $m_{int} = 4$." },
          { label: "Step 2: List", text: "Orders $\\pm 4, \\pm 8$ vanish; $\\pm 3$ survive near envelope edge." },
          { label: "Step 3: Count", text: "Seven bright fringes ($0$, $\\pm 1$-$\\pm 3$) fill the central lobe." }
        ],
        result: "Every 4th order missing; $7$ fringes in center."
      },
      {
        title: "Separating a and d",
        problem: "Pattern shows fringe pitch $2.50$ mm and central envelope width $20.0$ mm at $R = 2.00$ m, $\\lambda = 500$ nm. Find $d$, $a$.",
        steps: [
          { label: "Step 1: Spacing", text: "$d = R\\lambda/\\Delta y = (2.00)(5 \\times 10^{-7})/(2.50 \\times 10^{-3}) = 0.400$ mm." },
          { label: "Step 2: Width", text: "$a = 2R\\lambda/W = 2(2.00)(5 \\times 10^{-7})/0.0200 = 0.100$ mm." },
          { label: "Step 3: Check", text: "$d/a = 4$: expect missing 4th orders as above." }
        ],
        result: "$d = 0.400$ mm, $a = 0.100$ mm."
      }
    ],
    keyTakeaways: [
      "Double-slit intensity multiplies comb by envelope.",
      "Envelope zeros delete integer-ratio orders.",
      "Pitch measures $d$; envelope width measures $a$."
    ],
    quiz: [
      {
        q: "d = 3a. Missing orders are:",
        options: ["Every 2nd", "Every 3rd", "Every 4th", "None"],
        answer: 1,
        explanation: "Envelope zero aligns with fringe multiples of d/a = 3."
      },
      {
        q: "More slits at fixed a and d:",
        options: ["Broaden fringes", "Sharpen fringes, same envelope", "Widen envelope", "Remove diffraction"],
        answer: 1,
        explanation: "N-slit interference narrows as 1/N; single-slit envelope is unchanged."
      },
      {
        q: "Closing one slit of a double slit leaves:",
        options: ["Same fringes dimmer", "Pure single-slit envelope", "No light", "Grating spectrum"],
        answer: 1,
        explanation: "No pair means no cosine comb, only diffraction."
      }
    ]
  },
  {
    sectionId: "young-ch36-s5",
    readingTime: 7,
    intro: "Thousands of slits turn fringes into needle-sharp spectral lines: the diffraction grating. Principal maxima at $d\\sin\\theta = m\\lambda$ disperse colors with resolving power $R = Nm$. Spectrometers live on two numbers: lines per millimeter and total illuminated width.",
    objectives: [
      "State grating maxima $d\\sin\\theta_{m} = m\\lambda$",
      "Compute dispersion and resolving power $R = \\lambda/\\Delta\\lambda = Nm$",
      "Choose grating spacing for a target separation"
    ],
    concepts: [
      {
        term: "Grating equation",
        kind: "law",
        statement: "**$d\\sin\\theta_{m} = m\\lambda$** (transmission or reflection) locates principal maxima for slit spacing $d$.",
        detail: "Same as double-slit bright condition, now with $N$-narrowed peaks."
      },
      {
        term: "Sharpness with N",
        kind: "theorem",
        statement: "Peak width scales as **$1/N$**; $N$ illuminated slits sharpen lines without moving them.",
        detail: "A $2$ cm, $600$/mm grating uses $N = 12000$ slits."
      },
      {
        term: "Resolving power",
        kind: "theorem",
        statement: "**$R = \\lambda/\\Delta\\lambda = Nm$** in order $m$ by the Rayleigh just-resolved rule.",
        detail: "Sodium doublet $0.6$ nm at $589$ nm needs $R \\approx 1000$: first order with $N = 1000$ suffices."
      },
      {
        term: "Dispersion",
        kind: "definition",
        statement: "**$D = d\\theta/d\\lambda = m/(d\\cos\\theta)$** spreads colors angularly; finer pitch and higher order fan wider.",
        detail: "Red diffracts farther than blue (opposite of prisms)."
      },
      {
        term: "Order overlap",
        kind: "insight",
        statement: "**Spectra overlap when $m\\lambda$ repeats**: $600$ nm second order lands on $300$ nm first; filters sort orders.",
        detail: "Wide-band work needs order-sorting filters or cross dispersion."
      }
    ],
    figures: [
      {
        caption: "Grating dispersion: $d\sin\theta_{m} = m\lambda$ fans red wider than blue",
        svg: '<svg viewBox="0 0 400 190" style="width:100%;height:auto" role="img" aria-label="Grating dispersion: d\sin\theta_m = m\lambda fans red wider than blue"><rect x="0" y="0" width="400" height="190" fill="none"/><line x1="150" y1="20" x2="150" y2="170" stroke="currentColor" stroke-width="3"/><line x1="30" y1="95" x2="150" y2="95" stroke="currentColor" stroke-width="2"/><line x1="150" y1="95" x2="330" y2="60" stroke="currentColor" stroke-width="2"/><line x1="150" y1="95" x2="330" y2="95" stroke="currentColor" stroke-width="2"/><line x1="150" y1="95" x2="330" y2="130" stroke="currentColor" stroke-width="2"/><text x="335" y="63" font-size="12" fill="currentColor">blue</text><text x="335" y="98" font-size="12" fill="currentColor">green</text><text x="335" y="133" font-size="12" fill="currentColor">red</text><text x="40" y="80" font-size="12" fill="currentColor">white in</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Grating angles",
        problem: "$600$ lines/mm grating ($d = 1667$ nm), $\\lambda = 550$ nm. Find first- and second-order angles.",
        steps: [
          { label: "Step 1: First", text: "$\\sin\\theta_{1} = 550/1667 = 0.330$; $\\theta_{1} = 19.3^{\\circ}$." },
          { label: "Step 2: Second", text: "$\\sin\\theta_{2} = 1100/1667 = 0.660$; $\\theta_{2} = 41.3^{\\circ}$." },
          { label: "Step 3: Third?", text: "$1650/1667 = 0.990$: $\\theta_{3} = 81.9^{\\circ}$, barely escaping." }
        ],
        result: "$19.3^{\\circ}$, $41.3^{\\circ}$, grazing third order."
      },
      {
        title: "Resolving sodium",
        problem: "Sodium $589.0$/$589.6$ nm in second order. What $N$ resolves them?",
        steps: [
          { label: "Step 1: Needed R", text: "$R = 589.3/0.6 = 982$." },
          { label: "Step 2: Slits", text: "$N = R/m = 982/2 = 491$ slits minimum." },
          { label: "Step 3: Width", text: "At $600$/mm that is under $1$ mm illuminated: easy." }
        ],
        result: "$491$ slits in second order resolve the doublet."
      }
    ],
    keyTakeaways: [
      "Gratings put sharp maxima at $d\\sin\\theta = m\\lambda$.",
      "Resolution $Nm$ rewards wide illumination and high order.",
      "Dispersion fans red wider than blue; orders can overlap."
    ],
    quiz: [
      {
        q: "d = 2 microns, lambda = 500 nm. Highest visible order is:",
        options: ["$m = 1$", "$m = 4$", "$m = 10$", "$m = 2$"],
        answer: 1,
        explanation: "$m < d/\\lambda = 4$; m = 4 needs sin = 1 grazing, so 3 fully plus edge."
      },
      {
        q: "Resolving power of N = 5000 in second order is:",
        options: ["$2500$", "$10000$", "$5000$", "$2$"],
        answer: 1,
        explanation: "$R = Nm = 10000$."
      },
      {
        q: "Grating versus prism: red is diffracted:",
        options: ["Less than blue", "More than blue", "Equally", "Never"],
        answer: 1,
        explanation: "$\\sin\\theta$ proportional to lambda fans red wider."
      },
      {
        q: "Doubling illuminated width at fixed pitch:",
        options: ["Doubles resolution", "Halves resolution", "No change", "Shifts angles"],
        answer: 0,
        explanation: "Twice N at same order doubles R = Nm."
      }
    ]
  },
  {
    sectionId: "young-ch36-s6",
    readingTime: 6,
    intro: "X-ray wavelengths match atomic spacings, so crystals are natural gratings. Bragg's law $2d\\sin\\theta = m\\lambda$ reads lattice planes from reflection angles. Von Laue's spots and Bragg's spectrometer turned this into the microscope of the atomic world.",
    objectives: [
      "State Bragg's law $2d\\sin\\theta_{B} = m\\lambda$ and define $\\theta_{B}$",
      "Compute lattice spacing from a diffraction angle",
      "Explain why visible light cannot do crystallography"
    ],
    concepts: [
      {
        term: "Bragg's law",
        kind: "law",
        statement: "**$2d\\sin\\theta_{B} = m\\lambda$** with $\\theta_{B}$ grazed from planes (not from normal).",
        detail: "Extra $2$ versus grating: round trip between adjacent planes."
      },
      {
        term: "Grazing angle convention",
        kind: "notation",
        statement: "**Bragg $\\theta$ is from the planes**; optical $\\theta$ is from the normal. Convert before comparing.",
        detail: "Textbook figures stress the complement; exam errors live here."
      },
      {
        term: "Why x-rays",
        kind: "insight",
        statement: "**$\\lambda \\sim 0.1$ nm matches $d \\sim 0.2$-$0.3$ nm**; visible $500$ nm cannot resolve cells $10^{3}$ times smaller.",
        detail: "Electrons and neutrons with similar de Broglie waves work too."
      },
      {
        term: "Laue patterns",
        kind: "method",
        statement: "White beam plus stationary crystal gives **spot arrays encoding symmetry**; rotating-crystal scans map each $d$.",
        detail: "DNA's Photo 51 was fiber x-ray diffraction read this way."
      },
      {
        term: "Powder method",
        kind: "method",
        statement: "Random crystallites produce **Debye rings at each Bragg cone**, identifying mixtures by fingerprint angles.",
        detail: "Airport and geology diffractometers automate ring matching."
      }
    ],
    examples: [
      {
        title: "NaCl spacing",
        problem: "First-order Bragg from NaCl planes at $\\theta_{B} = 15.8^{\\circ}$ with $\\lambda = 0.154$ nm (Cu K-alpha). Find $d$.",
        steps: [
          { label: "Step 1: Law", text: "$d = \\lambda/(2\\sin\\theta_{B}) = 0.154/(2 \\times 0.2723)$." },
          { label: "Step 2: Number", text: "$d = 0.154/0.5446 = 0.283$ nm." },
          { label: "Step 3: Sense", text: "Matches known $0.2827$ nm cubic cell half-edge." }
        ],
        result: "$d = 0.283$ nm interplanar spacing."
      },
      {
        title: "Visible fails",
        problem: "Try $\\lambda = 500$ nm on $d = 0.3$ nm. What happens?",
        steps: [
          { label: "Step 1: Ratio", text: "$\\sin\\theta = m\\lambda/(2d) = m(500)/(0.6) = 833\\,m > 1$ for all $m \\ge 1$." },
          { label: "Step 2: Meaning", text: "No real Bragg angle: waves cannot sample sub-wavelength cells." },
          { label: "Step 3: Fix", text: "Use $0.05$-$0.2$ nm x-rays or $100$ keV electrons." }
        ],
        result: "No diffraction; wavelength must approach $d$."
      }
    ],
    keyTakeaways: [
      "$2d\\sin\\theta_{B} = m\\lambda$ with grazing-plane angles.",
      "X-ray $\\lambda$ matches lattice $d$; visible cannot.",
      "Spots, rings, and scans decode symmetry and spacing."
    ],
    quiz: [
      {
        q: "Bragg theta is measured from:",
        options: ["The normal", "The crystal planes", "The source", "The detector axis"],
        answer: 1,
        explanation: "Grazing convention; complement of optical incidence angle."
      },
      {
        q: "d = 0.2 nm, lambda = 0.1 nm. First Bragg angle is:",
        options: ["$14.5$ degrees", "$30$ degrees", "$60$ degrees", "$90$ degrees"],
        answer: 0,
        explanation: "$\\sin\\theta = 0.1/0.4 = 0.25$, so $\\theta = 14.5^{\\circ}$."
      },
      {
        q: "Crystallography needs x-rays because:",
        options: ["They are brighter", "Wavelength matches atomic spacing", "Glass focuses them", "They carry charge"],
        answer: 1,
        explanation: "Only lambda near d gives real Bragg angles."
      }
    ]
  },
  {
    sectionId: "young-ch36-s7",
    readingTime: 6,
    intro: "Circular apertures paint Airy disks, and two disks closer than $1.22\\lambda/D$ merge: the Rayleigh criterion. Telescope size, microscope NA, and eye pupil all obey it. Bigger glass resolves finer, independent of magnification.",
    objectives: [
      "State the Airy radius $\\theta_{1} = 1.22\\lambda/D$",
      "Apply Rayleigh $\\theta_{R} = 1.22\\lambda/D$ to two-point resolution",
      "Compare eye, telescope, and microscope limits"
    ],
    concepts: [
      {
        term: "Airy pattern",
        kind: "theorem",
        statement: "Circular aperture of diameter $D$ puts **first dark ring at $\\sin\\theta_{1} = 1.22\\lambda/D$**, center holding $84$ percent of light.",
        detail: "Bessel-function integral replaces the slit sinc; $1.22$ is its first zero."
      },
      {
        term: "Rayleigh criterion",
        kind: "law",
        statement: "**Just resolved when one's center lands on the other's first minimum**: $\\theta_{R} = 1.22\\lambda/D$.",
        detail: "Central dip $26$ percent signals two sources; closer merges."
      },
      {
        term: "Telescope power",
        kind: "method",
        statement: "**$D$ sets resolution, $M$ only enlarges**: $8$ m gathers and resolves $40$ times a $20$ cm scope.",
        detail: "Atmospheric seeing often caps ground scopes near $1$ arcsec regardless."
      },
      {
        term: "Microscope NA",
        kind: "definition",
        statement: "Resolution **$\\Delta x = 0.61\\lambda/\\mathrm{NA}$** with $\\mathrm{NA} = n\\sin\\alpha$; oil immersion raises $n$ and $\u2009\\alpha$.",
        detail: "$\\mathrm{NA} = 1.4$ oil at $550$ nm resolves $240$ nm."
      },
      {
        term: "Eye limit",
        kind: "insight",
        statement: "Pupil $D \\approx 2$-$7$ mm gives **$\\sim 1$ arcmin** daylight resolution, matched to foveal cone spacing.",
        detail: "Optics and retina co-evolved to the same limit."
      }
    ],
    figures: [
      {
        caption: "Rayleigh criterion: two Airy disks just resolved when peak meets first minimum at $1.22\\lambda/D$",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Rayleigh criterion: two Airy disks just resolved when peak meets first minimum at 1.22lambda/D"><rect x="0" y="0" width="400" height="200" fill="none"/><path d="M 60 150 C 110 150, 130 60, 170 60 C 210 60, 230 150, 280 150" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 120 150 C 170 150, 190 60, 230 60 C 270 60, 290 150, 340 150" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6,4"/><line x1="170" y1="60" x2="230" y2="150" stroke="currentColor" stroke-width="1" stroke-dasharray="4,3"/><text x="150" y="180" font-size="12" fill="currentColor">peak of one on null of other</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Hubble versus eye",
        problem: "Hubble $D = 2.40$ m at $550$ nm; eye $D = 5.00$ mm. Compare $\\theta_{R}$.",
        steps: [
          { label: "Step 1: Hubble", text: "$\\theta = 1.22(550 \\times 10^{-9})/2.40 = 2.795 \\times 10^{-7}$ rad $= 0.0576$ arcsec." },
          { label: "Step 2: Eye", text: "$\\theta = 1.22(550 \\times 10^{-9})/(5.00 \\times 10^{-3}) = 1.342 \\times 10^{-4}$ rad $= 27.7$ arcsec." },
          { label: "Step 3: Ratio", text: "Hubble resolves $480$ times finer, the $D$ ratio." }
        ],
        result: "$0.058$ arcsec versus $28$ arcsec."
      },
      {
        title: "Car headlights at night",
        problem: "Headlights $1.50$ m apart, $\\lambda = 550$ nm, pupils $6.00$ mm. At what distance do they merge?",
        steps: [
          { label: "Step 1: Eye angle", text: "$\\theta_{R} = 1.22(550 \\times 10^{-9})/(6.00 \\times 10^{-3}) = 1.118 \\times 10^{-4}$ rad." },
          { label: "Step 2: Distance", text: "$L = s/\\theta = 1.50/(1.118 \\times 10^{-4}) = 13400$ m." },
          { label: "Step 3: Reality", text: "Atmosphere and brightness merge them far sooner, near a few km." }
        ],
        result: "Diffraction merges at $13$ km; practice sooner."
      }
    ],
    keyTakeaways: [
      "Airy first null at $1.22\\lambda/D$ sets every circular limit.",
      "Rayleigh just-resolves at peak-on-null separation.",
      "Enlarge $D$ or NA to resolve; magnification alone is empty."
    ],
    quiz: [
      {
        q: "Rayleigh angle for D = 10 cm at 500 nm is about:",
        options: ["$6.1$ microrad", "$61$ microrad", "$610$ microrad", "$6.1$ mrad"],
        answer: 0,
        explanation: "$1.22\\times 5\\times 10^{-7}/0.1 = 6.1\\times 10^{-6}$ rad."
      },
      {
        q: "Doubling aperture diameter:",
        options: ["Doubles resolution angle", "Halves resolution angle", "No change", "Quadruples light only"],
        answer: 1,
        explanation: "Inverse in D; light gathering separately quadruples."
      },
      {
        q: "Oil immersion improves microscopes by:",
        options: ["Raising magnification", "Raising NA with higher n", "Lowering lambda", "Shrinking the sample"],
        answer: 1,
        explanation: "$\\Delta x = 0.61\\lambda/NA$ falls as n grows."
      }
    ]
  },
  {
    sectionId: "young-ch36-s8",
    readingTime: 5,
    intro: "Holograms record amplitude and phase by mixing object light with a reference beam, then diffract light back into a 3D image. Unlike photos, each fragment holds the whole scene. Young closes diffraction with this full-wave recording as the payoff for two chapters of wave optics.",
    objectives: [
      "Explain reference-plus-object recording of phase",
      "Describe reconstruction as diffraction from the fringe grating",
      "State why hologram fragments still show whole scenes"
    ],
    concepts: [
      {
        term: "Hologram recording",
        kind: "definition",
        statement: "**Reference and scattered waves interfere on film**; fringe contrast stores amplitude, fringe position stores phase.",
        detail: "Coherent laser light is required over the full path gap."
      },
      {
        term: "Reconstruction",
        kind: "theorem",
        statement: "Illuminating the developed fringes **diffracts a 3D virtual image plus a real conjugate image**.",
        detail: "The fringe stack is a complex grating replaying the object wavefront."
      },
      {
        term: "Whole in each piece",
        kind: "insight",
        statement: "Every patch caught rays from **every object point**, so fragments replay whole scenes with narrowed viewing angle.",
        detail: "Resolution and parallax shrink with fragment size, not content."
      },
      {
        term: "Photo versus hologram",
        kind: "definition",
        statement: "Photos record **intensity only**; holograms record **intensity of a phase-encoded interference**, preserving depth.",
        detail: "Moving the head parallaxes a hologram like a window; photos never do."
      },
      {
        term: "Uses",
        kind: "method",
        statement: "Holograms serve as **interferometers, security seals, and diffractive optics**, plus holographic data storage.",
        detail: "Double-exposure holography maps nanometer deformations as fringe shifts."
      }
    ],
    examples: [
      {
        title: "Fringe pitch in a hologram",
        problem: "Reference and object beams meet at $30^{\\circ}$ with $\\lambda = 633$ nm. Estimate recorded fringe spacing.",
        steps: [
          { label: "Step 1: Two-beam pitch", text: "Spacing $\\approx \\lambda/(2\\sin(\\theta/2)) = 633/(2\\sin 15^{\\circ})$ nm." },
          { label: "Step 2: Number", text: "$= 633/(0.5176) = 1223$ nm $= 1.22$ microM." },
          { label: "Step 3: Film", text: "Needs $800+$ lines/mm media: holographic plates, not camera film." }
        ],
        result: "$1.22$ microM fringes demand holographic emulsion."
      },
      {
        title: "Fragment views",
        problem: "A hologram is cut in quarters. What does each quarter show?",
        steps: [
          { label: "Step 1: Content", text: "Each quarter still reconstructs the entire object." },
          { label: "Step 2: Penalty", text: "Viewing zone narrows and image grain coarsens $2$ times per axis." },
          { label: "Step 3: Contrast", text: "A photo quarter would show only one image corner instead." }
        ],
        result: "Whole scene persists with reduced parallax and sharpness."
      }
    ],
    keyTakeaways: [
      "Holograms freeze reference-object interference, storing phase as fringes.",
      "Reconstruction diffracts the object wavefront back into space.",
      "Fragments keep whole scenes; photos cannot."
    ],
    quiz: [
      {
        q: "A hologram records:",
        options: ["Intensity only", "Amplitude and phase via interference", "Color only", "Polarization only"],
        answer: 1,
        explanation: "Reference-mixed fringes encode both in contrast and position."
      },
      {
        q: "Cutting a hologram in half:",
        options: ["Shows half the scene like a photo", "Shows the whole scene with less parallax", "Erases the image", "Doubles brightness"],
        answer: 1,
        explanation: "Distributed encoding survives fragmentation with narrower aperture."
      },
      {
        q: "Holography needs laser light because recording requires:",
        options: ["High power", "Coherence over path differences", "Invisible color", "Pulses always"],
        answer: 1,
        explanation: "Stable fringes demand fixed phase across the setup."
      }
    ]
  }
];
