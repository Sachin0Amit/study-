import type { SectionContent } from '../library'

// ============================================================================
// The Electronics Master Library — Chapter 25: Bipolar Junction
// Transistors in Depth. Sedra/Smith, "Microelectronic Circuits" 8e,
// Chapter 6 (pp. 304–364): npn and pnp structure with operating modes,
// the exponential collector law and Ebers-Moll view, alpha-beta relations,
// the Early effect, biasing circuits, and the hybrid-pi small-signal model.
// Worked-problem numbers follow the book; arithmetic re-verified. Math is
// LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh25Content: SectionContent[] = [
  // ------------------------------------------------------------------ 25.1
  {
    sectionId: 'ece-e-devices-s37',
    readingTime: 7,
    intro: 'The npn transistor of Figure 6.1 stacks emitter, base and collector as n-p-n silicon, with a thin lightly doped base between a heavily doped emitter and a large collector. Forward bias on the emitter-base junction launches electrons toward the collector while reverse bias on the collector-base junction sweeps them in — the active mode that amplifies. The four combinations of junction bias define cutoff, active, saturation and inverse modes, and the terminal voltages always betray which one holds.',
    objectives: [
      'Describe npn and pnp structures with doping and geometry roles of each region',
      'Assign the operating mode from emitter-base and collector-base bias polarities',
      'Explain active-mode minority-carrier flow from emitter to collector',
    ],
    concepts: [
      {
        term: 'NPN and PNP stacks',
        kind: 'definition',
        statement: 'The npn device layers n-type emitter, p-type base and n-type collector, while pnp **mirrors every polarity**, tagged `npn-pnp`. Emitters dope heavily for injection, bases stay thin and light for transit, collectors grow large for heat.',
        detail: 'Figure 6.1 draws both with the circuit symbols. High beta wants thin base width $W$ with low $N_{A}/N_{D}$ ratio — Section 6.1 derives gain from exactly this profile.',
      },
      {
        term: 'Four operating modes',
        kind: 'definition',
        statement: 'Each junction is forward or reverse, giving cutoff, active, saturation and **inverse-active** modes, tagged `four-modes`. Amplifiers live in active; switches traverse cutoff and saturation; inverse mode is a weak accident of symmetry.',
        detail: 'Table 6.1 in the book organizes the four by junction bias. Reading $V_{BE}$ and $V_{BC}$ polarities off the nodes is the fastest mode test on any schematic.',
      },
      {
        term: 'Active-mode carrier flow',
        kind: 'insight',
        statement: 'Forward emitter bias injects electrons that diffuse across the thin base, and the reverse collector field **collects nearly all of them**, tagged `minority-flow`. Figure 6.3 traces this dominant electron current against the small hole backflow into the base.',
        detail: 'Only about one carrier in a hundred recombines in the base at $\\beta = 100$. This minority-carrier voyage is why the BJT is called bipolar despite one carrier doing the work.',
      },
      {
        term: 'Mode test by voltages',
        kind: 'method',
        statement: 'For npn, $V_{B} > V_{E}$ forward-biases the emitter junction and $V_{C} > V_{B}$ reverse-biases the collector junction, fixing **active mode**, tagged `VC-above-VB`. Example 6.1 verifies $+2$ V above $0.69$ V before trusting its active models.',
        detail: 'Collector below base means both junctions forward and saturation follows. Checking node order first prevents every mis-modeling error that follows.',
      },
      {
        term: 'Saturation versus active',
        kind: 'insight',
        statement: 'Saturation floods the base with stored charge for a small $V_{CEsat}$ near **$0.2$ V**, while active keeps the collector junction reverse for controlled gain, tagged `VCEsat-02`. Switches accept the storage delay; amplifiers refuse it.',
        detail: 'Example 6.3 drives $9.8$ mA at $V_{CEsat} = 0.2$ V with forced beta near ten. Edge of saturation at $0.3$ V is the design boundary between the two worlds.',
      },
    ],
    figures: [
      {
        caption: 'NPN in active mode after Figures 6.1 and 6.3: forward emitter-base junction injecting electrons across the thin base into the reverse-biased collector, with $V_{C} > V_{B} > V_{E}$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NPN structure with active mode carrier flow"><title>NPN active mode carrier flow</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">NPN active mode: emitter to collector</text><g stroke="currentColor" stroke-width="2" fill="none"><rect x="120" y="120" width="110" height="130" rx="4"/><rect x="230" y="120" width="50" height="130" rx="4"/><rect x="280" y="120" width="200" height="130" rx="4"/><line x1="175" y1="160" x2="420" y2="160"/><line x1="175" y1="190" x2="420" y2="190"/><line x1="175" y1="220" x2="420" y2="220"/><polygon points="420,160 408,154 408,166" fill="currentColor" stroke="none"/><polygon points="420,190 408,184 408,196" fill="currentColor" stroke="none"/><polygon points="420,220 408,214 408,226" fill="currentColor" stroke="none"/><line x1="255" y1="250" x2="255" y2="290"/><line x1="175" y1="250" x2="120" y2="290"/><line x1="380" y1="250" x2="440" y2="290"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="158" y="192" font-family="sans-serif">E n</text><text x="244" y="192" font-family="sans-serif">B p</text><text x="368" y="192" font-family="sans-serif">C n</text><text x="440" y="164" font-family="sans-serif">electrons swept to C</text><text x="150" y="310" font-family="sans-serif">VE lowest</text><text x="232" y="310" font-family="sans-serif">VB mid</text><text x="418" y="310" font-family="sans-serif">VC highest</text><text x="120" y="90" font-family="sans-serif">EBJ forward launches, CBJ reverse collects</text><text x="120" y="330" font-family="sans-serif">Thin light base: most electrons survive transit</text></g></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Naming modes from node voltages',
        problem: 'An npn transistor shows (a) $V_{E} = 0$ V, $V_{B} = 0.7$ V, $V_{C} = 4$ V; (b) $V_{E} = 0$ V, $V_{B} = 0.8$ V, $V_{C} = 0.1$ V; (c) all terminals at $0$ V. Name each mode.',
        steps: [
          { label: 'Step 1: Test case (a)', text: 'Emitter-base forward ($0.7$ V) with collector-base reverse ($4 - 0.7 > 0$): active mode, the amplifier regime.' },
          { label: 'Step 2: Test case (b)', text: 'Emitter-base forward ($0.8$ V) with collector-base forward ($0.1 - 0.8 < 0$): both junctions forward means saturation.' },
          { label: 'Step 3: Test case (c) and split currents', text: 'No forward bias anywhere means cutoff with zero supply currents; in active a $1$ mA collector at $\\beta = 100$ then splits:```python\nbeta = 100.0\nIC = 1.0\nIB = IC / beta\nIE = IC + IB\nprint(IB)\nprint(IE)\n```\nThe printout gives $0.01$ mA of base and $1.01$ mA of emitter current.' },
        ],
        result: '(a) active, (b) saturation, (c) cutoff; active $1$ mA needs $10$ $\\mu$A of base.',
      },
      {
        title: 'Verifying active operation',
        problem: 'Example 6.1 runs $I_{C} = 1$ mA through $R_{C} = 3$ k$\\Omega$ from $5$ V with $V_{BE} = 0.69$ V and grounded emitter. Confirm the mode and find the base resistance that replaces a $10$ $\\mu$A ideal source.',
        steps: [
          { label: 'Step 1: Find the collector voltage', text: '$V_{C} = 5 - 3 \\times 1 = +2$ V, above $V_{B} = 0.69$ V, so the collector junction is reverse: active confirmed.' },
          { label: 'Step 2: Size the base resistor', text: '$R_{B} = (5 - 0.69)/10$ $\\mu$A $= 431$ k$\\Omega$ from the $5$ V rail delivers the same $10$ $\\mu$A.' },
          { label: 'Step 3: State the margin', text: '$V_{CE} = 2$ V stands far above the $0.3$ V saturation edge, so resistor tolerance cannot push this stage out of active.' },
        ],
        result: 'Active confirmed ($V_{C} > V_{B}$); $R_{B} = 431$ k$\\Omega$; $V_{CE} = +2$ V.',
      },
    ],
    keyTakeaways: [
      'NPN stacks n-p-n with thin lightly doped base; pnp mirrors all polarities.',
      'Junction bias pairs select cutoff, active, saturation or inverse mode.',
      'Active npn needs $V_{B} > V_{E}$ and $V_{C} > V_{B}$; electrons diffuse base then collect.',
      'Saturation parks near $V_{CEsat} = 0.2$ V with stored base charge; edge of saturation is $0.3$ V.',
    ],
    quiz: [
      {
        q: 'An npn device with $V_{E} = 0$ V, $V_{B} = 0.7$ V, $V_{C} = 5$ V operates in:',
        options: ['Cutoff', 'Active', 'Inverse active', 'Saturation'],
        answer: 1,
        explanation: 'Step 1 — Given: the three node voltages. Step 2 — Rule: emitter junction forward ($0.7$ V) and collector junction reverse ($4.3$ V). Step 3 — Match: forward plus reverse is the active pair. Step 4 — Conclude: the stage amplifies with collector collecting.',
      },
      {
        q: 'Both junctions forward on an npn device means:',
        options: ['Breakdown', 'Active mode', 'Cutoff', 'Saturation'],
        answer: 3,
        explanation: 'Step 1 — Given: $V_{BE} > 0$ and $V_{BC} > 0$. Step 2 — Rule: the mode table maps forward-forward to saturation. Step 3 — Physics: the collector now injects too, flooding the base. Step 4 — Conclude: $V_{CE}$ parks near $0.2$ V with storage delay.',
      },
      {
        q: 'High $\\beta$ wants the base to be:',
        options: ['Thin and lightly doped with a heavily doped emitter', 'Metallic', 'Wider than the collector', 'Thick and heavily doped'],
        answer: 0,
        explanation: 'Step 1 — Given: gain is survivors over recombined. Step 2 — Rule: thin width shortens transit and light doping cuts recombination. Step 3 — Emitter: heavy doping favors electron injection over hole backflow. Step 4 — Conclude: geometry plus doping ratio set $\\beta$.',
      },
      {
        q: 'The pnp transistor in active mode has:',
        options: ['No saturation mode', 'Electron-dominated flow', 'All currents reversed from npn with $|V_{EB}|$, $|V_{EC}|$ playing the roles', 'Identical voltage polarities to npn'],
        answer: 2,
        explanation: 'Step 1 — Given: pnp mirrors npn doping. Step 2 — Rule: every voltage and current flips sign. Step 3 — Flow: holes diffuse emitter to collector instead of electrons. Step 4 — Conclude: magnitudes obey the same laws with $|V_{EB}|$ as the control.',
      },
    ],
  },

  // ------------------------------------------------------------------ 25.2
  {
    sectionId: 'ece-e-devices-s38',
    readingTime: 9,
    intro: 'The collector current obeys $i_{C} = I_{S}e^{v_{BE}/V_{T}}$ with $I_{S}$ near $10^{-15}$ A, so $0.69$ V supports $1$ mA in Example 6.1 and each decade of current costs $60$ mV. Terminal currents split by $\\alpha = \\beta/(\\beta + 1)$, the Ebers-Moll model unifies all modes through coupled diodes, and the Early effect tilts every curve toward the intercept $-V_{A}$. Exercise 6.44 prices that tilt: $V_{A} = 40$ V gives $r_{o} = 40$ k$\\Omega$ at $1$ mA and $400$ k$\\Omega$ at $100$ $\\mu$A.',
    objectives: [
      'Apply $i_{C} = I_{S}e^{v_{BE}/V_{T}}$ to find $V_{BE}$, $I_{S}$ and decade shifts',
      'Convert between $\\alpha$ and $\\beta$ and split $I_{C}$, $I_{B}$, $I_{E}$',
      'State the Ebers-Moll form and compute $r_{o} = V_{A}/I_{C}$ from the Early voltage',
    ],
    concepts: [
      {
        term: 'Exponential collector law',
        kind: 'law',
        statement: 'Active collector current is **$i_{C} = I_{S}e^{v_{BE}/V_{T}}$** with $I_{S}$ near $10^{-15}$ A for discrete devices, tagged `IC-exp`. Example 6.1 inverts it to $V_{BE} = 0.69$ V at $1$ mA, and Exercise 6.1 shifts to $0.64$ V at $0.1$ mA and $0.76$ V at $10$ mA.',
        detail: 'The law mirrors the diode equation because the emitter-base junction is a diode. Modern IC devices with smaller areas show larger $v_{BE}$ — $0.8$ V at $1$ mA in Design D6.12.',
      },
      {
        term: 'Alpha-beta current split',
        kind: 'theorem',
        statement: 'With $i_{C} = \\alpha i_{E}$ and $i_{C} = \\beta i_{B}$, the gains obey **$\\alpha = \\beta/(\\beta + 1)$** and $\\beta = \\alpha/(1 - \\alpha)$, tagged `alpha-beta`. The $\\beta = 50$ to $150$ spread maps to $\\alpha = 0.980$ to $0.993$, and $\\alpha = 0.99$ inverts to $\\beta = 99$.',
        detail: 'Exercises 6.2 and 6.4 drill exactly these conversions with base currents $0.1$ and $0.2$ mA at $10$ mA of collector. Example 6.3 measures $\\beta = 100$ from $14.46$ $\\mu$A of base against $1.460$ mA of emitter.',
      },
      {
        term: 'Ebers-Moll unified view',
        kind: 'theorem',
        statement: 'Two coupled diodes with **reciprocal saturation currents** describe every mode in one model, tagged `ebers-moll`. Forward and reverse transporter generators $\\alpha_{F}i_{DE}$ and $\\alpha_{R}i_{DC}$ carry the coupling, and reciprocity ties $\\alpha_{F}I_{ES} = \\alpha_{R}I_{CS}$.',
        detail: 'Active mode keeps only the forward generator; saturation turns both on. The model also predicts the weak inverse beta from reverse operation through the asymmetric profile.',
      },
      {
        term: 'Early effect and VA',
        kind: 'theorem',
        statement: 'Base-width modulation tilts $i_{C}$ upward with slope **$I_{C}/V_{A}$**, extrapolating to $-V_{A}$ on the voltage axis, tagged `early-VA`. Output resistance follows as $r_{o} = V_{A}/I_{C}$: $40$ k$\\Omega$ at $1$ mA and $400$ k$\\Omega$ at $100$ $\\mu$A for $V_{A} = 40$ V.',
        detail: 'Figure 6.12 extends measured curves to their common intercept. Larger $V_{A}$ means flatter curves and stiffer current sources — the BJT analog of MOSFET $\\lambda$.',
      },
      {
        term: 'Saturation currents IS, ISE, ISB',
        kind: 'notation',
        statement: 'The transport $I_{S}$ scales the collector law, while **$I_{SE}$ and $I_{SB}$** scale the base components from emitter and collector injection, tagged `ISE-ISB`. Exercise 6.5 extracts $I_{SE} = 1.01 \\times 10^{-16}$ A beside $I_{S} = 10^{-16}$ A at $1$ mA.',
        detail: 'Writing $i_{B} = i_{C}/\\beta$ as a difference of these components exposes recombination versus back-injection. Their ratio tracks $\\beta$ across bias.',
      },
    ],
    figures: [
      {
        caption: 'Common-emitter output characteristics after Figure 6.12: near-flat $i_{C}$ curves stepping with $i_{B}$, each tilted by the Early effect toward the shared intercept $-V_{A}$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BJT output characteristics with Early effect"><title>BJT output curves and Early voltage</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Output curves tilt toward minus VA</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="190" y1="270" x2="650" y2="270"/><line x1="190" y1="270" x2="190" y2="70"/><line x1="110" y1="270" x2="190" y2="270" stroke-dasharray="5 4"/><line x1="110" y1="270" x2="650" y2="252"/><line x1="110" y1="270" x2="650" y2="232"/><line x1="110" y1="270" x2="650" y2="212"/><line x1="110" y1="270" x2="650" y2="192"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="652" y="274" font-family="sans-serif">vCE</text><text x="194" y="86" font-family="sans-serif">iC</text><text x="560" y="242" font-family="sans-serif">larger iB higher</text><text x="96" y="292" font-family="sans-serif">minus VA</text><text x="200" y="296" font-family="sans-serif">zero</text><text x="300" y="120" font-family="sans-serif">slope IC over VA gives ro</text><text x="96" y="316" font-family="sans-serif">At VA 40 V: ro 40 k at 1 mA, 400 k at 0.1 mA</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Alpha, beta and IS from terminals (Sedra Exercise 6.3)',
        problem: 'An npn BJT shows $I_{B} = 14.46$ $\\mu$A, $I_{E} = 1.460$ mA and $V_{BE} = 0.7$ V. Find $\\alpha$, $\\beta$ and $I_{S}$ with $V_{T} = 25$ mV.',
        steps: [
          { label: 'Step 1: Subtract to the collector', text: '$I_{C} = I_{E} - I_{B} = 1.460 - 0.01446 = 1.44554$ mA, the current the exponential law must explain.' },
          { label: 'Step 2: Ratio to both gains', text: '$\\beta = I_{C}/I_{B} = 99.97 \\approx 100$ and $\\alpha = \\beta/(\\beta + 1) = 0.99$ — the book answers exactly.' },
          { label: 'Step 3: Invert the exponential', text: '$I_{S} = I_{C}e^{-0.7/0.025}$, evaluated:```python\nimport math\nIC = 1.44554e-3\nVBE = 0.7\nVT = 0.025\nIS = IC / math.exp(VBE / VT)\nprint(IS)\n```\nThe printout $1.0 \\times 10^{-15}$ A matches the Example 6.1 process constant.' },
        ],
        result: '$\\alpha = 0.99$, $\\beta = 100$, $I_{S} = 10^{-15}$ A.',
      },
      {
        title: 'Early resistance at two currents (Sedra Exercise 6.44)',
        problem: 'A BJT has Early voltage $V_{A} = 40$ V. Find $r_{o}$ at $I_{C} = 1$ mA and at $100$ $\\mu$A, and state the $v_{BE}$ values at $0.1$ and $10$ mA for a $0.7$ V at $1$ mA device.',
        steps: [
          { label: 'Step 1: Divide VA by current', text: 'At $1$ mA, $r_{o} = 40/0.001 = 40$ k$\\Omega$; at $0.1$ mA, $r_{o} = 40/0.0001 = 400$ k$\\Omega$ — resistance scales inversely with bias.' },
          { label: 'Step 2: Shift a decade each way', text: '$v_{BE} = 0.7 + 25\\ln(0.1) = 0.642$ V at $0.1$ mA and $0.7 + 25\\ln(10) = 0.758$ V at $10$ mA.' },
          { label: 'Step 3: Round to book answers', text: '$0.64$ V and $0.76$ V with $40$ k$\\Omega$ and $400$ k$\\Omega$ — Exercise 6.1 and 6.44 answers exactly.' },
        ],
        result: '$r_{o} = 40$ k$\\Omega$ ($1$ mA), $400$ k$\\Omega$ ($0.1$ mA); $v_{BE} = 0.64$ V, $0.76$ V.',
      },
    ],
    keyTakeaways: [
      '$i_{C} = I_{S}e^{v_{BE}/V_{T}}$ with $I_{S} = 10^{-15}$ A; decades cost $60$ mV ($0.64$, $0.70$, $0.76$ V).',
      '$\\alpha = \\beta/(\\beta + 1)$: $\\beta$ $50$ to $150$ means $\\alpha$ $0.980$ to $0.993$.',
      'Ebers-Moll couples two diodes with $\\alpha_{F}I_{ES} = \\alpha_{R}I_{CS}$ across all modes.',
      '$r_{o} = V_{A}/I_{C}$: $40$ k$\\Omega$ at $1$ mA, $400$ k$\\Omega$ at $0.1$ mA for $V_{A} = 40$ V.',
    ],
    quiz: [
      // PYQ-pattern: base emitter voltage decade shift (rephrased, values changed)
      {
        q: 'A BJT at $0.70$ V and $1$ mA moves to $10$ mA. Its new $v_{BE}$ is about:',
        options: ['$0.64$ V', '$1.40$ V', '$0.76$ V', '$0.70$ V, drops never move'],
        answer: 2,
        explanation: 'Step 1 — Given: tenfold current rise. Step 2 — Rule: $\\Delta V = V_{T}\\ln(10) \\approx 60$ mV. Step 3 — Compute: $0.70 + 0.058 = 0.758$ V. Step 4 — Conclude: $0.76$ V, the gentle log slope shared with diodes.',
      },
      {
        q: 'For $\\alpha = 0.98$ the corresponding $\\beta$ and $10$ mA base current are:',
        options: ['$49$ and $0.2$ mA', '$98$ and $0.1$ mA', '$50$ and $0.5$ mA', '$9.8$ and $1.0$ mA'],
        answer: 0,
        explanation: 'Step 1 — Given: $\\alpha = 0.98$. Step 2 — Rule: $\\beta = \\alpha/(1 - \\alpha) = 0.98/0.02$. Step 3 — Compute: $\\beta = 49$ and $I_{B} = 10/49 = 0.204$ mA. Step 4 — Conclude: near-unity $\\alpha$ still means modest $\\beta$.',
      },
      {
        q: 'Ebers-Moll reciprocity states:',
        options: ['$I_{S}$ is temperature independent', 'Saturation needs no base current', '$\\alpha_{F} = \\beta_{R}$ always', `$\\alpha_{F}I_{ES} = \\alpha_{R}I_{CS}$`],
        answer: 3,
        explanation: 'Step 1 — Given: forward and reverse transporter pairs. Step 2 — Rule: one silicon profile serves both directions. Step 3 — Form: the cross-scaled saturation currents match. Step 4 — Conclude: a single model covers active, saturation and inverse modes.',
      },
      {
        q: 'With $V_{A} = 40$ V, doubling $I_{C}$ from $1$ mA to $2$ mA:',
        options: ['Doubles $r_{o}$ to $80$ k$\\Omega$', 'Halves $r_{o}$ to $20$ k$\\Omega$', 'Leaves $r_{o}$ at $40$ k$\\Omega$', 'Zeroes $r_{o}$'],
        answer: 1,
        explanation: 'Step 1 — Given: $r_{o} = V_{A}/I_{C}$. Step 2 — Rule: resistance is inverse in bias current. Step 3 — Compute: $40/0.002 = 20$ k$\\Omega$. Step 4 — Conclude: hotter bias stiffens current less — gain versus headroom again.',
      },
    ],
  },

  // ------------------------------------------------------------------ 25.3
  {
    sectionId: 'ece-e-devices-s39',
    readingTime: 9,
    intro: 'Biasing a BJT means planting $I_{C}$ with $V_{CE}$ parked safely above $0.3$ V, and Example 6.2 shows the discrete recipe: emitter degeneration $R_{E}$ stabilizes the current while $R_{C}$ sets the collector voltage. With $\\pm 15$ V rails, $\\beta = 100$ and $0.7$ V at $1$ mA, the design lands $2$ mA at $V_{C} = +5$ V through $R_{C} = 5$ k$\\Omega$ and $R_{E} = 7.07$ k$\\Omega$. Fixed base resistance works too, but its $Q$ rides every $\\beta$ spread — the stability factor story of this section.',
    objectives: [
      'Design emitter-degenerated bias for target $I_{C}$ and $V_{C}$ following Example 6.2',
      'Analyze fixed bias and quantify its $\\beta$ sensitivity versus degeneration',
      'Test the saturation boundary with maximum $R_{C}$ and forced-beta checks',
    ],
    concepts: [
      {
        term: 'Emitter-degeneration bias',
        kind: 'method',
        statement: 'Resistor $R_{E}$ feeds output back to input: rising $I_{C}$ lifts $V_{E}$ and pinches **$V_{BE}$**, stabilizing the point, tagged `RE-stabilize`. Example 6.2 pairs $R_{C} = 5$ k$\\Omega$ with $R_{E} = 7.07$ k$\\Omega$ for $2$ mA at $V_{C} = +5$ V.',
        detail: 'The $0.717$ V $V_{BE}$ at $2$ mA puts $V_{E}$ at $-0.717$ V against the $-15$ V rail. Larger $R_{E}$ steadies more but burns headroom — the eternal bias compromise.',
      },
      {
        term: 'Fixed base bias',
        kind: 'method',
        statement: 'One resistor $R_{B}$ from supply to base sets **$I_{B} = (V_{CC} - V_{BE})/R_{B}$** and $I_{C} = \\beta I_{B}$, tagged `fixed-RB`. Example 6.1 needs $431$ k$\\Omega$ for $10$ $\\mu$A from $5$ V.',
        detail: 'Every $\\beta$ doubling doubles $I_{C}$ here, so production spread walks $Q$ into saturation or starvation. Fixed bias teaches the topology; degeneration ships the product.',
      },
      {
        term: 'Divider bias stiffness',
        kind: 'insight',
        statement: 'A divider with bleed current far above $I_{B}$ holds **$V_{B}$ fixed** while $R_{E}$ holds $I_{E}$, tagged `stiff-divider`. The rule of thumb bleeds ten times the base current through the pair.',
        detail: 'Stiff dividers approximate a base voltage source, making $I_{E} = (V_{B} - V_{BE})/R_{E}$ nearly $\\beta$-free. The cost is divider current drained from the supply forever.',
      },
      {
        term: 'Saturation boundary test',
        kind: 'method',
        statement: 'Active operation needs $V_{CE}$ above about **$0.3$ V**; the largest survivable $R_{C}$ is $(V_{CC} - 0.3)/I_{C}$, tagged `RC-max`. Exercise 6.6 caps Example 6.1 at $4.7$ k$\\Omega$ for its $1$ mA.',
        detail: 'Larger $R_{C}$ buys gain but walks $V_{C}$ toward saturation. Checking $V_{C} > V_{B}$ after every design change keeps the stage honest.',
      },
      {
        term: 'Forced beta in saturation',
        kind: 'definition',
        statement: 'Overdriven bases push $I_{C}/I_{B}$ below $\\beta$ to the **forced beta** $\\beta_{forced}$, tagged `forced-beta`. Example 6.3 sinks $9.8$ mA at $V_{CEsat} = 0.2$ V with $\\beta_{forced}$ near ten against a natural $50$.',
        detail: 'Switch designers quote forced beta as the measure of saturation depth; smaller means deeper, slower turn-off from heavier stored charge. Active designers avoid the regime entirely.',
      },
    ],
    figures: [
      {
        caption: 'Emitter-degeneration bias of Example 6.2: $R_{C} = 5$ k$\\Omega$ sets $V_{C} = +5$ V while $R_{E} = 7.07$ k$\\Omega$ steadies $I_{C} = 2$ mA with $V_{E} = -0.717$ V.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BJT emitter degeneration bias circuit"><title>Emitter degeneration bias</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Degenerated bias: RE steadies IC</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="200" y1="70" x2="500" y2="70"/><polyline points="350,70 358,84 370,56 382,84 394,56 406,70"/><line x1="406" y1="70" x2="406" y2="130"/><line x1="330" y1="150" x2="406" y2="150"/><line x1="350" y1="130" x2="350" y2="210"/><line x1="330" y1="190" x2="406" y2="190"/><polygon points="394,190 382,184 382,196" fill="currentColor" stroke="none"/><line x1="350" y1="210" x2="350" y2="270"/><polyline points="350,210 358,224 370,196 382,224 394,196 406,210"/><line x1="406" y1="210" x2="406" y2="290"/><line x1="200" y1="290" x2="500" y2="290"/><line x1="330" y1="150" x2="280" y2="150"/><line x1="280" y1="150" x2="280" y2="110"/><circle cx="280" cy="100" r="4" fill="currentColor" stroke="none"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="200" y="56" font-family="sans-serif">plus 15 V</text><text x="330" y="56" font-family="sans-serif">RC 5 k</text><text x="414" y="154" font-family="sans-serif">C at plus 5 V</text><text x="290" y="176" font-family="sans-serif">base at 0 V</text><text x="414" y="194" font-family="sans-serif">E at minus 0.717 V</text><text x="414" y="236" font-family="sans-serif">RE 7.07 k</text><text x="200" y="310" font-family="sans-serif">minus 15 V</text><text x="330" y="330" font-family="sans-serif">IC 2 mA, VBE 0.717 V, beta 100</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Degenerated design (Sedra Example 6.2)',
        problem: 'With $\\pm 15$ V supplies, $\\beta = 100$ and $0.7$ V at $1$ mA, design for $I_{C} = 2$ mA with $V_{C} = +5$ V and the base at $0$ V. Find $R_{C}$, $V_{BE}$, $V_{E}$, $\\alpha$ and $R_{E}$.',
        steps: [
          { label: 'Step 1: Drop ten volts on RC', text: '$R_{C} = (15 - 5)/2$ mA $= 5$ k$\\Omega$ sets the collector exactly, since the CBJ stays reverse at $+5$ V.' },
          { label: 'Step 2: Shift VBE by the log ratio', text: '$V_{BE} = 0.7 + 0.025\\ln(2) = 0.717$ V, so $V_{E} = 0 - 0.717 = -0.717$ V with the base grounded.' },
          { label: 'Step 3: Size RE from the emitter loop', text: '$I_{E} = 2/0.99 = 2.020$ mA and $R_{E} = (15 - 0.717)/2.020 = 7.07$ k$\\Omega$ closes the $-15$ V loop with $\\alpha = 0.99$.' },
        ],
        result: '$R_{C} = 5$ k$\\Omega$, $V_{BE} = 0.717$ V, $R_{E} = 7.07$ k$\\Omega$; $I_{C} = 2$ mA at $V_{C} = +5$ V.',
      },
      {
        title: 'Fixed bias and its ceiling (Examples 6.1, 6.6)',
        problem: 'Example 6.1 fixes $I_{C} = 1$ mA from $5$ V with $R_{C} = 3$ k$\\Omega$ and $R_{B} = 431$ k$\\Omega$. Verify the point and find the largest $R_{C}$ that keeps active mode at the $0.3$ V edge.',
        steps: [
          { label: 'Step 1: Check the active point', text: '$I_{C} = 100 \\times 10$ $\\mu$A $= 1$ mA and $V_{CE} = 5 - 3 \\times 1 = 2$ V, confirmed:```python\nVCC = 5.0\nVBE = 0.69\nIB = 10e-6\nRB = (VCC - VBE) / IB\nprint(RB)\n```\nThe printout $431000.0$ $\\Omega$ is the $431$ k$\\Omega$ base resistor.' },
          { label: 'Step 2: Push RC to the edge', text: '$R_{C,max} = (5 - 0.3)/1$ mA $= 4.7$ k$\\Omega$ parks $V_{CE}$ exactly at $0.3$ V — Exercise 6.6 answer.' },
          { label: 'Step 3: Price the beta ride', text: 'At $\\beta = 200$ the same $R_{B}$ pushes $2$ mA through $3$ k$\\Omega$, dropping $V_{CE}$ to $-1$ V of impossible math: the stage saturates, proving fixed bias fragile.' },
        ],
        result: '$V_{CE} = 2$ V active; $R_{C} \\le 4.7$ k$\\Omega$; fixed bias saturates on high $\\beta$.',
      },
    ],
    keyTakeaways: [
      'Example 6.2: $R_{C} = 5$ k$\\Omega$, $V_{BE} = 0.717$ V, $R_{E} = 7.07$ k$\\Omega$ for $2$ mA at $+5$ V.',
      '$R_{E}$ degeneration trades headroom for $\\beta$-immune bias; stiff dividers bleed ~ten $I_{B}$.',
      'Fixed $R_{B} = 431$ k$\\Omega$ works at nominal $\\beta$ but saturates on spread.',
      'Active needs $V_{CE} > 0.3$ V: $R_{C,max} = 4.7$ k$\\Omega$ here; forced $\\beta$ measures saturation depth.',
    ],
    quiz: [
      {
        q: 'In Example 6.2 ($\\pm 15$ V, $2$ mA, $V_{C} = +5$ V) the collector resistor is:',
        options: [`$5$ k$\\Omega$`, `$2.5$ k$\\Omega$`, `$10$ k$\\Omega$`, `$7.07$ k$\\Omega$`],
        answer: 0,
        explanation: 'Step 1 — Given: $15$ V rail and $+5$ V target at $2$ mA. Step 2 — Rule: $R_{C} = (15 - 5)/I_{C}$. Step 3 — Compute: $10/0.002 = 5$ k$\\Omega$. Step 4 — Conclude: $R_{E}$ separately absorbs the emitter loop to $-15$ V.',
      },
      {
        q: 'At $I_{C} = 2$ mA the $V_{BE}$ (from $0.7$ V at $1$ mA) is:',
        options: ['$0.700$ V', '$0.683$ V', '$0.717$ V', '$1.40$ V'],
        answer: 2,
        explanation: 'Step 1 — Given: doubled current. Step 2 — Rule: $\\Delta V = V_{T}\\ln(2)$. Step 3 — Compute: $0.7 + 0.025 \\times 0.693 = 0.717$ V. Step 4 — Conclude: the emitter sits at $-0.717$ V with grounded base.',
      },
      {
        q: 'Fixed bias is fragile because:',
        options: ['$R_{B}$ burns too much power', '$I_{C} = \\beta I_{B}$ rides the full $\\beta$ spread', 'It forbids saturation', 'It needs dual supplies'],
        answer: 1,
        explanation: 'Step 1 — Given: $I_{B}$ fixed by $R_{B}$. Step 2 — Rule: collector follows $\\beta$ directly. Step 3 — Spread: $50$ to $150$ triples $I_{C}$ across production. Step 4 — Conclude: degeneration or stiff dividers are required for stable products.',
      },
      {
        q: 'Maximum $R_{C}$ keeping Example 6.1 ($5$ V, $1$ mA) active to the $0.3$ V edge is:',
        options: [`$10$ k$\\Omega$`, `$3$ k$\\Omega$`, `$5$ k$\\Omega$`, `$4.7$ k$\\Omega$`],
        answer: 3,
        explanation: 'Step 1 — Given: $V_{CC} = 5$ V and $I_{C} = 1$ mA. Step 2 — Rule: $R_{C,max} = (V_{CC} - 0.3)/I_{C}$. Step 3 — Compute: $4.7/0.001 = 4.7$ k$\\Omega$. Step 4 — Conclude: larger $R_{C}$ parks $V_{CE}$ below the edge into saturation.',
      },
    ],
  },

  // ------------------------------------------------------------------ 25.4
  {
    sectionId: 'ece-e-devices-s40',
    readingTime: 8,
    intro: 'Around $Q$ the BJT linearizes to $g_{m} = I_{C}/V_{T}$ feeding $r_{\\pi} = \\beta/g_{m}$ at the input and $r_{o} = V_{A}/I_{C}$ at the output — $40$ mS, $2.5$ k$\\Omega$ and $100$ k$\\Omega$ at $1$ mA with $\\beta = 100$ and $V_{A} = 100$ V. Hybrid-pi and T circuits arrange these identically: base current through $r_{\\pi}$ or emitter current through $r_{e} = 1/g_{m} = 25$ $\\Omega$. Junction capacitances $C_{\\pi}$ and $C_{\\mu}$ then preview the high-frequency limits of Chapter 9 in Sedra/Smith numbering.',
    objectives: [
      'Compute $g_{m}$, $r_{\\pi}$, $r_{e}$ and $r_{o}$ at $1$ and $2$ mA and verify $\\beta = g_{m}r_{\\pi}$',
      'Draw hybrid-pi and T models and convert between them by $r_{e}$ and $\\alpha$',
      'Name $C_{\\pi}$ and $C_{\\mu}$ as the high-frequency extensions with $f_{T}$ meaning',
    ],
    concepts: [
      {
        term: 'Transconductance gm',
        kind: 'theorem',
        statement: 'Differentiating the collector exponential gives **$g_{m} = I_{C}/V_{T}$**, tagged `gm-IC-VT`. At $1$ mA this is $40$ mS, so $1$ mV of $v_{be}$ steers $40$ $\\mu$A of collector — forty times the MOSFET of Section 24.4 at matched current.',
        detail: 'Because $g_{m}$ is absolute in current, BJTs win transconductance per milliampere everywhere. Doubling bias to $2$ mA doubles $g_{m}$ to $80$ mS exactly.',
      },
      {
        term: 'Input resistances',
        kind: 'definition',
        statement: 'Looking into the base sees **$r_{\\pi} = \\beta/g_{m}$** ($2.5$ k$\\Omega$ at $\\beta = 100$) while looking into the emitter sees **$r_{e} = 1/g_{m}$** ($25$ $\\Omega$), tagged `rpi-re`. Their ratio is $\\beta + 1$ by the current split.',
        detail: 'At $2$ mA these halve to $1.25$ k$\\Omega$ and $12.5$ $\\Omega$. Emitter followers exploit tiny $r_{e}$ for low output resistance.',
      },
      {
        term: 'Hybrid-pi versus T',
        kind: 'notation',
        statement: 'Hybrid-pi places $r_{\\pi}$ across base-emitter with $g_{m}v_{\\pi}$ to the collector, while T places **$r_{e}$** in the emitter lead with $\\alpha i_{e}$ upward, tagged `T-alpha`. Both add $r_{o}$ collector to emitter and satisfy $\\beta = g_{m}r_{\\pi}$.',
        detail: 'Figure 6.24 develops the family: $\\pi$, T, and common-base variants interconvert by source shifts. Degenerated stages with emitter resistors read cleanest in T form.',
      },
      {
        term: 'Output resistance ro',
        kind: 'definition',
        statement: 'The Early slope becomes **$r_{o} = V_{A}/I_{C}$** between collector and emitter, tagged `ro-VA`. At $V_{A} = 100$ V and $1$ mA, $r_{o} = 100$ k$\\Omega$ shunts the collector load exactly like MOSFET $r_{o}$.',
        detail: 'Exercise 6.44 style numbers scale it: $50$ k$\\Omega$ at $2$ mA for $V_{A} = 100$ V. Intrinsic BJT gain $g_{m}r_{o} = V_{A}/V_{T}$ reaches thousands — the BJT voltage-gain advantage.',
      },
      {
        term: 'High-frequency preview',
        kind: 'insight',
        statement: 'Depletion $C_{\\mu}$ bridges collector-base and diffusion $C_{\\pi}$ bridges base-emitter, and their charging sets the **transition frequency $f_{T}$** where current gain falls to unity, tagged `fT-preview`. Low-frequency models simply open both capacitors.',
        detail: 'The book promotes these into the high-frequency hybrid-pi for Chapter 9 response work. Thin bases raise $f_{T}$ by cutting transit time, reuniting speed with the gain of Section 25.1 geometry.',
      },
    ],
    figures: [
      {
        caption: 'Hybrid-pi and T small-signal models: $r_{\\pi} = 2.5$ k$\\Omega$ with $g_{m}v_{\\pi}$ beside $r_{e} = 25$ $\\Omega$ with $\\alpha i_{e}$, both with $r_{o} = 100$ k$\\Omega$ at $I_{C} = 1$ mA.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="BJT hybrid pi and T small signal models"><title>Hybrid pi and T models</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Hybrid-pi and T: same ports, two drawings</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="150" x2="60" y2="230"/><polyline points="60,160 68,174 80,146 92,174 104,146 116,160"/><line x1="116" y1="160" x2="170" y2="160"/><line x1="116" y1="220" x2="170" y2="220"/><circle cx="230" cy="190" r="32"/><line x1="230" y1="166" x2="230" y2="214"/><polygon points="230,214 224,202 236,202" fill="currentColor" stroke="none"/><line x1="170" y1="160" x2="230" y2="160"/><line x1="170" y1="220" x2="230" y2="220"/><line x1="290" y1="160" x2="290" y2="220"/><polyline points="290,170 298,184 310,156 322,184 334,156 346,170"/><line x1="420" y1="150" x2="420" y2="230"/><polyline points="420,180 428,194 440,166 452,194 464,166 476,180"/><line x1="476" y1="180" x2="530" y2="180"/><circle cx="580" cy="180" r="30"/><line x1="580" y1="158" x2="580" y2="202"/><polygon points="580,158 574,170 586,170" fill="currentColor" stroke="none"/><line x1="530" y1="180" x2="550" y2="180"/><line x1="610" y1="180" x2="650" y2="180"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="40" y="140" font-family="sans-serif">B</text><text x="40" y="246" font-family="sans-serif">E</text><text x="60" y="246" font-family="sans-serif">r pi 2.5 k</text><text x="262" y="150" font-family="sans-serif">gm v pi down</text><text x="296" y="246" font-family="sans-serif">ro 100 k</text><text x="400" y="140" font-family="sans-serif">E side</text><text x="400" y="246" font-family="sans-serif">re 25</text><text x="616" y="160" font-family="sans-serif">alpha ie up</text><text x="120" y="300" font-family="sans-serif">Hybrid pi: beta equals gm times r pi</text><text x="420" y="300" font-family="sans-serif">T: emitter resistor view</text></g></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Parameters at one milliampere',
        problem: 'A BJT biases at $I_{C} = 1$ mA with $\\beta = 100$ and $V_{A} = 100$ V. Find $g_{m}$, $r_{\\pi}$, $r_{e}$, $r_{o}$ and verify $\\beta = g_{m}r_{\\pi}$.',
        steps: [
          { label: 'Step 1: Divide current by VT', text: '$g_{m} = I_{C}/V_{T}$ with $V_{T} = 25$ mV, evaluated:```python\nIC = 1e-3\nVT = 0.025\nbeta = 100.0\ngm = IC / VT\nrpi = beta / gm\nre = 1.0 / gm\nprint(gm)\nprint(rpi)\nprint(re)\n```\nThe printout gives $0.04$ S, $2500.0$ $\\Omega$ and $25.0$ $\\Omega$.' },
          { label: 'Step 2: Add the Early resistance', text: '$r_{o} = V_{A}/I_{C} = 100/0.001 = 100$ k$\\Omega$ from collector to emitter.' },
          { label: 'Step 3: Close the consistency loop', text: '$g_{m}r_{\\pi} = 0.04 \\times 2500 = 100 = \\beta$, and $r_{\\pi}/r_{e} = 2500/25 = 100 = \\beta$: both identities hold.' },
        ],
        result: '$g_{m} = 40$ mS, $r_{\\pi} = 2.5$ k$\\Omega$, $r_{e} = 25$ $\\Omega$, $r_{o} = 100$ k$\\Omega$.',
      },
      {
        title: 'Rescaling to two milliamperes',
        problem: 'The same transistor ($\\beta = 100$, $V_{A} = 100$ V) re-biases at $I_{C} = 2$ mA. Find the new quartet and the intrinsic gain $g_{m}r_{o}$ at both currents.',
        steps: [
          { label: 'Step 1: Scale conductances up', text: '$g_{m} = 2/25 = 80$ mS doubles with current; $r_{\\pi} = 100/0.08 = 1.25$ k$\\Omega$ and $r_{e} = 12.5$ $\\Omega$ halve.' },
          { label: 'Step 2: Scale resistance down', text: '$r_{o} = 100/0.002 = 50$ k$\\Omega$ halves, tracking the Early slope.' },
          { label: 'Step 3: Read the invariant', text: '$g_{m}r_{o} = 40 \\times 100 = 80 \\times 50 = 4000 = V_{A}/V_{T}$ at both biases: intrinsic gain ignores current.' },
        ],
        result: '$80$ mS, $1.25$ k$\\Omega$, $12.5$ $\\Omega$, $50$ k$\\Omega$; $g_{m}r_{o} = 4000$ either way.',
      },
    ],
    keyTakeaways: [
      '$g_{m} = I_{C}/V_{T}$ ($40$ mS at $1$ mA); $r_{\\pi} = \\beta/g_{m}$ ($2.5$ k$\\Omega$); $r_{e} = 1/g_{m}$ ($25$ $\\Omega$).',
      '$r_{o} = V_{A}/I_{C}$ ($100$ k$\\Omega$); intrinsic gain $g_{m}r_{o} = V_{A}/V_{T} = 4000$ is bias-free.',
      'Hybrid-pi and T interconvert with $\\beta = g_{m}r_{\\pi}$ and $r_{\\pi}/r_{e} = \\beta$.',
      '$C_{\\pi}$ and $C_{\\mu}$ extend the model to $f_{T}$, where current gain reaches unity.',
    ],
    quiz: [
      {
        q: 'At $I_{C} = 1$ mA ($V_{T} = 25$ mV) the transconductance is:',
        options: ['$100$ mS', '$1$ mS', '$25$ mS', '$40$ mS'],
        answer: 3,
        explanation: 'Step 1 — Given: $I_{C} = 10^{-3}$ A. Step 2 — Rule: $g_{m} = I_{C}/V_{T}$. Step 3 — Compute: $0.001/0.025 = 0.04$ S. Step 4 — Conclude: $40$ mS, forty times a matched-current MOSFET.',
      },
      {
        q: 'With $\\beta = 100$ and $g_{m} = 40$ mS, $r_{\\pi}$ and $r_{e}$ are:',
        options: [`$100$ k$\\Omega$ and $1$ k$\\Omega$`, `$2.5$ k$\\Omega$ and $25$ $\\Omega$`, `$25$ k$\\Omega$ and $250$ $\\Omega$`, `$250$ $\\Omega$ and $2.5$ $\\Omega$`],
        answer: 1,
        explanation: 'Step 1 — Given: $\\beta$ and $g_{m}$. Step 2 — Rule: $r_{\\pi} = \\beta/g_{m}$ and $r_{e} = 1/g_{m}$. Step 3 — Compute: $100/0.04 = 2500$ $\\Omega$ and $1/0.04 = 25$ $\\Omega$. Step 4 — Conclude: their ratio $100$ is $\\beta$.',
      },
      {
        q: 'Intrinsic voltage gain $g_{m}r_{o}$ for $V_{A} = 100$ V equals:',
        options: [`$100$`, `$40$`, `$4000$`, `$2500$`],
        answer: 2,
        explanation: 'Step 1 — Given: $g_{m} = I_{C}/V_{T}$ and $r_{o} = V_{A}/I_{C}$. Step 2 — Rule: current cancels in the product. Step 3 — Compute: $100/0.025 = 4000$. Step 4 — Conclude: bias-independent ceiling, far above MOSFET values.',
      },
      {
        q: '$C_{\\pi}$ in the high-frequency model is dominated by:',
        options: ['Base-emitter diffusion capacitance at forward bias', 'Package pin capacitance', 'Load capacitance', 'Collector-substrate capacitance'],
        answer: 0,
        explanation: 'Step 1 — Given: forward-active base holds stored minority charge. Step 2 — Rule: moving charge with $v_{be}$ is diffusion capacitance. Step 3 — Contrast: $C_{\\mu}$ is the smaller depletion term. Step 4 — Conclude: $C_{\\pi}$ with $g_{m}$ sets the $f_{T}$ charging limit.',
      },
    ],
  },
]
