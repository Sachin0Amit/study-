import type { SectionContent } from '../library'

// ============================================================================
// The Electronics Master Library — Chapter 30: Output Stages and Power
// Amplifiers. Sedra/Smith, "Microelectronic Circuits" 8e, Chapter 12
// (pp. 887–935): class-A transfer and 25 percent ceiling, class-B push-pull
// with crossover and 78.5 percent ceiling, class-AB diode and multiplier
// biasing, and thermal plus safe-area plus short-circuit protection.
// Worked-problem numbers follow the book; arithmetic re-verified. Math is
// LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh30Content: SectionContent[] = [
  // ------------------------------------------------------------------ 30.1
  {
    sectionId: 'ece-e-analog-s33',
    readingTime: 8,
    intro: 'Figure 12.1 biases an emitter follower at the center of its transfer so the transistor conducts through the full sine, the defining property of class A. Load power $P_{L} = V_{o,rms}^{2}/R_{L}$ comes from the supplies while the transistor idles near half the rail even with no signal. Section 12.1 proves the resistive-load ceiling at $25$ percent and the dissipation split behind it.',
    objectives: [
      'State why class A conducts over the full $360$ degrees with $Q$ centered',
      'Write $P_{L}$, $P_{S}$ and $\\eta = P_{L}/P_{S}$ for the resistive follower',
      'Explain the $25$ percent ceiling and where the remaining supply power goes',
    ],
    concepts: [
      {
        term: 'Full-cycle conduction',
        kind: 'definition',
        statement: 'Class A keeps the output device **on through $360$ degrees** of the sine, tagged `classA-360`. Figure 12.1 centers $Q$ so positive and negative peaks stay clear of cutoff and saturation.',
        detail: 'No crossover exists because one device handles both halves. Linearity is best, while idle dissipation is worst, since bias current flows even at zero output.',
      },
      {
        term: 'Load and supply power',
        kind: 'definition',
        statement: 'Sine load power is **$P_{L} = V_{peak}^{2}/(2R_{L})$** while resistive-stage supply power is **$P_{S} = V_{CC}^{2}/R_{L}$** at full swing, tagged `PA-PS`. Efficiency $\\eta = P_{L}/P_{S}$ follows directly.',
        detail: 'With $V_{CC} = 10$ V and $R_{L} = 10$ $\\Omega$, full $10$ V peak gives $5$ W load from $20$ W of rail draw in the book’s arithmetic. Halving the peak quarters $P_{L}$ while $P_{S}$ barely moves.',
      },
      {
        term: 'Twenty-five percent ceiling',
        kind: 'theorem',
        statement: 'Resistive class A peaks at **$25$ percent efficiency**, tagged `eta-25`. Maximum $V_{peak} = V_{CC}/2$ centered gives $P_{L,max} = V_{CC}^{2}/(8R_{L})$ against $P_{S} = V_{CC}^{2}/(2R_{L})$.',
        detail: 'One quarter reaches the load, one quarter burns in the collector resistor, and one half burns in the transistor at full swing. Choke or transformer coupling can approach $50$ percent by removing the resistor loss.',
      },
      {
        term: 'Dissipation split',
        kind: 'insight',
        statement: 'Transistor dissipation is **largest at zero output** and falls as load power rises, tagged `PD-split`. The worst-case thermal design therefore assumes silence, not full volume.',
        detail: 'At $V_{peak} = 0$ the full $V_{CC}^{2}/(2R_{L})$ heats transistor plus resistor. Full swing steers part of that into the load, cooling the transistor while the music plays.',
      },
      {
        term: 'Transfer centering rule',
        kind: 'method',
        statement: 'Center $V_{E}$ at **half the supply** with symmetric clipping margins, tagged `center-half`. Then verify positive headroom to $V_{CC}$ equals negative legroom to saturation.',
        detail: 'Off-center $Q$ clips one peak early and wastes the other rail. The book sets $V_{E} = V_{CC}/2$ before computing peak power and efficiency.',
      },
    ],
    figures: [
      {
        caption: 'Class-A follower after Figure 12.1: centered $Q$ conducts $360$ degrees, with $\\eta_{max} = 25$ percent on resistive loads.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Class A centered transfer with full cycle conduction"><title>Class A full cycle operation</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Class A: Q centered, conducts all 360 deg</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="90" y1="280" x2="630" y2="280"/><path d="M 120 280 C 200 280 200 120 300 120 C 400 120 400 280 480 280" fill="none"/><circle cx="300" cy="200" r="7" fill="currentColor" stroke="none"/><line x1="300" y1="200" x2="300" y2="280" stroke-dasharray="7 5"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="300" y="190" font-family="sans-serif">Q at half supply</text><text x="120" y="310" font-family="sans-serif">full sine stays on, no cutoff</text><text x="420" y="160" font-family="sans-serif">peak limited by rails each side</text><text x="120" y="70" font-family="sans-serif">best linearity, 25 percent ceiling</text></g></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Class-A power arithmetic',
        problem: 'A resistive class-A follower runs $V_{CC} = 10$ V single rail centered with $R_{L} = 10$ $\\Omega$. Find $V_{peak,max}$, $P_{L,max}$, $P_{S}$ and $\\eta_{max}$.',
        steps: [
          { label: 'Step 1: Peak swing', text: 'Centered $Q$ allows $V_{peak} = V_{CC}/2 = 5$ V before either rail clips.' },
          { label: 'Step 2: Powers', text: 'Load $P_{L} = 25/20 = 1.25$ W; supply $P_{S} = 100/20 = 5$ W by $V_{CC}^{2}/(2R_{L})$.' },
          { label: 'Step 3: Efficiency', text: 'Ratio $\\eta = 1.25/5 = 0.25$, the $25$ percent ceiling.' },
        ],
        result: '$V_{peak} = 5$ V; $P_{L} = 1.25$ W; $P_{S} = 5$ W; $\\eta = 25$ percent.',
      },
      {
        title: 'Back-off penalty check',
        problem: 'Repeat at $2.5$ V peak (half voltage) and compare transistor plus resistor heating, verified by script.',
        steps: [
          { label: 'Step 1: Load at back-off', text: 'Power $P_{L} = 6.25/20 = 0.3125$ W, one quarter of full.' },
          { label: 'Step 2: Supply draw', text: 'Supply stays near $5$ W, so efficiency falls to $6.25$ percent.' },
          { label: 'Step 3: Script the curve', text: 'Efficiency versus peak:```python\nVCC = 10.0\nRL = 10.0\nfor Vpk in [5.0, 2.5]:\n    PL = Vpk ** 2 / (2.0 * RL)\n    PS = VCC ** 2 / (2.0 * RL)\n    print(Vpk, PL, PL / PS)\n```\nThe printout gives $1.25$ W at $0.25$ and $0.3125$ W at $0.0625$ efficiency.' },
        ],
        result: 'Half peak quarters power to $0.31$ W at $6.25$ percent efficiency.',
      },
    ],
    keyTakeaways: [
      'Class A conducts $360$ degrees with $Q$ centered at half supply.',
      '$P_{L} = V_{peak}^{2}/(2R_{L})$; $P_{S} = V_{CC}^{2}/(2R_{L})$ at full resistive swing.',
      'Resistive ceiling $\\eta_{max} = 25$ percent; choke coupling nears $50$ percent.',
      'Dissipation peaks at zero output, sizing heatsinks for silence.',
    ],
    quiz: [
      {
        q: 'Class A is defined by conduction over:',
        options: ['$180$ degrees', '$360$ degrees full cycle', '$90$ degrees', '$0$ degrees at idle'],
        answer: 1,
        explanation: 'Step 1 — Given: transfer of Figure 12.1. Step 2 — Rule: centered $Q$ never cuts off. Step 3 — Sweep: the full sine stays on one device. Step 4 — Conclude: best linearity at worst idle dissipation.',
      },
      {
        q: 'Resistive class-A ceiling with centered $Q$ is:',
        options: ['$78.5$ percent', '$50$ percent always', '$25$ percent', '$100$ percent'],
        answer: 2,
        explanation: 'Step 1 — Given: $V_{peak} = V_{CC}/2$. Step 2 — Rule: $P_{L} = V_{CC}^{2}/(8R_{L})$ over $P_{S} = V_{CC}^{2}/(2R_{L})$. Step 3 — Ratio: one quarter. Step 4 — Conclude: resistor and transistor split the rest.',
      },
      // PYQ-pattern: class-A power and back-off (rephrased, values changed)
      {
        q: 'Halving the peak voltage in class A:',
        options: ['Quarters $P_{L}$ to one fourth', 'Halves $P_{L}$', 'Doubles efficiency', 'Leaves $P_{L}$ unchanged'],
        answer: 0,
        explanation: 'Step 1 — Given: $P_{L}$ scales with $V_{peak}^{2}$. Step 2 — Rule: square law punishes back-off. Step 3 — Compute: half squared is one quarter. Step 4 — Conclude: average music runs far below $25$ percent.',
      },
      {
        q: 'Worst transistor heating in class A occurs at:',
        options: ['Full swing', 'Clipping only', 'Power off', 'Zero output with full idle current'],
        answer: 3,
        explanation: 'Step 1 — Given: fixed bias plus steered signal. Step 2 — Rule: load power subtracts from device dissipation. Step 3 — Zero: all supply power heats silicon. Step 4 — Conclude: size heatsinks for silence.',
      },
    ],
  },
  // ------------------------------------------------------------------ 30.2
  {
    sectionId: 'ece-e-analog-s34',
    readingTime: 9,
    intro: 'Figure 12.9 splits the sine between an npn pull-up and a pnp pull-down so each conducts $180$ degrees, the class-B push-pull. Near zero the $0.7$ V turn-on of each base-emitter junction leaves a dead zone called crossover distortion. Section 12.3 derives load power $P_{L} = V_{peak}^{2}/(2R_{L})$, supply power $P_{S} = 2V_{CC}V_{peak}/(\\pi R_{L})$ and the $78.5$ percent ceiling at full swing.',
    objectives: [
      'Sketch push-pull action with npn sourcing and pnp sinking alternate half cycles',
      'Write $P_{L}$, $P_{S}$ and $\\eta = (\\pi/4)(V_{peak}/V_{CC})$ for class B',
      'Explain the $\\pm 0.7$ V crossover dead zone and its harmonic signature',
    ],
    concepts: [
      {
        term: 'Push-pull halves',
        kind: 'definition',
        statement: 'The npn sources **positive half cycles** while the pnp sinks **negative half cycles**, tagged `push-pull`. Figure 12.9 ties both emitters to $R_{L}$ with $\\pm V_{CC}$ rails.',
        detail: 'Each device idles near zero current, so silence dissipates almost nothing. Conduction is $180$ degrees per device and $360$ degrees combined.',
      },
      {
        term: 'Crossover dead zone',
        kind: 'insight',
        statement: 'Base drives inside **$\\pm 0.7$ V** turn on neither junction, flattening zero crossings, tagged `xover-dead`. Figure 12.11 shows the kink that generates high-order harmonics.',
        detail: 'Small signals suffer most because the dead fraction dominates. Feedback reduces but never fully removes the kink, motivating class AB bias next.',
      },
      {
        term: 'Class-B power laws',
        kind: 'theorem',
        statement: 'Dual supplies give **$P_{S} = 2V_{CC}V_{peak}/(\\pi R_{L})$** against **$P_{L} = V_{peak}^{2}/(2R_{L})$**, tagged `classB-PS`. Efficiency is $\\eta = (\\pi/4)(V_{peak}/V_{CC})$.',
        detail: 'Supply current averages $V_{peak}/(\\pi R_{L})$ per rail for sines. Unlike class A, supply draw tracks output, so back-off still wastes less.',
      },
      {
        term: 'Seventy-eight percent ceiling',
        kind: 'theorem',
        statement: 'Full swing $V_{peak} = V_{CC}$ reaches **$\\pi/4 = 78.5$ percent**, tagged `eta-785`. With $\\pm 15$ V and $8$ $\\Omega$, $P_{L,max} = 14.06$ W from $18$ W of rails.',
        detail: 'The remaining fifth heats the two transistors, peaking near $V_{peak} = 2V_{CC}/\\pi$ rather than at silence. Thermal design therefore assumes mid-volume sines.',
      },
      {
        term: 'Device dissipation peak',
        kind: 'insight',
        statement: 'Combined transistor dissipation peaks near **$40$ percent of full peak**, tagged `PD-peakB`. Section 12.3 differentiates $P_{S} - P_{L}$ to locate $V_{peak} = 2V_{CC}/\\pi$.',
        detail: 'Each device then handles about one fifth of $P_{L,max}$. Music-averaged dissipation sits well below sine peaks, but sine testing must survive the mathematical worst case.',
      },
    ],
    figures: [
      {
        caption: 'Class-B push-pull after Figure 12.9: npn and pnp split $180$ degrees each, with a $\\pm 0.7$ V crossover dead zone and $\\eta_{max} = 78.5$ percent.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Push pull halves with crossover dead zone"><title>Push-pull and crossover</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Class B: npn pushes, pnp pulls, dead near zero</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="90" y1="280" x2="630" y2="280"/><path d="M 120 280 L 240 140 L 360 280 L 480 140 L 600 280" fill="none"/><line x1="330" y1="250" x2="390" y2="250" stroke-dasharray="7 5"/><line x1="330" y1="310" x2="390" y2="310" stroke-dasharray="7 5"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="120" y="130" font-family="sans-serif">npn half up</text><text x="420" y="130" font-family="sans-serif">pnp half down</text><text x="330" y="240" font-family="sans-serif">dead zone plus minus 0.7 V</text><text x="120" y="330" font-family="sans-serif">each 180 deg, idle near zero, 78.5 percent ceiling</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Class-B ceiling arithmetic',
        problem: 'A push-pull stage runs $\\pm 15$ V into $8$ $\\Omega$ at full $15$ V peak sine. Find $P_{L,max}$, $P_{S}$ and $\\eta_{max}$.',
        steps: [
          { label: 'Step 1: Load power', text: 'Power $P_{L} = 225/16 = 14.06$ W from $V_{peak}^{2}/(2R_{L})$.' },
          { label: 'Step 2: Supply power', text: 'Supply $P_{S} = 2 \\times 15 \\times 15/(\\pi \\times 8) = 17.9$ W.' },
          { label: 'Step 3: Efficiency', text: 'Ratio $\\eta = 14.06/17.9 = 0.785$, the $\\pi/4$ ceiling.' },
        ],
        result: '$P_{L} = 14.06$ W; $P_{S} = 17.9$ W; $\\eta = 78.5$ percent.',
      },
      {
        title: 'Dissipation peak location',
        problem: 'For the same $\\pm 15$ V and $8$ $\\Omega$ stage, locate the dissipation peak and its value, verified by script.',
        steps: [
          { label: 'Step 1: Peak voltage', text: 'Theory puts worst total $P_{D}$ at $V_{peak} = 2V_{CC}/\\pi = 9.55$ V.' },
          { label: 'Step 2: Powers there', text: 'Load $P_{L} = 91.2/16 = 5.7$ W; supply $P_{S} = 2 \\times 15 \\times 9.55/(\\pi \\times 8) = 11.4$ W, leaving $5.7$ W in devices.' },
          { label: 'Step 3: Script the sweep', text: 'Sweep peaks:```python\nimport math\nVCC = 15.0\nRL = 8.0\nfor Vpk in [15.0, 9.55, 5.0]:\n    PL = Vpk ** 2 / (2.0 * RL)\n    PS = 2.0 * VCC * Vpk / (math.pi * RL)\n    print(Vpk, PL, PS - PL)\n```\nThe printout peaks device heating near $9.55$ V at $5.7$ W total.' },
        ],
        result: 'Worst $P_{D} = 5.7$ W total at $9.55$ V peak; $2.85$ W per device.',
      },
    ],
    keyTakeaways: [
      'Push-pull splits $180$ degrees per device with near-zero idle current.',
      '$\\pm 0.7$ V dead zone flattens zero crossings as crossover distortion.',
      '$P_{S} = 2V_{CC}V_{peak}/(\\pi R_{L})$ gives $\\eta = (\\pi/4)(V_{peak}/V_{CC})$.',
      'Ceiling $78.5$ percent; device heating peaks at $V_{peak} = 2V_{CC}/\\pi$.',
    ],
    quiz: [
      {
        q: 'In class B each transistor conducts for:',
        options: ['$360$ degrees', '$180$ degrees half the cycle', '$90$ degrees', '$0$ degrees'],
        answer: 1,
        explanation: 'Step 1 — Given: complementary emitters to one load. Step 2 — Rule: npn sources positive, pnp sinks negative. Step 3 — Halves: each handles one polarity. Step 4 — Conclude: combined coverage is still $360$ degrees.',
      },
      // PYQ-pattern: 78 percent ceiling arithmetic (rephrased, values changed)
      {
        q: 'Full $15$ V peak from $\\pm 15$ V into $8$ $\\Omega$ gives $P_{L}$ about:',
        options: ['$14.06$ W', '$1.4$ W', '$140$ W', '$0.14$ W'],
        answer: 0,
        explanation: 'Step 1 — Given: peak and load. Step 2 — Rule: $P_{L} = V_{peak}^{2}/(2R_{L})$. Step 3 — Compute: $225/16 = 14.06$ W. Step 4 — Conclude: supply $17.9$ W leaves $78.5$ percent.',
      },
      {
        q: 'Crossover distortion appears as:',
        options: ['Clipped rail tops', 'Low-frequency roll-off', 'Miller ringing', 'Flattened zero crossings from the $0.7$ V dead zone'],
        answer: 3,
        explanation: 'Step 1 — Given: two $0.7$ V turn-ons back to back. Step 2 — Rule: inside $\\pm 0.7$ V neither conducts. Step 3 — Shape: Figure 12.11 kinks at zero. Step 4 — Conclude: small signals show the worst percentage error.',
      },
      {
        q: 'Total device dissipation in class B peaks at:',
        options: ['Zero output', 'Full $V_{CC}$ peak', '$V_{peak} = 2V_{CC}/\\pi$ near forty percent', 'Infinite load'],
        answer: 2,
        explanation: 'Step 1 — Given: $P_{D} = P_{S} - P_{L}$. Step 2 — Rule: differentiate in $V_{peak}$. Step 3 — Root: maximum at $2/\\pi$ of full. Step 4 — Conclude: test thermals at mid-volume sines, not silence.',
      },
    ],
  },
  // ------------------------------------------------------------------ 30.3
  {
    sectionId: 'ece-e-analog-s35',
    readingTime: 8,
    intro: 'Figure 12.14 biases the push-pull with two diodes so a small quiescent current $I_{Q}$ flows at zero input and the dead zone collapses. The $V_{BE}$ multiplier of Figure 12.17 makes that bias adjustable and thermally trackable with one transistor and two resistors. Section 12.4 sizes $I_{Q}$ near a few milliamps so transconductance never hits zero while extra dissipation stays small.',
    objectives: [
      'Explain how diode bias sets $V_{BB} = 2V_{BE}$ for small $I_{Q}$ at zero drive',
      'Write the $V_{BE}$-multiplier law $V_{BB} = V_{BE}(1+R_{1}/R_{2})$ and its thermal tracking',
      'Trade $I_{Q}$ between residual crossover and wasted idle dissipation',
    ],
    concepts: [
      {
        term: 'Diode-biased class AB',
        kind: 'definition',
        statement: 'Two series diodes drop **$2V_{BE}$ between the bases** so each output sits on the edge of conduction, tagged `diode-AB`. Figure 12.14 matches diode and output $V_{BE}$ for first-order cancel.',
        detail: 'Quiescent $I_{Q}$ near $2$ mA keeps $g_{m}$ alive through zero without class-A waste. Mismatched diodes versus outputs shift $I_{Q}$ exponentially, so monolithic matching matters.',
      },
      {
        term: 'VBE multiplier',
        kind: 'method',
        statement: 'One transistor with divider $R_{1}$ and $R_{2}$ synthesizes **$V_{BB} = V_{BE}(1+R_{1}/R_{2})$**, tagged `vbe-mult`. Figure 12.17 adjusts $R_{1}/R_{2}$ for any $I_{Q}$ and mounts the sensor on the heatsink.',
        detail: 'With $R_{1} = R_{2}$ the bias is $1.4$ V for $0.7$ V devices. Heating lowers sensor $V_{BE}$ by $2$ mV per degree, throttling $I_{Q}$ before thermal runaway.',
      },
      {
        term: 'Quiescent-current trade',
        kind: 'insight',
        statement: 'Larger $I_{Q}$ straightens the **zero-crossing slope** but burns **$2V_{CC}I_{Q}$ idle power**, tagged `IQ-trade`. The book centers near the critical bias where incremental gain stays flat.',
        detail: 'Too little $I_{Q}$ leaves a residual kink; too much approaches class-A heat. Distortion analyzers trim $I_{Q}$ to the knee where harmonics bottom out.',
      },
      {
        term: 'Thermal tracking need',
        kind: 'insight',
        statement: 'Output $V_{BE}$ falls $2$ mV per degree, so fixed $V_{BB}$ would **double $I_{Q}$ every $30$ degrees**, tagged `thermal-track`. Diodes or multiplier on the same heatsink cancel the drift.',
        detail: 'Without tracking, hot outputs conduct more, heat more and conduct further. The loop is the thermal runaway of Section 30.4 in miniature.',
      },
      {
        term: 'Compound output options',
        kind: 'definition',
        statement: 'Darlington and **Sziklai pairs** compound current gain to near $\\beta^{2}$ for large loads, tagged `compound-out`. Figure 12.20 shows both feeding the same $V_{BB}$ bias core.',
        detail: 'Sziklai needs only one $V_{BE}$ of saturation loss versus two for Darlington. Quasi-complementary stages use matched npn compounds where pnp power devices are weak.',
      },
    ],
    figures: [
      {
        caption: 'Class-AB bias after Figures 12.14 and 12.17: diodes or $V_{BE}(1+R_{1}/R_{2})$ hold $V_{BB} = 2V_{BE}$ so $I_{Q}$ just removes the dead zone.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Class AB diode and multiplier bias"><title>Class AB quiescent bias</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Class AB: VBB equals 2VBE, small IQ flows</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="360" y1="80" x2="360" y2="130"/><polygon points="360,130 352,142 368,142" fill="currentColor" stroke="none"/><line x1="360" y1="142" x2="360" y2="170"/><polygon points="360,170 352,182 368,182" fill="currentColor" stroke="none"/><line x1="360" y1="182" x2="360" y2="210"/><line x1="280" y1="210" x2="360" y2="210"/><line x1="360" y1="210" x2="440" y2="210"/><line x1="280" y1="210" x2="280" y2="280"/><line x1="440" y1="210" x2="440" y2="280"/><line x1="280" y1="280" x2="440" y2="280"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="370" y="140" font-family="sans-serif">upper diode or multiplier</text><text x="370" y="180" font-family="sans-serif">lower diode</text><text x="200" y="210" font-family="sans-serif">npn base</text><text x="450" y="210" font-family="sans-serif">pnp base</text><text x="280" y="310" font-family="sans-serif">joined emitters to load, IQ near 2 mA</text><text x="120" y="330" font-family="sans-serif">VBB tracks 2VBE over temperature</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Multiplier ratio for 1.4 V',
        problem: 'Outputs need $V_{BB} = 1.4$ V from $V_{BE} = 0.7$ V devices. Find $R_{1}/R_{2}$ and pick values with $1$ mA divider current.',
        steps: [
          { label: 'Step 1: Ratio', text: 'Law $1.4 = 0.7(1+R_{1}/R_{2})$ gives $R_{1}/R_{2} = 1$.' },
          { label: 'Step 2: Absolute values', text: 'Divider $1$ mA across $1.4$ V is $1.4$ k$\\Omega$ total, so $R_{1} = R_{2} = 700$ $\\Omega$.' },
          { label: 'Step 3: Standard pick', text: 'Use $680$ $\\Omega$ pair for $1.36$ V, then trim $R_{1}$ upward while watching $I_{Q}$.' },
        ],
        result: '$R_{1} = R_{2} = 700$ $\\Omega$ nominal; $680$ $\\Omega$ standard trims to target.',
      },
      {
        title: 'IQ idle-cost check',
        problem: 'A $\\pm 15$ V stage sets $I_{Q} = 2$ mA versus $20$ mA. Compare idle dissipation and crossover intuition, verified by script.',
        steps: [
          { label: 'Step 1: Idle formula', text: 'Idle $P_{Q} = 2V_{CC}I_{Q}$ across both rails with no signal.' },
          { label: 'Step 2: Two choices', text: 'At $2$ mA, $P_{Q} = 30 \\times 0.002 = 0.06$ W; at $20$ mA, $0.6$ W wasted.' },
          { label: 'Step 3: Script the trade', text: 'Idle sweep:```python\nVCC = 15.0\nfor IQ in [2e-3, 20e-3]:\n    print(2.0 * VCC * IQ)\n```\nThe printout gives $0.06$ W and $0.6$ W, while $2$ mA already keeps $g_{m}$ alive.' },
        ],
        result: '$2$ mA idles $0.06$ W; $20$ mA idles $0.6$ W for little extra linearity.',
      },
    ],
    keyTakeaways: [
      'Diodes hold $V_{BB} = 2V_{BE}$ so $I_{Q}$ near $2$ mA removes the dead zone.',
      'Multiplier $V_{BB} = V_{BE}(1+R_{1}/R_{2})$ adjusts and thermally tracks $I_{Q}$.',
      '$I_{Q}$ trades residual kink against $2V_{CC}I_{Q}$ idle heat.',
      'Darlington and Sziklai options raise current gain for heavy loads.',
    ],
    quiz: [
      {
        q: 'Class-AB diode bias aims for $V_{BB}$:',
        options: ['$2V_{BE}$ near $1.4$ V', '$0$ V', `$V_{CC}$`, `$5V_{BE}$`],
        answer: 0,
        explanation: 'Step 1 — Given: stacked npn plus pnp bases. Step 2 — Rule: one $V_{BE}$ per output edge. Step 3 — Sum: $0.7 + 0.7 = 1.4$ V. Step 4 — Conclude: small $I_{Q}$ flows with zero signal.',
      },
      {
        q: 'A $V_{BE}$ multiplier with $R_{1} = R_{2}$ and $V_{BE} = 0.7$ V gives:',
        options: ['$0.7$ V', '$2.1$ V', '$1.4$ V', '$0$ V'],
        answer: 2,
        explanation: 'Step 1 — Given: equal divider resistors. Step 2 — Rule: $V_{BB} = V_{BE}(1+1)$. Step 3 — Compute: $0.7 \\times 2 = 1.4$ V. Step 4 — Conclude: ratio programs any quiescent edge.',
      },
      {
        q: 'Raising $I_{Q}$ from $2$ mA to $20$ mA on $\\pm 15$ V raises idle heat from:',
        options: ['$6$ W to $60$ W', '$0.06$ W to $0.6$ W', '$0.006$ W to $0.06$ W', 'No change'],
        answer: 1,
        explanation: 'Step 1 — Given: dual rails and two quiescent choices. Step 2 — Rule: $P_{Q} = 2V_{CC}I_{Q}$. Step 3 — Compute: $30 \\times 0.002 = 0.06$ W and ten times more. Step 4 — Conclude: excess $I_{Q}$ buys heat, not much linearity.',
      },
      // PYQ-pattern: multiplier ratio and thermal tracking (rephrased, values changed)
      {
        q: 'Mounting the multiplier on the output heatsink primarily:',
        options: ['Raises gain', 'Lowers $V_{CC}$', 'Removes $R_{L}$', 'Cancels $V_{BE}$ fall of $2$ mV per degree to hold $I_{Q}$'],
        answer: 3,
        explanation: 'Step 1 — Given: shared temperature between sensor and outputs. Step 2 — Rule: all $V_{BE}$ drift together. Step 3 — Track: $V_{BB}$ falls as outputs need less. Step 4 — Conclude: $I_{Q}$ stays put instead of running away.',
      },
    ],
  },
  // ------------------------------------------------------------------ 30.4
  {
    sectionId: 'ece-e-analog-s36',
    readingTime: 8,
    intro: 'Section 12.5 converts device dissipation into temperature rise through $T_{J} = T_{A} + P_{D}(R_{\\theta JC} + R_{\\theta CS} + R_{\\theta SA})$, where each $R_{\\theta}$ is a thermal resistance in degrees per watt. Safe operating area curves of Figure 12.22 then bound simultaneous voltage, current and time, while Figure 12.24 adds short-circuit and thermal-shutdown protection. Without those three, a $14$ W class-B stage fails on its first clipped sine.',
    objectives: [
      'Compute $T_{J}$ from $P_{D}$ and the junction-to-ambient thermal chain',
      'Read SOA limits for voltage, current, dissipation and second breakdown',
      'Describe short-circuit current limiting and on-chip thermal shutdown',
    ],
    concepts: [
      {
        term: 'Thermal-resistance chain',
        kind: 'definition',
        statement: 'Junction rise equals **power times thermal resistance** $\\Delta T = P_{D}R_{\\theta}$, tagged `thermal-chain`. The chain adds junction-to-case, case-to-sink and sink-to-ambient links.',
        detail: 'With $P_{D} = 5$ W and $R_{\\theta JA} = 20$ degrees per W, rise is $100$ degrees above ambient. Grease and insulators set $R_{\\theta CS}$ near $0.5$ to $2$ degrees per W.',
      },
      {
        term: 'Heatsink sizing rule',
        kind: 'method',
        statement: 'Pick $R_{\\theta SA}$ so **$T_{J}$ stays below $150$ degrees** at worst $P_{D}$ and $T_{A,max}$, tagged `sink-size`. Rearranged, $R_{\\theta SA} = (T_{J,max}-T_{A,max})/P_{D} - R_{\\theta JC} - R_{\\theta CS}$.',
        detail: 'A $5.7$ W worst case with $50$ degrees ambient and $2$ degrees per W of package needs $R_{\\theta SA}$ near $15$ degrees per W. Larger sinks buy margin linearly.',
      },
      {
        term: 'Safe operating area',
        kind: 'definition',
        statement: 'The **SOA plot bounds $V_{CE}$, $I_{C}$, $P_{D}$ and time** together, tagged `soa-plot`. Figure 12.22 shrinks allowed current at high voltage and long pulses from second breakdown.',
        detail: 'A $30$ V $5$ A direct-current point may be safe while the same point for $100$ ms is not. Switching stages cross SOA during transitions, so speed plus snubbers matter.',
      },
      {
        term: 'Second breakdown',
        kind: 'insight',
        statement: 'Current crowding collapses part of the base into a **hot spot that fails below $P_{D,max}$**, tagged `second-bd`. High $V_{CE}$ with high $I_{C}$ together trigger it even at modest average power.',
        detail: 'Epitaxial and ballasted emitters spread current to resist the collapse. SOA curves derate steeply where second breakdown replaces thermal limits.',
      },
      {
        term: 'Protection circuits',
        kind: 'method',
        statement: 'Series sense resistors fold back **current limit near $2$ A**, while on-chip sensors **shut down near $170$ degrees**, tagged `protect-loop`. Figure 12.24 shows the limiter stealing base drive when $V_{sense}$ reaches $0.7$ V.',
        detail: 'Foldback lowers the limit as $V_{CE}$ rises to stay inside SOA. Thermal shutdown has hysteresis so the stage restarts cool instead of oscillating on the threshold.',
      },
    ],
    figures: [
      {
        caption: 'Thermal and SOA after Figures 12.22 and 12.24: $T_{J} = T_{A} + P_{D}R_{\\theta JA}$ sizes the sink, while SOA plus current limit and thermal shutdown guard the device.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Thermal chain safe area and protection"><title>Thermal SOA and protection</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Heat, SOA, limit, shutdown guard the stage</text><g stroke="currentColor" stroke-width="2" fill="none"><rect x="120" y="120" width="100" height="60" rx="6"/><rect x="280" y="120" width="100" height="60" rx="6"/><rect x="440" y="120" width="100" height="60" rx="6"/><line x1="220" y1="150" x2="280" y2="150"/><line x1="380" y1="150" x2="440" y2="150"/><line x1="290" y1="180" x2="290" y2="250"/><line x1="490" y1="180" x2="490" y2="250"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="130" y="145" font-family="sans-serif">junction PD</text><text x="290" y="145" font-family="sans-serif">case plus sink</text><text x="450" y="145" font-family="sans-serif">ambient TA</text><text x="240" y="270" font-family="sans-serif">SOA bounds V, I, time</text><text x="440" y="270" font-family="sans-serif">limit plus shutdown</text><text x="120" y="310" font-family="sans-serif">TJ equals TA plus PD times thermal chain</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Junction-temperature check',
        problem: 'A device dissipates $P_{D} = 5.7$ W worst case with $R_{\\theta JC} = 2$ degrees per W, $R_{\\theta CS} = 1$ degree per W, $R_{\\theta SA} = 12$ degrees per W and $T_{A} = 50$ degrees. Find $T_{J}$ and judge against $150$ degrees.',
        steps: [
          { label: 'Step 1: Chain sum', text: 'Total $R_{\\theta JA} = 2 + 1 + 12 = 15$ degrees per W.' },
          { label: 'Step 2: Rise and junction', text: 'Rise $\\Delta T = 5.7 \\times 15 = 85.5$ degrees, so $T_{J} = 50 + 85.5 = 135.5$ degrees.' },
          { label: 'Step 3: Margin', text: 'Margin $14.5$ degrees to $150$ degrees is thin but passes; a $10$ degrees per W sink would add comfort.' },
        ],
        result: '$T_{J} = 135.5$ degrees; passes with $14.5$ degrees margin.',
      },
      {
        title: 'Sink choice plus limiter threshold',
        problem: 'Size $R_{\\theta SA}$ for $T_{J,max} = 150$ degrees at $P_{D} = 5.7$ W, $T_{A,max} = 50$ degrees with $3$ degrees per W of package plus interface, and set a $2$ A current limit with $0.7$ V sense.',
        steps: [
          { label: 'Step 1: Allowed chain', text: 'Allowed $R_{\\theta JA} = (150-50)/5.7 = 17.54$ degrees per W.' },
          { label: 'Step 2: Sink remainder and sense', text: 'Sink $R_{\\theta SA} = 17.54 - 3 = 14.54$ degrees per W; sense $R_{sense} = 0.7/2 = 0.35$ $\\Omega$.' },
          { label: 'Step 3: Script the sizing', text: 'Thermal plus sense:```python\nTJ = 150.0\nTA = 50.0\nPD = 5.7\nRpack = 3.0\nRJA = (TJ - TA) / PD\nRSA = RJA - Rpack\nRsense = 0.7 / 2.0\nprint(RJA)\nprint(RSA)\nprint(Rsense)\n```\nThe printout gives $17.54$ degrees per W, $14.54$ degrees per W and $0.35$ $\\Omega$.' },
        ],
        result: '$R_{\\theta SA} \\le 14.5$ degrees per W; $R_{sense} = 0.35$ $\\Omega$ for $2$ A.',
      },
    ],
    keyTakeaways: [
      '$T_{J} = T_{A} + P_{D}(R_{\\theta JC}+R_{\\theta CS}+R_{\\theta SA})$ sets every sink choice.',
      'Example $5.7$ W with $15$ degrees per W chain gives $T_{J} = 135.5$ degrees at $50$ degrees ambient.',
      'SOA bounds $V$, $I$, $P_{D}$ and pulse time with second-breakdown derating.',
      'Current foldback plus $170$ degree thermal shutdown guards faults.',
    ],
    quiz: [
      {
        q: 'With $P_{D} = 5.7$ W and $R_{\\theta JA} = 15$ degrees per W above $50$ degrees ambient, $T_{J}$ is:',
        options: ['$65.5$ degrees', '$135.5$ degrees', '$150$ degrees exactly always', '$50$ degrees'],
        answer: 1,
        explanation: 'Step 1 — Given: power, chain and ambient. Step 2 — Rule: $T_{J} = T_{A}+P_{D}R_{\\theta JA}$. Step 3 — Compute: $50 + 85.5 = 135.5$ degrees. Step 4 — Conclude: $14.5$ degrees below the $150$ degree ceiling.',
      },
      // PYQ-pattern: sink sizing from allowed rise (rephrased, values changed)
      {
        q: 'Allowed $R_{\\theta JA}$ for $100$ degrees rise at $5.7$ W is:',
        options: ['$17.54$ degrees per W', '$100$ degrees per W', '$5.7$ degrees per W', '$570$ degrees per W'],
        answer: 0,
        explanation: 'Step 1 — Given: rise $150-50 = 100$ degrees. Step 2 — Rule: $R = \\Delta T/P_{D}$. Step 3 — Compute: $100/5.7 = 17.54$ degrees per W. Step 4 — Conclude: subtract package to get the sink budget.',
      },
      {
        q: 'SOA plots shrink at high $V_{CE}$ mainly because of:',
        options: ['Gain margin', 'Crossover distortion', 'Second breakdown from current crowding', 'Miller effect'],
        answer: 2,
        explanation: 'Step 1 — Given: simultaneous high voltage and current. Step 2 — Rule: hot spots form below average $P_{D,max}$. Step 3 — Name: second breakdown. Step 4 — Conclude: pulse time joins voltage and current as limits.',
      },
      {
        q: 'A $0.7$ V sense resistor for $2$ A limiting is:',
        options: [`$1.4$ $\\Omega$`, `$2.7$ $\\Omega$`, `$7$ $\\Omega$`, `$0.35$ $\\Omega$`],
        answer: 3,
        explanation: 'Step 1 — Given: trip voltage and current. Step 2 — Rule: $R = V/I$. Step 3 — Compute: $0.7/2 = 0.35$ $\\Omega$. Step 4 — Conclude: foldback then lowers the limit as $V_{CE}$ rises.',
      },
    ],
  },
]
