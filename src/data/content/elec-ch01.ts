import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// THE ELECTRONICS MASTER LIBRARY — Chapter 1
// Hughes, "Electrical & Electronic Technology" 12e, chs 1–2 (print pp 24–49)
// merged with Nilsson & Riedel, "Electric Circuits" 12e, chs 1–2 (print pp 28–51)
//
// Four sections: SI units · charge and current · voltage, EMF and energy ·
// power, efficiency and the passive sign convention.
// All worked-example numbers are the books' own. Math is LaTeX rendered by
// KaTeX through the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh1Content: SectionContent[] = [
  // ------------------------------------------------------------------ 1.1
  {
    sectionId: 'ee-e-basic-electrical-s9',
    depth: [
      {
        tier: 'masters',
        title: 'Dimensions, energy chains and Carnot’s bound',
        blocks: [
          {
            kind: 'remark',
            body: 'Coherence is more than bookkeeping convenience — it is the statement that every physical law is **dimensionally homogeneous**. Any correct equation reduces, on substituting units, to an identity: $P = M\\omega$ works because a newton metre times a radian per second is a watt, the radian being dimensionless ($\\text{rad} = \\text{m}/\\text{m}$). The **Buckingham π theorem** makes the idea rigorous: a relation among $n$ quantities built from $k$ independent dimensions collapses into a relation among $n - k$ dimensionless groups. That is why $P = 2\\pi N_r M / 60$ needs its peculiar 60 — converting minutes to seconds — and nothing else, and why torque (newton metre) and energy (joule) share dimensions while meaning different things. The working engineer’s check is exactly this: if the units do not balance, no amount of algebra will repair the physics.',
          },
          {
            kind: 'derivation',
            heading: 'The Carnot bound',
            body: 'Hughes’s station returns $\\eta = 0.288$, and the fair question is how much of the missing 71 per cent is engineering carelessness. The **second law** answers. Run an ideal engine reversibly between a hot reservoir at $T_h$ and a cold one at $T_c$: for the reversible cycle, global entropy is conserved, so $Q_c/Q_h = T_c/T_h$, and $$\\eta_{max} = \\frac{W}{Q_h} = 1 - \\frac{Q_c}{Q_h} = 1 - \\frac{T_c}{T_h}.$$ Superheated steam near $810\\ \\text{K}$ rejecting heat to a condenser near $300\\ \\text{K}$ therefore caps any plant at $\\eta_{max} \\approx 0.63$; the Rankine cycle’s boilers, turbines and feed heaters then spend half that ideal, and $0.63/2$ brackets Hughes’s figure. Efficiency is bought by raising $T_h$ (supercritical boilers) or by stacking a gas turbine’s exhaust under the steam cycle — **combined cycle** plants reach $\\eta \\approx 0.62$ — never by polishing the alternator.',
          },
          {
            kind: 'para',
            body: 'Real systems convert energy in stages, and stage efficiencies **multiply**: $\\eta = \\eta_1\\eta_2\\cdots\\eta_m$, each stage’s output being the next one’s input. Take logarithms and differentiate to get $\\frac{d\\eta}{\\eta} = \\sum_j \\frac{d\\eta_j}{\\eta_j}$: a ten per cent relative gain in any single stage yields exactly ten per cent in the chain, so engineering effort flows to whichever stage is cheapest to improve, usually the worst one. Hughes’s $0.288$ decomposes plausibly into boiler and combustion losses of $\\approx 0.88$, a thermodynamic-cycle-plus-turbine factor of $\\approx 0.36$, and generator plus auxiliaries of $\\approx 0.91$, whose product is $0.288$. The same multiplicative logic orders every design decision in an energy chain, and **Sankey diagrams** — arrows whose width is power — remain the engineer’s first audit tool for finding where the biggest slice is lost.',
          },
          {
            kind: 'example',
            heading: 'Auditing a power station',
            body: 'Return to Hughes’s Example 1.6 with the stage view. An output of $280\\ \\text{MW h}$ per day from $3.5 \\times 10^{12}\\ \\text{J}$ of coal gives $\\eta = 0.288$. Suppose the audit finds combustion and boiler at $0.88$ and the generator at $0.97$: the chain then requires $\\eta_{cycle} = 0.288/(0.88 \\times 0.97) \\approx 0.34$, a plausible Rankine figure, so the audit closes. Now replace the cycle with a combined-cycle unit at $0.60$ fed by the boiler’s exhaust: the product becomes $0.88 \\times 0.60 \\times 0.97 \\approx 0.51$, and the same coal delivers about $1.8 \\times 10^{12}\\ \\text{J}$ per day. The moral is structural rather than electrical: because efficiencies multiply, the thermodynamic cycle — not the wiring, not the alternator — decides the fate of half the world’s fuel budget.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Metrology rebuilt on the constants',
        blocks: [
          {
            kind: 'application',
            heading: 'The 2019 SI redefinition',
            body: 'On 20 May 2019 the SI was quietly rebuilt: every base unit is now defined by fixing the numerical value of a fundamental constant — $c$, $h$, $e$, $k_B$, $N_A$ and $K_{cd}$ — and the platinum–iridium cylinder this section met as the kilogram became a museum piece. The new kilogram is realized with the **Kibble balance**, which equates the electrical power $VI$ of a coil moving in a magnetic field with the mechanical power $mgv$ of the mass it lifts — this chapter’s energy bookkeeping made into an instrument, volts and amperes on one pan, newtons and metres on the other. The **ampere** is now simply the current of $1/(1.602176634 \\times 10^{-19})$ elementary charges per second; the force-between-conductors definition quoted in Section 1.3 is retired, and $\\mu_0$ stops being an exact number and becomes an experiment.',
          },
          {
            kind: 'remark',
            body: 'The deepest consistency check in electrical metrology is the **quantum metrology triangle**. Realize a voltage with the Josephson effect, $V = f/K_J$ where $K_J = 2e/h \\approx 483.6\\ \\text{GHz V}^{-1}$; realize a resistance with the quantum Hall effect, $R_K = h/e^{2} \\approx 25.8\\ \\text{k}\\Omega$; realize a current with a single-electron pump that counts charges one at a time. Ohm’s law, $V = RI$, then relates three independently realized quantum standards, and any discrepancy bounds drift — or new physics — in $e$ and $h$ themselves. Pumps presently reach parts in $10^{7}$, and closing the triangle at the $10^{8}$ level is an active metrology goal: one of the few live experiments capable of revealing the fine-structure constant moving underneath the constants the SI is built on.',
          },
          {
            kind: 'open',
            heading: 'Will the second fall next?',
            body: 'The 2019 reform left one unit still defined by a single physical embodiment: the second, tied to the caesium-133 hyperfine transition at $9\\,192\\,631\\,770$ Hz. **Optical clocks** — single trapped ions and optical lattices — now reach fractional uncertainties near $10^{-18}$, two orders of magnitude beyond caesium, so a redefinition is being engineered rather than merely debated. The hard part is comparability: linking clocks across continents by optical fibre or satellite without losing the last digit, and surveying **geopotential** heights to centimetre level, because general relativity makes clocks at different altitudes tick differently — by about $10^{-18}$ per centimetre of height. The open questions are curiously close to electrical engineering: distributing optical frequencies, managing the relativistic bookkeeping of a network, and deciding what synchronized time means when no two clocks sit at the same gravitational potential.',
          },
        ],
      },
    ],
    readingTime: 8,
    intro: 'Electrical technology sits on top of mechanics, heat, light and sound: we drive cranes with motors, warm rooms with heaters, and the underlying interest in electricity is always the delivery of energy from a source to a point of application. Before any circuit can be analysed, the quantities involved — force, torque, work, energy, power, efficiency and temperature — need agreed units. This section merges Hughes’s opening chapter on the International System with Nilsson’s compact tables of SI base and derived units.',
    objectives: [
      'Explain what makes the SI a coherent system and list its base quantities',
      'Compute force, torque, work, energy and power in SI units',
      'Relate rotational speed, torque and mechanical power with $P = 2\\pi N_r M / 60$',
      'Define efficiency and account for input versus output energy',
      'Convert freely between joules and kilowatt hours',
    ],
    concepts: [
      {
        term: 'The International System (SI)',
        kind: 'definition',
        statement: 'The **International System of Units**, known as SI in every language, was formally introduced in 1960 and has been accepted by most countries as their only legal system of measurement.',
        detail: 'Its greatest advantage over its predecessors is **coherence**: a system is coherent if the product or quotient of any two unit quantities is the unit of the resultant quantity — unit area results when unit length multiplies unit length, and unit velocity when unit length is divided by unit time. Hughes bases the system on six physical quantities (mass, length, time, electric current, absolute temperature, luminous intensity); the modern SI table Nilsson reproduces adds a seventh, the mole (amount of substance), and lists the ampere among the base units alongside the metre, kilogram, second, kelvin and candela.',
      },
      {
        term: 'Definitions of the base units',
        kind: 'definition',
        statement: 'The kilogram is the mass of a **platinum–iridium cylinder preserved at Sèvres** near Paris; the metre is $1\\,650\\,763.73$ wavelengths of the orange line of a specified krypton discharge lamp; the second is $9\\,192\\,631\\,770$ cycles of the caesium-133 transition; the kelvin is $1/273.16$ of the thermodynamic temperature of the triple point of water.',
        detail: 'On the Celsius scale the triple point of water sits at 0.01 °C, so $0\\,^\\circ\\text{C} = 273.15$ K — and a temperature interval of 1 °C is identical to an interval of 1 K; only the reference zero differs. Standard submultiples of the second are used, but multiples are usually replaced by minutes, hours, days and years. Nilsson adds the engineer’s prefix discipline: use prefixes for powers divisible by 3 (pico $10^{-12}$, nano, micro, milli, kilo, mega, giga, tera) and pick the prefix that puts the base number between 1 and 1000 — a $10^{-5}$ s result is naturally written as 10 µs.',
      },
      {
        term: 'Quantity symbols and unit abbreviations',
        kind: 'notation',
        statement: 'Each quantity carries a symbol ($W$ for energy, $P$ for power) and each unit an abbreviation (J, W) used **only after numbers** — one writes 16 J but “a few joules of energy”.',
        detail: 'Capital letters normally represent constant quantities; if a quantity varies, the lower-case symbol is used — $W$ indicates constant energy whereas $w$ indicates a time-varying value. Hughes highlights each new quantity in the form: Energy, Symbol: $W$, Unit: joule (J). This lowercase-for-varying convention is exactly the one Nilsson uses for $v$, $i$ and $p$ in circuit analysis.',
      },
      {
        term: 'Force and weight',
        kind: 'law',
        statement: 'The unit of force, the newton, gives a one-kilogram mass an acceleration of one metre per second squared: $$F = ma.$$ The **weight** of a body is the gravitational force exerted by the Earth on it — approximately $9.81m$ newtons at sea level, varying slightly with latitude.',
        detail: 'In Hughes’s Example 1.1 a force of 50 N applied to a 200 kg mass produces $a = 50/200 = 0.25$ m/s². Weight follows from $F = ma$ with $g = 9.81$ m/s²: an 80 kg steel block weighs $80 \\times 9.81 = 785$ N (three significant figures — writing 784.8 N would be false accuracy, since the inputs were only given to two or three figures). Hughes’s Fig. 1.1 shows the weight of 1 kg at sea level ranging from about 9.78 N to 9.84 N across latitudes.',
      },
      {
        term: 'Torque (turning moment)',
        kind: 'definition',
        statement: 'If a force $F$ acts at right angles to a radius $r$ from a point, the turning moment or **torque** about that point is $$T = Fr$$ in newton metres (N m).',
        detail: 'The symbol $M$ is reserved for the torque of a rotating electrical machine, so $T$ and $M$ both mean torque but $M$ specifically flags machine shafts. Torque is the rotational analogue of force: applied to a body, it causes rotational acceleration, just as force causes linear acceleration.',
      },
      {
        term: 'Work and energy',
        kind: 'law',
        statement: 'The joule is the work done when a force of 1 N acts through 1 m in its own direction: $W = Fl$. A body of mass $m$ moving at velocity $u$ carries kinetic energy $W = \\tfrac{1}{2}mu^{2}$, and a mass lifted through height $h$ gains potential energy $W \\approx 9.81mh$.',
        detail: 'Energy is the capacity for doing work, so both are measured in the same unit. Hughes’s Example 1.3 drops a 30 kg body from 50 m: its potential energy is $294.3 \\times 50 = 14\\,700$ J, its landing speed is $u = \\sqrt{2 \\times 9.81 \\times 50} = 31.32$ m/s, and its kinetic energy is $\\tfrac{1}{2} \\times 30 \\times 31.32^{2} = 14\\,700$ J — the whole of the potential energy converts to kinetic energy, then to heat on impact.',
      },
      {
        term: 'Power and the kilowatt hour',
        kind: 'law',
        statement: 'Power is the rate of doing work, so the SI unit is the joule per second, or **watt**: for linear motion $P = Fu$, and for a rotating machine $$P = M\\omega = \\frac{2\\pi N_r M}{60},$$ where $N_r$ is the rotational speed in revolutions per minute. The commercial unit of energy is the **kilowatt hour** — the work done at 1 kW for one hour, exactly $3.6 \times 10^{6}$ J.',
        detail: 'Hughes’s Example 1.5 finds the shaft torque of a motor developing 10 kW at 900 r/min: the speed is $900/60 = 15$ r/s, so $10\\,000 = T \\times 2\\pi \\times 15$ and $T = 106$ N m. The watt is often inconveniently small, hence the kilowatt. Once known as the Board of Trade Unit, the kilowatt hour is what electricity suppliers still call simply “the unit”: a heater drawing 1.84 kW for 12 h consumes about 22 kW h, which is 79 MJ in SI units — the number on every electricity bill.',
      },
      {
        term: 'Efficiency',
        kind: 'definition',
        statement: 'When a device converts or transforms energy, some input energy is consumed to make the device operate. The **efficiency** is $$\\eta = \\frac{\\text{energy output in a given time}}{\\text{energy input in the same time}} = \\frac{W_o}{W_{in}} = \\frac{P_o}{P_{in}},$$ a dimensionless ratio always less than one.',
        detail: 'The difference between output and input is usually wastage as heat. In Hughes’s Example 1.6 a generating station outputs 280 MW h per day while burning 500 t of coal at 7 MJ/kg — an input of $3.5 \\times 10^{12}$ J against an output of $1.01 \\times 10^{12}$ J — giving an overall efficiency of $\\eta = 0.288$, a figure typical of thermal generation.',
      },
      {
        term: 'Temperature measurement',
        kind: 'notation',
        statement: 'Absolute temperature is measured in kelvin, but for most introductory electrical purposes **degrees Celsius** suffice; both degrees represent the same change in temperature, the difference being only the reference zero.',
        detail: 'A useful constant: it takes 4185 J to raise the temperature of 1 litre of water through 1 °C. Hughes’s Example 1.8 supplies 2.5 kW h ($9 \\times 10^{6}$ J) to 40 litres of water initially at 15 °C; the rise is $9 \\times 10^{6} / (40 \\times 4185) = 53.8$ °C, giving a final temperature of 68.8 °C. Temperature matters to electrical work because resistance varies with it — the subject of Section 2.5.',
      },
    ],
    examples: [
      {
        title: 'From force to power: hauling a stone block',
        problem: 'A stone block of mass 120 kg is hauled 100 m along a horizontal floor in 2 min; the coefficient of friction is 0.3. Find the horizontal force, the work done and the power. (Hughes Example 1.4)',
        steps: [
          { label: 'Step 1: Weight of the block', text: 'The weight is the gravitational force: $F_w \\approx 120 \\times 9.81 = 1177.2$ N.' },
          { label: 'Step 2: Friction force', text: 'The horizontal force must overcome friction: $F = 0.3 \\times 1177.2 = 353.16$ N, reported as 353 N to match the input’s significant figures.' },
          { label: 'Step 3: Work done', text: 'Work equals force times distance in the direction of the force: $W = 353.16 \\times 100 = 35\\,316$ J, i.e. 35.3 kJ.' },
          { label: 'Step 4: Power', text: 'Power is work per time, and 2 min is 120 s: $P = 35\\,316 / 120 = 294$ W.' },
        ],
        result: 'Force 353 N, work 35.3 kJ, power 294 W — a chain of unit bookkeeping that runs from $F = ma$ through $W = Fl$ to $P = W/t$.',
      },
      {
        title: 'Torque and efficiency at the shaft',
        problem: 'An electric motor develops 10 kW at 900 r/min; find the shaft torque. Separately, a lift of 250 kg is raised at 5 m/s by a motor of efficiency 85 per cent; find the motor input power. (Hughes Examples 1.5 and 1.7)',
        steps: [
          { label: 'Step 1: Convert the speed', text: 'Rotational speed $N_r = 900$ r/min is $900/60 = 15$ r/s.' },
          { label: 'Step 2: Solve for torque', text: 'From $P = 2\\pi N_r M$: $10\\,000 = T \\times 2\\pi \\times 15$, so $T = 10\\,000 / 94.25 \\approx 106$ N m.' },
          { label: 'Step 3: Lift output power', text: 'The lift needs force equal to its weight, $F = mg = 250 \\times 9.81 = 2452$ N, moved at $u = 5$ m/s, so $P_o = Fu = 2452 \\times 5 = 12\\,260$ W.' },
          { label: 'Step 4: Account for efficiency', text: 'The motor must be fed more than it delivers: $P_{in} = P_o / \\eta = 12\\,260 / 0.85 \\approx 14.5$ kW — the missing 15 per cent leaves as heat inside the motor.' },
        ],
        result: 'Torque 106 N m; lift motor input about 14.5 kW. Efficiency always runs the “wrong way”: divide by $\\eta$ to size the input, multiply to predict the output.',
      },
      {
        title: 'Energy accounting: a power station and a water heater',
        problem: 'A generating station has a daily output of 280 MW h and uses 500 tonnes of coal releasing 7 MJ/kg; find the overall efficiency. Then, an electric heater with 40 litres of water at a mean 15 °C receives 2.5 kW h; find the final water temperature assuming no losses. (Hughes Examples 1.6 and 1.8)',
        steps: [
          { label: 'Step 1: Energy input from coal', text: '$W_{in} = 7 \\times 10^{6} \\times 500 \\times 1000 = 3.5 \\times 10^{12}$ J per day (500 t is 500 000 kg).' },
          { label: 'Step 2: Energy output in joules', text: 'The electrical output is $280\\ \\text{MW h} = 280 \\times 10^{6} \\times 3.6 \\times 10^{3} \\approx 1.01 \\times 10^{12}$ J.' },
          { label: 'Step 3: Overall efficiency', text: '$\\eta = W_o / W_{in} = 1.01 \\times 10^{12} / 3.5 \\times 10^{12} = 0.288$ — barely 29 per cent of the coal’s chemical energy becomes electricity.' },
          { label: 'Step 4: Heater energy in joules', text: 'The water receives $2.5\\ \\text{kW h} = 2.5 \\times 3.6 \\times 10^{6} = 9 \\times 10^{6}$ J.' },
          { label: 'Step 5: Temperature rise', text: 'Heating 40 litres by 1 °C takes $40 \\times 4185$ J, so $\\Delta\\theta = 9 \\times 10^{6} / 167\\,400 = 53.8$ °C and $\\theta_2 = 15 + 53.8 = 68.8$ °C.' },
        ],
        result: 'Station efficiency 0.288; final water temperature 68.8 °C. Two faces of the same bookkeeping — large-scale conversion losses and controlled beneficial heating.',
      },
    ],
    keyTakeaways: [
      'The SI is coherent: products and quotients of unit quantities give unit results, so derived units never need stray numerical factors.',
      'Force follows $F = ma$ (newton), torque $T = Fr$ (newton metre) and work $W = Fl$ (joule); power is $P = Fu$, or $P = 2\\pi N_r M / 60$ for a machine shaft with $N_r$ in r/min.',
      'The kilowatt hour is the commercial energy unit: $1\\ \\text{kW h} = 3.6$ MJ exactly.',
      'Efficiency $\\eta = P_o / P_{in}$ is always below unity; the difference is almost always heat, whether wasted in a station (0.288) or wanted in a heater.',
      'Degrees Celsius and kelvin share the same interval size; it takes 4185 J to warm one litre of water by 1 °C.',
      'Respect significant figures: Hughes rounds 784.8 N to 785 N because the 80 kg input carried only two or three figures.',
    ],
    quiz: [
      {
        q: 'A system of units is called “coherent” when:',
        options: ['Every unit is defined from a physical artefact such as the Sèvres cylinder', 'The product or quotient of any two unit quantities is the unit of the resultant quantity', 'All units are decimal multiples of each other', 'Every derived unit has its own special name'],
        answer: 1,
        explanation: 'Coherence means unit length × unit length = unit area, and unit length ÷ unit time = unit velocity — no conversion constants appear in the defining equations. This is the SI’s key advantage over its predecessors.',
      },
      {
        q: 'A motor develops 10 kW at 900 r/min. Using $P = 2\\pi N_r M / 60$, the shaft torque is approximately:',
        options: ['53 N m', '106 N m', '212 N m', '955 N m'],
        answer: 1,
        explanation: 'With $N_r = 900$ r/min, $M = 60 \\times 10\\,000 / (2\\pi \\times 900) \\approx 106$ N m — Hughes’s Example 1.5, done by converting to 15 r/s and dividing $10\\,000$ by $2\\pi \\times 15$.',
      },
      {
        q: 'One kilowatt hour equals:',
        options: ['3600 J', '36 kJ', '3.6 MJ', '3.6 GJ'],
        answer: 2,
        explanation: 'A kilowatt hour is 1000 W sustained for 3600 s: $1000 \\times 3600 = 3.6 \\times 10^{6}$ J = 3.6 MJ. Electricity suppliers call it simply “the unit”.',
      },
      {
        q: 'A station burns 500 t of coal (7 MJ/kg) to deliver 280 MW h in a day. Its efficiency is about:',
        options: ['0.13', '0.29', '0.56', '0.80'],
        answer: 1,
        explanation: 'Input $3.5 \\times 10^{12}$ J, output $\\approx 1.01 \\times 10^{12}$ J, so $\\eta \\approx 0.288$. More than two-thirds of the chemical energy is lost before it leaves the station.',
      },
      {
        q: 'An 80 kg block’s weight is computed as 784.8 N, but Hughes reports 785 N. Why?',
        options: ['Gravitational acceleration is only known to three figures', 'The answer should carry no more significant figures than the given data — reporting 784.8 N is false accuracy', 'The SI forbids decimals in force values', 'Rounding up is required by the SI convention'],
        answer: 1,
        explanation: 'The input (80 kg, $g = 9.81$ m/s²) carries only two or three significant figures, so the answer must be rounded to a reasonable compromise — 785 N. Hughes repeatedly warns against false accuracy.',
      },
      // PYQ-pattern: GATE 2019 — hoist efficiency chain (rephrased, values changed)
      {
        q: 'A hoist lifts a 400 kg load vertically at a steady 2 m/s. The gearbox efficiency is 0.92 and the motor efficiency is 0.88. The electrical input power drawn by the motor is closest to:',
        options: ['6.4 kW', '7.8 kW', '9.7 kW', '12.1 kW'],
        answer: 2,
        explanation: 'Step 1 — Given: mass $m = 400$ kg, steady velocity $u = 2$ m per s, $g = 9.81$ m per s squared, stage efficiencies $\\eta_{g} = 0.92$ and $\\eta_{m} = 0.88$. Step 2 — Governing relations: lifting force $F = mg$, mechanical output $P_{o} = Fu$, and stage efficiencies multiply so that $P_{in} = \\frac{P_{o}}{\\eta_{g}\\eta_{m}}$. Step 3 — Algebra: $F = 400 \\times 9.81 = 3924$ N, hence $P_{o} = 3924 \\times 2 = 7848$ W; the chain product is $0.92 \\times 0.88 = 0.8096$, so $P_{in} = \\frac{7848}{0.8096} \\approx 9694$ W, about 9.7 kW. Step 4 — Sanity check: input exceeds output by roughly 23 per cent of overhead, the kilowatt scale suits a hoist, and units reduce to watts throughout. Step 5 — Distractor analysis: 7.8 kW applies only one stage, 6.4 kW multiplies by the efficiencies instead of dividing, and 12.1 kW rounds $g$ upward and adds a spurious margin. Step 6 — Conclude: the draw is about 9.7 kW.',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.2
  {
    sectionId: 'ee-e-basic-electrical-s10',
    depth: [
      {
        tier: 'masters',
        title: 'Conduction as a field phenomenon',
        blocks: [
          {
            kind: 'derivation',
            heading: 'The Drude model: Newton with drag',
            body: 'Model the conduction electrons as a gas of particles of mass $m$ and charge $-e$, number density $n$, that scatter off the ion lattice on average every $\\tau$ seconds — a linear drag term $m\\mathbf{v}/\\tau$. Between collisions the field $\\mathbf{E}$ accelerates them, so the equation of motion is $$m\\frac{d\\mathbf{v}}{dt} = -e\\mathbf{E} - \\frac{m}{\\tau}\\mathbf{v}.$$ The velocity relaxes to a steady drift within a few $\\tau$, leaving $$\\mathbf{v}_d = -\\frac{e\\tau}{m}\\mathbf{E}, \\qquad \\mathbf{J} = -ne\\mathbf{v}_d = \\frac{ne^{2}\\tau}{m}\\mathbf{E}.$$ The coefficient of $\\mathbf{E}$ is the **conductivity**, $\\sigma = \\frac{ne^{2}\\tau}{m}$ — charge and mass from nature, density and collision time from the material. For copper, $n = 8.5 \\times 10^{28}\\ \\text{m}^{-3}$ and $\\tau \\approx 2.4 \\times 10^{-14}\\ \\text{s}$ give $\\sigma \\approx 5.8 \\times 10^{7}\\ \\text{S m}^{-1}$, within a few per cent of the measured value — a startling return for three lines of Newtonian mechanics.',
          },
          {
            kind: 'example',
            heading: 'How fast does drift actually go?',
            body: 'Take 1 A through a copper wire of $1\\ \\text{mm}^{2}$ cross-section, so $J = 10^{6}\\ \\text{A m}^{-2}$. The drift velocity is $$v_d = \\frac{J}{ne} = \\frac{10^{6}}{8.5 \\times 10^{28} \\times 1.602 \\times 10^{-19}} \\approx 7.3 \\times 10^{-5}\\ \\text{m s}^{-1}$$ — under a tenth of a millimetre per second, slower than a snail. Yet those same electrons move at the **Fermi velocity**, about $1.6 \\times 10^{6}\\ \\text{m s}^{-1}$, so the drift is a bias of order one part in $10^{10}$ imposed on violent thermal motion. The lamp nevertheless lights the instant the switch closes, because what propagates is the **field**, at nearly the speed of light, while the carriers themselves crawl — which is the quiet picture underneath every circuit diagram this book draws.',
          },
          {
            kind: 'remark',
            body: 'One formula explains why metals and semiconductors disagree about temperature. In $\\sigma = ne^{2}\\tau/m$, a metal’s $n$ is fixed by its chemistry: heating only intensifies lattice vibration, phonons scatter electrons more frequently, $\\tau$ falls roughly like $1/T$ above the Debye temperature, and **conductivity drops** — resistance climbs almost linearly, which is why a coil of copper doubles as a thermometer. In an intrinsic semiconductor $n$ is not fixed: generation across the band gap makes $n$ grow roughly like $e^{-E_g/2k_BT}$, and that exponential overwhelms the mild decline of $\\tau$, so **conductivity rises** with temperature. A platinum resistance thermometer and a thermistor are the same equation wearing opposite signs — the engineer’s first reminder that materials, not circuits, carry the temperature coefficient.',
          },
          {
            kind: 'para',
            body: 'Ohm’s law is not a law of nature but a **constitutive relation** — a statement about materials, valid only where the response is linear. Its local form is $\\mathbf{J} = \\sigma\\mathbf{E}$: field in, current density out, with $\\sigma$ the slope of the material’s response. Defining $\\rho = 1/\\sigma$ and integrating the field along a uniform bar of length $\\ell$ and area $A$ returns $R = \\rho\\ell/A$ — resistance is geometry times material and nothing more. It is often cleaner to bundle the Drude factors into the **mobility** $\\mu = e\\tau/m$, so that $\\sigma = ne\\mu$: how many carriers, times how easily each one moves. In a semiconductor both carriers count, $\\sigma = q(n\\mu_n + p\\mu_p)$. The relation fails when the field is so strong that velocity saturates, or when the device is shorter than a mean free path — the research tier below.',
          },
          {
            kind: 'derivation',
            heading: 'KCL is charge conservation',
            body: 'Kirchhoff’s current law is charge conservation in the lumped limit. In the continuum, applying Gauss’s theorem to the fact that any charge leaving a volume must cross its surface gives the **continuity equation**, $$\\nabla\\cdot\\mathbf{J} = -\\frac{\\partial\\rho}{\\partial t}.$$ Now integrate over the volume of a node — a junction together with the wires meeting there. The left side becomes $\\oint\\mathbf{J}\\cdot d\\mathbf{S}$, the net current leaving through the branches: $$\\sum_{k} i_k = -\\frac{dQ_{node}}{dt}.$$ Circuit theory’s second assumption — no net charge on any component — sets $dQ_{node}/dt = 0$, and KCL falls out: the currents entering a node sum, algebraically, to zero. The law is exact whenever lumping holds, and it fails exactly where charge does pile up — on the plates of a capacitor, which is where the leftover $dQ/dt$ term went to live.',
          },
          {
            kind: 'derivation',
            heading: 'KVL is Faraday’s law in disguise',
            body: 'Kirchhoff’s voltage law descends from Faraday. Around any closed contour $C$ bounding a surface $S$, $$\\oint_{C}\\mathbf{E}\\cdot d\\mathbf{l} = -\\frac{\\partial}{\\partial t}\\int_{S}\\mathbf{B}\\cdot d\\mathbf{S}.$$ When no time-varying magnetic flux links the loop — circuit theory’s third assumption, no magnetic coupling — the right side vanishes, the field is conservative, and the terminal voltages around any mesh sum to zero: KVL. The **quasi-static criterion** makes the approximation quantitative. A signal of frequency $f$ has wavelength $\\lambda = c/f$; a circuit whose largest dimension $L$ satisfies $$L \\ll \\lambda = \\frac{c}{f}$$ sees essentially one phase of the signal everywhere, the residual phase spread being of order $2\\pi L/\\lambda$. Nilsson’s one-tenth rule, $L \\le \\lambda/10$, caps that error near half a radian — the conventional edge of the lumped world, and the reason a 3 cm trace at $10^{9}$ Hz is a transmission line, not a wire.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Quantum transport: when Ohm’s law fails',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Landauer formula',
            body: 'Consider a two-terminal conductor so short and so clean that carriers cross it without scattering, connected to reservoirs that fix the electrochemical potentials $\\mu_1 > \\mu_2$. Its conductance is $$G = \\frac{2e^{2}}{h}\\,M,$$ where $M$ is the number of occupied transverse modes (subbands) of the constriction and the factor 2 is spin degeneracy. Each mode contributes $2e^{2}/h \\approx 77.5\\ \\mu\\text{S}$, a resistance of $h/2e^{2} \\approx 12.9\\ \\text{k}\\Omega$ — resistance without any dissipation inside the conductor: the **quantum of resistance**, $h/e^{2} \\approx 25.8\\ \\text{k}\\Omega$, is a contact effect, the irreducible price of asking a wave to enter and leave a channel.',
          },
          {
            kind: 'application',
            heading: 'Conductance steps you can see',
            body: 'In 1988 two independent groups — van Wees and co-workers, and Wharam and co-workers — defined a **quantum point contact** in a GaAs/AlGaAs two-dimensional electron gas: gate electrodes pinch the electron gas into a constriction a few hundred nanometres wide. Sweeping the gate voltage admits transverse modes one at a time, and the two-terminal conductance climbs a staircase whose steps are exactly $2e^{2}/h$ — conductance quantization, visible on an oscilloscope. Drude has nothing to say here: the mean free path, tens of micrometres, dwarfs the device, there is nothing to scatter from, and $R = \\rho\\ell/A$ gives way to waveguide counting. The quantum Hall effect is the same physics with the modes reorganized by a strong perpendicular magnetic field; its plateau value $R_K = h/e^{2}$ now anchors the SI ohm worldwide.',
          },
          {
            kind: 'remark',
            body: 'The boundary between Ohm and Landauer is the **mean free path** $\\ell_{mfp}$ measured against device length $L$. When $L \\gg \\ell_{mfp}$, collisions randomize the motion and Drude’s resistivity, proportional to length, holds. When $L \\lesssim \\ell_{mfp}$, transport is **ballistic**: resistance stops growing with length and is pinned by the contacts at $h/2e^{2}$ per occupied mode. The full statement, $G = \\frac{2e^{2}}{h}MT$, assigns each mode a transmission probability $T$ between zero and one; the disordered limit $T \\approx \\ell_{mfp}/L$ recovers Drude, so Ohm’s law emerges as the diffuse average over Landauer channels. Nor is this exotic: a 20 nm transistor channel, a carbon nanotube and a chain of gold atoms all operate in or near the ballistic regime, and their designers count modes rather than scattering events.',
          },
        ],
      },
    ],
    readingTime: 9,
    intro: 'Electricity can be considered from two points of view: the scientist asks what happens inside the phenomenon, while the engineer accepts that it is there and uses its properties. What makes it indispensable is that an electrical system transmits energy easily from a source to a remote point of application — a lamp fed by a generator kilometres away. This section assembles the vocabulary behind every later chapter: charge, the electron, conventional current, the closed circuit, and the ideal circuit element with which we shall model everything.',
    objectives: [
      'Describe the four functional parts of an electrical system and the engineer’s four categories of electrical engineering',
      'State the three assumptions that let circuit theory replace electromagnetic field theory',
      'Apply the rule of one-tenth to decide whether a system is lumped',
      'Relate charge, current and time through $i = dq/dt$ and $Q = It$',
      'Explain conventional current versus electron flow, and the attributes of an ideal basic circuit element',
    ],
    concepts: [
      {
        term: 'Electricity and the engineer',
        kind: 'insight',
        statement: 'Electrical engineering falls into four categories — the **production, transmission, application and control** of electrical energy — and the most significant property of electricity for the engineer is that it permits the source of energy to be remote from the point of application.',
        detail: 'Nilsson classifies the resulting systems five ways: communication systems (telephone networks, radar, satellites), computer systems (from calculators to supercomputers), control systems (refinery temperatures, autopilots, canal locks), power systems (generation and the continental grid) and signal-processing systems (weather-satellite imagery, MRI scans). The categories interlock — a commercial aircraft carries all five at once.',
      },
      {
        term: 'The electrical system and its four parts',
        kind: 'definition',
        statement: 'A basic electrical system has four constituent parts: the **source** (battery or generator, providing the energy), the **load** (lamps, heaters — absorbing the energy), the **transmission system** (insulated wire) and the **control apparatus** (at minimum a switch).',
        detail: 'Hughes’s Fig. 2.2 sketch of a generator, switch and lamp is hard to read, so circuit diagrams replace sketches with symbols published as IEC 617 (BS EN 60617 in the UK). Diagrams are drawn so that energy reads from **left to right**: source on the left, load on the right, control in between. Most symbols are self-explanatory and are picked up as each diagram is introduced.',
      },
      {
        term: 'Circuit theory as a model',
        kind: 'definition',
        statement: 'An **electric circuit is a mathematical model** that approximates the behaviour of an actual electrical system; the design loop runs need → design specifications → concept → circuit model → circuit analysis → physical prototype, with refinements fed back from both analysis and measurement.',
        detail: 'Nilsson stresses that we always mean the model unless otherwise stated, and that the ideal circuit components in a model should represent the actual components to an acceptable degree of accuracy. The reward of modelling is enormous: interconnections of ideal elements are described by mathematical equations in measurable quantities — voltage and current — with 40-year-old mature models meeting specifications on the first iteration.',
      },
      {
        term: 'The three assumptions of circuit theory',
        kind: 'law',
        statement: 'Circuit theory replaces electromagnetic field theory by assuming: (1) electrical effects happen **instantaneously** throughout the system (lumped-parameter); (2) the **net charge on every component is always zero**; and (3) there is **no magnetic coupling** between components.',
        detail: 'Assumption (1) works because signals travel at or near the speed of light: if the system is physically small, every point responds simultaneously. Assumptions (2) and (3) become meaningful once the basic elements and interconnection rules are introduced. Nothing else is assumed — these three buy simple solutions to problems that field theory would render hopelessly complicated.',
      },
      {
        term: 'The rule of one-tenth',
        kind: 'method',
        statement: 'A system qualifies as lumped when its physical dimension is less than **one-tenth of the signal wavelength** $\\lambda = c/f$: at 60 Hz the wavelength is $5 \\times 10^{6}$ m, so any power system smaller than about $5 \\times 10^{5}$ m (≈ 310 miles) is lumped; a $10^{9}$ Hz radio system must be smaller than 3 cm.',
        detail: 'Whenever a pertinent dimension approaches the wavelength of its signals, electromagnetic field theory must take over. Nilsson’s Example 1.1 gives a related engineering feel for scale: a signal at 80 per cent of the speed of light covers $2.4 \\times 10^{8} \\times 10^{-9}$ m, i.e. **9.45 inches of cable per nanosecond** — the number that rules high-speed digital design.',
      },
      {
        term: 'Electric charge',
        kind: 'definition',
        statement: 'Electricity appears in one of two forms, negative and positive; **electric charge is the excess** of one or the other on a body or in space. Charge is bipolar and exists in discrete quantities that are integer multiples of $1.6022 \\times 10^{-19}$ C.',
        detail: 'The electron is an elementary particle carrying a small constant negative charge; the proton carries equal positive charge and the neutron none. The proton count fixes which element an atom belongs to, but electrons can be added or removed without changing that classification — only disturbing the electrical balance. A charged atom is an **ion**, and a body of ionized atoms is electrically charged. Oppositely charged bodies attract; like charges repel.',
      },
      {
        term: 'Conventional current versus electron flow',
        kind: 'notation',
        statement: 'Current is conventionally said to flow from a point of **high potential (positive) to low potential (negative)** — but electrons, being negative, physically move in the opposite direction. The word “current” in this text always means conventional current.',
        detail: 'The convention predates the discovery of the electron’s sign and is now universal. The transfer of electrons proceeds readily in media whose atoms release them easily — copper, aluminium, silver — which are called conductors; materials that do not permit electron flow (porcelain, nylon, rubber) are insulators; semiconductors belong to neither family. Nilsson adds the algebraic equivalence: positive charge flowing one way is identical, in every circuit equation, to negative charge flowing the other way.',
      },
      {
        term: 'Current flow needs a closed circuit and an e.m.f.',
        kind: 'law',
        statement: 'Continuous current requires: (1) a **complete circuit** around which electrons may move — if they cannot return to the starting point they will congregate and flow ceases; and (2) a driving influence from the source, the **electromotive force**, giving each charge the energy to go round once more.',
        detail: 'The current is the rate of flow of charge through a section of the circuit. Nilsson formalizes this with the definition of current as $$i = \\frac{dq}{dt}.$$ Although current is made of enormous numbers of discrete electrons, we treat it as a smoothly flowing continuous variable — one smoothly flowing entity rather than individuals. Language note: “current” is used both for the flow itself and for its rate; the ambiguity is universal and rarely causes trouble.',
      },
      {
        term: 'The ideal basic circuit element',
        kind: 'definition',
        statement: 'An ideal basic circuit element has three attributes: it has **only two terminals**, it is **described mathematically in terms of current and/or voltage**, and it **cannot be subdivided** into other elements.',
        detail: '“Ideal” means it does not exist as a realizable physical component — ideal elements are connected to model actual devices; “basic” means it is a building block that cannot itself be modelled by anything simpler. Nilsson draws it as a blank box with a voltage polarity (+/−) and a current reference arrow. Assigning the reference polarity and direction is entirely arbitrary, but once chosen, every subsequent equation must agree with the references.',
      },
    ],
    examples: [
      {
        title: 'Accumulating charge at a terminal',
        problem: 'No charge exists at the left terminal of an element for $t < 0$; at $t = 0$ a 5 A current begins to flow into that terminal. Derive the accumulated charge and evaluate it at 10 s. (Nilsson Example 1.2)',
        steps: [
          { label: 'Step 1: Start from the definition', text: 'Current is the rate of charge flow, so charge is its integral: $q(t) = \\int_0^t i(x)\\,dx$.' },
          { label: 'Step 2: Insert the constant current', text: 'With $i = 5$ A: $q(t) = \\int_0^t 5\\,dx = 5x \\big|_0^t = 5t$ coulombs for $t > 0$.' },
          { label: 'Step 3: Evaluate at 10 s', text: '$q(10) = 5 \\times 10 = 50$ C has accumulated at the left terminal.' },
          { label: 'Step 4: Interpret', text: 'Five amperes means five coulombs per second — the definition of the ampere as a base unit in action, and the reason a coulomb is simply an ampere second.' },
        ],
        result: 'Charge grows linearly, $q(t) = 5t$ C, reaching 50 C at $t = 10$ s.',
      },
      {
        title: 'Counting electrons in a microampere current',
        problem: 'In electronic circuits it is not unusual to encounter currents in the microampere range. Assume a 75 µA current due to the flow of electrons: what is the average number of electrons per second that flow past a fixed reference cross section perpendicular to the direction of flow? (Nilsson Assessment Problem 1.4)',
        steps: [
          { label: 'Step 1: Current as charge per second', text: 'A current of 75 µA is a flow of $75 \\times 10^{-6}$ coulombs per second.' },
          { label: 'Step 2: The indivisible unit', text: 'Each electron carries $1.6022 \\times 10^{-19}$ C — charge exists only in integer multiples of this quantum.' },
          { label: 'Step 3: Divide', text: '$75 \\times 10^{-6} / (1.6022 \\times 10^{-19}) \\approx 4.681 \\times 10^{14}$ electrons per second.' },
          { label: 'Step 4: Interpret the crowd', text: 'Even a microamp is an astronomical procession — which is exactly why $i$ can be treated as a continuous variable in every circuit equation that follows.' },
        ],
        result: 'About $4.681 \\times 10^{14}$ electrons per second: charge is quantized in principle, continuous in practice.',
      },
      {
        title: 'Is it a lumped-parameter system?',
        problem: 'United States power systems operate at 60 Hz. Over what physical size may circuit theory be used? Repeat for a communication system whose radio signals propagate at about $10^{9}$ Hz. (Nilsson Section 1.1)',
        steps: [
          { label: 'Step 1: Wavelength of the power signal', text: 'Signals propagate as waves with $\\lambda = c/f = (3 \\times 10^{8})/60 = 5 \\times 10^{6}$ m.' },
          { label: 'Step 2: Apply the rule of one-tenth', text: 'A system is lumped if its largest dimension is below $\\lambda/10 = 5 \\times 10^{5}$ m — roughly 310 miles, which covers any regional power grid comfortably.' },
          { label: 'Step 3: The radio case', text: 'At $10^{9}$ Hz the wavelength shrinks to $0.3$ m, so the one-tenth rule demands a system smaller than 3 cm.' },
          { label: 'Step 4: Conclusion', text: 'A phone-sized radio circuit is marginal and a 30 cm antenna is emphatically not lumped — field theory takes over whenever dimensions approach a wavelength.' },
        ],
        result: 'Power systems are lumped up to about $5 \\times 10^{5}$ m; a $10^{9}$ Hz communication system only up to 3 cm — a factor of $10^{7}$ difference in permissible size from a factor of $1.7 \\times 10^{7}$ in frequency.',
      },
    ],
    keyTakeaways: [
      'An electrical system has four parts — source, transmission system, control apparatus and load — and its diagrams (IEC 617 symbols) read left to right in the direction of energy flow.',
      'Circuit theory rests on three assumptions: instantaneous (lumped) effects, zero net charge on every component, and no magnetic coupling between components.',
      'The rule of one-tenth bounds the lumped approximation: system dimension below $\\lambda/10$, with $\\lambda = c/f$.',
      'Charge is bipolar, quantized in units of $1.6022 \\times 10^{-19}$ C, and carried between conductors by freely moving electrons.',
      'Conventional current flows positive to negative; electrons move the opposite way, and the two descriptions are algebraically equivalent.',
      'Sustained current demands a closed conducting loop and a source e.m.f.; current itself is $i = dq/dt$, the rate of charge flow.',
      'The ideal basic circuit element has two terminals, is described by its terminal voltage and current, and cannot be subdivided.',
    ],
    quiz: [
      {
        q: 'Which of these is NOT one of the three assumptions that permit circuit theory to replace electromagnetic field theory?',
        options: ['Electrical effects happen instantaneously throughout the system', 'The net charge on every component is always zero', 'There is no magnetic coupling between components', 'Every component obeys Ohm’s law'],
        answer: 3,
        explanation: 'The three assumptions are lumped behaviour, zero net component charge and no inter-component magnetic coupling. Ohm’s law is a property of one particular element (the resistor, Section 2.1), not a foundation of circuit theory.',
      },
      {
        q: 'A system carries 60 Hz power signals. Using the rule of one-tenth, its largest physical dimension should stay below about:',
        options: ['310 m', '310 miles', '3 cm', '0.3 mm'],
        answer: 1,
        explanation: 'At 60 Hz, $\\lambda = 3 \\times 10^{8}/60 = 5 \\times 10^{6}$ m, so one-tenth of a wavelength is $5 \\times 10^{5}$ m — approximately 310 miles, comfortably larger than any practical power system.',
      },
      {
        q: 'Electrons move through a copper wire from terminal B to terminal A. The conventional current is said to flow:',
        options: ['From B to A, with the electrons', 'From A to B, opposite to the electrons', 'In whichever direction the arrow on the diagram points, regardless of physics', 'There is no current, only electron flow'],
        answer: 1,
        explanation: 'Conventional current was defined from positive to negative long before the electron’s sign was known. Negative electrons drifting from B to A is algebraically identical to positive current flowing from A to B, so all circuit equations work unchanged.',
      },
      {
        q: 'Which set lists the four constituent parts of Hughes’s basic electrical system?',
        options: ['Resistor, capacitor, inductor and diode', 'Source, transmission system, control apparatus and load', 'Voltage, current, power and energy', 'Producer, consumer, meter and tariff'],
        answer: 1,
        explanation: 'Every electrical system Hughes draws contains a source providing energy, a load absorbing it, a transmission system conducting it, and control apparatus — at its simplest a switch — governing the flow.',
      },
      {
        q: 'An ideal basic circuit element is one that:',
        options: ['Exists physically and can be purchased with tolerance ratings', 'Has two terminals, is described mathematically by voltage and/or current, and cannot be subdivided', 'Dissipates no power under any circumstance', 'Works at any frequency including optical wavelengths'],
        answer: 1,
        explanation: 'Nilsson’s three attributes exactly. “Ideal” means not realizable as a physical component; “basic” means it cannot be reduced to other elements — ideal elements are the building blocks from which circuit models of real devices are constructed.',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.3
  {
    sectionId: 'ee-e-basic-electrical-s11',
    depth: [
      {
        tier: 'masters',
        title: 'Real sources: fields, Thévenin and matching',
        blocks: [
          {
            kind: 'derivation',
            heading: 'E.m.f. from the field view',
            body: 'Inside a battery, charge is not moved by the electrostatic field but against it; the work is done by chemistry, modelled as a non-electrostatic force per unit charge $\\mathbf{E}_s$ concentrated in the electrolyte. Write the total force field on a charge as $\\mathbf{E}_{es} + \\mathbf{E}_s$. Open-circuited, separated charge builds $\\mathbf{E}_{es}$ until it cancels $\\mathbf{E}_s$ everywhere inside the cell: no current flows, and the terminal voltage equals the integral of $\\mathbf{E}_{es}$ from terminal to terminal, which equals $$E = \\oint \\mathbf{E}_s \\cdot d\\mathbf{l},$$ the e.m.f. — this section’s energy-converted-per-unit-charge definition, now backed by a field integral. Close the loop, and the same circulation must also push current through the electrolyte’s own resistance, which is why the terminal voltage sags to $V = E - IR_s$. The e.m.f. belongs to the chemistry; the sag is the lumped summary of fields inside the cell.',
          },
          {
            kind: 'para',
            body: 'A real source reveals itself only at its terminals, and under linear operation every terminal characteristic is a straight line, $v = V_{oc} - R_T i$. The intercept is the **open-circuit voltage**; the slope is the **internal resistance**, obtainable as $R_T = V_{oc}/I_{sc}$ from a deliberate short circuit or from the sag under a known load. That line is the **Thévenin equivalent** — an ideal source $V_{oc}$ in series with $R_T$ — and rewriting it as $i = V_{oc}/R_T - v/R_T$ exhibits the **Norton equivalent**, an ideal current source $I_{sc} = V_{oc}/R_T$ in parallel with the same resistance. Thévenin’s theorem in full — that any linear one-port reduces to this form — waits for the network theorems of later chapters, but the terminal view is already complete engineering practice: a data sheet quotes $V_{oc}$ and $R_T$ and is silent about the electrochemistry inside.',
          },
          {
            kind: 'example',
            heading: 'Where internal resistance lives',
            body: 'A lead–acid car battery must crank several hundred amperes into a starter motor. Measuring the terminal voltage during cranking: $12.6\\ \\text{V}$ at rest, $9.5\\ \\text{V}$ at $450\\ \\text{A}$, so $$R_s = \\frac{12.6 - 9.5}{450} \\approx 6.9\\ \\text{m}\\Omega.$$ Where does it live? Conduction in the electrolyte is ionic, with carrier densities and mobilities orders of magnitude below copper’s — Drude’s $\\sigma = ne\\mu$ again — so a few millimetres of sulphuric acid contribute milliohms in series with interfacial reactions and grid metal. Plate area appears in parallel: doubling the plates halves $R_s$, which is why cranking batteries have many thin plates, and why a half-discharged or cold battery (sluggish ions, higher resistivity) sags so far that the starter barely turns over on a winter morning.',
          },
          {
            kind: 'derivation',
            heading: 'Maximum power transfer',
            body: 'Let a source $E$ with internal resistance $R_s$ feed a load $R_L$: $$P_L = I^{2}R_L = \\frac{E^{2}R_L}{(R_s + R_L)^{2}}.$$ Differentiate with respect to the load: $$\\frac{dP_L}{dR_L} = \\frac{E^{2}(R_s - R_L)}{(R_s + R_L)^{3}},$$ which vanishes at $R_L = R_s$ — the **matched** load — and there delivers $$P_{max} = \\frac{E^{2}}{4R_s}.$$ But the efficiency at the match is $\\eta = R_L/(R_s+R_L) = 1/2$: half of the source’s production is dissipated inside the source itself. Matching is therefore a **signal-transfer** doctrine — maximum power into the load, at any cost — and never a power-engineering one: the grid delivers at $R_L \\gg R_s$ precisely because its business is energy, and an efficiently-run generator is a cool one.',
          },
          {
            kind: 'example',
            heading: 'Match for signal, mismatch for efficiency',
            body: 'A 12 V source with $R_s = 0.5\\ \\Omega$ (a tired battery) illustrates both doctrines. Matched, $R_L = 0.5\\ \\Omega$ draws $I = 12\\ \\text{A}$ and receives $P = I^{2}R_L = 72\\ \\text{W}$ — with another 72 W dissipated inside the battery, which will not tolerate it for long, and 12 A through every wire. Choose instead $R_L = 11.5\\ \\Omega$: the current falls to $1\\ \\text{A}$, the load receives $11.5\\ \\text{W}$ at $\\eta = 11.5/12 \\approx 96$ per cent, and the battery loses only $0.5\\ \\text{W}$ internally. Six times less power is delivered, over a hundred times less is wasted — the right choice depends on whether the load wants energy, or information. A radio antenna and a microphone want every available fraction of a microwatt, and the research tier below shows why matching then pays.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Noise: the fluctuation side of dissipation',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Johnson–Nyquist thermal noise',
            body: 'Johnson measured in 1927 that any resistor generates a fluctuating voltage; Nyquist derived it in 1928 by thermodynamics. Connect two equal resistors $R$ by a lossless, matched transmission line: its standing-wave modes are spaced $v/2\\ell$ in frequency, and classical equipartition gives each mode energy $k_BT$, half electric and half magnetic. Matched terminations reflect nothing, so in equilibrium the power a resistor emits into the line per mode must equal what it absorbs — which pins the **available noise power** at $k_BT$ per hertz, independent of $R$. Delivering $k_BT\\,\\Delta f$ into a matched load from an open-circuit source then requires $$\\langle v_n^{2}\\rangle = 4k_BTR\\,\\Delta f.$$ This is the classical limit of the **fluctuation–dissipation theorem**: whatever dissipates, fluctuates — the same $\\tau$ that gave Drude’s $\\sigma = ne^{2}\\tau/m$ also agitates the electrons. The quantum correction replaces $k_BT$ per mode by $hf/(e^{hf/k_BT} - 1)$, negligible below terahertz at room temperature.',
          },
          {
            kind: 'remark',
            body: 'Section 1.2 counted a 75 µA current as $4.7 \\times 10^{14}$ electrons per second; that discreteness returns as **shot noise**. Charges crossing a barrier arrive as independent Poisson events, so the count variance equals the mean, and converting that into current fluctuations gives Schottky’s 1918 formula, $$\\langle i_n^{2}\\rangle = 2qI\\,\\Delta f.$$ It grows with bandwidth, and it appears whenever current is forced across a junction — a diode, a vacuum tube, a photodiode counting photons one by one. In an ordinary metal resistor the arrivals are strongly anticorrelated (the long-range Coulomb field forbids pile-ups) and shot noise is suppressed, leaving thermal noise in command. Telling a $2qI$ signature from the $4k_BTg$ of thermal noise remains a standard diagnostic for identifying the conduction channel in modern devices.',
          },
          {
            kind: 'application',
            heading: 'How close are ADCs to the floor?',
            body: 'A 1 kΩ source at room temperature presents $\\sqrt{4k_BTR} \\approx 4\\ \\text{nV}/\\sqrt{\\text{Hz}}$, which integrates over a 20 kHz audio band to about $0.6\\ \\mu\\text{V}$ rms of irreducible signal. Sampled systems pay a second toll, **kT/C noise**: a capacitor $C$ charged through any resistance whatever ends with rms voltage $\\sqrt{k_BT/C}$, so a 1 pF sampling capacitor already carries $64\\ \\mu\\text{V}$ before the amplifier says a word. The best 24-bit delta-sigma converters now specify input-referred noise within a few dB of the thermal floor of their source impedances; the designer’s remaining levers are lower source resistance, narrower bandwidth, or cryogenics — and below the classical floor live only quantum-limited sensors such as SQUIDs and photon counters. Thermal noise is where circuit theory meets statistical mechanics: the ideal noiseless resistor of Chapter 2 is not merely ideal, it is thermodynamically impossible.',
          },
        ],
      },
    ],
    readingTime: 7,
    intro: 'Two quantities govern every circuit: the electromotive force that pushes charge round a loop and the potential difference that appears wherever energy is handed over. They are measured in the same unit — the volt — yet they play entirely different roles, and confusing them is the classic beginner’s error. This section pins down both, together with the ampere, the coulomb and the energy a battery actually delivers.',
    objectives: [
      'Distinguish electromotive force from potential difference',
      'Read the arrow and polarity conventions on circuit diagrams',
      'Define the volt, the ampere and the coulomb, and relate them through $V = P/I = W/Q$',
      'List the principal sources of e.m.f.',
      'Compute the energy delivered by a source from voltage, current and time',
    ],
    concepts: [
      {
        term: 'Electromotive force (e.m.f.)',
        kind: 'definition',
        statement: 'The **e.m.f.** is the driving influence that causes a current to flow; it is not a force, but the **energy converted during the passing of a unit charge through the source**. Symbol $E$, unit volt. An e.m.f. is always active — it tends to produce current in a circuit.',
        detail: 'Each time charge passes through the source, more energy is provided to permit it to continue round once more; since the current flow is continuous, so is the process. Crucially, e.m.f. is always connected with energy **conversion** — chemical to electrical in a battery, mechanical to electrical in a generator.',
      },
      {
        term: 'Potential difference (p.d.)',
        kind: 'definition',
        statement: 'The **potential difference** is the energy transferred due to the passage of unit charge **between two points in a circuit**; across the load it is the change in energy level between the terminals, measured in volts — hence the name **volt drop**.',
        detail: 'If the transmission system is ideal (transmits all energy without loss), the p.d. across the load equals the source e.m.f. Unlike the e.m.f., a p.d. may be passive — with no tendency to create a current — or active. The term “voltage” now serves as a synonym for p.d. irrespective of the unit actually used, from 400 kV on transmission lines down to 5 µV between two points in an electronic circuit.',
      },
      {
        term: 'Arrow conventions on circuit diagrams',
        kind: 'notation',
        statement: 'An e.m.f. or p.d. is indicated by an arrow whose **head points towards the point of high (or assumed higher) potential** — never an arrowhead at each end as on a dimension line.',
        detail: 'Current flow leaves the source at the positive terminal, moving in the same direction as the source e.m.f. arrow; it enters the load at the positive terminal, so it runs **against** the load p.d. arrow. A separate arrowhead on the transmission system indicates the direction of conventional current. A battery symbol signals direct current; a circle is the general symbol for any d.c. source.',
      },
      {
        term: 'The volt',
        kind: 'definition',
        statement: 'The volt is the potential difference between two points of a conducting wire carrying 1 A when the power dissipated between those points is 1 W. Hence $$V = \\frac{P}{I} \\quad \\text{and} \\quad V = \\frac{W}{Q}$$ — the p.d. equals energy per unit charge.',
        detail: 'Nilsson’s differential form is $v = dw/dq$ — the formal statement of the volt as a joule per coulomb. In Hughes’s Example 2.2, a circuit delivering 20 W at 10 A has $V = 20/10 = 2$ V, so each coulomb carries $W = VQ = 2$ J.',
      },
      {
        term: 'Charge separation and the electric force',
        kind: 'insight',
        statement: 'In circuit theory, **the separation of charge creates an electric force (voltage)**, and the motion of charge creates an electric fluid (current). Whenever positive and negative charges are separated, energy is expended — voltage is the energy per unit charge created by that separation.',
        detail: 'This is why two terminal variables are enough: every electrical effect a circuit model needs is attributed either to separated charge (voltage) or to charge in motion (current). The bipolar nature of charge is what forces the polarity references of Section 1.2 onto both variables before any equation can be written.',
      },
      {
        term: 'The ampere and the coulomb',
        kind: 'definition',
        statement: 'The **ampere** is that current which, maintained in two straight parallel conductors of infinite length and negligible circular cross-section placed 1 m apart in vacuum, produces a force of $2 \\times 10^{-7}$ N per metre of length — conductors attracting when the currents run the same way, repelling when opposite.',
        detail: 'Hughes remarks that the definition is “outstanding for its complexity” but buys conveniently sized units; the force can be measured with an elaborately constructed balance in which the force between fixed and moving coils is weighed against gravity. The **coulomb** then follows: the quantity of electricity passing a point when 1 A flows for 1 s, so $Q = It$ and $1$ ampere hour $= 3600$ coulombs — the unit in which batteries hold charge.',
      },
      {
        term: 'Sources of e.m.f.',
        kind: 'insight',
        statement: 'The principal sources are: (1) electrodes of dissimilar materials immersed in an electrolyte — **primary and secondary cells**, i.e. batteries; (2) relative movement of a conductor and magnetic flux — **electric generators**; and (3) a difference of temperature between junctions of dissimilar metals — **thermo-junctions**.',
        detail: 'Each converts a different primary energy into electrical energy: chemical, mechanical and thermal respectively. The generator variant can equally be expressed as the variation of magnetic flux linked with a coil, a view developed later for machines.',
      },
      {
        term: 'Direct current',
        kind: 'notation',
        statement: 'A source delivering **direct current** supplies current that flows in one direction only; the battery symbol in Hughes’s Fig. 2.6 and the circle symbol of Fig. 2.7 both denote d.c. sources.',
        detail: 'Nilsson’s history of the abbreviation: “dc” literally stands for direct current, but because a direct current was defined as one produced by a constant voltage, a constant voltage became known as a dc voltage. The use of dc for “constant” stuck, and dc current and dc voltage now universally mean constant current and constant voltage — the assumption behind every circuit in Chapter 2.',
      },
    ],
    examples: [
      {
        title: 'From charge to the energy of a coulomb',
        problem: 'If a charge of 25 C passes a given point in 125 ms, determine the current. Then, in a circuit delivering energy at 20 W with a current of 10 A, determine the voltage and the energy carried by each coulomb. (Hughes Examples 2.1 and 2.2)',
        steps: [
          { label: 'Step 1: Current from charge and time', text: 'From $Q = It$: $I = Q/t = 25 / (125 \\times 10^{-3}) = 200$ A.' },
          { label: 'Step 2: Voltage from power and current', text: 'From $V = P/I$: $V = 20/10 = 2$ V.' },
          { label: 'Step 3: Energy per coulomb', text: 'From $V = W/Q$: each coulomb carries $W = VQ = 2 \\times 1 = 2$ J.' },
          { label: 'Step 4: Interpret the pair', text: 'The 200 A pulse and the 2 V delivery are the same bookkeeping seen from two directions: current counts charge per second, voltage counts joules per coulomb, and their product is power.' },
        ],
        result: 'The current is 200 A; the circuit runs at 2 V and each coulomb delivers 2 J to the load.',
      },
      {
        title: 'How much energy is in a flashlight battery?',
        problem: 'The manufacturer of a 6 V dry-cell battery says it will deliver 15 mA for 60 continuous hours, during which the voltage falls linearly from 6 V to 4 V. How much energy does the battery deliver? (Nilsson Assessment Problem 1.6)',
        steps: [
          { label: 'Step 1: Model the falling voltage', text: 'A linear fall from 6 V to 4 V gives an average terminal voltage of $(6 + 4)/2 = 5$ V over the interval.' },
          { label: 'Step 2: Fix the time', text: 'The discharge lasts $60 \\times 3600 = 216\\,000$ s at a constant $I = 15$ mA.' },
          { label: 'Step 3: Integrate power over time', text: 'With constant current, $W = V_{avg}\\,I\\,t = 5 \\times 0.015 \\times 216\\,000 = 16\\,200$ J.' },
          { label: 'Step 4: Sanity-check the size', text: '16.2 kJ from a handheld cell is modest — about 4.5 milliwatt-hours per gram of convenience, which is why primary cells are an expensive way to buy energy but a cheap way to buy portability.' },
        ],
        result: 'The battery delivers 16.2 kJ over its 60 h life.',
      },
      {
        title: 'Charge and energy bookkeeping in a resistive load',
        problem: 'A p.d. of 12 V is applied to a 7.5 Ω resistor for a period of 5 s. Calculate the electric charge transferred in this time and the energy dissipated. (Hughes Exercise 2.16)',
        steps: [
          { label: 'Step 1: Current from Ohm’s law', text: '$I = V/R = 12/7.5 = 1.6$ A flows for the full 5 s.' },
          { label: 'Step 2: Charge transferred', text: '$Q = It = 1.6 \\times 5 = 8$ C passes through the resistor.' },
          { label: 'Step 3: Energy via the volt', text: 'Since each coulomb carries 12 J at 12 V: $W = VQ = 12 \\times 8 = 96$ J.' },
          { label: 'Step 4: Cross-check via power', text: '$P = VI = 12 \\times 1.6 = 19.2$ W, so $W = Pt = 19.2 \\times 5 = 96$ J — the same 96 J arrives by either bookkeeping route.' },
        ],
        result: '8 C and 96 J: the identities $Q = It$ and $W = VQ$ chain a resistor’s behaviour from current to charge to energy.',
      },
    ],
    keyTakeaways: [
      'An e.m.f. converts energy into the circuit per unit charge passing through the source; a p.d. transfers that energy to the rest of the circuit per unit charge between two points.',
      'Both are measured in volts; an e.m.f. is always active, while a p.d. can be passive or active.',
      'Diagram arrows for e.m.f. and p.d. point to the high-potential end; the current arrow on the wiring shows the direction of conventional flow, which leaves the source’s positive terminal.',
      'The volt is defined through $V = P/I$ and equals energy per unit charge, $V = W/Q$ — Nilsson’s $v = dw/dq$.',
      'The ampere is an SI base unit defined by the $2 \\times 10^{-7}$ N/m force between parallel conductors; the coulomb is an ampere second and $Q = It$.',
      'Batteries are rated in ampere hours: $1$ A h $= 3600$ C.',
      'Batteries, generators and thermo-junctions are the three principal sources of e.m.f., converting chemical, mechanical and thermal energy respectively.',
    ],
    quiz: [
      {
        q: 'The essential distinction between an e.m.f. and a potential difference is that:',
        options: ['An e.m.f. is measured in volts but a p.d. is measured in watts', 'An e.m.f. is associated with energy conversion in the source, while a p.d. is the energy transferred per unit charge between two points of the circuit', 'A p.d. can drive current but an e.m.f. cannot', 'They are two names for exactly the same thing'],
        answer: 1,
        explanation: 'The e.m.f. represents the energy expended passing a unit charge through the source and is always active; the p.d. is the energy handed over per unit charge between any two points and may be passive. With an ideal transmission system, the load p.d. equals the source e.m.f.',
      },
      {
        q: 'On a circuit diagram, the arrow representing an e.m.f. or p.d. is drawn:',
        options: ['With arrowheads at both ends, like a dimension line', 'Pointing towards the point of high (or assumed higher) potential', 'Pointing in the direction of electron flow', 'Always vertically upwards'],
        answer: 1,
        explanation: 'The single arrowhead points towards the high-potential end. The current leaves the source at its positive terminal — along the e.m.f. arrow — and enters the load at its positive terminal, against the load’s p.d. arrow.',
      },
      {
        q: 'A circuit delivers 20 W while carrying 10 A. The energy transferred by each coulomb of charge is:',
        options: ['0.5 J', '2 J', '200 J', 'Depends on how long the circuit runs'],
        answer: 1,
        explanation: '$V = P/I = 20/10 = 2$ V, and since a volt is a joule per coulomb, each coulomb carries $W = VQ = 2 \\times 1 = 2$ J — Hughes’s Example 2.2.',
      },
      {
        q: 'Which of the following is NOT one of Hughes’s principal sources of e.m.f.?',
        options: ['Dissimilar electrodes immersed in an electrolyte', 'Relative movement of a conductor and magnetic flux', 'Difference of temperature between junctions of dissimilar metals', 'A charged capacitor discharging through a resistor'],
        answer: 3,
        explanation: 'Batteries (chemical), generators (mechanical) and thermo-junctions (thermal) are the three principal sources. A discharging capacitor stores separated charge but converts no primary energy, so it is not counted among the principal sources of e.m.f.',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.4
  {
    sectionId: 'ee-e-basic-electrical-s12',
    depth: [
      {
        tier: 'masters',
        title: 'Power in the field and Tellegen’s bookkeeping',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Power density in the field view',
            body: 'Take the uniform conducting bar behind the Drude discussion — length $\\ell$, cross-section $A$, carrying current density $\\mathbf{J}$ in a field $\\mathbf{E}$. Its terminal quantities are $V = E\\ell$ and $I = JA$, so the absorbed power is $$P = VI = (E\\ell)(JA) = (\\mathbf{J}\\cdot\\mathbf{E})\\,\\ell A,$$ and dividing by the volume $\\ell A$ leaves the **local power density** $$p = \\mathbf{J}\\cdot\\mathbf{E},$$ in watts per cubic metre. This is Joule heating as a field quantity — the honest microscopic statement of what a resistor does: the field does work on the charges at rate $\\mathbf{J}\\cdot\\mathbf{E}$, and collisions instantly randomize that work into heat. Design follows the formula directly: a fuse opens where $\\mathbf{J}$ concentrates in its necked section, machine windings are sized by the heat they can reject, and $R = \\rho\\ell/A$ is this very integral evaluated for a uniform bar.',
          },
          {
            kind: 'theorem',
            heading: 'Tellegen’s theorem',
            body: 'In any lumped network — whatever its branches contain, linear or nonlinear, active or passive, time-varying or not — let the branch voltages $v_1, \\ldots, v_b$ satisfy KVL and the branch currents $i_1, \\ldots, i_b$ satisfy KCL, all with passive-sign references. Then at every instant $$\\sum_{k=1}^{b} v_k i_k = 0,$$ the algebraic sum of branch powers vanishes. The remarkable clause is what the hypothesis omits: no element law, no linearity, no mention of what the branches are made of — only topology and the two Kirchhoff laws enter. A network of sealed black boxes obeys it as exactly as a network of resistors. It is the deepest theorem of pure circuit theory, and the power-balance checksum of this section is its everyday face.',
          },
          {
            kind: 'proof',
            body: 'Number the nodes $1, \\ldots, n$ and branches $1, \\ldots, b$ of the network’s connected graph, and form the reduced incidence matrix $A \\in \\mathbb{R}^{(n-1)\\times b}$ with $A_{rk} = +1$ if branch $k$ leaves node $r$, $-1$ if it enters, and $0$ otherwise. **KCL** is precisely the row-wise statement $A\\mathbf{i} = \\mathbf{0}$: each row of $A$ sums the signed currents at one node. **KVL** is the statement that branch voltages are differences of node potentials — there exists a vector $\\mathbf{e}$ with $\\mathbf{v} = A^{\\mathsf{T}}\\mathbf{e}$. Then $$\\sum_{k} v_k i_k = \\mathbf{v}^{\\mathsf{T}}\\mathbf{i} = \\left(A^{\\mathsf{T}}\\mathbf{e}\\right)^{\\mathsf{T}}\\mathbf{i} = \\mathbf{e}^{\\mathsf{T}}\\left(A\\mathbf{i}\\right) = \\mathbf{e}^{\\mathsf{T}}\\mathbf{0} = 0,$$ using nothing deeper than $(XY)^{\\mathsf{T}} = Y^{\\mathsf{T}}X^{\\mathsf{T}}$. Kirchhoff supplies the algebra; the transpose does the physics.',
          },
          {
            kind: 'remark',
            body: 'Three consequences reward the generality. First, Tellegen holds for **nonlinear and time-varying** elements — diode networks, switching power converters — because no hypothesis touches the branch relations; the power-balance checksum therefore works even where Ohm’s law does not. Second, since only the incidence matrix entered the proof, the voltages and currents may come from **two different networks sharing the same graph**: $\\sum_k v_k i_k^{\\prime} = 0$ still holds, the basis of adjoint sensitivity analysis, which tells a designer how every output responds to every element’s drift for the cost of one extra simulation. Third, it is the natural oracle for **SPICE**: a transient solution whose branch powers fail to sum to zero is reporting numerical error, not new physics — which is exactly how this section localized the 20 W bookkeeping error to a single reversed current.',
          },
          {
            kind: 'para',
            body: 'Does a solved circuit have one solution or many? The two-resistor case gives the paradigm: a source line $v = E - R_s i$ and a load characteristic $i = v/R_L$ are both monotone, so they cross exactly once — one operating point. The general linear resistive network packages the same argument: nodal analysis assembles $G\\mathbf{e} = \\mathbf{i}_s$ with $G = A^{\\mathsf{T}}\\operatorname{diag}(g)A$, **symmetric positive definite** whenever every conductance is positive, so the solution exists, is unique, and is $\\mathbf{e} = G^{-1}\\mathbf{i}_s$. Nonlinear elements with strictly increasing characteristics inherit uniqueness — a monotone curve meets any load line exactly once (Duffin’s theorem). But let the characteristic turn back — a tunnel diode’s N-shaped curve, a gas-discharge lamp’s negative resistance — and **multiple operating points** appear. Analysis then needs fixed-point iteration, which may cycle, or damped Newton methods: the daily convergence business of every circuit simulator.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Simulation, memory and the single electron',
        blocks: [
          {
            kind: 'remark',
            body: 'This chapter’s flashlight — seven unknowns awaiting Kirchhoff and Ohm — is **modified nodal analysis** in miniature: write node potentials as unknowns, and for elements that do not fit nodal form (voltage sources, later inductors) append their branch currents as extra unknowns. A million-branch integrated circuit yields a matrix that is overwhelmingly zeros, so **sparse LU** factorization with Markowitz pivoting is the production engine — matrix-ordering heuristics decide runtimes as much as physics does. The research pain is dynamics: transient analysis integrates a **differential–algebraic equation**, and certain topologies — loops of voltage sources and inductors, cutsets of current sources and capacitors — raise its **differential index** to two. Hidden algebraic constraints then force numerical differentiation, the trapezoidal rule rings on fast switching edges, and opening an inductive circuit can stall convergence entirely. Circuit simulation stays an active numerical-analysis field precisely because the DAE index moves underneath the simulator when the circuit is redesigned.',
          },
          {
            kind: 'open',
            heading: 'The missing fourth element',
            body: 'Chua observed in 1971 that circuit theory rests on four fundamental variables — $v$, $i$, charge $q$ with $i = dq/dt$, and flux $\\phi$ with $v = d\\phi/dt$ — and that of the six pairwise relations, five were already spoken for: the resistor ties $v$ to $i$, the capacitor $q$ to $v$, the inductor $\\phi$ to $i$. The remaining $\\phi$–$q$ relation defined the **memristor**, a resistor that remembers. In 2008 HP Labs reported one in titanium dioxide: oxygen vacancies drift under bias, so resistance follows the charge history — pinched hysteresis loops, conductance graded one pulse at a time, an almost literal synapse. The open questions are live: whether a strictly ideal 1971 memristor is physically realizable or only its memristive-system approximations; whether crossbar arrays of them can carry **neuromorphic** computing past the memory-bandwidth wall of von Neumann machines; and what the 2008 device truly was — the debate over that paper is itself a running literature.',
          },
          {
            kind: 'open',
            heading: 'One electron at a time',
            body: 'Shrink a device until its total capacitance $C$ is so small that one extra electron costs $E_C = e^{2}/2C$ — more than thermal agitation can pay — and current no longer flows smoothly. The **Coulomb blockade** holds the island charge fixed until a gate or bias supplies the entrance fee, so electrons cross a quantum dot strictly one at a time: the **single-electron transistor**. Room-temperature operation demands $E_C \\gg k_BT$, i.e. $C$ below a few attofarads — an island of a few atoms, beyond reliable lithography. The neighbouring route is **molecular electronics**: since Aviram and Ratner’s 1974 single-molecule rectifier proposal, individual molecules have been wired as switches and diodes; a single atomic channel bottoms out near the quantum resistance $h/2e^{2} \\approx 12.9\\ \\text{k}\\Omega$ met in Section 1.2’s research tier, and the unsolved problem is variability — how to fabricate $10^{12}$ chemically identical wires, contacts and all, when chemistry itself sets the tolerances.',
          },
        ],
      },
    ],
    readingTime: 10,
    intro: 'Voltage and current describe a circuit; power and energy decide whether it survives. Every practical device has a power limit, every source a capacity, and the fastest way to check a circuit calculation is to verify that the power balances — total delivered equals total absorbed. This section develops $p = vi$ with its sign convention, the ideal sources that feed circuits, the efficiency of energy conversion, and the art of building a circuit model of a physical system, using Nilsson’s flashlight and home-power examples.',
    objectives: [
      'Derive power from energy and charge: $p = vi$, with the sign fixed by the passive sign convention',
      'Interpret positive and negative power as absorbing and delivering',
      'Check a solved circuit by balancing supplied power against absorbed power',
      'State the defining constraint of ideal independent and dependent sources',
      'Construct a circuit model from a physical device and name the modelling guidelines',
    ],
    concepts: [
      {
        term: 'Power as the product of voltage and current',
        kind: 'law',
        statement: 'Power is the time rate of expending or absorbing energy, $p = dw/dt$. Chaining the definitions of voltage and current gives the **power equation** $$p = vi,$$ the power in watts associated with a basic circuit element.',
        detail: 'The derivation is a one-line chain rule: $p = \\frac{dw}{dt} = \\frac{dw}{dq}\\cdot\\frac{dq}{dt} = vi$. A water pump rated 75 kW delivers more litres per second than one rated 7.5 kW; similarly, the useful output of an electrical system — sound from a speaker, light from a lamp — is naturally quoted in power even though the analysis variables are $v$ and $i$.',
      },
      {
        term: 'The passive sign convention',
        kind: 'law',
        statement: 'Whenever the reference direction for the current in an element is in the direction of the reference **voltage drop** across the element, use a positive sign in any expression relating voltage to current ($p = vi$); otherwise use a negative sign ($p = -vi$).',
        detail: 'The convention is a bookkeeping rule applied after the arbitrary references are chosen — not a physical law, and not a function of the element type. Algebraically, positive charge flowing one way equals negative charge flowing the other, so any consistent reference set yields the same physical answer, as Nilsson’s Example 1.3 demonstrates with two classmates computing the same 40 W from different reference choices.',
      },
      {
        term: 'Interpreting the algebraic sign of power',
        kind: 'method',
        statement: 'If $p > 0$, power is being **delivered to** the circuit element (absorbed by it); if $p < 0$, power is being **extracted from** the element (supplied by it). Positive charges lose energy moving through a voltage drop and gain it moving through a rise.',
        detail: 'The four reference combinations of Nilsson’s Fig. 1.6 give $p = vi$ twice and $p = -vi$ twice; the computed sign, not the formula, decides the direction of energy flow. In Hughes’s Example 2.4 a motor outputs 20 kW at 80 per cent efficiency from a 200 V supply: the input is $P_{in} = 20\\,000/0.8 = 25\\,000$ W, so the motor draws $I = 25\\,000/200 = 125$ A.',
      },
      {
        term: 'Energy from power',
        kind: 'law',
        statement: 'Energy is the time integral of power, $$w(t) = \\int_0^t p(x)\\,dx.$$ For constant $V$, $I$ and $P$: $W = Pt = VIt$, measured in joules (1 J = 1 W s).',
        detail: 'In Nilsson’s Example 1.4 an element carries $v = 10e^{-5000t}$ kV and $i = 20e^{-5000t}$ A: the power is $p = 200\\,000e^{-10\\,000t}$ W, which evaluates to 9.08 W at $t = 1$ ms, and integrates over all time to exactly 20 J — the element’s total energy absorption.',
      },
      {
        term: 'Power balance as a checksum',
        kind: 'theorem',
        statement: 'The linear circuits studied in this library have **no net power**: the algebraic sum of the power associated with all circuit components must be zero. If the total is not zero, there is an error in the calculation.',
        detail: 'This is the standard self-check of circuit analysis — compute the power of every element with the passive sign convention, add, and expect zero. Nilsson’s Practical Perspective (“Balancing Power”) uses a home distribution circuit of eight components in which the sum comes to −20 W, and the error is localized by dividing by two: exactly one component’s current sign is wrong.',
      },
      {
        term: 'Ideal independent and dependent sources',
        kind: 'definition',
        statement: 'An ideal **voltage source** maintains its prescribed terminal voltage regardless of the current through it; an ideal **current source** maintains its current regardless of the voltage across it. **Dependent** sources repeat that behaviour with a value controlled by another circuit voltage or current: $v_s = \\mu v_x$ (V/V), $v_s = \\rho i_x$ (V/A), $i_s = \\alpha v_x$ (A/V), $i_s = \\beta i_x$ (A/A).',
        detail: 'Sources are **active elements** — models of devices capable of generating electric energy — while resistors, inductors and capacitors are passive. Interconnection rules follow from the constraints: two ideal voltage sources in parallel must agree in voltage and polarity (10 V and 10 V is permitted; 10 V and 5 V is not), two current sources in series must agree in current and direction. Constant sources are called dc sources, the historical abbreviation for “direct current” that now simply means constant.',
      },
      {
        term: 'Efficiency of energy conversion',
        kind: 'definition',
        statement: 'The efficiency of a converting device is $$\\eta = \\frac{P_o}{P_{in}},$$ the ratio of output to input power; the input energy consumed to make the device operate appears as loss.',
        detail: 'Hughes’s Example 2.5 makes the accounting concrete for a 200 t train resisting 62.5 N/t over 1 km with motor efficiency 0.87: the tractive work is $W_o = 200 \\times 62.5 \\times 1000 = 12.5 \\times 10^{6}$ J, the electrical input is $W_{in} = 12.5 \\times 10^{6}/0.87 = 14.4 \\times 10^{6}$ J = 4.0 kW h, costing 32 p at 8 p per kW h; travelling at 80 km/h from a 1.5 kV supply then demands $I = 320 \\times 10^{3}/1500 \\approx 214$ A.',
      },
      {
        term: 'Constructing a circuit model: the flashlight',
        kind: 'method',
        statement: 'Nilsson models a flashlight with an **ideal voltage source** $v_s$ (the two dry cells in series), a **lamp resistor** $R_l$, a **connector resistor** $R_1$ (the springy coil), a **case resistor** $R_c$, and a switch that toggles between short circuit (on) and open circuit (off).',
        detail: 'Three modelling guidelines emerge: (1) the electrical behaviour of each physical component is what matters — three very different parts (lamp, coiled wire, metal case) all become resistors; (2) models must include **parasitic** effects such as the unwanted case and coil resistance that drain the cells without useful output; (3) modelling requires approximation — an ideal switch, negligible contact resistance and no internal battery dissipation are all assumptions the model does not check. With $v_s = 3$ V the model has seven unknowns — $i_s, i_1, i_c, i_l, v_1, v_c, v_l$ — which Kirchhoff’s laws and Ohm’s law will pin down in Chapter 2.',
      },
    ],
    examples: [
      {
        title: 'Two reference choices, one physical answer',
        problem: 'A student selects the polarity references of Nilsson’s Fig. 1.6(b) and computes $i = 4$ A and $v = -10$ V. Her classmate selects Fig. 1.6(c) and computes $i = -4$ A and $v = 10$ V. What power does each calculate, and is the element absorbing or supplying? (Nilsson Example 1.3)',
        steps: [
          { label: 'Step 1: Choose the right expression', text: 'References (b) and (c) both place the current reference against the voltage drop, so each student must use $p = -vi$.' },
          { label: 'Step 2: First student', text: '$p = -(-10)(4) = +40$ W — power is delivered to the element, which is absorbing 40 W.' },
          { label: 'Step 3: Second student', text: '$p = -(10)(-4) = +40$ W — the identical conclusion from the mirrored references.' },
          { label: 'Step 4: Moral', text: 'Any of the four reference systems of Fig. 1.6 yields the same result: the passive sign convention generates the correct sign of power regardless of the polarity and direction initially chosen.' },
        ],
        result: 'Both compute $p = +40$ W: the element absorbs 40 W under either reference set.',
      },
      {
        title: 'Power and energy of an exponential transient',
        problem: 'The voltage and current at an element’s terminals are $v = 10e^{-5000t}$ kV and $i = 20e^{-5000t}$ A for $t \\ge 0$ (both zero before). Calculate the power at 1 ms and the total energy delivered. (Nilsson Example 1.4)',
        steps: [
          { label: 'Step 1: Form the power', text: 'The current enters the positive terminal, so $p = vi = (10\\,000e^{-5000t})(20e^{-5000t}) = 200\\,000e^{-10\\,000t}$ W.' },
          { label: 'Step 2: Evaluate at 1 ms', text: '$p(0.001) = 200\\,000e^{-10} = 200\\,000 \\times 45.4 \\times 10^{-6} \\approx 9.08$ W.' },
          { label: 'Step 3: Integrate for energy', text: '$w_{total} = \\int_0^{\\infty} 200\\,000e^{-10\\,000x}dx = 200\\,000/10\\,000 = 20$ J.' },
          { label: 'Step 4: Interpret', text: 'The transient delivers a brief kilowatt-scale burst that decays with a 0.1 ms time constant, yet the bookkeeping integrates to a modest 20 J of energy.' },
        ],
        result: 'Power at 1 ms is about 9.08 W; the total energy delivered over all time is 20 J.',
      },
      {
        title: 'Balancing power in a home distribution circuit',
        problem: 'Nilsson’s model of home power distribution has eight components with the values of Table 1.5: $v_a = 120$ V with $i_a = -10$ A; $v_b = 120$ V, $i_b = 9$ A; $v_c = 10$ V, $i_c = 10$ A; $v_d = 10$ V, $i_d = 1$ A; $v_e = -10$ V, $i_e = -9$ A; $v_f = -100$ V, $i_f = 5$ A; $v_g = 120$ V, $i_g = 4$ A; $v_h = -220$ V, $i_h = -5$ A. Verify the power balance and locate the data error. (Nilsson Practical Perspective)',
        steps: [
          { label: 'Step 1: Compute every power', text: '$p_a = (120)(-10) = -1200$ W, $p_b = -(120)(9) = -1080$ W, $p_c = (10)(10) = 100$ W, $p_d = -(10)(1) = -10$ W, $p_e = (-10)(-9) = 90$ W, $p_f = -(-100)(5) = 500$ W, $p_g = (120)(4) = 480$ W, $p_h = (-220)(-5) = 1100$ W.' },
          { label: 'Step 2: Sum the suppliers', text: 'Components a, b and d show negative power — they supply: $p_{supplied} = -1200 - 1080 - 10 = -2290$ W.' },
          { label: 'Step 3: Sum the absorbers', text: 'Components c, e, f, g and h absorb: $p_{absorbed} = 100 + 90 + 500 + 480 + 1100 = 2270$ W.' },
          { label: 'Step 4: Check the balance', text: '$-2290 + 2270 = -20$ W — not zero, so something is wrong with the data.' },
          { label: 'Step 5: Localize the error', text: 'Divide the imbalance by two: $-20/2 = -10$ W, exactly the power computed for component d. If $p_d$ were $+10$ W the total would be zero — the current through d should be $-1$ A, not the $+1$ A tabulated.' },
        ],
        result: 'The 20 W discrepancy points straight at component d: reversing its current to −1 A balances the circuit exactly.',
      },
    ],
    keyTakeaways: [
      'Power follows from the chain of definitions: $p = dw/dt = (dw/dq)(dq/dt) = vi$, in watts.',
      'The passive sign convention: current reference along the voltage drop means $p = vi$; against it, $p = -vi$. The choice is arbitrary; the bookkeeping must then be consistent.',
      'Positive power means the element absorbs; negative power means it supplies.',
      'Energy is $w = \\int p\\,dt$; for constant conditions $W = VIt$ (joules = volt · ampere · seconds).',
      'Linear circuits have no net power: if $\\sum p \\ne 0$, the analysis contains an error — halving the imbalance localizes a single sign error, as in the 20 W home-circuit check.',
      'Ideal sources are active elements; dependent sources carry the dimensions of their gain (V/V, V/A, A/V, A/A), and parallel voltage sources or series current sources must agree in value.',
      'Modelling guidelines: capture the electrical behaviour, include parasitic effects, and accept approximation — the flashlight is a source, three resistors and a switch.',
    ],
    quiz: [
      {
        q: 'The current reference arrow for an element points against the reference voltage drop (from − to +). Under the passive sign convention the element’s power is:',
        options: ['$p = vi$, and the element must be absorbing', '$p = -vi$, with the sign of the result deciding absorb versus supply', '$p = vi$, with the sign of the result deciding absorb versus supply', 'Undefined — references must be redrawn before computing power'],
        answer: 1,
        explanation: 'Current against the voltage drop calls for the negative sign, $p = -vi$. If the computed $p$ is then positive the element absorbs; negative means it supplies. Reference direction along the drop instead gives $p = vi$.',
      },
      {
        q: 'A solved circuit’s powers sum to −20 W instead of zero. Following Nilsson’s reasoning, the most likely single cause is:',
        options: ['The resistors are non-linear', 'One component’s current or voltage sign is wrong — dividing −20 by 2 gives the power of the offending element', 'The circuit contains a dependent source', 'Energy has been stored in a magnetic field'],
        answer: 1,
        explanation: 'A single sign error flips one element’s power $p$ to $-p$, leaving a residual of $\\pm 2p$. Halving the imbalance, $-20/2 = -10$ W, identifies the mis-signed component — in the book’s example, component d, whose current should be −1 A.',
      },
      {
        q: 'In the flashlight circuit model, the coiled connector and the metal case appear as:',
        options: ['A second voltage source and a switch', 'Ideal resistors $R_1$ and $R_c$ — parasitic resistances that drain the cells without useful output', 'A short circuit and an open circuit', 'Dependent sources controlled by the lamp current'],
        answer: 1,
        explanation: 'Modelling guideline (2): circuit models must account for undesired as well as desired electrical effects. The heat from the lamp’s resistance produces the light; the heat from the case and coil is parasitic and simply wastes battery energy.',
      },
      {
        q: 'A motor outputs 20 kW with 80 per cent efficiency from a constant 200 V supply. The supply current is:',
        options: ['100 A', '125 A', '160 A', '250 A'],
        answer: 1,
        explanation: '$P_{in} = P_o/\\eta = 20\\,000/0.8 = 25\\,000$ W, so $I = P/V = 25\\,000/200 = 125$ A — Hughes’s Example 2.4. Efficiency always inflates the current you must supply.',
      },
      {
        q: 'Which interconnection of ideal sources is permitted?',
        options: ['A 10 V source in parallel with a 5 V source, same polarity', 'A 5 A source in series with a 2 A source, same direction', 'A 10 V voltage source in parallel with a 5 A current source', 'Two voltage sources in parallel whose voltages have opposite polarities'],
        answer: 2,
        explanation: 'An ideal voltage source fixes the voltage regardless of current and an ideal current source fixes the current regardless of voltage, so one of each in parallel is always consistent. Two ideal voltage sources in parallel must match voltages (and polarities); two current sources in series must match currents (and directions).',
      },
      // PYQ-pattern: ISRO 2017 — passive sign and power balance (rephrased, values changed)
      {
        q: 'In a circuit, one labelled element carries 3 A entering its positive terminal, across which the voltage is 8 V. A second load absorbs 40 W. If a single source supplies the whole circuit, the source power and the role of the first element are:',
        options: ['First element delivers 24 W; source supplies 16 W', 'First element absorbs 24 W; source supplies 64 W', 'First element absorbs 11 W; source supplies 51 W', 'First element delivers 24 W; source supplies 64 W'],
        answer: 1,
        explanation: 'Step 1 — Given: $v = 8$ V with the reference positive where $i = 3$ A enters, plus a second load taking 40 W. Step 2 — Governing rule: with the passive sign convention $p = vi$ is absorbed when current enters the positive terminal, and absorbed powers must equal delivered powers. Step 3 — Computation: $p_{1} = 8 \\times 3 = 24$ W absorbed by the first element, so the source must deliver $24 + 40 = 64$ W. Step 4 — Sanity check: all terms are positive watts, delivered equals absorbed, and the source value exceeds each single load as required. Step 5 — Distractor analysis: options claiming the first element delivers confuse entering with leaving current, 16 W subtracts instead of adding, and 11 W has no algebraic origin. Step 6 — Conclude: the first element absorbs 24 W and the source supplies 64 W.',
      },
    ],
  },
]

export const elecCh1Formulas: FormulaEntry[] = [
  {
    chapterId: 'ee-e-basic-electrical',
    section: '1.10',
    name: 'Definition of current',
    formula: 'i = dq/dt',
    latex: 'i = \\frac{dq}{dt}',
    note: 'current is the rate of charge flow; 1 A = 1 C/s',
  },
  {
    chapterId: 'ee-e-basic-electrical',
    section: '1.11',
    name: 'Charge transferred',
    formula: 'Q = It; 1 A h = 3600 C',
    latex: 'Q = It \\quad (1\\ \\text{A h} = 3600\\ \\text{C})',
    note: 'coulomb = ampere second; battery ratings use ampere hours',
  },
  {
    chapterId: 'ee-e-basic-electrical',
    section: '1.11',
    name: 'Definition of voltage',
    formula: 'V = W/Q = P/I',
    latex: 'V = \\frac{W}{Q} = \\frac{P}{I}',
    note: 'volt = joule per coulomb — energy per unit charge',
  },
  {
    chapterId: 'ee-e-basic-electrical',
    section: '1.12',
    name: 'Electrical power',
    formula: 'P = VI (sign from passive convention)',
    latex: 'P = VI',
    note: 'watt = volt × ampere; use −vi when current opposes the drop',
  },
  {
    chapterId: 'ee-e-basic-electrical',
    section: '1.12',
    name: 'Energy from power',
    formula: 'w(t) = ∫ p dx; W = VIt',
    latex: 'w(t) = \\int_0^t p\\,dx',
    note: 'joule = watt second; integrate power to get energy',
  },
  {
    chapterId: 'ee-e-basic-electrical',
    section: '1.12',
    name: 'Efficiency',
    formula: 'η = Pout/Pin < 1',
    latex: '\\eta = \\frac{P_{o}}{P_{in}} < 1',
    note: 'divide output by efficiency to size the input',
  },
  {
    chapterId: 'ee-e-basic-electrical',
    section: '1.9',
    name: 'Rotational power',
    formula: 'P = Mω = 2πNᵣM/60',
    latex: 'P = M\\omega = \\frac{2\\pi N_r M}{60}',
    note: 'Nᵣ in r/min; M (or T) in newton metres',
  },
  {
    chapterId: 'ee-e-basic-electrical',
    section: '1.9',
    name: 'The kilowatt hour',
    formula: '1 kW h = 3.6 MJ',
    latex: '1\\ \\text{kW h} = 3.6 \\times 10^{6}\\ \\text{J}',
    note: 'the commercial unit — 1 kW sustained for one hour',
  },
]
