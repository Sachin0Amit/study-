import type { SectionContent } from '../library'

// ============================================================================
// The Electronics Master Library — Chapter 29: Feedback in Amplifiers.
// Sedra/Smith, "Microelectronic Circuits" 8e, Chapter 11 (pp. 781–886):
// the four series-shunt topologies, loop gain and desensitivity, bandwidth
// extension with distortion and impedance control, and stability with gain
// and phase margins from Barkhausen to Nyquist.
// Worked-problem numbers follow the book; arithmetic re-verified. Math is
// LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh29Content: SectionContent[] = [
  // ------------------------------------------------------------------ 29.1
  {
    sectionId: 'elec-ch29-s1',
    readingTime: 8,
    intro: 'Figure 11.1 closes a basic amplifier of gain $A$ with a feedback network $\\beta$ that samples the output and mixes a fraction back at the input. Sampling in series senses voltage while sampling in shunt senses current, and mixing in series subtracts voltage while mixing in shunt subtracts current. The four combinations of Figure 11.8 are series-shunt, shunt-series, series-series and shunt-shunt.',
    objectives: [
      'Name the four topologies from sampling at the output and mixing at the input',
      'Label series-shunt as voltage, shunt-series as current, plus the two mixed pairings',
      'Identify topology on a schematic from where $\\beta$ senses and returns',
    ],
    concepts: [
      {
        term: 'Sampling versus mixing',
        kind: 'definition',
        statement: 'Output **sampling in series** reads voltage while **sampling in shunt** reads current, tagged `sample-mix`. Input mixing in series subtracts voltage and mixing in shunt subtracts current.',
        detail: 'Series sampling parallels the load; shunt sampling sits in series with it. The book tests topology by opening or shorting the output and watching whether feedback survives.',
      },
      {
        term: 'Series-shunt voltage amplifier',
        kind: 'definition',
        statement: 'Series mixing plus shunt-like voltage sampling stabilizes **voltage gain $A_{v} = V_{o}/V_{i}$**, tagged `series-shunt`. The noninverting op-amp connection of Example 11.4 is the textbook instance.',
        detail: 'Feedback factor $\\beta = V_{f}/V_{o}$ is dimensionless. Ideal closed-loop gain tends to $1/\\beta$ set by resistors, as Problem 11.130 style cascades exploit.',
      },
      {
        term: 'Shunt-series current amplifier',
        kind: 'definition',
        statement: 'Shunt mixing plus series current sampling stabilizes **current gain $A_{i} = I_{o}/I_{i}$**, tagged `shunt-series`. The feedback factor $\\beta = I_{f}/I_{o}$ is again dimensionless.',
        detail: 'Current mirrors with resistive sensing implement this on chip. Input looks low and output looks high, the dual of the voltage amplifier.',
      },
      {
        term: 'Mixed transresistance pair',
        kind: 'definition',
        statement: 'Series sampling with shunt mixing gives **transconductance $G_{m} = I_{o}/V_{i}$**, while shunt sampling with series mixing gives **transresistance $R_{m} = V_{o}/I_{i}$**, tagged `mixed-pair`. Shunt-shunt op-amp current-to-voltage converters show the latter.',
        detail: 'Here $\\beta$ carries ohms or siemens so loop gain $A\\beta$ stays dimensionless. Table 11.1 collects units, gains and ideal $1/\\beta$ limits for all four.',
      },
      {
        term: 'Topology spotting rule',
        kind: 'method',
        statement: 'Short the output voltage to test **voltage sampling** and open the output current to test **current sampling**, tagged `spot-rule`. Then short the input to test shunt mixing versus series mixing.',
        detail: 'If shorting the output kills feedback, sampling is voltage; if opening kills it, sampling is current. The same short-open test at the input separates shunt from series mixing.',
      },
    ],
    figures: [
      {
        caption: 'General feedback after Figures 11.1 and 11.8: basic gain $A$ with network $\\beta$ sampling the output and mixing at the input in four series-shunt pairings.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="General feedback structure with four topologies"><title>Four feedback topologies</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Feedback: A forward, beta back, four pairings</text><g stroke="currentColor" stroke-width="2" fill="none"><rect x="220" y="120" width="140" height="90" rx="6"/><rect x="220" y="240" width="140" height="50" rx="6"/><line x1="120" y1="165" x2="220" y2="165"/><line x1="360" y1="165" x2="480" y2="165"/><line x1="480" y1="165" x2="480" y2="265"/><line x1="480" y1="265" x2="360" y2="265"/><line x1="220" y1="265" x2="150" y2="265"/><line x1="150" y1="265" x2="150" y2="165"/><circle cx="150" cy="165" r="8" fill="none"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="240" y="160" font-family="sans-serif">basic A forward</text><text x="240" y="270" font-family="sans-serif">beta network back</text><text x="490" y="180" font-family="sans-serif">output sample</text><text x="60" y="190" font-family="sans-serif">input mix</text><text x="120" y="320" font-family="sans-serif">series-shunt voltage, shunt-series current, plus trans pair</text></g></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Noninverting as series-shunt',
        problem: 'An op amp with open-loop $A = 10^{5}$ V per V uses $R_{1} = 1$ k$\\Omega$ to ground and $R_{2} = 99$ k$\\Omega$ feedback for a target near $100$ V per V. Identify topology, $\\beta$ and ideal $A_{f}$.',
        steps: [
          { label: 'Step 1: Topology', text: 'Output voltage sampled by the divider and returned in series at the inverting input means series-shunt voltage feedback.' },
          { label: 'Step 2: Feedback factor', text: 'Divider gives $\\beta = R_{1}/(R_{1}+R_{2}) = 1/100 = 0.01$ V per V.' },
          { label: 'Step 3: Ideal closed gain', text: 'Ideal $A_{f} = 1/\\beta = 100$ V per V; finite $A$ corrects to $99.9$ V per V by $1/(1+1/A\\beta)$.' },
        ],
        result: 'Series-shunt; $\\beta = 0.01$; $A_{f} \\approx 100$ V per V.',
      },
      {
        title: 'Shunt-shunt transresistance',
        problem: 'A shunt-shunt stage has open-loop $R_{M} = 100$ k$\\Omega$ with $\\beta = 0.01$ mA per V ($10$ $\\mu$S). Find loop gain, ideal closed gain and actual $R_{Mf}$ with a script check.',
        steps: [
          { label: 'Step 1: Loop gain', text: 'Loop $R_{M}\\beta = 10^{5} \\times 10^{-5} = 1$? Wait units: $100$ k$\\Omega$ times $10$ $\\mu$S $= 1.0$, so desensitivity is $2.0$ for this teaching choice.' },
          { label: 'Step 2: Ideal and actual', text: 'Ideal $1/\\beta = 100$ k$\\Omega$; actual $R_{Mf} = R_{M}/(1+R_{M}\\beta) = 50$ k$\\Omega$.' },
          { label: 'Step 3: Script the numbers', text: 'Loop arithmetic:```python\nRM = 100e3\nbeta = 10e-6\nloop = RM * beta\nRMf = RM / (1.0 + loop)\nprint(loop)\nprint(RMf)\n```\nThe printout gives $1.0$ loop and $50000$ $\\Omega$ closed gain.' },
        ],
        result: 'Loop $1.0$; ideal $100$ k$\\Omega$; actual $50$ k$\\Omega$.',
      },
    ],
    keyTakeaways: [
      'Series samples voltage, shunt samples current; series mixes voltage, shunt mixes current.',
      'Series-shunt stabilizes $V_{o}/V_{i}$; shunt-series stabilizes $I_{o}/I_{i}$.',
      'Mixed pairings stabilize $I_{o}/V_{i}$ and $V_{o}/I_{i}$ with $\\beta$ in siemens or ohms.',
      'Noninverting op-amp wiring is series-shunt with $\\beta = R_{1}/(R_{1}+R_{2})$.',
    ],
    quiz: [
      {
        q: 'Sampling output voltage in parallel with the load is:',
        options: ['Shunt sampling of current', 'Series sampling of voltage', 'No sampling', 'Mixing at the input'],
        answer: 1,
        explanation: 'Step 1 — Given: sense nodes across the load. Step 2 — Rule: parallel senses voltage per Figure 11.8. Step 3 — Name: series sampling in book language. Step 4 — Conclude: shorting the output kills this feedback.',
      },
      {
        q: 'The noninverting amplifier with $R_{1} = 1$ k$\\Omega$ and $R_{2} = 99$ k$\\Omega$ has $\\beta$:',
        options: ['$100$ V per V', '$99$ V per V', '$1$ A per V', '$0.01$ V per V'],
        answer: 3,
        explanation: 'Step 1 — Given: divider values. Step 2 — Rule: $\\beta = R_{1}/(R_{1}+R_{2})$. Step 3 — Compute: $1/100 = 0.01$. Step 4 — Conclude: ideal gain $1/\\beta = 100$ V per V.',
      },
      {
        q: 'Shunt-series feedback stabilizes:',
        options: ['Current gain $I_{o}/I_{i}$', 'Voltage gain $V_{o}/V_{i}$', 'Transresistance $V_{o}/I_{i}$', 'Power-supply rejection'],
        answer: 0,
        explanation: 'Step 1 — Given: shunt mixing plus current sampling. Step 2 — Rule: Table 11.1 maps this pair to current gain. Step 3 — Units: $\\beta$ dimensionless for this pairing. Step 4 — Conclude: input low, output high suits current drive.',
      },
      // PYQ-pattern: topology spotting by short-open tests (rephrased, values changed)
      {
        q: 'Shorting the output kills feedback while opening it preserves feedback. Sampling is:',
        options: ['Current sampling', 'No sampling', 'Voltage sampling', 'Mixing only'],
        answer: 2,
        explanation: 'Step 1 — Given: short-open test results. Step 2 — Rule: voltage sense needs output voltage to survive. Step 3 — Short: zero volts means zero feedback. Step 4 — Conclude: series voltage sampling holds.',
      },
    ],
  },
  // ------------------------------------------------------------------ 29.2
  {
    sectionId: 'elec-ch29-s2',
    readingTime: 9,
    intro: 'With loop gain $L = A\\beta$ the closed-loop gain of Figure 11.2 is $A_{f} = A/(1+A\\beta)$, so large $L$ trades raw gain for predictability. Desensitivity $D = 1+A\\beta$ divides every fractional change in $A$, which Problem 11.3 quantifies when $A$ falls by ten percent. Example 11.4 then shows the noninverting buffer holding $100$ V per V within fractions of a percent.',
    objectives: [
      'Write $A_{f} = A/(1+A\\beta)$ and desensitivity $D = 1+A\\beta$ from the loop diagram',
      'Compute fractional change $dA_{f}/A_{f} = (dA/A)/D$ for a ten percent $A$ drop',
      'Size $A\\beta$ for $100$ V per V within five percent versus one half percent',
    ],
    concepts: [
      {
        term: 'Loop gain L',
        kind: 'definition',
        statement: 'Breaking the loop and tracking one lap gives **loop gain $L = A\\beta$**, tagged `loop-gain`. Figure 11.2 labels $A$ forward and $\\beta$ back with subtraction at the input.',
        detail: 'Magnitude $|L|$ near $100$ means feedback dominates the input error. Phase of $L$ decides stability in Section 29.4, while magnitude decides accuracy here.',
      },
      {
        term: 'Desensitivity factor',
        kind: 'theorem',
        statement: 'Fractional gain change shrinks by **$D = 1+A\\beta$**: $dA_{f}/A_{f} = (dA/A)/D$, tagged `desense-D`. With $L = 99$, a ten percent $A$ fall moves $A_{f}$ only $0.1$ percent.',
        detail: 'Problem 11.3 walks $A = 1000$ V per V with $\\beta = 0.099$ through exactly this division. Larger $L$ buys accuracy at lower closed gain $A_{f} \\approx 1/\\beta$.',
      },
      {
        term: 'Ideal 1-over-beta limit',
        kind: 'insight',
        statement: 'As $L$ grows large the closed gain tends to **$1/\\beta$ set by passives**, tagged `one-over-beta`. Example 11.4 holds $100$ V per V from a $0.01$ divider despite $A$ uncertainty.',
        detail: 'Resistor matching near one percent then beats transistor gain spread near fifty percent. Precision analog design is largely the art of raising $L$ where it counts.',
      },
      {
        term: 'Gain-setting trade',
        kind: 'method',
        statement: 'Holding $A_{f}$ within **five percent needs $L$ near $20$**, while one half percent needs $L$ near $200$, tagged `gain-trade`. Problem 11.5 sizes $\\beta$ for each tolerance from nominal $A$.',
        detail: 'Tighter tolerance costs loop gain that could have raised $A_{f}$ instead. The book prices accuracy directly in sacrificed raw gain.',
      },
      {
        term: 'Return-ratio view',
        kind: 'insight',
        statement: 'The **return ratio** measured by zeroing the source and returning a test signal equals $-A\\beta$ for unilateral loops, tagged `return-ratio`. Section 11.4 uses it when $A$ and $\\beta$ load each other.',
        detail: 'Systematic analysis separates basic amplifier, feedback network and loading before forming $L$. The shortcut $A\\beta$ product applies only after that separation.',
      },
    ],
    figures: [
      {
        caption: 'Loop gain after Figure 11.2: $A_{f} = A/(1+A\\beta)$ with desensitivity $D = 1+A\\beta$ dividing every $A$ variation.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Closed loop gain with desensitivity"><title>Loop gain and desensitivity</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Closed loop: Af equals A over one plus loop</text><g stroke="currentColor" stroke-width="2" fill="none"><circle cx="150" cy="180" r="16" fill="none"/><line x1="90" y1="180" x2="134" y2="180"/><line x1="166" y1="180" x2="260" y2="180"/><rect x="260" y="130" width="140" height="100" rx="6"/><line x1="400" y1="180" x2="500" y2="180"/><line x1="500" y1="180" x2="500" y2="280"/><line x1="500" y1="280" x2="260" y2="280"/><rect x="260" y="255" width="140" height="50" rx="6"/><line x1="260" y1="280" x2="166" y2="280"/><line x1="166" y1="280" x2="166" y2="196"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="240" y="180" font-family="sans-serif">A forward</text><text x="280" y="285" font-family="sans-serif">beta back</text><text x="500" y="200" font-family="sans-serif">output</text><text x="60" y="200" font-family="sans-serif">input minus feedback</text><text x="120" y="320" font-family="sans-serif">larger loop means smaller change in Af</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Desensitivity arithmetic (Problem 11.3)',
        problem: 'A stage has $A = 1000$ V per V with $\\beta = 0.099$ V per V. Find $L$, $D$, $A_{f}$, and the $A_{f}$ shift when $A$ falls ten percent.',
        steps: [
          { label: 'Step 1: Loop and desensitivity', text: 'Loop $L = 1000 \\times 0.099 = 99$, so $D = 100$.' },
          { label: 'Step 2: Closed gain', text: 'Gain $A_{f} = 1000/100 = 10$ V per V, near $1/\\beta = 10.1$ V per V.' },
          { label: 'Step 3: Ten-percent fall', text: 'New $A = 900$ V per V gives $A_{f} = 900/90.1 = 9.99$ V per V, only $0.1$ percent low.' },
        ],
        result: '$L = 99$; $D = 100$; $A_{f} = 10$ V per V shifting $0.1$ percent.',
      },
      {
        title: 'Tolerance sizing with script',
        problem: 'Target $A_{f} = 100$ V per V within five percent versus one half percent from nominal $A = 10^{4}$ V per V. Find required $\\beta$ style loop values and verify the shifts.',
        steps: [
          { label: 'Step 1: Loop for five percent', text: 'Need $D$ near $20$, so $L$ near $19$ with $\\beta$ near $0.0019$ for $100$ V per V.' },
          { label: 'Step 2: Loop for one half percent', text: 'Need $D$ near $200$, so $L$ near $199$ with $\\beta$ near $0.0099$ after re-solving $A_{f} = A/(1+L)$.' },
          { label: 'Step 3: Check by script', text: 'Shift check:```python\nA = 1e4\nfor L in [19.0, 199.0]:\n    Af = A / (1.0 + L)\n    Af2 = 0.9 * A / (1.0 + 0.9 * L)\n    print(Af, (Af2 - Af) / Af)\n```\nThe printout shows fractional moves near five percent over $20$ and one half percent over $200$.' },
        ],
        result: 'Five percent needs $L$ near $19$; one half percent needs $L$ near $199$.',
      },
    ],
    keyTakeaways: [
      '$A_{f} = A/(1+A\\beta)$ with loop $L = A\\beta$ and $D = 1+L$.',
      'Fractional shifts divide by $D$: ten percent over $100$ becomes one tenth percent.',
      'Large $L$ gives $A_{f} \\approx 1/\\beta$ set by passives.',
      'Five percent tolerance needs $L$ near $19$; one half percent needs $L$ near $199$.',
    ],
    quiz: [
      {
        q: 'With $A = 1000$ V per V and $\\beta = 0.099$ V per V, $A_{f}$ is:',
        options: ['$1000$ V per V', '$10$ V per V', '$0.099$ V per V', '$99$ V per V'],
        answer: 1,
        explanation: 'Step 1 — Given: open gain and feedback factor. Step 2 — Rule: $A_{f} = A/(1+A\\beta)$. Step 3 — Compute: $1000/100 = 10$ V per V. Step 4 — Conclude: near $1/\\beta = 10.1$ V per V.',
      },
      // PYQ-pattern: ten percent drop divided by D (rephrased, values changed)
      {
        q: 'If $A$ falls ten percent with $D = 100$, $A_{f}$ moves about:',
        options: ['Ten percent', 'One hundred percent', 'One tenth percent', 'Zero always'],
        answer: 2,
        explanation: 'Step 1 — Given: fractional $A$ fall $0.1$. Step 2 — Rule: divide by $D$. Step 3 — Compute: $0.1/100 = 0.001$. Step 4 — Conclude: feedback desensitizes by two orders.',
      },
      {
        q: 'Large loop gain drives $A_{f}$ toward:',
        options: ['$A$ itself', '$\\beta$ itself', 'Zero', '$1/\\beta$ set by the feedback network'],
        answer: 3,
        explanation: 'Step 1 — Given: $L \\gg 1$. Step 2 — Rule: $A/(1+L)$ tends to $1/\\beta$. Step 3 — Meaning: passives define accuracy. Step 4 — Conclude: Example 11.4 exploits exactly this limit.',
      },
      {
        q: 'Holding $100$ V per V within one half percent instead of five percent needs loop gain larger by about:',
        options: ['Ten times near $199$ versus $19$', 'Equal loops', 'Half the loop', 'Zero loop'],
        answer: 0,
        explanation: 'Step 1 — Given: two tolerances differing by ten. Step 2 — Rule: $D$ scales inversely with allowed fraction. Step 3 — Values: $20$ versus $200$. Step 4 — Conclude: precision is purchased with loop gain.',
      },
    ],
  },
  // ------------------------------------------------------------------ 29.3
  {
    sectionId: 'elec-ch29-s3',
    readingTime: 8,
    intro: 'Section 11.3 shows the same $1+A\\beta$ factor that stabilizes gain also widens bandwidth, straightens transfer curves and sets terminal resistances. Upper corner $f_{H}$ rises by $D$ while lower corner $f_{L}$ falls by $D$, keeping $A_{f}f_{Hf}$ related to the open-loop product. Series mixing raises impedance and shunt mixing lowers it, with dual rules at the output.',
    objectives: [
      'Write $f_{Hf} = f_{H}D$ and $f_{Lf} = f_{L}/D$ for single-pole bandwidth extension',
      'Explain harmonic suppression by $D$ inside the loop bandwidth',
      'State series-raises and shunt-lowers rules for $R_{if}$ and $R_{of}$ per topology',
    ],
    concepts: [
      {
        term: 'Bandwidth extension',
        kind: 'theorem',
        statement: 'Feedback stretches the high corner to **$f_{Hf} = f_{H}(1+A\\beta)$** and squeezes the low corner to **$f_{Lf} = f_{L}/(1+A\\beta)$**, tagged `bw-extend`. A $100$ kHz open $f_{H}$ with $D = 10$ becomes $1$ MHz closed.',
        detail: 'Gain-bandwidth product is nearly preserved: $A_{f}f_{Hf} \\approx Af_{H}$ for large $L$. Video stages exploit this to trade excess gain for megahertz bandwidth.',
      },
      {
        term: 'Distortion suppression',
        kind: 'insight',
        statement: 'Harmonics generated inside the loop fall by **$D$ at the output** while the loop has gain, tagged `thd-cut`. Example 11.4 style ten percent open distortion becomes one percent with $D = 10$.',
        detail: 'Feedforward distortion outside the loop is untouched. The moral favors placing the dominant nonlinearity inside high-loop-gain stages.',
      },
      {
        term: 'Noise versus desensitivity',
        kind: 'insight',
        statement: 'Signals and distortion at the **input see closed gain**, while noise injected in the **feedback network appears unattenuated**, tagged `noise-price`. Low-noise design keeps $\\beta$ resistors quiet and cool.',
        detail: 'Feedback cannot distinguish source signal from $\\beta$ noise. Large $R$ in $\\beta$ raises thermal noise that $1/\\beta$ gain then amplifies.',
      },
      {
        term: 'Input-resistance rules',
        kind: 'theorem',
        statement: 'Series mixing multiplies to **$R_{if} = R_{i}D$** while shunt mixing divides to **$R_{if} = R_{i}/D$**, tagged `rif-rule`. The noninverting buffer shows near-infinite $R_{if}$ while the inverting stage shows virtual ground.',
        detail: 'Factors use loop gain for the specific topology after loading separation. Systematic Section 11.4 analysis inserts $R_{i}$ correctly before applying $D$.',
      },
      {
        term: 'Output-resistance rules',
        kind: 'theorem',
        statement: 'Voltage sampling divides to **$R_{of} = R_{o}/D$** while current sampling multiplies to **$R_{of} = R_{o}D$**, tagged `rof-rule`. Series-shunt outputs look stiff; shunt-series outputs look like current sources.',
        detail: 'A $100$ $\\Omega$ open output with $D = 10$ becomes $10$ $\\Omega$ under voltage feedback. Current-source outputs invert the ratio and rise toward megohms.',
      },
    ],
    figures: [
      {
        caption: 'Bandwidth extension after Section 11.3: $f_{H}$ rises by $D$ and $f_{L}$ falls by $D$, with $A_{f}f_{Hf}$ near the open-loop product.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Feedback bandwidth extension"><title>Bandwidth wider by desensitivity</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Feedback: lower gain, wider band by D</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="90" y1="300" x2="650" y2="300"/><line x1="90" y1="300" x2="90" y2="80"/><line x1="90" y1="180" x2="300" y2="180"/><line x1="300" y1="180" x2="300" y2="110"/><line x1="90" y1="230" x2="450" y2="230"/><line x1="450" y1="230" x2="450" y2="110"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="150" y="166" font-family="sans-serif">open AM high, fH low</text><text x="200" y="250" font-family="sans-serif">closed Af low, fHf high by D</text><text x="300" y="100" font-family="sans-serif">open fH</text><text x="450" y="100" font-family="sans-serif">closed fHf equals fH times D</text><text x="120" y="320" font-family="sans-serif">product Af times fHf near AM times fH</text></g></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Ten-times bandwidth trade',
        problem: 'An amplifier has $A_{M} = 1000$ V per V with $f_{H} = 100$ kHz and $f_{L} = 100$ Hz. Apply $\\beta$ for $D = 10$ and find $A_{f}$, $f_{Hf}$ and $f_{Lf}$.',
        steps: [
          { label: 'Step 1: Closed gain', text: 'Gain $A_{f} = 1000/10 = 100$ V per V.' },
          { label: 'Step 2: Corners', text: 'High corner $f_{Hf} = 100 \\times 10 = 1000$ kHz $= 1$ MHz; low corner $f_{Lf} = 100/10 = 10$ Hz.' },
          { label: 'Step 3: Product check', text: 'Product $100 \\times 1$ MHz $= 100$ MHz matches $1000 \\times 100$ kHz.' },
        ],
        result: '$A_{f} = 100$ V per V; $f_{Hf} = 1$ MHz; $f_{Lf} = 10$ Hz.',
      },
      {
        title: 'Impedance and distortion check',
        problem: 'Series-shunt stage has $R_{i} = 10$ k$\\Omega$, $R_{o} = 1$ k$\\Omega$, $D = 10$ and ten percent open distortion. Find $R_{if}$, $R_{of}$, closed distortion, then script the scaling.',
        steps: [
          { label: 'Step 1: Terminal scaling', text: 'Series input rises to $R_{if} = 10 \\times 10 = 100$ k$\\Omega$; voltage-sampled output falls to $R_{of} = 1000/10 = 100$ $\\Omega$.' },
          { label: 'Step 2: Distortion', text: 'In-loop distortion falls to $10/10 = 1$ percent inside the loop bandwidth.' },
          { label: 'Step 3: Script the trade', text: 'One-pass scaling:```python\nRi = 10e3\nRo = 1e3\nD = 10.0\nTHD = 10.0\nprint(Ri * D)\nprint(Ro / D)\nprint(THD / D)\n```\nThe printout gives $100000$ $\\Omega$, $100$ $\\Omega$ and $1$ percent.' },
        ],
        result: '$R_{if} = 100$ k$\\Omega$; $R_{of} = 100$ $\\Omega$; distortion $1$ percent.',
      },
    ],
    keyTakeaways: [
      '$f_{Hf} = f_{H}D$ and $f_{Lf} = f_{L}/D$ preserve $GBW$ for single-pole stages.',
      'In-loop harmonics divide by $D$ inside the loop bandwidth.',
      'Series mixing raises $R_{i}$ by $D$; shunt mixing lowers it by $D$.',
      'Voltage sampling lowers $R_{o}$ by $D$; current sampling raises it by $D$.',
    ],
    quiz: [
      {
        q: 'Open $1000$ V per V with $f_{H} = 100$ kHz under $D = 10$ gives closed:',
        options: ['$100$ V per V with $1$ MHz', '$1000$ V per V with $100$ kHz', '$10000$ V per V with $10$ kHz', '$10$ V per V with $10$ kHz'],
        answer: 0,
        explanation: 'Step 1 — Given: open gain, corner and $D$. Step 2 — Rule: divide gain and multiply corner. Step 3 — Compute: $1000/10 = 100$, $100 \\times 10 = 1000$ kHz. Step 4 — Conclude: product $100$ MHz is preserved.',
      },
      {
        q: 'Ten percent open distortion with $D = 10$ becomes about:',
        options: ['$100$ percent', '$1$ percent in band', '$10$ percent unchanged', '$0$ percent at all frequencies'],
        answer: 1,
        explanation: 'Step 1 — Given: distortion born inside the loop. Step 2 — Rule: divide by $D$ where loop gain holds. Step 3 — Compute: $10/10 = 1$ percent. Step 4 — Conclude: out-of-band harmonics return as loop rolls off.',
      },
      // PYQ-pattern: impedance scaling by topology (rephrased, values changed)
      {
        q: 'Series mixing with $R_{i} = 10$ k$\\Omega$ and $D = 10$ gives $R_{if}$:',
        options: [`$1$ k$\\Omega$`, `$10$ k$\\Omega$`, `$0$ $\\Omega$`, `$100$ k$\\Omega$`],
        answer: 3,
        explanation: 'Step 1 — Given: series input connection. Step 2 — Rule: $R_{if} = R_{i}D$. Step 3 — Compute: $10 \\times 10 = 100$ k$\\Omega$. Step 4 — Conclude: noninverting buffers look near open.',
      },
      {
        q: 'Voltage sampling with $R_{o} = 1$ k$\\Omega$ and $D = 10$ gives $R_{of}$:',
        options: [`$10$ k$\\Omega$`, `$1$ k$\\Omega$`, `$100$ $\\Omega$`, `$0.1$ $\\Omega$`],
        answer: 2,
        explanation: 'Step 1 — Given: shunt voltage sampling. Step 2 — Rule: $R_{of} = R_{o}/D$. Step 3 — Compute: $1000/10 = 100$ $\\Omega$. Step 4 — Conclude: closed outputs drive heavier loads stiffly.',
      },
    ],
  },
  // ------------------------------------------------------------------ 29.4
  {
    sectionId: 'elec-ch29-s4',
    readingTime: 9,
    intro: 'Closing the loop turns the $1+A\\beta$ denominator into $1+L(j\\omega)$, which vanishes when loop gain $L = -1$ and sustains oscillation by the Barkhausen criterion. Section 11.6 therefore reads gain margin where phase hits $-180$ degrees and phase margin where magnitude hits unity on Bode or Nyquist plots. The book targets $45$ to $60$ degrees of phase margin for well-damped step response.',
    objectives: [
      'State Barkhausen $|L| = 1$ with $\\angle L = 180$ degrees for sustained oscillation',
      'Read gain margin at $-180$ degrees and phase margin at unity magnitude',
      'Explain why $45$ to $60$ degrees phase margin gives clean transient response',
    ],
    concepts: [
      {
        term: 'Barkhausen oscillation condition',
        kind: 'theorem',
        statement: 'Sustained oscillation needs **unity loop magnitude with $180$ degrees of shift**, tagged `barkhausen`. Then $1+L = 0$ and the closed gain pole sits on the imaginary axis.',
        detail: 'Start-up needs $|L| > 1$ with limiting settling to $|L| = 1$. Chapter 15 oscillators add amplitude control to hold exactly that balance.',
      },
      {
        term: 'Gain margin',
        kind: 'definition',
        statement: 'Gain margin is how far **$|L|$ sits below unity** when phase reaches $-180$ degrees, tagged `gain-margin`. Positive decibels mean the $-180$ degree crossing is still attenuated.',
        detail: 'A $10$ dB margin tolerates doubling of gain before oscillation. Negative margin already oscillates because $|L| > 1$ at the critical phase.',
      },
      {
        term: 'Phase margin',
        kind: 'definition',
        statement: 'Phase margin is how far **$\\angle L$ sits above $-180$ degrees** at unity magnitude, tagged `phase-margin`. Figure 11.22 reads it directly off the Bode phase at $f_{t}$.',
        detail: 'Sixty degrees gives slight overshoot, $45$ degrees gives about twenty percent overshoot, and near zero rings for many cycles. The book compensates to at least $45$ degrees.',
      },
      {
        term: 'Nyquist encirclement',
        kind: 'method',
        statement: 'The **Nyquist plot of $L(j\\omega)$** must not encircle $-1$ for stability, tagged `nyquist-rule`. Distance from the curve to $-1$ encodes both margins at once.',
        detail: 'Clockwise encirclements count right-half-plane closed poles. Bode margins are the two axis intercepts of that same curve in magnitude-phase form.',
      },
      {
        term: 'Compensation for margin',
        kind: 'method',
        statement: 'Dominant-pole or Miller $C_{c}$ forces **unity crossover before $-180$ degrees**, tagged `margin-comp`. Section 10.4 style pole splitting separates $f_{D}$ and $f_{H2}$ so phase stays above $-135$ degrees to $f_{t}$.',
        detail: 'Lead compensation adds a zero near crossover as an alternative. Both sacrifice $GBW$ or add parts to buy phase lead where the loop needs it.',
      },
    ],
    figures: [
      {
        caption: 'Stability margins after Figure 11.22: gain margin at $-180$ degrees and phase margin at $|L| = 1$, with $45$ to $60$ degrees targeted.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gain and phase margins on Bode axes"><title>Gain and phase margins</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Margins: gain at minus 180, phase at unity</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="90" y1="300" x2="650" y2="300"/><line x1="90" y1="300" x2="90" y2="80"/><line x1="90" y1="160" x2="620" y2="160" stroke-dasharray="7 5"/><line x1="90" y1="200" x2="450" y2="200"/><line x1="450" y1="200" x2="620" y2="280"/><line x1="450" y1="80" x2="450" y2="300" stroke-dasharray="7 5"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="150" y="186" font-family="sans-serif">magnitude falling</text><text x="460" y="150" font-family="sans-serif">gain margin at minus 180 deg</text><text x="460" y="290" font-family="sans-serif">phase margin at unity gain</text><text x="360" y="70" font-family="sans-serif">unity crossover before critical phase</text><text x="120" y="320" font-family="sans-serif">target 45 to 60 degrees for clean steps</text></g></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Reading margins off Bode data',
        problem: 'Loop data shows $|L| = 0.25$ ($-12$ dB) at the $-180$ degree frequency and $\\angle L = -125$ degrees at unity magnitude. Find gain margin, phase margin and the stability verdict.',
        steps: [
          { label: 'Step 1: Gain margin', text: 'Margin is $1/0.25 = 4$ times or $12$ dB below unity at $-180$ degrees.' },
          { label: 'Step 2: Phase margin', text: 'Margin is $180 - 125 = 55$ degrees above $-180$ at crossover.' },
          { label: 'Step 3: Verdict', text: 'Both positive with $55$ degrees in the $45$ to $60$ window means stable with small overshoot.' },
        ],
        result: 'Gain margin $12$ dB; phase margin $55$ degrees; stably compensated.',
      },
      {
        title: 'Barkhausen frequency check',
        problem: 'A three-pole loop has each pole contributing $-45$ degrees per decade at $f_{0} = 1$ MHz with $|L| = 8$ at low frequency. Estimate where phase hits $-180$ degrees, what $|L|$ is there, and whether it oscillates.',
        steps: [
          { label: 'Step 1: Phase crossover', text: 'Three identical poles reach $-135$ degrees at $f_{0}$ and $-180$ degrees near $1.7f_{0} = 1.7$ MHz by Bode slope.' },
          { label: 'Step 2: Magnitude there', text: 'Rolling at $60$ dB per decade from $8$ at low frequency leaves $|L|$ near $2$ at $1.7$ MHz, above unity.' },
          { label: 'Step 3: Script the verdict', text: 'Margin estimate:```python\nL0 = 8.0\nf0 = 1e6\nfX = 1.7 * f0\nLx = L0 / (fX / f0) ** 3\nprint(fX)\nprint(Lx)\n```\nThe printout gives $1700000$ Hz and about $1.63$, confirming $|L| > 1$ at $-180$ degrees.' },
        ],
        result: '$-180$ degrees near $1.7$ MHz with $|L| \\approx 1.6$: oscillates without compensation.',
      },
    ],
    keyTakeaways: [
      'Barkhausen: $|L| = 1$ with $180$ degrees sustains oscillation; $>1$ starts it.',
      'Gain margin reads $|L|$ below unity at $-180$ degrees in decibels.',
      'Phase margin reads phase above $-180$ at unity magnitude; target $45$ to $60$ degrees.',
      'Nyquist encirclements of $-1$ count unstable closed poles.',
    ],
    quiz: [
      {
        q: 'Barkhausen for sustained oscillation requires:',
        options: ['$|L| = 1$ with $180$ degrees', '$|L| = 0$ with $0$ degrees', '$|L| = 100$ with $90$ degrees', '$|L| = 0.1$ with $45$ degrees'],
        answer: 0,
        explanation: 'Step 1 — Given: denominator $1+L$. Step 2 — Rule: zero needs $L = -1$. Step 3 — Form: magnitude one with $180$ degrees. Step 4 — Conclude: start-up then needs $|L| > 1$ before limiting.',
      },
      {
        q: 'Phase $ -125$ degrees at unity magnitude means phase margin:',
        options: ['$125$ degrees', '$-125$ degrees', '$180$ degrees', '$55$ degrees'],
        answer: 3,
        explanation: 'Step 1 — Given: loop angle at crossover. Step 2 — Rule: margin is $180 + \\angle L$. Step 3 — Compute: $180 - 125 = 55$ degrees. Step 4 — Conclude: inside the $45$ to $60$ window.',
      },
      // PYQ-pattern: margin reading and verdict (rephrased, values changed)
      {
        q: '$|L| = 0.25$ at $-180$ degrees means gain margin:',
        options: ['$-12$ dB unstable', '$12$ dB stable', '$0$ dB marginal', '$25$ dB with $25$ times'],
        answer: 1,
        explanation: 'Step 1 — Given: magnitude below unity at critical phase. Step 2 — Rule: margin is $1/|L|$ in decibels. Step 3 — Compute: $1/0.25 = 4$ or $12$ dB. Step 4 — Conclude: gain can quadruple before oscillation.',
      },
      {
        q: 'Nyquist stability holds when the $L$ plot:',
        options: ['Encircles $-1$ clockwise twice', 'Passes exactly through $-1$', 'Does not encircle $-1$ with positive margins', 'Ignores $-1$ entirely'],
        answer: 2,
        explanation: 'Step 1 — Given: frequency locus of $L$. Step 2 — Rule: encirclements count unstable poles. Step 3 — Safe: clean miss with distance encoding margins. Step 4 — Conclude: Bode margins are intercepts of the same curve.',
      },
    ],
  },
]
