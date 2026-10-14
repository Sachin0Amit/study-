import type { SectionContent } from '../library'

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition
// Chapter 3: Vectors (pp 82-109)
// ============================================================================

export const ewenCh3Content: SectionContent[] = [
  {
    sectionId: 'ewen-ch3-s1',
    readingTime: 5,
    intro: "Some quantities need only a size, but pushes, pulls, and trips need a direction too. This section draws the scalar-vector line and shows the arrow language every later force and motion chapter speaks.",
    objectives: [
      "Distinguish scalar from vector quantities with examples",
      "Represent vectors as scaled arrows with magnitude and direction",
      "Resolve a travel problem into distance versus displacement",
    ],
    concepts: [
      {
        term: "Scalar quantity",
        kind: "definition",
        statement: "A **scalar** has magnitude only: mass $m = 5.0\\ \\mathrm{kg}$, temperature $20\\ \\mathrm{^{\\circ}C}$, time $t = 10\\ \\mathrm{s}$.",
        detail: "Scalars combine by ordinary arithmetic regardless of direction.",
      },
      {
        term: "Vector quantity",
        kind: "definition",
        statement: "A **vector** has magnitude and direction: displacement $30\\ \\mathrm{km}$ east, force $50\\ \\mathrm{N}$ at $30^{\\circ}$, velocity $v = 20\\ \\mathrm{m/s}$ north.",
        detail: "Direction is part of the data — dropping it changes the physics.",
      },
      {
        term: "Arrow representation",
        kind: "notation",
        statement: "Draw vectors as **arrows with length proportional to magnitude** and orientation showing direction, labeled $\\vec{F}$, $\\vec{v}$, $\\vec{d}$.",
        detail: "A scale like $1\\ \\mathrm{cm} = 10\\ \\mathrm{N}$ turns drawing into measurement.",
      },
      {
        term: "Distance versus displacement",
        kind: "definition",
        statement: "**Distance** is path length (scalar); **displacement** is straight-line change of position (vector) with magnitude $\\le$ distance.",
        detail: "Walking $3\\ \\mathrm{km}$ east then $4\\ \\mathrm{km}$ north covers $7\\ \\mathrm{km}$ but displaces only $5\\ \\mathrm{km}$ northeast-ish.",
      },
      {
        term: "Speed versus velocity",
        kind: "definition",
        statement: "**Speed** is the rate (scalar, $50\\ \\mathrm{km/h}$); **velocity** is rate plus direction ($50\\ \\mathrm{km/h}$ north).",
        detail: "Turning at constant speed changes velocity — the seed of Chapter 4 acceleration.",
      },
    ],
    figures: [
      {
        caption: "Distance ($7\\ \\mathrm{km}$ path) versus displacement ($5\\ \\mathrm{km}$ arrow) for 3 km east plus 4 km north",
        svg: '<svg role="img" aria-label="Distance (7\\ mathrmkm path) versus displacement (5\\ mathrmkm arrow) for 3 km east plus 4 km north" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2.5" fill="none"><line x1="60" y1="140" x2="210" y2="140"/><line x1="210" y1="140" x2="210" y2="40"/><line x1="60" y1="140" x2="210" y2="40" stroke-dasharray="7 5"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="110" y="158">3 km east</text><text x="218" y="95">4 km north</text><text x="90" y="80">5 km displacement</text></g></svg>',
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Walker distance versus displacement",
        problem: "A surveyor walks $3.00\\ \\mathrm{km}$ east, then $4.00\\ \\mathrm{km}$ north. Find distance walked and displacement magnitude.",
        steps: [
          { label: "Distance", text: "Scalar sum: $3.00 + 4.00 = 7.00\\ \\mathrm{km}$ of walking." },
          { label: "Displacement", text: "Right triangle: $d = \\sqrt{3.00^2 + 4.00^2} = \\sqrt{25.0} = 5.00\\ \\mathrm{km}$." },
          { label: "Direction note", text: "Full displacement is $5.00\\ \\mathrm{km}$ at $\\arctan(4/3) \\approx 53.1^{\\circ}$ north of east." },
        ],
        result: "$7.00\\ \\mathrm{km}$ walked; $5.00\\ \\mathrm{km}$ displaced.",
      },
      {
        title: "Force arrow scale",
        problem: "Draw a $50\\ \\mathrm{N}$ force at $30^{\\circ}$ above horizontal with scale $1\\ \\mathrm{cm} = 10\\ \\mathrm{N}$.",
        steps: [
          { label: "Length", text: "$50/10 = 5.0\\ \\mathrm{cm}$ arrow." },
          { label: "Direction", text: "Protractor $30^{\\circ}$ above the $+x$ axis from the tail." },
          { label: "Label", text: "Mark $\\vec{F} = 50\\ \\mathrm{N}$, $30^{\\circ}$ — magnitude and direction both on the drawing." },
        ],
        result: "A $5.0\\ \\mathrm{cm}$ arrow at $30^{\\circ}$ represents the force.",
      },
    ],
    keyTakeaways: [
      "Scalars carry size only; vectors carry size plus direction.",
      "Arrows scaled to magnitude make vectors measurable.",
      "Displacement and velocity are vectors; distance and speed are their scalar partners.",
    ],
    quiz: [
      {
        q: "Which is a vector?",
        options: ["$5.0\\ \\mathrm{kg}$ of mass", "$50\\ \\mathrm{N}$ at $30^{\\circ}$", "$20\\ \\mathrm{^{\\circ}C}$", "$10\\ \\mathrm{s}$"],
        answer: 1,
        explanation: "Only the force states magnitude and direction together.",
      },
      {
        q: "Walking 3 km east then 4 km north gives displacement",
        options: ["$7\\ \\mathrm{km}$", "$5\\ \\mathrm{km}$", "$1\\ \\mathrm{km}$", "$12\\ \\mathrm{km}$"],
        answer: 1,
        explanation: "$\\sqrt{9 + 16} = 5\\ \\mathrm{km}$; 7 km is the distance walked.",
      },
      {
        q: "Turning a corner at steady speed changes",
        options: ["Nothing physical", "Velocity, because direction changed", "Mass", "Time"],
        answer: 1,
        explanation: "Velocity includes direction, so any turn is a velocity change.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch3-s2',
    readingTime: 6,
    intro: "Any angled vector can be traded for its horizontal and vertical parts, which add and balance independently. This section builds the component formulas that turn two-dimensional statics into two one-dimensional problems.",
    objectives: [
      "Resolve a vector into $x$ and $y$ components with trig",
      "Recover magnitude and direction from components",
      "Use signs to place components in the correct quadrant",
    ],
    concepts: [
      {
        term: "Components of a vector",
        kind: "definition",
        statement: "The **components** $A_x, A_y$ are the projections of $\\vec{A}$ on the axes; together they are equivalent to $\\vec{A}$.",
        detail: "Equilibrium and motion analyze $x$ and $y$ parts separately, then recombine.",
      },
      {
        term: "Resolution formulas",
        kind: "theorem",
        statement: "For magnitude $A$ at angle $\\theta$ above $+x$: **$A_x = A\\cos\\theta$** and **$A_y = A\\sin\\theta$**.",
        detail: "Cosine takes the adjacent (horizontal) part, sine the opposite (vertical) part.",
      },
      {
        term: "Recomposition formulas",
        kind: "theorem",
        statement: "From components: **$A = \\sqrt{A_x^2 + A_y^2}$** and **$\\theta = \\arctan(|A_y/A_x|)$** with the quadrant fixed by the signs.",
        detail: "Negative $A_x$ puts the vector in the second or third quadrant regardless of what the calculator arctan says.",
      },
      {
        term: "Sign convention",
        kind: "notation",
        statement: "**Right and up are positive** ($+x$, $+y$); left and down are negative — signs carry the directional half of the data.",
        detail: "A $30\\ \\mathrm{N}$ westward force is $F_x = -30\\ \\mathrm{N}$, not $+30$.",
      },
      {
        term: "Perpendicular independence",
        kind: "insight",
        statement: "Perpendicular components act **independently**: changing $A_y$ never alters $A_x$, which is why projectile and equilibrium analyses split axes.",
        detail: "This independence is the working reason components exist.",
      },
    ],
    figures: [
      {
        caption: "Resolving $\\vec{A}$: $A_x = A\\cos\\theta$ adjacent, $A_y = A\\sin\\theta$ opposite",
        svg: '<svg role="img" aria-label="Resolving vecA: A_x = Acostheta adjacent, A_y = Asintheta opposite" viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="150" x2="340" y2="150"/><line x1="60" y1="150" x2="60" y2="40"/><line x1="60" y1="150" x2="300" y2="60"/><line x1="300" y1="60" x2="300" y2="150" stroke-dasharray="6 5"/><line x1="60" y1="150" x2="300" y2="150" stroke-width="3"/><path d="M 120 150 A 60 60 0 0 0 116 128" fill="none"/></g><g fill="currentColor" font-size="12" font-family="sans-serif"><text x="130" y="145">θ</text><text x="170" y="170">Ax = A cos θ</text><text x="308" y="110">Ay</text><text x="200" y="90">A</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Cable force components",
        problem: "A tow cable pulls with $F = 500\\ \\mathrm{N}$ at $\\theta = 30^{\\circ}$ above horizontal. Find $F_x$ and $F_y$.",
        steps: [
          { label: "Horizontal", text: "$F_x = F\\cos\\theta = 500 \\times \\cos 30^{\\circ} = 500 \\times 0.8660 = 433\\ \\mathrm{N}$." },
          { label: "Vertical", text: "$F_y = F\\sin\\theta = 500 \\times 0.5000 = 250\\ \\mathrm{N}$." },
          { label: "Check", text: "$\\sqrt{433^2 + 250^2} = \\sqrt{249{,}989} \\approx 500\\ \\mathrm{N}$ — recomposition confirms." },
        ],
        result: "$F_x = 433\\ \\mathrm{N}$, $F_y = 250\\ \\mathrm{N}$.",
      },
      {
        title: "Components back to a heading",
        problem: "A displacement has $d_x = -60\\ \\mathrm{m}$, $d_y = +80\\ \\mathrm{m}$. Find magnitude and compass direction.",
        steps: [
          { label: "Magnitude", text: "$d = \\sqrt{60^2 + 80^2} = 100\\ \\mathrm{m}$." },
          { label: "Reference angle", text: "$\\arctan(80/60) = \\arctan(1.333) \\approx 53.1^{\\circ}$." },
          { label: "Quadrant", text: "Negative $x$, positive $y$ is quadrant II: $53.1^{\\circ}$ north of west (bearing about $307^{\\circ}$). " },
        ],
        result: "$100\\ \\mathrm{m}$ at $53.1^{\\circ}$ north of west.",
      },
    ],
    keyTakeaways: [
      "$A_x = A\\cos\\theta$, $A_y = A\\sin\\theta$ split any vector into independent parts.",
      "$A = \\sqrt{A_x^2 + A_y^2}$ with quadrant-aware arctan rebuilds it.",
      "Signs are data: $+x$ right, $+y$ up.",
    ],
    quiz: [
      {
        q: "$500\\ \\mathrm{N}$ at $30^{\\circ}$ has components",
        options: ["$F_x = 250$, $F_y = 433\\ \\mathrm{N}$", "$F_x = 433$, $F_y = 250\\ \\mathrm{N}$", "$F_x = 500$, $F_y = 0\\ \\mathrm{N}$", "$F_x = 0$, $F_y = 500\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "Cosine takes horizontal: $500(0.866) = 433$; sine takes vertical: $250$.",
      },
      {
        q: "From $d_x = -60$, $d_y = +80\\ \\mathrm{m}$, the displacement is",
        options: ["$100\\ \\mathrm{m}$ north of east", "$100\\ \\mathrm{m}$ at $53.1^{\\circ}$ north of west", "$20\\ \\mathrm{m}$ east", "$140\\ \\mathrm{m}$ south"],
        answer: 1,
        explanation: "Magnitude 100 m; signs place it in quadrant II.",
      },
      {
        q: "Perpendicular components are useful because they",
        options: ["Are always equal", "Act independently axis by axis", "Cancel automatically", "Need no units"],
        answer: 1,
        explanation: "Independence lets $x$ and $y$ analyses run as separate 1-D problems.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch3-s3',
    readingTime: 7,
    intro: "Adding vectors means chaining them tail-to-head, either by careful drawing or by adding components. This section teaches both routes and proves they agree on shop statics problems.",
    objectives: [
      "Add vectors graphically by the polygon method",
      "Add vectors by summing $x$ and $y$ components",
      "Find resultants and equilibrants for two-force problems",
    ],
    concepts: [
      {
        term: "Graphical polygon method",
        kind: "method",
        statement: "Place vectors **tail to head in any order**; the **resultant runs from first tail to last head**, measured against the scale.",
        detail: "Drafting accuracy limits this route to about three significant digits — fine for checking, not for final answers.",
      },
      {
        term: "Component addition method",
        kind: "method",
        statement: "Sum parts independently: **$R_x = \\sum A_x$**, **$R_y = \\sum A_y$**, then $R = \\sqrt{R_x^2 + R_y^2}$ with $\\theta = \\arctan(|R_y/R_x|)$.",
        detail: "This is the exam route: exact, fast, and self-checking via recomposition.",
      },
      {
        term: "Resultant",
        kind: "definition",
        statement: "The **resultant** $\\vec{R}$ is the single vector equivalent to the whole chain — same net push, one arrow.",
        detail: "Two tugs of $30\\ \\mathrm{N}$ east and $40\\ \\mathrm{N}$ north give $R = 50\\ \\mathrm{N}$ at $53.1^{\\circ}$.",
      },
      {
        term: "Equilibrant",
        kind: "definition",
        statement: "The **equilibrant** is equal and opposite to the resultant ($\\vec{E} = -\\vec{R}$); adding it produces equilibrium.",
        detail: "Rigging and bracket problems in Chapter 7 are equilibrant hunts.",
      },
      {
        term: "Order independence",
        kind: "insight",
        statement: "Vector addition is **commutative**: any chaining order yields the same $\\vec{R}$, so group convenient pairs first.",
        detail: "Analytically this is $(A_x + B_x) = (B_x + A_x)$ on each axis.",
      },
    ],
    examples: [
      {
        title: "Two perpendicular tugs",
        problem: "Ropes pull a crate with $30.0\\ \\mathrm{N}$ east and $40.0\\ \\mathrm{N}$ north. Find the resultant.",
        steps: [
          { label: "Components", text: "$R_x = 30.0\\ \\mathrm{N}$, $R_y = 40.0\\ \\mathrm{N}$ already on axes." },
          { label: "Magnitude", text: "$R = \\sqrt{30.0^2 + 40.0^2} = \\sqrt{2500} = 50.0\\ \\mathrm{N}$." },
          { label: "Direction", text: "$\\theta = \\arctan(40/30) \\approx 53.1^{\\circ}$ north of east; equilibrant is $50.0\\ \\mathrm{N}$ opposite." },
        ],
        result: "$R = 50.0\\ \\mathrm{N}$ at $53.1^{\\circ}$ north of east.",
      },
      {
        title: "Two angled cable forces",
        problem: "Cables pull with $\\vec{A} = 60.0\\ \\mathrm{N}$ at $20^{\\circ}$ and $\\vec{B} = 80.0\\ \\mathrm{N}$ at $105^{\\circ}$ (both from $+x$). Find $\\vec{R}$.",
        steps: [
          { label: "Resolve", text: "$A_x = 60\\cos 20^{\\circ} = 56.38$, $A_y = 60\\sin 20^{\\circ} = 20.52$; $B_x = 80\\cos 105^{\\circ} = -20.71$, $B_y = 80\\sin 105^{\\circ} = 77.27$ (newtons)." },
          { label: "Sum", text: "$R_x = 35.67\\ \\mathrm{N}$, $R_y = 97.79\\ \\mathrm{N}$." },
          { label: "Recombine", text: "$R = \\sqrt{35.67^2 + 97.79^2} \\approx 104\\ \\mathrm{N}$ at $\\arctan(97.79/35.67) \\approx 70.0^{\\circ}$." },
        ],
        result: "About $104\\ \\mathrm{N}$ at $70^{\\circ}$ from $+x$.",
      },
    ],
    keyTakeaways: [
      "Graphical chaining gives the resultant tail-to-head; components give it exactly.",
      "$R_x = \\sum A_x$, $R_y = \\sum A_y$, then Pythagoras plus quadrant-aware arctan.",
      "The equilibrant $-\\vec{R}$ is what balances a force system.",
    ],
    quiz: [
      {
        q: "$30\\ \\mathrm{N}$ east plus $40\\ \\mathrm{N}$ north gives",
        options: ["$70\\ \\mathrm{N}$ north", "$50\\ \\mathrm{N}$ at $53.1^{\\circ}$ north of east", "$10\\ \\mathrm{N}$ south", "$50\\ \\mathrm{N}$ due east"],
        answer: 1,
        explanation: "$\\sqrt{900+1600} = 50$ with $\\arctan(4/3) = 53.1^{\\circ}$.",
      },
      {
        q: "The equilibrant of $\\vec{R}$ is",
        options: ["$2\\vec{R}$", "$-\\vec{R}$", "Perpendicular to $\\vec{R}$", "Always zero"],
        answer: 1,
        explanation: "Equal magnitude, opposite direction — their sum vanishes.",
      },
      {
        q: "Component addition works because perpendicular parts",
        options: ["Interfere strongly", "Sum independently on each axis", "Must be equal", "Cancel out"],
        answer: 1,
        explanation: "$x$ sums never leak into $y$ sums, so each axis is a 1-D total.",
      },
    ],
  },
]
