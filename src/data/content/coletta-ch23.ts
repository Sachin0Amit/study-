import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 23: Light (Sections 23.1 – 23.4)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh23Content: SectionContent[] = [
  {
    sectionId: "coletta-ch23-s1",
    readingTime: 6,
    intro: "Light is a traveling electromagnetic wave that needs no medium, predicted by Maxwell and clocked at $c = 3.00 \\times 10^{8}$ m/s. Coletta shows how oscillating $\\vec{E}$ and $\\vec{B}$ sustain each other and how the spectrum organizes all such waves. Electricity, magnetism, and optics merge here.",
    objectives: [
      "Explain EM waves as self-sustaining $\\vec{E}$ and $\\vec{B}$ oscillations from accelerated charge",
      "State $c = 1/\\sqrt{\\epsilon_{0}\\mu_{0}}$ and the order of the spectrum",
      "Relate frequency, wavelength, and energy flow $S$ for light"
    ],
    concepts: [
      {
        term: "Electromagnetic wave",
        kind: "definition",
        statement: "An **EM wave** is coupled oscillating $\\vec{E} \\perp \\vec{B} \\perp$ propagation, each regenerating the other by Faraday's and Maxwell's laws once launched by accelerated charge.",
        detail: "A shaking electron broadcasts at its shake frequency; antennas are controlled versions of the same broadcast."
      },
      {
        term: "Speed of light",
        kind: "law",
        statement: "Maxwell computed $c = 1/\\sqrt{\\epsilon_{0}\\mu_{0}} = 3.00 \\times 10^{8}$ m/s from static constants, matching the measured speed and identifying light as EM.",
        detail: "Inserting $\\epsilon_{0} = 8.85 \\times 10^{-12}$ and $\\mu_{0} = 4\\pi \\times 10^{-7}$ gives $2.998 \\times 10^{8}$ m/s."
      },
      {
        term: "EM spectrum",
        kind: "notation",
        statement: "From long to short: radio, microwave, infrared, **visible** ($380$–$750$ nm), ultraviolet, X-ray, gamma, all with $c = f\\lambda$.",
        detail: "An FM $100$ MHz signal spans $3.0$ m while green $550$ nm light oscillates at $5.5 \\times 10^{14}$ Hz."
      },
      {
        term: "Energy flow",
        kind: "theorem",
        statement: "Waves carry intensity $S = c\\epsilon_{0}E_{0}^{2}/2$ (average Poynting flux) with $E_{0}/B_{0} = c$ between the field amplitudes.",
        detail: "Sunlight's $1360$ W/m$^{2}$ above the atmosphere corresponds to $E_{0} \\approx 1010$ V/m."
      },
      {
        term: "Transverse polarization",
        kind: "insight",
        statement: "EM waves are **transverse**, so $\\vec{E}$ can point in any direction across the ray, the polarization exploited in sunglasses and Chapter 26.",
        detail: "Sound cannot be polarized this way because air waves are longitudinal." }
    ],
    figures: [
      {
        caption: "EM wave: $\\vec{E}$ and $\\vec{B}$ oscillate transversely with $E_{0}/B_{0} = c$",
        svg: '<svg role="img" aria-label="EM wave: vecE and vecB oscillate transversely with E_0/B_0 = c" viewBox="0 0 400 150" width="100%" height="150"><line x1="20" y1="75" x2="380" y2="75" stroke="currentColor" stroke-width="1" opacity="0.5"/><path d="M20,75 C60,25 100,25 140,75 S220,125 260,75 S340,25 380,75" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M20,75 C60,100 100,100 140,75 S220,50 260,75 S340,100 380,75" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="330" y="40" font-size="12" fill="currentColor">E</text><text x="330" y="115" font-size="12" fill="currentColor">B</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "FM wavelength",
        problem: "A station broadcasts at $98.5$ MHz. Find the wavelength.",
        steps: [
          { label: "Relation", text: "$\\lambda = c/f$." },
          { label: "Insert", text: "$\\lambda = 3.00 \\times 10^{8}/9.85 \\times 10^{7} \\approx 3.046$ m." },
          { label: "Antenna note", text: "Quarter-wave whips are about $76$ cm, matching car antennas." }
        ],
        result: "About $3.0$ m."
      },
      {
        title: "Sunlight field",
        problem: "Sunlight delivers $S = 1000$ W/m$^{2}$. Estimate $E_{0}$.",
        steps: [
          { label: "Formula", text: "$E_{0} = \\sqrt{2S/c\\epsilon_{0}}$." },
          { label: "Denominator", text: "$c\\epsilon_{0} = 3.00 \\times 10^{8} \\times 8.85 \\times 10^{-12} = 2.655 \\times 10^{-3}$." },
          { label: "Evaluate", text: "$E_{0} = \\sqrt{2000/2.655 \\times 10^{-3}} = \\sqrt{753296} \\approx 868$ V/m." }
        ],
        result: "About $8.7 \\times 10^{2}$ V/m."
      }
    ],
    keyTakeaways: [
      "Accelerated charge launches self-sustaining $\\vec{E}$–$\\vec{B}$ waves.",
      "Maxwell's $c = 1/\\sqrt{\\epsilon_{0}\\mu_{0}}$ identifies light as EM.",
      "Spectrum order with $c = f\\lambda$ spans meters to femtometers."
    ],
    quiz: [
      {
        q: "Maxwell's great prediction was that:",
        options: ["Atoms are indivisible", "Light needs ether", "$c$ follows from $\\epsilon_{0}$ and $\\mu_{0}$", "Sound is transverse"],
        answer: 2,
        explanation: "Static lab constants predicted the wave speed, matching light and unifying optics with EM."
      },
      {
        q: "Green light $\\lambda = 550$ nm has frequency about:",
        options: ["$5.5 \\times 10^{8}$ Hz", "$5.5 \\times 10^{14}$ Hz", "$1.8 \\times 10^{6}$ Hz", "$3.0 \\times 10^{8}$ Hz"],
        answer: 1,
        explanation: "$f = c/\\lambda = 3.00 \\times 10^{8}/5.5 \\times 10^{-7} \\approx 5.5 \\times 10^{14}$ Hz."
      },
      {
        q: "In an EM wave the $\\vec{E}$ and $\\vec{B}$ directions are:",
        options: ["Mutually perpendicular with travel", "Unrelated", "Longitudinal", "Parallel to travel"],
        answer: 0,
        explanation: "Transverse geometry puts $\\vec{E} \\perp \\vec{B} \\perp$ propagation direction."
      }
    ]
  },
  {
    sectionId: "coletta-ch23-s2",
    readingTime: 5,
    intro: "Is light a wave or a stream of particles? Coletta previews the evidence both ways: interference proves waves while the photoelectric effect demands photons. The full verdict waits for Chapter 28, but the tension is set here.",
    objectives: [
      "Summarize wave evidence (interference, diffraction, polarization)",
      "Summarize particle evidence (photoelectric, Compton preview)",
      "State the complementarity idea that both models are needed"
    ],
    concepts: [
      {
        term: "Wave evidence",
        kind: "insight",
        statement: "Interference, diffraction, and polarization **require** waves: particles cannot cancel or squeeze through slits into fringes.",
        detail: "Young's double slit with $d\\sin\\theta = m\\lambda$ is the exhibit Coletta cites first."
      },
      {
        term: "Particle evidence",
        kind: "insight",
        statement: "The photoelectric effect fires electrons only above a threshold frequency regardless of brightness, demanding energy packets $E = hf$.",
        detail: "Brighter red light still ejects nothing while dim blue succeeds, impossible for wave energy spread over the surface."
      },
      {
        term: "Photon",
        kind: "definition",
        statement: "A **photon** carries $E = hf = hc/\\lambda$ with momentum $p = h/\\lambda$, the particle coin of light previewed here and spent in Chapter 28.",
        detail: "A green $550$ nm photon holds about $2.26$ eV, typical of atomic transitions."
      },
      {
        term: "Complementarity",
        kind: "insight",
        statement: "**Complementarity** means wave and particle descriptions are both true, revealed by different experiments rather than contradicting.",
        detail: "Propagation through slits shows waves; arrival at detectors clicks like particles."
      },
      {
        term: "Speed in vacuum",
        kind: "law",
        statement: "All light in vacuum travels at $c$ regardless of color or brightness; only frequency and wavelength distinguish beams.",
        detail: "Red and violet cross space together, separating only in dispersive matter." }
    ],
    examples: [
      {
        title: "Photon energy",
        problem: "Find the energy of a $450$ nm blue photon in eV.",
        steps: [
          { label: "Joules", text: "$E = hc/\\lambda = 6.626 \\times 10^{-34} \\times 3.00 \\times 10^{8}/4.50 \\times 10^{-7} = 4.417 \\times 10^{-19}$ J." },
          { label: "Convert", text: "Divide by $1.60 \\times 10^{-19}$ to get $2.76$ eV." },
          { label: "Use", text: "Enough to drive many photochemical reactions per photon." }
        ],
        result: "About $2.8$ eV."
      },
      {
        title: "Photoelectric threshold logic",
        problem: "Light of $4.0 \\times 10^{14}$ Hz fails to eject electrons but $6.0 \\times 10^{14}$ Hz succeeds dimly. What follows?",
        steps: [
          { label: "Wave expectation", text: "Brighter $4.0 \\times 10^{14}$ Hz should eventually work by piling energy." },
          { label: "Observation", text: "It never does, while any $6.0 \\times 10^{14}$ Hz works, so energy arrives in frequency-sized packets." },
          { label: "Conclusion", text: "Threshold frequency marks $hf = $ work function." }
        ],
        result: "Particle packets confirmed."
      }
    ],
    keyTakeaways: [
      "Interference proves waves; photoelectric thresholds prove photons.",
      "Photons carry $E = hf$ with $p = h/\\lambda$.",
      "Both models coexist by complementarity."
    ],
    quiz: [
      {
        q: "Dim blue ejects electrons but bright red never does. This proves:",
        options: ["Red is slower", "Meters are broken", "Waves carry energy", "Energy arrives in frequency packets"],
        answer: 3,
        explanation: "Only $hf$ above threshold works at any brightness, the photon signature."
      },
      {
        q: "A $600$ nm photon's energy is about:",
        options: ["$600$ eV", "$2.07$ eV", "$20.7$ eV", "$0.2$ eV"],
        answer: 1,
        explanation: "$E = hc/\\lambda \\approx 1240/600 \\approx 2.07$ eV with $hc = 1240$ eV·nm."
      },
      {
        q: "Polarization evidence supports:",
        options: ["Particle model only", "Wave model (transverse)", "Longitudinal sound", "Static fields"],
        answer: 1,
        explanation: "Only transverse waves can be filtered by orientation."
      }
    ]
  },
  {
    sectionId: "coletta-ch23-s3",
    readingTime: 5,
    intro: "Geometric optics treats light as rays that travel straight until they meet matter. Coletta introduces Huygens' wavelets to justify straight propagation, shadows, and the ray model. Pinholes and eclipses are the lab proofs.",
    objectives: [
      "State Huygens' principle and derive straight-line propagation",
      "Explain sharp shadows, pinhole images, and eclipses with rays",
      "Give the ray-model limits where wave optics takes over"
    ],
    concepts: [
      {
        term: "Huygens' principle",
        kind: "law",
        statement: "Every wavefront point emits secondary **wavelets**, and the new front is their tangent surface, advancing light forward point by point.",
        detail: "A plane wave stays plane because wavelet tangents line up; an aperture trims them and bends the beam."
      },
      {
        term: "Ray model",
        kind: "definition",
        statement: "**Rays** are lines along the propagation direction, perpendicular to wavefronts, valid when apertures greatly exceed $\\lambda$.",
        detail: "Room-scale optics with $500$ nm light satisfies this by factors of millions, so rays suffice until Chapter 26."
      },
      {
        term: "Shadows",
        kind: "insight",
        statement: "Sharp **umbra** plus fuzzy **penumbra** trace straight rays from extended sources around obstacles.",
        detail: "Total versus partial solar eclipses are the Moon's umbra and penumbra sweeping Earth."
      },
      {
        term: "Pinhole camera",
        kind: "method",
        statement: "A small hole images by admitting one ray bundle per object point, with size ratio $h_{i}/h_{o} = d_{i}/d_{o}$ from similar triangles.",
        detail: "Smaller holes sharpen geometrically but dim and diffract, an optimal tradeoff near a millimeter."
      },
      {
        term: "Speed and delay",
        kind: "theorem",
        statement: "Light crosses $1$ m in $3.3$ ns and $1$ km in $3.3$ mus, so terrestrial delays are negligible but astronomical ones (8 min from the Sun) are not.",
        detail: "Roemer's moon-delay measurement of $c$ used exactly this accumulation over Earth's orbit." }
    ],
    examples: [
      {
        title: "Pinhole image size",
        problem: "A $2.0$ m tree $30$ m away images through a pinhole $0.40$ m before film. Find image height.",
        steps: [
          { label: "Ratio", text: "$h_{i} = h_{o}d_{i}/d_{o} = 2.0 \\times 0.40/30$." },
          { label: "Compute", text: "$h_{i} = 0.80/30 \\approx 0.0267$ m." },
          { label: "Orientation", text: "Inverted and $2.7$ cm tall on the film." }
        ],
        result: "About $2.7$ cm inverted."
      },
      {
        title: "Sunlight delay",
        problem: "How long does light take from the Sun at $1.50 \\times 10^{11}$ m?",
        steps: [
          { label: "Divide", text: "$t = d/c = 1.50 \\times 10^{11}/3.00 \\times 10^{8} = 500$ s." },
          { label: "Convert", text: "$500/60 \\approx 8.33$ min." },
          { label: "Meaning", text: "We see the Sun as it was eight minutes ago." }
        ],
        result: "About $8.3$ min."
      }
    ],
    keyTakeaways: [
      "Huygens wavelets advance fronts and justify rays.",
      "Rays explain shadows, pinholes, and eclipses geometrically.",
      "Ray optics holds while apertures dwarf wavelength."
    ],
    quiz: [
      {
        q: "Huygens' principle states wavefronts advance by:",
        options: ["Secondary wavelet tangents", "Magnetic monopoles", "Random jumps", "Particle collisions"],
        answer: 0,
        explanation: "Each front point radiates wavelets whose envelope is the next front."
      },
      {
        q: "Pinhole image of a distant object is:",
        options: ["Virtual and upright", "Absent", "Upright and magnified", "Inverted and reduced"],
        answer: 3,
        explanation: "Crossing ray bundles invert and shrink by $d_{i}/d_{o}$."
      },
      {
        q: "Ray optics fails when apertures approach:",
        options: ["Focal length", "Meters", "The wavelength", "Kilometers"],
        answer: 2,
        explanation: "Diffraction then bends light by order unity and needs wave optics."
      }
    ]
  },
  {
    sectionId: "coletta-ch23-s4",
    readingTime: 6,
    intro: "At boundaries light reflects and refracts: mirrors obey $\\theta_{r} = \\theta_{i}$ while Snell's $n_{1}\\sin\\theta_{1} = n_{2}\\sin\\theta_{2}$ bends transmitted rays. Coletta adds total internal reflection with $\\sin\\theta_{c} = n_{2}/n_{1}$ and dispersion's color spread. Fiber optics and rainbows follow.",
    objectives: [
      "Apply the law of reflection and Snell's law with correct angle datum",
      "Find critical angle and explain fiber guiding by total internal reflection",
      "Explain dispersion and apparent-depth shifts"
    ],
    concepts: [
      {
        term: "Law of reflection",
        kind: "law",
        statement: "Reflected rays satisfy $\\theta_{r} = \\theta_{i}$ measured from the **normal**, staying in the plane of incidence.",
        detail: "Periscope mirrors at $45^{\\circ}$ turn beams exactly $90^{\\circ}$ by this rule twice."
      },
      {
        term: "Snell's law",
        kind: "law",
        statement: "Refraction obeys $n_{1}\\sin\\theta_{1} = n_{2}\\sin\\theta_{2}$ with $n = c/v$: entering higher $n$ bends toward the normal.",
        detail: "Air ($n \\approx 1.00$) to water ($1.33$) at $45^{\\circ}$ bends to about $32^{\\circ}$."
      },
      {
        term: "Total internal reflection",
        kind: "theorem",
        statement: "Going high-to-low $n$, incidence beyond $\\sin\\theta_{c} = n_{2}/n_{1}$ cannot refract and **totally reflects** with no loss.",
        detail: "Water-to-air $\\theta_{c} \\approx 48.8^{\\circ}$ traps fish-tank light and guides fiber cores."
      },
      {
        term: "Dispersion",
        kind: "insight",
        statement: "**Dispersion** is $n$ varying with color (higher for blue), so prisms fan white light into spectra.",
        detail: "Rainbows add internal reflection plus dispersion in droplets, spreading $40$–$42^{\\circ}$ arcs."
      },
      {
        term: "Apparent depth",
        kind: "method",
        statement: "Rays bending away from normal at the surface make pools look shallower by $d_{app} \\approx d_{real}/n$ viewed from above.",
        detail: "A $3.0$ m pool looks about $2.3$ m deep, a spearfisher's correction." }
    ],
    figures: [
      {
        caption: "Snell bending toward the normal with $n_{1}\\sin\\theta_{1} = n_{2}\\sin\\theta_{2}$",
        svg: '<svg role="img" aria-label="Snell bending toward the normal with n_1sintheta_1 = n_2sintheta_2" viewBox="0 0 400 150" width="100%" height="150"><line x1="20" y1="75" x2="380" y2="75" stroke="currentColor" stroke-width="1.5"/><line x1="200" y1="20" x2="200" y2="130" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" opacity="0.6"/><line x1="120" y1="20" x2="200" y2="75" stroke="currentColor" stroke-width="2"/><line x1="200" y1="75" x2="280" y2="75" stroke="currentColor" stroke-width="1.2" opacity="0.5"/><line x1="200" y1="75" x2="250" y2="130" stroke="currentColor" stroke-width="2"/><line x1="200" y1="75" x2="290" y2="25" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/><text x="130" y="45" font-size="11" fill="currentColor">incident</text><text x="255" y="115" font-size="11" fill="currentColor">refracted</text><text x="260" y="40" font-size="11" fill="currentColor">reflected</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Bending into water",
        problem: "Light in air strikes water ($n = 1.33$) at $50^{\\circ}$ from normal. Find the refracted angle.",
        steps: [
          { label: "Snell", text: "$\\sin\\theta_{2} = \\sin 50/1.33 = 0.766/1.33 \\approx 0.5759$." },
          { label: "Angle", text: "$\\theta_{2} = \\arcsin 0.5759 \\approx 35.2^{\\circ}$." },
          { label: "Check", text: "Bends toward normal as expected entering higher $n$." }
        ],
        result: "About $35^{\\circ}$ from normal."
      },
      {
        title: "Fiber critical angle",
        problem: "Fiber core $n = 1.50$ in cladding $n = 1.40$. Find $\\theta_{c}$.",
        steps: [
          { label: "Formula", text: "$\\sin\\theta_{c} = 1.40/1.50 \\approx 0.9333$." },
          { label: "Angle", text: "$\\theta_{c} = \\arcsin 0.9333 \\approx 68.96^{\\circ}$ from normal." },
          { label: "Grazing form", text: "About $21^{\\circ}$ from the wall, the acceptance language of fibers." }
        ],
        result: "About $69^{\\circ}$ from normal."
      }
    ],
    keyTakeaways: [
      "Reflection mirrors angles; refraction follows Snell's $n\\sin\\theta$.",
      "Beyond $\\theta_{c}$ light totally reflects and guides fibers.",
      "Dispersion spreads colors; refraction shallows pools."
    ],
    quiz: [
      {
        q: "Light enters glass from air. The ray bends:",
        options: ["Away from normal", "Toward the normal", "Backward", "Not at all"],
        answer: 1,
        explanation: "Higher $n$ slows the wave and Snell bends it toward the normal."
      },
      {
        q: "Total internal reflection requires:",
        options: ["High-to-low $n$ beyond $\\theta_{c}$", "Normal incidence", "Polarized light", "Low-to-high $n$ at any angle"],
        answer: 0,
        explanation: "Only high-to-low incidence past $\\sin\\theta_{c} = n_{2}/n_{1}$ forbids refraction."
      },
      {
        q: "A prism spreads white light because:",
        options: ["It polarizes", "Glass emits light", "It absorbs red", "$n$ depends on color"],
        answer: 3,
        explanation: "Blue bends more than red through both faces, fanning the spectrum."
      }
    ]
  }
]
