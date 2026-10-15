import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// Hughes, Electrical & Electronic Technology 12e (Ch. 15) merged with
// Nilsson, Electric Circuits 12e (Ch. 9.6–9.7, 12, 13, 16, 17) — Master
// Library Chapter 10: Transform Methods — Laplace and Fourier.
// All worked-example numbers are the books’ own. Math is LaTeX, rendered by
// KaTeX through the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh10Content: SectionContent[] = [
  // ------------------------------------------------------------------ 10.1
  {
    sectionId: 'ee-e-circuits-s2',
    readingTime: 9,
    intro: 'Chapter 4 introduced the great network theorems for dc circuits; the phasor machinery of Chapter 8 turned AC steady-state analysis into complex arithmetic. Put the two together and every theorem — superposition, Thévenin, Norton, source transformation, star–delta and maximum power transfer — carries over to AC networks with impedances simply replacing resistances. Hughes demonstrates each one on worked AC networks in Chapter 15, and Nilsson Section 9.7 supplies the frequency-domain proofs: substitute Z for R and the derivations of Chapter 4 go through unchanged.',
    objectives: [
      'Apply Kirchhoff’s laws, nodal analysis and network reduction to AC networks in complex form',
      'Use the superposition theorem with phasor sources and state its same-frequency limitation',
      'Find Thévenin and Norton equivalents of AC networks, including by the test-source method',
      'Transform between voltage and current sources in the frequency domain',
      'State and apply the conjugate-match condition for maximum average power transfer',
    ],
    concepts: [
      {
        term: 'Complex notation unifies the theorems',
        kind: 'insight',
        statement: 'Provided complex notation is applied to all AC quantities, the network theorems are used **in almost the same ways as for dc circuits**, with impedance replacing resistance. The practical choice of method is the same as in Chapter 4: when the data describe component voltages and currents, attack directly with Kirchhoff’s laws; when they describe the supply, use network reduction.',
        detail: 'Hughes’s Example 15.1 shows the direct route: guessing $I_{3} = (3 + j0)\\ \\mathrm{A}$ in the 8 Ω resistor, the 16 Ω capacitive branch and series $8 + j6\\ \\Omega$ then fix every current and voltage back to the source, $E = (39 + j30)\\ \\mathrm{V} = 49.2\\ \\mathrm{V}$. Example 15.4 shows the reduction route: replacing the parallel $R$–$X_{C}$ pair by $Z_{e} = 6.4 - j3.2\\ \\Omega$ collapses the network to $14.7\\ \\Omega$ and the same supply current.',
      },
      {
        term: 'Nodal analysis in the frequency domain',
        kind: 'method',
        statement: 'Write KCL at each essential node with **admittances**: $\\sum V_{\\mathrm{node}}/Z_{k} = \\sum$ source currents. The node equation is now a single complex equation per unknown node voltage.',
        detail: 'Hughes’s Example 15.7: with sources $(6 + j0)\\ \\mathrm{V}$ and $(4 + j3)\\ \\mathrm{V}$ feeding a node through $(2 + j3)\\ \\Omega$ and $(2 + j1)\\ \\Omega$, and a 10 Ω load to the reference node, KCL gives $(V_{o} - 6 - j0)/(2 + j3) + (V_{o} - 4 - j3)/(2 + j1) + V_{o}/10 = 0$, which reduces to $V_{o} = (11 + j24)/(4.1 + j4.8) = 4.18\\angle 15.9^\\circ\\ \\mathrm{V}$.',
      },
      {
        term: 'The superposition theorem',
        kind: 'theorem',
        statement: 'In a linear network with multiple sources, the total current or voltage anywhere is the **phasor sum** of the component responses to each source acting alone, with every other ideal voltage source replaced by a short circuit and every other ideal current source by an open circuit.',
        detail: 'Hughes’s Example 15.8 works a two-source network both ways: the component currents from the $(10 + j0)\\ \\mathrm{V}$ source alone and the $(6 + j8)\\ \\mathrm{V}$ source alone sum to $I_{1} = (1.65 - j2.76)\\ \\mathrm{A} = 3.22\\ \\mathrm{A}$ and $I_{2} = (-1.18 + j2.58)\\ \\mathrm{A} = 2.84\\ \\mathrm{A}$. The theorem assumes all sources operate at the same frequency — at different frequencies the component responses cannot be added as phasors, and one must move to the transform methods of the sections that follow.',
      },
      {
        term: 'Thévenin’s theorem',
        kind: 'theorem',
        statement: 'Any two-terminal AC network can be replaced by an equivalent consisting of **a voltage source equal to the open-circuit voltage at the terminals in series with the internal impedance seen from the terminals**, with all independent sources deactivated.',
        detail: 'Nilsson’s Example 9.12 shows the subtlety when the network contains a dependent source: preserve the controlling variable, find $V_{\\mathrm{Th}}$ from the simplified circuit ($V_{\\mathrm{Th}} = 784 - j288\\ \\mathrm{V}$ there), and obtain $Z_{\\mathrm{Th}} = 91.2 - j38.4\\ \\Omega$ by the **test-source method** — deactivate the independent sources, apply a test source at the terminals, and take the ratio of its voltage to its current.',
      },
      {
        term: 'Norton’s theorem',
        kind: 'theorem',
        statement: 'Any two-terminal AC network can be replaced by **a current source equal to the short-circuit current at the terminals in parallel with the internal impedance** seen from the terminals. The Norton current is $I_{s/c} = V_{o/c}/Z_{\\mathrm{in}}$.',
        detail: 'Norton’s equivalent is the natural partner of Thévenin’s — one is the source transformation of the other. Hughes pairs Examples 15.9 and 15.13 on the same network: where the Thévenin form gives $V_{o/c} = -(24.6 + j29.5)\\ \\mathrm{V}$ in series with $(0.89 - j3.74)\\ \\Omega$, the Norton form gives $I_{s/c} = (6 - j8)\\ \\mathrm{A}$ in parallel with the same impedance. Norton equivalents are associated with light-current, semiconductor applications.',
      },
      {
        term: 'Source transformation in the frequency domain',
        kind: 'method',
        statement: 'A voltage source $V_{s}$ in series with an impedance $Z_{s}$ is equivalent to a current source $$I_{s} = \\frac{V_{s}}{Z_{s}}$$ in parallel with $Z_{s}$, and conversely $V_{s} = Z_{s} I_{s}$ — with phasors and complex impedances throughout.',
        detail: 'Nilsson’s Example 9.11 chains transformations to reduce a four-branch circuit to a single loop: a $40\\angle 0^\\circ$ V source with $1 + j3\\ \\Omega$ becomes $40/(1 + j3) = 4 - j12\\ \\mathrm{A}$ in parallel with it; parallel impedances merge into $1.8 + j2.4\\ \\Omega$; the source reconverts to $36 - j12\\ \\mathrm{V}$; finally $V_{0} = (1.56 + j1.08)(10 - j19) = 36.12 - j18.84\\ \\mathrm{V}$.',
      },
      {
        term: 'Star–delta transformation with impedances',
        kind: 'law',
        statement: 'The dc resistor formulas carry over with impedances. Star to delta: $$Z_{1} = Z_{b} + Z_{c} + \\frac{Z_{b} Z_{c}}{Z_{a}},$$ and delta to star: $$Z_{a} = \\frac{Z_{2} Z_{3}}{Z_{1} + Z_{2} + Z_{3}}.$$',
        detail: 'Hughes’s Example 15.17 cracks a bridge network by spotting the delta hidden in it: two $2 + j0\\ \\Omega$ arms and a $3 + j4\\ \\Omega$ branch convert to a star with $Z_{a} = 0.43 - j0.25\\ \\Omega$ and $Z_{b} = Z_{c} = 0.78 - j0.12\\ \\Omega$, after which the network collapses and the load current follows as $I = 5.88\\ \\mathrm{A}$. Not every delta is drawn as one — the skill is recognizing it.',
      },
      {
        term: 'Maximum power transfer in AC networks',
        kind: 'theorem',
        statement: 'Maximum average power is transferred when the load impedance is the **conjugate** of the internal source impedance, $$Z_{L} = Z_{\\mathrm{Th}}^{*},$$ that is, equal resistance parts and equal-but-opposite reactance parts. If only the magnitude of $Z_{L}$ can be varied, the optimum is $|Z_{L}| = |Z_{\\mathrm{Th}}|$.',
        detail: 'The conjugate match makes the total reactance zero, so the current is in phase with the voltage — the observation from Chapter 4 that maximum current comes with unity power factor. Nilsson’s Example 10.9 works a full case: after two source transformations, $V_{\\mathrm{Th}} = 19.2\\angle -53.13^\\circ\\ \\mathrm{V}$ and $Z_{\\mathrm{Th}} = 5.76 - j1.68\\ \\Omega$, so the matching load is $Z_{L} = 5.76 + j1.68\\ \\Omega$ and the delivered maximum is $P = V_{\\mathrm{Th}}^{2}/(4 R_{L}) = 8\\ \\mathrm{W}$.',
      },
    ],
    examples: [
      {
        title: 'Thévenin and Norton of the same network (Hughes Examples 15.9 and 15.13)',
        problem: 'A 100 V source feeds a 6 Ω resistor in series with an 8 Ω inductive reactance; a capacitive reactance of 3 Ω is connected across the output terminals, in parallel with the load. Determine the Thévenin and Norton equivalent circuits supplying the load.',
        steps: [
          { label: 'Step 1: Open-circuit voltage', text: 'With the load removed, the output voltage is divided between $6 + j8\\ \\Omega$ and $-j3\\ \\Omega$: $V_{o/c} = 100 \\times (-j3)/(6 + j8 - j3) = 100(-j3)/(6 + j5)$, which evaluates to $-(24.6 + j29.5)\\ \\mathrm{V}$.' },
          { label: 'Step 2: Internal impedance', text: 'Short-circuit the source and look into the terminals: $Z_{\\mathrm{in}} = (-j3)(6 + j8)/(6 + j8 - j3) = (24 - j18)/(6 + j5) = (0.89 - j3.74)\\ \\Omega$.' },
          { label: 'Step 3: Thévenin equivalent', text: 'A source $-(24.6 + j29.5)\\ \\mathrm{V}$ in series with $(0.89 - j3.74)\\ \\Omega$ — any load attached sees exactly this.' },
          { label: 'Step 4: Norton short-circuit current', text: 'Shorting the output puts the whole terminal voltage across $6 + j8\\ \\Omega$: $I_{s/c} = 100/(6 + j8) = (6 - j8)\\ \\mathrm{A}$.' },
          { label: 'Step 5: Norton equivalent', text: 'A source $(6 - j8)\\ \\mathrm{A}$ in parallel with the same $(0.89 - j3.74)\\ \\Omega$ — and indeed $V_{o/c}/Z_{\\mathrm{in}} = (6 - j8)\\ \\mathrm{A}$, as the transformation $I_{s} = V_{s}/Z_{s}$ requires.' },
        ],
        result: 'Thévenin: −(24.6 + j29.5) V in series with (0.89 − j3.74) Ω. Norton: (6 − j8) A in parallel with the same impedance. Two pictures, one network.',
      },
      {
        title: 'A Thévenin equivalent drives a 10 Ω load (Hughes Examples 15.7 and 15.10)',
        problem: 'A network with sources $(6 + j0)\\ \\mathrm{V}$ (through $2 + j3\\ \\Omega$) and $(4 + j3)\\ \\mathrm{V}$ (through $2 + j1\\ \\Omega$) presents terminals A–B to a 10 Ω load. Use Thévenin’s theorem to find the load current, and compare with the nodal solution.',
        steps: [
          { label: 'Step 1: Open-circuit voltage', text: 'With the load removed, one current circulates: $I = [(6 + j0) - (4 + j3)]/[(2 + j3) + (2 + j1)] = (2 - j3)/(4 + j4) = -0.125 - j0.625\\ \\mathrm{A}$; then $V_{o/c} = (6 + j0) - I(2 + j3) = 4.375 + j1.625 = 4.66\\angle 20.4^\\circ\\ \\mathrm{V}$.' },
          { label: 'Step 2: Internal impedance', text: 'Both sources shorted, the two branches are in parallel across A–B: $Z_{\\mathrm{in}} = (2 + j3)(2 + j1)/(4 + j4) = (1 + j8)/(4 + j4) = (1.125 + j0.875)\\ \\Omega$.' },
          { label: 'Step 3: Load current', text: '$I = V_{o/c}/(Z_{\\mathrm{in}} + 10 + j0) = 4.66\\angle 20.4^\\circ/11.16\\angle 4.5^\\circ = 0.418\\angle 15.9^\\circ\\ \\mathrm{A}$.' },
          { label: 'Step 4: Cross-check by nodal analysis', text: 'The nodal attack of Example 15.7 gives $V_{o} = 4.18\\angle 15.9^\\circ\\ \\mathrm{V}$ across the 10 Ω load — that is, $I = 4.18\\angle 15.9^\\circ/10 = 0.418\\angle 15.9^\\circ\\ \\mathrm{A}$. Identical.' },
        ],
        result: 'The load takes 0.418∠15.9° A. Two independent routes — Thévenin and nodal — agree exactly, which is the best available insurance against algebra slips in complex networks.',
      },
      {
        title: 'Conjugate matching for maximum power (Hughes Example 15.18)',
        problem: 'A network consists of a 12 V source feeding an impedance $(6 + j8)\\ \\Omega$ in parallel with a capacitive reactance of $-j6\\ \\Omega$; the load connects across the parallel pair. Determine the load impedance that dissipates maximum power, and find that power.',
        steps: [
          { label: 'Step 1: Internal impedance', text: 'Shorting the source puts the two in parallel: $Z_{\\mathrm{in}} = (6 + j8)(-j6)/(6 + j8 - j6) = (48 - j36)/(6 + j2) = (5.4 - j7.8)\\ \\Omega$.' },
          { label: 'Step 2: Open-circuit voltage', text: '$V_{o/c} = 12 \\times (-j6)/(6 + j8 - j6) = -j72/(6 + j2) = -(3.6 + j10.8)\\ \\mathrm{V}$.' },
          { label: 'Step 3: The matching condition', text: 'For maximum power the load must be the conjugate of the internal impedance: $Z_{L} = (5.4 + j7.8)\\ \\Omega$ — the equal resistance parts dissipate equally, and the reactances cancel.' },
          { label: 'Step 4: Current and power', text: 'The total impedance is purely resistive, $Z = (5.4 - j7.8) + (5.4 + j7.8) = (10.8 + j0)\\ \\Omega$, so $I = (3.6 + j10.8)/10.8 = 1.05\\ \\mathrm{A}$ and $P_{L} = I^{2} R_{L} = (1.05)^{2} \\times 5.4 = 6.0\\ \\mathrm{W}$.' },
        ],
        result: 'Matching with $Z_{L} = 5.4 + j7.8\\ \\Omega$ delivers 6.0 W — half of what the source generates, the unavoidable toll of conjugate matching.',
      },
    ],
    keyTakeaways: [
      'Every dc network theorem survives into AC analysis unchanged once resistances become complex impedances and quantities become phasors.',
      'Superposition sums phasor responses source-by-source; it presumes a common frequency, and different frequencies demand the transform methods ahead.',
      'Thévenin: open-circuit voltage in series with the impedance seen from the terminals; Norton: short-circuit current in parallel with the same impedance.',
      'When dependent sources are present, find $Z_{\\mathrm{Th}}$ with the test-source method — never by simply deactivating the dependent source.',
      'Source transformation in the frequency domain: $V_{s} = Z_{s} I_{s}$, valid with phasors exactly as in Chapter 4.',
      'Star–delta conversions with impedances: $Z_{1} = Z_{b} + Z_{c} + Z_{b}Z_{c}/Z_{a}$ and $Z_{a} = Z_{2}Z_{3}/(Z_{1} + Z_{2} + Z_{3})$.',
      'Maximum average power transfer requires the conjugate match $Z_{L} = Z_{\\mathrm{Th}}^{*}$; with only the magnitude adjustable, set $|Z_{L}| = |Z_{\\mathrm{Th}}|$.',
    ],
    quiz: [
      {
        q: 'When applying superposition to an AC network, each ideal voltage source not under consideration is replaced by:',
        options: ['An open circuit', 'A short circuit', 'Its internal impedance', 'A current source of the same phase'],
        answer: 1,
        explanation: 'An ideal voltage source is replaced by a short circuit (its zero internal impedance), and an ideal current source by an open circuit. The component responses are then summed as phasors — which is why all sources must share one frequency.',
      },
      {
        q: 'A network contains a dependent source. The correct way to find the Thévenin impedance is:',
        options: ['Deactivate the dependent source along with the independent ones and combine impedances', 'Apply a test source at the terminals with only the independent sources deactivated and take the ratio of voltage to current', 'Divide the open-circuit voltage by the short-circuit current of the dependent source alone', 'It cannot be found; the theorem does not apply with dependent sources'],
        answer: 1,
        explanation: 'The dependent source must stay alive. In Nilsson Example 9.12 the test-source method yields $Z_{\\mathrm{Th}} = 91.2 - j38.4\\ \\Omega$ for a network whose Thévenin voltage is $784 - j288\\ \\mathrm{V}$. (Dividing $V_{o/c}$ by $I_{s/c}$ also works but is usually messier.)',
      },
      {
        q: 'For maximum average power transfer from a source whose internal impedance is $Z_{\\mathrm{Th}} = 5.4 - j7.8\\ \\Omega$, the load should be:',
        options: ['$5.4 - j7.8\\ \\Omega$, equal to the source impedance', '$5.4 + j7.8\\ \\Omega$, its complex conjugate', '$0 + j7.8\\ \\Omega$, canceling the reactance only', 'As large as possible to minimize losses'],
        answer: 1,
        explanation: 'The conjugate $Z_{L} = Z_{\\mathrm{Th}}^{*}$ makes the loop purely resistive at $10.8\\ \\Omega$ in Hughes Example 15.18, so the current is in phase with the voltage and $I^{2}R$ is maximal: 1.05 A and 6.0 W in that example.',
      },
      {
        q: 'Two sources of different frequencies drive a linear network. Superposition:',
        options: ['Works as usual — just add the phasor responses', 'Fails because phasors require a common frequency; the responses must be added in the time domain', 'Works if the sources are both voltage sources', 'Works if one source is first converted to its Norton equivalent'],
        answer: 1,
        explanation: 'A phasor is meaningful only against a single shared frequency. Hughes notes that component currents from different-frequency sources can still be found, but not added as phasors — exactly the limitation that the Laplace transform removes in the next section.',
      },
      {
        q: 'The Norton equivalent of a network with open-circuit voltage $V_{o/c}$ and internal impedance $Z_{\\mathrm{in}}$ has a current source of value:',
        options: [`$V_{o/c} Z_{\\mathrm{in}}$`, `$V_{o/c}/Z_{\\mathrm{in}}$`, `$Z_{\\mathrm{in}}/V_{o/c}$`, 'Equal to the open-circuit current, which is zero'],
        answer: 1,
        explanation: 'The source transformation $I_{s} = V_{s}/Z_{s}$ connects the two equivalents. In Hughes Examples 15.9 and 15.13, dividing $-(24.6 + j29.5)\\ \\mathrm{V}$ by $(0.89 - j3.74)\\ \\Omega$ gives the Norton current $(6 - j8)\\ \\mathrm{A}$ directly.',
      },
      // PYQ-pattern: GATE 2019 — AC maximum power with conjugate match (rephrased, values changed)
      {
        q: 'A network presents $V_{Th} = 10 \\angle 0°$ V RMS in series with $Z_{Th} = 4 + j3$ Ω. The maximum average power a load can receive, and the matching load, are closest to:',
        options: ['6.25 W with $4 - j3$ Ω', '12.5 W with $4 + j3$ Ω', '25 W with $4$ Ω', '3.13 W with $5$ Ω'],
        answer: 0,
        explanation: 'Step 1 — Given: RMS phasor magnitude $10$ V, $Z_{Th} = 4 + j3$ Ω so $R_{Th} = 4$ Ω. Step 2 — Governing theorem: conjugate match $Z_{L} = Z_{Th}^{∗}$ maximizes transfer, giving $P_{max} = \\frac{|V_{Th}|^{2}}{4R_{Th}}$. Step 3 — Algebra: match is $4 - j3$ Ω; $P_{max} = \\frac{100}{16} = 6.25$ W. Step 4 — Sanity check: only resistances absorb average power, the reactances cancel at the match, and efficiency at match is one half as theory demands. Step 5 — Distractor analysis: $4 + j3$ Ω doubles reactance instead of cancelling, resistive-only $4$ Ω leaves vars circulating, and $5$ Ω mismatches magnitude. Step 6 — Conclude: 6.25 W with $4 - j3$ Ω.',
      },
    ],
  },

  // ------------------------------------------------------------------ 10.2
  {
    sectionId: 'ee-e-circuits-s35',
    readingTime: 10,
    intro: 'The phasor transform of Chapter 8 bought algebraic ease but only for the sinusoidal steady state — transients were left behind. The Laplace transform closes that gap: it converts the integrodifferential equations of a circuit with switches, steps, impulses and arbitrary sources into pure algebra in a new variable $s$, solves them, and converts back. Nilsson builds the machine in Chapter 12: the defining integral, the step and impulse functions, tables of functional and operational transforms, partial-fraction inversion, and the poles-and-zeros picture of the s plane that preview’s every circuit’s natural behaviour.',
    objectives: [
      'State the defining integral of the one-sided Laplace transform and explain the choice of the 0⁻ lower limit',
      'Use step and impulse functions to represent switching operations and discontinuities',
      'Build transforms of new functions from the functional and operational transform tables',
      'Invert proper rational functions by partial-fraction expansion, for real and complex roots',
      'Locate poles and zeros on the s plane and apply the initial- and final-value theorems',
    ],
    concepts: [
      {
        term: 'Definition of the Laplace transform',
        kind: 'law',
        statement: 'The (one-sided) Laplace transform of $f(t)$ is $$\\mathcal{L}\\{f(t)\\} = \\int_{0^{-}}^{\\infty} f(t) e^{-st}\\, dt = F(s),$$ where $s$ has the dimension of frequency. The transform turns a set of integrodifferential equations in the time domain into a set of **algebraic** equations in the frequency domain.',
        detail: 'The lower limit $0^{-}$ is chosen so that an impulse or discontinuity at the origin is included; the integral from $0^{-}$ to $0^{+}$ is then zero except when the discontinuity is an impulse. Like the phasor, the Laplace transform creates a friendlier domain, solves there, and inverse-transforms back. Functions without transforms — $t^{t}$, $e^{t^{2}}$ — never appear as excitations of linear circuits anyway.',
      },
      {
        term: 'The step function',
        kind: 'definition',
        statement: 'The **step function** $Ku(t)$ is zero for $t < 0$ and $K$ for $t > 0$; a step at $t = a$ is $Ku(t - a)$. Step functions turn linear segments on and off, so any piecewise-linear waveform can be written as one expression — for example a pulse of height $K$ from $t = 1$ to $t = 3$ is $K[u(t - 1) - u(t - 3)]$.',
        detail: 'Nilsson’s Example 12.1 assembles a triangular zigzag this way: $f(t) = 2t[u(t) - u(t-1)] + (-2t + 4)[u(t-1) - u(t-3)] + (2t - 8)[u(t-3) - u(t-4)]$ — one line replacing a five-case piecewise definition. When a finite transition must be specified, the convention is the linear one, $Ku(0) = 0.5K$.',
      },
      {
        term: 'The impulse function',
        kind: 'definition',
        statement: 'The **impulse** $K\\delta(t)$ is the limit of a variable-parameter function whose amplitude grows without bound, whose duration shrinks to zero and whose area stays constant at $K$: $\\int_{-\\infty}^{\\infty} K\\delta(t)\\, dt = K$ and $\\delta(t) = 0$ for $t \\neq 0$. Its **sifting property** reads $\\int_{-\\infty}^{\\infty} f(t)\\delta(t - a)\\, dt = f(a)$.',
        detail: 'Two consequences matter for circuits: the derivative of a step is an impulse, and the transform of the unit impulse is $\\mathcal{L}\\{\\delta(t)\\} = 1$. Impulses model switching operations that transfer finite charge instantaneously — the capacitor switching circuit of Chapter 13 — and the transform of the nth derivative of an impulse is $s^{n}$.',
      },
      {
        term: 'Functional transforms',
        kind: 'notation',
        statement: 'A **functional transform** is the transform of a specific function. The core table: $\\delta(t) \\to 1$; $u(t) \\to 1/s$; $t \\to 1/s^{2}$; $e^{-at} \\to 1/(s + a)$; $\\sin\\omega t \\to \\omega/(s^{2} + \\omega^{2})$; $\\cos\\omega t \\to s/(s^{2} + \\omega^{2})$; plus the damped family $te^{-at}$, $e^{-at}\\sin\\omega t$, $e^{-at}\\cos\\omega t$.',
        detail: 'Each entry is a direct evaluation of the defining integral — for instance $\\mathcal{L}\\{\\sin\\omega t\\} = \\int_{0}^{\\infty}(\\sin\\omega t)e^{-st} dt = \\omega/(s^{2} + \\omega^{2})$ via the exponential form of the sine. Linearity then stretches the table: multiplication by a constant and addition of functions carry straight through, so $\\sin(\\omega t + \\theta)$ and shifted sinusoids need no new integrals.',
      },
      {
        term: 'Operational transforms: differentiation and integration',
        kind: 'law',
        statement: 'Differentiation and integration in time become algebraic operations in $s$: $$\\mathcal{L}\\left\\{\\frac{df}{dt}\\right\\} = sF(s) - f(0^{-}), \\qquad \\mathcal{L}\\left\\{\\int_{0^{-}}^{t} f(x)\\, dx\\right\\} = \\frac{F(s)}{s}.$$ For higher derivatives, $\\mathcal{L}\\{d^{2}f/dt^{2}\\} = s^{2}F(s) - sf(0^{-}) - df(0^{-})/dt$.',
        detail: 'This single pair of properties is the whole reason the method works: an integrodifferential KCL equation such as $v/R + (1/L)\\int_{0}^{t} v\\, dx + C\\, dv/dt = I_{\\mathrm{dc}} u(t)$ becomes $V/R + V/(Ls) + C[sV - v(0^{-})] = I_{\\mathrm{dc}}/s$ — one algebraic equation in $V(s)$. The initial conditions ride along inside the $f(0^{-})$ terms, which is why the $0^{-}$ limit was chosen.',
      },
      {
        term: 'Translation in time and frequency',
        kind: 'law',
        statement: 'A shift in time multiplies the transform by an exponential; a multiplication by an exponential shifts the transform: $$\\mathcal{L}\\{f(t - a)u(t - a)\\} = e^{-as} F(s) \\quad (a > 0), \\qquad \\mathcal{L}\\{e^{-at} f(t)\\} = F(s + a).$$',
        detail: 'The second rule manufactures the damped-cosine pair from the cosine pair: knowing $\\mathcal{L}\\{\\cos\\omega t\\} = s/(s^{2} + \\omega^{2})$ gives $\\mathcal{L}\\{e^{-at}\\cos\\omega t\\} = (s + a)/[(s + a)^{2} + \\omega^{2}]$ with no integration. Scale changing completes the toolkit: $\\mathcal{L}\\{f(at)\\} = (1/a)F(s/a)$ for $a > 0$.',
      },
      {
        term: 'Partial-fraction inversion',
        kind: 'method',
        statement: 'Every s-domain response of a lumped linear circuit is a rational function $F(s) = N(s)/D(s)$; if it is proper ($m > n$), expand in partial fractions — one term per distinct root of $D(s)$, $r$ terms for a root of multiplicity $r$ — and invert term by term using the tables: $$F(s) = \\sum_{k}\\frac{K_{k}}{s + p_{k}} \\quad \\Longrightarrow \\quad f(t) = \\sum_{k} K_{k} e^{-p_{k} t} u(t).$$',
        detail: 'Each coefficient is isolated by multiplying through by its own denominator factor and evaluating at that root. Complex roots come in conjugate pairs and their coefficients are conjugates too, so they recombine into damped sinusoids. Always test the finished expansion at a root of the numerator — both sides must vanish there — and remember that an improper rational function must be divided out before expanding.',
      },
      {
        term: 'Poles and zeros',
        kind: 'definition',
        statement: 'Writing $F(s) = K(s + z_{1})(s + z_{2})\\cdots/(s + p_{1})(s + p_{2})\\cdots$, the roots $-p_{k}$ of the denominator are the **poles** (where $F$ blows up) and the roots $-z_{k}$ of the numerator are the **zeros** (where $F$ vanishes). They are plotted on the complex s plane with X marks and O marks respectively.',
        detail: 'Nilsson’s Example 12.8 factorizes $F_{1}(s) = 10(s+5)(s+3+j4)(s+3-j4)/[s(s+10)(s+6+j8)(s+6-j8)]$: poles at $0, -10, -6 \\pm j8$; zeros at $-5, -3 \\pm j4$. A rational function can also have poles or zeros at infinity; the interesting ones for circuits are the finite ones.',
      },
      {
        term: 'Initial- and final-value theorems',
        kind: 'law',
        statement: 'The endpoint behaviour of $f(t)$ can be read from $F(s)$ before any inversion: $$\\lim_{t \\to 0^{+}} f(t) = \\lim_{s \\to \\infty} sF(s), \\qquad \\lim_{t \\to \\infty} f(t) = \\lim_{s \\to 0} sF(s).$$ The final-value theorem holds only if all poles of $F(s)$ except a first-order pole at the origin lie in the left half plane.',
        detail: 'These are the built-in sanity checks of the Laplace method: after solving an s-domain circuit equation, test the predicted initial and final values against what the circuit obviously does before and after the transient. A pair of poles on the imaginary axis — a sustained oscillation — voids the final-value test, as Nilsson notes for the sinusoidally driven circuit whose current has poles at $\\pm j40{,}000$.',
      },
    ],
    examples: [
      {
        title: 'A parallel RLC switched at t = 0 (Nilsson Example 12.2)',
        problem: 'A current source $I_{\\mathrm{dc}} = 24\\ \\mathrm{mA}$, a resistor $R = 400\\ \\Omega$, an inductor $L = 25\\ \\mathrm{mH}$ and a capacitor $C = 25\\ \\mathrm{nF}$ are in parallel; no energy is stored when the switch opens at $t = 0$. Find the Laplace transform of the voltage $v(t)$ and predict the functional form of $v(t)$.',
        steps: [
          { label: 'Step 1: Transform the KCL equation', text: 'The time-domain node equation $v/R + (1/L)\\int_{0}^{t} v\\, dx + C\\, dv/dt = I_{\\mathrm{dc}} u(t)$ becomes $V/R + V/(Ls) + C s V = I_{\\mathrm{dc}}/s$ with $v(0^{-}) = 0$.' },
          { label: 'Step 2: Solve for V(s)', text: '$V(s) = (I_{\\mathrm{dc}}/C)/[s^{2} + (1/RC)s + 1/(LC)] = 96 \\times 10^{4}/[s^{2} + 10^{5}s + 16 \\times 10^{8}]$.' },
          { label: 'Step 3: Factor the denominator', text: '$s^{2} + 10^{5}s + 16 \\times 10^{8} = (s + 20{,}000)(s + 80{,}000)$, so $V(s) = 96 \\times 10^{4}/[(s + 20{,}000)(s + 80{,}000)]$.' },
          { label: 'Step 4: Predict the response form', text: 'Writing $V(s) = K_{1}/(s + 20{,}000) + K_{2}/(s + 80{,}000)$, each term is the transform of an exponential, so $v(t)$ is the sum of a decaying $e^{-20{,}000t}$ term and a faster-decaying $e^{-80{,}000t}$ term.' },
        ],
        result: 'The response is overdamped: two real poles at −20,000 and −80,000 rad/s, so $v(t) = K_{1}e^{-20{,}000t} + K_{2}e^{-80{,}000t}$ — the coefficients fall out of the partial fractions of the next example’s technique.',
      },
      {
        title: 'Partial fractions with distinct real roots (Nilsson Example 12.3)',
        problem: 'Find the inverse Laplace transform of $$F(s) = \\frac{96(s + 5)(s + 12)}{s(s + 8)(s + 6)}.$$',
        steps: [
          { label: 'Step 1: Set up the expansion', text: '$F(s) = K_{1}/s + K_{2}/(s + 8) + K_{3}/(s + 6)$ — one term per distinct root $0, -8, -6$.' },
          { label: 'Step 2: Coefficient at s = 0', text: 'Multiply by $s$ and evaluate at $s = 0$: $K_{1} = 96(5)(12)/[(8)(6)] = 120$.' },
          { label: 'Step 3: Coefficients at s = −8 and s = −6', text: '$K_{2} = 96(-3)(4)/[(-8)(-2)] = -72$; $K_{3} = 96(-1)(6)/[(-6)(2)] = 48$.' },
          { label: 'Step 4: Verify with a numerator root', text: 'Testing the finished identity at $s = -5$ (a root of the numerator): $-24 - 24 + 48 = 0$ — both sides vanish, as they must.' },
          { label: 'Step 5: Invert term by term', text: '$f(t) = (120 - 72e^{-8t} + 48e^{-6t})u(t)$.' },
        ],
        result: 'f(t) = (120 − 72e⁻⁸ᵗ + 48e⁻⁶ᵗ)u(t) — the algebraic skeleton of every distinct-real-root inversion.',
      },
      {
        title: 'Mapping poles and zeros onto the s plane (Nilsson Example 12.8)',
        problem: 'Find and plot the poles and zeros of $$F_{1}(s) = \\frac{40 s^{3} + 440 s^{2} + 2200 s + 5000}{4 s^{4} + 88 s^{3} + 880 s^{2} + 4000 s}.$$',
        steps: [
          { label: 'Step 1: Extract the constants', text: 'Factor 40 from the numerator and 4 from the denominator, leaving $10(s^{3} + 11s^{2} + 55s + 125)/[s(s^{3} + 22s^{2} + 220s + 1000)]$.' },
          { label: 'Step 2: Factor both polynomials', text: '$F_{1}(s) = 10(s + 5)(s + 3 + j4)(s + 3 - j4)/[s(s + 10)(s + 6 + j8)(s + 6 - j8)]$.' },
          { label: 'Step 3: Read off poles and zeros', text: 'Poles: $0, -10, -6 + j8, -6 - j8$. Zeros: $-5, -3 + j4, -3 - j4$.' },
          { label: 'Step 4: Plot', text: 'Mark X at each pole and O at each zero on the complex s plane — real axis horizontal, imaginary axis vertical. The conjugate pairs sit symmetrically about the real axis.' },
        ],
        result: 'Three zeros and four poles located; such pole–zero maps preview behaviour at a glance — poles on the real axis give pure exponentials, conjugate pairs give damped sinusoids, and imaginary-axis poles mean sustained oscillation.',
      },
    ],
    keyTakeaways: [
      'The one-sided transform $F(s) = \\int_{0^{-}}^{\\infty} f(t)e^{-st} dt$ converts circuit integrodifferential equations into algebraic ones, with initial conditions built in through the $0^{-}$ limit.',
      'Steps model switching; impulses model instant charge or flux transfer; $\\mathcal{L}\\{u(t)\\} = 1/s$ and $\\mathcal{L}\\{\\delta(t)\\} = 1$ anchor the tables.',
      'Differentiation multiplies by $s$ and subtracts $f(0^{-})$; integration divides by $s$ — the pair that linearizes dynamic circuit equations.',
      'Time translation multiplies by $e^{-as}$; multiplying by $e^{-at}$ shifts $s$ to $s + a$ — the table doubles in size for free.',
      'Inversion of proper rational functions is mechanical partial fractions, one term per root; verify by testing at a numerator root.',
      'Poles (denominator roots) and zeros (numerator roots) plotted on the s plane summarize the entire natural behaviour of a response.',
      'Check every solution with $\\lim sF(s)$ as $s \\to \\infty$ (initial value) and $s \\to 0$ (final value, valid only for left-half-plane poles).',
    ],
    quiz: [
      {
        q: 'The Laplace transform is called one-sided (unilateral) because:',
        options: ['It applies only to single-source circuits', 'Its integral runs from $0^{-}$ to $\\infty$, ignoring $f(t)$ for negative time', 'Only one initial condition can be accommodated', 'It transforms only one equation at a time'],
        answer: 1,
        explanation: 'The lower limit $0^{-}$ means $F(s)$ is determined by the behaviour of $f(t)$ for positive time only; whatever happened before $0^{-}$ enters through the initial conditions in the derivative theorem.',
      },
      {
        q: 'If $\\mathcal{L}\\{f(t)\\} = F(s)$, then $\\mathcal{L}\\{df/dt\\}$ equals:',
        options: [`$sF(s)$`, `$F(s)/s$`, `$sF(s) - f(0^{-})$`, `$s^{2}F(s) - sf(0^{-})$`],
        answer: 2,
        explanation: 'One integration by parts on the defining integral gives $sF(s) - f(0^{-})$. The last option is the second derivative — which itself follows by applying the first-derivative rule twice.',
      },
      {
        q: 'The Laplace transform of the decaying exponential $e^{-at}$ is:',
        options: [`$1/(s - a)$`, `$1/(s + a)$`, `$a/(s^{2} + a^{2})$`, `$s/(s + a)^{2}$`],
        answer: 1,
        explanation: 'Direct integration: $\\int_{0}^{\\infty} e^{-(a+s)t} dt = 1/(s + a)$. Combined with frequency translation, this single pair generates the entire damped family in Table 12.1.',
      },
      {
        q: 'The rational function $96(s+5)(s+12)/[s(s+8)(s+6)]$ of Nilsson Example 12.3 inverts to:',
        options: [`$(120 - 72e^{-8t} + 48e^{-6t})u(t)$`, `$(120e^{-8t} - 72 + 48e^{-6t})u(t)$`, `$(-120 + 72e^{-8t} - 48e^{-6t})u(t)$`, `$(120 - 72e^{-6t} + 48e^{-8t})u(t)$`],
        answer: 0,
        explanation: 'The residues are $K_{1} = 120$ at $s = 0$, $K_{2} = -72$ at $s = -8$ and $K_{3} = 48$ at $s = -6$; each term $K/(s + p)$ inverts to $Ke^{-pt}$.',
      },
      {
        q: 'The final-value theorem $\\lim_{t\\to\\infty} f(t) = \\lim_{s\\to 0} sF(s)$ may be applied when:',
        options: ['Always, for any $F(s)$', 'Only when $F(s)$ is a polynomial', 'Only when all poles of $F(s)$ except a first-order pole at the origin lie in the left half plane', 'Only when $f(t)$ contains an impulse at the origin'],
        answer: 2,
        explanation: 'A right-half-plane pole means $f(t)$ grows without bound, and imaginary-axis poles mean sustained oscillation — neither has a final value. The initial-value theorem instead requires only that $f(t)$ contain no impulse at the origin.',
      },
    ],
  },

  // ------------------------------------------------------------------ 10.3
  {
    sectionId: 'ee-e-circuits-s36',
    readingTime: 11,
    intro: 'With the transform machinery built, Nilsson Chapter 13 turns it loose on circuits. Each element — resistor, inductor, capacitor — acquires an s-domain equivalent circuit whose initial stored energy appears as an extra source, and then everything from Chapter 2 through Chapter 4 revives: Ohm’s law, KCL, KVL, voltage division, Thévenin. The chapter culminates in the transfer function $H(s)$, the single rational expression that characterizes a circuit independent of its input, whose poles generate the transient response and whose evaluation at $s = j\\omega$ delivers the sinusoidal steady state of Chapter 8 in one line.',
    objectives: [
      'Construct the series and parallel s-domain equivalent circuits for inductors and capacitors carrying initial energy',
      'Apply the seven-step Laplace circuit-analysis method to RC, RLC and multi-mesh circuits',
      'Derive transfer functions and interpret their poles and zeros',
      'Separate the complete response into transient and steady-state parts via the poles of $H(s)$ and of $X(s)$',
      'Compute the sinusoidal steady-state response directly from $H(j\\omega)$',
    ],
    concepts: [
      {
        term: 'Circuit elements in the s domain',
        kind: 'law',
        statement: 'Transforming each element’s defining equation gives: resistor $V = RI$; inductor $$V = sLI - LI_{0}$$ (impedance $sL$ in series with a source $LI_{0}$, or equivalently $sL$ in parallel with $I_{0}/s$); capacitor $$I = sCV - CV_{0}$$ (admittance $sC$ in parallel with a source $CV_{0}$, or impedance $1/sC$ in series with $V_{0}/s$).',
        detail: 'The three-step recipe for each element: write the time-domain terminal equation, Laplace-transform it, and build a circuit that satisfies the algebraic result. The initial-condition sources carry their own algebraic signs — $I_{0}$ is negative if the initial current opposes the reference direction, $V_{0}$ likewise. With zero initial energy both inductor and capacitor reduce to bare impedances $sL$ and $1/sC$.',
      },
      {
        term: 'Ohm’s law and Kirchhoff’s laws in the s domain',
        kind: 'law',
        statement: 'With no initial energy, every passive element obeys $V = ZI$ where the s-domain impedances are $R$, $sL$ and $1/sC$ — **Ohm’s law in the s domain**. Because the transform of a sum is the sum of transforms, KCL and KVL hold unchanged for s-domain currents and voltages: $\\sum I = 0$ at every node, $\\sum V = 0$ around every loop.',
        detail: 'The consequence is total continuity of technique: series–parallel reduction, voltage and current division, node-voltage and mesh-current methods, source transformations and Thévenin–Norton equivalents — all of Chapters 2 through 4 — apply verbatim to s-domain circuits. The admittances are $1/R$, $1/sL$ and $sC$ siemens.',
      },
      {
        term: 'The seven-step analysis method',
        kind: 'method',
        statement: 'Analysis Method 13.1: (1) determine the initial conditions from the $t < 0$ circuit; (2) transform the independent sources with Tables 12.1–12.2; (3) replace time-domain symbols by s-domain symbols; (4) transform the remaining elements with Table 13.1, representing initial conditions as sources; (5) analyse the s-domain circuit with resistive-circuit techniques; (6) check initial and final values with the theorems; (7) inverse-transform by partial fractions.',
        detail: 'The method yields the **complete** response — transient plus steady state — to any circuit whose sources have transforms. That is its decisive advantage over the phasor method of Chapter 8, which returns only the steady state. Step 6 is not optional bookkeeping: in Nilsson’s Example 13.2 the initial-value theorem correctly predicts $v_{o}(0^{+}) = 60\\ \\mathrm{V}$ and the final-value theorem gives zero, exactly as the physical circuit dictates.',
      },
      {
        term: 'The transfer function',
        kind: 'definition',
        statement: 'The **transfer function** is the s-domain ratio of output to input with **all initial conditions zero**: $$H(s) = \\frac{Y(s)}{X(s)}.$$ A single circuit yields as many transfer functions as there are choices of input and output: for a series RLC driven by $V_{g}$, $I/V_{g} = sC/(s^{2}LC + RCs + 1)$ but $V/V_{g} = 1/(s^{2}LC + RCs + 1)$.',
        detail: 'The transfer function characterizes the circuit without revealing its components or their interconnection. With multiple sources, find the transfer function of each and superpose. And the impulse input unmasks it completely: $x(t) = \\delta(t)$ gives $X(s) = 1$, hence $Y(s) = H(s)$ — the inverse transform of the transfer function is the unit-impulse response, which is also the circuit’s natural response.',
      },
      {
        term: 'Poles of H(s) versus poles of X(s)',
        kind: 'insight',
        statement: 'Since $Y(s) = H(s)X(s)$, the partial fraction expansion of the response contains one group of terms generated by the **poles of $H(s)$** — the transient, or natural, components — and one group generated by the **poles of $X(s)$** — the steady-state components that persist after the transients die.',
        detail: 'For a bounded output the poles of $H(s)$ must lie in the left half plane; zeros may lie in either half. Nilsson’s Example 13.10 makes the split visible: driving the Chapter 13.9 circuit with a ramp produces $v_{o} = [10\\sqrt{5} \\times 10^{-4} e^{-3000t}\\cos(4000t + 79.70^\\circ) + 10t - 4 \\times 10^{-4}]u(t)\\ \\mathrm{V}$ — a decaying oscillation from the complex pole pair $-3000 \\pm j4000$ of $H(s)$, and a ramp from the double pole at the origin of the input.',
      },
      {
        term: 'Time invariance and delay',
        kind: 'insight',
        statement: 'If the input is delayed by $a$ seconds, $x(t - a)u(t - a)$ has transform $e^{-as}X(s)$, so the output becomes $\\mathcal{L}^{-1}\\{H(s)X(s)e^{-as}\\} = y(t - a)u(t - a)$: **delaying the input delays the output by the same amount**. A circuit with this property is time invariant.',
        detail: 'Every lumped, linear, constant-parameter circuit — everything in this book — is time invariant. Together with the impulse-response result, this observation sets up the convolution integral: the impulse response $h(t)$ contains enough information to compute the response to any input whatsoever.',
      },
      {
        term: 'Steady-state sinusoid from H(jω)',
        kind: 'law',
        statement: 'For a sinusoidal input $x(t) = A\\cos(\\omega t + \\phi)$, the steady-state response is $$y_{ss}(t) = A|H(j\\omega)|\\cos[\\omega t + \\phi + \\theta(\\omega)],$$ where $|H(j\\omega)|$ and $\\theta(\\omega)$ are the magnitude and angle of the transfer function evaluated at $s = j\\omega$.',
        detail: 'The derivation needs only the two input poles at $\\pm j\\omega$; the left-half-plane poles of $H(s)$ contribute terms that decay to zero. Evaluating $H(s)$ on the imaginary axis therefore recovers the entire phasor analysis of Chapter 8 from a single rational function — the bridge between the transform method and frequency-response thinking, developed further in the filter chapters.',
      },
    ],
    examples: [
      {
        title: 'Natural response of an RC circuit by Laplace (Nilsson Example 13.2)',
        problem: 'A 100 V source has charged a 0.5 μF capacitor through 10 kΩ (switch at x). At $t = 0$ the switch moves to y, connecting the capacitor to a 240 kΩ resistor in parallel with a 60 kΩ resistor. Use the Laplace transform method to find $v_{o}(t)$ for $t \\geq 0^{+}$.',
        steps: [
          { label: 'Step 1: Initial condition', text: 'After a long time in position x the capacitor is an open circuit charged to $V_{0} = 100\\ \\mathrm{V}$.' },
          { label: 'Step 2: Build the s-domain circuit', text: 'The capacitor impedance is $1/sC = 2 \\times 10^{6}/s\\ \\Omega$ in series with a source $V_{0}/s = 100/s\\ \\mathrm{V\\text{-}s}$; the two load resistors combine to $240\\,\\mathrm{k}\\Omega \\parallel 60\\,\\mathrm{k}\\Omega = 48\\ \\mathrm{k\\Omega}$.' },
          { label: 'Step 3: Voltage division', text: '$V_{o} = \\frac{48{,}000}{2 \\times 10^{6}/s + 32{,}000 + 48{,}000} \\times \\frac{100}{s} = \\frac{60}{s + 25}$.' },
          { label: 'Step 4: Check with the limit theorems', text: '$\\lim_{s \\to \\infty} sV_{o} = 60 = v_{o}(0^{+})$ and $\\lim_{s \\to 0} sV_{o} = 0 = v_{o}(\\infty)$ — both match the physical circuit.' },
          { label: 'Step 5: Invert', text: '$v_{o}(t) = \\mathcal{L}^{-1}\\{60/(s + 25)\\} = 60e^{-25t}u(t)\\ \\mathrm{V}$, matching the first-order methods of Chapter 7.' },
        ],
        result: 'A single pole at −25 rad/s: the capacitor discharges through 48 kΩ with time constant 48 kΩ × 0.5 μF = 24 ms, exactly as Chapter 7 predicts.',
      },
      {
        title: 'A two-mesh RL circuit solved as algebra (Nilsson Example 13.5)',
        problem: 'A 336 V dc source closes through a switch at $t = 0$ into a network of $42\\ \\Omega$ in series with $8.4\\ \\mathrm{H}$, then $48\\ \\Omega$ in series with $10\\ \\mathrm{H}$ as the second mesh. No energy is stored initially. Find $i_{1}(t)$ and $i_{2}(t)$ for $t \\geq 0$.',
        steps: [
          { label: 'Step 1: Transform the circuit', text: 'The source becomes $336/s\\ \\mathrm{V\\text{-}s}$; the inductors become $8.4s\\ \\Omega$ and $10s\\ \\Omega$ with no initial-condition sources.' },
          { label: 'Step 2: Write the two mesh equations', text: '$336/s = (42 + 8.4s)I_{1} - 42I_{2}$ and $0 = -42I_{1} + (90 + 10s)I_{2}$.' },
          { label: 'Step 3: Solve by determinants', text: 'The determinant is $\\Delta = 84(s + 2)(s + 12)$, giving $I_{1} = 40(s + 9)/[s(s+2)(s+12)]$ and $I_{2} = 168/[s(s+2)(s+12)]$.' },
          { label: 'Step 4: Verify the endpoints', text: 'Initial-value theorem: both $sI_{1}$ and $sI_{2}$ vanish as $s \\to \\infty$, so both currents start at zero. Final-value theorem: $sI_{1} \\to 40(9)/(2 \\times 12) = 15\\ \\mathrm{A}$ and $sI_{2} \\to 168/24 = 7\\ \\mathrm{A}$ — matching a dc circuit with both inductors shorted.' },
          { label: 'Step 5: Partial fractions and inversion', text: '$I_{1} = 15/s - 14/(s + 2) - 1/(s + 12)$ and $I_{2} = 7/s - 8.4/(s + 2) + 1.4/(s + 12)$, so $i_{1} = (15 - 14e^{-2t} - e^{-12t})u(t)\\ \\mathrm{A}$ and $i_{2} = (7 - 8.4e^{-2t} + 1.4e^{-12t})u(t)\\ \\mathrm{A}$.' },
        ],
        result: 'Two coupled meshes solved with nothing but Cramer’s rule and partial fractions — the simultaneous-differential-equation barrier of Chapter 7 simply never appears.',
      },
      {
        title: 'A transfer function from circuit values, then its sinusoidal steady state (Nilsson Examples 13.9 and 13.12)',
        problem: 'A voltage source drives a network of a 1000 Ω resistor in series with a 250 Ω resistor; a 50 mH inductor bridges from their junction to the bottom rail and a 1 μF capacitor (output $v_{o}$ across it) completes the circuit. (a) Derive the transfer function $H(s) = V_{o}/V_{g}$ and locate its poles and zeros. (b) If $v_{g} = 120\\cos(5000t + 30^\\circ)\\ \\mathrm{V}$, find the steady-state expression for $v_{o}$.',
        steps: [
          { label: 'Step 1: Set up the s-domain circuit', text: 'With no initial energy, the impedances are $Z_{L} = 0.05s\\ \\Omega$ and $Z_{C} = 10^{6}/s\\ \\Omega$.' },
          { label: 'Step 2: Node equation and transfer function', text: 'Summing currents at the top node: $(V_{o} - V_{g})/1000 + V_{o}/(250 + 0.05s) + V_{o} \\cdot s/10^{6} = 0$ solves to $$H(s) = \\frac{V_{o}}{V_{g}} = \\frac{1000(s + 5000)}{s^{2} + 6000s + 25 \\times 10^{6}}.$$' },
          { label: 'Step 3: Poles and zeros', text: 'The denominator factors as $(s + 3000 - j4000)(s + 3000 + j4000)$: a complex pole pair at $-3000 \\pm j4000$. The single zero sits at $-5000$.' },
          { label: 'Step 4: Evaluate at the source frequency', text: 'For $\\omega = 5000\\ \\mathrm{rad/s}$: $H(j5000) = 1000(j5000 + 5000)/[-25 \\times 10^{6} + j30{,}000 \\times 1000 + 25 \\times 10^{6}] = (1 - j)/6 = (\\sqrt{2}/6)\\angle -45^\\circ$.' },
          { label: 'Step 5: Write the steady state', text: '$v_{oss} = 120 \\times (\\sqrt{2}/6)\\cos(5000t + 30^\\circ - 45^\\circ) = 20\\sqrt{2}\\cos(5000t - 15^\\circ)\\ \\mathrm{V}$.' },
        ],
        result: 'H(s) = 1000(s + 5000)/(s² + 6000s + 25×10⁶) with poles at −3000 ± j4000 and a zero at −5000; the same function, evaluated once on the imaginary axis, produces the whole steady state: 20√2 cos(5000t − 15°) V.',
      },
    ],
    keyTakeaways: [
      's-domain impedances: $R$, $sL$ and $1/sC$; initial energy appears as sources — $LI_{0}$ in series (or $I_{0}/s$ in parallel) with the inductor, $CV_{0}$ in parallel (or $V_{0}/s$ in series) with the capacitor.',
      'Ohm’s law, KCL and KVL hold in the s domain, so every resistive-circuit technique of Chapters 2–4 applies unchanged.',
      'The seven-step method delivers the complete response — transient plus steady state — for any transformable source, unlike phasor analysis.',
      'The transfer function $H(s) = Y(s)/X(s)$ (zero initial energy) characterizes the circuit; its inverse transform is the unit-impulse response, i.e. the natural response.',
      'Response poles split by origin: poles of $H(s)$ generate the transient, poles of $X(s)$ the steady state.',
      'For $x(t) = A\\cos(\\omega t + \\phi)$: $y_{ss}(t) = A|H(j\\omega)|\\cos[\\omega t + \\phi + \\theta(\\omega)]$ — the phasor steady state recovered from the transfer function in one evaluation.',
      'Always test s-domain solutions with the initial- and final-value theorems before inverting; they catch algebra errors that partial fractions will happily carry through.',
    ],
    quiz: [
      {
        q: 'An inductor carries an initial current $I_{0}$. In the s domain it may be represented as:',
        options: ['An impedance $sL$ only — initial conditions are ignored', 'An impedance $sL$ in series with a source $LI_{0}$, or $sL$ in parallel with $I_{0}/s$', 'An impedance $1/sL$ in series with $I_{0}$', 'An impedance $sL$ in series with a source $I_{0}/s$'],
        answer: 1,
        explanation: 'Both forms satisfy $V = sLI - LI_{0}$: the series source $LI_{0}$ (volt-seconds) and the parallel source $I_{0}/s$ (ampere-seconds) are mutual Norton–Thévenin equivalents of each other. The choice between them is made per circuit for convenience.',
      },
      {
        q: 'The output of a circuit is $Y(s) = H(s)X(s)$. The transient part of $y(t)$ is generated by:',
        options: ['The zeros of $H(s)$', 'The poles of $X(s)$', 'The poles of $H(s)$', 'The zeros of $X(s)$'],
        answer: 2,
        explanation: 'Each partial-fraction term belongs to some pole; those from $H(s)$’s poles decay (for a stable circuit, left half plane) and constitute the natural response, while those from $X(s)$’s poles share the input’s everlasting character and form the steady state.',
      },
      {
        q: 'A circuit has $H(s) = 1000(s+5000)/(s^{2} + 6000s + 25 \\times 10^{6})$. Its poles are at:',
        options: ['$-5000$ (double)', `$-3000 \\pm j4000$`, `$\\pm j5000$`, `$-6000$ and $-25 \\times 10^{6}$`],
        answer: 1,
        explanation: 'The discriminant is $6000^{2} - 4(25 \\times 10^{6}) = -64 \\times 10^{6}$, a negative number, so $s = -3000 \\pm j4000$ — a conjugate pair that produces a decaying oscillation in the natural response.',
      },
      {
        q: 'The same circuit is driven by $120\\cos(5000t + 30^\\circ)\\ \\mathrm{V}$ and $H(j5000) = (\\sqrt{2}/6)\\angle -45^\\circ$. The steady-state output is:',
        options: [`$20\\sqrt{2}\\cos(5000t - 15^\\circ)\\ \\mathrm{V}$`, `$20\\sqrt{2}\\cos(5000t + 75^\\circ)\\ \\mathrm{V}$`, `$120\\cos(5000t - 15^\\circ)\\ \\mathrm{V}$`, `$28.28\\cos(5000t + 30^\\circ)\\ \\mathrm{V}$`],
        answer: 0,
        explanation: 'The recipe: scale the amplitude by $|H|$, shift the phase by $\\theta$. $120 \\times \\sqrt{2}/6 = 20\\sqrt{2}$ and $30^\\circ + (-45^\\circ) = -15^\\circ$.',
      },
      {
        q: 'The unit-impulse response $h(t)$ of a circuit equals:',
        options: ['The inverse transform of $H(s)$, and also the circuit’s natural response', 'The step response differentiated twice', 'The inverse transform of $sH(s)$', 'Unrelated to the transfer function'],
        answer: 0,
        explanation: 'With $x(t) = \\delta(t)$, $X(s) = 1$ and $Y(s) = H(s)$, so $y(t) = h(t)$ is exactly the inverse transform of the transfer function. Applying an impulse instantaneously stores energy in the circuit; the subsequent release of that energy is the natural response.',
      },
      // PYQ-pattern: DRDO 2016 — RL step response in the s-domain (rephrased, values changed)
      {
        q: 'A series RL branch with R = 10 Ω and L = 0.50 H, initially relaxed, is switched onto a 20 V step. The current 0.050 s later is closest to:',
        options: ['0.55 A', '0.90 A', '1.26 A', '2.00 A'],
        answer: 2,
        explanation: 'Step 1 — Given: $R = 10$ Ω, $L = 0.50$ H, step $V = 20$ V, $i(0) = 0$. Step 2 — Governing solution: s-domain reduction gives $i = \\frac{V}{R}(1 - e^{\\frac{-Rt}{L}})$, the universal first-order step with $\\tau = \\frac{L}{R}$. Step 3 — Algebra: steady value $2.0$ A, $\\tau = 0.050$ s, query at one $\\tau$, so $i = 2.0 \\times (1 - e^{-1}) \\approx 1.264$ A. Step 4 — Sanity check: one time constant lands at 63 per cent of final, inductor current starts at zero and cannot jump, and the asymptote is Ohmic. Step 5 — Distractor analysis: 2.00 A is the infinite-time value, 0.55 A misplaces $\\tau$ by a factor of two, and 0.90 A uses decay instead of growth. Step 6 — Conclude: about 1.26 A.',
      },
    ],
  },

  // ------------------------------------------------------------------ 10.4
  {
    sectionId: 'ee-e-circuits-s37',
    readingTime: 11,
    intro: 'Phasors and Laplace transforms both assume nicely behaved inputs — a single sinusoid, or an exponential-polynomial signal. Real waveforms are rougher: square waves from switching circuits, rectified sinusoids from power supplies, triangular sweeps from oscilloscope generators. Fourier’s discovery — that any periodic function is an infinite sum of harmonically related sines and cosines — extends the superposition idea to arbitrary periodic drives, and letting the period grow without bound carries the series into the Fourier transform, the tool for aperiodic signals and the mathematical foundation of spectral thinking.',
    objectives: [
      'Write the trigonometric Fourier series of a periodic function and compute its coefficients',
      'Exploit even, odd, half-wave and quarter-wave symmetry to shorten the coefficient integrals',
      'Convert to the amplitude–phase form and to the exponential form with coefficients $C_{n}$',
      'Assemble the steady-state response of a circuit to a periodic input through superposition',
      'State the Fourier transform and its inverse, and the rms and average-power rules for harmonic sums',
    ],
    concepts: [
      {
        term: 'The Fourier series representation',
        kind: 'law',
        statement: 'A periodic function $f(t)$ with fundamental frequency $\\omega_{0} = 2\\pi/T$ can be written $$f(t) = a_{v} + \\sum_{n=1}^{\\infty} (a_{n}\\cos n\\omega_{0} t + b_{n}\\sin n\\omega_{0} t),$$ where the integer multiples $2\\omega_{0}, 3\\omega_{0}, \\ldots$ are the harmonics of $f(t)$.',
        detail: 'Dirichlet’s conditions — single-valued, finitely many discontinuities and extrema per period, and a convergent integral of $|f(t)|$ — guarantee the series converges; every periodic function of circuit analysis meets them. Nonsinusoidal periodic functions arise from rectifiers, from distorted sinusoids on magnetic saturation, and from any nonlinearity such as a clipping circuit.',
      },
      {
        term: 'The Fourier coefficients',
        kind: 'law',
        statement: 'The coefficients are averages over one period: $$a_{v} = \\frac{1}{T}\\int_{t_{0}}^{t_{0}+T} f(t)\\, dt, \\qquad a_{k} = \\frac{2}{T}\\int_{t_{0}}^{t_{0}+T} f(t)\\cos k\\omega_{0} t\\, dt, \\qquad b_{k} = \\frac{2}{T}\\int_{t_{0}}^{t_{0}+T} f(t)\\sin k\\omega_{0} t\\, dt.$$',
        detail: 'The formulas come from multiplying the series by $\\cos k\\omega_{0} t$ (or $\\sin k\\omega_{0} t$, or 1) and integrating over a period: orthogonality kills every term but one, leaving $a_{k}T/2$ (or $b_{k}T/2$, or $a_{v}T$). Thus $a_{v}$ is the average value, $a_{k}$ twice the average of $f(t)\\cos k\\omega_{0}t$ and $b_{k}$ twice the average of $f(t)\\sin k\\omega_{0}t$. For the sawtooth of Nilsson Example 16.1 — $v = (V_{m}/T)t$ on $0 < t < T$ — the integrals give $a_{v} = V_{m}/2$, $a_{k} = 0$ and $b_{k} = -V_{m}/(\\pi k)$.',
      },
      {
        term: 'Symmetry and its shortcuts',
        kind: 'insight',
        statement: 'For an **even** function ($f(t) = f(-t)$) all $b_{k} = 0$: cosine terms only. For an **odd** function ($f(t) = -f(-t)$) all $a_{k} = 0$ and $a_{v} = 0$: sine terms only. For **half-wave symmetry** ($f(t) = -f(t - T/2)$) only odd harmonics exist. **Quarter-wave** symmetry (half-wave symmetry plus symmetry about each half-cycle midpoint) further halves the integration range.',
        detail: 'Shifts can create or destroy symmetry: a triangular wave that is neither even nor odd becomes even when shifted left by $T/4$ and odd when shifted right. Nilsson’s Example 16.2 exploits full quarter-wave symmetry on a triangular current pulse: $b_{k} = (8/T)\\int_{0}^{T/4} i(t)\\sin k\\omega_{0} t\\, dt$ with $i = (4I_{m}/T)t$ gives $b_{k} = (8I_{m}/\\pi^{2}k^{2})\\sin(k\\pi/2)$ for odd $k$ — the whole series from one quarter-period integral.',
      },
      {
        term: 'Amplitude and phase form',
        kind: 'notation',
        statement: 'Combining each harmonic’s sine and cosine into one cosine, $$f(t) = a_{v} + \\sum_{n=1}^{\\infty} A_{n}\\cos(n\\omega_{0} t - \\theta_{n}), \\qquad A_{n} = \\sqrt{a_{n}^{2} + b_{n}^{2}}, \\quad \\theta_{n} = \\tan^{-1}\\frac{b_{n}}{a_{n}},$$ using the phasor addition $a_{n} - jb_{n} = A_{n}\\angle -\\theta_{n}$.',
        detail: 'The compact form suits circuit analysis: each harmonic becomes a single phasor source, and the response to each is one phasor division at that harmonic’s frequency. Nilsson Example 16.3 converts a half-rectified square wave this way: $a_{1} - jb_{1} = (\\sqrt{2} V_{m}/\\pi)\\angle -45^\\circ$, $a_{2} - jb_{2} = (V_{m}/\\pi)\\angle -90^\\circ$, $a_{3} - jb_{3} = (\\sqrt{2} V_{m}/3\\pi)\\angle -135^\\circ$, giving $v = V_{m}/4 + (\\sqrt{2}V_{m}/\\pi)\\cos(\\omega_{0}t - 45^\\circ) + (V_{m}/\\pi)\\cos(2\\omega_{0}t - 90^\\circ) + \\cdots$.',
      },
      {
        term: 'Circuit response to a periodic input',
        kind: 'method',
        statement: 'Replace the periodic source by $a_{v}$ (a dc source) plus one sinusoidal source per harmonic, all in series. Find each response with the phasor method — the circuit sees each harmonic at its own frequency — and **superpose**: $v_{ok} = H(jk\\omega_{0})$ applied to the $k$th harmonic phasor.',
        detail: 'Nilsson’s RC example: a square wave into a low-pass RC gives $v_{o}(t) = \\sum_{n \\, \\mathrm{odd}} \\frac{4V_{m}}{\\pi n\\sqrt{1 + (n\\omega_{0}RC)^{2}}}\\sin(n\\omega_{0}t - \\beta_{n})$ with $\\beta_{n} = \\tan^{-1} n\\omega_{0}RC$. Large $C$ short-circuits the harmonics and the output tends to a sinusoid at $\\omega_{0}$; small $C$ passes the square wave essentially unchanged — amplitude and phase distortion interpreted directly in the frequency domain.',
      },
      {
        term: 'Average power and rms value with harmonics',
        kind: 'law',
        statement: 'Only voltage and current **of the same frequency** interact to produce average power: $$P = V_{\\mathrm{dc}} I_{\\mathrm{dc}} + \\sum_{n=1}^{\\infty} \\frac{V_{n} I_{n}}{2}\\cos(\\theta_{vn} - \\theta_{in}).$$ The rms value combines the components as $$F_{\\mathrm{rms}} = \\sqrt{a_{v}^{2} + \\sum_{n=1}^{\\infty} \\left(\\frac{A_{n}}{\\sqrt{2}}\\right)^{2}}.$$',
        detail: 'These are Parseval-type identities: squares add, cross products average to zero. Nilsson Example 16.5 applies them to a square wave of $V_{m} = 60\\ \\mathrm{V}$ across 15 Ω: the exact rms is 30 V so $P_{T} = 60\\ \\mathrm{W}$, while the first five nonzero terms (dc 15 W plus 24.32 + 12.16 + 2.70 + 0.97 W) give 55.15 W — 91.92 percent of the total, and the five-term rms estimate is 28.76 V against the exact 30 V.',
      },
      {
        term: 'The exponential form',
        kind: 'notation',
        statement: 'The most compact statement of the series uses complex exponentials: $$f(t) = \\sum_{n = -\\infty}^{\\infty} C_{n} e^{jn\\omega_{0} t}, \\qquad C_{n} = \\frac{1}{T}\\int_{t_{0}}^{t_{0}+T} f(t) e^{-jn\\omega_{0} t}\\, dt,$$ with $C_{0} = a_{v}$, $C_{n} = \\frac{1}{2}(a_{n} - jb_{n}) = \\frac{1}{2} A_{n}\\angle -\\theta_{n}$ and $C_{-n} = C_{n}^{*}$.',
        detail: 'Plotting $|C_{n}|$ against $n\\omega_{0}$ gives the **amplitude spectrum**, and $\\theta_{n}$ against $n\\omega_{0}$ the **phase spectrum** — line spectra spaced $\\omega_{0} = 2\\pi/T$ apart. For the rectangular pulse train of Nilsson Example 16.7, $C_{n} = (V_{m}\\tau/T)\\sin(n\\omega_{0}\\tau/2)/(n\\omega_{0}\\tau/2)$ — a sinc-shaped envelope of spectral lines.',
      },
      {
        term: 'The Fourier transform',
        kind: 'law',
        statement: 'Letting $T \\to \\infty$ in the exponential series — the line spacing $\\Delta\\omega = 2\\pi/T$ becoming a differential — turns the discrete spectrum continuous and defines the **Fourier transform pair**: $$F(\\omega) = \\int_{-\\infty}^{\\infty} f(t) e^{-j\\omega t}\\, dt, \\qquad f(t) = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} F(\\omega) e^{j\\omega t}\\, d\\omega.$$',
        detail: 'The limit is honest bookkeeping: $C_{n} \\to 0$ but $C_{n} T \\to F(\\omega)$, so it is the product that survives. For the rectangular pulse of width $\\tau$ and height $V_{m}$: $V(\\omega) = V_{m}\\tau [\\sin(\\omega\\tau/2)/(\\omega\\tau/2)]$ — the same sinc envelope that bounded the periodic line spectrum, now drawn as a continuous curve. The amplitude spectrum of a signal therefore morphs from lines to a continuum as the signal stops repeating.',
      },
      {
        term: 'Transforms in the limit and Parseval’s theorem',
        kind: 'law',
        statement: 'Constants, steps, signums and sinusoids lack convergent Fourier integrals but acquire transforms **in the limit**, built from impulses: $\\mathcal{F}\\{A\\} = 2\\pi A\\delta(\\omega)$, $\\mathcal{F}\\{\\operatorname{sgn} t\\} = 2/(j\\omega)$, $\\mathcal{F}\\{u(t)\\} = \\pi\\delta(\\omega) + 1/(j\\omega)$, $\\mathcal{F}\\{\\cos\\omega_{0} t\\} = \\pi[\\delta(\\omega - \\omega_{0}) + \\delta(\\omega + \\omega_{0})]$. Parseval’s theorem then equates energies, $$\\int_{-\\infty}^{\\infty} f^{2}(t)\\, dt = \\frac{1}{2\\pi}\\int_{-\\infty}^{\\infty} |F(\\omega)|^{2}\\, d\\omega,$$ so $|F(\\omega)|^{2}$ is an energy density in joules per hertz.',
        detail: 'The energy in a band $\\omega_{1} \\leq \\omega \\leq \\omega_{2}$ is $(1/\\pi)\\int_{\\omega_{1}}^{\\omega_{2}}|F(\\omega)|^{2} d\\omega$. Note the dc-connection too: when the poles of a Laplace transform $F(s)$ lie in the left half plane, the Fourier transform follows by substituting $s = j\\omega$ — the two transforms agree wherever both exist.',
      },
    ],
    examples: [
      {
        title: 'A square wave as a harmonic sum (Nilsson Example 16.4, part a)',
        problem: 'A square wave of magnitude $4/\\pi\\ \\mathrm{V}$ and frequency 100 rad/s is the input to a filter. Find the first five nonzero terms of its Fourier series representation.',
        steps: [
          { label: 'Step 1: Identify the symmetry', text: 'The square wave has odd, half-wave and quarter-wave symmetry, so only the $b_{k}$ coefficients for odd $k$ survive: $b_{k} = (4/T)\\int_{0}^{T/4} V_{m}\\sin k\\omega_{0} t\\, dt = 4V_{m}/(\\pi k)$ for odd $k$.' },
          { label: 'Step 2: Write the series', text: 'With $V_{m} = 4/\\pi\\ \\mathrm{V}$ and $\\omega_{0} = 100\\ \\mathrm{rad/s}$: $v_{g} = \\frac{4V_{m}}{\\pi}\\left(\\sin\\omega_{0} t + \\frac{1}{3}\\sin 3\\omega_{0} t + \\frac{1}{5}\\sin 5\\omega_{0} t + \\cdots\\right)$ over odd $n$.' },
          { label: 'Step 3: Evaluate the first five terms', text: '$4V_{m}/\\pi = 16$, so $v_{g} = 16\\sin 100t + 5.33\\sin 300t + 3.2\\sin 500t + 2.29\\sin 700t + 1.78\\sin 900t + \\cdots\\ \\mathrm{V}$.' },
          { label: 'Step 4: Note the pattern', text: 'Only odd harmonics, amplitudes falling as $1/n$, no dc and no cosine terms — everything the symmetry analysis predicted.' },
        ],
        result: 'The square wave is $16\\sin 100t + 5.33\\sin 300t + 3.2\\sin 500t + 2.29\\sin 700t + 1.78\\sin 900t + \\cdots$ V — the harmonic ladder that Chapter 8’s phasor method will now process one rung at a time.',
      },
      {
        title: 'A square wave through a bandreject filter (Nilsson Example 16.4, parts b and c)',
        problem: 'The square wave above drives a parallel RLC bandreject filter with $R = 20\\ \\Omega$, $L = 8\\ \\mathrm{mH}$ and $C = 500\\ \\mu\\mathrm{F}$, the output taken across the whole tank. Find the first five terms of the steady-state output voltage, and explain them via the frequency response.',
        steps: [
          { label: 'Step 1: The transfer function', text: 'For the parallel RLC bandreject circuit, $H(s) = (s^{2} + 1/LC)/(s^{2} + s/RC + 1/LC) = (s^{2} + 25 \\times 10^{4})/(s^{2} + 100s + 25 \\times 10^{4})$.' },
          { label: 'Step 2: Evaluate at each harmonic', text: '$H(j100) = 0.999\\angle -2.4^\\circ$; $H(j300) = 0.983\\angle -10.6^\\circ$; $H(j500) = 0$; $H(j700) = 0.96\\angle 16.26^\\circ$; $H(j900) = 0.99\\angle 9.13^\\circ$.' },
          { label: 'Step 3: Multiply each input phasor by H', text: 'Fundamental: $16 \\times 0.999 = 15.99\\angle -2.4^\\circ$; third harmonic: $5.33 \\times 0.983 = 5.24\\angle -10.6^\\circ$; fifth harmonic: $3.2 \\times 0 = 0$; seventh: $2.29 \\times 0.96 = 2.2\\angle 16.26^\\circ$; ninth: $1.78 \\times 0.99 = 1.76\\angle 9.13^\\circ$.' },
          { label: 'Step 4: Interpret with the filter’s geometry', text: 'The filter’s center frequency is $1/\\sqrt{LC} = 500\\ \\mathrm{rad/s}$ — exactly the fifth harmonic — with bandwidth $1/RC = 100\\ \\mathrm{rad/s}$ and $Q = 5$: a selective bandreject, so the 500 rad/s component is annihilated while components outside the stopband pass nearly untouched.' },
        ],
        result: '$v_{o} = 15.99\\sin(100t - 2.4^\\circ) + 5.24\\sin(300t - 10.6^\\circ) + 0\\cdot\\sin 500t + 2.2\\sin(700t + 16.26^\\circ) + 1.76\\sin(900t + 9.13^\\circ) + \\cdots\\ \\mathrm{V}$ — the fifth harmonic simply vanishes.',
      },
      {
        title: 'Energy in a frequency band (Nilsson Example 17.6)',
        problem: 'The current in a 40 Ω resistor is $i = 20e^{-2t}u(t)\\ \\mathrm{A}$. Using Parseval’s theorem, find the total energy dissipated and the percentage of it associated with the frequency band $0 \\leq \\omega \\leq 2\\sqrt{3}\\ \\mathrm{rad/s}$.',
        steps: [
          { label: 'Step 1: Total energy in the time domain', text: '$W_{40\\Omega} = 40\\int_{0}^{\\infty} 400e^{-4t} dt = 16{,}000/4 = 4000\\ \\mathrm{J}$.' },
          { label: 'Step 2: Fourier transform of the current', text: 'From the table, $I(\\omega) = 20/(2 + j\\omega)$, so $|I(\\omega)|^{2} = 400/(4 + \\omega^{2})$.' },
          { label: 'Step 3: Verify the total by Parseval', text: '$W_{40\\Omega} = (40/\\pi)\\int_{0}^{\\infty} 400/(4 + \\omega^{2}) d\\omega = (16{,}000/\\pi)\\cdot\\frac{1}{2}\\tan^{-1}(\\omega/2)\\big|_{0}^{\\infty} = (8000/\\pi)(\\pi/2) = 4000\\ \\mathrm{J}$ — matching the time-domain integral exactly.' },
          { label: 'Step 4: Energy in the band', text: '$W_{40\\Omega} = (40/\\pi)\\int_{0}^{2\\sqrt{3}} 400/(4 + \\omega^{2}) d\\omega = (8000/\\pi)\\tan^{-1}(\\sqrt{3}) = (8000/\\pi)(\\pi/3) = 8000/3 \\approx 2666.7\\ \\mathrm{J}$.' },
          { label: 'Step 5: The percentage', text: '$\\eta = (8000/3)/4000 \\times 100 = 66.67$ percent of the total energy lives below $2\\sqrt{3}\\ \\mathrm{rad/s}$.' },
        ],
        result: 'Total energy 4000 J, of which 8000/3 J — two thirds — is contained in the band from dc to 2√3 rad/s: the exponential pulse is a low-frequency creature, as its smooth single hump suggests.',
      },
    ],
    keyTakeaways: [
      'A periodic function is the infinite harmonic sum $a_{v} + \\sum(a_{n}\\cos n\\omega_{0}t + b_{n}\\sin n\\omega_{0}t)$ with $\\omega_{0} = 2\\pi/T$; Dirichlet’s conditions guarantee convergence for every waveform of circuit interest.',
      'Coefficients are period averages: $a_{v}$ is the mean, $a_{k}$ and $b_{k}$ are twice the means of $f\\cos k\\omega_{0}t$ and $f\\sin k\\omega_{0}t$.',
      'Symmetry pays: even kills sines, odd kills cosines and dc, half-wave kills even harmonics, quarter-wave shrinks the integration range to $T/4$.',
      'Amplitude–phase form $a_{v} + \\sum A_{n}\\cos(n\\omega_{0}t - \\theta_{n})$ turns each harmonic into one phasor, so the periodic-input response is phasor analysis plus superposition.',
      'Power and rms add across harmonics as sums of squares: $P = V_{\\mathrm{dc}}I_{\\mathrm{dc}} + \\sum (V_{n}I_{n}/2)\\cos(\\theta_{vn} - \\theta_{in})$ and $F_{\\mathrm{rms}} = \\sqrt{a_{v}^{2} + \\sum(A_{n}/\\sqrt{2})^{2}}$; the exponential form $\\sum C_{n} e^{jn\\omega_{0}t}$ with $C_{n} = (1/T)\\int f e^{-jn\\omega_{0}t} dt$ yields the line amplitude and phase spectra.',
      'As $T \\to \\infty$ the series becomes the Fourier transform pair $F(\\omega) = \\int f(t)e^{-j\\omega t} dt$, $f(t) = (1/2\\pi)\\int F(\\omega)e^{j\\omega t} d\\omega$ — the continuous spectrum of an aperiodic signal.',
      'Parseval: $\\int f^{2} dt = (1/2\\pi)\\int |F(\\omega)|^{2} d\\omega$, so $|F(\\omega)|^{2}$ is energy density per hertz, and band energies follow by integration.',
    ],
    quiz: [
      {
        q: 'A periodic function has half-wave symmetry, $f(t) = -f(t - T/2)$. Its Fourier series contains:',
        options: ['Only cosine terms', 'Only even harmonics plus a dc term', 'Only odd harmonics, with zero average value', 'Both odd and even harmonics in conjugate pairs'],
        answer: 2,
        explanation: 'Half-wave symmetry forces $a_{v} = 0$ and both $a_{k}$ and $b_{k}$ to vanish for even $k$ — the square wave and the symmetrical triangle wave are the standard examples.',
      },
      {
        q: 'In the square-wave series of Nilsson Example 16.4, the amplitudes of successive odd harmonics fall off as:',
        options: [`$1/n^{2}$`, `$1/n$`, 'They are all equal to 16 V', `$1/\\sqrt{n}$`],
        answer: 1,
        explanation: 'The coefficients are $b_{n} = 4V_{m}/(\\pi n)$ for odd $n$: 16, 5.33, 3.2, 2.29, 1.78 V — the $1/n$ decay that gives the square wave its stubborn spectral tails.',
      },
      {
        q: 'A square wave containing a 500 rad/s harmonic drives a bandreject filter whose center frequency is 500 rad/s. The 500 rad/s component of the steady-state output is:',
        options: ['Amplified by the filter’s $Q$ of 5', 'Passed essentially unchanged, like the other harmonics', 'Eliminated — the transfer function vanishes at the center frequency', 'Inverted in sign but unchanged in magnitude'],
        answer: 2,
        explanation: 'For the parallel RLC bandreject, $H(s) = (s^{2} + 1/LC)/(s^{2} + s/RC + 1/LC)$, and $H(j500) = 0$ because the numerator vanishes at the center frequency. The measured output indeed shows $0\\sin 500t$.',
      },
      {
        q: 'As the period $T$ of a pulse train grows without bound (pulse width held constant), the amplitude spectrum:',
        options: ['Becomes a set of ever-taller lines at the same spacing', 'Becomes a set of lines spaced $2\\pi/T$ apart whose envelope is unchanged, approaching a continuous spectrum as $T \\to \\infty$', 'Collapses to a single line at zero frequency', 'Becomes independent of the pulse width'],
        answer: 1,
        explanation: 'The lines crowd together ($\\Delta\\omega = 2\\pi/T \\to 0$) and shrink in amplitude ($C_{n} \\to 0$), but their envelope — the sinc $V_{m}\\tau\\sin(\\omega\\tau/2)/(\\omega\\tau/2)$ — is fixed by the pulse shape. The envelope becomes the continuous Fourier transform $V(\\omega)$.',
      },
      {
        q: 'In Parseval’s theorem, the quantity $|F(\\omega)|^{2}$ represents:',
        options: ['Power in watts at frequency $\\omega$', 'Energy density — joules per hertz — of the signal', 'The phase spectrum of the signal', 'The instantaneous voltage squared'],
        answer: 1,
        explanation: 'Writing the energy integral with $\\omega = 2\\pi f$ shows $|F(2\\pi f)|^{2} df$ is the energy in an infinitesimal band $df$; integrating over all frequencies returns the total $1\\Omega$ energy. That is why band-limited energies, like the two-thirds of Nilsson Example 17.6 below $2\\sqrt{3}$ rad/s, are computed as areas under $|F(\\omega)|^{2}$.',
      },
    ],
  },
]

export const elecCh10Formulas: FormulaEntry[] = [
  {
    chapterId: 'ee-e-circuits',
    section: '2.2',
    name: 'AC source transformation',
    formula: 'V_s = Z_s·I_s',
    note: 'voltage source in series Z ↔ current source in parallel Z',
    latex: 'V_{s} = Z_{s} I_{s}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.2',
    name: 'Maximum power transfer (AC)',
    formula: 'Z_L = Z_Th*',
    note: 'conjugate match; equal R parts, opposite reactance parts',
    latex: 'Z_{L} = Z_{\\mathrm{Th}}^{*}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.35',
    name: 'Laplace transform',
    formula: 'F(s) = ∫ [0⁻, ∞) f(t)·e⁻ˢᵗ dt',
    note: 'one-sided, lower limit 0⁻; turns integrodifferential → algebra',
    latex: 'F(s) = \\int_{0^{-}}^{\\infty} f(t) e^{-st} dt',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.35',
    name: 'Differentiation theorem',
    formula: 'L{df/dt} = s·F(s) − f(0⁻)',
    note: 'differentiation in time becomes multiplication by s',
    latex: '\\mathcal{L}\\left\\{\\frac{df}{dt}\\right\\} = sF(s) - f(0^{-})',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.36',
    name: 's-domain impedances',
    formula: 'Z_L = sL, Z_C = 1/(sC)',
    note: 'initial energy adds sources LI₀ (series) or CV₀ (parallel)',
    latex: 'Z_{L} = sL, \\qquad Z_{C} = \\frac{1}{sC}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.36',
    name: 'Transfer function',
    formula: 'H(s) = V_o(s)/V_i(s)',
    note: 'ratio of output to input transforms, zero initial energy',
    latex: 'H(s) = \\frac{Y(s)}{X(s)}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.36',
    name: 'Sinusoidal steady state from H(s)',
    formula: 'y_ss = A·|H(jω)|·cos(ωt + φ + θ)',
    note: 'evaluate H at s = jω: scale by |H|, shift phase by θ',
    latex: 'y_{ss}(t) = A|H(j\\omega)|\\cos[\\omega t + \\phi + \\theta(\\omega)]',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.37',
    name: 'Fourier coefficients',
    formula: 'aₙ = (2/T)·∫ f(t)·cos nω₀t dt',
    note: 'bₙ same with sine; aᵥ = (1/T)∫f dt is the average value',
    latex: 'a_{n} = \\frac{2}{T}\\int f(t) \\cos n\\omega_{0} t\\, dt',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.37',
    name: 'Fourier transform',
    formula: 'F(ω) = ∫ f(t)·e⁻ʲωᵗ dt',
    note: 'T → ∞ limit of the series; inverse has 1/(2π) prefactor',
    latex: 'F(\\omega) = \\int_{-\\infty}^{\\infty} f(t) e^{-j\\omega t} dt',
  },
]
