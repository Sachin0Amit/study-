import type { SectionContent } from '../library'

// ============================================================================
// Lesson content for the Data Converters chapter of the devices & circuits
// track (chapter 'ece-e-dataconv', 5 sections). Syllabus scope researched
// from space-electronics and mixed-signal assessment patterns and university
// analog-IC curricula — provenance documented in research/*.md; product
// rule: no exam names in UI. Technical spine follows the standard
// data-conversion literature (Razavi, "Principles of Data Conversion System
// Design"; Johns & Martin, "Analog Integrated Circuit Design"; Kester, "Data
// Conversion Handbook"), reusing the op-amp network analysis from the
// integrated-circuits sections of this track. All worked-example numbers
// were re-verified by hand. Math is LaTeX, rendered by KaTeX via the
// RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const dataConvertersContent: SectionContent[] = [
  // ---------------------------------------------------------- dataconv §1
  {
    sectionId: 'ece-e-dataconv-s1',
    readingTime: 8,
    prerequisites: [
      'Binary and hexadecimal number systems',
      'Op-amp inverting configuration and virtual-ground analysis',
      'Decibel arithmetic for voltage and power ratios',
    ],
    intro: 'Every mixed-signal system — a spacecraft telemetry chain digitizing sensor voltages, an audio codec, a microcontroller reading a thermistor — crosses the analog-to-digital boundary through two operations: sampling, which freezes time, and quantization, which rounds amplitude. The arithmetic of that boundary (how many codes an N-bit converter owns, how big one LSB is in millivolts, which voltage a given binary word represents) is compact enough to be tested in a single question, which is exactly why code-count, LSB and SQNR numericals appear so often in engineering selection assessments and recruitment tests for electronics and space-systems roles. This section builds the complete toolkit: resolution and code count, the two LSB conventions, unipolar and bipolar range mappings, the quantization-error bound with the $6.02N + 1.76$ dB law, and the sampling theorem that decides where the anti-alias filter must sit. Every architecture section that follows leans on these numbers, so treat this as the conversion table for the whole chapter.',
    objectives: [
      'Compute code count, LSB size and code-to-voltage mappings for unipolar and bipolar ranges',
      'Quantify quantization error and signal-to-quantization-noise ratio for an N-bit converter',
      'Apply the sampling theorem and place the anti-alias filter correctly in a signal chain',
      'Distinguish the FSR/2^N and FSR/(2^N − 1) LSB conventions and convert between them',
    ],
    concepts: [
      {
        term: 'Resolution and code count',
        kind: 'definition',
        statement: 'An N-bit converter distinguishes **$2^N$ discrete codes**; each added bit doubles the count: 8 bits → 256, 10 bits → 1,024, 12 bits → 4,096, 16 bits → 65,536.',
        detail: 'The count follows from N independent binary decisions. In assessment numericals it is nearly always the first quantity to establish — "how many codes", "how many decision levels", "how many resistor taps" all reduce to $2^N$ (or $2^N - 1$ for the physical elements that span between codes). The exponential bites hard: two extra bits multiply the code count by four, which is why resolution is never free — every extra bit costs silicon area, input capacitance, power or conversion time in whichever architecture is used.',
      },
      {
        term: 'LSB size and the two conventions',
        kind: 'notation',
        statement: 'The least significant bit is the voltage weight of one code step: $\\text{LSB} = \\frac{\\text{FSR}}{2^N}$ in the datasheet convention, or $\\text{LSB} = \\frac{\\text{FSR}}{2^N - 1}$ when code 0 and code $2^N - 1$ must land exactly on the range endpoints.',
        detail: 'For a 0–5 V 8-bit converter these give $5/256 = 19.53$ mV and $5/255 = 19.61$ mV — close, but a half-percent difference that decides which multiple-choice option is correct. The $\\text{FSR}/2^N$ form is the default in converter practice: the full-scale code $2^N - 1$ then outputs $(2^N - 1)\\,\\text{LSB} = \\text{FSR} - \\text{LSB}$, one step short of the nominal full scale. Unless a question defines the endpoints explicitly, compute with $\\text{FSR}/2^N$ and check the options: 4.980 V, not 5.000 V, is the true full-scale output of a 0–5 V 8-bit DAC under this convention.',
      },
      {
        term: 'Unipolar and bipolar ranges',
        kind: 'definition',
        statement: 'Unipolar ranges such as 0–5 V and 0–10 V map code $D$ to $V = D \\cdot \\text{LSB}$; bipolar ranges such as $\\pm 5$ V and $\\pm 10$ V use offset-binary coding, $V = (D - 2^{N-1}) \\cdot \\text{LSB}$ with $\\text{LSB} = \\frac{2V_{range}}{2^N}$, so the mid-scale code $10\\ldots0$ reads 0 V.',
        detail: 'Bipolar converters may instead emit two’s-complement words, which merely relabel the same staircase by shifting $D$ by $2^{N-1}$. Note that the bipolar step is twice the unipolar step for the same voltage magnitude: a ±5 V 12-bit converter has $\\text{LSB} = 10/4096 = 2.441$ mV. Watch the end asymmetry: code 0 gives exactly −5 V, while the top code gives $+5\\ \\text{V} - 1\\ \\text{LSB}$, because zero cannot be the centre of an even number of codes. Code-to-voltage conversion is a two-line proportionality that assessments test constantly — the worked examples below drill both directions.',
      },
      {
        term: 'Quantization error',
        kind: 'theorem',
        statement: 'An ideal quantizer with mid-tread thresholds rounds every input to the nearest code, so the **quantization error is bounded by $\\pm\\frac{1}{2}$ LSB** and behaves, for busy signals, like additive noise with rms value $\\frac{\\text{LSB}}{\\sqrt{12}}$.',
        detail: 'Plot input against output and the transfer curve is a staircase; plot the error and it is a sawtooth uniform on $[-\\frac{\\text{LSB}}{2}, +\\frac{\\text{LSB}}{2}]$, whose variance is $\\text{LSB}^2/12$. The ±½ LSB bound is the accuracy floor of a single ideal conversion — no averaging of one converter’s readings removes it, because it is the price of rounding itself. Real converters add thermal noise and distortion on top, which is why datasheets quote an effective number of bits (ENOB) below the nominal N.',
      },
      {
        term: 'The SQNR law',
        kind: 'theorem',
        statement: 'For a full-scale sinusoid quantized to N bits, $$\\text{SQNR} = 6.02N + 1.76\\ \\text{dB},$$ so each added bit buys about 6 dB.',
        detail: 'The derivation is three lines: a full-scale sine of amplitude $2^{N-1}$ LSB has rms $\\frac{2^{N-1}}{\\sqrt{2}}$ LSB, the noise rms is $\\frac{1}{\\sqrt{12}}$ LSB, and the power ratio $1.5 \\cdot 2^{2N}$ converts to $6.02N + 1.76$ dB. Landmark values: 8 bits → 49.9 dB, 10 bits → 62.0 dB, 12 bits → 74.0 dB, 16 bits → 98.1 dB. If the signal is smaller than full scale, subtract $20\\log_{10}$ of the amplitude ratio — every halving of amplitude costs 6 dB. A standard assessment task inverts the law: given an SNR budget, find the minimum N (worked example 3).',
      },
      {
        term: 'Sampling theorem and anti-alias filtering',
        kind: 'law',
        statement: 'A signal band-limited to $f_{\\max}$ is exactly recoverable only if $f_s > 2f_{\\max}$ (the Nyquist criterion); any component above $f_s/2$ folds to $|f - kf_s|$ **and cannot be removed after sampling**.',
        detail: 'Aliasing arithmetic: a 45 kHz interferer sampled at 44.1 kHz lands at 0.9 kHz, squarely inside the wanted band. The defence is a low-pass anti-alias filter placed before the sampler, never after it, with its transition band fitted between $f_{\\max}$ and $f_s - f_{\\max}$ (the first mirror of the band). Pushing aliased components below ½ LSB demands roughly 6 dB of stopband attenuation per bit of resolution — about 72 dB for 12 bits. Because zero-width transition bands are unrealizable, practical systems sample at 2.5–10 times the signal bandwidth and accept the filter order that follows.',
      },
    ],
    examples: [
      {
        title: 'Reading a DAC code on a 0–5 V 8-bit converter',
        problem: 'An 8-bit DAC covers 0–5 V. (a) Which output voltage does the code 11010010 produce under the FSR/2^N convention? (b) What would the endpoints-exact convention give?',
        steps: [
          { label: 'Step 1', text: 'Convert the code to decimal: $11010010_2 = 128 + 64 + 16 + 2 = 210$.' },
          { label: 'Step 2', text: 'Size the step: $\\text{LSB} = \\frac{5\\ \\text{V}}{2^8} = \\frac{5}{256} = 19.53$ mV.' },
          { label: 'Step 3', text: 'Map code to voltage: $V = 210 \\times 19.53\\ \\text{mV} = 4.1016\\ \\text{V} \\approx 4.10\\ \\text{V}$.' },
          { label: 'Step 4', text: 'Endpoints convention: $\\text{LSB} = \\frac{5}{255} = 19.61$ mV, so $V = 210 \\times 19.61\\ \\text{mV} = 4.118\\ \\text{V}$. Under the default convention the full-scale code 255 would give $255 \\times 19.53 = 4.980$ V, one LSB short of 5 V.' },
        ],
        result: '(a) $V = 4.102\\ \\text{V}$ with LSB = 19.53 mV; (b) $V = 4.118\\ \\text{V}$ with LSB = 19.61 mV — always confirm which convention a question uses.',
      },
      {
        title: 'Bipolar mapping on a ±5 V 12-bit converter',
        problem: 'A 12-bit converter spans ±5 V with offset-binary coding. (a) Which voltage corresponds to the code 0xC00 (decimal 3072)? (b) Which code represents −1.25 V?',
        steps: [
          { label: 'Step 1', text: 'Step size: $\\text{LSB} = \\frac{\\text{FSR}}{2^N} = \\frac{10\\ \\text{V}}{4096} = 2.4414$ mV; the mid-scale code is $2^{11} = 2048$ (binary 1000 0000 0000), which reads 0 V.' },
          { label: 'Step 2', text: 'Code to voltage: $V = (3072 - 2048) \\times 2.4414\\ \\text{mV} = 1024 \\times 2.4414\\ \\text{mV} = +2.500\\ \\text{V}$.' },
          { label: 'Step 3', text: 'Voltage to code: $D = \\frac{V}{\\text{LSB}} + 2048 = \\frac{-1.25}{0.0024414} + 2048 = -512 + 2048 = 1536$.' },
          { label: 'Step 4', text: 'Check: $1536 = 0110\\ 0000\\ 0000_2$, and $(1536 - 2048) \\times 2.4414\\ \\text{mV} = -1.250$ V. The mapping is exact here because −1.25 V is a whole multiple of the step; general voltages must be rounded to the nearest code.' },
        ],
        result: '(a) $+2.500\\ \\text{V}$; (b) code 1536 (0x600), exact because −1.25 V is an integer multiple of the 2.4414 mV step.',
      },
      {
        title: 'Choosing resolution from an SQNR budget',
        problem: 'A telemetry digitizer must keep signal-to-quantization-noise above 70 dB for a full-scale sinusoidal sensor signal. What is the minimum resolution, and what margin does it provide?',
        steps: [
          { label: 'Step 1', text: 'Write the requirement as an inequality: $6.02N + 1.76 \\ge 70$.' },
          { label: 'Step 2', text: 'Solve: $N \\ge \\frac{70 - 1.76}{6.02} = \\frac{68.24}{6.02} = 11.34$.' },
          { label: 'Step 3', text: 'Round up — resolution is an integer: $N = 12$ bits.' },
          { label: 'Step 4', text: 'Verify: 12 bits give $6.02 \\times 12 + 1.76 = 74.0$ dB, a margin of about 4 dB (roughly 0.7 bit); 11 bits would deliver only 68.0 dB and fail the budget.' },
        ],
        result: '12 bits minimum; SQNR = 74.0 dB leaves a 4 dB margin, with 4,096 codes and LSB = FSR/4096.',
      },
    ],
    keyTakeaways: [
      'N bits means $2^N$ codes (and $2^N - 1$ steps between them); every extra bit doubles the count, so resolution costs area, power or time exponentially.',
      'Default LSB = FSR/2^N (0–5 V 8-bit → 19.53 mV); the FSR/(2^N − 1) = 19.61 mV variant exists for exact endpoints — check the convention before choosing between near-identical options.',
      'Ideal quantization error is bounded by ±½ LSB with rms noise LSB/√12, giving SQNR = 6.02N + 1.76 dB: 8 bits ≈ 50 dB, 12 bits ≈ 74 dB, 16 bits ≈ 98 dB.',
      'Sample above $2f_{\\max}$ and low-pass filter before the converter: components above $f_s/2$ alias to $|f - kf_s|$ irreversibly, and the anti-alias transition band must fit between $f_{\\max}$ and $f_s - f_{\\max}$.',
    ],
    quiz: [
      {
        q: 'How many distinct output codes does a 12-bit converter produce?',
        options: ['2,048', '4,095', '4,096', '144'],
        answer: 2,
        explanation: 'Step 1: The code count of an N-bit word is $2^N$. Step 2: For N = 12, $2^{12} = 4096$. Step 3: 4,095 is the number of steps between codes (one less), and 2,048 is only $2^{11}$. Step 4: The converter emits 4,096 distinct codes, numbered 0 through 4,095.',
      },
      {
        q: 'An 8-bit ADC spans the range 0–10 V. Using the FSR/2^N convention, one LSB is closest to',
        options: ['10.0 mV', '39.1 mV', '39.2 mV', '78.1 mV'],
        answer: 1,
        explanation: 'Step 1: The default step size is $\\text{LSB} = \\text{FSR}/2^N = 10/256$ V. Step 2: $10/256 = 39.06$ mV, closest to 39.1 mV. Step 3: The 39.2 mV option is the endpoints convention $10/255 = 39.22$ mV, where codes 0 and 255 land exactly on 0 V and 10 V. Step 4: Under the standard datasheet convention the answer is 39.1 mV.',
      },
      {
        q: 'The ideal SQNR of a 10-bit converter digitizing a full-scale sine wave is closest to',
        options: ['$50\\ \\text{dB}$', '$56\\ \\text{dB}$', '$74\\ \\text{dB}$', '$62\\ \\text{dB}$'],
        answer: 3,
        explanation: 'Step 1: The SQNR law is $6.02N + 1.76$ dB. Step 2: With N = 10, $6.02 \\times 10 = 60.2$. Step 3: $60.2 + 1.76 = 61.96 \\approx 62$ dB. Step 4: 74 dB belongs to 12 bits and 50 dB to 8 bits — each added bit contributes about 6 dB.',
      },
      {
        q: 'A signal occupying 0–20 kHz is sampled at 44.1 kHz. A strong interferer at 45 kHz will appear in the sampled data at',
        options: ['$0.9\\ \\text{kHz}$', '$20.9\\ \\text{kHz}$', '$45\\ \\text{kHz}$', 'It cannot appear, because $45\\ \\text{kHz} > 44.1\\ \\text{kHz}$'],
        answer: 0,
        explanation: 'Step 1: Only components below $f_s/2 = 22.05$ kHz survive sampling unchanged; everything above folds. Step 2: The alias frequency is $|f - kf_s|$ for the integer k that brings it into band: $45 - 44.1 = 0.9$ kHz. Step 3: The folded tone lands at 0.9 kHz, inside the wanted band, and no digital filter can remove it. Step 4: Only an analog anti-alias filter ahead of the sampler can attenuate the interferer — which is why the filter always precedes the converter.',
      },
    ],
  },

  // ---------------------------------------------------------- dataconv §2
  {
    sectionId: 'ece-e-dataconv-s2',
    readingTime: 8,
    prerequisites: [
      'Sampling and quantization fundamentals (Section 1)',
      'Op-amp inverting summer and virtual-ground analysis',
      'Binary-weighted number representation',
    ],
    intro: 'The digital-to-analog converter closes the loop of every mixed-signal system: a feedback DAC lives inside every successive-approximation and sigma-delta ADC, while standalone DACs reconstruct audio, generate test waveforms and set precision bias levels in spacecraft instruments. Three network ideas cover the syllabus — the binary-weighted summer, which is easy to analyze but impractical beyond a few bits; the R-2R ladder, the elegant fix that every assessment derivation asks for; and the current-steering array, which trades matching for raw speed — plus the pulse-width-modulation trick that turns a timer into a slow but remarkably linear converter. The numerical work always has the same shape: given a code, a reference and a feedback resistor, compute $V_o$. The conceptual work is knowing why the ladder halves current at every rung, and why reference drift, settling time and glitch energy — not the code width — bound the accuracy you actually get.',
    objectives: [
      'Compute the output voltage of a binary-weighted DAC for any code and feedback resistor',
      'Derive and apply the R-2R ladder formula, explaining the successive current halving',
      'Explain current-steering and PWM conversion mechanisms and where each is used',
      'Budget reference drift, settling time and glitch energy against a target resolution',
    ],
    concepts: [
      {
        term: 'Binary-weighted resistor DAC',
        kind: 'method',
        statement: 'Bits switch a reference through resistors scaled $R, 2R, 4R, \\ldots, 2^{N-1}R$ into an op-amp summing junction, giving $$V_o = -\\frac{R_f}{R}V_{ref}\\left(b_1 + \\frac{b_2}{2} + \\cdots + \\frac{b_N}{2^{N-1}}\\right),$$ which with $R_f = R/2$ becomes the universal form $V_o = -V_{ref}\\frac{D}{2^N}$.',
        detail: 'The virtual ground makes each bit an independent current source $I_k = b_k V_{ref}/(2^{k-1}R)$, and the op-amp simply sums them: no bit loads any other, which is what makes the two-line analysis possible. The MSB alone carries more than half of the full-scale current, and the full-scale code $11\\ldots1$ outputs $-V_{ref}(1 - 2^{-N})$ — always one step short of the reference. Worked example 1 runs the numbers for a 4-bit network.',
      },
      {
        term: 'The resistance-spread problem',
        kind: 'insight',
        statement: 'An N-bit weighted network needs a **$2^{N-1}:1$ resistance spread** and MSB matching to about $2^{-N}$ — roughly 0.4% at 8 bits, 0.02% at 12 — which kills the topology beyond about 4–6 bits.',
        detail: 'With a 10 kΩ MSB resistor, an 8-bit design demands a 1.28 MΩ LSB resistor, and that largest resistor also carries the slowest parasitic RC, hurting settling at the small-code end. Worse, the MSB current is $2^{N-1}$ times the LSB current, so a fractional error $\\varepsilon$ in the MSB resistor mimics $\\varepsilon \\cdot 2^{N-1}$ LSBs of code error; keeping that under ½ LSB demands about one part in $2^N$ — beyond ordinary process matching long before 12 bits. Monolithic processes excel at matching like-for-like geometry over modest ratios, which is precisely the property the ladder exploits next.',
      },
      {
        term: 'R-2R ladder',
        kind: 'method',
        statement: 'Built from only R and 2R, the ladder delivers to the summing junction a current that **halves at every rung**: $I_k = \\frac{V_{ref}}{R}2^{-k}$, so $$V_o = -\\frac{R_f}{R}V_{ref}\\left(b_1 2^{-1} + b_2 2^{-2} + \\cdots + b_N 2^{-N}\\right) = -\\frac{R_f}{R}\\cdot\\frac{D}{2^N}V_{ref}.$$',
        detail: 'The halving argument: the MSB leg (2R) ties straight into the virtual ground and injects $V_{ref}/2R$; one rung over, a bit’s leg looks into a node where the path onward into the remaining ladder presents 2R against its own 2R, halving the delivered current — and the same 2R-versus-2R standoff repeats at every rung, giving weights $2^{-1}, 2^{-2}, \\ldots, 2^{-N}$. Because only two values appear, they can be laid out as identical unit resistors, so matching and thermal tracking are excellent and the spread problem vanishes. This is the default precision-DAC network and the engine inside every SAR converter’s feedback path.',
      },
      {
        term: 'Current-steering DACs',
        kind: 'insight',
        statement: 'Steering arrays switch **parallel current sources directly into the load** — no op-amp in the signal path — making this the fastest DAC family (settling in nanoseconds) at the price of matching-limited linearity and visible output glitches.',
        detail: 'With no amplifier to slew, the output node is only RC-limited, which is why video, direct digital synthesis and RF transmit chains use steering arrays. Accuracy comes from current-source matching, so real parts use segmented decoding — a thermometer-coded upper bank for monotonic linearity plus a binary-coded lower bank for compactness. Switch charge injection and skew produce narrow output spikes, quantified as glitch energy in pV·s; differential outputs cancel much of the common-mode disturbance.',
      },
      {
        term: 'PWM-based conversion',
        kind: 'method',
        statement: 'A timer PWM output of duty cycle $D$, low-pass filtered, delivers the average $V_{avg} = D \\cdot V_H$: resolution comes from the timer’s $2^M$ duty steps, and linearity from the single level $V_H$.',
        detail: 'An 8-bit duty resolution clocked at 16 MHz caps the carrier at $16\\ \\text{MHz}/2^8 = 62.5$ kHz, and the RC filter corner must sit well below that to squeeze the ripple — so bandwidth is a few Hz to a few kHz at best. The reward is exceptional differential linearity: only two voltage levels ever appear at the unfiltered node, so there are no resistor ratios to mismatch. This is the standard microcontroller trick for slow bias voltages and actuator references where a timer is free and a precision DAC is not.',
      },
      {
        term: 'Reference, settling and glitch budget',
        kind: 'insight',
        statement: 'The DAC output inherits every error of $V_{ref}$: one LSB is a **$2^{-N}$ fraction of full scale** (244 ppm at 12 bits), so reference tempco and drift must fit the error budget; speed is set by settling to ½ LSB and by glitch energy at code transitions.',
        detail: 'Settling to N bits needs about $N\\ln 2 \\approx 0.7N$ time constants — 8.3 τ for 12 bits — so a 1 µs output must come from an RC product near 120 ns. The worst glitch occurs at the major carry (0111…1 → 1000…0), where every switch toggles at once and any skew momentarily synthesizes a wrong intermediate code; a deglitching sample-and-hold can blank the output through the transition. Worked example 3 derives a 2.4 ppm/°C reference specification for a 12-bit system — the kind of number that decides whether a design needs a precision reference or software calibration.',
      },
    ],
    examples: [
      {
        title: 'Binary-weighted DAC, code 1011',
        problem: 'A 4-bit weighted DAC uses $V_{ref} = 8$ V, an MSB resistor of 10 kΩ (then 20, 40 and 80 kΩ) and $R_f = 5$ kΩ. Find $V_o$ for the code 1011 and for full scale 1111.',
        steps: [
          { label: 'Step 1', text: 'Bit currents into the virtual ground: MSB $\\frac{8}{10\\text{k}} = 0.8$ mA; bit 3 $\\frac{8}{40\\text{k}} = 0.2$ mA; bit 4 $\\frac{8}{80\\text{k}} = 0.1$ mA; bit 2 is 0, contributing nothing.' },
          { label: 'Step 2', text: 'Total current $= 0.8 + 0.2 + 0.1 = 1.1$ mA (code 1011).' },
          { label: 'Step 3', text: 'Output $V_o = -R_f I = -5\\ \\text{k}\\Omega \\times 1.1\\ \\text{mA} = -5.5\\ \\text{V}$.' },
          { label: 'Step 4', text: 'Full scale 1111: $0.8 + 0.4 + 0.2 + 0.1 = 1.5$ mA, so $V_o = -7.5$ V $= -V_{ref}(1 - 2^{-4})$ — one LSB (0.5 V) short of $-8$ V, exactly as the code-count arithmetic predicts.' },
        ],
        result: '$V_o(1011) = -5.5\\ \\text{V}$; full-scale code 1111 gives $-7.5\\ \\text{V}$, one 0.5 V step below $-V_{ref}$.',
      },
      {
        title: 'The same code on an R-2R ladder',
        problem: 'An R-2R ladder DAC with $R_f = R$ and $V_{ref} = 8$ V receives the code 1011. Show that it reproduces the −5.5 V of the weighted design.',
        steps: [
          { label: 'Step 1', text: 'Write the rung weights: $b_1 2^{-1} + b_3 2^{-3} + b_4 2^{-4} = 0.5 + 0.125 + 0.0625 = 0.6875$.' },
          { label: 'Step 2', text: 'Apply the ladder formula: $V_o = -V_{ref} \\times 0.6875 = -8 \\times 0.6875 = -5.5\\ \\text{V}$.' },
          { label: 'Step 3', text: 'Cross-check with the integer form: $D = 1011_2 = 11$, so $V_o = -V_{ref}D/2^N = -8 \\times 11/16 = -5.5$ V — the two routes agree because each rung contributes exactly half its left-hand neighbour.' },
          { label: 'Step 4', text: 'Equivalence: a weighted network with $R_f = R/2$ obeys the same $-V_{ref}D/2^N$ law as a ladder with $R_f = R$ — the two networks are interchangeable in assessments, but only the ladder is manufacturable at 8+ bits.' },
        ],
        result: '$V_o = -5.5\\ \\text{V}$ — identical to the weighted-resistor result, confirming $V_o = -V_{ref}D/2^N$ for $R_f = R$.',
      },
      {
        title: 'Reference drift budget for 12 bits',
        problem: 'A 12-bit DAC uses a 2.500 V reference. Over a 0–50 °C operating range, how good must the reference tempco be if drift is to stay within ½ LSB?',
        steps: [
          { label: 'Step 1', text: 'Step size: $\\text{LSB} = \\frac{2.5}{4096} = 610.4\\ \\mu\\text{V}$, so the ½ LSB budget is $305\\ \\mu\\text{V}$.' },
          { label: 'Step 2', text: 'Allowed total drift over the full 50 °C swing: $305\\ \\mu\\text{V}$.' },
          { label: 'Step 3', text: 'Per degree: $\\frac{305\\ \\mu\\text{V}}{50} = 6.1\\ \\mu\\text{V}/^\\circ\\text{C}$; relative to 2.5 V that is $\\frac{6.1\\ \\mu\\text{V}}{2.5\\ \\text{V}} = 2.44\\ \\text{ppm}/^\\circ\\text{C}$.' },
          { label: 'Step 4', text: 'Interpret: a commodity 50 ppm/°C reference fails this budget by a factor of twenty — the design needs a precision-band reference, or calibration over temperature.' },
        ],
        result: 'Tempco ≤ 2.4 ppm/°C — a precision reference, or software calibration over temperature.',
      },
    ],
    keyTakeaways: [
      'Weighted network: $V_o = -(R_f/R)V_{ref}(b_1 + b_2/2 + \\cdots)$ — a two-line analysis, but a $2^{N-1}:1$ resistor spread and ~$2^{-N}$ MSB matching limit it to a few bits.',
      'R-2R ladder uses only two values; every rung halves the current, giving $V_o = -(R_f/R)(D/2^N)V_{ref}$ — the default precision architecture and the DAC inside every SAR ADC.',
      'Speed hierarchy: current-steering (ns) ≫ R-2R with op-amp (µs) ≫ PWM with RC filter (ms); choose by bandwidth and mind glitch energy, worst at the major carry.',
      'The output is only as good as its reference: 1 LSB = $2^{-N}$ of full scale (244 ppm at 12 bits), so reference drift, settling (≈0.7N time constants) and glitches must fit the same budget as the network.',
    ],
    quiz: [
      {
        q: 'The defining advantage of the R-2R ladder over the binary-weighted DAC is that it',
        options: ['needs no operational amplifier at all', 'completes a conversion in one clock cycle', 'uses only two resistance values, so all bit weights match and track well', 'eliminates quantization error'],
        answer: 2,
        explanation: 'Step 1: The weighted network needs resistors spanning $2^{N-1}:1$, which cannot be matched precisely on silicon. Step 2: The ladder builds every weight from the same two values, R and 2R. Step 3: Like-valued resistors match well and track each other thermally, so the binary weights stay accurate. Step 4: It still needs an output amplifier or load, still takes time to settle, and quantization is a property of the code width, not of the resistor network.',
      },
      {
        q: 'An 8-bit R-2R DAC has $V_{ref} = 4$ V and $R_f = R$. The output for the code 0100 0000 is',
        options: ['$+1.0\\ \\text{V}$', '$-1.0\\ \\text{V}$', '$-0.25\\ \\text{V}$', '$-2.0\\ \\text{V}$'],
        answer: 1,
        explanation: 'Step 1: In 0100 0000 only bit 2 (second from the left) is set, whose rung weight is $2^{-2} = 0.25$. Step 2: $V_o = -V_{ref} \\times 0.25 = -4 \\times 0.25 = -1.0$ V. Step 3: Equivalently, $D = 64$ and $V_o = -V_{ref}D/2^N = -4 \\times 64/256 = -1.0$ V. Step 4: The sign is negative because the ladder feeds an inverting summer; −0.25 V confuses the weight with the voltage, and −2.0 V double-counts the MSB.',
      },
      {
        q: 'In an 8-bit binary-weighted DAC whose MSB resistor is 10 kΩ, the LSB resistor must be',
        options: ['1.28 MΩ', '256 kΩ', '80 kΩ', '10 MΩ'],
        answer: 0,
        explanation: 'Step 1: Bit resistors scale as $R, 2R, 4R, \\ldots, 2^{N-1}R$ from MSB to LSB. Step 2: For 8 bits the LSB resistor is $2^7 = 128$ times the MSB value. Step 3: $128 \\times 10\\ \\text{k}\\Omega = 1.28\\ \\text{M}\\Omega$. Step 4: That 128:1 spread — and the matching it would demand — is exactly what pushes real designs to the R-2R ladder.',
      },
      {
        q: 'The largest output glitch normally occurs at the code transition',
        options: ['0000 0000 → 0000 0001', '1111 1110 → 1111 1111', '0010 0000 → 0100 0000', '0111 1111 → 1000 0000'],
        answer: 3,
        explanation: 'Step 1: A glitch arises when switches change state at slightly different times, briefly producing a wrong intermediate code. Step 2: At 0111 1111 → 1000 0000 — the major carry — all eight switches toggle at once. Step 3: Any skew then momentarily synthesizes a code near full scale or zero, far from both endpoints of a nominally 1-LSB step, so the output spikes before settling. Step 4: The other options toggle only one or two switches, so no large intermediate excursion is possible; the major carry remains the classic worst case.',
      },
    ],
  },

  // ---------------------------------------------------------- dataconv §3
  {
    sectionId: 'ece-e-dataconv-s3',
    readingTime: 8,
    prerequisites: [
      'Sampling and quantization fundamentals (Section 1)',
      'DAC output mapping (Section 2)',
      'Comparator operation and priority encoding',
    ],
    intro: 'Given a code, how fast can you produce it? The flash converter answers "immediately" by brute force — a bank of comparators sniffing every decision level at once — while the successive-approximation converter answers "in N steps" by running a binary search with a DAC and a single comparator in a feedback loop. Between them they define the speed-resolution frontier of analog-to-digital conversion, and assessments favor this section because the numbers are crisp: $2^N - 1$ comparators, one clock cycle, N clock cycles, throughput $f_{clk}/N$. The quiet hero is the sample-and-hold, without which the SAR search corrupts its own earlier decisions. This section sizes the flash hardware, traces the SAR register bit by bit, compares conversion times numerically, and states the track-and-hold requirements that any serious design must write down.',
    objectives: [
      'Size the comparator bank, resistor string and encoder of an N-bit flash converter',
      'Trace a complete successive-approximation search cycle by cycle',
      'Compute conversion times and maximum throughputs for flash and SAR converters',
      'Specify acquisition, aperture and droop requirements of the track-and-hold front end',
    ],
    concepts: [
      {
        term: 'Flash architecture',
        kind: 'definition',
        statement: 'A flash ADC compares the input against **all $2^N - 1$ decision levels simultaneously**: a resistor string of $2^N$ equal resistors between the reference rails feeds $2^N - 1$ latched comparators, and a priority encoder collapses their thermometer code into an N-bit result — one clock cycle per conversion.',
        detail: 'Every comparator whose threshold lies below $V_{in}$ fires, so the comparator outputs form a thermometer — a row of 1s above a row of 0s — and the encoder need only find the boundary. Real parts add bubble logic because a metastable comparator can fire out of sequence near the transition. The price of parallelism is input capacitance: $2^N - 1$ comparator input pairs load the source directly, which is why flash inputs are usually buffered.',
      },
      {
        term: 'Comparator-count scaling',
        kind: 'insight',
        statement: 'Each extra bit **doubles the comparator count** — 63 at 6 bits, 255 at 8 bits, 1,023 at 10 bits — along with input capacitance and static power, which is why practical flash converters stop near 8 bits.',
        detail: 'Two more bits quadruple the bank, the reference-string loading and the die area, while each comparator still burns bias current whether it toggles or not — flash power is roughly static, not conversion-rate-dependent. The family survives where nothing else is fast enough: oscilloscope front ends, optical receivers and direct RF sampling at hundreds of megasamples to gigasamples per second, at 4–8 bits of resolution.',
      },
      {
        term: 'The SAR binary search',
        kind: 'method',
        statement: 'The successive-approximation register runs a **binary search on the code**: set the MSB, let the internal DAC present $2^{N-1}$ to one comparator, keep the bit if the DAC level is below the held input, clear it otherwise, then descend bit by bit — N trials yield the N-bit code.',
        detail: 'Register, internal DAC and one comparator form a feedback loop that is exactly the bisection method in hardware: each trial halves the remaining voltage uncertainty, so after N trials the residual is below one LSB. The elegance is the scaling — doubling resolution adds one clock cycle and one DAC bit, not another few hundred comparators — which is why SAR dominates the 8-to-18-bit, kilo-to-megasample middle ground of data acquisition.',
      },
      {
        term: 'Conversion-time law',
        kind: 'theorem',
        statement: 'Flash converts in **one clock cycle**; SAR converts in **N clock cycles** (plus optional acquisition and status cycles), so a SAR’s maximum sampling rate is about $$f_{sample} \\le \\frac{f_{clk}}{N}, \\qquad T_{conv} = \\frac{N}{f_{clk}}.$$',
        detail: 'Reference numbers worth memorizing: a 10-bit SAR at 2 MHz takes 5 µs per conversion (200 ksamples/s); a 12-bit SAR at 1 MHz takes 12 µs (about 83 ksamples/s); an 8-bit flash at 20 MHz takes 50 ns (20 Msamples/s). Assessment problems routinely pair these with a channel budget — when one ADC is multiplexed across M channels, divide the throughput by M before answering.',
      },
      {
        term: 'Track-and-hold and aperture',
        kind: 'definition',
        statement: 'The track-and-hold (sample-and-hold) acquires the input to the required accuracy, then **freezes it for the whole conversion**; its acquisition time, aperture delay, aperture jitter and droop set the front-end limits of the ADC.',
        detail: 'Acquisition to N bits needs about $0.7N$ RC time constants of settling — 8.3 τ for 12 bits — before the hold command. Aperture jitter converts to a hard SNR ceiling (the formula arrives in Section 5), and droop — the decay of the held voltage through leakage on the hold capacitor — must stay under ½ LSB for the conversion duration, which sizes the capacitor against leakage current. SAR cannot function without the frozen sample, because every bit decision must be judged against the same value; flash needs no dedicated hold at low resolution since its comparators do the sampling, though a track-and-hold still sharpens the effective sampling instant.',
      },
      {
        term: 'Where each architecture wins',
        kind: 'insight',
        statement: 'Flash owns the **few-bit, gigasample corner**; SAR owns the **8–18-bit, kilo-to-megasample middle ground** where energy per conversion matters — a straight resolution-speed-power trade.',
        detail: 'A SAR’s cost grows gently: one more bit adds a clock cycle and a DAC element, and its power scales with conversion rate, so idling is cheap. A flash bank pays statically in comparators, reference string and clock distribution no matter how slowly it samples. In selection questions, the standard answers line up: multiplexed industrial sensing and general data acquisition point to SAR; instantaneous waveform capture at low resolution points to flash; the two families bracket the pipeline and sigma-delta options of the next section.',
      },
    ],
    examples: [
      {
        title: 'Sizing a flash converter',
        problem: 'Specify the comparator bank and resistor string for a 6-bit flash ADC, and determine the hardware growth if two more bits are needed.',
        steps: [
          { label: 'Step 1', text: 'Decision levels: a 6-bit converter has $2^6 = 64$ codes, hence $2^6 - 1 = 63$ transitions to detect → 63 comparators.' },
          { label: 'Step 2', text: 'Reference divider: a string of $2^6 = 64$ equal resistors between the reference rails provides the 63 taps (each tap one comparator threshold).' },
          { label: 'Step 3', text: 'For 8 bits: $2^8 - 1 = 255$ comparators and $2^8 = 256$ string resistors, with the encoder widening from 63-line thermometer logic to 255-line.' },
          { label: 'Step 4', text: 'Growth: $\\frac{255}{63} \\approx 4$ — two added bits quadruple the bank, the input capacitance and the static power, which is why flash rarely passes 8 bits.' },
        ],
        result: '6-bit: 63 comparators + 64 resistors; 8-bit: 255 + 256 — a ×4 hardware increase for just two bits.',
      },
      {
        title: 'Conversion-time comparison',
        problem: 'Compare the conversion time and maximum throughput of (a) a 10-bit SAR clocked at 2 MHz with one bit decision per cycle, and (b) an 8-bit flash clocked at 20 MHz with one cycle per conversion. What would the SAR achieve at 20 MHz?',
        steps: [
          { label: 'Step 1', text: 'SAR: $T_{conv} = N/f_{clk} = \\frac{10}{2\\ \\text{MHz}} = 5\\ \\mu\\text{s}$, so the maximum throughput is $\\frac{1}{5\\ \\mu\\text{s}} = 200$ ksamples/s.' },
          { label: 'Step 2', text: 'Flash: $T_{conv} = \\frac{1}{20\\ \\text{MHz}} = 50$ ns, so 20 Msamples/s.' },
          { label: 'Step 3', text: 'Ratio: the flash is 100× faster in throughput, despite its lower resolution.' },
          { label: 'Step 4', text: 'Same clock: the SAR at 20 MHz would take $\\frac{10}{20\\ \\text{MHz}} = 0.5\\ \\mu\\text{s}$ → 2 Msamples/s — still 10× behind the flash, because SAR pays N cycles per sample while flash pays one.' },
        ],
        result: 'SAR 5 µs / 200 ksamples/s; flash 50 ns / 20 Msamples/s; even at 20 MHz the SAR reaches only 2 Msamples/s.',
      },
      {
        title: 'Cycle-by-cycle SAR trace',
        problem: 'A 3-bit SAR ADC with a 0–5 V range digitizes a steady 3.3 V input. Trace the register, the internal DAC and the comparator through every cycle.',
        steps: [
          { label: 'Step 1', text: 'Cycle 1 — set MSB: DAC presents 100 → $1 \\times \\frac{5}{2} = 2.500$ V. Comparator: input 3.3 V > 2.5 V → keep the bit.' },
          { label: 'Step 2', text: 'Cycle 2 — try the next bit: DAC presents 110 → 3.750 V. Now 3.3 V < 3.75 V → clear the bit back to 0.' },
          { label: 'Step 3', text: 'Cycle 3 — last bit: DAC presents 101 → 3.125 V. Since 3.3 V > 3.125 V → keep the bit.' },
          { label: 'Step 4', text: 'Final code 101, DAC level 3.125 V. The residual error is $3.3 - 3.125 = 0.175$ V = 0.28 LSB, and measured from the code centre (3.4375 V) only 0.22 LSB — comfortably inside the ±½ LSB quantization band.' },
        ],
        result: 'Final code 101 (3.125 V DAC level); the 0.175 V residual is 0.28 LSB, within one LSB of the true input and 0.22 LSB from the code centre.',
      },
    ],
    keyTakeaways: [
      'Flash = $2^N - 1$ comparators + $2^N$ resistor string + priority encoder, one clock cycle per conversion — fastest family, but area, capacitance and power double with every bit, capping it near 8 bits.',
      'SAR = one comparator + internal DAC + successive-approximation register performing a binary search: N clock cycles, $T_{conv} = N/f_{clk}$, throughput ≈ $f_{clk}/N$.',
      'The track-and-hold is mandatory for SAR: acquisition must settle (~0.7N time constants) before the search, and droop must stay under ½ LSB for its duration.',
      'Numbers to carry: 8-bit flash → 255 comparators; 12-bit SAR at 1 MHz → 12 µs (≈83 ksamples/s); 10-bit SAR at 2 MHz → 5 µs (200 ksamples/s); multiplexing divides throughput by the channel count.',
    ],
    quiz: [
      {
        q: 'An 8-bit flash ADC requires how many comparators?',
        options: ['64', '128', '256', '255'],
        answer: 3,
        explanation: 'Step 1: A flash converter needs one comparator per decision level. Step 2: The number of transitions between $2^8 = 256$ codes is $2^8 - 1 = 255$. Step 3: 256 is the resistor count (or the code count) — the classic distractor. Step 4: So the design uses 255 comparators, 256 string resistors and one priority encoder.',
      },
      {
        q: 'A 12-bit SAR ADC uses a 1 MHz clock and settles one bit per clock cycle. Its conversion time is about',
        options: ['$1\\ \\mu\\text{s}$', '$6\\ \\mu\\text{s}$', '$12\\ \\mu\\text{s}$', '$12\\ \\text{ms}$'],
        answer: 2,
        explanation: 'Step 1: A SAR needs one clock cycle per bit decision. Step 2: $T_{conv} = N/f_{clk} = \\frac{12}{1\\ \\text{MHz}} = 12\\ \\mu\\text{s}$. Step 3: The matching throughput is $\\frac{1}{12\\ \\mu\\text{s}} \\approx 83$ ksamples/s. Step 4: 12 ms would mean a millisecond per bit — a units slip; and even at the same clock a flash part would finish in a single 1 µs cycle.',
      },
      {
        q: 'A SAR ADC can complete its binary search correctly only if',
        options: ['the reference voltage is larger than the input', 'the input is held constant during the N decision cycles (track-and-hold)', 'the comparator is clocked N times faster than the internal DAC', 'the input changes by exactly one LSB per cycle'],
        answer: 1,
        explanation: 'Step 1: Each bit decision compares the input against an internal DAC level. Step 2: If the input moves mid-search, a bit kept or cleared against an earlier level no longer describes the final value — earlier decisions corrupt the code. Step 3: The track-and-hold freezes one sample for the whole search so all N comparisons are consistent. Step 4: Reference sizing and comparator speed affect accuracy and maximum clock rate, not the logical validity of the search.',
      },
      {
        q: 'A 6-bit flash converter and a 16-bit SAR converter both run from a 10 MHz clock (flash: one cycle per conversion; SAR: one bit per cycle). Their approximate conversion times are',
        options: ['$100\\ \\text{ns and } 1.6\\ \\mu\\text{s}$', '$100\\ \\text{ns and } 16\\ \\mu\\text{s}$', '$600\\ \\text{ns and } 16\\ \\text{ns}$', '$1\\ \\mu\\text{s and } 160\\ \\text{ns}$'],
        answer: 0,
        explanation: 'Step 1: One clock period at 10 MHz is 100 ns. Step 2: The flash converts in a single cycle: 100 ns. Step 3: The 16-bit SAR needs 16 cycles: $16 \\times 100\\ \\text{ns} = 1.6\\ \\mu\\text{s}$. Step 4: 16 µs would correspond to a 1 MHz clock — the common slip of mixing up clock rates between the two parts.',
      },
    ],
  },

  // ---------------------------------------------------------- dataconv §4
  {
    sectionId: 'ece-e-dataconv-s4',
    readingTime: 9,
    prerequisites: [
      'Op-amp integrator circuits',
      'Flash and SAR conversion times (Section 3)',
      'Sampling theorem and oversampling (Section 1)',
    ],
    intro: 'When the signal is a slow, noisy, near-DC sensor voltage and the requirement is digits of accuracy rather than speed, two architectures take over. The dual-slope integrating converter — the heart of every bench digital multimeter — wins precision not from exotic components but from a cancellation: the same clock counts the run-up and the run-down, so R, C and most offsets drop out of the result, and integrating over whole mains periods nulls 50/60 Hz pickup exactly. The sigma-delta converter attacks from the opposite direction, trading speed for resolution by massively oversampling a deliberately coarse (often 1-bit) quantizer, shaping its noise out of band, and digitally decimating — the route to 16–24 bits in audio and instrumentation. The pipeline family fills the high-speed middle ground between these and the flash/SAR pair of Section 3. Assessment questions here revolve around run-down counts, oversampling-ratio arithmetic, the dB-per-octave rules of noise shaping, and latency-versus-throughput reasoning.',
    objectives: [
      'Explain the run-up/run-down charge balance of the dual-slope converter and compute its counts',
      'Choose integration times that null 50 Hz and 60 Hz interference',
      'Compute oversampling ratio and the ENOB gains of noise shaping',
      'Contrast dual-slope, sigma-delta and pipeline converters on speed, resolution and latency',
    ],
    concepts: [
      {
        term: 'Dual-slope conversion cycle',
        kind: 'method',
        statement: 'The integrator first ramps on the input for a fixed count $N_1$ (run-up), then ramps back on a reference of opposite polarity while a counter measures $N_2$ (run-down); charge balance gives $$\\frac{V_{in}}{V_{ref}} = \\frac{N_2}{N_1}.$$',
        detail: 'Run-up integrates $-V_{in}/RC$ for $T_1 = N_1 T_{clk}$; run-down integrates $+V_{ref}/RC$ until the integrator crosses zero, taking $T_2 = N_2 T_{clk}$. Equal and opposite integrals force $V_{in}T_1 = V_{ref}T_2$, and because both times are counted with the same clock, the reading depends only on the count ratio and $V_{ref}$ — R, C and long-term clock accuracy cancel, and a zero-input cycle auto-zeros offsets. That cancellation is the precision trick: multimeter-grade digits from modest parts, at a few readings per second.',
      },
      {
        term: 'Line-frequency rejection',
        kind: 'insight',
        statement: 'Choosing the run-up time equal to the mains period — **20 ms for 50 Hz, 16.7 ms for 60 Hz, 100 ms to null both** — makes the integral of the periodic interference exactly zero, because whole cycles cancel.',
        detail: 'A sinusoid (or any periodic waveform with zero mean) integrates to zero over an integer number of periods, so mains pickup contributes no net charge to the run-up. The rejection is a notch at the line frequency and its harmonics, degrading gracefully if the line drifts from nominal. The cost is speed: a 100 ms run-up means at most a few readings per second even before run-down — ideal for a voltmeter, hopeless for audio, and one more reminder that precision-DC and bandwidth are different products.',
      },
      {
        term: 'Oversampling and decimation',
        kind: 'method',
        statement: 'Sampling at $\\text{OSR} = \\frac{f_s}{2f_B}$ times the Nyquist rate spreads the fixed quantization-noise power across a wider band, so the in-band share falls: **+3 dB (½ bit) per doubling of OSR**; a decimation filter then removes the out-of-band noise and returns the rate to $2f_B$.',
        detail: 'The total quantization-noise power (set by the LSB) does not change; oversampling merely spreads it over $f_s/2$ instead of $f_B$, so the fraction landing in-band scales as $1/\\text{OSR}$. The digital decimation filter — typically a sinc/CIC structure — averages the stream and resamples it down. The honest limitation: ½ bit per octave means +2 bits costs a 16× rate increase, which is why plain oversampling stops being practical quickly and noise shaping takes over.',
      },
      {
        term: 'Sigma-delta modulator',
        kind: 'definition',
        statement: 'A sigma-delta ADC wraps an integrator (loop filter) around a coarse — often **1-bit** — quantizer whose output drives a 1-bit feedback DAC; the loop pushes quantization noise toward $f_s/2$ (noise shaping, first-order NTF $(1 - z^{-1})$), buying about **+9 dB (1.5 bits) per octave of OSR**, or +15 dB (2.5 bits) for a second-order loop.',
        detail: 'The 1-bit output stream is a pulse-density copy of the input; digital decimation turns OSR stream bits into each output word. Two properties carry the family: the 1-bit feedback DAC has only two levels, so it is inherently linear and the converter is inherently monotonic; and the noise-shaping slope is set by loop order, so resolution scales with sample rate rather than with component matching. In round figures, a first-order 1-bit modulator at OSR = 64 delivers roughly 8–9 effective bits, and every doubling of the rate adds 1.5 more — the arithmetic assessment items probe (worked example 2).',
      },
      {
        term: 'Pipeline converters',
        kind: 'insight',
        statement: 'A pipeline ADC chains low-resolution stages, each resolving a few bits, subtracting them with an internal DAC and **amplifying the residue** for the next stage; samples flow stagewise, so throughput is one result per clock **after an N-stage latency**.',
        detail: 'Digital redundancy lets each stage’s comparators be sloppy — the next stage absorbs the error — which is what makes 12–16 bits at tens to hundreds of Msamples/s affordable. Latency is the fine print: the first result emerges only after every stage has handled its first sample, so in a streaming acquisition the delay is invisible, but inside a fast digital control loop N clocks of delay erode phase margin. The pipeline thus fills the gap between SAR (to ~10 Msamples/s) and flash (few bits, gsamples/s), at power that scales with both stages and rate.',
      },
      {
        term: 'The speed-resolution map',
        kind: 'insight',
        statement: 'The families partition the design space: **dual-slope** (slow, line-rejecting, 4½–8 digits), **sigma-delta** (16–24 bits, Hz-to-kHz bandwidth), **SAR** (8–18 bits, kS to ~10 MS/s), **pipeline** (10–16 bits, 10s–100s MS/s), **flash** (≤ 8 bits, gsamples/s).',
        detail: 'Given a bandwidth, a resolution and a power budget, the architecture choice is almost automatic — and "name the architecture" is a standard selection-assessment and interview pattern. Sensors and DC metrology point to dual-slope or sigma-delta; multiplexed industrial acquisition points to SAR; communications and imaging front ends point to pipeline; the few-bit, lowest-latency corner belongs to flash. Power tracks the map too: SAR energy scales with conversions, flash burns statically, sigma-delta trades clock rate for bits at microwatt levels.',
      },
    ],
    examples: [
      {
        title: 'Dual-slope numerics and mains rejection',
        problem: 'A dual-slope ADC counts at 100 kHz with a fixed run-up of $N_1 = 2{,}000$ counts against $V_{ref} = 2.000$ V. (a) Find the run-down count for $V_{in} = 1.500$ V. (b) Why does this run-up reject 50 Hz pickup?',
        steps: [
          { label: 'Step 1', text: 'Clock period $T_{clk} = 10\\ \\mu\\text{s}$, so the run-up lasts $T_1 = 2000 \\times 10\\ \\mu\\text{s} = 20$ ms — exactly one 50 Hz period.' },
          { label: 'Step 2', text: 'Charge balance: $N_2 = N_1 \\cdot \\frac{V_{in}}{V_{ref}} = 2000 \\times \\frac{1.5}{2.0} = 1500$ counts.' },
          { label: 'Step 3', text: 'Run-down duration $T_2 = 1500 \\times 10\\ \\mu\\text{s} = 15$ ms; the full conversion takes at most $20 + 15 = 35$ ms, allowing at least ~28 readings per second.' },
          { label: 'Step 4', text: 'Rejection: any 50 Hz pickup integrates to zero over whole periods, so it adds no net charge during run-up — the reading is immune to the mains.' },
        ],
        result: '$N_2 = 1{,}500$ counts; the 20 ms run-up places an exact null at 50 Hz (use 100 ms to null 50 and 60 Hz together).',
      },
      {
        title: 'Oversampling arithmetic',
        problem: 'A 20 kHz audio band is sampled at 2.56 MHz by a sigma-delta modulator. (a) What is the OSR? (b) How many effective bits does first-order noise shaping add over the coarse quantizer, and how many more with second order? (c) What sample rate would buy 3 additional first-order bits?',
        steps: [
          { label: 'Step 1', text: 'Oversampling ratio: $\\text{OSR} = \\frac{f_s}{2f_B} = \\frac{2.56\\ \\text{MHz}}{2 \\times 20\\ \\text{kHz}} = \\frac{2.56\\ \\text{M}}{40\\ \\text{k}} = 64$.' },
          { label: 'Step 2', text: 'Octaves available: $\\log_2 64 = 6$ doublings of the rate.' },
          { label: 'Step 3', text: 'First order gains 1.5 bits per octave: $6 \\times 1.5 = +9$ effective bits; second order gains 2.5 per octave: $6 \\times 2.5 = +15$ bits.' },
          { label: 'Step 4', text: 'Three more bits at 1.5 bits/octave require $\\frac{3}{1.5} = 2$ octaves → a ×4 rate: $4 \\times 2.56\\ \\text{MHz} = 10.24\\ \\text{MHz}$.' },
        ],
        result: 'OSR = 64 (six octaves): +9 effective bits first order, +15 second order; quadrupling the rate to 10.24 MHz buys three more first-order bits.',
      },
      {
        title: 'Pipeline latency versus throughput',
        problem: 'A 10-stage pipeline ADC runs at 125 MHz. What are its throughput and conversion latency, and how do they compare with a 10-bit SAR clocked at 1 MHz?',
        steps: [
          { label: 'Step 1', text: 'Throughput: one sample enters and one result leaves per clock, so 125 Msamples/s.' },
          { label: 'Step 2', text: 'Latency: the first result must traverse all 10 stages, $10 \\times 8\\ \\text{ns} = 80$ ns after that sample entered.' },
          { label: 'Step 3', text: 'The SAR comparison: 10 bits at 1 MHz cost 10 µs per conversion → 100 ksamples/s, so the pipeline delivers 1,250× the sample rate at the same resolution.' },
          { label: 'Step 4', text: 'Interpretation: in streaming acquisition the 80 ns latency is invisible, but in a fast digital control loop it delays the loop by 10 clock cycles — a real stability consideration that throughput numbers hide.' },
        ],
        result: '125 Msamples/s throughput with 80 ns (10-stage) latency; the SAR delivers 100 ksamples/s — the pipeline trades latency for over three orders of magnitude in throughput.',
      },
    ],
    keyTakeaways: [
      'Dual-slope: $N_2 = N_1 V_{in}/V_{ref}$ — the reading is a ratio of counts, immune to R, C and clock-rate errors, with offsets removed by auto-zero; slow (tens of ms) but multimeter-precise.',
      'Make run-up 20 ms (50 Hz), 16.7 ms (60 Hz) or 100 ms (both) and periodic interference integrates to exactly zero — the line-rejection notch every voltmeter uses.',
      'Sigma-delta: OSR = $f_s/2f_B$; plain oversampling gains 3 dB/octave, first-order shaping 9 dB (1.5 bits), second order 15 dB (2.5 bits) — and the 1-bit feedback DAC makes the converter inherently monotonic.',
      'Pipeline: throughput one result per clock, latency N stages — streaming-friendly but control-loop-hostile; it occupies the 10–16 bit, 10s–100s Msamples/s gap between SAR and flash.',
    ],
    quiz: [
      {
        q: 'A dual-slope ADC runs up for a fixed 2,000 counts with $V_{ref} = 4.0$ V. For $V_{in} = 1.0$ V the run-down count is',
        options: ['8,000', '500', '2,000', '250'],
        answer: 1,
        explanation: 'Step 1: Charge balance gives $V_{in}T_1 = V_{ref}T_2$, hence $N_2 = N_1\\frac{V_{in}}{V_{ref}}$. Step 2: $N_2 = 2000 \\times \\frac{1.0}{4.0} = 500$ counts. Step 3: The run-down is shorter than the run-up because the input is smaller than the reference — the slopes ratio directly. Step 4: 8,000 inverts the ratio, which would require $V_{in}$ four times the reference.',
      },
      {
        q: 'A dual-slope ADC best rejects 50 Hz mains pickup when the run-up time is',
        options: ['exactly 20 ms or an integer multiple of it', 'exactly 50 ms', 'as short as possible, so interference cannot accumulate', 'randomized from one conversion to the next'],
        answer: 0,
        explanation: 'Step 1: The integrator output depends on the time-average of the input over the run-up. Step 2: Any zero-mean periodic waveform averages to zero over whole numbers of periods. Step 3: 20 ms is exactly one 50 Hz period (16.7 ms is one 60 Hz period; 100 ms covers both). Step 4: 50 ms spans 2.5 periods, so a residual half-period of interference survives — only integer multiples null.',
      },
      {
        q: 'Doubling the oversampling ratio of a first-order sigma-delta modulator improves its in-band SQNR by about',
        options: ['$3\\ \\text{dB}$', '$6\\ \\text{dB}$', '$9\\ \\text{dB}$', '$15\\ \\text{dB}$'],
        answer: 2,
        explanation: 'Step 1: First-order noise shaping yields about 1.5 bits of resolution per octave of OSR. Step 2: Converting to decibels, $1.5 \\times 6.02 \\approx 9$ dB. Step 3: 3 dB is the gain of plain oversampling without shaping, and 15 dB belongs to a second-order loop. Step 4: So every doubling of the sample rate buys 9 dB — 1.5 bits — of in-band resolution.',
      },
      {
        q: 'A 10-stage pipeline ADC clocked at 125 MHz produces',
        options: ['one result every 10 clock cycles, and never more often', 'one result every clock cycle once the pipe is full, after about 10 cycles of latency', '10 results per clock cycle', 'one result every 80 ns with zero startup latency'],
        answer: 1,
        explanation: 'Step 1: In a pipeline, every stage works on a different sample during the same clock period. Step 2: Once all stages hold samples, one finished result emerges per clock — 125 Msamples/s. Step 3: But the first result appears only after the first sample traverses all 10 stages: $10 \\times 8$ ns = 80 ns of latency. Step 4: The last option names the right number but wrongly claims zero latency — throughput and latency are different properties, and pipeline latency is exactly N stages.',
      },
    ],
  },

  // ---------------------------------------------------------- dataconv §5
  {
    sectionId: 'ece-e-dataconv-s5',
    readingTime: 9,
    prerequisites: [
      'Quantization and LSB arithmetic (Section 1)',
      'Converter architectures of Sections 3 and 4',
      'Decibels and rms noise basics',
    ],
    intro: 'A converter that meets its resolution on paper can still be wrong by several LSBs in the field: the transfer curve shifts, its slope drifts, steps go missing, and the sampling instant wobbles. The error vocabulary — offset, gain, INL, DNL, missing codes, monotonicity — is the language of every converter datasheet and of essentially every data-converter question in selection assessments, because it separates resolution (how many codes exist) from accuracy (how close each code is to the truth). This section defines each error with the transfer-graph picture that makes it intuitive, then quantifies the dynamic limits — aperture jitter’s SNR ceiling and sample-and-hold droop. It closes by assembling the full data-acquisition chain from sensor to digital word, and with the selection reasoning — resolution versus speed versus power — that decides which architecture a system actually gets.',
    objectives: [
      'Define, measure and convert offset and gain errors into LSB units',
      'Read DNL and INL from a transfer characteristic and detect missing codes and non-monotonicity',
      'Budget aperture jitter and sample-and-hold droop against a target SNR',
      'Assemble a sensor-to-digital data-acquisition chain and select a converter from resolution-speed-power trade-offs',
    ],
    concepts: [
      {
        term: 'Offset error',
        kind: 'definition',
        statement: '**Offset error** is the parallel shift of the whole transfer curve from the ideal: the measured output when the code should produce exactly zero (or, for an ADC, the shift of every transition threshold), expressed in LSBs.',
        detail: 'On the transfer graph, the ideal staircase passes through the origin and the actual staircase is displaced vertically by the same amount at every code — same step heights, wrong address. Sources include op-amp and comparator input offsets and switch leakage. Offset is fully calibratable: measure the zero-scale point and subtract. A converter can have flawless step uniformity yet sit 5 LSBs off — resolution and accuracy are independent specifications, and conflating them is the classic assessment trap.',
      },
      {
        term: 'Gain error',
        kind: 'definition',
        statement: '**Gain error** is the deviation of the transfer-curve slope from ideal after offset is removed: the difference between the measured and ideal full-scale span, in LSBs or percent.',
        detail: 'Graphically, the staircase rotates about the (offset-corrected) zero point — the top codes land progressively too high or too low. Sources are reference tolerance, feedback-resistor mismatch and current-source scaling. Gain error is the second of the two calibratable errors: a two-point endpoint calibration removes offset first, then scales the span. What calibration cannot remove is curvature — the bow of the staircase that remains is the integral nonlinearity below.',
      },
      {
        term: 'DNL and missing codes',
        kind: 'definition',
        statement: '**Differential nonlinearity** measures each code step against the ideal 1 LSB: $\\text{DNL}(k) = \\frac{W_k}{\\text{LSB}} - 1$; a code with $\\text{DNL} \\le -1$ LSB has zero (or negative) width and is a **missing code**.',
        detail: 'On the transfer graph the ideal staircase has equal treads of exactly 1 LSB; DNL is the tread-width error, code by code — for an ADC, the width between adjacent transition thresholds, for a DAC, the output step between adjacent codes. A width of 0.5 LSB is DNL = −0.5; a width of zero means the transition jumps straight past the code, which never appears in the output stream. The "no missing codes" guarantee requires DNL > −1 LSB everywhere, and weighted-resistor DACs with a mismatched MSB are the textbook way to violate it.',
      },
      {
        term: 'INL and monotonicity',
        kind: 'definition',
        statement: '**Integral nonlinearity** is the deviation of the code centres from the ideal straight line (endpoints or best-fit), in LSBs — the running accumulation of DNL — and **INL within ±½ LSB guarantees monotonicity**.',
        detail: 'Draw the straight line through the calibrated endpoints; INL is the bow of the staircase away from that line, and because each code’s position error is the sum of all preceding step errors, worst-case |INL| is the quoted number. Monotonicity — the output never reverses direction as the code increases — requires every step to be non-negative, i.e. DNL ≥ −1 LSB everywhere. It is not a cosmetic spec: a non-monotonic feedback DAC inside a control loop or an ADC’s internal loop creates spurious zero crossings and can force oscillation or hysteresis, so guaranteed-monotonic architectures (R-2R with matched units, segmented current steering) earn their premium.',
      },
      {
        term: 'Aperture jitter and droop',
        kind: 'theorem',
        statement: 'Timing uncertainty $t_j$ at the sampling instant limits SNR to $$\\text{SNR}_{jitter} = -20\\log_{10}\\!\\left(2\\pi f_{in} t_j\\right)\\ \\text{dB},$$ while the held value may droop by at most ½ LSB over the conversion: $\\text{droop} < \\frac{\\text{LSB}/2}{T_{conv}}$.',
        detail: 'Intuition: sampling a sine of slope $2\\pi f_{in}V$ with a timing error $t_j$ produces a voltage error near the slope times the jitter; taking rms values yields the formula. Landmark numbers: a 1 MHz input sampled with 1 ns rms jitter caps SNR at 44 dB — barely 7 bits, whatever the datasheet says; holding 12 bits (74 dB) at 2 MHz demands about 16 ps. Droop is the hold-side twin: leakage current discharging the hold capacitor must stay under ½ LSB for the conversion duration, which sizes the capacitor, while a larger capacitor slows acquisition — the compromise every sample-and-hold designer negotiates (worked example 3).',
      },
      {
        term: 'Data-acquisition chain and converter selection',
        kind: 'method',
        statement: 'A canonical DAQ chain runs **sensor → signal conditioning (amplify, filter, isolate) → multiplexer → sample-and-hold → ADC → digital processing**, and the converter is chosen from a resolution-speed-power-cost table, with multiplexing sharing one ADC across channels at the price of per-channel rate.',
        detail: 'Conditioning scales the sensor span onto the converter range and hosts the anti-alias pole(s); the economics of one MUX + one S/H + one ADC give per-channel rate = total throughput ÷ channels (8 channels on a 100-ksample/s converter → 12.5 ksamples/s each). When inter-channel phase matters — power quality, vibration analysis — per-channel sample-and-holds capture all channels simultaneously and pay for the extra capacitors. Selection reasoning: DC precision with line rejection → dual-slope; audio and precision sensors → sigma-delta; general multiplexed acquisition → SAR; high-speed streaming → pipeline; lowest latency at few bits → flash. Power then breaks ties: SAR scales with conversion count, flash burns statically, sigma-delta trades clock rate for bits.',
      },
    ],
    examples: [
      {
        title: 'Offset and gain from a two-point measurement',
        problem: 'An 8-bit 0–5 V DAC (LSB = 19.53 mV) measures +25 mV at code 0 and 5.015 V at code 255. Find the offset error and the gain error in LSBs.',
        steps: [
          { label: 'Step 1', text: 'Offset: the code-0 output should be 0 V, so the offset is $+25$ mV $= \\frac{25}{19.53} = +1.28$ LSB.' },
          { label: 'Step 2', text: 'Actual span between the endpoints: $5.015 - 0.025 = 4.990$ V; ideal span for the same codes: $255 \\times 19.53\\ \\text{mV} = 4.980$ V.' },
          { label: 'Step 3', text: 'Gain error = (actual span − ideal span) in LSBs: $\\frac{4.990 - 4.980}{0.01953} = \\frac{9.5\\ \\text{mV}}{19.53\\ \\text{mV}} = +0.49$ LSB.' },
          { label: 'Step 4', text: 'Calibration order: subtract the 25 mV offset first, then rescale by $\\frac{4.980}{4.990} = 0.9980$ to correct gain; whatever error remains is pure curvature — the INL, which no two-point calibration can touch.' },
        ],
        result: 'Offset = +1.28 LSB and gain error = +0.49 LSB; two-point calibration removes both, leaving only the INL bow.',
      },
      {
        title: 'DNL and INL from a transition table',
        problem: 'A 3-bit 0–4 V ADC (LSB = 0.5 V) has measured transition thresholds at 0.55, 0.95, 1.45, 1.70, 2.20, 2.95 and 3.55 V (ideal: 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5 V). Compute the code widths, worst DNL, worst INL, and state whether any code is missing.',
        steps: [
          { label: 'Step 1', text: 'Code widths between adjacent transitions: code 001: $0.95 - 0.55 = 0.40$ V; 010: 0.50 V; 011: 0.25 V; 100: 0.50 V; 101: 0.75 V; 110: 0.60 V.' },
          { label: 'Step 2', text: 'DNL = width/LSB − 1: $-0.2, 0, -0.5, 0, +0.5, +0.2$ LSB; worst magnitude 0.5 LSB (code 011).' },
          { label: 'Step 3', text: 'INL at each transition = (measured − ideal)/LSB: $+0.1, -0.1, -0.1, -0.6, -0.6, -0.1, +0.1$ LSB; worst magnitude 0.6 LSB.' },
          { label: 'Step 4', text: 'Consistency check — INL is the running sum of DNL: at the fourth transition, $+0.1 + (-0.2 + 0 - 0.5) = -0.6$ LSB, matching the direct deviation.' },
          { label: 'Step 5', text: 'Verdict: every width is positive, so no code is missing and the staircase never reverses (monotonic); but the −0.6 LSB bow would fail a ±½ LSB INL specification.' },
        ],
        result: 'Worst DNL = −0.5 LSB (code 011), worst INL = −0.6 LSB (transitions 4–5); no missing codes, monotonic — yet outside a ±½ LSB INL spec.',
      },
      {
        title: 'Aperture-jitter and droop budget for 12 bits at 2 MHz',
        problem: 'A 12-bit system samples a 2 MHz signal (74 dB SQNR target) with a 12 µs SAR conversion and a 5 V range. Find (a) the maximum rms aperture jitter and (b) the minimum hold capacitance if total leakage is 1 nA.',
        steps: [
          { label: 'Step 1', text: 'Jitter bound: $t_j = \\frac{10^{-\\text{SNR}/20}}{2\\pi f_{in}} = \\frac{10^{-74/20}}{2\\pi \\times 2 \\times 10^6}$.' },
          { label: 'Step 2', text: 'Evaluate: $10^{-3.7} = 2.0 \\times 10^{-4}$ and $2\\pi \\times 2\\times 10^6 = 1.257 \\times 10^7$, so $t_j = \\frac{2.0 \\times 10^{-4}}{1.257 \\times 10^7} = 15.9$ ps rms.' },
          { label: 'Step 3', text: 'Droop budget: $\\text{LSB} = \\frac{5}{4096} = 1.22$ mV, so ½ LSB = 0.61 mV over 12 µs → droop $< \\frac{0.61\\ \\text{mV}}{12\\ \\mu\\text{s}} \\approx 51$ V/s.' },
          { label: 'Step 4', text: 'Hold capacitor: $C = \\frac{I}{dV/dt} = \\frac{1\\ \\text{nA}}{51\\ \\text{V/s}} \\approx 20$ pF — and acquisition through, say, 1 kΩ must still settle 8.3 τ ($\\approx 0.18\\ \\mu\\text{s}$ for 22 pF), comfortably inside the 12 µs window.' },
        ],
        result: '(a) $t_j \\le 16$ ps rms; (b) $C_{hold} \\ge 20$ pF (choose 22 pF with margin), trading droop against acquisition settling.',
      },
    ],
    keyTakeaways: [
      'Offset = parallel shift of the transfer curve (read at zero scale); gain = slope error of the span after offset removal — both calibratable in software, and both distinct from resolution.',
      'DNL is the per-code step error ($W_k/\\text{LSB} - 1$): DNL ≤ −1 LSB means a missing code; INL is the accumulated bow of the curve, and ±½ LSB INL guarantees monotonicity.',
      'Aperture jitter caps SNR at $-20\\log_{10}(2\\pi f_{in} t_j)$ — 1 MHz with 1 ns jitter is only 44 dB — while droop must stay under ½ LSB per conversion, sizing the hold capacitor against leakage.',
      'The DAQ chain is sensor → conditioning → (MUX → S/H →) ADC → digital; multiplexing divides throughput by the channel count, and architecture follows the resolution-speed-power map: dual-slope, sigma-delta, SAR, pipeline, flash.',
    ],
    quiz: [
      {
        q: 'A converter’s datasheet lists DNL = −1.5 LSB at code 176. This means',
        options: ['code 176 is wider than ideal', 'code 176 never appears at the output — it is missing', 'the converter runs 1.5 times too slowly at that code', 'the offset error is 1.5 LSB'],
        answer: 1,
        explanation: 'Step 1: $\\text{DNL}(k) = W_k/\\text{LSB} - 1$ measures the width of code k. Step 2: DNL of −1 LSB already means zero width — the code is skipped entirely. Step 3: −1.5 LSB is beyond that: the transition overshoots and code 176 never appears in the output stream. Step 4: Offset is a whole-curve shift, not a per-code width error — a different specification altogether.',
      },
      {
        q: 'A 1 MHz sinusoid is sampled with 1 ns rms aperture jitter. The jitter-limited SNR is about',
        options: ['$96\\ \\text{dB}$', '$74\\ \\text{dB}$', '$62\\ \\text{dB}$', '$44\\ \\text{dB}$'],
        answer: 3,
        explanation: 'Step 1: The jitter ceiling is $\\text{SNR} = -20\\log_{10}(2\\pi f_{in} t_j)$. Step 2: $2\\pi \\times 10^6 \\times 10^{-9} = 6.28 \\times 10^{-3}$. Step 3: $-20\\log_{10}(6.28 \\times 10^{-3}) \\approx 44$ dB. Step 4: That is barely 7 effective bits — at high input frequencies the clock jitter, not the resolution, sets the ceiling.',
      },
      {
        q: 'An 8-channel data-acquisition system multiplexes one 100 kSPS ADC across all channels. The per-channel sampling rate is',
        options: ['$100\\ \\text{kSPS}$', '$800\\ \\text{kSPS}$', '$12.5\\ \\text{kSPS}$', '$50\\ \\text{kSPS}$'],
        answer: 2,
        explanation: 'Step 1: One converter serves 8 channels in round-robin fashion. Step 2: The total throughput of 100 kSPS is shared equally, giving $\\frac{100}{8} = 12.5$ kSPS per channel. Step 3: 800 kSPS is the impossible direction — multiplexing divides the per-channel rate, never multiplies it. Step 4: The hidden divide-by-channel-count is the standard trap in DAQ numericals; check for it before answering.',
      },
      {
        q: 'A DAC whose output never decreases as the input code increases is called',
        options: ['monotonic', 'self-calibrating', 'quantization-free', 'differential'],
        answer: 0,
        explanation: 'Step 1: Monotonicity is the property that every code increment produces a non-negative output step. Step 2: It requires DNL ≥ −1 LSB at every code, since a negative step would reverse the output direction. Step 3: INL within ±½ LSB is a sufficient condition, because it bounds how far the curve can bow. Step 4: It matters practically because a non-monotonic DAC in a feedback or control loop creates spurious zero crossings and can force oscillation.',
      },
    ],
  },
]
