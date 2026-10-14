import type { SectionContent } from "../library";

// Young & Freedman University Physics 15th ed., Chapter 32: Electromagnetic Waves.

export const youngCh32Content: SectionContent[] = [
  {
    sectionId: "young-ch32-s1",
    readingTime: 7,
    intro: "Maxwell unified electricity, magnetism, and light by adding one term, the displacement current, to Ampere's law. In empty space his four equations then demand waves whose speed is fixed by constants of electricity and magnetism. This section follows Young's argument that light is an electromagnetic wave.",
    objectives: [
      "State Maxwell's equations in vacuum in qualitative form",
      "Explain how a changing $E$ creates $B$ and a changing $B$ creates $E$ to sustain a wave",
      "Compute $c = 1/\\sqrt{\\epsilon_{0}\\mu_{0}}$ from the constants"
    ],
    concepts: [
      {
        term: "Maxwell's equations in vacuum",
        kind: "law",
        statement: "In charge-free vacuum, **electric and magnetic flux obey symmetric field laws**: Gauss laws give zero net enclosed charge and zero magnetic monopole, while Faraday's and Ampere-Maxwell laws couple $\\partial B/\\partial t$ to $E$ and $\\partial E/\\partial t$ to $B$.",
        detail: "The displacement-current term $\\mu_{0}\\epsilon_{0}\\,\\partial E/\\partial t$ completes the symmetry and is the entire source of waves in vacuum."
      },
      {
        term: "Self-sustaining wave",
        kind: "insight",
        statement: "A time-varying $E$ induces a $B$, which induces an $E$, so **the disturbance propagates without charges or currents**, each field bootstrapping the other forward.",
        detail: "Young shows this with a charging-capacitor style argument extended to free space: no medium is required."
      },
      {
        term: "Speed of light from constants",
        kind: "theorem",
        statement: "The wave speed is **$c = 1/\\sqrt{\\epsilon_{0}\\mu_{0}} = 3.00 \\times 10^{8}$ m/s**, computed from $\\epsilon_{0} = 8.85 \\times 10^{-12}$ and $\\mu_{0} = 4\\pi \\times 10^{-7}$ SI.",
        detail: "$1/\\sqrt{(8.85 \\times 10^{-12})(4\\pi \\times 10^{-7})} = 2.998 \\times 10^{8}$ m/s, matching measured light speed."
      },
      {
        term: "Transverse character",
        kind: "theorem",
        statement: "Maxwell's equations force **$E$ and $B$ perpendicular to the propagation direction and to each other**.",
        detail: "Longitudinal electric waves are forbidden in vacuum; only transverse polarizations propagate."
      },
      {
        term: "Spectrum unity",
        kind: "insight",
        statement: "Radio, microwave, infrared, visible, ultraviolet, x-ray, and gamma differ only in frequency; **all are the same Maxwell wave at different $\\lambda$**.",
        detail: "Optics chapters treat the visible slice; modern physics extends the same laws to both ends."
      }
    ],
    figures: [
      {
        caption: "Mutual induction of $E$ and $B$: changing $E$ flux drives circulating $B$, changing $B$ flux drives circulating $E$",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Mutual induction of E and B: changing E flux drives circulating B, changing B flux drives circulating E"><rect x="0" y="0" width="400" height="200" fill="none"/><ellipse cx="120" cy="100" rx="60" ry="40" fill="none" stroke="currentColor" stroke-width="2"/><line x1="120" y1="40" x2="120" y2="160" stroke="currentColor" stroke-width="2"/><polygon points="120,40 114,52 126,52" fill="currentColor"/><text x="128" y="90" font-size="13" fill="currentColor">E(t)</text><ellipse cx="290" cy="100" rx="60" ry="40" fill="none" stroke="currentColor" stroke-width="2"/><line x1="230" y1="100" x2="350" y2="100" stroke="currentColor" stroke-width="2"/><polygon points="350,100 338,94 338,106" fill="currentColor"/><text x="292" y="90" font-size="13" fill="currentColor">B(t)</text><text x="170" y="190" font-size="12" fill="currentColor">each changing flux creates the other field</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Computing c",
        problem: "Evaluate $c = 1/\\sqrt{\\epsilon_{0}\\mu_{0}}$ numerically.",
        steps: [
          { label: "Step 1: Product", text: "$\\epsilon_{0}\\mu_{0} = (8.854 \\times 10^{-12})(1.257 \\times 10^{-6}) = 1.113 \\times 10^{-17}$ s-squared per m-squared." },
          { label: "Step 2: Root", text: "$\\sqrt{1.113 \\times 10^{-17}} = 3.336 \\times 10^{-9}$ s/m." },
          { label: "Step 3: Invert", text: "$c = 1/(3.336 \\times 10^{-9}) = 2.998 \\times 10^{8}$ m/s." }
        ],
        result: "$c = 3.00 \\times 10^{8}$ m/s from purely electromagnetic constants."
      },
      {
        title: "Why no medium is needed",
        problem: "A student asks what vibrates in light. Answer from Maxwell's viewpoint.",
        steps: [
          { label: "Step 1: Fields are the medium", text: "The dynamical objects $E(x,t)$ and $B(x,t)$ themselves oscillate; no ether particles are required." },
          { label: "Step 2: Energy flows", text: "Energy density $(\\epsilon_{0}E^{2}/2 + B^{2}/2\\mu_{0})$ travels with the fields, as Section 32.4 quantifies." },
          { label: "Step 3: Experimental proof", text: "Michelson-Morley found no ether drift; Maxwell plus relativity explains propagation in vacuum." }
        ],
        result: "Fields vibrate; that is the wave."
      }
    ],
    keyTakeaways: [
      "Displacement current completes Maxwell's equations and predicts waves in vacuum.",
      "Wave speed $c = 1/\\sqrt{\\epsilon_{0}\\mu_{0}}$ matches measured light speed.",
      "EM waves are transverse with $E$ and $B$ mutually perpendicular."
    ],
    quiz: [
      {
        q: "Which Maxwell addition makes vacuum waves possible?",
        options: ["Coulomb's law", "Displacement current", "Magnetic monopoles", "Ohm's law"],
        answer: 1,
        explanation: "The $\\partial E/\\partial t$ term lets changing E create B with no conduction current."
      },
      {
        q: "c computed from $\\epsilon_{0}$ and $\\mu_{0}$ is significant because it:",
        options: ["Depends on amplitude", "Equals the measured speed of light", "Varies with wavelength in vacuum", "Requires a medium"],
        answer: 1,
        explanation: "Agreement of the computed $3.00\\times 10^{8}$ m/s with optics identified light as EM."
      },
      {
        q: "EM waves in vacuum are:",
        options: ["Longitudinal", "Transverse", "Torsional", "Static"],
        answer: 1,
        explanation: "Maxwell forces E and B perpendicular to propagation."
      }
    ]
  },
  {
    sectionId: "young-ch32-s2",
    readingTime: 6,
    intro: "The simplest Maxwell solution is the plane wave: uniform fields over each plane perpendicular to travel. Electric and magnetic magnitudes lock in fixed ratio, and the triad of directions follows a right-hand rule. This section writes the plane-wave fields and the direction logic Young drills with figures.",
    objectives: [
      "Write plane-wave $E$ and $B$ fields for propagation along an axis",
      "Apply $E = cB$ and the $E \\times B$ direction rule",
      "Verify the wave satisfies Maxwell's equations qualitatively"
    ],
    concepts: [
      {
        term: "Plane wave",
        kind: "definition",
        statement: "A **plane wave has fields uniform over every plane perpendicular to propagation**, varying only with the coordinate along travel and time.",
        detail: "It is the large-distance limit of spherical waves and the building block for all beams."
      },
      {
        term: "E to B ratio",
        kind: "law",
        statement: "In vacuum **$E = cB$** at every instant, with $E/B = c$ fixed by Maxwell's equations.",
        detail: "A $600$ V/m field pairs with $2.00$ microT; electric forces dominate for ordinary charges."
      },
      {
        term: "Propagation direction rule",
        kind: "method",
        statement: "Point fingers along $E$, curl toward $B$; **thumb gives propagation along $E \\times B$**.",
        detail: "Equivalently the Poynting direction $S$ below always points along travel in vacuum."
      },
      {
        term: "No longitudinal component",
        kind: "theorem",
        statement: "Gauss laws in vacuum force **$E$ and $B$ fully transverse**: zero components along propagation.",
        detail: "Any longitudinal piece would imply charge or monopole density, absent in vacuum."
      },
      {
        term: "Superposition of planes",
        kind: "insight",
        statement: "Arbitrary beams are **superpositions of plane waves**, so mastering one direction and polarization masters them all linearly.",
        detail: "Fourier optics and antenna theory both expand fields this way."
      }
    ],
    examples: [
      {
        title: "B from E",
        problem: "A plane wave travels in the positive x-direction with $E_{y} = (600 \\mathrm{V/m}) \\cos(kx - \\omega t)$. Find $B_{z}$ amplitude and direction.",
        steps: [
          { label: "Step 1: Magnitude", text: "$B_{0} = E_{0}/c = 600/(3.00 \\times 10^{8}) = 2.00 \\times 10^{-6}$ T." },
          { label: "Step 2: Direction", text: "$E$ along y, travel along x requires $B$ along z since $y \\times z = x$." },
          { label: "Step 3: Full field", text: "$B_{z} = (2.00 \\mathrm{\\mu T}) \\cos(kx - \\omega t)$, in phase with $E$." }
        ],
        result: "$B_{z} = 2.00$ microT in phase, giving $E \\times B$ along positive x."
      },
      {
        title: "Finding travel direction",
        problem: "At one instant $E$ points along positive z and $B$ along negative y. What is the travel direction?",
        steps: [
          { label: "Step 1: Cross product", text: "Direction is $E \\times B$: $z \\times (-y) = -(z \\times y) = -(-x) = x$." },
          { label: "Step 2: Answer", text: "Positive x-direction." },
          { label: "Step 3: Check", text: "$E$, $B$, travel are mutually perpendicular as required." }
        ],
        result: "Wave travels along positive x."
      }
    ],
    keyTakeaways: [
      "Plane waves are uniform across transverse planes and superpose into general beams.",
      "$E = cB$ everywhere with $E$, $B$, travel a right-handed triad.",
      "Vacuum fields are purely transverse."
    ],
    quiz: [
      {
        q: "E amplitude 300 V/m in vacuum. B amplitude is:",
        options: ["$1.00$ microT", "$300$ T", "$9.0$ T", "$100$ microT"],
        answer: 0,
        explanation: "$B = E/c = 300/(3.00\\times 10^{8}) = 1.00\\times 10^{-6}$ T."
      },
      {
        q: "E along +y, B along +z. Propagation is along:",
        options: ["+x", "-x", "+y", "Cannot tell"],
        answer: 0,
        explanation: "$y \\times z = x$ by the right-hand rule."
      },
      {
        q: "Plane wave means fields depend only on:",
        options: ["Transverse coordinates", "Longitudinal coordinate and time", "Time alone", "Amplitude"],
        answer: 1,
        explanation: "Uniform over each transverse plane; variation only along travel plus time."
      }
    ]
  },
  {
    sectionId: "young-ch32-s3",
    readingTime: 6,
    intro: "Real light is sinusoidal in space and time, characterized by wavelength, frequency, and polarization. The wave number $k$ packages spatial oscillation just as $\\omega$ packages temporal oscillation. Polarization names the direction of $E$, the vector that drives matter.",
    objectives: [
      "Relate $\\lambda$, $f$, $k$, and $\\omega$ through $c = \\lambda f = \\omega/k$",
      "Write $E(x,t)$ and $B(x,t)$ for a sinusoidal plane wave",
      "Define linear, circular, and elliptical polarization"
    ],
    concepts: [
      {
        term: "Wavelength-frequency relation",
        kind: "law",
        statement: "For any vacuum EM wave **$c = \\lambda f$**, with $\\omega = 2\\pi f$ and $k = 2\\pi/\\lambda$ giving $\\omega/k = c$.",
        detail: "Green $550$ nm light has $f = 5.45 \\times 10^{14}$ Hz; FM $100$ MHz has $\\lambda = 3.00$ m."
      },
      {
        term: "Sinusoidal wave functions",
        kind: "notation",
        statement: "A wave along $x$ is **$E_{y} = E_{max}\\cos(kx - \\omega t)$**, $B_{z} = B_{max}\\cos(kx - \\omega t)$ with $E_{max} = cB_{max}$.",
        detail: "Minus sign means travel toward positive $x$; plus would travel toward negative $x$."
      },
      {
        term: "Wave number",
        kind: "definition",
        statement: "The **wave number $k = 2\\pi/\\lambda$** is the spatial frequency in rad/m, dual to $\\omega$ in rad/s.",
        detail: "Phase $kx - \\omega t$ advances $2\\pi$ per wavelength in space or per period in time."
      },
      {
        term: "Polarization",
        kind: "definition",
        statement: "**Polarization is the direction of $E$**: linear if $E$ stays on one line, circular if it rotates at fixed magnitude, elliptical in between.",
        detail: "Antennas, sunglasses, and LCD screens all select or exploit polarization; Chapter 33 measures it."
      },
      {
        term: "Unpolarized light",
        kind: "insight",
        statement: "Sunlight is **a rapid random mixture of polarizations**, so no single $E$ direction persists long enough to matter.",
        detail: "Polarizers carve one direction from the mixture at the cost of at least half the intensity."
      }
    ],
    figures: [
      {
        caption: "Sinusoidal wave: transverse $E_{y}$ and $B_{z}$ in phase traveling along $x$",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Sinusoidal wave: transverse E_y and B_z in phase traveling along x"><rect x="0" y="0" width="400" height="200" fill="none"/><line x1="20" y1="100" x2="380" y2="100" stroke="currentColor" stroke-width="1"/><path d="M 20 100 C 60 40, 100 40, 140 100 C 180 160, 220 160, 260 100 C 300 40, 340 40, 380 100" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M 20 100 C 60 130, 100 130, 140 100 C 180 70, 220 70, 260 100 C 300 130, 340 130, 380 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6,4"/><text x="300" y="50" font-size="12" fill="currentColor">E (solid)</text><text x="300" y="140" font-size="12" fill="currentColor">B (dashed), in phase</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Green light numbers",
        problem: "$\\lambda = 550$ nm vacuum light. Find $f$, $\\omega$, $k$.",
        steps: [
          { label: "Step 1: Frequency", text: "$f = c/\\lambda = 3.00 \\times 10^{8}/(550 \\times 10^{-9}) = 5.45 \\times 10^{14}$ Hz." },
          { label: "Step 2: Angular frequency", text: "$\\omega = 2\\pi f = 3.43 \\times 10^{15}$ rad/s." },
          { label: "Step 3: Wave number", text: "$k = 2\\pi/\\lambda = 1.14 \\times 10^{7}$ rad/m; check $\\omega/k = 3.00 \\times 10^{8}$ m/s." }
        ],
        result: "$f = 5.45 \\times 10^{14}$ Hz, $\\omega = 3.43 \\times 10^{15}$ rad/s, $k = 1.14 \\times 10^{7}$ rad/m."
      },
      {
        title: "Writing the wave",
        problem: "Linearly polarized wave along x, $E$ along y, $E_{max} = 100$ V/m, $\\lambda = 3.00$ m. Write $E_{y}(x,t)$.",
        steps: [
          { label: "Step 1: Constants", text: "$k = 2\\pi/3.00 = 2.094$ rad/m; $f = c/\\lambda = 10^{8}$ Hz; $\\omega = 6.283 \\times 10^{8}$ rad/s." },
          { label: "Step 2: Field", text: "$E_{y} = (100 \\mathrm{V/m}) \\cos[(2.094)x - (6.283 \\times 10^{8})t]$ SI." },
          { label: "Step 3: B field", text: "$B_{z} = E_{y}/c$ with $B_{max} = 0.333$ microT." }
        ],
        result: "$E_{y} = 100\\cos(2.094x - 6.283 \\times 10^{8}t)$ V/m traveling toward positive x."
      }
    ],
    keyTakeaways: [
      "$c = \\lambda f = \\omega/k$ links every space-time descriptor of the wave.",
      "$E(x,t)$, $B(x,t)$ are in-phase transverse sinusoids with $E_{max} = cB_{max}$.",
      "Polarization is the $E$ direction pattern: linear, circular, elliptical, or random."
    ],
    quiz: [
      {
        q: "FM radio at 100 MHz has wavelength:",
        options: ["$3.00$ m", "$0.33$ m", "$300$ m", "$3.00$ mm"],
        answer: 0,
        explanation: "$\\lambda = c/f = 3.00\\times 10^{8}/10^{8} = 3.00$ m."
      },
      {
        q: "$E_{y}$ = $E_{max}$ cos(kx + omega t) travels toward:",
        options: ["Positive x", "Negative x", "Positive y", "It is standing"],
        answer: 1,
        explanation: "Plus sign in phase means motion toward negative x."
      },
      {
        q: "Polarization of an EM wave refers to the direction of:",
        options: ["B", "E", "Propagation", "Poynting flux time average"],
        answer: 1,
        explanation: "By convention polarization names the E-vector behavior."
      },
      {
        q: "Unpolarized light is:",
        options: ["Zero E field", "A rapid random mix of polarizations", "Always circularly polarized", "Monochromatic by definition"],
        answer: 1,
        explanation: "No persistent E direction; a polarizer selects one component."
      }
    ]
  },
  {
    sectionId: "young-ch32-s4",
    readingTime: 8,
    intro: "Waves carry energy and momentum through empty space, which is how sunlight warms and pushes. The Poynting vector $S$ tracks energy flow; its average is the intensity. Absorbing or reflecting the wave transfers momentum, producing radiation pressure feeble on Earth but decisive in stars and solar sails.",
    objectives: [
      "Write the Poynting vector and energy densities $u_{E}$, $u_{B}$",
      "Compute intensity $I = S_{av} = E_{max}^{2}/(2\\mu_{0}c)$",
      "Compute radiation pressure for absorption versus reflection"
    ],
    concepts: [
      {
        term: "Energy density",
        kind: "law",
        statement: "Total density **$u = \\epsilon_{0}E^{2}/2 + B^{2}/2\\mu_{0}$**, with equal electric and magnetic time averages in a wave.",
        detail: "Using $E = cB$ either term can be written alone; average $u_{av} = \\epsilon_{0}E_{rms}^{2}$."
      },
      {
        term: "Poynting vector",
        kind: "theorem",
        statement: "Energy flow is **$S = (1/\\mu_{0})\\,E \\times B$** in W/m-squared, pointing along propagation.",
        detail: "For sinusoids $S$ pulses at $2\\omega$ between zero and $E_{max}B_{max}/\\mu_{0}$; detectors average it."
      },
      {
        term: "Intensity",
        kind: "theorem",
        statement: "Average flow, the **intensity $I = S_{av} = E_{max}^{2}/(2\\mu_{0}c) = c\\epsilon_{0}E_{rms}^{2} = c u_{av}$**.",
        detail: "Sunlight at Earth is $I \\approx 1360$ W/m-squared, implying $E_{rms} \\approx 717$ V/m."
      },
      {
        term: "Momentum and pressure",
        kind: "law",
        statement: "Waves carry momentum $dp/dt$ per area **$p_{rad} = I/c$ absorbed, $2I/c$ reflected**.",
        detail: " Reflection doubles transfer by reversing momentum. Solar-sail designs live on the factor of two."
      },
      {
        term: "Inverse-square falloff",
        kind: "insight",
        statement: "Isotropic power $P$ spreads over $4\\pi r^{2}$, so **$I = P/(4\\pi r^{2})$** and fields fall as $1/r$.",
        detail: "Doubling distance quarters intensity and halves $E_{max}$."
      }
    ],
    figures: [
      {
        caption: "Poynting flow $S = E \\times B/\\mu_{0}$ along propagation with intensity falling as $1/r^{2}$",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Poynting flow S = E times B/mu_0 along propagation with intensity falling as 1/r^2"><rect x="0" y="0" width="400" height="200" fill="none"/><circle cx="70" cy="100" r="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="62" y="104" font-size="12" fill="currentColor">P</text><path d="M 95 70 C 150 60, 220 60, 300 55" fill="none" stroke="currentColor" stroke-width="2"/><path d="M 95 100 L 320 100" fill="none" stroke="currentColor" stroke-width="2"/><polygon points="320,100 310,95 310,105" fill="currentColor"/><path d="M 95 130 C 150 140, 220 140, 300 145" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="330" cy="100" r="25" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5,4"/><text x="200" y="90" font-size="13" fill="currentColor">S = I</text><text x="200" y="185" font-size="12" fill="currentColor">I = P / (4 pi r²)</text></svg>',
        afterConcept: 5
      }
    ],
    examples: [
      {
        title: "Laser spot intensity",
        problem: "A $5.00$ mW laser focuses to a $0.500$ mm diameter spot. Find intensity and $E_{max}$.",
        steps: [
          { label: "Step 1: Area", text: "$r = 0.250$ mm; $A = \\pi r^{2} = \\pi(2.50 \\times 10^{-4})^{2} = 1.963 \\times 10^{-7}$ m-squared." },
          { label: "Step 2: Intensity", text: "$I = P/A = 5.00 \\times 10^{-3}/1.963 \\times 10^{-7} = 2.55 \\times 10^{4}$ W/m-squared." },
          { label: "Step 3: Field", text: "$E_{max} = \\sqrt{2\\mu_{0}cI} = \\sqrt{2(4\\pi \\times 10^{-7})(3.00 \\times 10^{8})(2.55 \\times 10^{4})} = 4.39 \\times 10^{3}$ V/m." }
        ],
        result: "$I = 2.55 \\times 10^{4}$ W/m-squared and $E_{max} = 4.39$ kV/m."
      },
      {
        title: "Solar pressure on a sail",
        problem: "A perfectly reflecting $1000$ m-squared sail faces $I = 1360$ W/m-squared sunlight at normal incidence. Find the force.",
        steps: [
          { label: "Step 1: Pressure", text: "$p_{rad} = 2I/c = 2(1360)/(3.00 \\times 10^{8}) = 9.07 \\times 10^{-6}$ N/m-squared." },
          { label: "Step 2: Force", text: "$F = pA = (9.07 \\times 10^{-6})(1000) = 9.07 \\times 10^{-3}$ N." },
          { label: "Step 3: Sense", text: "About $9$ mN, tiny but continuous and propellant-free; absorption would give half." }
        ],
        result: "Force $9.07$ mN on the reflecting sail."
      }
    ],
    keyTakeaways: [
      "$S = E \\times B/\\mu_{0}$ carries energy at speed $c$; its average is intensity $I$.",
      "$I = E_{max}^{2}/(2\\mu_{0}c)$ converts between brightness and field strength.",
      "Radiation pressure is $I/c$ absorbed and $2I/c$ reflected."
    ],
    quiz: [
      {
        q: "Doubling $E_{max}$ changes intensity by:",
        options: ["Factor 2", "Factor 4", "Factor square-root 2", "No change"],
        answer: 1,
        explanation: "$I$ is quadratic in field: $(2E)^{2} = 4E^{2}$."
      },
      {
        q: "A surface absorbs intensity I. Radiation pressure is:",
        options: ["$I/c^{2}$", "$I/c$", "$2I/c$", "Zero"],
        answer: 1,
        explanation: "Absorption deposits momentum $U/c$; reflection doubles it."
      },
      {
        q: "Isotropic 100 W source at 10 m gives intensity:",
        options: ["$0.0796$ W/m-squared", "$7.96$ W/m-squared", "$0.796$ W/m-squared", "$10$ W/m-squared"],
        answer: 0,
        explanation: "$I = 100/(4\\pi\\times 100) = 0.0796$ W/m-squared."
      }
    ]
  },
  {
    sectionId: "young-ch32-s5",
    readingTime: 6,
    intro: "Confine waves between conducting walls and only discrete standing patterns survive. Nodes of $E$ sit at conductors while $B$ has antinodes there, and cavity frequencies quantize. Young uses the leaky microwave-oven door and laser cavities as everyday examples.",
    objectives: [
      "Write standing-wave fields as counterpropagating superpositions",
      "Locate $E$ nodes and $B$ nodes in a conducting cavity",
      "Find allowed wavelengths $\\lambda_{n} = 2L/n$ for a box"
    ],
    concepts: [
      {
        term: "Standing EM wave",
        kind: "definition",
        statement: "Two equal counterpropagating waves superpose to a **standing pattern with fixed nodes**: $E_{y} = 2E_{max}\\sin(kx)\\sin(\\omega t)$ form.",
        detail: "Energy sloshes between electric and magnetic forms without net travel; $S_{av} = 0$."
      },
      {
        term: "Conductor boundary condition",
        kind: "law",
        statement: "At a perfect conductor **tangential $E$ vanishes**, pinning an $E$ node (and $B$ antinode) at each wall.",
        detail: "Surface charges and currents terminate and support the fields exactly as needed."
      },
      {
        term: "Cavity modes",
        kind: "theorem",
        statement: "A box of length $L$ admits **$L = n\\lambda/2$, $f_{n} = nc/(2L)$** for integer $n$.",
        detail: "Same quantization as a string, now for light; laser longitudinal modes follow this rule."
      },
      {
        term: "E and B quarter-wave shift",
        kind: "theorem",
        statement: "Where $E$ has a node, $B$ has an antinode **a quarter wavelength away in the envelope**, and they oscillate $90^{\\circ}$ out of phase in time.",
        detail: "Total energy at any point still oscillates between pure $E$ and pure $B$ forms."
      },
      {
        term: "Microwave oven nodes",
        kind: "insight",
        statement: "A microwave oven is a **multimode cavity at $2.45$ GHz ($\\lambda = 12.2$ cm)**; cold spots sit at $E$ nodes, smeared by the turntable and mode stirrer.",
        detail: "The door mesh holes are far smaller than $12$ cm, so waves cannot leak through."
      }
    ],
    examples: [
      {
        title: "Laser cavity modes",
        problem: "A He-Ne laser cavity is $L = 0.500$ m. Find the mode spacing $\\Delta f$ and the mode number near $\\lambda = 633$ nm.",
        steps: [
          { label: "Step 1: Spacing", text: "$\\Delta f = c/(2L) = 3.00 \\times 10^{8}/1.00 = 3.00 \\times 10^{8}$ Hz." },
          { label: "Step 2: Frequency", text: "$f = c/\\lambda = 4.74 \\times 10^{14}$ Hz." },
          { label: "Step 3: Mode number", text: "$n = f/\\Delta f = 1.58 \\times 10^{6}$, so adjacent modes differ by $1$ in $1.6$ million." }
        ],
        result: "Spacing $300$ MHz around mode $n \\approx 1.58 \\times 10^{6}$."
      },
      {
        title: "Microwave node spacing",
        problem: "Oven frequency $2.45$ GHz. Find $\\lambda$ and $E$-node spacing.",
        steps: [
          { label: "Step 1: Wavelength", text: "$\\lambda = c/f = 3.00 \\times 10^{8}/(2.45 \\times 10^{9}) = 0.122$ m." },
          { label: "Step 2: Nodes", text: "$E$ nodes every $\\lambda/2 = 6.12$ cm along each standing direction." },
          { label: "Step 3: Meaning", text: "Food spans several nodes, so without rotation heating would stripe every $6$ cm." }
        ],
        result: "$\\lambda = 12.2$ cm with nodes every $6.12$ cm."
      }
    ],
    keyTakeaways: [
      "Standing waves superpose counterpropagating pairs with zero net flow.",
      "Conductors pin E nodes; box modes obey $f_{n} = nc/(2L)$.",
      "Ovens, waveguides, and lasers are engineered standing-wave cavities."
    ],
    quiz: [
      {
        q: "A 1.00 m conducting box supports EM standing waves. Longest wavelength is:",
        options: ["$0.50$ m", "$1.00$ m", "$2.00$ m", "$4.00$ m"],
        answer: 2,
        explanation: "$L = \\lambda/2$ for n = 1, so $\\lambda = 2L = 2.00$ m."
      },
      {
        q: "At a perfect conductor wall, the EM standing wave has:",
        options: ["E antinode, B node", "E node, B antinode", "Both nodes", "Both antinodes"],
        answer: 1,
        explanation: "Tangential E must vanish; B peaks to carry the surface current."
      },
      {
        q: "Time-averaged Poynting vector of a pure standing wave is:",
        options: ["Maximum at nodes", "Zero everywhere on average", "Equal to peak S", "Infinite"],
        answer: 1,
        explanation: "Equal opposite flows cancel; energy oscillates in place."
      }
    ]
  }
];
