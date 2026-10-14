import type { SectionContent } from '../library'

// ============================================================================
// The Electronics Master Library — Chapter 26: Transistor Amplifier Stages.
// Sedra/Smith, "Microelectronic Circuits" 8e, Chapter 7 (pp. 365–497):
// bias design for swing and linearity, small-signal operation, the three
// basic configurations for MOS and bipolar devices, discrete biasing and
// the gain input-resistance output-resistance comparison table.
// Worked-problem numbers follow the book; arithmetic re-verified. Math is
// LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh26Content: SectionContent[] = [
  // ------------------------------------------------------------------ 26.1
  {
    sectionId: 'elec-ch26-s1',
    readingTime: 8,
    intro: 'The voltage-transfer characteristic of Figure 7.2 has its steepest segment on the interval labeled $AB$, where the MOSFET stays in saturation and the BJT stays in the active region. Biasing parks the quiescent point $Q$ on that segment so a small superimposed signal sees an almost linear slope. Example 7.1 fixes the endpoints at $V_{GS} = 0.4$ V and $V_{GS} = 0.613$ V for a $1.8$ V supply with $R_{D} = 17.5$ k$\\Omega$.',
    objectives: [
      'Place the bias point $Q$ on the active segment $AB$ for a target $V_{DS}$ or $V_{CE}$',
      'Use headroom and legroom from Figure 7.9 to trade gain against allowable swing',
      'Apply the small-signal limits $v_{gs} \\ll 2V_{OV}$ and $v_{be} \\ll V_{T}$ before trusting linear gain',
    ],
    concepts: [
      {
        term: 'Quiescent point on segment AB',
        kind: 'definition',
        statement: 'The **bias point** $Q$ is the direct-current pair $(V_{GS}, V_{DS})$ or $(V_{BE}, V_{CE})$ on the steep segment, tagged `q-on-AB`. All signal slopes are evaluated at $Q$ with the input signal set to zero.',
        detail: 'Figure 7.3 selects $V_{GS}$ to land $Q$ on $AB$. Equation 7.10 gives $V_{DS} = V_{DD} - I_{D}R_{D}$ for MOS and the analogous $V_{CE} = V_{CC} - I_{C}R_{C}$ for bipolar stages.',
      },
      {
        term: 'Headroom and legroom',
        kind: 'insight',
        statement: 'Distance from $Q$ to the supply rail is **headroom** for positive peaks, while distance to the triode or saturation edge is **legroom** for negative peaks, tagged `head-leg-room`. Figure 7.9 shows $Q_{1}$ starved of headroom and $Q_{2}$ starved of legroom.',
        detail: 'Clipping on positive peaks means the device cuts off, while clipping on negative peaks means it enters triode or saturation. Centering $V_{DS}$ or $V_{CE}$ between the rails maximizes symmetric swing.',
      },
      {
        term: 'MOS small-signal linearity limit',
        kind: 'theorem',
        statement: 'The square-law drain current stays almost linear only while the **signal amplitude** obeys $v_{gs} \\ll 2V_{OV}$, tagged `vgs-small`. Equation 7.30 is the formal gate for neglecting the square term in Equation 7.28.',
        detail: 'With $V_{OV} = 0.22$ V the linear gate is a few tens of millivolts. Larger $V_{OV}$ widens the linear mouth but lowers $g_{m}$ per milliamp and steals swing.',
      },
      {
        term: 'BJT small-signal linearity limit',
        kind: 'theorem',
        statement: 'The exponential collector current stays almost linear only while the **base signal** obeys $v_{be} \\ll V_{T}$, tagged `vbe-small`. In practice peaks near $5$ mV keep distortion small at room temperature.',
        detail: 'Here $V_{T} = 25$ mV sets the scale, so $10$ mV already bends the exponential visibly. Bias design must therefore keep source attenuation and stage gain consistent with this ceiling.',
      },
      {
        term: 'Load-line bias construction',
        kind: 'method',
        statement: 'Draw the **load line** $v_{DS} = V_{DD} - i_{D}R_{D}$ across the device curves and pick $Q$ where it meets the chosen bias current, tagged `load-line-Q`. Moving $R_{D}$ rotates the line, while moving $V_{GS}$ or $V_{BE}$ slides $Q$ along it.',
        detail: 'Larger $R_{D}$ steepens the voltage drop and raises gain but pushes $Q$ toward the triode edge. The book optimizes by placing $Q$ near point $B$ for gain yet far enough back for the required negative swing.',
      },
    ],
    figures: [
      {
        caption: 'Load-line bias after Figures 7.2 and 7.9: the $AB$ segment gives voltage gain, with headroom toward $V_{DD}$ and legroom toward the triode edge setting the two clipping limits.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Load line with bias point Q headroom and legroom"><title>Load line and bias point Q</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Bias Q on segment AB: headroom and legroom</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="90" y1="290" x2="630" y2="290"/><line x1="90" y1="290" x2="90" y2="80"/><line x1="90" y1="250" x2="600" y2="110"/><circle cx="360" cy="176" r="7" fill="currentColor" stroke="none"/><line x1="360" y1="176" x2="360" y2="290" stroke-dasharray="7 5"/><line x1="360" y1="176" x2="90" y2="176" stroke-dasharray="7 5"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="96" y="310" font-family="sans-serif">ground</text><text x="600" y="310" font-family="sans-serif">VDD rail</text><text x="368" y="168" font-family="sans-serif">Q on AB</text><text x="400" y="120" font-family="sans-serif">load line slope set by RD</text><text x="120" y="140" font-family="sans-serif">headroom to supply</text><text x="120" y="230" font-family="sans-serif">legroom to triode edge</text><text x="96" y="70" font-family="sans-serif">steep AB means high gain</text><text x="360" y="310" font-family="sans-serif">VD at Q</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'VTC endpoints (Sedra Exercise 7.1)',
        problem: 'The amplifier of Figure 7.2(a) runs from $V_{DD} = 1.8$ V with $R_{D} = 17.5$ k$\\Omega$ and a MOSFET with $V_{t} = 0.4$ V and $k_{n} = 4$ mA per V$^{2}$. Find the coordinates of points $A$ and $B$ bounding the active segment, and the output at zero gate bias.',
        steps: [
          { label: 'Step 1: Locate cutoff point A', text: 'At $V_{GS} = V_{t} = 0.4$ V the drain current is zero, so $V_{DS} = V_{DD} = 1.8$ V by Equation 7.3.' },
          { label: 'Step 2: Solve the saturation edge for B', text: 'On the edge $V_{DS} = V_{GS} - V_{t}$ combined with $V_{DS} = V_{DD} - (k_{n} / 2)(V_{GS} - V_{t})^{2}R_{D}$ gives $V_{GS} = 0.613$ V and $V_{DS} = 0.213$ V.' },
          { label: 'Step 3: State the zero-bias output', text: 'With $V_{GS} = 0$ V the device is off, so $V_{DS} = 1.8$ V sits at the supply rail above point $A$.' },
        ],
        result: 'Point $A$ is $(0.4, 1.8)$ V, point $B$ is $(0.613, 0.213)$ V; zero bias parks at $1.8$ V.',
      },
      {
        title: 'Centering Q for symmetric swing',
        problem: 'A MOS stage uses $V_{DD} = 1.8$ V with the $B$ point at $V_{DS} = 0.213$ V. Choose $V_{DS}$ at $Q$ for symmetric clipping and check the gain slope intuition if $g_{m} = 1.7$ mA per V with $R_{D} = 17.5$ k$\\Omega$.',
        steps: [
          { label: 'Step 1: Split the active interval', text: 'The active drain span runs from $1.8$ V down to $0.213$ V, so the midpoint is near $1.0$ V for equal headroom and legroom.' },
          { label: 'Step 2: Estimate the small-signal gain', text: 'Voltage gain is $A_{v} = -g_{m}R_{D}$, about $-30$ V per V here before output-resistance correction.' },
          { label: 'Step 3: Verify with a quick script', text: 'Centering and gain check in one pass:```python\nVDD = 1.8\nVDSB = 0.213\ngm = 1.7e-3\nRD = 17.5e3\nVQ = (VDD + VDSB) / 2.0\nAv = -gm * RD\nprint(VQ)\nprint(Av)\n```\nThe printout gives about $1.0$ V of drain bias and about $-30$ V per V of gain.' },
        ],
        result: 'Center $V_{DS}$ near $1.0$ V; small-signal gain near $-30$ V per V.',
      },
    ],
    keyTakeaways: [
      'Bias point $Q$ must sit on the steep active segment $AB$ of the voltage-transfer characteristic.',
      'Headroom to the supply limits positive peaks; legroom to triode or saturation limits negative peaks.',
      'Linearity needs $v_{gs} \\ll 2V_{OV}$ for MOS and $v_{be} \\ll V_{T}$ for BJT stages.',
      'Exercise 7.1 bounds $AB$ at $(0.4, 1.8)$ V and $(0.613, 0.213)$ V for the $1.8$ V stage.',
    ],
    quiz: [
      {
        q: 'The bias point $Q$ of a transistor amplifier is best described as:',
        options: ['The direct-current operating point on the active segment $AB$', 'The peak of the output sine wave', 'The supply voltage $V_{DD}$ itself', 'The threshold voltage $V_{t}$ of the device'],
        answer: 0,
        explanation: 'Step 1 — Given: the VTC of Figure 7.2. Step 2 — Rule: linear gain lives on the steep active interval. Step 3 — Role: $Q$ fixes the direct-current voltages with zero signal. Step 4 — Conclude: signals then ride a short almost-linear piece around $Q$.',
      },
      {
        q: 'A stage biased with $Q$ very close to $V_{DD}$ will first show:',
        options: ['Triode operation on negative peaks', 'Clipped positive peaks from cutoff with poor headroom', 'Infinite bandwidth', 'Zero transconductance'],
        answer: 1,
        explanation: 'Step 1 — Given: $Q_{1}$ of Figure 7.9 near the rail. Step 2 — Rule: headroom is the distance to the supply. Step 3 — Event: positive excursions turn the device off. Step 4 — Conclude: the top of the wave clips while gain stays high.',
      },
      {
        q: 'For linear MOS operation the input signal must satisfy:',
        options: ['$v_{gs} \\approx 10V_{OV}$ for best linearity', '$v_{gs} = V_{DD}$ always', 'Any amplitude provided $Q$ is centered', `$v_{gs} \\ll 2V_{OV}$`],
        answer: 3,
        explanation: 'Step 1 — Given: the square-law drain expression. Step 2 — Rule: Equation 7.30 bounds the square term. Step 3 — Test: small amplitude makes the quadratic negligible. Step 4 — Conclude: only the linear $g_{m}v_{gs}$ term survives.',
      },
      // PYQ-pattern: VTC endpoint and swing centering (rephrased, values changed)
      {
        q: 'In Exercise 7.1 the active segment $AB$ ends at point $B$ with:',
        options: ['$V_{GS} = 1.8$ V and $V_{DS} = 0.4$ V', '$V_{GS} = 0.4$ V and $V_{DS} = 0.4$ V', '$V_{GS} = 0.613$ V and $V_{DS} = 0.213$ V', '$V_{GS} = 0$ V and $V_{DS} = 0$ V'],
        answer: 2,
        explanation: 'Step 1 — Given: $V_{DD} = 1.8$ V, $R_{D} = 17.5$ k$\\Omega$, $V_{t} = 0.4$ V. Step 2 — Rule: edge satisfies $V_{DS} = V_{GS} - V_{t}$ plus the load line. Step 3 — Solve: substitution yields $0.613$ V and $0.213$ V. Step 4 — Conclude: beyond $B$ the device enters triode.',
      },
    ],
  },
  // ------------------------------------------------------------------ 26.2
  {
    sectionId: 'elec-ch26-s2',
    readingTime: 9,
    intro: 'Section 7.3 builds the three basic stages by grounding one transistor terminal for signal while driving another and loading the third. The common-emitter and common-source stages invert with large magnitude, while the common-base and common-gate stages keep the same magnitude without inversion. Their small-signal models of Figures 7.13 to 7.25 give the gain and resistance formulas collected in Table 7.1.',
    objectives: [
      'Write the voltage gain $A_{v} = -g_{m}(R_{D} \\parallel R_{L})$ and its bipolar twin $A_{v} = -g_{m}(R_{C} \\parallel R_{L})$',
      'Contrast input resistance $r_{\\pi}$ versus $R_{G}$ versus $1/g_{m}$ across the three configurations',
      'Select common-base or common-gate when low input resistance or wide bandwidth is required',
    ],
    concepts: [
      {
        term: 'CE and CS voltage gain',
        kind: 'theorem',
        statement: 'Loaded common-emitter and common-source stages give **inverting gain** $A_{v} = -g_{m}R_{D}^{\\prime}$ with $R_{D}^{\\prime} = R_{D} \\parallel R_{L}$, tagged `ce-cs-gain`. Including $r_{o}$ replaces $R_{D}^{\\prime}$ by $r_{o} \\parallel R_{D} \\parallel R_{L}$.',
        detail: 'Equation 7.36 derives $-g_{m}R_{D}$ for the unloaded MOS case, and the bipolar twin replaces $R_{D}$ by $R_{C}$. The minus sign is the $180$ degree phase shift of Figure 7.12.',
      },
      {
        term: 'CB and CG noninverting gain',
        kind: 'theorem',
        statement: 'Common-base and common-gate stages give **noninverting gain** near $+g_{m}R_{C}^{\\prime}$ with low input resistance, tagged `cb-cg-gain`. Figure 7.25 shows the base grounded for signal with the input driven into the emitter.',
        detail: 'Magnitude matches the CE and CS stages, but the output follows the input in phase. The missing inversion suits cascodes and differential halves where phase matters.',
      },
      {
        term: 'Input-resistance ladder',
        kind: 'definition',
        statement: 'Signal input resistance steps from **$r_{\\pi}$ for CE** to **$R_{G}$ for CS** down to **$1/g_{m}$ for CB and CG**, tagged `rin-ladder`. Bias resistors in parallel can only lower these intrinsic values.',
        detail: 'With $g_{m} = 40$ mA per V at $1$ mA, $1/g_{m} = 25$ $\\Omega$ explains the fifty-ohm match of CB and CG stages. CE shows $r_{\\pi} = \\beta/g_{m}$ while MOS CS looks ideally infinite before $R_{G}$.',
      },
      {
        term: 'Output resistance with ro',
        kind: 'definition',
        statement: 'Each stage looks back into **$r_{o}$ in parallel** with its load resistor, tagged `rout-ro`. Typical $r_{o}$ spans $10$ k$\\Omega$ to $1000$ k$\\Omega$ from $r_{o} = V_{A}/I_{C} = 1/(\\lambda I_{D})$.',
        detail: 'Figure 7.13(b) adds $r_{o}$ across the controlled source. Equation 7.39 shows gain falling from $-g_{m}R_{D}$ to $-g_{m}(r_{o} \\parallel R_{D})$ once modulation is honored.',
      },
      {
        term: 'Transconductance scaling',
        kind: 'insight',
        statement: 'MOS transconductance grows with **overdrive and size** as $g_{m} = k_{n}V_{OV}$, while bipolar $g_{m} = I_{C}/V_{T}$ grows with **bias current**, tagged `gm-scale`. Equation 7.40 favors short wide devices for large MOS $g_{m}$.',
        detail: 'Doubling $V_{OV}$ doubles MOS $g_{m}$ but burns swing, while doubling $I_{C}$ doubles bipolar $g_{m}$ at fixed $V_{T}$. The choice sets gain per milliamp for the whole stage.',
      },
    ],
    figures: [
      {
        caption: 'Common-emitter stage after Figure 7.25: input into the base, $R_{C}$ load to the supply, inverting gain $-g_{m}R_{C}^{\\prime}$ with $R_{in} = r_{\\pi}$ and $R_{out} = r_{o} \\parallel R_{C}$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Common emitter stage with load and gain polarity"><title>CE stage gain and resistances</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">CE stage: inverting gain minus gm times RC</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="120" y1="70" x2="520" y2="70"/><polyline points="340,70 348,84 360,56 372,84 384,56 396,70"/><line x1="396" y1="70" x2="396" y2="130"/><line x1="330" y1="150" x2="396" y2="150"/><line x1="350" y1="130" x2="350" y2="210"/><line x1="330" y1="190" x2="396" y2="190"/><polygon points="384,190 372,184 372,196" fill="currentColor" stroke="none"/><line x1="350" y1="210" x2="350" y2="290"/><line x1="200" y1="290" x2="520" y2="290"/><line x1="330" y1="150" x2="240" y2="150"/><line x1="240" y1="150" x2="240" y2="230"/><circle cx="240" cy="245" r="12" fill="none"/><line x1="396" y1="150" x2="470" y2="150"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="120" y="56" font-family="sans-serif">VCC rail</text><text x="330" y="56" font-family="sans-serif">RC load</text><text x="404" y="154" font-family="sans-serif">C output, inverted</text><text x="180" y="150" font-family="sans-serif">base input, Rin equals rpi</text><text x="404" y="230" font-family="sans-serif">E to bias network</text><text x="240" y="272" font-family="sans-serif">v input source</text><text x="120" y="330" font-family="sans-serif">Av equals minus gm times RC prime, Rout equals ro in parallel with RC</text></g></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'CE gain with loading',
        problem: 'A BJT stage has $g_{m} = 40$ mA per V, $R_{C} = 5$ k$\\Omega$, $r_{o} = 100$ k$\\Omega$ and load $R_{L} = 5$ k$\\Omega$. Find the overall small-signal voltage gain and the input resistance for $\\beta = 100$.',
        steps: [
          { label: 'Step 1: Parallel the output loads', text: 'Effective alternating-current load is $R_{C}^{\\prime} = R_{C} \\parallel r_{o} \\parallel R_{L} \\approx 2.44$ k$\\Omega$.' },
          { label: 'Step 2: Multiply by transconductance', text: 'Gain $A_{v} = -g_{m}R_{C}^{\\prime} \\approx -97.6$ V per V, the inverting CE signature.' },
          { label: 'Step 3: State the input resistance', text: 'Intrinsic $R_{in} = r_{\\pi} = \\beta/g_{m} = 2.5$ k$\\Omega$ before bias resistors load it further.' },
        ],
        result: '$A_{v} \\approx -98$ V per V; $R_{in} = 2.5$ k$\\Omega$ intrinsic.',
      },
      {
        title: 'CG fifty-ohm match',
        problem: 'A common-gate stage must show $R_{in} = 50$ $\\Omega$ to match a cable. Find the required $g_{m}$ and bias current for a BJT at $V_{T} = 25$ mV, then estimate gain with $R_{D}^{\\prime} = 1$ k$\\Omega$.',
        steps: [
          { label: 'Step 1: Invert the resistance formula', text: 'For CG and CB, $R_{in} = 1/g_{m}$, so $g_{m} = 1/50 = 20$ mA per V.' },
          { label: 'Step 2: Convert to bias current', text: 'Bipolar $g_{m} = I_{C}/V_{T}$ gives $I_{C} = 20 \\times 0.025 = 0.5$ mA.' },
          { label: 'Step 3: Check gain numerically', text: 'Gain near $+g_{m}R_{D}^{\\prime}$ is about $+20$ V per V:```python\nRin_target = 50.0\nVT = 25e-3\ngm = 1.0 / Rin_target\nIC = gm * VT\nAv = gm * 1000.0\nprint(gm)\nprint(IC)\nprint(Av)\n```\nThe printout gives $0.02$ S, $0.0005$ A and $20$ V per V.' },
        ],
        result: '$g_{m} = 20$ mA per V at $I_{C} = 0.5$ mA; gain about $+20$ V per V.',
      },
    ],
    keyTakeaways: [
      'CE and CS invert with $A_{v} = -g_{m}R^{\\prime}$; CB and CG keep the sign with about $+g_{m}R^{\\prime}$.',
      '$R_{in}$ is $r_{\\pi}$ for CE, $R_{G}$ for CS, and $1/g_{m}$ for CB and CG stages.',
      '$R_{out}$ is $r_{o}$ in parallel with the load resistor in every basic stage.',
      '$g_{m} = k_{n}V_{OV}$ for MOS and $g_{m} = I_{C}/V_{T}$ for BJT sets gain per bias.',
    ],
    quiz: [
      {
        q: 'A loaded CE stage with $g_{m} = 40$ mA per V and $R_{C}^{\\prime} = 2.5$ k$\\Omega$ has gain about:',
        options: ['$+100$ V per V', '$-100$ V per V', '$+1$ V per V', '$0$ V per V'],
        answer: 1,
        explanation: 'Step 1 — Given: $g_{m}$ and effective load. Step 2 — Rule: $A_{v} = -g_{m}R_{C}^{\\prime}$. Step 3 — Compute: $40 \\times 2.5 = 100$ with inversion. Step 4 — Conclude: $-100$ V per V before bias-resistor loading.',
      },
      {
        q: 'The intrinsic input resistance of a CB stage biased at $1$ mA is about:',
        options: [`$25$ $\\Omega$`, `$2.5$ k$\\Omega$`, `$100$ k$\\Omega$`, 'Infinite'],
        answer: 0,
        explanation: 'Step 1 — Given: $I_{C} = 1$ mA so $g_{m} = 40$ mA per V. Step 2 — Rule: $R_{in} = 1/g_{m}$. Step 3 — Compute: reciprocal is $25$ $\\Omega$. Step 4 — Conclude: the low value suits cable termination.',
      },
      {
        q: 'Including channel-length modulation changes the MOS gain from $-g_{m}R_{D}$ to:',
        options: [`$+g_{m}R_{D}$`, `$-R_{D}/g_{m}$`, `$-g_{m}(r_{o} \\parallel R_{D} \\parallel R_{L})$`, `$-g_{m}r_{\\pi}$`],
        answer: 2,
        explanation: 'Step 1 — Given: finite $r_{o} = 1/(\\lambda I_{D})$. Step 2 — Rule: Figure 7.13(b) parallels $r_{o}$ with the source. Step 3 — Load: $R_{L}$ parallels as well. Step 4 — Conclude: gain magnitude falls slightly.',
      },
      // PYQ-pattern: CE versus CB input resistance and gain sign (rephrased, values changed)
      {
        q: 'Which stage keeps the magnitude of CE gain but removes the inversion while dropping $R_{in}$ to $1/g_{m}$?',
        options: ['Common-collector follower', 'Common-source with $R_{G}$ only', 'Push-pull output', 'Common-base stage'],
        answer: 3,
        explanation: 'Step 1 — Given: same $g_{m}R^{\\prime}$ magnitude wanted. Step 2 — Rule: Table 7.1 maps CB to noninverting gain. Step 3 — Check: CB input looks into the emitter as $1/g_{m}$. Step 4 — Conclude: CB fits wideband and cascode uses.',
      },
    ],
  },
  // ------------------------------------------------------------------ 26.3
  {
    sectionId: 'elec-ch26-s3',
    readingTime: 7,
    intro: 'The common-collector and common-drain stages of Section 7.3 drive the load from the emitter or source while the collector or drain sits at alternating-current ground. Voltage gain is just below unity, but current gain and the impedance transformation are large. Problem 7.84 uses an emitter follower to deliver a $0.5$ V peak sine to a $2$ k$\\Omega$ load with only $5$ mV of $v_{be}$.',
    objectives: [
      'Write follower gain $A_{v} = (R_{E}^{\\prime})/(r_{e} + R_{E}^{\\prime})$ and its MOS twin with $1/g_{m}$',
      'Compute $R_{out} = r_{e} \\parallel R_{E} \\parallel R_{L}$ and explain the buffering action',
      'Size bias current from a peak-load and $v_{be}$ ceiling following Problem 7.84',
    ],
    concepts: [
      {
        term: 'Follower voltage gain',
        kind: 'theorem',
        statement: 'The emitter and source followers give **near-unity gain** $A_{v} = R_{E}^{\\prime}/(r_{e} + R_{E}^{\\prime})$, tagged `follower-gain`. With $R_{E}^{\\prime} \\gg r_{e}$ the gain is $0.98$ to $0.999$ V per V.',
        detail: 'The MOS twin replaces $r_{e}$ by $1/g_{m}$ with $R_{S}^{\\prime}$ in numerator. No phase inversion occurs because the output tracks the input through the base-emitter or gate-source voltage.',
      },
      {
        term: 'Low output resistance',
        kind: 'insight',
        statement: 'Looking into the emitter or source sees the **source impedance divided** by $\\beta + 1$ or $g_{m}$ times, tagged `buffer-rout`. The textbook form is $R_{out} = (R_{sig}/(\\beta+1)) \\parallel r_{e} \\parallel R_{E}$.',
        detail: 'A $100$ k$\\Omega$ source driven through a $\\beta = 100$ follower looks like $1$ k$\\Omega$ at the load. Source followers give $R_{out} = 1/g_{m} \\parallel R_{S}$ with the same buffering moral.',
      },
      {
        term: 'High input resistance',
        kind: 'definition',
        statement: 'The follower bootstraps its bias resistors to a **high input resistance** $(\\beta+1)(r_{e}+R_{L}^{\\prime})$, tagged `buffer-rin`. Problem 7.136 bootstraps further by returning the output to the bias divider.',
        detail: 'MOS followers start from infinite gate resistance, so $R_{in} = R_{G1} \\parallel R_{G2}$ alone. Bipolar followers multiply the load seen at the emitter when viewed from the base.',
      },
      {
        term: 'Level shift penalty',
        kind: 'insight',
        statement: 'Every follower drops one **$V_{BE}$ or $V_{GS}$** between input and output direct-current levels, tagged `level-shift`. Cascaded followers accumulate the shift and must be rebiased between stages.',
        detail: 'An npn follower sits $0.7$ V below its base, while an NMOS follower sits $V_{GS} = V_{t} + V_{OV}$ below its gate. Direct-current coupling must absorb this offset explicitly.',
      },
      {
        term: 'Current-drive sizing rule',
        kind: 'method',
        statement: 'Peak load current must stay below the **bias current** with $v_{be}$ under about $5$ mV, tagged `drive-size`. Problem 7.84 converts $0.5$ V peak on $2$ k$\\Omega$ into a minimum $I_{E}$ near $5$ mA.',
        detail: 'The load demands $0.25$ mA peak, but linearity demands far larger standing current so $r_{e} = V_{T}/I_{E}$ stays small. Starved followers clip on negative peaks when the transistor turns off.',
      },
    ],
    figures: [
      {
        caption: 'Emitter follower after Problem 7.84: base input, emitter output to a $2$ k$\\Omega$ load, gain just below unity with $R_{out} = r_{e} \\parallel R_{E}$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Emitter follower buffer with load"><title>Follower buffer action</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Follower: gain near one, low Rout</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="200" y1="70" x2="500" y2="70"/><line x1="350" y1="70" x2="350" y2="130"/><line x1="300" y1="150" x2="400" y2="150"/><line x1="330" y1="130" x2="330" y2="210"/><line x1="310" y1="190" x2="380" y2="190"/><polygon points="368,190 356,184 356,196" fill="currentColor" stroke="none"/><line x1="330" y1="210" x2="330" y2="250"/><polyline points="330,250 338,264 350,236 362,264 374,236 386,250"/><line x1="386" y1="250" x2="460" y2="250"/><line x1="460" y1="250" x2="460" y2="290"/><line x1="200" y1="290" x2="520" y2="290"/><line x1="300" y1="150" x2="230" y2="150"/><circle cx="210" cy="150" r="12" fill="none"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="200" y="56" font-family="sans-serif">VCC for collector</text><text x="394" y="154" font-family="sans-serif">C at AC ground</text><text x="120" y="154" font-family="sans-serif">base input, high Rin</text><text x="394" y="254" font-family="sans-serif">emitter output to load</text><text x="330" y="310" font-family="sans-serif">RE to low rail, Rout equals re in parallel with RE</text><text x="120" y="330" font-family="sans-serif">gain 0.98 to 0.999, no inversion</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Follower drive floor (Problem 7.84)',
        problem: 'An emitter follower must deliver a $0.5$ V peak sine to a $2$ k$\\Omega$ load while $v_{be}$ peaks stay at $5$ mV. Find the load peak current, the minimum $I_{E}$, and the resulting $r_{e}$.',
        steps: [
          { label: 'Step 1: Find the load demand', text: 'Peak load current is $0.5/2 = 0.25$ mA from Ohm’s law on the $2$ k$\\Omega$ load.' },
          { label: 'Step 2: Enforce the linearity ceiling', text: 'With $v_{be} = i_{e}r_{e}$ and $r_{e} = V_{T}/I_{E}$, the $5$ mV ceiling forces $I_{E}$ near $5$ mA, far above the load peak.' },
          { label: 'Step 3: State the output resistance', text: 'At $5$ mA, $r_{e} = 25/5 = 5$ $\\Omega$, so $R_{out} \\approx 5$ $\\Omega$ in parallel with $R_{E}$ and the load.' },
        ],
        result: 'Load needs $0.25$ mA peak; bias at least $5$ mA; $r_{e} = 5$ $\\Omega$.',
      },
      {
        title: 'Source-follower gain check',
        problem: 'An NMOS follower of Problem 7.122 has $g_{m} = 5$ mA per V with large $r_{o}$ driving $R_{S}^{\\prime} = 2$ k$\\Omega$. Find the gain and output resistance, then verify with a script.',
        steps: [
          { label: 'Step 1: Apply the divider form', text: 'Gain $A_{v} = g_{m}R_{S}^{\\prime}/(1 + g_{m}R_{S}^{\\prime}) = 10/11 \\approx 0.909$ V per V.' },
          { label: 'Step 2: Read the output resistance', text: 'With large $r_{o}$, $R_{out} = 1/g_{m} = 200$ $\\Omega$ in parallel with $R_{S}$.' },
          { label: 'Step 3: Confirm numerically', text: 'Direct evaluation:```python\ngm = 5e-3\nRS = 2e3\nAv = gm * RS / (1.0 + gm * RS)\nRout = 1.0 / gm\nprint(Av)\nprint(Rout)\n```\nThe printout gives about $0.909$ V per V and $200$ $\\Omega$.' },
        ],
        result: 'Gain $0.909$ V per V; $R_{out} = 200$ $\\Omega$ before $R_{S}$.',
      },
    ],
    keyTakeaways: [
      'Followers give $A_{v} \\approx 0.9$ to $0.999$ V per V with no inversion.',
      '$R_{out}$ is $r_{e}$ or $1/g_{m}$ in parallel with the emitter or source resistor.',
      '$R_{in}$ is bootstrapped high: $(\\beta+1)$ times the emitter load for BJT, $R_{G}$ for MOS.',
      'Problem 7.84 needs about $5$ mA to hold $v_{be}$ to $5$ mV on a $0.5$ V peak into $2$ k$\\Omega$.',
    ],
    quiz: [
      {
        q: 'The voltage gain of an emitter follower is typically:',
        options: [`$-g_{m}R_{C}$`, 'Just below $+1$ V per V', '$+g_{m}R_{C}$ with inversion', 'Zero'],
        answer: 1,
        explanation: 'Step 1 — Given: collector at alternating-current ground. Step 2 — Rule: $A_{v} = R_{E}^{\\prime}/(r_{e}+R_{E}^{\\prime})$. Step 3 — Limit: large $R_{E}^{\\prime}$ pushes the ratio toward one. Step 4 — Conclude: the output tracks the input without inversion.',
      },
      {
        q: 'Looking into the emitter of a follower with $R_{sig} = 100$ k$\\Omega$ and $\\beta = 100$ gives about:',
        options: [`$100$ k$\\Omega$`, `$10$ M$\\Omega$`, `$1$ k$\\Omega$ plus $r_{e}$`, '$25$ $\\Omega$ always'],
        answer: 2,
        explanation: 'Step 1 — Given: source resistance and current gain. Step 2 — Rule: divide by $\\beta+1$ when viewed from the emitter. Step 3 — Compute: $100/101 \\approx 1$ k$\\Omega$. Step 4 — Conclude: the follower transforms high to low impedance.',
      },
      // PYQ-pattern: follower bias for distortion-free drive (rephrased, values changed)
      {
        q: 'Problem 7.84 sizes the follower bias well above the $0.25$ mA load peak because:',
        options: ['$v_{be}$ must stay near $5$ mV for linearity', 'Larger $I_{E}$ raises $r_{e}$', 'The load needs direct current only', 'Gain exceeds unity otherwise'],
        answer: 0,
        explanation: 'Step 1 — Given: $0.5$ V peak on $2$ k$\\Omega$. Step 2 — Rule: $v_{be} = i_{e}V_{T}/I_{E}$. Step 3 — Require: $5$ mV ceiling forces $I_{E}$ near $5$ mA. Step 4 — Conclude: standing current buys linearity, not just peak drive.',
      },
      {
        q: 'Cascaded followers need attention to:',
        options: ['Miller multiplication', 'Common-mode rejection', 'Barkhausen phase', 'Accumulated $V_{BE}$ or $V_{GS}$ level shifts'],
        answer: 3,
        explanation: 'Step 1 — Given: each follower drops one junction voltage. Step 2 — Rule: direct-current levels shift by $0.7$ V or $V_{t}+V_{OV}$ per stage. Step 3 — Effect: bias windows walk with each added stage. Step 4 — Conclude: rebias or alternating polarity restores centering.',
      },
    ],
  },
  // ------------------------------------------------------------------ 26.4
  {
    sectionId: 'elec-ch26-s4',
    readingTime: 8,
    intro: 'Table 7.1 collects the three configurations side by side so a specification can be mapped to a stage in one glance. Common-emitter and common-source win on voltage gain, common-base and common-gate win on low input resistance and bandwidth, and followers win as buffers. Problems 7.130 and 7.132 cascade two identical CE stages, where the input resistance of the second loads the first.',
    objectives: [
      'Read Table 7.1 to quote $A_{v}$, $R_{in}$ and $R_{out}$ for all six MOS and bipolar stages',
      'Account for loading $R_{in2}$ on $A_{v1}$ when cascading two stages',
      'Match stage to specification: gain versus low $R_{in}$ versus buffering',
    ],
    concepts: [
      {
        term: 'Table 7.1 comparison',
        kind: 'definition',
        statement: 'The **summary table** ranks CE and CS highest on $|A_{v}|$, CB and CG lowest on $R_{in}$, and CC and CD highest on $R_{in}$ with lowest $R_{out}$, tagged `table-7-1`. Every examination of stage choice starts from those three columns.',
        detail: 'Rows list open-circuit gain, input resistance and output resistance with $r_{o}$ included. The MOS and bipolar twins share topology but differ in $R_{in}$ because the MOS gate draws no direct current.',
      },
      {
        term: 'Cascade loading rule',
        kind: 'method',
        statement: 'Overall gain is the **product with loading**: $R_{in2}$ parallels the first load before computing $A_{v1}$, tagged `cascade-load`. Problem 7.130 makes $R_{in2}$ the explicit load on stage one.',
        detail: 'Unloaded gains multiply only when buffers isolate stages. Otherwise $A_{v1} = -g_{m1}(R_{C1} \\parallel R_{in2} \\parallel r_{o1})$ replaces the unloaded form.',
      },
      {
        term: 'Gain versus bandwidth trade',
        kind: 'insight',
        statement: 'High-gain CE and CS stages carry **Miller-multiplied capacitance** and narrower bandwidth, while CB and CG dodge Miller and stay wide, tagged `gain-bw-trade`. Chapter 10 quantifies the penalty that Table 7.1 previews.',
        detail: 'Choosing CB or CG for the input of a radio front end sacrifices some gain convenience for flat high-frequency response. Followers add almost no gain yet preserve bandwidth as buffers.',
      },
      {
        term: 'Bias-source interaction',
        kind: 'insight',
        statement: 'Source resistance **divides against $R_{in}$** before any transistor gain applies, tagged `source-divide`. Overall gain $G_{v} = (R_{in}/(R_{sig}+R_{in}))A_{v}$ punishes low $R_{in}$ unless matching is intended.',
        detail: 'Problem 7.132 with $R_{sig} = 100$ k$\\Omega$ shows the divider explicitly. High $R_{in}$ stages preserve source voltage, while fifty-ohm stages accept the halving as the price of match.',
      },
      {
        term: 'Selection recipe',
        kind: 'method',
        statement: 'Match the **dominant specification** first: gain calls CE or CS, cable match calls CB or CG, load drive calls CC or CD, tagged `select-stage`. Then verify swing, headroom and bias stability around that choice.',
        detail: 'A microphone preamplifier wants high $R_{in}$ plus gain, so CE or CS leads. A cable-terminated stage wants $50$ $\\Omega$, so CG or CB leads despite needing more bias current.',
      },
    ],
    figures: [
      {
        caption: 'Stage selection after Table 7.1: CE and CS lead on $|A_{v}|$, CB and CG bottom on $R_{in}$, and CC and CD bottom on $R_{out}$ with gain near unity.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Stage comparison bars for gain input and output resistance"><title>Table 7.1 visual comparison</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Table 7.1: pick gain, Rin, or Rout</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="90" y1="300" x2="650" y2="300"/><rect x="130" y="140" width="60" height="160"/><rect x="250" y="200" width="60" height="100"/><rect x="370" y="260" width="60" height="40"/><rect x="490" y="150" width="60" height="150"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="130" y="322" font-family="sans-serif">CE CS gain</text><text x="250" y="322" font-family="sans-serif">CB CG gain</text><text x="370" y="322" font-family="sans-serif">CC CD gain</text><text x="490" y="322" font-family="sans-serif">CB CG low Rin</text><text x="130" y="126" font-family="sans-serif">high Av</text><text x="370" y="246" font-family="sans-serif">Av near one</text><text x="90" y="90" font-family="sans-serif">bars rank Table 7.1 columns at a glance</text></g></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Two-stage cascade (Problem 7.130)',
        problem: 'Two identical CE stages each have unloaded gain $-100$ V per V with $R_{C} = 5$ k$\\Omega$ and $R_{in} = 2.5$ k$\\Omega$. Find the loaded gain of stage one and the overall gain when stage two loads stage one.',
        steps: [
          { label: 'Step 1: Load stage one', text: 'Stage one sees $R_{C} \\parallel R_{in2} = 5 \\parallel 2.5 = 1.67$ k$\\Omega$ instead of $5$ k$\\Omega$, so its gain falls to about $-33$ V per V.' },
          { label: 'Step 2: Multiply by stage two', text: 'Stage two keeps $-100$ V per V into its own load, so overall $A_{v} = (-33) \\times (-100) = 3300$ V per V.' },
          { label: 'Step 3: Note the sign', text: 'Two inversions return a noninverted overall output, a standard cascade signature.' },
        ],
        result: 'First-stage gain $-33$ V per V; overall $+3300$ V per V.',
      },
      {
        title: 'Source-divider choice',
        problem: 'A source with $R_{sig} = 100$ k$\\Omega$ drives either a CE stage with $R_{in} = 2.5$ k$\\Omega$ or a CS stage with $R_{in} = 1$ M$\\Omega$. Both have $|A_{v}| = 50$ V per V. Compare overall gains and confirm with a script.',
        steps: [
          { label: 'Step 1: Divide for the CE choice', text: 'Divider is $2.5/(100+2.5) = 0.0244$, so $G_{v} = 0.0244 \\times 50 = 1.22$ V per V.' },
          { label: 'Step 2: Divide for the CS choice', text: 'Divider is $1000/(100+1000) = 0.909$, so $G_{v} = 0.909 \\times 50 = 45.5$ V per V.' },
          { label: 'Step 3: Script the comparison', text: 'Both dividers at once:```python\nRsig = 100e3\nRinCE = 2.5e3\nRinCS = 1e6\nAv = 50.0\nGce = RinCE / (Rsig + RinCE) * Av\nGcs = RinCS / (Rsig + RinCS) * Av\nprint(Gce)\nprint(Gcs)\n```\nThe printout gives about $1.22$ and $45.5$ V per V.' },
        ],
        result: 'CE overall $1.22$ V per V; CS overall $45.5$ V per V — $R_{in}$ dominates.',
      },
    ],
    keyTakeaways: [
      'Table 7.1: CE and CS maximize $|A_{v}|$; CB and CG minimize $R_{in}$; CC and CD minimize $R_{out}$.',
      'Cascaded gain must parallel $R_{in2}$ into the first-stage load before multiplying.',
      'Overall gain includes $R_{in}/(R_{sig}+R_{in})$ ahead of every $A_{v}$.',
      'Pick gain, match, or buffering first, then verify swing and bias.',
    ],
    quiz: [
      {
        q: 'From Table 7.1 the stage with the lowest intrinsic $R_{in}$ is:',
        options: ['Common-source', 'Common-gate or common-base near $1/g_{m}$', 'Common-emitter', 'Common-drain follower'],
        answer: 1,
        explanation: 'Step 1 — Given: the six rows of Table 7.1. Step 2 — Rule: CB and CG look into emitter or source. Step 3 — Value: $25$ $\\Omega$ at $1$ mA beats $r_{\\pi}$ and $R_{G}$. Step 4 — Conclude: match or wideband designs start there.',
      },
      {
        q: 'Two CE stages of $-100$ V per V with $R_{in2} = 2.5$ k$\\Omega$ loading $R_{C1} = 5$ k$\\Omega$ give overall about:',
        options: ['$+3300$ V per V', '$+100$ V per V', '$-100$ V per V', '$-10000$ V per V unloaded'],
        answer: 0,
        explanation: 'Step 1 — Given: identical stages plus loading. Step 2 — Rule: first load is $5 \\parallel 2.5 = 1.67$ k$\\Omega$. Step 3 — Compute: first gain $-33$, product $+3300$. Step 4 — Conclude: loading costs two thirds of the first gain.',
      },
      {
        q: 'A $100$ k$\\Omega$ source into a $2.5$ k$\\Omega$ CE input keeps what fraction of its voltage?',
        options: [`$0.909$`, `$1.0$`, '$50$ times', `$0.024$`],
        answer: 3,
        explanation: 'Step 1 — Given: $R_{sig}$ and $R_{in}$. Step 2 — Rule: $R_{in}/(R_{sig}+R_{in})$. Step 3 — Compute: $2.5/102.5 = 0.0244$. Step 4 — Conclude: high-source stages want MOS-like $R_{in}$.',
      },
      // PYQ-pattern: cascade loading and source division (rephrased, values changed)
      {
        q: 'Best first pick for driving a $50$ $\\Omega$ cable with flat high-frequency response is:',
        options: ['Common-emitter with large $R_{C}$', 'Common-collector with $R_{sig} = 0$', 'Common-gate or common-base near $50$ $\\Omega$', 'Unbuffered CS with $R_{G} = 10$ M$\\Omega$'],
        answer: 2,
        explanation: 'Step 1 — Given: cable match plus bandwidth. Step 2 — Rule: Table 7.1 gives CG and CB low $R_{in}$ without Miller. Step 3 — Bias: $0.5$ mA sets $1/g_{m} = 50$ $\\Omega$. Step 4 — Conclude: match and bandwidth together favor CG or CB.',
      },
    ],
  },
]
