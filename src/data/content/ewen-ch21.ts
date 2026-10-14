import type { SectionContent } from "../library"

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition, Chapter 21
// Reflection and Refraction (Sections 21.1 – 21.10)
// ============================================================================

export const ewenCh21Content: SectionContent[] = [
  {
    sectionId: "ewen-ch21-s1",
    readingTime: 5,
    intro: "Mirrors image by reflection and lenses by refraction, but both start from one law: angle in equals angle out. This section states the law of reflection, distinguishes specular from diffuse reflection, and traces the ray-diagram conventions used all chapter.",
    objectives: [
      "State the law of reflection ($\\theta_{i} = \\theta_{r}$ from the normal)",
      "Distinguish specular from diffuse reflection",
      "Trace incident, reflected, and normal rays with correct notation",
    ],
    concepts: [
      {
        term: "Law of reflection",
        kind: "law",
        statement: "Incident ray, normal, and reflected ray are coplanar with $\\theta_{i} = \\theta_{r}$, angles measured from the normal.",
        detail: "Periscopes, retroreflectors, and kaleidoscopes are repeated applications of this one equality.",
      },
      {
        term: "Specular versus diffuse",
        kind: "definition",
        statement: "Smooth surfaces reflect specularly (parallel in, parallel out); rough surfaces scatter diffusely in all directions.",
        detail: "Paper reads by diffuse reflection; mirrors image by specular reflection.",
      },
      {
        term: "Real versus virtual rays",
        kind: "definition",
        statement: "Real rays carry energy; virtual (dashed) rays are backward extensions locating virtual images.",
        detail: "Every virtual image in this chapter is found by extending diverging rays behind the mirror.",
      },
      {
        term: "Normal convention",
        kind: "notation",
        statement: "The normal is the perpendicular at the strike point; all reflection and refraction angles reference it, never the surface.",
        detail: "Misreading from the surface is the most common ray-diagram error.",
      },
      {
        term: "Reversibility",
        kind: "insight",
        statement: "Ray paths reverse: any reflected path retraces if the arrow flips.",
        detail: "If you see someone's eyes in a mirror, they see yours — same path, opposite arrow.",
      },
    ],
    figures: [
      {
        caption: "Law of reflection: $\\theta_{i} = \\theta_{r}$ from the normal; incident, normal, and reflected rays are coplanar.",
        svg: "<svg role='img' aria-label='Law of reflection: theta_i = theta_r from the normal; incident, normal, and reflected rays are coplanar.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"40\" y1=\"150\" x2=\"360\" y2=\"150\" stroke-width=\"4\"/><line x1=\"200\" y1=\"150\" x2=\"200\" y2=\"40\" stroke-dasharray=\"5 4\"/><line x1=\"200\" y1=\"150\" x2=\"120\" y2=\"60\"/><line x1=\"200\" y1=\"150\" x2=\"280\" y2=\"60\"/><path d=\"M175 120 A35 35 0 0 1 158 100\"/><path d=\"M225 120 A35 35 0 0 0 242 100\"/><text x=\"130\" y=\"55\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">incident</text><text x=\"250\" y=\"55\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">reflected</text><text x=\"208\" y=\"80\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">normal</text></svg>",
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Periscope deviation",
        problem: "A ray strikes a $45.0^{\\circ}$ mirror (to the beam), then a second parallel mirror. Find the total deviation.",
        steps: [
          { label: "Step 1: Each reflection", text: "Each $45.0^{\\circ}$ incidence deviates the beam $90.0^{\\circ}$." },
          { label: "Step 2: Pair", text: "Two $90.0^{\\circ}$ turns in the same sense displace the beam parallel, deviation $180^{\\circ}$ total with zero net rotation." },
        ],
        result: "Emerges parallel to entry, offset sideways.",
      },
      {
        title: "Glancing-angle conversion",
        problem: "A ray grazes a mirror at $15.0^{\\circ}$ to the surface. Find $\\theta_{i}$ from the normal.",
        steps: [
          { label: "Step 1: Complement", text: "$\\theta_{i} = 90.0 - 15.0 = 75.0^{\\circ}$; reflection leaves at $75.0^{\\circ}$ on the other side." },
        ],
        result: "$\\theta_{i} = \\theta_{r} = 75.0^{\\circ}$ from the normal.",
      },
    ],
    keyTakeaways: [
      "$\\theta_{i} = \\theta_{r}$ from the normal, coplanar rays.",
      "Specular mirrors image; diffuse surfaces illuminate.",
      "Virtual rays (dashed) locate virtual images behind optics.",
    ],
    quiz: [
      {
        q: "A ray strikes a mirror at $30^{\\circ}$ from the normal. The reflected ray makes with the normal:",
        options: ["$60^{\\circ}$", "$30^{\\circ}$", "$15^{\\circ}$", "$90^{\\circ}$"],
        answer: 1,
        explanation: "Law of reflection: $\\theta_{r} = \\theta_{i} = 30^{\\circ}$.",
      },
      {
        q: "You see print by diffuse reflection because paper:",
        options: ["Is a mirror", "Scatters light in all directions", "Emits its own light", "Polarizes light"],
        answer: 1,
        explanation: "Rough fibers randomize ray directions, so every seat sees the page.",
      },
      {
        q: "Angles in reflection are measured from:",
        options: ["The surface", "The normal", "The horizon", "The ray itself"],
        answer: 1,
        explanation: "Always the perpendicular at the point of incidence.",
      },
    ],
  },
  {
    sectionId: "ewen-ch21-s2",
    readingTime: 5,
    intro: "A flat mirror forms a life-size image as far behind the glass as you stand before it. This section locates plane-mirror images by ray extension, proves object–image symmetry, and sizes dressing mirrors at half height.",
    objectives: [
      "Locate plane-mirror images (virtual, upright, same size, same distance behind)",
      "Trace the two-ray construction for any object point",
      "Size and place a half-height mirror for a full-length view",
    ],
    concepts: [
      {
        term: "Plane-mirror image",
        kind: "theorem",
        statement: "The image is virtual, upright, unmagnified ($M = +1$), and as far behind the mirror as the object is in front.",
        detail: "Diverging reflected rays extended backward meet at the image point.",
      },
      {
        term: "Two-ray construction",
        kind: "method",
        statement: "Trace one ray to the mirror perpendicular (returns on itself) and one oblique ($\\theta_{i} = \\theta_{r}$); extend both behind to intersect.",
        detail: "Two rays fix the image; a third checks the drafting.",
      },
      {
        term: "Lateral reversal",
        kind: "insight",
        statement: "Mirrors reverse front-to-back, not left-to-right; the apparent left swap comes from facing the image.",
        detail: "Raising your right hand raises the image's left-side hand from your viewpoint.",
      },
      {
        term: "Half-height mirror rule",
        kind: "theorem",
        statement: "A mirror half your height, hung with its top halfway between your eyes and head-top, shows your full length.",
        detail: "Walking closer or farther never changes the framing — similar triangles scale together.",
      },
      {
        term: "Multiple mirrors",
        kind: "insight",
        statement: "Angled mirrors multiply images ($n \\approx 360/\\theta - 1$); parallel mirrors recurse toward infinity.",
        detail: "Barbershop infinity and kaleidoscopes are repeated plane imaging.",
      },
    ],
    examples: [
      {
        title: "Image distance check",
        problem: "A lamp stands $1.20 \\text{ m}$ before a plane mirror. Where is its image and what is $M$?",
        steps: [
          { label: "Step 1: Locate", text: "$1.20 \\text{ m}$ behind the mirror on the normal through the lamp." },
          { label: "Step 2: Magnification", text: "$M = +1$: same size, upright, virtual." },
        ],
        result: "$1.20 \\text{ m}$ behind; $M = +1$ virtual.",
      },
      {
        title: "Hanging a full-length mirror",
        problem: "A $1.80 \\text{ m}$ person has eyes at $1.68 \\text{ m}$. Find minimum mirror height and hang position.",
        steps: [
          { label: "Step 1: Height", text: "Half of $1.80 = 0.900 \\text{ m}$." },
          { label: "Step 2: Position", text: "Top at $(1.68 + 1.80)/2 = 1.74 \\text{ m}$; bottom at $1.74 - 0.900 = 0.840 \\text{ m}$." },
        ],
        result: "$0.900 \\text{ m}$ mirror from $0.840$ to $1.74 \\text{ m}$ high.",
      },
    ],
    keyTakeaways: [
      "Plane images: virtual, upright, $M = +1$, symmetric behind the mirror.",
      "Two rays (normal + oblique) locate any image point.",
      "Half-height mirrors show full length at any distance.",
    ],
    quiz: [
      {
        q: "You stand $2.0 \\text{ m}$ from a plane mirror. Your image is:",
        options: ["$2.0 \\text{ m}$ behind, same size", "$4.0 \\text{ m}$ behind, doubled", "On the surface", "$2.0 \\text{ m}$ in front of you"],
        answer: 0,
        explanation: "Symmetric imaging: equal distance behind, unit magnification.",
      },
      {
        q: "A plane mirror's image is best described as:",
        options: ["Real, inverted", "Virtual, upright, same size", "Real, magnified", "Virtual, inverted"],
        answer: 1,
        explanation: "Backward extensions meet behind the glass — virtual and erect with $M = +1$.",
      },
      {
        q: "Word AMBULANCE is painted mirrored on vehicles so that:",
        options: ["Drivers see it correctly in mirrors", "It looks artistic", "Pedestrians read it directly", "Headlights reflect better"],
        answer: 0,
        explanation: "The driver's mirror reverses it back to normal reading order.",
      },
    ],
  },
  {
    sectionId: "ewen-ch21-s3",
    readingTime: 6,
    intro: "A concave mirror can focus headlight beams or project a magnified shaving image — power set by the focal point. This section defines center, focus ($f = R/2$), and the three principal rays, and classifies images by object position.",
    objectives: [
      "Define $C$, $F$, $f = R/2$ for concave mirrors",
      "Trace parallel–focal, focal–parallel, and central rays",
      "Predict image type from object zones (beyond C, at C, between, inside F)",
    ],
    concepts: [
      {
        term: "Concave geometry",
        kind: "definition",
        statement: "The mirror caves inward with center of curvature $C$ at radius $R$ and focal point $F$ halfway in: $f = R/2$.",
        detail: "Parallel rays converge (ideally) at $F$; the axis runs through $C$ and the vertex.",
      },
      {
        term: "Three principal rays",
        kind: "method",
        statement: "Parallel→$F$; through-$F$→parallel; through-$C$→back on itself. Any two locate the image.",
        detail: "Draft these straight with a ruler; curves invite errors.",
      },
      {
        term: "Image zones",
        kind: "theorem",
        statement: "Beyond $C$: real, inverted, reduced (between $F$ and $C$). At $C$: same-size inverted. Between $F$ and $C$: real, inverted, enlarged. Inside $F$: virtual, upright, enlarged.",
        detail: "This zone table answers every qualitative concave question.",
      },
      {
        term: "Focusing versus imaging",
        kind: "insight",
        statement: "Headlights place the filament at $F$ to throw parallel beams; telescopes place sensors past $F$ to catch real images.",
        detail: "Same mirror, opposite light direction — reversibility again.",
      },
      {
        term: "Spherical aberration note",
        kind: "insight",
        statement: "Spherical mirrors focus perfectly only paraxially; wide beams blur — paraboloids fix headlights and telescopes.",
        detail: "Stay near the axis in ray diagrams to keep the ideal rules exact.",
      },
    ],
    figures: [
      {
        caption: "Concave mirror: parallel ray through $F$, focal ray to parallel, central ray back — meeting at the real image.",
        svg: "<svg role='img' aria-label='Concave mirror: parallel ray through F, focal ray to parallel, central ray back — meeting at the real image.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M320 20 Q280 100 320 180\"/><circle cx=\"200\" cy=\"100\" r=\"4\" fill=\"currentColor\"/><circle cx=\"140\" cy=\"100\" r=\"4\" fill=\"currentColor\"/><line x1=\"40\" y1=\"60\" x2=\"310\" y2=\"60\"/><line x1=\"310\" y1=\"60\" x2=\"140\" y2=\"140\"/><line x1=\"40\" y1=\"140\" x2=\"310\" y2=\"140\"/><line x1=\"310\" y1=\"140\" x2=\"140\" y2=\"60\"/><text x=\"195\" y=\"120\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">F</text><text x=\"130\" y=\"120\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">C</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Headlight filament at F",
        problem: "A concave headlight mirror has $R = 20.0 \\text{ cm}$. Where must the filament sit for a parallel beam?",
        steps: [
          { label: "Step 1: Focal length", text: "$f = R/2 = 10.0 \\text{ cm}$ in front of the vertex." },
        ],
        result: "Filament at $F$, $10.0 \\text{ cm}$ out — rays leave parallel.",
      },
      {
        title: "Object beyond C",
        problem: "An object stands $60.0 \\text{ cm}$ before a concave mirror with $f = 20.0 \\text{ cm}$. Predict the image type (compute next section).",
        steps: [
          { label: "Step 1: Zone", text: "$C = 40.0 \\text{ cm}$; object beyond $C$ gives real, inverted, reduced between $F$ and $C$." },
        ],
        result: "Real inverted reduced image $24$–$40 \\text{ cm}$ out (exact $30.0 \\text{ cm}$ by formula).",
      },
    ],
    keyTakeaways: [
      "$f = R/2$; three principal rays locate every image.",
      "Object zones fix image type without arithmetic.",
      "Filament at $F$ throws beams; sensor past $F$ catches images.",
    ],
    quiz: [
      {
        q: "A concave mirror has $R = 30 \\text{ cm}$. Its focal length is:",
        options: ["$30 \\text{ cm}$", "$15 \\text{ cm}$", "$60 \\text{ cm}$", "$7.5 \\text{ cm}$"],
        answer: 1,
        explanation: "$f = R/2 = 15 \\text{ cm}$.",
      },
      {
        q: "An object inside $F$ of a concave mirror gives:",
        options: ["Real inverted reduced", "Virtual upright enlarged", "No image", "Real same-size"],
        answer: 1,
        explanation: "The shaving-mirror case: diverging rays extend behind to a big erect virtual image.",
      },
      {
        q: "A ray through $C$ striking a concave mirror reflects:",
        options: ["Through $F$", "Back on itself", "Parallel to the axis", "At $45^{\\circ}$"],
        answer: 1,
        explanation: "Through-center means normal incidence — it retraces its path.",
      },
    ],
  },
  {
    sectionId: "ewen-ch21-s4",
    readingTime: 5,
    intro: "Convex mirrors bulge out and always show a small erect image with a wide field — the security and side-mirror choice. This section traces the diverging principal rays and explains the “objects are closer” warning.",
    objectives: [
      "Trace convex rays (parallel diverges from $F$ behind; aimed-at-$C$ returns)",
      "State the universal convex result: virtual, upright, reduced",
      "Explain wide-field applications and distance illusion",
    ],
    concepts: [
      {
        term: "Convex geometry",
        kind: "definition",
        statement: "The mirror bulges toward the object; $F$ and $C$ sit virtually behind the surface ($f$ negative in formula sign).",
        detail: "Parallel rays diverge as if from the behind-mirror $F$.",
      },
      {
        term: "Universal convex image",
        kind: "theorem",
        statement: "Any real object gives a virtual, upright, reduced image between mirror and $F$.",
        detail: "No object position produces a real or enlarged image — the safety-mirror guarantee.",
      },
      {
        term: "Diverging-ray construction",
        kind: "method",
        statement: "Parallel ray reflects as if from $F$; ray aimed at $C$ hits normally and returns; extend both behind to meet.",
        detail: "All construction lines behind the mirror are dashed virtual rays.",
      },
      {
        term: "Wide field of view",
        kind: "insight",
        statement: "Convex mirrors compress a broad scene onto a small image — blind-spot, aisle, and driveway coverage.",
        detail: "Compression is the price: minified images read as farther away.",
      },
      {
        term: "Distance illusion",
        kind: "insight",
        statement: "Drivers judge distance by familiar image size; minified cars look farther — hence the etched warning.",
        detail: "Aspheric driver-side glass blends true and wide views to compensate.",
      },
    ],
    examples: [
      {
        title: "Store security mirror",
        problem: "A convex mirror has $f = -40.0 \\text{ cm}$. An object stands $300 \\text{ cm}$ out. Predict image character and estimate size ratio (formula next section).",
        steps: [
          { label: "Step 1: Type", text: "Virtual, upright, reduced behind the mirror." },
          { label: "Step 2: Rough scale", text: "Far object images hug $F$: about $35 \\text{ cm}$ behind, $M \\approx 0.12$." },
        ],
        result: "Tiny erect virtual image near $F$ — whole aisle visible.",
      },
      {
        title: "Passenger-mirror warning",
        problem: "Explain why the passenger mirror warns that objects are closer than they appear.",
        steps: [
          { label: "Step 1: Minification", text: "Convex $M < 1$ shrinks the car's image." },
          { label: "Step 2: Brain cue", text: "The visual system reads small as far, underestimating proximity by roughly $1/M$." },
        ],
        result: "Minified virtual image mimics greater distance — check over the shoulder.",
      },
    ],
    keyTakeaways: [
      "Convex always gives virtual, upright, reduced images near the mirror.",
      "Parallel rays diverge from the virtual $F$ behind.",
      "Wide view trades against minified, farther-looking images.",
    ],
    quiz: [
      {
        q: "A convex mirror's image of a real object is always:",
        options: ["Real and inverted", "Virtual, upright, reduced", "Real and enlarged", "Virtual and enlarged"],
        answer: 1,
        explanation: "Diverging geometry forces the image between mirror and virtual $F$, minified.",
      },
      {
        q: "Store mirrors are convex because they:",
        options: ["Magnify faces", "Widen the field of view", "Project real images", "Work only in the dark"],
        answer: 1,
        explanation: "Compression fits whole aisles into one glance.",
      },
      {
        q: "A ray aimed at the convex mirror's $C$ reflects:",
        options: ["Through $F$", "Back along itself", "Parallel to the axis", "Into the mirror"],
        answer: 1,
        explanation: "Aimed-at-center means normal incidence at the surface.",
      },
    ],
  },
  {
    sectionId: "ewen-ch21-s5",
    readingTime: 7,
    intro: "The mirror formula $1/f = 1/d_{o} + 1/d_{i}$ with $M = h_{i}/h_{o} = -d_{i}/d_{o}$ turns ray zones into numbers. This section signs $f$, $d_{i}$ correctly, solves concave and convex cases, and checks answers against the zone table.",
    objectives: [
      "Apply $1/f = 1/d_{o} + 1/d_{i}$ with concave $f > 0$, convex $f < 0$",
      "Compute $M = -d_{i}/d_{o}$ and read sign/magnitude for type",
      "Validate every answer against ray-zone expectations",
    ],
    concepts: [
      {
        term: "Mirror formula",
        kind: "theorem",
        statement: "$1/f = 1/d_{o} + 1/d_{i}$ with light-side distances positive; $f = R/2$ ($+$ concave, $-$ convex).",
        detail: "Positive $d_{i}$ means real (in front); negative means virtual (behind).",
      },
      {
        term: "Magnification",
        kind: "theorem",
        statement: "$M = h_{i}/h_{o} = -d_{i}/d_{o}$: sign gives erect ($+$) or inverted ($-$), $|M|$ gives size.",
        detail: "$M = -2$ is twice-size inverted; $M = +0.5$ is half-size erect.",
      },
      {
        term: "Sign routine",
        kind: "method",
        statement: "Concave $f > 0$, convex $f < 0$; $d_{o} > 0$ always (real object); solve, then read $d_{i}$ sign for real/virtual.",
        detail: "A negative $d_{i}$ is not an error — it is a virtual image behind the mirror.",
      },
      {
        term: "Zone cross-check",
        kind: "method",
        statement: "Every numeric answer must match the zone table (concave beyond-$C$ → reduced real, etc.).",
        detail: "Mismatch means a sign or reciprocal slip — recheck $1/d_{i} = 1/f - 1/d_{o}$.",
      },
      {
        term: " stamina: near–far limits",
        kind: "insight",
        statement: "Distant objects image at $F$ ($d_{i} \\to f$); objects at $F$ image at infinity (collimated).",
        detail: "Telescope primaries exploit the first; searchlights exploit the second.",
      },
    ],
    figures: [
      {
        caption: "Mirror sign map: light-side distances positive; $d_{i} > 0$ real in front, $d_{i} < 0$ virtual behind.",
        svg: "<svg role='img' aria-label='Mirror sign map: light-side distances positive; d_i > 0 real in front, d_i < 0 virtual behind.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><path d=\"M200 20 Q180 100 200 180\"/><line x1=\"200\" y1=\"100\" x2=\"380\" y2=\"100\"/><line x1=\"200\" y1=\"100\" x2=\"40\" y2=\"100\" stroke-dasharray=\"5 4\"/><circle cx=\"120\" cy=\"100\" r=\"4\" fill=\"currentColor\"/><circle cx=\"160\" cy=\"100\" r=\"4\" fill=\"currentColor\"/><text x=\"110\" y=\"120\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">F</text><text x=\"150\" y=\"120\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">C</text><text x=\"250\" y=\"90\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">real side do, di &gt; 0</text><text x=\"60\" y=\"90\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">virtual di &lt; 0</text></svg>",
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Concave projector image",
        problem: "A concave mirror has $f = 20.0 \\text{ cm}$. An object stands $60.0 \\text{ cm}$ out. Find $d_{i}$ and $M$.",
        steps: [
          { label: "Step 1: Solve", text: "$1/d_{i} = 1/20.0 - 1/60.0 = (3 - 1)/60.0 = 1/30.0$; $d_{i} = 30.0 \\text{ cm}$." },
          { label: "Step 2: Magnify", text: "$M = -30.0/60.0 = -0.500$." },
        ],
        result: "$30.0 \\text{ cm}$ in front; real, inverted, half-size — matches beyond-$C$ zone.",
      },
      {
        title: "Convex side-mirror number",
        problem: "A convex mirror has $f = -40.0 \\text{ cm}$; a car stands $d_{o} = 500 \\text{ cm}$ out. Find $d_{i}$ and $M$.",
        steps: [
          { label: "Step 1: Solve", text: "$1/d_{i} = 1/(-40.0) - 1/500 = -0.0270$; $d_{i} = -37.0 \\text{ cm}$." },
          { label: "Step 2: Magnify", text: "$M = -(-37.0)/500 = +0.0740$." },
        ],
        result: "$37.0 \\text{ cm}$ behind; virtual, upright, $7.4\\%$ size.",
      },
    ],
    keyTakeaways: [
      "$1/f = 1/d_{o}+1/d_{i}$; concave $f$ positive, convex negative.",
      "$M = -d_{i}/d_{o}$: sign reads erect/inverted, size reads magnification.",
      "Cross-check every number against the ray-zone table.",
    ],
    quiz: [
      {
        q: "Concave $f = 15 \\text{ cm}$, object at $45 \\text{ cm}$. Image distance is:",
        options: ["$11.25 \\text{ cm}$", "$22.5 \\text{ cm}$", "$30 \\text{ cm}$", "$60 \\text{ cm}$"],
        answer: 1,
        explanation: "$1/d_{i} = 1/15 - 1/45 = 2/45$; $d_{i} = 22.5 \\text{ cm}$ real.",
      },
      {
        q: "$d_{i} = -20 \\text{ cm}$ means the image is:",
        options: ["Real, $20 \\text{ cm}$ in front", "Virtual, $20 \\text{ cm}$ behind", "At infinity", "Nonexistent"],
        answer: 1,
        explanation: "Negative image distance sits on the non-light side — virtual.",
      },
      {
        q: "$M = -2.0$ describes an image that is:",
        options: ["Half-size erect", "Twice-size inverted", "Same-size erect", "Twice-size erect"],
        answer: 1,
        explanation: "Magnitude $2$ enlarges; minus inverts.",
      },
    ],
  },
  {
    sectionId: "ewen-ch21-s6",
    readingTime: 6,
    intro: "Light bends entering glass — refraction governed by Snell's law $n_{1}\\sin\\theta_{1} = n_{2}\\sin\\theta_{2}$. This section reads the index table, traces bends toward and away from the normal, and explains prisms, apparent depth, and mirages.",
    objectives: [
      "State Snell's law and the toward/away bending rule",
      "Compute refracted angles with $n$ table values",
      "Explain apparent depth, prism deviation, and dispersion",
    ],
    concepts: [
      {
        term: "Index of refraction",
        kind: "definition",
        statement: "$n = c/v$: vacuum $1.00$, water $1.33$, crown glass $1.52$, diamond $2.42$.",
        detail: "Higher $n$ means slower light and stronger bending.",
      },
      {
        term: "Snell's law",
        kind: "law",
        statement: "$n_{1}\\sin\\theta_{1} = n_{2}\\sin\\theta_{2}$, angles from the normal, rays coplanar.",
        detail: "Entering higher $n$ bends toward the normal; entering lower $n$ bends away.",
      },
      {
        term: "Bending rule",
        kind: "method",
        statement: "Toward normal when $n$ rises; away when $n$ falls — decide direction before computing.",
        detail: "Air→water bends down toward the normal; water→air bends up away.",
      },
      {
        term: "Apparent depth",
        kind: "insight",
        statement: "Rays from underwater bend away at exit, so objects look shallower ($\\approx$ real$/n$ overhead).",
        detail: "Pools look $3/4$-depth; spearfishers aim below the sight image.",
      },
      {
        term: "Dispersion",
        kind: "insight",
        statement: "$n$ varies slightly with $\\lambda$: prisms fan white into spectra, violet deviated most.",
        detail: "Lens designers cement doublets to cancel this chromatic spread.",
      },
    ],
    examples: [
      {
        title: "Air to water entry",
        problem: "Light strikes water ($n = 1.33$) from air at $\\theta_{1} = 45.0^{\\circ}$. Find $\\theta_{2}$.",
        steps: [
          { label: "Step 1: Snell", text: "$\\sin\\theta_{2} = (1.00 \\times \\sin 45.0^{\\circ})/1.33 = 0.7071/1.33 = 0.5317$." },
          { label: "Step 2: Invert", text: "$\\theta_{2} = 32.1^{\\circ}$ — toward the normal as expected." },
        ],
        result: "$32.1^{\\circ}$ in water.",
      },
      {
        title: "Glass slab deviation",
        problem: "Light enters crown glass ($n = 1.52$) at $60.0^{\\circ}$ from air. Find the internal angle.",
        steps: [
          { label: "Step 1: Snell", text: "$\\sin\\theta_{2} = \\sin 60.0^{\\circ}/1.52 = 0.8660/1.52 = 0.5697$." },
          { label: "Step 2: Invert", text: "$\\theta_{2} = 34.7^{\\circ}$." },
        ],
        result: "$34.7^{\\circ}$ inside (exits parallel, offset).",
      },
    ],
    keyTakeaways: [
      "$n_{1}\\sin\\theta_{1} = n_{2}\\sin\\theta_{2}$ from the normal.",
      "Higher $n$ pulls rays toward the normal; lower $n$ pushes away.",
      "Refraction shallows pools and fans prism spectra.",
    ],
    quiz: [
      {
        q: "Light passes air→glass. It bends:",
        options: ["Away from the normal", "Toward the normal", "Back on itself", "Not at all"],
        answer: 1,
        explanation: "$n$ rises ($1.00 \\to 1.52$), so rays bend toward the perpendicular.",
      },
      {
        q: "A fish viewed from directly above appears:",
        options: ["Deeper than real", "Shallower than real", "At true depth", "Mirror-reversed"],
        answer: 1,
        explanation: "Exiting rays bend away from the normal, projecting a raised virtual position.",
      },
      {
        q: "Prisms split white light because:",
        options: ["Glass is opaque", "$n$ depends slightly on wavelength", "Snell's law fails", "Light slows to zero"],
        answer: 1,
        explanation: "Violet's higher $n$ deviates most, fanning colors by $\\lambda$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch21-s7",
    readingTime: 5,
    intro: "Past the critical angle, refraction stops and all light reflects — total internal reflection. This section computes $\\sin\\theta_{c} = n_{2}/n_{1}$, and routes fiber optics, prisms, and diamond brilliance through it.",
    objectives: [
      "Derive and apply $\\sin\\theta_{c} = n_{2}/n_{1}$",
      "Explain fiber-optic guiding and endoscope bundles",
      "Account for prism reflectors and diamond sparkle",
    ],
    concepts: [
      {
        term: "Critical angle",
        kind: "theorem",
        statement: "Going to lower $n$, refraction reaches $90^{\\circ}$ at $\\sin\\theta_{c} = n_{2}/n_{1}$; beyond $\\theta_{c}$ reflection is total.",
        detail: "Water→air: $\\theta_{c} = 48.6^{\\circ}$; crown glass→air: $41.1^{\\circ}$; diamond→air: $24.4^{\\circ}$.",
      },
      {
        term: "Total internal reflection",
        kind: "law",
        statement: "Past $\\theta_{c}$ no refracted ray exists — $100\\%$ reflects inside, obeying $\\theta_{i} = \\theta_{r}$.",
        detail: "It needs internal incidence on a lower-$n$ boundary; outside incidence never totals.",
      },
      {
        term: "Fiber-optic guiding",
        kind: "insight",
        statement: "Clad fibers trap rays by repeated TIR, piping light (and data) around bends with tiny loss.",
        detail: "Acceptance cones and numerical aperture $NA = \\sqrt{n_{core}^{2}-n_{clad}^{2}}$ rate the light-gathering.",
      },
      {
        term: "Reflecting prisms",
        kind: "insight",
        statement: "$45^{\\circ}$ glass prisms reflect $100\\%$ internally — brighter than silvered mirrors, used in binoculars.",
        detail: "$45^{\\circ}$ exceeds the $41.1^{\\circ}$ glass critical angle, so TIR is guaranteed.",
      },
      {
        term: "Diamond brilliance",
        kind: "insight",
        statement: "Diamond's huge $n = 2.42$ gives a tiny $24.4^{\\circ}$ critical angle; skilled cuts recycle light back to the viewer.",
        detail: "Sparkle is trapped TIR plus dispersion fire.",
      },
    ],
    figures: [
      {
        caption: "Past $\\theta_{c}$ the refracted ray vanishes and $100\\%$ reflects; fibers chain TIR down the core.",
        svg: "<svg role='img' aria-label='Past theta_c the refracted ray vanishes and 100% reflects; fibers chain TIR down the core.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"40\" y1=\"140\" x2=\"360\" y2=\"140\"/><line x1=\"180\" y1=\"140\" x2=\"120\" y2=\"60\"/><line x1=\"180\" y1=\"140\" x2=\"240\" y2=\"60\" stroke-dasharray=\"5 4\" opacity=\"0.5\"/><line x1=\"180\" y1=\"140\" x2=\"260\" y2=\"140\"/><line x1=\"200\" y1=\"100\" x2=\"200\" y2=\"180\" stroke-dasharray=\"4 4\"/><path d=\"M40 60 L120 80 L200 60 L280 80 L360 60\"/><path d=\"M40 100 L120 120 L200 100 L280 120 L360 100\" opacity=\"0.5\"/><text x=\"250\" y=\"130\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">TIR: all reflects</text><text x=\"230\" y=\"50\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">fiber zigzag</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Water–air critical angle",
        problem: "Find $\\theta_{c}$ for water ($n = 1.33$) to air.",
        steps: [
          { label: "Step 1: Ratio", text: "$\\sin\\theta_{c} = 1.00/1.33 = 0.7519$." },
          { label: "Step 2: Invert", text: "$\\theta_{c} = 48.8^{\\circ}$ (table $48.6^{\\circ}$ with precise $n$)." },
        ],
        result: "About $48.6^{\\circ}$ from the normal.",
      },
      {
        title: "Diamond check",
        problem: "Verify diamond's $24.4^{\\circ}$ critical angle ($n = 2.42$).",
        steps: [
          { label: "Step 1: Ratio", text: "$\\sin\\theta_{c} = 1/2.42 = 0.4132$." },
          { label: "Step 2: Invert", text: "$\\theta_{c} = 24.4^{\\circ}$." },
        ],
        result: "$24.4^{\\circ}$ — most rays are trapped.",
      },
    ],
    keyTakeaways: [
      "$\\sin\\theta_{c} = n_{low}/n_{high}$; past it, reflection is total.",
      "Fibers pipe light by chained TIR; prisms out-reflect mirrors.",
      "High $n$ means small $\\theta_{c}$ and trapped brilliance.",
    ],
    quiz: [
      {
        q: "TIR can occur when light goes:",
        options: ["Air→water at any angle", "Water→air past $48.6^{\\circ}$", "Air→glass at $90^{\\circ}$", "Vacuum→vacuum"],
        answer: 1,
        explanation: "Internal incidence on lower $n$ past $\\theta_{c}$ kills the refracted ray.",
      },
      {
        q: "Fiber cores need cladding with:",
        options: ["Higher $n$ than the core", "Lower $n$ than the core", "Equal $n$", "No optical role"],
        answer: 1,
        explanation: "The step down in $n$ enables TIR at the core wall.",
      },
      {
        q: "A $45^{\\circ}$ crown-glass prism reflects internally because:",
        options: ["$45^{\\circ} > 41.1^{\\circ} = \\theta_{c}$", "Glass is silvered", "Prisms absorb refraction", "Light slows to zero"],
        answer: 0,
        explanation: "Incidence past critical guarantees $100\\%$ internal reflection.",
      },
    ],
  },
  {
    sectionId: "ewen-ch21-s8",
    readingTime: 5,
    intro: "Converging lenses thicken at the center; diverging lenses thin there — and that shape decides everything. This section classifies the six lens forms, defines principal foci, and traces the three lens rays.",
    objectives: [
      "Distinguish converging (convex) from diverging (concave) lenses",
      "Define $F$, $2F$, and focal length for lenses",
      "Trace parallel–focal, focal–parallel, and central rays",
    ],
    concepts: [
      {
        term: "Converging lens",
        kind: "definition",
        statement: "Thicker at the center (biconvex, plano-convex, meniscus): parallel rays converge to real $F$ ($f > 0$).",
        detail: "Magnifiers, projectors, and camera lenses converge.",
      },
      {
        term: "Diverging lens",
        kind: "definition",
        statement: "Thinner at the center (biconcave, plano-concave): parallel rays diverge from virtual $F$ ($f < 0$).",
        detail: "Peepholes and myopia glasses diverge to tame strong eyes.",
      },
      {
        term: "Lens foci",
        kind: "definition",
        statement: "Symmetric lenses carry twin foci at $f$ each side ($2F$ points at $2f$); the central ray passes undeflected through the middle.",
        detail: "Thin-lens diagrams draw the lens as a vertical line with $F$ dots on the axis.",
      },
      {
        term: "Three lens rays",
        kind: "method",
        statement: "Parallel→far-$F$; through-near-$F$→parallel; central→straight. Any two image the point.",
        detail: "Converging uses real $F$; diverging aims with the virtual $F$ on the object side.",
      },
      {
        term: "Lensmaker trend",
        kind: "insight",
        statement: "More curvature and higher $n$ shorten $f$ ($1/f = (n-1)(1/R_{1}-1/R_{2})$); stronger lenses bend harder.",
        detail: "Eyeglass prescriptions in diopters ($1/f$ in meters) are this formula priced.",
      },
    ],
    examples: [
      {
        title: "Sunlight focus",
        problem: "A converging lens of $f = 15.0 \\text{ cm}$ faces the Sun. Where does the hot spot form?",
        steps: [
          { label: "Step 1: Parallel input", text: "Solar rays are parallel; they converge at the far $F$." },
        ],
        result: "$15.0 \\text{ cm}$ past the lens — the igniting focus.",
      },
      {
        title: "Peephole divergence",
        problem: "Parallel rays enter a diverging lens with $f = -10.0 \\text{ cm}$. Describe the output.",
        steps: [
          { label: "Step 1: Diverge from near $F$", text: "Rays spread as if from the $10.0 \\text{ cm}$ virtual focus on the entry side." },
        ],
        result: "Diverging beam, wide view compressed — door coverage.",
      },
    ],
    keyTakeaways: [
      "Center-thick converges ($f > 0$); center-thin diverges ($f < 0$).",
      "Twin foci plus the undeflected central ray trace every image.",
      "Curvature and $n$ set power via the lensmaker trend.",
    ],
    quiz: [
      {
        q: "A biconvex lens is:",
        options: ["Diverging", "Converging", "Always plano", "A mirror"],
        answer: 1,
        explanation: "Center-thick profiles converge parallel rays to real $F$.",
      },
      {
        q: "The central ray through a thin lens:",
        options: ["Bends to $F$", "Passes straight", "Reflects", "Stops"],
        answer: 1,
        explanation: "The middle acts as a parallel slab at negligible thickness — no net deviation.",
      },
      {
        q: "Stronger (shorter-$f$) lenses need:",
        options: ["Flatter faces and low $n$", "More curvature and/or higher $n$", "Larger diameter only", "Silvering"],
        answer: 1,
        explanation: "Lensmaker: $1/f$ grows with $(n-1)$ and with $1/R$ curvatures.",
      },
    ],
  },
  {
    sectionId: "ewen-ch21-s9",
    readingTime: 6,
    intro: "Cameras, projectors, and magnifiers are one converging lens used in three positions. This section applies the lens formula (same as mirrors, new signs), and places object, image, and screen for each instrument.",
    objectives: [
      "Apply $1/f = 1/d_{o}+1/d_{i}$, $M = -d_{i}/d_{o}$ to converging lenses",
      "Set up camera (far object), projector (near-outside-$F$), magnifier (inside-$F$) cases",
      "Compute image positions and screen sizes",
    ],
    concepts: [
      {
        term: "Thin-lens formula",
        kind: "theorem",
        statement: "$1/f = 1/d_{o} + 1/d_{i}$ with real-side distances positive; converging $f > 0$.",
        detail: "Positive $d_{i}$ lands past the lens (real, projectable); negative falls object-side (virtual).",
      },
      {
        term: "Camera case",
        kind: "insight",
        statement: "Distant objects ($d_{o} \\gg f$) image just past $F$, real, inverted, tiny — film/sensor sits at $d_{i} \\approx f$.",
        detail: "Focusing close-up extends the lens forward (larger $d_{i}$).",
      },
      {
        term: "Projector case",
        kind: "insight",
        statement: "Object just outside $F$ throws a big real inverted image far down the hall ($d_{i} \\gg d_{o}$).",
        detail: "Slides mount upside-down so the screen reads correctly.",
      },
      {
        term: "Magnifier case",
        kind: "insight",
        statement: "Object inside $F$ gives a virtual, upright, enlarged image behind the lens — the simple magnifier.",
        detail: "Maximum comfort puts the virtual image at the near point ($25 \\text{ cm}$).",
      },
      {
        term: " Diopters",
        kind: "notation",
        statement: "Lens power in diopters is $1/f$ (meters): a $+4.00$ D lens has $f = 25.0 \\text{ cm}$.",
        detail: "Prescriptions add diopters directly for stacked thin lenses in contact.",
      },
    ],
    figures: [
      {
        caption: "Converging lens: distant object to real inverted $d_{i} \\approx f$; near-outside-$F$ object to far enlarged screen image.",
        svg: "<svg role='img' aria-label='Converging lens: distant object to real inverted d_i approx f; near-outside-F object to far enlarged screen image.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"200\" y1=\"20\" x2=\"200\" y2=\"180\"/><line x1=\"40\" y1=\"60\" x2=\"200\" y2=\"60\"/><line x1=\"200\" y1=\"60\" x2=\"340\" y2=\"140\"/><line x1=\"40\" y1=\"140\" x2=\"200\" y2=\"140\"/><line x1=\"200\" y1=\"140\" x2=\"340\" y2=\"60\"/><line x1=\"40\" y1=\"100\" x2=\"340\" y2=\"100\"/><circle cx=\"260\" cy=\"100\" r=\"4\" fill=\"currentColor\"/><text x=\"255\" y=\"120\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">F</text><text x=\"120\" y=\"40\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">object</text><text x=\"320\" y=\"180\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">image</text></svg>",
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Projector throw",
        problem: "A projector lens has $f = 15.0 \\text{ cm}$; the slide sits $16.0 \\text{ cm}$ out. Find screen distance and $M$.",
        steps: [
          { label: "Step 1: Solve", text: "$1/d_{i} = 1/15.0 - 1/16.0 = (16 - 15)/240 = 1/240$; $d_{i} = 240 \\text{ cm}$." },
          { label: "Step 2: Magnify", text: "$M = -240/16.0 = -15.0$." },
        ],
        result: "Screen at $2.40 \\text{ m}$; $15\\times$ inverted — mount the slide upside-down.",
      },
      {
        title: "Camera focus at close range",
        problem: "A $50.0 \\text{ mm}$ camera lens photographs an object $1.00 \\text{ m}$ away. Find $d_{i}$.",
        steps: [
          { label: "Step 1: Solve", text: "$1/d_{i} = 1/50.0 - 1/1000 = (20 - 1)/1000 = 19/1000$; $d_{i} = 52.6 \\text{ mm}$." },
        ],
        result: "$52.6 \\text{ mm}$ — $2.6 \\text{ mm}$ of focus extension past $f$.",
      },
    ],
    keyTakeaways: [
      "One formula images all converging cases; sign of $d_{i}$ picks real/virtual.",
      "Far object → tiny image at $F$; near-outside-$F$ → giant screen image.",
      "Inside $F$ → virtual magnifier image on the object side.",
    ],
    quiz: [
      {
        q: "Projector slide ($d_{o}$ just beyond $F$) gives:",
        options: ["Tiny erect virtual", "Enlarged real inverted on a far screen", "No image", "Same-size erect"],
        answer: 1,
        explanation: "Near-$F$ objects throw $d_{i} \\gg d_{o}$ with $|M| \\gg 1$, inverted.",
      },
      {
        q: "Converging $f = 10 \\text{ cm}$, object at $30 \\text{ cm}$. Image is at:",
        options: ["$7.5 \\text{ cm}$", "$15 \\text{ cm}$", "$30 \\text{ cm}$", "$60 \\text{ cm}$"],
        answer: 1,
        explanation: "$1/d_{i} = 1/10 - 1/30 = 1/15$; $d_{i} = 15 \\text{ cm}$ real.",
      },
      {
        q: "A $+2.50$ D reading lens has focal length:",
        options: ["$2.50 \\text{ cm}$", "$40.0 \\text{ cm}$", "$250 \\text{ cm}$", "$0.400 \\text{ cm}$"],
        answer: 1,
        explanation: "$f = 1/2.50 = 0.400 \\text{ m} = 40.0 \\text{ cm}$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch21-s10",
    readingTime: 5,
    intro: "Diverging lenses always minify upright — the myopia correction and peephole. This section computes their virtual images with negative $f$, fits glasses prescriptions, and pairs lenses into instruments.",
    objectives: [
      "Apply the lens formula with $f < 0$ for diverging lenses",
      "Explain myopia correction by diverging glasses",
      "Describe two-lens instruments (microscope, telescope) in one line each",
    ],
    concepts: [
      {
        term: "Diverging-lens image",
        kind: "theorem",
        statement: "With $f < 0$, every real object gives $d_{i} < 0$: virtual, upright, reduced, object-side.",
        detail: "Rays diverge as if from that virtual point — trace backward to find it.",
      },
      {
        term: "Myopia correction",
        kind: "insight",
        statement: "Nearsighted eyes focus too strongly; diverging glasses ($-$ diopters) push the far point out to infinity.",
        detail: "A $-2.00$ D lens has $f = -50.0 \\text{ cm}$, matched to the eye's excess power.",
      },
      {
        term: "Hyperopia contrast",
        kind: "insight",
        statement: "Farsighted eyes need converging ($+$) lenses pulling images back onto the retina.",
        detail: "Sign of the prescription names the lens: minus diverges, plus converges.",
      },
      {
        term: "Compound microscope",
        kind: "insight",
        statement: "Objective makes a big real image; eyepiece magnifies it as a loupe: $M \\approx -(L/f_{o})(25 \\text{ cm}/f_{e})$.",
        detail: "Tube length $L$ and short foci multiply to hundreds of times.",
      },
      {
        term: "Refracting telescope",
        kind: "insight",
        statement: "Long-$f$ objective images at its focus; short-$f$ eyepiece views it: $M = -f_{o}/f_{e}$.",
        detail: "Astronomical images invert; terrestrial scopes add an erector.",
      },
    ],
    examples: [
      {
        title: "Peephole image",
        problem: "A diverging lens has $f = -12.0 \\text{ cm}$; a visitor stands $60.0 \\text{ cm}$ out. Find $d_{i}$ and $M$.",
        steps: [
          { label: "Step 1: Solve", text: "$1/d_{i} = 1/(-12.0) - 1/60.0 = -0.100$; $d_{i} = -10.0 \\text{ cm}$." },
          { label: "Step 2: Magnify", text: "$M = -(-10.0)/60.0 = +0.167$." },
        ],
        result: "$10.0 \\text{ cm}$ inside; upright $1/6$-size — wide compressed view.",
      },
      {
        title: "Telescope magnification",
        problem: "A refractor has $f_{o} = 900 \\text{ mm}$, $f_{e} = 25.0 \\text{ mm}$. Find $M$.",
        steps: [
          { label: "Step 1: Ratio", text: "$M = -900/25.0 = -36.0$." },
        ],
        result: "$36\\times$ inverted — erecting prism for daytime use.",
      },
    ],
    keyTakeaways: [
      "Diverging $f < 0$ always gives virtual, upright, reduced images.",
      "Minus lenses fix myopia; plus lenses fix hyperopia.",
      "Microscopes multiply objective × eyepiece; telescopes ratio the foci.",
    ],
    quiz: [
      {
        q: "Diverging $f = -20 \\text{ cm}$, object at $60 \\text{ cm}$. Image distance is:",
        options: ["$+15 \\text{ cm}$", "$-15 \\text{ cm}$", "$+30 \\text{ cm}$", "$-60 \\text{ cm}$"],
        answer: 1,
        explanation: "$1/d_{i} = -1/20 - 1/60 = -1/15$; virtual $15 \\text{ cm}$ object-side.",
      },
      {
        q: "A $-3.00$ D glasses lens is:",
        options: ["Converging, $f = +33.3 \\text{ cm}$", "Diverging, $f = -33.3 \\text{ cm}$", "A mirror", "Plano glass"],
        answer: 1,
        explanation: "Minus diopters diverge with $f = 1/(-3.00) = -0.333 \\text{ m}$.",
      },
      {
        q: "A microscope's objective forms:",
        options: ["A virtual image at infinity", "A real enlarged intermediate image for the eyepiece", "No image", "A reduced virtual image"],
        answer: 1,
        explanation: "The objective projects real and big; the eyepiece loupes that aerial image.",
      },
    ],
  },
]
