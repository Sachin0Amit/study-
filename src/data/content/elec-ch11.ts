import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// THE ELECTRONICS MASTER LIBRARY — Chapter 11: Electronic Systems and Signals
// Hughes, "Electrical & Electronic Technology" 12e — ch 16 (systems, amplifiers,
// attenuators, block diagrams), 18.1–18.4 (equivalent networks, decibels,
// frequency response), 24 (signals and convolution), 25–27 (data transmission,
// communications, fibreoptics). All worked-example numbers are traced from the
// book and recomputed; where the 12th edition prints a slip, the corrected
// arithmetic is carried and the printed value noted.
// Math renders through KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh11Content: SectionContent[] = [
  // ------------------------------------------------------------------ 11.1
  {
    sectionId: 'ece-e-sigsys-s12',
    readingTime: 10,
    intro:
      'A radio or a mobile phone contains hundreds or thousands of components, yet nobody debugs one transistor at a time. Hughes opens the electronic half of this book with the trick that makes such complexity manageable: treat every unit as a box with an input and an output, ask only how the output relates to the input, and chain the boxes together. This section builds that vocabulary — systems, amplifiers, attenuators, block diagrams — and then gives it teeth with gains, decibels, equivalent networks and frequency response.',
    objectives: [
      'Explain the system, subsystem and black-box concepts, and read a block diagram by its layout conventions',
      'Define voltage, current and power gain, and compute any one from the other two',
      'Model a loaded amplifier with its constant-voltage or constant-current equivalent network and find the source voltage needed for a given output',
      'Convert between linear gains and decibels, and combine cascaded stages in both forms',
      'Define amplifier bandwidth from the 3 dB points and distinguish clipping, harmonic and frequency distortion',
    ],
    concepts: [
      {
        term: 'System, subsystem and boundary',
        kind: 'definition',
        statement:
          'A **system** is any entity that accepts an input and produces an output through a well-defined series of procedures; large systems decompose into smaller **subsystems** whose internal workings we deliberately ignore, caring only about the relationship between each subsystem’s output and its input.',
        detail:
          'Hughes’s favourite example is the postal system: post-box, transport, sorting, transport, sorting, transport, delivery — a chain of subsystems that must be complete for the system to function at all. A simple system such as a ski-lift has a single input, a single output and one route with no alternatives: its operation is all or nothing. Many electronic systems are exactly of this form — one box, an input variable on the left, an output variable on the right, and a well-defined boundary between them.',
      },
      {
        term: 'The black-box approach',
        kind: 'insight',
        statement:
          'Modern electronic subsystems are sealed units containing hundreds if not thousands of components; because repair is effectively impossible and replacement is cheap, only the **input–output relationship** of each unit matters — the approach Hughes calls the black-box method.',
        detail:
          'Not knowing how the magnification is achieved is not a handicap but a design philosophy: a subsystem is specified by what it does to signals, not by how it does it. Should the complete system fail to operate correctly, the block diagram alone lets us locate which box has broken down — and replace it, which is almost always cheaper than repairing it.',
      },
      {
        term: 'Amplifier gains',
        kind: 'law',
        statement:
          'For an amplifier with input voltage $V_1$, input current $I_1$, output voltage $V_2$ and output current $I_2$, $$G_v = \\frac{V_2}{V_1}, \\qquad G_i = \\frac{I_2}{I_1}, \\qquad G_p = \\frac{V_2 I_2}{V_1 I_1} = G_v G_i.$$',
        detail:
          'The extra output power is not created from nothing: a small input signal controls the release of energy from a separate direct-current source — a dry battery or the rectified supply we build in Chapter 12. Hughes points out that a relay (small coil power switching large contact power) and a separately excited d.c. generator driven at constant speed (small field power controlling large armature power) are amplifiers by this definition even though nobody calls them that.',
      },
      {
        term: 'Signal fidelity, harmonics and phase',
        kind: 'insight',
        statement:
          'An amplifier must reproduce the **waveform** of its input at the output to a high degree of accuracy: two notes of the same pitch played by different instruments differ only in waveform — in the **harmonics** that ride on the common fundamental frequency.',
        detail:
          'Because any practical waveform can be built from a series of pure sine waves at exact integer multiples of the fundamental — the Fourier series machinery of Chapter 10 — sine waves are the legitimate tool for analysing and testing amplifiers. If the output voltage is 180° out of phase with the input, the amplifier is an **inverting amplifier** and the gain of relation [16.1] is negative; non-inverting types keep input and output in phase, and some amplifiers offer both input terminals.',
      },
      {
        term: 'Attenuators and the transfer function',
        kind: 'definition',
        statement:
          'A two-port black box with input-port voltage $v_i$ and output-port voltage $v_o$ obeys $$v_o = A\\,v_i,$$ where $A$ is the **transfer function**: for $A$ greater than unity the box is an amplifier, and for $A$ less than unity it is an **attenuator**.',
        detail:
          'Attenuators need no separate power supply — the output power is entirely derived from the input power — so a power gain is impossible; attenuation is usefully thought of as negative gain. Volume controls, cable losses and the passive filters of Chapter 16 are all attenuators in exactly this sense.',
      },
      {
        term: 'Block diagrams and their algebra',
        kind: 'method',
        statement:
          'A block diagram represents the operation of a complete system: input on the **left**, output on the **right**, amplifiers drawn as triangles (with or without a surrounding rectangle), power-supply lines drawn with the unearthed line on top, and arrows marking the direction of energy flow; cascaded boxes multiply their transfer functions, $$G = G_1 \\times G_2 \\times \\cdots \\times G_n.$$',
        detail:
          'The diagram does not specify how a box works, nor where the box is found on the physical system — it represents operation only. "Power flow" is itself an awkward phrase, since power is a rate of energy flow; what actually moves is energy. The practical payoff is maintenance: a failed system is diagnosed box by box, the faulty one is replaced, and the failure analysis may even drive a redesign so the problem cannot recur.',
      },
      {
        term: 'Amplifier equivalent networks',
        kind: 'law',
        statement:
          'A linear amplifier behaves — for signal quantities only — as an input resistance $R_i$, together with an output circuit that is either a generator $G_{vo} V_1$ in series with an output resistance $R_o$ (constant-voltage form) or a generator $G_{is} I_1$ in parallel with $R_o$ (constant-current form), giving the loaded gain $$G_v = \\frac{G_{vo} R_L}{R_o + R_L}$$ and the equivalence $$G_{vo} = \\frac{R_o}{R_i}\\,G_{is}.$$',
        detail:
          'Here $G_{vo}$ is the voltage gain with the output open-circuited and $G_{is}$ the current gain with the output short-circuited. Good designs make $R_i$ large (the amplifier then steals almost no input power) and $R_o$ small (little of the generated signal is lost inside). This is exactly the Thévenin and Norton machinery of Chapter 3 applied to amplifiers: $I_s = E/R_s$ converts one form into the other. The networks describe signals only — never the d.c. quantities — and assume an exactly linear amplifier, one producing no waveform distortion.',
      },
      {
        term: 'Decibel gain',
        kind: 'law',
        statement:
          'A power ratio expressed logarithmically is $10\\log_{10}(P_2/P_1)$ **decibels** (one decibel being a tenth of a bel); when the two powers are developed in equal resistances, $$G_{\\mathrm{dB}} = 20\\log_{10}\\frac{V_2}{V_1} = 20\\log_{10}\\frac{I_2}{I_1}.$$',
        detail:
          'The bel proved too large a unit, hence the decibel. Although the voltage form still formally represents a power ratio, it is used extensively — Hughes says "erroneously but by common practice" — for plain voltage and current ratios such as amplifier gain. If $P_2$ exceeds $P_1$ the output is so many dB up on the input; if it is smaller, one evaluates the ratio the other way and quotes dB down. Powers are also referred to 1 mW: 150 mW dissipated in a 15 Ω resistor with 1.5 V r.m.s. across it is $10\\log_{10}(150/1) = 21.76$ dB (Hughes’s Example 18.5). The decisive advantage appears in cascade: logs turn products into sums, so stages simply add their decibels — 40 dB followed by 20 dB gives 60 dB overall.',
      },
      {
        term: 'Frequency response, bandwidth and distortion',
        kind: 'insight',
        statement:
          'Real amplifiers lose gain at high frequencies (shunt capacitance across the load, and the inherent fall of $G_{vo}$) and often at low frequencies (coupling capacitors whose reactance is no longer negligible); the **bandwidth** is the span between the frequencies $f_1$ and $f_2$ at which the gain is **3 dB down** on its mid-band value.',
        detail:
          'Three decibels is the half-power point: with the input held constant, the output voltage at $f_1$ or $f_2$ has fallen to $V_1 = V_o/\\sqrt{2} = 0.71\\,V_o$, so the gain is 0.71G. A d.c. amplifier’s bandwidth is simply $f_2$, because its gain extends down to zero frequency — integrated-circuit amplifiers are of this direct-coupled type, unlike capacitance-coupled amplifiers whose gain collapses at low frequencies. Audio amplifiers (roughly 30 Hz–15 kHz) and video amplifiers (d.c. to several MHz) are **broadband**; tuned amplifiers are narrowband. Distortion comes in three flavours: amplitude distortion (a non-linear characteristic generates harmonics), frequency distortion (unequal gain across the signal’s spectrum) and clipping (driving the output beyond the supply rails) — Hughes illustrates clipping with a 3 mV signal amplified from a 3 V supply: gains beyond about 300 clip.',
      },
    ],
    examples: [
      {
        title: 'Amplifier gains — Hughes’s Example 16.1',
        problem:
          'An amplifier has an input voltage of 8 mV and an output voltage of 480 mV. The input current, in phase with the voltage, is 200 μA, and the power gain is 3000. Determine (a) the voltage gain, (b) the output power, (c) the output current.',
        steps: [
          { label: 'Step 1: Voltage gain', text: '$G_v = v_o/v_i = 480 \\times 10^{-3} / 8 \\times 10^{-3} = 60$.' },
          { label: 'Step 2: Current gain from the gain identity', text: 'Since $G_p = G_v G_i$, the current gain is $G_i = G_p/G_v = 3000/60 = 50$.' },
          { label: 'Step 3: Input power', text: '$P_i = v_i\\,i_i = 8 \\times 10^{-3} \\times 200 \\times 10^{-6} = 1.6\\ \\mu\\mathrm{W}$, so the output power is $P_o = G_p P_i = 3000 \\times 1.6\\ \\mu\\mathrm{W} = 4.8\\ \\mathrm{mW}$.' },
          { label: 'Step 4: Output current', text: '$i_o = G_i\\,i_i = 50 \\times 200\\ \\mu\\mathrm{A} = 10\\ \\mathrm{mA}$.' },
          { label: 'Step 5: Consistency check', text: 'The terminal quantities must close the loop: $v_o i_o = 480\\ \\mathrm{mV} \\times 10\\ \\mathrm{mA} = 4.8\\ \\mathrm{mW} = P_o$, which matches the power-gain route exactly.' },
        ],
        result:
          '$G_v = 60$, $G_i = 50$, $P_o = 4.8$ mW and $i_o = 10$ mA. (The 12th edition’s printed solution slips in part (b): it multiplies the output voltage by the input current, getting 96 μW and 288 mW; recomputing from the definitions gives the self-consistent set above.)',
      },
      {
        title: 'Loaded gain and required source — Hughes’s Example 18.1',
        problem:
          'An integrated-circuit amplifier has an open-circuit voltage gain of 5000, an input resistance of 15 kΩ and an output resistance of 25 Ω. It is supplied from a signal source of internal resistance 5.0 kΩ and feeds a resistive load of 175 Ω. Determine the magnitude of signal-source voltage that produces a 1.0 V output, and the load resistance that would halve the output for the same input.',
        steps: [
          { label: 'Step 1: Loaded voltage gain', text: '$G_v = \\dfrac{G_{vo} R_L}{R_o + R_L} = \\dfrac{5000 \\times 175}{25 + 175} = \\dfrac{875\\,000}{200} = 4375$. (Hughes prints 4350 — the division actually gives 4375, and the printed 230 μV, 307 μV and 19.2 Ω that follow inherit the slip; we carry the exact value.)' },
          { label: 'Step 2: Required amplifier input', text: 'The load needs $V_2 = 1.0$ V, so $V_1 = V_2/G_v = 1.0/4375 = 229\\ \\mu\\mathrm{V}$.' },
          { label: 'Step 3: Source voltage from the input divider', text: 'The input resistance and source resistance divide the source e.m.f.: $V_1 = \\dfrac{R_i}{R_s + R_i} E_s$, so $E_s = \\dfrac{R_s + R_i}{R_i} V_1 = \\dfrac{20}{15} \\times 229\\ \\mu\\mathrm{V} = 305\\ \\mu\\mathrm{V}$.' },
          { label: 'Step 4: Set up the halved-gain condition', text: 'Halving the output for the same input means halving the gain: $G_v = 4375/2 = 2187.5 = \\dfrac{5000 R_L}{25 + R_L}$.' },
          { label: 'Step 5: Solve for the new load', text: '$2187.5 \\times 25 + 2187.5 R_L = 5000 R_L$, so $R_L = 54\\,687.5/2812.5 = 19.4\\ \\Omega$.' },
        ],
        result:
          'About 305 μV of source signal (229 μV reaching the amplifier input) delivers 1.0 V across the 175 Ω load; a 19.4 Ω load halves the output. Note how brutally the 25 Ω output resistance loads the 5000-times amplifier down to 4375 — the equivalent network earns its keep.',
      },
      {
        title: 'From decibels to volts and watts — Hughes’s Example 18.4',
        problem:
          'The voltage gain of an amplifier feeding a resistive load of 1.0 kΩ is 40 dB. Determine the magnitude of the output signal voltage and the signal power in the load when the input signal is 10 mV.',
        steps: [
          { label: 'Step 1: Undo the logarithm', text: '$20\\log_{10}(V_2/V_1) = 40$ gives $\\log_{10}(V_2/V_1) = 2.0$, hence $V_2/V_1 = 10^2 = 100$.' },
          { label: 'Step 2: Output voltage', text: '$V_2 = 100 \\times 10\\ \\mathrm{mV} = 1000\\ \\mathrm{mV} = 1.0\\ \\mathrm{V}$.' },
          { label: 'Step 3: Load power', text: '$P_2 = V_2^2/R_L = 1.0^2/1000 = 1/1000\\ \\mathrm{W} = 1.0\\ \\mathrm{mW}$.' },
        ],
        result:
          '40 dB of voltage gain is a ratio of exactly 100: 10 mV becomes 1.0 V and 1 mW in the 1 kΩ load. Adding a second 20 dB stage would give 60 dB overall — $100 \\times 10 = 1000$ times — because cascaded stages add their decibels.',
      },
    ],
    keyTakeaways: [
      'A system is understood through its subsystems’ input–output relations — the black-box approach — not through their internal construction; a failed box is located from the block diagram and replaced.',
      'The three gains are $G_v = V_2/V_1$, $G_i = I_2/I_1$ and $G_p = G_v G_i$; the extra power comes from a separate d.c. source that the input signal controls.',
      'An attenuator obeys $v_o = A v_i$ with $A < 1$ and needs no separate supply — its output power comes wholly from its input, so attenuation is negative gain.',
      'Cascaded stages multiply gains ($G = G_1 G_2$) and, in decibels, simply add them.',
      'The loaded voltage gain is $G_v = G_{vo} R_L/(R_o + R_L)$ — always below the open-circuit gain, and the smaller the load the greater the shortfall.',
      '$G_{\\mathrm{dB}} = 20\\log_{10}(V_2/V_1)$ for voltage ratios; 3 dB down means half power, i.e. 0.71 of the mid-band voltage gain.',
      'Bandwidth runs between the 3 dB points $f_1$ and $f_2$: high-frequency loss comes from shunt capacitance, low-frequency loss from coupling capacitors, and d.c. amplifiers extend the response down to zero frequency.',
    ],
    quiz: [
      {
        q: 'An amplifier has $G_v = 60$ and $G_i = 50$. Its power gain is:',
        options: ['110', '1.2', '3000', '10'],
        answer: 2,
        explanation: 'Power gain is the product of the other two: $G_p = G_v G_i = 60 \\times 50 = 3000$, equivalently $G_p = V_2 I_2/(V_1 I_1)$. Division would be right only for $G_i$ from $G_p/G_v$.',
      },
      {
        q: 'Which statement about an attenuator is true?',
        options: [
          'It requires a separate power supply to operate',
          'Its output power is entirely derived from its input power',
          'Its transfer function $A$ is greater than unity',
          'It can provide a power gain slightly below unity',
        ],
        answer: 1,
        explanation: 'With $v_o = A v_i$ and $A < 1$ there is no separate supply: the output power comes wholly from the input, so a power gain of any size is impossible — attenuation is negative gain.',
      },
      {
        q: 'Two amplifier stages with voltage gains of 40 dB and 20 dB are cascaded. The overall voltage gain is:',
        options: ['60 times', '800 dB', '1000 times', '2 times'],
        answer: 2,
        explanation: 'Decibels add: 40 + 20 = 60 dB overall. Since $20\\log_{10}(V_2/V_1) = 60$, the ratio is $10^3 = 1000$ times.',
      },
      {
        q: 'The bandwidth of an R–C coupled amplifier is defined between the frequencies at which the gain has fallen to:',
        options: ['0.5 of the mid-band gain', '0.71 of the mid-band gain', '0.318 of the mid-band gain', '0.637 of the mid-band gain'],
        answer: 1,
        explanation: 'The 3 dB (half-power) points occur where $V_1 = V_o/\\sqrt{2} = 0.71\\,V_o$: half the power, 71 per cent of the voltage gain. The other numbers belong to the rectifier averages of Chapter 12.',
      },
      {
        q: 'An amplifier has an open-circuit voltage gain of 5000 and an output resistance of 25 Ω. With a 175 Ω load connected, the voltage gain becomes:',
        options: ['5000 — the load does not affect the gain', '4375 — load and output resistance form a divider', '2500 — exactly half the open-circuit gain', '175 — the gain collapses to the load ratio'],
        answer: 1,
        explanation: 'The load and $R_o$ divide the generated signal: $G_v = G_{vo} R_L/(R_o + R_L) = 5000 \\times 175/200 = 4375$, a 12.5 per cent loss to the output resistance.',
      },
      // PYQ-pattern — voltage gain in decibels (rephrased, values changed)
      {
        q: 'An amplifier delivers 1.6 V to a load from a 2.0 mV input, the load and source resistances being equal. Its voltage gain in decibels is closest to:',
        options: ['29 dB', '46 dB', '58 dB', '64 dB'],
        answer: 2,
        explanation: 'Step 1 — Given: input $2.0$ mV, output $1.6$ V, matched resistances so voltage and power decibels agree. Step 2 — Governing definitions: linear gain $A_{v} = \\frac{V_{o}}{V_{in}}$ and $G_{dB} = 20\\log_{10}A_{v}$ for voltage. Step 3 — Algebra: $A_{v} = \\frac{1.6}{0.002} = 800$; $\\log_{10}800 \\approx 2.9031$; $G \\approx 20 \\times 2.9031 = 58.06$ dB. Step 4 — Sanity check: gains near $1000$ sit near $60$ dB, doubling would add $6$ dB, and the sign is positive for amplification. Step 5 — Distractor analysis: 29 dB uses $10\\log_{10}$ for a voltage ratio, 46 dB takes the square root of gain, and 64 dB adds a spurious $6$ dB. Step 6 — Conclude: about 58 dB.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.2
  {
    sectionId: 'ece-e-sigsys-s13',
    readingTime: 11,
    intro:
      'Everything that enters or leaves an electronic system is a signal, and before we can say what a system does to a signal we must say what kind of signal it is. Hughes’s chapter on signals classifies them — continuous or discrete, periodic or aperiodic, deterministic or random, energy or power — and then performs one of the most elegant tricks in engineering: representing any signal as a continuum of impulses, so that a system’s response to a single impulse tells us its response to everything. The machinery that assembles the answer is convolution.',
    objectives: [
      'Classify signals as continuous-time or discrete-time, periodic or aperiodic, deterministic or random, and as energy or power signals',
      'Decide whether a sum of sinusoids is periodic, and find the fundamental period when it is',
      'Express pulses and waveforms using step, ramp and impulse functions, and apply the sifting property',
      'Compute the response of a discrete-time system with the convolution sum, using the sliding-strip and array methods',
      'Apply the convolution integral, convert between impulse and step responses, and explain what deconvolution is for',
    ],
    concepts: [
      {
        term: 'Continuous-time, discrete-time and quantized signals',
        kind: 'definition',
        statement:
          'A **continuous-time** signal is defined at every instant of time — though it need not be a mathematically continuous function, since the step function has a discontinuity yet is still continuous-time; a **discrete-time** signal $x(n)$ has values only at discrete instants, written as a sequence.',
        detail:
          'The speech signal from a microphone is continuous-time; digital telephony samples it at a constant interval $T$, replacing $n$ by $kT$. Sequences also occur naturally without any sampling — the daily maximum temperature of a city, or any business or scientific data logged at intervals. Discrete-time is not the same as quantized: a signal is **quantized** when its values are restricted to a countable set such as eight binary digits. Not every discrete-time signal is quantized, but any signal destined for a digital computer must be both — the A/D and D/A converters of Chapter 18 live exactly on that boundary.',
      },
      {
        term: 'Periodic signals and commensurate frequencies',
        kind: 'law',
        statement:
          'A continuous-time signal is periodic if and only if $x(t + T) = x(t)$ for all $t$, the smallest such $T$ being the period; a sum of two sinusoids is periodic **if and only if the ratio of their periods is a rational number**.',
        detail:
          'For $x(t) = A\\cos(2\\pi f t + \\phi)$ the angular frequency is $\\omega = 2\\pi f$ and $T = 1/f = 2\\pi/\\omega$; a discrete-time sinusoid $x(n) = A\\sin(2\\pi n/N)$ repeats every integer $N$ samples, and its digital angular frequency $\\Omega = 2\\pi/N$ carries units of radians — dimensionless time. Hughes’s worked triple: $x_1 = 10\\sin 3\\pi t$ (period $2/3$ s) plus $x_2 = 20\\cos 5\\pi t$ (period $2/5$ s) repeats with period 2 s — three cycles of $x_1$ and five of $x_2$; but $x_3 = 10\\sin 16t$ (period $\\pi/8$ s) has an irrational period ratio with $x_1$, so their sum never repeats.',
      },
      {
        term: 'Deterministic, random and ergodic signals',
        kind: 'definition',
        statement:
          'A signal that can be represented by an explicit equation — so that all future values are predictable — is **deterministic**; a signal whose future values cannot be predicted with certainty is **random** and can be described only by probabilistic functions such as its mean, variance and distribution.',
        detail:
          'Noise voltage generated in an amplifier is the standard random signal. A random signal is **ergodic** when, among other things, its time averages and its ensemble averages coincide — one long record of one specimen then carries all the statistics of the process. The deterministic-plus-random split is the standard modelling stance of every communications calculation in Section 11.3: wanted signal plus unwanted noise.',
      },
      {
        term: 'Energy signals and power signals',
        kind: 'law',
        statement:
          'The energy and average power of a signal are $$E = \\lim_{T \\to \\infty} \\int_{-T}^{T} x^2(t)\\,dt, \\qquad P = \\lim_{T \\to \\infty} \\frac{1}{2T} \\int_{-T}^{T} x^2(t)\\,dt,$$ and one of three cases holds: finite non-zero $P$ (a **power signal**, with infinite energy), finite $E$ (an **energy signal**, with zero power), or neither.',
        detail:
          'Interpreting $x(t)$ as the current in a 1 Ω resistor, $E$ is the total dissipated energy in joules and $P$ the average power in watts. Hughes’s example: $x(t) = A e^{at}\\gamma(t)$ with $a < 0$ has $E = -A^2/2a$ — finite, hence an energy signal; setting $a = 0$ gives the unit step, whose energy is infinite but whose power is finite. A periodic signal’s average power is obtained by integrating $x^2$ over a single cycle.',
      },
      {
        term: 'Singularity functions: step, ramp and impulse',
        kind: 'definition',
        statement:
          'The **unit step** $\\gamma(t)$ is 0 for $t < 0$ and 1 for $t > 0$; integrating it gives the **unit ramp** $r(t)$ of unit slope; differentiating it gives the **unit impulse** $\\delta(t)$ — zero everywhere except at the origin, infinite in height, and of **unit area**.',
        detail:
          'These are the singularity functions — discontinuous, or with discontinuous derivatives. Linear combinations build real waveforms: a rectangular pulse of height $A$ starting at $t_0$ is $A\\gamma(t - t_0) - A\\gamma(t - t_0 - T)$, and Hughes assembles a triangular pulse from three ramps of slopes $2A/T$, $-4A/T$ and $2A/T$. The impulse is the limit of a rectangular pulse of width $2\\epsilon$ and height $1/2\\epsilon$ as $\\epsilon \\to 0$; connecting an ideal capacitor across a battery draws precisely such an impulsive current — a very large current for a very short time. The discrete-time impulse needs no infinities: $\\delta(n) = 1$ for $n = 0$ and 0 otherwise.',
      },
      {
        term: 'Signals as a continuum of impulses',
        kind: 'theorem',
        statement:
          'Any signal can be represented exactly as $$x(t) = \\int_{-\\infty}^{\\infty} x(\\tau)\\,\\delta(t - \\tau)\\,d\\tau,$$ a continuous sum of impulses, each weighted by the signal value at the instant it fires — the **sifting property** of the impulse.',
        detail:
          'The construction approximates $x(t)$ on $[-T, T]$ by $2N + 1 = 2T/\\Delta$ rectangular pulses of width $\\Delta$ and heights $x(k\\Delta)$; writing each pulse as $x(k\\Delta)\\,\\delta(t - k\\Delta)\\,\\Delta$ and letting $\\Delta \\to 0$ turns the sum into the integral, with $k\\Delta$ becoming $\\tau$. Because the impulse is zero everywhere but at one instant and has unit area, multiplying by a signal and integrating sifts out the signal value at that instant. This representation is the doorway to system analysis: know what a system does to every weighted, delayed impulse, and superposition assembles what it does to any input whatsoever.',
      },
      {
        term: 'Impulse response and step response',
        kind: 'law',
        statement:
          'The **impulse response** $h(t)$ — or sequence $h(k)$ — is a system’s output when the input is a unit impulse; the **step response** $g(t)$ is its output for a unit step, and the two are linked by $$g(t) = \\int_0^t h(\\tau)\\,d\\tau \\qquad \\text{and} \\qquad h(t) = \\frac{dg(t)}{dt}.$$',
        detail:
          'The step response is the running integral of the impulse response, and the impulse response is the time derivative of the step response — intuitively so, because the impulse is the derivative of the step. This is also the practical route to measurement: a true impulse cannot be generated and would be undesirable to apply (an impulsive voltage can wreck a circuit), but a step is easy, so $h(t)$ is obtained by differentiating a recorded step response. In discrete time the running integral becomes the running sum $g(k) = \\sum_{i=0}^{k} h(i)$, and differentiation becomes the first difference $h(k) = g(k) - g(k-1)$.',
      },
      {
        term: 'The convolution sum',
        kind: 'law',
        statement:
          'For a discrete-time system with impulse response $h(k)$, the response to any input sequence $u(k)$ is $$y(k) = \\sum_{i=-\\infty}^{\\infty} u(i)\\,h(k - i) = h(k) * u(k),$$ with $h * u = u * h$ (commutative), and the result is longer than either operand — the lengths add, less one.',
        detail:
          'Each input sample $u(i)$ is an impulse of strength $u(i)$ firing at time $i$; the system still echoes it $k - i$ samples later with strength $h(k-i)$, and the output at time $k$ sums all the echoes that have arrived. Two manual methods: the **sliding strip** — write $u$ and $h$ on strips, reverse the $h$ strip, slide it along, multiply aligned entries and add; and the **array method** — tabulate all products $h(i)u(j)$ and sum along diagonals: the diagonal through $h(3)u(0)$, $h(2)u(1)$, $h(1)u(2)$, $h(0)u(3)$ is exactly $y(3)$. Both are just bookkeeping for superposition — the same principle that powered the network theorems of Chapter 3.',
      },
      {
        term: 'The convolution integral and deconvolution',
        kind: 'law',
        statement:
          'For a continuous-time system, $$y(t) = \\int_{-\\infty}^{\\infty} u(\\tau)\\,h(t - \\tau)\\,d\\tau = u(t) * h(t):$$ fold $h$ about the vertical axis, shift it to the instant $t$, multiply by $u$, and integrate the product.',
        detail:
          'When both input and system are causal, the limits collapse to $\\int_0^t$ — the folded impulse response cannot reach into the future. Summation in the discrete case is replaced by integration in the continuous one; everything else, including commutativity, carries over. **Deconvolution** is the inverse problem: given input and output, find the impulse response — **system identification**, one standard way to build a linear model from measured input–output data; or given output and impulse response, find the input — the everyday task of control engineering, where the objective is to force a specified output. By convolution’s commutativity the two inverse problems are mathematically the same problem.',
      },
    ],
    examples: [
      {
        title: 'Are these sums periodic? — Hughes’s worked classification',
        problem:
          'Consider the sinusoids $x_1(t) = 10\\sin 3\\pi t$, $x_2(t) = 20\\cos 5\\pi t$ and $x_3(t) = 10\\sin 16t$. Which of the sums $x_1 + x_2$ and $x_1 + x_3$ is periodic, and with what period?',
        steps: [
          { label: 'Step 1: Individual periods', text: 'From $T = 2\\pi/\\omega$: $T_1 = 2\\pi/3\\pi = 2/3$ s, $T_2 = 2\\pi/5\\pi = 2/5$ s and $T_3 = 2\\pi/16 = \\pi/8$ s.' },
          { label: 'Step 2: Test the first pair', text: 'The ratio of periods is $(2/3) \\div (2/5) = 5/3$ — a rational number — so $x_1 + x_2$ is periodic.' },
          { label: 'Step 3: Find the fundamental period', text: 'The smallest interval holding an integer number of both cycles is 2 s: it fits $2 \\div 2/3 = 3$ complete cycles of $x_1$ and $2 \\div 2/5 = 5$ complete cycles of $x_2$.' },
          { label: 'Step 4: Test the second pair', text: 'The ratio $(2/3) \\div (\\pi/8) = 16/3\\pi$ is irrational — no interval contains an integer number of both cycles, so $x_1 + x_3$ never exactly repeats: it is aperiodic.' },
        ],
        result: '$x_1 + x_2$ is periodic with period 2 s (3 cycles of the $3\\pi$ rad/s component, 5 of the $5\\pi$ rad/s component); $x_1 + x_3$ is aperiodic. The test is always the rationality of the period ratio.',
      },
      {
        title: 'Convolution sum — Hughes’s Example 24.1',
        problem:
          'A discrete-time system has impulse response sequence $h(k) = 0.5^k = \\{1,\\ 0.5,\\ 0.25,\\ 0.125,\\ 0.0625,\\ \\ldots\\}$. Find the output sequence when the input is $u(k) = \\{1,\\ 0,\\ -1,\\ -1,\\ 1,\\ 0\\}$.',
        steps: [
          { label: 'Step 1: Build the product array', text: 'Rows are the impulse response, columns the input (Hughes’s Table 24.2). Row $h(0) = 1$ gives $1, 0, -1, -1, 1, 0$; row $h(1) = 0.5$ gives $0.5, 0, -0.5, -0.5, 0.5, 0$; row $h(2) = 0.25$ gives $0.25, 0, -0.25, -0.25, 0.25, 0$; each further row halves again.' },
          { label: 'Step 2: First diagonal', text: 'Summing the diagonal that starts at $h(0)u(0)$: $y(0) = 1$.' },
          { label: 'Step 3: Second diagonal', text: '$y(1) = h(0)u(1) + h(1)u(0) = 0 + 0.5 = 0.5$.' },
          { label: 'Step 4: Third diagonal', text: '$y(2) = h(0)u(2) + h(1)u(1) + h(2)u(0) = -1 + 0 + 0.25 = -0.75$.' },
          { label: 'Step 5: Fourth and fifth diagonals', text: '$y(3) = h(0)u(3) + h(1)u(2) + h(2)u(1) + h(3)u(0) = -1 - 0.5 + 0 + 0.125 = -1.375$; then $y(4) = h(0)u(4) + h(1)u(3) + h(2)u(2) + h(3)u(1) + h(4)u(0) = 1 - 0.5 - 0.25 + 0 + 0.0625 = 0.3125$.' },
        ],
        result:
          '$y = \\{1,\\ 0.5,\\ -0.75,\\ -1.375,\\ 0.3125,\\ \\ldots\\}$ — the sliding-strip method and the array-diagonal method give identical values, both equal to the defining sum $y(k) = u_0 h_k + u_1 h_{k-1} + \\cdots + u_k h_0$. Every output sample is the complete history of the input, weighted by how much impulse response has elapsed since each sample arrived.',
      },
      {
        title: 'Step response from impulse response — Hughes’s Example 24.2',
        problem: 'The impulse response sequence of a discrete-time system is $h(k) = 10(0.6)^k$. Determine the step response $g(k)$.',
        steps: [
          { label: 'Step 1: Apply the running sum', text: 'The step input is 1 for every sample from $k = 0$, so $g(k) = \\sum_{i=0}^{k} 10(0.6)^i$ — a finite geometric series with ratio 0.6.' },
          { label: 'Step 2: Close the form', text: '$g(k) = 10 \\times \\dfrac{1 - 0.6^{k+1}}{1 - 0.6} = 25\\left(1 - 0.6^{k+1}\\right) = 25 - 15(0.6)^k$.' },
          { label: 'Step 3: Check by direct summation', text: '$g(0) = 25 - 15 = 10 = h(0)$; $g(1) = 25 - 9 = 16 = 10 + 6$; $g(2) = 25 - 5.4 = 19.6 = 16 + 3.6$. Each new value adds exactly one more impulse-response sample, as the running sum demands.' },
        ],
        result:
          '$g(k) = 25 - 15(0.6)^k$: a step response rising from 10 towards the asymptote 25. (Hughes prints $50(1 - 0.6^{k+1})$ — exactly twice the series; the printed form gives $g(0) = 20 \\neq h(0) = 10$, so the factor of two is a slip in the 12th edition.)',
      },
    ],
    keyTakeaways: [
      'Signals split along four independent axes — continuous or discrete time, periodic or aperiodic, deterministic or random, energy or power — and quantization is a further, digital requirement.',
      'A sum of sinusoids is periodic if and only if the ratio of their periods is rational: $10\\sin 3\\pi t + 20\\cos 5\\pi t$ repeats every 2 s, while a pair with an irrational period ratio never repeats.',
      'A power signal has finite non-zero average power and infinite energy; an energy signal has finite energy and zero power. The step is a power signal; $Ae^{at}\\gamma(t)$ with $a < 0$ is an energy signal with $E = -A^2/2a$.',
      'The impulse has unit area and sifts: $x(t) = \\int x(\\tau)\\,\\delta(t - \\tau)\\,d\\tau$ represents any signal as a continuum of weighted impulses.',
      'Step and impulse responses are linked by integration and differentiation — so the impulse response of a real system is measured by differentiating a recorded step response.',
      'The convolution sum $y(k) = \\sum u(i)h(k-i)$ and the convolution integral $y(t) = \\int u(\\tau)h(t-\\tau)\\,d\\tau$ compute the response to any input from the impulse response alone — pure superposition.',
      'Deconvolution runs convolution backwards: system identification from input–output data, or input recovery from output and system — the same mathematics by commutativity.',
    ],
    quiz: [
      {
        q: 'The sum $20\\cos 5\\pi t + 10\\sin 16t$ is:',
        options: [
          'Periodic with period 2 s',
          'Periodic with period 2/5 s',
          'Aperiodic, because the ratio of the two periods is irrational',
          'Periodic with period $\\pi/8$ s',
        ],
        answer: 2,
        explanation:
          'The periods are $2/5$ s and $\\pi/8$ s; their ratio $16/5\\pi$ is irrational, so no finite interval contains an integer number of both cycles and the sum never repeats exactly.',
      },
      {
        q: 'The unit step function $\\gamma(t)$ is:',
        options: [
          'An energy signal with $E = 1$',
          'A power signal with finite average power',
          'Neither an energy nor a power signal',
          'A random signal',
        ],
        answer: 1,
        explanation:
          'Integrating $\\gamma^2(t)$ over all time diverges — infinite energy — but the average over $[-T, T]$ tends to one half, which is finite: a power signal. It is the $a = 0$ limit of $Ae^{at}\\gamma(t)$, an energy signal for every $a < 0$.',
      },
      {
        q: 'A linear system’s step response is $g(t)$. Its impulse response is:',
        options: [`$\\int_0^t g(\\tau)\\,d\\tau$`, `$dg/dt$`, `$g(t)\\,\\delta(t)$`, `$g(t) - g(t-1)$`],
        answer: 1,
        explanation:
          'The impulse is the derivative of the step, so the impulse response is the derivative of the step response — and conversely the step response is the running integral of the impulse response. The first difference $g(k) - g(k-1)$ is the discrete-time version.',
      },
      {
        q: 'With $h(k) = 0.5^k$ and input $u(k) = \\{1,\\ 0,\\ -1\\}$, the output $y(2)$ is:',
        options: ['0.25', '-0.75', '-1', '1.25'],
        answer: 1,
        explanation:
          '$y(2) = u(0)h(2) + u(1)h(1) + u(2)h(0) = 0.25 + 0 - 1 = -0.75$: each input sample weighted by how much impulse response has elapsed since it fired.',
      },
      {
        q: 'Deconvolution is best described as:',
        options: [
          'Computing a system’s output from its input and impulse response',
          'Recovering the impulse response — or the input — from the other two signals',
          'Discretizing a continuous-time convolution integral',
          'The commutative property of convolution',
        ],
        answer: 1,
        explanation:
          'Deconvolution inverts convolution: with input and output known it yields the impulse response (system identification); with output and impulse response known it yields the input that produced it. The forward problem is the first option.',
      },
      // PYQ-pattern — linear convolution of short sequences (rephrased, values changed)
      {
        q: 'A discrete-time system has impulse response $h = [1, 2]$ and input $x = [2, 1, 3]$. The linear convolution $y = x ∗ h$ equals:',
        options: ['[2, 3, 5, 6]', '[2, 5, 5, 6]', '[2, 5, 7, 3]', '[4, 2, 6, 0]'],
        answer: 1,
        explanation: 'Step 1 — Given: $x_{0} = 2$, $x_{1} = 1$, $x_{2} = 3$ and $h_{0} = 1$, $h_{1} = 2$. Step 2 — Governing rule: $y_{n} = \\sum_{k} x_{k}h_{n-k}$ with zero padding outside the defined ranges. Step 3 — Algebra: $y_{0} = 2 \\times 1 = 2$; $y_{1} = 2 \\times 2 + 1 \\times 1 = 5$; $y_{2} = 1 \\times 2 + 3 \\times 1 = 5$; $y_{3} = 3 \\times 2 = 6$, so $y = [2, 5, 5, 6]$. Step 4 — Sanity check: length is $3 + 2 - 1 = 4$, the sum $\\sum y = \\sum x \\sum h = 6 \\times 3 = 18$ matches $2 + 5 + 5 + 6$, and causality holds. Step 5 — Distractor analysis: the first option misaligns the second tap, the third inflates the middle sum, and the fourth scales instead of convolving. Step 6 — Conclude: the output is $[2, 5, 5, 6]$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 11.3
  {
    sectionId: 'ece-e-sigsys-s14',
    readingTime: 12,
    intro:
      'A signal is only useful if it survives the journey between source and destination — and every journey has a price: limited bandwidth, noise and distortion. Hughes’s three communications chapters assemble the whole chain: analogue and digital signalling, modulation onto carriers, filters and demodulation at the receiver, the channel-capacity mathematics of Shannon, and the medium itself, copper or glass. The story ends with fibre optics, where carrier frequencies of order $10^{14}$ Hz turn bandwidth from a scarcity into an embarrassment.',
    objectives: [
      'Distinguish analogue and digital signals, and explain why digital transmission regenerates distorted pulses',
      'Quantify bandwidth requirements for speech, television and telephone channels, and lay out a frequency division multiplex plan',
      'Explain amplitude modulation, its sidebands and modulation index, together with frequency and digital modulation schemes',
      'Apply the Shannon–Hartley law, entropy and Huffman coding to channel and source design',
      'Describe fibre-optic transmission: refraction, total internal reflection, attenuation windows and the choice between laser and LED sources',
    ],
    concepts: [
      {
        term: 'Analogue signals, transducers and distortion',
        kind: 'definition',
        statement:
          'An **analogue** signal varies in direct proportion to the information carried — continuously, taking any of an infinite number of values between the system’s operating limits; a **transducer** converts the physical quantity into the voltage or current that constitutes the signal.',
        detail:
          'Hughes’s transducer list: microphones (sound to e.m.f.), pressure transducers, tachometers (speed to e.m.f. through $e = Blv$) and light detectors. The transmission chain is always conversion → transmission → reconversion. Analogue systems are limited by amplifier linearity: a gain-of-10 amplifier should turn 7 mV into 70 mV, but if it delivers 69.5 mV the output waveform no longer matches the input — **distortion**, the reason a singer can sound unclear or as if drowning.',
      },
      {
        term: 'Digital signals, bits and regeneration',
        kind: 'definition',
        statement:
          'A **digital** signal takes one of a limited number of values — crudely ON and OFF, described as 1 and 0; a pulse is a **binary digit (bit)**, the **pulse period** is the time between corresponding points of successive pulses, and the **bit rate** counts pulses per second.',
        detail:
          'The **duty cycle** is the ratio of pulse width to period, and in a return-to-zero system each pulse is followed by a zero interval so pulses can be told apart: a stream with 10 μs between pulses carries 100 kilobits per second. Morse code — the first digital signalling — used short and long pulses, and gave its shortest codes to the commonest characters. The decisive advantage is regeneration: a distorted received pulse can still be recognized as *a* pulse and reissued as a clean one, so digital systems are self-correcting — which is why the compact disc replaced the analogue cassette even though the final sound is analogue. Human senses, however, remain analogue, so input and output stages stay analogue even when everything between them is digital.',
      },
      {
        term: 'Bandwidth as the fundamental constraint',
        kind: 'law',
        statement:
          'The **bandwidth** is the range of frequencies over which a system operates satisfactorily; the bandwidth required grows with both the **complexity** of the information and the **speed** at which it is delivered — signal components outside the channel bandwidth are partially or entirely lost.',
        detail:
          'Hughes’s numbers: most people hear 25 Hz–16 kHz, and audio tape at 5 cm/s captures it; dubbing at 20 cm/s quadruples every frequency in the transfer, so the copying chain needs up to 64 kHz. A television picture demands 25 images per second of 625 lines each — about 5 MHz. A telephone line manages only about 3.4 kHz, which is why a single transmitted image takes seconds or even minutes. Replacing speech by music raises a channel’s requirement to about 40 kHz.',
      },
      {
        term: 'Modulation, sidebands and multiplexing',
        kind: 'method',
        statement:
          '**Modulation** shifts a signal’s spectrum onto a carrier of frequency $f_c$; amplitude modulation makes the signal control the carrier’s amplitude, producing an **upper sideband** ($f_c$ to $f_c + f_s$) and a **lower sideband** ($f_c - f_s$ to $f_c$) and so doubling the occupied bandwidth from $f_s$ to $2f_s$. The depth of modulation is $$m = \\frac{V_{\\max} - V_{\\min}}{V_{\\max} + V_{\\min}},$$ from 0 (unmodulated) to 1 (fully modulated).',
        detail:
          'A 120 kHz carrier amplitude-modulated by a 4 kHz speech signal occupies 116–124 kHz — which is why frequency division multiplex (FDM) plans leave generous gaps between carriers. Hughes’s example stacks 3.4 kHz speech channels at 10 kHz intervals, giving 10 channels on a 100 kHz line; a tighter plan uses 8 kHz channels centred on 40, 50 and 60 kHz with only 2 kHz guard gaps, so a filter must fully accept 54 kHz yet fully reject 56 kHz — impossible for any real filter. **Single sideband** transmission halves the bandwidth at the cost of a significantly more complicated system. Tuning a radio means selecting the carrier $f_c$, with the receiver’s response covering the sidebands above and below it. In **frequency modulation** the signal controls the carrier’s frequency, and in digital schemes (ASK, FSK, PSK) it switches amplitude, frequency or phase — forms that resist amplitude noise, which is why Chapter 18’s digital systems modulate phase.',
      },
      {
        term: 'Filters, demodulation and the receiver chain',
        kind: 'method',
        statement:
          'A **bandpass filter** passes one channel’s band and rejects the rest; **demodulation** is the reversal of modulation — removing the carrier at the receiver, typically with a simple rectifier network, so the signal returns to its original frequency range.',
        detail:
          'A speech channel on a 50 kHz carrier needs a filter passing 46–54 kHz. The classic receiver chain runs aerial → tuned bandpass filter (station selection) → radio-frequency amplifier → demodulator → audio-frequency amplifier → loudspeaker: the aerial picks up the transmitted signal, the filter selects the station, the modulated carrier is amplified because it is small, the demodulator strips the carrier, and the audio amplifier drives the speaker. The parallel-resonant RLC circuits of Chapter 9 give a bandpass response — but a rounded one that treats frequencies within the band unequally (distortion again) and rolls off too slowly at the edges, so real filters need more complex designs.',
      },
      {
        term: 'Channel capacity: the Shannon–Hartley law',
        kind: 'law',
        statement:
          'The theoretical maximum rate at which information can pass error-free through a channel of bandwidth $w$ and signal-to-noise ratio $S/N$ is $$C = w\\log_2\\!\\left(1 + \\frac{S}{N}\\right)$$ bits per second — capacity grows linearly with bandwidth but only logarithmically with signal-to-noise ratio.',
        detail:
          'A ratio quoted in decibels must be converted before use: 20 dB means $S/N = 100$. The theoretical maximum is never quite reached, though modern systems approach it. The same information theory measures a single message: the information in a message of probability $P$ is $I = \\log_2(1/P)$ bits — a coin toss delivers exactly 1 bit when $P = 0.5$ — and the expected information per message, the **entropy** $H = \\sum_i P_i \\log_2(1/P_i)$, is maximized when all $n$ symbols are equiprobable, $H = \\log_2 n$. Eight equiprobable messages thus carry 3 bits each, and 3 bits is the minimum equal-length code for eight messages.',
      },
      {
        term: 'Source coding: Morse, parity and Huffman',
        kind: 'method',
        statement:
          'Source coding matches code lengths to symbol probabilities: **Huffman coding** repeatedly combines the two least probable symbols into a composite until a binary tree is formed, then reads each symbol’s codeword back along the tree; the average length $L = \\sum_i P_i L_i$ always satisfies $L \\ge H$, with equality when probabilities are powers of a half.',
        detail:
          'Morse anticipated the idea a century early: average character length falls from 11.2 dots (unweighted) to 9.04 dots when weighted by letter frequencies — E, occurring 12.77 per cent of the time, is a single dot. **Parity checking** adds one redundant bit so each codeword carries an odd (or even) number of ones: sending K = 1001011 with odd parity as 11001011, a single flipped bit makes the count even and the error is detected — though not located, so retransmission is required, and any even number of errors escapes. On Hughes’s six symbols A–F with probabilities 0.35, 0.2, 0.15, 0.1, 0.1, 0.1, Huffman gives A = 00, B = 11, C = 010, D = 011, E = 100, F = 101 — average length 2.45 bits against entropy 2.4 bits, 98 per cent efficiency with redundancy 0.02. Run-length encoding (fax machines), Lempel–Ziv (which learns probabilities on the fly) and Shannon–Fano (top-down, occasionally a bit longer) are the other classics.',
      },
      {
        term: 'Transmission media: from copper pairs to fibre',
        kind: 'insight',
        statement:
          'Media differ in bandwidth, loss and cost: the copper telephone pair was built for analogue voice; digital hierarchies (ISDN, LANs) push it further; and **optical fibre** offers gigahertz bandwidths over hundreds of kilometres with near-frequency-independent loss.',
        detail:
          'The PSTN — the public switched telephone network — was designed for analogue voice and offers modest data rates (the V34 modem standard is 28.8 kbps). Its fully digital successor ISDN delivers 2B+D: two 64 kbps B channels plus a 16 kbps signalling channel over copper, integrable to 128 kbps, or 30B+D at just under 2 Mbps over fibre. LANs and WANs provide direct digital linking for computers. Fibre’s fundamental advantages: low cost, robustness when packaged, very wide optical bandwidths, link lengths of hundreds of kilometres, and insensitivity to electromagnetic interference. And unlike coaxial cable, whose loss climbs steadily with frequency, fibre attenuation is almost independent of frequency — the comparison that makes fibre the carrier of choice for high-capacity trunk routes. Fibres carry signals at wavelengths of 0.8–1.6 μm (infra-red), where the silica-glass windows sit.',
      },
      {
        term: 'Fibre optics: confinement, acceptance and attenuation',
        kind: 'law',
        statement:
          'Light is kept inside the fibre core by **total internal reflection** at the core–cladding boundary, which requires the cladding to have a lower refractive index $n = c_0/c_{\\mathrm{mat}}$ than the core; a mere 1 per cent index difference confines rays up to 8° from the fibre axis, and light entering within the **acceptance angle** cone is guided.',
        detail:
          'Refraction bends a ray towards the normal when it enters a slower medium; increase the internal angle enough and the refracted ray reaches 90° — beyond that the ray is totally reflected, which is what keeps light in an unclad fibre in air but fails wherever the fibre touches another material: hence the cladding. Even good ordinary glass drops the signal to about 10 per cent after 10 m — 1 per cent after 20 m — so fibres are drawn from ultrapure silica, extending the "10 per cent" distance to about 50 km. Practical fibres are 0.25–0.5 mm overall with cores of 10–80 μm (diode-laser sources, which also deliver roughly two orders of magnitude more power and two orders narrower spectral width than LEDs); larger cores suit the cheaper, longer-lived but slower LEDs. The attenuation characteristic shows a water-impurity hump and two long-haul windows: about 0.5 dB/km at 1.3 μm and about 0.2 dB/km at 1.55 μm. The receiver is a semiconductor photodetector plus amplifier — silicon for signals near 0.8 μm, germanium for 1.2 μm — and long-haul routes add optical repeaters that regenerate the digital signal. Single-mode fibres give the highest capacity; multimode fibres serve short links; by the early 2000s long-haul systems carried 40 Gbps.',
      },
    ],
    examples: [
      {
        title: 'Pulse train: repetition rate and duty cycle — Hughes’s Example 25.1',
        problem: 'Determine the pulse repetition frequency and the duty cycle for the pulse train whose waveform shows a pulse beginning at 5 μs, ending at 13 μs, with the next pulse beginning at 16 μs.',
        steps: [
          { label: 'Step 1: Read the period', text: 'The pulse period is the spacing between corresponding points of successive pulses: $T = 16 - 5 = 11\\ \\mu\\mathrm{s}$.' },
          { label: 'Step 2: Repetition frequency', text: '$f = 1/T = 1/(11 \\times 10^{-6}) = 1.0 \\times 10^{6}/11 = 90.9\\ \\mathrm{kHz}$. (Hughes prints 88 kHz; the book’s own division, $1.0 \\times 10^6/11$, is 90.9 kHz.)' },
          { label: 'Step 3: Pulse width', text: 'The pulse lasts from 5 to 13 μs: width $= 13 - 5 = 8\\ \\mu\\mathrm{s}$.' },
          { label: 'Step 4: Duty cycle', text: 'Duty cycle $=$ width over period $= 8/11 = 0.727$, i.e. 73 per cent — the pulse is present for nearly three-quarters of every period.' },
        ],
        result: 'A period of 11 μs with 8 μs pulses gives a repetition frequency of about 91 kHz and a duty cycle of 73 per cent — an unusually "full" stream, since return-to-zero bit streams normally leave a zero gap between pulses.',
      },
      {
        title: 'Channel capacity — Hughes’s Example 26.1, with the decibel conversion done',
        problem: 'A communications system has a bandwidth of 5 kHz and a signal-to-noise ratio of 20 dB. Calculate the theoretical channel capacity.',
        steps: [
          { label: 'Step 1: Convert the ratio', text: 'The Shannon–Hartley law needs a linear ratio, not decibels: $S/N = 10^{20/10} = 100$.' },
          { label: 'Step 2: Apply the law', text: '$C = w\\log_2(1 + S/N) = 5000 \\times \\log_2(101)$ bits per second.' },
          { label: 'Step 3: Evaluate the logarithm', text: '$\\log_2 101 = \\log_{10}101/\\log_{10}2 = 2.0043/0.3010 = 6.66$.' },
          { label: 'Step 4: Capacity', text: '$C = 5000 \\times 6.66 = 33\\,300$ bits per second — about 33 kbps.' },
        ],
        result:
          'The channel carries at most about 33 kbps. Hughes prints "approximately 22 kbps", which is what the formula gives if the decibel figure 20 is fed in as a raw ratio ($5000\\log_2 21 = 22.0$ kbps): forgetting the dB conversion costs a third of the capacity — and in reverse, misleads a design by 50 per cent.',
      },
      {
        title: 'Huffman coding — Hughes’s Example 26.3',
        problem:
          'Six symbols A–F occur with probabilities 0.35, 0.2, 0.15, 0.1, 0.1 and 0.1. Construct a Huffman code, and compare its average length with the entropy.',
        steps: [
          { label: 'Step 1: Combine the two least probable symbols', text: 'E and F (0.1 each) combine to a composite of probability 0.2; re-order the list.' },
          { label: 'Step 2: Keep combining', text: 'D (0.1) and C (0.15) combine to 0.25; then B (0.2) joins the EF composite (0.2) to make 0.4; then A (0.35) joins the CD composite (0.25) to make 0.6; finally 0.6 and 0.4 make the root of probability 1.0.' },
          { label: 'Step 3: Label and read the codewords', text: 'Walking back from the root, labelling upper routes 0 and lower routes 1 (right to left along the tree): A = 00, B = 11, C = 010, D = 011, E = 100, F = 101 — no codeword is the prefix of another.' },
          { label: 'Step 4: Average length', text: '$L = \\sum P_i L_i = 2(0.35 + 0.2) + 3(0.15 + 0.1 + 0.1 + 0.1) = 1.1 + 1.35 = 2.45$ bits per symbol.' },
          { label: 'Step 5: Entropy and efficiency', text: '$H = \\sum P_i\\log_2(1/P_i) = 0.53 + 0.46 + 0.41 + 0.33 + 0.33 + 0.33 = 2.40$ bits, so the efficiency is $\\eta = H/L = 2.40/2.45 = 0.98$ and the redundancy is $r = 1 - \\eta = 0.02$.' },
        ],
        result:
          'A = 00, B = 11, C = 010, D = 011, E = 100, F = 101, with $L = 2.45$ bits against $H = 2.4$ bits — 98 per cent efficient, essentially optimal because the probabilities are close to powers of one half. Equal-length coding would have needed 3 bits per symbol: Huffman saves 18 per cent of the channel.',
      },
    ],
    keyTakeaways: [
      'Analogue signals vary in direct proportion to the information and are limited by amplifier linearity; digital signals take discrete values and can be regenerated — reissued clean — after distortion.',
      'Bandwidth is the fundamental channel constraint: telephone speech 3.4 kHz, music about 40 kHz, tape dubbing at four times speed 64 kHz, television about 5 MHz.',
      'Amplitude modulation on carrier $f_c$ by signal $f_s$ occupies $f_c - f_s$ to $f_c + f_s$; the modulation index is $m = (V_{\\max} - V_{\\min})/(V_{\\max} + V_{\\min})$, and FDM stacks such channels at carrier intervals.',
      'The receiver chain is aerial, tuned bandpass filter, RF amplifier, demodulator (rectifier), audio amplifier — filters separate channels, demodulation removes the carrier.',
      'The Shannon–Hartley law $C = w\\log_2(1 + S/N)$ bounds the error-free rate; convert dB to a ratio first, and remember capacity is linear in bandwidth but only logarithmic in signal-to-noise.',
      'Information is $I = \\log_2(1/P)$ bits and entropy $H = \\sum P_i\\log_2(1/P_i)$; Huffman coding achieves $L$ within a whisker of $H$ (2.45 versus 2.4 bits in Hughes’s example, 98 per cent).',
      'Fibres confine light by total internal reflection at a cladding of slightly lower refractive index; ultrapure silica attains 0.2 dB/km at the 1.55 μm window, and laser sources outrun LEDs in power, spectral width and speed.',
    ],
    quiz: [
      {
        q: 'A 120 kHz carrier is amplitude-modulated by a single 4 kHz tone. The transmitted signal occupies:',
        options: ['116 kHz to 124 kHz', '120 kHz to 128 kHz only', '116 kHz to 120 kHz only', '4 kHz to 8 kHz'],
        answer: 0,
        explanation:
          'AM produces an upper sideband from $f_c$ to $f_c + f_s$ and a lower sideband from $f_c - f_s$ to $f_c$: here 116–120 kHz and 120–124 kHz, doubling the original 4 kHz signal bandwidth — the reason FDM plans leave gaps between carriers.',
      },
      {
        q: 'Why can digital transmission tolerate a distorting channel that would ruin an analogue signal?',
        options: [
          'Digital signals are always much smaller, so distortions scale down too',
          'The receiver knows the signal can only be a pulse, so it can reissue a clean pulse',
          'Digital channels have unlimited bandwidth',
          'Distortion cancels out when many pulses are averaged',
        ],
        answer: 1,
        explanation:
          'Because the alphabet is finite — a pulse is either ON or OFF — the distorted received waveform can be recognized and replaced by a perfect replica: regeneration. Analogue waveforms have infinitely many possible shapes, so a distorted analogue signal is unrecoverable.',
      },
      {
        q: 'A channel’s bandwidth is doubled while its signal-to-noise ratio is held constant. Its Shannon capacity:',
        options: ['Doubles', 'Quadruples', 'Increases by only 1 bit per symbol', 'Stays the same'],
        answer: 0,
        explanation:
          '$C = w\\log_2(1 + S/N)$ is linear in bandwidth $w$, so doubling $w$ doubles $C$. Doubling the signal-to-noise ratio instead only adds $\\log_2 2 = 1$ bit per Hz-second — bandwidth buys far more than power.',
      },
      {
        q: 'Light stays inside an optical fibre core because:',
        options: [
          'The plastic coating reflects it back',
          'Total internal reflection occurs at the core–cladding boundary, whose index is slightly lower',
          'The glass absorbs stray rays',
          'The cladding has a higher refractive index than the core',
        ],
        answer: 1,
        explanation:
          'The cladding must have the lower refractive index — a difference of even 1 per cent suffices, confining rays up to 8° from the axis. Rays meeting the boundary beyond the critical angle are totally reflected; a cladding of higher index would refract the light out of the fibre.',
      },
      {
        q: 'A Huffman code has average length $L$ and its source entropy is $H$. Then:',
        options: ['$L = H$ always', '$L \\ge H$, with equality when probabilities are powers of a half', '$L \\le H$, saving bits by design', '$L$ and $H$ are unrelated'],
        answer: 1,
        explanation:
          'The entropy is the lower bound on average code length: Huffman achieves $L \\ge H$ with equality in the special case of probabilities that are integral powers of one half — Hughes’s example lands at $L = 2.45$ bits against $H = 2.4$ bits, 98 per cent efficient.',
      },
    ],
  },
]

export const elecCh11Formulas: FormulaEntry[] = [
  {
    chapterId: 'ece-e-sigsys',
    section: '4.12',
    name: 'Voltage gain in decibels',
    formula: 'G(dB) = 20·log₁₀(V₂/V₁)',
    note: 'same factor for current ratios; still formally a power ratio',
    latex: 'G_{\\mathrm{dB}} = 20\\,\\log_{10}\\!\\left(\\frac{V_2}{V_1}\\right)',
  },
  {
    chapterId: 'ece-e-sigsys',
    section: '4.12',
    name: 'Power ratio in decibels',
    formula: 'G(dB) = 10·log₁₀(P₂/P₁)',
    note: 'one decibel is a tenth of a bel; dB up or dB down on a reference',
    latex: 'G_{\\mathrm{dB}} = 10\\,\\log_{10}\\!\\left(\\frac{P_2}{P_1}\\right)',
  },
  {
    chapterId: 'ece-e-sigsys',
    section: '4.12',
    name: 'Cascade gain',
    formula: 'G = G₁·G₂; G(dB) = G₁(dB) + G₂(dB)',
    note: 'stages multiply gains and therefore add decibels',
    latex: 'G = G_1 G_2, \\qquad G_{\\mathrm{dB}} = G_{1\\mathrm{dB}} + G_{2\\mathrm{dB}}',
  },
  {
    chapterId: 'ece-e-sigsys',
    section: '4.12',
    name: 'Loaded voltage gain',
    formula: 'Gv = Gvo·RL/(Ro + RL)',
    note: 'output resistance and load form a divider on the open-circuit gain',
    latex: 'G_v = \\frac{G_{vo} R_L}{R_o + R_L}',
  },
  {
    chapterId: 'ece-e-sigsys',
    section: '4.13',
    name: 'Convolution sum',
    formula: 'y(k) = Σᵢ u(i)·h(k − i)',
    note: 'discrete-time output from impulse response; commutative',
    latex: 'y(k) = \\sum_{i=-\\infty}^{\\infty} u(i)\\,h(k - i)',
  },
  {
    chapterId: 'ece-e-sigsys',
    section: '4.13',
    name: 'Convolution integral',
    formula: 'y(t) = ∫u(τ)·h(t − τ)dτ',
    note: 'fold h, shift by t, multiply by u and integrate',
    latex: 'y(t) = \\int_{-\\infty}^{\\infty} u(\\tau)\\,h(t - \\tau)\\,d\\tau',
  },
  {
    chapterId: 'ece-e-sigsys',
    section: '4.14',
    name: 'Shannon–Hartley law',
    formula: 'C = w·log₂(1 + S/N)',
    note: 'error-free capacity in bits per second; convert dB to a ratio first',
    latex: 'C = w\\,\\log_2\\!\\left(1 + \\frac{S}{N}\\right)',
  },
  {
    chapterId: 'ece-e-sigsys',
    section: '4.14',
    name: 'AM modulation index',
    formula: 'm = (Vₘₐₓ − Vₘᵢₙ)/(Vₘₐₓ + Vₘᵢₙ)',
    note: 'envelope depth from 0 to 1; overmodulation distorts',
    latex: 'm = \\frac{V_{\\max} - V_{\\min}}{V_{\\max} + V_{\\min}}',
  },
]
