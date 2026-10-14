import type { SectionContent } from '../library'

// ============================================================================
// The Electronics Master Library — Chapter 24: MOS Field-Effect
// Transistors. Sedra/Smith, "Microelectronic Circuits" 8e, Chapter 5
// (pp. 244–303): MOS structure and threshold, triode and saturation
// regions, the square-law current-voltage model, discrete biasing, the
// small-signal model with transconductance, output resistance and body
// effect. Worked-problem numbers follow the book; arithmetic re-verified.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$
// pipeline.
// ============================================================================

export const elecCh24Content: SectionContent[] = [
  // ------------------------------------------------------------------ 24.1
  {
    sectionId: 'elec-ch24-s1',
    readingTime: 8,
    intro: 'The NMOS transistor of Figure 5.1 is a gate oxide over p-type silicon with two n-type islands for source and drain, and it conducts when the gate voltage builds an inversion channel between them. The threshold $V_{t}$ marks that formation, the overdrive $V_{OV} = V_{GS} - V_{t}$ sets the channel depth, and the drain voltage decides whether the channel reaches the drain (triode) or pinches off first (saturation). In the book $0.18$ $\\mu$m process with $4$ nm oxide, $C_{ox} = 8.63$ fF per $\\mu$m$^{2}$ and $k_{n}^{\\prime} = 388$ $\\mu$A per V$^{2}$.',
    objectives: [
      'Describe the NMOS physical structure and the formation of the inversion channel at $V_{t}$',
      'Apply the boundary $v_{DS} = V_{OV}$ to place a device in triode or saturation',
      'Explain pinch-off and channel-length modulation by $\\lambda$ qualitatively',
    ],
    concepts: [
      {
        term: 'NMOS physical structure',
        kind: 'definition',
        statement: 'Source and drain n-type regions sit in a p-type substrate under a gate **oxide capacitor**, tagged `nmos-stack`. Typical book dimensions run $L = 20$ nm to $1$ $\\mu$m with $W$ up to $100$ $\\mu$m and nanometer oxide.',
        detail: 'Figure 5.1 shows the perspective and cross section. The substrate (body) normally ties to the lowest supply so both source-body and drain-body junctions stay reverse biased.',
      },
      {
        term: 'Threshold and inversion',
        kind: 'definition',
        statement: 'Past the **threshold voltage** $V_{t}$ the gate field inverts the surface to n-type and joins source to drain, tagged `Vt-inversion`. The $0.18$ $\\mu$m process centers $V_{t}$ at $0.5$ V by implant doses.',
        detail: 'Below $V_{t}$ only leakage flows; above it the channel charge grows with $V_{GS} - V_{t}$. Poly depletion and quantum effects nudge real thresholds, but the book model treats $V_{t}$ as a fitted constant.',
      },
      {
        term: 'Overdrive voltage',
        kind: 'notation',
        statement: 'The excess $V_{OV} = V_{GS} - V_{t}$ is the **effective control voltage**: every current law keys off it, tagged `VOV-drive`. Deeper overdrive means deeper channel and quadratically larger current.',
        detail: 'Example 5.1 runs $V_{OV} = 0.23$ V for $100$ $\\mu$A in a $W$ over $L$ of ten. Analog stages favor small $V_{OV}$ for gain; digital switches favor large $V_{OV}$ for speed.',
      },
      {
        term: 'Triode versus saturation',
        kind: 'theorem',
        statement: 'The channel reaches the drain while **$v_{DS} < V_{OV}$** (triode) and pinches off when **$v_{DS} \\ge V_{OV}$** (saturation), tagged `sat-boundary`. Saturation needs $V_{DSmin} = V_{OV}$, the edge used throughout bias design.',
        detail: 'Example 5.2 sits exactly on the edge with $V_{GS} = 0.72$ V and $v_{DS} = 0.22$ V. Raising $v_{DS}$ past the edge ideally changes nothing — the subject of channel-length modulation next.',
      },
      {
        term: 'Pinch-off and modulation',
        kind: 'insight',
        statement: 'Past pinch-off the extra drain voltage drops across a widening depletion slice, so current rises slightly with slope **$\\lambda I_{D}$**, tagged `lambda-slope`. Short channels show larger $\\lambda$ and softer saturation.',
        detail: 'Figure 5.16 draws the pinch point retreating toward the source. The book folds this into $(1 + \\lambda v_{DS})$ and the output resistance $r_{o} = 1/(\\lambda I_{D})$.',
      },
    ],
    figures: [
      {
        caption: 'NMOS cross section after Figure 5.1: gate over thin oxide, n-type source and drain in the p substrate, with the inversion channel joining them once $V_{GS}$ exceeds $V_{t}$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="NMOS transistor cross section with gate source drain and body"><title>NMOS structure and channel</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">NMOS structure: gate builds the channel</text><g stroke="currentColor" stroke-width="2" fill="none"><rect x="150" y="190" width="420" height="110" rx="4"/><rect x="190" y="160" width="70" height="50" rx="3"/><rect x="460" y="160" width="70" height="50" rx="3"/><rect x="300" y="110" width="120" height="26" rx="3"/><line x1="300" y1="150" x2="420" y2="150"/><line x1="225" y1="160" x2="225" y2="110"/><line x1="495" y1="160" x2="495" y2="110"/><line x1="360" y1="110" x2="360" y2="70"/><line x1="270" y1="190" x2="450" y2="190" stroke-dasharray="7 5"/><line x1="360" y1="300" x2="360" y2="330"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="196" y="190" font-family="sans-serif">n plus S</text><text x="466" y="190" font-family="sans-serif">n plus D</text><text x="352" y="62" font-family="sans-serif">G</text><text x="310" y="130" font-family="sans-serif">thin oxide</text><text x="180" y="100" font-family="sans-serif">source contact</text><text x="470" y="100" font-family="sans-serif">drain contact</text><text x="372" y="326" font-family="sans-serif">B to lowest supply</text><text x="280" y="212" font-family="sans-serif">inversion channel when VGS past Vt</text><text x="150" y="330" font-family="sans-serif">p substrate, junctions kept reverse</text></g></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Oxide capacitance and process gain (Sedra Example 5.1a)',
        problem: 'A $0.18$ $\\mu$m process has $t_{ox} = 4$ nm, $\\mu_{n} = 450$ cm$^{2}$ per Vs and $V_{t} = 0.5$ V. Find $C_{ox}$ and $k_{n}^{\\prime}$.',
        steps: [
          { label: 'Step 1: Divide permittivity by thickness', text: 'With $\\epsilon_{ox} = 3.45 \\times 10^{-11}$ F per m, $C_{ox} = \\epsilon_{ox}/t_{ox}$, checked:```python\neox = 3.45e-11\ntox = 4.0e-9\nCox = eox / tox\nprint(Cox)\n```\nThe printout $0.008625$ F per m$^{2}$ is $8.63$ fF per $\\mu$m$^{2}$.' },
          { label: 'Step 2: Multiply by mobility', text: '$k_{n}^{\\prime} = \\mu_{n}C_{ox} = 450 \\times 8.63$ with reconciled units gives $388$ $\\mu$A per V$^{2}$ — the process transconductance parameter.' },
          { label: 'Step 3: Note what scales it', text: 'Thinner oxide raises $C_{ox}$ and hence $k_{n}^{\\prime}$ directly; mobility is fixed by doping and surface scattering.' },
        ],
        result: '$C_{ox} = 8.63$ fF per $\\mu$m$^{2}$; $k_{n}^{\\prime} = 388$ $\\mu$A per V$^{2}$.',
      },
      {
        title: 'Placing devices by the boundary',
        problem: 'An NMOS device has $V_{tn} = 0.5$ V and $V_{GS} = 0.9$ V. State the region for $v_{DS} = 0.2$ V and for $v_{DS} = 0.6$ V, and give $V_{DSmin}$ for saturation.',
        steps: [
          { label: 'Step 1: Form the overdrive', text: '$V_{OV} = 0.9 - 0.5 = 0.4$ V, the yardstick for both tests.' },
          { label: 'Step 2: Compare each drain voltage', text: 'At $0.2$ V, $v_{DS} < V_{OV}$ so the channel reaches the drain: triode. At $0.6$ V, $v_{DS} > V_{OV}$ so the channel pinches: saturation.' },
          { label: 'Step 3: Name the edge', text: '$V_{DSmin} = V_{OV} = 0.4$ V is the smallest drain voltage that still saturates at this gate drive.' },
        ],
        result: '$0.2$ V: triode; $0.6$ V: saturation; edge at $0.4$ V.',
      },
    ],
    keyTakeaways: [
      'Gate oxide over p silicon with n-type source and drain; body ties to the lowest supply.',
      '$V_{t} = 0.5$ V starts inversion; $V_{OV} = V_{GS} - V_{t}$ controls everything after.',
      'Triode while $v_{DS} < V_{OV}$; saturation once $v_{DS} \\ge V_{OV}$ with $V_{DSmin} = V_{OV}$.',
      '$C_{ox} = 8.63$ fF per $\\mu$m$^{2}$ and $k_{n}^{\\prime} = 388$ $\\mu$A per V$^{2}$ in the $0.18$ $\\mu$m process.',
    ],
    quiz: [
      {
        q: 'An NMOS device with $V_{tn} = 0.5$ V, $V_{GS} = 0.8$ V, $v_{DS} = 0.2$ V operates in:',
        options: ['Cutoff', 'Triode', 'Breakdown', 'Saturation'],
        answer: 1,
        explanation: 'Step 1 — Given: $V_{OV} = 0.8 - 0.5 = 0.3$ V. Step 2 — Rule: triode while $v_{DS} < V_{OV}$. Step 3 — Compare: $0.2 < 0.3$. Step 4 — Conclude: the channel reaches the drain, so triode.',
      },
      {
        q: 'Raising $V_{GS}$ at fixed $v_{DS}$ can push a saturated device into triode because:',
        options: ['Mobility collapses', 'The oxide breaks down', '$V_{t}$ falls with gate drive', 'The boundary $V_{OV}$ rises past $v_{DS}$'],
        answer: 3,
        explanation: 'Step 1 — Given: fixed $v_{DS}$ with growing $V_{GS}$. Step 2 — Rule: $V_{OV} = V_{GS} - V_{t}$ grows too. Step 3 — Compare: saturation needs $v_{DS} \\ge V_{OV}$, which eventually fails. Step 4 — Conclude: the pinch point unpinches and the channel reconnects.',
      },
      {
        q: 'Channel-length modulation means in saturation:',
        options: ['Current rises slightly with slope $\\lambda I_{D}$', 'Current falls with $v_{DS}$', 'The device enters triode', 'Current is perfectly flat with $v_{DS}$'],
        answer: 0,
        explanation: 'Step 1 — Given: $v_{DS}$ past pinch-off. Step 2 — Rule: the pinch point retreats and extra volts drop on depletion. Step 3 — Model: multiply by $(1 + \\lambda v_{DS})$. Step 4 — Conclude: finite slope $\\lambda I_{D}$, hence finite $r_{o}$.',
      },
      {
        q: 'The body terminal of an NMOS device ties to the lowest supply in order to:',
        options: ['Short gate to channel', 'Forward bias the junctions for speed', 'Keep source-body and drain-body junctions reverse biased', 'Raise the threshold to zero'],
        answer: 2,
        explanation: 'Step 1 — Given: n-type islands in p substrate. Step 2 — Rule: pn junctions must stay reverse for isolation. Step 3 — Check: the lowest rail guarantees $V_{B}$ never exceeds source or drain. Step 4 — Conclude: otherwise parasitic diodes would conduct.',
      },
    ],
  },

  // ------------------------------------------------------------------ 24.2
  {
    sectionId: 'elec-ch24-s2',
    readingTime: 9,
    intro: 'The square-law model compresses the chapter into two equations: the triode form $i_{D} = k_{n}[(v_{GS} - V_{tn})v_{DS} - v_{DS}^{2}/2]$ and the saturation form $i_{D} = (k_{n}/2)V_{OV}^{2}(1 + \\lambda v_{DS})$, with $k_{n} = k_{n}^{\\prime}(W/L)$. Example 5.1 runs a $W$ over $L$ of ten at $100$ $\\mu$A to $V_{OV} = 0.23$ V and $V_{GS} = 0.73$ V, then reuses the same device as a $1000$ $\\Omega$ triode resistor at $V_{OV} = 0.26$ V. Example 5.2 turns the triode equation into a quadratic whose valid root is $v_{DS} = 0.06$ V.',
    objectives: [
      'Write the triode and saturation drain-current equations with $k_{n} = k_{n}^{\\prime}(W/L)$',
      'Solve saturation bias for $V_{OV}$ and $V_{GS}$ and mirror the model to PMOS',
      'Solve the triode quadratic for $v_{DS}$ and discard the saturation-violating root',
    ],
    concepts: [
      {
        term: 'Saturation square law',
        kind: 'theorem',
        statement: 'In saturation $i_{D} = (k_{n}/2)(v_{GS} - V_{tn})^{2}(1 + \\lambda v_{DS})$, the **quadratic transfer** of the MOSFET, tagged `sat-square`. Transconductance $k_{n}$ bundles process strength with the geometry ratio $W$ over $L$.',
        detail: 'Example 5.1b inverts it: $V_{OV} = \\sqrt{2I_{D}/k_{n}} = 0.23$ V for $100$ $\\mu$A with $k_{n} = 3.88$ mA per V$^{2}$. Doubling $W$ at fixed $L$ halves the needed $V_{OV}^{2}$.',
      },
      {
        term: 'Triode equation',
        kind: 'theorem',
        statement: 'In triode $i_{D} = k_{n}[(v_{GS} - V_{tn})v_{DS} - v_{DS}^{2}/2]$, which straightens into a **voltage-controlled resistor** $r_{DS} = 1/(k_{n}V_{OV})$ for tiny $v_{DS}$, tagged `triode-rDS`. Example 5.1c hits $1000$ $\\Omega$ at $V_{OV} = 0.26$ V.',
        detail: 'Example 5.2b solves the full quadratic for $50$ $\\mu$A at fixed $V_{GS} = 0.72$ V: roots $0.06$ V and $0.39$ V, of which only $0.06$ V respects $v_{DS} < V_{OV}$.',
      },
      {
        term: 'Geometry scaling',
        kind: 'insight',
        statement: 'Current scales with **$W$ over $L$**: doubling width doubles current, while doubling length halves it, tagged `W-over-L`. Design Exercise D5.3 rings exactly these factors for saturation bias.',
        detail: 'Short-channel devices add velocity-saturation corrections, but the book keeps the square law for hand design. The $65$ nm exercise scales the same recipe to $V_{t} = 0.35$ V and $k_{n}^{\\prime} = 531$ $\\mu$A per V$^{2}$.',
      },
      {
        term: 'PMOS complements',
        kind: 'notation',
        statement: 'PMOS mirrors every NMOS law with $V_{SG}$, $|V_{OV}|$ and $V_{SD}$, conducting for **negative $V_{GS}$** beyond $V_{tp}$, tagged `pmos-mirror`. A $k_{p} = 1$ mA per V$^{2}$ device at $0.5$ mA needs $|V_{OV}| = 1$ V and $V_{SG} = 2$ V with $V_{tp} = -1$ V.',
        detail: 'Example 5.7 works this device. Symmetry lets every NMOS bias circuit reappear upside down between ground and the positive rail.',
      },
      {
        term: 'Saturation discipline',
        kind: 'method',
        statement: 'Assume saturation, solve, then **verify $V_{DS} \\ge V_{OV}$**; on failure switch to the triode equation, tagged `assume-verify`. Every DC problem in Section 5.3 follows this loop.',
        detail: 'The loop catches misbiased stages before they propagate: a violated assumption means the quadratic, not the square law, governs. Example 5.2b discards $0.39$ V on exactly this test.',
      },
    ],
    figures: [
      {
        caption: 'Output characteristics after Figure 5.13: parabolic rise in triode flattening into saturation plateaus, with the pinch-off locus $v_{DS} = V_{OV}$ separating the regions.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MOSFET output characteristics with triode and saturation regions"><title>MOSFET drain characteristics</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Drain curves: parabola, then plateau</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="110" y1="290" x2="650" y2="290"/><line x1="110" y1="290" x2="110" y2="70"/><polyline points="110,290 150,272 190,266 620,266"/><polyline points="110,290 160,250 210,238 620,238"/><polyline points="110,290 170,228 220,208 620,208"/><line x1="190" y1="266" x2="220" y2="208" stroke-dasharray="6 4"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="652" y="294" font-family="sans-serif">vDS</text><text x="114" y="86" font-family="sans-serif">iD</text><text x="480" y="256" font-family="sans-serif">larger VGS higher plateau</text><text x="240" y="230" font-family="sans-serif">pinch off locus</text><text x="120" y="316" font-family="sans-serif">left of locus: triode, right: saturation</text><text x="380" y="316" font-family="sans-serif">Plateaus tilt up slightly with lambda</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Saturation bias and triode resistor (Sedra Example 5.1b,c)',
        problem: 'A device with $k_{n} = 3.88$ mA per V$^{2}$ and $V_{t} = 0.5$ V must carry $100$ $\\mu$A in saturation. Find $V_{OV}$, $V_{GS}$ and $V_{DSmin}$; then find $V_{OV}$ and $V_{GS}$ to act as a $1000$ $\\Omega$ resistor for tiny $v_{DS}$.',
        steps: [
          { label: 'Step 1: Root the saturation law', text: '$V_{OV} = \\sqrt{2I_{D}/k_{n}}$, evaluated:```python\nkn = 3.88e-3\nID = 100e-6\nVOV = (2.0 * ID / kn) ** 0.5\nprint(VOV)\n```\nThe printout $0.227$ V rounds to $V_{OV} = 0.23$ V, so $V_{GS} = 0.73$ V and $V_{DSmin} = 0.23$ V.' },
          { label: 'Step 2: Invert the triode resistance', text: 'For tiny $v_{DS}$, $r_{DS} = 1/(k_{n}V_{OV})$, so $V_{OV} = 1/(3.88 \\times 10^{-3} \\times 1000) = 0.26$ V and $V_{GS} = 0.76$ V.' },
          { label: 'Step 3: Respect each regime', text: 'The $0.23$ V bias needs $v_{DS} \\ge 0.23$ V to saturate; the $0.26$ V resistor bias needs $v_{DS}$ far below $0.26$ V to stay linear.' },
        ],
        result: 'Saturation: $V_{OV} = 0.23$ V, $V_{GS} = 0.73$ V; resistor: $V_{OV} = 0.26$ V, $V_{GS} = 0.76$ V.',
      },
      {
        title: 'Triode quadratic roots (Sedra Example 5.2b)',
        problem: 'A device with $k_{n} = 4.3$ mA per V$^{2}$ holds $V_{GS} = 0.72$ V ($V_{t} = 0.5$ V) while carrying only $50$ $\\mu$A. Find $v_{DS}$.',
        steps: [
          { label: 'Step 1: Write the triode equation', text: 'With $V_{OV} = 0.22$ V, $50 \\times 10^{-6} = 4.3 \\times 10^{-3}(0.22v_{DS} - v_{DS}^{2}/2)$, a quadratic in $v_{DS}$ since current fell below the saturation value.' },
          { label: 'Step 2: Solve both roots', text: '$v_{DS}^{2} - 0.44v_{DS} + 0.0233 = 0$ gives $v_{DS} = 0.06$ V or $0.39$ V.' },
          { label: 'Step 3: Keep the triode root', text: 'Only $0.06$ V satisfies $v_{DS} < V_{OV} = 0.22$ V; $0.39$ V would saturate and contradict the triode equation used.' },
        ],
        result: '$v_{DS} = 0.06$ V in triode; the $0.39$ V root is extraneous.',
      },
    ],
    keyTakeaways: [
      'Saturation: $i_{D} = (k_{n}/2)V_{OV}^{2}(1 + \\lambda v_{DS})$; here $100$ $\\mu$A needs $V_{OV} = 0.23$ V.',
      'Triode: $i_{D} = k_{n}(V_{OV}v_{DS} - v_{DS}^{2}/2)$; tiny-signal $r_{DS} = 1/(k_{n}V_{OV})$.',
      '$k_{n} = k_{n}^{\\prime}(W/L)$: current tracks width over length; PMOS mirrors with $V_{SG}$.',
      'Assume saturation, solve, verify $V_{DS} \\ge V_{OV}$; triode quadratics keep only the consistent root.',
    ],
    quiz: [
      // PYQ-pattern: MOSFET saturation drain current (rephrased, values changed)
      {
        q: 'With $k_{n} = 3.88$ mA per V$^{2}$ and $V_{OV} = 0.23$ V, saturation $I_{D}$ (with $\\lambda = 0$) is about:',
        options: ['$0.89$ mA', '$205$ $\\mu$A', '$100$ $\\mu$A', '$50$ $\\mu$A'],
        answer: 2,
        explanation: 'Step 1 — Given: $k_{n} = 3.88$ mA per V$^{2}$ and $V_{OV} = 0.23$ V. Step 2 — Rule: $I_{D} = (k_{n}/2)V_{OV}^{2}$. Step 3 — Compute: $1.94 \\times 0.0529 = 0.1026$ mA. Step 4 — Conclude: about $100$ $\\mu$A, the Example 5.1 bias inverted.',
      },
      {
        q: 'An n-channel device with $V_{OV} = 0.5$ V shows $r_{DS} = 1$ k$\\Omega$ at tiny $v_{DS}$. Its $k_{n}$ is:',
        options: [`$2$ mA per V$^{2}$`, `$1$ mA per V$^{2}$`, `$0.5$ mA per V$^{2}$`, `$4$ mA per V$^{2}$`],
        answer: 0,
        explanation: 'Step 1 — Given: $r_{DS} = 1$ k$\\Omega$ and $V_{OV} = 0.5$ V. Step 2 — Rule: $r_{DS} = 1/(k_{n}V_{OV})$. Step 3 — Compute: $k_{n} = 1/(1000 \\times 0.5) = 2$ mA per V$^{2}$. Step 4 — Conclude: at $v_{DS} = 0.2$ V this device carries $0.16$ mA by the triode law.',
      },
      {
        q: 'Doubling channel length at fixed $W$, bias and $\\lambda = 0$ in saturation:',
        options: ['Doubles $I_{D}$', 'Leaves $I_{D}$ unchanged', 'Quadruples $I_{D}$', 'Halves $I_{D}$'],
        answer: 3,
        explanation: 'Step 1 — Given: $k_{n}$ proportional to $W$ over $L$. Step 2 — Rule: halved $k_{n}$ halves the square-law current. Step 3 — Check: $V_{OV}$ unchanged by geometry. Step 4 — Conclude: longer channels source less current at the same drive.',
      },
      {
        q: 'Triode equation at $V_{OV} = 0.22$ V, $k_{n} = 4.3$ mA per V$^{2}$, $I_{D} = 50$ $\\mu$A gives $v_{DS}$:',
        options: ['$0.44$ V', '$0.06$ V', '$0.39$ V', '$0.22$ V'],
        answer: 1,
        explanation: 'Step 1 — Given: below-saturation current at fixed gate drive. Step 2 — Rule: solve the triode quadratic and test $v_{DS} < V_{OV}$. Step 3 — Roots: $0.06$ V and $0.39$ V. Step 4 — Conclude: only $0.06$ V respects triode; the other root contradicts its own equation.',
      },
    ],
  },

  // ------------------------------------------------------------------ 24.3
  {
    sectionId: 'elec-ch24-s3',
    readingTime: 8,
    intro: 'Biasing plants the $Q$ point that Section 21.2 demanded: a stable $I_{D}$ with room to swing while keeping $V_{DS}$ above $V_{OV}$. The drain-feedback stage ties gate to drain so $V_{GS} = V_{DS}$ enforces saturation automatically, while the divider-plus-source-resistor stage of discrete design trades a volt of headroom for supply immunity. Both reduce to solving the square law against a load line and then verifying the region.',
    objectives: [
      'Solve drain-feedback bias where $V_{GS} = V_{DS}$ guarantees saturation',
      'Design divider bias with source degeneration for a target $I_{D}$ and swing',
      'Verify $V_{DS} \\ge V_{OV}$ and budget headroom for the signal',
    ],
    concepts: [
      {
        term: 'Drain-feedback bias',
        kind: 'method',
        statement: 'Tying gate to drain through a large resistor forces **$V_{GS} = V_{DS}$**, which always exceeds $V_{OV}$ for positive $V_{t}$, tagged `drain-feedback`. With $V_{DD} = 3$ V, $R_{D} = 3$ k$\\Omega$, $k_{n} = 1$ mA per V$^{2}$ and $V_{t} = 0.5$ V the stage settles at $0.5$ mA and $1.5$ V.',
        detail: 'Negative feedback through $R_{D}$ stabilizes the point: rising current drops more volts and pinches $V_{GS}$ back. Large $R_{G}$ keeps the ac input resistance high.',
      },
      {
        term: 'Divider with source degeneration',
        kind: 'method',
        statement: 'A stiff divider sets $V_{G}$ while $R_{S}$ lifts the source, giving **$I_{D} = (V_{G} - V_{GS})/R_{S}$** as a second equation, tagged `divider-RS`. The $5$ V design with $R_{1} = R_{2} = 1$ M$\\Omega$, $R_{S} = 1$ k$\\Omega$ and $R_{D} = 2$ k$\\Omega$ centers $1$ mA with $V_{DS} = 2$ V.',
        detail: '$R_{S}$ swallows $V_{t}$ spread and temperature drift into a volt of degeneration. Bypassing $R_{S}$ with a capacitor later restores ac gain without moving $Q$.',
      },
      {
        term: 'Load-line solution',
        kind: 'method',
        statement: 'The resistor line $V_{DS} = V_{DD} - I_{D}(R_{D} + R_{S})$ meets the device square law at **$Q$**, tagged `load-line`. Algebra gives quadratics; the physical root is the one with $V_{GS} > V_{t}$ and consistent region.',
        detail: 'Graphing both curves exposes headroom instantly: $Q$ midway along the line splits the swing evenly. Sliding $R_{D}$ slides $Q$ along the device curve.',
      },
      {
        term: 'Discrete versus IC biasing',
        kind: 'insight',
        statement: 'Discrete stages use resistors and degeneration, while IC stages copy **reference currents** through mirrors, tagged `mirror-bias`. Matched neighbors track temperature together where absolute resistor values drift apart.',
        detail: 'Section 5.3 presents resistor bias for discrete MOSFETs; current-source biasing anticipates Chapters 8 and 9 mirrors. Both chase the same stable $I_{D}$ with different components.',
      },
      {
        term: 'Headroom budgeting',
        kind: 'insight',
        statement: 'Saturation needs $V_{DS} \\ge V_{OV}$ plus signal swing on top, so $Q$ keeps a **volt or more of margin**, tagged `headroom`. The $2$ V $V_{DS}$ against $1$ V $V_{OV}$ here leaves a full volt for the drain signal.',
        detail: 'Starved headroom clips one peak early exactly as Section 21.2 warned. Sizing $R_{D}$ is therefore swing design, not just gain design.',
      },
    ],
    figures: [
      {
        caption: 'Two biasing styles: drain-feedback with $V_{GS} = V_{DS}$ on the left, and divider bias with source degeneration fixing $I_{D} = 0.5$ mA and $1$ mA respectively in the worked designs.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MOSFET drain feedback and divider bias circuits"><title>MOSFET biasing techniques</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Biasing: feedback, then divider plus RS</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="80" x2="300" y2="80"/><polyline points="170,80 178,94 190,66 202,94 214,66 226,80"/><line x1="226" y1="80" x2="226" y2="140"/><line x1="190" y1="140" x2="262" y2="140"/><line x1="226" y1="140" x2="226" y2="120"/><line x1="200" y1="170" x2="252" y2="170"/><line x1="226" y1="170" x2="226" y2="230"/><line x1="226" y1="230" x2="226" y2="280"/><line x1="226" y1="140" x2="120" y2="140"/><line x1="120" y1="140" x2="120" y2="200"/><line x1="420" y1="80" x2="660" y2="80"/><polyline points="540,80 548,94 560,66 572,94 584,66 596,80"/><line x1="596" y1="80" x2="596" y2="140"/><line x1="560" y1="140" x2="632" y2="140"/><line x1="596" y1="140" x2="596" y2="120"/><line x1="570" y1="170" x2="622" y2="170"/><line x1="596" y1="170" x2="596" y2="230"/><polyline points="596,230 604,244 616,216 628,244 640,216 652,230"/><line x1="652" y1="230" x2="652" y2="280"/><line x1="500" y1="120" x2="500" y2="80"/><polyline points="500,120 508,134 520,106 532,134 544,106 556,120"/><line x1="556" y1="120" x2="596" y2="120"/><line x1="500" y1="200" x2="500" y2="280"/><polyline points="500,200 508,214 520,186 532,214 544,186 556,200"/><line x1="556" y1="200" x2="596" y2="200"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="60" y="66" font-family="sans-serif">VDD 3 V</text><text x="150" y="66" font-family="sans-serif">RD 3 k</text><text x="258" y="146" font-family="sans-serif">gate to drain</text><text x="150" y="300" font-family="sans-serif">ID 0.5 mA, VDS 1.5 V</text><text x="420" y="66" font-family="sans-serif">VDD 5 V</text><text x="520" y="66" font-family="sans-serif">RD 2 k</text><text x="600" y="256" font-family="sans-serif">RS 1 k</text><text x="440" y="146" font-family="sans-serif">R1 R2 divider</text><text x="440" y="300" font-family="sans-serif">ID 1 mA, VDS 2 V</text></g></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Drain-feedback operating point',
        problem: 'An NMOS device with $k_{n} = 1$ mA per V$^{2}$ and $V_{t} = 0.5$ V uses drain-feedback bias with $V_{DD} = 3$ V and $R_{D} = 3$ k$\\Omega$. Find $I_{D}$ and $V_{DS}$ and confirm saturation.',
        steps: [
          { label: 'Step 1: Impose VGS equals VDS', text: 'Then $I_{D} = 0.5(V_{DS} - 0.5)^{2}$ mA and $V_{DS} = 3 - 3I_{D}$, solved together:```python\nkn = 1.0\nVt = 0.5\nVGS = 1.5\nVOV = VGS - Vt\nID = 0.5 * kn * VOV * VOV\nprint(ID)\n```\n$I_{D} = 0.5$ mA satisfies both, giving $V_{DS} = 3 - 1.5 = 1.5$ V.' },
          { label: 'Step 2: Check consistency', text: '$V_{GS} = 1.5$ V indeed equals $V_{DS}$, and $V_{OV} = 1.0$ V is below $1.5$ V.' },
          { label: 'Step 3: Confirm the region', text: '$V_{DS} = 1.5 \\ge V_{OV} = 1.0$, so saturation holds with $0.5$ V of headroom — feedback bias cannot miss.' },
        ],
        result: '$I_{D} = 0.5$ mA, $V_{DS} = 1.5$ V, saturated with margin.',
      },
      {
        title: 'Divider design for one milliampere',
        problem: 'Design divider bias for $I_{D} = 1$ mA with $V_{DD} = 5$ V, $k_{n} = 2$ mA per V$^{2}$, $V_{t} = 0.5$ V, choosing $V_{S} = 1$ V and $V_{D} = 3$ V. Find $R_{S}$, $R_{D}$ and the divider.',
        steps: [
          { label: 'Step 1: Fix source and drain resistors', text: '$R_{S} = 1$ V$/1$ mA $= 1$ k$\\Omega$ and $R_{D} = (5 - 3)/1 = 2$ k$\\Omega$ plant the two node voltages directly.' },
          { label: 'Step 2: Set the gate divider', text: '$V_{OV} = \\sqrt{2 \\times 1/2} = 1$ V, so $V_{GS} = 1.5$ V and $V_{G} = 2.5$ V; $R_{1} = R_{2} = 1$ M$\\Omega$ splits $5$ V exactly.' },
          { label: 'Step 3: Verify swing room', text: '$V_{DS} = 3 - 1 = 2$ V against $V_{OV} = 1$ V leaves $1$ V of drain swing before the triode edge.' },
        ],
        result: '$R_{S} = 1$ k$\\Omega$, $R_{D} = 2$ k$\\Omega$, $R_{1} = R_{2} = 1$ M$\\Omega$; $V_{DS} = 2$ V saturated.',
      },
    ],
    keyTakeaways: [
      'Drain feedback forces $V_{GS} = V_{DS}$, which self-enforces saturation at $0.5$ mA here.',
      'Divider plus $R_{S}$ sets $1$ mA from $V_{G} = 2.5$ V with $1$ V of degeneration headroom.',
      'Load line meets square law at $Q$; keep the physical root with $V_{GS} > V_{t}$.',
      'Budget $V_{DS} \\ge V_{OV}$ plus swing: $2$ V against $1$ V leaves a clean volt.',
    ],
    quiz: [
      {
        q: 'Drain-feedback bias ($V_{DD} = 3$ V, $R_{D} = 3$ k$\\Omega$, $k_{n} = 1$ mA per V$^{2}$, $V_{t} = 0.5$ V) settles at:',
        options: ['$0.5$ mA, $1.5$ V', 'Cutoff, $3$ V', '$1.0$ mA, $0$ V', '$0.25$ mA, $2.25$ V'],
        answer: 0,
        explanation: 'Step 1 — Given: $V_{GS} = V_{DS}$ by the tie. Step 2 — Rule: solve $I_{D} = 0.5(V_{DS} - 0.5)^{2}$ with $V_{DS} = 3 - 3I_{D}$. Step 3 — Root: $I_{D} = 0.5$ mA gives $V_{DS} = 1.5$ V consistently. Step 4 — Conclude: $1.5 \\ge 1.0$ confirms saturation.',
      },
      {
        q: 'Source degeneration $R_{S}$ in divider bias mainly:',
        options: ['Removes the need for $R_{D}$', 'Raises the ac voltage gain', 'Stabilizes $I_{D}$ against $V_{t}$ spread and temperature', 'Forces triode operation'],
        answer: 2,
        explanation: 'Step 1 — Given: $V_{G}$ fixed by the divider. Step 2 — Rule: rising $I_{D}$ lifts $V_{S}$ and pinches $V_{GS}$. Step 3 — Effect: the loop absorbs threshold and thermal drift. Step 4 — Conclude: one volt of degeneration buys a far steadier $Q$.',
      },
      {
        q: 'With $V_{DS} = 1.2$ V and $V_{OV} = 1.0$ V the device is:',
        options: ['In triode', 'Saturated with $0.2$ V margin', 'In breakdown', 'In cutoff'],
        answer: 1,
        explanation: 'Step 1 — Given: $V_{DS}$ and $V_{OV}$. Step 2 — Rule: saturation needs $V_{DS} \\ge V_{OV}$. Step 3 — Compare: $1.2 > 1.0$ with $0.2$ V to spare. Step 4 — Conclude: signals under $0.2$ V peak stay saturated.',
      },
      {
        q: 'IC MOSFET stages prefer mirrors over resistor dividers because:',
        options: ['Mirrors need no headroom', 'Dividers cannot set gate voltage', 'Resistors are forbidden on chips', 'Matched devices track temperature and save area'],
        answer: 3,
        explanation: 'Step 1 — Given: on-chip neighbors match closely. Step 2 — Rule: copied reference currents inherit the same drift. Step 3 — Contrast: absolute resistors drift independently and consume area. Step 4 — Conclude: tracking plus density favors mirrors.',
      },
    ],
  },

  // ------------------------------------------------------------------ 24.4
  {
    sectionId: 'elec-ch24-s4',
    readingTime: 8,
    intro: 'Around $Q$ the MOSFET becomes three numbers: transconductance $g_{m} = k_{n}V_{OV} = 2I_{D}/V_{OV}$, output resistance $r_{o} = 1/(\\lambda I_{D})$, and body factor $\\chi$ with $g_{mb} = \\chi g_{m}$. The book $100$ $\\mu$A device at $V_{OV} = 0.22$ V gives $g_{m} = 0.91$ mA per V, and with $\\lambda = 0.1$ per V the intrinsic gain $g_{m}r_{o}$ reaches $91$. Hybrid-pi and T circuits package these numbers for every amplifier analysis of Chapter 7.',
    objectives: [
      'Compute $g_{m}$ by all three forms and $r_{o}$ from $\\lambda$ with the $100$ $\\mu$A benchmark',
      'Draw the hybrid-pi and T small-signal models including $g_{mb}$ and the gate capacitances',
      'Evaluate intrinsic gain $g_{m}r_{o}$ and explain the $g_{m}$ versus headroom trade',
    ],
    concepts: [
      {
        term: 'Transconductance trio',
        kind: 'theorem',
        statement: 'Differentiating the square law gives **$g_{m} = k_{n}V_{OV} = 2I_{D}/V_{OV} = \\sqrt{2k_{n}I_{D}}$**, tagged `gm-trio`. At $100$ $\\mu$A and $0.22$ V this is $0.91$ mA per V, so $1$ mV of gate moves $0.91$ $\\mu$A of drain.',
        detail: 'The middle form rules bias thinking: $g_{m}$ per current is $2/V_{OV}$, so starving overdrive raises efficiency. The root form rules geometry thinking at fixed current.',
      },
      {
        term: 'Output resistance',
        kind: 'definition',
        statement: 'The Early-like slope becomes **$r_{o} = 1/(\\lambda I_{D}) = V_{A}/I_{D}$**, tagged `ro-MOS`. With $\\lambda = 0.1$ per V at $100$ $\\mu$A, $r_{o} = 100$ k$\\Omega$ shunts every drain load.',
        detail: 'Long channels shrink $\\lambda$ toward $0.01$ per V and stretch $r_{o}$ past a megaohm. Intrinsic gain $g_{m}r_{o} = 2/(\\lambda V_{OV})$ then climbs into the hundreds.',
      },
      {
        term: 'Hybrid-pi and T models',
        kind: 'notation',
        statement: 'Hybrid-pi shows $g_{m}v_{gs}$ from drain to source across $r_{o}$, while T shows the same current through **$1/g_{m}$** in the source lead, tagged `T-model`. Here $1/g_{m} = 1.10$ k$\\Omega$ at $0.91$ mA per V.',
        detail: 'Gate draws nothing in both, and $C_{gs}$, $C_{gd}$ bridge the terminals for high-frequency work. Source-degenerated stages read most clearly in T form.',
      },
      {
        term: 'Body effect',
        kind: 'theorem',
        statement: 'Source-to-body voltage modulates threshold, adding a dependent source **$g_{mb}v_{bs} = \\chi g_{m}v_{bs}$** from body to channel, tagged `body-gmb`. With $\\chi$ near $0.1$ to $0.3$, separate wells or source-tied bodies silence it.',
        detail: 'Discrete devices tie body to source and hide the effect; twin-well IC processes let each body follow its source. Unresolved body transconductance otherwise saps gain through the back gate.',
      },
      {
        term: 'Intrinsic gain trade',
        kind: 'insight',
        statement: 'The ceiling $g_{m}r_{o} = 2/(\\lambda V_{OV})$ rewards **small overdrive and long channels**, tagged `ceiling-gain`. Here $2/(0.1 \\times 0.22) = 91$ V per V before any load divides it.',
        detail: 'Small $V_{OV}$ squeezes saturation headroom while long $L$ costs speed and area — the three-way compromise behind every analog MOSFET sizing. Cascodes later stack devices to beat this ceiling.',
      },
    ],
    figures: [
      {
        caption: 'MOS hybrid-pi model: open gate driving $g_{m}v_{gs}$ into $r_{o}$, with $C_{gs}$ and $C_{gd}$ for high frequencies and the body source $g_{mb}v_{bs}$ when the body separates from the source.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MOSFET hybrid pi small signal model"><title>MOS hybrid pi model</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Hybrid-pi: gm current into ro</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="120" y1="90" x2="120" y2="170"/><line x1="120" y1="170" x2="200" y2="170"/><line x1="330" y1="90" x2="330" y2="120"/><line x1="330" y1="230" x2="330" y2="260"/><circle cx="330" cy="175" r="34"/><line x1="330" y1="150" x2="330" y2="200"/><polygon points="330,200 324,188 336,188" fill="currentColor" stroke="none"/><line x1="440" y1="120" x2="440" y2="230"/><polyline points="440,140 448,154 460,126 472,154 484,126 496,140"/><line x1="440" y1="120" x2="330" y2="120"/><line x1="440" y1="230" x2="330" y2="230"/><line x1="120" y1="170" x2="120" y2="260"/><line x1="120" y1="260" x2="330" y2="260"/><line x1="200" y1="150" x2="200" y2="190"/><line x1="212" y1="150" x2="212" y2="190"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="104" y="80" font-family="sans-serif">G</text><text x="322" y="80" font-family="sans-serif">D</text><text x="336" y="280" font-family="sans-serif">S</text><text x="368" y="180" font-family="sans-serif">gm vgs down</text><text x="448" y="186" font-family="sans-serif">ro 100 k</text><text x="222" y="176" font-family="sans-serif">Cgs</text><text x="126" y="222" font-family="sans-serif">vgs across gate source</text><text x="120" y="310" font-family="sans-serif">gm 0.91 mS at 100 uA, gain gm ro 91</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Model parameters at one hundred microamperes',
        problem: 'An NMOS device biases at $I_{D} = 100$ $\\mu$A with $V_{OV} = 0.22$ V and $\\lambda = 0.1$ per V. Find $g_{m}$, $r_{o}$, $1/g_{m}$ and the intrinsic gain.',
        steps: [
          { label: 'Step 1: Ratio current to overdrive', text: '$g_{m} = 2I_{D}/V_{OV}$, evaluated:```python\nID = 100e-6\nVOV = 0.22\nlam = 0.1\ngm = 2.0 * ID / VOV\nro = 1.0 / (lam * ID)\nprint(gm)\nprint(ro)\nprint(gm * ro)\n```\nThe printout gives $g_{m} = 0.91$ mA per V and $r_{o} = 100$ k$\\Omega$.' },
          { label: 'Step 2: Invert for T form', text: '$1/g_{m} = 1.10$ k$\\Omega$ sits in the source lead of the T model, the resistance seen looking into the source.' },
          { label: 'Step 3: Multiply to the ceiling', text: '$g_{m}r_{o} = 0.91 \\times 100 = 91$ V per V — the most this device alone can ever amplify.' },
        ],
        result: '$g_{m} = 0.91$ mA per V, $r_{o} = 100$ k$\\Omega$, $1/g_{m} = 1.10$ k$\\Omega$, gain ceiling $91$.',
      },
      {
        title: 'PMOS small-signal numbers',
        problem: 'A PMOS device biases at $|I_{D}| = 0.5$ mA with $|V_{OV}| = 1$ V and $|\\lambda| = 0.2$ per V. Find $g_{m}$, $r_{o}$ and the intrinsic gain, and compare with the NMOS device above.',
        steps: [
          { label: 'Step 1: Scale by the larger current', text: '$g_{m} = 2 \\times 0.5/1 = 1.0$ mA per V — five times the current buys barely more $g_{m}$ because $V_{OV}$ is also larger.' },
          { label: 'Step 2: Shorter effective length hurts', text: '$r_{o} = 1/(0.2 \\times 0.0005) = 10$ k$\\Omega$, an order below the long NMOS device.' },
          { label: 'Step 3: Read the ceiling', text: '$g_{m}r_{o} = 1.0 \\times 10 = 10$ V per V: high overdrive plus strong modulation collapses the gain tenfold.' },
        ],
        result: '$g_{m} = 1.0$ mA per V, $r_{o} = 10$ k$\\Omega$, ceiling $10$ — headroom hunger costs gain.',
      },
    ],
    keyTakeaways: [
      '$g_{m} = k_{n}V_{OV} = 2I_{D}/V_{OV}$: $0.91$ mA per V at $100$ $\\mu$A and $0.22$ V.',
      '$r_{o} = 1/(\\lambda I_{D})$: $100$ k$\\Omega$ at $\\lambda = 0.1$ per V; intrinsic gain $91$.',
      'T model puts $1/g_{m} = 1.10$ k$\\Omega$ in the source lead; gate stays open.',
      'Body adds $g_{mb} = \\chi g_{m}$ unless tied to source; small $V_{OV}$ plus long $L$ maximize $g_{m}r_{o}$.',
    ],
    quiz: [
      {
        q: 'At $I_{D} = 100$ $\\mu$A and $V_{OV} = 0.22$ V, $g_{m}$ equals:',
        options: ['$4.3$ mA per V', '$0.22$ mA per V', '$0.45$ mA per V', '$0.91$ mA per V'],
        answer: 3,
        explanation: 'Step 1 — Given: $I_{D}$ and $V_{OV}$. Step 2 — Rule: $g_{m} = 2I_{D}/V_{OV}$. Step 3 — Compute: $200/0.22 = 909$ $\\mu$A per V. Step 4 — Conclude: $0.91$ mA per V, matching $k_{n}V_{OV}$.',
      },
      {
        q: 'With $\\lambda = 0.1$ per V at $100$ $\\mu$A, $r_{o}$ and $g_{m}r_{o}$ are:',
        options: [`$1$ M$\\Omega$ and $910$`, `$100$ k$\\Omega$ and $91$`, `$1$ k$\\Omega$ and $0.91$`, `$10$ k$\\Omega$ and $9.1$`],
        answer: 1,
        explanation: 'Step 1 — Given: $\\lambda$ and $I_{D}$. Step 2 — Rule: $r_{o} = 1/(\\lambda I_{D})$. Step 3 — Compute: $1/10^{-5} = 100$ k$\\Omega$, times $0.91$ mA per V is $91$. Step 4 — Conclude: the lone-device ceiling before loading.',
      },
      {
        q: 'The T model differs from hybrid-pi by:',
        options: ['Doubling $g_{m}$', 'Adding gate current', 'Placing $1/g_{m}$ in the source lead for the same terminal behavior', 'Removing $r_{o}$'],
        answer: 2,
        explanation: 'Step 1 — Given: identical port currents required. Step 2 — Rule: Norton-to-Thevenin style rearrangement preserves ports. Step 3 — Form: $v_{gs}$ across $1/g_{m}$ carries the channel current. Step 4 — Conclude: same equations, clearer source-side reading.',
      },
      {
        q: 'Halving $V_{OV}$ at fixed $I_{D}$ (long channel, same $\\lambda$):',
        options: ['Doubles $g_{m}$ and doubles intrinsic gain', 'Leaves both unchanged', 'Doubles $g_{m}$ but halves $r_{o}$', 'Halves $g_{m}$ and halves intrinsic gain'],
        answer: 0,
        explanation: 'Step 1 — Given: $g_{m} = 2I_{D}/V_{OV}$ at fixed current. Step 2 — Rule: halved denominator doubles $g_{m}$. Step 3 — Gain: $g_{m}r_{o}$ doubles since $r_{o}$ depends on current alone. Step 4 — Conclude: efficiency rises, paid in saturation headroom.',
      },
    ],
  },
]
