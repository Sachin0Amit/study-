import type { SectionContent } from '../library'

// ============================================================================
// Communications — Chapter 2: Analog Modulation AM and FM
// Master study content. Math is LaTeX rendered by KaTeX via RichText.
// ============================================================================

export const commemCh02Content: SectionContent[] = [
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: 'commem-ch2-s1',
    readingTime: 9,
    intro: 'Amplitude modulation imprints a slow message onto the height of a fast carrier while keeping frequency fixed. Sidebands appear symmetrically around the carrier and the modulation index sets how deep that imprint goes. This section reads spectra, measures index, and demodulates with envelope tracking.',
    objectives: [
      'Write time and spectrum forms for tone-modulated AM variants',
      'Compute modulation index and sideband power shares',
      'Trace envelope detection and its distortion limits'
    ],
    concepts: [
      {
        term: 'Conventional AM waveform',
        kind: 'definition',
        statement: 'Carrier plus message forms **AM** `AM` as $$s(t) = A_{c}[1 + \\mu m_{n}(t)]\\cos(\\omega_{c}t)$$ with normalized message `MN` and **index** `MU`. Depth `MU` sets **envelope** swing.',
        detail: 'Tone message gives sidebands at carrier plus and minus message frequency. Index 0.5 means 50 percent swing around unmodulated height.'
      },
      {
        term: 'Modulation index from envelope',
        kind: 'method',
        statement: 'From peaks **max and min** `PEAK`, index is $$\\mu = \\frac{V_{max} - V_{min}}{V_{max} + V_{min}}.$$ Clean `envelope` needs $$\\mu \\leq 1.$$',
        detail: 'Peaks 10 and 2 give $8$ divided by $12$ which is $0.667$. Above unity the envelope crosses zero and phase reverses.'
      },
      {
        term: 'DSB-SC and SSB variants',
        kind: 'definition',
        statement: 'Suppressing carrier gives **DSB-SC** `DSB` as $$s(t) = A_{c} m(t)\\cos(\\omega_{c}t)$$ while keeping one side gives **SSB** `SSB` with half the `band`.',
        detail: 'DSB needs coherent detection since envelope no longer tracks message. SSB halves bandwidth to message width by removing one sideband.'
      },
      {
        term: 'Sideband power sharing',
        kind: 'theorem',
        statement: 'Tone sidebands together hold **mu squared over two plus mu squared** share `PSB`, namely $$\\frac{P_{side}}{P_{total}} = \\frac{\\mu^{2}}{2 + \\mu^{2}}.$$ Carrier keeps the **rest** `CAR`.',
        detail: 'With $\\mu = 1$, side share is $1$ divided by $3$ which is $0.333$. Most transmitted power stays in the carrier that carries no message.'
      },
      {
        term: 'Envelope detector operation',
        kind: 'method',
        statement: 'Diode plus **RC filter** `RC` charges on peaks and droops between cycles to follow **envelope** `ENV`. Time constant must satisfy $$\\frac{1}{f_{c}} \\ll RC \\ll \\frac{1}{f_{m}}.$$',
        detail: 'Too large RC cannot follow fast message dips and clips diagonals. Too small leaves carrier ripple on output.'
      }
    ],
    examples: [
      {
        title: 'Index and power for Vmax 12 Vmin 4',
        problem: 'Envelope swings between 12 and 4 volts on a 1-megahertz carrier with 5-kilohertz tone. Find index, sideband share and spectrum.',
        steps: [
          { label: 'Step 1', text: 'Index $\\mu = 12 - 4 = 8$ divided by $12 + 4 = 16$ which is $0.5$.\n```text\nmu = diff over sum = 8 over 16 = 0.5; side share = 0.25 over 2.25 = 0.111\ncarrier 1 MHz sidebands 995 kHz 1005 kHz\n```' },
          { label: 'Step 2', text: 'Side share $0.25$ divided by $2.25$ which is $0.111$ using `PSB`. Carrier holds $0.889$ of total.' },
          { label: 'Step 3', text: 'Spectrum lines at `1000` kilohertz plus tones at $995$ and $1005$ kilohertz. Envelope detector with `RC` between carrier and message periods recovers tone.' }
        ],
        result: 'Index 0.5 gives 11 percent power in sidebands at plus and minus 5 kilohertz.'
      },
      {
        title: 'Overmodulation distortion trace',
        problem: 'Same carrier driven to index 1.5. Show envelope shape and detector failure.',
        steps: [
          { label: 'Step 1', text: 'Envelope $1 + 1.5$ times cosine crosses zero, flipping `phase` by half cycle.' },
          { label: 'Step 2', text: 'Diode follows magnitude `ENV`, so negative lobes fold positive and harmonics appear.' },
          { label: 'Step 3', text: 'Coherent product with `LO` carrier still recovers message, proving DSB-style detection is needed beyond unity.' }
        ],
        result: 'Envelope detector distorts above unity while coherent detection survives.'
      }
    ],
    keyTakeaways: [
      'AM time form scales carrier height by one plus index times message.',
      'Index from peaks must stay at or below unity for envelope use.',
      'Sideband power share grows with square of index over two plus square.',
      'RC envelope needs slower than carrier yet faster than message.'
    ],
    quiz: [
      // PYQ-pattern: modulation index and sideband power numerics
      {
        q: 'Envelope peaks 10 and 2 give index:',
        options: ['0.5', '1.5', '0.667', '0.25'],
        answer: 2,
        explanation: 'Step 1: Difference 10 minus 2 is 8. Step 2: Sum 10 plus 2 is 12. Step 3: Ratio 8 divided by 12 is 0.667. Step 4: Value below unity allows envelope use.'
      },
      {
        q: 'Tone index 1 puts sideband power share at:',
        options: ['0.333', '0.111', '0.5', '1.0'],
        answer: 0,
        explanation: 'Step 1: Square index giving 1. Step 2: Numerator 1 denominator 3. Step 3: Ratio 1 divided by 3 is 0.333. Step 4: Carrier keeps 0.667.'
      },
      {
        q: 'DSB-SC differs from conventional AM by:',
        options: ['FM spectrum', 'wider RF band', 'no sidebands', 'no carrier line and envelope no longer tracks'],
        answer: 3,
        explanation: 'Step 1: Carrier term removed. Step 2: Zero crossings carry message sign. Step 3: Envelope folds so diode fails. Step 4: Coherent product is required.'
      },
      {
        q: 'Envelope RC must satisfy:',
        options: ['much smaller than carrier period', 'between carrier and message periods', 'larger than message period', 'equal to zero'],
        answer: 1,
        explanation: 'Step 1: Must smooth carrier ripple needing large versus carrier. Step 2: Must follow message needing small versus message. Step 3: With 1 megahertz and 5 kilohertz choose near 20 microseconds. Step 4: Extremes give ripple or diagonal clipping.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.2
  {
    sectionId: 'commem-ch2-s2',
    readingTime: 10,
    intro: 'Angle modulation hides the message in instantaneous frequency or phase while amplitude stays constant. That constancy trades bandwidth for noise robustness and produces Bessel sideband families. This section applies the Carson bandwidth rule and reads discriminator detection end to end.',
    objectives: [
      'Write FM and PM instantaneous frequency relations',
      'Apply Carson rule to any deviation and message width',
      'Explain Bessel sideband growth and nulls with index'
    ],
    concepts: [
      {
        term: 'Instantaneous frequency law',
        kind: 'definition',
        statement: 'FM maps message to **frequency shift** `DEV` as $$f_{i}(t) = f_{c} + k_{f} m(t)$$ while PM maps to **phase shift** `PH` as $$\\theta(t) = k_{p} m(t).$$ Constant `envelope` keeps `amplitude` fixed.',
        detail: 'Tone deviation 75 kilohertz swings carrier between minus and plus 75 around center. Larger gain $k_{f}$ widens swing for same message.'
      },
      {
        term: 'Modulation index for tone',
        kind: 'definition',
        statement: 'Tone index is **deviation over message rate** `BETA`, namely $$\\beta = \\frac{\\Delta f}{f_{m}}.$$ Wideband means **beta above unity** `WB`.',
        detail: 'Deviation $75$ kilohertz over $15$ kilohertz audio gives $\\beta = 5$. Narrowband below unity behaves like AM with small sidebands.'
      },
      {
        term: 'Carson bandwidth rule',
        kind: 'theorem',
        statement: 'Occupied width is about **twice deviation plus message** held as `CARSON`, namely $$B_{T} \\approx 2(\\Delta f + f_{m}) = 2 f_{m}(\\beta + 1).$$ Guard `bands` round `up`.',
        detail: 'Deviation $75$ plus message $15$ gives $90$, doubled to $180$ kilohertz. Commercial broadcast rounds to $200$ kilohertz channels.'
      },
      {
        term: 'Bessel sideband families',
        kind: 'theorem',
        statement: 'Tone FM expands into **Bessel-weighted lines** `BES` as $$s(t) = A_{c}\\sum J_{n}(\\beta)\\cos((\\omega_{c} + n\\omega_{m})t).$$ Carrier nulls when **J zero equals zero** at `NULL`.',
        detail: 'At $\\beta$ near $2.405$ the carrier term vanishes leaving only sidebands. Higher index spreads energy over more significant lines.'
      },
      {
        term: 'Discriminator detection idea',
        kind: 'method',
        statement: 'A slope circuit turns **frequency into amplitude** `SLOPE` then an **envelope** `ENV` recovers message. Limiters first strip **AM noise** `LIM`.',
        detail: 'Balanced slopes cancel drift while phase-locked loops track frequency directly. Pre-emphasis boosts highs before noise and de-emphasis restores balance.'
      }
    ],
    examples: [
      {
        title: 'Carson width for broadcast FM',
        problem: 'Deviation 75 kilohertz, top message 15 kilohertz. Find beta and Carson width plus channel choice.',
        steps: [
          { label: 'Step 1', text: 'Index $\\beta = 75$ divided by $15$ which is $5$.\n```text\nbeta = 75 over 15 = 5; BT = 2 x (75 + 15) = 180 kHz to 200 kHz channel\n```' },
          { label: 'Step 2', text: 'Width $2$ times $90$ which is $180$ kilohertz using `CARSON`. Significant Bessel lines span about $2$ times $6$ sidebands.' },
          { label: 'Step 3', text: 'Allocate `200`-kilohertz channel with guard. Narrowband voice with $5$ kilohertz deviation and $3$ kilohertz message needs $16$ kilohertz instead.' }
        ],
        result: 'Beta 5 needs 180 kilohertz, fitting a 200-kilohertz broadcast slot.'
      },
      {
        title: 'Carrier null at Bessel zero',
        problem: 'Tone FM tuned until carrier disappears on spectrum analyzer. Identify index and sideband view.',
        steps: [
          { label: 'Step 1', text: 'First null occurs at $\\beta$ about $2.405$ where `BES` zero-order is zero.' },
          { label: 'Step 2', text: 'Energy moves to first and second sidebands with `J1` and `J2` peaks. Analyzer shows missing center line.' },
          { label: 'Step 3', text: 'Slightly larger index restores partial carrier. Null method calibrates unknown deviation from known tone rate.' }
        ],
        result: 'Carrier null marks index 2.405 and confirms Bessel expansion.'
      }
    ],
    keyTakeaways: [
      'FM writes message into instantaneous frequency with constant amplitude.',
      'Tone index equals deviation divided by message rate.',
      'Carson width doubles the sum of deviation and message rate.',
      'Bessel lines set true occupancy with carrier nulls at J-zero zeros.'
    ],
    quiz: [
      {
        q: 'Deviation 75 and message 15 give beta and Carson width:',
        options: ['beta 5 width 90', 'beta 0.2 width 30', 'beta 90 width 180', 'beta 5 width 180'],
        answer: 3,
        explanation: 'Step 1: Beta is 75 divided by 15 which is 5. Step 2: Sum 75 plus 15 is 90. Step 3: Double giving 180 kilohertz. Step 4: Half value forgets the factor two.'
      },
      // PYQ-pattern: Carson rule bandwidth computation
      {
        q: 'Deviation 5 and message 3 kilohertz need about:',
        options: ['6 kilohertz', '16 kilohertz', '10 kilohertz', '30 kilohertz'],
        answer: 1,
        explanation: 'Step 1: Sum 5 plus 3 is 8. Step 2: Double giving 16 kilohertz. Step 3: Narrowband still exceeds AM width 6. Step 4: Larger deviation would push toward wideband.'
      },
      {
        q: 'First carrier null for tone FM occurs near beta:',
        options: ['2.405', '1.0', '0.5', '5.0'],
        answer: 0,
        explanation: 'Step 1: Carrier weight is J zero. Step 2: First zero of J zero is 2.405. Step 3: Center line vanishes there. Step 4: Other values keep strong carrier.'
      },
      {
        q: 'FM discriminator first needs a limiter to:',
        options: ['add more bandwidth', 'shift carrier', 'strip AM noise before slope conversion', 'compress message'],
        answer: 2,
        explanation: 'Step 1: Channel adds amplitude ripples. Step 2: Slope would convert them falsely. Step 3: Limiter holds amplitude constant. Step 4: Envelope then reads true frequency.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.3
  {
    sectionId: 'commem-ch2-s3',
    readingTime: 8,
    intro: 'Tuning every stage across a wide band is costly so receivers shift any desired station to one fixed intermediate frequency. One mixer plus a tunable oscillator does the shifting while sharp fixed filters do the selecting. This section traces image pitfalls and dual conversion that eases them.',
    objectives: [
      'Compute LO and image frequencies for any desired station',
      'Explain IF selection trade-offs between selectivity and image rejection',
      'Trace dual-conversion chain from antenna to baseband'
    ],
    concepts: [
      {
        term: 'Mixer translation identity',
        kind: 'definition',
        statement: 'Mixing with **local oscillator** `LO` creates sum and **difference** `DIFF` as $$f_{IF} = |f_{LO} - f_{s}|.$$ Filter keeps `difference` and drops `sum`.',
        detail: 'Station $1000$ kilohertz with LO $1455$ kilohertz gives $455$ kilohertz difference. Tuning LO slides any station to the same IF.'
      },
      {
        term: 'Image frequency hazard',
        kind: 'theorem',
        statement: 'The station mirrored across **LO** stored as `IMG` also maps to `IF`, namely $$f_{image} = f_{s} \\pm 2 f_{IF}.$$ Preselector must **reject** `image` before `mixing`.',
        detail: 'With $f_{s} = 1000$ and $f_{IF} = 455$, image is $1910$ kilohertz. Without front filtering both stations overlap at IF.'
      },
      {
        term: 'IF height trade-off',
        kind: 'insight',
        statement: 'Higher **IF** `HIF` pushes the image **farther** for easy rejection but needs **lower Q** selectivity `Q`. Lower `IF` sharpens `selectivity` but pulls `image` closer.',
        detail: 'AM broadcast uses $455$ kilohertz balancing both. FM broadcast uses $10.7$ megahertz to separate images at 100-megahertz carriers.'
      },
      {
        term: 'Tracking and alignment',
        kind: 'method',
        statement: 'Front tune and **LO** `LO` must track with constant **offset** `OFF` equal to `IF` across the band. Ganged capacitors plus **trimmers** `TRIM` hold `tracking`.',
        detail: 'At dial $600$ LO is $1055$ and at $1400$ LO is $1855$, both $455$ above. Mistracking weakens sensitivity at band edges.'
      },
      {
        term: 'Dual-conversion chain',
        kind: 'method',
        statement: 'First high **IF** `IF1` rejects images then second low **IF** `IF2` sharpens selection. Chain reads $$RF \\to IF_{1} \\to IF_{2} \\to base.$$ Each `mixer` repeats the `difference` rule.',
        detail: 'First $10.7$ megahertz cleans images, second $455$ kilohertz shapes channels. Modern sets digitize at low IF for software demodulation.'
      }
    ],
    examples: [
      {
        title: 'Image for 1000-kilohertz station',
        problem: 'IF 455 kilohertz, high-side LO. Find LO and image, then name the fix.',
        steps: [
          { label: 'Step 1', text: 'LO $1000 + 455 = 1455$ kilohertz for high-side `LO`.\n```text\nLO=1455 kHz image=1000+2x455=1910 kHz preselect blocks 1910\n```' },
          { label: 'Step 2', text: 'Image $1000 + 910 = 1910$ kilohertz also differences to $455$ via $|1910 - 1455|$.' },
          { label: 'Step 3', text: 'RF preselector around `1000` passes desired and attenuates `1910` before mixer. Higher `IF1` would push image even farther.' }
        ],
        result: 'LO 1455 kilohertz with image 1910 kilohertz suppressed up front.'
      },
      {
        title: 'Dual-conversion plan for FM band',
        problem: 'Desired 100 megahertz must reach 455 kilohertz final. Propose two steps and images.',
        steps: [
          { label: 'Step 1', text: 'First to `IF1` $10.7$ megahertz with LO $110.7$ megahertz. Image $121.4$ megahertz lies far outside band.' },
          { label: 'Step 2', text: 'Second from $10.7$ to $455$ kilohertz with LO near $11.155$ megahertz. Close image now filtered by first IF shape.' },
          { label: 'Step 3', text: 'Sharp `IF2` ceramic filter selects $200$-kilohertz channel. Digitizer handles stereo and data subcarriers.' }
        ],
        result: 'High first IF for images plus low second IF for selectivity.'
      }
    ],
    keyTakeaways: [
      'Mixer maps absolute LO minus signal to fixed IF.',
      'Image mirrored by twice IF also maps and must be prefiltered.',
      'High IF aids image rejection while low IF aids selectivity.',
      'Dual conversion stacks both benefits in sequence.'
    ],
    quiz: [
      {
        q: 'Station 1000 with IF 455 high-side needs LO:',
        options: ['1455', '545', '1910', '455'],
        answer: 0,
        explanation: 'Step 1: High-side adds IF. Step 2: Sum 1000 plus 455 is 1455. Step 3: Difference 1455 minus 1000 is 455. Step 4: Low-side would be 545 instead.'
      },
      // PYQ-pattern: image frequency computation and rejection
      {
        q: 'Image for above choice is:',
        options: ['1000', '1455', '1910', '545'],
        answer: 2,
        explanation: 'Step 1: Image is signal plus twice IF. Step 2: Twice 455 is 910. Step 3: Sum 1000 plus 910 is 1910. Step 4: It also differences to 455.'
      },
      {
        q: 'Raising IF primarily:',
        options: ['sharpens channel shape', 'pushes image farther for easier rejection', 'lowers LO range', 'removes need for LO'],
        answer: 1,
        explanation: 'Step 1: Separation is twice IF. Step 2: Larger gap eases front filter. Step 3: Selectivity needs higher Q instead. Step 4: Dual conversion recovers sharpness later.'
      },
      {
        q: 'Dual conversion order is:',
        options: ['low then high IF', 'direct sampling always', 'two LOs without IF', 'high then low IF'],
        answer: 3,
        explanation: 'Step 1: High first separates images. Step 2: Low second sharpens channels. Step 3: Values 10.7 megahertz then 455 illustrate. Step 4: Reverse loses image spacing.'
      }
    ]
  },
  // ---------------------------------------------------------------- 2.4
  {
    sectionId: 'commem-ch2-s4',
    readingTime: 7,
    intro: 'AM packs channels tightly with simple receivers while FM spends extra spectrum for cleaner audio in noise. Power splits differently since AM wastes carrier power and FM keeps amplitude constant. This section weighs those trades to explain why broadcast bands split as they do.',
    objectives: [
      'Compare bandwidth, power use and complexity side by side',
      'Explain threshold and capture effects in FM reception',
      'Justify band choices from fidelity and range needs'
    ],
    concepts: [
      {
        term: 'Bandwidth versus fidelity trade',
        kind: 'insight',
        statement: 'AM needs only **twice message** `BWAM` as $$B_{AM} = 2 f_{m}$$ while FM needs **Carson width** `BWFM` as $$B_{FM} = 2(\\Delta f + f_{m}).$$ Extra `width` buys **fidelity**.',
        detail: 'Audio $15$ kilohertz needs $30$ kilohertz AM but $180$ kilohertz FM at broadcast deviation. Music quality favors the wider option.'
      },
      {
        term: 'Power efficiency contrast',
        kind: 'theorem',
        statement: 'AM wastes most power in **carrier** `CAR` with side share $$\\frac{\\mu^{2}}{2 + \\mu^{2}}$$ while FM puts all **power in message** sidebands `USE`. Constant `envelope` aids `amplifiers`.',
        detail: 'At $\\mu = 0.5$ only $0.111$ of AM power carries message. FM runs nonlinear efficient stages without distortion.'
      },
      {
        term: 'Noise threshold and capture',
        kind: 'law',
        statement: 'FM improves only above **threshold** `THR` near $10$ decibels carrier to noise, then quiets fast. Stronger of two co-channel signals **captures** `CAP` the `discriminator`.',
        detail: 'Below threshold clicks dominate and AM sounds better. Above threshold FM hiss drops sharply with deviation gain.'
      },
      {
        term: 'Circuit complexity ladder',
        kind: 'definition',
        statement: 'AM uses **diode envelope** `DIODE` while FM needs **limiter plus discriminator** `DISC` or locked loop. Parts count and `alignment` rise with `fidelity`.',
        detail: 'Crystal portables demodulate AM with pennies of parts. FM portables add IF strips and ratio detectors for quieting.'
      },
      {
        term: 'Band placement logic',
        kind: 'method',
        statement: 'Long-range speech uses **medium-wave AM** `MW` for ground-wave reach while high-fidelity music uses **VHF FM** `VHF` for wide channels. Choice matches **range versus quality** `TRADE`.',
        detail: 'Medium wave near $1000$ kilohertz travels far at night with $10$-kilohertz spacing. VHF near $100$ megahertz offers $200$-kilohertz slots with line-of-sight limits.'
      }
    ],
    examples: [
      {
        title: 'Channel count in one megahertz',
        problem: 'Compare how many voice channels of 3-kilohertz message fit under AM versus narrow FM with 5-kilohertz deviation.',
        steps: [
          { label: 'Step 1', text: 'AM width $2$ times $3$ which is $6$ kilohertz per `BWAM`.\n```text\nAM 6 kHz -> 166 channels per MHz; NFM 16 kHz -> 62 channels\n```' },
          { label: 'Step 2', text: 'Narrow FM width $2$ times $8$ which is $16$ kilohertz per `BWFM`. Ratio $16$ divided by $6$ is about $2.67$.' },
          { label: 'Step 3', text: 'One megahertz holds about $166$ AM but only $62$ narrow FM channels. Quality and quieting justify fewer FM slots.' }
        ],
        result: 'AM packs 166 versus FM 62 channels per megahertz for the same message.'
      },
      {
        title: 'Power useful share at index half',
        problem: 'AM at index 0.5 versus FM at same audio power. Show useful share gap.',
        steps: [
          { label: 'Step 1', text: 'AM side share $0.25$ divided by $2.25$ which is $0.111$.' },
          { label: 'Step 2', text: 'FM useful share is unity since `envelope` carries only message sidebands.' },
          { label: 'Step 3', text: 'FM needs about $9$ times less total for equal message power before noise gain, ignoring threshold.' }
        ],
        result: 'FM uses all power for message while AM wastes near 89 percent in carrier.'
      }
    ],
    keyTakeaways: [
      'AM doubles message width while FM uses Carson sum width.',
      'AM wastes carrier power while FM keeps all power useful.',
      'FM wins above threshold with capture and quieting.',
      'Bands match range needs for AM and fidelity needs for FM.'
    ],
    quiz: [
      {
        q: 'Message 15 needs AM width and broadcast FM width about:',
        options: ['15 and 15 kilohertz', '30 and 180 kilohertz', '180 and 30 kilohertz', '200 and 10 kilohertz'],
        answer: 1,
        explanation: 'Step 1: AM doubles to 30. Step 2: FM sums 75 plus 15 is 90. Step 3: Double to 180. Step 4: Reversed values swap the methods.'
      },
      {
        q: 'AM index 0.5 wastes in carrier about:',
        options: ['11 percent', '33 percent', '0 percent', '89 percent'],
        answer: 3,
        explanation: 'Step 1: Side share is 0.25 over 2.25. Step 2: Value 0.111 carries message. Step 3: Remainder 0.889 stays in carrier. Step 4: Percent near 89.'
      },
      // PYQ-pattern: FM threshold and capture versus AM behavior
      {
        q: 'FM capture effect means:',
        options: ['both signals mix equally', 'noise vanishes at any level', 'stronger co-channel signal takes the receiver', 'AM beats FM always'],
        answer: 2,
        explanation: 'Step 1: Limiter keeps amplitude constant. Step 2: Discriminator tracks dominant frequency. Step 3: Weaker signal suppresses heavily. Step 4: AM instead mixes both audibly.'
      },
      {
        q: 'Speech over long range historically uses medium-wave AM since:',
        options: ['ground-wave reach plus narrow slots suit coverage', 'it sounds best', 'it needs wide channels', 'receivers are complex'],
        answer: 0,
        explanation: 'Step 1: Medium wave propagates far. Step 2: Slots 10 kilohertz pack many stations. Step 3: Speech fits narrow width. Step 4: Music fidelity waits for VHF FM.'
      }
    ]
  }
]
