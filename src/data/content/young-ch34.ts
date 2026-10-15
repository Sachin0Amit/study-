import type { SectionContent } from "../library";

// Young & Freedman University Physics 15th ed., Chapter 34: Geometric Optics.

export const youngCh34Content: SectionContent[] = [
  {
    sectionId: "young-ch34-s1",
    readingTime: 6,
    intro: "Plane mirrors and flat refracting surfaces form images by straight-line ray geometry plus sign rules. A mirror flips front to back; a water surface lifts the bottom toward the eye. Young builds the full sign convention here that every later image calculation inherits.",
    objectives: [
      "Locate plane-mirror images by symmetric ray construction",
      "Compute apparent depth $y^{\\prime} = y\\,n_{a}/n_{b}$ for a flat refracting surface",
      "Apply Young's sign conventions for object and image distances"
    ],
    concepts: [
      {
        term: "Plane mirror image",
        kind: "theorem",
        statement: "A plane mirror forms a **virtual image as far behind as the object is in front**, same size, erect, laterally reversed.",
        detail: "Diverging reflected rays trace back to one intersection; no light actually passes behind."
      },
      {
        term: "Real versus virtual",
        kind: "definition",
        statement: "**Real images pass light through the image point** and expose film; **virtual images only trace back** and need an eye or instrument.",
        detail: "Mirrors and lenses both produce each type; energy flow decides."
      },
      {
        term: "Flat refraction image",
        kind: "theorem",
        statement: "Viewing from medium $b$ an object at depth $|y|$ in medium $a$ appears at **$y^{\\prime} = y\\,n_{b}/n_{a}$** (magnitudes), closer by the index ratio.",
        detail: "Fish at $1.00$ m in water ($1.33$) appear at $0.752$ m to air viewers for near-normal rays."
      },
      {
        term: "Sign convention",
        kind: "notation",
        statement: "Light travels left to right; **distances in front (incoming side) are positive object distances $s$**, behind-mirror or beyond-surface positions carry the signs Young tabulates.",
        detail: "Consistent signs let one formula serve mirrors, surfaces, and lenses."
      },
      {
        term: "Lateral reversal",
        kind: "insight",
        statement: "Mirrors reverse **front-back, not left-right**; handedness flips because depth inverts.",
        detail: "Text looks mirrored because the page normal, not the page vertical, is the flipped axis."
      }
    ],
    figures: [
      {
        caption: "Plane mirror: symmetric rays reflect with $\\theta_{r} = \\theta_{a}$ and trace back to virtual image $I$",
        svg: '<svg viewBox="0 0 400 210" style="width:100%;height:auto" role="img" aria-label="Plane mirror: symmetric rays reflect with theta_r = theta_a and trace back to virtual image I"><rect x="0" y="0" width="400" height="210" fill="none"/><line x1="200" y1="20" x2="200" y2="190" stroke="currentColor" stroke-width="3"/><line x1="100" y1="100" x2="200" y2="80" stroke="currentColor" stroke-width="2"/><line x1="200" y1="80" x2="320" y2="55" stroke="currentColor" stroke-width="2"/><line x1="100" y1="100" x2="200" y2="120" stroke="currentColor" stroke-width="2"/><line x1="200" y1="120" x2="320" y2="145" stroke="currentColor" stroke-width="2"/><line x1="200" y1="80" x2="300" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="5,4"/><line x1="200" y1="120" x2="300" y2="100" stroke="currentColor" stroke-width="1" stroke-dasharray="5,4"/><circle cx="100" cy="100" r="5" fill="currentColor"/><circle cx="300" cy="100" r="5" fill="none" stroke="currentColor" stroke-width="2"/><text x="85" y="125" font-size="13" fill="currentColor">O</text><text x="295" y="125" font-size="13" fill="currentColor">I</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Spear the fish",
        problem: "A fish is $1.20$ m below calm water ($n = 1.33$) viewed nearly straight down. Where does it appear?",
        steps: [
          { label: "Step 1: Formula", text: "Apparent depth magnitude $|y^{\\prime}| = |y|\\,n_{air}/n_{water} = 1.20/1.33$." },
          { label: "Step 2: Number", text: "$0.902$ m below the surface, $0.30$ m shallower than truth." },
          { label: "Step 3: Aim", text: "Spear below the image: the real fish is deeper." }
        ],
        result: "Appears $0.902$ m deep; aim $0.30$ m lower."
      },
      {
        title: "Two mirrors",
        problem: "A person $2.00$ m from a plane mirror walks $0.50$ m closer. How far does the image move?",
        steps: [
          { label: "Step 1: Symmetry", text: "Image distance equals object distance behind the mirror." },
          { label: "Step 2: Shift", text: "Object $0.50$ m nearer means image $0.50$ m nearer the mirror from behind." },
          { label: "Step 3: Separation", text: "Object-image gap shrinks $1.00$ m, twice the walk." }
        ],
        result: "Image advances $0.50$ m; gap closes $1.00$ m."
      }
    ],
    keyTakeaways: [
      "Plane mirrors give symmetric, erect, virtual, unit-magnification images.",
      "Flat refraction shallows depth by $n_{viewer}/n_{object}$ for paraxial rays.",
      "Real images transport energy; virtual images only trace back."
    ],
    quiz: [
      {
        q: "Fish 2.00 m deep in water n = 1.33 appears at:",
        options: ["$2.66$ m", "$1.50$ m", "$2.00$ m", "$0.67$ m"],
        answer: 1,
        explanation: "$2.00/1.33 = 1.50$ m apparent depth."
      },
      {
        q: "A plane mirror image is:",
        options: ["Real, inverted", "Virtual, erect, same size", "Real, magnified", "Virtual, inverted"],
        answer: 1,
        explanation: "Symmetric trace-back gives erect unit virtual image."
      },
      {
        q: "Virtual image means:",
        options: ["No rays pass through it; rays only appear to diverge from it", "It burns film", "It is always magnified", "It is always inverted"],
        answer: 0,
        explanation: "Energy never arrives there; the eye extends diverging rays backward."
      }
    ]
  },
  {
    sectionId: "young-ch34-s2",
    readingTime: 7,
    intro: "Curving the mirror adds focusing power: parallel rays meet at the focal point halfway to the center of curvature. One equation, $1/s + 1/s^{\\prime} = 1/f$, locates every image, and $m = -s^{\\prime}/s$ sizes it. Ray diagrams with three principal rays make the algebra visible.",
    objectives: [
      "Apply the mirror equation $1/s + 1/s^{\\prime} = 1/f$ with $f = R/2$",
      "Compute magnification $m = -s^{\\prime}/s$ and interpret sign",
      "Draw principal-ray diagrams for concave and convex mirrors"
    ],
    concepts: [
      {
        term: "Focal length of spherical mirror",
        kind: "theorem",
        statement: "Paraxial rays focus at **$f = R/2$**, positive for concave, negative for convex.",
        detail: "Concave centers sit in front ($R > 0$); convex centers hide behind ($R < 0$)."
      },
      {
        term: "Mirror equation",
        kind: "law",
        statement: "**$1/s + 1/s^{\\prime} = 1/f$** locates every paraxial image; positive $s^{\\prime}$ is real (in front).",
        detail: "Derived from two similar-triangle pairs in the paraxial limit."
      },
      {
        term: "Magnification",
        kind: "definition",
        statement: "**$m = -s^{\\prime}/s = y^{\\prime}/y$**; negative means inverted, $|m|$ is the size ratio.",
        detail: "$|m| > 1$ enlarges; $|m| < 1$ shrinks."
      },
      {
        term: "Three principal rays",
        kind: "method",
        statement: "Draw **parallel-to-focus, focus-to-parallel, and vertex-central** rays; any two intersect at the image.",
        detail: "The third checks the first two; all three concur for correct construction."
      },
      {
        term: "Convex always virtual",
        kind: "insight",
        statement: "A convex mirror has $f < 0$ so $s^{\\prime} < 0$ always: **erect, reduced, virtual** wide-angle views.",
        detail: "Store and road mirrors trade size for field of view."
      }
    ],
    figures: [
      {
        caption: "Concave mirror principal rays: parallel-to-focus, focus-to-parallel, vertex ray meet at $I$",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Concave mirror principal rays: parallel-to-focus, focus-to-parallel, vertex ray meet at I"><rect x="0" y="0" width="400" height="200" fill="none"/><path d="M 330 20 C 300 60, 300 140, 330 180" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="230" cy="100" r="3" fill="currentColor"/><circle cx="180" cy="100" r="3" fill="currentColor"/><text x="225" y="120" font-size="12" fill="currentColor">F</text><text x="172" y="120" font-size="12" fill="currentColor">C</text><line x1="60" y1="60" x2="315" y2="60" stroke="currentColor" stroke-width="1.5"/><line x1="315" y1="60" x2="230" y2="100" stroke="currentColor" stroke-width="1.5"/><line x1="60" y1="140" x2="315" y2="140" stroke="currentColor" stroke-width="1.5"/><line x1="315" y1="140" x2="230" y2="100" stroke="currentColor" stroke-width="1.5"/><circle cx="60" cy="100" r="4" fill="currentColor"/><circle cx="150" cy="100" r="4" fill="currentColor"/><text x="50" y="125" font-size="12" fill="currentColor">O</text><text x="142" y="125" font-size="12" fill="currentColor">I</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Concave shaving mirror",
        problem: "Concave $R = 40.0$ cm ($f = 20.0$ cm); face at $s = 15.0$ cm. Find image.",
        steps: [
          { label: "Step 1: Equation", text: "$1/s^{\\prime} = 1/20.0 - 1/15.0 = (3-4)/60 = -1/60$." },
          { label: "Step 2: Image", text: "$s^{\\prime} = -60.0$ cm: virtual $60$ cm behind mirror." },
          { label: "Step 3: Magnification", text: "$m = -(-60.0)/15.0 = +4.00$: erect, $4$ times larger." }
        ],
        result: "Virtual erect image $60.0$ cm behind, magnified $4$ times."
      },
      {
        title: "Convex road mirror",
        problem: "Convex $f = -30.0$ cm; car at $s = 10.0$ m. Find image.",
        steps: [
          { label: "Step 1: Units", text: "$s = 1000$ cm; $1/s^{\\prime} = 1/(-30.0) - 1/1000 = -0.03433$." },
          { label: "Step 2: Image", text: "$s^{\\prime} = -29.1$ cm, virtual just behind mirror." },
          { label: "Step 3: Size", text: "$m = +0.0291$: erect thumbnail, wide field." }
        ],
        result: "$s^{\\prime} = -29.1$ cm, erect and $0.029$ size."
      }
    ],
    keyTakeaways: [
      "$1/s + 1/s^{\\prime} = 1/f$ with $f = R/2$ solves all spherical mirrors.",
      "$m = -s^{\\prime}/s$ gives orientation and size.",
      "Concave can be real or virtual; convex is always virtual, erect, reduced."
    ],
    quiz: [
      {
        q: "Concave f = 20 cm, object at 60 cm. Image is at:",
        options: ["$30$ cm real inverted", "$60$ cm virtual", "$15$ cm real", "$-30$ cm"],
        answer: 0,
        explanation: "$1/s^{\\prime} = 1/20 - 1/60 = 2/60$, so $s^{\\prime} = 30$ cm."
      },
      {
        q: "m = -2 means image is:",
        options: ["Erect half size", "Inverted twice size", "Erect twice size", "Virtual always"],
        answer: 1,
        explanation: "Negative inverts; magnitude 2 doubles."
      },
      {
        q: "Convex mirror images are always:",
        options: ["Real and inverted", "Virtual, erect, reduced", "At infinity", "Magnified"],
        answer: 1,
        explanation: "Negative f forces negative s-prime and positive m below 1."
      }
    ]
  },
  {
    sectionId: "young-ch34-s3",
    readingTime: 6,
    intro: "A single spherical refracting surface bends rays into a new focus without any reflection. The relation $n_{a}/s + n_{b}/s^{\\prime} = (n_{b}-n_{a})/R$ covers fish tanks, glass rods, and eyes. The same sign discipline as mirrors applies, with refracted-side distances positive.",
    objectives: [
      "Apply $n_{a}/s + n_{b}/s^{\\prime} = (n_{b}-n_{a})/R$",
      "Assign $R$ signs for center on refracted versus incident side",
      "Compute rod and tank images"
    ],
    concepts: [
      {
        term: "Spherical refraction equation",
        kind: "law",
        statement: "**$n_{a}/s + n_{b}/s^{\\prime} = (n_{b}-n_{a})/R$** for paraxial rays, with $R$ positive when center is on the refracted side.",
        detail: "Flat $R \\to \\infty$ recovers the apparent-depth rule of Section 34.1."
      },
      {
        term: "Sign rules",
        kind: "notation",
        statement: "**$s > 0$ object on incident side; $s^{\\prime} > 0$ on refracted side**; $R > 0$ if center is refracted-side.",
        detail: "Negative $s^{\\prime}$ means the image falls back on the incident side, virtual."
      },
      {
        term: "Magnification",
        kind: "definition",
        statement: "**$m = -n_{a}s^{\\prime}/(n_{b}s)$** for refracting surfaces.",
        detail: "Indices weight the ratio because ray angles scale with $n$."
      },
      {
        term: "Glass rod focus",
        kind: "theorem",
        statement: "A glass hemisphere rods end **focuses parallel rays inside or outside** per the same formula with $s \\to \\infty$.",
        detail: "Fiber couplers and LED encapsulants are designed this way."
      },
      {
        term: "Paraxial limit",
        kind: "insight",
        statement: "All formulas assume **small angles $\\sin\\theta \\approx \\theta$**; wide rays suffer spherical aberration.",
        detail: "Stops and aspherics control the error in real instruments."
      }
    ],
    examples: [
      {
        title: "Fish in a bowl",
        problem: "Glass hemisphere $R = +10.0$ cm (center inside water side $b$); fish at $s = 20.0$ cm in water $n_{a} = 1.33$ viewed from air $n_{b} = 1.00$. Find $s^{\\prime}$.",
        steps: [
          { label: "Step 1: Insert", text: "$1.33/20.0 + 1.00/s^{\\prime} = (1.00-1.33)/10.0 = -0.0330$." },
          { label: "Step 2: Solve", text: "$1/s^{\\prime} = -0.0330 - 0.0665 = -0.0995$, so $s^{\\prime} = -10.1$ cm." },
          { label: "Step 3: Read", text: "Negative means $10.1$ cm on the object side: virtual, slightly magnified." }
        ],
        result: "Virtual image $10.1$ cm inside the water side."
      },
      {
        title: "Glass rod focal point",
        problem: "Parallel air rays enter a glass rod $n = 1.52$ with spherical end $R = +2.00$ cm. Where do they focus?",
        steps: [
          { label: "Step 1: Infinity object", text: "$n_{a}/s = 0$; $1.52/s^{\\prime} = (1.52-1.00)/2.00 = 0.260$." },
          { label: "Step 2: Focus", text: "$s^{\\prime} = 1.52/0.260 = 5.85$ cm inside the rod." },
          { label: "Step 3: Use", text: "Cutting the rod near $5.85$ cm collimates an LED placed there by reversibility." }
        ],
        result: "Focus $5.85$ cm inside the glass."
      }
    ],
    keyTakeaways: [
      "One formula $n_{a}/s + n_{b}/s^{\\prime} = (n_{b}-n_{a})/R$ handles all spherical surfaces.",
      "$R$ sign follows the center side; $s^{\\prime}$ sign picks real versus virtual.",
      "Magnification carries the index ratio $m = -n_{a}s^{\\prime}/(n_{b}s)$."
    ],
    quiz: [
      {
        q: "For a refracting surface, R is positive when the center is on the:",
        options: ["Incident side", "Refracted side", "Either side", "Neither"],
        answer: 1,
        explanation: "Young's convention ties positive R to refracted-side center."
      },
      {
        q: "Flat surface R to infinity gives:",
        options: ["Mirror equation", "Apparent-depth rule", "No image", "Laser condition"],
        answer: 1,
        explanation: "Right side vanishes, leaving $s^{\\prime} = -(n_{b}/n_{a})s$."
      },
      {
        q: "Negative s-prime for refraction means image is:",
        options: ["Real on refracted side", "Virtual on incident side", "At infinity", "Nonexistent"],
        answer: 1,
        explanation: "Light does not proceed there; rays only trace back."
      }
    ]
  },
  {
    sectionId: "young-ch34-s4",
    readingTime: 8,
    intro: "Two refracting surfaces make a thin lens, and the pair collapses to the beloved $1/s + 1/s^{\\prime} = 1/f$. Lensmaker's equation builds $f$ from indices and radii; the same magnification $m = -s^{\\prime}/s$ sizes images. This is the workhorse section of the chapter.",
    objectives: [
      "Apply the thin-lens equation and $m = -s^{\\prime}/s$",
      "Compute $f$ from the lensmaker's formula",
      "Classify converging versus diverging images by object position"
    ],
    concepts: [
      {
        term: "Thin-lens equation",
        kind: "law",
        statement: "**$1/s + 1/s^{\\prime} = 1/f$** with $s^{\\prime} > 0$ real on the far side.",
        detail: "Positive $f$ converges; negative $f$ diverges. Same $m$ rule as mirrors."
      },
      {
        term: "Lensmaker's equation",
        kind: "theorem",
        statement: "**$1/f = (n-1)(1/R_{1} - 1/R_{2})$** for a thin lens in air with Young's $R$ signs.",
        detail: "Symmetric biconvex $R$, $-R$ gives $1/f = (n-1)2/R$. Meniscus signs can still yield positive $f$."
      },
      {
        term: "Converging image table",
        kind: "method",
        statement: "Beyond $2F$: **real, inverted, reduced**; at $2F$: same size; $F$-$2F$: enlarged; inside $F$: **virtual, erect, enlarged**.",
        detail: "Memorize positions from the two-surfaces ray trace, verified by the equation."
      },
      {
        term: "Diverging lens",
        kind: "theorem",
        statement: "A diverging lens ($f < 0$) **always gives virtual, erect, reduced** images for real objects.",
        detail: "Peep-hole door lenses exploit exactly this minification."
      },
      {
        term: "Power in diopters",
        kind: "notation",
        statement: "**Power $= 1/f$ in diopters** ($f$ in meters) adds for contact lenses.",
        detail: "A $+2.00$ D lens has $f = 0.500$ m; stacking adds powers thin-lens to thin-lens."
      }
    ],
    figures: [
      {
        caption: "Converging lens principal rays: parallel-to-far-focus, center-undeviated, near-focus-to-parallel meet at $I$",
        svg: '<svg viewBox="0 0 400 210" style="width:100%;height:auto" role="img" aria-label="Converging lens principal rays: parallel-to-far-focus, center-undeviated, near-focus-to-parallel meet at I"><rect x="0" y="0" width="400" height="210" fill="none"/><path d="M 200 20 C 190 70, 190 140, 200 190 M 200 20 C 210 70, 210 140, 200 190" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="140" cy="105" r="3" fill="currentColor"/><circle cx="260" cy="105" r="3" fill="currentColor"/><text x="132" y="125" font-size="12" fill="currentColor">F</text><text x="256" y="125" font-size="12" fill="currentColor">F</text><line x1="60" y1="60" x2="340" y2="150" stroke="currentColor" stroke-width="2"/><line x1="60" y1="60" x2="200" y2="60" stroke="currentColor" stroke-width="1.5"/><line x1="200" y1="60" x2="340" y2="150" stroke="currentColor" stroke-width="1.5"/><circle cx="60" cy="60" r="4" fill="currentColor"/><circle cx="340" cy="150" r="4" fill="currentColor"/><text x="50" y="85" font-size="12" fill="currentColor">O</text><text x="335" y="175" font-size="12" fill="currentColor">I</text></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Projector lens",
        problem: "Converging $f = 10.0$ cm; slide at $s = 10.5$ cm. Find screen position and magnification.",
        steps: [
          { label: "Step 1: Image", text: "$1/s^{\\prime} = 1/10.0 - 1/10.5 = 0.004762$, so $s^{\\prime} = 210$ cm." },
          { label: "Step 2: Magnification", text: "$m = -210/10.5 = -20.0$: inverted, $20$ times larger." },
          { label: "Step 3: Placement", text: "Screen $2.10$ m past the lens; slide must be pre-inverted." }
        ],
        result: "Real inverted image at $210$ cm, $20$ times size."
      },
      {
        title: "Lensmaker design",
        problem: "Biconvex $R_{1} = +20.0$ cm, $R_{2} = -20.0$ cm, $n = 1.52$. Find $f$ and power.",
        steps: [
          { label: "Step 1: Formula", text: "$1/f = 0.52(1/20.0 - 1/(-20.0)) = 0.52(0.100) = 0.0520$ per cm." },
          { label: "Step 2: Focal length", text: "$f = 19.2$ cm $= 0.192$ m." },
          { label: "Step 3: Power", text: "$1/0.192 = +5.20$ diopters." }
        ],
        result: "$f = 19.2$ cm, $+5.20$ D converging."
      }
    ],
    keyTakeaways: [
      "Thin lenses obey $1/s + 1/s^{\\prime} = 1/f$ with $m = -s^{\\prime}/s$.",
      "Lensmaker ties $f$ to glass and curvature; power adds in diopters.",
      "Object position relative to $F$ and $2F$ classifies every converging image."
    ],
    quiz: [
      {
        q: "Converging f = 10 cm, object at 30 cm. Image is:",
        options: ["Virtual erect", "Real inverted at 15 cm", "At infinity", "Virtual at 30 cm"],
        answer: 1,
        explanation: "$1/s^{\\prime} = 1/10-1/30 = 2/30$, so $s^{\\prime} = 15$ cm real."
      },
      {
        q: "Object inside focal length of converging lens gives:",
        options: ["Real reduced", "Virtual erect enlarged", "Real enlarged", "No image"],
        answer: 1,
        explanation: "$s < f$ forces negative s-prime and m above 1, the magnifier case."
      },
      {
        q: "Plano-convex R1 = +30 cm, flat R2 = infinity, n = 1.5. f equals:",
        options: ["$15$ cm", "$30$ cm", "$60$ cm", "$45$ cm"],
        answer: 2,
        explanation: "$1/f = 0.5(1/30 - 0) = 1/60$, so $f = 60$ cm."
      },
      {
        q: "Diverging lens with real object always gives:",
        options: ["Real inverted", "Virtual erect reduced", "Real enlarged", "Image at F"],
        answer: 1,
        explanation: "Negative f pushes s-prime negative with small positive m."
      }
    ]
  },
  {
    sectionId: "young-ch34-s5",
    readingTime: 5,
    intro: "A camera is a lens plus a sensor with two knobs: aperture sets brightness and depth, shutter sets motion freeze. The f-number $N = f/D$ packages exposure, and doubling $N$ quarters the light. Young treats focus, depth of field, and digital sensors as thin-lens applications.",
    objectives: [
      "Define f-number and relate it to intensity",
      "Explain shutter-aperture exposure tradeoffs",
      "Describe focus, depth of field, and sensor response"
    ],
    concepts: [
      {
        term: "f-number",
        kind: "definition",
        statement: "**$N = f/D$** with aperture diameter $D$; image intensity scales as **$1/N^{2}$**.",
        detail: "$f/2.8$ admits four times the light of $f/5.6$; standard stops differ by $\\sqrt{2}$."
      },
      {
        term: "Exposure",
        kind: "method",
        statement: "Exposure $\\propto$ **intensity $\\times$ time**; open up one stop or double shutter time equivalently.",
        detail: "ISO gain trades noise for sensitivity after optics fixes photon count."
      },
      {
        term: "Depth of field",
        kind: "insight",
        statement: "**Small apertures (large $N$) deepen focus** by narrowing ray bundles, at the cost of light and diffraction.",
        detail: "Landscapes stop down; portraits open up to blur backgrounds."
      },
      {
        term: "Focusing",
        kind: "method",
        statement: "Moving the lens shifts $s^{\\prime}$ onto the sensor per **$1/s + 1/s^{\\prime} = 1/f$**.",
        detail: "Close subjects push images farther back; infinity focus parks the sensor at $F$."
      },
      {
        term: "Digital sensor",
        kind: "definition",
        statement: "CCD/CMOS pixels **count photons behind Bayer color filters**; microlenses and back illumination raise fill factor.",
        detail: "Pixel size balances resolution against full-well charge and noise."
      }
    ],
    examples: [
      {
        title: "Stop comparison",
        problem: "Compare light at $f/2.0$ versus $f/8.0$ for the same shutter time.",
        steps: [
          { label: "Step 1: Ratio", text: "Intensity $\\propto 1/N^{2}$; ratio $(8.0/2.0)^{2} = 16$." },
          { label: "Step 2: Meaning", text: "$f/2.0$ is $16$ times brighter, four stops faster." },
          { label: "Step 3: Compensation", text: "Match exposures with $16$ times longer shutter at $f/8.0$." }
        ],
        result: "Wide open admits $16$ times the light."
      },
      {
        title: "Close focus shift",
        problem: "$f = 50.0$ mm lens focuses at infinity then at $s = 1.00$ m. How far does the lens move?",
        steps: [
          { label: "Step 1: Infinity", text: "$s^{\\prime} = f = 50.0$ mm." },
          { label: "Step 2: Near", text: "$1/s^{\\prime} = 1/50.0 - 1/1000$ per mm: $0.0200 - 0.00100 = 0.0190$, so $s^{\\prime} = 52.6$ mm." },
          { label: "Step 3: Travel", text: "Lens extends $2.6$ mm from the sensor." }
        ],
        result: "Extension $2.6$ mm for $1$ m focus."
      }
    ],
    keyTakeaways: [
      "f-number $N = f/D$ sets brightness as $1/N^{2}$.",
      "Aperture trades light against depth of field; shutter trades motion blur.",
      "Focus is thin-lens conjugation onto film or sensor."
    ],
    quiz: [
      {
        q: "Changing f/4 to f/8 with fixed shutter changes exposure by:",
        options: ["2x brighter", "4x dimmer", "No change", "16x brighter"],
        answer: 1,
        explanation: "Doubling N quarters intensity: $(8/4)^{2} = 4$."
      },
      {
        q: "Larger depth of field comes from:",
        options: ["Wider aperture", "Smaller aperture (larger N)", "Faster shutter", "Higher ISO"],
        answer: 1,
        explanation: "Narrow bundles tolerate defocus over a longer range."
      },
      {
        q: "Focusing a closer object requires image distance to:",
        options: ["Decrease", "Increase", "Stay at f always", "Go negative"],
        answer: 1,
        explanation: "$1/s^{\\prime} = 1/f - 1/s$ grows as s shrinks."
      }
    ]
  },
  {
    sectionId: "young-ch34-s6",
    readingTime: 5,
    intro: "The eye is a fixed-sensor camera with a variable lens: cornea does most bending, the crystalline lens fine-tunes, and the iris stops down. Near point, far point, and refractive errors follow directly from the thin-lens equation. Corrective lenses simply pre-image the world into the eye's range.",
    objectives: [
      "Model cornea plus lens focusing on the retina",
      "Define myopia, hyperopia, presbyopia, astigmatism",
      "Prescribe converging versus diverging correction by power"
    ],
    concepts: [
      {
        term: "Eye optics",
        kind: "definition",
        statement: "**Cornea ($\\sim$ +43 D) plus adjustable lens ($\\sim$ +20 D)** image onto the $24$ mm retina; iris is the aperture, fovea the sharp center.",
        detail: "Accommodation squeezes the lens rounder for near work, adding up to $+15$ D in youth."
      },
      {
        term: "Near and far points",
        kind: "definition",
        statement: "**Far point is the farthest sharp distance relaxed; near point the closest sharp distance strained** ($\\sim 25$ cm young adult).",
        detail: "Myopes have near far points; hyperopes have virtual far points beyond infinity."
      },
      {
        term: "Myopia",
        kind: "theorem",
        statement: "Myopic eyes focus distant objects **in front of the retina**; **diverging ($-$D) lenses** push images to the far point.",
        detail: "Eyeball too long or cornea too steep; concave correction diverges parallel rays appropriately."
      },
      {
        term: "Hyperopia and presbyopia",
        kind: "theorem",
        statement: "Hyperopic eyes focus **behind the retina**; stiff aging lenses lose accommodation (**presbyopia**); **converging ($+$D) lenses** help both for near.",
        detail: "Reading glasses add the missing converging power."
      },
      {
        term: "Astigmatism",
        kind: "definition",
        statement: "**Cylindrical cornea error focuses meridians differently**; cylinder lenses correct each axis separately.",
        detail: "A point images as crossed line foci instead of one dot."
      }
    ],
    examples: [
      {
        title: "Myopia prescription",
        problem: "Far point $50.0$ cm. What lens images infinity there? Give power.",
        steps: [
          { label: "Step 1: Needed image", text: "Lens must make $s^{\\prime} = -50.0$ cm virtual for $s = \\infty$." },
          { label: "Step 2: Focal length", text: "$1/f = 1/s^{\\prime} = -1/0.500$ m, so $f = -0.500$ m." },
          { label: "Step 3: Power", text: "$-2.00$ diopters diverging." }
        ],
        result: "$-2.00$ D glasses correct the $50$ cm far point."
      },
      {
        title: "Reading glasses",
        problem: "Presbyopic near point $1.00$ m; desired $25.0$ cm. Find add power (thin contact approximation).",
        steps: [
          { label: "Step 1: Object at 25 cm", text: "Need virtual image at $-1.00$ m for $s = 0.250$ m." },
          { label: "Step 2: Power", text: "$1/f = 1/0.250 + 1/(-1.00) = 4.00 - 1.00 = +3.00$ D." },
          { label: "Step 3: Meaning", text: "$+3.00$ readers restore the youthful near point." }
        ],
        result: "$+3.00$ D reading addition."
      }
    ],
    keyTakeaways: [
      "Cornea plus accommodating lens image onto the retina; iris sets exposure.",
      "Myopia needs diverging lenses; hyperopia and presbyopia need converging.",
      "Prescriptions place the world at the patient's far or near point."
    ],
    quiz: [
      {
        q: "Myopia is corrected with:",
        options: ["Converging lens", "Diverging lens", "Prism only", "No lens helps"],
        answer: 1,
        explanation: "Negative power diverges infinity to the finite far point."
      },
      {
        q: "Presbyopia is loss of:",
        options: ["Retina sensitivity", "Accommodation amplitude with age", "Iris control", "Cornea power"],
        answer: 1,
        explanation: "Lens stiffens, so near focus fails and readers compensate."
      },
      {
        q: "Astigmatism means:",
        options: ["Eyeball too short", "Different focus per meridian", "Cloudy lens", "Detached retina"],
        answer: 1,
        explanation: "Toroidal cornea gives axis-dependent power, fixed by cylinders."
      }
    ]
  },
  {
    sectionId: "young-ch34-s7",
    readingTime: 5,
    intro: "A hand lens works by handing the eye a bigger angle: park the object at the focal point and the eye reads infinity at full near-point leverage. Angular magnification $M = 25\\,\\mathrm{cm}/f$ rewards short focal lengths. Young derives relaxed versus near-point placement.",
    objectives: [
      "Define angular magnification versus lateral magnification",
      "Derive $M = 25\\,\\mathrm{cm}/f$ relaxed and $M = 1 + 25\\,\\mathrm{cm}/f$ at near point",
      "Choose magnifier focal length for a target $M$"
    ],
    concepts: [
      {
        term: "Angular magnification",
        kind: "definition",
        statement: "**$M = \\theta/\\theta_{0}$**: angle with instrument over angle of the naked object at the near point $25$ cm.",
        detail: "Closer focusing, not image size alone, is what a loupe sells."
      },
      {
        term: "Relaxed magnifier",
        kind: "theorem",
        statement: "Object at $F$ gives image at infinity with **$M = 25\\,\\mathrm{cm}/f$** for a relaxed eye.",
        detail: "Parallel output needs no accommodation; standard rating uses this placement."
      },
      {
        term: "Image at near point",
        kind: "theorem",
        statement: "Pushing the image to $25$ cm raises power to **$M = 1 + 25\\,\\mathrm{cm}/f$** at maximum strain.",
        detail: "One extra unit of magnification buys eyestrain; loupes usually work relaxed."
      },
      {
        term: "Short f wins",
        kind: "insight",
        statement: "**Shorter $f$ means larger $M$**, but working distance and aberrations shrink too.",
        detail: "$f = 2.5$ cm gives $M = 10$ with only centimeters of clearance."
      },
      {
        term: "Magnifier versus projector",
        kind: "definition",
        statement: "A magnifier makes a **virtual image for the eye**; a projector makes a **real image for a screen**, opposite sides of $F$.",
        detail: "Same lens, object just inside versus just outside focus."
      }
    ],
    examples: [
      {
        title: "Rating a loupe",
        problem: "$f = 5.00$ cm magnifier. Find $M$ relaxed and at near point.",
        steps: [
          { label: "Step 1: Relaxed", text: "$M = 25.0/5.00 = 5.00$ times." },
          { label: "Step 2: Near point", text: "$M = 1 + 5.00 = 6.00$ times." },
          { label: "Step 3: Placement", text: "Relaxed parks object at $5.00$ cm; near-point pulls it slightly closer." }
        ],
        result: "$5$ times relaxed, $6$ times strained."
      },
      {
        title: "Design for 20x",
        problem: "What $f$ gives $M = 20$ relaxed?",
        steps: [
          { label: "Step 1: Invert", text: "$f = 25.0\\,\\mathrm{cm}/M = 25.0/20 = 1.25$ cm." },
          { label: "Step 2: Reality", text: "Such loupes need compound corrected doublets, not single lenses." },
          { label: "Step 3: Alternative", text: "Compound microscopes reach $20$ times more comfortably." }
        ],
        result: "$f = 1.25$ cm, a demanding short loupe."
      }
    ],
    keyTakeaways: [
      "Magnifiers sell angle: $M$ compares aided versus naked-eye-at-$25$-cm angles.",
      "Relaxed $M = 25\\,\\mathrm{cm}/f$; near-point $M = 1 + 25\\,\\mathrm{cm}/f$.",
      "Higher $M$ costs working distance and lens quality."
    ],
    quiz: [
      {
        q: "f = 10 cm magnifier relaxed gives M:",
        options: ["$2.5$", "$3.5$", "$10$", "$25$"],
        answer: 0,
        explanation: "$25/10 = 2.5$."
      },
      {
        q: "Near-point placement versus relaxed adds:",
        options: ["Zero", "One unit of M", "Doubles M always", "Halves M"],
        answer: 1,
        explanation: "$M = 1 + 25/f$ exceeds $25/f$ by exactly one."
      },
      {
        q: "A magnifier forms a:",
        options: ["Real image on a screen", "Virtual enlarged image for the eye", "Reduced real image", "No image"],
        answer: 1,
        explanation: "Object inside F yields virtual erect enlarged output."
      }
    ]
  },
  {
    sectionId: "young-ch34-s8",
    readingTime: 7,
    intro: "Stack two lenses and powers multiply: objective makes a real enlarged image, eyepiece uses it as a magnifier. Telescopes instead grab angle from afar with $M = -f_{obj}/f_{eye}$. Reflectors dodge chromatic error with mirrors, which is why research telescopes are all mirrors.",
    objectives: [
      "Compute compound microscope $M = M_{obj} \\times M_{eye}$",
      "Compute telescope $M = -f_{obj}/f_{eye}$ and explain the sign",
      "Compare refractors and reflectors with their limits"
    ],
    concepts: [
      {
        term: "Compound microscope",
        kind: "theorem",
        statement: "Objective lateral $m_{obj} = -L/f_{obj}$ times eyepiece angular $M_{eye}$ gives **$M = -(L/f_{obj})(25\\,\\mathrm{cm}/f_{eye})$**.",
        detail: "Tube length $L \\approx 16$ cm separates the lenses; $100$ times objectives pair with $10$ times eyepieces for $1000$ times."
      },
      {
        term: "Astronomical telescope",
        kind: "theorem",
        statement: "With both foci shared, **$M = -f_{obj}/f_{eye}$**: long objective, short eyepiece, inverted sky.",
        detail: "A $100$ cm objective with $1$ cm eyepiece gives $-100$ times; erecting prisms correct daytime use."
      },
      {
        term: "Refractor limits",
        kind: "insight",
        statement: "Lenses sag, absorb, and chromatically fringe, so **refractors stall near $1$ m aperture** (Yerkes).",
        detail: "Glass can be supported only at edges, and doublets never cancel color perfectly."
      },
      {
        term: "Reflector advantage",
        kind: "insight",
        statement: "Mirrors **reflect all colors equally and support from behind**, scaling to $10$ m monoliths and segmented giants.",
        detail: "Newtonian, Cassegrain, and prime foci just fold the same mirror equation differently."
      },
      {
        term: "Resolution preview",
        kind: "insight",
        statement: "Aperture ultimately limits sharpness by **diffraction ($\\sim \\lambda/D$)**, not magnification; empty magnification just enlarges blur.",
        detail: "Chapter 36 turns this preview into the Rayleigh criterion."
      }
    ],
    figures: [
      {
        caption: "Compound microscope: objective projects real enlarged $I_{1}$, eyepiece magnifies it as a loupe",
        svg: '<svg viewBox="0 0 400 200" style="width:100%;height:auto" role="img" aria-label="Compound microscope: objective projects real enlarged I_1, eyepiece magnifies it as a loupe"><rect x="0" y="0" width="400" height="200" fill="none"/><line x1="150" y1="30" x2="150" y2="170" stroke="currentColor" stroke-width="1.5"/><line x1="280" y1="30" x2="280" y2="170" stroke="currentColor" stroke-width="1.5"/><circle cx="60" cy="100" r="5" fill="currentColor"/><circle cx="220" cy="140" r="5" fill="currentColor"/><line x1="60" y1="100" x2="150" y2="100" stroke="currentColor" stroke-width="2"/><line x1="150" y1="100" x2="220" y2="140" stroke="currentColor" stroke-width="2"/><line x1="220" y1="140" x2="280" y2="140" stroke="currentColor" stroke-width="2"/><line x1="280" y1="140" x2="360" y2="100" stroke="currentColor" stroke-width="2"/><text x="140" y="25" font-size="12" fill="currentColor">objective</text><text x="270" y="25" font-size="12" fill="currentColor">eyepiece</text><text x="50" y="125" font-size="12" fill="currentColor">O</text><text x="212" y="165" font-size="12" fill="currentColor">I1</text></svg>',
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: "Microscope power",
        problem: "$f_{obj} = 4.00$ mm, $f_{eye} = 25.0$ mm, $L = 160$ mm. Find $M$.",
        steps: [
          { label: "Step 1: Objective", text: "$m_{obj} = -160/4.00 = -40.0$ times." },
          { label: "Step 2: Eyepiece", text: "$M_{eye} = 250/25.0 = 10.0$ times relaxed." },
          { label: "Step 3: Total", text: "$M = -400$ times, inverted $400$ diameters." }
        ],
        result: "$M = -400$ times standard lab configuration."
      },
      {
        title: "Telescope choice",
        problem: "Objective $f_{obj} = 1200$ mm with eyepieces $25$ mm and $10$ mm. Find both $M$.",
        steps: [
          { label: "Step 1: Low power", text: "$M = -1200/25 = -48$ times." },
          { label: "Step 2: High power", text: "$M = -1200/10 = -120$ times." },
          { label: "Step 3: Trade", text: "Higher $M$ dims and narrows; atmosphere usually caps useful power." }
        ],
        result: "$-48$ times and $-120$ times, both inverted."
      }
    ],
    keyTakeaways: [
      "Microscopes multiply lateral objective by angular eyepiece power.",
      "Telescopes give $M = -f_{obj}/f_{eye}$ with inverted images.",
      "Reflectors scale past refractor limits; diffraction caps both."
    ],
    quiz: [
      {
        q: "Microscope L = 16 cm, $f_{obj}$ = 0.8 cm, $f_{eye}$ = 2.5 cm. M is:",
        options: ["$-50$", "$-200$", "$-20$", "$+200$"],
        answer: 1,
        explanation: "$(-16/0.8)(25/2.5) = (-20)(10) = -200$."
      },
      {
        q: "Telescope $f_{obj}$ = 900 mm, $f_{eye}$ = 30 mm. M equals:",
        options: ["$+30$", "$-30$", "$-27000$", "$+3$"],
        answer: 1,
        explanation: "$-900/30 = -30$; negative denotes inversion."
      },
      {
        q: "Large research telescopes use mirrors mainly because:",
        options: ["Mirrors magnify more", "Mirrors avoid chromatic error and support scaling", "Lenses cannot reflect", "Mirrors are cheaper to polish flat"],
        answer: 1,
        explanation: "Reflection is achromatic and mirrors support from behind."
      },
      // PYQ-pattern — lensmaker formula (rephrased, values changed)
      {
        q: "A biconvex lens of glass $n = 1.50$ has surface radii $R_{1} = 20 \\text{ cm}$ and $R_{2} = -20 \\text{ cm}$. Its focal length and power are:",
        options: ["$+20 \\text{ cm}$, $+5.0 \\text{ D}$ converging", "$-20 \\text{ cm}$, $-5.0 \\text{ D}$ diverging", "$+10 \\text{ cm}$, $+10 \\text{ D}$ converging", "$+40 \\text{ cm}$, $+2.5 \\text{ D}$ converging"],
        answer: 0,
        explanation: "Step 1: Given $n = 1.50$, $R_{1} = +20 \\text{ cm}$, $R_{2} = -20 \\text{ cm}$ with the sign convention for a biconvex pair. Step 2: Governing law is the lensmaker relation $1/f = (n-1)(1/R_{1}-1/R_{2})$. Step 3: Key equation: $$\\frac{1}{f} = (0.50)\\left(\\frac{1}{20}-\\frac{1}{-20}\\right) = \\frac{0.50}{10} = \\frac{1}{20}.$$ Step 4: Numerics give $f = +20 \\text{ cm} = +0.20 \\text{ m}$ and power $P = 1/f = +5.0 \\text{ D}$; positive $f$ means converging, as required. Step 5: Distractors fail because the negative choice flips both radii signs, $+10 \\text{ cm}$ forgets the $(n-1)$ factor, and $+40 \\text{ cm}$ uses only one surface. Step 6: Conclude the lens is converging with **$f = +20 \\text{ cm}$ and $P = +5.0 \\text{ D}$**."
      },
      // PYQ-pattern — concave mirror image (rephrased, values changed)
      {
        q: "A concave mirror has focal length $f = 15 \\text{ cm}$. An object placed $d_{o} = 45 \\text{ cm}$ in front forms an image at:",
        options: ["$+22.5 \\text{ cm}$ real, inverted and reduced", "$-22.5 \\text{ cm}$ virtual behind the mirror", "$+45 \\text{ cm}$ real magnified", "$-11 \\text{ cm}$ virtual enlarged"],
        answer: 0,
        explanation: "Step 1: Given converging mirror $f = 15 \\text{ cm}$ (positive) and object distance $d_{o} = 45 \\text{ cm}$. Step 2: Governing law is the mirror equation $1/f = 1/d_{o}+1/d_{i}$ with $m = -d_{i}/d_{o}$. Step 3: Key equation: $$\\frac{1}{d_{i}} = \\frac{1}{15}-\\frac{1}{45} = \\frac{2}{45}.$$ Step 4: Numerics give $d_{i} = +22.5 \\text{ cm}$ on the real side with $m = -22.5/45 = -0.50$; units are $\\text{cm}$ and $|m| < 1$ means reduced. Step 5: Distractors fail because the negative sign puts the image behind the mirror, $45$ copies the object distance, and $11$ inverts the fraction algebra. Step 6: Conclude the image is real at **$+22.5 \\text{ cm}$ with $m = -0.50$**."
      },
      // PYQ-pattern — total internal reflection (rephrased, values changed)
      {
        q: "Light travels from glass of index $n = 1.50$ toward air. The critical angle is closest to:",
        options: ["$90^{\\circ}$", "$30^{\\circ}$", "$41.8^{\\circ}$", "$48.8^{\\circ}$"],
        answer: 2,
        explanation: "Step 1: Given denser index $n_{1} = 1.50$ and rarer index $n_{2} = 1.00$. Step 2: Governing law is Snell at grazing emergence, $\\sin c = n_{2}/n_{1}$. Step 3: Key equation: $$\\sin c = \\frac{1.00}{1.50} = 0.667 \\quad\\Rightarrow\\quad c = \\sin^{-1}(0.667).$$ Step 4: Numerics give $c \\approx 41.8^{\\circ}$; the angle is dimensionless in degrees and must lie below $90^{\\circ}$. Step 5: Distractors fail because $90^{\\circ}$ is the refracted angle at onset, $30^{\\circ}$ assumes $n = 2.0$, and $48.8^{\\circ}$ uses $0.75$ for the ratio. Step 6: Conclude rays beyond **$41.8^{\\circ}$** stay trapped."
      },
      // PYQ-pattern — thin lens image (rephrased, values changed)
      {
        q: "A converging lens of $f = 10 \\text{ cm}$ forms the image of an object at $d_{o} = 30 \\text{ cm}$. The image distance and magnification are:",
        options: ["$+7.5 \\text{ cm}$, $m = -0.25$", "$-15 \\text{ cm}$, virtual", "$+30 \\text{ cm}$, $m = -1.0$", "$+15 \\text{ cm}$, $m = -0.50$ real inverted"],
        answer: 3,
        explanation: "Step 1: Given $f = +10 \\text{ cm}$ and $d_{o} = +30 \\text{ cm}$ for a converging lens. Step 2: Governing laws are $1/f = 1/d_{o}+1/d_{i}$ and $m = -d_{i}/d_{o}$. Step 3: Key equation: $$\\frac{1}{d_{i}} = \\frac{1}{10}-\\frac{1}{30} = \\frac{2}{30}.$$ Step 4: Numerics give $d_{i} = +15 \\text{ cm}$ with $m = -15/30 = -0.50$; the positive sign lands on the opposite side, real and inverted. Step 5: Distractors fail because $7.5$ halves the fraction result, the negative choice flips the real side, and $30$ copies the object distance. Step 6: Conclude the lens gives **$d_{i} = +15 \\text{ cm}$ with $m = -0.50$**."
      },
      // PYQ-pattern — apparent depth (rephrased, values changed)
      {
        q: "A coin lies $12 \\text{ cm}$ below a water surface of index $n = 1.33$. Viewed from nearly overhead, its apparent depth is:",
        options: ["$16 \\text{ cm}$", "$9.0 \\text{ cm}$", "$12 \\text{ cm}$", "$4.5 \\text{ cm}$"],
        answer: 1,
        explanation: "Step 1: Given real depth $h = 12 \\text{ cm}$ and $n = 1.33$ for near-normal viewing. Step 2: Governing law for small angles is $h_{app} = h/n$, since rays bend away from the normal on exit. Step 3: Key equation: $$h_{app} = \\frac{12}{1.33}.$$ Step 4: Numerics give $h_{app} \\approx 9.0 \\text{ cm}$; units stay $\\text{cm}$ and the image must rise above the object. Step 5: Distractors fail because $16$ multiplies by $n$ instead of dividing, $12$ ignores refraction, and $4.5$ halves once more. Step 6: Conclude the coin appears lifted to **$9.0 \\text{ cm}$** below the surface."
      },
      // PYQ-pattern — contact lens combination (rephrased, values changed)
      {
        q: "Lenses $f_{1} = +25 \\text{ cm}$ and $f_{2} = -50 \\text{ cm}$ are cemented in contact. The combination power is:",
        options: ["$+2.0 \\text{ D}$", "$-2.0 \\text{ D}$", "$+6.0 \\text{ D}$", "$0$"],
        answer: 0,
        explanation: "Step 1: Given $f_{1} = +0.25 \\text{ m}$ and $f_{2} = -0.50 \\text{ m}$ in contact. Step 2: Governing law adds powers, $P = P_{1}+P_{2}$ with $P = 1/f$. Step 3: Key equation: $$P = \\frac{1}{0.25}+\\frac{1}{-0.50} = 4.0-2.0.$$ Step 4: Numerics give $P = +2.0 \\text{ D}$; diopters are $\\text{m}^{-1}$ and the positive sign means net converging. Step 5: Distractors fail because $-2.0$ flips the dominant lens, $+6.0$ adds the focal lengths instead of powers, and $0$ assumes exact cancellation. Step 6: Conclude the doublet has power **$+2.0 \\text{ D}$**."
      }
    ]
  }
];
