import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 29
// Magnetic Fields Due to Currents — sections 29-1 … 29-5
// (ids hall-ch29-s1 … hall-ch29-s5, verbatim from library-parts/halliday.ts)
// Constant used throughout: μ₀ = 4π×10⁻⁷ T·m/A (the permeability constant).
// ============================================================================

export const hallCh29Content: SectionContent[] = [
  // ------------------------------------------------------------------ 29-1
  {
    sectionId: 'hall-ch29-s1',
    readingTime: 8,
    intro: "In 1820 Oersted watched a compass needle twitch beside a current-carrying wire, and physics had a new problem: find the magnetic field that a current produces. The Biot–Savart law answers it in exactly the spirit of Coulomb's law — chop the current into tiny directed elements, write the field each contributes, and integrate. Two geometries close every exam bank: the long straight wire and the circular arc.",
    objectives: [
      "State the Biot–Savart law in vector form and find the magnitude and direction of $d\\vec B$ from any current element",
      "Integrate the law to get $B = \\mu_0 i/2\\pi R$ for a long straight wire and $B = \\mu_0 i\\phi/4\\pi R$ for a circular arc",
      "Apply the right-hand rules that keep the directions of $\\vec B$ honest",
    ],
    concepts: [
      {
        term: 'Biot–Savart law',
        kind: 'law',
        statement: "**A current element $i\\,d\\vec s$ contributes, at a point $P$ a distance $r$ away, the magnetic field** $$d\\vec B = \\frac{\\mu_0}{4\\pi}\\,\\frac{i\\,d\\vec s \\times \\hat r}{r^2},$$ **where $\\hat r$ points from the element toward $P$.** The magnitude is $dB = \\mu_0 i\\,ds\\sin\\theta/4\\pi r^2$, with $\\theta$ the angle between $d\\vec s$ and $\\hat r$; the direction of $d\\vec B$ is that of the cross product. The permeability constant is $\\mu_0 = 4\\pi\\times 10^{-7}\\ \\mathrm{T\\cdot m/A}$.",
        detail: "The total field is the vector sum (integral) over every element of the circuit — superposition again. An element that points directly toward or away from $P$ contributes nothing, because $\\sin\\theta = 0$.",
      },
      {
        term: 'Right-hand rules for direction',
        kind: 'method',
        statement: "**Point the fingers of your right hand along $d\\vec s$ and curl them (through the smaller angle) toward $\\hat r$; your thumb gives the direction of $d\\vec B$.** For a straight wire there is a shortcut: grip the wire with the right thumb along the conventional current and the curled fingers show how $\\vec B$ circulates.",
        detail: "Out of the page is drawn as a dot in a circle (⊙) — the tip of an arrow coming at you; into the page as a cross (⊗) — the tail feathers.",
      },
      {
        term: 'Field of a long straight wire',
        kind: 'theorem',
        statement: "**At perpendicular distance $R$ from a very long straight wire,** $$B = \\frac{\\mu_0 i}{2\\pi R},$$ **circling the wire in the sense given by the right-hand rule.** The field falls off as $1/R$ — one power slower than a point charge's field, because a wire is a line of sources, not a point.",
        detail: "Integrating: with $r = R/\\sin\\theta$ and $ds = r\\,d\\theta/\\sin\\theta$, each element gives $dB = (\\mu_0 i/4\\pi R)\\sin\\theta\\,d\\theta$, and $\\int_0^{\\pi}\\sin\\theta\\,d\\theta = 2$. At 1.0 cm from a 5.0 A wire, $B = (2\\times10^{-7})(5.0)/(0.010) = 1.0\\times10^{-4}$ T — about twice Earth's field, which is why compasses notice lab currents.",
      },
      {
        term: 'Field at the center of a circular arc',
        kind: 'theorem',
        statement: "**An arc of radius $R$ that subtends angle $\\phi$ (in radians) produces at its center** $$B = \\frac{\\mu_0 i\\phi}{4\\pi R},$$ **out of the page for counterclockwise current.** A full loop ($\\phi = 2\\pi$) gives $B = \\mu_0 i/2R$; a semicircle gives $\\mu_0 i/4R$.",
        detail: "Every element of the arc is perpendicular to its $\\hat r$ and equidistant from the center, so the integral collapses to $\\phi R/R^2$. Straight leads that run along radii toward the center contribute zero — they are parallel to $\\hat r$.",
      },
      {
        term: "Magnetic Field Due to a Current: solution protocol",
        kind: "method",
        statement: "**Solve Magnetic Field Due to a Current problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is fields of currents via Biot--Savart and Amp\\u00e8re; the working equation is $d\\vec B = (\\mu_0/4\\pi)i\\,d\\vec L\\times\\hat{r}/r^2$, $\\oint\\vec B\\cdot d\\vec s = \\mu_0i_{\\text{enc}}$, $B_{\\text{sol}} = \\mu_0ni$; every substitution must carry its units so the final unit (tesla) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $10^{-5}\\ \\text{T}$ (wire at cm, amp) to $1\\ \\text{T}$ (solenoid); steady currents; Amp\\u00e8rian loop needs symmetry.",
      },
    ],
    figures: [
      {
        caption: "The Biot–Savart construction. A current element $i\\,d\\vec s$ on the wire contributes $d\\vec B = (\\mu_0/4\\pi)(i\\,d\\vec s\\times\\hat r)/r^2$ at point P — here emerging from the page, perpendicular to the plane of $d\\vec s$ and $\\hat r$. Integrating such contributions over the whole circuit gives the total field.",
        svg: `<svg viewBox="0 0 720 300" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Biot-Savart law: current element, observation point P, and the direction of the field contribution"><defs><marker id="bsA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><text x="360" y="38" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.85">every element of the wire adds its own dB at P — integrate over the circuit</text><line x1="60" y1="215" x2="620" y2="215" stroke="currentColor" stroke-width="3" marker-end="url(#bsA)"/><text x="638" y="222" font-size="18" fill="currentColor">i</text><rect x="285" y="206" width="70" height="18" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-width="2"/><line x1="320" y1="224" x2="320" y2="240" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><text x="320" y="258" text-anchor="middle" font-size="16" fill="currentColor">element i ds</text><line x1="320" y1="215" x2="470" y2="80" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.65"/><text x="393" y="139" font-size="16" fill="currentColor">r</text><line x1="424" y1="116" x2="450" y2="94" stroke="currentColor" stroke-width="2.5" marker-end="url(#bsA)"/><text x="404" y="106" font-size="16" fill="currentColor">r̂</text><circle cx="470" cy="80" r="4.5" fill="currentColor"/><circle cx="470" cy="80" r="15" fill="none" stroke="currentColor" stroke-width="2"/><text x="492" y="72" font-size="17" fill="currentColor">P</text><line x1="483" y1="89" x2="502" y2="106" stroke="currentColor" stroke-width="1.2" opacity="0.6"/><text x="506" y="118" font-size="15" fill="currentColor">dB is out of the page</text><path d="M 385 215 A 65 65 0 0 0 366 169" fill="none" stroke="currentColor" stroke-width="1.6"/><text x="391" y="192" font-size="16" fill="currentColor">θ</text><text x="360" y="288" text-anchor="middle" font-size="16" fill="currentColor">dB = (μ₀/4π) · i ds sinθ / r² , directed along ds × r̂ (right-hand rule)</text></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Wire bent into a semicircle',
        problem: "A 2.0 A current runs in from the left along a horizontal line, bends counterclockwise through a semicircle of radius $R = 4.0$ cm, and continues out to the right. Find the magnetic field at the center of the semicircle.",
        steps: [
          { label: 'Straight sections', text: 'Each straight piece runs along a line through the center, so $d\\vec s \\parallel \\hat r$ and $\\sin\\theta = 0$: they contribute exactly zero at the center.' },
          { label: 'Semicircle', text: 'Only the arc contributes, with $\\phi = \\pi$: $B = \\mu_0 i\\phi/4\\pi R = \\mu_0 i/4R$.' },
          { label: 'Numbers', text: '$B = (4\\pi\\times10^{-7})(2.0)/(4\\times 0.040) = 1.6\\times 10^{-5}$ T.' },
          { label: 'Direction', text: 'The current traverses the semicircle counterclockwise as drawn, so by the right-hand rule $\\vec B$ points out of the page.' },
        ],
        result: 'The center sits in a field of about $1.6\\times10^{-5}$ T directed out of the page — produced entirely by the arc, none by the radial leads.',
      },
      {
        title: "Magnetic Field Due to a Current: wire-field check",
        problem: "Find $B = \\mu_0I/2\\pi r$ at $2.0\\ \\text{cm}$ from a long wire carrying $10\\ \\text{A}$.",
        steps: [
          { label: "Substitute", text: "$B = 4\\pi\\times 10^{-7}\\times 10/(2\\pi\\times 0.020)$." },
          { label: "Compute", text: "$B = 2\\times 10^{-7}\\times 10/0.020 = 1.00\\times 10^{-4}\\ \\text{T}$ ($100\\ \\mu\\text{T}$)." },
        ],
        result: "$B \\approx 1.00\\times 10^{-4}\\ \\text{T}$ circling the wire.",
      },
    ],
    keyTakeaways: [
      "$d\\vec B = (\\mu_0/4\\pi)\\,i\\,d\\vec s\\times\\hat r/r^2$; superpose (integrate) over the whole circuit to get $\\vec B$.",
      "Long wire: $B = \\mu_0 i/2\\pi R$; circular arc at its center: $B = \\mu_0 i\\phi/4\\pi R$; full loop: $B = \\mu_0 i/2R$.",
      "The right-hand rule fixes directions; elements parallel to the line toward the field point contribute nothing.",
    ],
    quiz: [
      {
        q: 'A long vertical wire carries current straight up. Directly to the west of the wire, the field $\\vec B$ points:',
        options: ['North', 'South', 'East', 'Vertically upward'],
        answer: 1,
        explanation: 'Thumb up: the field circles the wire counterclockwise as seen from above, and on the west side the tangent points south.',
      },
      {
        q: 'Doubling the perpendicular distance from a long straight wire changes the field magnitude from $B$ to:',
        options: [`$2B$`, `$B/4$`, `$B/2$`, 'no change'],
        answer: 2,
        explanation: 'The field of a line source falls off as $1/R$.',
      },
      {
        q: 'At the center of a single full circular loop of radius $R$ carrying current $i$, the field magnitude is:',
        options: [`$\\mu_0 i/2\\pi R$`, `$\\mu_0 i/4\\pi R$`, `$\\mu_0 i/4R$`, `$\\mu_0 i/2R$`],
        answer: 3,
        explanation: 'Set $\\phi = 2\\pi$ in the arc formula: $B = \\mu_0 i\\phi/4\\pi R = \\mu_0 i/2R$.',
      },
      {
        q: 'A current element happens to point exactly toward the point where you want the field. Its contribution there is:',
        options: ['The largest any element can give', 'Zero, because $d\\vec s\\times\\hat r$ vanishes', 'Equal to $\\mu_0 i\\,ds/4\\pi r^2$', 'Perpendicular to the page'],
        answer: 1,
        explanation: 'The cross product of parallel (or antiparallel) vectors is zero, and $\\sin\\theta = 0$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 29-2
  {
    sectionId: 'hall-ch29-s2',
    readingTime: 5,
    intro: "A current makes a field, and a field pushes on a current — so two currents must push on each other. The force between parallel wires is tiny per meter but exactly measurable, and for most of the SI's history it defined the ampere itself. The surprise for students fresh from electrostatics: parallel currents attract.",
    objectives: [
      "Derive $F/L = \\mu_0 i_1 i_2/2\\pi d$ from the field of a long wire and the force law $F = iLB$",
      "Determine attraction versus repulsion for parallel and antiparallel currents",
      "Explain how the ampere was defined and why that definition fixed the value of $\\mu_0$",
    ],
    concepts: [
      {
        term: 'Force between parallel currents',
        kind: 'law',
        statement: "**Two long parallel wires a distance $d$ apart, carrying currents $i_1$ and $i_2$, exert on each other a force per unit length** $$\\frac{F}{L} = \\frac{\\mu_0 i_1 i_2}{2\\pi d}.$$ Wire 2 sits in the field $B_1 = \\mu_0 i_1/2\\pi d$ made by wire 1, and a length $L$ of it feels $F = i_2 L B_1$ — Chapter 28's force law applied to currents.",
        detail: "The derivation is two lines: substitute the wire's field into $\\vec F = i\\vec L\\times\\vec B$ with $\\vec L$ perpendicular to $\\vec B$ for parallel wires.",
      },
      {
        term: 'Parallel currents attract',
        kind: 'insight',
        statement: "**Currents in the same direction attract each other; antiparallel currents repel.** Reversing either current reverses the force — the sign comes from $\\vec F = i\\vec L\\times\\vec B$ with the right-hand rule.",
        detail: "Contrast with like electric charges, which repel: the magnetic interaction between neutral current-carrying wires has the opposite sign pattern.",
      },
      {
        term: 'The ampere',
        kind: 'definition',
        statement: "**One ampere is the constant current that, maintained in two straight parallel conductors of infinite length and negligible cross-section, 1 meter apart in vacuum, produces a force of exactly $2\\times10^{-7}$ newton per meter of length.** With $i_1 = i_2 = 1$ A and $d = 1.00$ m, the force law gives $F/L = \\mu_0/2\\pi = 2\\times10^{-7}$ N/m.",
        detail: "Because the definition fixed $\\mu_0/2\\pi$, it fixed $\\mu_0 = 4\\pi\\times10^{-7}\\ \\mathrm{T\\cdot m/A}$ exactly — until the 2019 SI revision defined the ampere through the elementary charge $e$ instead. $\\mu_0$ is now a measured quantity that still agrees with the old value to ten significant figures, so keep using the round number.",
      },
      {
        term: "Force Between Two Parallel Currents: solution protocol",
        kind: "method",
        statement: "**Solve Force Between Two Parallel Currents problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is fields of currents via Biot--Savart and Amp\\u00e8re; the working equation is $d\\vec B = (\\mu_0/4\\pi)i\\,d\\vec L\\times\\hat{r}/r^2$, $\\oint\\vec B\\cdot d\\vec s = \\mu_0i_{\\text{enc}}$, $B_{\\text{sol}} = \\mu_0ni$; every substitution must carry its units so the final unit (tesla) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $10^{-5}\\ \\text{T}$ (wire at cm, amp) to $1\\ \\text{T}$ (solenoid); steady currents; Amp\\u00e8rian loop needs symmetry.",
      },
      {
        term: "Force Between Two Parallel Currents: scales and validity",
        kind: "insight",
        statement: "**Force Between Two Parallel Currents lives at $10^{-5}\\ \\text{T}$ (wire at cm, amp) to $1\\ \\text{T}$ (solenoid) and the textbook model holds while steady currents; Amp\\u00e8rian loop needs symmetry.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Force Between Two Parallel Currents calculation gives seconds when tesla demands meters, or a value orders of magnitude beyond $10^{-5}\\ \\text{T}$ (wire at cm, amp) to $1\\ \\text{T}$ (solenoid), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Lab cables and the definition of the ampere',
        problem: "Two parallel cable runs, each carrying $i = 10.0$ A in the same direction, sit $d = 5.0$ cm apart. (a) Find the force per meter between them. (b) Verify the defining numbers: the force per meter for two 1 A wires 1.00 m apart.",
        steps: [
          { label: 'Formula', text: '$F/L = \\mu_0 i_1 i_2/2\\pi d = (2\\times10^{-7})(10.0)(10.0)/(0.050)$.' },
          { label: 'Compute', text: '$F/L = (2\\times10^{-7})(100)/0.050 = 4.0\\times10^{-4}$ N/m — attractive, because the currents are parallel. A 2.0 m run feels $8.0\\times10^{-4}$ N.' },
          { label: 'Definition check', text: 'With 1 A each and $d = 1.00$ m: $F/L = (2\\times10^{-7})(1)(1)/(1.00) = 2.0\\times10^{-7}$ N/m — exactly the SI defining value, as it must be.' },
        ],
        result: 'The cables pull together with $4.0\\times10^{-4}$ N per meter; at the defining geometry the law returns precisely $2\\times10^{-7}$ N/m.',
      },
      {
        title: "Force Between Two Parallel Currents: wire-field check",
        problem: "Find $B = \\mu_0I/2\\pi r$ at $2.0\\ \\text{cm}$ from a long wire carrying $15\\ \\text{A}$.",
        steps: [
          { label: "Substitute", text: "$B = 4\\pi\\times 10^{-7}\\times 15/(2\\pi\\times 0.020)$." },
          { label: "Compute", text: "$B = 2\\times 10^{-7}\\times 15/0.020 = 1.50\\times 10^{-4}\\ \\text{T}$ ($150\\ \\mu\\text{T}$)." },
        ],
        result: "$B \\approx 1.50\\times 10^{-4}\\ \\text{T}$ circling the wire.",
      },
    ],
    keyTakeaways: [
      '$F/L = \\mu_0 i_1 i_2/2\\pi d$: parallel currents attract, antiparallel currents repel.',
      'The force is just $\\vec F = i\\vec L\\times\\vec B$ with the other wire\'s field doing the pushing.',
      'The SI ampere was defined by this force at 1 m separation, which pinned $\\mu_0 = 4\\pi\\times10^{-7}\\ \\mathrm{T\\cdot m/A}$.',
    ],
    quiz: [
      {
        q: 'Two long wires carry currents in opposite directions. The interaction between them is:',
        options: ['Repulsive', 'Attractive', 'Zero, because each wire is electrically neutral', 'Attractive only if the currents are equal'],
        answer: 0,
        explanation: 'Antiparallel currents repel; the electrical neutrality of the wires is irrelevant to the magnetic force.',
      },
      {
        q: 'Two parallel wires 2.0 cm apart carry 3.0 A each in the same direction. The force per unit length is about:',
        options: ['$4.5\\times10^{-5}$ N/m', '$1.8\\times10^{-4}$ N/m', '$2.7\\times10^{-4}$ N/m', '$9.0\\times10^{-5}$ N/m'],
        answer: 3,
        explanation: '$F/L = (2\\times10^{-7})(3.0)(3.0)/(0.020) = 9.0\\times10^{-5}$ N/m.',
      },
      {
        q: 'If one current is doubled and the separation is also doubled, the force per unit length is:',
        options: ['Halved', 'Quartered', 'Unchanged', 'Doubled'],
        answer: 2,
        explanation: 'The numerator gains a factor of 2 from the current, the denominator a factor of 2 from the distance.',
      },
      {
        q: 'The SI definition of the ampere involves:',
        options: ['The number of electrons passing a point per second', 'The force between two long parallel currents 1 m apart', 'The charge needed to neutralize one mole of monovalent ions', 'The field produced at 1 m by a straight wire'],
        answer: 1,
        explanation: 'The classic definition set 1 A so that two such wires 1 m apart pull with $2\\times10^{-7}$ N per meter.',
      },
    ],
  },
  // ------------------------------------------------------------------ 29-3
  {
    sectionId: 'hall-ch29-s3',
    readingTime: 6,
    intro: "Gauss' law converts electric-field symmetry into a one-line answer; Ampère\'s law does the same for magnetism, replacing a surface integral with a line integral around a closed path. For wires, cylinders, solenoids and toroids it collapses a page of Biot–Savart work into a single equation — and it carries the chapter's deepest message: steady currents are what circulate magnetic field.",
    objectives: [
      "State Ampère's law and assign the sign of the enclosed current with the right-hand rule",
      "Use Amperian loops to find B outside and inside a long current-carrying cylinder",
      "Recognize the symmetries that make Ampère's law a computational tool rather than just a theorem",
    ],
    concepts: [
      {
        term: "Ampère's law",
        kind: 'law',
        statement: "**The line integral (circulation) of $\\vec B$ around any closed curve equals $\\mu_0$ times the net current piercing any surface bounded by the curve:** $$\\oint \\vec B\\cdot d\\vec s = \\mu_0 i_{enc}.$$ Currents along the right-hand thumb, when the fingers curl along the integration path, count positive.",
        detail: "The law holds for any steady current distribution (the full Maxwell–Ampère law of Chapter 32 adds a term for changing electric flux). Like Gauss' law it is always true but only instantly useful when symmetry pins $\\vec B$ along the path.",
      },
      {
        term: 'The Amperian loop',
        kind: 'method',
        statement: "**Choose the loop the symmetry suggests: a concentric circle around a straight wire or cylinder, a rectangle straddling a solenoid, a circle inside a toroid.** On the good loop, $\\vec B$ is tangent to the path with constant magnitude, so $\\oint\\vec B\\cdot d\\vec s = B(2\\pi r)$ and the law reads off $B$ at once.",
        detail: "Around a long straight wire: $B(2\\pi r) = \\mu_0 i$ gives $B = \\mu_0 i/2\\pi r$ — the Biot–Savart result without the integration.",
      },
      {
        term: 'Field inside a uniform current distribution',
        kind: 'theorem',
        statement: "**If current $i$ is spread uniformly through a cylinder of radius $R$, then inside** $$B = \\frac{\\mu_0 i}{2\\pi R^2}\\,r \\quad (r \\le R),$$ **while outside $B = \\mu_0 i/2\\pi r$ — as if the whole current ran on the axis.**",
        detail: "A loop of radius $r$ encloses only the fraction $r^2/R^2$ of the current, so the field grows linearly from zero on the axis to the surface value $\\mu_0 i/2\\pi R$, then decays as $1/r$ — the magnetic twin of the electric field inside a uniformly charged sphere.",
      },
      {
        term: 'Circulation, not field',
        kind: 'insight',
        statement: "**Ampère's law constrains only the circulation of $\\vec B$ around your loop — a fixed number $\\mu_0 i_{enc}$ — regardless of the loop's size.** Enlarge the circle around a wire and $B$ on it drops, but $B(2\\pi r)$ stays $\\mu_0 i$.",
        detail: "This is why the law cannot by itself give $B$ for a finite solenoid: no simple closed path there has $\\vec B$ constant and tangent everywhere, so the circulation cannot be untangled into one unknown.",
      },
      {
        term: "Ampère's Law: solution protocol",
        kind: "method",
        statement: "**Solve Ampère's Law problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is fields of currents via Biot--Savart and Amp\\u00e8re; the working equation is $d\\vec B = (\\mu_0/4\\pi)i\\,d\\vec L\\times\\hat{r}/r^2$, $\\oint\\vec B\\cdot d\\vec s = \\mu_0i_{\\text{enc}}$, $B_{\\text{sol}} = \\mu_0ni$; every substitution must carry its units so the final unit (tesla) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $10^{-5}\\ \\text{T}$ (wire at cm, amp) to $1\\ \\text{T}$ (solenoid); steady currents; Amp\\u00e8rian loop needs symmetry.",
      },
    ],
    examples: [
      {
        title: 'Field of a bus bar',
        problem: "A cylindrical copper bus bar of radius $R = 2.0$ mm carries a uniformly distributed current of 30 A. Find $B$ at the surface, at $r = R/2$ inside, and at $r = 2R$ outside.",
        steps: [
          { label: 'Surface', text: '$B_s = \\mu_0 i/2\\pi R = (2\\times10^{-7})(30)/(0.0020) = 3.0\\times10^{-3}$ T.' },
          { label: 'Inside at R/2', text: 'A loop of radius $R/2$ encloses a fraction $(1/2)^2 = 1/4$ of the current and has half the circumference, so $B = (r/R)B_s = 1.5\\times10^{-3}$ T — the interior field is linear in $r$.' },
          { label: 'Outside at 2R', text: '$B = \\mu_0 i/2\\pi(2R) = B_s/2 = 1.5\\times10^{-3}$ T.' },
          { label: 'Check', text: 'The inside point at $R/2$ and the outside point at $2R$ give the same field — the profile is a tent peaking exactly at the surface.' },
        ],
        result: '3.0 mT at the surface, 1.5 mT at $r = R/2$ inside and at $r = 2R$ outside — linear rise, then $1/r$ decay.',
      },
      {
        title: "Ampère's Law: wire-field check",
        problem: "Find $B = \\mu_0I/2\\pi r$ at $2.0\\ \\text{cm}$ from a long wire carrying $20\\ \\text{A}$.",
        steps: [
          { label: "Substitute", text: "$B = 4\\pi\\times 10^{-7}\\times 20/(2\\pi\\times 0.020)$." },
          { label: "Compute", text: "$B = 2\\times 10^{-7}\\times 20/0.020 = 2.00\\times 10^{-4}\\ \\text{T}$ ($200\\ \\mu\\text{T}$)." },
        ],
        result: "$B \\approx 2.00\\times 10^{-4}\\ \\text{T}$ circling the wire.",
      },
    ],
    keyTakeaways: [
      "$\\oint \\vec B\\cdot d\\vec s = \\mu_0 i_{enc}$, with the sign fixed by curling the right fingers along the path.",
      'Concentric Amperian circles give the wire field $\\mu_0 i/2\\pi r$ and the uniform-cylinder interior field $\\mu_0 i r/2\\pi R^2$ in one step each.',
      'The law always holds but pays off computationally only when symmetry makes $\\vec B$ constant and tangent on the loop.',
    ],
    quiz: [
      {
        q: 'Around a long wire, an Amperian circle is enlarged from $r$ to $2r$. The circulation $\\oint \\vec B\\cdot d\\vec s$:',
        options: ['Halves', 'Quarters', 'Is unchanged', 'Doubles'],
        answer: 2,
        explanation: 'The circulation equals $\\mu_0 i_{enc}$, and the same current is enclosed — the field on the loop drops as $1/r$ to compensate.',
      },
      {
        q: 'Viewed from above, a circular Amperian path is traversed counterclockwise. A current piercing the loop from below (going away from the viewer) counts as:',
        options: ['Positive', 'Negative', 'Zero regardless of size', 'Positive only if it is the sole current'],
        answer: 1,
        explanation: 'Fingers curled counterclockwise put the right thumb toward the viewer; a current going away from the viewer is antiparallel to it, hence negative.',
      },
      {
        q: 'Inside a uniformly current-carrying cylinder, the field at $r = R/2$ compared to its surface value is:',
        options: ['A quarter of the surface value', 'Half the surface value', 'The full surface value', 'Twice the surface value'],
        answer: 1,
        explanation: 'The interior field grows linearly with $r$ because the enclosed current grows as $r^2$ while the path length grows as $r$.',
      },
      {
        q: 'Why does Ampère\'s law fail to give the field of a short, finite solenoid in one step?',
        options: ['A finite solenoid encloses no current', 'The law is not valid near coils', 'No simple closed path has B constant and tangent everywhere', 'Because μ₀ differs inside the winding'],
        answer: 2,
        explanation: 'Without enough symmetry, the circulation cannot be factored into one unknown times a path length.',
      },
    ],
  },
  // ------------------------------------------------------------------ 29-4
  {
    sectionId: 'hall-ch29-s4',
    readingTime: 6,
    intro: "Stack many current loops into a helix and something wonderful happens inside: every turn pushes the field along the axis, and the exterior fields cancel to nearly zero. The solenoid is the workhorse electromagnet — a uniform field you dial with a current knob. Bend the helix into a ring and the field is trapped entirely in the donut: the toroid, the standard shape when leakage cannot be tolerated.",
    objectives: [
      "Derive $B = \\mu_0 n i$ for a long solenoid using a rectangular Amperian loop",
      "Derive $B = \\mu_0 iN/2\\pi r$ for a toroid and explain why the field vanishes outside the core",
      "Use $n = N/l$ to move between total turns, length, and field strength",
    ],
    concepts: [
      {
        term: 'Ideal solenoid field',
        kind: 'theorem',
        statement: "**Inside a long solenoid with $n$ turns per unit length carrying current $i$,** $$B = \\mu_0 n i$$ **— uniform across the bore and along the axis, pointing along the right-hand thumb when the fingers curl with the current. Outside, $B \\approx 0$ except near the ends.**",
        detail: "The result is independent of the solenoid's radius: packing more turns per meter compensates exactly for making them smaller. Doubling $n$ and halving $i$ leaves $B$ unchanged.",
      },
      {
        term: 'The rectangular Amperian loop',
        kind: 'method',
        statement: "**Take a rectangle with one long side of length $l$ inside the bore, parallel to the axis, and the opposite side outside.** The two short sides contribute nothing ($\\vec B \\perp d\\vec s$), the outside side contributes about zero, and the inside side gives $Bl$. The loop is pierced by $nl$ turns, each carrying $i$, so Ampère's law reads $Bl = \\mu_0(nl)i$.",
        detail: "Because the answer does not depend on where inside the bore the long side sits, the interior field is uniform — the argument HRW uses to certify the solenoid as a field-standard device.",
      },
      {
        term: 'Toroid field',
        kind: 'theorem',
        statement: "**A toroid with $N$ turns carrying current $i$ has, at radius $r$ within the core,** $$B = \\frac{\\mu_0 i N}{2\\pi r}.$$ **In the central hole and outside the ring, $B = 0$.**",
        detail: "An Amperian circle inside the core encloses all $N$ turns: $B(2\\pi r) = \\mu_0 N i$. The field is not uniform — it falls as $1/r$ from the inner to the outer edge. Outside the ring, a loop encloses equal numbers of upward and downward piercings (or none at all), so the net enclosed current is zero.",
      },
      {
        term: 'Solenoid or toroid?',
        kind: 'insight',
        statement: "**The solenoid gives uniformity but leaks field at its ends; the toroid confines the field completely but lets it vary across the core.** A toroid of mean radius $r$ behaves like a solenoid with the same turn density $n = N/2\\pi r$ bent into a circle — at the mean radius the two formulas agree exactly.",
        detail: "Design choice: MRI magnets and lab electromagnets want uniformity (solenoids); transformers and magnetic-core inductors want zero leakage (toroids).",
      },
      {
        term: "Solenoids and Toroids: solution protocol",
        kind: "method",
        statement: "**Solve Solenoids and Toroids problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is fields of currents via Biot--Savart and Amp\\u00e8re; the working equation is $d\\vec B = (\\mu_0/4\\pi)i\\,d\\vec L\\times\\hat{r}/r^2$, $\\oint\\vec B\\cdot d\\vec s = \\mu_0i_{\\text{enc}}$, $B_{\\text{sol}} = \\mu_0ni$; every substitution must carry its units so the final unit (tesla) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $10^{-5}\\ \\text{T}$ (wire at cm, amp) to $1\\ \\text{T}$ (solenoid); steady currents; Amp\\u00e8rian loop needs symmetry.",
      },
    ],
    figures: [
      {
        caption: "Side view of a long solenoid. In each turn the current emerges from the page at the top (⊙) and enters at the bottom (⊗), so the right-hand thumb — and the interior field — point along the axis: $B = \\mu_0 n i$, uniform in the bore and nearly zero outside, with only weak dashed return flux.",
        svg: `<svg viewBox="0 0 720 310" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side view of a long solenoid showing turns, current sense, and the nearly uniform interior field"><defs><marker id="sfA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><ellipse cx="120" cy="155" rx="26" ry="92" fill="none" stroke="currentColor" stroke-width="2.5"/><ellipse cx="195" cy="155" rx="26" ry="92" fill="none" stroke="currentColor" stroke-width="2.5"/><ellipse cx="270" cy="155" rx="26" ry="92" fill="none" stroke="currentColor" stroke-width="2.5"/><ellipse cx="345" cy="155" rx="26" ry="92" fill="none" stroke="currentColor" stroke-width="2.5"/><ellipse cx="420" cy="155" rx="26" ry="92" fill="none" stroke="currentColor" stroke-width="2.5"/><ellipse cx="495" cy="155" rx="26" ry="92" fill="none" stroke="currentColor" stroke-width="2.5"/><ellipse cx="570" cy="155" rx="26" ry="92" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="40" y1="155" x2="88" y2="155" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.5"/><line x1="604" y1="155" x2="684" y2="155" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.5"/><text x="60" y="141" font-size="14" fill="currentColor" opacity="0.8">axis</text><line x1="155" y1="155" x2="535" y2="155" stroke="currentColor" stroke-width="3.5" marker-end="url(#sfA)"/><line x1="170" y1="127" x2="520" y2="127" stroke="currentColor" stroke-width="2" marker-end="url(#sfA)"/><line x1="170" y1="183" x2="520" y2="183" stroke="currentColor" stroke-width="2" marker-end="url(#sfA)"/><text x="345" y="212" text-anchor="middle" font-size="16" fill="currentColor">B = μ₀ n i (uniform)</text><path d="M 585 95 C 620 30 100 30 135 95" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.55"/><path d="M 585 215 C 620 275 100 275 135 215" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.55"/><text x="360" y="22" text-anchor="middle" font-size="14" fill="currentColor" opacity="0.9">each turn: current out of the page at top (⊙), into the page at bottom (⊗)</text><text x="360" y="296" text-anchor="middle" font-size="14" fill="currentColor" opacity="0.9">outside a long solenoid the return flux is negligible — B ≈ 0 (fringing only near the ends)</text><circle cx="120" cy="63" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="120" cy="63" r="2.2" fill="currentColor"/><circle cx="195" cy="63" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="195" cy="63" r="2.2" fill="currentColor"/><circle cx="270" cy="63" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="270" cy="63" r="2.2" fill="currentColor"/><circle cx="345" cy="63" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="345" cy="63" r="2.2" fill="currentColor"/><circle cx="420" cy="63" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="420" cy="63" r="2.2" fill="currentColor"/><circle cx="495" cy="63" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="495" cy="63" r="2.2" fill="currentColor"/><circle cx="570" cy="63" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="570" cy="63" r="2.2" fill="currentColor"/><circle cx="120" cy="247" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="116" y1="243" x2="124" y2="251" stroke="currentColor" stroke-width="1.6"/><line x1="116" y1="251" x2="124" y2="243" stroke="currentColor" stroke-width="1.6"/><circle cx="195" cy="247" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="191" y1="243" x2="199" y2="251" stroke="currentColor" stroke-width="1.6"/><line x1="191" y1="251" x2="199" y2="243" stroke="currentColor" stroke-width="1.6"/><circle cx="270" cy="247" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="266" y1="243" x2="274" y2="251" stroke="currentColor" stroke-width="1.6"/><line x1="266" y1="251" x2="274" y2="243" stroke="currentColor" stroke-width="1.6"/><circle cx="345" cy="247" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="341" y1="243" x2="349" y2="251" stroke="currentColor" stroke-width="1.6"/><line x1="341" y1="251" x2="349" y2="243" stroke="currentColor" stroke-width="1.6"/><circle cx="420" cy="247" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="416" y1="243" x2="424" y2="251" stroke="currentColor" stroke-width="1.6"/><line x1="416" y1="251" x2="424" y2="243" stroke="currentColor" stroke-width="1.6"/><circle cx="495" cy="247" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="491" y1="243" x2="499" y2="251" stroke="currentColor" stroke-width="1.6"/><line x1="491" y1="251" x2="499" y2="243" stroke="currentColor" stroke-width="1.6"/><circle cx="570" cy="247" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="566" y1="243" x2="574" y2="251" stroke="currentColor" stroke-width="1.6"/><line x1="566" y1="251" x2="574" y2="243" stroke="currentColor" stroke-width="1.6"/></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Toroid numbers, checked against a solenoid',
        problem: "A toroid has $N = 500$ turns carrying $i = 2.0$ A; its core fills the region from $r = 8.0$ cm to $r = 12.0$ cm. Find $B$ at the mean radius, at the two edges, and compare with the equivalent solenoid.",
        steps: [
          { label: 'Mean radius', text: 'At $r = 10.0$ cm: $B = \\mu_0 iN/2\\pi r = (2\\times10^{-7})(2.0)(500)/(0.10) = 2.0\\times10^{-3}$ T.' },
          { label: 'Inner edge', text: 'At $r = 8.0$ cm: $B = (2\\times10^{-7})(1000)/(0.080) = 2.5\\times10^{-3}$ T.' },
          { label: 'Outer edge', text: 'At $r = 12.0$ cm: $B = (2\\times10^{-7})(1000)/(0.12) = 1.7\\times10^{-3}$ T — a drift of about ±25% across the core.' },
          { label: 'Solenoid check', text: 'Equivalent turn density $n = N/2\\pi r = 500/0.628 = 796$ turns/m; $B = \\mu_0 n i = (4\\pi\\times10^{-7})(796)(2.0) = 2.0\\times10^{-3}$ T — matching the toroid at its mean radius.' },
        ],
        result: '2.0 mT at the mean radius (2.5 mT inner, 1.7 mT outer) — identical to a solenoid of the same turn density bent into a ring.',
      },
      {
        title: "Solenoids and Toroids: wire-field check",
        problem: "Find $B = \\mu_0I/2\\pi r$ at $2.0\\ \\text{cm}$ from a long wire carrying $5\\ \\text{A}$.",
        steps: [
          { label: "Substitute", text: "$B = 4\\pi\\times 10^{-7}\\times 5/(2\\pi\\times 0.020)$." },
          { label: "Compute", text: "$B = 2\\times 10^{-7}\\times 5/0.020 = 5.00\\times 10^{-5}\\ \\text{T}$ ($50\\ \\mu\\text{T}$)." },
        ],
        result: "$B \\approx 5.00\\times 10^{-5}\\ \\text{T}$ circling the wire.",
      },
    ],
    keyTakeaways: [
      'Long solenoid: $B = \\mu_0 n i$ inside, nearly zero outside; direction by the right-hand thumb along the current circulation.',
      'Toroid: $B = \\mu_0 iN/2\\pi r$ inside the core only; zero in the hole and outside the ring.',
      'The rectangular Amperian loop certifies the solenoid field; the concentric circular loop certifies the toroid field.',
    ],
    quiz: [
      {
        q: 'A long solenoid has its turns-per-length $n$ doubled while the current $i$ is halved. The interior field is:',
        options: ['Halved', 'Unchanged', 'Doubled', 'Quartered'],
        answer: 1,
        explanation: '$B = \\mu_0 n i$ depends only on the product $ni$, which is unchanged.',
      },
      {
        q: 'Where is a toroid\'s magnetic field nonzero?',
        options: ['Throughout all space', 'Only within the core', 'Only in the central hole', 'Only outside the ring'],
        answer: 1,
        explanation: 'Ampère loops in the hole or outside the ring enclose zero net current.',
      },
      {
        q: 'A toroid has N = 400 turns, i = 1.5 A. Inside the core at r = 0.10 m, B is about:',
        options: ['0.60 mT', '2.4 mT', '1.2 mT', '6.0 mT'],
        answer: 2,
        explanation: '$B = \\mu_0 iN/2\\pi r = (2\\times10^{-7})(600)/(0.10) = 1.2\\times10^{-3}$ T.',
      },
      {
        q: 'Across a toroid\'s core, from the inner edge to the outer edge, the field:',
        options: ['Is uniform', 'Grows linearly with r', 'Falls off as 1/r', 'Falls off as 1/r²'],
        answer: 2,
        explanation: 'The enclosed current is fixed at $Ni$, so $B \\propto 1/r$ across the core.',
      },
    ],
  },
  // ------------------------------------------------------------------ 29-5
  {
    sectionId: 'hall-ch29-s5',
    readingTime: 5,
    intro: "Back away from any current loop — a few radii will do — and its field forgets the shape of the wire and remembers only one vector: the magnetic dipole moment $\\mu = NiA$. That single number controls the loop's torque in a field, its energy, and its distant field pattern. It is the bookkeeping unit of everything from compass coils to atomic magnetism.",
    objectives: [
      "Compute the dipole moment $\\vec\\mu = NiA\\,\\hat n$ of a coil and orient it with the right-hand rule",
      "Evaluate the on-axis field of a coil, both the exact formula and the far-field dipole form",
      "Connect the loop to the dipole results of Chapter 28: $\\vec\\tau = \\vec\\mu\\times\\vec B$ and $U = -\\vec\\mu\\cdot\\vec B$",
    ],
    concepts: [
      {
        term: 'Magnetic dipole moment of a coil',
        kind: 'definition',
        statement: "**A coil of $N$ turns, area $A$, carrying current $i$, has magnetic dipole moment** $$\\mu = N i A,$$ **directed along the unit normal $\\hat n$ found by curling the right fingers with the current — the thumb is $\\hat n$. SI unit: A·m².**",
        detail: "Stacking turns multiplies the moment: a 200-turn loop of the same area and current has 200 times the moment of one turn.",
      },
      {
        term: 'On-axis field of a coil',
        kind: 'theorem',
        statement: "**On the axis of a circular coil of radius $R$, at distance $z$ from the center,** $$B = \\frac{\\mu_0 N i R^2}{2(R^2+z^2)^{3/2}} \\;\\xrightarrow{\\;z\\gg R\\;}\\; \\frac{\\mu_0}{2\\pi}\\,\\frac{\\mu}{z^3}.$$ The far-field form is the magnetic dipole field on its axis — the same $1/z^3$ falloff the electric dipole shows, with $\\mu = Ni\\pi R^2$ playing the role of $qd$.",
        detail: "At $z = 5R$ the far-field formula overshoots by only about 6%, the size of $(3/2)(R/z)^2$ — the expansion parameter of the dipole approximation.",
      },
      {
        term: "A loop's full dipole résumé",
        kind: 'insight',
        statement: "**A current loop obeys $\\vec\\tau = \\vec\\mu\\times\\vec B$, has energy $U = -\\vec\\mu\\cdot\\vec B$, and radiates the dipole far field — everything an electric dipole does, transposed to magnetism.**",
        detail: "An orbiting electron is a microscopic current loop with orbital moment $\\mu = evr/2$; the Bohr magneton $\\mu_B \\approx 9.27\\times10^{-24}\\ \\mathrm{A\\cdot m^2}$ sets the scale of atomic magnetism — matter magnetizes by the alignment of these little dipoles.",
      },
      {
        term: "A Current-Carrying Coil as a Magnetic Dipole: solution protocol",
        kind: "method",
        statement: "**Solve A Current-Carrying Coil as a Magnetic Dipole problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is fields of currents via Biot--Savart and Amp\\u00e8re; the working equation is $d\\vec B = (\\mu_0/4\\pi)i\\,d\\vec L\\times\\hat{r}/r^2$, $\\oint\\vec B\\cdot d\\vec s = \\mu_0i_{\\text{enc}}$, $B_{\\text{sol}} = \\mu_0ni$; every substitution must carry its units so the final unit (tesla) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $10^{-5}\\ \\text{T}$ (wire at cm, amp) to $1\\ \\text{T}$ (solenoid); steady currents; Amp\\u00e8rian loop needs symmetry.",
      },
      {
        term: "A Current-Carrying Coil as a Magnetic Dipole: scales and validity",
        kind: "insight",
        statement: "**A Current-Carrying Coil as a Magnetic Dipole lives at $10^{-5}\\ \\text{T}$ (wire at cm, amp) to $1\\ \\text{T}$ (solenoid) and the textbook model holds while steady currents; Amp\\u00e8rian loop needs symmetry.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a A Current-Carrying Coil as a Magnetic Dipole calculation gives seconds when tesla demands meters, or a value orders of magnitude beyond $10^{-5}\\ \\text{T}$ (wire at cm, amp) to $1\\ \\text{T}$ (solenoid), recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'A coil as a competitor to Earth\'s field',
        problem: "A 200-turn coil of radius $R = 2.0$ cm carries $i = 2.0$ A. (a) Find its magnetic dipole moment. (b) Find the on-axis field at $z = 10$ cm, using both the far-field formula and the exact one.",
        steps: [
          { label: 'Dipole moment', text: '$A = \\pi R^2 = \\pi(0.020)^2 = 1.26\\times10^{-3}\\ \\mathrm{m^2}$; $\\mu = NiA = (200)(2.0)(1.26\\times10^{-3}) = 0.50\\ \\mathrm{A\\cdot m^2}$.' },
          { label: 'Far field', text: '$B = \\mu_0\\mu/2\\pi z^3 = (2\\times10^{-7})(0.50)/(10^{-3}) = 1.0\\times10^{-4}$ T.' },
          { label: 'Exact', text: '$B = \\mu_0 NiR^2/2(R^2+z^2)^{3/2} = (1.26\\times10^{-6})(200)(2.0)(4.0\\times10^{-4})/[2(0.0104)^{3/2}] = 9.5\\times10^{-5}$ T.' },
          { label: 'Compare', text: 'The far-field value runs 6% high because $z = 5R$ is barely in the asymptotic regime. Either way, the coil rivals Earth\'s $\\sim 5\\times10^{-5}$ T field a hand\'s length from the wire.' },
        ],
        result: '$\\mu = 0.50\\ \\mathrm{A\\cdot m^2}$; $B(10\\ \\mathrm{cm}) \\approx 1.0\\times10^{-4}$ T by dipole formula, $9.5\\times10^{-5}$ T exactly.',
      },
      {
        title: "A Current-Carrying Coil as a Magnetic Dipole: wire-field check",
        problem: "Find $B = \\mu_0I/2\\pi r$ at $2.0\\ \\text{cm}$ from a long wire carrying $10\\ \\text{A}$.",
        steps: [
          { label: "Substitute", text: "$B = 4\\pi\\times 10^{-7}\\times 10/(2\\pi\\times 0.020)$." },
          { label: "Compute", text: "$B = 2\\times 10^{-7}\\times 10/0.020 = 1.00\\times 10^{-4}\\ \\text{T}$ ($100\\ \\mu\\text{T}$)." },
        ],
        result: "$B \\approx 1.00\\times 10^{-4}\\ \\text{T}$ circling the wire.",
      },
    ],
    keyTakeaways: [
      '$\\vec\\mu = NiA\\,\\hat n$ with $\\hat n$ set by the right-hand rule; the unit is A·m².',
      'On the axis: exact $\\mu_0 NiR^2/2(R^2+z^2)^{3/2}$, far field $\\mu_0\\mu/2\\pi z^3$ — the dipole pattern.',
      'The same $\\mu$ governs torque $\\mu B\\sin\\theta$, energy $-\\mu B\\cos\\theta$, and the far field.',
    ],
    quiz: [
      {
        q: 'A loop lies flat on the page with current circulating clockwise as you view it. Its dipole moment points:',
        options: ['Into the page', 'Out of the page', 'Clockwise along the wire', 'Radially outward'],
        answer: 0,
        explanation: 'Curl the right fingers clockwise and the thumb points into the page.',
      },
      {
        q: 'Keeping area and current fixed, a coil\'s turns are tripled. Its dipole moment:',
        options: ['Drops to a third', 'Is unchanged', 'Triples', 'Becomes ninefold'],
        answer: 2,
        explanation: '$\\mu = NiA$ is linear in the number of turns.',
      },
      {
        q: 'Moving along a coil\'s axis from $z$ to $2z$ (both far compared with $R$), the field drops to:',
        options: ['One-half', 'One-eighth', 'One-quarter', 'One-sixteenth'],
        answer: 1,
        explanation: 'The dipole far field falls off as $1/z^3$.',
      },
      {
        q: 'The torque on a magnetic dipole in field $B$ is maximum when the angle between $\\vec\\mu$ and $\\vec B$ is:',
        options: ['0°', '45°', '90°', '180°'],
        answer: 2,
        explanation: '$\\tau = \\mu B\\sin\\theta$ peaks at $\\theta = 90°$.',
      },
    ],
  },
]
