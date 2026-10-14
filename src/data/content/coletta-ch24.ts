import type { SectionContent } from '../library'

// ============================================================================
// Vincent Coletta — Physics Fundamentals, 2nd edition (2010)
// Chapter 24: Geometrical Optics (Sections 24.1 – 24.3)
// Master study content at exam depth. Math is KaTeX via $...$.
// ============================================================================

export const colettaCh24Content: SectionContent[] = [
  {
    sectionId: "coletta-ch24-s1",
    readingTime: 5,
    intro: "A flat mirror swaps front and back while keeping size and speed of light timing. Coletta traces plane-mirror images with the law of reflection and locates them as far behind as the object is in front. Two mirrors angle-multiply the effect.",
    objectives: [
      "Locate plane-mirror images at equal distance behind with $h_{i} = h_{o}$",
      "Trace chief rays to prove virtual, upright, same-size images",
      "Predict image counts for angled mirror pairs"
    ],
    concepts: [
      {
        term: "Virtual image",
        kind: "definition",
        statement: "A **virtual** image forms where reflected rays only seem to meet behind the mirror; no light exists there and no screen catches it.",
        detail: "Your mirror twin is virtual: rays diverge from the surface as if from behind it."
      },
      {
        term: "Plane-mirror imaging",
        kind: "theorem",
        statement: "Plane mirrors give $d_{i} = -d_{o}$ (behind), magnification $m = +1$: upright, same size, laterally reversed.",
        detail: "A $1.7$ m person needs only a $0.85$ m mirror hung halfway up to see all of themselves."
      },
      {
        term: "Ray-tracing method",
        kind: "method",
        statement: "Draw two rays (e.g. perpendicular-to-mirror and to the top edge), reflect each with $\\theta_{r} = \\theta_{i}$, and extend backward to their crossing.",
        detail: "The crossing sits symmetrically behind because each reflection preserves the transverse geometry."
      },
      {
        term: "Lateral reversal",
        kind: "insight",
        statement: "Mirrors reverse **front-back**, not left-right: text looks flipped because we mentally rotate ourselves into the image.",
        detail: "Raising your right hand raises the image's left only from your viewpoint facing it."
      },
      {
        term: "Angled mirrors",
        kind: "theorem",
        statement: "Two mirrors at angle $\\phi$ give $N = 360^{\\circ}/\\phi - 1$ images (for divisors of $360^{\\circ}$), multiplying reflections.",
        detail: "A $90^{\\circ}$ corner shows $3$ images; parallel mirrors show infinite regress fading with each bounce." }
    ],
    figures: [
      {
        caption: "Plane mirror: reflected rays diverge as if from $d_{i} = -d_{o}$ behind",
        svg: '<svg role="img" aria-label="Plane mirror: reflected rays diverge as if from d_i = -d_o behind" viewBox="0 0 400 150" width="100%" height="150"><line x1="200" y1="10" x2="200" y2="140" stroke="currentColor" stroke-width="3"/><circle cx="120" cy="60" r="5" fill="currentColor"/><line x1="120" y1="60" x2="200" y2="60" stroke="currentColor" stroke-width="1.6"/><line x1="200" y1="60" x2="300" y2="30" stroke="currentColor" stroke-width="1.6"/><line x1="120" y1="60" x2="200" y2="90" stroke="currentColor" stroke-width="1.2" opacity="0.7"/><line x1="200" y1="90" x2="300" y2="110" stroke="currentColor" stroke-width="1.2" opacity="0.7"/><line x1="200" y1="60" x2="280" y2="60" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><circle cx="280" cy="60" r="5" fill="none" stroke="currentColor" stroke-width="2"/><text x="280" y="85" text-anchor="middle" font-size="11" fill="currentColor">image</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Minimum mirror height",
        problem: "A $1.80$ m person stands $2.0$ m from a wall mirror. How tall must it be to show head to toe?",
        steps: [
          { label: "Geometry", text: "Rays from head and feet to the eyes bisect the $2.0$ m depth, needing half the body height." },
          { label: "Height", text: "$1.80/2 = 0.90$ m of mirror." },
          { label: "Placement", text: "Top edge halfway between eyes and head-top; distance to mirror cancels out." }
        ],
        result: "$0.90$ m tall, independent of standing distance."
      },
      {
        title: "Corner mirrors",
        problem: "Two mirrors meet at $60^{\\circ}$. How many images of a coin between them appear?",
        steps: [
          { label: "Formula", text: "$N = 360/60 - 1 = 5$." },
          { label: "Check", text: "$60^{\\circ}$ divides $360^{\\circ}$, so the formula applies directly." },
          { label: "Pattern", text: "Five coins ring the corner, one direct pair plus multiple-bounce ghosts." }
        ],
        result: "$5$ images."
      }
    ],
    keyTakeaways: [
      "Plane images sit as far behind as objects are in front with $m = +1$.",
      "Images are virtual: backward ray extensions, no screen possible.",
      "Angled pairs multiply images as $360/\\phi - 1$."
    ],
    quiz: [
      {
        q: "Object $3.0$ m before a plane mirror. Image distance from the object is:",
        options: ["Zero", "$1.5$ m", "$3.0$ m", "$6.0$ m"],
        answer: 3,
        explanation: "Image is $3.0$ m behind, so object-to-image spans $6.0$ m."
      },
      {
        q: "Plane-mirror magnification is:",
        options: ["$+1$", "$-1$", "$+2$", "$-1/2$"],
        answer: 0,
        explanation: "Upright and same size means $m = +1$."
      },
      {
        q: "Parallel facing mirrors produce:",
        options: ["Two images", "Infinite fading images", "No image", "One image"],
        answer: 1,
        explanation: "Each mirror re-images the other's images without end, dimming per bounce."
      }
    ]
  },
  {
    sectionId: "coletta-ch24-s2",
    readingTime: 7,
    intro: "Curved mirrors focus: concave mirrors converge and convex mirrors diverge, both obeying $1/f = 1/d_{o} + 1/d_{i}$ with $f = R/2$. Coletta pairs the equation with three principal rays so diagrams check arithmetic. Shaving mirrors and store domes are the two signs of $f$.",
    objectives: [
      "Apply the mirror equation with sign conventions and $m = -d_{i}/d_{o}$",
      "Trace parallel, focal, and central rays for concave and convex mirrors",
      "Distinguish real-inverted from virtual-upright cases"
    ],
    concepts: [
      {
        term: "Focal length",
        kind: "definition",
        statement: "Spherical mirrors focus parallel rays at $f = R/2$: **concave** ($+$) converges in front while **convex** ($-$) diverges behind.",
        detail: "A $40$ cm radius concave mirror focuses at $20$ cm; the convex twin diverges as if from $20$ cm behind."
      },
      {
        term: "Mirror equation",
        kind: "theorem",
        statement: "With light traveling left to right, $1/f = 1/d_{o} + 1/d_{i}$ and $m = h_{i}/h_{o} = -d_{i}/d_{o}$: negative $d_{i}$ means virtual behind.",
        detail: "Object at $30$ cm before $f = 20$ cm concave gives $d_{i} = 60$ cm real with $m = -2$."
      },
      {
        term: "Principal rays",
        kind: "method",
        statement: "Trace **parallel-to-focus**, **focus-to-parallel**, and **center-straight** rays; any two locate the image and the third audits it.",
        detail: "For convex mirrors all three diverge in front and meet behind, forcing virtual reduced images always."
      },
      {
        term: "Real versus virtual",
        kind: "insight",
        statement: "Concave mirrors make **real inverted** images beyond $f$ (screens catch them) and **virtual magnified** ones inside $f$ (shaving mirrors).",
        detail: "Crossing $f$ flips the image from huge-virtual to huge-real, the dentist's working edge."
      },
      {
        term: "Spherical aberration",
        kind: "insight",
        statement: "Marginal rays focus short of paraxial ones on spheres, blurring wide apertures; parabolas fix it for telescopes and headlights.",
        detail: "Stopping down or parabolizing restores the crisp $f = R/2$ focus." }
    ],
    figures: [
      {
        caption: "Concave mirror with $f = R/2$: parallel ray through $F$, focal ray to parallel",
        svg: '<svg role="img" aria-label="Concave mirror with f = R/2: parallel ray through F, focal ray to parallel" viewBox="0 0 400 150" width="100%" height="150"><path d="M90,10 C70,50 70,100 90,140" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="170" cy="75" r="4" fill="currentColor"/><text x="170" y="95" text-anchor="middle" font-size="11" fill="currentColor">F</text><circle cx="250" cy="75" r="4" fill="currentColor" opacity="0.6"/><text x="250" y="95" text-anchor="middle" font-size="11" fill="currentColor">C</text><line x1="20" y1="50" x2="82" y2="50" stroke="currentColor" stroke-width="1.6"/><line x1="82" y1="50" x2="260" y2="100" stroke="currentColor" stroke-width="1.6"/><line x1="20" y1="100" x2="82" y2="100" stroke="currentColor" stroke-width="1.2" opacity="0.7"/><line x1="82" y1="100" x2="260" y2="52" stroke="currentColor" stroke-width="1.2" opacity="0.7"/></svg>',
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Concave image",
        problem: "An object sits $30$ cm before a concave mirror of $f = 20$ cm. Find image position and magnification.",
        steps: [
          { label: "Mirror equation", text: "$1/d_{i} = 1/20 - 1/30 = (3 - 2)/60 = 1/60$, so $d_{i} = 60$ cm." },
          { label: "Magnification", text: "$m = -60/30 = -2.0$." },
          { label: "Describe", text: "Real, inverted, doubled, $60$ cm in front; a screen catches it." }
        ],
        result: "$d_{i} = 60$ cm, $m = -2.0$."
      },
      {
        title: "Convex store mirror",
        problem: "A convex mirror has $f = -40$ cm. An object at $120$ cm: find the image.",
        steps: [
          { label: "Equation", text: "$1/d_{i} = 1/(-40) - 1/120 = (-3 - 1)/120 = -4/120$, so $d_{i} = -30$ cm." },
          { label: "Magnification", text: "$m = -(-30)/120 = +0.25$." },
          { label: "Describe", text: "Virtual, upright, quarter-size, $30$ cm behind the surface." }
        ],
        result: "$d_{i} = -30$ cm, $m = +0.25$."
      }
    ],
    keyTakeaways: [
      "Mirror equation $1/f = 1/d_{o} + 1/d_{i}$ with $f = R/2$ sorts all cases.",
      "Three principal rays cross-check every calculation.",
      "Concave spans real-to-virtual; convex stays virtual and reduced."
    ],
    quiz: [
      {
        q: "Object at $C$ ($d_{o} = R$) of a concave mirror images at:",
        options: ["Infinity", "Behind the mirror", "$F$", "$C$ inverted same size"],
        answer: 3,
        explanation: "$1/d_{i} = 2/R - 1/R = 1/R$ gives $d_{i} = R$ with $m = -1$."
      },
      {
        q: "Convex mirror images are always:",
        options: ["At infinity", "Real and magnified", "Virtual, upright, reduced", "Real and upright"],
        answer: 2,
        explanation: "Negative $f$ forces negative $d_{i}$ with $|m| < 1$ for positive $d_{o}$."
      },
      {
        q: "An object inside $f$ of a concave mirror gives:",
        options: ["Real reduced", "Virtual magnified upright", "No image", "Inverted same size"],
        answer: 1,
        explanation: "The equation returns negative $d_{i}$ with $m > +1$, the shaving-mirror case."
      }
    ]
  },
  {
    sectionId: "coletta-ch24-s3",
    readingTime: 7,
    intro: "Lenses refract rather than reflect but obey the same equation $1/f = 1/d_{o} + 1/d_{i}$ with new sign rules. Coletta covers converging versus diverging lenses, ray trios, and stacked combinations. Cameras, eyes, and projectors are thin-lens systems.",
    objectives: [
      "Apply the thin-lens equation and $m = -d_{i}/d_{o}$ with lens sign rules",
      "Trace the three principal rays for converging and diverging lenses",
      "Combine two lenses by imaging stepwise"
    ],
    concepts: [
      {
        term: "Converging versus diverging",
        kind: "definition",
        statement: "**Converging** ($+$) lenses are thick-centered and focus parallel rays at $+f$; **diverging** ($-$) lenses are thin-centered with virtual focus $-f$.",
        detail: "Magnifiers and objectives converge; peepholes and myopia glasses diverge."
      },
      {
        term: "Thin-lens equation",
        kind: "theorem",
        statement: "$1/f = 1/d_{o} + 1/d_{i}$ with $m = -d_{i}/d_{o}$: positive $d_{i}$ is real (opposite side), negative is virtual (same side).",
        detail: "A $10$ cm converging lens with object at $15$ cm gives $d_{i} = 30$ cm and $m = -2$."
      },
      {
        term: "Lens ray trio",
        kind: "method",
        statement: "Trace **parallel-to-far-focus**, **near-focus-to-parallel**, and **center-straight** rays to pin the image.",
        detail: "The center ray passes unbent through the thin middle, anchoring every diagram."
      },
      {
        term: "Lensmaker form",
        kind: "theorem",
        statement: "Surface curves set power: $1/f = (n - 1)(1/R_{1} - 1/R_{2})$, so symmetric $R$ biconvex glass ($n = 1.5$) gives $f = R$.",
        detail: "Flatter curves or lower $n$ lengthen $f$; opticians grind $R$ to prescription."
      },
      {
        term: "Two-lens combinations",
        kind: "method",
        statement: "Image the object through lens 1, then use that image (real or virtual) as the object for lens 2 with separation-corrected $d_{o2}$.",
        detail: "Total magnification multiplies: $m = m_{1}m_{2}$, the microscope and telescope engine." }
    ],
    examples: [
      {
        title: "Projector lens",
        problem: "A converging lens $f = 10$ cm projects a slide at $d_{o} = 12$ cm. Find the screen distance and magnification.",
        steps: [
          { label: "Image", text: "$1/d_{i} = 1/10 - 1/12 = (6 - 5)/60 = 1/60$, so $d_{i} = 60$ cm." },
          { label: "Magnification", text: "$m = -60/12 = -5.0$." },
          { label: "Describe", text: "Real inverted $5\\times$ image $60$ cm past the lens." }
        ],
        result: "$d_{i} = 60$ cm, $m = -5.0$."
      },
      {
        title: "Diverging lens",
        problem: "A diverging lens $f = -15$ cm views an object at $30$ cm. Find the image.",
        steps: [
          { label: "Equation", text: "$1/d_{i} = 1/(-15) - 1/30 = (-2 - 1)/30 = -3/30$, so $d_{i} = -10$ cm." },
          { label: "Magnification", text: "$m = -(-10)/30 = +1/3$." },
          { label: "Describe", text: "Virtual upright third-size, $10$ cm on the object side." }
        ],
        result: "$d_{i} = -10$ cm, $m = +0.33$."
      }
    ],
    keyTakeaways: [
      "Thin lenses share the mirror equation with refractor sign rules.",
      "Parallel, focal, and central rays triangulate every image.",
      "Stacks multiply magnifications through sequential imaging."
    ],
    quiz: [
      {
        q: "Converging lens with $d_{o} = 2f$ gives image at:",
        options: ["$2f$ with $m = -1$", "$-f$", "Infinity", "$f$"],
        answer: 0,
        explanation: "$1/d_{i} = 1/f - 1/2f = 1/2f$ gives $d_{i} = 2f$ and $m = -1$."
      },
      {
        q: "Diverging lens images are always:",
        options: ["Magnified real", "At $2f$", "Real", "Virtual, upright, reduced"],
        answer: 3,
        explanation: "Negative $f$ forces same-side virtual images with $|m| < 1$."
      },
      {
        q: "Two lenses give $m_{1} = -2$ and $m_{2} = -3$. Total magnification is:",
        options: ["$+5$", "$-5$", "$+6$", "$-6$"],
        answer: 2,
        explanation: "Sequential imaging multiplies: $(-2)(-3) = +6$, upright overall."
      },
      {
        q: "Center ray through a thin lens:",
        options: ["Bends to focus", "Passes straight", "Reflects back", "Stops"],
        answer: 1,
        explanation: "The thin center acts as a parallel slab of negligible shift."
      }
    ]
  }
]
