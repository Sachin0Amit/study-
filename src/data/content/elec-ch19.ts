import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// Hughes, Electrical & Electronic Technology, 12th Edition — merged with
// The Art of Electronics 3e for the master Electronics library.
// Chapter 19: Transformers and Electric Machines (Sections 19.1 – 19.4).
// All worked-example numbers are the book’s own (Examples 29.1–29.8, 30.1,
// 31-series, 32.1, 33.1–33.5, 36.2, 37.2/37.4/37.6, 39.1–39.3).
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh19Content: SectionContent[] = [
  // ------------------------------------------------------------------ 19.1
  {
    sectionId: 'elec-ch19-s1',
    readingTime: 11,
    intro: 'The transformer is the one electrical machine with no moving parts, and it earns its keep by changing voltage with almost no loss of power — a medium-sized unit runs at 97–98 per cent full-load efficiency. Hughes builds the whole apparatus of power engineering on it: a laminated ferromagnetic core, two coupled windings, an e.m.f. equation you can derive in four lines, and an equivalent circuit that turns out to be the template for every machine in the rest of this chapter.',
    objectives: [
      'Describe transformer construction and explain why cores are laminated at 0.35–0.7 mm',
      'Derive and apply the e.m.f. equation $E = 4.44 f N \\Phi_{\\mathrm{m}}$',
      'Use the turns ratio to relate primary and secondary voltages and currents',
      'Build the equivalent circuit and refer secondary resistance and leakage reactance to the primary',
      'Compute efficiency, voltage regulation and the condition for maximum efficiency, and predict them all from the open-circuit and short-circuit tests',
    ],
    concepts: [
      {
        term: 'Core construction and core loss',
        kind: 'definition',
        statement: 'A transformer core is built of **laminated steel sheets about 0.35–0.7 mm thick**, insulated from one another; the vertical portions are the **limbs** (carrying the windings) and the horizontal portions are the **yokes**. Laminating slashes the eddy-current loss, and the remaining core loss is the sum of **hysteresis loss** (energy spent re-magnetizing the steel each cycle) and **eddy-current loss**.',
        detail: 'The alternating flux induces e.m.f.s in the core material itself, and the resulting $I^{2}R$ losses are the eddy-current losses. Since flux varies little between no load and full load (within about 2 per cent), the core loss is treated as constant at all loads — the key fact that makes the open-circuit test meaningful. The magnetizing current is only 3–5 per cent of full-load primary current, so the no-load power factor is very low.',
      },
      {
        term: 'Principle of action and the turns ratio',
        kind: 'law',
        statement: 'With the whole of the flux set up by the primary linking the secondary, the e.m.f. induced per turn is the same for both windings, so $$\\frac{V_2}{V_1} \\simeq \\frac{N_2}{N_1} \\qquad \\text{and} \\qquad \\frac{I_1}{I_2} \\simeq \\frac{N_2}{N_1}.$$ The magnetic flux is the connecting link: any secondary current produces (by Lenz’s law) a demagnetizing ampere-turn effect that is neutralized by an increase in primary current, giving $I_1 N_1 \\simeq I_2 N_2$.',
        detail: 'The balance of primary and secondary ampere-turns is the fundamental relationship wherever transformer action occurs. In power practice, generation at about 22 kV is stepped up for transmission, then stepped back down for motors, lamps and heaters — the loss at each transformation is small, though Hughes wryly notes that 2 per cent of 100 MW is still not insignificant.',
      },
      {
        term: 'E.m.f. equation of a transformer',
        kind: 'theorem',
        statement: 'If the flux swings from $+\\Phi_{\\mathrm{m}}$ to $-\\Phi_{\\mathrm{m}}$ in half a cycle ($1/2f$ seconds), the average rate of change is $4 f \\Phi_{\\mathrm{m}}$ webers per second, and multiplying by the form factor 1.11 of a sine wave gives the r.m.s. e.m.f. per winding: $$E = 4.44\\, f\\, N\\, \\Phi_{\\mathrm{m}} \\ \\text{volts}.$$',
        detail: 'The alternative derivation is instantaneous: with $\\phi = \\Phi_{\\mathrm{m}} \\sin 2\\pi f t$, the induced e.m.f. per turn is $\\mathrm{d}\\phi/\\mathrm{d}t = 2\\pi f \\Phi_{\\mathrm{m}} \\sin(2\\pi f t + \\pi/2)$ — a quarter-cycle ahead of the flux — and $0.707 \\times 2\\pi f \\Phi_{\\mathrm{m}} = 4.44 f \\Phi_{\\mathrm{m}}$. This single equation fixes the core area, the number of turns and the flux density of every transformer and rotating-machine winding designed for sinusoidal flux.',
      },
      {
        term: 'No-load current and its components',
        kind: 'definition',
        statement: 'The no-load current $I_0$ has two components: a **magnetizing component** $I_{0\\mathrm{m}}$ in phase with the flux, and a **power (core-loss) component** $I_{0\\mathrm{l}}$ in phase with the applied voltage, so $$I_0 = \\sqrt{I_{0\\mathrm{l}}^2 + I_{0\\mathrm{m}}^2}, \\qquad \\cos\\phi_0 = \\frac{I_{0\\mathrm{l}}}{I_0}.$$',
        detail: 'Because $I_{0\\mathrm{l}} \\ll I_{0\\mathrm{m}}$, the no-load power factor is very low — Hughes’s worked example (Example 29.2, 480-turn primary, 2200 V, 50 Hz) finds $I_0 = 1.21$ A at a power factor of only 0.168 lagging, with $I_{0\\mathrm{m}} = 1.19$ A and $I_{0\\mathrm{l}} = 0.203$ A. That example also runs the magnetic circuit in reverse: 400 A/m over a 1.8 m path plus a 0.1 mm effective airgap takes 807.5 ampere-turns, the flux $\\Phi_{\\mathrm{m}} = 0.0206$ Wb at 1.1 T requires 0.0187 m² of core, and 263 kg of steel at 1.7 W/kg gives a 447 W core loss.',
      },
      {
        term: 'Useful flux and leakage flux',
        kind: 'insight',
        statement: 'The **useful flux** links both windings and stays practically constant from no load to full load (within about 2 per cent); the **leakage flux** links only its own winding, its value is proportional to the load current, and its effect is that of an inductive reactance in series with each winding.',
        detail: 'The leakage paths are almost entirely through air, so their reluctance is essentially constant — which is why leakage can be represented by the constant series reactances $X_1$ and $X_2$. Hughes lists the practical countermeasures: make the transformer window long and narrow, wind primary and secondary concentrically, sandwich the windings, or use shell-type construction. An ideal transformer in a box — equal p.d. between terminals A–B and C–D — proves that the useful flux is responsible for no voltage drop at all.',
      },
      {
        term: 'Equivalent circuit referred to the primary',
        kind: 'method',
        statement: 'Represent the transformer as an ideal transformer plus series imperfections: winding resistances $R_1$, $R_2$ and leakage reactances $X_1$, $X_2$, with a magnetizing reactor $X_0$ and core-loss resistor $R_0$ across the ideal primary. Referring the secondary to the primary gives $$R_e = R_1 + R_2 \\left( \\frac{V_1}{V_2} \\right)^{\\!2}, \\quad X_e = X_1 + X_2 \\left( \\frac{V_1}{V_2} \\right)^{\\!2}, \\quad Z_e = \\sqrt{R_e^2 + X_e^2}.$$',
        detail: 'Because $I_0$ is only 3–5 per cent of full-load current, the magnetizing branch may be dropped for full-load calculations, and the two series impedances merged. Hughes’s Example 29.4 (100 kVA, 400/80 turns, $R_1 = 0.3\\,\\Omega$, $R_2 = 0.01\\,\\Omega$, $X_1 = 1.1\\,\\Omega$, $X_2 = 0.035\\,\\Omega$, 2200 V supply) finds $R_e = 0.55\\,\\Omega$, $X_e = 1.975\\,\\Omega$ and $Z_e = 2.05\\,\\Omega$ referred to the primary — the machine per-unit resistance 0.0114 and reactance 0.0408.',
      },
      {
        term: 'Voltage regulation',
        kind: 'definition',
        statement: 'Voltage regulation is the change of secondary terminal voltage between no load and full load, per unit of the no-load voltage, with the primary voltage held constant; for a lagging load $$\\text{p.u. regulation} = \\frac{I_1 \\left( R_e \\cos\\phi_2 + X_e \\sin\\phi_2 \\right)}{V_1},$$ and for a leading load the reactance term carries a minus sign.',
        detail: 'The leading case can invert the sign of the regulation entirely: the same 100 kVA transformer of Example 29.4 has +3.36 per cent regulation at 0.8 lagging (secondary falls from 440 V to 425 V) but −1.54 per cent at 0.8 leading (secondary rises to 447 V). Regulation must always be quoted with its power factor.',
      },
      {
        term: 'Efficiency and maximum-efficiency condition',
        kind: 'theorem',
        statement: 'With constant core loss $P_{\\mathrm{c}}$ and variable copper loss, $$\\eta = \\frac{\\text{output}}{\\text{output} + P_{\\mathrm{c}} + I_1^2 R_1 + I_2^2 R_2},$$ and efficiency is a maximum when the variable $I^{2}R$ loss equals the constant core loss: $I_2^2 R_{2e} = P_{\\mathrm{c}}$.',
        detail: 'Hughes’s 500 kVA transformer (Example 29.6, $R_1 = 0.42\\,\\Omega$, $R_2 = 0.0019\\,\\Omega$, 11000/400 V, core loss 2.9 kW, load p.f. 0.8) runs at 98.3 per cent on full load and 98.1 per cent at half load; maximum efficiency occurs at $n = \\sqrt{2.9/3.86} = 0.867$ of full load — 433 kVA — where the copper loss has fallen to match the 2.9 kW core loss and $\\eta_{\\max} = 98.4$ per cent. The fraction of rated apparent power at which this happens is independent of the power factor.',
      },
      {
        term: 'Open-circuit and short-circuit tests',
        kind: 'method',
        statement: '**Open-circuit test** at rated voltage gives the turns ratio, the no-load current and the core loss $P_{\\mathrm{oc}}$ (the no-load $I^{2}R$ loss is less than 1/400 of its full-load value). **Short-circuit test** at reduced voltage — one-twentieth to one-thirtieth of rated — circulates full-load currents and gives the total $I^{2}R$ loss $P_{\\mathrm{sc}}$. Then at any load $n$ times full load, $$\\eta = \\frac{n S \\cos\\phi}{n S \\cos\\phi + P_{\\mathrm{oc}} + n^{2} P_{\\mathrm{sc}}},$$ and the regulation follows from $V_{\\mathrm{sc}}\\cos(\\phi_e - \\phi_2)/V_1$.',
        detail: 'The wattmeter power in the short-circuit test is almost pure copper loss because the flux (and hence the core loss) is only about $(1/25)^{2}$ of rated. These two small-power tests replace loading a machine of many hundreds of kVA — Hughes’s Example 29.8 works a complete 50 kVA unit from 430 W and 525 W of measured loss.',
      },
    ],
    examples: [
      {
        title: 'Working the e.m.f. equation backwards (Example 29.1)',
        problem: 'A 250 kVA, 11000 V/400 V, 50 Hz single-phase transformer has 80 turns on the secondary. Calculate (a) the approximate primary and secondary full-load currents, (b) the number of primary turns, and (c) the maximum value of the flux.',
        steps: [
          { label: 'Step 1: Full-load currents', text: 'The rating in volt-amperes is the product of voltage and current, so $I_1 \\simeq 250\\,000/11\\,000 = 22.7$ A and $I_2 = 250\\,000/400 = 625$ A.' },
          { label: 'Step 2: Primary turns', text: 'From the turns ratio $N_1 = 80 \\times 11\\,000/400 = 2200$ turns — 27.5 times more turns on the high-voltage side, as expected.' },
          { label: 'Step 3: Apply the e.m.f. equation to the secondary', text: 'The secondary must develop 400 V in 80 turns at 50 Hz: $400 = 4.44 \\times 80 \\times 50 \\times \\Phi_{\\mathrm{m}}$.' },
          { label: 'Step 4: Solve for the flux', text: '$\\Phi_{\\mathrm{m}} = 400/17\\,760 = 0.0225$ Wb — a peak flux of 22.5 mWb is carried by the core every cycle.' },
        ],
        result: '$I_1 \\simeq 22.7$ A, $I_2 = 625$ A, $N_1 = 2200$ turns and $\\Phi_{\\mathrm{m}} = 22.5$ mWb. One equation, three design quantities.',
      },
      {
        title: 'Equivalent impedance and regulation, lagging and leading (Example 29.4)',
        problem: 'A 100 kVA transformer has 400 primary and 80 secondary turns; $R_1 = 0.3\\,\\Omega$, $R_2 = 0.01\\,\\Omega$, $X_1 = 1.1\\,\\Omega$, $X_2 = 0.035\\,\\Omega$. The supply is 2200 V. Find the equivalent impedance referred to the primary, and the regulation and secondary terminal voltage at full load, 0.8 power factor (i) lagging, (ii) leading.',
        steps: [
          { label: 'Step 1: Refer the secondary impedances', text: 'The voltage ratio is $2200/440 = 5$, so the factors of 25 apply: $R_e = 0.3 + 0.01 \\times 25 = 0.55\\,\\Omega$ and $X_e = 1.1 + 0.035 \\times 25 = 1.975\\,\\Omega$.' },
          { label: 'Step 2: Equivalent impedance', text: '$Z_e = \\sqrt{0.55^2 + 1.975^2} = 2.05\\,\\Omega$ referred to the primary.' },
          { label: 'Step 3: Full-load primary current', text: '$I_1 \\simeq 100\\,000/2200 = 45.45$ A; with $\\cos\\phi_2 = 0.8$ lagging, $\\sin\\phi_2 = 0.6$.' },
          { label: 'Step 4: Regulation, lagging', text: '$\\frac{45.45 (0.55 \\times 0.8 + 1.975 \\times 0.6)}{2200} = \\frac{45.45 \\times 1.625}{2200} = 0.0336$ per unit — 3.36 per cent. The no-load secondary voltage is $2200 \\times 80/400 = 440$ V, which falls by $440 \\times 0.0336 = 14.8$ V to **425 V** on full load.' },
          { label: 'Step 5: Regulation, leading', text: 'The reactance term now subtracts: $\\frac{45.45 (0.55 \\times 0.8 - 1.975 \\times 0.6)}{2200} = -0.0154$ per unit — the terminal voltage **rises** by 6.78 V to **447 V**.' },
        ],
        result: 'The same machine regulates +3.36 per cent into a lagging load and −1.54 per cent into a leading one: leakage reactance is the enemy of lagging loads and the friend of leading ones.',
      },
      {
        title: 'The two-test prediction (Example 29.8)',
        problem: 'A 50 kVA transformer gives these results. Open-circuit test: primary 3300 V, secondary 400 V, primary power 430 W. Short-circuit test: primary 124 V, primary current 15.3 A, primary power 525 W with full-load secondary current. Find the efficiencies at full load and half load at 0.7 power factor, the regulations at 0.7 lagging and leading, and the corresponding secondary voltages.',
        steps: [
          { label: 'Step 1: Separate the losses', text: 'Core loss $P_{\\mathrm{oc}} = 430$ W; full-load copper loss $P_{\\mathrm{sc}} = 525$ W. Total full-load loss is 955 W = 0.955 kW.' },
          { label: 'Step 2: Efficiencies', text: 'Full load: $\\eta = \\frac{50 \\times 0.7}{50 \\times 0.7 + 0.955} = 1 - \\frac{0.955}{35.95} = 0.973$ per unit — 97.3 per cent. Half load: copper loss falls to $525 \\times 0.25 = 131$ W, so $\\eta = 1 - \\frac{0.561}{18.06} = 0.963$ — 96.3 per cent.' },
          { label: 'Step 3: Short-circuit power factor', text: '$\\cos\\phi_e = 525/(124 \\times 15.3) = 0.2765$, giving $\\phi_e = 73^\\circ 57^\\prime$; for $\\cos\\phi_2 = 0.7$, $\\phi_2 = 45^\\circ 34^\\prime$.' },
          { label: 'Step 4: Regulation', text: 'Lagging: $\\frac{124 \\cos(73^\\circ 57^\\prime - 45^\\circ 34^\\prime)}{3300} = \\frac{124 \\cos 28^\\circ 23^\\prime}{3300} = 0.033$ per unit — 3.3 per cent. Leading: $\\frac{124 \\cos 119^\\circ 31^\\prime}{3300} = -0.0185$ per unit — −1.85 per cent.' },
          { label: 'Step 5: Secondary voltages', text: 'From the 400 V no-load value: $400 (1 - 0.033) = 387$ V lagging, and $400 (1 + 0.0185) = 407$ V leading.' },
        ],
        result: 'Two tests totalling under a kilowatt of measured loss predict the full-load behaviour of a 50 kVA machine: 97.3 per cent efficiency and 387 V at 0.7 lagging, 96.3 per cent and 407 V at 0.7 leading.',
      },
    ],
    keyTakeaways: [
      'A transformer is two windings coupled by a common alternating flux in a laminated steel core; the useful flux is the link, and it stays essentially constant from no load to full load.',
      'The e.m.f. equation $E = 4.44 f N \\Phi_{\\mathrm{m}}$ comes from averaging the flux swing $2\\Phi_{\\mathrm{m}}$ over half a cycle and applying the sine-wave form factor 1.11.',
      'Voltage transforms with the turns ratio and current inversely with it, because the primary ampere-turns must balance the demagnetizing secondary ampere-turns.',
      'Leakage flux is proportional to load current and appears as series reactance $X_e$; winding resistance gives $R_e$; both referred to one side scale with the square of the voltage ratio.',
      'Regulation at lagging power factor is $I_1 (R_e \\cos\\phi_2 + X_e \\sin\\phi_2)/V_1$, and it changes sign for leading loads.',
      'Efficiency peaks when the variable copper loss equals the constant core loss — which is why large transformers run hottest, not most efficiently, at full load.',
      'The open-circuit test measures the core loss and the short-circuit test the copper loss; together they give efficiency and regulation at any load without ever loading the transformer.',
    ],
    quiz: [
      {
        q: 'The factor 4.44 in the transformer e.m.f. equation is closest in origin to:',
        options: [
          '$4$ from the flux swing over half a cycle, times $1.11$ — the r.m.s.-to-average ratio of a sine wave',
          'The number of quarter-cycles in one cycle of the supply',
          'The permeability of silicon steel at 1.5 T',
          'The ratio of primary to secondary turns in a standard unit',
        ],
        answer: 0,
        explanation: 'The flux goes from $+\\Phi_{\\mathrm{m}}$ to $-\\Phi_{\\mathrm{m}}$ in $1/2f$ seconds, so the average rate of change is $4 f \\Phi_{\\mathrm{m}}$; multiplying by the form factor 1.11 of a sine wave gives $4.44 f \\Phi_{\\mathrm{m}}$ per turn.',
      },
      {
        q: 'A transformer on no load draws a current that is:',
        options: [
          'Large and at unity power factor',
          'Small (typically 3–5 per cent of full load) and at a very low lagging power factor',
          'Zero for an ideal steel core',
          'Small and at a very low leading power factor',
        ],
        answer: 1,
        explanation: 'The no-load current is dominated by the magnetizing component $I_{0\\mathrm{m}}$ in phase with the flux; the core-loss component $I_{0\\mathrm{l}}$ that carries the power is tiny by comparison, so $\\cos\\phi_0 = I_{0\\mathrm{l}}/I_0$ is very small — 0.168 in Hughes’s example.',
      },
      {
        q: 'In the short-circuit test on a transformer, the measured power is taken to be almost entirely:',
        options: [
          'Core loss, because the current is at its rated value',
          'Copper loss, because the reduced voltage makes the flux (and hence the core loss) negligible',
          'Windage and friction loss of the cooling fans',
          'Leakage-flux loss in the tank walls',
        ],
        answer: 1,
        explanation: 'The applied voltage is only about one-twentieth to one-thirtieth of rated, so the flux and the core loss (roughly proportional to flux squared) collapse, while full-load currents still flow through the winding resistances — the wattmeter reads the $I^{2}R$ loss.',
      },
      {
        q: 'A 500 kVA transformer has 3.86 kW of full-load copper loss and 2.9 kW of core loss. At what fraction of rated output is its efficiency a maximum?',
        options: [
          'Exactly full load',
          '$n = \\sqrt{2.9/3.86} \\approx 0.87$ of full load — about 433 kVA',
          'Half load, because losses are smallest there',
          'It is the same at every load',
        ],
        answer: 1,
        explanation: 'Maximum efficiency occurs when the variable $I^{2}R$ loss equals the constant core loss: $n^{2} \\times 3.86 = 2.9$, so $n = 0.867$. The result is independent of the power factor of the load.',
      },
      {
        q: 'Why can the terminal voltage of a transformer rise above its no-load value when it carries a leading (capacitive) load?',
        options: [
          'The core loss reverses direction and feeds power back',
          'The leakage-reactance drop now opposes the resistive drop in the regulation expression, making the net regulation negative',
          'The turns ratio changes with load current',
          'The magnetizing current cancels the load current exactly',
        ],
        answer: 1,
        explanation: 'At leading power factor the regulation is $I_1 (R_e \\cos\\phi_2 - X_e \\sin\\phi_2)/V_1$; since $X_e$ dominates $R_e$, this is negative. In Example 29.8 the 400 V secondary rose to 407 V at 0.7 leading.',
      },
      // PYQ-pattern: GATE 2015 — transformer core flux from EMF equation (rephrased, values changed)
      {
        q: 'A 400 V, 50 Hz single-phase transformer winding has 200 turns. Assuming sinusoidal flux and negligible drops, the maximum core flux is closest to:',
        options: ['0.90 mWb', '4.50 mWb', '9.01 mWb', '18.0 mWb'],
        answer: 2,
        explanation: 'Step 1 — Given: RMS voltage $E = 400$ V, $f = 50$ Hz, $N = 200$ turns, sinusoidal flux. Step 2 — Governing equation: $E = 4.44 f N \\Phi_{m}$, the form factor $1.11$ times $4$ from Faraday integration over a half-cycle. Step 3 — Algebra: $\\Phi_{m} = \\frac{400}{4.44 \\times 50 \\times 200} = \\frac{400}{44400} \\approx 9.009 \\times 10^{-3}$ Wb, that is $9.01$ mWb. Step 4 — Sanity check: mill Weber flux in a power core gives tesla-scale density over a realistic limb area, doubling turns would halve the flux, and higher frequency likewise reduces it. Step 5 — Distractor analysis: 4.50 mWb doubles the turns, 0.90 mWb slips a decade, and 18.0 mWb halves them. Step 6 — Conclude: peak flux is about 9.01 mWb.',
      },
    ],
  },

  // ------------------------------------------------------------------ 19.2
  {
    sectionId: 'elec-ch19-s2',
    readingTime: 9,
    intro: 'Before meeting any specific machine, Hughes asks what every machine has in common: a magnetic field acting as a two-way energy coupling between an electrical system and a mechanical one. From that single idea — plus the observation that magnetic systems try to maximize their stored field energy — flow the forces of alignment and interaction, the reluctance motor, the doubly excited machines, and the single most useful fact in AC machinery: three phase currents make a magnetic field that rotates.',
    objectives: [
      'Explain the magnetic field as the coupling between electrical and mechanical systems, and compute the force of alignment $F = B^2 A / 2\\mu_0$ between magnetized surfaces',
      'State the energy balance and the torque relation $M_E = \\mathrm{d}W_f/\\mathrm{d}\\lambda$',
      'Classify the three families of doubly excited machines by their stator and rotor excitation',
      'Derive the synchronous speed relation $f = np$ and the e.m.f. of a stator winding',
      'Show analytically why three-phase currents produce a rotating field of constant magnitude $1.5 B_{\\mathrm{m}}$',
    ],
    concepts: [
      {
        term: 'The conversion process',
        kind: 'definition',
        statement: 'An electromagnetic machine links an electrical energy system to another energy system (usually mechanical) by providing **a reversible means of energy flow in its magnetic field**. A motor converts electrical to mechanical energy, a generator the reverse, and a converter — like the transformer of the previous section — transfers electrical energy between electrical systems; at very low power such devices are called transducers.',
        detail: 'The field is the mutual link: energy transferred from one system is temporarily stored in the field and then released to the other. On the electrical side the reaction of the field appears as an e.m.f., and the product of e.m.f. and current is the rate of electrical energy conversion. Machines develop force in two ways — by alignment of magnetized surfaces, or by the interaction $F = Bli$ of a current and a flux.',
      },
      {
        term: 'Magnetic field energy and energy density',
        kind: 'law',
        statement: 'For a linear (air) region, the stored field energy is $W_f = \\tfrac{1}{2} Li^2 = \\tfrac{1}{2} N \\Phi = \\tfrac{1}{2} \\mathcal{S} \\Phi^2$, and the **energy density** in an airgap is $$w_f = \\tfrac{1}{2} B H = \\frac{B^2}{2\\mu_0} \\ \\text{joules per cubic metre}.$$',
        detail: 'All these forms assume flux and m.m.f. are proportional — true of air, which is the only material that matters in most machine airgaps. The energy picture is the master key: whenever a small displacement $\\mathrm{d}x$ would increase the stored field energy, the arrangement experiences a force in that direction. Magnetic systems, like mechanical ones released from constraint, run downhill on reluctance and uphill on stored energy.',
      },
      {
        term: 'Force of alignment between magnetized surfaces',
        kind: 'theorem',
        statement: 'Separating two parallel magnetized surfaces of area $A$ with uniform flux density $B$ by $\\mathrm{d}x$ adds gap volume $A\\,\\mathrm{d}x$ of stored energy at density $B^2/2\\mu_0$, so the attracting force is $$F = \\frac{B^2 A}{2\\mu_0}.$$ More generally, at constant flux, $F = \\mathrm{d}W_f/\\mathrm{d}x$.',
        detail: 'Hughes’s Example 30.1 works a horseshoe electromagnet lifting a steel block: a force of 20 N across two gaps of 500 mm² needs $B = \\sqrt{20 \\mu_0 / (500 \\times 10^{-6})} = 0.222$ T; with $\\mu_r = 700$ over 0.8 m of steel the m.m.f. is 200 At and a 100-turn coil needs $I = 2.0$ A. Example 30.3 applies the same machinery to a relay: at a 1.5 mm gap the coil gives $B = 84$ mT, $L = 6.56$ H, and the pull is $f_E = \\tfrac{1}{2} i^2 \\, \\mathrm{d}L/\\mathrm{d}x = 0.88$ N.',
      },
      {
        term: 'Energy balance in a machine',
        kind: 'law',
        statement: 'Taking both electrical and mechanical energies as inputs, the balance between any two states is $$\\Delta W_E + \\Delta W_M = \\Delta W_f + \\Delta W_s + \\Delta W_1,$$ — field energy, stored mechanical energy and loss. In the idealized machine the balance reduces to $\\mathrm{d}W_E + \\mathrm{d}W_M = \\mathrm{d}W_f$, and for rotation the developed torque is $$M_E = \\frac{\\mathrm{d}W_f}{\\mathrm{d}\\lambda}$$ where $\\lambda$ is the angle of distortion.',
        detail: 'For the attracted-armature relay the analysis yields $f_E = -\\tfrac{1}{2} i^2 \\, \\mathrm{d}L/\\mathrm{d}x$: the mechanical power comes out negative for a motor (an output), and the force acts to reduce the circuit reluctance. The four-phase relay story — current rises, armature moves with rising inductance inducing a back e.m.f., the armature hits its end stop, current settles at a new higher inductance — is the template for every electromechanical transient that follows in this book.',
      },
      {
        term: 'Reluctance motor and the synchronous principle',
        kind: 'insight',
        statement: 'A salient rotor in a stator field experiences an alignment torque $M_E = B^2 l r l_g /\\mu_0$ that seeks the direct axis. With reluctance varying sinusoidally between $\\mathcal{S}_d$ and $\\mathcal{S}_q$, the average torque contains a term $$M_{E\\,\\mathrm{av}} = \\tfrac{1}{8} \\Phi_{\\mathrm{m}}^2 \\left( \\mathcal{S}_q - \\mathcal{S}_d \\right) \\sin 2\\alpha$$ that is non-zero only when the rotor turns at exactly the supply frequency — the machine is of the **synchronous type**: its speed is fixed by the supply frequency.',
        detail: 'This is the singly excited machine: only one winding sets up the field, and the rotor merely tries to align with it. Clock motors are the classic application. The price of the constructional simplicity is a fixed speed and a weak, pulsating torque — which is why most useful machines are doubly excited.',
      },
      {
        term: 'Doubly excited machines and the three families',
        kind: 'definition',
        statement: 'Exciting both stator and rotor gives each a well-defined m.m.f. axis, and the torque is created by the axes trying to align; cylindrical rotors become possible because saliency is no longer needed. The three families are: **synchronous machines** (stator AC, rotor DC), **asynchronous (induction) machines** (stator AC, rotor AC), and **commutator machines** (stator DC, rotor DC).',
        detail: 'Synchronous and asynchronous machines usually have cylindrical stators; commutator machines have salient-pole stators; most machines have cylindrical rotors. Cylindrical construction is mechanically ideal for high speed — Hughes notes that 1 kg on the outside of a 1 m rotor at 3000 r/min experiences about 50 kN of centrifugal force, so high-speed rotors are solid forgings with slots, not assemblies of bolted poles.',
      },
      {
        term: 'Synchronous machine arrangement and speed',
        kind: 'method',
        statement: 'The armature is the stationary winding and the field rotates, so for a machine with $p$ pairs of poles running at $n$ revolutions per second the generated frequency is $$f = n p.$$ For 50 Hz: a two-pole machine must run at 3000 r/min, a four-pole at 1500 r/min, and a 375 r/min machine needs 16 poles.',
        detail: 'Why stationary armature? Hughes’s example: a 20 MVA, 11 kV machine would need three slip-rings each carrying 1050 A at 6.35 kV working voltage (plus a fourth for the star point), whereas a rotating field needs only two rings carrying the 375 A, 400 V excitation. The arrangement also permits insulation for up to 33 kV and a higher speed from a given frame size. Salient poles suit large-diameter low-speed machines; the cylindrical (turbo-alternator) rotor gives a better e.m.f. waveform.',
      },
      {
        term: 'Stator windings and the winding e.m.f.',
        kind: 'method',
        statement: 'Three-phase stator windings come in **single-layer** and **double-layer** forms, with slots disposed so that adjacent slots are separated by $180^\\circ/(\\text{slots per pole})$ electrical degrees. For $Z$ conductors in series per phase and $\\Phi$ webers of useful flux per pole, the e.m.f. of a winding concentrated in one slot per pole per phase is $$E = 2.22\\, Z f \\Phi \\ \\text{volts per phase}.$$',
        detail: 'Distribution across several slots per pole is universal in practice: it makes the slot insulation manageable, and it smooths the e.m.f. waveform, which would otherwise copy the (non-sinusoidal) flux distribution around the periphery. In Hughes’s four-pole, 24-slot example the spacing between adjacent slots is $180/6 = 30$ electrical degrees, so the yellow-phase start sits four slots (120 electrical degrees) from the red-phase start.',
      },
      {
        term: 'The rotating magnetic field',
        kind: 'theorem',
        statement: 'Three sinusoidal currents displaced by $120^\\circ$ in three windings displaced by $120^\\circ$ in space produce a resultant flux density that is **constant in magnitude $1.5 B_{\\mathrm{m}}$ and rotates at synchronous speed**. At a point $\\theta$ electrical radians from the reference axis, $$B_1 + B_2 + B_3 = 1.5 B_{\\mathrm{m}} \\cos(\\omega t - \\theta),$$ and the field turns through two pole pitches in one cycle, so $n_1 = f/p$.',
        detail: 'The three snapshots of Hughes’s Fig. 31.10 make it visual: when R is at maximum positive current, Y and B are each at half magnitude negative; a twelfth of a cycle later (R and B at 0.866), the field axis has advanced 30°. Summing the three space-and-time sinusoids collapses to $1.5 B_{\\mathrm{m}} \\cos(\\omega t - \\theta)$ — a single sinusoid whose peak rides round the airgap. Reversing any two supply connections reverses the direction of rotation, which is one of the everyday advantages of three-phase motors.',
      },
    ],
    examples: [
      {
        title: 'Forces and current in a lifting electromagnet (Example 30.1)',
        problem: 'A horseshoe electromagnet with a 600 mm core of 500 mm² cross-section holds a steel block; the magnetic circuit through the block is 200 mm long, and both parts have $\\mu_r = 700$. A 100-turn coil must develop enough force of alignment that 20 N is needed to free the block. Estimate the coil current.',
        steps: [
          { label: 'Step 1: Flux density from the force', text: 'There are two airgaps in series, so the parting force is doubled: $f_M = 2 \\times B^2 A / 2\\mu_0 = B^2 A/\\mu_0 = 20$ N, giving $B = \\sqrt{20 \\mu_0/(500 \\times 10^{-6})} = 0.222$ T.' },
          { label: 'Step 2: Field strength in the steel', text: '$H = B/(\\mu_0 \\mu_r) = 0.222/(4\\pi \\times 10^{-7} \\times 700) = 250$ A/m.' },
          { label: 'Step 3: Total m.m.f. around the circuit', text: 'The flux path is 600 + 200 = 800 mm of steel: $F = Hl = 250 \\times 0.8 = 200$ ampere-turns.' },
          { label: 'Step 4: Coil current', text: 'With $N = 100$ turns, $I = 200/100 = 2.0$ A.' },
        ],
        result: 'A 100-turn coil carrying 2.0 A produces the 0.222 T gap density that holds the block with 20 N — the alignment-force formula working as a design tool.',
      },
      {
        title: 'Sizing the slip-rings: why the armature stays still',
        problem: 'A 20 MVA, 11 kV three-phase synchronous machine is to be built. Compare the slip-ring requirements of (a) a rotating three-phase armature with stationary poles, and (b) the standard arrangement with stationary armature and rotating field excited at 400 V, 150 kW.',
        steps: [
          { label: 'Step 1: Line current of the armature', text: 'From $S = \\sqrt{3} I_L V_L$: $I_L = 20 \\times 10^{6}/(1.73 \\times 11 \\times 10^{3}) = 1050$ A.' },
          { label: 'Step 2: What a rotating armature would need', text: 'Three slip-rings rated 1050 A each, insulated for the phase voltage $11/1.73 = 6.35$ kV — and a fourth ring for the earthed star point.' },
          { label: 'Step 3: The rotating-field alternative', text: 'The excitation needs only $I = 150\\,000/400 = 375$ A at 400 V through two slip-rings.' },
          { label: 'Step 4: The verdict', text: 'Two rings at 375 A and 400 V beat four rings at 1050 A and 6.35 kV on construction and on slip-ring losses, and the stator gets the room it needs for insulation up to 33 kV.' },
        ],
        result: 'Stationary armature, rotating field: construction considerably simplified. The same arithmetic explains the layout of every large synchronous generator.',
      },
      {
        title: 'Synchronous speed of the rotating field',
        problem: 'A stator is wound for six poles and fed at 50 Hz; another is fed at 60 Hz and must produce a field rotating at 1800 r/min. Find the synchronous speeds and the required pole counts.',
        steps: [
          { label: 'Step 1: Six poles at 50 Hz', text: 'Six poles are $p = 3$ pairs, so $n_1 = f/p = 50/3 = 16.67$ r/s — 1000 r/min.' },
          { label: 'Step 2: The 1800 r/min case', text: 'Rearranged, $p = f/n_1 = 60/30 = 2$ pairs — a four-pole winding.' },
          { label: 'Step 3: Check the generality', text: 'The same relation $f = np$ fixes machine speed from frequency: 50 Hz gives 3000 r/min for two poles, 1500 for four, 1000 for six, and 375 r/min demands 16 poles.' },
        ],
        result: 'Field speed and pole count trade off directly: $n_1 = f/p$. This is why slow water-turbine generators are large-diameter many-pole machines and why inverter drives must vary frequency to vary speed.',
      },
    ],
    keyTakeaways: [
      'Every rotating machine is an energy balance in action: $\\Delta W_E + \\Delta W_M = \\Delta W_f + \\Delta W_s + \\Delta W_1$, with the magnetic field as the reversible coupling.',
      'Airgap field energy density $B^2/2\\mu_0$ gives the alignment force $F = B^2 A/2\\mu_0$; the equivalent inductive statement is $f_E = \\tfrac{1}{2} i^2 \\mathrm{d}L/\\mathrm{d}x$.',
      'Torque is the rate of change of field energy with angle: $M_E = \\mathrm{d}W_f/\\mathrm{d}\\lambda$ — rotate $x$ into $\\lambda$ and force into torque.',
      'Reluctance (singly excited) machines are synchronous by nature; their average torque exists only at rotor speed equal to supply frequency.',
      'Doubly excited machines divide into synchronous (AC stator, DC rotor), asynchronous (AC, AC) and commutator (DC, DC) families.',
      'Frequency and speed are locked by $f = np$; the armature is stationary in practice because slip-rings for megavolt-ampere currents would be unmanageable.',
      'Three-phase currents produce a rotating field of constant magnitude $1.5 B_{\\mathrm{m}}$ at $n_1 = f/p$; swapping any two phases reverses it.',
    ],
    quiz: [
      {
        q: 'The force of alignment between two parallel magnetized pole faces of area $A$, gap density $B$, is:',
        options: [
          '$F = B^2 A / 2\\mu_0$, attracting the faces together',
          '$F = B A / \\mu_0$, repelling the faces apart',
          '$F = 2\\mu_0 B^2 A$, independent of the area',
          '$F = B l i$, depending on a winding current',
        ],
        answer: 0,
        explanation: 'Separating the faces by $\\mathrm{d}x$ adds gap volume $A\\,\\mathrm{d}x$ at energy density $B^2/2\\mu_0$; the work done against the attraction equals the added stored energy, so $F = B^2 A/2\\mu_0$ — a pure attraction.',
      },
      {
        q: 'Which combination identifies the three families of doubly excited rotating machines?',
        options: [
          'Synchronous: AC stator, DC rotor; asynchronous: AC stator, AC rotor; commutator: DC stator, DC rotor',
          'Synchronous: DC stator, AC rotor; asynchronous: AC stator, DC rotor; commutator: AC stator, AC rotor',
          'All three families use DC on both stator and rotor',
          'Reluctance, transformer and commutator machines',
        ],
        answer: 0,
        explanation: 'Hughes classifies by the excitation of the two m.m.f. axes. Synchronous machines carry direct current on the rotor; induction machines induce alternating current in the rotor; d.c. machines use direct current on both, with the commutator performing the switching.',
      },
      {
        q: 'A three-phase, 50 Hz stator is wound for eight poles. The speed of the rotating field is:',
        options: [
          '3000 r/min',
          '1500 r/min',
          '750 r/min',
          '375 r/min',
        ],
        answer: 2,
        explanation: 'Eight poles are $p = 4$ pairs, so $n_1 = f/p = 50/4 = 12.5$ r/s = 750 r/min. Speed falls linearly with the number of pole pairs at fixed frequency.',
      },
      {
        q: 'The resultant flux of three equal phase m.m.f.s, each producing a peak gap density $B_{\\mathrm{m}}$ acting alone, is:',
        options: [
          'A pulsating field of peak $3 B_{\\mathrm{m}}$ on the fixed axis of one phase',
          'A rotating field of constant magnitude $1.5 B_{\\mathrm{m}}$',
          'A rotating field of constant magnitude $B_{\\mathrm{m}}$',
          'Zero, because the three phase fields cancel',
        ],
        answer: 1,
        explanation: 'Summing the three space-and-time sinusoids gives $1.5 B_{\\mathrm{m}} \\cos(\\omega t - \\theta)$: the peak stays fixed at 1.5 times one phase maximum and its position rotates through two pole pitches every cycle.',
      },
      {
        q: 'Why does a practical stator winding distribute its conductors over several slots per pole instead of one?',
        options: [
          'To raise the winding resistance and limit fault current',
          'To keep the slot size and insulation thickness manageable and to improve the e.m.f. waveform',
          'Because a single slot cannot hold a full coil side at any voltage',
          'To eliminate the need for laminations',
        ],
        answer: 1,
        explanation: 'A winding concentrated in one slot per pole per phase would overheat its insulation (heat must flow radially outward through many conductors) and would reproduce the non-sinusoidal flux distribution in its e.m.f.; distribution solves both problems at the cost of a small e.m.f. reduction.',
      },
    ],
  },

  // ------------------------------------------------------------------ 19.3
  {
    sectionId: 'elec-ch19-s3',
    readingTime: 12,
    intro: 'Synchronous machines run the power system; induction motors run industry — Hughes remarks that about half of all electric power consumption is due to induction motor loads. This section follows Hughes through armature reaction, synchronous impedance and the 600 MVA generator whose regulation nearly quadruples between unity and 0.8 power factor, then into the induction motor: slip, the transformer-like equivalent circuit, the torque-slip curve, and every practical way of starting a cage rotor that draws four to seven times full-load current if you dare switch it straight onto the line.',
    objectives: [
      'Explain armature reaction and calculate the voltage regulation of a synchronous generator from its synchronous impedance',
      'Define slip and rotor frequency and apply $s = (n_s - n)/n_s$ and $f_r = s f$',
      'Use the induction-motor equivalent circuit to find current, power factor, output power, torque and efficiency',
      'Predict the effect of rotor resistance on the torque-slip curve and the maximum-torque condition',
      'Compare the starting methods for cage motors and the constructions of single-phase motors',
    ],
    concepts: [
      {
        term: 'Armature reaction',
        kind: 'definition',
        statement: 'The rotating m.m.f. set up by the stator (armature) currents is the **armature reaction**. At unity power factor it distorts the main flux, skewing it against the direction of rotation so the driving engine must supply more torque; at a current **lagging** the e.m.f. by $90^\\circ$ it directly opposes the rotor flux (demagnetizing); at a current **leading** by $90^\\circ$ it adds to it (magnetizing).',
        detail: 'The consequences for terminal voltage are immediate: with constant excitation the voltage falls slowly with a unity-power-factor load, much faster at 0.8 lagging (the demagnetizing effect), and actually rises with a capacitive load. This single phenomenon — not winding resistance — dominates the regulation of large alternators, and it is also what lets an over-excited synchronous motor support the voltage of a whole system.',
      },
      {
        term: 'Synchronous impedance and generator regulation',
        kind: 'method',
        statement: 'The armature-reaction e.m.f. lags the current by a quarter cycle and therefore behaves exactly like a reactance — the **synchronous reactance** $X_s$. With the winding resistance $R$, the synchronous impedance per phase is $Z_s = \\sqrt{R^2 + X_s^2}$, and $$E^2 = V^2 + (I Z_s)^2 + 2 V \\cdot I Z_s \\cos(\\alpha - \\phi),$$ where $E$ is the no-load (open-circuit) e.m.f. and the per-unit regulation is $(E - V)/V$.',
        detail: 'Because $R \\ll X_s$ in generator windings, $Z_s \\approx X_s$ in rough work. Hughes measures it by the open-circuit/short-circuit ratio: run the generator open-circuit for the e.m.f., then short-circuit through an ammeter at the same excitation — the ratio of phase voltage to short-circuit current is $Z_s$. Saturation and saliency make the numerical value only approximate, but the method survives in practice.',
      },
      {
        term: 'Parallel operation of generators',
        kind: 'insight',
        statement: 'Two generators paralleled on the same busbars share load according to their **driving torques**: the machine whose rotor falls back by angle $\\theta$ receives almost reactive circulating current (since the impedance angle is near $90^\\circ$) and is motored by the other. Changing the **excitation** mainly changes the busbar voltage, not the load sharing.',
        detail: 'The circulating current is $I = E_Z / 2 Z_s$ at angle $\\alpha = \\tan^{-1}(X_s/R)$ to $E_Z$. So the operating rules are: (1) the distribution of kW between generators is set by the engines; (2) the terminal voltage is set by the excitations. Exactly the same mechanics, run in reverse, is the principle of the synchronous motor — the rotor still falls back or advances by a load angle, and power flows whichever way the angle dictates.',
      },
      {
        term: 'The synchronous motor and the synchronous capacitor',
        kind: 'definition',
        statement: 'A synchronous motor runs at exactly synchronous speed with its rotor poles locked to the rotating stator field. Its principal advantages are **controllable power factor** — an over-excited machine draws leading current and can correct the lagging current of a whole factory of induction motors — and absolutely constant speed; its disadvantages are higher cost per kW, the need for DC rotor excitation, and starting arrangements.',
        detail: 'Run on no load purely for power-factor correction or line-voltage support, the machine is called a **synchronous capacitor**. The excitation is usually supplied by a small DC shunt generator on an extension of the shaft.',
      },
      {
        term: 'Induction motor principle and slip',
        kind: 'law',
        statement: 'The rotating stator field induces e.m.f.s in the rotor conductors, whose currents distort the gap flux and drag the rotor around. The rotor can never reach synchronous speed — at synchronism there is no relative motion, no rotor e.m.f., no current and no torque. The **slip** is $$s = \\frac{n_s - n}{n_s},$$ and the rotor frequency is $f_r = s f$. Full-load slip is about 6 per cent for small motors and 2 per cent for large ones.',
        detail: 'The cage rotor — uninsulated copper or aluminium bars short-circuited by end rings, cast in one piece below about 50 kW — makes the induction motor the cheapest and most robust machine in existence. Because rotor and stator fields both rotate at synchronous speed relative to the stator ($s n_s + n_r = n_s$), the machine is exactly a transformer with an airgap: magnetizing current (up to 30 per cent of full load) and leakage are correspondingly larger than in a transformer.',
      },
      {
        term: 'Equivalent circuit of the induction motor',
        kind: 'method',
        statement: 'Per phase, the stator contributes $R_1$ and $X_1$; the magnetizing branch $X_m$ with core-loss resistor $R_c$ sits across the airgap; the rotor is a short-circuited secondary with e.m.f. $s E_2$, resistance $R_2$ and reactance $s X_2$. Dividing the rotor loop by $s$ splits the resistance into $R_2$ (rotor copper loss) plus $\\left(\\frac{1-s}{s}\\right) R_2$ — the mechanical output power.',
        detail: 'The rotor current is $I_2 = E_2/\\sqrt{(R_2/s)^2 + X_2^2}$, so the rotor power factor $\\cos\\phi = (R_2/s)/\\sqrt{(R_2/s)^2 + X_2^2}$ swings dramatically with slip: in Hughes’s Example 33.2, $\\phi = 8^\\circ 24^\\prime$ at 4 per cent slip but $74^\\circ 51^\\prime$ at standstill. The final circuit — stator $I^2R$, iron loss, rotor $I^2R$, and the $(1-s)R_2/s$ resistor labelled mechanical power — makes the whole power-flow diagram of the machine read like a circuit analysis.',
      },
      {
        term: 'Torque, mechanical power and the torque-slip curve',
        kind: 'theorem',
        statement: 'The total three-phase mechanical power is $$P_{\\mathrm{m}} = 3\\,\\frac{1-s}{s}\\, R_2^{\\prime} \\left|I_1\\right|^2,$$ and the torque is $M = P_{\\mathrm{m}}/\\omega_{\\mathrm{m}}$. Neglecting the magnetizing current, torque depends on slip as $$M = \\frac{K\\, s R_2^\\prime}{(R_2^\\prime)^2 + \\left( s X_2^\\prime \\right)^2}.$$ Maximum torque occurs when $R_2^\\prime = s X_2^\\prime$, and $M_{\\max} = K/2 X_2^\\prime$ — **independent of rotor resistance**.',
        detail: 'Increasing rotor resistance therefore pushes the peak of the curve toward higher slip (better starting torque) without changing its height — Hughes illustrates with $X_2^\\prime = 8\\,\\Omega$ and $R_2^\\prime$ of 1, 2 and 4 $\\Omega$, the last peaking at $s = 0.5$. The named points on the curve: locked-rotor (starting) torque, pull-up torque, pull-out (breakdown) torque, full-load torque. A higher rotor resistance gives higher starting torque but lower running efficiency — the classic design trade.',
      },
      {
        term: 'Starting methods for cage motors',
        kind: 'method',
        statement: 'Direct-on-line starting draws **four to seven times full-load current**. Reduced-voltage methods: the **star-delta starter** (phase voltage, current and torque each divided by 3 at start); the **auto-transformer starter** (torque and supply current scale with the square of the tapping ratio $n$); and the **solid-state soft starter** (thyristor firing-angle control, jerk-free, current held at a chosen maximum through acceleration).',
        detail: 'A slip-ring rotor attacks the problem at the source: external star-connected resistors in the rotor circuit via the slip-rings, cut out progressively as the motor accelerates, giving maximum torque at standstill if $R_2 = X_2$. The cage rotor answers with cheapness, robustness, slightly better efficiency and power factor, and no sparking (explosion-proof). For braking, reversing two phases makes the slip nearly 2 — plugging — demanding but well tolerated by cage machines.',
      },
      {
        term: 'Single-phase induction motors',
        kind: 'definition',
        statement: 'A single winding produces **two equal counter-rotating fields**, so the single-phase motor has zero torque at standstill; once moving, the forward-field motor action exceeds the backward braking action and the rotor accelerates. Starting therefore needs a second, phase-shifted winding: **capacitor-run**, **split-phase** (high-resistance auxiliary winding) or **shaded-pole** constructions.',
        detail: 'Split-phase starting torque is about 50 per cent above design load torque; the capacitor-run machine suits fans whose torque rises with speed squared; the shaded-pole motor is the cheapest of all and tops out at small ratings. Most one-phase motors produce outputs up to about 1 kW. Variable-speed operation of three-phase machines — varying the supply frequency so the torque-speed family moves bodily — belongs to the power electronics of the next chapter.',
      },
    ],
    examples: [
      {
        title: 'Regulation of a 600 MVA generator (Example 32.1)',
        problem: 'A three-phase, 600 MVA generator has a rated line voltage of 22 kV; the star-connected stator has $R = 0.014\\,\\Omega$/phase and synchronous impedance $Z_s = 0.16\\,\\Omega$/phase. Calculate the voltage regulation at (a) unity and (b) 0.8 lagging power factor.',
        steps: [
          { label: 'Step 1: Full-load current', text: 'From $600 \\times 10^{6} = 1.73 I_L \\times 22 \\times 10^{3}$, $I_L = 15.7$ kA, which equals the phase current in star.' },
          { label: 'Step 2: Phase quantities', text: 'Terminal phase voltage $V = 22\\,000/1.73 = 12\\,700$ V; synchronous-impedance drop $I Z_s = 15\\,700 \\times 0.16 = 2540$ V; $\\cos\\alpha = R/Z_s = 0.014/0.16 = 0.088$.' },
          { label: 'Step 3: Unity power factor', text: 'With $\\phi = 0$: $E^2 = 12\\,700^2 + 2540^2 + 2 \\times 12\\,700 \\times 2540 \\times 0.088 = 1.734 \\times 10^{8}$, so $E = 13\\,170$ V. Regulation $= (13\\,170 - 12\\,700)/12\\,700 = 0.037$ — 3.7 per cent.' },
          { label: 'Step 4: Power factor 0.8 lagging', text: 'Now $\\phi = 36.87^\\circ$ and $\\alpha = 84.95^\\circ$, so $\\cos(\\alpha - \\phi) = \\cos 48.08^\\circ = 0.668$. Then $E^2 = 2.111 \\times 10^{8}$, $E = 14\\,530$ V, and regulation $= (14\\,530 - 12\\,700)/12\\,700 = 0.144$ — 14.4 per cent.' },
        ],
        result: 'The same 600 MVA machine regulates 3.7 per cent at unity but 14.4 per cent at 0.8 lagging: armature reaction, not resistance, is what alternator regulation is made of.',
      },
      {
        title: 'Slip, rotor e.m.f., current and power factor (Examples 33.1 and 33.2)',
        problem: 'A four-pole, 50 Hz motor has a delta-connected stator with 240 conductors per phase and a star rotor with 48 conductors per phase; the rotor has $R_2 = 0.013\\,\\Omega$/ph and standstill leakage reactance $X_2 = 0.048\\,\\Omega$/ph; the supply is 400 V and the stator impedance is negligible. Find the synchronous speed, the rotor speed at 4 per cent slip, the rotor frequency at 600 r/min, and the rotor e.m.f., current and phase angle at 4 per cent slip.',
        steps: [
          { label: 'Step 1: Synchronous speed', text: '$n_s = 60 f/p = 60 \\times 50/2 = 1500$ r/min.' },
          { label: 'Step 2: Slip quantities', text: 'At $s = 0.04$ the rotor turns at $1500 (1 - 0.04) = 1440$ r/min. At 600 r/min, $s = (1500 - 600)/1500 = 0.6$ and the rotor frequency is $f_r = s f = 0.6 \\times 50 = 30$ Hz.' },
          { label: 'Step 3: Rotor e.m.f. at standstill', text: 'The turns ratio gives $E_2 = 400 \\times 48/240 = 80$ V per phase; at 4 per cent slip the rotor e.m.f. is $s E_2 = 3.2$ V.' },
          { label: 'Step 4: Rotor current', text: 'Rotor impedance $Z_2 = \\sqrt{0.013^2 + (0.04 \\times 0.048)^2} = 0.01314\\,\\Omega$, so $I_2 = 3.2/0.01314 = 244$ A per phase.' },
          { label: 'Step 5: Phase angle', text: '$\\tan\\phi = s X_2/R_2 = 0.00192/0.013 = 0.1477$, so $\\phi = 8^\\circ 24^\\prime$ at 4 per cent slip — but at standstill $\\tan\\phi = 0.048/0.013 = 3.69$ and $\\phi = 74^\\circ 51^\\prime$.' },
        ],
        result: 'Slip scales everything on the rotor: e.m.f. in proportion, reactance in proportion, and the rotor power factor from near-unity running to a dismal $\\cos 74^\\circ 51^\\prime$ at standstill — the reason starting current is large and starting torque is not.',
      },
      {
        title: 'Full performance from the equivalent circuit (Example 33.3)',
        problem: 'A 400 V, 33 kW, 60 Hz, three-phase, star-connected, four-pole, 1755 r/min induction motor has per-phase parameters $R_1 = 0.2\\,\\Omega$, $X_1 = 0.5\\,\\Omega$, $X_m = 20\\,\\Omega$, $R_2^\\prime = 0.1\\,\\Omega$, $X_2^\\prime = 0.2\\,\\Omega$, with windage and friction of 650 W and iron loss of 300 W. At full load and rated speed, find the slip, input current and power factor, input power, output torque and efficiency.',
        steps: [
          { label: 'Step 1: Slip', text: 'Synchronous speed $= 120 f/P = 120 \\times 60/4 = 1800$ r/min, so $s = (1800 - 1755)/1800 = 0.025$.' },
          { label: 'Step 2: Rotor branch impedance', text: '$R_2^\\prime/s + j X_2^\\prime = (0.1/0.025) + j0.2 = 4 + j0.2\\,\\Omega$; adding the stator, $Z = 4.2 + j0.7\\,\\Omega$. Combining with the magnetizing admittance $-j0.05\\,\\Omega^{-1}$ gives $Z_t = 4.03 \\angle 21^\\circ\\,\\Omega$.' },
          { label: 'Step 3: Current and power factor', text: 'Phase voltage $= 400/\\sqrt{3} = 230.9$ V, so $I_1 = 230.9/4.03 = 57.3$ A at $\\cos 21^\\circ = 0.93$ lagging.' },
          { label: 'Step 4: Power audit', text: 'Input $P_{\\mathrm{in}} = \\sqrt{3} \\times 400 \\times 57.3 \\times 0.93 = 36\\,918$ W. Stator copper loss $3 \\times 57.3^2 \\times 0.2 = 1970$ W; iron loss 300 W; airgap power $= 34\\,650$ W; rotor copper loss $3 \\times 57.3^2 \\times 0.1 = 985$ W; windage 650 W. Output $= 36\\,918 - 3905 = 33\\,010$ W — the nameplate 33 kW.' },
          { label: 'Step 5: Torque and efficiency', text: 'Rotor speed in rad/s: $\\omega_{\\mathrm{m}} = 1755 \\times 2\\pi/60 = 183.78$ rad/s, so $M = 33\\,000/183.78 = 179.6$ N m. Efficiency $= 33\\,000/36\\,918 = 89.4$ per cent.' },
        ],
        result: 'One circuit, the whole machine: 57.3 A at 0.93 lagging in, 33 kW and 179.6 N m out, 89.4 per cent efficient — with every loss located on the diagram (Hughes Example 33.4 runs the same audit on a 415 V motor at 5 per cent slip and finds 80.5 per cent).',
      },
    ],
    keyTakeaways: [
      'Armature reaction distorts the flux at unity power factor, demagnetizes at lagging and magnetizes at leading — which is why the synchronous-impedance method lumps it into $X_s$: $E^2 = V^2 + (IZ_s)^2 + 2 V I Z_s \\cos(\\alpha - \\phi)$, with regulation $(E - V)/V$.',
      'In parallel, driving torque shares the kW and excitation sets the busbar voltage; a synchronous machine motoring is simply one whose rotor has fallen back in angle.',
      'An induction motor cannot run at synchronous speed; slip $s = (n_s - n)/n_s$ scales the rotor e.m.f., the rotor reactance and the rotor frequency ($f_r = s f$).',
      'The $(1-s)R_2/s$ resistor in the equivalent circuit is the mechanical output; rotor copper loss is $s$ times the airgap power — which is why high-slip running is hot running.',
      'Maximum torque $M_{\\max} = K/2X_2^\\prime$ is independent of rotor resistance; rotor resistance only chooses the slip at which it occurs ($R_2^\\prime = s X_2^\\prime$).',
      'Star-delta divides starting current and torque by three, an auto-transformer by $n^2$; slip-ring rotors buy starting torque with external resistance; soft starters ramp the firing angle.',
      'A single-phase motor is two counter-rotating machines superposed; it needs a capacitor, split-phase or shaded-pole auxiliary to break the symmetry and start.',
    ],
    quiz: [
      {
        q: 'A generator delivers rated current at 0.8 power factor lagging instead of unity. Its voltage regulation will:',
        options: [
          'Stay roughly the same, since the current magnitude is unchanged',
          'Increase sharply, because the lagging armature reaction demagnetizes the machine',
          'Become negative, because the terminal voltage rises',
          'Depend only on the winding resistance',
        ],
        answer: 1,
        explanation: 'In Hughes’s 600 MVA example the same full-load current gives 3.7 per cent regulation at unity power factor but 14.4 per cent at 0.8 lagging: the quadrature armature reaction directly opposes the rotor flux.',
      },
      {
        q: 'An induction motor with a 4-pole, 50 Hz stator runs at 1440 r/min. The slip and rotor frequency are:',
        options: [
          '$s = 0.04$ and $f_r = 2$ Hz',
          '$s = 0.04$ and $f_r = 50$ Hz',
          '$s = 0.96$ and $f_r = 48$ Hz',
          '$s = 0.4$ and $f_r = 20$ Hz',
        ],
        answer: 0,
        explanation: 'Synchronous speed is $1500$ r/min, so $s = (1500 - 1440)/1500 = 0.04$; the rotor conductors see the field slipping by 60 r/min, giving $f_r = s f = 0.04 \\times 50 = 2$ Hz.',
      },
      {
        q: 'In the final per-phase equivalent circuit, what does the resistance $\\left(\\frac{1-s}{s}\\right) R_2^\\prime$ represent?',
        options: [
          'The stator copper loss',
          'The rotor copper loss',
          'The mechanical power developed by the machine',
          'The core (iron) loss',
        ],
        answer: 2,
        explanation: 'Splitting $R_2^\\prime/s$ into $R_2^\\prime + \\frac{1-s}{s} R_2^\\prime$ separates rotor copper loss from mechanical output; the power in the second element is $P_{\\mathrm{m}} = 3\\frac{1-s}{s} R_2^\\prime |I_1|^2$ watts of developed mechanical power.',
      },
      {
        q: 'Increasing the rotor resistance of an induction motor (up to the point $R_2^\\prime = s X_2^\\prime$):',
        options: [
          'Raises both the maximum torque and the starting torque',
          'Raises the starting torque and moves the torque peak to higher slip, but leaves the maximum torque unchanged',
          'Lowers the maximum torque and improves the running efficiency',
          'Has no effect on the torque-slip curve at all',
        ],
        answer: 1,
        explanation: 'The peak height $M_{\\max} = K/2X_2^\\prime$ depends only on the leakage reactance; resistance selects where the peak falls. A high-resistance rotor starts well (peak at large slip) but runs inefficiently at rated load.',
      },
      {
        q: 'Why does a star-delta starter reduce the starting current taken from the supply to one third of the direct-on-line value?',
        options: [
          'The star connection adds resistance to each phase',
          'The phase voltage is reduced to $1/\\sqrt{3}$ of the line voltage, so phase current falls by $1/\\sqrt{3}$ and line current by a further $1/\\sqrt{3}$',
          'The motor’s synchronous speed is reduced by the connection change',
          'The rotor resistance is tripled in star',
        ],
        answer: 1,
        explanation: 'In star each phase sees $V/\\sqrt{3}$, cutting the phase current by $1/\\sqrt{3}$; because in star the line current equals the phase current while in delta it is $\\sqrt{3}$ times it, the supply current — and with it the starting torque — is one third of the delta value.',
      },
    ],
  },

  // ------------------------------------------------------------------ 19.4
  {
    sectionId: 'elec-ch19-s4',
    readingTime: 11,
    intro: 'The DC machine is the classical workhorse: a commutator that mechanically rectifies the alternating e.m.f. of rotating conductors, lap or wave windings that trade current against voltage, and the two most quotable characteristics in electrical engineering — the shunt motor that holds its speed and the series motor whose speed is inversely proportional to its current. Hughes finishes the story with motor selection, the loss inventory, and the brake test that measures what all the theory promises.',
    objectives: [
      'Explain the function of the commutator and compare lap and wave armature windings',
      'Apply the e.m.f. equation $E = 2 (Z/c)(N p/60) \\Phi$ to generators and motors',
      'Distinguish generator and motor operation through $E = V \\pm I_a R_a$, and derive the speed and torque relations behind the shunt, series and compound characteristics',
      'Compare the speed-control methods, including the thyristor and chopper drives',
      'Itemize machine losses and compute efficiency from the brake test',
    ],
    concepts: [
      {
        term: 'General arrangement and the commutator',
        kind: 'definition',
        statement: 'A DC machine has a salient-pole stator carrying the field winding and a laminated cylindrical rotor (the **armature**) whose conductors generate an alternating e.m.f. as they pass successive poles. The **commutator** — wedge-shaped copper segments insulated by mica, connected to the armature coils — reverses the connections at the instants of zero e.m.f., converting the alternating conductor e.m.f. into a unidirectional brush voltage.',
        detail: 'The armature is double-layer wound: one side of a coil in the outer half of a slot, the other a pole pitch away in the inner half. Typical machines have 10–15 slots per pole. Two consequences of construction dominate design: brushes span segments whose conductors generate no e.m.f. (the magnetic neutral axis), and the whole rotating assembly must withstand the centrifugal loads of Chapter 31 proportions.',
      },
      {
        term: 'Lap and wave windings',
        kind: 'method',
        statement: 'In a **lap winding** the two ends of each coil go to adjacent commutator segments, giving as many parallel paths between brushes as poles: $c = 2p$. In a **wave winding** the ends go to segments well apart, and there are always just $c = 2$ parallel paths. Lap suits low-voltage heavy-current machines; wave gives $p$ times the voltage from the same conductors.',
        detail: 'Either way the product of voltage and current capability — the rating — is the same, as Hughes’s Example 36.1 shows with an eight-pole, 480-conductor armature at 2.2 V per conductor and 100 A per conductor: lap gives 132 V at 800 A, wave gives 528 V at 200 A, and both generate 105.6 kW.',
      },
      {
        term: 'E.m.f. generated in an armature winding',
        kind: 'theorem',
        statement: 'Each conductor cuts the flux of all poles once per revolution, so the average e.m.f. per conductor is $2 \\Phi N p/60$ volts, and with $Z$ total conductors in $c$ parallel paths, $$E = 2\\,\\frac{Z}{c}\\,\\frac{N p}{60}\\,\\Phi \\ \\text{volts}.$$',
        detail: 'Here $\\Phi$ is the useful flux per pole, $p$ the number of pole pairs, $N$ the speed in r/min. For a given machine $Z$, $c$ and $p$ are fixed, so $E = k N \\Phi$ — the relation behind every speed calculation in this section.',
      },
      {
        term: 'Armature reaction and commutation',
        kind: 'definition',
        statement: 'The armature ampere-turns ($\\tfrac{1}{2} I Z / (c \\cdot 2p)$ per pole) produce a **cross flux** at right angles to the main field, distorting it: strengthened at one pole tip, weakened at the other, and shifted magnetic neutral axis. In a motor the flux is distorted against the direction of rotation; in a generator, with it.',
        detail: 'Saturation at the strengthened pole tip makes the distortion slightly demagnetizing, so the total flux falls a little with load. Backward brush shift to follow the neutral axis introduces demagnetizing ampere-turns — which raises shunt-motor speed and can be used to offset the $IR$ drop. The practical cures are interpoles (compoles) and compensating windings; the loss they leave behind is the stray load loss, usually neglected.',
      },
      {
        term: 'Generator and motor relations',
        kind: 'law',
        statement: 'The same machine serves both duties; only the sign changes. As a **generator**, $E = V + I_a R_a$; as a **motor**, $V = E + I_a R_a$, where $E$ is now a **back e.m.f.** opposing the applied voltage. Since $E = k N \\Phi$ and the mechanical power developed is $E I_a = 2\\pi M N/60$: $$N \\propto \\frac{V - I_a R_a}{\\Phi}, \\qquad M = 0.318\\,\\frac{I_a}{c}\\, Z p \\Phi \\ \\text{newton metres} \\propto I_a \\Phi.$$',
        detail: 'The transition is completely reversible — Hughes pictures a shunt machine driven by an engine against a battery: with the field regulator raised the machine generates; let the engine die and the same machine motors off the battery, the field current never changing direction. Multiplying $V = E + I_a R_a$ through by $I_a$ gives the energy audit: $V I_a = E I_a + I_a^2 R_a$ — input power = mechanical power + copper loss.',
      },
      {
        term: 'Shunt, series and compound characteristics',
        kind: 'insight',
        statement: 'The **shunt motor** holds approximately constant speed (flux nearly fixed, $I_a R_a$ under 5 per cent of $V$) and has torque proportional to armature current. The **series motor** has flux roughly proportional to current below saturation, so torque is nearly proportional to $I_a^2$ and speed roughly inversely to current — high starting torque, but dangerously high speed at light load. The **compound motor** lies between.',
        detail: 'A series motor must never be belt-coupled to its load except in small machines — shed the belt and it races. The maximum current at starting is usually about 1.5 times full-load current, which is why the series machine (hoists, cranes, electric trains) owns heavy-start duty. In Example 37.6 a series motor at 600 r/min and 110 A, reloaded to 50 A with flux falling from 0.024 to 0.0155 Wb per pole, speeds up to 971 r/min.',
      },
      {
        term: 'Speed control and the starter',
        kind: 'method',
        statement: 'Since $N \\propto (V - I_a R_a)/\\Phi$, speed is controlled three ways: (1) a **field regulator** in series with the shunt winding — speeds up to three or four times rated, but never below; (2) a **controller** (armature series resistor rated for continuous current) — any speed from zero up, at poor efficiency; (3) **thyristor (electronic) control** of the armature voltage, or the **chopper** whose average motor voltage is $$V_{\\mathrm{av}} = V_B \\, \\frac{t_1}{t_1 + t_2}.$$ A face-plate **starter** is essential because at standstill the back e.m.f. is zero and the armature resistance alone must limit the starting current; its resistors are cut out step by step, with no-volt and overload release coils protecting the machine.',
        detail: 'The thyristor drive of section 37.7 fires once per cycle with a free-wheeling diode across the armature carrying current while the thyristor is off; the later the firing instant, the lower the average armature voltage. The battery-vehicle chopper switches the series motor with a thyristor and shorting switch, varying the ON/OFF ratio $t_1/t_2$ — Hughes’s own words: for a low speed the ratio is small, and the battery supplies power only during the ON intervals.',
      },
      {
        term: 'Stepper and control-system motors',
        kind: 'definition',
        statement: 'Position-control systems need motors that move in precise increments. The **variable-reluctance stepper** (four rotor poles, six stator poles) advances 30° per excitation step, the step angle adjustable by pole count; the **hybrid stepper** puts toothed rotors either side of an axial permanent magnet and achieves step angles of 1.8° and 2.5° — 144 steps per revolution in Hughes’s illustration. Counting pulses measures rotation exactly.',
        detail: 'Stepper drives pair the motor with drive circuits that route current pulses to the right winding pairs in the right order, under direction control. The alternative continuous-position actuator is the servo of the control chapter, and for straightforward speed tasks Hughes’s advice is simpler still: most motors run 500–3000 r/min, and changing speed with gears is often cheaper than a special motor.',
      },
      {
        term: 'Losses, efficiency and motor selection',
        kind: 'method',
        statement: 'DC machine losses: armature $I^2R$ (corrected to working temperature — resistance rises by a factor of about 1.2 from 15 °C to 65 °C), armature **core loss** (hysteresis $= k v f (B_{\\max})^x$ with $x = 1.5$–2.5, and eddy-current loss proportional to the square of lamination thickness — hence 0.4 mm silicon-steel laminations), brush contact loss (about $2 \\times$ total armature current in watts), excitation loss $I_s V$, friction and windage (windage rising with the cube of speed), and stray load loss. Efficiency is maximum when the variable loss equals the constant loss, exactly as in the transformer.',
        detail: 'Selection is driven by speed (most motors operate between 500 and 3000 r/min), power rating limited by the ability to dissipate the waste heat in the insulation, duty cycles (a 10 kW motor can deliver 20 kW for a minute or two; standard short-time ratings are 10, 30 and 60 minutes), load torque type (constant-torque like a lift, or square-law fan/pump torque) and environment. Hughes’s Example 39.2 measures a 240 V series motor directly with a belt brake: 17.2 N m, 1355 W out, 82.5 per cent efficient, and the losses dissected into 95.2 W copper, 102.6 W friction-and-windage and 89 W core loss.',
      },
    ],
    examples: [
      {
        title: 'E.m.f. of a wave-wound armature (Example 36.2)',
        problem: 'A four-pole wave-connected armature has 51 slots with 12 conductors per slot and is driven at 900 r/min. If the useful flux per pole is 25 mWb, calculate the generated e.m.f.',
        steps: [
          { label: 'Step 1: Count conductors and paths', text: 'Total conductors $Z = 51 \\times 12 = 612$; a wave winding has $c = 2$ parallel paths; $p = 2$ pairs of poles.' },
          { label: 'Step 2: Substitute into the e.m.f. equation', text: '$E = 2 \\times \\frac{612}{2} \\times \\frac{900 \\times 2}{60} \\times 0.025$.' },
          { label: 'Step 3: Evaluate', text: '$E = 612 \\times 30 \\times 0.025 = 459$ V.' },
          { label: 'Step 4: Sanity check', text: 'The same armature lap-connected would put all 612 conductors in 4 paths: $E = 2 \\times 153 \\times 30 \\times 0.025 = 229.5$ V — half the voltage, twice the current capacity.' },
        ],
        result: '$E = 459$ V. The companion design example (36.3) runs the equation backwards: an eight-pole lap armature at 350 r/min needing 260 V from 0.05 Wb per pole requires about 890 conductors — 8 per slot in 120 slots.',
      },
      {
        title: 'Speed and torque of a lap-wound motor (Example 37.4)',
        problem: 'A DC motor takes an armature current of 110 A at 480 V. The armature circuit resistance is 0.2 Ω; the machine has six poles, a lap-connected armature of 864 conductors, and 0.05 Wb of flux per pole. Calculate (a) the speed and (b) the gross torque developed.',
        steps: [
          { label: 'Step 1: Back e.m.f.', text: '$E = V - I_a R_a = 480 - 110 \\times 0.2 = 458$ V.' },
          { label: 'Step 2: Solve for speed', text: 'Lap connection on six poles gives $c = 6$: $458 = 2 \\times \\frac{864}{6} \\times \\frac{N \\times 3}{60} \\times 0.05$, so $0.72 N = 458$ and $N = 636$ r/min.' },
          { label: 'Step 3: Mechanical power', text: 'Power developed $= E I_a = 458 \\times 110 = 50\\,380$ W.' },
          { label: 'Step 4: Torque', text: 'From $2 \\pi M N/60 = E I_a$: $M = 50\\,380 \\times 60/(2\\pi \\times 636) = 756$ N m — or directly, $M = 0.318 \\times \\frac{110}{6} \\times 864 \\times 3 \\times 0.05 = 756$ N m.' },
        ],
        result: '636 r/min and 756 N m from 50.4 kW of developed power — the two formulas for torque agree to the watt.',
      },
      {
        title: 'Brake test on a series motor, and the loss dissection (Example 39.2)',
        problem: 'In a load test on a 240 V DC series motor at one load: terminal voltage 238 V, line current 6.90 A, speed 755 r/min, and a belt brake with forces of 150 N and 15 N at an effective radius of 127 mm. The resistance between terminals is 2.0 Ω and the windage and friction loss equals $(1.8 \\times 10^{-4}) N^2$ watts. Evaluate the torque, the brake power, the efficiency, and estimate the core loss.',
        steps: [
          { label: 'Step 1: Torque from the brake', text: '$T = (F_2 - F_1) r = (150 - 15) \\times 0.127 = 17.2$ N m.' },
          { label: 'Step 2: Brake power', text: 'At 755 r/min, $\\omega = 2\\pi \\times 755/60 = 79.06$ rad/s, so $P_o = 17.2 \\times 79.06 = 1355$ W.' },
          { label: 'Step 3: Efficiency', text: 'Input $P_i = 238 \\times 6.9 = 1642$ W, so $\\eta = 1355/1642 = 82.5$ per cent.' },
          { label: 'Step 4: Dissect the losses', text: 'Total loss $= 1642 - 1355 = 287$ W, made of $I^2R = 6.9^2 \\times 2 = 95.2$ W, windage and friction $= 1.8 \\times 10^{-4} \\times 755^2 = 102.6$ W, and therefore a core loss of $287 - 95.2 - 102.6 = 89$ W.' },
        ],
        result: '17.2 N m, 1355 W, 82.5 per cent — and the brake has measured the machine’s core loss without ever opening it. Hughes’s Example 39.3 shows the other route: a 100 kW shunt generator run as a motor on no load (9.8 A total, 2.7 A shunt) locates the 3260 W of constant core, friction and windage loss that, added to full-load copper and shunt losses, predicts 91 per cent full-load efficiency.',
      },
    ],
    keyTakeaways: [
      'The commutator turns the alternating conductor e.m.f. into DC by switching coils at the magnetic neutral axis — lap windings give $2p$ parallel paths, wave windings give 2 — and $E = 2 (Z/c)(N p / 60)\\Phi$ fixes the voltage of any DC machine ($E = k N \\Phi$ for a given one).',
      'Generator: $E = V + I_a R_a$. Motor: $V = E + I_a R_a$ with $E$ a back e.m.f., and $E I_a$ is the mechanical power developed.',
      'Motor speed is proportional to $(V - I_a R_a)/\\Phi$ and torque to $\\Phi I_a$: weaken the field to speed up, but never unload a series motor.',
      'A starter is mandatory because at zero speed there is no back e.m.f.; its steps are short-time rated, unlike a controller.',
      'Thyristor drives control the average armature voltage by firing angle; choppers do it by ON/OFF time ratio $t_1/(t_1 + t_2)$ — the DC link of the next chapter.',
      'Steppers convert counted electrical pulses into exact mechanical angle — VR types at 30°-class steps, hybrid types at 1.8°.',
      'Motor selection weighs speed, thermal rating and duty cycle, load-torque law and environment; efficiency peaks when variable loss equals constant loss, and the brake test measures everything directly.',
    ],
    quiz: [
      {
        q: 'A six-pole DC machine has a lap-wound armature. How many parallel paths does the winding provide between the brushes?',
        options: [
          '2',
          '6',
          '12',
          'It depends on the number of conductors',
        ],
        answer: 1,
        explanation: 'A lap winding has as many parallel paths as poles ($c = 2p$ counting pairs — six paths for a six-pole machine), which is why lap suits low-voltage, high-current duty. A wave winding always has exactly 2.',
      },
      {
        q: 'A DC motor runs from a 440 V supply and takes 50 A of armature current through a 0.28 Ω armature circuit. The back e.m.f. is approximately:',
        options: [
          '454 V',
          '426 V',
          '440 V',
          '390 V',
        ],
        answer: 1,
        explanation: '$E = V - I_a R_a = 440 - 50 \\times 0.28 = 440 - 14 = 426$ V (Hughes Example 37.2, which then finds the speed from the e.m.f. equation). The drop is normally under 5 per cent of $V$.',
      },
      {
        q: 'Why must a series motor never be belt-coupled to its load (except in very small sizes)?',
        options: [
          'The belt cannot transmit the high starting torque',
          'If the belt breaks, the flux collapses with the current and the speed becomes dangerously high',
          'The commutator cannot reverse the current under a belt load',
          'A series motor cannot start under any load at all',
        ],
        answer: 1,
        explanation: 'Speed is roughly inversely proportional to current in a series machine; shed the load and the current — and with it the flux — falls towards zero, so the speed rises without limit. Direct-coupled loads (hoists, trains) keep the mechanical connection.',
      },
      {
        q: 'A chopper feeds a series traction motor from a battery of voltage $V_B$. With switch-ON time $t_1$ and OFF time $t_2$, the average motor voltage is:',
        options: [
          `$V_B \\, t_2/(t_1 + t_2)$`,
          `$V_B \\, t_1/(t_1 + t_2)$`,
          `$V_B \\, (t_1 + t_2)/t_1$`,
          '$V_B$ regardless of the timing',
        ],
        answer: 1,
        explanation: 'The battery supplies the full voltage only during the ON intervals, and the free-wheeling diode carries the motor current during the OFF intervals; the time average is the battery voltage times the duty fraction $t_1/(t_1 + t_2)$. Small ratio — low speed; large ratio — high speed.',
      },
      {
        q: 'In DC machine losses, the eddy-current loss is reduced primarily by:',
        options: [
          'Laminating the core thinly (below about 0.4 mm) and using silicon steel of higher resistivity',
          'Increasing the airgap length',
          'Adding series resistance to the field winding',
          'Cooling the commutator with forced air',
        ],
        answer: 0,
        explanation: 'Splitting the core into insulated laminations confines the induced circulating currents; the loss falls roughly with the square of lamination thickness, and beyond about 0.4 mm the further reduction no longer pays for the construction. About 4 per cent silicon raises the resistivity and cuts the loss further.',
      },
    ],
  },
]

export const elecCh19Formulas: FormulaEntry[] = [
  {
    chapterId: 'elec-ch19',
    section: '19.1',
    name: 'Transformer e.m.f. equation',
    formula: 'E = 4.44 f N Φₘ',
    note: 'RMS e.m.f. of a winding of N turns with sinusoidal flux',
    latex: 'E = 4.44\\, f\\, N\\, \\Phi_{\\mathrm{m}}',
  },
  {
    chapterId: 'elec-ch19',
    section: '19.1',
    name: 'Ideal transformer ratios',
    formula: 'V₁ / V₂ = N₁ / N₂ ≃ I₂ / I₁',
    note: 'Voltage follows turns; current is inverse (ampere-turn balance)',
    latex: '\\frac{V_1}{V_2} = \\frac{N_1}{N_2} \\simeq \\frac{I_2}{I_1}',
  },
  {
    chapterId: 'elec-ch19',
    section: '19.1',
    name: 'Transformer voltage regulation',
    formula: 'reg = I₁(Rₑ cos φ₂ + Xₑ sin φ₂) / V₁',
    note: 'Per unit, lagging load; reactance term subtracts if leading',
    latex: '\\text{reg} = \\frac{I_1 \\left( R_e \\cos\\phi_2 + X_e \\sin\\phi_2 \\right)}{V_1}',
  },
  {
    chapterId: 'elec-ch19',
    section: '19.1',
    name: 'Efficiency from OC and SC tests',
    formula: 'η = S·pf / (S·pf + Pₒc + n²·Pₛc)',
    note: 'At load fraction n of full load; core loss constant, copper n²',
    latex: '\\eta = \\frac{n S \\cos\\phi}{n S \\cos\\phi + P_{\\mathrm{oc}} + n^{2} P_{\\mathrm{sc}}}',
  },
  {
    chapterId: 'elec-ch19',
    section: '19.3',
    name: 'Slip of an induction motor',
    formula: 's = (nₛ − n) / nₛ',
    note: 'Rotor frequency follows as fr = s·f',
    latex: 's = \\frac{n_s - n}{n_s}',
  },
  {
    chapterId: 'elec-ch19',
    section: '19.3',
    name: 'Induction-motor mechanical power',
    formula: 'Pₘ = 3·((1 − s)/s)·R₂′·I₁²',
    note: 'The (1−s)/s rotor resistor is the mechanical output',
    latex: 'P_{\\mathrm{m}} = 3\\,\\frac{1-s}{s}\\, R_2^{\\prime} \\left| I_1 \\right|^{2}',
  },
  {
    chapterId: 'elec-ch19',
    section: '19.4',
    name: 'DC machine e.m.f.',
    formula: 'E = 2·(Z/c)·(N·p/60)·Φ',
    note: 'c = 2 for wave, 2p for lap windings; N in r/min',
    latex: 'E = 2\\,\\frac{Z}{c}\\,\\frac{N p}{60}\\,\\Phi',
  },
  {
    chapterId: 'elec-ch19',
    section: '19.4',
    name: 'DC motor speed and torque',
    formula: 'N ∝ (V − IₐRₐ)/Φ,  M ∝ Φ·Iₐ',
    note: 'From V = E + IₐRₐ with E = kNΦ and EIₐ the developed power',
    latex: 'N \\propto \\frac{V - I_a R_a}{\\Phi}, \\qquad M \\propto \\Phi I_a',
  },
  {
    chapterId: 'elec-ch19',
    section: '19.2',
    name: 'Rotating field speed',
    formula: 'f = n·p,  n₁ = f/p',
    note: 'Frequency, speed in r/s and pole pairs for any AC winding',
    latex: 'f = n p, \\qquad n_1 = \\frac{f}{p}',
  },
]
