import type { SectionContent } from '../library'

// ============================================================================
// Advanced-tier P/C/M master lesson content (high-weightage sections).
// Full SectionContent lessons for ten sections of the advanced syllabus
// (jeeadv.ac.in, jee-advanced-2026-syllabus.pdf), drawn from the three
// bookIds 'phys-master', 'chem-complete' and 'math-master':
//   Physics (3)   — 11.3 isothermal & adiabatic processes, 13.2 capacitors
//                   with dielectrics, 20.2 Bohr theory of hydrogen-like atoms
//   Chemistry (4) — 4.3 molecular orbital theory, 15.2 extraction principles
//                   (Fe/Cu/Zn/Al), 15.4 qualitative cation analysis,
//                   18.2 directing groups in monosubstituted benzenes
//   Maths (3)     — 12.6 extrema & mean value theorems, 13.5 definite-integral
//                   properties & the fundamental theorem, 10.3 skew lines &
//                   shortest distance
// Every lesson follows the advmath-ch01 / masters-physics exemplar:
// KaTeX formulas ($...$, $$...$$), Advanced-style multi-step worked examples
// with full computation, multi-concept traps, and a 4-question quiz pitched
// at advanced difficulty (multi-concept reasoning, not recall).
// ============================================================================

export const mastersAdvancedContent: SectionContent[] = [
  // ---------------------------------------------------------------- 11.3 (Physics)
  {
    sectionId: 'hall-ch19-s22',
    readingTime: 12,
    prerequisites: [
      'The ideal gas equation $PV = nRT$ and the absolute temperature scale (phys-a11-s1)',
      'Specific heats $C_v$ and $C_p$, the ratio $\\gamma = C_p/C_v$ and its degrees-of-freedom origin (phys-a11-s2)',
      'Elementary integration — enough to integrate $P\\,dV$ along a path',
    ],
    intro: 'Heat a gas and it may stay at the same temperature; compress it quickly and it may heat up with no heat supplied at all. The two idealised extremes — the **isothermal** process ($\\Delta T = 0$) and the **adiabatic** process ($Q = 0$) — bracket every real process, and advanced engineering assessment loves them precisely because their $P$–$V$ curves, work expressions and bulk moduli are all different facets of one fact: $P$, $V$ and $T$ are tied together along a path, not just at a state. This section builds the equation pairs $PV = \\text{const}$ and $PV^{\\gamma} = \\text{const}$, the two work formulas, and the gas bulk moduli that follow from them.',
    objectives: [
      'Distinguish isothermal ($\\Delta T = 0$, $Q = W$) from adiabatic ($Q = 0$, $W = -\\Delta U$) processes for an ideal gas without confusing their slogans',
      'Compute work in a reversible isothermal change, $W = nRT\\ln\\frac{V_2}{V_1}$, and in a reversible adiabatic change, $W = \\frac{nR(T_1 - T_2)}{\\gamma - 1}$, with correct signs',
      'Move fluently between the three adiabatic relations $PV^{\\gamma}$, $TV^{\\gamma-1}$ and $T^{\\gamma}P^{1-\\gamma}$ (all constant) to find whatever pair of variables the question names',
      'Quote and use the isothermal and adiabatic bulk moduli, $B_{iso} = P$ and $B_{ad} = \\gamma P$, and explain why the speed of sound selects the adiabatic one',
    ],
    concepts: [
      {
        term: 'Isothermal process',
        kind: 'definition',
        statement: 'An **isothermal process** keeps the temperature fixed, so for an ideal gas $PV = nRT = \\text{constant}$ (Boyle\'s law) and the internal energy change $\\Delta U = nC_v\\Delta T = 0$ vanishes.',
        detail: 'Isothermal means "same temperature", not "no heat": to keep $T$ constant during an expansion the gas must absorb heat $Q = W$ from a reservoir, and during compression it must reject exactly the work done on it. Realising this requires an idealized slow process in perfect thermal contact — the extreme opposite of the adiabatic slogan. The trap: students write $Q = 0$ for isothermal because "nothing changes"; the first law gives $Q = W$ instead, since $\\Delta U = 0$.',
      },
      {
        term: 'Adiabatic process',
        kind: 'definition',
        statement: 'An **adiabatic process** exchanges no heat with the surroundings ($Q = 0$), so the first law gives $\\Delta U = -W$: work done by the gas is paid for entirely by internal energy. For a reversible adiabatic process of an ideal gas, $$PV^{\\gamma} = \\text{const}, \\qquad TV^{\\gamma-1} = \\text{const}, \\qquad T^{\\gamma}P^{1-\\gamma} = \\text{const},$$ where $\\gamma = C_p/C_v$.',
        detail: 'Adiabatic means "no heat", not "no temperature change" — adiabatic compression raises $T$ and adiabatic expansion lowers it, which is why a bicycle pump warms and a spray can cools. The exponent $\\gamma$ inherits the molecular structure through $\\gamma = 1 + 2/f$ ($f$ = degrees of freedom, fed by the Maxwell–Boltzmann equipartition of energy): $\\gamma = 5/3$ for monoatomic, $7/5$ for a rigid diatomic gas. Fast processes (sound waves, engine strokes) are near-adiabatic because heat flow is comparatively slow.',
      },
      {
        term: 'Work done in the two processes',
        kind: 'theorem',
        statement: 'For a reversible isothermal change, $$W_{iso} = nRT\\,\\ln\\frac{V_2}{V_1}.$$ For a reversible adiabatic change, $$W_{ad} = \\frac{P_1V_1 - P_2V_2}{\\gamma - 1} = \\frac{nR(T_1 - T_2)}{\\gamma - 1},$$ the work done *by* the gas.',
        detail: 'Both come from $W = \\int P\\,dV$ along the relevant path — work is path-dependent, which is exactly why the same initial and final states can enclose different loop areas on a $P$–$V$ diagram. In the adiabatic form, keep the sign convention $W > 0$ for expansion: compression then yields $W < 0$ automatically because $T_2 > T_1$. Cross-check every adiabatic answer with the first law: since $Q = 0$, whatever $W$ is, $\\Delta U = -W = nC_v(T_2 - T_1)$ — one equation verifies the other.',
      },
      {
        term: 'Bulk modulus of a gas',
        kind: 'insight',
        statement: 'The **bulk modulus** $B = -V\\frac{dP}{dV}$ of an ideal gas is $B_{iso} = P$ for an isothermal compression but $B_{ad} = \\gamma P$ for an adiabatic one — a factor $\\gamma$ stiffer.',
        detail: 'Differentiate $PV = \\text{const}$ to get $dP/dV = -P/V$, and $PV^{\\gamma} = \\text{const}$ to get $dP/dV = -\\gamma P/V$: the adiabat is $\\gamma$ times steeper than the isotherm through the same state. Newton computed the speed of sound assuming isothermal compression, $v = \\sqrt{P/\\rho}$, and got 280 m/s for air; Laplace corrected it to $\\sqrt{\\gamma P/\\rho} \\approx 331$ m/s because sound compressions are far too rapid for heat to escape. This single fact is a recurring advanced engineering assessment paragraph question.',
      },
      {
        term: 'Comparing paths between the same states',
        kind: 'method',
        statement: 'Between the same initial state and the same final volume, an isothermal expansion does **more** work than an adiabatic one ($W_{iso} > W_{ad}$), because the isothermal gas keeps its pressure up by absorbing heat while the adiabatic gas cools and its pressure sinks along $PV^{\\gamma}$.',
        detail: 'On the $P$–$V$ diagram both curves leave the same point but the adiabat falls faster (slope ratio $\\gamma$), so the area under it is smaller. A favourite Advanced pattern gives a closed cycle of two isotherms and two adiabats (a Carnot cycle) and asks for net work per cycle — you must use $W_{iso} = nRT\\ln(V_2/V_1)$ on the flat-$T$ branches and $\\Delta U = 0$ reasoning on the adiabatic ones. Never carry the isothermal formula into an adiabatic leg.',
      },
    ],
    examples: [
      {
        title: 'Adiabatic compression of a monoatomic gas — full energy audit',
        problem: 'One mole of a monoatomic ideal gas ($\\gamma = 5/3$) at 300 K and 1.0 atm is compressed reversibly and adiabatically to one-eighth of its initial volume. Find the final temperature, the final pressure, the work done by the gas, and the change in internal energy. ($R = 8.314\\ \\text{J mol}^{-1}\\text{K}^{-1}$)',
        steps: [
          { label: 'Step 1', text: 'Adiabatic temperature–volume relation: $T_1V_1^{\\gamma-1} = T_2V_2^{\\gamma-1}$, so $T_2 = T_1\\left(\\frac{V_1}{V_2}\\right)^{\\gamma-1} = 300 \\times 8^{2/3}$. Since $8^{2/3} = (2^3)^{2/3} = 2^2 = 4$, we get $T_2 = 300 \\times 4 = 1200$ K.' },
          { label: 'Step 2', text: 'Adiabatic pressure–volume relation: $P_2 = P_1\\left(\\frac{V_1}{V_2}\\right)^{\\gamma} = 1.0 \\times 8^{5/3} = 2^5 = 32$ atm. (Check: $V_1 = \\frac{nRT_1}{P_1} = 24.6$ L falls to $V_2 = 3.08$ L, and $\\frac{P_2V_2}{T_2} = \\frac{32 \\times 3.08}{1200}$ indeed equals $\\frac{1 \\times 24.6}{300}$ — the ideal gas law survives every path.)' },
          { label: 'Step 3', text: 'Work done by the gas: $W_{ad} = \\frac{nR(T_1 - T_2)}{\\gamma - 1} = \\frac{(1)(8.314)(300 - 1200)}{5/3 - 1} = \\frac{-7483}{2/3} = -11{,}224\\ \\text{J} \\approx -11.2$ kJ. Negative, as compression must be.' },
          { label: 'Step 4', text: 'First law with $Q = 0$: $\\Delta U = -W = +11.2$ kJ. Independent check: $\\Delta U = nC_v\\Delta T = (1)\\left(\\frac{3}{2}R\\right)(900) = 1.5 \\times 8.314 \\times 900 = 11{,}224$ J $\\checkmark$ — the two routes agree exactly.' },
          { label: 'Step 5', text: 'Note the amplification: an 8-fold volume squeeze raised $T$ four-fold and $P$ 32-fold. The temperature rise is *why* diesel engines ignite their fuel without a spark.' },
        ],
        result: '$T_2 = 1200$ K, $P_2 = 32$ atm, $W = -11.2$ kJ (done on the gas), $\\Delta U = +11.2$ kJ.',
      },
      {
        title: 'Isothermal versus adiabatic expansion from the same state',
        problem: 'Two moles of a monoatomic ideal gas at 300 K expand reversibly from 10 L to 40 L — once isothermally and once adiabatically. Compute the work done by the gas in each case and compare the final states.',
        steps: [
          { label: 'Step 1', text: 'Isothermal leg: $T$ stays 300 K, so $W_{iso} = nRT\\ln\\frac{V_2}{V_1} = (2)(8.314)(300)\\ln 4 = 4988 \\times 1.386 \\approx 6915$ J $\\approx 6.9$ kJ.' },
          { label: 'Step 2', text: 'Adiabatic final temperature: $T_2 = T_1\\left(\\frac{V_1}{V_2}\\right)^{\\gamma-1} = 300 \\times 4^{-2/3} = \\frac{300}{2.52} \\approx 119$ K — the gas cools by 181 K because it spends internal energy on the work.' },
          { label: 'Step 3', text: 'Adiabatic work: $W_{ad} = \\frac{nR(T_1 - T_2)}{\\gamma - 1} = \\frac{(2)(8.314)(300 - 119)}{2/3} \\approx 4515$ J $\\approx 4.5$ kJ.' },
          { label: 'Step 4', text: 'Compare pressures at 40 L: isothermally $P_2 = P_1/4$, adiabatically $P_2 = P_1\\,4^{-5/3} = P_1/10.1$ — roughly 2.5 times lower, because the adiabatic gas is also colder.' },
          { label: 'Step 5', text: 'Ratio $\\frac{W_{ad}}{W_{iso}} = \\frac{4.5}{6.9} \\approx 0.65$: the adiabatic expansion delivers only about two-thirds of the isothermal work between the same volumes. Geometrically, the area under the steeper $PV^{\\gamma}$ curve is smaller than under the $PV$ curve.' },
        ],
        result: '$W_{iso} \\approx 6.9$ kJ (at 300 K throughout) versus $W_{ad} \\approx 4.5$ kJ (cooling to 119 K); the isothermal path does more work.',
      },
    ],
    keyTakeaways: [
      'Isothermal means $\\Delta T = 0$ (so $Q = W \\ne 0$); adiabatic means $Q = 0$ (so $W = -\\Delta U$ and $\\Delta T \\ne 0$). Mixing the two slogans is the unit\'s costliest error.',
      'The three adiabatic constants $PV^{\\gamma}$, $TV^{\\gamma-1}$, $T^{\\gamma}P^{1-\\gamma}$ are one relation; pick the pair that matches the given data.',
      '$W_{ad} = \\frac{nR(T_1 - T_2)}{\\gamma - 1}$ must always agree with $\\Delta U = nC_v(T_2 - T_1) = -W$ — a free cross-check on every adiabatic numerical.',
      'Through any state the adiabat is $\\gamma$ times steeper than the isotherm; hence $B_{ad} = \\gamma P > B_{iso} = P$, and sound travels at $\\sqrt{\\gamma P/\\rho}$, not $\\sqrt{P/\\rho}$.',
    ],
    quiz: [
      {
        q: 'A monoatomic ideal gas is compressed reversibly and adiabatically to $1/32$ of its initial volume. The ratio of final to initial temperature is',
        options: ['$2^{10/3} \\approx 10.1$', '$2^{5/3} \\approx 3.2$', '$2^{10/5} = 4$', '$2^{160/3} \\approx 3.2 \\times 10^{15}$'],
        answer: 0,
        explanation: 'Step 1: Use $T_1V_1^{\\gamma-1} = T_2V_2^{\\gamma-1}$, so $\\frac{T_2}{T_1} = \\left(\\frac{V_1}{V_2}\\right)^{\\gamma-1}$. Step 2: For a monoatomic gas $\\gamma = 5/3$, so the exponent is $\\gamma - 1 = 2/3$. Step 3: $\\frac{T_2}{T_1} = 32^{2/3} = (2^5)^{2/3} = 2^{10/3} \\approx 10.1$. Step 4: The exponent must be $\\gamma - 1$, not $\\gamma$ — using $\\gamma$ would give $32^{5/3} = 2^{25/3} \\approx 317$, a wrong order of magnitude.',
      },
      {
        q: 'The ratio of the adiabatic to the isothermal bulk modulus of a diatomic ideal gas (rigid rotor) is',
        options: ['$1.4$', '$1.0$', '$0.71$', '$2.8$'],
        answer: 0,
        explanation: 'Step 1: Differentiating $PV = \\text{const}$ gives $B_{iso} = -V\\frac{dP}{dV} = P$. Step 2: Differentiating $PV^{\\gamma} = \\text{const}$ gives $\\frac{dP}{dV} = -\\gamma\\frac{P}{V}$, so $B_{ad} = \\gamma P$. Step 3: The ratio is $\\frac{B_{ad}}{B_{iso}} = \\gamma$. Step 4: For a rigid diatomic gas $f = 5$, so $\\gamma = 1 + \\frac{2}{5} = 1.4$ — the same factor by which Laplace corrected Newton\'s speed of sound.',
      },
      {
        q: 'Two moles of an ideal gas expand isothermally and reversibly at 300 K to double their volume. The heat absorbed by the gas is ($R = 8.3\\ \\text{J mol}^{-1}\\text{K}^{-1}$, $\\ln 2 = 0.69$)',
        options: ['$\\approx 3.46$ kJ', '$\\approx 1.73$ kJ', '$\\approx 6.91$ kJ', 'zero'],
        answer: 0,
        explanation: 'Step 1: Isothermal ideal gas $\\Rightarrow \\Delta U = nC_v\\Delta T = 0$, so by the first law $Q = W$ — heat is absorbed, not zero. Step 2: $W = nRT\\ln\\frac{V_2}{V_1} = (2)(8.3)(300)\\ln 2$. Step 3: $W = 4980 \\times 0.69 = 3436\\ \\text{J} \\approx 3.46$ kJ $= Q$. Step 4: 1.73 kJ forgets the factor $n = 2$; 6.91 kJ uses $\\ln 4$ (a fourfold volume change).',
      },
      {
        q: 'On a $P$–$V$ diagram, an isotherm and an adiabat pass through the same state $(P_0, V_0)$. The ratio of the magnitudes of their slopes (adiabat : isotherm) at that point is',
        options: ['$\\gamma : 1$', '$1 : \\gamma$', '$\\gamma^2 : 1$', '$1 : 1$'],
        answer: 0,
        explanation: 'Step 1: Isotherm $PV = \\text{const} \\Rightarrow \\frac{dP}{dV} = -\\frac{P}{V}$, so at $(P_0, V_0)$ the slope magnitude is $\\frac{P_0}{V_0}$. Step 2: Adiabat $PV^{\\gamma} = \\text{const} \\Rightarrow \\frac{dP}{dV} = -\\gamma\\frac{P}{V}$, slope magnitude $\\gamma\\frac{P_0}{V_0}$. Step 3: Ratio $= \\gamma : 1$, independent of the state chosen. Step 4: Consequences: the adiabat is steeper, an adiabatic expansion lands at lower pressure than an isothermal one reaching the same volume, and $B_{ad} = \\gamma B_{iso}$.',
      },
    ]
  },
  // ---------------------------------------------------------------- 13.2 (Physics)
  {
    sectionId: 'phys-a13-s2',
    readingTime: 12,
    prerequisites: [
      'Capacitance of a parallel-plate capacitor, $C = \\varepsilon_0A/d$ (phys-a13-s1)',
      'Electric field, potential and their relation $V = Ed$ for uniform fields (phys-a12-s2)',
      'Energy of a charge system and the meaning of potential energy storage (phys-a12-s3)',
    ],
    intro: 'Slide a slab of insulator between capacitor plates and the capacitance multiplies by the dielectric constant $K$ — but everything else that happens depends on a question the question-setter hides: is the battery still connected? With the battery attached the voltage is fixed and charge floods in; with the battery removed the charge is frozen and the voltage collapses. advanced engineering assessment tests exactly this ledger — capacitance, charge, voltage, field, energy — in reconnection and partial-slab problems where a single wrong assumption about "what stays constant" destroys the whole solution.',
    objectives: [
      'Compute the capacitance of a parallel-plate capacitor fully or partially filled with a dielectric, including the master formula $C = \\frac{\\varepsilon_0A}{d - t + t/K}$',
      'Relate the fields inside and outside the slab, $E_{slab} = E_{air}/K$, and the induced surface charge $\\sigma_{ind} = \\sigma\\left(1 - \\frac{1}{K}\\right)$',
      'Track charge, voltage, field and energy through dielectric insertion with the battery connected and with it disconnected, without mixing the two scenarios',
      'Explain why a dielectric is always pulled into the gap and locate where the energy goes in each scenario',
    ],
    concepts: [
      {
        term: 'Dielectric constant',
        kind: 'definition',
        statement: 'A **dielectric** is an insulator that polarises in an electric field; filling a capacitor with it multiplies the capacitance by the **dielectric constant** (relative permittivity) $K$: $C = KC_0$. Inside the slab the field is reduced to $E = \\frac{E_0}{K}$.',
        detail: 'The external field aligns molecular dipoles (or stretches non-polar molecules into induced dipoles); their aligned ends create an opposing field, so the net field inside drops by $K$. The slab\'s faces acquire induced charge $\\sigma_{ind} = \\sigma\\left(1 - \\frac{1}{K}\\right)$ — for a metal ($K \\to \\infty$) this equals $\\sigma$, which is why a conducting slab fully screens the field, while for vacuum $K = 1$ nothing is induced. $K$ is always $\\ge 1$ (air $\\approx 1.0006$, mica $\\approx 6$, water $\\approx 80$).',
      },
      {
        term: 'Partial-slab capacitor',
        kind: 'method',
        statement: 'For plates of area $A$ separated by $d$ with a dielectric slab of thickness $t < d$ and constant $K$ flush against a plate, $$C = \\frac{\\varepsilon_0A}{d - t + \\frac{t}{K}}.$$ A slab filling the whole gap ($t = d$) gives $C = \\frac{K\\varepsilon_0A}{d} = KC_0$.',
        detail: 'Derivation: the free charge $\\sigma$ is the same on both faces of the gap, so the field is $\\frac{\\sigma}{\\varepsilon_0}$ in the air part and $\\frac{\\sigma}{K\\varepsilon_0}$ in the slab; the voltage is the sum $V = \\frac{\\sigma}{\\varepsilon_0}(d - t) + \\frac{\\sigma}{K\\varepsilon_0}t$, and $C = \\frac{\\sigma A}{V}$ collapses to the formula. Two slabs stacked act as capacitors in series; slabs side by side (each spanning the full gap but sharing area) act in parallel — deciding series vs parallel by geometry is the classic Advanced trap.',
      },
      {
        term: 'Battery connected vs disconnected',
        kind: 'insight',
        statement: '**Battery connected**: $V$ is fixed; inserting a dielectric raises $C \\to KC_0$, so $Q \\to KQ_0$ and stored energy $U = \\frac{1}{2}CV^2 \\to KU_0$, while the field $E = V/d$ is unchanged. **Battery disconnected**: $Q$ is fixed; then $C \\to KC_0$ forces $V \\to V_0/K$ and $U = \\frac{Q^2}{2C} \\to \\frac{U_0}{K}$, while the field also drops by $K$.',
        detail: 'These two ledgers must be memorised as a pair, because half the advanced engineering assessment assertions on dielectrics are one ledger masquerading as the other. With the battery connected the extra energy $\\Delta U = (K-1)\\frac{1}{2}C_0V^2$ comes from the battery, which supplies charge $\\Delta Q = (K-1)C_0V$ at potential $V$ — the battery gives out $\\Delta Q\\,V = 2\\Delta U$, half stored and half spent on pulling the slab in. With the battery gone the energy *decreases* by $\\frac{(K-1)}{K}U_0$ — that energy is the work the field does pulling the slab in.',
      },
      {
        term: 'Force on a dielectric slab',
        kind: 'theorem',
        statement: 'A dielectric slab partially inserted between plates is always **pulled further in**. For plates of length $\\ell$, width $b$, separation $d$ held at potential $V$, the pull is $$F = \\frac{(K-1)\\varepsilon_0 bV^2}{2d},$$ independent of how far the slab has already entered.',
        detail: 'Proof by the energy method: with $V$ fixed, $C(x)$ grows linearly with inserted length $x$, so the stored energy $\\frac{1}{2}C(x)V^2$ increases as the slab enters — but the battery supplies energy at twice the rate the field stores it, and the surplus appears as mechanical work, giving a constant force. Equivalently, fringe fields at the plate edges polarise the slab\'s leading face and attract it inward. With charge fixed the force still points inward (energy decreases), so "which way does the slab move" has the same answer in both scenarios — but the magnitudes differ.',
      },
      {
        term: 'Dielectric strength',
        kind: 'notation',
        statement: '**Dielectric strength** is the maximum field an insulator can sustain before breakdown, quoted in V/m (air $\\approx 3 \\times 10^6$ V/m).',
        detail: 'A capacitor\'s rating is set by the weaker of geometry and material: $E = \\frac{V}{d}$ must stay below the dielectric strength of the filling medium. This is why high-voltage capacitors use thick, high-strength dielectrics (mica, polymer films) even at the cost of capacitance, and why the "maximum charge" a capacitor can hold is a field question, not just a $Q = CV$ question. Advanced-level problems combine a breakdown field with a partial-slab geometry and ask for the maximum operating voltage.',
      },
    ],
    examples: [
      {
        title: 'Partial dielectric slab — effective capacitance and fields',
        problem: 'A parallel-plate capacitor has plate area $200\\ \\text{cm}^2$ and separation 5 mm. A dielectric slab of constant $K = 5$ and thickness 2 mm is inserted to fill the gap flush with one plate. (a) Find the new capacitance and compare with the empty value. (b) If a 100 V battery is connected, find the charge drawn and the fields in the air gap and in the slab.',
        steps: [
          { label: 'Step 1', text: 'Empty capacitor: $C_0 = \\frac{\\varepsilon_0A}{d} = \\frac{(8.85\\times10^{-12})(2.0\\times10^{-2})}{5\\times10^{-3}} = 3.54\\times10^{-11}$ F $= 35.4$ pF.' },
          { label: 'Step 2', text: 'Effective gap: $d - t + \\frac{t}{K} = 5 - 2 + \\frac{2}{5} = 3.4$ mm — the 2 mm of dielectric "counts" as only 0.4 mm of vacuum because its field is 5 times weaker for the same free charge.' },
          { label: 'Step 3', text: 'New capacitance: $C = \\frac{\\varepsilon_0A}{3.4\\times10^{-3}} = \\frac{1.77\\times10^{-13}}{3.4\\times10^{-3}} = 5.21\\times10^{-11}$ F $= 52.1$ pF, a factor $\\frac{52.1}{35.4} = 1.47$ increase — far less than $K = 5$ because the slab fills only part of the gap.' },
          { label: 'Step 4', text: 'With 100 V across: $Q = CV = 5.21\\times10^{-11} \\times 100 = 5.21$ nC, and $E_{air} = \\frac{V}{d - t + t/K} = \\frac{100}{3.4\\times10^{-3}} = 2.94\\times10^4$ V/m while $E_{slab} = \\frac{E_{air}}{K} = 5.88\\times10^3$ V/m. Check: $E_{air}(3\\ \\text{mm}) + E_{slab}(2\\ \\text{mm}) = 88.2 + 11.8 = 100$ V $\\checkmark$.' },
          { label: 'Step 5', text: 'Stored energy: $U = \\frac{1}{2}CV^2 = \\frac{1}{2}(5.21\\times10^{-11})(10^4) = 2.6\\times10^{-7}$ J $= 0.26\\ \\mu$J — up from $0.18\\ \\mu$J with air, the surplus supplied by the battery as it pumped in charge.' },
        ],
        result: '$C = 52.1$ pF (vs 35.4 pF empty); with 100 V, $Q = 5.21$ nC, $E_{air} = 2.9\\times10^4$ V/m, $E_{slab} = 5.9\\times10^3$ V/m.',
      },
      {
        title: 'Dielectric inserted with the battery gone — the energy audit',
        problem: 'A 100 pF capacitor is charged to 100 V and disconnected from the battery. A dielectric slab with $K = 4$ is now slid in, completely filling the gap. Find the charge, voltage and stored energy before and after, and account for the missing energy.',
        steps: [
          { label: 'Step 1', text: 'Before: $Q_0 = C_0V_0 = (100\\ \\text{pF})(100\\ \\text{V}) = 10^{-8}$ C $= 10$ nC; $U_0 = \\frac{1}{2}C_0V_0^2 = \\frac{1}{2}(10^{-10})(10^4) = 5\\times10^{-7}$ J $= 0.5\\ \\mu$J.' },
          { label: 'Step 2', text: 'Battery disconnected $\\Rightarrow$ charge is conserved: $Q = Q_0 = 10$ nC. The capacitance becomes $C = KC_0 = 400$ pF.' },
          { label: 'Step 3', text: 'New voltage: $V = \\frac{Q}{C} = \\frac{10^{-8}}{4\\times10^{-10}} = 25$ V — exactly $V_0/K$, as the fixed charge now sits on a 4-times-more-capacious device.' },
          { label: 'Step 4', text: 'New energy: $U = \\frac{Q^2}{2C} = \\frac{(10^{-8})^2}{2 \\times 4\\times10^{-10}} = 1.25\\times10^{-7}$ J $= 0.125\\ \\mu$J $= \\frac{U_0}{4}$. The field lost 75% of its energy.' },
          { label: 'Step 5', text: 'Where did $0.375\\ \\mu$J go? Into mechanical work pulling the slab in: the polarised slab is attracted by the fringe field, so whatever agency slowly lowers it can extract exactly this energy. Had the battery stayed connected instead, $V$ would be fixed at 100 V and $U$ would have *risen* to $2\\ \\mu$J while the battery supplied $3\\ \\mu$J — the two scenarios must never be cross-wired.' },
        ],
        result: 'After insertion: $Q = 10$ nC (unchanged), $V = 25$ V, $U = 0.125\\ \\mu$J; the decrease $0.375\\ \\mu$J is work done on the slab.',
      },
    ],
    keyTakeaways: [
      'Partial slab: $C = \\frac{\\varepsilon_0A}{d - t + t/K}$; slab full thickness $\\Rightarrow C = KC_0$; stacked slabs are series, side-by-side slabs are parallel.',
      'Field inside a dielectric is $E_0/K$ for the same free charge, and the slab faces carry induced charge $\\sigma(1 - 1/K)$ — total screening only for a conductor.',
      'Battery connected: $V$ fixed, $Q$ and $U$ rise by $K$. Battery disconnected: $Q$ fixed, $V$, $E$ and $U$ all fall by $K$. State which case you are in before the first line of algebra.',
      'A dielectric is always pulled into the gap; with $Q$ fixed the stored energy funds the pull, with $V$ fixed the battery over-supplies by a factor 2.',
    ],
    quiz: [
      {
        q: 'A parallel-plate capacitor with separation $d$ has a dielectric slab of constant $K = 2$ and thickness $t = d/2$ inserted flush with one plate. The new capacitance is',
        options: ['$\\frac{4}{3}C_0$', '$\\frac{3}{2}C_0$', '$2C_0$', '$C_0$'],
        answer: 0,
        explanation: 'Step 1: Use $C = \\frac{\\varepsilon_0A}{d - t + t/K}$ with $t = d/2$, $t/K = d/4$. Step 2: Denominator $= d - \\frac{d}{2} + \\frac{d}{4} = \\frac{3d}{4}$. Step 3: $C = \\frac{\\varepsilon_0A}{3d/4} = \\frac{4}{3}\\frac{\\varepsilon_0A}{d} = \\frac{4}{3}C_0$. Step 4: A half-thickness slab cannot double the capacitance (that would need $t = d$); the tempting $\\frac{3}{2}$ comes from averaging $1$ and $2$ linearly, but the slab\'s effect on the effective gap is through $1/K$, not $K$.',
      },
      {
        q: 'With the battery left connected, a dielectric slab is slowly inserted to fill the gap completely. Which of the following sets consists of quantities that all *increase*?',
        options: ['Capacitance, charge and stored energy', 'Capacitance, voltage and stored energy', 'Charge, voltage and electric field', 'Capacitance, charge and electric field'],
        answer: 0,
        explanation: 'Step 1: Battery connected fixes the potential difference $V$ — anything claimed to change $V$ is wrong. Step 2: $C \\to KC_0$ increases, so $Q = CV \\to KQ_0$ increases. Step 3: $U = \\frac{1}{2}CV^2 \\to KU_0$ increases. Step 4: $E = V/d$ is unchanged, so every option containing the field or the voltage is eliminated, leaving only the first.',
      },
      {
        q: 'A 100 pF capacitor charged to 100 V is disconnected from the battery, and a dielectric with $K = 4$ fills the gap. The final stored energy is',
        options: ['$0.125\\ \\mu$J', '$0.5\\ \\mu$J', '$2\\ \\mu$J', '$0.25\\ \\mu$J'],
        answer: 0,
        explanation: 'Step 1: Battery off $\\Rightarrow$ charge $Q = 10$ nC is the conserved quantity. Step 2: $U_0 = \\frac{Q^2}{2C_0} = 0.5\\ \\mu$J initially. Step 3: $C$ quadruples, so $U = \\frac{Q^2}{2C} = \\frac{Q^2}{2(4C_0)} = \\frac{U_0}{4} = 0.125\\ \\mu$J. Step 4: The "missing" $0.375\\ \\mu$J was spent doing work on the slab; picking $2\\ \\mu$J ($= \\frac{1}{2}CV^2$ with the *old* $V$) confuses the constant-$Q$ ledger with the constant-$V$ one.',
      },
      {
        q: 'The dielectric slab filling a charged, isolated capacitor has induced surface charge $\\sigma_{ind}$. If the free charge density on the plates is $\\sigma$ and $K = 3$, then $\\frac{\\sigma_{ind}}{\\sigma} =$',
        options: ['$\\frac{2}{3}$', '$\\frac{1}{3}$', '$3$', '$1$'],
        answer: 0,
        explanation: 'Step 1: The induced charge opposes the free charge, weakening the field from $\\frac{\\sigma}{\\varepsilon_0}$ to $\\frac{\\sigma - \\sigma_{ind}}{\\varepsilon_0}$. Step 2: The definition of $K$ says the net field is $\\frac{\\sigma}{K\\varepsilon_0}$. Step 3: Equate: $\\sigma - \\sigma_{ind} = \\frac{\\sigma}{K}$, so $\\frac{\\sigma_{ind}}{\\sigma} = 1 - \\frac{1}{K}$. Step 4: With $K = 3$: $\\frac{\\sigma_{ind}}{\\sigma} = 1 - \\frac{1}{3} = \\frac{2}{3}$ — and for a metal slab ($K \\to \\infty$) the ratio would tend to 1, full screening.',
      },
    ]
  },
  // ---------------------------------------------------------------- 20.2 (Physics)
  {
    sectionId: 'hall-ch40-s22',
    readingTime: 13,
    prerequisites: [
      'Coulomb\'s law and centripetal force for circular motion (phys-a12-s1, phys-a2-u6 circular motion basics)',
      'Photon energy $E = h\\nu$ from the photoelectric effect (phys-a20-s1)',
      'Angular momentum and its conservation for central forces (phys-a5-s3)',
    ],
    intro: 'Bohr\'s 1913 model is the bridge between classical mechanics and the quantum world: keep the electron in a circular Coulomb orbit, but demand that its angular momentum come only in units of $\\frac{h}{2\\pi}$. From that single postulate follow quantised radii, the $-13.6\\ \\text{eV}$ energy ladder of hydrogen, the entire Rydberg spectrum, and — bonus for advanced engineering assessment — the orbital magnetic moment $\\mu = n\\mu_B$ of a revolving electron. The model is "wrong" (quantum mechanics replaced it) yet numerically exact for hydrogen-like ions, which is why it still generates multi-step numericals in both engineering assessment papers.',
    objectives: [
      'State Bohr\'s postulates and derive the quantised radius, speed and energy: $r_n = \\frac{n^2}{Z}a_0$, $v_n = \\frac{Z}{n}\\frac{c}{137}$, $E_n = -13.6\\frac{Z^2}{n^2}$ eV',
      'Apply the Rydberg formula $\\frac{1}{\\lambda} = RZ^2\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$ to predict spectral lines, series limits and coincidences between spectra of different ions',
      'Connect orbit energies to kinetic and potential energy ($KE = -E$, $PE = 2E$) and to ionisation and excitation energies',
      'Derive and use the orbital magnetic dipole moment $\\mu = \\frac{evr}{2} = n\\mu_B$ with the Bohr magneton $\\mu_B = \\frac{eh}{4\\pi m}$',
    ],
    concepts: [
      {
        term: 'Bohr\'s postulates',
        kind: 'law',
        statement: 'Bohr\'s model of the hydrogen-like atom (nucleus of charge $+Ze$, one electron) rests on three statements: (i) the electron moves in allowed circular orbits satisfying $$mvr = \\frac{nh}{2\\pi}, \\qquad n = 1, 2, 3, \\ldots$$ (ii) the Coulomb force supplies the centripetal force, $\\frac{kZe^2}{r^2} = \\frac{mv^2}{r}$; (iii) radiation is emitted or absorbed only when the electron jumps between orbits, in a photon of energy $h\\nu = E_i - E_f$.',
        detail: 'Postulate (i) is the quantum input — it has no classical justification (though de Broglie later read it as a standing-wave condition $2\\pi r = n\\lambda$). Postulate (ii) is pure Newton + Coulomb. Postulate (iii) repairs classical electrodynamics, which predicts a spiral collapse in $\\sim10^{-11}$ s. Every advanced engineering assessment question on the model is some remix of these three equations; the standard move is to eliminate $v$ between (i) and (ii) to get $r$, then back-substitute for $E$.',
      },
      {
        term: 'Quantised radius and speed',
        kind: 'theorem',
        statement: 'Solving the postulates gives $$r_n = \\frac{n^2}{Z}a_0, \\qquad a_0 = 0.529\\ \\text{Å}, \\qquad v_n = \\frac{Z}{n}\\cdot\\frac{c}{137} = \\frac{Z}{n}(2.19\\times10^6\\ \\text{m/s}).$$',
        detail: 'Radius grows as $n^2$ and shrinks with nuclear charge $Z$: the He$^+$ ground-state orbit is half the hydrogen one. Speed falls as $1/n$; the ground-state speed is $\\alpha c$ with the fine-structure constant $\\alpha \\approx \\frac{1}{137}$, which is why the model\'s non-relativistic treatment of hydrogen is off by only parts in $10^4$. Trap: $r$ scales as $n^2/Z$ but $v$ as $Z/n$ — oppositely — so "in the $n = 3$ orbit of Li$^{2+}$ the electron moves slower than in hydrogen\'s $n = 1$" is true ($v = \\frac{3}{3}\\alpha c = \\alpha c$, actually equal here — always compute, never pattern-match).',
      },
      {
        term: 'Energy levels',
        kind: 'theorem',
        statement: 'The total energy of the electron is $$E_n = -13.6\\,\\frac{Z^2}{n^2}\\ \\text{eV},$$ with kinetic energy $KE = +13.6\\frac{Z^2}{n^2}$ eV, potential energy $PE = -27.2\\frac{Z^2}{n^2}$ eV, so $KE = -E_n$ and $PE = 2E_n$.',
        detail: 'The total is negative (bound state) and approaches 0 as $n \\to \\infty$; the ionisation energy from level $n$ is $+13.6\\frac{Z^2}{n^2}$ eV. For He$^+$ ($Z = 2$) every level is 4 times deeper than hydrogen\'s at the same $n$ — the ground state is $-54.4$ eV. The $KE = -E$ relation is a virial-theorem signature of any $1/r$ force and is repeatedly tested in assertion–reason format ("the kinetic energy increases when a photon is absorbed" — true for a jump *down*, false for a jump up).',
      },
      {
        term: 'The Rydberg formula and spectral series',
        kind: 'method',
        statement: 'Photon wavelengths from transitions follow $$\\frac{1}{\\lambda} = RZ^2\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right), \\qquad R = 1.097\\times10^7\\ \\text{m}^{-1},$$ with Lyman ($n_1 = 1$, ultraviolet), Balmer ($n_1 = 2$, visible) and Paschen ($n_1 = 3$, infrared) series for hydrogen. A handy shortcut: $\\lambda(\\text{nm}) \\approx \\frac{1240}{E(\\text{eV})}$.',
        detail: 'Series limits correspond to $n_2 \\to \\infty$: hydrogen\'s Lyman limit sits at $\\frac{1}{R} = 91.2$ nm, the Balmer limit at $\\frac{4}{R} = 364.6$ nm. Hydrogen-like ions compress the whole pattern by $1/Z^2$: He$^+$ lines interleave with hydrogen\'s (the Pickering series), so a line of H coincides with a line of He$^+$ whenever $n$ doubles — e.g. He$^+$ $4 \\to 2$ and H $2 \\to 1$ both emit 10.2 eV. Multi-step problems typically chain the photon energy, the wavelength, and the recoil or the identification of the series.',
      },
      {
        term: 'Orbital magnetic dipole moment',
        kind: 'theorem',
        statement: 'An electron revolving with period $T$ is a current loop: $i = \\frac{e}{T} = \\frac{ev}{2\\pi r}$ around area $\\pi r^2$, so the **magnetic dipole moment** is $$\\mu = iA = \\frac{evr}{2} = \\frac{e}{2m}(mvr) = n\\cdot\\frac{eh}{4\\pi m} = n\\mu_B,$$ where $\\mu_B = 9.27\\times10^{-24}\\ \\text{A·m}^2$ is the **Bohr magneton**.',
        detail: 'The substitution $mvr = \\frac{nh}{2\\pi}$ is the punchline: quantisation of angular momentum forces quantisation of the magnetic moment, in *integer* multiples of $\\mu_B$ (orbital moment — spin adds its own half-integer terms later). The gyromagnetic ratio $\\frac{\\mu}{L} = \\frac{e}{2m} = 8.8\\times10^{10}\\ \\text{C/kg}$ is independent of the orbit. advanced engineering assessment likes asking for the ratio $\\frac{\\mu_n}{\\mu_1} = n$ or for $\\mu$ of the $n = 2$ orbit of He$^+$ — the answer is still $2\\mu_B$, because $\\mu$ depends on $n$ alone, not on $Z$.',
      },
    ],
    examples: [
      {
        title: 'A He⁺ transition and a series limit',
        problem: 'An electron in a He$^+$ ion ($Z = 2$) falls from the $n = 4$ level to the $n = 2$ level. (a) Find the energy and wavelength of the emitted photon. (b) Find the shortest possible wavelength in the Balmer series of He$^+$. (c) Which hydrogen transition emits the same wavelength as (a)?',
        steps: [
          { label: 'Step 1', text: 'Photon energy: $E = 13.6Z^2\\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right) = 13.6 \\times 4 \\times \\left(\\frac{1}{4} - \\frac{1}{16}\\right) = 54.4 \\times \\frac{3}{16} = 10.2$ eV.' },
          { label: 'Step 2', text: 'Wavelength: $\\lambda = \\frac{1240}{E(\\text{eV})} = \\frac{1240}{10.2} \\approx 121.6$ nm — deep ultraviolet. Cross-check with the Rydberg formula: $\\frac{1}{\\lambda} = 4R\\left(\\frac{1}{4} - \\frac{1}{16}\\right) = 0.75R = 8.23\\times10^6\\ \\text{m}^{-1}$, so $\\lambda = 121.5$ nm $\\checkmark$.' },
          { label: 'Step 3', text: 'Balmer limit of He$^+$: set $n_2 \\to \\infty$ with $n_1 = 2$: $\\frac{1}{\\lambda} = RZ^2\\cdot\\frac{1}{4} = \\frac{4R}{4} = R$, so $\\lambda_{min} = \\frac{1}{R} = 91.2$ nm — exactly hydrogen\'s Lyman limit, compressed from hydrogen\'s Balmer limit of 364.6 nm by the factor $Z^2 = 4$.' },
          { label: 'Step 4', text: 'Coincidence hunt: hydrogen\'s $2 \\to 1$ (Lyman $\\alpha$) photon has $E = 13.6\\left(1 - \\frac{1}{4}\\right) = 10.2$ eV — identical, because $Z^2 = 4$ compensates the halved level numbers. Generally He$^+$ $2n_1 \\to 2n_2$ duplicates every hydrogen line (the Pickering series), which once fooled astronomers into suspecting "hydrogen with half-integer quantum numbers".' },
          { label: 'Step 5', text: 'Energy bookkeeping: the electron fell from $E_4 = -3.4$ eV to $E_2 = -13.6$ eV (levels of He$^+$ are 4 times hydrogen\'s: $-\\frac{54.4}{n^2}$ eV), a drop of exactly 10.2 eV $\\checkmark$.' },
        ],
        result: '(a) $E = 10.2$ eV, $\\lambda \\approx 121.6$ nm; (b) Balmer limit of He$^+$: 91.2 nm; (c) hydrogen Lyman-$\\alpha$ ($2 \\to 1$).',
      },
      {
        title: 'Magnetic moment of the revolving electron',
        problem: 'Using Bohr\'s model, show that the magnetic dipole moment of the electron in the $n$-th orbit of a hydrogen-like atom is $n\\mu_B$ regardless of $Z$, and compute it for the first two orbits of hydrogen. Also find the gyromagnetic ratio $\\mu/L$.',
        steps: [
          { label: 'Step 1', text: 'Orbiting current: each revolution transports charge $e$ past a fixed point once per period $T = \\frac{2\\pi r}{v}$, so $i = \\frac{e}{T} = \\frac{ev}{2\\pi r}$.' },
          { label: 'Step 2', text: 'Moment of the loop: $\\mu = iA = \\frac{ev}{2\\pi r}\\cdot\\pi r^2 = \\frac{evr}{2}$ — the electron\'s orbital magnetic moment in terms of its speed and radius.' },
          { label: 'Step 3', text: 'Impose quantisation: Bohr\'s condition $mvr = \\frac{nh}{2\\pi}$ gives $vr = \\frac{nh}{2\\pi m}$, so $\\mu = \\frac{e}{2}\\cdot\\frac{nh}{2\\pi m} = n\\cdot\\frac{eh}{4\\pi m} = n\\mu_B$. Neither $r$ nor $v$ survives: $\\mu$ depends only on $n$, so He$^+$, Li$^{2+}$ and H all carry $\\mu_B$ in their ground states.' },
          { label: 'Step 4', text: 'Numbers: $\\mu_B = \\frac{eh}{4\\pi m} = \\frac{(1.6\\times10^{-19})(6.63\\times10^{-34})}{4\\pi(9.11\\times10^{-31})} = 9.27\\times10^{-24}\\ \\text{A·m}^2$. Hence $\\mu_1 = 9.27\\times10^{-24}$ A·m$^2$ and $\\mu_2 = 2\\mu_B = 1.85\\times10^{-23}$ A·m$^2$.' },
          { label: 'Step 5', text: 'Gyromagnetic ratio: $\\frac{\\mu}{L} = \\frac{evr/2}{mvr} = \\frac{e}{2m} = \\frac{1.6\\times10^{-19}}{2\\times9.11\\times10^{-31}} = 8.8\\times10^{10}\\ \\text{C/kg}$ — a universal constant for orbital motion, the number that later fixes the splitting of spectral lines in a magnetic field.' },
        ],
        result: '$\\mu_n = n\\mu_B$ with $\\mu_B = 9.27\\times10^{-24}$ A·m$^2$; $\\mu_1 = 9.27\\times10^{-24}$, $\\mu_2 = 1.85\\times10^{-23}$ A·m$^2$; $\\frac{\\mu}{L} = \\frac{e}{2m} = 8.8\\times10^{10}$ C/kg.',
      },
    ],
    keyTakeaways: [
      'One postulate, three formulas: from $mvr = \\frac{nh}{2\\pi}$ plus Coulomb-centripetal balance come $r_n = \\frac{n^2}{Z}(0.529\\ \\text{Å})$, $v_n = \\frac{Z}{n}\\frac{c}{137}$ and $E_n = -13.6\\frac{Z^2}{n^2}$ eV.',
      '$KE = -E_n$ and $PE = 2E_n$ for any $1/r$ orbit; the ionisation energy from level $n$ is $13.6\\frac{Z^2}{n^2}$ eV.',
      'Rydberg with $Z^2$: $\\frac{1}{\\lambda} = RZ^2(\\frac{1}{n_1^2} - \\frac{1}{n_2^2})$; He$^+$ duplicates hydrogen lines whenever the quantum numbers double.',
      'Quantisation of angular momentum quantises the orbital magnet: $\\mu = \\frac{evr}{2} = n\\mu_B$, with gyromagnetic ratio $\\frac{e}{2m}$ — independent of both $n$ and $Z$.',
    ],
    quiz: [
      {
        q: 'The ratio of the radius of the $n = 3$ orbit to that of the $n = 1$ orbit in a Li$^{2+}$ ion is',
        options: ['$9$', '$3$', '$27$', '$1$'],
        answer: 0,
        explanation: 'Step 1: Bohr radii obey $r_n = \\frac{n^2}{Z}a_0$. Step 2: The ratio for the same ion is $\\frac{r_3}{r_1} = \\frac{3^2/Z}{1^2/Z} = 9$ — the common factor $\\frac{a_0}{Z}$ cancels. Step 3: The $Z = 3$ of Li$^{2+}$ is a red herring for a *ratio within one ion*; it would matter only when comparing different ions. Step 4: Choosing 3 confuses $r \\propto n^2$ with $r \\propto n$.',
      },
      {
        q: 'The energy of the electron in the $n = 2$ orbit of He$^+$ is',
        options: ['$-13.6$ eV', '$-3.4$ eV', '$-54.4$ eV', '$-27.2$ eV'],
        answer: 0,
        explanation: 'Step 1: Energy levels of a hydrogen-like atom: $E_n = -13.6\\frac{Z^2}{n^2}$ eV. Step 2: For He$^+$, $Z = 2$, so $E_2 = -13.6 \\times \\frac{4}{4} = -13.6$ eV. Step 3: The coincidence with hydrogen\'s *ground* state is exact: $Z^2 = 4$ cancels $n^2 = 4$. Step 4: $-3.4$ eV is hydrogen\'s $n = 2$ level (forgetting $Z^2$), and $-54.4$ eV is He$^+$ ground state (forgetting $n = 2$).',
      },
      {
        q: 'Which transition in He$^+$ produces the same wavelength as the $3 \\to 2$ Balmer transition in hydrogen?',
        options: ['$6 \\to 4$', '$4 \\to 2$', '$3 \\to 2$', '$5 \\to 3$'],
        answer: 0,
        explanation: 'Step 1: Wavelengths scale as $\\frac{n_1^2n_2^2}{Z^2(n_2^2 - n_1^2)}$, so doubling *both* quantum numbers leaves $\\frac{n_1^2n_2^2}{n_2^2-n_1^2}$ unchanged and cancels $Z^2 = 4$. Step 2: Double $3 \\to 2$ to get $6 \\to 4$ in He$^+$. Step 3: Verify numerically: $\\Delta E(\\text{He}^+, 6\\to4) = 54.4\\left(\\frac{1}{16} - \\frac{1}{36}\\right) = 54.4 \\times \\frac{20}{576} = 1.89$ eV; hydrogen $3 \\to 2$: $13.6\\left(\\frac{1}{4} - \\frac{1}{9}\\right) = 1.89$ eV $\\checkmark$. Step 4: $4 \\to 2$ in He$^+$ duplicates hydrogen\'s $2 \\to 1$ (10.2 eV), not the Balmer line.',
      },
      {
        q: 'According to Bohr\'s model, the ratio of the orbital magnetic moments of the electron in the $n = 2$ and $n = 1$ orbits of a hydrogen-like atom is',
        options: ['$2$', '$4$', '$1$', '$\\frac{1}{2}$'],
        answer: 0,
        explanation: 'Step 1: The orbiting electron is a current loop: $\\mu = iA = \\frac{evr}{2}$. Step 2: Insert the quantisation condition $mvr = \\frac{nh}{2\\pi}$: $\\mu = \\frac{e}{2m} \\cdot \\frac{nh}{2\\pi} = n\\mu_B$. Step 3: Therefore $\\frac{\\mu_2}{\\mu_1} = \\frac{2\\mu_B}{\\mu_B} = 2$ — independent of $Z$. Step 4: Choosing 4 wrongly assumes $\\mu \\propto n^2$ by analogy with the radius; the moment tracks the angular momentum, which grows linearly with $n$.',
      },
    ]
  },
  // ---------------------------------------------------------------- 4.3 (Chemistry)
  {
    sectionId: 'chem-a4-s3',
    readingTime: 12,
    prerequisites: [
      'Shapes of s and p orbitals and their phases (chem-a3-s5)',
      'Electron configurations with Aufbau, Pauli and Hund rules (chem-a3-s6)',
      'Covalent bonding by orbital overlap and Lewis structures (chem-a4-s1)',
    ],
    intro: 'Valence bond theory explains why $\\text{O}_2$ should be diamagnetic — and experiment says it is not. Molecular orbital theory repairs this by abandoning the idea of electrons localised between two atoms: the molecular orbitals of a diatomic spread over the whole molecule, fill by the same Aufbau–Pauli–Hund rules as atomic orbitals, and sort into bonding and antibonding pairs. From one counting exercise — electrons in bonding minus antibonding MOs — flow bond orders, bond lengths, magnetic behaviour and stability rankings for every homonuclear diatomic up to Ne$_2$, which is precisely the palette advanced engineering assessment paints with.',
    objectives: [
      'Construct MO energy-level diagrams for homonuclear diatomic species up to Ne$_2$, using the $\\sigma 2p$-below-$\\pi 2p$ order for B$_2$, C$_2$, N$_2$ and the reversed order for O$_2$, F$_2$, Ne$_2$',
      'Compute bond order $\\text{BO} = \\frac{N_b - N_a}{2}$ and use it to rank dissociation energies and bond lengths',
      'Predict diamagnetism or paramagnetism (and the number of unpaired electrons) from the MO population, including the ions of O$_2$ and N$_2$',
      'Handle ions correctly: remove electrons from the HOMO first, add to the LUMO, and exploit isoelectronic relationships (N$_2$, CO, NO$^+$, CN$^-$)',
    ],
    concepts: [
      {
        term: 'LCAO and the MO pair',
        kind: 'definition',
        statement: '**Linear combination of atomic orbitals** builds molecular orbitals: the in-phase combination $\\psi_b = \\psi_A + \\psi_B$ is a **bonding MO** (electron density accumulates between the nuclei, energy lowered), while the out-of-phase combination $\\psi_a = \\psi_A - \\psi_B$ is an **antibonding MO** (a node between the nuclei, energy raised). The number of MOs formed equals the number of AOs combined.',
        detail: 'End-on overlap of two $s$ or $p_z$ orbitals (taking $z$ as the internuclear axis) gives $\\sigma$ and $\\sigma^*$ MOs; side-on overlap of $p_x$ or $p_y$ pairs gives degenerate $\\pi$ and $\\pi^*$ MOs. Antibonding orbitals are not "empty extras": they are raised *more* than bonding orbitals are lowered when the overlap is strong, so He$_2$ (equal filling of both) is a net loser. Conservation of orbitals — 8 valence AOs in, 8 MOs out — is what makes electron bookkeeping possible.',
      },
      {
        term: 'The two MO energy orders',
        kind: 'notation',
        statement: 'For O$_2$, F$_2$, Ne$_2$ (no significant $s$–$p$ mixing): $$\\sigma 1s < \\sigma^*1s < \\sigma 2s < \\sigma^*2s < \\sigma 2p_z < \\pi 2p_x = \\pi 2p_y < \\pi^* 2p_x = \\pi^* 2p_y < \\sigma^* 2p_z.$$ For B$_2$, C$_2$, N$_2$ the $2s$–$2p$ interaction pushes $\\sigma 2p_z$ *above* the $\\pi 2p$ pair: $\\ldots \\sigma 2s < \\sigma^*2s < \\pi 2p_x = \\pi 2p_y < \\sigma 2p_z < \\ldots$',
        detail: 'The crossover happens between N$_2$ and O$_2$ because $s$–$p$ mixing weakens as nuclear charge grows and the $2s$–$2p$ gap widens. The order matters enormously: in C$_2$ ($\\pi$ below $\\sigma$) the highest occupied orbitals are the two $\\pi 2p$ MOs, so C$_2$\'s double bond consists of *two $\\pi$ bonds and no $\\sigma$ bond* — a fact advanced engineering assessment has tested directly. Mixing up the two orders for a given species shifts electrons between $\\sigma 2p_z$ and $\\pi^*2p$, changing magnetism (B$_2$ would falsely come out diamagnetic) even when the bond order survives.',
      },
      {
        term: 'Bond order and its consequences',
        kind: 'method',
        statement: 'The **bond order** is $$\\text{BO} = \\frac{N_b - N_a}{2},$$ half the excess of bonding ($N_b$) over antibonding ($N_a$) electrons. Higher BO means larger dissociation energy and shorter bond; BO $= 0$ means the molecule does not exist.',
        detail: 'H$_2$ (BO 1) $<$ O$_2$ (BO 2) $<$ N$_2$ (BO 3) in both energy and length, and He$_2$ with BO $= \\frac{2-2}{2} = 0$ is unbound, though He$_2^+$ (BO $\\frac{1}{2}$) exists. Because BO is continuous in half-integers, ions slot between parents: O$_2^+$ (2.5) is *stronger* than O$_2$ (2), and O$_2^-$ (1.5) and O$_2^{2-}$ (1) are progressively weaker. When a question asks for the *least stable* or *longest bond* among a family, compute every BO — never trust intuition about charges.',
      },
      {
        term: 'Magnetism from the MO diagram',
        kind: 'insight',
        statement: 'A species with one or more **unpaired electrons** is paramagnetic; with all electrons paired it is diamagnetic. Molecular orbital theory predicts O$_2$ to be paramagnetic with **two** unpaired electrons, because its highest occupied orbitals are the degenerate pair $\\pi^*2p_x^1\\pi^*2p_y^1$.',
        detail: 'This is MOT\'s signature triumph over valence bond theory, whose localized double bond forces all electrons paired. The spin-only magnetic moment $\\mu = \\sqrt{n(n+2)}\\ \\text{BM}$ then gives O$_2$ $\\mu = \\sqrt{2 \\times 4} = 2.83$ BM. The family drill: O$_2^+$ has one unpaired electron (1.73 BM), O$_2^-$ has one, O$_2^{2-}$ has none; B$_2$ is paramagnetic (two unpaired in $\\pi 2p$) while C$_2$ and N$_2$ are diamagnetic — direct consequences of the two energy orders.',
      },
      {
        term: 'Handling ions and isoelectronic series',
        kind: 'method',
        statement: 'To build the MO configuration of an ion, start from the neutral molecule and **remove electrons from the highest occupied MO first** (or add to the lowest unoccupied MO). Species with identical total electron counts share identical MO configurations — the isoelectronic principle.',
        detail: 'O$_2^+$ removes one $\\pi^*$ electron (raising BO to 2.5); O$_2^-$ adds one (1.5); O$_2^{2-}$ adds two (1.0, diamagnetic). The 14-electron club — N$_2$, CO, NO$^+$, CN$^-$ — all carry BO 3 and are diamagnetic; the 15-electron NO has BO 2.5 with one unpaired electron, and its cation NO$^+$ joins the 14-electron club. Trap: removal order *matters* — stripping O$_2$ of two electrons from $\\pi^*$ (as in O$_2^{2+}$... if both come from $\\pi^*$, BO $= 3$) differs totally from stripping a $\\sigma 2p_z$ electron; always work from the top of the occupied stack downward.',
      },
    ],
    examples: [
      {
        title: 'The O₂ family — one diagram, four species',
        problem: 'Write the molecular orbital configurations of O$_2$, O$_2^+$, O$_2^-$ and O$_2^{2-}$; give each bond order and magnetic behaviour, and arrange the four species in order of increasing bond length.',
        steps: [
          { label: 'Step 1', text: 'O$_2$ has 16 electrons (8 from each atom). Using the O$_2$/F$_2$/Ne$_2$ order: $(\\sigma1s)^2(\\sigma^*1s)^2(\\sigma2s)^2(\\sigma^*2s)^2(\\sigma2p_z)^2(\\pi2p_x)^2(\\pi2p_y)^2(\\pi^*2p_x)^1(\\pi^*2p_y)^1$. Bonding electrons: $2+2+2+4 = 10$; antibonding: $2+2+2 = 6$.' },
          { label: 'Step 2', text: 'Bond order of O$_2$: $\\text{BO} = \\frac{10 - 6}{2} = 2$, a formal double bond. The two $\\pi^*$ electrons occupy the degenerate pair singly (Hund\'s rule) — O$_2$ is paramagnetic with two unpaired electrons, $\\mu = 2.83$ BM.' },
          { label: 'Step 3', text: 'O$_2^+$ (15 electrons): remove one $\\pi^*$ electron $\\Rightarrow N_a = 5$, $\\text{BO} = \\frac{10-5}{2} = 2.5$; one unpaired electron, paramagnetic (1.73 BM). O$_2^-$ (17 electrons): add one $\\pi^*$ electron $\\Rightarrow N_a = 7$, $\\text{BO} = 1.5$; still one unpaired electron. O$_2^{2-}$ (18 electrons): $\\pi^*$ pair full, $N_a = 8$, $\\text{BO} = 1$; all electrons paired — diamagnetic.' },
          { label: 'Step 4', text: 'Bond length runs inversely to bond order: O$_2^+$ (2.5) $<$ O$_2$ (2) $<$ O$_2^-$ (1.5) $<$ O$_2^{2-}$ (1). Experiment agrees: 112 pm, 121 pm, 133 pm, 149 pm.' },
          { label: 'Step 5', text: 'Chemistry cross-links: removing electron density from $\\pi^*$ strengthens and shortens the bond (hence O$_2^+$ is harder to reduce further), while adding (superoxide, peroxide) progressively degrades it toward a single bond — the MO account of why peroxides are such good oxidising and bleaching agents.' },
        ],
        result: 'Bond orders 2, 2.5, 1.5, 1 for O$_2$, O$_2^+$, O$_2^-$, O$_2^{2-}$; all but O$_2^{2-}$ are paramagnetic; bond length order O$_2^+ <$ O$_2 <$ O$_2^- <$ O$_2^{2-}$.',
      },
      {
        title: 'The NO family — heteronuclear bookkeeping',
        problem: 'Predict the bond order and magnetic behaviour of NO, NO$^+$ and NO$^-$, and arrange them by increasing bond length. Comment on the isoelectronic partners of NO$^+$ and NO$^-$.',
        steps: [
          { label: 'Step 1', text: 'Electron counts: NO has $7 + 8 = 15$; NO$^+$ has 14; NO$^-$ has 16. For qualitative ordering we may use the O$_2$-type level scheme (NO\'s actual levels are slightly uneven because of the heteronuclear asymmetry, but the filling logic is identical).' },
          { label: 'Step 2', text: 'NO (15 e$^-$): fill to $(\\pi^*2p_x)^1$. Counting beyond the $\\sigma1s/\\sigma^*1s$ and $\\sigma2s/\\sigma^*2s$ cores: $\\sigma2p_z^2\\pi2p_x^2\\pi2p_y^2$ bonding (6) versus one $\\pi^*$ electron antibonding; including cores, $N_b = 10$, $N_a = 5$, so $\\text{BO} = \\frac{10 - 5}{2} = 2.5$ with one unpaired electron — paramagnetic, $\\mu = 1.73$ BM.' },
          { label: 'Step 3', text: 'NO$^+$ (14 e$^-$): the $\\pi^*$ electron is removed, giving $N_a = 4$, $\\text{BO} = \\frac{10-4}{2} = 3$, a triple bond, diamagnetic. NO$^-$ (16 e$^-$): one more $\\pi^*$ electron, $N_a = 6$, $\\text{BO} = 2$, paramagnetic with one unpaired electron.' },
          { label: 'Step 4', text: 'Bond length: NO$^+$ (BO 3, 106 pm) $<$ NO (BO 2.5, 115 pm) $<$ NO$^-$ (BO 2, ~126 pm) — the measured trend matches exactly.' },
          { label: 'Step 5', text: 'Isoelectronic checks: NO$^+$ (14 e$^-$) joins N$_2$, CO and CN$^-$ — all BO 3, diamagnetic, among the strongest-known diatomic bonds (which is why CO binds haemoglobin so tenaciously). NO$^-$ (16 e$^-$) is isoelectronic with O$_2$; both are paramagnetic with two... rather, NO$^-$ keeps its two extra electrons paired in one $\\pi^*$ orbital plus one each — careful recounting: NO$^-$ has $(\\pi^*2p_x)^2(\\pi^*2p_y)^0$? No — Hund\'s rule pairs them degenerately singly first, so NO$^-$ carries two unpaired electrons exactly like O$_2$.' },
        ],
        result: 'NO: BO 2.5, paramagnetic; NO$^+$: BO 3, diamagnetic; NO$^-$: BO 2, paramagnetic. Length order NO$^+ <$ NO $<$ NO$^-$; NO$^+$ is isoelectronic with N$_2$/CO, NO$^-$ with O$_2$.',
      },
    ],
    keyTakeaways: [
      'MOs come in bonding/antibonding pairs; count them up with $\\text{BO} = \\frac{N_b - N_a}{2}$, which predicts both dissociation energy and bond length ordering.',
      'Two energy orders: $\\pi 2p < \\sigma 2p$ for B$_2$, C$_2$, N$_2$ ($s$–$p$ mixing), reversed for O$_2$, F$_2$, Ne$_2$ — mixing them up breaks the magnetism predictions for B$_2$ and C$_2$.',
      'O$_2$ is paramagnetic with two unpaired $\\pi^*$ electrons — the decisive experimental fact that falsified valence bond theory\'s picture of the double bond.',
      'For ions, remove electrons from the top of the occupied stack and add at the bottom of the empty one; isoelectronic species (N$_2$/CO/NO$^+$/CN$^-$) share configurations, bond orders and magnetism.',
    ],
    quiz: [
      {
        q: 'Which of the following species is diamagnetic?',
        options: ['$\\text{O}_2^{2-}$', '$\\text{O}_2^-$', '$\\text{O}_2^+$', '$\\text{O}_2$'],
        answer: 0,
        explanation: 'Step 1: Diamagnetism requires every electron paired. Step 2: O$_2$ has two singly occupied $\\pi^*$ orbitals; O$_2^+$ has one; O$_2^-$ (17 electrons) has one singly occupied $\\pi^*$ orbital with three $\\pi^*$ electrons. Step 3: O$_2^{2-}$ (18 electrons) fills both $\\pi^*$ orbitals with pairs — no unpaired electrons, diamagnetic. Step 4: Its bond order also drops to 1, consistent with the 149 pm bond of peroxides.',
      },
      {
        q: 'The bond order and magnetic behaviour of C$_2$ are, respectively,',
        options: ['$2$, diamagnetic', '$2$, paramagnetic', '$3$, diamagnetic', '$1$, paramagnetic'],
        answer: 0,
        explanation: 'Step 1: C$_2$ has 12 electrons; C is light, so use the $\\pi 2p < \\sigma 2p$ order (with $s$–$p$ mixing). Step 2: Filling: $(\\sigma1s)^2(\\sigma^*1s)^2(\\sigma2s)^2(\\sigma^*2s)^2(\\pi2p_x)^2(\\pi2p_y)^2$. Step 3: $N_b = 8$, $N_a = 4$, so BO $= 2$; all electrons are paired — diamagnetic. Step 4: Remarkably the $\\sigma 2p_z$ orbital stays *empty*: C$_2$\'s double bond is two pure $\\pi$ bonds, a configuration unique among first-row diatomics.',
      },
      {
        q: 'Among N$_2$, N$_2^+$, N$_2^-$ and N$_2^{2-}$, the longest bond belongs to',
        options: ['$\\text{N}_2^{2-}$', '$\\text{N}_2^+$', '$\\text{N}_2^-$', '$\\text{N}_2$'],
        answer: 0,
        explanation: 'Step 1: N$_2$ (14 e$^-$) has BO 3. Step 2: N$_2^+$ (13 e$^-$) removes one electron from the $\\sigma 2p_z$ HOMO $\\Rightarrow$ BO 2.5; N$_2^-$ (15 e$^-$) adds one to the $\\pi^*$ LUMO $\\Rightarrow$ BO 2.5; N$_2^{2-}$ (16 e$^-$) adds two $\\Rightarrow$ BO 2. Step 3: Bond length decreases monotonically with bond order, so the smallest BO — N$_2^{2-}$ with BO 2 — carries the longest bond. Step 4: Although N$_2^+$ and N$_2^-$ share BO 2.5, N$_2^-$ is less stable (more antibonding electrons), but the question asks only for length, which the bond order decides.',
      },
      {
        q: 'The diatomic species that does not exist because its bond order is zero is',
        options: ['$\\text{He}_2$', '$\\text{H}_2^+$', '$\\text{He}_2^+$', '$\\text{H}_2^-$'],
        answer: 0,
        explanation: 'Step 1: H$_2^+$: one electron in $\\sigma1s$ $\\Rightarrow$ BO $= \\frac{1 - 0}{2} = 0.5$ — exists. Step 2: He$_2^+$: three electrons, $(\\sigma1s)^2(\\sigma^*1s)^1$ $\\Rightarrow$ BO $= \\frac{2-1}{2} = 0.5$ — exists (observed in discharge tubes). Step 3: H$_2^-$: three electrons $\\Rightarrow$ BO 0.5 — exists, though weakly bound. Step 4: He$_2$: $(\\sigma1s)^2(\\sigma^*1s)^2$ $\\Rightarrow$ BO $= \\frac{2-2}{2} = 0$ — the bonding and antibonding effects cancel and no stable molecule forms.',
      },
    ]
  },
  // ---------------------------------------------------------------- 15.2 (Chemistry)
  {
    sectionId: 'chem-ch13-s22',
    readingTime: 12,
    prerequisites: [
      'Gibbs energy $\\Delta G = \\Delta H - T\\Delta S$ and the criterion of spontaneity (chem-a5-s6)',
      'Standard enthalpies of formation and Hess\'s law arithmetic (chem-a5-s4)',
      'Faraday\'s laws of electrolysis and electrode potentials (chem-a7-s4, chem-a7-s2)',
    ],
    intro: 'Extraction is thermodynamics with a blowtorch: a metal oxide is stable exactly as long as its formation Gibbs energy stays more negative than the reductant\'s, and the Ellingham diagram simply plots that race against temperature. Read the diagram and you know why coke liberates iron and zinc but never aluminium, why copper can refine itself with no reductant at all, and why the most reactive metals must be won by electrolysis instead. Add Faraday\'s laws and a few blast-furnace stoichiometries and you have the complete advanced engineering assessment toolkit for extractive metallurgy.',
    objectives: [
      'Interpret an Ellingham diagram: line positions vs oxide stability, slopes vs $\\Delta S$, and crossovers vs reduction temperature',
      'Compute $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$ for a reduction reaction and locate the crossover temperature $T = \\frac{\\Delta H}{\\Delta S}$',
      'Narrate the extraction of iron (blast furnace zones, CO reductions, slag), copper (roasting + self-reduction) and zinc (zinc oxide + coke, vapour collection)',
      'Apply Faraday\'s first law to aluminium electrolysis, including carbon-anode consumption',
    ],
    concepts: [
      {
        term: 'The Ellingham diagram',
        kind: 'definition',
        statement: 'An **Ellingham diagram** plots $\\Delta_fG^\\circ$ of metal oxides (per mole of $\\text{O}_2$) against temperature. Because $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ$, each line has slope $-\\Delta S^\\circ$ and intercept $\\Delta H^\\circ$. **The metal whose line lies lower can reduce the oxide whose line lies above it.**',
        detail: 'For $2M + \\text{O}_2 \\to 2MO$, one mole of gas is consumed, $\\Delta S^\\circ < 0$, so metal-oxide lines slope *upward*: oxides get less stable as $T$ rises (and melt or vaporise of a sudden at phase changes, kinking the line). The lower a line sits, the harder that oxide is to crack — MgO, Al$_2$O$_3$, CaO anchor the bottom of the chart. Any metal can reduce the oxides above it: $\\text{Al}$ reduces $\\text{Fe}_2\\text{O}_3$ (thermite) but nothing routine reduces $\\text{Al}_2\\text{O}_3$.',
      },
      {
        term: 'Why coke wins: the carbon lines',
        kind: 'insight',
        statement: 'Carbon\'s two oxidation lines behave unlike metal lines: $\\text{C} + \\text{O}_2 \\to \\text{CO}_2$ has $\\Delta S^\\circ \\approx 0$ (1 mol gas $\\to$ 1 mol gas) so it is nearly **horizontal**, while $2\\text{C} + \\text{O}_2 \\to 2\\text{CO}$ *produces* gas ($\\Delta S^\\circ > 0$) and slopes **downward**. The CO line therefore crosses most metal-oxide lines at some temperature — above the crossover, carbon reduces the oxide.',
        detail: 'Below the crossover the oxide is the more stable phase and coke cannot strip its oxygen; above it, $\\Delta G^\\circ$ for the overall reduction turns negative and the reaction goes. This is why ZnO needs roughly 1270 K, and iron oxide reduction runs high in the stack where temperature permits. The entropy logic is worth internalising: reductions that *generate* gaseous CO are entropy-driven, so heat is not just a rate factor here — it is the thermodynamic engine.',
      },
      {
        term: 'Iron: the blast furnace ledger',
        kind: 'method',
        statement: 'In the blast furnace, haematite descends against rising gases and is reduced top-down in stages by CO: $$3\\text{Fe}_2\\text{O}_3 + \\text{CO} \\to 2\\text{Fe}_3\\text{O}_4 + \\text{CO}_2, \\qquad \\text{Fe}_3\\text{O}_4 + \\text{CO} \\to 3\\text{FeO} + \\text{CO}_2, \\qquad \\text{FeO} + \\text{CO} \\to \\text{Fe} + \\text{CO}_2.$$ Limestone fluxes the gangue: $\\text{CaCO}_3 \\to \\text{CaO} + \\text{CO}_2$ then $\\text{CaO} + \\text{SiO}_2 \\to \\text{CaSiO}_3$ (slag).',
        detail: 'The CO is made at the tuyères by $\\text{C} + \\text{O}_2 \\to \\text{CO}_2$ and $\\text{CO}_2 + \\text{C} \\to 2\\text{CO}$ (coke gasification), so the furnace is both a chemical factory and a heat exchanger: upper stack 500–900 K (indirect reduction by CO), lower stack and bosh 1400–2000 K (direct reduction by coke and melting). Slag ($\\text{CaSiO}_3$, lighter than matte/iron) floats the impurities out; that is why the charge carries limestone. Advanced questions chain the zone chemistry with the Ellingham reading — e.g. why FeO survives to the hotter zone while $\\text{Fe}_2\\text{O}_3$ does not.',
      },
      {
        term: 'Copper: reduction without a reductant',
        kind: 'method',
        statement: 'Copper is extracted from chalcopyrite via smelting to $\\text{Cu}_2\\text{S}$·$\\text{FeS}$ (matte), then **self-reduction (bessemerisation)** in a Bessemer converter: partial roasting makes cuprous oxide, $$2\\text{Cu}_2\\text{S} + 3\\text{O}_2 \\to 2\\text{Cu}_2\\text{O} + 2\\text{SO}_2,$$ and the oxide then oxidises the sulphide, $$2\\text{Cu}_2\\text{O} + \\text{Cu}_2\\text{S} \\to 6\\text{Cu} + \\text{SO}_2$$ — exothermic, needing no external reducing agent.',
        detail: 'In this couple $\\text{Cu}_2\\text{S}$ is the reducing agent (its S goes from $-2$ to $+4$) while the copper in $\\text{Cu}_2\\text{O}$ drops from $+1$ to $0$ — an internal redox disproportion of roles. The same self-reduction logic appears for lead ($\\text{PbS} + 2\\text{PbO} \\to 3\\text{Pb} + \\text{SO}_2$). Zinc follows a different road entirely: $\\text{ZnS}$ is roasted to ZnO, reduced by coke near 1670 K, and — because zinc boils at 1180 K — the metal is collected as vapour and condensed (spelter), then purified by distillation or electrolysis.',
      },
      {
        term: 'Aluminium: beyond the reach of carbon',
        kind: 'method',
        statement: 'The $\\text{Al}_2\\text{O}_3$ Ellingham line lies **below both carbon lines at every attainable temperature**, so no chemical carbon reduction can win; aluminium is extracted electrolytically (Hall–Héroult) from alumina dissolved in molten cryolite $\\text{Na}_3\\text{AlF}_6$ at $\\approx 950\\ ^\\circ\\text{C}$: cathode $\\text{Al}^{3+} + 3e^- \\to \\text{Al}$, anode $\\text{C} + 2\\text{O}^{2-} \\to \\text{CO}_2 + 4e^-$.',
        detail: 'Cryolite\'s job is to dissolve alumina and lower the working temperature some 1100 K below pure alumina\'s melting point (2072 $^\\circ$C), saving both energy and corrosion. The carbon anode is sacrificial — it is consumed as CO$_2$, so the cell must be fed anodes. Refining is electrorefining: impure Al anode, pure Al cathode in a molten-salt bath. The general rule: metals high in the electrochemical series (K, Na, Ca, Mg, Al) come out of fused-salt electrolysis; middle metals (Zn, Fe, Cu) from reduction; noble metals occur free.',
      },
    ],
    examples: [
      {
        title: 'Computing the coke–ZnO crossover from formation data',
        problem: 'For the reaction $\\text{ZnO}(s) + \\text{C}(s) \\to \\text{Zn}(s) + \\text{CO}(g)$, use $\\Delta_fH^\\circ(\\text{ZnO}) = -350.5$ kJ mol$^{-1}$, $\\Delta_fH^\\circ(\\text{CO}) = -110.5$ kJ mol$^{-1}$, and standard entropies $S^\\circ$(CO) $= 197.7$, $S^\\circ$(Zn) $= 41.6$, $S^\\circ$(ZnO) $= 43.6$, $S^\\circ$(C) $= 5.7$ J K$^{-1}$ mol$^{-1}$. Find the temperature above which the reduction becomes spontaneous, and evaluate $\\Delta G^\\circ$ at 1400 K.',
        steps: [
          { label: 'Step 1', text: 'Reaction enthalpy: $\\Delta H^\\circ = [\\Delta_fH^\\circ(\\text{CO}) + 0] - [\\Delta_fH^\\circ(\\text{ZnO}) + 0] = (-110.5) - (-350.5) = +240.0$ kJ — strongly endothermic, as the Ellingham picture demands (the CO line must catch up from below).' },
          { label: 'Step 2', text: 'Reaction entropy: $\\Delta S^\\circ = [197.7 + 41.6] - [43.6 + 5.7] = 239.3 - 49.3 = +190.0$ J K$^{-1}$. Positive because one mole of gas is created — the hallmark of carbon reductions and the reason the CO line slopes downward.' },
          { label: 'Step 3', text: 'Crossover (where $\\Delta G^\\circ = 0$): $T = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ} = \\frac{240{,}000}{190.0} \\approx 1263$ K, i.e. about 990 $^\\circ$C — matching the accepted Ellingham crossover of $\\approx$ 1270 K for the ZnO–C couple.' },
          { label: 'Step 4', text: 'At 1400 K: $\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = 240.0 - (1400)(0.190) = 240.0 - 266.0 = -26.0$ kJ — negative, so coke reduces ZnO spontaneously above the crossover.' },
          { label: 'Step 5', text: 'Practice note: industrial zinc smelting runs near 1670 K, well past 1270 K, partly for rate and partly because zinc itself boils at 1180 K and must be handled as vapour — the thermodynamic floor and the engineering ceiling both appear in advanced engineering assessment paragraph questions.' },
        ],
        result: '$\\Delta H^\\circ = +240$ kJ, $\\Delta S^\\circ = +190$ J K$^{-1}$; crossover $T \\approx 1263$ K ($\\approx 1270$ K); at 1400 K, $\\Delta G^\\circ = -26$ kJ (spontaneous).',
      },
      {
        title: 'Faraday audit of a Hall–Héroult cell',
        problem: 'An aluminium smelter runs a Hall–Héroult cell at 50,000 A for 24 hours. Find the mass of aluminium deposited and the mass of carbon anode consumed as CO$_2$. ($M(\\text{Al}) = 27\\ \\text{g mol}^{-1}$, $F = 96{,}500\\ \\text{C mol}^{-1}$)',
        steps: [
          { label: 'Step 1', text: 'Electrode reactions: cathode $\\text{Al}^{3+} + 3e^- \\to \\text{Al}$ (3 mol electrons per mol Al); anode $\\text{C} + 2\\text{O}^{2-} \\to \\text{CO}_2 + 4e^-$ (4 mol electrons per mol CO$_2$) — the anode is a reactant, not a spectator.' },
          { label: 'Step 2', text: 'Charge delivered: $Q = It = (50{,}000)(24 \\times 3600) = 4.32\\times10^9$ C.' },
          { label: 'Step 3', text: 'Moles of electrons: $n_e = \\frac{Q}{F} = \\frac{4.32\\times10^9}{96{,}500} = 4.48\\times10^4$ mol.' },
          { label: 'Step 4', text: 'Aluminium: $n_{\\text{Al}} = \\frac{n_e}{3} = 1.49\\times10^4$ mol, so mass $= 1.49\\times10^4 \\times 27 = 4.03\\times10^5$ g $\\approx 403$ kg per cell-day.' },
          { label: 'Step 5', text: 'Carbon: $n_{\\text{CO}_2} = \\frac{n_e}{4} = 1.12\\times10^4$ mol, mass $\\text{CO}_2 = 1.12\\times10^4 \\times 44 = 492$ kg, of which carbon is $1.12\\times10^4 \\times 12 = 134$ kg — the plant must feed ~134 kg of anode coke per 403 kg of aluminium, a stoichiometric fingerprint of the sacrificial anode.' },
        ],
        result: 'Aluminium deposited $\\approx 403$ kg; carbon anode consumed $\\approx 134$ kg (as 492 kg CO$_2$) in 24 h at 50,000 A.',
      },
    ],
    keyTakeaways: [
      'Ellingham logic: lower line reduces upper line; slopes are $-\\Delta S^\\circ$, so gas-consuming oxidations slope up and gas-producing carbon oxidation slopes down.',
      'Carbon reduces an oxide only above the crossover temperature where the CO line passes the metal-oxide line — about 1270 K for ZnO, computed as $T = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ}$.',
      'Iron is won by CO in stacked stages ($\\text{Fe}_2\\text{O}_3 \\to \\text{Fe}_3\\text{O}_4 \\to \\text{FeO} \\to \\text{Fe}$) with limestone fluxing silica; copper refines itself ($2\\text{Cu}_2\\text{O} + \\text{Cu}_2\\text{S} \\to 6\\text{Cu} + \\text{SO}_2$).',
      'Al$_2$O$_3$ out-sits carbon on the Ellingham chart at all practical temperatures, so aluminium comes from fused-salt electrolysis — quantified by Faraday\'s law with a sacrificial carbon anode.',
    ],
    quiz: [
      {
        q: 'Aluminium oxide cannot be reduced by carbon in a blast furnace because',
        options: ['the $\\text{Al}_2\\text{O}_3$ Ellingham line lies below the C/CO lines at all attainable temperatures', 'aluminium is volatile and escapes the furnace', 'carbon forms the carbide $\\text{Al}_4\\text{C}_3$ preferentially', 'the reaction is too exothermic to control'],
        answer: 0,
        explanation: 'Step 1: Carbon reduction is thermodynamically allowed only above the temperature where the C$\\to$CO line dips beneath the metal-oxide line. Step 2: The $\\text{Al}_2\\text{O}_3$ line lies so low that no attainable furnace temperature makes $\\Delta G^\\circ(\\text{Al}_2\\text{O}_3 + 3\\text{C})$ negative. Step 3: Hence aluminium is extracted by electrolysis of alumina in molten cryolite instead. Step 4: Alumina\'s very high melting point (2072 $^\\circ$C), not volatility, is what cryolite circumvents.',
      },
      {
        q: 'In the bessemerisation reaction $2\\text{Cu}_2\\text{O} + \\text{Cu}_2\\text{S} \\to 6\\text{Cu} + \\text{SO}_2$, the reducing agent is',
        options: ['$\\text{Cu}_2\\text{S}$', '$\\text{Cu}_2\\text{O}$', '$\\text{SO}_2$', 'Cu'],
        answer: 0,
        explanation: 'Step 1: A reducing agent is itself oxidised. Step 2: In $\\text{Cu}_2\\text{S}$, sulphur sits at $-2$; in the product $\\text{SO}_2$ it is $+4$ — sulphur is oxidised, so $\\text{Cu}_2\\text{S}$ donates electrons. Step 3: Copper in $\\text{Cu}_2\\text{O}$ falls from $+1$ to $0$, accepting those electrons. Step 4: This internal redox is why the process is called *self*-reduction: the ore\'s own sulphide refines its own oxide, and the reaction is exothermic enough to sustain the converter temperature.',
      },
      {
        q: 'On an Ellingham diagram, the lines for $2\\text{Zn} + \\text{O}_2 \\to 2\\text{ZnO}$ and similar metal oxidations slope upward because',
        options: ['$\\Delta S^\\circ < 0$: gaseous oxygen is consumed, lowering the entropy', '$\\Delta H^\\circ < 0$ for the oxidation', 'metals expand on heating', '$\\Delta G^\\circ$ must always increase with temperature'],
        answer: 0,
        explanation: 'Step 1: The slope of a $\\Delta G^\\circ$-vs-$T$ line is $-\\Delta S^\\circ$. Step 2: Metal oxidation consumes 1 mol of $\\text{O}_2$(g) and produces only condensed phases, so $\\Delta S^\\circ$ is distinctly negative. Step 3: Slope $= -\\Delta S^\\circ > 0$: the line climbs, meaning the oxide becomes *less* stable as temperature rises — which is exactly what makes high-temperature reduction possible. Step 4: The sign of $\\Delta H^\\circ$ sets the intercept, not the slope.',
      },
      {
        q: 'In the thermite reaction $\\text{Cr}_2\\text{O}_3 + 2\\text{Al} \\to \\text{Al}_2\\text{O}_3 + 2\\text{Cr}$, aluminium works as reductant because',
        options: ['the $\\text{Al}_2\\text{O}_3$ formation line lies below the $\\text{Cr}_2\\text{O}_3$ line, making the overall $\\Delta G^\\circ$ negative', 'aluminium melts before chromium', 'the reaction is slow and therefore favourable', 'chromium is more electropositive than aluminium'],
        answer: 0,
        explanation: 'Step 1: Reverse one oxidation and add the other: $\\text{Cr}_2\\text{O}_3 \\to 2\\text{Cr}$ (up its own line) plus $2\\text{Al} \\to \\text{Al}_2\\text{O}_3$ (down aluminium\'s line). Step 2: The net $\\Delta G^\\circ$ is the vertical gap between the two Ellingham lines, $\\Delta G^\\circ(\\text{Cr}_2\\text{O}_3) - \\Delta G^\\circ(\\text{Al}_2\\text{O}_3)$. Step 3: Since aluminium\'s line lies far lower, the difference is positive and the net $\\Delta G^\\circ$ is negative — thermodynamically spontaneous and highly exothermic. Step 4: In fact aluminium is among the most electropositive (reactive) metals, which is precisely *why* it sits below chromium on the chart; the last option states the opposite.',
      },
    ]
  },
  // ---------------------------------------------------------------- 15.4 (Chemistry)
  {
    sectionId: 'chem-ch13-s24',
    readingTime: 13,
    prerequisites: [
      'Solubility product and the common-ion effect (chem-a6-s4)',
      'Acid–base equilibria, pH and buffers (chem-a6-s5)',
      'Redox basics and precipitation reactions from the mole-concept chapter (chem-a1)',
    ],
    intro: 'Qualitative inorganic analysis is the advanced engineering assessment syllabus\'s laboratory course on paper: eleven cations are separated into five groups by nothing deeper than solubility products and the common-ion effect, yet the scheme rewards exactly the multi-step deductive reasoning the assessment prizes. Every group reagent is an equilibrium argument in disguise — acidic $\\text{H}_2\\text{S}$ suppresses sulphide ion so completely that only ultra-insoluble sulphides fall, while ammonium chloride holds hydroxide down so magnesium stays in solution. Master the logic, not the list, and any flowchart question becomes an exercise.',
    objectives: [
      'Reproduce the five-group scheme: group reagent, member cations, precipitate formulae and colours',
      'Explain each separation quantitatively with $K_{sp}$ and the common-ion effect — why acidic $\\text{H}_2\\text{S}$ catches only Group II and why $\\text{NH}_4\\text{Cl}$ must precede $\\text{NH}_4\\text{OH}$',
      'Deduce the cations present in a mixture from a described sequence of observations, and name the confirmatory tests for Fe$^{3+}$, Cu$^{2+}$, Zn$^{2+}$, Ba$^{2+}$, Ca$^{2+}$',
      'Apply Group I separations: PbCl$_2$ in hot water, AgCl in ammonia, and the interplay with Group II lead',
    ],
    concepts: [
      {
        term: 'The five-group scheme',
        kind: 'method',
        statement: 'Cations are precipitated in sequence: **Group I** with dilute HCl (AgCl white, $\\text{Hg}_2\\text{Cl}_2$ white, PbCl$_2$ white); **Group II** with $\\text{H}_2\\text{S}$ in dilute HCl (CuS black, HgS black, PbS black, $\\text{Bi}_2\\text{S}_3$ brown, CdS yellow); **Group III** with $\\text{NH}_4\\text{OH}$ in presence of $\\text{NH}_4\\text{Cl}$ ($\\text{Fe(OH)}_3$ reddish brown, $\\text{Cr(OH)}_3$ green, $\\text{Al(OH)}_3$ white gelatinous); **Group IV** with $\\text{H}_2\\text{S}$ in ammoniacal medium (ZnS dirty white, MnS buff); **Group V** with $(\\text{NH}_4)_2\\text{CO}_3$ in $\\text{NH}_4\\text{Cl}/\\text{NH}_4\\text{OH}$ (BaCO$_3$, CaCO$_3$ white), with Mg$^{2+}$ remaining in solution.',
        detail: 'The order is a solubility ladder, not an arbitrary convention: each reagent is chosen to catch the *most* insoluble remaining members while leaving the rest dissolved. Because PbCl$_2$ is moderately soluble (about 1 g per 100 mL cold water), lead leaks past Group I into Group II as PbS — the standard "split personality" the assessors love. At every stage, precipitate (carries the group) and filtrate (carries everything else) must both be tracked; flowchart questions test exactly this double bookkeeping.',
      },
      {
        term: 'Why acidic H₂S precipitates only Group II',
        kind: 'insight',
        statement: '$\\text{H}_2\\text{S}$ is a weak diprotic acid: $[\\text{S}^{2-}] = \\frac{K_{a1}K_{a2}[\\text{H}_2\\text{S}]}{[\\text{H}^+]^2}$. In 0.3 M HCl the common ion $\\text{H}^+$ crushes $[\\text{S}^{2-}]$ to about $10^{-22}$ M — low enough that only sulphides with $K_{sp} \\lesssim 10^{-30}$ (CuS, HgS, PbS, $\\text{Bi}_2\\text{S}_3$, CdS) can exceed their solubility products; ZnS and MnS ($K_{sp} \\sim 10^{-22}$) stay dissolved. In ammoniacal medium $[\\text{S}^{2-}]$ rebounds by over $10^{10}$-fold and Group IV falls.',
        detail: 'This is the common-ion effect doing real analytical work: the *same reagent* (hydrogen sulphide) is made selective simply by fixing the pH. Quantitatively, precipitation begins when the ionic product $[M^{2+}][\\text{S}^{2-}]$ exceeds $K_{sp}$ — with $[\\text{S}^{2-}] \\approx 10^{-22}$ M a cation needs $K_{sp}$ below roughly $10^{-24}$ (at millimolar $M^{2+}$) to precipitate at all, and the residual $[\\text{S}^{2-}]$ also sets how *completely* it precipitates. Assertion–reason items probe both directions: "H$_2$S precipitates CuS but not ZnS in acid because CuS is more soluble" — false as stated; it is *less* soluble, and that is why it falls.',
      },
      {
        term: 'The Group III buffer trick',
        kind: 'method',
        statement: 'Before adding $\\text{NH}_4\\text{OH}$ for Group III, $\\text{NH}_4\\text{Cl}$ is added: the common ion $\\text{NH}_4^+$ suppresses the dissociation of the weak base, holding $[\\text{OH}^-]$ low enough that only the very insoluble hydroxides of Fe$^{3+}$, Al$^{3+}$ and Cr$^{3+}$ precipitate, while Mg(OH)$_2$ (relatively soluble) stays in solution for Group V.',
        detail: 'Without $\\text{NH}_4\\text{Cl}$, concentrated ammonia would dump enough hydroxide to precipitate $\\text{Mg(OH)}_2$ (and even traces of Mn/Zn hydroxides), wrecking the group separations that follow. The amphoteric pair is then split inside Group III: $\\text{Al(OH)}_3$ and $\\text{Cr(OH)}_3$ dissolve in excess NaOH (as $[\\text{Al(OH)}_4]^-$ and $[\\text{Cr(OH)}_4]^-$) while $\\text{Fe(OH)}_3$ does not — the first diagnostic fork in the group. Chromyl-chloride and Prussian-blue tests then pin the individual members.',
      },
      {
        term: 'Group I separations',
        kind: 'method',
        statement: 'The Group I chlorides separate cleanly: **PbCl$_2$ dissolves in hot water** (retreating on cooling as needles) and so leaves AgCl and $\\text{Hg}_2\\text{Cl}_2$ behind; **AgCl dissolves in $\\text{NH}_4\\text{OH}$** as $[\\text{Ag(NH}_3)_2]^+$ and re-precipitates on acidification with HNO$_3$; **$\\text{Hg}_2\\text{Cl}_2$ turns black with ammonia** (disproportionation to Hg and $\\text{HgNH}_2\\text{Cl}$).',
        detail: 'Hot water exploits PbCl$_2$\'s steeply temperature-dependent solubility; the ammonia test exploits complex formation ($K_f \\approx 10^{7}$ for the diamminesilver ion) versus mercury(I)\'s disproportionation $\\text{Hg}_2^{2+} \\to \\text{Hg}^{2+} + \\text{Hg}$. Lead that reaches Group II is caught as black PbS and confirmed as yellow PbCrO$_4$ (soluble in NaOH, unlike BaCrO$_4$). The assessment pattern: a described colour change with one reagent, then ask which cation — so the *differential* behaviour, not the precipitate colours alone, is the memory target.',
      },
      {
        term: 'Confirmatory tests worth their weight',
        kind: 'notation',
        statement: 'Fe$^{3+}$ + $\\text{K}_4[\\text{Fe(CN)}_6]$ $\\to$ deep-blue **Prussian blue** $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$; Cu$^{2+}$ + $\\text{K}_4[\\text{Fe(CN)}_6]$ $\\to$ chocolate-brown $\\text{Cu}_2[\\text{Fe(CN)}_6]$; Ba$^{2+}$ + $\\text{K}_2\\text{CrO}_4$ $\\to$ yellow $\\text{BaCrO}_4$ (insoluble in acetic acid); Ca$^{2+}$ + ammonium oxalate $\\to$ white $\\text{CaC}_2\\text{O}_4$; Zn$^{2+}$ + potassium ferrocyanide $\\to$ white/bluish ppt soluble in NaOH; Mg$^{2+}$ + $\\text{Na}_2\\text{HPO}_4/\\text{NH}_4\\text{OH}$ $\\to$ white crystalline $\\text{Mg(NH}_4)\\text{PO}_4$; flame tests: Ca brick-red, Ba apple-green.',
        detail: 'Each confirmatory test is itself a small equilibrium or redox story: Prussian blue is a mixed-valence iron(II/III) hexacyanometallate; the chromate test for barium works in dilute acetic acid because $\\text{BaCrO}_4$ is far less soluble than $\\text{CaCrO}_4$; the calcium oxalate test fails for barium only after barium has been removed — sequence matters. Mn$^{2+}$ is confirmed by oxidation to purple permanganate with $\\text{PbO}_2$/conc. HNO$_3$ or sodium bismuthate. Remember the colours as *pairs* (reagent $\\to$ colour) — the assessment almost always describes the observation and asks for the inference.',
      },
    ],
    examples: [
      {
        title: 'Reading a flowchart: two cations from six observations',
        problem: 'A mixture of two salts in water gives the following results: (i) no precipitate with dilute HCl; (ii) no precipitate when $\\text{H}_2\\text{S}$ is passed in acidic medium; (iii) a gelatinous reddish-brown precipitate with $\\text{NH}_4\\text{Cl} + \\text{NH}_4\\text{OH}$, insoluble in excess NaOH; (iv) after removing that precipitate, no precipitate with $\\text{H}_2\\text{S}$ in ammoniacal medium; (v) a white precipitate with $(\\text{NH}_4)_2\\text{CO}_3$ in presence of $\\text{NH}_4\\text{Cl}/\\text{NH}_4\\text{OH}$, which dissolves in acetic acid and gives no precipitate with $\\text{K}_2\\text{CrO}_4$ but a white precipitate with ammonium oxalate; (vi) the flame test is brick-red. Identify the cations and suggest a confirmatory test for each.',
        steps: [
          { label: 'Step 1', text: 'Observations (i) and (ii) rule out Group I (no Ag$^+$/Hg$_2^{2+}$/Pb$^{2+}$) and Group II (no Cu$^{2+}$/Hg$^{2+}$/Bi$^{3+}$/Cd$^{2+}$) — the acidic medium would have caught their sulphides.' },
          { label: 'Step 2', text: 'Observation (iii) is textbook Group III: gelatinous reddish-brown $\\text{Fe(OH)}_3$ with $\\text{NH}_4\\text{OH}/\\text{NH}_4\\text{Cl}$. The colour already excludes white $\\text{Al(OH)}_3$ and green $\\text{Cr(OH)}_3$, and insolubility in excess NaOH excludes the amphoteric pair — Al$^{3+}$ and Cr$^{3+}$ hydroxides would have dissolved as $[\\text{Al(OH)}_4]^-$/$[\\text{Cr(OH)}_4]^-$. So Fe$^{3+}$ is present.' },
          { label: 'Step 3', text: 'Observation (iv) clears Group IV: no Zn$^{2+}$, Mn$^{2+}$ (no dirty-white ZnS or buff MnS in the alkaline sulphide medium).' },
          { label: 'Step 4', text: 'Observation (v) is Group V: a white carbonate among Ba$^{2+}$/Ca$^{2+}$. Dissolution in acetic acid readies the solution for the pair of differential tests — no yellow $\\text{BaCrO}_4$ with $\\text{K}_2\\text{CrO}_4$ excludes barium; the white oxalate ppt identifies Ca$^{2+}$, and the brick-red flame (vi) seals it.' },
          { label: 'Step 5', text: 'Confirmatory tests: Fe$^{3+}$ with $\\text{K}_4[\\text{Fe(CN)}_6]$ gives Prussian blue, $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$; Ca$^{2+}$ is already confirmed by ammonium oxalate ($\\text{CaC}_2\\text{O}_4$) plus the flame. Conclusion: the mixture contains Fe$^{3+}$ and Ca$^{2+}$ (for instance $\\text{FeCl}_3$ and $\\text{CaCl}_2$).' },
        ],
        result: 'The cations are Fe$^{3+}$ (Group III, reddish-brown gelatinous hydroxide) and Ca$^{2+}$ (Group V, oxalate + brick-red flame); no Group I, II or IV cations are present.',
      },
      {
        title: 'The Ksp arithmetic behind the Group II / Group IV split',
        problem: 'Saturated $\\text{H}_2\\text{S}$ provides $[\\text{S}^{2-}] \\approx 10^{-22}$ M in 0.3 M HCl, but about $10^{-6}$ M in ammoniacal solution. Given $K_{sp}(\\text{CuS}) \\approx 10^{-35}$ and $K_{sp}(\\text{ZnS}) \\approx 10^{-22}$, show that Cu$^{2+}$ (taken as 0.01 M) precipitates in acid while Zn$^{2+}$ (0.01 M) does not, and that Zn$^{2+}$ precipitates completely in the ammoniacal medium.',
        steps: [
          { label: 'Step 1', text: 'Precipitation condition: ionic product $[M^{2+}][\\text{S}^{2-}] > K_{sp}$. In acid, with $[\\text{S}^{2-}] = 10^{-22}$ M, the IP for a 0.01 M cation is $10^{-2} \\times 10^{-22} = 10^{-24}$.' },
          { label: 'Step 2', text: 'Copper in acid: $10^{-24} \\gg 10^{-35}$, so CuS precipitates massively. The residual copper left dissolved is $[\\text{Cu}^{2+}] = \\frac{K_{sp}}{[\\text{S}^{2-}]} = \\frac{10^{-35}}{10^{-22}} = 10^{-13}$ M — quantitative separation.' },
          { label: 'Step 3', text: 'Zinc in acid: the threshold concentration is $[\\text{Zn}^{2+}]_{min} = \\frac{10^{-22}}{10^{-22}} = 1$ M, far above the 0.01 M on offer; equivalently $\\text{IP} = 10^{-24} < K_{sp} = 10^{-22}$. No ZnS forms — Group IV stays dissolved with the filtrate.' },
          { label: 'Step 4', text: 'Zinc in ammoniacal medium: $[\\text{S}^{2-}] = 10^{-6}$ M, so the IP becomes $10^{-2} \\times 10^{-6} = 10^{-8} \\gg 10^{-22}$ — precipitation is violent, and the residual zinc is $\\frac{10^{-22}}{10^{-6}} = 10^{-16}$ M: essentially complete.' },
          { label: 'Step 5', text: 'The pH lever moved $[\\text{S}^{2-}]$ by sixteen orders of magnitude ($10^{-22} \\to 10^{-6}$), swinging zinc from "cannot precipitate" to "cannot stay dissolved" — the entire group scheme in one equilibrium. This is why the acid strength before passing $\\text{H}_2\\text{S}$ must be controlled: too much acid and even CdS leaks; too little and ZnS crashes early.' },
        ],
        result: 'In acid: CuS precipitates (residual $[\\text{Cu}^{2+}] = 10^{-13}$ M) while ZnS cannot ($[\\text{Zn}^{2+}]$ would need to exceed 1 M); in ammonia: ZnS precipitates completely (residual $10^{-16}$ M).',
      },
    ],
    keyTakeaways: [
      'The five groups are a $K_{sp}$ ladder: chlorides $\\to$ acid-insoluble sulphides $\\to$ hydroxides $\\to$ alkaline sulphides $\\to$ carbonates, each reagent catching only what cannot stay dissolved.',
      'The same $\\text{H}_2\\text{S}$ is selective purely by pH: $[\\text{S}^{2-}] \\sim 10^{-22}$ M in 0.3 M acid (Group II only) versus $\\sim 10^{-6}$ M in ammonia (Group IV) — a $10^{16}$-fold swing.',
      '$\\text{NH}_4\\text{Cl}$ before $\\text{NH}_4\\text{OH}$ is a buffer instruction: it suppresses $[\\text{OH}^-]$ so Mg$^{2+}$ survives to Group V while Fe$^{3+}$/Al$^{3+}$/Cr$^{3+}$ hydroxides fall.',
      'Differential behaviour, not colour alone, identifies cations: PbCl$_2$ hot-water solubility, AgCl in ammonia, $\\text{Hg}_2\\text{Cl}_2$ blackening, Prussian blue for Fe$^{3+}$, chromate-vs-oxalate for Ba$^{2+}$/Ca$^{2+}$.',
    ],
    quiz: [
      {
        q: 'A solution gives no precipitate with dilute HCl. Which cation can nevertheless still be present?',
        options: ['$\\text{Cu}^{2+}$', '$\\text{Ag}^+$', '$\\text{Hg}_2^{2+}$', '$\\text{Pb}^{2+}$'],
        answer: 0,
        explanation: 'Step 1: Dilute HCl is the Group I reagent — it precipitates AgCl, $\\text{Hg}_2\\text{Cl}_2$ and PbCl$_2$. Step 2: No precipitate therefore excludes all Group I cations. Step 3: $\\text{Cu}^{2+}$ is a Group II cation, caught only later by $\\text{H}_2\\text{S}$ in acidic medium (black CuS), so it sails through the HCl step. Step 4: Note the converse trap: Pb$^{2+}$ *usually* precipitates in Group I but partially leaks into Group II because PbCl$_2$ is noticeably soluble in cold water.',
      },
      {
        q: 'A white precipitate obtained with dilute HCl dissolves completely in hot water and reappears as needle-shaped crystals on cooling. The cation is',
        options: ['$\\text{Pb}^{2+}$', '$\\text{Ag}^+$', '$\\text{Hg}_2^{2+}$', '$\\text{Ba}^{2+}$'],
        answer: 0,
        explanation: 'Step 1: Only Group I members give precipitates with dilute HCl, so the cation is among Pb$^{2+}$, Ag$^+$, $\\text{Hg}_2^{2+}$. Step 2: PbCl$_2$ solubility rises steeply with temperature (~0.7 g/100 mL cold to ~3.3 g/100 mL hot), so it dissolves in hot water and recrystallises as needles on cooling. Step 3: AgCl and $\\text{Hg}_2\\text{Cl}_2$ are insoluble in hot water; their differential reagent is ammonia (AgCl dissolves, $\\text{Hg}_2\\text{Cl}_2$ blackens). Step 4: Ba$^{2+}$ never precipitates with HCl at all — its group reagent is ammonium carbonate.',
      },
      {
        q: 'Ammonium chloride is added *before* ammonium hydroxide while testing for Group III cations because',
        options: ['the common ion $\\text{NH}_4^+$ keeps $[\\text{OH}^-]$ low, so Mg(OH)$_2$ does not precipitate along with the Group III hydroxides', 'it increases the solubility of $\\text{Fe(OH)}_3$', 'it complexes Fe$^{3+}$ and prevents its precipitation', 'it oxidises Fe$^{2+}$ to Fe$^{3+}$'],
        answer: 0,
        explanation: 'Step 1: $\\text{NH}_4\\text{OH}$ is a weak base; its dissociation is suppressed by the common ion $\\text{NH}_4^+$ from the strong-ish electrolyte $\\text{NH}_4\\text{Cl}$. Step 2: The resulting $[\\text{OH}^-]$ is low — a buffered, mildly basic medium. Step 3: Only hydroxides with very small $K_{sp}$ (Fe$^{3+}$, Al$^{3+}$, Cr$^{3+}$) exceed their solubility products; $\\text{Mg(OH)}_2$, relatively soluble, waits in solution for its own Group V test. Step 4: Far from preventing precipitation, the buffer *ensures selective* precipitation — and it has no redox role.',
      },
      {
        q: 'A reddish-brown precipitate from Group III gives a deep-blue colouration with potassium ferrocyanide. The cation confirmed is',
        options: ['$\\text{Fe}^{3+}$', '$\\text{Fe}^{2+}$', '$\\text{Cu}^{2+}$', '$\\text{Cr}^{3+}$'],
        answer: 0,
        explanation: 'Step 1: The reddish-brown gelatinous Group III precipitate is $\\text{Fe(OH)}_3$, already pointing to Fe$^{3+}$. Step 2: With $\\text{K}_4[\\text{Fe(CN)}_6]$, Fe$^{3+}$ forms Prussian blue, $\\text{Fe}_4[\\text{Fe(CN)}_6]_3$, an intense deep-blue mixed-valence precipitate. Step 3: Fe$^{2+}$ gives a white ferrocyanide that *turns* blue on standing/oxidation, while its classical deep-blue test uses ferricyanide (Turnbull\'s blue); Cu$^{2+}$ gives a chocolate-brown ferrocyanide. Step 4: The colour of the hydroxide plus the blue ferrocyanide test jointly pin ferric iron.',
      },
    ]
  },
  // ---------------------------------------------------------------- 18.2 (Chemistry)
  {
    sectionId: 'chem-ch9-s17',
    readingTime: 11,
    prerequisites: [
      'Structure of benzene and the mechanism of electrophilic aromatic substitution (chem-a18-s1)',
      'Resonance and electronic effects (+M, −M, +I, −I) from organic basics (chem-a16)',
      'Acid strength and the stabilisation of charged intermediates by delocalisation',
    ],
    intro: 'Put one substituent on a benzene ring and it dictates the fate of the next: where the incoming electrophile lands and how fast it arrives. Electron-donating groups such as $-\\text{OH}$ and $-\\text{NH}_2$ flood the ring with electron density — ortho/para attack, faster reaction — while electron-withdrawing groups like $-\\text{NO}_2$ starve it and redirect attack to the meta position. advanced engineering assessment tests the concept three ways at once: predicting products, ranking rates, and — hardest of all — planning multi-step syntheses where the *order* of substitution is the whole answer.',
    objectives: [
      'Classify substituents as activating/ortho–para, deactivating/meta, or the halogen special case (deactivating yet ortho–para)',
      'Predict the major product (and significant minor products) of electrophilic substitution on monosubstituted benzenes, including steric bias toward para',
      'Rank reactivity toward a fixed electrophile (e.g. nitration) across substituted rings and match conditions to activation level',
      'Design two-step syntheses on benzene where the target isomer is reachable only by choosing the correct order of substituent installation',
    ],
    concepts: [
      {
        term: 'Ortho/para directors — the donors',
        kind: 'definition',
        statement: 'Groups that donate electron density by resonance ($-\\text{OH}$, $-\\text{NH}_2$, $-\\text{OR}$, $-\\text{NHR}$, $-\\text{NR}_2$) or hyperconjugation/induction ($-\\text{R}$ alkyl, $-\\text{aryl}$) are **activating ortho/para directors**: they accelerate electrophilic substitution and steer the new group to the 2- and 4-positions.',
        detail: 'The reason lives in the arenium ($\\sigma$) complex: for ortho or para attack, one resonance form places the positive charge on the carbon bearing the substituent, where the donor\'s lone pair can stabilise it by delocalisation ($+M$). Meta attack never generates that stabilised form. Strength ladder for nitration ease: $-\\text{NH}_2 > -\\text{OH} > -\\text{OR} > $ alkyl $> $ H. Practical fingerprint: phenol and aniline nitrate with *dilute* $\\text{HNO}_3$ at room temperature (aniline\'s $-\\text{NH}_2$ must be protected as the acetanilide in practice, or the oxidising acid wrecks it).',
      },
      {
        term: 'Meta directors — the withdrawers',
        kind: 'definition',
        statement: 'Groups that withdraw electron density by resonance ($-\\text{NO}_2$, $-\\text{CN}$, $-\\text{CHO}$, $-\\text{COR}$, $-\\text{COOH}$, $-\\text{COOR}$, $-\\text{CONH}_2$) or strongly by induction ($-\\text{NR}_3^+$, $-\\text{CCl}_3$) are **deactivating meta directors**: substitution slows and the new group enters the 3-position.',
        detail: 'For ortho/para attack on such a ring, a resonance form of the arenium ion places the cation *adjacent* to the electron sink — a violently destabilised structure; meta attack avoids that resonance form entirely, so meta is the least-bad option, not an actively good one. Hence meta products always need harsher conditions (nitrobenzene requires conc. $\\text{HNO}_3$/conc. $\\text{H}_2\\text{SO}_4$ near 370–380 K, versus ~330 K for benzene), and second nitrations of deactivated rings are slow. Ranking deactivation for nitration: $-\\text{NO}_2 > -\\text{CHO} \\approx -\\text{COR} > -\\text{COOH} > $ halogens.',
      },
      {
        term: 'The halogen paradox',
        kind: 'insight',
        statement: 'Halogens are the **only deactivating ortho/para directors**: their strong $-I$ effect drains electron density overall (slower reaction than benzene), yet their lone pairs still delocalise into the ring ($+M$) and specifically stabilise the ortho/para $\\sigma$-complexes.',
        detail: 'Chlorobenzene nitrates about 30 times slower than benzene yet gives a mixture of 4-chloronitrobenzene (major) and 2-chloronitrobenzene — never the meta product in significant amount. The apparent contradiction dissolves once "rate" (governed by net electron density, dominated by $-I$) is separated from "orientation" (governed by which $\\sigma$-complex is best stabilised, where $+M$ wins). This single concept generates a steady supply of assertion–reason questions, so be ready to defend both halves independently.',
      },
      {
        term: 'Multiple substituents and sterics',
        kind: 'method',
        statement: 'On a disubstituted benzene, **the strongest activator controls the orientation**; if two groups direct to the same position it is favoured, if they conflict the activating group wins; and positions between two meta-related substituents (crowded) are strongly disfavoured sterically. Bulky substituents or electrophiles bias toward para over ortho.',
        detail: 'For example, in $p$-nitrotoluene further substitution is steered by $-\\text{CH}_3$ (the activator) to positions 2 and 6 (ortho to methyl, meta to nitro — the directors *agree*), whereas in $m$-dinitrobenzene the only sites both groups will tolerate are 2/4/6... in practice a third nitration is extremely hard. Steric rule of thumb: electrophiles the size of $\\text{SO}_3$ (sulphonation) or $text{-tert-butyl}$ (FC with isobutylene) show heavy para preference. Also recall that sulphonation is *reversible*, so $-\\text{SO}_3\\text{H}$ occasionally serves as a temporary blocking group to force para selectivity — a favourite Advanced synthesis trick.',
      },
      {
        term: 'Order-of-operations synthesis',
        kind: 'method',
        statement: 'Because the first substituent installed directs the second, **the target isomer fixes the sequence**: to place two groups meta, install the meta-directing relationship by putting the *director-last* logic in reverse — introduce the group that becomes the meta director first (or create it by transformation, e.g. oxidising $-\\text{CH}_3$ to $-\\text{COOH}$). To place them ortho/para, install the o/p director first.',
        detail: 'Worked logic: (a) $p$-bromonitrobenzene requires bromination *then* nitration (Br directs nitro para); nitration *then* bromination would give the meta isomer. (b) $m$-nitrobenzoic acid requires benzoic acid *before* nitration — reached from toluene by oxidation, since $-\\text{COOH}$ is a meta director; nitrating toluene first and then oxidising instead yields the para isomer. Remember the constraints: Friedel–Crafts reactions fail on strongly deactivated rings (nitrobenzene, benzoic acid) and on rings bearing $-\\text{NH}_2$ (Lewis-acid complexation) — a wrong route can be impossible, not just clumsy.',
      },
    ],
    examples: [
      {
        title: 'Three nitrations, three verdicts',
        problem: 'Predict the product(s) and comment on conditions for the nitration of (a) phenol, (b) nitrobenzene, (c) toluene.',
        steps: [
          { label: 'Step 1', text: '(a) Phenol: $-\\text{OH}$ is the strongest simple activating o/p director — its lone pair delocalises into the ring, stabilising the arenium ion at ortho/para. With *dilute* $\\text{HNO}_3$ at room temperature phenol gives a mixture of o-nitrophenol and p-nitrophenol (separable by steam distillation: the ortho isomer is steam-volatile thanks to intramolecular H-bonding, the para isomer is not).' },
          { label: 'Step 2', text: 'With concentrated $\\text{HNO}_3$ phenol over-nitrates to 2,4,6-trinitrophenol (picric acid) — the ring is so activated that all three activated positions (2, 4, 6 — every position ortho or para to $\\text{OH}$) are exhausted. Mild conditions are not a stylistic choice; they are the only way to stop at mononitration.' },
          { label: 'Step 3', text: '(b) Nitrobenzene: $-\\text{NO}_2$ is a powerful deactivating meta director; for ortho/para attack the $\\sigma$-complex would place positive charge adjacent to the positively-polarised nitro nitrogen — intolerable. Meta attack avoids that structure, so with conc. $\\text{HNO}_3$/conc. $\\text{H}_2\\text{SO}_4$ and heat ($\\sim$ 370 K) the product is $m$-dinitrobenzene, in low yield and slowly.' },
          { label: 'Step 4', text: '(c) Toluene: $-\\text{CH}_3$ activates by hyperconjugation and directs o/p; nitration at ordinary temperature gives a mixture of o-nitrotoluene and p-nitrotoluene (para usually the larger fraction because the methyl group crowds the ortho positions) with negligible meta.' },
          { label: 'Step 5', text: 'Rate comparison for the same electrophile: phenol $\\gg$ toluene $>$ benzene $>$ nitrobenzene — matched exactly by the conditions each needs (dilute/room-temperature for the first, heated fuming acids for the last). Orientation and activation are two readings of the same $\\sigma$-complex energetics.' },
        ],
        result: '(a) o- + p-nitrophenol with dilute $\\text{HNO}_3$; picric acid with excess; (b) $m$-dinitrobenzene under forcing conditions; (c) o- + p-nitrotoluene, para major.',
      },
      {
        title: 'Two isomers, one starting material: order of operations',
        problem: 'Starting from benzene, devise syntheses of (i) $m$-nitrobenzoic acid and (ii) $p$-nitrobenzoic acid, and explain why the orders cannot be swapped.',
        steps: [
          { label: 'Step 1', text: '(i) Meta target $\\Rightarrow$ nitration must occur on a ring already bearing the meta director. Route: benzene $\\xrightarrow{\\text{CH}_3\\text{Cl}/\\text{AlCl}_3}$ toluene $\\xrightarrow{\\text{hot KMnO}_4}$ benzoic acid $\\xrightarrow{\\text{conc. HNO}_3/\\text{H}_2\\text{SO}_4}$ $m$-nitrobenzoic acid. The $-\\text{COOH}$ group (formed by oxidising methyl) withdraws by $-M$ and directs the nitro to position 3.' },
          { label: 'Step 2', text: '(ii) Para target $\\Rightarrow$ nitration must occur while the ring still carries the o/p director. Route: benzene $\\to$ toluene (FC alkylation) $\\xrightarrow{\\text{HNO}_3/\\text{H}_2\\text{SO}_4}$ mixture of o- and p-nitrotoluene (isolate the para isomer) $\\xrightarrow{\\text{hot KMnO}_4}$ $p$-nitrobenzoic acid — the oxidation is untouched by the nitro group and converts the director after it has done its job.' },
          { label: 'Step 3', text: 'Why (i) cannot run as nitrate-then-oxidise: nitrating toluene first gives o/p isomers (the $-\\text{CH}_3$ director), and oxidising those delivers the *para* (or ortho) nitro acid — the wrong isomer for target (i). The meta relationship can only be created by nitrating last.' },
          { label: 'Step 4', text: 'Why the "obvious" alternative — nitrate benzene first, then attach the carbon chain — fails twice over: nitrobenzene is too deactivated for Friedel–Crafts alkylation (the arenium ion cannot form on a ring carrying $-\\text{NO}_2$), and benzoic-acid derivatives also poison the $\\text{AlCl}_3$ catalyst.' },
          { label: 'Step 5', text: 'General principle extracted: the isomer you want *is* a sequencing instruction. Transforming a group in place ($-\\text{CH}_3 \\to -\\text{COOH}$) flips it from o/p director to meta director — a "director switch" that unlocks isomers otherwise unreachable in two steps.' },
        ],
        result: '(i) FC methylation $\\to$ oxidation $\\to$ nitration gives the meta isomer; (ii) FC methylation $\\to$ nitration (para) $\\to$ oxidation gives the para isomer; the orders are not interchangeable.',
      },
    ],
    keyTakeaways: [
      'Donors ($-\\text{OH}$, $-\\text{NH}_2$, $-\\text{OR}$, alkyl) activate and direct o/p; withdrawers ($-\\text{NO}_2$, carbonyls, $-\\text{CN}$, $-\\text{SO}_3\\text{H}$) deactivate and direct meta — both follow from which $\\sigma$-complex resonance forms are stabilised or wrecked.',
      'Halogens are the exception that proves the rule: net deactivating ($-I$) yet o/p-directing ($+M$) — keep rate and orientation arguments separate.',
      'The strongest activator rules disubstituted rings, and sterics push bulky electrophiles/para sites; positions between two substituents are disfavoured.',
      'Synthesis is sequencing: create the directing relationship first (or switch a group in place, like $-\\text{CH}_3 \\to -\\text{COOH}$), and remember FC fails on deactivated rings.',
    ],
    quiz: [
      {
        q: 'Which of the following substituents is deactivating yet directs incoming electrophiles to the ortho and para positions?',
        options: ['$-\\text{Cl}$', '$-\\text{NO}_2$', '$-\\text{OH}$', '$-\\text{CH}_3$'],
        answer: 0,
        explanation: 'Step 1: Separate the two properties: net rate effect (activation) and orientation. Step 2: $-\\text{Cl}$ has a strong $-I$ (deactivates: chlorobenzene nitrates ~30 times slower than benzene) but its lone pairs delocalise into the ring ($+M$), stabilising exactly the ortho/para $\\sigma$-complexes. Step 3: $-\\text{NO}_2$ deactivates and directs meta; $-\\text{OH}$ and $-\\text{CH}_3$ activate and direct o/p. Step 4: Thus $-\\text{Cl}$ (and F, Br, I) are the unique deactivating-o/p class.',
      },
      {
        q: 'The major product of mononitration of anisole (methoxybenzene) is',
        options: ['$p$-nitroanisole, with some ortho isomer', '$m$-nitroanisole', 'nitrobenzene after demethylation', '2,4,6-trinitroanisole'],
        answer: 0,
        explanation: 'Step 1: $-\\text{OCH}_3$ is a strong $+M$ donor and therefore an activating o/p director. Step 2: The electrophile therefore lands at positions 2 and 4; the para site wins statistically and sterically (the methoxy group crowds both ortho positions), so $p$-nitroanisole dominates with some $o$-nitroanisole. Step 3: Meta product is not formed in significant amount because meta attack forfeits the resonance stabilisation the methoxy lone pair offers the o/p $\\sigma$-complex. Step 4: Trinitration needs excess nitrating agent and far harsher treatment; demethylation is not part of aromatic nitration.',
      },
      {
        q: 'Which group directs electrophilic substitution to the meta position?',
        options: ['$-\\text{COCH}_3$ (acetyl)', '$-\\text{CH}_3$', '$-\\text{OH}$', '$-\\text{NHCOCH}_3$ (acetamido)'],
        answer: 0,
        explanation: 'Step 1: Meta directors are resonance or strong inductive withdrawers — carbonyl-attached groups top the list. Step 2: $-\\text{COCH}_3$ withdraws by $-M$ (the carbonyl oxygen pulls electron density through the C=O), so ortho/para $\\sigma$-complexes place positive charge beside the electron sink and meta attack is favoured. Step 3: $-\\text{CH}_3$ (hyperconjugation), $-\\text{OH}$ and $-\\text{NHCOCH}_3$ (lone-pair donors) are all o/p directors — acetamido is merely a *weaker* activator than $-\\text{NH}_2$ because the nitrogen lone pair is shared with its own carbonyl. Step 4: Acetanilide nitration consequently gives $p$-nitroacetanilide, not the meta product.',
      },
      {
        q: 'Benzoic acid is nitrated with conc. $\\text{HNO}_3/\\text{H}_2\\text{SO}_4$. The major product is',
        options: ['$m$-nitrobenzoic acid', '$o$-nitrobenzoic acid', '$p$-nitrobenzoic acid', 'benzoic acid does not undergo nitration'],
        answer: 0,
        explanation: 'Step 1: The $-\\text{COOH}$ group withdraws electron density by $-M$ (and $-I$), deactivating the ring and directing meta. Step 2: For ortho/para attack, a resonance form of the $\\sigma$-complex puts the cation on the carbon adjacent to the carboxyl — strongly destabilised; meta attack never generates that form. Step 3: The electrophile therefore enters position 3, giving $m$-nitrobenzoic acid as the dominant product, though slowly and with heating. Step 4: "No reaction" is wrong — deactivated rings still substitute under forcing conditions; only Friedel–Crafts reactions are effectively forbidden on them.',
      },
    ]
  },
  // ---------------------------------------------------------------- 12.6 (Maths)
  {
    sectionId: 'calc-ch3-s16',
    readingTime: 12,
    prerequisites: [
      'Derivatives of standard functions and the chain rule (math-a12-s1, math-a12-s2)',
      'Continuity on closed intervals (math-a11-s2)',
      'Monotonicity from the sign of the first derivative (math-a12-s5)',
    ],
    intro: 'Differentiation answers local questions; the mean value theorems convert it into global statements about a whole interval. Rolle\'s theorem promises a flat tangent somewhere between two equal heights, Lagrange\'s mean value theorem (LMVT) promises a tangent parallel to the end-point chord, and both — though pure existence results — become sharp tools: they count roots, prove inequalities like $\\frac{x}{1+x} < \\ln(1+x) < x$, and police the extrema of functions whose derivative vanishes for reasons you must interrogate. advanced engineering assessment rarely asks "state the theorem"; it asks you to *use* it three steps into a problem.',
    objectives: [
      'State Rolle\'s theorem and LMVT precisely, check their hypotheses on a given function, and find the guaranteed point(s) $c$ explicitly',
      'Use Rolle\'s theorem to bound the number of real roots of an equation via roots of the derivative',
      'Convert LMVT into inequalities by bounding $f\'$ on an interval, and apply it to $\\ln$, $e^x$, trigonometric and power functions',
      'Audit functions for global extrema: critical points, endpoints and points of non-differentiability, with the second-derivative test as a fallible shortcut',
    ],
    concepts: [
      {
        term: 'Rolle\'s theorem',
        kind: 'theorem',
        statement: 'If $f$ is **continuous on $[a, b]$**, **differentiable on $(a, b)$**, and $f(a) = f(b)$, then there exists at least one $c \\in (a, b)$ with $$f\'(c) = 0.$$ Geometrically: between two equal heights the graph has a horizontal tangent.',
        detail: 'The hypotheses are *sufficient*, not necessary — $f(x) = x^3$ on $[-1, 1]$ has $f(-1) \\ne f(1)$ yet still a flat tangent at 0. The assessment standard is the converse probe: on $f(x) = |x|$ over $[-1, 1]$, continuity and equal endpoint values hold, but differentiability fails at 0 — and indeed no horizontal tangent exists, so each hypothesis earns its place. Typical task: verify all three conditions, then solve $f\'(x) = 0$ and confirm the roots land inside the *open* interval.',
      },
      {
        term: 'Lagrange\'s mean value theorem',
        kind: 'theorem',
        statement: 'If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, there exists $c \\in (a, b)$ such that $$f\'(c) = \\frac{f(b) - f(a)}{b - a}.$$ Equivalently $f(b) = f(a) + (b-a)f\'(c)$: somewhere the tangent is parallel to the chord joining the endpoints.',
        detail: 'Rolle is the special case $f(a) = f(b)$ (chord slope zero). LMVT is the tool for *estimates*: if $m \\le f\'(x) \\le M$ throughout $(a, b)$, then $m(b-a) \\le f(b) - f(a) \\le M(b-a)$. It also grounds monotonicity: $f\' > 0$ on an interval makes every chord slope positive, so $f$ is strictly increasing. advanced engineering assessment numericals hide $c$ inside nastier algebra (roots like $c = \\sqrt{ab}$ from applying LMVT to $\\ln x$ or $\\sqrt{x}$), so practise the pattern $f\'(c) = \\frac{f(b)-f(a)}{b-a}$ solved for $c$.',
      },
      {
        term: 'Counting roots with Rolle',
        kind: 'method',
        statement: 'Between any two distinct real roots of a differentiable function lies a root of its derivative. Consequently, if $f\'$ has **no** real root in an interval, $f$ has **at most one** root there; if $f\'$ has at most $k$ roots, $f$ has at most $k + 1$ roots.',
        detail: 'Contrapositive thinking: to show an equation has at most one solution, exhibit a derivative that never vanishes (monotone function). To show it has *at least* one, use the intermediate value property of continuous functions on a sign change — the two arguments together pin the count exactly. Classic instance: $e^x = x + 1$ — since $f\'(x) = e^x - 1$ vanishes only at $x = 0$ and $f(0) = 0$ is already the global minimum (as $f$ decreases then increases), the root is unique.',
      },
      {
        term: 'Inequalities from LMVT',
        kind: 'method',
        statement: 'Apply LMVT to a well-chosen $f$ on $[a, b]$ and squeeze the unknown $c$: for $x > 0$, $$\\frac{x}{1+x} < \\ln(1+x) < x,$$ from LMVT on $f(t) = \\ln(1+t)$ over $[0, x]$, where $\\ln(1+x) = \\frac{x}{1+c}$ with $0 < c < x$.',
        detail: 'Because $\\frac{1}{1+x} < \\frac{1}{1+c} < 1$ for $0 < c < x$, the single LMVT identity spawns both bounds. The same template on $f(t) = \\sqrt{t}$ over $[x, x+1]$ gives $\\frac{1}{2\\sqrt{x+1}} < \\sqrt{x+1} - \\sqrt{x} < \\frac{1}{2\\sqrt{x}}$, and on $f(t) = \\sin t$ it gives $|\\sin a - \\sin b| \\le |a - b|$. Recognise the signature: any inequality comparing a function increment with a product of an interval length and a derivative bound is an LMVT production.',
      },
      {
        term: 'Extrema — the complete audit',
        kind: 'insight',
        statement: 'A continuous function on a closed interval attains its global max and min, and they occur only at (i) interior points with $f\' = 0$, (ii) interior points where $f\'$ fails to exist, or (iii) the endpoints. The **second-derivative test** ($f\'\' > 0$: local min, $f\'\' < 0$: local max) is a shortcut that fails when $f\'\' = 0$.',
        detail: 'Three landmines: $f\'(c) = 0$ does not imply an extremum ($x^3$ at 0); extrema can sit at non-differentiable points ($|x|$ at 0); and $f\'\'(c) = 0$ is inconclusive ($x^4$ has a minimum at 0, $-x^4$ a maximum, $x^3$ neither) — fall back on the sign change of $f\'$. For closed-interval problems, *always* tabulate endpoint values alongside critical values; advanced engineering assessment\'s "greatest value of $f(x) = x^3 - 12x + 5$ on $[0, 3]$" style questions are decided by the endpoints more often than students expect.',
      },
    ],
    examples: [
      {
        title: 'Verifying Rolle\'s theorem and catching both points',
        problem: 'Verify the hypotheses of Rolle\'s theorem for $f(x) = x^3 - 4x$ on $[-2, 2]$, find every $c$ whose existence it guarantees, and interpret the answer on the graph.',
        steps: [
          { label: 'Step 1', text: 'Hypotheses: $f$ is a polynomial, so it is continuous on $[-2, 2]$ and differentiable on $(-2, 2)$; and $f(-2) = -8 + 8 = 0 = f(2) = 8 - 8$. All three conditions hold, so at least one $c$ exists.' },
          { label: 'Step 2', text: 'Solve $f\'(x) = 3x^2 - 4 = 0 \\Rightarrow x = \\pm\\frac{2}{\\sqrt{3}} \\approx \\pm 1.155$.' },
          { label: 'Step 3', text: 'Both candidates lie strictly inside $(-2, 2)$, so Rolle\'s theorem actually delivers *two* points: $c = -\\frac{2}{\\sqrt{3}}$ and $c = +\\frac{2}{\\sqrt{3}}$ — the theorem guarantees "at least one", and here the count is two.' },
          { label: 'Step 4', text: 'Graph reading: the curve runs from $(-2, 0)$ up to a local max at $(-\\frac{2}{\\sqrt{3}}, f(-\\frac{2}{\\sqrt{3}}))$, down through the origin to a local min at $(\\frac{2}{\\sqrt{3}}, f(\\frac{2}{\\sqrt{3}}))$, and back up to $(2, 0)$ — the chord from $(-2,0)$ to $(2,0)$ is horizontal, and both horizontal tangents are parallel to it.' },
          { label: 'Step 5', text: 'Root-count cross-check: $f$ has roots $-2, 0, 2$ — three roots — and indeed $f\'$ has (at least) $3 - 1 = 2$ roots, exactly the pair we found. Rolle\'s root-counting corollary is the same statement read backwards.' },
        ],
        result: 'Rolle applies (polynomial continuity/differentiability, $f(-2) = f(2) = 0$); $c = \\pm\\frac{2}{\\sqrt{3}}$, the two local-extremum points where the tangent is horizontal.',
      },
      {
        title: 'Proving $\\frac{x}{1+x} < \\ln(1+x) < x$ with LMVT',
        problem: 'Using Lagrange\'s mean value theorem, prove that for every $x > 0$, $$\\frac{x}{1+x} < \\ln(1+x) < x,$$ and deduce the behaviour of $\\ln(1+x)$ relative to $x$ as $x \\to 0^+$.',
        steps: [
          { label: 'Step 1', text: 'Choose $f(t) = \\ln(1+t)$ on $[0, x]$ with $x > 0$: it is continuous on the closed interval and differentiable on the open one, with $f\'(t) = \\frac{1}{1+t}$ — LMVT applies.' },
          { label: 'Step 2', text: 'LMVT gives some $c \\in (0, x)$ with $\\frac{f(x) - f(0)}{x - 0} = f\'(c)$, i.e. $\\ln(1+x) = \\frac{x}{1+c}$, since $f(0) = \\ln 1 = 0$.' },
          { label: 'Step 3', text: 'Squeeze the hidden $c$: from $0 < c < x$ we get $1 < 1 + c < 1 + x$, hence $\\frac{1}{1+x} < \\frac{1}{1+c} < 1$.' },
          { label: 'Step 4', text: 'Multiply through by $x > 0$: $\\frac{x}{1+x} < \\frac{x}{1+c} < x$, and the middle term *is* $\\ln(1+x)$ — the inequality is proved. (For $-1 < x < 0$ the same run with reversed signs yields the same displayed inequality.)' },
          { label: 'Step 5', text: 'Deduction: as $x \\to 0^+$ both bounds $\\to 0$, so $\\ln(1+x) \\to 0$ and $\\ln(1+x) \\sim x$ — the first-order approximation that also explains $\\lim_{x\\to0}\\frac{\\ln(1+x)}{x} = 1$ without l\'Hôpital. The identical template on $\\tan^{-1}t$ gives $\\frac{x}{1+x^2} < \\tan^{-1}x < x$ for $x > 0$.' },
        ],
        result: 'LMVT on $[0, x]$ converts $\\ln(1+x)$ into $\\frac{x}{1+c}$ with $0 < c < x$; squeezing $c$ yields $\\frac{x}{1+x} < \\ln(1+x) < x$ for all $x > 0$.',
      },
    ],
    keyTakeaways: [
      'Rolle needs all three hypotheses — continuity on $[a,b]$, differentiability on $(a,b)$, $f(a) = f(b)$; LMVT drops only the last.',
      'Both are existence results, but solving $f\'(c) = \\frac{f(b)-f(a)}{b-a}$ pins $c$ down explicitly — always check it lies in the open interval.',
      'Root counting: roots of $f\'$ interleave roots of $f$; a derivative with no roots means at most one root, and IVP + sign change supplies existence.',
      'LMVT on $\\ln(1+t)$, $\\sqrt{t}$, $\\sin t$, $\\tan^{-1}t$ manufactures the standard inequalities — recognise "increment vs derivative $\\times$ interval" as its signature.',
    ],
    quiz: [
      {
        q: 'Rolle\'s theorem is *not* applicable to $f(x) = |x|$ on $[-1, 1]$ because',
        options: ['$f$ is not differentiable at $x = 0$, an interior point', '$f(-1) \\ne f(1)$', '$f$ is not continuous on $[-1, 1]$', 'the function has no zero in $(-1, 1)$'],
        answer: 0,
        explanation: 'Step 1: Check the hypotheses in order: $|x|$ is continuous everywhere, so continuity holds. Step 2: $f(-1) = 1 = f(1)$, so the equal-endpoints condition also holds. Step 3: But $\\frac{|x| - 0}{x}$ has left limit $-1$ and right limit $+1$ at $x = 0$: $f$ is not differentiable at the interior point 0 — the failing hypothesis. Step 4: Consistently, no horizontal tangent exists on $(-1,1)$, showing the hypothesis cannot be dropped. (The "no zero" option misreads Rolle — it requires equal endpoint values, not zeros.)',
      },
      {
        q: 'The number of values of $c \\in (0, 2)$ guaranteed... : for $f(x) = x^3 - 3x^2 + 2x$ on $[0, 2]$, Rolle\'s theorem delivers how many points $c$ with $f\'(c) = 0$?',
        options: ['$2$', '$1$', '$3$', '$0$'],
        answer: 0,
        explanation: 'Step 1: $f$ is a polynomial and $f(0) = 0$, $f(2) = 8 - 12 + 4 = 0$: Rolle applies. Step 2: $f\'(x) = 3x^2 - 6x + 2 = 0$ gives $x = \\frac{6 \\pm \\sqrt{36 - 24}}{6} = 1 \\pm \\frac{\\sqrt{3}}{3}$. Step 3: Numerically $x \\approx 0.42$ and $x \\approx 1.58$, and both lie in $(0, 2)$. Step 4: So the theorem\'s "at least one" is realised as exactly two points — matching the root count $f(x) = x(x-1)(x-2)$ with three roots guaranteeing at least two critical points.',
      },
      {
        q: 'For $f(x) = \\sqrt{x}$ on $[1, 4]$, the value of $c$ satisfying LMVT is',
        options: ['$\\frac{9}{4}$', '$\\frac{3}{2}$', '$2$', '$\\frac{25}{16}$'],
        answer: 0,
        explanation: 'Step 1: $\\sqrt{x}$ is continuous on $[1,4]$ and differentiable on $(1,4)$, so LMVT applies. Step 2: Chord slope: $\\frac{f(4) - f(1)}{4 - 1} = \\frac{2 - 1}{3} = \\frac{1}{3}$. Step 3: $f\'(c) = \\frac{1}{2\\sqrt{c}} = \\frac{1}{3} \\Rightarrow \\sqrt{c} = \\frac{3}{2} \\Rightarrow c = \\frac{9}{4}$. Step 4: Check $1 < \\frac{9}{4} < 4$ $\\checkmark$ — the point where the tangent slope equals the chord slope sits at $x = 2.25$, not at the midpoint, because $\\sqrt{x}$ flattens as $x$ grows.',
      },
      {
        q: 'The number of real roots of the equation $e^x = x + 1$ is',
        options: ['$1$', '$0$', '$2$', 'infinitely many'],
        answer: 0,
        explanation: 'Step 1: Define $f(x) = e^x - x - 1$; we need its zeros. Step 2: Existence: $f(0) = 1 - 0 - 1 = 0$, so $x = 0$ is a root. Step 3: Uniqueness via monotonicity: $f\'(x) = e^x - 1$, which is negative for $x < 0$, zero at $x = 0$ and positive for $x > 0$ — so $f$ strictly decreases up to $x = 0$ and strictly increases after it. Step 4: Hence $f(0) = 0$ is the global minimum and the graph touches the axis exactly once: one real root. Alternatively, by Rolle: two roots would force a root of $f\'$ strictly between them; $f\'$ vanishes only at 0, where $f = 0$ — so a second root is impossible.',
      },
    ]
  },
  // ---------------------------------------------------------------- 13.5 (Maths)
  {
    sectionId: 'calc-ch5-s8',
    readingTime: 13,
    prerequisites: [
      'Indefinite integration by substitution, partial fractions and by parts (math-a13-s2, math-a13-s3)',
      'Definite integrals as limits of Riemann sums (math-a13-s4)',
      'Even, odd and periodic functions (math-a1-s5) and the limit $\\lim_{x\\to0^+} x\\ln x$',
    ],
    intro: 'The fundamental theorem turns integration from an infinite summation into antiderivative bookkeeping — but the properties of the *definite* integral are where advanced engineering assessment actually lives. The king property $\\int_a^b f(x)\\,dx = \\int_a^b f(a+b-x)\\,dx$ alone cracks integrals that no antiderivative table touches; even–odd and periodic symmetries turn $[-a, a]$ and $[0, nT]$ into half- or $n$-fold copies; and the Leibniz rule differentiates integrals whose limits are functions. Add the limit-of-sums reading and the same theory evaluates things like $\\lim_{n\\to\\infty}\\left(\\frac{n!}{n^n}\\right)^{1/n}$ in four lines.',
    objectives: [
      'Apply the king property and its add-both trick to evaluate symmetric integrals such as $\\int_0^\\pi \\frac{x\\sin x}{1+\\cos^2x}\\,dx$',
      'Exploit even/odd symmetry and periodicity to shrink integration domains before computing anything',
      'Differentiate integrals with variable (or functional) limits via the Leibniz rule $\\frac{d}{dx}\\int_{u(x)}^{v(x)}f(t)\\,dt = f(v)v\' - f(u)u\'$',
      'Recognise Riemann sums — especially $\\frac{1}{n}\\sum_{r=1}^{n}f\\left(\\frac{r}{n}\\right) \\to \\int_0^1f(x)\\,dx$ — and use them to evaluate sequence limits',
    ],
    concepts: [
      {
        term: 'Orientation and additivity',
        kind: 'method',
        statement: 'By definition $\\int_a^b f = -\\int_b^a f$, and integration is additive over adjacent intervals: $\\int_a^b f + \\int_b^c f = \\int_a^c f$. Combined with linearity, $\\int_a^b(\\alpha f + \\beta g) = \\alpha\\int_a^bf + \\beta\\int_a^bg$.',
        detail: 'These bookkeeping rules look trivial but power the "split at the awkward point" strategy: integrate $|x|$ or $\\{x\\}$ (fractional part) by splitting where the formula changes, and handle piecewise-defined integrands interval by interval. A signed area below the axis counts negative — so $\\int_0^{2\\pi}\\sin x\\,dx = 0$ even though the "area" is 4; only $\\int|f|$ gives unsigned area. Most Advanced "find the area" traps are really sign-discipline traps.',
      },
      {
        term: 'The king property',
        kind: 'theorem',
        statement: 'For any integrable $f$ on $[a, b]$, $$\\int_a^b f(x)\\,dx = \\int_a^b f(a + b - x)\\,dx.$$ Adding the two forms gives the working tool: $$2I = \\int_a^b\\left[f(x) + f(a+b-x)\\right]dx,$$ which is decisive whenever the sum simplifies.',
        detail: 'The substitution $x \\mapsto a + b - x$ reverses the direction of travel, leaving the integral\'s value untouched. On $[0, \\pi]$ it converts $\\sin x \\to \\sin x$, $\\cos x \\to -\\cos x$, $\\tan x \\to -\\tan x$; on $[0, \\pi/2]$ the partner $\\frac{\\pi}{2} - x$ swaps $\\sin \\leftrightarrow \\cos$. The classic strikes when the integrand pairs an $x$ (odd under the swap) with a symmetric factor: $\\int_0^\\pi x f(\\sin x)\\,dx = \\frac{\\pi}{2}\\int_0^\\pi f(\\sin x)\\,dx$. Also the fraction trick: $\\int_0^{\\pi/2}\\frac{\\sqrt{\\tan x}}{\\sqrt{\\tan x}+\\sqrt{\\cot x}}dx$ pairs with its mirror to sum to 1, forcing $I = \\pi/4$ without any antidifferentiation.',
      },
      {
        term: 'Even, odd and periodic integrands',
        kind: 'theorem',
        statement: 'For even $f$: $\\int_{-a}^{a}f = 2\\int_0^{a}f$; for odd $f$: $\\int_{-a}^{a}f = 0$. For $f$ with period $T$: $\\int_0^{nT}f = n\\int_0^{T}f$ for any positive integer $n$, and more generally $\\int_a^{a+T}f = \\int_0^{T}f$ for *any* $a$.',
        detail: 'Odd cancellation is the fastest zero in the business — spot it before integrating anything on a symmetric interval: $\\int_{-\\pi/2}^{\\pi/2}x^3\\cos^2x\\,dx = 0$ on sight. The period rule explains why $\\int_0^{4\\pi}|\\sin x|\\,dx = 4\\int_0^{\\pi}|\\sin x|\\,dx$ — wait, $|\\sin x|$ has period $\\pi$, so it equals $4 \\times 2 = 8$. Note $\\sin x$ itself has period $2\\pi$ but $|\\sin x|$ only $\\pi$: always integrate the *smallest* period before multiplying. Mixed integrands should be decomposed into symmetric parts first, since $f(x) = \\frac{f(x)+f(-x)}{2} + \\frac{f(x)-f(-x)}{2}$ splits any function into even + odd.',
      },
      {
        term: 'FTCT and the Leibniz rule',
        kind: 'theorem',
        statement: 'Fundamental theorem: if $f$ is continuous and $F(x) = \\int_a^x f(t)\\,dt$, then $F\'(x) = f(x)$. Leibniz extension: for differentiable limits, $$\\frac{d}{dx}\\int_{u(x)}^{v(x)}f(t)\\,dt = f(v(x))\\,v\'(x) - f(u(x))\\,u\'(x).$$',
        detail: 'Read it as "top limit contributes plus, bottom limit contributes minus". When the dummy variable itself depends on $x$ (e.g. $\\int_0^{x^2}\\cos(t^2)\\,dt$ — no, that one is fine; but $\\int_0^{x}\\frac{f(t)}{...}$... in general $\\int_{u(x)}^{v(x)}g(x, t)\\,dt$), first substitute to freeze the inner $x$, or split $\\int_0^{x^2} = \\int_0^{\\text{const}} + \\int_{\\text{const}}^{x^2}$. The theorem\'s existential power: $F(x) = \\int_0^x\\frac{\\sin t}{t}dt$ *is* a perfectly good function even though no elementary antiderivative exists — questions exploit exactly this by asking about $F\'$ or $F\'\'$ instead of $F$.',
      },
      {
        term: 'Definite integrals as limits of sums',
        kind: 'insight',
        statement: 'The defining limit survives as a computational tool: $$\\int_0^1 f(x)\\,dx = \\lim_{n\\to\\infty}\\frac{1}{n}\\sum_{r=1}^{n}f\\!\\left(\\frac{r}{n}\\right), \\qquad \\int_a^b f(x)\\,dx = \\lim_{n\\to\\infty}\\frac{b-a}{n}\\sum_{r=1}^{n}f\\!\\left(a + \\frac{r(b-a)}{n}\\right).$$',
        detail: 'Recognition drill: any limit of the form $\\lim\\sum \\frac{1}{n}f(\\frac{r}{n})$ with the number of terms growing like $n$ is a disguised $\\int_0^1$. The flagship example takes logarithms first — $\\left(\\frac{n!}{n^n}\\right)^{1/n}$ becomes $\\exp\\left[\\frac{1}{n}\\sum\\ln\\frac{r}{n}\\right] \\to \\exp\\int_0^1\\ln x\\,dx = e^{-1}$ — turning an intractable product into an improper integral evaluated by a one-limiter integration by parts. Similarly $\\lim\\frac{1^p + 2^p + \\cdots + n^p}{n^{p+1}} = \\int_0^1x^p\\,dx = \\frac{1}{p+1}$.',
      },
    ],
    examples: [
      {
        title: 'The king property on $\\int_0^\\pi \\frac{x\\sin x}{1+\\cos^2x}\\,dx$',
        problem: 'Evaluate $$I = \\int_0^{\\pi}\\frac{x\\sin x}{1+\\cos^2x}\\,dx.$$',
        steps: [
          { label: 'Step 1', text: 'Apply the king substitution $x \\to \\pi - x$: $\\sin(\\pi - x) = \\sin x$ and $\\cos(\\pi - x) = -\\cos x$, so $$I = \\int_0^{\\pi}\\frac{(\\pi - x)\\sin x}{1+\\cos^2x}\\,dx.$$' },
          { label: 'Step 2', text: 'Add the two expressions for $I$: $$2I = \\int_0^{\\pi}\\frac{x\\sin x + (\\pi - x)\\sin x}{1+\\cos^2x}\\,dx = \\pi\\int_0^{\\pi}\\frac{\\sin x}{1+\\cos^2x}\\,dx.$$ The lone $x$ has cancelled — the entire point of the manoeuvre.' },
          { label: 'Step 3', text: 'Substitute $t = \\cos x$, $dt = -\\sin x\\,dx$: as $x$ runs $0 \\to \\pi$, $t$ runs $1 \\to -1$, so $$\\int_0^{\\pi}\\frac{\\sin x}{1+\\cos^2x}dx = \\int_{1}^{-1}\\frac{-dt}{1+t^2} = \\int_{-1}^{1}\\frac{dt}{1+t^2}.$$' },
          { label: 'Step 4', text: 'The integrand $\\frac{1}{1+t^2}$ is even, so the integral is $2\\int_0^1\\frac{dt}{1+t^2} = 2[\\tan^{-1}t]_0^1 = 2\\cdot\\frac{\\pi}{4} = \\frac{\\pi}{2}$.' },
          { label: 'Step 5', text: 'Therefore $2I = \\pi\\cdot\\frac{\\pi}{2} = \\frac{\\pi^2}{2}$, giving $I = \\frac{\\pi^2}{4} \\approx 2.47$. Sanity check: the integrand is positive on $(0, \\pi)$ (both $x$ and $\\sin x$ are), and a value between $0$ and $\\pi \\times \\frac{\\pi}{4} \\approx 2.47$-ish bounds is plausible.' },
        ],
        result: '$I = \\frac{\\pi^2}{4}$.',
      },
      {
        title: 'A sequence limit as a Riemann sum: $\\left(\\frac{n!}{n^n}\\right)^{1/n}$',
        problem: 'Evaluate $$L = \\lim_{n\\to\\infty}\\left(\\frac{n!}{n^n}\\right)^{1/n}.$$',
        steps: [
          { label: 'Step 1', text: 'Take logarithms to convert the product into a sum: write $A_n = \\left(\\frac{n!}{n^n}\\right)^{1/n} = \\left(\\frac{1}{n}\\cdot\\frac{2}{n}\\cdots\\frac{n}{n}\\right)^{1/n}$, so $$\\ln A_n = \\frac{1}{n}\\sum_{r=1}^{n}\\ln\\frac{r}{n}.$$' },
          { label: 'Step 2', text: 'Recognise the Riemann signature: $\\frac{1}{n}$ times a sum of $f\\left(\\frac{r}{n}\\right)$ with $n$ terms, where $f(x) = \\ln x$ on $(0, 1]$. Hence $\\lim\\ln A_n = \\int_0^1\\ln x\\,dx$ — an improper integral, since $\\ln x \\to -\\infty$ at 0.' },
          { label: 'Step 3', text: 'Evaluate: $\\int_0^1\\ln x\\,dx = \\lim_{a\\to0^+}\\left[x\\ln x - x\\right]_a^1 = (0 - 1) - \\lim_{a\\to0^+}(a\\ln a - a) = -1 - 0 = -1$, using $\\lim_{a\\to0^+}a\\ln a = 0$.' },
          { label: 'Step 4', text: 'Exponentiate: $L = e^{\\lim\\ln A_n} = e^{-1} = \\frac{1}{e} \\approx 0.368$.' },
          { label: 'Step 5', text: 'Plausibility: $\\frac{n!}{n^n}$ is the probability that a random function from an $n$-set to itself is a permutation... more simply, $\\left(\\frac{n!}{n^n}\\right)^{1/n}$ is the geometric mean of $\\frac{1}{n}, \\frac{2}{n}, \\ldots, \\frac{n}{n}$, which should sit well below the arithmetic mean $\\frac{n+1}{2n} \\to \\frac{1}{2}$ — and $0.368 < 0.5$ as expected (AM–GM in the limit).' },
        ],
        result: '$L = e^{-1} = \\frac{1}{e}$.',
      },
    ],
    keyTakeaways: [
      'King property $\\int_a^bf(x)dx = \\int_a^bf(a+b-x)dx$; add both copies to kill odd factors like a lone $x$ — it evaluates integrals no antiderivative can.',
      'Odd on symmetric interval $\\Rightarrow$ 0 immediately; even $\\Rightarrow$ double the half; periodic $f$ with period $T$: $\\int_0^{nT}f = n\\int_0^{T}f$ (use the smallest period — $|\\sin x|$ has period $\\pi$).',
      'Leibniz rule: derivative of $\\int_{u(x)}^{v(x)}f$ is $f(v)v\' - f(u)u\'$ — upper limit in, lower limit out, minus sign attached.',
      '$\\frac{1}{n}\\sum_{r=1}^{n}f(\\frac{r}{n}) \\to \\int_0^1f$: after taking logs, products like $(n!/n^n)^{1/n}$ collapse to $e^{\\int_0^1\\ln x\\,dx} = 1/e$.',
    ],
    quiz: [
      {
        q: 'The value of $\\int_{-\\pi/2}^{\\pi/2}\\left(x^3 + x\\cos x + \\sin^4x\\right)dx$ is',
        options: ['$\\frac{3\\pi}{8}$', '$0$', '$\\frac{3\\pi}{16}$', '$\\frac{\\pi}{8}$'],
        answer: 0,
        explanation: 'Step 1: Split by symmetry: $x^3$ is odd and $x\\cos x$ is (odd)$\\times$(even) = odd, so both integrate to 0 over the symmetric interval. Step 2: $\\sin^4x$ is even, so the integral equals $2\\int_0^{\\pi/2}\\sin^4x\\,dx$. Step 3: Wallis formula: $\\int_0^{\\pi/2}\\sin^4x\\,dx = \\frac{3}{4}\\cdot\\frac{1}{2}\\cdot\\frac{\\pi}{2} = \\frac{3\\pi}{16}$. Step 4: Doubling gives $\\frac{3\\pi}{8}$. Choosing 0 forgets that only the *odd* parts cancel — the even term survives.',
      },
      {
        q: 'The value of $\\int_0^{\\pi/2}\\frac{\\sqrt{\\tan x}}{\\sqrt{\\tan x}+\\sqrt{\\cot x}}\\,dx$ is',
        options: ['$\\frac{\\pi}{4}$', '$\\frac{\\pi}{2}$', '$0$', '$\\frac{\\pi}{8}$'],
        answer: 0,
        explanation: 'Step 1: King substitution $x \\to \\frac{\\pi}{2} - x$ swaps $\\tan x \\leftrightarrow \\cot x$, so the mirror integrand is $\\frac{\\sqrt{\\cot x}}{\\sqrt{\\tan x}+\\sqrt{\\cot x}}$. Step 2: Call the original $I$; the substitution proves $I$ also equals the mirror integral, and adding them: $2I = \\int_0^{\\pi/2}\\frac{\\sqrt{\\tan x}+\\sqrt{\\cot x}}{\\sqrt{\\tan x}+\\sqrt{\\cot x}}dx = \\int_0^{\\pi/2}1\\,dx = \\frac{\\pi}{2}$. Step 3: Hence $I = \\frac{\\pi}{4}$ — no antiderivative was ever needed. Step 4: This "fraction pairs to 1" pattern works for any $\\frac{g(x)}{g(x)+g(a+b-x)}$ over $[a, b]$.',
      },
      {
        q: 'If $F(x) = \\int_0^{x^2}\\frac{dt}{1+t^3}$, then $F\'(1) =$',
        options: ['$1$', '$\\frac{1}{2}$', '$2$', '$0$'],
        answer: 0,
        explanation: 'Step 1: The upper limit is a function of $x$, so apply the Leibniz rule: $F\'(x) = f(v(x))\\cdot v\'(x) - f(0)\\cdot 0$ with $f(t) = \\frac{1}{1+t^3}$ and $v(x) = x^2$. Step 2: $F\'(x) = \\frac{1}{1+(x^2)^3}\\cdot 2x = \\frac{2x}{1+x^6}$. Step 3: At $x = 1$: $F\'(1) = \\frac{2}{1+1} = 1$. Step 4: The common error $\\frac{1}{2}$ comes from evaluating $f(1) = \\frac{1}{2}$ and forgetting the factor $v\'(1) = 2$ from the chain rule on the limit.',
      },
      {
        q: 'The value of $\\int_0^{4\\pi}|\\sin x|\\,dx$ is',
        options: ['$8$', '$4$', '$0$', '$16$'],
        answer: 0,
        explanation: 'Step 1: $|\\sin x|$ is periodic with period $\\pi$ (not $2\\pi$ — the absolute value folds the negative lobes up). Step 2: The interval $[0, 4\\pi]$ contains exactly 4 periods... $\\frac{4\\pi}{\\pi} = 4$ periods, so the integral is $4\\int_0^{\\pi}|\\sin x|\\,dx$. Step 3: On $[0, \\pi]$, $\\sin x \\ge 0$, so $|\\sin x| = \\sin x$ and the integral is $[-\\cos x]_0^{\\pi} = 2$. Step 4: Total $= 4 \\times 2 = 8$. Choosing 0 treats the *unsigned* integrand like $\\sin x$ itself, whose signed integral over full periods vanishes.',
      },
    ]
  },
  // ---------------------------------------------------------------- 10.3 (Maths)
  {
    sectionId: 'math-a10-s3',
    readingTime: 12,
    prerequisites: [
      'Vector and Cartesian equations of straight lines in space (math-a10-s2)',
      'Dot and cross products of vectors (math-a15-s2)',
      'Scalar triple product and coplanarity (math-a15-s3)',
    ],
    intro: 'Two lines in a plane either meet or run parallel; in space they can do neither — they can be **skew**, passing each other on non-intersecting, non-parallel tracks like two flight paths at different altitudes. For skew lines the natural question is "how close do they get?", and the answer is beautiful: the shortest segment is perpendicular to both lines, its direction is the cross product of the two direction vectors, and its length comes from one scalar triple product. advanced engineering assessment wraps this in three-step problems — test coplanarity, compute the distance, and (hardest) find the line of shortest distance itself.',
    objectives: [
      'Classify a pair of lines in space as intersecting, parallel, coincident or skew, using $\\vec{b}_1 \\times \\vec{b}_2$ and the scalar triple product',
      'Compute the shortest distance between skew lines, $d = \\frac{|(\\vec{a}_2-\\vec{a}_1)\\cdot(\\vec{b}_1\\times\\vec{b}_2)|}{|\\vec{b}_1\\times\\vec{b}_2)|}$, and between parallel lines, $d = \\frac{|(\\vec{a}_2-\\vec{a}_1)\\times\\vec{b}|}{|\\vec{b}|}$',
      'Find the point of intersection of two coplanar non-parallel lines by solving parametric equations and *verifying* the third coordinate',
      'Construct the equation of the line of shortest distance between two skew lines using the cross-product direction',
    ],
    concepts: [
      {
        term: 'Skew lines',
        kind: 'definition',
        statement: 'Two lines in space are **skew** if they are neither parallel nor intersecting — equivalently, no single plane contains both. Direction vectors of skew lines are not parallel ($\\vec{b}_1 \\times \\vec{b}_2 \\ne \\vec{0}$), yet the lines never meet.',
        detail: 'The definitive test is two-stage: first, if $\\vec{b}_1 \\times \\vec{b}_2 = \\vec{0}$ the lines are parallel (distinct or coincident — decide by checking a point of one against the other); second, for non-parallel lines compute the scalar triple product $(\\vec{a}_2 - \\vec{a}_1)\\cdot(\\vec{b}_1\\times\\vec{b}_2)$: zero means coplanar, and coplanar non-parallel lines must intersect; nonzero means skew. Train lines on opposite sides of a river and adjacent edges of a tetrahedron (e.g. $AB$ and $CD$) are the canonical physical pictures of skew.',
      },
      {
        term: 'Shortest distance between skew lines',
        kind: 'theorem',
        statement: 'For skew lines $\\vec{r} = \\vec{a}_1 + \\lambda\\vec{b}_1$ and $\\vec{r} = \\vec{a}_2 + \\mu\\vec{b}_2$, the shortest distance is $$d = \\frac{\\left|(\\vec{a}_2 - \\vec{a}_1)\\cdot(\\vec{b}_1\\times\\vec{b}_2)\\right|}{\\left|\\vec{b}_1\\times\\vec{b}_2\\right|}.$$ The minimising segment is perpendicular to both lines and points along $\\vec{b}_1\\times\\vec{b}_2$.',
        detail: 'Why it works: the joining vector $\\vec{a}_2 - \\vec{a}_1$ can be resolved along the common normal $\\hat{n} = \\frac{\\vec{b}_1\\times\\vec{b}_2}{|\\vec{b}_1\\times\\vec{b}_2|}$ and perpendicular to it; the components perpendicular to $\\hat{n}$ can be absorbed by sliding along the two lines (changing $\\lambda, \\mu$), so the *unremovable* separation is exactly the projection $(\\vec{a}_2-\\vec{a}_1)\\cdot\\hat{n}$ — the formula. The numerator is the volume of the parallelepiped on the three vectors; the denominator is the area of its base; the quotient is its height, which is precisely the gap between the two "floor planes" containing the lines.',
      },
      {
        term: 'Distance between parallel lines',
        kind: 'method',
        statement: 'For parallel lines with common direction $\\vec{b}$, the shortest distance is $$d = \\frac{\\left|(\\vec{a}_2-\\vec{a}_1)\\times\\vec{b}\\right|}{\\left|\\vec{b}\\right|},$$ the height of the parallelogram built on the joining vector and the direction.',
        detail: 'This is *not* the skew formula degenerated — the skew formula dies here because $\\vec{b}_1\\times\\vec{b}_2 = \\vec{0}$ zeroes the denominator. Instead project: the distance is the component of $\\vec{a}_2-\\vec{a}_1$ perpendicular to $\\vec{b}$, which the cross product extracts after dividing by $|\\vec{b}|$. Advanced papers deliberately mix a parallel pair among skew pairs; applying the triple-product formula to the parallel pair is a guaranteed zero. (Coincident lines: the same formula yields $d = 0$ automatically.)',
      },
      {
        term: 'Coplanarity and intersection',
        kind: 'method',
        statement: 'Two lines are coplanar **iff** $$(\\vec{a}_2-\\vec{a}_1)\\cdot(\\vec{b}_1\\times\\vec{b}_2) = 0,$$ i.e. the determinant $$\\begin{vmatrix} x_2-x_1 & y_2-y_1 & z_2-z_1 \\\\ a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2\\end{vmatrix} = 0$$ vanishes. Coplanar + non-parallel $\\Rightarrow$ intersecting; coplanar + parallel $\\Rightarrow$ parallel or coincident.',
        detail: 'The practical recipe for the intersection point: parametrise both lines, equate the $x$ and $y$ coordinates, solve for the two parameters, then *verify the $z$ coordinate* — consistency means intersection; contradiction means the lines are skew despite the first two equations having a "solution". This verification step is where most marks are lost, because equating two coordinates always produces parameter values; only the third decides whether the points coincide. The Cartesian determinant is the same triple product in components — pick whichever form the data makes cheaper.',
      },
      {
        term: 'The line of shortest distance',
        kind: 'insight',
        statement: 'Between two skew lines there is a **unique common perpendicular**; it meets each line at one foot, has direction $\\vec{b}_1\\times\\vec{b}_2$, and its length is the shortest distance. Its equation can be built as the line through one foot with direction $\\vec{b}_1\\times\\vec{b}_2$.',
        detail: 'To find the feet: let them be $\\vec{a}_1 + \\lambda\\vec{b}_1$ and $\\vec{a}_2 + \\mu\\vec{b}_2$ and impose perpendicularity to both directions: $(\\vec{a}_2 + \\mu\\vec{b}_2 - \\vec{a}_1 - \\lambda\\vec{b}_1)\\cdot\\vec{b}_1 = 0$ and $(\\cdot)\\cdot\\vec{b}_2 = 0$ — two linear equations in $\\lambda, \\mu$. A slicker route passes through the plane family: the SD line is the intersection of plane $\\Pi_1$ (containing line 1, parallel to $\\vec{b}_1\\times\\vec{b}_2$) with plane $\\Pi_2$ (containing line 2, parallel to $\\vec{b}_1\\times\\vec{b}_2$), each built from a scalar triple product condition. This "common perpendicular as line of intersection of two planes" is the version advanced engineering assessment asks when it wants more than a distance.',
      },
    ],
    examples: [
      {
        title: 'Shortest distance between two skew lines',
        problem: 'Find the shortest distance between the lines $$L_1:\\ \\vec{r} = (\\hat{i} + \\hat{j}) + \\lambda(2\\hat{j} + \\hat{k}), \\qquad L_2:\\ \\vec{r} = (2\\hat{j} - \\hat{k}) + \\mu(\\hat{i} + \\hat{k}).$$',
        steps: [
          { label: 'Step 1', text: 'Extract the data: $\\vec{a}_1 = (1, 1, 0)$, $\\vec{b}_1 = (0, 2, 1)$; $\\vec{a}_2 = (0, 2, -1)$, $\\vec{b}_2 = (1, 0, 1)$. First, $\\vec{b}_1\\times\\vec{b}_2 = (2\\cdot1 - 1\\cdot0,\\ 1\\cdot1 - 0\\cdot1,\\ 0\\cdot0 - 2\\cdot1) = (2, 1, -2) \\ne \\vec{0}$, so the lines are not parallel.' },
          { label: 'Step 2', text: 'Joining vector: $\\vec{a}_2 - \\vec{a}_1 = (0-1, 2-1, -1-0) = (-1, 1, -1)$.' },
          { label: 'Step 3', text: 'Scalar triple product: $(\\vec{a}_2-\\vec{a}_1)\\cdot(\\vec{b}_1\\times\\vec{b}_2) = (-1)(2) + (1)(1) + (-1)(-2) = -2 + 1 + 2 = 1 \\ne 0$ — the lines are skew (non-coplanar), so the distance formula applies.' },
          { label: 'Step 4', text: 'Magnitude of the cross product: $|\\vec{b}_1\\times\\vec{b}_2| = \\sqrt{4 + 1 + 4} = 3$. Hence $$d = \\frac{|1|}{3} = \\frac{1}{3}.$$' },
          { label: 'Step 5', text: 'Interpretation: the common perpendicular has direction ratios $(2, 1, -2)$ and length $\\frac{1}{3}$; had the triple product come out 0, the lines would have been coplanar (intersecting, since not parallel) and the "shortest distance" would simply be 0.' },
        ],
        result: 'The lines are skew with shortest distance $d = \\frac{1}{3}$ unit, along direction $(2, 1, -2)$.',
      },
      {
        title: 'Coplanarity test and the intersection point — the third-coordinate check',
        problem: 'Show that the lines $L_1:\\ \\frac{x}{1} = \\frac{y}{1} = \\frac{z}{1}$ and $L_2:\\ \\frac{x-1}{1} = \\frac{y-2}{2} = \\frac{z-3}{3}$ are coplanar, and find their point of intersection.',
        steps: [
          { label: 'Step 1', text: 'Data: $\\vec{a}_1 = (0,0,0)$, $\\vec{b}_1 = (1,1,1)$; $\\vec{a}_2 = (1,2,3)$, $\\vec{b}_2 = (1,2,3)$. Cross product: $\\vec{b}_1\\times\\vec{b}_2 = (1\\cdot3 - 1\\cdot2,\\ 1\\cdot1 - 1\\cdot3,\\ 1\\cdot2 - 1\\cdot1) = (1, -2, 1) \\ne \\vec{0}$: not parallel.' },
          { label: 'Step 2', text: 'Coplanarity: $(\\vec{a}_2-\\vec{a}_1)\\cdot(\\vec{b}_1\\times\\vec{b}_2) = (1,2,3)\\cdot(1,-2,1) = 1 - 4 + 3 = 0$. The lines are coplanar, and being non-parallel they intersect.' },
          { label: 'Step 3', text: 'Parametrise: $L_1$: $(x,y,z) = (\\lambda,\\lambda,\\lambda)$; $L_2$: $(x,y,z) = (1+\\mu,\\ 2+2\\mu,\\ 3+3\\mu)$. Equate the first two coordinates: $\\lambda = 1 + \\mu$ and $\\lambda = 2 + 2\\mu$.' },
          { label: 'Step 4', text: 'Solve: subtracting gives $0 = 1 + \\mu$, so $\\mu = -1$ and then $\\lambda = 0$. Both parameters found — now the mandatory check on the third coordinate: $\\lambda = 3 + 3\\mu = 3 - 3 = 0$ $\\checkmark$ — consistent, so the lines genuinely meet.' },
          { label: 'Step 5', text: 'Intersection point: with $\\lambda = 0$, $L_1$ gives $(x, y, z) = (0, 0, 0)$; on $L_2$, $\\mu = -1$ gives $(1-1, 2-2, 3-3) = (0,0,0)$ $\\checkmark$. The two "solutions" agree — the lines pass through the origin. If step 4 had failed, the parameters from the first two coordinates would have been a mirage and the lines skew.' },
        ],
        result: 'The lines are coplanar (triple product $1 - 4 + 3 = 0$) and intersect at the origin $(0, 0, 0)$.',
      },
    ],
    keyTakeaways: [
      'Two-stage classification: $\\vec{b}_1\\times\\vec{b}_2 = \\vec{0}$ $\\Rightarrow$ parallel; otherwise the triple product $(\\vec{a}_2-\\vec{a}_1)\\cdot(\\vec{b}_1\\times\\vec{b}_2)$ decides — zero: coplanar (hence intersecting); nonzero: skew.',
      'Skew distance: $d = \\frac{|(\\vec{a}_2-\\vec{a}_1)\\cdot(\\vec{b}_1\\times\\vec{b}_2)|}{|\\vec{b}_1\\times\\vec{b}_2|}$ — numerator = parallelepiped volume, denominator = base area, quotient = height between the lines.',
      'Parallel lines need the *other* formula $d = \\frac{|(\\vec{a}_2-\\vec{a}_1)\\times\\vec{b}|}{|\\vec{b}|}$ — the skew formula divides by zero there.',
      'When hunting an intersection, equate two coordinates, solve, then verify the third: agreement $\\Rightarrow$ intersection point; disagreement $\\Rightarrow$ skew (the classic trap).',
    ],
    quiz: [
      {
        q: 'The direction ratios of the line of shortest distance between two lines with direction vectors $\\vec{b}_1 = (1, 0, -1)$ and $\\vec{b}_2 = (0, 1, -1)$ are',
        options: ['$(1, 1, 1)$', '$(1, -1, 1)$', '$(1, 1, -1)$', '$(-1, 1, 1)$'],
        answer: 0,
        explanation: 'Step 1: The common perpendicular is directed along $\\vec{b}_1\\times\\vec{b}_2$. Step 2: Compute $(1,0,-1)\\times(0,1,-1) = (0\\cdot(-1) - (-1)\\cdot1,\\ (-1)\\cdot0 - 1\\cdot(-1),\\ 1\\cdot1 - 0\\cdot0) = (1, 1, 1)$. Step 3: Hence the shortest-distance segment has direction ratios $(1, 1, 1)$ — equivalently direction cosines $\\frac{1}{\\sqrt3}(1,1,1)$. Step 4: The other options are sign flips of the same vector — but as *ratios* only exact proportionality counts, and $(1,-1,1)$ is not proportional to $(1,1,1)$.',
      },
      {
        q: 'The shortest distance between the line through $(0,0,0)$ with direction $(1,2,2)$ and the line through $(1,2,3)$ with direction $(2,4,4)$ is',
        options: ['$\\frac{\\sqrt5}{3}$', '$\\sqrt5$', '$\\frac{3}{\\sqrt5}$', '$\\frac{5}{3}$'],
        answer: 0,
        explanation: 'Step 1: The directions are proportional ($(2,4,4) = 2(1,2,2)$), so the lines are parallel — the skew formula is unusable and the cross-product-with-single-direction formula applies. Step 2: Joining vector $\\vec{a}_2-\\vec{a}_1 = (1,2,3)$. Step 3: $(1,2,3)\\times(1,2,2) = (2\\cdot2 - 3\\cdot2,\\ 3\\cdot1 - 1\\cdot2,\\ 1\\cdot2 - 2\\cdot1) = (-2, 1, 0)$, with magnitude $\\sqrt{4+1} = \\sqrt5$. Step 4: Distance $= \\frac{\\sqrt5}{|(1,2,2)|} = \\frac{\\sqrt5}{3}$.',
      },
      {
        q: 'The lines $\\vec{r} = \\vec{a}_1 + \\lambda\\vec{b}_1$ and $\\vec{r} = \\vec{a}_2 + \\mu\\vec{b}_2$ (with $\\vec{b}_1\\times\\vec{b}_2 \\ne \\vec{0}$) are coplanar if and only if',
        options: ['$(\\vec{a}_2 - \\vec{a}_1)\\cdot(\\vec{b}_1\\times\\vec{b}_2) = 0$', '$(\\vec{a}_2 - \\vec{a}_1)\\cdot(\\vec{b}_1\\times\\vec{b}_2) \\ne 0$', '$\\vec{a}_2 - \\vec{a}_1$ is parallel to $\\vec{b}_1\\times\\vec{b}_2$', '$\\vec{b}_1\\cdot\\vec{b}_2 = 0$'],
        answer: 0,
        explanation: 'Step 1: Coplanar means the joining vector lies in the plane spanned by the two directions — i.e. the three vectors $\\vec{a}_2-\\vec{a}_1, \\vec{b}_1, \\vec{b}_2$ are linearly dependent. Step 2: Linear dependence of three vectors is exactly the vanishing of their scalar triple product. Step 3: Hence the condition $(\\vec{a}_2-\\vec{a}_1)\\cdot(\\vec{b}_1\\times\\vec{b}_2) = 0$; a nonzero value measures (up to the base area) the perpendicular gap between the two lines — i.e. skewness. Step 4: $\\vec{b}_1\\cdot\\vec{b}_2 = 0$ merely says the lines are perpendicular in direction, which is compatible with being skew.',
      },
      {
        q: 'If $(\\vec{a}_2-\\vec{a}_1)\\cdot(\\vec{b}_1\\times\\vec{b}_2) = 0$ and $\\vec{b}_1\\times\\vec{b}_2 \\ne \\vec{0}$, then the two lines',
        options: ['intersect at a unique point', 'are skew', 'are parallel', 'coincide'],
        answer: 0,
        explanation: 'Step 1: Vanishing triple product means the joining vector and both directions are coplanar — the two lines lie in one plane. Step 2: The added condition $\\vec{b}_1\\times\\vec{b}_2 \\ne \\vec{0}$ means the directions are not parallel. Step 3: Two non-parallel coplanar lines must cross exactly once: unique intersection point. Step 4: Parallel lines would need $\\vec{b}_1\\times\\vec{b}_2 = \\vec{0}$ (excluded), skew lines would need a nonzero triple product (excluded), and coincidence is a special case of parallelism.',
      },
    ]
  },
]
