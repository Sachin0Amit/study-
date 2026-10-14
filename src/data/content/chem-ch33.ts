import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 33: Solid State: Lattices, Packing and Defects
// Sections 33.1 - 33.4. Mahan Chapters 3 plus Atkins Focus 15 Topics 15A-15C.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh33Content: SectionContent[] = [
  // ---------------------------------------------------------------- 33.1
  {
    sectionId: 'chem-ch33-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Cubic lattices from sharing rules to packing fractions',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Atom counts and packing ladder for cubic cells',
            body: 'The **counting theorem** gives $Z = 1$ for simple cubic plus $Z = 2$ for body centred cubic plus $Z = 4$ for face centred cubic from corner body and face sharing rules. Packing fractions follow as $0.52$ plus $0.68$ plus $0.74$ with coordination $6$ plus $8$ plus $12$, showing face centred cubic as closest packing. The ladder proves why metals favor body and face centred cells while open simple cubic appears rarely outside polonium.'
          },
          {
            kind: 'derivation',
            heading: 'Edge to radius relations from face and body diagonals',
            body: 'Touch along the edge for simple cubic to get $a = 2r$, along the body diagonal for body centred cubic to get $a = 4r/\\sqrt{3}$, and along the face diagonal for face centred cubic to get $a = 2\\sqrt{2}r$. Dividing sphere volume times $Z$ by cell volume $a^3$ then yields each packing fraction above, closing the geometry loop. The same diagonals place octahedral and tetrahedral holes that later host alloys and ionic salts.'
          },
          {
            kind: 'application',
            heading: 'Why polonium stands alone and iron switches cells',
            body: 'Polonium alone adopts simple cubic packing at ambient conditions because directional bonding overrides close packing preference, a graduate exception that tests understanding of the ladder. Iron switches from body centred to face centred with temperature as magnetic and vibrational entropy terms cross, driving steel heat treatment. Alloy designers read these switches from phase diagrams that are ultimately packing plus electron count arguments.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Crystalline solids repeat a unit cell whose atom count plus edge plus packing fraction are fully calculable. Simple cubic plus body centred cubic plus face centred cubic form the cubic counting ladder from open to closest packed. This section counts atoms by sharing plus links edge $a$ to radius $r$ plus evaluates the $0.52$ plus $0.68$ plus $0.74$ ladder.',
    objectives: [
      'Count $Z$ as $1$ for $SC$ plus $2$ for $BCC$ plus $4$ for $FCC$ from corner plus body plus face sharing',
      'Relate edge $a$ to radius $r$ as $a = 2r$ plus $a = 4r$ over $\\sqrt{3}$ plus $a = 2\\sqrt{2}r$',
      'Compute packing fraction $0.52$ plus $0.68$ plus $0.74$ with coordination $6$ plus $8$ plus $12$'
    ],
    concepts: [
      {
        term: 'Atom counting by sharing',
        kind: 'definition',
        statement: 'A **corner atom counts as one eighth while face counts as one half** `sharing` $Z$ equals $1$ for $SC$ plus $2$ for $BCC$ plus $4$ for $FCC$.',
        detail: 'Eight corners times $1$ over $8$ gives $1$ plus body centre adds $1$ for $BCC$ giving $2$ while six faces times $1$ over $2$ adds $3$ for $FCC$ giving $4$. Mahan closest packing pictures show $12$ neighbours for closest packed layers.'
      },
      {
        term: 'Edge to radius geometry',
        kind: 'method',
        statement: 'A **touch along edge plus body diagonal plus face diagonal fixes edge** `edge-radius` $a = 2r$ for $SC$ plus $a = 4r$ over $\\sqrt{3}$ for $BCC$ plus $a = 2\\sqrt{2}r$ for $FCC$.',
        detail: '$BCC$ body diagonal $4r = \\sqrt{3}a$ while $FCC$ face diagonal $4r = \\sqrt{2}a$ times $2$ gives $a = 2\\sqrt{2}r$. Atkins cubic $d_{hkl}$ uses $a$ directly for density work in the next section.'
      },
      {
        term: 'Packing fraction ladder',
        kind: 'law',
        statement: 'A **occupied volume over cell volume gives fixed ladder** `packing-fraction` $0.52$ for $SC$ plus $0.68$ for $BCC$ plus $0.74$ for $FCC$.',
        detail: 'Fraction $Z$ times $4$ over $3$ $\\pi r^{3}$ over $a^{3}$ yields $\\pi$ over $6$ near $0.52$ for $SC$ plus $\\sqrt{3}\\pi$ over $8$ near $0.68$ for $BCC$ plus $\\sqrt{2}\\pi$ over $6$ near $0.74$ for $FCC$. Closest packing attains maximum $74$ percent with coordination $12$.'
      },
      {
        term: 'Coordination number meaning',
        kind: 'theorem',
        statement: 'A **touch count sets properties from openness to density** `coordination` $6$ neighbours for $SC$ plus $8$ for $BCC$ plus $12$ for $FCC$ closest packing.',
        detail: '$SC$ touches along edges only while $BCC$ touches along body diagonal with $8$ nearest plus $6$ next nearest. $FCC$ plus $HCP$ both reach $12$ with $6$ in plane plus $3$ above plus $3$ below as Mahan layer pictures show.'
      },
      {
        term: 'Hexagonal versus cubic packing',
        kind: 'insight',
        statement: 'A **layer repeat fixes hexagonal versus cubic close packing** `stacking` $ABAB$ gives $HCP$ while $ABCABC$ gives $CCP$ identical to $FCC$ with $0.74$ fraction.',
        detail: 'Both stack close packed $a$ layers with $b$ plus $c$ depressions as Mahan spheres show. $Mg$ plus $Zn$ favour $HCP$ while $Cu$ plus $Ag$ favour $CCP$ with $FCC$ cell edge $a = 2\\sqrt{2}r$.'
      }
    ],
    figures: [
      {
        caption: 'Cubic $SC$ plus $BCC$ plus $FCC$ with $Z = 1$ plus $2$ plus $4$ and fractions $0.52$ plus $0.68$ plus $0.74$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cubic cells SC BCC FCC with packing fractions" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">SC Z 1 open</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">a 2r, 0.52, CN 6</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">BCC Z 2 body</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">body diagonal 4r</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">0.68, CN 8</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">FCC Z 4 faces</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">face diagonal 4r</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">ABAB HCP vs ABCABC CCP both 0.74</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'FCC packing fraction from geometry',
        problem: 'Copper is $FCC$ with $Z = 4$ and face diagonal $4r = \\sqrt{2}a$ times $2$. Show the packing fraction equals $0.74$.',
        steps: [
          { label: 'Step 1', text: 'Write fraction formula:\n```text\nfraction = Z x (4 over 3 pi r3) over a3\nZ = 4 for FCC\na = 2 sqrt2 r from face diagonal\n```\nCell volume $a^{3}$ uses $a = 2\\sqrt{2}r$ from $4r = \\sqrt{2}a$ times $2$.' },
          { label: 'Step 2', text: 'Insert $a^{3} = 16\\sqrt{2}r^{3}$ since $2\\sqrt{2}$ cubed gives $16\\sqrt{2}$. Numerator $4$ times $4$ over $3$ $\\pi r^{3}$ gives $16$ over $3$ $\\pi r^{3}$.' },
          { label: 'Step 3', text: 'Divide to $\\sqrt{2}\\pi$ over $6$ near $0.74$ so $74$ percent occupied and $26$ percent void with coordination $12$.' }
        ],
        result: 'FCC fraction $\\sqrt{2}\\pi$ over $6$ near $0.74$ with $Z = 4$ and coordination $12$.'
      },
      {
        title: 'BCC edge from atomic radius',
        problem: 'Sodium is $BCC$ with radius $r = 186$ pm. Find edge $a$ plus atoms per cell plus packing fraction.',
        steps: [
          { label: 'Step 1', text: 'Use body diagonal $4r = \\sqrt{3}a$ so $a = 4r$ over $\\sqrt{3}$ with $r = 186$ pm.' },
          { label: 'Step 2', text: 'Compute $4$ times $186$ equals $744$ pm divided by $1.732$ giving $a$ near $429$ pm with $Z = 2$.' },
          { label: 'Step 3', text: 'Assign packing $0.68$ with coordination $8$ since body centre touches $8$ corners.' }
        ],
        result: 'Edge near $429$ pm with $Z = 2$ plus fraction $0.68$ plus coordination $8$.'
      }
    ],
    keyTakeaways: [
      '$Z$ equals $1$ for $SC$ plus $2$ for $BCC$ plus $4$ for $FCC$ by $1$ over $8$ plus $1$ over $2$ plus $1$ sharing.',
      '$a = 2r$ plus $a = 4r$ over $\\sqrt{3}$ plus $a = 2\\sqrt{2}r$ from edge plus body plus face touch.',
      'Packing $0.52$ plus $0.68$ plus $0.74$ from $Z$ times $4$ over $3$ $\\pi r^{3}$ over $a^{3}$.',
      'Coordination $6$ plus $8$ plus $12$ with $ABAB$ $HCP$ versus $ABCABC$ $CCP$ both $0.74$.'
    ],
    quiz: [
      {
        q: 'Atoms per $FCC$ cell are:',
        options: ['$4$ with $0.74$ fraction', '$1$ with $0.52$ fraction', '$2$ with $0.68$ fraction', '$6$ with $0.90$ fraction'],
        answer: 0,
        explanation: 'Step 1: Count $8$ corners times $1$ over $8$ giving $1$. Step 2: Add $6$ faces times $1$ over $2$ giving $3$. Step 3: Total $1$ plus $3$ equals $4$ with $0.74$ fraction.'
      },
      // PYQ-pattern: packing fraction ladder drill
      {
        q: 'Packing order $SC$ plus $BCC$ plus $FCC$ is:',
        options: ['$0.74$ plus $0.68$ plus $0.52$', '$0.68$ for all three', '$0.52$ plus $0.68$ plus $0.74$', 'Zero for all'],
        answer: 2,
        explanation: 'Step 1: Compute $SC$ as $\\pi$ over $6$ near $0.52$. Step 2: Compute $BCC$ as $\\sqrt{3}\\pi$ over $8$ near $0.68$. Step 3: Compute $FCC$ as $\\sqrt{2}\\pi$ over $6$ near $0.74$.'
      },
      {
        q: '$BCC$ edge in terms of $r$ is:',
        options: ['$2r$', '$a = 4r$ over $\\sqrt{3}$', '$2\\sqrt{2}r$', '$8r$'],
        answer: 1,
        explanation: 'Step 1: Draw body diagonal with $4r$ length. Step 2: Relate diagonal to $\\sqrt{3}a$. Step 3: Solve $a = 4r$ over $\\sqrt{3}$ near $2.31r$.'
      },
      {
        q: 'Closest packing coordination is:',
        options: ['$6$', '$8$', '$4$', '$12$ with $0.74$ fraction'],
        answer: 3,
        explanation: 'Step 1: Count $6$ in plane neighbours. Step 2: Add $3$ above plus $3$ below. Step 3: Total $12$ with $0.74$ fraction for $HCP$ plus $CCP$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 33.2
  {
    sectionId: 'chem-ch33-s2',
    depth: [
      {
        tier: 'masters',
        title: 'Bragg diffraction and density inversion for structure proof',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Bragg law plus density as a two equation structure proof',
            body: 'Read diffraction angles into spacings with $n\\lambda = 2d\\sin\\theta$ where order $n$ is integral and $\\theta$ is the glancing angle, then convert spacings to cell edge by Miller index geometry. Combine with $\\rho = \\frac{ZM}{N_Aa^3}$ to solve for $Z$ or Avogadro number from measured density and edge length. Agreement of integral $Z$ with $1$ or $2$ or $4$ confirms the cubic assignment, while mismatch flags noncubic symmetry or vacancies that graduate analysis must then model.'
          },
          {
            kind: 'theorem',
            heading: 'Radius ratio rules choose coordination number',
            body: 'The **radius ratio theorem** assigns coordination from $r_c/r_a$ with tetrahedral near $0.225$, octahedral near $0.414$, and cubic near $0.732$ as geometric thresholds. Small cations rattle in large holes below the limit and force lower coordination, while large cations prop open higher coordination polyhedra. Real structures blur the lines with polarization, but the ratios still prune candidate lattices before full refinement.'
          },
          {
            kind: 'application',
            heading: 'Powder patterns that catch vacancies and alloys',
            body: 'Rietveld refinement fits whole powder patterns to lattice plus occupancy models, turning missing intensity into vacancy counts and shifted peaks into alloy compositions. Semiconductor fabs monitor epitaxial strain from peak splits at arcsecond resolution, and battery research tracks lithium insertion by cell expansion in operando cells. The graduate lesson is that two equations plus one pattern solve structures that wet chemistry cannot touch.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'Diffraction turns angles into spacings while cell geometry turns spacings into density. Bragg law $n\\lambda = 2d \\cdot \\sin\\theta$ links wavelength plus plane spacing plus glancing angle. This section applies Bragg arithmetic plus $\\rho = ZM$ over $N_{A}a^{3}$ plus radius ratio rules for coordination choice.',
    objectives: [
      'Apply $n\\lambda = 2d \\cdot \\sin\\theta$ to get $d$ plus $\\lambda$ plus order $n$ from angles',
      'Compute density $\\rho = ZM$ over $N_{A}a^{3}$ and invert to $a$ plus $N_{A}$',
      'Use radius ratio $r_{plus}$ over $r_{minus}$ to assign $4$ plus $6$ plus $8$ coordination'
    ],
    concepts: [
      {
        term: 'Bragg diffraction condition',
        kind: 'law',
        statement: 'A **path difference of whole wavelengths gives reflection** `bragg` $n\\lambda = 2d \\cdot \\sin\\theta$ with $n = 1$ plus $2$ plus $3$ orders and $\\theta$ glancing angle.',
        detail: 'Adjacent planes add $AB$ plus $BC$ equals $2d\\sin\\theta$ as Atkins mirror stack shows. Mahan $n\\lambda = 2d\\sin\\theta$ with $d$ near $10$ to $minus$ $8$ cm matches $X$ ray $\\lambda$ near $10$ to $minus$ $8$ cm for strong patterns.'
      },
      {
        term: 'Interplanar spacing use',
        kind: 'method',
        statement: 'A **Miller indices plus cell edge give plane spacing** `spacing` $d_{hkl} = a$ over $\\sqrt{h^{2} + k^{2} + l^{2}}$ for cubic $a$ plus $hkl$.',
        detail: 'Atkins $d_{123} = 0.21$ nm for $a = 0.82$ nm plus $b = 0.94$ nm plus $c = 0.75$ nm shows orthorhombic use. Doubling to $246$ halves $d$ to $0.11$ nm since $d$ scales as $1$ over $n$.'
      },
      {
        term: 'Density from cell content',
        kind: 'theorem',
        statement: 'A **mass of cell over volume of cell gives crystal density** `density` $\\rho = ZM$ over $N_{A}a^{3}$ with $Z$ atoms plus $M$ molar mass plus $a^{3}$ cell volume.',
        detail: '$NaCl$ with $Z = 4$ plus $M = 58.44$ g over mol plus $a = 564$ pm gives $\\rho$ near $2.16$ g per $cm^{3}$. Inverting gives $N_{A}$ from $\\rho$ plus $a$ plus $M$ as Mahan mole cube problem shows.'
      },
      {
        term: 'Radius ratio coordination',
        kind: 'definition',
        statement: 'A **small over large radius picks coordination geometry** `radius-ratio` $0.225$ to $0.414$ tetrahedral $4$ plus $0.414$ to $0.732$ octahedral $6$ plus $0.732$ to $1.0$ cubic $8$.',
        detail: 'Mahan Table with $0.155$ to $0.225$ triangular $3$ plus $0.225$ to $0.414$ tetrahedral plus octahedral hole limit $0.414$ from $\\sqrt{2}$ minus $1$ geometry. $NaCl$ near $0.52$ sits octahedral while $CsCl$ near $0.93$ sits cubic $8$ coordinated.'
      },
      {
        term: 'Order and fingerprint reading',
        kind: 'insight',
        statement: 'A **higher order plus powder lines fingerprint phases** `orders` $n = 2$ second order at larger $\\theta$ with powder rings for calcite versus aragonite $CaCO_{3}$.',
        detail: 'Atkins powder diffractometer rotates detector to catch random crystallites while single crystal four circle method tracks each $hkl$. Mahan CdO versus Cd metal test shows mixture lines prove no $Cd_{2}O$ compound.'
      }
    ],
    figures: [
      {
        caption: 'Bragg $n\\lambda = 2d \\cdot \\sin\\theta$ with path $2d\\sin\\theta$ plus density $\\rho = ZM$ over $N_{A}a^{3}$ plus ratio windows.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bragg planes density and radius ratio" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">planes spacing d</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">path 2d sin theta</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">n lambda is 2d sin</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">orders 1 2 3 angles</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">rho ZM over NA a3</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">ratio picks CN</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">0.225 tetra 4</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">0.414 octa 6 to 0.732 cubic 8</text></svg>`,
        afterConcept: 1
      }
    ],
    derivations: [
      {
        title: 'Bragg Law from Interplanar Path Difference',
        statement: 'Derivation of $n\\lambda = 2d\\sin\\theta$ for constructive reflection from planes spaced by $d$',
        prerequisites: [
          'Plane spacing $d$ and glancing angle $\\theta$ geometry',
          'Wavelength $\\lambda$ and integral order $n$',
          'Constructive interference for in phase waves'
        ],
        steps: [
          {
            label: 'Step 1: Trace rays reflecting from adjacent planes',
            formula: '$$\\Delta = AB + BC$$',
            explanation: 'One ray reflects from the upper plane while a parallel ray penetrates and reflects from the next plane below. The lower ray travels extra segments $AB$ before and $BC$ after reflection. Total excess $\\Delta$ decides whether the two emergent waves reinforce or cancel.'
          },
          {
            label: 'Step 2: Project the excess onto plane geometry',
            formula: '$$AB = d\\sin\\theta \\quad BC = d\\sin\\theta$$',
            explanation: 'Each extra segment is the opposite side of a right triangle with hypotenuse $d$ and angle $\\theta$ at the plane. Glancing angle $\\theta$ is used rather than incidence from the normal, which fixes the sine dependence. Symmetry gives equal contributions before and after the reflection point.'
          },
          {
            label: 'Step 3: Sum to the total path difference',
            formula: '$$\\Delta = 2d\\sin\\theta$$',
            explanation: 'Adding the two equal projections doubles the single leg result. This expression depends only on spacing $d$ and direction $\\theta$, not on where along the plane reflection occurs. Uniformity across the crystal is what lets whole planes act as cooperative mirrors.'
          },
          {
            label: 'Step 4: Impose constructive reinforcement condition',
            formula: '$$n\\lambda = 2d\\sin\\theta$$',
            explanation: 'Reinforcement requires the excess to equal an integral number $n$ of wavelengths so crests meet crests. Nonintegral excess shifts phases and washes intensity out over many planes. Measuring $\\theta$ for known $\\lambda$ therefore inverts directly to spacing $d$ and cell edge.'
          }
        ],
        result: 'Bragg $n\\lambda = 2d\\sin\\theta$ converts measured $\\theta$ at known $\\lambda$ into spacing $d$, with integral $n$ marking first and higher orders.'
      }
    ],
    examples: [
      {
        title: 'Bragg spacing from first order',
        problem: '$NaCl$ face planes give first order $n = 1$ at $\\theta = 5$ degrees $58$ minutes with $\\lambda = 58.6$ pm. Find $d$ plus nearest $Na$ to $Cl$ distance.',
        steps: [
          { label: 'Step 1', text: 'Write Bragg law:\n```text\nn lambda = 2 d sin theta\nn = 1, lambda = 58.6 pm\ntheta = 5 deg 58 min = 5.97 deg\nsin theta near 0.104\n```\nGlancing angle $\\theta$ uses $\\sin\\theta$ near $0.104$ for $5.97$ degrees.' },
          { label: 'Step 2', text: 'Solve $d = n\\lambda$ over $2\\sin\\theta$ as $58.6$ pm over $0.208$ giving $d$ near $282$ pm for face planes.' },
          { label: 'Step 3', text: 'Halve for rock salt alternation: nearest $Na$ to $Cl$ near $282$ pm with $Cl$ to $Cl$ near $398$ pm from face diagonal.' }
        ],
        result: 'Spacing near $282$ pm with $Na$ to $Cl$ near $282$ pm from $n\\lambda = 2d \\cdot \\sin\\theta$.'
      },
      {
        title: 'Density from FCC cell edge',
        problem: 'Copper $FCC$ has $a = 361$ pm with $M = 63.5$ g over mol plus $Z = 4$. Compute $\\rho$ plus largest interstitial atom.',
        steps: [
          { label: 'Step 1', text: 'Convert $a = 361$ pm to $3.61$ times $10$ to $minus$ $8$ cm so $a^{3}$ near $47.0$ times $10$ to $minus$ $24$ $cm^{3}$.' },
          { label: 'Step 2', text: 'Mass per cell $4$ times $63.5$ over $6.022$ times $10$ to $23$ giving $4.22$ times $10$ to $minus$ $22$ g.' },
          { label: 'Step 3', text: 'Divide to $\\rho$ near $8.97$ g per $cm^{3}$ with octahedral hole limit $0.414$ times $128$ pm near $53$ pm for largest fit.' }
        ],
        result: 'Density near $8.97$ g per $cm^{3}$ with octahedral fit near $53$ pm.'
      }
    ],
    keyTakeaways: [
      '$n\\lambda = 2d \\cdot \\sin\\theta$ with $\\theta$ glancing plus $n = 1$ plus $2$ plus $3$ orders.',
      '$d_{hkl} = a$ over $\\sqrt{h^{2} + k^{2} + l^{2}}$ for cubic with $d$ halved on doubling $hkl$.',
      '$\\rho = ZM$ over $N_{A}a^{3}$ gives $2.16$ g per $cm^{3}$ for $NaCl$ with $a = 564$ pm.',
      'Ratio $0.225$ to $0.414$ plus $0.414$ to $0.732$ plus $0.732$ to $1.0$ picks $4$ plus $6$ plus $8$.'
    ],
    quiz: [
      {
        q: 'Bragg law is:',
        options: ['$n + \\lambda = d + \\theta$', '$n\\lambda = 2d \\cdot \\sin\\theta$', '$\\lambda = d$ always', '$\\theta = 90$ degrees always'],
        answer: 1,
        explanation: 'Step 1: Sum extra path $AB$ plus $BC$. Step 2: Each equals $d\\sin\\theta$ giving $2d\\sin\\theta$. Step 3: Set equal to $n\\lambda$ with $n = 1$ plus $2$ plus $3$.'
      },
      {
        q: '$NaCl$ $\\lambda = 58.6$ pm at $5.97$ degrees gives $d$ near:',
        options: ['$28$ pm', '$2820$ pm', '$282$ pm', '$28$ nm'],
        answer: 2,
        explanation: 'Step 1: Take $\\sin\\theta$ near $0.104$. Step 2: Double to $0.208$. Step 3: Divide $58.6$ pm by $0.208$ giving $282$ pm.'
      },
      // PYQ-pattern: density from cell edge drill
      {
        q: 'Density formula is:',
        options: ['$\\rho = ZM$ over $N_{A}a^{3}$', '$\\rho = a^{3}$ over $ZM$', '$\\rho = Z$ plus $M$', '$\\rho = 0$ always'],
        answer: 0,
        explanation: 'Step 1: Mass per cell $ZM$ over $N_{A}$. Step 2: Volume $a^{3}$ with $a = 361$ pm for $Cu$. Step 3: Divide to $8.97$ g per $cm^{3}$ with $Z = 4$.'
      },
      {
        q: 'Ratio $0.52$ predicts:',
        options: ['Tetrahedral $4$', 'Linear $2$', 'Cubic $12$', 'Octahedral $6$ rock salt type'],
        answer: 3,
        explanation: 'Step 1: Place $0.52$ in $0.414$ to $0.732$ window. Step 2: Assign octahedral $6$ coordination. Step 3: Match $NaCl$ $6$ plus $6$ structure.'
      }
    ]
  },
  // ---------------------------------------------------------------- 33.3
  {
    sectionId: 'chem-ch33-s3',
    readingTime: 10,
    intro: 'Ionic lattices balance Coulomb attraction against overlap repulsion with structure set by size plus charge. Rock salt plus zinc blende plus fluorite cover $6$ plus $6$ plus $4$ plus $4$ plus $8$ plus $4$ coordination families. This section maps structure types plus Born Haber cycles plus Kapustinskii estimation.',
    objectives: [
      'Assign rock salt $6$ plus $6$ plus zinc blende $4$ plus $4$ plus fluorite $8$ plus $4$ from hole filling',
      'Close Born Haber cycle to $\\Delta H_{L}$ from sublimation plus dissociation plus ionisation plus electron gain',
      'Estimate trend by $|z_{plus}z_{minus}|$ over $d$ with Madelung $A$ plus Kapustinskii preview'
    ],
    concepts: [
      {
        term: 'Rock salt octahedral filling',
        kind: 'definition',
        statement: 'A **all octahedral holes filled gives rock salt** `rock-salt` $Cl$ $CCP$ with $Na$ in all octahedral sites giving $6$ plus $6$ coordination.',
        detail: 'One octahedral site per $Cl$ matches $1$ to $1$ stoichiometry as Mahan expanded $CCP$ shows. $LiCl$ plus $KBr$ plus $MgO$ plus $CaS$ share this type with $A = 1.748$ Madelung constant.'
      },
      {
        term: 'Zinc blende versus fluorite',
        kind: 'theorem',
        statement: 'A **half tetrahedra gives zinc blende while all gives fluorite** `tetra-fill` $ZnS$ half tetra $4$ plus $4$ versus $CaF_{2}$ all tetra $8$ plus $4$.',
        detail: 'Two tetra sites per $S$ with half filled matches $1$ to $1$ $ZnS$ with small $Zn$ in $0.225$ to $0.414$ window. All tetra filled doubles anions for $CaF_{2}$ with $Ca$ $8$ coordinated and $F$ $4$ coordinated.'
      },
      {
        term: 'Born Haber lattice enthalpy',
        kind: 'method',
        statement: 'A **closed loop isolates lattice enthalpy** `born-haber` $\\Delta H_{L}$ from $KCl$ near $717$ $kJ$ over mol plus $MgO$ near $3850$ $kJ$ over mol.',
        detail: 'Sum sublimation $89$ plus dissociation $122$ plus ionisation $418$ plus electron gain minus $349$ plus formation minus $437$ to zero for $KCl$. High $MgO$ reflects $|z_{plus}z_{minus}| = 4$ over $212$ pm $d$ versus $1$ over $314$ pm for $KCl$.'
      },
      {
        term: 'Born Mayer trend reading',
        kind: 'law',
        statement: 'A **charge product over distance sets lattice energy** `lattice-trend` $E$ proportional to $A|z_{plus}z_{minus}|$ over $d$ times $1$ minus $d_{star}$ over $d$.',
        detail: 'Atkins $A = 1.748$ rock salt plus $1.638$ blende plus $2.519$ fluorite weights Coulomb sum. Small $Mg$ $72$ pm plus $O$ $140$ pm gives $d = 212$ pm with $E$ near $3840$ $kJ$ over mol matching Born Haber $3850$ $kJ$ over mol.'
      },
      {
        term: 'Kapustinskii estimation idea',
        kind: 'insight',
        statement: 'A **radius sum alone estimates unknown structures** `kapustinskii` $U$ from $|z_{plus}z_{minus}|$ over $r_{plus} + r_{minus}$ when $A$ unknown.',
        detail: 'Useful when Madelung $A$ unavailable for complex salts with polyatomic ions like $NH_{4}Cl$ rock salt type. Retains $1$ over $d$ plus charge product logic with fitted constants to $kJ$ over mol scale.'
      }
    ],
    figures: [
      {
        caption: 'Rock salt $6$ plus $6$ plus blende $4$ plus $4$ plus fluorite $8$ plus $4$ with $\\Delta H_{L}$ $717$ plus $3850$ $kJ$ over mol.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ionic structures and lattice enthalpy" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">rock salt 6 6</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">octa all filled</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">blende 4 4 half</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">tetra half filled</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">fluorite 8 4 all</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">Born Haber loop</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">KCl 717, MgO 3850</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">E with A over d times charge product</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'KCl lattice enthalpy from cycle',
        problem: 'Given sublimation $89$ plus dissociation $122$ plus ionisation $418$ plus electron gain minus $349$ plus formation minus $437$ all $kJ$ over mol, find $\\Delta H_{L}$ for $KCl$.',
        steps: [
          { label: 'Step 1', text: 'Draw loop:\n```text\nK(s) -> K(g) +89\nCl2 half -> Cl +122\nK(g) -> K+ +418\nCl + e -> Cl- -349\nK+ + Cl- -> KCl -DH_L\nKCl -> K + half Cl2 +437\nsum = 0\n```\nBorn Haber $Fig$ for $KCl$ at $298$ K closes to zero.' },
          { label: 'Step 2', text: 'Sum knowns $89$ plus $122$ plus $418$ minus $349$ plus $437$ equals $717$ $kJ$ over mol.' },
          { label: 'Step 3', text: 'Set $717$ minus $\\Delta H_{L} = 0$ so $\\Delta H_{L} = 717$ $kJ$ over mol for $K$ plus $Cl$ gas to solid.' }
        ],
        result: 'Lattice enthalpy $717$ $kJ$ over mol for $KCl$ rock salt type.'
      },
      {
        title: 'MgO versus NaCl trend call',
        problem: '$MgO$ $d = 212$ pm with $|z_{plus}z_{minus}| = 4$ versus $NaCl$ $d = 281$ pm with product $1$. Compare $\\Delta H_{L}$ values $3850$ versus $787$ $kJ$ over mol.',
        steps: [
          { label: 'Step 1', text: 'Form ratio $4$ over $212$ versus $1$ over $281$ giving $0.0189$ versus $0.00356$ per pm, factor near $5.3$.' },
          { label: 'Step 2', text: 'Multiply by $A = 1.748$ common rock salt plus $1$ minus $d_{star}$ over $d$ with $d_{star} = 34.5$ pm correction.' },
          { label: 'Step 3', text: 'Predict $MgO$ near $5$ times $NaCl$ matching $3850$ over $787$ near $4.9$ observed.' }
        ],
        result: 'Charge quadruples plus short $d$ lifts $MgO$ to $3850$ $kJ$ over mol.'
      }
    ],
    keyTakeaways: [
      'Rock salt fills all octa $6$ plus $6$ with $A = 1.748$ for $NaCl$ plus $MgO$.',
      'Blende fills half tetra $4$ plus $4$ while fluorite fills all tetra $8$ plus $4$.',
      '$KCl$ $717$ $kJ$ over mol plus $MgO$ $3850$ $kJ$ over mol from closed Born Haber sums.',
      '$E$ with $A|z_{plus}z_{minus}|$ over $d$ explains charge plus size trend with Kapustinskii estimate.'
    ],
    quiz: [
      {
        q: 'Rock salt coordination is:',
        options: ['$4$ plus $4$', '$8$ plus $4$', '$6$ plus $6$ octahedral', '$12$ plus $12$'],
        answer: 2,
        explanation: 'Step 1: Place $Cl$ as $CCP$. Step 2: Fill all $1$ octa site per $Cl$. Step 3: Get $6$ plus $6$ with $A = 1.748$.'
      },
      // PYQ-pattern: hole filling stoichiometry drill
      {
        q: 'Zinc blende uses:',
        options: ['All octa sites', 'Half tetra sites $4$ plus $4$', 'All tetra sites', 'No holes'],
        answer: 1,
        explanation: 'Step 1: Count $2$ tetra per $S$. Step 2: Fill $1$ over $2$ for $1$ to $1$ $ZnS$. Step 3: Get $4$ plus $4$ with small cation in $0.225$ to $0.414$.'
      },
      {
        q: '$KCl$ $\\Delta H_{L}$ is:',
        options: ['$717$ $kJ$ over mol', '$89$ $kJ$ over mol', '$122$ $kJ$ over mol', '$0$ $kJ$ over mol'],
        answer: 0,
        explanation: 'Step 1: Sum $89$ plus $122$ plus $418$ giving $629$. Step 2: Add minus $349$ plus $437$ giving $717$. Step 3: Set $\\Delta H_{L} = 717$ $kJ$ over mol.'
      },
      {
        q: '$MgO$ high value comes from:',
        options: ['Large $d$ only', 'Zero charge', 'No Madelung effect', '$|z_{plus}z_{minus}| = 4$ over $212$ pm'],
        answer: 3,
        explanation: 'Step 1: Note $Mg$ $2$ plus plus $O$ $2$ minus product $4$. Step 2: Note short $d = 212$ pm. Step 3: Combine to $3850$ $kJ$ over mol near $5$ times $NaCl$.'
      }
    ]
  },
  // ---------------------------------------------------------------- 33.4
  {
    sectionId: 'chem-ch33-s4',
    readingTime: 8,
    intro: 'Real crystals carry vacancies plus interstitials plus substitutions that control colour plus conduction plus density. Schottky plus Frenkel preserve neutrality with distinct density signatures. This section classifies point defects plus $F$ centres plus nonstoichiometry with $NiO$ plus $AgCl$ logic.',
    objectives: [
      'Distinguish Schottky pair vacancies versus Frenkel vacancy plus interstitial with density test',
      'Explain $F$ centre colour plus $Ni$ $3$ plus conduction in $Ni_{0.97}O$ plus $Li$ doped $NiO$',
      'Predict $AgCl$ Frenkel versus $NaCl$ Schottky from small cation plus open fluorite logic'
    ],
    concepts: [
      {
        term: 'Schottky paired vacancies',
        kind: 'definition',
        statement: 'A **paired cation plus anion vacancies keep neutrality** `schottky` Schottky pair lowers density with $10$ to $minus$ $3$ fraction example.',
        detail: 'Mahan $NaCl$ with $10$ to $minus$ $3$ Schottky fraction loses mass without volume change so $2.165$ g per $cm^{3}$ falls measurably. Requires comparable cation plus anion sizes as in alkali halides.'
      },
      {
        term: 'Frenkel vacancy interstitial',
        kind: 'theorem',
        statement: 'A **ion shift to interstitial keeps mass in crystal** `frenkel` Frenkel defect keeps density with small $Ag$ plus open $CaF_{2}$ favour.',
        detail: 'Large anions plus small cations as in $AgCl$ plus $AgBr$ lower interstitial cost. Fluorite open type with large holes also favours Frenkel with no density fall unlike Schottky.'
      },
      {
        term: 'F centre colour mechanism',
        kind: 'law',
        statement: 'A **electron trapped at anion vacancy absorbs visible light** `f-centre` $F$ centre from German Farbe colours $NaCl$ yellow plus $KCl$ violet.',
        detail: 'Anion vacancy leaves excess positive charge that binds electron like particle in box. Excitation across visible gap gives colour to otherwise colourless crystal with stoichiometric excess metal.'
      },
      {
        term: 'Nonstoichiometric conduction',
        kind: 'method',
        statement: 'A **cation vacancies plus higher valent ions carry charge** `nonstoichio` $Ni_{0.97}O$ with $Ni$ $3$ plus conducts by electron hopping.',
        detail: 'Low temperature $NiO$ pale green insulator $Ni_{1.0}O_{1.0}$ versus oxygen excess black $Ni_{0.97}O_{1.0}$ semiconductor. Each vacancy balanced by $2$ $Ni$ $3$ plus allowing $Ni$ $2$ to $Ni$ $3$ electron jumps through lattice.'
      },
      {
        term: 'Doping and line defects preview',
        kind: 'insight',
        statement: 'A **aliovalent doping plus dislocations tune strength** `doping` $Li_{2}O$ in $NiO$ adds $Ni$ $3$ plus while edge dislocations ease shear.',
        detail: '$Li$ $1$ plus at $Ni$ $2$ plus site forces $Ni$ $3$ plus for neutrality boosting conduction beyond nonstoichiometric $NiO$. Edge extra half plane lets rows move one at a time cutting shear from $10$ to $5$ psi scale to $10$ to $3$ observed.'
      }
    ],
    figures: [
      {
        caption: 'Schottky pair lowers $\\rho$ while Frenkel keeps $\\rho$ with $F$ centre plus $Ni_{0.97}O$ conduction paths.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Schottky Frenkel F centre and nonstoichiometry" font-family="sans-serif"><rect x="40" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="130" y="140" text-anchor="middle" font-size="13" fill="currentColor">Schottky pair out</text><text x="130" y="160" text-anchor="middle" font-size="12" fill="currentColor">density falls</text><rect x="270" y="110" width="180" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="360" y="140" text-anchor="middle" font-size="13" fill="currentColor">Frenkel shift in</text><text x="360" y="160" text-anchor="middle" font-size="12" fill="currentColor">density same</text><text x="360" y="178" text-anchor="middle" font-size="12" fill="currentColor">Ag small, open</text><rect x="500" y="110" width="170" height="90" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="585" y="140" text-anchor="middle" font-size="13" fill="currentColor">F plus Ni 0.97 O</text><text x="585" y="160" text-anchor="middle" font-size="12" fill="currentColor">colour, hopping</text><line x1="220" y1="155" x2="270" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="270,155 260,150 260,160" fill="currentColor"/><line x1="450" y1="155" x2="500" y2="155" stroke="currentColor" stroke-width="2"/><polygon points="500,155 490,150 490,160" fill="currentColor"/><text x="360" y="260" text-anchor="middle" font-size="12" fill="currentColor">Li doping adds Ni 3 plus, dislocations ease slip</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Density change for defect fractions',
        problem: '$NaCl$ ideal $2.165$ g per $cm^{3}$ has $10$ to $minus$ $3$ fraction of Schottky versus Frenkel defects. Find new density in each case.',
        steps: [
          { label: 'Step 1', text: 'Recall rule:\n```text\nSchottky removes mass, volume same -> rho falls\nFrenkel shifts mass inside -> rho same\nfraction = 1 over 1000 sites\n```\nMahan volume unchanged approximation for both defect types.' },
          { label: 'Step 2', text: 'Schottky $2.165$ times $1$ minus $0.001$ near $2.163$ g per $cm^{3}$ fall of $0.002$ g per $cm^{3}$ for paired vacancies.' },
          { label: 'Step 3', text: 'Frenkel stays $2.165$ g per $cm^{3}$ since ion moves to interstitial without mass loss.' }
        ],
        result: 'Schottky near $2.163$ g per $cm^{3}$ while Frenkel stays $2.165$ g per $cm^{3}$.'
      },
      {
        title: 'Copper ratio in deficient sulfide',
        problem: 'Cuprous sulfide analyses as $Cu_{1.92}S$ from $Cu$ $2$ plus incorporation. Find ratio of $Cu$ $2$ plus to $Cu$ $1$ plus.',
        steps: [
          { label: 'Step 1', text: 'Let $x$ be $Cu$ $2$ plus count plus $y$ be $Cu$ $1$ plus count with $x + y = 1.92$ and charge $2x + y = 2$ for $S$ $2$ minus.' },
          { label: 'Step 2', text: 'Subtract to $x = 0.08$ so $y = 1.84$ from $1.92$ minus $0.08$.' },
          { label: 'Step 3', text: 'Ratio $x$ over $y$ near $0.043$ so about $4.3$ percent $Cu$ $2$ plus balances deficiency.' }
        ],
        result: 'Ratio $Cu$ $2$ plus over $Cu$ $1$ plus near $0.043$ with $0.08$ $Cu$ $2$ plus per formula.'
      }
    ],
    keyTakeaways: [
      'Schottky paired vacancies lower $\\rho$ while Frenkel shift keeps $\\rho$ with $10$ to $minus$ $3$ test.',
      '$F$ centre electron at anion vacancy colours alkali halides by visible absorption.',
      '$Ni_{0.97}O$ conducts by $Ni$ $3$ plus hopping with $Li$ doping adding more $Ni$ $3$ plus.',
      'Small $Ag$ plus open fluorite favour Frenkel while matched sizes favour Schottky.'
    ],
    quiz: [
      {
        q: 'Schottky defect is:',
        options: ['Single interstitial only', 'No vacancies', 'Paired cation plus anion vacancies lowering density', 'Only line defect'],
        answer: 2,
        explanation: 'Step 1: Remove $1$ cation plus $1$ anion. Step 2: Keep neutrality with mass loss. Step 3: Lower $2.165$ to $2.163$ g per $cm^{3}$ at $10$ to $minus$ $3$ fraction.'
      },
      // PYQ-pattern: Schottky versus Frenkel density drill
      {
        q: 'Frenkel defect keeps density because:',
        options: ['Mass leaves crystal', 'Ion moves to interstitial inside crystal', 'No ion moves', 'Crystal melts'],
        answer: 1,
        explanation: 'Step 1: Vacate lattice site. Step 2: Place same ion in interstitial. Step 3: Keep mass plus volume so $2.165$ g per $cm^{3}$ unchanged.'
      },
      {
        q: '$F$ centre colours by:',
        options: ['$F$ centre electron at anion vacancy absorbing visible', 'Perfect lattice only', 'No electrons', 'Melting only'],
        answer: 0,
        explanation: 'Step 1: Create anion vacancy with positive excess. Step 2: Trap electron at vacancy. Step 3: Absorb visible near $2$ to $3$ eV giving yellow plus violet.'
      },
      {
        q: '$Cu_{1.92}S$ has $Cu$ $2$ plus count:',
        options: ['$1.92$', '$0.0$', '$1.84$', '$0.08$ with ratio near $0.043$'],
        answer: 3,
        explanation: 'Step 1: Write $x + y = 1.92$. Step 2: Write $2x + y = 2$. Step 3: Solve $x = 0.08$ with ratio $0.08$ over $1.84$ near $0.043$.'
      }
    ]
  }
]
