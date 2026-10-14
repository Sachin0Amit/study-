import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 21
// Coulomb's Law — sections 21-1 … 21-3 (ids hall-ch21-s1 … hall-ch21-s3)
// Constants: k = 1/4πε₀ = 8.99×10⁹ N·m²/C², e = 1.602×10⁻¹⁹ C,
// ε₀ = 8.85×10⁻¹² C²/N·m².
// ============================================================================

export const hallCh21Content: SectionContent[] = [
  // ------------------------------------------------------------------ 21-1
  {
    sectionId: 'hall-ch21-s1',
    readingTime: 7,
    intro: "In 1785 Charles-Augustin de Coulomb, with the torsion balance he had invented for measuring feeble forces, established the law that turned electrostatics from a parlor of rubbed amber and pith balls into a quantitative science: the electric force between two charged particles is proportional to each charge and falls off as the square of their separation. It is the same inverse-square form Newton had postulated for gravity a century earlier. This section states the law precisely, writes it as a vector equation, checks its size against gravity, and uses superposition to handle more than two charges.",
    objectives: [
      "State Coulomb's law in scalar and vector form and evaluate forces with $k = 1/4\\pi\\varepsilon_0 = 8.99\\times 10^{9}\\ \\mathrm{N\\cdot m^2/C^2}$",
      "Apply superposition to find the net electric force on one charge due to several others",
      "Explain why charged spherical conductors act on external charges as point charges, and compare electric and gravitational forces",
    ],
    concepts: [
      {
        term: "Coulomb's law",
        kind: 'law',
        statement: "**The electric force between two charged particles is proportional to the product of the charges and inversely proportional to the square of their separation.** For point charges (or uniformly charged spheres) a distance $r$ apart, center to center, $$F = k\\,\\frac{|q_1||q_2|}{r^2},\\qquad k = \\frac{1}{4\\pi\\varepsilon_0} = 8.99\\times 10^{9}\\ \\mathrm{N\\cdot m^2/C^2},$$ with charge measured in coulombs. Like charges repel; unlike charges attract.",
        detail: "The law holds for charged particles at rest (electrostatics). HRW writes the vector form on particle 1 from particle 2 as $\\vec F_{21} = k\\,q_2 q_1\\,\\hat r_{21}/r^2$, where the unit vector $\\hat r_{21}$ points along the line joining the two charges, from the charge that acts toward the charge acted upon; the sign of the product $q_2 q_1$ then automatically gives the correct sense (push for like, pull for unlike).",
      },
      {
        term: 'A Newton\u2019s-third-law pair',
        kind: 'insight',
        statement: "**The two charges exert equal and opposite forces on each other, no matter how unequal the charges are.** $\\vec F_{21} = -\\vec F_{12}$: a tiny charge and a huge charge pull on each other with exactly the same magnitude $k|q_1||q_2|/r^2$.",
        detail: 'This is the electrical twin of the third law you used for gravity and contact forces, and it is the reason a system of charges cannot accelerate its own center of mass.',
      },
      {
        term: 'Spherical conductors count as points',
        kind: 'insight',
        statement: "**A charged spherical conductor (or a uniform spherical shell of charge) acts on external charges exactly as if all its charge were concentrated at its center.** Coulomb measured this with his balance and it is proved in Chapter 23 with Gauss\u2019 law \u2014 the electric shell theorem.",
        detail: 'For non-spherical or non-uniform bodies the law still holds for each tiny charge element, and the total force follows by vector superposition.',
      },
      {
        term: 'Electric versus gravitational force',
        kind: 'insight',
        statement: '**Both fundamental forces are inverse-square, but their strengths differ by almost forty orders of magnitude.** For the proton\u2013electron pair in hydrogen, $F_e/F_g \\approx 2.3\\times 10^{39}$. Charge comes in two signs (so matter can be neutral); mass comes in one sign (so gravity always attracts and never cancels).',
      },
      {
        term: "Coulomb's Law: solution protocol",
        kind: "method",
        statement: "**Solve Coulomb's Law problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Coulomb's law with quantized, conserved charge; the working equation is $F = k|q_1q_2|/r^2$, $k = 8.99\\times 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$, $e = 1.60\\times 10^{-19}\\ \\text{C}$; every substitution must carry its units so the final unit (coulombs and newtons) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $F\\sim 1\\ \\text{N}$ for $\\mu\\text{C}$ at cm; $1\\ \\text{C} \\approx 6\\times 10^{18}e$; point charges at rest; $q = ne$.",
      },
    ],
    figures: [
      {
        caption: "Coulomb's law as a vector pair. Here the charges have unlike signs, so each particle is pulled toward the other along the line joining them, with equal magnitudes $F = k|q_1||q_2|/r^2$. Reverse either sign and both arrows flip outward \u2014 repulsion.",
        svg: `<svg viewBox="0 0 720 250" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coulomb force vector diagram between two unlike charges"><defs><marker id="cfA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><line x1="210" y1="120" x2="510" y2="120" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 7" opacity="0.5"/><circle cx="180" cy="120" r="30" fill="currentColor" fill-opacity="0.16" stroke="currentColor" stroke-width="2.5"/><circle cx="540" cy="120" r="30" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="180" y="127" text-anchor="middle" font-size="19" fill="currentColor">+q₁</text><text x="540" y="127" text-anchor="middle" font-size="19" fill="currentColor">−q₂</text><line x1="185" y1="62" x2="335" y2="62" stroke="currentColor" stroke-width="3" marker-end="url(#cfA)"/><text x="258" y="48" text-anchor="middle" font-size="16" fill="currentColor">F on q₁ (toward q₂)</text><line x1="535" y1="62" x2="385" y2="62" stroke="currentColor" stroke-width="3" marker-end="url(#cfA)"/><text x="462" y="48" text-anchor="middle" font-size="16" fill="currentColor">F on q₂ (toward q₁)</text><line x1="345" y1="112" x2="345" y2="128" stroke="currentColor" stroke-width="1.5" opacity="0.7"/><line x1="375" y1="112" x2="375" y2="128" stroke="currentColor" stroke-width="1.5" opacity="0.7"/><text x="360" y="163" text-anchor="middle" font-size="17" fill="currentColor">r</text><text x="360" y="205" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.85">|F on q₁| = |F on q₂| — Newton's third law</text><text x="360" y="230" text-anchor="middle" font-size="15" fill="currentColor" opacity="0.85">magnitude F = k|q₁||q₂|/r²; here attractive (unlike signs)</text></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Electron and proton in hydrogen: electric vs gravitational force',
        problem: "In the Bohr model the electron orbits the proton at radius $r = 5.29\\times 10^{-11}$ m. Compare the electric attraction $F_e$ with the gravitational attraction $F_g$ between the two particles ($m_e = 9.11\\times 10^{-31}$ kg, $m_p = 1.673\\times 10^{-27}$ kg).",
        steps: [
          { label: 'Charges', text: 'Each carries magnitude $e = 1.602\\times 10^{-19}$ C, so $|q_1||q_2| = e^2 = 2.566\\times 10^{-38}\\ \\mathrm{C^2}$.' },
          { label: 'Electric force', text: '$ke^2 = (8.99\\times 10^{9})(2.566\\times 10^{-38}) = 2.31\\times 10^{-28}\\ \\mathrm{N\\cdot m^2}$, and $r^2 = 2.80\\times 10^{-21}\\ \\mathrm{m^2}$, so $F_e = 2.31\\times 10^{-28}/2.80\\times 10^{-21} = 8.2\\times 10^{-8}$ N.' },
          { label: 'Gravitational force', text: '$F_g = Gm_em_p/r^2 = (6.67\\times 10^{-11})(9.11\\times 10^{-31})(1.673\\times 10^{-27})/2.80\\times 10^{-21} = 3.6\\times 10^{-47}$ N.' },
          { label: 'Ratio', text: '$F_e/F_g = 8.2\\times 10^{-8}/3.6\\times 10^{-47} \\approx 2.3\\times 10^{39}$.' },
        ],
        result: 'The electric force is about $8.2\\times 10^{-8}$ N, some $10^{39}$ times gravity \u2014 in atoms, gravity is utterly negligible.',
      },
      {
        title: 'Superposition: three charges on a line',
        problem: "Charge $q_A = +3.0\\ \\mu$C sits at $x = 0$, $q_B = +5.0\\ \\mu$C at $x = 0.40$ m, and $q_C = -2.0\\ \\mu$C at $x = 0.80$ m. Find the net force on $q_C$.",
        steps: [
          { label: 'Force from A', text: 'The charges have opposite signs, so $q_C$ is pulled toward A (leftward): $F_{CA} = k|q_C||q_A|/r^2 = (8.99\\times 10^{9})(2.0\\times 10^{-6})(3.0\\times 10^{-6})/(0.80)^2 = 8.4\\times 10^{-2}$ N.' },
          { label: 'Force from B', text: 'Opposite signs again, pull toward B (leftward): $F_{CB} = (8.99\\times 10^{9})(2.0\\times 10^{-6})(5.0\\times 10^{-6})/(0.40)^2 = 0.56$ N.' },
          { label: 'Vector sum', text: 'Both forces point in the $-x$ direction, so they add: $F_\\text{net} = 0.084 + 0.56 = 0.65$ N directed toward $-x$.' },
        ],
        result: 'The net force on $q_C$ is about 0.65 N toward the two positive charges \u2014 superposition means compute each pairwise force separately, then add vectors.',
      },
    ],
    keyTakeaways: [
      '$F = k|q_1||q_2|/r^2$ with $k = 1/4\\pi\\varepsilon_0 = 8.99\\times 10^{9}\\ \\mathrm{N\\cdot m^2/C^2}$; the forces on the two charges are equal, opposite, and directed along the line joining them.',
      'The sign of the product $q_1q_2$ encodes the physics: positive means repulsion, negative means attraction.',
      'Charged spheres behave as point charges for external points, and the electric force between elementary charges outruns gravity by a factor of about $10^{39}$.',
    ],
    quiz: [
      {
        q: 'Two point charges exert a force of magnitude $F$ on each other at separation $d$. If the separation grows to $3d$, the new magnitude is:',
        options: ['F/9', 'F/3', 'F', '3F'],
        answer: 0,
        explanation: 'The force scales as $1/r^2$; tripling $r$ divides the force by $3^2 = 9$.',
      },
      {
        q: 'Charges $+q$ and $-3q$ sit a distance $d$ apart. Compare the magnitudes of the two forces:',
        options: ['The force on $-3q$ is three times larger', 'The force on $+q$ is three times larger', 'The two magnitudes are equal', 'It depends on the masses of the charges'],
        answer: 2,
        explanation: "Coulomb's law is symmetric in the two charges, and the pair obeys Newton\'s third law: each feels the same magnitude $3kq^2/d^2$.",
      },
      {
        q: 'In SI units the Coulomb constant $k$ equals:',
        options: [`$4\\pi\\varepsilon_0$`, `$1/(4\\pi\\varepsilon_0)$`, `$1/(2\\pi\\varepsilon_0)$`, `$\\varepsilon_0/4\\pi$`],
        answer: 1,
        explanation: 'By convention $k = 1/4\\pi\\varepsilon_0 = 8.99\\times 10^{9}$ N·m²/C².',
      },
      {
        q: 'A negative charge sits to the right of a positive charge. The direction of the force on the negative charge is:',
        options: ['Away from the positive charge', 'Toward the positive charge', 'Perpendicular to the line joining them', 'Zero unless the charges touch'],
        answer: 1,
        explanation: 'Unlike charges attract: the force on each points along the line toward the other charge.',
      },
    ],
  },
  // ------------------------------------------------------------------ 21-2
  {
    sectionId: 'hall-ch21-s2',
    readingTime: 5,
    intro: "Millikan's oil-drop experiment (1909\u20131913) weighed tiny charges one by one and found something remarkable: every charge he measured, however produced, was an integer multiple of one elementary unit. Charge is not a continuous fluid that can be shaved arbitrarily fine; it comes in identical packets. This section states quantization, counts electrons in macroscopic charges, and asks what quarks do to the story.",
    objectives: [
      'State the quantization of charge, $q = ne$ with $n$ an integer and $e = 1.602\\times 10^{-19}$ C',
      'Convert between a net charge and a number of excess or missing electrons',
      'Explain what Millikan measured and why free quarks do not violate quantization in units of $e$',
    ],
    concepts: [
      {
        term: 'Elementary charge',
        kind: 'definition',
        statement: "**Electric charge is quantized: every observable free charge is an integer multiple of the elementary charge** $$e = 1.602176634\\times 10^{-19}\\ \\mathrm{C},$$ an exact value since the 2019 SI revision fixed the coulomb through it. A body with $n$ excess electrons carries $q = -ne$.",
      },
      {
        term: "Millikan's oil drops",
        kind: 'insight',
        statement: '**Every droplet\u2019s charge was an integer multiple of one smallest charge.** Balancing electric force against gravity for thousands of drops, Millikan found charges like $4.8\\times 10^{-19}$ C, $6.4\\times 10^{-19}$ C, $1.6\\times 10^{-19}$ C \u2014 never $2.1\\times 10^{-19}$ C \u2014 the fingerprint of a smallest unit.',
      },
      {
        term: 'Quarks',
        kind: 'insight',
        statement: '**Quarks carry $\\pm e/3$ or $\\pm 2e/3$, yet they are never seen free.** Confinement binds quarks into protons, neutrons and mesons whose net charges are integer multiples of $e$, so all isolated particles still obey $q = ne$.',
        detail: 'Fractional charge is real inside hadrons \u2014 it just cannot be brought to your lab bench as a separate object.',
      },
      {
        term: 'Counting electrons',
        kind: 'method',
        statement: '**To convert charge to particles, divide by $e$.** A net charge $q$ corresponds to $n = |q|/e$ excess electrons (negative $q$) or missing electrons (positive $q$); $1.00\\ \\mathrm{C} = 6.24\\times 10^{18}$ elementary charges.',
      },
      {
        term: "Charge Is Quantized: solution protocol",
        kind: "method",
        statement: "**Solve Charge Is Quantized problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Coulomb's law with quantized, conserved charge; the working equation is $F = k|q_1q_2|/r^2$, $k = 8.99\\times 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$, $e = 1.60\\times 10^{-19}\\ \\text{C}$; every substitution must carry its units so the final unit (coulombs and newtons) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $F\\sim 1\\ \\text{N}$ for $\\mu\\text{C}$ at cm; $1\\ \\text{C} \\approx 6\\times 10^{18}e$; point charges at rest; $q = ne$.",
      },
    ],
    examples: [
      {
        title: 'How many electrons are missing?',
        problem: "A metal sphere carries a net charge of $+6.4\\ \\mu$C. How many electrons are missing, and what fraction of the sphere's electrons is that?",
        steps: [
          { label: 'Count the units', text: 'Positive net charge means electrons were removed: $n = q/e = (6.4\\times 10^{-6})/(1.602\\times 10^{-19}) = 4.0\\times 10^{13}$ missing electrons.' },
          { label: 'Compare with the supply', text: 'A 1 g copper sphere holds about $2.6\\times 10^{24}$ electrons (about $9\\times 10^{21}$ atoms times 29 electrons each).' },
          { label: 'Fraction', text: 'The deficit is $4.0\\times 10^{13}/2.6\\times 10^{24} \\approx 1.5\\times 10^{-11}$ \u2014 about one electron missing per hundred billion.' },
        ],
        result: '$4.0\\times 10^{13}$ electrons are missing \u2014 an utterly negligible fraction of the total, which is why matter stays essentially neutral even when charged enough to shock you.',
      },
      {
        title: "Charge Is Quantized: Coulomb numbers",
        problem: "Two $3\\ \\mu\\text{C}$ charges sit $10\\ \\text{cm}$ apart. Find the repulsion.",
        steps: [
          { label: "Formula", text: "$F = kq_1q_2/r^2$." },
          { label: "Substitute", text: "$F = 8.99\\times 10^9\\times (3\\times 10^{-6})^2/(0.1)^2$." },
          { label: "Compute", text: "$F \\approx 8.09\\ \\text{N}$." },
        ],
        result: "$F \\approx 8.09\\ \\text{N}$ repulsive.",
      },
    ],
    keyTakeaways: [
      'Charge is quantized: $q = \\pm ne$ with $e = 1.602\\times 10^{-19}$ C, now an exact SI value.',
      'Macroscopic charges involve enormous numbers of elementary charges; $-1.0\\ \\mu$C is $6.2\\times 10^{12}$ excess electrons.',
      'Quarks have fractional charge but are confined, so every isolated particle still has a charge that is an integer multiple of $e$.',
    ],
    quiz: [
      {
        q: 'Which of the following is an impossible net charge for an isolated particle?',
        options: ['$+1.6\\times 10^{-19}$ C', '$-3.2\\times 10^{-19}$ C', '$+2.5\\times 10^{-19}$ C', '$-4.8\\times 10^{-19}$ C'],
        answer: 2,
        explanation: 'Divide by $e = 1.602\\times 10^{-19}$ C: the first, second and fourth give $n = 1, -2, 3$, but $2.5/1.602 \\approx 1.56$ is not an integer.',
      },
      {
        q: 'A charge of $-1.0\\ \\mu$C corresponds to how many excess electrons?',
        options: [`$6.2\\times 10^{12}$`, `$6.2\\times 10^{18}$`, `$1.6\\times 10^{-13}$`, `$1.6\\times 10^{19}$`],
        answer: 0,
        explanation: '$n = q/e = 1.0\\times 10^{-6}/1.602\\times 10^{-19} \\approx 6.2\\times 10^{12}$.',
      },
      {
        q: 'Free quarks would carry charges like $e/3$, yet no free particle has ever shown a charge smaller than $e$ in magnitude. Why?',
        options: ['Quarks are too small to measure', 'Confinement \u2014 quarks are never observed in isolation', 'Quarks neutralize each other by exchanging photons', 'The value of $e$ is defined only for leptons'],
        answer: 1,
        explanation: 'The strong force confines quarks into hadrons; every hadron that can be isolated has a net charge of $ne$ with $n$ an integer.',
      },
    ],
  },
  // ------------------------------------------------------------------ 21-3
  {
    sectionId: 'hall-ch21-s3',
    readingTime: 5,
    intro: 'If charge is quantized, it is also conserved: no process anywhere in physics \u2014 chemical, nuclear, or particle-level \u2014 has ever changed the net charge of an isolated system. Rubbing, touching and inducing merely move packets of charge around. This section states the conservation law, tracks charge through pair production and electron transfer, and applies it to two conductors that share charge.',
    objectives: [
      'State conservation of charge and apply it to isolated systems',
      'Track charge transfer in rubbing, contact and induction processes',
      'Use charge conservation together with the equal-sharing rule for identical conductors',
    ],
    concepts: [
      {
        term: 'Conservation of charge',
        kind: 'law',
        statement: "**The net charge of an isolated system never changes.** Charge can be transferred from one part of the system to another, or created/destroyed in particle\u2013antiparticle pairs whose total is zero, but the algebraic sum $(+\\text{s}) + (-\\text{s})$ stays exactly constant in every known process.",
      },
      {
        term: 'Pair production and annihilation',
        kind: 'insight',
        statement: '**A gamma ray can turn into an electron and a positron ($\\gamma \\to e^- + e^+$), and matter can vanish into light \u2014 but the charge books stay balanced.** The pair carries net charge $-e + e = 0$, exactly the photon\u2019s charge.',
        detail: 'Conservation of charge is more restrictive than conservation of mass or energy bookkeeping alone: it forbids reactions like $\\gamma \\to e^- + e^-$ even though energy could be arranged.',
      },
      {
        term: 'Charging by transfer',
        kind: 'method',
        statement: '**Rubbing or touching does not create charge \u2014 it moves electrons.** Glass rubbed with silk becomes positive because electrons leave the glass for the silk; the two bodies acquire equal and opposite charges whose sum is zero.',
        detail: 'Only the electrons migrate; the far heavier positive ions stay put. That asymmetry is why "positive charge flowing" is always a bookkeeping fiction for missing electrons.',
      },
      {
        term: 'Charge sharing by identical conductors',
        kind: 'method',
        statement: '**Two identical conducting spheres that touch end up with equal charges**: each carries half the algebraic total of the pair. This follows from symmetry \u2014 nothing distinguishes one sphere from the other.',
      },
      {
        term: "Charge Is Conserved: solution protocol",
        kind: "method",
        statement: "**Solve Charge Is Conserved problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Coulomb's law with quantized, conserved charge; the working equation is $F = k|q_1q_2|/r^2$, $k = 8.99\\times 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$, $e = 1.60\\times 10^{-19}\\ \\text{C}$; every substitution must carry its units so the final unit (coulombs and newtons) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $F\\sim 1\\ \\text{N}$ for $\\mu\\text{C}$ at cm; $1\\ \\text{C} \\approx 6\\times 10^{18}e$; point charges at rest; $q = ne$.",
      },
    ],
    examples: [
      {
        title: 'Two identical spheres share charge',
        problem: "Identical conducting spheres carry $q_A = +8.0\\ \\mu$C and $q_B = -2.0\\ \\mu$C. They are touched together and then separated to a distance of $r = 10$ cm. What force does each now exert on the other?",
        steps: [
          { label: 'Conserve, then share', text: 'The total charge is $+8.0\\ \\mu\\mathrm{C} + (-2.0\\ \\mu\\mathrm{C}) = +6.0\\ \\mu$C; after contact each identical sphere keeps half: $+3.0\\ \\mu$C.' },
          { label: 'Apply Coulomb\u2019s law', text: '$F = k q^2/r^2 = (8.99\\times 10^{9})(3.0\\times 10^{-6})^2/(0.10)^2 = 8.99\\times 10^{9}\\times 9.0\\times 10^{-12}/0.010$.' },
          { label: 'Evaluate', text: '$F = 0.0809/0.010 = 8.1$ N.' },
        ],
        result: 'Each sphere feels a repulsive force of about 8.1 N \u2014 same sign now, so they push apart; the force has flipped from attractive to repulsive through the sharing.',
      },
      {
        title: "Charge Is Conserved: Coulomb numbers",
        problem: "Two $1\\ \\mu\\text{C}$ charges sit $12.5\\ \\text{cm}$ apart. Find the repulsion.",
        steps: [
          { label: "Formula", text: "$F = kq_1q_2/r^2$." },
          { label: "Substitute", text: "$F = 8.99\\times 10^9\\times (1\\times 10^{-6})^2/(0.125)^2$." },
          { label: "Compute", text: "$F \\approx 0.575\\ \\text{N}$." },
        ],
        result: "$F \\approx 0.575\\ \\text{N}$ repulsive.",
      },
    ],
    keyTakeaways: [
      'The net charge of an isolated system is exactly conserved, in classical physics and in all particle reactions.',
      'Charging processes transfer whole electrons; the donor and receiver acquire equal and opposite charges.',
      'Identical conductors in contact share the total algebraic charge equally \u2014 use that, then reapply Coulomb\u2019s law.',
    ],
    quiz: [
      {
        q: 'A rubber balloon rubbed on wool acquires a negative charge. What happened?',
        options: ['Protons moved from wool to balloon', 'Electrons moved from wool to balloon', 'Electrons moved from balloon to wool', 'Negative charge was created on the balloon'],
        answer: 1,
        explanation: 'Only electrons are mobile; wool loses electrons (becoming positive) as the balloon gains them \u2014 the pair\u2019s net charge stays zero.',
      },
      {
        q: 'A single gamma-ray photon turns into an electron and a positron ($\\gamma \\to e^- + e^+$). Conservation of charge says:',
        options: ['This is forbidden \u2014 charge would be created', 'It is allowed: the net charge is zero before and after', 'It requires the photon to carry charge $-e$', 'It only happens near a nucleus because charge is not conserved there'],
        answer: 1,
        explanation: 'The photon has charge 0 and the pair has $-e + e = 0$; the books balance. (A nearby nucleus takes momentum, not charge.)',
      },
      {
        q: 'Two neutral, isolated, identical conductors are connected long enough for $2.0\\times 10^{13}$ electrons to move from A to B. The final charges are:',
        options: ['A: $+3.2\\ \\mu$C, B: $-3.2\\ \\mu$C', 'A: $-3.2\\ \\mu$C, B: $+3.2\\ \\mu$C', 'Both $+3.2\\ \\mu$C', 'A stays neutral, B gets $-6.4\\ \\mu$C'],
        answer: 0,
        explanation: 'A loses $2.0\\times 10^{13}$ electrons, so $q_A = +ne = +(2.0\\times 10^{13})(1.602\\times 10^{-19}) = +3.2\\ \\mu$C, and B gains the same electrons with the opposite sign; the total remains zero.',
      },
    ],
  },
]
