import type { SectionContent } from '../library'

// ============================================================================
// The Electronics Master Library — Chapter 28: Frequency Response of
// Amplifiers. Sedra/Smith, "Microelectronic Circuits" 8e, Chapter 10
// (pp. 673–780): low-frequency coupling and bypass poles, high-frequency
// transistor capacitances, the Miller effect and $f_{T}$, Bode construction
// with gain-bandwidth product, and dominant-pole compensation.
// Worked-problem numbers follow the book; arithmetic re-verified. Math is
// LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh28Content: SectionContent[] = [
  // ------------------------------------------------------------------ 28.1
  {
    sectionId: 'elec-ch28-s1',
    readingTime: 8,
    intro: 'Coupling capacitors $C_{C1}$ and $C_{C2}$ plus the emitter bypass $C_{E}$ of Figure 10.37 turn every discrete stage into three cascaded high-pass sections at low frequencies. Each contributes a pole $f_{Li} = 1/(2\\pi R_{eqi}C_{i})$ and the dominant lowest pole sets the $-3$ dB frequency $f_{L}$. Problem 10.101 designs those three capacitors for $f_{L} = 200$ Hz with the bypass usually dominant.',
    objectives: [
      'Write each low pole as $f_{Li} = 1/(2\\pi R_{eqi}C_{i})$ with resistance seen by the shorted-source method',
      'Identify why the bypass $C_{E}$ pole usually dominates $f_{L}$ in CE stages',
      'Size coupling and bypass capacitors for a target $f_{L} = 200$ Hz following Problem 10.101',
    ],
    concepts: [
      {
        term: 'High-pass STC sections',
        kind: 'definition',
        statement: 'Every series capacitor with its equivalent resistance forms a **high-pass single-time-constant** section, tagged `hp-stc`. Magnitude rises at $20$ dB per decade below the break before flattening to midband.',
        detail: 'Figure 1.22 previews the high-pass shape that Chapter 10 reuses three times. The transfer is $T = s\\tau/(1 + s\\tau)$ with $\\tau = R_{eq}C$ and corner $f_{L} = 1/(2\\pi\\tau)$.',
      },
      {
        term: 'Short-circuit time-constant method',
        kind: 'method',
        statement: 'Find each $R_{eqi}$ by **zeroing the source and shorting** all other capacitors, tagged `short-tau`. Summed time constants then estimate $\\omega_{L}$ when poles interact.',
        detail: 'For $C_{C1}$ the resistance is $R_{sig} + R_{in}$; for $C_{C2}$ it is $R_{out} + R_{L}$. The book shows the sum $\\sum \\tau_{i}$ locating $f_{L}$ within a few percent when one pole dominates.',
      },
      {
        term: 'Dominant bypass pole',
        kind: 'insight',
        statement: 'The emitter bypass sees roughly **$R_{E}$ divided by stage gain**, so its pole sits lowest, tagged `bypass-dom`. Problem 10.100 finds the bypass at tens of hertz while couplings sit near a few hertz.',
        detail: 'Resistance seen by $C_{E}$ is $R_{E} \\parallel ((R_{sig}^{\\prime}/\\beta) + r_{e})$, often under $100$ $\\Omega$. Large $C_{E}$ in the tens of microfarads is the price of recovering full gain down to voice frequencies.',
      },
      {
        term: 'Coupling-capacitor sizing',
        kind: 'method',
        statement: 'Allocate the $200$ Hz budget unequally so the **bypass takes the lowest pole** and couplings sit lower still, tagged `cap-alloc`. Problem 10.101 picks $C_{E}$ first, then $C_{C1}$ and $C_{C2}$ for margin.',
        detail: 'Designing each pole a factor of five apart lets magnitudes add without phase pileup. Equal allocation wastes capacitance where resistance is already large.',
      },
      {
        term: 'Low-frequency phase lead',
        kind: 'insight',
        statement: 'Each high-pass section adds up to **$+90$ degrees of lead** below its break, tagged `lf-lead`. Three sections can push total phase toward $+270$ degrees at very low frequencies.',
        detail: 'Bode phase rises $45$ degrees per decade around each $f_{Li}$. Feedback stability of Chapter 29 must therefore check low-frequency loop phase as well as the high-frequency margins.',
      },
    ],
    figures: [
      {
        caption: 'Low-frequency model after Figure 10.37: $C_{C1}$, $C_{E}$ and $C_{C2}$ give three high-pass poles, with $f_{L}$ set by the dominant bypass time constant.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Low frequency high pass poles from coupling and bypass"><title>Low frequency poles</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Low band: three high-pass breaks</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="80" y1="180" x2="180" y2="180"/><line x1="200" y1="170" x2="200" y2="190"/><line x1="210" y1="170" x2="210" y2="190"/><line x1="210" y1="180" x2="330" y2="180"/><line x1="330" y1="180" x2="330" y2="240"/><polyline points="330,240 338,254 350,226 362,254 374,226 386,240"/><line x1="386" y1="240" x2="500" y2="240"/><line x1="510" y1="230" x2="510" y2="250"/><line x1="520" y1="230" x2="520" y2="250"/><line x1="520" y1="240" x2="620" y2="240"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="150" y="160" font-family="sans-serif">CC1</text><text x="330" y="270" font-family="sans-serif">CE bypass dominant</text><text x="500" y="220" font-family="sans-serif">CC2</text><text x="80" y="210" font-family="sans-serif">source plus Rin sets pole one</text><text x="380" y="210" font-family="sans-serif">low REQ sets pole two</text><text x="520" y="270" font-family="sans-serif">Rout plus RL sets pole three</text><text x="80" y="310" font-family="sans-serif">fL near highest fLi, usually the bypass</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Three-pole estimate (Problem 10.100 style)',
        problem: 'A CE stage has $C_{C1} = 10$ $\\mu$F with $R_{eq1} = 5$ k$\\Omega$, $C_{E} = 50$ $\\mu$F with $R_{eqE} = 40$ $\\Omega$, and $C_{C2} = 10$ $\\mu$F with $R_{eq2} = 6$ k$\\Omega$. Estimate each $f_{Li}$ and name the dominant pole.',
        steps: [
          { label: 'Step 1: Coupling input pole', text: 'Pole one is $f_{L1} = 1/(2\\pi \\times 5000 \\times 10^{-5}) = 3.18$ Hz.' },
          { label: 'Step 2: Bypass pole', text: 'Bypass pole is $f_{LE} = 1/(2\\pi \\times 40 \\times 50 \\times 10^{-6}) = 79.6$ Hz, the highest and hence dominant.' },
          { label: 'Step 3: Output coupling pole', text: 'Pole three is $f_{L2} = 1/(2\\pi \\times 6000 \\times 10^{-5}) = 2.65$ Hz, so overall $f_{L}$ sits just above $80$ Hz.' },
        ],
        result: '$f_{L1} = 3.2$ Hz; $f_{LE} = 79.6$ Hz dominant; $f_{L2} = 2.7$ Hz.',
      },
      {
        title: 'Design to 200 Hz (Problem 10.101)',
        problem: 'For the stage above with $R_{eqE} = 40$ $\\Omega$ and $R_{eq1} = 5$ k$\\Omega$, choose $C_{E}$ for a $150$ Hz bypass pole and $C_{C1}$ for a $15$ Hz input pole, then verify with a script.',
        steps: [
          { label: 'Step 1: Bypass capacitor', text: 'Capacitor $C_{E} = 1/(2\\pi \\times 40 \\times 150) = 26.5$ $\\mu$F, so pick $27$ $\\mu$F standard.' },
          { label: 'Step 2: Input coupling capacitor', text: 'Capacitor $C_{C1} = 1/(2\\pi \\times 5000 \\times 15) = 2.12$ $\\mu$F, so pick $2.2$ $\\mu$F standard.' },
          { label: 'Step 3: Verify by script', text: 'Pole check:```python\nimport math\nREQE = 40.0\nREQ1 = 5e3\nCE = 27e-6\nCC1 = 2.2e-6\nfE = 1.0 / (2.0 * math.pi * REQE * CE)\nf1 = 1.0 / (2.0 * math.pi * REQ1 * CC1)\nprint(fE)\nprint(f1)\n```\nThe printout gives about $147$ Hz and $14.5$ Hz, bracketing the $200$ Hz budget with the output pole.' },
        ],
        result: '$C_{E} = 27$ $\\mu$F; $C_{C1} = 2.2$ $\\mu$F; poles near $147$ and $14.5$ Hz.',
      },
    ],
    keyTakeaways: [
      'Low $f_{Li} = 1/(2\\pi R_{eqi}C_{i})$ per coupling or bypass capacitor.',
      'Bypass $C_{E}$ sees the smallest $R_{eq}$ and usually dominates $f_{L}$.',
      'Short-circuit time constants give $R_{eqi}$ with other capacitors shorted.',
      'Problem 10.101 staggers poles near $150$ and $15$ Hz for $f_{L} = 200$ Hz.',
    ],
    quiz: [
      {
        q: 'A $10$ $\\mu$F coupling capacitor seeing $5$ k$\\Omega$ gives $f_{L}$ about:',
        options: ['$3.2$ Hz', '$320$ Hz', '$3.2$ kHz', '$0.032$ Hz'],
        answer: 0,
        explanation: 'Step 1 — Given: $C$ and $R_{eq}$. Step 2 — Rule: $f = 1/(2\\pi RC)$. Step 3 — Compute: denominator is $0.314$, reciprocal $3.18$ Hz. Step 4 — Conclude: kilohm resistances need microfarads for hertz poles.',
      },
      {
        q: 'The bypass pole usually dominates because it sees:',
        options: ['The largest $R_{eq}$', 'No resistance at all', 'The smallest $R_{eq}$ near $r_{e}$ with large $C_{E}$ still giving the highest $f_{L}$', 'Only the load $R_{L}$'],
        answer: 2,
        explanation: 'Step 1 — Given: $R_{eqE} = R_{E} \\parallel (r_{e} + R_{sig}^{\\prime}/\\beta)$. Step 2 — Rule: tens of ohms beat kilohms. Step 3 — Effect: even $50$ $\\mu$F still breaks near $80$ Hz. Step 4 — Conclude: $C_{E}$ is sized first in Problem 10.101.',
      },
      // PYQ-pattern: low-pole arithmetic and dominant bypass (rephrased, values changed)
      {
        q: 'With poles at $3.2$ Hz, $79.6$ Hz and $2.7$ Hz, overall $f_{L}$ sits:',
        options: ['Near $2.7$ Hz', 'Near $3.2$ Hz', 'At $0$ Hz', 'Just above $79.6$ Hz'],
        answer: 3,
        explanation: 'Step 1 — Given: three separated high-pass breaks. Step 2 — Rule: the highest break dominates the $-3$ dB point. Step 3 — Check: $79.6$ Hz exceeds the others by a decade. Step 4 — Conclude: $f_{L}$ is just above the bypass pole.',
      },
      {
        q: 'Each high-pass section contributes phase at very low frequencies of:',
        options: ['$-90$ degrees lag', '$+90$ degrees lead', '$0$ degrees', '$+180$ degrees'],
        answer: 1,
        explanation: 'Step 1 — Given: $T = s\\tau/(1+s\\tau)$. Step 2 — Rule: numerator zero gives lead. Step 3 — Limit: $s$ toward zero approaches $+90$ degrees. Step 4 — Conclude: three sections approach $+270$ degrees total.',
      },
    ],
  },
  // ------------------------------------------------------------------ 28.2
  {
    sectionId: 'elec-ch28-s2',
    readingTime: 9,
    intro: 'At high frequencies the junction capacitances $C_{\\pi}$ and $C_{\\mu}$ for BJTs plus $C_{gs}$ and $C_{gd}$ for MOSFETs shunt the controlled source. Section 10.1 adds them to the hybrid-pi model, and Section 10.2 shows feedback capacitance $C_{gd}$ or $C_{\\mu}$ multiplied by stage gain at the input. The transit frequency $f_{T} = g_{m}/(2\\pi(C_{\\pi}+C_{\\mu}))$ then marks where short-circuit current gain falls to unity.',
    objectives: [
      'Place $C_{\\pi}$, $C_{\\mu}$, $C_{gs}$ and $C_{gd}$ on the high-frequency hybrid-pi model',
      'Write Miller input $C_{M1} = C_{f}(1+|A_{v}|)$ and output $C_{M2} = C_{f}(1+1/|A_{v}|)$',
      'Compute $f_{T} = g_{m}/(2\\pi(C_{\\pi}+C_{\\mu}))$ and link it to $r_{\\pi}$ and $C_{\\pi}$',
    ],
    concepts: [
      {
        term: 'Junction capacitance set',
        kind: 'definition',
        statement: 'Forward junctions give **diffusion capacitance** and reverse junctions give **depletion capacitance**, tagged `junction-caps`. The book lumps them as $C_{\\pi} = C_{de} + C_{je}$ and $C_{\\mu} = C_{jc}$ for BJTs.',
        detail: 'MOS twins are $C_{gs} = (2/3)WLC_{ox} + WLC_{ov}$ and $C_{gd} = WLC_{ov}$ in saturation. Values from $0.1$ pF to $1$ pF set hundred-megahertz poles with kilohm loads.',
      },
      {
        term: 'Miller multiplication',
        kind: 'theorem',
        statement: 'Bridging capacitance $C_{f}$ across gain $-A_{v}$ looks like **$C_{f}(1+|A_{v}|)$ at the input** and $C_{f}(1+1/|A_{v}|)$ at the output, tagged `miller-mult`. Figure 10.8 proves it by equating terminal currents.',
        detail: 'A $0.2$ pF $C_{\\mu}$ across gain $100$ becomes $20.2$ pF at the base. The output side barely grows, which is why the input pole dominates CE and CS bandwidth.',
      },
      {
        term: 'Transit frequency fT',
        kind: 'definition',
        statement: 'Short-circuit current gain crosses unity at **$f_{T} = g_{m}/(2\\pi(C_{\\pi}+C_{\\mu}))$**, tagged `fT-def`. Problem 10.85 reports $200$ MHz at $100$ $\\mu$A and $600$ MHz devices elsewhere.',
        detail: 'Higher bias raises $g_{m}$ linearly but also raises $C_{\\pi} = g_{m}\\tau_{F} + C_{je}$, so $f_{T}$ saturates at $1/(2\\pi\\tau_{F})$ for BJTs. MOS $f_{T} = g_{m}/(2\\pi(C_{gs}+C_{gd}))$ reaches gigahertz in short channels.',
      },
      {
        term: 'CB and CG escape',
        kind: 'insight',
        statement: 'Common-base and common-gate stages **dodge Miller** because the feedback capacitor goes to alternating-current ground, tagged `no-miller`. Section 10.4 shows their poles near $f_{T}$ rather than $f_{T}/|A_{v}|$.',
        detail: 'Cascodes exploit the same escape by holding the CE drain nearly fixed. Wideband front ends therefore stack CB over CE instead of raising single-stage gain.',
      },
      {
        term: 'Open-circuit time constants',
        kind: 'method',
        statement: 'High-frequency $\\omega_{H}$ is estimated by **opening all but one capacitor** at a time and summing $C_{i}R_{eqi}$, tagged `open-tau`. Section 10.3 applies it to CE, CS and follower stages.',
        detail: 'Input Miller capacitance with $R_{sig}^{\\prime}$ usually dominates the sum. The estimate lands within twenty percent whenever one pole clearly leads.',
      },
    ],
    figures: [
      {
        caption: 'Miller effect after Figure 10.8: $C_{\\mu}$ across gain $-A_{v}$ splits into $C_{f}(1+|A_{v}|)$ at the input and $C_{f}(1+1/|A_{v}|)$ at the output.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Miller multiplication of feedback capacitance"><title>Miller input and output capacitors</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Miller: Cf times one plus gain at input</text><g stroke="currentColor" stroke-width="2" fill="none"><rect x="280" y="120" width="160" height="120" rx="6"/><line x1="160" y1="180" x2="280" y2="180"/><line x1="440" y1="180" x2="560" y2="180"/><line x1="200" y1="120" x2="520" y2="120"/><line x1="200" y1="120" x2="200" y2="180"/><line x1="520" y1="120" x2="520" y2="180"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="300" y="170" font-family="sans-serif">gain minus Av</text><text x="230" y="110" font-family="sans-serif">Cf bridging input to output</text><text x="120" y="210" font-family="sans-serif">input CM1 equals Cf times one plus Av</text><text x="420" y="210" font-family="sans-serif">output CM2 near Cf</text><text x="120" y="270" font-family="sans-serif">input pole dominates CE and CS stages</text><text x="120" y="290" font-family="sans-serif">CB and cascode ground Cf and escape</text></g></svg>`,
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: 'Miller pole estimate',
        problem: 'A CE stage has $|A_{v}| = 100$, $C_{\\mu} = 0.2$ pF, $C_{\\pi} = 10$ pF and $R_{sig}^{\\prime} = 1$ k$\\Omega$. Find Miller input capacitance, total input capacitance and the input pole frequency.',
        steps: [
          { label: 'Step 1: Multiply the bridge', text: 'Input Miller is $C_{M1} = 0.2 \\times 101 = 20.2$ pF; output Miller is $0.202$ pF and negligible.' },
          { label: 'Step 2: Total the input shunt', text: 'Total $C_{in} = C_{\\pi} + C_{M1} = 30.2$ pF loads the $1$ k$\\Omega$ source.' },
          { label: 'Step 3: Input pole', text: 'Pole $f_{Hi} = 1/(2\\pi \\times 1000 \\times 30.2 \\times 10^{-12}) = 5.27$ MHz.' },
        ],
        result: '$C_{M1} = 20.2$ pF; $C_{in} = 30.2$ pF; $f_{Hi} = 5.27$ MHz.',
      },
      {
        title: 'Transit frequency from device data',
        problem: 'A BJT at $100$ $\\mu$A has $g_{m} = 4$ mA per V, $C_{\\pi} = 2.8$ pF and $C_{\\mu} = 0.2$ pF. Compute $f_{T}$ and show how halving bias scales it, verified by script.',
        steps: [
          { label: 'Step 1: Sum the shunt', text: 'Total $C = 2.8 + 0.2 = 3.0$ pF at the input under short-circuit output.' },
          { label: 'Step 2: Apply the $f_{T}$ formula', text: 'Frequency $f_{T} = 0.004/(2\\pi \\times 3 \\times 10^{-12}) = 212$ MHz, near the $200$ MHz of Problem 10.85.' },
          { label: 'Step 3: Script the scaling', text: 'Bias sweep:```python\nimport math\ngm = 4e-3\nC = 3e-12\nfT = gm / (2.0 * math.pi * C)\nprint(fT)\nprint(fT / 2.0)\n```\nThe printout gives about $212$ MHz at full bias and $106$ MHz when $g_{m}$ halves with $C$ nearly fixed.' },
        ],
        result: '$f_{T} \\approx 212$ MHz; halving $g_{m}$ roughly halves $f_{T}$ at low current.',
      },
    ],
    keyTakeaways: [
      '$C_{M1} = C_{f}(1+|A_{v}|)$ dominates CE and CS input poles; $C_{M2}$ barely exceeds $C_{f}$.',
      '$f_{T} = g_{m}/(2\\pi(C_{\\pi}+C_{\\mu}))$ marks unity short-circuit current gain.',
      'CB, CG and cascodes escape Miller by grounding the feedback capacitor.',
      'Open-circuit $C_{i}R_{eqi}$ sums estimate $\\omega_{H}$ when one pole leads.',
    ],
    quiz: [
      {
        q: 'With $|A_{v}| = 100$ and $C_{\\mu} = 0.2$ pF, Miller input is:',
        options: ['$0.2$ pF', '$0.202$ pF', '$20.2$ pF', '$100$ pF exactly'],
        answer: 2,
        explanation: 'Step 1 — Given: bridge and gain magnitude. Step 2 — Rule: $C_{M1} = C_{f}(1+|A_{v}|)$. Step 3 — Compute: $0.2 \\times 101 = 20.2$ pF. Step 4 — Conclude: the base pole is set by Miller, not $C_{\\pi}$ alone.',
      },
      {
        q: '$f_{T}$ for $g_{m} = 4$ mA per V with $3$ pF total is about:',
        options: ['$212$ MHz', '$2.12$ MHz', '$21$ GHz', '$3$ MHz'],
        answer: 0,
        explanation: 'Step 1 — Given: transconductance and shunt sum. Step 2 — Rule: $f_{T} = g_{m}/(2\\pi C)$. Step 3 — Compute: $0.004/18.8$ pF gives $212$ MHz. Step 4 — Conclude: matches Problem 10.85 near $200$ MHz.',
      },
      {
        q: 'CB and CG stages stay wide because they:',
        options: ['Raise Miller gain further', 'Remove all capacitance', 'Double $C_{\\mu}$', 'Ground the feedback capacitor so no multiplication occurs'],
        answer: 3,
        explanation: 'Step 1 — Given: gate or base at alternating-current ground. Step 2 — Rule: bridge no longer spans input to output. Step 3 — Effect: $C_{gd}$ or $C_{\\mu}$ goes to ground unmultiplied. Step 4 — Conclude: poles approach $f_{T}$ per Section 10.4.',
      },
      // PYQ-pattern: Miller input and fT arithmetic (rephrased, values changed)
      {
        q: 'Total input $30.2$ pF with $1$ k$\\Omega$ source gives input pole about:',
        options: ['$52.7$ MHz', '$5.27$ MHz', '$527$ MHz', '$0.527$ MHz'],
        answer: 1,
        explanation: 'Step 1 — Given: $R$ and $C_{in}$. Step 2 — Rule: $f = 1/(2\\pi RC)$. Step 3 — Compute: $1/(2\\pi \\times 1000 \\times 30.2$ pF$) = 5.27$ MHz. Step 4 — Conclude: Miller sets the high-frequency ceiling.',
      },
    ],
  },
  // ------------------------------------------------------------------ 28.3
  {
    sectionId: 'elec-ch28-s3',
    readingTime: 8,
    intro: 'Section 1.6 first drew gain magnitude flat at midband with $-3$ dB corners $f_{L}$ and $f_{H}$, and Chapter 10 turns that sketch into asymptotic Bode rules. Each pole contributes $-20$ dB per decade and $-45$ degrees per decade around its break, while zeros do the mirror image. The gain-bandwidth product $GBW = |A_{M}|f_{H}$ then stays constant for single-pole compensated stages.',
    objectives: [
      'Draw asymptotic magnitude with $20$ dB per decade slopes and $f_{H}$ at the $-3$ dB point',
      'Add phase asymptotes at $45$ degrees per decade per pole or zero',
      'Use $GBW = |A_{M}|f_{H} = f_{t}$ to trade midband gain against bandwidth',
    ],
    concepts: [
      {
        term: 'Midband and 3-dB corners',
        kind: 'definition',
        statement: 'Midband gain **$A_{M}$ is flat** between $f_{L}$ and $f_{H}$ where magnitude falls $3$ dB, tagged `midband-3dB`. Figure 1.24 defines bandwidth $BW = f_{H} - f_{L} \\approx f_{H}$ for wideband stages.',
        detail: 'Below $f_{L}$ couplings differentiate; above $f_{H}$ device capacitances integrate. Hand design centers signals in the flat interval and pushes corners outward by capacitor choice.',
      },
      {
        term: 'Magnitude asymptotes',
        kind: 'method',
        statement: 'Start from **$20\\log|A_{M}|$ flat**, then break down $20$ dB per decade at each pole, tagged `bode-mag`. Problem 10.17 sketches $40$ dB midband breaking at $100$ kHz for its $R_{sig}$ and $C$ choice.',
        detail: 'Two coincident poles give $40$ dB per decade, three give $60$ dB per decade. Exact curves sit $3$ dB low at each single break and $6$ dB low at double breaks.',
      },
      {
        term: 'Phase asymptotes',
        kind: 'method',
        statement: 'Each pole slides phase **$-45$ degrees per decade** centered on its break, tagged `bode-phase`. Total phase at any frequency sums the $\\pm 90$ degree contributions of all poles and zeros.',
        detail: 'A single high pole moves from $0$ to $-90$ degrees across two decades. The book overlays phase on magnitude so gain and phase margins of Chapter 29 read off directly.',
      },
      {
        term: 'Gain-bandwidth constancy',
        kind: 'theorem',
        statement: 'Single-pole stages hold **$|A_{M}|f_{H} = f_{t}$** fixed, so doubling gain halves bandwidth, tagged `gbw-const`. A $40$ dB stage with $100$ kHz $f_{H}$ shows $10$ MHz $GBW$.',
        detail: 'Equation 10.68 proves the product equals $g_{m}/(2\\pi C_{L})$ for capacitive loads. Cascading two $GBW$-limited stages therefore needs $GBW$ margin above the closed-loop target.',
      },
      {
        term: 'Unity-gain frequency',
        kind: 'definition',
        statement: 'Extrapolated magnitude crosses unity at **$f_{t} = GBW$**, tagged `ft-gbw`. Datasheets quote $f_{t}$ because it survives feedback while $A_{M}$ and $f_{H}$ trade against each other.',
        detail: 'Problem 10.24 lowers $f_{t}$ from $2$ GHz to $1$ GHz by doubling load capacitance. Current mirrors and followers quote $f_{T}$ of the device, while stages quote $f_{t}$ of the loaded circuit.',
      },
    ],
    figures: [
      {
        caption: 'Bode magnitude after Figure 1.24: flat $|A_{M}|$ to $f_{H}$, then $-20$ dB per decade per pole, with $GBW = |A_{M}|f_{H}$ fixed.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bode magnitude with gain bandwidth product"><title>Bode magnitude and GBW</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Bode: flat midband then minus 20 dB per decade</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="90" y1="300" x2="650" y2="300"/><line x1="90" y1="300" x2="90" y2="80"/><line x1="90" y1="140" x2="360" y2="140"/><line x1="360" y1="140" x2="620" y2="260"/><circle cx="360" cy="140" r="6" fill="currentColor" stroke="none"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="150" y="126" font-family="sans-serif">flat AM at 40 dB</text><text x="360" y="126" font-family="sans-serif">fH 100 kHz minus 3 dB</text><text x="470" y="230" font-family="sans-serif">minus 20 dB per decade</text><text x="150" y="320" font-family="sans-serif">log frequency to ft equals GBW</text><text x="90" y="70" font-family="sans-serif">higher AM means lower fH at fixed GBW</text></g></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'GBW trade (Problem 10.17 style)',
        problem: 'A stage must show $40$ dB midband with $f_{H} = 100$ kHz for $R_{sig} = 1$ k$\\Omega$. Find linear gain, $GBW$, and the $f_{H}$ if gain is reprogrammed to $60$ dB at the same $GBW$.',
        steps: [
          { label: 'Step 1: Linear gain', text: 'Voltage gain $40$ dB is $100$ V per V from $20\\log|A_{M}|$.' },
          { label: 'Step 2: Product', text: 'Product $GBW = 100 \\times 100$ kHz $= 10$ MHz, the extrapolated $f_{t}$.' },
          { label: 'Step 3: Retrade', text: 'At $60$ dB ($1000$ V per V), bandwidth falls to $10$ MHz$/1000 = 10$ kHz.' },
        ],
        result: '$|A_{M}| = 100$ V per V; $GBW = 10$ MHz; $60$ dB forces $10$ kHz.',
      },
      {
        title: 'Capacitive-load GBW check',
        problem: 'A CS stage has $g_{m} = 5$ mA per V driving $C_{L} = 80$ pF. Compute $GBW = g_{m}/(2\\pi C_{L})$, then show doubling $C_{L}$ halves $f_{t}$ as in Problem 10.24.',
        steps: [
          { label: 'Step 1: Apply the capacitive formula', text: 'Product $GBW = 0.005/(2\\pi \\times 80 \\times 10^{-12}) = 9.95$ MHz.' },
          { label: 'Step 2: Double the load', text: 'With $160$ pF the quotient halves to $4.97$ MHz, matching the $2$ GHz to $1$ GHz halving pattern.' },
          { label: 'Step 3: Script both cases', text: 'Product sweep:```python\nimport math\ngm = 5e-3\nfor CL in [80e-12, 160e-12]:\n    print(gm / (2.0 * math.pi * CL))\n```\nThe printout gives about $9950000$ Hz and $4970000$ Hz.' },
        ],
        result: '$GBW = 9.95$ MHz; doubling $C_{L}$ halves $f_{t}$ to $4.97$ MHz.',
      },
    ],
    keyTakeaways: [
      'Flat $|A_{M}|$ between $f_{L}$ and $f_{H}$ defines midband; $\\pm 3$ dB marks the corners.',
      'Magnitude breaks $20$ dB per decade per pole; phase slides $45$ degrees per decade.',
      '$GBW = |A_{M}|f_{H} = f_{t}$ is fixed for single-pole stages.',
      '$40$ dB with $100$ kHz means $10$ MHz $GBW$; $60$ dB then allows $10$ kHz.',
    ],
    quiz: [
      {
        q: '$40$ dB corresponds to linear $|A_{M}|$:',
        options: ['$40$ V per V', '$400$ V per V', '$100$ V per V', '$4$ V per V'],
        answer: 2,
        explanation: 'Step 1 — Given: decibel gain $40$. Step 2 — Rule: $|A| = 10^{dB/20}$. Step 3 — Compute: $10^{2} = 100$. Step 4 — Conclude: $60$ dB would be $1000$ V per V.',
      },
      {
        q: 'Single-pole $100$ V per V with $f_{H} = 100$ kHz has $GBW$:',
        options: ['$10$ MHz', '$100$ kHz', '$1$ MHz', '$100$ Hz'],
        answer: 0,
        explanation: 'Step 1 — Given: midband gain and corner. Step 2 — Rule: $GBW = |A_{M}|f_{H}$. Step 3 — Compute: $100 \\times 100$ kHz $= 10$ MHz. Step 4 — Conclude: $f_{t}$ sits at $10$ MHz.',
      },
      // PYQ-pattern: GBW retrade at higher gain (rephrased, values changed)
      {
        q: 'Holding $10$ MHz $GBW$ while gain rises to $1000$ V per V gives $f_{H}$:',
        options: ['$100$ kHz', '$10$ MHz', '$1$ GHz', '$10$ kHz'],
        answer: 3,
        explanation: 'Step 1 — Given: fixed product $10$ MHz. Step 2 — Rule: $f_{H} = GBW/|A_{M}|$. Step 3 — Compute: $10/1000$ MHz $= 10$ kHz. Step 4 — Conclude: gain and bandwidth trade one for one.',
      },
      {
        q: 'Two coincident high poles give asymptotic slope:',
        options: ['$-20$ dB per decade', '$-40$ dB per decade', '$+20$ dB per decade', '$0$ dB per decade'],
        answer: 1,
        explanation: 'Step 1 — Given: two poles at one break. Step 2 — Rule: slopes add per pole. Step 3 — Sum: $20 + 20 = 40$ dB per decade down. Step 4 — Conclude: phase then slides $180$ degrees total.',
      },
    ],
  },
  // ------------------------------------------------------------------ 28.4
  {
    sectionId: 'elec-ch28-s4',
    readingTime: 8,
    intro: 'Wideband open-loop gain with multiple poles near $f_{H}$ oscillates once feedback of Chapter 29 closes the loop. Dominant-pole compensation inserts or enlarges one capacitance so a single low pole sets $f_{D}$ while higher poles sit far above $f_{t}$. Miller compensation with $C_{c}$ across the second stage splits the two poles apart without a huge shunt capacitor.',
    objectives: [
      'Place a dominant pole $f_{D}$ so $f_{t} = |A_{M}|f_{D}$ falls well below the next pole',
      'Write Miller pole splitting with $C_{c}$ giving $f_{D} = 1/(2\\pi R_{eq}g_{m2}R_{2}C_{c})$',
      'State the slew-versus-bandwidth price $SR = I/C_{c}$ of compensation',
    ],
    concepts: [
      {
        term: 'Dominant-pole idea',
        kind: 'definition',
        statement: 'One deliberately **low pole $f_{D}$** makes magnitude cross unity before other poles add phase, tagged `dom-pole`. The compensated $f_{t}$ is $|A_{M}|f_{D}$ with $20$ dB per decade all the way.',
        detail: 'Without compensation three poles near $10$ MHz give $270$ degrees of lag at $f_{t}$. With $f_{D} = 10$ Hz and $|A_{M}| = 10^{5}$ V per V, $f_{t}$ is $1$ MHz with $90$ degrees of margin to spare.',
      },
      {
        term: 'Miller compensation',
        kind: 'method',
        statement: 'Capacitor $C_{c}$ across the high-gain second stage is **Miller-multiplied** to $g_{m2}R_{2}C_{c}$ at the input, tagged `miller-comp`. Figure 10.42 shows $C_{c}$ splitting $f_{D}$ down and $f_{H2}$ up together.',
        detail: 'A $30$ pF $C_{c}$ looks like thousands of picofarads without a huge die capacitor. Pole splitting is why two-stage op amps compensate with tens of picofarads rather than nanofarads.',
      },
      {
        term: 'Slew-rate price',
        kind: 'insight',
        statement: 'The same $C_{c}$ must be charged by the stage bias, capping **slew rate at $SR = I/C_{c}$**, tagged `slew-price`. Faster large-signal edges demand larger tail current for the same $C_{c}$.',
        detail: 'With $I = 100$ $\\mu$A and $C_{c} = 30$ pF, $SR = 3.33$ V per $\\mu$s. Bandwidth and slew therefore trade through one capacitor choice.',
      },
      {
        term: 'STC cascade view',
        kind: 'definition',
        statement: 'Compensated stages behave as **single-time-constant** low-pass $A_{M}/(1 + jf/f_{D})$ to $f_{t}$, tagged `stc-comp`. Higher poles appear only as small extra lag near crossover.',
        detail: 'The book checks that the second pole sits above $2f_{t}$ for $60$ degrees of phase margin. Layout parasitics must honor that spacing or compensation fails.',
      },
      {
        term: 'Source-degeneration widening',
        kind: 'insight',
        statement: 'Unbypassed emitter or source resistance lowers **effective $g_{m}$** and pushes $f_{H}$ out at lower gain, tagged `degen-bw`. Problem 10.81 evaluates $GBW$ with $C_{gd} = 0.1$ pF and $R_{sig} = 500$ k$\\Omega$ in this light.',
        detail: 'Degeneration trades $A_{M}$ for linearity plus bandwidth, the same compromise as Chapter 26 bias design. It cannot fix multi-pole phase pileup alone, so $C_{c}$ remains necessary.',
      },
    ],
    figures: [
      {
        caption: 'Miller compensation after Figure 10.42: $C_{c}$ across gain $g_{m2}R_{2}$ creates a low $f_{D}$ and pushes the second pole up, with $SR = I/C_{c}$ as the price.',
        svg: `<svg viewBox="0 0 720 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dominant pole compensation with Miller capacitor"><title>Pole splitting by Cc</title><text x="24" y="30" font-family="sans-serif" font-size="17" font-weight="700" fill="currentColor">Compensation: Cc splits fD down, fH2 up</text><g stroke="currentColor" stroke-width="2" fill="none"><line x1="90" y1="250" x2="360" y2="250"/><line x1="360" y1="250" x2="620" y2="120"/><circle cx="360" cy="250" r="6" fill="currentColor" stroke="none"/><circle cx="480" cy="188" r="6" fill="currentColor" stroke="none"/><line x1="250" y1="120" x2="480" y2="120" stroke-dasharray="7 5"/><line x1="250" y1="120" x2="250" y2="200"/><line x1="480" y1="120" x2="480" y2="188"/></g><g font-family="sans-serif" font-size="12" fill="currentColor"><text x="120" y="236" font-family="sans-serif">flat AM</text><text x="360" y="270" font-family="sans-serif">new fD low</text><text x="500" y="150" font-family="sans-serif">pushed fH2 high</text><text x="250" y="105" font-family="sans-serif">uncompensated higher fD</text><text x="120" y="310" font-family="sans-serif">Cc times gain sets fD, SR equals I over Cc</text></g></svg>`,
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: 'Dominant-pole placement',
        problem: 'An op amp has $|A_{M}| = 10^{5}$ V per V ($100$ dB) and needs $f_{t} = 1$ MHz. Find required $f_{D}$ and the $C_{c}$ if $R_{eq} = 100$ k$\\Omega$, $g_{m2}R_{2} = 100$ V per V.',
        steps: [
          { label: 'Step 1: Dominant frequency', text: 'Pole $f_{D} = f_{t}/|A_{M}| = 10^{6}/10^{5} = 10$ Hz.' },
          { label: 'Step 2: Miller capacitance', text: 'With $f_{D} = 1/(2\\pi R_{eq}g_{m2}R_{2}C_{c})$, capacitor $C_{c} = 1/(2\\pi \\times 10^{5} \\times 100 \\times 10) = 15.9$ pF.' },
          { label: 'Step 3: Standard choice', text: 'Pick $C_{c} = 30$ pF for margin, giving $f_{D} = 5.3$ Hz and $f_{t} = 0.53$ MHz before resizing bias.' },
        ],
        result: '$f_{D} = 10$ Hz; $C_{c} \\approx 16$ pF, $30$ pF standard.',
      },
      {
        title: 'Slew-rate budget check',
        problem: 'With $C_{c} = 30$ pF and second-stage tail $I = 100$ $\\mu$A, find $SR = I/C_{c}$ and the full-power bandwidth for $5$ V peak sine, verified by script.',
        steps: [
          { label: 'Step 1: Slew rate', text: 'Rate $SR = 10^{-4}/(30 \\times 10^{-12}) = 3.33$ V per $\\mu$s.' },
          { label: 'Step 2: Full-power frequency', text: 'Sine limit $f_{max} = SR/(2\\pi V_{peak}) = 3.33 \\times 10^{6}/(2\\pi \\times 5) = 106$ kHz.' },
          { label: 'Step 3: Script both', text: 'Rate and bandwidth:```python\nI = 100e-6\nCC = 30e-12\nVpk = 5.0\nimport math\nSR = I / CC\nfmax = SR / (2.0 * math.pi * Vpk)\nprint(SR)\nprint(fmax)\n```\nThe printout gives $3333333$ V per s and $106103$ Hz.' },
        ],
        result: '$SR = 3.33$ V per $\\mu$s; full-power sine to $106$ kHz at $5$ V peak.',
      },
    ],
    keyTakeaways: [
      'Dominant $f_{D} = f_{t}/|A_{M}|$ forces single-pole $20$ dB per decade to crossover.',
      'Miller $C_{c}$ multiplies to $g_{m2}R_{2}C_{c}$ and splits $f_{D}$ down with $f_{H2}$ up.',
      '$SR = I/C_{c}$ caps large-signal speed for the same capacitor.',
      '$30$ pF with $100$ $\\mu$A gives $3.33$ V per $\\mu$s and $106$ kHz full power at $5$ V peak.',
    ],
    quiz: [
      {
        q: 'For $|A_{M}| = 10^{5}$ V per V and $f_{t} = 1$ MHz, $f_{D}$ is:',
        options: ['$10$ Hz', '$1$ MHz', '$100$ MHz', '$10$ kHz'],
        answer: 0,
        explanation: 'Step 1 — Given: gain and unity frequency. Step 2 — Rule: $f_{D} = f_{t}/|A_{M}|$. Step 3 — Compute: $10^{6}/10^{5} = 10$ Hz. Step 4 — Conclude: one hertz-scale pole stabilizes a megahertz crossover.',
      },
      // PYQ-pattern: Miller Cc and slew arithmetic (rephrased, values changed)
      {
        q: 'With $I = 100$ $\\mu$A and $C_{c} = 30$ pF, slew rate is:',
        options: ['$0.33$ V per $\\mu$s', '$33$ V per $\\mu$s', '$3.33$ V per $\\mu$s', '$333$ V per $\\mu$s'],
        answer: 2,
        explanation: 'Step 1 — Given: tail current and compensation capacitor. Step 2 — Rule: $SR = I/C_{c}$. Step 3 — Compute: $10^{-4}/30$ pF $= 3.33$ V per $\\mu$s. Step 4 — Conclude: larger $I$ or smaller $C_{c}$ speeds edges at stability cost.',
      },
      {
        q: 'Miller compensation with $C_{c}$ primarily:',
        options: ['Lowers both poles together', 'Removes $C_{c}$ at high frequency', 'Raises midband gain', 'Lowers $f_{D}$ and raises $f_{H2}$ by pole splitting'],
        answer: 3,
        explanation: 'Step 1 — Given: $C_{c}$ across the second gain stage. Step 2 — Rule: Miller multiplies at input and feeds forward at output. Step 3 — Split: input pole falls by $g_{m}R$ while output pole rises. Step 4 — Conclude: tens of picofarads stabilize the loop.',
      },
      {
        q: 'Source degeneration widens bandwidth by:',
        options: ['Raising effective $g_{m}$', 'Lowering effective $g_{m}$ at lower gain with better linearity', 'Shorting $C_{gd}$', 'Removing $R_{sig}$'],
        answer: 1,
        explanation: 'Step 1 — Given: unbypassed $R_{E}$ or $R_{S}$. Step 2 — Rule: feedback divides transconductance. Step 3 — Trade: gain falls while pole frequency rises. Step 4 — Conclude: useful with $C_{c}$, not a substitute for it.',
      },
    ],
  },
]
