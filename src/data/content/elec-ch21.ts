import type { SectionContent } from '../library'

// ============================================================================
// The Electronics Master Library — Chapter 21: Signals and Amplifiers
// Sedra/Smith, "Microelectronic Circuits" 8e, Chapter 1 (pp. 4–57):
// signals and source models, the frequency spectrum, analog and digital
// signals, amplifier quantities and decibels, circuit models for amplifiers,
// cascade loading, STC frequency response. All worked-problem numbers are
// the book’s own or follow its worked problems; arithmetic re-verified.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh21Content: SectionContent[] = [
  // ------------------------------------------------------------------ 21.1
  {
    sectionId: 'elec-ch21-s1',
    readingTime: 8,
    intro: 'Every electronic system begins with a signal, and every signal source is modeled in Sedra/Smith as a Thevenin or Norton equivalent with a source resistance $R_{s}$. Amplifiers are then described by three gains — voltage, current and power — together with the input and output resistances that divide those gains through loading. Because gains multiply across stages, the book adopts the decibel scale, where multiplication becomes addition.',
    objectives: [
      'Model any signal source by its Thevenin or Norton equivalent and find $R_{s}$ from open-circuit and short-circuit tests',
      'Define the voltage gain $A_{v}$, current gain $A_{i}$ and power gain $A_{p}$, and convert fluently between ratios and decibels',
      'Explain loading with the $R_{in}$ and $R_{o}$ voltage dividers and name the four amplifier models of Table 1.1',
    ],
    concepts: [
      {
        term: 'Thevenin signal source',
        kind: 'definition',
        statement: 'A voltage signal is represented by an ideal source $v_{s}(t)$ in series with a **source resistance** $R_{s}$, tagged `Rs-thevenin` in notes. The terminals show the **open-circuit voltage** $v_{oc} = v_{s}$ and deliver the short-circuit current $i_{sc} = v_{s}/R_{s}$.',
        detail: 'Sedra/Smith Figure 1.1 draws exactly this model. The ratio $R_{s} = v_{oc}/i_{sc}$ means one open-circuit test plus one short-circuit test fully characterizes any linear source.',
      },
      {
        term: 'Norton source and equivalence',
        kind: 'theorem',
        statement: 'The same source is equivalently a current $i_{s}(t) = v_{s}/R_{s}$ in parallel with $R_{s}$, which is the familiar **source transformation** of circuit theory, tagged `is-norton`. Either form predicts the identical terminal behavior for every load.',
        detail: 'Figure 1.2 shows the Norton form feeding a load $R_{L}$ through a current divider. When $R_{s}$ is much larger than $R_{L}$ the load current is nearly $i_{s}$ regardless of either resistance value.',
      },
      {
        term: 'Voltage, current and power gain',
        kind: 'definition',
        statement: 'The voltage gain is $A_{v} = v_{o}/v_{i}$, the current gain is $A_{i} = i_{o}/i_{i}$, and the **power gain** $A_{p} = A_{v}A_{i}$ exceeds unity only because supplies feed the amplifier, tagged `Av-Ai-Ap`. Unlike a transformer, an amplifier delivers genuine power gain.',
        detail: 'Sedra/Smith Section 1.4 defines all three with the symbol convention of Figure 1.15. A voltage gain below unity is attenuation, yet the stage can still amplify power through current gain.',
      },
      {
        term: 'Decibel arithmetic',
        kind: 'method',
        statement: 'Voltage and current gains convert with **$20\\log$** and power gain with **$10\\log$**, a recipe tagged `dB-twenty-ten`. Doubling is $6$ dB, a factor of ten is $20$ dB, and cascaded gains simply add in decibels.',
        detail: 'The book works $A_{v} = 2$ as $20\\log 2 = 6.02$ dB and the Example 1.3 cascade $818$ V/V as $58.3$ dB. Attenuation by ten is $-20$ dB, which keeps weak-signal budgets readable.',
      },
      {
        term: 'Loading and the four models',
        kind: 'insight',
        statement: 'The input divider $R_{in}/(R_{in} + R_{s})$ and the output divider $R_{L}/(R_{L} + R_{o})$ scale every gain, so a stage is specified by the **unloaded gain** $A_{vo}$ plus its terminal resistances, tagged `unloaded-Avo`. Table 1.1 then lists the voltage, current, transconductance and transresistance amplifier models.',
        detail: 'Example 1.4 previews the BJT as a transconductance model with $R_{in} = r_{\\pi}$, $G_{m} = g_{m}$ and $R_{o} = r_{o}$. Choosing the model whose input matches the source — series for current, shunt for voltage — is the central modeling decision.',
      },
    ],
    figures: [
      {
        caption: 'Source, amplifier model and load: $v_{i} = v_{s}R_{in}/(R_{in} + R_{s})$ at the input and $v_{L} = A_{vo}v_{i}R_{L}/(R_{L} + R_{o})$ at the output, after Sedra/Smith Figures 1.1, 1.2 and 1.16.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Signal source feeding a voltage amplifier model and load with input and output dividers"><title>Source amplifier and load with loading dividers</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Source, amplifier model, and load</text><g stroke="currentColor" stroke-width="2" fill="none"><rect x="40" y="120" width="150" height="120" rx="6"/><circle cx="95" cy="180" r="24"/><line x1="119" y1="180" x2="190" y2="180"/><polyline points="132,180 142,166 154,194 166,166 178,194 190,180"/><rect x="230" y="110" width="230" height="140" rx="6"/><line x1="230" y1="155" x2="262" y2="155"/><line x1="230" y1="205" x2="262" y2="205"/><polygon points="330,150 356,180 330,210 304,180"/><line x1="356" y1="180" x2="400" y2="180"/><polyline points="400,180 410,166 422,194 434,166 446,194 460,180"/><line x1="460" y1="180" x2="500" y2="180"/><polyline points="520,180 530,166 542,194 554,166 566,194 578,180 590,180"/><line x1="640" y1="180" x2="640" y2="230"/><line x1="628" y1="230" x2="652" y2="230"/><line x1="632" y1="240" x2="648" y2="240"/><line x1="637" y1="250" x2="643" y2="250"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="70" y="112" font-family="sans-serif">source</text><text x="82" y="184" font-family="sans-serif">vs</text><text x="140" y="158" font-family="sans-serif">Rs</text><text x="196" y="168" font-family="sans-serif">vi</text><text x="300" y="102" font-family="sans-serif">amplifier</text><text x="268" y="148" font-family="sans-serif">Rin</text><text x="318" y="184" font-family="sans-serif">Avo</text><text x="408" y="158" font-family="sans-serif">Ro</text><text x="540" y="158" font-family="sans-serif">RL</text><text x="596" y="168" font-family="sans-serif">vL</text><text x="60" y="290" font-family="sans-serif">Input divider: Rin over Rin plus Rs</text><text x="60" y="312" font-family="sans-serif">Output divider: RL over RL plus Ro</text><text x="420" y="290" font-family="sans-serif">Unloaded gain Avo appears only</text><text x="420" y="312" font-family="sans-serif">when Ro is zero and Rin is infinite</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Source resistance from open/short tests (Sedra Exercise 1.2)',
        problem: 'A signal source shows an open-circuit voltage of $10$ mV and a short-circuit current of $10$ $\\mu$A. Find $R_{s}$, give the Norton equivalent, and find the terminal voltage when a $1$ k$\\Omega$ load is connected.',
        steps: [
          { label: 'Step 1: Divide open voltage by short current', text: 'Thevenin theory gives $R_{s} = v_{oc}/i_{sc}$, checked numerically:```python\nvoc = 10.0\nisc = 10.0\nRs = voc / isc\nprint(Rs)\n```\nThe printout is $1.0$, so $R_{s} = 1$ k$\\Omega$ since mV over $\\mu$A is k$\\Omega$.' },
          { label: 'Step 2: Write the Norton form', text: 'The Norton current is $i_{s} = v_{s}/R_{s} = 10$ $\\mu$A in parallel with the same $1$ k$\\Omega$. Both models predict identical terminal behavior by the source-transformation theorem.' },
          { label: 'Step 3: Load it and divide', text: 'With $R_{L} = 1$ k$\\Omega$ the terminal voltage is $10 \\times 1/(1 + 1) = 5$ mV, exactly half the open-circuit value because the load matches $R_{s}$.' },
        ],
        result: '$R_{s} = 1$ k$\\Omega$; Norton form $10$ $\\mu$A shunted by $1$ k$\\Omega$; loaded terminal voltage $5$ mV.',
      },
      {
        title: 'Decibel addition across two stages',
        problem: 'Stage one has $A_{v1} = 2$ and stage two has $A_{v2} = 5$. Express each gain in decibels and find the overall gain both ways; then express an attenuation of $0.1$ in decibels.',
        steps: [
          { label: 'Step 1: Convert each stage', text: '$20\\log 2 = 6.02$ dB and $20\\log 5 = 13.98$ dB. Each factor-of-two doubling anywhere in a chain always contributes the same $6$ dB.' },
          { label: 'Step 2: Add, then check by multiplying', text: 'In decibels $6.02 + 13.98 = 20.00$ dB; directly $2 \\times 5 = 10$ V/V and $20\\log 10 = 20$ dB, which agrees exactly.' },
          { label: 'Step 3: Attenuation goes negative', text: '$20\\log 0.1 = -20$ dB. The minus sign flags power loss rather than gain, while the magnitude $20$ dB still reads as a factor of ten.' },
        ],
        result: '$6.02$ dB and $13.98$ dB cascade to $20$ dB ($10$ V/V); a gain of $0.1$ is $-20$ dB.',
      },
    ],
    keyTakeaways: [
      'Any linear source is $v_{s}$ with series $R_{s}$, or $i_{s} = v_{s}/R_{s}$ with shunt $R_{s}$; $R_{s} = v_{oc}/i_{sc}$ from two tests.',
      'Voltage gain uses $20\\log|A_{v}|$, current gain $20\\log|A_{i}|$, power gain $10\\log A_{p}$; cascaded decibels add.',
      'Loading always divides: $v_{i}$ by $R_{in}/(R_{in} + R_{s})$ and $v_{L}$ by $R_{L}/(R_{L} + R_{o})$.',
      'Table 1.1 organizes amplifiers as voltage, current, transconductance ($G_{m}$) and transresistance ($R_{m}$) two-ports.',
    ],
    quiz: [
      // PYQ-pattern: voltage gain in decibels (rephrased, values changed)
      {
        q: 'An amplifier stage has $A_{v} = 40$. Its voltage gain in decibels is closest to:',
        options: ['$20$ dB', '$32$ dB', '$40$ dB', '$80$ dB'],
        answer: 1,
        explanation: 'Step 1 — Given: voltage ratio $40$. Step 2 — Rule: voltage decibels are $20\\log|A_{v}|$. Step 3 — Compute: $20\\log 40 = 20 \\times 1.602 = 32.04$ dB. Step 4 — Conclude: $32$ dB, while $20$ dB would be a gain of ten and $40$ dB a gain of one hundred.',
      },
      {
        q: 'A source measures $v_{oc} = 10$ mV open-circuit and $i_{sc} = 10$ $\\mu$A short-circuit. Its source resistance is:',
        options: [`$100$ $\\Omega$`, `$10$ k$\\Omega$`, `$1$ M$\\Omega$`, `$1$ k$\\Omega$`],
        answer: 3,
        explanation: 'Step 1 — Given: $v_{oc} = 10$ mV and $i_{sc} = 10$ $\\mu$A. Step 2 — Rule: $R_{s} = v_{oc}/i_{sc}$ for the Thevenin model. Step 3 — Compute: $10$ mV over $10$ $\\mu$A is $1$ k$\\Omega$. Step 4 — Conclude: the Norton form is $10$ $\\mu$A shunted by $1$ k$\\Omega$.',
      },
      {
        q: 'Two cascaded stages provide $6$ dB and $20$ dB of voltage gain. The overall voltage gain is:',
        options: ['$26$ dB, a ratio of $20$ V/V', '$120$ dB, a ratio of $10^{6}$ V/V', '$14$ dB by subtraction', '$26$ dB, a ratio of $26$ V/V'],
        answer: 0,
        explanation: 'Step 1 — Given: $6$ dB (ratio two) and $20$ dB (ratio ten). Step 2 — Rule: cascaded decibels add while ratios multiply. Step 3 — Compute: $6 + 20 = 26$ dB and $2 \\times 10 = 20$ V/V. Step 4 — Conclude: $20\\log 20 = 26.02$ dB confirms the addition.',
      },
      {
        q: 'A voltage amplifier with $A_{vo} = 100$, $R_{in} = 100$ k$\\Omega$, $R_{o} = 200$ $\\Omega$ is fed by $R_{s} = 100$ k$\\Omega$ and loaded by $R_{L} = 200$ $\\Omega$. Which loss dominates?',
        options: ['Both dividers are lossless here', 'The output divider halves the gain while the input divider also halves it, equally', 'The input divider only, since $R_{o}$ is small', 'Neither divider matters because $A_{vo}$ is large'],
        answer: 2,
        explanation: 'Step 1 — Given: matched input ($100$ k$\\Omega$ over $200$ k$\\Omega$) and matched output ($200$ $\\Omega$ over $400$ $\\Omega$). Step 2 — Rule: each divider multiplies the gain by its ratio. Step 3 — Compute: both ratios equal one half, so overall gain is $100 \\times 0.5 \\times 0.5 = 25$. Step 4 — Conclude: both interfaces divide equally here; large $A_{vo}$ never repairs loading loss.',
      },
    ],
  },

  // ------------------------------------------------------------------ 21.2
  {
    sectionId: 'elec-ch21-s2',
    readingTime: 7,
    intro: 'Real amplifiers are linear only between two saturation ceilings, so Sedra/Smith draws the transfer characteristic of Figure 1.14 before any small-signal analysis. The designer first places a DC bias point $Q$ inside the linear segment, then treats tiny excursions around $Q$ as a straight line whose slope is the small-signal gain. Keeping the signal small enough to stay on that line is the whole art of linear amplification.',
    objectives: [
      'Sketch the saturated transfer characteristic and identify $L_{+}$, $L_{-}$ and the linear segment',
      'Place the bias point $Q$ for maximum swing and define small-signal operation as the slope at $Q$',
      'Compute the largest undistorted input and the resulting output from the slope and the ceilings',
    ],
    concepts: [
      {
        term: 'Transfer characteristic',
        kind: 'definition',
        statement: 'The plot of $v_{O}$ against $v_{I}$ is linear with slope $A_{v}$ in the middle and flat at the **saturation ceilings**, tagged `vo-vi-curve`. Its three segments — lower flat, linear ramp, upper flat — completely describe large-signal behavior.',
        detail: 'Figure 1.14 draws this shape for a voltage amplifier. The ramp is the only region where the circuit amplifies; the flats are where it merely clips.',
      },
      {
        term: 'Saturation levels',
        kind: 'law',
        statement: 'The output cannot pass $L_{+}$ near the positive supply nor $L_{-}$ near the negative supply, so any input peak beyond the linear segment is **clipped** flat, tagged `L-plus-minus`. The linear input range is therefore $(L_{+} - L_{-})/|A_{v}|$ wide.',
        detail: 'The ceilings sit a volt or so inside the rails because output transistors need headroom. Driving harder does not give more output — it only flattens the waveform tops.',
      },
      {
        term: 'Bias point Q',
        kind: 'definition',
        statement: 'The **quiescent** DC operating point $Q = (V_{I}, V_{O})$ anchors the signal, tagged `Q-point`. Centering $Q$ midway between the ceilings maximizes the undistorted peak swing in both directions.',
        detail: 'Biasing is the subject of later chapters for each device, but the idea is born here: a DC solution first, then signals as small excursions around it. An off-center $Q$ clips one polarity early.',
      },
      {
        term: 'Small-signal slope gain',
        kind: 'theorem',
        statement: 'For excursions small enough to stay on the linear segment, $v_{o} = A_{v}v_{i}$ where $A_{v}$ is the **incremental slope** $dv_{O}/dv_{I}$ at $Q$, tagged `small-av`. Total quantities split cleanly into DC plus signal by superposition.',
        detail: 'This linearization is why Chapters 5 through 7 can replace every transistor by its small-signal model. The price is vigilance: the signal must never reach the segment ends.',
      },
      {
        term: 'Power balance',
        kind: 'insight',
        statement: 'Signal power comes from the DC supplies, since $P_{dc} + P_{i} = P_{L} + P_{diss}$ makes the amplifier a **power converter** rather than a power creator, tagged `power-balance`. Efficiency $\eta = P_{L}/P_{dc}$ measures how cleanly that conversion runs.',
        detail: 'Section 1.4.5 introduces this bookkeeping early because output stages are judged almost entirely on efficiency. The dissipated remainder $P_{diss}$ is what heatsinks must remove.',
      },
    ],
    figures: [
      {
        caption: 'Amplifier transfer characteristic after Figure 1.14: linear ramp of slope $A_{v}$ between the ceilings $L_{+}$ and $L_{-}$, with the bias point $Q$ and the safe input span marked.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Amplifier transfer characteristic with saturation ceilings and bias point"><title>Transfer characteristic with saturation and Q point</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Transfer characteristic and bias point</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="80" y1="270" x2="600" y2="270"/><polygon points="610,270 598,264 598,276" fill="currentColor" stroke="none"/><line x1="340" y1="310" x2="340" y2="50"/><polygon points="340,40 334,52 346,52" fill="currentColor" stroke="none"/><polyline points="100,95 290,95 390,245 580,245"/><line x1="290" y1="270" x2="290" y2="288"/><line x1="390" y1="270" x2="390" y2="288"/><line x1="290" y1="279" x2="390" y2="279"/></g><circle cx="340" cy="170" r="6" fill="currentColor" stroke="none"/><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="606" y="274" font-family="sans-serif">vI</text><text x="346" y="60" font-family="sans-serif">vO</text><text x="108" y="84" font-family="sans-serif">L plus ceiling</text><text x="480" y="236" font-family="sans-serif">L minus ceiling</text><text x="352" y="166" font-family="sans-serif">Q</text><text x="396" y="180" font-family="sans-serif">slope Av</text><text x="292" y="304" font-family="sans-serif">linear input span</text><text x="60" y="330" font-family="sans-serif">Center Q between ceilings for equal clipping margins</text></g></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Linear range from slope and ceilings',
        problem: 'An amplifier has small-signal gain $-50$ with saturation ceilings $L_{+} = +10$ V and $L_{-} = -10$ V, biased at $Q = (0, 0)$. Find the linear input span and the output for a $10$ mV peak sine input.',
        steps: [
          { label: 'Step 1: Divide swing by gain magnitude', text: 'The linear input span is $(10 - (-10))/50 = 0.4$ V peak to peak, checked:```python\nswing = 20.0\nslope = 50.0\nedge = swing / slope\nprint(edge)\n```\nThe span is $0.4$ V peak to peak, or $\\pm 0.2$ V around $Q$.' },
          { label: 'Step 2: Test the $10$ mV signal', text: 'Peak output is $50 \\times 0.010 = 0.50$ V, far inside the $\\pm 10$ V ceilings, so the sine stays on the linear segment with no clipping.' },
          { label: 'Step 3: State the clipping edge', text: 'Inputs beyond $\\pm 0.2$ V peak flatten at $\\pm 10$ V; a $0.5$ V peak input would clip both tops at the ceilings.' },
        ],
        result: 'Linear for $|v_{I}| \\le 0.2$ V peak; $10$ mV in gives $0.50$ V peak out, inverted.',
      },
      {
        title: 'Off-center bias steals swing',
        problem: 'The same $-50$ gain amplifier with $\\pm 10$ V ceilings is biased at $V_{O} = +4$ V instead of zero. Find the largest undistorted sinusoidal input peak and say which ceiling clips first.',
        steps: [
          { label: 'Step 1: Measure margins to each ceiling', text: 'Upward margin is $10 - 4 = 6$ V and downward margin is $4 - (-10) = 14$ V, so the positive ceiling is the nearer threat.' },
          { label: 'Step 2: Convert the smaller margin to input', text: 'With $|A_{v}| = 50$ the allowed input peak is $6/50 = 0.12$ V. The negative half cycle could survive $14/50 = 0.28$ V, but the sine clips positive first.' },
          { label: 'Step 3: Recommend the fix', text: 'Re-center $Q$ at $0$ V to restore symmetric $\\pm 0.2$ V input range; bias placement, not gain, limits this stage.' },
        ],
        result: 'Maximum clean input $0.12$ V peak, clipping first at $L_{+}$; re-centering $Q$ doubles the usable range.',
      },
    ],
    keyTakeaways: [
      'The transfer characteristic is a linear ramp of slope $A_{v}$ between flat ceilings $L_{+}$ and $L_{-}$.',
      'Linear input span equals output swing divided by $|A_{v}|$; exceeding it clips the waveform.',
      'Bias point $Q$ sets the quiescent output; centering it maximizes symmetric swing.',
      'Small signals obey $v_{o} = A_{v}v_{i}$ by slope linearization, with power drawn from the DC supplies.',
    ],
    quiz: [
      {
        q: 'Gain is $-50$ with ceilings $\\pm 10$ V biased at zero. The linear input range is:',
        options: ['$\\pm 50$ V', '$\\pm 10$ V', '$\\pm 0.2$ V', '$\\pm 0.5$ V'],
        answer: 2,
        explanation: 'Step 1 — Given: $20$ V output swing and $|A_{v}| = 50$. Step 2 — Rule: input span is output swing over gain magnitude. Step 3 — Compute: $20/50 = 0.4$ V peak to peak, hence $\\pm 0.2$ V. Step 4 — Conclude: larger inputs flatten against $L_{+}$ and $L_{-}$.',
      },
      {
        q: 'The bias point $Q$ of an amplifier is best described as:',
        options: ['The DC operating point around which small signals swing', 'The saturation ceiling $L_{+}$', 'The input resistance of the stage', 'The frequency where gain drops $3$ dB'],
        answer: 0,
        explanation: 'Step 1 — Given: a nonlinear transfer with a linear segment. Step 2 — Rule: linearization needs a DC anchor, the quiescent point. Step 3 — Recall: signals are small excursions around $Q$ with slope gain. Step 4 — Conclude: $Q$ is the DC operating point, ideally centered for swing.',
      },
      {
        q: 'With $Q$ at $V_{O} = +4$ V, gain $-50$, ceilings $\\pm 10$ V, the maximum clean sine input peak is:',
        options: ['$0.28$ V', '$0.20$ V', '$0.40$ V', '$0.12$ V'],
        answer: 3,
        explanation: 'Step 1 — Given: upward margin $6$ V and downward margin $14$ V. Step 2 — Rule: the nearer ceiling sets the limit. Step 3 — Compute: $6/50 = 0.12$ V peak before $L_{+}$ clips. Step 4 — Conclude: the positive half cycle clips first despite the larger downward room.',
      },
      {
        q: 'Small-signal analysis $v_{o} = A_{v}v_{i}$ is valid when:',
        options: ['The supplies are disconnected', 'The signal stays on the linear segment around $Q$', 'The gain exceeds $100$', 'The input is a square wave'],
        answer: 1,
        explanation: 'Step 1 — Given: the slope linearization at $Q$. Step 2 — Rule: a tangent approximates only its local segment. Step 3 — Check: excursions reaching the ceilings violate the approximation and clip. Step 4 — Conclude: validity needs small excursions confined to the linear ramp.',
      },
    ],
  },

  // ------------------------------------------------------------------ 21.3
  {
    sectionId: 'elec-ch21-s3',
    readingTime: 9,
    intro: 'Gain is not constant with frequency: coupling capacitors mute the bass while device capacitances mute the treble, leaving a midband where the gain of Section 21.1 applies. Sedra/Smith reduces each roll-off to a single-time-constant network with transfer $K/(1 + s/\\omega_{0})$ or its high-pass twin. Example 1.5 then assembles a complete loaded amplifier — $K = 100$, $f_{0} = 159.2$ kHz, unity gain at $15.92$ MHz — from just two divider ratios and one time constant.',
    objectives: [
      'Write the low-pass and high-pass STC transfers with their magnitude and phase responses',
      'Find the $3$-dB frequency from $\\omega_{0} = 1/\\tau$ and sketch straight-line Bode asymptotes',
      'Predict sinusoidal steady-state outputs from $|T|$ and $\\angle T$ at any frequency',
    ],
    concepts: [
      {
        term: 'Low-pass STC network',
        kind: 'theorem',
        statement: 'The low-pass single-time-constant response is $T(s) = K/(1 + s/\\omega_{0})$, with magnitude falling to $K/\\sqrt{2}$ at the **corner** and phase sliding to $-45$ degrees there, tagged `LP-STC`. Its step response is the rising exponential $1 - e^{-t/\\tau}$.',
        detail: 'Table 1.2 lists this as the top-line prototype. The amplifier input pole of Example 1.5 — $R_{s}$ with $R_{in}$ and $C_{i}$ — is exactly this network with $\\tau = C_{i}(R_{s} \\parallel R_{in})$.',
      },
      {
        term: 'High-pass STC network',
        kind: 'theorem',
        statement: 'The high-pass twin $T(s) = K(s/\\omega_{0})/(1 + s/\\omega_{0})$ carries a **zero at dc** that blocks constant signals, tagged `HP-STC`. Well above $\\omega_{0}$ it passes $K$ with zero phase, and at $\\omega_{0}$ it passes $K/\\sqrt{2}$ leading by $45$ degrees.',
        detail: 'Every coupling capacitor plus the following stage input resistance forms one such network. Cascaded coupling poles multiply, so the dominant (highest) high-pass corner sets the low-frequency cutoff.',
      },
      {
        term: 'Three-dB frequency',
        kind: 'definition',
        statement: 'The corner $\\omega_{0} = 1/\\tau$ is the **half-power** frequency where $|T|$ sits $3$ dB below midband, tagged `omega-0`. One octave or decade away, the asymptotes already predict the response within $1$ dB.',
        detail: 'In Example 1.5, $\\tau = 1$ $\\mu$s gives $\\omega_{0} = 10^{6}$ rad/s, or $f_{0} = 159.2$ kHz. Bandwidth questions in every later chapter reduce to finding the governing $\\tau$.',
      },
      {
        term: 'Bode straight-line asymptotes',
        kind: 'method',
        statement: 'Magnitude Bode plots hold flat at $K$ until $\\omega_{0}$ then fall at **$-20$ dB per decade**, a drafting rule tagged `bode-slope`. The falling line hits $0$ dB at $K\\omega_{0}$, the unity-gain frequency, so $100$ V/V reaches unity two decades past its corner.',
        detail: 'Figures 1.23 and 1.24 show exact curves hugging these asymptotes within $3$ dB at the corner. Phase runs $0$ to $-90$ degrees over two decades centered on $\\omega_{0}$ for the low-pass case.',
      },
      {
        term: 'Amplifier frequency classes',
        kind: 'insight',
        statement: 'Direct-coupled stages pass dc and show only the high-frequency roll-off, while capacitively coupled stages add a low-frequency cutoff, defining the **midband** between them, tagged `midband`. Figure 1.26 catalogs low-pass, bandpass and tuned shapes from these two prototypes.',
        detail: 'Audio amplifiers are bandpass by coupling accident; op-amp circuits are low-pass by compensation design. Naming the class tells which STC corners must be computed.',
      },
    ],
    figures: [
      {
        caption: 'Low-pass STC Bode plots after Figures 1.23 and 1.24: magnitude flat at $K$ then $-20$ dB per decade past $\\omega_{0}$, with phase falling from $0$ to $-90$ degrees.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bode magnitude and phase of a low pass single time constant network"><title>STC low pass Bode magnitude and phase</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Low-pass STC: magnitude and phase</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="70" y1="290" x2="340" y2="290"/><line x1="70" y1="290" x2="70" y2="90"/><polyline points="100,150 210,150 320,235"/><line x1="210" y1="150" x2="320" y2="150" stroke-dasharray="5 5"/><line x1="390" y1="290" x2="660" y2="290"/><line x1="390" y1="290" x2="390" y2="90"/><polyline points="420,150 480,150 590,225 650,225"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="76" y="312" font-family="sans-serif">magnitude</text><text x="396" y="312" font-family="sans-serif">phase</text><text x="108" y="140" font-family="sans-serif">K flat</text><text x="218" y="140" font-family="sans-serif">corner w0</text><text x="252" y="228" font-family="sans-serif">minus 20 dB per decade</text><text x="428" y="140" font-family="sans-serif">0 deg</text><text x="560" y="250" font-family="sans-serif">minus 90 deg</text><text x="500" y="205" font-family="sans-serif">minus 45 deg at w0</text><text x="76" y="336" font-family="sans-serif">Unity gain at K times w0 for K equal 100</text></g></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Loaded amplifier STC analysis (Sedra Example 1.5)',
        problem: 'An amplifier with $R_{in} = 100$ k$\\Omega$, $C_{i} = 60$ pF, $\\mu = 144$ V/V, $R_{o} = 200$ $\\Omega$ is fed by $R_{s} = 20$ k$\\Omega$ and loaded by $R_{L} = 1$ k$\\Omega$. Find the dc gain $K$, the $3$-dB frequency, and the unity-gain frequency.',
        steps: [
          { label: 'Step 1: Multiply the two dividers by internal gain', text: 'Input $100/(100 + 20)$ times $144$ times output $1/(1 + 0.2)$, verified:```python\nRi = 100.0\nRs = 20.0\nmu = 144.0\nRL = 1.0\nRo = 0.2\nK = Ri / (Ri + Rs) * mu * RL / (RL + Ro)\nprint(K)\n```\nThe dc gain is $K = 100$ V/V, which is $40$ dB.' },
          { label: 'Step 2: Form the input time constant', text: '$R_{s} \\parallel R_{in} = 16.67$ k$\\Omega$ with $60$ pF gives $\\tau = 1.0$ $\\mu$s, so $\\omega_{0} = 1/\\tau = 10^{6}$ rad/s and $f_{0} = 159.2$ kHz.' },
          { label: 'Step 3: Extend two decades to unity', text: 'Falling $20$ dB per decade from $40$ dB needs two decades, so $f_{t} = 100 \\times 159.2$ kHz $= 15.92$ MHz, where $|T| = 1$.' },
        ],
        result: '$K = 100$ V/V ($40$ dB); $f_{0} = 159.2$ kHz; unity-gain frequency $15.92$ MHz.',
      },
      {
        title: 'Sine outputs at, below and above the corner',
        problem: 'For the amplifier above with $K = 100$ and $f_{0} = 159.2$ kHz, find $v_{o}(t)$ for $0.1$ V peak sine inputs at $1.592$ kHz, at $f_{0}$, and at $15.92$ MHz.',
        steps: [
          { label: 'Step 1: Deep in the midband', text: 'At $f_{0}/100$ the gain is $100 \\angle 0^{\\circ}$, so $v_{o} = 10\\sin(\\omega t)$ V — full size, no shift.' },
          { label: 'Step 2: Exactly at the corner', text: 'At $f_{0}$ the magnitude is $100/\\sqrt{2} = 70.7$ with $-45^{\\circ}$, so $v_{o} = 7.07\\sin(\\omega t - 45^{\\circ})$ V.' },
          { label: 'Step 3: At the unity frequency', text: 'At $100f_{0}$ the magnitude is $1$ with $-89.4^{\\circ}$, so $v_{o} = 0.1\\sin(\\omega t - 89.4^{\\circ})$ V — the amplifier merely passes the signal through.' },
        ],
        result: '$10$ V in phase, $7.07$ V lagging $45^{\\circ}$, $0.1$ V lagging $89.4^{\\circ}$.',
      },
    ],
    keyTakeaways: [
      'Low-pass STC: $T = K/(1 + s/\\omega_{0})$; high-pass STC: $T = K(s/\\omega_{0})/(1 + s/\\omega_{0})$.',
      'Corner $\\omega_{0} = 1/\\tau$ is the $3$-dB point; Bode magnitude falls $20$ dB per decade above it.',
      'Example 1.5: $K = 100$, $f_{0} = 159.2$ kHz, unity gain at $15.92$ MHz from one $1$ $\\mu$s input pole.',
      'Sinusoidal output follows $|T|$ in size and $\\angle T$ in phase: $70.7$ percent and $-45^{\\circ}$ at the corner.',
    ],
    quiz: [
      {
        q: 'A low-pass STC stage has $K = 100$ ($40$ dB) and $f_{0} = 159.2$ kHz. Its unity-gain frequency is:',
        options: ['$15.92$ MHz', '$100$ MHz', '$159.2$ kHz', '$1.592$ MHz'],
        answer: 0,
        explanation: 'Step 1 — Given: $40$ dB midband gain falling $20$ dB per decade. Step 2 — Rule: unity needs $40$ dB of roll-off, hence two decades. Step 3 — Compute: $159.2$ kHz $\\times 100 = 15.92$ MHz. Step 4 — Conclude: gain-bandwidth product $100 \\times 159.2$ kHz is conserved.',
      },
      {
        q: 'At exactly $\\omega_{0}$ a low-pass STC network with dc gain $K$ gives:',
        options: [`$K/2$ with $-90^{\\circ}$`, `$K$ with $0^{\\circ}$`, `$K/\\sqrt{2}$ with $-45^{\\circ}$`, 'Zero output'],
        answer: 2,
        explanation: 'Step 1 — Given: $T = K/(1 + j1)$ at the corner. Step 2 — Rule: magnitude is $K$ over $\\sqrt{2}$ and angle is $-\\tan^{-1}(1)$. Step 3 — Compute: $|T| = 0.707K$ and phase $-45^{\\circ}$. Step 4 — Conclude: the $3$-dB point halves the power.',
      },
      {
        q: 'The high-pass STC transfer $K(s/\\omega_{0})/(1 + s/\\omega_{0})$ at dc ($s = 0$) gives:',
        options: [`$K$`, 'Zero, because the numerator vanishes', `$K/\\sqrt{2}$`, 'Infinite gain'],
        answer: 1,
        explanation: 'Step 1 — Given: a zero at the origin in the numerator. Step 2 — Rule: $s = 0$ shorts the zero factor to zero. Step 3 — Recall: coupling capacitors block dc in hardware. Step 4 — Conclude: no dc transmission, with full $K$ recovered well above $\\omega_{0}$.',
      },
      {
        q: 'Phase of a low-pass STC stage two decades above $\\omega_{0}$ is about:',
        options: [`$-45^{\\circ}$`, `$0^{\\circ}$`, `$+90^{\\circ}$`, `$-90^{\\circ}$`],
        answer: 3,
        explanation: 'Step 1 — Given: phase runs $0$ to $-90^{\\circ}$ centered on $\\omega_{0}$. Step 2 — Rule: each decade past the corner adds about $-45^{\\circ}$ until saturation. Step 3 — Locate: two decades up is fully into the stopband. Step 4 — Conclude: essentially $-90^{\\circ}$, the integrator-like lag.',
      },
    ],
  },

  // ------------------------------------------------------------------ 21.4
  {
    sectionId: 'elec-ch21-s4',
    readingTime: 8,
    intro: 'One stage rarely suffices: Example 1.3 builds a complete amplifier from a high-input first stage of gain $10$, a high-gain middle stage of $100$, and a unity output stage with $10$ $\\Omega$ output resistance. Each stage loads the one before, so every gain is scaled by a divider before the three multiply to $818$ V/V. From source to load the overall gain is $743.6$ V/V — the two numbers differ by exactly the input loss factor.',
    objectives: [
      'Compute each loaded stage gain with its input/output divider factors',
      'Distinguish the amplifier gain $A_{v}$ from the source-to-load overall gain',
      'State the current and power gains and the buffer job of the output stage',
    ],
    concepts: [
      {
        term: 'Loaded stage gain',
        kind: 'theorem',
        statement: 'Stage $n$ delivers $A_{von}R_{in(n+1)}/(R_{in(n+1)} + R_{on})$ because the next input resistance is its **loading burden**, a product tagged `loaded-gain`. In Example 1.3 this turns $10$ into $9.9$ and $100$ into $90.9$.',
        detail: 'No stage can be designed in isolation: raising one input resistance directly raises the previous loaded gain. Data sheets therefore quote $A_{vo}$ plus $R_{in}$ and $R_{o}$ together.',
      },
      {
        term: 'Source-to-load overall gain',
        kind: 'method',
        statement: 'The overall gain multiplies the input coupling factor $R_{in1}/(R_{in1} + R_{s})$ by the cascade product $A_{v1}A_{v2}A_{v3}$, a **source-to-load chain** tagged `vs-to-vL`. Here $0.909 \\times 818 = 743.6$ V/V from source to the $100$ $\\Omega$ load.',
        detail: 'Confusing $A_{v}$ (amplifier alone) with $v_{L}/v_{s}$ (with source loss) is the classic cascade error. The book keeps both numbers in Example 1.3 precisely to separate them.',
      },
      {
        term: 'Current and power gain',
        kind: 'definition',
        statement: 'Current gain $A_{i} = i_{L}/i_{i}$ multiplies voltage gain into **power gain** $A_{p} = A_{v}A_{i}$, tagged `Ap-dB`. In decibels the power gain is the plain sum $A_{v}(\\mathrm{dB}) + A_{i}(\\mathrm{dB})$.',
        detail: 'The cascade input current is $v_{i1}/1$ M$\\Omega$ while the load current is $v_{L}/100$ $\\Omega$, so $A_{i}$ is enormous even where $A_{v}$ is modest. Supplies fund the difference.',
      },
      {
        term: 'Division of labor',
        kind: 'insight',
        statement: 'The first stage offers $1$ M$\\Omega$ to the source, the middle stage supplies the voltage gain, and the last stage offers $10$ $\\Omega$ to the load — a **task split** tagged `stage-roles`. Each stage is optimized for one job rather than all three.',
        detail: 'High gain wants high resistance levels; driving loads wants low ones. The cascade resolves the conflict by assigning each requirement its own stage.',
      },
      {
        term: 'Output buffer stage',
        kind: 'insight',
        statement: 'The unity-gain output stage is a **buffer**: it preserves $0.909$ of the signal into $100$ $\\Omega$ where the middle stage alone would keep only a tenth, tagged `buffer-stage`. Removing it drops the overall gain by a factor near nine.',
        detail: 'Exercise 1.15 confirms this: without stage three the source-to-load gain falls from $743.6$ to $81.8$ V/V. Buffers buy load immunity, not voltage gain.',
      },
    ],
    figures: [
      {
        caption: 'Three-stage cascade of Example 1.3: loaded stage gains $9.9$, $90.9$ and $0.909$ multiply to $A_{v} = 818$, while the $0.909$ input factor leaves $743.6$ from source to load.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three stage cascade amplifier with loaded stage gains"><title>Three stage cascade with loading</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Cascade: each stage loads the last</text><g stroke="currentColor" stroke-width="2" fill="none"><circle cx="60" cy="190" r="20"/><line x1="80" y1="190" x2="120" y2="190"/><rect x="120" y="140" width="130" height="100" rx="6"/><line x1="250" y1="190" x2="290" y2="190"/><rect x="290" y="140" width="130" height="100" rx="6"/><line x1="420" y1="190" x2="460" y2="190"/><rect x="460" y="140" width="110" height="100" rx="6"/><line x1="570" y1="190" x2="620" y2="190"/><polyline points="620,190 630,176 642,204 654,176 666,204 676,190"/><line x1="676" y1="190" x2="676" y2="240"/><line x1="664" y1="240" x2="688" y2="240"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="48" y="194" font-family="sans-serif">vs</text><text x="86" y="172" font-family="sans-serif">Rs</text><text x="140" y="168" font-family="sans-serif">Stage 1</text><text x="140" y="188" font-family="sans-serif">gain 9.9</text><text x="140" y="208" font-family="sans-serif">Rin 1 M</text><text x="310" y="168" font-family="sans-serif">Stage 2</text><text x="310" y="188" font-family="sans-serif">gain 90.9</text><text x="310" y="208" font-family="sans-serif">Rin 100 k</text><text x="472" y="168" font-family="sans-serif">Stage 3</text><text x="472" y="188" font-family="sans-serif">gain 0.909</text><text x="472" y="208" font-family="sans-serif">Ro 10</text><text x="622" y="172" font-family="sans-serif">RL</text><text x="120" y="280" font-family="sans-serif">Amplifier alone: 9.9 x 90.9 x 0.909 = 818</text><text x="120" y="302" font-family="sans-serif">Source to load: 0.909 x 818 = 743.6</text><text x="120" y="324" font-family="sans-serif">Without stage 3 the overall gain falls to 81.8</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Full cascade accounting (Sedra Example 1.3)',
        problem: 'A source with $R_{s} = 100$ k$\\Omega$ feeds stage one ($R_{in} = 1$ M$\\Omega$, $A_{vo1} = 10$, $R_{o1} = 1$ k$\\Omega$), stage two ($R_{in} = 100$ k$\\Omega$, $A_{vo2} = 100$, $R_{o2} = 1$ k$\\Omega$) and stage three ($R_{in} = 10$ k$\\Omega$, $A_{vo3} = 1$, $R_{o3} = 10$ $\\Omega$) driving $R_{L} = 100$ $\\Omega$. Find $A_{v}$ and $v_{L}/v_{s}$.',
        steps: [
          { label: 'Step 1: Load each stage in turn', text: 'Input factor $1000/(1000 + 100) = 0.909$; $A_{v1} = 10 \\times 100/101 = 9.9$; $A_{v2} = 100 \\times 10/11 = 90.9$; $A_{v3} = 1 \\times 100/110 = 0.909$, cross-checked:```python\nAvo1 = 10.0\nf1 = 100.0\nAv1 = Avo1 * f1 / 101.0\nAvo2 = 100.0\nf2 = 10.0\nAv2 = Avo2 * f2 / 11.0\nprint(Av1)\nprint(Av2)\n```\nThe printout confirms $9.9$ and $90.9$.' },
          { label: 'Step 2: Multiply the cascade', text: '$A_{v} = 9.9 \\times 90.9 \\times 0.909 = 818$ V/V, which is $20\\log 818 = 58.3$ dB of amplifier gain.' },
          { label: 'Step 3: Add the source loss', text: 'Overall $v_{L}/v_{s} = 0.909 \\times 818 = 743.6$ V/V. For $v_{s} = 1$ mV the book tabulates $0.91$ mV, $9$ mV stages and $744$ mV at the load.' },
        ],
        result: '$A_{v} = 818$ V/V ($58.3$ dB); $v_{L}/v_{s} = 743.6$ V/V.',
      },
      {
        title: 'Removing the buffer (Sedra Exercise 1.15)',
        problem: 'In the cascade above, connect the $100$ $\\Omega$ load directly to stage two. Find the amplifier gain, the source-to-load gain, and the factor lost.',
        steps: [
          { label: 'Step 1: Reload stage two with $100$ $\\Omega$', text: '$A_{v2}$ becomes $100 \\times 100/(100 + 1000) = 9.09$, since the $1$ k$\\Omega$ output resistance now dominates the divider.' },
          { label: 'Step 2: Recompute both gains', text: '$A_{v} = 9.9 \\times 9.09 = 90.0$ V/V for the amplifier alone; with the $0.909$ input factor, $v_{L}/v_{s} = 81.8$ V/V.' },
          { label: 'Step 3: Price the missing buffer', text: '$743.6/81.8 = 9.09$, so deleting the unity stage costs a factor near nine — buffers earn their place against heavy loads.' },
        ],
        result: '$A_{v} = 90.0$ V/V; $v_{L}/v_{s} = 81.8$ V/V, a factor $9.09$ below the buffered design.',
      },
    ],
    keyTakeaways: [
      'Loaded gain is $A_{vo}R_{in,next}/(R_{in,next} + R_{o})$: $10$ becomes $9.9$ and $100$ becomes $90.9$ here.',
      '$A_{v} = 818$ describes the amplifier; $v_{L}/v_{s} = 743.6$ includes the $0.909$ source coupling loss.',
      'Power gain $A_{p} = A_{v}A_{i}$ adds in decibels; supplies fund the surplus power.',
      'Dropping the output buffer cuts overall gain from $743.6$ to $81.8$, a factor near nine.',
    ],
    quiz: [
      {
        q: 'In Example 1.3 the loaded gain of stage one is $9.9$ rather than $10$ because:',
        options: ['The load $100$ $\\Omega$ reflects to the input', 'Decibels subtract across stages', 'The source resistance steals $9$ percent', 'Stage two input $100$ k$\\Omega$ loads the $1$ k$\\Omega$ output'],
        answer: 3,
        explanation: 'Step 1 — Given: $A_{vo1} = 10$ with $R_{o1} = 1$ k$\\Omega$ driving $R_{in2} = 100$ k$\\Omega$. Step 2 — Rule: loaded gain scales by $R_{in}/(R_{in} + R_{o})$. Step 3 — Compute: $10 \\times 100/101 = 9.9$. Step 4 — Conclude: the next stage input is the present stage load.',
      },
      {
        q: 'Overall source-to-load gain $743.6$ versus amplifier gain $818$ differ by:',
        options: ['$74.4$ of current gain', 'The $0.909$ input coupling factor', 'The $58.3$ dB conversion', 'The buffer gain of $0.909$ only'],
        answer: 1,
        explanation: 'Step 1 — Given: $818$ amplifier-alone and $743.6$ with source. Step 2 — Rule: overall gain adds the $R_{in1}/(R_{in1} + R_{s})$ factor. Step 3 — Compute: $0.909 \\times 818 = 743.6$. Step 4 — Conclude: source loading is a separate, prior loss.',
      },
      {
        q: 'With the load tied to stage two directly, the source-to-load gain becomes $81.8$. The loss factor versus $743.6$ is about:',
        options: ['Four', 'Eighty-two', 'Nine', 'Two'],
        answer: 2,
        explanation: 'Step 1 — Given: $743.6$ buffered and $81.8$ unbuffered. Step 2 — Rule: ratio the two overall gains. Step 3 — Compute: $743.6/81.8 = 9.09$. Step 4 — Conclude: the unity buffer was contributing a factor near nine of load immunity.',
      },
      {
        q: 'Power gain in decibels for $A_{v} = 58.3$ dB and $A_{i} = 40$ dB is:',
        options: ['$98.3$ dB by addition', '$2332$ dB by multiplication', '$58.3$ dB, current adds nothing', '$18.3$ dB by subtraction'],
        answer: 0,
        explanation: 'Step 1 — Given: voltage and current gains in decibels. Step 2 — Rule: $A_{p} = A_{v}A_{i}$ becomes addition in log scale. Step 3 — Compute: $58.3 + 40 = 98.3$ dB. Step 4 — Conclude: ratios multiply while their decibels add.',
      },
    ],
  },
]
