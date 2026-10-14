import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// The Electronics Master Library — Chapter 16: Filters and Frequency
// Response (4 sections).
// Sources: Hughes, "Electrical & Electronic Technology" 12e ch. 17
// (pp. 383–416 incl. §17.12 two-port networks); Nilsson & Riedel,
// "Electric Circuits" 12e ch. 14 (pp. 562–597) and ch. 15 (pp. 598–643);
// Horowitz & Hill, "The Art of Electronics" 3e filter chapters (scan —
// standard Sallen–Key / filter-family content from knowledge).
// All worked-example numbers are the books’ own; arithmetic re-verified.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh16Content: SectionContent[] = [
  // ------------------------------------------------------------------ 16.1
  {
    sectionId: 'elec-ch16-s1',
    readingTime: 9,
    intro: 'A filter changes the amplitude of an ac voltage as frequency changes, and the whole subject rests on one piece of bookkeeping: reactance varies with frequency while resistance does not. Because the interesting action spans six or more decades, engineers compress the axis with logarithms and the vertical axis with decibels, and then the response collapses into straight lines — the Bode plot. Hughes closes the chapter with the two-port description (z, y and ABCD parameters) that lets filter blocks be cascaded on paper before they are ever built.',
    objectives: [
      'Classify the four filter types and define passband, stopband and cut-off frequency',
      'Manipulate logarithms and read semi-log and log-log scales in decades',
      'Convert power and voltage ratios to decibels and back',
      'Construct idealized Bode magnitude and phase asymptotes for first-order sections',
      'Describe the z, y and ABCD two-port parameter sets and their reciprocity conditions',
    ],
    concepts: [
      {
        term: 'The four filter categories',
        kind: 'definition',
        statement: 'If the maximum output voltage at any frequency is $V_m$, the **passband** is the range where the response exceeds $V_m/\\sqrt{2}$ and the **stopband** (reject band) where it falls below; the boundary frequency is the **cut-off** or half-power frequency. The four categories are low-pass, high-pass, passband (bandpass) and stopband (bandstop).',
        detail: 'For the bandpass case the cut-off frequencies $f_1$ and $f_2$ bracket the bandwidth around the center $f_0$; for the stopband case they bracket the rejected band. The bandpass response is exactly the series-resonant behavior of Chapter 9, so the resonant circuit is itself a filter — one we have already met.',
      },
      {
        term: 'Frequency response',
        kind: 'definition',
        statement: 'The **frequency response** of a circuit is the pair of curves — amplitude response and phase response — describing how the output phasor changes with frequency while the input is held constant; it stems directly from $X_L = \\omega L$ rising and $X_C = 1/\\omega C$ falling.',
        detail: 'Nilsson formalizes this with the transfer function $H(j\\omega)$, whose magnitude and phase angle are plotted separately; an ideal filter would also show linear phase in the passband to avoid phase distortion. Because the frequency range is large, frequency is plotted on a logarithmic scale, and amplitude in decibels.',
      },
      {
        term: 'Logarithms and log scales',
        kind: 'notation',
        statement: 'The logarithm is the **index of a power**: if $X = a^x$ then $x = \\log_a X$. Log rules mirror index rules — $\\log(xy) = \\log x + \\log y$, $\\log(x/y) = \\log x - \\log y$, $\\log x^n = n \\log x$ — and $\\log 2 = 0.3010$, $\\log 3 = 0.4771$, $\\log 4 = 0.6021$.',
        detail: 'On semi-log paper the linear axis is voltage and the log axis is frequency: $2$ appears about $30$% along a decade, $3$ about $48$%, $4$ about $60$%. A **decade** is a tenfold frequency interval (1 kHz to 10 kHz), an **octave** a twofold one; a log scale begins at $1$ (since $\\log 1 = 0$), never at zero. Hughes’ Example 17.1 builds confidence: $\\log 90 = 2\\log 3 + \\log 5 + \\log 2 = 1.9542$.',
      },
      {
        term: 'The decibel',
        kind: 'definition',
        statement: 'The decibel is a **logarithmic (base-10) unit of power ratio** — one tenth of a bel, named after Alexander Graham Bell: $$G = 10 \\log_{10}\\frac{P_2}{P_1} \\quad \\text{and, for equal resistances,} \\quad G = 20 \\log_{10}\\frac{V_2}{V_1}.$$',
        detail: 'The voltage form is exact only when $R_L = R_{in}$, but the condition is relaxed in practice and voltage gain is quoted as $20 \\log_{10}(V_2/V_1)$ anyway. The anchor points to memorize: $0.707 \\to -3\\ \\text{dB}$, $2 \\to +6\\ \\text{dB}$, $10 \\to 20\\ \\text{dB}$, $100 \\to 40\\ \\text{dB}$, and a doubling of **power** is $+3\\ \\text{dB}$ — a conveniently ear-detectable step.',
      },
      {
        term: 'The half-power frequency',
        kind: 'theorem',
        statement: 'At the cut-off frequency the load voltage has fallen to $1/\\sqrt{2}$ of its maximum, so the average power delivered — proportional to $V_L^2$ — is exactly **half** of $P_{max}$: $P(\\omega_c) = P_{max}/2$. Hence “half-power point”, “$-3\\ \\text{dB}$ point” and “cut-off frequency” are the same frequency.',
        detail: 'Nilsson derives it from $P = \\frac{1}{2} V_L^2/R$ with $V_L(j\\omega_c) = (1/\\sqrt{2}) V_{L,max}$; Hughes derives the same result for the RC low-pass circuit by computing $P = |I|^2 R$ at $\\omega_2 = 1/CR$ and finding $E^2/2R = P_{max}/2$. The passband is therefore the region where the output power is at least half of its maximum.',
      },
      {
        term: 'Bode plots and their asymptotes',
        kind: 'method',
        statement: 'A **Bode plot** (after Hendrik Bode, Bell Labs) is gain in dB and phase angle versus log frequency; the idealized version replaces the low-pass response by two straight lines — flat at $0\\ \\text{dB}$ below the breakpoint, then falling at $-20\\ \\text{dB}$ per **decade** ($-6\\ \\text{dB}$ per octave) above it.',
        detail: 'The exact low-pass gain is $G = -10 \\log_{10}[1 + (\\omega CR)^2]$ (Hughes Eq. 17.6), whose high-frequency asymptote is $G = -20 \\log_{10}(\\omega/\\omega_2)$: a decade of frequency costs $20\\ \\text{dB}$ and an octave costs $6\\ \\text{dB}$. The true curve sits $3\\ \\text{dB}$ below the corner at the breakpoint and converges to the asymptote within about $1\\ \\text{dB}$ beyond a factor of two either way. The high-pass dual is the mirror image: $+20\\ \\text{dB}$ per decade below the breakpoint, and its phase runs $+90^\\circ \\to +45^\\circ \\to 0^\\circ$ while the low-pass phase runs $0^\\circ \\to -45^\\circ \\to -90^\\circ$.',
      },
      {
        term: 'Nilsson’s Bode conventions',
        kind: 'notation',
        statement: 'Nilsson plots $|H(j\\omega)|$ in dB on a log-frequency axis over three or four decades, with $A_{dB} = 20 \\log_{10}|H(j\\omega)|$; the cut-off is read as the frequency $3\\ \\text{dB}$ **below the passband magnitude**.',
        detail: 'For example, a low-pass filter whose passband sits at $26\\ \\text{dB}$ is cut off where the magnitude has fallen to $23\\ \\text{dB}$. When $A_{dB} = 0$ the transfer magnitude is exactly $1$; negative dB means attenuation.',
      },
      {
        term: 'Two-port networks',
        kind: 'definition',
        statement: 'A **port** is a terminal pair whose entering and leaving currents are equal; a two-port network exposes an input and an output port, described by parameter sets relating $(V_1, I_1)$ to $(V_2, I_2)$ — **z** (open-circuit impedance), **y** (short-circuit admittance), **h** (hybrid) and **ABCD** (transmission).',
        detail: 'For z: $V_1 = z_{11} I_1 + z_{12} I_2$ and $V_2 = z_{21} I_1 + z_{22} I_2$, each $z$ measured with the opposite port open-circuited. A passive reciprocal network (Hughes’ T example) has $z_{12} = z_{21}$, and reciprocity for the ABCD set reads $AD - BC = 1$. The ideal transformer, with $V_1 = nV_2$ and $I_1 = (1/n)(-I_2)$, has the transmission matrix $\\begin{bmatrix} n & 0 \\\\ 0 & 1/n \\end{bmatrix}$ and notably has no z or y matrices at all — its self and mutual inductances are infinite.',
      },
    ],
    examples: [
      {
        title: 'Decibel arithmetic (Hughes Examples 17.3 and 17.4)',
        problem: '(a) A system has a voltage gain of $40\\ \\text{dB}$; if the output voltage is $7.0\\ \\text{V}$, find the applied input voltage. (b) A power level of $200\\ \\text{W}$ is $3\\ \\text{dB}$ above what other power level?',
        steps: [
          { label: 'Step 1: Set up the voltage equation (a)', text: '$G = 20 \\log_{10}(V_2/V_1)$, so $40 = 20 \\log_{10}(7.0/V_1)$ and therefore $\\log_{10}(7.0/V_1) = 2$.' },
          { label: 'Step 2: Undo the logarithm', text: '$7.0/V_1 = 10^{2}$, hence $V_1 = 7.0/100 = 70\\ \\text{mV}$. A $40\\ \\text{dB}$ gain is a factor of $100$ in voltage.' },
          { label: 'Step 3: Set up the power equation (b)', text: '$3 = 10 \\log_{10}(200/P_1)$, so $\\log_{10}(200/P_1) = 0.3$ and $200/P_1 = 10^{0.3} = 2$.' },
          { label: 'Step 4: Solve and interpret', text: '$P_1 = 100\\ \\text{W}$: $+3\\ \\text{dB}$ is exactly a doubling of power — the smallest step the ear readily detects, which is why loudspeaker ratings move in 3 dB increments.' },
        ],
        result: '(a) $V_1 = 70\\ \\text{mV}$; (b) $P_1 = 100\\ \\text{W}$ — the $3\\ \\text{dB}$ point is the half-power level.',
      },
      {
        title: 'Constructing a low-pass Bode plot (Hughes Example 17.9)',
        problem: 'A low-pass RC filter has $R = 1.25\\ \\text{k}\\Omega$ and $C = 4\\ \\text{nF}$. Construct the idealized Bode magnitude plot and give the true gain at the breakpoint.',
        steps: [
          { label: 'Step 1: Locate the breakpoint', text: '$\\omega_2 = 1/(CR) = 1/(4 \\times 10^{-9} \\times 1.25 \\times 10^{3}) = 200\\ \\text{krad/s}$ — the corner (half-power, $-3\\ \\text{dB}$) frequency.' },
          { label: 'Step 2: Draw the low-frequency asymptote', text: 'Below $200\\ \\text{krad/s}$ the response is flat at $G = -10\\log_{10}(1) = 0\\ \\text{dB}$: the capacitor’s impedance is enormous and the output follows the input.' },
          { label: 'Step 3: Draw the high-frequency asymptote', text: 'Above the breakpoint the gain falls at $-20\\ \\text{dB}$ per decade — at $2000\\ \\text{krad/s}$ (one decade up) the idealized plot reads $-20\\ \\text{dB}$, at two decades $-40\\ \\text{dB}$.' },
          { label: 'Step 4: Correct at the corner', text: 'The exact expression $G = -10\\log_{10}[1 + (\\omega/\\omega_2)^2]$ gives $G = -10 \\log_{10}(2) = -3\\ \\text{dB}$ at $\\omega_2$ itself, and within $1\\ \\text{dB}$ of the asymptotes beyond about $2\\omega_2$ and below about $\\omega_2/2$.' },
        ],
        result: 'Two straight lines meeting at $\\omega_2 = 200\\ \\text{krad/s}$: $0\\ \\text{dB}$ below, $-20\\ \\text{dB/decade}$ above, with the true curve $3\\ \\text{dB}$ low at the breakpoint.',
      },
      {
        title: 'Idealized versus actual high-pass response (Hughes Example 17.10)',
        problem: 'A high-pass RC filter has $C = 94\\ \\text{nF}$ and $R = 169.3\\ \\Omega$. Compute the half-power frequency and the actual dB level at $f_1/10$, $f_1/2$, $f_1$ and $2f_1$, comparing each with the idealized straight-line plot.',
        steps: [
          { label: 'Step 1: The cut-off frequency', text: '$f_1 = 1/(2\\pi CR) = 1/(2\\pi \\times 94 \\times 10^{-9} \\times 169.3) = 10{,}000\\ \\text{Hz}$ — the breakpoint of the idealized plot.' },
          { label: 'Step 2: A decade below', text: 'At $f_1/10$: $G = -10\\log_{10}[1 + 10^{2}] = -20\\ \\text{dB}$, matching the idealized line exactly (it has already fallen $20\\ \\text{dB}$ per decade through this point).' },
          { label: 'Step 3: Half an octave region', text: 'At $f_1/2$: $G = -10\\log_{10}[1 + 2^{2}] = -7\\ \\text{dB}$, while the idealized plot promises only $-6\\ \\text{dB}$ — a $1\\ \\text{dB}$ error, the worst the approximation ever makes. At $f_1$ itself: $G = -10\\log_{10}(2) = -3\\ \\text{dB}$ against the idealized $0\\ \\text{dB}$.' },
          { label: 'Step 4: Above the corner', text: 'At $2f_1$: $G = -10\\log_{10}[1 + (1/2)^{2}] = -1\\ \\text{dB}$, the last visible deviation from the $0\\ \\text{dB}$ shelf. The actual and idealized curves merge above and below the transition.' },
        ],
        result: '$f_1 = 10\\ \\text{kHz}$; actual levels $-20$, $-7$, $-3$ and $-1\\ \\text{dB}$ at $f_1/10$, $f_1/2$, $f_1$ and $2f_1$ versus idealized $-20$, $-6$, $0$ and $0\\ \\text{dB}$.',
      },
    ],
    keyTakeaways: [
      'Filters come in four categories — low-pass, high-pass, bandpass, bandstop — with passbands defined by the $V_m/\\sqrt{2}$ (half-power, $-3\\ \\text{dB}$) boundary.',
      'Frequency response exists because $X_L = \\omega L$ and $X_C = 1/\\omega C$ vary with frequency; both magnitude and phase change together.',
      'Power ratio in dB is $10 \\log_{10}(P_2/P_1)$; voltage ratio is $20 \\log_{10}(V_2/V_1)$; $0.707 \\to -3\\ \\text{dB}$, $2 \\to 6\\ \\text{dB}$, $10 \\to 20\\ \\text{dB}$.',
      'The cut-off frequency is the half-power point: output power exactly one half of maximum.',
      'A first-order Bode plot is two straight lines meeting at the breakpoint, falling (or rising) $20\\ \\text{dB}$ per decade $= 6\\ \\text{dB}$ per octave, with a $3\\ \\text{dB}$ error at the corner and at most $1\\ \\text{dB}$ elsewhere.',
      'Two-port z, y and ABCD parameters make filters cascade-analyzable blocks; reciprocity is $z_{12} = z_{21}$ or $AD - BC = 1$, and the ideal transformer is the pathological $\\begin{bmatrix} n & 0 \\\\ 0 & 1/n \\end{bmatrix}$ case.',
    ],
    quiz: [
      {
        q: 'An output voltage equal to $0.707$ times the maximum corresponds to what decibel level, and what fraction of maximum power?',
        options: ['$-3\\ \\text{dB}$ and one half of the maximum power', '$-6\\ \\text{dB}$ and one quarter of the power', '$-0.7\\ \\text{dB}$ and $70$% of the power', '$+3\\ \\text{dB}$ and twice the power'],
        answer: 0,
        explanation: '$20\\log_{10} 0.707 = -3.01\\ \\text{dB}$, and since power scales as voltage squared, $0.707^{2} = 0.5$ — the half-power point that defines every cut-off frequency.',
      },
      {
        q: 'A filter has a voltage gain of $100$. What is its gain in decibels, and what does doubling the gain add?',
        options: [`$20\\ \\text{dB}$, and doubling adds $3\\ \\text{dB}$`, `$100\\ \\text{dB}$, and doubling adds $20\\ \\text{dB}$`, `$60\\ \\text{dB}$, and doubling adds $10\\ \\text{dB}$`, `$40\\ \\text{dB}$, and doubling adds $6\\ \\text{dB}$`],
        answer: 3,
        explanation: '$20\\log_{10} 100 = 40\\ \\text{dB}$, and $20\\log_{10} 2 = 6.02\\ \\text{dB}$: each doubling of voltage is worth $6\\ \\text{dB}$, each decade $20\\ \\text{dB}$.',
      },
      {
        q: 'Above its breakpoint, the idealized Bode magnitude of a first-order low-pass filter falls at:',
        options: ['$-3\\ \\text{dB}$ per decade', '$-6\\ \\text{dB}$ per decade', '$-20\\ \\text{dB}$ per decade', '$-40\\ \\text{dB}$ per octave'],
        answer: 2,
        explanation: 'The high-frequency asymptote is $G = -20\\log_{10}(\\omega/\\omega_c)$, a slope of $-20\\ \\text{dB}$ per decade, equivalent to $-6\\ \\text{dB}$ per octave. The $-40\\ \\text{dB/decade}$ slope belongs to second-order sections (Section 16.4).',
      },
      {
        q: 'Nilsson plots a low-pass magnitude whose passband sits at $26\\ \\text{dB}$. At what magnitude is the cut-off frequency read?',
        options: [`$26\\ \\text{dB}$`, `$23\\ \\text{dB}$`, `$13\\ \\text{dB}$`, `$20\\ \\text{dB}$`],
        answer: 1,
        explanation: 'The cut-off is the half-power point, so the magnitude must have dropped $3\\ \\text{dB}$ from the passband value: $26 - 3 = 23\\ \\text{dB}$.',
      },
      {
        q: 'For a passive reciprocal two-port network, which relation always holds?',
        options: [`$z_{11} = z_{22}$`, 'All four z-parameters are equal', `$z_{12} = z_{21}$`, `$AD - BC = 0$`],
        answer: 2,
        explanation: 'Equality of the open-circuit transfer impedances, $z_{12} = z_{21}$, is the reciprocity condition — satisfied by most passive time-invariant networks. (For the ABCD set the same fact appears as $AD - BC = 1$.)',
      },
    ],
  },

  // ------------------------------------------------------------------ 16.2
  {
    sectionId: 'elec-ch16-s2',
    readingTime: 9,
    intro: 'The simplest filters are one resistor and one reactive element. Taken across the capacitor, the RC pair passes lows and lags; taken across the resistor, it passes highs and leads — and both switch roles when the reactive element is an inductor. Hughes works the two canonical circuits phasor by phasor, deriving the cut-off $\\omega_c = 1/CR$, the $-45^\\circ$ phase at that frequency and the semicircular locus of the output phasor; Nilsson adds the design view and the sober warning that a passive filter is at the mercy of whatever load you hang on it.',
    objectives: [
      'Derive the low-pass lag and high-pass lead transfer functions in polar form',
      'Compute the cut-off frequency $f_c = 1/2\\pi RC$ and design an RC or RL section to a specification',
      'Predict magnitude and phase at the band extremes and at the cut-off frequency',
      'Quantify the effect of source and load resistance on a passive filter',
      'Assemble bandpass and bandstop responses from cascaded and paralleled sections',
    ],
    concepts: [
      {
        term: 'The low-pass (lag) circuit',
        kind: 'theorem',
        statement: 'For the series RC circuit with output taken across $C$, $$\\frac{V_C}{E} = \\frac{1}{1 + j\\omega CR} = \\frac{1}{\\sqrt{1 + (\\omega CR)^2}} \\angle{-\\tan^{-1}(\\omega CR)}.$$ The **passband ends** at $\\omega_2 = 1/CR$ where $|V_C| = E/\\sqrt{2}$ and the phase is $-45^\\circ$.',
        detail: 'At $\\omega = 0$ the output equals the input at $0^\\circ$; as $\\omega \\to \\infty$ the output falls to zero and lags by $90^\\circ$. Hughes’ circle diagram shows the locus of $V_C$ sweeping a semicircle with $E$ as diameter as $\\omega$ goes from zero to infinity. In hertz, $f_2 = 1/(2\\pi CR)$.',
      },
      {
        term: 'The high-pass (lead) circuit',
        kind: 'theorem',
        statement: 'For the same series RC pair with output taken across $R$, $$\\frac{V_R}{E} = \\frac{1}{1 + 1/(j\\omega CR)} = \\frac{1}{\\sqrt{1 + (1/\\omega CR)^2}} \\angle{\\tan^{-1}(1/\\omega CR)}.$$ The **passband begins** at $\\omega_1 = 1/CR$, again with $|V_R| = E/\\sqrt{2}$ at $+45^\\circ$.',
        detail: 'Now $\\omega = 0$ gives zero output leading $90^\\circ$, and $\\omega \\to \\infty$ gives unity output at $0^\\circ$. The cut-off formula is the same $1/CR$ — a series RC circuit has one cut-off frequency whether wired as low-pass or high-pass; only the choice of output node changes.',
      },
      {
        term: 'Nilsson’s four first-order sections',
        kind: 'theorem',
        statement: 'Both configurations generalize: any circuit with $$H(s) = \\frac{\\omega_c}{s + \\omega_c}$$ is a **low-pass filter** and any circuit with $$H(s) = \\frac{s}{s + \\omega_c}$$ is a **high-pass filter** — with $\\omega_c = R/L$ for the RL forms and $\\omega_c = 1/RC$ for the RC forms.',
        detail: 'The series RL circuit is a low-pass when the output is taken across $R$ and a high-pass across $L$; the series RC is a low-pass across $C$ and a high-pass across $R$. Nilsson also notes the time-domain handshake: the time constant of Chapter 6 satisfies $\\tau = 1/\\omega_c$, so the same $RC$ or $L/R$ that sets the transient speed sets the frequency selectivity.',
      },
      {
        term: 'Designing to a cut-off specification',
        kind: 'method',
        statement: 'Because $R$ and $C$ (or $L$) enter only as a product, **choose the capacitor first** — capacitor values are far fewer on the shelf — then compute the resistor: $R = 1/(\\omega_c C)$; convert the specification to rad/s before substituting.',
        detail: 'Nilsson’s electrocardiograph design: to reject $60\\ \\text{Hz}$ mains noise while passing the $1\\ \\text{Hz}$ heartbeat, a $10\\ \\text{Hz}$ low-pass was built with $L = 100\\ \\text{mH}$, requiring $R = \\omega_c L = (20\\pi)(0.1) = 6.28\\ \\Omega$; the measured gains were $0.995$ at $1\\ \\text{Hz}$, $0.707$ at $10\\ \\text{Hz}$ and $0.164$ at $60\\ \\text{Hz}$ — noise attenuated sixfold.',
      },
      {
        term: 'Loading a passive filter',
        kind: 'insight',
        statement: 'A load resistor across a passive filter’s output **lowers both the passband magnitude and the cut-off frequency**: Nilsson’s RL high-pass with $R_L = R$ drops the passband gain to $K = R_L/(R + R_L) = 1/2$ and the cut-off from $15\\ \\text{kHz}$ to $7.5\\ \\text{kHz}$.',
        detail: 'The loaded transfer function keeps the first-order form $H(s) = Ks/(s + K\\omega_c)$ but with everything scaled by $K$. Passive filters can never amplify (the series RLC resonant filter of the next section is the lone exception), and their transfer functions change with the load — the two defects that active filters of Section 16.4 exist to cure.',
      },
      {
        term: 'Bandpass by cascade',
        kind: 'method',
        statement: 'A **broadband bandpass** filter is a high-pass section (cut-off $\\omega_1$) followed by a low-pass section (cut-off $\\omega_2$) in series, with components chosen so that $\\omega_1 < \\omega_2$; the passband between them is the bandwidth.',
        detail: 'Hughes’ Example 17.7: a $2\\ \\text{nF}$–$2\\ \\text{k}\\Omega$ high-pass gives $\\omega_1 = 1/(R_1 C_1) = 250\\ \\text{krad/s}$ ($39.8\\ \\text{kHz}$) and a $5\\ \\text{pF}$–$50\\ \\text{k}\\Omega$ low-pass gives $\\omega_2 = 4000\\ \\text{krad/s}$ ($636.6\\ \\text{kHz}$). Hughes cautions that $V_o \\ne 0.707 V_{in}$ exactly at those frequencies because the two sections load each other — the same loading theme again.',
      },
      {
        term: 'Bandstop by parallel combination',
        kind: 'method',
        statement: 'A **bandstop (bandreject) filter** runs the low-pass and high-pass sections in **parallel** rather than series: frequencies below $\\omega_2$ pass through the low-pass branch, frequencies above $\\omega_1$ through the high-pass branch, and only the band between them falls in both stopbands.',
        detail: 'The mirror-image construction of the bandpass cascade: for bandstop, the low-pass cut-off $\\omega_2$ must lie below the high-pass cut-off $\\omega_1$. Both this and the bandpass construction are broadband approximations; sharp, narrow bands need resonance (next section) or active filters (Section 16.4).',
      },
      {
        term: 'Phase behavior of the first-order pair',
        kind: 'insight',
        statement: 'The low-pass phase runs $0^\\circ \\to -45^\\circ \\to -90^\\circ$ as frequency rises (output lags), while the high-pass phase runs $+90^\\circ \\to +45^\\circ \\to 0^\\circ$ (output leads); the $45^\\circ$ crossing always sits **exactly at the cut-off**.',
        detail: 'Hughes’ Example 17.6 tabulates the high-pass: at $\\omega = 1\\ \\text{krad/s}$ (a tenth of $\\omega_1$) the gain is $0.1$ at $84^\\circ$; at $5$ it is $0.45$ at $63^\\circ$; at $\\omega_1 = 10\\ \\text{krad/s}$ it is $0.707$ at $45^\\circ$; at $50$ it is $0.98$ at $11^\\circ$; at $100$ it is $0.995$ at $6^\\circ$. The current always leads $V_C$ by $90^\\circ$, which is what draws the circle diagram.',
      },
    ],
    examples: [
      {
        title: 'Low-pass response table (Hughes Example 17.5)',
        problem: 'A low-pass RC filter has $R = 1\\ \\text{k}\\Omega$ and $C = 400\\ \\text{pF}$, driven from a $12\\ \\text{V}$ ac source. Find the half-power frequency and the output magnitude at $100\\ \\text{kHz}$, $398\\ \\text{kHz}$, $1\\ \\text{MHz}$, $2.5\\ \\text{MHz}$ and $10\\ \\text{MHz}$.',
        steps: [
          { label: 'Step 1: The cut-off frequency', text: '$f_2 = \\frac{1}{2\\pi CR} = \\frac{1}{2\\pi \\times 400 \\times 10^{-12} \\times 10^{3}} = 398\\ \\text{kHz}$.' },
          { label: 'Step 2: Well below cut-off', text: 'At $100\\ \\text{kHz}$, $\\omega CR = 2\\pi(10^{5})(4 \\times 10^{-8}) = 0.251$, so $|V_C| = 12/\\sqrt{1 + 0.251^{2}} = 12/1.031 = 11.64\\ \\text{V}$ — almost all of the source appears across $C$.' },
          { label: 'Step 3: At the half-power point', text: 'At $398\\ \\text{kHz}$ the response is $1/\\sqrt{2}$ by construction: $|V_C| = 0.707 \\times 12 = 8.5\\ \\text{V}$, and the phase is $-45^\\circ$.' },
          { label: 'Step 4: Into the stopband', text: 'At $1\\ \\text{MHz}$ ($\\omega CR = 2.51$): $|V_C| = 12/\\sqrt{1 + 6.32} = 4.43\\ \\text{V}$. At $2.5\\ \\text{MHz}$: $1.89\\ \\text{V}$. At $10\\ \\text{MHz}$ ($\\omega CR = 25.1$): $12/25.1 = 0.48\\ \\text{V}$ — the sixfold-per-octave collapse of the Bode asymptote made visible.' },
        ],
        result: '$f_2 = 398\\ \\text{kHz}$; outputs $11.64$, $8.50$, $4.43$, $1.89$ and $0.48\\ \\text{V}$ at $100\\ \\text{kHz}$, $398\\ \\text{kHz}$, $1\\ \\text{MHz}$, $2.5\\ \\text{MHz}$ and $10\\ \\text{MHz}$.',
      },
      {
        title: 'High-pass response table (Hughes Example 17.6)',
        problem: 'A high-pass RC filter has $R = 500\\ \\Omega$ and $C = 0.2\\ \\mu\\text{F}$. Compute the half-power frequency and the amplitude and phase of the gain at $1$, $5$, $10$, $50$ and $100\\ \\text{krad/s}$.',
        steps: [
          { label: 'Step 1: The cut-off frequency', text: '$\\omega_1 = 1/(CR) = 1/(0.2 \\times 10^{-6} \\times 500) = 10\\ \\text{krad/s}$, which is $10{,}000/2\\pi = 1591\\ \\text{Hz}$.' },
          { label: 'Step 2: Express the gain compactly', text: 'Writing the gain as $\\frac{1}{\\sqrt{1 + (\\omega_1/\\omega)^{2}}} \\angle \\tan^{-1}(\\omega_1/\\omega)$ lets each row be read off from the ratio $\\omega_1/\\omega$.' },
          { label: 'Step 3: Tabulate', text: 'At $1\\ \\text{krad/s}$ ($\\omega_1/\\omega = 10$): gain $0.1$ at $84^\\circ$. At $5$: $0.45$ at $63^\\circ$. At $10$: $0.707$ at $45^\\circ$ — the $-3\\ \\text{dB}$ point. At $50$: $0.98$ at $11^\\circ$. At $100$: $0.995$ at $6^\\circ$.' },
          { label: 'Step 4: Read the trend', text: 'A decade below cut-off the gain is almost exactly the frequency ratio ($0.1$), a decade above it the circuit is transparent ($0.995$): the stopband obeys $|H| \\approx \\omega/\\omega_1$, the passband is flat.' },
        ],
        result: '$\\omega_1 = 10\\ \\text{krad/s}$ ($1591\\ \\text{Hz}$); gains $0.1$, $0.45$, $0.707$, $0.98$, $0.995$ at phases $84^\\circ$, $63^\\circ$, $45^\\circ$, $11^\\circ$, $6^\\circ$.',
      },
      {
        title: 'A cascade bandpass filter (Hughes Example 17.7)',
        problem: 'A bandpass filter is built from a high-pass section ($R_1 = 2\\ \\text{k}\\Omega$, $C_1 = 2\\ \\text{nF}$) followed by a low-pass section ($R_2 = 50\\ \\text{k}\\Omega$, $C_2 = 5\\ \\text{pF}$). Compute the two cut-off frequencies and state the caveat.',
        steps: [
          { label: 'Step 1: The high-pass cut-off', text: '$\\omega_1 = 1/(R_1 C_1) = 1/(2 \\times 10^{3} \\times 2 \\times 10^{-9}) = 250\\ \\text{krad/s}$, i.e. $f_1 = 250{,}000/2\\pi = 39.8\\ \\text{kHz}$.' },
          { label: 'Step 2: The low-pass cut-off', text: '$\\omega_2 = 1/(R_2 C_2) = 1/(50 \\times 10^{3} \\times 5 \\times 10^{-12}) = 4000\\ \\text{krad/s}$, i.e. $f_2 = 636.6\\ \\text{kHz}$.' },
          { label: 'Step 3: The passband', text: 'Since $\\omega_1 < \\omega_2$, the cascade passes roughly $39.8$–$636.6\\ \\text{kHz}$: frequencies below $\\omega_1$ die in the high-pass stopband, above $\\omega_2$ in the low-pass stopband.' },
          { label: 'Step 4: The caveat', text: 'Because the two RC sections load one another, the output is not exactly $0.707 V_{in}$ at these computed frequencies — the numbers are design guides, and the exact cascade response needs the two-port machinery of Section 16.1 or buffer amplifiers between sections.' },
        ],
        result: '$\\omega_1 = 250\\ \\text{krad/s}$ ($39.8\\ \\text{kHz}$) and $\\omega_2 = 4000\\ \\text{krad/s}$ ($636.6\\ \\text{kHz}$); mutual loading shifts the true $-3\\ \\text{dB}$ points.',
      },
    ],
    keyTakeaways: [
      'Low-pass (lag): $H = 1/(1 + j\\omega CR)$ with output across $C$; high-pass (lead): $H = 1/(1 + 1/j\\omega CR)$ with output across $R$ — same RC pair, different output node.',
      'Both cut off at $\\omega_c = 1/CR$ ($f_c = 1/2\\pi CR$); the RL versions cut off at $\\omega_c = R/L$, and in every case $\\tau = 1/\\omega_c$ ties the transient of Chapter 6 to the filter.',
      'At the cut-off the magnitude is $1/\\sqrt{2}$ and the phase is exactly $\\pm 45^\\circ$; the extremes are $0^\\circ/\\pm 90^\\circ$.',
      'Design rule: pick the capacitor from stock first, then $R = 1/(\\omega_c C)$ — and convert Hz to rad/s before substituting.',
      'Loading a passive filter shrinks its passband gain and cut-off together ($K = R_L/(R + R_L)$ halves both in Nilsson’s example); passive filters never amplify.',
      'Broadband bandpass = high-pass then low-pass in cascade ($\\omega_1 < \\omega_2$); bandstop = the same two sections in parallel ($\\omega_2 < \\omega_1$).',
      'Mutual loading between cascaded passive sections shifts the actual $-3\\ \\text{dB}$ points — buffering or two-port analysis is needed for exact predictions.',
    ],
    quiz: [
      {
        q: 'A low-pass RC filter has $R = 1\\ \\text{k}\\Omega$ and $C = 400\\ \\text{pF}$. Its half-power frequency is:',
        options: [`$398\\ \\text{kHz}$`, `$39.8\\ \\text{kHz}$`, `$2.5\\ \\text{MHz}$`, `$25\\ \\text{MHz}$`],
        answer: 0,
        explanation: '$f_2 = 1/(2\\pi CR) = 1/(2\\pi \\times 400 \\times 10^{-12} \\times 10^{3}) = 398\\ \\text{kHz}$ — Hughes’ Example 17.5 filter, whose response at that frequency is $8.5\\ \\text{V}$ from a $12\\ \\text{V}$ source.',
      },
      {
        q: 'At its cut-off frequency, the output of a first-order low-pass RC section (output across the capacitor) lags the input by:',
        options: [`$0^\\circ$`, `$-45^\\circ$`, `$-90^\\circ$`, `$-30^\\circ$`],
        answer: 1,
        explanation: 'The phase is $-\\tan^{-1}(\\omega CR)$, which equals $-45^\\circ$ precisely when $\\omega CR = 1$, the cut-off condition. The lag deepens toward $90^\\circ$ only deep in the stopband.',
      },
      {
        q: 'Nilsson loads an RL high-pass filter (designed for $15\\ \\text{kHz}$ cut-off, passband gain $1$) with $R_L = R$. The loaded filter now has:',
        options: ['Gain $1$ and cut-off $15\\ \\text{kHz}$', 'Gain $1/2$ and cut-off $30\\ \\text{kHz}$', 'Gain $1/2$ and cut-off $7.5\\ \\text{kHz}$', 'Gain $2$ and cut-off $15\\ \\text{kHz}$'],
        answer: 2,
        explanation: 'The loaded transfer function is $Ks/(s + K\\omega_c)$ with $K = R_L/(R + R_L) = 1/2$: both the passband magnitude and the cut-off frequency scale by $K$, giving $0.5$ and $7.5\\ \\text{kHz}$.',
      },
      {
        q: 'Which statement about the time constant $\\tau$ and the cut-off frequency $\\omega_c$ of the same RC pair is correct?',
        options: [`$\\tau = \\omega_c$`, '$\\tau$ and $\\omega_c$ are independent properties', `$\\tau = \\omega_c / 2\\pi$`, '$\\tau = 1/\\omega_c$, so the transient speed and the filter bandwidth share one constant'],
        answer: 3,
        explanation: 'The same product $RC$ that governs the natural response of Chapter 6 sets the frequency response: $\\tau = RC$ and $\\omega_c = 1/RC$, hence $\\tau = 1/\\omega_c$ — the Laplace transform connecting time and frequency domains.',
      },
      {
        q: 'To build a broadband bandpass filter from passive first-order sections, one cascades:',
        options: ['A low-pass with cut-off $\\omega_2$ after a high-pass with cut-off $\\omega_1 < \\omega_2$', 'Two identical low-pass sections', 'A low-pass and a high-pass in parallel', 'A high-pass with cut-off $\\omega_2$ after a low-pass with cut-off $\\omega_1 < \\omega_2$'],
        answer: 0,
        explanation: 'The high-pass removes everything below $\\omega_1$ and the low-pass everything above $\\omega_2$; with $\\omega_1 < \\omega_2$ the surviving band between them is the passband. (The parallel construction produces a bandstop, not a bandpass.)',
      },
      // PYQ-pattern: ISRO 2015 — RC low-pass response at cutoff (rephrased, values changed)
      {
        q: 'A series RC low-pass filter uses R = 1.6 kΩ and C = 100 nF, output across the capacitor. At its cutoff frequency the magnitude response and phase are closest to:',
        options: ['0.500 and −90°', '0.707 and −45°', '1.000 and 0°', '0.707 and +45°'],
        answer: 1,
        explanation: 'Step 1 — Given: $R = 1.6$ kΩ, $C = 100$ nF, capacitive output. Step 2 — Governing transfer: $H = \\frac{1}{1 + j\\omega RC}$ with cutoff $\\omega_{c} = \\frac{1}{RC}$ where $|H| = \\frac{1}{\\sqrt{2}}$ and angle $-45$ degrees. Step 3 — Algebra: $RC = 1.6 \\times 10^{-4}$ s, $f_{c} = \\frac{1}{2\\pi RC} \\approx 995$ Hz; at $\\omega_{c}$, $|H| = \\frac{1}{\\sqrt{2}} \\approx 0.707$ and $\\angle H = -45$ degrees. Step 4 — Sanity check: zero frequency passes fully, very high frequency blocks, and the semicircle locus crosses $-45$ degrees exactly at cutoff. Step 5 — Distractor analysis: 0.500 halves power correctly but not voltage, $+45$ degrees is the high-pass sign, and unity with zero phase is the direct-current point. Step 6 — Conclude: about 0.707 with −45° lag.',
      },
    ],
  },

  // ------------------------------------------------------------------ 16.3
  {
    sectionId: 'elec-ch16-s3',
    readingTime: 10,
    intro: 'When the passband must be narrow, two resistors and a capacitor no longer suffice — the job calls for resonance. Nilsson’s bandpass machinery revolves around three linked parameters (center frequency, bandwidth, quality factor) of which only two can be chosen freely, and around the elegant duality between the series RLC circuit (bandwidth $R/L$) and its parallel twin (bandwidth $1/RC$). Hughes supplies the tuned-circuit perspective with a series-resonant filter of quality factor $50$. Both books agree on the punchline: the resonant frequency is not just where the response peaks — it is the natural frequency of the circuit itself.',
    objectives: [
      'Define center frequency, bandwidth and quality factor and their interrelations',
      'Derive the series RLC bandpass parameters $\\omega_o$, $\\beta$ and $Q$',
      'State the dual parameter set of the parallel RLC bandpass filter',
      'Design series and parallel RLC filters from two independent specifications',
      'Predict the effect of source resistance and relate frequency response to damping',
    ],
    concepts: [
      {
        term: 'Five parameters, two independent',
        kind: 'definition',
        statement: 'A bandpass (or bandreject) filter is characterized by five parameters — cut-offs $\\omega_{c1}$, $\\omega_{c2}$, center frequency $\\omega_o$, bandwidth $\\beta$ and quality factor $Q$ — but **only two can be specified independently**: $$\\omega_o = \\sqrt{\\omega_{c1}\\, \\omega_{c2}}, \\qquad \\beta = \\omega_{c2} - \\omega_{c1}, \\qquad Q = \\frac{\\omega_o}{\\beta}.$$',
        detail: 'The center (resonant) frequency is the frequency at which the transfer function is purely real — the geometric mean, not the arithmetic mean, of the cut-offs. $Q$ describes the width of the passband independent of where it sits on the frequency axis.',
      },
      {
        term: 'The series RLC bandpass filter',
        kind: 'theorem',
        statement: 'The **series RLC circuit** with output across $R$ has $$H(s) = \\frac{(R/L)\\, s}{s^{2} + (R/L)s + 1/LC}$$ with $$\\omega_o = \\frac{1}{\\sqrt{LC}}, \\qquad \\beta = \\frac{R}{L}, \\qquad Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}.$$',
        detail: 'At $\\omega_o$ the inductor and capacitor impedances cancel exactly — the series LC pair behaves as a short circuit — so $|H| = 1$: the input appears across $R$ untouched. This is the only passive filter in Chapter 14 whose output can actually exceed what voltage division alone would allow (near resonance the capacitor or inductor voltage can exceed the source voltage, the amplification of Chapter 9’s resonant circuits).',
      },
      {
        term: 'Cut-off frequencies in closed form',
        kind: 'method',
        statement: 'Setting $|H| = (1/\\sqrt{2})H_{max}$ yields $$\\omega_{c1} = -\\frac{\\beta}{2} + \\sqrt{\\left(\\frac{\\beta}{2}\\right)^{2} + \\omega_o^{2}}, \\qquad \\omega_{c2} = \\frac{\\beta}{2} + \\sqrt{\\left(\\frac{\\beta}{2}\\right)^{2} + \\omega_o^{2}},$$ and their product confirms $\\omega_o$ as the **geometric mean** of the cut-offs.',
        detail: 'Equivalent forms use $Q$ directly: $\\omega_{c1,c2} = \\omega_o\\left[\\mp \\frac{1}{2Q} + \\sqrt{1 + \\frac{1}{4Q^{2}}}\\right]$. The practical design shortcut is to compute $\\omega_o$ and $\\beta$ from whatever two parameters are specified, then use $\\omega_o = 1/\\sqrt{LC}$ and $\\beta = R/L$ (series) or $\\beta = 1/RC$ (parallel) to solve for the components.',
      },
      {
        term: 'The parallel RLC dual',
        kind: 'theorem',
        statement: 'The parallel RLC circuit (with a series source resistance transformed in) has $H(s) = \\frac{s/RC}{s^{2} + s/RC + 1/LC}$ with the **same** $\\omega_o = 1/\\sqrt{LC}$ but dual loss terms: $$\\beta = \\frac{1}{RC}, \\qquad Q = \\omega_o RC = R\\sqrt{\\frac{C}{L}}.$$',
        detail: 'The duality is exact: series resistance widens the band through $R/L$, parallel resistance through $1/RC$; series $Q$ falls as $R$ grows, parallel $Q$ falls as $R$ shrinks. A series circuit wants a small $R$ for a high $Q$, a parallel circuit a large one.',
      },
      {
        term: 'The series RLC bandreject filter',
        kind: 'theorem',
        statement: 'Take the output across the **inductor–capacitor pair** instead of $R$ and the same series circuit becomes a bandreject filter: $$H(s) = \\frac{s^{2} + \\omega_o^{2}}{s^{2} + \\beta s + \\omega_o^{2}},$$ with $|H(j\\omega_o)| = 0$ — at resonance the LC pair is a short circuit and the output vanishes.',
        detail: 'The cut-off, bandwidth and quality-factor formulas are identical to the bandpass case; only the numerator changes. At $\\omega = 0$ and $\\omega \\to \\infty$ the transfer magnitude is $1$, giving the two passbands on either side of the notch. The parallel RLC bandreject is the exact dual, with $\\beta = 1/RC$.',
      },
      {
        term: 'Source resistance widens the band',
        kind: 'insight',
        statement: 'A nonzero source resistance $R_i$ adds to the series resistance: the center frequency is **unchanged**, but $$\\beta = \\frac{R + R_i}{L}, \\qquad H_{max} = \\frac{R}{R + R_i}.$$ With $R_i = R$, Nilsson’s example sees the bandwidth double ($9\\ \\text{kHz}$ to $18\\ \\text{kHz}$) and the peak halve.',
        detail: 'The same lesson as passive loading in Section 16.2: the filter’s properties belong to the whole system, source included. Active filters (next section) are immune — the op-amp output isolates the filter from its driver.',
      },
      {
        term: 'Frequency response meets the time domain',
        kind: 'insight',
        statement: 'The bandwidth and the **neper frequency** of the Chapter 7 natural response are locked together: $\\alpha = R/2L$ and $$\\beta = 2\\alpha,$$ so the transition from overdamped to underdamped ($\\alpha = \\omega_o$) occurs at exactly $Q = 1/2$.',
        detail: 'A sharp peak (high $Q$, narrow $\\beta$) means an underdamped natural response that rings; a broad, low-$Q$ response means an overdamped one. The resonant frequency of the frequency response is the same $\\omega_o$ that characterizes the natural response — one circuit, two languages.',
      },
      {
        term: 'Hughes’ tuned circuit',
        kind: 'method',
        statement: 'Hughes designs a **series-resonant bandpass** with $L = 2\\ \\text{mH}$, $C = 2\\ \\text{nF}$ and total $R = 20\\ \\Omega$ driven from $20\\ \\text{V}$: $f_r = 1/(2\\pi\\sqrt{LC}) = 79{,}577\\ \\text{Hz}$, $X_L = 2\\pi f_r L = 1000\\ \\Omega$, $Q = 1000/20 = 50$ and bandwidth $= f_r/Q = 1592\\ \\text{Hz}$.',
        detail: 'The half-power frequencies sit $\\pm 796\\ \\text{Hz}$ around resonance: $f_1 = 78{,}871\\ \\text{Hz}$ and $f_2 = 80{,}373\\ \\text{Hz}$, with the output at those frequencies $0.707 \\times 15\\ \\text{V} = 10.6\\ \\text{V}$ (the resonant output is $15\\ \\text{V}$ because $R = 15 + 5\\ \\Omega$ splits the $20\\ \\text{V}$ source). The $Q = X_L/R$ form is the tuned-amplifier designer’s favorite.',
      },
    ],
    examples: [
      {
        title: 'Designing a series RLC bandpass filter (Nilsson Example 14.5)',
        problem: 'A graphic equalizer needs a bandpass filter selecting the $1$–$10\\ \\text{kHz}$ band before amplification. Using the series RLC circuit with a $1\\ \\mu\\text{F}$ capacitor, find $R$ and $L$, and verify the cut-off frequencies.',
        steps: [
          { label: 'Step 1: Center frequency', text: 'The center frequency is the geometric mean of the cut-offs: $f_o = \\sqrt{f_{c1} f_{c2}} = \\sqrt{(1000)(10{,}000)} = 3162.28\\ \\text{Hz}$.' },
          { label: 'Step 2: The inductor', text: 'From $\\omega_o = 1/\\sqrt{LC}$: $L = \\frac{1}{\\omega_o^{2} C} = \\frac{1}{[2\\pi(3162.28)]^{2}(10^{-6})} = 2.533\\ \\text{mH}$.' },
          { label: 'Step 3: The resistor', text: 'The bandwidth is $\\beta = \\omega_{c2} - \\omega_{c1} = 2\\pi(10{,}000 - 1000) = 2\\pi(9000)$, so $R = \\beta L = [2\\pi(9000)](2.533 \\times 10^{-3}) = 143.24\\ \\Omega$.' },
          { label: 'Step 4: Verify', text: 'Substituting into the cut-off formulas returns $\\omega_{c1} = 6283.19\\ \\text{rad/s}$ ($1000\\ \\text{Hz}$) and $\\omega_{c2} = 62{,}831.85\\ \\text{rad/s}$ ($10{,}000\\ \\text{Hz}$) — the specification is met exactly.' },
        ],
        result: '$L = 2.533\\ \\text{mH}$, $R = 143.24\\ \\Omega$ with $C = 1\\ \\mu\\text{F}$; the band is $1$–$10\\ \\text{kHz}$ with $f_o = 3162.28\\ \\text{Hz}$ and $Q = 3162/9000 \\approx 0.35$.',
      },
      {
        title: 'Designing a parallel RLC bandpass filter (Nilsson Example 14.6)',
        problem: 'Design a parallel RLC bandpass filter with center frequency $5\\ \\text{kHz}$ and bandwidth $200\\ \\text{Hz}$, using a $5\\ \\mu\\text{F}$ capacitor.',
        steps: [
          { label: 'Step 1: The resistor', text: 'For the parallel form $\\beta = 1/RC$, so $R = \\frac{1}{\\beta C} = \\frac{1}{[2\\pi(200)](5 \\times 10^{-6})} = 159.15\\ \\Omega$.' },
          { label: 'Step 2: The inductor', text: 'From $\\omega_o = 1/\\sqrt{LC}$: $L = \\frac{1}{\\omega_o^{2} C} = \\frac{1}{[2\\pi(5000)]^{2}(5 \\times 10^{-6})} = 202.64\\ \\mu\\text{H}$.' },
          { label: 'Step 3: Check the quality factor', text: '$Q = \\omega_o/\\beta = 2\\pi(5000)/[2\\pi(200)] = 25$ — a narrow band, unachievable with the cascaded first-order sections of Section 16.2 (which top out at $Q = 1/2$).' },
          { label: 'Step 4: Note the roles', text: 'Compare the division of labor: in the series design $R$ set the bandwidth through $R/L$; here the same job is done through $1/RC$ — with $L$ and $C$ still fixing the center frequency via $1/\\sqrt{LC}$ in both circuits.' },
        ],
        result: '$R = 159.15\\ \\Omega$ and $L = 202.64\\ \\mu\\text{H}$ with $C = 5\\ \\mu\\text{F}$, giving $f_o = 5\\ \\text{kHz}$, $\\beta = 200\\ \\text{Hz}$, $Q = 25$.',
      },
      {
        title: 'Designing a series RLC bandreject filter (Nilsson Example 14.8)',
        problem: 'Using the series RLC bandreject circuit, compute components for a bandwidth of $250\\ \\text{Hz}$ and a center frequency of $750\\ \\text{Hz}$ with a $100\\ \\text{nF}$ capacitor, then find $R$, $L$, the cut-offs and $Q$.',
        steps: [
          { label: 'Step 1: Quality factor', text: 'Straight from the definitions: $Q = \\omega_o/\\beta = 750/250 = 3$.' },
          { label: 'Step 2: The inductor', text: '$L = \\frac{1}{\\omega_o^{2} C} = \\frac{1}{[2\\pi(750)]^{2}(100 \\times 10^{-9})} = 450\\ \\text{mH}$.' },
          { label: 'Step 3: The resistor', text: 'The bandreject shares the series formulas: $R = \\beta L = [2\\pi(250)](0.45) = 707\\ \\Omega$.' },
          { label: 'Step 4: The cut-offs', text: '$\\omega_{c1} = -\\beta/2 + \\sqrt{(\\beta/2)^{2} + \\omega_o^{2}} = 3992.0\\ \\text{rad/s}$ and $\\omega_{c2} = 5562.8\\ \\text{rad/s}$, i.e. $635.3$ and $885.3\\ \\text{Hz}$. Their difference is $250\\ \\text{Hz}$ and their geometric mean is $\\sqrt{(635.3)(885.3)} = 750\\ \\text{Hz}$ — both specifications confirmed.' },
        ],
        result: '$L = 450\\ \\text{mH}$, $R = 707\\ \\Omega$, $Q = 3$, with cut-offs $635.3\\ \\text{Hz}$ and $885.3\\ \\text{Hz}$.',
      },
    ],
    keyTakeaways: [
      'Five parameters ($\\omega_{c1}$, $\\omega_{c2}$, $\\omega_o$, $\\beta$, $Q$) describe every bandpass or bandreject filter, but only two are independent; $\\omega_o$ is the geometric mean of the cut-offs and $Q = \\omega_o/\\beta$.',
      'Series RLC bandpass: $\\omega_o = 1/\\sqrt{LC}$, $\\beta = R/L$, $Q = (1/R)\\sqrt{L/C}$; at $\\omega_o$ the LC pair cancels and the whole source voltage appears across $R$.',
      'Parallel RLC bandpass: same $\\omega_o$, dual losses $\\beta = 1/RC$, $Q = R\\sqrt{C/L}$ — series circuits want small $R$, parallel circuits large $R$.',
      'The bandreject filter is the same circuit with output across the LC pair: $H(s) = (s^{2} + \\omega_o^{2})/(s^{2} + \\beta s + \\omega_o^{2})$, zero transmission at resonance.',
      'Source resistance adds to $R$ in the series circuit: unchanged $\\omega_o$, wider $\\beta = (R + R_i)/L$, lower peak — filters must be designed with their drivers in mind.',
      'The frequency-domain and time-domain views interlock: $\\beta = 2\\alpha$ and the damping transition lands at $Q = 1/2$.',
      'Hughes’ tuned circuit: $Q = X_L/R$ at resonance; $Q = 50$ gives a bandwidth of $f_r/50 = 1592\\ \\text{Hz}$ around $79{,}577\\ \\text{Hz}$.',
    ],
    quiz: [
      {
        q: 'For a series RLC bandpass filter, which combination correctly gives $\\omega_o$, $\\beta$ and $Q$?',
        options: [`$\\omega_o = 1/\\sqrt{LC}$, $\\beta = R/L$, $Q = (1/R)\\sqrt{L/C}$`, `$\\omega_o = 1/\\sqrt{LC}$, $\\beta = 1/RC$, $Q = R\\sqrt{C/L}$`, `$\\omega_o = R/L$, $\\beta = 1/\\sqrt{LC}$, $Q = \\omega_o \\beta$`, `$\\omega_o = 1/RC$, $\\beta = R/L$, $Q = \\beta/\\omega_o$`],
        answer: 0,
        explanation: 'The series formulas pair $\\beta = R/L$ with $Q = \\omega_o/\\beta = (1/R)\\sqrt{L/C}$. The second option is the parallel-circuit set — the duality worth memorizing.',
      },
      {
        q: 'In a series RLC bandpass filter, doubling the resistance $R$ will:',
        options: ['Double the quality factor', 'Double the bandwidth and halve the quality factor', 'Leave both unchanged', 'Move the center frequency'],
        answer: 1,
        explanation: '$\\beta = R/L$ doubles while $\\omega_o = 1/\\sqrt{LC}$ stays fixed, so $Q = \\omega_o/\\beta$ halves. Resistance controls the width of the resonance; $L$ and $C$ fix its position.',
      },
      {
        q: 'A bandpass filter has cut-offs $635.3\\ \\text{Hz}$ and $885.3\\ \\text{Hz}$ (Nilsson Example 14.8). Its center frequency is:',
        options: ['$760.3\\ \\text{Hz}$, the arithmetic mean', '$250\\ \\text{Hz}$, the bandwidth', '$750\\ \\text{Hz}$, the geometric mean', `$885.3\\ \\text{Hz}$`],
        answer: 2,
        explanation: '$\\omega_o = \\sqrt{\\omega_{c1}\\omega_{c2}}$: in hertz, $\\sqrt{(635.3)(885.3)} = 750\\ \\text{Hz}$ exactly, confirming the specification. The center frequency is the geometric mean, always slightly below the arithmetic mean.',
      },
      {
        q: 'At the center frequency of a series RLC bandreject filter (output across the LC pair), the output voltage is:',
        options: ['Maximum, equal to the input', 'Half of the input', 'Equal to the voltage across $R$', 'Zero, because the series LC pair acts as a short circuit'],
        answer: 3,
        explanation: 'At $\\omega_o$ the inductor and capacitor impedances cancel, so the LC pair drops no voltage — everything appears across $R$ and the bandreject output is exactly zero. The bandpass (output across $R$) shows the complementary maximum.',
      },
      {
        q: 'Hughes’ series resonant circuit has $f_r = 79{,}577\\ \\text{Hz}$, $X_L = 1000\\ \\Omega$ and total resistance $20\\ \\Omega$. Its bandwidth is:',
        options: [`$3.98\\ \\text{kHz}$`, `$1592\\ \\text{Hz}$`, `$796\\ \\text{Hz}$`, `$79.6\\ \\text{kHz}$`],
        answer: 1,
        explanation: '$Q = X_L/R = 1000/20 = 50$, so the bandwidth is $f_r/Q = 79{,}577/50 = 1592\\ \\text{Hz}$, placing the half-power frequencies $796\\ \\text{Hz}$ on either side of resonance.',
      },
      // PYQ-pattern: GATE 2022 — series bandpass bandwidth (rephrased, values changed)
      {
        q: 'A series RLC bandpass section uses R = 20 Ω, L = 10 mH and C = 2.5 μF. Its 3 dB bandwidth is closest to:',
        options: ['159 Hz', '318 Hz', '637 Hz', '1007 Hz'],
        answer: 1,
        explanation: 'Step 1 — Given: series $R = 20$ Ω, $L = 10$ mH, $C = 2.5$ μF. Step 2 — Governing trio: $\\omega_{0} = \\frac{1}{\\sqrt{LC}}$, $Q = \\frac{\\omega_{0}L}{R}$, bandwidth $BW = \\frac{f_{0}}{Q} = \\frac{R}{2\\pi L}$. Step 3 — Algebra: $LC = 2.5 \\times 10^{-8}$, $\\omega_{0} \\approx 6324.6$ rad per s, $f_{0} \\approx 1006.6$ Hz; $Q = \\frac{6324.6 \\times 0.01}{20} \\approx 3.16$; $BW = \\frac{1006.6}{3.16} \\approx 318.5$ Hz, also $\\frac{20}{2\\pi \\times 0.01} \\approx 318.3$ Hz. Step 4 — Sanity check: larger $R$ widens the passband, $Q$ above unity promises visible selectivity, and both bandwidth routes agree. Step 5 — Distractor analysis: 159 Hz halves by dropping $2\\pi$, 637 Hz doubles $R$, and 1007 Hz quotes $f_{0}$ itself. Step 6 — Conclude: the bandwidth is about 318 Hz.',
      },
    ],
  },

  // ------------------------------------------------------------------ 16.4
  {
    sectionId: 'elec-ch16-s4',
    readingTime: 10,
    intro: 'Op amps rescue the filter designer three times over: they replace the inductor (large, heavy, costly, magnetic), they provide passband gain instead of guaranteed attenuation, and their low output impedance makes the transfer function immune to the load. Nilsson’s chapter builds the subject as an escalator — first-order active sections, then scaling, then the Butterworth polynomials with their maximally flat passband, and finally the cascade and parallel architectures that turn small bricks into eighth-order walls — while the Art of Electronics supplies the practicing engineer’s catalog of filter families.',
    objectives: [
      'Design first-order active low-pass and high-pass sections with independent gain and cut-off',
      'Apply magnitude and frequency scaling to turn prototype filters into practical designs',
      'Construct Butterworth filters of any order from the polynomial table',
      'Size the order of a Butterworth filter from transition-band specifications',
      'Transform low-pass prototypes into high-pass, bandpass and bandreject designs',
    ],
    concepts: [
      {
        term: 'Why active filters',
        kind: 'insight',
        statement: 'Active filters beat passive ones on three counts: they build bandpass and bandreject responses **without inductors** (large, heavy, costly, electromagnetically dirty); they provide **passband amplification** $K > 1$; and their op-amp outputs make the transfer function **insensitive to the load**.',
        detail: 'Nilsson’s Practical Perspective is the bass volume control: one op amp, a few resistors and capacitors, and an adjustable resistor sets the low-frequency boost or cut independently of the treble control. Every circuit in this section assumes an ideal op amp, so the golden rules of Chapter 15 do all the work.',
      },
      {
        term: 'First-order active sections',
        kind: 'theorem',
        statement: 'An inverting amplifier with $R_2 \\parallel C$ in the feedback path gives the active **low-pass** section $$H(s) = -\\frac{K\\omega_c}{s + \\omega_c}, \\quad K = \\frac{R_2}{R_1}, \\ \\omega_c = \\frac{1}{R_2 C};$$ with $C$ in the input path instead, it gives the active **high-pass** $$H(s) = -\\frac{K s}{s + \\omega_c}, \\quad \\omega_c = \\frac{1}{R_1 C}.$$',
        detail: 'The gain and the cut-off are set by different components and can be specified independently — the advantage over the passive sections of Section 16.2. The low-pass circuit is the Chapter 6 integrating amplifier: integrating in time is low-pass filtering in frequency, the observation that also explains the Chapter 15 integrator.',
      },
      {
        term: 'Magnitude and frequency scaling',
        kind: 'method',
        statement: 'A **prototype** designed at $1\\ \\text{rad/s}$ with $1\\ \\Omega$ and $1\\ \\text{F}$ values becomes practical by scaling: $$R^{\\prime} = k_m R, \\qquad L^{\\prime} = \\frac{k_m}{k_f} L, \\qquad C^{\\prime} = \\frac{1}{k_m k_f} C,$$ where $k_m$ scales impedance and $k_f$ scales frequency.',
        detail: 'Magnitude scaling multiplies every impedance by $k_m$ at a given frequency (resistors and inductors up, capacitors down); frequency scaling moves the response along the axis, touching only $L$ and $C$. Nilsson’s Example 15.3 shifts a $1\\ \\text{rad/s}$ series RLC prototype to $500\\ \\text{Hz}$ with $k_f = 3141.59$ and lands a $2\\ \\mu\\text{F}$ capacitor with $k_m = 159.155$, finishing at $R^{\\prime} = 159.155\\ \\Omega$ and $L^{\\prime} = 50.66\\ \\text{mH}$ with $Q$ unchanged.',
      },
      {
        term: 'Cascading identical sections',
        kind: 'method',
        statement: 'Cascading $n$ identical first-order low-pass sections gives a slope of $20n\\ \\text{dB}$ per decade, but the cut-off of the cascade **shrinks** to $$\\omega_{cn} = \\sqrt{2^{1/n} - 1}$$ times the single-section value ($0.435\\ \\text{rad/s}$ for $n = 4$), and the passband droops badly.',
        detail: 'Nilsson’s fourth-order cascade of prototype sections has magnitude $-6\\ \\text{dB}$ already at $1\\ \\text{rad/s}$ — each section eats the other’s passband. Frequency scaling ($k_f = \\omega_c/0.435$) restores the specified cut-off, but the droop remains: the reason the Butterworth design exists.',
      },
      {
        term: 'The Butterworth magnitude',
        kind: 'theorem',
        statement: 'The $n$th-order **Butterworth** (maximally flat) low-pass filter obeys $$|H(j\\omega)| = \\frac{1}{\\sqrt{1 + (\\omega/\\omega_c)^{2n}}},$$ with cut-off exactly at $\\omega_c$ for every $n$, all $2n$ exponents even, and poles equally spaced on the unit circle of the $s$ plane.',
        detail: 'Butterworth (Wireless Engineering, 1930) derived the polynomials by splitting the roots of $1 + (-1)^{n} s^{2n} = 0$ between the left and right half planes: for $n = 2$ this gives $H(s) = 1/(s^{2} + \\sqrt{2} s + 1)$ and for $n = 3$, $H(s) = 1/[(s+1)(s^{2} + s + 1)]$. Table 15.1 extends the list to $n = 8$; each polynomial factors into first- and second-order terms, so any order is built by cascading the matching sections.',
      },
      {
        term: 'The unity-gain Sallen–Key second-order section',
        kind: 'method',
        statement: 'Nilsson’s second-order Butterworth brick — **two equal resistors, two capacitors and a unity-gain op-amp buffer** (the Sallen–Key topology of the Art of Electronics) — realizes $$H(s) = \\frac{1}{R^{2} C_1 C_2 s^{2} + 2 R C_1 s + 1}.$$ For the prototype ($R = 1\\ \\Omega$): $b_1 = 2/C_1$ and $C_1 C_2 = 1$, so matching $s^{2} + b_1 s + 1$ needs $$C_1 = \\frac{2}{b_1}, \\qquad C_2 = \\frac{1}{C_1}.$$',
        detail: 'The second-order Butterworth factor $s^{2} + 1.414 s + 1$ therefore needs $C_1 = 1.41\\ \\text{F}$, $C_2 = 0.707\\ \\text{F}$ — a capacitor ratio of exactly $2{:}1$. The fourth-order polynomial $(s^{2} + 0.765 s + 1)(s^{2} + 1.848 s + 1)$ cascades two such stages with $(2.61, 0.38)$ and $(1.08, 0.924)$ farad prototype pairs; frequency and magnitude scaling then make the values real.',
      },
      {
        term: 'Choosing the order',
        kind: 'method',
        statement: 'Given a passband specification $A_p$ at $\\omega_p$ and stopband specification $A_s$ at $\\omega_s$ (both in dB, negative), the required Butterworth order is $$n = \\frac{\\log_{10}(\\sigma_s/\\sigma_p)}{\\log_{10}(\\omega_s/\\omega_p)} \\ \\text{with}\\ \\sigma = \\sqrt{10^{-0.1A} - 1},$$ which simplifies to $n = -0.05 A_s/\\log_{10}(\\omega_s/\\omega_p)$ when $\\omega_p$ is the cut-off — and $n$ is **rounded up** to the next integer.',
        detail: 'Nilsson’s Example 15.10: a $1000\\ \\text{Hz}$ cut-off with at most $-50\\ \\text{dB}$ at $6000\\ \\text{Hz}$ needs $n = (0.05 \\times 50)/\\log_{10} 6 = 2.5/0.778 = 3.21$, so a fourth-order filter is built; its actual $6000\\ \\text{Hz}$ attenuation is $-62.25\\ \\text{dB}$.',
      },
      {
        term: 'Low-pass to high-pass and beyond',
        kind: 'method',
        statement: 'The high-pass dual of the Sallen–Key section comes from **interchanging resistors and capacitors**, and its transfer function from replacing $s$ by $1/s$ in the low-pass prototype; a **broadband bandpass** is a low-pass cascade followed by a high-pass cascade and a gain stage, and a **broadband bandreject** runs the same sections in parallel into a summing amplifier.',
        detail: 'The Art of Electronics adds the wider catalog: Chebyshev filters trade passband ripple for a steeper wall, Bessel (linear-phase) filters preserve waveform shape, and the state-variable and multiple-feedback topologies give independently tunable $Q$. Nilsson’s Example 15.5 cascades a $10{,}000\\ \\text{Hz}$ low-pass and a $100\\ \\text{Hz}$ high-pass with an inverting stage for gain $2$ — the graphic-equalizer band of Section 16.3 rebuilt without an inductor.',
      },
      {
        term: 'Narrowband and high-Q designs',
        kind: 'method',
        statement: 'Cascaded first-order sections cannot exceed $Q = 1/2$; higher $Q$ requires **complex conjugate poles**. Nilsson’s high-Q bandpass circuit gives prototype values $$R_1 = \\frac{Q}{K}, \\quad R_2 = \\frac{Q}{2Q^{2} - K}, \\quad R_3 = 2Q,$$ and the twin-T notch filter gives $R = 1/\\omega_o C$ with $\\sigma = 1 - 1/4Q$.',
        detail: 'Example 15.13 builds a $3\\ \\text{kHz}$, $Q = 10$, gain-$2$ bandpass: prototype $R_1 = 5\\ \\Omega$, $R_2 = 10/198\\ \\Omega$, $R_3 = 20\\ \\Omega$, scaled with $k_f = 6000\\pi$ and $k_m = 10^{8}/k_f$ to $26.5\\ \\text{k}\\Omega$, $268.0\\ \\Omega$ and $106.1\\ \\text{k}\\Omega$ around $0.01\\ \\mu\\text{F}$ capacitors — the transfer function $-3770\\,s/(s^{2} + 1885\\,s + 355 \\times 10^{6})$.',
      },
    ],
    examples: [
      {
        title: 'Scaling a prototype low-pass filter (Nilsson Example 15.4)',
        problem: 'Starting from the unity-gain prototype low-pass filter of Example 15.1 ($R_1 = R_2 = 1\\ \\Omega$, $C = 1\\ \\text{F}$, $\\omega_c = 1\\ \\text{rad/s}$), design a filter with passband gain $5$, cut-off $1000\\ \\text{Hz}$ and a $10\\ \\text{nF}$ feedback capacitor.',
        steps: [
          { label: 'Step 1: Frequency scale factor', text: 'Move the cut-off from $1\\ \\text{rad/s}$ to $1000\\ \\text{Hz}$: $k_f = \\omega_c^{\\prime}/\\omega_c = 2\\pi(1000)/1 = 6283.185$.' },
          { label: 'Step 2: Magnitude scale factor', text: 'The capacitor must land on $10\\ \\text{nF}$: $k_m = \\frac{1}{k_f C^{\\prime}} = \\frac{1}{(6283.185)(10^{-8})} = 15{,}915.5$.' },
          { label: 'Step 3: Scale the resistors', text: 'Resistors respond to magnitude scaling only: $R_1^{\\prime} = R_2^{\\prime} = k_m (1\\ \\Omega) = 15{,}915.5\\ \\Omega$.' },
          { label: 'Step 4: Set the gain', text: 'Adjust $R_1^{\\prime}$ alone to fix $K = R_2^{\\prime}/R_1^{\\prime} = 5$ without disturbing the cut-off (which depends on $R_2$ and $C$ only): $R_1^{\\prime} = 15{,}915.5/5 = 3183.1\\ \\Omega$. The transfer function is $H(s) = -31{,}415.93/(s + 6283.185)$.' },
        ],
        result: '$R_1^{\\prime} = 3183.1\\ \\Omega$, $R_2^{\\prime} = 15{,}915.5\\ \\Omega$, $C^{\\prime} = 10\\ \\text{nF}$: gain $5$, cut-off $1000\\ \\text{Hz}$.',
      },
      {
        title: 'A fourth-order Butterworth filter (Nilsson Example 15.9)',
        problem: 'Design a fourth-order Butterworth low-pass filter with cut-off $500\\ \\text{Hz}$ and passband gain $10$, using as many $1\\ \\text{k}\\Omega$ resistors as possible, and compare it with the identical-cascade design of Example 15.7.',
        steps: [
          { label: 'Step 1: Factor the polynomial', text: 'From Table 15.1, the fourth-order Butterworth polynomial is $(s^{2} + 0.765 s + 1)(s^{2} + 1.848 s + 1)$: two cascaded second-order stages plus an inverting amplifier for the gain.' },
          { label: 'Step 2: First stage capacitors', text: 'With $R = 1\\ \\Omega$ and $b_1 = 0.765$: $C_{1a} = 2/0.765 = 2.61\\ \\text{F}$ and $C_{2a} = 1/2.61 = 0.38\\ \\text{F}$.' },
          { label: 'Step 3: Second stage capacitors', text: 'With $b_1 = 1.848$: $C_{1b} = 2/1.848 = 1.08\\ \\text{F}$ and $C_{2b} = 1/1.08 = 0.924\\ \\text{F}$.' },
          { label: 'Step 4: Scale to real values', text: 'Frequency scaling $k_f = 3141.6$ moves the cut-off to $500\\ \\text{Hz}$; magnitude scaling $k_m = 1000$ turns the $1\\ \\Omega$ resistors into $1\\ \\text{k}\\Omega$. The capacitors scale by $1/(k_m k_f)$: $C_{1a} = 831\\ \\text{nF}$, $C_{2a} = 121\\ \\text{nF}$, $C_{1b} = 344\\ \\text{nF}$, $C_{2b} = 294\\ \\text{nF}$. The gain stage uses $R_f = 10\\ \\text{k}\\Omega$ with $R_1 = 1\\ \\text{k}\\Omega$.' },
          { label: 'Step 5: Compare the designs', text: 'Both filters deliver $20\\ \\text{dB}$ at dc and cut off at $500\\ \\text{Hz}$, but the Butterworth passband is flat almost to the corner and its roll-off is steeper immediately after it — the identical cascade droops by several dB inside its own passband.' },
        ],
        result: '$R = 1\\ \\text{k}\\Omega$ everywhere with $C_{1a} = 831\\ \\text{nF}$, $C_{2a} = 121\\ \\text{nF}$, $C_{1b} = 344\\ \\text{nF}$, $C_{2b} = 294\\ \\text{nF}$ and $R_f = 10\\ \\text{k}\\Omega$: a flatter, sharper filter than the identical cascade.',
      },
      {
        title: 'A broadband bandpass filter without inductors (Nilsson Example 15.5)',
        problem: 'Design a bandpass filter for a graphic equalizer with amplification $2$ over the band $100$–$10{,}000\\ \\text{Hz}$, using $0.2\\ \\mu\\text{F}$ capacitors throughout.',
        steps: [
          { label: 'Step 1: Check the broadband condition', text: 'The upper cut-off is $100$ times the lower one ($\\omega_{c2} = 100\\,\\omega_{c1}$), comfortably exceeding the broadband requirement $\\omega_{c2}/\\omega_{c1} \\ge 2$, so each subcircuit can be designed independently.' },
          { label: 'Step 2: The low-pass section', text: 'From $\\omega_{c2} = 1/(R_L C_L) = 2\\pi(10{,}000)$: $R_L = 1/[2\\pi(10{,}000)(0.2 \\times 10^{-6})] \\approx 80\\ \\Omega$.' },
          { label: 'Step 3: The high-pass section', text: 'From $\\omega_{c1} = 1/(R_H C_H) = 2\\pi(100)$: $R_H = 1/[2\\pi(100)(0.2 \\times 10^{-6})] \\approx 7958\\ \\Omega$.' },
          { label: 'Step 4: The gain stage', text: 'The inverting amplifier must supply $K = 2$: choose $R_i = 1\\ \\text{k}\\Omega$, so $R_f = 2(1000) = 2\\ \\text{k}\\Omega$. At the center frequency the cascade magnitude evaluates to exactly $K$, meeting the amplification specification; the response is down $1/\\sqrt{2}$ from it at both $100\\ \\text{Hz}$ and $10\\ \\text{kHz}$.' },
        ],
        result: 'Cascade of $80\\ \\Omega$ low-pass and $7958\\ \\Omega$ high-pass sections (both with $0.2\\ \\mu\\text{F}$) plus a $1\\ \\text{k}\\Omega$–$2\\ \\text{k}\\Omega$ inverting stage: gain $2$ across $100$–$10{,}000\\ \\text{Hz}$, no inductors.',
      },
    ],
    keyTakeaways: [
      'Active filters eliminate inductors, provide passband gain, and isolate the transfer function from the load — three advantages passive RC/RL networks cannot offer.',
      'First-order active sections: low-pass $H = -K\\omega_c/(s + \\omega_c)$ with $\\omega_c = 1/R_2 C$, high-pass $H = -Ks/(s + \\omega_c)$ with $\\omega_c = 1/R_1 C$ — gain and cut-off set independently.',
      'Scaling laws: $R^{\\prime} = k_m R$, $L^{\\prime} = (k_m/k_f) L$, $C^{\\prime} = C/(k_m k_f)$ — design at $1\\ \\text{rad/s}$ with $1\\ \\Omega$/$1\\ \\text{F}$ prototypes, then scale.',
      'The Butterworth magnitude $1/\\sqrt{1 + (\\omega/\\omega_c)^{2n}}$ is maximally flat with the cut-off fixed at $\\omega_c$ for every order; its polynomials factor into the first- and second-order stages you cascade.',
      'The unity-gain Sallen–Key second-order section matches $s^{2} + b_1 s + 1$ with $C_1 = 2/b_1$ and $C_2 = 1/C_1$ (equal resistors) — the second-order Butterworth needs a $2{:}1$ capacitor ratio.',
      'Order selection: $n = -0.05 A_s/\\log_{10}(\\omega_s/\\omega_p)$ when the cut-off is the passband edge, rounded up — $1000\\ \\text{Hz}$ cut-off with $-50\\ \\text{dB}$ at $6000\\ \\text{Hz}$ demands a fourth-order filter.',
      'High-pass designs come from interchanging R and C (or $s \\to 1/s$); broadband bandpass and bandreject filters come from cascading or paralleling the low-pass and high-pass bricks — and for $Q > 1/2$, complex-pole circuits such as the high-Q bandpass stage and the twin-T notch take over.',
    ],
    quiz: [
      {
        q: 'A Butterworth low-pass filter must have a $1000\\ \\text{Hz}$ cut-off and at most $-50\\ \\text{dB}$ gain at $6000\\ \\text{Hz}$. What order is required (Nilsson Example 15.10)?',
        options: ['$n = 2$, since $50\\ \\text{dB}$ needs two sections', '$n = 3.21$, so a third-order filter suffices', '$n = 3.21$, rounded up to a fourth-order filter', `$n = 8$, one order per $6\\ \\text{dB}$`],
        answer: 2,
        explanation: '$n = -0.05 A_s/\\log_{10}(\\omega_s/\\omega_p) = (0.05 \\times 50)/\\log_{10} 6 = 3.21$. Orders are integers, so round up: the fourth-order filter actually delivers $-62.25\\ \\text{dB}$ at $6000\\ \\text{Hz}$.',
      },
      {
        q: 'At its cut-off frequency $\\omega_c$, an $n$th-order Butterworth low-pass filter has magnitude:',
        options: [`$-3\\ \\text{dB}$ regardless of $n$`, `$-3n\\ \\text{dB}$`, `$0\\ \\text{dB}$ for $n > 2$`, `$-6\\ \\text{dB}$ regardless of $n$`],
        answer: 0,
        explanation: '$|H(j\\omega_c)| = 1/\\sqrt{1 + 1} = 1/\\sqrt{2}$ for every $n$: the defining elegance of the Butterworth form — the cut-off frequency never moves as sections are added, unlike the identical-section cascade.',
      },
      {
        q: 'A prototype has $R = 1\\ \\Omega$ and $C = 1\\ \\text{F}$. Applying magnitude scaling $k_m = 1000$ and frequency scaling $k_f = 3141.6$ produces:',
        options: [`$R^{\\prime} = 1000\\ \\Omega$, $C^{\\prime} = 3.14\\ \\text{F}$`, `$R^{\\prime} = 3141.6\\ \\Omega$, $C^{\\prime} = 1000\\ \\text{F}$`, `$R^{\\prime} = 1\\ \\Omega$, $C^{\\prime} = 318\\ \\text{nF}$`, `$R^{\\prime} = 1\\ \\text{k}\\Omega$, $C^{\\prime} = 1/(1000 \\times 3141.6) \\approx 318\\ \\text{nF}$`],
        answer: 3,
        explanation: 'Resistors scale only with $k_m$; capacitors with $1/(k_m k_f)$. This is exactly Nilsson’s Example 15.9 step that turned the fourth-order Butterworth prototype into $1\\ \\text{k}\\Omega$ resistors with nanofarad capacitors.',
      },
      {
        q: 'In the unity-gain Sallen–Key second-order section with equal resistors ($R = 1\\ \\Omega$ prototype), realizing the Butterworth factor $s^{2} + \\sqrt{2} s + 1$ requires:',
        options: [`$C_1 = C_2 = 1\\ \\text{F}$`, `$C_1 = 1.41\\ \\text{F}$ and $C_2 = 0.707\\ \\text{F}$`, `$C_1 = 2\\ \\text{F}$ and $C_2 = 0.5\\ \\text{F}$`, 'The capacitor values are irrelevant'],
        answer: 1,
        explanation: 'Matching $b_1 = 2/C_1 = \\sqrt{2}$ gives $C_1 = 1.41\\ \\text{F}$, and the constant term $1/(C_1 C_2) = 1$ forces $C_2 = 1/1.41 = 0.707\\ \\text{F}$ — the characteristic $2{:}1$ capacitor ratio of the second-order Butterworth.',
      },
      {
        q: 'Which capability is impossible for a cascade of first-order (real-pole) sections but routine for the active high-Q bandpass circuit?',
        options: ['Gain greater than unity', 'A quality factor exceeding $1/2$', 'A cut-off below $100\\ \\text{Hz}$', 'Rejection of dc'],
        answer: 1,
        explanation: 'Real poles can at best coincide, capping the cascaded-bandpass quality factor at $Q = 1/2$; complex conjugate poles — supplied by the high-Q circuit with its $R_1 = Q/K$ design equations or by resonant sections — unlock any $Q$.',
      },
    ],
  },
]

// ============================================================================
// Chapter 16 formula sheet — the most useful filter and scaling laws.
// ============================================================================

export const elecCh16Formulas: FormulaEntry[] = [
  {
    chapterId: 'elec-ch16',
    section: '16.1',
    name: 'Decibel (power ratio)',
    formula: 'G = 10 log₁₀(P₂/P₁)',
    note: 'one tenth of a bel; +3 dB is a doubling of power',
    latex: 'G = 10 \\log_{10}\\!\\left(\\frac{P_2}{P_1}\\right)',
  },
  {
    chapterId: 'elec-ch16',
    section: '16.1',
    name: 'Decibel (voltage ratio)',
    formula: 'G = 20 log₁₀(V₂/V₁)',
    note: 'exact for equal resistances; 0.707 → −3 dB, 10 → 20 dB',
    latex: 'G = 20 \\log_{10}\\!\\left(\\frac{V_2}{V_1}\\right)',
  },
  {
    chapterId: 'elec-ch16',
    section: '16.2',
    name: 'Low-pass RC cut-off frequency',
    formula: 'f_c = 1/(2πRC)',
    note: 'half-power point; phase −45° there; τ = 1/ω_c',
    latex: 'f_c = \\frac{1}{2\\pi R C}',
  },
  {
    chapterId: 'elec-ch16',
    section: '16.2',
    name: 'Bode high-frequency asymptote',
    formula: 'G(dB) = −20 log₁₀(ω/ω_c)',
    note: 'slope −20 dB/decade = −6 dB/octave for first order',
    latex: 'G = -20 \\log_{10}\\!\\left(\\frac{\\omega}{\\omega_c}\\right)\\ \\text{dB}',
  },
  {
    chapterId: 'elec-ch16',
    section: '16.3',
    name: 'Series RLC bandpass parameters',
    formula: 'ω₀ = 1/√(LC), β = R/L, Q = ω₀/β',
    note: 'Q = (1/R)√(L/C); parallel dual: β = 1/RC',
    latex: '\\omega_o = \\frac{1}{\\sqrt{LC}}, \\quad \\beta = \\frac{R}{L}, \\quad Q = \\frac{\\omega_o}{\\beta}',
  },
  {
    chapterId: 'elec-ch16',
    section: '16.3',
    name: 'Standard bandpass transfer function',
    formula: 'H(s) = βs/(s² + βs + ω₀²)',
    note: 'bandreject dual: (s² + ω₀²)/(s² + βs + ω₀²)',
    latex: 'H(s) = \\frac{\\beta s}{s^{2} + \\beta s + \\omega_o^{2}}',
  },
  {
    chapterId: 'elec-ch16',
    section: '16.4',
    name: 'Butterworth magnitude',
    formula: '|H(jω)| = 1/√(1 + (ω/ωc)²ⁿ)',
    note: 'maximally flat; cut-off stays at ωc for every n',
    latex: '|H(j\\omega)| = \\frac{1}{\\sqrt{1 + (\\omega/\\omega_c)^{2n}}}',
  },
  {
    chapterId: 'elec-ch16',
    section: '16.4',
    name: 'Magnitude and frequency scaling',
    formula: 'R′ = kₘR, L′ = (kₘ/k_f)L, C′ = C/(kₘk_f)',
    note: 'prototype at 1 rad/s with 1 Ω and 1 F, then scale',
    latex: "R' = k_m R, \\quad L' = \\frac{k_m}{k_f} L, \\quad C' = \\frac{C}{k_m k_f}",
  },
  {
    chapterId: 'elec-ch16',
    section: '16.4',
    name: 'First-order active low-pass section',
    formula: 'H(s) = −K·ωc/(s + ωc)',
    note: 'K = R₂/R₁ and ωc = 1/R₂C — independent knobs',
    latex: 'H(s) = -\\frac{K\\,\\omega_c}{s + \\omega_c}',
  },
]
