import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 25
// Capacitance — sections 25-1 … 25-6 (ids hall-ch25-s1 … hall-ch25-s6)
// Constants: ε₀ = 8.85×10⁻¹² C²/N·m², k = 1/4πε₀ = 8.99×10⁹ N·m²/C²,
// e = 1.602×10⁻¹⁹ C.
// ============================================================================

export const hallCh25Content: SectionContent[] = [
  // ------------------------------------------------------------------ 25-1
  {
    sectionId: 'hall-ch25-s1',
    readingTime: 6,
    intro: "In 1746 the Leyden jar showed Europe that electric charge could be bottled and released in one violent spark; three centuries later the same idea, miniaturized, stores the 1's and 0's in every DRAM cell and the jolt of a defibrillator. A capacitor is any pair of conductors separated by an insulator, and this section introduces the one number — capacitance — that measures how much charge the pair hoards per volt applied.",
    objectives: [
      'Define capacitance and use $C = Q/V$ to relate charge, potential difference and capacitance',
      'Explain why the capacitance of a given pair of conductors depends only on geometry, never on $Q$ or $V$',
      'Work with the farad and its practical submultiples (mF, μF, pF)',
    ],
    concepts: [
      {
        term: 'Capacitor',
        kind: 'definition',
        statement: "**A capacitor is a pair of conductors separated by an insulator (air, paper, ceramic, oxide…).** When the pair is connected to a potential difference, charge $+Q$ accumulates on one conductor and $-Q$ on the other; the device as a whole remains electrically neutral.",
        detail: 'The simplest and most important case is two parallel metal plates, but any two isolated conductors form a capacitor — including the gate and channel of a transistor or two neighboring traces on a circuit board (stray capacitance).',
      },
      {
        term: 'Capacitance',
        kind: 'definition',
        statement: "**Capacitance is the ratio of the magnitude of the charge on either conductor to the potential difference between them:** $$C = \\frac{Q}{V},$$ where $V = V_+ - V_-$. The SI unit is the **farad**: $1\\ \\mathrm{F} = 1\\ \\mathrm{C/V}$.",
        detail: 'One farad is enormous; everyday capacitors run from picofarads (radio circuits) through microfarads (power supplies) to farad-scale supercapacitors. Because $1.0\\ \\mathrm{C}$ is a huge amount of charge, even $V = 1$ V with $C = 1$ F is a large storage.',
      },
      {
        term: 'Capacitance is pure geometry',
        kind: 'insight',
        statement: "**For a given, isolated pair of conductors, $C$ depends only on the size, shape and separation of the conductors — not on $Q$ or $V$.** Doubling $V$ doubles $Q$, leaving the ratio $Q/V$ untouched: the $Q$-vs-$V$ relation of an empty capacitor is a straight line through the origin.",
        detail: 'The linear relation $Q \\propto V$ is a consequence of superposition: doubling all the charge doubles the field everywhere between the conductors and hence doubles the potential difference. Nearby objects (a hand, a shield) do perturb $C$, which is why real components are measured in place when precision matters.',
      },
      {
        term: 'Charging with a battery',
        kind: 'method',
        statement: "**A battery is a charge pump: it moves charge through the wires until the potential difference of the capacitor equals the battery's terminal voltage.** Then $Q = CV$ and the flow stops.",
        detail: 'Only conduction electrons actually move in a metal-wired circuit; the net charge of each plate is set by an extremely thin surface layer of added or missing electrons, while the field between the plates spans the whole gap.',
      },
      {
        term: "Capacitance: solution protocol",
        kind: "method",
        statement: "**Solve Capacitance problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is capacitance and field energy; the working equation is $C = q/V$, $C = \\varepsilon_0A/d$ (parallel plate), $U = \\tfrac12CV^2$, $u = \\tfrac12\\varepsilon_0E^2$; every substitution must carry its units so the final unit (farads and joules) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $C\\sim \\text{pF}$--$\\mu\\text{F}$; $U\\sim \\text{mJ}$ for $\\mu\\text{F}$ at $100\\ \\text{V}$; fixed $q$ versus fixed $V$ when a dielectric is inserted.",
      },
    ],
    examples: [
      {
        title: 'Charging a 4.0 μF capacitor',
        problem: 'A $4.0\\ \\mu\\mathrm{F}$ capacitor is connected to the terminals of a $12\\ \\mathrm{V}$ battery. (a) How much charge accumulates on each plate? (b) How many electrons were transferred through the battery from one plate to the other?',
        steps: [
          { label: 'Charge', text: '$Q = CV = (4.0\\times 10^{-6}\\ \\mathrm{F})(12\\ \\mathrm{V}) = 4.8\\times 10^{-5}\\ \\mathrm{C} = 48\\ \\mu\\mathrm{C}$, with $+48\\ \\mu\\mathrm{C}$ on one plate and $-48\\ \\mu\\mathrm{C}$ on the other.' },
          { label: 'Electrons moved', text: 'Each electron carries $e = 1.602\\times 10^{-19}\\ \\mathrm{C}$, so $n = Q/e = 4.8\\times 10^{-5}/1.602\\times 10^{-19} = 3.0\\times 10^{14}$ electrons.' },
          { label: 'Scale check', text: 'That is a mere $5\\times 10^{-10}$ mol of electrons — a film far thinner than one atomic layer — yet it is enough to hold $12\\ \\mathrm{V}$ across the gap.' },
        ],
        result: 'Each plate carries $48\\ \\mu\\mathrm{C}$, corresponding to $3.0\\times 10^{14}$ electrons pumped through the battery.',
      },
      {
        title: "Capacitance: parallel-plate numbers",
        problem: "A parallel-plate capacitor has $A = 200\\ \\text{cm}^2$ and $d = 1.0\\ \\text{mm}$. Find $C = \\varepsilon_0A/d$ and $U$ at $100\\ \\text{V}$.",
        steps: [
          { label: "Capacitance", text: "$C = 8.85\\times 10^{-12}\\times 0.02/10^{-3} = 1.77\\times 10^{-10}\\ \\text{F}$ ($177\\ \\text{pF}$)." },
          { label: "Energy", text: "$U = \\tfrac12CV^2 = 0.5\\times 1.77\\times 10^{-10}\\times 10^4 = 8.85\\times 10^{-7}\\ \\text{J}$." },
        ],
        result: "$C \\approx 177\\ \\text{pF}$; $U \\approx 8.85\\times 10^{-7}\\ \\text{J}$.",
      },
    ],
    keyTakeaways: [
      'Capacitance is $C = Q/V$: charge stored per volt, measured in farads ($1\\ \\mathrm{F} = 1\\ \\mathrm{C/V}$).',
      'A capacitor stays overall neutral: the two conductors carry equal and opposite charges $\\pm Q$.',
      'For fixed geometry $C$ is a constant — $Q$ and $V$ rise and fall together in strict proportion.',
    ],
    quiz: [
      {
        q: 'A capacitor connected to a battery acquires charge $Q$ at potential difference $V$. If the battery is swapped for one that maintains $2V$, the new charge and capacitance are:',
        options: [`$2Q$ and $2C$`, `$2Q$ and $C$`, `$Q$ and $C$`, `$2Q$ and $C/2$`],
        answer: 1,
        explanation: 'The same geometry fixes $C$; with $C$ unchanged, doubling $V$ doubles $Q = CV$.',
      },
      {
        q: 'One farad is equal to one:',
        options: ['coulomb·volt', 'volt per coulomb', 'coulomb per volt', 'joule per coulomb'],
        answer: 2,
        explanation: 'From $C = Q/V$, the farad is a coulomb divided by a volt. A joule per coulomb is a volt, not a farad.',
      },
      {
        q: 'A 200 pF capacitor is charged to 9.0 V. The charge on either plate is about:',
        options: ['1.8 nC', '18 nC', '0.18 nC', '22 nC'],
        answer: 0,
        explanation: '$Q = CV = (200\\times 10^{-12}\\ \\mathrm{F})(9.0\\ \\mathrm{V}) = 1.8\\times 10^{-9}\\ \\mathrm{C} = 1.8$ nC.',
      },
      {
        q: 'The capacitance of a given, isolated pair of conductors depends on:',
        options: ['the charge placed on them', 'the potential difference between them', 'their size, shape and separation', 'both Q and V together'],
        answer: 2,
        explanation: 'Capacitance is fixed by geometry alone; $Q$ and $V$ always adjust to keep $Q/V = C$ constant.',
      },
    ],
  },

  // ------------------------------------------------------------------ 25-2
  {
    sectionId: 'hall-ch25-s2',
    readingTime: 8,
    intro: "Capacitance can be computed from first principles for any geometry: put charge $Q$ on the conductors, find the field with Gauss' law, integrate it to get the potential difference, and divide. Here the recipe is run on the three canonical shapes — parallel plates, coaxial cylinders and concentric spheres — giving the formulas every circuit designer carries in their head.",
    objectives: [
      'Execute the standard recipe: assume $\\pm Q$, find $E$ from Gauss\u2019 law, integrate for $V$, then divide',
      'Compute $C = \\varepsilon_0 A/d$ for parallel plates, $C = 2\\pi\\varepsilon_0 L/\\ln(b/a)$ for coaxial cylinders and $C = 4\\pi\\varepsilon_0 ab/(b-a)$ for concentric spheres',
      'Use the isolated-sphere limit $C = 4\\pi\\varepsilon_0 R$ and appreciate the size of the farad',
    ],
    concepts: [
      {
        term: 'The computation recipe',
        kind: 'method',
        statement: "**To compute a capacitance: (1) put charge $\\pm Q$ on the conductors; (2) use Gauss' law to find $E$ in the gap; (3) integrate $V = -\\int \\vec E\\cdot d\\vec s$ from the negative to the positive conductor; (4) divide: $C = Q/V$.** The $Q$ you assumed cancels out.",
        detail: 'Every step relies only on tools from Chapters 22–23, which is why capacitance is the first great application of Gauss\u2019 law to device design.',
      },
      {
        term: 'Parallel-plate capacitor',
        kind: 'theorem',
        statement: "**For two plates of area $A$ separated by distance $d$ (edge effects neglected):** $$C = \\frac{\\varepsilon_0 A}{d}.$$ Inside, the field is uniform, $E = \\sigma/\\varepsilon_0 = Q/(\\varepsilon_0 A)$, and $V = Ed$.",
        detail: 'Capacitance grows with plate area and shrinks with separation — make the gap atomic-scale and even $1\\ \\mathrm{mm^2}$ of plates can hold microfarads, the principle of the electrolytic and super capacitors.',
      },
      {
        term: 'Cylindrical (coaxial) capacitor',
        kind: 'theorem',
        statement: "**For coaxial conductors of radii $a$ (inner) and $b$ (outer) and length $L$, with $L \\gg b$:** $$C = \\frac{2\\pi\\varepsilon_0 L}{\\ln(b/a)}.$$ The field between them is $E = \\lambda/(2\\pi\\varepsilon_0 r)$, largest at the inner conductor.",
        detail: 'This is the capacitance per unit length of coaxial cable, the workhorse of instrumentation and RF systems — typically tens of picofarads per meter.',
      },
      {
        term: 'Spherical capacitor',
        kind: 'theorem',
        statement: "**For concentric spheres of radii $a$ and $b$:** $$C = \\frac{4\\pi\\varepsilon_0 ab}{b - a},$$ which tends to the **isolated-sphere value** $C = 4\\pi\\varepsilon_0 R$ as $b \\to \\infty$.",
        detail: 'Even a body as large as the Earth ($R = 6.37\\times 10^{6}$ m) has a capacitance of only $4\\pi\\varepsilon_0 R \\approx 0.71$ mF — a vivid reminder of how big a unit the farad is.',
      },
      {
        term: "Calculating the Capacitance: solution protocol",
        kind: "method",
        statement: "**Solve Calculating the Capacitance problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is capacitance and field energy; the working equation is $C = q/V$, $C = \\varepsilon_0A/d$ (parallel plate), $U = \\tfrac12CV^2$, $u = \\tfrac12\\varepsilon_0E^2$; every substitution must carry its units so the final unit (farads and joules) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $C\\sim \\text{pF}$--$\\mu\\text{F}$; $U\\sim \\text{mJ}$ for $\\mu\\text{F}$ at $100\\ \\text{V}$; fixed $q$ versus fixed $V$ when a dielectric is inserted.",
      },
    ],
    figures: [
      {
        caption: 'A parallel-plate capacitor. The battery pumps charge until the plates hold $\\pm Q$ and the potential difference equals the battery voltage. Between the plates the field is uniform, $E = \\sigma/\\varepsilon_0$, so $V = Ed$ and $C = Q/V = \\varepsilon_0 A/d$. The stored energy sits in the field, with density $\\tfrac{1}{2}\\varepsilon_0 E^2$.',
        svg: `<svg viewBox="0 0 720 340" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallel-plate capacitor connected to a battery"><defs><marker id="capA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><path d="M250,110 L140,110 L140,150" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M250,210 L140,210 L140,180" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="112" y1="150" x2="168" y2="150" stroke="currentColor" stroke-width="4"/><line x1="124" y1="180" x2="156" y2="180" stroke="currentColor" stroke-width="4"/><text x="140" y="138" text-anchor="middle" font-size="18" fill="currentColor">+</text><text x="140" y="204" text-anchor="middle" font-size="18" fill="currentColor">−</text><rect x="250" y="104" width="310" height="10" rx="2" fill="currentColor" fill-opacity="0.9"/><rect x="250" y="204" width="310" height="10" rx="2" fill="currentColor" fill-opacity="0.9"/><text x="280" y="95" font-size="20" fill="currentColor" text-anchor="middle">+</text><text x="330" y="95" font-size="20" fill="currentColor" text-anchor="middle">+</text><text x="380" y="95" font-size="20" fill="currentColor" text-anchor="middle">+</text><text x="430" y="95" font-size="20" fill="currentColor" text-anchor="middle">+</text><text x="480" y="95" font-size="20" fill="currentColor" text-anchor="middle">+</text><text x="530" y="95" font-size="20" fill="currentColor" text-anchor="middle">+</text><text x="280" y="240" font-size="20" fill="currentColor" text-anchor="middle">−</text><text x="330" y="240" font-size="20" fill="currentColor" text-anchor="middle">−</text><text x="380" y="240" font-size="20" fill="currentColor" text-anchor="middle">−</text><text x="430" y="240" font-size="20" fill="currentColor" text-anchor="middle">−</text><text x="480" y="240" font-size="20" fill="currentColor" text-anchor="middle">−</text><text x="530" y="240" font-size="20" fill="currentColor" text-anchor="middle">−</text><line x1="305" y1="122" x2="305" y2="196" stroke="currentColor" stroke-width="2.5" marker-end="url(#capA)"/><line x1="405" y1="122" x2="405" y2="196" stroke="currentColor" stroke-width="2.5" marker-end="url(#capA)"/><line x1="505" y1="122" x2="505" y2="196" stroke="currentColor" stroke-width="2.5" marker-end="url(#capA)"/><text x="415" y="163" font-size="18" fill="currentColor" font-style="italic">E</text><line x1="595" y1="109" x2="595" y2="209" stroke="currentColor" stroke-width="1.8" marker-start="url(#capA)" marker-end="url(#capA)"/><text x="610" y="164" font-size="18" fill="currentColor" font-style="italic">d</text><line x1="250" y1="62" x2="560" y2="62" stroke="currentColor" stroke-width="1.8" marker-start="url(#capA)" marker-end="url(#capA)"/><text x="405" y="50" font-size="15" fill="currentColor" text-anchor="middle">A (plate area)</text><text x="405" y="292" font-size="17" fill="currentColor" text-anchor="middle">C = ε₀A/d (vacuum between the plates)</text><text x="405" y="317" font-size="15" fill="currentColor" text-anchor="middle" opacity="0.85">E = σ/ε₀ = Q/(ε₀A), uniform in the gap</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'From lab capacitor to the whole Earth',
        problem: '(a) A parallel-plate capacitor has plate area $A = 1.0\\ \\mathrm{m^2}$ and separation $d = 1.0\\ \\mathrm{mm}$. Find $C$, and the charge it holds at $V = 12\\ \\mathrm{V}$. (b) For comparison, compute the capacitance of an isolated sphere the size of the Earth, $R = 6.37\\times 10^{6}\\ \\mathrm{m}$.',
        steps: [
          { label: 'Plate capacitor', text: '$C = \\varepsilon_0 A/d = (8.85\\times 10^{-12})(1.0)/(1.0\\times 10^{-3}) = 8.85\\times 10^{-9}\\ \\mathrm{F} \\approx 8.85$ nF.' },
          { label: 'Charge at 12 V', text: '$Q = CV = (8.85\\times 10^{-9})(12) = 1.06\\times 10^{-7}\\ \\mathrm{C} \\approx 0.11\\ \\mu\\mathrm{C}$ — a square meter of plates holds a tenth of a microcoulomb.' },
          { label: 'Earth as a sphere', text: 'Treat the Earth as one conductor and infinity as the other: $C = 4\\pi\\varepsilon_0 R = R/k = (6.37\\times 10^{6})/(8.99\\times 10^{9}) = 7.1\\times 10^{-4}\\ \\mathrm{F}$.' },
          { label: 'Perspective', text: 'The whole planet is a 0.7 mF capacitor — the farad is a giant of a unit, which is why electronics lives in μF and pF.' },
        ],
        result: 'About 8.85 nF and $0.11\\ \\mu\\mathrm{C}$; the entire Earth manages only $\\sim 0.7$ mF.',
      },
      {
        title: "Calculating the Capacitance: parallel-plate numbers",
        problem: "A parallel-plate capacitor has $A = 100\\ \\text{cm}^2$ and $d = 1.0\\ \\text{mm}$. Find $C = \\varepsilon_0A/d$ and $U$ at $100\\ \\text{V}$.",
        steps: [
          { label: "Capacitance", text: "$C = 8.85\\times 10^{-12}\\times 0.01/10^{-3} = 8.85\\times 10^{-11}\\ \\text{F}$ ($88.5\\ \\text{pF}$)." },
          { label: "Energy", text: "$U = \\tfrac12CV^2 = 0.5\\times 8.85\\times 10^{-11}\\times 10^4 = 4.43\\times 10^{-7}\\ \\text{J}$." },
        ],
        result: "$C \\approx 88.5\\ \\text{pF}$; $U \\approx 4.43\\times 10^{-7}\\ \\text{J}$.",
      },
    ],
    keyTakeaways: [
      'Compute capacitance by assuming $\\pm Q$, finding $E$ (Gauss), integrating for $V$, and dividing: the assumed $Q$ cancels.',
      'Parallel plates: $C = \\varepsilon_0 A/d$. Coaxial cylinders: $C = 2\\pi\\varepsilon_0 L/\\ln(b/a)$. Concentric spheres: $C = 4\\pi\\varepsilon_0 ab/(b-a)$.',
      'An isolated sphere of radius $R$ has $C = 4\\pi\\varepsilon_0 R$ — and even planets give only millifarads.',
    ],
    quiz: [
      {
        q: 'A parallel-plate capacitor (area $A$, separation $d$) has its plate separation halved while the geometry otherwise stays fixed. The capacitance:',
        options: ['doubles', 'halves', 'is unchanged', 'quadruples'],
        answer: 0,
        explanation: '$C = \\varepsilon_0 A/d$ is inversely proportional to $d$; halving $d$ doubles $C$.',
      },
      {
        q: 'A coaxial cable has inner radius $a = 1.0$ mm, outer radius $b = 5.0$ mm, and length $L = 1.0$ m. Its capacitance is about:',
        options: ['35 pF', '3.5 pF', '350 pF', '35 nF'],
        answer: 0,
        explanation: '$C = 2\\pi\\varepsilon_0 L/\\ln(b/a) = (5.56\\times 10^{-11})/\\ln 5 = 3.5\\times 10^{-11}\\ \\mathrm{F} \\approx 35$ pF.',
      },
      {
        q: 'For the spherical capacitor $C = 4\\pi\\varepsilon_0 ab/(b-a)$, the outer radius $b$ is increased toward infinity with $a$ fixed. The capacitance approaches:',
        options: ['zero', `$4\\pi\\varepsilon_0 a$`, 'infinity', `$4\\pi\\varepsilon_0 b$`],
        answer: 1,
        explanation: 'As $b \\gg a$, $ab/(b-a) \\to a$, the isolated-sphere result: the outer conductor has effectively moved to infinity.',
      },
      {
        q: 'In a charged coaxial cable the electric field between the conductors is strongest:',
        options: ['at the outer conductor', 'at the inner conductor', 'halfway between them', 'uniform throughout'],
        answer: 1,
        explanation: '$E = \\lambda/(2\\pi\\varepsilon_0 r)$ falls off as $1/r$, so it peaks at the smallest radius, the inner conductor — which is why cable insulation is graded there.',
      },
    ],
  },

  // ------------------------------------------------------------------ 25-3
  {
    sectionId: 'hall-ch25-s3',
    readingTime: 7,
    intro: "Real circuits rarely use one capacitor at a time — they use banks of them, and the first question a designer asks is what single equivalent capacitor would act the same. The answer comes in two flavors, parallel and series, and the two rules are strikingly mirror-image to each other, with charge playing the role that voltage plays for resistors.",
    objectives: [
      'Derive and apply $C_{\\mathrm{eq}} = C_1 + C_2 + \\cdots$ for capacitors in parallel',
      'Derive and apply $1/C_{\\mathrm{eq}} = 1/C_1 + 1/C_2 + \\cdots$ for capacitors in series',
      'Find the charge on and voltage across each capacitor in a series or parallel combination',
    ],
    concepts: [
      {
        term: 'Capacitors in parallel',
        kind: 'theorem',
        statement: "**Capacitors wired in parallel all sit at the same potential difference $V$; their charges $Q_j = C_jV$ add, so** $$C_{\\mathrm{eq}} = C_1 + C_2 + C_3 + \\cdots$$ The equivalent capacitance is larger than any single one.",
        detail: 'Wiring plates together with ideal conductors makes them a single conductor, and connected conductors are at one potential — that is the whole proof of the shared $V$.',
      },
      {
        term: 'Capacitors in series',
        kind: 'theorem',
        statement: "**Capacitors in series carry the same charge magnitude $Q$ on every plate; their potential differences add, so** $$\\frac{1}{C_{\\mathrm{eq}}} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3} + \\cdots$$ The equivalent is smaller than the smallest member.",
        detail: 'The middle pair of plates between two series capacitors forms an isolated conductor island: whatever charge $\\pm Q$ it carries was put there when the island was part of one connected charging path, so both capacitors must hold equal and opposite $\\pm Q$.',
      },
      {
        term: 'Why “same V” or “same Q”',
        kind: 'insight',
        statement: "**Every combination problem is solved by asking one question: what does the wiring force to be equal?** Parallel wiring forces equal $V$; series isolation forces equal $Q$. The rest is bookkeeping.",
        detail: 'A hybrid network is peeled layer by layer: collapse each pure-parallel or pure-series group into one capacitor until a single $C_{\\mathrm{eq}}$ remains, then unfold the charge and voltage of each.',
      },
      {
        term: 'The resistor duality',
        kind: 'insight',
        statement: "**Capacitors combine exactly like resistors with the roles swapped: series capacitors add reciprocals like parallel resistors, and parallel capacitors add directly like series resistors.** $C$ behaves as the reciprocal of $R$.",
        detail: 'The deep reason: a capacitor stores charge per volt ($Q = CV$), while a resistor passes current per volt ($i = V/R$); series connections constrain the extensive quantity ($Q$ vs $i$), parallel connections constrain $V$.',
      },
      {
        term: "Capacitors in Parallel and Series: solution protocol",
        kind: "method",
        statement: "**Solve Capacitors in Parallel and Series problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is capacitance and field energy; the working equation is $C = q/V$, $C = \\varepsilon_0A/d$ (parallel plate), $U = \\tfrac12CV^2$, $u = \\tfrac12\\varepsilon_0E^2$; every substitution must carry its units so the final unit (farads and joules) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $C\\sim \\text{pF}$--$\\mu\\text{F}$; $U\\sim \\text{mJ}$ for $\\mu\\text{F}$ at $100\\ \\text{V}$; fixed $q$ versus fixed $V$ when a dielectric is inserted.",
      },
    ],
    examples: [
      {
        title: 'A 3.0 μF and a 6.0 μF capacitor, two ways',
        problem: 'Capacitors $C_1 = 3.0\\ \\mu\\mathrm{F}$ and $C_2 = 6.0\\ \\mu\\mathrm{F}$ are connected (a) in parallel and (b) in series across a $12\\ \\mathrm{V}$ battery. Find $C_{\\mathrm{eq}}$, the charge and voltage on each capacitor, and the total energy stored, for both wirings.',
        steps: [
          { label: 'Parallel', text: 'Same $V = 12$ V: $C_{\\mathrm{eq}} = 3.0 + 6.0 = 9.0\\ \\mu\\mathrm{F}$. $Q_1 = C_1V = 36\\ \\mu\\mathrm{C}$, $Q_2 = 72\\ \\mu\\mathrm{C}$ — total $108\\ \\mu\\mathrm{C}$, the charge on $C_{\\mathrm{eq}}$.' },
          { label: 'Series equivalent', text: '$1/C_{\\mathrm{eq}} = 1/3.0 + 1/6.0 = 1/2.0$, so $C_{\\mathrm{eq}} = 2.0\\ \\mu\\mathrm{F}$ — smaller than either capacitor.' },
          { label: 'Series charges and voltages', text: 'Both hold $Q = C_{\\mathrm{eq}}V = 24\\ \\mu\\mathrm{C}$. Then $V_1 = Q/C_1 = 24/3.0 = 8.0$ V and $V_2 = 24/6.0 = 4.0$ V, adding to 12 V as they must. The smaller capacitor takes the larger share of the voltage.' },
          { label: 'Energy check', text: 'Series: $U_1 = \\tfrac{1}{2}Q V_1 = 96\\ \\mu\\mathrm{J}$ and $U_2 = 48\\ \\mu\\mathrm{J}$, total $144\\ \\mu\\mathrm{J} = \\tfrac{1}{2}C_{\\mathrm{eq}}V^2 = \\tfrac{1}{2}(2.0\\times 10^{-6})(144)$. Parallel: $U = \\tfrac{1}{2}(9.0\\times 10^{-6})(144) = 648\\ \\mu\\mathrm{J}$.' },
        ],
        result: 'Parallel: 9.0 μF, charges 36 and 72 μC at 12 V each. Series: 2.0 μF, common charge 24 μC at 8.0 V and 4.0 V; energies 144 μJ (series) vs 648 μJ (parallel).',
      },
      {
        title: "Capacitors in Parallel and Series: parallel-plate numbers",
        problem: "A parallel-plate capacitor has $A = 150\\ \\text{cm}^2$ and $d = 1.0\\ \\text{mm}$. Find $C = \\varepsilon_0A/d$ and $U$ at $100\\ \\text{V}$.",
        steps: [
          { label: "Capacitance", text: "$C = 8.85\\times 10^{-12}\\times 0.015/10^{-3} = 1.33\\times 10^{-10}\\ \\text{F}$ ($133\\ \\text{pF}$)." },
          { label: "Energy", text: "$U = \\tfrac12CV^2 = 0.5\\times 1.33\\times 10^{-10}\\times 10^4 = 6.64\\times 10^{-7}\\ \\text{J}$." },
        ],
        result: "$C \\approx 133\\ \\text{pF}$; $U \\approx 6.64\\times 10^{-7}\\ \\text{J}$.",
      },
    ],
    keyTakeaways: [
      'Parallel: same $V$, charges add, $C_{\\mathrm{eq}} = \\sum C_j$. Series: same $Q$, voltages add, $1/C_{\\mathrm{eq}} = \\sum 1/C_j$.',
      'In series the smallest capacitor carries the largest share of the voltage, because $V_j = Q/C_j$ with $Q$ common.',
      'Capacitors combine dually to resistors: series capacitors act like parallel resistors and vice versa.',
    ],
    quiz: [
      {
        q: 'Capacitors of 2.0 μF and 6.0 μF are wired in series. The equivalent capacitance is:',
        options: ['1.5 μF', '8.0 μF', '3.0 μF', '0.67 μF'],
        answer: 0,
        explanation: '$1/C_{\\mathrm{eq}} = 1/2.0 + 1/6.0 = 4/6.0$, so $C_{\\mathrm{eq}} = 6.0/4.0 = 1.5\\ \\mu\\mathrm{F}$, smaller than either member.',
      },
      {
        q: 'In that series combination, which capacitor has the larger potential difference across it?',
        options: ['the 2.0 μF one', 'the 6.0 μF one', 'they are equal', 'impossible to say without the battery voltage'],
        answer: 0,
        explanation: 'Series capacitors share one charge $Q$, and $V = Q/C$ is biggest for the smallest $C$.',
      },
      {
        q: 'Two capacitors wired in parallel must have the same:',
        options: ['charge', 'capacitance', 'voltage', 'stored energy'],
        answer: 2,
        explanation: 'Parallel wiring connects the plates with conductors, forcing a common potential difference; the charges differ if the capacitances differ.',
      },
      {
        q: 'Two capacitors wired in series (nothing else connected to their junction) must have the same:',
        options: ['voltage', 'charge magnitude', 'capacitance', 'energy'],
        answer: 1,
        explanation: 'The isolated middle island can only hold $\\pm Q$, so both capacitors carry the same magnitude of charge; their voltages generally differ.',
      },
    ],
  },

  // ------------------------------------------------------------------ 25-4
  {
    sectionId: 'hall-ch25-s4',
    readingTime: 7,
    intro: "It takes work to charge a capacitor — the battery must shove electrons onto a plate that is already crowded with them. That work is stored, and it is stored not on the metal but in the electric field that fills the gap. This section tallies the energy, then divides it by the gap volume to obtain one of the most important formulas in electrodynamics: the energy density of an electric field.",
    objectives: [
      'Compute stored energy three ways: $U = Q^2/2C = \\tfrac{1}{2}QV = \\tfrac{1}{2}CV^2$',
      'Derive the field energy density $u = \\tfrac{1}{2}\\varepsilon_0 E^2$ from the parallel-plate capacitor',
      'Apply energy density to any electric field, including fields with no capacitor in sight',
    ],
    concepts: [
      {
        term: 'Work needed to charge a capacitor',
        kind: 'theorem',
        statement: "**Assembling charge $Q$ at final voltage $V$ on capacitance $C$ requires** $$U = \\int_0^Q \\frac{q}{C}\\,dq = \\frac{Q^2}{2C} = \\tfrac{1}{2}QV = \\tfrac{1}{2}CV^2.$$ The factor $\\tfrac{1}{2}$ appears because the voltage grows from zero along the way.",
        detail: 'The first bit of charge arrives for free; the last bit must be pushed against the full potential difference $V$; the average work per unit charge is $V/2$.',
      },
      {
        term: 'Energy density of an electric field',
        kind: 'theorem',
        statement: "**Dividing the parallel-plate energy by the gap volume $Ad$ gives the local energy density of any electric field:** $$u = \\tfrac{1}{2}\\varepsilon_0 E^2 \\quad \\mathrm{(J/m^3)}.$$ It applies to fields in general, not only between capacitor plates.",
        detail: 'For example, a modest field of $3.0\\times 10^{6}$ V/m — air\u2019s breakdown limit — carries $u \\approx 40\\ \\mathrm{J/m^3}$, and the strongest lab fields carry kilojoules per cubic meter.',
      },
      {
        term: 'The field is the reservoir',
        kind: 'insight',
        statement: "**A capacitor\u2019s energy resides in the electric field between the plates, not in the metal.** Integrating $u$ over the field-filled volume returns exactly $\\tfrac{1}{2}CV^2$.",
        detail: 'This viewpoint, forced on physics by electromagnetic waves (which carry energy through empty space with no conductors at all), is the one Maxwell\u2019s theory adopts — and the one that makes sense of light.',
      },
      {
        term: 'Capacitors as fast energy buffers',
        kind: 'insight',
        statement: "**Compared with a battery, a capacitor stores little energy but releases it almost instantly** — microseconds in a camera flash, milliseconds in a defibrillator — because no chemistry limits the rate.",
        detail: 'This speed is why pulsed lasers, particle accelerators, regenerative brakes and DRAM refresh lines all lean on capacitors, and why power supplies use huge banks of them to ride through dips.',
      },
      {
        term: "Energy Stored in an Electric Field: solution protocol",
        kind: "method",
        statement: "**Solve Energy Stored in an Electric Field problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is capacitance and field energy; the working equation is $C = q/V$, $C = \\varepsilon_0A/d$ (parallel plate), $U = \\tfrac12CV^2$, $u = \\tfrac12\\varepsilon_0E^2$; every substitution must carry its units so the final unit (farads and joules) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $C\\sim \\text{pF}$--$\\mu\\text{F}$; $U\\sim \\text{mJ}$ for $\\mu\\text{F}$ at $100\\ \\text{V}$; fixed $q$ versus fixed $V$ when a dielectric is inserted.",
      },
    ],
    examples: [
      {
        title: 'A defibrillator\u2019s punch',
        problem: 'A defibrillator uses a $100\\ \\mu\\mathrm{F}$ capacitor charged to $2.0\\ \\mathrm{kV}$. (a) How much energy is stored? (b) If it is discharged through the patient in $2.0\\ \\mathrm{ms}$, what is the average power delivered? (c) If the plates of an equivalent air-gap capacitor sit $2.0\\ \\mathrm{mm}$ apart, what is the field and its energy density at full charge?',
        steps: [
          { label: 'Energy', text: '$U = \\tfrac{1}{2}CV^2 = \\tfrac{1}{2}(100\\times 10^{-6})(2.0\\times 10^{3})^2 = \\tfrac{1}{2}(10^{-4})(4.0\\times 10^{6}) = 200$ J.' },
          { label: 'Power', text: '$P_{\\mathrm{avg}} = U/t = 200/(2.0\\times 10^{-3}) = 1.0\\times 10^{5}$ W — a hundred kilowatts, delivered briefly.' },
          { label: 'Field', text: '$E = V/d = (2.0\\times 10^{3})/(2.0\\times 10^{-3}) = 1.0\\times 10^{6}$ V/m, a third of air\u2019s breakdown field.' },
          { label: 'Energy density', text: '$u = \\tfrac{1}{2}\\varepsilon_0 E^2 = \\tfrac{1}{2}(8.85\\times 10^{-12})(1.0\\times 10^{6})^2 \\approx 4.4\\ \\mathrm{J/m^3}$ — which times the gap volume equals $U$.' },
        ],
        result: 'About 200 J, delivered at roughly 100 kW, in a field of 1.0 MV/m whose energy density is $4.4\\ \\mathrm{J/m^3}$.',
      },
      {
        title: "Energy Stored in an Electric Field: parallel-plate numbers",
        problem: "A parallel-plate capacitor has $A = 200\\ \\text{cm}^2$ and $d = 1.0\\ \\text{mm}$. Find $C = \\varepsilon_0A/d$ and $U$ at $100\\ \\text{V}$.",
        steps: [
          { label: "Capacitance", text: "$C = 8.85\\times 10^{-12}\\times 0.02/10^{-3} = 1.77\\times 10^{-10}\\ \\text{F}$ ($177\\ \\text{pF}$)." },
          { label: "Energy", text: "$U = \\tfrac12CV^2 = 0.5\\times 1.77\\times 10^{-10}\\times 10^4 = 8.85\\times 10^{-7}\\ \\text{J}$." },
        ],
        result: "$C \\approx 177\\ \\text{pF}$; $U \\approx 8.85\\times 10^{-7}\\ \\text{J}$.",
      },
    ],
    keyTakeaways: [
      'Stored energy: $U = Q^2/2C = \\tfrac{1}{2}QV = \\tfrac{1}{2}CV^2$ — the half comes from the voltage ramping up during charging.',
      'Any electric field carries energy density $u = \\tfrac{1}{2}\\varepsilon_0 E^2$, whether or not a capacitor made it.',
      'Capacitors trade small total energy for enormous delivery speed — the complement of a battery.',
    ],
    quiz: [
      {
        q: 'The potential difference across a fixed capacitor is doubled. The stored energy:',
        options: ['doubles', 'halves', 'quadruples', 'is unchanged'],
        answer: 2,
        explanation: '$U = \\tfrac{1}{2}CV^2$ scales as the square of $V$; doubling $V$ multiplies $U$ by 4.',
      },
      {
        q: 'The energy density of an electric field of $3.0\\times 10^{6}$ V/m is about:',
        options: ['4 J/m³', '40 J/m³', '400 J/m³', '0.4 J/m³'],
        answer: 1,
        explanation: '$u = \\tfrac{1}{2}\\varepsilon_0E^2 = \\tfrac{1}{2}(8.85\\times 10^{-12})(3.0\\times 10^{6})^2 \\approx 40\\ \\mathrm{J/m^3}$.',
      },
      {
        q: 'A capacitor stores 0.20 J when charged to 20 V. Its capacitance is:',
        options: ['1.0 mF', '1.0 μF', '10 mF', '0.10 mF'],
        answer: 0,
        explanation: '$C = 2U/V^2 = 0.40/400 = 1.0\\times 10^{-3}\\ \\mathrm{F}$.',
      },
      {
        q: 'In the field-picture of a charged parallel-plate capacitor, the energy is located:',
        options: ['in the metal plates', 'on the surface charges only', 'in the electric field filling the gap', 'in the connecting wires'],
        answer: 2,
        explanation: 'Integrating the density $u = \\tfrac{1}{2}\\varepsilon_0E^2$ over the gap volume reproduces $\\tfrac{1}{2}CV^2$ — the field is the reservoir.',
      },
    ],
  },

  // ------------------------------------------------------------------ 25-5
  {
    sectionId: 'hall-ch25-s5',
    readingTime: 7,
    intro: "Empty space is a wasteful insulator: slip a slab of the right material between the plates and the same capacitor stores several times the charge at the same voltage. Such dielectrics — glass, paper, plastics, ceramics, and for water a factor of eighty — are the difference between laboratory curiosities and industrial capacitors, and this section quantifies their two gifts: they boost capacitance and they endure stronger fields before breaking down.",
    objectives: [
      'Apply $C = \\kappa C_0$ for a dielectric-filled capacitor and use representative values of $\\kappa$',
      'Explain polarization: why a dielectric weakens the internal field and raises capacitance',
      'Use dielectric strength to find the maximum voltage and charge of a capacitor',
    ],
    concepts: [
      {
        term: 'Dielectric constant',
        kind: 'definition',
        statement: "**If the gap of a capacitor is completely filled with a dielectric, its capacitance becomes** $$C = \\kappa C_0,$$ where $C_0$ is the vacuum value and the dimensionless **dielectric constant** $\\kappa \\ge 1$ measures the material\u2019s response.",
        detail: 'Representative values: air 1.00054 (effectively 1), Teflon 2.1, polystyrene 2.6, paper 3.5, Pyrex glass 4.7, porcelain 6.5, water (20 °C) 80. The constant is about frequency- and temperature-dependent; tables quote a standard condition.',
      },
      {
        term: 'Polarization',
        kind: 'insight',
        statement: "**A dielectric contains molecular dipoles — permanent (like water) or induced (like everything). The plate field aligns and stretches them, and their tips sprout a bound surface charge that partially cancels the plate charge inside the material.**",
        detail: 'The internal field drops by the factor $\\kappa$, so the voltage for a given $Q$ drops by $\\kappa$, so $C = Q/V$ rises by $\\kappa$. Nothing about the plates changed — the material is doing the work.',
      },
      {
        term: 'Dielectric strength',
        kind: 'definition',
        statement: "**Every insulator fails above a critical field — its dielectric strength — and becomes a conductor (sparking breakdown).** It is quoted in V/m or kV/mm: air $\\approx 3\\times 10^{6}$ V/m, paper $16\\times 10^{6}$, polystyrene $24\\times 10^{6}$, Teflon $60\\times 10^{6}$ V/m.",
        detail: 'A capacitor\u2019s working voltage is $V_{\\max} = E_{\\mathrm{strength}}\\times d$; exceeding it destroys the device (sometimes spectacularly), so high-voltage capacitors trade thin gaps for strong dielectrics.',
      },
      {
        term: 'The dielectric is pulled in',
        kind: 'insight',
        statement: "**A dielectric slab partially inserted between charged plates is sucked inward**, even with the battery disconnected — the system lowers its field energy by replacing vacuum with material.",
        detail: 'The fringing field at the edges tugs on the induced dipoles. This is also why powder clings to charged rods and why some capacitor designs must lock their dielectric in place.',
      },
      {
        term: "Capacitor with a Dielectric: solution protocol",
        kind: "method",
        statement: "**Solve Capacitor with a Dielectric problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is capacitance and field energy; the working equation is $C = q/V$, $C = \\varepsilon_0A/d$ (parallel plate), $U = \\tfrac12CV^2$, $u = \\tfrac12\\varepsilon_0E^2$; every substitution must carry its units so the final unit (farads and joules) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $C\\sim \\text{pF}$--$\\mu\\text{F}$; $U\\sim \\text{mJ}$ for $\\mu\\text{F}$ at $100\\ \\text{V}$; fixed $q$ versus fixed $V$ when a dielectric is inserted.",
      },
    ],
    examples: [
      {
        title: 'Teflon upgrade',
        problem: 'A parallel-plate capacitor has $A = 1.0\\ \\mathrm{m^2}$ and $d = 0.10\\ \\mathrm{mm}$. (a) Find the vacuum capacitance and the capacitance when the gap is filled with Teflon ($\\kappa = 2.1$). (b) What is the maximum safe voltage, and the maximum charge, given Teflon\u2019s dielectric strength of $60\\times 10^{6}$ V/m?',
        steps: [
          { label: 'Vacuum value', text: '$C_0 = \\varepsilon_0A/d = (8.85\\times 10^{-12})(1.0)/(1.0\\times 10^{-4}) = 8.85\\times 10^{-8}\\ \\mathrm{F} = 88.5$ nF.' },
          { label: 'With Teflon', text: '$C = \\kappa C_0 = 2.1 \\times 88.5 = 186$ nF — more than double for the same geometry.' },
          { label: 'Maximum voltage', text: '$V_{\\max} = E_{\\mathrm{max}} d = (60\\times 10^{6}\\ \\mathrm{V/m})(1.0\\times 10^{-4}\\ \\mathrm{m}) = 6.0$ kV; in air the same gap would spark at only 300 V.' },
          { label: 'Maximum charge', text: '$Q_{\\max} = CV_{\\max} = (1.86\\times 10^{-7})(6.0\\times 10^{3}) \\approx 1.1\\times 10^{-3}$ C.' },
        ],
        result: '88.5 nF empty becomes 186 nF with Teflon, which also permits 6.0 kV and about 1.1 mC — dielectrics raise both capacitance and working voltage.',
      },
      {
        title: "Capacitor with a Dielectric: parallel-plate numbers",
        problem: "A parallel-plate capacitor has $A = 100\\ \\text{cm}^2$ and $d = 1.0\\ \\text{mm}$. Find $C = \\varepsilon_0A/d$ and $U$ at $100\\ \\text{V}$.",
        steps: [
          { label: "Capacitance", text: "$C = 8.85\\times 10^{-12}\\times 0.01/10^{-3} = 8.85\\times 10^{-11}\\ \\text{F}$ ($88.5\\ \\text{pF}$)." },
          { label: "Energy", text: "$U = \\tfrac12CV^2 = 0.5\\times 8.85\\times 10^{-11}\\times 10^4 = 4.43\\times 10^{-7}\\ \\text{J}$." },
        ],
        result: "$C \\approx 88.5\\ \\text{pF}$; $U \\approx 4.43\\times 10^{-7}\\ \\text{J}$.",
      },
    ],
    keyTakeaways: [
      'Filling the gap multiplies capacitance by the dielectric constant: $C = \\kappa C_0$, with $\\kappa$ from 1 (air) to 80 (water) and beyond.',
      'Polarization — alignment and stretching of molecular dipoles — supplies bound charge that weakens the internal field to $E_0/\\kappa$.',
      'Dielectric strength caps the field: $V_{\\max} = E_{\\mathrm{strength}}d$; exceeding it means breakdown.',
    ],
    quiz: [
      {
        q: 'An isolated capacitor (battery disconnected, charge fixed $Q$) has its gap filled with a dielectric of $\\kappa = 4$. The potential difference between its plates becomes:',
        options: [`$V/4$`, `$4V$`, `$2V$`, 'unchanged'],
        answer: 0,
        explanation: 'The internal field drops by $\\kappa$, so with the same $Q$ the voltage drops to $V/\\kappa = V/4$.',
      },
      {
        q: 'Water has $\\kappa \\approx 80$. Filling a capacitor with water instead of vacuum makes its capacitance:',
        options: ['1/80 as large', '80 times larger', '8 times larger', 'the same'],
        answer: 1,
        explanation: '$C = \\kappa C_0 = 80C_0$ — water\u2019s permanent molecular dipoles line up enthusiastically.',
      },
      {
        q: 'The dielectric strength of an insulator is:',
        options: ['the maximum charge it can hold', 'the maximum electric field it can withstand before breakdown', 'its dielectric constant times $\\varepsilon_0$', 'the energy density it can store'],
        answer: 1,
        explanation: 'Strength is a field limit in V/m; beyond it the insulator ionizes and conducts.',
      },
      {
        q: 'A battery holds a capacitor at fixed voltage $V$ while a dielectric slab ($\\kappa > 1$) is slid in. The stored energy:',
        options: ['decreases', 'increases', 'stays the same', 'drops to zero'],
        answer: 1,
        explanation: 'At fixed $V$, $U = \\tfrac{1}{2}CV^2$ and $C$ rises by $\\kappa$, so the stored energy increases — the battery supplies the extra.',
      },
    ],
  },

  // ------------------------------------------------------------------ 25-6
  {
    sectionId: 'hall-ch25-s6',
    readingTime: 8,
    intro: "The last piece of the dielectric story is to redo Gauss' law when the field passes through matter, not vacuum. The bound charge that polarization paints on the dielectric\u2019s surfaces weakens the field inside, and once that charge is accounted for, Gauss\u2019 law recovers every result of the previous section — and generalizes it to any material, any field, anywhere.",
    objectives: [
      'Explain how polarization creates induced surface charge $q\' = q(1 - 1/\\kappa)$ on a dielectric',
      'Write Gauss\u2019 law with a dielectric present, in both $q - q\'$ and $\\kappa\\varepsilon_0$ forms',
      'Derive $C = \\kappa C_0$ from the modified Gauss law and use the permittivity $\\varepsilon = \\kappa\\varepsilon_0$',
    ],
    concepts: [
      {
        term: 'Induced surface charge',
        kind: 'theorem',
        statement: "**When a dielectric fills a charged capacitor, its faces carry induced (bound) charge of magnitude** $$q' = q\\left(1 - \\frac{1}{\\kappa}\\right),$$ always smaller in magnitude than the free charge $q$ on the plates.",
        detail: 'For paper ($\\kappa = 3.5$) the induced charge is 71% of the free charge; for water, 98.75%; for a conductor ($\\kappa \\to \\infty$) it would equal $q$, which is exactly the perfect cancellation that makes the field inside a conductor zero.',
      },
      {
        term: 'The field inside a dielectric',
        kind: 'theorem',
        statement: "**The induced charge partially cancels the plate charge, so the field inside the dielectric is** $$E = \\frac{E_0}{\\kappa},$$ one-$\\kappa$-th of the vacuum field built by the same free charge.",
        detail: 'A vacuum gap between the same plates at the same $Q$ has $E_0 = \\sigma/\\varepsilon_0$; the dielectric\u2019s bound charge replaces part of that $\\sigma$, and the voltage drops accordingly.',
      },
      {
        term: "Gauss' law with a dielectric",
        kind: 'law',
        statement: "**Gauss\u2019 law still holds for the total charge — free plus induced: $\\varepsilon_0\\oint \\vec E\\cdot d\\vec A = q - q'$ (for one plate\u2019s Gaussian surface). Substituting $q' = q(1-1/\\kappa)$ gives the working form** $$\\oint \\kappa\\varepsilon_0\\,\\vec E \\cdot d\\vec A = q \\quad \\text{(free charge only)}.$$",
        detail: 'The vacuum law was never wrong — it simply must count the bound charge too. The $\\kappa\\varepsilon_0$ form buries that bookkeeping inside the material constant, exactly as one does for conductors by excluding their interior fields.',
      },
      {
        term: 'Permittivity',
        kind: 'notation',
        statement: "**The product $\\varepsilon \\equiv \\kappa\\varepsilon_0$ is the permittivity of the material.** In a dielectric, energy density becomes $u = \\tfrac{1}{2}\\varepsilon E^2 = \\tfrac{1}{2}\\kappa\\varepsilon_0E^2$.",
        detail: 'Names: $\\varepsilon_0$ is the permittivity of free space; a material with $\\kappa = 4.7$ (Pyrex) has $\\varepsilon = 4.7\\varepsilon_0$. Old texts call $\\kappa$ the “specific inductive capacity.”',
      },
      {
        term: "Dielectrics and Gauss' Law: solution protocol",
        kind: "method",
        statement: "**Solve Dielectrics and Gauss' Law problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is capacitance and field energy; the working equation is $C = q/V$, $C = \\varepsilon_0A/d$ (parallel plate), $U = \\tfrac12CV^2$, $u = \\tfrac12\\varepsilon_0E^2$; every substitution must carry its units so the final unit (farads and joules) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $C\\sim \\text{pF}$--$\\mu\\text{F}$; $U\\sim \\text{mJ}$ for $\\mu\\text{F}$ at $100\\ \\text{V}$; fixed $q$ versus fixed $V$ when a dielectric is inserted.",
      },
    ],
    examples: [
      {
        title: 'Paper between charged plates',
        problem: 'A parallel-plate capacitor with plates of area $A = 0.50\\ \\mathrm{m^2}$ carries free surface charge density $\\sigma = 1.0\\ \\mu\\mathrm{C/m^2}$. The gap is filled with paper, $\\kappa = 3.5$, and is $d = 1.0$ mm thick. Find (a) the vacuum field the free charge alone would make, (b) the field inside the paper, (c) the induced charge density, and (d) the voltage and capacitance, checking $C = \\kappa C_0$.',
        steps: [
          { label: 'Vacuum field', text: '$E_0 = \\sigma/\\varepsilon_0 = (1.0\\times 10^{-6})/(8.85\\times 10^{-12}) = 1.13\\times 10^{5}$ V/m.' },
          { label: 'Field in paper', text: '$E = E_0/\\kappa = (1.13\\times 10^{5})/3.5 = 3.2\\times 10^{4}$ V/m.' },
          { label: 'Induced charge', text: '$\\sigma\' = \\sigma(1 - 1/\\kappa) = (1.0)(1 - 0.286) = 0.71\\ \\mu\\mathrm{C/m^2}$, so $q\' = 0.71\\times 10^{-6}\\times 0.50 = 0.36\\ \\mu\\mathrm{C}$.' },
          { label: 'Voltage and capacitance', text: '$V = Ed = (3.2\\times 10^{4})(1.0\\times 10^{-3}) = 32$ V. Vacuum capacitance $C_0 = \\varepsilon_0A/d = 4.4$ nF; measured $C = Q/V = (\\sigma A)/V = (0.50\\times 10^{-6})/32 = 1.6\\times 10^{-8}$ F $= 3.5\\times C_0$. ✓' },
        ],
        result: 'The paper drops the field to $3.2\\times 10^{4}$ V/m, carries $0.36\\ \\mu\\mathrm{C}$ of bound charge, and multiplies the capacitance by exactly $\\kappa = 3.5$.',
      },
      {
        title: "Dielectrics and Gauss' Law: parallel-plate numbers",
        problem: "A parallel-plate capacitor has $A = 150\\ \\text{cm}^2$ and $d = 1.0\\ \\text{mm}$. Find $C = \\varepsilon_0A/d$ and $U$ at $100\\ \\text{V}$.",
        steps: [
          { label: "Capacitance", text: "$C = 8.85\\times 10^{-12}\\times 0.015/10^{-3} = 1.33\\times 10^{-10}\\ \\text{F}$ ($133\\ \\text{pF}$)." },
          { label: "Energy", text: "$U = \\tfrac12CV^2 = 0.5\\times 1.33\\times 10^{-10}\\times 10^4 = 6.64\\times 10^{-7}\\ \\text{J}$." },
        ],
        result: "$C \\approx 133\\ \\text{pF}$; $U \\approx 6.64\\times 10^{-7}\\ \\text{J}$.",
      },
    ],
    keyTakeaways: [
      'Polarization paints induced charge $q\' = q(1-1/\\kappa)$ on a dielectric\u2019s faces — nearly equal to $q$ for water, exactly $q$ for a conductor.',
      'Inside the dielectric the field is $E_0/\\kappa$, and the free-charge-only Gauss law reads $\\oint\\kappa\\varepsilon_0\\vec E\\cdot d\\vec A = q$.',
      'With $\\varepsilon = \\kappa\\varepsilon_0$ the working formulas become $C = \\varepsilon A/d$ and $u = \\tfrac{1}{2}\\varepsilon E^2$.',
    ],
    quiz: [
      {
        q: 'For a dielectric with $\\kappa = 3$, the induced surface charge equals what fraction of the free plate charge?',
        options: ['2/3', '1/3', '3/2', '1'],
        answer: 0,
        explanation: '$q\' = q(1 - 1/\\kappa) = q(1 - 1/3) = \\tfrac{2}{3}q$.',
      },
      {
        q: 'The free charge on the plates is held fixed while a dielectric is inserted. The field in the gap:',
        options: ['drops by the factor $\\kappa$', 'rises by the factor $\\kappa$', 'is unchanged', 'reverses direction'],
        answer: 0,
        explanation: 'Induced charge partially cancels the free charge, giving $E = E_0/\\kappa$.',
      },
      {
        q: 'The permittivity $\\varepsilon$ of a medium equals:',
        options: [`$\\kappa/\\varepsilon_0$`, `$\\kappa\\varepsilon_0$`, `$\\varepsilon_0/\\kappa$`, `$\\kappa + \\varepsilon_0$`],
        answer: 1,
        explanation: 'By definition $\\varepsilon = \\kappa\\varepsilon_0$; vacuum corresponds to $\\kappa = 1$, $\\varepsilon = \\varepsilon_0$.',
      },
      {
        q: 'Which form of Gauss\u2019 law involves only the free charge $q$ on the plates?',
        options: [`$\\varepsilon_0\\oint\\vec E\\cdot d\\vec A = q$`, `$\\kappa\\varepsilon_0\\oint\\vec E\\cdot d\\vec A = q$`, `$\\oint\\vec E\\cdot d\\vec A = \\kappa q$`, 'none — induced charge is unavoidable'],
        answer: 1,
        explanation: 'The $\\kappa$ factor absorbs the induced charge; the plain $\\varepsilon_0$ form needs $q - q\'$ instead of $q$.',
      },
    ],
  },
]
