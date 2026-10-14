import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 26
// Current and Resistance — sections 26-1 … 26-5 (ids hall-ch26-s1 … s5)
// Constants: e = 1.602×10⁻¹⁹ C; copper: n = 8.49×10²⁸ m⁻³,
// ρ = 1.69×10⁻⁸ Ω·m at 20 °C, α = 3.93×10⁻³ /K.
// ============================================================================

export const hallCh26Content: SectionContent[] = [
  // ------------------------------------------------------------------ 26-1
  {
    sectionId: 'hall-ch26-s1',
    readingTime: 6,
    intro: "Everything so far has been electrostatics — charges sitting still. The moment they move, you have a current, and physics acquires its most practical quantity: lightning is a current of 30 kiloamperes, the nerve impulse reading this sentence is a current of nanoamperes, and the household wall offers 15 amperes on demand. This section defines current as a rate of charge flow and fixes the sign conventions that the rest of the book will ride on.",
    objectives: [
      'Define current by $i = dq/dt$ and use the ampere',
      'Explain the conventional-current direction and its relation to electron flow in metals',
      'Compute charge transferred and number of carriers from a steady current',
    ],
    concepts: [
      {
        term: 'Electric current',
        kind: 'definition',
        statement: "**The current through a surface is the rate at which charge crosses it:** $$i = \\frac{dq}{dt}.$$ A current of one **ampere** ($1\\ \\mathrm{A} = 1\\ \\mathrm{C/s}$) means one coulomb of charge passes each second.",
        detail: 'Current is defined for any surface — usually a cross-section of a wire. If the flow is steady, $q = it$; if it varies, integrate: $q = \\int i\\,dt$.',
      },
      {
        term: 'Conventional current direction',
        kind: 'notation',
        statement: "**Current is drawn in the direction positive charge would move.** In metals the actual carriers are electrons, so the electron flow is opposite to the arrow; the two conventions give identical results and the positive direction is always the one used in circuit diagrams and equations.",
        detail: 'The convention predates the discovery of the electron and survives because it makes no difference: a stream of negative charges moving east is electrically identical to a stream of positive charges moving west.',
      },
      {
        term: 'Current is a scalar',
        kind: 'insight',
        statement: "**Despite flowing “along” a wire, current has no direction of its own — it is a scalar with a sign.** At a junction, currents add algebraically; assigning each branch an arrow is bookkeeping, and the arrow can be chosen wrong without harm.",
        detail: 'The properly directional quantity is the current density $\\vec J$ of the next section; integrate it through a cross-section and the result is the scalar $i$.',
      },
      {
        term: 'A closed loop is required',
        kind: 'insight',
        statement: "**Steady current flows only in a closed conducting path.** A switch that opens the loop stops the flow everywhere at once (at the speed at which the field reorganizes, essentially instantly).",
        detail: 'In the steady state a wire stays neutral: the rate of electrons entering any piece of wire equals the rate leaving, or charge — and therefore the enormous electric forces of imbalance — would build without limit.',
      },
      {
        term: "Electric Current: solution protocol",
        kind: "method",
        statement: "**Solve Electric Current problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is current, resistivity and Ohmic conduction; the working equation is $i = dq/dt$, $J = i/A$, $R = \\rho L/A$, $V = iR$, $P = iV$; every substitution must carry its units so the final unit (amperes, ohms, watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $i\\sim 1\\ \\text{A}$, $v_d\\sim 10^{-4}\\ \\text{m/s}$; $\\rho_{\\text{Cu}} \\approx 1.7\\times 10^{-8}\\ \\Omega\\cdot\\text{m}$; Ohmic, steady temperature; $V = iR$ describes the device.",
      },
    ],
    examples: [
      {
        title: 'From lightning to a camera flash',
        problem: '(a) A lightning stroke carries roughly $3.0\\times 10^{4}$ A for $100\\ \\mu\\mathrm{s}$. How much charge is delivered? (b) A camera-flash capacitor discharges $0.60$ C through the flash tube in $3.0$ s at essentially constant current. What is the current, and how many electrons per second pass a point in the circuit?',
        steps: [
          { label: 'Lightning charge', text: '$q = it = (3.0\\times 10^{4}\\ \\mathrm{A})(1.0\\times 10^{-4}\\ \\mathrm{s}) = 3.0$ C — the charge of only a few billionths of a coulomb per meter of channel, but delivered violently.' },
          { label: 'Flash current', text: '$i = q/t = 0.60/3.0 = 0.20$ A.' },
          { label: 'Electrons per second', text: '$n/t = i/e = 0.20/(1.602\\times 10^{-19}) = 1.2\\times 10^{18}$ electrons per second.' },
        ],
        result: 'Lightning moves about 3.0 C; the flash carries 0.20 A, a parade of $1.2\\times 10^{18}$ electrons per second.',
      },
      {
        title: "Electric Current: copper-wire check",
        problem: "A copper wire ($\\rho = 1.7\\times 10^{-8}\\ \\Omega\\cdot\\text{m}$) has $L = 20\\ \\text{m}$, $A = 1.0\\ \\text{mm}^2$. Find $R = \\rho L/A$ and $I$ at $1.5\\ \\text{V}$.",
        steps: [
          { label: "Resistance", text: "$R = 1.7\\times 10^{-8}\\times 20/10^{-6} = 0.34\\ \\Omega$." },
          { label: "Current", text: "$I = V/R = 1.5/0.34 = 4.41\\ \\text{A}$." },
        ],
        result: "$R \\approx 0.34\\ \\Omega$; $I \\approx 4.41\\ \\text{A}$.",
      },
    ],
    keyTakeaways: [
      'Current is charge flow rate: $i = dq/dt$, with $1\\ \\mathrm{A} = 1\\ \\mathrm{C/s}$.',
      'Arrows mark conventional (positive) current; electron flow in metals runs opposite to the arrows.',
      'Current is a scalar, and steady current demands a closed, neutral loop.',
    ],
    quiz: [
      {
        q: 'A steady current of 4.0 A flows for 2.0 minutes. The total charge transferred is:',
        options: ['480 C', '8.0 C', '120 C', '240 C'],
        answer: 0,
        explanation: '$q = it = (4.0)(120\\ \\mathrm{s}) = 480$ C.',
      },
      {
        q: 'In a copper wire carrying conventional current to the east, the electrons drift:',
        options: ['east', 'west', 'neither — they only spin in place', 'randomly, with no average drift'],
        answer: 1,
        explanation: 'Negative carriers moving west are equivalent to positive current moving east; the electron drift is opposite the conventional arrow.',
      },
      {
        q: 'The SI unit of electric current is:',
        options: ['the coulomb', 'the volt per meter', 'the ampere, one coulomb per second', 'the joule per coulomb'],
        answer: 2,
        explanation: 'Current = charge/time, so its unit is the ampere, defined as one coulomb per second.',
      },
      {
        q: 'Which statement about current in a wire at steady state is correct?',
        options: ['The wire becomes progressively negatively charged', 'Charge enters and leaves any segment at equal rates', 'Current stops in some segments while continuing in others', 'The wire heats until it becomes neutral'],
        answer: 1,
        explanation: 'A steady current implies charge conservation everywhere: inflow matches outflow, so the wire stays neutral.',
      },
    ],
  },

  // ------------------------------------------------------------------ 26-2
  {
    sectionId: 'hall-ch26-s2',
    readingTime: 7,
    intro: "Two wires of different thickness carry different currents from the same battery, yet something about the flow is the same. That something is the current density — charge crossing per square meter per second — and tying it to the microscopic picture (how many carriers, how fast they drift) reveals the astonishing gap between the slow shuffle of electrons and the near-instant response of the circuit.",
    objectives: [
      'Define current density $J = i/A$ (uniform case) and the flux form $i = \\int \\vec J\\cdot d\\vec A$',
      'Relate drift speed, carrier density and current: $J = nev_d$',
      'Estimate drift speeds in metals and reconcile them with the instant response of circuits',
    ],
    concepts: [
      {
        term: 'Current density',
        kind: 'definition',
        statement: "**Current density is current per unit cross-sectional area.** For uniform flow, $$J = \\frac{i}{A} \\quad (\\mathrm{A/m^2}),$$ and it is treated as a vector $\\vec J$ along the (conventional) flow. In general $i = \\int \\vec J\\cdot d\\vec A$ over any surface.",
        detail: 'A household wire carrying 10 A in $1.3\\ \\mathrm{mm^2}$ of copper has $J \\approx 7.7\\times 10^{6}\\ \\mathrm{A/m^2}$; fuses blow when $J$ in their thin spot exceeds the metal\u2019s tolerance.',
      },
      {
        term: 'Drift speed',
        kind: 'law',
        statement: "**Counting the carriers passing a cross-section gives** $$\\vec J = ne\\vec v_d,$$ where $n$ is the conduction-electron number density and $v_d$ the drift speed — the tiny average velocity superimposed on the electrons\u2019 fast random motion.",
        detail: 'For copper $n = 8.49\\times 10^{28}\\ \\mathrm{m^{-3}}$, about one conduction electron per atom. Carriers can also be positive (ions in electrolytes, holes in semiconductors); the formula generalizes with the appropriate sign bookkeeping.',
      },
      {
        term: 'Drift is astonishingly slow',
        kind: 'insight',
        statement: "**Typical drift speeds are a fraction of a millimeter per second** — yet the lamp lights the instant you flip the switch, because what propagates is the electric field (near light speed) that tells every electron at once to start drifting.",
        detail: 'The analogy is water in a full pipe: opening a valve sends pressure waves at the speed of sound, while the water itself crawls.',
      },
      {
        term: 'Charge conservation at a junction',
        kind: 'law',
        statement: "**In the steady state, the total current density flux out of any closed surface is zero — what flows in must flow out.** At a wire junction, $\\sum i_{\\mathrm{in}} = \\sum i_{\\mathrm{out}}$.",
        detail: 'This is the junction rule of Chapter 27, and it is the reason a river of charge never piles up like snowdrifts anywhere in a circuit.',
      },
      {
        term: "Current Density: solution protocol",
        kind: "method",
        statement: "**Solve Current Density problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is current, resistivity and Ohmic conduction; the working equation is $i = dq/dt$, $J = i/A$, $R = \\rho L/A$, $V = iR$, $P = iV$; every substitution must carry its units so the final unit (amperes, ohms, watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $i\\sim 1\\ \\text{A}$, $v_d\\sim 10^{-4}\\ \\text{m/s}$; $\\rho_{\\text{Cu}} \\approx 1.7\\times 10^{-8}\\ \\Omega\\cdot\\text{m}$; Ohmic, steady temperature; $V = iR$ describes the device.",
      },
    ],
    examples: [
      {
        title: 'How fast do the electrons actually move?',
        problem: 'A copper wire of cross-section $1.0\\ \\mathrm{mm^2}$ carries a current of 1.0 A. Copper has $n = 8.49\\times 10^{28}$ conduction electrons per $\\mathrm{m^3}$. Find (a) the current density, (b) the drift speed, and (c) the time one electron needs to drift 1.0 m.',
        steps: [
          { label: 'Current density', text: '$J = i/A = 1.0/(1.0\\times 10^{-6}) = 1.0\\times 10^{6}\\ \\mathrm{A/m^2}$.' },
          { label: 'Drift speed', text: '$v_d = J/(ne) = (1.0\\times 10^{6})/[(8.49\\times 10^{28})(1.602\\times 10^{-19})] = (1.0\\times 10^{6})/(1.36\\times 10^{10}) = 7.4\\times 10^{-5}\\ \\mathrm{m/s}$.' },
          { label: 'Time to cross', text: '$t = L/v_d = 1.0/(7.4\\times 10^{-5}) \\approx 1.4\\times 10^{4}\\ \\mathrm{s} \\approx 3.8$ hours to drift one meter.' },
          { label: 'Sanity check', text: 'A current of 1 A in copper needs only $i/(ev_d A) = n = 8.49\\times 10^{28}$ carriers per $\\mathrm{m^3}$ — a veritable crowd inching along.' },
        ],
        result: '$J = 1.0\\times 10^{6}\\ \\mathrm{A/m^2}$, $v_d \\approx 7.4\\times 10^{-5}$ m/s — an electron needs nearly four hours to cover one meter.',
      },
      {
        title: "Current Density: copper-wire check",
        problem: "A copper wire ($\\rho = 1.7\\times 10^{-8}\\ \\Omega\\cdot\\text{m}$) has $L = 30\\ \\text{m}$, $A = 1.0\\ \\text{mm}^2$. Find $R = \\rho L/A$ and $I$ at $1.5\\ \\text{V}$.",
        steps: [
          { label: "Resistance", text: "$R = 1.7\\times 10^{-8}\\times 30/10^{-6} = 0.51\\ \\Omega$." },
          { label: "Current", text: "$I = V/R = 1.5/0.51 = 2.94\\ \\text{A}$." },
        ],
        result: "$R \\approx 0.51\\ \\Omega$; $I \\approx 2.94\\ \\text{A}$.",
      },
    ],
    keyTakeaways: [
      'Current density is flow per area: $J = i/A$, vector along conventional current; $i = \\int\\vec J\\cdot d\\vec A$.',
      'Microscopically $J = nev_d$ — carrier density times drift speed times charge.',
      'Drift speeds are $\\sim 10^{-4}$ m/s; circuits respond instantly because fields, not electrons, do the traveling.',
    ],
    quiz: [
      {
        q: 'A wire carries current $i$ with uniform density $J$. If the cross-sectional area is halved while $i$ stays fixed, the current density:',
        options: ['doubles', 'halves', 'is unchanged', 'quadruples'],
        answer: 0,
        explanation: '$J = i/A$, so halving $A$ doubles $J$.',
      },
      {
        q: 'A metal has carrier density $n$ and drift speed $v_d$. The current density is:',
        options: [`$J = nv_d$`, `$J = nev_d$`, `$J = n e/v_d$`, `$J = v_d/(ne)$`],
        answer: 1,
        explanation: 'In time $dt$ a length $v_d\\,dt$ of carriers sweeps each unit area, carrying charge $ne v_d\\,dt$ — hence $J = nev_d$.',
      },
      {
        q: 'A current of 1.0 A flows through copper ($n = 8.49\\times 10^{28}\\ \\mathrm{m^{-3}}$) with measured drift speed $1.0\\times 10^{-4}$ m/s. The wire\u2019s cross-sectional area is about:',
        options: ['$1.4\\times 10^{-6}$ m²', '$1.4\\times 10^{-3}$ m²', '$8.5\\times 10^{3}$ m²', '$7.4\\times 10^{-5}$ m²'],
        answer: 0,
        explanation: '$A = i/(nev_d) = 1.0/[(8.49\\times 10^{28})(1.602\\times 10^{-19})(1.0\\times 10^{-4})] \\approx 1.4\\times 10^{-6}\\ \\mathrm{m^2}$ — about a square millimeter.',
      },
      {
        q: 'Why does a desk lamp light immediately when the switch closes, even though electrons drift at ~0.1 mm/s?',
        options: ['Electrons travel at light speed', 'The electric field establishing the drift propagates through the circuit almost instantly', 'The switch shoots electrons across the gap', 'Vacuum in the wire carries the light'],
        answer: 1,
        explanation: 'Closing the switch reorganizes the electric field (near light speed); every electron in the loop starts drifting at once.',
      },
    ],
  },

  // ------------------------------------------------------------------ 26-3
  {
    sectionId: 'hall-ch26-s3',
    readingTime: 7,
    intro: "Push a current through any real conductor and the material pushes back: it takes voltage to sustain flow, and the ratio — resistance — is the everyday handle by which circuits are engineered. Resistance depends on shape, but divided by shape it becomes resistivity, a fingerprint of the material itself, varying by thirty orders of magnitude from silver to glass and shifting measurably with temperature.",
    objectives: [
      'Define resistance $R = V/i$ and compute it from resistivity via $R = \\rho L/A$',
      'Distinguish resistance (a property of an object) from resistivity (a property of a material)',
      'Apply the temperature dependence $\\rho = \\rho_0[1 + \\alpha(T - T_0)]$, including negative-$\\alpha$ semiconductors',
    ],
    concepts: [
      {
        term: 'Resistance',
        kind: 'definition',
        statement: "**The resistance of an object is the potential difference required per ampere of current through it:** $$R = \\frac{V}{i}, \\quad 1\\ \\Omega = 1\\ \\mathrm{V/A}.$$ Its reciprocal, $G = 1/R$, is the conductance (siemens).",
        detail: 'Resistance lumps together everything about an object — material, shape, and (via resistivity) temperature. A “100 Ω resistor” is a manufactured object whose value holds near its nominal over normal conditions.',
      },
      {
        term: 'Resistivity',
        kind: 'definition',
        statement: "**For a uniform slab of length $L$ and cross-section $A$, resistance scales as** $$R = \\frac{\\rho L}{A},$$ where the **resistivity** $\\rho$ depends only on the material and temperature. The conductivity is $\\sigma = 1/\\rho$ (note the symbol — not surface charge here).",
        detail: 'Double the length, double the resistance; double the area, halve it. Inverse-square dependence on wire diameter is why long power runs use thick copper.',
      },
      {
        term: 'The material spectrum',
        kind: 'insight',
        statement: "**Resistivities at room temperature span over 30 orders of magnitude.** Silver is best ($1.62\\times 10^{-8}\\ \\Omega\\cdot\\mathrm{m}$), copper a whisker behind ($1.69\\times 10^{-8}$), nichrome $\\sim 60\\times$ copper ($1.0\\times 10^{-6}$), and insulators like glass $10^{10}$–$10^{14}\\ \\Omega\\cdot\\mathrm{m}$.",
        detail: 'Semiconductors sit in between (silicon $\\sim 10^{3}$, highly purity- and doping-dependent — the knob from which all transistor action is carved). Metals differ among themselves by less than a factor of two; the interesting engineering happens in the extremes.',
      },
      {
        term: 'Temperature dependence',
        kind: 'law',
        statement: "**Over a wide range near room temperature** $$\\rho(T) = \\rho_0[1 + \\alpha(T - T_0)],$$ with the temperature coefficient $\\alpha$ about $4\\times 10^{-3}/\\mathrm{K}$ for pure metals (copper: $3.93\\times 10^{-3}$).",
        detail: 'In metals, heating intensifies lattice vibrations and shortens the electrons\u2019 free flights, raising $\\rho$. In semiconductors heat frees more carriers, so $\\alpha$ is negative. Below a critical temperature some materials lose all resistivity — superconductivity.',
      },
      {
        term: "Resistance and Resistivity: solution protocol",
        kind: "method",
        statement: "**Solve Resistance and Resistivity problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is current, resistivity and Ohmic conduction; the working equation is $i = dq/dt$, $J = i/A$, $R = \\rho L/A$, $V = iR$, $P = iV$; every substitution must carry its units so the final unit (amperes, ohms, watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $i\\sim 1\\ \\text{A}$, $v_d\\sim 10^{-4}\\ \\text{m/s}$; $\\rho_{\\text{Cu}} \\approx 1.7\\times 10^{-8}\\ \\Omega\\cdot\\text{m}$; Ohmic, steady temperature; $V = iR$ describes the device.",
      },
    ],
    examples: [
      {
        title: 'House wire and heating element',
        problem: '(a) A copper wire is 10 m long and 1.00 mm in diameter. Find its resistance at 20 °C and at 50 °C. (b) A toaster needs a $20\\ \\Omega$ nichrome element ($\\rho = 1.0\\times 10^{-6}\\ \\Omega\\cdot\\mathrm{m}$) made from 2.0 m of wire. What diameter is required?',
        steps: [
          { label: 'Wire geometry', text: '$A = \\pi d^2/4 = \\pi(1.00\\times 10^{-3})^2/4 = 7.85\\times 10^{-7}\\ \\mathrm{m^2}$.' },
          { label: 'Copper at 20 °C', text: '$R = \\rho L/A = (1.69\\times 10^{-8})(10)/(7.85\\times 10^{-7}) = 0.22\\ \\Omega$ — so house wiring drops only tenths of a volt.' },
          { label: 'Copper at 50 °C', text: '$R = R_0[1+\\alpha\\Delta T] = 0.22[1 + (3.93\\times 10^{-3})(30)] = 0.22\\times 1.12 = 0.24\\ \\Omega$ — a 12% rise.' },
          { label: 'Nichrome diameter', text: 'Need $A = \\rho L/R = (1.0\\times 10^{-6})(2.0)/(20) = 1.0\\times 10^{-7}\\ \\mathrm{m^2}$, so $d = \\sqrt{4A/\\pi} = 3.6\\times 10^{-4}$ m — about 0.36 mm of coiled wire.' },
        ],
        result: 'The copper run is 0.22 Ω rising to 0.24 Ω when warm; the toaster element is 0.36 mm-diameter nichrome.',
      },
      {
        title: "Resistance and Resistivity: copper-wire check",
        problem: "A copper wire ($\\rho = 1.7\\times 10^{-8}\\ \\Omega\\cdot\\text{m}$) has $L = 40\\ \\text{m}$, $A = 1.0\\ \\text{mm}^2$. Find $R = \\rho L/A$ and $I$ at $1.5\\ \\text{V}$.",
        steps: [
          { label: "Resistance", text: "$R = 1.7\\times 10^{-8}\\times 40/10^{-6} = 0.68\\ \\Omega$." },
          { label: "Current", text: "$I = V/R = 1.5/0.68 = 2.21\\ \\text{A}$." },
        ],
        result: "$R \\approx 0.68\\ \\Omega$; $I \\approx 2.21\\ \\text{A}$.",
      },
    ],
    keyTakeaways: [
      'Resistance is $R = V/i$ per object; resistivity $\\rho$ is per material, and $R = \\rho L/A$ links them.',
      'Resistivities run from $10^{-8}\\ \\Omega\\cdot$ m (silver, copper) to $10^{14}$ (glass) — thirty orders of magnitude.',
      'Metals warm and resist more ($\\alpha > 0$); semiconductors warm and resist less; superconductors quit resisting altogether.',
    ],
    quiz: [
      {
        q: 'A wire is stretched to twice its length while keeping its volume (and resistivity) constant. Its resistance becomes:',
        options: ['twice as large', 'half as large', 'four times as large', 'unchanged'],
        answer: 2,
        explanation: 'Length doubles while area halves: $R = \\rho L/A$ picks up a factor of $2\\times 2 = 4$.',
      },
      {
        q: 'Which quantity is a property of the material alone (at fixed temperature)?',
        options: ['resistance', 'resistivity', 'current', 'potential difference'],
        answer: 1,
        explanation: 'Resistance additionally depends on the object\u2019s length and cross-section; resistivity is the material fingerprint.',
      },
      {
        q: 'A 1.0 m aluminum wire ($\\rho = 2.75\\times 10^{-8}\\ \\Omega\\cdot$ m) has cross-section $1.0\\ \\mathrm{mm^2}$. Its resistance is about:',
        options: ['0.028 Ω', '0.28 Ω', '2.8 Ω', '28 Ω'],
        answer: 0,
        explanation: '$R = \\rho L/A = (2.75\\times 10^{-8})(1.0)/(1.0\\times 10^{-6}) = 2.75\\times 10^{-2}\\ \\Omega$.',
      },
      {
        q: 'For a pure metal near room temperature, raising the temperature typically:',
        options: ['lowers the resistivity', 'raises the resistivity', 'leaves resistivity unchanged', 'makes it a semiconductor'],
        answer: 1,
        explanation: 'Hotter lattices vibrate more, shortening the electrons\u2019 free flights — $\\rho$ rises, with $\\alpha \\approx 4\\times 10^{-3}/\\mathrm{K}$ for copper.',
      },
    ],
  },

  // ------------------------------------------------------------------ 26-4
  {
    sectionId: 'hall-ch26-s4',
    readingTime: 6,
    intro: "Ohm's law has a peculiar status: it is called a law, yet it is not a law of nature at all — it is a material report card. Many conductors, over a wide range, pass current in strict proportion to the voltage; for those we write V = iR with a constant R and call them ohmic. Every other device — diode, arc, a cold filament — reminds us the proportionality is the exception, not the rule.",
    objectives: [
      "State Ohm's law precisely: which materials obey it and what \"ohmic\" means",
      'Distinguish the definition $R = V/i$ (always true) from Ohm\u2019s law ($R$ constant, a material property)',
      'Use the microscopic (local) form $\\vec J = \\sigma\\vec E$',
    ],
    concepts: [
      {
        term: "Ohm's law",
        kind: 'law',
        statement: "**For an ohmic conductor at fixed temperature, current is proportional to potential difference:** $$V = iR \\quad \\text{with } R \\text{ constant}.$$ A plot of $i$ against $V$ is a straight line through the origin whose slope is $1/R$.",
        detail: 'Ohmic behavior is a property of certain materials under certain conditions — metals at constant temperature — not a law of nature like Gauss\u2019 law. Textbooks say a device “obeys” or “violates” Ohm\u2019s law, never that physics does.',
      },
      {
        term: 'The definition that never fails',
        kind: 'insight',
        statement: "**$R = V/i$ defines the resistance of any device at any operating point — even a non-ohmic one.** What non-ohmic means is that this ratio changes as $i$ changes, so there is no single $R$ characterizing the device.",
        detail: 'For a diode, $R$ computed at 1 mA and at 1 A differ by orders of magnitude; both are correct answers to “$V/i$ at that point.”',
      },
      {
        term: 'The microscopic form',
        kind: 'law',
        statement: "**Ohm\u2019s law, written locally, says the current density responds in proportion to the field that drives it:** $$\\vec J = \\sigma\\vec E \\quad (\\sigma = 1/\\rho).$$ This is the point-form statement of ohmic behavior, valid field by field, place by place.",
        detail: 'Integrating $\\vec J = \\sigma\\vec E$ over a uniform slab reproduces $V = iR$ exactly, so the two forms stand or fall together for a given material.',
      },
      {
        term: 'Non-ohmic examples',
        kind: 'insight',
        statement: "**A light bulb filament is non-ohmic because the current itself heats it: as $i$ grows, $T$ grows, $\\rho$ grows, and the $i$-$V$ curve bends over.** A p-n junction diode is non-ohmic by construction, passing current essentially only one way.",
        detail: 'Check a “non-ohmic” claim carefully: an apparently curved $i$-$V$ plot is sometimes a temperature effect in disguise. Keep the temperature fixed and most metals are beautifully linear up to huge fields.',
      },
      {
        term: "Ohm's Law: solution protocol",
        kind: "method",
        statement: "**Solve Ohm's Law problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is current, resistivity and Ohmic conduction; the working equation is $i = dq/dt$, $J = i/A$, $R = \\rho L/A$, $V = iR$, $P = iV$; every substitution must carry its units so the final unit (amperes, ohms, watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $i\\sim 1\\ \\text{A}$, $v_d\\sim 10^{-4}\\ \\text{m/s}$; $\\rho_{\\text{Cu}} \\approx 1.7\\times 10^{-8}\\ \\Omega\\cdot\\text{m}$; Ohmic, steady temperature; $V = iR$ describes the device.",
      },
    ],
    examples: [
      {
        title: 'The inrush of a cold filament',
        problem: 'A 60 W bulb is rated for 120 V. (a) Find its operating resistance and current. (b) At switch-on the tungsten filament is near 20 °C and has about 1/15 of its hot resistance. What is the initial current, and why do bulbs blow at turn-on?',
        steps: [
          { label: 'Hot resistance', text: 'At operating temperature $P = V^2/R$, so $R_{\\mathrm{hot}} = V^2/P = (120)^2/60 = 240\\ \\Omega$, and $i = V/R = 120/240 = 0.50$ A.' },
          { label: 'Cold resistance', text: '$R_{\\mathrm{cold}} \\approx R_{\\mathrm{hot}}/15 = 16\\ \\Omega$.' },
          { label: 'Inrush current', text: '$i_{\\mathrm{cold}} = 120/16 = 7.5$ A — fifteen times the running current, until the filament heats in tens of milliseconds.' },
          { label: 'Moral', text: 'The bulb is non-ohmic across temperatures. The surge stresses the filament precisely when it is coldest and most brittle — hence the pop at the switch.' },
        ],
        result: '240 Ω and 0.50 A warm; about 7.5 A at the instant of switching on.',
      },
      {
        title: "Ohm's Law: copper-wire check",
        problem: "A copper wire ($\\rho = 1.7\\times 10^{-8}\\ \\Omega\\cdot\\text{m}$) has $L = 10\\ \\text{m}$, $A = 1.0\\ \\text{mm}^2$. Find $R = \\rho L/A$ and $I$ at $1.5\\ \\text{V}$.",
        steps: [
          { label: "Resistance", text: "$R = 1.7\\times 10^{-8}\\times 10/10^{-6} = 0.17\\ \\Omega$." },
          { label: "Current", text: "$I = V/R = 1.5/0.17 = 8.82\\ \\text{A}$." },
        ],
        result: "$R \\approx 0.17\\ \\Omega$; $I \\approx 8.82\\ \\text{A}$.",
      },
    ],
    keyTakeaways: [
      "Ohm's law is the proportionality $V = iR$ with constant $R$ — a property of certain materials, not a universal law.",
      '$R = V/i$ still defines resistance at any operating point of any device; non-ohmic just means that ratio drifts with $i$.',
      'Locally, ohmic behavior is $\\vec J = \\sigma\\vec E$ — current density proportional to field.',
    ],
    quiz: [
      {
        q: 'A conductor is “ohmic” when:',
        options: ['it carries any current at all', 'the current through it is proportional to the potential difference across it', 'its resistance is very small', 'it obeys Gauss\u2019 law'],
        answer: 1,
        explanation: 'Ohmic means the $i$-$V$ relation is a straight line through the origin — constant $R$ at fixed temperature.',
      },
      {
        q: 'For a non-ohmic device such as a diode, the quantity $R = V/i$ at a chosen operating point:',
        options: ['is undefined', 'is a valid resistance for that point, but varies with the point chosen', 'always equals the slope of the $i$-$V$ curve', 'is zero'],
        answer: 1,
        explanation: 'The ratio is always computable; non-ohmic simply means it is not constant along the curve.',
      },
      {
        q: 'The microscopic (point) form of Ohm\u2019s law is:',
        options: [`$\\vec J = \\sigma\\vec E$`, `$\\vec E = \\sigma\\vec J$`, `$V = iR$`, `$i = \\sigma A V$`],
        answer: 0,
        explanation: 'Current density responds to the local field through the conductivity: $\\vec J = \\sigma\\vec E$.',
      },
      {
        q: 'An incandescent bulb\u2019s $i$-$V$ curve bends over at large $i$ because:',
        options: ['filament resistance falls as it warms', 'the current heats the filament, raising its resistivity', 'the bulb violates charge conservation', 'the wire is non-uniform'],
        answer: 1,
        explanation: 'Self-heating raises tungsten\u2019s resistivity, so each extra volt buys less extra current — a temperature effect, not a failure of the definition $R = V/i$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 26-5
  {
    sectionId: 'hall-ch26-s5',
    readingTime: 7,
    intro: "Why should metals obey Ohm's law at all? The answer is a triumph of simple modeling: treat the conduction electrons as a gas that accelerates in the field between collisions and is knocked into random directions by the lattice, and the drift speed comes out strictly proportional to the field. The same model yields a formula for resistivity that, evaluated for copper, lands within experimental error — and explains why thicker wires conduct and hotter ones don't.",
    objectives: [
      'Derive the drift speed $v_d = eE\\tau/m$ from acceleration between collisions',
      'Show that the model predicts $\\rho = m/(ne^2\\tau)$ and verify it for copper',
      'Explain why drift is a tiny bias on the electrons\u2019 enormous random (Fermi) speeds',
    ],
    concepts: [
      {
        term: 'Acceleration between collisions',
        kind: 'method',
        statement: "**Between collisions the field accelerates each electron at $a = eE/m$; a collision wipes the memory and randomizes the velocity.** Averaged over many electrons, the drift speed is acceleration times the mean free time $\\tau$: $$v_d = \\frac{eE\\tau}{m}.$$",
        detail: 'The average over collisions of the accumulated velocity is exactly $a\\tau$, because the time since the last collision averages $\\tau$ for the exponential statistics of random collision times.',
      },
      {
        term: 'Resistivity from the collision model',
        kind: 'theorem',
        statement: "**Substituting $v_d = eE\\tau/m$ into $J = nev_d$ gives $J = (ne^2\\tau/m)E$, so the model predicts** $$\\rho = \\frac{m}{ne^2\\tau},$$ where $\\tau$ is the mean free time between collisions.",
        detail: 'Everything about a metal\u2019s resistivity hides in $\\tau$: more frequent collisions (hotter lattice, more impurities, alloying) means larger $\\rho$. The mass in the numerator is why light carriers make good conductors.',
      },
      {
        term: 'The Fermi speed dominates',
        kind: 'insight',
        statement: "**The electrons are never at rest: even at absolute zero they zip at about $1.6\\times 10^{6}$ m/s in copper (a quantum effect of the filled Fermi sea). The drift of $10^{-4}$ m/s is a one-in-ten-billion bias on that frenzy.**",
        detail: 'The mean free path is $\\lambda = v\\tau \\approx (1.6\\times 10^{6})(2.5\\times 10^{-14}) \\approx 4\\times 10^{-8}$ m — a hundred lattice spacings, which is why electrons behave as waves gliding past the lattice, and why the classical picture works only for averages.',
      },
      {
        term: 'What sets the collision time',
        kind: 'insight',
        statement: "**Two scattering sources limit $\\tau$: thermal vibrations of the lattice (phonons, dominant in pure metals near room temperature) and static defects/impurities (dominant at low temperature and in alloys).** Their rates add, so their resistivities add: $\\rho \\approx \\rho_{\\mathrm{phonon}} + \\rho_{\\mathrm{defect}}$.",
        detail: 'That is why commercial nichrome (an alloy with a wrecked lattice) resists 60× copper, and why the resistivity of an ordinary metal falls toward a nonzero residual value as $T \\to 0$, vanishing only for true superconductors.',
      },
      {
        term: "A Microscopic View of Ohm's Law: solution protocol",
        kind: "method",
        statement: "**Solve A Microscopic View of Ohm's Law problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is current, resistivity and Ohmic conduction; the working equation is $i = dq/dt$, $J = i/A$, $R = \\rho L/A$, $V = iR$, $P = iV$; every substitution must carry its units so the final unit (amperes, ohms, watts) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $i\\sim 1\\ \\text{A}$, $v_d\\sim 10^{-4}\\ \\text{m/s}$; $\\rho_{\\text{Cu}} \\approx 1.7\\times 10^{-8}\\ \\Omega\\cdot\\text{m}$; Ohmic, steady temperature; $V = iR$ describes the device.",
      },
    ],
    examples: [
      {
        title: 'Taking copper apart',
        problem: 'For copper take $n = 8.49\\times 10^{28}\\ \\mathrm{m^{-3}}$ and $\\rho = 1.69\\times 10^{-8}\\ \\Omega\\cdot\\mathrm{m}$. (a) Find the mean free time $\\tau$. (b) With electron speeds of $v \\approx 1.6\\times 10^{6}$ m/s, find the mean free path. (c) What drift speed does a field of $E = 0.50$ V/m produce, and what current density?',
        steps: [
          { label: 'Solve for τ', text: '$\\tau = m/(ne^2\\rho) = (9.11\\times 10^{-31})/[(8.49\\times 10^{28})(1.602\\times 10^{-19})^2(1.69\\times 10^{-8})]$. Compute the denominator: $ne^2\\rho = 3.68\\times 10^{-17}$, so $\\tau = 2.5\\times 10^{-14}$ s.' },
          { label: 'Mean free path', text: '$\\lambda = v\\tau = (1.6\\times 10^{6})(2.5\\times 10^{-14}) = 4.0\\times 10^{-8}$ m — forty nanometers, roughly a hundred atomic spacings.' },
          { label: 'Drift speed', text: '$v_d = eE\\tau/m = (1.602\\times 10^{-19})(0.50)(2.5\\times 10^{-14})/(9.11\\times 10^{-31}) = 2.2\\times 10^{-3}$ m/s.' },
          { label: 'Cross-check', text: '$J = \\sigma E = E/\\rho = 0.50/(1.69\\times 10^{-8}) = 3.0\\times 10^{7}\\ \\mathrm{A/m^2}$, and $J = nev_d = (8.49\\times 10^{28})(1.602\\times 10^{-19})(2.2\\times 10^{-3}) = 3.0\\times 10^{7}\\ \\mathrm{A/m^2}$. ✓' },
        ],
        result: '$\\tau \\approx 2.5\\times 10^{-14}$ s, $\\lambda \\approx 40$ nm, and a modest 0.50 V/m field drives $v_d \\approx 2.2$ mm/s — with $J = \\sigma E$ confirming the bookkeeping.',
      },
      {
        title: "A Microscopic View of Ohm's Law: copper-wire check",
        problem: "A copper wire ($\\rho = 1.7\\times 10^{-8}\\ \\Omega\\cdot\\text{m}$) has $L = 20\\ \\text{m}$, $A = 1.0\\ \\text{mm}^2$. Find $R = \\rho L/A$ and $I$ at $1.5\\ \\text{V}$.",
        steps: [
          { label: "Resistance", text: "$R = 1.7\\times 10^{-8}\\times 20/10^{-6} = 0.34\\ \\Omega$." },
          { label: "Current", text: "$I = V/R = 1.5/0.34 = 4.41\\ \\text{A}$." },
        ],
        result: "$R \\approx 0.34\\ \\Omega$; $I \\approx 4.41\\ \\text{A}$.",
      },
    ],
    keyTakeaways: [
      'Between collisions $a = eE/m$; averaged over collisions, $v_d = eE\\tau/m$ — strictly proportional to $E$, which is why metals are ohmic.',
      'The model gives $\\rho = m/(ne^2\\tau)$; for copper it yields $\\tau \\approx 2.5\\times 10^{-14}$ s.',
      'Drift is a $10^{-4}$ m/s bias on $10^{6}$ m/s Fermi motion; phonons and defects compete to shorten $\\tau$.',
    ],
    quiz: [
      {
        q: 'In the collision model, doubling the electric field in an ohmic metal:',
        options: ['halves the drift speed', 'doubles the drift speed', 'quadruples the drift speed', 'does not change the drift speed'],
        answer: 1,
        explanation: '$v_d = eE\\tau/m$ with $\\tau$ set by the lattice, not the field, so $v_d$ tracks $E$ linearly.',
      },
      {
        q: 'If the mean free time $\\tau$ of a metal were halved (say by alloying), its resistivity would:',
        options: ['double', 'halve', 'stay the same', 'quadruple'],
        answer: 0,
        explanation: '$\\rho = m/(ne^2\\tau)$ is inversely proportional to $\\tau$.',
      },
      {
        q: 'The mean free time $\\tau$ that appears in $\\rho = m/(ne^2\\tau)$ is:',
        options: ['the time for an electron to drift one meter', 'the average time between an electron\u2019s collisions with the lattice', 'the period of the driving voltage', 'the age of the conduction electrons'],
        answer: 1,
        explanation: 'It is the collision-to-collision free time underlying the random walk that the field biases into drift.',
      },
      {
        q: 'The electrons in a current-carrying copper wire move:',
        options: ['at nearly the speed of light on average', 'at about $10^{6}$ m/s randomly, with a $\\sim10^{-4}$ m/s drift superimposed', 'in smooth circular orbits around the wire axis', 'all at exactly the drift speed'],
        answer: 1,
        explanation: 'Fermi speeds near $10^{6}$ m/s persist with or without current; the field adds only the tiny systematic drift that constitutes the current.',
      },
    ],
  },
]
