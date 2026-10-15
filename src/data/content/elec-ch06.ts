import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// THE ELECTRONICS MASTER LIBRARY — Chapter 6
// Inductance and First-Order Transients
// Hughes, "Electrical & Electronic Technology" 12e, ch. 8 (pp. 167–197)
// Nilsson & Riedel, "Electric Circuits" 12e, chs 6–7 (pp. 184–255)
// Master study content. All worked-example numbers are the books' own.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh6Content: SectionContent[] = [
  // ------------------------------------------------------------- 6.1 ------
  {
    sectionId: 'ee-e-circuits-s20',
    readingTime: 11,
    intro: 'Having built magnetic circuits in Chapter 5, we now ask how good a job a coil does at storing magnetic energy \u2014 and the answer is a single number called inductance, measured in henrys. Hughes defines it two equivalent ways (volts per ampere-per-second, and flux-linkages per ampere), Nilsson turns the coil into a circuit element with $v = L\\,di/dt$, and the section closes with two coils on one core: mutual inductance, the dot convention and the series-aiding/opposing arithmetic.',
    objectives: [
      'Define the henry and apply $e = L\\,di/dt$ to compute induced e.m.f.s',
      'Express inductance as flux-linkages per ampere, $L = N\\Phi/I$, and as $L = \\mu_0\\mu_r N^2 A/l$',
      'Explain why the inductance of a ferromagnetic-cored coil varies with current, and define incremental inductance',
      'State the terminal behaviour of an ideal inductor: short circuit for dc, continuous current, stored energy $\\tfrac{1}{2}LI^2$',
      'Determine mutual-inductance voltages with the dot convention and combine coupled coils in series',
    ],
    concepts: [
      {
        term: 'Inductive and non-inductive circuits',
        kind: 'definition',
        statement: 'A circuit in which a change of current is accompanied by a change of flux, and therefore by an induced e.m.f., is **inductive**; a circuit arranged so that its conductor\u2019s magnetising effects cancel is practically **non-inductive**.',
        detail: 'Hughes\u2019s demonstration: a coil $L$ (many turns on a steel core) and a resistor $R$ in parallel, switched across a battery. The resistor current $I_2$ rises almost instantly; the coil current $i_1$ takes an appreciable time, eventually reaching $I_1 = V/(\text{coil resistance})$. On opening the switch, the coil current keeps flowing \u2014 through $R$, in the reverse direction \u2014 decaying slowly; without $R$ there is considerable **arcing at the switch**, which is why suddenly breaking the full excitation of an electromagnet (the field winding of a d.c. machine) is dangerous. To make a non-inductive resistor \u2014 as in resistance boxes \u2014 the wire is **bent back on itself** so the magnetising effect of one conductor is neutralised by its neighbour; the doubled wire can then be coiled without raising the inductance.',
      },
      {
        term: 'The henry and the inductor voltage law',
        kind: 'definition',
        statement: 'A circuit has an inductance of **1 henry (H)** if an e.m.f. of 1 volt is induced when the current varies uniformly at the rate of 1 ampere per second; with passive sign convention the inductor\u2019s terminal voltage is $v = L\\,di/dt$.',
        detail: '$$v = L\\,\\frac{di}{dt}.$$ Joseph Henry (1797\u20131878), the American physicist, discovered electromagnetic induction independently within a year of Faraday\u2019s 1831 discovery in Britain. Two schools of thought exist about the sign: Hughes writes the induced e.m.f. as a positive volt drop $v_L = +L\\,di/dt$, whereas the International Electrotechnical Commission prefers $e = -L\\,di/dt$ so that Lenz\u2019s law is built into the algebra; both give $v = Ri + L\\,di/dt$ for the series circuit. Nilsson\u2019s convention (used throughout the rest of this chapter) is $v = L\\,di/dt$ with the current reference in the direction of the voltage drop.',
      },
      {
        term: 'Inductance as flux-linkages per ampere',
        kind: 'law',
        statement: 'Equating $e = L\\,di/dt$ with Faraday\u2019s $e = N\\,d\\Phi/dt$ for a constant-reluctance circuit gives $L = N\\Phi/I$ henrys \u2014 flux-linkages per ampere.',
        detail: '$$L = \\frac{N\\Phi}{I} \\quad \\text{(henrys)}.$$ The alternative definition of the unit follows immediately: a coil has 1 H of inductance if a current of 1 A through it produces a flux-linkage of 1 weber-turn. Example 8.2 makes the link concrete: 300 turns on a non-magnetic core with $L = 10$ mH carry 5 A, so $\\Phi = LI/N = 10\\times10^{-3} \\times 5/300 = 167\\ \\mu\\text{Wb}$.',
      },
      {
        term: 'Factors determining the inductance of a coil',
        kind: 'law',
        statement: 'For a coil of $N$ turns on a uniform ring of length $l$, area $A$ and permeability $\\mu$, the inductance is $L = \\mu_0\\mu_rAN^{2}/l$ henrys.',
        detail: '$$L = \\frac{\\mu_0 \\mu_r A N^{2}}{l}.$$ Inductance is proportional to the **square of the turns**, proportional to the cross-sectional area, and inversely proportional to the length of the magnetic circuit \u2014 four turns where two grew doubles it fourfold. The $N^2$ also fixes the units of permeability: since $L$ is henrys, $\\mu_0$ must be henrys per metre, matching the $4\\pi\\times10^{-7}$ H/m we met in Chapter 5.',
      },
      {
        term: 'Ferromagnetic cores and incremental inductance',
        kind: 'insight',
        statement: 'Because $\\mu_r$ of a closed ferromagnetic circuit is not constant, the inductance of a steel-cored coil **varies with the current**, rising to a maximum and then falling as the core saturates; over a small current swing the effective value is the **incremental inductance** $L_d = N\\,d\\Phi/di$.',
        detail: '$$L_d = N\\,\\frac{d\\Phi}{di}.$$ Hughes\u2019s Example 8.5: a laminated steel ring with 200 turns whose flux moves between 760 and 800 microwebers as the current swings 5 to 7 A has $L_d = 200\\times(40\\times10^{-6})/2 = 0.004$ H. Two practical fixes follow: a **short radial airgap** (unsaturable) can actually *increase* the effective inductance over a wide current range, and **compressed magnetic dust cores** (ferrite or nickel\u2013iron particles in shellac) keep the flux-linkages-per-ampere nearly constant \u2014 the technique used for loading coils on telephone lines.',
      },
      {
        term: 'The inductor as a circuit element and its energy',
        kind: 'definition',
        statement: 'Ideal inductor terminal behaviour: with constant current the voltage is zero (**short circuit for dc**); the current **cannot change instantaneously** (a finite change in zero time would require an infinite voltage); and the stored magnetic energy is $w = \\tfrac{1}{2}Li^{2}$ joules.',
        detail: 'When someone opens the switch on a real inductive circuit the current initially continues \u2014 across the air gap, a phenomenon called **arcing**, exactly as Hughes\u2019s switch experiment showed. The inverse relation integrates the voltage: $$i(t) = \\frac{1}{L}\\int_{t_0}^{t} v\\,d\\tau + i(t_0),$$ so the current remembers its entire voltage history \u2014 it is the state variable of the inductor, just as charge (voltage) is the state variable of the capacitor of Chapter 4. With $p = vi = Li\\,di/dt$, integrating $Li\\,di$ fills the energy bank: $$w = \\tfrac{1}{2}Li^{2} \\quad \\text{(joules)}.$$ Nilsson\u2019s Example 6.3 traces the bookkeeping with $i = 10te^{-5t}$ in a 100 mH coil: 27.07 mJ goes in up to the current peak at $t = 0.2$ s, and the same 27.07 mJ comes back out afterwards \u2014 a lossless, passive element. Note the dual truth: inductor **voltage** can jump instantaneously even though the current cannot (Example 6.1 has $v$ stepping at $t=0$ while $i$ stays continuous). When the circuit is broken, this energy must go somewhere: heat in a parallel resistor, or the arc at the switch.',
      },
      {
        term: 'Mutual inductance and the dot convention',
        kind: 'definition',
        statement: 'Two coils have a **mutual inductance of 1 henry** if a current in one varying at 1 A/s induces 1 V in the other; the induced voltage is $M\\,di_1/dt$, and with the dot convention: **when the reference current enters the dotted terminal of one coil, the voltage it induces in the other is positive at that coil\u2019s dotted terminal**.',
        detail: 'In circuit terms each coil carries two voltages: the self-induced $L_1\\,di_1/dt$ plus (or minus) the mutually induced $M\\,di_2/dt$. Hughes\u2019s form of the convention: dots at ends 1 and 3 mean the m.m.f.s are **additive** (mutual inductance positive) when *both* currents enter \u2014 or both leave \u2014 the dotted ends, and in opposition when one enters and one leaves. Dots are determined physically by the right-hand rule applied to both windings, or experimentally with a battery, switch and centre-zero voltmeter: an upscale kick when the switch closes marks the voltmeter\u2019s positive terminal as dotted.',
      },
      {
        term: 'Coupling coefficient and energy of coupled coils',
        kind: 'law',
        statement: 'Because energy storage cannot be negative, mutual inductance obeys $M = k\\sqrt{L_1L_2}$ with $0 \\le k \\le 1$.',
        detail: '$$M = k\\sqrt{L_1 L_2}, \\quad 0 \\le k \\le 1,$$ where $k$ is the **coupling coefficient**: $k = 0$ for no common flux, $k \\approx 1$ when essentially all flux links both coils (high-permeance magnetic materials). The total stored energy is $$w = \\tfrac{1}{2}L_1i_1^2 + \\tfrac{1}{2}L_2i_2^2 \\pm Mi_1i_2,$$ plus when both currents enter dotted terminals. For a non-magnetic core the reciprocity $M_{12} = M_{21} = M$ follows because the stored energy cannot depend on the order in which the currents were established \u2014 Hughes shows it by equating the two energies, Nilsson by the equality of permeances.',
      },
      {
        term: 'Coupled coils in series: aiding and opposing',
        kind: 'law',
        statement: 'Two series coils with cumulative (series-aiding) flux have $L_1 = L_A + L_B + 2M$; differentially coupled (series-opposing), $L_2 = L_A + L_B - 2M$; hence',
        detail: '$$M = \\frac{L_1 - L_2}{4}.$$ The $\\pm 2M$ appears because each coil carries its own induced e.m.f. plus a mutual term from the other \u2014 and the mutual terms reinforce in the cumulative connection and cancel partially in the differential one. This one-quarter-of-the-difference relation is the standard laboratory measurement of $M$. (Nilsson\u2019s mesh-current form of the same physics: a coupled pair contributes $L_1\\,di_1/dt \\pm M\\,di_2/dt$ in each loop equation.)',
      },
    ],
    examples: [
      {
        title: 'Flux, e.m.f. and reversal (Hughes Example 8.2)',
        problem: 'A coil of 300 turns, wound on a core of non-magnetic material, has an inductance of 10 mH. Calculate (a) the flux produced by a current of 5 A, and (b) the average value of the e.m.f. induced when a current of 5 A is reversed in 8 ms.',
        steps: [
          { label: 'Step 1: Flux from the linkage definition', text: 'From $L = N\\Phi/I$: $10\\times10^{-3} = 300\\Phi/5$, so $\\Phi = 0.167\\times10^{-3}$ Wb $= 167\\ \\mu$Wb.' },
          { label: 'Step 2: What reversal does to the flux', text: 'The flux falls from 167 microwebers to zero and then grows to 167 microwebers in the reverse direction: the total change is $\\Delta\\Phi = 334\\ \\mu$Wb.' },
          { label: 'Step 3: Average e.m.f. from flux change', text: 'Rate of change of flux $= 334\\times10^{-6}/8\\times10^{-3} = 0.04175$ Wb/s, so $E = N\\,d\\Phi/dt = 300 \\times 0.04175 = 12.5$ V.' },
          { label: 'Step 4: Cross-check via the current', text: 'The current swings from 5 A to \u22125 A in 8 ms: $di/dt = 10/0.008 = 1250$ A/s, and $e = L\\,di/dt = 0.01 \\times 1250 = 12.5$ V \u2014 identical, as the two definitions of $L$ promise.' },
        ],
        result: '$\\Phi = 167\\ \\mu$Wb and the average induced e.m.f. is 12.5 V \u2014 Hughes\u2019s two answers, agreeing by both routes.',
      },
      {
        title: 'Steel core versus air core (Hughes Examples 8.3 and 8.4)',
        problem: 'A ring of mild-steel stampings has a mean circumference of 400 mm, a cross-sectional area of 500 mm squared and 200 turns. Using the $B$\u2013$H$ curve of Chapter 5, find the inductance for a reversal of magnetising current of (a) 2 A and (b) 10 A. Then (c) compute the inductance of the same winding on a non-magnetic core.',
        steps: [
          { label: 'Step 1: Field strength at 2 A', text: '$H = IN/l = 200 \\times 2/0.4 = 1000$ A/m; the mild-steel curve of Fig. 7.3 gives $B = 1.13$ T.' },
          { label: 'Step 2: Inductance at 2 A', text: '$\\Phi = BA = 1.13 \\times 0.0005 = 0.000565$ Wb, so $L = N\\Phi/I = (0.000565 \\times 200)/2 = 56.6$ mH.' },
          { label: 'Step 3: Field strength at 10 A', text: '$H = 200 \\times 10/0.4 = 5000$ A/m; the curve is saturating and gives only $B = 1.63$ T.' },
          { label: 'Step 4: Inductance at 10 A', text: '$\\Phi = 1.63 \\times 0.0005 = 0.000815$ Wb, so $L = (0.000815 \\times 200)/10 = 16.3$ mH \u2014 five times the current, less than a third of the inductance.' },
          { label: 'Step 5: The air-core comparison', text: 'With $\\mu_r = 1$: $L = \\mu_0N^2A/l = 4\\pi\\times10^{-7} \\times 200^{2} \\times 0.0005/0.4 = 62.8\\ \\mu$H \u2014 three orders of magnitude below the steel-core value at modest current.' },
        ],
        result: 'Steel core: 56.6 mH at 2 A, 16.3 mH at 10 A; air core: 62.8 microhenrys \u2014 the comparison that shows why a large inductance demands a ferromagnetic core, and why its value must be quoted with the current.',
      },
      {
        title: 'Series-aiding versus series-opposing (Hughes Example 8.13)',
        problem: 'When two coils are connected in series, their effective inductance is found to be 10.0 H. When the connections to one coil are reversed, the effective inductance is 6.0 H. If the coefficient of coupling is 0.6, calculate the self-inductance of each coil and the mutual inductance.',
        steps: [
          { label: 'Step 1: Add and subtract the measurements', text: 'Cumulative: $L_A + L_B + 2M = 10.0$ H; differential: $L_A + L_B - 2M = 6.0$ H. Adding: $L_A + L_B = 8.0$ H; subtracting: $2M = 4.0$ H so $M = 1.0$ H.' },
          { label: 'Step 2: Bring in the coupling', text: 'With $k = 0.6$: $2k\\sqrt{L_AL_B} = 2M = 4.0$, so $\\sqrt{L_AL_B} = 4.0/1.2 = 3.333$ and $L_AL_B = 11.11$ H squared. Hughes\u2019s quadratic form: $0 = L_B^2 - 8L_B + 2.78$.' },
          { label: 'Step 3: Solve the quadratic', text: '$L_B = [8 \\pm \\sqrt{64 - 11.12}]/2 = 7.63$ H or 0.37 H; correspondingly $L_A = 0.37$ H or 7.63 H.' },
          { label: 'Step 4: Verify with the original data', text: 'Check: $L_A + L_B + 2k\\sqrt{L_AL_B} = 8.0 + 2(0.6)(3.333) = 8.0 + 4.0 = 10.0$ H, and the differential connection gives $8.0 - 4.0 = 6.0$ H. Both measurements are reproduced exactly.' },
        ],
        result: 'The coils are 7.63 H and 0.37 H with $M = 1.0$ H \u2014 Hughes\u2019s figures, obtained from nothing but the two series measurements and $k$.',
      },
    ],
    keyTakeaways: [
      'One henry: 1 V induced per ampere-per-second of current change; $v = L\\,di/dt$ with the passive sign convention.',
      'Equivalently $L = N\\Phi/I$: flux-linkages per ampere, one weber-turn per ampere.',
      'For a uniform core $L = \\mu_0\\mu_r N^2A/l$ \u2014 turns-squared, area, inverse length.',
      'Ferromagnetic cores multiply $L$ enormously (56.6 mH versus 62.8 microhenrys in Hughes\u2019s paired examples) but make it current-dependent; incremental inductance $L_d = N\\,d\\Phi/di$ covers small swings, and an airgap or dust core linearises the coil.',
      'An ideal inductor is a dc short with a continuous current and continuous energy bookkeeping $w = \\tfrac{1}{2}Li^2$; its voltage can jump, its current cannot \u2014 hence switch arcing.',
      'Mutual inductance $M$ (henrys) couples coils through shared flux; the dot convention fixes the sign of the $M\\,di/dt$ terms, and reciprocity plus energy give $M_{12} = M_{21} = M$, $M = k\\sqrt{L_1L_2}$ with $0 \\le k \\le 1$, and $w = \\tfrac{1}{2}L_1i_1^2 + \\tfrac{1}{2}L_2i_2^2 \\pm Mi_1i_2$.',
      'Series coils: $L = L_A + L_B \\pm 2M$, so measuring both connections yields $M = (L_\\text{aiding} - L_\\text{opposing})/4$.',
    ],
    quiz: [
      {
        q: 'A 0.5 H coil\u2019s current falls from 5 A to 2 A in 0.05 s (Hughes Example 8.1). The mean induced e.m.f. is:',
        options: ['+30 V', '\u221230 V', '\u221260 V', '+3 V'],
        answer: 1,
        explanation: 'Average $di/dt = (2-5)/0.05 = -60$ A/s, so $e = 0.5 \\times (-60) = -30$ V \u2014 negative because it acts against the decrease, in the direction of the original current.',
      },
      {
        q: 'Doubling only the number of turns on an air-cored ring (same geometry) multiplies its inductance by:',
        options: ['2', 'The square root of 2', '4', '1/2'],
        answer: 2,
        explanation: '$L = \\mu_0N^2A/l$ is proportional to $N^2$, so twice the turns gives four times the inductance \u2014 doubling turns \u2018double-counts\u2019, once as extra flux and once as extra linkage.',
      },
      {
        q: 'A coil wound on a closed ferromagnetic ring carries a slowly increasing current. As the core passes from the linear region towards saturation, the inductance:',
        options: ['Rises to a maximum and then falls', 'Remains constant', 'Increases steadily', 'Falls linearly to zero'],
        answer: 0,
        explanation: 'Because $\\mu_r$ itself rises then falls with $H$, Hughes\u2019s Fig. 8.6 shows the steel-cored coil\u2019s inductance peaking and declining as the current grows \u2014 exactly the 56.6 mH to 16.3 mH drop across 2 A to 10 A in Example 8.3.',
      },
      {
        q: 'Two identical coils share a core with $k = 1$ (no leakage). If $L_1 = 0.283$ H and $L_2 = 0.552$ H (Hughes Example 8.12\u2019s ring), the mutual inductance is about:',
        options: ['0.395 H', '0.835 H', '0.418 H', '0.156 H'],
        answer: 0,
        explanation: '$M = k\\sqrt{L_1L_2} = \\sqrt{0.283 \\times 0.552} = 0.395$ H. Hughes\u2019s ring: mean radius 170 mm, 800 mm squared cross-section, $\\mu_r = 1200$, reluctance $8.85\\times10^{5}$ A/Wb, giving exactly these numbers from $L = N^2/S$ and $M = N_1N_2/S$.',
      },
      {
        q: 'Nilsson\u2019s coupled coils have $M = 40$ mH, $L_1 = 25$ mH, $L_2 = 100$ mH (Example 6.9). The coupling coefficient is:',
        options: ['0.4', '0.5', '1.6', '0.8'],
        answer: 3,
        explanation: '$k = M/\\sqrt{L_1L_2} = 0.04/\\sqrt{0.025 \\times 0.1} = 0.04/0.05 = 0.8$. The same example shows that with $k$ raised to 1 ($M = 50$ mH), a current of $i_2 = -5$ A against $i_1 = 10$ A leaves zero net stored energy.',
      },
      // PYQ-pattern: GATE 2015 — series aiding and opposing inductance (rephrased, values changed)
      {
        q: 'Two coupled coils have self-inductances 0.40 H and 0.60 H with mutual inductance 0.30 H. Connected in series aiding, the equivalent inductance is:',
        options: ['0.40 H', '0.70 H', '1.00 H', '1.60 H'],
        answer: 3,
        explanation: 'Step 1 — Given: $L_{1} = 0.40$ H, $L_{2} = 0.60$ H, $M = 0.30$ H, fluxes aiding. Step 2 — Governing relation: series aiding adds both mutual terms so $L_{aid} = L_{1} + L_{2} + 2M$, while opposing subtracts them. Step 3 — Algebra: $L_{aid} = 0.40 + 0.60 + 2 \\times 0.30 = 1.60$ H; the opposing value would be $0.40$ H. Step 4 — Sanity check: aiding must exceed the plain sum $1.00$ H, opposing must fall below it, and $M \\le \\sqrt{L_{1}L_{2}} \\approx 0.49$ H confirms tight but legal coupling. Step 5 — Distractor analysis: 1.00 H omits coupling, 0.70 H adds only one $M$, and 0.40 H is the opposing result. Step 6 — Conclude: aiding gives 1.60 H.',
      },
    ],
  },

  // ------------------------------------------------------------- 6.2 ------
  {
    sectionId: 'ee-e-circuits-s21',
    readingTime: 10,
    intro: 'Switch a resistive circuit and the current answers instantly; switch an inductive one and it answers on its own clock. The clock is the time constant $T = L/R$, and the answer is always a rising or falling exponential \u2014 the Helmholtz equation. Hughes derives growth and decay separately, then runs two-position switch examples in which the second transient starts before the first has finished; Nilsson\u2019s natural-response treatment adds the energy accounting.',
    objectives: [
      'Set up and solve the growth equation $V = Ri + L\\,di/dt$ to obtain $i = I(1 - e^{-t/T})$',
      'Define the time constant $T = L/R$ and interpret its 63.2 per cent and initial-slope meanings',
      'Derive the decay form $i = Ie^{-t/T}$ for a short-circuited LR circuit',
      'Analyse transients in LR networks, including switching faster than five time constants',
      'Compute energy dissipated during natural response from $w = \\tfrac{1}{2}LI_0^2$',
    ],
    concepts: [
      {
        term: 'Growth of current: the graphical picture',
        kind: 'method',
        statement: 'In the growth curve $i(t)$, the tangent drawn at any point reaches the final current $I$ in exactly $T = L/R$ seconds; the initial-tangent construction builds the whole curve step by step.',
        detail: 'At any instant during growth, $V = Ri + L\\,di/dt$ and $V = RI$, so the rate of rise is $(I-i)R/L$: if the current kept growing at its present rate it would reach $I$ in $L/R$ seconds. Hughes\u2019s graphical construction (Example 8.6): draw the final-current line, mark off $MN = T$, join the origin to $N$; from any point on that line repeat, and the envelope of the construction lines is the growth curve.',
      },
      {
        term: 'The time constant',
        kind: 'definition',
        statement: 'The **time constant** of an LR circuit is $T = L/R$ seconds.',
        detail: '$$T = \\frac{L}{R}\\ \\text{(seconds)}.$$ The greater the inductance and the smaller the resistance, the longer the current takes to settle. Two readings of $T$: after one time constant the current has reached $1 - e^{-1} = 0.632$ of its final value (63.2 per cent); and $T$ is the time the *initial* rate of rise $V/L$ would need to reach $I = V/R$ \u2014 since $I/T = V/L$. The decay of a released LR circuit obeys the same $T$, its initial rate of fall being $-I/T = -RI/L$.',
      },
      {
        term: 'Analysis of growth: the Helmholtz equation',
        kind: 'law',
        statement: 'Integrating $V = Ri + L\\,di/dt$ from zero initial current gives the **Helmholtz equation** $i = I(1 - e^{-t/T})$.',
        detail: '$$i = I\\left(1 - e^{-Rt/L}\\right) = I\\left(1 - e^{-t/T}\\right),$$ the **Helmholtz equation**. The derivation separates variables: $R\\,dt/L = di/(I-i)$, integrates to $Rt/L = -\\ln(I-i) + \\ln I$, and exponentiates. Immediately after switch-on, $i = 0$ and the full supply voltage appears across $L$ \u2014 the initial rate of change of current is simply $V/L$, with the resistance as yet uninvolved.',
      },
      {
        term: 'Analysis of decay',
        kind: 'law',
        statement: 'Short-circuiting an LR circuit that carries steady current $I$ (the external voltage now zero) gives $i = Ie^{-t/T}$.',
        detail: '$$i = Ie^{-Rt/L} = Ie^{-t/T}.$$ With $0 = Ri + L\\,di/dt$ the induced e.m.f. now acts *in the direction of the current*, opposing its decrease \u2014 Hughes\u2019s Figure 8.12 arrangement, where a resistor $r$ protects the battery and the switch S shorts the coil onto itself. After one time constant the current has fallen to 36.8 per cent of $I$; after about five, it is within 1 per cent of zero.',
      },
      {
        term: 'Natural response of an RL circuit (Nilsson)',
        kind: 'law',
        statement: 'Released from initial current $I_0$ through resistance $R$, the inductor current is $i(t) = I_0e^{-t/\\tau}$ with $\\tau = L/R$.',
        detail: '$$i(t) = I_0e^{-t/\\tau}, \\quad \\tau = L/R,$$ derived from $L\\,di/dt + Ri = 0$. The continuity of inductor current, $i(0^-) = i(0^+) = I_0$, is what fixes the initial condition \u2014 analyse the circuit *before* switching with the inductor as a short circuit, and everything after follows. Nilsson\u2019s four-step method: find $I_0$ from the pre-switch circuit; find $R$ seen by the inductor after switching; write $i(t)$; then derive any other current or voltage by resistive circuit analysis.',
      },
      {
        term: 'Energy accounting in the natural response',
        kind: 'insight',
        statement: 'All the energy initially stored in the inductor, $\\tfrac{1}{2}LI_0^2$, is eventually dissipated as heat in the resistances of the decay circuit \u2014 distributed between them in a way computable by integrating $i^2R$.',
        detail: 'Nilsson\u2019s Example 7.1: a 2 H inductor released at 20 A into a network whose equivalent resistance is 10 ohms dissipates 256 J of its 400 J in one particular 10-ohm branch \u2014 exactly 64 per cent \u2014 the rest going to the other resistors. The exponential integral $\\int_0^\\infty I_0^2e^{-2t/\\tau}R\\,dt = \\tfrac{1}{2}LI_0^2$ closed-forms the bookkeeping.',
      },
      {
        term: 'Transients in LR networks',
        kind: 'method',
        statement: 'When switching actions follow one another, compare their spacing with **five time constants**: if the interval between switchings exceeds $5T$ the first transient may be considered finished; if not, the second transient starts from the still-moving current.',
        detail: 'Hughes\u2019s Example 8.8 vs 8.9: the same circuit switched to its decay position at $t = 100$ ms (ten time constants of the growth phase, current fully settled at 1 A) behaves completely differently from the switch moved at $t = 10$ ms (one time constant in, current only 0.632 A). Pulse-driven networks \u2014 digital drivers, chopper circuits \u2014 live in precisely this regime.',
      },
      {
        term: 'Changing the circuit mid-transient',
        kind: 'insight',
        statement: 'Moving a switch mid-transient changes the resistance the inductor sees, so the time constant changes and a **new exponential starts from the current at that instant** \u2014 the current itself is continuous.',
        detail: 'Hughes\u2019s Example 8.10 wraps the inductor\u2019s supply network in a Norton equivalent (resistance 7.5 ohms, current 0.33 A) before applying the growth formula, then on the second switch position recomputes $T$ from the new resistance. The recipe \u2014 Th\u00e9venise what the inductor sees, per interval \u2014 is exactly the general method that Section 6.3 formalises.',
      },
    ],
    examples: [
      {
        title: 'Growth numbers for a switched coil (Hughes Examples 8.6 and 8.7)',
        problem: 'A coil having a resistance of 4 ohms and a constant inductance of 2 H is switched across a 20 V d.c. supply. Determine (a) the time constant, (b) the final value of the current, and (c) the value of the current 1.0 s after the switch is closed.',
        steps: [
          { label: 'Step 1: Time constant', text: '$T = L/R = 2/4 = 0.5$ s \u2014 the growth curve\u2019s tangent construction uses exactly this interval, marked off repeatedly from the origin in Hughes\u2019s Fig. 8.10.' },
          { label: 'Step 2: Final current', text: 'The inductor is a short circuit once steady: $I = V/R = 20/4 = 5.0$ A.' },
          { label: 'Step 3: Current at 1.0 s', text: 'Two time constants have passed: $i = I(1 - e^{-t/T}) = 5(1 - e^{-2})$.' },
          { label: 'Step 4: Evaluate', text: 'With $e^{-2} = 0.1353$, $i = 5(0.8647) = 4.32$ A \u2014 86.5 per cent of the way to 5 A, with 1.35 per cent of a further gap closing every fraction of a time constant.' },
        ],
        result: '$T = 0.5$ s, $I = 5$ A, $i(1\\,\\text{s}) = 4.32$ A \u2014 Hughes\u2019s figures, with 63.2 per cent (3.16 A) reached at $t = 0.5$ s.',
      },
      {
        title: 'Two switchings, two time constants (Hughes Examples 8.8 and 8.9)',
        problem: 'A 10 V supply feeds a 10-ohm resistor $r$ and a 0.1 H inductor $L$ through a two-position switch: in position 1 the source drives the inductor through $r$ alone, and position 2 reconnects the inductor into a loop with a 15-ohm resistor $R$ so that the decay path is $r$ in series with $R$ (Hughes\u2019s Fig. 8.14 network). Find the inductor-current expressions and the voltage across $R$ if the switch moves to position 2 (a) at $t = 100$ ms and (b) at $t = 10$ ms.',
        steps: [
          { label: 'Step 1: Growth phase (both cases)', text: 'Position 1: $T_1 = L/R_1 = 0.1/10 = 10$ ms and the final current is $10/10 = 1$ A, so $i_1 = 1(1 - e^{-t/10\\times10^{-3}})$ A.' },
          { label: 'Step 2: Switching at 100 ms', text: 'Ten time constants have elapsed \u2014 the transient is long finished and $i = 1$ A when the switch moves. Position 2: $T_2 = L/(R_1 + R_2) = 0.1/25 = 4$ ms, so $i_2 = e^{-t/4\\times10^{-3}}$ A.' },
          { label: 'Step 3: Voltage across R in the decay', text: 'The current keeps flowing the same way through $R$, so the volt drop is negative relative to the marked arrow: $v_R = -15e^{-t/4\\times10^{-3}}$ V \u2014 a 15 V kick that decays.' },
          { label: 'Step 4: Switching at 10 ms instead', text: 'Now the switch moves after one time constant: $i = 1 - e^{-1} = 0.632$ A. The decay starts from there: $i_2 = 0.632e^{-t/4\\times10^{-3}}$ A \u2014 a visibly smaller, equally fast transient, because the inductor\u2019s current is continuous even when the switch is not.' },
        ],
        result: 'Early switch: $i_2 = 0.632\\,e^{-t/4\\ \\text{ms}}$ A; late switch: $i_2 = e^{-t/4\\ \\text{ms}}$ A \u2014 identical decay law, different starting height, exactly Hughes\u2019s Example 8.9 versus 8.8.',
      },
      {
        title: 'Natural response with an energy audit (Nilsson Example 7.1)',
        problem: 'In Nilsson\u2019s Fig. 7.6 circuit the switch opens at $t = 0$ after being closed a long time. The 2 H inductor carries 20 A at switching, and for $t \\ge 0$ it discharges through an equivalent resistance of 10 ohms (a 2-ohm resistor in series with 40 ohms in parallel with 10 ohms). Find $i_L(t)$, the current and voltage in the 40-ohm branch, and the percentage of the stored energy dissipated in the 10-ohm resistor.',
        steps: [
          { label: 'Step 1: Initial current', text: 'Before switching the inductor shorts the whole network, so all 20 A of the source current flows in the inductor: $I_0 = 20$ A, continuous across $t = 0$.' },
          { label: 'Step 2: Time constant after switching', text: 'The opened switch removes the source branch: $R_\\text{eq} = 2 + (40 \\parallel 10) = 2 + 8 = 10$ ohms, so $\\tau = L/R_\\text{eq} = 2/10 = 0.2$ s.' },
          { label: 'Step 3: Write the natural response', text: '$i_L(t) = I_0e^{-t/\\tau} = 20e^{-5t}$ A for $t \\ge 0$. By current division the 40-ohm branch carries $i_o = -i_L\\,(10/50) = -4e^{-5t}$ A, and $v_o = 40i_o = -160e^{-5t}$ V.' },
          { label: 'Step 4: Audit the energy', text: 'Power in the 10-ohm resistor: $p_{10} = v_o^2/10 = 2560e^{-10t}$ W; energy $= \\int_0^\\infty 2560e^{-10t}dt = 256$ J. The inductor banked $\\tfrac{1}{2}LI_0^2 = \\tfrac{1}{2}(2)(20)^2 = 400$ J.' },
          { label: 'Step 5: The percentage', text: '256/400 of the stored energy \u2014 64 per cent \u2014 lands in the 10-ohm resistor, the remainder in the other two resistances.' },
        ],
        result: '$i_L = 20e^{-5t}$ A, $v_o = -160e^{-5t}$ V, and 64 per cent of the 400 J is dissipated in the 10-ohm resistor \u2014 Nilsson\u2019s exact numbers.',
      },
    ],
    keyTakeaways: [
      'Growth: $i = I(1 - e^{-t/T})$ with $I = V/R$; decay: $i = Ie^{-t/T}$ \u2014 both are the Helmholtz exponential.',
      'The time constant $T = L/R$ is simultaneously the 63.2 per cent time and the initial-slope intercept, and it governs growth and decay alike.',
      'At the instant of switch-on the current is zero and its rate of rise is $V/L$; at switch-off into a short, its rate of fall is $RI/L$.',
      'The inductor current is the continuous state variable: $i(0^-) = i(0^+)$, no matter how the resistances around it jump.',
      'Five time constants is the practical end of a transient; switch again sooner and the new exponential starts from the current then flowing.',
      'Moving a switch mid-transient changes $R$, hence $T$ \u2014 analyse each interval with its own Th\u00e9venin resistance seen from the inductor.',
      'All stored energy $\\tfrac{1}{2}LI_0^2$ is eventually dissipated in the resistances of the discharge circuit; integration of $i^2R$ allocates it.',
    ],
    quiz: [
      {
        q: 'An LR circuit has $L = 0.1$ H and $R = 10$ ohms. Its time constant is:',
        options: ['1 s', '0.1 s', '0.01 s', '1 ms'],
        answer: 2,
        explanation: '$T = L/R = 0.1/10 = 0.01$ s = 10 ms \u2014 the growth phase of Hughes\u2019s Examples 8.8 and 8.9. Adding the 15-ohm resistor in the decay path shortens it to 4 ms.',
      },
      {
        q: 'One time constant after a step of voltage is applied to a series RL circuit (zero initial current), the current has reached approximately:',
        options: ['36.8 per cent of its final value', '63.2 per cent', '50 per cent', '86.5 per cent'],
        answer: 1,
        explanation: '$i(T) = I(1 - e^{-1}) = 0.632I$. Two time constants give 86.5 per cent; the 36.8 per cent figure is what *remains* during decay.',
      },
      {
        q: 'In Hughes\u2019s Example 8.9 the switch moves to the decay position after exactly one growth time constant. The decay starts from:',
        options: ['Zero current', '0.368 A', '0.632 A', '1.0 A'],
        answer: 2,
        explanation: 'After one time constant the growth has reached $1 - e^{-1} = 0.632$ of the 1 A final value. The decay exponential then starts from 0.632 A \u2014 continuity of inductor current in action.',
      },
      {
        q: 'A 2 H inductor discharges from 20 A through a 10-ohm equivalent resistance. The total energy dissipated in the resistances is:',
        options: ['200 J', '256 J', '400 J', '800 J'],
        answer: 2,
        explanation: 'The whole bank: $\\tfrac{1}{2}LI_0^2 = \\tfrac{1}{2}(2)(400) = 400$ J. Of this, 256 J (64 per cent) lands in the 10-ohm resistor of Nilsson\u2019s Example 7.1.',
      },
      {
        q: 'The current in an LR network is still visibly changing when the switch is thrown to a new position. What carries across the switching instant?',
        options: ['The time constant', 'The voltage across the inductor', 'Both current and voltage', 'The inductor current only'],
        answer: 3,
        explanation: 'Only the inductor current is guaranteed continuous ($i(0^-) = i(0^+)$). The time constant changes with the new resistance seen by the inductor, and the inductor voltage can jump to whatever the new circuit demands.',
      },
      // PYQ-pattern: ISRO 2019 — RL growth at one time constant (rephrased, values changed)
      {
        q: 'A coil of 2.0 H with 10 Ω series resistance connects across a 50 V supply, starting from zero current. The current 0.20 s after switching is closest to:',
        options: ['1.58 A', '3.16 A', '4.32 A', '5.00 A'],
        answer: 1,
        explanation: 'Step 1 — Given: $L = 2.0$ H, $R = 10$ Ω, $V = 50$ V, $i(0) = 0$, query at $t = 0.20$ s. Step 2 — Governing law: growth follows $i = \\frac{V}{R}(1 - e^{\\frac{-Rt}{L}})$ with $\\tau = \\frac{L}{R}$. Step 3 — Algebra: $\\tau = \\frac{2.0}{10} = 0.20$ s so the query sits at one time constant; steady value $\\frac{50}{10} = 5.0$ A; $i = 5.0 \\times (1 - e^{-1}) \\approx 5.0 \\times 0.6321 = 3.16$ A. Step 4 — Sanity check: one $\\tau$ always lands at 63 per cent of final, current starts at zero with slope $\\frac{V}{L} = 25$ A per s, and units are consistent. Step 5 — Distractor analysis: 5.00 A is the infinite-time value, 4.32 A is the two-$\\tau$ level, and 1.58 A halves the correct fraction. Step 6 — Conclude: about 3.16 A flows.',
      },
    ],
  },

  // ------------------------------------------------------------- 6.3 ------
  {
    sectionId: 'ee-e-circuits-s22',
    readingTime: 10,
    intro: 'Growth, decay, RL, RC \u2014 four derivations, one equation. Nilsson\u2019s masterstroke in Section 7.4 is to notice that every first-order circuit obeys $dx/dt + x/\\tau = K$, so a single recipe \u2014 initial value, final value, time constant \u2014 solves them all. This section derives the general solution, runs it on both an RL and an RC step, and applies it to the chapter\u2019s most human example: the artificial pacemaker, whose RC charging curve sets the heartbeat.',
    objectives: [
      'Derive the RL step response $i(t) = I_f + (I_0 - I_f)e^{-t/\\tau}$ from the differential equation',
      'Explain why the inductor voltage jumps to $V_s - I_0R$ at switching and decays exponentially',
      'State the dual RC step response and its time constant $\\tau = RC$',
      'Apply the general five-step method $x(t) = X_f + (X_0 - X_f)e^{-t/\\tau}$ to any first-order circuit',
      'Model the artificial pacemaker\u2019s charging cycle and heart rate',
    ],
    concepts: [
      {
        term: 'Step response of an RL circuit',
        kind: 'law',
        statement: 'Closing a switch that applies a constant $V_s$ to a series RL circuit carrying initial current $I_0$ gives $i(t) = I_f + (I_0 - I_f)e^{-t/\\tau}$ with $I_f = V_s/R$.',
        detail: '$$i(t) = \\frac{V_s}{R} + \\left(I_0 - \\frac{V_s}{R}\\right)e^{-(R/L)t}.$$ The derivation is the growth analysis of Section 6.2 written backwards from a nonzero start: separate variables in $di/(i - V_s/R) = -(R/L)\\,dt$ and integrate from $I_0$. Every such response slides exponentially from its initial value to its final value $I_f$ \u2014 nothing else is possible for a first-order circuit driven by a constant.',
      },
      {
        term: 'The general first-order solution',
        kind: 'law',
        statement: 'If $x(t)$ is the quantity that must be continuous \u2014 inductor current in RL circuits, capacitor voltage in RC circuits \u2014 then every natural or step response has the form',
        detail: '$$x(t) = X_f + (X_0 - X_f)e^{-t/\\tau}, \\quad t \\ge 0,$$ where $X_0$ is the initial value, $X_f$ the final value ($X_f = 0$ for natural responses) and $\\tau$ the time constant. The four circuit analyses (RL natural, RL step, RC natural, RC step) all solve $dx/dt + x/\\tau = K$; only the names change. For RL: $\\tau = L/R$; for RC: $\\tau = RC$.',
      },
      {
        term: 'The five-step method',
        kind: 'method',
        statement: 'Nilsson\u2019s Analysis Method: (1) **identify** the continuous variable $x(t)$; (2) find $X_0$ from the circuit for $t < 0$; (3) find $\\tau$ from the resistance the storage element sees for $t \\ge 0$; (4) find $X_f$ as $t \\to \\infty$; (5) write $x(t) = X_f + (X_0 - X_f)e^{-t/\\tau}$ and derive anything else from it.',
        detail: 'The pre-switch and steady-state circuits are pure resistive analysis: the inductor is a **short circuit** ($di/dt = 0$ so $v = 0$) and the capacitor an **open circuit** ($dv/dt = 0$ so $i = 0$) whenever currents and voltages have stopped changing. Step 3\u2019s resistance is the Th\u00e9venin resistance seen from the element\u2019s terminals with sources killed \u2014 the same reduction we practised in Chapter 3.',
      },
      {
        term: 'Behaviour of the RL step response',
        kind: 'insight',
        statement: 'One time constant after the switch closes the current has covered 63.2 per cent of the journey from $I_0$ to $I_f$; the inductor voltage **jumps** at $t = 0$ to $V_s - I_0R$ and then decays exponentially to zero.',
        detail: 'The voltage expression follows from differentiating the current: $v = L\\,di/dt = (V_s - I_0R)e^{-(R/L)t}$. The $t = 0^+$ value makes physical sense: the current is still $I_0$, so the resistor takes $I_0R$ and whatever the source has left over appears across the inductor. If the coil starts empty ($I_0 = 0$) the full $V_s$ lands on the inductor at the switching instant \u2014 the dual of the capacitor\u2019s step current.',
      },
      {
        term: 'The RC twin',
        kind: 'law',
        statement: 'For a series RC circuit switched onto $V_s$ with initial capacitor voltage $V_0$, the capacitor voltage follows $v_C(t) = V_f + (V_0 - V_f)e^{-t/RC}$.',
        detail: '$$v_C(t) = V_f + (V_0 - V_f)e^{-t/RC}.$$ The $B$\u2013$H$ of Chapter 5 made magnetic circuits look like electric ones; here the symmetry is between storage elements: swap current for voltage, $L$ for $C$, short for open, and every RL statement becomes an RC statement. Nilsson\u2019s Example 7.3 is the natural-response twin: a 0.5-microfarad capacitor charged to 100 V discharging through 80 k\u03a9 ($\\tau = 40$ ms) gives $v_C = 100e^{-25t}$ V, and 1.2 mJ \u2014 the whole store \u2014 ends up in one 60-k\u03a9 resistor of the discharge network.',
      },
      {
        term: 'Which variables can jump',
        kind: 'insight',
        statement: 'Only inductor currents and capacitor voltages are forced to be continuous; every other current and voltage in the circuit may change instantaneously at a switching instant.',
        detail: 'This is why the method always solves for $i_L$ or $v_C$ first and derives everything else afterwards. Nilsson\u2019s Example 7.7 stages the point: the 100-ohm resistor\u2019s voltage sits at $+1.5$ V just before the switch opens and jumps to $-6$ V just after, while the inductor current glides through the instant at 60 mA without a flicker.',
      },
      {
        term: 'The artificial pacemaker',
        kind: 'method',
        statement: 'A capacitor charging through a resistor towards $V_s$ models a pacemaker: when $v_C$ reaches the preset $V_\\text{max}$, the controller shorts the capacitor into the heart as an impulse and the cycle restarts.',
        detail: 'During charging, $$v_C(t) = V_s\\left(1 - e^{-t/RC}\\right),$$ with $V_0 = 0$ and $V_f = V_s$. If the controller fires at $v_C = 0.75V_s$, the interval between beats is $t_c = -RC\\ln 0.25 = 1.386RC$, giving a heart rate of $$H = \\frac{60}{-RC\\ln 0.25}\\ \\text{beats per minute}.$$ Choosing $R$ and $C$ therefore tunes the rhythm directly \u2014 and the logarithm\u2019s slow variation makes the design forgiving of component tolerance. The same charge-to-threshold scheme appears in timer ICs and oscillators throughout electronics.',
      },
      {
        term: 'When to reach for the general method',
        kind: 'method',
        statement: 'The recipe applies to **any** circuit reducible to a Th\u00e9venin or Norton equivalent driving a single inductor or capacitor \u2014 natural or step, RL or RC \u2014 provided the equivalent resistance is positive.',
        detail: 'Negative Th\u00e9venin resistance (possible with dependent sources) yields a negative time constant and an unbounded response \u2014 Section 6.4\u2019s territory, where the recipe must be replaced by direct solution of the differential equation. Sequential switching (also 6.4) simply chains several applications of the method, one per interval.',
      },
    ],
    examples: [
      {
        title: 'RL step response with a reversed start (Nilsson Example 7.5)',
        problem: 'The switch in Nilsson\u2019s Fig. 7.21 circuit has been in position a for a long time; at $t = 0$ it moves to position b (a make-before-break switch, so the inductor current is continuous). The inductor is 200 mH, the b-side circuit is a 24 V source in series with 2 ohms, and the a-side source was an 8 A current source arranged so that $I_0 = -8$ A. Find $i(t)$ and $v(t)$ for the inductor, and the time at which the inductor voltage equals 24 V.',
        steps: [
          { label: 'Step 1: Initial value', text: 'Analysing the $t < 0$ circuit with the inductor as a short circuit gives $I_0 = -8$ A \u2014 negative because the pre-switch current flows against the chosen reference direction.' },
          { label: 'Step 2: Time constant', text: 'For $t \\ge 0$ the inductor looks into the 2-ohm Thevenin resistance of the b-side circuit: $\\tau = L/R = 0.2/2 = 0.1$ s.' },
          { label: 'Step 3: Final value', text: 'As $t \\to \\infty$ the inductor is again a short circuit and Ohm\u2019s law over the b-loop gives $I_f = 24/2 = 12$ A.' },
          { label: 'Step 4: Assemble the response', text: '$i = I_f + (I_0 - I_f)e^{-t/\\tau} = 12 + (-8 - 12)e^{-10t} = 12 - 20e^{-10t}$ A for $t \\ge 0$.' },
          { label: 'Step 5: The inductor voltage and the 24 V moment', text: '$v = L\\,di/dt = 0.2(200e^{-10t}) = 40e^{-10t}$ V \u2014 it jumps to $v(0^+) = 40$ V (the 24 V source plus the 16 V drop the 8 A circulating current makes across 2 ohms), then decays. Setting $40e^{-10t} = 24$ gives $t = \\tfrac{1}{10}\\ln(40/24) = 51.08$ ms \u2014 the moment the current passes through zero and the inductor\u2019s voltage equals the source\u2019s, as KVL demands.' },
        ],
        result: '$i = 12 - 20e^{-10t}$ A, $v = 40e^{-10t}$ V, and the voltage passes 24 V at 51.08 ms \u2014 Nilsson\u2019s numbers exactly.',
      },
      {
        title: 'RC step response, general method (Nilsson Example 7.8)',
        problem: 'The switch in Nilsson\u2019s Fig. 7.34 circuit has been in position a for a long time; at $t = 0$ it moves to b. The 0.5-microfarad capacitor initially holds $V_0 = -30$ V (a divider of a 40 V source put 30 V across the 60-ohm resistor, positive at the lower terminal); the b-side attaches a 400-k\u03a9 resistor in series with a 90 V source. Find $v_C(t)$, the current $i(t)$, and the time at which the capacitor voltage equals zero.',
        steps: [
          { label: 'Step 1: Identify and measure the state', text: 'The continuous variable is the capacitor voltage; from voltage division in the a-position circuit, $V_0 = v_C(0) = -30$ V.' },
          { label: 'Step 2: Time constant on the b side', text: 'The capacitor looks into 400 k\u03a9: $\\tau = RC = (400\\times10^{3})(0.5\\times10^{-6}) = 0.2$ s.' },
          { label: 'Step 3: Final value', text: 'In steady state no current flows through the 400-k\u03a9 resistor, so the capacitor charges fully to the source: $V_f = 90$ V.' },
          { label: 'Step 4: Assemble', text: '$v_C = V_f + (V_0 - V_f)e^{-t/\\tau} = 90 + (-30 - 90)e^{-5t} = 90 - 120e^{-5t}$ V for $t \\ge 0$.' },
          { label: 'Step 5: Current and the zero crossing', text: '$i = C\\,dv_C/dt = (0.5\\times10^{-6})(600e^{-5t}) = 300e^{-5t}$ microamperes. Setting $v_C = 0$: $e^{5t} = 120/90 = 4/3$, so $t = \\tfrac{1}{5}\\ln(4/3) = 57.54$ ms \u2014 the instant the resistor drop is the full 90 V and the current is 225 microamperes.' },
        ],
        result: '$v_C = 90 - 120e^{-5t}$ V, $i = 300e^{-5t}\\ \\mu$A, and the voltage passes through zero 57.54 ms after switching \u2014 Nilsson\u2019s figures.',
      },
      {
        title: 'The general method on a natural response (Nilsson Example 7.7)',
        problem: 'A 75 mA source in parallel with 25 ohms and 100 ohms feeds a 50 mH inductor. The switch opens at $t = 0$ leaving the inductor to discharge through the 100-ohm and 25-ohm resistors in series. Find $i_o(t)$ (the inductor current), $v_o(t)$ (the 100-ohm resistor voltage) and both one-sided limits of $v_o$ at the switching instant.',
        steps: [
          { label: 'Step 1: Initial current by division', text: 'Before the switch opens the inductor is a short circuit shunting the resistors: the 75 mA divides between 100 ohms and 25 ohms, leaving $I_0 = i_o(0) = [100/(100+25)](75) = 60$ mA in the inductor.' },
          { label: 'Step 2: Time constant after opening', text: 'The inductor now sees $100 + 25 = 125$ ohms: $\\tau = L/R = 0.05/125 = 0.4$ ms.' },
          { label: 'Step 3: Natural response', text: 'No source remains for $t \\ge 0$, so $I_f = 0$ and $i_o(t) = 0 + (0.06 - 0)e^{-t/0.4\\times10^{-3}} = 60e^{-2500t}$ mA.' },
          { label: 'Step 4: Resistor voltage and its jump', text: '$v_o = -100i_o = -6e^{-2500t}$ V. Just before switching, the 100-ohm resistor carried only the other 15 mA: $v_o(0^-) = 100(0.015) = +1.5$ V. Just after, it carries the full inductor current: $v_o(0^+) = -6$ V.' },
          { label: 'Step 5: Interpret the discontinuity', text: 'The inductor current is continuous at 60 mA, but the resistor\u2019s current redistribution is instantaneous \u2014 a four-fold sign-changing jump in $v_o$ that harms nothing, because only $i_L$ and $v_C$ are required to be continuous.' },
        ],
        result: '$i_o = 60e^{-2500t}$ mA, $v_o = -6e^{-2500t}$ V for $t \\ge 0^+$, with $v_o$ jumping from $+1.5$ V to $-6$ V at $t = 0$ \u2014 the book\u2019s showcase of a permitted discontinuity.',
      },
    ],
    keyTakeaways: [
      'Every first-order circuit \u2014 RL or RC, natural or step \u2014 obeys $dx/dt + x/\\tau = K$ and therefore $x(t) = X_f + (X_0 - X_f)e^{-t/\\tau}$.',
      'The method: identify the continuous variable, find $X_0$ from the $t < 0$ circuit, $\\tau$ from the resistance seen for $t \\ge 0$, $X_f$ as $t \\to \\infty$, then write and differentiate as needed.',
      'Steady state is resistive analysis: inductor short, capacitor open.',
      'The inductor voltage jumps to $V_s - I_0R$ at switching; the capacitor current jumps to $(V_s - V_0)/R$ \u2014 only $i_L$ and $v_C$ are continuous.',
      'RL uses $\\tau = L/R$; RC uses $\\tau = RC$; both reach 63.2 per cent of their remaining journey per time constant.',
      'The pacemaker charges a capacitor to $0.75V_s$ and fires: heart rate $H = 60/(-RC\\ln 0.25)$ beats per minute.',
      'The method needs a positive Thevenin resistance \u2014 dependent sources can break that, which is the road to Section 6.4\u2019s unbounded responses.',
    ],
    quiz: [
      {
        q: 'In the general first-order method, the time constant is computed from:',
        options: [
          'The resistance the storage element sees for $t < 0$',
          'The Thevenin resistance seen by the inductor or capacitor for $t \\ge 0$',
          'The load resistance only',
          'The source\u2019s internal resistance only',
        ],
        answer: 1,
        explanation: 'The post-switching circuit governs the decay rate: kill the sources, look into the element\u2019s terminals, and use $\\tau = L/R$ or $RC$. The $t < 0$ circuit supplies only the initial value.',
      },
      {
        q: 'An initially relaxed RL circuit ($I_0 = 0$) is switched onto a 24 V source in series with 2 ohms. The inductor voltage at $t = 0^+$ is:',
        options: ['0 V', '12 V', '24 V', '48 V'],
        answer: 2,
        explanation: '$v(0^+) = V_s - I_0R = 24 - 0 = 24$ V: with no current yet flowing, the resistor drops nothing and the whole source appears across the inductor, decaying as $24e^{-t/\\tau}$ V thereafter.',
      },
      {
        q: 'Nilsson\u2019s pacemaker fires when $v_C = 0.75V_s$. If $R = 100$ k\u03a9 and $C = 10\\ \\mu$F, the beat interval $t_c = -RC\\ln 0.25$ is about:',
        options: ['1.39 s', '0.14 s', '2.77 s', '10 s'],
        answer: 0,
        explanation: '$RC = 1$ s, so $t_c = \\ln 4 \\approx 1.386$ s and the rate is $60/1.386 \\approx 43$ beats per minute. The design formula $H = 60/(-RC\\ln 0.25)$ is the book\u2019s own.',
      },
      {
        q: 'Which quantity is guaranteed to be continuous across every switching instant?',
        options: ['The inductor current', 'The inductor voltage', 'The capacitor current', 'The power delivered by the source'],
        answer: 0,
        explanation: 'Inductor current and capacitor voltage are the state variables \u2014 both continuous; everything else may jump. Example 7.7 shows a resistor voltage leaping from $+1.5$ V to $-6$ V while $i_L$ stays at 60 mA.',
      },
      {
        q: 'An RC circuit with $V_0 = -30$ V, $V_f = 90$ V and $\\tau = 0.2$ s charges after switching (Nilsson Example 7.8). The capacitor voltage reaches zero at:',
        options: ['40.0 ms', '57.5 ms', '80.0 ms', '200 ms'],
        answer: 1,
        explanation: 'Solve $90 - 120e^{-5t} = 0$: $e^{5t} = 4/3$ and $t = \\tfrac{1}{5}\\ln(4/3) = 57.5$ ms. The negative initial voltage is typical of a switch thrown between two different sources.',
      },
    ],
  },

  // ------------------------------------------------------------- 6.4 ------
  {
    sectionId: 'ee-e-circuits-s23',
    readingTime: 9,
    intro: 'Real circuits switch more than once, sometimes while the dust of the previous transient is still in the air; occasionally they even contain active elements that make the dust grow without bound. Nilsson closes the first-order story with these two edges \u2014 sequential switching and the unbounded response \u2014 and then turns the RC circuit inside an op-amp feedback loop into a precision integrator, the analogue computer\u2019s workhorse and the ancestor of every waveform generator.',
    objectives: [
      'Analyse sequential switching by chaining first-order solutions across time intervals',
      'Explain how and why the time constant changes between intervals, and re-base the exponential with $(t - t_0)$',
      'Recognise unbounded responses, their origin in negative Thevenin resistance, and solve them directly',
      'Derive the integrating amplifier output $v_o = -(1/R_sC_f)\\int v_s\\,dt + v_o(t_0)$',
      'Determine when an integrating amplifier saturates and how to prevent it',
    ],
    concepts: [
      {
        term: 'Sequential switching',
        kind: 'definition',
        statement: '**Sequential switching** is switching that occurs at two or more distinct times; the analysis divides time into intervals, one per switch configuration, and the solution for each interval provides the initial condition for the next.',
        detail: 'A two-position switch moved at $t_1$, several switches opened in sequence \u2014 the technique is the same: apply the general method of Section 6.3 within each interval, and carry the inductor current (or capacitor voltage) across each boundary. Drawing the circuit afresh for each interval, as Nilsson does in his Figs. 7.41\u20137.42, prevents most errors.',
      },
      {
        term: 'The moving time constant',
        kind: 'law',
        statement: 'When a switch changes the resistance seen by the storage element, the time constant changes **and** the exponential must be re-based at the switching instant $t_0$:',
        detail: '$$x(t) = X_f + (X_0 - X_f)e^{-(t - t_0)/\\tau}, \\quad t \\ge t_0,$$ where $X_0 = x(t_0)$ is read from the previous interval\u2019s solution. The continuity property does the bookkeeping: evaluate the old expression at the switching instant, insert that as the new initial value, and shift the clock. Nothing else about the exponential form changes.',
      },
      {
        term: 'Unbounded response',
        kind: 'definition',
        statement: 'A response that **grows exponentially without limit** rather than decaying is possible only when the Thevenin resistance seen by the storage element is **negative** \u2014 which requires dependent sources in the circuit.',
        detail: 'A negative $R_\\text{Th}$ makes $\\tau = L/R_\\text{Th}$ (or $RC$) negative, and $e^{+t/|\\tau|}$ replaces $e^{-t/\\tau}$. The general method fails here because there is no finite final value to converge to; the differential equation must be solved directly. In a physical circuit the growth halts when a component breaks down, saturates or burns out \u2014 Nilsson\u2019s caution to engineers who interconnect active elements: unintended unbounded responses cause unexpected and potentially dangerous failures.',
      },
      {
        term: 'Finding a negative Thevenin resistance',
        kind: 'method',
        statement: 'With dependent sources present, $R_\\text{Th}$ is found by the **test-source method**: apply a test source $v_T$ at the terminals, compute the resulting $i_T$, and divide.',
        detail: 'In Nilsson\u2019s Example 7.13 a 10-k\u03a9 resistor, a 20-k\u03a9 resistor and a dependent source $7i_D$ combine to give $R_\\text{Th} = v_T/i_T = -5$ k\u03a9 \u2014 the KCL at the test node shows the dependent source pushing back harder than the passive resistors dissipate. Negative resistance is not a paradox: it is power flowing from the dependent source\u2019s controlling amplifier into the circuit.',
      },
      {
        term: 'The integrating amplifier',
        kind: 'law',
        statement: 'An ideal op-amp with input resistor $R_s$ and feedback capacitor $C_f$ produces the inverted, scaled integral of the input, $v_o = -(1/R_sC_f)\\int v_s\\,dt + v_o(t_0)$.',
        detail: '$$v_o(t) = -\\frac{1}{R_sC_f}\\int_{t_0}^{t} v_s\\,d\\tau + v_o(t_0),$$ the **inverted, scaled integral** of the input. The derivation uses the ideal op-amp\u2019s two gifts: zero input current (so all of $i_s = v_s/R_s$ flows into the feedback path) and the virtual short at the input terminals ($v_n = v_p = 0$), which makes $i_f = C_f\\,dv_o/dt$. Summing currents at the inverting node gives $dv_o/dt = -v_s/(R_sC_f)$; integrate and the formula appears. The initial term $v_o(t_0)$ is simply the voltage the feedback capacitor happened to hold when integration began.',
      },
      {
        term: 'Saturation of the integrator',
        kind: 'insight',
        statement: 'The integration holds only while the op-amp stays **linear**: charge accumulating on $C_f$ drives the output towards the supply rails $\\pm V_{CC}$, and once it saturates the output sticks.',
        detail: 'Nilsson\u2019s Example 7.15: a $-10$ V input for 9 ms ramps the output from $-5$ V to $+4$ V at $1000$ V/s; an $+8$ V input then ramps it downward at 800 V/s until it hits the $-6$ V rail, which happens 21.5 ms after the second switching. The standard fix is a resistor in parallel with $C_f$ \u2014 the leak makes the circuit a first-order low-pass rather than a pure integrator, a structure we analyse with the tools of Chapter 7. Waveform generators exploit the saturation deliberately: ramp, clamp, reset, repeat.',
      },
      {
        term: 'The differentiating amplifier',
        kind: 'insight',
        statement: 'Swapping the positions of $R_s$ and $C_f$ converts the integrator into a **differentiator**: $v_o = -R_sC_f\\,dv_s/dt$.',
        detail: 'The dual circuit differentiates rather than integrates \u2014 and is seldom used, because its output emphasises the fast edges and noise of the input. In practice, engineers integrate (well-behaved, noise-tolerant) and differentiate only when they must, and then usually in the s-domain with the transform methods of Chapter 10.',
      },
    ],
    examples: [
      {
        title: 'Sequential switching in an RL circuit (Nilsson Example 7.11)',
        problem: 'The two switches in Nilsson\u2019s Fig. 7.39 circuit have been closed a long time; at $t = 0$ switch 1 opens, and 35 ms later switch 2 opens. The 150 mH inductor carries 6 A at $t = 0$; with only switch 1 open the inductor sees 6 ohms, and with both open it sees 9 ohms. Find $i_L(t)$ in each interval and the percentage of the initial energy dissipated in the 18-ohm resistor.',
        steps: [
          { label: 'Step 1: First interval \u2014 natural response', text: 'For $0 \\le t \\le 35$ ms the resistance is the 9-ohm and 18-ohm resistors in parallel: 6 ohms, so $\\tau_1 = 0.15/6 = 25$ ms and, with no source present, $i_L(t) = 6e^{-40t}$ A.' },
          { label: 'Step 2: Evaluate at the second switching', text: 'At $t = 35$ ms the current has decayed to $i_L = 6e^{-40 \\times 0.035} = 6e^{-1.4} = 1.48$ A \u2014 the initial value for the next interval, continuous across the boundary.' },
          { label: 'Step 3: Second interval \u2014 new time constant', text: 'With both switches open the inductor sees 3 ohms in series with 6 ohms: $\\tau_2 = 0.15/9 = 16.67$ ms. The re-based solution is $i_L(t) = 1.48e^{-60(t - 0.035)}$ A for $t \\ge 35$ ms \u2014 note both the new rate (60 per second) and the shifted clock.' },
          { label: 'Step 4: Energy into the 18-ohm resistor', text: 'The 18-ohm resistor is in circuit only during the first interval, across which the inductor voltage is $v_L = 0.15(-240e^{-40t}) = -36e^{-40t}$ V; its power is $v_L^2/18 = 72e^{-80t}$ W, so the energy is $\\int_0^{0.035} 72e^{-80t}dt = 0.9(1 - e^{-2.8}) = 845.27$ mJ.' },
          { label: 'Step 5: The percentage', text: 'The inductor banked $\\tfrac{1}{2}(0.15)(6)^2 = 2.7$ J $= 2700$ mJ, so the 18-ohm share is $845.27/2700 = 31.31$ per cent (the 3-ohm and 6-ohm resistors take 22.90 and 45.80 per cent \u2014 summing to 100 per cent within roundoff).' },
        ],
        result: '$i_L = 6e^{-40t}$ A then $1.48e^{-60(t-0.035)}$ A; 31.31 per cent of the stored 2.7 J is dissipated in the 18-ohm resistor \u2014 Nilsson\u2019s figures throughout.',
      },
      {
        title: 'An unbounded response (Nilsson Example 7.13)',
        problem: 'When the switch closes in Nilsson\u2019s Fig. 7.45 circuit, the 5-microfarad capacitor already holds 10 V. The network it discharges into contains resistors of 10 k\u03a9 and 20 k\u03a9 plus a dependent source, whose combination gives a Thevenin resistance of $-5$ k\u03a9. Find $v_o(t)$, and assuming the capacitor short-circuits when its terminal voltage reaches 150 V, find when that happens.',
        steps: [
          { label: 'Step 1: Confirm the negative resistance', text: 'The test-source method on the resistors-and-dependent-source network yields $R_\\text{Th} = v_T/i_T = -5$ k\u03a9 \u2014 the dependent source overpowers the passive path, so the discharge circuit is *active*.' },
          { label: 'Step 2: Write the differential equation', text: 'KCL at the output node with the Thevenin resistor in place: $(5\\times10^{-6})\\,dv_o/dt + v_o/(-5000) = 0$.' },
          { label: 'Step 3: Separate and solve', text: 'Dividing through: $dv_o/dt - 40v_o = 0$, whose solution \u2014 not an exponential decay but a growth \u2014 is $v_o(t) = 10e^{40t}$ V for $t \\ge 0$.' },
          { label: 'Step 4: Time to breakdown', text: 'The capacitor shorts at 150 V: $10e^{40t} = 150$ means $40t = \\ln 15$, so $t = 2.708/40 = 67.70$ ms \u2014 two-thirds of a tenth of a second from harmless 10 V to destructive 150 V.' },
        ],
        result: '$v_o = 10e^{40t}$ V, reaching 150 V at $t = 67.70$ ms \u2014 the growth that a negative time constant buys, and the reason unbounded circuits end in saturation or failure.',
      },
      {
        title: 'Integrating amplifier with sequential switching (Nilsson Example 7.15)',
        problem: 'In Nilsson\u2019s Fig. 7.52 integrator ($R_s = 100$ k\u03a9, $C_f = 0.1\\ \\mu$F, supply $\\pm6$ V) the feedback capacitor initially holds $-5$ V. The switch connects the input to a $-10$ V source for 9 ms, then moves to a $+8$ V source. How long after the second connection does the op-amp saturate?',
        steps: [
          { label: 'Step 1: The scale factor', text: '$1/(R_sC_f) = 1/[(100\\times10^{3})(0.1\\times10^{-6})] = 100$ per second \u2014 the integrator\u2019s gain.' },
          { label: 'Step 2: First segment', text: 'With $v_s = -10$ V: $v_o = -100\\int_0^t(-10)d\\tau + (-5) = 1000t - 5$ V. At $t = 9$ ms the output stands at $1000(0.009) - 5 = 4$ V \u2014 still comfortably inside the $\\pm6$ V rails, so no saturation yet.' },
          { label: 'Step 3: Second segment', text: 'Now $v_s = +8$ V and the initial condition is the 4 V just reached: $v_o = -100\\int_{9\\times10^{-3}}^{t} 8\\,d\\tau + 4 = -800(t - 0.009) + 4 = 11.2 - 800t$ V.' },
          { label: 'Step 4: Saturation', text: 'The ramp now runs downwards, so the op-amp heads for the $-6$ V rail: set $11.2 - 800t_s = -6$, giving $t_s = 17.2/800 = 21.5$ ms.' },
          { label: 'Step 5: Interpret', text: 'Saturating 21.5 ms after the second switch, the amplifier has faithfully integrated two input segments \u2014 9 ms at $-10$ V, then 12.5 ms at $+8$ V \u2014 before the accumulating charge on $C_f$ ran it to the rail. A resistor in parallel with $C_f$ would bleed that charge away and restore linearity indefinitely, at the price of imperfect integration.' },
        ],
        result: 'Saturation occurs 21.5 ms after the switch reaches the $+8$ V position \u2014 Nilsson\u2019s answer, from $v_o = 11.2 - 800t$ V in the final segment.',
      },
    ],
    keyTakeaways: [
      'Sequential switching = the general method applied once per time interval, with the storage variable carried continuously across each switch instant.',
      'A switch that changes the seen resistance changes $\\tau$; re-base the exponential as $e^{-(t-t_0)/\\tau}$ from the switching instant.',
      'Unbounded responses grow as $e^{+t/|\\tau|}$ and arise only from negative Thevenin resistance \u2014 dependent sources; solve them directly, not by the final-value recipe.',
      'Negative resistance is measured by the test-source method ($R_\\text{Th} = v_T/i_T$); Nilsson\u2019s example network gives $-5$ k\u03a9.',
      'The op-amp integrator gives $v_o = -(1/R_sC_f)\\int v_s\\,dt + v_o(t_0)$, thanks to zero input current and the virtual short.',
      'Integration is valid only within the $\\pm V_{CC}$ rails; accumulating charge causes saturation, preventable by a parallel feedback resistor (a Chapter 7 circuit).',
      'Swapping $R_s$ and $C_f$ differentiates, $v_o = -R_sC_f\\,dv_s/dt$ \u2014 useful but noise-amplifying, hence rarer in practice.',
    ],
    quiz: [
      {
        q: 'In Nilsson\u2019s Example 7.11, why does the inductor current decay at 40 per second in the first interval but 60 per second in the second?',
        options: [
          'The inductor partially demagnetises',
          'The resistance it sees rises from 6 ohms to 9 ohms when switch 2 opens',
          'The current direction reverses',
          'The stored energy doubles',
        ],
        answer: 1,
        explanation: 'The rate is $1/\\tau = R/L$: with $L = 150$ mH fixed, going from $R = 6\\ \\Omega$ ($\\tau = 25$ ms, rate 40) to $R = 9\\ \\Omega$ ($\\tau = 16.67$ ms, rate 60) is the whole story \u2014 and the second exponential is also time-shifted by the 35 ms switching instant.',
      },
      {
        q: 'A first-order circuit exhibits an unbounded response. This tells you the circuit:',
        options: [
          'Contains two independent capacitors',
          'Has energy stored at the switching instant',
          'Has a negative Thevenin resistance, hence a negative time constant',
          'Was analysed with the wrong initial value',
        ],
        answer: 2,
        explanation: 'Only a negative $R_\\text{Th}$ \u2014 possible with dependent sources \u2014 makes $\\tau$ negative and turns decay into growth. The general method cannot be used (no finite final value); solve the differential equation directly, as in Example 7.13 where $R_\\text{Th} = -5$ k\u03a9 gives $v_o = 10e^{40t}$ V.',
      },
      {
        q: 'An op-amp integrator has $R_s = 100$ k\u03a9 and $C_f = 0.1\\ \\mu$F (Nilsson\u2019s Example 7.15 values). A steady $-10$ V input drives the output at what rate?',
        options: ['+10 V/s', '\u22121000 V/s', '\u2212100 V/s', '+1000 V/s'],
        answer: 3,
        explanation: '$dv_o/dt = -v_s/(R_sC_f) = -(-10)/0.01 = +1000$ V/s: a negative input produces a positive-going ramp. The sign and the 100-per-second gain both come straight from the virtual-short derivation.',
      },
      {
        q: 'What physical mechanism eventually stops the growth of an unbounded response in a real circuit?',
        options: [
          'A component breaks down, or an amplifier saturates',
          'The capacitor discharges through vacuum',
          'The time constant turns positive again automatically',
          'Energy conservation forbids growth from the start',
        ],
        answer: 0,
        explanation: 'Nilsson\u2019s Example 7.13 postulates the capacitor short-circuiting at 150 V (at $t = 67.70$ ms); in general some element saturates or fails. Unintended unbounded responses are a genuine engineering hazard \u2014 they end in unexpected component failures.',
      },
      {
        q: 'Why does placing a resistor in parallel with the feedback capacitor keep an integrator from saturating?',
        options: [
          'It cancels the op-amp\u2019s offset voltage',
          'It gives the accumulating charge a leakage path, bounding the output',
          'It converts the op-amp into a differentiator',
          'It increases $R_sC_f$ and slows the ramp',
        ],
        answer: 1,
        explanation: 'The parallel resistor bleeds charge off $C_f$, so a steady input produces a bounded, steady output \u2014 the circuit becomes the first-order low-pass analysed with the Chapter 7 tools rather than a pure (endlessly ramping) integrator.',
      },
    ],
  },
]

export const elecCh6Formulas: FormulaEntry[] = [
  {
    chapterId: 'ee-e-circuits',
    section: '2.20',
    name: 'Inductor voltage law',
    formula: 'e = L\u00b7di/dt',
    note: 'henry: 1 V per A/s; inductor is a short for dc',
    latex: 'e = L\\,\\frac{di}{dt}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.20',
    name: 'Inductance from flux linkages',
    formula: 'L = N\u03a6/I',
    note: 'flux-linkages per ampere; also L = \u03bc\u2080\u03bc\u1d63N\u00b2A/l',
    latex: 'L = \\frac{N\\Phi}{I} = \\frac{\\mu_0 \\mu_r A N^{2}}{l}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.20',
    name: 'Energy stored in an inductor',
    formula: 'W = \u00bdLI\u00b2',
    note: 'joules; all of it is dissipated on discharge',
    latex: 'W = \\tfrac{1}{2}LI^{2}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.20',
    name: 'Mutual inductance and coupling',
    formula: 'M = N\u2082\u03a6\u2082/I\u2081;  M = k\u221a(L\u2081L\u2082)',
    note: '0 \u2264 k \u2264 1; dot convention fixes signs',
    latex: 'M = k\\sqrt{L_1 L_2}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.20',
    name: 'Coupled coils in series',
    formula: 'L = L\u2081 + L\u2082 \u00b1 2M',
    note: 'plus when aiding; M is a quarter of the difference',
    latex: 'L = L_1 + L_2 \\pm 2M',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.21',
    name: 'LR time constant',
    formula: 'T = L/R',
    note: 'RC twin: \u03c4 = RC; 63.2% per constant',
    latex: 'T = \\frac{L}{R}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.21',
    name: 'Growth and decay in an LR circuit',
    formula: 'i = I(1 \u2212 exp(\u2212t/T));  i = I\u2080\u00b7exp(\u2212t/T)',
    note: 'Helmholtz equation; growth to V/R, decay from I\u2080',
    latex: 'i = I\\left(1 - e^{-t/T}\\right), \\quad i = I_0 e^{-t/T}',
  },
  {
    chapterId: 'ee-e-circuits',
    section: '2.22',
    name: 'General first-order solution',
    formula: 'x(t) = Xf + (X\u2080 \u2212 Xf)\u00b7exp(\u2212(t\u2212t\u2080)/\u03c4)',
    note: 'works for RL and RC, natural and step responses',
    latex: 'x(t) = X_f + (X_0 - X_f)\\,e^{-(t-t_0)/\\tau}',
  },
]
