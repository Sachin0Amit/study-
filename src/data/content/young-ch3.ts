import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 3
// Motion in Two or Three Dimensions (Secs 3.1–3.5)
// ============================================================================

export const youngCh3Content: SectionContent[] = [
  {
    sectionId: "young-ch3-s1",
    readingTime: 5,
    intro: "Curved motion needs vectors for everything: position locates the particle, and velocity is the vector rate at which that position changes. This section generalizes $x$ and $v_x$ to $\\vec{r}$ and $\\vec{v}$ and shows velocity hugging the trajectory as a tangent.",
    objectives: [
      "Write position $\\vec{r}$ and displacement $\\Delta\\vec{r}$ in components",
      "Define $\\vec{v} = d\\vec{r}/dt$ and its components",
      "Explain why $\\vec{v}$ is tangent to the path"
    ],
    concepts: [
      {
        term: "Position vector",
        kind: "definition",
        statement: "The **position vector** $\\vec{r} = x\\hat{\\imath} + y\\hat{\\jmath} + z\\hat{k}$ runs from the origin to the particle.",
        detail: "Its components are the ordinary coordinates; changing the origin shifts every $\\vec{r}$ by a constant."
      },
      {
        term: "Displacement vector",
        kind: "definition",
        statement: "**Displacement** $\\Delta\\vec{r} = \\vec{r}_2 - \\vec{r}_1$ points from the old tip to the new tip, independent of origin.",
        detail: "Path length can be large while $|\\Delta\\vec{r}|$ is small — displacement is the straight chord, not the arc."
      },
      {
        term: "Average velocity vector",
        kind: "definition",
        statement: "**Average velocity** $\\vec{v}_{\\mathrm{av}} = \\Delta\\vec{r}/\\Delta t$ points along the chord $\\Delta\\vec{r}$.",
        detail: "Dividing by the scalar $\\Delta t$ scales length but keeps direction along the secant."
      },
      {
        term: "Instantaneous velocity",
        kind: "definition",
        statement: "**Instantaneous velocity** $\\vec{v} = \\lim_{\\Delta t\\to 0}\\Delta\\vec{r}/\\Delta t = d\\vec{r}/dt$, with $v_x = dx/dt$, $v_y = dy/dt$, $v_z = dz/dt$.",
        detail: "Each component differentiates independently — three 1D motions running in parallel."
      },
      {
        term: "Tangent to the trajectory",
        kind: "theorem",
        statement: "**$\\vec{v}$ is always tangent to the path**, pointing in the direction of motion with speed $v = |\\vec{v}|$.",
        detail: "As $\\Delta t \\to 0$ the chord $\\Delta\\vec{r}$ melts into the tangent; the particle cannot leave its own tangent line instantaneously."
      }
    ],
    examples: [
      {
        title: "Velocity from $\\vec{r}(t)$",
        problem: "$\\vec{r} = (3t)\\hat{\\imath} + (4t - 5t^2)\\hat{\\jmath}$ (SI). Find $\\vec{v}$ at $t = 2.0\\ \\mathrm{s}$.",
        steps: [
          { label: "Differentiate", text: "$v_x = 3$, $v_y = 4 - 10t$." },
          { label: "Evaluate", text: "At $2.0\\ \\mathrm{s}$: $\\vec{v} = 3\\hat{\\imath} - 16\\hat{\\jmath}\\ \\mathrm{m/s}$." },
          { label: "Speed", text: "$v = \\sqrt{9+256} = 16.3\\ \\mathrm{m/s}$, aimed mostly $-y$." }
        ],
        result: "$\\vec{v} = (3\\hat{\\imath}-16\\hat{\\jmath})\\ \\mathrm{m/s}$, speed $16.3\\ \\mathrm{m/s}$."
      },
      {
        title: "Chord versus path",
        problem: "A runner circles a $400\\ \\mathrm{m}$ track and stops halfway. Find displacement magnitude.",
        steps: [
          { label: "Geometry", text: "Half circle: start and finish are a diameter apart." },
          { label: "Diameter", text: "Circumference $400 = 2\\pi R$, so $R = 63.7\\ \\mathrm{m}$; $|\\Delta\\vec{r}| = 2R = 127\\ \\mathrm{m}$." },
          { label: "Contrast", text: "Path $200\\ \\mathrm{m}$ but displacement only $127\\ \\mathrm{m}$." }
        ],
        result: "$|\\Delta\\vec{r}| = 127\\ \\mathrm{m}$ for a $200\\ \\mathrm{m}$ run."
      }
    ],
    keyTakeaways: [
      "$\\vec{r}$ locates; $\\Delta\\vec{r}$ connects two instants.",
      "$\\vec{v} = d\\vec{r}/dt$ differentiates component by component.",
      "Velocity is tangent to the trajectory, always."
    ],
    quiz: [
      {
        q: "Instantaneous velocity $\\vec{v}$ is:",
        options: ["Always toward the origin", "Tangent to the trajectory in the direction of motion", "Perpendicular to the path always", "A scalar"],
        answer: 1,
        explanation: "The limiting chord becomes the tangent; direction of travel picks the sense."
      },
      {
        q: "For $\\vec{r} = 3t\\hat{\\imath} + (4t-5t^2)\\hat{\\jmath}$, $v_y$ at $2.0\\ \\mathrm{s}$ is:",
        options: ["$4\\ \\mathrm{m/s}$", "$-16\\ \\mathrm{m/s}$", "$-5\\ \\mathrm{m/s}$", "$20\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "$v_y = 4-10t = 4-20 = -16\\ \\mathrm{m/s}$."
      },
      {
        q: "Displacement $\\Delta\\vec{r}$ depends on the origin:",
        options: ["Strongly — it shifts with the origin", "Not at all — origin shifts cancel in $\\vec{r}_2-\\vec{r}_1$", "Only in 3D", "Only for open paths"],
        answer: 1,
        explanation: "Both tips shift equally, so their difference is origin-free."
      }
    ]
  },
  {
    sectionId: "young-ch3-s2",
    readingTime: 6,
    intro: "Acceleration in 2D and 3D has two jobs: changing speed and changing direction. This section defines the acceleration vector and splits it into parallel and perpendicular parts that reveal speeding versus turning at a glance.",
    objectives: [
      "Define $\\vec{a} = d\\vec{v}/dt$ in components",
      "Resolve $\\vec{a}$ into parallel and perpendicular parts",
      "Interpret curvature from the perpendicular component"
    ],
    concepts: [
      {
        term: "Acceleration vector",
        kind: "definition",
        statement: "**$\\vec{a} = \\lim_{\\Delta t\\to 0}\\Delta\\vec{v}/\\Delta t = d\\vec{v}/dt$**, with $a_x = dv_x/dt$, $a_y = dv_y/dt$, $a_z = dv_z/dt$.",
        detail: "It points toward the side the velocity is turning, not necessarily along the motion."
      },
      {
        term: "Parallel component",
        kind: "definition",
        statement: "**$\\vec{a}_{\\parallel}$** along $\\vec{v}$ **changes speed**: same sense speeds up, opposite sense slows down.",
        detail: "Braking in a straight line is pure $\\vec{a}_{\\parallel}$ opposing $\\vec{v}$."
      },
      {
        term: "Perpendicular component",
        kind: "definition",
        statement: "**$\\vec{a}_{\\perp}$** across $\\vec{v}$ **changes direction**, curving the path toward its side.",
        detail: "A car turning left at constant speed has $\\vec{a}$ pointing left — pure $\\vec{a}_{\\perp}$."
      },
      {
        term: "Decomposition theorem",
        kind: "theorem",
        statement: "Every $\\vec{a}$ splits as **$\\vec{a} = \\vec{a}_{\\parallel} + \\vec{a}_{\\perp}$**; magnitudes obey $a^2 = a_{\\parallel}^2 + a_{\\perp}^2$.",
        detail: "Projectile motion has $\\vec{a} = -g\\hat{\\jmath}$ throughout, whose parallel and perpendicular shares trade off along the arc."
      },
      {
        term: "Acceleration versus velocity alignment",
        kind: "insight",
        statement: "**$\\vec{a}$ need not align with $\\vec{v}$**: at a projectile peak they are perpendicular; in uniform circular motion they oppose the radius.",
        detail: "Expecting $\\vec{a}$ along $\\vec{v}$ is the top error Young corrects — force sets $\\vec{a}$, and $\\vec{a}$ bends $\\vec{v}$."
      }
    ],
    figures: [
      {
        caption: "Resolving $\\vec{a}$ into $\\vec{a}_{\\parallel}$ (speed change) and $\\vec{a}_{\\perp}$ (turning)",
        svg: `<svg viewBox="0 0 720 200" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallel and perpendicular acceleration"><path d="M 60 150 Q 300 150 450 80" fill="none" stroke="currentColor" stroke-width="2"/><line x1="280" y1="148" x2="400" y2="118" stroke="currentColor" stroke-width="2.5"/><polygon points="400,118 385,118 388,130" fill="currentColor"/><line x1="340" y1="133" x2="420" y2="108" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="340" y1="133" x2="365" y2="70" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="410" y="112" font-size="12" fill="currentColor">v</text><text x="430" y="95" font-size="12" fill="currentColor">a parallel</text><text x="300" y="75" font-size="12" fill="currentColor">a perp (turn)</text><text x="345" y="155" font-size="12" fill="currentColor" opacity="0.7">a vector at point</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Acceleration of a curved flight",
        problem: "$\\vec{v} = 3\\hat{\\imath} - 16\\hat{\\jmath}\\ \\mathrm{m/s}$, $\\vec{a} = -10\\hat{\\jmath}\\ \\mathrm{m/s^2}$. Is speed rising or falling?",
        steps: [
          { label: "Dot test", text: "$\\vec{v}\\cdot\\vec{a} = (3)(0)+(-16)(-10) = +160 > 0$." },
          { label: "Interpret", text: "Positive dot: $\\vec{a}$ has a component along $\\vec{v}$ — speeding up." },
          { label: "Turn", text: "The $x$-part of $\\vec{a}$ is zero, so turning comes from the cross part of $-g\\hat{\\jmath}$." }
        ],
        result: "Speed increasing at this instant (falling branch of flight)."
      },
      {
        title: "Pure turning",
        problem: "A car rounds a curve at steady $12\\ \\mathrm{m/s}$ with $\\vec{a} = 3.0\\ \\mathrm{m/s^2}$ to the left. Describe components.",
        steps: [
          { label: "Parallel", text: "Speed constant: $a_{\\parallel} = 0$." },
          { label: "Perpendicular", text: "$a_{\\perp} = 3.0\\ \\mathrm{m/s^2}$ left — pure direction change." },
          { label: "Check", text: "$\\vec{v}\\cdot\\vec{a} = 0$ confirms no speed change." }
        ],
        result: "All acceleration turns the velocity; none feeds speed."
      }
    ],
    keyTakeaways: [
      "$\\vec{a} = d\\vec{v}/dt$ acts component by component.",
      "Parallel part feeds speed; perpendicular part steers.",
      "$\\vec{a}$ points to the inside of the turn, not along motion."
    ],
    quiz: [
      {
        q: "A car turns left at constant speed. Its $\\vec{a}$ points:",
        options: ["Forward along $\\vec{v}$", "Left, perpendicular to $\\vec{v}$", "Backward along $\\vec{v}$", "Zero"],
        answer: 1,
        explanation: "No speed change kills $a_{\\parallel}$; only the steering $a_{\\perp}$ remains."
      },
      {
        q: "$\\vec{v}\\cdot\\vec{a} > 0$ means:",
        options: ["Slowing down", "Speeding up", "Moving in a circle", "Zero acceleration"],
        answer: 1,
        explanation: "Positive dot puts part of $\\vec{a}$ along $\\vec{v}$, feeding speed."
      },
      {
        q: "At a projectile peak, $\\vec{a}$ versus $\\vec{v}$ are:",
        options: ["Parallel", "Perpendicular", "Equal", "Both zero"],
        answer: 1,
        explanation: "$\\vec{v}$ is horizontal while $\\vec{a} = -g\\hat{\\jmath}$ is vertical."
      }
    ]
  },
  {
    sectionId: "young-ch3-s3",
    readingTime: 7,
    intro: "Projectile motion is two independent 1D motions stapled together: uniform march horizontally and free fall vertically. This section derives the trajectory, range, and peak height, and drills the launch-angle problems exams love.",
    objectives: [
      "Separate projectile flight into independent $x$ and $y$ motions",
      "Derive range $R$ and peak height $H$ for level ground",
      "Solve launch, cliff, and target problems systematically"
    ],
    concepts: [
      {
        term: "Independence of motions",
        kind: "law",
        statement: "**Horizontal and vertical motions are independent**: $a_x = 0$, $a_y = -g$ throughout flight (no air).",
        detail: "A bullet fired horizontally and one dropped from the same height hit the ground together — $y(t)$ is identical."
      },
      {
        term: "Projectile equations",
        kind: "theorem",
        statement: "With launch $(v_0, \\alpha_0)$: **$x = v_0\\cos\\alpha_0\\,t$**, **$y = y_0 + v_0\\sin\\alpha_0\\,t - \\frac{1}{2}gt^2$**.",
        detail: "$v_x$ never changes; $v_y = v_0\\sin\\alpha_0 - gt$ ticks down linearly through zero at the peak."
      },
      {
        term: "Trajectory parabola",
        kind: "theorem",
        statement: "Eliminating $t$ gives the **parabola** $y = y_0 + x\\tan\\alpha_0 - gx^2/(2v_0^2\\cos^2\\alpha_0)$.",
        detail: "Quadratic in $x$ because $t = x/v_{0x}$ feeds the $t^2$ fall term."
      },
      {
        term: "Level-ground range and height",
        kind: "theorem",
        statement: "On level ground: **$R = v_0^2\\sin 2\\alpha_0/g$** and **$H = v_0^2\\sin^2\\alpha_0/2g$**; $R$ peaks at $45^{\\circ}$.",
        detail: "$30^{\\circ}$ and $60^{\\circ}$ share the same range ($\\sin 2\\alpha_0$ symmetric) but the higher angle doubles height."
      },
      {
        term: "Problem protocol",
        kind: "method",
        statement: "**Split, time, and reunite**: find flight time from the $y$-equation, then march $x = v_{0x}t$.",
        detail: "Cliff problems set $y = 0$ below launch and solve the quadratic; the negative root is discarded as pre-launch."
      }
    ],
    figures: [
      {
        caption: "Projectile parabola: $v_x$ constant while $v_y$ ticks from up through zero to down",
        svg: `<svg viewBox="0 0 720 220" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Projectile trajectory"><line x1="40" y1="180" x2="690" y2="180" stroke="currentColor" stroke-width="1.5"/><path d="M 80 180 Q 350 20 620 180" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="80" y1="180" x2="160" y2="130" stroke="currentColor" stroke-width="2"/><polygon points="160,130 145,132 148,144" fill="currentColor"/><line x1="230" y1="120" x2="300" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="300,120 288,115 288,125" fill="currentColor"/><line x1="230" y1="120" x2="230" y2="75" stroke="currentColor" stroke-width="1.5"/><polygon points="230,75 225,87 235,87" fill="currentColor"/><line x1="360" y1="88" x2="430" y2="88" stroke="currentColor" stroke-width="2"/><polygon points="430,88 418,83 418,93" fill="currentColor"/><line x1="500" y1="120" x2="570" y2="120" stroke="currentColor" stroke-width="2"/><polygon points="570,120 558,115 558,125" fill="currentColor"/><line x1="500" y1="120" x2="500" y2="165" stroke="currentColor" stroke-width="1.5"/><polygon points="500,165 495,153 505,153" fill="currentColor"/><text x="350" y="205" font-size="12" text-anchor="middle" fill="currentColor" opacity="0.7">R = v0 squared sin 2 alpha / g</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Level-ground range",
        problem: "A ball is kicked at $20\\ \\mathrm{m/s}$, $37^{\\circ}$ above horizontal on level ground. Find $R$ and $H$.",
        steps: [
          { label: "Components", text: "$v_{0x} = 20\\cos 37^{\\circ} = 16.0\\ \\mathrm{m/s}$; $v_{0y} = 20\\sin 37^{\\circ} = 12.0\\ \\mathrm{m/s}$." },
          { label: "Range", text: "$R = v_0^2\\sin 74^{\\circ}/g = 400 \\times 0.961/9.80 = 39.2\\ \\mathrm{m}$." },
          { label: "Height", text: "$H = 12.0^2/(2 \\times 9.80) = 144/19.6 = 7.35\\ \\mathrm{m}$." }
        ],
        result: "$R = 39.2\\ \\mathrm{m}$; $H = 7.35\\ \\mathrm{m}$."
      },
      {
        title: "Cliff launch",
        problem: "A rock is thrown horizontally at $12\\ \\mathrm{m/s}$ from a $45\\ \\mathrm{m}$ cliff. Where does it land?",
        steps: [
          { label: "Fall time", text: "$-45 = -4.90t^2$: $t = \\sqrt{45/4.90} = 3.03\\ \\mathrm{s}$." },
          { label: "Range", text: "$x = 12 \\times 3.03 = 36.4\\ \\mathrm{m}$ out." },
          { label: "Impact velocity", text: "$v_y = -9.80 \\times 3.03 = -29.7\\ \\mathrm{m/s}$; speed $\\sqrt{144+882} = 32.0\\ \\mathrm{m/s}$." }
        ],
        result: "$36.4\\ \\mathrm{m}$ from the base at $32.0\\ \\mathrm{m/s}$."
      }
    ],
    keyTakeaways: [
      "$x$ coasts at $v_{0x}$; $y$ falls under $-g$ — solve them separately.",
      "Level range peaks at $45^{\\circ}$ via $\\sin 2\\alpha_0$.",
      "Get flight time from $y(t)$, then convert to range via $x(t)$."
    ],
    quiz: [
      {
        q: "A fired bullet and a dropped bullet from the same height hit ground:",
        options: ["Fired first, it goes farther", "Together — $y(t)$ is identical", "Dropped first, it is heavier", "Neither ever lands"],
        answer: 1,
        explanation: "Vertical motion $y_0 - \\frac{1}{2}gt^2$ knows nothing about $v_{0x}$."
      },
      {
        q: "Kicked at $20\\ \\mathrm{m/s}$, $37^{\\circ}$, level range is about:",
        options: ["$7.4\\ \\mathrm{m}$", "$39\\ \\mathrm{m}$", "$400\\ \\mathrm{m}$", "$2.0\\ \\mathrm{m}$"],
        answer: 1,
        explanation: "$400\\sin 74^{\\circ}/9.8 = 39.2\\ \\mathrm{m}$."
      },
      {
        q: "Complementary angles $30^{\\circ}$ and $60^{\\circ}$ give:",
        options: ["Same range, different heights", "Same height, different ranges", "Zero range both", "Maximum range both"],
        answer: 0,
        explanation: "$\\sin 60^{\\circ} = \\sin 120^{\\circ}$ equalizes ranges; $\\sin^2$ favors the steeper height."
      }
    ]
  },
  {
    sectionId: "young-ch3-s4",
    readingTime: 6,
    intro: "Circular motion reuses the perpendicular-acceleration idea at full strength: even at constant speed, the direction change demands a center-seeking acceleration. This section derives $a_{\\mathrm{rad}} = v^2/R$ and extends it to speeding and slowing around the circle.",
    objectives: [
      "Derive $a_{\\mathrm{rad}} = v^2/R$ for uniform circular motion",
      "State period and frequency relations $v = 2\\pi R/T$",
      "Add tangential acceleration for nonuniform circular motion"
    ],
    concepts: [
      {
        term: "Uniform circular motion",
        kind: "definition",
        statement: "**Uniform circular motion** holds **constant speed** on a circle of radius $R$ with period $T$ and frequency $f = 1/T$.",
        detail: "Velocity stays tangent with $v = 2\\pi R/T = 2\\pi Rf$; only direction changes."
      },
      {
        term: "Centripetal acceleration",
        kind: "theorem",
        statement: "**$a_{\\mathrm{rad}} = v^2/R = 4\\pi^2R/T^2$** directed **toward the center** — the price of turning.",
        detail: "Young derives it from similar triangles: $\\Delta v/v = \\Delta s/R$, divided by $\\Delta t$ in the limit."
      },
      {
        term: "Center-seeking, not centrifugal",
        kind: "insight",
        statement: "In an inertial frame the acceleration is **inward**; the outward fling is a **fictitious effect** of the turning frame.",
        detail: "A string pulls inward on the whirled ball; released, the ball flies tangent, never radially out."
      },
      {
        term: "Nonuniform circular motion",
        kind: "definition",
        statement: "Changing speed adds **tangential acceleration** $a_{\\tan} = dv/dt$ alongside $a_{\\mathrm{rad}} = v^2/R$.",
        detail: "Total $a = \\sqrt{a_{\\mathrm{rad}}^2 + a_{\\tan}^2}$; $a_{\\tan}$ feeds speed, $a_{\\mathrm{rad}}$ steers."
      },
      {
        term: "Numbers that bite",
        kind: "insight",
        statement: "Centripetal acceleration scales as **$v^2$**: doubling speed **quadruples** the required grip or tension.",
        detail: "A $1200\\ \\mathrm{kg}$ car at $20\\ \\mathrm{m/s}$ on $R = 100\\ \\mathrm{m}$ needs $4800\\ \\mathrm{N}$ inward — half its weight."
      }
    ],
    examples: [
      {
        title: "Jet in a turn",
        problem: "A jet at $250\\ \\mathrm{m/s}$ pulls $a_{\\mathrm{rad}} = 4g$. What is the turn radius?",
        steps: [
          { label: "Acceleration", text: "$a = 4 \\times 9.80 = 39.2\\ \\mathrm{m/s^2}$." },
          { label: "Radius", text: "$R = v^2/a = 62500/39.2 = 1594\\ \\mathrm{m}$." },
          { label: "Period check", text: "Full circle would take $2\\pi R/v = 40.1\\ \\mathrm{s}$." }
        ],
        result: "About $1.6\\ \\mathrm{km}$ radius for a $4g$ turn at $250\\ \\mathrm{m/s}$."
      },
      {
        title: "Car on a curve",
        problem: "A $1200\\ \\mathrm{kg}$ car takes $R = 100\\ \\mathrm{m}$ at $20\\ \\mathrm{m/s}$. Find required friction.",
        steps: [
          { label: "Acceleration", text: "$a_{\\mathrm{rad}} = 400/100 = 4.0\\ \\mathrm{m/s^2}$ inward." },
          { label: "Force", text: "$F = ma = 1200 \\times 4.0 = 4800\\ \\mathrm{N}$." },
          { label: "Sense", text: "Static friction supplies it; doubling speed would demand $19200\\ \\mathrm{N}$." }
        ],
        result: "$4800\\ \\mathrm{N}$ inward from the tires."
      }
    ],
    keyTakeaways: [
      "Turning at speed $v$ on radius $R$ costs $v^2/R$ inward.",
      "$v = 2\\pi R/T$ links speed, size, and lap time.",
      "Speeding around the circle adds $a_{\\tan} = dv/dt$ to $a_{\\mathrm{rad}}$."
    ],
    quiz: [
      {
        q: "Uniform circular motion acceleration is:",
        options: ["Zero — speed is constant", "$v^2/R$ toward the center", "$v^2/R$ outward", "Tangent to the circle"],
        answer: 1,
        explanation: "Direction change is acceleration; similar triangles give $v^2/R$ inward."
      },
      {
        q: "Doubling speed on the same curve multiplies required grip by:",
        options: ["2", "4", "8", "1 (unchanged)"],
        answer: 1,
        explanation: "$a_{\\mathrm{rad}} \\propto v^2$ — quadratic punishment."
      },
      {
        q: "Nonuniform circular motion has:",
        options: ["Only $a_{\\mathrm{rad}}$", "$a_{\\mathrm{rad}} = v^2/R$ plus $a_{\\tan} = dv/dt$", "Zero acceleration", "Only gravity"],
        answer: 1,
        explanation: "Steering and speeding superpose as perpendicular components."
      }
    ]
  },
  {
    sectionId: "young-ch3-s5",
    readingTime: 5,
    intro: "Velocity depends on who measures it: a walkway, a train, or the ground each reports a different vector. This section adds velocities across frames with $\\vec{v}_{P/A} = \\vec{v}_{P/B} + \\vec{v}_{B/A}$ and solves crossing-river and overtaking problems.",
    objectives: [
      "State the Galilean velocity-addition law for frames",
      "Solve 1D overtaking and meeting problems",
      "Aim correctly across a moving river or crosswind"
    ],
    concepts: [
      {
        term: "Relative velocity notation",
        kind: "notation",
        statement: "**$\\vec{v}_{P/A}$** means velocity of **P relative to A**; swapping labels flips the sign: $\\vec{v}_{A/B} = -\\vec{v}_{B/A}$.",
        detail: "Subscripts are read right to left: P as seen from A."
      },
      {
        term: "Galilean addition law",
        kind: "theorem",
        statement: "**$\\vec{v}_{P/A} = \\vec{v}_{P/B} + \\vec{v}_{B/A}$**: hop through the intermediate frame B by vector addition.",
        detail: "Walking at $1.5\\ \\mathrm{m/s}$ forward on a train doing $25\\ \\mathrm{m/s}$ gives $26.5\\ \\mathrm{m/s}$ over ground."
      },
      {
        term: "Relative motion in 1D",
        kind: "method",
        statement: "In one dimension the law is **signed arithmetic**: approach speed is the difference or sum per the sign choice.",
        detail: "Two cars at $20$ and $15\\ \\mathrm{m/s}$ same direction: each sees the other at $5\\ \\mathrm{m/s}$."
      },
      {
        term: "Crossing a current",
        kind: "method",
        statement: "To land straight across, **aim upstream** so the current cancels: $\\vec{v}_{\\mathrm{boat/shore}} = \\vec{v}_{\\mathrm{boat/water}} + \\vec{v}_{\\mathrm{water/shore}}$.",
        detail: "Boat $4.0\\ \\mathrm{m/s}$ in water flowing $2.0\\ \\mathrm{m/s}$: aim $\\arcsin(2/4) = 30^{\\circ}$ upstream; crossing speed is $\\sqrt{12} = 3.46\\ \\mathrm{m/s}$."
      },
      {
        term: "Limits of Galilean addition",
        kind: "insight",
        statement: "Simple addition holds for **$u \\ll c$**; near light speed the **Lorentz transformation** (Ch 37) replaces it.",
        detail: "Mechanics problems stay Galilean; particle physics must not."
      }
    ],
    figures: [
      {
        caption: "Crossing a river: aim upstream so $\\vec{v}_{\\mathrm{boat/shore}}$ points straight across",
        svg: `<svg viewBox="0 0 720 200" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="River crossing vectors"><line x1="120" y1="20" x2="120" y2="180" stroke="currentColor" stroke-width="3"/><line x1="600" y1="20" x2="600" y2="180" stroke="currentColor" stroke-width="3"/><line x1="200" y1="150" x2="520" y2="60" stroke="currentColor" stroke-width="2.5"/><polygon points="520,60 505,62 508,74" fill="currentColor"/><line x1="200" y1="150" x2="200" y2="40" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="200" y1="150" x2="330" y2="150" stroke="currentColor" stroke-width="1.5"/><text x="360" y="110" font-size="12" fill="currentColor">boat in water</text><text x="210" y="60" font-size="12" fill="currentColor">straight across</text><text x="240" y="170" font-size="12" fill="currentColor">current</text><text x="90" y="100" font-size="11" fill="currentColor" opacity="0.7">start</text><text x="610" y="100" font-size="11" fill="currentColor" opacity="0.7">land</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Train walkway",
        problem: "A passenger walks forward at $1.5\\ \\mathrm{m/s}$ relative to a train moving at $25\\ \\mathrm{m/s}$ over ground. Find ground speed.",
        steps: [
          { label: "Law", text: "$v_{P/G} = v_{P/T} + v_{T/G} = 1.5 + 25 = 26.5\\ \\mathrm{m/s}$." },
          { label: "Backward check", text: "Walking backward at $1.5$: $25 - 1.5 = 23.5\\ \\mathrm{m/s}$." },
          { label: "Sign rule", text: "Directions along $+x$ add; opposing subtract." }
        ],
        result: "$26.5\\ \\mathrm{m/s}$ forward over ground."
      },
      {
        title: "Straight-across crossing",
        problem: "A boat does $4.0\\ \\mathrm{m/s}$ in still water; the river flows $2.0\\ \\mathrm{m/s}$ and is $120\\ \\mathrm{m}$ wide. Aim straight across; find time and drift if aimed directly across.",
        steps: [
          { label: "Direct crossing time", text: "$t = 120/4.0 = 30\\ \\mathrm{s}$ (across-component unaffected)." },
          { label: "Drift", text: "Current carries $2.0 \\times 30 = 60\\ \\mathrm{m}$ downstream." },
          { label: "Upstream aim", text: "To cancel drift aim $30^{\\circ}$ upstream; crossing speed $3.46\\ \\mathrm{m/s}$, time $34.7\\ \\mathrm{s}$." }
        ],
        result: "Direct: $30\\ \\mathrm{s}$, $60\\ \\mathrm{m}$ drift. Straight: aim $30^{\\circ}$ up, $34.7\\ \\mathrm{s}$."
      }
    ],
    keyTakeaways: [
      "$\\vec{v}_{P/A} = \\vec{v}_{P/B}+\\vec{v}_{B/A}$ hops frames by addition.",
      "Label discipline ($P/B$, $B/A$) prevents sign errors.",
      "Crossing problems split across-current from along-current motion."
    ],
    quiz: [
      {
        q: "Walking $1.5\\ \\mathrm{m/s}$ forward on a $25\\ \\mathrm{m/s}$ train, ground speed is:",
        options: ["$23.5\\ \\mathrm{m/s}$", "$26.5\\ \\mathrm{m/s}$", "$25\\ \\mathrm{m/s}$", "$1.5\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "Same-direction vectors add: $25+1.5 = 26.5\\ \\mathrm{m/s}$."
      },
      {
        q: "To land straight across a flowing river you must:",
        options: ["Aim straight across", "Aim upstream to cancel the current", "Aim downstream", "Stop rowing"],
        answer: 1,
        explanation: "Only an upstream component can annul downstream drift."
      },
      {
        q: "Galilean velocity addition fails when:",
        options: ["Speeds approach $c$", "The river is wide", "Motion is in 1D", "Vectors are used"],
        answer: 0,
        explanation: "Near light speed Lorentz velocity transformation replaces simple addition."
      }
    ]
  }
];
