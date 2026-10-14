import type { SectionContent } from "../library";

// ============================================================================
// Young & Freedman University Physics 15th ed. — Chapter 14
// Periodic Motion (Secs 14.1–14.8)
// ============================================================================

export const youngCh14Content: SectionContent[] = [
  {
    sectionId: "young-ch14-s1",
    readingTime: 4,
    intro: "Oscillation repeats in time: a mass on a spring, a swing, a quartz crystal. This section names amplitude, period, frequency, and phase — the vocabulary every later oscillator reuses.",
    objectives: [
      "Define amplitude $A$, period $T$, frequency $f$, angular frequency $\\omega$",
      "Relate $f = 1/T$ and $\\omega = 2\\pi f$",
      "Identify equilibrium as the oscillation center"
    ],
    concepts: [
      {
        term: "Period and frequency",
        kind: "definition",
        statement: "**Period $T$** ($\\mathrm{s}$) is time per cycle; **frequency $f = 1/T$** ($\\mathrm{Hz}$) is cycles per second.",
        detail: "Guitar $440\\ \\mathrm{Hz}$: $T = 2.27\\ \\mathrm{ms}$; pendulum $2.0\\ \\mathrm{s}$: $f = 0.50\\ \\mathrm{Hz}$."
      },
      {
        term: "Angular frequency",
        kind: "definition",
        statement: "**$\\omega = 2\\pi f = 2\\pi/T$** ($\\mathrm{rad/s}$) is the phase rate — radians of cycle per second.",
        detail: "$60\\ \\mathrm{Hz}$ mains: $\\omega = 377\\ \\mathrm{rad/s}$."
      },
      {
        term: "Amplitude",
        kind: "definition",
        statement: "**Amplitude $A$** is **maximum displacement from equilibrium** — the swing size.",
        detail: "$A = 0.10\\ \\mathrm{m}$ spring motion spans $0.20\\ \\mathrm{m}$ peak to peak."
      },
      {
        term: "Equilibrium center",
        kind: "insight",
        statement: "Oscillation **centers on stable equilibrium** where net static force vanishes; restoring forces point home.",
        detail: "Hanging mass equilibrium sags $mg/k$ below the natural length — oscillations orbit that point."
      },
      {
        term: "Phase",
        kind: "notation",
        statement: "**Phase $\\phi$** ($\\omega t + \\phi$) fixes **where in the cycle** at $t = 0$ — cosine versus sine start.",
        detail: "$x = A\\cos(\\omega t)$ starts at $+A$; $x = A\\sin(\\omega t)$ starts at $0$ heading up."
      }
    ],
    examples: [
      {
        title: "Metronome numbers",
        problem: "A metronome ticks $120$ times per minute (each tick half cycle?). Take beats as cycles at $2.0\\ \\mathrm{Hz}$. Find $T$ and $\\omega$.",
        steps: [
          { label: "Period", text: "$T = 1/2.0 = 0.50\\ \\mathrm{s}$." },
          { label: "Angular", text: "$\\omega = 2\\pi \\times 2.0 = 12.6\\ \\mathrm{rad/s}$." },
          { label: "Check", text: "$120$/min $= 2.0$/s — consistent." }
        ],
        result: "$T = 0.50\\ \\mathrm{s}$; $\\omega = 12.6\\ \\mathrm{rad/s}$."
      },
      {
        title: "Amplitude reading",
        problem: "A spring record shows $x$ swinging $+6.0$ to $-6.0\\ \\mathrm{cm}$. Find $A$.",
        steps: [
          { label: "Amplitude", text: "$A = 6.0\\ \\mathrm{cm}$ from center." },
          { label: "Peak-peak", text: "$12\\ \\mathrm{cm}$ total travel." },
          { label: "Equilibrium", text: "Midpoint $0$ — oscillation center." }
        ],
        result: "$A = 6.0\\ \\mathrm{cm}$."
      }
    ],
    keyTakeaways: [
      "$T$ times, $f$ counts, $\\omega$ phases — one cycle three ways.",
      "Amplitude measures from equilibrium, not peak to peak.",
      "Phase sets the starting point in the cycle."
    ],
    quiz: [
      {
        q: "$440\\ \\mathrm{Hz}$ has period:",
        options: ["$440\\ \\mathrm{s}$", "$2.27\\ \\mathrm{ms}$", "$440\\ \\mathrm{ms}$", "$1\\ \\mathrm{s}$"],
        answer: 1,
        explanation: "$T = 1/440 = 2.27 \\times 10^{-3}\\ \\mathrm{s}$."
      },
      {
        q: "Amplitude is:",
        options: ["Peak-to-peak distance", "Max displacement from equilibrium", "Period", "Frequency"],
        answer: 1,
        explanation: "Half the peak-to-peak swing."
      },
      {
        q: "$\\omega$ for $2.0\\ \\mathrm{Hz}$ is:",
        options: ["$2.0\\ \\mathrm{rad/s}$", "$12.6\\ \\mathrm{rad/s}$", "$0.50\\ \\mathrm{rad/s}$", "$6.28\\ \\mathrm{Hz}$"],
        answer: 1,
        explanation: "$2\\pi f = 12.6\\ \\mathrm{rad/s}$."
      }
    ]
  },
  {
    sectionId: "young-ch14-s2",
    readingTime: 7,
    intro: "Linear restoring force $F_x = -kx$ produces sinusoidal motion: $x = A\\cos(\\omega t+\\phi)$ with $\\omega = \\sqrt{k/m}$. This section solves simple harmonic motion and differentiates it for velocity and acceleration.",
    objectives: [
      "Solve $m\\ddot{x} = -kx$ by $x = A\\cos(\\omega t+\\phi)$",
      "State $\\omega = \\sqrt{k/m}$, $T = 2\\pi\\sqrt{m/k}$",
      "Write $v_x$, $a_x$ and their amplitudes"
    ],
    concepts: [
      {
        term: "SHM equation",
        kind: "law",
        statement: "**$m\\,d^2x/dt^2 = -kx$**: acceleration proportional and opposite to displacement — SHM definition.",
        detail: "Stiffness $k$ pulls home; inertia $m$ overshoots — oscillation."
      },
      {
        term: "Sinusoidal solution",
        kind: "theorem",
        statement: "**$x = A\\cos(\\omega t+\\phi)$** with **$\\omega = \\sqrt{k/m}$** solves the equation for any $A, \\phi$.",
        detail: "Second derivative $-\\omega^2x$ times $m$ equals $-kx$ exactly when $\\omega^2 = k/m$."
      },
      {
        term: "Period and frequency",
        kind: "theorem",
        statement: "**$T = 2\\pi\\sqrt{m/k}$**, **$f = (1/2\\pi)\\sqrt{k/m}$** — heavy swings slow, stiff swings fast; $A$ drops out (isochrony).",
        detail: "$m = 0.50\\ \\mathrm{kg}$, $k = 200$: $T = 0.314\\ \\mathrm{s}$."
      },
      {
        term: "Velocity and acceleration",
        kind: "theorem",
        statement: "**$v_x = -\\omega A\\sin(\\omega t+\\phi)$**, **$a_x = -\\omega^2A\\cos(\\omega t+\\phi) = -\\omega^2x$**.",
        detail: "Speed peaks $\\omega A$ at center; acceleration peaks $\\omega^2A$ at extremes."
      },
      {
        term: "Phase from initial conditions",
        kind: "method",
        statement: "**$x_0 = A\\cos\\phi$, $v_{0x} = -\\omega A\\sin\\phi$** fix $A = \\sqrt{x_0^2+(v_{0x}/\\omega)^2}$, $\\tan\\phi = -v_{0x}/\\omega x_0$.",
        detail: "Start at rest at $+A$: $\\phi = 0$; start at $0$ heading $+$: $\\phi = -\\pi/2$."
      }
    ],
    figures: [
      {
        caption: "SHM: $x = A\\cos\\omega t$ with $v_x$ quarter-cycle ahead in quadrature and $a_x$ antiphase",
        svg: `<svg viewBox="0 0 720 200" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="SHM curves"><line x1="60" y1="100" x2="680" y2="100" stroke="currentColor" stroke-width="1"/><path d="M 60 60 Q 140 60 180 100 T 300 140 T 420 100 T 540 60 T 660 100" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M 60 100 Q 100 140 180 140 T 300 100 T 420 60 T 540 60" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="600" y="60" font-size="11" fill="currentColor">x (solid)</text><text x="600" y="150" font-size="11" fill="currentColor" opacity="0.7">v dashed: quarter ahead</text></svg>`,
        afterConcept: 4
      }
    ],
    examples: [
      {
        title: "Spring clock",
        problem: "$m = 0.50\\ \\mathrm{kg}$, $k = 200\\ \\mathrm{N/m}$, $A = 0.060\\ \\mathrm{m}$. Find $T$, $v_{\\max}$, $a_{\\max}$.",
        steps: [
          { label: "Frequency", text: "$\\omega = \\sqrt{400} = 20\\ \\mathrm{rad/s}$; $T = 0.314\\ \\mathrm{s}$; $f = 3.18\\ \\mathrm{Hz}$." },
          { label: "Amplitudes", text: "$v_{\\max} = 20 \\times 0.060 = 1.20\\ \\mathrm{m/s}$; $a_{\\max} = 400 \\times 0.060 = 24\\ \\mathrm{m/s^2}$." },
          { label: "Check", text: "$a_{\\max} = kA/m = 200 \\times 0.060/0.50 = 24$ — matches." }
        ],
        result: "$T = 0.314\\ \\mathrm{s}$; $1.20\\ \\mathrm{m/s}$; $24\\ \\mathrm{m/s^2}$."
      },
      {
        title: "Phase from a shove",
        problem: "Same oscillator starts at $x_0 = 0$ with $v_0 = +1.20\\ \\mathrm{m/s}$. Find $A$ and $\\phi$.",
        steps: [
          { label: "Amplitude", text: "$A = v_0/\\omega = 1.20/20 = 0.060\\ \\mathrm{m}$." },
          { label: "Phase", text: "$\\cos\\phi = 0$, $\\sin\\phi = -1$: $\\phi = -\\pi/2$." },
          { label: "Motion", text: "$x = 0.060\\cos(20t-\\pi/2) = 0.060\\sin 20t$." }
        ],
        result: "$A = 6.0\\ \\mathrm{cm}$, $\\phi = -\\pi/2$."
      }
    ],
    keyTakeaways: [
      "$F = -kx$ implies $\\omega = \\sqrt{k/m}$ sinusoids.",
      "Period ignores amplitude — SHM isochrony.",
      "$v$ leads $x$ by a quarter cycle; $a$ opposes $x$."
    ],
    quiz: [
      {
        q: "$m = 0.50\\ \\mathrm{kg}$, $k = 200\\ \\mathrm{N/m}$ gives $T$:",
        options: ["$3.18\\ \\mathrm{s}$", "$0.314\\ \\mathrm{s}$", "$20\\ \\mathrm{s}$", "$400\\ \\mathrm{s}$"],
        answer: 1,
        explanation: "$2\\pi\\sqrt{0.50/200} = 0.314\\ \\mathrm{s}$."
      },
      {
        q: "At extreme displacement, SHM has:",
        options: ["Max speed, zero acceleration", "Zero speed, max acceleration toward center", "Both max", "Both zero"],
        answer: 1,
        explanation: "$v = 0$ at turnarounds; $a = -\\omega^2x$ peaks."
      },
      {
        q: "Starting at $0$ heading positive corresponds to:",
        options: ["$\\phi = 0$", "$\\phi = -\\pi/2$ (sine start)", "$\\phi = \\pi$", "No phase"],
        answer: 1,
        explanation: "$\\cos(\\omega t-\\pi/2) = \\sin\\omega t$."
      }
    ]
  },
  {
    sectionId: "young-ch14-s3",
    readingTime: 5,
    intro: "Undamped SHM banks fixed total energy $E = \\frac{1}{2}kA^2$, swapping kinetic and potential twice per cycle. This section tracks the exchange and uses energy to find speeds at any position.",
    objectives: [
      "State $E = \\frac{1}{2}mv_x^2+\\frac{1}{2}kx^2 = \\frac{1}{2}kA^2$",
      "Find $v_x = \\pm\\omega\\sqrt{A^2-x^2}$ at any $x$",
      "Locate max $K$ and max $U$ points"
    ],
    concepts: [
      {
        term: "SHM energy conservation",
        kind: "theorem",
        statement: "**$E = \\frac{1}{2}mv_x^2 + \\frac{1}{2}kx^2 = \\frac{1}{2}kA^2$** constant without damping.",
        detail: "$k = 200$, $A = 0.060$: $E = 0.36\\ \\mathrm{J}$."
      },
      {
        term: "Speed at position",
        kind: "theorem",
        statement: "**$v_x = \\pm\\omega\\sqrt{A^2-x^2}$** — fastest at center, instant rest at extremes.",
        detail: "Half amplitude: $v = 0.866\\,v_{\\max}$ — most speed survives halfway out."
      },
      {
        term: "Energy halves",
        kind: "method",
        statement: "**$K = E(x/A$ swapped)**: $K = \\frac{1}{2}k(A^2-x^2)$, $U = \\frac{1}{2}kx^2$.",
        detail: "At $x = A/\\sqrt{2}$: $K = U = E/2$ — equal split."
      },
      {
        term: "Phase-space circle",
        kind: "insight",
        statement: "**$(x/A)^2 + (v/\\omega A)^2 = 1$** — SHM traces an ellipse in phase space, area $2\\pi E/\\omega$.",
        detail: "Damping spirals inward; driving distorts the ellipse."
      },
      {
        term: "Amplitude sets energy",
        kind: "insight",
        statement: "**$E \\propto A^2$**: doubling swing quadruples energy — loudspeakers pay quartically for bass.",
        detail: "$6.0 \\to 12\\ \\mathrm{cm}$: $0.36 \\to 1.44\\ \\mathrm{J}$."
      }
    ],
    examples: [
      {
        title: "Speed halfway out",
        problem: "$k = 200$, $m = 0.50$, $A = 0.060\\ \\mathrm{m}$. Find $v$ at $x = 0.030\\ \\mathrm{m}$.",
        steps: [
          { label: "Omega", text: "$\\omega = 20\\ \\mathrm{rad/s}$." },
          { label: "Formula", text: "$v = 20\\sqrt{0.0036-0.0009} = 20 \\times 0.0520 = 1.04\\ \\mathrm{m/s}$." },
          { label: "Energy", text: "$K = 0.27$, $U = 0.09\\ \\mathrm{J}$ — sums $0.36$." }
        ],
        result: "$1.04\\ \\mathrm{m/s}$ at half amplitude."
      },
      {
        title: "Energy from rest release",
        problem: "Same spring released rest at $A = 0.060$. Find center speed.",
        steps: [
          { label: "Energy", text: "$0.36 = 0.5 \\times 0.50 \\times v^2$: $v = 1.20\\ \\mathrm{m/s}$." },
          { label: "Check", text: "$v_{\\max} = \\omega A = 1.20$ — matches." },
          { label: "Double swing", text: "$A = 0.12$: $E = 1.44\\ \\mathrm{J}$, $v = 2.40$ — linear in $A$." }
        ],
        result: "$1.20\\ \\mathrm{m/s}$ at center."
      }
    ],
    keyTakeaways: [
      "SHM energy $\\frac{1}{2}kA^2$ never leaves without damping.",
      "$v(x)$ follows from the $K+U$ balance directly.",
      "Energy scales with amplitude squared."
    ],
    quiz: [
      {
        q: "$k = 200$, $A = 0.060$ stores:",
        options: ["$12\\ \\mathrm{J}$", "$0.36\\ \\mathrm{J}$", "$3.6\\ \\mathrm{J}$", "Zero"],
        answer: 1,
        explanation: "$0.5 \\times 200 \\times 0.0036 = 0.36\\ \\mathrm{J}$."
      },
      {
        q: "At $x = A/\\sqrt{2}$, SHM has:",
        options: ["$K = 0$", "$K = U = E/2$", "$U = 0$", "$E = 0$"],
        answer: 1,
        explanation: "$U = \\frac{1}{2}kA^2/2 = E/2$; remainder kinetic."
      },
      {
        q: "Doubling amplitude multiplies $E$ by:",
        options: ["2", "4", "8", "1"],
        answer: 1,
        explanation: "$E \\propto A^2$."
      }
    ]
  },
  {
    sectionId: "young-ch14-s4",
    readingTime: 5,
    intro: "Vertical springs and torsional fibers are the same oscillator with shifted equilibrium or angle. This section ports $\\omega = \\sqrt{k/m}$ to hanging masses and $\\omega = \\sqrt{\\kappa/I}$ to twists.",
    objectives: [
      "Show vertical springs oscillate about sagged equilibrium with $\\omega = \\sqrt{k/m}$",
      "Define torsional $\\tau = -\\kappa\\theta$ and $\\omega = \\sqrt{\\kappa/I}$",
      "Solve hanging and twisting numbers"
    ],
    concepts: [
      {
        term: "Vertical spring",
        kind: "theorem",
        statement: "Gravity **sags equilibrium by $mg/k$** but leaves **$\\omega = \\sqrt{k/m}$** unchanged — oscillations about the sag.",
        detail: "$k = 100$, $m = 1.0$: sag $9.8\\ \\mathrm{cm}$, $T = 0.628\\ \\mathrm{s}$."
      },
      {
        term: "Effective gravity cancellation",
        kind: "insight",
        statement: "Static $mg$ and $k\\Delta l$ **cancel in the dynamics**: $m\\ddot{y} = -ky_{\\mathrm{osc}}$ about equilibrium.",
        detail: "Measuring $T$ weighs mass in orbit — no $g$ in $\\omega$."
      },
      {
        term: "Torsional oscillator",
        kind: "definition",
        statement: "**$\\tau_z = -\\kappa\\theta$** twists back with constant $\\kappa$ ($\\mathrm{N\\cdot m/rad}$); **$\\omega = \\sqrt{\\kappa/I}$**.",
        detail: "Balance wheels and Cavendish fibers are torsional SHM."
      },
      {
        term: "Torsion period",
        kind: "theorem",
        statement: "**$T = 2\\pi\\sqrt{I/\\kappa}$** — heavy wheels turn slow, stiff fibers turn fast.",
        detail: "$I = 10^{-6}$, $\\kappa = 10^{-7}$: $T = 19.9\\ \\mathrm{s}$ — Cavendish slowness."
      },
      {
        term: "Universal SHM template",
        kind: "insight",
        statement: "**Any $\\ddot{q} = -(k_{\\mathrm{eff}}/m_{\\mathrm{eff}})q$ is SHM** — pendulums, circuits, molecules share the mathematics.",
        detail: "Recognizing the template predicts sinusoids before solving."
      }
    ],
    examples: [
      {
        title: "Hanging sag and period",
        problem: "$m = 1.0\\ \\mathrm{kg}$ hangs on $k = 100\\ \\mathrm{N/m}$. Find sag and $T$.",
        steps: [
          { label: "Sag", text: "$\\Delta l = 9.80/100 = 0.098\\ \\mathrm{m}$." },
          { label: "Period", text: "$T = 2\\pi\\sqrt{0.010} = 0.628\\ \\mathrm{s}$." },
          { label: "Shift", text: "Oscillations $\\pm 3.0\\ \\mathrm{cm}$ orbit $9.8\\ \\mathrm{cm}$ below natural length." }
        ],
        result: "$9.8\\ \\mathrm{cm}$ sag; $0.628\\ \\mathrm{s}$ period."
      },
      {
        title: "Torsion fiber",
        problem: "A disk ($I = 2.0 \\times 10^{-4}$) on $\\kappa = 8.0 \\times 10^{-3}$ twists $0.20\\ \\mathrm{rad}$ released. Find $T$ and $\\omega_{\\max}$.",
        steps: [
          { label: "Frequency", text: "$\\omega = \\sqrt{40} = 6.32\\ \\mathrm{rad/s}$; $T = 0.994\\ \\mathrm{s}$." },
          { label: "Speed", text: "$\\omega_{\\max} = 6.32 \\times 0.20 = 1.26\\ \\mathrm{rad/s}$." },
          { label: "Torque", text: "Peak $\\kappa\\theta = 1.60 \\times 10^{-3}\\ \\mathrm{N\\cdot m}$." }
        ],
        result: "$T = 0.994\\ \\mathrm{s}$; $1.26\\ \\mathrm{rad/s}$ peak."
      }
    ],
    keyTakeaways: [
      "Hanging springs sag but swing at $\\sqrt{k/m}$.",
      "Twists obey $\\sqrt{\\kappa/I}$ — same template, new constants.",
      "Spot $\\ddot{q} \\propto -q$ to claim SHM instantly."
    ],
    quiz: [
      {
        q: "$1.0\\ \\mathrm{kg}$ on $100\\ \\mathrm{N/m}$ sags:",
        options: ["$0.98\\ \\mathrm{m}$", "$9.8\\ \\mathrm{cm}$", "$1.0\\ \\mathrm{cm}$", "Zero"],
        answer: 1,
        explanation: "$mg/k = 9.80/100 = 0.098\\ \\mathrm{m}$."
      },
      {
        q: "Torsional frequency is:",
        options: ["$\\sqrt{k/m}$", "$\\sqrt{\\kappa/I}$", "$\\sqrt{I/\\kappa}$ inverted", "$2\\pi$ always"],
        answer: 1,
        explanation: "Torque constant over rotational inertia — rotational twin."
      },
      {
        q: "Vertical oscillation period depends on $g$:",
        options: ["Strongly", "Not at all — sag absorbs $g$", "Only at night", "Quadratically"],
        answer: 1,
        explanation: "Dynamics about sagged equilibrium cancels $mg$."
      }
    ]
  },
  {
    sectionId: "young-ch14-s5",
    readingTime: 5,
    intro: "Small-angle pendulums swing isochronously with $T = 2\\pi\\sqrt{L/g}$. This section derives the pendulum from torque, times real clocks, and corrects for amplitude and altitude.",
    objectives: [
      "Derive $\\omega = \\sqrt{g/L}$ for small angles",
      "Compute $T = 2\\pi\\sqrt{L/g}$ and design clock lengths",
      "State amplitude and $g$-variation corrections"
    ],
    concepts: [
      {
        term: "Pendulum equation",
        kind: "theorem",
        statement: "Torque $-mgL\\sin\\theta = I\\ddot{\\theta}$ with $I = mL^2$ gives **$\\ddot{\\theta} + (g/L)\\sin\\theta = 0$**.",
        detail: "Exact for any amplitude; nonlinear via $\\sin\\theta$."
      },
      {
        term: "Small-angle SHM",
        kind: "theorem",
        statement: "**$\\sin\\theta \\approx \\theta$** gives **$\\omega = \\sqrt{g/L}$**, **$T = 2\\pi\\sqrt{L/g}$** — amplitude-free.",
        detail: "$L = 1.00\\ \\mathrm{m}$: $T = 2.01\\ \\mathrm{s}$; seconds pendulum $0.994\\ \\mathrm{m}$."
      },
      {
        term: "Seconds pendulum",
        kind: "notation",
        statement: "**$L = g/\\pi^2 = 0.994\\ \\mathrm{m}$** beats $2.0\\ \\mathrm{s}$ round-trip ($1.0$ each way).",
        detail: "Huygens clocks used this length to tick seconds."
      },
      {
        term: "Amplitude correction",
        kind: "insight",
        statement: "Finite amplitude lengthens $T$ by **$\\approx (1+\\theta_0^2/16)$** — $10^{\\circ}$ adds $0.05$%.",
        detail: "Grandfather clocks keep arcs small for isochrony."
      },
      {
        term: "Gravimetry",
        kind: "method",
        statement: "**$g = 4\\pi^2L/T^2$** — timing a pendulum surveys gravity, oil, and altitude.",
        detail: "Mining prospectors map dense ore by microsecond period shifts."
      }
    ],
    figures: [
      {
        caption: "Pendulum: torque $-mgL\\sin\\theta$ gives $T = 2\\pi\\sqrt{L/g}$ for small $\\theta$",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Simple pendulum"><circle cx="360" cy="30" r="6" fill="currentColor"/><line x1="360" y1="30" x2="280" y2="150" stroke="currentColor" stroke-width="2.5"/><circle cx="280" cy="150" r="16" fill="none" stroke="currentColor" stroke-width="2.5"/><line x1="360" y1="30" x2="360" y2="160" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4"/><path d="M 360 70 A 45 45 0 0 0 340 68" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="330" y="85" font-size="12" fill="currentColor">theta</text><text x="280" y="180" font-size="11" text-anchor="middle" fill="currentColor">mg pulls to center</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Meter pendulum",
        problem: "Find $T$ for $L = 1.00\\ \\mathrm{m}$ ($g = 9.80$).",
        steps: [
          { label: "Formula", text: "$T = 2\\pi\\sqrt{1.00/9.80} = 2\\pi \\times 0.3194 = 2.007\\ \\mathrm{s}$." },
          { label: "Seconds length", text: "$L = 9.80/\\pi^2 = 0.993\\ \\mathrm{m}$ for $2.00\\ \\mathrm{s}$." },
          { label: "Moon check", text: "Same $L$ on Moon: $T = 2\\pi\\sqrt{1.00/1.62} = 4.94\\ \\mathrm{s}$." }
        ],
        result: "$2.01\\ \\mathrm{s}$; $0.994\\ \\mathrm{m}$ seconds pendulum."
      },
      {
        title: "Clock on a mountain",
        problem: "A seconds pendulum moved where $g = 9.78$ loses how much per day?",
        steps: [
          { label: "Period", text: "$T = 2\\pi\\sqrt{0.994/9.78} = 2.002\\ \\mathrm{s}$ (+$0.10$%)." },
          { label: "Loss", text: "$0.001 \\times 86{,}400 = 86\\ \\mathrm{s}$ per day slow." },
          { label: "Fix", text: "Shorten $L$ by $0.20$% to recover." }
        ],
        result: "~$86\\ \\mathrm{s}$/day slow."
      }
    ],
    keyTakeaways: [
      "Small swings give $T = 2\\pi\\sqrt{L/g}$ — length and gravity only.",
      "$0.994\\ \\mathrm{m}$ ticks seconds on Earth.",
      "Amplitude and $g$ shifts correct precision clocks."
    ],
    quiz: [
      {
        q: "$1.00\\ \\mathrm{m}$ pendulum period is about:",
        options: ["$1.00\\ \\mathrm{s}$", "$2.01\\ \\mathrm{s}$", "$9.8\\ \\mathrm{s}$", "$3.14\\ \\mathrm{s}$"],
        answer: 1,
        explanation: "$2\\pi\\sqrt{1/9.8} = 2.007\\ \\mathrm{s}$."
      },
      {
        q: "Seconds pendulum length is:",
        options: ["$9.8\\ \\mathrm{m}$", "$0.994\\ \\mathrm{m}$", "$2.0\\ \\mathrm{m}$", "$1$ AU"],
        answer: 1,
        explanation: "$g/\\pi^2 = 0.993\\ \\mathrm{m}$."
      },
      {
        q: "Large amplitude makes $T$:",
        options: ["Shorter", "Slightly longer ($1+\\theta_0^2/16$)", "Zero", "Negative"],
        answer: 1,
        explanation: "Nonlinear $\\sin\\theta$ softens restoring below linear."
      }
    ]
  },
  {
    sectionId: "young-ch14-s6",
    readingTime: 5,
    intro: "Real pendulums are extended bodies swinging about a pivot: $T = 2\\pi\\sqrt{I/mgd}$. This section generalizes to physical pendulums and finds centers of oscillation for rods and rulers.",
    objectives: [
      "State $T = 2\\pi\\sqrt{I/mgd}$ for physical pendulums",
      "Reduce to $\\sqrt{L/g}$ for simple (point) bobs",
      "Locate equivalent simple length $L_{\\mathrm{eq}} = I/md$"
    ],
    concepts: [
      {
        term: "Physical pendulum",
        kind: "theorem",
        statement: "**$\\omega = \\sqrt{mgd/I}$**, **$T = 2\\pi\\sqrt{I/mgd}$** with $d$ pivot-to-CM and $I$ about pivot.",
        detail: "Torque $-mgd\\sin\\theta$ drives $I\\ddot{\\theta}$ — same template, new constants."
      },
      {
        term: "Simple limit",
        kind: "theorem",
        statement: "Point bob: $I = mL^2$, $d = L$: **$T = 2\\pi\\sqrt{L/g}$** — Sec 14.5 recovered.",
        detail: "Extended size corrects via parallel axis when $R/L$ matters."
      },
      {
        term: "Equivalent length",
        kind: "method",
        statement: "**$L_{\\mathrm{eq}} = I/md$** swings like a simple pendulum of that length.",
        detail: "Rod pivoted at end: $I = ML^2/3$, $d = L/2$: $L_{\\mathrm{eq}} = 2L/3$."
      },
      {
        term: "Rod periods",
        kind: "notation",
        statement: "Rod about end: **$T = 2\\pi\\sqrt{2L/3g}$** — faster than simple $L$ (shorter equivalent).",
        detail: "$1.00\\ \\mathrm{m}$ rod: $T = 1.64\\ \\mathrm{s}$ vs $2.01$ simple."
      },
      {
        term: "Center of oscillation",
        kind: "method",
        statement: "Pivot and **center of oscillation** ($L_{\\mathrm{eq}}$ away) **swap** with equal $T$ — Kater reversible pendulum surveys $g$.",
        detail: "Adjustable masses tune nodes until periods match both ways."
      }
    ],
    examples: [
      {
        title: "Ruler pendulum",
        problem: "A $1.00\\ \\mathrm{m}$ uniform ruler ($0.15\\ \\mathrm{kg}$) pivots at one end. Find $T$.",
        steps: [
          { label: "Inertia", text: "$I = 0.15 \\times 1.0/3 = 0.050\\ \\mathrm{kg\\cdot m^2}$; $d = 0.50\\ \\mathrm{m}$." },
          { label: "Period", text: "$T = 2\\pi\\sqrt{0.050/(0.15 \\times 9.80 \\times 0.50)} = 2\\pi\\sqrt{0.0680} = 1.64\\ \\mathrm{s}$." },
          { label: "Equivalent", text: "$L_{\\mathrm{eq}} = 0.050/(0.15 \\times 0.50) = 0.667\\ \\mathrm{m}$." }
        ],
        result: "$1.64\\ \\mathrm{s}$; swings like $0.667\\ \\mathrm{m}$ simple."
      },
      {
        title: "Disk on rim",
        problem: "A $0.20\\ \\mathrm{m}$-radius disk ($2.0\\ \\mathrm{kg}$) pivots on its rim. Find $T$.",
        steps: [
          { label: "Inertia", text: "$I = 1.5MR^2 = 0.120\\ \\mathrm{kg\\cdot m^2}$; $d = 0.20$." },
          { label: "Period", text: "$T = 2\\pi\\sqrt{0.120/(2.0 \\times 9.80 \\times 0.20)} = 1.10\\ \\mathrm{s}$." },
          { label: "Simple check", text: "$L_{\\mathrm{eq}} = 0.30\\ \\mathrm{m}$: $2\\pi\\sqrt{0.30/9.80} = 1.10$ — matches." }
        ],
        result: "$1.10\\ \\mathrm{s}$ rim-pivot period."
      }
    ],
    keyTakeaways: [
      "Extended pendulums use $I$ and $d$ about the pivot.",
      "$L_{\\mathrm{eq}} = I/md$ maps to simple length.",
      "End-pivoted rods swing faster than full-length simples."
    ],
    quiz: [
      {
        q: "Physical pendulum period is:",
        options: ["$2\\pi\\sqrt{mgd/I}$", "$2\\pi\\sqrt{I/mgd}$", "$2\\pi\\sqrt{Ig/md}$", "Zero"],
        answer: 1,
        explanation: "$\\omega = \\sqrt{mgd/I}$ inverted to $T = 2\\pi/\\omega$."
      },
      {
        q: "$1.00\\ \\mathrm{m}$ rod pivoted at end has $T$ about:",
        options: ["$2.01\\ \\mathrm{s}$", "$1.64\\ \\mathrm{s}$", "$0.50\\ \\mathrm{s}$", "$9.8\\ \\mathrm{s}$"],
        answer: 1,
        explanation: "$2\\pi\\sqrt{2L/3g} = 1.64\\ \\mathrm{s}$."
      },
      {
        q: "Equivalent simple length is:",
        options: ["$md/I$", "$I/md$", "$I^2/md$", "Zero"],
        answer: 1,
        explanation: "Matching $\\sqrt{L/g}$ to $\\sqrt{I/mgd}$ gives $L = I/md$."
      }
    ]
  },
  {
    sectionId: "young-ch14-s7",
    readingTime: 6,
    intro: "Friction drains oscillation energy exponentially: $x = Ae^{-(b/2m)t}\\cos(\\omega^{\\prime}t+\\phi)$. This section classifies under-, critical, and overdamping and times shock absorbers and door closers.",
    objectives: [
      "Write the damped equation $m\\ddot{x}+b\\dot{x}+kx = 0$",
      "State $\\omega^{\\prime} = \\sqrt{k/m-(b/2m)^2}$ and decay $e^{-(b/2m)t}$",
      "Distinguish under, critical, and overdamped returns"
    ],
    concepts: [
      {
        term: "Damping force",
        kind: "definition",
        statement: "**Viscous damping $F = -bv_x$** opposes velocity with coefficient $b$ ($\\mathrm{kg/s}$).",
        detail: "Door closers, shocks, and galvanometers engineer $b$ deliberately."
      },
      {
        term: "Underdamped oscillation",
        kind: "theorem",
        statement: "For **$b < 2\\sqrt{km}$**: **$x = Ae^{-(b/2m)t}\\cos(\\omega^{\\prime}t+\\phi)$** with **$\\omega^{\\prime} = \\sqrt{k/m-(b/2m)^2}$**.",
        detail: "Envelope decays with time constant $\\tau = 2m/b$; $b = 0.20$, $m = 0.50$: $\\tau = 5.0\\ \\mathrm{s}$."
      },
      {
        term: "Critical damping",
        kind: "definition",
        statement: "**$b_c = 2\\sqrt{km}$** returns **fastest without overshoot** — car suspensions and meters target it.",
        detail: "$k = 200$, $m = 0.50$: $b_c = 20\\ \\mathrm{kg/s}$."
      },
      {
        term: "Overdamped creep",
        kind: "definition",
        statement: "**$b > b_c$** creeps back **slowly without oscillation** — heavy doors and seismic dampers.",
        detail: "Two decaying exponentials; the slower sets the crawl rate."
      },
      {
        term: "Energy drain",
        kind: "insight",
        statement: "**$E \\propto e^{-(b/m)t}$** — energy decays twice as fast as amplitude (squared).",
        detail: "Halving amplitude quarters energy; $Q$-factor counts cycles per drain time."
      }
    ],
    figures: [
      {
        caption: "Underdamped $x = Ae^{-(b/2m)t}\\cos\\omega^{\\prime}t$: oscillation inside an exponential envelope",
        svg: `<svg viewBox="0 0 720 190" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Damped oscillation"><line x1="60" y1="95" x2="680" y2="95" stroke="currentColor" stroke-width="1"/><path d="M 60 95 Q 120 30 180 60 T 300 90 T 420 95 T 540 95 T 660 95" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M 60 50 Q 300 20 660 90" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><path d="M 60 140 Q 300 170 660 100" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"/><text x="560" y="40" font-size="11" fill="currentColor" opacity="0.7">exponential envelope</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Shock decay",
        problem: "$m = 0.50\\ \\mathrm{kg}$, $k = 200$, $b = 0.20$. Find $\\omega^{\\prime}$ and time to $1/e$ amplitude.",
        steps: [
          { label: "Frequency", text: "$\\omega_0 = 20$; $(b/2m) = 0.20$: $\\omega^{\\prime} = \\sqrt{400-0.04} = 20.0\\ \\mathrm{rad/s}$ (barely shifted)." },
          { label: "Envelope", text: "$\\tau = 2m/b = 5.0\\ \\mathrm{s}$ to $37$%." },
          { label: "Cycles", text: "$5.0/0.314 = 15.9$ visible wiggles before $1/e$." }
        ],
        result: "$\\omega^{\\prime} = 20.0\\ \\mathrm{rad/s}$; $5.0\\ \\mathrm{s}$ decay time."
      },
      {
        title: "Critical closer",
        problem: "A $2.0\\ \\mathrm{kg}$ door with $k = 50\\ \\mathrm{N/m}$ needs critical $b$. Find it.",
        steps: [
          { label: "Formula", text: "$b_c = 2\\sqrt{50 \\times 2.0} = 20\\ \\mathrm{kg/s}$." },
          { label: "Under check", text: "$b = 5.0$: oscillates through — slams." },
          { label: "Over check", text: "$b = 60$: creeps shut — annoying." }
        ],
        result: "$b_c = 20\\ \\mathrm{kg/s}$ for fastest slam-free close."
      }
    ],
    keyTakeaways: [
      "Damping envelopes oscillation with $e^{-(b/2m)t}$.",
      "$b_c = 2\\sqrt{km}$ divides ring from creep.",
      "Energy drains twice as fast as amplitude."
    ],
    quiz: [
      {
        q: "Underdamped motion is:",
        options: ["Pure exponential decay", "Oscillation inside $e^{-(b/2m)t}$ envelope", "Growing oscillation", "Constant amplitude"],
        answer: 1,
        explanation: "$\\cos\\omega^{\\prime}t$ rings while the envelope strangles it."
      },
      {
        q: "Critical damping gives:",
        options: ["Endless ringing", "Fastest non-overshoot return", "Slowest return", "Negative stiffness"],
        answer: 1,
        explanation: "$b_c$ is the ring/creep boundary — optimal for meters and suspensions."
      },
      {
        q: "$m = 0.50$, $b = 0.20$ amplitude time constant is:",
        options: ["$0.20\\ \\mathrm{s}$", "$5.0\\ \\mathrm{s}$", "$20\\ \\mathrm{s}$", "$0.40\\ \\mathrm{s}$"],
        answer: 1,
        explanation: "$\\tau = 2m/b = 5.0\\ \\mathrm{s}$."
      }
    ]
  },
  {
    sectionId: "young-ch14-s8",
    readingTime: 6,
    intro: "Periodic pushing builds large response at resonance: amplitude $A = F_{\\max}/\\sqrt{(k-m\\omega_d^2)^2+b^2\\omega_d^2}$. This section derives the resonance curve, phases the response, and warns bridges and circuits alike.",
    objectives: [
      "State steady amplitude versus drive frequency $\\omega_d$",
      "Locate resonance at $\\omega_d \\approx \\sqrt{k/m}$ for light damping",
      "Explain phase lag $0 \\to \\pi$ through resonance"
    ],
    concepts: [
      {
        term: "Driven equation",
        kind: "definition",
        statement: "**$m\\ddot{x}+b\\dot{x}+kx = F_{\\max}\\cos\\omega_d t$** — steady response sinusoids at **$\\omega_d$**, not $\\omega_0$.",
        detail: "Transients die with $e^{-(b/2m)t}$; the drive frequency rules thereafter."
      },
      {
        term: "Resonance amplitude",
        kind: "theorem",
        statement: "**$A = F_{\\max}/\\sqrt{(k-m\\omega_d^2)^2+b^2\\omega_d^2}$** — peaks near **$\\omega_d = \\sqrt{k/m}$**.",
        detail: "$F = 10\\ \\mathrm{N}$, $k = 200$, $b = 0.50$: $A_{\\mathrm{res}} = 10/(0.50 \\times 20) = 1.0\\ \\mathrm{m}$."
      },
      {
        term: "Sharpness and Q",
        kind: "definition",
        statement: "**Light damping sharpens** the peak: width $\\sim b/m$, height $\\propto 1/b$; **$Q = \\omega_0 m/b$** counts sharpness.",
        detail: "Quartz $Q \\sim 10^5$; car suspension $Q \\sim 1$."
      },
      {
        term: "Phase lag",
        kind: "theorem",
        statement: "Response **lags the drive** by **$\\phi = \\arctan[b\\omega_d/(k-m\\omega_d^2)]$**: $0$ (slow), $\\pi/2$ (resonance), $\\pi$ (fast).",
        detail: "At resonance velocity aligns with force — maximum power feed."
      },
      {
        term: "Resonance danger and use",
        kind: "insight",
        statement: "**Resonance amplifies destructively** (Tacoma, wine glasses) and **selectively** (radios, MRI, musical instruments).",
        detail: "Engineers detune or damp; receivers tune sharply to amplify."
      }
    ],
    examples: [
      {
        title: "Resonant swing",
        problem: "$m = 0.50$, $k = 200$, $b = 0.50$, $F_{\\max} = 10\\ \\mathrm{N}$. Find resonant $A$ and off-resonance at $\\omega_d = 10$.",
        steps: [
          { label: "Resonance", text: "$\\omega_0 = 20$: $A = 10/(0.50 \\times 20) = 1.0\\ \\mathrm{m}$." },
          { label: "Off drive", text: "$k - m\\omega_d^2 = 200 - 50 = 150$; $b\\omega_d = 5.0$: $A = 10/\\sqrt{22500+25} = 0.0666\\ \\mathrm{m}$." },
          { label: "Ratio", text: "Resonance amplifies $15$ times over $10\\ \\mathrm{rad/s}$ drive." }
        ],
        result: "$1.0\\ \\mathrm{m}$ resonant; $6.7\\ \\mathrm{cm}$ off-resonance."
      },
      {
        title: "Phase at three drives",
        problem: "Same system: phase at $\\omega_d = 5$, $20$, $40\\ \\mathrm{rad/s}$?",
        steps: [
          { label: "Slow", text: "$k - m\\omega^2 = 187.5 \\gg b\\omega$: $\\phi \\approx 0$ — follows the push." },
          { label: "Resonance", text: "Denominator zero: $\\phi = \\pi/2$ — quarter behind." },
          { label: "Fast", text: "Negative large: $\\phi \\approx \\pi$ — opposes the push." }
        ],
        result: "$0 \\to \\pi/2 \\to \\pi$ lag sweeping through resonance."
      }
    ],
    keyTakeaways: [
      "Steady response tracks the drive frequency.",
      "Light damping towers the resonance peak.",
      "Phase lags $0$ to $\\pi$, crossing $\\pi/2$ at resonance."
    ],
    quiz: [
      {
        q: "Resonance peaks near:",
        options: ["$\\omega_d = 0$", "$\\omega_d = \\sqrt{k/m}$", "$\\omega_d = \\infty$", "Any frequency"],
        answer: 1,
        explanation: "Denominator $k-m\\omega_d^2$ vanishes there, leaving only damping."
      },
      {
        q: "$F = 10\\ \\mathrm{N}$, $b = 0.50$, $\\omega_0 = 20$ resonant $A$ is:",
        options: ["$0.067\\ \\mathrm{m}$", "$1.0\\ \\mathrm{m}$", "$10\\ \\mathrm{m}$", "Zero"],
        answer: 1,
        explanation: "$F/b\\omega_0 = 10/10 = 1.0\\ \\mathrm{m}$."
      },
      {
        q: "Phase at resonance is:",
        options: ["$0$", "$\\pi/2$ lag", "$\\pi$ lag", "Negative amplitude"],
        answer: 1,
        explanation: "Force aligns with velocity — peak power transfer."
      }
    ]
  }
];
