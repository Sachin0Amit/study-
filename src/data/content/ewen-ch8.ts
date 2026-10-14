import type { SectionContent } from '../library'

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition
// Chapter 8: Work and Energy (pp 218-247)
// ============================================================================

export const ewenCh8Content: SectionContent[] = [
  {
    sectionId: 'ewen-ch8-s1',
    readingTime: 5,
    intro: "Work is force paid through distance, and only the along-the-motion part counts. This section computes $W = Fd$ for pushes, lifts, and angled pulls with unit-clean arithmetic.",
    objectives: [
      "Compute work with $W = Fd$ and state its joule unit",
      "Handle angled forces with $W = Fd\\cos\\theta$",
      "Recognize zero-work cases correctly",
    ],
    concepts: [
      {
        term: "Mechanical work",
        kind: "definition",
        statement: "Work is **$W = Fd$** for constant force along the displacement, in **joules ($1\\ \\mathrm{J} = 1\\ \\mathrm{N \\cdot m}$)**.",
        detail: "Pushing $200\\ \\mathrm{N}$ through $5.00\\ \\mathrm{m}$ does $1000\\ \\mathrm{J}$.",
      },
      {
        term: "Angled-force work",
        kind: "theorem",
        statement: "At angle $\\theta$ to the motion, **$W = Fd\\cos\\theta$** — only the parallel component earns work.",
        detail: "Pulling at $30^{\\circ}$ with $100\\ \\mathrm{N}$ over $10\\ \\mathrm{m}$ does $866\\ \\mathrm{J}$, not $1000$.",
      },
      {
        term: "Zero-work cases",
        kind: "insight",
        statement: "**No displacement or perpendicular force means no work**: carrying a load level, pushing an unmoved wall, or orbiting circularly all do zero mechanical work.",
        detail: "Effort and fatigue are not work — $d = 0$ or $\\cos 90^{\\circ} = 0$ kills $W$.",
      },
      {
        term: "Work sign",
        kind: "notation",
        statement: "Force with motion gives **positive work**; opposing force gives **negative work** (energy removed).",
        detail: "Gravity does $-mgh$ on a rising load and $+mgh$ on a falling one.",
      },
      {
        term: "Foot-pound bridge",
        kind: "notation",
        statement: "**$1\\ \\mathrm{ft \\cdot lb} = 1.356\\ \\mathrm{J}$** converts English work to SI for mixed-unit jobs.",
        detail: "A $500\\ \\mathrm{ft \\cdot lb}$ lift is $678\\ \\mathrm{J}$.",
      },
    ],
    figures: [
      {
        caption: "Only $F\\cos\\theta$ works: angled pull split into working parallel and idle perpendicular parts",
        svg: '<svg role="img" aria-label="Only Fcostheta works: angled pull split into working parallel and idle perpendicular parts" viewBox="0 0 400 160" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="150" y="70" width="90" height="45"/><line x1="30" y1="115" x2="370" y2="115"/></g><g stroke="currentColor" stroke-width="2.5" fill="none"><line x1="240" y1="90" x2="330" y2="50"/><line x1="240" y1="90" x2="330" y2="90" stroke-dasharray="6 4"/><line x1="330" y1="50" x2="330" y2="90" stroke-dasharray="6 4"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="270" y="45">F</text><text x="275" y="108">F cos θ works</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Crate push work",
        problem: "A worker pushes a crate with $250\\ \\mathrm{N}$ horizontally through $12.0\\ \\mathrm{m}$. Find the work.",
        steps: [
          { label: "Apply", text: "$W = Fd = 250 \\times 12.0 = 3000\\ \\mathrm{J}$." },
          { label: "Units", text: "$\\mathrm{N \\cdot m} = \\mathrm{J}$ confirms work." },
          { label: "Report", text: "$3.00\\ \\mathrm{kJ}$ of mechanical work." },
        ],
        result: "$3.00\\ \\mathrm{kJ}$ of work done on the crate.",
      },
      {
        title: "Angled tow work",
        problem: "A rope pulls a sled with $120\\ \\mathrm{N}$ at $25^{\\circ}$ above horizontal for $30.0\\ \\mathrm{m}$. Find the work.",
        steps: [
          { label: "Component", text: "$F_{\\parallel} = 120\\cos 25^{\\circ} = 120 \\times 0.9063 = 108.8\\ \\mathrm{N}$." },
          { label: "Work", text: "$W = 108.8 \\times 30.0 = 3264\\ \\mathrm{J}$." },
          { label: "Report", text: "About $3.26\\ \\mathrm{kJ}$; the vertical $50.7\\ \\mathrm{N}$ does none." },
        ],
        result: "About $3.26\\ \\mathrm{kJ}$ of useful work.",
      },
    ],
    keyTakeaways: [
      "$W = Fd$ ($\\mathrm{J}$); angled pulls use $Fd\\cos\\theta$.",
      "Perpendicular forces and zero displacement do zero work.",
      "Work sign tracks energy in versus energy out.",
    ],
    quiz: [
      {
        q: "$250\\ \\mathrm{N}$ through $12.0\\ \\mathrm{m}$ does work",
        options: ["$20.8\\ \\mathrm{J}$", "$3000\\ \\mathrm{J}$", "$262\\ \\mathrm{J}$", "$0\\ \\mathrm{J}$"],
        answer: 1,
        explanation: "$250 \\times 12.0 = 3000\\ \\mathrm{J}$.",
      },
      {
        q: "$120\\ \\mathrm{N}$ at $25^{\\circ}$ over $30.0\\ \\mathrm{m}$ does about",
        options: ["$3600\\ \\mathrm{J}$", "$3260\\ \\mathrm{J}$", "$1520\\ \\mathrm{J}$", "$0\\ \\mathrm{J}$"],
        answer: 1,
        explanation: "$120\\cos 25^{\\circ} \\times 30.0 = 3264\\ \\mathrm{J}$.",
      },
      {
        q: "Carrying a heavy load horizontally at steady height does",
        options: ["Large positive work", "Zero mechanical work on the load", "Negative work equal to weight", "Work equal to distance only"],
        answer: 1,
        explanation: "Force vertical, displacement horizontal: $\\cos 90^{\\circ} = 0$.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch8-s2',
    readingTime: 6,
    intro: "Power sets how fast work gets done, and every motor nameplate is a power statement. This section converts watts, horsepower, and kilowatts and prices electrical work in kilowatt-hours.",
    objectives: [
      "Compute power with $P = W/t$",
      "Convert between watts and horsepower",
      "Cost electrical energy with kilowatt-hours",
    ],
    concepts: [
      {
        term: "Power defined",
        kind: "definition",
        statement: "**Power $P = W/t = Fv$** (steady force at speed $v$) in **watts ($1\\ \\mathrm{W} = 1\\ \\mathrm{J/s}$)**.",
        detail: "Doing $3000\\ \\mathrm{J}$ in $10.0\\ \\mathrm{s}$ takes $300\\ \\mathrm{W}$.",
      },
      {
        term: "Horsepower bridge",
        kind: "notation",
        statement: "**$1\\ \\mathrm{hp} = 746\\ \\mathrm{W}$** ($550\\ \\mathrm{ft \\cdot lb/s}$) — the motor-rating bridge.",
        detail: "A $2.00\\ \\mathrm{hp}$ motor delivers about $1492\\ \\mathrm{W}$ at full load.",
      },
      {
        term: "Kilowatt-hour energy",
        kind: "notation",
        statement: "Utilities bill energy as **$1\\ \\mathrm{kWh} = 3.60 \\times 10^{6}\\ \\mathrm{J}$** — power sustained for time.",
        detail: "A $1.50\\ \\mathrm{kW}$ heater for $4.00\\ \\mathrm{h}$ uses $6.00\\ \\mathrm{kWh}$.",
      },
      {
        term: "$P = Fv$ for steady motion",
        kind: "theorem",
        statement: "Pushing with $F$ at steady $v$ needs **$P = Fv$**: double the speed at the same drag and power doubles.",
        detail: "Holding $3000\\ \\mathrm{N}$ drag at $25\\ \\mathrm{m/s}$ demands $75.0\\ \\mathrm{kW}$ ($101\\ \\mathrm{hp}$).",
      },
      {
        term: "Rated versus delivered",
        kind: "insight",
        statement: "Nameplate power is **output at the shaft**; input exceeds it by efficiency losses — size supplies from input, jobs from output.",
        detail: "A $90\\%$-efficient $1.50\\ \\mathrm{kW}$-output motor draws $1.67\\ \\mathrm{kW}$.",
      },
    ],
    examples: [
      {
        title: "Hoist motor sizing",
        problem: "A hoist does $23{,}520\\ \\mathrm{J}$ in $15.0\\ \\mathrm{s}$. Find power in watts and horsepower.",
        steps: [
          { label: "Watts", text: "$P = 23{,}520/15.0 = 1568\\ \\mathrm{W}$." },
          { label: "Horsepower", text: "$1568/746 \\approx 2.10\\ \\mathrm{hp}$ ideal." },
          { label: "Reality", text: "At $80\\%$ efficiency the motor draws $1568/0.80 = 1960\\ \\mathrm{W}$ ($2.63\\ \\mathrm{hp}$ input)." },
        ],
        result: "Ideal $1.57\\ \\mathrm{kW}$ ($2.10\\ \\mathrm{hp}$); input about $1.96\\ \\mathrm{kW}$.",
      },
      {
        title: "Heater energy cost",
        problem: "A $1.50\\ \\mathrm{kW}$ heater runs $4.00\\ \\mathrm{h}$ nightly at $\\$0.16/\\mathrm{kWh}$. Find nightly energy and cost.",
        steps: [
          { label: "Energy", text: "$E = 1.50 \\times 4.00 = 6.00\\ \\mathrm{kWh} = 2.16 \\times 10^{7}\\ \\mathrm{J}$." },
          { label: "Cost", text: "$6.00 \\times 0.16 = \\$0.96$ per night." },
          { label: "Month", text: "Thirty nights: $180\\ \\mathrm{kWh}$, about $\\$28.80$." },
        ],
        result: "$6.00\\ \\mathrm{kWh}$ per night, costing $\\$0.96$.",
      },
    ],
    keyTakeaways: [
      "$P = W/t = Fv$ in watts; $1\\ \\mathrm{hp} = 746\\ \\mathrm{W}$.",
      "Energy bills multiply power by time: kilowatt-hours billed at the meter rate.",
      "Size from input power, promise from output power.",
    ],
    quiz: [
      {
        q: "$23{,}520\\ \\mathrm{J}$ in $15.0\\ \\mathrm{s}$ is power",
        options: ["$1568\\ \\mathrm{W}$", "$352{,}800\\ \\mathrm{W}$", "$156.8\\ \\mathrm{W}$", "$15.0\\ \\mathrm{W}$"],
        answer: 0,
        explanation: "$23{,}520/15.0 = 1568\\ \\mathrm{W} \\approx 2.10\\ \\mathrm{hp}$.",
      },
      {
        q: "$1.50\\ \\mathrm{kW}$ for $4.00\\ \\mathrm{h}$ at $\\$0.16/\\mathrm{kWh}$ costs",
        options: ["$\\$6.00$", "$\\$0.96$", "$\\$24.00$", "$\\$0.24$"],
        answer: 1,
        explanation: "$6.00\\ \\mathrm{kWh} \\times 0.16 = \\$0.96$.",
      },
      {
        q: "Steady $3000\\ \\mathrm{N}$ drag at $25\\ \\mathrm{m/s}$ needs power",
        options: ["$120\\ \\mathrm{W}$", "$75.0\\ \\mathrm{kW}$", "$3025\\ \\mathrm{W}$", "$7.50\\ \\mathrm{kW}$"],
        answer: 1,
        explanation: "$P = Fv = 3000 \\times 25 = 75{,}000\\ \\mathrm{W}$.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch8-s3',
    readingTime: 6,
    intro: "Energy is stored work ready to act — motion holds kinetic, height holds gravitational potential. This section banks both and converts between them quantitatively.",
    objectives: [
      "Compute kinetic energy $\\tfrac12mv^2$",
      "Compute gravitational potential $mgh$",
      "Track $KE$-$PE$ exchange in drops and throws",
    ],
    concepts: [
      {
        term: "Kinetic energy",
        kind: "definition",
        statement: "**Kinetic energy $KE = \\frac{1}{2}mv^2$** in joules — motion energy scaling with speed squared.",
        detail: "A $1200\\ \\mathrm{kg}$ car at $20\\ \\mathrm{m/s}$ carries $240{,}000\\ \\mathrm{J}$; at $40\\ \\mathrm{m/s}$ it carries $960{,}000$.",
      },
      {
        term: "Gravitational potential energy",
        kind: "definition",
        statement: "**Potential $PE = mgh$** above a datum — lifted weight banked as joules.",
        detail: "A $50.0\\ \\mathrm{kg}$ crate on a $2.00\\ \\mathrm{m}$ platform holds $980\\ \\mathrm{J}$.",
      },
      {
        term: "Speed-squared danger",
        kind: "insight",
        statement: "Because $KE \\propto v^2$, **doubling speed quadruples crash energy** — the quantitative case for speed control.",
        detail: "Brakes must dissipate four times the heat for twice the speed.",
      },
      {
        term: "Datum freedom",
        kind: "method",
        statement: "Only **$PE$ differences matter**: set $h = 0$ anywhere convenient and difference the endpoints.",
        detail: "Falling $5.00\\ \\mathrm{m}$ releases $mg(5.00)$ regardless of floor elevation numbers.",
      },
      {
        term: "Other energy accounts",
        kind: "definition",
        statement: "Springs, fuels, batteries, and heat hold **elastic, chemical, electrical, and thermal energy** — same joule, different storage.",
        detail: "This chapter tracks mechanical accounts; heat losses enter as the missing balance.",
      },
    ],
    examples: [
      {
        title: "Car kinetic energy",
        problem: "Find the kinetic energy of a $1500\\ \\mathrm{kg}$ car at $25.0\\ \\mathrm{m/s}$, and at $50.0\\ \\mathrm{m/s}$.",
        steps: [
          { label: "At 25", text: "$KE = \\frac{1}{2}(1500)(625) = 468{,}750\\ \\mathrm{J} \\approx 469\\ \\mathrm{kJ}$." },
          { label: "At 50", text: "$KE = \\frac{1}{2}(1500)(2500) = 1{,}875{,}000\\ \\mathrm{J} \\approx 1.88\\ \\mathrm{MJ}$." },
          { label: "Ratio", text: "Four times the energy at twice the speed — square law confirmed numerically." },
        ],
        result: "$469\\ \\mathrm{kJ}$ versus $1.88\\ \\mathrm{MJ}$.",
      },
      {
        title: "Lifted beam potential",
        problem: "A $800\\ \\mathrm{kg}$ beam is raised $6.00\\ \\mathrm{m}$. How much potential is stored?",
        steps: [
          { label: "Apply", text: "$PE = 800 \\times 9.80 \\times 6.00 = 47{,}040\\ \\mathrm{J}$." },
          { label: "Report", text: "About $47.0\\ \\mathrm{kJ}$ banked." },
          { label: "Use", text: "Lowering it can return at most this much (minus friction)." },
        ],
        result: "$47.0\\ \\mathrm{kJ}$ of gravitational potential.",
      },
    ],
    keyTakeaways: [
      "$KE = \\frac{1}{2}mv^2$; $PE = mgh$ — both in joules.",
      "Crash energy quadruples when speed doubles.",
      "Set the $PE$ datum for convenience; differences decide.",
    ],
    quiz: [
      {
        q: "$1500\\ \\mathrm{kg}$ at $25.0\\ \\mathrm{m/s}$ carries kinetic energy",
        options: ["$18{,}750\\ \\mathrm{J}$", "$469{,}000\\ \\mathrm{J}$", "$37{,}500\\ \\mathrm{J}$", "$937{,}500\\ \\mathrm{J}$"],
        answer: 1,
        explanation: "$0.5 \\times 1500 \\times 625 = 468{,}750\\ \\mathrm{J}$.",
      },
      {
        q: "Doubling speed changes kinetic energy by",
        options: ["$\\times 2$", "$\\times 4$", "No change", "$\\times 1/2$"],
        answer: 1,
        explanation: "$v^2$ dependence quadruples $KE$.",
      },
      {
        q: "$800\\ \\mathrm{kg}$ raised $6.00\\ \\mathrm{m}$ stores",
        options: ["$4800\\ \\mathrm{J}$", "$47.0\\ \\mathrm{kJ}$", "$7840\\ \\mathrm{J}$", "$133\\ \\mathrm{J}$"],
        answer: 1,
        explanation: "$800 \\times 9.80 \\times 6.00 = 47{,}040\\ \\mathrm{J}$.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch8-s4',
    readingTime: 7,
    intro: "Without friction, mechanical energy only changes form — falling trades height for speed reversibly. This section applies $KE_1 + PE_1 = KE_2 + PE_2$ to drops, coasters, and pendulums.",
    objectives: [
      "State conservation of mechanical energy and its condition",
      "Solve drop and slide speeds with energy balance",
      "Account for friction as energy lost to heat",
    ],
    concepts: [
      {
        term: "Conservation of mechanical energy",
        kind: "law",
        statement: "With only gravity (and springs) doing work, **$KE_1 + PE_1 = KE_2 + PE_2$** — the total $E = KE + PE$ is constant.",
        detail: "A $2.00\\ \\mathrm{kg}$ ball dropped $5.00\\ \\mathrm{m}$ trades $98.0\\ \\mathrm{J}$ of $PE$ for $98.0\\ \\mathrm{J}$ of $KE$.",
      },
      {
        term: "Drop-speed formula",
        kind: "theorem",
        statement: "Falling $h$ from rest gives **$v = \\sqrt{2gh}$** — mass cancels, height alone sets impact speed.",
        detail: "From $10.0\\ \\mathrm{m}$: $v = \\sqrt{196} = 14.0\\ \\mathrm{m/s}$ for feather and hammer alike (no air).",
      },
      {
        term: "Work-energy with friction",
        kind: "theorem",
        statement: "With friction, **$E_2 = E_1 - f_k d$**: the missing mechanical energy left as heat.",
        detail: "A slide ending slower than $\\sqrt{2gh}$ predicts names its friction loss in joules.",
      },
      {
        term: "Pendulum exchange",
        kind: "insight",
        statement: "A swinging pendulum **trades $PE$ at the top for $KE$ at the bottom** continuously, with total fixed (no air).",
        detail: "Release height sets bottom speed by $v = \\sqrt{2gh}$ regardless of string length.",
      },
      {
        term: "Energy-bar auditing",
        kind: "method",
        statement: "Draw **before/after energy bars** for $KE$ and $PE$; missing height of bars is work in or heat out.",
        detail: "Bars make sign and loss errors visible before numbers are trusted.",
      },
    ],
    figures: [
      {
        caption: "Energy exchange in a drop: $PE = mgh$ converts fully to $KE = \\frac{1}{2}mv^2$ at impact",
        svg: '<svg role="img" aria-label="Energy exchange in a drop: PE = mgh converts fully to KE = frac12mv^2 at impact" viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="40" y1="140" x2="370" y2="140"/></g><g fill="currentColor"><circle cx="120" cy="40" r="9"/><circle cx="250" cy="95" r="9"/><circle cx="340" cy="130" r="9"/></g><g stroke="currentColor" stroke-width="2" stroke-dasharray="5 4" fill="none"><line x1="120" y1="40" x2="120" y2="140"/><line x1="250" y1="95" x2="250" y2="140"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="128" y="45">PE max</text><text x="258" y="95">mix</text><text x="300" y="125">KE max</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Dropped-crate impact speed",
        problem: "A $20.0\\ \\mathrm{kg}$ crate falls $8.00\\ \\mathrm{m}$ from rest (no air). Find impact speed two ways.",
        steps: [
          { label: "Energy", text: "$mgh = \\frac{1}{2}mv^2$ gives $v = \\sqrt{2gh} = \\sqrt{2 \\times 9.80 \\times 8.00} = \\sqrt{156.8} \\approx 12.52\\ \\mathrm{m/s}$." },
          { label: "Kinematics check", text: "$v^2 = 2as = 2(9.80)(8.00) = 156.8$ — identical." },
          { label: "Energy value", text: "$mgh = 20.0 \\times 9.80 \\times 8.00 = 1568\\ \\mathrm{J}$ converted to $KE$." },
        ],
        result: "Impact at $12.5\\ \\mathrm{m/s}$; $1.57\\ \\mathrm{kJ}$ exchanged.",
      },
      {
        title: "Slide with friction loss",
        problem: "A $5.00\\ \\mathrm{kg}$ block slides from $h = 3.00\\ \\mathrm{m}$ down a ramp of length $6.00\\ \\mathrm{m}$ with $f_k = 8.00\\ \\mathrm{N}$. Find bottom speed.",
        steps: [
          { label: "Start energy", text: "$E_1 = mgh = 5.00 \\times 9.80 \\times 3.00 = 147\\ \\mathrm{J}$." },
          { label: "Loss", text: "Friction work $8.00 \\times 6.00 = 48.0\\ \\mathrm{J}$ leaves $E_2 = 99.0\\ \\mathrm{J}$." },
          { label: "Speed", text: "$v = \\sqrt{2E_2/m} = \\sqrt{39.6} \\approx 6.29\\ \\mathrm{m/s}$ (frictionless would be $7.67$)." },
        ],
        result: "$6.29\\ \\mathrm{m/s}$ at the bottom; $48.0\\ \\mathrm{J}$ lost to heat.",
      },
    ],
    keyTakeaways: [
      "No nonconservative work: $KE + PE$ is constant end to end.",
      "Free drops hit at $v = \\sqrt{2gh}$ independent of mass.",
      "Friction subtracts $f_k d$ from the mechanical total.",
    ],
    quiz: [
      {
        q: "Falling $8.00\\ \\mathrm{m}$ from rest impacts at",
        options: ["$78.4\\ \\mathrm{m/s}$", "$12.5\\ \\mathrm{m/s}$", "$6.26\\ \\mathrm{m/s}$", "$156.8\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "$v = \\sqrt{2(9.80)(8.00)} = 12.5\\ \\mathrm{m/s}$.",
      },
      {
        q: "The $5\\ \\mathrm{kg}$ block ($h = 3\\ \\mathrm{m}$, $48\\ \\mathrm{J}$ friction loss) exits at",
        options: ["$7.67\\ \\mathrm{m/s}$", "$6.29\\ \\mathrm{m/s}$", "$3.00\\ \\mathrm{m/s}$", "$9.80\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "$v = \\sqrt{2(99.0)/5.00} = 6.29\\ \\mathrm{m/s}$.",
      },
      {
        q: "Conservation $KE_1 + PE_1 = KE_2 + PE_2$ requires",
        options: ["Friction dominating", "Only conservative (gravity/spring) forces doing work", "Perpetual speedup", "No motion"],
        answer: 1,
        explanation: "Nonconservative work breaks the equality by the heat-loss amount.",
      },
    ],
    depth: [
      {
        tier: 'masters',
        title: 'From Newton to Work-Energy: Derivation and Conservative Fields',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Work-energy theorem',
            body: "For a particle with net force $\\vec{F}_{net}$ along path $C$, the work $W_{net} = \\int_C \\vec{F}_{net}\\cdot d\\vec{r}$ equals the kinetic change: **$W_{net} = \\Delta KE$**. With $\\vec{F}_{net} = m\\,d\\vec{v}/dt$ and $d\\vec{r} = \\vec{v}\\,dt$, the integrand becomes $m\\vec{v}\\cdot d\\vec{v} = d(\\frac{1}{2}mv^2)$, and integrating from state 1 to 2 gives $W_{net} = \\frac{1}{2}mv_2^2 - \\frac{1}{2}mv_1^2$ exactly, for any path and any (even non-constant) force.",
          },
          {
            kind: 'derivation',
            heading: 'Conservative forces and potential',
            body: "A force is **conservative** when its work between two points is path-independent, equivalently $\\oint \\vec{F}\\cdot d\\vec{r} = 0$. Gravity qualifies: $W_{1\\to 2} = -mg(h_2 - h_1)$ by direct integration of $-mg\\,dy$ regardless of the horizontal route. Defining $PE = mgh$ (up to an additive datum constant) lets that work be written $W_{grav} = -(PE_2 - PE_1)$. Splitting $W_{net} = W_{grav} + W_{other}$ in the theorem gives $\\Delta KE = -\\Delta PE + W_{other}$, i.e. **$KE_2 + PE_2 = KE_1 + PE_1 + W_{other}$**. Setting $W_{other} = 0$ (no friction, no pushes) yields the conservation law of the section; friction contributes $W_{other} = -f_k d$.",
          },
          {
            kind: 'example',
            heading: 'Why $v = \\sqrt{2gh}$ is mass-free',
            body: "For a free drop, $W_{other} = 0$ and $KE_1 = 0$, so $\\frac{1}{2}mv^2 = mgh$. Mass divides out before any number is substituted — the cancellation is structural, not coincidental. Numerically, $h = 8.00\\ \\mathrm{m}$ gives $v = \\sqrt{2(9.80)(8.00)} = 12.5\\ \\mathrm{m/s}$ for any $m$, and the exchanged energy $mgh$ scales linearly with $m$ ($1.57\\ \\mathrm{kJ}$ at $20.0\\ \\mathrm{kg}$). Air drag is nonconservative ($W_{other} < 0$), which is why feathers fall short of this prediction.",
          },
          {
            kind: 'remark',
            heading: 'What conservation does not promise',
            body: "The theorem never claims total energy is mechanical: $W_{other}$ routinely parks energy in heat, sound, and deformation. The first law of thermodynamics extends the ledger so $\\Delta KE + \\Delta PE + \\Delta U_{thermal} + \\cdots = W_{in}$, keeping conservation universal while mechanical conservation stays conditional on $W_{other} = 0$. Recognizing which account holds the missing joules is the professional skill behind every efficiency calculation in Chapters 8-10.",
          },
        ],
      },
    ],
  },
  {
    sectionId: 'ewen-ch8-s5',
    readingTime: 5,
    intro: "Society runs on the same joule whether it comes from coal, river, wind, or sun. This section surveys the sources, compares their densities and trade-offs, and prices a solar contribution.",
    objectives: [
      "List major energy sources with their origins",
      "Compare renewable and nonrenewable trade-offs",
      "Estimate solar and wind contributions quantitatively",
    ],
    concepts: [
      {
        term: "Nonrenewable sources",
        kind: "definition",
        statement: "Coal, oil, gas, and uranium are **stock fuels**: concentrated and dispatchable but depletable with waste and emission costs.",
        detail: "A $1.00\\ \\mathrm{kg}$ of coal holds roughly $2.4 \\times 10^{7}\\ \\mathrm{J}$ ($6.7\\ \\mathrm{kWh}$) of chemical energy.",
      },
      {
        term: "Renewable flows",
        kind: "definition",
        statement: "Hydro, wind, solar, geothermal, and biomass tap continuing **flows** — inexhaustible but diffuse and variable.",
        detail: "Peak sun delivers about $1000\\ \\mathrm{W/m^2}$; a $20\\%$-efficient panel yields $200\\ \\mathrm{W/m^2}$ of it.",
      },
      {
        term: "Power density matters",
        kind: "insight",
        statement: "**Watts per square meter** decide land and cost: hydro sites are dense, solar and wind need area, fossil plants need fuel lines.",
        detail: "A $5.0\\ \\mathrm{MW}$ solar farm at $200\\ \\mathrm{W/m^2}$ needs $25{,}000\\ \\mathrm{m^2}$ of panel.",
      },
      {
        term: "Efficiency chains",
        kind: "method",
        statement: "Delivered energy is source times **chained efficiencies**: panel $\\times$ inverter $\\times$ transmission for solar, thermal $\\times$ turbine for coal.",
        detail: "A $35\\%$-thermal plant burns $2.86\\ \\mathrm{J}$ of fuel per joule delivered.",
      },
      {
        term: "Storage as the balancer",
        kind: "insight",
        statement: "Variable flows need **storage or backup**: batteries, pumped hydro, or grid exchange shift noon sun to evening load.",
        detail: "Sizing storage starts from $E = Pt$ for the gap hours — pure Chapter 8 bookkeeping.",
      },
    ],
    examples: [
      {
        title: "Rooftop solar yield",
        problem: "A $20.0\\ \\mathrm{m^2}$ array at $18.0\\%$ efficiency gets $5.00$ peak-sun-hours daily at $1000\\ \\mathrm{W/m^2}$. Find daily energy.",
        steps: [
          { label: "Peak power", text: "$20.0 \\times 1000 \\times 0.180 = 3600\\ \\mathrm{W} = 3.60\\ \\mathrm{kW}$." },
          { label: "Daily energy", text: "$3.60 \\times 5.00 = 18.0\\ \\mathrm{kWh}$ ($6.48 \\times 10^{7}\\ \\mathrm{J}$)." },
          { label: "Value", text: "At $\\$0.16/\\mathrm{kWh}$ that is $\\$2.88$/day of displaced purchases." },
        ],
        result: "$18.0\\ \\mathrm{kWh}$ per day from the roof.",
      },
      {
        title: "Wind output estimate",
        problem: "A small turbine averages $2.00\\ \\mathrm{kW}$ for $12.0\\ \\mathrm{h}$. How much energy, and how much coal does it displace at $35\\%$ thermal efficiency?",
        steps: [
          { label: "Energy", text: "$2.00 \\times 12.0 = 24.0\\ \\mathrm{kWh} = 8.64 \\times 10^{7}\\ \\mathrm{J}$." },
          { label: "Fuel heat", text: "Coal heat needed: $8.64 \\times 10^{7}/0.35 \\approx 2.47 \\times 10^{8}\\ \\mathrm{J}$." },
          { label: "Coal mass", text: "At $2.4 \\times 10^{7}\\ \\mathrm{J/kg}$: about $10.3\\ \\mathrm{kg}$ of coal displaced." },
        ],
        result: "$24.0\\ \\mathrm{kWh}$ displacing roughly $10\\ \\mathrm{kg}$ of coal.",
      },
    ],
    keyTakeaways: [
      "Stocks (fossil, nuclear) are dense and dispatchable; flows (sun, wind, water) are clean but variable.",
      "Delivered energy is source times chained efficiencies.",
      "Size renewables by $\\mathrm{W/m^2}$ and bridge gaps with $E = Pt$ storage.",
    ],
    quiz: [
      {
        q: "$20\\ \\mathrm{m^2}$ at $18\\%$ for 5 peak hours yields",
        options: ["$3.60\\ \\mathrm{kWh}$", "$18.0\\ \\mathrm{kWh}$", "$90.0\\ \\mathrm{kWh}$", "$0.720\\ \\mathrm{kWh}$"],
        answer: 1,
        explanation: "Peak $3.60\\ \\mathrm{kW} \\times 5.00\\ \\mathrm{h} = 18.0\\ \\mathrm{kWh}$.",
      },
      {
        q: "A $35\\%$-efficient coal plant delivering $1\\ \\mathrm{J}$ burns fuel heat of",
        options: ["$0.35\\ \\mathrm{J}$", "$2.86\\ \\mathrm{J}$", "$1.00\\ \\mathrm{J}$", "$35\\ \\mathrm{J}$"],
        answer: 1,
        explanation: "$1/0.35 = 2.86\\ \\mathrm{J}$ of fuel per joule out.",
      },
      {
        q: "Variable renewables need",
        options: ["No planning", "Storage or backup sized by $E = Pt$ of the gap", "Higher voltage only", "More fuel lines"],
        answer: 1,
        explanation: "Sun and wind timing mismatches load timing; storage bridges them.",
      },
    ],
  },
]
