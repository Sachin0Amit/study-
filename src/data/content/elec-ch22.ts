import type { SectionContent } from '../library'

// ============================================================================
// The Electronics Master Library — Chapter 22: Operational Amplifiers
// in Depth. Sedra/Smith, "Microelectronic Circuits" 8e, Chapter 2
// (pp. 58–135): the ideal op amp, inverting and noninverting
// configurations, difference amplifiers, integrators and differentiators,
// DC imperfections, finite gain-bandwidth and slew-rate limits. All
// worked-problem numbers follow the book’s worked problems and exercises;
// arithmetic re-verified. Math is LaTeX, rendered by KaTeX via the
// RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh22Content: SectionContent[] = [
  // ------------------------------------------------------------------ 22.1
  {
    sectionId: 'ece-e-ic-s10',
    readingTime: 8,
    intro: 'The op amp is a high-gain differential amplifier with two inputs and one output, drawn as the triangle of Figure 2.1 and described by $v_{O} = A(v_{+} - v_{-})$. Table 2.1 idealizes it with infinite gain, infinite input resistance, zero output resistance, zero common-mode gain and infinite bandwidth. Letting $A$ approach infinity while the output stays finite forces the two golden rules — the virtual short and the virtual open — on which every ideal circuit analysis rests.',
    objectives: [
      'State the five ideal characteristics of Table 2.1 and the terminal relation $v_{O} = A(v_{+} - v_{-})$',
      'Derive the virtual short $v_{+} = v_{-}$ and the virtual open $i_{+} = i_{-} = 0$ from the ideal limits',
      'Split any input pair into differential and common-mode parts and test whether the linear range holds',
    ],
    concepts: [
      {
        term: 'Op-amp symbol and terminals',
        kind: 'definition',
        statement: 'The triangle shows the inverting input, the noninverting input, the output, and the implicit positive and negative **supply rails**, tagged `opamp-symbol`. All signal voltages are measured to the common ground between the two supplies.',
        detail: 'Figure 2.2 powers the chip from $+V_{CC}$ and $-V_{CC}$ with the midpoint grounded. Later schematics hide the supply pins, but the output can never leave the interval they define.',
      },
      {
        term: 'Table 2.1 ideal characteristics',
        kind: 'definition',
        statement: 'The ideal device has infinite input resistance, zero output resistance, zero **common-mode gain**, infinite open-loop gain $A$, and infinite bandwidth, tagged `table-2-1`. Each infinity removes one parasitic from hand analysis.',
        detail: 'Infinite bandwidth means the gain $A$ is a real constant at every frequency of interest. Real devices approximate this table only inside their linear region and below their dominant pole.',
      },
      {
        term: 'Virtual short',
        kind: 'law',
        statement: 'With finite output the input difference $v_{O}/A$ vanishes as $A$ approaches infinity, forcing **$v_{+} = v_{-}$** without any physical wire, tagged `virtual-short`. The rule holds only while negative feedback keeps the output off the rails.',
        detail: 'For $A = 10^{5}$ and $\\pm 15$ V supplies the linear window is $|v_{+} - v_{-}| < 0.15$ mV. Open-loop inputs larger than this saturate the output and the short evaporates.',
      },
      {
        term: 'Virtual open',
        kind: 'law',
        statement: 'Infinite input resistance admits **zero input current**, so $i_{+} = i_{-} = 0$ whether the device is linear or saturated, tagged `virtual-open`. Every branch current at an input node therefore flows through the external network alone.',
        detail: 'Unlike the voltage rule, the current rule needs no feedback: it follows from the input construction itself. KCL at an input node then involves only resistors, capacitors and sources.',
      },
      {
        term: 'Differential and common-mode split',
        kind: 'notation',
        statement: 'Any pair splits as $v_{1} = v_{icm} - v_{id}/2$ and $v_{2} = v_{icm} + v_{id}/2$, isolating the **difference** $v_{id}$ the op amp amplifies from the **common level** $v_{icm}$ it ignores, tagged `vid-vicm`. Figure 2.4 draws exactly this decomposition.',
        detail: 'With $v_{1} = 1.00$ V and $v_{2} = 1.02$ V the difference is $20$ mV riding on $1.01$ V of common mode. Ideal analysis amplifies only the $20$ mV.',
      },
    ],
    figures: [
      {
        caption: 'Op-amp triangle with $v_{n}$, $v_{p}$ and $v_{o}$, beside the two golden rules $v_{p} = v_{n}$ and $i_{p} = i_{n} = 0$ that follow from $A \\to \\infty$ with finite output.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Op amp symbol with virtual short and virtual open rules"><title>Ideal op amp symbol and golden rules</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Ideal op amp and the two golden rules</text><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="150,120 150,250 300,185"/><line x1="70" y1="155" x2="150" y2="155"/><line x1="70" y1="215" x2="150" y2="215"/><line x1="300" y1="185" x2="380" y2="185"/><rect x="430" y="110" width="250" height="62" rx="6"/><rect x="430" y="196" width="250" height="62" rx="6"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="52" y="150" font-family="sans-serif">minus</text><text x="56" y="232" font-family="sans-serif">plus</text><text x="196" y="140" font-family="sans-serif">vn</text><text x="196" y="248" font-family="sans-serif">vp</text><text x="386" y="190" font-family="sans-serif">vo</text><text x="446" y="136" font-family="sans-serif">Rule 1: vp equals vn, virtual short</text><text x="446" y="156" font-family="sans-serif">needs linear region plus feedback</text><text x="446" y="222" font-family="sans-serif">Rule 2: ip and in equal zero</text><text x="446" y="242" font-family="sans-serif">holds always, from huge Rin</text><text x="60" y="300" font-family="sans-serif">vo equals A times vp minus vn, A toward infinity</text><text x="60" y="322" font-family="sans-serif">Linear window is supply span over A, here plus minus 0.15 mV</text></g></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Width of the linear window',
        problem: 'An op amp with open-loop gain $A = 10^{5}$ runs from $\\pm 15$ V supplies. Find the largest $|v_{+} - v_{-}|$ that keeps it linear, and state the output for $v_{+} - v_{-} = +1$ mV.',
        steps: [
          { label: 'Step 1: Divide rail span by gain', text: 'Linear operation needs $|A(v_{+} - v_{-})| \\le 15$ V, so $|v_{+} - v_{-}| \\le 15/10^{5}$, confirmed:```python\nVcc = 15.0\nA = 100000.0\nwindow = Vcc / A\nprint(window)\n```\nThe window is $0.00015$ V, or $\\pm 0.15$ mV.' },
          { label: 'Step 2: Test the $1$ mV input', text: 'Linear arithmetic would give $10^{5} \\times 0.001 = 100$ V, far past the $15$ V rail, so the device saturates instead.' },
          { label: 'Step 3: Report the saturated output', text: 'Positive difference drives $v_{O}$ to the positive ceiling near $+15$ V; the virtual short does not apply without feedback.' },
        ],
        result: 'Linear for $|v_{+} - v_{-}| \\le 0.15$ mV; $+1$ mV in saturates the output near $+15$ V.',
      },
      {
        title: 'Splitting inputs into modes',
        problem: 'The op-amp inputs sit at $v_{1} = 1.00$ V and $v_{2} = 1.02$ V. Find $v_{id}$ and $v_{icm}$, and give the ideal output for $A = 10^{5}$ if it stayed linear.',
        steps: [
          { label: 'Step 1: Subtract for the difference', text: '$v_{id} = v_{2} - v_{1} = 0.02$ V, the only part an ideal op amp amplifies.' },
          { label: 'Step 2: Average for the common mode', text: '$v_{icm} = (1.00 + 1.02)/2 = 1.01$ V, which the ideal device with zero common-mode gain ignores completely.' },
          { label: 'Step 3: Check linearity', text: '$A v_{id} = 2000$ V exceeds any supply, so a real open-loop device saturates; the split still correctly names the $20$ mV of working signal.' },
        ],
        result: '$v_{id} = 20$ mV on $v_{icm} = 1.01$ V of rejected common mode.',
      },
    ],
    keyTakeaways: [
      'Ideal: infinite $R_{in}$, zero $R_{o}$, zero common-mode gain, infinite $A$, infinite bandwidth.',
      'Virtual short $v_{+} = v_{-}$ needs linear operation with feedback; virtual open $i_{+} = i_{-} = 0$ always holds.',
      'Linear window is $|v_{+} - v_{-}| < V_{CC}/A$, here $\\pm 0.15$ mV for $A = 10^{5}$ and $\\pm 15$ V.',
      'Inputs split into $v_{id} = v_{2} - v_{1}$ (amplified) and $v_{icm} = (v_{1} + v_{2})/2$ (rejected).',
    ],
    quiz: [
      {
        q: 'Which pair is NOT in Table 2.1 for the ideal op amp?',
        options: ['Zero output impedance', 'Finite $40$ dB open-loop gain', 'Infinite bandwidth', 'Infinite input impedance'],
        answer: 1,
        explanation: 'Step 1 — Given: the five ideal infinities and zeros. Step 2 — Rule: Table 2.1 demands infinite open-loop gain $A$. Step 3 — Check: $40$ dB is a finite, modest gain of one hundred. Step 4 — Conclude: finite gain belongs to real devices, never the ideal.',
      },
      {
        q: 'The virtual short $v_{+} = v_{-}$ is valid when:',
        options: ['Always, by construction of the silicon', 'Only when both inputs are grounded', 'Only for sine-wave inputs', 'The op amp is linear, normally via a negative-feedback path'],
        answer: 3,
        explanation: 'Step 1 — Given: $v_{+} - v_{-} = v_{O}/A$ exactly. Step 2 — Rule: the quotient vanishes only if $v_{O}$ stays finite while $A$ is huge. Step 3 — Check: saturation pins $v_{O}$ at a rail independent of the inputs. Step 4 — Conclude: feedback-enforced linearity is the precondition.',
      },
      {
        q: 'With $A = 10^{5}$ and $\\pm 15$ V supplies, $v_{+} - v_{-} = -1$ mV gives:',
        options: ['Oscillation between rails', '$-100$ V of linear output', 'Zero, by the virtual open', 'Saturation near the negative rail'],
        answer: 3,
        explanation: 'Step 1 — Given: $1$ mV of difference against a $0.15$ mV window. Step 2 — Rule: linear arithmetic $10^{5} \\times (-0.001) = -100$ V is impossible on $15$ V rails. Step 3 — Resolve: the output pins at the negative ceiling. Step 4 — Conclude: polarity follows the sign of $v_{+} - v_{-}$.',
      },
      {
        q: 'Inputs $v_{1} = 2.00$ V and $v_{2} = 2.06$ V have common-mode component:',
        options: ['$30$ mV', '$60$ mV', '$2.03$ V', '$4.06$ V'],
        answer: 2,
        explanation: 'Step 1 — Given: the input pair. Step 2 — Rule: $v_{icm}$ is the average $(v_{1} + v_{2})/2$. Step 3 — Compute: $(2.00 + 2.06)/2 = 2.03$ V with $v_{id} = 60$ mV. Step 4 — Conclude: the ideal output depends only on the $60$ mV difference.',
      },
    ],
  },

  // ------------------------------------------------------------------ 22.2
  {
    sectionId: 'ece-e-ic-s11',
    readingTime: 9,
    intro: 'Closing the loop around the op amp with two resistors trades the unknowable $10^{5}$ open-loop gain for a precise resistor ratio. The inverting configuration gives $-R_{2}/R_{1}$ at a virtual ground, the noninverting gives $1 + R_{2}/R_{1}$ with very high input resistance, and the four-resistor difference stage subtracts with gain $R_{2}/R_{1}$ once its ratios match. Example 2.1 quantifies the cost of finite $A$: with $R_{2}/R_{1} = 100$ the gain error is $9.17$ percent at $A = 10^{3}$ but only $0.10$ percent at $A = 10^{5}$.',
    objectives: [
      'Derive the inverting, noninverting and weighted-summer gains from KCL at the virtual nodes',
      'Quantify finite-gain error with $G = -(R_{2}/R_{1})/(1 + (1 + R_{2}/R_{1})/A)$',
      'State the difference-amplifier matching condition and compute CMRR under mismatch',
    ],
    concepts: [
      {
        term: 'Inverting configuration',
        kind: 'theorem',
        statement: 'With $R_{1}$ from source to the virtual ground and $R_{2}$ as feedback, the closed-loop gain is **$-R_{2}/R_{1}$**, tagged `inv-gain`. All of the input current $v_{I}/R_{1}$ is forced through $R_{2}$ because $i_{-} = 0$.',
        detail: 'Figure 2.5 is the book prototype. The input resistance seen by the source is simply $R_{1}$, which is why inverting summers can weight each input independently.',
      },
      {
        term: 'Finite-gain correction',
        kind: 'theorem',
        statement: 'For finite open-loop gain $A$ the gain softens to $G = -(R_{2}/R_{1})/(1 + (1 + R_{2}/R_{1})/A)$, so the fractional shortfall is nearly **$(1 + R_{2}/R_{1})/A$**, tagged `finite-A-err`. Halving $A$ from $10^{5}$ moves $G$ by only $0.10$ percent — desensitivity in action.',
        detail: 'Example 2.1 tabulates $|G| = 90.83$, $99.00$ and $99.90$ for $A = 10^{3}$, $10^{4}$ and $10^{5}$ against the ideal $100$. Large loop gain is what makes resistor ratios trustworthy.',
      },
      {
        term: 'Noninverting configuration',
        kind: 'theorem',
        statement: 'Driving the plus terminal with a divider $R_{1}$, $R_{2}$ on the minus side gives **$1 + R_{2}/R_{1}$** with the source facing the op-amp input itself, tagged `noninv-gain`. Shorting $R_{2}$ yields the unity follower with its buffering input resistance.',
        detail: 'Figure 2.12 is the prototype; the follower of Figure 2.14 is its $R_{2} = 0$ limit. Because $i_{+} = 0$, no current flows in the source impedance and $v_{+} = v_{G}$ exactly.',
      },
      {
        term: 'Difference amplifier',
        kind: 'theorem',
        statement: 'With $R_{2}/R_{1} = R_{4}/R_{3}$ the four-resistor stage gives **$(R_{2}/R_{1})(v_{I2} - v_{I1})$**, tagged `diff-match`. Superposition proves it: each input alone sees an inverting or noninverting stage of matched magnitude.',
        detail: 'Figure 2.16 with the matching of Equation 2.15 rejects the common mode entirely when ideal. Any ratio mismatch leaks common mode into the output and sets the finite CMRR computed below.',
      },
      {
        term: 'Instrumentation front end',
        kind: 'insight',
        statement: 'Two noninverting stages sharing $R_{1}$ give a differential gain of **$1 + 2R_{2}/R_{1}$** into the difference stage, tagged `inamp-gain`. Gain is set by one resistor while both inputs keep op-amp input resistance.',
        detail: 'Figure 2.20 is the three-op-amp instrumentation amplifier. It solves the difference stage weakness — low input resistance — by buffering both inputs first.',
      },
    ],
    figures: [
      {
        caption: 'Inverting stage with gain $-R_{2}/R_{1}$ at a virtual ground beside the noninverting stage with gain $1 + R_{2}/R_{1}$, after Figures 2.5 and 2.12.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Inverting and noninverting amplifier configurations"><title>Inverting and noninverting configurations</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">The two basic closed-loop stages</text><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="120,140 120,230 200,185"/><line x1="30" y1="185" x2="80" y2="185"/><polyline points="80,185 88,173 100,197 112,173 124,197 130,185"/><line x1="130" y1="185" x2="150" y2="185"/><line x1="200" y1="185" x2="250" y2="185"/><line x1="165" y1="185" x2="165" y2="120"/><line x1="165" y1="120" x2="225" y2="120"/><line x1="225" y1="120" x2="225" y2="185"/><line x1="160" y1="230" x2="160" y2="260"/><line x1="148" y1="260" x2="172" y2="260"/><polygon points="450,140 450,230 530,185"/><line x1="410" y1="230" x2="410" y2="260"/><line x1="398" y1="260" x2="422" y2="260"/><line x1="490" y1="230" x2="490" y2="260"/><line x1="478" y1="260" x2="502" y2="260"/><line x1="490" y1="230" x2="490" y2="215"/><line x1="530" y1="185" x2="580" y2="185"/><line x1="505" y1="185" x2="505" y2="130"/><line x1="505" y1="130" x2="565" y2="130"/><line x1="565" y1="130" x2="565" y2="185"/><line x1="390" y1="215" x2="450" y2="215"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="40" y="130" font-family="sans-serif">inverting</text><text x="30" y="172" font-family="sans-serif">vI</text><text x="92" y="168" font-family="sans-serif">R1</text><text x="180" y="112" font-family="sans-serif">R2</text><text x="252" y="190" font-family="sans-serif">vO</text><text x="96" y="248" font-family="sans-serif">virtual ground</text><text x="400" y="130" font-family="sans-serif">noninverting</text><text x="386" y="202" font-family="sans-serif">vG</text><text x="512" y="112" font-family="sans-serif">R2</text><text x="470" y="248" font-family="sans-serif">R1</text><text x="582" y="190" font-family="sans-serif">vO</text><text x="120" y="300" font-family="sans-serif">Gain minus R2 over R1, input R1</text><text x="400" y="300" font-family="sans-serif">Gain one plus R2 over R1, huge input</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Finite-gain error table (Sedra Example 2.1)',
        problem: 'An inverting stage uses $R_{1} = 1$ k$\\Omega$ and $R_{2} = 100$ k$\\Omega$ (ideal gain $-100$). Find $|G|$ and the percentage error for $A = 10^{3}$, $10^{4}$ and $10^{5}$, the node voltage $v_{-}$ for $v_{I} = 0.1$ V at $A = 10^{3}$, and the change in $G$ when $A$ halves from $10^{5}$ to $5 \\times 10^{4}$.',
        steps: [
          { label: 'Step 1: Apply the finite-gain formula', text: '$|G| = 100/(1 + 101/A)$ gives $90.83$, $99.00$ and $99.90$, checked:```python\nratio = 100.0\nfor A in [1000.0, 10000.0, 100000.0]:\n    G = ratio / (1.0 + 101.0 / A)\n    print(G)\n```\nErrors against $100$ are $9.17$, $1.00$ and $0.10$ percent.' },
          { label: 'Step 2: Recover the virtual-ground error', text: 'At $A = 10^{3}$ the output is $-9.083$ V for $0.1$ V in, so $v_{-} = -v_{O}/A = 9.08$ mV — small, but no longer zero.' },
          { label: 'Step 3: Halve $A$ and compare', text: 'At $5 \\times 10^{4}$ the gain is $99.798$ versus $99.899$ at $10^{5}$, a $0.10$ percent move for a $50$ percent device change: feedback desensitizes by roughly the loop gain.' },
        ],
        result: '$|G| = 90.83$, $99.00$, $99.90$; $v_{-} = 9.08$ mV at $A = 10^{3}$; halving $A$ moves $G$ only $0.10$ percent.',
      },
      {
        title: 'CMRR under resistor mismatch',
        problem: 'A difference stage uses $R_{1} = R_{3} = 10$ k$\\Omega$ and $R_{2} = R_{4} = 100$ k$\\Omega$ (gain $10$). Let $R_{3}$ run $1$ percent high. Find $A_{cm}$, $A_{dm}$ and the CMRR in ratio and decibels.',
        steps: [
          { label: 'Step 1: Common-mode gain from mismatch', text: '$A_{cm} = (R_{1}R_{4} - R_{2}R_{3})/(R_{1}(R_{3} + R_{4}))$ with $R_{3} = 10.1$ k$\\Omega$ gives $-0.00908$: the matched cancellation misses by the $1$ percent.' },
          { label: 'Step 2: Differential gain barely moves', text: 'The mismatch formula gives $A_{dm} = 9.9955$, within $0.05$ percent of the nominal $10$ — mismatch corrupts rejection, not gain.' },
          { label: 'Step 3: Form the ratio', text: '$\\mathrm{CMRR} = 9.9955/0.00908 = 1101$, which is $20\\log 1101 = 60.8$ dB of common-mode rejection.' },
        ],
        result: '$A_{cm} = -0.00908$, $A_{dm} = 9.9955$, CMRR $= 1101$ ($60.8$ dB).',
      },
    ],
    keyTakeaways: [
      'Inverting: $v_{O} = -(R_{2}/R_{1})v_{I}$ at a virtual ground; noninverting: $v_{O} = (1 + R_{2}/R_{1})v_{G}$.',
      'Finite $A$ costs $(1 + R_{2}/R_{1})/A$ fractionally: $9.17$ percent at $A = 10^{3}$, $0.10$ percent at $A = 10^{5}$ for gain $100$.',
      'Difference gain $(R_{2}/R_{1})(v_{I2} - v_{I1})$ needs $R_{2}/R_{1} = R_{4}/R_{3}$; $1$ percent mismatch here gives $60.8$ dB CMRR.',
      'Instrumentation gain $(1 + 2R_{2}/R_{1})(R_{4}/R_{3})$ keeps op-amp input resistance at both inputs.',
    ],
    quiz: [
      // PYQ-pattern: inverting amplifier output (rephrased, values changed)
      {
        q: 'An ideal inverting stage uses $R_{1} = 15$ k$\\Omega$ and $R_{f} = 60$ k$\\Omega$ with $0.40$ V at the input. Its output is closest to:',
        options: ['$-0.10$ V', '$+1.6$ V', '$-1.6$ V', '$+6.4$ V'],
        answer: 2,
        explanation: 'Step 1 — Given: $R_{1} = 15$ k$\\Omega$ to virtual ground, $R_{f} = 60$ k$\\Omega$, $0.40$ V in. Step 2 — Rule: inverting gain is $-R_{f}/R_{1}$. Step 3 — Compute: $-60/15 = -4$, so $V_{o} = -4 \\times 0.40 = -1.6$ V. Step 4 — Conclude: the positive choice fits the noninverting form and the input resistance is $15$ k$\\Omega$.',
      },
      {
        q: 'A noninverting stage needs gain $+11$ with $R_{1} = 10$ k$\\Omega$. Choose $R_{2}$:',
        options: [`$100$ k$\\Omega$`, `$11$ k$\\Omega$`, `$1$ k$\\Omega$`, `$110$ k$\\Omega$`],
        answer: 0,
        explanation: 'Step 1 — Given: $1 + R_{2}/R_{1} = 11$ with $R_{1} = 10$ k$\\Omega$. Step 2 — Rule: $R_{2} = (11 - 1)R_{1}$. Step 3 — Compute: $10 \\times 10$ k$\\Omega$ $= 100$ k$\\Omega$. Step 4 — Conclude: the follower is the $R_{2} = 0$ limit of the same formula.',
      },
      {
        q: 'For the difference amplifier $v_{O} = (R_{2}/R_{1})(v_{I2} - v_{I1})$ to hold, the resistors must satisfy:',
        options: [`$R_{1} = R_{2} = R_{3} = R_{4}$`, `$R_{1}R_{2} = R_{3}R_{4}$`, `$R_{1} + R_{2} = R_{3} + R_{4}$`, `$R_{2}/R_{1} = R_{4}/R_{3}$`],
        answer: 3,
        explanation: 'Step 1 — Given: the four-resistor difference topology. Step 2 — Rule: superposition cancels the common mode only when the two divider ratios match. Step 3 — State: $R_{2}/R_{1} = R_{4}/R_{3}$ is Equation 2.15. Step 4 — Conclude: mismatch makes $A_{cm}$ nonzero and CMRR finite.',
      },
      {
        q: 'Halving the open-loop gain from $10^{5}$ to $5 \\times 10^{4}$ in a closed-loop gain-$100$ stage changes $|G|$ by about:',
        options: ['$1$ percent', '$0.10$ percent', '$50$ percent', '$9$ percent'],
        answer: 1,
        explanation: 'Step 1 — Given: $|G| = 99.899$ at $A = 10^{5}$ and $99.798$ at $5 \\times 10^{4}$. Step 2 — Rule: fractional change is set by the loop gain near $A/101$. Step 3 — Compute: the move is $0.101/99.899$, about $0.10$ percent. Step 4 — Conclude: feedback desensitizes the gain by roughly a factor of one thousand.',
      },
    ],
  },

  // ------------------------------------------------------------------ 22.3
  {
    sectionId: 'ece-e-ic-s12',
    readingTime: 7,
    intro: 'Replacing the feedback resistor with a capacitor turns the inverting stage into a time machine: the Miller integrator outputs $-(1/CR)$ times the running integral of the input. Example 2.6 sends a $1$ V, $1$ ms pulse through a $0.1$ ms time constant and watches a $-10$ V ramp emerge. Swapping the positions gives the differentiator, whose rising response makes it a noise magnet that practical designs must tame.',
    objectives: [
      'Derive the Miller integrator response $v_{O} = -(1/CR)\\int v_{I}dt$ and the integrator frequency',
      'Predict ramp outputs for pulse inputs and sine magnitude and phase from $1/(\\omega CR)$',
      'Explain the Hartmann fixes: shunt $R_{F}$ on integrators and series $R$ on differentiators',
    ],
    concepts: [
      {
        term: 'General-impedance inverting stage',
        kind: 'theorem',
        statement: 'With impedances $Z_{1}$ at the input and $Z_{2}$ in feedback the gain is **$-Z_{2}/Z_{1}$** in the $s$ domain, tagged `Z2-over-Z1`. Every op-amp filter in the book is one choice of this pair.',
        detail: 'Figure 2.22 states the general form once, then each application substitutes a resistor, a capacitor, or a series-parallel pair. Resistive choices recover the gains of Section 22.2.',
      },
      {
        term: 'Miller integrator',
        kind: 'theorem',
        statement: 'With $R$ at the input and $C$ in feedback the output is **$-(1/CR)$ times the time integral** of the input, tagged `miller-int`. Sine waves pass with magnitude $1/(\\omega CR)$ lagging by $90$ degrees, rolling off $20$ dB per decade.',
        detail: 'The integrator frequency $\\omega_{int} = 1/CR$ is where the magnitude crosses unity. Example 2.6 uses $CR = 0.1$ ms, so a $1$ V $1$ ms pulse integrates to $-10$ V.',
      },
      {
        term: 'Practical integrator shunt',
        kind: 'method',
        statement: 'A large resistor $R_{F}$ across $C$ bounds the dc gain at **$-R_{F}/R$** and stops bias currents from ramping the output away, tagged `RF-shunt`. The price is a low-frequency cutoff at $1/(C R_{F})$ below which integration stops.',
        detail: 'Without $R_{F}$ any millivolt of offset integrates toward a rail within seconds. Choosing $R_{F}$ at least ten times the reactance at the lowest working frequency keeps the error small.',
      },
      {
        term: 'Differentiator and its noise',
        kind: 'theorem',
        statement: 'With $C$ at the input and $R$ in feedback the output is **$-CR$ times the time derivative**, tagged `diff-CR`. Magnitude rises $20$ dB per decade, so hiss and interference are amplified most where the signal is weakest.',
        detail: 'Figure 2.28 shows the rising line crossing unity at $1/CR$. A small series resistor at the input flattens the top end and stabilizes the loop at the cost of differentiating only below its corner.',
      },
      {
        term: 'Pulse and sine signatures',
        kind: 'insight',
        statement: 'Steps integrate to **ramps**, pulses to ramp-then-hold segments, and sines to phase-shifted sines, tagged `ramp-hold`. Reading which shape belongs to which input is the fastest check of integrator health on the bench.',
        detail: 'A $1$ V $1$ ms pulse through $0.1$ ms gives a $-10$ V linear ramp ending when the pulse ends. Sine inputs instead trace the $1/(\\omega CR)$ magnitude with its $-90$ degree lag.',
      },
    ],
    figures: [
      {
        caption: 'Miller integrator with input $R$ and feedback $C$ beside its pulse signature: a $1$ V $1$ ms input integrates through $CR = 0.1$ ms into a $-10$ V ramp.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Miller integrator circuit with pulse input and ramp output"><title>Miller integrator and ramp response</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Miller integrator: pulses become ramps</text><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="110,140 110,230 190,185"/><line x1="30" y1="185" x2="60" y2="185"/><polyline points="60,185 68,173 80,197 92,173 104,197 110,185"/><line x1="190" y1="185" x2="250" y2="185"/><line x1="150" y1="185" x2="150" y2="110"/><line x1="150" y1="110" x2="220" y2="110"/><line x1="142" y1="100" x2="142" y2="120"/><line x1="158" y1="100" x2="158" y2="120"/><line x1="220" y1="110" x2="220" y2="185"/><line x1="150" y1="230" x2="150" y2="255"/><line x1="138" y1="255" x2="162" y2="255"/><line x1="330" y1="260" x2="330" y2="150"/><line x1="330" y1="150" x2="480" y2="150"/><line x1="480" y1="150" x2="480" y2="260"/><line x1="520" y1="260" x2="520" y2="170"/><line x1="520" y1="170" x2="670" y2="260"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="30" y="172" font-family="sans-serif">vI</text><text x="70" y="168" font-family="sans-serif">R</text><text x="166" y="132" font-family="sans-serif">C</text><text x="252" y="190" font-family="sans-serif">vO</text><text x="330" y="280" font-family="sans-serif">1 V 1 ms pulse</text><text x="520" y="280" font-family="sans-serif">minus 10 V ramp</text><text x="300" y="120" font-family="sans-serif">slope minus VI over CR</text><text x="60" y="310" font-family="sans-serif">Add RF across C to stop dc drift</text></g></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Pulse through the integrator (Sedra Example 2.6)',
        problem: 'A Miller integrator with $CR = 0.1$ ms receives a $1$ V pulse lasting $1$ ms. Find the output waveform and its final value; then give the magnitude response at $1$ krad/s.',
        steps: [
          { label: 'Step 1: Integrate the constant pulse', text: 'During the pulse $v_{O} = -(1/CR)\\int_{0}^{t} 1\\,d\\tau = -t/CR$, a straight ramp falling $1$ V per $0.1$ ms:```python\nCR = 0.0001\nVp = 1.0\nT = 0.001\nfinal = Vp * T / CR\nprint(final)\n```\nThe printout is $10.0$, so the ramp ends at $-10$ V.' },
          { label: 'Step 2: Hold after the pulse', text: 'When the input returns to zero the capacitor current stops and the $-10$ V freezes: ramp-then-hold is the integrator pulse signature.' },
          { label: 'Step 3: Sine magnitude check', text: 'At $\\omega = 10^{3}$ rad/s the magnitude is $1/(\\omega CR) = 1/(10^{3} \\times 10^{-4}) = 10$, consistent with the $-20$ dB per decade line through unity at $10^{4}$ rad/s.' },
        ],
        result: 'Linear ramp to $-10$ V in $1$ ms, then held; sine magnitude $10$ at $1$ krad/s.',
      },
      {
        title: 'Designing a timed integrator (Sedra Design 2.82)',
        problem: 'Design a Miller integrator with time constant $1$ ms and input resistance $100$ k$\\Omega$. With $-1$ V applied from $v_{O} = -5$ V, how long until the output reaches zero?',
        steps: [
          { label: 'Step 1: Size the capacitor', text: '$C = \\tau/R = 10^{-3}/10^{5} = 10$ nF. Standard $10$ nF with $100$ k$\\Omega$ sets the $1$ ms constant exactly.' },
          { label: 'Step 2: Find the ramp slope', text: 'Slope is $-v_{I}/\\tau = +1$ V per ms for the $-1$ V input, so the output climbs from $-5$ V toward zero.' },
          { label: 'Step 3: Time the crossing', text: 'Covering $5$ V at $1$ V per ms takes $5$ ms, provided the rail lies safely above zero.' },
        ],
        result: '$C = 10$ nF with $R = 100$ k$\\Omega$; zero reached in $5$ ms.',
      },
    ],
    keyTakeaways: [
      'Miller integrator: $v_{O} = -(1/CR)\\int v_{I}dt$; sines pass with $1/(\\omega CR)$ at $-90^{\\circ}$.',
      '$1$ V for $1$ ms through $0.1$ ms ramps to $-10$ V and holds — the pulse signature.',
      'Shunt $R_{F}$ caps dc gain at $-R_{F}/R$ and cures offset drift above $1/(CR_{F})$.',
      'Differentiator $v_{O} = -CR\\,dv_{I}/dt$ rises $20$ dB per decade; series $R$ tames noise.',
    ],
    quiz: [
      {
        q: 'A Miller integrator has $CR = 0.1$ ms. A $1$ V, $1$ ms input pulse drives the output to:',
        options: ['$-10$ V', '$0$ V, pulses do not integrate', '$-1$ V', '$+10$ V'],
        answer: 0,
        explanation: 'Step 1 — Given: $V_{p} = 1$ V, $T = 1$ ms, $CR = 0.1$ ms. Step 2 — Rule: ramp change is $-V_{p}T/CR$. Step 3 — Compute: $-1 \\times 1/0.1 = -10$ V. Step 4 — Conclude: the ramp freezes at $-10$ V when the pulse ends.',
      },
      {
        q: 'Why is a large $R_{F}$ placed across the integrator capacitor?',
        options: ['To remove the $-90$ degree phase', 'To raise the unity frequency', 'To bound dc gain and stop offset-induced ramping', 'To increase the slew rate'],
        answer: 2,
        explanation: 'Step 1 — Given: ideal dc gain is infinite, so offsets integrate. Step 2 — Rule: $R_{F}$ caps dc gain at $-R_{F}/R$. Step 3 — Trade: integration holds only above $1/(CR_{F})$. Step 4 — Conclude: stability and drift control outweigh the lost low end.',
      },
      {
        q: 'The practical differentiator adds a series input resistor mainly to:',
        options: ['Raise low-frequency gain', 'Limit high-frequency gain and noise while stabilizing the loop', 'Remove the $+90$ degree phase', 'Increase the input resistance to infinity'],
        answer: 1,
        explanation: 'Step 1 — Given: ideal magnitude rises $20$ dB per decade without bound. Step 2 — Rule: series $R$ with $C$ forms a high-frequency zero cap. Step 3 — Effect: gain flattens above $1/(CR_{series})$ and phase margin recovers. Step 4 — Conclude: differentiation survives only below that corner.',
      },
      {
        q: 'For $\\tau = 1$ ms and $R = 100$ k$\\Omega$, and $-1$ V in from $v_{O} = -5$ V, zero is reached in:',
        options: ['$1$ ms', '$10$ ms', '$0.5$ ms', '$5$ ms'],
        answer: 3,
        explanation: 'Step 1 — Given: $C = \\tau/R = 10$ nF and slope $-v_{I}/\\tau = +1$ V per ms. Step 2 — Rule: distance over speed gives time. Step 3 — Compute: $5$ V at $1$ V per ms is $5$ ms. Step 4 — Conclude: larger $\\tau$ would slow the crossing proportionally.',
      },
    ],
  },

  // ------------------------------------------------------------------ 22.4
  {
    sectionId: 'ece-e-ic-s13',
    readingTime: 9,
    intro: 'Real op amps add five imperfections to the ideal: offset voltage $V_{OS}$, input bias currents $I_{B}$, finite gain that rolls off with frequency, slew-rate ceilings on large signals, and saturating outputs. Figure 2.29 models offset as a small source in series with an input, Figure 2.35 cancels bias-current drops with $R_{3} = R_{1} \\parallel R_{2}$, and the single-pole model $A(s) = A_{0}/(1 + s/\\omega_{b})$ turns Example 2.7 into a gain-bandwidth trade: at $f_{t} = 1$ MHz a gain of ten keeps $100$ kHz.',
    objectives: [
      'Model $V_{OS}$ and $I_{B}$, compute closed-loop offsets, and apply the $R_{3}$ compensation',
      'Use the single-pole model and $f_{t}$ to find closed-loop $3$-dB bandwidths',
      'Apply slew-rate limiting $f_{M} = \\mathrm{SR}/(2\\pi V_{omax})$ and output saturation bounds',
    ],
    concepts: [
      {
        term: 'Input offset voltage',
        kind: 'definition',
        statement: 'The offset $V_{OS}$ is the input difference that zeroes the output, modeled as a small **series source** at one input, tagged `VOS-model`. It drifts with temperature, so nulling at one temperature never holds everywhere.',
        detail: 'Typical bipolar values are a few millivolts. Closed-loop stages multiply $V_{OS}$ by the noise gain $1 + R_{2}/R_{1}$, which is why high-gain dc stages need trimming or chopping.',
      },
      {
        term: 'Bias currents and R3 cure',
        kind: 'method',
        statement: 'Each input sinks a bias current $I_{B}$, and inserting **$R_{3} = R_{1} \\parallel R_{2}$** in the plus lead equalizes the resistive drops, tagged `IB-comp`. Only the smaller offset current $I_{OS} = |I_{B+} - I_{B-}|$ then remains.',
        detail: 'Figure 2.35 shows the fix costs nothing in signal terms: $R_{3}$ carries no signal current since $i_{+} = 0$. FET-input devices shrink $I_{B}$ to picoamperes and often omit $R_{3}$.',
      },
      {
        term: 'Single-pole roll-off',
        kind: 'theorem',
        statement: 'Internally compensated devices follow $A(s) = A_{0}/(1 + s/\\omega_{b})$ with **gain-bandwidth product** $f_{t} = A_{0}f_{b}$, tagged `dominant-pole`. Closed-loop bandwidth is then $f_{t}$ divided by the noise gain — $100$ kHz at gain ten for $f_{t} = 1$ MHz.',
        detail: 'Example 2.7 tabulates the trade: gains $1000$, $100$, $10$ and $1$ keep $1$ kHz, $10$ kHz, $100$ kHz and $1$ MHz. Inverting gains lose slightly more because their noise gain exceeds the signal gain by one.',
      },
      {
        term: 'Slew-rate limiting',
        kind: 'law',
        statement: 'The output slope cannot exceed the **slew rate** $\\mathrm{SR}$, so full-swing sines distort above $f_{M} = \\mathrm{SR}/(2\\pi V_{omax})$, tagged `slew-fM`. Small signals stay exponential and linear; large signals turn triangular.',
        detail: 'At $\\mathrm{SR} = 1$ V per $\\mu$s and $10$ V peak, $f_{M} = 15.9$ kHz — far below the small-signal bandwidth. Slew rate, not $f_{t}$, sets large-signal speed.',
      },
      {
        term: 'Saturation and output swing',
        kind: 'insight',
        statement: 'Outputs clip at $L_{+}$ and $L_{-}$ inside the rails, and every linear prediction must be **checked against** those ceilings, tagged `rail-check`. Rail-to-rail stages shrink the gap to millivolts for low-voltage supplies.',
        detail: 'Video Example 2.4 pairs a $4$ MHz $f_{t}$ with gain ten for $400$ kHz bandwidth, then checks that a $10$ mV step rises in $0.875$ $\\mu$s without hitting either rail.',
      },
    ],
    figures: [
      {
        caption: 'Offset source $V_{OS}$ in series with the input beside the single-pole roll-off: flat $A_{0}$ to $f_{b}$, then $-20$ dB per decade through the unity frequency $f_{t}$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Offset model and single pole frequency roll off"><title>DC offset model and gain rolloff</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Offsets, then bandwidth roll-off</text><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="80,140 80,220 150,180"/><circle cx="45" cy="180" r="16"/><line x1="29" y1="180" x2="12" y2="180"/><line x1="61" y1="180" x2="80" y2="180"/><line x1="150" y1="180" x2="200" y2="180"/><line x1="118" y1="140" x2="118" y2="90"/><line x1="118" y1="90" x2="175" y2="90"/><line x1="175" y1="90" x2="175" y2="180"/><line x1="300" y1="280" x2="300" y2="110"/><line x1="300" y1="280" x2="660" y2="280"/><polyline points="330,150 450,150 620,250"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="36" y="184" font-family="sans-serif">VOS</text><text x="204" y="185" font-family="sans-serif">vO</text><text x="126" y="80" font-family="sans-serif">R2</text><text x="60" y="262" font-family="sans-serif">R3 equals R1 parallel R2</text><text x="338" y="140" font-family="sans-serif">A0 flat</text><text x="470" y="220" font-family="sans-serif">minus 20 dB per decade</text><text x="560" y="272" font-family="sans-serif">ft unity</text><text x="330" y="308" font-family="sans-serif">Gain ten keeps ft over ten of bandwidth</text></g></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Worst-case dc offset (Video Example VE2.3 style)',
        problem: 'A noninverting stage with gain $+10$ uses $R_{F} = 1$ M$\\Omega$. With $V_{OS} = \\pm 2$ mV and $I_{B} = 20$ nA at each input, find the largest output with the input grounded, first without then with $R_{3}$ compensation.',
        steps: [
          { label: 'Step 1: Refer everything to the input', text: 'Noise gain is $10$; $R_{1} = 111$ k$\\Omega$ and $R_{1} \\parallel R_{F} = 100$ k$\\Omega$, so bias current alone contributes $20$ nA $\\times 100$ k$\\Omega$ $= 2$ mV at the input.' },
          { label: 'Step 2: Add worst-case polarities', text: 'Input-referred worst case is $2$ mV of offset plus $2$ mV of drop, totaling $4$ mV, times noise gain $10$ gives $\\pm 40$ mV at the output.' },
          { label: 'Step 3: Insert $R_{3} = 100$ k$\\Omega$', text: 'Equal drops cancel to first order and only $I_{OS}$ (typically ten times smaller) remains, cutting the bias term toward $0.2$ mV and the output toward $\\pm 22$ mV.' },
        ],
        result: '$\\pm 40$ mV worst case uncompensated; $R_{3}$ removes most of the $I_{B}$ share.',
      },
      {
        title: 'Bandwidth, rise time and slew ceiling',
        problem: 'An op amp has $f_{t} = 1$ MHz and $\\mathrm{SR} = 1$ V per $\\mu$s. Find the $3$-dB frequency at closed-loop gain $+10$, the $10$ to $90$ percent rise time for a small step there, and the full-power frequency for $10$ V peak sines.',
        steps: [
          { label: 'Step 1: Divide unity gain by noise gain', text: 'Closed-loop bandwidth is $f_{t}/10 = 100$ kHz, confirmed:```python\nft = 1000000.0\nnoise_gain = 10.0\nfbw = ft / noise_gain\nprint(fbw)\n```\nThe printout $100000.0$ Hz matches Example 2.7.' },
          { label: 'Step 2: Convert bandwidth to rise time', text: 'First-order $t_{r} = 0.35/f_{3dB} = 0.35/10^{5} = 3.5$ $\\mu$s for small steps that never slew-limit.' },
          { label: 'Step 3: Impose the slew ceiling', text: '$f_{M} = \\mathrm{SR}/(2\\pi V_{omax}) = 10^{6}/(2\\pi \\times 10) = 15.9$ kHz, so $10$ V sines distort an order of magnitude below the small-signal bandwidth.' },
        ],
        result: '$f_{3dB} = 100$ kHz; $t_{r} = 3.5$ $\\mu$s small-signal; $f_{M} = 15.9$ kHz at $10$ V peak.',
      },
    ],
    keyTakeaways: [
      'Closed-loop offset is noise gain times $V_{OS}$ plus $I_{B}$ drops; $R_{3} = R_{1} \\parallel R_{2}$ cancels the $I_{B}$ part.',
      'Single-pole $A(s) = A_{0}/(1 + s/\\omega_{b})$ gives $f_{3dB} = f_{t}/(1 + R_{2}/R_{1})$ for noninverting stages.',
      'Slew limit $f_{M} = \\mathrm{SR}/(2\\pi V_{omax})$ governs large signals: $15.9$ kHz here versus $100$ kHz small-signal.',
      'Every linear result must clear the $L_{+}$ and $L_{-}$ ceilings before it is trusted.',
    ],
    quiz: [
      {
        q: 'Gain $+10$ with $R_{F} = 1$ M$\\Omega$, $V_{OS} = 2$ mV, $I_{B} = 20$ nA, input grounded. Worst-case $|V_{O}|$ is about:',
        options: ['$400$ mV', '$2$ mV', '$20$ mV', '$40$ mV'],
        answer: 3,
        explanation: 'Step 1 — Given: noise gain $10$ and $R_{1} \\parallel R_{F} = 100$ k$\\Omega$. Step 2 — Rule: input-referred error is $V_{OS} + I_{B}(R_{1} \\parallel R_{F})$. Step 3 — Compute: $2$ mV $+ 2$ mV $= 4$ mV, times $10$ is $40$ mV. Step 4 — Conclude: $R_{3}$ compensation removes most of the bias share.',
      },
      {
        q: 'With $f_{t} = 1$ MHz, a noninverting gain of $+100$ keeps about:',
        options: ['$100$ kHz', '$10$ kHz', '$1$ kHz', '$1$ MHz'],
        answer: 1,
        explanation: 'Step 1 — Given: unity-gain frequency $1$ MHz. Step 2 — Rule: closed-loop bandwidth is $f_{t}$ over noise gain. Step 3 — Compute: $10^{6}/100 = 10$ kHz. Step 4 — Conclude: gain times bandwidth is conserved at $f_{t}$.',
      },
      {
        q: 'An inverting stage with $R_{2}/R_{1} = 10$ on the same $1$ MHz op amp has $3$-dB frequency near:',
        options: ['$100$ kHz', '$1$ MHz', '$90.9$ kHz', '$10$ kHz'],
        answer: 2,
        explanation: 'Step 1 — Given: signal gain $-10$ means noise gain $11$. Step 2 — Rule: bandwidth is $f_{t}$ over noise gain. Step 3 — Compute: $10^{6}/11 = 90.9$ kHz. Step 4 — Conclude: inverting stages lose slightly more bandwidth than their signal gain suggests.',
      },
      {
        q: 'Slew rate $1$ V per $\\mu$s with $10$ V peak output allows clean sines up to about:',
        options: ['$15.9$ kHz', '$6.28$ kHz', '$100$ kHz', '$1$ MHz'],
        answer: 0,
        explanation: 'Step 1 — Given: $\\mathrm{SR} = 10^{6}$ V/s and $V_{omax} = 10$ V. Step 2 — Rule: $f_{M} = \\mathrm{SR}/(2\\pi V_{omax})$. Step 3 — Compute: $10^{6}/62.83 = 15.9$ kHz. Step 4 — Conclude: large-signal bandwidth trails the $100$ kHz small-signal value.',
      },
    ],
  },
]
