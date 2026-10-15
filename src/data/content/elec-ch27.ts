import type { SectionContent } from '../library'

// ============================================================================
// The Electronics Master Library — Chapter 27: Differential and Multistage
// Amplifiers. Sedra/Smith, "Microelectronic Circuits" 8e, Chapters 8–9
// (pp. 500–672): the MOS and bipolar differential pairs, common-mode
// rejection and mismatch offsets, current mirrors and active loads with
// cascodes, and multistage coupling including the two-stage CMOS op amp.
// Worked-problem numbers follow the book; arithmetic re-verified. Math is
// LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh27Content: SectionContent[] = [
  // ------------------------------------------------------------------ 27.1
  {
    sectionId: 'ece-e-analog-s21',
    readingTime: 9,
    intro: 'Figure 9.1 places two matched MOSFETs over one tail current $I$ with two drain resistors $R_{D}$, and Figure 9.12 repeats the idea with BJTs over a tail $I$ and $R_{C}$ loads. Differential input $v_{id} = v_{G1} - v_{G2}$ steers the tail between the sides, while common-mode input moves both gates together. The pair rejects the latter and amplifies the former, which is why every op-amp input stage starts here.',
    objectives: [
      'Sketch the MOS and bipolar pairs and state how tail $I$ splits at $v_{id} = 0$',
      'Write single-ended and differential gains $A_{d} = g_{m}R_{D}/2$ and $g_{m}R_{D}$ for the resistive pair',
      'Contrast the MOS linear window near $V_{OV}$ with the bipolar window near $V_{T}$',
    ],
    concepts: [
      {
        term: 'Tail-current splitting',
        kind: 'definition',
        statement: 'With zero differential input each side carries **half the tail** $I/2$, tagged `tail-half`. Positive $v_{id}$ steals current toward side one until the full $I$ switches over.',
        detail: 'Figure 9.5 plots $i_{D1}$ and $i_{D2}$ against $v_{id}$ for $I = 0.4$ mA. The sum stays $I$ because the tail source holds total current fixed while the pair only decides the split.',
      },
      {
        term: 'MOS large-signal transfer',
        kind: 'theorem',
        statement: 'The MOS pair stays in saturation while **$|v_{id}|$ stays below about $\\sqrt{2}V_{OV}$**, tagged `mos-window`. Beyond that one device turns off and the transfer flattens at $0$ and $I$.',
        detail: 'With $V_{OV} = 0.25$ V the window spans roughly $0.35$ V. Larger overdrive widens linearity but lowers $g_{m}/I$ efficiency, the same trade met in Chapter 26.',
      },
      {
        term: 'Bipolar large-signal transfer',
        kind: 'theorem',
        statement: 'The bipolar pair follows a **hyperbolic-tangent law** in $v_{id}/V_{T}$ with linear range near $25$ mV, tagged `tanh-pair`. Full switching needs about $4V_{T}$ or $100$ mV.',
        detail: 'Equation 9.31 gives $i_{C1} - i_{C2} = I\\tanh(v_{id}/2V_{T})$. The $25$ mV scale explains why bipolar inputs overload long before MOS inputs with $0.25$ V overdrives.',
      },
      {
        term: 'Differential voltage gain',
        kind: 'theorem',
        statement: 'Resistive loads give **differential gain** $A_{d} = g_{m}R_{D}$ differentially and half that single-ended, tagged `Ad-pair`. The half-circuit of Figure 9.7 drives each side with $v_{id}/2$.',
        detail: 'With $g_{m} = 2$ mA per V and $R_{D} = 10$ k$\\Omega$, differential gain is $20$ V per V and single-ended is $10$ V per V. Bipolar twins replace $R_{D}$ by $R_{C}$ with $g_{m} = I_{C}/V_{T}$ per side.',
      },
      {
        term: 'Half-circuit method',
        kind: 'method',
        statement: 'Split any symmetric pair into **two half-circuits** with virtual grounds on the symmetry line, tagged `half-ckt`. Differential halves ground the tail node, while common-mode halves keep it.',
        detail: 'Figure 9.7 grounds the tail for differential signals because the node does not move. The trick reduces a two-transistor problem to one common-source or common-emitter stage per side.',
      },
    ],
    figures: [
      {
        caption: 'MOS differential pair after Figure 9.1: tail $I$ splits as $v_{id}$, with $R_{D}$ loads giving $A_{d} = g_{m}R_{D}$ differentially and half that single-ended.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="MOS differential pair with tail source and drain loads"><title>Differential pair current steering</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Diff pair: tail I steered by vid</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="150" y1="70" x2="150" y2="130"/><polyline points="150,70 158,84 170,56 182,84 194,56 206,70"/><line x1="206" y1="70" x2="360" y2="70"/><line x1="360" y1="70" x2="360" y2="130"/><line x1="470" y1="70" x2="470" y2="130"/><polyline points="470,70 478,84 490,56 502,84 514,56 526,70"/><line x1="526" y1="70" x2="580" y2="70"/><line x1="360" y1="150" x2="290" y2="150"/><line x1="470" y1="150" x2="540" y2="150"/><line x1="360" y1="130" x2="360" y2="210"/><line x1="470" y1="130" x2="470" y2="210"/><line x1="415" y1="210" x2="415" y2="250"/><circle cx="415" cy="265" r="14" fill="none"/><line x1="415" y1="279" x2="415" y2="310"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="120" y="56" font-family="sans-serif">VDD rail</text><text x="300" y="120" font-family="sans-serif">RD left</text><text x="500" y="120" font-family="sans-serif">RD right</text><text x="250" y="170" font-family="sans-serif">G1 input</text><text x="500" y="170" font-family="sans-serif">G2 input</text><text x="310" y="230" font-family="sans-serif">coupled sources</text><text x="435" y="310" font-family="sans-serif">tail I fixed</text><text x="120" y="330" font-family="sans-serif">vid steers I, sum stays fixed</text></g></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Resistive-pair gain sizing',
        problem: 'An NMOS pair runs tail $I = 0.4$ mA with $V_{OV} = 0.25$ V and $R_{D} = 10$ k$\\Omega$. Find per-side $g_{m}$, differential and single-ended gains, and the MOS linear window.',
        steps: [
          { label: 'Step 1: Per-side transconductance', text: 'Per-side $I_{D} = 0.2$ mA gives $g_{m} = 2I_{D}/V_{OV} = 1.6$ mA per V.' },
          { label: 'Step 2: Gains from the half-circuit', text: 'Differential $A_{d} = g_{m}R_{D} = 16$ V per V; single-ended is half, $8$ V per V.' },
          { label: 'Step 3: Linear window', text: 'Saturation holds to about $\\sqrt{2}V_{OV} = 0.35$ V of $v_{id}$ before one side turns off.' },
        ],
        result: '$g_{m} = 1.6$ mA per V; $A_{d} = 16$ differential, $8$ single-ended; window about $0.35$ V.',
      },
      {
        title: 'Bipolar window check with script',
        problem: 'A BJT pair runs tail $I = 0.2$ mA with $R_{C} = 5$ k$\\Omega$ and $\\beta = 100$. Find $g_{m}$, single-ended gain, input resistance, and confirm the $100$ mV switching scale.',
        steps: [
          { label: 'Step 1: Transconductance per side', text: 'Per-side $I_{C} = 0.1$ mA gives $g_{m} = I_{C}/V_{T} = 4$ mA per V at $V_{T} = 25$ mV.' },
          { label: 'Step 2: Gain and input resistance', text: 'Single-ended $A_{d} = g_{m}R_{C}/2 = 10$ V per V; differential input resistance is $2r_{\\pi} = 2\\beta/g_{m} = 50$ k$\\Omega$.' },
          { label: 'Step 3: Verify numerically', text: 'Scale check:```python\nIC = 0.1e-3\nVT = 25e-3\nRC = 5e3\nbeta = 100.0\ngm = IC / VT\nAd_se = gm * RC / 2.0\nRin = 2.0 * beta / gm\nprint(gm)\nprint(Ad_se)\nprint(Rin)\n```\nThe printout gives $0.004$ S, $10$ V per V and $50000$ $\\Omega$.' },
        ],
        result: '$g_{m} = 4$ mA per V; single-ended $10$ V per V; $R_{in} = 50$ k$\\Omega$.',
      },
    ],
    keyTakeaways: [
      'Zero $v_{id}$ splits tail $I$ as $I/2$ per side; $v_{id}$ steers the fixed sum.',
      'MOS linear window is about $\\sqrt{2}V_{OV}$; bipolar window is about $4V_{T}$.',
      'Resistive $A_{d} = g_{m}R_{D}$ differentially, half that single-ended.',
      'Half-circuits ground the tail for differential signals and solve one side only.',
    ],
    quiz: [
      {
        q: 'With $v_{id} = 0$ a tail $I = 0.4$ mA splits as:',
        options: ['$0.4$ mA and $0$ mA', '$0.2$ mA per side', '$0$ mA per side', '$0.8$ mA per side'],
        answer: 1,
        explanation: 'Step 1 — Given: symmetric pair with zero differential drive. Step 2 — Rule: matched devices share the fixed tail equally. Step 3 — Split: half of $0.4$ mA is $0.2$ mA. Step 4 — Conclude: $v_{id}$ then steers around this balance.',
      },
      {
        q: 'The MOS pair with $V_{OV} = 0.25$ V stays linear to about:',
        options: ['$25$ mV', '$1.8$ V', `$0.35$ V near $\\sqrt{2}V_{OV}$`, '$0$ V always'],
        answer: 2,
        explanation: 'Step 1 — Given: overdrive $0.25$ V. Step 2 — Rule: saturation edge scales with $\\sqrt{2}V_{OV}$. Step 3 — Compute: product is about $0.35$ V. Step 4 — Conclude: larger $V_{OV}$ widens the window at lower efficiency.',
      },
      {
        q: 'A resistive MOS pair with $g_{m} = 1.6$ mA per V and $R_{D} = 10$ k$\\Omega$ has differential gain:',
        options: ['$0.16$ V per V', '$1.6$ V per V', '$160$ V per V', '$16$ V per V'],
        answer: 3,
        explanation: 'Step 1 — Given: $g_{m}$ and $R_{D}$. Step 2 — Rule: $A_{d} = g_{m}R_{D}$ differentially. Step 3 — Compute: $1.6 \\times 10 = 16$. Step 4 — Conclude: single-ended would be $8$ V per V.',
      },
      // PYQ-pattern: diff-pair gain and linear window (rephrased, values changed)
      {
        q: 'The bipolar pair switches almost fully for $|v_{id}|$ near:',
        options: ['$4V_{T}$ near $100$ mV', '$2V_{OV}$ near $500$ mV', `$V_{DD}$`, '$0.7$ V exactly'],
        answer: 0,
        explanation: 'Step 1 — Given: tanh law in $v_{id}/V_{T}$. Step 2 — Rule: tails saturate past about four thermal voltages. Step 3 — Scale: $4 \\times 25 = 100$ mV. Step 4 — Conclude: bipolar windows are an order tighter than MOS windows.',
      },
    ],
  },
  // ------------------------------------------------------------------ 27.2
  {
    sectionId: 'ece-e-analog-s22',
    readingTime: 8,
    intro: 'Common-mode gain $A_{cm}$ measures how much of a signal moving both inputs together leaks to the output, and Figure 9.13 evaluates it with the tail impedance $R_{EE}$ explicit. The rejection ratio $CMRR = |A_{d}/A_{cm}|$ then compresses two gains into one number of merit. Section 9.4 traces finite $CMRR$ to finite tail impedance plus resistor and device mismatch that also creates input offset voltage $V_{OS}$.',
    objectives: [
      'Write $A_{cm} = -R_{C}/(2R_{EE})$ and $CMRR = g_{m}R_{EE}$ for the mismatched-free pair',
      'Convert resistor mismatch $\\Delta R_{C}/R_{C}$ into offset $V_{OS}$ and $CMRR$ limits',
      'State why differential output with ideal tail gives unbounded $CMRR$',
    ],
    concepts: [
      {
        term: 'Common-mode gain',
        kind: 'theorem',
        statement: 'With tail impedance $R_{EE}$ the single-ended **common-mode gain** is $A_{cm} = -R_{C}/(2R_{EE})$, tagged `Acm-tail`. Larger tail impedance shrinks the leak linearly.',
        detail: 'Both sides rise together, so the tail node follows and steals signal through $2R_{EE}$. Ideal current-source tails push $R_{EE}$ toward $r_{o}$ of the tail device, often above $100$ k$\\Omega$.',
      },
      {
        term: 'CMRR definition',
        kind: 'definition',
        statement: 'The **rejection ratio** $CMRR = |A_{d}/A_{cm}|$ in linear units or $20\\log CMRR$ in decibels rates the pair, tagged `cmrr-def`. Values from $60$ to $120$ dB mark good integrated pairs.',
        detail: 'With $A_{d} = g_{m}R_{C}/2$ and $A_{cm}$ above, $CMRR = g_{m}R_{EE}$ for the matched resistive pair. Doubling tail impedance doubles rejection directly.',
      },
      {
        term: 'Resistor-mismatch offset',
        kind: 'insight',
        statement: 'A load mismatch $\\Delta R_{C}$ forces an **input offset** $V_{OS} = (\\Delta R_{C}/R_{C})(V_{OV}/2)$ on MOS pairs, tagged `offset-RC`. Problem 9.70 tests $10$ k$\\Omega$ drains with one percent tolerance.',
        detail: 'The output sits off by $I\\Delta R_{C}/2$ at zero input, which referred to the input is the expression above. One percent on $10$ k$\\Omega$ with $V_{OV} = 0.25$ V already gives millivolt offsets.',
      },
      {
        term: 'Device-mismatch offset',
        kind: 'insight',
        statement: 'Threshold or area mismatch mimics a **built-in $v_{id}$** that must be applied to rebalance the drains, tagged `offset-device`. Bipolar $V_{BE}$ spread and MOS $\\Delta V_{t}$ plus $\\Delta W/W$ both contribute.',
        detail: 'Layout uses common-centroid and interdigitated fingers to cancel gradients. The book treats $V_{OS}$ statistically because each die draws a different mismatch sample.',
      },
      {
        term: 'Differential-output rejection',
        kind: 'insight',
        statement: 'Fully **differential output** cancels the common-mode component with matched loads even for finite $R_{EE}$, tagged `diff-reject`. Single-ended output keeps the $A_{cm}$ above; differential output ideally zeroes it.',
        detail: 'Mismatch reintroduces a residual proportional to $\\Delta R_{C}/R_{C}$. This is why high $CMRR$ instruments use differential outputs or trimmed mirrors before single-ended conversion.',
      },
    ],
    figures: [
      {
        caption: 'Common-mode half-circuit after Figure 9.13: both inputs move together, the tail $2R_{EE}$ degenerates the pair, and $A_{cm} = -R_{C}/(2R_{EE})$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Common mode half circuit with tail impedance"><title>Common mode gain and CMRR</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Common mode: tail 2REE sets the leak</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="300" y1="90" x2="300" y2="140"/><polyline points="300,90 308,104 320,76 332,104 344,76 356,90"/><line x1="356" y1="90" x2="430" y2="90"/><line x1="300" y1="160" x2="240" y2="160"/><line x1="300" y1="140" x2="300" y2="220"/><line x1="300" y1="220" x2="300" y2="260"/><polyline points="300,220 308,234 320,206 332,234 344,206 356,220"/><line x1="356" y1="220" x2="430" y2="220"/><line x1="300" y1="260" x2="300" y2="300"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="200" y="120" font-family="sans-serif">RC load</text><text x="360" y="120" font-family="sans-serif">output leak Acm times vicm</text><text x="180" y="180" font-family="sans-serif">common input vicm</text><text x="360" y="240" font-family="sans-serif">degeneration 2REE</text><text x="200" y="320" font-family="sans-serif">larger REE means smaller Acm, larger CMRR</text><text x="360" y="320" font-family="sans-serif">CMRR equals Ad over Acm</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'CMRR from tail impedance',
        problem: 'A BJT pair has $g_{m} = 4$ mA per V, $R_{C} = 5$ k$\\Omega$ and tail $R_{EE} = 200$ k$\\Omega$. Find $A_{d}$ single-ended, $A_{cm}$, $CMRR$ linear and in decibels.',
        steps: [
          { label: 'Step 1: Differential gain', text: 'Single-ended $A_{d} = g_{m}R_{C}/2 = 10$ V per V.' },
          { label: 'Step 2: Common-mode gain', text: 'Magnitude $|A_{cm}| = R_{C}/(2R_{EE}) = 5/400 = 0.0125$ V per V.' },
          { label: 'Step 3: Ratio and decibels', text: '$CMRR = 10/0.0125 = 800$, or $20\\log(800) = 58$ dB.' },
        ],
        result: '$A_{d} = 10$ V per V; $|A_{cm}| = 0.0125$; $CMRR = 800$ or $58$ dB.',
      },
      {
        title: 'Offset from one-percent drains (Problem 9.70)',
        problem: 'An NMOS pair uses $10$ k$\\Omega$ drains with one percent tolerance, $V_{OV} = 0.25$ V and tail $I = 0.4$ mA. Estimate worst $V_{OS}$ from resistor mismatch and verify $CMRR$ scaling with a script.',
        steps: [
          { label: 'Step 1: Resistor spread', text: 'Worst $\\Delta R_{C}/R_{C} = 0.02$ across the two sides for opposite one-percent extremes.' },
          { label: 'Step 2: Refer to input', text: 'Offset $V_{OS} = 0.02 \\times 0.25/2 = 2.5$ mV, before device thresholds add more.' },
          { label: 'Step 3: Script the trade', text: 'Offset and CMRR together:```python\nVOV = 0.25\ndR_R = 0.02\ngm = 1.6e-3\nREE = 200e3\nVOS = dR_R * VOV / 2.0\nCMRR = gm * REE\nprint(VOS)\nprint(CMRR)\n```\nThe printout gives $0.0025$ V of offset and $320$ linear rejection.' },
        ],
        result: '$V_{OS} \\approx 2.5$ mV from drains alone; $CMRR = 320$ or $50$ dB.',
      },
    ],
    keyTakeaways: [
      '$A_{cm} = -R_{C}/(2R_{EE})$ single-ended; differential output ideally cancels it.',
      '$CMRR = |A_{d}/A_{cm}| = g_{m}R_{EE}$ for the matched resistive pair.',
      'Drain mismatch $\\Delta R_{C}/R_{C}$ gives $V_{OS} = (\\Delta R_{C}/R_{C})(V_{OV}/2)$.',
      'High $CMRR$ wants large tail impedance plus matched layout and loads.',
    ],
    quiz: [
      {
        q: 'For $R_{C} = 5$ k$\\Omega$ and $R_{EE} = 200$ k$\\Omega$, $|A_{cm}|$ single-ended is:',
        options: ['$10$ V per V', '$0.0125$ V per V', '$800$ V per V', '$58$ V per V'],
        answer: 1,
        explanation: 'Step 1 — Given: load and tail values. Step 2 — Rule: $|A_{cm}| = R_{C}/(2R_{EE})$. Step 3 — Compute: $5/400 = 0.0125$. Step 4 — Conclude: the leak is nearly three orders below $A_{d}$.',
      },
      {
        q: '$CMRR$ in decibels for linear $800$ is:',
        options: ['$800$ dB', '$8$ dB', `$58$ dB from $20\\log(800)$`, '$0.0125$ dB'],
        answer: 2,
        explanation: 'Step 1 — Given: linear ratio $800$. Step 2 — Rule: decibels use $20\\log$ for voltage ratios. Step 3 — Compute: logarithm gives $58$ dB. Step 4 — Conclude: decibels compress thousand-scale rejection to tens.',
      },
      // PYQ-pattern: offset from drain tolerance (rephrased, values changed)
      {
        q: 'Ten kiloohm drains with opposite one-percent extremes and $V_{OV} = 0.25$ V give $V_{OS}$ about:',
        options: ['$2.5$ mV', '$250$ mV', '$25$ mV', '$0$ mV ideally always'],
        answer: 0,
        explanation: 'Step 1 — Given: $\\Delta R/R = 0.02$ worst case. Step 2 — Rule: $V_{OS} = (\\Delta R/R)(V_{OV}/2)$. Step 3 — Compute: $0.02 \\times 0.125 = 0.0025$ V. Step 4 — Conclude: resistors alone already force millivolt offsets.',
      },
      {
        q: 'Fully differential output with matched loads and ideal tail has $CMRR$:',
        options: ['Zero', 'Equal to $g_{m}$ only', 'Equal to $R_{C}$ only', 'Unbounded ideally from canceled $A_{cm}$'],
        answer: 3,
        explanation: 'Step 1 — Given: differential subtraction of matched sides. Step 2 — Rule: common-mode components are identical and subtract out. Step 3 — Ideal: denominator tends to zero. Step 4 — Conclude: mismatch sets the practical ceiling.',
      },
    ],
  },
  // ------------------------------------------------------------------ 27.3
  {
    sectionId: 'ece-e-analog-s23',
    readingTime: 9,
    intro: 'Chapter 8 builds the current mirrors that bias every differential stage, and Section 9.5 swaps resistive drains for active PMOS loads to multiply gain. The basic, cascode and Wilson mirrors trade headroom for output resistance, while the Widlar source reaches microamp bias with modest resistors. Active-load gain $A_{d} = -g_{m}(r_{oN} \\parallel r_{oP})$ then replaces $R_{D}$ by parallel transistor resistances.',
    objectives: [
      'Rank basic, cascode, Wilson and Widlar mirrors by $R_{out}$ and minimum voltage',
      'Write active-load gain $A_{d} = -g_{m}(r_{oN} \\parallel r_{oP})$ and cascode boost $g_{m}(g_{m}r_{o}^{2})$',
      'Size a Widlar emitter resistor for a target microamp output from a milliamp reference',
    ],
    concepts: [
      {
        term: 'Basic mirror ratio',
        kind: 'definition',
        statement: 'Matched gate-source or base-emitter voltages force **output current to mirror** the reference by geometry, tagged `basic-mirror`. Figure 8.2 sets $I_{O} = (W_{2}/W_{1})I_{REF}$ for MOS and $(A_{2}/A_{1})I_{REF}$ for BJT.',
        detail: 'Output resistance is just $r_{o}$ of the output device. Base-current loss divides bipolar ratio by $1 + 2/\\beta$ unless a helper buffer is added.',
      },
      {
        term: 'Cascode output boost',
        kind: 'theorem',
        statement: 'Stacking a common-gate or common-base device multiplies resistance to **$g_{m}r_{o}^{2}$**, tagged `cascode-ro`. Figure 8.9 shows the cascode mirror holding the inner drain nearly fixed.',
        detail: 'The upper device senses source movement and counter-drives its drain. Minimum output voltage rises by one overdrive or $V_{CEsat}$, the headroom price of the boost.',
      },
      {
        term: 'Wilson mirror',
        kind: 'insight',
        statement: 'The three-transistor **Wilson loop** balances two paths for about $g_{m}r_{o}^{2}/2$ with built-in feedback, tagged `wilson-loop`. Figure 8.13 uses negative feedback to stiffen the output.',
        detail: 'Wilson needs about one volt of headroom but tolerates $\\beta$ loss better than the basic pair. It also mirrors accurately without cascode bias voltages.',
      },
      {
        term: 'Widlar low-current source',
        kind: 'method',
        statement: 'An emitter resistor drops the extra voltage so a **microamp output** flows from a milliamp reference, tagged `widlar-micro`. Equation 8.22 solves $V_{BE1} - V_{BE2} = I_{E2}R_{E}$ logarithmically.',
        detail: 'With $1$ mA reference and $R_{E} = 10$ k$\\Omega$, outputs near $10$ $\\mu$A emerge without megohm resistors. The resistor also raises output resistance above $r_{o}$ by feedback.',
      },
      {
        term: 'Active-load gain',
        kind: 'theorem',
        statement: 'Replacing $R_{D}$ by a PMOS mirror gives **$A_{d} = -g_{m}(r_{oN} \\parallel r_{oP})$**, tagged `active-gain`. Figure 9.31 converts the differential current to single-ended voltage at high impedance.',
        detail: 'With $r_{o} = 200$ k$\\Omega$ per side and $g_{m} = 2$ mA per V, gain reaches $-200$ V per V. Cascoding one or both sides pushes the parallel toward $g_{m}r_{o}^{2}$ for gains past $1000$ V per V.',
      },
    ],
    figures: [
      {
        caption: 'Cascode mirror after Figure 8.9: the upper gate holds the inner drain fixed, lifting $R_{out}$ to $g_{m}r_{o}^{2}$ for the active-loaded pair.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cascode current mirror stacking"><title>Cascode mirror boost</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Cascode: stacked gates boost Rout</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="250" y1="80" x2="250" y2="140"/><line x1="450" y1="80" x2="450" y2="140"/><line x1="250" y1="160" x2="250" y2="220"/><line x1="450" y1="160" x2="450" y2="220"/><line x1="250" y1="220" x2="450" y2="220"/><circle cx="250" cy="150" r="5" fill="currentColor" stroke="none"/><circle cx="450" cy="150" r="5" fill="currentColor" stroke="none"/><line x1="250" y1="220" x2="250" y2="300"/><line x1="450" y1="220" x2="450" y2="300"/><line x1="200" y1="300" x2="500" y2="300"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="230" y="70" font-family="sans-serif">IREF in</text><text x="430" y="70" font-family="sans-serif">IO out</text><text x="200" y="180" font-family="sans-serif">lower matched pair</text><text x="460" y="180" font-family="sans-serif">upper cascode gates</text><text x="230" y="320" font-family="sans-serif">common rail</text><text x="360" y="250" font-family="sans-serif">inner nodes held fixed</text><text x="120" y="340" font-family="sans-serif">Rout rises to gm times ro squared</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Active-load gain magnitude',
        problem: 'A mirror-loaded MOS pair has $g_{m} = 2$ mA per V with $r_{oN} = r_{oP} = 200$ k$\\Omega$. Find the single-ended gain and the gain if both sides are cascoded to $8$ M$\\Omega$ each.',
        steps: [
          { label: 'Step 1: Parallel the resistances', text: 'Plain parallel is $200 \\parallel 200 = 100$ k$\\Omega$, so $A_{d} = -2 \\times 100 = -200$ V per V.' },
          { label: 'Step 2: Cascode the loads', text: 'Cascoded parallel is $8 \\parallel 8 = 4$ M$\\Omega$, so $A_{d} = -2 \\times 4000 = -8000$ V per V ideally.' },
          { label: 'Step 3: Note the practical cap', text: 'Body effect and headroom halve the ideal, yet gains past $1000$ V per V remain routine in the book’s Example 9.6 style.' },
        ],
        result: 'Plain $-200$ V per V; cascoded ideal $-8000$ V per V, practical past $-1000$ V per V.',
      },
      {
        title: 'Widlar microamp sizing',
        problem: 'A Widlar source has $1$ mA reference and must output $20$ $\\mu$A at $V_{T} = 25$ mV. Estimate $R_{E}$ and the output-resistance advantage, then check with a script.',
        steps: [
          { label: 'Step 1: Log voltage difference', text: 'Mirror law gives $\\Delta V_{BE} = V_{T}\\ln(1000/20) = 25\\ln(50) = 97.8$ mV across $R_{E}$.' },
          { label: 'Step 2: Size the resistor', text: 'Resistor $R_{E} = 97.8/0.02 = 4.89$ k$\\Omega$ drops that difference at $20$ $\\mu$A.' },
          { label: 'Step 3: Script the sizing', text: 'Log sizing in code:```python\nimport math\nIREF = 1e-3\nIO = 20e-6\nVT = 25e-3\ndV = VT * math.log(IREF / IO)\nRE = dV / IO\nprint(dV)\nprint(RE)\n```\nThe printout gives about $0.0978$ V and $4890$ $\\Omega$.' },
        ],
        result: '$R_{E} \\approx 4.9$ k$\\Omega$ for $20$ $\\mu$A; $R_{out}$ exceeds $r_{o}$ by feedback.',
      },
    ],
    keyTakeaways: [
      'Basic mirror $R_{out} = r_{o}$; cascode reaches $g_{m}r_{o}^{2}$; Wilson near half that.',
      'Widlar $R_{E}$ sets $\\Delta V_{BE} = V_{T}\\ln(I_{REF}/I_{O})$ for microamp outputs.',
      'Active-load $A_{d} = -g_{m}(r_{oN} \\parallel r_{oP})$ replaces $R_{D}$ by transistor impedance.',
      'Cascoded active loads push practical gains past $1000$ V per V.',
    ],
    quiz: [
      {
        q: 'A basic MOS mirror with $(W/L)_{2} = 2(W/L)_{1}$ and $I_{REF} = 100$ $\\mu$A gives:',
        options: ['$50$ $\\mu$A', '$100$ $\\mu$A ignoring geometry', '$200$ $\\mu$A by geometry', '$0$ $\\mu$A'],
        answer: 2,
        explanation: 'Step 1 — Given: matched $V_{GS}$ and doubled width. Step 2 — Rule: current scales with geometry at equal overdrive. Step 3 — Compute: $2 \\times 100 = 200$ $\\mu$A. Step 4 — Conclude: length modulation then adds a small slope.',
      },
      {
        q: 'Cascoding a mirror primarily:',
        options: ['Lowers $R_{out}$ to $1/g_{m}$', 'Raises $R_{out}$ toward $g_{m}r_{o}^{2}$ at extra headroom', 'Removes the need for bias', 'Halves the mirrored current'],
        answer: 1,
        explanation: 'Step 1 — Given: stacked common-gate device. Step 2 — Rule: the upper gate bootstraps the inner drain. Step 3 — Effect: drain movement is divided by $g_{m}r_{o}$. Step 4 — Conclude: resistance multiplies at one overdrive of headroom.',
      },
      {
        q: 'Active-load gain $-g_{m}(r_{oN} \\parallel r_{oP})$ with $g_{m} = 2$ mA per V and $100$ k$\\Omega$ parallel is:',
        options: ['$-2$ V per V', '$+200$ V per V', '$0$ V per V', '$-200$ V per V'],
        answer: 3,
        explanation: 'Step 1 — Given: transconductance and parallel resistance. Step 2 — Rule: Figure 9.31 active-load formula. Step 3 — Compute: $2 \\times 100 = 200$ with inversion. Step 4 — Conclude: resistors cannot reach this impedance on chip.',
      },
      // PYQ-pattern: Widlar resistor for microamp bias (rephrased, values changed)
      {
        q: 'A Widlar source from $1$ mA to $20$ $\\mu$A needs $R_{E}$ about:',
        options: [`$4.9$ k$\\Omega$ from $V_{T}\\ln(50)/I_{O}$`, `$50$ $\\Omega$`, `$10$ M$\\Omega$`, `$0$ $\\Omega$`],
        answer: 0,
        explanation: 'Step 1 — Given: fifty-to-one current ratio. Step 2 — Rule: $\\Delta V_{BE} = V_{T}\\ln(50) = 97.8$ mV. Step 3 — Size: $97.8/0.02 = 4.89$ k$\\Omega$. Step 4 — Conclude: kilohms replace megohms for microamp bias.',
      },
    ],
  },
  // ------------------------------------------------------------------ 27.4
  {
    sectionId: 'ece-e-analog-s24',
    readingTime: 8,
    intro: 'Section 9.6 stacks a differential input stage, a common-source gain stage and a follower output into the two-stage CMOS op amp of Figure 9.32. Direct coupling passes direct current and signal together, so each stage bias must absorb the previous level shift. Overall open-circuit gain is the product of stage gains once each loading $R_{in}$ is paralleled into its driver.',
    objectives: [
      'Explain why integrated stages use direct coupling while discrete boards use capacitors',
      'Compute overall gain $A_{v} = A_{v1}A_{v2}A_{v3}$ with $R_{in}$ loading at each interface',
      'Describe the two-stage CMOS op amp signal path from diff pair to common-source to buffer',
    ],
    concepts: [
      {
        term: 'Direct versus capacitive coupling',
        kind: 'definition',
        statement: 'Integrated stages share silicon so they **couple directly** without capacitors, tagged `direct-couple`. Discrete boards insert coupling capacitors to isolate independent bias points at the price of low-frequency poles.',
        detail: 'Direct coupling passes offset as well as signal, which is why offset control dominates Chapter 27. Capacitors block direct current but each high-pass pole of Chapter 28 appears at the interface.',
      },
      {
        term: 'Loading-aware product',
        kind: 'method',
        statement: 'Overall gain multiplies **loaded stage gains**, where each $R_{in}$ parallels the driver load, tagged `loaded-product`. Unloaded products overstate gain whenever a low $R_{in}$ follows a high $R_{out}$.',
        detail: 'For two stages $A_{v} = -g_{m1}(r_{o1} \\parallel R_{in2}) \\times -g_{m2}(r_{o2} \\parallel R_{L})$. Followers are inserted exactly to raise $R_{in2}$ and preserve the product.',
      },
      {
        term: 'Two-stage CMOS path',
        kind: 'definition',
        statement: 'Figure 9.32 runs **diff pair into current-mirror load**, then common-source, then follower or class-AB output, tagged `cmos-two-stage`. Example 9.6 style gains reach $1000$ V per V from the two voltage stages.',
        detail: 'The first stage gives differential-to-single-ended conversion with high impedance, the second gives large swing on $R_{out}$, and compensation of Chapter 28 stabilizes the loop.',
      },
      {
        term: 'Cascode front end',
        kind: 'insight',
        statement: 'Telescoped or folded **cascode inputs** raise the first-stage impedance to $g_{m}r_{o}^{2}$ without a second stage, tagged `cascode-front`. Figure 9.27 folds the pair for wider input common-mode range.',
        detail: 'Folding keeps input transistors near the rail while the cascode sits above. Gain per stage rises, but headroom and bias complexity grow with the stack.',
      },
      {
        term: 'Bipolar op-amp input stage',
        kind: 'definition',
        statement: 'The bipolar twin of Section 9.6 uses a **BJT pair with active load** plus emitter followers for level shift, tagged `bjt-op-front`. Its $g_{m} = I_{C}/V_{T}$ gives larger gain per milliamp than MOS at the same tail.',
        detail: 'Lower $R_{in} = 2r_{\\pi}$ and larger $1/f$ noise are the prices. Modern BiCMOS processes mix the two to keep bipolar gain with MOS impedance.',
      },
    ],
    figures: [
      {
        caption: 'Two-stage CMOS op amp after Figure 9.32: differential input with mirror load drives a common-source second stage, with $A_{v} = A_{v1}A_{v2}$ loaded.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two stage CMOS op amp block cascade"><title>Multistage cascade path</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Multistage: diff pair then gain then buffer</text><g stroke="currentColor" stroke-width="2" fill="none"><rect x="90" y="120" width="150" height="120" rx="6"/><rect x="290" y="120" width="150" height="120" rx="6"/><rect x="490" y="120" width="140" height="120" rx="6"/><line x1="240" y1="180" x2="290" y2="180"/><polygon points="290,180 278,174 278,186" fill="currentColor" stroke="none"/><line x1="440" y1="180" x2="490" y2="180"/><polygon points="490,180 478,174 478,186" fill="currentColor" stroke="none"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="110" y="170" font-family="sans-serif">Av1 diff plus mirror</text><text x="310" y="170" font-family="sans-serif">Av2 common source</text><text x="505" y="170" font-family="sans-serif">buffer output</text><text x="110" y="200" font-family="sans-serif">high Rout1</text><text x="310" y="200" font-family="sans-serif">large swing</text><text x="505" y="200" font-family="sans-serif">low Rout</text><text x="90" y="270" font-family="sans-serif">direct coupling carries bias plus signal</text><text x="90" y="290" font-family="sans-serif">overall Av equals loaded Av1 times Av2</text></g></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Loaded two-stage product',
        problem: 'Stage one has $g_{m1} = 2$ mA per V with $r_{o1} = 100$ k$\\Omega$; stage two has $R_{in2} = 50$ k$\\Omega$, $g_{m2} = 3$ mA per V and $R_{L}^{\\prime} = 50$ k$\\Omega$. Find loaded $A_{v1}$, $A_{v2}$ and overall $A_{v}$.',
        steps: [
          { label: 'Step 1: Load the first stage', text: 'First load is $100 \\parallel 50 = 33.3$ k$\\Omega$, so $A_{v1} = -2 \\times 33.3 = -66.7$ V per V.' },
          { label: 'Step 2: Second-stage gain', text: 'Second gain is $A_{v2} = -3 \\times 50 = -150$ V per V into its own load.' },
          { label: 'Step 3: Multiply with sign', text: 'Overall $A_{v} = (-66.7) \\times (-150) = 10000$ V per V noninverted.' },
        ],
        result: '$A_{v1} = -66.7$ V per V; $A_{v2} = -150$ V per V; overall $10000$ V per V.',
      },
      {
        title: 'Why the follower helps (script check)',
        problem: 'Repeat the first stage unloaded ($100$ k$\\Omega$ only) versus loaded ($33.3$ k$\\Omega$), and show how a follower raising $R_{in2}$ to $1$ M$\\Omega$ recovers the gain.',
        steps: [
          { label: 'Step 1: Unloaded first gain', text: 'Unloaded $A_{v1} = -2 \\times 100 = -200$ V per V, three times the loaded $-66.7$ V per V.' },
          { label: 'Step 2: Buffered interface', text: 'With $R_{in2} = 1$ M$\\Omega$, load is $100 \\parallel 1000 = 90.9$ k$\\Omega$ and $A_{v1} = -182$ V per V.' },
          { label: 'Step 3: Confirm by script', text: 'Loading sweep:```python\ngm1 = 2e-3\nro1 = 100e3\nfor Rin2 in [50e3, 1e6]:\n    RL = ro1 * Rin2 / (ro1 + Rin2)\n    print(RL, -gm1 * RL)\n```\nThe printout gives $33333$ $\\Omega$ with $-66.7$ V per V, then $90909$ $\\Omega$ with $-182$ V per V.' },
        ],
        result: 'Loading costs two thirds; buffering recovers to $-182$ V per V.',
      },
    ],
    keyTakeaways: [
      'On-chip stages couple directly; discrete stages isolate bias with capacitors.',
      'Overall $A_{v}$ multiplies loaded gains with $R_{in}$ paralleled at each joint.',
      'Two-stage CMOS path is diff pair plus mirror, then common-source, then buffer.',
      'Followers and cascodes preserve the product by raising interface impedance.',
    ],
    quiz: [
      {
        q: 'Direct coupling is favored on chip because:',
        options: ['Direct current must always be blocked', 'Gain is zero with direct coupling', 'Capacitors are area-hungry and block needed bias tracking', 'Offsets vanish automatically'],
        answer: 2,
        explanation: 'Step 1 — Given: silicon area costs and bias needs. Step 2 — Rule: capacitors isolate bias at low-frequency cost. Step 3 — Chip: shared substrate tracks bias without them. Step 4 — Conclude: offsets are managed instead of blocked.',
      },
      // PYQ-pattern: loaded cascade product (rephrased, values changed)
      {
        q: 'Stage one $-66.7$ V per V times stage two $-150$ V per V gives:',
        options: ['$+10000$ V per V noninverted', '$-217$ V per V', '$-10000$ V per V', '$+217$ V per V'],
        answer: 0,
        explanation: 'Step 1 — Given: two loaded inverting gains. Step 2 — Rule: overall is the product with loading already inside. Step 3 — Compute: $66.7 \\times 150 = 10000$. Step 4 — Conclude: two inversions return a positive sign.',
      },
      {
        q: 'Raising $R_{in2}$ from $50$ k$\\Omega$ to $1$ M$\\Omega$ with $r_{o1} = 100$ k$\\Omega$:',
        options: ['Leaves $A_{v1}$ unchanged', 'Recovers $A_{v1}$ from $-66.7$ toward $-182$ V per V', 'Zeroes $A_{v1}$', 'Inverts $A_{v1}$ to positive'],
        answer: 1,
        explanation: 'Step 1 — Given: driver impedance $100$ k$\\Omega$. Step 2 — Rule: load is $r_{o1} \\parallel R_{in2}$. Step 3 — Compute: $33.3$ k$\\Omega$ rises to $90.9$ k$\\Omega$. Step 4 — Conclude: buffering preserves first-stage gain.',
      },
      {
        q: 'A folded-cascode front end primarily adds:',
        options: ['Lower supply voltage', 'Larger offset by design', 'Capacitive coupling', 'Higher first-stage impedance toward $g_{m}r_{o}^{2}$'],
        answer: 3,
        explanation: 'Step 1 — Given: stacked common-gate devices on the pair. Step 2 — Rule: cascodes multiply resistance. Step 3 — Fold: input range widens while impedance stays high. Step 4 — Conclude: one stage does the work of two.',
      },
    ],
  },
]
