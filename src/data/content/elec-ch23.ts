import type { SectionContent } from '../library'

// ============================================================================
// The Electronics Master Library — Chapter 23: Semiconductors and Diodes
// in Depth. Sedra/Smith, "Microelectronic Circuits" 8e, Chapters 3 and 4
// (pp. 136–243): intrinsic and doped silicon, drift and diffusion, the pn
// junction and built-in voltage, the exponential diode law and its circuit
// models, rectifiers with capacitor-filter ripple arithmetic, clippers,
// clampers and zener regulation. Worked-problem numbers follow the book;
// arithmetic re-verified. Math is LaTeX, rendered by KaTeX via the
// RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh23Content: SectionContent[] = [
  // ------------------------------------------------------------------ 23.1
  {
    sectionId: 'ece-e-devices-s1',
    readingTime: 8,
    intro: 'Silicon conducts because heat frees a few electron-hole pairs — $1.5 \\times 10^{10}$ per cm$^{3}$ at room temperature — and doping then multiplies one carrier type by orders of magnitude. Current flows by drift in electric fields and by diffusion down concentration gradients, with the Einstein relation $D/\\mu = V_{T}$ tying the two. Joining p-type to n-type silicon sweeps the junction clean of carriers, leaving the depletion charge whose voltage $V_{0}$ sets every diode number that follows.',
    objectives: [
      'Apply the mass-action law $np = n_{i}^{2}$ to find carrier concentrations in doped silicon',
      'Contrast drift and diffusion transport and use the Einstein relation',
      'Compute the built-in voltage $V_{0}$ and describe the depletion region width and charge',
    ],
    concepts: [
      {
        term: 'Intrinsic carriers',
        kind: 'definition',
        statement: 'Broken covalent bonds release matched electron-hole pairs, giving silicon its **intrinsic density** $n_{i} = 1.5 \\times 10^{10}$ carriers per cm$^{3}$ at $300$ K, tagged `ni-silicon`. Against $5 \\times 10^{22}$ atoms per cm$^{3}$ this is far too sparse for useful conduction.',
        detail: 'Example 3.1 evaluates the textbook formula to this value. Intrinsic resistivity is then hundreds of kiloohm-centimeters, which is why pure silicon is an insulator for most purposes.',
      },
      {
        term: 'Doping and mass action',
        kind: 'theorem',
        statement: 'Donors add electrons and acceptors add holes while **$np = n_{i}^{2}$** always holds, tagged `mass-action`. Doping $N_{D} = 10^{16}$ per cm$^{3}$ pins $n_{n0} \\approx 10^{16}$ and crushes $p_{n0}$ to $2.25 \\times 10^{4}$ per cm$^{3}$.',
        detail: 'Example 3.2 works exactly this case. Majority carriers follow the doping; minority carriers follow the law. Heating to $350$ K raises $n_{i}$ and lifts both minorities sharply.',
      },
      {
        term: 'Drift current',
        kind: 'definition',
        statement: 'Fields drag carriers at $v = \\mu E$, giving **ohmic conduction** $J = \\sigma E$ with $\\sigma = q(\\mu_{n}n + \\mu_{p}p)$, tagged `drift-sigma`. Mobility falls as doping rises because ionized impurities scatter carriers.',
        detail: 'Example 3.3 finds $2.28 \\times 10^{5}$ $\\Omega$cm for intrinsic silicon but $1.56$ $\\Omega$cm for $N_{A} = 10^{16}$ per cm$^{3}$ p-type. Six orders of resistivity separate the two samples.',
      },
      {
        term: 'Diffusion and Einstein',
        kind: 'law',
        statement: 'Gradients drive carriers from crowded to empty regions, and the **Einstein relation** $D_{n}/\\mu_{n} = D_{p}/\\mu_{p} = V_{T}$ ties diffusivity to mobility, tagged `einstein-VT`. The thermal voltage $V_{T} = kT/q$ is $25.9$ mV at room temperature.',
        detail: 'Diffusion across the junction is the forward current mechanism of every diode and BJT. The book returns to $V_{T}$ in each exponential law from here on.',
      },
      {
        term: 'Depletion region and built-in voltage',
        kind: 'theorem',
        statement: 'Uncovered dopant ions flank the junction with charge $-qN_{A}$ and $+qN_{D}$, building the **built-in voltage** $V_{0} = V_{T}\\ln(N_{A}N_{D}/n_{i}^{2})$, tagged `V0-builtin`. For $N_{A} = 10^{18}$ and $N_{D} = 10^{16}$ per cm$^{3}$ this is $0.81$ V across about $0.33$ $\\mu$m.',
        detail: 'Example 3.5 evaluates $V_{0}$, the width $W$, the splits $x_{n}$ and $x_{p}$, and the stored charge $Q_{J}$. The width grows with reverse bias, which is the varactor and the junction-capacitance effect.',
      },
    ],
    figures: [
      {
        caption: 'Open pn junction after Figure 3.9: depletion charge $+qN_{D}$ and $-qN_{A}$ flanking the boundary, with the potential stepping by the built-in voltage $V_{0}$ from p to n.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="PN junction depletion region and built in potential"><title>PN junction depletion and built in voltage</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">PN junction: depletion and built-in voltage</text><g stroke="currentColor" stroke-width="2" fill="none"><rect x="60" y="120" width="130" height="130" rx="4"/><rect x="190" y="120" width="130" height="130" rx="4"/><rect x="150" y="120" width="80" height="130" stroke-dasharray="6 4"/><line x1="400" y1="250" x2="640" y2="250"/><line x1="400" y1="250" x2="400" y2="110"/><polyline points="400,140 480,140 540,220 640,220"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="110" y="192" font-family="sans-serif">p</text><text x="248" y="192" font-family="sans-serif">n</text><text x="152" y="150" font-family="sans-serif">minus</text><text x="204" y="150" font-family="sans-serif">plus</text><text x="140" y="280" font-family="sans-serif">depletion, swept of mobiles</text><text x="404" y="128" font-family="sans-serif">p side high</text><text x="548" y="240" font-family="sans-serif">n side low</text><text x="486" y="190" font-family="sans-serif">step V0, here 0.81 V</text><text x="400" y="280" font-family="sans-serif">potential across the junction</text><text x="400" y="302" font-family="sans-serif">width near 0.33 um, mostly on light side</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Carriers in doped silicon (Sedra Example 3.2)',
        problem: 'Silicon with $n_{i} = 1.5 \\times 10^{10}$ per cm$^{3}$ is doped n-type with $N_{D} = 10^{16}$ per cm$^{3}$. Find $n_{n0}$ and $p_{n0}$ at $300$ K and state what heating does.',
        steps: [
          { label: 'Step 1: Pin the majority to the doping', text: 'Charge neutrality gives $n_{n0} \\approx N_{D} = 10^{16}$ per cm$^{3}$, six orders above intrinsic:```python\nND = 1e16\nni = 1.5e10\nnn = ND\npn = ni * ni / ND\nprint(nn)\nprint(pn)\n```\nThe printout confirms $10^{16}$ electrons per cm$^{3}$.' },
          { label: 'Step 2: Crush the minority by mass action', text: '$p_{n0} = n_{i}^{2}/N_{D} = 2.25 \\times 10^{20}/10^{16} = 2.25 \\times 10^{4}$ per cm$^{3}$ — twelve orders below the majority.' },
          { label: 'Step 3: Note the temperature lever', text: 'Heating raises $n_{i}$ steeply, so $p_{n0}$ climbs with temperature while $n_{n0}$ stays pinned until intrinsic carriers rival the doping.' },
        ],
        result: '$n_{n0} \\approx 10^{16}$ per cm$^{3}$, $p_{n0} = 2.25 \\times 10^{4}$ per cm$^{3}$; heat lifts minorities fast.',
      },
      {
        title: 'Built-in voltage and width (Sedra Example 3.5)',
        problem: 'A junction with $N_{A} = 10^{18}$ per cm$^{3}$, $N_{D} = 10^{16}$ per cm$^{3}$ sits in equilibrium at $300$ K. Find $V_{0}$, the depletion width, and which side holds most of it.',
        steps: [
          { label: 'Step 1: Log the doping product', text: '$V_{0} = V_{T}\\ln(N_{A}N_{D}/n_{i}^{2}) = 25.85$ mV $\\times \\ln(4.44 \\times 10^{13}) = 0.81$ V.' },
          { label: 'Step 2: Root the width', text: '$W = \\sqrt{(2\\epsilon_{s}/q)(1/N_{A} + 1/N_{D})V_{0}} = 0.33$ $\\mu$m with $\\epsilon_{s} = 11.7\\epsilon_{0}$.' },
          { label: 'Step 3: Split by inverse doping', text: '$x_{n}/x_{p} = N_{A}/N_{D} = 100$, so $x_{n} = 0.323$ $\\mu$m and $x_{p} = 0.003$ $\\mu$m: the light n side hosts nearly all the depletion.' },
        ],
        result: '$V_{0} = 0.81$ V across $0.33$ $\\mu$m, almost entirely on the $N_{D}$ side.',
      },
    ],
    keyTakeaways: [
      'Doping pins majorities while $np = n_{i}^{2}$ sets minorities: $10^{16}$ electrons versus $2.25 \\times 10^{4}$ holes here.',
      'Drift obeys $J = \\sigma E$; diffusion obeys gradients; $D/\\mu = V_{T} = 25.9$ mV links them.',
      '$V_{0} = V_{T}\\ln(N_{A}N_{D}/n_{i}^{2}) = 0.81$ V across $0.33$ $\\mu$m, widening under reverse bias.',
      'Resistivity spans $2.28 \\times 10^{5}$ $\\Omega$cm intrinsic to $1.56$ $\\Omega$cm at $N_{A} = 10^{16}$ per cm$^{3}$.',
    ],
    quiz: [
      {
        q: 'Silicon doped $N_{D} = 10^{16}$ per cm$^{3}$ ($n_{i} = 1.5 \\times 10^{10}$ per cm$^{3}$) has hole concentration:',
        options: [`$10^{16}$ per cm$^{3}$`, `$2.25 \\times 10^{4}$ per cm$^{3}$`, `$1.5 \\times 10^{10}$ per cm$^{3}$`, `$10^{6}$ per cm$^{3}$`],
        answer: 1,
        explanation: 'Step 1 — Given: $N_{D}$ and $n_{i}$. Step 2 — Rule: $p_{n0} = n_{i}^{2}/N_{D}$ by mass action. Step 3 — Compute: $2.25 \\times 10^{20}/10^{16} = 2.25 \\times 10^{4}$ per cm$^{3}$. Step 4 — Conclude: majorities follow doping, minorities follow the law.',
      },
      {
        q: 'The Einstein relation states:',
        options: ['$J = \\sigma H$ for magnetics', '$np = N_{A}N_{D}$ always', '$V_{0} = 0$ in equilibrium', '$D/\\mu = V_{T}$ for each carrier type'],
        answer: 3,
        explanation: 'Step 1 — Given: diffusivity $D$ and mobility $\\mu$. Step 2 — Rule: thermal agitation links random and directed motion by $V_{T}$. Step 3 — Value: $25.9$ mV at room temperature. Step 4 — Conclude: diffusion currents inherit their scale from mobility.',
      },
      {
        q: 'For $N_{A} = 10^{18}$ and $N_{D} = 10^{16}$ per cm$^{3}$, the built-in voltage is about:',
        options: ['$0.81$ V', '$25.9$ V', '$0.41$ V', '$1.62$ V'],
        answer: 0,
        explanation: 'Step 1 — Given: the doping pair and $V_{T} = 25.85$ mV. Step 2 — Rule: $V_{0} = V_{T}\\ln(N_{A}N_{D}/n_{i}^{2})$. Step 3 — Compute: $25.85$ mV $\\times 31.43 = 812$ mV. Step 4 — Conclude: near a volt, dropping mostly across the lightly doped side.',
      },
      {
        q: 'The depletion region lies mostly on one side because:',
        options: ['The built-in voltage repels dopants', 'Temperature pushes it aside', 'Depletion splits in inverse proportion to doping', 'Holes are heavier than electrons'],
        answer: 2,
        explanation: 'Step 1 — Given: equal and opposite depletion charge. Step 2 — Rule: $N_{A}x_{p} = N_{D}x_{n}$ by charge equality. Step 3 — Ratio: $100$ to $1$ doping gives $100$ to $1$ width the other way. Step 4 — Conclude: light doping hosts wide depletion.',
      },
    ],
  },

  // ------------------------------------------------------------------ 23.2
  {
    sectionId: 'ece-e-devices-s30',
    readingTime: 8,
    intro: 'Forward bias subtracts from $V_{0}$ and releases the exponential $i = I_{S}e^{v/V_{T}}$, with $I_{S} = 6.9 \\times 10^{-16}$ A for the book 1-mA diode at $0.7$ V. Because the curve is so steep, hand analysis replaces it with the $0.7$ V constant-drop model, and tiny wiggles around the bias point see only the resistance $r_{d} = V_{T}/I_{D}$. Example 4.5 shows the payoff: $0.93$ mA of bias presents $26.9$ $\\Omega$ and shrinks $1$ V of supply ripple to $2.68$ mV.',
    objectives: [
      'Use $i = I_{S}e^{v/V_{T}}$ to find $I_{S}$ and to shift voltages by $V_{T}\\ln$ of current ratios',
      'Apply the constant-drop and piecewise-linear models including reverse breakdown',
      'Compute the small-signal resistance $r_{d} = V_{T}/I_{D}$ and attenuate ripple through it',
    ],
    concepts: [
      {
        term: 'Exponential diode law',
        kind: 'law',
        statement: 'Forward current obeys **$i = I_{S}e^{v/V_{T}}$**, with $I_{S}$ proportional to junction area, tagged `diode-exp`. A decade of current costs $2.3V_{T} \\approx 60$ mV, so $0.7$ V at $1$ mA becomes $0.76$ V at $10$ mA.',
        detail: 'Reverse bias beyond a few $V_{T}$ leaves only $-I_{S}$, far below real leakage of order nanoamperes. $I_{S}$ doubles about every $5$ degrees of heating, which is why hot diodes run away.',
      },
      {
        term: 'Area scaling of IS',
        kind: 'insight',
        statement: 'One thousand $1$-mA diodes in parallel make a $1$-A diode at the same $0.7$ V, so **$I_{S}$ scales with area** to $6.9 \\times 10^{-13}$ A, tagged `IS-area`. Voltage is set by current density, never by absolute current.',
        detail: 'Example 4.3 extracts $I_{S} = 10^{-3}e^{-0.7/0.025} = 6.9 \\times 10^{-16}$ A first. Video Example VE4.2 then exploits area ratios to solve multi-diode circuits by voltage differences alone.',
      },
      {
        term: 'Constant-drop model',
        kind: 'method',
        statement: 'Hand analysis treats forward diodes as **$0.7$ V drops** and reverse diodes as opens, tagged `drop-07`. Iteration polishes the answer: assume, solve $I_{D}$, then correct $V_{D}$ by $V_{T}\\ln$ of the current ratio.',
        detail: 'Figure 4.12 builds this from the exponential by piecewise linearization. Real designs add the $2$ mV per degree fall of $V_{D}$ with temperature as a final correction.',
      },
      {
        term: 'Breakdown models',
        kind: 'definition',
        statement: 'Past the knee $V_{Z}$ the reverse curve turns almost vertical, modeled as a **$V_{Z0}$ source with series $r_{z}$**, tagged `zener-rz`. Zener tunneling rules below about $5$ V and avalanche multiplication above it.',
        detail: 'The $6.8$ V diode of Example 4.7 has $r_{z} = 20$ $\\Omega$ and $V_{Z0} = 6.7$ V. Forward breakdown-region diodes still obey the $0.7$ V drop in the forward direction.',
      },
      {
        term: 'Small-signal resistance',
        kind: 'theorem',
        statement: 'Differentiating the exponential at the bias point gives **$r_{d} = V_{T}/I_{D}$**, tagged `rd-VT-ID`. At $0.93$ mA this is $26.9$ $\\Omega$, so the diode divides $1$ V of ripple down to $2.68$ mV against $10$ k$\\Omega$.',
        detail: 'Section 4.4 derives this by truncating the exponential series for $|v_{d}|$ well below $V_{T}$. Signal analysis then uses $r_{d}$ exactly like a resistor in divider arithmetic.',
      },
    ],
    figures: [
      {
        caption: 'Junction diode characteristic after Figure 4.8: steep forward rise through the $0.7$ V knee, flat nanoampere reverse leakage, and the near-vertical breakdown knee at $V_{Z}$.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Diode current voltage characteristic with breakdown"><title>Diode exponential characteristic and breakdown</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Diode i–v: knee, leakage, breakdown</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="120" y1="200" x2="620" y2="200"/><line x1="370" y1="320" x2="370" y2="40"/><polyline points="370,200 190,206"/><polyline points="190,206 165,300"/><polyline points="390,198 410,190 430,168 450,138 470,108 495,82"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="622" y="204" font-family="sans-serif">v</text><text x="374" y="56" font-family="sans-serif">i</text><text x="440" y="100" font-family="sans-serif">forward, 60 mV per decade</text><text x="418" y="176" font-family="sans-serif">knee near 0.7 V</text><text x="220" y="226" font-family="sans-serif">reverse leakage</text><text x="120" y="310" font-family="sans-serif">breakdown knee VZ</text><text x="120" y="332" font-family="sans-serif">IS sets scale, here 6.9e-16 A</text></g></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Scaling current from IS (Sedra Example 4.3)',
        problem: 'A diode carries $1$ mA at $0.7$ V. Find $I_{S}$ with $V_{T} = 25$ mV, the $I_{S}$ of a $1$-A same-process diode at $0.7$ V, and the voltage at $4.3$ mA.',
        steps: [
          { label: 'Step 1: Invert the exponential', text: '$I_{S} = 10^{-3}e^{-0.7/0.025} = 6.9 \\times 10^{-16}$ A, verified:```python\nimport math\nIS = 1e-3 / math.exp(0.7 / 0.025)\nprint(IS)\n```\nArea-proportional $I_{S}$ is the entire process signature in one number.' },
          { label: 'Step 2: Scale area a thousandfold', text: 'One thousand parallel copies carry $1$ A at the same density, so $I_{S} = 6.9 \\times 10^{-13}$ A with $V_{D}$ still $0.7$ V.' },
          { label: 'Step 3: Shift by the log ratio', text: '$V_{2} = 0.7 + 0.025\\ln(4.3) = 0.7 + 0.0365 = 0.737$ V — only $37$ mV for more than four times the current.' },
        ],
        result: '$I_{S} = 6.9 \\times 10^{-16}$ A ($6.9 \\times 10^{-13}$ A at $1$ A); $0.737$ V at $4.3$ mA.',
      },
      {
        title: 'DC plus ripple through rd (Sedra Example 4.5)',
        problem: 'A diode with $0.7$ V at $1$ mA sits in series with $R = 10$ k$\\Omega$ from $V^{+} = 10$ V dc plus $1$ V peak $60$ Hz ripple. Find the dc diode voltage and the ripple across the diode.',
        steps: [
          { label: 'Step 1: Solve dc with the drop model', text: '$I_{D} = (10 - 0.7)/10$ k$\\Omega$ $= 0.93$ mA, close enough to $1$ mA that $V_{D} = 0.7$ V stands.' },
          { label: 'Step 2: Linearize to $r_{d}$', text: '$r_{d} = 25$ mV$/0.93$ mA $= 26.9$ $\\Omega$ — four orders below the series resistor.' },
          { label: 'Step 3: Divide the ripple', text: '$v_{d} = 1$ V $\\times 26.9/(10000 + 26.9) = 2.68$ mV peak: the stiff diode barely feels supply wobble.' },
        ],
        result: '$V_{D} = 0.7$ V dc; $2.68$ mV peak of ripple across the diode.',
      },
    ],
    keyTakeaways: [
      '$i = I_{S}e^{v/V_{T}}$ with $I_{S} = 6.9 \\times 10^{-16}$ A for $1$ mA at $0.7$ V; decades cost $60$ mV.',
      '$I_{S}$ scales with junction area; voltage depends only on current density.',
      'Constant-drop $0.7$ V plus open-in-reverse solves hand circuits; $V_{Z0} + r_{z}I_{Z}$ covers breakdown.',
      '$r_{d} = V_{T}/I_{D}$ ($26.9$ $\\Omega$ at $0.93$ mA) divides signals like any resistor.',
    ],
    quiz: [
      {
        q: 'A diode at $0.7$ V and $1$ mA ($V_{T} = 25$ mV) has $I_{S}$ about:',
        options: ['$10^{-9}$ A', '$10^{-12}$ A', '$6.9 \\times 10^{-16}$ A', '$1.5 \\times 10^{-10}$ A'],
        answer: 2,
        explanation: 'Step 1 — Given: $I_{D} = 10^{-3}$ A at $V_{D} = 0.7$ V. Step 2 — Rule: $I_{S} = I_{D}e^{-V_{D}/V_{T}}$. Step 3 — Compute: $10^{-3}e^{-28} = 6.9 \\times 10^{-16}$ A. Step 4 — Conclude: the thousandfold-area device scales to $6.9 \\times 10^{-13}$ A.',
      },
      {
        q: 'Raising diode current from $1$ mA to $10$ mA moves $V_{D}$ by about:',
        options: ['$+60$ mV', '$+25$ mV', '$0$ mV, drops never move', '$+700$ mV'],
        answer: 0,
        explanation: 'Step 1 — Given: a tenfold current ratio. Step 2 — Rule: $\\Delta V = V_{T}\\ln(10) = 2.3V_{T}$. Step 3 — Compute: $2.3 \\times 25.85$ mV $\\approx 60$ mV. Step 4 — Conclude: $0.70$ V becomes $0.76$ V, the gentle log slope.',
      },
      {
        q: 'At $I_{D} = 0.93$ mA the small-signal resistance is:',
        options: [`$753$ $\\Omega$`, `$0.7$ $\\Omega$`, `$10$ k$\\Omega$`, `$26.9$ $\\Omega$`],
        answer: 3,
        explanation: 'Step 1 — Given: $I_{D} = 0.93$ mA. Step 2 — Rule: $r_{d} = V_{T}/I_{D}$ from the exponential slope. Step 3 — Compute: $25/0.93 = 26.9$ $\\Omega$. Step 4 — Conclude: $1$ V of supply ripple divides to $2.68$ mV across the diode.',
      },
      {
        q: 'The constant-drop model is most accurate when:',
        options: ['Diodes run in breakdown', 'Currents stay within a factor of a few of the characterized point', 'Currents span six decades', 'Temperature swings $100$ degrees'],
        answer: 1,
        explanation: 'Step 1 — Given: the $0.7$ V anchor at $1$ mA. Step 2 — Rule: each decade adds $60$ mV of unmodeled shift. Step 3 — Check: a factor of three moves only $28$ mV, but six decades move $360$ mV. Step 4 — Conclude: iterate with $V_{T}\\ln$ corrections outside the local neighborhood.',
      },
    ],
  },

  // ------------------------------------------------------------------ 23.3
  {
    sectionId: 'ece-e-devices-s31',
    readingTime: 9,
    intro: 'Diodes become dc supplies in rectifier service: the half-wave stage passes one polarity with peak-inverse voltage equal to the full peak $V_{s}$, while the bridge of Figure 4.22 uses both halves and halves the diode stress. A reservoir capacitor then holds each peak, sagging by the ripple $V_{r} = I_{DC}/(2fC)$ for full-wave service between charging pulses. Sizing $C$ from allowed ripple is the central power-supply calculation.',
    objectives: [
      'Find peak, average and PIV values for half-wave, full-wave and bridge rectifiers',
      'Explain peak-detector charging and discharging intervals with the $CR \\gg T$ condition',
      'Size filter capacitors from $V_{r} = I_{DC}/(2fC)$ and estimate diode currents',
    ],
    concepts: [
      {
        term: 'Half-wave rectifier',
        kind: 'theorem',
        statement: 'The series diode passes positive half cycles and blocks negative ones, giving peak $V_{s}$, average **$V_{s}/\\pi$**, and PIV $V_{s}$, tagged `half-PIV`. With $10$ V peak into $5$ k$\\Omega$ the peak current is $2$ mA and the dc output is $3.18$ V.',
        detail: 'Exercise 4.3 works exactly these numbers for the ideal diode. Silicon drops subtract $0.7$ V from the peak first, then the $1/\\pi$ averaging applies to the remainder.',
      },
      {
        term: 'Bridge advantage',
        kind: 'insight',
        statement: 'Four diodes steer both polarities to one output polarity, doubling the average to **$2V_{s}/\\pi$** and halving each PIV toward $V_{s}$, tagged `bridge-PIV`. No center-tapped transformer is needed, unlike the two-diode full-wave stage.',
        detail: 'Figure 4.22 versus Figure 4.21 frames the trade: two diode drops per half cycle instead of one, repaid by full transformer use and lower stress. Mains supplies therefore standardize on bridges.',
      },
      {
        term: 'Peak detector action',
        kind: 'definition',
        statement: 'The capacitor charges through the diode near each peak and discharges into $R$ between peaks, so conduction is a **brief pulse** each cycle, tagged `peak-hold`. The $CR \\gg T$ condition keeps discharge nearly linear and ripple small.',
        detail: 'Figure 4.25 draws the zoomed peak with the short conduction angle. Diode average current exceeds load current because the whole cycle charge ships in the short pulse.',
      },
      {
        term: 'Ripple arithmetic',
        kind: 'theorem',
        statement: 'Charge lost $I_{DC}T$ equals charge stored $CV_{r}$, giving **$V_{r} = I_{DC}/(2fC)$** for full-wave doubling of pulse rate, tagged `ripple-2fC`. A $100$ mA load allowed $1$ V of ripple at $60$ Hz needs $833$ $\\mu$F.',
        detail: 'Half-wave service drops the factor two. Ripple frequency is $2f$ for full-wave bridges, which is why humming supplies betray their rectifier at twice the mains rate.',
      },
      {
        term: 'Diode current burden',
        kind: 'insight',
        statement: 'Narrow conduction forces tall current pulses, with each bridge diode averaging about **half the load current** and peaking at several times it, tagged `diode-burden`. Diodes are chosen by repetitive peak current and surge rating, not by the load average.',
        detail: 'Lower ripple means shorter angle and taller pulses, so quiet supplies stress diodes hardest. Average ratings near $I_{DC}/2$ per diode with ampere-class peaks are typical at $100$ mA loads.',
      },
    ],
    figures: [
      {
        caption: 'Bridge rectifier with reservoir capacitor: both half cycles charge $C$ to the peak $V_{p}$, which then sags by the ripple $V_{r} = I_{DC}/(2fC)$ before the next pulse.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bridge rectifier and capacitor filter ripple waveform"><title>Bridge rectifier with filter ripple</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Bridge rectifier and filter ripple</text><g stroke="currentColor" stroke-width="2" fill="none"><circle cx="80" cy="180" r="26"/><polygon points="200,110 200,130 170,120"/><polygon points="170,240 170,260 200,250"/><polygon points="260,120 290,110 290,130"/><polygon points="290,240 320,230 320,250"/><line x1="106" y1="180" x2="170" y2="120"/><line x1="106" y1="180" x2="170" y2="250"/><line x1="200" y1="120" x2="260" y2="120"/><line x1="200" y1="250" x2="260" y2="250"/><line x1="290" y1="120" x2="360" y2="120"/><line x1="290" y1="250" x2="360" y2="250"/><polyline points="360,120 370,106 382,134 394,106 406,134 418,120"/><line x1="418" y1="120" x2="418" y2="250"/><line x1="430" y1="120" x2="430" y2="250"/><line x1="360" y1="250" x2="430" y2="250"/><line x1="470" y1="250" x2="670" y2="250"/><polyline points="480,250 500,170 520,250 540,170 560,250 580,170 600,250 620,170 640,250"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="66" y="184" font-family="sans-serif">ac</text><text x="196" y="100" font-family="sans-serif">bridge of four</text><text x="356" y="100" font-family="sans-serif">RL</text><text x="436" y="140" font-family="sans-serif">C</text><text x="480" y="272" font-family="sans-serif">filtered humps, ripple Vr</text><text x="480" y="150" font-family="sans-serif">peak Vp</text><text x="60" y="310" font-family="sans-serif">Each diode blocks about Vp, not twice Vp</text></g></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Half-wave numbers (Sedra Exercise 4.3)',
        problem: 'A $10$ V peak sine drives an ideal diode into $R = 5$ k$\\Omega$. Find the peak diode current, the dc output component, and the PIV rating needed.',
        steps: [
          { label: 'Step 1: Pass the positive peak', text: 'Peak current is $10$ V$/5$ k$\\Omega$ $= 2$ mA through the conducting ideal diode.' },
          { label: 'Step 2: Average the half sine', text: 'The book hint gives average $V_{p}/\\pi = 10/\\pi = 3.18$ V of dc output; silicon would first lose $0.7$ V of peak.' },
          { label: 'Step 3: Rate the reverse blocking', text: 'At the negative peak the open diode holds the full $10$ V, so PIV $= 10$ V and a $15$ V or higher breakdown rating is chosen.' },
        ],
        result: '$2$ mA peak, $3.18$ V dc, PIV $10$ V (ideal; $9.3$ V peak with silicon).',
      },
      {
        title: 'Sizing the reservoir capacitor',
        problem: 'A $60$ Hz full-wave bridge must deliver $I_{DC} = 100$ mA with peak-to-peak ripple no more than $1$ V. Find $C$, the standard value to fit, and each diode average current.',
        steps: [
          { label: 'Step 1: Invert the ripple formula', text: '$C = I_{DC}/(2fV_{r})$ from $V_{r} = I_{DC}/(2fC)$, evaluated:```python\nIDC = 0.1\nf = 60.0\nVr = 1.0\nC = IDC / (2.0 * f * Vr)\nprint(C)\n```\nThe printout $0.000833$ F is $833$ $\\mu$F.' },
          { label: 'Step 2: Fit standard stock', text: 'The next standard value up is $1000$ $\\mu$F, which trims ripple to $0.83$ V and absorbs tolerance sag.' },
          { label: 'Step 3: Share the load current', text: 'Each bridge diode conducts alternate pulses averaging about $I_{DC}/2 = 50$ mA, with peaks several times higher from the narrow angle.' },
        ],
        result: '$C = 833$ $\\mu$F, fit $1000$ $\\mu$F; $50$ mA average per diode with ampere-class peaks.',
      },
    ],
    keyTakeaways: [
      'Half-wave: peak $V_{s}$, dc $V_{s}/\\pi$, PIV $V_{s}$; bridge doubles dc and halves stress per diode.',
      'Reservoir $C$ charges in brief pulses and sags linearly when $CR \\gg T$.',
      'Full-wave ripple $V_{r} = I_{DC}/(2fC)$: $100$ mA and $1$ V at $60$ Hz need $833$ $\\mu$F.',
      'Bridge diodes average near $I_{DC}/2$ each but must survive tall narrow peaks.',
    ],
    quiz: [
      // PYQ-pattern: reservoir capacitor for ripple limit (rephrased, values changed)
      {
        q: 'A $60$ Hz bridge supplies $200$ mA with ripple capped at $2$ V peak to peak. Required $C$ is about:',
        options: ['$833$ $\\mu$F', '$83$ $\\mu$F', '$8.3$ mF', '$417$ $\\mu$F'],
        answer: 0,
        explanation: 'Step 1 — Given: $I_{DC} = 0.2$ A, $2f = 120$ Hz, $V_{r} = 2$ V. Step 2 — Rule: $C = I_{DC}/(2fV_{r})$. Step 3 — Compute: $0.2/240 = 833$ $\\mu$F. Step 4 — Conclude: fit $1000$ $\\mu$F upward; halving ripple would double capacitance.',
      },
      {
        q: 'Half-wave rectified $10$ V peak (ideal diode, $5$ k$\\Omega$) gives dc output about:',
        options: ['$10$ V', '$6.36$ V', '$3.18$ V', '$0$ V'],
        answer: 2,
        explanation: 'Step 1 — Given: $V_{p} = 10$ V half sine train. Step 2 — Rule: average of half-wave sine is $V_{p}/\\pi$. Step 3 — Compute: $10/3.1416 = 3.18$ V. Step 4 — Conclude: the bridge would double this to $6.36$ V before drops.',
      },
      {
        q: 'The bridge PIV advantage over the center-tapped full-wave stage is:',
        options: ['Zero, both block $2V_{s}$', 'About half the stress per diode', 'Double the average output', 'No transformer at all'],
        answer: 1,
        explanation: 'Step 1 — Given: center-tapped diodes block near $2V_{s}$ on idle halves. Step 2 — Rule: bridge diodes each see about the peak $V_{p}$. Step 3 — Compare: half the reverse stress for the same output. Step 4 — Conclude: cheaper diodes and full copper use favor bridges.',
      },
      {
        q: 'Raising $C$ well past the ripple target mainly:',
        options: ['Raises the dc output past the peak', 'Removes the need for diodes', 'Halves the ripple frequency', 'Lowers ripple further but sharpens diode current peaks'],
        answer: 3,
        explanation: 'Step 1 — Given: $V_{r}$ already within limit. Step 2 — Rule: less sag means a shorter conduction angle. Step 3 — Effect: the same charge ships in taller, narrower pulses. Step 4 — Conclude: diminishing ripple returns against rising peak-current stress.',
      },
    ],
  },

  // ------------------------------------------------------------------ 23.4
  {
    sectionId: 'ece-e-devices-s32',
    readingTime: 8,
    intro: 'The same diode that rectifies also sculpts: limiters clip waveform tops at designed levels, clampers shift entire waveforms to a chosen dc baseline, and breakdown diodes hold rails steady. Example 4.7 exercises a $6.8$ V zener at $5$ mA with $r_{z} = 20$ $\\Omega$, extracting $V_{Z0} = 6.7$ V, line regulation near $30$ mV per V, and load limits down to $1.42$ k$\\Omega$. Small-signal thinking from Section 23.2 prices every one of these behaviors.',
    objectives: [
      'Find clipping levels of shunt and series limiter stages with $0.7$ V drops',
      'Explain clamper charging and state the clamped baseline after the transient',
      'Design the zener shunt regulator: $R$, line and load regulation, minimum $R_{L}$',
    ],
    concepts: [
      {
        term: 'Shunt limiter levels',
        kind: 'theorem',
        statement: 'A diode to a reference $V_{+}$ conducts past **$V_{+} + 0.7$ V**, holding the output there while passing smaller signals untouched, tagged `clip-level`. Mirrored diodes bound both polarities independently.',
        detail: 'Figure 4.5 develops the transfer segment by segment. Protection limiters use supply rails or zeners as the references that catch static spikes.',
      },
      {
        term: 'Clamper operation',
        kind: 'definition',
        statement: 'The series capacitor charges to the peak on the conducting half cycle, then adds that dc to the signal so the waveform tip **rests at the diode level**, tagged `dc-restore`. Steady state keeps the capacitor voltage fixed at the peak value.',
        detail: 'Clampers are DC restorers in video and switching supplies. The diode conducts only briefly per cycle to top up charge lost to load leakage.',
      },
      {
        term: 'Zener shunt model',
        kind: 'definition',
        statement: 'In breakdown the diode is **$V_{Z0}$ plus $r_{z}I_{Z}$**, so output moves only $r_{z}$ per milliampere of current change, tagged `shunt-rz`. The $6.8$ V diode gives $V_{Z0} = 6.7$ V with $r_{z} = 20$ $\\Omega$.',
        detail: 'Regulation quality is the divider $r_{z}/(R + r_{z})$ against supply moves and $R \\parallel r_{z}$ against load moves. Small $r_{z}$ and small $R$ both stiffen the rail.',
      },
      {
        term: 'Line regulation',
        kind: 'theorem',
        statement: 'Supply changes reach the output scaled by **$r_{z}/(R + r_{z})$**, tagged `line-reg`. Here $20/660$ turns $\\pm 1$ V of wander into $\\pm 30.3$ mV, or $30.3$ mV per V.',
        detail: 'The book names this ratio line regulation in mV per V. Burning more standing current in $R$ shrinks $R$ and improves it at the cost of heat.',
      },
      {
        term: 'Load limits',
        kind: 'method',
        statement: 'The zener must keep at least $I_{ZK}$ flowing, which floors the allowed **load resistance** at $V_{Z}/(I - I_{ZK})$, tagged `RL-min`. With $5$ mA available and $I_{ZK} = 0.2$ mA the floor is $1.42$ k$\\Omega$.',
        detail: 'Below the floor the diode starves, drops out of breakdown, and the output follows the unregulated divider. Overload at $0.5$ k$\\Omega$ here collapses $V_{O}$ to $4.39$ V.',
      },
    ],
    figures: [
      {
        caption: 'Limiter transfer clipping at $V_{+} + 0.7$ beside the zener shunt regulator, where $R$ feeds $V_{Z0} + r_{z}I_{Z}$ against line and load changes.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Limiter transfer and zener shunt regulator"><title>Limiter clipping and zener regulation</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Clip levels, then shunt regulation</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="40" y1="270" x2="300" y2="270"/><line x1="170" y1="300" x2="170" y2="90"/><polyline points="60,250 140,250 170,160 200,130 280,130"/><line x1="400" y1="110" x2="400" y2="270"/><polyline points="400,150 410,136 422,164 434,136 446,164 458,150"/><line x1="458" y1="150" x2="520" y2="150"/><line x1="520" y1="150" x2="520" y2="190"/><line x1="512" y1="190" x2="528" y2="182"/><line x1="520" y1="190" x2="520" y2="270"/><polyline points="560,150 570,136 582,164 594,136 606,164 616,150"/><line x1="616" y1="150" x2="616" y2="270"/><line x1="400" y1="270" x2="616" y2="270"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="306" y="274" font-family="sans-serif">vI</text><text x="174" y="106" font-family="sans-serif">vO</text><text x="210" y="122" font-family="sans-serif">clip at Vref plus 0.7</text><text x="404" y="96" font-family="sans-serif">V plus</text><text x="404" y="132" font-family="sans-serif">R 640</text><text x="534" y="176" font-family="sans-serif">zener</text><text x="560" y="132" font-family="sans-serif">RL</text><text x="470" y="290" font-family="sans-serif">VO 6.8 V at 5 mA</text><text x="60" y="316" font-family="sans-serif">Below clip the diode rests open</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Two-sided limiter levels',
        problem: 'Shunt diodes tie the output to $+5$ V through $D_{1}$ and to $-5$ V through $D_{2}$ (constant-drop $0.7$ V). A $10$ V peak sine arrives through a series resistor. Find the clip levels and the output extremes.',
        steps: [
          { label: 'Step 1: Clip the positive top', text: '$D_{1}$ conducts past $5 + 0.7 = 5.7$ V and holds the output at $5.7$ V while the resistor absorbs the excess.' },
          { label: 'Step 2: Clip the negative bottom', text: '$D_{2}$ conducts below $-5 - 0.7 = -5.7$ V and holds $-5.7$ V symmetrically.' },
          { label: 'Step 3: Pass the middle cleanly', text: 'Between $-5.7$ V and $+5.7$ V both diodes rest open, so the sine transfers untouched: output swings $\\pm 5.7$ V.' },
        ],
        result: 'Clipped sine bounded at $+5.7$ V and $-5.7$ V with an undistorted middle.',
      },
      {
        title: 'Zener shunt design (Sedra Example 4.7)',
        problem: 'A $6.8$ V zener ($I_{Z} = 5$ mA, $r_{z} = 20$ $\\Omega$, $I_{ZK} = 0.2$ mA) regulates $V^{+} = 10$ V nominal $\\pm 1$ V. Find $V_{Z0}$, $R$ for $5$ mA with no load, line regulation, and minimum $R_{L}$.',
        steps: [
          { label: 'Step 1: Strip $r_{z}$ to the knee', text: '$V_{Z0} = 6.8 - 20 \\times 0.005 = 6.7$ V, and $R = (10 - 6.8)/0.005 = 640$ $\\Omega$ sets the $5$ mA standing current:```python\nVz = 6.8\nrz = 20.0\nIZ = 0.005\nVZ0 = Vz - rz * IZ\nR = (10.0 - Vz) / IZ\nprint(VZ0)\nprint(R)\n```\nThe printout gives $6.7$ V and $640.0$ $\\Omega$.' },
          { label: 'Step 2: Divide supply wander', text: 'Line regulation is $r_{z}/(R + r_{z}) = 20/660 = 30.3$ mV per V, so $\\pm 1$ V moves $V_{O}$ only $\\pm 30.3$ mV.' },
          { label: 'Step 3: Starve the zener last', text: 'Keeping $0.2$ mA in the diode leaves $4.8$ mA for load, so $R_{L,min} = 6.8/0.0048 = 1.42$ k$\\Omega$; at $0.5$ k$\\Omega$ the rail collapses to $4.39$ V.' },
        ],
        result: '$V_{Z0} = 6.7$ V, $R = 640$ $\\Omega$, $30.3$ mV per V line regulation, $R_{L} \\ge 1.42$ k$\\Omega$.',
      },
    ],
    keyTakeaways: [
      'Shunt limiters clip at $V_{ref} \\pm 0.7$ V and pass everything between the bounds cleanly.',
      'Clampers charge the series capacitor to the peak and rest the waveform tip on the diode level.',
      'Zener model $V_{Z0} + r_{z}I_{Z}$ ($6.7$ V, $20$ $\\Omega$) with $R = 640$ $\\Omega$ sets $5$ mA standing current.',
      'Line regulation $30.3$ mV per V; loads below $1.42$ k$\\Omega$ starve the diode and collapse the rail.',
    ],
    quiz: [
      {
        q: 'A shunt diode to $+5$ V ($0.7$ V drop) with a $10$ V peak sine input clips the positive peak at:',
        options: ['$+10$ V', '$+4.3$ V', '$5.0$ V', '$+5.7$ V'],
        answer: 3,
        explanation: 'Step 1 — Given: reference $5$ V and $0.7$ V forward drop. Step 2 — Rule: conduction starts at $V_{ref} + V_{D}$. Step 3 — Compute: $5 + 0.7 = 5.7$ V. Step 4 — Conclude: the resistor absorbs everything above $5.7$ V.',
      },
      {
        q: 'The $6.8$ V zener at $5$ mA with $r_{z} = 20$ $\\Omega$ has $V_{Z0}$ equal to:',
        options: ['$6.0$ V', '$6.7$ V', '$6.9$ V', '$6.8$ V'],
        answer: 1,
        explanation: 'Step 1 — Given: $V_{Z} = 6.8$ V at $I_{Z} = 5$ mA. Step 2 — Rule: $V_{Z} = V_{Z0} + r_{z}I_{Z}$. Step 3 — Compute: $6.8 - 20 \\times 0.005 = 6.7$ V. Step 4 — Conclude: the knee sits $100$ mV below the rated point.',
      },
      {
        q: 'With $R = 640$ $\\Omega$ and $r_{z} = 20$ $\\Omega$, line regulation is about:',
        options: ['$970$ mV per V', '$3$ mV per V', '$30.3$ mV per V', '$640$ mV per V'],
        answer: 2,
        explanation: 'Step 1 — Given: series $640$ $\\Omega$ against shunt $20$ $\\Omega$. Step 2 — Rule: line ratio is $r_{z}/(R + r_{z})$. Step 3 — Compute: $20/660 = 0.0303$ V per V. Step 4 — Conclude: $\\pm 1$ V of supply wander moves the rail $\\pm 30.3$ mV.',
      },
      {
        q: 'Minimum load resistance keeping $0.2$ mA in the zener with $5$ mA total is:',
        options: [`$1.42$ k$\\Omega$`, `$6.8$ k$\\Omega$`, `$640$ $\\Omega$`, `$0.5$ k$\\Omega$`],
        answer: 0,
        explanation: 'Step 1 — Given: $5$ mA through $R$ and $I_{ZK} = 0.2$ mA. Step 2 — Rule: load takes at most $I - I_{ZK}$. Step 3 — Compute: $6.8/0.0048 = 1.42$ k$\\Omega$. Step 4 — Conclude: heavier loads collapse regulation toward the raw divider.',
      },
    ],
  },
]
