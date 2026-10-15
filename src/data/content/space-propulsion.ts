import type { SectionContent } from '../library'

// ============================================================================
// Lesson content for the Rocket & Space Propulsion chapter (me-e-propulsion)
// of the energy track (bookId 'energy-complete'). Six sections: the thrust
// equation and specific impulse, the ideal rocket equation and performance,
// chemical engines (solid / liquid / hybrid + nozzle theory), launch vehicles
// and staging, spacecraft and electric propulsion, and the space environment
// with bus subsystems and mission phases. Syllabus scope researched from
// national space-agency scientist/engineer recruitment assessment patterns
// and university propulsion electives — provenance documented in
// research/*.md; product rule: no exam names in UI. All backslashes doubled
// in TS strings for KaTeX.
// ============================================================================

export const spacePropulsionContent: SectionContent[] = [
  // ------------------------------------------------ s1 — Thrust equation
  {
    sectionId: 'me-e-propulsion-s1',
    readingTime: 9,
    prerequisites: [
      'Newton’s second law and momentum conservation for control volumes',
      'Steady-flow energy equation basics from thermodynamics'
    ],
    intro: 'Rocket propulsion is the only practical way to reach orbit, and everything in this chapter flows from one control-volume idea: thrust is the reaction to changing the momentum of a propellant stream. Selection assessments for thermal-propulsion and spacecraft roles lean hard on this section — the thrust equation with its momentum and pressure parts, and specific impulse, appear in nearly every paper. You will learn to compute thrust at any altitude, interpret specific impulse both as force per propellant weight-flow and as exhaust velocity scaled by $g_0$, and see why a rocket, unlike a turbojet or ramjet, carries its own oxidizer and works in vacuum. The same equation returns later disguised in nozzle coefficients and electric-thruster power budgets, so the effort invested here pays off through the whole chapter.',
    objectives: [
      'Derive the thrust equation $F = \\dot{m} v_e + (p_e - p_a) A_e$ from the momentum theorem and identify its momentum-thrust and pressure-thrust parts',
      'Compute thrust, effective exhaust velocity and mass flow for an engine at any ambient pressure',
      'Define specific impulse both ways — $I_{sp} = F/(\\dot{m} g_0)$ and $I_{sp} = v_e/g_0$ — and use total impulse $I_t = \\int F\\,dt$ for burn sizing',
      'Contrast rocket propulsion with turbojet and ramjet operation, including why rockets work in vacuum and why air-breathing specific impulses look larger'
    ],
    concepts: [
      {
        term: 'Thrust from the momentum theorem',
        kind: 'theorem',
        statement: 'Apply the momentum theorem to a control volume enclosing the engine, with propellant entering at (nearly) flight velocity and leaving the nozzle at $v_e$: **$F = \\dot{m} v_e + (p_e - p_a) A_e$** — the sum of momentum thrust $\\dot{m} v_e$ and pressure thrust $(p_e - p_a)A_e$.',
        detail: 'The control volume cuts the exhaust plane, where static pressure is $p_e$ — not yet expanded to ambient $p_a$ — so the unbalanced pressure on that plane adds (or subtracts) thrust. Thrust depends only on the propellant stream and the ambient pressure, never on the vehicle’s flight speed: an engine on a test stand at a given ambient pressure makes the same thrust as one flying at 2 km/s at that altitude. That speed-independence is the hallmark separating rocket thrust from propeller and jet discussions.'
      },
      {
        term: 'Momentum thrust and pressure thrust',
        kind: 'definition',
        statement: '**Momentum thrust** $\\dot{m} v_e$ dominates (typically 90–98% of the total); **pressure thrust** $(p_e - p_a)A_e$ corrects for incomplete expansion — positive when $p_e > p_a$ (under-expanded), negative when $p_e < p_a$ (over-expanded), and zero for **ideal (optimum) expansion** $p_e = p_a$.',
        detail: 'Mass flow follows from exit-plane conditions, $\\dot{m} = \\rho_e v_e A_e$, and is set by chamber conditions and throat area rather than by ambient pressure. Designers pick the nozzle area ratio so that $p_e$ matches the ambient pressure of the dominant operating altitude: a sea-level nozzle is short, a vacuum nozzle long. This is why one engine delivers noticeably more thrust in vacuum than at lift-off.'
      },
      {
        term: 'Effective exhaust velocity',
        kind: 'notation',
        statement: 'Fold both thrust parts into a single speed: **$c = F/\\dot{m} = v_e + (p_e - p_a)A_e/\\dot{m}$**, the effective exhaust velocity, so that $F = \\dot{m} c$ always holds.',
        detail: 'The effective velocity is what performance texts mean by "exhaust velocity" when they write $\\Delta v = c \\ln(m_0/m_f)$; it equals the true $v_e$ only at ideal expansion. Assessments quote thrust and mass flow in test data precisely so you can divide them: $c = F/\\dot{m}$ is a one-line computation that anchors many numericals in this subject.'
      },
      {
        term: 'Specific impulse and total impulse',
        kind: 'definition',
        statement: '**Specific impulse** is thrust per propellant weight-flow, $I_{sp} = F/(\\dot{m} g_0)$; it equals $c/g_0$ in seconds — and $I_{sp} = v_e/g_0$ at ideal expansion. **Total impulse** is $I_t = \\int_0^{t_b} F\\,dt = F t_b$ for constant thrust.',
        detail: 'The seconds unit is convenient and propellant-agnostic: solid boosters sit near 250–280 s, kerosene–oxygen liquid engines 300–340 s, and hydrogen–oxygen engines reach about 450 s in vacuum. Total impulse sizes the propellant load: $m_p = I_t/(I_{sp} g_0)$. Always check which definition a paper is using — force per weight-flow (seconds, used here) versus the older force per mass-flow convention (which differs by a factor $g_0$).'
      },
      {
        term: 'Rockets versus air-breathing engines',
        kind: 'insight',
        statement: 'A **rocket** carries fuel and oxidizer and needs no ambient air — it works in vacuum, under water or on any planet. A **turbojet** or **ramjet** carries fuel only and takes its oxidizer from the atmosphere, so its specific impulse, quoted per fuel weight-flow alone, looks two to four times larger than a rocket’s.',
        detail: 'The apparent gap is an accounting artifact: the air-breather never pays for the oxidizer mass it accelerates — roughly 3.5 kg of air per kg of kerosene burned stoichiometrically. A fair comparison counts impulse per unit of all carried propellant. The rocket’s independence is also its limitation: every kilogram of reaction mass must be lifted onboard, which is exactly why the rocket equation of the next section bites so hard.'
      },
      {
        term: 'Propulsive efficiency',
        kind: 'law',
        statement: 'The fraction of jet power delivered to the vehicle is $\\eta_p = \\dfrac{2\\lambda}{1 + \\lambda^2} = \\dfrac{2}{\\lambda + 1/\\lambda}$ with $\\lambda = v/c$ the flight-speed ratio; it peaks at $\\eta_p = 1$ when $v = c$ and falls away symmetrically on either side.',
        detail: 'At low flight speed most jet kinetic energy is left in the plume; at $v = c$ the exhaust is left stationary in the ground frame and energy transfer is perfect. Beyond $v = c$ the exhaust is thrown forward relative to the ground and again carries energy away — the curve is symmetric about $\\lambda = 1$. A one-line $\\eta_p$ evaluation is a frequent quick numerical.'
      }
    ],
    examples: [
      {
        title: 'Thrust at altitude and in vacuum',
        problem: 'A first-stage engine burns with mass flow $\\dot{m} = 280$ kg/s and exhaust velocity $v_e = 3{,}000$ m/s. The nozzle exit area is $A_e = 0.70$ m² with exit pressure $p_e = 80$ kPa; ambient pressure at the operating altitude is $p_a = 30$ kPa. Find the thrust, the effective exhaust velocity and the specific impulse, then predict the vacuum thrust.',
        steps: [
          { label: 'Step 1', text: '```text\nF = mdot*ve + (pe - pa)*Ae\n```\nMomentum thrust: $\\dot{m} v_e = 280 \\times 3{,}000 = 840$ kN.' },
          { label: 'Step 2', text: 'Pressure thrust: $(p_e - p_a)A_e = (80 - 30) \\times 10^3 \\times 0.70 = 35$ kN — positive because the nozzle is under-expanded at this altitude.' },
          { label: 'Step 3', text: 'Total thrust $F = 840 + 35 = 875$ kN, and effective exhaust velocity $c = F/\\dot{m} = 875{,}000/280 = 3{,}125$ m/s.' },
          { label: 'Step 4', text: 'Specific impulse: $I_{sp} = c/g_0 = 3{,}125/9.81 = 318.6$ s.' },
          { label: 'Step 5', text: 'In vacuum the pressure term becomes $p_e A_e = 80 \\times 10^3 \\times 0.70 = 56$ kN, so $F_{vac} = 840 + 56 = 896$ kN — about $2.4\\%$ more than at altitude.' }
        ],
        result: '$F = 875$ kN, $c = 3{,}125$ m/s, $I_{sp} \\approx 318.6$ s; vacuum thrust $896$ kN.'
      },
      {
        title: 'Total impulse and propellant load',
        problem: 'An upper-stage engine delivers a constant $250$ kN for $100$ s while consuming $7{,}500$ kg of propellant. Compute the total impulse, the mass flow, the effective exhaust velocity and the specific impulse.',
        steps: [
          { label: 'Step 1', text: 'Total impulse: $I_t = F t_b = 250 \\times 10^3 \\times 100 = 25 \\times 10^6$ N·s.' },
          { label: 'Step 2', text: 'Mass flow: $\\dot{m} = m_p / t_b = 7{,}500/100 = 75$ kg/s.' },
          { label: 'Step 3', text: 'Effective exhaust velocity: $c = F/\\dot{m} = 250 \\times 10^3/75 = 3{,}333$ m/s.' },
          { label: 'Step 4', text: 'Specific impulse from total impulse: $I_{sp} = I_t/(m_p g_0) = 25 \\times 10^6/(7{,}500 \\times 9.81) = 339.8$ s — consistent with $c/g_0 = 3{,}333/9.81$.' }
        ],
        result: '$I_t = 25$ MN·s, $\\dot{m} = 75$ kg/s, $c = 3{,}333$ m/s, $I_{sp} \\approx 340$ s.'
      },
      {
        title: 'Propulsive efficiency through the ascent',
        problem: 'A rocket climbs with effective exhaust velocity $c = 3{,}000$ m/s. Evaluate the propulsive efficiency at $v = 1{,}500$ m/s, at $v = 3{,}000$ m/s and at $v = 6{,}000$ m/s.',
        steps: [
          { label: 'Step 1', text: 'At $v = 1{,}500$ m/s, $\\lambda = 0.5$ and $\\eta_p = 2(0.5)/(1 + 0.25) = 0.80$.' },
          { label: 'Step 2', text: 'At $v = 3{,}000$ m/s, $\\lambda = 1$ and $\\eta_p = 2/(1+1) = 1.0$ — the exhaust is left stationary in the ground frame.' },
          { label: 'Step 3', text: 'At $v = 6{,}000$ m/s, $\\lambda = 2$ and $\\eta_p = 2(2)/(1+4) = 0.80$ again: beyond the peak the exhaust moves forward relative to the ground and still carries energy away.' },
          { label: 'Step 4', text: 'The design lesson: a rocket is inefficient at liftoff, passes through peak energy transfer near one exhaust velocity, and the efficiency curve is symmetric about that point.' }
        ],
        result: '$\\eta_p = 80\\%$ at 1.5 km/s, $100\\%$ at 3 km/s, $80\\%$ at 6 km/s.'
      }
    ],
    keyTakeaways: [
      'Thrust has exactly two parts: momentum thrust $\\dot{m} v_e$ plus pressure thrust $(p_e - p_a)A_e$ — and it is independent of flight speed.',
      'Ideal expansion ($p_e = p_a$) zeroes the pressure term; vacuum nozzles exploit $p_a \\to 0$ for extra thrust.',
      'Specific impulse ties everything together: $I_{sp} = F/(\\dot{m} g_0) = c/g_0$, and total impulse sizes propellant as $m_p = I_t/(I_{sp} g_0)$.',
      'Rockets carry their own oxidizer and work in vacuum; turbojet and ramjet specific impulses look higher only because atmospheric air is uncounted oxidizer.'
    ],
    quiz: [
      {
        q: 'An engine expels $\\dot{m} = 200$ kg/s at $v_e = 2{,}500$ m/s with ideal expansion ($p_e = p_a$). The thrust is',
        options: ['$450$ kN', '$500$ kN', '$550$ kN', '$600$ kN'],
        answer: 1,
        explanation: 'Step 1: With $p_e = p_a$ the pressure-thrust term vanishes. Step 2: Only momentum thrust remains: $F = \\dot{m} v_e$. Step 3: $F = 200 \\times 2{,}500 = 500{,}000$ N $= 500$ kN. Step 4: Adding a pressure correction here is the planted error — ideal expansion means zero correction.'
      },
      {
        q: 'A thruster produces $44.1$ kN while consuming $15$ kg/s of propellant. With $g_0 = 9.81$ m/s², its specific impulse is closest to',
        options: ['$29.4$ s', '$294$ s', '$300$ s', '$2{,}940$ s'],
        answer: 2,
        explanation: 'Step 1: Effective exhaust velocity $c = F/\\dot{m} = 44{,}100/15 = 2{,}940$ m/s. Step 2: $I_{sp} = c/g_0 = 2{,}940/9.81 = 300$ s. Step 3: $294$ s is the trap of stopping one step early; $2{,}940$ s forgets the division by $g_0$ entirely. Step 4: Cross-check by definition: $I_{sp} = F/(\\dot{m} g_0) = 44{,}100/(15 \\times 9.81) = 300$ s.'
      },
      {
        q: 'Which statement about rockets and air-breathing jet engines is correct?',
        options: [
          'Turbojets can operate in vacuum because their compressors carry stored air',
          'A rocket carries both fuel and oxidizer and can therefore operate in vacuum',
          'Ramjets develop useful thrust at standstill',
          'Rockets ingest atmospheric oxygen during low-altitude flight'
        ],
        answer: 1,
        explanation: 'Step 1: A turbojet or ramjet ingests atmospheric air as its oxidizer — no air, no combustion. Step 2: A rocket stores propellant and oxidizer onboard, so ambient atmosphere is unnecessary. Step 3: That independence is exactly why rockets operate in vacuum where air-breathers cannot. Step 4: Ramjets additionally need forward speed to compress incoming air, so they are dead at standstill.'
      },
      {
        q: 'The propulsive efficiency $\\eta_p = \\frac{2\\lambda}{1+\\lambda^2}$ (with $\\lambda = v/c$) is maximum when',
        options: ['$v \\to 0$', '$v = c$', '$v = c/2$', '$v = 2c$'],
        answer: 1,
        explanation: 'Step 1: Rewrite as $\\eta_p = \\frac{2}{\\lambda + 1/\\lambda}$. Step 2: For any positive $\\lambda$, $\\lambda + 1/\\lambda \\ge 2$ with equality only at $\\lambda = 1$. Step 3: Hence $\\eta_p \\le 1$ with the maximum $\\eta_p = 1$ exactly when $v = c$. Step 4: Both $v = c/2$ and $v = 2c$ give $\\eta_p = 0.8$ — the curve is symmetric about the peak.'
      }
    ]
  },
  // ------------------------------------------------ s2 — Rocket equation
  {
    sectionId: 'me-e-propulsion-s2',
    readingTime: 8,
    prerequisites: [
      'The thrust equation and effective exhaust velocity (Section 1)',
      'Natural logarithms and exponential decay'
    ],
    intro: 'Once thrust is understood, rocket performance becomes a bookkeeping question: how much propellant must burn to change velocity by a given amount? The answer — Tsiolkovsky’s ideal rocket equation — is the most quoted formula in propulsion selection papers, and this section derives it from variable-mass momentum balance. From it fall mass ratios, propellant mass fractions, burn times and thrust-to-weight scheduling, each a standard numerical pattern in recruitment assessments. You will finish able to size a stage for a required $\\Delta v$ and to explain why every extra kilometre per second costs disproportionately more propellant — the arithmetic that makes staging inevitable.',
    objectives: [
      'Derive and apply the Tsiolkovsky equation $\\Delta v = v_e \\ln(m_0/m_f)$ for ideal (gravity- and drag-free) flight',
      'Convert between mass ratio, propellant mass fraction $\\xi$ and required $\\Delta v$',
      'Schedule a burn: mass flow, burn time $t_b = m_p/\\dot{m}$, thrust-to-weight ratio and acceleration growth during flight',
      'Account for gravity losses qualitatively and estimate the extra propellant they demand'
    ],
    concepts: [
      {
        term: 'The ideal rocket equation',
        kind: 'theorem',
        statement: 'For a rocket in gravity-free, drag-free flight with constant effective exhaust velocity $c$, integrating $m\\,dv = -c\\,dm$ gives **Tsiolkovsky’s equation** $\\Delta v = c \\ln\\dfrac{m_0}{m_f} = I_{sp} g_0 \\ln\\dfrac{m_0}{m_f}$.',
        detail: 'The velocity change depends only on exhaust velocity and the mass ratio — never on thrust level or burn duration. Doubling $\\Delta v$ requires an exponential, not linear, propellant increase: each extra kilometre per second costs more than the last. In real missions the equation gives the propulsion budget to which gravity, drag and steering losses are added (Section 4).'
      },
      {
        term: 'Mass ratio and propellant mass fraction',
        kind: 'definition',
        statement: 'The **mass ratio** is $R = m_0/m_f \\ge 1$; the **propellant mass fraction** is $\\xi = m_p/m_0 = 1 - m_f/m_0 = 1 - e^{-\\Delta v/c}$, with $m_0 = m_p + m_s + m_{pl}$ (propellant, structure, payload).',
        detail: 'A stage with $\\xi = 0.90$ has burned nine-tenths of its lift-off mass — near the practical limit for large stages, since the structure must still survive launch loads. Two quick inversions worth memorising: $R = e^{\\Delta v/c}$ and $\\xi = 1 - 1/R$. Numericals usually give two of $(\\Delta v, c, R, \\xi)$ and ask for a third.'
      },
      {
        term: 'Burn time and mass flow',
        kind: 'method',
        statement: 'With constant mass flow, $t_b = m_p/\\dot{m} = m_p c / F$, and the vehicle acceleration grows during the burn as $a = F/m(t)$ with $m(t) = m_0 - \\dot{m} t$.',
        detail: 'The acceleration at burnout is $a_b = F/m_f = R \\cdot a_0$ — a stage that starts at $1.2g$ can end near $6g$, which is why crewed vehicles throttle or shut engines down late in the burn. Sizing $t_b$ is a genuine trade: longer burns save nothing in ideal $\\Delta v$ but increase gravity losses; shorter burns raise heating, loads and pump complexity.'
      },
      {
        term: 'Thrust-to-weight ratio',
        kind: 'definition',
        statement: 'The initial **thrust-to-weight ratio** $(T/W)_0 = T/(m_0 g_0)$ must exceed 1 for vertical lift-off; launch vehicles typically fly $1.2 \\le (T/W)_0 \\le 1.5$, while upper stages may start well below 1 once the trajectory is pitched over.',
        detail: 'High $T/W$ shortens the burn and cuts gravity losses but loads the structure and demands bigger engines; low $T/W$ becomes efficient later in flight when the flight-path angle is small. In-space and electric stages accept $T/W$ far below $10^{-3}$ because their burns are flown over hours or weeks — the trade explored in Section 5.'
      },
      {
        term: 'Gravity losses',
        kind: 'insight',
        statement: 'Thrust spent fighting gravity is lost: the **gravity loss** is $\\Delta v_g = \\int_0^{t_b} g \\sin\\theta\\, dt$, where $\\theta$ is the flight-path angle from horizontal — a vertical hover loses the full $g t_b$.',
        detail: 'Real launchers lose roughly $1.0$–$1.5$ km/s to gravity, an order of magnitude more than aerodynamic drag ($0.05$–$0.15$ km/s for slender vehicles). Two levers shrink it: shorter burn time (higher $T/W$) and early pitch-over so $\\sin\\theta$ falls quickly — the gravity-turn rationale of Section 4. In performance accounting, gravity losses appear as an add-on to the ideal $\\Delta v$ requirement.'
      },
      {
        term: 'Reading a delta-v budget',
        kind: 'method',
        statement: 'A mission is priced as a sum: $\\Delta v_{prop} = \\Delta v_{ideal} + \\Delta v_{grav} + \\Delta v_{drag} + \\Delta v_{steer}$, and each term converts to propellant through $m_p = m_0\\left(1 - e^{-\\Delta v/c}\\right)$.',
        detail: 'Manoeuvre budgets are how missions are planned: orbit insertion, plane changes (costly at $\\Delta v = 2v\\sin(\\Delta i/2)$), transfers and disposal all draw from the same tank. Because propellant scales exponentially with total $\\Delta v$, a ten percent budget overrun can consume the entire payload margin — the engineering argument for staging in the next section.'
      }
    ],
    examples: [
      {
        title: 'Propellant for a prescribed velocity change',
        problem: 'A kick-stage of total mass $20{,}000$ kg must provide $\\Delta v = 4{,}000$ m/s with an engine of effective exhaust velocity $c = 3{,}000$ m/s. Find the burnout mass, the propellant required and the propellant mass fraction.',
        steps: [
          { label: 'Step 1', text: '```text\nmf = m0 * exp(-dv/c)\n```\nInvert the rocket equation: $m_f = m_0 e^{-\\Delta v/c} = 20{,}000 \\times e^{-4{,}000/3{,}000}$.' },
          { label: 'Step 2', text: 'Evaluate the exponent: $e^{-1.333} = 0.2636$, so $m_f = 5{,}272$ kg.' },
          { label: 'Step 3', text: 'Propellant: $m_p = m_0 - m_f = 20{,}000 - 5{,}272 = 14{,}728$ kg.' },
          { label: 'Step 4', text: 'Fraction: $\\xi = m_p/m_0 = 0.736$ — equivalently $1 - e^{-1.333}$.' }
        ],
        result: '$m_f \\approx 5.27$ t, $m_p \\approx 14.73$ t, $\\xi \\approx 0.736$.'
      },
      {
        title: 'Burn scheduling of a first stage',
        problem: 'A first stage lifts off at $m_0 = 50{,}000$ kg with $37{,}500$ kg of propellant and a thrust of $750$ kN ($c = 3{,}000$ m/s). Compute the mass flow, burn time, initial thrust-to-weight ratio, burnout acceleration and the ideal $\\Delta v$.',
        steps: [
          { label: 'Step 1', text: 'Mass flow: $\\dot{m} = F/c = 750{,}000/3{,}000 = 250$ kg/s.' },
          { label: 'Step 2', text: 'Burn time: $t_b = m_p/\\dot{m} = 37{,}500/250 = 150$ s.' },
          { label: 'Step 3', text: 'Lift-off: $(T/W)_0 = 750{,}000/(50{,}000 \\times 9.81) = 1.53$, so the vehicle rises with about $0.53g$ net acceleration.' },
          { label: 'Step 4', text: 'Burnout mass $m_f = 12{,}500$ kg gives $a_b = 750{,}000/12{,}500 = 60$ m/s² $\\approx 6.1g$ — why crewed launchers throttle down near burnout.' },
          { label: 'Step 5', text: 'Ideal $\\Delta v = 3{,}000 \\ln(50{,}000/12{,}500) = 3{,}000 \\ln 4 = 4{,}159$ m/s.' }
        ],
        result: '$\\dot{m} = 250$ kg/s, $t_b = 150$ s, $(T/W)_0 = 1.53$, $a_b \\approx 6.1g$, $\\Delta v \\approx 4.16$ km/s.'
      },
      {
        title: 'Pricing a gravity loss',
        problem: 'Two ascent designs both need an ideal $\\Delta v$ of $4{,}000$ m/s with $c = 3{,}000$ m/s on a $20$ t vehicle. Design A burns in $150$ s with average flight-path factor $\\sin\\theta = 0.5$; design B burns in $100$ s at the same average. Compare the total $\\Delta v$ each must supply and the propellant difference ($g = 9.81$ m/s²).',
        steps: [
          { label: 'Step 1', text: 'Gravity loss $\\Delta v_g = g \\sin\\theta \\, t_b$. Design A: $9.81 \\times 0.5 \\times 150 = 736$ m/s.' },
          { label: 'Step 2', text: 'Design B: $9.81 \\times 0.5 \\times 100 = 490$ m/s.' },
          { label: 'Step 3', text: 'Total budgets: A needs $4{,}000 + 736 = 4{,}736$ m/s; B needs $4{,}490$ m/s — a $246$ m/s saving purely from burning faster.' },
          { label: 'Step 4', text: 'Propellant price: $m_p = m_0(1 - e^{-\\Delta v/c})$ gives $20{,}000(1 - 0.206) = 15{,}874$ kg for A versus $20{,}000(1 - 0.224) = 15{,}518$ kg for B — about $356$ kg saved, real payload on a small vehicle.' }
        ],
        result: 'Design A must supply $4.74$ km/s, design B $4.49$ km/s; the shorter burn saves roughly $356$ kg of propellant.'
      }
    ],
    keyTakeaways: [
      '$\\Delta v = c \\ln(m_0/m_f)$: performance depends on exhaust velocity and mass ratio only — thrust and burn time drop out of the ideal equation.',
      'Inversions to memorise: $R = e^{\\Delta v/c}$, $\\xi = 1 - 1/R$, $m_p = m_0(1 - e^{-\\Delta v/c})$.',
      'Acceleration grows through the burn as mass falls: $a_b = R \\cdot a_0$; lift-off needs $(T/W)_0 > 1$ (typical 1.2–1.5).',
      'Gravity losses (about $1.0$–$1.5$ km/s to orbit) dwarf drag losses; shorten burns and pitch over early to shrink them.'
    ],
    quiz: [
      {
        q: 'A stage burns from $m_0 = 12{,}000$ kg to $m_f = 4{,}000$ kg with effective exhaust velocity $c = 3{,}000$ m/s. The ideal $\\Delta v$ is',
        options: ['$2.2$ km/s', '$3.3$ km/s', '$4.4$ km/s', '$9.0$ km/s'],
        answer: 1,
        explanation: 'Step 1: Mass ratio $R = 12{,}000/4{,}000 = 3$. Step 2: Apply $\\Delta v = c \\ln R = 3{,}000 \\ln 3$. Step 3: $\\ln 3 = 1.099$, so $\\Delta v = 3{,}296$ m/s $\\approx 3.3$ km/s. Step 4: $9.0$ km/s is the linear trap $c \\times 3$; the logarithm is the whole point of the equation.'
      },
      {
        q: 'A vehicle must achieve $\\Delta v = 2{,}079$ m/s with $c = 3{,}000$ m/s. The required propellant mass fraction is closest to',
        options: ['$0.25$', '$0.37$', '$0.50$', '$0.63$'],
        answer: 2,
        explanation: 'Step 1: Recognise $2{,}079 \\approx 3{,}000 \\ln 2$, i.e. $\\Delta v = c \\ln 2$. Step 2: Then $R = e^{\\Delta v/c} = 2$ and $m_f/m_0 = 1/2$. Step 3: $\\xi = 1 - m_f/m_0 = 0.50$. Step 4: $0.63 = 1 - 1/e$ is the trap for the case $\\Delta v = c$ exactly.'
      },
      {
        q: 'For a fixed required $\\Delta v$, which change most directly reduces gravity losses during ascent?',
        options: [
          'Flying the entire ascent vertically to maximise climb rate',
          'Increasing thrust so the propellant burns in a shorter time',
          'Reducing exhaust velocity to lengthen the burn',
          'Launching with $(T/W)_0 = 0.95$'
        ],
        answer: 1,
        explanation: 'Step 1: Gravity loss is $\\int g \\sin\\theta \\, dt$ — it accumulates with time spent thrusting against gravity. Step 2: Shortening the burn shrinks the integral directly. Step 3: Higher thrust shortens the burn at fixed $\\Delta v$ (same propellant, faster flow). Step 4: A vertical profile keeps $\\sin\\theta = 1$ (worst case), and $(T/W)_0 < 1$ cannot even lift off.'
      },
      {
        q: 'A launch vehicle at lift-off has $(T/W)_0 = 0.9$. It will',
        options: [
          'rise slowly but still reach orbit',
          'be unable to accelerate upward from the pad',
          'accelerate upward at $0.9g$',
          'hover at constant altitude indefinitely'
        ],
        answer: 1,
        explanation: 'Step 1: Weight is $m_0 g_0$; thrust is only $0.9\\,m_0 g_0$. Step 2: The net vertical force is negative, so the vehicle cannot climb. Step 3: Practical vehicles start at $T/W \\approx 1.2$–$1.5$ for exactly this reason. Step 4: "Accelerate at $0.9g$" wrongly ignores that weight already consumes the entire thrust.'
      }
    ]
  },
  // ------------------------------------------------ s3 — Chemical engines
  {
    sectionId: 'me-e-propulsion-s3',
    readingTime: 10,
    prerequisites: [
      'Isentropic nozzle flow and choking at a throat',
      'The thrust equation and specific impulse (Section 1)',
      'Basics of combustion chemistry and propellant enthalpy'
    ],
    intro: 'Chemical engines still do essentially all of the heavy lifting in spaceflight, and selection assessments expect fluency in their three families. Solid motors trade performance for simplicity and raw thrust; liquid engines buy performance and throttling at the cost of turbopumps, injectors and cryogenics; hybrids sit in between with a solid fuel and a liquid oxidizer. Underneath all three sits one piece of gas dynamics: the convergent–divergent nozzle, whose expansion converts combustion enthalpy into jet kinetic energy. This section walks grain geometry and burning-rate laws, feed systems and propellant choices, and the two figures of merit — characteristic velocity $c^*$ and thrust coefficient $C_F$ — that let you diagnose an engine from test-stand data.',
    objectives: [
      'Explain solid-motor internals: grain geometry, the burning-rate law $r = a p_c^n$, and regressive/neutral/progressive thrust histories',
      'Compare liquid-engine architectures — pressure-fed versus pump-fed — plus injectors, cooling, and cryogenic versus storable propellant choices',
      'Apply nozzle theory: area–Mach relations, area ratio, and under/over-expansion behaviour including flow separation',
      'Compute and interpret $c^* = p_c A_t/\\dot{m}$, $C_F = F/(p_c A_t)$ and their product $c = I_{sp} g_0$'
    ],
    concepts: [
      {
        term: 'Solid motors and grain geometry',
        kind: 'method',
        statement: 'In a **solid motor** the propellant grain lines the combustion case; thrust follows the exposed burning surface: $\\dot{m} = \\rho_p A_b r$ with burning rate $r = a p_c^n$ and the ratio **$K_n = A_b/A_t$** setting chamber pressure.',
        detail: 'Geometry programs the thrust history: an end-burner exposes constant area (long, low-thrust, neutral); a plain cylindrical port grows as it burns outward (progressive); an unrestricted outer-surface burn shrinks (regressive); star-point ports are tailored for near-constant thrust over most of the burn. Once lit, a solid cannot be throttled or shut down — case pressure and throat erosion set everything. Burning time follows the web: $t_b = w_b/r$.'
      },
      {
        term: 'Liquid engines: feed systems',
        kind: 'definition',
        statement: '**Pressure-fed** engines push propellants from high-pressure tanks (simple, no moving parts, chamber pressure limited to a few MPa by tank mass); **pump-fed** engines use turbopumps to raise propellant pressure above chamber pressure, enabling high $p_c$ and large thrust.',
        detail: 'The turbopump drive cycle defines the engine class: gas-generator cycles dump drive gas overboard (simple, a few percent of impulse lost); staged-combustion cycles pass all propellant through the chamber (higher performance, higher complexity); expander cycles vaporise fuel in cooling jackets to drive the pump. The classic trade: pressure-fed suits small thrusters and upper stages; pump-fed rules first stages where chamber pressures of 7–20 MPa buy performance.'
      },
      {
        term: 'Injectors, combustion and instability',
        kind: 'insight',
        statement: 'The **injector** atomises and mixes fuel and oxidizer through orifice patterns (impinging jets, coaxial elements); its quality sets combustion efficiency $\\eta_{c^*}$ and stability. Pressure oscillations organise into **chugging** (feed-coupled, hundreds of hertz) and **acoustic** modes (kilohertz) that can destroy an engine.',
        detail: 'Injectors also keep walls alive — film cooling along chamber walls and mixture-ratio staging across the face. Combustion quality appears directly as $c^*$ efficiency: measured $c^*$ over ideal-equilibrium $c^*$. Baffles and acoustic cavities damp the high-frequency modes, while feed-line inertia and accumulators decouple chugging. Injector pattern recognition is a favourite rapid-fire classification question.'
      },
      {
        term: 'Propellant families and hybrid engines',
        kind: 'definition',
        statement: '**Cryogenic** pairs (liquid oxygen with hydrogen or kerosene) give the highest specific impulses (up to about 450 s vacuum for oxygen–hydrogen) but need venting and insulation; **storable** pairs (nitrogen tetroxide with hydrazine derivatives) ignite on contact (hypergolic), keep for years and deliver about 320 s; **solids** offer density and simplicity at 250–280 s. **Hybrid** motors burn a solid fuel grain with a liquid oxidizer sprayed through the port.',
        detail: 'The hidden trade is bulk density: hydrogen’s superb impulse comes with roughly 71 kg/m³, so tanks grow large and heavy — which is why dense kerosene–oxygen stages often lift off while hydrogen excels upstairs. Hybrids inherit throttling and shutdown from their liquid side and grain robustness from the solid side, with only one liquid feed to manage; their classical weakness is lower combustion efficiency along the long port. Assessments pair each family with its signature property: density, storability, hypergolicity or peak impulse.'
      },
      {
        term: 'Nozzle theory: expansion and area ratio',
        kind: 'theorem',
        statement: 'Flow chokes at the throat ($M = 1$) and expands supersonically in the diverging section; the **area ratio** $\\epsilon = A_e/A_t$ fixes exit Mach and pressure ratio through the isentropic relation $\\dfrac{A}{A^*} = \\dfrac{1}{M}\\left[\\dfrac{2}{\\gamma+1}\\left(1 + \\dfrac{\\gamma-1}{2}M^2\\right)\\right]^{\\frac{\\gamma+1}{2(\\gamma-1)}}$.',
        detail: 'A larger area ratio means more expansion: higher $C_F$ in vacuum where $p_a = 0$, but at sea level a vacuum-sized nozzle runs over-expanded — the plume separates from the wall with asymmetric side loads. Under-expansion ($p_e > p_a$) leaves performance unused; over-expansion ($p_e < p_a$) subtracts pressure thrust and risks separation. Designers match $p_e$ to the altitude where the stage does most of its work.'
      },
      {
        term: 'Performance figures of merit: $c^*$ and $C_F$',
        kind: 'law',
        statement: 'The **characteristic velocity** $c^* = p_c A_t/\\dot{m}$ measures combustion energy release (propellant-dependent); the **thrust coefficient** $C_F = F/(p_c A_t)$ measures nozzle expansion quality; their product is the effective exhaust velocity: $c = c^* C_F = I_{sp} g_0$, with $F = C_F\\, p_c A_t$.',
        detail: 'The split cleanly divides the engine into a combustion part ($c^*$, set by propellant chemistry and injector efficiency) and a nozzle part ($C_F$, set by area ratio and ambient pressure). Test-stand data — thrust, chamber pressure, throat area, mass flow — yields both in two divisions, which is precisely the numerical pattern asked in assessments. Typical values: $c^* \\approx 1{,}300$–$1{,}600$ m/s for solids, $1{,}700$–$2{,}300$ m/s for liquids; $C_F \\approx 1.2$–$1.9$.'
      }
    ],
    examples: [
      {
        title: 'Diagnosing an engine from test data',
        problem: 'A liquid engine hot-fire records thrust $F = 450$ kN at design altitude, chamber pressure $p_c = 7.0$ MPa, throat area $A_t = 0.050$ m² and propellant flow $\\dot{m} = 150$ kg/s. Evaluate $c^*$, $C_F$, the effective exhaust velocity and the specific impulse.',
        steps: [
          { label: 'Step 1', text: 'Characteristic velocity: $c^* = p_c A_t/\\dot{m} = (7.0 \\times 10^6)(0.050)/150 = 2{,}333$ m/s.' },
          { label: 'Step 2', text: 'Thrust coefficient: $C_F = F/(p_c A_t) = 450 \\times 10^3/(7.0 \\times 10^6 \\times 0.050) = 450 \\times 10^3/350 \\times 10^3 = 1.286$.' },
          { label: 'Step 3', text: 'Effective exhaust velocity: $c = c^* C_F = 2{,}333 \\times 1.286 = 3{,}000$ m/s — cross-checked by $F/\\dot{m} = 450 \\times 10^3/150 = 3{,}000$ m/s (consistent).' },
          { label: 'Step 4', text: 'Specific impulse: $I_{sp} = c/g_0 = 3{,}000/9.81 = 305.8$ s.' }
        ],
        result: '$c^* = 2{,}333$ m/s, $C_F = 1.286$, $c = 3{,}000$ m/s, $I_{sp} \\approx 306$ s.'
      },
      {
        title: 'Sizing a solid motor burn',
        problem: 'A solid motor has throat area $A_t = 0.50$ m², propellant density $\\rho_p = 1{,}750$ kg/m³, burning rate $r = 7.5$ mm/s at the operating point, and a grain exposing $A_b = 100$ m² of burning surface. With $c^* = 1{,}400$ m/s and $C_F = 1.50$, find the mass flow, chamber pressure and thrust; then, for a web thickness of $0.75$ m, the burn time.',
        steps: [
          { label: 'Step 1', text: 'Mass flow: $\\dot{m} = \\rho_p A_b r = 1{,}750 \\times 100 \\times 0.0075 = 1{,}312.5$ kg/s.' },
          { label: 'Step 2', text: 'Chamber pressure from $\\dot{m} = p_c A_t/c^*$: $p_c = c^* \\dot{m}/A_t = 1{,}400 \\times 1{,}312.5/0.50 = 3.68$ MPa.' },
          { label: 'Step 3', text: 'Thrust: $F = C_F p_c A_t = 1.50 \\times 3.68 \\times 10^6 \\times 0.50 = 2.76$ MN.' },
          { label: 'Step 4', text: 'Burn time from the web: $t_b = w_b/r = 0.75/0.0075 = 100$ s.' },
          { label: 'Step 5', text: 'Consistency: $c = c^* C_F = 2{,}100$ m/s and $F = \\dot{m} c = 1{,}312.5 \\times 2{,}100 = 2.76$ MN — the two routes agree.' }
        ],
        result: '$\\dot{m} = 1{,}312.5$ kg/s, $p_c \\approx 3.7$ MPa, $F \\approx 2.76$ MN, $t_b = 100$ s (about 131 t of propellant).'
      },
      {
        title: 'Sea-level versus vacuum thrust of one nozzle',
        problem: 'An engine exhausts $\\dot{m} = 200$ kg/s at $v_e = 3{,}200$ m/s with exit pressure $p_e = 12$ kPa and exit area $A_e = 1.0$ m². Compute the thrust in vacuum and at sea level ($p_a = 101.3$ kPa), and the percentage change.',
        steps: [
          { label: 'Step 1', text: 'Vacuum: $F_{vac} = \\dot{m} v_e + p_e A_e = 640{,}000 + 12{,}000 = 652$ kN.' },
          { label: 'Step 2', text: 'Sea level: $F_{SL} = 640{,}000 + (12 - 101.3) \\times 10^3 \\times 1.0 = 550.7$ kN.' },
          { label: 'Step 3', text: 'Change: $652 - 550.7 = 101.3$ kN, i.e. the vacuum thrust is $101.3/550.7 = 18.4\\%$ higher.' },
          { label: 'Step 4', text: 'The $-89.3$ kN sea-level pressure term says the nozzle is badly over-expanded at lift-off — plume separation and side loads would be expected. This nozzle is sized for high altitude.' }
        ],
        result: '$F_{vac} = 652$ kN, $F_{SL} = 550.7$ kN — an $18.4\\%$ vacuum gain.'
      }
    ],
    keyTakeaways: [
      'Solids: $\\dot{m} = \\rho_p A_b r$ with $r = a p_c^n$; grain geometry (end-burner, port, star) programs regressive/neutral/progressive thrust and cannot be shut down once lit.',
      'Liquids: pressure-fed simplicity versus pump-fed chamber pressure; injectors set $\\eta_{c^*}$ and stability; cryogenics buy impulse while storables buy operability and density; hybrids add a restartable solid-fuel option.',
      'The area ratio fixes expansion: under-expanded leaves performance unused, over-expanded invites separation — match $p_e$ to the operating altitude.',
      '$c^*$ grades the combustion, $C_F$ grades the nozzle, and $c = c^* C_F = I_{sp} g_0$ — with $F = C_F p_c A_t$ for quick thrust estimates.'
    ],
    quiz: [
      {
        q: 'A motor develops $p_c = 6.0$ MPa in a throat of $A_t = 0.020$ m² with $\\dot{m} = 50$ kg/s. The characteristic velocity is',
        options: ['$1{,}200$ m/s', '$2{,}400$ m/s', '$4{,}800$ m/s', '$240$ m/s'],
        answer: 1,
        explanation: 'Step 1: Definition $c^* = p_c A_t/\\dot{m}$. Step 2: Substitute: $(6.0 \\times 10^6)(0.020)/50 = 120{,}000/50 = 2{,}400$ m/s. Step 3: $1{,}200$ m/s halves it (area slip) and $4{,}800$ m/s doubles it. Step 4: Liquid-engine $c^*$ typically sits near 1,700–2,300 m/s, so 2,400 m/s is a plausible high-performance value.'
      },
      {
        q: 'During the burn of a solid motor whose grain is a plain cylindrical port burning radially outward, the thrust history is predominantly',
        options: [
          'Regressive — thrust falls steadily',
          'Neutral — thrust stays flat',
          'Progressive — thrust rises steadily',
          'Impulsive — thrust exists only at ignition'
        ],
        answer: 2,
        explanation: 'Step 1: The port circumference $\\pi D$ grows as the port diameter grows during the burn. Step 2: Burning area $A_b = \\pi D L$ therefore increases with time. Step 3: With $\\dot{m} = \\rho_p A_b r$ and pressure rising through $K_n$, thrust rises — a progressive curve. Step 4: Star grains counter this by trading flank area against valley area to hold thrust flat (neutral behaviour).'
      },
      {
        q: 'A nozzle designed for high-altitude operation is fired at sea level. It is',
        options: [
          'under-expanded, with the plume pinching inward at the exit',
          'ideally expanded everywhere along the diverging section',
          'over-expanded, with possible flow separation and side loads',
          'choked at the exit plane instead of the throat'
        ],
        answer: 2,
        explanation: 'Step 1: A high-altitude design implies a small exit pressure $p_e$ relative to sea-level $p_a$. Step 2: $p_e < p_a$ defines over-expansion. Step 3: When wall pressure falls too far below ambient, the boundary layer separates from the wall, producing asymmetric side loads. Step 4: Under-expansion ($p_e > p_a$) is the vacuum case, where the plume balloons outward beyond the exit plane.'
      },
      {
        q: 'Which pairing of liquid-propellant properties is correct?',
        options: [
          'Oxygen–hydrogen: highest specific impulse, low bulk density, cryogenic',
          'Oxygen–hydrogen: highest specific impulse, high density, storable',
          'Nitrogen-tetroxide with hydrazine derivatives: highest impulse of all pairs, non-toxic',
          'Kerosene–oxygen: hypergolic ignition with about 450 s of specific impulse'
        ],
        answer: 0,
        explanation: 'Step 1: Oxygen–hydrogen tops the chemical impulse table near 450 s in vacuum. Step 2: Liquid hydrogen density is only about 71 kg/m³, so tankage is large and the pair must be vented and insulated — cryogenic. Step 3: Storable nitrogen-tetroxide/hydrazine-class pairs are dense and hypergolic but reach only about 320 s. Step 4: Kerosene–oxygen is neither hypergolic nor 450 s — it sits near 300–340 s.'
      }
    ]
  },
  // ------------------------------------------------ s4 — Launch & staging
  {
    sectionId: 'me-e-propulsion-s4',
    readingTime: 9,
    prerequisites: [
      'The ideal rocket equation and propellant mass fraction (Section 2)',
      'Circular-orbit velocity $v = \\sqrt{\\mu/r}$ from dynamics',
      'Basics of atmospheric drag on slender vehicles'
    ],
    intro: 'Reaching orbit is not just going fast — it is spending a $\\Delta v$ budget of about 9.4 km/s while steering through the atmosphere along a path the structure can survive. Selection assessments probe every piece of that sentence: the ascent profile (vertical rise, pitch-over, gravity turn), the accounting of gravity and drag losses, and above all staging — the single most powerful trick for raising payload fraction. This section assembles the launch-vehicle story, from lift-off thrust-to-weight checks through strap-on boosters to the ideal velocity of a multistage stack, with the numerical patterns that recur in recruitment assessments.',
    objectives: [
      'Describe the ascent profile — vertical rise, pitch-over program, gravity turn — and the rationale for each phase',
      'Quantify gravity and drag losses and assemble a $\\Delta v$ budget of about 9.3–9.5 km/s to low orbit',
      'Derive the ideal velocity of a multistage vehicle, $\\Delta v = \\sum_i c_i \\ln(m_{0i}/m_{fi})$, and explain why staging raises payload fraction',
      'Compare serial and parallel staging (strap-on boosters) and compute payload fractions and lift-off thrust-to-weight'
    ],
    concepts: [
      {
        term: 'The ascent profile',
        kind: 'method',
        statement: 'A launch begins with a short **vertical rise** (clearing pad and tower), then a **pitch-over** program tilts the vehicle a few degrees, after which the **gravity turn** lets gravity bend the trajectory naturally while thrust stays nearly aligned with velocity.',
        detail: 'Flying with thrust along velocity keeps the angle of attack near zero through the dense atmosphere, minimising drag and lateral structural loads. Above the sensible atmosphere the vehicle flies a steering pitch program to flatten the trajectory and build orbital speed, then coasts to insertion. Each phase exists to manage a constraint: pad clearance, aerodynamic loads, gravity losses or heating.'
      },
      {
        term: 'Gravity and drag losses',
        kind: 'law',
        statement: 'Losses accumulate during powered flight: **gravity loss** $\\Delta v_g = \\int g \\sin\\theta\\,dt$ (about $1.0$–$1.5$ km/s), **drag loss** $\\int (D/m)\\,dt$ (only $0.05$–$0.15$ km/s for slender vehicles), plus small steering losses from thrust misalignment — so the budget runs about $1.5$–$1.8$ km/s above ideal orbital speed.',
        detail: 'The counter-intuitive result — gravity loss an order of magnitude above drag loss — explains vehicle design: launchers accept steep, fast early trajectories, trading a little drag for a large gravity-loss cut. Very low thrust-to-weight is catastrophic (gravity eats everything), while excessive acceleration multiplies structural and thermal loads. This trade is a recurring discussion question.'
      },
      {
        term: 'The delta-v budget to orbit',
        kind: 'definition',
        statement: 'Circular low-orbit speed is $v_c = \\sqrt{\\mu/r} \\approx 7.8$ km/s; adding gravity, drag and steering losses gives a propulsion requirement of **about $9.3$–$9.5$ km/s** for an eastward launch, with up to about $0.46$ km/s recovered from Earth rotation at the equator.',
        detail: 'Selection assessments quote both numbers and expect you to know which is which: 7.8 km/s is the physics floor for the orbit itself; 9.4 km/s is what the tanks must supply. Higher target orbits, plane changes and reserve margins push the requirement further. The exponential cost of $\\Delta v$ makes each added kilometre per second punishing.'
      },
      {
        term: 'Why staging works',
        kind: 'theorem',
        statement: 'Burning a stack of stages and discarding each empty one multiplies mass ratios: for $n$ stages, $\\Delta v = \\sum_{i=1}^{n} c_i \\ln\\dfrac{m_{0i}}{m_{fi}}$, where $m_{fi}$ is everything still attached at stage-$i$ burnout and dead mass is jettisoned before stage $i+1$ ignites.',
        detail: 'A single-stage vehicle must drag empty tanks and engines to final speed; staging resets the mass ratio after each burn, so the same structural technology reaches orbit with useful payload. Ideal staging theory (equal $\\Delta v$ splits, fixed exhaust velocities) even yields closed-form stage sizings. The price: complexity, more engines to light, and serial reliability — every separation event is a failure mode.'
      },
      {
        term: 'Serial versus parallel staging',
        kind: 'insight',
        statement: '**Serial (tandem) staging** drops burned-out stages along the way; **parallel staging** burns strap-on boosters alongside a core that ignites at lift-off, raising lift-off thrust without waiting for a serial staging event — the core then continues alone at much reduced mass.',
        detail: 'Strap-ons let one common core serve light and heavy missions by changing only the booster count — the workhorse pattern for medium and heavy-lift launch vehicles. The core runs throttled while boosters burn, then opens up after separation. The trade-offs: added drag and thrust-vector complexity, and asymmetric booster burnout demands real control authority.'
      },
      {
        term: 'Payload fraction and the structural coefficient',
        kind: 'definition',
        statement: 'For a stage with **structural coefficient** $\\lambda = m_s/(m_s + m_p)$ delivering $\\Delta v$ at exhaust velocity $c$, the payload fraction is $\\pi = \\dfrac{e^{-\\Delta v/c} - \\lambda}{1 - \\lambda}$; for $n$ similar stages the overall payload fraction is the product of the per-stage values.',
        detail: 'The formula exposes the physics: if $e^{-\\Delta v/c} \\le \\lambda$ the stage cannot carry any payload at all — the single-stage-to-orbit barrier. Realistic $\\lambda$ of 0.06–0.10 with $c \\approx 3{,}300$ m/s leaves a one-stage orbital vehicle with negative margin but makes two stages comfortably profitable. Numericals ask either $\\pi$ from $(\\Delta v, c, \\lambda)$ or the reverse.'
      }
    ],
    examples: [
      {
        title: 'Ideal velocity of a two-stage vehicle',
        problem: 'A two-stage vehicle lifts off at $120$ t. Stage 1 ($c_1 = 3{,}000$ m/s) burns until the stack is down to $40$ t; its $8$ t of dry structure is jettisoned, leaving $32$ t for stage 2 ($c_2 = 3{,}400$ m/s), which burns down to $8$ t. Find the ideal $\\Delta v$ and the payload fraction if $2$ t of the final mass is payload.',
        steps: [
          { label: 'Step 1', text: 'Stage 1: $\\Delta v_1 = 3{,}000 \\ln(120/40) = 3{,}000 \\ln 3 = 3{,}296$ m/s.' },
          { label: 'Step 2', text: 'Jettison: $40 - 8 = 32$ t begins stage 2 — this dead-mass drop is the entire point of staging.' },
          { label: 'Step 3', text: 'Stage 2: $\\Delta v_2 = 3{,}400 \\ln(32/8) = 3{,}400 \\ln 4 = 4{,}713$ m/s.' },
          { label: 'Step 4', text: 'Total: $\\Delta v = 3{,}296 + 4{,}713 = 8{,}009$ m/s — near-orbital ideal capability.' },
          { label: 'Step 5', text: 'Payload fraction: $2/120 = 1.7\\%$ of lift-off mass, typical of orbital launchers.' }
        ],
        result: '$\\Delta v \\approx 8.0$ km/s; payload fraction $1.7\\%$.'
      },
      {
        title: 'Single stage versus two stages to orbit',
        problem: 'A mission needs $\\Delta v = 9{,}400$ m/s. Candidate stages have $c = 3{,}300$ m/s and structural coefficient $\\lambda = 0.08$. Using $\\pi = (e^{-\\Delta v/c} - \\lambda)/(1-\\lambda)$ per stage, compare a single stage with two stages splitting the $\\Delta v$ equally.',
        steps: [
          { label: 'Step 1', text: '```text\npi = (exp(-dv/c) - lambda) / (1 - lambda)\n```\nSingle stage: $e^{-9{,}400/3{,}300} = e^{-2.848} = 0.0579$, so $\\pi = (0.0579 - 0.08)/0.92 < 0$ — no payload is possible; tanks and engines alone outweigh the burnout margin.' },
          { label: 'Step 2', text: 'Two stages: each supplies $4{,}700$ m/s, and $e^{-4{,}700/3{,}300} = e^{-1.424} = 0.2407$.' },
          { label: 'Step 3', text: 'Per-stage payload fraction: $\\pi_s = (0.2407 - 0.08)/0.92 = 0.175$.' },
          { label: 'Step 4', text: 'Overall: $\\pi = 0.175^2 = 0.0305$ — about $3\\%$ of lift-off mass reaches orbit.' },
          { label: 'Step 5', text: 'The swing from impossible to $3\\%$ is the whole engineering argument for staging.' }
        ],
        result: 'Single stage: negative payload (infeasible); two stages: $\\pi \\approx 3.1\\%$.'
      },
      {
        title: 'Lift-off check with strap-on boosters',
        problem: 'A core vehicle of $220$ t is powered by two engines of $1{,}000$ kN each; two strap-on boosters of $40$ t each add $1{,}500$ kN apiece. Compute the lift-off thrust-to-weight ratio and initial net acceleration with the boosters, and the ratio the bare core would have had.',
        steps: [
          { label: 'Step 1', text: 'Lift-off mass: $m_0 = 220 + 2 \\times 40 = 300$ t; total thrust: $T = 2{,}000 + 3{,}000 = 5{,}000$ kN.' },
          { label: 'Step 2', text: 'Weight: $m_0 g_0 = 300 \\times 10^3 \\times 9.81 = 2{,}943$ kN, so $(T/W)_0 = 5{,}000/2{,}943 = 1.70$ and the net upward acceleration is $0.70 \\times 9.81 = 6.9$ m/s².' },
          { label: 'Step 3', text: 'Bare core: $2{,}000/(220 \\times 9.81 \\times 10^{-3} \\times 10^{3}) = 2{,}000/2{,}158 = 0.93 < 1$ — the core alone could not even lift off.' },
          { label: 'Step 4', text: 'After booster burnout and jettison ($80$ t gone), the core continues on its $2{,}000$ kN against a much-reduced mass — parallel staging bought acceleration exactly where gravity losses hurt most.' }
        ],
        result: 'With strap-ons $(T/W)_0 = 1.70$ (net $\\approx 6.9$ m/s²); the bare core at $0.93$ could not lift off.'
      }
    ],
    keyTakeaways: [
      'Ascent = vertical rise, pitch-over, gravity turn: thrust aligned with velocity through the atmosphere, then steering to insertion.',
      'Gravity losses (about 1–1.5 km/s) dominate drag losses (about 0.1 km/s); the propulsion budget to low orbit is about 9.3–9.5 km/s against a 7.8 km/s orbital speed.',
      'Staging multiplies mass ratios: $\\Delta v = \\sum c_i \\ln(m_{0i}/m_{fi})$, with dead mass jettisoned between burns.',
      'Payload fraction $\\pi = (e^{-\\Delta v/c} - \\lambda)/(1-\\lambda)$ per stage: single-stage-to-orbit fails for realistic $\\lambda$; strap-ons add lift-off thrust without a serial staging event.'
    ],
    quiz: [
      {
        q: 'A two-stage vehicle has $c_1 = 2{,}800$ m/s with $m_{01}/m_{f1} = 3$ and $c_2 = 3{,}400$ m/s with $m_{02}/m_{f2} = 5$. Its ideal $\\Delta v$ is closest to',
        options: ['$6.2$ km/s', '$7.6$ km/s', '$8.5$ km/s', '$11.2$ km/s'],
        answer: 2,
        explanation: 'Step 1: Stage 1: $2{,}800 \\ln 3 = 2{,}800 \\times 1.0986 = 3{,}076$ m/s. Step 2: Stage 2: $3{,}400 \\ln 5 = 3{,}400 \\times 1.6094 = 5{,}472$ m/s. Step 3: Total $= 3{,}076 + 5{,}472 = 8{,}548$ m/s $\\approx 8.5$ km/s. Step 4: $11.2$ km/s is the sum of the raw mass ratios — forgetting the logarithm is the classic error.'
      },
      {
        q: 'The propulsion $\\Delta v$ a launch vehicle must supply to reach low orbit is approximately',
        options: [
          '$7.8$ km/s — the circular-orbit speed itself',
          '$9.4$ km/s — orbital speed plus gravity, drag and steering losses',
          '$11.2$ km/s — Earth escape speed',
          '$5.6$ km/s — half of orbital speed on a flat trajectory'
        ],
        answer: 1,
        explanation: 'Step 1: Orbital speed at low altitude is $\\sqrt{\\mu/r} \\approx 7.8$ km/s. Step 2: Ascent adds about 1.0–1.5 km/s of gravity loss, roughly 0.1 km/s of drag loss and small steering losses. Step 3: The tanks must therefore supply about 9.3–9.5 km/s. Step 4: 11.2 km/s is escape speed; 7.8 km/s ignores the losses entirely.'
      },
      {
        q: 'During the gravity-turn phase of ascent, the vehicle',
        options: [
          'holds a fixed vertical attitude while thrusting',
          'lets gravity bend its velocity vector, keeping thrust nearly aligned with velocity',
          'shuts its engines down to minimise drag',
          'flies at maximum angle of attack for extra aerodynamic lift'
        ],
        answer: 1,
        explanation: 'Step 1: After pitch-over the velocity vector points slightly off vertical. Step 2: Gravity continuously bends that vector toward horizontal while the vehicle steers minimally. Step 3: Keeping thrust along velocity holds the angle of attack near zero, minimising drag and lateral loads. Step 4: Maximum angle of attack would break the structure, and coasting only donates time to gravity losses.'
      },
      {
        q: 'Staging improves orbital payload fraction primarily because',
        options: [
          'each stage can use a different, cheaper propellant',
          'empty tanks and spent engines are jettisoned, resetting the mass ratio for the remaining stack',
          'the atmosphere assists lower stages but not upper ones',
          'staging reduces the total $\\Delta v$ required to reach orbit'
        ],
        answer: 1,
        explanation: 'Step 1: The rocket equation punishes carried mass exponentially. Step 2: Dropping dead structural mass after each burn raises the effective mass ratio of everything that remains. Step 3: The $\\Delta v$ requirement is unchanged — staging changes how efficiently it is paid. Step 4: Propellant variety is a secondary benefit; the mass-ratio reset is the mechanism.'
      }
    ]
  },
  // ------------------------------------------------ s5 — Space & electric
  {
    sectionId: 'me-e-propulsion-s5',
    readingTime: 8,
    prerequisites: [
      'Specific impulse and the rocket equation (Sections 1–2)',
      'Basic electrical power: watts, efficiency, DC systems'
    ],
    intro: 'Once in space, propulsion changes character: thrust can be tiny if it is applied patiently, and the scarce resource is often electrical power rather than chemical energy. This section tours the in-space toolbox — cold-gas and chemical thrusters for attitude control and small manoeuvres, then electric propulsion, where ion and Hall-effect thrusters accelerate propellant to tens of kilometres per second with specific impulses from about 300 s to beyond 3,000 s. The governing trade is blunt: at fixed power, thrust falls as specific impulse rises, so electric missions trade burn duration for propellant mass. Emerging concepts — solar sails and nuclear thermal stages — push past the propellant limit entirely or multiply the power available.',
    objectives: [
      'Size in-space chemical thrusters: cold gas, monopropellant hydrazine decomposition, and bipropellant systems with their typical impulse ranges',
      'Apply the electric-propulsion power trade $T = 2\\eta P/(I_{sp} g_0)$ and interpret the thrust-versus-impulse compromise',
      'Distinguish ion, Hall-effect, arcjet and resistojet architectures and order them by specific impulse',
      'Describe emerging concepts: solar-sail photon momentum and nuclear thermal hydrogen heating'
    ],
    concepts: [
      {
        term: 'Chemical in-space thrusters',
        kind: 'definition',
        statement: 'Three chemical families serve spacecraft: **cold gas** (stored inert gas blown through a nozzle, $I_{sp} \\approx 50$–$75$ s, ultimate simplicity and pulse precision), **monopropellant hydrazine** (catalytic decomposition over an iridium-coated catalyst bed, $I_{sp} \\approx 220$–$235$ s) and **bipropellant** (a fuel such as monomethylhydrazine with nitrogen tetroxide oxidizer, $I_{sp} \\approx 300$–$325$ s).',
        detail: 'Monopropellant thrusters fire whenever a valve opens — no ignition system — which made hydrazine the classic choice for attitude control and small orbit manoeuvres. Bipropellant engines top the in-space chemical range and can be restarted many times. Cold-gas jets sit at the bottom on impulse but at the top on pulse cleanliness and repeatability for fine pointing.'
      },
      {
        term: 'The electric-propulsion power trade',
        kind: 'law',
        statement: 'Electric thrusters convert spacecraft power into jet kinetic energy: $P_{jet} = \\tfrac{1}{2}\\dot{m} v_e^2 = \\tfrac{T v_e}{2}$, so with overall efficiency $\\eta$, **$T = \\dfrac{2\\eta P}{I_{sp} g_0}$** — thrust is proportional to power and inversely proportional to specific impulse.',
        detail: 'This single relation shapes every electric mission: a 5 kW thruster at 3,000 s delivers only about 0.2 N. In space, patience is propellant: month-long burns integrate small thrust into large $\\Delta v$ while cutting propellant mass by nearly an order of magnitude — the worked example shows a factor of nine. The true limits are mission time and power-system mass, not chemistry.'
      },
      {
        term: 'Ion (gridded electrostatic) thrusters',
        kind: 'method',
        statement: 'In a **gridded-ion thruster**, xenon is ionised in a discharge chamber and accelerated by a potential difference across extraction grids: $v_e = \\sqrt{2qV/m_{ion}}$; a neutraliser emits electrons to keep the spacecraft charge-balanced. Specific impulse: $2{,}000$–$3{,}600$ s.',
        detail: 'Ion thrusters hold the specific-impulse record among practical systems, but grid area limits thrust density and erosion sets lifetime. They excel on deep-space and station-keeping duty where propellant is precious and time is cheap. The governing relation $v_e \\propto \\sqrt{V}$ is a favourite one-line derivation in assessments.'
      },
      {
        term: 'Hall-effect thrusters',
        kind: 'definition',
        statement: 'A **Hall thruster** accelerates a quasi-neutral xenon plasma in crossed $E \\times B$ fields: the electric field drives ions out while a radial magnetic field traps electrons, and the circulating electron current replaces metal grids. Specific impulse: $1{,}500$–$2{,}800$ s.',
        detail: 'Trading some impulse for much higher thrust density than gridded ion thrusters, Hall thrusters dominate high-power orbit-raising and station-keeping duty. Wall erosion replaces grid erosion as the life limiter. Ion versus Hall is the classic comparison question: higher impulse and lower thrust density versus moderate impulse and robust thrust per unit area.'
      },
      {
        term: 'Electrothermal: resistojets and arcjets',
        kind: 'definition',
        statement: '**Resistojets** pass propellant (often hydrazine decomposition products or ammonia) over electrically heated elements before a nozzle ($I_{sp} \\approx 300$–$400$ s); **arcjets** run an arc discharge through the flow itself, reaching higher gas temperatures ($I_{sp} \\approx 500$–$800$ s with hydrazine).',
        detail: 'Both are electric boosters bolted onto chemical hardware: modest impulse gains over chemical with minimal complexity, often flown as upgrades that reuse existing hydrazine tanks. The ordering worth memorising across electric families: resistojet < arcjet < Hall-effect < gridded ion, spanning roughly 300 s to beyond 3,000 s.'
      },
      {
        term: 'Emerging concepts: sails and nuclear thermal',
        kind: 'insight',
        statement: '**Solar sails** carry no propellant: sunlight delivers radiation pressure of about $9\\ \\mu\\text{N/m}^2$ on a perfect reflector at Earth distance, so sailcraft trade enormous area for unlimited endurance. **Nuclear thermal** concepts pump liquid hydrogen through a solid-core reactor and expand it through a nozzle ($I_{sp} \\approx 850$–$1{,}000$ s at chemical-like thrust).',
        detail: 'A sail’s acceleration is tiny but never stops — attractive for inner-solar-system cargo and sun-approaching trajectories. Nuclear thermal roughly doubles chemical impulse because the working fluid is pure low-molecular-mass hydrogen heated by reactor power, limited by materials; it also carries shielding, ground-test and safety constraints that shape its development path.'
      }
    ],
    examples: [
      {
        title: 'Thrust and burn duration from available power',
        problem: 'A communications spacecraft allocates $P = 5$ kW to a Hall thruster with $\\eta = 0.60$ and $I_{sp} = 1{,}500$ s. Find the thrust, and the time to deliver $\\Delta v = 500$ m/s to the $1{,}000$ kg spacecraft.',
        steps: [
          { label: 'Step 1', text: '```text\nT = 2*eta*P / (Isp*g0)\n```\nThrust: $T = 2(0.60)(5{,}000)/(1{,}500 \\times 9.81) = 6{,}000/14{,}715 = 0.41$ N.' },
          { label: 'Step 2', text: 'Required impulse (spacecraft mass nearly constant over the burn): $I \\approx m \\Delta v = 1{,}000 \\times 500 = 5 \\times 10^5$ N·s.' },
          { label: 'Step 3', text: 'Burn duration: $t = I/T = 5 \\times 10^5/0.41 = 1.22 \\times 10^6$ s $\\approx 14$ days of continuous firing.' },
          { label: 'Step 4', text: 'Propellant used: with $c = I_{sp} g_0 = 14{,}715$ m/s, $\\dot{m} = T/c = 2.8 \\times 10^{-5}$ kg/s and $m_p = \\dot{m} t \\approx 34$ kg — against roughly $155$ kg that a 300 s chemical system would need for the same $\\Delta v$.' }
        ],
        result: '$T \\approx 0.41$ N; about 14 days of thrusting for 500 m/s, using roughly 34 kg of xenon.'
      },
      {
        title: 'Chemical versus electric propellant load',
        problem: 'A $2{,}000$ kg spacecraft must achieve $\\Delta v = 2{,}000$ m/s. Compare the propellant mass for (a) a monopropellant system at $I_{sp} = 220$ s and (b) a gridded ion thruster at $I_{sp} = 3{,}000$ s.',
        steps: [
          { label: 'Step 1', text: 'Monopropellant: $c = 220 \\times 9.81 = 2{,}158$ m/s, so $m_p = 2{,}000\\left(1 - e^{-2{,}000/2{,}158}\\right)$.' },
          { label: 'Step 2', text: 'Evaluate: $e^{-0.927} = 0.396$, so $m_p = 2{,}000 \\times 0.604 = 1{,}208$ kg — over half the spacecraft.' },
          { label: 'Step 3', text: 'Ion: $c = 3{,}000 \\times 9.81 = 29{,}430$ m/s; $e^{-0.068} = 0.934$, so $m_p = 2{,}000 \\times 0.066 = 131$ kg.' },
          { label: 'Step 4', text: 'Saving: $1{,}208 - 131 \\approx 1{,}077$ kg — propellant cut by a factor of nine, the entire business case for electric propulsion (paid for in burn time and power hardware).' }
        ],
        result: 'Monopropellant $\\approx 1{,}208$ kg versus ion $\\approx 131$ kg — a factor of about nine.'
      },
      {
        title: 'Sizing an attitude-control thruster system',
        problem: 'A fine-pointing spacecraft needs a total impulse of $20{,}000$ N·s from its reaction-control system. Compare propellant masses for a cold-gas system ($I_{sp} = 65$ s) and a monopropellant hydrazine system ($I_{sp} = 225$ s).',
        steps: [
          { label: 'Step 1', text: 'Cold gas: $m_p = I_t/(I_{sp} g_0) = 20{,}000/(65 \\times 9.81) = 20{,}000/637.7 = 31.4$ kg.' },
          { label: 'Step 2', text: 'Monopropellant: $m_p = 20{,}000/(225 \\times 9.81) = 20{,}000/2{,}207 = 9.1$ kg.' },
          { label: 'Step 3', text: 'The $22$ kg saved could become payload — but the cold-gas system buys extremely clean, fast pulses and a harmless exhaust, exactly why pointing-critical missions still choose it.' }
        ],
        result: 'Cold gas $31.4$ kg versus hydrazine $9.1$ kg for the same total impulse.'
      }
    ],
    keyTakeaways: [
      'In-space chemical ladder: cold gas 50–75 s, hydrazine monopropellant about 220 s, bipropellant about 300–325 s.',
      'Electric propulsion trades thrust for impulse at fixed power: $T = 2\\eta P/(I_{sp} g_0)$ — a 5 kW, 3,000 s thruster makes only about 0.2 N.',
      'Impulse ordering: resistojet (300–400 s) < arcjet (500–800 s) < Hall-effect (1,500–2,800 s) < gridded ion (2,000–3,600 s).',
      'Sails use photon momentum (no propellant, about $9\\ \\mu$N/m² per perfect reflector at Earth distance); nuclear thermal heats hydrogen in a reactor for 850–1,000 s at chemical-like thrust.'
    ],
    quiz: [
      {
        q: 'An ion thruster draws $P = 3{,}000$ W at overall efficiency $\\eta = 0.50$ with $I_{sp} = 3{,}000$ s. Its thrust is closest to',
        options: ['$0.051$ N', '$0.102$ N', '$0.204$ N', '$1.02$ N'],
        answer: 1,
        explanation: 'Step 1: Apply the power trade $T = 2\\eta P/(I_{sp} g_0)$. Step 2: Numerator: $2 \\times 0.50 \\times 3{,}000 = 3{,}000$ W. Step 3: Denominator: $3{,}000 \\times 9.81 = 29{,}430$ m/s, so $T = 3{,}000/29{,}430 = 0.102$ N. Step 4: $0.204$ N is the result of ignoring the efficiency factor; $1.02$ N drops the division by $g_0$.'
      },
      {
        q: 'Arranged by increasing specific impulse, the correct order of electric thrusters is',
        options: [
          '$\\text{Hall} < \\text{arcjet} < \\text{resistojet} < \\text{ion}$',
          '$\\text{resistojet} < \\text{arcjet} < \\text{Hall} < \\text{ion}$',
          '$\\text{arcjet} < \\text{resistojet} < \\text{ion} < \\text{Hall}$',
          '$\\text{ion} < \\text{Hall} < \\text{arcjet} < \\text{resistojet}$'
        ],
        answer: 1,
        explanation: 'Step 1: Resistojets only preheat propellant to modest temperatures: 300–400 s. Step 2: Arcjets push the gas hotter through an arc discharge: 500–800 s. Step 3: Hall thrusters accelerate plasma via electromagnetic body forces: 1,500–2,800 s. Step 4: Gridded ion thrusters apply high electrostatic potentials and reach 2,000–3,600 s — the top of the practical range.'
      },
      {
        q: 'A monopropellant hydrazine thruster produces thrust by',
        options: [
          'burning hydrazine with nitrogen tetroxide across an injector',
          'decomposing hydrazine exothermically as it passes over a catalyst bed',
          'electrostatically accelerating ionised hydrazine through grids',
          'resistively heating hydrazine before a convergent–divergent nozzle'
        ],
        answer: 1,
        explanation: 'Step 1: "Monopropellant" means a single propellant supplies the stored energy. Step 2: Liquid hydrazine sprayed onto an iridium-coated catalyst bed decomposes into hot ammonia, nitrogen and hydrogen. Step 3: The hot gas expands through a nozzle to about 220–235 s — no ignition system, only a valve. Step 4: Pairing with nitrogen tetroxide describes the bipropellant variant, and the two electrical options are electric-propulsion architectures.'
      },
      {
        q: 'Which statement about solar sails and nuclear thermal propulsion is correct?',
        options: [
          'Solar sails carry reaction mass that is expelled by onboard photon guns',
          'Nuclear thermal rockets heat hydrogen in a reactor core, roughly doubling chemical specific impulse',
          'Nuclear thermal specific impulse is about ten times chemical values',
          'Solar sails work best far from the sun, where radiation pressure is concentrated'
        ],
        answer: 1,
        explanation: 'Step 1: A sail carries no propellant — sunlight itself supplies momentum at about $9\\ \\mu$N/m² per perfect reflector at Earth distance. Step 2: Nuclear thermal passes liquid hydrogen through a solid-core reactor and expands it through a nozzle. Step 3: The result, $I_{sp} \\approx 850$–$1{,}000$ s, is roughly double the best chemical stages — not tenfold, which would need electric or fusion concepts. Step 4: Sail thrust falls with the inverse square of solar distance, favouring inner-region missions.'
      }
    ]
  },
  // ------------------------------------------------ s6 — Environment & systems
  {
    sectionId: 'me-e-propulsion-s6',
    readingTime: 9,
    prerequisites: [
      'Stefan–Boltzmann radiation law from heat transfer',
      'Orbital velocity and two-body mechanics basics',
      'Mission $\\Delta v$ sizing from the rocket equation (Section 2)'
    ],
    intro: 'A spacecraft is a system of systems flying through one of the most hostile environments engineers work in: hard vacuum, thermal swings of hundreds of kelvin, atomic oxygen that eats polymers, and radiation belts that flip bits in electronics. Selection assessments for spacecraft and mission roles probe this systems literacy — thermal control with radiation as the only rejection path, power from solar arrays and batteries, attitude control with reaction wheels, and the telemetry-tracking-command link that keeps the vehicle alive. This section closes the chapter by walking the environment first, then each bus subsystem, and finally the mission phases — ascent, transfer burns including the Hohmann minimum-energy transfer, insertion and station-keeping — that sequence them all.',
    objectives: [
      'Explain the orbital environment: vacuum, thermal extremes with radiation as the only heat-rejection path, atomic oxygen, radiation belts and single-event upsets',
      'Size thermal hardware with the Stefan–Boltzmann law and distinguish passive (MLI, coatings) from active (loops, heaters) thermal control',
      'Survey the bus: structures, power (solar arrays, batteries, radioisotope generators) and attitude control (reaction wheels, thrusters, magnetic torquers)',
      'Trace mission phases — ascent, Hohmann transfer burns, orbit insertion, station-keeping — and compute a two-impulse transfer'
    ],
    concepts: [
      {
        term: 'Vacuum and the thermal environment',
        kind: 'law',
        statement: 'In vacuum there is no convection or conduction to the surroundings — **radiation is the only way to reject heat**: $q = \\epsilon \\sigma A T^4$. A spacecraft alternates between full sun (solar constant $\\approx 1{,}361$ W/m²) and eclipse, swinging component temperatures by hundreds of kelvin.',
        detail: 'Every watt of dissipated electronics and absorbed sunlight must leave through radiators sized by the Stefan–Boltzmann law — the worked example sizes one in three lines. Surface optical properties (white paints, polished metals, optical solar reflectors) set the absorbed-to-emitted balance and hence equilibrium temperature. Thermal design is verified against hot cases (end-of-life absorptivity, full sun, peak dissipation) and cold cases (eclipse, equipment off).'
      },
      {
        term: 'Atomic oxygen and the radiation belts',
        kind: 'definition',
        statement: 'At low-orbit altitudes the residual atmosphere exists as **atomic oxygen** that chemically attacks and erodes polymers and unprotected coatings; the **Van Allen belts** trap energetic protons and electrons that dose electronics and materials; and single energetic particles cause **single-event upsets** — bit flips in memory and logic.',
        detail: 'Mitigations are specific: erosion-resistant films and coatings for atomic oxygen; shielding, radiation-hardened parts and error-correcting memory for belts and cosmic rays; trajectory choices that limit dwell time in the harshest zones. Mission planners treat environment as a budget — cumulative dose, fluence and upset rates are quoted per mission phase. Assessment questions usually pair each hazard with its standard countermeasure.'
      },
      {
        term: 'Structures and the bus–payload split',
        kind: 'definition',
        statement: 'A spacecraft divides into the **payload** (instruments that fulfil the mission) and the **bus** (structures, power, thermal, attitude control, command and data handling, communications). Structures must survive launch — quasi-static accelerations of several $g$ plus intense acoustic and vibration environments — and then deploy antennas, arrays and booms on orbit.',
        detail: 'Launch loads dominate structural sizing: the lightest structure that survives ascent usually carries margin for orbital duty. Stiffness requirements (avoiding coupling with control dynamics) and deployment mechanisms (springs, hinges, damper-cabled systems) are recurring design topics. Every kilogram of structure is a kilogram of payload not carried — the same mass discipline the rocket equation imposes.'
      },
      {
        term: 'Power: arrays, batteries and radioisotopes',
        kind: 'method',
        statement: 'Power comes from **solar arrays** (with batteries cycled every eclipse season, sized by depth of discharge), regulated distribution buses (typically 28–100 V) and — where sunlight fails — **radioisotope thermoelectric generators** that convert isotope decay heat directly into electricity for deep-space missions.',
        detail: 'Arrays degrade with radiation dose and with distance (the inverse-square law roughly halves output at Mars distances), so end-of-life power drives array area. Battery sizing is a short numerical: energy per eclipse divided by allowable depth of discharge — the worked example does exactly this. Radioisotope generators trade low conversion efficiency and nuclear handling for years of weather-independent power far from the sun.'
      },
      {
        term: 'Thermal control: passive and active',
        kind: 'method',
        statement: '**Passive** control fixes the heat balance at design time: multi-layer insulation (MLI) blankets, coatings with chosen absorptivity/emissivity, constant-conductance heat pipes and dedicated radiators. **Active** control responds in flight: pumped fluid loops, thermostatted electric heaters and louvers that vary radiator exposure.',
        detail: 'Passive hardware has no moving parts and no failure modes beyond degradation — it carries the baseline. Active elements buy authority where dissipations vary by an order of magnitude (radars, transmitters, electric thrusters). The craft of thermal design is buying the cheapest authority that keeps every component inside its limits across all mission cases.'
      },
      {
        term: 'Attitude control, TT&C and mission phases',
        kind: 'insight',
        statement: 'Attitude is sensed (star trackers, sun sensors, gyros), estimated and actuated by **reaction wheels** (momentum-exchange flywheels), **thrusters** and **magnetic torquers** (coils playing against Earth’s field); wheels **saturate** and must be desaturated by the other two. The **telemetry, tracking and command (TT&C)** link returns health data and receives commands. Mission phases: **ascent**, **transfer burns** (the two-impulse **Hohmann** transfer is the minimum-energy coplanar case), **orbit insertion** and **station-keeping**.',
        detail: 'Wheel-only control uses no propellant but stores momentum — periodic desaturation by thrusters or magnetic torquing resets it. Station-keeping spends the budget that holds a geostationary slot against lunisolar inclination drift and field longitudinal drift, or fights drag in low orbit. Transfer design ties this chapter to the rocket equation: every phase and every correction is a line in the $\\Delta v$ ledger.'
      }
    ],
    examples: [
      {
        title: 'Sizing a radiator',
        problem: 'A communications payload dissipates $400$ W that must be rejected by a radiator operating at $T = 300$ K with emissivity $\\epsilon = 0.85$ ($\\sigma = 5.67 \\times 10^{-8}$ W/m²K⁴). Find the required single-sided radiator area, and the panel area if both faces radiate to space.',
        steps: [
          { label: 'Step 1', text: '```text\nq/A = eps * sigma * T^4\n```\nRadiated flux: $q/A = \\epsilon \\sigma T^4 = 0.85 \\times 5.67 \\times 10^{-8} \\times 300^4$.' },
          { label: 'Step 2', text: 'Evaluate: $300^4 = 8.1 \\times 10^9$, so $q/A = 0.85 \\times 5.67 \\times 10^{-8} \\times 8.1 \\times 10^9 = 390$ W/m².' },
          { label: 'Step 3', text: 'Single-sided area: $A = 400/390 = 1.03$ m².' },
          { label: 'Step 4', text: 'A double-sided radiator rejecting from both faces needs about $0.52$ m² of panel — one reason radiators are built as thin deployed panels viewing deep space.' }
        ],
        result: 'About $1.0$ m² single-sided ($0.52$ m² if both faces radiate).'
      },
      {
        title: 'Battery sizing for eclipse',
        problem: 'A low-orbit spacecraft draws $300$ W continuously and passes through a $35$-minute eclipse each orbit. Size the battery for a $30\\%$ depth of discharge on a $28$ V bus.',
        steps: [
          { label: 'Step 1', text: 'Energy per eclipse: $E = 300 \\times 35/60 = 175$ Wh.' },
          { label: 'Step 2', text: 'Installed energy at $30\\%$ depth of discharge: $E_{bat} = 175/0.30 = 583$ Wh.' },
          { label: 'Step 3', text: 'Capacity in ampere-hours on a 28 V bus: $583/28 = 20.8$ Ah.' },
          { label: 'Step 4', text: 'Deeper discharge would shrink the battery but shorten cycle life — low-orbit batteries endure about $5{,}500$ eclipse cycles per year, so depth of discharge is a life-versus-mass trade.' }
        ],
        result: 'Approximately $583$ Wh installed — about $21$ Ah at 28 V.'
      },
      {
        title: 'Hohmann transfer from low orbit to geostationary altitude',
        problem: 'Compute the two-impulse $\\Delta v$ for a Hohmann transfer from a $300$ km circular low orbit ($r_1 = 6{,}678$ km) to geostationary altitude ($r_2 = 42{,}164$ km), with $\\mu = 3.986 \\times 10^{14}$ m³/s². Plane change is ignored.',
        steps: [
          { label: 'Step 1', text: 'Circular speeds: $v_1 = \\sqrt{\\mu/r_1} = 7.73$ km/s and $v_2 = \\sqrt{\\mu/r_2} = 3.07$ km/s.' },
          { label: 'Step 2', text: 'Transfer ellipse semi-major axis: $a = (r_1 + r_2)/2 = 24{,}421$ km.' },
          { label: 'Step 3', text: 'Vis-viva $v^2 = \\mu(2/r - 1/a)$ on the ellipse gives perigee speed $10.15$ km/s and apogee speed $1.61$ km/s.' },
          { label: 'Step 4', text: 'Impulses: $\\Delta v_1 = 10.15 - 7.73 = 2.43$ km/s; $\\Delta v_2 = 3.07 - 1.61 = 1.47$ km/s.' },
          { label: 'Step 5', text: 'Total $\\Delta v \\approx 3.90$ km/s — the classic figure quoted before plane-change and station-keeping reserves, which add roughly $1.8$ km/s in practice.' }
        ],
        result: '$\\Delta v_1 \\approx 2.43$ km/s, $\\Delta v_2 \\approx 1.47$ km/s, total $\\approx 3.9$ km/s.'
      }
    ],
    keyTakeaways: [
      'Vacuum removes convection and conduction: radiation ($q = \\epsilon \\sigma A T^4$) is the only heat-rejection path, so radiators and surface optical properties carry the thermal design.',
      'Low-orbit hazards: atomic oxygen erodes polymers; trapped belts dose electronics; single-event upsets flip bits — countered by coatings, shielding, rad-hard parts and error-correcting memory.',
      'The bus is built around power (arrays plus batteries, radioisotopes for deep space), thermal control (passive MLI and coatings first, active loops and heaters where authority is needed) and attitude control (reaction wheels, desaturated by thrusters or magnetic torquers).',
      'Mission phases form the $\\Delta v$ ledger: ascent, Hohmann-class transfer burns, orbit insertion and station-keeping — every phase is rocket-equation money.'
    ],
    quiz: [
      {
        q: 'A radiator must reject $500$ W at $T = 300$ K with emissivity $\\epsilon = 0.80$ ($\\sigma = 5.67 \\times 10^{-8}$ W/m²K⁴). The required single-sided area is about',
        options: ['$0.72$ m²', '$1.36$ m²', '$2.16$ m²', '$3.10$ m²'],
        answer: 1,
        explanation: 'Step 1: Radiated flux $q/A = \\epsilon \\sigma T^4 = 0.80 \\times 5.67 \\times 10^{-8} \\times 8.1 \\times 10^9$. Step 2: Evaluate: $0.80 \\times 459 = 367$ W/m². Step 3: Required area $= 500/367 = 1.36$ m². Step 4: Halving to about $0.7$ m² is the double-sided result; the larger distractors come from dropping $\\epsilon$ or mishandling $T^4$.'
      },
      {
        q: 'Why must a spacecraft reject waste heat exclusively by radiation?',
        options: [
          'Because conduction through the structure is forbidden by mass limits',
          'Because vacuum offers no convection or conduction medium — radiative emission is the only path to space',
          'Because radiation is the most efficient transport mode at all temperatures',
          'Because sunlight blocks convective currents in orbit'
        ],
        answer: 1,
        explanation: 'Step 1: Convection needs a fluid, and low orbit is near-vacuum. Step 2: Conduction needs a material path — space provides none beyond the spacecraft itself. Step 3: Thermal photons escape freely, so radiators sized by $\\epsilon \\sigma A T^4$ are the only rejection hardware. Step 4: Internal conduction and pumped loops still move heat around inside the vehicle — it is the boundary to space that must be radiative.'
      },
      {
        q: 'Reaction wheels on a long-duration spacecraft must periodically be desaturated because',
        options: [
          'their bearings overheat in vacuum',
          'they accumulate stored momentum up to a saturation limit and can then absorb no more',
          'solar radiation pressure demagnetises their rotors',
          'their spin-down would violate conservation of angular momentum'
        ],
        answer: 1,
        explanation: 'Step 1: A reaction wheel controls attitude by exchanging angular momentum with the bus. Step 2: Persistent disturbance torques (drag, gravity gradient, solar pressure) pump momentum into the wheels cycle after cycle. Step 3: Each wheel has a maximum spin rate — at saturation it can accept no more momentum and control authority is lost. Step 4: Magnetic torquers or small thruster dumps unload the wheels so the cycle can restart.'
      },
      {
        q: 'A single-event upset in spacecraft electronics is caused by',
        options: [
          'a thermal cycle cracking a solder joint',
          'a single energetic particle depositing charge and flipping a bit',
          'an atomic-oxygen attack on a conductor',
          'a reaction wheel exceeding its speed limit'
        ],
        answer: 1,
        explanation: 'Step 1: Cosmic rays and trapped belt particles carry high energy per particle. Step 2: One particle striking a sensitive memory or logic node can deposit enough charge to change its state. Step 3: The result is a flipped bit — usually recoverable, but capable of cascading through the avionics. Step 4: Countermeasures: radiation-hardened components, error-correcting memory, watchdog circuits and shielded packaging.'
      }
    ]
  }
]
