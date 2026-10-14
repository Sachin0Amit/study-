import type { SectionContent } from "../library"

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition, Chapter 22
// Color (Sections 22.1 – 22.4)
// ============================================================================

export const ewenCh22Content: SectionContent[] = [
  {
    sectionId: "ewen-ch22-s1",
    readingTime: 6,
    intro: "Color is wavelength made visible: red near $700 \\text{ nm}$, violet near $400 \\text{ nm}$, and every hue rule follows from adding or subtracting spectra. This section separates additive (light) from subtractive (pigment) mixing and explains filters, spectra, and why the sky is blue.",
    objectives: [
      "Order spectral colors by wavelength and frequency",
      "Mix additive primaries (R/G/B) versus subtractive (C/M/Y) correctly",
      "Explain filter action, scattering, and emission spectra",
    ],
    concepts: [
      {
        term: "Spectral order",
        kind: "notation",
        statement: "Red ($\\sim 700 \\text{ nm}$), orange, yellow, green, blue, violet ($\\sim 400 \\text{ nm}$): frequency rises toward violet.",
        detail: "ROYGBV read long-to-short; prisms deviate violet most.",
      },
      {
        term: "Additive mixing",
        kind: "law",
        statement: "Lights add: R+G+B = white; R+G = yellow, G+B = cyan, R+B = magenta.",
        detail: "Screens and stage lighting mix emission — black is the absence of all three.",
      },
      {
        term: "Subtractive mixing",
        kind: "law",
        statement: "Pigments subtract: cyan, magenta, yellow inks each remove one primary; C+M+Y = black (in theory).",
        detail: "Printers add black (K) because real inks absorb imperfectly.",
      },
      {
        term: "Filters and selective reflection",
        kind: "method",
        statement: "A red filter transmits red and absorbs the rest; a red shirt reflects red and absorbs the rest.",
        detail: "Object color is illumination minus absorption — change the lamp, change the apparent color.",
      },
      {
        term: "Scattering and spectra",
        kind: "insight",
        statement: "Rayleigh $\\sim 1/\\lambda^{4}$ scattering blues the sky and reddens sunsets; hot gases emit bright-line spectra identifying elements.",
        detail: "Spectroscopes read composition from line positions — neon signs writ large.",
      },
    ],
    examples: [
      {
        title: "Stage-light overlap",
        problem: "Red and green spotlights overlap on white muslin, with a blue-only region beside. Name the colors seen.",
        steps: [
          { label: "Step 1: Overlap", text: "R+G = yellow." },
          { label: "Step 2: Single", text: "Blue alone stays blue; all three would be white." },
        ],
        result: "Yellow overlap beside blue — additive rules live.",
      },
      {
        title: "Filter stack",
        problem: "White light passes a red filter, then a green filter. What emerges?",
        steps: [
          { label: "Step 1: First filter", text: "Red passes; green and blue absorb." },
          { label: "Step 2: Second filter", text: "Green filter absorbs the remaining red." },
        ],
        result: "Essentially black — crossed subtractive filters block all.",
      },
    ],
    keyTakeaways: [
      "Wavelength orders color; violet is short, red is long.",
      "Lights add (RGB→white); pigments subtract (CMY→black).",
      "Filters transmit one band; scattering and line spectra fingerprint matter.",
    ],
    quiz: [
      {
        q: "Projecting overlapping red, green, and blue spots on white gives at the triple overlap:",
        options: ["Black", "White", "Yellow", "Cyan"],
        answer: 1,
        explanation: "Additive primaries sum to white light.",
      },
      {
        q: "A yellow banana under pure blue light looks:",
        options: ["Yellow", "Black (dark)", "Blue", "White"],
        answer: 1,
        explanation: "It reflects only yellow/red; with none present it absorbs everything.",
      },
      {
        q: "Sunsets redden because air scatters:",
        options: ["Red most, transmitting blue", "Blue most, leaving red transmitted", "All colors equally", "Only green"],
        answer: 1,
        explanation: "$1/\\lambda^{4}$ scattering removes blue on the long path, transmitting red/orange.",
      },
    ],
  },
  {
    sectionId: "ewen-ch22-s2",
    readingTime: 6,
    intro: "Gratings split light into precise spectra because each groove diffracts and all grooves interfere. This section applies the grating equation $d\\sin\\theta = m\\lambda$, reads spectrometer angles, and sizes slit behavior.",
    objectives: [
      "State the grating condition $d\\sin\\theta = m\\lambda$ for each order",
      "Compute wavelengths or angles from grating data",
      "Explain why gratings beat prisms for measurement",
    ],
    concepts: [
      {
        term: "Diffraction grating",
        kind: "definition",
        statement: "A grating is thousands of slits per cm (spacing $d$); groove count per unit length inverts to $d$.",
        detail: "$600 \\text{ lines}/\\text{mm}$ means $d = 1.667 \\mu\\text{m}$.",
      },
      {
        term: "Grating equation",
        kind: "law",
        statement: "Reinforcement occurs at $d\\sin\\theta = m\\lambda$ for orders $m = 0, \\pm 1, \\pm 2, \\ldots$.",
        detail: "Each wavelength fans to its own angle per order — a calibrated spectrum.",
      },
      {
        term: "Order overlap",
        kind: "insight",
        statement: "Higher orders spread wider but overlap ($2\\lambda$ second-order sits near $\\lambda$ first of half wavelength) — filters sort them.",
        detail: "Spectrometers block or assign orders explicitly.",
      },
      {
        term: "Resolving power trend",
        kind: "theorem",
        statement: "Resolution grows with total illuminated grooves $N$ and order $m$: $R = \\lambda/\\Delta\\lambda = mN$.",
        detail: "Wide, fine gratings in high order split sodium doublets prisms merge.",
      },
      {
        term: "CD and DVD gratings",
        kind: "insight",
        statement: "Disc tracks ($\u223c 1.6 \\mu\\text{m}$ pitch) are reflection gratings — the rainbow play of light.",
        detail: "Same equation, reflective geometry.",
      },
    ],
    figures: [
      {
        caption: "Grating: adjacent grooves reinforce at $d\\sin\\theta = m\\lambda$; each color leaves at its own angle.",
        svg: "<svg role='img' aria-label='Grating: adjacent grooves reinforce at dsintheta = mlambda; each color leaves at its own angle.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"120\" y1=\"30\" x2=\"120\" y2=\"170\"/><line x1=\"112\" y1=\"60\" x2=\"128\" y2=\"60\"/><line x1=\"112\" y1=\"90\" x2=\"128\" y2=\"90\"/><line x1=\"112\" y1=\"120\" x2=\"128\" y2=\"120\"/><line x1=\"112\" y1=\"150\" x2=\"128\" y2=\"150\"/><line x1=\"60\" y1=\"105\" x2=\"120\" y2=\"105\"/><line x1=\"120\" y1=\"105\" x2=\"300\" y2=\"60\"/><line x1=\"120\" y1=\"105\" x2=\"300\" y2=\"105\" stroke-dasharray=\"5 4\"/><line x1=\"120\" y1=\"105\" x2=\"300\" y2=\"150\"/><text x=\"305\" y=\"60\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">violet</text><text x=\"305\" y=\"110\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">m=0</text><text x=\"305\" y=\"155\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">red</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Grating angle for red",
        problem: "A $500 \\text{ lines}/\\text{mm}$ grating is lit by $650 \\text{ nm}$ red. Find first-order $\\theta$.",
        steps: [
          { label: "Step 1: Spacing", text: "$d = 10^{-3}/500 = 2.00 \\times 10^{-6} \\text{ m}$." },
          { label: "Step 2: Angle", text: "$\\sin\\theta = 650 \\times 10^{-9}/2.00 \\times 10^{-6} = 0.325$; $\\theta = 19.0^{\\circ}$." },
        ],
        result: "$19.0^{\\circ}$ first order.",
      },
      {
        title: "Measuring an unknown line",
        problem: "With the same grating, a line appears at $\\theta = 17.5^{\\circ}$ first order. Find $\\lambda$.",
        steps: [
          { label: "Step 1: Invert", text: "$\\lambda = d\\sin\\theta = (2.00 \\times 10^{-6})(\\sin 17.5^{\\circ}) = (2.00 \\times 10^{-6})(0.3007) = 601 \\text{ nm}$." },
        ],
        result: "$601 \\text{ nm}$ orange — sodium-pressure lamp territory.",
      },
    ],
    keyTakeaways: [
      "$d\\sin\\theta = m\\lambda$ maps angle to wavelength per order.",
      "Groove spacing inverts lines-per-length; resolution scales with $mN$.",
      "Gratings give linear, calibratable spectra — prisms give bright, nonlinear ones.",
    ],
    quiz: [
      {
        q: "A grating's second order for $600 \\text{ nm}$ versus first order for $300 \\text{ nm}$ (same $d$):",
        options: ["Different angles", "Same angle (overlap)", "Second is always dimmer to zero", "First vanishes"],
        answer: 1,
        explanation: "$m\\lambda = 1200 = 600 \\times 2$: identical $\\sin\\theta$.",
      },
      {
        q: "Finer grooves (smaller $d$) at fixed $\\lambda$:",
        options: ["Shrink all angles", "Spread angles wider", "Kill all orders", "Change color"],
        answer: 1,
        explanation: "$\\sin\\theta = m\\lambda/d$ grows as $d$ shrinks.",
      },
      {
        q: "CD rainbows come from:",
        options: ["Pigment dyes", "Track-pitch reflection grating", "LED emission", "Polarization"],
        answer: 1,
        explanation: "Micron-spaced tracks diffract white into spectral angles.",
      },
    ],
  },
  {
    sectionId: "ewen-ch22-s3",
    readingTime: 6,
    intro: "Soap films and oil slicks glow with color from thin-film interference: two reflections half a wave apart cancel or reinforce. This section applies the $2t = m\\lambda$/$2t = (m+1/2)\\lambda$ conditions (with the half-wave flip) and coats lenses by the same rule.",
    objectives: [
      "Explain thin-film colors by two-beam interference",
      "Apply the half-wave-flip conditions for bright/dark films",
      "Design single-layer antireflection coatings",
    ],
    concepts: [
      {
        term: "Thin-film interference",
        kind: "law",
        statement: "Front and back reflections interfere; color surviving at thickness $t$ satisfies the round-trip $2nt$ condition for that $\\lambda$.",
        detail: "Graduated thickness paints graduated hues — wedge and slick rainbows.",
      },
      {
        term: "Half-wave flip rule",
        kind: "method",
        statement: "Reflection off higher-$n$ flips phase ($\\lambda/2$); off lower-$n$ does not. Count one flip (soap in air): bright needs $2t = (m+1/2)\\lambda/n$.",
        detail: "With zero or two flips the bright condition is $2nt = m\\lambda$ instead.",
      },
      {
        term: "Newton's rings",
        kind: "insight",
        statement: "An air wedge between lens and flat gives ring fringes of equal thickness, dark-centered by the single flip.",
        detail: "Ring radii measure lens curvature and $\\lambda$ to fractions of a micron.",
      },
      {
        term: "Antireflection coating",
        kind: "method",
        statement: "A $\\lambda/4n$ layer ($t = \\lambda/4n_{coat}$) cancels the two reflections for that color — purple-green residual tints mark coated optics.",
        detail: "Camera and eyeglass coatings target mid-green ($550 \\text{ nm}$) for the eye's peak.",
      },
      {
        term: "Michelson-style path logic",
        kind: "insight",
        statement: "All two-beam interference compares optical paths in wavelengths; films do it in $t$, interferometers in air gaps.",
        detail: "Counting fringe shifts measures distance to $\\lambda/2$ — gauge-block calibration.",
      },
    ],
    examples: [
      {
        title: "AR coating thickness",
        problem: "Design a single $MgF_{2}$ ($n = 1.38$) coating for $550 \\text{ nm}$ green on glass.",
        steps: [
          { label: "Step 1: Quarter-wave in medium", text: "$t = \\lambda/4n = 550/(4 \\times 1.38) = 99.6 \\text{ nm}$." },
        ],
        result: "$\\approx 100 \\text{ nm}$ — green cancels, magenta residual reflects.",
      },
      {
        title: "Soap-film green bright",
        problem: "A water film ($n = 1.33$) shows bright $520 \\text{ nm}$ green at normal incidence (one flip). Find smallest $t$.",
        steps: [
          { label: "Step 1: One-flip bright", text: "$2nt = \\lambda/2$ for $m = 0$." },
          { label: "Step 2: Solve", text: "$t = 520/(4 \\times 1.33) = 97.7 \\text{ nm}$." },
        ],
        result: "$97.7 \\text{ nm}$ minimum; thicker films repeat per order.",
      },
    ],
    keyTakeaways: [
      "Two reflections interfere; the flip count picks bright versus dark conditions.",
      "Thickness gradients paint spectral gradients.",
      "$\\lambda/4n$ coatings cancel chosen reflections.",
    ],
    quiz: [
      {
        q: "Oil-slick colors change with viewing angle because:",
        options: ["Pigments migrate", "Path $2t\\cos\\theta$ shifts the reinforced $\\lambda$", "Temperature changes", "Polarization rotates"],
        answer: 1,
        explanation: "Oblique paths lengthen the round trip, retuning which color interferes constructively.",
      },
      {
        q: "A $\\lambda/4n$ coating works by:",
        options: ["Absorbing all light", "Destructive interference of the two reflections", "Doubling transmission wires", "Scattering"],
        answer: 1,
        explanation: "Equal amplitudes half a wave apart cancel at the design wavelength.",
      },
      {
        q: "Newton's rings center is dark because:",
        options: ["No light arrives", "Zero thickness plus one flip gives destructive interference", "Glass absorbs", "The lens is opaque"],
        answer: 1,
        explanation: "At $t \\approx 0$ the single half-wave flip leaves the beams $\\lambda/2$ apart — dark.",
      },
    ],
  },
  {
    sectionId: "ewen-ch22-s4",
    readingTime: 6,
    intro: "Light vibrates transversely, so it can be polarized — filtered to one vibration plane. This section polarizes by filter, reflection (Brewster), and scattering, applies Malus's law $I = I_{0}\\cos^{2}\\theta$, and kills glare with crossed Polaroids.",
    objectives: [
      "Define polarization as transverse-vibration filtering",
      "Apply Malus's law $I = I_{0}\\cos^{2}\\theta$ through analyzers",
      "Use Brewster's angle and Polaroid glasses for glare control",
    ],
    concepts: [
      {
        term: "Polarization",
        kind: "definition",
        statement: "Polarized light vibrates in one plane; unpolarized (sun, bulb) vibrates in all transverse planes equally.",
        detail: "Only transverse waves polarize — sound cannot.",
      },
      {
        term: "Malus's law",
        kind: "law",
        statement: "Polarized light through an analyzer at angle $\\theta$ transmits $I = I_{0}\\cos^{2}\\theta$.",
        detail: "Aligned passes all; $45^{\\circ}$ halves; crossed ($90^{\\circ}$) kills it.",
      },
      {
        term: "Unpolarized through Polaroid",
        kind: "theorem",
        statement: "Ideal Polaroid halves unpolarized light ($I = I_{0}/2$), polarizing the rest along its axis.",
        detail: "Two crossed Polaroids pass zero; a third at $45^{\\circ}$ between them revives transmission — quantum-era demo.",
      },
      {
        term: "Brewster's angle",
        kind: "theorem",
        statement: "Reflected light polarizes fully at $\\tan\\theta_{B} = n_{2}/n_{1}$ (air→glass $56.3^{\\circ}$); refracted ray sits $90^{\\circ}$ from it.",
        detail: "Lake and road glare is horizontally polarized near Brewster — vertical-axis sunglasses block it.",
      },
      {
        term: "Sky and stress applications",
        kind: "insight",
        statement: "Scattered skylight polarizes $90^{\\circ}$ from the Sun (bees navigate by it); stressed plastic between crossed polarizers glows with strain colors.",
        detail: "Photoelastic benches and LCDs are crossed-polarizer instruments.",
      },
    ],
    figures: [
      {
        caption: "Malus's law $I = I_{0}\\cos^{2}\\theta$: aligned passes, $45^{\\circ}$ halves, crossed blocks; Brewster reflection polarizes.",
        svg: "<svg role='img' aria-label='Malus&#39;s law I = I_0cos^2theta: aligned passes, 45^circ halves, crossed blocks; Brewster reflection polarizes.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"60\" y1=\"100\" x2=\"150\" y2=\"100\"/><rect x=\"160\" y=\"60\" width=\"12\" height=\"80\"/><rect x=\"250\" y=\"60\" width=\"12\" height=\"80\"/><line x1=\"180\" y1=\"100\" x2=\"250\" y2=\"100\" stroke-dasharray=\"5 4\"/><line x1=\"270\" y1=\"100\" x2=\"350\" y2=\"100\"/><line x1=\"60\" y1=\"70\" x2=\"60\" y2=\"130\"/><line x1=\"105\" y1=\"85\" x2=\"105\" y2=\"115\"/><line x1=\"310\" y1=\"85\" x2=\"310\" y2=\"115\"/><text x=\"140\" y=\"160\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">polarizer analyzer</text><text x=\"230\" y=\"40\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">theta between axes</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Analyzer at 30 degrees",
        problem: "Polarized light $I_{0} = 100 \\text{ mW}/\\text{m}^{2}$ meets an analyzer at $\\theta = 30.0^{\\circ}$. Find transmitted $I$.",
        steps: [
          { label: "Step 1: Malus", text: "$I = 100\\cos^{2}30.0^{\\circ} = 100(0.750) = 75.0 \\text{ mW}/\\text{m}^{2}$." },
        ],
        result: "$75.0 \\text{ mW}/\\text{m}^{2}$ transmitted.",
      },
      {
        title: "Crossed sunglasses glare",
        problem: "Unpolarized $800 \\text{ W}/\\text{m}^{2}$ sunlight reflects as horizontally polarized $80.0 \\text{ W}/\\text{m}^{2}$ glare onto vertical-axis Polaroids. Find transmitted glare.",
        steps: [
          { label: "Step 1: Axes crossed", text: "$\\theta = 90^{\\circ}$; $I = 80.0\\cos^{2}90^{\\circ} = 0$ (ideal)." },
          { label: "Step 2: Reality", text: "Real Polaroids leak ~$1\\%$: about $0.8 \\text{ W}/\\text{m}^{2}$." },
        ],
        result: "Glare essentially killed; ordinary (unpolarized) light halves.",
      },
    ],
    keyTakeaways: [
      "Polarization filters transverse vibration; sound cannot polarize.",
      "$I = I_{0}\\cos^{2}\\theta$; crossed Polaroids block.",
      "Brewster reflection and scattering polarize — sunglasses exploit the first.",
    ],
    quiz: [
      {
        q: "Unpolarized light through one ideal Polaroid emerges:",
        options: ["Zero", "Half intensity, polarized", "Full intensity, unchanged", "Doubled"],
        answer: 1,
        explanation: "One transverse component passes ($1/2$ average), aligned with the axis.",
      },
      {
        q: "Polarized $I_{0}$ through an analyzer at $60^{\\circ}$ transmits:",
        options: ["$I_{0}$", "$I_{0}/2$", "$I_{0}/4$", "$0$"],
        answer: 2,
        explanation: "$\\cos^{2}60^{\\circ} = 0.25$.",
      },
      {
        q: "Brewster's angle for air→water ($n = 1.33$) is about:",
        options: ["$36.9^{\\circ}$", "$48.6^{\\circ}$", "$53.1^{\\circ}$", "$90^{\\circ}$"],
        answer: 2,
        explanation: "$\\tan^{-1}(1.33) = 53.1^{\\circ}$ from the normal.",
      },
    ],
  },
]
