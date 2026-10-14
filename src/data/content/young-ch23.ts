import type { SectionContent } from '../library'

// ============================================================================
// Young & Freedman University Physics, 15th edition — Chapter 23
// Electric Potential (Sections 23.1 – 23.5)
// ============================================================================

export const youngCh23Content: SectionContent[] = [
  {
    sectionId: "young-ch23-s1",
    readingTime: 5,
    intro: "Electric forces conserve energy, so every charge arrangement holds potential energy. Young defines $U$ for charge pairs, extends it to distributions, and tracks work done by and against the field.",
    objectives: [
      "Write pair energy $U = kq_{1}q_{2}/r$ with correct signs",
      "Compute work by and against electric forces",
      "Assemble multi-charge energies by pair summation",
    ],
    concepts: [
      {
        term: "Potential energy of a pair",
        kind: "definition",
        statement: "Two point charges hold $U = kq_{1}q_{2}/r = q_{1}q_{2}/(4\\pi\\epsilon_{0}r)$, zero at infinite separation: positive for like (repulsion stores), negative for unlike (binding).",
        detail: "An electron-proton pair at $a_{0}$ holds $U = -27.2\\ \\mathrm{eV}$ — twice the $13.6\\ \\mathrm{eV}$ ionization energy (virial $K = -U/2$).",
      },
      {
        term: "Work by the field",
        kind: "theorem",
        statement: "Moving $q_{0}$ from $a$ to $b$, the field does $W_{a \\to b} = U_{a} - U_{b} = -\\Delta U$; outside agents do the negative, $W_{\\mathrm{ext}} = +\\Delta U$ for slow moves.",
        detail: "Falling with attraction ($U$ drops) gains kinetic energy; pushing like charges together ($U$ rises) demands external work.",
      },
      {
        term: "Many-charge assembly energy",
        kind: "method",
        statement: "Total $U$ sums over unique pairs: $U = \\sum_{i<j} kq_{i}q_{j}/r_{ij}$ — bring charges from infinity one by one, charging $kq_{i}q_{j}/r_{ij}$ per placement.",
        detail: "Three charges need three pairs; four need six — triangular numbers count the pairs.",
      },
      {
        term: "Negative energy means bound",
        kind: "insight",
        statement: "$U < 0$ systems need energy input to separate (atoms, nuclei ionize); $U > 0$ systems fly apart freely once released (alpha decay ejects).",
        detail: "Sign is physics, not bookkeeping: bound versus unbound is read straight off $U$.",
      },
      {
        term: "Conservative field",
        kind: "law",
        statement: "Electrostatic work is path-independent ($\\oint \\vec{E} \\cdot d\\vec{l} = 0$), so $U$ is a state function and potential $V = U/q_{0}$ is well-defined (Section 23.2 builds on this).",
        detail: "Loop integrals vanish only for static charges; changing $\\vec{B}$ breaks it (Chapter 29's induced fields).",
      },
    ],
    examples: [
      {
        title: "Pair energy in electronvolts",
        problem: "Two protons sit $1.00 \\times 10^{-15}\\ \\mathrm{m}$ apart (nuclear contact). Find $U$ in $\\mathrm{MeV}$.",
        steps: [
          { label: "Joules", text: "$U = ke^{2}/r = (8.988 \\times 10^{9})(1.602 \\times 10^{-19})^{2}/10^{-15} = 2.307 \\times 10^{-28}/10^{-15} = 2.307 \\times 10^{-13}\\ \\mathrm{J}$." },
          { label: "To eV", text: "$2.307 \\times 10^{-13}/1.602 \\times 10^{-19} = 1.44 \\times 10^{6}\\ \\mathrm{eV} = 1.44\\ \\mathrm{MeV}$." },
          { label: "Meaning", text: "Coulomb repulsion costs MeVs at nuclear range — fusion must climb this barrier (stars use heat plus tunneling)." },
        ],
        result: "$U = +1.44\\ \\mathrm{MeV}$ repulsive.",
      },
      {
        title: "Assembling three charges",
        problem: "Charges $+q$, $+q$, $-q$ ($q = 2.00\\ \\mathrm{nC}$) occupy an equilateral triangle of side $0.100\\ \\mathrm{m}$. Find total $U$.",
        steps: [
          { label: "Pair unit", text: "$kq^{2}/a = (8.988 \\times 10^{9})(4.00 \\times 10^{-18})/0.100 = 3.595 \\times 10^{-7}\\ \\mathrm{J}$." },
          { label: "Three pairs", text: "$(+,+): +1$ unit; $(+,-)$ twice: $-1$ each. Total $= 1 - 1 - 1 = -1$ unit." },
          { label: "Total", text: "$U = -3.60 \\times 10^{-7}\\ \\mathrm{J}$ — bound overall." },
        ],
        result: "$U = -0.360\\ \\mu\\mathrm{J}$.",
      },
    ],
    keyTakeaways: [
      "$U = kq_{1}q_{2}/r$: sign tells bound ($-$) from unbound ($+$).",
      "Field does $W = -\\Delta U$; agents do $+\\Delta U$ slowly.",
      "Multi-charge $U$ sums unique pairs brought from infinity.",
    ],
    quiz: [
      {
        q: "Two like charges released from rest:",
        options: ["Fall together", "Fly apart, converting $+U$ into kinetic energy", "Stay fixed", "Oscillate forever"],
        answer: 1,
        explanation: "$U > 0$ repulsion accelerates them apart; stored energy becomes motion.",
      },
      {
        q: "Assembling four point charges requires summing:",
        options: ["$4$ pairs", "$6$ pairs", "$16$ pairs", "$1$ pair"],
        answer: 1,
        explanation: "Unique pairs $= 4 \\times 3/2 = 6$.",
      },
      {
        q: "Electrostatic work around any closed loop is zero because:",
        options: ["Fields are weak", "The field is conservative (static charges)", "Charges never move", "Friction cancels it"],
        answer: 1,
        explanation: "Path independence ($\\oint \\vec{E} \\cdot d\\vec{l} = 0$) is what lets $U$ and $V$ exist.",
      },
    ],
  },
  {
    sectionId: "young-ch23-s2",
    readingTime: 5,
    intro: "Potential energy per unit charge — voltage — lets engineers discuss energy without naming the charge. Young defines $V = U/q_{0}$, the volt, and electronvolts, and converts fluently among them.",
    objectives: [
      "Define $V = U/q_{0}$ and the volt $1\\ \\mathrm{V} = 1\\ \\mathrm{J/C}$",
      "Relate $V_{ab} = -\\int_{a}^{b} \\vec{E} \\cdot d\\vec{l}$ to field work",
      "Use electronvolts for atomic-scale energies",
    ],
    concepts: [
      {
        term: "Electric potential",
        kind: "definition",
        statement: "**Electric potential** $V = U/q_{0}$ is potential energy per unit charge in $\\mathrm{J/C} = $ **volts** ($\\mathrm{V}$); only differences $V_{ab} = V_{a} - V_{b}$ are physical.",
        detail: "A $12\\ \\mathrm{V}$ battery gives every coulomb $12\\ \\mathrm{J}$ of climb — charge-independent pricing.",
      },
      {
        term: "Potential from field",
        kind: "theorem",
        statement: "$V_{a} - V_{b} = \\int_{a}^{b} \\vec{E} \\cdot d\\vec{l}$ (equivalently $V_{b} - V_{a} = -\\int_{a}^{b} \\vec{E} \\cdot d\\vec{l}$): potential drops along field lines.",
        detail: "Positive charges fall from high to low $V$; electrons climb — multimeters read these drops directly.",
      },
      {
        term: "Electronvolt",
        kind: "notation",
        statement: "One **electronvolt** $1\\ \\mathrm{eV} = 1.602 \\times 10^{-19}\\ \\mathrm{J}$ is the energy of charge $e$ crossing $1\\ \\mathrm{V}$; chemistry lives in $\\mathrm{eV}$, circuits in joules.",
        detail: "$13.6\\ \\mathrm{eV}$ ionizes hydrogen; a $1.5\\ \\mathrm{V}$ AA cell gives each electron $1.5\\ \\mathrm{eV}$.",
      },
      {
        term: "Charge times voltage is energy",
        kind: "method",
        statement: "Energy changes are $\\Delta U = q\\Delta V$: a $2.0\\ \\mu\\mathrm{C}$ charge falling $500\\ \\mathrm{V}$ gains $(2.0 \\times 10^{-6})(500) = 1.0 \\times 10^{-3}\\ \\mathrm{J}$ of kinetic energy.",
        detail: "Particle accelerators quote $\\mathrm{MV}$ (potential) meaning $\\mathrm{MeV}$ per unit charge — same relation at scale.",
      },
      {
        term: "Conductors are equipotentials",
        kind: "insight",
        statement: "In equilibrium $\\vec{E} = 0$ inside conductors, so $V$ is constant throughout each conductor — voltmeter probes can touch anywhere on a terminal.",
        detail: "High-voltage work exploits this: linemen at line potential in Faraday suits feel no $\\Delta V$.",
      },
    ],
    figures: [
      {
        caption: "Positive charge falls from high to low $V$ gaining $q\\Delta V$; electrons climb the same slope — voltage as electrical height.",
        svg: `<svg viewBox="0 0 400 170" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Charge falling through a potential drop"><polygon points="40,130 200,130 360,50 360,90 200,170 40,170" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="1.5"/><circle cx="120" cy="105" r="7" fill="currentColor"/><line x1="120" y1="112" x2="220" y2="140" stroke="currentColor" stroke-width="2"/><text x="225" y="145" font-size="12" fill="currentColor">falls: gains qV</text><text x="300" y="45" font-size="12" fill="currentColor">high V</text><text x="60" y="165" font-size="12" fill="currentColor">low V</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "CRT electron energy",
        problem: "An electron crosses $V = 5000\\ \\mathrm{V}$. Find its gained kinetic energy in joules and $\\mathrm{eV}$, and its speed (nonrelativistic).",
        steps: [
          { label: "Energy", text: "$K = eV = 5000\\ \\mathrm{eV} = (5000)(1.602 \\times 10^{-19}) = 8.01 \\times 10^{-16}\\ \\mathrm{J}$." },
          { label: "Speed", text: "$v = \\sqrt{2K/m} = \\sqrt{2(8.01 \\times 10^{-16})/9.11 \\times 10^{-31}} = \\sqrt{1.759 \\times 10^{15}} = 4.19 \\times 10^{7}\\ \\mathrm{m/s}$." },
          { label: "Fraction of c", text: "$0.14c$ — nonrelativistic treatment is marginal but standard for textbook CRTs." },
        ],
        result: "$5000\\ \\mathrm{eV} = 8.01 \\times 10^{-16}\\ \\mathrm{J}$; $v = 4.2 \\times 10^{7}\\ \\mathrm{m/s}$.",
      },
      {
        title: "Falling through 12 V",
        problem: "A $+3.00\\ \\mu\\mathrm{C}$ charge moves from $12.0\\ \\mathrm{V}$ to $4.00\\ \\mathrm{V}$. Find $\\Delta U$ and the work done by the field.",
        steps: [
          { label: "Delta U", text: "$\\Delta U = q\\Delta V = (3.00 \\times 10^{-6})(4.00 - 12.0) = (3.00 \\times 10^{-6})(-8.00) = -2.40 \\times 10^{-5}\\ \\mathrm{J}$." },
          { label: "Field work", text: "$W = -\\Delta U = +2.40 \\times 10^{-5}\\ \\mathrm{J}$ — the field pays out as the charge descends." },
          { label: "Check", text: "Positive charge falling to lower $V$ gains kinetic energy. Consistent." },
        ],
        result: "$\\Delta U = -24.0\\ \\mu\\mathrm{J}$; field does $+24.0\\ \\mu\\mathrm{J}$.",
      },
    ],
    keyTakeaways: [
      "$V = U/q_{0}$ in volts; only differences matter.",
      "$V_{a} - V_{b} = \\int_{a}^{b} \\vec{E} \\cdot d\\vec{l}$: $V$ drops along $\\vec{E}$.",
      "$1\\ \\mathrm{eV} = 1.602 \\times 10^{-19}\\ \\mathrm{J}$; $\\Delta U = q\\Delta V$ prices motion.",
    ],
    quiz: [
      {
        q: "A proton crosses a $100\\ \\mathrm{V}$ drop. Its kinetic gain is:",
        options: ["$100\\ \\mathrm{eV}$", "$100\\ \\mathrm{J}$", "$1.602 \\times 10^{-17}\\ \\mathrm{eV}$", "Zero"],
        answer: 0,
        explanation: "$\\Delta U = q\\Delta V = e(100\\ \\mathrm{V}) = 100\\ \\mathrm{eV} = 1.602 \\times 10^{-17}\\ \\mathrm{J}$.",
      },
      {
        q: "Potential decreases:",
        options: ["Opposite field lines", "Along field lines", "Perpendicular to field lines", "Only inside conductors"],
        answer: 1,
        explanation: "$V_{a} - V_{b} = \\int_{a}^{b} \\vec{E} \\cdot d\\vec{l}$ is positive moving with $\\vec{E}$: $V$ falls downstream.",
      },
      {
        q: "An isolated conductor in equilibrium has:",
        options: ["Varying $V$ inside", "Uniform $V$ throughout", "Zero charge", "Maximum internal field"],
        answer: 1,
        explanation: "$\\vec{E} = 0$ inside forces $\\int \\vec{E} \\cdot d\\vec{l} = 0$: no potential differences survive.",
      },
      {
        q: "The volt equals:",
        options: ["$1\\ \\mathrm{N/C}$", "$1\\ \\mathrm{J/C}$", "$1\\ \\mathrm{C/J}$", "$1\\ \\mathrm{T \\cdot m}$"],
        answer: 1,
        explanation: "$V = U/q$: joules per coulomb by definition.",
      },
    ],
  },
  {
    sectionId: "young-ch23-s3",
    readingTime: 6,
    intro: "Point charges, dipoles, rings, disks, lines — Young computes $V$ for each by superposition and integration, showing the scalar sum that beats vector field integrals for speed.",
    objectives: [
      "Write $V = kq/r$ for point charges and superpose scalars",
      "Derive ring, disk, and line potentials by integration",
      "Take far-field and near-field limits of continuous potentials",
    ],
    concepts: [
      {
        term: "Point-charge potential",
        kind: "law",
        statement: "With $V(\\infty) = 0$, a point charge gives $V = kq/r = q/(4\\pi\\epsilon_{0}r)$: positive around $+q$, negative around $-q$, falling as $1/r$.",
        detail: "$1\\ \\mathrm{nC}$ makes $9.0\\ \\mathrm{V}$ at $1\\ \\mathrm{m}$, $90\\ \\mathrm{V}$ at $10\\ \\mathrm{cm}$ — voltmeter-scale numbers from nanocoulombs.",
      },
      {
        term: "Scalar superposition",
        kind: "method",
        statement: "Potentials add as scalars: $V_{P} = \\sum_{i} kq_{i}/r_{iP}$ — no components, no angles, just signed $1/r$ terms summed.",
        detail: "Dipole-axis $V = kp\\cos\\theta/r^{2}$ falls faster ($1/r^{2}$) since leading $1/r$ terms cancel — scalar cancellation at work.",
      },
      {
        term: "Ring and disk potentials",
        kind: "theorem",
        statement: "Ring on axis: $V = kQ/\\sqrt{x^{2}+a^{2}}$ (all charge equidistant). Disk: $V = (\\sigma/2\\epsilon_{0})(\\sqrt{x^{2}+R^{2}} - |x|)$, giving uniform-field $V = E|x|$ near the sheet.",
        detail: "Differentiating $V(x)$ reproduces every Section 21.5 field — the gradient check of Section 23.5.",
      },
      {
        term: "Finite line potential",
        kind: "theorem",
        statement: "A finite rod gives $V = (\\lambda/4\\pi\\epsilon_{0})\\ln[(L + \\sqrt{L^{2}+y^{2}})/(-L + \\sqrt{L^{2}+y^{2}})]$ on its bisector; infinite lines need $V = -(\\lambda/2\\pi\\epsilon_{0})\\ln(r/r_{0})$ with an arbitrary zero $r_{0}$.",
        detail: "Logarithmic growth forbids $V(\\infty) = 0$ for infinite lines — zeros must be declared, not assumed.",
      },
      {
        term: "Zero conventions",
        kind: "notation",
        statement: "Finite distributions take $V(\\infty) = 0$; infinite ones anchor $V = 0$ at a stated $r_{0}$; only differences ever enter physics.",
        detail: "Bird-on-a-wire safety is zero-convention physics: the whole wire is one $V$, so $\\Delta V = 0$ across the bird.",
      },
    ],
    figures: [
      {
        caption: "Point-charge $V = kq/r$ (steep $1/r$ well) versus dipole-axis $V \\propto 1/r^{2}$: cancellation flattens the far potential.",
        svg: `<svg viewBox="0 0 400 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Point versus dipole potential falloff"><line x1="30" y1="150" x2="380" y2="150" stroke="currentColor" stroke-width="1.5"/><line x1="30" y1="150" x2="30" y2="15" stroke="currentColor" stroke-width="1.5"/><path d="M40,30 Q70,60 120,110 Q200,145 360,148" fill="none" stroke="currentColor" stroke-width="2"/><path d="M40,60 Q80,100 140,130 Q220,148 360,149" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="7 4"/><text x="250" y="120" font-size="12" fill="currentColor">kq/r</text><text x="250" y="145" font-size="12" fill="currentColor">dipole 1/r²</text><text x="35" y="30" font-size="12" fill="currentColor">V</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Potential of two charges",
        problem: "$+5.00\\ \\mathrm{nC}$ at $x = -0.060\\ \\mathrm{m}$ and $-3.00\\ \\mathrm{nC}$ at $x = +0.060\\ \\mathrm{m}$. Find $V$ at the origin.",
        steps: [
          { label: "Positive term", text: "$V_{+} = kq/r = (8.988 \\times 10^{9})(5.00 \\times 10^{-9})/0.060 = 44.94/0.060 = 749\\ \\mathrm{V}$." },
          { label: "Negative term", text: "$V_{-} = (8.988 \\times 10^{9})(-3.00 \\times 10^{-9})/0.060 = -449.4\\ \\mathrm{V}$." },
          { label: "Sum", text: "$V = 749 - 449 = +300\\ \\mathrm{V}$ — scalars add with signs, no angles." },
        ],
        result: "$V = +300\\ \\mathrm{V}$ at the origin.",
      },
      {
        title: "Ring potential on axis",
        problem: "Ring $Q = +8.00\\ \\mathrm{nC}$, $a = 0.120\\ \\mathrm{m}$. Find $V$ at $x = 0.160\\ \\mathrm{m}$ on axis.",
        steps: [
          { label: "Distance", text: "$r = \\sqrt{0.160^{2} + 0.120^{2}} = \\sqrt{0.0256 + 0.0144} = \\sqrt{0.0400} = 0.200\\ \\mathrm{m}$." },
          { label: "Potential", text: "$V = kQ/r = (8.988 \\times 10^{9})(8.00 \\times 10^{-9})/0.200 = 71.90/0.200 = 359.5\\ \\mathrm{V}$." },
          { label: "Field check", text: "$E_{x} = -dV/dx = kQx/(x^{2}+a^{2})^{3/2} = 1438\\ \\mathrm{N/C}$ — Section 23.5's gradient in action." },
        ],
        result: "$V = 360\\ \\mathrm{V}$; $E_{x} = 1.44 \\times 10^{3}\\ \\mathrm{N/C}$.",
      },
    ],
    keyTakeaways: [
      "$V = kq/r$ superposes as signed scalars — faster than vector $\\vec{E}$ sums.",
      "Ring $kQ/\\sqrt{x^{2}+a^{2}}$; disk $(\\sigma/2\\epsilon_{0})(\\sqrt{x^{2}+R^{2}}-|x|)$.",
      "Infinite lines need declared zeros: $V \\propto -\\ln(r/r_{0})$.",
    ],
    quiz: [
      {
        q: "Potential at equal distances from $+q$ and $-q$ (a dipole bisector point equidistant) is:",
        options: ["$2kq/r$", "Zero", "$kq/(2r)$", "Infinite"],
        answer: 1,
        explanation: "$V = kq/r + k(-q)/r = 0$: scalar cancellation — while $\\vec{E}$ there is nonzero.",
      },
      {
        q: "Scalar superposition beats vector superposition because:",
        options: ["It gives different answers", "Potentials add without components or angles", "It avoids Coulomb's law", "It needs no zero convention"],
        answer: 1,
        explanation: "Signed $1/r$ terms sum directly; $\\vec{E}$ needs $x, y, z$ resolution first.",
      },
      {
        q: "Far from any finite charge distribution, $V$ approaches:",
        options: ["Zero exponentially", "$kQ_{\\mathrm{tot}}/r$ (pointlike)", "A constant", "$1/r^{2}$ always"],
        answer: 1,
        explanation: "Multipole expansion: monopole $kQ/r$ leads unless $Q_{\\mathrm{tot}} = 0$ (then dipole $1/r^{2}$).",
      },
    ],
  },
  {
    sectionId: "young-ch23-s4",
    readingTime: 4,
    intro: "Contour maps of voltage — equipotential surfaces — turn potential into pictures. Young shows they cross field lines at right angles and that no work is needed to move along them.",
    objectives: [
      "Define equipotentials and their perpendicularity to field lines",
      "Sketch equipotentials for point, dipole, and uniform fields",
      "Explain why conductors are equipotential volumes",
    ],
    concepts: [
      {
        term: "Equipotential surface",
        kind: "definition",
        statement: "An **equipotential surface** joins points of equal $V$; moving charge along it needs no work since $W = q\\Delta V = 0$.",
        detail: "Topographic contours are the analogy: walking a contour burns no gravitational energy.",
      },
      {
        term: "Perpendicularity theorem",
        kind: "theorem",
        statement: "Field lines meet equipotentials at right angles: any tangential $\\vec{E}$ would do work along the surface, contradicting $\\Delta V = 0$.",
        detail: "Point charges give spherical equipotentials crossed radially; uniform fields give planar stacks crossed straight.",
      },
      {
        term: "Spacing measures field",
        kind: "insight",
        statement: "Crowded equipotentials mean strong $E$ ($E \\approx \\Delta V/\\Delta s$): high-voltage maps bunch contours near sharp electrodes exactly where lines crowd.",
        detail: "Printed $10\\ \\mathrm{V}$-spaced contours $2\\ \\mathrm{mm}$ apart read $E = 5000\\ \\mathrm{V/m}$ at a glance.",
      },
      {
        term: "Conductors as equipotentials",
        kind: "law",
        statement: "Equilibrium conductors are equipotential volumes bounded by equipotential surfaces — field lines strike them normally (Section 21.6's rule recovered).",
        detail: "Van de Graaff domes hold megavolts uniformly; car bodies in storms are single-$V$ shells.",
      },
      {
        term: "No work paths",
        kind: "method",
        statement: "Decompose any displacement into along- and across-equipotential parts: only the across part costs $q\\Delta V$ — the fastest route to work integrals.",
        detail: "Sliding around a sphere centered on $q$ is free; radial moves bill the full $kq\\Delta(1/r)$.",
      },
    ],
    figures: [
      {
        caption: "Dipole equipotentials (dashed) cross field lines (solid) everywhere at right angles; conductors would appear as single contours.",
        svg: `<svg viewBox="0 0 400 180" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Equipotentials perpendicular to dipole field lines"><circle cx="150" cy="90" r="7" fill="currentColor"/><circle cx="250" cy="90" r="7" fill="currentColor"/><g fill="none" stroke="currentColor" stroke-width="1.3"><path d="M159,90 Q200,50 241,90"/><path d="M159,90 Q200,130 241,90"/></g><g fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" opacity="0.7"><ellipse cx="150" cy="90" rx="22" ry="34"/><ellipse cx="250" cy="90" rx="22" ry="34"/><ellipse cx="200" cy="90" rx="70" ry="55"/></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Reading E from contours",
        problem: "Two $50\\ \\mathrm{V}$-spaced equipotentials lie $4.0\\ \\mathrm{mm}$ apart near an electrode. Estimate $E$.",
        steps: [
          { label: "Gradient", text: "$E \\approx \\Delta V/\\Delta s = 50/0.0040 = 12{,}500\\ \\mathrm{V/m}$." },
          { label: "Direction", text: "Perpendicular to contours, from high to low $V$." },
          { label: "Check", text: "Tighter spacing always flags stronger field — contour crowding is field crowding." },
        ],
        result: "$E \\approx 1.25 \\times 10^{4}\\ \\mathrm{V/m}$.",
      },
      {
        title: "Free ride around a point charge",
        problem: "A $+1.00\\ \\mu\\mathrm{C}$ charge slides $90^{\\circ}$ around a $+5\\ \\mathrm{nC}$ charge at fixed $r = 0.200\\ \\mathrm{m}$, then moves radially to $0.400\\ \\mathrm{m}$. Find work per leg.",
        steps: [
          { label: "Arc", text: "$\\Delta V = 0$ on the sphere: $W = 0$." },
          { label: "Radial", text: "$\\Delta V = kq(1/0.4 - 1/0.2) = 44.94(2.5 - 5.0) = -112.35\\ \\mathrm{V}$; $W_{\\mathrm{field}} = -q\\Delta V = -(10^{-6})(-112.35) = +1.12 \\times 10^{-4}\\ \\mathrm{J}$." },
          { label: "Total", text: "All work is radial; the arc was a free ride." },
        ],
        result: "$0$ on the arc; $112\\ \\mu\\mathrm{J}$ by the field radially.",
      },
    ],
    keyTakeaways: [
      "Equipotentials join equal $V$; motion along them is work-free.",
      "Field lines cross equipotentials perpendicularly, high to low.",
      "Contour spacing $\\Delta V/\\Delta s$ reads field strength directly.",
    ],
    quiz: [
      {
        q: "Moving $q$ along an equipotential requires work:",
        options: ["$qE$ times distance", "Zero ($\\Delta V = 0$)", "Infinite", "$kq^{2}/r$"],
        answer: 1,
        explanation: "$W = -q\\Delta V = 0$ on constant-$V$ paths by definition.",
      },
      {
        q: "Equipotentials cross field lines at $90^{\\circ}$ because:",
        options: ["It looks neat", "Tangential $E$ would do work along constant $V$ — a contradiction", "Gauss demands it", "Charge forbids acute angles"],
        answer: 1,
        explanation: "Work along the path is $q\\int \\vec{E} \\cdot d\\vec{l}$; tangential components would make it nonzero.",
      },
      {
        q: "Closely spaced equipotentials indicate:",
        options: ["Weak field", "Strong field ($E \\approx \\Delta V/\\Delta s$)", "Zero charge", "High resistance"],
        answer: 1,
        explanation: "Fixed $\\Delta V$ over small $\\Delta s$ means steep gradient — strong field.",
      },
    ],
  },
  {
    sectionId: "young-ch23-s5",
    readingTime: 5,
    intro: "Potential differentiates back into field: $\\vec{E} = -\\nabla V$. Young derives the gradient relations component by component and uses them to recover hard-won fields from easy potentials.",
    objectives: [
      "State $E_{x} = -\\partial V/\\partial x$ (and $y, z$) with the minus sign",
      "Recover ring, disk, and line fields by differentiating $V$",
      "Explain the minus sign as downhill flow of positive charge",
    ],
    concepts: [
      {
        term: "Potential gradient",
        kind: "law",
        statement: "Each field component is the negative slope of $V$: $E_{x} = -\\partial V/\\partial x$, $E_{y} = -\\partial V/\\partial y$, $E_{z} = -\\partial V/\\partial z$ — compactly $\\vec{E} = -\\nabla V$.",
        detail: "Steepest $V$-descent points along $\\vec{E}$; positive charges roll downhill in voltage.",
      },
      {
        term: "Minus sign meaning",
        kind: "insight",
        statement: "The minus sign sends $\\vec{E}$ from high to low $V$: $V$ rises against the field ($\\int \\vec{E} \\cdot d\\vec{l}$ accumulates) and falls with it.",
        detail: "Dropping the sign predicts uphill fields — the commonest gradient error; always check against a point charge ($V = kq/r$, $E_{r} = +kq/r^{2}$).",
      },
      {
        term: "Ring field from potential",
        kind: "method",
        statement: "From $V = kQ(x^{2}+a^{2})^{-1/2}$, $E_{x} = -dV/dx = kQx/(x^{2}+a^{2})^{3/2}$ — one derivative replaces the whole cosine-projection integral.",
        detail: "Off-axis components follow from $\\partial/\\partial y$, $\\partial/\\partial z$ of the full $V(x,y,z)$.",
      },
      {
        term: "Uniform field from linear V",
        kind: "theorem",
        statement: "Parallel-plate $V = Ed$ (linear) differentiates to uniform $E = -\\Delta V/\\Delta x$: constant slope means constant field.",
        detail: "$100\\ \\mathrm{V}$ across $2\\ \\mathrm{mm}$ gives $50{,}000\\ \\mathrm{V/m}$ — the capacitor-field shortcut.",
      },
      {
        term: "When gradient fails",
        kind: "notation",
        statement: "The gradient route needs $V$ everywhere first; for symmetric charge, Gauss gives $\\vec{E}$ faster — choose per problem: symmetry → Gauss, asymmetry → $V$ then $-\\nabla V$.",
        detail: "Exam strategy in one line: symmetric → Gauss; lumpy → integrate scalar $V$, then differentiate.",
      },
    ],
    examples: [
      {
        title: "Disk field via gradient",
        problem: "Disk potential on axis: $V = (\\sigma/2\\epsilon_{0})(\\sqrt{x^{2}+R^{2}} - x)$ for $x > 0$. Recover $E_{x}$.",
        steps: [
          { label: "Differentiate", text: "$dV/dx = (\\sigma/2\\epsilon_{0})(x/\\sqrt{x^{2}+R^{2}} - 1)$." },
          { label: "Negate", text: "$E_{x} = -dV/dx = (\\sigma/2\\epsilon_{0})(1 - x/\\sqrt{x^{2}+R^{2}})$. Matches Section 21.5." },
          { label: "Sheet limit", text: "$R \\to \\infty$: $x/\\sqrt{x^{2}+R^{2}} \\to 0$, so $E_{x} \\to \\sigma/(2\\epsilon_{0})$. Confirmed." },
        ],
        result: "$E_{x} = (\\sigma/2\\epsilon_{0})[1 - x/\\sqrt{x^{2}+R^{2}}]$.",
      },
      {
        title: "Field from a voltage map",
        problem: "Near a point, $V(x,y) = 200 - 3000x + 4000y$ (volts, meters). Find $\\vec{E}$.",
        steps: [
          { label: "x-component", text: "$E_{x} = -\\partial V/\\partial x = +3000\\ \\mathrm{V/m}$." },
          { label: "y-component", text: "$E_{y} = -\\partial V/\\partial y = -4000\\ \\mathrm{V/m}$." },
          { label: "Magnitude", text: "$E = \\sqrt{3000^{2} + 4000^{2}} = 5000\\ \\mathrm{V/m}$ at $\\tan^{-1}(-4/3) = -53.1^{\\circ}$." },
        ],
        result: "$\\vec{E} = (3000\\hat{x} - 4000\\hat{y})\\ \\mathrm{V/m}$, $5000\\ \\mathrm{V/m}$ at $-53^{\\circ}$.",
      },
    ],
    keyTakeaways: [
      "$\\vec{E} = -\\nabla V$: components are negative voltage slopes.",
      "Differentiating scalar $V$ beats integrating vector $d\\vec{E}$ for lumpy charge.",
      "Minus sign aims $\\vec{E}$ downhill; symmetric charge still prefers Gauss.",
    ],
    quiz: [
      {
        q: "Given $V = kq/r$, radial $E_{r}$ is:",
        options: ["$-kq/r^{2}$", "$+kq/r^{2}$", "$-kq/r$", "Zero"],
        answer: 1,
        explanation: "$E_{r} = -\\partial V/\\partial r = -(-kq/r^{2}) = +kq/r^{2}$ — outward for $+q$.",
      },
      {
        q: "The minus sign in $\\vec{E} = -\\nabla V$ means:",
        options: ["Fields are negative", "$\\vec{E}$ points down the voltage slope, high to low", "Potential is always negative", "Energy is lost"],
        answer: 1,
        explanation: "Positive charges fall from high to low $V$; the gradient points uphill, so $\\vec{E}$ needs negation.",
      },
      {
        q: "Best route to the field of an asymmetric charge lump is:",
        options: ["Gauss's law directly", "Integrate scalar $V$, then $\\vec{E} = -\\nabla V$", "Coulomb force guessing", "Equipotential counting only"],
        answer: 1,
        explanation: "Scalar sums avoid vector resolution; differentiation restores the vector at the end.",
      },
    ],
  },
]
