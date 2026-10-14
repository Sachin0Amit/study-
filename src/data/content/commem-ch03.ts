import type { SectionContent } from '../library'

// ============================================================================
// Communications — Chapter 3: Digital Modulation and Detection
// Master study content. Math is LaTeX rendered by KaTeX via RichText.
// ============================================================================

export const commemCh03Content: SectionContent[] = [
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: 'commem-ch3-s1',
    readingTime: 9,
    intro: 'Pulse-code modulation turns voice into bits by sampling fast enough, rounding each sample, and coding the levels in binary. Quantization adds a sawtooth error whose power sets the familiar six-decibel-per-bit rule. This section sizes rates, noise and companding for telephony-grade speech.',
    objectives: [
      'Apply Nyquist sampling rate to any baseband width',
      'Compute quantization noise and signal-to-noise for N bits',
      'Explain companding and delta variants for speech efficiency'
    ],
    concepts: [
      {
        term: 'Nyquist sampling rate',
        kind: 'theorem',
        statement: 'Reconstruction needs sampling above **twice top frequency** `FS`, namely $$f_{s} \\geq 2 f_{max}.$$ Guard `margin` pushes `FS` slightly higher.',
        detail: 'Speech to $3400$ hertz samples at $8000$ per second with margin. Undersampling folds highs into false lows called aliasing.'
      },
      {
        term: 'Uniform quantization step',
        kind: 'definition',
        statement: 'Range **V full-scale** `VFS` split into **two to the N** levels `LVL` gives step $$\\Delta = \\frac{V_{FS}}{2^{N}}.$$ Error stays within **half step** `ERR`.',
        detail: 'Range $8$ volts with $N = 3$ gives $8$ levels and step $1$ volt. More bits halve the step and quarter the noise power.'
      },
      {
        term: 'Quantization noise power',
        kind: 'theorem',
        statement: 'Uniform error power is **delta squared over twelve** `QN`, namely $$P_{q} = \\frac{\\Delta^{2}}{12}.$$ Signal ratio for full sine is about $$SNR \\approx 6.02 N + 1.76 \\text{ dB}.$$',
        detail: 'With $N = 8$, ratio is about $49.9$ decibels. Each added bit adds $6$ decibels by halving step.'
      },
      {
        term: 'Bit rate of PCM',
        kind: 'method',
        statement: 'Rate equals **samples times bits** `RATE`, namely $$R_{b} = f_{s} \\times N.$$ Telephony uses $$8000 \\times 8 = 64000$$ bits per second `DS0`.',
        detail: 'Compact-disc audio uses $44100$ times $16$ per channel, about $705600$ bits per second. Higher fidelity multiplies both factors.'
      },
      {
        term: 'Companding and DPCM preview',
        kind: 'method',
        statement: 'Logarithmic **companding** `LAW` boosts small amplitudes before uniform steps, while **DPCM** `DPCM` codes **differences** `DIFF` with fewer `bits`.',
        detail: 'A-law and mu-law curves give 8-bit quality near 12-bit uniform for speech. Delta modulation is one-bit DPCM tracking slope with granular versus overload trade.'
      }
    ],
    examples: [
      {
        title: 'Telephony PCM rate and SNR',
        problem: 'Speech band 3400 hertz, 8 bits per sample at 8000 samples per second. Find rate and SNR.',
        steps: [
          { label: 'Step 1', text: 'Rate $8000$ times $8$ which is $64000$ bits per second for `RATE`.\n```text\nRb=8000x8=64 kbps; SNR=6.02x8+1.76=49.92 dB\n```' },
          { label: 'Step 2', text: 'SNR $6.02$ times $8$ plus $1.76$ which is $49.92$ decibels using `QN` rule.' },
          { label: 'Step 3', text: 'Step $\\Delta$ with $256$ levels over telephony range keeps error $48$ decibels below overload sine.' }
        ],
        result: '64 kilobits per second with about 50 decibels quantization SNR.'
      },
      {
        title: 'Bit saving with DPCM intuition',
        problem: 'Adjacent speech samples correlate at 0.9. Compare PCM 8 bits against DPCM 4 bits on differences.',
        steps: [
          { label: 'Step 1', text: 'Difference variance is $(1 - 0.81)$ fraction of original, about $0.19$, needing fewer `LVL`.' },
          { label: 'Step 2', text: 'Four bits on small range match eight bits on full range for `DIFF` coding.' },
          { label: 'Step 3', text: 'Rate halves from $64000$ to $32000$ bits per second with predictor feedback preventing drift.' }
        ],
        result: 'DPCM halves rate by coding small differences not full amplitudes.'
      }
    ],
    keyTakeaways: [
      'Sampling needs at least twice the top frequency plus margin.',
      'Step equals full range over two to the N with half-step error.',
      'SNR grows six decibels per bit plus 1.76 for full sine.',
      'Companding and difference coding squeeze speech into fewer bits.'
    ],
    quiz: [
      // PYQ-pattern: PCM rate and quantization SNR numerics
      {
        q: '4-kilohertz baseband needs sampling at least:',
        options: ['4000 per second', '2000 per second', '8000 per second', '16000 bits per second'],
        answer: 2,
        explanation: 'Step 1: Rule is twice top frequency. Step 2: Double 4000 giving 8000. Step 3: Units are samples per second. Step 4: Higher 8000 plus margin is safe.'
      },
      {
        q: 'PCM with 8000 samples and 8 bits gives:',
        options: ['64000 bps', '8000 bps', '3400 bps', '56000 bps'],
        answer: 0,
        explanation: 'Step 1: Multiply samples by bits. Step 2: 8000 times 8 is 64000. Step 3: Label is bits per second. Step 4: Fewer bits scale linearly.'
      },
      {
        q: 'Eight-bit full-sine SNR is about:',
        options: ['25 dB', '80 dB', '8 dB', '50 dB'],
        answer: 3,
        explanation: 'Step 1: Six times 8 is 48.16. Step 2: Add 1.76 giving 49.92. Step 3: Round to 50 decibels. Step 4: Each bit adds 6.'
      },
      {
        q: 'Companding helps speech by:',
        options: ['raising sample rate', 'boosting small amplitudes before uniform steps', 'removing filters', 'adding carriers'],
        answer: 1,
        explanation: 'Step 1: Speech favors small values. Step 2: Log curve expands lows. Step 3: Uniform steps then act finer there. Step 4: Rate stays 64 kilobits with better perceived noise.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.2
  {
    sectionId: 'commem-ch3-s2',
    readingTime: 10,
    intro: 'Digital symbols ride on amplitude, phase or frequency shifts of the carrier while quadrature mixes carry two bits at once in one constellation. Spacing between points sets error resistance and bits per symbol set spectral thrift. This section compares four classic families and their coherent costs.',
    objectives: [
      'Map bit groups to ASK PSK FSK and QAM points',
      'Trade Euclidean distance against bits per symbol and bandwidth',
      'Select coherent versus noncoherent detection by channel stability'
    ],
    concepts: [
      {
        term: 'ASK OOK and levels',
        kind: 'definition',
        statement: 'Amplitude shift keys **carrier height** `AMP` among levels while frequency stays fixed. On-off form uses **zero versus carrier** `OOK`.',
        detail: 'Four levels carry 2 bits per symbol with three thresholds. Fading scales all heights together, hurting thresholds.'
      },
      {
        term: 'PSK phase spacing',
        kind: 'definition',
        statement: 'Phase shift keys **angle** `PH` among equally spaced points as $$s_{k}(t) = A\\cos(\\omega_{c}t + \\theta_{k}).$$ Binary antipodal uses **half-circle** `BPSK` separation.',
        detail: 'QPSK at 45, 135, 225, 315 degrees carries 2 bits with 90-degree spacing. Eight-phase packs 3 bits but halves angular gaps.'
      },
      {
        term: 'FSK tone orthogonality',
        kind: 'definition',
        statement: 'Frequency shift keys **tone choice** `TONE` per symbol with spacing near **symbol rate** `ORTH` for orthogonality. Envelope `detection` allows `noncoherent` use.',
        detail: 'Binary tones at plus and minus half rate separate cleanly over one symbol. Wider spacing wastes spectrum for simpler receivers.'
      },
      {
        term: 'QAM grid and trade-off',
        kind: 'theorem',
        statement: 'Quadrature mix carries **two ASK streams** `IQ` on cosine and sine, forming a **grid** `QAM` with $$M = 2^{k}$$ points for $k$ bits. Minimum distance shrinks as **one over root M** for fixed `power`.',
        detail: 'Sixteen-point grid carries 4 bits with inner, edge and corner energies. Doubling bits from 4 to 6 needs about 4 decibels more for equal spacing.'
      },
      {
        term: 'Coherent versus noncoherent cost',
        kind: 'insight',
        statement: 'Coherent uses **carrier reference** `LO` for full distance while noncoherent uses **energy or phase change** `DIFF` with about **one-decibel** penalty `PEN`. Fading favors `differential` forms.',
        detail: 'DPSK encodes change not absolute phase, surviving slow rotations. FSK envelopes skip phase tracking entirely at wider tone cost.'
      }
    ],
    examples: [
      {
        title: 'Bits symbols and bandwidth for 16-QAM',
        problem: 'Data 64 kilobits per second must ride 16-QAM with ideal Nyquist bandwidth. Find symbol rate and relative width versus QPSK.',
        steps: [
          { label: 'Step 1', text: 'Bits per symbol $k = 4$ since $16 = 2^{4}$.\n```text\nRs = 64 over 4 = 16 kbaud; QPSK Rs = 64 over 2 = 32 kbaud\nBW scales with Rs so 16-QAM halves width\n```' },
          { label: 'Step 2', text: 'Symbol rate $64000$ divided by $4$ which is $16000$ symbols per second using `QAM`.' },
          { label: 'Step 3', text: 'QPSK at $2$ bits needs $32000$ symbols, double the width. Saving costs closer `grid` spacing and higher power need.' }
        ],
        result: '16-QAM halves bandwidth to 16 kilobaud versus 32 for QPSK at same data.'
      },
      {
        title: 'Choose FSK for fading link',
        problem: 'Mobile link fades fast with unstable phase but steady tone energy. Pick between QPSK coherent and BFSK noncoherent.',
        steps: [
          { label: 'Step 1', text: 'QPSK needs `LO` phase lock within tens of degrees. Fast fade breaks `PH` reference.' },
          { label: 'Step 2', text: 'BFSK decides by `TONE` energy without phase. Penalty near $1$ decibel plus wider `ORTH` spacing.' },
          { label: 'Step 3', text: 'Select BFSK for robustness despite double bandwidth. Differential PSK is the middle path if width matters.' }
        ],
        result: 'Noncoherent FSK survives phase instability at bandwidth cost.'
      }
    ],
    keyTakeaways: [
      'ASK varies height, PSK varies angle, FSK varies tone, QAM varies both height and angle.',
      'More bits per symbol narrows bandwidth but squeezes point spacing.',
      'QAM grid distance falls with root of size at fixed power.',
      'Coherent keeps full distance while noncoherent trades small penalty for no carrier lock.'
    ],
    quiz: [
      {
        q: '64 kilobits with 16-QAM needs symbol rate:',
        options: ['64 kbaud', '32 kbaud', '4 kbaud', '16 kbaud'],
        answer: 3,
        explanation: 'Step 1: Bits per symbol is 4. Step 2: Divide 64 by 4. Step 3: Quotient 16 kbaud. Step 4: QPSK would need 32 kbaud.'
      },
      // PYQ-pattern: constellation size versus distance and bandwidth trade
      {
        q: 'Moving QPSK to 16-QAM at fixed power and data:',
        options: ['widens bandwidth and widens spacing', 'narrows bandwidth but squeezes spacing needing more power', 'no change', 'removes need for carrier'],
        answer: 1,
        explanation: 'Step 1: Bits rise 2 to 4. Step 2: Symbol rate halves so width halves. Step 3: Sixteen points pack tighter than four. Step 4: Extra 4 decibels restores spacing.'
      },
      {
        q: 'BFSK noncoherent versus BPSK coherent mainly:',
        options: ['wider tones with small penalty but no phase lock', 'same bandwidth same sensitivity', 'narrower with better sensitivity', 'uses QAM grid'],
        answer: 0,
        explanation: 'Step 1: Tones separate by symbol rate. Step 2: Energy detection skips LO. Step 3: Penalty near 1 decibel. Step 4: Width doubles versus BPSK.'
      },
      {
        q: '8-PSK carries per symbol:',
        options: ['1 bit', '2 bits', '3 bits', '8 bits'],
        answer: 2,
        explanation: 'Step 1: Points equal 8. Step 2: Bits equal log base two of 8. Step 3: Value is 3. Step 4: Spacing 45 degrees is tight.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.3
  {
    sectionId: 'commem-ch3-s3',
    readingTime: 9,
    intro: 'Pulses sent faster than the channel allows smear into neighbors and create intersymbol interference at sampling instants. Zero-crossing pulse shapes remove that smear while wider excess bandwidth eases timing sensitivity. This section applies the Nyquist zero-ISI rule and previews equalization for real channels.',
    objectives: [
      'State zero-ISI condition in time and frequency',
      'Size Nyquist bandwidth and raised-cosine excess for a symbol rate',
      'Explain equalizer role when channels break the ideal shape'
    ],
    concepts: [
      {
        term: 'ISI at sampling instants',
        kind: 'definition',
        statement: 'Tails from neighbors add **interference** `ISI` to the current sample unless shaped to **zero** there. Value reads $$y_{k} = x_{k} + \\sum_{m \\neq 0} x_{k-m} h_{m}$$ with tail `h` weights.',
        detail: 'Rectangular pulses through narrow filters leave large $h_{1}$ tails. Sampler then sees sum not single symbol.'
      },
      {
        term: 'Nyquist zero-ISI criterion',
        kind: 'theorem',
        statement: 'Zero crossings at **symbol multiples** `ZERO` remove interference, needing folded spectrum to sum **flat** `FLAT`. Time form is $$h(mT_{s}) = 0 \\text{ for } m \\neq 0.$$',
        detail: 'Sinc pulse with zeros every $62.5$ microseconds suits $16000$ symbols per second. Any neighbor contributes exactly zero at decision times.'
      },
      {
        term: 'Minimum Nyquist bandwidth',
        kind: 'theorem',
        statement: 'Ideal lowpass needs **half symbol rate** `NBW`, namely $$B_{min} = \\frac{R_{s}}{2}.$$ Baseband `edges` meet exactly at `fold`.',
        detail: 'Rate $16000$ needs $8000$ hertz minimum one-sided. Narrower cuts fold unevenly and reopens tails.'
      },
      {
        term: 'Raised-cosine excess factor',
        kind: 'method',
        statement: 'Practical shape adds **roll-off** `ROLL` fraction $$B = \\frac{R_{s}}{2}(1 + \\alpha)$$ with $$0 \\leq \\alpha \\leq 1.$$ Larger `ALPHA` widens `band` but calms `timing`.',
        detail: 'With $R_{s} = 16000$ and $\\alpha = 0.5$, width is $12000$ hertz. Zero crossings stay while sidelobes decay faster.'
      },
      {
        term: 'Equalization preview',
        kind: 'insight',
        statement: 'Real channels distort the shape, so an **equalizer** `EQ` inverts the tail with tap **weights** `W`. Minimum-error solution is called **MMSE** `MMSE`.',
        detail: 'Three taps cancel precursor and postcursor around main cursor. Training symbols adapt weights before payload flows.'
      }
    ],
    examples: [
      {
        title: 'Bandwidth for 16-kilobaud with roll-off half',
        problem: 'Symbol rate 16000 with alpha 0.5. Find minimum and practical bandwidths plus zero spacing.',
        steps: [
          { label: 'Step 1', text: 'Minimum $16000$ divided by $2$ which is $8000$ hertz for `NBW`.\n```text\nBmin=Rs/2=8 kHz; B=8x1.5=12 kHz; zeros every 62.5 us\n```' },
          { label: 'Step 2', text: 'Practical $8000$ times $1.5$ which is $12000$ hertz using `ROLL`.' },
          { label: 'Step 3', text: 'Zeros every $1$ divided by $16000$ which is $62.5$ microseconds. Jitter tolerance improves over ideal sinc.' }
        ],
        result: '8 kilohertz ideal grows to 12 kilohertz with half excess and 62.5-microsecond zeros.'
      },
      {
        title: 'Three-tap equalizer intuition',
        problem: 'Channel leaves precursor 0.2 and postcursor 0.3 around main 1.0. Show tap goal.',
        steps: [
          { label: 'Step 1', text: 'Received vector mixes neighbors through `ISI` weights 0.2, 1.0, 0.3.' },
          { label: 'Step 2', text: 'Equalizer `EQ` aims inverse response canceling both tails toward zero while keeping main near unity.' },
          { label: 'Step 3', text: 'Residual mean square minimized by `MMSE` taps adapts as channel drifts.' }
        ],
        result: 'Short FIR restores zero crossings distorted by the channel.'
      }
    ],
    keyTakeaways: [
      'ISI sums neighbor tails at each sampling instant.',
      'Zero-ISI needs pulse zeros at nonzero symbol multiples.',
      'Minimum width is half the symbol rate one-sided.',
      'Raised cosine trades excess width for timing robustness before equalization.'
    ],
    quiz: [
      // PYQ-pattern: Nyquist bandwidth and raised-cosine excess
      {
        q: 'Symbol rate 8000 needs minimum one-sided bandwidth:',
        options: ['4000', '8000', '16000', '2000'],
        answer: 0,
        explanation: 'Step 1: Rule is rate over two. Step 2: Divide 8000 by 2. Step 3: Result 4000 hertz. Step 4: Roll-off only widens above this.'
      },
      {
        q: 'Rate 16000 with alpha 0.5 needs practical width:',
        options: ['8000', '16000', '12000', '24000'],
        answer: 2,
        explanation: 'Step 1: Minimum 8000 hertz. Step 2: Factor 1 plus 0.5 is 1.5. Step 3: Multiply 8000 by 1.5 giving 12000. Step 4: Alpha unity would give 16000.'
      },
      {
        q: 'Zero-ISI time condition is:',
        options: ['peak at every instant', 'zeros at nonzero symbol multiples', 'flat top always', 'infinite width'],
        answer: 1,
        explanation: 'Step 1: Neighbors must vanish at decision. Step 2: Main stays unity. Step 3: Sinc zeros every symbol period achieve this. Step 4: Other shapes smear.'
      },
      {
        q: 'Equalizer MMSE primarily:',
        options: ['adds more ISI', 'removes carrier', 'raises transmit power', 'inverts channel tails to minimize mean square error'],
        answer: 3,
        explanation: 'Step 1: Channel distorts ideal zeros. Step 2: FIR taps approximate inverse. Step 3: Criterion minimizes squared residual. Step 4: Training adapts weights.'
      }
    ]
  },
  // ---------------------------------------------------------------- 3.4
  {
    sectionId: 'commem-ch3-s4',
    depth: [
      {
        tier: 'masters',
        title: 'Matched filtering and optimal detection theory',
        blocks: [
          {
            kind: 'para',
            body: 'Detecting a known pulse $s(t)$ in white Gaussian noise reduces to a single number — the correlation of the received waveform with a template. The **matched filter** with impulse response $h(t) = s^{\\ast}(T-t)$ maximizes snapshot signal-to-noise ratio before the sampler, and the sampler threshold then trades false alarm against miss. Graduate detection theory frames this as **geometry**: signals are vectors, noise is isotropic, and the optimal receiver projects onto the known direction. Error probability falls with distance over noise, $d/\\sigma$, through the Gaussian tail, unifying all coherent schemes under one curve.'
          },
          {
            kind: 'theorem',
            body: 'Among all linear filters, the matched filter uniquely maximizes output signal-to-noise ratio, attaining $$SNR_{max} = \\frac{2E}{N_0},$$ where $E$ is pulse energy and $N_0/2$ is two-sided noise density. Sampling at the peak and deciding by minimum distance is **maximum-likelihood** for equal-prior symbols, with bit-error rate $$P_b = Q\\left(\\sqrt{\\frac{2E_b}{N_0}}\\right)$$ for antipodal signaling, where $Q$ is the Gaussian tail. No other linear front end achieves lower error at the same $E_b/N_0$.'
          },
          {
            kind: 'proof',
            body: 'Write filter output at $T$ as inner product $\\langle r, h\\rangle$ with $r = s + n$. Signal part is $|\\langle s, h\\rangle|^{2}$, noise variance is $(N_0/2)||h||^{2}$. Cauchy-Schwarz gives $$|\\langle s,h\\rangle|^{2} \\leq ||s||^{2}||h||^{2}$$ with equality exactly when $h$ is proportional to $s$ time-reversed and conjugated — the matched condition. Substituting equality yields $2E/N_0$. Maximum-likelihood follows because Gaussian likelihood is monotone in Euclidean distance, so nearest-constellation decision minimizes error; integrating the one-dimensional marginal along the signal direction gives the $Q$ form. Whitening extends the argument to colored noise by pre-filtering with $1/\\sqrt{S(f)}$.'
          },
          {
            kind: 'example',
            heading: 'BPSK versus orthogonal spacing',
            body: 'Antipodal bits at distance $2\\sqrt{E_b}$ achieve $P_b = Q(\\sqrt{2E_b/N_0})$, while orthogonal pulses at distance $\\sqrt{2E_b}$ need $3$ dB more energy for the same rate — the geometric penalty for right-angle placement. Quadrature constellations pack two orthogonal axes, doubling bits per symbol at the cost of halved per-bit distance, which union bounds translate into exact curves. The lesson generalizes: constellation design is sphere packing under an energy shell, and coding adds dimensions to pack more densely — the bridge to Shannon limits.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'The best linear receiver correlates against the known pulse shape to maximize snap-shot signal to noise before deciding. That matched output then feeds a threshold whose error rate falls with distance over noise. This section orders error performance across classic schemes from the same energy base.',
    objectives: [
      'State matched-filter form and peak-SNR property',
      'Compute bit-error ordering from distance ratios',
      'Compare coherent schemes at equal bit energy'
    ],
    concepts: [
      {
        term: 'Matched filter shape',
        kind: 'theorem',
        statement: 'Peak SNR uses **time-reversed pulse** `MF` as $$h(t) = s(T_{s} - t).$$ Output at `peak` samples **energy** `E` over noise.',
        detail: 'Rectangular pulse matched by same rectangle integrates over full symbol. Any other shape lowers the peak ratio.'
      },
      {
        term: 'Peak SNR formula',
        kind: 'theorem',
        statement: 'Maximum ratio is **twice energy over density** `SNR`, namely $$SNR_{max} = \\frac{2E}{N_{0}}.$$ Correlator `gain` grows with `symbol` length.',
        detail: 'Energy $10$ units with $N_{0} = 2$ gives ratio $10$. Doubling pulse length doubles energy and ratio.'
      },
      {
        term: 'Q-function error law',
        kind: 'method',
        statement: 'Threshold errors follow **tail probability** `Q` as $$P_{b} = Q\\left(\\sqrt{\\frac{d^{2}}{2N_{0}}}\\right)$$ with distance `d` between `points`. Larger `d` lowers `errors`.',
        detail: 'Antipodal distance twice amplitude beats orthogonal at same energy. Q falls steeply once argument exceeds 3.'
      },
      {
        term: 'Coherent ordering at equal energy',
        kind: 'insight',
        statement: 'From best to worst the order is **BPSK then QPSK then FSK** kept as `ORDER`, with QAM placed by **spacing** `GRID`. QPSK matches `BPSK` per bit with `quadrature` doubling.',
        detail: 'BPSK and QPSK share bit curves while orthogonal FSK needs about 3 decibels more for equal rate. Sixteen-point QAM needs near 4 decibels over QPSK.'
      },
      {
        term: 'MAP versus ML decision',
        kind: 'definition',
        statement: 'Maximum-likelihood picks **nearest point** `ML` while maximum-a-posteriori weights by **priors** `MAP`. Equal `priors` make `rules` identical.',
        detail: 'Skewed source with 90 percent zeros shifts threshold toward one. Uniform bits keep midpoint threshold optimal.'
      }
    ],
    examples: [
      {
        title: 'Matched peak for rectangular pulse',
        problem: 'Pulse amplitude 2 over 1 millisecond, noise density 0.5 units. Find energy and peak SNR.',
        steps: [
          { label: 'Step 1', text: 'Energy $4$ times $0.001$ which is $0.004$ joules for `E`.\n```text\nE=A^2xT=4x1ms=4mJ; SNR=2E/N0=8m/0.5=0.016 linear\nscale x1000 for units -> 16 linear ~12 dB\n```' },
          { label: 'Step 2', text: 'Ratio $2$ times $0.004$ divided by $0.5$ which is $0.016$ in base units, $16$ after milli scaling.' },
          { label: 'Step 3', text: 'Matched `MF` integrator attains this bound; shorter window or mismatch lowers peak.' }
        ],
        result: 'Peak ratio near 12 decibels set by twice energy over density.'
      },
      {
        title: 'Order three schemes at 7 decibels',
        problem: 'Eb over N0 5 linear. Rank BPSK, orthogonal FSK and 16-QAM bit errors qualitatively.',
        steps: [
          { label: 'Step 1', text: 'BPSK distance largest per energy with `ORDER` first. Q argument near root of $10$.' },
          { label: 'Step 2', text: 'FSK orthogonal halves distance squared, needing double energy for same `Q`.' },
          { label: 'Step 3', text: 'Sixteen-point `GRID` squeezes further, worst of three at equal bit energy.' }
        ],
        result: 'BPSK best, FSK middle with 3-decibel penalty, 16-QAM last without extra power.'
      }
    ],
    keyTakeaways: [
      'Matched filter time-reverses the pulse to peak SNR.',
      'Peak ratio equals twice energy over noise density.',
      'Error tail shrinks with point distance over noise.',
      'BPSK and QPSK lead while FSK and dense QAM trail per energy.'
    ],
    quiz: [
      {
        q: 'Matched filter impulse is:',
        options: ['derivative of pulse', 'same as pulse reversed in time', 'constant one', 'random taps'],
        answer: 1,
        explanation: 'Step 1: Correlate with known shape. Step 2: Reverse gives causal peak at symbol end. Step 3: Energy collects fully. Step 4: Other shapes mismatch.'
      },
      // PYQ-pattern: matched SNR and BER ordering across schemes
      {
        q: 'Energy 10 with N0 2 gives peak SNR:',
        options: ['5', '2', '20', '10'],
        answer: 3,
        explanation: 'Step 1: Numerator twice energy is 20. Step 2: Divide by 2. Step 3: Quotient 10 linear. Step 4: Decibels 10 log 10 is 10.'
      },
      {
        q: 'At equal bit energy, best BER is:',
        options: ['16-QAM', 'orthogonal FSK', 'BPSK', 'all equal'],
        answer: 2,
        explanation: 'Step 1: Antipodal has largest distance. Step 2: QPSK matches per bit. Step 3: FSK needs 3 decibels more. Step 4: Dense QAM needs still more.'
      },
      {
        q: 'MAP differs from ML when:',
        options: ['priors are unequal', 'noise is white', 'filter is matched', 'energy is equal'],
        answer: 0,
        explanation: 'Step 1: ML assumes equal priors. Step 2: MAP multiplies by source probability. Step 3: Skew 90 percent zeros shifts threshold. Step 4: Uniform restores ML rule.'
      }
    ]
  }
]
