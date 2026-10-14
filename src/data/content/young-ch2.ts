import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 2
// Motion Along a Straight Line (Secs 2.1–2.6)
// ============================================================================

export const youngCh2Content: SectionContent[] = [
  {
    sectionId: "young-ch2-s1",
    readingTime: 5,
    intro: "One-dimensional motion starts with precise language: where you are, how far you moved, and how fast that move happened on average. This section defines displacement, time interval, and average velocity, and separates velocity from speed once and for all.",
    objectives: [
      "Compute displacement and average velocity from positions and times",
      "Distinguish displacement from distance and velocity from speed",
      "Read the sign of motion from a coordinate choice"
    ],
    concepts: [
      {
        term: "Coordinate and position",
        kind: "definition",
        statement: "Motion is located by a **position coordinate** $x$ on a chosen axis with an origin; positions can be negative.",
        detail: "Flipping the $+x$ direction flips every sign but changes no physics; consistency is what matters."
      },
      {
        term: "Displacement",
        kind: "definition",
        statement: "**Displacement** $\\Delta x = x_2 - x_1$ is the **change** of position — magnitude plus direction — not the path length.",
        detail: "Walking $7\\ \\mathrm{m}$ east then $5\\ \\mathrm{m}$ west gives $\\Delta x = +2\\ \\mathrm{m}$ but distance $12\\ \\mathrm{m}$."
      },
      {
        term: "Average velocity",
        kind: "definition",
        statement: "**Average velocity** $v_{\\mathrm{av},x} = \\Delta x/\\Delta t = (x_2-x_1)/(t_2-t_1)$ is displacement per unit time.",
        detail: "For $\\Delta x = 200\\ \\mathrm{m}$ in $\\Delta t = 25\\ \\mathrm{s}$, $v_{\\mathrm{av},x} = 8.0\\ \\mathrm{m/s}$ regardless of stops along the way."
      },
      {
        term: "Velocity versus speed",
        kind: "definition",
        statement: "**Average speed** is total path length over time — always non-negative — while **average velocity** carries a sign.",
        detail: "A round trip has zero average velocity but positive average speed; the speedometer reports instantaneous speed $ |v_x| $."
      },
      {
        term: "Sign as direction",
        kind: "insight",
        statement: "In one dimension the **sign is the direction**: $v_{\\mathrm{av},x} > 0$ moves toward $+x$, $v_{\\mathrm{av},x} < 0$ toward $-x$.",
        detail: "Young fixes $+x$ once per problem and lets algebra steer; never reassign mid-solution."
      }
    ],
    examples: [
      {
        title: "Commute average velocity",
        problem: "A student walks $600\\ \\mathrm{m}$ east in $500\\ \\mathrm{s}$, then $400\\ \\mathrm{m}$ west in $400\\ \\mathrm{s}$. Find average velocity and average speed.",
        steps: [
          { label: "Displacement", text: "Take east as $+x$: $\\Delta x = 600 - 400 = 200\\ \\mathrm{m}$." },
          { label: "Total time", text: "$\\Delta t = 500 + 400 = 900\\ \\mathrm{s}$." },
          { label: "Averages", text: "$v_{\\mathrm{av},x} = 200/900 = 0.22\\ \\mathrm{m/s}$ east; path $1000\\ \\mathrm{m}$ gives speed $1000/900 = 1.11\\ \\mathrm{m/s}$." }
        ],
        result: "Average velocity $0.22\\ \\mathrm{m/s}$ east; average speed $1.11\\ \\mathrm{m/s}$."
      },
      {
        title: "Interpreting a negative average",
        problem: "A car has $x_1 = 120\\ \\mathrm{m}$ at $t_1 = 5.0\\ \\mathrm{s}$ and $x_2 = 40\\ \\mathrm{m}$ at $t_2 = 9.0\\ \\mathrm{s}$. Find $v_{\\mathrm{av},x}$.",
        steps: [
          { label: "Displace", text: "$\\Delta x = 40 - 120 = -80\\ \\mathrm{m}$." },
          { label: "Divide", text: "$\\Delta t = 4.0\\ \\mathrm{s}$, so $v_{\\mathrm{av},x} = -80/4.0 = -20\\ \\mathrm{m/s}$." },
          { label: "Read", text: "Negative means net motion toward $-x$ at $20\\ \\mathrm{m/s}$ on average." }
        ],
        result: "$v_{\\mathrm{av},x} = -20\\ \\mathrm{m/s}$."
      }
    ],
    keyTakeaways: [
      "Displacement $\\Delta x = x_2-x_1$ is signed; distance is not.",
      "Average velocity is $\\Delta x/\\Delta t$; average speed is path over time.",
      "In 1D the algebraic sign encodes direction."
    ],
    quiz: [
      {
        q: "You walk $7\\ \\mathrm{m}$ east then $5\\ \\mathrm{m}$ west. Displacement and distance are:",
        options: ["$12\\ \\mathrm{m}$ east; $2\\ \\mathrm{m}$", "$2\\ \\mathrm{m}$ east; $12\\ \\mathrm{m}$", "$12\\ \\mathrm{m}$ west; $2\\ \\mathrm{m}$", "Zero; zero"],
        answer: 1,
        explanation: "Displacement nets to $+2\\ \\mathrm{m}$; distance accumulates every step to $12\\ \\mathrm{m}$."
      },
      {
        q: "A round trip that returns to the start has:",
        options: ["Zero average velocity but positive average speed", "Zero average speed but positive velocity", "Negative speed", "Infinite velocity"],
        answer: 0,
        explanation: "$\\Delta x = 0$ kills average velocity, but path length keeps average speed positive."
      },
      {
        q: "$v_{\\mathrm{av},x} = -20\\ \\mathrm{m/s}$ means:",
        options: ["Speed is negative", "Net motion toward $-x$ at $20\\ \\mathrm{m/s}$ on average", "The object is at $x = -20\\ \\mathrm{m}$", "Acceleration is $-20\\ \\mathrm{m/s^2}$"],
        answer: 1,
        explanation: "Speed is $|v|$; the sign on velocity is pure direction information."
      }
    ]
  },
  {
    sectionId: "young-ch2-s2",
    readingTime: 6,
    intro: "Average velocity blurs what happens inside the interval. Shrinking the interval to zero defines instantaneous velocity — the slope of the tangent to the position-time graph — which is what the speedometer actually reports.",
    objectives: [
      "Define instantaneous velocity as $v_x = dx/dt$",
      "Read velocity from slopes and tangents of $x$-$t$ graphs",
      "Distinguish instantaneous velocity from average velocity"
    ],
    concepts: [
      {
        term: "Instantaneous velocity",
        kind: "definition",
        statement: "**Instantaneous velocity** $v_x = \\lim_{\\Delta t\\to 0}\\Delta x/\\Delta t = dx/dt$ is the **rate of change of position** at one instant.",
        detail: "It is the average velocity over an infinitesimal interval — the limit where secant slopes become the tangent slope."
      },
      {
        term: "Tangent-slope reading",
        kind: "method",
        statement: "On an **$x$-$t$ graph**, $v_x$ is the **slope of the tangent**: rising means $v_x > 0$, falling means $v_x < 0$, flat means instant rest.",
        detail: "A curve steepening upward shows speeding up in $+x$; an inflection where slope is extreme marks maximum speed."
      },
      {
        term: "Position from velocity (preview)",
        kind: "insight",
        statement: "Conversely, **displacement is the area under $v_x$-$t$**: $\\Delta x = \\int v_x\\,dt$.",
        detail: "Counting squares under a velocity curve recovers how far the object moved — developed fully in Sec 2.6."
      },
      {
        term: "Speed is the magnitude",
        kind: "definition",
        statement: "**Instantaneous speed** is $|v_x|$: direction stripped away, never negative.",
        detail: "Reversing direction flips $v_x$ from $+6\\ \\mathrm{m/s}$ to $-6\\ \\mathrm{m/s}$ while speed stays $6\\ \\mathrm{m/s}$."
      },
      {
        term: "Calculus in one line",
        kind: "notation",
        statement: "For a polynomial position like $x = 5t^2$, **differentiation gives velocity directly**: $v_x = dx/dt = 10t$.",
        detail: "At $t = 3.0\\ \\mathrm{s}$, $v_x = 30\\ \\mathrm{m/s}$ — no interval arithmetic needed."
      }
    ],
    figures: [
      {
        caption: "Secant slopes $\\to$ tangent slope: instantaneous $v_x = dx/dt$ on an $x$-$t$ curve",
        svg: `<svg viewBox="0 0 720 210" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tangent slope on x-t graph"><line x1="60" y1="180" x2="680" y2="180" stroke="currentColor" stroke-width="1.5"/><line x1="90" y1="190" x2="90" y2="20" stroke="currentColor" stroke-width="1.5"/><path d="M 110 165 Q 300 160 420 100 T 640 40" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="250" y1="150" x2="500" y2="80" stroke="currentColor" stroke-width="1.5" stroke-dasharray="7 5"/><circle cx="380" cy="115" r="5" fill="currentColor"/><line x1="280" y1="140" x2="480" y2="90" stroke="currentColor" stroke-width="2"/><text x="500" y="75" font-size="12" fill="currentColor">tangent: vx at instant</text><text x="250" y="165" font-size="12" fill="currentColor" opacity="0.7">secant: average over interval</text><text x="640" y="198" font-size="12" fill="currentColor">t</text><text x="70" y="30" font-size="12" fill="currentColor">x</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Velocity from $x = 2t^3$",
        problem: "A particle obeys $x = 2.0t^3$ (SI units). Find $v_x$ at $t = 2.0\\ \\mathrm{s}$.",
        steps: [
          { label: "Differentiate", text: "$v_x = dx/dt = 6.0t^2$." },
          { label: "Evaluate", text: "At $t = 2.0$: $v_x = 6.0 \\times 4.0 = 24\\ \\mathrm{m/s}$." },
          { label: "Check", text: "Units $\\mathrm{m/s}$; positive means moving toward $+x$ and accelerating." }
        ],
        result: "$v_x = 24\\ \\mathrm{m/s}$ at $2.0\\ \\mathrm{s}$."
      },
      {
        title: "Reading an $x$-$t$ graph",
        problem: "An $x$-$t$ curve rises steeply, flattens at the top, then falls. Describe $v_x$.",
        steps: [
          { label: "Rising", text: "Positive slope: $v_x > 0$, large where steep." },
          { label: "Top", text: "Zero slope: instant rest, $v_x = 0$." },
          { label: "Falling", text: "Negative slope: $v_x < 0$ — the object comes back." }
        ],
        result: "$v_x$ goes positive to zero to negative; speed peaks where the curve is steepest."
      }
    ],
    keyTakeaways: [
      "$v_x = dx/dt$ is the tangent slope of the $x$-$t$ graph.",
      "Averages blur; the limit resolves the instant.",
      "Speed $|v_x|$ drops the sign; velocity keeps it."
    ],
    quiz: [
      {
        q: "Instantaneous velocity is defined as:",
        options: ["Total distance over total time", "$\\lim_{\\Delta t\\to 0}\\Delta x/\\Delta t = dx/dt$", "Acceleration times time always", "The maximum of $v_{\\mathrm{av}}$"],
        answer: 1,
        explanation: "Shrinking the interval turns the secant (average) slope into the tangent (instantaneous) slope."
      },
      {
        q: "On an $x$-$t$ graph a flat tangent means:",
        options: ["Maximum speed", "$v_x = 0$ — instant rest", "Infinite acceleration", "Negative position"],
        answer: 1,
        explanation: "Zero slope is zero rate of change of position."
      },
      {
        q: "For $x = 5t^2$ (SI), $v_x$ at $t = 3.0\\ \\mathrm{s}$ is:",
        options: ["$15\\ \\mathrm{m/s}$", "$30\\ \\mathrm{m/s}$", "$45\\ \\mathrm{m/s}$", "$10\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "$v_x = 10t = 30\\ \\mathrm{m/s}$."
      }
    ]
  },
  {
    sectionId: "young-ch2-s3",
    readingTime: 6,
    intro: "Acceleration is the rate at which velocity itself changes — the quantity you feel pressed into the seat or thrown forward. This section defines average and instantaneous acceleration and shows how to read speeding up versus slowing down from graphs.",
    objectives: [
      "Define $a_{\\mathrm{av},x}$ and $a_x = dv_x/dt$",
      "Use the sign rule relating $v_x$ and $a_x$ to speeding and slowing",
      "Read acceleration from $v_x$-$t$ slopes"
    ],
    concepts: [
      {
        term: "Average acceleration",
        kind: "definition",
        statement: "**Average acceleration** $a_{\\mathrm{av},x} = \\Delta v_x/\\Delta t$ is the change of velocity per unit time.",
        detail: "From $10$ to $30\\ \\mathrm{m/s}$ in $5.0\\ \\mathrm{s}$: $a_{\\mathrm{av},x} = 20/5.0 = 4.0\\ \\mathrm{m/s^2}$."
      },
      {
        term: "Instantaneous acceleration",
        kind: "definition",
        statement: "**Instantaneous acceleration** $a_x = \\lim_{\\Delta t\\to 0}\\Delta v_x/\\Delta t = dv_x/dt = d^2x/dt^2$.",
        detail: "It is the slope of the $v_x$-$t$ graph and the curvature of the $x$-$t$ graph at that instant."
      },
      {
        term: "Speeding versus slowing rule",
        kind: "theorem",
        statement: "**Same signs speed up; opposite signs slow down**: $v_x a_x > 0$ gains speed, $v_x a_x < 0$ loses speed.",
        detail: "$v_x = -8\\ \\mathrm{m/s}$, $a_x = -3\\ \\mathrm{m/s^2}$ speeds up in $-x$; flipping $a_x$ to $+3$ brakes the motion."
      },
      {
        term: "Deceleration done right",
        kind: "insight",
        statement: "**Deceleration means speed decreasing**, not $a_x < 0$: slowing in $+x$ needs $a_x < 0$, slowing in $-x$ needs $a_x > 0$.",
        detail: "Young avoids the word deceleration precisely because its sign depends on the direction of motion."
      },
      {
        term: "Units of acceleration",
        kind: "notation",
        statement: "Acceleration carries **$\\mathrm{m/s^2}$** — meters per second gained every second.",
        detail: "$9.8\\ \\mathrm{m/s^2}$ means each second of fall adds $9.8\\ \\mathrm{m/s}$ of downward velocity."
      }
    ],
    examples: [
      {
        title: "Braking acceleration",
        problem: "A car slows from $25\\ \\mathrm{m/s}$ to $5.0\\ \\mathrm{m/s}$ in $4.0\\ \\mathrm{s}$. Find $a_{\\mathrm{av},x}$.",
        steps: [
          { label: "Change", text: "$\\Delta v_x = 5.0 - 25 = -20\\ \\mathrm{m/s}$." },
          { label: "Divide", text: "$a_{\\mathrm{av},x} = -20/4.0 = -5.0\\ \\mathrm{m/s^2}$." },
          { label: "Interpret", text: "$v_x > 0$, $a_x < 0$: opposite signs, speed drops — genuine braking." }
        ],
        result: "$a_{\\mathrm{av},x} = -5.0\\ \\mathrm{m/s^2}$."
      },
      {
        title: "Speeding up in the negative direction",
        problem: "A particle has $v_x = -6.0\\ \\mathrm{m/s}$ and $a_x = -2.0\\ \\mathrm{m/s^2}$. Is it speeding up?",
        steps: [
          { label: "Sign test", text: "$v_x a_x = (-6.0)(-2.0) = +12 > 0$." },
          { label: "Conclude", text: "Same signs: speed increases, motion more negative each second." },
          { label: "One second later", text: "$v_x \\approx -6.0 + (-2.0)(1.0) = -8.0\\ \\mathrm{m/s}$ — faster in $-x$." }
        ],
        result: "Yes — speeding up toward $-x$ despite negative acceleration."
      }
    ],
    keyTakeaways: [
      "$a_x = dv_x/dt$ is the $v_x$-$t$ slope at the instant.",
      "Compare signs of $v_x$ and $a_x$ to judge speeding versus slowing.",
      "Negative acceleration alone does not mean slowing down."
    ],
    quiz: [
      {
        q: "$v_x = -8\\ \\mathrm{m/s}$ and $a_x = -3\\ \\mathrm{m/s^2}$. The object is:",
        options: ["Slowing down", "Speeding up in $-x$", "At rest", "Moving with constant velocity"],
        answer: 1,
        explanation: "Same signs give $v_x a_x > 0$: speed grows while direction stays negative."
      },
      {
        q: "Instantaneous acceleration equals:",
        options: ["$\\Delta x/\\Delta t$", "$dv_x/dt = d^2x/dt^2$", "$x/t^2$", "Always $9.8\\ \\mathrm{m/s^2}$"],
        answer: 1,
        explanation: "Acceleration is the first derivative of velocity and the second derivative of position."
      },
      {
        q: "On a $v_x$-$t$ graph, acceleration is:",
        options: ["The area under the curve", "The slope of the tangent", "The intercept", "Always zero"],
        answer: 1,
        explanation: "Slope of velocity versus time is rate of change of velocity — acceleration."
      }
    ]
  },
  {
    sectionId: "young-ch2-s4",
    readingTime: 7,
    intro: "When acceleration is constant, velocity grows linearly and position quadratically, giving four compact kinematic equations. This section derives them once from graphs and calculus, then drills the systematic way to deploy them.",
    objectives: [
      "Derive and state the four constant-acceleration equations",
      "Choose the equation containing the target but not the missing variable",
      "Solve 1D problems with consistent signs and units"
    ],
    concepts: [
      {
        term: "Velocity as a function of time",
        kind: "theorem",
        statement: "For constant $a_x$: **$v_x = v_{0x} + a_x t$** — velocity is linear in time.",
        detail: "It is the integrated form of $a_x = dv_x/dt$: each second adds $a_x$ to the velocity."
      },
      {
        term: "Position as a function of time",
        kind: "theorem",
        statement: "For constant $a_x$: **$x = x_0 + v_{0x}t + \\frac{1}{2}a_x t^2$** — position is quadratic in time.",
        detail: "The $v_{0x}t$ term coasts at the initial rate; $\\frac{1}{2}a_x t^2$ accumulates the steady gain."
      },
      {
        term: "Timeless equation",
        kind: "theorem",
        statement: "Eliminating $t$ gives **$v_x^2 = v_{0x}^2 + 2a_x(x-x_0)$**, ideal when time is unknown.",
        detail: "Stopping distance with no clock: $\\Delta x = -v_{0x}^2/2a_x$ for $v_x = 0$."
      },
      {
        term: "Average-velocity form",
        kind: "theorem",
        statement: "Because $v_x$ is linear, **$x - x_0 = \\frac{1}{2}(v_{0x}+v_x)t$** — displacement is mean velocity times time.",
        detail: "Geometrically it is the trapezoid area under the $v_x$-$t$ line."
      },
      {
        term: "Strategy for constant $a_x$",
        kind: "method",
        statement: "**List $x_0, v_{0x}, a_x, t$ and the target; pick the equation missing the unneeded variable; solve symbolically; then substitute.**",
        detail: "Unknown $t$ but want $v_x$ over a distance: reach for the timeless equation, not the quadratic in $t$."
      }
    ],
    figures: [
      {
        caption: "Constant $a_x$: linear $v_x$-$t$ graph whose area is $\\Delta x = v_{0x}t + \\frac{1}{2}a_x t^2$",
        svg: `<svg viewBox="0 0 720 210" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Velocity-time area"><line x1="80" y1="180" x2="680" y2="180" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="190" x2="100" y2="20" stroke="currentColor" stroke-width="1.5"/><line x1="100" y1="140" x2="600" y2="50" stroke="currentColor" stroke-width="2.5"/><line x1="100" y1="140" x2="600" y2="140" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="600" y1="140" x2="600" y2="50" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="330" y="165" font-size="12" fill="currentColor" opacity="0.7">rectangle: v0x times t</text><text x="420" y="110" font-size="12" fill="currentColor" opacity="0.7">triangle: half ax t squared</text><text x="640" y="198" font-size="12" fill="currentColor">t</text><text x="75" y="30" font-size="12" fill="currentColor">vx</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Landing speed from a runway",
        problem: "A jet touches down at $70\\ \\mathrm{m/s}$ and stops in $800\\ \\mathrm{m}$. Find the (constant) acceleration and stopping time.",
        steps: [
          { label: "Pick equation", text: "No $t$ wanted first: $v_x^2 = v_{0x}^2 + 2a_x\\Delta x$ with $v_x = 0$." },
          { label: "Solve", text: "$a_x = (0 - 70^2)/(2 \\times 800) = -4900/1600 = -3.06\\ \\mathrm{m/s^2}$." },
          { label: "Time", text: "$v_x = v_{0x}+a_x t$ gives $t = (0-70)/(-3.06) = 22.9\\ \\mathrm{s}$." }
        ],
        result: "$a_x = -3.06\\ \\mathrm{m/s^2}$; $t = 22.9\\ \\mathrm{s}$ to stop."
      },
      {
        title: "Distance during acceleration",
        problem: "A car with $v_{0x} = 12\\ \\mathrm{m/s}$ accelerates at $2.5\\ \\mathrm{m/s^2}$ for $6.0\\ \\mathrm{s}$. How far?",
        steps: [
          { label: "Pick equation", text: "$x - x_0 = v_{0x}t + \\frac{1}{2}a_x t^2$." },
          { label: "Substitute", text: "$\\Delta x = 12 \\times 6.0 + 0.5 \\times 2.5 \\times 36 = 72 + 45 = 117\\ \\mathrm{m}$." },
          { label: "Final speed check", text: "$v_x = 12 + 2.5 \\times 6.0 = 27\\ \\mathrm{m/s}$ — consistent via mean $(12+27)/2 \\times 6.0 = 117\\ \\mathrm{m}$." }
        ],
        result: "$117\\ \\mathrm{m}$ traveled; final speed $27\\ \\mathrm{m/s}$."
      }
    ],
    keyTakeaways: [
      "Constant $a_x$ gives linear $v_x$ and quadratic $x$ — four linked equations.",
      "Let the missing variable choose the equation.",
      "Signs and units fixed at setup decide correctness."
    ],
    quiz: [
      {
        q: "Which equation directly gives stopping distance when $t$ is unknown?",
        options: ["$x = x_0 + v_{0x}t + \\frac{1}{2}a_x t^2$", "$v_x^2 = v_{0x}^2 + 2a_x(x-x_0)$", "$v_x = v_{0x} + a_x t$", "$x = x_0 + vt$ with $v$ varying"],
        answer: 1,
        explanation: "The timeless equation omits $t$ by construction — ideal for $v$ over a distance."
      },
      {
        q: "A jet stops from $70\\ \\mathrm{m/s}$ in $800\\ \\mathrm{m}$. Its acceleration is about:",
        options: ["$-30\\ \\mathrm{m/s^2}$", "$-3.1\\ \\mathrm{m/s^2}$", "$+3.1\\ \\mathrm{m/s^2}$", "Zero"],
        answer: 1,
        explanation: "$a_x = -70^2/1600 = -3.06\\ \\mathrm{m/s^2}$ — firm but survivable braking."
      },
      {
        q: "Why is $x - x_0 = \\frac{1}{2}(v_{0x}+v_x)t$ valid only for constant $a_x$?",
        options: ["It uses instantaneous values only", "Mean velocity equals $(v_{0x}+v_x)/2$ only when $v_x$ is linear in $t$", "Time must be zero", "Displacement is always zero"],
        answer: 1,
        explanation: "Averaging endpoints works exactly for a straight $v_x$-$t$ line — constant acceleration."
      }
    ]
  },
  {
    sectionId: "young-ch2-s5",
    readingTime: 6,
    intro: "Free fall is constant-acceleration motion with $a_y$ set by gravity. With a clear vertical axis and sign convention, every dropped, thrown-down, or thrown-up object obeys the same four equations from Section 2.4.",
    objectives: [
      "Model free fall with $a_y = -g$ after choosing $+y$ upward",
      "Solve up-and-downExtend motion through the turnaround point",
      "Explain why mass cancels in free fall"
    ],
    concepts: [
      {
        term: "Free-fall acceleration",
        kind: "law",
        statement: "Near Earth, free fall has **$|a| = g = 9.80\\ \\mathrm{m/s^2}$ downward**, independent of mass when air drag is negligible.",
        detail: "With $+y$ upward, $a_y = -g$; the minus sign is the whole physics of downward pull."
      },
      {
        term: "Sign convention",
        kind: "method",
        statement: "Fix **$+y$ upward once**: initial $v_{0y} > 0$ means launched up; $y - y_0 < 0$ means below the start.",
        detail: "A ball thrown down at $5\\ \\mathrm{m/s}$ starts with $v_{0y} = -5.0\\ \\mathrm{m/s}$ — the sign does the aiming."
      },
      {
        term: "Symmetry of up-and-down flight",
        kind: "theorem",
        statement: "Without air drag, flight is **symmetric**: speed at a height is the same up and down; up-time equals down-time to the same level.",
        detail: "Thrown up at $15\\ \\mathrm{m/s}$, the ball returns to the hand at $15\\ \\mathrm{m/s}$ downward after $2v_0/g = 3.06\\ \\mathrm{s}$."
      },
      {
        term: "Top of flight",
        kind: "insight",
        statement: "At the **peak, $v_y = 0$ instantaneously** while $a_y = -g$ still acts — zero velocity does not mean zero acceleration.",
        detail: "Height follows from the timeless equation: $H = v_{0y}^2/2g$ above launch."
      },
      {
        term: "Mass independence",
        kind: "insight",
        statement: "Gravitational force $mg$ and inertia $m$ **cancel** ($a = F/m = g$), so all masses fall together in vacuum.",
        detail: "Air drag breaks the tie — feathers versus hammers differ in air, not on the Moon."
      }
    ],
    examples: [
      {
        title: "Dropped from a tower",
        problem: "A stone is dropped ($v_{0y} = 0$) from $45.0\\ \\mathrm{m}$. Find fall time and impact speed.",
        steps: [
          { label: "Set axis", text: "$+y$ up, $y_0 = 45.0$, $y = 0$, $a_y = -9.80\\ \\mathrm{m/s^2}$." },
          { label: "Time", text: "$y-y_0 = -\\frac{1}{2}gt^2$: $-45.0 = -4.90t^2$, so $t = \\sqrt{45.0/4.90} = 3.03\\ \\mathrm{s}$." },
          { label: "Speed", text: "$v_y = -gt = -29.7\\ \\mathrm{m/s}$ — $29.7\\ \\mathrm{m/s}$ downward." }
        ],
        result: "$3.03\\ \\mathrm{s}$ of fall; $29.7\\ \\mathrm{m/s}$ impact speed."
      },
      {
        title: "Thrown upward",
        problem: "A ball is thrown up at $15.0\\ \\mathrm{m/s}$ from ground. Find max height and total flight time.",
        steps: [
          { label: "Height", text: "$H = v_{0y}^2/2g = 225/19.6 = 11.5\\ \\mathrm{m}$." },
          { label: "Time up", text: "$t_{\\mathrm{up}} = v_{0y}/g = 15.0/9.80 = 1.53\\ \\mathrm{s}$." },
          { label: "Total", text: "Symmetric return: $T = 2 \\times 1.53 = 3.06\\ \\mathrm{s}$." }
        ],
        result: "$11.5\\ \\mathrm{m}$ high; $3.06\\ \\mathrm{s}$ aloft."
      }
    ],
    keyTakeaways: [
      "Free fall is constant $-g$ motion after fixing $+y$ upward.",
      "Peak means $v_y = 0$, never $a_y = 0$.",
      "Up-down symmetry halves the work: compute one leg, double it."
    ],
    quiz: [
      {
        q: "With $+y$ upward, free-fall acceleration is:",
        options: ["$a_y = +g$", "$a_y = -g$", "$a_y = 0$ at the peak", "Upward and growing"],
        answer: 1,
        explanation: "Gravity pulls toward $-y$ throughout, including the instant $v_y = 0$."
      },
      {
        q: "Dropped from $45.0\\ \\mathrm{m}$, fall time is about:",
        options: ["$9.8\\ \\mathrm{s}$", "$3.03\\ \\mathrm{s}$", "$4.5\\ \\mathrm{s}$", "$1.5\\ \\mathrm{s}$"],
        answer: 1,
        explanation: "$t = \\sqrt{2h/g} = \\sqrt{90/9.8} = 3.03\\ \\mathrm{s}$."
      },
      {
        q: "Why do all masses fall together without air?",
        options: ["Gravity ignores mass", "Heavier objects get proportionally more force, canceling inertia: $a = mg/m = g$", "The Moon pulls them", "Time stops for heavy objects"],
        answer: 1,
        explanation: "Weight scales with $m$ exactly as inertia resists — the ratio is mass-free."
      }
    ]
  },
  {
    sectionId: "young-ch2-s6",
    readingTime: 6,
    intro: "Constant acceleration is a special case. In general, velocity is the integral of acceleration and position the integral of velocity — with areas under curves doing the integration graphically when formulas are unavailable.",
    objectives: [
      "Recover $v_x$ and $x$ by integrating $a_x$ and $v_x$",
      "Use areas under $a_x$-$t$ and $v_x$-$t$ curves graphically",
      "Handle non-constant acceleration examples"
    ],
    concepts: [
      {
        term: "Velocity from acceleration",
        kind: "theorem",
        statement: "**$v_x(t) = v_{0x} + \\int_0^t a_x(t\\prime)\\,dt\\prime$** — velocity accumulates signed area under $a_x$-$t$.",
        detail: "Constant $a_x$ recovers $v_{0x}+a_x t$ as the rectangle area; varying $a_x$ needs the true integral."
      },
      {
        term: "Position from velocity",
        kind: "theorem",
        statement: "**$x(t) = x_0 + \\int_0^t v_x(t\\prime)\\,dt\\prime$** — position accumulates signed area under $v_x$-$t$.",
        detail: "Above-axis area moves $+x$; below-axis area moves $-x$; net area is displacement."
      },
      {
        term: "Graphical integration",
        kind: "method",
        statement: "**Count squares** under $a_x$-$t$ for $\\Delta v_x$ and under $v_x$-$t$ for $\\Delta x$, with sign by side of the axis.",
        detail: "Young uses this when $a_x(t)$ is known only as a recorded curve — no formula required."
      },
      {
        term: "Differentiation reverses integration",
        kind: "insight",
        statement: "**Slopes undo areas**: $a_x = dv_x/dt$ differentiates what $\\int a_x\\,dt$ accumulates.",
        detail: "Checking by differentiating the integrated result catches sign and factor errors."
      },
      {
        term: "Non-constant example",
        kind: "method",
        statement: "For **$a_x = kt$**, $v_x = v_{0x} + \\frac{1}{2}kt^2$ and $x = x_0 + v_{0x}t + \\frac{1}{6}kt^3$ by direct integration.",
        detail: "Each integration raises the power of $t$ by one and divides by the new power."
      }
    ],
    figures: [
      {
        caption: "Area under $v_x$-$t$ is displacement $\\Delta x$; area under $a_x$-$t$ is $\\Delta v_x$",
        svg: `<svg viewBox="0 0 720 210" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Integration as area"><line x1="60" y1="180" x2="340" y2="180" stroke="currentColor" stroke-width="1.5"/><line x1="80" y1="190" x2="80" y2="30" stroke="currentColor" stroke-width="1.5"/><path d="M 80 150 Q 180 140 260 70 L 260 180 L 80 180 Z" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="170" y="150" font-size="12" fill="currentColor">area = delta x</text><line x1="400" y1="180" x2="680" y2="180" stroke="currentColor" stroke-width="1.5"/><line x1="420" y1="190" x2="420" y2="30" stroke="currentColor" stroke-width="1.5"/><path d="M 420 120 L 520 120 L 560 70 L 640 70 L 640 180 L 420 180 Z" fill="currentColor" opacity="0.15" stroke="currentColor" stroke-width="2"/><text x="500" y="150" font-size="12" fill="currentColor">area = delta v</text><text x="300" y="200" font-size="12" fill="currentColor">v-t</text><text x="640" y="200" font-size="12" fill="currentColor">a-t</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: "Integrating $a_x = kt$",
        problem: "A particle starts from rest with $a_x = 2.0t\\ \\mathrm{m/s^2}$. Find $v_x$ and $x$ at $t = 3.0\\ \\mathrm{s}$.",
        steps: [
          { label: "Velocity", text: "$v_x = \\int_0^t 2.0t\\prime\\,dt\\prime = 1.0t^2$; at $3.0\\ \\mathrm{s}$, $v_x = 9.0\\ \\mathrm{m/s}$." },
          { label: "Position", text: "$x = \\int_0^t 1.0t\\prime^2\\,dt\\prime = t^3/3$; at $3.0\\ \\mathrm{s}$, $x = 9.0\\ \\mathrm{m}$." },
          { label: "Check", text: "Differentiate back: $d(9.0)/dt$ at $3.0$ is $6.0\\ \\mathrm{m/s^2} = 2.0 \\times 3.0$ — consistent." }
        ],
        result: "$v_x = 9.0\\ \\mathrm{m/s}$, $x = 9.0\\ \\mathrm{m}$ at $3.0\\ \\mathrm{s}$."
      },
      {
        title: "Graphical area",
        problem: "A $v_x$-$t$ graph forms a triangle with base $4.0\\ \\mathrm{s}$ and peak $6.0\\ \\mathrm{m/s}$. Find $\\Delta x$.",
        steps: [
          { label: "Area", text: "$\\Delta x = \\frac{1}{2} \\times 4.0 \\times 6.0 = 12\\ \\mathrm{m}$." },
          { label: "Sign", text: "Curve above axis: motion toward $+x$." },
          { label: "Mean check", text: "Mean velocity $3.0\\ \\mathrm{m/s}$ over $4.0\\ \\mathrm{s}$ is $12\\ \\mathrm{m}$." }
        ],
        result: "Displacement $12\\ \\mathrm{m}$ from geometry alone."
      }
    ],
    keyTakeaways: [
      "Integrate acceleration for velocity, velocity for position.",
      "Signed area under the curve is the integral — no formula needed.",
      "Differentiate results to verify integrations."
    ],
    quiz: [
      {
        q: "Velocity from general $a_x(t)$ is:",
        options: ["$v_{0x} + a_x t$ always", "$v_{0x} + \\int_0^t a_x(t\\prime)\\,dt\\prime$", "$x/t$", "Zero"],
        answer: 1,
        explanation: "$v_{0x}+a_x t$ is the constant-$a_x$ special case; the integral is the general rule."
      },
      {
        q: "Area under $v_x$-$t$ between $t_1$ and $t_2$ gives:",
        options: ["Acceleration", "Displacement $x_2-x_1$", "Jerk", "Mass"],
        answer: 1,
        explanation: "Summing $v_x\\,dt$ strips over time accumulates net change of position."
      },
      {
        q: "For $a_x = 2.0t$ from rest, $v_x$ at $3.0\\ \\mathrm{s}$ is:",
        options: ["$6.0\\ \\mathrm{m/s}$", "$9.0\\ \\mathrm{m/s}$", "$18\\ \\mathrm{m/s}$", "$3.0\\ \\mathrm{m/s}$"],
        answer: 1,
        explanation: "$v_x = t^2 = 9.0\\ \\mathrm{m/s}$ by direct integration."
      }
    ]
  }
];
