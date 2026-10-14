import type { SectionContent } from '../library'

// ============================================================================
// Communications — Chapter 1: Random Processes and White Noise
// Master study content. Math is LaTeX rendered by KaTeX via RichText.
// ============================================================================

export const commemCh01Content: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: 'commem-ch1-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Random processes: autocorrelation and power spectra',
        blocks: [
          {
            kind: 'para',
            body: 'A **wide-sense stationary** process is described by its mean $m$ and autocorrelation $R(\\tau) = E[X(t)X(t+\\tau)]$, which captures memory across lag $\\tau$. The **Wiener-Khinchin** relation pairs $R$ with power spectral density $S(f)$ as Fourier partners, so total average power follows from either side: $P = R(0) = \\int S(f) df$. Graduate modeling treats this pair as the stochastic analogue of deterministic energy bookkeeping — correlation width in time trades against spectral width in frequency, and white versus colored distinctions reduce to flat versus shaped $S(f)$. Ergodicity then justifies estimating ensemble averages from single long records.'
          },
          {
            kind: 'theorem',
            body: 'For wide-sense stationary $X(t)$, autocorrelation is **positive semidefinite**: for all lags $\\tau_i$ and weights $a_i$, $$\\sum_{i,j} a_i a_j R(\\tau_i - \\tau_j) \\geq 0,$$ with $R(0) \\geq |R(\\tau)|$ and $R(-\\tau) = R(\\tau)$ for real processes. Its Fourier transform $S(f)$ is real, even and nonnegative everywhere, and power in any band $[f_1, f_2]$ equals $2\\int_{f_1}^{f_2} S(f) df$ counting both sides. No other constraints bind $R$ and $S$ — any such pair is realizable by some Gaussian process.'
          },
          {
            kind: 'proof',
            body: 'Nonnegativity of power in every linear filter proves spectral positivity: pass $X(t)$ through a narrowband filter centered at $f_0$ with energy-normalized response $H(f)$; output power $\\int |H(f)|^{2}S(f)df$ must be nonnegative for all $H$, forcing $S(f_0) \\geq 0$ in the narrowband limit. Bound $|R(\\tau)| \\leq R(0)$ follows from Cauchy-Schwarz on $X(t)$ and $X(t+\\tau)$ with identical variance $R(0)$. Realizability uses Kolmogorov construction: given a valid $R$, define Gaussian finite-dimensional distributions with covariance $R(\\tau_i-\\tau_j)$, check consistency under marginalization, and extend to a full process — the same argument that justifies simulating colored noise by shaping white noise through $\\sqrt{S(f)}$.'
          },
          {
            kind: 'application',
            body: 'Receiver analysis applies the pair end to end: thermal noise contributes flat $N_0/2$ per dimension, front-end filtering shapes it to $|H(f)|^{2}N_0/2$, and baseband sampling folds the shaped density through aliasing sums. Fading models extend stationarity to **wide-sense stationary uncorrelated scattering**, where delay spread and Doppler spread are Fourier-dual widths exactly like $R$ and $S$. Modern estimators learn parametric $R$ or $S$ from data — autoregressive spectra, periodogram averaging — trading variance against resolution under the same positivity constraints the theorem mandates.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Random signals are described by averages over ensembles rather than single waveforms in time. Autocorrelation captures memory across delays while its Fourier partner spreads average power across frequency. This section builds that pair and shows how total power follows from either side.',
    objectives: [
      'State wide-sense stationarity and read autocorrelation at zero lag',
      'Apply Wiener-Khintchin pair between correlation and spectral density',
      'Compute average power by integrating density over frequency'
    ],
    concepts: [
      {
        term: 'Wide-sense stationarity',
        kind: 'definition',
        statement: 'A process is **wide-sense stationary** `WSS` when its mean `MEAN` is constant and autocorrelation depends only on **lag** `TAU`. Formally $$R_{X}(\\tau) = E[X(t)X(t+\\tau)]$$ with `TAU` as delay.',
        detail: 'Mean 5 volts stays 5 across time while correlation at lag 2 milliseconds is one number. Nonstationary processes need full time dependence instead.'
      },
      {
        term: 'Autocorrelation peak at zero',
        kind: 'theorem',
        statement: 'Magnitude is largest at **zero lag** `R0`, namely $$|R_{X}(\\tau)| \\leq R_{X}(0)$$ with equality only for **periodic** structure. Value `R0` equals **mean-square** power.',
        detail: 'With $R_{X}(0) = 9$ and $R_{X}(1) = 4$, bound holds as $4$ below $9$. Even symmetry $R_{X}(-\\tau) = R_{X}(\\tau)$ mirrors both sides.'
      },
      {
        term: 'Power spectral density pair',
        kind: 'theorem',
        statement: 'Density is the Fourier transform of **correlation** `RX`, called the **Wiener-Khintchin** relation `WK`. Pair reads $$S_{X}(f) = \\int R_{X}(\\tau) e^{-j 2 \\pi f \\tau} d\\tau$$ with `SX` nonnegative.',
        detail: 'Narrow correlation gives wide spectrum and wide correlation gives narrow spectrum. Negative frequencies mirror positive for real processes.'
      },
      {
        term: 'Power from density integral',
        kind: 'method',
        statement: 'Average power equals the **area** `AREA` under density across all frequencies as $$P = \\int S_{X}(f) df.$$ Flat density `N0` over band `B` gives $$P = N_{0} \\times B.$$',
        detail: 'Density 4 picowatts per hertz over 5000 hertz gives $20000$ picowatts total. One-sided and two-sided forms differ by a factor of two in bookkeeping.'
      },
      {
        term: 'DC versus AC power split',
        kind: 'insight',
        statement: 'Zero-frequency impulse carries **mean-square** `DC` while the rest carries **variance** `AC`. Split reads $$R_{X}(0) = m^{2} + \\sigma^{2}$$ with mean `m` and spread `SIG`.',
        detail: 'Mean 2 and variance 5 give total 9. Removing DC leaves only fluctuation power for noise analysis.'
      }
    ],
    examples: [
      {
        title: 'Power from flat density over band',
        problem: 'Two-sided density 2 units per hertz flat from minus 4000 to plus 4000 hertz. Find total power and mean-square.',
        steps: [
          { label: 'Step 1', text: 'Bandwidth spans $8000$ hertz from $-4000$ to $+4000$.\n```text\nP = density x width = 2 x 8000 = 16000 units\nR0 = P = 16000\n```' },
          { label: 'Step 2', text: 'Power $P = 2$ times $8000$ which is $16000$ using `AREA`. Integral of constant is rectangle area.' },
          { label: 'Step 3', text: 'Zero-lag correlation `R0` equals same $16000$. If mean were $10$, variance would be $16000 - 100 = 15900$.' }
        ],
        result: 'Total power 16000 units with correlation peak equal to the same value.'
      },
      {
        title: 'Read stationarity from two lags',
        problem: 'Measurements give mean 0, correlation at lag 0 equal 12 and at lag 5 equal 3, stable over hours. Decide stationarity and bound check.',
        steps: [
          { label: 'Step 1', text: 'Mean constant `MEAN` zero plus lag-only values suggest `WSS`. No clock drift appears.' },
          { label: 'Step 2', text: 'Check $|3|$ below $12$ with `R0` peak. Bound holds.' },
          { label: 'Step 3', text: 'Conclude wide-sense model fits; density follows by Fourier of the lag function.' }
        ],
        result: 'Data support WSS with peak 12 dominating lag 5 value 3.'
      }
    ],
    keyTakeaways: [
      'WSS needs constant mean plus lag-only correlation.',
      'Correlation peaks at zero lag with mean-square value.',
      'Density and correlation form a Fourier pair that preserves power.',
      'Total power equals density area and splits into DC plus variance.'
    ],
    quiz: [
      // PYQ-pattern: power from PSD area and autocorrelation peak
      {
        q: 'Two-sided density 3 per hertz over minus 2000 to plus 2000 hertz gives power:',
        options: ['6000', '3000', '12000', '4000'],
        answer: 2,
        explanation: 'Step 1: Width is 4000 hertz. Step 2: Multiply 3 by 4000 giving 12000. Step 3: Zero-lag correlation equals 12000. Step 4: Half width would give 6000.'
      },
      {
        q: 'WSS requires:',
        options: ['constant mean and lag-only correlation', 'mean varying with time', 'zero variance', 'periodic samples'],
        answer: 0,
        explanation: 'Step 1: First order mean must not drift. Step 2: Second order depends only on lag. Step 3: Values 12 and 3 illustrate lag dependence. Step 4: Other options describe stricter or unrelated cases.'
      },
      {
        q: 'If R at zero is 9 and at lag 1 is 12, the claim:',
        options: ['valid with peak elsewhere', 'needs more lags', 'proves periodicity', 'violates peak bound'],
        answer: 3,
        explanation: 'Step 1: Bound needs magnitude below R0. Step 2: 12 exceeds 9. Step 3: Difference is 3 above peak. Step 4: No stationary correlation can do this.'
      },
      {
        q: 'Mean 2 and total 9 give variance:',
        options: ['11', '5', '7', '2'],
        answer: 1,
        explanation: 'Step 1: Total equals mean square plus variance. Step 2: Mean square is 4. Step 3: Subtract 9 minus 4 giving 5. Step 4: Sum 4 plus 5 restores 9.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.2
  {
    sectionId: 'commem-ch1-s2',
    readingTime: 8,
    intro: 'White noise spreads its power evenly across every frequency just as white light mixes every color. Its time samples decorrelate instantly so each instant looks fresh and unpredictable. This section quantifies that flat spectrum, its impulse correlation, and the thermal floor that limits every receiver.',
    objectives: [
      'Write white-noise density and correlation pair from memory',
      'Explain why distinct samples are uncorrelated',
      'Compute thermal floor from temperature and bandwidth'
    ],
    concepts: [
      {
        term: 'Flat two-sided density',
        kind: 'definition',
        statement: 'Ideal white noise has **flat** density `N0` at all frequencies as $$S_{W}(f) = \\frac{N_{0}}{2}.$$ Constant `N0` sets **level** per hertz.',
        detail: 'Value $10^{-12}$ watts per hertz stays same at 1000 hertz and at 1 megahertz. Infinite bandwidth would imply infinite power, proving ideality.'
      },
      {
        term: 'Impulse autocorrelation',
        kind: 'theorem',
        statement: 'Fourier of flat density is an **impulse** `DELTA` at zero lag as $$R_{W}(\\tau) = \\frac{N_{0}}{2} \\delta(\\tau).$$ Samples at **distinct** instants are `uncorrelated`.',
        detail: 'Lag 1 microsecond gives zero while lag zero gives infinite spike with finite area. Any two different sampling times have zero covariance.'
      },
      {
        term: 'Thermal noise floor',
        kind: 'law',
        statement: 'Resistor noise power in band **B** is **kTB** stored as `KTB`, namely $$P_{n} = k T B$$ with Boltzmann `k` and temperature `T`. Density is $$N_{0} = k T.$$',
        detail: 'At $T = 290$ kelvin with $k = 1.38 \\times 10^{-23}$, density is about $4.0 \\times 10^{-21}$ watts per hertz. Over $B = 10$ megahertz power is about $4.0 \\times 10^{-14}$ watts.'
      },
      {
        term: 'One-sided versus two-sided bookkeeping',
        kind: 'notation',
        statement: 'Two-sided level **N0 over two** `N02` doubles to **N0** `N0` on positive frequencies only. Total power $$P = N_{0} \\times B$$ matches either `view`.',
        detail: 'Positive band 0 to 5000 hertz at $N_{0}$ gives same area as minus 5000 to plus 5000 at $N_{0}$ over two. Mixing forms double-counts by two.'
      },
      {
        term: 'Band-limited white noise',
        kind: 'insight',
        statement: 'Filtering to band **B** `BAND` yields finite power **N0 times B** with sinc-shaped correlation `SINC`. Zero crossings fall at **multiples** of $$\\tau = \\frac{1}{2B}.$$',
        detail: 'Band 4000 hertz gives zeros every 125 microseconds. Sampling at those spacings keeps samples uncorrelated.'
      }
    ],
    examples: [
      {
        title: 'Thermal floor in a 10-megahertz band',
        problem: 'Temperature 290 kelvin, bandwidth 10 megahertz. Find density and total noise power.',
        steps: [
          { label: 'Step 1', text: 'Density $N_{0} = kT = 1.38 \\times 10^{-23}$ times $290$ which is $4.0 \\times 10^{-21}$ watts per hertz.\n```text\nN0 = 4.0e-21 W/Hz; P = N0 x B = 4.0e-21 x 10e6 = 4.0e-14 W\n```' },
          { label: 'Step 2', text: 'Multiply by $B = 10000000$ giving $4.0 \\times 10^{-14}$ watts using `KTB`.' },
          { label: 'Step 3', text: 'In dBm this is near $-104$ dBm, the floor before adding receiver figure. Halving `BAND` halves `P`.' }
        ],
        result: 'Density 4.0e-21 watts per hertz gives 4.0e-14 watts over 10 megahertz.'
      },
      {
        title: 'Uncorrelated spacings after 4-kilohertz limit',
        problem: 'White noise limited to 4000 hertz lowpass. Find spacings where samples decorrelate.',
        steps: [
          { label: 'Step 1', text: 'Correlation follows `SINC` with first zero at $1$ divided by $8000$ which is $125$ microseconds.' },
          { label: 'Step 2', text: 'Multiples $250$, $375$ microseconds also zero. Sampling at $125$-microsecond grid keeps `DELTA`-like freshness.' },
          { label: 'Step 3', text: 'Finer spacings stay correlated while coarser multiples return to zero crossings.' }
        ],
        result: 'Zero crossings every 125 microseconds give uncorrelated sampling grid.'
      }
    ],
    keyTakeaways: [
      'White density is flat at N0 over two two-sided across all frequencies.',
      'Correlation is an impulse so distinct instants are uncorrelated.',
      'Thermal floor equals kTB with density kT set by temperature.',
      'Band limiting makes power finite with sinc correlation zeros.'
    ],
    quiz: [
      {
        q: 'White-noise autocorrelation shape is:',
        options: ['flat line', 'step', 'sine wave', 'impulse at zero lag'],
        answer: 3,
        explanation: 'Step 1: Flat spectrum transforms to impulse. Step 2: Zero lag holds all area. Step 3: Nonzero lags give zero. Step 4: Flat line describes spectrum not correlation.'
      },
      // PYQ-pattern: thermal kTB floor numerics
      {
        q: 'kT at 290 kelvin is about 4.0e-21 watts per hertz. Power over 5 megahertz is about:',
        options: ['8.0e-14 watts', '2.0e-14 watts', '4.0e-21 watts', '5.0e-6 watts'],
        answer: 1,
        explanation: 'Step 1: Multiply density by bandwidth. Step 2: 4.0e-21 times 5e6 equals 20e-15. Step 3: Rewrite as 2.0e-14 watts. Step 4: Double bandwidth would give 4.0e-14.'
      },
      {
        q: 'Two-sided N0 over two equals one-sided:',
        options: ['N0', 'N0 over four', '2 times N0', 'zero'],
        answer: 0,
        explanation: 'Step 1: Fold negative onto positive. Step 2: Two halves add. Step 3: Level doubles to N0. Step 4: Total N0 times B matches both views.'
      },
      {
        q: 'Band 4000 hertz lowpass has first correlation zero at:',
        options: ['250 microseconds', '500 microseconds', '125 microseconds', '4000 microseconds'],
        answer: 2,
        explanation: 'Step 1: Zero at 1 over 2B. Step 2: Denominator 8000. Step 3: Quotient 0.000125 seconds. Step 4: Convert to 125 microseconds.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.3
  {
    sectionId: 'commem-ch1-s3',
    readingTime: 9,
    intro: 'A linear filter shapes random inputs by weighting each frequency with its squared magnitude response. Output density follows directly while total power needs an equivalent bandwidth that compresses the shape into one number. This section practices that shaping chain from input density to output power.',
    objectives: [
      'Write output density from input density and transfer magnitude',
      'Compute equivalent noise bandwidth for simple filters',
      'Find output power and signal-to-noise change through shaping'
    ],
    concepts: [
      {
        term: 'Output density shaping law',
        kind: 'theorem',
        statement: 'Output density equals input times **squared magnitude** `HMAG`, namely $$S_{Y}(f) = S_{X}(f) |H(f)|^{2}.$$ Phase in `H` vanishes from `power`.',
        detail: 'White input at $6$ units with $|H| = 3$ at some frequency gives $54$ units there. Nulls in response carve nulls in output density.'
      },
      {
        term: 'Noise equivalent bandwidth',
        kind: 'definition',
        statement: 'Equivalent width **Bn** stored as `BN` compresses any lowpass shape into a brickwall of height **peak gain** `G0`. Definition is $$B_{n} = \\frac{1}{|H_{0}|^{2}} \\int |H(f)|^{2} df$$ over positive `frequencies`.',
        detail: 'Single-pole lowpass with 3-decibel width 2000 hertz has $B_{n}$ about $3140$ hertz, wider by factor $\\pi$ over two. Sharper skirts approach true width.'
      },
      {
        term: 'Output power integral',
        kind: 'method',
        statement: 'Total power integrates shaped density as **P equals integral** `PINT`, namely $$P_{Y} = \\int S_{X}(f) |H(f)|^{2} df.$$ White input simplifies to $$P_{Y} = N_{0} \\times B_{n}.$$',
        detail: 'White $N_{0} = 8$ units with $B_{n} = 2500$ hertz gives $20000$ units. Narrower equivalent width directly lowers noise.'
      },
      {
        term: 'RC lowpass illustration',
        kind: 'insight',
        statement: 'A single-pole response **one over root** form `RC` has $$|H(f)|^{2} = \\frac{1}{1 + (f / f_{c})^{2}}$$ with corner `FC`. Equivalent width is $$B_{n} = \\frac{\\pi}{2} f_{c}.$$',
        detail: 'Corner $1000$ hertz gives $B_{n}$ about $1570$ hertz. Tail beyond corner still passes power, explaining the excess over $1000$.'
      },
      {
        term: 'Signal versus noise shaping',
        kind: 'insight',
        statement: 'Signal and noise share the same **magnitude weight** `W`, so narrow filtering helps only when **signal fits** inside `PASS`. Over-narrowing cuts **signal** `SIG` faster than `noise`.',
        detail: 'Voice through 3000-hertz filter keeps message while halving wide noise. Data pulses need wider guard to avoid smearing symbols.'
      }
    ],
    examples: [
      {
        title: 'White through ideal 5-kilohertz lowpass',
        problem: 'Two-sided input N0 over two with N0 8 units. Ideal lowpass passes to 5000 hertz with unity gain. Find output power.',
        steps: [
          { label: 'Step 1', text: 'Equivalent width equals $5000$ hertz for brickwall with `BN`.\n```text\nP = N0 x Bn = 8 x 5000 = 40000 units\n```' },
          { label: 'Step 2', text: 'Power $P = 8$ times $5000$ which is $40000$ using `PINT`. Negative frequencies fold into one-sided count.' },
          { label: 'Step 3', text: 'Doubling `BAND` to $10000$ doubles power to $80000$. Halving gain to one half quarters power via square.' }
        ],
        result: 'Output power 40000 units set by N0 times equivalent width.'
      },
      {
        title: 'RC bandwidth penalty drill',
        problem: 'RC corner 2000 hertz, white N0 6 units. Find equivalent width and output power.',
        steps: [
          { label: 'Step 1', text: 'Width $B_{n} = 1.5708$ times $2000$ which is $3141.6$ hertz.' },
          { label: 'Step 2', text: 'Power $6$ times $3141.6$ which is $18849.6$ units.' },
          { label: 'Step 3', text: 'Brickwall at $2000$ would give $12000$, so tail adds $6849.6$ extra through `RC` skirts.' }
        ],
        result: 'RC passes 18850 units versus 12000 for brickwall at same corner.'
      }
    ],
    keyTakeaways: [
      'Output density multiplies input by squared magnitude response.',
      'Equivalent bandwidth turns any shape into equal-power brickwall width.',
      'White-noise power equals N0 times equivalent width.',
      'RC lowpass pays pi-over-two excess over its corner.'
    ],
    quiz: [
      // PYQ-pattern: output PSD shaping and equivalent bandwidth
      {
        q: 'White input through gain 3 at some frequency gives output density:',
        options: ['9 times input', '3 times input', 'unchanged', 'zero'],
        answer: 0,
        explanation: 'Step 1: Law uses magnitude squared. Step 2: Square 3 giving 9. Step 3: Multiply input by 9. Step 4: With input 6 the output is 54.'
      },
      {
        q: 'N0 8 with Bn 2500 hertz gives output power:',
        options: ['2508', '3200', '20000', '10.5'],
        answer: 2,
        explanation: 'Step 1: Power is N0 times Bn. Step 2: Multiply 8 by 2500. Step 3: Product is 20000. Step 4: Halving Bn would halve to 10000.'
      },
      {
        q: 'RC corner 1000 hertz has equivalent width about:',
        options: ['1000 hertz', '1570 hertz', '500 hertz', '3140 hertz'],
        answer: 1,
        explanation: 'Step 1: Factor pi over 2 is 1.5708. Step 2: Multiply by 1000. Step 3: Result 1570 hertz. Step 4: Brickwall would stay 1000.'
      },
      {
        q: 'Narrowing a filter helps SNR only when:',
        options: ['input is white', 'phase is zero', 'gain is unity', 'signal fits inside passband'],
        answer: 3,
        explanation: 'Step 1: Both signal and noise share weight. Step 2: Cutting beyond signal removes message. Step 3: Voice fits 3000 hertz so narrowing helps. Step 4: Pulses need wider guard.'
      }
    ]
  },
  // ---------------------------------------------------------------- 1.4
  {
    sectionId: 'commem-ch1-s4',
    readingTime: 7,
    intro: 'Bandpass noise around a carrier is easier to handle when split into slowly varying in-phase and quadrature parts. Those two baseband pieces carry the same information as the fast carrier wiggle. This section previews that split and the power sharing that follows.',
    objectives: [
      'Write narrowband noise as in-phase plus quadrature carriers',
      'State power split between the two baseband parts',
      'Explain why envelope and phase view suits bandpass systems'
    ],
    concepts: [
      {
        term: 'Narrowband decomposition form',
        kind: 'definition',
        statement: 'Bandpass noise equals **in-phase times cosine** plus **quadrature times sine** using `I` and `Q`, namely $$n(t) = n_{I}(t)\\cos(\\omega_{c}t) - n_{Q}(t)\\sin(\\omega_{c}t).$$ Envelopes `I` and `Q` vary **slowly**.',
        detail: 'Carrier 1 megahertz wiggles fast while $n_{I}$ moves over kilohertz. Slow envelopes simplify demodulator math.'
      },
      {
        term: 'Baseband power sharing',
        kind: 'theorem',
        statement: 'Each branch carries **half** the bandpass power `HALF`, namely $$P_{I} = P_{Q} = \\frac{P_{n}}{2}.$$ Variances match as $$\\sigma_{I}^{2} = \\sigma_{Q}^{2}.$$',
        detail: 'Total $20$ microwatts splits into $10$ plus $10$. Uncorrelated branches add back to full power.'
      },
      {
        term: 'Uncorrelated branch property',
        kind: 'insight',
        statement: 'At the same instant the branches are **uncorrelated** `UNC` with zero cross mean. Joint density factors as **product** `PROD` of marginals.',
        detail: 'Knowing $n_{I}$ gives no clue about $n_{Q}$ at that moment. Lags introduce cross-correlation captured by Hilbert relations.'
      },
      {
        term: 'Envelope Rayleigh preview',
        kind: 'insight',
        statement: 'Envelope **R equals root** of squares in `ENV`, namely $$R = \\sqrt{n_{I}^{2} + n_{Q}^{2}}.$$ With Gaussian branches `R` follows **Rayleigh** shape.',
        detail: 'Mean envelope scales with root of branch variance. Phase spreads uniformly over full circle.'
      },
      {
        term: 'Why baseband view helps',
        kind: 'method',
        statement: 'Demodulators multiply by **local cosine and sine** `LO` then lowpass to recover `I` and `Q`. Analysis moves from **megahertz** to `kilohertz` rates.',
        detail: 'Matched filters and samplers run on slow envelopes. Carrier phase errors rotate the pair, previewing coherent versus noncoherent loss.'
      }
    ],
    examples: [
      {
        title: 'Split 20 microwatts into branches',
        problem: 'Bandpass noise power 20 microwatts centered at 1 megahertz with 10-kilohertz width. Find branch powers and sampling view.',
        steps: [
          { label: 'Step 1', text: 'Each branch gets half: $10$ microwatts for `I` and $10$ for `Q`.\n```text\nPn=20 uW -> PI=10 uW PQ=10 uW BW baseband=5 kHz each\n```' },
          { label: 'Step 2', text: 'Baseband width is half RF width, $5$ kilohertz each. Samplers run near $10$ kilosamples per second.' },
          { label: 'Step 3', text: 'Envelope mean scales with root of $10$ microwatts. Phase uniform means no preferred angle.' }
        ],
        result: 'Two 10-microwatt slow branches replace one fast 20-microwatt carrier noise.'
      },
      {
        title: 'Recover branches by mixing',
        problem: 'Show steps to obtain in-phase branch from bandpass waveform.',
        steps: [
          { label: 'Step 1', text: 'Multiply by `LO` cosine at carrier frequency. Sum lands at double frequency, difference at baseband.' },
          { label: 'Step 2', text: 'Lowpass below $5$ kilohertz keeps `I` scaled by one half. Gain of two restores level.' },
          { label: 'Step 3', text: 'Repeat with sine for `Q`. Phase error mixes the pair by rotation matrix.' }
        ],
        result: 'Coherent mixing plus lowpass isolates slow envelopes for processing.'
      }
    ],
    keyTakeaways: [
      'Narrowband noise splits into slow I and Q on cosine and sine.',
      'Each branch holds half the bandpass power.',
      'Same-instant branches are uncorrelated with Rayleigh envelope.',
      'Demodulation recovers branches by mixing plus lowpass.'
    ],
    quiz: [
      {
        q: 'Bandpass power 24 microwatts splits as:',
        options: ['24 and 0', '12 and 12', '6 and 18', '8 and 8'],
        answer: 1,
        explanation: 'Step 1: Total splits equally. Step 2: Half of 24 is 12. Step 3: Both branches get 12. Step 4: Sum 12 plus 12 restores 24.'
      },
      {
        q: 'In-phase and quadrature at same instant are:',
        options: ['zero always', 'fully correlated', 'identical', 'uncorrelated'],
        answer: 3,
        explanation: 'Step 1: Cross mean is zero. Step 2: Knowledge of one gives none of other. Step 3: Joint factors as product. Step 4: Lags can correlate but instant does not.'
      },
      // PYQ-pattern: narrowband IQ decomposition and envelope form
      {
        q: 'Envelope from branches I and Q is:',
        options: ['I plus Q', 'I minus Q', 'root of squares of I and Q', 'I times Q'],
        answer: 2,
        explanation: 'Step 1: Carrier vector has components I and Q. Step 2: Magnitude is root of sum squares. Step 3: With values 3 and 4 envelope is 5. Step 4: Sum would give 7 which is wrong.'
      },
      {
        q: 'Demodulator recovers I by:',
        options: ['multiply by cosine then lowpass', 'highpass alone', 'squaring alone', 'adding Q'],
        answer: 0,
        explanation: 'Step 1: Multiply shifts spectrum to baseband and double frequency. Step 2: Lowpass keeps baseband. Step 3: Scale restores level. Step 4: Sine path gives Q separately.'
      }
    ]
  }
]
