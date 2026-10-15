import type { SectionContent } from '../library'

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition
// Chapter 9: Rotational Motion (pp 248-282)
// ============================================================================

export const ewenCh9Content: SectionContent[] = [
  {
    sectionId: 'hall-ch10-s18',
    readingTime: 5,
    intro: "Shafts are rated in rpm, radians, and rim speed — three faces of the same rotation. This section converts among them and relates angular to linear motion at the rim.",
    objectives: [
      "Convert rpm to rad/s and degrees",
      "Compute rim speed from $v = r\\omega$",
      "Solve belt-contact speed matching problems",
    ],
    concepts: [
      {
        term: "Angular displacement",
        kind: "definition",
        statement: "Rotation is measured in **revolutions, degrees, or radians** with **$1\\ \\mathrm{rev} = 360^{\\circ} = 2\\pi\\ \\mathrm{rad}$**.",
        detail: "Radians are the working unit because arc length is $s = r\\theta$ directly in them.",
      },
      {
        term: "Angular velocity",
        kind: "definition",
        statement: "**Angular velocity $\\omega = \\theta/t$** in $\\mathrm{rad/s}$; $\\mathrm{rpm}$ converts by **$\\omega = 2\\pi(\\mathrm{rpm})/60$**.",
        detail: "$1750\\ \\mathrm{rpm} = 183\\ \\mathrm{rad/s}$ — the standard four-pole motor speed.",
      },
      {
        term: "Rim-speed relation",
        kind: "theorem",
        statement: "A point at radius $r$ moves at **$v = r\\omega$** — outer points fly faster on the same shaft.",
        detail: "A $0.100\\ \\mathrm{m}$ wheel at $20.0\\ \\mathrm{rad/s}$ has rim speed $2.00\\ \\mathrm{m/s}$.",
      },
      {
        term: "Angular acceleration",
        kind: "definition",
        statement: "**$\\alpha = \\Delta\\omega/t$** in $\\mathrm{rad/s^2}$ spins shafts up; constant-$\\alpha$ formulas mirror Chapter 4 with $\\theta, \\omega, \\alpha$.",
        detail: "Reaching $183\\ \\mathrm{rad/s}$ in $3.00\\ \\mathrm{s}$ needs $\\alpha = 61.0\\ \\mathrm{rad/s^2}$.",
      },
      {
        term: "No-slip contact",
        kind: "method",
        statement: "Rolling or belted surfaces share **equal rim speeds** ($v_1 = v_2$), so $r_1\\omega_1 = r_2\\omega_2$ — the ratio rule of Sections 9.5-9.7.",
        detail: "A small driver spins a large pulley slower by the diameter ratio.",
      },
    ],
    figures: [
      {
        caption: "Rim speed $v = r\\omega$: equal $\\omega$, outer radius wins",
        svg: '<svg role="img" aria-label="Rim speed v = romega: equal omega, outer radius wins" viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><circle cx="200" cy="90" r="60"/><circle cx="200" cy="90" r="28"/><circle cx="200" cy="90" r="4" fill="currentColor"/></g><g stroke="currentColor" stroke-width="2" fill="none"><line x1="200" y1="90" x2="260" y2="90"/><line x1="200" y1="90" x2="228" y2="90"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="232" y="85">r: big v</text><text x="205" y="115">small v</text><text x="150" y="160">v = rω</text></g></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Motor shaft rim speed",
        problem: "A $1750\\ \\mathrm{rpm}$ motor carries a $0.0800\\ \\mathrm{m}$ pulley. Find $\\omega$ and rim speed.",
        steps: [
          { label: "Angular", text: "$\\omega = 2\\pi(1750)/60 = 183.3\\ \\mathrm{rad/s}$." },
          { label: "Rim", text: "$v = 0.0800 \\times 183.3 = 14.66\\ \\mathrm{m/s}$." },
          { label: "Report", text: "About $14.7\\ \\mathrm{m/s}$ belt speed ($52.8\\ \\mathrm{km/h}$ equivalent)." },
        ],
        result: "$183\\ \\mathrm{rad/s}$; rim $14.7\\ \\mathrm{m/s}$.",
      },
      {
        title: "Grinder spin-up",
        problem: "A wheel must go from rest to $3600\\ \\mathrm{rpm}$ in $4.00\\ \\mathrm{s}$. Find $\\alpha$.",
        steps: [
          { label: "Target", text: "$\\omega = 2\\pi(3600)/60 = 377\\ \\mathrm{rad/s}$." },
          { label: "Accelerate", text: "$\\alpha = 377/4.00 = 94.2\\ \\mathrm{rad/s^2}$." },
          { label: "Turns", text: "Average $188.5\\ \\mathrm{rad/s}$ over $4.00\\ \\mathrm{s}$ sweeps $754\\ \\mathrm{rad} = 120\\ \\mathrm{rev}$." },
        ],
        result: "$\\alpha = 94.2\\ \\mathrm{rad/s^2}$; $120$ turns during spin-up.",
      },
    ],
    keyTakeaways: [
      "$1\\ \\mathrm{rev} = 2\\pi\\ \\mathrm{rad}$; $\\omega = 2\\pi(\\mathrm{rpm})/60$.",
      "Rim speed $v = r\\omega$ grows with radius on a shared shaft.",
      "No-slip contacts match rim speeds across components.",
    ],
    quiz: [
      {
        q: "$1750\\ \\mathrm{rpm}$ equals angular velocity",
        options: ["$29.2\\ \\mathrm{rad/s}$", "$183\\ \\mathrm{rad/s}$", "$1750\\ \\mathrm{rad/s}$", "$10{,}996\\ \\mathrm{rad/s}$"],
        answer: 1,
        explanation: "$2\\pi(1750)/60 = 183\\ \\mathrm{rad/s}$.",
      },
      {
        q: "$0.0800\\ \\mathrm{m}$ pulley at $183\\ \\mathrm{rad/s}$ has rim speed",
        options: ["$2288\\ \\mathrm{m/s}$", "$14.7\\ \\mathrm{m/s}$", "$0.437\\ \\mathrm{m/s}$", "$263\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "$0.0800 \\times 183 = 14.7\\ \\mathrm{m/s}$.",
      },
      {
        q: "Belted pulleys share",
        options: ["Equal $\\omega$", "Equal rim speed $r\\omega$", "Equal radius", "Equal torque always"],
        answer: 1,
        explanation: "No-slip contact forces equal surface speeds.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch9-s2',
    readingTime: 5,
    intro: "Spinning mass resists changes to its spin axis — the gyroscopic stiffness behind flywheels and turbines. This section states angular momentum qualitatively and banks flywheel energy.",
    objectives: [
      "Describe angular momentum and its conservation qualitatively",
      "Explain flywheel energy storage with $\\tfrac12I\\omega^2$",
      "Give shop consequences of gyroscopic behavior",
    ],
    concepts: [
      {
        term: "Angular momentum",
        kind: "definition",
        statement: "**Angular momentum** measures spin quantity (moment of inertia times $\\omega$); spinning bodies resist axis changes — **gyroscopic stiffness**.",
        detail: "A fast grinding wheel fights tilting; a stopped one flops freely.",
      },
      {
        term: "Conservation of spin",
        kind: "law",
        statement: "Without external twisting torques, **total angular momentum stays constant** — skaters spin faster pulling arms in.",
        detail: "Helicopter tail rotors exist to absorb the torque reaction the main rotor would otherwise spin into the body.",
      },
      {
        term: "Moment of inertia",
        kind: "definition",
        statement: "**Moment of inertia $I = \\sum mr^2$** weights mass by radius squared — rim mass stores far more spin inertia than hub mass.",
        detail: "Hoops ($I = mr^2$) beat disks ($I = \\frac{1}{2}mr^2$) as flywheels per kilogram.",
      },
      {
        term: "Rotational kinetic energy",
        kind: "theorem",
        statement: "Spinning bodies hold **$KE_{rot} = \\frac{1}{2}I\\omega^2$** — the flywheel account charged by motors and drained by loads.",
        detail: "Doubling $\\omega$ quadruples stored energy at fixed $I$.",
      },
      {
        term: "Flywheel smoothing",
        kind: "insight",
        statement: "**Flywheels smooth pulsed loads** (presses, engines) by banking $KE_{rot}$ between strokes and returning it.",
        detail: "Sizing starts from the joules per pulse the wheel must supply without excessive $\\omega$ droop.",
      },
    ],
    examples: [
      {
        title: "Hoop flywheel energy",
        problem: "A $20.0\\ \\mathrm{kg}$ hoop of radius $0.300\\ \\mathrm{m}$ spins at $50.0\\ \\mathrm{rad/s}$. Find stored energy.",
        steps: [
          { label: "Inertia", text: "$I = mr^2 = 20.0 \\times 0.0900 = 1.80\\ \\mathrm{kg \\cdot m^2}$." },
          { label: "Energy", text: "$KE = \\frac{1}{2}(1.80)(2500) = 2250\\ \\mathrm{J}$." },
          { label: "Compare", text: "Same mass as a disk would store half — rim weighting pays." },
        ],
        result: "$2.25\\ \\mathrm{kJ}$ banked in the spin.",
      },
      {
        title: "Skater spin-up ratio",
        problem: "A skater pulls in from $I_1 = 3.00$ to $I_2 = 1.20\\ \\mathrm{kg \\cdot m^2}$ with no external torque. By what factor does $\\omega$ rise?",
        steps: [
          { label: "Conserve", text: "$I_1\\omega_1 = I_2\\omega_2$, so $\\omega_2/\\omega_1 = I_1/I_2$." },
          { label: "Ratio", text: "$3.00/1.20 = 2.50$ — two-and-a-half times faster." },
          { label: "Energy note", text: "Her muscles supply the extra $KE$; momentum alone does not fund it." },
        ],
        result: "Spin rate multiplies by $2.50$.",
      },
    ],
    keyTakeaways: [
      "Spin quantity $I\\omega$ is conserved without external torque.",
      "$I$ weights mass by $r^2$; hoops beat disks as flywheels.",
      "$KE_{rot} = \\frac{1}{2}I\\omega^2$ banks smoothing energy.",
    ],
    quiz: [
      {
        q: "$20\\ \\mathrm{kg}$ hoop, $r = 0.300\\ \\mathrm{m}$, $\\omega = 50\\ \\mathrm{rad/s}$ stores",
        options: ["$75.0\\ \\mathrm{J}$", "$2250\\ \\mathrm{J}$", "$4500\\ \\mathrm{J}$", "$30.0\\ \\mathrm{J}$"],
        answer: 1,
        explanation: "$I = 1.80$; $KE = 0.5(1.80)(2500) = 2250\\ \\mathrm{J}$.",
      },
      {
        q: "Pulling from $I = 3.00$ to $1.20$ multiplies spin rate by",
        options: ["$0.400$", "$2.50$", "$3.60$", "$1.00$"],
        answer: 1,
        explanation: "$\\omega$ ratio is the inverse inertia ratio.",
      },
      {
        q: "Flywheels smooth pulsed loads by",
        options: ["Adding friction", "Banking and returning $\\frac{1}{2}I\\omega^2$", "Changing gear teeth", "Cooling the motor"],
        answer: 1,
        explanation: "Stored spin energy covers pulse gaps.",
      },
    ],
  },
  {
    sectionId: 'hall-ch10-s19',
    readingTime: 6,
    intro: "Cornering cars, centrifuges, and governors all demand center-seeking force. This section quantifies centripetal $F = mv^2/r$ and sizes curves and spinners safely.",
    objectives: [
      "Compute centripetal force and acceleration",
      "Size safe cornering speeds from $\\mu g$",
      "Solve centrifuge and belt-separation problems",
    ],
    concepts: [
      {
        term: "Centripetal acceleration",
        kind: "theorem",
        statement: "Circular motion at speed $v$, radius $r$ needs center-pointing acceleration **$a_c = v^2/r = r\\omega^2$** — direction change, not speedup.",
        detail: "A car at $20\\ \\mathrm{m/s}$ on $r = 100\\ \\mathrm{m}$ pulls $4.00\\ \\mathrm{m/s^2}$ sideways.",
      },
      {
        term: "Centripetal force",
        kind: "law",
        statement: "**$F_c = mv^2/r$** must be supplied by grip, tension, or normal force — name the supplier in every problem.",
        detail: "$1200\\ \\mathrm{kg}$ in the curve above needs $4800\\ \\mathrm{N}$ of tire grip.",
      },
      {
        term: "No centrifugal force",
        kind: "insight",
        statement: "The outward fling is **inertia in disguise**, not a new force — free-body diagrams show only the inward supplier.",
        detail: "Let go of the string and the ball flies tangent, never radially outward.",
      },
      {
        term: "Cornering limit",
        kind: "method",
        statement: "Grip caps speed: **$v_{max} = \\sqrt{\\mu g r}$** from $mv^2/r = \\mu mg$ — mass cancels.",
        detail: "At $\\mu = 0.70$, $r = 100\\ \\mathrm{m}$: $v_{max} = 26.2\\ \\mathrm{m/s}$ ($94.3\\ \\mathrm{km/h}$).",
      },
      {
        term: "Banking and string suppliers",
        kind: "method",
        statement: "Banked curves tilt the normal inward; strings and walls pull inward — **resolve the supplier radially** to find $F_c$.",
        detail: "Ideal banking needs no friction at one design speed; grip covers the rest.",
      },
    ],
    figures: [
      {
        caption: "Centripetal requirement: velocity tangent, $F_c = mv^2/r$ toward center",
        svg: '<svg role="img" aria-label="Centripetal requirement: velocity tangent, F_c = mv^2/r toward center" viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><circle cx="200" cy="90" r="55"/></g><g fill="currentColor"><circle cx="255" cy="90" r="7"/></g><g stroke="currentColor" stroke-width="2.5" fill="none"><line x1="255" y1="90" x2="255" y2="40"/><line x1="255" y1="90" x2="200" y2="90"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="260" y="60">v tangent</text><text x="160" y="80">Fc inward</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Cornering grip demand",
        problem: "A $1200\\ \\mathrm{kg}$ car takes a $100\\ \\mathrm{m}$ curve at $20.0\\ \\mathrm{m/s}$. What grip force is needed, and is $\\mu = 0.70$ enough?",
        steps: [
          { label: "Demand", text: "$F_c = 1200 \\times 400/100 = 4800\\ \\mathrm{N}$." },
          { label: "Supply", text: "Max grip $\\mu mg = 0.70 \\times 1200 \\times 9.80 = 8232\\ \\mathrm{N}$." },
          { label: "Margin", text: "$4800 < 8232$ — safe with margin; limit speed is $26.2\\ \\mathrm{m/s}$." },
        ],
        result: "Needs $4.80\\ \\mathrm{kN}$; $8.23\\ \\mathrm{kN}$ available — safe.",
      },
      {
        title: "Centrifuge force",
        problem: "A $0.0100\\ \\mathrm{kg}$ sample spins at $r = 0.100\\ \\mathrm{m}$, $\\omega = 300\\ \\mathrm{rad/s}$. Find $F_c$ in newtons and $g$ multiples.",
        steps: [
          { label: "Force", text: "$F_c = mr\\omega^2 = 0.0100 \\times 0.100 \\times 90{,}000 = 90.0\\ \\mathrm{N}$." },
          { label: "In $g$", text: "Weight $0.0980\\ \\mathrm{N}$; ratio $90.0/0.0980 \\approx 918g$." },
          { label: "Sense", text: "Laboratory centrifuges live in the hundreds-to-thousands of $g$ — checked." },
        ],
        result: "$90.0\\ \\mathrm{N}$, about $918g$.",
      },
    ],
    keyTakeaways: [
      "$a_c = v^2/r$ inward; $F_c = mv^2/r$ must be supplied by a real agent.",
      "There is no outward force on free-body diagrams — only inertia.",
      "Grip-limited speed is $v_{max} = \\sqrt{\\mu g r}$.",
    ],
    quiz: [
      {
        q: "$1200\\ \\mathrm{kg}$ at $20\\ \\mathrm{m/s}$ on $r = 100\\ \\mathrm{m}$ needs grip",
        options: ["$2400\\ \\mathrm{N}$", "$4800\\ \\mathrm{N}$", "$24{,}000\\ \\mathrm{N}$", "$1200\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$1200(400)/100 = 4800\\ \\mathrm{N}$.",
      },
      {
        q: "At $\\mu = 0.70$, $r = 100\\ \\mathrm{m}$, the limit speed is about",
        options: ["$14.0\\ \\mathrm{m/s}$", "$26.2\\ \\mathrm{m/s}$", "$68.6\\ \\mathrm{m/s}$", "$7.00\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "$\\sqrt{0.70(9.80)(100)} = 26.2\\ \\mathrm{m/s}$.",
      },
      {
        q: "Releasing the string on a whirled ball sends it",
        options: ["Radially outward", "Tangent to the circle", "Straight to the center", "Backward along the string"],
        answer: 1,
        explanation: "Velocity was always tangent; inertia keeps that line.",
      },
    ],
  },
  {
    sectionId: 'hall-ch10-s20',
    readingTime: 6,
    intro: "Rotating shafts deliver power as torque times spin rate. This section prices shaft power in watts and horsepower and checks pulley torque against belt tension.",
    objectives: [
      "Compute rotational power with $P = \\tau\\omega$",
      "Convert shaft power to horsepower",
      "Relate belt tension difference to torque",
    ],
    concepts: [
      {
        term: "Rotational power",
        kind: "theorem",
        statement: "**Power $P = \\tau\\omega$** with $\\tau$ in $\\mathrm{N \\cdot m}$ and $\\omega$ in $\\mathrm{rad/s}$ gives watts directly.",
        detail: "$50.0\\ \\mathrm{N \\cdot m}$ at $100\\ \\mathrm{rad/s}$ delivers $5000\\ \\mathrm{W}$.",
      },
      {
        term: "Torque-speed trade",
        kind: "insight",
        statement: "Fixed power trades **torque against speed**: gearing down doubles torque while halving $\\omega$.",
        detail: "That is why low gear climbs hills and high gear cruises.",
      },
      {
        term: "Belt torque from tension",
        kind: "method",
        statement: "Net belt pull $(T_1 - T_2)$ at radius $r$ gives **$\\tau = (T_1 - T_2)r$** — slack-side tension subtracts.",
        detail: "$300\\ \\mathrm{N}$ tight versus $100\\ \\mathrm{N}$ slack on $r = 0.150\\ \\mathrm{m}$ yields $30.0\\ \\mathrm{N \\cdot m}$.",
      },
      {
        term: "Shaft horsepower",
        kind: "notation",
        statement: "Divide watts by $746$ for **shaft horsepower** — the rating buyers compare.",
        detail: "$5000\\ \\mathrm{W}$ is $6.70\\ \\mathrm{hp}$ at the shaft.",
      },
      {
        term: "Efficiency chain",
        kind: "method",
        statement: "Motor input exceeds shaft output: **$P_{in} = P_{shaft}/\\eta$** with $\\eta$ the decimal efficiency.",
        detail: "A $90\\%$-efficient $5.00\\ \\mathrm{kW}$ shaft needs $5.56\\ \\mathrm{kW}$ of electricity.",
      },
    ],
    examples: [
      {
        title: "Lathe shaft power",
        problem: "A lathe spindle turns at $800\\ \\mathrm{rpm}$ under $40.0\\ \\mathrm{N \\cdot m}$ of cutting torque. Find shaft power.",
        steps: [
          { label: "Convert", text: "$\\omega = 2\\pi(800)/60 = 83.78\\ \\mathrm{rad/s}$." },
          { label: "Power", text: "$P = 40.0 \\times 83.78 = 3351\\ \\mathrm{W}$." },
          { label: "Horsepower", text: "$3351/746 \\approx 4.49\\ \\mathrm{hp}$ at the spindle." },
        ],
        result: "About $3.35\\ \\mathrm{kW}$ ($4.49\\ \\mathrm{hp}$).",
      },
      {
        title: "Belt-drive torque",
        problem: "Belt tensions are $T_1 = 400\\ \\mathrm{N}$, $T_2 = 150\\ \\mathrm{N}$ on a $0.200\\ \\mathrm{m}$ pulley at $30.0\\ \\mathrm{rad/s}$. Find torque and power.",
        steps: [
          { label: "Torque", text: "$\\tau = (400 - 150)(0.200) = 50.0\\ \\mathrm{N \\cdot m}$." },
          { label: "Power", text: "$P = 50.0 \\times 30.0 = 1500\\ \\mathrm{W}$." },
          { label: "Note", text: "Total tension loads bearings; only the difference drives." },
        ],
        result: "$50.0\\ \\mathrm{N \\cdot m}$; $1.50\\ \\mathrm{kW}$ transmitted.",
      },
    ],
    keyTakeaways: [
      "Shaft power is $P = \\tau\\omega$ in watts ($/746$ for hp).",
      "Gearing trades torque against speed at fixed power.",
      "Belt torque comes from tension difference times radius.",
    ],
    quiz: [
      {
        q: "$40.0\\ \\mathrm{N \\cdot m}$ at $800\\ \\mathrm{rpm}$ delivers",
        options: ["$3350\\ \\mathrm{W}$", "$32{,}000\\ \\mathrm{W}$", "$335\\ \\mathrm{W}$", "$20.0\\ \\mathrm{W}$"],
        answer: 0,
        explanation: "$\\omega = 83.8$; $P = 40.0 \\times 83.8 = 3351\\ \\mathrm{W}$.",
      },
      {
        q: "Tensions 400/150 N on $r = 0.200\\ \\mathrm{m}$ give torque",
        options: ["$110\\ \\mathrm{N \\cdot m}$", "$50.0\\ \\mathrm{N \\cdot m}$", "$80.0\\ \\mathrm{N \\cdot m}$", "$250\\ \\mathrm{N \\cdot m}$"],
        answer: 1,
        explanation: "$(250)(0.200) = 50.0\\ \\mathrm{N \\cdot m}$.",
      },
      {
        q: "Gearing a shaft down at fixed power",
        options: ["Cuts torque", "Doubles torque while halving speed (for 2:1)", "Changes power", "Stops the shaft"],
        answer: 1,
        explanation: "$P = \\tau\\omega$ constant forces the inverse trade.",
      },
    ],
  },
  {
    sectionId: 'hall-ch10-s21',
    readingTime: 5,
    intro: "Belts, chains, and gears all enforce ratio rules between driver and driven. This section derives the inverse speed law and applies it to shop reductions.",
    objectives: [
      "State the inverse speed-diameter rule",
      "Compute driven speeds and directions",
      "Chain two-stage reductions correctly",
    ],
    concepts: [
      {
        term: "Speed ratio law",
        kind: "theorem",
        statement: "No-slip drivers obey **$n_1 d_1 = n_2 d_2$** (speeds $n$, diameters $d$): bigger driven means slower driven.",
        detail: "A $100\\ \\mathrm{mm}$ driver at $1750\\ \\mathrm{rpm}$ spins a $300\\ \\mathrm{mm}$ pulley at $583\\ \\mathrm{rpm}$.",
      },
      {
        term: "Direction rules",
        kind: "insight",
        statement: "**Open belts keep direction; crossed belts and external gears reverse it** — idlers change direction, not ratio magnitude.",
        detail: "Meshed external gears always counter-rotate; internal (ring) gears co-rotate.",
      },
      {
        term: "Torque follows inversely",
        kind: "theorem",
        statement: "Ideal power conservation gives **$\\tau_2/\\tau_1 = n_1/n_2 = d_2/d_1$** — slow shafts pull harder.",
        detail: "The $3{:}1$ reduction above triples torque (minus friction).",
      },
      {
        term: "Two-stage reductions multiply",
        kind: "method",
        statement: "Overall ratio is the **product of stage ratios**: $3{:}1$ then $4{:}1$ is $12{:}1$ total.",
        detail: "Compound drives reach large reductions without absurd single pulleys.",
      },
      {
        term: "Slip and creep losses",
        kind: "insight",
        statement: "Real belts **slip 1-3 percent** under load, so driven speed runs slightly below ideal — measure, do not just compute.",
        detail: "Timing belts and chains eliminate slip where phase matters.",
      },
    ],
    figures: [
      {
        caption: "Open-belt drive: $n_1 d_1 = n_2 d_2$, same direction; crossed belt reverses",
        svg: '<svg role="img" aria-label="Open-belt drive: n_1 d_1 = n_2 d_2, same direction; crossed belt reverses" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><circle cx="110" cy="80" r="30"/><circle cx="290" cy="80" r="55"/></g><g stroke="currentColor" stroke-width="2" fill="none"><line x1="110" y1="50" x2="290" y2="25"/><line x1="110" y1="110" x2="290" y2="135"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="90" y="145">driver d₁</text><text x="265" y="150">driven d₂</text></g></svg>',
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Pulley reduction",
        problem: "A $120\\ \\mathrm{mm}$ motor pulley at $1750\\ \\mathrm{rpm}$ drives a $360\\ \\mathrm{mm}$ machine pulley. Find machine speed.",
        steps: [
          { label: "Ratio", text: "$n_2 = n_1 d_1/d_2 = 1750 \\times 120/360$." },
          { label: "Compute", text: "$n_2 = 1750/3 = 583.3\\ \\mathrm{rpm}$." },
          { label: "Torque", text: "Ideal torque triples ($3{:}1$); with $95\\%$ belt efficiency it is $2.85\\times$." },
        ],
        result: "About $583\\ \\mathrm{rpm}$ at the machine.",
      },
      {
        title: "Two-stage shop reduction",
        problem: "Stages of $3.00{:}1$ and $2.50{:}1$ reduce a $1750\\ \\mathrm{rpm}$ motor. Find final speed.",
        steps: [
          { label: "Total", text: "Ratio $3.00 \\times 2.50 = 7.50{:}1$." },
          { label: "Speed", text: "$1750/7.50 = 233.3\\ \\mathrm{rpm}$." },
          { label: "Check", text: "After stage 1: $583\\ \\mathrm{rpm}$; after stage 2: $233\\ \\mathrm{rpm}$ — consistent." },
        ],
        result: "About $233\\ \\mathrm{rpm}$ final speed.",
      },
    ],
    keyTakeaways: [
      "$n_1 d_1 = n_2 d_2$; driven speed falls as its diameter grows.",
      "Open belts preserve direction; crossed belts and gears reverse.",
      "Stage ratios multiply; torque ratios invert speed ratios.",
    ],
    quiz: [
      {
        q: "$120\\ \\mathrm{mm}$ at $1750\\ \\mathrm{rpm}$ driving $360\\ \\mathrm{mm}$ gives",
        options: ["$5250\\ \\mathrm{rpm}$", "$583\\ \\mathrm{rpm}$", "$1750\\ \\mathrm{rpm}$", "$120\\ \\mathrm{rpm}$"],
        answer: 1,
        explanation: "$1750 \\times 120/360 = 583\\ \\mathrm{rpm}$.",
      },
      {
        q: "Stages $3{:}1$ then $2.5{:}1$ on $1750\\ \\mathrm{rpm}$ give",
        options: ["$9625\\ \\mathrm{rpm}$", "$233\\ \\mathrm{rpm}$", "$700\\ \\mathrm{rpm}$", "$583\\ \\mathrm{rpm}$"],
        answer: 1,
        explanation: "Total $7.5{:}1$; $1750/7.5 = 233\\ \\mathrm{rpm}$.",
      },
      {
        q: "Ideal torque ratio across a $3{:}1$ reduction is",
        options: ["$1{:}3$ (torque falls)", "$3{:}1$ (torque triples)", "Unchanged", "Zero"],
        answer: 1,
        explanation: "Power conservation inverts the speed ratio.",
      },
    ],
  },
  {
    sectionId: 'hall-ch10-s22',
    readingTime: 6,
    intro: "Gear teeth quantize the ratio rule: tooth counts replace diameters exactly. This section sizes gear trains, distinguishes idlers, and computes train value.",
    objectives: [
      "Compute gear speed ratios from tooth counts",
      "Find train value for multi-pair trains",
      "Predict output direction from mesh count",
    ],
    concepts: [
      {
        term: "Gear ratio law",
        kind: "theorem",
        statement: "Meshed gears obey **$n_1 N_1 = n_2 N_2$** (teeth $N$): the $20$-tooth driver at $900\\ \\mathrm{rpm}$ spins a $60$-tooth gear at $300\\ \\mathrm{rpm}$.",
        detail: "Teeth eliminate slip, so this ratio is exact, not approximate.",
      },
      {
        term: "Module compatibility",
        kind: "definition",
        statement: "Meshing gears must share **module (tooth size)** and pressure angle — counts set ratio, module sets mesh.",
        detail: "A $2\\ \\mathrm{mm}$-module gear cannot mesh a $3\\ \\mathrm{mm}$-module mate at any count.",
      },
      {
        term: "Idler gears",
        kind: "insight",
        statement: "An **idler reverses direction without changing ratio magnitude** — it bridges distance and phase, not value.",
        detail: "Driver-idler-driven with counts $20$-$30$-$60$ still gives $3{:}1$ overall.",
      },
      {
        term: "Train value",
        kind: "method",
        statement: "**Train value $= \\prod (N_{driver}/N_{driven})$** per mesh; output speed is input times train value.",
        detail: "Pairs $20/60$ then $15/45$ give $(1/3)(1/3) = 1/9$ overall.",
      },
      {
        term: "Direction by mesh count",
        kind: "method",
        statement: "**Odd external meshes reverse, even preserve** input direction — count the meshes, not the gears.",
        detail: "Two external meshes (one idler) preserve direction.",
      },
    ],
    examples: [
      {
        title: "Single-pair reduction",
        problem: "A $20$-tooth pinion at $1200\\ \\mathrm{rpm}$ drives a $75$-tooth gear. Find output speed and torque change.",
        steps: [
          { label: "Speed", text: "$n_2 = 1200 \\times 20/75 = 320\\ \\mathrm{rpm}$." },
          { label: "Torque", text: "Ideal torque multiplies by $75/20 = 3.75\\times$." },
          { label: "Direction", text: "One external mesh: output counter-rotates." },
        ],
        result: "$320\\ \\mathrm{rpm}$ reversed, $3.75\\times$ torque.",
      },
      {
        title: "Two-pair train",
        problem: "Pairs $24/72$ and $18/54$ follow a $900\\ \\mathrm{rpm}$ input. Find final speed.",
        steps: [
          { label: "Train value", text: "$(24/72)(18/54) = (1/3)(1/3) = 1/9$." },
          { label: "Output", text: "$900/9 = 100\\ \\mathrm{rpm}$." },
          { label: "Direction", text: "Two meshes: output matches input direction." },
        ],
        result: "$100\\ \\mathrm{rpm}$ in the input direction.",
      },
    ],
    keyTakeaways: [
      "$n_1 N_1 = n_2 N_2$ exactly for meshed gears.",
      "Train value multiplies per-mesh driver/driven ratios.",
      "Idlers bridge and reverse; odd meshes reverse overall.",
    ],
    quiz: [
      {
        q: "$20$ teeth at $1200\\ \\mathrm{rpm}$ driving $75$ teeth gives",
        options: ["$4500\\ \\mathrm{rpm}$", "$320\\ \\mathrm{rpm}$", "$1200\\ \\mathrm{rpm}$", "$95\\ \\mathrm{rpm}$"],
        answer: 1,
        explanation: "$1200 \\times 20/75 = 320\\ \\mathrm{rpm}$.",
      },
      {
        q: "Pairs $24/72$ and $18/54$ on $900\\ \\mathrm{rpm}$ give",
        options: ["$8100\\ \\mathrm{rpm}$", "$100\\ \\mathrm{rpm}$", "$300\\ \\mathrm{rpm}$", "$450\\ \\mathrm{rpm}$"],
        answer: 1,
        explanation: "Train $1/9$; $900/9 = 100\\ \\mathrm{rpm}$.",
      },
      {
        q: "An idler gear primarily",
        options: ["Changes the ratio magnitude", "Reverses/bridges without changing magnitude", "Supplies power", "Replaces the driver"],
        answer: 1,
        explanation: "Its teeth cancel from the train-value product.",
      },
    ],
  },
  {
    sectionId: 'hall-ch10-s23',
    readingTime: 5,
    intro: "Flat belts connect distant pulleys with quiet, forgiving drives. This section applies the pulley ratio law, computes belt speed and length, and selects open versus crossed layouts.",
    objectives: [
      "Size pulley speeds with $n_1d_1 = n_2d_2$",
      "Compute belt speed from $v = \\pi dn$",
      "Estimate belt length for open drives",
    ],
    concepts: [
      {
        term: "Pulley ratio law",
        kind: "theorem",
        statement: "Belted pulleys obey **$n_1 d_1 = n_2 d_2$** like gears but with slip — measure critical speeds under load.",
        detail: "Diameters are pitch diameters where the belt rides, not outside flanges.",
      },
      {
        term: "Belt speed",
        kind: "method",
        statement: "Belt linear speed is **$v = \\pi d n$** (consistent units: $d$ in meters, $n$ in rev/s) — one number for the whole loop.",
        detail: "A $0.150\\ \\mathrm{m}$ pulley at $20.0\\ \\mathrm{rev/s}$ runs the belt at $9.42\\ \\mathrm{m/s}$.",
      },
      {
        term: "Open-belt length",
        kind: "method",
        statement: "Open-belt length is approximately **$L \\approx 2C + \\pi(R + r) + (R - r)^2/C$** for center distance $C$ and radii $R, r$.",
        detail: "Order the next stock size up and take up slack with adjustment.",
      },
      {
        term: "Crowning and tracking",
        kind: "insight",
        statement: "**Crowned pulleys steer belts centerward**; misalignment and overload throw or flip belts regardless of correct ratio.",
        detail: "Laser alignment and proper tensioning prevent most belt failures.",
      },
      {
        term: "Belt selection factors",
        kind: "method",
        statement: "Size belts by **power, speed, wrap angle, and service factor** — small pulleys and shock loads demand heavier sections.",
        detail: "Under-belting slips and burns; over-belting wastes bearings and money.",
      },
    ],
    figures: [
      {
        caption: "Belt speed $v = \\pi d n$ is uniform around the loop; torque comes from $(T_1 - T_2)r$",
        svg: '<svg role="img" aria-label="Belt speed v = pi d n is uniform around the loop; torque comes from (T_1 - T_2)r" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><circle cx="100" cy="80" r="28"/><circle cx="300" cy="80" r="48"/></g><g stroke="currentColor" stroke-width="2" fill="none"><line x1="100" y1="52" x2="300" y2="32"/><line x1="100" y1="108" x2="300" y2="128"/></g><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="150" y1="40" x2="190" y2="40"/><polygon points="190,40 182,36 182,44" fill="currentColor"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="150" y="30">belt speed v</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Fan-belt speed",
        problem: "A $100\\ \\mathrm{mm}$ driver at $1750\\ \\mathrm{rpm}$ runs a $250\\ \\mathrm{mm}$ fan pulley. Find fan speed and belt speed.",
        steps: [
          { label: "Fan", text: "$n_2 = 1750 \\times 100/250 = 700\\ \\mathrm{rpm}$." },
          { label: "Belt", text: "$n_1 = 29.17\\ \\mathrm{rev/s}$; $v = \\pi(0.100)(29.17) = 9.16\\ \\mathrm{m/s}$." },
          { label: "Check", text: "Fan side: $\\pi(0.250)(700/60) = 9.16\\ \\mathrm{m/s}$ — matches." },
        ],
        result: "Fan $700\\ \\mathrm{rpm}$; belt $9.16\\ \\mathrm{m/s}$.",
      },
      {
        title: "Belt length estimate",
        problem: "Open drive with $R = 0.150\\ \\mathrm{m}$, $r = 0.060\\ \\mathrm{m}$, $C = 0.800\\ \\mathrm{m}$. Estimate $L$.",
        steps: [
          { label: "Terms", text: "$2C = 1.600$; $\\pi(R + r) = 0.6597$; $(R - r)^2/C = 0.0081/0.800 = 0.0101$ (meters)." },
          { label: "Sum", text: "$L \\approx 1.600 + 0.6597 + 0.0101 = 2.2698\\ \\mathrm{m}$." },
          { label: "Order", text: "Order $2270\\ \\mathrm{mm}$ stock or next size up with take-up." },
        ],
        result: "About $2.27\\ \\mathrm{m}$ of belt.",
      },
    ],
    keyTakeaways: [
      "Pulley speeds obey $n_1d_1 = n_2d_2$ (verify under load for slip).",
      "Belt speed $v = \\pi dn$ is loop-uniform.",
      "Estimate open length, order up, tension and align.",
    ],
    quiz: [
      {
        q: "$100\\ \\mathrm{mm}$ at $1750\\ \\mathrm{rpm}$ driving $250\\ \\mathrm{mm}$ gives",
        options: ["$4375\\ \\mathrm{rpm}$", "$700\\ \\mathrm{rpm}$", "$1750\\ \\mathrm{rpm}$", "$250\\ \\mathrm{rpm}$"],
        answer: 1,
        explanation: "$1750 \\times 100/250 = 700\\ \\mathrm{rpm}$.",
      },
      {
        q: "Belt speed for $0.100\\ \\mathrm{m}$ at $29.17\\ \\mathrm{rev/s}$ is",
        options: ["$0.292\\ \\mathrm{m/s}$", "$9.16\\ \\mathrm{m/s}$", "$91.6\\ \\mathrm{m/s}$", "$2.92\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "$\\pi(0.100)(29.17) = 9.16\\ \\mathrm{m/s}$.",
      },
      {
        q: "Crowned pulleys exist to",
        options: ["Increase ratio", "Steer the belt toward center", "Reverse direction", "Raise power rating"],
        answer: 1,
        explanation: "Crowning self-tracks the belt against misalignment.",
      },
    ],
  },
]
