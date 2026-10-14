import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// Hughes, Electrical & Electronic Technology, 12th Edition — Chapter 20
// (sections 20.21–20.28, print pp. 467–480) merged with the FET chapters of
// Horowitz & Hill, The Art of Electronics, 3rd Edition, mapped to Master
// Library chapter 14 (FETs). Worked-example numbers are the books’ own:
// Example 20.8 (FET stage gain 4.23), Examples 20.6–20.7 appear in ch 13;
// here Example 20.8 and the two-stage FET cascade of Example 20.11 (Av ≈ 630)
// are grounded in Hughes, while the MOSFET amplifier, CMOS and power-FET
// material follows the standard AoE ch. 3 treatment. Math is LaTeX, rendered
// by KaTeX via $...$ / $$...$$.
// ============================================================================

export const elecCh14Content: SectionContent[] = [
  // ------------------------------------------------------------------ 14.1
  {
    sectionId: 'elec-ch14-s1',
    readingTime: 8,
    intro: 'The bipolar transistor of Chapter 13 paid for its gain with a low input resistance and a current that must constantly be fed into the base. The field-effect transistor removes both costs at a stroke: its conducting channel is controlled by a voltage, and in the most important family that voltage acts on an insulated gate that draws no current at all. Hughes calls the two branches JUGFET and IGFET; the second is better known today as the MOSFET — the device that built the digital world.',
    objectives: [
      'Classify the FET family — JUGFET and IGFET, p- and n-channel, depletion and enhancement modes',
      'Describe the construction of the n-channel JUGFET and the roles of source, gate and drain',
      'Explain depletion-layer control of the channel and the pinch-off condition that limits the drain current to I_DSS',
      'Describe the IGFET/MOSFET structure and distinguish enhancement from depletion operation',
    ],
    concepts: [
      {
        term: 'FET family taxonomy',
        kind: 'definition',
        statement: 'Unlike bipolar junction transistors, which are all basically similar, the **field effect transistor (FET)** is a collective term for a family of devices with two principal groups: the **junction-type FET (JUGFET)** and the **insulated-type FET (IGFET)**. The JUGFET comes in p-channel and n-channel forms; the IGFET has two distinct modes of operation — **depletion** and **enhancement** — each subdividing into p-channel and n-channel.',
        detail: 'Like the BJT, all FETs are three-electrode devices: the **source**, **gate** and **drain**, which can be taken as corresponding to the emitter, base and collector respectively. Where the BJT controls a large current with a small current, every FET controls a current with a voltage — and in the IGFET that voltage is applied to a gate separated from the channel by an insulator, so the control electrode draws no current whatsoever.',
      },
      {
        term: 'JUGFET construction',
        kind: 'definition',
        statement: 'The more common variety of JUGFET is the n-channel type: a piece of **n-type silicon effectively within a tube of p-type silicon** — the shroud — the interface being the same intimate junction as in the bipolar transistor. Non-rectifying contacts connect to each end of the n-type piece (the **source S** and **drain D**) and to the p-type tube (the **gate G**).',
        detail: 'The gate–channel junction is a genuine p–n junction, deliberately reverse biased in normal operation. The p-channel JUGFET is the exact converse, with all polarities and current directions reversed. The contrast to remember against Chapter 13: the BJT’s controlling junction is forward biased and draws current; the JUGFET’s is reverse biased and blocks it.',
      },
      {
        term: 'The channel as a resistor',
        kind: 'insight',
        statement: 'With the gate disconnected and a d.c. supply making the **drain positive with respect to the source**, a conventional current flows from drain to source: electrons — the majority carriers in the n-channel — move from source to drain. Because it is semiconductor material, the voltage/current relationship is almost linear and the n-channel more or less behaves as a **resistor**.',
        detail: 'This ohmic region of the output characteristic is the FET’s signature difference from the BJT: with the control electrode open, the device is simply a piece of doped silicon. It is also what makes a fully enhanced FET such a good closed switch (Section 14.4) — the “on” channel really is a small resistance, not a saturated junction with an offset voltage.',
      },
      {
        term: 'Depletion-mode control',
        kind: 'definition',
        statement: 'With the gate connected to the source while drain current flows, the channel voltage becomes greater towards the drain, so the reverse bias on the gate–channel p–n junction is **greater nearer the drain** than the source. This produces a **depletion layer** — which acts as an insulator — thicker at the drain end, reducing the effective cross-section of the channel and restricting the flow of electrons: the FET is said to operate in the **depletion mode**.',
        detail: 'The depletion region is the same space-charge layer of Chapter 12, here used as a voltage-controlled squeeze on the channel. Because the layer grows where the channel voltage is highest, its wedge shape is deepest at the drain end — the physical reason the curves of the output characteristic bunch and flatten there.',
      },
      {
        term: 'Pinch-off and I_DSS',
        kind: 'definition',
        statement: 'If the drain–source voltage is increased, the depletion layer grows until it **completely absorbs the n-channel**; the drain–source current $I_D$ then reaches a limiting value called the **saturation current $I_{DSS}$**, and the point at which this occurs is the **pinch-off point**.',
        detail: 'Beyond pinch-off the current hardly changes with further drain voltage, so the device behaves as a current source commanded by the gate — the flat region in which FET amplifiers operate. Applying a separate bias voltage to the gate sets up an even depletion layer in the channel: pinch-off then occurs at a lower drain voltage and the currents, including the saturation current, are all smaller.',
      },
      {
        term: 'The gate has the stronger grip',
        kind: 'insight',
        statement: 'The combined effect of drain–source voltage and gate bias is that **the more negative the gate voltage, the smaller the saturation current**; the gate voltage could stop the flow of drain current altogether if made sufficiently negative. Most importantly, the gate voltage has a **more significant effect on the drain current than the drain voltage** — the essence of voltage control.',
        detail: 'The resulting output characteristics of an n-channel JUGFET — a family for $V_{GS} = 0$, −1 V, −2 V, flat beyond pinch-off and tightly stacked in gate-voltage steps — compare in form with the common-emitter family of Fig. 20.23, and amplifier action is obtained in the same way as in Fig. 20.29. The gate–source junctions present very high resistance (megohms) since they consist of reverse-biased junctions; gate currents are very small, though they vary with temperature as minority-carrier numbers grow.',
      },
      {
        term: 'The insulated gate (IGFET structure)',
        kind: 'definition',
        statement: 'As its name indicates, the IGFET has its **gate insulated from the channel**: the bulk of the device is a low-conductivity silicon **substrate** (p-type for an n-channel device) into which a thin n-channel is introduced, terminated in the drain and source electrodes. The gate is separated from the channel by a **layer of silicon dioxide** — an insulator isolating the gate from both source and drain.',
        detail: 'The silicon dioxide can be thought of as the dielectric in a capacitor whose two plates are the gate metallization and the channel. This gate–oxide capacitor is the seat of all MOSFET action: charge the gate positively and it induces negative charge — extra electrons — in the channel beneath it. There is no p–n junction between channel and gate as in the JUGFET; instead the pinch-off effect stems from the p–n junction between channel and substrate, and the substrate is often connected to the source, which conveniently completes the gate–source bias loop.',
      },
      {
        term: 'Enhancement and depletion modes',
        kind: 'definition',
        statement: 'If the **gate is made positive** with respect to the source and hence the channel, the drain–source current is increased — the FET is said to be **enhanced**. If the gate is made negative, the current is decreased — the FET is **depleted**. In the **enhancement-mode IGFET** the channel is omitted altogether: conduction can only take place when the gate is positive with respect to the substrate, inducing a conduction channel — so the device is normally OFF.',
        detail: 'The cause of the variation lies in the capacitive effect between gate and channel: a positively charged gate leaves the channel negatively charged, an increase in charge carriers; reverse the bias and there is a depletion of carriers. The enhancement-mode device — conducting only when actively induced — is the form in which the MOSFET conquered digital electronics, because with zero gate voltage it is simply off (Section 14.3).',
      },
      {
        term: 'MOSFET fragility and handling',
        kind: 'insight',
        statement: 'The IGFET is sometimes termed a **MOSFET** (metal, oxide, silicon — or MOST for short). IGFETs can easily be **destroyed by the build-up of charge across the dielectric** separating gate and substrate; to avoid this, protective links are often fitted at manufacture and removed only when the devices are installed.',
        detail: 'The gate oxide is so thin that ordinary static electricity — thousands of volts, however tiny in charge — punctures it. Production parts accordingly ship with gate leads shorted together (or with internal protection diodes clamping the gate), and assembly lines take earthed precautions. The vulnerability is the price of the insulated gate’s enormous input resistance — typically $10^{12}\\,\\Omega$ or more.',
      },
    ],
    examples: [
      {
        title: 'Tracing an n-channel JUGFET to pinch-off',
        problem: 'Describe, step by step, how the drain characteristic of an n-channel JUGFET arises from the gate–channel junction, following Hughes §20.22 (Figs 20.50–20.53).',
        steps: [
          { label: 'Step 1: Gate open — the ohmic region', text: 'With the gate disconnected and the drain positive with respect to the source, electrons flow source-to-drain and the channel behaves as a simple resistor: current rises almost linearly with drain–source voltage.' },
          { label: 'Step 2: Gate tied to source — the depletion wedge', text: 'Connecting the gate to the source reverse biases the gate–channel junction, most strongly at the drain end where the channel voltage is highest. The depletion layer — an insulator — wedges into the channel, reducing its cross-section and flattening the current rise.' },
          { label: 'Step 3: Raise the drain voltage — pinch-off', text: 'As the drain–source voltage increases further, the depletion layer eventually completely absorbs the channel; the drain current reaches its limiting saturation value $I_{DSS}$ and stays nearly constant — the pinch-off point.' },
          { label: 'Step 4: Add gate bias — level control', text: 'A fixed negative gate–source voltage sets up an even depletion layer, so pinch-off occurs at a lower drain voltage and with smaller currents throughout; sufficiently negative, the gate stops the drain current altogether. Each gate voltage thus buys its own flat curve in the family of Fig. 20.54 ($V_{GS} = 0$, −1 V, −2 V).' },
        ],
        result: 'The drain characteristic starts ohmic (channel as resistor), bends over at pinch-off where the depletion layer absorbs the channel, and saturates at $I_{DSS}$ — a level the gate voltage, not the drain voltage, controls.',
      },
      {
        title: 'Choosing the gate polarity for each FET family',
        problem: 'From the transfer characteristics of Figs 20.62–20.63, state the gate voltage required for OFF and for ON in each of the three n-channel switch families.',
        steps: [
          { label: 'Step 1: n-channel JUGFET', text: 'The gate voltage must be sufficiently **negative** to ensure that no drain current flows in the OFF condition; any suitable voltage between that value and zero switches the device ON. The BJT’s analogue — forward versus reverse bias of the base–emitter junction — sits on the same axes for comparison.' },
          { label: 'Step 2: n-channel IGFET, depletion mode', text: 'Same shape of rule: the gate must be sufficiently negative for OFF, and is made positive to switch ON — but note the device also conducts at zero gate voltage (its built-in channel gives a finite $I_{DSS}$).' },
          { label: 'Step 3: n-channel IGFET, enhancement mode', text: 'OFF is the normal condition: with no gate signal the channel simply does not exist, so no negative voltage is ever needed to guarantee OFF. A positive gate voltage induces the channel and switches the device ON.' },
          { label: 'Step 4: Interpret for circuit design', text: 'The enhancement-mode device is the natural digital switch: output of one gate (near zero or near $V_{DD}$) directly drives the input of the next, with no level shifting — the property that Section 14.3 exploits in the CMOS inverter.' },
        ],
        result: 'JUGFET: negative for OFF, zero-ish for ON. Depletion IGFET: negative for OFF, positive for ON (conducts at zero). Enhancement IGFET: zero is OFF, positive is ON — the digital-friendly one.',
      },
    ],
    keyTakeaways: [
      'The FET family splits into junction devices (JUGFET, p- or n-channel) and insulated-gate devices (IGFET/MOSFET, each in depletion and enhancement forms, p- or n-channel).',
      'Electrodes: source, gate, drain — the FET’s answer to emitter, base, collector.',
      'With the gate open the channel is simply a resistor; reverse-biasing the gate junction wedges a depletion layer into it, pinching the channel off at $I_{DSS}$.',
      'The gate voltage controls the drain current more significantly than the drain voltage does — voltage control, with megohms of input resistance in the JUGFET and effectively infinite in the IGFET.',
      'The IGFET gate sits on a silicon-dioxide insulator — a capacitor plate over the channel: positive gate enhances conduction, negative gate depletes it.',
      'The enhancement-mode IGFET has no built-in channel: it conducts only when a positive gate induces one, making it a normally-OFF device.',
      'The MOSFET’s thin gate oxide is easily punctured by static — protective links are fitted at manufacture and removed on installation.',
    ],
    quiz: [
      {
        q: 'The three electrodes of a FET — source, gate and drain — correspond to which BJT terminals?',
        options: ['Collector, base, emitter', 'Emitter, base, collector', 'Emitter, collector, base', 'Base, emitter, collector'],
        answer: 1,
        explanation: 'The source emits the majority carriers into the channel (like the emitter), the drain collects them (like the collector), and the gate controls the flow (like the base) — but by voltage, not current.',
      },
      {
        q: 'In an n-channel JUGFET with the gate connected to the source, the depletion layer is thickest:',
        options: ['Near the source', 'Near the drain, where the channel voltage — and hence the reverse bias — is highest', 'Uniformly along the channel', 'Only when the drain voltage is zero'],
        answer: 1,
        explanation: 'Electrons flowing from source to drain raise the channel potential towards the drain, so the gate–channel junction is most reverse biased there and the depletion wedge is deepest at the drain end — the geometry that produces pinch-off.',
      },
      {
        q: 'The symbol $I_{DSS}$ denotes:',
        options: ['The drain current at zero gate–source voltage, i.e. the saturation (pinch-off) current', 'The drain–source breakdown current', 'The gate leakage current', 'The drain current when the gate is most negative'],
        answer: 0,
        explanation: '$I_{DSS}$ is the limiting saturation drain current reached at pinch-off — the current with the gate tied to the source. Gate bias reduces the saturation current below this value, and a sufficiently negative gate stops it entirely.',
      },
      {
        q: 'In an n-channel IGFET, making the gate positive with respect to the source:',
        options: ['Reverse biases the gate–channel junction and decreases the current', 'Induces extra charge carriers in the channel and increases the current — enhancement', 'Has no effect until the substrate is disconnected', 'Punctures the gate oxide immediately'],
        answer: 1,
        explanation: 'The gate–oxide–channel system is a capacitor: a positive gate induces negative charge — additional electrons — in the channel, enhancing conduction. A negative gate depletes it. The oxide only punctures when the field is far beyond normal operation (static discharge).',
      },
      {
        q: 'Why is the enhancement-mode IGFET the natural choice for digital switching?',
        options: ['It conducts maximally at zero gate voltage', 'It is normally OFF — with no gate signal there is no channel, so no level-shifting is needed between logic stages', 'It requires a negative supply as well as a positive one', 'Its gate draws a large current when ON'],
        answer: 1,
        explanation: 'With the channel omitted in manufacture, zero gate voltage guarantees OFF; a positive gate induces a channel and turns it ON. Logic levels therefore drive gates directly — the arrangement the CMOS inverter of Section 14.3 perfects.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.2
  {
    sectionId: 'elec-ch14-s2',
    readingTime: 9,
    intro: 'Measured properly, a FET is described by three numbers — drain resistance, mutual conductance and their product — and, on the transfer side, by one elegant parabola: Shockley’s equation. Hughes assembles the small-signal equivalent circuit (input simply open, so no input loading at all), derives the common-source gain, and then shows the device doing the job the BJT found hardest of all: switching analog signals with no offset and no drive current.',
    objectives: [
      'Define drain resistance, mutual conductance and the amplification factor of a FET',
      'Apply the Shockley equation to compute drain current and transconductance of a JFET',
      'Draw the Y-parameter equivalent circuit and derive the common-source voltage gain',
      'Explain why the FET outperforms the BJT as an analog switch',
    ],
    concepts: [
      {
        term: 'Drain resistance',
        kind: 'law',
        statement: 'The ratio of the change $\\Delta V_{DS}$ in drain–source voltage to the change $\\Delta I_D$ in drain current, for a given gate–source voltage, is the **drain resistance**: $$r_d = \\frac{\\Delta V_{DS}}{\\Delta I_D} \\quad \\text{for a given } V_{GS}.$$ Its value is large in most FETs — of the order of $10$–$500\\,\\text{k}\\Omega$.',
        detail: 'This is the slope resistance of the flat pinch-off region of the output characteristic: the flatter the curves, the better the FET approximates an ideal current source. In the equivalent circuit $r_d$ appears across the output, exactly as $1/h_{oe}$ did for the BJT in Section 13.4.',
      },
      {
        term: 'Mutual conductance (transconductance)',
        kind: 'law',
        statement: 'The ratio of the change $\\Delta I_D$ in drain current to the change $\\Delta V_{GS}$ in gate–source voltage, for a given drain–source voltage, is the **mutual conductance**: $$g_m = \\frac{\\Delta I_D}{\\Delta V_{GS}} \\quad \\text{for a given } V_{DS}.$$ It is usually measured in milliamperes per volt.',
        detail: 'The transconductance is the FET’s gain currency — the same quantity the Ebers–Moll view gave for the BJT ($g_m = I_C/V_T$, Section 13.5), but set by geometry and bias rather than by the thermal voltage. FET values of 1–10 mA/V are routine, against the BJT’s 40 mS at 1 mA: the FET trades gain for input impedance.',
      },
      {
        term: 'Amplification factor',
        kind: 'law',
        statement: 'The product of drain resistance and mutual conductance gives the **amplification factor**: $$\\mu = r_d g_m.$$ It is dimensionless — the maximum voltage gain available before output loading is considered.',
        detail: 'Hughes relation [20.40]. The same triple ($r_d$, $g_m$, $\\mu$) was used for thermionic valves, and the identity $\\mu = r_d g_m$ is why a FET stage loaded by $r_d$ itself would achieve exactly $\\mu$ of gain.',
      },
      {
        term: 'Shockley’s transfer equation',
        kind: 'law',
        statement: 'The transfer characteristic of a JFET is parabolic: $$I_D = I_{DSS}\\left(1 - \\frac{V_{GS}}{V_p}\\right)^2,$$ where $I_{DSS}$ is the saturation current at $V_{GS} = 0$ and $V_p$ the pinch-off (cut-off) gate voltage at which the channel closes.',
        detail: 'The curve passes through $I_{DSS}$ at zero gate bias and reaches zero at $V_{GS} = V_p$; halfway in voltage gives a quarter of the current (the square). Differentiating gives the transconductance at any bias: $g_m = -2 I_{DSS}(1 - V_{GS}/V_p)/V_p$, which is maximal at $V_{GS} = 0$ with $g_{m0} = 2I_{DSS}/|V_p|$. The square law also makes the FET a natural mixer and multiplier — the property that made it beloved of receiver designers.',
      },
      {
        term: 'Y-parameter equivalent circuit',
        kind: 'definition',
        statement: 'The FET small-signal equivalent circuit is like the junction transistor’s **except that the input resistance is so high that it can be considered infinite** — equivalent to an open circuit. The parameters are **Y-parameters**: $Y_{fs}$, the forward transconductance (s = common-source mode), and $Y_{os}$, the output conductance.',
        detail: 'Both are ratios of a current to a voltage — amperes per volt, i.e. siemens: $Y_{fs}$ is the small-signal $I_D/V_{GS}$ (it is simply $g_m$ in admittance clothing) and $Y_{os}$ the output admittance ($1/r_d$). The equivalent circuit is drawn with the gate branch open, a current generator $Y_{fs}V_{GS}$ from source to drain, and $Y_{os}$ across the output.',
      },
      {
        term: 'Common-source voltage gain',
        kind: 'law',
        statement: 'From the equivalent circuit with load $R_L$: $I = I_D + V_o Y_{os}$, $I_D = V_{GS}Y_{fs}/(1 + R_L Y_{os})$ and $V_o = I_D R_L$, giving Hughes relation [20.41]: $$A_v = \\frac{Y_{fs}R_L}{1 + R_LY_{os}}.$$ When $R_LY_{os} \\ll 1$ this reduces to $A_v \\approx g_m R_L$.',
        detail: 'The output current generator drives $R_L$ in parallel with the model’s own output admittance — the same current-divider that trimmed the BJT stage by $1 + h_{oe}R_p$ in Section 13.4, but with admittances instead of resistances. Unlike the common-emitter stage, the common-source stage driven from the gate takes **no input current**, so the source e.m.f. arrives at the gate undiminished.',
      },
      {
        term: 'The FET as an analog switch',
        kind: 'insight',
        statement: 'The bipolar switch is imperfect because there is a **significant input current** when the base–emitter junction is forward biased, and it exhibits a collector–emitter **offset voltage** when on. The FET is better on every count: the insulated gate ensures **no gate current whether ON or OFF**; in the OFF condition effectively **no current flows between drain and source** (an open circuit); when ON, the resistance introduced by the FET is **negligible**.',
        detail: 'A JUGFET switch needs the gate sufficiently negative to guarantee OFF, any voltage between that and zero giving ON; a depletion-mode IGFET behaves the same way but also conducts at zero bias, while the enhancement-mode device is OFF by default and needs only a positive gate to conduct. This near-ideal behavior — bidirectional current, no offset, voltage drive — makes the FET the standard analog gate for chopping, sampling and multiplexing signals.',
      },
      {
        term: 'Transfer characteristics compared',
        kind: 'insight',
        statement: 'Plotted side by side (Hughes Fig. 20.62–20.63), the BJT’s collector current switches as the base–emitter junction moves from reverse to forward bias, the n-channel JUGFET’s drain current switches as the gate goes negative, and the enhancement IGFET switches from its natural OFF state as the gate goes positive.',
        detail: 'The BJT needs a current through its forward-biased junction to stay on; every FET needs only a voltage on a reverse-biased or insulated gate. That single difference — current-controlled versus voltage-controlled switching — is why digital electronics standardized on MOS technology rather than on the bipolar logic families that preceded it.',
      },
    ],
    examples: [
      {
        title: 'Example 20.8 — FET stage voltage gain',
        problem: 'A transistor amplifier stage comprises a FET with $Y_{fs} = 2.2\\,\\text{mA/V}$ and $Y_{os} = 20\\,\\mu\\text{S}$, with bias components and coupling capacitors of negligible effect. The total load on the output is $2\\,\\text{k}\\Omega$. Determine the voltage gain.',
        steps: [
          { label: 'Step 1: State the gain relation', text: 'From the Y-parameter equivalent circuit, $A_v = Y_{fs}R_L/(1 + R_LY_{os})$ — the transconductance times the load, discounted by the model’s own output admittance.' },
          { label: 'Step 2: Substitute the numbers', text: '$A_v = (2.2\\times 10^{-3} \\times 2\\times 10^{3})/(1 + (2\\times 10^{3})(20\\times 10^{-6})) = 4.4/(1 + 0.04)$.' },
          { label: 'Step 3: Evaluate', text: '$A_v = 4.4/1.04 = 4.23$.' },
          { label: 'Step 4: Interpret', text: 'The unloaded product $g_mR_L = 4.4$ is trimmed only 4 per cent by the FET’s own output admittance — the load is far below $1/Y_{os} = 50\\,\\text{k}\\Omega$, so almost all the generated current reaches the load. Note too that the gate drew no current at all from the source.' },
        ],
        result: '$A_v = 4.23$ — modest next to the BJT stage of Example 20.4 ($-231.5$), the familiar FET trade of gain for an input that loads nothing.',
      },
      {
        title: 'Shockley’s equation at work',
        problem: 'A typical n-channel JFET has $I_{DSS} = 10\\,\\text{mA}$ and pinch-off voltage $V_p = -4\\,\\text{V}$ (typical datasheet values). Compute the drain current and transconductance at $V_{GS} = -1\\,\\text{V}$, and at $V_{GS} = -3\\,\\text{V}$.',
        steps: [
          { label: 'Step 1: Write the transfer law', text: '$I_D = I_{DSS}(1 - V_{GS}/V_p)^2$ — the parabola anchored at $I_{DSS}$ for $V_{GS} = 0$ and at zero current for $V_{GS} = V_p = -4\\,\\text{V}$.' },
          { label: 'Step 2: Current at −1 V', text: 'The normalized bias is $1 - (-1)/(-4) = 0.75$, so $I_D = 10\\times 0.75^2 = 5.6\\,\\text{mA}$ — a quarter of the way in voltage, over half the current.' },
          { label: 'Step 3: Current at −3 V', text: 'The normalized bias is $1 - 0.75 = 0.25$, so $I_D = 10\\times 0.25^2 = 0.625\\,\\text{mA}$ — deep cut-off approach: three quarters of the gate range removes 94 per cent of the current.' },
          { label: 'Step 4: Transconductance', text: 'Differentiating the parabola, $g_m = 2I_{DSS}(1 - V_{GS}/V_p)/|V_p|$: at $V_{GS} = -1\\,\\text{V}$, $g_m = 2\\times 10\\times 0.75/4 = 3.75\\,\\text{mA/V}$, falling to $1.25\\,\\text{mA/V}$ at $-3\\,\\text{V}$.' },
          { label: 'Step 5: Interpret for biasing', text: 'The transconductance — and with it the stage gain — falls linearly along the transfer curve, halving as the bias moves halfway to pinch-off. Biasing near $I_{DSS}$ buys gain; biasing near pinch-off buys current economy.' },
        ],
        result: 'At $V_{GS} = -1\\,\\text{V}$: $I_D = 5.6\\,\\text{mA}$, $g_m = 3.75\\,\\text{mA/V}$; at $V_{GS} = -3\\,\\text{V}$: $I_D = 0.625\\,\\text{mA}$, $g_m = 1.25\\,\\text{mA/V}$.',
      },
    ],
    keyTakeaways: [
      'The three FET figures of merit: $r_d = \\Delta V_{DS}/\\Delta I_D$ (typically $10$–$500\\,\\text{k}\\Omega$), $g_m = \\Delta I_D/\\Delta V_{GS}$ (mA/V), and $\\mu = r_d g_m$.',
      'Shockley’s law $I_D = I_{DSS}(1 - V_{GS}/V_p)^2$ — the parabolic transfer curve; differentiating gives $g_m$ at any bias.',
      'The Y-parameter model: input open (no gate current), generator $Y_{fs}V_{GS}$, output admittance $Y_{os}$; gain $A_v = Y_{fs}R_L/(1 + R_LY_{os})$.',
      'Example 20.8: $Y_{fs} = 2.2\\,\\text{mA/V}$, $Y_{os} = 20\\,\\mu\\text{S}$, $R_L = 2\\,\\text{k}\\Omega$ gives $A_v = 4.23$ — only 4 per cent below $g_mR_L$.',
      'As a switch the FET beats the BJT: no gate current ON or OFF, no drain–source current when OFF, negligible resistance when ON — no offset voltage.',
      'Enhancement-mode IGFETs are OFF by default (no channel); depletion-mode devices and JUGFETs conduct at zero gate bias and need negative gate voltage for OFF.',
    ],
    quiz: [
      {
        q: 'The mutual conductance of a FET is defined as:',
        options: [`$\\Delta V_{DS}/\\Delta I_D$ at constant $V_{GS}$`, `$\\Delta I_D/\\Delta V_{GS}$ at constant $V_{DS}$`, `$\\Delta I_G/\\Delta V_{GS}$ at constant $V_{DS}$`, 'The product $r_d g_m$'],
        answer: 1,
        explanation: 'Mutual conductance (transconductance) is the change in drain current per change in gate–source voltage at fixed drain–source voltage, in mA/V. $\\Delta V_{DS}/\\Delta I_D$ is the drain resistance and $r_d g_m$ is the amplification factor.',
      },
      {
        q: 'A JFET has $I_{DSS} = 10\\,\\text{mA}$ and $V_p = -4\\,\\text{V}$. At $V_{GS} = -2\\,\\text{V}$ the drain current is:',
        options: [`$10\\,\\text{mA}$`, `$5.6\\,\\text{mA}$`, `$2.5\\,\\text{mA}$`, `$0\\,\\text{mA}$`],
        answer: 2,
        explanation: 'Shockley: $I_D = 10(1 - (-2)/(-4))^2 = 10 \\times (0.5)^2 = 2.5\\,\\text{mA}$ — halfway in gate voltage gives a quarter of the current, the signature of the square law.',
      },
      {
        q: 'A FET stage has $Y_{fs} = 2.2\\,\\text{mA/V}$, $Y_{os} = 20\\,\\mu\\text{S}$ and $R_L = 2\\,\\text{k}\\Omega$. The voltage gain is closest to:',
        options: ['$4.4$ — the output admittance is irrelevant', `$4.23$`, `$44$`, `$2.2$`],
        answer: 1,
        explanation: '$A_v = Y_{fs}R_L/(1 + R_LY_{os}) = 4.4/(1 + 0.04) = 4.23$. The FET’s own output admittance shaves only 4 per cent off the ideal $g_mR_L = 4.4$ here (Example 20.8).',
      },
      {
        q: 'Compared with the bipolar transistor switch, the FET switch:',
        options: ['Requires a steady gate current to stay ON', 'Exhibits a large drain–source offset voltage when ON', 'Draws no gate current in either state and offers negligible ON resistance with no OFF current', 'Cannot switch analog signals, only digital ones'],
        answer: 2,
        explanation: 'The insulated gate ensures no gate current whether ON or OFF; OFF, effectively no current flows drain–source (open circuit); ON, the channel resistance is negligible. This is what makes the FET the standard analog gate — no offset, no drive current.',
      },
      {
        q: 'In the Y-parameter equivalent circuit of a FET, the input branch is drawn as:',
        options: ['A resistance of about $1\\,\\text{k}\\Omega$, like $h_{ie}$ of the BJT', 'A short circuit — the gate voltage appears directly across the generator', 'An open circuit — the input resistance is considered infinite', 'A capacitor equal to the gate–channel capacitance'],
        answer: 2,
        explanation: 'The FET’s input resistance is so high it can be considered infinite: no input current, so no input loading. Contrast $h_{ie} \\approx 1\\,\\text{k}\\Omega$ for the BJT (Section 13.4) — the very limitation that pushed electronics toward the FET.',
      },
      // PYQ-pattern: GATE 2020 — Shockley drain current (rephrased, values changed)
      {
        q: 'An n-channel JFET has $I_{DSS} = 10$ mA and pinch-off voltage $-4.0$ V. With $V_{GS} = -1.0$ V in saturation, the drain current is closest to:',
        options: ['2.5 mA', '5.6 mA', '7.5 mA', '10 mA'],
        answer: 1,
        explanation: 'Step 1 — Given: $I_{DSS} = 10$ mA, $V_{P} = -4.0$ V, $V_{GS} = -1.0$ V, saturation assumed. Step 2 — Governing parabola: $I_{D} = I_{DSS}(1 - \\frac{V_{GS}}{V_{P}})^{2}$. Step 3 — Algebra: $\\frac{V_{GS}}{V_{P}} = \\frac{-1.0}{-4.0} = 0.25$; $I_{D} = 10 \\times (0.75)^{2} = 10 \\times 0.5625 = 5.625$ mA. Step 4 — Sanity check: current lies below $I_{DSS}$ as negative bias demands, reaches $I_{DSS}$ at zero bias, and pinches toward zero at $-4$ V. Step 5 — Distractor analysis: 7.5 mA drops the square, 2.5 mA squares the ratio instead of its complement, and 10 mA ignores bias. Step 6 — Conclude: about 5.6 mA flows.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.3
  {
    sectionId: 'elec-ch14-s3',
    readingTime: 8,
    intro: 'The enhancement MOSFET of Section 14.1 becomes a practical amplifier once its gate is biased a couple of volts above its threshold, and the design pattern is the one Hughes already taught for the BJT: set the operating point, then read the gain from the transconductance and the load. The real triumph of this device, though, is what happens when two complementary MOSFETs — one n-channel, one p-channel — are wired as one inverter: the CMOS pair that dissipated no static power and went on to build essentially all of digital electronics.',
    objectives: [
      'Bias a common-source MOSFET stage with a gate divider and source resistor',
      'Compute common-source gain with and without a bypassed source resistor',
      'Explain the complementary symmetry of the CMOS inverter and its linear-region use as an amplifier',
      'Justify CMOS’s dominance of digital electronics using its static and dynamic power terms',
    ],
    concepts: [
      {
        term: 'Common-source biasing',
        kind: 'method',
        statement: 'A common-source MOSFET stage is biased by a **resistive divider $R_1$–$R_2$** setting the gate voltage, a **source resistor $R_S$** fixing the drain current as $I_D = (V_G - V_{GS})/R_S$, and a **drain resistor $R_D$** completing the d.c. load line from $V_{DD}$.',
        detail: 'Because the gate draws no d.c. current, the divider sets $V_G$ exactly — the divider can use large resistors without error, keeping the input impedance high. The drain resistor is chosen to drop the drain to roughly mid-supply for maximum symmetric swing, exactly the halfway-up-the-load-line rule of Section 13.3. The MOSFET’s $V_{GS}$ (a couple of volts above threshold at the wanted current) is not precisely known device-to-device, which is what the source resistor is for.',
      },
      {
        term: 'Source degeneration',
        kind: 'insight',
        statement: 'The source resistor stabilizes the drain current against device spread and temperature exactly as the emitter resistor stabilized the BJT bias of Section 13.5: if $I_D$ rises, the source voltage rises, the gate–source voltage falls, and the current is pulled back down.',
        detail: 'The Art of Electronics treats this self-correcting bias as the standard recipe for both BJTs and FETs. Where the BJT version fights leakage current and $V_{BE}$ drift, the FET version mostly fights manufacturing spread of $V_{GS}$ — the resistor converts an uncertain voltage into a well-defined current, at the price of some gain when it is left unbypassed.',
      },
      {
        term: 'Common-source gain',
        kind: 'law',
        statement: 'With the source resistor bypassed by a capacitor at signal frequencies, the common-source voltage gain is $$A_v = -g_m R_D,$$ and with $R_S$ unbypassed it becomes $$A_v = -\\frac{g_m R_D}{1 + g_m R_S}.$$',
        detail: 'The minus sign is the same $180\\degree$ output inversion as the common-emitter stage of Section 13.4. The unbypassed form is the FET’s emitter-degeneration counterpart: the input voltage must first overcome the replica it induces across $R_S$, cutting the effective transconductance to $g_m/(1 + g_mR_S)$. In the limit $g_mR_S \\gg 1$ the gain approaches $-R_D/R_S$ — a gain set by resistor ratio alone, independent of the device.',
      },
      {
        term: 'Why FET stages have modest gain',
        kind: 'insight',
        statement: 'A small-signal MOSFET running at a milliamp or two offers $g_m$ of only about 1–10 mA/V, against the BJT’s $40\\,\\text{mS}$ at $1\\,\\text{mA}$ from the Ebers–Moll relation $g_m = I_C/V_T$. A common-source stage therefore delivers single-figure voltage gains where the common-emitter stage delivered hundreds.',
        detail: 'The FET repays the shortfall with the two things the BJT cannot offer: an input that draws no current at all (Section 13.4’s $1\\,\\text{k}\\Omega$ limitation disappears) and a near-ideal switch. In practice designers use the FET where impedance or switching matters, and reach for the BJT — or the op-amps of Chapter 15, whose input stages are often FETs — where raw gain per milliamp matters.',
      },
      {
        term: 'The CMOS inverter',
        kind: 'definition',
        statement: 'The **CMOS (complementary MOS) inverter** connects an n-channel enhancement MOSFET from output to ground and a p-channel enhancement MOSFET from output to the positive rail, with **their gates tied together as the input and their drains tied together as the output**. Input high turns the n-channel device ON and the p-channel OFF — output low; input low does the opposite — output high.',
        detail: 'In either logic state one transistor is fully on and the other is fully off, so the output sits essentially at a supply rail — **rail-to-rail** logic levels — and the pair conducts no current from the supply except leakage. The threshold of the switching is set between the rails by the two devices’ threshold voltages, giving a steep, well-defined transfer characteristic (the very property exploited when the inverter is used as an amplifier).',
      },
      {
        term: 'The CMOS inverter as amplifier',
        kind: 'insight',
        statement: 'Biased at the middle of its transition region, the CMOS inverter has both transistors partially conducting, and its small-signal voltage gain is $$A_v = -(g_{m,n} + g_{m,p})\\left(r_{o,n} \\parallel r_{o,p}\\right)$$ — large, because both transconductances act on the same output node.',
        detail: 'This is the linear use of a digital gate: with the input held near the switching threshold, each transistor behaves as a controlled current source feeding the other’s output resistance, and gains of hundreds are available. It is how CMOS operational amplifiers and RF amplifiers are built at essentially zero quiescent current — and a reminder that Chapter 15’s feedback loops can surround either technology.',
      },
      {
        term: 'The source follower (common-drain stage)',
        kind: 'insight',
        statement: 'Taking the output from the **source** instead of the drain gives the **source follower**: drain tied to the rail, load in the source lead. Its gain is $$A_v = \\frac{g_m R_S}{1 + g_m R_S} \\approx 1$$ — just under unity, and **without** the $180\\degree$ inversion of the common-source stage.',
        detail: 'The stage is the FET’s answer to the common-collector (emitter-follower) connection that Hughes sets aside as a special case in Chapter 13: enormous input impedance, output impedance of order $1/g_m$ (a few hundred ohms), and faithful unity-gain transfer. It costs one transconductance to run — the follower’s gain misses unity by exactly the $1/g_mR_S$ term — and it appears wherever a high-impedance node must drive a low-impedance load without loading it: buffer stages, the output followers inside op-amps of Chapter 15, and the probe front-ends of oscilloscopes.',
      },
      {
        term: 'Why CMOS dominates digital',
        kind: 'insight',
        statement: 'CMOS logic dissipates **essentially no static power** (in every state one transistor is off, so only leakage flows) and its gates draw **no d.c. input current** (each driven gate is an insulated capacitor). The remaining — dynamic — power is $$P = C V_{DD}^2 f,$$ proportional to the switched capacitance, the square of the supply voltage and the clock frequency.',
        detail: 'The quadratic dependence on $V_{DD}$ is why successive technology generations chase lower supply voltages, and the linear dependence on $f$ is why clock speed, not gate count, sets the power bill. Add symmetric output drive (either rail can be pulled hard), tolerance of supply and temperature variation, and near-perfect scalability with lithography, and the explanation is complete: no competing technology combines all of these at once.',
      },
    ],
    examples: [
      {
        title: 'Designing a common-source stage',
        problem: 'Design a common-source MOSFET amplifier from $V_{DD} = 12\\,\\text{V}$ using typical values: the gate divider sets $V_G = 4.0\\,\\text{V}$, the MOSFET needs $V_{GS} \\approx 2\\,\\text{V}$ at the wanted drain current of $2\\,\\text{mA}$, and its transconductance there is $g_m = 2\\,\\text{mA/V}$. Choose $R_S$, then $R_D$ for a mid-supply drain, and evaluate the gain with and without a bypass capacitor.',
        steps: [
          { label: 'Step 1: Choose the source resistor', text: 'The source sits at $V_S = V_G - V_{GS} = 4.0 - 2 = 2.0\\,\\text{V}$, and it must carry $2\\,\\text{mA}$: $R_S = 2.0/(2\\times 10^{-3}) = 1\\,\\text{k}\\Omega$.' },
          { label: 'Step 2: Choose the drain resistor', text: 'For the drain to rest near mid-supply, $R_D$ should drop about $6\\,\\text{V}$ at $2\\,\\text{mA}$: $R_D = 6/(2\\times 10^{-3}) = 3\\,\\text{k}\\Omega$ (the mid-supply rule of Section 13.3, transplanted).' },
          { label: 'Step 3: Gain with the source bypassed', text: 'The bypass capacitor shorts $R_S$ at signal frequencies, so $A_v = -g_mR_D = -(2\\times 10^{-3})(3\\times 10^{3}) = -6$ — inverting, single-figure, typical of a FET stage.' },
          { label: 'Step 4: Gain unbypassed', text: 'Without the bypass, $A_v = -g_mR_D/(1 + g_mR_S) = -6/(1 + 2\\times 10^{-3} \\times 1\\times 10^{3}) = -6/3 = -2$ — the degeneration has bought bias stability at the cost of gain, and in the deep-degeneration limit the gain would approach $-R_D/R_S = -3$.' },
          { label: 'Step 5: Note what the gate cost', text: 'The divider may use resistors of megohms — the gate current is zero, so the signal source is loaded only by the divider itself, something no BJT stage of Chapter 13 could arrange.' },
        ],
        result: '$R_S = 1\\,\\text{k}\\Omega$, $R_D = 3\\,\\text{k}\\Omega$, drain resting near $6\\,\\text{V}$; gain $-6$ bypassed, $-2$ unbypassed — and an input that loads nothing.',
      },
      {
        title: 'A CMOS gate’s power budget',
        problem: 'A CMOS logic gate with total switched capacitance $C = 10\\,\\text{pF}$ runs at $V_{DD} = 5\\,\\text{V}$ and a clock frequency of $1\\,\\text{MHz}$. Its static leakage current is about $1\\,\\text{nA}$. Compare the static and dynamic power, and estimate the saving from moving to a $3.3\\,\\text{V}$ supply.',
        steps: [
          { label: 'Step 1: Static power', text: 'With one transistor of the pair off in every state, the supply delivers only leakage: $P_{\\text{static}} = 5\\,\\text{V} \\times 1\\,\\text{nA} = 5\\,\\text{nW}$ — effectively zero.' },
          { label: 'Step 2: Dynamic power formula', text: 'Each output transition must charge or discharge the node capacitance through the full supply swing, giving $P = CV_{DD}^2f$.' },
          { label: 'Step 3: Substitute', text: '$P = 10\\times 10^{-12} \\times 5^2 \\times 1\\times 10^{6} = 250\\times 10^{-6} = 250\\,\\mu\\text{W}$.' },
          { label: 'Step 4: Compare', text: 'Dynamic power exceeds static by a factor of about $50\\,000$: in CMOS the power bill is paid entirely for switching, not for standing — the opposite of the bipolar logic families that CMOS displaced.' },
          { label: 'Step 5: Scale the supply', text: 'At $V_{DD} = 3.3\\,\\text{V}$ the dynamic power becomes $10\\times 10^{-12} \\times 3.3^2 \\times 10^{6} \\approx 109\\,\\mu\\text{W}$ — a 56 per cent reduction for a 34 per cent voltage cut, courtesy of the square law.' },
        ],
        result: '$250\\,\\mu\\text{W}$ dynamic against $5\\,\\text{nW}$ static at 5 V; dropping to $3.3\\,\\text{V}$ cuts the dynamic power to about $109\\,\\mu\\text{W}$.',
      },
    ],
    keyTakeaways: [
      'Common-source biasing: divider sets $V_G$, source resistor sets $I_D = (V_G - V_{GS})/R_S$, drain resistor drops the drain to mid-supply for maximum swing.',
      'Gain: $A_v = -g_mR_D$ bypassed, $-g_mR_D/(1 + g_mR_S)$ unbypassed — approaching $-R_D/R_S$ when heavily degenerated.',
      'FET $g_m$ of 1–10 mA/V against the BJT’s 40 mS at 1 mA: FET stages trade gain for zero input current.',
      'The CMOS inverter ties complementary enhancement gates together as input, drains as output: each logic state turns one device fully on and the other fully off, giving rail-to-rail output.',
      'Used as an amplifier at mid-transition, the CMOS pair gives $A_v = -(g_{m,n} + g_{m,p})(r_{o,n} \\parallel r_{o,p})$.',
      'CMOS power: static is leakage only, dynamic is $P = CV_{DD}^2 f$ — the $V_{DD}^2$ law drives every supply-voltage reduction in digital design.',
    ],
    quiz: [
      {
        q: 'In a common-source MOSFET stage, the source resistor’s main jobs are to:',
        options: ['Boost the gain by increasing the effective transconductance', 'Set the drain current from the gate voltage and stabilize it against device spread, at some cost in gain', 'Protect the gate oxide from static discharge', 'Convert the stage to a source follower'],
        answer: 1,
        explanation: '$I_D = (V_G - V_{GS})/R_S$ converts the divider’s fixed gate voltage into a well-defined current; any rise in $I_D$ raises $V_S$ and cuts $V_{GS}$ back — self-correcting bias. Unbypassed, it also divides the gain by $1 + g_mR_S$.',
      },
      {
        q: 'A common-source stage has $g_m = 2\\,\\text{mA/V}$, $R_D = 3\\,\\text{k}\\Omega$ and an unbypassed $R_S = 1\\,\\text{k}\\Omega$. Its voltage gain is approximately:',
        options: [`$-6$`, `$-2$`, `$+6$`, `$-3$`],
        answer: 1,
        explanation: '$A_v = -g_mR_D/(1 + g_mR_S) = -6/(1 + 2) = -2$. With the source bypassed the stage would give the full $-g_mR_D = -6$; the degeneration factor of $1 + g_mR_S = 3$ is the price of the stable bias.',
      },
      {
        q: 'In a CMOS inverter with the input at the positive rail:',
        options: ['Both transistors conduct equally', 'The n-channel device is ON and the p-channel device is OFF, pulling the output to ground', 'The p-channel device is ON and the n-channel device is OFF, pulling the output to the positive rail', 'Both transistors are OFF and the output floats'],
        answer: 1,
        explanation: 'A high input enhances the n-channel gate (ON) and removes the p-channel’s enhancement (OFF), so the output is pulled hard to ground. A low input does the converse. In both states the series path through the pair is broken — the essence of zero static power.',
      },
      {
        q: 'Why do CMOS technology generations keep reducing the supply voltage $V_{DD}$?',
        options: ['Because the transistors stop working above $2\\,\\text{V}$', 'Because dynamic power scales with $V_{DD}^2$ — a small voltage cut yields a large power saving', 'Because lower voltage increases the transconductance', 'To increase the rail-to-rail output swing'],
        answer: 1,
        explanation: '$P = CV_{DD}^2f$: cutting $V_{DD}$ from 5 V to 3.3 V (a 34 per cent reduction) cuts dynamic power by about 56 per cent. The quadratic law is the economics of the entire semiconductor scaling roadmap.',
      },
      {
        q: 'Compared with a common-emitter BJT stage at the same current, a common-source FET stage typically has:',
        options: ['Higher voltage gain and lower input impedance', 'Lower voltage gain and essentially infinite input impedance', 'The same gain, since $g_m$ is the same', 'No phase inversion'],
        answer: 1,
        explanation: 'The BJT’s Ebers–Moll transconductance ($40\\,\\text{mS}$ at $1\\,\\text{mA}$) dwarfs the FET’s 1–10 mA/V, so the BJT wins on gain; the FET wins on input loading — its gate draws no current at all. Both stages invert.',
      },
      // PYQ-pattern: ISRO 2019 — enhancement MOSFET bias point (rephrased, values changed)
      {
        q: 'An enhancement NMOS has $K = 0.50$ mA per V squared and threshold $1.5$ V. With $V_{GS} = 3.5$ V and drain resistor $3.0$ kΩ from a $12$ V supply, the drain current and drain-source voltage are closest to:',
        options: ['1.0 mA and 9.0 V', '2.0 mA and 6.0 V', '4.0 mA and 0.5 V', '0.5 mA and 10.5 V'],
        answer: 1,
        explanation: 'Step 1 — Given: $K = 0.50$ mA per V squared, $V_{TH} = 1.5$ V, $V_{GS} = 3.5$ V, $R_{D} = 3.0$ kΩ, $V_{DD} = 12$ V. Step 2 — Governing square law in saturation: $I_{D} = K(V_{GS} - V_{TH})^{2}$, then $V_{DS} = V_{DD} - I_{D}R_{D}$, valid while $V_{DS} ≥ V_{GS} - V_{TH}$. Step 3 — Algebra: overdrive $2.0$ V, $I_{D} = 0.50 \\times 4.0 = 2.0$ mA; $V_{DS} = 12 - 2.0 \\times 3.0 = 6.0$ V; check $6.0 ≥ 2.0$ so saturation holds. Step 4 — Sanity check: stronger control-terminal bias raises current quadratically, the drain sits mid-rail with symmetric swing room, and the triode region would need $V_{DS}$ below $2$ V. Step 5 — Distractor analysis: 4.0 mA doubles $K$, 1.0 mA halves the overdrive, and 0.5 mA confuses linear with square law. Step 6 — Conclude: about 2.0 mA with 6.0 V across the device.',
      },
    ],
  },

  // ------------------------------------------------------------------ 14.4
  {
    sectionId: 'elec-ch14-s4',
    readingTime: 8,
    intro: 'Scale the MOSFET up from milliamperes to amperes and it becomes the workhorse of power electronics: a switch that a logic signal can turn on and off in nanoseconds, whose only conduction loss is a resistance that designers specify directly. Hughes ends the device chapters by observing that the natural home of all these transistors — small and large — is the integrated circuit, where a hundred components cost less than one discrete transistor and the op-amp emerges as the canonical amplifier.',
    objectives: [
      'Explain how the vertical structure of power MOSFETs achieves milliohm on-resistance',
      'Compute conduction loss from $R_{DS(\\text{on})}$ and gate-drive power from gate charge',
      'Interpret the safe operating area of a power MOSFET and contrast it with BJT second breakdown',
      'Describe the construction, packaging and consequences of integrated circuits',
    ],
    concepts: [
      {
        term: 'Vertical power MOSFET structure',
        kind: 'definition',
        statement: 'Power MOSFETs are built **vertically** (the VMOS/DMOS and trench families): the current flows from a source on the top surface down through short channels to a drain at the bottom of the chip, and the die is divided into **tens of thousands of parallel cells** whose channels share the load.',
        detail: 'Parallel cells make the on-resistance fall roughly in inverse proportion to die area — a designer buys lower $R_{DS(\\text{on})}$ with silicon. The voltage rating is set by the thickness and doping of the epitaxial drain layer the current must cross: thick, lightly doped layers hold off hundreds of volts but add series resistance, the fundamental engineering trade in power MOSFET design.',
      },
      {
        term: 'R_DS(on) and conduction loss',
        kind: 'law',
        statement: 'When fully enhanced, the channel of a power MOSFET behaves as a small resistance — the **on-resistance $R_{DS(\\text{on})}$**, from milliohms in large low-voltage parts up to ohms in small high-voltage ones. The conduction loss is $$P_D = I_D^2 R_{DS(\\text{on})}.$$',
        detail: 'This ohmic law is the MOSFET’s great gift to power design: losses scale with the square of current, are calculable in advance from a single datasheet number, and fall automatically with cooler operation (resistance rises only gently with temperature). Contrast the BJT switch, whose loss is $V_{CE(\\text{sat})}I_C$ with a saturation voltage that grows as the device is pushed harder.',
      },
      {
        term: 'Gate drive',
        kind: 'method',
        statement: 'The MOSFET gate is a pure capacitance: to switch, a charge $Q_G$ (tens of nanocoulombs in a power device) must be pushed on and pulled off, requiring a **pulse of gate current** but **no steady current at all** once on. Average gate-drive power is approximately $Q_G V_{GS} f$.',
        detail: 'Standard power MOSFETs want about $10\\,\\text{V}$ of gate drive for full enhancement; logic-level parts switch usefully from $4.5\\,\\text{V}$ or less. The drive current needed to switch fast is $I_G = Q_G/t_{\\text{switch}}$ — amperes for nanosecond transitions — which is why gate-driver integrated circuits exist. Compare the BJT, which needs a continuous base current equal to its collector current divided by β for the whole on-time.',
      },
      {
        term: 'Safe operating area',
        kind: 'definition',
        statement: 'The **safe operating area (SOA)** on the $I_D$–$V_{DS}$ plane is bounded by the $R_{DS(\\text{on})}$ limit at low voltage, the rated continuous drain current, the constant-dissipation hyperbola (thermal limit) and the drain–source breakdown voltage. Unlike the BJT, the power MOSFET has **essentially no second breakdown**.',
        detail: 'Second breakdown — the BJT failure mode in which local hot spots steal the current and thermally run away — is absent because the MOSFET’s channel resistance **increases** with temperature: hotter cells carry less current, so the load redistributes evenly over the parallel cells. The MOSFET SOA is therefore nearly rectangular on log–log axes, and the device can be operated along its voltage and current ratings with far less guard-banding.',
      },
      {
        term: 'MOSFET versus BJT as power switch',
        kind: 'insight',
        statement: 'The power MOSFET switches faster (no minority-carrier storage time to purge), needs no steady drive current, and resists thermal runaway. At very high voltages, however, the silicon needed to hold off the voltage makes $R_{DS(\\text{on})}$ grow steeply, so bipolar devices and **IGBTs** retain the multi-kilovolt territory where their lower saturation voltage wins.',
        detail: 'The Art of Electronics summarizes the split: below roughly a kilovolt the MOSFET’s resistive conduction and effortless gate drive dominate; above it, the IGBT — a MOS-gated bipolar transistor — combines MOS drive convenience with BJT-like saturation voltage. The comparison mirrors Chapter 13 throughout: current control versus voltage control, offset voltage versus resistance, storage time versus capacitive gate.',
      },
      {
        term: 'The intrinsic body diode',
        kind: 'definition',
        statement: 'In a power MOSFET the body (substrate) is shorted to the source, so the **body–drain p–n junction** of Section 14.1 appears as a genuine diode connected anti-parallel to the channel: it conducts whenever the drain is driven below the source. Designers must account for it in every power circuit.',
        detail: 'The junction Hughes identified as the seat of pinch-off in the IGFET reappears at full power scale: in bridge and half-bridge converters it actually does useful freewheeling duty, returning inductive load current to the supply when the switch turns off; in circuits that must block reverse current it forces the addition of a series diode. Its reverse-recovery time is slower than the MOSFET’s own switching speed — the reason fast-recovery body-diode variants exist for high-frequency switching supplies.',
      },
      {
        term: 'Integrated circuits',
        kind: 'definition',
        statement: 'The manufacture of transistors makes **many transistors on a single slice**, which is then cut up; it was a logical development to keep the transistors together, forming the complete amplifier arrangement in one step — the **integrated circuit (IC)**. An IC is a form of construction, not a device performing a specific function.',
        detail: 'A typical IC amplifier comprises 20–30 transistors with possibly 50–100 passive components such as resistors, all in the volume formerly taken up by a single bipolar transistor. The outcome is the miniaturized microcircuit — very small, cheap and reliable, with automatic compensation for temperature drift, one component replacing up to 100 or more. The dual-in-line package (with a dot or notch marking pin 1) and surface-mount versions carry the leads, which are made far larger than the small currents require, for mechanical strength.',
      },
      {
        term: 'The IC amplifier pinout and direct coupling',
        kind: 'insight',
        statement: 'A typical IC amplifier has **eight connectors**: two for the supply voltage, two available for input signals, one for the output signal, one for earth, and the remainder usable for optional **frequency compensation**. The two input terminals permit the output to be inverted or non-inverted — and many ICs accept two signals and operate on their difference.',
        detail: 'The component amplifiers inside are **directly coupled** rather than capacitor-coupled, so ICs can amplify direct (d.c.) signals as well as alternating ones — the feature that lets the op-amp serve filters, integrators and sensor amplifiers alike. With complexity nearly free to add, ICs are manufactured with optional facilities, and the basic integrated-circuit amplifier takes the form of the **operational amplifier** — the device Chapter 15 takes apart and rebuilds around.',
      },
    ],
    examples: [
      {
        title: 'Conduction loss in a 10 mΩ switch',
        problem: 'A power MOSFET with $R_{DS(\\text{on})} = 10\\,\\text{m}\\Omega$ (typical datasheet value for a low-voltage part) carries $10\\,\\text{A}$ when on. Compute its conduction loss, and compare with a bipolar transistor saturating at $V_{CE(\\text{sat})} = 1\\,\\text{V}$ at the same current.',
        steps: [
          { label: 'Step 1: MOSFET conduction loss', text: 'The fully enhanced channel is a $10\\,\\text{m}\\Omega$ resistor: $P_D = I_D^2 R_{DS(\\text{on})} = 10^2 \\times 0.01 = 1\\,\\text{W}$.' },
          { label: 'Step 2: BJT conduction loss', text: 'The saturated bipolar drops about $1\\,\\text{V}$ at $10\\,\\text{A}$: $P = V_{CE(\\text{sat})}I_C = 1 \\times 10 = 10\\,\\text{W}$ — ten times more heat to remove.' },
          { label: 'Step 3: Scaling check', text: 'At $30\\,\\text{A}$ the MOSFET loss grows as the square: $900 \\times 0.01 = 9\\,\\text{W}$, while the BJT grows linearly to $30\\,\\text{W}$ — the ohmic law catches up at very high current, which is why conduction-loss comparisons always quote the operating current.' },
          { label: 'Step 4: The drive comparison', text: 'The MOSFET held on requires zero gate current; the BJT needs base current of order $I_C/\\beta = 10/50 = 200\\,\\text{mA}$ continuously — dissipated in the base circuit and supplied by the driver throughout the on-time.' },
        ],
        result: 'MOSFET: $1\\,\\text{W}$ of conduction loss with no steady drive; BJT: $10\\,\\text{W}$ plus a continuous $200\\,\\text{mA}$ base drive — the resistance-versus-saturation trade in one calculation.',
      },
      {
        title: 'Gate-drive power at 100 kHz',
        problem: 'A power MOSFET with total gate charge $Q_G = 30\\,\\text{nC}$ is switched from a $10\\,\\text{V}$ gate drive at $f = 100\\,\\text{kHz}$ (typical switching-supply values). Estimate the average gate-drive power and the peak gate current needed to switch in $50\\,\\text{ns}$.',
        steps: [
          { label: 'Step 1: Energy per cycle', text: 'Each switching cycle moves the charge $Q_G$ through the gate-drive voltage once (charging) and returns it once: the driver delivers roughly $Q_GV_{GS}$ per cycle.' },
          { label: 'Step 2: Average gate power', text: '$P_{\\text{gate}} \\approx Q_GV_{GS}f = 30\\times 10^{-9} \\times 10 \\times 100\\times 10^{3} = 30\\times 10^{-3} = 30\\,\\text{mW}$ — a modest bill for controlling kilowatts.' },
          { label: 'Step 3: Peak current for fast edges', text: 'To move $30\\,\\text{nC}$ in $t = 50\\,\\text{ns}$ requires $I_G = Q_G/t = 30\\times 10^{-9}/50\\times 10^{-9} = 0.6\\,\\text{A}$ of gate current during each edge — pulse currents a thousand times the average.' },
          { label: 'Step 4: Interpret', text: 'The gate-drive requirement is a pulse specification, not a steady one: ordinary logic outputs cannot supply $0.6\\,\\text{A}$, which is why dedicated gate-driver ICs (and the totem-pole output stages inside them) stand between controllers and power FETs.' },
        ],
        result: 'About $30\\,\\text{mW}$ of average gate power, delivered in $0.6\\,\\text{A}$ pulses at each switching edge.',
      },
      {
        title: 'What fits in an eight-pin IC',
        problem: 'Summarize Hughes’s account of a typical IC amplifier package — how many transistors and passive components it contains, and how its eight connectors are allocated.',
        steps: [
          { label: 'Step 1: Density', text: 'Typically 20–30 transistors and 50–100 passive components such as resistors occupy the volume formerly taken up by a single bipolar transistor — with automatic compensation for temperature drift built in.' },
          { label: 'Step 2: The supply and ground', text: 'Two connectors provide the supply voltage and one the earth connection — three pins are spent on merely keeping the circuit alive.' },
          { label: 'Step 3: The dual inputs', text: 'Two connectors take input signals: choosing between them makes the output inverted or non-inverted, and many ICs accept two signals at these terminals and operate on their difference — the differential-pair input that Chapter 15 formalizes.' },
          { label: 'Step 4: Output and compensation', text: 'One connector carries the output signal, and the remaining connectors can be used for optional frequency compensation — the external terminals that tame the high-gain internal stages.' },
          { label: 'Step 5: The coupling fact', text: 'The internal stages are directly coupled — no coupling capacitors — so the IC amplifies direct signals as well as alternating ones, and the component amplifiers take the form of the operational amplifier.' },
        ],
        result: 'Eight pins: 2 supply, 2 differential-capable inputs, 1 output, 1 earth, 2 optional compensation — and inside, 20–30 directly coupled transistors replacing 100 or more discrete components.',
      },
    ],
    keyTakeaways: [
      'Power MOSFETs conduct vertically through tens of thousands of parallel cells; on-resistance falls with die area while the epitaxial layer sets the voltage rating.',
      'Conduction loss is $P_D = I_D^2R_{DS(\\text{on})}$ — $1\\,\\text{W}$ for a $10\\,\\text{m}\\Omega$ part at $10\\,\\text{A}$, against $10\\,\\text{W}$ for a BJT saturating at $1\\,\\text{V}$.',
      'Gate drive moves charge $Q_G$, not current: average power $\\approx Q_GV_{GS}f$ (30 mW for 30 nC, 10 V, 100 kHz), but edges need pulse currents like $Q_G/t = 0.6\\,\\text{A}$.',
      'The MOSFET SOA has essentially no second breakdown — channel resistance rises with temperature so current shares evenly across cells.',
      'Below about a kilovolt the MOSFET wins; above it, IGBTs and bipolar devices keep the high-voltage, high-current territory.',
      'An IC is a construction, not a function: 20–30 transistors and 50–100 passives in one BJT’s volume, directly coupled, temperature-compensated, cheaper than the discrete parts it replaces.',
      'A typical IC amplifier uses 8 pins — supply, earth, two differential-capable inputs, output, optional frequency compensation — and the canonical form is the operational amplifier of Chapter 15.',
    ],
    quiz: [
      {
        q: 'A power MOSFET with $R_{DS(\\text{on})} = 10\\,\\text{m}\\Omega$ carries $10\\,\\text{A}$ when on. Its conduction loss is:',
        options: [`$0.1\\,\\text{W}$`, `$1\\,\\text{W}$`, `$10\\,\\text{W}$`, `$100\\,\\text{W}$`],
        answer: 1,
        explanation: '$P_D = I_D^2R_{DS(\\text{on})} = (10)^2 \\times 0.01 = 1\\,\\text{W}$. The square law is why on-resistance is quoted to milliohm precision and why designers parallel devices or buy bigger dies.',
      },
      {
        q: 'The power needed to drive a MOSFET gate at frequency $f$ is approximately:',
        options: ['$Q_G V_{GS} f$ — charge moved through the gate voltage each cycle', '$\\beta I_C V_{BE}$ continuously while on', 'Zero — the gate is an insulator', `$I_D^2 R_{DS(\\text{on})}$`],
        answer: 0,
        explanation: 'The gate is a capacitance: no steady current flows, but each transition moves the gate charge $Q_G$ through $V_{GS}$, so the driver dissipates about $Q_GV_{GS}f$. The peak edge current can nevertheless be large ($I_G = Q_G/t_{\\text{switch}}$).',
      },
      {
        q: 'Power MOSFETs are largely immune to second breakdown because:',
        options: ['Their gates are insulated', 'Channel resistance increases with temperature, so hotter cells carry less current and the load redistributes across parallel cells', 'They cannot carry current at high drain voltage', 'Their threshold voltage is negative'],
        answer: 1,
        explanation: 'The positive temperature coefficient of channel resistance is self-balancing: local hot spots back off instead of hogging current as they do in a BJT. The SOA is therefore nearly a rectangle bounded by $R_{DS(\\text{on})}$, current, dissipation and breakdown ratings.',
      },
      {
        q: 'According to Hughes, a typical integrated-circuit amplifier contains, in the volume of a single bipolar transistor:',
        options: ['One transistor and one resistor', 'Two transistors only', 'About 20–30 transistors with 50–100 passive components', 'Over a thousand transistors'],
        answer: 2,
        explanation: 'The IC carries 20–30 transistors and 50–100 passive components in a single BJT’s volume, directly coupled and automatically compensated for temperature drift — replacing up to 100 or more discrete parts at dramatically lower cost.',
      },
      {
        q: 'The two input terminals of a typical IC amplifier exist so that:',
        options: ['The IC can run from two supplies', 'The output can be taken inverted or non-inverted, and the IC can operate on the difference between two signals', 'One is used for the signal and the other must always be earthed', 'They double as frequency-compensation pins'],
        answer: 1,
        explanation: 'The choice of terminal gives an inverted or non-inverted output, and many ICs accept two signals and operate on their difference — the differential input. The remaining pins include the optional frequency-compensation connectors.',
      },
    ],
  },
]

// ============================================================================
// Formula sheet — Chapter 14 (FETs). `section` is the platform section number.
// ============================================================================

export const elecCh14Formulas: FormulaEntry[] = [
  {
    chapterId: 'elec-ch14',
    section: '14.2',
    name: 'Shockley’s Transfer Equation',
    formula: 'I_D = I_DSS·(1 − V_GS/V_p)²',
    note: 'parabolic JFET transfer curve; zero at V_GS = V_p, I_DSS at V_GS = 0',
    latex: 'I_D = I_{DSS}\\left(1 - \\frac{V_{GS}}{V_p}\\right)^{2}',
  },
  {
    chapterId: 'elec-ch14',
    section: '14.2',
    name: 'Drain Resistance',
    formula: 'r_d = ΔV_DS/ΔI_D  (at constant V_GS)',
    note: 'slope resistance of the pinch-off region; typically 10–500 kΩ',
    latex: 'r_d = \\frac{\\Delta V_{DS}}{\\Delta I_D} \\quad (V_{GS}\\ \\text{fixed})',
  },
  {
    chapterId: 'elec-ch14',
    section: '14.2',
    name: 'Mutual Conductance (g_m)',
    formula: 'g_m = ΔI_D/ΔV_GS  (at constant V_DS)',
    note: 'FET gain currency, in mA/V; from Shockley: g_m = 2I_DSS(1 − V_GS/V_p)/|V_p|',
    latex: 'g_m = \\frac{\\Delta I_D}{\\Delta V_{GS}} \\quad (V_{DS}\\ \\text{fixed})',
  },
  {
    chapterId: 'elec-ch14',
    section: '14.2',
    name: 'Amplification Factor',
    formula: 'μ = r_d · g_m',
    note: 'dimensionless product; the maximum unloaded voltage gain',
    latex: '\\mu = r_d\\,g_m',
  },
  {
    chapterId: 'elec-ch14',
    section: '14.2',
    name: 'FET Common-Source Gain (Y-parameters)',
    formula: 'A_v = Y_fs·R_L / (1 + R_L·Y_os)',
    note: 'Example 20.8: 2.2 mA/V, 20 μS, 2 kΩ → A_v = 4.23',
    latex: 'A_v = \\frac{Y_{fs}R_L}{1 + R_LY_{os}}',
  },
  {
    chapterId: 'elec-ch14',
    section: '14.3',
    name: 'Common-Source Gain (MOSFET)',
    formula: 'A_v = −g_m·R_D;  unbypassed: −g_m·R_D/(1 + g_m·R_S)',
    note: 'bypass R_S for gain, keep it for bias stability; −R_D/R_S if heavily degenerated',
    latex: 'A_v = -g_m R_D; \\qquad -\\frac{g_m R_D}{1 + g_m R_S}',
  },
  {
    chapterId: 'elec-ch14',
    section: '14.3',
    name: 'CMOS Dynamic Power',
    formula: 'P = C·V_DD²·f',
    note: 'static power is leakage only — this term pays for every transition',
    latex: 'P = C V_{DD}^{2} f',
  },
  {
    chapterId: 'elec-ch14',
    section: '14.4',
    name: 'Power MOSFET Conduction Loss',
    formula: 'P_D = I_D² · R_DS(on)',
    note: '10 mΩ at 10 A → 1 W; ohmic, calculable, temperature-friendly',
    latex: 'P_D = I_D^{2} R_{DS(\\text{on})}',
  },
]
