import type { SectionContent } from '../library'

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition
// Chapter 10: Simple Machines (pp 283-314)
// ============================================================================

export const ewenCh10Content: SectionContent[] = [
  {
    sectionId: 'ewen-ch10-s1',
    readingTime: 5,
    intro: "Every shop machine trades force for distance under one conservation law. This section defines mechanical advantage and efficiency, the two numbers that rate all six simple machines.",
    objectives: [
      "Define ideal and actual mechanical advantage",
      "Compute efficiency from work in and out",
      "Explain why no machine creates energy",
    ],
    concepts: [
      {
        term: "Machine function",
        kind: "definition",
        statement: "A machine **transfers energy with changed force, distance, or direction** — never creating work, only redirecting it.",
        detail: "Levers, pulleys, and screws all obey work in equals work out plus losses.",
      },
      {
        term: "Mechanical advantage",
        kind: "definition",
        statement: "**Actual $MA = F_{out}/F_{in}$**; **ideal $IMA = d_{in}/d_{out}$** from geometry — friction makes $MA < IMA$ always.",
        detail: "An $MA = 4$ jack lifts $800\\ \\mathrm{N}$ with $200\\ \\mathrm{N}$ of effort.",
      },
      {
        term: "Efficiency",
        kind: "theorem",
        statement: "**$\\eta = W_{out}/W_{in} = MA/IMA$** as a decimal or percent — the fraction of input surviving as useful output.",
        detail: "$800\\ \\mathrm{J}$ out of $1000\\ \\mathrm{J}$ in is $80\\%$ efficient.",
      },
      {
        term: "Force-distance trade",
        kind: "insight",
        statement: "**Gaining force costs distance**: $IMA = 4$ means pulling $4\\ \\mathrm{m}$ of rope per meter lifted — conservation priced per stroke.",
        detail: "There is no free force; the product $F \\times d$ is budgeted.",
      },
      {
        term: "Power through machines",
        kind: "method",
        statement: "Input power must cover **output plus loss rate**: $P_{in} = P_{out}/\\eta$ sizes motors driving machines.",
        detail: "A $1.00\\ \\mathrm{kW}$ output at $75\\%$ needs $1.33\\ \\mathrm{kW}$ in.",
      },
    ],
    figures: [
      {
        caption: "Force-distance trade: small effort over long pull balances large load over short lift",
        svg: '<svg role="img" aria-label="Force-distance trade: small effort over long pull balances large load over short lift" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="60" y1="60" x2="340" y2="60"/><polygon points="60,60 52,56 52,64" fill="currentColor"/><polygon points="340,60 348,56 348,64" fill="currentColor"/></g><g stroke="currentColor" stroke-width="2" fill="none"><rect x="300" y="70" width="60" height="40"/><circle cx="100" cy="110" r="12"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="70" y="45">small F, big d</text><text x="280" y="45">big F, small d</text></g></svg>',
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Jack efficiency",
        problem: "A jack lifts $8000\\ \\mathrm{N}$ by $0.200\\ \\mathrm{m}$ with $2000\\ \\mathrm{J}$ of handle work. Find $W_{out}$, $MA$ versus effort $500\\ \\mathrm{N}$, and efficiency.",
        steps: [
          { label: "Output", text: "$W_{out} = 8000 \\times 0.200 = 1600\\ \\mathrm{J}$." },
          { label: "MA", text: "$MA = 8000/500 = 16$." },
          { label: "Efficiency", text: "$\\eta = 1600/2000 = 0.80 = 80\\%$; $400\\ \\mathrm{J}$ lost to friction." },
        ],
        result: "$1.60\\ \\mathrm{kJ}$ out; $MA = 16$; $80\\%$ efficient.",
      },
      {
        title: "Motor sizing through a machine",
        problem: "A hoist must deliver $2.00\\ \\mathrm{kW}$ of lifting power through gearing at $\\eta = 0.75$. What motor input is needed?",
        steps: [
          { label: "Input", text: "$P_{in} = 2.00/0.75 = 2.667\\ \\mathrm{kW}$." },
          { label: "Horsepower", text: "$2667/746 \\approx 3.57\\ \\mathrm{hp}$ — order a $5\\ \\mathrm{hp}$ frame." },
          { label: "Loss", text: "$0.667\\ \\mathrm{kW}$ becomes heat in gears and bearings." },
        ],
        result: "About $2.67\\ \\mathrm{kW}$ input; $5\\ \\mathrm{hp}$ motor.",
      },
    ],
    keyTakeaways: [
      "Machines redirect work; $MA = F_{out}/F_{in}$, $IMA = d_{in}/d_{out}$.",
      "$\\eta = W_{out}/W_{in} = MA/IMA$; friction takes the rest.",
      "Force gained is distance paid — always.",
    ],
    quiz: [
      {
        q: "$1600\\ \\mathrm{J}$ out of $2000\\ \\mathrm{J}$ in is efficiency",
        options: ["$125\\%$", "$80\\%$", "$40\\%$", "$3600\\ \\mathrm{J}$"],
        answer: 1,
        explanation: "$1600/2000 = 0.80$.",
      },
      {
        q: "$2.00\\ \\mathrm{kW}$ out at $75\\%$ needs input",
        options: ["$1.50\\ \\mathrm{kW}$", "$2.67\\ \\mathrm{kW}$", "$2.00\\ \\mathrm{kW}$", "$0.75\\ \\mathrm{kW}$"],
        answer: 1,
        explanation: "$2.00/0.75 = 2.667\\ \\mathrm{kW}$.",
      },
      {
        q: "An $IMA = 4$ machine means",
        options: ["Force quadruples free", "Effort distance is $4\\times$ load distance", "Efficiency is $400\\%$", "Output exceeds input work"],
        answer: 1,
        explanation: "Geometry trades distance for force; energy still balances.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch10-s2',
    readingTime: 6,
    intro: "The lever is the oldest force amplifier: position the fulcrum and small efforts move great loads. This section classes levers and solves crowbar, plier, and pry problems.",
    objectives: [
      "Classify levers as first, second, or third class",
      "Compute lever MA from arm lengths",
      "Solve torque-balance lever problems",
    ],
    concepts: [
      {
        term: "Lever classes",
        kind: "definition",
        statement: "**First class**: fulcrum between effort and load (crowbar, seesaw). **Second**: load between (wheelbarrow). **Third**: effort between (tweezers, forearm).",
        detail: "Class sets whether $MA$ exceeds, equals, or trails one.",
      },
      {
        term: "Lever MA",
        kind: "theorem",
        statement: "Moment balance gives **$IMA = l_{effort}/l_{load}$** and $F_{load} = F_{effort}(l_{effort}/l_{load})$.",
        detail: "$90\\ \\mathrm{cm}$ effort versus $15\\ \\mathrm{cm}$ load gives $IMA = 6$.",
      },
      {
        term: "Torque-balance solution",
        kind: "method",
        statement: "Set **effort moment equals load moment**: $F_e l_e = F_l l_l$ about the fulcrum, with weights of the bar added as needed.",
        detail: "This is Chapter 7 parallel equilibrium applied to one pivot.",
      },
      {
        term: "Third-class speed levers",
        kind: "insight",
        statement: "Third-class levers accept **$MA < 1$ to buy speed and range**: small muscle moves produce large fast hand motions.",
        detail: "Fishing rods and shovels trade force for tip velocity deliberately.",
      },
      {
        term: "Fulcrum reaction",
        kind: "method",
        statement: "The fulcrum carries **effort plus load** (first class, same-side pushes): size pins and pivots for the sum, not just the load.",
        detail: "$200\\ \\mathrm{N}$ effort lifting $1200\\ \\mathrm{N}$ loads the pin with $1400\\ \\mathrm{N}$.",
      },
    ],
    examples: [
      {
        title: "Crowbar nail pull",
        problem: "A crowbar has effort arm $90.0\\ \\mathrm{cm}$ and load arm $15.0\\ \\mathrm{cm}$. Effort $200\\ \\mathrm{N}$: what nail force results?",
        steps: [
          { label: "MA", text: "$IMA = 90.0/15.0 = 6.00$." },
          { label: "Force", text: "$F_{nail} = 200 \\times 6.00 = 1200\\ \\mathrm{N}$ (ideal; friction trims it)." },
          { label: "Pin", text: "Fulcrum carries $200 + 1200 = 1400\\ \\mathrm{N}$." },
        ],
        result: "$1.20\\ \\mathrm{kN}$ on the nail ideally.",
      },
      {
        title: "Wheelbarrow lift",
        problem: "A $400\\ \\mathrm{N}$ load sits $0.400\\ \\mathrm{m}$ from the wheel; handles are $1.20\\ \\mathrm{m}$ out. Find lift force.",
        steps: [
          { label: "Balance", text: "$F(1.20) = 400(0.400)$, so $F = 160/1.20 = 133.3\\ \\mathrm{N}$." },
          { label: "MA", text: "$400/133.3 = 3.00 = 1.20/0.400$ — second class, $MA > 1$." },
          { label: "Feel", text: "About $13.6\\ \\mathrm{kg}$ of lift for a $40.8\\ \\mathrm{kg}$ load." },
        ],
        result: "$133\\ \\mathrm{N}$ of handle lift.",
      },
    ],
    keyTakeaways: [
      "Class by fulcrum-load-effort order; MA is arm ratio.",
      "$F_e l_e = F_l l_l$ solves every lever.",
      "Third class buys speed with $MA < 1$.",
    ],
    quiz: [
      {
        q: "Crowbar $90/15\\ \\mathrm{cm}$ with $200\\ \\mathrm{N}$ pulls nails with",
        options: ["$33.3\\ \\mathrm{N}$", "$1200\\ \\mathrm{N}$", "$200\\ \\mathrm{N}$", "$18{,}000\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$MA = 6$; $200 \\times 6 = 1200\\ \\mathrm{N}$.",
      },
      {
        q: "Wheelbarrow ($400\\ \\mathrm{N}$ at $0.4\\ \\mathrm{m}$, handles $1.2\\ \\mathrm{m}$) needs lift",
        options: ["$1200\\ \\mathrm{N}$", "$133\\ \\mathrm{N}$", "$400\\ \\mathrm{N}$", "$480\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$400(0.4)/1.2 = 133\\ \\mathrm{N}$.",
      },
      {
        q: "A fishing rod is third class, meaning it",
        options: ["Multiplies force greatly", "Trades force for tip speed and range", "Needs no effort", "Is 100% efficient"],
        answer: 1,
        explanation: "Effort between fulcrum and load gives $MA < 1$ with speed gain.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch10-s3',
    readingTime: 5,
    intro: "Windlasses, steering wheels, and doorknobs are levers wrapped in a circle. This section rates wheel-and-axle systems by radius ratio and works windlass and screwdriver problems.",
    objectives: [
      "Compute wheel-and-axle MA from radii",
      "Solve windlass lifting problems",
      "Relate handle torque to axle force",
    ],
    concepts: [
      {
        term: "Wheel-and-axle MA",
        kind: "theorem",
        statement: "**$IMA = R/r$** (wheel radius over axle radius): the rope winds on the small drum while effort circles the large wheel.",
        detail: "$R = 30\\ \\mathrm{cm}$, $r = 5.0\\ \\mathrm{cm}$ gives $IMA = 6$.",
      },
      {
        term: "Torque continuity",
        kind: "method",
        statement: "One shaft means **one torque**: $F_{effort}R = F_{load}r$ — solve for any term given three.",
        detail: "Friction in bearings is the only leakage from this equality.",
      },
      {
        term: "Crank as wheel",
        kind: "insight",
        statement: "Cranks, handwheels, and steering wheels are **wheels with spokes**: crank radius plays $R$ exactly.",
        detail: "A $40\\ \\mathrm{cm}$ steering wheel on a $5.0\\ \\mathrm{cm}$ pinion gives $IMA = 8$.",
      },
      {
        term: "Rope capacity",
        kind: "insight",
        statement: "Drum diameter also sets **rope speed and capacity**: small drums lift slowly with thin-rope limits.",
        detail: " multilayer winding changes effective $r$ — rate the outer layer conservatively.",
      },
      {
        term: "Efficiency of journals",
        kind: "method",
        statement: "Well-greased journal bearings reach **$85$-$95\\%$**; dry or loaded bushings fall far below — $MA = \\eta \\times IMA$.",
        detail: "Ball bearings on the axle approach the ideal most closely.",
      },
    ],
    examples: [
      {
        title: "Windlass well lift",
        problem: "A windlass has crank $R = 0.400\\ \\mathrm{m}$ and drum $r = 0.0800\\ \\mathrm{m}$. Effort $120\\ \\mathrm{N}$: what bucket weight lifts (ideal)?",
        steps: [
          { label: "MA", text: "$IMA = 0.400/0.0800 = 5.00$." },
          { label: "Load", text: "$W = 120 \\times 5.00 = 600\\ \\mathrm{N}$." },
          { label: "Real", text: "At $85\\%$ efficiency: $510\\ \\mathrm{N}$ (about $52\\ \\mathrm{kg}$ of water plus bucket)." },
        ],
        result: "$600\\ \\mathrm{N}$ ideal; $510\\ \\mathrm{N}$ at $85\\%$.",
      },
      {
        title: "Screwdriver torque",
        problem: "A $3.00\\ \\mathrm{cm}$ handle drives a $0.400\\ \\mathrm{cm}$ shaft with $25.0\\ \\mathrm{N}$ of grip force. Find screw torque.",
        steps: [
          { label: "Force at rim", text: "Torque in: $25.0 \\times 0.0300 = 0.750\\ \\mathrm{N \\cdot m}$." },
          { label: "Ratio view", text: "$IMA = 3.00/0.400 = 7.50$ over shaft-surface force." },
          { label: "Report", text: "$0.750\\ \\mathrm{N \\cdot m}$ at the screw — fat handles turn stubborn screws." },
        ],
        result: "$0.750\\ \\mathrm{N \\cdot m}$ of screw torque.",
      },
    ],
    keyTakeaways: [
      "$IMA = R/r$; torque equality $F_eR = F_lr$ solves windlasses.",
      "Cranks and handwheels are wheels of crank radius.",
      "Real $MA$ is $\\eta \\times IMA$ after bearing losses.",
    ],
    quiz: [
      {
        q: "Crank $0.400\\ \\mathrm{m}$, drum $0.0800\\ \\mathrm{m}$, $120\\ \\mathrm{N}$ lifts ideally",
        options: ["$24.0\\ \\mathrm{N}$", "$600\\ \\mathrm{N}$", "$120\\ \\mathrm{N}$", "$3840\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$IMA = 5$; $120 \\times 5 = 600\\ \\mathrm{N}$.",
      },
      {
        q: "Wheel-and-axle torque relation is",
        options: ["$F_e + F_l = 0$", "$F_eR = F_lr$", "$F_eR^2 = F_l$", "Independent of radii"],
        answer: 1,
        explanation: "Shared shaft equalizes torque ideally.",
      },
      {
        q: "At $85\\%$ the windlass above lifts about",
        options: ["$600\\ \\mathrm{N}$", "$510\\ \\mathrm{N}$", "$706\\ \\mathrm{N}$", "$85\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$600 \\times 0.85 = 510\\ \\mathrm{N}$.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch10-s4',
    readingTime: 6,
    intro: "Pulleys redirect tension and multiply it by rope count. This section counts supporting ropes, separates fixed from movable blocks, and prices real efficiencies.",
    objectives: [
      "Count supporting ropes to find pulley IMA",
      "Solve gun-tackle and luff-tackle tensions",
      "Apply pulley efficiency to predict real effort",
    ],
    concepts: [
      {
        term: "Fixed pulley",
        kind: "definition",
        statement: "A **fixed pulley changes direction only**: $IMA = 1$, $MA \\approx 1$ — convenient, not force-multiplying.",
        detail: "Flag halyards and hoist redirects are fixed pulleys.",
      },
      {
        term: "Movable pulley",
        kind: "theorem",
        statement: "A **movable pulley doubles force**: $IMA = 2$ because two rope segments share the load.",
        detail: "$500\\ \\mathrm{N}$ hangs on two $250\\ \\mathrm{N}$ segments.",
      },
      {
        term: "Rope-count rule",
        kind: "theorem",
        statement: "**$IMA$ equals the number of rope parts supporting the movable block** — count them in the diagram.",
        detail: "Four supporting parts give $IMA = 4$: pull $4\\ \\mathrm{m}$ to lift $1\\ \\mathrm{m}$.",
      },
      {
        term: "Tackle analysis",
        kind: "method",
        statement: "Ideal effort is **$F = W/n$** for $n$ supporting ropes; real effort is **$F = W/(n\\eta)$** with block efficiency.",
        detail: "A $2000\\ \\mathrm{N}$ engine on $4$ parts at $80\\%$ needs $625\\ \\mathrm{N}$ of pull.",
      },
      {
        term: "Block friction",
        kind: "insight",
        statement: "Each sheave costs **$3$-$5\\%$** in friction: many-part tackles gain force but bleed efficiency per wheel.",
        detail: "Four-sheave tackles typically land near $75$-$85\\%$ overall.",
      },
    ],
    figures: [
      {
        caption: "Four-part tackle: $IMA = 4$, effort $F = W/4$ ideally over $4\\times$ rope pull",
        svg: '<svg role="img" aria-label="Four-part tackle: IMA = 4, effort F = W/4 ideally over 4times rope pull" viewBox="0 0 400 170" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><rect x="120" y="20" width="160" height="18" rx="4"/><rect x="150" y="120" width="100" height="18" rx="4"/></g><g stroke="currentColor" stroke-width="1.8" fill="none"><line x1="150" y1="38" x2="150" y2="120"/><line x1="190" y1="38" x2="190" y2="120"/><line x1="230" y1="38" x2="230" y2="120"/><line x1="270" y1="38" x2="270" y2="102"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="278" y="115">F</text><text x="160" y="158">W on 4 parts: IMA = 4</text></g></svg>',
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: "Engine-hoist pull",
        problem: "A $2000\\ \\mathrm{N}$ engine hangs on a $4$-part tackle at $80\\%$ efficiency. What pull is needed, and how much rope for $1.50\\ \\mathrm{m}$ of lift?",
        steps: [
          { label: "Ideal", text: "$F_{ideal} = 2000/4 = 500\\ \\mathrm{N}$." },
          { label: "Real", text: "$F = 500/0.80 = 625\\ \\mathrm{N}$." },
          { label: "Rope", text: "Pull $4 \\times 1.50 = 6.00\\ \\mathrm{m}$ of rope." },
        ],
        result: "$625\\ \\mathrm{N}$ pull; $6.00\\ \\mathrm{m}$ of rope.",
      },
      {
        title: "Movable pulley check",
        problem: "A movable pulley supports $600\\ \\mathrm{N}$ with $320\\ \\mathrm{N}$ of effort. Find $MA$ and efficiency.",
        steps: [
          { label: "MA", text: "$MA = 600/320 = 1.875$." },
          { label: "Efficiency", text: "$\\eta = MA/IMA = 1.875/2 = 0.9375 = 93.8\\%$." },
          { label: "Loss", text: "One sheave near $94\\%$ — a good ball-bearing block." },
        ],
        result: "$MA = 1.88$; $93.8\\%$ efficient.",
      },
    ],
    keyTakeaways: [
      "Fixed pulleys redirect; movable pulleys multiply by rope count.",
      "$IMA$ is supporting-rope count; $F = W/(n\\eta)$ really.",
      "Each sheave costs a few percent efficiency.",
    ],
    quiz: [
      {
        q: "$2000\\ \\mathrm{N}$ on 4 parts at $80\\%$ needs pull",
        options: ["$500\\ \\mathrm{N}$", "$625\\ \\mathrm{N}$", "$2000\\ \\mathrm{N}$", "$400\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$2000/4 = 500$ ideal; $500/0.80 = 625\\ \\mathrm{N}$.",
      },
      {
        q: "Lifting $1.50\\ \\mathrm{m}$ on 4 parts pulls rope",
        options: ["$1.50\\ \\mathrm{m}$", "$6.00\\ \\mathrm{m}$", "$0.375\\ \\mathrm{m}$", "$4.00\\ \\mathrm{m}$"],
        answer: 1,
        explanation: "Rope distance is $IMA \\times$ load distance.",
      },
      {
        q: "$600\\ \\mathrm{N}$ on one movable pulley with $320\\ \\mathrm{N}$ effort is efficiency",
        options: ["$187\\%$", "$93.8\\%$", "$53.3\\%$", "$50.0\\%$"],
        answer: 1,
        explanation: "$MA = 1.875$; $1.875/2 = 93.8\\%$.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch10-s5',
    readingTime: 6,
    intro: "Ramps trade a long gentle push for a short brutal lift. This section rates inclined planes by length-over-height and solves skid, dolly, and loading problems with friction noted.",
    objectives: [
      "Compute inclined-plane IMA from $L/h$",
      "Find ideal push force for a given slope",
      "Correct for friction in real pushes",
    ],
    concepts: [
      {
        term: "Incline IMA",
        kind: "theorem",
        statement: "**$IMA = L/h = 1/\\sin\\theta$**: a $4.00\\ \\mathrm{m}$ ramp rising $1.00\\ \\mathrm{m}$ gives $IMA = 4$.",
        detail: "Gentler slopes (longer $L$) multiply force more and extend the push proportionally.",
      },
      {
        term: "Ideal push force",
        kind: "method",
        statement: "Frictionless push up the slope is **$F = W\\sin\\theta = W(h/L)$** parallel to the plane.",
        detail: "$2000\\ \\mathrm{N}$ up the $4{:}1$ ramp needs $500\\ \\mathrm{N}$ ideally.",
      },
      {
        term: "Normal on a slope",
        kind: "method",
        statement: "The plane supports **$N = W\\cos\\theta$** perpendicular — the base of slope-friction estimates.",
        detail: "Steeper slopes unload the plane and load the push simultaneously.",
      },
      {
        term: "Friction surcharge",
        kind: "method",
        statement: "Real pushes add **$f = \\mu N = \\mu W\\cos\\theta$** to the ideal: $F_{real} = W\\sin\\theta + \\mu W\\cos\\theta$.",
        detail: "Rollers and grease attack the second term directly.",
      },
      {
        term: "Wedge preview",
        kind: "insight",
        statement: "Two inclines back-to-back make a **wedge** (next section): the same $L/h$ logic splits outward instead of lifting.",
        detail: "Axes, knives, and doorstops are portable inclines.",
      },
    ],
    examples: [
      {
        title: "Loading-ramp push",
        problem: "A $2000\\ \\mathrm{N}$ crate goes up a $4.00\\ \\mathrm{m}$ ramp rising $1.00\\ \\mathrm{m}$. Find ideal push; then with $\\mu = 0.20$.",
        steps: [
          { label: "Ideal", text: "$F = 2000 \\times 1.00/4.00 = 500\\ \\mathrm{N}$." },
          { label: "Angle data", text: "$\\sin\\theta = 0.25$, $\\cos\\theta = 0.9682$; $N = 2000 \\times 0.9682 = 1936\\ \\mathrm{N}$." },
          { label: "Real", text: "$F = 500 + 0.20(1936) = 500 + 387 = 887\\ \\mathrm{N}$." },
        ],
        result: "$500\\ \\mathrm{N}$ ideal; $887\\ \\mathrm{N}$ with friction.",
      },
      {
        title: "Truck-bed ramp choice",
        problem: "A $1.20\\ \\mathrm{m}$-high bed must keep pushes under $600\\ \\mathrm{N}$ for a $2400\\ \\mathrm{N}$ load (ideal). How long a ramp?",
        steps: [
          { label: "IMA needed", text: "$IMA = 2400/600 = 4.00$." },
          { label: "Length", text: "$L = 4.00 \\times 1.20 = 4.80\\ \\mathrm{m}$." },
          { label: "Reality", text: "Friction demands longer or rollers — order $5.5$-$6\\ \\mathrm{m}$ of ramp." },
        ],
        result: "$4.80\\ \\mathrm{m}$ ideal; longer in practice.",
      },
    ],
    keyTakeaways: [
      "$IMA = L/h$; ideal push is $W(h/L)$ along the slope.",
      "Friction adds $\\mu W\\cos\\theta$ to every real push.",
      "Lengthen or roll the load to beat friction.",
    ],
    quiz: [
      {
        q: "$2000\\ \\mathrm{N}$ up a $4\\ \\mathrm{m}$ ramp rising $1\\ \\mathrm{m}$ needs ideally",
        options: ["$2000\\ \\mathrm{N}$", "$500\\ \\mathrm{N}$", "$8000\\ \\mathrm{N}$", "$250\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$2000/4 = 500\\ \\mathrm{N}$.",
      },
      {
        q: "With $\\mu = 0.20$ the push above becomes about",
        options: ["$500\\ \\mathrm{N}$", "$887\\ \\mathrm{N}$", "$1936\\ \\mathrm{N}$", "$387\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$500 + 0.20(1936) = 887\\ \\mathrm{N}$.",
      },
      {
        q: "The plane supports normal force",
        options: ["$W\\sin\\theta$", "$W\\cos\\theta$", "$W\\tan\\theta$", "Zero"],
        answer: 1,
        explanation: "Perpendicular component of weight.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch10-s6',
    readingTime: 6,
    intro: "A screw is an incline wrapped around a cylinder, trading many easy turns for powerful advance. This section derives its large MA and tightens bolts to torque honestly.",
    objectives: [
      "Compute screw IMA from handle radius and pitch",
      "Relate torque to clamping force",
      "Explain self-locking from friction",
    ],
    concepts: [
      {
        term: "Screw IMA",
        kind: "theorem",
        statement: "One turn advances the pitch $p$ while effort circles $2\\pi r$: **$IMA = 2\\pi r/p$** — hundreds are routine.",
        detail: "$r = 0.200\\ \\mathrm{m}$, $p = 2.00\\ \\mathrm{mm}$ gives $IMA = 628$.",
      },
      {
        term: "Clamping force",
        kind: "method",
        statement: "Ideal clamp is **$F = F_{effort}(2\\pi r/p)$**; real is $\\eta \\approx 30$-$50\\%$ of that after thread friction.",
        detail: "$50\\ \\mathrm{N}$ on the $628$-IMA handle ideals $31{,}400\\ \\mathrm{N}$ of clamp.",
      },
      {
        term: "Pitch versus lead",
        kind: "definition",
        statement: "**Pitch** is crest spacing; **lead** is advance per turn ($lead = pitch \\times starts$) — multi-start threads advance faster with lower MA.",
        detail: "Double-start halves the $IMA$ but doubles speed per turn.",
      },
      {
        term: "Self-locking",
        kind: "insight",
        statement: "Shallow thread angles let **friction hold the load**: ordinary bolts stay put without back-driving — the flip side of low efficiency.",
        detail: "Steep ball-screw leads reverse this, back-driving freely and needing brakes.",
      },
      {
        term: "Torque-tension scatter",
        kind: "insight",
        statement: "Bolt **torque predicts tension only roughly** ($\\pm 25\\%$) because friction dominates — lubricate consistently and calibrate.",
        detail: "Critical joints use turn-of-nut or stretch control instead of torque alone.",
      },
    ],
    figures: [
      {
        caption: "Screw as wrapped incline: one turn of circumference $2\\pi r$ advances pitch $p$",
        svg: '<svg role="img" aria-label="Screw as wrapped incline: one turn of circumference 2pi r advances pitch p" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><polygon points="40,110 360,60 360,90 40,140"/></g><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="40" y1="110" x2="40" y2="140"/><line x1="360" y1="60" x2="360" y2="90"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="150" y="130">wrapped ramp: rise p per 2πr</text></g></svg>',
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Jack-screw clamp",
        problem: "A press screw has handle $r = 0.250\\ \\mathrm{m}$, pitch $p = 3.00\\ \\mathrm{mm}$, effort $60.0\\ \\mathrm{N}$, efficiency $40\\%$. Find clamping force.",
        steps: [
          { label: "IMA", text: "$IMA = 2\\pi(250)/3.00 = 1570.8/3.00 = 523.6$." },
          { label: "Ideal", text: "$60.0 \\times 523.6 = 31{,}416\\ \\mathrm{N}$." },
          { label: "Real", text: "$0.40 \\times 31{,}416 = 12{,}566\\ \\mathrm{N} \\approx 12.6\\ \\mathrm{kN}$." },
        ],
        result: "About $12.6\\ \\mathrm{kN}$ of clamp from a $60\\ \\mathrm{N}$ hand.",
      },
      {
        title: "Bolt advance count",
        problem: "A $1.50\\ \\mathrm{mm}$-pitch bolt must advance $18.0\\ \\mathrm{mm}$. How many turns?",
        steps: [
          { label: "Turns", text: "$18.0/1.50 = 12.0$ turns." },
          { label: "Effort distance", text: "At $r = 0.150\\ \\mathrm{m}$ the hand travels $12 \\times 2\\pi(0.150) = 11.31\\ \\mathrm{m}$." },
          { label: "Trade", text: "Eleven meters of easy circling for $18\\ \\mathrm{mm}$ of crushing advance." },
        ],
        result: "$12$ turns; $11.3\\ \\mathrm{m}$ of hand travel.",
      },
    ],
    keyTakeaways: [
      "$IMA = 2\\pi r/p$ makes screws the highest-MA simple machine.",
      "Real clamp is $\\eta \\approx 0.3$-$0.5$ of ideal after thread friction.",
      "Friction self-locks ordinary threads; steep leads need brakes.",
    ],
    quiz: [
      {
        q: "Handle $0.250\\ \\mathrm{m}$, pitch $3.00\\ \\mathrm{mm}$ gives IMA about",
        options: ["$83$", "$524$", "$0.012$", "$1571$"],
        answer: 1,
        explanation: "$2\\pi(250)/3.00 = 524$.",
      },
      {
        q: "$60\\ \\mathrm{N}$ on that screw at $40\\%$ clamps about",
        options: ["$31.4\\ \\mathrm{kN}$", "$12.6\\ \\mathrm{kN}$", "$7.64\\ \\mathrm{kN}$", "$0.144\\ \\mathrm{kN}$"],
        answer: 1,
        explanation: "$60 \\times 524 \\times 0.40 = 12.6\\ \\mathrm{kN}$.",
      },
      {
        q: "Ordinary bolts stay tight because",
        options: ["High efficiency", "Thread friction self-locks the shallow helix", "Stretch eliminates friction", "Torque is exact"],
        answer: 1,
        explanation: "Low efficiency is the price of holding without back-driving.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch10-s7',
    readingTime: 4,
    intro: "Knives, axes, and chisels split by driving a thin incline sideways. This section rates wedges by length-to-thickness and shows why thin, slick wedges split best.",
    objectives: [
      "Compute wedge IMA from length and thickness",
      "Explain splitting-force multiplication",
      "Choose wedge angles for splitting versus holding",
    ],
    concepts: [
      {
        term: "Wedge IMA",
        kind: "theorem",
        statement: "**$IMA = L/t$** (length over max thickness): a $200\\ \\mathrm{mm}$ wedge $20\\ \\mathrm{mm}$ thick gives $IMA = 10$.",
        detail: "Thinner, longer wedges multiply harder and drive deeper per blow.",
      },
      {
        term: "Splitting action",
        kind: "insight",
        statement: "Driving force forward becomes **large normal forces sideways** on both faces — the log feels multiples of the maul blow.",
        detail: "Friction on both faces is the efficiency tax, as with screws.",
      },
      {
        term: "Cutting edge as wedge",
        kind: "insight",
        statement: "Knife and chisel edges are **micro-wedges**: acute angles cut easily but dull fast; obtuse edges endure but push harder.",
        detail: "Wood-splitting $15^{\\circ}$ versus metal-cutting $60^{\\circ}$ edges embody the trade.",
      },
      {
        term: "Holding versus splitting",
        kind: "method",
        statement: "Thin slick wedges **split**; thick rough wedges **hold** (doorstops, shims) by friction self-locking.",
        detail: "Holding wedges reverse the design goal: maximize grip, not advance.",
      },
      {
        term: "Impact driving",
        kind: "method",
        statement: "Mallets deliver **impulse $Ft$** that the wedge converts to splitting work — sharp faces concentrate the stress.",
        detail: "Stress is force over edge area, so honed edges split at lower blows.",
      },
    ],
    examples: [
      {
        title: "Splitting-wedge force",
        problem: "A $250\\ \\mathrm{mm}$ wedge $25.0\\ \\mathrm{mm}$ thick is driven with $800\\ \\mathrm{N}$. Estimate ideal splitting force.",
        steps: [
          { label: "MA", text: "$IMA = 250/25.0 = 10.0$." },
          { label: "Force", text: "$F_{split} = 800 \\times 10.0 = 8000\\ \\mathrm{N}$ ideally across the faces." },
          { label: "Real", text: "At $60\\%$ with friction: about $4800\\ \\mathrm{N}$ still splits green wood." },
        ],
        result: "$8.00\\ \\mathrm{kN}$ ideal; roughly $4.80\\ \\mathrm{kN}$ real.",
      },
      {
        title: "Doorstop holding",
        problem: "Explain why a rough $10^{\\circ}$ rubber doorstop holds but a greased steel one slips.",
        steps: [
          { label: "Geometry", text: "Both have $IMA = L/t \\approx 5.7$ driving in easily." },
          { label: "Friction", text: "Rubber $\\mu \\approx 1.0$ self-locks; greased steel $\\mu \\approx 0.1$ back-drives under the door load." },
          { label: "Design", text: "Holding wedges maximize $\\mu$; splitting wedges minimize it." },
        ],
        result: "Friction decides: high-$\\mu$ holds, low-$\\mu$ slips.",
      },
    ],
    keyTakeaways: [
      "Wedge $IMA = L/t$; thin and long splits hardest.",
      "Forward drive becomes multiplied sideways normal force.",
      "Rough wedges hold; slick wedges split.",
    ],
    quiz: [
      {
        q: "$250\\ \\mathrm{mm}$ wedge, $25\\ \\mathrm{mm}$ thick, $800\\ \\mathrm{N}$ drive splits ideally with",
        options: ["$80\\ \\mathrm{N}$", "$8000\\ \\mathrm{N}$", "$800\\ \\mathrm{N}$", "$32\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$IMA = 10$; $800 \\times 10 = 8000\\ \\mathrm{N}$.",
      },
      {
        q: "A doorstop holds best when it is",
        options: ["Thin and greased", "Thick-ish and high-friction", "Perfectly round", "Made of ice"],
        answer: 1,
        explanation: "Holding wants friction self-locking, not easy advance.",
      },
      {
        q: "Knife edges cut easily when",
        options: ["Obtuse and dull", "Acute and honed, concentrating stress", "Flat and wide", "Serrated only"],
        answer: 1,
        explanation: "Acute micro-wedges focus force onto tiny area.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch10-s8',
    readingTime: 5,
    intro: "Real shop machines chain simple machines: crank to gear to screw to lever. This section multiplies stage advantages into overall MA and traces overall efficiency.",
    objectives: [
      "Multiply stage IMAs into overall IMA",
      "Multiply stage efficiencies into overall efficiency",
      "Analyze a crank-gear-screw press end to end",
    ],
    concepts: [
      {
        term: "Overall mechanical advantage",
        kind: "theorem",
        statement: "**Overall $IMA = \\prod IMA_i$** and **overall $MA = \\prod MA_i$** — stages multiply, never add.",
        detail: "Lever $4\\times$ times screw $100\\times$ gives $400\\times$ overall ideally.",
      },
      {
        term: "Overall efficiency",
        kind: "theorem",
        statement: "**Overall $\\eta = \\prod \\eta_i$**: $90\\%$, $80\\%$, $40\\%$ stages chain to $28.8\\%$ overall.",
        detail: "The weakest stage dominates — improve it first.",
      },
      {
        term: "Stage matching",
        kind: "method",
        statement: "Size each stage for **compatible force, travel, and speed**: a huge screw MA starved by a tiny crank travel stalls the job.",
        detail: "Check force, distance, and power continuity at every interface.",
      },
      {
        term: "Back-drivability",
        kind: "insight",
        statement: "Screw or worm stages can make trains **one-way**: easy forward cranking, locked against back-driving — a safety feature or a nuisance.",
        detail: "Hoists exploit it; positioning servos must design around it.",
      },
      {
        term: "Documenting the chain",
        kind: "method",
        statement: "Draw the **power flow with per-stage $IMA$, $MA$, $\\eta$** so losses and limits are auditable.",
        detail: "Nameplate overall ratings must reconcile with the product of stages.",
      },
    ],
    examples: [
      {
        title: "Press train overall",
        problem: "A press chains lever $IMA = 5.0$ ($\\eta = 0.90$), gears $IMA = 4.0$ ($\\eta = 0.85$), screw $IMA = 120$ ($\\eta = 0.40$). Find overall $IMA$, $\\eta$, and clamp from $80.0\\ \\mathrm{N}$.",
        steps: [
          { label: "IMA", text: "$5.0 \\times 4.0 \\times 120 = 2400$." },
          { label: "Efficiency", text: "$0.90 \\times 0.85 \\times 0.40 = 0.306 = 30.6\\%$." },
          { label: "Clamp", text: "$MA = 2400 \\times 0.306 = 734$; $F = 80.0 \\times 734 = 58{,}752\\ \\mathrm{N} \\approx 58.8\\ \\mathrm{kN}$." },
        ],
        result: "$IMA = 2400$; $\\eta = 30.6\\%$; clamp $58.8\\ \\mathrm{kN}$.",
      },
      {
        title: "Bicycle drive chain",
        problem: "Pedal crank $0.170\\ \\mathrm{m}$ drives a $44$-tooth ring to a $16$-tooth cog on a $0.340\\ \\mathrm{m}$ wheel. Find speed versus force trade.",
        steps: [
          { label: "Gear", text: "Ratio $44/16 = 2.75$: wheel spins $2.75\\times$ crank speed." },
          { label: "Lever arms", text: "Crank $0.170$ versus wheel $0.340$: force at ground is $(0.170/0.340)/2.75 = 0.182\\times$ pedal force." },
          { label: "Trade", text: "Fast gearing: speed multiplied, hill force divided — riders shift to invert it." },
        ],
        result: "Ground force $0.182\\times$ pedal force at $2.75\\times$ cadence rate.",
      },
    ],
    keyTakeaways: [
      "Stage IMAs and efficiencies multiply into overall ratings.",
      "Weakest efficiency dominates — fix it first.",
      "Verify force, travel, and power at every interface.",
    ],
    quiz: [
      {
        q: "Stages $5 \\times 4 \\times 120$ give overall IMA",
        options: ["$129$", "$2400$", "$29$", "$600$"],
        answer: 1,
        explanation: "$5 \\times 4 \\times 120 = 2400$.",
      },
      {
        q: "Stages $90\\%$, $85\\%$, $40\\%$ chain to overall",
        options: ["$71.7\\%$", "$30.6\\%$", "$215\\%$", "$55\\%$"],
        answer: 1,
        explanation: "$0.90 \\times 0.85 \\times 0.40 = 0.306$.",
      },
      {
        q: "$80\\ \\mathrm{N}$ through that press clamps about",
        options: ["$192\\ \\mathrm{kN}$", "$58.8\\ \\mathrm{kN}$", "$24.5\\ \\mathrm{kN}$", "$80\\ \\mathrm{N}$"],
        answer: 1,
        explanation: "$MA = 734$; $80 \\times 734 = 58.8\\ \\mathrm{kN}$.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch10-s9',
    readingTime: 5,
    intro: "Friction is the tax collector on every machine: it trims MA below IMA and turns the difference into heat. This section measures that tax and shows how lubrication and bearings cut it.",
    objectives: [
      "Compute lost work from $IMA$, $MA$ data",
      "Explain friction sources per machine type",
      "Select friction-reduction measures correctly",
    ],
    concepts: [
      {
        term: "Friction loss accounting",
        kind: "method",
        statement: "**Lost work $= W_{in} - W_{out} = W_{in}(1 - \\eta)$** in joules — heat, wear, and noise share it.",
        detail: "$2000\\ \\mathrm{J}$ in at $80\\%$ loses $400\\ \\mathrm{J}$ to friction.",
      },
      {
        term: "Sliding versus rolling",
        kind: "insight",
        statement: "**Sliding friction (threads, wedges, belts) costs far more than rolling friction (bearings, rollers)** — convert slides to rolls where possible.",
        detail: "Ball screws ($90\\%$) crush plain screws ($40\\%$) on efficiency for this reason.",
      },
      {
        term: "Lubrication regimes",
        kind: "method",
        statement: "**Boundary, mixed, and full-film lubrication** separate surfaces progressively; correct viscosity and supply sustain the film.",
        detail: "Dry starts wear most — pre-lube and sealed greasing pay back.",
      },
      {
        term: "Breakaway versus running",
        kind: "definition",
        statement: "**Breakaway (static) effort exceeds running effort**: size handles and motors for starting, then cruise efficiently.",
        detail: "Jacks and winches need their biggest pull on the first stroke.",
      },
      {
        term: "Maintenance dividend",
        kind: "insight",
        statement: "**Alignment, tension, and cleanliness restore rated $\\eta$**: misaligned belts and gritty threads silently double the friction tax.",
        detail: "Scheduled inspection is efficiency maintenance, not just reliability.",
      },
    ],
    figures: [
      {
        caption: "Efficiency waterfall: input work splits into useful output plus friction heat per stage",
        svg: '<svg role="img" aria-label="Efficiency waterfall: input work splits into useful output plus friction heat per stage" viewBox="0 0 400 150" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g fill="currentColor" opacity="0.9"><rect x="40" y="40" width="320" height="26"/></g><g fill="currentColor" opacity="0.55"><rect x="40" y="70" width="250" height="26"/></g><g fill="currentColor" opacity="0.3"><rect x="40" y="100" width="150" height="26"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="45" y="58">in: 100%</text><text x="45" y="88">after gears: 78%</text><text x="45" y="118">after screw: 31%</text></g></svg>',
        afterConcept: 1,
      },
    ],
    examples: [
      {
        title: "Tackle heat loss",
        problem: "A tackle takes $W_{in} = 3000\\ \\mathrm{J}$ to deliver $W_{out} = 2400\\ \\mathrm{J}$. Find efficiency and heat.",
        steps: [
          { label: "Efficiency", text: "$\\eta = 2400/3000 = 0.80 = 80\\%$." },
          { label: "Heat", text: "$3000 - 2400 = 600\\ \\mathrm{J}$ warms sheaves and rope." },
          { label: "Per lift", text: "Ten lifts dump $6000\\ \\mathrm{J}$ — noticeable warming on small blocks." },
        ],
        result: "$80\\%$ efficient; $600\\ \\mathrm{J}$ lost per lift.",
      },
      {
        title: "Screw upgrade payoff",
        problem: "A $10.0\\ \\mathrm{kN}$ press screw ($IMA = 500$) upgrades from $\\eta = 0.35$ to ball-screw $0.90$. Compare handle forces.",
        steps: [
          { label: "Before", text: "$MA = 500 \\times 0.35 = 175$; $F = 10{,}000/175 = 57.1\\ \\mathrm{N}$." },
          { label: "After", text: "$MA = 500 \\times 0.90 = 450$; $F = 10{,}000/450 = 22.2\\ \\mathrm{N}$." },
          { label: "Payoff", text: "Same clamp at $39\\%$ of the effort — plus back-drivability to manage." },
        ],
        result: "$57.1\\ \\mathrm{N}$ drops to $22.2\\ \\mathrm{N}$ of handle effort.",
      },
    ],
    keyTakeaways: [
      "Lost work is $W_{in}(1 - \\eta)$ — audit it in joules.",
      "Rolling beats sliding; films beat boundary contact.",
      "Size for breakaway; maintain alignment and lubrication.",
    ],
    quiz: [
      {
        q: "$3000\\ \\mathrm{J}$ in, $2400\\ \\mathrm{J}$ out loses",
        options: ["$5400\\ \\mathrm{J}$", "$600\\ \\mathrm{J}$", "$0\\ \\mathrm{J}$", "$2400\\ \\mathrm{J}$"],
        answer: 1,
        explanation: "$3000 - 2400 = 600\\ \\mathrm{J}$ to heat.",
      },
      {
        q: "Upgrading $35\\%$ to $90\\%$ on $IMA = 500$ changes $10\\ \\mathrm{kN}$ effort from",
        options: ["$57.1$ to $22.2\\ \\mathrm{N}$", "$22.2$ to $57.1\\ \\mathrm{N}$", "$500$ to $900\\ \\mathrm{N}$", "No change"],
        answer: 0,
        explanation: "$10{,}000/175 = 57.1$; $10{,}000/450 = 22.2\\ \\mathrm{N}$.",
      },
      {
        q: "The largest friction savings come from",
        options: ["More sliding contact", "Converting slides to rolling with proper lubrication", "Removing all lubricant", "Misaligning belts"],
        answer: 1,
        explanation: "Rolling plus full-film lubrication minimizes the friction coefficient.",
      },
    ],
  },
]
