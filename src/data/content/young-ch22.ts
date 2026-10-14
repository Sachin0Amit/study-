import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 22
// Gauss's Law (Sections 22.1 – 22.5)
// ============================================================================

export const youngCh22Content: SectionContent[] = [
  {
    sectionId: "young-ch22-s1",
    readingTime: 5,
    intro: "Counting field lines through a surface gives flux — the doorway to Gauss's law. Young builds electric flux from the uniform-field case, where geometry (area times normal component) is everything.",
    objectives: [
      "Define electric flux $\\Phi_{E} = \\vec{E} \\cdot \\vec{A}$ for uniform fields",
      "Explain the role of the normal component and orientation",
      "Distinguish flux through open versus closed surfaces",
    ],
    concepts: [
      {
        term: "Electric flux, uniform field",
        kind: "definition",
        statement: "For uniform $\\vec{E}$ through flat area $A$ with normal $\\hat{n}$, **flux** is $\\Phi_{E} = \\vec{E} \\cdot \\vec{A} = EA\\cos\\phi$, in $\\mathrm{N \\cdot m^{2}/C}$.",
        detail: "Only the normal component crosses; skimming flow ($\\phi = 90^{\\circ}$) contributes zero — rain on a vertical window versus a skylight.",
      },
      {
        term: "Area as a vector",
        kind: "notation",
        statement: "The **area vector** $\\vec{A} = A\\hat{n}$ has magnitude $A$ and direction normal to the surface; for closed surfaces $\\hat{n}$ points **outward** by convention.",
        detail: "Outward-positive makes enclosed positive charge a flux source — the sign language Gauss's law speaks.",
      },
      {
        term: "Flux sign and orientation",
        kind: "insight",
        statement: "Field lines leaving give positive flux, entering give negative; grazing incidence gives none — flux is the signed line count through the surface.",
        detail: "A dipole inside a closed box contributes zero net flux: every line that leaves returns — preview of $Q_{\\mathrm{enc}} = 0$.",
      },
      {
        term: "Maximum and zero flux angles",
        kind: "method",
        statement: "Face-on ($\\phi = 0$) maximizes $|\\Phi_{E}| = EA$; edge-on ($\\phi = 90^{\\circ}$) zeros it — tilting a loop in uniform field scans $\\Phi_{E} = EA\\cos\\phi$ through both extremes.",
        detail: "Faraday's law (Chapter 29) will vary exactly this angle and area to induce emf.",
      },
      {
        term: "Open versus closed surfaces",
        kind: "definition",
        statement: "Open surfaces (a hoop) have ambiguous normals ($\\pm\\hat{n}$ choices); closed surfaces (a box, sphere) fix outward $\\hat{n}$ and admit Gauss's law.",
        detail: "Only closed-surface flux connects to enclosed charge; open-surface flux is just a field integral.",
      },
    ],
    examples: [
      {
        title: "Tilted rectangle in uniform field",
        problem: "Uniform $E = 2.00 \\times 10^{3}\\ \\mathrm{N/C}$ crosses a $0.500\\ \\mathrm{m} \\times 0.300\\ \\mathrm{m}$ rectangle whose normal makes $\\phi = 40.0^{\\circ}$ with $\\vec{E}$. Find $\\Phi_{E}$.",
        steps: [
          { label: "Area", text: "$A = (0.500)(0.300) = 0.150\\ \\mathrm{m^{2}}$." },
          { label: "Flux", text: "$\\Phi_{E} = EA\\cos\\phi = (2.00 \\times 10^{3})(0.150)\\cos 40.0^{\\circ} = 300(0.7660) = 229.8\\ \\mathrm{N \\cdot m^{2}/C}$." },
          { label: "Extremes", text: "Face-on would give $300$; edge-on $0$. Tilt costs $23$ percent." },
        ],
        result: "$\\Phi_{E} = 230\\ \\mathrm{N \\cdot m^{2}/C}$.",
      },
      {
        title: "Cube faces in uniform field",
        problem: "A cube of side $0.200\\ \\mathrm{m}$ sits in uniform $E = 500\\ \\mathrm{N/C}$ along $+x$. Find the flux through the $+x$ face, $-x$ face, and total.",
        steps: [
          { label: "Downstream face", text: "$\\Phi_{+} = EA = (500)(0.0400) = +20.0\\ \\mathrm{N \\cdot m^{2}/C}$ (outward $\\hat{n}$ along $\\vec{E}$)." },
          { label: "Upstream face", text: "$\\Phi_{-} = -EA = -20.0$ (outward $\\hat{n}$ opposes $\\vec{E}$)." },
          { label: "Total", text: "Side faces contribute $0$; total $+20 - 20 = 0$ — no enclosed charge, no net flux." },
        ],
        result: "$+20$, $-20$, total $0\\ \\mathrm{N \\cdot m^{2}/C}$.",
      },
    ],
    keyTakeaways: [
      "$\\Phi_{E} = EA\\cos\\phi$: normal component times area.",
      "Closed surfaces use outward normals; leaving is positive.",
      "Uniform fields give zero net flux through any closed surface.",
    ],
    quiz: [
      {
        q: "A loop of area $A$ in uniform $E$ gives zero flux when:",
        options: ["Face-on to the field", "Edge-on ($\\hat{n} \\perp \\vec{E}$)", "Doubled in area", "Halved in field"],
        answer: 1,
        explanation: "$\\Phi_{E} = EA\\cos 90^{\\circ} = 0$: no normal component crosses.",
      },
      {
        q: "Net outward flux of a uniform field through a closed box is zero because:",
        options: ["The field is weak", "Every entering line also leaves: signs cancel face by face", "Area vectors vanish", "Charge repels flux"],
        answer: 1,
        explanation: "Upstream $-EA$ cancels downstream $+EA$; sides give nothing — uniform fields never accumulate net flux.",
      },
      {
        q: "Flux units $\\mathrm{N \\cdot m^{2}/C}$ equal:",
        options: ["Volts", "Volt-meters ($\\mathrm{V \\cdot m}$)", "Teslas", "Farads"],
        answer: 1,
        explanation: "$E$ ($\\mathrm{V/m}$) times area ($\\mathrm{m^{2}}$) gives $\\mathrm{V \\cdot m}$.",
      },
    ],
  },
  {
    sectionId: "young-ch22-s2",
    readingTime: 5,
    intro: "Real fields curve and surfaces bend — Young generalizes flux to the surface integral $\\int \\vec{E} \\cdot d\\vec{A}$ and evaluates it for uniform and radial fields through flat and curved geometries.",
    objectives: [
      "Write flux as $\\Phi_{E} = \\int \\vec{E} \\cdot d\\vec{A}$ for nonuniform fields",
      "Evaluate flux through spheres centered on point charges",
      "Use symmetry to simplify flux integrals without full calculus",
    ],
    concepts: [
      {
        term: "General flux integral",
        kind: "definition",
        statement: "For arbitrary fields and surfaces, $\\Phi_{E} = \\int_{S} \\vec{E} \\cdot d\\vec{A} = \\int_{S} E\\cos\\phi\\,dA$, summing patch contributions $d\\vec{A} = \\hat{n}\\,dA$.",
        detail: "Chop, dot, sum: each patch uses its local $E$ and orientation, then integration adds them.",
      },
      {
        term: "Flux from a point charge",
        kind: "theorem",
        statement: "A charge $q$ at the center of a sphere of radius $r$ gives $\\Phi_{E} = (kq/r^{2})(4\\pi r^{2}) = q/\\epsilon_{0}$ — independent of $r$.",
        detail: "The $1/r^{2}$ falloff exactly cancels the $r^{2}$ area growth: every concentric sphere catches the same flux.",
      },
      {
        term: "Radius independence",
        kind: "insight",
        statement: "Radius independence is the inverse-square theorem in disguise: only $1/r^{2}$ fields give $r$-free spherical flux — Gauss's law is Coulomb's law rewritten.",
        detail: "Cavendish-style null experiments test the exponent to $10^{-16}$ precision by checking inner-sphere charge absence.",
      },
      {
        term: "Flux through parts of spheres",
        kind: "method",
        statement: "A hemisphere centered on $q$ catches half the flux ($q/2\\epsilon_{0}$); a patch subtending solid angle $\\Omega$ catches $(\\Omega/4\\pi)(q/\\epsilon_{0})$.",
        detail: "Flux is fractional line-counting: solid angle is the currency, not area.",
      },
      {
        term: "Zero-flux enclosures",
        kind: "notation",
        statement: "Any closed surface enclosing zero net charge has $\\Phi_{E} = 0$ regardless of outside charges or shape — external lines enter and leave equally.",
        detail: "Shape never matters for net flux, only enclosed charge — the freedom Gauss's law exploits.",
      },
    ],
    figures: [
      {
        caption: "Point charge at a sphere's center: $E = kq/r^{2}$ times $4\\pi r^{2}$ gives $\\Phi_{E} = q/\\epsilon_{0}$, independent of radius.",
        svg: `<svg viewBox="0 0 400 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Point charge centered in two concentric spheres"><circle cx="200" cy="90" r="35" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="200" cy="90" r="65" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 4"/><circle cx="200" cy="90" r="5" fill="currentColor"/><g stroke="currentColor" stroke-width="1.5"><line x1="205" y1="90" x2="235" y2="90"/><line x1="200" y1="95" x2="200" y2="125"/><line x1="195" y1="90" x2="165" y2="90"/><line x1="200" y1="85" x2="200" y2="55"/></g><text x="238" y="95" font-size="12" fill="currentColor">E∝1/r²</text><text x="238" y="60" font-size="12" fill="currentColor">A∝r²</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Sphere around 5 nC",
        problem: "A sphere of radius $0.100\\ \\mathrm{m}$ centers on $q = +5.00\\ \\mathrm{nC}$. Find the flux; repeat for $r = 0.500\\ \\mathrm{m}$.",
        steps: [
          { label: "Small sphere", text: "$\\Phi_{E} = q/\\epsilon_{0} = 5.00 \\times 10^{-9}/8.854 \\times 10^{-12} = 564.7\\ \\mathrm{N \\cdot m^{2}/C}$." },
          { label: "Large sphere", text: "Identical $564.7$: field quarters ($25$-fold area) as radius quintuples — exact cancellation." },
          { label: "Direct check", text: "$E(0.1) = kq/r^{2} = 4494\\ \\mathrm{N/C}$ times $4\\pi(0.01) = 0.1257$ gives $564.7$. Consistent." },
        ],
        result: "$565\\ \\mathrm{N \\cdot m^{2}/C}$ for every centered sphere.",
      },
      {
        title: "Hemisphere flux",
        problem: "A point charge $q = +2.00\\ \\mathrm{nC}$ sits at the center of a hemispherical bowl (flat face open, charge in the dome plane). Find flux through the dome.",
        steps: [
          { label: "Full sphere", text: "Total $\\Phi = q/\\epsilon_{0} = 2.00 \\times 10^{-9}/8.854 \\times 10^{-12} = 225.9$." },
          { label: "Half", text: "Symmetry splits flux evenly: dome gets $225.9/2 = 112.9\\ \\mathrm{N \\cdot m^{2}/C}$." },
          { label: "Flat face", text: "The open disk passes the other half — field lines crossing the equatorial plane." },
        ],
        result: "$113\\ \\mathrm{N \\cdot m^{2}/C}$ through the dome.",
      },
    ],
    keyTakeaways: [
      "$\\Phi_{E} = \\int \\vec{E} \\cdot d\\vec{A}$ handles curved fields and surfaces.",
      "Centered-sphere flux $q/\\epsilon_{0}$ is radius-independent.",
      "Zero enclosed charge means zero net flux for any closed shape.",
    ],
    quiz: [
      {
        q: "Flux through a sphere centered on $q$ when radius doubles:",
        options: ["Doubles", "Quadruples", "Is unchanged ($q/\\epsilon_{0}$)", "Halves"],
        answer: 2,
        explanation: "$E$ quarters while $A$ quadruples — the inverse-square cancellation keeps $\\Phi_{E}$ fixed.",
      },
      {
        q: "A cube enclosing $+q$ off-center has net flux:",
        options: ["$q/\\epsilon_{0}$", "Zero", "Depends on position", "Depends on cube size"],
        answer: 0,
        explanation: "Net flux counts enclosed charge only; position and shape are irrelevant.",
      },
      {
        q: "A cone of solid angle $\\Omega = \\pi$ (quarter of $4\\pi$) from charge $q$ intercepts flux:",
        options: ["$q/\\epsilon_{0}$", "$q/(4\\epsilon_{0})$", "$q/(2\\epsilon_{0})$", "Zero"],
        answer: 1,
        explanation: "Fraction $\\Omega/4\\pi = 1/4$ of the total $q/\\epsilon_{0}$.",
      },
    ],
  },
  {
    sectionId: "young-ch22-s3",
    readingTime: 7,
    intro: "Gauss's law — total outward flux equals enclosed charge over $\\epsilon_{0}$ — compresses Coulomb's law into one line. Young proves it from the point-charge case plus superposition and shows why the choice of surface is free.",
    objectives: [
      "State Gauss's law $\\Phi_{E} = Q_{\\mathrm{enc}}/\\epsilon_{0}$ precisely",
      "Explain why outside charges and surface shape do not matter",
      "Apply it to point-charge and shell enclosures numerically",
    ],
    concepts: [
      {
        term: "Gauss's law",
        kind: "law",
        statement: "For any closed surface, $\\oint \\vec{E} \\cdot d\\vec{A} = Q_{\\mathrm{enc}}/\\epsilon_{0}$: net outward flux equals enclosed charge divided by $\\epsilon_{0}$.",
        detail: "The circle on the integral marks closure; $Q_{\\mathrm{enc}}$ is the algebraic sum inside — signs included.",
      },
      {
        term: "Proof sketch",
        kind: "theorem",
        statement: "Each inside charge contributes $q_{i}/\\epsilon_{0}$ (solid-angle $4\\pi$); each outside charge contributes zero (entry and exit cones cancel); superposition sums them to $Q_{\\mathrm{enc}}/\\epsilon_{0}$.",
        detail: "Deforming the surface changes entry and exit patches together — net zero for outsiders always.",
      },
      {
        term: "Outside charges do not matter",
        kind: "insight",
        statement: "External charges shape $\\vec{E}$ on the surface but add zero net flux: every line entering from outside also leaves — only insiders run a surplus.",
        detail: "A $100\\ \\mathrm{nC}$ charge a millimeter outside contributes exactly $0$ to $\\oint \\vec{E} \\cdot d\\vec{A}$.",
      },
      {
        term: "Shape independence",
        kind: "method",
        statement: "Spheres, cubes, or potatoes enclosing the same $Q_{\\mathrm{enc}}$ report identical flux — choose whatever surface makes $\\vec{E}$ easy (Section 22.4's strategy).",
        detail: "Flux cares about topology (inside versus outside), never geometry.",
      },
      {
        term: "Differential form preview",
        kind: "notation",
        statement: "Shrinking the surface to a point gives $\\nabla \\cdot \\vec{E} = \\rho/\\epsilon_{0}$: flux per unit volume equals charge density over $\\epsilon_{0}$ — Maxwell's first equation.",
        detail: "Integral and differential forms say one thing: charge is the source of electric flux.",
      },
    ],
    figures: [
      {
        caption: "Inside charge: all lines exit ($+q/\\epsilon_{0}$). Outside charge: every entering line leaves (net $0$). Shape never matters.",
        svg: `<svg viewBox="0 0 400 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Inside versus outside charges and Gaussian surface"><ellipse cx="150" cy="90" rx="70" ry="60" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="150" cy="90" r="6" fill="currentColor"/><text x="140" y="115" font-size="12" fill="currentColor">+q in</text><g stroke="currentColor" stroke-width="1.4"><line x1="156" y1="90" x2="220" y2="90"/><line x1="150" y1="96" x2="150" y2="150"/><line x1="144" y1="90" x2="80" y2="90"/></g><circle cx="320" cy="90" r="6" fill="currentColor"/><text x="305" y="115" font-size="12" fill="currentColor">q out</text><path d="M314,90 Q280,60 230,55 Q200,52 185,70" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 3"/><path d="M314,90 Q280,120 230,125 Q200,128 185,110" fill="none" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 3"/></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Box with three charges",
        problem: "A closed surface encloses $+4.00\\ \\mathrm{nC}$, $-6.00\\ \\mathrm{nC}$, $+5.00\\ \\mathrm{nC}$; $-3.00\\ \\mathrm{nC}$ sits outside. Find the net flux.",
        steps: [
          { label: "Enclosed", text: "$Q_{\\mathrm{enc}} = 4.00 - 6.00 + 5.00 = +3.00\\ \\mathrm{nC}$; outsider ignored." },
          { label: "Flux", text: "$\\Phi_{E} = 3.00 \\times 10^{-9}/8.854 \\times 10^{-12} = 338.8\\ \\mathrm{N \\cdot m^{2}/C}$." },
          { label: "Shape note", text: "Sphere, cube, or potato: $339$ regardless." },
        ],
        result: "$\\Phi_{E} = 339\\ \\mathrm{N \\cdot m^{2}/C}$ outward.",
      },
      {
        title: "Dipole in a box",
        problem: "A box encloses $+2\\ \\mathrm{nC}$ and $-2\\ \\mathrm{nC}$. Find net flux and interpret.",
        steps: [
          { label: "Enclosed", text: "$Q_{\\mathrm{enc}} = +2 - 2 = 0$." },
          { label: "Flux", text: "$\\Phi_{E} = 0/\\epsilon_{0} = 0$." },
          { label: "Lines", text: "Every line from $+$ terminates on $-$ inside: none escape net — zero flux with nonzero field." },
        ],
        result: "Zero net flux despite strong internal fields.",
      },
    ],
    keyTakeaways: [
      "$\\oint \\vec{E} \\cdot d\\vec{A} = Q_{\\mathrm{enc}}/\\epsilon_{0}$ for every closed surface.",
      "Outside charges and surface shape never affect net flux.",
      "Differential form $\\nabla \\cdot \\vec{E} = \\rho/\\epsilon_{0}$: charge sources flux.",
    ],
    quiz: [
      {
        q: "A surface encloses $+3q$ and $-q$. Net outward flux is:",
        options: ["$4q/\\epsilon_{0}$", "$2q/\\epsilon_{0}$", "Zero", "$-2q/\\epsilon_{0}$"],
        answer: 1,
        explanation: "$Q_{\\mathrm{enc}} = 3q - q = 2q$, so $\\Phi_{E} = 2q/\\epsilon_{0}$.",
      },
      {
        q: "Moving a charge from inside to outside a closed surface:",
        options: ["Leaves flux unchanged", "Subtracts exactly its $q/\\epsilon_{0}$ contribution", "Doubles the flux", "Reverses all field directions"],
        answer: 1,
        explanation: "$Q_{\\mathrm{enc}}$ drops by $q$; outsiders contribute zero regardless of proximity.",
      },
      {
        q: "Gauss's law holds for:",
        options: ["Spheres only", "Any closed surface", "Open surfaces too", "Conductors only"],
        answer: 1,
        explanation: "The proof uses solid angles and superposition for arbitrary closed topology.",
      },
    ],
    depth: [
      {
        tier: "masters",
        title: "From Solid Angle to the Divergence Theorem",
        blocks: [
          {
            kind: "theorem",
            heading: "Gauss's law implies Coulomb's law",
            body: "Assume $\\oint \\vec{E} \\cdot d\\vec{A} = Q_{\\mathrm{enc}}/\\epsilon_{0}$ plus spherical symmetry for a point charge: on a concentric sphere $\\vec{E} = E(r)\\hat{r}$ is uniform in magnitude with $\\oint \\vec{E} \\cdot d\\vec{A} = E(r)4\\pi r^{2} = q/\\epsilon_{0}$, so $E = q/(4\\pi\\epsilon_{0}r^{2})$. The inverse square is therefore equivalent to flux conservation — either statement derives the other given symmetry (isotropy of space).",
          },
          {
            kind: "derivation",
            heading: "Solid-angle proof for off-center charges",
            body: "For $q$ at $\\vec{r}_{0}$ inside $S$, write $\\vec{E} \\cdot d\\vec{A} = (q/4\\pi\\epsilon_{0}r^{2})\\hat{r} \\cdot \\hat{n}\\,dA = (q/4\\pi\\epsilon_{0})\\,d\\Omega$, where $d\\Omega = \\hat{r} \\cdot \\hat{n}\\,dA/r^{2}$ is the solid angle subtended by $d\\vec{A}$. Integrating over closed $S$ gives $(q/4\\pi\\epsilon_{0}) \\times 4\\pi = q/\\epsilon_{0}$ since every interior point subtends $4\\pi$. For $q$ outside, the ray from $q$ pierces $S$ in entry-exit pairs with $d\\Omega$ of opposite sign, canceling exactly to zero.",
          },
          {
            kind: "proof",
            heading: "Divergence form via shrinking volumes",
            body: "Apply Gauss's law to a small volume $\\Delta V$ around $\\vec{r}$ with density $\\rho(\\vec{r})$: $\\oint \\vec{E} \\cdot d\\vec{A} \\approx (\\nabla \\cdot \\vec{E})\\Delta V$ by the divergence theorem, while $Q_{\\mathrm{enc}} \\approx \\rho\\Delta V$. Dividing by $\\Delta V$ and taking the limit yields $\\nabla \\cdot \\vec{E} = \\rho/\\epsilon_{0}$ at every point — Maxwell's first equation. The integral law constrains totals; the differential law constrains sources locally.",
          },
          {
            kind: "remark",
            heading: "Why symmetry is the price of extraction",
            body: "Gauss's law always holds, but extracting $\\vec{E}$ needs $E$ constant in magnitude over the Gaussian surface with known angle to $d\\vec{A}$ — true only for spherical, cylindrical, and planar symmetry. Without symmetry the integral is correct but useless for $\\vec{E}$; with it, Chapters 22–24 problems collapse to one-line algebra. Recognizing $\\nabla \\cdot \\vec{E} = \\rho/\\epsilon_{0}$ as a constraint (not a recipe) is the graduate viewpoint: existence and uniqueness theorems, not surface tricks, do the general work.",
          },
        ],
      },
    ],
  },
  {
    sectionId: "young-ch22-s4",
    readingTime: 6,
    intro: "Symmetry turns Gauss's law into a field calculator. Young deploys spheres, cylinders, and pillboxes to recover the point, line, plane, and shell fields — no component integrals required.",
    objectives: [
      "Choose Gaussian surfaces for spherical, cylindrical, and planar symmetry",
      "Derive line ($\\lambda/2\\pi\\epsilon_{0}r$), sheet ($\\sigma/2\\epsilon_{0}$), and shell fields",
      "State the spherical-shell theorem with inner/outer regions",
    ],
    concepts: [
      {
        term: "Gaussian-surface strategy",
        kind: "method",
        statement: "Pick $S$ so $E$ is constant in magnitude and parallel (or perpendicular) to $d\\vec{A}$ everywhere: spheres for points, coaxial cylinders for lines, pillboxes for sheets — then $E \\times (\\mathrm{area}) = Q_{\\mathrm{enc}}/\\epsilon_{0}$.",
        detail: "Symmetry must pre-exist in the charge; never impose a symmetric surface on asymmetric charge and factor $E$ out.",
      },
      {
        term: "Line of charge",
        kind: "theorem",
        statement: "An infinite line $\\lambda$ gives $E = \\lambda/(2\\pi\\epsilon_{0}r)$ radially: coaxial cylinder of length $L$ has flux $E(2\\pi rL) = \\lambda L/\\epsilon_{0}$ (end caps contribute zero).",
        detail: "$2.00\\ \\mu\\mathrm{C/m}$ at $5\\ \\mathrm{cm}$ gives $7.19 \\times 10^{5}\\ \\mathrm{N/C}$ — matching Chapter 21's integral in one line.",
      },
      {
        term: "Plane sheet and pair",
        kind: "theorem",
        statement: "One infinite sheet gives $E = \\sigma/(2\\epsilon_{0})$ uniform on each side; oppositely charged pairs give $\\sigma/\\epsilon_{0}$ between and zero outside — the capacitor field.",
        detail: "Pillbox straddling the sheet catches $\\sigma A$ with flux through two faces: $2EA = \\sigma A/\\epsilon_{0}$.",
      },
      {
        term: "Spherical shells",
        kind: "theorem",
        statement: "Outside a spherically symmetric charge ($r > R$), $E = Q_{\\mathrm{tot}}/(4\\pi\\epsilon_{0}r^{2})$; inside a uniform shell ($r < R$), $E = 0$ since $Q_{\\mathrm{enc}} = 0$.",
        detail: "Concentric-sphere flux uses $E(4\\pi r^{2}) = Q_{\\mathrm{enc}}/\\epsilon_{0}$ per region — piecewise fields with jumps at charged shells.",
      },
      {
        term: "Uniform volume sphere",
        kind: "law",
        statement: "A uniformly charged solid sphere ($\\rho$ constant) gives $E = Qr/(4\\pi\\epsilon_{0}R^{3})$ inside (growing linearly) and $kQ/r^{2}$ outside — $Q_{\\mathrm{enc}} = Q(r/R)^{3}$ inside.",
        detail: "Linear interior rise mirrors gravity inside Earth — same shell mathematics.",
      },
    ],
    examples: [
      {
        title: "Coaxial cable field",
        problem: "A long wire carries $\\lambda = +3.00\\ \\mu\\mathrm{C/m}$. Find $E$ at $r = 0.020\\ \\mathrm{m}$ and $0.200\\ \\mathrm{m}$.",
        steps: [
          { label: "Formula", text: "$E = \\lambda/(2\\pi\\epsilon_{0}r) = (3.00 \\times 10^{-6})/(2\\pi \\times 8.854 \\times 10^{-12} \\times r) = 5.393 \\times 10^{4}/r$." },
          { label: "At 2 cm", text: "$E = 5.393 \\times 10^{4}/0.020 = 2.70 \\times 10^{6}\\ \\mathrm{N/C}$." },
          { label: "At 20 cm", text: "$E = 5.393 \\times 10^{4}/0.200 = 2.70 \\times 10^{5}\\ \\mathrm{N/C}$ — ten times farther, ten times weaker ($1/r$)." },
        ],
        result: "$2.70 \\times 10^{6}$ and $2.70 \\times 10^{5}\\ \\mathrm{N/C}$ radially outward.",
      },
      {
        title: "Charged shell regions",
        problem: "A thin shell $R = 0.150\\ \\mathrm{m}$ carries $Q = +8.00\\ \\mathrm{nC}$. Find $E$ at $r = 0.050\\ \\mathrm{m}$ and $r = 0.300\\ \\mathrm{m}$.",
        steps: [
          { label: "Inside", text: "$Q_{\\mathrm{enc}} = 0$, so $E = 0$ exactly." },
          { label: "Outside", text: "$E = kQ/r^{2} = (8.988 \\times 10^{9})(8.00 \\times 10^{-9})/0.0900 = 71.90/0.0900 = 799\\ \\mathrm{N/C}$." },
          { label: "Jump", text: "Field jumps $0 \\to \\sigma/\\epsilon_{0}$ across the shell — surface charge discontinuities always jump $E$ by $\\sigma/\\epsilon_{0}$." },
        ],
        result: "$0$ inside; $799\\ \\mathrm{N/C}$ outward at $30\\ \\mathrm{cm}$.",
      },
    ],
    keyTakeaways: [
      "Match the surface to the symmetry: spheres, coaxial cylinders, pillboxes.",
      "Line $\\lambda/(2\\pi\\epsilon_{0}r)$; sheet $\\sigma/(2\\epsilon_{0})$; pair $\\sigma/\\epsilon_{0}$ between.",
      "Shells: pointlike outside, zero inside; volume spheres rise linearly inside.",
    ],
    quiz: [
      {
        q: "A Gaussian sphere inside a uniformly charged shell encloses:",
        options: ["All the charge", "Zero charge, so $E = 0$", "Half the charge", "Charge proportional to $r$"],
        answer: 1,
        explanation: "Shell charge lies outside the surface: $Q_{\\mathrm{enc}} = 0$ gives $E = 0$ everywhere inside.",
      },
      {
        q: "Field of an infinite line falls as $1/r$ rather than $1/r^{2}$ because:",
        options: ["Charge is infinite", "Cylindrical area grows as $r$ while enclosed charge per length is fixed", "Gauss's law fails", "Superposition fails"],
        answer: 1,
        explanation: "$E(2\\pi rL) = \\lambda L/\\epsilon_{0}$ forces $E \\propto 1/r$ — geometry sets the exponent.",
      },
      {
        q: "Between oppositely charged plates ($\\pm\\sigma$), the field is:",
        options: ["Zero", "$\\sigma/\\epsilon_{0}$ uniform", "$\\sigma/(2\\epsilon_{0})$ on one side only", "$2\\sigma/\\epsilon_{0}$"],
        answer: 1,
        explanation: "Both sheets' $\\sigma/(2\\epsilon_{0})$ point the same way between; outside they cancel.",
      },
      {
        q: "Inside a uniformly charged solid sphere, $E$ grows:",
        options: ["As $1/r^{2}$", "Linearly with $r$", "Exponentially", "Not at all (zero)"],
        answer: 1,
        explanation: "$Q_{\\mathrm{enc}} = Q(r/R)^{3}$ gives $E = kQr/R^{3} \\propto r$.",
      },
    ],
  },
  {
    sectionId: "young-ch22-s5",
    readingTime: 5,
    intro: "Excess charge lives on conductor surfaces and the outside field stands at $\\sigma/\\epsilon_{0}$ — Young proves both with Gaussian pillboxes and explores cavities, shielding, and the Faraday cage.",
    objectives: [
      "Prove excess charge resides on conductor surfaces in equilibrium",
      "Derive $E = \\sigma/\\epsilon_{0}$ just outside a conductor",
      "Explain cavity fields and electrostatic shielding",
    ],
    concepts: [
      {
        term: "Charge resides on the surface",
        kind: "theorem",
        statement: "A Gaussian surface just inside a conductor's skin encloses flux zero ($E = 0$ inside), so $Q_{\\mathrm{enc}} = 0$: all excess charge sits on outer (and cavity) surfaces.",
        detail: "Solid-conductor excess goes entirely outside; hollow conductors split between outer surface and cavity walls around interior charges.",
      },
      {
        term: "Field just outside",
        kind: "theorem",
        statement: "A pillbox straddling the surface catches $\\sigma A$ with flux only through its outer cap: $EA = \\sigma A/\\epsilon_{0}$, so $E = \\sigma/\\epsilon_{0}$ perpendicularly outward.",
        detail: "Double the isolated sheet's $\\sigma/(2\\epsilon_{0})$ because the conductor's interior contributes no opposing face — all flux exits one side.",
      },
      {
        term: "Cavity with charge",
        kind: "method",
        statement: "A cavity holding $q$ draws $-q$ on its walls (Gauss around the cavity gives $Q_{\\mathrm{enc}} = 0$ with $E = 0$ in metal) and pushes $+q$ plus any excess to the exterior.",
        detail: "Uncharged shell with $+q$ inside: $-q$ inner walls, $+q$ outer surface — outside field as if $q$ sat at center.",
      },
      {
        term: "Faraday cage shielding",
        kind: "insight",
        statement: "Closed conductors shield interiors from external fields: free charges rearrange to cancel intruders, leaving $E = 0$ inside — cars, planes, and screen rooms as lightning armor.",
        detail: "Mesh works when holes are small versus field variation scale; static shielding needs no grounding, only closure.",
      },
      {
        term: "Surface curvature and charge",
        kind: "law",
        statement: "Surface charge concentrates where curvature is high ($\\sigma \\propto 1/r$ locally); the outside field $\\sigma/\\epsilon_{0}$ spikes at points — corona, St. Elmo's fire, and lightning-rod action.",
        detail: "Smooth large-radius hardware (corona rings) prevents breakdown on high-voltage lines.",
      },
    ],
    figures: [
      {
        caption: "Pillbox at a conductor surface: interior cap sees $E = 0$, outer cap $EA = \\sigma A/\\epsilon_{0}$ — hence $E = \\sigma/\\epsilon_{0}$ normal to the surface.",
        svg: `<svg viewBox="0 0 400 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gaussian pillbox at conductor surface"><rect x="40" y="30" width="320" height="60" fill="currentColor" opacity="0.2" stroke="currentColor" stroke-width="2"/><text x="50" y="60" font-size="12" fill="currentColor">conductor E=0</text><rect x="180" y="60" width="60" height="80" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/><text x="245" y="110" font-size="12" fill="currentColor">pillbox</text><line x1="240" y1="100" x2="300" y2="100" stroke="currentColor" stroke-width="2"/><text x="305" y="104" font-size="12" fill="currentColor">E=σ/ε0</text><line x1="40" y1="90" x2="360" y2="90" stroke="currentColor" stroke-width="1.5"/></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Field at a charged plate",
        problem: "An isolated conducting plate carries $\\sigma = +4.00\\ \\mu\\mathrm{C/m^{2}}$ per face. Find $E$ just outside each face.",
        steps: [
          { label: "One face", text: "$E = \\sigma/\\epsilon_{0} = 4.00 \\times 10^{-6}/8.854 \\times 10^{-12} = 4.518 \\times 10^{5}\\ \\mathrm{N/C}$." },
          { label: "Both faces", text: "Each face pushes outward: fields point away on both sides, fed by their own $\\sigma$." },
          { label: "Versus sheet", text: "An insulating sheet with same $\\sigma$ gives half ($2.26 \\times 10^{5}$); the conductor doubles by one-siding the flux." },
        ],
        result: "$4.52 \\times 10^{5}\\ \\mathrm{N/C}$ normal to each face, outward.",
      },
      {
        title: "Cavity charge accounting",
        problem: "A neutral hollow conductor holds $q = +6.00\\ \\mathrm{nC}$ in its cavity. Find wall and exterior charges and the outside field at $0.500\\ \\mathrm{m}$.",
        steps: [
          { label: "Inner wall", text: "$-6.00\\ \\mathrm{nC}$ (cancels $q$ for $E = 0$ in metal)." },
          { label: "Outer surface", text: "$+6.00\\ \\mathrm{nC}$ (neutrality: $-6 + 6 = 0$ plus zero excess)." },
          { label: "Outside field", text: "$E = k(6.00 \\times 10^{-9})/0.25 = 53.93/0.25 = 215.7\\ \\mathrm{N/C}$ — as if $q$ were centered." },
        ],
        result: "$-6\\ \\mathrm{nC}$ inside walls, $+6\\ \\mathrm{nC}$ outside; $216\\ \\mathrm{N/C}$ at half a meter.",
      },
    ],
    keyTakeaways: [
      "Excess charge lives on conductor surfaces; interiors are field-free.",
      "Just outside, $E = \\sigma/\\epsilon_{0}$ perpendicular to the surface.",
      "Cavities image interior charge on walls; closed shells shield interiors.",
    ],
    quiz: [
      {
        q: "Excess charge on an isolated solid conductor resides:",
        options: ["Uniformly through the volume", "Entirely on the outer surface", "At the center", "Only at one point"],
        answer: 1,
        explanation: "Zero interior field forces zero enclosed charge for every interior Gaussian surface.",
      },
      {
        q: "Field just outside a conductor with local $\\sigma$ is:",
        options: ["$\\sigma/(2\\epsilon_{0})$", "$\\sigma/\\epsilon_{0}$ normal to the surface", "Zero", "Parallel to the surface"],
        answer: 1,
        explanation: "One-sided pillbox flux $EA = \\sigma A/\\epsilon_{0}$ with no interior contribution.",
      },
      {
        q: "A Faraday cage protects because:",
        options: ["Metal absorbs charge permanently", "Free charges rearrange to cancel external fields inside", "It is always grounded", "Electric fields cannot exist near metal"],
        answer: 1,
        explanation: "Conductor equilibrium forces $E = 0$ inside; rearranged surface charge does the canceling.",
      },
    ],
  },
]
