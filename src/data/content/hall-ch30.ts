import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 30
// Induction and Inductance — sections 30-1 … 30-9
// (ids hall-ch30-s1 … hall-ch30-s9, verbatim from library-parts/halliday.ts)
// Constants: μ₀ = 4π×10⁻⁷ T·m/A; 1 Wb = 1 T·m²; 1 H = 1 Wb/A.
// ============================================================================

export const hallCh30Content: SectionContent[] = [
  // ------------------------------------------------------------------ 30-1
  {
    sectionId: 'hall-ch30-s1',
    readingTime: 7,
    intro: "Oersted showed that current makes magnetism; a decade later Faraday ran the logic backward and found that magnetism makes electricity — but only while it changes. The rate at which magnetic flux sweeps through a circuit, not the flux itself, drives an emf. Lenz's minus sign tells the induced current which way to fight, and that fight is energy conservation in disguise.",
    objectives: [
      "Compute magnetic flux $\\Phi_B = \\int \\vec B\\cdot d\\vec A$ (in webers) through flat surfaces",
      "Apply Faraday's law $\\mathcal{E} = -N\\,d\\Phi_B/dt$ to flux changed by field, area, or orientation",
      "Use Lenz's law to find the direction of the induced current and emf",
    ],
    concepts: [
      {
        term: 'Magnetic flux',
        kind: 'definition',
        statement: "**The magnetic flux through a surface is** $$\\Phi_B = \\int \\vec B\\cdot d\\vec A,$$ **in webers (1 Wb = 1 T·m²).** For a flat area $A$ in a uniform field making angle $\\theta$ with the normal, $\\Phi_B = BA\\cos\\theta$.",
        detail: "Flux counts field lines through the surface — nothing more. It can be positive or negative depending on which normal you choose; Faraday's law works with either choice as long as you stay consistent.",
      },
      {
        term: "Faraday's law of induction",
        kind: 'law',
        statement: "**The emf around a circuit equals minus the rate of change of magnetic flux through it:** $$\\mathcal{E} = -\\frac{d\\Phi_B}{dt},$$ **and for a coil of $N$ turns, $\\mathcal{E} = -N\\,d\\Phi_B/dt$, where $\\Phi_B$ is the flux through each turn.**",
        detail: "Three independent ways to change $\\Phi_B = BA\\cos\\theta$: change $B$ (a ramping electromagnet), change $A$ (a loop sliding into or out of a field region), change $\\theta$ (a rotating generator). Every power plant uses the third.",
      },
      {
        term: "Lenz's law",
        kind: 'law',
        statement: "**The induced current flows in the direction that opposes the change in flux that produces it.** Growing flux into the page through a loop drives a counterclockwise current (its own field points out of the page inside the loop); shrinking flux into the page drives a clockwise one.",
        detail: "The minus sign in Faraday's law is Lenz\'s law written in algebra. Opposition, not cancellation: the induced field fights the change but never wins completely — a winning loop would violate energy conservation. Note that an emf exists whether or not a circuit is closed; the induced current requires a closed conducting path.",
      },
      {
        term: 'Motional emf',
        kind: 'method',
        statement: "**A rod of length $L$ sliding at speed $v$, with $v$ perpendicular to $\\vec B$ and $L$ perpendicular to both, develops an emf** $$\\mathcal{E} = BLv$$ **because it sweeps area at the rate $Lv$.**",
        detail: "Rail problems close the rod through a resistance; the emf then drives a current $i = BLv/R$ and the field brakes the rod — the full story of section 30-2.",
      },
      {
        term: "Faraday's Law and Lenz's Law: solution protocol",
        kind: "method",
        statement: "**Solve Faraday's Law and Lenz's Law problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Faraday induction with Lenz's sign as energy conservation; the working equation is $\\Phi_B = \\int\\vec B\\cdot d\\vec A$, $\\mathcal{E} = -N\\,d\\Phi_B/dt$, $U_B = \\tfrac12Li^2$; every substitution must carry its units so the final unit (webers, volts, henries) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$; the minus sign is energy conservation; $\\tau_L = L/R$.",
      },
    ],
    figures: [
      {
        caption: "Lenz's law in action. Left: flux into the page grows, so the induced current runs counterclockwise, making its own field out of the page. Right: flux into the page shrinks, so the current runs clockwise, reinforcing it. The galvanometer G registers the direction; in both panels $\\mathcal{E} = -d\\Phi_B/dt$.",
        svg: `<svg viewBox="0 0 720 330" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two loops with changing into-page magnetic flux and the induced current direction from Lenz's law"><defs><marker id="fzA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><rect x="70" y="80" width="250" height="160" rx="16" fill="none" stroke="currentColor" stroke-width="3"/><text x="195" y="50" text-anchor="middle" font-size="16" fill="currentColor">B into page — increasing</text><circle cx="135" cy="135" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="131" y1="131" x2="139" y2="139" stroke="currentColor" stroke-width="1.6"/><line x1="131" y1="139" x2="139" y2="131" stroke="currentColor" stroke-width="1.6"/><circle cx="195" cy="135" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="191" y1="131" x2="199" y2="139" stroke="currentColor" stroke-width="1.6"/><line x1="191" y1="139" x2="199" y2="131" stroke="currentColor" stroke-width="1.6"/><circle cx="255" cy="135" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="251" y1="131" x2="259" y2="139" stroke="currentColor" stroke-width="1.6"/><line x1="251" y1="139" x2="259" y2="131" stroke="currentColor" stroke-width="1.6"/><circle cx="135" cy="195" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="131" y1="191" x2="139" y2="199" stroke="currentColor" stroke-width="1.6"/><line x1="131" y1="199" x2="139" y2="191" stroke="currentColor" stroke-width="1.6"/><circle cx="195" cy="195" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="191" y1="191" x2="199" y2="199" stroke="currentColor" stroke-width="1.6"/><line x1="191" y1="199" x2="199" y2="191" stroke="currentColor" stroke-width="1.6"/><circle cx="255" cy="195" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><line x1="251" y1="191" x2="259" y2="199" stroke="currentColor" stroke-width="1.6"/><line x1="251" y1="199" x2="259" y2="191" stroke="currentColor" stroke-width="1.6"/><line x1="250" y1="80" x2="190" y2="80" stroke="currentColor" stroke-width="2.5" marker-end="url(#fzA)"/><text x="222" y="72" font-size="14" fill="currentColor">i</text><line x1="320" y1="170" x2="320" y2="120" stroke="currentColor" stroke-width="2.5" marker-end="url(#fzA)"/><line x1="70" y1="120" x2="70" y2="170" stroke="currentColor" stroke-width="2.5" marker-end="url(#fzA)"/><circle cx="195" cy="240" r="20" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="195" y1="240" x2="206" y2="229" stroke="currentColor" stroke-width="2"/><text x="195" y="257" text-anchor="middle" font-size="14" fill="currentColor">G</text><text x="195" y="298" text-anchor="middle" font-size="13" fill="currentColor">flux grows → induced current is CCW (its field points out of the page)</text><rect x="400" y="80" width="250" height="160" rx="16" fill="none" stroke="currentColor" stroke-width="3"/><text x="525" y="50" text-anchor="middle" font-size="16" fill="currentColor">B into page — decreasing</text><circle cx="465" cy="135" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="465" cy="135" r="2.2" fill="currentColor"/><circle cx="525" cy="135" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="525" cy="135" r="2.2" fill="currentColor"/><circle cx="585" cy="135" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="585" cy="135" r="2.2" fill="currentColor"/><circle cx="465" cy="195" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="465" cy="195" r="2.2" fill="currentColor"/><circle cx="525" cy="195" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="525" cy="195" r="2.2" fill="currentColor"/><circle cx="585" cy="195" r="7" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="585" cy="195" r="2.2" fill="currentColor"/><line x1="460" y1="80" x2="520" y2="80" stroke="currentColor" stroke-width="2.5" marker-end="url(#fzA)"/><text x="488" y="72" font-size="14" fill="currentColor">i</text><line x1="400" y1="170" x2="400" y2="120" stroke="currentColor" stroke-width="2.5" marker-end="url(#fzA)"/><line x1="650" y1="120" x2="650" y2="170" stroke="currentColor" stroke-width="2.5" marker-end="url(#fzA)"/><circle cx="525" cy="240" r="20" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="525" y1="240" x2="536" y2="229" stroke="currentColor" stroke-width="2"/><text x="525" y="257" text-anchor="middle" font-size="14" fill="currentColor">G</text><text x="525" y="298" text-anchor="middle" font-size="13" fill="currentColor">flux shrinks → induced current is CW (its field points into the page)</text><text x="360" y="326" text-anchor="middle" font-size="15" fill="currentColor">in both panels: ε = −dΦ/dt , with N = 1; the minus sign is Lenz's law</text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Coil in a ramping field',
        problem: "A 50-turn circular coil of area $A = 2.0\\times10^{-3}\\ \\mathrm{m^2}$ lies with its plane perpendicular to a uniform field that points into the page and grows steadily from 0.10 T to 0.60 T in 0.25 s. The coil's resistance is 0.40 Ω. Find the emf and current, and their directions.",
        steps: [
          { label: 'Rate of change', text: '$dB/dt = (0.60 - 0.10)/0.25 = +2.0$ T/s, still into the page.' },
          { label: 'Per-turn emf', text: 'The flux through each turn changes at $A\\,dB/dt = (2.0\\times10^{-3})(2.0) = 4.0\\times10^{-3}$ Wb/s.' },
          { label: 'Coil emf', text: '$|\\mathcal{E}| = N\\,A\\,dB/dt = 50\\times 4.0\\times10^{-3} = 0.20$ V; then $i = \\mathcal{E}/R = 0.20/0.40 = 0.50$ A.' },
          { label: 'Direction', text: 'Flux into the page is increasing, so by Lenz\'s law the induced current is counterclockwise — its own field points out of the page inside the coil.' },
        ],
        result: '0.20 V and 0.50 A counterclockwise while the field ramps; both drop to zero the instant $dB/dt$ returns to zero.',
      },
      {
        title: "Faraday's Law and Lenz's Law: Faraday numbers",
        problem: "A $300$-turn coil of area $0.010\\ \\text{m}^2$ sees $B$ rise $0.50\\ \\text{T}$ in $0.10\\ \\text{s}$. Find $|\\mathcal{E}| = N\\,d\\Phi_B/dt$.",
        steps: [
          { label: "Flux change", text: "$\\Delta\\Phi_B = A\\Delta B = 0.010\\times 0.50 = 5.0\\times 10^{-3}\\ \\text{Wb}$ per turn." },
          { label: "EMF", text: "$|\\mathcal{E}| = 300\\times 5.0\\times 10^{-3}/0.10 = 15\\ \\text{V}$." },
          { label: "Sign", text: "Lenz opposes the rise — the induced $B$ points against the increase." },
        ],
        result: "$|\\mathcal{E}| \\approx 15\\ \\text{V}$.",
      },
    ],
    keyTakeaways: [
      "$\\Phi_B = BA\\cos\\theta$ in webers; $\\mathcal{E} = -N\\,d\\Phi_B/dt$ — only the rate matters, never the amount.",
      "Flux can change through $B$, $A$, or $\\theta$; a rod sweeping area gives the motional emf $\\mathcal{E} = BLv$.",
      "Lenz's law points the induced current against the flux change — nature's built-in opposition, and energy conservation's enforcer.",
    ],
    quiz: [
      {
        q: 'A stationary circular loop sits in a steady, uniform 0.50 T field perpendicular to its plane. The induced emf is:',
        options: ['Proportional to the loop area', 'Zero', '0.50 V', 'Equal to the flux through the loop'],
        answer: 1,
        explanation: 'Steady flux means $d\\Phi_B/dt = 0$ and therefore $\\mathcal{E} = 0$.',
      },
      {
        q: 'The flux through a 10-turn coil changes steadily from 2.0 Wb to 6.0 Wb in 0.10 s. The average induced emf magnitude is:',
        options: ['40 V', '4.0 V', '400 V', '80 V'],
        answer: 2,
        explanation: '$|\\mathcal{E}| = N\\,\\Delta\\Phi/\\Delta t = 10\\times 4.0/0.10 = 400$ V.',
      },
      {
        q: 'A loop lies in the plane of the page; a field pointing into the page through it is getting weaker. Viewed as drawn, the induced current is:',
        options: ['Counterclockwise', 'Clockwise', 'Zero while any flux remains', 'First one way, then the other'],
        answer: 1,
        explanation: 'The induced current must make its own field into the page to oppose the decrease — that requires clockwise circulation.',
      },
      {
        q: 'A 0.25 m rod moves at 4.0 m/s perpendicular to a 0.60 T field. The motional emf between its ends is:',
        options: ['0.15 V', '0.38 V', '2.4 V', '0.60 V'],
        answer: 3,
        explanation: '$\\mathcal{E} = BLv = (0.60)(0.25)(4.0) = 0.60$ V.',
      },
    ],
  },
  // ------------------------------------------------------------------ 30-2
  {
    sectionId: 'hall-ch30-s2',
    readingTime: 6,
    intro: "A rod sliding on rails through a magnetic field is the whole story of induction in one picture: flux changes because area changes, current flows, and the field pushes back on the rod. Every joule of work done by whatever keeps the rod moving reappears as heat in the resistance — Lenz's law is energy conservation wearing a minus sign.",
    objectives: [
      "Compute emf, current, and magnetic drag for a rod moving on rails in a uniform field",
      "Do the energy audit: applied mechanical power equals Joule heating",
      "Find the terminal speed under a constant applied force and interpret it as an energy balance",
    ],
    concepts: [
      {
        term: 'The moving-rod circuit',
        kind: 'method',
        statement: "**A rod of length $L$ sliding at speed $v$ on frictionless rails across a field $\\vec B$ (all three mutually perpendicular), with the rails shorted through a resistance $R$:** $$\\mathcal{E} = BLv,\\qquad i = \\frac{BLv}{R},\\qquad F = iLB = \\frac{B^2L^2v}{R},$$ **the force being a drag that opposes the motion.**",
        detail: "The drag exists because of Lenz's law: the induced current direction is exactly the one that makes the field push against the rod's motion, never with it.",
      },
      {
        term: 'The energy audit',
        kind: 'insight',
        statement: "**Mechanical power in equals thermal power out: $Fv = i^2R = B^2L^2v^2/R$.** The applied force's work becomes electrical energy carried by the induced current and then heat in the resistance — none lost, none created.",
        detail: "This is why Lenz's law must hold: if the induced current helped the motion instead of opposing it, the rod would accelerate while generating power — a perpetual-motion machine.",
      },
      {
        term: 'Terminal speed',
        kind: 'method',
        statement: "**Under a constant pulling force $F$, the rod settles at** $$v_t = \\frac{FR}{B^2L^2},$$ **where magnetic drag equals the pull. At terminal speed all the input power $Fv_t$ dissipates in $R$.**",
        detail: "The approach to $v_t$ is exponential, exactly like a falling object reaching terminal velocity under air drag — the equation has the same structure.",
      },
      {
        term: "Induction and Energy Transfers: solution protocol",
        kind: "method",
        statement: "**Solve Induction and Energy Transfers problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Faraday induction with Lenz's sign as energy conservation; the working equation is $\\Phi_B = \\int\\vec B\\cdot d\\vec A$, $\\mathcal{E} = -N\\,d\\Phi_B/dt$, $U_B = \\tfrac12Li^2$; every substitution must carry its units so the final unit (webers, volts, henries) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$; the minus sign is energy conservation; $\\tau_L = L/R$.",
      },
      {
        term: "Induction and Energy Transfers: scales and validity",
        kind: "insight",
        statement: "**Induction and Energy Transfers lives at $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$ and the textbook model holds while the minus sign is energy conservation; $\\tau_L = L/R$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Induction and Energy Transfers calculation gives seconds when webers, volts, henries demands meters, or a value orders of magnitude beyond $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Rail rod driven at constant force — with audit',
        problem: "A rod with $L = 0.20$ m slides on rails through $B = 0.50$ T; the circuit resistance is $R = 0.40$ Ω. A constant force $F = 0.15$ N pulls it. Find the terminal speed, and audit the energy at that speed.",
        steps: [
          { label: 'Terminal speed', text: '$B^2L^2 = (0.50)^2(0.20)^2 = 0.010$; $v_t = FR/(B^2L^2) = (0.15)(0.40)/0.010 = 6.0$ m/s.' },
          { label: 'Circuit at v_t', text: '$\\mathcal{E} = BLv_t = (0.50)(0.20)(6.0) = 0.60$ V; $i = 0.60/0.40 = 1.5$ A.' },
          { label: 'Drag check', text: '$iLB = (1.5)(0.20)(0.50) = 0.15$ N — exactly the pull, as terminal speed requires.' },
          { label: 'Energy audit', text: 'Input $Fv_t = (0.15)(6.0) = 0.90$ W; heat $i^2R = (1.5)^2(0.40) = 0.90$ W. The books balance to the watt.' },
        ],
        result: 'The rod tops out at 6.0 m/s, carrying 1.5 A while converting all 0.90 W of pulling power into heat.',
      },
      {
        title: "Induction and Energy Transfers: Faraday numbers",
        problem: "A $400$-turn coil of area $0.010\\ \\text{m}^2$ sees $B$ rise $0.50\\ \\text{T}$ in $0.10\\ \\text{s}$. Find $|\\mathcal{E}| = N\\,d\\Phi_B/dt$.",
        steps: [
          { label: "Flux change", text: "$\\Delta\\Phi_B = A\\Delta B = 0.010\\times 0.50 = 5.0\\times 10^{-3}\\ \\text{Wb}$ per turn." },
          { label: "EMF", text: "$|\\mathcal{E}| = 400\\times 5.0\\times 10^{-3}/0.10 = 20\\ \\text{V}$." },
          { label: "Sign", text: "Lenz opposes the rise — the induced $B$ points against the increase." },
        ],
        result: "$|\\mathcal{E}| \\approx 20\\ \\text{V}$.",
      },
    ],
    keyTakeaways: [
      'Moving rod: $\\mathcal{E} = BLv$, $i = BLv/R$, drag $F = B^2L^2v/R$ opposing the motion.',
      'Energy conservation reads $Fv = i^2R$; Lenz\'s law is what guarantees the drag opposes the pull.',
      'Constant force gives terminal speed $v_t = FR/(B^2L^2)$, reached exponentially.',
    ],
    quiz: [
      {
        q: 'The rod\'s speed doubles (same field, rod, and rail resistance). The magnetic drag on it:',
        options: ['Halves', 'Doubles', 'Quadruples', 'Is unchanged'],
        answer: 1,
        explanation: 'The drag $B^2L^2v/R$ is proportional to the speed.',
      },
      {
        q: 'The rate at which thermal energy appears in the rail resistance equals:',
        options: ['$i^2R$, the Joule heating', '$B^2L^2v^2R$, which has the wrong units', '$\\tfrac12 Li^2$, the magnetic energy', '$BLv$, the emf'],
        answer: 0,
        explanation: 'Mechanical input converts entirely to heat: $Fv = i^2R$. (The emf is a voltage, not a power.)',
      },
      {
        q: 'Doubling $B$ (at fixed pulling force) changes the terminal speed to:',
        options: ['Half', 'One quarter', 'Double', 'Unchanged'],
        answer: 1,
        explanation: '$v_t = FR/(B^2L^2)$ falls as $1/B^2$.',
      },
      {
        q: 'At terminal speed in the worked example, the current was 1.5 A and $R = 0.40$ Ω. The thermal power was:',
        options: ['0.90 W', '0.15 W', '0.60 W', '1.5 W'],
        answer: 0,
        explanation: '$i^2R = (1.5)^2(0.40) = 0.90$ W — equal to the pulling power $Fv_t$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 30-3
  {
    sectionId: 'hall-ch30-s3',
    readingTime: 6,
    intro: "Stop thinking of electric fields as the exclusive product of charges. A changing magnetic field creates a curly electric field whose lines close on themselves — no start, no end, no potential to define anywhere. This is Faraday's law restated as a field law, and it is Maxwell\'s doorway to electromagnetic waves.",
    objectives: [
      "State the field form of Faraday's law, $\\oint \\vec E\\cdot d\\vec s = -d\\Phi_B/dt$",
      "Find the induced electric field inside and outside a long solenoid with changing current",
      "Explain why the induced field is nonconservative and admits no potential difference",
    ],
    concepts: [
      {
        term: 'Induced electric field',
        kind: 'law',
        statement: "**A changing magnetic flux through any closed curve drives a circulating electric field along it:** $$\\oint \\vec E\\cdot d\\vec s = -\\frac{d\\Phi_B}{dt}.$$ **For a circular path of radius $r$ concentric with the changing-flux region, $E(2\\pi r) = |d\\Phi_B/dt|$.**",
        detail: "The field lines are closed circles around the flux axis — unlike Coulomb fields they never begin or end on charges. A charge transported once around the loop picks up a nonzero emf.",
      },
      {
        term: 'Inside and outside a changing solenoid',
        kind: 'theorem',
        statement: "**For a solenoid of radius $R$ with uniform $dB/dt$ inside:** $$E = \\frac{r}{2}\\left|\\frac{dB}{dt}\\right| \\;\\; (r \\le R), \\qquad E = \\frac{R^2}{2r}\\left|\\frac{dB}{dt}\\right| \\;\\; (r \\ge R).$$ **$E$ rises linearly to the wall, then falls as $1/r$ — it peaks at $r = R$.**",
        detail: "Inside, the flux through the loop is only $\\pi r^2\\,dB/dt$ — the changing field within $r$ is all that counts. Outside, the loop catches the entire flux $\\pi R^2\\,dB/dt$ but spreads it over a longer circumference.",
      },
      {
        term: 'Nonconservative fields',
        kind: 'insight',
        statement: "**Because $\\oint \\vec E\\cdot d\\vec s \\neq 0$ for induced fields, no potential function exists for them — potential difference is meaningless around a changing flux.**",
        detail: "Coulomb fields (Chapter 24) are conservative and sourced by charges; induced fields are solenoidal and sourced by changing $\\vec B$. In general both coexist: $\\vec E_\\text{total} = \\vec E_\\text{Coulomb} + \\vec E_\\text{induced}$. The induced component is what accelerates electrons in transformers and in the betatron.",
      },
      {
        term: "Induced Electric Fields: solution protocol",
        kind: "method",
        statement: "**Solve Induced Electric Fields problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Faraday induction with Lenz's sign as energy conservation; the working equation is $\\Phi_B = \\int\\vec B\\cdot d\\vec A$, $\\mathcal{E} = -N\\,d\\Phi_B/dt$, $U_B = \\tfrac12Li^2$; every substitution must carry its units so the final unit (webers, volts, henries) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$; the minus sign is energy conservation; $\\tau_L = L/R$.",
      },
      {
        term: "Induced Electric Fields: scales and validity",
        kind: "insight",
        statement: "**Induced Electric Fields lives at $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$ and the textbook model holds while the minus sign is energy conservation; $\\tau_L = L/R$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Induced Electric Fields calculation gives seconds when webers, volts, henries demands meters, or a value orders of magnitude beyond $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'E around a pulsed solenoid',
        problem: "A long solenoid of radius $R = 5.0$ cm carries a current that makes its interior field rise at $dB/dt = +4.0$ T/s into the page. Find the magnitude of the induced electric field at $r = R$, at $r = 2.5$ cm, and at $r = 10$ cm.",
        steps: [
          { label: 'At the wall', text: '$E = (R/2)|dB/dt| = (0.025)(4.0) = 0.10$ V/m — the maximum.' },
          { label: 'Halfway in', text: 'At $r = 2.5$ cm: $E = (0.0125)(4.0) = 0.050$ V/m.' },
          { label: 'Doubled out', text: 'At $r = 10$ cm: $E = (R^2/2r)(dB/dt) = (0.0025/0.20)(4.0) = 0.050$ V/m.' },
          { label: 'Direction', text: 'The flux into the page is increasing, so $\\vec E$ circulates counterclockwise — the direction it would drive an opposing current.' },
        ],
        result: '0.10 V/m at the wall, 0.050 V/m at $R/2$ inside and at $2R$ outside — the profile is a tent peaking exactly at the solenoid wall.',
      },
      {
        title: "Induced Electric Fields: Faraday numbers",
        problem: "A $200$-turn coil of area $0.010\\ \\text{m}^2$ sees $B$ rise $0.50\\ \\text{T}$ in $0.10\\ \\text{s}$. Find $|\\mathcal{E}| = N\\,d\\Phi_B/dt$.",
        steps: [
          { label: "Flux change", text: "$\\Delta\\Phi_B = A\\Delta B = 0.010\\times 0.50 = 5.0\\times 10^{-3}\\ \\text{Wb}$ per turn." },
          { label: "EMF", text: "$|\\mathcal{E}| = 200\\times 5.0\\times 10^{-3}/0.10 = 10\\ \\text{V}$." },
          { label: "Sign", text: "Lenz opposes the rise — the induced $B$ points against the increase." },
        ],
        result: "$|\\mathcal{E}| \\approx 10\\ \\text{V}$.",
      },
    ],
    keyTakeaways: [
      '$\\oint \\vec E\\cdot d\\vec s = -d\\Phi_B/dt$: changing magnetic flux creates circulating electric field.',
      'Around a solenoid: $E = (r/2)dB/dt$ inside, $E = (R^2/2r)dB/dt$ outside — peak at $r = R$.',
      'The induced field is nonconservative: no potential exists for it, and its lines are closed loops.',
    ],
    quiz: [
      {
        q: 'For one solenoid with fixed $dB/dt$, the induced $E$ at $r = R/2$ and at $r = 2R$ compare as:',
        options: ['The inner point is larger', 'They are equal', 'The outer point is larger', 'Both are zero'],
        answer: 1,
        explanation: 'Inside: $E = (R/4)dB/dt$; outside: $E = (R^2/4R)dB/dt$ — the same value on both sides of the wall.',
      },
      {
        q: 'If $dB/dt$ inside the solenoid is doubled, the induced $E$ at every point:',
        options: ['Doubles', 'Halves', 'Quadruples', 'Is unchanged'],
        answer: 0,
        explanation: 'Both formulas are proportional to $dB/dt$.',
      },
      {
        q: 'A potential function $V$ can be defined for the induced electric field:',
        options: ['Always, since E is a field', 'Never, because the circulation of E is nonzero', 'Only inside the solenoid', 'Only if dB/dt is constant'],
        answer: 1,
        explanation: 'A potential requires $\\oint \\vec E\\cdot d\\vec s = 0$, which the induced field violates.',
      },
      {
        q: 'Around a solenoid with changing current, the induced electric field is largest:',
        options: ['On the axis', 'At $r = R$, the solenoid wall', 'Far from the solenoid', 'Everywhere the same'],
        answer: 1,
        explanation: 'Linear growth inside plus $1/r$ decay outside — the peak sits at the wall.',
      },
    ],
  },
  // ------------------------------------------------------------------ 30-4
  {
    sectionId: 'hall-ch30-s4',
    readingTime: 5,
    intro: "Coil a wire and the magnetic field it produces threads back through its own turns — a device whose flux is proportional to its own current. That proportionality constant is the inductance: pure geometry, measured in henrys, and the electrical inertia of every circuit you will analyze from here on.",
    objectives: [
      "Define inductance $L = N\\Phi/i$ and its unit, the henry",
      "Derive $L = \\mu_0 n^2 A l$ for a long solenoid and evaluate it for real coils",
      "Treat inductance as a geometric property, independent of the current",
    ],
    concepts: [
      {
        term: 'Inductance',
        kind: 'definition',
        statement: "**For a coil (inductor) whose own current $i$ produces flux $\\Phi$ through each of its $N$ turns,** $$L = \\frac{N\\Phi}{i}.$$ **SI unit: the henry, 1 H = 1 Wb/A = 1 T·m²/A.**",
        detail: "$L$ depends only on the coil's geometry (and any magnetic material inside it), never on the current: doubling $i$ doubles $\\Phi$, and the ratio stands still.",
      },
      {
        term: 'Inductance of a solenoid',
        kind: 'theorem',
        statement: "**A long solenoid with $n$ turns per unit length, length $l$, and cross-section area $A$ has** $$L = \\mu_0 n^2 A l = \\frac{\\mu_0 N^2 A}{l}.$$",
        detail: "Derivation: inside, $B = \\mu_0 n i$; each turn threads flux $\\Phi = BA$; the $N = nl$ turns then give $N\\Phi = \\mu_0 n^2 A l\\,i$. Note the quadratic in $n$: double the turn density and you double both the turns and the flux per turn.",
      },
      {
        term: 'The inductor as a circuit element',
        kind: 'notation',
        statement: "**Circuit symbol: a coil. An inductor stores energy in its magnetic field and, like a capacitor, is defined by a single geometric number — its inductance.**",
        detail: "Where a capacitor relates charge to voltage ($q = CV$), an inductor relates flux linkage to current ($N\\Phi = Li$). The two devices are exact structural twins, which the coming sections exploit over and over.",
      },
      {
        term: "Inductors and Inductance: solution protocol",
        kind: "method",
        statement: "**Solve Inductors and Inductance problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Faraday induction with Lenz's sign as energy conservation; the working equation is $\\Phi_B = \\int\\vec B\\cdot d\\vec A$, $\\mathcal{E} = -N\\,d\\Phi_B/dt$, $U_B = \\tfrac12Li^2$; every substitution must carry its units so the final unit (webers, volts, henries) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$; the minus sign is energy conservation; $\\tau_L = L/R$.",
      },
      {
        term: "Inductors and Inductance: scales and validity",
        kind: "insight",
        statement: "**Inductors and Inductance lives at $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$ and the textbook model holds while the minus sign is energy conservation; $\\tau_L = L/R$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Inductors and Inductance calculation gives seconds when webers, volts, henries demands meters, or a value orders of magnitude beyond $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Inductance of a lab solenoid',
        problem: "A solenoid has 500 turns on a 50 cm length (so $n = 1000$ turns/m) and a cross-section of $A = 4.0\\ \\mathrm{cm^2}$. Find its inductance, then check it against the flux when $i = 2.0$ A.",
        steps: [
          { label: 'Formula', text: '$L = \\mu_0 n^2 A l = (4\\pi\\times10^{-7})(10^6)(4.0\\times10^{-4})(0.50) = 2.5\\times10^{-4}$ H.' },
          { label: 'Field', text: 'At 2.0 A the interior field is $B = \\mu_0 n i = (4\\pi\\times10^{-7})(10^3)(2.0) = 2.5\\times10^{-3}$ T.' },
          { label: 'Flux per turn', text: '$\\Phi = BA = (2.5\\times10^{-3})(4.0\\times10^{-4}) = 1.0\\times10^{-6}$ Wb.' },
          { label: 'Consistency', text: '$N\\Phi = (500)(1.0\\times10^{-6}) = 5.0\\times10^{-4}$ Wb, and $Li = (2.5\\times10^{-4})(2.0) = 5.0\\times10^{-4}$ Wb — identical, as the definition requires.' },
        ],
        result: 'The coil is a 0.25 mH inductor; at 2.0 A it links $5.0\\times10^{-4}$ Wb of flux.',
      },
      {
        title: "Inductors and Inductance: Faraday numbers",
        problem: "A $300$-turn coil of area $0.010\\ \\text{m}^2$ sees $B$ rise $0.50\\ \\text{T}$ in $0.10\\ \\text{s}$. Find $|\\mathcal{E}| = N\\,d\\Phi_B/dt$.",
        steps: [
          { label: "Flux change", text: "$\\Delta\\Phi_B = A\\Delta B = 0.010\\times 0.50 = 5.0\\times 10^{-3}\\ \\text{Wb}$ per turn." },
          { label: "EMF", text: "$|\\mathcal{E}| = 300\\times 5.0\\times 10^{-3}/0.10 = 15\\ \\text{V}$." },
          { label: "Sign", text: "Lenz opposes the rise — the induced $B$ points against the increase." },
        ],
        result: "$|\\mathcal{E}| \\approx 15\\ \\text{V}$.",
      },
    ],
    keyTakeaways: [
      '$L = N\\Phi/i$ in henrys; a geometric property of the coil, not of the current.',
      'Long solenoid: $L = \\mu_0 n^2 A l$ — quadratic in turns density.',
      'The inductor pairs with the capacitor: flux–current mirrors charge–voltage.',
    ],
    quiz: [
      {
        q: 'A solenoid\'s turns-per-length $n$ is doubled (same length and area). Its inductance is:',
        options: ['Doubled', 'Quadrupled', 'Halved', 'Unchanged'],
        answer: 1,
        explanation: '$L = \\mu_0 n^2 A l$ is quadratic in $n$.',
      },
      {
        q: 'One henry equals:',
        options: ['One weber per ampere', 'One ampere per weber', 'One tesla per meter', 'One joule per coulomb'],
        answer: 0,
        explanation: '$L = N\\Phi/i$ has units of Wb/A, defined as the henry.',
      },
      {
        q: 'Doubling the current in an inductor:',
        options: ['Doubles its inductance', 'Leaves the inductance unchanged', 'Halves the inductance', 'Quadruples the inductance'],
        answer: 1,
        explanation: 'Flux grows proportionally with current; the ratio $N\\Phi/i$ is fixed by geometry.',
      },
      {
        q: 'Two otherwise identical solenoids, one twice as long (same $n$). Their inductances compare as:',
        options: ['2:1', '4:1', '1:2', '1:1'],
        answer: 0,
        explanation: 'At fixed $n$, $L = \\mu_0 n^2 A l$ scales linearly with length.',
      },
    ],
  },
  // ------------------------------------------------------------------ 30-5
  {
    sectionId: 'hall-ch30-s5',
    readingTime: 4,
    intro: "Flip a switch and a coil fights the change: the growth of its own current changes its own flux, inducing an emf that pushes back. This is why current in an inductor cannot jump — the electrical analogue of mass refusing an instantaneous velocity change.",
    objectives: [
      "State the self-induced emf $\\mathcal{E}_L = -L\\,di/dt$ and find its direction",
      "Explain why inductor current must be continuous while its voltage can jump",
      "Estimate the emf developed when a current is switched on or interrupted",
    ],
    concepts: [
      {
        term: 'Self-induced emf',
        kind: 'law',
        statement: "**A changing current in an inductor induces in it an emf** $$\\mathcal{E}_L = -L\\,\\frac{di}{dt}$$ **that opposes the change: growing current meets a back-emf; falling current is propped up by a forward emf.**",
        detail: "This is Faraday's law with $N\\Phi = Li$; the minus sign is Lenz\'s law applied to the coil's own flux. The emf exists even in an isolated superconducting loop — that is how persistent currents survive.",
      },
      {
        term: 'Electrical inertia',
        kind: 'insight',
        statement: "**Inductance is to current what mass is to velocity: a finite $L$ forbids instantaneous changes of $i$.**",
        detail: "For steady DC ($di/dt = 0$) the inductor is just a piece of wire; all its drama happens during changes. To change an inductor current at all, a source must supply energy that ends up in the magnetic field (section 30-7).",
      },
      {
        term: 'Switch spikes',
        kind: 'insight',
        statement: "**Interrupting an inductor's current quickly makes $|di/dt|$ enormous, and with it the emf $L|di/dt|$.** This is the principle of ignition coils — and the reason relay contacts arc as they open.",
        detail: "Practical circuits put a freewheeling diode or an RC snubber across inductive loads to give the current a harmless path while it decays.",
      },
      {
        term: "Self-Induction: solution protocol",
        kind: "method",
        statement: "**Solve Self-Induction problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Faraday induction with Lenz's sign as energy conservation; the working equation is $\\Phi_B = \\int\\vec B\\cdot d\\vec A$, $\\mathcal{E} = -N\\,d\\Phi_B/dt$, $U_B = \\tfrac12Li^2$; every substitution must carry its units so the final unit (webers, volts, henries) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$; the minus sign is energy conservation; $\\tau_L = L/R$.",
      },
      {
        term: "Self-Induction: scales and validity",
        kind: "insight",
        statement: "**Self-Induction lives at $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$ and the textbook model holds while the minus sign is energy conservation; $\\tau_L = L/R$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Self-Induction calculation gives seconds when webers, volts, henries demands meters, or a value orders of magnitude beyond $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Back-emf in a relay coil',
        problem: "A relay coil has $L = 20$ mH. Its current rises from 0 to 4.0 A in 2.0 ms when energized. Later, opening the switch interrupts the same current in about 0.10 ms. Find the self-induced emf magnitudes in the two events.",
        steps: [
          { label: 'Energizing', text: '$di/dt = 4.0/0.0020 = 2000$ A/s, so $|\\mathcal{E}_L| = (0.020)(2000) = 40$ V — opposing the growth of current.' },
          { label: 'Interrupting', text: '$di/dt = -4.0/10^{-4} = -4.0\\times10^{4}$ A/s, so $|\\mathcal{E}_L| = (0.020)(4.0\\times10^{4}) = 800$ V.' },
          { label: 'Interpretation', text: 'The interruption emf is twenty times the energizing emf — enough to arc across the opening contacts, which is why switch protection is needed.' },
        ],
        result: '40 V during the 2.0 ms turn-on, but about 800 V across the opening switch — the faster the break, the bigger the kick.',
      },
      {
        title: "Self-Induction: Faraday numbers",
        problem: "A $400$-turn coil of area $0.010\\ \\text{m}^2$ sees $B$ rise $0.50\\ \\text{T}$ in $0.10\\ \\text{s}$. Find $|\\mathcal{E}| = N\\,d\\Phi_B/dt$.",
        steps: [
          { label: "Flux change", text: "$\\Delta\\Phi_B = A\\Delta B = 0.010\\times 0.50 = 5.0\\times 10^{-3}\\ \\text{Wb}$ per turn." },
          { label: "EMF", text: "$|\\mathcal{E}| = 400\\times 5.0\\times 10^{-3}/0.10 = 20\\ \\text{V}$." },
          { label: "Sign", text: "Lenz opposes the rise — the induced $B$ points against the increase." },
        ],
        result: "$|\\mathcal{E}| \\approx 20\\ \\text{V}$.",
      },
    ],
    keyTakeaways: [
      '$\\mathcal{E}_L = -L\\,di/dt$ opposes any change of current; steady DC sees no induced emf.',
      'Inductor current is continuous — it cannot jump, though its emf can.',
      'Interrupting current fast creates huge emfs: ignition coils make sparks from it, switches suffer it.',
    ],
    quiz: [
      {
        q: 'For a steady current in an ideal inductor, the self-induced emf is:',
        options: ['Zero', `$Li$`, '$L\\,di/dt$ with a large value', 'Infinite'],
        answer: 0,
        explanation: 'Steady current means $di/dt = 0$, so the emf vanishes.',
      },
      {
        q: 'Current rising at 50 A/s through a 0.10 H inductor produces a back-emf of magnitude:',
        options: ['0.5 V', '5.0 V', '50 V', '500 V'],
        answer: 1,
        explanation: '$|\\mathcal{E}_L| = L|di/dt| = (0.10)(50) = 5.0$ V.',
      },
      {
        q: 'While the current in an inductor is decreasing, the self-induced emf:',
        options: ['Opposes the current', 'Points along the current, trying to keep it going', 'Is zero on average', 'Reverses every half cycle'],
        answer: 1,
        explanation: "Lenz's law opposes the change — here the decrease — so the emf acts to sustain the current.",
      },
      {
        q: 'Opening a switch in an inductive circuit produces a voltage spike because:',
        options: ['The inductor stores net charge', '$|di/dt|$ becomes very large', 'The magnetic field turns instantly into charge', 'The switch resistance is enormous'],
        answer: 1,
        explanation: '$\\mathcal{E}_L = -L\\,di/dt$: forcing the current to die in microseconds multiplies the emf.',
      },
    ],
  },
  // ------------------------------------------------------------------ 30-6
  {
    sectionId: 'hall-ch30-s6',
    readingTime: 6,
    intro: "Connect a battery to a resistor and the current jumps to $V/R$. Insert an inductor and the current crawls: it approaches its final value on the timescale $\\tau = L/R$, then decays on the same clock when the source is removed. One exponential, two stories — growth and decay.",
    objectives: [
      "Write the RL loop rule and solve it for exponential current growth and decay",
      "Use the time constant $\\tau = L/R$ and its 63% and 37% readings",
      "Analyze RL circuits immediately after switching and long after switching",
    ],
    concepts: [
      {
        term: 'RL loop rule',
        kind: 'method',
        statement: "**Growth (battery $\\mathcal{E}$ in series with $R$ and $L$):** $$\\mathcal{E} = iR + L\\,\\frac{di}{dt}.$$ **Decay (source replaced by a plain wire): $L\\,di/dt + iR = 0$.**",
        detail: "The initial slope of the growth curve is $\\mathcal{E}/L$ — the inductor starts as a complete bottleneck. Solving the linear equation gives the exponentials of the next concept.",
      },
      {
        term: 'Growth and decay solutions',
        kind: 'theorem',
        statement: "**Growth:** $i = \\frac{\\mathcal{E}}{R}\\left(1 - e^{-t/\\tau}\\right)$. **Decay:** $i = i_0 e^{-t/\\tau}$. **Time constant:** $\\tau = L/R$ — at $t = \\tau$ the current has climbed to 63% of its final value (or fallen to 37% of its start).**",
        detail: "At $t = 3\\tau$ the current is 95% of the way; by $5\\tau$ the circuit is settled for all practical purposes. A bigger $L$ means more sluggishness; a bigger $R$ means less final current but a shorter clock.",
      },
      {
        term: 'Switch-time intuition',
        kind: 'insight',
        statement: "**At the instant of switching, an inductor holds its current — it acts like an open switch if that current was zero. Long after, with $di/dt = 0$, it acts like a plain wire.**",
        detail: "Continuity of current, not of voltage, is the invariant — this single rule answers most qualitative RL questions instantly.",
      },
      {
        term: "RL Circuits: solution protocol",
        kind: "method",
        statement: "**Solve RL Circuits problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Faraday induction with Lenz's sign as energy conservation; the working equation is $\\Phi_B = \\int\\vec B\\cdot d\\vec A$, $\\mathcal{E} = -N\\,d\\Phi_B/dt$, $U_B = \\tfrac12Li^2$; every substitution must carry its units so the final unit (webers, volts, henries) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$; the minus sign is energy conservation; $\\tau_L = L/R$.",
      },
      {
        term: "RL Circuits: scales and validity",
        kind: "insight",
        statement: "**RL Circuits lives at $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$ and the textbook model holds while the minus sign is energy conservation; $\\tau_L = L/R$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a RL Circuits calculation gives seconds when webers, volts, henries demands meters, or a value orders of magnitude beyond $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Energizing and de-energizing a coil',
        problem: "A series RL circuit has $\\mathcal{E} = 12$ V, $R = 6.0$ Ω, and $L = 3.0$ mH. Find the final current, the time constant, the current at $t = \\tau$ and $3\\tau$ after switch-on, and the current one time constant after the source is shorted out.",
        steps: [
          { label: 'Final current', text: '$i_\\infty = \\mathcal{E}/R = 12/6.0 = 2.0$ A.' },
          { label: 'Time constant', text: '$\\tau = L/R = 0.0030/6.0 = 5.0\\times10^{-4}$ s = 0.50 ms.' },
          { label: 'Growth readings', text: 'At $t = \\tau$: $i = 2.0(1 - e^{-1}) = 1.26$ A (63%). At $t = 3\\tau$: $i = 2.0(1 - e^{-3}) = 1.90$ A (95%).' },
          { label: 'Decay reading', text: 'One time constant after the source is removed: $i = 2.0e^{-1} = 0.74$ A (37%).' },
        ],
        result: 'Final 2.0 A on a 0.50 ms clock: 1.26 A at one time constant, 1.90 A at three; after removal, 0.74 A one time constant later.',
      },
      {
        title: "RL Circuits: Faraday numbers",
        problem: "A $200$-turn coil of area $0.010\\ \\text{m}^2$ sees $B$ rise $0.50\\ \\text{T}$ in $0.10\\ \\text{s}$. Find $|\\mathcal{E}| = N\\,d\\Phi_B/dt$.",
        steps: [
          { label: "Flux change", text: "$\\Delta\\Phi_B = A\\Delta B = 0.010\\times 0.50 = 5.0\\times 10^{-3}\\ \\text{Wb}$ per turn." },
          { label: "EMF", text: "$|\\mathcal{E}| = 200\\times 5.0\\times 10^{-3}/0.10 = 10\\ \\text{V}$." },
          { label: "Sign", text: "Lenz opposes the rise — the induced $B$ points against the increase." },
        ],
        result: "$|\\mathcal{E}| \\approx 10\\ \\text{V}$.",
      },
    ],
    keyTakeaways: [
      'Growth $i = (\\mathcal{E}/R)(1 - e^{-t/\\tau})$ and decay $i = i_0 e^{-t/\\tau}$, with $\\tau = L/R$.',
      '63% settled at one time constant, 95% at three, effectively done at five.',
      'At switch-on the inductor acts open (current keeps its prior value); in steady state it acts like plain wire.',
    ],
    quiz: [
      {
        q: 'For $L = 6.0$ mH and $R = 2.0$ Ω, the RL time constant is:',
        options: ['3.0 ms', '0.33 ms', '12 ms', '1.2 ms'],
        answer: 0,
        explanation: '$\\tau = L/R = 0.0060/2.0 = 3.0\\times10^{-3}$ s.',
      },
      {
        q: 'Immediately after the switch closes on a series RL circuit (initial current zero), the current is:',
        options: [`$\\mathcal{E}/R$`, 'Zero', `$\\mathcal{E}/L$`, 'Limited only by the wiring'],
        answer: 1,
        explanation: 'The inductor current cannot jump; it starts at zero and grows with initial slope $\\mathcal{E}/L$.',
      },
      {
        q: 'Long after the switch closes, the ideal inductor behaves like:',
        options: ['An open circuit', 'A short circuit (plain wire)', 'A resistor of value $L$', 'A battery of emf $\\mathcal{E}$'],
        answer: 1,
        explanation: 'With $di/dt = 0$ the self-induced emf is zero, so only the resistance limits the current.',
      },
      {
        q: 'One time constant after the source is removed from an RL circuit, the current is:',
        options: ['63% of its original value', '37%', '50%', '13.5%'],
        answer: 1,
        explanation: 'The decay is $i_0 e^{-t/\\tau}$, and $e^{-1} \\approx 0.37$.',
      },
    ],
  },
  // ------------------------------------------------------------------ 30-7
  {
    sectionId: 'hall-ch30-s7',
    readingTime: 5,
    intro: "Building current in an inductor takes work: the source must push against the back-emf the whole time the current grows. Where does that work go? Into the magnetic field itself. The coil is a storehouse, and $\\frac12 Li^2$ is its inventory.",
    objectives: [
      "Derive $U_B = \\frac12 Li^2$ from the power balance of an RL circuit",
      "Compute stored energy and the power released during decay",
      "Use the capacitor analogy $\\frac12 q^2/C \\leftrightarrow \\frac12 Li^2$",
    ],
    concepts: [
      {
        term: 'Magnetic energy',
        kind: 'theorem',
        statement: "**An inductor carrying current $i$ stores** $$U_B = \\tfrac12 L i^2.$$",
        detail: "Derivation: multiplying the RL loop rule by $i$ gives $\\mathcal{E}i = i^2R + Li\\,di/dt$. The last term is $dU_B/dt$, so $dU_B = Li\\,di$, and integrating from 0 to $i$ gives $\\frac12 Li^2$. The source heats the resistor and fills the field's store, nothing else.",
      },
      {
        term: 'The capacitor analogy',
        kind: 'insight',
        statement: "**$U_B = \\frac12 Li^2$ mirrors the capacitor's $U_E = \\frac12 q^2/C$: in both, a state variable squared over a geometric constant, fully recoverable.**",
        detail: "An ideal LC circuit shuttles the entire inventory back and forth between the two forms (Chapter 31); a discharging RL circuit cashes it out as heat.",
      },
      {
        term: 'Energy release',
        kind: 'insight',
        statement: "**When the current decays through $R$, $dU_B/dt = -i^2R$: the field's inventory is exactly the heat delivered, $\\int i^2R\\,dt = \\frac12 Li_0^2$.**",
        detail: "That is why interrupting an inductive current arcs across the gap: the field dumps its stored energy into the first available path, however small.",
      },
      {
        term: "Energy Stored in a Magnetic Field: solution protocol",
        kind: "method",
        statement: "**Solve Energy Stored in a Magnetic Field problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Faraday induction with Lenz's sign as energy conservation; the working equation is $\\Phi_B = \\int\\vec B\\cdot d\\vec A$, $\\mathcal{E} = -N\\,d\\Phi_B/dt$, $U_B = \\tfrac12Li^2$; every substitution must carry its units so the final unit (webers, volts, henries) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$; the minus sign is energy conservation; $\\tau_L = L/R$.",
      },
      {
        term: "Energy Stored in a Magnetic Field: scales and validity",
        kind: "insight",
        statement: "**Energy Stored in a Magnetic Field lives at $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$ and the textbook model holds while the minus sign is energy conservation; $\\tau_L = L/R$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Energy Stored in a Magnetic Field calculation gives seconds when webers, volts, henries demands meters, or a value orders of magnitude beyond $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Energy inventory of a coil',
        problem: "A 5.0 mH inductor carries 4.0 A. (a) How much energy is stored? (b) If the circuit is broken and the current is made to decay over 20 ms through a dumping resistor, what average power does the field deliver?",
        steps: [
          { label: 'Stored energy', text: '$U_B = \\frac12 Li^2 = \\frac12 (0.0050)(4.0)^2 = 0.040$ J.' },
          { label: 'Average power', text: 'Over 20 ms the field releases $0.040$ J, so $P_\\text{avg} = 0.040/0.020 = 2.0$ W.' },
          { label: 'Cross-check', text: 'With a 1.0 Ω dump resistor, $\\tau = L/R = 5.0$ ms and the 20 ms span is $4\\tau$ — about 98% of the inventory is spent, matching the average-power estimate.' },
        ],
        result: 'The coil banks 40 mJ and pays it out at about 2 W (instantaneous power $i^2R$ starts at 16 W and falls exponentially).',
      },
      {
        title: "Energy Stored in a Magnetic Field: Faraday numbers",
        problem: "A $300$-turn coil of area $0.010\\ \\text{m}^2$ sees $B$ rise $0.50\\ \\text{T}$ in $0.10\\ \\text{s}$. Find $|\\mathcal{E}| = N\\,d\\Phi_B/dt$.",
        steps: [
          { label: "Flux change", text: "$\\Delta\\Phi_B = A\\Delta B = 0.010\\times 0.50 = 5.0\\times 10^{-3}\\ \\text{Wb}$ per turn." },
          { label: "EMF", text: "$|\\mathcal{E}| = 300\\times 5.0\\times 10^{-3}/0.10 = 15\\ \\text{V}$." },
          { label: "Sign", text: "Lenz opposes the rise — the induced $B$ points against the increase." },
        ],
        result: "$|\\mathcal{E}| \\approx 15\\ \\text{V}$.",
      },
    ],
    keyTakeaways: [
      '$U_B = \\frac12 Li^2$ — derived from the source power splitting into heat and field storage.',
      'The exact twin of the capacitor formula $\\frac12 q^2/C$.',
      'On decay, the field pays out exactly its inventory as $\\int i^2R\\,dt = \\frac12 Li_0^2$.',
    ],
    quiz: [
      {
        q: 'Doubling the current in an inductor multiplies the stored energy by:',
        options: ['4', '2', '1/2', '8'],
        answer: 0,
        explanation: '$U_B \\propto i^2$.',
      },
      {
        q: 'A 0.50 H inductor carrying 2.0 A stores:',
        options: ['0.5 J', '1.0 J', '2.0 J', '4.0 J'],
        answer: 1,
        explanation: '$U_B = \\frac12(0.50)(2.0)^2 = 1.0$ J.',
      },
      {
        q: 'During the decay of an RL circuit, the energy dissipated in the resistor comes from:',
        options: ['The battery', "The wire's own resistance", "The inductor's magnetic field", 'The switch'],
        answer: 2,
        explanation: 'The field energy $\\frac12 Li_0^2$ is exactly what converts to heat as the current dies.',
      },
    ],
  },
  // ------------------------------------------------------------------ 30-8
  {
    sectionId: 'hall-ch30-s8',
    readingTime: 4,
    intro: "Divide the solenoid's stored energy by its volume and the coil disappears from the formula: only the field strength survives. Magnetic energy lives in space itself, at a density $B^2/2\\mu_0$ — a result true for any field configuration, and half of the energy bookkeeping of electromagnetic waves.",
    objectives: [
      "Derive $u_B = B^2/2\\mu_0$ from the solenoid formulas",
      "Evaluate magnetic energy density for laboratory and everyday fields",
      "Combine it with the electric energy density in preparation for electromagnetic waves",
    ],
    concepts: [
      {
        term: 'Magnetic energy density',
        kind: 'theorem',
        statement: "**A magnetic field of magnitude $B$ stores energy at the density** $$u_B = \\frac{B^2}{2\\mu_0}$$ **per unit volume, in J/m³.**",
        detail: "Derivation for a solenoid: $U_B = \\frac12 Li^2$ with $L = \\mu_0 n^2 A l$ and $B = \\mu_0 n i$ gives $U_B = (B^2/2\\mu_0)(Al)$; divide by the volume $Al$. The result depends only on the local field, so it holds for any $\\vec B$, whatever the source — the same logic that freed $u_E = \\frac12\\varepsilon_0 E^2$ from the parallel-plate capacitor.",
      },
      {
        term: 'Field energy, not device energy',
        kind: 'insight',
        statement: "**The energy is stored in space throughout the field region — between transformer cores, around transmission lines, inside an MRI bore — not in the copper wire.**",
        detail: "Wherever $\\vec B$ exists, $u_B$ is banked there; add up $u_B$ over all space and you recover the circuit quantity $\\frac12 Li^2$.",
      },
      {
        term: 'Electric plus magnetic',
        kind: 'insight',
        statement: "**Total field energy density: $u = \\frac12\\varepsilon_0 E^2 + B^2/2\\mu_0$.** In an electromagnetic wave (Chapter 33) the two terms trade as the wave travels, with $E = cB$ making them equal.",
        detail: "Magnitudes hint at why technology stores energy magnetically: a 1 T field holds $4\\times10^5$ J/m³, while air at its breakdown field (about $3\\times10^6$ V/m) supports only about 40 J/m³ of electric energy — a factor of ten thousand.",
      },
      {
        term: "Energy Density of a Magnetic Field: solution protocol",
        kind: "method",
        statement: "**Solve Energy Density of a Magnetic Field problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Faraday induction with Lenz's sign as energy conservation; the working equation is $\\Phi_B = \\int\\vec B\\cdot d\\vec A$, $\\mathcal{E} = -N\\,d\\Phi_B/dt$, $U_B = \\tfrac12Li^2$; every substitution must carry its units so the final unit (webers, volts, henries) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$; the minus sign is energy conservation; $\\tau_L = L/R$.",
      },
      {
        term: "Energy Density of a Magnetic Field: scales and validity",
        kind: "insight",
        statement: "**Energy Density of a Magnetic Field lives at $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$ and the textbook model holds while the minus sign is energy conservation; $\\tau_L = L/R$.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Energy Density of a Magnetic Field calculation gives seconds when webers, volts, henries demands meters, or a value orders of magnitude beyond $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Energy density in an MRI magnet',
        problem: "A clinical MRI scanner maintains a 1.5 T field in a 1.0 m³ region of its bore. (a) Find the energy density and the total field energy. (b) Compare with the electric energy density of air at breakdown, $u_E \\approx 40\\ \\mathrm{J/m^3}$.",
        steps: [
          { label: 'Density', text: '$u_B = B^2/2\\mu_0 = (1.5)^2/(2\\times 1.26\\times10^{-6}) = 8.9\\times10^5$ J/m³.' },
          { label: 'Total energy', text: 'In 1.0 m³: $U \\approx 0.9$ MJ — comparable to the kinetic energy of a 1500 kg car at 35 m/s ($\\frac12 mv^2 \\approx 0.9$ MJ).' },
          { label: 'Comparison', text: 'The magnetic density exceeds the electric one at air breakdown by a factor $8.9\\times10^5/40 \\approx 2\\times10^4$.' },
        ],
        result: 'About $9\\times10^5$ J/m³ — roughly 0.9 MJ in a cubic meter, some twenty thousand times what air can hold electrically.',
      },
      {
        title: "Energy Density of a Magnetic Field: Faraday numbers",
        problem: "A $400$-turn coil of area $0.010\\ \\text{m}^2$ sees $B$ rise $0.50\\ \\text{T}$ in $0.10\\ \\text{s}$. Find $|\\mathcal{E}| = N\\,d\\Phi_B/dt$.",
        steps: [
          { label: "Flux change", text: "$\\Delta\\Phi_B = A\\Delta B = 0.010\\times 0.50 = 5.0\\times 10^{-3}\\ \\text{Wb}$ per turn." },
          { label: "EMF", text: "$|\\mathcal{E}| = 400\\times 5.0\\times 10^{-3}/0.10 = 20\\ \\text{V}$." },
          { label: "Sign", text: "Lenz opposes the rise — the induced $B$ points against the increase." },
        ],
        result: "$|\\mathcal{E}| \\approx 20\\ \\text{V}$.",
      },
    ],
    keyTakeaways: [
      '$u_B = B^2/2\\mu_0$ — true for any field, not just solenoids.',
      'Energy is stored throughout the field region; integrating $u_B$ over space recovers $\\frac12 Li^2$.',
      '$u = \\frac12\\varepsilon_0 E^2 + B^2/2\\mu_0$ is the complete field-energy budget; waves trade the two terms.',
    ],
    quiz: [
      {
        q: 'Doubling $B$ multiplies $u_B$ by:',
        options: ['2', '4', '8', `$\\sqrt{2}$`],
        answer: 1,
        explanation: 'The energy density is quadratic in the field.',
      },
      {
        q: 'The energy density of a 2.0 T field is about:',
        options: ['$1.6\\times10^6$ J/m³', '$3.2\\times10^6$ J/m³', '$8.0\\times10^5$ J/m³', '$1.6\\times10^{-6}$ J/m³'],
        answer: 0,
        explanation: '$u_B = (2.0)^2/(2\\times1.26\\times10^{-6}) = 1.6\\times10^6$ J/m³.',
      },
      {
        q: 'A 1 T magnetic energy density versus the electric energy density of air at its breakdown field:',
        options: ['The magnetic value is some 10⁴ times larger', 'The electric value is larger', 'They are equal', 'They cannot be compared'],
        answer: 0,
        explanation: '$4\\times10^5$ J/m³ versus about 40 J/m³ — four orders of magnitude.',
      },
    ],
  },
  // ------------------------------------------------------------------ 30-9
  {
    sectionId: 'hall-ch30-s9',
    readingTime: 6,
    intro: "Bring two coils near each other and a changing current in one induces an emf in the other — no wires, no charges crossing, just field threading turns. The coupling constant between them is the mutual inductance, and its deepest property is a symmetry: M is the same measured either way. Transformers, wireless chargers, and every metal detector live on this number.",
    objectives: [
      "Define mutual inductance via $\\mathcal{E}_2 = -M\\,di_1/dt$ and compute it for coaxial solenoids",
      "State and use the reciprocity theorem $M_{12} = M_{21}$",
      "Connect coupling to the energy stored in a pair of coupled coils",
    ],
    concepts: [
      {
        term: 'Mutual inductance',
        kind: 'definition',
        statement: "**If current $i_1$ in coil 1 produces flux $\\Phi_{21}$ through each of the $N_2$ turns of coil 2, then $M = N_2\\Phi_{21}/i_1$ and a changing $i_1$ induces** $$\\mathcal{E}_2 = -M\\,\\frac{di_1}{dt}.$$ **Unit: the henry.**",
        detail: "$M$ depends only on the geometry, separation, and orientation of the pair — never on the currents or their rate of change. It is the two-coil generalization of self-inductance.",
      },
      {
        term: 'Reciprocity',
        kind: 'theorem',
        statement: "**$M_{12} = M_{21}$: the mutual inductance is identical in both directions.** Drive either coil and measure the emf in the other; you get the same $M$. The proof — from energy conservation — is the masters section below.",
        detail: "This is not obvious: the flux pattern coil 1 makes in coil 2 looks nothing like the reverse. That one number describes both directions is a deep symmetry of electromagnetism.",
      },
      {
        term: 'Coupled solenoids',
        kind: 'theorem',
        statement: "**A coil of $N_2$ turns wrapped tightly around a long inner solenoid ($n_1$ turns per meter, cross-section $A$) has mutual inductance** $$M = \\mu_0 n_1 N_2 A.$$",
        detail: "Only the inner solenoid's field — uniform and contained — contributes; the outer coil's turns catch all of it, each threading $\\Phi = \\mu_0 n_1 i_1 A$. Ideal nested solenoids are perfectly coupled: $M = \\sqrt{L_1 L_2}$.",
      },
      {
        term: 'Coupling coefficient',
        kind: 'insight',
        statement: "**Define $k = M/\\sqrt{L_1 L_2}$; then $0 \\le k \\le 1$, with $k = 1$ only when every field line from one coil links every turn of the other.**",
        detail: "Iron-core transformers reach $k \\approx 0.95$–0.99; well-aligned coaxial coils, $k \\approx 0.5$–0.9; distant loose coils, $k \\ll 1$. Wireless charging pads and RFID readers live on moderate $k$; leakage flux is what makes real transformers imperfect.",
      },
      {
        term: "Mutual Induction: solution protocol",
        kind: "method",
        statement: "**Solve Mutual Induction problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is Faraday induction with Lenz's sign as energy conservation; the working equation is $\\Phi_B = \\int\\vec B\\cdot d\\vec A$, $\\mathcal{E} = -N\\,d\\Phi_B/dt$, $U_B = \\tfrac12Li^2$; every substitution must carry its units so the final unit (webers, volts, henries) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\Phi_B\\sim 10^{-4}$--$10^{-2}\\ \\text{Wb}$; $L\\sim \\text{mH}$--$\\text{H}$; the minus sign is energy conservation; $\\tau_L = L/R$.",
      },
    ],
    examples: [
      {
        title: 'Coaxial solenoid pair',
        problem: "A long solenoid with $n_1 = 1000$ turns/m carries a current rising at 40 A/s. A close-wrapped outer coil of $N_2 = 50$ turns encircles the same cross-section, $A = 4.0\\ \\mathrm{cm^2}$. Find $M$ and the emf induced in the outer coil.",
        steps: [
          { label: 'Mutual inductance', text: '$M = \\mu_0 n_1 N_2 A = (4\\pi\\times10^{-7})(10^3)(50)(4.0\\times10^{-4}) = 2.5\\times10^{-5}$ H = 25 μH.' },
          { label: 'Induced emf', text: '$|\\mathcal{E}_2| = M\\,|di_1/dt| = (2.5\\times10^{-5})(40) = 1.0\\times10^{-3}$ V.' },
          { label: 'Reciprocity', text: 'Driving the outer coil instead at 40 A/s would induce the same 1.0 mV in the inner solenoid — $M_{12} = M_{21}$.' },
        ],
        result: '$M = 25\\ \\mu$H, and the ramping inner current drives 1.0 mV around the outer coil (either way).',
      },
      {
        title: "Mutual Induction: Faraday numbers",
        problem: "A $200$-turn coil of area $0.010\\ \\text{m}^2$ sees $B$ rise $0.50\\ \\text{T}$ in $0.10\\ \\text{s}$. Find $|\\mathcal{E}| = N\\,d\\Phi_B/dt$.",
        steps: [
          { label: "Flux change", text: "$\\Delta\\Phi_B = A\\Delta B = 0.010\\times 0.50 = 5.0\\times 10^{-3}\\ \\text{Wb}$ per turn." },
          { label: "EMF", text: "$|\\mathcal{E}| = 200\\times 5.0\\times 10^{-3}/0.10 = 10\\ \\text{V}$." },
          { label: "Sign", text: "Lenz opposes the rise — the induced $B$ points against the increase." },
        ],
        result: "$|\\mathcal{E}| \\approx 10\\ \\text{V}$.",
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'Reciprocity: why M₁₂ = M₂₁ — symmetry from energy conservation',
        blocks: [
          {
            kind: 'para',
            body: "Two stationary coils, fixed relative positions. Define $M_{21}$ by $\\mathcal{E}_2 = -M_{21}\\,di_1/dt$ (drive coil 1, read coil 2) and $M_{12}$ by $\\mathcal{E}_1 = -M_{12}\\,di_2/dt$ (drive 2, read 1). Nothing in the definitions promises equality — the two flux patterns look completely different from the two ends. Yet experiments always return one number. Energy conservation forces it.",
          },
          {
            kind: 'theorem',
            heading: 'Neumann reciprocity theorem',
            body: "For any two stationary filamentary circuits in vacuum (or in any linear magnetic medium), $$M_{12} = M_{21}.$$ The mutual inductance is a property of the pair, not of an order of measurement.",
          },
          {
            kind: 'proof',
            heading: 'The two-assembly argument',
            body: "Bring the system from rest to final currents $(I_1, I_2)$ along two different schedules and demand the same stored energy — legitimate because the magnetic field, and hence the energy, is determined by the final currents alone. **Schedule A:** first raise $i_1: 0 \\to I_1$ with coil 2 open. No current flows in coil 2, so only coil 1's source works: $W_1 = \\frac12 L_1 I_1^2$. Then raise $i_2: 0 \\to I_2$ with coil 1 closed at $I_1$. Coil 2's source supplies $\\frac12 L_2 I_2^2$, but coil 1's source must also hold its current against the emf $\\mathcal{E}_1 = -M_{12}\\,di_2/dt$ induced by the changing $i_2$: the extra power is $-\\mathcal{E}_1 I_1 = M_{12} I_1\\,di_2/dt$, an extra work $M_{12} I_1 I_2$ over the ramp. Total: $$U_A = \\tfrac12 L_1 I_1^2 + \\tfrac12 L_2 I_2^2 + M_{12} I_1 I_2.$$ **Schedule B:** raise $i_2$ first, then $i_1$; the same bookkeeping gives $$U_B = \\tfrac12 L_1 I_1^2 + \\tfrac12 L_2 I_2^2 + M_{21} I_1 I_2.$$ Same final currents, same fields, so $U_A = U_B$; subtracting, $M_{12} = M_{21}$.",
          },
          {
            kind: 'derivation',
            heading: 'The Neumann formula',
            body: "Applying Biot–Savart to coil 1 and integrating the resulting flux over coil 2's turns yields the double line integral $$M = \\frac{\\mu_0}{4\\pi}\\oint_{1}\\oint_{2}\\frac{d\\vec s_1\\cdot d\\vec s_2}{|\\vec r_1 - \\vec r_2|},$$ which is manifestly symmetric under $1 \\leftrightarrow 2$ — reciprocity in one line of algebra. For the coaxial solenoid pair of this section only the interior field survives the integral, and either evaluation order returns $M = \\mu_0 n_1 N_2 A$.",
          },
          {
            kind: 'remark',
            heading: 'How coupled can two coils be?',
            body: "Writing $k = M/\\sqrt{L_1 L_2}$, a Cauchy–Schwarz-type bound on the flux overlap gives $0 \\le k \\le 1$. Perfect coupling ($k = 1$) requires every field line produced by either coil to link every turn of the other — the ideal-transformer dream; leakage flux is what pushes $k$ below 1 in real devices. Note the corollary: two perfectly coupled ideal coils share one common flux, which is exactly what makes the ideal transformer of Chapter 31 possible.",
          },
          {
            kind: 'application',
            heading: 'Ignition coil',
            body: "An automotive ignition coil is mutual inductance weaponized: a 12 V battery drives a few hundred primary turns through a switching transistor; interrupting that current (a large $di_1/dt$) induces in the roughly 20,000-turn secondary an emf of 15–30 kV, and the spark plug fires. The turns ratio sets the voltage step-up, while $k \\approx 0.95$ sets the efficiency: nearly all of the primary's stored magnetic energy $\\frac12 L_1 i_1^2$ reappears across the spark gap. The same physics scaled down runs switch-mode power supplies.",
          },
        ],
      },
    ],
    keyTakeaways: [
      '$\\mathcal{E}_2 = -M\\,di_1/dt$ with $M = N_2\\Phi_{21}/i_1$ in henrys — geometry only.',
      '$M_{12} = M_{21}$ always; nested ideal solenoids give $M = \\mu_0 n_1 N_2 A$ and $k = 1$.',
      'Coupling $k = M/\\sqrt{L_1L_2} \\le 1$ measures leakage; transformers and wireless chargers are engineered $k$.',
    ],
    quiz: [
      {
        q: 'The mutual inductance of a coil pair depends on:',
        options: ['The currents carried', 'Which coil is used as the primary', 'The geometry, separation, and orientation of the pair', 'The winding resistances'],
        answer: 2,
        explanation: '$M$ is fixed by how much of one coil\'s flux threads the other — pure geometry.',
      },
      {
        q: 'With $M = 25\\ \\mu$H and $di_1/dt = 40$ A/s, the emf magnitude in the second coil is:',
        options: ['0.5 mV', '2.0 mV', '1.0 mV', '1.0 V'],
        answer: 2,
        explanation: '$|\\mathcal{E}_2| = M|di_1/dt| = (2.5\\times10^{-5})(40) = 1.0$ mV.',
      },
      {
        q: 'The reciprocity theorem of mutual inductance states:',
        options: [`$M_{12}\\,M_{21} = 1$`, `$M_{12} = M_{21}$`, `$M_{12} + M_{21} = L_1 + L_2$`, '$M_{12} = \\sqrt{L_1 L_2}$ for every geometry'],
        answer: 1,
        explanation: 'Driving either coil and reading the other gives the same mutual inductance.',
      },
      {
        q: 'For transformer-grade coupling, the coefficient $k = M/\\sqrt{L_1 L_2}$ is:',
        options: ['Near zero', 'Near one', 'Exactly one-half', 'Undefined when iron is present'],
        answer: 1,
        explanation: 'An iron core funnels nearly all flux through both windings: $k \\approx 0.95$–0.99.',
      },
    ],
  },
]
