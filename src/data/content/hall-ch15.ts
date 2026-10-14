import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e (Extended)
// Chapter 15 — Oscillations (HRW pp. 413–443)
// 6 sections: 15.1 SHM · 15.2 energy in SHM · 15.3 angular SHM ·
// 15.4 pendulums and circular motion · 15.5 damped SHM · 15.6 resonance
// ============================================================================

export const hallCh15Content: SectionContent[] = [
  // ------------------------------------------------------------------ 15.1
  {
    sectionId: 'hall-ch15-s1',
    readingTime: 7,
    intro: "Attach a mass to a spring, displace it, and it slides back — but overshoots, and returns again, forever repeating. When the restoring force is exactly proportional to the displacement ($F = -kx$), the motion that results is the purest in physics: **simple harmonic motion**, the sinusoid that every vibrating thing in the universe approximates when nudged gently from equilibrium. One differential equation, three constants of description (amplitude, frequency, phase), and the whole vocabulary of vibration follows.",
    objectives: [
      "Show that $F = -kx$ leads to $a = -\\omega^2 x$ and sinusoidal motion",
      "Interpret $A$, $\\omega$, $T$, $f$, and $\\phi$, and read them from initial conditions",
      "Relate maximum speed and acceleration to amplitude and frequency",
    ],
    concepts: [
      {
        term: 'The equation of SHM',
        kind: 'definition',
        statement: "When the net force is a linear restoring force, $F = -kx$, Newton's second law gives $$a = -\\frac{k}{m}x = -\\omega^2 x, \\qquad \\omega = \\sqrt{k/m}.$$ Acceleration proportional to displacement and opposite to it — this *is* the defining property of simple harmonic motion.",
        detail: 'The minus sign is the whole story: the system is always pushed back toward equilibrium, harder the farther it strays.',
      },
      {
        term: 'The sinusoidal solution',
        kind: 'theorem',
        statement: "The motion satisfying $a = -\\omega^2 x$ is $$x(t) = A\\cos(\\omega t + \\phi),$$ with amplitude $A$ (maximum displacement) and phase constant $\\phi$ set by where the body is *and how it is moving* at $t = 0$.",
        detail: 'Velocity and acceleration follow by differentiation: $v = -\\omega A\\sin(\\omega t + \\phi)$ and $a = -\\omega^2 A\\cos(\\omega t+\\phi)$. Cosine was a choice — sine or any phase-shifted sinusoid works; $\\phi$ absorbs the choice.',
      },
      {
        term: 'Period and frequency',
        kind: 'notation',
        statement: "$$T = \\frac{2\\pi}{\\omega} = 2\\pi\\sqrt{\\frac{m}{k}}, \\qquad f = \\frac{1}{T}, \\qquad \\omega = 2\\pi f.$$ The period depends only on $m$ and $k$ — not on amplitude.",
        detail: 'Bigger mass means more inertia to reverse: slower. Stiffer spring means stronger push back: faster. But swing it twice as far and everything takes exactly the same time — the remarkable isochronism that makes springs usable as clocks.',
      },
      {
        term: 'Extremes of speed and acceleration',
        kind: 'insight',
        statement: 'Maximum speed occurs *at equilibrium*, $v_{max} = \\omega A$ (zero displacement, all kinetic); maximum acceleration occurs *at the turning points*, $a_{max} = \\omega^2 A$ (momentarily at rest, all push).',
        detail: 'These swap-overs are where exam points hide: a SHO is fastest precisely where its acceleration is zero, and slowest precisely where acceleration is largest.',
      },
      {
        term: 'The reference circle',
        kind: 'insight',
        statement: 'SHM is the shadow (projection) of uniform circular motion: a point moving at angular speed $\\omega$ on a circle of radius $A$ has an $x$-projection exactly $A\\cos(\\omega t + \\phi)$. The radius vector is called a **phasor** (Chapter 16 borrows it for waves).',
        detail: 'The link gives every SHM formula a geometric meaning: $v_{max} = \\omega A$ is the full circular speed, and the projection of the centripetal acceleration $\\omega^2 A$ is the SHM acceleration.',
      },
    ],
    examples: [
      {
        title: 'A block–spring oscillator, fully characterized',
        problem: 'A $0.50$ kg block on a frictionless surface is attached to a spring with $k = 200$ N/m. It is pulled to $x = +5.0$ cm and released moving away from equilibrium at $1.73$ m/s, so that $x(t) = A\\cos(\\omega t + \\phi)$ has $A = 0.10$ m and $\\phi = -60^{\\circ}$. Find $\\omega$, $T$, $f$, the maximum speed, and the maximum acceleration.',
        steps: [
          { label: 'Angular frequency', text: '$\\omega = \\sqrt{k/m} = \\sqrt{200/0.50} = \\sqrt{400} = 20$ rad/s.' },
          { label: 'Period and frequency', text: '$T = 2\\pi/\\omega = 6.283/20 = 0.314$ s, so $f = 1/T = 3.18$ Hz.' },
          { label: 'Check initial conditions', text: '$x(0) = 0.10\\cos(-60^{\\circ}) = +0.050$ m ✓ and $v(0) = -\\omega A\\sin(-60^{\\circ}) = -(20)(0.10)(-0.866) = +1.73$ m/s ✓ — away from equilibrium, as stated.' },
          { label: 'Extremes', text: '$v_{max} = \\omega A = 2.0$ m/s at $x = 0$; $a_{max} = \\omega^2 A = 40\\,(0.10) = 4.0$ m/s² at $x = \\pm A$.' },
        ],
        result: '$\\omega = 20$ rad/s, $T = 0.31$ s, $f = 3.2$ Hz; $v_{max} = 2.0$ m/s, $a_{max} = 4.0$ m/s². Note the checks: the stated initial conditions are reproduced exactly by the chosen $\\phi$.',
      },
      {
        title: "Simple Harmonic Motion: period check",
        problem: "A $0.75\\ \\text{kg}$ mass on a $k = 30\\ \\text{N/m}$ spring oscillates. Find $T = 2\\pi\\sqrt{m/k}$.",
        steps: [
          { label: "Ratio", text: "$m/k = 0.75/30 = 0.025\\ \\text{s}^2$." },
          { label: "Root", text: "$\\sqrt{0.025} = 0.158\\ \\text{s}$." },
          { label: "Period", text: "$T = 2\\pi\\times 0.158 = 0.993\\ \\text{s}$." },
        ],
        result: "$T \\approx 0.993\\ \\text{s}$.",
      },
    ],
    keyTakeaways: [
      '$F = -kx$ gives $x(t) = A\\cos(\\omega t + \\phi)$ with $\\omega = \\sqrt{k/m}$.',
      'The period is independent of amplitude — the isochronism that makes spring clocks possible.',
      'Fastest at the center ($v_{max} = \\omega A$), largest acceleration at the ends ($a_{max} = \\omega^2 A$).',
    ],
    quiz: [
      {
        q: 'In simple harmonic motion, the acceleration:',
        options: ['is constant', 'is proportional to displacement and directed opposite to it', 'is zero at maximum displacement', 'is largest at equilibrium'],
        answer: 1,
        explanation: '$a = -\\omega^2 x$: the minus sign means it always points back toward equilibrium.',
      },
      {
        q: 'A block of mass 0.50 kg on a spring with $k = 200$ N/m has period:',
        options: ['0.31 s', '2.0 s', '3.2 s', '20 s'],
        answer: 0,
        explanation: '$T = 2\\pi\\sqrt{m/k} = 2\\pi\\sqrt{0.0025} = 2\\pi(0.05) = 0.314$ s.',
      },
      {
        q: 'The speed of a simple harmonic oscillator is greatest:',
        options: ['at maximum displacement', 'at equilibrium', 'halfway between', 'it is constant'],
        answer: 1,
        explanation: 'All the energy is kinetic as it sweeps through the center, where the restoring force — and hence the acceleration — vanishes.',
      },
      {
        q: 'Doubling the amplitude of a SHO (same spring and mass):',
        options: [
          'doubles the maximum speed but leaves the period unchanged',
          'doubles the period',
          'halves the frequency',
          'changes nothing at all',
        ],
        answer: 0,
        explanation: '$v_{max} = \\omega A$ doubles, but $\\omega = \\sqrt{k/m}$ never knew about $A$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.2
  {
    sectionId: 'hall-ch15-s2',
    readingTime: 6,
    intro: 'Energy makes oscillation transparent. A stretched spring stores potential energy $\\tfrac12kx^2$; the moving block carries kinetic $\\tfrac12mv^2$; their sum stays fixed while each endlessly converts into the other. One constant, $E = \\tfrac12kA^2$, controls everything — and watching $K$ and $U$ trade places at twice the oscillation frequency is the cleanest picture of what SHM *is*.',
    objectives: [
      "Write the energy $E = \\tfrac12kA^2$ and its instantaneous split between $K$ and $U$",
      "Derive the speed–position relation $v = \\pm\\omega\\sqrt{A^2 - x^2}$",
      "Explain why $K$ and $U$ oscillate at twice the frequency of $x$",
    ],
    concepts: [
      {
        term: 'Total energy from the amplitude',
        kind: 'theorem',
        statement: "With no friction, $$E = K + U = \\tfrac12 mv^2 + \\tfrac12 kx^2 = \\tfrac12 kA^2,$$ because at $x = \\pm A$ the block is momentarily at rest with the spring fully stretched.",
        detail: 'The energy is fixed by the amplitude alone: double the amplitude, quadruple the energy — a spring stores the *square* of its stretch.',
      },
      {
        term: 'Speed at any displacement',
        kind: 'method',
        statement: "Solving $\\tfrac12mv^2 = \\tfrac12k(A^2 - x^2)$ for the speed, $$v = \\pm\\,\\omega\\sqrt{A^2 - x^2}$$ — the speed profile of the oscillation, fastest at the center, zero at the ends, symmetric on either side.",
        detail: 'The ± sign is physics, not decoration: the oscillator passes every interior point twice per cycle, once each way, with equal speeds.',
      },
      {
        term: 'Energy sloshing at 2ω',
        kind: 'insight',
        statement: "$U = \\tfrac12kx^2 = \\tfrac12 kA^2\\cos^2(\\omega t + \\phi)$ and $K = \\tfrac12 kA^2\\sin^2(\\omega t + \\phi)$: each oscillates **twice per period** of the motion, because energy does not care which side of equilibrium the block is on.",
        detail: 'Averaged over a cycle, $\\langle K\\rangle = \\langle U\\rangle = E/2$: the time-average split is exactly half-and-half, a result Chapter 16 will reuse for wave energy.',
      },
      {
        term: 'Reading the turning points',
        kind: 'method',
        statement: 'The oscillator\u2019s allowed region is where $K = E - U \\ge 0$: between $x = \\pm A$ the motion lives, and at $\\pm A$ it turns around. Energy diagrams turn SHM into a ball rolling in a parabolic valley.',
        detail: 'Any smooth potential well looks parabolic near its minimum — which is why *every* stable equilibrium vibrates harmonically when nudged gently, from molecules to bridges.',
      },
      {
        term: "Energy in Simple Harmonic Motion: solution protocol",
        kind: "method",
        statement: "**Solve Energy in Simple Harmonic Motion problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is simple harmonic motion; the working equation is $x = x_m\\cos(\\omega t+\\phi)$, $\\omega = \\sqrt{k/m}$, $T = 2\\pi\\sqrt{m/k}$, $T_{\\text{pend}} = 2\\pi\\sqrt{L/g}$, $E = \\tfrac12kx_m^2$; every substitution must carry its units so the final unit ($\\text{s}$, $\\text{Hz}$, phase in radians) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $T\\sim 1\\ \\text{s}$; $1$-m pendulum $2.0\\ \\text{s}$; small angles and linear spring; damping and driving change the period.",
      },
    ],
    figures: [
      {
        caption: 'Kinetic and potential energy exchange in SHM. Top: $x(t) = A\\cos\\omega t$. Bottom: $U = \\tfrac12kx^2$ and $K = \\tfrac12mv^2$ oscillate at twice the frequency of $x$ — two full exchanges per period — while the total $E = \\tfrac12kA^2$ (dashed) stays constant. At the turning points $K = 0$; at equilibrium $U = 0$.',
        svg: `<svg viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two stacked panels: displacement sinusoid and kinetic/potential energy curves">
  <rect x="0" y="0" width="720" height="380" fill="currentColor" opacity="0"/>
  <line x1="80" y1="90" x2="660" y2="90" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.45"/>
  <line x1="80" y1="45" x2="640" y2="45" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.3"/>
  <line x1="80" y1="135" x2="640" y2="135" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.3"/>
  <text x="72" y="49" font-size="13" fill="currentColor" text-anchor="end">+A</text>
  <text x="72" y="139" font-size="13" fill="currentColor" text-anchor="end">−A</text>
  <polyline points="80,45 150,58.2 220,90 290,121.8 360,135 430,121.8 500,90 570,58.2 640,45" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <circle cx="80" cy="45" r="3.5" fill="currentColor"/>
  <circle cx="360" cy="135" r="3.5" fill="currentColor"/>
  <circle cx="220" cy="90" r="3.5" fill="currentColor"/>
  <text x="360" y="30" font-size="14" fill="currentColor" text-anchor="middle">x(t) = A cos ωt</text>
  <line x1="80" y1="160" x2="640" y2="160" stroke="currentColor" stroke-width="1"/>
  <line x1="80" y1="160" x2="80" y2="150" stroke="currentColor" stroke-width="1"/>
  <line x1="360" y1="160" x2="360" y2="150" stroke="currentColor" stroke-width="1"/>
  <line x1="640" y1="160" x2="640" y2="150" stroke="currentColor" stroke-width="1"/>
  <text x="80" y="176" font-size="13" fill="currentColor" text-anchor="middle">x=+A</text>
  <text x="220" y="176" font-size="13" fill="currentColor" text-anchor="middle">x=0</text>
  <text x="360" y="176" font-size="13" fill="currentColor" text-anchor="middle">x=−A</text>
  <text x="500" y="176" font-size="13" fill="currentColor" text-anchor="middle">x=0</text>
  <text x="640" y="176" font-size="13" fill="currentColor" text-anchor="middle">x=+A</text>
  <line x1="80" y1="215" x2="640" y2="215" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.5"/>
  <text x="648" y="219" font-size="13" fill="currentColor">E</text>
  <line x1="80" y1="305" x2="660" y2="305" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4" opacity="0.45"/>
  <polyline points="80,215 150,237.5 220,260 290,237.5 360,215 430,237.5 500,260 570,237.5 640,215" fill="none" stroke="currentColor" stroke-width="2.5" opacity="0.65"/>
  <polyline points="80,260 150,237.5 220,215 290,237.5 360,260 430,237.5 500,215 570,237.5 640,260" fill="none" stroke="currentColor" stroke-width="2.5"/>
  <text x="95" y="208" font-size="13" fill="currentColor">U = ½kx²</text>
  <text x="228" y="208" font-size="13" fill="currentColor">K = ½mv²</text>
  <text x="540" y="236" font-size="13" fill="currentColor" opacity="0.65">U</text>
  <text x="510" y="214" font-size="13" fill="currentColor">K</text>
  <circle cx="220" cy="260" r="3.5" fill="currentColor"/>
  <circle cx="500" cy="260" r="3.5" fill="currentColor"/>
  <text x="360" y="345" font-size="14" fill="currentColor" text-anchor="middle" opacity="0.85">K and U each complete two full cycles per period T of x; E = ½kA² never changes</text>
</svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Where is the energy?',
        problem: 'For the oscillator of Section 15-1 ($m = 0.50$ kg, $k = 200$ N/m, $A = 0.10$ m): find the total energy, and the kinetic and potential energies and speed when $x = +5.0$ cm. Where does $K = U$?',
        steps: [
          { label: 'Total energy', text: '$E = \\tfrac12kA^2 = \\tfrac12(200)(0.10)^2 = 1.0$ J.' },
          { label: 'At x = 5.0 cm', text: '$U = \\tfrac12kx^2 = \\tfrac12(200)(0.050)^2 = 0.25$ J, so $K = E - U = 0.75$ J.' },
          { label: 'Speed there', text: '$v = \\sqrt{2K/m} = \\sqrt{2(0.75)/0.50} = 1.7$ m/s — matching the $\\omega\\sqrt{A^2 - x^2} = 20\\sqrt{0.01 - 0.0025}$ formula.' },
          { label: 'The balance point', text: '$K = U$ requires $x = \\pm A/\\sqrt{2} = \\pm 7.1$ cm.' },
        ],
        result: 'E = 1.0 J; at half amplitude the split is 3:1 in favor of kinetic, with $v = 1.7$ m/s. Energy is 50–50 only at $x = A/\\sqrt{2}$.',
      },
      {
        title: "Energy in Simple Harmonic Motion: period check",
        problem: "A $1\\ \\text{kg}$ mass on a $k = 40\\ \\text{N/m}$ spring oscillates. Find $T = 2\\pi\\sqrt{m/k}$.",
        steps: [
          { label: "Ratio", text: "$m/k = 1/40 = 0.025\\ \\text{s}^2$." },
          { label: "Root", text: "$\\sqrt{0.025} = 0.158\\ \\text{s}$." },
          { label: "Period", text: "$T = 2\\pi\\times 0.158 = 0.993\\ \\text{s}$." },
        ],
        result: "$T \\approx 0.993\\ \\text{s}$.",
      },
    ],
    keyTakeaways: [
      "$E = \\tfrac12kA^2 = K + U$ fixes the whole energetics from the amplitude.",
      "$v = \\pm\\omega\\sqrt{A^2 - x^2}$: speed depends on position, not direction.",
      'Each of $K$, $U$ oscillates at frequency $2f$; each averages $E/2$ over a cycle.',
    ],
    quiz: [
      {
        q: 'The total mechanical energy of a SHO equals:',
        options: [`$\\tfrac12kA^2$`, `$\\tfrac12mA^2$`, `$kA^2$`, `$\\tfrac12kA$`],
        answer: 0,
        explanation: 'Evaluate $U$ at the turning point, where $K = 0$ and $x = A$.',
      },
      {
        q: 'At displacement $x = A/2$, the ratio of kinetic to potential energy is:',
        options: ['1', '2', '3', '1/3'],
        answer: 2,
        explanation: '$U = E/4$ and $K = 3E/4$ there, so $K/U = 3$.',
      },
      {
        q: 'Doubling the amplitude of a SHO multiplies the energy by:',
        options: ['2', '4', '8', `$\\sqrt{2}$`],
        answer: 1,
        explanation: '$E \\propto A^2$: twice the stretch, four times the stored energy.',
      },
      {
        q: 'The kinetic energy of a SHO varies in time with what frequency, compared to the displacement?',
        options: ['the same frequency $f$', 'twice, $2f$', 'half, $f/2$', 'four times, $4f$'],
        answer: 1,
        explanation: '$K \\propto \\sin^2(\\omega t)$ completes a full cycle every half-period — energy ignores which side the block is on.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.3
  {
    sectionId: 'hall-ch15-s3',
    readingTime: 4,
    intro: 'A hook\u2019s law for rotation exists too: a fiber or a torsion rod twisted by an angle $\\theta$ pulls back with a torque $\\tau = -\\kappa\\theta$. A body that can rotate but not translate — a disk hung from a wire, a balance wheel, a compass needle — then executes **angular** simple harmonic motion, the exact rotational twin of the mass–spring oscillator. The Cavendish balance that measured $G$ was such an oscillator, and so is the wristwatch\u2019s heart.',
    objectives: [
      'Write the torsion restoring torque and its SHM equation',
      'Compute the period $T = 2\\pi\\sqrt{I/\\kappa}$',
      'Explain how the Cavendish experiment exploited torsion oscillation',
    ],
    concepts: [
      {
        term: 'Torsion constant',
        kind: 'definition',
        statement: "A twisted suspension fiber exerts a restoring torque proportional to the twist angle, $$\\tau = -\\kappa\\theta,$$ where $\\kappa$ (N·m/rad) is the **torsion constant** — the rotational analog of spring constant $k$.",
        detail: 'Stiff fibers have large $\\kappa$: thin quartz or tungsten wires can be made astonishingly soft, twisting measurably under torques of $10^{-9}$ N·m.',
      },
      {
        term: 'Angular SHM',
        kind: 'theorem',
        statement: "Newton's second law for rotation, $\\tau = I\\alpha$, gives $$\\alpha = -\\frac{\\kappa}{I}\\theta, \\qquad\\text{so}\\quad \\theta(t) = \\Theta\\cos(\\omega t + \\phi),\\quad \\omega = \\sqrt{\\kappa/I}.$$",
        detail: 'The solution mirrors linear SHM exactly with $\\theta \\leftrightarrow x$, $I \\leftrightarrow m$, $\\kappa \\leftrightarrow k$: every result of Sections 15-1 and 15-2 translates word for word.',
      },
      {
        term: 'Period of a torsion oscillator',
        kind: 'method',
        statement: "$$T = 2\\pi\\sqrt{I/\\kappa}.$$ Measuring the period of a suspended body of known rotational inertia yields the torsion constant — and once $\\kappa$ is known, tiny steady torques can be read off as tiny equilibrium twist angles ($\\theta = \\tau/\\kappa$).",
        detail: 'That is the Cavendish strategy (Section 13-1): the gravitational tug of lead spheres produced a twist; the twist calibrated against the oscillation period revealed $G$.',
      },
      {
        term: 'Balance wheels and beyond',
        kind: 'insight',
        statement: 'The ticking of a mechanical watch is a torsion oscillator: a spiral spring ($\\kappa$) driving a wheel ($I$) whose period sets the timekeeping. Galileo\u2019s timing of a swinging chandelier — by his pulse — belongs to the pendulum of the next section, but the mechanism is the same linear-or-rotational restoring force.',
        detail: 'Quartz watches replace the wheel with a vibrating crystal: $10^5$-per-day accuracy replaces $10^2$, but the mathematics of small oscillation about equilibrium still governs both.',
      },
      {
        term: "An Angular Simple Harmonic Oscillator: solution protocol",
        kind: "method",
        statement: "**Solve An Angular Simple Harmonic Oscillator problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is simple harmonic motion; the working equation is $x = x_m\\cos(\\omega t+\\phi)$, $\\omega = \\sqrt{k/m}$, $T = 2\\pi\\sqrt{m/k}$, $T_{\\text{pend}} = 2\\pi\\sqrt{L/g}$, $E = \\tfrac12kx_m^2$; every substitution must carry its units so the final unit ($\\text{s}$, $\\text{Hz}$, phase in radians) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $T\\sim 1\\ \\text{s}$; $1$-m pendulum $2.0\\ \\text{s}$; small angles and linear spring; damping and driving change the period.",
      },
    ],
    examples: [
      {
        title: 'A laboratory torsion pendulum',
        problem: 'A disk of rotational inertia $I = 0.20\\ \\mathrm{kg\\cdot m^2}$ hangs from a fiber with torsion constant $\\kappa = 0.080$ N·m/rad. Find the oscillation period; then find the steady torque that would hold it twisted by $1.0^{\\circ}$.',
        steps: [
          { label: 'Period', text: '$T = 2\\pi\\sqrt{I/\\kappa} = 2\\pi\\sqrt{0.20/0.080} = 2\\pi\\sqrt{2.5} = 9.9$ s.' },
          { label: 'Angle in radians', text: '$\\theta = 1.0^{\\circ} = 0.0175$ rad.' },
          { label: 'Torque from twist', text: '$\\tau = \\kappa\\theta = (0.080)(0.0175) = 1.4\\times10^{-3}$ N·m.' },
          { label: 'Cavendech context', text: 'Real Cavendish balances feel torques millions of times smaller — which is why their fibers are soft and their periods run to tens of minutes.' },
        ],
        result: 'T = 9.9 s, and a barely visible one-degree twist corresponds to a torque of $1.4\\times10^{-3}$ N·m: torsion suspensions are torque microscopes.',
      },
      {
        title: "An Angular Simple Harmonic Oscillator: period check",
        problem: "A $1.25\\ \\text{kg}$ mass on a $k = 20\\ \\text{N/m}$ spring oscillates. Find $T = 2\\pi\\sqrt{m/k}$.",
        steps: [
          { label: "Ratio", text: "$m/k = 1.25/20 = 0.0625\\ \\text{s}^2$." },
          { label: "Root", text: "$\\sqrt{0.0625} = 0.25\\ \\text{s}$." },
          { label: "Period", text: "$T = 2\\pi\\times 0.25 = 1.57\\ \\text{s}$." },
        ],
        result: "$T \\approx 1.57\\ \\text{s}$.",
      },
    ],
    keyTakeaways: [
      '$\\tau = -\\kappa\\theta$ is the rotational restoring force; $\\kappa$ plays $k$.',
      '$\\omega = \\sqrt{\\kappa/I}$ and $T = 2\\pi\\sqrt{I/\\kappa}$.',
      'Calibrate by oscillation, then read tiny torques as tiny twists — the Cavendess method for $G$.',
    ],
    quiz: [
      {
        q: 'A torsion oscillator with rotational inertia $I$ and torsion constant $\\kappa$ has period:',
        options: [`$2\\pi\\sqrt{\\kappa/I}$`, `$2\\pi\\sqrt{I/\\kappa}$`, `$2\\pi I\\kappa$`, `$\\sqrt{I/\\kappa}$`],
        answer: 1,
        explanation: 'Rotational twin of $2\\pi\\sqrt{m/k}$ with $I$ in for $m$.',
      },
      {
        q: 'The Cavendish balance could measure G because:',
        options: [
          'the torsion fiber\u2019s known $\\kappa$ turned tiny gravitational torques into readable twist angles, with $\\kappa$ calibrated from the oscillation period',
          'it spun extremely fast',
          'its spheres were magnetized',
          'gravity is strong between lead balls',
        ],
        answer: 0,
        explanation: 'Oscillation calibrates the fiber; the equilibrium twist then measures the unknown torque — and hence $G$.',
      },
      {
        q: 'In angular SHM the restoring torque is proportional to:',
        options: ['angular velocity', 'angular displacement', 'angular acceleration', 'time'],
        answer: 1,
        explanation: '$\\tau = -\\kappa\\theta$, the rotational Hooke\u2019s law.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.4
  {
    sectionId: 'hall-ch15-s4',
    readingTime: 7,
    intro: 'Hang a bob on a string and you have built the world\u2019s oldest clock. The pendulum\u2019s restoring force is gravity itself, acting on a component of the bob\u2019s weight — and for small swings the motion is indistinguishable from SHM. Pivot a rigid body instead of a point mass and you get the physical pendulum, whose period involves the body\u2019s rotational inertia. The section closes the loop begun in 15-1: circular motion viewed edge-on *is* simple harmonic motion.',
    objectives: [
      "Derive $T = 2\\pi\\sqrt{L/g}$ for the simple pendulum and state its limits",
      "Use the physical-pendulum formula $T = 2\\pi\\sqrt{I/mgh}$",
      "Recognize SHM as the projection of uniform circular motion",
    ],
    concepts: [
      {
        term: 'The simple pendulum',
        kind: 'method',
        statement: "The tangential restoring force on a bob displaced by small angle $\\theta$ is $F = -mg\\sin\\theta \\approx -(mg/L)x$, a Hooke's-law force with effective spring constant $mg/L$. Hence $$\\omega = \\sqrt{g/L}, \\qquad T = 2\\pi\\sqrt{L/g}.$$",
        detail: 'The bob\u2019s mass cancels — heavy and light bobs swing alike (another echo of gravitational = inertial mass). The small-angle approximation $\\sin\\theta \\approx \\theta$ keeps errors below 1% only for amplitudes under about $23^{\\circ}$; beyond that, real pendulums run slightly slow.',
      },
      {
        term: 'The physical pendulum',
        kind: 'theorem',
        statement: 'Any rigid body pivoted at a point a distance $h$ from its center of mass oscillates with $$T = 2\\pi\\sqrt{\\frac{I}{mgh}},$$ where $I$ is the rotational inertia about the pivot. Every body — a swinging leg, a rocking meterstick — is a pendulum by this formula.',
        detail: 'A uniform rod pivoted at one end has $I = mL^2/3$ and $h = L/2$, giving $T = 2\\pi\\sqrt{2L/3g}$: it beats a simple pendulum of the same length, as if its mass were concentrated only $2L/3$ from the pivot.',
      },
      {
        term: 'Center of oscillation',
        kind: 'notation',
        statement: 'A physical pendulum keeps time exactly like a simple pendulum of length $L_{eq} = I/mh$ — the **equivalent length**. The point $L_{eq}$ below the pivot is the center of oscillation, and pivot and center are interchangeable (a fact Kater exploited in his reversible pendulum to measure $g$).',
        detail: 'This reciprocity means the same rod has the same period when hung from either end of the equivalent pair — the basis of precision absolute gravimetry for a century.',
      },
      {
        term: 'Circular motion, edge-on',
        kind: 'insight',
        statement: 'A particle in uniform circular motion at angular speed $\\omega$ projects onto any diameter as a SHO of the same $\\omega$. Equivalently: the shadow of a circling bead on a wall oscillates as a mass on a spring.',
        detail: 'This is why a phasor (rotating arrow) generates sinusoidal waves in Chapter 16, and why the simple pendulum formula $\\omega = \\sqrt{g/L}$ also describes the *rollover* stability of a bicycle wheel rolling in a circle.',
      },
      {
        term: "Pendulums, Circular Motion: solution protocol",
        kind: "method",
        statement: "**Solve Pendulums, Circular Motion problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is simple harmonic motion; the working equation is $x = x_m\\cos(\\omega t+\\phi)$, $\\omega = \\sqrt{k/m}$, $T = 2\\pi\\sqrt{m/k}$, $T_{\\text{pend}} = 2\\pi\\sqrt{L/g}$, $E = \\tfrac12kx_m^2$; every substitution must carry its units so the final unit ($\\text{s}$, $\\text{Hz}$, phase in radians) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $T\\sim 1\\ \\text{s}$; $1$-m pendulum $2.0\\ \\text{s}$; small angles and linear spring; damping and driving change the period.",
      },
    ],
    examples: [
      {
        title: 'The seconds pendulum, Earth, Moon',
        problem: '(a) What length makes a simple pendulum tick once per second per swing ($T = 2.0$ s)? (b) A grandfather clock with this pendulum is carried to the Moon ($g_M = g/6$). What happens?',
        steps: [
          { label: 'Solve for length', text: '$L = gT^2/4\\pi^2 = (9.8)(2.0)^2/39.5 = 0.99$ m — almost exactly a meter, the historical origin of the meter proposal.' },
          { label: 'On the Moon', text: '$T \\propto 1/\\sqrt{g}$, so $T_{Moon} = 2.0\\times\\sqrt{6} = 4.9$ s.' },
          { label: 'Consequence', text: 'The clock runs slow by the same factor: one lunar-hour of pendulum swings takes $\\sqrt{6}$ real hours. The escapement counts swings, not seconds.' },
          { label: 'Repair', text: 'Shorten the pendulum by a factor 6 ($L \\propto g$ for fixed $T$): to 0.17 m — or just accept lunar time.' },
        ],
        result: 'A 1.0 m pendulum beats seconds; on the Moon the same clock would lose hours per day — pendulum clocks are gravimeters you can read.',
      },
      {
        title: "Pendulums, Circular Motion: period check",
        problem: "A $0.5\\ \\text{kg}$ mass on a $k = 30\\ \\text{N/m}$ spring oscillates. Find $T = 2\\pi\\sqrt{m/k}$.",
        steps: [
          { label: "Ratio", text: "$m/k = 0.5/30 = 0.0167\\ \\text{s}^2$." },
          { label: "Root", text: "$\\sqrt{0.0167} = 0.129\\ \\text{s}$." },
          { label: "Period", text: "$T = 2\\pi\\times 0.129 = 0.811\\ \\text{s}$." },
        ],
        result: "$T \\approx 0.811\\ \\text{s}$.",
      },
    ],
    keyTakeaways: [
      '$T = 2\\pi\\sqrt{L/g}$ for small swings, independent of mass and (nearly) of amplitude.',
      'Physical pendulum: $T = 2\\pi\\sqrt{I/mgh}$ — the general rigid-body result.',
      'SHM is uniform circular motion seen edge-on: one geometric fact, two chapters of physics.',
    ],
    quiz: [
      {
        q: 'The period of a simple pendulum (small swings):',
        options: [
          'depends on the bob mass',
          'depends on the length and the local $g$, but not on mass or (to excellent approximation) amplitude',
          'is independent of $g$',
          'equals $2\\pi\\sqrt{g/L}$',
        ],
        answer: 1,
        explanation: 'Mass cancels between restoring force and inertia; amplitude drops out only for small angles.',
      },
      {
        q: 'A pendulum clock is moved to the Moon, where $g$ is one-sixth. Its period becomes:',
        options: ['$\\sqrt{6}$ times longer', '$\\sqrt{6}$ times shorter', 'unchanged', '6 times longer'],
        answer: 0,
        explanation: '$T \\propto 1/\\sqrt{g}$: with $g/6$, the period stretches by $\\sqrt{6} \\approx 2.4$.',
      },
      {
        q: 'A uniform rod of length L pivoted at one end oscillates as a physical pendulum with period:',
        options: [`$2\\pi\\sqrt{L/g}$`, `$2\\pi\\sqrt{2L/3g}$`, `$2\\pi\\sqrt{L/3g}$`, `$2\\pi\\sqrt{3L/2g}$`],
        answer: 1,
        explanation: 'With $I = mL^2/3$ and $h = L/2$: $T = 2\\pi\\sqrt{(mL^2/3)/(mgL/2)} = 2\\pi\\sqrt{2L/3g}$.',
      },
      {
        q: 'Simple harmonic motion is the projection, onto a diameter, of:',
        options: ['projectile motion', 'uniform circular motion', 'elliptical orbits', 'damped motion'],
        answer: 1,
        explanation: 'The reference circle: a circling point\u2019s shadow oscillates harmonically with the circle\u2019s $\\omega$.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.5
  {
    sectionId: 'hall-ch15-s5',
    readingTime: 6,
    intro: 'Real oscillators do not tick forever: friction bleeds the motion away. Add a drag force proportional to velocity, $F_d = -bv$, and the amplitude decays exponentially while the frequency barely shifts. The mathematics of **damped** harmonic motion describes car suspensions, door closers, vibrating bridges, and every instrument whose ring must fade — and it sets the stage for resonance, where a gentle push timed to the natural frequency does enormous work.',
    objectives: [
      'Write the equation of motion with linear damping and its solution',
      'Explain the amplitude decay $Ae^{-bt/2m}$ and the energy decay $e^{-bt/m}$',
      'Distinguish underdamped, critically damped, and overdamped behavior',
    ],
    concepts: [
      {
        term: 'Linear drag',
        kind: 'definition',
        statement: 'Model friction as a force opposing velocity, $F_d = -bv$, with damping constant $b$ (kg/s). Newton\u2019s second law becomes $$m\\ddot x + b\\dot x + kx = 0.$$',
        detail: 'This *viscous* drag — proportional to speed — fits motion through fluid and shock-absorber oil; dry sliding friction would not decay exponentially.',
      },
      {
        term: 'The damped solution',
        kind: 'theorem',
        statement: "For light damping ($b < 2m\\omega$), $$x(t) = A\\,e^{-bt/2m}\\cos(\\omega' t + \\phi), \\qquad \\omega' = \\sqrt{\\frac{k}{m} - \\frac{b^2}{4m^2}}.$$ The oscillation goes on, but inside an exponentially shrinking envelope.",
        detail: "The frequency shift is second-order small: even when the amplitude halves every few cycles, $\\omega'$ differs from $\\sqrt{k/m}$ by far less than a percent.",
      },
      {
        term: 'Amplitude versus energy decay',
        kind: 'insight',
        statement: 'The amplitude decays with rate constant $b/2m$, but the energy — proportional to amplitude *squared* — decays **twice as fast**, with rate constant $b/m$: $$E(t) = \\tfrac12kA^2e^{-bt/m}.$$',
        detail: 'This is the classic exam trap: the same factor $e$ does not halve both at the same time. Half-amplitude time is $2m\\ln 2/b$; half-energy time is half that.',
      },
      {
        term: 'Choosing your damping',
        kind: 'insight',
        statement: 'Damping regimes: **underdamped** ($b < 2m\\omega$) — oscillates while dying; **critically damped** ($b = 2m\\omega$) — returns to equilibrium fastest without overshooting; **overdamped** ($b > 2m\\omega$) — creeps home slowly.',
        detail: 'Door closers and car shock absorbers aim for near-critical: you want the door shut and the wheel back on the road *now*, without a second bounce.',
      },
      {
        term: "Damped Simple Harmonic Motion: solution protocol",
        kind: "method",
        statement: "**Solve Damped Simple Harmonic Motion problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is simple harmonic motion; the working equation is $x = x_m\\cos(\\omega t+\\phi)$, $\\omega = \\sqrt{k/m}$, $T = 2\\pi\\sqrt{m/k}$, $T_{\\text{pend}} = 2\\pi\\sqrt{L/g}$, $E = \\tfrac12kx_m^2$; every substitution must carry its units so the final unit ($\\text{s}$, $\\text{Hz}$, phase in radians) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $T\\sim 1\\ \\text{s}$; $1$-m pendulum $2.0\\ \\text{s}$; small angles and linear spring; damping and driving change the period.",
      },
    ],
    examples: [
      {
        title: 'How fast does it die?',
        problem: "A $0.50$ kg block on $k = 200$ N/m moves through oil with damping constant $b = 0.50$ kg/s ($\\omega = 20$ rad/s). (a) Verify the damping is light and find $\\omega'$. (b) After what time, and how many oscillations, has the amplitude halved? (c) When has the energy halved?",
        steps: [
          { label: 'Regime check', text: '$2m\\omega = 2(0.50)(20) = 20$ kg/s, and $b = 0.50 \\ll 20$: very light damping.' },
          { label: 'Damped frequency', text: "$\\omega' = \\sqrt{400 - (0.50)^2/4(0.50)^2} = \\sqrt{400 - 0.25} = 19.99 \\approx 20$ rad/s — indistinguishable from $\\omega$." },
          { label: 'Amplitude halving', text: "$A \\propto e^{-bt/2m}$: half at $t = 2m\\ln2/b = 2(0.50)(0.693)/0.50 = 1.39$ s. With $T = 2\\pi/\\omega' = 0.314$ s, that is $1.39/0.314 = 4.4$ oscillations." },
          { label: 'Energy halving', text: '$E \\propto e^{-bt/m}$: half at $t = m\\ln2/b = 0.69$ s — exactly half the amplitude-halving time.' },
        ],
        result: 'Amplitude halves every 4.4 cycles (1.39 s); the energy halves every 0.69 s. Watch the factor-of-two: it is the square in $E \\propto A^2$.',
      },
      {
        title: "Damped Simple Harmonic Motion: period check",
        problem: "A $0.75\\ \\text{kg}$ mass on a $k = 40\\ \\text{N/m}$ spring oscillates. Find $T = 2\\pi\\sqrt{m/k}$.",
        steps: [
          { label: "Ratio", text: "$m/k = 0.75/40 = 0.0187\\ \\text{s}^2$." },
          { label: "Root", text: "$\\sqrt{0.0187} = 0.137\\ \\text{s}$." },
          { label: "Period", text: "$T = 2\\pi\\times 0.137 = 0.86\\ \\text{s}$." },
        ],
        result: "$T \\approx 0.86\\ \\text{s}$.",
      },
    ],
    keyTakeaways: [
      "The equation $m\\ddot x + b\\dot x + kx = 0$ gives $x = Ae^{-bt/2m}\\cos(\\omega' t+\\phi)$ with $\\omega' \\approx \\omega$ for light damping.",
      'Energy decays twice as fast as amplitude: rates $b/m$ versus $b/2m$.',
      'Critical damping returns to equilibrium fastest without oscillating.',
    ],
    quiz: [
      {
        q: 'For a lightly damped oscillator, the amplitude envelope decays as:',
        options: [`$e^{-bt/2m}$`, `$e^{-bt/m}$`, `$e^{-bt^2}$`, 'a linear ramp'],
        answer: 0,
        explanation: 'The drag attacks velocity, but the amplitude is an integral of speed — hence the factor 2 in the exponent\u2019s denominator.',
      },
      {
        q: "With very light damping, the damped frequency $\\omega'$ compared with $\\omega = \\sqrt{k/m}$ is:",
        options: ['slightly less', 'slightly more', 'exactly equal', 'much larger'],
        answer: 0,
        explanation: "$\\omega' = \\sqrt{k/m - b^2/4m^2}$: drag removes a tiny bit of the effective restoring stiffness.",
      },
      {
        q: 'The mechanical energy of a lightly damped oscillator decays:',
        options: [
          'at the same exponential rate as the amplitude',
          'twice as fast (rate $b/m$ versus $b/2m$ for amplitude)',
          'half as fast',
          'not at all',
        ],
        answer: 1,
        explanation: '$E \\propto A^2$: squaring the exponential doubles the rate constant.',
      },
      {
        q: 'A door closer is designed to be near critically damped so that the door:',
        options: [
          'oscillates a few times before settling',
          'returns to closed in the least time without overshooting',
          'stays half-open',
          'slams and bounces',
        ],
        answer: 1,
        explanation: 'Critical damping is the boundary: fastest return with no overshoot; underdamping would ring and overdamping would creep.',
      },
    ],
  },

  // ------------------------------------------------------------------ 15.6
  {
    sectionId: 'hall-ch15-s6',
    readingTime: 6,
    intro: 'Push a child\u2019s swing at random and nothing accumulates; push in time with the swing\u2019s own rhythm and each small shove adds to the last until the arc is huge. A driven oscillator responds selectively to its driving frequency, and at the natural frequency $\\omega$ its amplitude peaks enormously — **resonance**. The mathematics explains radio tuning, why earthquakes shake some buildings and not others, and the Millennium Bridge\u2019s wobbling opening day.',
    objectives: [
      'Write the steady-state response to a sinusoidal driving force',
      'Compute the driven amplitude, especially at resonance',
      'Explain what sets the sharpness of a resonance peak',
    ],
    concepts: [
      {
        term: 'Forced oscillations',
        kind: 'definition',
        statement: 'Apply a driving force $F(t) = F_m\\cos(\\omega_d t)$ to a damped oscillator. After transients die away, the system settles into a **steady state** oscillating at the driving frequency $\\omega_d$ — not at its natural $\\omega$.',
        detail: 'The startup transient is the free (damped) oscillation of Section 15-5; only the forced rhythm survives steady state.',
      },
      {
        term: 'Steady-state amplitude',
        kind: 'theorem',
        statement: "The steady-state displacement amplitude is $$A = \\frac{F_m}{\\sqrt{(k - m\\omega_d^2)^2 + (b\\omega_d)^2}},$$ with the response lagging the drive by a phase $\\tan^{-1}\\!\\big(b\\omega_d/(k - m\\omega_d^2)\\big)$.",
        detail: 'Three regimes: for $\\omega_d \\ll \\omega$ the mass follows the force statically ($A \\approx F_m/k$); at $\\omega_d \\approx \\omega$ the denominator collapses to $b\\omega$ and amplitude explodes; for $\\omega_d \\gg \\omega$ the mass cannot keep up and $A \\to 0$.',
      },
      {
        term: 'Resonance',
        kind: 'insight',
        statement: "Amplitude is maximal near $\\omega_d = \\omega$ (exactly $\\sqrt{k/m - b^2/2m^2}$ for the displaced amplitude). At resonance the driving force does work on the system at the most productive phase, so energy pours in faster than damping drains it, until the $b\\omega$ term sets the ceiling: $$A_{res} = \\frac{F_m}{b\\omega}.$$ Lighter damping, taller and narrower peak.",
        detail: 'This is selectivity: a radio\u2019s tuned circuit rings with the one station at its resonance and ignores all others; the $Q$ of an oscillator measures the peak\u2019s sharpness.',
      },
      {
        term: 'Resonance in the world',
        kind: 'insight',
        statement: 'Earthquake ground motion near a building\u2019s natural frequency is devastating — tall flexible buildings suffer in long-period quakes, stiff short ones in short-period quakes. Soldiers break step crossing bridges; London\u2019s Millennium Bridge (2000) developed a resonant sideways sway from pedestrians locking step, and was retrofitted with dampers.',
        detail: 'Engineering resonance is about matching — deliberately (radio, MRI, musical instruments) or by disaster (Tacoma Narrows, 1940, aeroelastic resonance caught on film).',
      },
      {
        term: "Forced Oscillations and Resonance: solution protocol",
        kind: "method",
        statement: "**Solve Forced Oscillations and Resonance problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is simple harmonic motion; the working equation is $x = x_m\\cos(\\omega t+\\phi)$, $\\omega = \\sqrt{k/m}$, $T = 2\\pi\\sqrt{m/k}$, $T_{\\text{pend}} = 2\\pi\\sqrt{L/g}$, $E = \\tfrac12kx_m^2$; every substitution must carry its units so the final unit ($\\text{s}$, $\\text{Hz}$, phase in radians) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $T\\sim 1\\ \\text{s}$; $1$-m pendulum $2.0\\ \\text{s}$; small angles and linear spring; damping and driving change the period.",
      },
    ],
    figures: [
      {
        caption: 'Resonance curves: steady-state amplitude versus driving angular frequency for three damping constants (computed from $A = F_m/\\sqrt{(k-m\\omega_d^2)^2+(b\\omega_d)^2}$, in units with $\\omega = 1$ and $F_m$ fixed). Light damping gives a tall, needle-sharp peak at $\\omega_d = \\omega$; heavy damping flattens and broadens the response and shifts the peak slightly below $\\omega$.',
        svg: `<svg viewBox="0 0 720 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three resonance curves of amplitude versus driving frequency">
  <rect x="0" y="0" width="720" height="340" fill="currentColor" opacity="0"/>
  <line x1="80" y1="300" x2="700" y2="300" stroke="currentColor" stroke-width="2"/>
  <line x1="80" y1="300" x2="80" y2="40" stroke="currentColor" stroke-width="2"/>
  <line x1="360" y1="45" x2="360" y2="300" stroke="currentColor" stroke-width="1" stroke-dasharray="5 4" opacity="0.5"/>
  <text x="352" y="34" font-size="14" fill="currentColor" text-anchor="end">ω = √(k/m)</text>
  <polyline points="80,290 108,289.7 136,289.4 164,288.8 192,287.9 220,286.4 248,284.1 276,280 304,271.8 332,247.3 346,202.5 360,45 374,208 388,252.5 416,277 444,278.7 472,289 528,293.5 584,295.5 640,296.6" fill="none" stroke="currentColor" stroke-width="3"/>
  <polyline points="80,262 220,250 276,228 304,204 332,158 346,122 360,110 374,137 388,175 416,224 444,248.5 500,270 560,280 640,287" fill="none" stroke="currentColor" stroke-width="2.5" opacity="0.65"/>
  <polyline points="80,237 164,232 220,222 276,205 304,195 332,190 360,195 388,209 416,225 472,250.6 528,265.6 584,274.7 640,280.5" fill="none" stroke="currentColor" stroke-width="2" opacity="0.4"/>
  <text x="372" y="52" font-size="13" fill="currentColor">light damping</text>
  <text x="372" y="112" font-size="13" fill="currentColor" opacity="0.75">b medium</text>
  <text x="372" y="190" font-size="13" fill="currentColor" opacity="0.5">heavy damping</text>
  <text x="60" y="170" font-size="14" fill="currentColor" transform="rotate(-90 60 170)" text-anchor="middle">amplitude A</text>
  <text x="390" y="326" font-size="14" fill="currentColor" text-anchor="middle">driving angular frequency ω_d</text>
</svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'Resonance pays a factor of four (or twenty)',
        problem: "A driven oscillator has $k = 200$ N/m, $m = 0.50$ kg ($\\omega = 20$ rad/s), $b = 0.50$ kg/s, and drive amplitude $F_m$. Compare the steady-state amplitude at $\\omega_d = 20$ rad/s, at $\\omega_d = 22$ rad/s, and in the quasi-static limit $\\omega_d \\approx 0$.",
        steps: [
          { label: 'At resonance', text: 'Denominator $= b\\omega_d = (0.50)(20) = 10$, so $A = F_m/10$.' },
          { label: 'Detuned by 10%', text: '$k - m\\omega_d^2 = 200 - 0.50(22)^2 = 200 - 242 = -42$; $b\\omega_d = 11$. Denominator $= \\sqrt{42^2 + 11^2} = \\sqrt{1885} = 43.4$, so $A = F_m/43$.' },
          { label: 'Compare', text: 'Resonant amplitude exceeds the 22 rad/s response by $43.4/10 = 4.3\\times$.' },
          { label: 'Quasi-static limit', text: 'As $\\omega_d \\to 0$: $A \\to F_m/k = F_m/200$. The resonant amplitude beats it by $200/10 = 20\\times$.' },
        ],
        result: 'Same push, twenty times the swing: at resonance the drive does work in phase with motion, cycle after cycle, and only the small $b\\omega$ term limits the buildup.',
      },
      {
        title: "Forced Oscillations and Resonance: period check",
        problem: "A $1\\ \\text{kg}$ mass on a $k = 20\\ \\text{N/m}$ spring oscillates. Find $T = 2\\pi\\sqrt{m/k}$.",
        steps: [
          { label: "Ratio", text: "$m/k = 1/20 = 0.05\\ \\text{s}^2$." },
          { label: "Root", text: "$\\sqrt{0.05} = 0.224\\ \\text{s}$." },
          { label: "Period", text: "$T = 2\\pi\\times 0.224 = 1.4\\ \\text{s}$." },
        ],
        result: "$T \\approx 1.4\\ \\text{s}$.",
      },
    ],
    keyTakeaways: [
      'Steady state follows the driving frequency: $A = F_m/\\sqrt{(k-m\\omega_d^2)^2+(b\\omega_d)^2}$.',
      'Peak response at $\\omega_d \\approx \\omega$, with height $\\sim F_m/b\\omega$ — set by damping alone.',
      'Sharper resonance = more selective: radios, buildings, and bridges all filter frequency by this curve.',
    ],
    quiz: [
      {
        q: 'For weak damping, the driven amplitude is largest when the driving frequency equals:',
        options: [`$\\sqrt{k/m}$`, `$2\\omega$`, `$\\omega/2$`, `$b/m$`],
        answer: 0,
        explanation: 'Resonance: drive in time with the natural frequency and each push adds to the last.',
      },
      {
        q: 'The steady-state amplitude of a forced oscillator is:',
        options: [
          `$F_m/\\sqrt{(k-m\\omega_d^2)^2+(b\\omega_d)^2}$`,
          'always $F_m/k$',
          'always $F_m/(b\\omega_d)$',
          `$F_m/m$`,
        ],
        answer: 0,
        explanation: 'The stiffness term fights the drive off-resonance; the damping term alone limits the response at resonance.',
      },
      {
        q: 'If you push a swing at random intervals rather than in rhythm with its natural frequency:',
        options: [
          'it resonates anyway',
          'the pushes average out and the amplitude stays small',
          'it stops instantly',
          'energy is created',
        ],
        answer: 1,
        explanation: 'Out-of-phase pushes sometimes add, sometimes subtract: only the resonant component accumulates.',
      },
      {
        q: 'A taller, narrower resonance peak corresponds to:',
        options: ['heavier damping', 'lighter damping', 'stronger driving force', 'higher frequency'],
        answer: 1,
        explanation: 'The peak height is $\\sim F_m/b\\omega$ and its width shrinks with $b$: light damping is high selectivity.',
      },
      // PYQ-pattern: JEE Mains 2019 — spring-mass period (rephrased, values changed)
      {
        q: 'A block of mass $m = 0.50 \\text{ kg}$ hangs on a spring of stiffness $k = 200 \\text{ N/m}$. Its small-oscillation period is:',
        options: [`$0.10 \\text{ s}$`, `$0.31 \\text{ s}$`, `$3.1 \\text{ s}$`, `$0.63 \\text{ s}$`],
        answer: 1,
        explanation: 'Step 1: Given $m = 0.50 \\text{ kg}$ and $k = 200 \\text{ N/m}$ for undamped free oscillation. Step 2: Governing law is $m\\ddot{x} = -kx$, giving angular frequency $\\omega = \\sqrt{k/m}$ and $T = 2\\pi/\\omega$. Step 3: Key equation: $$T = 2\\pi\\sqrt{\\frac{m}{k}} = 2\\pi\\sqrt{\\frac{0.50}{200}}.$$ Step 4: Numerics give $\\sqrt{0.0025} = 0.050 \\text{ s}$ and $T = 2\\pi(0.050) \\approx 0.31 \\text{ s}$; units of $\\sqrt{\\text{kg}/(\\text{N/m})}$ are seconds. Step 5: Distractors fail because $0.10$ replaces $2\\pi$ with $2$ (forgetting $\\pi$), $3.1$ slips a decimal, and $0.63$ doubles the period. Step 6: Conclude the period is **$0.31 \\text{ s}$**.',
      },
      // PYQ-pattern: JEE Advanced 2020 — simple pendulum (rephrased, values changed)
      {
        q: 'A simple pendulum should beat seconds with period $T = 2.0 \\text{ s}$ where $g = 9.8 \\text{ m/s}^{2}$. The required string length is closest to:',
        options: [`$0.25 \\text{ m}$`, `$4.0 \\text{ m}$`, `$0.99 \\text{ m}$`, `$2.0 \\text{ m}$`],
        answer: 2,
        explanation: 'Step 1: Given target $T = 2.0 \\text{ s}$ and $g = 9.8 \\text{ m/s}^{2}$ for small swings. Step 2: Governing law is $T = 2\\pi\\sqrt{L/g}$, so $L = gT^{2}/4\\pi^{2}$. Step 3: Key equation: $$L = \\frac{(9.8)(2.0)^{2}}{4\\pi^{2}} = \\frac{39.2}{39.5}.$$ Step 4: Numerics give $L \\approx 0.99 \\text{ m}$; units of $gT^{2}$ are meters. Step 5: Distractors fail because $0.25$ is the $1.0 \\text{ s}$ length, $4.0$ copies $T^{2}$ forgetting $g/4\\pi^{2}$, and $2.0$ copies the period as a length. Step 6: Conclude the seconds pendulum needs about **$0.99 \\text{ m}$**.',
      },
      // PYQ-pattern: GATE PH 2018 — SHM velocity and energy (rephrased, values changed)
      {
        q: 'A $2.0 \\text{ kg}$ block on a spring ($k = 50 \\text{ N/m}$) oscillates with amplitude $A = 0.10 \\text{ m}$. The maximum speed is:',
        options: [`$0.50 \\text{ m/s}$`, `$0.25 \\text{ m/s}$`, `$1.0 \\text{ m/s}$`, `$0.10 \\text{ m/s}$`],
        answer: 0,
        explanation: 'Step 1: Given $m = 2.0 \\text{ kg}$, $k = 50 \\text{ N/m}$, $A = 0.10 \\text{ m}$. Step 2: Governing laws are energy sharing $\\frac{1}{2}kA^{2} = \\frac{1}{2}mv_{max}^{2}$ and $v_{max} = A\\omega$ with $\\omega = \\sqrt{k/m}$. Step 3: Key equation: $$v_{max} = A\\sqrt{\\frac{k}{m}} = (0.10)\\sqrt{\\frac{50}{2.0}}.$$ Step 4: Numerics give $\\sqrt{25} = 5.0 \\text{ s}^{-1}$ and $v_{max} = 0.50 \\text{ m/s}$, with stored energy $\\frac{1}{2}(50)(0.10)^{2} = 0.25 \\text{ J}$; units check as $\\text{m/s}$. Step 5: Distractors fail because $0.25$ quotes the energy in $\\text{m/s}$, $1.0$ forgets the square root, and $0.10$ copies the amplitude. Step 6: Conclude the peak speed is **$0.50 \\text{ m/s}$**.',
      },
      // PYQ-pattern: JEE Mains 2022 — phase from initial conditions (rephrased, values changed)
      {
        q: 'In $x = A\\cos(\\omega t + \\phi)$, the oscillator starts at $x_{0} = A/2$ moving in the positive direction. The phase constant is:',
        options: [`$+\\pi/3$`, `$\\pi/6$`, `$0$`, `$-\\pi/3$`],
        answer: 3,
        explanation: 'Step 1: Given $x(0) = A\\cos\\phi = A/2$ and $v(0) = -A\\omega\\sin\\phi > 0$. Step 2: Governing relations are the position and velocity forms $x = A\\cos(\\omega t + \\phi)$ and $v = -A\\omega\\sin(\\omega t + \\phi)$. Step 3: Key equations: $$\\cos\\phi = \\frac{1}{2}, \\qquad \\sin\\phi < 0 \\quad\\Rightarrow\\quad \\phi = -\\frac{\\pi}{3}.$$ Step 4: The magnitude check $|\\phi| = \\pi/3$ matches $\\cos^{-1}(1/2)$, and the sign test on velocity fixes it uniquely; $\\phi$ is dimensionless in radians. Step 5: Distractors fail because $+\\pi/3$ gives negative initial velocity, $\\pi/6$ has cosine $\\sqrt{3}/2$, and $0$ starts at the extreme $x = A$. Step 6: Conclude the phase constant is **$-\\pi/3$**.',
      },
      // PYQ-pattern: JEE Advanced 2021 — coupled springs period (rephrased, values changed)
      {
        q: 'Springs $k_{1} = 100 \\text{ N/m}$ and $k_{2} = 200 \\text{ N/m}$ joined end to end carry a $1.0 \\text{ kg}$ mass. The oscillation period is closest to:',
        options: [`$0.36 \\text{ s}$`, `$0.77 \\text{ s}$`, `$1.1 \\text{ s}$`, `$0.20 \\text{ s}$`],
        answer: 1,
        explanation: 'Step 1: Given series springs $k_{1} = 100$, $k_{2} = 200$ in $\\text{N/m}$ and $m = 1.0 \\text{ kg}$. Step 2: Governing laws are the series rule $1/k_{eff} = 1/k_{1} + 1/k_{2}$ and $T = 2\\pi\\sqrt{m/k_{eff}}$. Step 3: Key equation: $$k_{eff} = \\frac{(100)(200)}{100+200} = 66.7 \\text{ N/m}, \\qquad T = 2\\pi\\sqrt{\\frac{1.0}{66.7}}.$$ Step 4: Numerics give $\\sqrt{0.0150} = 0.122 \\text{ s}$ and $T \\approx 0.77 \\text{ s}$; the effective stiffness is softer than either spring, so $T$ must grow. Step 5: Distractors fail because $0.36$ is the parallel-spring result, $1.1$ adds the stiffnesses wrongly, and $0.20$ misplaces a decimal. Step 6: Conclude the series system swings with **$T \\approx 0.77 \\text{ s}$**.',
      },
      // PYQ-pattern: GATE PH 2022 — forced resonance amplitude (rephrased, values changed)
      {
        q: 'A damped oscillator ($k = 200 \\text{ N/m}$, $m = 0.50 \\text{ kg}$, $b = 0.50 \\text{ kg/s}$) is driven at resonance by force amplitude $F_{m} = 10 \\text{ N}$. The steady-state amplitude is:',
        options: [`$0.050 \\text{ m}$`, `$0.23 \\text{ m}$`, `$1.0 \\text{ m}$`, `$10 \\text{ m}$`],
        answer: 2,
        explanation: 'Step 1: Given $F_{m} = 10 \\text{ N}$, damping $b = 0.50 \\text{ kg/s}$, and resonance $\\omega = \\sqrt{200/0.50} = 20 \\text{ rad/s}$. Step 2: Governing law is the steady amplitude $A = F_{m}/\\sqrt{(k-m\\omega_{d}^{2})^{2}+(b\\omega_{d})^{2}}$, which at resonance sheds the stiffness term. Step 3: Key equation: $$A_{res} = \\frac{F_{m}}{b\\omega} = \\frac{10}{(0.50)(20)}.$$ Step 4: Numerics give $A = 10/10 = 1.0 \\text{ m}$; units $\\text{N}/(\\text{kg/s}\\cdot\\text{s}^{-1})$ are meters and resonance must beat the static $F_{m}/k = 0.050 \\text{ m}$. Step 5: Distractors fail because $0.050$ is the static deflection, $0.23$ is a detuned response, and $10$ copies the force magnitude. Step 6: Conclude resonance builds the swing to **$1.0 \\text{ m}$**.',
      },
    ],
  },
]
