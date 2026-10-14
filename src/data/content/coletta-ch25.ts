import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 25: The Eye and Optical Instruments (Sections 25.1 – 25.5)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh25Content: SectionContent[] = [
  {
    sectionId: "coletta-ch25-s1",
    readingTime: 6,
    intro: "The eye is a $2.5$ cm converging system that focuses real inverted images on the retina and lets the brain flip them. Coletta explains accommodation, the near and far points, and the myopia-hyperopia corrections. Every instrument in this chapter mates to this detector.",
    objectives: [
      "Describe cornea-lens-retina imaging with accommodation of eye power",
      "Distinguish myopia from hyperopia and prescribe diverging versus converging lenses",
      "Compute corrective power from $P = 1/f$ in diopters"
    ],
    concepts: [
      {
        term: "Eye optics",
        kind: "definition",
        statement: "Cornea plus lens project a **real inverted** image on the **retina**; ciliary muscles **accommodate** by fattening the lens for near work.",
        detail: "Most power ($\u007e43$ diopters) comes from the cornea, with the lens adding $15$–$25$ adjustable diopters."
      },
      {
        term: "Near and far points",
        kind: "notation",
        statement: "The **far point** is the farthest sharp distance (infinity when normal) and the **near point** $N$ the closest ($\u007e25$ cm young adult, receding with age).",
        detail: "Presbyopia stiffens the lens so $N$ drifts past arm's length, requiring readers."
      },
      {
        term: "Myopia",
        kind: "definition",
        statement: "**Myopia** (nearsight) focuses distant scenes before the retina from excess power or length; **diverging** glasses push the far point back to infinity.",
        detail: "A $-2.0$ diopter lens ($f = -0.50$ m) corrects a far point stuck at $0.50$ m."
      },
      {
        term: "Hyperopia",
        kind: "definition",
        statement: "**Hyperopia** (farsight) focuses behind the retina from weak power or shortness; **converging** lenses add the missing power for near work.",
        detail: "A $+3.0$ diopter reader supplies what the stiff lens no longer musters."
      },
      {
        term: "Diopter power",
        kind: "notation",
        statement: "Lens power $P = 1/f$ in **diopters** (m$^{-1}$) adds directly: stacked or contact-plus-eye powers sum.",
        detail: "A $+2.0$ diopter add on a $60$-diopter eye is a $3$ percent boost, enough to pull $N$ back in." }
    ],
    figures: [
      {
        caption: "Myopic eye focuses before the retina; a diverging lens corrects it to the retina",
        svg: '<svg role="img" aria-label="Myopic eye focuses before the retina; a diverging lens corrects it to the retina" viewBox="0 0 400 140" width="100%" height="140"><ellipse cx="200" cy="70" rx="60" ry="40" fill="none" stroke="currentColor" stroke-width="2"/><line x1="150" y1="70" x2="140" y2="70" stroke="currentColor" stroke-width="2"/><path d="M60,50 L155,65 M60,90 L155,75" stroke="currentColor" stroke-width="1.6" fill="none"/><path d="M155,65 L195,70 M155,75 L195,70" stroke="currentColor" stroke-width="1.6" fill="none"/><line x1="230" y1="35" x2="230" y2="105" stroke="currentColor" stroke-width="2"/><text x="230" y="122" text-anchor="middle" font-size="11" fill="currentColor">retina (focus short)</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Myopia correction",
        problem: "A myopic far point is $0.80$ m. What spectacle power images infinity there?",
        steps: [
          { label: "Needed image", text: "Glasses must put infinity at $d_{i} = -0.80$ m (virtual, same side)." },
          { label: "Power", text: "$P = 1/d_{o} + 1/d_{i} = 0 - 1/0.80 = -1.25$ diopters." },
          { label: "Lens", text: "A $-1.25$ diopter diverging lens corrects distance vision." }
        ],
        result: "$-1.25$ diopters."
      },
      {
        title: "Reading add",
        problem: "Presbyopia pushes the near point to $1.0$ m. What add images $25$ cm onto $1.0$ m?",
        steps: [
          { label: "Object/image", text: "$d_{o} = 0.25$ m, $d_{i} = -1.0$ m (virtual near-point image)." },
          { label: "Power", text: "$P = 1/0.25 - 1/1.0 = 4.0 - 1.0 = 3.0$ diopters." },
          { label: "Use", text: "Standard $+3.0$ readers restore the $25$ cm working distance." }
        ],
        result: "$+3.0$ diopters."
      }
    ],
    keyTakeaways: [
      "The eye accommodates lens power to hold real images on the retina.",
      "Myopia needs diverging and hyperopia needs converging correction.",
      "Diopter powers $P = 1/f$ add directly."
    ],
    quiz: [
      {
        q: "Myopia is corrected with:",
        options: ["Diverging lenses", "Mirrors", "Prisms", "Converging lenses"],
        answer: 0,
        explanation: "Negative power diverges parallel rays as if from the stuck far point."
      },
      {
        q: "Accommodation for near vision:",
        options: ["Moves the retina", "Shrinks the pupil only", "Flattens the lens", "Fattens the lens adding power"],
        answer: 3,
        explanation: "Ciliary contraction rounds the lens, shortening $f$ to hold focus."
      },
      {
        q: "A $+2.0$ diopter lens has focal length:",
        options: ["$-0.50$ m", "$2.0$ m", "$0.50$ m", "$0.20$ m"],
        answer: 2,
        explanation: "$f = 1/P = 1/2.0 = 0.50$ m converging."
      }
    ]
  },
  {
    sectionId: "coletta-ch25-s2",
    readingTime: 5,
    intro: "A magnifier lets the eye approach closer than the near point by handing it parallel or easy rays. Coletta derives angular magnification $M = N/f$ for the relaxed eye and $M = 1 + N/f$ with the image at $N$. Short focus means big boost.",
    objectives: [
      "Explain angular size gain versus the naked-eye near point",
      "Apply $M = N/f$ (infinity) and $M = 1 + N/f$ (image at $N$)",
      "Choose focal length for a target magnification"
    ],
    concepts: [
      {
        term: "Angular magnification",
        kind: "definition",
        statement: "**Angular magnification** $M = \\theta/\\theta_{0}$ compares aided angle to the best naked-eye angle $\\theta_{0} \\approx h/N$ at near point $N = 25$ cm.",
        detail: "Doubling the angular size doubles retinal image size, the only gain that matters."
      },
      {
        term: "Relaxed-eye magnifier",
        kind: "theorem",
        statement: "Object at $f$ sends parallel rays (image at infinity) with $M = N/f$.",
        detail: "A $5.0$ cm lens gives $M = 25/5.0 = 5\\times$ with the eye relaxed."
      },
      {
        term: "Image-at-near-point",
        kind: "theorem",
        statement: "Pushing the image to $N$ strains accommodation but gains one more: $M = 1 + N/f$.",
        detail: "The same $5.0$ cm lens reaches $6\\times$ with the image at $25$ cm."
      },
      {
        term: "Short-focus rule",
        kind: "insight",
        statement: "Magnifiers want **short** $f$ and correspondingly strong diopters: $10\\times$ needs about $f = 2.5$ cm ($40$ diopters).",
        detail: "Jeweler's loupes stack short aspheres to hit $20\\times$ without crippling aberration."
      },
      {
        term: "Working distance",
        kind: "method",
        statement: "Higher $M$ forces the object to $f$, so $20\\times$ loupes work millimeters away with tweezers under them.",
        detail: "Stand magnifiers trade peak $M$ for illuminated working room." }
    ],
    examples: [
      {
        title: "Hand lens power",
        problem: "A $4.0$ cm magnifier is used with image at infinity. Find $M$ and required object placement.",
        steps: [
          { label: "Magnification", text: "$M = N/f = 25/4.0 = 6.25\\times$." },
          { label: "Placement", text: "Object exactly at $f$, $4.0$ cm before the lens." },
          { label: "At near point", text: "Moving slightly inside raises $M$ to $1 + 6.25 = 7.25\\times$." }
        ],
        result: "$6.25\\times$ relaxed, $7.25\\times$ at near point."
      },
      {
        title: "Design for 10x",
        problem: "What $f$ gives $M = 10\\times$ relaxed?",
        steps: [
          { label: "Solve", text: "$f = N/M = 25/10 = 2.5$ cm." },
          { label: "Power", text: "$P = 1/0.025 = 40$ diopters." },
          { label: "Note", text: "A thick highly curved lens, as expected for $10\\times$." }
        ],
        result: "$f = 2.5$ cm."
      }
    ],
    keyTakeaways: [
      "Magnifiers beat the near-point limit by angular gain.",
      "$M = N/f$ relaxed and $1 + N/f$ at near point.",
      "High power demands short focus and close work."
    ],
    quiz: [
      {
        q: "A $10$ cm magnifier relaxed gives $M$ of:",
        options: ["$2.5\\times$", "$3.5\\times$", "$10\\times$", "$26\\times$"],
        answer: 0,
        explanation: "$M = 25/10 = 2.5\\times$."
      },
      {
        q: "Image-at-near-point versus infinity differs by:",
        options: ["$1\\times$", "Factor $2$", "Sign flip", "Zero"],
        answer: 0,
        explanation: "$(1 + N/f) - N/f = 1$ exactly."
      },
      {
        q: "Raising magnifier power requires:",
        options: ["Larger $N$", "Dimmer light", "Longer $f$", "Shorter $f$"],
        answer: 3,
        explanation: "$M = N/f$ grows as $f$ shrinks."
      }
    ]
  },
  {
    sectionId: "coletta-ch25-s3",
    readingTime: 6,
    intro: "The compound microscope stages two magnifications: an objective makes a big real image and the eyepiece magnifies its angle. Coletta derives $M = -(L/f_{o})(N/f_{e})$ with tube length $L$. Tiny things become visible by multiplication.",
    objectives: [
      "Trace objective real image plus eyepiece angular magnification",
      "Apply $M = -(L/f_{o})(N/f_{e})$ to standard tubes",
      "Explain why illumination and NA matter as much as $M$"
    ],
    concepts: [
      {
        term: "Objective stage",
        kind: "definition",
        statement: "The short-$f$ **objective** images the specimen at lateral $m_{o} = -L/f_{o}$ with tube length $L$ ($\u007e16$ cm).",
        detail: "A $4.0$ mm objective gives $m_{o} = -160/4.0 = -40\\times$ of inverted real size."
      },
      {
        term: "Eyepiece stage",
        kind: "definition",
        statement: "The **eyepiece** works as a magnifier on that real image with $M_{e} = N/f_{e}$.",
        detail: "A $25$ mm eyepiece contributes $10\\times$ of angular gain."
      },
      {
        term: "Total magnification",
        kind: "theorem",
        statement: "Overall $M = m_{o}M_{e} = -(L/f_{o})(N/f_{e})$: lateral times angular, negative for inversion.",
        detail: "$40\\times$ objective with $10\\times$ eyepiece gives $-400\\times$ total."
      },
      {
        term: "Numerical aperture",
        kind: "notation",
        statement: "**Numerical aperture** $NA = n\\sin\\alpha$ sets resolution $d \\approx 0.61\\lambda/NA$, limiting useful $M$ to about $1000\\,NA$.",
        detail: "Oil immersion ($n = 1.5$) lifts $NA$ past $1.3$ and resolves $200$ nm."
      },
      {
        term: "Empty magnification",
        kind: "insight",
        statement: "**Empty** magnification beyond $1000\\,NA$ enlarges blur without detail: resolution, not $M$, is the microscope's currency.",
        detail: "A $2000\\times$ image from a $0.65$ NA objective shows bigger but not sharper cells." }
    ],
    examples: [
      {
        title: "Standard microscope",
        problem: "A microscope has $f_{o} = 8.0$ mm, $f_{e} = 20$ mm, $L = 160$ mm. Find $M$.",
        steps: [
          { label: "Objective", text: "$m_{o} = -160/8.0 = -20\\times$." },
          { label: "Eyepiece", text: "$M_{e} = 250/20 = 12.5\\times$." },
          { label: "Total", text: "$M = -20 \\times 12.5 = -250\\times$." }
        ],
        result: "$-250\\times$ inverted."
      },
      {
        title: "Resolution limit",
        problem: "An $NA = 1.25$ oil objective uses $550$ nm light. Find the smallest resolved spacing.",
        steps: [
          { label: "Formula", text: "$d = 0.61\\lambda/NA$." },
          { label: "Insert", text: "$d = 0.61 \\times 550/1.25 = 335.5/1.25 \\approx 268$ nm." },
          { label: "Meaning", text: "Bacteria resolve; viruses need electrons." }
        ],
        result: "About $0.27$ micrometers."
      }
    ],
    keyTakeaways: [
      "Objectives magnify laterally and eyepieces angularly in product.",
      "$M = -(L/f_{o})(N/f_{e})$ prices standard tubes.",
      "NA caps useful magnification near $1000\\,NA$."
    ],
    quiz: [
      {
        q: "$20\\times$ objective with $15\\times$ eyepiece gives:",
        options: ["$-35\\times$", "$35\\times$", "$300\\times$", "$-300\\times$"],
        answer: 3,
        explanation: "Multiply lateral by angular with inversion: $-20 \\times 15 = -300\\times$."
      },
      {
        q: "Oil immersion helps because it:",
        options: ["Raises $M$ directly", "Raises $NA$ and resolution", "Lengthens the tube", "Colors the sample"],
        answer: 1,
        explanation: "Higher $n$ widens the acceptance cone, shrinking $0.61\\lambda/NA$."
      },
      {
        q: "Empty magnification means:",
        options: ["Bigger blur without detail", "Zero power", "Perfect resolution", "No eyepiece"],
        answer: 0,
        explanation: "Past $1000\\,NA$ the image grows but diffraction blur grows with it."
      }
    ]
  },
  {
    sectionId: "coletta-ch25-s4",
    readingTime: 5,
    intro: "Telescopes gather light and stretch angles with long objectives and short eyepieces. Coletta derives $M = -f_{o}/f_{e}$, compares refractors with reflectors, and prices light grasp by aperture area. Astronomy is photon economics.",
    objectives: [
      "Apply telescope $M = -f_{o}/f_{e}$ to refractor combinations",
      "Compare refracting versus reflecting designs and their limits",
      "Explain light-gathering scaling with $D^{2}$"
    ],
    concepts: [
      {
        term: "Telescope magnification",
        kind: "theorem",
        statement: "With objective $f_{o}$ and eyepiece $f_{e}$, $M = -f_{o}/f_{e}$: long focus collects angle, short eyepiece spends it.",
        detail: "A $900$ mm objective with $15$ mm eyepiece gives $-60\\times$."
      },
      {
        term: "Refractor",
        kind: "definition",
        statement: "**Refractors** use a long converging objective; chromatic aberration and lens sag cap them near $1$ m aperture (Yerkes).",
        detail: "Different colors focus at different depths because $n$ varies, fringing bright stars."
      },
      {
        term: "Reflector",
        kind: "definition",
        statement: "**Reflectors** use a concave mirror objective, dodging chromatic error and supporting huge apertures from behind.",
        detail: "Newtonian, Cassegrain, and Keck segmented designs all fold long $f_{o}$ into compact tubes."
      },
      {
        term: "Light grasp",
        kind: "insight",
        statement: "Brightness scales with area $\\pi D^{2}/4$: doubling diameter quadruples photons and reaches $1.5$ magnitudes deeper.",
        detail: "A $200$ mm scope gathers $100\\times$ the pupil's $20$ mm, a $5$-magnitude gain."
      },
      {
        term: "Seeing limit",
        kind: "insight",
        statement: "Atmospheric **seeing** ($\u007e1$ arcsec) usually beats diffraction for ground scopes, which is why Hubble and adaptive optics pay off.",
        detail: "Magnification past the seeing blur only magnifies turbulence." }
    ],
    examples: [
      {
        title: "Backyard refractor",
        problem: "A $700$ mm objective with $10$ mm eyepiece observes the Moon. Find $M$ and the Moon's apparent size.",
        steps: [
          { label: "Magnification", text: "$M = -700/10 = -70\\times$." },
          { label: "Apparent size", text: "The $0.5^{\\circ}$ Moon spans $70 \\times 0.5 = 35^{\\circ}$ of apparent angle." },
          { label: "Note", text: "Eye relief and seeing usually cap useful $M$ near $50\\times$ per inch of aperture." }
        ],
        result: "$-70\\times$."
      },
      {
        title: "Aperture gain",
        problem: "Compare a $150$ mm scope to the $7.0$ mm dark-adapted pupil.",
        steps: [
          { label: "Ratio", text: "Area ratio $(150/7.0)^{2} = (21.43)^{2} \\approx 459$." },
          { label: "Magnitudes", text: "$2.5\\log_{10}459 \\approx 2.5 \\times 2.662 = 6.65$ magnitudes deeper." },
          { label: "Meaning", text: "Naked-eye $6$th magnitude extends past $12$th." }
        ],
        result: "About $460\\times$ the light, $6.7$ magnitudes."
      }
    ],
    keyTakeaways: [
      "Telescopes magnify by $-f_{o}/f_{e}$ with long objectives.",
      "Reflectors scale past refractors by avoiding lenses.",
      "Aperture area, not $M$, buys faint objects."
    ],
    quiz: [
      {
        q: "$1000$ mm objective with $25$ mm eyepiece gives:",
        options: ["$+40\\times$", "$-400\\times$", "$-4\\times$", "$-40\\times$"],
        answer: 3,
        explanation: "$M = -1000/25 = -40\\times$."
      },
      {
        q: "Doubling telescope diameter at fixed $f$-ratio:",
        options: ["Halves resolution", "Halves light", "Quadruples light", "Leaves light unchanged"],
        answer: 2,
        explanation: "Area grows as $D^{2}$."
      },
      {
        q: "Large modern research scopes are reflectors because mirrors:",
        options: ["Magnify more", "Avoid chromatic error and support big sizes", "Need no eyepiece", "Work only in radio"],
        answer: 1,
        explanation: "Reflection is achromatic and mirrors support from behind, scaling to $10$ m."
      }
    ]
  },
  {
    sectionId: "coletta-ch25-s5",
    readingTime: 5,
    intro: "No instrument outresolves diffraction: apertures smear points into Airy disks and aberrations warp the rest. Coletta closes with the Rayleigh limit $\\theta = 1.22\\lambda/D$ and the lens defects opticians fight. Acuity is wave physics plus biology.",
    objectives: [
      "Apply Rayleigh $\\theta_{min} = 1.22\\lambda/D$ to eyes and instruments",
      "Name spherical, chromatic, and astigmatic aberrations with fixes",
      "Connect retinal sampling to $20/20$ acuity"
    ],
    concepts: [
      {
        term: "Rayleigh criterion",
        kind: "theorem",
        statement: "Two points resolve when separated by $\\theta_{min} = 1.22\\lambda/D$: aperture $D$ in wavelengths sets the angle.",
        detail: "A $3.0$ mm pupil at $550$ nm gives $2.2 \\times 10^{-4}$ rad, about one arcminute."
      },
      {
        term: "Airy disk",
        kind: "definition",
        statement: "The **Airy disk** is diffraction's central bright spot ($84$ percent of light) ringed by faint rings, the true image of every point.",
        detail: "Stars are Airy disks, not points, in every telescope eyepiece."
      },
      {
        term: "Spherical aberration",
        kind: "definition",
        statement: "**Spherical** surfaces overfocus marginal rays; aspheric figuring or compound correction restores the point.",
        detail: "Hubble's famous error was spherical aberration fixed by corrective optics."
      },
      {
        term: "Chromatic aberration",
        kind: "definition",
        statement: "**Chromatic** spread focuses blue short of red; achromatic doublets of crown plus flint glass cancel it at two colors.",
        detail: "Cheap singlets fringe high-contrast edges in blue-yellow."
      },
      {
        term: "Retinal acuity",
        kind: "insight",
        statement: "$20/20$ vision resolves $1$ arcminute, matching both the pupil's Rayleigh limit and the foveal cone spacing ($\u007e2.5$ micrometers).",
        detail: "Eye and optics co-evolved to the same limit: bigger pupils would outresolve the cone mosaic." }
    ],
    figures: [
      {
        caption: "Rayleigh limit $\\theta = 1.22\\lambda/D$: overlapping Airy disks blur into one",
        svg: '<svg role="img" aria-label="Rayleigh limit theta = 1.22lambda/D: overlapping Airy disks blur into one" viewBox="0 0 400 130" width="100%" height="130"><ellipse cx="170" cy="65" rx="45" ry="30" fill="currentColor" opacity="0.25"/><ellipse cx="230" cy="65" rx="45" ry="30" fill="currentColor" opacity="0.25"/><ellipse cx="170" cy="65" rx="14" ry="12" fill="currentColor" opacity="0.8"/><ellipse cx="230" cy="65" rx="14" ry="12" fill="currentColor" opacity="0.8"/><line x1="170" y1="65" x2="230" y2="65" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 3"/><text x="200" y="115" text-anchor="middle" font-size="12" fill="currentColor">two Airy disks at resolution limit</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Eye resolution",
        problem: "Find the Rayleigh angle for a $2.5$ mm pupil at $550$ nm and the retinal separation with $f_{eye} = 17$ mm.",
        steps: [
          { label: "Angle", text: "$\\theta = 1.22 \\times 550 \\times 10^{-9}/2.5 \\times 10^{-3} = 6.71 \\times 10^{-4}/2.5 \\times 10^{-3} \\approx 2.68 \\times 10^{-4}$ rad." },
          { label: "Retinal distance", text: "$s = f\\theta = 17 \\times 10^{-3} \\times 2.68 \\times 10^{-4} \\approx 4.6 \\times 10^{-6}$ m." },
          { label: "Compare", text: "About $4.6$ micrometers, near foveal cone spacing." }
        ],
        result: "About $2.7 \\times 10^{-4}$ rad."
      },
      {
        title: "Telescope limit",
        problem: "A $130$ mm reflector at $550$ nm: find its diffraction limit in arcseconds.",
        steps: [
          { label: "Radians", text: "$\\theta = 1.22 \\times 550 \\times 10^{-9}/0.130 \\approx 5.16 \\times 10^{-6}$ rad." },
          { label: "Arcseconds", text: "Multiply by $206265$ to get $1.06$ arcsec." },
          { label: "Seeing note", text: "Atmosphere usually blurs worse, so adaptive optics or space is needed to reach it." }
        ],
        result: "About $1.1$ arcsec."
      }
    ],
    keyTakeaways: [
      "Diffraction caps every aperture at $1.22\\lambda/D$.",
      "Spherical and chromatic defects have figured and doublet fixes.",
      "Retinal sampling matches the pupil's optical limit at $20/20$."
    ],
    quiz: [
      {
        q: "Aperture diameter doubles. Diffraction limit:",
        options: ["Halves", "Quadruples", "Unchanged", "Doubles"],
        answer: 0,
        explanation: "$\\theta_{min} \\propto 1/D$."
      },
      {
        q: "Achromatic doublets fix:",
        options: ["Astigmatism only", "Diffraction", "Spherical error", "Chromatic spread"],
        answer: 3,
        explanation: "Paired glasses cancel focal shift at two wavelengths."
      },
      {
        q: "$20/20$ acuity corresponds to about:",
        options: ["$1$ radian", "$1$ degree", "$1$ arcminute", "$1$ arcsecond"],
        answer: 2,
        explanation: "One arcminute matches pupil diffraction and cone grain together."
      }
    ]
  }
]
