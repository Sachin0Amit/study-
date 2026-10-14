import type { SectionContent } from "../library";

// Young & Freedman University Physics 15th ed., Chapter 33: Nature and Propagation of Light.

export const youngCh33Content: SectionContent[] = [
  {
    sectionId: "young-ch33-s1",
    readingTime: 5,
    intro: "Light forced physics to accept duality: rays for lenses, waves for interference, photons for the photoelectric effect. Young opens optics by placing the ray model in its domain of validity. When apertures dwarf the wavelength, light travels in straight lines called rays.",
    objectives: [
      "State the three models of light and when each applies",
      "Define the ray approximation and its validity condition",
      "Explain rectilinear propagation with shadows and pinholes"
    ],
    concepts: [
      {
        term: "Ray model",
        kind: "definition",
        statement: "**Light travels in straight lines called rays** when $\\lambda$ is negligible beside apertures and objects.",
        detail: "Lenses, mirrors, and shadows all follow from straight-line geometry plus the laws of Sections 33.2-33.3."
      },
      {
        term: "Wave model",
        kind: "definition",
        statement: "When openings approach $\\lambda$, **diffraction and interference require the wave model** with Huygens wavelets.",
        detail: "Chapters 35-36 are the wave correction to ray optics."
      },
      {
        term: "Photon model",
        kind: "definition",
        statement: "Emission and absorption exchange energy in lumps **$E = hf$**, the photon model of Chapters 38-39.",
        detail: "Propagation between atoms still uses waves; birth and death of light use particles."
      },
      {
        term: "Rectilinear propagation",
        kind: "law",
        statement: "In uniform medium **rays are straight**, casting sharp umbra and penumbra shadows.",
        detail: "Pinhole cameras image by selecting one ray per object point."
      },
      {
        term: "Speed in matter preview",
        kind: "insight",
        statement: "In matter the wave speed drops to **$v = c/n$**, bending rays at interfaces as the next section quantifies.",
        detail: "Index $n$ near $1.5$ for glass slows light to $2.0 \\times 10^{8}$ m/s."
      }
    ],
    examples: [
      {
        title: "Pinhole sharpness",
        problem: "A $1.00$ mm pinhole sits $20.0$ cm from film imaging a $2.00$ m tree $10.0$ m away. Find image size.",
        steps: [
          { label: "Step 1: Magnification", text: "$m = d_{image}/d_{object} = 0.200/10.0 = 0.0200$." },
          { label: "Step 2: Size", text: "Image $= 0.0200 \\times 2.00 = 0.0400$ m $= 4.00$ cm, inverted." },
          { label: "Step 3: Validity", text: "Pinhole $10^{3}$ times $\\lambda$ so ray geometry holds; diffraction blur is sub-mm." }
        ],
        result: "Inverted $4.00$ cm image from straight-line rays."
      },
      {
        title: "Umbra length",
        problem: "The Sun (diameter $1.39 \\times 10^{9}$ m, distance $1.50 \\times 10^{11}$ m) shines past Earth (diameter $1.28 \\times 10^{7}$ m). Estimate umbra length.",
        steps: [
          { label: "Step 1: Similar triangles", text: "Umbra $L \\approx D_{earth} \\times d/(D_{sun} - D_{earth}) \\approx D_{earth} d/D_{sun}$." },
          { label: "Step 2: Numbers", text: "$L = (1.28 \\times 10^{7})(1.50 \\times 10^{11})/(1.39 \\times 10^{9}) = 1.38 \\times 10^{9}$ m." },
          { label: "Step 3: Moons?", text: "Moon at $3.84 \\times 10^{8}$ m fits inside, so total solar eclipses occur." }
        ],
        result: "Umbra about $1.38 \\times 10^{9}$ m long."
      }
    ],
    keyTakeaways: [
      "Use rays when apertures are much larger than wavelength.",
      "Waves explain diffraction and interference; photons explain emission and absorption.",
      "Straight-line travel gives shadows, pinholes, and all of geometric optics."
    ],
    quiz: [
      {
        q: "Ray optics is valid when:",
        options: ["Apertures are comparable to wavelength", "Apertures are much larger than wavelength", "Light is very dim", "Sources are coherent"],
        answer: 1,
        explanation: "Diffraction is negligible only when openings dwarf lambda."
      },
      {
        q: "Which phenomenon forces the photon model?",
        options: ["Reflection", "Photoelectric effect", "Refraction", "Shadows"],
        answer: 1,
        explanation: "Wave theory cannot explain cutoff frequency and instant emission; $E = hf$ does."
      },
      {
        q: "A pinhole image is inverted because:",
        options: ["The film is curved", "Rays travel straight through one opening", "Diffraction flips it", "Polarization rotates"],
        answer: 1,
        explanation: "Each object point maps through the hole along a straight line to the opposite side."
      }
    ]
  },
  {
    sectionId: "young-ch33-s2",
    readingTime: 6,
    intro: "A ray striking glass splits: part bounces with angle equal to incidence, part enters bent by Snell's law. Index of refraction $n = c/v$ measures the slowdown. Fermat's least-time principle unifies both laws in one variational statement.",
    objectives: [
      "State the law of reflection and Snell's law $n_{a}\\sin\\theta_{a} = n_{b}\\sin\\theta_{b}$",
      "Compute refracted angles and lateral shifts through slabs",
      "Apply Fermat's principle to justify the laws"
    ],
    concepts: [
      {
        term: "Law of reflection",
        kind: "law",
        statement: "**$\\theta_{r} = \\theta_{a}$**, incident and reflected rays symmetric about the normal in one plane.",
        detail: "Angles are measured from the normal, not the surface. Specular mirrors obey this exactly."
      },
      {
        term: "Snell's law",
        kind: "law",
        statement: "**$n_{a}\\sin\\theta_{a} = n_{b}\\sin\\theta_{b}$**; rays bend toward the normal entering higher $n$.",
        detail: "With $n_{air} \\approx 1.00$, $n_{water} = 1.33$, $n_{glass} \\approx 1.5$-$1.7$."
      },
      {
        term: "Index of refraction",
        kind: "definition",
        statement: "**$n = c/v$** is the factor by which light slows in matter, set by atomic polarization response.",
        detail: "Because response varies with $f$, $n$ disperses with color, previewing Section 33.4."
      },
      {
        term: "Reversibility",
        kind: "theorem",
        statement: "Every ray path is **reversible**: reversing travel retraces the same angles through the same media.",
        detail: "Snell's law is symmetric in $a$ and $b$, so backward rays satisfy it automatically."
      },
      {
        term: "Fermat's principle",
        kind: "insight",
        statement: "**Light takes the stationary-time path** (usually least time); reflection and refraction laws are its calculus consequences.",
        detail: "Different speeds each side force the Snell kink that minimizes total transit time."
      }
    ],
    figures: [
      {
        caption: "Reflection with $\\theta_{r} = \\theta_{a}$ and refraction bending by $n_{a}\\sin\\theta_{a} = n_{b}\\sin\\theta_{b}$",
        svg: '<svg viewBox="0 0 400 210" style="width:100%;height:auto" role="img" aria-label="Reflection with theta_r = theta_a and refraction bending by n_asintheta_a = n_bsintheta_b"><rect x="0" y="0" width="400" height="210" fill="none"/><line x1="20" y1="120" x2="380" y2="120" stroke="currentColor" stroke-width="1.5"/><line x1="200" y1="30" x2="200" y2="200" stroke="currentColor" stroke-width="1" stroke-dasharray="5,4"/><line x1="120" y1="40" x2="200" y2="120" stroke="currentColor" stroke-width="2.5"/><line x1="200" y1="120" x2="290" y2="45" stroke="currentColor" stroke-width="2.5"/><line x1="200" y1="120" x2="250" y2="200" stroke="currentColor" stroke-width="2.5"/><text x="150" y="80" font-size="13" fill="currentColor">incident</text><text x="290" y="60" font-size="13" fill="currentColor">reflected</text><text x="255" y="190" font-size="13" fill="currentColor">refracted</text><text x="205" y="80" font-size="12" fill="currentColor">normal</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Air to water entry",
        problem: "Sunlight hits water at $50.0^{\\circ}$ from the normal. Find the refracted angle with $n = 1.33$.",
        steps: [
          { label: "Step 1: Snell", text: "$\\sin\\theta_{w} = (n_{air}/n_{w})\\sin 50.0^{\\circ} = (1.00/1.33)(0.7660) = 0.5759$." },
          { label: "Step 2: Angle", text: "$\\theta_{w} = 35.2^{\\circ}$, bent toward the normal." },
          { label: "Step 3: Reverse check", text: "A $35.2^{\\circ}$ underwater ray exits at $50.0^{\\circ}$ by reversibility." }
        ],
        result: "Refracted $35.2^{\\circ}$ from the normal."
      },
      {
        title: "Prism deviation",
        problem: "A ray enters a $60^{\\circ}$ glass prism ($n = 1.52$) at $50.0^{\\circ}$ to the first normal. Estimate exit angle at the second face if internal incidence is $30.0^{\\circ}$.",
        steps: [
          { label: "Step 1: First refraction", text: "$\\sin\\theta_{1} = \\sin 50.0^{\\circ}/1.52 = 0.5039$, so $\\theta_{1} = 30.2^{\\circ}$." },
          { label: "Step 2: Second face", text: "$n\\sin 30.0^{\\circ} = 1.52 \\times 0.500 = 0.760$; exit $\\sin\\theta_{2} = 0.760$." },
          { label: "Step 3: Exit", text: "$\\theta_{2} = 49.5^{\\circ}$ from the second normal, deviated toward the base." }
        ],
        result: "Exits at $49.5^{\\circ}$; prism bends light toward its base."
      }
    ],
    keyTakeaways: [
      "Reflection is symmetric; refraction obeys $n_{a}\\sin\\theta_{a} = n_{b}\\sin\\theta_{b}$.",
      "Higher index bends rays toward the normal; paths are reversible.",
      "Fermat least time derives both laws from speed differences."
    ],
    quiz: [
      {
        q: "Light goes air to glass n = 1.5 at 30 degrees incidence. Refracted angle is:",
        options: ["$30$ degrees", "$19.5$ degrees", "$48.6$ degrees", "$90$ degrees"],
        answer: 1,
        explanation: "$\\sin\\theta = \\sin 30^{\\circ}/1.5 = 0.333$, so $\\theta = 19.5^{\\circ}$."
      },
      {
        q: "Angles in reflection and Snell's law are measured from:",
        options: ["The surface", "The normal", "The ray", "The horizon"],
        answer: 1,
        explanation: "Convention is from the normal on each side."
      },
      {
        q: "Fermat's principle states light takes the path of:",
        options: ["Longest distance", "Stationary (usually least) time", "Greatest intensity", "Zero refraction"],
        answer: 1,
        explanation: "Least-time path through differing speeds yields Snell and reflection laws."
      }
    ]
  },
  {
    sectionId: "young-ch33-s3",
    readingTime: 6,
    intro: "Going from slow to fast medium, the refracted ray bends away from the normal until it skims the surface and vanishes. Beyond that critical angle all light reflects internally with 100 percent efficiency. Fiber optics, binocular prisms, and sparkling diamonds all exploit total internal reflection.",
    objectives: [
      "Derive $\\sin\\theta_{crit} = n_{b}/n_{a}$ and state when it applies",
      "Compute critical angles for water-air and glass-air",
      "Explain fiber guiding with acceptance angle and cladding"
    ],
    concepts: [
      {
        term: "Critical angle",
        kind: "theorem",
        statement: "For $n_{a} > n_{b}$, **$\\sin\\theta_{crit} = n_{b}/n_{a}$**; beyond it no refracted ray exists.",
        detail: "At $\\theta_{crit}$ the refracted ray is at $90^{\\circ}$; past it Snell's law has no real solution."
      },
      {
        term: "Total internal reflection",
        kind: "law",
        statement: "Past the critical angle **all incident energy reflects**, with zero transmission (for ideal interfaces).",
        detail: "Unlike metal mirrors, TIR has no absorption loss, reaching effectively $100$ percent."
      },
      {
        term: "One-way condition",
        kind: "insight",
        statement: "TIR requires going **slow to fast**; fast-to-slow incidence always transmits partly.",
        detail: "Air-to-water never totally reflects; water-to-air does past $48.8^{\\circ}$."
      },
      {
        term: "Optical fiber",
        kind: "method",
        statement: "A **high-index core with low-index cladding traps rays by repeated TIR**, piping light around bends.",
        detail: "Acceptance cone follows from applying Snell at the entrance then TIR at the wall; graded index further refocuses pulses."
      },
      {
        term: "Evanescent wave",
        kind: "insight",
        statement: "Even in TIR a **microscopic evanescent field leaks** about a wavelength into the fast medium, carrying no net power.",
        detail: "Bringing a second prism within nanometers frustrates TIR and restores transmission, the basis of beam splitters."
      }
    ],
    figures: [
      {
        caption: "Fiber guiding: core ray totally reflects at walls past $\theta_{crit}$",
        svg: '<svg viewBox="0 0 400 170" style="width:100%;height:auto" role="img" aria-label="Fiber guiding: core ray totally reflects at walls past \theta_crit"><rect x="0" y="0" width="400" height="170" fill="none"/><rect x="40" y="50" width="320" height="70" fill="none" stroke="currentColor" stroke-width="2"/><line x1="40" y1="120" x2="140" y2="60" stroke="currentColor" stroke-width="2"/><line x1="140" y1="60" x2="240" y2="120" stroke="currentColor" stroke-width="2"/><line x1="240" y1="120" x2="340" y2="60" stroke="currentColor" stroke-width="2"/><text x="150" y="40" font-size="12" fill="currentColor">cladding n low</text><text x="170" y="95" font-size="12" fill="currentColor">core n high</text></svg>',
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Water to air critical angle",
        problem: "Find $\\theta_{crit}$ for water ($n = 1.33$) to air.",
        steps: [
          { label: "Step 1: Formula", text: "$\\sin\\theta_{crit} = 1.00/1.33 = 0.7519$." },
          { label: "Step 2: Angle", text: "$\\theta_{crit} = 48.8^{\\circ}$ from the normal." },
          { label: "Step 3: Meaning", text: "Underwater views of the sky compress into Snell's window of half-angle $48.8^{\\circ}$." }
        ],
        result: "$\\theta_{crit} = 48.8^{\\circ}$."
      },
      {
        title: "Diamond sparkle",
        problem: "Diamond $n = 2.42$. Find its air critical angle and explain brilliance.",
        steps: [
          { label: "Step 1: Angle", text: "$\\sin\\theta_{crit} = 1/2.42 = 0.4132$, so $\\theta_{crit} = 24.4^{\\circ}$." },
          { label: "Step 2: Trapping", text: "Most entering rays strike facets past $24.4^{\\circ}$ and totally reflect multiple times." },
          { label: "Step 3: Exit", text: "Cut facets aim the trapped light back out the top, giving fire and brilliance." }
        ],
        result: "Only $24.4^{\\circ}$ cone escapes per bounce; faceting recycles the rest upward."
      }
    ],
    keyTakeaways: [
      "TIR needs slow-to-fast incidence past $\\sin\\theta_{crit} = n_{b}/n_{a}$.",
      "TIR reflection is lossless, ideal for prisms and fibers.",
      "Fibers guide by core-cladding TIR; evanescent fields enable couplers."
    ],
    quiz: [
      {
        q: "Critical angle for glass n = 1.5 to air is about:",
        options: ["$90$ degrees", "$41.8$ degrees", "$30$ degrees", "$60$ degrees"],
        answer: 1,
        explanation: "$\\arcsin(1/1.5) = 41.8^{\\circ}$."
      },
      {
        q: "TIR can occur when light goes:",
        options: ["Air to water", "Glass to air past critical angle", "Air to glass at any angle", "Normal incidence always"],
        answer: 1,
        explanation: "Only slow-to-fast past critical angle eliminates the refracted ray."
      },
      {
        q: "Fiber cladding has lower index than the core in order to:",
        options: ["Absorb stray light", "Enable TIR at the core wall", "Increase dispersion", "Block all modes"],
        answer: 1,
        explanation: "The step down in n creates the critical angle that traps guided rays."
      }
    ]
  },
  {
    sectionId: "young-ch33-s4",
    readingTime: 5,
    intro: "Index varies with wavelength, so white light fans into color: blue bends most, red least. This dispersion paints rainbows and fringes lenses with chromatic aberration. Young quantifies it with $n(\\lambda)$ and the prism's angular spread.",
    objectives: [
      "Define dispersion $n(\\lambda)$ and normal versus anomalous ordering",
      "Explain prism color order and rainbow angles",
      "Define chromatic aberration and achromatic doublets"
    ],
    concepts: [
      {
        term: "Dispersion",
        kind: "definition",
        statement: "**$n$ decreases with $\\lambda$ in normal dispersion**: $n_{blue} > n_{red}$, so blue deviates most.",
        detail: "Crown glass spans roughly $1.53$ (red) to $1.55$ (blue); the spread separates colors."
      },
      {
        term: "Prism spectrum order",
        kind: "law",
        statement: "Through a prism **red deviates least, violet most**, fanning white into a spectrum toward the base.",
        detail: "Each color obeys its own Snell's law with its own $n$."
      },
      {
        term: "Rainbow",
        kind: "theorem",
        statement: "Sunlight refracts, internally reflects, and refracts in drops; **red appears at $42^{\\circ}$ and violet at $40^{\\circ}$** from the antisolar point.",
        detail: "The secondary bow reverses colors at $51^{\\circ}$-$54^{\\circ}$ after two internal reflections."
      },
      {
        term: "Chromatic aberration",
        kind: "insight",
        statement: "Simple lenses **focus blue closer than red**, blurring images with color fringes.",
        detail: "Focal length inherits $n(\\lambda)$, so one geometry cannot focus all colors."
      },
      {
        term: "Achromatic doublet",
        kind: "method",
        statement: "Cementing **crown and flint elements of opposite dispersion cancels first-order color error** while keeping net power.",
        detail: "Camera and telescope objectives are doublets or triplets for this reason."
      }
    ],
    examples: [
      {
        title: "Prism spread estimate",
        problem: "A thin prism deviates by $\\delta \\approx (n-1)A$ with $A = 10.0^{\\circ}$. For $n_{red} = 1.514$, $n_{blue} = 1.528$, find the color spread.",
        steps: [
          { label: "Step 1: Deviations", text: "$\\delta_{red} = 0.514 \\times 10.0^{\\circ} = 5.14^{\\circ}$; $\\delta_{blue} = 0.528 \\times 10.0^{\\circ} = 5.28^{\\circ}$." },
          { label: "Step 2: Spread", text: "Difference $0.14^{\\circ} = 8.4$ arcmin, easily visible." },
          { label: "Step 3: Meaning", text: "Thicker prisms or denser flint multiply the fan." }
        ],
        result: "Colors spread $0.14^{\\circ}$ across the spectrum."
      },
      {
        title: "Why sunsets are red",
        problem: "Connect dispersion and scattering to sunset color (scattering details in Section 33.6).",
        steps: [
          { label: "Step 1: Path", text: "Low sun traverses up to $30$ times more air than overhead sun." },
          { label: "Step 2: Removal", text: "Blue scatters out of the beam along the long path, leaving red-orange transmitted." },
          { label: "Step 3: Dispersion role", text: "Water-drop dispersion separately sorts the remaining light into rainbows when rain is present." }
        ],
        result: "Long-path scattering reddens; drop dispersion arcs the colors."
      }
    ],
    keyTakeaways: [
      "Normal dispersion: shorter wavelengths see higher index and bend more.",
      "Prisms and raindrops sort white into red-least, violet-most fans.",
      "Achromats pair glasses to refocus colors together."
    ],
    quiz: [
      {
        q: "Through a prism, which deviates most?",
        options: ["Red", "Yellow", "Violet", "All equally"],
        answer: 2,
        explanation: "Highest n at shortest wavelength gives largest deviation."
      },
      {
        q: "Primary rainbow red appears at about:",
        options: ["$20$ degrees", "$42$ degrees", "$60$ degrees", "$90$ degrees"],
        answer: 1,
        explanation: "Minimum-deviation geometry puts red near 42 degrees from antisolar point."
      },
      {
        q: "Chromatic aberration is corrected by:",
        options: ["Larger aperture", "Achromatic doublet of two glasses", "Longer tube", "Polarizer"],
        answer: 1,
        explanation: "Opposite dispersions cancel color focus shift while keeping power."
      }
    ]
  },
  {
    sectionId: "young-ch33-s5",
    readingTime: 7,
    intro: "Polarization is light's transverse fingerprint: the $E$ direction. Polaroid sheets, Brewster reflection, and blue-sky scattering each manufacture it from unpolarized sun. Malus's law and Brewster's angle turn polarization from vocabulary into measurement.",
    objectives: [
      "Apply Malus's law $I = I_{max}\\cos^{2}\\phi$ and the half-intensity rule",
      "State Brewster's angle $\\tan\\theta_{B} = n_{b}/n_{a}$ and its physical meaning",
      "Explain polarization by scattering and dichroism"
    ],
    concepts: [
      {
        term: "Malus's law",
        kind: "law",
        statement: "Through an analyzer at angle $\\phi$ to the polarization, **$I = I_{max}\\cos^{2}\\phi$**.",
        detail: "Only the $E$ component along the transmission axis passes; intensity squares the field projection."
      },
      {
        term: "First-polarizer half rule",
        kind: "theorem",
        statement: "Unpolarized intensity $I_{0}$ through one ideal polarizer becomes **$I = I_{0}/2$**, polarized along its axis.",
        detail: "Averaging $\\cos^{2}$ over random directions gives one half."
      },
      {
        term: "Brewster's angle",
        kind: "theorem",
        statement: "At **$\\tan\\theta_{B} = n_{b}/n_{a}$** reflected and refracted rays are $90^{\\circ}$ apart and reflected light is fully polarized.",
        detail: "For air-glass $\\theta_{B} = 56.3^{\\circ}$; reflected $E$ lies perpendicular to the plane of incidence."
      },
      {
        term: "Polarization by scattering",
        kind: "law",
        statement: "Light scattered at $90^{\\circ}$ is **fully polarized perpendicular to the scattering plane**.",
        detail: "Transverse dipoles cannot radiate along their axis, killing one polarization at right angles."
      },
      {
        term: "Dichroism and birefringence",
        kind: "method",
        statement: "Polaroid **absorbs one $E$ component** (dichroism); calcite **splits polarizations into two rays** (birefringence).",
        detail: "LCDs sandwich liquid crystals between crossed Polaroids to gate light pixel by pixel."
      }
    ],
    figures: [
      {
        caption: "Malus analyzer: transmitted $E$ is the projection $E_{0}\\cos\\phi$, so $I = I_{max}\\cos^{2}\\phi$",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Malus analyzer: transmitted E is the projection E_0cosphi, so I = I_maxcos^2phi"><rect x="0" y="0" width="400" height="200" fill="none"/><line x1="200" y1="20" x2="200" y2="180" stroke="currentColor" stroke-width="1" stroke-dasharray="5,4"/><line x1="200" y1="100" x2="200" y2="30" stroke="currentColor" stroke-width="2.5"/><line x1="200" y1="100" x2="270" y2="45" stroke="currentColor" stroke-width="2.5"/><path d="M 200 70 A 30 30 0 0 1 224 62" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="228" y="70" font-size="13" fill="currentColor">phi</text><text x="150" y="40" font-size="12" fill="currentColor">pass axis</text><text x="275" y="45" font-size="12" fill="currentColor">E0</text><rect x="60" y="60" width="8" height="80" fill="currentColor" opacity="0.3"/><text x="40" y="160" font-size="12" fill="currentColor">polarizer</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Crossed polarizers with a middle sheet",
        problem: "Unpolarized $I_{0}$ passes polarizer 1, then a middle sheet at $45^{\\circ}$, then a final sheet crossed with the first. Find transmitted intensity.",
        steps: [
          { label: "Step 1: First sheet", text: "$I_{1} = I_{0}/2$, polarized along axis 1." },
          { label: "Step 2: Middle at 45 degrees", text: "$I_{2} = I_{1}\\cos^{2}45^{\\circ} = (I_{0}/2)(1/2) = I_{0}/4$." },
          { label: "Step 3: Final crossed", text: "Final axis is $45^{\\circ}$ from middle: $I_{3} = I_{2}\\cos^{2}45^{\\circ} = I_{0}/8$." }
        ],
        result: "$I_{0}/8$ emerges; without the middle sheet zero would emerge."
      },
      {
        title: "Brewster for water",
        problem: "Find Brewster's angle for air to water ($n = 1.33$) and the refracted angle.",
        steps: [
          { label: "Step 1: Angle", text: "$\\theta_{B} = \\arctan(1.33/1.00) = 53.1^{\\circ}$ from the normal." },
          { label: "Step 2: Refraction", text: "Refracted ray is $90^{\\circ}$ from reflected: $\\theta_{t} = 90^{\\circ} - 53.1^{\\circ} = 36.9^{\\circ}$." },
          { label: "Step 3: Use", text: "Polaroid sunglassesavorites this geometry to kill horizontal glare off water." }
        ],
        result: "$\\theta_{B} = 53.1^{\\circ}$ with $36.9^{\\circ}$ transmission."
      }
    ],
    keyTakeaways: [
      "Analyzers transmit $\\cos^{2}\\phi$ of polarized light and half of unpolarized.",
      "Brewster reflection fully polarizes at $\\tan\\theta_{B} = n_{b}/n_{a}$.",
      "Scattering, dichroism, and birefringence are the three great polarizers."
    ],
    quiz: [
      {
        q: "Polarized $I_{max}$ through analyzer at 60 degrees gives:",
        options: ["$I_{max}$", "$I_{max}/2$", "$I_{max}/4$", "Zero"],
        answer: 2,
        explanation: "$\\cos^{2}60^{\\circ} = (1/2)^{2} = 1/4$."
      },
      {
        q: "Brewster angle air to glass n = 1.5 is:",
        options: ["$33.7$ degrees", "$56.3$ degrees", "$45$ degrees", "$90$ degrees"],
        answer: 1,
        explanation: "$\\arctan 1.5 = 56.3^{\\circ}$."
      },
      {
        q: "At Brewster incidence the reflected and refracted rays are:",
        options: ["Parallel", "90 degrees apart", "Both normal", "Coincident"],
        answer: 1,
        explanation: "Perpendicularity kills radiation of parallel polarization along the refracted direction."
      },
      {
        q: "Light scattered at 90 degrees from unpolarized sun is:",
        options: ["Unpolarized", "Fully polarized", "Circularly polarized always", "Infrared only"],
        answer: 1,
        explanation: "One dipole component cannot radiate transversely at right angles."
      }
    ]
  },
  {
    sectionId: "young-ch33-s6",
    readingTime: 5,
    intro: "Dust-free air still scatters: molecules act as tiny antennas reradiating short waves far more strongly. Rayleigh's $1/\\lambda^{4}$ law makes skies blue and sunsets red with no dust required. Young presents scattering as absorption followed by immediate reradiation.",
    objectives: [
      "State Rayleigh's $1/\\lambda^{4}$ scattering law",
      "Explain blue sky, white clouds, and red sunsets from one law",
      "Distinguish scattering from absorption and dispersion"
    ],
    concepts: [
      {
        term: "Rayleigh scattering law",
        kind: "law",
        statement: "For particles much smaller than $\\lambda$, **scattered intensity scales as $1/\\lambda^{4}$**.",
        detail: "Blue $450$ nm scatters $(650/450)^{4} \\approx 4.4$ times more than red $650$ nm."
      },
      {
        term: "Blue sky",
        kind: "theorem",
        statement: "Sunlight crossing air **loses blue sideways**, so direct sun yellows while the sky glows blue from all directions.",
        detail: "Looking away from the sun sees only scattered light, dominated by short waves."
      },
      {
        term: "Red sunset",
        kind: "theorem",
        statement: "At grazing incidence the beam's **blue is scattered away over a long path**, leaving transmitted red-orange.",
        detail: "Volcanoes and pollution lengthen the effect by adding larger Mie scatterers."
      },
      {
        term: "White clouds",
        kind: "insight",
        statement: "Drops larger than $\\lambda$ scatter **all colors equally (Mie regime)**, so clouds and milk look white.",
        detail: "Rayleigh's law fails once particles reach wavelength size; geometric scattering takes over."
      },
      {
        term: "Scattering versus absorption",
        kind: "definition",
        statement: "**Scattering redirects photons; absorption converts them** to internal energy. Blue sky is redirection, not missing energy.",
        detail: "Total power is conserved in pure scattering; color merely redistributes across directions."
      }
    ],
    examples: [
      {
        title: "Blue to red ratio",
        problem: "Compare Rayleigh scattering at $450$ nm versus $650$ nm.",
        steps: [
          { label: "Step 1: Ratio", text: "$I_{blue}/I_{red} = (650/450)^{4} = (1.444)^{4}$." },
          { label: "Step 2: Evaluate", text: "$(1.444)^{2} = 2.086$; squared again $= 4.35$." },
          { label: "Step 3: Meaning", text: "Per molecule blue scatters $4.4$ times more strongly than red." }
        ],
        result: "Blue scatters $4.4$ times red, compounding over kilometers of air."
      },
      {
        title: "Why clouds stay white",
        problem: "Cloud drops are $10$ microM. Why is Rayleigh inapplicable?",
        steps: [
          { label: "Step 1: Size parameter", text: "Drop is $10/0.5 = 20$ wavelengths across, far outside $a \\ll \\lambda$." },
          { label: "Step 2: Regime", text: "Mie and geometric scattering are nearly color blind." },
          { label: "Step 3: Color", text: "All visible bands scatter together, giving white or gray by thickness." }
        ],
        result: "Large drops scatter all colors; only molecules select blue."
      }
    ],
    keyTakeaways: [
      "Molecular scattering scales as $1/\\lambda^{4}$, favoring blue $4$-$5$ times over red.",
      "Blue sky is scattered light; red sunset is the depleted transmitted beam.",
      "Particles near or above wavelength size scatter white."
    ],
    quiz: [
      {
        q: "Rayleigh scattering intensity scales as:",
        options: ["$lambda^{4}$", "$1/lambda^{4}$", "$1/lambda^{2}$", "Independent of lambda"],
        answer: 1,
        explanation: "Short waves drive molecular dipoles far more efficiently."
      },
      {
        q: "The sky is blue because air molecules:",
        options: ["Absorb blue", "Scatter short waves sideways", "Refract blue downward", "Emit blue fluorescence"],
        answer: 1,
        explanation: "Sideways-scattered blue reaches eyes looking away from the sun."
      },
      {
        q: "Clouds are white because:",
        options: ["Drops are much larger than wavelength", "Drops absorb all light", "Rayleigh favors red there", "Ice polarizes fully"],
        answer: 0,
        explanation: "Large-particle scattering is color blind, mixing all bands to white."
      }
    ]
  },
  {
    sectionId: "young-ch33-s7",
    readingTime: 6,
    intro: "Every wave point spawns secondary wavelets whose envelope is the next wavefront: Huygens's principle. Reflection, refraction, and even the bending around corners follow from wavelet geometry. Young ends the chapter with this engine that will power interference and diffraction.",
    objectives: [
      "State Huygens's principle of secondary wavelets",
      "Derive reflection and Snell's law from wavelet timing",
      "Explain diffraction as the wavelets that ray optics ignores"
    ],
    concepts: [
      {
        term: "Huygens's principle",
        kind: "law",
        statement: "**Each wavefront point emits secondary wavelets at speed $v$; the new front is their tangent envelope**.",
        detail: "Fresnel added correct amplitudes and phases, making the principle quantitative."
      },
      {
        term: "Reflection from wavelets",
        kind: "theorem",
        statement: "Wavelet travel times along a mirror force **equal angles**: the envelope touches each wavelet after identical delay geometry.",
        detail: "Grazing versus steep incidence shift all path lengths together, preserving symmetry."
      },
      {
        term: "Refraction from wavelets",
        kind: "theorem",
        statement: "Different speeds each side tilt the envelope, giving **$\\sin\\theta_{a}/v_{a} = \\sin\\theta_{b}/v_{b}$**, i.e. Snell's law with $n = c/v$.",
        detail: "Slower medium compresses wavelet radii, swinging the tangent toward the normal."
      },
      {
        term: "Diffraction preview",
        kind: "insight",
        statement: "At edges the envelope **spills into geometric shadow** because wavelets have no wall to complete the tangent.",
        detail: "Ray optics is the $\\lambda \\to 0$ limit where spillover vanishes."
      },
      {
        term: "Fermat meets Huygens",
        kind: "insight",
        statement: "Least time and wavelet envelopes are **two faces of one wave equation**: stationary phase picks the ray, full phase gives the fringes.",
        detail: "Chapters 35-36 compute what happens when many wavelet paths interfere."
      }
    ],
    figures: [
      {
        caption: "Huygens wavelets: secondary semicircles at speed $v$ whose envelope is the advancing front",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Huygens wavelets: secondary semicircles at speed v whose envelope is the advancing front"><rect x="0" y="0" width="400" height="200" fill="none"/><line x1="40" y1="130" x2="360" y2="130" stroke="currentColor" stroke-width="2"/><path d="M 80 130 A 40 40 0 0 1 160 130" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M 160 130 A 40 40 0 0 1 240 130" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M 240 130 A 40 40 0 0 1 320 130" fill="none" stroke="currentColor" stroke-width="1.5"/><line x1="40" y1="70" x2="360" y2="70" stroke="currentColor" stroke-width="2" stroke-dasharray="6,4"/><text x="150" y="50" font-size="13" fill="currentColor">new front (envelope)</text><text x="150" y="160" font-size="13" fill="currentColor">old front with wavelet sources</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Snell from speeds",
        problem: "Wavelets hit water ($v = c/1.33$) at $50^{\\circ}$. Recover the refracted angle.",
        steps: [
          { label: "Step 1: Wavelet Snell", text: "$\\sin\\theta_{w} = (v_{w}/v_{air})\\sin 50^{\\circ} = (1/1.33)(0.7660) = 0.5759$." },
          { label: "Step 2: Angle", text: "$\\theta_{w} = 35.2^{\\circ}$, matching Section 33.2." },
          { label: "Step 3: Moral", text: "Same numbers, now from tangent geometry rather than Fermat." }
        ],
        result: "Wavelets give $35.2^{\\circ}$, identical to Snell."
      },
      {
        title: "Corner bending estimate",
        problem: "Sound $\\lambda = 1$ m passes a $1$ m door; light $\\lambda = 500$ nm passes the same door. Compare spillover.",
        steps: [
          { label: "Step 1: Ratio", text: "Diffraction angle scales as $\\lambda/a$: $1$ rad for sound versus $5 \\times 10^{-7}$ rad for light." },
          { label: "Step 2: Hearing vs seeing", text: "Sound floods the next room; light casts a sharp-edged beam." },
          { label: "Step 3: Lesson", text: "Huygens always spills; only the angular width decides visibility." }
        ],
        result: "Sound diffracts grossly, light negligibly, same principle."
      }
    ],
    keyTakeaways: [
      "Wavelets plus envelope construct every future front.",
      "Reflection and Snell follow from wavelet travel-time geometry.",
      "Edges diffract because the envelope has nothing to complete it in shadow."
    ],
    quiz: [
      {
        q: "Huygens's principle states:",
        options: ["Rays take least time", "Each front point emits wavelets whose envelope is the next front", "Light is photons", "Index equals density"],
        answer: 1,
        explanation: "Envelope-of-wavelets construction is the principle itself."
      },
      {
        q: "Snell from wavelets uses the fact that:",
        options: ["Frequency changes", "Wavelet radii scale with local speed v", "Amplitude doubles", "Polarization rotates"],
        answer: 1,
        explanation: "Smaller v means smaller wavelet spheres, tilting the tangent."
      },
      {
        q: "Diffraction into shadow occurs because:",
        options: ["Rays attract edges", "Wavelets near the edge lack partners to complete the plane tangent", "Index jumps", "Photons collide"],
        answer: 1,
        explanation: "Truncated wavelet array cannot cancel sideways contributions fully."
      }
    ]
  }
];
