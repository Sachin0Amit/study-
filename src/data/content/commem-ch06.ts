import type { SectionContent } from '../library'

// ============================================================================
// Communications Electromagnetics — Chapter 6: Lines Waveguides Antennas
// Master study content. Math is LaTeX rendered by KaTeX via RichText.
// ============================================================================

export const commemCh06Content: SectionContent[] = [
  // ---------------------------------------------------------------- 6.1
  {
    sectionId: 'commem-ch6-s1',
    readingTime: 10,
    intro: 'A transmission line distributes inductance and capacitance along its length, so voltage and current obey wave equations rather than lumped rules. Characteristic impedance and reflection coefficient then predict every standing pattern. This section derives those two quantities and reads the resulting waveforms.',
    objectives: [
      'Write telegrapher equations and extract propagation constant and impedance',
      'Compute reflection coefficient and standing-wave ratio from load mismatch',
      'Predict input impedance for open, short and matched terminations'
    ],
    concepts: [
      {
        term: 'Telegrapher equations',
        kind: 'law',
        statement: 'Series **`R`** plus **`L`** and shunt **`G`** plus **`C`** per length `PUL` give $$-\\frac{\\partial v}{\\partial z} = Ri + L\\frac{\\partial i}{\\partial t}, \\quad -\\frac{\\partial i}{\\partial z} = Gv + C\\frac{\\partial v}{\\partial t}.$$ Phasors replace derivatives by **`jw`** `JW` factor.',
        detail: 'Lossless limits drop $R$ and $G$, leaving pure $L$-$C$ exchange. Per-meter values near $L = 250$ nH and $C = 100$ pF model typical coax.'
      },
      {
        term: 'Characteristic impedance lossless',
        kind: 'theorem',
        statement: 'Lossless impedance **`Z0`** `ZCHAR` and speed **`v`** `VEL` follow $$Z_0 = \\sqrt{\\frac{L}{C}}, \\quad v = \\frac{1}{\\sqrt{LC}}.$$ The $250$-nH, $100$-pF illustration gives **`50`** `OHM50` ohms with $$v = 2\\times10^{8} \\text{ m/s}.$$',
        detail: 'Raising $L$ raises impedance; raising $C$ lowers it. Velocity below $c$ reflects dielectric filling with factor $1/\\sqrt{\\epsilon_r}$.'
      },
      {
        term: 'Reflection coefficient',
        kind: 'definition',
        statement: 'Load **`ZL`** `LOAD` against **`Z0`** `ZCHAR` reflects amplitude **`Gamma`** `REFL` as $$\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0}.$$ Matched **`ZL`** equal to **`Z0`** gives **zero** `ZERO`; open gives **plus one** `OPEN`; short gives **minus one** `SHORT`.',
        detail: 'A $100$-ohm load on $50$-ohm line gives $\\Gamma = \\frac{1}{3}$. A $25$-ohm load gives $\\Gamma = -\\frac{1}{3}$ with inverted phase.'
      },
      {
        term: 'SWR and power delivery',
        kind: 'law',
        statement: 'Standing ratio **`SWR`** `VSWR` and delivered fraction **`DEL`** `POWER` follow $$SWR = \\frac{1+|\\Gamma|}{1-|\\Gamma|}, \\quad P = P_{inc}(1-|\\Gamma|^{2}).$$ A third-reflection wastes **one ninth** `NINTH` as $$P = \\frac{8}{9}P_{inc}.$$',
        detail: 'Magnitudes $0$, $\\frac{1}{3}$ and $1$ map to $SWR$ $1$, $2$ and infinity. Zero magnitude is the only full-delivery point.'
      },
      {
        term: 'Input impedance along line',
        kind: 'method',
        statement: 'Looking in distance **`l`** `LEN` from load sees **`Zin`** `ZIN` as $$Z_{in} = Z_0\\frac{Z_L + jZ_0\\tan\\beta l}{Z_0 + jZ_L\\tan\\beta l}.$$ Quarter-wave inverts as **square over load** `QTR` with $$Z_{in} = \\frac{Z_0^{2}}{Z_L}.$$',
        detail: 'Short through quarter-wave looks open and open looks short. Half-wave repeats the load exactly at every multiple.'
      }
    ],
    examples: [
      {
        title: 'Mismatch 100 ohms on 50-ohm line',
        problem: 'Load 100 ohms terminates 50-ohm lossless line. Find Gamma, SWR and power share, then Zin at quarter-wave.',
        steps: [
          { label: 'Step 1', text: 'Insert impedances directly.\n```text\nGamma=(100-50)/(100+50)=50/150=1/3\nSWR=(1+1/3)/(1-1/3)=2.0\nPdel=1-1/9=8/9=88.9%\n```' },
          { label: 'Step 2', text: 'Reflected third adds in phase at voltage maxima, doubling envelope peaks to $1.33$ times incident. Minima dip to $0.67$ times.' },
          { label: 'Step 3', text: 'Quarter-wave look gives $Z_{in} = \\frac{2500}{100} = 25$ ohms, the inversion $Z_0^{2}/Z_L$.' }
        ],
        result: 'Third reflects, SWR 2, near 89 percent delivered; quarter-wave shows 25 ohms.'
      },
      {
        title: 'Short and open signatures',
        problem: 'Identify Gamma and the voltage at the load for short 0 and open infinity on 50-ohm line.',
        steps: [
          { label: 'Step 1', text: 'Take limits of the ratio.\n```text\nshort: (0-50)/(0+50) = -1, Vload = 0\nopen: (inf)/(inf) -> +1, Iload = 0\n```' },
          { label: 'Step 2', text: 'Short forces voltage null by cancellation; current doubles. Open forces current null; voltage doubles.' },
          { label: 'Step 3', text: 'Both give $|\\Gamma| = 1$ so $SWR$ is infinite and net delivery zero, all power returning.' }
        ],
        result: 'Short minus one with voltage null; open plus one with current null.'
      }
    ],
    keyTakeaways: [
      'Distributed L and C make voltage and current travel as waves.',
      'Gamma is load minus line over load plus line.',
      'SWR maps magnitude to peak-to-valley ratio.',
      'Line length transforms the load; quarter-wave inverts it.'
    ],
    quiz: [
      // PYQ-pattern: reflection coefficient with SWR and quarter-wave Zin
      {
        q: 'ZL 25 on Z0 50. Gamma is:',
        options: [`$\\frac{-1}{3}$`, `$\\frac{1}{3}$`, '1', '0'],
        answer: 0,
        explanation: 'Step 1: Numerator is 25 minus 50 which is minus 25. Step 2: Denominator is 25 plus 50 which is 75. Step 3: Ratio is minus 25 over 75. Step 4: Simplified this is minus $\\frac{1}{3}$.'
      },
      {
        q: 'Gamma magnitude $\\frac{1}{3}$ gives SWR:',
        options: ['1', '2', '1.5', 'infinite'],
        answer: 1,
        explanation: 'Step 1: Numerator 1 plus $\\frac{1}{3}$ is $\\frac{4}{3}$. Step 2: Denominator 1 minus $\\frac{1}{3}$ is $\\frac{2}{3}$. Step 3: Ratio is $\\frac{4}{3}$ divided by $\\frac{2}{3}$ which is 2. Step 4: Zero would give 1, unity infinity.'
      },
      {
        q: 'Quarter-wave 50-ohm section into 100-ohm load shows input:',
        options: ['100', '50', '25', '12.5'],
        answer: 2,
        explanation: 'Step 1: Formula is Z0 squared over ZL. Step 2: 50 squared is 2500. Step 3: 2500 divided by 100 is 25. Step 4: Half-wave would repeat 100 instead.'
      },
      {
        q: 'Matched termination delivers:',
        options: ['half power', 'double power', 'zero power', 'full incident power with zero reflection'],
        answer: 3,
        explanation: 'Step 1: Match makes ZL equal Z0. Step 2: Gamma numerator is zero. Step 3: SWR is 1. Step 4: Delivered fraction 1 minus 0 is full.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.2
  {
    sectionId: 'commem-ch6-s2',
    depth: [
      {
        tier: 'masters',
        title: 'Impedance matching: reflection, Smith chart and bandwidth',
        blocks: [
          {
            kind: 'para',
            body: 'A load $Z_L$ on a line of characteristic $Z_0$ reflects with coefficient $$\\Gamma = \\frac{Z_L - Z_0}{Z_L + Z_0},$$ so delivered power fraction is $1 - |\\Gamma|^{2}$ and standing-wave ratio is $VSWR = (1+|\\Gamma|)/(1-|\\Gamma|)$. **Matching** inserts a lossless network — quarter-wave section, shunt stub or lumped elements — that transforms $Z_L$ to $Z_0$ at the design frequency, making $\\Gamma = 0$ there. Graduate microwave theory treats the **Smith chart** as the bilinear map $\\Gamma(Z)$ drawn as a unit circle, turning algebraic matching into geometric moves along constant-resistance and constant-reactance circles. Bandwidth then measures how fast the match degrades off center.'
          },
          {
            kind: 'theorem',
            body: '**Conjugate matching** maximizes delivered power: with source $Z_S$, load power is maximal exactly when $Z_L = Z_S^{\\ast}$, giving $\\Gamma = 0$ when $Z_S = Z_0$. A lossless matching network preserves this optimum at one frequency and obeys the **Bode-Fano limit**: for parallel $RC$ loads, $$\\int_{0}^{\\infty} \\log\\frac{1}{|\\Gamma(\\omega)|}d\\omega \\leq \\frac{\\pi}{RC},$$ so wider bandwidth forces larger in-band reflection. No passive lossless network beats the limit; only loss, non-Foster elements or switched networks evade it at other costs.'
          },
          {
            kind: 'derivation',
            heading: 'Optimum condition and stub synthesis',
            body: 'Power delivered is $|V|^{2}\\text{Re}(Z_L)/(2|Z_S+Z_L|^{2})$ for phasor $V$; differentiating with respect to $\\text{Re}(Z_L)$ and $\\text{Im}(Z_L)$ gives optimum $\\text{Re}(Z_L) = \\text{Re}(Z_S)$ and $\\text{Im}(Z_L) = -\\text{Im}(Z_S)$, the conjugate condition. Quarter-wave matching follows by cascading $\\lambda/4$ of impedance $Z_1 = \\sqrt{Z_0 Z_L}$: input impedance is $Z_1^{2}/Z_L = Z_0$, so reflection cancels at center. Single-stub tuning solves $Y(d) + Y_{stub}(l) = Y_0$ for position $d$ and length $l$ using admittance rotation $Y(d) = Y_0(1-\\Gamma(d))/(1+\\Gamma(d))$ with $\\Gamma(d) = \\Gamma_L e^{-2j\\beta d}$. Smith-chart moves implement the same equations graphically: constant-$VSWR$ circles for line length, constant-conductance circles for stub susceptance.'
          },
          {
            kind: 'example',
            heading: 'Quarter-wave match for a real load',
            body: 'Match $Z_L = 100$ ohms to $Z_0 = 50$ ohms at center frequency. Required section is $Z_1 = \\sqrt{50 \\times 100} \\approx 70.7$ ohms, length $\\lambda/4$. At center, input is $Z_1^{2}/Z_L = 5000/100 = 50$ ohms and $\\Gamma = 0$; one octave away the electrical length shifts to $\\lambda/8$ or $3\\lambda/8$, moving the input off $Z_0$ along a constant-$VSWR$ circle to $|\\Gamma| \\approx 0.33$ ($VSWR \\approx 2$). Broader match needs two sections or a tapered line, trading length for the Bode-Fano area — the quantitative reason single-section matches are narrowband by construction.'
          }
        ]
      }
    ],
    readingTime: 10,
    intro: 'Maximum power reaches the load only when the line sees its own impedance looking forward. Quarter-wave sections and shunt stubs reshape any load into that match. The Smith chart performs the same transformation graphically by mapping impedance to reflection on a unit circle.',
    objectives: [
      'Design quarter-wave transformers for real loads',
      'Place single stubs to cancel residual susceptance',
      'Navigate impedance, admittance and SWR circles on the chart'
    ],
    concepts: [
      {
        term: 'Quarter-wave transformer',
        kind: 'method',
        statement: 'Real load **`RL`** `LOADR` matches line **`Z0`** `LINE` through section **`ZQ`** `QSEC` with $$Z_Q = \\sqrt{Z_0 R_L}.$$ Length is exactly **quarter** `LAMBDA4` wavelength: $$l = \\frac{\\lambda}{4}.$$',
        detail: 'Matching $100$ to $50$ needs $Z_Q = 70.7$ ohms. Narrowband by nature, it holds near one design frequency.'
      },
      {
        term: 'Single-stub tuning',
        kind: 'method',
        statement: 'A length **`d`** `POS` from the load plus stub length **`s`** `LEN` cancel reactance in two moves: slide to conductance **one** `G1` circle, then add opposite **susceptance** `SUS`. Shorted stub input is **`jZ0 tan`** `STUB` with $$Z_{stub} = jZ_0\\tan\\beta s.$$',
        detail: 'Distance $d$ rotates the admittance to $1 + jb$; stub of $-jb$ restores $1$. Open stubs use $-jZ_0\\cot$ with the same goal.'
      },
      {
        term: 'Chart mapping',
        kind: 'definition',
        statement: 'Normalized **`z`** `NORM` maps to **`Gamma`** `REFL` by $$\\Gamma = \\frac{z-1}{z+1},$$ centering matched **`1`** `CENTER` and wrapping the right half-plane inside the **unit** `UNIT` circle. Radius equals **`|Gamma|`** `MAG`.',
        detail: 'Open sits at rightmost $+1$, short at leftmost $-1$, match at center $0$. Upper half is inductive, lower half capacitive.'
      },
      {
        term: 'SWR and constant circles',
        kind: 'notation',
        statement: 'Constant **`|Gamma|`** `MAG` traces an **`SWR`** `VSWR` circle centered at origin with $$SWR = \\frac{1+|\\Gamma|}{1-|\\Gamma|}.$$ Constant-**resistance** `RES` and constant-**reactance** `REACT` arcs cross **orthogonally** `ORTHO`.',
        detail: 'Moving toward the generator rotates clockwise by $2\\beta l$. A full wavelength returns to start after $720$ degrees of chart rotation.'
      },
      {
        term: 'Admittance overlay',
        kind: 'insight',
        statement: 'Flipping through the center converts **`z`** to **`y`** with $$y = \\frac{1}{z},$$ rotating **`Gamma`** by **180** `HALF` degrees. Shunt elements move along constant-**conductance** `COND` circles using **`Y`** `ADM` chart.',
        detail: 'Series moves follow impedance circles; shunt moves follow admittance circles. Combined overlays let stub designs stay on one sheet.'
      }
    ],
    examples: [
      {
        title: 'Match 100 to 50 with one section',
        problem: 'Design the quarter-wave link between 50-ohm line and 100-ohm load at one frequency.',
        steps: [
          { label: 'Step 1', text: 'Geometric mean sets the section.\n```text\nZQ = sqrt(50*100) = sqrt(5000) = 70.71 ohm\nl = lambda/4 at design f\n```' },
          { label: 'Step 2', text: 'Load $100$ through $70.7$ quarter-wave presents $70.7^{2}/100 = 50$ ohms to the main line. Reflection at the junction vanishes.' },
          { label: 'Step 3', text: 'Off-frequency the length differs from quarter-wave and mismatch regrows; two sections would widen the band.' }
        ],
        result: '70.7-ohm quarter-wave matches 100 to 50 at center frequency.'
      },
      {
        title: 'Chart trip from load to input',
        problem: 'Load z 2 (100 on 50) sits on real axis. Move quarter-wave toward generator. Find new z and Gamma path.',
        steps: [
          { label: 'Step 1', text: 'Plot start and rotate half turn.\n```text\nz=2 -> Gamma=+1/3 (real right)\nrotate 180 deg by lambda/4 -> Gamma=-1/3\nz_new=0.5 (25 ohm on 50)\n```' },
          { label: 'Step 2', text: 'Magnitude $\\frac{1}{3}$ stays on $SWR = 2$ circle; angle flips by $180$ degrees for $2\\beta l = 180$.' },
          { label: 'Step 3', text: 'Reading $z = 0.5$ confirms the $Z_0^{2}/Z_L$ inversion without algebra.' }
        ],
        result: 'Quarter-wave walk swaps 2 to 0.5 through opposite side of the chart.'
      }
    ],
    keyTakeaways: [
      'Quarter-wave sections match real loads by geometric mean.',
      'Stubs cancel leftover susceptance after sliding to unit conductance.',
      'Chart center is matched; radius is reflection magnitude.',
      'Line motion is clockwise rotation at constant SWR circle.'
    ],
    quiz: [
      // PYQ-pattern: quarter-wave mean with chart rotation direction
      {
        q: 'Match RL 200 to Z0 50 needs ZQ:',
        options: ['125', '100', '50', '250'],
        answer: 1,
        explanation: 'Step 1: Mean is sqrt of 50 times 200. Step 2: Product is 10000. Step 3: Root is 100. Step 4: 125 is arithmetic mean, not geometric.'
      },
      {
        q: 'Moving toward generator on the chart rotates:',
        options: ['counterclockwise', 'radially outward', 'clockwise at constant SWR', 'randomly'],
        answer: 2,
        explanation: 'Step 1: Length adds negative phase to Gamma. Step 2: Phase lag is clockwise. Step 3: Lossless keeps magnitude fixed. Step 4: Outward would need added loss or gain.'
      },
      {
        q: 'Shorted stub shorter than quarter-wave looks:',
        options: ['capacitive', 'open', 'resistive 50', 'inductive'],
        answer: 3,
        explanation: 'Step 1: Input is jZ0 tan of beta s. Step 2: Tangent positive below 90 degrees. Step 3: Positive imaginary is inductive. Step 4: Beyond quarter-wave it flips capacitive.'
      },
      {
        q: 'Load z 0 (short) maps on chart to Gamma:',
        options: ['-1 left', '+1 right', '0 center', 'infinity'],
        answer: 0,
        explanation: 'Step 1: Formula gives (0 minus 1) over 1. Step 2: Value is minus 1. Step 3: Leftmost point marks short. Step 4: Center is matched, right is open.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.3
  {
    sectionId: 'commem-ch6-s3',
    readingTime: 10,
    intro: 'Hollow pipes and glass strands both guide waves, but by different physics: metal walls quantize transverse patterns while total internal bouncing traps light in a core. Cutoff separates traveling modes from decaying ones. This section sizes those thresholds and the single-mode windows above them.',
    objectives: [
      'Compute cutoff frequencies for rectangular TE and TM modes',
      'Explain dominant-mode bandwidth and field orientation per mode',
      'Apply total-reflection guiding and V-number limits in fibres'
    ],
    concepts: [
      {
        term: 'Rectangular cutoff law',
        kind: 'theorem',
        statement: 'Width **`a`** `WIDE` and height **`b`** `HIGH` quantize mode **`TEmn`**, **`TMmn`** `MODE` at $$f_{c,mn} = \\frac{c}{2}\\sqrt{\\left(\\frac{m}{a}\\right)^{2} + \\left(\\frac{n}{b}\\right)^{2}}.$$ Below **`fc`** fields **decay** `CUT` instead of traveling.',
        detail: 'Standard guide $a = 2.286$ cm, $b = 1.016$ cm gives $TE_{10}$ at $6.56$ GHz. Next modes $TE_{20}$ at $13.12$ and $TE_{01}$ at $14.76$ GHz bound single-mode use.'
      },
      {
        term: 'Dominant TE10 band',
        kind: 'definition',
        statement: 'Lowest mode **`TE10`** `DOM` carries **E across** `ACROSS` the narrow wall with $$E_y \\propto \\sin\\!\\left(\\frac{\\pi x}{a}\\right).$$ Usable single-mode span runs **`1.25 fc`** to **`1.9 fc`** `BAND` in practice.',
        detail: 'Excitation by a probe across the center launches this pattern cleanly. Operating at $1.5f_c$ balances wall loss against modal purity.'
      },
      {
        term: 'Guide wavelength and velocity',
        kind: 'law',
        statement: 'Above cutoff the axial constant **`beta`** `PROP` shrinks as $$\\beta = k\\sqrt{1-\\left(\\frac{f_c}{f}\\right)^{2}}, \\quad \\lambda_g = \\frac{2\\pi}{\\beta} > \\lambda.$$ Envelope speed **`vg`** `GROUP` stays below **`c`** `LIGHT` while front speed exceeds it.',
        detail: 'At $f = 1.5f_c$, $\\lambda_g = 1.34\\lambda$ and $v_g = 0.745c$. Near cutoff $\\lambda_g$ balloons and delay soars.'
      },
      {
        term: 'Fibre guiding by TIR',
        kind: 'method',
        statement: 'Core index **`n1`** `CORE` above cladding **`n2`** `CLAD` traps rays beyond **critical** `CRIT` angle with $$\\theta_c = \\sin^{-1}\\!\\left(\\frac{n_2}{n_1}\\right).$$ Numerical aperture **`NA`** `APER` collects $$NA = \\sqrt{n_1^{2}-n_2^{2}}.$$',
        detail: 'Indices $1.48$ and $1.46$ give $NA = 0.24$ and acceptance near $14$ degrees in air. Steeper rays leak into the cladding continuously.'
      },
      {
        term: 'V-number and single mode',
        kind: 'theorem',
        statement: 'Normalized frequency **`V`** `VNORM` counts fibre modes as $$V = \\frac{2\\pi a}{\\lambda}NA, \\quad V < 2.405 \\to single\\ mode.$$ Mode count grows as **square** `SQUARE`: $$M \\approx \\frac{V^{2}}{2}.$$',
        detail: 'Core radius $4$ micro-m at $1.55$ micro-m with $NA = 0.12$ gives $V = 1.95$, single-mode. Doubling radius quadruples guided modes.'
      }
    ],
    examples: [
      {
        title: 'Cutoff ladder of X-band guide',
        problem: 'Guide a 2.286 cm by 1.016 cm air-filled. Compute first three cutoffs and the single-mode window.',
        steps: [
          { label: 'Step 1', text: 'Apply c over twice each dimension.\n```text\nTE10: 3e8/(2*0.02286)=6.56 GHz\nTE20: 2*6.56=13.12 GHz\nTE01: 3e8/(2*0.01016)=14.76 GHz\n```' },
          { label: 'Step 2', text: 'Dominant $6.56$ GHz sets the floor. First higher mode $13.12$ GHz sets the ceiling for pure operation.' },
          { label: 'Step 3', text: 'Practical span $1.25$ to $1.9$ times $6.56$ is $8.2$ to $12.4$ GHz, the classic X-band allocation.' }
        ],
        result: 'Cutoffs 6.56, 13.12, 14.76 GHz; single-mode window about 8.2 to 12.4 GHz.'
      },
      {
        title: 'Fibre V check at 1550 nm',
        problem: 'Step fibre core radius 4 um, NA 0.12, wavelength 1.55 um. Test single-mode and estimate guided count if radius doubles.',
        steps: [
          { label: 'Step 1', text: 'Insert numbers into V.\n```text\nV=2*pi*4/1.55*0.12=1.95 < 2.405 -> single mode\n```' },
          { label: 'Step 2', text: 'Value $1.95$ clears the $2.405$ boundary with margin $0.45$. Only $LP_{01}$ travels.' },
          { label: 'Step 3', text: 'Double radius gives $V = 3.9$ and $M \\approx 3.9^{2}/2 = 7.6$, so about eight modes travel.' }
        ],
        result: 'Single-mode at 4 um; near eight modes if the core doubles.'
      }
    ],
    keyTakeaways: [
      'Wall dimensions quantize cutoff frequencies by mode integers.',
      'TE10 spans the lowest usable band up to the next cutoff.',
      'Core-cladding contrast traps light by total internal bouncing.',
      'V below 2.405 keeps one fibre mode; higher V packs many.'
    ],
    quiz: [
      // PYQ-pattern: rectangular cutoff ladder with fibre V-number test
      {
        q: 'a 2.286 cm air guide TE10 cutoff is about:',
        options: ['3.28 GHz', '13.1 GHz', '6.56 GHz', '14.8 GHz'],
        answer: 2,
        explanation: 'Step 1: Formula is c over 2a. Step 2: Denominator 2 times 0.02286 is 0.04572. Step 3: 3e8 divided by 0.04572 is 6.56e9. Step 4: Double is TE20, not TE10.'
      },
      {
        q: 'Operating between TE10 and TE20 gives:',
        options: ['multimode chaos', 'DC conduction', 'no propagation', 'single-mode purity'],
        answer: 3,
        explanation: 'Step 1: Only TE10 travels above 6.56. Step 2: TE20 starts at 13.12. Step 3: Window between carries one pattern. Step 4: Below TE10 everything decays.'
      },
      {
        q: 'V 1.95 at 1550 nm means fibre is:',
        options: ['single-mode', 'multimode', 'cut off fully', 'leaky always'],
        answer: 0,
        explanation: 'Step 1: Threshold is 2.405. Step 2: 1.95 is below by 0.45. Step 3: Only LP01 survives. Step 4: Above 2.405 higher modes join.'
      },
      {
        q: 'NA 0.24 in air accepts cone half-angle about:',
        options: ['7 deg', '14 deg', '24 deg', '48 deg'],
        answer: 1,
        explanation: 'Step 1: Angle is arcsin of 0.24. Step 2: Sine 14 degrees is 0.242. Step 3: 7 degrees gives 0.12. Step 4: 24 confuses NA with degrees.'
      }
    ]
  },
  // ---------------------------------------------------------------- 6.4
  {
    sectionId: 'commem-ch6-s4',
    readingTime: 9,
    intro: 'Short current elements radiate doughnut-shaped patterns whose strength follows simple sine laws. Real dipoles stretch that element toward resonance while arrays add patterned interference through their spacing. Gain and directivity then score how tightly each structure focuses power.',
    objectives: [
      'Sketch dipole patterns and locate nulls and beam peaks',
      'Compute gain from directivity and radiation efficiency',
      'Evaluate two-element array factor versus spacing and phase'
    ],
    concepts: [
      {
        term: 'Short dipole pattern',
        kind: 'definition',
        statement: 'Length far below **`lambda`** `WAVE` radiates **`sin theta`** `DONUT` field $$E_{\\theta} \\propto I_0 l\\frac{\\sin\\theta}{r},$$ null along the **axis** `NULL` and peak **broadside** `MAX`. Power follows **`sin squared`** `POW2`.',
        detail: 'Half of all power falls within $49$ degrees of broadside. Total radiated power scales as $(l/\\lambda)^{2}$, punishing extreme shortness.'
      },
      {
        term: 'Half-wave resonance',
        kind: 'theorem',
        statement: 'Length **`lambda/2`** `HALF` resonates near **73-ohm** `R73` input with $$Z_{in} \\approx 73 + j0 \\ \\Omega, \\quad pattern \\propto \\frac{\\cos(\\tfrac{\\pi}{2}\\cos\\theta)}{\\sin\\theta}.$$ Quarter-wave monopole over ground **halves** `IMAGE` the dipole with $$Z_{in} \\approx 36.5 \\ \\Omega.$$',
        detail: 'Resonance trims the large capacitive reactance of short whips. Ground image supplies the missing half with half the feed impedance.'
      },
      {
        term: 'Directivity and gain',
        kind: 'definition',
        statement: 'Focus ratio **`D`** `DIR` compares peak to average intensity **`U`** `INT` as $$D = \\frac{U_{max}}{U_{avg}} = \\frac{4\\pi U_{max}}{P_{rad}}.$$ Real gain **`G`** `GAIN` adds efficiency **`e`** `EFF` with $$G = eD, \\quad G_{dB} = 10\\log_{10} G.$$',
        detail: 'Short dipoles give $D = 1.5$ (1.76 dBi); half-wave gives $1.64$ (2.15 dBi). Efficiency $0.8$ turns $D = 4$ into $G = 3.2$ (5.05 dBi).'
      },
      {
        term: 'Friis link preview',
        kind: 'law',
        statement: 'Received power **`Pr`** `RX` from **`Pt`**, gains **`Gt`**, **`Gr`** `G both` over range **`R`** `RANGE` obeys $$\\frac{P_r}{P_t} = G_t G_r\\left(\\frac{\\lambda}{4\\pi R}\\right)^{2}.$$ Doubling **`R`** quarters **`Pr`** `SQUARE`.',
        detail: 'At $R = 1$ km, $\\lambda = 0.3$ m, $G = 1$ each, loss is $\\left(\\frac{0.3}{12566}\\right)^{2} = 5.7\\times10^{-10}$ or $92.4$ dB. Antenna gains add directly in decibels.'
      },
      {
        term: 'Two-element array factor',
        kind: 'method',
        statement: 'Spacing **`d`** `SPACE` and phase **`beta`** `PHASE` shape factor **`AF`** `ARRAY` as $$AF = 1 + e^{j(kd\\cos\\theta + \\beta)}, \\quad |AF| = 2\\left|\\cos\\!\\left(\\frac{kd\\cos\\theta + \\beta}{2}\\right)\\right|.$$ Half-wave spacing in phase **doubles broadside** `SUM` and **nulls endfire** `DIFF`.',
        detail: 'Elements $\\lambda/2$ apart with $\\beta = 0$ give $|AF| = 2|\\cos((\\pi/2)\\cos\\theta)|$: $2$ at $90$ degrees, $0$ at $0$ degrees. Flipping $\\beta = \\pi$ swaps peak and null.'
      }
    ],
    examples: [
      {
        title: 'Link budget at 1 GHz over 1 km',
        problem: 'Pt 10 W, unity-gain whips, lambda 0.3 m, R 1000 m. Find Pr and path loss in dB.',
        steps: [
          { label: 'Step 1', text: 'Insert into the range-squared law.\n```text\nPr/Pt=(0.3/(4*pi*1000))^2=(2.387e-5)^2=5.7e-10\nPr=10*5.7e-10=5.7 nW, loss=92.4 dB\n```' },
          { label: 'Step 2', text: 'Wavelength over $12566$ gives $2.39\\times10^{-5}$; squaring gives $5.7\\times10^{-10}$. Ten watts times that is $5.7$ nW.' },
          { label: 'Step 3', text: 'Adding $6$-dBi dishes at both ends ($4$ times each) raises $P_r$ sixteenfold to $91$ nW.' }
        ],
        result: 'Near 5.7 nW at unity gain; 92.4 dB of spreading loss.'
      },
      {
        title: 'Steer a two-element pair',
        problem: 'Two isotropic radiators spaced lambda/2, fed in phase. Find pattern peaks and nulls, then flip to out-of-phase.',
        steps: [
          { label: 'Step 1', text: 'Evaluate the cosine factor at key angles.\n```text\nbeta=0: |AF|=2|cos((pi/2)cos t)|\nt=90: 2 (peak) | t=0: 0 (null)\nbeta=pi: peaks and nulls swap\n```' },
          { label: 'Step 2', text: 'Broadside $\\theta = 90$ gives $\\cos = 0$ so $|AF| = 2$. Endfire $\\theta = 0$ gives $\\cos = 1$ so $|AF| = 0$.' },
          { label: 'Step 3', text: 'Phase $\\beta = \\pi$ adds half-turn: broadside nulls and endfire peaks, the endfire array.' }
        ],
        result: 'In-phase favors broadside; out-of-phase favors endfire with identical shape mirrored.'
      }
    ],
    keyTakeaways: [
      'Short elements null on axis and peak broadside by sine law.',
      'Half-wave resonance gives practical impedance near 73 ohms.',
      'Gain is directivity times efficiency, logged for link math.',
      'Spacing plus phasing steer array peaks and nulls by cosine.'
    ],
    quiz: [
      // PYQ-pattern: dipole nulls with gain math and array-factor peaks
      {
        q: 'Short-dipole null lies:',
        options: ['broadside', 'everywhere', 'at 45 degrees', 'along the axis'],
        answer: 3,
        explanation: 'Step 1: Field goes as sin of theta. Step 2: Theta zero is the axis. Step 3: Sine of zero is zero. Step 4: Broadside at 90 gives the peak.'
      },
      {
        q: 'D 4 with efficiency 0.5 gives G and dBi:',
        options: ['2 and 3.01', '4 and 6.02', '1 and 0', '8 and 9.03'],
        answer: 0,
        explanation: 'Step 1: G equals 0.5 times 4 which is 2. Step 2: dBi is 10 log of 2. Step 3: Log gives 0.301 times 10 which is 3.01. Step 4: 4 ignores efficiency.'
      },
      {
        q: 'Half-wave dipole input near resonance is about:',
        options: ['300 ohms', '73 ohms', '5 ohms', '1000 ohms'],
        answer: 1,
        explanation: 'Step 1: Short whips show large reactance. Step 2: Stretching to half-wave cancels it. Step 3: Real part lands near 73. Step 4: Monopole halves this to 36.5.'
      },
      {
        q: 'Two in-phase spacings lambda/2 peak at:',
        options: ['endfire only', 'uniform all angles', 'broadside with null endfire', 'zero everywhere'],
        answer: 2,
        explanation: 'Step 1: Factor is 2 cos of (pi over 2 cos). Step 2: Broadside cos is 0 giving 2. Step 3: Endfire cos is 1 giving cos of 90 which is 0. Step 4: Out-of-phase swaps the two.'
      }
    ]
  }
]
