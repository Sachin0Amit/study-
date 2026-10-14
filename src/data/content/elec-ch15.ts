import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// The Electronics Master Library — Chapter 15: Operational Amplifiers
// and Feedback (5 sections).
// Sources: Hughes, "Electrical & Electronic Technology" 12e §20.29–20.34
// (pp. 501–510) and §18.5–18.8 (pp. 430–437); Nilsson & Riedel,
// "Electric Circuits" 12e ch. 5 (pp. 178–197, incl. the strain-gage
// Practical Perspective); Horowitz & Hill, "The Art of Electronics" 3e
// ch. 4–5 (scan — standard content from knowledge).
// All worked-example numbers are the books’ own; arithmetic re-verified.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh15Content: SectionContent[] = [
  // ------------------------------------------------------------------ 15.1
  {
    sectionId: 'elec-ch15-s1',
    readingTime: 8,
    intro: 'The operational amplifier — the op amp — is the most successful analog integrated circuit ever built: a complete high-gain differential amplifier on one silicon chip, costing less than a resistor. Nilsson opens the subject with a real device, the µA 741 in its eight-lead DIP package, and shows that from just five terminals and two constraints flows the whole of precision analog electronics. Hughes adds the engineer’s property list: enormous open-loop gain, near-infinite input impedance, and a gain held constant over a wide frequency range — properties that only become useful once feedback is applied.',
    objectives: [
      'Label the five primary op-amp terminals and define the terminal voltages and currents with their reference directions',
      'Read the voltage transfer characteristic and distinguish the linear region from positive and negative saturation',
      'State the two ideal op-amp constraints and the conditions under which each one is valid',
      'Apply the four-step analysis method to an op-amp circuit and verify the result against the supply rails',
      'Explain how a strain-gage bridge uses a difference amplifier to measure tiny resistance changes',
    ],
    concepts: [
      {
        term: 'Op-amp terminals',
        kind: 'definition',
        statement: 'An op amp has **five terminals of primary interest**: the inverting input, the noninverting input, the output, the positive supply $V^{+}$ and the negative supply $V^{-}$; the remaining pins (offset nulls, no-connect) are of little or no concern in analysis.',
        detail: 'Nilsson’s reference device is the µA 741, introduced by Fairchild in 1968 in an eight-lead dual-in-line package (DIP). The input terminals are marked $+$ and $-$; Hughes stresses these are **not polarity signs** — the $-$ marks the inverting input, the $+$ the non-inverting one. The two offset-null terminals can compensate for aging and imperfections but are seldom used, and the NC pin is simply not connected.',
      },
      {
        term: 'Terminal voltages and currents',
        kind: 'notation',
        statement: 'The terminal voltages $v_p$, $v_n$ and $v_o$ are measured as **rises from a common reference node**, and the currents $i_p$, $i_n$, $i_o$, $i_{c+}$ and $i_{c-}$ are all defined **into** the op-amp terminals.',
        detail: 'Kirchhoff’s current law applied to the op amp as a supernode gives $i_p + i_n + i_o + i_{c+} + i_{c-} = 0$. With the input currents zero this collapses to $i_o = -(i_{c+} + i_{c-})$: even though the inputs draw nothing, the output can supply appreciable current — it comes from the supply pins, between which $+V_{CC}$ and $-V_{CC}$ are connected.',
      },
      {
        term: 'Voltage transfer characteristic',
        kind: 'law',
        statement: 'The op-amp output obeys $v_o = A(v_p - v_n)$ in the **linear region** and clamps at $\\pm V_{CC}$ outside it: saturation, linear, saturation are the three regions of operation.',
        detail: 'Recommended supply voltages seldom exceed $20\\ \\text{V}$ in magnitude and the open-loop gain $A$ is rarely less than $10^{4}$ (Hughes quotes a typical $10^{5}$), so the linear region requires $|v_p - v_n| < 20/10^{4} = 2\\ \\text{mV}$. Node voltages in ordinary circuits are much larger than $2\\ \\text{mV}$, which is what makes the next two constraints possible. The value of $A$ is called the **open-loop gain** because it is the gain measured with no feedback path.',
      },
      {
        term: 'Input voltage constraint (virtual short)',
        kind: 'law',
        statement: 'An ideal op amp confined to its linear region forces $$v_p = v_n,$$ so the two input terminals sit at **essentially the same potential** even though nothing connects them — the famous virtual short.',
        detail: 'The constraint characterizes the *ideal* op amp, that is, one whose $A$ is infinite. It is valid only while the op amp actually operates in its linear region; a circuit without a negative-feedback path will normally saturate and the rule collapses. Note the sign discipline: the output responds to $v_p - v_n$, so driving the $+$ input positive pushes the output positive, and driving the $-$ input positive pushes it negative.',
      },
      {
        term: 'Input current constraint',
        kind: 'law',
        statement: 'The equivalent resistance seen looking into the input terminals is **very large** — typically $1\\ \\text{M}\\Omega$ or more — so for an ideal op amp $$i_p = i_n = 0.$$',
        detail: 'Unlike the voltage constraint, the current constraint is **not** based on assuming linear operation: the inputs draw no current whether the op amp is linear or saturated. Hughes lists the same property from the design side: a high input impedance, usually assumed infinite, at both inputs.',
      },
      {
        term: 'Negative feedback path',
        kind: 'insight',
        statement: 'Linear operation requires a **signal path from the output terminal to the inverting input**; the fed-back signal subtracts from the input, shrinking $v_p - v_n$, which keeps the output away from the rails.',
        detail: 'Without such a path the huge open-loop gain multiplies microvolt differences into saturation. Even with feedback present, linear operation is not guaranteed: the practical method is to *assume* linearity, compute $v_o$, and check for a contradiction — if the analysis yields $v_o = 10\\ \\text{V}$ while $V_{CC} = 6\\ \\text{V}$, the assumption was wrong and the output is pinned at the rail.',
      },
      {
        term: 'Analysis Method 5.1',
        kind: 'method',
        statement: 'To analyze an ideal op-amp circuit: **check** for a negative-feedback path, **write one KCL equation** at the inverting input using $i_n = 0$ and $v_n = v_p$, **solve** for $v_o$, then **compare** $v_o$ with the supply voltages to confirm the linear-region assumption.',
        detail: 'Because the noninverting input usually sits at ground or at a driven source, the voltage constraint fixes $v_n$ immediately, and every branch current into the inverting node is expressible by Ohm’s law with $v_o$ as the only unknown. This four-step loop is the engine behind every circuit in the next section.',
      },
      {
        term: 'Hughes’ op-amp property list',
        kind: 'insight',
        statement: 'All operational amplifiers share: an inverting and a non-inverting input, **high input impedance** (usually assumed infinite), **low output impedance**, a large open-loop voltage gain (typically $10^{5}$) that stays **constant over a wide frequency range**, freedom from drift, and freedom from parasitic oscillation.',
        detail: 'Hughes also notes that the component amplifiers inside the IC are directly coupled, so op amps amplify direct signals as well as alternating ones, and that IC construction is a *form of construction* rather than a device function — the basic IC amplifier is usually an op amp, but logic systems (Chapter 18) use the same technology.',
      },
      {
        term: 'Strain-gage bridge',
        kind: 'insight',
        statement: 'A **four-gage bridge** (two gages at $R + \\Delta R$, two at $R - \\Delta R$) feeding a difference amplifier produces $$v_o = \\frac{R_f (2\\Delta R)}{R^2 - (\\Delta R)^2}\\, v_{\\text{ref}} \\approx \\frac{R_f}{R}\\, 2\\delta\\, v_{\\text{ref}},$$ where $\\delta = \\Delta R / R$.',
        detail: 'This is Nilsson’s Practical Perspective: strain gages measure the twist, stretch and bend of structures such as aircraft frames, and the resistance changes are tiny ($\\Delta R \\ll R$, so $R^2 - (\\Delta R)^2 \\approx R^2$). Writing KCL at both op-amp inputs with $v_p = v_n$ and solving gives the exact expression; the bridge common-mode (the mean signal) cancels while the differential strain signal is amplified by $R_f / R$.',
      },
    ],
    examples: [
      {
        title: 'Analyzing an op-amp circuit (Nilsson Example 5.1)',
        problem: 'The op amp in a circuit with a $25\\ \\text{k}\\Omega$ input resistor from $v_a$, a $100\\ \\text{k}\\Omega$ feedback resistor from $v_o$ to the inverting node, and the noninverting input tied to $v_b$ is ideal, with $\\pm 10\\ \\text{V}$ supplies. (a) Find $v_o$ when $v_a = 1\\ \\text{V}$, $v_b = 0$. (b) Repeat for $v_a = 1\\ \\text{V}$, $v_b = 2\\ \\text{V}$. (c) If $v_a = 1.5\\ \\text{V}$, find the range of $v_b$ that avoids saturation.',
        steps: [
          { label: 'Step 1: Check the feedback path', text: 'The $100\\ \\text{k}\\Omega$ resistor connects the output to the inverting input, so negative feedback exists and we assume the linear region. The voltage constraint gives $v_n = v_p = v_b$.' },
          { label: 'Step 2: KCL at the inverting node (a)', text: 'With $v_b = 0$ the inverting node is a virtual ground: $\\frac{1 - 0}{25{,}000} + \\frac{v_o - 0}{100{,}000} = 0$, so $v_o = -100{,}000/25{,}000 \\times 1 = -4\\ \\text{V}$.' },
          { label: 'Step 3: Case (b)', text: 'Now $v_n = 2\\ \\text{V}$: $\\frac{1 - 2}{25{,}000} + \\frac{v_o - 2}{100{,}000} = 0$, which gives $v_o = 6\\ \\text{V}$. Both results lie inside $\\pm 10\\ \\text{V}$, confirming linear operation.' },
          { label: 'Step 4: The saturation range (c)', text: 'With $v_a = 1.5\\ \\text{V}$ the same KCL gives $4(1.5 - v_b) + (v_o - v_b) = 0$, so $v_b = (6 + v_o)/5$. Imposing $-10 \\le v_o \\le 10$ yields $-0.8\\ \\text{V} \\le v_b \\le 3.2\\ \\text{V}$.' },
        ],
        result: 'Case (a) $v_o = -4\\ \\text{V}$, case (b) $v_o = 6\\ \\text{V}$, and for $v_a = 1.5\\ \\text{V}$ the op amp stays linear while $-0.8\\ \\text{V} \\le v_b \\le 3.2\\ \\text{V}$.',
      },
      {
        title: 'Reading a strain-gage bridge (Nilsson Practical Perspective)',
        problem: 'A symmetric strain-gage bridge feeds a difference amplifier whose input and feedback resistors are all $R_f$. Derive the output voltage as a function of the gage resistance change $\\Delta R$, and reduce it for $\\Delta R \\ll R$.',
        steps: [
          { label: 'Step 1: KCL at both inputs', text: 'With the left bridge branch at $R + \\Delta R$, the right at $R - \\Delta R$, and the amplifier resistor $R_f$ from each input to the other side: $\\frac{v_{\\text{ref}} - v_n}{R + \\Delta R} = \\frac{v_n}{R - \\Delta R} + \\frac{v_n - v_o}{R_f}$ and symmetrically for $v_p$.' },
          { label: 'Step 2: Invoke the constraints', text: 'Linear operation gives $v_p = v_n$, so the expression solved from the noninverting side, $v_p = \\frac{v_{\\text{ref}}}{(R - \\Delta R)\\left[\\frac{1}{R + \\Delta R} + \\frac{1}{R - \\Delta R} + \\frac{1}{R_f}\\right]}$, equals $v_n$.' },
          { label: 'Step 3: Substitute and solve', text: 'Substituting this $v_n$ into the inverting-side equation and simplifying yields $v_o = \\frac{R_f (2\\Delta R)}{R^2 - (\\Delta R)^2}\\, v_{\\text{ref}}$.' },
          { label: 'Step 4: Linearize', text: 'Strain changes are tiny, so $R^2 - (\\Delta R)^2 \\approx R^2$ and $v_o \\approx \\frac{R_f}{R}\\, 2\\delta\\, v_{\\text{ref}}$ with $\\delta = \\Delta R / R$ — a clean, amplified measure of strain.' },
        ],
        result: 'The bridge output is proportional to the fractional gage change: $v_o \\approx (R_f/R)\\,2\\delta\\,v_{\\text{ref}}$, with the bridge common-mode rejected by the difference amplifier.',
      },
    ],
    keyTakeaways: [
      'An op amp has two inputs (inverting $-$, noninverting $+$), one output and two supply pins; $v_o = A(v_p - v_n)$ holds only in the linear region between the supply rails.',
      'With supplies below $20\\ \\text{V}$ and $A \\ge 10^{4}$, the linear region spans only $|v_p - v_n| < 2\\ \\text{mV}$ — the seed of the virtual short.',
      'The two ideal constraints are $v_p = v_n$ (needs negative feedback and linear operation) and $i_p = i_n = 0$ (holds always, since input resistance is $1\\ \\text{M}\\Omega$ or more).',
      'Analysis recipe: check the feedback path, write one KCL at the inverting node, solve for $v_o$, then compare $v_o$ with the supplies to verify linearity.',
      'The output current is supplied through the power pins: $i_o = -(i_{c+} + i_{c-})$ even though $i_p = i_n = 0$.',
      'A strain-gage bridge plus a difference amplifier turns a fractional resistance change $\\delta$ into $v_o \\approx (R_f/R)\\,2\\delta\\,v_{\\text{ref}}$.',
    ],
    quiz: [
      {
        q: 'In its linear region, the op-amp output is proportional to which quantity?',
        options: ['The average of the two input voltages', 'The difference $v_p - v_n$ between the input voltages', 'The voltage on the noninverting input only', 'The current drawn by the inverting input'],
        answer: 1,
        explanation: 'The voltage transfer characteristic is $v_o = A(v_p - v_n)$: the op amp is a differential amplifier, responding only to the difference of its input voltages.',
      },
      {
        q: 'The voltage constraint $v_p = v_n$ is valid under exactly which condition?',
        options: ['Always — it is a property of the silicon', 'Only when both inputs are grounded', 'Only when the op amp is confined to its linear region, which normally requires a negative-feedback path', 'Only when the supply voltages exceed $20\\ \\text{V}$'],
        answer: 2,
        explanation: 'The constraint follows from $|v_p - v_n| < V_{CC}/A$ being microscopically small; outside the linear region the output saturates and no such relation holds. Negative feedback from output to inverting input is what confines the device to that region.',
      },
      {
        q: 'Why does the current constraint $i_p = i_n = 0$ survive even when the op amp saturates?',
        options: ['Because saturation forces more current into the inputs', 'Because the supplies absorb all input current', 'It does not — both constraints fail together', 'Because it rests on the very large input resistance of the input terminals, not on linearity'],
        answer: 3,
        explanation: 'The input resistance of an op amp is typically $1\\ \\text{M}\\Omega$ or more regardless of the output state, so the inputs draw negligible current in saturation as well as in linear operation. Only the voltage constraint depends on linearity.',
      },
      {
        q: 'An op amp with $A = 10^{5}$ and $V_{CC} = 15\\ \\text{V}$ runs open loop (no feedback). A dc input of $+1\\ \\text{mV}$ is applied so that $A(v_p - v_n)$ is positive. What is the output?',
        options: ['$+100\\ \\text{V}$, following the gain exactly', 'Zero, because there is no feedback', '$+15\\ \\text{V}$ — the op amp saturates at the positive rail', 'An undetermined oscillation between the rails'],
        answer: 2,
        explanation: 'Linear operation would demand $v_o = 10^{5} \\times 10^{-3} = 100\\ \\text{V}$, far beyond $V_{CC} = 15\\ \\text{V}$, so the assumption contradicts the supplies and the output saturates at $+V_{CC}$.',
      },
      {
        q: 'In a strain-gage bridge amplifier with $\\Delta R \\ll R$, the output is proportional to:',
        options: ['The absolute gage resistance $R$', 'The square of $\\Delta R$', 'The bridge supply current', 'The fractional change $\\delta = \\Delta R/R$, amplified by $2R_f/R$'],
        answer: 3,
        explanation: 'Linearizing $v_o = \\frac{R_f(2\\Delta R)}{R^2 - (\\Delta R)^2} v_{\\text{ref}}$ for small $\\Delta R$ gives $v_o \\approx \\frac{R_f}{R} 2\\delta v_{\\text{ref}}$: the mean signal cancels and only the fractional gage change survives.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.2
  {
    sectionId: 'elec-ch15-s2',
    readingTime: 10,
    intro: 'Four circuits — inverting, non-inverting, summing and difference — account for almost every op-amp application ever built, and all four yield to the same four-step analysis. The remarkable outcome is that in every configuration the closed-loop gain reduces to a ratio of external resistors, completely hiding the $10^{5}$ open-loop gain inside the chip. Hughes derives them with the virtual node voltage $v = -v_o/A$; Nilsson derives them with KCL at the inverting node; both roads arrive at the same design equations.',
    objectives: [
      'Derive the inverting and non-inverting amplifier gains from KCL at the inverting input',
      'Design amplifiers to a gain specification using realistic resistor values',
      'Derive and apply the weighted summing-amplifier equation',
      'Derive the difference-amplifier gain and its resistor-ratio matching condition',
      'Specify the input-voltage range that keeps each design in its linear region',
    ],
    concepts: [
      {
        term: 'The inverting amplifier',
        kind: 'theorem',
        statement: 'With the input through $R_s$ to the inverting node and feedback $R_f$ from output to that node, the noninverting input grounded, $$v_o = -\\frac{R_f}{R_s}\\, v_s.$$ The output is an **inverted, scaled replica** of the input.',
        detail: 'The virtual ground ($v_n = v_p = 0$) plus $i_n = 0$ forces the source current $v_s/R_s$ entirely through $R_f$: $v_o = -i_f R_f = -(R_f/R_s) v_s$. Hughes’ derivation keeps the small node voltage $v = -v_o/A$ explicit and shows the terms $v_o/A$ and $v_o R_1/(A R_f)$ vanish for $A \\approx 10^{5}$ with resistors of comparable magnitude (his example: $R_1 = 100\\ \\text{k}\\Omega$, $R_f = 1\\ \\text{M}\\Omega$).',
      },
      {
        term: 'Open-loop contrast and the gain bound',
        kind: 'insight',
        statement: 'Remove $R_f$ and the amplifier runs **open loop**: since $i_n \\approx 0$, the inverting node floats to $v_n \\approx v_s$, and the output saturates for any $|v_s| > V_{CC}/A$. With feedback, linear operation requires $R_f/R_s < V_{CC}/|v_s|$.',
        detail: 'Nilsson’s numbers: with $V_{CC} = 15\\ \\text{V}$ and a $10\\ \\text{mV}$ signal, the ratio $R_f/R_s$ must stay below $1500$ — a generous budget. Hughes makes the same point from the other side: the inverting-mode gain formula is trustworthy precisely because the buried terms scale as $1/A$.',
      },
      {
        term: 'The summing amplifier',
        kind: 'theorem',
        statement: 'Extending the inverting circuit to inputs $v_a, v_b, v_c$ through $R_a, R_b, R_c$ gives $$v_o = -\\left(\\frac{R_f}{R_a} v_a + \\frac{R_f}{R_b} v_b + \\frac{R_f}{R_c} v_c\\right),$$ an inverted, **independently scaled sum** of the inputs.',
        detail: 'All the input currents funnel through the virtual ground into $R_f$. With $R_f = R_a = R_b = R_c$ the circuit is a pure inverting adder, $v_o = -(v_a + v_b + v_c)$ — Hughes’ worked instant: $v_a = 2\\ \\text{V}$, $v_b = -4\\ \\text{V}$, $v_c = 6\\ \\text{V}$ gives $v_o = -4\\ \\text{V}$. The number of inputs is unlimited: a 16-track audio mixer uses one summing amplifier with sixteen input resistors, each setting that track’s amplification.',
      },
      {
        term: 'The non-inverting amplifier',
        kind: 'theorem',
        statement: 'Driving the noninverting input while the inverting input sees the divider $R_s$ to ground and $R_f$ to the output gives $$v_o = \\frac{R_s + R_f}{R_s}\\, v_g = \\left(1 + \\frac{R_f}{R_s}\\right) v_g,$$ a scaled, non-inverted replica with **very high input resistance**.',
        detail: 'Because $i_p = 0$, no current flows in $R_g$ and $v_p = v_g$; then $v_n = v_g$ and the KCL at the inverting node gives $v_g/R_s + (v_g - v_o)/R_f = 0$. Hughes’ Example 20.14: a gain of $16$ needs $R_f = 15\\ \\text{k}\\Omega$ with $R_1 = 1\\ \\text{k}\\Omega$. The gain is always $\\ge 1$ — the follower ($R_f = 0$) is the limiting case.',
      },
      {
        term: 'The difference amplifier',
        kind: 'theorem',
        statement: 'With $v_a$ through $R_a$ to the inverting node, feedback $R_b$, and $v_b$ through the divider $R_c$–$R_d$ to the noninverting input, $$v_o = \\frac{R_d (R_a + R_b)}{R_a (R_c + R_d)}\\, v_b - \\frac{R_b}{R_a}\\, v_a.$$ When the **ratios match**, $R_a/R_b = R_c/R_d$, this collapses to $v_o = (R_b/R_a)(v_b - v_a)$.',
        detail: 'The matched condition makes the circuit a pure differential scaler whose output — like every ideal op-amp output — is unaffected by connecting a nonzero load resistance. The scale factor $R_b/R_a$ can exceed unity, which is what makes the circuit the heart of instrumentation.',
      },
      {
        term: 'Differential and common-mode decomposition',
        kind: 'notation',
        statement: 'Any pair of inputs can be rewritten in terms of the **differential mode** $v_{dm} = v_b - v_a$ and the **common mode** $v_{cm} = (v_a + v_b)/2$, in which form the difference-amplifier output is $v_o = A_{cm} v_{cm} + A_{dm} v_{dm}$.',
        detail: 'An ideal difference amplifier (perfectly matched resistors) has $A_{cm} = 0$: it amplifies only the difference. This is why an electrocardiograph works — the micvolt-level heart voltages arrive as $v_{dm}$ while the room’s electrical noise lands almost entirely on $v_{cm}$ and is suppressed.',
      },
      {
        term: 'Gain set by external resistors',
        kind: 'insight',
        statement: 'In all four configurations the closed-loop gain depends **only on the external resistor ratios**, not on the op amp’s own gain — provided $A$ is large.',
        detail: 'Hughes states this as the central design fact: the inherent gain of the op amp does not affect the overall gain. That is what lets a $\\pm 20$% drift in $A$ (from aging or supply variation) leave a closed-loop design untouched — the quantitative version of this claim is the feedback theory of Section 15.4.',
      },
      {
        term: 'Designing from realistic values',
        kind: 'method',
        statement: 'Because only a **ratio** is specified, pick one resistor from the standard table (Appendix H), then compute its partner; when the required value does not exist, synthesize it (two $1\\ \\text{k}\\Omega$ resistors in series make $2\\ \\text{k}\\Omega$).',
        detail: 'Nilsson’s design examples all follow this pattern, and each finishes with a saturation check: solve the gain equation twice, once with $v_o = +V_{CC}$ and once with $v_o = -V_{CC}$, to bracket the permissible input range. Hughes adds a practical note: the non-inverting input is usually earthed through $R_2$ (equal to the parallel seen by the inverting input) to minimize offset-voltage and thermal-drift effects.',
      },
    ],
    examples: [
      {
        title: 'Designing an inverting amplifier (Nilsson Example 5.2)',
        problem: 'Design an inverting amplifier with a gain of $12$ using $\\pm 15\\ \\text{V}$ supplies, then find the range of $v_s$ that keeps the op amp in its linear region.',
        steps: [
          { label: 'Step 1: Choose the resistor pair', text: 'The gain equation requires $R_f/R_s = 12$. From the realistic-value table choose $R_s = 1\\ \\text{k}\\Omega$, so $R_f = 12\\ \\text{k}\\Omega$, giving $v_o = -(12{,}000/1000)\\,v_s = -12 v_s$.' },
          { label: 'Step 2: Bracket the linear range', text: 'Set $v_o = +15\\ \\text{V}$: $15 = -12 v_s$ gives $v_s = -1.25\\ \\text{V}$. Set $v_o = -15\\ \\text{V}$: $-15 = -12 v_s$ gives $v_s = +1.25\\ \\text{V}$.' },
          { label: 'Step 3: State the result', text: 'The op amp stays linear for $-1.25\\ \\text{V} \\le v_s \\le +1.25\\ \\text{V}$; beyond that the output clips at the rail.' },
          { label: 'Step 4: Check the gain budget', text: 'For a $10\\ \\text{mV}$ signal the ratio ceiling would be $V_{CC}/v_s = 15/0.01 = 1500$, so a gain of $12$ sits far inside the linear budget — the design is comfortable.' },
        ],
        result: '$R_s = 1\\ \\text{k}\\Omega$, $R_f = 12\\ \\text{k}\\Omega$; linear operation for $|v_s| \\le 1.25\\ \\text{V}$.',
      },
      {
        title: 'Designing a summing amplifier (Nilsson Example 5.3)',
        problem: 'Design a summing amplifier whose output is $v_o = -4v_a - v_b - 5v_c$, using $\\pm 12\\ \\text{V}$ supplies and a $20\\ \\text{k}\\Omega$ feedback resistor. Then, with $v_a = 2\\ \\text{V}$ and $v_c = -1\\ \\text{V}$, find the permissible range of $v_b$; finally, with $v_a = 2\\ \\text{V}$, $v_b = 3\\ \\text{V}$, $v_c = -1\\ \\text{V}$, find the largest feedback resistor before saturation.',
        steps: [
          { label: 'Step 1: Solve for the input resistors', text: 'Matching coefficients in the summing equation with $R_f = 20\\ \\text{k}\\Omega$: $R_a = 20\\text{k}/4 = 5\\ \\text{k}\\Omega$; $R_b = 20\\text{k}/1 = 20\\ \\text{k}\\Omega$; $R_c = 20\\text{k}/5 = 4\\ \\text{k}\\Omega$.' },
          { label: 'Step 2: Range of $v_b$', text: 'With $v_a = 2$ and $v_c = -1$: $v_o = -4(2) - v_b - 5(-1) = -3 - v_b$, so $v_b = -3 - v_o$. Substituting $v_o = \\pm 12\\ \\text{V}$ gives $-15\\ \\text{V} \\le v_b \\le 9\\ \\text{V}$.' },
          { label: 'Step 3: Largest feedback resistor', text: 'With all three inputs active, $v_o = -\\frac{R_f}{5000}(2) - \\frac{R_f}{20{,}000}(3) - \\frac{R_f}{4000}(-1) = -\\frac{6 R_f}{20{,}000}$. Saturation will occur at the negative rail, $-12\\ \\text{V}$.' },
          { label: 'Step 4: Solve', text: '$-\\frac{6 R_f}{20{,}000} = -12$ gives $R_f = 40\\ \\text{k}\\Omega$ — the largest feedback resistance that keeps this design linear for the stated inputs.' },
        ],
        result: '$R_a = 5\\ \\text{k}\\Omega$, $R_b = 20\\ \\text{k}\\Omega$, $R_c = 4\\ \\text{k}\\Omega$; $-15 \\le v_b \\le 9\\ \\text{V}$; $R_{f,\\max} = 40\\ \\text{k}\\Omega$.',
      },
      {
        title: 'Designing a difference amplifier (Nilsson Example 5.5)',
        problem: 'Design a difference amplifier with gain $8$ using $\\pm 8\\ \\text{V}$ supplies, then find the range of $v_b$ that avoids saturation when $v_a = 1\\ \\text{V}$.',
        steps: [
          { label: 'Step 1: Pick the gain pair', text: 'The simplified equation requires $R_b/R_a = 8$. Choose $R_b = 12\\ \\text{k}\\Omega$ and $R_a = 1.5\\ \\text{k}\\Omega$ from the realistic-value table.' },
          { label: 'Step 2: Match the divider', text: 'The ratio condition $R_a/R_b = R_c/R_d$ is satisfied by the simple choice $R_c = R_a = 1.5\\ \\text{k}\\Omega$ and $R_d = R_b = 12\\ \\text{k}\\Omega$.' },
          { label: 'Step 3: Bracket with $v_a = 1\\ \\text{V}$', text: 'The gain equation is $v_o = 8(v_b - 1)$. At the positive rail, $v_o = +8\\ \\text{V}$ gives $v_b = 8/8 + 1 = 2\\ \\text{V}$; at the negative rail, $v_o = -8\\ \\text{V}$ gives $v_b = -8/8 + 1 = 0\\ \\text{V}$.' },
          { label: 'Step 4: Verify', text: 'Both bounds sit inside the supplies, so the design is linear for $0\\ \\text{V} \\le v_b \\le 2\\ \\text{V}$ when $v_a = 1\\ \\text{V}$; the output responds only to $v_b - v_a$, scaled eightfold.' },
        ],
        result: '$R_a = R_c = 1.5\\ \\text{k}\\Omega$, $R_b = R_d = 12\\ \\text{k}\\Omega$; linear for $0 \\le v_b \\le 2\\ \\text{V}$ with $v_a = 1\\ \\text{V}$.',
      },
    ],
    keyTakeaways: [
      'Inverting amplifier: $v_o = -(R_f/R_s) v_s$; summing amplifier: $v_o = -(R_f/R_a v_a + R_f/R_b v_b + \\cdots)$; both exploit the virtual ground at the inverting node.',
      'Non-inverting amplifier: $v_o = (1 + R_f/R_s) v_g$ with near-infinite input resistance — the topology of choice for high-impedance sources.',
      'Difference amplifier: $v_o = (R_b/R_a)(v_b - v_a)$ provided $R_a/R_b = R_c/R_d$; it rejects the common-mode average of the two inputs.',
      'Every one of these gains is a ratio of external resistors, immune to the op amp’s own gain as long as $A$ is large.',
      'Linear operation is bounded by the supplies: solve for the input that produces $v_o = \\pm V_{CC}$ to bracket the usable input range.',
      'Open loop, an op amp saturates for any input beyond $V_{CC}/A$ — feedback is not a refinement but a necessity.',
      'Design from standard values: only ratios matter, and missing values can be synthesized (e.g. two $1\\ \\text{k}\\Omega$ in series for $2\\ \\text{k}\\Omega$).',
    ],
    quiz: [
      {
        q: 'A summing amplifier has $R_f = 200\\ \\text{k}\\Omega$ with inputs $v_a = +0.6\\ \\text{V}$ through $R_a = 400\\ \\text{k}\\Omega$ and $v_b = -1.4\\ \\text{V}$ through $R_b = 100\\ \\text{k}\\Omega$ (Hughes Example 20.13). What is $v_o$?',
        options: [`$-2.5\\ \\text{V}$`, `$+0.8\\ \\text{V}$`, `$-1.0\\ \\text{V}$`, `$+2.5\\ \\text{V}$`],
        answer: 3,
        explanation: '$v_o = -200\\text{k}(0.6/400\\text{k} - 1.4/100\\text{k}) = -200\\text{k}(0.0015 - 0.014)\\ \\text{V} = +2.5\\ \\text{V}$. The more heavily weighted input ($R_b$) dominates the sum.',
      },
      {
        q: 'Which configuration offers the highest input resistance to the signal source?',
        options: ['The non-inverting amplifier', 'The summing amplifier', 'The inverting amplifier', 'The difference amplifier, driven at either input'],
        answer: 0,
        explanation: 'In the non-inverting circuit the source drives the op amp’s own noninverting input, through which no current flows ($i_p = 0$) — the input resistance is that of the ideal op amp itself. The inverting and summing circuits load the source with $R_s$.',
      },
      {
        q: 'A matched difference amplifier has $R_b/R_a = 8$, $v_a = 1\\ \\text{V}$ and $v_b = 0.5\\ \\text{V}$. The output is:',
        options: [`$+12\\ \\text{V}$`, `$+4\\ \\text{V}$`, `$-4\\ \\text{V}$`, `$0\\ \\text{V}$`],
        answer: 2,
        explanation: '$v_o = 8(v_b - v_a) = 8(0.5 - 1) = -4\\ \\text{V}$. Only the difference of the inputs is amplified; the $0.75\\ \\text{V}$ common-mode component is rejected.',
      },
      {
        q: 'Hughes designs an inverting amplifier for a gain of $-20$ using $R_1 = 1\\ \\text{k}\\Omega$. What feedback resistor is required (Example 20.12)?',
        options: [`$R_f = 20\\ \\text{k}\\Omega$`, `$R_f = 200\\ \\text{k}\\Omega$`, `$R_f = 10\\ \\text{k}\\Omega$`, `$R_f = 2\\ \\text{k}\\Omega$`],
        answer: 0,
        explanation: 'The gain is $-R_f/R_1$, so $R_f = 20 \\times 1\\ \\text{k}\\Omega = 20\\ \\text{k}\\Omega$. Because only the ratio matters, the absolute values are free design choices.',
      },
      {
        q: 'Why does the closed-loop gain of these amplifiers not depend on the open-loop gain $A$?',
        options: ['Because $A$ is fixed by the manufacturer to exactly $10^{5}$', 'Because feedback forces the input difference toward zero, leaving a resistor ratio to set the gain', 'Because the supplies clamp the output before $A$ matters', 'Because the input currents cancel the gain error'],
        answer: 1,
        explanation: 'With $A \\approx 10^{5}$, the differential input needed to produce any in-range output is $v_o/A$ — microvolts. The virtual short then makes the circuit a pure resistor network, so only the external ratios set the gain.',
      },
      // PYQ-pattern: GATE 2021 — inverting amplifier output (rephrased, values changed)
      {
        q: 'An ideal inverting amplifier uses $R_{1} = 12$ kΩ and $R_{f} = 48$ kΩ with $0.80$ V at the input. Its output is closest to:',
        options: ['+3.2 V', '−3.2 V', '+6.4 V', '−0.20 V'],
        answer: 1,
        explanation: 'Step 1 — Given: $R_{1} = 12$ kΩ to the virtual-earth node, $R_{f} = 48$ kΩ feedback, $V_{in} = 0.80$ V, ideal rules assumed. Step 2 — Governing result: virtual short forces the full input across $R_{1}$ and the same current through $R_{f}$, so $A_{v} = -\\frac{R_{f}}{R_{1}}$. Step 3 — Algebra: $A_{v} = -\\frac{48}{12} = -4$; $V_{o} = -4 \\times 0.80 = -3.2$ V. Step 4 — Sanity check: input current $0.80$ V divided by $12$ kΩ is $66.7$ μA, feedback drop $66.7$ μA times $48$ kΩ is $3.2$ V, and no clipping occurs on typical rails. Step 5 — Distractor analysis: positive $3.2$ V belongs to the non-inverting form, $6.4$ V doubles the ratio, and $0.20$ V inverts it. Step 6 — Conclude: the output is about −3.2 V.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.3
  {
    sectionId: 'elec-ch15-s3',
    readingTime: 8,
    intro: 'The ideal op amp is a lie that circuit designers find convenient — and, used carefully, almost harmless. This section quantifies the lie: Nilsson’s three-defect model (finite input resistance, finite gain, nonzero output resistance) predicts how far real gains drift from the textbook ratios, and Hughes’ treatment of the differential amplifier exposes the second lie, the mismatched resistor pair that lets common-mode signals leak through. Both books converge on the same figure of merit: the common-mode rejection ratio.',
    objectives: [
      'Sketch the realistic op-amp model and compute gains with it',
      'Quantify the error of the ideal model using the book’s worked numbers',
      'Define input bias currents, offset voltage and their standard cures',
      'Compute common-mode gain and CMRR from resistor mismatches',
      'Express CMRR in decibels and interpret datasheet values',
    ],
    concepts: [
      {
        term: 'The realistic model',
        kind: 'definition',
        statement: 'The more realistic op-amp model adds **three defects**: a finite input resistance $R_i$, a finite open-loop gain $A$, and a nonzero output resistance $R_o$, replacing the constraints $v_p = v_n$ and $i_p = i_n = 0$ with an explicit equivalent circuit.',
        detail: 'Analysis with this model means two KCL equations (at the inverting node and at the output node) instead of one. The inverting-amplifier result (Nilsson Eq. 5.22) collapses back to $v_o = -(R_f/R_s) v_s$ in the limit $R_o \\to 0$, $R_i \\to \\infty$, $A \\to \\infty$ — a useful check that the ideal formula is the leading term of the exact one.',
      },
      {
        term: 'How close to ideal?',
        kind: 'insight',
        statement: 'For Nilsson’s non-inverting design ($R_f = 10\\ \\text{k}\\Omega$, $R_s = 2\\ \\text{k}\\Omega$, $R_g = 1\\ \\text{k}\\Omega$) with $A = 50{,}000$, $R_i = 100\\ \\text{k}\\Omega$ and $R_o = 7.5\\ \\text{k}\\Omega$, the realistic model gives $v_o/v_g = 5.9988$ against the ideal $6$ — a **0.02 percent** error.',
        detail: 'The same analysis exposes the microscopic leftovers of the ideal assumptions: $v_p - v_n = 192.9\\ \\mu\\text{V}$ (not zero) and $i_g = 3.86\\ \\text{nA}$ (not zero). Both are negligible for most purposes, yet they set the noise floor of precision design.',
      },
      {
        term: 'Bias currents and offset voltage',
        kind: 'definition',
        statement: 'The **offset voltage** is the voltage difference between the op-amp input terminals required to bring the output voltage to zero; **bias currents** are the small dc currents the inputs actually draw, and both drift with ambient temperature.',
        detail: 'Hughes’ standard cures: earth the non-inverting input through a resistance equal to that seen by the inverting input, which minimizes the worst offset and thermal-drift effects; and include an output resistance of about $50$–$200\\ \\Omega$ to protect against a short-circuited load. The µA 741’s offset-null pins exist precisely to trim the residual offset, though degradation is usually negligible.',
      },
      {
        term: 'Finite bandwidth and the gain–bandwidth product',
        kind: 'insight',
        statement: 'The open-loop gain of a general-purpose op amp falls at roughly $-20\\ \\text{dB}$ per decade above a low corner frequency, so the **gain–bandwidth product (GBW)** is approximately constant: a 741-class device with $\\text{GBW} \\approx 1\\ \\text{MHz}$ delivers only about $100\\ \\text{kHz}$ of bandwidth at a closed-loop gain of $10$.',
        detail: 'Hughes’ Section 18.7 shows the complementary view: applying negative feedback lowers the mid-band gain and extends the bandwidth in exchange, so the product of the two stays roughly fixed. This is why the “constant gain over a wide frequency range” of the ideal property list is a property of the *closed loop*, never of the bare chip.',
      },
      {
        term: 'Common-mode and differential gains',
        kind: 'notation',
        statement: 'Writing the difference amplifier’s inputs as $v_{cm} \\pm \\tfrac{1}{2} v_{dm}$ makes its output $$v_o = A_{cm} v_{cm} + A_{dm} v_{dm},$$ where $A_{cm}$ is the **common-mode gain** and $A_{dm}$ the **differential-mode gain**.',
        detail: 'For perfectly matched resistors ($R_c = R_a$, $R_d = R_b$) the coefficient of $v_{cm}$ vanishes identically. Nonzero $A_{cm}$ has exactly two causes: resistor ratios that fail the matching condition, or a nonideal op amp whose internal stages are themselves imperfectly differential.',
      },
      {
        term: 'CMRR and resistor mismatch',
        kind: 'theorem',
        statement: 'The **common-mode rejection ratio** is $$\\text{CMRR} = \\left|\\frac{A_{dm}}{A_{cm}}\\right|,$$ and for a mismatch parametrized by $R_a = (1 - \\epsilon) R_c$, $R_d = R_b$ it approaches $$\\text{CMRR} \\approx \\frac{1 + R_b/R_a}{|\\epsilon|}.$$',
        detail: 'The mismatched common-mode gain is $A_{cm} \\approx -\\epsilon R_b/(R_a + R_b)$ and the differential gain barely moves: $A_{dm} \\approx (R_b/R_a)[1 - (\\epsilon/2) R_a/(R_a + R_b)]$. Matched resistors ($\\epsilon = 0$) give infinite CMRR; even when mismatched, a large differential gain $R_b/R_a$ rescues the ratio.',
      },
      {
        term: 'Hughes’ CMRR numbers',
        kind: 'insight',
        statement: 'A differential amplifier with open-circuit gain $100$ and inputs $3.25\\ \\text{V}$ and $3.15\\ \\text{V}$ produces $10\\ \\text{V}$ from the $0.1\\ \\text{V}$ difference while ignoring the $3.20\\ \\text{V}$ mean; a real device delivers $26\\ \\text{mV}$ from that common-mode input, so the **common-mode gain** is $A_{com} = 0.0081$ and CMRR $= 12{,}300$, or $81.8\\ \\text{dB}$.',
        detail: 'Hughes defines $A_{com} = v_o / v_{com}$ and CMRR as the ratio of differential to common-mode gain. The decibel conversion is $20 \\log_{10} 12{,}300 = 81.8\\ \\text{dB}$ — the figure of merit by which datasheets rate how nearly ideal an op amp is.',
      },
    ],
    examples: [
      {
        title: 'Analyzing a non-inverting amplifier with the realistic model (Nilsson Example 5.7)',
        problem: 'The non-inverting design of Example 5.4 ($R_f = 10\\ \\text{k}\\Omega$, $R_s = 2\\ \\text{k}\\Omega$, $R_g = 1\\ \\text{k}\\Omega$, no load) is re-analyzed with $A = 50{,}000$, $R_i = 100\\ \\text{k}\\Omega$ and $R_o = 7.5\\ \\text{k}\\Omega$. With $v_g = 1\\ \\text{V}$, find (a) $v_o/v_g$, (b) $v_n$ and $v_p$, (c) $v_p - v_n$, and (d) the source current $i_g$.',
        steps: [
          { label: 'Step 1: Apply the exact expression', text: 'Solving the two node equations for the unloaded non-inverting stage gives $\\frac{v_o}{v_g} = \\frac{(R_f + R_s) + R_s R_o/(A R_i)}{R_s + (R_o/A)\\left[1 + (R_s + R_g)/R_i\\right] + \\left[R_f R_s + (R_f + R_s)(R_i + R_g)\\right]/(A R_i)} = 5.9988$.' },
          { label: 'Step 2: Interpret the gain', text: 'The ideal design gain of $6$ is met to within $0.02$%: with a loop gain of order $A R_s/(R_s + R_f) \\approx 8300$, the error scales as its reciprocal.' },
          { label: 'Step 3: Recover the terminal voltages', text: 'With $v_g = 1\\ \\text{V}$ the output is $5.9988\\ \\text{V}$. Solving the inverting-node equation gives $v_n = 0.999803\\ \\text{V}$, and the divider between $R_g$ and $R_i$ gives $v_p = 0.999996\\ \\text{V}$.' },
          { label: 'Step 4: Quantify the “zero” quantities', text: 'The input difference is $v_p - v_n = 192.9\\ \\mu\\text{V}$, and the source current is $i_g = (1 - 0.999996)/1000 = 3.86\\ \\text{nA}$ — both tiny, neither zero.' },
        ],
        result: '$v_o/v_g = 5.9988$; $v_p - v_n = 192.9\\ \\mu\\text{V}$; $i_g = 3.86\\ \\text{nA}$: the ideal model is accurate to parts in ten thousand here.',
      },
      {
        title: 'CMRR from resistor mismatch (Nilsson Example 5.6)',
        problem: 'In the difference amplifier designed in Example 5.5 ($R_a = R_c = 1.5\\ \\text{k}\\Omega$, $R_b = R_d = 12\\ \\text{k}\\Omega$, gain $8$), first $R_c$ then $R_d$ is $10$% larger than nominal, all else unchanged. Compute $A_{cm}$, $A_{dm}$ and the CMRR in each case.',
        steps: [
          { label: 'Step 1: Perturb $R_c$', text: 'With $R_c = 1650\\ \\Omega$: $A_{cm} = \\frac{R_a R_d - R_b R_c}{R_a (R_c + R_d)} = \\frac{(1500)(12{,}000) - (12{,}000)(1650)}{1500(13{,}650)} = -0.0879$.' },
          { label: 'Step 2: Differential gain barely moves', text: '$A_{dm} = \\frac{R_d (R_a + R_b) + R_b (R_c + R_d)}{2 R_a (R_c + R_d)} = \\frac{(12{,}000)(13{,}500) + (12{,}000)(13{,}650)}{2(1500)(13{,}650)} = 7.956$, so $\\text{CMRR} = 7.956 / 0.0879 = 90.5$.' },
          { label: 'Step 3: Perturb $R_d$ instead', text: 'With $R_d = 13{,}200\\ \\Omega$: $A_{cm} = \\frac{(1500)(13{,}200) - (12{,}000)(1500)}{1500(14{,}700)} = 0.08163$ and $A_{dm} = \\frac{(13{,}200)(13{,}500) + (12{,}000)(14{,}700)}{2(1500)(14{,}700)} = 8.0408$.' },
          { label: 'Step 4: Compare', text: 'Now $\\text{CMRR} = 8.0408/0.08163 = 98.5$ — still below $100$. A $10$% resistor error in a gain-$8$ stage caps the rejection near $40\\ \\text{dB}$, which is why precision difference amplifiers use matched resistor networks.' },
        ],
        result: '$R_c$ high: $A_{cm} = -0.0879$, $A_{dm} = 7.956$, CMRR $= 90.5$; $R_d$ high: $A_{cm} = 0.08163$, $A_{dm} = 8.0408$, CMRR $= 98.5$.',
      },
    ],
    keyTakeaways: [
      'The realistic model adds finite $R_i$, finite $A$ and nonzero $R_o$; its exact gain formulas reduce to the ideal ones in the limit, confirming the ideal results as leading terms.',
      'With $A = 50{,}000$, a nominal gain of $6$ becomes $5.9988$, with $v_p - v_n = 192.9\\ \\mu\\text{V}$ and $i_g = 3.86\\ \\text{nA}$ — the ideal model errs by only hundredths of a percent.',
      'Offset voltage is the input difference that zeroes the output; bias currents and offset both drift with temperature, and are minimized by balancing the resistances seen by the two inputs.',
      'Finite bandwidth caps real performance: gain–bandwidth product is roughly constant, so a $1\\ \\text{MHz}$ GBW op amp at gain $10$ delivers about $100\\ \\text{kHz}$.',
      'CMRR $= |A_{dm}/A_{cm}|$; a fractional resistor mismatch $\\epsilon$ limits it to approximately $(1 + R_b/R_a)/|\\epsilon|$.',
      'Hughes’ worked case: $100$ differential gain with $26\\ \\text{mV}$ from a $3.2\\ \\text{V}$ common input gives CMRR $= 12{,}300 \\approx 81.8\\ \\text{dB}$.',
    ],
    quiz: [
      {
        q: 'The common-mode rejection ratio of a difference amplifier is defined as:',
        options: ['$A_{cm}/A_{dm}$, smaller is better', '$|A_{dm}/A_{cm}|$, larger is better', 'The product $A_{dm} \\times A_{cm}$', 'The output voltage divided by the supply voltage'],
        answer: 1,
        explanation: 'CMRR is the ratio of differential-mode gain to common-mode gain. An ideal difference amplifier has $A_{cm} = 0$ and hence infinite CMRR; real designs quote it in decibels, Hughes’ example reaching $81.8\\ \\text{dB}$.',
      },
      {
        q: 'A differential amplifier has voltage gain $100$. A common input of $3.20\\ \\text{V}$ to both terminals produces $26\\ \\text{mV}$ of output (Hughes Example 20.16). What are $A_{com}$ and the CMRR?',
        options: [`$A_{com} = 0.0081$, CMRR $= 12{,}300$`, `$A_{com} = 0.081$, CMRR $= 1230$`, `$A_{com} = 8.1$, CMRR $= 12.3$`, `$A_{com} = 0.0081$, CMRR $= 123$`],
        answer: 0,
        explanation: '$A_{com} = 26 \\times 10^{-3}/3.20 = 0.0081$; CMRR $= 100/0.0081 = 12{,}300$, which is $20 \\log_{10} 12{,}300 \\approx 81.8\\ \\text{dB}$.',
      },
      {
        q: 'In Nilsson’s mismatch formula, a fractional resistor error $\\epsilon$ in a difference amplifier with gain $R_b/R_a$ produces approximately what CMRR?',
        options: [`$|\\epsilon|$`, `$|\\epsilon|/(1 + R_b/R_a)$`, `$(1 + R_b/R_a)/|\\epsilon|$`, 'It stays infinite — mismatch only affects gain'],
        answer: 2,
        explanation: 'The mismatch-induced common-mode gain is $A_{cm} \\approx -\\epsilon R_b/(R_a + R_b)$ while $A_{dm} \\approx R_b/R_a$, so the ratio is $(1 + R_b/R_a)/|\\epsilon|$. Perfect matching ($\\epsilon = 0$) makes the CMRR infinite, and a large differential gain helps tolerate mismatch.',
      },
      {
        q: 'An op amp has a gain–bandwidth product of about $1\\ \\text{MHz}$. If it is wired for a closed-loop gain of $10$, its small-signal bandwidth is approximately:',
        options: ['$1\\ \\text{MHz}$ — bandwidth is unaffected by gain', `$10\\ \\text{Hz}$`, `$10\\ \\text{MHz}$`, `$100\\ \\text{kHz}$`],
        answer: 3,
        explanation: 'Because the open-loop gain falls at about $20\\ \\text{dB}$ per decade, the product of closed-loop gain and closed-loop bandwidth roughly equals the GBW: $1\\ \\text{MHz}/10 = 100\\ \\text{kHz}$. Feedback trades gain for bandwidth, as Hughes’ Section 18.7 shows.',
      },
      {
        q: 'Which statement about the two ideal op-amp constraints under the realistic model is correct?',
        options: ['Both fail, but the current error ($\\text{nA}$) is typically far less consequential than the voltage error ($\\text{mV}$ scale of the linear region)', 'Both constraints hold exactly for any $A > 10^{4}$', 'The voltage constraint still holds but the current constraint fails', 'The realistic model only changes the output resistance'],
        answer: 0,
        explanation: 'With finite $A$ the inputs differ by $v_o/A$ (hundreds of microvolts in the worked example), and with finite $R_i$ a few nanoamps flow — both nonzero. The realism matters mainly in precision and high-impedance design.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.4
  {
    sectionId: 'elec-ch15-s4',
    readingTime: 9,
    intro: 'Feedback is the deep idea underneath every op-amp circuit: return a fraction $\\beta$ of the output to the input, and the amplifier’s character is rewritten. Hughes derives the master relation $G_{vf} = A/(1 - \\beta A)$ for series-voltage feedback and follows it through gain stabilization, resistance transformation, bandwidth extension and distortion reduction — then warns what happens when the loop gain reaches unity and the amplifier becomes an oscillator.',
    objectives: [
      'Derive the closed-loop gain relation for series-voltage feedback',
      'Quantify gain stabilization using the book’s worked numbers',
      'Predict the effect of negative feedback on input and output resistance',
      'Explain bandwidth extension and the reduction of distortion',
      'State the oscillation condition and the stability design problem it creates',
    ],
    concepts: [
      {
        term: 'Feedback and its four types',
        kind: 'definition',
        statement: '**Feedback** is the process whereby a signal derived in the output section of the amplifier is fed back into the input section; the fed-back signal can be a voltage or a current, applied in series or in shunt, giving four types: **series-voltage, series-current, shunt-voltage and shunt-current**.',
        detail: 'The characteristics produced by the four types are similar in some respects and differ in others. Hughes develops series-voltage feedback as the representative case — a network $\\beta$ (in its simplest form two resistors across the output forming a divider) returns the fraction $V_f = \\beta V_2$ in series with the input.',
      },
      {
        term: 'The closed-loop gain relation',
        kind: 'theorem',
        statement: 'With $V_a = V_1 + \\beta V_2$ feeding the amplifier, $$G_{vf} = \\frac{V_2}{V_1} = \\frac{A}{1 - \\beta A}.$$ If $|1 - \\beta A| > 1$ the feedback is **negative (degenerative)**; if less than $1$, **positive (regenerative)**.',
        detail: 'The simplest negative arrangement is a phase-inverting amplifier ($A$ negative) with a positive resistive fraction $\\beta$, for which $|G_{vf}| = |A|/(1 + \\beta|A|)$. The product $\\beta A$ is the **loop gain** — the single number that governs everything feedback does.',
      },
      {
        term: 'Gain stabilization by deep feedback',
        kind: 'insight',
        statement: 'When the loop gain is large, $|\\beta A| \\gg 1$, $$|G_{vf}| \\approx \\frac{1}{\\beta}$$ — the closed-loop gain is **set by the feedback network alone**, and wild swings of $A$ barely move it.',
        detail: 'Hughes’ illustration: an amplifier with gain $2000$ and feedback ratio $\\beta = 0.25$ has $G_{vf} = -2000/(1 + 500) = -3.99$; let $A$ collapse to $1000$ (a $50$% loss from aging or supply drift) and $G_{vf} = -1000/251 = -3.98$. The overall gain is much reduced, but it is now stabilized and consistent.',
      },
      {
        term: 'Input and output resistance transformation',
        kind: 'theorem',
        statement: 'Series-voltage feedback **multiplies the input resistance** and **divides the output resistance** by the same factor: $$R_{if} = R_i (1 - \\beta A), \\qquad R_{of} = \\frac{R_o}{1 - \\beta A}.$$',
        detail: 'Negative series feedback therefore **raises** input resistance and **lowers** output resistance — exactly the direction a voltage amplifier wants. The proof of $R_{of}$ compares the open-circuit output voltage with the short-circuit output current; the derivation of $R_{if}$ factors $V_1 = V_a - \\beta A V_a$.',
      },
      {
        term: 'Bandwidth and distortion',
        kind: 'insight',
        statement: 'Applying negative feedback flattens the response: the new cut-off frequencies $f_1^{\\prime}$ and $f_2^{\\prime}$ move **outward** from the old ones, so **the bandwidth is increased**; and each of the three distortion types — **phase, amplitude (frequency) and harmonic** — is reduced considerably.',
        detail: 'Harmonic distortion arises in nonlinear amplifiers: a pure $1\\ \\text{kHz}$ input emerges with added components at $2\\ \\text{kHz}$, $3\\ \\text{kHz}$ and so on. Amplitude distortion is unequal amplification of frequencies, visible directly on the frequency-response characteristic; phase distortion is frequency-dependent delay. Since all three track the basic gain $A$, taming the gain with feedback tames them together.',
      },
      {
        term: 'Positive feedback and the oscillator condition',
        kind: 'insight',
        statement: 'When $\\beta A = 1$, in **both magnitude and phase**, the closed-loop gain becomes infinite: the amplifier produces an output with no externally applied input — it is an **oscillator** providing its own input through the feedback network.',
        detail: 'For $\\beta A > 1$ the output amplitude grows until nonlinearity (cut-off, saturation) reduces the effective $A$ until the condition settles at $\\beta A = 1$ — a transient condition, not a steady design point. The practical danger: feedback designed to be negative in the passband can turn positive at high or low frequencies where extra phase shift accumulates, so much of feedback design is about keeping the amplifier stable against oscillation.',
      },
      {
        term: 'Designing against instability',
        kind: 'method',
        statement: 'To find the maximum safe feedback: locate the frequency $f_x$ where the phase shift is zero but the gain has fallen; set the loop gain to **just below unity** there, so $\\beta_{\\max} = 1/|A(f_x)|$.',
        detail: 'Hughes’ Example 18.9: a $-1000$ passband amplifier is $15\\ \\text{dB}$ down at $f_x$ with zero phase, so $|A(f_x)| = 1000/5.62 = 178$ and the maximum usable feedback fraction is $\\beta = 1/178 = 0.0058$. Oscillators deliberately violate this bound at one chosen frequency — the subject of Chapter 17.',
      },
    ],
    examples: [
      {
        title: 'Gain stabilization under load change (Hughes Example 18.7)',
        problem: 'An amplifier with open-circuit voltage gain $-1000$ and output resistance $100\\ \\Omega$ feeds a $900\\ \\Omega$ load. One-fiftieth of the output voltage is fed back in series with the input. Find the voltage gain with feedback, and the percentage change in that gain when the basic amplifier’s gain changes by $50$% because of the load.',
        steps: [
          { label: 'Step 1: Load the basic amplifier', text: 'The loaded gain is $A_1 = A \\cdot R_L/(R_o + R_L) = (-1000)(900/1000) = -900$.' },
          { label: 'Step 2: Apply the feedback relation', text: '$G_{vf} = \\frac{A_1}{1 - \\beta A_1} = \\frac{-900}{1 - \\frac{1}{50}(-900)} = \\frac{-900}{19} = -47.4$.' },
          { label: 'Step 3: Repeat at the lower gain', text: 'If the basic gain halves to $A_2 = -450$ (a $50$% change), then $G_{vf} = \\frac{-450}{1 + 9} = -45.0$.' },
          { label: 'Step 4: Compare', text: 'The closed-loop gain moved from $47.4$ to $45.0$: a change of $2.4$ in $47.4$, i.e. $2.4/47.4 \\times 100 = 5.1$%. A halving of the raw gain cost only five percent of the closed-loop gain.' },
        ],
        result: '$G_{vf} = -47.4$ falling to $-45.0$ — a $5.1$% change in closed-loop gain against a $50$% change in the raw amplifier.',
      },
      {
        title: 'Specifying a feedback design (Hughes Example 18.8)',
        problem: 'An amplifier must have an overall voltage gain of $100$ that does not vary by more than $1.0$%, built from a basic amplifier whose gain can vary by $20$%. Determine the minimum required gain $A$ and the feedback factor $\\beta$.',
        steps: [
          { label: 'Step 1: Write both operating points', text: 'Nominal: $100 = \\frac{A}{1 + \\beta A}$. Degraded by $20$%: $99 = \\frac{0.8A}{1 + 0.8\\beta A}$ (a $1$% loss of $100$).' },
          { label: 'Step 2: Eliminate $\\beta$', text: 'From the first equation $100 + 100\\beta A = A$. Multiplying the second by $1.25$ gives $123.75 + 99\\beta A = A$. Subtracting: $\\beta A = 23.75$.' },
          { label: 'Step 3: Solve for $A$', text: 'Substituting back, $A = 100 + 100(23.75) = 2475$. This is the minimum raw gain the design can tolerate.' },
          { label: 'Step 4: Solve for $\\beta$', text: '$\\beta = 23.75/2475 = 0.0096$ (Hughes’ $2375/247{,}500$). Check: $2475/(1 + 0.0096 \\times 2475) = 2475/24.76 \\approx 100$, and the degraded point gives $\\approx 99$, meeting the $1$% spec.' },
        ],
        result: 'Minimum basic gain $A = 2475$ with feedback factor $\\beta \\approx 0.0096$.',
      },
      {
        title: 'Feedback transforming input resistance (Hughes Example 18.10)',
        problem: 'An amplifier has open-circuit gain $1000$, input resistance $2000\\ \\Omega$ and output resistance $1.0\\ \\Omega$, and must drive $0.5\\ \\text{A}$ into a $4.0\\ \\Omega$ load. Find the required input signal voltage, then repeat with negative series-voltage feedback returning one-tenth of the output.',
        steps: [
          { label: 'Step 1: Without feedback — current gain', text: 'The current gain is $I_2/I_1 = A R_i/(R_o + R_L) = (1000)(2000)/5 = 4.0 \\times 10^{5}$, so driving $0.5\\ \\text{A}$ needs $I_1 = 0.5/4.0 \\times 10^{5} = 1.25\\ \\mu\\text{A}$.' },
          { label: 'Step 2: Without feedback — input voltage', text: '$V_1 = I_1 R_i = (1.25 \\times 10^{-6})(2000) = 2.5\\ \\text{mV}$.' },
          { label: 'Step 3: With feedback — new input resistance', text: 'The loaded gain is $A_1 = 1000 \\times 4/5 = 800$, so $R_{if} = R_i (1 + \\beta A_1) = 2000\\left(1 + \\tfrac{1}{10} \\times 800\\right) = 2000 \\times 81 = 162\\ \\text{k}\\Omega$.' },
          { label: 'Step 4: With feedback — input voltage', text: 'The same output current still requires $I_1 = 1.25\\ \\mu\\text{A}$, so $V_1 = (1.25 \\times 10^{-6})(162{,}000) = 0.202\\ \\text{V} \\approx 202\\ \\text{mV}$ — eighty-one times more drive, the price of the same stabilization.' },
        ],
        result: 'Without feedback $V_1 = 2.5\\ \\text{mV}$; with $\\beta = 0.1$, $R_{if} = 162\\ \\text{k}\\Omega$ and $V_1 = 202\\ \\text{mV}$.',
      },
    ],
    keyTakeaways: [
      'Series-voltage feedback obeys $G_{vf} = A/(1 - \\beta A)$; negative feedback corresponds to $|1 - \\beta A| > 1$, positive to $|1 - \\beta A| < 1$.',
      'Deep feedback ($\\beta A \\gg 1$) makes $|G_{vf}| \\approx 1/\\beta$: the gain belongs to the feedback network, not the amplifier — $A$ halving moved Hughes’ gain only from $-3.99$ to $-3.98$.',
      'Negative series-voltage feedback multiplies input resistance by $(1 - \\beta A)$ and divides output resistance by the same factor — closer to the ideal voltage amplifier.',
      'Negative feedback extends the bandwidth (cut-offs move outward) and reduces phase, amplitude and harmonic distortion together.',
      '$\\beta A = 1$ in magnitude and phase is the oscillator condition; feedback that is negative in the passband can turn regenerative at the frequency extremes, so stability is a design constraint.',
      'The safe-feedback bound comes from the worst frequency: $\\beta_{\\max} = 1/|A(f_x)|$ at the zero-phase frequency $f_x$.',
    ],
    quiz: [
      {
        q: 'An amplifier has gain $A = -2000$ and series-voltage feedback with $\\beta = 0.25$. What is the closed-loop gain $G_{vf}$?',
        options: [`$-500$`, '$-4$ (approximately $-3.99$)', '$-2000/500 \\approx -3.99$ only if $A$ is positive', `$+500$`],
        answer: 1,
        explanation: '$G_{vf} = \\frac{A}{1 - \\beta A} = \\frac{-2000}{1 - 0.25(-2000)} = \\frac{-2000}{501} = -3.99$. Since $\\beta A \\gg 1$, this is essentially $-1/\\beta = -4$, set entirely by the feedback network.',
      },
      {
        q: 'The condition for a feedback amplifier to oscillate is:',
        options: ['$\\beta A = 1$ in both magnitude and phase', '$\\beta A = 0$ exactly', 'Any negative feedback at all', '$\\beta A < 1$ but positive'],
        answer: 0,
        explanation: 'At $\\beta A = 1$ the denominator of $G_{vf} = A/(1 - \\beta A)$ vanishes: infinite gain, meaning the amplifier supplies its own input. The condition must be satisfied in magnitude and phase; it is exploited deliberately in oscillators (Chapter 17).',
      },
      {
        q: 'Negative series-voltage feedback does what to the input and output resistances?',
        options: ['Raises both', 'Lowers both', 'Raises the input resistance and lowers the output resistance', 'Lowers the input resistance and raises the output resistance'],
        answer: 2,
        explanation: '$R_{if} = R_i(1 - \\beta A)$ and $R_{of} = R_o/(1 - \\beta A)$: with negative feedback the factor exceeds unity, multiplying input resistance (Hughes’ example: $2\\ \\text{k}\\Omega$ becoming $162\\ \\text{k}\\Omega$) and dividing output resistance — precisely the direction a voltage amplifier wants.',
      },
      {
        q: 'Which of the following is NOT one of Hughes’ three types of amplifier distortion?',
        options: ['Phase distortion', 'Amplitude (frequency) distortion', 'Harmonic distortion', 'Quantization distortion'],
        answer: 3,
        explanation: 'Hughes lists phase, amplitude and harmonic distortion. Harmonic distortion generates multiples of a $1\\ \\text{kHz}$ input at $2$, $3\\ \\text{kHz}$ and beyond; amplitude distortion is unequal amplification of frequencies; phase distortion is frequency-dependent shift. Quantization is a digital phenomenon from Chapter 18.',
      },
      {
        q: 'Hughes’ amplifier has passband gain $-1000$; at a frequency $f_x$ outside the passband the gain is $15\\ \\text{dB}$ down with zero phase. The maximum feedback that guarantees stability is about:',
        options: [`$\\beta = 0.25$`, `$\\beta = 0.0058$`, `$\\beta = 1/1000$`, 'No feedback is safe at any level'],
        answer: 1,
        explanation: 'A $15\\ \\text{dB}$ drop is a factor $5.62$, so the gain at $f_x$ is $1000/5.62 = 178$. Oscillation threatens when $\\beta \\times 178 = 1$, hence $\\beta_{\\max} = 1/178 = 0.0058$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.5
  {
    sectionId: 'elec-ch15-s5',
    readingTime: 8,
    intro: 'Once the two golden rules are second nature, the Art of Electronics builds its repertoire: integrators that turn square waves into triangles, differentiators that find edges, comparators that slice a waveform at a threshold, precision rectifiers that outperform diodes, and the instrumentation amplifier that measures microvolts in the presence of volts of hum. This section collects that repertoire, together with the practical wisdom — decoupling, slew rate, offset — that separates a working circuit from a textbook one.',
    objectives: [
      'Restate the golden rules and their domain of validity',
      'Analyze the inverting integrator and differentiator including waveform transformations',
      'Explain comparator operation, open-collector outputs and hysteresis',
      'Analyze precision active rectifiers and the three-op-amp instrumentation amplifier',
      'Apply practical construction wisdom: decoupling, slew rate, offset and stability',
    ],
    concepts: [
      {
        term: 'The golden rules',
        kind: 'method',
        statement: 'For an op-amp circuit with negative feedback: **Rule 1** — the output adjusts itself so that the differential input voltage is zero, $V_{-} = V_{+}$; **Rule 2** — the op-amp input currents are zero.',
        detail: 'These are the Art of Electronics’ compact restatement of Nilsson’s constraints. They hold only while the output is unsaturated and the feedback is negative; a comparator (no feedback) or a saturated amplifier obeys neither. All circuits below are the golden rules applied to different impedances in the input and feedback paths.',
      },
      {
        term: 'The inverting integrator',
        kind: 'theorem',
        statement: 'Replacing the feedback resistor with a capacitor gives the **Miller integrator**: $$v_o = -\\frac{1}{RC} \\int v_i\\, dt,$$ whose output ramps at $dv_o/dt = -v_i/RC$ for a constant input.',
        detail: 'A square-wave input therefore produces a triangular output, alternately charging and discharging the capacitor through $R$ at constant current $v_i/R$. The same circuit is the first-order active low-pass filter of Chapter 16 with the corner moved far below the signal band: integration in time is low-pass filtering in frequency.',
      },
      {
        term: 'The differentiator',
        kind: 'theorem',
        statement: 'Interchanging the resistor and capacitor yields $$v_o = -RC\\, \\frac{d v_i}{d t},$$ whose output is a **spike proportional to the slope of the input** — a triangle input gives a square output.',
        detail: 'The bare differentiator is rarely built: its gain rises with frequency ($|H| = \\omega RC$), amplifying high-frequency noise, and the steep feedback it demands can ring. The standard cure is a small resistor in series with $C$, which bounds the noise gain at high frequency — an idea formalized by the Bode plots of Chapter 16.',
      },
      {
        term: 'Comparators and hysteresis',
        kind: 'definition',
        statement: 'A **comparator** is an op amp (or comparator IC) used **open loop**: the output snaps to one rail or the other according to the sign of $v_p - v_n$; adding a fraction of the output to the input (**positive feedback**) creates a Schmitt trigger with two distinct thresholds.',
        detail: 'Real comparator ICs (LM311, LM339, LM393 families) are optimized for this job: fast response, and open-collector outputs that swing to whatever pull-up level the logic requires. Hysteresis — the gap between the upper and lower trip points — prevents output chatter when a slow or noisy signal crosses the threshold once.',
      },
      {
        term: 'Precision active rectifiers',
        kind: 'method',
        statement: 'Putting a diode **inside** the feedback loop of an op amp hides its forward drop: the op amp drives the diode until the loop closes, so the circuit rectifies signals far smaller than the $0.6$–$0.7\\ \\text{V}$ a passive diode needs (Chapter 12).',
        detail: 'The half-wave precision rectifier outputs zero for one input polarity and $-(R_2/R_1) v_i$ for the other; adding a second summing stage that adds twice the half-wave signal to the original gives the full-wave absolute-value circuit $v_o = |v_i|$. These are the standard building blocks of ac voltmeters and detectors.',
      },
      {
        term: 'The instrumentation amplifier',
        kind: 'definition',
        statement: 'The classic three-op-amp **instrumentation amplifier** buffers both inputs with non-inverting stages sharing one gain resistor $R_G$, then subtracts them with a matched difference stage; its differential gain is $$G = 1 + \\frac{2R}{R_G},$$ with enormous input impedance at both terminals.',
        detail: 'The shared $R_G$ sets the gain with a single resistor while the two input op amps present essentially infinite input resistance and no loading of the source — the fix for the difference amplifier’s finite input impedance. Matched resistor networks give the second stage its common-mode rejection, which is why this circuit lives inside every strain-gage, thermocouple and biopotential front end.',
      },
      {
        term: 'Practical op-amp wisdom',
        kind: 'insight',
        statement: 'Real circuits need: **supply decoupling** capacitors at every chip, feedback paths kept short, attention to **slew rate** ($0.5\\ \\text{V}/\\mu\\text{s}$ for a 741-class part — a $10\\ \\text{V}$, $100\\ \\text{kHz}$ triangle needs $4\\ \\text{V}/\\mu\\text{s}$), and offset balancing when the signal is millivolts.',
        detail: 'The golden rules fail silently near slew-rate and gain–bandwidth limits: a “virtual short” that is actually tens of millivolts, or a triangle that turns into a trapezoid because the output cannot move fast enough. Choose FET-input op amps for high-impedance sources (their picoamp bias currents), and never let a unity-gain-unstable part run at low noise gain.',
      },
    ],
    examples: [
      {
        title: 'Square wave to triangle wave (integrator)',
        problem: 'A Miller integrator has $R = 10\\ \\text{k}\\Omega$ and $C = 0.1\\ \\mu\\text{F}$, and is driven by a $\\pm 5\\ \\text{V}$ square wave at $500\\ \\text{Hz}$. Describe the output waveform and its amplitude.',
        steps: [
          { label: 'Step 1: The integrator law', text: '$v_o = -(1/RC)\\int v_i\\, dt$ with $RC = (10^{4})(10^{-7}) = 1\\ \\text{ms}$. A constant input segment gives a ramp of slope $-v_i/RC$.' },
          { label: 'Step 2: Ramp rate', text: 'During the $+5\\ \\text{V}$ half-cycle the slope is $-5/10^{-3} = -5000\\ \\text{V/s} = -5\\ \\text{V/ms}$; during the $-5\\ \\text{V}$ half-cycle it is $+5\\ \\text{V/ms}$.' },
          { label: 'Step 3: Half-period', text: 'At $500\\ \\text{Hz}$ the half-period is $1\\ \\text{ms}$, so each half-cycle moves the output by exactly $5\\ \\text{V}$ — the amplitude matches the input range.' },
          { label: 'Step 4: Steady-state waveform', text: 'After startup the output settles into a symmetric triangle: $5\\ \\text{V}$ peak-to-peak, i.e. $\\pm 2.5\\ \\text{V}$ about its center. Any input imbalance, or the op amp’s bias current charging $C$, would walk the triangle toward a rail — hence the parallel discharge resistor or reset switch in real integrators.' },
        ],
        result: 'A $5\\ \\text{V}$ peak-to-peak triangle wave at $500\\ \\text{Hz}$, lagging the square wave by a quarter period.',
      },
      {
        title: 'Precision half-wave rectifier',
        problem: 'A signal of only $100\\ \\text{mV}$ peak must be rectified, but a silicon diode begins conducting around $0.6\\ \\text{V}$ (Chapter 12). Show how an op-amp precision rectifier recovers the full signal.',
        steps: [
          { label: 'Step 1: Why the passive diode fails', text: 'A $100\\ \\text{mV}$ sine never forward-biases a silicon diode appreciably: the passive rectifier output is essentially zero. The diode equation (Chapter 12) gives conduction only above roughly $0.5\\ \\text{V}$.' },
          { label: 'Step 2: Put the diode in the loop', text: 'In the inverting precision rectifier, the op-amp output drives the diode; the loop closes through it when current must flow. For the conducting polarity the op amp raises its internal output until the diode delivers exactly the current the virtual ground demands.' },
          { label: 'Step 3: The transferred drop', text: 'The diode drop is absorbed inside the loop: the op amp needs $v_o + 0.6\\ \\text{V}$ internally, but the circuit output node still follows $-(R_2/R_1) v_i$ down to millivolts.' },
          { label: 'Step 4: Result and extension', text: 'With $R_1 = R_2 = 10\\ \\text{k}\\Omega$ the output is a clean half-wave copy of the $100\\ \\text{mV}$ sine. Adding a second op amp that sums the input plus twice the half-wave signal produces $v_o = |v_i|$, the full-wave absolute-value rectifier.' },
        ],
        result: 'The precision rectifier handles millivolt signals by hiding the diode drop inside the feedback loop; the absolute-value extension rectifies both halves.',
      },
      {
        title: 'Instrumentation amplifier gain',
        problem: 'A three-op-amp instrumentation amplifier uses $R_1 = R_2 = 25\\ \\text{k}\\Omega$ in its two input stages and a gain resistor $R_G = 500\\ \\Omega$. A differential signal of $5\\ \\text{mV}$ rides on $100\\ \\text{mV}$ of common-mode hum. Find the differential output and the residual hum if the matched difference stage provides $60\\ \\text{dB}$ of CMRR.',
        steps: [
          { label: 'Step 1: The gain formula', text: 'The differential gain of the classic three-op-amp circuit is $G = 1 + 2R/R_G$ where $R = 25\\ \\text{k}\\Omega$: $G = 1 + 50{,}000/500 = 101$.' },
          { label: 'Step 2: Amplify the signal', text: 'The two input stages apply the same gain to the differential component: $5\\ \\text{mV} \\times 101 = 505\\ \\text{mV}$ of differential signal reaches the output difference stage, which passes it at unity.' },
          { label: 'Step 3: Reject the hum', text: 'The common-mode component passes through the input stages at unity gain; the output difference stage suppresses it by its CMRR. At $60\\ \\text{dB}$ the rejection factor is $10^{3}$, so $100\\ \\text{mV}$ of hum leaves $0.1\\ \\text{mV} = 100\\ \\mu\\text{V}$ at the output.' },
          { label: 'Step 4: Assess', text: 'The signal-to-hum ratio went from $5\\ \\text{mV} / 100\\ \\text{mV} = 1{:}20$ at the input to $505\\ \\text{mV} / 0.1\\ \\text{mV} \\approx 5000{:}1$ at the output — the entire point of the topology, and the reason it fronts every bridge sensor and biopotential electrode.' },
        ],
        result: '$G = 101$; differential output $505\\ \\text{mV}$ against only $100\\ \\mu\\text{V}$ of residual hum.',
      },
    ],
    keyTakeaways: [
      'Golden rules: with negative feedback and an unsaturated output, $V_{-} = V_{+}$ and the input currents are zero — every circuit in this chapter is these rules plus two impedances.',
      'The integrator $v_o = -(1/RC)\\int v_i\\, dt$ converts square waves to triangles at ramp rate $-v_i/RC$; real integrators need a leakage path or reset switch to fight bias-current drift.',
      'The differentiator $v_o = -RC\\, dv_i/dt$ amplifies high-frequency noise and is usually tamed with a small series resistor.',
      'Comparators run open loop and snap rail-to-rail; hysteresis (positive feedback) gives two thresholds and noise immunity — comparator ICs have open-collector outputs for logic levels.',
      'Precision rectifiers place the diode inside the feedback loop so its $0.6\\ \\text{V}$ drop is invisible; the absolute-value circuit gives $v_o = |v_i|$.',
      'The instrumentation amplifier delivers gain $1 + 2R/R_G$ with one resistor, near-infinite input impedance and high CMRR — the universal bridge-sensor front end.',
      'Practical limits — slew rate, gain–bandwidth, offset, decoupling — decide whether a golden-rule design actually works.',
    ],
    quiz: [
      {
        q: 'An integrator with $R = 10\\ \\text{k}\\Omega$ and $C = 0.1\\ \\mu\\text{F}$ receives a steady $+2\\ \\text{V}$ input. At what rate does the output move?',
        options: [`$+2\\ \\text{V/ms}$`, `$-0.2\\ \\text{V/ms}$`, `$-2\\ \\text{V/ms}$`, 'It stays constant at $-2\\ \\text{V}$'],
        answer: 2,
        explanation: 'The ramp rate is $-v_i/RC = -2/(10^{-3}\\ \\text{s}) = -2000\\ \\text{V/s} = -2\\ \\text{V/ms}$: the inverting integrator ramps downward for a positive input.',
      },
      {
        q: 'Why does a practical integrator usually include a very large resistor in parallel with the feedback capacitor?',
        options: ['To increase the output amplitude', 'To provide a dc path for the op amp’s bias current, preventing the output from drifting to a rail', 'To convert it into a differentiator', 'To protect the input source from short circuits'],
        answer: 1,
        explanation: 'The tiny bias current flowing into the inverting node would otherwise integrate into an ever-growing ramp, saturating the amplifier. The parallel resistor gives that current a dc path, bounding the output at low frequency.',
      },
      {
        q: 'A comparator with hysteresis (a Schmitt trigger) switches at different thresholds for rising and falling inputs. The purpose of the two thresholds is to:',
        options: ['Double the output swing', 'Make the comparator faster', 'Allow the comparator to work without a supply', 'Prevent multiple output transitions when a noisy signal crosses the threshold'],
        answer: 3,
        explanation: 'Positive feedback moves the threshold away from the signal after each transition, so noise smaller than the hysteresis window cannot re-trigger the output — chatter is eliminated.',
      },
      {
        q: 'The classic three-op-amp instrumentation amplifier has input-stage resistors $R = 25\\ \\text{k}\\Omega$ and gain resistor $R_G = 500\\ \\Omega$. Its differential gain is:',
        options: [`$101$`, `$50$`, `$1 + 500/25{,}000 \\approx 1.02$`, `$2$`],
        answer: 0,
        explanation: '$G = 1 + 2R/R_G = 1 + 2(25{,}000)/500 = 101$, set by the single gain resistor while both inputs see essentially infinite impedance.',
      },
      {
        q: 'A precision active rectifier outperforms a simple diode rectifier because:',
        options: ['Its diodes have a smaller forward drop', 'The op amp absorbs the diode drop inside the feedback loop, so millivolt signals are rectified faithfully', 'It works without any power supply', 'It converts ac directly to regulated dc'],
        answer: 1,
        explanation: 'The loop drives the internal node an extra diode-drop high so that the output node obeys the golden rules exactly; the $0.6$–$0.7\\ \\text{V}$ penalty never appears at the output, so signals far below a diode drop can be rectified.',
      },
      // PYQ-pattern: DRDO 2018 — op-amp integrator triangle amplitude (rephrased, values changed)
      {
        q: 'An ideal integrator with R = 10 kΩ and C = 100 nF is driven by a symmetric ±5 V square wave at 1.0 kHz. The steady output triangle has peak-to-peak amplitude closest to:',
        options: ['1.25 V', '2.50 V', '5.00 V', '10.0 V'],
        answer: 1,
        explanation: 'Step 1 — Given: $R = 10$ kΩ, $C = 100$ nF so $RC = 10^{-3}$ s, square levels ±5 V, period $10^{-3}$ s with half-period $0.5 \\times 10^{-3}$ s. Step 2 — Governing ramp: virtual earth gives $i = \\frac{V_{in}}{R}$ into $C$, so slope $\\frac{dv_{o}}{dt} = -\\frac{V_{in}}{RC}$. Step 3 — Algebra: slope magnitude $\\frac{5}{10^{-3}} = 5000$ V per s; over one half-period the swing is $5000 \\times 0.5 \\times 10^{-3} = 2.5$ V peak-to-peak. Step 4 — Sanity check: larger $RC$ would flatten the triangle, higher frequency shrinks it proportionally, and $2.5$ V stays clear of saturation. Step 5 — Distractor analysis: 5.00 V uses the full period per ramp, 1.25 V halves the half-period, and 10.0 V mistakes peak for swing. Step 6 — Conclude: the triangle spans about 2.50 V peak-to-peak.',
      },
    ],
  },
]

// ============================================================================
// Chapter 15 formula sheet — the most useful op-amp and feedback laws.
// ============================================================================

export const elecCh15Formulas: FormulaEntry[] = [
  {
    chapterId: 'elec-ch15',
    section: '15.1',
    name: 'Ideal op-amp voltage constraint',
    formula: 'v₊ = v₋',
    note: 'virtual short — valid in the linear region with negative feedback',
    latex: 'v_{p} = v_{n}',
  },
  {
    chapterId: 'elec-ch15',
    section: '15.1',
    name: 'Ideal op-amp current constraint',
    formula: 'i₊ = i₋ = 0',
    note: 'inputs draw no current (input resistance ≥ 1 MΩ)',
    latex: 'i_{p} = i_{n} = 0',
  },
  {
    chapterId: 'elec-ch15',
    section: '15.2',
    name: 'Inverting amplifier gain',
    formula: 'A_v = −R_f / R₁',
    note: 'inverted, scaled replica; virtual ground at the inverting node',
    latex: 'A_v = -\\frac{R_f}{R_1}',
  },
  {
    chapterId: 'elec-ch15',
    section: '15.2',
    name: 'Non-inverting amplifier gain',
    formula: 'A_v = 1 + R_f / R₁',
    note: 'high input resistance; the follower is the R_f = 0 limit',
    latex: 'A_v = 1 + \\frac{R_f}{R_1}',
  },
  {
    chapterId: 'elec-ch15',
    section: '15.2',
    name: 'Summing amplifier',
    formula: 'v_o = −(R_f/R_a·v_a + R_f/R_b·v_b + R_f/R_c·v_c)',
    note: 'weighted, inverted sum — the audio mixer',
    latex: 'v_o = -\\left(\\frac{R_f}{R_a} v_a + \\frac{R_f}{R_b} v_b + \\frac{R_f}{R_c} v_c\\right)',
  },
  {
    chapterId: 'elec-ch15',
    section: '15.2',
    name: 'Difference amplifier (matched resistors)',
    formula: 'v_o = (R_b/R_a)(v_b − v_a)',
    note: 'requires R_a/R_b = R_c/R_d',
    latex: 'v_o = \\frac{R_b}{R_a}(v_b - v_a)',
  },
  {
    chapterId: 'elec-ch15',
    section: '15.3',
    name: 'Common-mode rejection ratio',
    formula: 'CMRR = |A_dm / A_cm|',
    note: '≈ (1 + R_b/R_a)/ε for resistor mismatch ε; in dB: 20 log₁₀',
    latex: '\\mathrm{CMRR} = \\left|\\frac{A_{dm}}{A_{cm}}\\right| \\approx \\frac{1 + R_b/R_a}{|\\epsilon|}',
  },
  {
    chapterId: 'elec-ch15',
    section: '15.4',
    name: 'Closed-loop gain with feedback',
    formula: 'G_vf = A / (1 − βA) ≈ 1/β',
    note: 'series-voltage feedback; deep-feedback limit when βA ≫ 1',
    latex: 'G_{vf} = \\frac{A}{1 - \\beta A} \\approx \\frac{1}{\\beta}',
  },
  {
    chapterId: 'elec-ch15',
    section: '15.5',
    name: 'Op-amp integrator',
    formula: 'v_o = −(1/RC) ∫ v_i dt',
    note: 'Miller integrator; square wave in → triangle wave out',
    latex: 'v_o = -\\frac{1}{RC}\\int v_i\\, dt',
  },
]
