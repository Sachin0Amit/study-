import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// Hughes, Electrical & Electronic Technology 12e (Ch. 13, 14, 28) merged with
// Nilsson, Electric Circuits 12e (Ch. 10, 11) — Master Library Chapter 9:
// AC Power, Resonance and Three-Phase Systems.
// All worked-example numbers are the books’ own. Math is LaTeX, rendered by
// KaTeX through the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh9Content: SectionContent[] = [
  // ------------------------------------------------------------------ 9.1
  {
    sectionId: 'ee-e-circuits-s31',
    readingTime: 8,
    intro: 'When alternating current systems were first introduced, learned scientists claimed it was impossible to deliver energy by such a means: power would flow to the load during one half-cycle and flow straight back during the next. They were almost right. Hughes calls this the impossible power, and resolving the paradox is the business of this section: a resistive component dissipates energy as heat, while a reactive component shuttles it back and forth between the source and the magnetic or electric field of the load — like watching an unending rally in tennis as the ball of energy flies to and fro.',
    objectives: [
      'Decompose the instantaneous power into its constant and double-frequency components and explain each',
      'Compute average power, reactive power, power factor and reactive factor from sinusoidal voltage and current pairs',
      'Explain the rms (effective) value and apply the resistance power formulas it yields',
      'Distinguish lagging and leading power factor and explain why a low power factor costs the supply authority money',
    ],
    concepts: [
      {
        term: 'Instantaneous power',
        kind: 'definition',
        statement: 'The **instantaneous power** at a pair of terminals is the product $p = vi$. With $v = V_{m}\\cos(\\omega t + \\theta_{v})$ and $i = I_{m}\\cos(\\omega t + \\theta_{i})$, the product transforms into three terms, $$p = \\frac{V_{m} I_{m}}{2}\\cos(\\theta_{v} - \\theta_{i}) + \\frac{V_{m} I_{m}}{2}\\cos(\\theta_{v} - \\theta_{i})\\cos 2\\omega t - \\frac{V_{m} I_{m}}{2}\\sin(\\theta_{v} - \\theta_{i})\\sin 2\\omega t.$$',
        detail: 'The first term is a constant; the other two are sinusoids at twice the voltage and current frequency. The instantaneous power therefore goes through two complete cycles for every cycle of the source, and it may be negative for a portion of each cycle — the energy stored in inductors or capacitors is being extracted. This double-frequency pulsation is why motor-driven appliances such as refrigerators need resilient motor mountings.',
      },
      {
        term: 'Average (real) power',
        kind: 'law',
        statement: 'Averaging the instantaneous power over one period kills both double-frequency sinusoids, leaving $$P = \\frac{V_{m} I_{m}}{2}\\cos(\\theta_{v} - \\theta_{i}) = V_{\\mathrm{rms}} I_{\\mathrm{rms}} \\cos(\\theta_{v} - \\theta_{i}).$$ Average power is also called real power because it is the power transformed from electric to nonelectric form — heat, light or mechanical work — and it is measured in watts.',
        detail: 'The angle $\\theta_{v} - \\theta_{i}$ is the power factor angle. In Hughes notation with a lagging current the same result reads $P = VI\\cos\\phi$, and a formal integration of the product of two shifted sine waves confirms it: the average of $\\cos 2\\omega t$ and of $\\sin 2\\omega t$ over a complete cycle is zero, so only the constant term survives.',
      },
      {
        term: 'Reactive power and the var',
        kind: 'definition',
        statement: 'The **reactive power** is $$Q = \\frac{V_{m} I_{m}}{2}\\sin(\\theta_{v} - \\theta_{i}) = V_{\\mathrm{rms}} I_{\\mathrm{rms}} \\sin(\\theta_{v} - \\theta_{i}),$$ measured in vars (volt-amperes reactive). Because the current was chosen as the phase reference, $Q$ is positive for inductors and negative for capacitors.',
        detail: 'Power engineers phrase the sign convention as: inductors demand (absorb) magnetizing vars and capacitors furnish (deliver) magnetizing vars. Average and reactive power carry the same dimension — the distinct units (watt and var) exist purely to keep the bookkeeping honest. The sine of the power factor angle is separately called the reactive factor, abbreviated rf.',
      },
      {
        term: 'Power in the three pure circuits',
        kind: 'insight',
        statement: 'For a purely **resistive** circuit $\\theta_{v} = \\theta_{i}$, so $p = P + P\\cos 2\\omega t$ — the instantaneous power is never negative and cannot be extracted from the network. For a purely **inductive** or purely **capacitive** circuit $|\\theta_{v} - \\theta_{i}| = 90^\\circ$, so $p = -Q\\sin 2\\omega t$ and the average power is exactly zero.',
        detail: 'In the inductive case, during the quarter-cycle in which the current builds, energy supplied by the generator (the positive area under the power curve) is stored in the magnetic field; during the next quarter-cycle the field collapses and returns exactly that energy to the generator, which is briefly driven as a motor. The capacitive case is the mirror image, with energy stored in and returned from the electric field. Nothing is dissipated in either case — which is precisely the grain of truth in the impossible power argument.',
      },
      {
        term: 'The rms value as the effective value',
        kind: 'law',
        statement: 'A sinusoidal source delivers the same energy to a resistance $R$ as a dc source of value $V_{\\mathrm{rms}}$, so $$P = \\frac{V_{\\mathrm{rms}}^{2}}{R} = I_{\\mathrm{rms}}^{2} R.$$ The rms value is therefore also called the effective value of the sinusoid, and equipment ratings (for example 240/120 V household service) are rms values.',
        detail: 'A 120 V, 100 W incandescent lamp therefore has a resistance of $120^{2}/100 = 144\\ \\Omega$ and draws an rms current of $120/144 = 0.833\\ \\mathrm{A}$; the peak of the lamp current is $0.833\\sqrt{2} = 1.18\\ \\mathrm{A}$. Phasors may also be expressed as rms phasors — the magnitude is then the rms value, and every power formula in this chapter applies directly.',
      },
      {
        term: 'Power factor',
        kind: 'definition',
        statement: 'The **power factor** is the ratio of active power to apparent power, $$\\mathrm{pf} = \\cos(\\theta_{v} - \\theta_{i}) = \\frac{P}{S},$$ and it lies between 0 and 1. The power factor is described as lagging when the current lags the voltage (an inductive load) and leading when the current leads (a capacitive load) — the supply voltage being the reference quantity.',
        detail: 'The lagging/leading label is essential: since $\\cos(\\theta_{v} - \\theta_{i}) = \\cos(\\theta_{i} - \\theta_{v})$, the cosine alone cannot reveal the sign of the angle. For a series circuit Hughes adds the useful identity $\\cos\\phi = R/Z$: the power factor is the resistance divided by the impedance magnitude. For sinusoidal voltage and current, power factor and $\\cos\\phi$ are the same thing.',
      },
      {
        term: 'Apparent power',
        kind: 'definition',
        statement: 'The product of the rms voltage and current is the **apparent power**, $$S = VI,$$ measured in volt-amperes (VA). It exceeds the active power unless the load is purely resistive, and $P = S\\cos\\phi$ connects the two.',
        detail: 'Apparent power matters because the heating of conductors — and hence the rating of generators, transformers and cables — depends on the current carried, not on its phase relationship to the voltage. Equipment that converts electric energy to another form is rated in volt-amperes because that is the volt-amp capacity required to supply the average power the device uses.',
      },
      {
        term: 'The practical importance of power factor',
        kind: 'insight',
        statement: 'A generator rated to give 2000 A at 400 V is rated at $400 \\times 2000 = 800\\ \\mathrm{kVA}$. At unity power factor those 800 kVA are also 800 kW; at a power factor of 0.5 the same fully loaded machine delivers only 400 kW, and its driving engine works at half capacity.',
        detail: 'The conductors joining generator and load are in the same position: sized for 2000 A, they transmit 800 kW at unity power factor but only 400 kW at 0.5. The lower the power factor, the larger the source and the greater the conductor cross-section needed for a given power — in other words, the greater the cost of generation and transmission. This is why supply authorities install capacitors and special machines, and structure tariffs to encourage consumers to improve their power factor.',
      },
    ],
    examples: [
      {
        title: 'A coil on a 50 V, 60 Hz supply (Hughes Example 13.1)',
        problem: 'A coil having a resistance of 6 Ω and an inductance of 0.03 H is connected across a 50 V, 60 Hz supply. Calculate (a) the current, (b) the phase angle between current and applied voltage, (c) the apparent power and (d) the active power.',
        steps: [
          { label: 'Step 1: Reactance and impedance', text: 'The reactance is $X_{L} = 2\\pi f L = 2\\pi \\times 60 \\times 0.03 = 11.31\\ \\Omega$, so the impedance magnitude is $Z = \\sqrt{6^{2} + 11.31^{2}} = 12.8\\ \\Omega$.' },
          { label: 'Step 2: Current', text: '$I = V/Z = 50/12.8 = 3.9\\ \\mathrm{A}$, lagging the voltage.' },
          { label: 'Step 3: Phase angle', text: '$\\tan\\phi = X_{L}/R = 11.31/6 = 1.885$, giving $\\phi = 62^\\circ 3^{\\prime}$.' },
          { label: 'Step 4: Apparent power', text: '$S = VI = 50 \\times 3.91 = 196\\ \\mathrm{VA}$.' },
          { label: 'Step 5: Active power two ways', text: '$P = S\\cos\\phi = 195.5 \\times 0.469 = 92\\ \\mathrm{W}$; alternatively $P = I^{2}R = (3.91)^{2} \\times 6 = 92\\ \\mathrm{W}$ — identical, because only the resistance dissipates.' },
        ],
        result: 'The coil draws 3.9 A at a power factor of 0.47 lagging: 196 VA of apparent power delivers only 92 W of active power, the rest shuttling in and out of the magnetic field.',
      },
      {
        title: 'Reading P and Q from a voltage–current pair (Nilsson Example 10.1)',
        problem: 'At the terminals of a network, $v = 100\\cos(\\omega t + 15^\\circ)\\ \\mathrm{V}$ and $i = 4\\sin(\\omega t - 15^\\circ)\\ \\mathrm{A}$. Calculate the average and reactive power, and state whether the network inside the box is absorbing or delivering average power, and absorbing or supplying magnetizing vars.',
        steps: [
          { label: 'Step 1: Put both on cosines', text: 'Rewrite the current as a cosine: $i = 4\\cos(\\omega t - 105^\\circ)\\ \\mathrm{A}$, so $\\theta_{v} = 15^\\circ$ and $\\theta_{i} = -105^\\circ$.' },
          { label: 'Step 2: Average power', text: '$P = \\frac{1}{2}(100)(4)\\cos[15^\\circ - (-105^\\circ)] = 200\\cos 120^\\circ = -100\\ \\mathrm{W}$.' },
          { label: 'Step 3: Reactive power', text: '$Q = \\frac{1}{2}(100)(4)\\sin[15^\\circ - (-105^\\circ)] = 200\\sin 120^\\circ = 173.21\\ \\mathrm{VAR}$.' },
          { label: 'Step 4: Interpret the signs', text: '$P$ is negative, so with the passive sign convention the network inside the box is delivering average power to the terminals; $Q$ is positive, so the network is absorbing magnetizing vars there.' },
        ],
        result: 'P = −100 W (delivering) and Q = 173.21 VAR (absorbing vars) — a single network can push real power out while pulling magnetizing vars in, which is exactly what a source with a lagging internal impedance does.',
      },
      {
        title: 'Will the kitchen breaker hold? (Nilsson Example 10.2)',
        problem: 'The branch circuit supplying the outlets in a typical home kitchen is wired with #12 conductor and protected by a 20 A breaker. A coffee maker, microwave, dishwasher and older refrigerator — all 120 V appliances — are in operation at the same time. Will the protective device interrupt the circuit?',
        steps: [
          { label: 'Step 1: Coffee maker', text: 'A coffee maker used 1 hour per day consumes 60 kwh per year over $30 \\times 12 = 360$ hours, so $P = 60\\,000/360 = 167\\ \\mathrm{W}$.' },
          { label: 'Step 2: The other three from Table 10.1', text: 'Microwave: $101\\,\\mathrm{kwh}/(9 \\times 12) = 935\\ \\mathrm{W}$; dishwasher: $293/(30 \\times 12) = 814\\ \\mathrm{W}$; refrigerator: $533/(720 \\times 12) = 62\\ \\mathrm{W}$.' },
          { label: 'Step 3: Total average power', text: '$P_{\\mathrm{total}} = 167 + 935 + 814 + 62 = 1978\\ \\mathrm{W}$.' },
          { label: 'Step 4: Total current', text: '$I = P_{\\mathrm{total}}/V = 1978/120 = 16.5\\ \\mathrm{A}$, which is less than 20 A.' },
        ],
        result: 'The breaker holds: 16.5 A against a 20 A rating. Your monthly electric bill, based on kilowatt-hours, is nothing but the time integral of this average power.',
      },
    ],
    keyTakeaways: [
      'Instantaneous power is the product $p = vi$; it pulsates at twice the source frequency and can be negative while energy returns from the fields of reactive elements.',
      'Only the constant term survives averaging: $P = V_{\\mathrm{rms}} I_{\\mathrm{rms}}\\cos(\\theta_{v} - \\theta_{i})$ in watts; the companion $Q = V_{\\mathrm{rms}} I_{\\mathrm{rms}}\\sin(\\theta_{v} - \\theta_{i})$ is the reactive power in vars.',
      'Inductors demand magnetizing vars, capacitors furnish them; purely reactive loads dissipate nothing on average.',
      'The rms value is the effective value: $P = V_{\\mathrm{rms}}^{2}/R = I_{\\mathrm{rms}}^{2}R$, and a 100 V(rms) source heats a resistor exactly as a 100 V dc source does.',
      'Apparent power $S = VI$ in volt-amperes is the volt-amp capacity the equipment must carry; the power factor $P/S = \\cos\\phi$ measures how much of it does real work.',
      'Lagging power factor means inductive load, leading means capacitive — the cosine alone cannot tell them apart.',
      'A low power factor forces oversized generators, transformers and conductors, which is why utilities correct it — the theme of the next section.',
    ],
    quiz: [
      {
        q: 'The instantaneous power delivered to a purely inductive load in the sinusoidal steady state:',
        options: ['Is always positive, since energy is continually stored', 'Has a negative average value because inductors absorb vars', 'Is a double-frequency sinusoid whose average over a cycle is zero', 'Is constant and equal to $Q$'],
        answer: 2,
        explanation: 'With $\\theta_{v} - \\theta_{i} = 90^\\circ$, the power reduces to $p = -Q\\sin 2\\omega t$: energy flows into the magnetic field for one quarter-cycle and back out the next, so nothing is dissipated and the average is exactly zero.',
      },
      {
        q: 'A 120 V, 100 W incandescent lamp carries rms ratings on its nameplate. Its filament resistance is:',
        options: ['100 Ω', '120 Ω', '144 Ω', '240 Ω'],
        answer: 2,
        explanation: '$R = V^{2}/P = 120^{2}/100 = 144\\ \\Omega$. It draws an rms current of $120/144 = 0.833\\ \\mathrm{A}$, peaking at $0.833\\sqrt{2} = 1.18\\ \\mathrm{A}$.',
      },
      {
        q: 'A load is said to operate at a lagging power factor of 0.7. This means:',
        options: ['The voltage lags the current and the load is capacitive', 'The current lags the voltage and the load is inductive', 'The load delivers 70 percent of its apparent power back to the source', 'The power factor angle is $\\cos 0.7$'],
        answer: 1,
        explanation: 'Lagging refers to the current relative to the supply voltage, which is the reference: an inductive load. The power factor angle is $\\cos^{-1} 0.7 = 45.57^\\circ$.',
      },
      {
        q: 'In the kitchen of Nilsson Example 10.2, the four appliances totalled 1978 W at 120 V(rms). The current in the protective device was:',
        options: ['9.9 A, so the 20 A breaker is barely loaded', '16.5 A, so the breaker holds', '1978/240 = 8.2 A because household supply is two-phase', '20.0 A exactly, so the breaker trips'],
        answer: 1,
        explanation: '$I = P/V = 1978/120 = 16.5\\ \\mathrm{A} < 20\\ \\mathrm{A}$. The estimate assumes the loads are effectively resistive, which is conservative for heating appliances.',
      },
      {
        q: 'The frequency at which the instantaneous power $p = vi$ oscillates in the sinusoidal steady state is:',
        options: ['Half the source frequency, because positive and negative halves cancel', 'The same as the source frequency', 'Twice the source frequency', 'Zero — instantaneous power is constant'],
        answer: 2,
        explanation: 'The product of two sinusoids at $\\omega$ contains sum and difference frequencies; the difference is the dc term $P$ and the sum is $2\\omega$. The power curve completes two cycles for every one of the voltage.',
      },
    ],
  },

  // ------------------------------------------------------------------ 9.2
  {
    sectionId: 'ee-e-circuits-s32',
    readingTime: 9,
    intro: 'Complex power folds the three quantities of the previous section — watts, vars and volt-amperes — into one complex number, $S = P + jQ$, that can be read straight off a pair of phasors as $V I^{*}$. With it, power-factor correction stops being a phasor-diagram construction exercise and becomes bookkeeping: add up the vars the loads demand, decide how many a capacitor should furnish, and size the capacitor. Every number in this section is traceable to a worked example in Nilsson Chapter 10 or Hughes Chapter 13.',
    objectives: [
      'Compute complex power from phasors as $S = V_{\\mathrm{rms}} I_{\\mathrm{rms}}^{*}$ and from impedances as $I_{\\mathrm{rms}}^{2} Z$',
      'Build the power triangle and recover any two of P, Q, S and the power factor angle from the other two',
      'Combine parallel loads by adding real and reactive powers algebraically',
      'Size a power-factor-correction capacitor for a specified target power factor and quantify the saving',
    ],
    concepts: [
      {
        term: 'Complex power',
        kind: 'definition',
        statement: 'The **complex power** is the complex sum of real and reactive power, $$S = P + jQ,$$ measured in volt-amperes. Once $S$ is known, the average power is $P = \\Re\\{S\\}$ and the reactive power is $Q = \\Im\\{S\\}$.',
        detail: 'Complex, average and reactive power all share the same dimension — the three different unit names (VA, W and var) exist only to distinguish them in conversation and on nameplates. Complex power is the quantity in which parallel loads combine, which is what makes it the workhorse of this section.',
      },
      {
        term: 'Complex power from phasors',
        kind: 'law',
        statement: 'With rms phasors and the passive sign convention, $$S = V_{\\mathrm{rms}} I_{\\mathrm{rms}}^{*},$$ and if the phasors carry amplitudes instead of rms values, $S = \\frac{1}{2} V I^{*}$. The conjugate is what turns the difference of the phase angles into the argument of $S$: $S = V_{\\mathrm{rms}} I_{\\mathrm{rms}} e^{j(\\theta_{v} - \\theta_{i})}$.',
        detail: 'If the current reference is in the direction of a voltage rise rather than a drop, a minus sign goes in front of the right-hand side. Nilsson computes the same quantity three ways in Example 10.5: $S = \\frac{1}{2}(100\\angle 15^\\circ)(4\\angle 105^\\circ) = 200\\angle 120^\\circ = -100 + j173.21\\ \\mathrm{VA}$, whose real and imaginary parts reproduce Example 10.1 exactly.',
      },
      {
        term: 'Impedance forms of complex power',
        kind: 'law',
        statement: 'Replacing $V$ by $ZI$ or $I$ by $V/Z$ gives $$S = I_{\\mathrm{rms}}^{2} Z = I_{\\mathrm{rms}}^{2} R + j I_{\\mathrm{rms}}^{2} X, \\qquad S = \\frac{V_{\\mathrm{rms}}^{2}}{Z^{*}},$$ so for a pure resistance $P = V_{\\mathrm{rms}}^{2}/R$ and for a pure reactance $Q = V_{\\mathrm{rms}}^{2}/X$ — with $X$ carrying its own sign, positive for inductance and negative for capacitance.',
        detail: 'These forms are the fastest route to power when the current or voltage is already known: $P = I^{2}R$ and $Q = I^{2}X$ need only the line current and the element values. In Example 10.6, a load of $39 + j26\\ \\Omega$ carrying $I_{L} = 5\\angle -36.87^\\circ\\ \\mathrm{A}$(rms) absorbs $P = 5^{2}(39) = 975\\ \\mathrm{W}$ and $Q = 5^{2}(26) = 650\\ \\mathrm{VAR}$ in one line each.',
      },
      {
        term: 'The power triangle',
        kind: 'insight',
        statement: 'Envisioning $P$, $Q$ and $|S|$ as the sides of a right triangle, the angle between $P$ and $|S|$ is exactly the power factor angle, since $$\\tan\\theta = \\frac{Q}{P} = \\tan(\\theta_{v} - \\theta_{i}).$$ Any two of the four quantities — three sides plus angle — determine the other two.',
        detail: 'Nilsson Example 10.4: a load operating at 240 V(rms) that absorbs 8 kW at 0.8 lagging has $S = 8000/0.8 = 10\\,\\mathrm{kVA}$ and $Q = 10\\,\\mathrm{kVA} \\times 0.6 = 6\\ \\mathrm{kvar}$, so $S = 8 + j6\\ \\mathrm{kVA}$. Because the power factor is lagging, the reactive power is positive (inductive) and the angle is $\\cos^{-1} 0.8 = 36.87^\\circ$.',
      },
      {
        term: 'Active and reactive components of current',
        kind: 'definition',
        statement: 'A current $I$ lagging its voltage by $\\phi$ resolves into an **active component** $I\\cos\\phi$, in phase with the voltage, and a **reactive component** $I\\sin\\phi$, in quadrature with it: $P = V(I\\cos\\phi)$ while the quadrature component contributes $V(I\\sin\\phi)\\cos 90^\\circ = 0$ watts.',
        detail: 'Hughes warns against labelling these $I_{R}$ and $I_{L}$ in a series circuit — such names belong to branch currents of parallel elements, and applying parallel names to series circuits is a classic beginner error. In a supply cable, only the active components of the various loads sum to delivered power; the reactive components merely heat the cable.',
      },
      {
        term: 'Parallel loads add complex powers',
        kind: 'law',
        statement: 'For loads connected in parallel, the total real power is the sum of the individual real powers and the total reactive power is the sum of the individual reactive powers — but the total volt-amperes is **not** the sum of the individual volt-amperes: $$P_{T} = \\sum P_{k}, \\qquad Q_{T} = \\sum Q_{k}, \\qquad |S_{T}| \\neq \\sum |S_{k}|.$$',
        detail: 'Watts and vars add algebraically because they are resolved along the same axes; each load’s volt-amperes point in a different direction and must be added as phasors. The recipe is Hughes’s tabulation: compute $P = S\\cos\\phi$ and $Q = S\\sin\\phi$ per load (signed), sum the columns, and only then form the resultant triangle.',
      },
      {
        term: 'Power-factor correction',
        kind: 'method',
        statement: 'The power factor of a load is improved by introducing equipment that absorbs vars in the opposite sense — a capacitor across a lagging (inductive) load, an inductor across a leading one. The capacitor must furnish $$Q_{C} = P\\left(\\tan\\phi_{\\mathrm{old}} - \\tan\\phi_{\\mathrm{new}}\\right) \\quad \\text{vars},$$ and since $Q_{C} = -\\omega C V_{\\mathrm{rms}}^{2}$, the required capacitance follows directly.',
        detail: 'The active power is unchanged by correction — only the var balance moves. Hughes’s Example 13.7 shows both targets: for a load drawing 400 var inductive from 100 V at 50 Hz, unity needs $X_{C} = 100^{2}/400 = 25\\ \\Omega$ ($C = 127\\ \\mu\\mathrm{F}$), while correcting only to 0.96 lagging needs $Q_{C} = 400 - 800\\tan 16.3^\\circ = 166\\ \\mathrm{var}$, a mere $C = 53\\ \\mu\\mathrm{F}$. Correction is rarely taken to unity in practice because the cost of correction equipment must be balanced against the savings in electricity charges.',
      },
      {
        term: 'Why suppliers care',
        kind: 'insight',
        statement: 'In Hughes’s Example 13.6, a generator supplying 300 kW at 0.6 lagging is delivering $300/0.6 = 500\\ \\mathrm{kVA}$. Raise the power factor to unity and the same kilovolt-ampere loading delivers 500 kW — an extra **200 kW** of salable power from the same machine, the same conductors and the same fuel.',
        detail: 'This is the entire economic argument for correction. The generator winding, the transformer and the supply cable are all heated by the current they carry; the customer is billed only for watts. Everything a utility does with capacitors, synchronous condensers and pf-penalizing tariffs exists to close that gap.',
      },
    ],
    examples: [
      {
        title: 'From power triangle to load impedance (Nilsson Example 10.4)',
        problem: 'An electrical load operates at 240 V(rms) and absorbs an average power of 8 kW at a lagging power factor of 0.8. Calculate (a) the complex power of the load and (b) the impedance of the load.',
        steps: [
          { label: 'Step 1: Apparent power', text: 'Because the power factor is lagging the load is inductive and $Q$ is positive. From $P = S\\cos\\theta$: $S = 8000/0.8 = 10{,}000 = 10\\ \\mathrm{kVA}$.' },
          { label: 'Step 2: Reactive power', text: 'Since $\\cos\\theta = 0.8$, $\\sin\\theta = 0.6$, so $Q = S\\sin\\theta = 10{,}000 \\times 0.6 = 6\\ \\mathrm{kvar}$ and $S = 8 + j6\\ \\mathrm{kVA}$.' },
          { label: 'Step 3: Line current', text: 'From $P = V I_{\\mathrm{rms}} \\cos\\theta$: $I_{\\mathrm{rms}} = 8000/(240 \\times 0.8) = 41.67\\ \\mathrm{A}$.' },
          { label: 'Step 4: Load impedance', text: 'The impedance angle equals the power factor angle, $\\theta = \\cos^{-1}(0.8) = 36.87^\\circ$, and $|Z| = V/I = 240/41.67 = 5.76\\ \\Omega$, so $Z = 5.76\\angle 36.87^\\circ = 4.608 + j3.456\\ \\Omega$.' },
        ],
        result: 'Two numbers — 8 kW and 0.8 lagging at 240 V — fully determine the load: 41.67 A(rms) through $4.608 + j3.456\\ \\Omega$, absorbing $8 + j6$ kVA.',
      },
      {
        title: 'Correcting a motor with a 127 μF capacitor (Hughes Examples 13.4 and 13.5)',
        problem: 'A single-phase motor operating off a 400 V, 50 Hz supply develops 10 kW at an efficiency of 84 per cent and a power factor of 0.7 lagging. First find the input apparent power, the line current and its active and reactive components; then find the capacitance that must be connected in parallel to raise the supply power factor to 0.9 lagging.',
        steps: [
          { label: 'Step 1: Input volt-amperes', text: 'Efficiency $=$ output$/({VI\\cos\\phi})$, so $0.84 = 10\\,000/(V I \\times 0.7)$ gives $VI = 17\\,000\\ \\mathrm{VA} = 17\\ \\mathrm{kVA}$.' },
          { label: 'Step 2: Motor current and its components', text: '$I = 17\\,000/400 = 42.5\\ \\mathrm{A}$. Active component $42.5 \\times 0.7 = 29.75\\ \\mathrm{A}$; with $\\sin\\phi = \\sqrt{1 - 0.7^{2}} = 0.714$, reactive component $42.5 \\times 0.714 = 30.4\\ \\mathrm{A}$.' },
          { label: 'Step 3: Reactive power', text: '$Q = 400 \\times 30.35/1000 = 12.1\\ \\mathrm{kvar}$ inductive.' },
          { label: 'Step 4: Target supply current', text: 'The capacitor does not change the motor’s 29.75 A active component, so the new supply current is $I = 29.75/0.9 = 33.06\\ \\mathrm{A}$, whose reactive component is $33.06\\sqrt{1 - 0.9^{2}} = 33.06 \\times 0.436 = 14.4\\ \\mathrm{A}$.' },
          { label: 'Step 5: Capacitor current and size', text: '$I_{C} = 30.35 - 14.4 = 15.95\\ \\mathrm{A}$; with $I_{C} = 2\\pi f C V$, $C = 15.95/(2\\pi \\times 50 \\times 400) = 127\\ \\mu\\mathrm{F}$.' },
        ],
        result: 'A 127 μF capacitor in parallel drops the supply current from 42.5 A to 33.1 A without altering either the current or the power taken by the motor — an economy in the size of generating plant and in the cross-sectional area of the supply cable.',
      },
      {
        title: 'Two loads, one line, and a 424 μF capacitor (Nilsson Example 10.7)',
        problem: 'Two loads are fed from a 250 V(rms) source through a line whose resistance is 0.05 Ω. Load 1 absorbs 8 kW at a leading power factor of 0.8; Load 2 absorbs 20 kVA at a lagging power factor of 0.6. Find the combined power factor, the line current and the line loss; then compute the capacitor that corrects the power factor to 1 and the new line loss.',
        steps: [
          { label: 'Step 1: Complex power of each load', text: '$S_{1} = 8000 - j6000\\ \\mathrm{VA}$ (leading: $8000 \\times 0.6$ vars, capacitive) and $S_{2} = 12{,}000 + j16{,}000\\ \\mathrm{VA}$ (lagging: $20\\,\\mathrm{kVA} \\times 0.8$ vars, inductive).' },
          { label: 'Step 2: Combine and find the line current', text: '$S = 20{,}000 + j10{,}000\\ \\mathrm{VA}$, so $I_{s}^{*} = S/V = 80 + j40$ and $I_{s} = 80 - j40 = 89.44\\angle -26.57^\\circ\\ \\mathrm{A}$; the combined power factor is $\\cos 26.57^\\circ = 0.8944$ lagging.' },
          { label: 'Step 3: Line loss at 0.8944 power factor', text: '$P_{\\mathrm{line}} = (89.44)^{2}(0.05) = 400\\ \\mathrm{W}$ — the source must supply 20,400 W even though the loads use only 20,000 W.' },
          { label: 'Step 4: Size the capacitor', text: 'Correcting to unity requires the capacitor to furnish the net 10 kvar: $X = V^{2}/Q = 250^{2}/(-10{,}000) = -6.25\\ \\Omega$. The source operates at 60 Hz, so $\\omega = 2\\pi(60) = 376.99\\ \\mathrm{rad/s}$ and $C = -1/(\\omega X) = 1/(376.99 \\times 6.25) = 424.4\\ \\mu\\mathrm{F}$.' },
          { label: 'Step 5: Line loss after correction', text: 'Now $I_{s} = 20{,}000/250 = 80\\ \\mathrm{A}$ and $P_{\\mathrm{line}} = (80)^{2}(0.05) = 320\\ \\mathrm{W}$ — the loss falls by 20 percent, and the power supplied totals 20,320 W.' },
        ],
        result: 'One 424.4 μF capacitor converts a 0.8944-lagging pair of loads into a unity-power-factor load: current falls from 89.44 A to 80 A and the line loss from 400 W to 320 W with the loads none the wiser.',
      },
    ],
    keyTakeaways: [
      'Complex power $S = P + jQ$ in volt-amperes; from rms phasors, $S = V_{\\mathrm{rms}} I_{\\mathrm{rms}}^{*}$, or $\\frac{1}{2}VI^{*}$ with amplitude phasors.',
      'The power triangle sides and angle satisfy $|S|^{2} = P^{2} + Q^{2}$ and $\\tan\\theta = Q/P$; any two of the four quantities determine the rest.',
      'Impedance shortcuts: $P = I_{\\mathrm{rms}}^{2}R$, $Q = I_{\\mathrm{rms}}^{2}X$, $P = V_{\\mathrm{rms}}^{2}/R$, $Q = V_{\\mathrm{rms}}^{2}/X$ — reactance signs and all.',
      'Parallel loads: watts and vars add algebraically; volt-amperes add as phasors, never arithmetically.',
      'A lagging load is corrected by a parallel capacitor that furnishes $P(\\tan\\phi_{\\mathrm{old}} - \\tan\\phi_{\\mathrm{new}})$ vars; the active power is untouched.',
      'Correction rarely goes to unity: the cost of capacitors is balanced against tariff savings, as Hughes’s 53 μF versus 127 μF comparison makes concrete.',
      'Line loss scales with $I^{2}$, so raising a power factor pays twice — in released kilovolt-amperes and in reduced conductor heating.',
    ],
    quiz: [
      {
        q: 'A load absorbs 8 kW at 0.8 lagging from a 240 V(rms) supply. Its complex power is:',
        options: [`$S = 6.4 + j4.8\\ \\mathrm{kVA}$`, `$S = 8 + j6\\ \\mathrm{kVA}$`, `$S = 10 + j6\\ \\mathrm{kVA}$`, `$S = 8 - j6\\ \\mathrm{kVA}$`],
        answer: 1,
        explanation: 'Lagging means $Q$ is positive. $|S| = P/\\cos\\theta = 8/0.8 = 10\\ \\mathrm{kVA}$ and $Q = 10 \\times 0.6 = 6\\ \\mathrm{kvar}$, so $S = 8 + j6\\ \\mathrm{kVA}$.',
      },
      {
        q: 'Two loads operate in parallel. Which statement about combining them is correct?',
        options: ['Both the total watts and the total volt-amperes are the sums of the individual values', 'Watts add algebraically, vars add algebraically, but volt-amperes do not add arithmetically', 'Only the reactive powers can simply be added, since they share the same axis', 'None of the three quantities can be summed directly'],
        answer: 1,
        explanation: 'Watts and vars are resolved along the common real and imaginary axes, so they add algebraically (vars with sign: inductive positive, capacitive negative). Each load’s volt-amperes point at its own power factor angle, so they add as phasors — which is why the resultant triangle must be constructed before $|S|$ is known.',
      },
      {
        q: 'In Hughes’s motor example, the 42.5 A motor current at 0.7 lagging contains an active component of:',
        options: ['42.5 A, because the whole current does work', '30.4 A, the in-phase part', '29.75 A, equal to $42.5 \\times 0.7$', '12.1 A, the part that produces 12.1 kvar'],
        answer: 2,
        explanation: 'The active component is $I\\cos\\phi = 42.5 \\times 0.7 = 29.75\\ \\mathrm{A}$; the quadrature component $I\\sin\\phi = 42.5 \\times 0.714 = 30.4\\ \\mathrm{A}$ produces the 12.1 kvar of reactive power and no watts.',
      },
      {
        q: 'Why is power-factor correction in practice rarely taken all the way to unity?',
        options: ['A unity power factor would overload the correction capacitor', 'Because the supply authority forbids unity operation', 'Because the cost of the correction equipment must be balanced against the resulting savings in electricity charges', 'Because a capacitor that corrects the power factor also reduces the active power delivered'],
        answer: 2,
        explanation: 'Correction equipment is bought by the microfarad. Hughes’s Example 13.7 needs 53 μF to reach 0.96 lagging but 127 μF to reach unity — the last few hundredths of power factor are the most expensive, and the active power is completely unaffected by the capacitor.',
      },
      {
        q: 'In Nilsson Example 10.7, correcting the combined load to unity reduced the line current from 89.44 A to 80 A. The line-loss reduction was:',
        options: ['Exactly 10 percent, because the current fell by 10 percent', '20 percent, from 400 W to 320 W, because loss scales with the square of the current', '50 percent, because the reactive power was eliminated', 'Negligible, because the line resistance is only 0.05 Ω'],
        answer: 1,
        explanation: '$P_{\\mathrm{line}} = I^{2}R$: before, $(89.44)^{2}(0.05) = 400\\ \\mathrm{W}$; after, $(80)^{2}(0.05) = 320\\ \\mathrm{W}$. The current fell by about 10.6 percent, and the loss — which goes as the square — fell by 20 percent.',
      },
      // PYQ-pattern: GATE 2020 — power-factor correction capacitor (rephrased, values changed)
      {
        q: 'A 5 kW load at 0.70 lagging power factor, fed at 230 V and 50 Hz, is to be corrected to 0.95 lagging with a parallel capacitor. The required capacitance is closest to:',
        options: ['98 μF', '142 μF', '208 μF', '330 μF'],
        answer: 2,
        explanation: 'Step 1 — Given: $P = 5000$ W, $\\cos\\phi_{1} = 0.70$, target $\\cos\\phi_{2} = 0.95$, $V = 230$ V RMS, $f = 50$ Hz. Step 2 — Governing bookkeeping: $Q_{1} = P\\tan\\phi_{1}$, $Q_{2} = P\\tan\\phi_{2}$, capacitor supplies $Q_{c} = Q_{1} - Q_{2} = V^{2}\\omega C$. Step 3 — Algebra: $\\phi_{1} \\approx 45.57$ degrees with $\\tan \\approx 1.020$ so $Q_{1} \\approx 5100$ var; $\\phi_{2} \\approx 18.19$ degrees with $\\tan \\approx 0.3287$ so $Q_{2} \\approx 1643$ var; $Q_{c} \\approx 3457$ var; $C = \\frac{3457}{230^{2} \\times 314.16} \\approx 208 \\times 10^{-6}$ F. Step 4 — Sanity check: capacitor vars are positive-supplied, hundreds of microfarads suit kilowatt mains correction, and the corrected current falls while real power is untouched. Step 5 — Distractor analysis: 98 μF corrects only toward $0.85$, 142 μF mis-rounds the angles, and 330 μF over-corrects toward unity and beyond. Step 6 — Conclude: about 208 μF.',
      },
    ],
  },

  // ------------------------------------------------------------------ 9.3
  {
    sectionId: 'ee-e-circuits-s33',
    readingTime: 9,
    intro: 'Resonance is what happens when the inductive and capacitive reactances of an AC circuit are equal in magnitude. It may be achieved by varying the frequency or by varying a component — usually the capacitance — and it makes the circuit respond in a markedly different manner at the resonant frequency than at any other. A series resonant circuit magnifies a chosen signal and separates it from signals of other frequencies; the tuning of a radio is the canonical example. This section follows Hughes Chapter 14 from the dynamic curves of a series RLC circuit through Q, bandwidth and selectivity to the practical parallel resonant rejector.',
    objectives: [
      'Derive the resonant frequency of series and parallel RLC circuits from the reactance equality',
      'Compute the Q factor, the voltage or current magnification and the bandwidth of resonant circuits',
      'Explain the oscillation of energy at resonance and the general definition of Q as a power ratio',
      'Analyse the practical two-branch parallel circuit, its dynamic resistance and its exact resonant frequency',
    ],
    concepts: [
      {
        term: 'Frequency variation in a series RLC circuit',
        kind: 'insight',
        statement: 'The inductive reactance $X_{L} = 2\\pi f L$ increases linearly with frequency while the capacitive reactance $X_{C} = 1/(2\\pi f C)$ falls hyperbolically, so the impedance $$Z = \\sqrt{R^{2} + \\left(\\omega L - \\frac{1}{\\omega C}\\right)^{2}}$$ passes through a minimum: below $f_{r}$ the circuit is capacitive, above $f_{r}$ it is inductive, and at $f_{r}$ it is purely resistive.',
        detail: 'The phase angle $\\phi = \\tan^{-1}[(X_{L} - X_{C})/R]$ swings from $-90^\\circ$ through zero to $+90^\\circ$ as the frequency sweeps upward, and the current mirrors the impedance: smallest at the extremes, largest at resonance. These dynamic curves — reactance, impedance, current and phase against frequency — are the complete portrait of the resonant circuit.',
      },
      {
        term: 'Series resonance',
        kind: 'law',
        statement: 'Setting $X_{L} = X_{C}$ gives the **resonant frequency** $$f_{r} = \\frac{1}{2\\pi\\sqrt{LC}} \\qquad \\left(\\omega_{r} = \\frac{1}{\\sqrt{LC}}\\right).$$ At this frequency $Z = R$ and $I = V/R$: the impedance is a pure minimum, the current a maximum, and the circuit is an **acceptor**.',
        detail: 'The equality $\\omega_{r} L = 1/(\\omega_{r} C)$ is the only condition; R does not shift the resonant frequency at all — it only limits how large the current peak can become. At $f_{r}$ the phasor diagram collapses onto the resistance axis: $V_{L}$ and $V_{C}$ are equal and opposite and cancel exactly.',
      },
      {
        term: 'Q factor and voltage magnification',
        kind: 'law',
        statement: 'At resonance the voltages across L and C can greatly exceed the applied voltage: $V_{C} = V_{L} = QV$, where $$Q = \\frac{\\omega_{r} L}{R} = \\frac{1}{\\omega_{r} C R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}.$$ Q is called the **voltage magnification** because the capacitor and inductor voltages equal $Q$ times the source voltage.',
        detail: 'In communications receivers Q values of tens to hundreds are routine, which is why series-resonant components can suffer damage from voltages many times the supply if the magnification is not anticipated in the design. The definition is symmetric: using $X_{L} = X_{C}$ at resonance, either reactance divided by R gives the same Q.',
      },
      {
        term: 'Oscillation of energy at resonance',
        kind: 'definition',
        statement: 'At the resonant frequency the maximum magnetic energy $\\frac{1}{2} L I_{m}^{2}$ equals the maximum electrostatic energy $\\frac{1}{2} C V_{m}^{2}$, and energy oscillates between the two storage elements — electrostatic in the capacitor one quarter-cycle, magnetic in the inductor the next. This yields the general definition $$Q = \\frac{\\mathrm{reactive\\ power}}{\\mathrm{average\\ power}}$$ evaluated at resonance.',
        detail: 'The resistor is the only sink: as energy shuttles back and forth, $I^{2}R$ losses bleed away what the source must continually replace. The lower the R, the less power is dissipated per cycle of exchange, the higher the Q and the sharper the resonance peak. Hughes offers a mechanical analogy — a mass on a spring, each small downward tap timed to the natural oscillation building large amplitude from small forces, exactly as a watch escapement feeds a balance wheel.',
      },
      {
        term: 'Bandwidth and half-power points',
        kind: 'law',
        statement: 'The **bandwidth** is the frequency range between the half-power points, where $I = I_{\\max}/\\sqrt{2}$ and the impedance satisfies $Z = R(1 \\pm j)$. The defining results are $$\\mathrm{BW} = \\omega_{2} - \\omega_{1} = \\frac{\\omega_{r}}{Q}, \\qquad \\omega_{1}\\omega_{2} = \\omega_{r}^{2}.$$',
        detail: 'At the half-power frequencies the phase angle of the current is exactly $\\pm 45^\\circ$ — below resonance the circuit is capacitive and $Z = R(1 - j)$, above it inductive with $Z = R(1 + j)$ — and the power dissipated is half of $P_{\\max} = V^{2}/R$. The resonance curve is not perfectly symmetrical about $\\omega_{r}$, but the product relation shows $\\omega_{r}$ is the geometric mean of the half-power points, and for high Q the curve looks symmetrical.',
      },
      {
        term: 'Selectivity',
        kind: 'insight',
        statement: 'A circuit is **selective** if its response has a sharp peak and narrow bandwidth; since $\\mathrm{BW} = f_{r}/Q$, selectivity is bought with Q, and Q is bought with small R. A series tuned circuit must therefore be driven by a voltage source of low internal resistance if it is to exhibit a pronounced resonance peak.',
        detail: 'Series resonant circuits designed to select a small band of frequencies are the basis of bandpass (passband) filters, treated in the filters chapters. The trade-off is fundamental: narrowing the bandwidth of acceptance means rejecting more of everything else, but it also makes the circuit slower to respond to changes in the signal.',
      },
      {
        term: 'Parallel resonance (three-branch circuit)',
        kind: 'law',
        statement: 'For the three-branch circuit of R, L and C in parallel, the admittance is $$Y = G + j\\left(\\omega C - \\frac{1}{\\omega L}\\right),$$ and resonance again occurs when $\\omega C = 1/(\\omega L)$ — the same $\\omega_{r} = 1/\\sqrt{LC}$. At resonance $Y = G$ and $V = I/G$: the impedance is a maximum and the total line current a minimum.',
        detail: 'The parallel equations are exact duals of the series ones — $V$ for $I$, $Y$ for $Z$, $G$ for $R$ — so every series result translates. The line current divides between the branches; because the branch currents exceed the supply current, this is the **current magnification** case: $|I_{L}| = Q I$ where $Q = \\omega_{r} C/G = B/G$, the susceptance-to-conductance ratio.',
      },
      {
        term: 'The two-branch circuit and dynamic resistance',
        kind: 'law',
        statement: 'A practical inductor has resistance, giving the two-branch circuit of R$_{S}$ + j$\\omega$L in parallel with C. Converting the coil to its parallel equivalent gives $R_{P} = Q^{2} R_{S}$ for $Q \\gg 1$, and the impedance at resonance is the **dynamic resistance** $$Z_{r} = \\frac{L}{C R_{S}}.$$',
        detail: 'The exact resonant frequency of the two-branch circuit is $f_{r} = \\frac{1}{2\\pi}\\sqrt{\\frac{1}{LC} - \\frac{R_{S}^{2}}{L^{2}}}$, which reduces to the series-circuit value whenever $R_{S} \\ll \\omega_{r} L$, as in communications coils. The lower the coil resistance, the larger the dynamic resistance — exactly what good selectivity demands of a **rejector**, the parallel resonant stopband element whose impedance peaks and whose line current bottoms at resonance.',
      },
    ],
    examples: [
      {
        title: 'A 50 Hz resonant circuit with 39× voltage magnification (Hughes Example 14.1)',
        problem: 'A circuit having a resistance of 4.0 Ω, an inductance of 0.50 H and a variable capacitance in series is connected across a 100 V, 50 Hz supply. Calculate (a) the capacitance to give resonance, (b) the voltages across the inductance and the capacitance and (c) the Q factor of the circuit.',
        steps: [
          { label: 'Step 1: Capacitance for resonance', text: 'Set $2\\pi f_{r} L = 1/(2\\pi f_{r} C)$ with $f_{r} = 50\\ \\mathrm{Hz}$: $C = 1/[(2\\pi \\times 50)^{2} \\times 0.5] = 20.3\\ \\mu\\mathrm{F}$.' },
          { label: 'Step 2: Resonant current', text: 'At resonance $Z = R$, so $I = V/R = 100/4 = 25\\ \\mathrm{A}$.' },
          { label: 'Step 3: Component voltages', text: '$V_{L} = I \\cdot 2\\pi f L = 25 \\times 2\\pi \\times 50 \\times 0.5 = 3930\\ \\mathrm{V}$, and $V_{C} = 3930\\ \\mathrm{V}$ as well — each nearly 40 times the supply voltage, though they cancel in the loop equation.' },
          { label: 'Step 4: Q factor', text: '$Q = 2\\pi f_{r} L/R = (2\\pi \\times 50 \\times 0.5)/4 = 39.3$, confirming $V_{L} = QV = 39.3 \\times 100 \\approx 3930\\ \\mathrm{V}$.' },
        ],
        result: 'With C = 20.3 μF the circuit resonates at 50 Hz: 25 A flows, and 3930 V appears across both L and C from a 100 V source — the voltage magnification that makes series resonance powerful and, unmanaged, destructive.',
      },
      {
        title: 'Half-power points of a 6 kHz resonant circuit (Hughes Example 14.4)',
        problem: 'A series resonant circuit has $R = 4\\ \\Omega$ and, at resonance, $X_{L} = j20\\ \\Omega$ and $X_{C} = -j20\\ \\Omega$, driven by $V = 20\\angle 0^\\circ$ V with $f_{r} = 6000\\ \\mathrm{Hz}$. Calculate the current and component voltages at resonance, the Q factor, the bandwidth, the half-power frequencies and the power dissipated at those frequencies.',
        steps: [
          { label: 'Step 1: Resonant current and voltages', text: '$I_{\\max} = 20\\angle 0^\\circ/4 = 5\\angle 0^\\circ\\ \\mathrm{A}$; $V_{R} = 20\\angle 0^\\circ\\ \\mathrm{V}$; $V_{L} = (5\\angle 0^\\circ)(20\\angle 90^\\circ) = 100\\angle 90^\\circ\\ \\mathrm{V}$; $V_{C} = 100\\angle -90^\\circ\\ \\mathrm{V}$.' },
          { label: 'Step 2: Q factor', text: '$Q = X_{L}/R = 20/4 = 5$.' },
          { label: 'Step 3: Bandwidth', text: '$\\mathrm{BW} = f_{r}/Q = 6000/5 = 1200\\ \\mathrm{Hz}$, so the half-power frequencies sit 600 Hz either side: $f_{1} = 6000 - 600 = 5400\\ \\mathrm{Hz}$ and $f_{2} = 6000 + 600 = 6600\\ \\mathrm{Hz}$.' },
          { label: 'Step 4: Power at the half-power points', text: '$P_{\\max} = I_{\\max}^{2} R = 5^{2} \\times 4 = 100\\ \\mathrm{W}$ at resonance; at $f_{1}$ and $f_{2}$ the power is $\\frac{1}{2} P_{\\max} = 50\\ \\mathrm{W}$, where $|I| = 5/\\sqrt{2}\\ \\mathrm{A}$ and $Z = 4(1 \\pm j)\\ \\Omega$.' },
        ],
        result: 'Q = 5 gives a 1200 Hz bandwidth centred on 6 kHz; power halves at 5400 Hz and 6600 Hz, where the current phase is ±45°.',
      },
      {
        title: 'A parallel resonant rejector at 10 kHz (Hughes Example 14.5)',
        problem: 'A coil of 1 kΩ resistance and 0.15 H inductance is connected in parallel with a variable capacitor across a 2.0 V, 10 kHz AC supply. Calculate (a) the capacitance when the supply current is a minimum, (b) the effective impedance of the network at resonance and (c) the supply current.',
        steps: [
          { label: 'Step 1: Capacitance at minimum current', text: 'The supply current is minimum at resonance, so set $f_{r} = 10\\ \\mathrm{kHz}$: $C = 1/(4\\pi^{2} L f_{r}^{2}) = 1/(4\\pi^{2} \\times 0.15 \\times 10^{8}) = 1.69\\ \\mathrm{nF}$.' },
          { label: 'Step 2: Dynamic resistance', text: '$Z_{r} = L/(C R_{S}) = 0.15/(1.69 \\times 10^{-9} \\times 1000) = 89\\ \\mathrm{k\\Omega}$ — enormously larger than either branch impedance.' },
          { label: 'Step 3: Supply current', text: '$I_{S} = V/Z_{r} = 2/(89 \\times 10^{3}) = 22.5\\ \\mu\\mathrm{A}$, while the circulating branch currents are milliamperes.' },
        ],
        result: 'With C = 1.69 nF the network is a rejector at 10 kHz: 89 kΩ of dynamic resistance drawn from a 2 V source yields only 22.5 μA of line current.',
      },
    ],
    keyTakeaways: [
      'Resonance is the condition $X_{L} = X_{C}$, giving $f_{r} = 1/(2\\pi\\sqrt{LC})$ for both series and parallel (ideal) RLC circuits — independent of R.',
      'A series circuit at resonance is a pure resistance R: minimum impedance, maximum current $V/R$, zero phase angle; it is an acceptor.',
      'Voltage magnification: $V_{L} = V_{C} = QV$ with $Q = \\omega_{r} L/R = 1/(\\omega_{r} C R)$ — component ratings must anticipate it.',
      'Q has a physical definition independent of topology: reactive power divided by average power at resonance, equivalently $2\\pi$ times stored energy over energy lost per cycle.',
      'Bandwidth between half-power points is $\\mathrm{BW} = f_{r}/Q$, with $\\omega_{1}\\omega_{2} = \\omega_{r}^{2}$ and ±45° current phase at the band edges.',
      'A parallel resonant circuit is a rejector: maximum impedance, minimum line current, and current magnification $|I_{L}| = QI$ in the branches.',
      'The practical two-branch circuit resonates at $\\frac{1}{2\\pi}\\sqrt{1/(LC) - R_{S}^{2}/L^{2}}$ and presents a dynamic resistance $L/(C R_{S})$ at resonance — small coil resistance means high dynamic resistance and good selectivity.',
    ],
    quiz: [
      {
        q: 'At the resonant frequency of a series RLC circuit, the impedance is:',
        options: ['A maximum of $\\sqrt{R^{2} + (2\\omega L)^{2}}$', 'Purely capacitive because $X_{C}$ dominates at low frequency', 'Exactly $R$, purely resistive and a minimum', 'Zero, which is why the current becomes infinite'],
        answer: 2,
        explanation: 'At $f_{r}$ the equal and opposite reactances cancel, $Z = R$ and $I = V/R$. Nothing blows up because R limits the current — but the individual voltages $V_{L}$ and $V_{C}$ can be $Q$ times the supply.',
      },
      {
        q: 'In Hughes Example 14.1, a 100 V supply drives a series circuit with Q = 39.3. The voltage across the capacitor at resonance is approximately:',
        options: ['100 V, the supply value', '2.5 V, since the current is limited by R', '3930 V, the magnified value $QV$', 'Zero, because the capacitor and inductor cancel'],
        answer: 2,
        explanation: 'Voltage magnification gives $V_{C} = QV = 39.3 \\times 100 = 3930\\ \\mathrm{V}$. The inductor and capacitor voltages cancel in the loop sum, but each one alone is very real and can destroy an under-rated component.',
      },
      {
        q: 'The half-power points of a series resonant circuit are characterized by:',
        options: [`$I = I_{\\max}/\\sqrt{2}$ and $Z = R(1 \\pm j)$`, `$I = I_{\\max}/2$ and $\\phi = 90^\\circ$`, `$P = P_{\\max}/\\sqrt{2}$ and $Z = R$`, 'Current zero and purely reactive impedance'],
        answer: 0,
        explanation: 'Half the maximum power means $I^{2}$ has halved, so $I = I_{\\max}/\\sqrt{2}$ and $|Z| = R\\sqrt{2}$, written $Z = R(1 \\pm j)$ — the current phase is $\\mp 45^\\circ$ there, capacitive below resonance and inductive above.',
      },
      {
        q: 'A series resonant circuit has $f_{r} = 6000\\ \\mathrm{Hz}$ and $Q = 5$. Its bandwidth and half-power frequencies are:',
        options: ['BW = 30000 Hz with $f_{1} = 0$ and $f_{2} = 30\\ \\mathrm{kHz}$', 'BW = 1200 Hz with $f_{1} = 5400\\ \\mathrm{Hz}$ and $f_{2} = 6600\\ \\mathrm{Hz}$', 'BW = 600 Hz with $f_{1} = 5700\\ \\mathrm{Hz}$ and $f_{2} = 6300\\ \\mathrm{Hz}$', 'BW = 1000 Hz with $f_{1} = 5500\\ \\mathrm{Hz}$ and $f_{2} = 6500\\ \\mathrm{Hz}$'],
        answer: 1,
        explanation: '$\\mathrm{BW} = f_{r}/Q = 6000/5 = 1200\\ \\mathrm{Hz}$; the band edges sit $\\mathrm{BW}/2 = 600\\ \\mathrm{Hz}$ either side of 6 kHz, at 5400 Hz and 6600 Hz.',
      },
      {
        q: 'A parallel resonant (rejector) circuit, compared with its series counterpart at resonance, has:',
        options: ['Minimum impedance and maximum line current', 'Maximum impedance and minimum line current, with branch currents of magnitude $QI$', 'The same impedance as the series circuit, namely $R$', 'Zero impedance because the susceptances cancel'],
        answer: 1,
        explanation: 'The susceptances cancel, leaving $Y = G$: impedance is maximum and line current minimum. The energy still circulates, so the branch currents are magnified — $|I_{L}| = QI$ — which is current magnification, the dual of the series circuit’s voltage magnification.',
      },
      // PYQ-pattern: ISRO 2015 — series resonance frequency (rephrased, values changed)
      {
        q: 'A series RLC circuit uses R = 10 Ω, L = 50 mH and C = 20 μF. Its resonant frequency is closest to:',
        options: ['79 Hz', '159 Hz', '318 Hz', '1592 Hz'],
        answer: 1,
        explanation: 'Step 1 — Given: $R = 10$ Ω, $L = 50$ mH, $C = 20$ μF. Step 2 — Governing condition: reactances cancel so $\\omega_{0} = \\frac{1}{\\sqrt{LC}}$ and $f_{0} = \\frac{\\omega_{0}}{2\\pi}$, with $Q = \\frac{\\omega_{0}L}{R}$. Step 3 — Algebra: $LC = 10^{-6}$, $\\sqrt{LC} = 10^{-3}$, $\\omega_{0} = 1000$ rad per s, $f_{0} = \\frac{1000}{2\\pi} \\approx 159.15$ Hz; $Q = \\frac{1000 \\times 0.05}{10} = 5$. Step 4 — Sanity check: at resonance impedance is minimum $10$ Ω and purely resistive, $Q$ of $5$ gives a bandwidth near $32$ Hz, and units resolve correctly. Step 5 — Distractor analysis: 79 Hz halves by misplacing $2\\pi$, 318 Hz doubles, and 1592 Hz drops a decade. Step 6 — Conclude: resonance sits near 159 Hz.',
      },
    ],
  },

  // ------------------------------------------------------------------ 9.4
  {
    sectionId: 'ee-e-circuits-s34',
    readingTime: 11,
    intro: 'The greater the power supplied at a given voltage, the greater the current — and single-phase supply handles large currents badly: its motors are not self-starting, and its instantaneous power pulsates. Three-phase systems dominate electricity supply because they transmit high powers efficiently, deliver constant instantaneous power (hence smooth motor torque) and provide powerful self-starting motor drives. This section merges Hughes Chapter 28 and Nilsson Chapter 11: star and delta connections, the $\\sqrt{3}$ relations between line and phase quantities, the single-phase equivalent circuit, and power measurement by the two-wattmeter method.',
    objectives: [
      'Explain the advantages of three-phase generation and show that the total instantaneous power of a balanced system is constant',
      'Derive and apply the line–phase voltage and current relations for star and delta connections',
      'Analyse a balanced Y-Y circuit with the single-phase equivalent and the $\\Delta$-to-Y transformation',
      'Compute total, per-phase and line-loss power in balanced three-phase circuits',
      'Measure power with two wattmeters and extract the power factor from their readings',
    ],
    concepts: [
      {
        term: 'Why three phase',
        kind: 'insight',
        statement: 'A single-phase induction motor is not self-starting without an auxiliary winding; with three windings carrying currents differing in phase by a third of a cycle, the motor is self-starting with better efficiency and power factor. The total instantaneous power of a balanced three-phase system is constant, $$p_{T} = 1.5 V_{m} I_{m} \\cos\\theta_{\\phi},$$ so the torque at the shaft of a three-phase motor never pulsates.',
        detail: 'Three separate loops fixed at 120° to one another on one shaft generate three equal e.m.f.s displaced by a third of a cycle: $e_{R} = E_{m}\\sin\\theta$, $e_{Y} = E_{m}\\sin(\\theta - 120^\\circ)$, $e_{B} = E_{m}\\sin(\\theta - 240^\\circ)$. Their instantaneous sum is zero at every instant — the fact that lets the three return conductors of six-wire single-phase supply collapse into one (or none). Less vibration in machinery and smaller conductors for the same power complete the argument.',
      },
      {
        term: 'Balanced three-phase voltages and phase sequence',
        kind: 'definition',
        statement: 'A set of balanced three-phase voltages has identical amplitudes and frequencies and phase separations of exactly 120°. For the **abc (positive) sequence** $V_{a} = V_{m}\\angle 0^\\circ$, $V_{b} = V_{m}\\angle -120^\\circ$, $V_{c} = V_{m}\\angle +120^\\circ$; for the **acb (negative) sequence** b and c swap. In either case $V_{a} + V_{b} + V_{c} = 0$.',
        detail: 'The sum is zero as phasors and therefore at every instant of time as well. The phase sequence is the clockwise order of the subscripts around the phasor diagram starting from $V_{a}$. Knowing the sequence plus one voltage gives the entire set — the first of the analytical shortcuts that make balanced three-phase analysis a one-phase job.',
      },
      {
        term: 'Star (wye) connection',
        kind: 'law',
        statement: 'Joining the three winding starts at a neutral point N gives the star connection, for which $$V_{L} = \\sqrt{3}\\, V_{P}, \\qquad I_{L} = I_{P}.$$ The line voltages form a balanced set displaced by 30° from the phase voltages (leading for positive sequence).',
        detail: 'The derivation is one phasor subtraction: $V_{AB} = V_{AN} - V_{BN} = \\sqrt{3} V_{\\phi}\\angle 30^\\circ$. In the four-wire system, lamps and heaters connect between line and neutral while motors connect across lines; with an exactly balanced load the neutral carries $(i_{R} + i_{Y} + i_{B}) = 0$ at every instant, so the neutral can be omitted, giving the three-wire star system. Hughes illustrates with a 10 A peak set: at one instant 5 A flows out in R and 5 A out in B while 10 A returns in Y; at another, 8.66 A out in R returns in B — the division shifts continuously while the algebraic sum stays zero.',
      },
      {
        term: 'Delta (mesh) connection',
        kind: 'law',
        statement: 'Connecting the finish of each winding to the start of the next gives the delta or mesh connection, for which $$V_{L} = V_{P}, \\qquad I_{L} = \\sqrt{3}\\, I_{P},$$ the line currents lagging the phase currents by 30° for a positive sequence.',
        detail: 'The mesh can be closed with no circulating current because the three e.m.f.s sum to zero at every instant — Hughes verifies this both algebraically and instant by instant on the waveform diagram. Like the star case, the $\\sqrt{3}$ comes from a 30°-half-angle phasor subtraction, here of the branch currents: $I_{R} = I_{1} - I_{3} = \\sqrt{3} I_{\\phi}\\angle -30^\\circ$.',
      },
      {
        term: 'Balanced circuits and the single-phase equivalent',
        kind: 'method',
        statement: 'A three-phase circuit is balanced when (1) the sources form a balanced set, (2) each phase of the source has the same impedance, (3) each line has the same impedance and (4) each phase of the load has the same impedance. Then $V_{N} = 0$ and $I_{0} = 0$, and the a-phase can be solved alone as $$I_{aA} = \\frac{V_{a^{\\prime}n}}{Z_{\\phi}}$$ with the b- and c-phases following by $\\mp 120^\\circ$ shifts.',
        detail: 'The neutral may be removed or replaced by a short circuit — both are valid models since it carries no current. A balanced delta load reduces to wye by the $\\Delta$-to-Y transformation of Chapter 3 with $Z_{Y} = Z_{\\Delta}/3$ per phase (the impedance angle is unchanged). All ratings in three-phase practice are rms line values: a 345 kV transmission line is 345,000 V(rms) line-to-line.',
      },
      {
        term: 'Power in balanced three-phase circuits',
        kind: 'law',
        statement: 'Active power per phase is $P_{\\phi} = V_{\\phi} I_{\\phi}\\cos\\theta_{\\phi}$, so the total is $$P_{T} = 3 V_{\\phi} I_{\\phi}\\cos\\theta_{\\phi} = \\sqrt{3}\\, V_{L} I_{L} \\cos\\theta_{\\phi},$$ and identically $Q_{T} = \\sqrt{3} V_{L} I_{L}\\sin\\theta_{\\phi}$ and $S_{T} = \\sqrt{3} V_{L} I_{L}$. The formula is the same for star and delta — only the meaning of $V_{\\phi}$, $I_{\\phi}$ changes.',
        detail: 'The angle $\\theta_{\\phi}$ is between the phase voltage and phase current of one phase, not between line quantities. For a Y load, $V_{\\phi} = V_{L}/\\sqrt{3}$ and $I_{\\phi} = I_{L}$; for a $\\Delta$ load, $V_{\\phi} = V_{L}$ and $I_{\\phi} = I_{L}/\\sqrt{3}$ — substituting either pair into $3V_{\\phi} I_{\\phi}\\cos\\theta_{\\phi}$ produces the same $\\sqrt{3} V_{L} I_{L}\\cos\\theta_{\\phi}$.',
      },
      {
        term: 'The two-wattmeter method',
        kind: 'law',
        statement: 'The current coils of two wattmeters go in any two lines, their potential coils connecting to the third line. The sum of the readings gives the total active power **under all conditions** — balanced or unbalanced, sinusoidal or not. For a balanced load with positive sequence, $$W_{1} = V_{L} I_{L}\\cos(\\theta_{\\phi} + 30^\\circ), \\qquad W_{2} = V_{L} I_{L}\\cos(\\theta_{\\phi} - 30^\\circ).$$',
        detail: 'The proof writes the instantaneous powers as $i_{R}(v_{RN} - v_{YN}) + i_{B}(v_{BN} - v_{YN})$ and collapses it with Kirchhoff’s current law at the neutral, $i_{R} + i_{B} = -i_{Y}$ — no assumption of balance or sinusoidal shape enters. The three readings rules follow from the cosine shifts: if the power factor exceeds 0.5 both meters read positive; at exactly 0.5 one reads zero; below 0.5 one reads negative (reverse its coil connections and record the value as negative). Reversing the phase sequence interchanges the two readings.',
      },
      {
        term: 'Power factor from two wattmeter readings',
        kind: 'method',
        statement: 'Taking the difference over the sum of the readings eliminates the load: $$\\tan\\theta_{\\phi} = \\sqrt{3}\\,\\frac{W_{2} - W_{1}}{W_{2} + W_{1}},$$ from which the power factor follows as $\\cos\\theta_{\\phi}$.',
        detail: 'The derivation adds and subtracts the two cosine expressions — their sum returns $\\sqrt{3} V_{L} I_{L}\\cos\\theta_{\\phi}$ (the total power) and their difference returns $V_{L} I_{L}\\sin\\theta_{\\phi}$. Hughes notes the alternative of reading the ratio $W_{1}/W_{2}$ off a plotted calibration curve, and that the sign of $\\theta_{\\phi}$ — lagging or leading — cannot be recovered from wattmeter data alone.',
      },
    ],
    examples: [
      {
        title: 'A balanced Y-Y system, start to finish (Nilsson Examples 11.1 and 11.3)',
        problem: 'A balanced Y-connected generator with per-phase impedance $0.2 + j0.5\\ \\Omega$ and internal voltage 120 V/φ feeds a balanced Y load of $39 + j28\\ \\Omega$/φ through a line of $0.8 + j1.5\\ \\Omega$/φ. Find the line currents, the load phase voltages and the load line voltages; then compute the power delivered to the load and lost in the line.',
        steps: [
          { label: 'Step 1: Single-phase equivalent', text: 'The a-phase total impedance is $(0.2 + 0.8 + 39) + j(0.5 + 1.5 + 28) = 40 + j30\\ \\Omega$, so $I_{aA} = 120\\angle 0^\\circ/(40 + j30) = 2.4\\angle -36.87^\\circ\\ \\mathrm{A}$; by the positive sequence, $I_{bB} = 2.4\\angle -156.87^\\circ$ and $I_{cC} = 2.4\\angle 83.13^\\circ\\ \\mathrm{A}$.' },
          { label: 'Step 2: Load phase voltages', text: '$V_{AN} = (39 + j28)(2.4\\angle -36.87^\\circ) = 115.22\\angle -1.19^\\circ\\ \\mathrm{V}$, with $V_{BN}$ and $V_{CN}$ at $\\mp 120^\\circ$ from it.' },
          { label: 'Step 3: Load line voltages', text: 'Line voltages are $\\sqrt{3}$ larger and lead by 30°: $V_{AB} = (\\sqrt{3}\\angle 30^\\circ) V_{AN} = 199.58\\angle 28.81^\\circ\\ \\mathrm{V}$, with $V_{BC}$ and $V_{CA}$ at $-120^\\circ$ spacings.' },
          { label: 'Step 4: Power per phase and total', text: 'With $\\theta_{\\phi} = -1.19^\\circ - (-36.87^\\circ) = 35.68^\\circ$: $P_{\\phi} = (115.22)(2.4)\\cos 35.68^\\circ = 224.64\\ \\mathrm{W}$ — check: $I^{2} R = (2.4)^{2}(39) = 224.64\\ \\mathrm{W}$. Total: $P_{T} = 3 P_{\\phi} = 673.92\\ \\mathrm{W}$, and indeed $\\sqrt{3}(199.58)(2.4)\\cos 35.68^\\circ = 673.92\\ \\mathrm{W}$.' },
          { label: 'Step 5: Losses and reactive power', text: 'Line loss $= 3(2.4)^{2}(0.8) = 13.824\\ \\mathrm{W}$; generator internal loss $= 3(2.4)^{2}(0.2) = 3.456\\ \\mathrm{W}$; the load absorbs $Q_{T} = \\sqrt{3}(199.58)(2.4)\\sin 35.68^\\circ = 483.84\\ \\mathrm{VAR}$.' },
        ],
        result: '2.4 A in each line, 115.22 V/φ and 199.58 V line-to-line at the load; 673.92 W delivered, 13.824 W lost in the line, 483.84 VAR magnetizing — the whole three-phase problem solved as one single-phase circuit.',
      },
      {
        title: 'A 400 V motor, star or delta (Hughes Example 28.3)',
        problem: 'A three-phase motor operating off a 400 V system develops 20 kW at an efficiency of 0.87 per unit and a power factor of 0.82. Calculate (a) the line current and (b) the phase current if the windings are delta-connected.',
        steps: [
          { label: 'Step 1: Set up the efficiency equation', text: 'Efficiency is output over input power, and the input to a three-phase motor is $\\sqrt{3} V_{L} I_{L}\\cos\\phi$: $0.87 = 20\\,000/(1.73 \\times I_{L} \\times 400 \\times 0.82)$.' },
          { label: 'Step 2: Line current', text: 'Solving gives $I_{L} = 20\\,000/(0.87 \\times 1.73 \\times 400 \\times 0.82) = 40.0\\ \\mathrm{A}$.' },
          { label: 'Step 3: Phase current in delta', text: 'In a delta connection the phase current is the line current divided by $\\sqrt{3}$: $I_{P} = 40.0/1.73 = 23.1\\ \\mathrm{A}$ flowing in each winding.' },
        ],
        result: 'Forty amperes in each line and 23.1 A in each delta winding — the same formula $P = \\sqrt{3} V_{L} I_{L} \\cos\\phi$ serves both star and delta machines.',
      },
      {
        title: 'Two wattmeters on a motor (Hughes Example 28.4)',
        problem: 'The input power to a three-phase motor is measured by the two-wattmeter method. The readings are 5.2 kW and −1.7 kW, and the line voltage is 400 V. Calculate (a) the total active power, (b) the power factor and (c) the line current.',
        steps: [
          { label: 'Step 1: Total power', text: '$P = W_{1} + W_{2} = 5.2 - 1.7 = 3.5\\ \\mathrm{kW}$ — valid whatever the sign of the individual readings.' },
          { label: 'Step 2: Power factor from the readings', text: 'The ratio of the readings is $-1.7/5.2 = -0.327$; using the tangent formula, $\\tan\\phi = 1.73\\,[5.2 - (-1.7)]/[5.2 + (-1.7)] = 1.73 \\times 6.9/3.5 = 3.41$, so $\\phi = 73^\\circ 39^{\\prime}$ and $\\cos\\phi = 0.281$.' },
          { label: 'Step 3: Line current', text: 'From $P = \\sqrt{3} V_{L} I_{L} \\cos\\phi$: $I_{L} = 3500/(1.73 \\times 400 \\times 0.281) = 18.0\\ \\mathrm{A}$.' },
          { label: 'Step 4: Note the limitation', text: 'One wattmeter reading negative already tells us the power factor is below 0.5; but from wattmeter data alone it is impossible to state whether the power factor is lagging or leading.' },
        ],
        result: 'P = 3.5 kW at a power factor of 0.281, drawing 18.0 A per line — one meter reading negative is not an error, it is the measurement speaking.',
      },
    ],
    keyTakeaways: [
      'Three windings at 120° generate a balanced set of e.m.f.s whose sum is zero at every instant; three-phase motors are self-starting, and the total instantaneous power $1.5 V_{m} I_{m}\\cos\\theta_{\\phi}$ is constant.',
      'Star: $V_{L} = \\sqrt{3} V_{P}$ and $I_{L} = I_{P}$, line voltages leading phase voltages by 30° (positive sequence); delta: $V_{L} = V_{P}$ and $I_{L} = \\sqrt{3} I_{P}$.',
      'A balanced load carries no neutral current, so the neutral may be removed; the whole system then solves as one single-phase equivalent with $Z_{Y} = Z_{\\Delta}/3$ converting delta loads.',
      'Total power, reactive power and apparent power in any balanced three-phase circuit: $\\sqrt{3} V_{L} I_{L}$ times $\\cos\\theta_{\\phi}$, $\\sin\\theta_{\\phi}$ or 1 respectively.',
      'Two wattmeters suffice for total power in any three-wire three-phase system — balanced or not; their readings are $V_{L} I_{L}\\cos(\\theta_{\\phi} \\pm 30^\\circ)$.',
      'Power factor from two wattmeter readings: $\\tan\\theta_{\\phi} = \\sqrt{3}(W_{2} - W_{1})/(W_{2} + W_{1})$; one reading goes negative below 0.5 power factor.',
      'Ratings are rms line values throughout three-phase practice — a 400 V system means 400 V line-to-line, with $400/\\sqrt{3} = 230\\ \\mathrm{V}$ to neutral.',
    ],
    quiz: [
      {
        q: 'In a star-connected three-phase system with balanced load:',
        options: [`$V_{L} = V_{P}$ and $I_{L} = \\sqrt{3} I_{P}$`, `$V_{L} = \\sqrt{3} V_{P}$ and $I_{L} = I_{P}$`, 'Both line quantities are $\\sqrt{3}$ times their phase counterparts', 'The neutral current equals the vector sum of the line currents and is large'],
        answer: 1,
        explanation: 'Star: the line current flows through the phase so they are equal, while the line voltage is the phasor difference of two phase voltages, $2 V_{P}\\cos 30^\\circ = \\sqrt{3} V_{P}$. The neutral current of a balanced load is zero — the phasor (and instantaneous) sum of three equal 120°-displaced currents.',
      },
      {
        q: 'The total power formula $P = \\sqrt{3} V_{L} I_{L}\\cos\\theta_{\\phi}$ applies:',
        options: ['Only to star-connected balanced loads', 'Only to delta-connected balanced loads', 'To any balanced load, star or delta, with $\\theta_{\\phi}$ the phase-voltage-to-phase-current angle', 'To unbalanced loads whenever the two-wattmeter method is used'],
        answer: 2,
        explanation: 'Substituting the star relations ($V_{\\phi} = V_{L}/\\sqrt{3}$, $I_{\\phi} = I_{L}$) or the delta relations ($V_{\\phi} = V_{L}$, $I_{\\phi} = I_{L}/\\sqrt{3}$) into $3 V_{\\phi} I_{\\phi}\\cos\\theta_{\\phi}$ produces the same expression — which is exactly why equipment is specified in line quantities.',
      },
      {
        q: 'In Nilsson Example 11.1, the load phase voltage is $V_{AN} = 115.22\\angle -1.19^\\circ$ V with positive sequence. The line voltage $V_{AB}$ is:',
        options: ['$115.22\\angle -1.19^\\circ$ V — line equals phase in star', '$199.58\\angle 28.81^\\circ$ V', '$199.58\\angle -31.19^\\circ$ V', '$66.5\\angle 28.81^\\circ$ V'],
        answer: 1,
        explanation: '$V_{AB} = (\\sqrt{3}\\angle 30^\\circ) V_{AN} = 199.58\\angle 28.81^\\circ\\ \\mathrm{V}$: multiply the magnitude by $\\sqrt{3}$ and advance the angle by 30° for a positive sequence (the line set would lag by 30° for a negative sequence).',
      },
      {
        q: 'A two-wattmeter measurement on a balanced load gives $W_{1} = 0$ with $W_{2}$ positive. The power factor of the load is:',
        options: ['Zero', 'Exactly 0.5', '0.866', 'Unity'],
        answer: 1,
        explanation: 'With $W_{1} = V_{L} I_{L}\\cos(\\theta_{\\phi} + 30^\\circ) = 0$, the angle $\\theta_{\\phi} = 60^\\circ$ and the power factor is $\\cos 60^\\circ = 0.5$. Below 0.5, $W_{1}$ would go negative; above it, both meters read positive.',
      },
      {
        q: 'Hughes’s motor test gave wattmeter readings of 5.2 kW and −1.7 kW at 400 V. The total power and the line current were:',
        options: ['6.9 kW and about 11 A', '3.5 kW and 18.0 A at a power factor of 0.281', '3.5 kW and 40 A at a power factor of 0.82', '1.7 kW, discarding the negative reading as instrument error'],
        answer: 1,
        explanation: 'The total is simply $5.2 - 1.7 = 3.5\\ \\mathrm{kW}$; then $\\tan\\phi = \\sqrt{3} \\times 6.9/3.5 = 3.41$ gives $\\cos\\phi = 0.281$, and $I_{L} = 3500/(\\sqrt{3} \\times 400 \\times 0.281) = 18.0\\ \\mathrm{A}$. The negative reading is meaningful data, not an error.',
      },
    ],
  },
]

export const elecCh9Formulas: FormulaEntry[] = [
  {
    chapterId: 'ee-e-circuits',
    section: '2.31',
    name: 'Average (active) power',
    formula: 'P = V·I·cos φ',
    note: 'V and I are rms values; φ is the phase angle between them',
    latex: 'P = V_{\\mathrm{rms}} I_{\\mathrm{rms}} \\cos\\phi',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.31',
    name: 'Reactive power',
    formula: 'Q = V·I·sin φ',
    note: 'in vars; positive for inductors, negative for capacitors',
    latex: 'Q = V_{\\mathrm{rms}} I_{\\mathrm{rms}} \\sin\\phi',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.32',
    name: 'Complex power',
    formula: 'S = V·I* = P + jQ',
    note: 'rms phasors, passive sign convention; units volt-amperes',
    latex: 'S = V_{\\mathrm{rms}} I_{\\mathrm{rms}}^{*} = P + jQ',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.32',
    name: 'Power triangle',
    formula: 'S² = P² + Q²',
    note: 'apparent power |S| in VA is the volt-amp capacity carried',
    latex: '|S| = \\sqrt{P^{2} + Q^{2}}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.33',
    name: 'Resonant frequency',
    formula: 'f₀ = 1/(2π·√(L·C))',
    note: 'series and ideal parallel RLC; ω₀ = 1/√(LC)',
    latex: 'f_{0} = \\frac{1}{2\\pi\\sqrt{LC}}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.33',
    name: 'Q factor (series circuit)',
    formula: 'Q = ω₀·L/R = 1/(ω₀·C·R)',
    note: 'voltage magnification: V_L = V_C = Q·V at resonance',
    latex: 'Q = \\frac{\\omega_{0} L}{R} = \\frac{1}{\\omega_{0} C R}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.33',
    name: 'Bandwidth',
    formula: 'BW = f₀/Q',
    note: 'half-power points; their product satisfies f₁·f₂ = f₀²',
    latex: '\\mathrm{BW} = \\frac{f_{0}}{Q}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.34',
    name: 'Three-phase power',
    formula: 'P = √3·V_L·I_L·cos φ',
    note: 'any balanced load; star V_L = √3·V_P, delta I_L = √3·I_P',
    latex: 'P = \\sqrt{3}\\, V_{L} I_{L} \\cos\\phi',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.34',
    name: 'Two-wattmeter power factor',
    formula: 'tan φ = √3·(W₂ − W₁)/(W₂ + W₁)',
    note: 'total power is always W₁ + W₂; balanced load assumed here',
    latex: '\\tan\\phi = \\sqrt{3}\\,\\frac{W_{2} - W_{1}}{W_{2} + W_{1}}',
  },
]
