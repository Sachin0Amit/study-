import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// Hughes, Electrical & Electronic Technology, 12th Edition, chs 34–35, 40–42,
// merged with The Art of Electronics 3e, chapter 9 (voltage regulation and
// power conversion) for the master Electronics library.
// Chapter 20: Power Systems, Power Electronics and Control (Sections 20.1–20.4).
// All worked-example numbers are the book’s own (Examples 34.2, 35.6, 35.8,
// 41-series regulator, 42.1–42.2, plus the Exercises 40 thyristor data).
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh20Content: SectionContent[] = [
  // ------------------------------------------------------------------ 20.1
  {
    sectionId: 'elec-ch20-s1',
    readingTime: 10,
    intro: 'Hughes zooms out from the machine to the system that feeds it: generation at 25 kV, transmission at 400, 275 and 132 kV, distribution at 33 and 11 kV, and a wall socket at 415 V three-phase or 240 V single-phase. Between those voltage levels live the load curves (a British winter peak near 60 GW against a summer base of 22 GW), the per-unit method that makes a continent-wide network calculable, and the fault level that sizes every circuit breaker on it.',
    objectives: [
      'Convert between energy units (kW h, Mtoe, EJ) and apply the Second-Law limit on generation efficiency',
      'Describe the voltage hierarchy of a transmission and distribution network',
      'Explain load curves, base load, spinning reserve and the tools for meeting sudden peaks',
      'Convert ohmic impedances to per-unit values on a chosen base, and compute fault levels and circuit-breaker ratings from them',
      'Discuss tariffs, levelised generation costs and demand management',
    ],
    concepts: [
      {
        term: 'Energy units for a national scale',
        kind: 'notation',
        statement: 'The joule is impractical at system scale, so: $1\\ \\text{kW h} = 3.6$ MJ, $1$ toe (tonne of oil equivalent) $\\simeq 42$ GJ. World primary energy consumption in 2013 was about $12\\,730$ Mtoe $\\simeq 535$ EJ; world electricity generation in 2012 was about $22 \\times 10^{6}$ GW h ($\\simeq 82$ EJ), of which the UK generated about $360\\,000$ GW h ($\\simeq 1.3$ EJ).',
        detail: 'Every unit conversion is a sanity check in disguise: Hughes’s Example 34.1 has 80 tonnes per hour of coal at 30 MJ/kg feeding a boiler — that is $80 \\times 1000 \\times 30 \\times 10^{6}/3600 = 666.7$ MW of thermal input. Fossil-fuel energy content is always approximate, which is why the tonne-of-oil-equivalent exists.',
      },
      {
        term: 'Energy conversion and its thermodynamic ceiling',
        kind: 'law',
        statement: 'The efficiency of an ideal heat engine is $$\\eta = 1 - \\frac{T_2}{T_1}$$ with absolute temperatures. A power-station turbine ($T_1 = 600$ °C $= 873$ K, $T_2 = 45$ °C $= 318$ K) is capped at 0.64 and achieves about 0.5; real fuel-to-electricity chains multiply stage efficiencies: coal-to-steam 0.88, steam-to-mechanical 0.5, generator 0.99 — about 44 per cent overall.',
        detail: 'The UK’s coal-fired stations averaged 35.8 per cent in 2013, most of the loss leaving as warm water. Combined heat and power recovers it — using the waste heat at around 50 °C for local heating lifts total conversion to about 70 per cent. Ordered energy (low entropy) can be fully converted down the ladder; disordered energy can only partly climb back up. Hydroelectric stations, converting gravitational potential energy directly, reach about 85 per cent.',
      },
      {
        term: 'The generation mix',
        kind: 'insight',
        statement: 'In 2012 the world generated $22\\,613$ TW h: fossil fuels 68.1 per cent (coal 40.5, gas 22.5, oil 5.1), hydro 16.2, nuclear 10.9, wind 2.4, biomass 1.4, solar 0.5. The UK’s 2013 mix: coal 36.7 per cent, gas 26.9, nuclear 19.7, wind/wave/PV 8.6, renewables 5.2, natural-flow hydro 1.3 — a total of $356\\,253$ GW h, of which the industry used $17\\,888$ GW h itself and $27\\,000$ GW h was lost in transmission and distribution.',
        detail: 'Generation must match demand instantaneously, second by second — electricity is made as it is required. Stations with the lowest running costs (nuclear, large coal, gas) supply the base load; higher-cost stations bid into the pool as demand rises. Anti-pollution legislation, carbon taxes and the intermittency of wind and solar (and the standby capacity they need) now shape the mix as much as fuel price does.',
      },
      {
        term: 'Network layout and voltage levels',
        kind: 'definition',
        statement: 'Power stations generate at up to 25 kV (three-phase line). The transmission network carries 400, 275 and 132 kV over long distances — high voltage specifically to minimize $I^{2}R$ loss — the distribution network carries 33 and 11 kV over shorter distances, and consumers receive **415 V (three-phase) or 240 V (single-phase)**; large industrial customers take 11 or 33 kV directly.',
        detail: 'The UK National Grid links generators to distributors and large customers, and connects to continental Europe through a 2000 MW HVDC interconnector under the Channel to France (a second 1000 MW link to the Netherlands opened in 2011). Transformers — Chapter 19’s machines doing their highest-volume work — sit at every level change in the system.',
      },
      {
        term: 'Load curves and meeting the peaks',
        kind: 'method',
        statement: 'UK average demand is around 40 GW; the winter peak approaches 60 GW (highest ever met: 60 118 MW on 10 December 2002) and the summer-night minimum is 22 GW — the **base load**. Peaks are met by **spinning reserve** (660 MW sets running at temperature off load), quick-start **open-cycle gas turbines** (about 30 per cent fuel efficient, full power in minutes) and **pumped storage**.',
        detail: 'Load forecasting needs weather (especially wind chill on effective temperature), TV schedules and work patterns: during the 1990 World Cup semi-final, kettle-switching produced surges of 1600 MW at half-time and 2900 MW at the end — one million 3 kW kettles create 3000 MW of demand, nearly the entire output of five 660 MW generators. It can take hours to prepare a cold 660 MW turbine set for full power.',
      },
      {
        term: 'The per-unit method',
        kind: 'method',
        statement: 'Express every voltage, current, impedance and apparent power as a fraction of a chosen base: $Z_{\\mathrm{pu}} = \\sqrt{3} I_{\\mathrm{base}} Z / V_{\\mathrm{base}}$, or, avoiding base current entirely, $$Z_{\\mathrm{pu}} = \\frac{Z\\, S_B}{V_B^{2}}, \\qquad Z_{\\Omega} = Z_{\\mathrm{pu}} \\frac{V_B^{2}}{S_B}.$$ To refer an impedance given on its own rating to a common base: $Z_{\\mathrm{pu,base}} = Z_{\\mathrm{pu,actual}} \\times S_B/S_{\\mathrm{actual}}$.',
        detail: 'The point of the method: a 33/11 kV transformer has a different base voltage on each side, and referring ohmic values through four or five transformations is laborious and error-prone. A 0.1 pu transformer is a 12.5 per cent voltage drop at full load whether it is a 2 MVA distribution unit or a 500 MVA grid transformer. In Hughes’s Example 35.4, the same 0.1 pu machine is $j6.05\\,\\Omega$ referred to 11 kV or $j0.08\\,\\Omega$ referred to 400 V — identical in per-unit.',
      },
      {
        term: 'Faults and switchgear rating',
        kind: 'law',
        statement: 'Five fault types occur in a three-phase system; the single line-to-earth fault is the most common, the **three-phase symmetrical fault the most severe**. The network impedance between source and fault limits the current, and in per-unit the fault current is $I_{\\mathrm{SC}} = I_B/Z_{\\mathrm{pu}}$, so the **fault level** is $$\\mathrm{MVA}_{\\mathrm{SC}} = \\frac{S_B}{Z_{\\mathrm{pu}}}.$$ Switchgear must be rated above the fault level at its location.',
        detail: 'Fault currents in large systems run to many thousands of amperes and must be interrupted in less than a tenth of a second. Fuses serve where the fault level is low (LV networks far from stations); compressed-gas circuit breakers of many MVA sit near the power stations. A grid connection can be represented by a single generator of rating equal to the local fault level in series with the reactance $Z_{\\mathrm{pu}} = S_B/\\mathrm{MVA}_{\\mathrm{SC}}$ — Hughes’s Example 35.8 turns a 2000 MVA fault level into j0.05 pu on a 100 MVA base.',
      },
      {
        term: 'Tariffs, levelised cost and demand management',
        kind: 'definition',
        statement: 'Generation cost is quoted as a **levelised (life-cycle) cost**: total lifetime cost — planning, construction, operation, fuel, decommissioning — divided by total lifetime kW h, in pence per kW h. DECC estimates for plant commissioning in 2020: new nuclear 8.3–10.8, gas without capture 8.0–8.3, onshore wind 8.4–12.3, offshore wind 10–14, large-scale solar PV 11.5–13.2 p/kW h.',
        detail: 'Feed-in tariffs (from April 2010, up to 5 MW scale) pay for small-scale generation and exported surplus. Demand management attacks the other side: smart meters enable dynamic pricing (electricity dear at peak, cheap when wind and sun are plentiful), the smart grid overlays the network with two-way communications, and storage — pumped hydro, 100 kW flywheel farms (20 MW in New York State), flow batteries at 65–75 per cent efficiency, or the 20–50 kW h in every parked electric vehicle — buffers the intermittency of renewables. Hughes’s Example 34.13: one 80 W lamp swapped for 20 W in each of 24 million households saves 2100 GW h a year — 30 per cent of the annual output of a 1000 MW station at 80 per cent capacity factor.',
      },
    ],
    examples: [
      {
        title: 'The chain of a coal-fired station (Example 34.2)',
        problem: 'Using the stage efficiencies of Hughes’s Table 34.1, estimate the overall efficiency of a coal-fired power station and compare it with the realized 2013 UK figure.',
        steps: [
          { label: 'Step 1: Boiler', text: 'Burning coal to raise steam — chemical to thermal conversion at 88 per cent.' },
          { label: 'Step 2: Turbine', text: 'Turning the steam turbine — thermal to mechanical at 50 per cent (the Second-Law ceiling for 873 K source and 318 K sink is $1 - 318/873 = 0.64$).' },
          { label: 'Step 3: Generator', text: 'Mechanical to electrical at 99 per cent — machines of Chapter 19 at their best.' },
          { label: 'Step 4: Multiply the chain', text: '$\\eta = 0.88 \\times 0.50 \\times 0.99 = 0.436$ — about 44 per cent.' },
          { label: 'Step 5: Compare with reality', text: 'The UK coal fleet averaged 35.8 per cent in 2013; combined heat and power, selling the waste heat, can reach about 70 per cent total.' },
        ],
        result: 'Even a flawless chain of best-practice stages barely reaches the mid-forties in per cent — the thermodynamics, not the engineering, is the bottleneck.',
      },
      {
        title: 'Per-unit voltage drop across a grid (Example 35.6)',
        problem: 'A 50 MW, 0.85 power factor lagging load is fed at 33 kV through a 200 MVA, 275/132 kV transformer of 0.1 pu reactance, an overhead line of $j4.0\\,\\Omega$/phase at 132 kV, and a 100 MVA, 132/33 kV transformer of 0.06 pu reactance. Find the sending-end voltage at the 275 kV grid.',
        steps: [
          { label: 'Step 1: Choose the base', text: 'Take $S_B = 100$ MVA (one of the transformer ratings, to minimize work).' },
          { label: 'Step 2: Refer the impedances', text: 'Transformer A: $0.1 \\times 100/200 = j0.05$ pu. Line: $Z_{\\mathrm{pu}} = j4 \\times 100/132^{2} = j0.023$ pu. Transformer D: $j0.06$ pu stays. Total $= j0.133$ pu.' },
          { label: 'Step 3: Load current in per-unit', text: '$S_L = 50/0.85 = 58.8$ MVA, so $I_{\\mathrm{pu}} = 58.8/100 = 0.588$ pu at $\\cos\\phi = 0.85$: $I = 0.50 - j0.31$ pu.' },
          { label: 'Step 4: Sending-end voltage', text: '$V_S = 1 + j0.133 (0.50 - j0.31) = 1.0412 + j0.0665$ pu, magnitude 1.0433 pu.' },
          { label: 'Step 5: Convert back to volts', text: '$V_S = 1.0433 \\times 275 = 287$ kV — the grid must hold 4.3 per cent above nominal to deliver 33 kV at the load.' },
        ],
        result: 'Three network elements on different voltage levels reduce to one multiplication. Hughes’s Example 35.5 repeats the same system in ohms and reaches the same 34.22 kV answer the long way.',
      },
      {
        title: 'Sizing circuit breakers from the fault level (Example 35.8)',
        problem: 'A grid connection with a fault level of 2000 MVA feeds 275 kV busbars connected through two 100 MVA, 275/33 kV transformers (each 0.05 pu reactance) to 33 kV busbars. Determine the circuit-breaker rating required on the outgoing 33 kV circuits and the fault current at the 33 kV busbars.',
        steps: [
          { label: 'Step 1: The grid as a source', text: 'On a 100 MVA base the grid connection has $Z_{\\mathrm{pu}} = 100/2000 = 0.05$ pu.' },
          { label: 'Step 2: Combine the transformers', text: 'Two identical $j0.05$ pu transformers in parallel give $j0.025$ pu; in series with the grid: $0.05 + 0.025 = 0.075$ pu.' },
          { label: 'Step 3: Fault level at 33 kV', text: '$\\mathrm{MVA}_{\\mathrm{SC}} = S_B/Z_{\\mathrm{pu}} = 100/0.075 = 1333$ MVA.' },
          { label: 'Step 4: Breaker rating and fault current', text: 'Circuit breakers must exceed 1333 MVA. The fault current $I_{\\mathrm{SC}} = 1333 \\times 10^{6}/(\\sqrt{3} \\times 33 \\times 10^{3}) = 23.3$ kA.' },
        ],
        result: 'One division sizes the switchgear: 1333 MVA breaking capacity, 23.3 kA of fault current. In Example 35.7 the same method combines two generators, their cables and a 30 MVA transformer to give a 286 MVA fault level.',
      },
    ],
    keyTakeaways: [
      'Energy accounting at system scale uses $1\\ \\text{kW h} = 3.6$ MJ and $1$ Mtoe $\\simeq 42$ GJ; world electricity generation is of order 80 EJ per year.',
      'Thermal generation is capped by $\\eta = 1 - T_2/T_1$; the best coal chain reaches about 44 per cent and CHP about 70 per cent by selling the waste heat.',
      'The voltage hierarchy — 25 kV generation, 400/275/132 kV transmission, 33/11 kV distribution, 415/240 V supply — exists to keep transmission currents and losses small.',
      'Base load (the summer-night minimum, 22 GW in the UK) runs on the cheapest stations; peaks near 60 GW are met by spinning reserve, quick-start gas turbines and pumped storage.',
      'Per-unit quantities erase the transformations: $Z_{\\mathrm{pu}} = Z S_B/V_B^{2}$, and re-basing is a simple ratio $S_B/S_{\\mathrm{actual}}$.',
      'Fault level $= S_B/Z_{\\mathrm{pu}}$ at any point; switchgear ratings and the 23 kA-class fault currents follow immediately.',
      'Levelised cost per kW h, feed-in tariffs, smart dynamic pricing and storage (pumped hydro, flywheels, EV batteries) are the economic and demand-side tools of the modern grid.',
    ],
    quiz: [
      {
        q: 'Why is electrical energy transmitted at 400 kV rather than, say, 11 kV?',
        options: [
          'Because 400 kV machines are cheaper to build',
          'For the same power, the current is 36 times smaller, so $I^{2}R$ losses fall by a factor of about 1300',
          'Because the grid frequency must be higher at high voltage',
          'To reduce the insulation required on the conductors',
        ],
        answer: 1,
        explanation: 'Power is the product of voltage and current; raising the voltage by a factor of 36 lowers the current by 36 and the resistive loss, which goes as current squared, by about $36^{2} \\approx 1300$. This is the transformer earning its place in the system.',
      },
      {
        q: 'An impedance is quoted as 0.1 pu on a 10 MVA base. On a 100 MVA base the same impedance is:',
        options: [
          '0.01 pu',
          '0.1 pu',
          '1.0 pu',
          '10 pu',
        ],
        answer: 2,
        explanation: 'Re-basing multiplies by the ratio of bases: $0.1 \\times 100/10 = 1.0$ pu. The same physical device drops ten times more voltage when the base power through it is ten times larger.',
      },
      {
        q: 'The most severe fault a circuit breaker must handle in a three-phase system is:',
        options: [
          'A single line-to-earth fault, because it is the most common',
          'A two-line fault',
          'A symmetrical three-phase fault, because it involves the greatest fault current',
          'An open-circuit fault on one line',
        ],
        answer: 2,
        explanation: 'The three-phase fault carries the largest current (and fault MVA) and is the standard design case; fortunately it is also the least common. The single line-to-earth fault is the most frequent but generally less severe.',
      },
      {
        q: 'A 2000 MVA grid connection feeds busbars through a total per-unit reactance of 0.075 on a 100 MVA base. The fault current at 33 kV is closest to:',
        options: [
          '2.3 kA',
          '23.3 kA',
          '233 kA',
          '133 kA',
        ],
        answer: 1,
        explanation: 'Fault level $= 100/0.075 = 1333$ MVA; then $I_{\\mathrm{SC}} = 1333 \\times 10^{6}/(\\sqrt{3} \\times 33\\,000) \\approx 23.3$ kA — Hughes Example 35.8 in two lines.',
      },
      {
        q: 'The term spinning reserve refers to:',
        options: [
          'Energy stored in flywheel farms',
          'Large generators run at full temperature on no load, ready to pick up load quickly',
          'The rotating magnetic field of every induction motor on the system',
          'Pumped-storage water spinning in its turbines',
        ],
        answer: 1,
        explanation: 'A 660 MW set kept hot and turning can be loaded in seconds, covering surges like the 2900 MW kettle demand at a football half-time — a cold set, by contrast, needs hours of slow warm-up before full power.',
      },
    ],
  },

  // ------------------------------------------------------------------ 20.2
  {
    sectionId: 'elec-ch20-s2',
    readingTime: 9,
    intro: 'Power electronics replaces the resistor and the mechanical switch with devices that are either fully on or fully off — dissipating almost nothing in either state. Hughes builds the subject from the thyristor, a four-layer switch that a 50 mA gate pulse turns on but only a current zero turns off, through controlled bridges whose mean output is set by a firing angle, to inverters and the variable-frequency drives that finally set the induction motor free.',
    objectives: [
      'Describe thyristor structure, gate triggering, holding current and turn-off, including the $\\mathrm{d}v/\\mathrm{d}t$ and temperature limitations',
      'Derive and apply the controlled-rectifier output $V_{\\mathrm{dc}} = (V_m/\\pi)(1 + \\cos\\alpha)$',
      'Compare three-phase rectifier networks and their mean outputs',
      'Explain inversion, PWM and the device choice between BJT, MOSFET, IGBT and GTO',
      'Describe inverter-fed and soft-started induction motor drives',
    ],
    concepts: [
      {
        term: 'The thyristor (SCR)',
        kind: 'definition',
        statement: 'A thyristor is four layers of alternating p- and n-type silicon forming three junctions, with terminals **anode, cathode and gate**. With the anode positive it blocks until the forward breakover voltage; a small gate current lowers that breakover voltage dramatically, so a **gate pulse of about 50 mA for about 5 ms can switch devices rated at hundreds of amperes**. Once conducting, the gate loses control: the forward drop is 1–2 V and conduction stops only when the anode current falls below the **holding current** (about 10 mA on a 40 A device).',
        detail: 'On an AC supply, turn-off comes free every cycle at the current zero. On DC it does not: Hughes shows a commutating capacitor arrangement that momentarily opposes the thyristor current to force it below the holding value. A series resistor is always needed to limit current at breakover.',
      },
      {
        term: 'Limitations to thyristor operation',
        kind: 'insight',
        statement: 'Anode-gate capacitance makes a sharply rising anode voltage inject charge $i = C\\,\\mathrm{d}v/\\mathrm{d}t$ that can fire the device spuriously — supply surges and lightning must be diverted by C–R snubber circuits. Leakage current roughly **doubles every 8 °C** of junction temperature rise, so thermal design (and derating) is part of the specification.',
        detail: 'The same sensitivity can be used deliberately — a thyristor can serve as a temperature-operated switch that conducts when a preset temperature is exceeded. Inverter-grade switching that once demanded snubbers for every edge is now met by snubberless devices with cleaner edges.',
      },
      {
        term: 'Controlled rectification: the firing angle',
        kind: 'theorem',
        statement: 'For a single thyristor feeding a resistive load from $v = V_m \\sin\\omega t$ and triggered at angle $\\alpha$, the average current is $$I_{\\mathrm{av}} = \\frac{I_m}{2\\pi} (1 + \\cos\\alpha),$$ falling from $0.318 I_m$ at $\\alpha = 0$ to zero at $\\alpha = \\pi$. Replacing the diodes of a full bridge by thyristors gives the **fully controlled converter**, whose mean output is $$V_{\\mathrm{dc}} = \\frac{V_m}{\\pi} (1 + \\cos\\alpha).$$',
        detail: 'Firing later in each half-cycle leaves the load unpowered for a longer slice of the cycle, so the mean falls smoothly from the bridge value $2V_m/\\pi$ towards zero. With an inductive load the current cannot stop at voltage zero, and the output dips negative — the waveform that motivates free-wheeling diodes.',
      },
      {
        term: 'Three-phase rectifier networks',
        kind: 'method',
        statement: 'A simple three-phase half-wave rectifier (three diodes to a neutral) gives $I_{\\mathrm{dc}} = 3\\sqrt{3} I_m / 2\\pi$; the **three-phase bridge** (six diodes, each pair conducting one-sixth of a cycle) gives $$I_{\\mathrm{dc}} = \\frac{3 I_m}{\\pi},$$ with double the ripple frequency and smaller ripple amplitude, since conduction hugs the peaks of the line-to-line voltages.',
        detail: 'The bridge needs no neutral — diodes D1 and D5 conduct when $v_{RY}$ is most positive, then D1 and D6, and so on through six states per cycle. Replacing the six diodes with thyristors produces the three-phase fully controlled converter that feeds large DC motors — and that recovers the 50 per cent of energy a series starting resistor would simply burn.',
      },
      {
        term: 'Inversion and PWM',
        kind: 'method',
        statement: 'Inversion — DC to AC of chosen frequency — is done by a transistor bridge switched in pairs; with devices 1 and 4 on, the load sees $+V_{\\mathrm{dc}}$, with 2 and 3 on, $-V_{\\mathrm{dc}}$. Output amplitude is controlled either by the input DC level or by **pulse-width modulation**: holding the area under the rectangular wave equal to that of the desired sine while redistributing it into narrower pulses (mark–space ratio).',
        detail: 'Two devices in one leg conducting together would short the DC link — shoot-through — and destroy the transistors. The rectangular output is far from sinusoidal, but motors and fluorescent tubes tolerate it; the ragged edges (ringing from stray L and C) are tamed by RC snubber strings rated by $\\mathrm{d}v/\\mathrm{d}t$.',
      },
      {
        term: 'Switching devices for inverters',
        kind: 'method',
        statement: 'The inverter switch must turn off as well as on. The **BJT** manages about 5 kW at 400/230 V but dissipates about 1 per cent of output; the **power MOSFET** switches easily but dissipates more; the **IGBT** combines a MOS gate with a bipolar output — ratings approaching 1 MW at about 1 kV, switching on in about 0.15 ms and off in about 1 ms; the **GTO** thyristor turns off with a negative gate pulse and serves inverters up to a few megawatts, at the cost of larger gate drives and double the forward volt-drop.',
        detail: 'The IGBT is electrically a p-n-p transistor driven by a MOSFET-like gate. For battery-vehicle and other chopper duties, the plain thyristor remains attractive precisely because turn-off circuitry (a shorting switch across it) is acceptable.',
      },
      {
        term: 'DC-to-DC converters (SMPS)',
        kind: 'method',
        statement: 'The three standard switched-mode configurations — **step-down (buck), step-up (boost) and step-up/step-down (buck–boost)** — each use a MOSFET switch, a diode, an inductor and a capacitor. The controller senses the output and adjusts the **duty cycle** of the switch to hold the output at the desired level; SMPS efficiencies reach about 90 per cent.',
        detail: 'The inductor stores energy while the MOSFET conducts and delivers it through the diode to the capacitor and load when it turns off; the steady-state inductor current is a DC component set by the load plus a triangular ripple that the output capacitor filters. Against linear regulators, the SMPS trades simplicity for efficiency — and for electromagnetic interference from its fast edges, which careful layout minimizes.',
      },
      {
        term: 'Inverter-fed induction motors and soft starting',
        kind: 'method',
        statement: 'Because $n_1 = f/p$, a **controlled converter + controlled inverter** cascade can vary both frequency and voltage to an induction motor, sliding the whole torque-speed family along the speed axis — with voltage boost at low frequency giving series-motor-like starting torque. **Soft starting** instead places back-to-back thyristors in the supply lines: a high firing angle limits the current, which is ramped down as the motor accelerates, the thyristors being bypassed at full speed.',
        detail: 'The inverter-fed drive, with tachogenerator feedback to the control input, gives precision speed control; the soft starter replaces star-delta without its jerk on changeover and holds maximum current through the acceleration period. Its non-sinusoidal currents can interfere with other equipment on the same supply.',
      },
    ],
    examples: [
      {
        title: 'Firing-angle control of a thyristor bridge (Exercises 40, Q1 and Q3)',
        problem: 'A thyristor is connected in series with a 100 Ω resistor across a 230 V, 50 Hz sinusoidal supply. (a) If it is fired at 30° after the voltage zero, find the average current. (b) The arrangement is upgraded to a fully controlled single-phase bridge; find the mean output voltage at firing angles of 25°, 90° and 135°.',
        steps: [
          { label: 'Step 1: Peak quantities', text: 'The peak supply voltage is $V_m = \\sqrt{2} \\times 230 = 325.3$ V, so the peak current into 100 Ω is $I_m = 3.253$ A.' },
          { label: 'Step 2: Half-wave average at 30°', text: '$I_{\\mathrm{av}} = \\frac{3.253}{2\\pi}(1 + \\cos 30^\\circ) = 0.5177 \\times 1.866 = 0.97$ A.' },
          { label: 'Step 3: Bridge at 25°', text: '$V_{\\mathrm{dc}} = \\frac{325.3}{\\pi}(1 + \\cos 25^\\circ) = 103.6 \\times 1.906 = 197.5$ V.' },
          { label: 'Step 4: Bridge at 90°', text: 'With $\\cos 90^\\circ = 0$, $V_{\\mathrm{dc}} = V_m/\\pi = 103.6$ V — exactly half of full conduction ($2V_m/\\pi = 207$ V).' },
          { label: 'Step 5: Bridge at 135°', text: '$V_{\\mathrm{dc}} = 103.6 \\times (1 - 0.707) = 30.3$ V: late firing leaves the load only the tips of the half-cycles.' },
        ],
        result: 'The same 230 V supply delivers 197.5 V, 103.6 V or 30.3 V of mean DC as the gate pulses move from 25° to 135° — continuous, lossless voltage control with no series resistor.',
      },
      {
        title: 'Chopper speed control of a traction motor',
        problem: 'A battery vehicle uses a thyristor chopper to feed its series motor from a 96 V battery. The chopper ON time is 3 ms with an 9 ms OFF time at low speed, equal ON and OFF times at half speed, and 9 ms ON with 3 ms OFF at high speed. Find the average motor voltage in each state.',
        steps: [
          { label: 'Step 1: The duty relation', text: 'The average motor voltage is $V_{\\mathrm{av}} = V_B\\, t_1/(t_1 + t_2)$, with a free-wheeling diode carrying the motor current during the OFF intervals.' },
          { label: 'Step 2: Low speed', text: '$V_{\\mathrm{av}} = 96 \\times 3/12 = 24$ V.' },
          { label: 'Step 3: Mid speed', text: '$V_{\\mathrm{av}} = 96 \\times 6/12 = 48$ V — half the battery.' },
          { label: 'Step 4: High speed', text: '$V_{\\mathrm{av}} = 96 \\times 9/12 = 72$ V, three-quarters of the battery.' },
        ],
        result: 'The ON/OFF time ratio — the duty cycle — is the throttle of a battery vehicle: smooth speed control, with the battery supplying power only during the ON intervals.',
      },
      {
        title: 'Three-phase rectifier into a resistive load (Exercises 40, Q4–Q5)',
        problem: 'A 400 V, 50 Hz three-phase source feeds a 50 Ω resistive load through (a) a simple three-phase rectifier and (b) a three-phase bridge rectifier. Estimate the mean load current and voltage in each case.',
        steps: [
          { label: 'Step 1: Phase and peak voltage', text: 'Phase voltage $= 400/\\sqrt{3} = 231$ V, so $V_m = \\sqrt{2} \\times 231 = 326.6$ V and the peak current is $I_m = 326.6/50 = 6.53$ A.' },
          { label: 'Step 2: Simple three-phase rectifier', text: '$I_{\\mathrm{dc}} = 3\\sqrt{3}\\, I_m/2\\pi = 3 \\times 1.732 \\times 6.53/6.283 = 5.41$ A, giving $V_{\\mathrm{dc}} = 5.41 \\times 50 = 270$ V.' },
          { label: 'Step 3: Three-phase bridge', text: '$I_{\\mathrm{dc}} = 3 I_m/\\pi = 3 \\times 6.53/3.142 = 6.23$ A, so $V_{\\mathrm{dc}} = 6.23 \\times 50 = 312$ V.' },
          { label: 'Step 4: Compare', text: 'The bridge delivers about 15 per cent more mean voltage, with ripple at six times line frequency instead of three and smaller amplitude.' },
        ],
        result: 'The bridge extracts $3V_m/\\pi$ per the line-to-line peaks against $3\\sqrt{3}V_m/2\\pi$ from the half-wave connection — better voltage, less ripple, and no neutral conductor needed.',
      },
    ],
    keyTakeaways: [
      'A thyristor conducts after a gate pulse until its current falls below the small holding current; on AC the current zero turns it off for free, on DC it must be commutated.',
      'Guard against $C\\,\\mathrm{d}v/\\mathrm{d}t$ turn-on with snubbers and against thermal runaway (leakage doubling per 8 °C) with heatsinking.',
      'Phase control sets mean output by firing angle: $V_{\\mathrm{dc}} = (V_m/\\pi)(1 + \\cos\\alpha)$ for the single-phase controlled bridge, from $2V_m/\\pi$ down to zero; three-phase bridges give $3I_m/\\pi$ with six-pulse ripple and turn fully controlled with thyristors.',
      'Inverters synthesize AC of any frequency by pair-switching a bridge; PWM shapes amplitude by redistributing pulse area rather than the DC level.',
      'Device ladder: BJT and MOSFET to a few kW, IGBT to about 1 MW (fast, easy gate), GTO to a few MW (gate turn-off, doubled volt-drop).',
      'Buck, boost and buck–boost SMPS topologies regulate by duty cycle at about 90 per cent efficiency — the DC chapter of the same firing-angle story.',
      'Variable-frequency converter-inverter cascades set induction-motor speed (with low-frequency voltage boost); thyristor soft starters ramp cage motors up without the star-delta jerk.',
    ],
    quiz: [
      {
        q: 'Once a thyristor has been triggered into conduction, the gate signal can be removed because:',
        options: [
          'The gate only conducts during the trigger pulse by design',
          'Regenerative action inside the four-layer structure holds the device on until the anode current falls below the holding current',
          'The anode voltage keeps the junction reverse-biased',
          'The series resistor supplies a maintenance current to the gate',
        ],
        answer: 1,
        explanation: 'The latching is internal to the p-n-p-n structure: after turn-on the gate loses all control, and only driving the current below the holding value (a few milliamps against a 40 A rating) restores blocking.',
      },
      {
        q: 'A single-phase fully controlled bridge is fed from a 230 V r.m.s. supply. With a firing angle of 90°, the mean DC output is approximately:',
        options: [
          '207 V',
          '103 V',
          '30 V',
          '0 V',
        ],
        answer: 1,
        explanation: '$V_{\\mathrm{dc}} = (V_m/\\pi)(1 + \\cos 90^\\circ) = V_m/\\pi = 325.3/3.142 \\approx 103.6$ V — one half of the $2V_m/\\pi$ full-conduction value. Full extinction only arrives at $\\alpha = 180^\\circ$.',
      },
      {
        q: 'The IGBT owes its popularity in inverters to:',
        options: [
          'Being the cheapest device per ampere at every rating',
          'Combining an easy MOSFET-like gate with a low-dissipation bipolar output stage at megawatt-class ratings',
          'Needing no commutation circuit at all on DC supplies',
          'Its ability to block reverse voltage like a diode',
        ],
        answer: 1,
        explanation: 'The BJT wastes about 1 per cent of output power and the MOSFET more; the IGBT — effectively a p-n-p transistor with a MOS input — switches megawatt-class inverters with gate drive no harder than a MOSFET’s, at about 1 kV ratings.',
      },
      {
        q: 'In pulse-width modulation of an inverter output, the output voltage amplitude is varied by:',
        options: [
          'Changing the DC link voltage with a transformer',
          'Redistributing the pulse areas so the rectangular waveform encloses the same area as the desired sine wave',
          'Inserting a series resistor between inverter and load',
          'Changing the switching devices from thyristors to transistors',
        ],
        answer: 1,
        explanation: 'With a fixed DC supply, the mark–space ratio — how much of each switching period the devices are on — sets the effective output; PWM spreads that area into many short pulses whose envelope follows the wanted sinusoid.',
      },
      {
        q: 'Compared with a star-delta starter, the thyristor soft starter offers the cage motor:',
        options: [
          'Higher starting torque at the same current',
          'Jerk-free acceleration with the current held near a chosen maximum, and no switching transient at changeover',
          'Improved power factor during starting',
          'Lower cost in every rating',
        ],
        answer: 1,
        explanation: 'Star-delta causes a snatch when the connections change; the soft starter ramps the firing angle down continuously, keeping acceleration torque available throughout. Its non-sinusoidal currents during the ramp are the price, and the thyristors are bypassed once the motor is up to speed.',
      },
    ],
  },

  // ------------------------------------------------------------------ 20.3
  {
    sectionId: 'elec-ch20-s3',
    readingTime: 9,
    intro: 'Between the grid and a 3.3 V logic rail sits the most consequential design decision in electronics: how to drop, raise or invert a voltage without burning it. The Art of Electronics devotes its longest chapter to exactly this. The linear regulator is quiet, simple and wasteful — every volt of headroom times every ampere becomes heat; the switching converter is 90 per cent efficient but demands respect for inductors, ripple and thermal design. Hughes’s SMPS section and AoE’s chapter 9 meet in the same place: the duty cycle is the output.',
    objectives: [
      'Compute linear-regulator dissipation $P = (V_{\\mathrm{in}} - V_{\\mathrm{out}}) I$ and its efficiency',
      'Define dropout voltage and distinguish standard regulators from LDOs',
      'Design with buck and boost converters using duty-cycle relations',
      'Perform first-pass thermal design with junction-to-ambient thermal resistance',
      'Explain inductor operation, ripple current and output filtering in SMPS, and recognize the failure modes of EMI, capacitor ESR and layout',
    ],
    concepts: [
      {
        term: 'The linear (series-pass) regulator',
        kind: 'definition',
        statement: 'A linear regulator is a transistor in series with the load, controlled by feedback to hold the output constant; it is a deliberately dissipative divider. Its dissipation is $$P_{\\mathrm{diss}} = \\left( V_{\\mathrm{in}} - V_{\\mathrm{out}} \\right) I,$$ and its efficiency is approximately $V_{\\mathrm{out}}/V_{\\mathrm{in}}$ — dropping 10 V to 5 V wastes half the input power no matter how good the circuit.',
        detail: 'The classic three-terminal parts (the 78xx family) need about 2 V of headroom — the **dropout voltage** — to stay in regulation, so a 7805 wants at least 7 V in. Low-dropout (LDO) regulators reduce the dropout to a few hundred millivolts or less, trading off quiescent current, stability with output capacitance, and cost. The prize of the linear approach: quiet output, no switching noise, trivially simple.',
      },
      {
        term: 'Thermal design',
        kind: 'method',
        statement: 'Power dissipated in a package raises the junction temperature through the thermal resistances in its path: $$T_j = T_a + P_{\\mathrm{diss}} \\, \\theta_{JA},$$ where $\\theta_{JA}$ is the junction-to-ambient resistance (heatsink added in series if needed). A part specified to $T_{j\\,\\max}$ must never see the sum exceed it — so the dissipation budget and the heatsink are chosen together, not afterwards.',
        detail: 'A TO-220 package in free air runs at roughly 60–65 °C/W; 2.5 W would raise the junction some 150 °C above ambient, which is impossible for a 125 °C-class part on a warm day. The fixes: reduce the dropout (less headroom), share the dissipation, or bolt the tab to a heatsink that brings the total thermal resistance down to a few tens of °C/W. Every watt planned in the electrical design must be paid for in the mechanical one.',
      },
      {
        term: 'The buck (step-down) converter',
        kind: 'theorem',
        statement: 'In the buck converter the switch connects the inductor to the input for a fraction $D$ of each cycle and to ground (through the diode) for the rest; in steady state the average voltage across the inductor is zero, so $$V_{\\mathrm{out}} = D\\, V_{\\mathrm{in}}.$$',
        detail: 'During the ON interval the inductor current ramps up, storing energy in its field; during OFF, the inductor keeps the current flowing through the diode, delivering energy to the load while its current ramps down. The output capacitor absorbs the triangular ripple so the load sees clean DC. Because the switch is either saturated or off, losses are only conduction and switching-edge losses — hence efficiencies near 90 per cent, exactly the figure Hughes quotes for SMPS.',
      },
      {
        term: 'The boost (step-up) converter',
        kind: 'theorem',
        statement: 'In the boost converter the inductor sits between input and the switch-diode junction. While the switch is on, the inductor current builds with the input across it; when it opens, the inductor voltage adds to the input and pumps the capacitor through the diode. Volt-second balance gives $$V_{\\mathrm{out}} = \\frac{V_{\\mathrm{in}}}{1 - D},$$ which exceeds $V_{\\mathrm{in}}$ for any duty cycle above zero.',
        detail: 'The same three parts — switch, diode, inductor — rearranged produce opposite behavior: the buck divides, the boost multiplies. As $D \\to 1$ the ideal output grows without bound, but real diode drops, losses and control limits keep practical boosts to ratios of a few times. With a controller sensing the output and trimming the duty cycle, both topologies become complete regulated supplies.',
      },
      {
        term: 'Buck-boost and inverting topologies',
        kind: 'method',
        statement: 'Hughes’s third SMPS family — the step-up/step-down or inverting converter — outputs a voltage that can be below or above the input (or of opposite sign): the inductor charges in parallel with the source and discharges into the load, giving $V_{\\mathrm{out}}$ of magnitude $D/(1-D)$ times $V_{\\mathrm{in}}$.',
        detail: 'In Hughes’s diagrams all three configurations share the same component set and the same two current paths — the inductor charging path through the switch, and the discharge path through the diode — only their topology changes. The MOSFET controller senses output voltage and adjusts the duty cycle to hold regulation, whatever the configuration.',
      },
      {
        term: 'Inductor current, ripple and the output capacitor',
        kind: 'insight',
        statement: 'The steady-state inductor current of an SMPS is a DC component set by the load plus a triangular ripple whose amplitude falls with switching frequency and inductance; the output capacitor carries most of that ripple so the load voltage stays smooth. The capacitor’s ESR (equivalent series resistance) often sets the output ripple, not its capacitance alone.',
        detail: 'Hughes shows the superposed AC-on-DC inductor current as the signature waveform of every switching supply. The capacitor must be chosen for ripple current rating and low ESR at the switching frequency; a badly chosen part turns a good design into a hot, noisy one. Layout matters equally: the loop carrying the switched current must be physically small to contain its radiated field.',
      },
      {
        term: 'Practical wisdom: EMI, snubbers and layout',
        kind: 'insight',
        statement: 'Fast switching of significant currents radiates electromagnetic interference — Hughes identifies the rapidly changing voltages across and currents through the inductor as the source. Mitigation: snubber networks (RC strings, rated by the $\\mathrm{d}v/\\mathrm{d}t$ they suppress), minimized loop areas, careful grounding, and where possible snubberless devices with controlled edges.',
        detail: 'The same physics that makes switching efficient (sharp edges) makes it noisy. The engineering trade is set by the application: audio and precision analogue favor linear regulation or post-regulation; power-dense converters accept shielding, filtering and layout discipline in exchange for efficiency and cool running.',
      },
      {
        term: 'Choosing between linear and switching',
        kind: 'method',
        statement: 'Choose **linear** when the drop is small, the current modest and the noise budget tight; choose **switching** when efficiency, heat or the step ratio dominates. A useful hybrid: a switching pre-regulator coarse-converts most of the drop, and a small linear post-regulator cleans the remainder.',
        detail: 'The numbers decide: dropping 10 V to 5 V at 0.5 A in a linear part is a permanent 2.5 W heater; the same job done by a buck at 90 per cent efficiency dissipates a few hundred milliwatts. Conversely, generating a clean 5 V from 6 V for a noise-sensitive front end is the linear regulator doing exactly what it was born for.',
      },
    ],
    examples: [
      {
        title: 'A linear regulator as a heater',
        problem: 'A classic 5 V, 1 A three-terminal regulator (7805-class) is fed from a 9 V DC input. Find the dissipation, the efficiency, and the junction temperature at 30 °C ambient with a junction-to-ambient thermal resistance of 65 °C/W in free air.',
        steps: [
          { label: 'Step 1: Dissipation', text: 'Every ampere flows through the 4 V of headroom: $P_{\\mathrm{diss}} = (9 - 5) \\times 1 = 4$ W.' },
          { label: 'Step 2: Efficiency', text: '$\\eta \\approx V_{\\mathrm{out}}/V_{\\mathrm{in}} = 5/9 = 56$ per cent — almost half the input power heats the room.' },
          { label: 'Step 3: Junction temperature in free air', text: '$T_j = 30 + 4 \\times 65 = 290$ °C — far beyond any silicon limit; the part would shut down or die.' },
          { label: 'Step 4: What the thermal budget allows', text: 'To hold $T_j \\le 100$ °C at 30 °C ambient needs total thermal resistance $\\le (100 - 30)/4 = 17.5$ °C/W: a real heatsink (with the 4–5 °C/W junction-to-case path of the package in series) is mandatory.' },
          { label: 'Step 5: The alternative', text: 'A buck converter doing the same 9-to-5 V job at 90 per cent efficiency dissipates about $0.5$ W — no heatsink needed.' },
        ],
        result: 'Four watts of headroom is a furnace; five watts of output at 90 per cent efficiency is a warm chip. This arithmetic, repeated at every voltage level, is why the world switched.',
      },
      {
        title: 'Designing a buck and a boost from duty-cycle relations',
        problem: 'A 12 V bus must produce a 5 V logic rail; elsewhere a 5 V USB source must produce 12 V. Choose duty cycles for (a) a buck converter and (b) a boost converter, and check the boost switch stress.',
        steps: [
          { label: 'Step 1: Buck duty cycle', text: '$D = V_{\\mathrm{out}}/V_{\\mathrm{in}} = 5/12 = 0.417$ — the switch conducts 42 per cent of each cycle.' },
          { label: 'Step 2: Sanity check', text: 'With $V_{\\mathrm{in}} = 12$ V and $D = 0.417$, $V_{\\mathrm{out}} = 0.417 \\times 12 = 5.0$ V; volt-second balance on the inductor is satisfied by construction.' },
          { label: 'Step 3: Boost duty cycle', text: 'From $V_{\\mathrm{out}} = V_{\\mathrm{in}}/(1 - D)$: $1 - D = 5/12$, so $D = 0.583$.' },
          { label: 'Step 4: Boost switch stress', text: 'The switch must block the output voltage when off — at least 12 V plus diode drop and margin, and carry the peak inductor current, which exceeds the 12 V load current because the input current is larger than the output current in a boost.' },
          { label: 'Step 5: Regulation closes the loop', text: 'In both cases a controller trims the duty cycle against the sensed output, absorbing line and load changes automatically.' },
        ],
        result: 'D = 0.417 for the buck and D = 0.583 for the boost — the duty cycle is the single control variable of every DC-to-DC conversion, exactly as Hughes’s SMPS section describes.',
      },
      {
        title: 'Headroom, dropout and the point of LDOs',
        problem: 'A 3.3 V circuit drawing 200 mA must run from a single lithium-ion cell that sags from 4.2 V to 3.5 V over its discharge. Compare (a) an older 3.3 V regulator with 2 V dropout, and (b) an LDO with 0.15 V dropout, at end-of-charge.',
        steps: [
          { label: 'Step 1: The old regulator at 3.5 V input', text: 'It needs $3.3 + 2 = 5.3$ V to regulate; at 3.5 V in it is deep in dropout and the output simply follows the input minus a saturated switch — the circuit browns out.' },
          { label: 'Step 2: The LDO at 3.5 V input', text: 'The LDO needs only $3.3 + 0.15 = 3.45$ V, so the 3.5 V cell still regulates the rail with 50 mV to spare.' },
          { label: 'Step 3: Dissipation comparison', text: 'At 4.2 V full charge the LDO dissipates $(4.2 - 3.3) \\times 0.2 = 0.18$ W — trivial without a heatsink; the saving over the 5.3 V-fed old part would have been $(5.3 - 3.3) \\times 0.2 = 0.4$ W.' },
          { label: 'Step 4: The design lesson', text: 'Dropout is a system-level spec: battery life, heatsink size and even the topology choice (linear versus buck) hang on how close the input can come to the output.' },
        ],
        result: 'The LDO keeps the 3.3 V rail alive across the whole discharge curve; the standard part dies with half the battery still full. Dissipation falls from a heater to a warmth.',
      },
    ],
    keyTakeaways: [
      'A linear regulator burns $P = (V_{\\mathrm{in}} - V_{\\mathrm{out}}) I$ and runs at roughly $V_{\\mathrm{out}}/V_{\\mathrm{in}}$ efficiency; its output is beautifully quiet.',
      'Dropout voltage — about 2 V for classic parts, well under half a volt for LDOs — decides how far the input may sag before regulation is lost.',
      'Thermal design is part of the electrical design: $T_j = T_a + P \\theta_{JA}$, and the heatsink is chosen with the dissipation, not after it.',
      'The buck converter obeys $V_{\\mathrm{out}} = D V_{\\mathrm{in}}$; the boost obeys $V_{\\mathrm{out}} = V_{\\mathrm{in}}/(1 - D)$; the inverting (buck–boost) gives $|V_{\\mathrm{out}}| = D V_{\\mathrm{in}}/(1 - D)$.',
      'Inductor current is DC plus triangular ripple; the output capacitor and its ESR set what remains on the rail.',
      'Efficiencies near 90 per cent, and heat falling by an order of magnitude, are the everyday payoff of switching — Hughes and AoE quote the same figure.',
      'Switching noise (EMI, ringing) is the tax on efficiency — snubbers and layout pay it down, and a switching pre-regulator followed by a linear post-regulator buys most of the efficiency and most of the quiet at once.',
    ],
    quiz: [
      {
        q: 'A 5 V linear regulator delivers 1 A from a 12 V input. The power dissipated in the regulator is:',
        options: [
          '5 W',
          '12 W',
          '7 W',
          '0.6 W',
        ],
        answer: 2,
        explanation: '$P_{\\mathrm{diss}} = (V_{\\mathrm{in}} - V_{\\mathrm{out}}) I = (12 - 5) \\times 1 = 7$ W — more than the 5 W delivered to the load, which is why the efficiency is only $5/12 \\approx 42$ per cent.',
      },
      {
        q: 'A buck converter steps 18 V down to 6 V. The required duty cycle (switch-ON fraction) is:',
        options: [
          '0.33',
          '0.5',
          '0.67',
          '3.0',
        ],
        answer: 0,
        explanation: '$D = V_{\\mathrm{out}}/V_{\\mathrm{in}} = 6/18 = 0.33$: the switch conducts one third of each cycle, and volt-second balance across the inductor does the rest.',
      },
      {
        q: 'In a boost converter, the output voltage is:',
        options: [
          '$D V_{\\mathrm{in}}$, always less than the input',
          `$V_{\\mathrm{in}}/(1 - D)$, greater than the input for any $D > 0$`,
          'Equal to the input at 50 per cent duty cycle',
          'Set only by the turns ratio of its transformer',
        ],
        answer: 1,
        explanation: 'The inductor charges from the input while the switch is on and dumps its series-aided voltage into the output when it opens; volt-second balance gives $V_{\\mathrm{out}} = V_{\\mathrm{in}}/(1-D)$.',
      },
      {
        q: 'The dropout voltage of a voltage regulator is:',
        options: [
          'The minimum load current for regulation',
          'The minimum input-output differential at which the regulator still holds its specified output',
          'The voltage at which the output capacitor discharges',
          'The ripple voltage on the output at full load',
        ],
        answer: 1,
        explanation: 'Below dropout the pass device saturates and the output simply tracks the input. Classic 7805-class parts need about 2 V; LDOs are designed for a few hundred millivolts or less.',
      },
      {
        q: 'A converter dissipates 4 W and has junction-to-ambient thermal resistance of 17.5 °C/W (heatsink included). At 30 °C ambient the junction sits at approximately:',
        options: [
          '47 °C',
          '70 °C',
          '100 °C',
          '160 °C',
        ],
        answer: 2,
        explanation: '$T_j = T_a + P\\theta_{JA} = 30 + 4 \\times 17.5 = 100$ °C — right at the working limit for many parts, which is why the thermal resistance budget is designed before, not after, the circuit.',
      },
      // PYQ-pattern: GATE 2021 — buck converter duty-cycle output (rephrased, values changed)
      {
        q: 'An ideal buck converter in continuous conduction operates from a 48 V input with duty cycle 0.375 and negligible drops. Its steady output voltage is closest to:',
        options: ['18 V', '30 V', '48 V', '128 V'],
        answer: 0,
        explanation: 'Step 1 — Given: $V_{in} = 48$ V, duty $D = 0.375$, continuous-conduction steady state, ideal switch and diode. Step 2 — Governing balance: volt-seconds on the inductor must cancel over a period, giving $V_{o} = D V_{in}$ for the buck topology. Step 3 — Algebra: $V_{o} = 0.375 \\times 48 = 18.0$ V. Step 4 — Sanity check: buck output stays below input, $D$ near three eighths gives well under half the rail, and the inductor current ripple would centre on $V_{o}$ divided by load resistance. Step 5 — Distractor analysis: 30 V uses $1 - D$, 48 V assumes full conduction, and 128 V inverts the ratio as in a boost stage. Step 6 — Conclude: the output is about 18 V.',
      },
    ],
  },

  // ------------------------------------------------------------------ 20.4
  {
    sectionId: 'elec-ch20-s4',
    readingTime: 11,
    intro: 'Measurement closes the loop: every control system, drive and instrument of this book ultimately rests on something being sensed, compared and acted on. Hughes’s last two chapters assemble the pieces — open and closed loops, damping, transfer functions, the sensor datasheet vocabulary, actuators — and then the instruments themselves: the digital voltmeter that counts its way to an answer, the analogue meter that never died, and the oscilloscope, still the engineer’s most honest witness of what a waveform is actually doing.',
    objectives: [
      'Distinguish open- and closed-loop systems and their feedback signs, identify the four loop components, and compute steady-state error',
      'Classify damping behaviour and define settling time and tolerance limits',
      'Interpret the sensor datasheet vocabulary: sensitivity, resolution, accuracy, hysteresis, drift',
      'Explain the counting digital voltmeter and the analogue deflection instrument',
      'Read amplitude, period and mark-space ratio from an oscilloscope graticule and connect it safely',
    ],
    concepts: [
      {
        term: 'Open-loop and closed-loop systems',
        kind: 'definition',
        statement: 'An **open-loop** system acts on its input with no knowledge of the outcome; a **closed-loop** system feeds back a measurement of the output and corrects the **error** between it and the input. Four blocks make any loop: the **input (reference/set) signal** stating the intention, the **output (feedback/reset) signal** measuring the outcome, the **comparator** forming their difference, and the **controller**, which — like an amplifier — commands energy from a separate supply to act on the error.',
        detail: 'Closed loops come in two signs: **negative feedback** (inverted) stabilizes and is goal-seeking; **positive feedback** reinforces and can run away to a (possibly destructive) limit. Hughes’s robot that lifts 12 items into a box is open-loop — if the conveyor is empty it still completes 12 empty cycles. Adding a grip sensor (displacement measurement) or a weighing cell (force measurement) closes the loop; the quantity controlled is measured by a **sensor**, with displacement, force, pressure, temperature and velocity the five basic physical quantities. Logic controllers sequence discrete states (lifts, traffic lights, dishwashers); linear controllers apply a continuous command.',
      },
      {
        term: 'Damping, settling time and stability',
        kind: 'definition',
        statement: 'A step input excites a transient: **undamped** (repeated overshoot), **underdamped** (some overshoot, fastest arrival), **critically damped** (fastest arrival without overshoot) and **overdamped** (no overshoot, slow). Design specifies the **tolerance limits** (typically 5 or 2 per cent) and the **settling time** — the time after which the output stays within tolerance; an unstable system’s oscillations grow instead.',
        detail: 'Most practical systems are designed underdamped: overshoot is acceptable in a motor-drive but fatal at a cliff edge or a cutting tool. The control engineer trades speed of response against overshoot — and against the risk of instability, where the loop over-corrects its own delayed corrections.',
      },
      {
        term: 'Transfer functions',
        kind: 'method',
        statement: 'The **transfer function** is the ratio of output to input with the time element accounted for — an RC feedback network, for instance, answers a step with the exponential of Chapter 8, and a sinusoid with an attenuated, lagging sinusoid (up to a quarter period behind). For most purposes the block matters less than the function it implements.',
        detail: 'Hughes keeps the mathematics honest: transfer functions assume linearity and no saturation, and ferromagnetic hysteresis must be minimized for the assumption to hold. Full generality needs Laplace transforms; the transient period (from the step to the steady state) is where the control action lives.',
      },
      {
        term: 'Regulators and servomechanisms',
        kind: 'definition',
        statement: 'A **regulator** (speed controller, voltage regulator) requires a finite steady-state error to keep driving; a **servomechanism** (remote position controller, r.p.c.) requires zero error at rest — the potentiometer pair in the position loop gives exactly zero drive when the load arrives at the commanded angle.',
        detail: 'In Hughes’s worked speed regulator an 80 V reference, a tachogenerator of 40 mV per r/min, an amplifier of 20 V per volt and a motor of 100 r/min per volt settle at 1975.3 r/min — an error of 24.7 r/min (1.235 per cent accuracy) that must be offset in the reference to obtain exactly 2000 r/min. The servomechanism needs no such offset; it simply stops when it arrives.',
      },
      {
        term: 'Proportional, integral and derivative action',
        kind: 'method',
        statement: '**Proportional** control commands in direct proportion to the error — low gain is stable but sluggish (overdamped), optimal gain gives critical damping, excess gain oscillates (underdamped). Adding the **derivative** of the error anticipates and backs off early; adding the **integral** magnifies persistent error until it is driven to zero — together, PID control.',
        detail: 'The integral term is the cure for the regulator’s permanent offset; the derivative term is what lets a well-tuned loop settle faster than a human operator could achieve. Over-applied derivative, like excess gain, buys oscillation.',
      },
      {
        term: 'Sensors and actuators',
        kind: 'definition',
        statement: 'A **sensor** measures a physical quantity and converts it into a signal a system can use; its datasheet vocabulary includes **sensitivity** (the slope $\\Delta V/\\Delta T$ of the output characteristic), **linearity**, **range**, **resolution**, **accuracy**, **precision**, **offset**, **drift**, **response time**, **hysteresis** and **noise**. An **actuator** converts an electrical signal into physical change: solenoids, DC motors under H-bridge control, servos, steppers, heaters, loudspeakers and LEDs.',
        detail: 'Whenever you measure something you change it — a thermometer cools the beaker it enters — so sensors are designed to disturb as little as possible (MEMS miniaturization helps here, with lower cost and better performance). Interfacing splits between analogue outputs read through an A/D converter (the reflective IR line-follower sensor) and digital outputs on buses such as I2C addressed by a controller (the acoustic ranging sensor on a car).',
      },
      {
        term: 'Digital and analogue instruments',
        kind: 'method',
        statement: 'A counting **digital voltmeter** ramps a staircase D/A output (10 mV per step) up from zero while a comparator gates clock pulses into BCD counters; when the staircase first exceeds the input, the count is the reading — Hughes’s example reads 23.846 V as 2385 steps with the display 4 mV high. **Analogue instruments** — a current twisting a spring and carrying a pointer across a scale — remain supreme for graded indication but rarely better 1–2 per cent accuracy.',
        detail: 'Adding digits adds cost faster than accuracy: with 10 mV resolution the last digit of a four-digit display already embodies a quantization error of one step in more than 2000. Digital meters also barely disturb the circuit (high input impedance, low circuit disturbance), which is why ammeters and wattmeters are sophisticated variations on the voltmeter theme.',
      },
      {
        term: 'The oscilloscope',
        kind: 'method',
        statement: 'The scope displays the waveform itself: a **Y-amplifier** with switched attenuator (0.1 to 50 V/cm) drives the beam vertically; a **time base** (0.5 s/cm down to microseconds per cm) sweeps it horizontally, synchronized to the signal so the trace stands still; a graticule of 1 cm squares (typically 10 by 8 cm) calibrates both axes. Input impedance is about 1 MΩ shunted by 20–50 pF.',
        detail: 'Readings are direct: peak-to-peak voltage is graticule height times the V/cm setting, period is width times the time-base setting, and the r.m.s. of a sine is the peak-to-peak divided by $2\\sqrt{2}$. The digital storage scope replaces the tube with an A/D converter, memory and DSP — with cursors, automatic measurements and the aliasing caveat that the sampling rate must at least meet the Nyquist criterion.',
      },
      {
        term: 'Connecting instruments: the earthing trap',
        kind: 'insight',
        statement: 'Most scopes earth their chassis, and the coaxial probe lead ties one side of the measurement to that earth — so the earth clip can only ever go to a point that may safely be earthed. Clipping it elsewhere does not just disturb the circuit; it can short components out through the mains earth.',
        detail: 'Hughes’s series R–C experiment shows the classic error: moving the earthed lead from the capacitor to the resistor to see the resistor’s waveform instead shorts out the junction through the instrument earths. The cures: reconfigure the circuit, use both channels differentially, or use an isolation technique — and always check the calibration square wave before trusting the graticule.',
      },
    ],
    examples: [
      {
        title: 'Steady-state error of a speed regulator (Hughes, section 41.6)',
        problem: 'A speed-control regulator has an 80 V input signal, a tachogenerator feedback of 40 mV per r/min, an amplifier of gain 20 V per volt, and a motor-and-load of 100 r/min per volt. Find the steady-state speed, the error, and the accuracy; what input voltage would give exactly 2000 r/min?',
        steps: [
          { label: 'Step 1: The loop equation', text: 'The feedback from speed $N_r$ is $0.04 N_r$ volts, so the amplifier output is $20 (80 - 0.04 N_r)$ and the motor runs at $100 \\times 20 (80 - 0.04 N_r)$ r/min.' },
          { label: 'Step 2: Solve for the steady state', text: '$N_r = 160\\,000 - 80 N_r$, so $81 N_r = 160\\,000$ and $N_r = 1975.3$ r/min.' },
          { label: 'Step 3: The error', text: 'The feedback of 80 V would correspond to 2000 r/min, so the speed error is $2000 - 1975.3 = 24.7$ r/min — an error voltage of 0.988 V.' },
          { label: 'Step 4: Accuracy and offset', text: 'Accuracy $= 24.7/2000 = 1.235$ per cent. Offsetting the reference by the error — an input of 80.988 V — would drive the load at exactly 2000 r/min.' },
        ],
        result: 'A regulator must live with — or be offset against — its 1.235 per cent steady-state error; a servomechanism, whose position loop nulls exactly, would not.',
      },
      {
        title: 'Reading a square wave off the graticule (Example 42.1)',
        problem: 'The trace of a square wave on a CRO stands 4.6 cm tall and each cycle spans 7.0 cm. The amplitude control is set to 0.5 V/cm and the time base to 100 microseconds per centimetre. Determine the peak-to-peak voltage and the frequency.',
        steps: [
          { label: 'Step 1: Peak-to-peak voltage', text: 'Height times sensitivity: $4.6 \\times 0.5 = 2.3$ V peak-to-peak.' },
          { label: 'Step 2: Period', text: 'Width times time base: $7.0 \\times 100 \\times 10^{-6} = 700$ microseconds.' },
          { label: 'Step 3: Frequency', text: '$f = 1/(700 \\times 10^{-6}) = 1430$ Hz.' },
          { label: 'Step 4: Accuracy check', text: 'Graticule readings are good to about the nearest millimetre — roughly 2 per cent — so quote the values to two, not five, significant figures.' },
        ],
        result: '2.3 V peak-to-peak at 1430 Hz: two multiplications, and the waveform (which a DVM would silently average) is visible for what it is.',
      },
      {
        title: 'A pulse train and its mark-to-space ratio (Example 42.2)',
        problem: 'An oscilloscope displays a pulse waveform with amplitude control 0.2 V/cm and time base 10 microseconds per centimetre. The pulse occupies 0.8 cm, the space between pulses 3.2 cm, the pulse height is 4.2 cm, and pulse-start to pulse-start is 4.0 cm. Determine the mark-to-space ratio, the pulse frequency and the pulse voltage.',
        steps: [
          { label: 'Step 1: Mark-to-space ratio', text: '$0.8/3.2 = 0.25$ — the pulse is on for a quarter of the time it is off.' },
          { label: 'Step 2: Pulse period and frequency', text: 'One complete cycle spans 4.0 cm, i.e. $4.0 \\times 10 \\times 10^{-6} = 40$ microseconds, so the pulse frequency is $1/(40 \\times 10^{-6}) = 25$ kHz.' },
          { label: 'Step 3: Pulse voltage', text: 'The trace height 4.2 cm at 0.2 V/cm gives $4.2 \\times 0.2 = 0.84$ V.' },
        ],
        result: 'Mark-to-space 0.25, 25 kHz, 0.84 V — the vocabulary of PWM from the previous section, measured directly off the screen.',
      },
    ],
    keyTakeaways: [
      'Open loops execute blind; closed loops feed the output back, compare it in the comparator, and act on the error with the controller. Negative feedback stabilizes; positive feedback reinforces — thermal runaway is the classic example.',
      'Transient responses are undamped, underdamped, critically damped or overdamped; the design contract is expressed as tolerance limits plus settling time.',
      'A regulator needs a finite steady-state error (1.235 per cent in Hughes’s worked loop); a servomechanism nulls to zero at the commanded position.',
      'PID adds anticipation (D) and offset elimination (I) to proportional action; gain beyond critical damping buys oscillation.',
      'Sensor choice is a datasheet negotiation: sensitivity, linearity, range, resolution, accuracy, hysteresis, drift and response time — on top of not disturbing what you measure.',
      'The counting DVM turns voltage into frequency-by-way-of-a-staircase; analogue deflection instruments survive where graded indication, not accuracy, is wanted. The oscilloscope reads peak-to-peak volts and periods straight off a calibrated graticule.',
    ],
    quiz: [
      {
        q: 'In a closed-loop control system, the error signal is:',
        options: [
          'The difference between the input (reference) signal and the fed-back output measurement',
          'The sum of input and output signals, used to increase gain',
          'Any noise present at the controller output',
          'The transient part of the response only',
        ],
        answer: 0,
        explanation: 'The comparator subtracts the feedback from the reference; that difference drives the controller. In a regulator the error persists at steady state, while a servomechanism drives it to zero.',
      },
      {
        q: 'A tachogenerator of 50 mV per r/min feeds an amplifier of gain 20 V/V driving a motor of 100 r/min per volt. This is a control loop whose:',
        options: [
          'Steady-state speed can be exactly commanded with no error',
          'Loop gain is 100 r/min per volt of error, giving about 1.2 per cent steady-state error',
          'Feedback is positive and the system is unstable',
          'Accuracy is set only by the amplifier supply',
        ],
        answer: 1,
        explanation: 'The loop gain $20 \\times 100 \\times 0.04 = 80$ r/min per r/min of error leaves the output within $1/81$ of the ideal — Hughes’s worked numbers give 1975.3 r/min against a 2000 r/min ideal, 1.235 per cent error.',
      },
      {
        q: 'A sine wave on a scope graticule at 2 V/cm stands 4.8 cm tall, and with the time base at 500 microseconds per centimetre one cycle spans 8.0 cm. The r.m.s. voltage and frequency are:',
        options: [
          '9.6 V r.m.s. and 250 Hz',
          '3.4 V r.m.s. and 250 Hz',
          '4.8 V r.m.s. and 500 Hz',
          '3.4 V r.m.s. and 500 Hz',
        ],
        answer: 1,
        explanation: 'Peak-to-peak voltage $= 4.8 \\times 2 = 9.6$ V; for a sine, r.m.s. $= 9.6/(2\\sqrt{2}) = 3.4$ V. The period is $8.0 \\times 500\\,\\mu\\text{s} = 4.0$ ms, so $f = 250$ Hz.',
      },
      {
        q: 'Why must the earth clip of an oscilloscope probe never be connected to an arbitrary point of a circuit?',
        options: [
          'It would add the instrument noise to that node',
          'The clip carries the full measurement current and would overheat',
          'The scope chassis (and the coax outer) is at mains earth, so the clip can short circuit components through that earth',
          'It would double the measured voltage',
        ],
        answer: 2,
        explanation: 'In Hughes’s R–C experiment, moving the earthed return from the capacitor to the resistor seriously changes — effectively shorts — the circuit through the common instrument earth. Only genuinely earthable nodes may carry the clip.',
      },
      {
        q: 'The integral term of a PID controller exists mainly to:',
        options: [
          'Anticipate rapid changes by acting on the derivative of the error',
          'Magnify long-standing small errors until they are driven to zero, removing steady-state offset',
          'Limit the loop gain to prevent oscillation',
          'Replace the sensor with a model of the plant',
        ],
        answer: 1,
        explanation: 'Proportional control alone leaves a standing error (the regulator offset); the integral accumulates that error and applies ever-increasing effort until it vanishes. The derivative term is the one that anticipates rapid change.',
      },
    ],
  },
]

export const elecCh20Formulas: FormulaEntry[] = [
  {
    chapterId: 'elec-ch20',
    section: '20.1',
    name: 'Ideal heat-engine efficiency',
    formula: 'η = 1 − T₂/T₁',
    note: 'Kelvin temperatures; caps every thermal power station',
    latex: '\\eta = 1 - \\frac{T_2}{T_1}',
  },
  {
    chapterId: 'elec-ch20',
    section: '20.1',
    name: 'Per-unit impedance',
    formula: 'Zpu = Z·SB / VB²',
    note: 'Referred to base MVA and base line voltage',
    latex: 'Z_{\\mathrm{pu}} = \\frac{Z\\, S_B}{V_B^{2}}',
  },
  {
    chapterId: 'elec-ch20',
    section: '20.1',
    name: 'Fault level (short-circuit MVA)',
    formula: 'MVAsc = SB / Zpu',
    note: 'Sets the circuit-breaker rating at that point',
    latex: '\\mathrm{MVA}_{\\mathrm{SC}} = \\frac{S_B}{Z_{\\mathrm{pu}}}',
  },
  {
    chapterId: 'elec-ch20',
    section: '20.2',
    name: 'Fully controlled single-phase bridge',
    formula: 'Vdc = (Vₘ/π)·(1 + cos α)',
    note: 'α = firing angle; α = 0 gives the full 2Vm/π',
    latex: 'V_{\\mathrm{dc}} = \\frac{V_m}{\\pi} \\left( 1 + \\cos\\alpha \\right)',
  },
  {
    chapterId: 'elec-ch20',
    section: '20.2',
    name: 'Chopper average voltage',
    formula: 'Vav = VB · t₁/(t₁ + t₂)',
    note: 'ON time over period — the duty cycle times battery voltage',
    latex: 'V_{\\mathrm{av}} = V_B \\, \\frac{t_1}{t_1 + t_2}',
  },
  {
    chapterId: 'elec-ch20',
    section: '20.3',
    name: 'Buck converter output',
    formula: 'Vout = D · Vin',
    note: 'D = duty cycle of the series switch',
    latex: 'V_{\\mathrm{out}} = D\\, V_{\\mathrm{in}}',
  },
  {
    chapterId: 'elec-ch20',
    section: '20.3',
    name: 'Boost converter output',
    formula: 'Vout = Vin / (1 − D)',
    note: 'Output exceeds input for any duty cycle above zero',
    latex: 'V_{\\mathrm{out}} = \\frac{V_{\\mathrm{in}}}{1 - D}',
  },
  {
    chapterId: 'elec-ch20',
    section: '20.3',
    name: 'Linear-regulator dissipation',
    formula: 'P = (Vin − Vout)·I',
    note: 'Every volt of headroom times every ampere, as heat',
    latex: 'P_{\\mathrm{diss}} = \\left( V_{\\mathrm{in}} - V_{\\mathrm{out}} \\right) I',
  },
  {
    chapterId: 'elec-ch20',
    section: '20.3',
    name: 'Junction temperature',
    formula: 'Tⱼ = Ta + P·θJA',
    note: 'Thermal resistance from junction to ambient',
    latex: 'T_j = T_a + P_{\\mathrm{diss}}\\, \\theta_{JA}',
  },
]
