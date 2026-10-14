import type { SectionContent } from "../library"

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition, Chapter 19
// Alternating Current Electricity (Sections 19.1 – 19.10)
// ============================================================================

export const ewenCh19Content: SectionContent[] = [
  {
    sectionId: "ewen-ch19-s1",
    readingTime: 5,
    intro: "Mains electricity reverses direction 120 times a second — alternating current. This section defines the sine wave by frequency, period, peak, and rms values, and explains why $60 \\text{ Hz}$ AC won the power grid.",
    objectives: [
      "Describe AC as $v = V_{max}\\sin 2\\pi f t$ with $f = 60.0 \\text{ Hz}$ mains",
      "Convert between peak, rms, and average values",
      "Explain transformer and grid advantages of AC over DC",
    ],
    concepts: [
      {
        term: "Alternating current",
        kind: "definition",
        statement: "AC reverses direction periodically; mains voltage is $v = V_{max}\\sin(2\\pi f t)$ with $f = 60.0 \\text{ Hz}$ ($50 \\text{ Hz}$ abroad).",
        detail: "Generators make sine AC naturally by rotation; the grid standardizes on it.",
      },
      {
        term: "RMS values",
        kind: "definition",
        statement: "Root-mean-square values meter AC heating power: $V_{rms} = V_{max}/\\sqrt{2} \\approx 0.707V_{max}$ (sine).",
        detail: "Household $120 \\text{ V}$ is rms; the peak is $170 \\text{ V}$ and peak-to-peak $340 \\text{ V}$.",
      },
      {
        term: "Period and frequency",
        kind: "notation",
        statement: "$T = 1/f$: a $60.0 \\text{ Hz}$ cycle lasts $16.7 \\text{ ms}$; audio spans $20 \\text{ Hz}$–$20 \\text{ kHz}$.",
        detail: "Oscilloscope halving checks start here: count divisions, multiply by sec/div.",
      },
      {
        term: "Why AC won",
        kind: "insight",
        statement: "Transformers change AC voltage efficiently, so high-voltage transmission with tiny $I^{2}R$ loss is AC-native.",
        detail: "Edison's DC could not step up; Westinghouse/Tesla AC could — the war of currents in one sentence.",
      },
      {
        term: "Phase idea",
        kind: "notation",
        statement: "Phase $\\phi$ marks position within the cycle in degrees or radians; two waves in step are in phase.",
        detail: "Inductive and capacitive loads shift current phase — the power-factor story of later sections.",
      },
    ],
    figures: [
      {
        caption: "Sine anatomy: peak $V_{max}$, peak-to-peak $2V_{max}$, rms $0.707V_{max}$; period $T = 1/f$.",
        svg: "<svg role='img' aria-label='Sine anatomy: peak V_max, peak-to-peak 2V_max, rms 0.707V_max; period T = 1/f.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"30\" y1=\"110\" x2=\"380\" y2=\"110\"/><path d=\"M30 110 Q80 10 130 110 Q180 210 230 110 Q280 10 330 110 Q355 160 380 110\"/><line x1=\"130\" y1=\"110\" x2=\"130\" y2=\"60\" stroke-dasharray=\"4 4\"/><text x=\"135\" y=\"90\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">Vmax</text><text x=\"240\" y=\"130\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">T = 1/f</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Peak from household rms",
        problem: "U.S. mains read $120 \\text{ V}$ rms sine. Find peak and peak-to-peak voltage.",
        steps: [
          { label: "Step 1: Peak", text: "$V_{max} = 120\\sqrt{2} = 170 \\text{ V}$." },
          { label: "Step 2: Peak-to-peak", text: "$2 \\times 170 = 340 \\text{ V}$ on the scope." },
        ],
        result: "$170 \\text{ V}$ peak, $340 \\text{ V}$ peak-to-peak.",
      },
      {
        title: "Scope period check",
        problem: "A sine spans $4.00$ divisions at $5.00 \\text{ ms}/\\text{div}$. Find $T$ and $f$.",
        steps: [
          { label: "Step 1: Period", text: "$T = 4.00 \\times 5.00 = 20.0 \\text{ ms}$." },
          { label: "Step 2: Frequency", text: "$f = 1/0.0200 = 50.0 \\text{ Hz}$." },
        ],
        result: "$20.0 \\text{ ms}$, $50.0 \\text{ Hz}$ mains.",
      },
    ],
    keyTakeaways: [
      "Mains AC is $60 \\text{ Hz}$ sine; meters read rms ($0.707 \\times$ peak).",
      "$T = 1/f$ links scope divisions to frequency.",
      "Transformers make AC the transmission winner.",
    ],
    quiz: [
      {
        q: "$170 \\text{ V}$ peak sine corresponds to rms:",
        options: ["$170 \\text{ V}$", "$340 \\text{ V}$", "$120 \\text{ V}$", "$85 \\text{ V}$"],
        answer: 2,
        explanation: "$170/\\sqrt{2} = 120 \\text{ V}$ rms.",
      },
      {
        q: "One cycle of $60 \\text{ Hz}$ AC lasts:",
        options: ["$60 \\text{ s}$", "$16.7 \\text{ ms}$", "$120 \\text{ ms}$", "$1.00 \\text{ s}$"],
        answer: 1,
        explanation: "$T = 1/60 = 16.7 \\text{ ms}$.",
      },
      {
        q: "AC displaced DC for grid power mainly because:",
        options: ["AC is safer at any voltage", "AC voltage transforms efficiently for HV transmission", "DC cannot power motors", "AC needs no wires"],
        answer: 1,
        explanation: "Step-up/step-down transformers work only on changing current, slashing $I^{2}R$ losses.",
      },
    ],
  },
  {
    sectionId: "ewen-ch19-s2",
    readingTime: 5,
    intro: "AC power averages over the cycle: resistive loads dissipate $P = V_{rms}I_{rms}$, reactive ones less. This section prices AC energy, introduces power factor, and sizes mains wiring.",
    objectives: [
      "Compute resistive AC power from rms values",
      "Define power factor $\\cos\\phi$ and correct it",
      "Size AC branch current and energy cost",
    ],
    concepts: [
      {
        term: "AC resistive power",
        kind: "theorem",
        statement: "Pure resistance dissipates average $P = V_{rms}I_{rms} = I_{rms}^{2}R = V_{rms}^{2}/R$.",
        detail: "RMS values are defined to make this identical to the DC formula.",
      },
      {
        term: "Power factor",
        kind: "definition",
        statement: "With phase shift $\\phi$ between $V$ and $I$, real power is $P = V_{rms}I_{rms}\\cos\\phi$.",
        detail: "Motors run $\\cos\\phi \\approx 0.7$–$0.9$ lagging; capacitor banks correct plants toward $1$.",
      },
      {
        term: "Apparent versus real power",
        kind: "notation",
        statement: "Apparent power $S = VI$ (volt-amperes) exceeds real $P$ (watts); reactive $Q$ (VAR) shuttles uselessly.",
        detail: "Utilities bill watts but size transformers for volt-amperes.",
      },
      {
        term: "AC energy billing",
        kind: "method",
        statement: "Kilowatt-hours accumulate from average watts exactly as in DC: $E = P_{avg}t$.",
        detail: "A $120 \\text{ V}$, $10 \\text{ A}$, unity-PF load burns $1.20 \\text{ kW}$.",
      },
      {
        term: "Wire and breaker sizing",
        kind: "method",
        statement: "Size conductors and breakers for rms current $I_{rms} = P/(V\\cos\\phi)$, worst-case PF included.",
        detail: "Low power factor inflates current without delivering more work.",
      },
    ],
    examples: [
      {
        title: "Heater on mains",
        problem: "A $120 \\text{ V}$ rms heater draws $12.5 \\text{ A}$ rms resistive. Find power and $8$-hour cost at $\\$0.18/\\text{kWh}$.",
        steps: [
          { label: "Step 1: Power", text: "$P = (120)(12.5) = 1500 \\text{ W}$." },
          { label: "Step 2: Energy and cost", text: "$12.0 \\text{ kWh} \\times 0.18 = \\$2.16$." },
        ],
        result: "$1.50 \\text{ kW}$; $\\$2.16$ per $8 \\text{ h}$.",
      },
      {
        title: "Motor real power",
        problem: "A motor draws $8.00 \\text{ A}$ at $240 \\text{ V}$ with $\\cos\\phi = 0.800$. Find real and apparent power.",
        steps: [
          { label: "Step 1: Apparent", text: "$S = (240)(8.00) = 1920 \\text{ VA}$." },
          { label: "Step 2: Real", text: "$P = 1920 \\times 0.800 = 1540 \\text{ W}$." },
        ],
        result: "$1.92 \\text{ kVA}$ apparent, $1.54 \\text{ kW}$ real.",
      },
    ],
    keyTakeaways: [
      "Resistive AC: $P = V_{rms}I_{rms}$ like DC.",
      "Reactive loads deliver $VI\\cos\\phi$; correct low PF with capacitors.",
      "Bill watts, but size copper for volt-amperes.",
    ],
    quiz: [
      {
        q: "A resistive load takes $5.00 \\text{ A}$ rms at $120 \\text{ V}$ rms. Power is:",
        options: ["$24.0 \\text{ W}$", "$600 \\text{ W}$", "$848 \\text{ W}$", "$0 \\text{ W}$"],
        answer: 1,
        explanation: "$P = VI = 600 \\text{ W}$ at unity power factor.",
      },
      {
        q: "Power factor $0.50$ means:",
        options: ["Half the current is DC", "Real power is half the $VI$ product", "Frequency is halved", "Voltage is halved"],
        answer: 1,
        explanation: "$P = VI\\cos\\phi = 0.50VI$; the rest is reactive shuttle.",
      },
      {
        q: "Factories add capacitor banks to:",
        options: ["Raise voltage", "Cancel inductive lag and raise $\\cos\\phi$", "Store backup energy", "Filter harmonics only"],
        answer: 1,
        explanation: "Leading capacitive VARs cancel lagging motor VARs, shrinking total current.",
      },
    ],
  },
  {
    sectionId: "ewen-ch19-s3",
    readingTime: 6,
    intro: "Coils fight current changes — inductance. This section defines self-inductance $L$, the back-emf $\\mathcal{E} = -L\\Delta I/\\Delta t$, inductive reactance $X_{L} = 2\\pi fL$, and the energy $\\tfrac{1}{2}LI^{2}$ in ballasts, chokes, and relay coils.",
    objectives: [
      "Define inductance $L$ (henrys) and back-emf behavior",
      "Compute $X_{L} = 2\\pi fL$ and coil current $I = V/X_{L}$",
      "Explain inductor phase (current lags) and energy storage",
    ],
    concepts: [
      {
        term: "Self-inductance",
        kind: "definition",
        statement: "Inductance $L$ in henrys links flux to current ($N\\Phi = LI$); changing current induces $\\mathcal{E} = -L\\Delta I/\\Delta t$.",
        detail: "More turns and iron cores raise $L$; air-core RF coils are microhenrys, filter chokes are henrys.",
      },
      {
        term: "Inductive reactance",
        kind: "theorem",
        statement: "A pure inductor opposes sine current with $X_{L} = 2\\pi fL = \\omega L$ ohms, so $I = V/X_{L}$.",
        detail: "Higher frequency means stronger opposition — chokes pass DC and block hash.",
      },
      {
        term: "Current lags voltage",
        kind: "law",
        statement: "In a pure inductor, current lags voltage by $90^{\\circ}$ ($\\pi/2$).",
        detail: "ELI the ICE man: voltage leads in inductive (L) circuits.",
      },
      {
        term: "Stored energy",
        kind: "theorem",
        statement: "$U = \\tfrac{1}{2}LI^{2}$ sits in the coil's field; breaking the circuit dumps it as a spark.",
        detail: "Relay snubber diodes and arc suppression absorb this kick.",
      },
      {
        term: "Practical inductors",
        kind: "insight",
        statement: "Ballasts limit fluorescent current, chokes smooth supplies, and ignition coils step $12 \\text{ V}$ pulses to kilovolts.",
        detail: "All exploit $V = L\\,dI/dt$: fast interruption makes huge voltage.",
      },
    ],
    figures: [
      {
        caption: "Inductor phase: current $I$ lags voltage $V$ by $90^{\\circ}$; $X_{L} = 2\\pi fL$ grows with frequency.",
        svg: "<svg role='img' aria-label='Inductor phase: current I lags voltage V by 90^circ; X_L = 2pi fL grows with frequency.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"40\" y1=\"100\" x2=\"370\" y2=\"100\"/><line x1=\"40\" y1=\"20\" x2=\"40\" y2=\"170\"/><path d=\"M40 100 Q80 20 120 100 Q160 180 200 100 Q240 20 280 100 Q320 180 360 100\"/><path d=\"M40 100 Q80 60 120 100 Q160 140 200 100 Q240 60 280 100 Q320 140 360 100\" stroke-dasharray=\"6 4\"/><text x=\"290\" y=\"40\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">V leads</text><text x=\"290\" y=\"150\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">I lags (dashed)</text></svg>",
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Choke at line frequency",
        problem: "A $0.500 \\text{ H}$ choke carries $120 \\text{ V}$ rms at $60.0 \\text{ Hz}$. Find $X_{L}$ and $I$.",
        steps: [
          { label: "Step 1: Reactance", text: "$X_{L} = 2\\pi(60.0)(0.500) = 188 \\text{ }\\Omega$." },
          { label: "Step 2: Current", text: "$I = 120/188 = 0.638 \\text{ A}$." },
        ],
        result: "$188 \\text{ }\\Omega$; $0.638 \\text{ A}$ lagging $90^{\\circ}$.",
      },
      {
        title: "Ignition-coil kick",
        problem: "A $6.00 \\text{ mH}$ coil's $4.00 \\text{ A}$ is interrupted in $20.0 \\mu\\text{s}$. Estimate the induced voltage.",
        steps: [
          { label: "Step 1: Rate", text: "$\\Delta I/\\Delta t = 4.00/2.00 \\times 10^{-5} = 2.00 \\times 10^{5} \\text{ A}/\\text{s}$." },
          { label: "Step 2: Emf", text: "$\\mathcal{E} = (6.00 \\times 10^{-3})(2.00 \\times 10^{5}) = 1200 \\text{ V}$ (turns ratio multiplies further)." },
        ],
        result: "About $1.20 \\text{ kV}$ primary kick — stepped to $20$+ kV at the plug.",
      },
    ],
    keyTakeaways: [
      "$X_{L} = 2\\pi fL$; inductors block high frequencies and pass DC.",
      "Current lags voltage $90^{\\circ}$ in pure $L$.",
      "Coils store $\\tfrac{1}{2}LI^{2}$ and kick on interruption.",
    ],
    quiz: [
      {
        q: "Doubling frequency through a fixed inductor:",
        options: ["Halves $X_{L}$", "Doubles $X_{L}$", "Leaves $X_{L}$ unchanged", "Makes $X_{L}$ zero"],
        answer: 1,
        explanation: "$X_{L} = 2\\pi fL$ is proportional to $f$.",
      },
      {
        q: "In a pure inductor, current:",
        options: ["Leads voltage $90^{\\circ}$", "Lags voltage $90^{\\circ}$", "Is in phase", "Is always zero"],
        answer: 1,
        explanation: "Back-emf delays current buildup — ELI: voltage (E) leads in L.",
      },
      {
        q: "A fluorescent ballast is essentially:",
        options: ["A large resistor", "An inductor limiting current by reactance", "A capacitor bank", "A transformer with no core"],
        answer: 1,
        explanation: "Reactance limits lamp current without the $I^{2}R$ waste of a resistor.",
      },
    ],
  },
  {
    sectionId: "ewen-ch19-s4",
    readingTime: 6,
    intro: "Real coils come with wire resistance, so current faces both $R$ and $X_{L}$. This section combines them as impedance $Z = \\sqrt{R^{2} + X_{L}^{2}}$, finds the lagging phase angle, and splits voltage into resistive and reactive parts.",
    objectives: [
      "Compute $X_{L}$, then $Z = \\sqrt{R^{2}+X_{L}^{2}}$ and $I = V/Z$",
      "Find phase $\\tan\\phi = X_{L}/R$ and component voltages",
      "Split real versus reactive power in RL circuits",
    ],
    concepts: [
      {
        term: "RL impedance",
        kind: "theorem",
        statement: "Series $R$–$L$ presents $Z = \\sqrt{R^{2} + X_{L}^{2}}$ ohms at phase $\\phi = \\tan^{-1}(X_{L}/R)$ (current lagging).",
        detail: "Resistance and reactance add at right angles — a phasor triangle, not a plain sum.",
      },
      {
        term: "Component voltages",
        kind: "method",
        statement: "$V_{R} = IR$ (in phase with $I$) and $V_{L} = IX_{L}$ (leading $I$ by $90^{\\circ}$); $V_{T} = \\sqrt{V_{R}^{2}+V_{L}^{2}}$.",
        detail: "Meter each part: the quadrature sum returns the source voltage.",
      },
      {
        term: "RL phase angle",
        kind: "notation",
        statement: "$\\cos\\phi = R/Z$ is the power factor; $\\sin\\phi = X_{L}/Z$ is the reactive fraction.",
        detail: "Large $X_{L}/R$ means lagging, low-PF, magnetizing-heavy current.",
      },
      {
        term: "Real power in RL",
        kind: "theorem",
        statement: "Only $R$ dissipates: $P = I^{2}R = VI\\cos\\phi$; $X_{L}$ merely stores and returns energy.",
        detail: "Motor nameplates quote this real power plus PF.",
      },
      {
        term: "Time constant preview",
        kind: "insight",
        statement: "DC switching approaches steady state with $\\tau = L/R$; AC analysis assumes the settled sine.",
        detail: "Five $\\tau$ to settle is the bench rule for relay and contactor coils.",
      },
    ],
    examples: [
      {
        title: "Motor-coil impedance",
        problem: "A coil has $R = 30.0 \\text{ }\\Omega$ and $L = 0.100 \\text{ H}$ at $120 \\text{ V}$, $60.0 \\text{ Hz}$. Find $Z$, $I$, $\\phi$, and $P$.",
        steps: [
          { label: "Step 1: Reactance", text: "$X_{L} = 2\\pi(60.0)(0.100) = 37.7 \\text{ }\\Omega$." },
          { label: "Step 2: Impedance", text: "$Z = \\sqrt{30.0^{2} + 37.7^{2}} = 48.2 \\text{ }\\Omega$; $I = 120/48.2 = 2.49 \\text{ A}$." },
          { label: "Step 3: Phase and power", text: "$\\phi = \\tan^{-1}(37.7/30.0) = 51.5^{\\circ}$ lagging; $P = (2.49)^{2}(30.0) = 186 \\text{ W}$." },
        ],
        result: "$Z = 48.2 \\text{ }\\Omega$, $I = 2.49 \\text{ A}$, $\\phi = 51.5^{\\circ}$, $P = 186 \\text{ W}$.",
      },
      {
        title: "Voltage split check",
        problem: "Verify the previous circuit's voltages.",
        steps: [
          { label: "Step 1: Components", text: "$V_{R} = (2.49)(30.0) = 74.7 \\text{ V}$; $V_{L} = (2.49)(37.7) = 93.9 \\text{ V}$." },
          { label: "Step 2: Quadrature sum", text: "$\\sqrt{74.7^{2} + 93.9^{2}} = 120 \\text{ V}$." },
        ],
        result: "Checks: $74.7$ and $93.9 \\text{ V}$ in quadrature sum to $120 \\text{ V}$.",
      },
    ],
    keyTakeaways: [
      "Series RL: $Z = \\sqrt{R^{2}+X_{L}^{2}}$, $I = V/Z$, $\\tan\\phi = X_{L}/R$.",
      "Voltages add in quadrature, not directly.",
      "Only $R$ burns watts: $P = I^{2}R = VI\\cos\\phi$.",
    ],
    quiz: [
      {
        q: "$R = 40 \\text{ }\\Omega$, $X_{L} = 30 \\text{ }\\Omega$ in series. $Z$ is:",
        options: ["$70 \\text{ }\\Omega$", "$50 \\text{ }\\Omega$", "$10 \\text{ }\\Omega$", "$1200 \\text{ }\\Omega$"],
        answer: 1,
        explanation: "$\\sqrt{40^{2}+30^{2}} = 50 \\text{ }\\Omega$ (3-4-5 triangle).",
      },
      {
        q: "In series RL the current:",
        options: ["Leads the source voltage", "Lags the source voltage", "Is in phase", "Is zero"],
        answer: 1,
        explanation: "Net reactance is inductive, so $I$ lags by $\\phi = \\tan^{-1}(X_{L}/R)$.",
      },
      {
        q: "$V_{R} = 60 \\text{ V}$, $V_{L} = 80 \\text{ V}$ in series. Source voltage is:",
        options: ["$140 \\text{ V}$", "$100 \\text{ V}$", "$20 \\text{ V}$", "$4800 \\text{ V}$"],
        answer: 1,
        explanation: "Quadrature: $\\sqrt{60^{2}+80^{2}} = 100 \\text{ V}$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch19-s5",
    readingTime: 6,
    intro: "Capacitors pass changes and block steady voltage — the mirror of inductors. This section defines capacitance, the charging curve, capacitive reactance $X_{C} = 1/(2\\pi fC)$, and the energy $\\tfrac{1}{2}CV^{2}$ in filters, starters, and timing circuits.",
    objectives: [
      "Define $C = Q/V$ (farads) and read capacitor markings",
      "Compute $X_{C} = 1/(2\\pi fC)$ and capacitor current",
      "Explain leading phase and $\\tfrac{1}{2}CV^{2}$ storage",
    ],
    concepts: [
      {
        term: "Capacitance",
        kind: "definition",
        statement: "Capacitance $C = Q/V$ in farads stores $Q$ coulombs per volt; shop parts are $\\mu\\text{F}$, $\\text{nF}$, $\\text{pF}$.",
        detail: "$C = \\epsilon A/d$: broad close plates (or etched foil) maximize farads.",
      },
      {
        term: "Capacitive reactance",
        kind: "theorem",
        statement: "$X_{C} = 1/(2\\pi fC) = 1/\\omega C$ ohms, so $I = V/X_{C}$: high frequency passes, DC is blocked.",
        detail: "A $10 \\mu\\text{F}$ part is $265 \\text{ }\\Omega$ at $60 \\text{ Hz}$ but $0.265 \\text{ }\\Omega$ at $60 \\text{ kHz}$.",
      },
      {
        term: "Current leads voltage",
        kind: "law",
        statement: "In a pure capacitor, current leads voltage by $90^{\\circ}$ — ICE: current (I) leads in C.",
        detail: "Uncharged capacitors initially look like shorts; charged ones look open to DC.",
      },
      {
        term: "Stored energy",
        kind: "theorem",
        statement: "$U = \\tfrac{1}{2}CV^{2}$ sits in the dielectric field; discharge it only through a bleeder or load.",
        detail: "CRT and microwave capacitors hold lethal joules after unplugging — short with a rated probe.",
      },
      {
        term: "Capacitor jobs",
        kind: "insight",
        statement: "Coupling, bypass, filtering, timing ($\\tau = RC$), and motor-start phase-shift all exploit frequency-selective $X_{C}$.",
        detail: "Start capacitors unbalance single-phase motors into rotation; run capacitors correct PF.",
      },
    ],
    examples: [
      {
        title: "Coupling capacitor at 60 Hz",
        problem: "A $10.0 \\mu\\text{F}$ capacitor sees $12.0 \\text{ V}$ rms at $60.0 \\text{ Hz}$. Find $X_{C}$ and $I$.",
        steps: [
          { label: "Step 1: Reactance", text: "$X_{C} = 1/(2\\pi \\times 60.0 \\times 10.0 \\times 10^{-6}) = 265 \\text{ }\\Omega$." },
          { label: "Step 2: Current", text: "$I = 12.0/265 = 45.3 \\text{ mA}$ leading $90^{\\circ}$." },
        ],
        result: "$265 \\text{ }\\Omega$; $45.3 \\text{ mA}$ leading.",
      },
      {
        title: "Stored energy check",
        problem: "A $470 \\mu\\text{F}$, $200 \\text{ V}$ supply capacitor is fully charged. Find stored energy.",
        steps: [
          { label: "Step 1: Apply $U = CV^{2}/2$", text: "$U = 0.5(470 \\times 10^{-6})(200)^{2} = 9.40 \\text{ J}$." },
        ],
        result: "$9.40 \\text{ J}$ — a painful, sparking discharge; bleed before touching.",
      },
    ],
    keyTakeaways: [
      "$X_{C} = 1/(2\\pi fC)$; capacitors pass highs and block DC.",
      "Current leads voltage $90^{\\circ}$ in pure $C$.",
      "Energy $\\tfrac{1}{2}CV^{2}$ demands bleeder-resistor safety.",
    ],
    quiz: [
      {
        q: "Doubling frequency through a fixed capacitor:",
        options: ["Doubles $X_{C}$", "Halves $X_{C}$", "Leaves $X_{C}$ unchanged", "Blocks all current"],
        answer: 1,
        explanation: "$X_{C} \\propto 1/f$, so twice $f$ means half the reactance.",
      },
      {
        q: "In a pure capacitor, current:",
        options: ["Lags voltage $90^{\\circ}$", "Leads voltage $90^{\\circ}$", "Is in phase", "Is always zero"],
        answer: 1,
        explanation: "Charging current peaks before voltage builds — ICE.",
      },
      {
        q: "A capacitor blocks DC because in steady state it is:",
        options: ["A short", "An open (charged to source voltage)", "A resistor of $0 \\text{ }\\Omega$", "An inductor"],
        answer: 1,
        explanation: "Once charged, no loop current flows; only changing voltage moves charge.",
      },
    ],
  },
  {
    sectionId: "ewen-ch19-s6",
    readingTime: 6,
    intro: "Resistance plus capacitance in series gives a leading phase and a frequency-dependent impedance. This section computes $Z = \\sqrt{R^{2}+X_{C}^{2}}$, splits $V_{R}$ and $V_{C}$, and applies RC behavior to filters and phase-shift starters.",
    objectives: [
      "Compute $X_{C}$, $Z = \\sqrt{R^{2}+X_{C}^{2}}$, $I$, and leading $\\phi$",
      "Split series voltages in quadrature",
      "Explain RC high-pass behavior and timing $\\tau = RC$",
    ],
    concepts: [
      {
        term: "RC impedance",
        kind: "theorem",
        statement: "Series $R$–$C$ presents $Z = \\sqrt{R^{2} + X_{C}^{2}}$ at $\\phi = \\tan^{-1}(X_{C}/R)$ leading (current ahead).",
        detail: "Low frequencies (big $X_{C}$) dominate $Z$; highs pass nearly through $R$ alone.",
      },
      {
        term: "Quadrature voltages",
        kind: "method",
        statement: "$V_{R} = IR$ in phase with $I$, $V_{C} = IX_{C}$ lagging $I$ by $90^{\\circ}$; $V_{T} = \\sqrt{V_{R}^{2}+V_{C}^{2}}$.",
        detail: "The capacitor voltage always trails the resistor voltage by a quarter cycle.",
      },
      {
        term: "RC phase lead",
        kind: "notation",
        statement: "$\\cos\\phi = R/Z$ (leading power factor); $\\sin\\phi = X_{C}/Z$.",
        detail: "Motor-run capacitors use this lead to offset inductive lag plant-wide.",
      },
      {
        term: "High-pass trend",
        kind: "insight",
        statement: "Series-$C$ output across $R$ grows with frequency — a high-pass filter passing treble, blocking bass and DC.",
        detail: "Speaker crossovers and scope inputs are this divider with frequency-dependent $X_{C}$.",
      },
      {
        term: "RC time constant",
        kind: "theorem",
        statement: "DC charging follows $\\tau = RC$: $63\\%$ charged in one $\\tau$, ~$99\\%$ in five.",
        detail: "A $10 \\text{ k}\\Omega$, $100 \\mu\\text{F}$ timer reaches full volts in about $5 \\text{ s}$.",
      },
    ],
    figures: [
      {
        caption: "RC series phasors: $V_{R}$ with $I$, $V_{C}$ lagging $90^{\\circ}$; $V_{T}$ is the quadrature sum and $I$ leads.",
        svg: "<svg role='img' aria-label='RC series phasors: V_R with I, V_C lagging 90^circ; V_T is the quadrature sum and I leads.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"60\" y1=\"150\" x2=\"340\" y2=\"150\"/><line x1=\"60\" y1=\"150\" x2=\"300\" y2=\"150\"/><line x1=\"300\" y1=\"150\" x2=\"300\" y2=\"70\"/><line x1=\"60\" y1=\"150\" x2=\"300\" y2=\"70\" stroke-dasharray=\"6 4\"/><text x=\"170\" y=\"145\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">VR (with I)</text><text x=\"310\" y=\"110\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">VC down</text><text x=\"150\" y=\"90\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">VT hypotenuse</text></svg>",
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "RC series at line frequency",
        problem: "$R = 150 \\text{ }\\Omega$ in series with $C = 22.0 \\mu\\text{F}$ at $24.0 \\text{ V}$, $60.0 \\text{ Hz}$. Find $Z$, $I$, and voltages.",
        steps: [
          { label: "Step 1: Reactance", text: "$X_{C} = 1/(2\\pi \\times 60.0 \\times 22.0 \\times 10^{-6}) = 121 \\text{ }\\Omega$." },
          { label: "Step 2: Impedance and current", text: "$Z = \\sqrt{150^{2}+121^{2}} = 193 \\text{ }\\Omega$; $I = 24.0/193 = 0.124 \\text{ A}$." },
          { label: "Step 3: Split", text: "$V_{R} = 18.6 \\text{ V}$; $V_{C} = 15.0 \\text{ V}$; check $\\sqrt{18.6^{2}+15.0^{2}} = 23.9 \\text{ V}$." },
        ],
        result: "$Z = 193 \\text{ }\\Omega$, $I = 124 \\text{ mA}$ leading $38.9^{\\circ}$.",
      },
      {
        title: "Dimmer-timing constant",
        problem: "A lamp dimmer uses $R = 47 \\text{ k}\\Omega$ and $C = 0.100 \\mu\\text{F}$. Find $\\tau$.",
        steps: [
          { label: "Step 1: Multiply", text: "$\\tau = (47 \\times 10^{3})(0.100 \\times 10^{-6}) = 4.70 \\times 10^{-3} \\text{ s}$." },
        ],
        result: "$4.70 \\text{ ms}$ — a fraction of each $16.7 \\text{ ms}$ half-cycle, ideal for phase control.",
      },
    ],
    keyTakeaways: [
      "Series RC: $Z = \\sqrt{R^{2}+X_{C}^{2}}$, current leads by $\\tan^{-1}(X_{C}/R)$.",
      "Capacitor voltage trails resistor voltage $90^{\\circ}$; sums are quadrature.",
      "RC sections filter highs through and time DC charging by $\\tau = RC$.",
    ],
    quiz: [
      {
        q: "$R = 30 \\text{ }\\Omega$, $X_{C} = 40 \\text{ }\\Omega$ in series. $Z$ is:",
        options: ["$70 \\text{ }\\Omega$", "$50 \\text{ }\\Omega$", "$10 \\text{ }\\Omega$", "$1200 \\text{ }\\Omega$"],
        answer: 1,
        explanation: "$\\sqrt{30^{2}+40^{2}} = 50 \\text{ }\\Omega$.",
      },
      {
        q: "In series RC the current:",
        options: ["Lags the source voltage", "Leads the source voltage", "Is in phase", "Is zero"],
        answer: 1,
        explanation: "Net reactance is capacitive, so $I$ leads by $\\phi$.",
      },
      {
        q: "Raising frequency in series RC (fixed $R$, $C$):",
        options: ["Raises $Z$ toward infinity", "Lowers $Z$ toward $R$", "Leaves $Z$ unchanged", "Reverses the source"],
        answer: 1,
        explanation: "$X_{C} = 1/\\omega C$ shrinks, so $Z = \\sqrt{R^{2}+X_{C}^{2}} \\to R$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch19-s7",
    readingTime: 7,
    intro: "Together in series, inductors and capacitors oppose each other — net reactance $X = X_{L} - X_{C}$ decides the winner. This section builds the full RLC impedance triangle, tracks lag-to-lead transitions, and computes real power.",
    objectives: [
      "Compute net $X = X_{L}-X_{C}$ and $Z = \\sqrt{R^{2}+X^{2}}$",
      "Determine lagging, leading, or resistive phase from the sign of $X$",
      "Draw the impedance/voltage triangles and compute $P = VI\\cos\\phi$",
    ],
    concepts: [
      {
        term: "Net reactance",
        kind: "theorem",
        statement: "$X_{L}$ and $X_{C}$ subtract in series: $X = X_{L} - X_{C}$, positive (inductive) or negative (capacitive).",
        detail: "Equal reactances cancel exactly — the resonance of the next section.",
      },
      {
        term: "RLC impedance",
        kind: "theorem",
        statement: "$Z = \\sqrt{R^{2} + (X_{L}-X_{C})^{2}}$ at $\\phi = \\tan^{-1}((X_{L}-X_{C})/R)$; current lags if $X > 0$, leads if $X < 0$.",
        detail: "One formula covers RL ($X_{C} = 0$), RC ($X_{L} = 0$), and everything between.",
      },
      {
        term: "Voltage triangle",
        kind: "method",
        statement: "$V_{R} = IR$, $V_{L} = IX_{L}$, $V_{C} = IX_{C}$ with $V_{L}$ and $V_{C}$ $180^{\\circ}$ apart; net reactive volts $= |V_{L}-V_{C}|$.",
        detail: "Individual coil/capacitor volts can each exceed the source — cancellation hides them.",
      },
      {
        term: "Real power",
        kind: "theorem",
        statement: "$P = V_{rms}I_{rms}\\cos\\phi = I^{2}R$: reactances borrow energy but burn none.",
        detail: "Minimum current for a given power comes at $\\cos\\phi = 1$.",
      },
      {
        term: "Frequency sweep picture",
        kind: "insight",
        statement: "Below resonance $X_{C}$ wins (leading); above it $X_{L}$ wins (lagging) — sweeping $f$ walks the circuit through both earlier sections.",
        detail: "This sweep intuition is the tuner designer's working model.",
      },
    ],
    examples: [
      {
        title: "Full RLC series calculation",
        problem: "$R = 40.0 \\text{ }\\Omega$, $L = 0.150 \\text{ H}$, $C = 30.0 \\mu\\text{F}$ in series at $120 \\text{ V}$, $60.0 \\text{ Hz}$. Find $Z$, $I$, $\\phi$, $P$.",
        steps: [
          { label: "Step 1: Reactances", text: "$X_{L} = 2\\pi(60.0)(0.150) = 56.5 \\text{ }\\Omega$; $X_{C} = 1/(2\\pi \\times 60.0 \\times 30.0 \\times 10^{-6}) = 88.4 \\text{ }\\Omega$." },
          { label: "Step 2: Net and $Z$", text: "$X = -31.9 \\text{ }\\Omega$; $Z = \\sqrt{40.0^{2}+31.9^{2}} = 51.2 \\text{ }\\Omega$; $I = 2.34 \\text{ A}$." },
          { label: "Step 3: Phase and power", text: "$\\phi = \\tan^{-1}(-31.9/40.0) = -38.6^{\\circ}$ (leading); $P = (2.34)^{2}(40.0) = 219 \\text{ W}$." },
        ],
        result: "$Z = 51.2 \\text{ }\\Omega$, $I = 2.34 \\text{ A}$ leading $38.6^{\\circ}$, $P = 219 \\text{ W}$.",
      },
      {
        title: "Reactive-voltage surprise",
        problem: "Find $V_{L}$ and $V_{C}$ in the previous circuit.",
        steps: [
          { label: "Step 1: Multiply", text: "$V_{L} = (2.34)(56.5) = 132 \\text{ V}$; $V_{C} = (2.34)(88.4) = 207 \\text{ V}$." },
          { label: "Step 2: Net", text: "$207 - 132 = 75 \\text{ V}$ reactive against $V_{R} = 93.6 \\text{ V}$: $\\sqrt{93.6^{2}+75^{2}} = 120 \\text{ V}$." },
        ],
        result: "Each reactive part exceeds the $120 \\text{ V}$ source; opposition cancels most of it.",
      },
    ],
    keyTakeaways: [
      "Net $X = X_{L}-X_{C}$; its sign picks lagging, leading, or resistive.",
      "$Z = \\sqrt{R^{2}+X^{2}}$ with $\\tan\\phi = X/R$.",
      "Reactive volts can exceed source volts yet cancel; only $R$ dissipates.",
    ],
    quiz: [
      {
        q: "$X_{L} = 80 \\text{ }\\Omega$, $X_{C} = 50 \\text{ }\\Omega$, $R = 40 \\text{ }\\Omega$. $Z$ is:",
        options: ["$170 \\text{ }\\Omega$", "$50 \\text{ }\\Omega$", "$90 \\text{ }\\Omega$", "$30 \\text{ }\\Omega$"],
        answer: 1,
        explanation: "$X = 30$; $Z = \\sqrt{40^{2}+30^{2}} = 50 \\text{ }\\Omega$, lagging.",
      },
      {
        q: "If $V_{L} = V_{C}$ in series RLC, the circuit is:",
        options: [" purely inductive", "Purely resistive ($\\phi = 0$)", "Purely capacitive", "Open"],
        answer: 1,
        explanation: "Cancellation leaves $Z = R$ — series resonance, treated next.",
      },
      {
        q: "Real power in series RLC equals:",
        options: ["$I^{2}X_{L}$", "$I^{2}R$", "$I^{2}Z$", "$V^{2}/X_{C}$"],
        answer: 1,
        explanation: "Only resistance converts average power; reactances shuttle it.",
      },
    ],
  },
  {
    sectionId: "ewen-ch19-s8",
    readingTime: 6,
    intro: "When $X_{L} = X_{C}$, a series circuit hits resonance: impedance bottoms at $R$ and current peaks. This section derives $f_{0} = 1/(2\\pi\\sqrt{LC})$, defines $Q$ sharpness, and tunes radios with it.",
    objectives: [
      "State the resonance condition $X_{L} = X_{C}$ and derive $f_{0}$",
      "Compute $f_{0}$ for given $L$, $C$ and select $C$ for a target station",
      "Explain $Q$, bandwidth, and voltage magnification",
    ],
    concepts: [
      {
        term: "Series resonance condition",
        kind: "law",
        statement: "Resonance occurs when $X_{L} = X_{C}$, so $Z_{min} = R$ and current peaks at $I_{max} = V/R$.",
        detail: "Inductive and capacitive volts cancel while each may tower over the source.",
      },
      {
        term: "Resonant frequency",
        kind: "theorem",
        statement: "$2\\pi f_{0}L = 1/(2\\pi f_{0}C)$ gives $f_{0} = 1/(2\\pi\\sqrt{LC})$.",
        detail: "Larger $L$ or $C$ tunes lower — the product $LC$ sets the station.",
      },
      {
        term: "Q and bandwidth",
        kind: "definition",
        statement: "Quality factor $Q = X_{L0}/R = f_{0}/\\Delta f$ measures sharpness; bandwidth $\\Delta f$ spans the half-power points.",
        detail: "High-$Q$ coils select one station; low-$Q$ circuits pass a band.",
      },
      {
        term: "Voltage magnification",
        kind: "insight",
        statement: "At resonance $V_{L} = V_{C} = QV_{source}$: a $Q$ of $50$ turns $2 \\text{ V}$ into $100 \\text{ V}$ across the coil.",
        detail: "Ratings must survive these hidden volts — a classic technician trap.",
      },
      {
        term: "Tuning application",
        kind: "insight",
        statement: "Antenna plus variable capacitor sweeps $f_{0}$ across the band; only the resonant station develops big signal volts.",
        detail: "Every analog tuner is a high-$Q$ series (or parallel) resonator with a knob on $C$.",
      },
    ],
    figures: [
      {
        caption: "Series resonance: current peaks where $X_{L} = X_{C}$ ($f_{0}$); higher $Q$ means a narrower, taller peak.",
        svg: "<svg role='img' aria-label='Series resonance: current peaks where X_L = X_C (f_0); higher Q means a narrower, taller peak.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><line x1=\"40\" y1=\"160\" x2=\"370\" y2=\"160\"/><line x1=\"40\" y1=\"160\" x2=\"40\" y2=\"20\"/><path d=\"M40 155 Q150 150 200 50 Q250 150 360 155\"/><path d=\"M40 155 Q170 150 200 100 Q230 150 360 155\" stroke-dasharray=\"6 4\"/><line x1=\"200\" y1=\"50\" x2=\"200\" y2=\"160\" stroke-dasharray=\"4 4\"/><text x=\"205\" y=\"175\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">f0</text><text x=\"250\" y=\"60\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">high Q</text><text x=\"250\" y=\"110\" font-size=\"12\" fill=\"currentColor\" stroke=\"none\">low Q</text></svg>",
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Tuner resonant frequency",
        problem: "A tuner has $L = 250 \\mu\\text{H}$ and $C = 100 \\text{ pF}$. Find $f_{0}$.",
        steps: [
          { label: "Step 1: Product", text: "$LC = (250 \\times 10^{-6})(100 \\times 10^{-12}) = 2.50 \\times 10^{-14}$." },
          { label: "Step 2: Formula", text: "$f_{0} = 1/(2\\pi\\sqrt{2.50 \\times 10^{-14}}) = 1/(2\\pi \\times 1.581 \\times 10^{-7}) = 1.01 \\times 10^{6} \\text{ Hz}$." },
        ],
        result: "$1.01 \\text{ MHz}$ — mid-AM band.",
      },
      {
        title: "Capacitor for a station",
        problem: "With $L = 250 \\mu\\text{H}$, what $C$ resonates at $990 \\text{ kHz}$?",
        steps: [
          { label: "Step 1: Invert", text: "$C = 1/((2\\pi f_{0})^{2}L)$." },
          { label: "Step 2: Evaluate", text: "$(2\\pi \\times 9.90 \\times 10^{5})^{2} = 3.87 \\times 10^{13}$; $C = 1/(3.87 \\times 10^{13} \\times 250 \\times 10^{-6}) = 1.03 \\times 10^{-10} \\text{ F}$." },
        ],
        result: "$103 \\text{ pF}$ (trimmer range covers it).",
      },
    ],
    keyTakeaways: [
      "$X_{L} = X_{C}$ defines resonance with $f_{0} = 1/(2\\pi\\sqrt{LC})$.",
      "At $f_{0}$, $Z = R$ and current peaks; $V_{L} = V_{C} = QV$.",
      "$Q = f_{0}/\\Delta f$ trades selectivity against bandwidth.",
    ],
    quiz: [
      {
        q: "Doubling both $L$ and $C$ changes $f_{0}$ by:",
        options: ["$2\\times$", "$4\\times$", "$1/2\\times$", "$1/4\\times$"],
        answer: 2,
        explanation: "$f_{0} \\propto 1/\\sqrt{LC}$; $\\sqrt{4} = 2$ in the denominator.",
      },
      {
        q: "At series resonance the impedance is:",
        options: ["Infinite", "Minimum and equal to $R$", "Zero always", "Purely reactive"],
        answer: 1,
        explanation: "Cancellation leaves only resistance, so current is maximal.",
      },
      {
        q: "A circuit has $f_{0} = 1000 \\text{ kHz}$, $Q = 50$. Bandwidth is:",
        options: ["$50{,}000 \\text{ kHz}$", "$20 \\text{ kHz}$", "$50 \\text{ Hz}$", "$1000 \\text{ kHz}$"],
        answer: 1,
        explanation: "$\\Delta f = f_{0}/Q = 20 \\text{ kHz}$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch19-s9",
    readingTime: 6,
    intro: "Diodes convert AC to DC (rectification) and transistors boost signals (amplification) — the two electronic operations behind every supply and radio. This section traces half- and full-wave rectifiers with filters, and the transistor's current gain.",
    objectives: [
      "Trace half-wave, full-wave, and bridge rectifiers with filter action",
      "Compute average/DC levels and ripple trends",
      "Explain transistor amplification as $I_{C} = \\beta I_{B}$ control",
    ],
    concepts: [
      {
        term: "pn-junction diode",
        kind: "definition",
        statement: "A diode conducts forward (anode above cathode by ~$0.700 \\text{ V}$) and blocks reverse — a one-way valve for current.",
        detail: "Silicon $0.700 \\text{ V}$, germanium $0.300 \\text{ V}$, LED $1.5$–$3 \\text{ V}$ forward drops.",
      },
      {
        term: "Half-wave rectifier",
        kind: "method",
        statement: "One diode passes one lobe: average DC $\\approx 0.318V_{max}$ before filtering, with $60 \\text{ Hz}$ ripple.",
        detail: "Cheapest supply; wastes half the transformer cycle.",
      },
      {
        term: "Full-wave and bridge",
        kind: "method",
        statement: "Center-tap (two diodes) or bridge (four) passes both lobes: $\\approx 0.636V_{max}$ average with $120 \\text{ Hz}$ ripple.",
        detail: "Doubled pulse rate halves ripple and eases filtering — the standard bench supply.",
      },
      {
        term: "Capacitor filter",
        kind: "method",
        statement: "A reservoir capacitor charges to $V_{max}$ and coasts between pulses; bigger $C$ or load $R$ means smaller ripple $\\approx I/(fC)$.",
        detail: "Regulators (Zener, 78xx) then pin the filtered volts rock-steady.",
      },
      {
        term: "Transistor amplification",
        kind: "insight",
        statement: "A small base current controls a large collector current, $I_{C} = \\beta I_{B}$ with $\\beta \\approx 50$–$300$.",
        detail: "Biased into the active region, millivolt base signals swing volt-level collector outputs — radio reception made audible.",
      },
    ],
    figures: [
      {
        caption: "Bridge rectifier: four diodes steer both lobes into one polarity; the reservoir capacitor smooths ripple.",
        svg: "<svg role='img' aria-label='Bridge rectifier: four diodes steer both lobes into one polarity; the reservoir capacitor smooths ripple.' viewBox=\"0 0 400 200\" width=\"100%\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><polygon points=\"200,50 260,100 200,150 140,100\"/><line x1=\"140\" y1=\"100\" x2=\"90\" y2=\"100\"/><line x1=\"260\" y1=\"100\" x2=\"310\" y2=\"100\"/><line x1=\"200\" y1=\"50\" x2=\"200\" y2=\"30\"/><line x1=\"200\" y1=\"150\" x2=\"200\" y2=\"170\"/><line x1=\"90\" y1=\"100\" x2=\"90\" y2=\"170\"/><line x1=\"310\" y1=\"100\" x2=\"310\" y2=\"170\"/><line x1=\"90\" y1=\"170\" x2=\"310\" y2=\"170\"/><text x=\"60\" y=\"90\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">AC in</text><text x=\"230\" y=\"165\" font-size=\"11\" fill=\"currentColor\" stroke=\"none\">DC + filter out</text></svg>",
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Bridge-supply DC level",
        problem: "A $12.6 \\text{ V}$ rms transformer feeds a bridge rectifier with capacitor filter (ignore diode drops). Estimate peak DC output.",
        steps: [
          { label: "Step 1: Peak secondary", text: "$V_{max} = 12.6\\sqrt{2} = 17.8 \\text{ V}$." },
          { label: "Step 2: Bridge drops", text: "Two diodes conduct: $17.8 - 1.40 = 16.4 \\text{ V}$ peak filtered DC." },
        ],
        result: "About $16.4 \\text{ V}$ DC (unregulated).",
      },
      {
        title: "Ripple estimate",
        problem: "A full-wave $120 \\text{ Hz}$ supply draws $0.500 \\text{ A}$ from a $2200 \\mu\\text{F}$ filter. Estimate ripple.",
        steps: [
          { label: "Step 1: Apply $V_{r} \\approx I/fC$", text: "$V_{r} = 0.500/(120 \\times 2200 \\times 10^{-6}) = 1.89 \\text{ V}$ peak-to-peak." },
        ],
        result: "$1.9 \\text{ V}$ ripple on ~$16 \\text{ V}$ DC — regulator territory.",
      },
    ],
    keyTakeaways: [
      "Diodes rectify: half-wave uses one lobe, bridge uses both with $120 \\text{ Hz}$ ripple.",
      "Reservoir capacitors hold peaks; ripple falls with bigger $C$ and lighter load.",
      "Transistors amplify by $\\beta$: tiny base current steers large collector current.",
    ],
    quiz: [
      {
        q: "A bridge rectifier's ripple frequency on $60 \\text{ Hz}$ mains is:",
        options: ["$30 \\text{ Hz}$", "$60 \\text{ Hz}$", "$120 \\text{ Hz}$", "$0 \\text{ Hz}$"],
        answer: 2,
        explanation: "Both lobes pulse: twice the line frequency.",
      },
      {
        q: "Enlarging the filter capacitor:",
        options: ["Raises ripple", "Lowers ripple", "Changes frequency", "Destroys diodes"],
        answer: 1,
        explanation: "More farads coast longer between pulses: $V_{r} \\approx I/fC$ shrinks.",
      },
      {
        q: "A transistor with $\\beta = 100$ and $I_{B} = 0.200 \\text{ mA}$ gives $I_{C}$ about:",
        options: ["$0.002 \\text{ mA}$", "$20.0 \\text{ mA}$", "$100 \\text{ A}$", "$0.200 \\text{ mA}$"],
        answer: 1,
        explanation: "$I_{C} = \\beta I_{B} = 100 \\times 0.200 = 20.0 \\text{ mA}$.",
      },
    ],
  },
  {
    sectionId: "ewen-ch19-s10",
    readingTime: 5,
    intro: "Wall power arrives as three-phase $120/208$ or $277/480 \\text{ V}$ generated by giant rotating-field alternators. This section tours commercial generation, wye/delta connections, and the transformer chain to the outlet.",
    objectives: [
      "Describe three-phase generation and its smooth-power advantage",
      "Distinguish wye ($V_{L} = \\sqrt{3}V_{\\phi}$) from delta connections",
      "Trace the step-up/step-down chain from plant to branch circuit",
    ],
    concepts: [
      {
        term: "Three-phase generation",
        kind: "definition",
        statement: "Three windings $120^{\\circ}$ apart produce three sines whose total instantaneous power is constant — smooth torque for motors.",
        detail: "Single-phase pulses at $120 \\text{ Hz}$; three-phase sums flat.",
      },
      {
        term: "Wye connection",
        kind: "theorem",
        statement: "Wye gives neutral plus line voltage $V_{L} = \\sqrt{3}V_{\\phi}$: $120^{\\circ}$ phases at $120 \\text{ V}$ yield $208 \\text{ V}$ line-to-line.",
        detail: "Offices use $120/208 \\text{ V}$ wye: $120 \\text{ V}$ outlets plus $208 \\text{ V}$ HVAC from one service.",
      },
      {
        term: "Delta connection",
        kind: "theorem",
        statement: "Delta loops three windings with line voltage equal to phase voltage and higher line current ($I_{L} = \\sqrt{3}I_{\\phi}$).",
        detail: "Industrial $480 \\text{ V}$ delta drives heavy motors; corner grounding is a variant.",
      },
      {
        term: "Transformer chain",
        kind: "method",
        statement: "Plants step up to hundreds of kV for transmission, substations step down to distribution (~$7$–$35 \\text{ kV}$), pole transformers finish to $120/240 \\text{ V}$.",
        detail: "Each stage trades volts for amps at ~$99\\%$ efficiency per large transformer.",
      },
      {
        term: "Three-phase power",
        kind: "theorem",
        statement: "$P = \\sqrt{3}V_{L}I_{L}\\cos\\phi$ for balanced loads: three wires carry $\\sqrt{3}$ times one phase's $VI$.",
        detail: "Balanced neutrals carry ~zero; harmonics and imbalance load them — modern survey concern.",
      },
    ],
    examples: [
      {
        title: "Wye service voltages",
        problem: "A wye service provides $277 \\text{ V}$ phase. Find line voltage.",
        steps: [
          { label: "Step 1: Multiply by $\\sqrt{3}$", text: "$V_{L} = 1.732 \\times 277 = 480 \\text{ V}$." },
        ],
        result: "$480 \\text{ V}$ line-to-line — the $277/480 \\text{ V}$ commercial standard.",
      },
      {
        title: "Three-phase motor current",
        problem: "A $10.0 \\text{ kW}$, $208 \\text{ V}$ three-phase motor runs at $\\cos\\phi = 0.850$. Find line current.",
        steps: [
          { label: "Step 1: Invert $P = \\sqrt{3}V_{L}I_{L}\\cos\\phi$", text: "$I_{L} = 10{,}000/(1.732 \\times 208 \\times 0.850) = 32.7 \\text{ A}$." },
        ],
        result: "$32.7 \\text{ A}$ per line.",
      },
    ],
    keyTakeaways: [
      "Three phases $120^{\\circ}$ apart deliver constant total power.",
      "Wye: $V_{L} = \\sqrt{3}V_{\\phi}$ with neutral; delta: $V_{L} = V_{\\phi}$ without.",
      "Transformers step plant kilovolts down to outlet volts in stages.",
    ],
    quiz: [
      {
        q: "A $120 \\text{ V}$-phase wye gives line voltage about:",
        options: ["$120 \\text{ V}$", "$208 \\text{ V}$", "$69 \\text{ V}$", "$360 \\text{ V}$"],
        answer: 1,
        explanation: "$\\sqrt{3} \\times 120 = 208 \\text{ V}$.",
      },
      {
        q: "Three-phase motors run smoother than single-phase because:",
        options: ["They use DC", "Total instantaneous power is constant", "They have no magnets", "Voltage is lower"],
        answer: 1,
        explanation: "The three $120^{\\circ}$-offset $\\sin^{2}$ pulses sum to a flat total.",
      },
      {
        q: "Transmission uses extra-high voltage to:",
        options: ["Increase frequency", "Cut $I^{2}R$ losses for fixed power", "Eliminate transformers", "Lightning-proof lines"],
        answer: 1,
        explanation: "Same megawatts at higher $V$ need less $I$; losses fall with $I^{2}$.",
      },
    ],
  },
]
