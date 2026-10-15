import type { SectionContent } from '../library'

// ============================================================================
// Ewen / Schurter / Gundersen — Applied Physics, 11th edition
// Chapter 4: Motion (pp 110-139)
// ============================================================================

export const ewenCh4Content: SectionContent[] = [
  {
    sectionId: 'hall-ch2-s22',
    readingTime: 5,
    intro: "A speedometer number and a velocity arrow are not the same thing, and confusing them wrecks motion analysis. This section fixes average versus instantaneous rates and the sign language of direction.",
    objectives: [
      "Distinguish average from instantaneous speed and velocity",
      "Compute average speed and velocity from distance, displacement, and time",
      "Interpret position-time graphs by slope",
    ],
    concepts: [
      {
        term: "Average speed",
        kind: "definition",
        statement: "**Average speed** is path length over elapsed time: **$\\bar{v} = d/t$** (scalar, e.g. $\\mathrm{m/s}$ or $\\mathrm{mi/h}$).",
        detail: "A $240\\ \\mathrm{km}$ trip in $3.00\\ \\mathrm{h}$ averages $80.0\\ \\mathrm{km/h}$ regardless of stops.",
      },
      {
        term: "Average velocity",
        kind: "definition",
        statement: "**Average velocity** is displacement over time: **$\\bar{\\vec{v}} = \\Delta\\vec{x}/t$** — sign (direction) included.",
        detail: "A round trip has zero average velocity but nonzero average speed.",
      },
      {
        term: "Instantaneous rate",
        kind: "definition",
        statement: "**Instantaneous** speed/velocity is the rate at one instant — what the speedometer shows — found from the **tangent slope** of the position graph.",
        detail: "Averages cover intervals; the speedometer covers now.",
      },
      {
        term: "Position-time slope",
        kind: "method",
        statement: "On an $x$-$t$ graph, **slope is velocity**: steep means fast, flat means stopped, negative slope means returning.",
        detail: "Curved $x$-$t$ means changing velocity — acceleration, the next section.",
      },
      {
        term: "Unit bridges for speed",
        kind: "notation",
        statement: "**$1\\ \\mathrm{m/s} = 3.6\\ \\mathrm{km/h}$** and $1\\ \\mathrm{mi/h} = 1.467\\ \\mathrm{ft/s} = 0.447\\ \\mathrm{m/s}$ convert rate units.",
        detail: "$60\\ \\mathrm{mi/h}$ is $88\\ \\mathrm{ft/s}$ — the number behind following-distance rules.",
      },
    ],
    figures: [
      {
        caption: "Position-time graph: chord slope is average velocity, tangent slope is instantaneous",
        svg: '<svg role="img" aria-label="Position-time graph: chord slope is average velocity, tangent slope is instantaneous" viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="40" y1="150" x2="370" y2="150"/><line x1="40" y1="150" x2="40" y2="20"/></g><g stroke="currentColor" stroke-width="2.5" fill="none"><path d="M 50 140 Q 180 120 340 40"/></g><g stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4" fill="none"><line x1="50" y1="140" x2="340" y2="40"/><line x1="200" y1="105" x2="300" y2="75"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="250" y="135">chord: average</text><text x="230" y="65">tangent: instantaneous</text></g></svg>',
        afterConcept: 4,
      },
    ],
    examples: [
      {
        title: "Highway average speed",
        problem: "A truck covers $240\\ \\mathrm{km}$ in $3.00\\ \\mathrm{h}$ including a stop. Find average speed, and express it in $\\mathrm{m/s}$.",
        steps: [
          { label: "Average", text: "$\\bar{v} = 240/3.00 = 80.0\\ \\mathrm{km/h}$." },
          { label: "Convert", text: "$80.0/3.6 = 22.2\\ \\mathrm{m/s}$." },
          { label: "Interpret", text: "Stops lower the average below the cruising speedometer readings." },
        ],
        result: "$80.0\\ \\mathrm{km/h}$ ($22.2\\ \\mathrm{m/s}$) average.",
      },
      {
        title: "Round trip velocity",
        problem: "A technician drives $15.0\\ \\mathrm{km}$ to a site and back in $0.800\\ \\mathrm{h}$ total. Find average speed and average velocity.",
        steps: [
          { label: "Speed", text: "Path $30.0\\ \\mathrm{km}$ over $0.800\\ \\mathrm{h}$: $37.5\\ \\mathrm{km/h}$." },
          { label: "Velocity", text: "Displacement zero (start equals finish): $0\\ \\mathrm{km/h}$." },
          { label: "Lesson", text: "Speed accumulates path; velocity only cares endpoints." },
        ],
        result: "Average speed $37.5\\ \\mathrm{km/h}$; average velocity zero.",
      },
    ],
    keyTakeaways: [
      "Average speed uses path $d/t$; average velocity uses displacement $\\Delta x/t$.",
      "Speedometer and tangent slope give the instantaneous rate.",
      "Convert rates with $1\\ \\mathrm{m/s} = 3.6\\ \\mathrm{km/h}$.",
    ],
    quiz: [
      {
        q: "$240\\ \\mathrm{km}$ in $3.00\\ \\mathrm{h}$ averages",
        options: ["$80.0\\ \\mathrm{km/h}$", "$720\\ \\mathrm{km/h}$", "$0.0125\\ \\mathrm{km/h}$", "$243\\ \\mathrm{km/h}$"],
        answer: 0,
        explanation: "$240/3.00 = 80.0\\ \\mathrm{km/h}$ ($22.2\\ \\mathrm{m/s}$).",
      },
      {
        q: "A round trip average velocity is zero because",
        options: ["No time passed", "Displacement is zero", "Speed was zero", "The road was straight"],
        answer: 1,
        explanation: "Start equals finish, so $\\Delta x = 0$ regardless of path.",
      },
      {
        q: "On an $x$-$t$ graph the velocity is the",
        options: ["Area under the curve", "Slope of the curve", "Intercept", "Curvature sign only"],
        answer: 1,
        explanation: "Rise (position) over run (time) is velocity at every scale.",
      },
    ],
  },
  {
    sectionId: 'ewen-ch4-s2',
    readingTime: 6,
    intro: "Acceleration is the rate at which velocity itself changes, and its sign tells whether motion speeds up or slows down along the chosen axis. This section quantifies it and reads it off velocity-time graphs.",
    objectives: [
      "Compute acceleration from velocity change and time",
      "Distinguish acceleration from velocity and deceleration",
      "Find displacement from the area under a $v$-$t$ graph",
    ],
    concepts: [
      {
        term: "Acceleration defined",
        kind: "definition",
        statement: "**Acceleration** is velocity change over time: **$a = (v - v_0)/t$** in $\\mathrm{m/s^2}$ or $\\mathrm{ft/s^2}$.",
        detail: "A car gaining $20\\ \\mathrm{m/s}$ in $5.0\\ \\mathrm{s}$ accelerates at $4.0\\ \\mathrm{m/s^2}$.",
      },
      {
        term: "Sign and slowing",
        kind: "insight",
        statement: "**Deceleration is acceleration opposing the velocity**: $a$ and $v$ opposite in sign means slowing; same sign means speeding up.",
        detail: "Braking while moving $+x$ gives $a < 0$; reversing direction must pass through $v = 0$.",
      },
      {
        term: "Velocity-time slope and area",
        kind: "method",
        statement: "On a $v$-$t$ graph, **slope is acceleration** and **area is displacement** — the two readings that solve most graph problems.",
        detail: "Constant acceleration graphs as a straight $v$-$t$ line; its trapezoidal area is the distance.",
      },
      {
        term: "Units of acceleration",
        kind: "notation",
        statement: "Report as **$\\mathrm{m/s^2}$** (SI) or $\\mathrm{ft/s^2}$; $g = 9.80\\ \\mathrm{m/s^2} = 32.2\\ \\mathrm{ft/s^2}$ is the reference scale.",
        detail: "A $3.0\\ \\mathrm{m/s^2}$ launch is about $0.31g$ — gentle; $2g$ is violent.",
      },
      {
        term: "Zero acceleration motion",
        kind: "insight",
        statement: "**Zero acceleration means constant velocity**, not rest: cruise control holds $a = 0$ at $25\\ \\mathrm{m/s}$.",
        detail: "Rest is just the $v = 0$ special case of uniform motion.",
      },
    ],
    examples: [
      {
        title: "Launch acceleration",
        problem: "A cart goes from rest to $20.0\\ \\mathrm{m/s}$ in $5.00\\ \\mathrm{s}$. Find $a$ and express it in $g$ units.",
        steps: [
          { label: "Accelerate", text: "$a = (20.0 - 0)/5.00 = 4.00\\ \\mathrm{m/s^2}$." },
          { label: "In $g$", text: "$4.00/9.80 \\approx 0.408g$." },
          { label: "Distance bonus", text: "Average velocity $10.0\\ \\mathrm{m/s}$ over $5.00\\ \\mathrm{s}$ covers $50.0\\ \\mathrm{m}$." },
        ],
        result: "$4.00\\ \\mathrm{m/s^2}$ (about $0.41g$); $50.0\\ \\mathrm{m}$ covered.",
      },
      {
        title: "Braking deceleration",
        problem: "A van slows from $28.0\\ \\mathrm{m/s}$ to $12.0\\ \\mathrm{m/s}$ in $4.00\\ \\mathrm{s}$. Find $a$ with sign.",
        steps: [
          { label: "Change", text: "$\\Delta v = 12.0 - 28.0 = -16.0\\ \\mathrm{m/s}$." },
          { label: "Divide", text: "$a = -16.0/4.00 = -4.00\\ \\mathrm{m/s^2}$." },
          { label: "Read", text: "Negative while moving positive: genuine slowing at $4.00\\ \\mathrm{m/s^2}$." },
        ],
        result: "$a = -4.00\\ \\mathrm{m/s^2}$ along the travel axis.",
      },
    ],
    keyTakeaways: [
      "$a = (v - v_0)/t$; sign compares against velocity to show speeding or slowing.",
      "$v$-$t$ slope reads acceleration; $v$-$t$ area reads displacement.",
      "Gauge accelerations against $g = 9.80\\ \\mathrm{m/s^2}$.",
    ],
    quiz: [
      {
        q: "Rest to $20.0\\ \\mathrm{m/s}$ in $5.00\\ \\mathrm{s}$ is acceleration",
        options: ["$100\\ \\mathrm{m/s^2}$", "$4.00\\ \\mathrm{m/s^2}$", "$0.25\\ \\mathrm{m/s^2}$", "$25.0\\ \\mathrm{m/s^2}$"],
        answer: 1,
        explanation: "$20.0/5.00 = 4.00\\ \\mathrm{m/s^2}$.",
      },
      {
        q: "Slowing from 28 to $12\\ \\mathrm{m/s}$ in $4.00\\ \\mathrm{s}$ gives",
        options: ["$+4.00\\ \\mathrm{m/s^2}$", "$-4.00\\ \\mathrm{m/s^2}$", "$+10.0\\ \\mathrm{m/s^2}$", "Zero"],
        answer: 1,
        explanation: "$\\Delta v = -16.0$ over $4.00\\ \\mathrm{s}$.",
      },
      {
        q: "Area under a $v$-$t$ graph equals",
        options: ["Acceleration", "Displacement", "Force", "Mass"],
        answer: 1,
        explanation: "Velocity times time accumulates position change.",
      },
    ],
  },
  {
    sectionId: 'hall-ch2-s23',
    readingTime: 7,
    intro: "Constant acceleration covers vehicles, elevators, and falling bodies with just three equations. This section derives them, applies them to free fall, and works braking and drop problems end to end.",
    objectives: [
      "Apply $v = v_0 + at$, $s = v_0t + \\tfrac12at^2$, $v^2 = v_0^2 + 2as$",
      "Solve free-fall problems with $g = 9.80\\ \\mathrm{m/s^2}$",
      "Choose the equation that skips the unneeded variable",
    ],
    concepts: [
      {
        term: "The three accelerated-motion equations",
        kind: "theorem",
        statement: "For constant $a$: **$v = v_0 + at$**, **$s = v_0t + \\frac{1}{2}at^2$**, **$v^2 = v_0^2 + 2as$** — each omits one of $s$, $v$, $t$.",
        detail: "No time wanted? Use the third. No distance wanted? Use the first.",
      },
      {
        term: "Free fall as constant $g$",
        kind: "law",
        statement: "Neglecting air, falling bodies accelerate at **$g = 9.80\\ \\mathrm{m/s^2}$ downward** ($32.2\\ \\mathrm{ft/s^2}$), independent of mass.",
        detail: "Feather-versus-hammer differences are air resistance, not gravity.",
      },
      {
        term: "Sign discipline",
        kind: "method",
        statement: "Fix **up positive or down positive once**, then keep $v_0$, $a$, and $s$ signs consistent through all three equations.",
        detail: "With up positive, free-fall $a = -9.80\\ \\mathrm{m/s^2}$ and dropped $v_0 = 0$.",
      },
      {
        term: "Symmetry of vertical flight",
        kind: "insight",
        statement: "Up-and-down flight is **symmetric**: speed at each height matches on rise and fall, and rise time equals fall time to the same level.",
        detail: "A ball thrown up at $15\\ \\mathrm{m/s}$ returns at $15\\ \\mathrm{m/s}$ downward (no air).",
      },
      {
        term: "Stopping-distance scaling",
        kind: "insight",
        statement: "From $v^2 = v_0^2 + 2as$, braking distance grows as **speed squared**: doubling speed quadruples stopping distance.",
        detail: "That square law is the physics behind speed-limit safety margins.",
      },
    ],
    figures: [
      {
        caption: "Free fall strobe: equal-time gaps grow as $1:3:5$, velocity arrows lengthen uniformly",
        svg: '<svg role="img" aria-label="Free fall strobe: equal-time gaps grow as 1:3:5, velocity arrows lengthen uniformly" viewBox="0 0 400 190" xmlns="http://www.w3.org/2000/svg" style="width:100%"><g stroke="currentColor" stroke-width="2" fill="none"><line x1="200" y1="10" x2="200" y2="175"/></g><g fill="currentColor"><circle cx="200" cy="25" r="6"/><circle cx="200" cy="55" r="6"/><circle cx="200" cy="100" r="6"/><circle cx="200" cy="160" r="6"/></g><g stroke="currentColor" stroke-width="2" fill="none"><line x1="240" y1="25" x2="240" y2="40"/><line x1="240" y1="55" x2="240" y2="85"/><line x1="240" y1="100" x2="240" y2="145"/></g><g fill="currentColor" font-size="11" font-family="sans-serif"><text x="250" y="40">v grows by g each second</text><text x="60" y="100">gaps ∝ 1:3:5</text></g></svg>',
        afterConcept: 2,
      },
    ],
    examples: [
      {
        title: "Dropped tool fall time",
        problem: "A wrench drops from a scaffold $45.0\\ \\mathrm{m}$ up (take down positive, $v_0 = 0$, $a = 9.80\\ \\mathrm{m/s^2}$). Find fall time and impact speed.",
        steps: [
          { label: "Time", text: "$s = \\frac{1}{2}at^2$ gives $t = \\sqrt{2s/a} = \\sqrt{90.0/9.80} = \\sqrt{9.184} \\approx 3.03\\ \\mathrm{s}$." },
          { label: "Speed", text: "$v = at = 9.80 \\times 3.03 \\approx 29.7\\ \\mathrm{m/s}$." },
          { label: "Check", text: "$v^2 = 882$ versus $2as = 2(9.80)(45.0) = 882$ — consistent." },
        ],
        result: "Falls $3.03\\ \\mathrm{s}$, striking at $29.7\\ \\mathrm{m/s}$ (about $107\\ \\mathrm{km/h}$).",
      },
      {
        title: "Braking distance at highway speed",
        problem: "A car at $25.0\\ \\mathrm{m/s}$ brakes at $5.00\\ \\mathrm{m/s^2}$. Find stopping distance.",
        steps: [
          { label: "Pick equation", text: "No time wanted: $v^2 = v_0^2 + 2as$ with $v = 0$." },
          { label: "Solve", text: "$s = -v_0^2/(2a) = -(625)/(2 \\times -5.00) = 62.5\\ \\mathrm{m}$." },
          { label: "Scale note", text: "At $50\\ \\mathrm{m/s}$ this would quadruple to $250\\ \\mathrm{m}$." },
        ],
        result: "Stopping distance $62.5\\ \\mathrm{m}$.",
      },
    ],
    keyTakeaways: [
      "Three equations cover all constant-$a$ motion; pick by the missing variable.",
      "Free fall uses $a = g$ downward for every mass (no air).",
      "Braking distance scales with speed squared.",
    ],
    quiz: [
      {
        q: "Drop from $45.0\\ \\mathrm{m}$: fall time is about",
        options: ["$9.18\\ \\mathrm{s}$", "$3.03\\ \\mathrm{s}$", "$4.59\\ \\mathrm{s}$", "$1.50\\ \\mathrm{s}$"],
        answer: 1,
        explanation: "$t = \\sqrt{2(45.0)/9.80} = 3.03\\ \\mathrm{s}$.",
      },
      {
        q: "Stopping from $25.0\\ \\mathrm{m/s}$ at $5.00\\ \\mathrm{m/s^2}$ needs",
        options: ["$62.5\\ \\mathrm{m}$", "$12.5\\ \\mathrm{m}$", "$125\\ \\mathrm{m}$", "$5.00\\ \\mathrm{m}$"],
        answer: 0,
        explanation: "$s = 625/10.0 = 62.5\\ \\mathrm{m}$.",
      },
      {
        q: "Doubling highway speed changes braking distance by",
        options: ["$\\times 2$", "$\\times 4$", "No change", "$\\times 1/2$"],
        answer: 1,
        explanation: "$s \\propto v_0^2$ from $v^2 = v_0^2 + 2as$.",
      },
    ],
  },
  {
    sectionId: 'hall-ch2-s24',
    readingTime: 7,
    intro: "Throw a ball sideways off a cliff and its horizontal cruise ignores its vertical plunge: the two motions superpose. This section treats projectiles as independent horizontal and vertical constant-acceleration problems.",
    objectives: [
      "Split projectile motion into independent $x$ and $y$ parts",
      "Compute range, height, and flight time for horizontal launches",
      "Describe angled launches and their symmetric trajectories",
    ],
    concepts: [
      {
        term: "Independence of axes",
        kind: "law",
        statement: "Horizontal motion has **$a_x = 0$** (constant $v_x$) while vertical motion has **$a_y = g$ downward** — neither disturbs the other (no air).",
        detail: "A bullet fired level and a dropped coin hit the ground together from the same height.",
      },
      {
        term: "Horizontal-launch formulas",
        kind: "theorem",
        statement: "Launched horizontally at $v_x$ from height $h$: **$t = \\sqrt{2h/g}$** and **range $R = v_x t$**.",
        detail: "Time depends only on height; range scales linearly with muzzle speed.",
      },
      {
        term: "Angled-launch split",
        kind: "method",
        statement: "At launch angle $\\theta$: **$v_{0x} = v_0\\cos\\theta$**, **$v_{0y} = v_0\\sin\\theta$**; flight time comes from the vertical part, range from $v_{0x} t$.",
        detail: "Apex occurs where $v_y = 0$; total time is twice the rise time for level landing.",
      },
      {
        term: "Trajectory shape",
        kind: "theorem",
        statement: "Constant $v_x$ with uniformly accelerated $y$ traces a **parabola** — symmetric about the apex for level ground.",
        detail: "Maximum range on level ground occurs at $45^{\\circ}$ (no air).",
      },
      {
        term: "Air resistance caveat",
        kind: "insight",
        statement: "Real drag **shortens range and breaks symmetry**, especially for light, fast, or spinning projectiles.",
        detail: "Shop estimates ignore air for dense, slow bodies; ballistics engineers never do.",
      },
    ],
    examples: [
      {
        title: "Hose stream range",
        problem: "Water leaves a horizontal nozzle at $v_x = 8.00\\ \\mathrm{m/s}$ from $h = 1.25\\ \\mathrm{m}$ above ground. Where does it land?",
        steps: [
          { label: "Time", text: "$t = \\sqrt{2h/g} = \\sqrt{2.50/9.80} = \\sqrt{0.2551} \\approx 0.505\\ \\mathrm{s}$." },
          { label: "Range", text: "$R = v_x t = 8.00 \\times 0.505 = 4.04\\ \\mathrm{m}$." },
          { label: "Impact speed", text: "$v_y = gt = 4.95\\ \\mathrm{m/s}$; $v = \\sqrt{8.00^2 + 4.95^2} \\approx 9.41\\ \\mathrm{m/s}$." },
        ],
        result: "Lands $4.04\\ \\mathrm{m}$ out, striking at $9.41\\ \\mathrm{m/s}$.",
      },
      {
        title: "Angled ball flight",
        problem: "A ball launches at $v_0 = 20.0\\ \\mathrm{m/s}$, $\\theta = 30^{\\circ}$ over level ground. Find flight time and range.",
        steps: [
          { label: "Split", text: "$v_{0x} = 20\\cos 30^{\\circ} = 17.32\\ \\mathrm{m/s}$; $v_{0y} = 20\\sin 30^{\\circ} = 10.0\\ \\mathrm{m/s}$." },
          { label: "Time", text: "Rise $t = v_{0y}/g = 1.020\\ \\mathrm{s}$; total $T = 2.04\\ \\mathrm{s}$." },
          { label: "Range", text: "$R = 17.32 \\times 2.04 \\approx 35.3\\ \\mathrm{m}$." },
        ],
        result: "Airborne $2.04\\ \\mathrm{s}$; range $35.3\\ \\mathrm{m}$.",
      },
    ],
    keyTakeaways: [
      "Projectiles: uniform $x$, accelerated $y$ — solve each axis separately.",
      "Level horizontal launches obey $t = \\sqrt{2h/g}$, $R = v_x t$.",
      "Angled paths are parabolas; $45^{\\circ}$ maximizes level range.",
    ],
    quiz: [
      {
        q: "Nozzle at $8.00\\ \\mathrm{m/s}$ from $1.25\\ \\mathrm{m}$ lands at range",
        options: ["$10.0\\ \\mathrm{m}$", "$4.04\\ \\mathrm{m}$", "$1.25\\ \\mathrm{m}$", "$8.00\\ \\mathrm{m}$"],
        answer: 1,
        explanation: "$t = 0.505\\ \\mathrm{s}$; $R = 8.00 \\times 0.505 = 4.04\\ \\mathrm{m}$.",
      },
      {
        q: "$20.0\\ \\mathrm{m/s}$ at $30^{\\circ}$ over level ground ranges about",
        options: ["$20.4\\ \\mathrm{m}$", "$35.3\\ \\mathrm{m}$", "$40.8\\ \\mathrm{m}$", "$10.0\\ \\mathrm{m}$"],
        answer: 1,
        explanation: "$T = 2.04\\ \\mathrm{s}$, $R = 17.32 \\times 2.04 = 35.3\\ \\mathrm{m}$.",
      },
      {
        q: "Horizontal and vertical projectile motions are",
        options: ["Strongly coupled", "Independent (no air)", "Both accelerated", "Both uniform"],
        answer: 1,
        explanation: "$a_x = 0$ while $a_y = g$; neither affects the other.",
      },
    ],
  },
]
