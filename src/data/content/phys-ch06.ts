import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// The Feynman Lectures on Physics, Vol. I (New Millennium Edition)
// Chapter 6: The Harmonic Oscillator and Linear Systems — Lectures 21–24
// Master study content. Worked-example numbers are Feynman’s own wherever the
// lectures carry arithmetic (his log tables, Mössbauer’s Q, the tidal periods);
// constructed instances are labelled as such. Math is LaTeX, rendered by
// KaTeX through the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const physCh6Content: SectionContent[] = [
  // ------------------------------------------------------------------ 6.1
  {
    sectionId: 'hall-ch15-s16',
    readingTime: 9,
    intro: 'A mass on a spring is the physicist’s hydrogen atom: the simplest thing that moves, and therefore the system whose equation appears wherever anything oscillates — charge sloshing in a circuit, a tuning fork, electrons radiating light inside atoms, a thermostat hunting, even foxes eating rabbits eating grass. Feynman gives the oscillator four chapters. This one builds the equation, solves it twice — once numerically, once exactly — and shows why every system near equilibrium is secretly a mass on a spring.',
    objectives: [
      'Write and solve the spring-mass equation $m\\,d^2x/dt^2 = -kx$, identifying $\\omega_0^2 = k/m$',
      'State the general solution in its three equivalent forms and fix the constants from initial conditions',
      'Explain the projection construction that ties harmonic motion to uniform circular motion',
      'Verify energy conservation for the oscillator and the equal split of its average kinetic and potential parts',
      'Argue from a Taylor expansion why every small oscillation about stable equilibrium is harmonic',
    ],
    concepts: [
      {
        term: 'Linear differential equations with constant coefficients',
        kind: 'definition',
        statement: 'A **linear differential equation with constant coefficients** is a sum of terms, each a derivative of the dependent variable multiplied by a constant: $$a_n\\frac{d^nx}{dt^n} + a_{n-1}\\frac{d^{n-1}x}{dt^{n-1}} + \\dots + a_1\\frac{dx}{dt} + a_0 x = f(t).$$',
        detail: 'Feynman’s catalogue of systems that follow such equations: a mass on a spring; charge oscillating in an electrical circuit; a tuning fork generating sound; electrons in an atom generating light waves; a thermostat servosystem; bacteria in interaction with their food and poisons; foxes eating rabbits eating grass. The oscillator deserves deep study precisely because its equation keeps reappearing under different clothes.',
      },
      {
        term: 'The spring-mass equation',
        kind: 'definition',
        statement: 'With $x$ measured from the equilibrium position — the initial stretch having already balanced gravity, as in the potential-energy bookkeeping of Chapter 4 — a perfectly linear spring pulls with $F = -kx$, and the motion obeys $$m\\frac{d^2x}{dt^2} = -kx.$$',
        detail: 'The minus sign is the whole point: whatever the displacement, the force points back toward $x = 0$. Only the deviation from equilibrium enters, so gravity merely shifts the origin and never otherwise shows its face.',
      },
      {
        term: 'The natural frequency',
        kind: 'theorem',
        statement: 'The trial solution $x = \\cos\\omega_0 t$ works exactly when $$\\omega_0^2 = k/m,$$ so every free motion oscillates at one frequency fixed by the system itself, with period $$t_0 = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{m/k}.$$',
        detail: 'Feynman first solved the scaled equation $d^2x/dt^2 = -x$ numerically back in Chapter 9: released from rest at $x = 1$, the mass crossed zero at $t = 1.570$ and completed a cycle in 6.28 units — recognizably $\\pi/2$ and $2\\pi$. A heavier mass is slower (more inertia at the same force); a stronger spring is faster; the amplitude has no say in the matter.',
      },
      {
        term: 'Amplitude and phase: the general solution',
        kind: 'notation',
        statement: 'Every solution can be written in any of three equivalent forms, $$x = a\\cos\\omega_0(t - t_1) = a\\cos(\\omega_0 t + \\Delta) = A\\cos\\omega_0 t + B\\sin\\omega_0 t,$$ where $a$ is the **amplitude** (the maximum displacement) and $\\Delta$ the phase shift of the oscillation.',
        detail: 'The differential equation fixes $\\omega_0$ and nothing else; the two remaining constants encode how the motion was started. Walking into the room at an arbitrary instant shows why a phase must be allowed: the cosine you observe began before you arrived. The three forms are interchangeable through $A = a\\cos\\Delta$ and $B = -a\\sin\\Delta$.',
      },
      {
        term: 'Scale invariance of linear equations',
        kind: 'insight',
        statement: 'If $x(t)$ solves the equation, so does any constant multiple of it: pull the mass twice as far down and it returns in exactly the same time. **The period is independent of the amplitude.**',
        detail: 'The physics: twice the displacement means twice the force, twice the acceleration, twice the speed at every point — and twice the distance to travel, which exactly cancels. With a linear equation the motion has the same time pattern no matter how strongly it runs; this is why the oscillator’s clock is set by $k$ and $m$ alone.',
      },
      {
        term: 'Harmonic motion is projected circular motion',
        kind: 'insight',
        statement: 'A particle moving uniformly on a circle of radius $R$ at angular rate $\\omega_0$ has $x = R\\cos\\theta$ and horizontal acceleration $$a_x = -\\omega_0^2 x,$$ which is the oscillator’s equation — for any radius.',
        detail: 'The demonstration of Fig. 21-3: an arc lamp throws the shadows of a rotating crank pin and of a vertically oscillating mass side by side on a screen; with the shaft speed matched, each shadow follows the other exactly, cycle after cycle. The circle is artificial — nothing in the linear motion goes around — but the identification is the seed of the complex-exponential method of the next section.',
      },
      {
        term: 'Initial conditions',
        kind: 'method',
        statement: 'Starting at $t = 0$ with position $x_0$ and velocity $v_0$, the solution $x = A\\cos\\omega_0 t + B\\sin\\omega_0 t$ has $$A = x_0, \\qquad B = v_0/\\omega_0.$$',
        detail: 'Setting $t = 0$ collapses the two equations (position and differentiated velocity) because $\\cos 0 = 1$ and $\\sin 0 = 0$. Position and velocity are the only things one can independently choose — the acceleration is already dictated by the spring through $x_0$. Two free constants match the two pieces of information a second-order equation permits.',
      },
      {
        term: 'Energy of the oscillator',
        kind: 'theorem',
        statement: 'With $x = a\\cos(\\omega_0 t + \\Delta)$ the potential and kinetic energies slosh oppositely and the total is constant: $$T + U = \\tfrac{1}{2}m\\omega_0^2 a^2 \\left[\\sin^2(\\omega_0 t + \\Delta) + \\cos^2(\\omega_0 t + \\Delta)\\right] = \\tfrac{1}{2}m\\omega_0^2 a^2 = \\tfrac{1}{2}ka^2.$$',
        detail: 'The energy grows as the square of the amplitude — double the swing, quadruple the energy. At the extremes all the energy is potential (the velocity vanishes); at the centre all is kinetic. The average potential energy is half the total, and so is the average kinetic — a split that returns in kinetic theory and in every standing wave of Chapter 7.',
      },
      {
        term: 'Why everything small oscillates harmonically',
        kind: 'insight',
        statement: 'Near any stable equilibrium a smooth potential is approximately quadratic, $$V(x) \\approx V(x_0) + \\tfrac{1}{2}V^{\\prime\\prime}(x_0)(x - x_0)^2,$$ because the linear term vanishes at a minimum; the force is then linear and the motion harmonic with $\\omega_0 = \\sqrt{V^{\\prime\\prime}(x_0)/m}$.',
        detail: 'The pendulum for small swings: the restoring force along the arc is $-mg\\sin\\theta \\approx -mg\\theta$, and with arc length $x = l\\theta$ the equation becomes $d^2\\theta/dt^2 = -(g/l)\\theta$ — a harmonic oscillator of frequency $\\sqrt{g/l}$, independent of mass and, to this order, of amplitude. The quadratic is the first thing every smooth curve resembles near its bottom; that is why nature is so full of harmonic oscillators.',
      },
    ],
    examples: [
      {
        title: 'From numerical integration to π/2',
        problem: 'In Chapter 9 Feynman solved $d^2x/dt^2 = -x$ numerically (units chosen so $k/m = 1$), releasing the mass from rest at $x = 1$. Compare his numbers with the exact solution.',
        steps: [
          { label: 'Step 1: Recall the numerical result', text: 'Step-by-step integration gave the mass passing through $x = 0$ at $t = 1.570$ and a full cycle of $t_0 = 6.28$ seconds — found before any calculus was brought to bear.' },
          { label: 'Step 2: Spot the function', text: 'We need a function that is its own negative second derivative: $x = \\cos t$ has $d^2x/dt^2 = -\\cos t = -x$, and it starts at $x(0) = 1$ with zero velocity — exactly the stated start.' },
          { label: 'Step 3: Predict the crossing exactly', text: 'The cosine first reaches zero at $t = \\pi/2 = 1.57080$; the numerical 1.570 was wrong only in its final figure, the error of finite integration steps.' },
          { label: 'Step 4: Identify the period', text: 'The cycle is $2\\pi = 6.283$, matching the numerical 6.28. Restoring the constants, the period of a real spring-mass system is $t_0 = 2\\pi/\\omega_0 = 2\\pi\\sqrt{m/k}$.' },
        ],
        result: 'The Chapter 9 numerical solution was the cosine in disguise; the exact zero-crossing is $\\pi/2 = 1.57080$ against the numerical 1.570.',
      },
      {
        title: 'A mass on a spring, started with a kick',
        problem: 'A 0.25-kg mass hangs on a spring of stiffness $k = 100$ N/m. It is pulled 2.0 cm below equilibrium and given an upward velocity of 0.40 m/s at $t = 0$. Find the motion and the energy. (Numbers illustrative of the lecture’s method.)',
        steps: [
          { label: 'Step 1: Natural frequency', text: '$\\omega_0 = \\sqrt{k/m} = \\sqrt{100/0.25} = 20$ rad/s, so the period is $2\\pi/20 = 0.314$ s — about three wiggles per second, whatever the amplitude.' },
          { label: 'Step 2: Apply the initial-condition formulas', text: '$A = x_0 = 0.020$ m and $B = v_0/\\omega_0 = 0.40/20 = 0.020$ m, so $x = 0.020\\cos 20t + 0.020\\sin 20t$ (in metres).' },
          { label: 'Step 3: Combine into amplitude and phase', text: 'The amplitude is $a = \\sqrt{A^2 + B^2} = 0.020\\sqrt{2} = 0.028$ m, reached with phase shift $\\Delta = \\tan^{-1}(-B/A) = -45°$: the motion is a quarter-period ahead of a pure cosine.' },
          { label: 'Step 4: Energy check', text: '$E = \\tfrac{1}{2}ka^2 = \\tfrac{1}{2}(100)(0.0283)^2 = 0.040$ J — equally $\\tfrac{1}{2}mv_{\\max}^2$ with $v_{\\max} = \\omega_0 a = 0.57$ m/s.' },
          { label: 'Step 5: Note what did not matter', text: 'Had the mass been pulled 4.0 cm instead of 2.0, every amplitude and energy would double or quadruple, but $\\omega_0$ and $t_0$ would not change at all — the scale invariance of the linear equation.' },
        ],
        result: '$x = 0.020\\cos 20t + 0.020\\sin 20t$ metres; $a = 0.028$ m, $E = 0.040$ J, $v_{\\max} = 0.57$ m/s.',
      },
      {
        title: 'The pendulum as a hidden spring',
        problem: 'Show that a pendulum oscillates harmonically for small swings, and find the length whose period is exactly 2.0 s (take $g = 9.8$ m/s²).',
        steps: [
          { label: 'Step 1: Write the restoring force', text: 'At angle $\\theta$ the weight’s component along the arc is $-mg\\sin\\theta$; with arc position $x = l\\theta$ and acceleration $l\\,d^2\\theta/dt^2$, Newton’s law reads $m l\\,d^2\\theta/dt^2 = -mg\\sin\\theta$.' },
          { label: 'Step 2: Linearize', text: 'For small swings $\\sin\\theta \\approx \\theta$ — the first term of its series, exactly the Taylor step that makes every well harmonic — so $$\\frac{d^2\\theta}{dt^2} = -\\frac{g}{l}\\theta,$$ a harmonic oscillator of frequency $\\omega_0 = \\sqrt{g/l}$, with no mass in sight.' },
          { label: 'Step 3: Solve for the seconds pendulum', text: '$t_0 = 2\\pi\\sqrt{l/g} = 2.0$ s demands $$l = g\\left(\\frac{t_0}{2\\pi}\\right)^2 = \\frac{9.8}{\\pi^2} = 0.99\\ \\text{m}$$ — the classic one-metre seconds pendulum.' },
          { label: 'Step 4: Check the smallness condition', text: 'For a 5° swing, $\\sin\\theta$ and $\\theta$ differ by about 0.13 percent, so the period is amplitude-independent to that accuracy — the clockmaker’s fact, and a direct consequence of scale invariance.' },
        ],
        result: '$\\omega_0 = \\sqrt{g/l}$; a 0.99-m pendulum completes one full 2.0-second period, ticking once per second.',
      },
    ],
    keyTakeaways: [
      'The oscillator equation $m\\,d^2x/dt^2 = -kx$ is solved by $x = a\\cos(\\omega_0 t + \\Delta)$ with $\\omega_0 = \\sqrt{k/m}$ and period $t_0 = 2\\pi\\sqrt{m/k}$.',
      'The equation fixes the frequency; the initial conditions fix the amplitude and phase — nothing else is free.',
      'The period is independent of amplitude: multiplying a solution of a linear equation by a constant gives another solution.',
      'Harmonic motion is the projection of uniform circular motion — the geometric seed of the complex-exponential method of Section 6.2.',
      'Initial data convert through $A = x_0$ and $B = v_0/\\omega_0$; the energy is $\\tfrac{1}{2}m\\omega_0^2 a^2 = \\tfrac{1}{2}ka^2$, split equally on average between kinetic and potential.',
      'Near any stable equilibrium every smooth potential is quadratic to first surviving order, so small oscillations are universally harmonic — the pendulum’s $\\omega_0 = \\sqrt{g/l}$ among them.',
    ],
    quiz: [
      {
        q: 'Which of the following is NOT in Feynman’s list of systems governed by the oscillator’s equation?',
        options: ['Charge oscillating back and forth in an electrical circuit', 'Electrons in an atom generating light waves', 'A thermostat servosystem adjusting a temperature', 'A body in free fall under uniform gravity'],
        answer: 3,
        explanation: 'Free fall is uniformly accelerated motion, not a restoring-force problem. The lecture’s list — circuits, tuning forks, atomic electrons, servosystems, bacteria colonies, predator-prey ecology — is precisely the argument for studying one linear equation deeply.',
      },
      {
        q: 'Doubling the amplitude of a harmonic oscillator:',
        options: ['Doubles the frequency', 'Halves the period', 'Quadruples the total energy', 'Doubles the period'],
        answer: 2,
        explanation: 'The energy is $\\tfrac{1}{2}ka^2$, quadratic in the amplitude. The frequency $\\omega_0 = \\sqrt{k/m}$ is untouched — that is the scale invariance of the linear equation.',
      },
      {
        q: 'A mass starts at $x = 0$ with velocity $v_0$ at $t = 0$. Its subsequent motion is:',
        options: [`$v_0\\cos\\omega_0 t$`, `$(v_0/\\omega_0)\\sin\\omega_0 t$`, `$v_0 t$`, `$v_0\\omega_0\\cos\\omega_0 t$`],
        answer: 1,
        explanation: 'The initial conditions give $A = x_0 = 0$ and $B = v_0/\\omega_0$, so $x = (v_0/\\omega_0)\\sin\\omega_0 t$ — a pure sine starting from the centre with maximum speed.',
      },
      {
        q: 'Quadrupling the mass of a spring-mass system:',
        options: ['Doubles the period', 'Halves the period', 'Quadruples the period', 'Leaves the period unchanged'],
        answer: 0,
        explanation: '$t_0 = 2\\pi\\sqrt{m/k}$ grows as the square root of the mass: four times the inertia gives twice the period, and the frequency $\\sqrt{k/m}$ halves.',
      },
      {
        q: 'Why is every sufficiently small oscillation about stable equilibrium approximately harmonic?',
        options: ['Because all physical potentials are exactly quadratic', 'Because the linear term of the potential vanishes at a minimum, leaving the quadratic as the first surviving term', 'Because friction removes the higher-order terms', 'Because small amplitudes always mean small forces'],
        answer: 1,
        explanation: 'Expanding $V$ about the minimum, $V = V_0 + \\tfrac{1}{2}V^{\\prime\\prime}(x_0)(x-x_0)^2 + \\dots$; the cubic and higher terms fade as the amplitude shrinks, so the restoring force is linear to excellent accuracy.',
      },
    ],
  },

  // ------------------------------------------------------------------ 6.2
  {
    sectionId: 'hall-ch15-s17',
    readingTime: 9,
    intro: 'Before pushing the oscillator further, Feynman stops to earn the tool. His lecture on algebra — famous enough to be reprinted on its own — rebuilds the number system from the integers: subtraction forces the negatives into existence, division the fractions, $x^2 = 2$ the irrationals, and $x^2 = -1$ the complex numbers, the last invention mathematics will ever need. At the top of the climb stands what he calls the most remarkable formula in all of mathematics.',
    objectives: [
      'Reconstruct the number system from the integers by abstraction and generalization',
      'Compute a logarithm from successive square roots of ten, as Briggs did in 1620',
      'Define complex numbers, their conjugates and the multiplication rule',
      'Derive Euler’s formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ from the behaviour of imaginary powers',
      'Solve the driven oscillator with complex exponentials, replacing differentiation by multiplication',
    ],
    concepts: [
      {
        term: 'Rules and inverse operations',
        kind: 'definition',
        statement: 'Elementary algebra rests on a short list of rules — commutativity, associativity, distributivity and the laws of powers — applied to direct operations (addition, multiplication, raising to a power) and their inverses: **subtraction, division, root extraction and the logarithm**.',
        detail: 'The power equation $b^a = c$ hides two different inverse questions: $b = \\sqrt[a]{c}$ (the root) and $a = \\log_b c$ (the logarithm). Feynman tabulates all eleven rules (his Eq. 22.1) and the four direct-inverse pairs (22.2) — the complete grammar that the rest of the lecture will generalize.',
      },
      {
        term: 'Abstraction and generalization',
        kind: 'insight',
        statement: 'When an equation cannot be solved in the existing numbers — $3 - 5$ among the positive integers, $3/5$ among the integers, $b^2 = 2$ among the fractions — the remedy is to keep the rules and enlarge the objects: **the rules become the definition of the new symbols.**',
        detail: 'Negatives make every subtraction possible; fractions every division; Dedekind’s continuity the irrationals that troubled the Greeks. Each extension is forced by an insoluble equation, and each time the question is whether the whole algebraic apparatus survives — remarkably, it always does.',
      },
      {
        term: 'Logarithms by successive square roots of ten',
        kind: 'method',
        statement: 'Ten successive square roots of 10 give $10^{1/2} = 3.16228$, $10^{1/4} = 1.77828$, $10^{1/8} = 1.33352$, and so on down to $10^{1/1024} = 1.0022511$; the column $(10^s - 1)/s$ settles toward **2.3025**, and multiplying the proper table factors computes any power — or logarithm — of ten.',
        detail: 'The logarithm of 2 falls out as $0.30103$, correct to five figures. Mr. Briggs of Halifax did it for real in 1620: twenty-seven square roots (he claimed fifty-four, but the rest follow by the small-power trick), computed to sixteen decimal places and published to fourteen; all log tables for three centuries were borrowed from his until the WPA recomputed them independently. The addition rule $\\log_b(ac) = \\log_b a + \\log_b c$ is the practical engine, and any log table is any other rescaled.',
      },
      {
        term: 'The natural base',
        kind: 'definition',
        statement: 'For very small $\\epsilon$, $10^{\\epsilon} = 1 + 2.3025\\epsilon$; rescaling the logarithm by 2.3025 selects the base in which $e^n \\approx 1 + n$ for small $n$ — the natural base, $$e = 10^{0.434294\\ldots} = 2.7183\\ldots$$',
        detail: 'Feynman computes $e$ itself from the square-root table as $2.7184$ (the last digit is arithmetic drift; the true value is $2.7183$). Base 10 was chosen because we have ten fingers; $e$ is the base that makes the algebra clean — the same choice calculus makes for the exponential function.',
      },
      {
        term: 'Complex numbers',
        kind: 'definition',
        statement: 'Inventing $i$ with $i^2 = -1$ and closing under the rules produces numbers $p + iq$; the multiplication is fixed by $i^2 = -1$: $$(r + is)(p + iq) = (rp - sq) + i(rq + sp).$$',
        detail: 'The conjugate $p - iq$ reverses the sign of $i$, and any equation true of $i$ remains true with $i$ replaced everywhere by $-i$. The miracle: this is the last invention. With complex numbers every algebraic equation is solvable — the square root of $i$ is some definite complex number, and even $i^i$ is something. No further generalization will ever be forced on us.',
      },
      {
        term: 'Imaginary powers rotate',
        kind: 'method',
        statement: 'Writing $10^{is} = x + iy$ and multiplying by the conjugate gives $$x^2 + y^2 = 1:$$ imaginary powers of ten live on the unit circle. Starting from $10^{i/1024} = 1 + 0.0022486i$ and squaring repeatedly walks around the circle — the powers oscillate like a sine and cosine.',
        detail: 'The table climbs from $1.00000 + 0.00225i$ through $0.40679 + 0.91365i$ (the half power) to $-0.66928 + 0.74332i$. Multiplying the rows $512 \\times 128 \\times 64$ and dividing out the overshoot shows that ten must be raised to the power $698.20i/1024$ to give exactly $i$: $\\log_{10} i = 0.68184i$. Since $i^4 = 1$, the imaginary powers repeat with period $2.72i$.',
      },
      {
        term: 'Euler’s jewel',
        kind: 'theorem',
        statement: 'Renaming the base and rescaling the angle, $$e^{i\\theta} = \\cos\\theta + i\\sin\\theta.$$ The algebraic sine and cosine, manufactured by nothing but repeated squaring, turn out to be the geometric sine and cosine: **this is our jewel.**',
        detail: 'The logarithm of $i$ to base $e$ comes out $1.570$ — the algebraic $\\pi/2$, differing from the geometric one only by the accumulated errors of the arithmetic. We wake at the end to discover the very functions that are natural to geometry: there is, ultimately, a connection between algebra and geometry.',
      },
      {
        term: 'The complex plane',
        kind: 'notation',
        statement: 'A complex number $x + iy$ is the point $(x, y)$ in a plane whose horizontal axis is real and vertical axis imaginary; in polar form $$x + iy = re^{i\\theta}$$ with $r$ the magnitude and $\\theta$ the phase — the unification of algebra and geometry.',
        detail: 'The magnitude comes from the conjugate: $r^2 = (x + iy)(x - iy) = x^2 + y^2$. Multiplying complex numbers multiplies magnitudes and adds phases — precisely what chained rotations do, which is why multiplying by $e^{i\\theta}$ turns a number through the angle $\\theta$ without stretching it.',
      },
      {
        term: 'Complex exponentials solve the oscillator',
        kind: 'method',
        statement: 'Writing the drive as the real part of $\\hat{F}e^{i\\omega t}$ and trying $x$ as the real part of $\\hat{x}e^{i\\omega t}$, every time derivative merely multiplies by $i\\omega$; the differential equation collapses to algebra, $$\\hat{x} = \\frac{\\hat{F}}{m(\\omega_0^2 - \\omega^2)},$$ with amplitude and phase both read off the complex ratio.',
        detail: 'Differentiation becomes multiplication — an idea, Feynman says, almost as great as logarithms replacing multiplication by addition. The real-part trick is legitimate only because the equation is linear: a term like $\\lambda x^2$ would mix the real and imaginary parts (the real part would pick up $-\\lambda x_i^2$) and spoil the identification. This limitation is exactly the linearity explored in Section 6.1.',
      },
    ],
    examples: [
      {
        title: 'log₁₀ 2 from the square-root table',
        problem: 'Using Table 22-1 of successive square roots of ten, compute $\\log_{10} 2$ exactly as Feynman does.',
        steps: [
          { label: 'Step 1: Bracket the answer', text: '$10^{1/4} = 1.77828 < 2 < 3.16228 = 10^{1/2}$, so the logarithm lies between $0.25$ and $0.5$.' },
          { label: 'Step 2: Factor out the large roots', text: 'Divide: $2 \\div 1.77828 = 1.124682$ (the 0.250000 of logarithm banked). Next $1.124682 \\div 1.074607 = 1.046598$, then divide successively by $1.036633$ and $1.0090350$.' },
          { label: 'Step 3: Assemble the product', text: '$2 = (1.77828)(1.074607)(1.036633)(1.0090350)(1.000573)$, where the final factor $1.000573$ lies just beyond the table.' },
          { label: 'Step 4: Convert to exponents', text: 'The factors are $10^{1/4}$, $10^{1/32}$, $10^{1/64}$, $10^{1/256}$ and $10^{0.254/1024}$, so $$2 = 10^{(256 + 32 + 16 + 4 + 0.254)/1024} = 10^{308.254/1024} = 10^{0.30103}.$$' },
          { label: 'Step 5: Read off the logarithm', text: '$\\log_{10} 2 = 0.30103$ — right to five figures, from nothing but square roots and divisions, just as Briggs built his tables of 1620.' },
        ],
        result: '$\\log_{10} 2 = 0.30103$.',
      },
      {
        title: 'log₁₀ i: the logarithm of an imaginary number',
        problem: 'From Table 22-3 — the successive squares of $10^{i/1024} = 1 + 0.0022486i$ — find the power to which ten must be raised to obtain exactly $i$.',
        steps: [
          { label: 'Step 1: Target a pure imaginary', text: 'We need a product of table entries whose real part vanishes. The imaginary part will then automatically be $1$, because $x^2 + y^2 = 1$ holds for every entry on the circle.' },
          { label: 'Step 2: Multiply down the real part', text: 'The half power $(0.40679 + 0.91365i)$ times the one-eighth power $(0.95885 + 0.28402i)$ gives $0.13056 + 0.99159i$; multiplying by the one-sixteenth power $(0.98967 + 0.14349i)$ overshoots slightly to $-0.01308 + 1.00008i$.' },
          { label: 'Step 3: Back off with a division', text: 'Divide by $0.99996 + 0.00900i$ — done by multiplying by its conjugate, legitimate since $x^2 + y^2 = 1$ — to trim the real part back toward zero.' },
          { label: 'Step 4: Total the exponents', text: 'The recipe used the 512th, 128th and 64th rows, divided out the 4th and 2nd, and added $0.20$: $$i\\,(512 + 128 + 64 - 4 - 2 + 0.20)/1024 = 698.20i/1024.$$' },
          { label: 'Step 5: Conclude', text: '$10^{0.68184 i} = i$, so $\\log_{10} i = 0.68184 i$. Because the fourth power of $i$ is $+1$, the imaginary powers repeat: $10^{2.72i} = 1$ — the birth of periodicity.' },
        ],
        result: '$\\log_{10} i = 0.68184i$; the imaginary powers of ten march around the unit circle with period $2.72i$.',
      },
      {
        title: 'The driven oscillator solved at once',
        problem: 'A 1.0-kg mass on a spring of stiffness $25$ N/m is driven by $F = 3\\cos\\omega t$ newtons. Use the complex-exponential method to find the response at $\\omega = 3$, $4$, $4.9$ and $6$ rad/s. (Lecture 21’s forced oscillation, done the Chapter 22 way.)',
        steps: [
          { label: 'Step 1: Promote to complex notation', text: 'Take $F$ as the real part of $3e^{i\\omega t}$ and seek $x$ as the real part of $\\hat{x}e^{i\\omega t}$. Here $\\omega_0^2 = k/m = 25$ s⁻².' },
          { label: 'Step 2: Differentiate by multiplying', text: 'Each derivative brings down a factor $i\\omega$: $m(i\\omega)^2\\hat{x} + k\\hat{x} = 3$ reduces to $\\hat{x} = 3/(25 - \\omega^2)$ — real, so the response is in step with the force.' },
          { label: 'Step 3: Below resonance', text: 'At $\\omega = 3$: $x = 3/16 = 0.19$ m. At $\\omega = 4$: $x = 3/9 = 0.33$ m — growing steeply as resonance approaches.' },
          { label: 'Step 4: Very near resonance', text: 'At $\\omega = 4.9$: $x = 3/(25 - 24.01) = 3.0$ m — the amplitude has grown tenfold within two percent of $\\omega_0 = 5$, foreshadowing the resonance catastrophe that friction will tame in Section 6.3.' },
          { label: 'Step 5: Above resonance', text: 'At $\\omega = 6$: $x = 3/(25 - 36) = -0.27$ m. The negative sign means $180°$ out of phase — the mass moves against the force, and the amplitude shrinks again at still higher frequencies.' },
        ],
        result: '$x = 3/(25 - \\omega^2)$ metres: $0.19$, $0.33$, $3.0$ and $-0.27$ m at $\\omega = 3$, $4$, $4.9$, $6$ rad/s.',
      },
    ],
    keyTakeaways: [
      'Every extension of the number system — negatives, fractions, irrationals, complex — was forced by an equation the old numbers could not solve, with the rules preserved throughout.',
      'Logarithms are computable from ten successive square roots of ten; the column $(10^s - 1)/s$ converges to 2.3025, the bridge to base $e \\approx 2.7183$.',
      'Complex numbers are the last invention: with $i^2 = -1$ in hand, every algebraic equation becomes solvable.',
      'Imaginary powers lie on the unit circle and repeat periodically: $10^{0.68184 i} = i$ and $10^{2.72 i} = +1$.',
      'Euler’s formula $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$ is, in Feynman’s words, the most remarkable formula in mathematics — algebra reconstructing geometry.',
      'With $x$ and $F$ as real parts of $\\hat{x}e^{i\\omega t}$ and $\\hat{F}e^{i\\omega t}$, differentiation becomes multiplication by $i\\omega$ and the oscillator equation turns into algebra.',
    ],
    quiz: [
      {
        q: 'According to Feynman, the invention of $i$ is:',
        options: ['The first of a long series of further inventions', 'The last invention — with complex numbers every algebraic equation is solvable', 'Convenient but never strictly necessary', 'Valid only for quadratic equations'],
        answer: 1,
        explanation: 'The greatest miracle, he says, is that we do not have to invent again: square roots, logarithms, and even $i^i$ all land inside the complex numbers. No new kind of number is ever forced on us afterward.',
      },
      {
        q: 'From the lectures’ table, $10^{i/2}$ equals:',
        options: [`$0.40679 + 0.91365i$`, `$-0.66928 + 0.74332i$`, `$0.95885 + 0.28402i$`, `$1.00000 + 0.00450i$`],
        answer: 0,
        explanation: 'Squaring $1 + 0.0022486i$ ten times walks halfway around the unit circle, landing at $0.40679 + 0.91365i$; the last entry is one further step to $-0.66928 + 0.74332i$.',
      },
      {
        q: 'The logarithm of $i$ to base $e$ comes out of the table as approximately:',
        options: [`$2.3025$`, `$1.570$`, `$0.68184$`, `$0.30103$`],
        answer: 1,
        explanation: 'Base-10 logs are $2.3025$ times natural logs: $0.68184 \\times 2.3025 = 1.570$ — the algebraic $\\pi/2$, matching the geometric value to within the arithmetic errors of the tables.',
      },
      {
        q: 'Why is it legitimate to solve the oscillator equation by taking real parts of a complex solution?',
        options: ['Because the real part of any function always satisfies the same equation as the function', 'Because the equation is linear: real and imaginary parts separate, so the real part alone satisfies the equation with the real force', 'Because imaginary parts of forces are physically negligible', 'Because cosine and sine are themselves complex'],
        answer: 1,
        explanation: 'In a linear equation every term carries $x$ to the first or zeroth power, so the substitution $x = x_r + ix_i$ splits cleanly. A term like $\\lambda x^2$ would produce $-\\lambda x_i^2$ in the real part and wreck the separation — linearity is the license.',
      },
      {
        q: 'Multiplying a complex number by $e^{i\\theta}$:',
        options: ['Multiplies its magnitude by $\\theta$', 'Rotates it by $\\theta$ in the complex plane, leaving the magnitude unchanged', 'Adds $\\theta$ to its magnitude', 'Replaces it by its complex conjugate'],
        answer: 1,
        explanation: '$e^{i\\theta}$ has magnitude $1$ and phase $\\theta$; multiplication adds phases and multiplies magnitudes, so the product is the original number turned through $\\theta$ — the rotation property that makes complex exponentials the natural language of oscillation.',
      },
    ],
  },

  // ------------------------------------------------------------------ 6.3
  {
    sectionId: 'hall-ch15-s18',
    readingTime: 10,
    intro: 'Push a child on a swing at just the right moments and the arc grows alarmingly; push at random and nothing accumulates. That is resonance — the driven oscillator’s answer peaking when the drive matches the natural frequency — and once friction proportional to speed is included, the whole story is told by one complex fraction. Feynman ends the lecture walking through physics with the resonance curve folded under his arm: atmospheres, crystals, spinning atoms, nuclei and brand-new particles all wear the same shape.',
    objectives: [
      'Solve the driven, damped oscillator with the complex method and interpret the magnitude ρ and phase θ of the response',
      'Derive the amplitude-squared and phase-lag formulas and describe their behaviour across the frequency range',
      'Define Q and the half-power width and compute both for given systems',
      'Translate the mechanical oscillator into the series RLC circuit and use the complex impedance',
      'Identify the resonance curve in physical systems from atmospheric tides to nuclear energy levels',
    ],
    concepts: [
      {
        term: 'The driven oscillator with damping',
        kind: 'definition',
        statement: 'Friction proportional to speed — the drag of motion through oil — adds a term $-m\\gamma\\,dx/dt$, and with the drive $F_0\\cos\\omega t$ the master equation of resonance is $$\\frac{d^2x}{dt^2} + \\gamma\\frac{dx}{dt} + \\omega_0^2 x = \\frac{F}{m},$$ where writing $c = m\\gamma$ and $k = m\\omega_0^2$ keeps the algebra clean.',
        detail: 'Without the damping term the response at $\\omega = \\omega_0$ would be infinite. Friction is not a nuisance here — it is the very thing that makes the resonance finite, and its size fixes both the height and the width of the peak.',
      },
      {
        term: 'The complex response',
        kind: 'method',
        statement: 'With $F$ and $x$ as real parts of exponentials, the equation reduces by inspection to $$\\hat{x} = \\frac{\\hat{F}}{m(\\omega_0^2 - \\omega^2 + i\\gamma\\omega)},$$ one complex fraction carrying the entire amplitude and phase story.',
        detail: 'Writing the response factor as $R = \\rho e^{i\\theta}$, the physical displacement is $x = \\rho F_0\\cos(\\omega t + \\Delta + \\theta)$: the amplitude is the force magnified by $\\rho$, and delayed by the extra phase $\\theta$. What took a page of trigonometry in Section 6.1 now takes one line — the payoff of the algebra lecture.',
      },
      {
        term: 'The amplitude curve',
        kind: 'law',
        statement: 'The magnification squared is $$\\rho^2 = \\frac{1}{m^2\\left[(\\omega_0^2 - \\omega^2)^2 + \\gamma^2\\omega^2\\right]},$$ which peaks near $\\omega = \\omega_0$, where it takes the finite value $1/m^2\\gamma^2\\omega_0^2$: the smaller the damping, the taller and narrower the peak.',
        detail: '$\\rho^2$ is plotted rather than $\\rho$ because it is proportional to the energy developed in the oscillator by the force. At resonance the spring and inertia terms cancel exactly — the mass moves as if only friction resisted — and the force spends all its effort against drag alone.',
      },
      {
        term: 'The phase lag',
        kind: 'insight',
        statement: 'The response lags the force by $$\\tan\\theta = -\\frac{\\gamma\\omega}{\\omega_0^2 - \\omega^2},$$ which runs from nearly $0°$ far below resonance, through exactly $-90°$ at $\\omega = \\omega_0$, to nearly $-180°$ far above.',
        detail: 'Well below $\\omega_0$ the mass follows the force in step; well above, it moves against the force (the negative amplitudes of Section 6.1); the switch happens through quadrature at resonance. The phase is the fingerprint by which a resonance can be recognized even when only one driving frequency is available.',
      },
      {
        term: 'Width and quality factor',
        kind: 'definition',
        statement: 'Near resonance the exact response simplifies to $\\hat{x} \\approx \\hat{F}/2m\\omega_0(\\omega_0 - \\omega + i\\gamma/2)$, from which the full width of the $\\rho^2$ curve at half its maximum height is $$\\Delta\\omega = \\gamma, \\qquad Q = \\frac{\\omega_0}{\\gamma}.$$',
        detail: '$Q = 1000$ means a resonance only a thousandth of the frequency scale wide. The curve drawn in the lectures has $Q = 5$. Two numbers — position $\\omega_0$ and width $\\gamma$ — summarize the oscillator for every drive it will ever feel.',
      },
      {
        term: 'Electrical resonance',
        kind: 'method',
        statement: 'A series circuit of inductance $L$, resistance $R$ and capacitance $C$ obeys $$L\\frac{d^2q}{dt^2} + R\\frac{dq}{dt} + \\frac{q}{C} = V(t),$$ identical to the damped oscillator with $\\omega_0^2 = 1/LC$ and $\\gamma = R/L$; in complex form $\\hat{V} = \\hat{Z}\\hat{I}$ with the **impedance** $\\hat{Z} = R + i\\omega L + 1/i\\omega C$.',
        detail: 'The three elements map one-to-one onto the mechanical parts: the capacitor’s $V = q/C$ is the spring, the resistor’s Ohm-law $V = R\\,dq/dt$ the friction, the inductor’s $V = L\\,d^2q/dt^2$ the mass. Engineers write $j$ for $i$ — after all, $i$ must be the current! — and prefer voltage-current to voltage-charge relations, but the physics is untouched.',
      },
      {
        term: 'The mechanical-electrical dictionary',
        kind: 'insight',
        statement: 'The correspondence is exact: $x \\leftrightarrow q$, $m \\leftrightarrow L$, $c = \\gamma m \\leftrightarrow R$, $k \\leftrightarrow 1/C$, with period $t_0 = 2\\pi\\sqrt{LC}$ and quality factor $Q = \\omega_0 L/R$.',
        detail: 'Feynman’s Table 23-1 is the master key of analog thinking: solve the oscillator once and you have simultaneously solved the tuned circuit, the microwave cavity and the vibrating structure. We will exploit the dictionary again when alternating-current circuits return as physics in Chapter 13.',
      },
      {
        term: 'Resonance across nature',
        kind: 'insight',
        statement: 'The whole earth’s atmosphere is an oscillator driven by the moon: the semidiurnal tide at 12.42 hours rides the flank of the atmospheric resonance, and the Krakatoa explosion of 1883 rang out the natural period — about 10 hours 20 minutes — matching the resonance curve drawn from the tidal data.',
        detail: 'Next down in size: the sodium and chlorine ions of a rock-salt crystal oscillate against each other, driven by infrared light; the lectures show the transmission dipping through a thin 0.17-micron film of NaCl. Atomic magnets precessing in a field resonate in the oersted range. Caution: measured widths can come from strained samples or wide spectrometer slits rather than the natural $\\gamma$.',
      },
      {
        term: 'Quantum resonances',
        kind: 'insight',
        statement: 'Bombarding lithium with protons shows a sharp maximum of gamma-ray yield versus proton energy; a nuclear level at $10^{5}$ eV with width $10^{-5}$ eV gives $Q = 10^{10}$ — the Mössbauer resonance, scanned by Doppler shifts of centimetres per second.',
        detail: 'In quantum mechanics what we think of classically as frequency appears as energy ($E = h\\nu$), so the resonance curve is plotted against an energy axis — itself a demonstration of the deep relation between the two. The strange-particle bump of Fig. 23-11 (a $K^-$ with a proton) wears the same shape: when a resonance is very sharp, it corresponds to a very definite energy, and we cannot say whether to call it a new particle or a resonance. Chapter 15’s particle tables grow by exactly such curves.',
      },
    ],
    examples: [
      {
        title: 'Anatomy of a resonance curve',
        problem: 'An oscillator has $m = 0.25$ kg, $\\omega_0 = 20$ rad/s and damping $\\gamma = 0.80$ s⁻¹, driven by $F_0 = 0.40$ N. Find $Q$, the peak amplitude, the half-power points and the phase lag at three frequencies. (Numbers illustrative of the lecture’s formulas.)',
        steps: [
          { label: 'Step 1: Quality factor', text: '$Q = \\omega_0/\\gamma = 20/0.80 = 25$: the resonance is twenty-five times narrower than its centre frequency.' },
          { label: 'Step 2: Peak amplitude', text: 'At $\\omega = \\omega_0$ the spring and inertia cancel and only friction resists: $x = F_0/m\\gamma\\omega_0 = 0.40/(0.25 \\times 0.80 \\times 20) = 0.10$ m.' },
          { label: 'Step 3: Half-power width', text: 'The width of $\\rho^2$ at half maximum is $\\Delta\\omega = \\gamma = 0.80$ rad/s: the amplitude falls to $1/\\sqrt{2} = 70.7$ percent of its peak at $\\omega = 20 \\pm 0.40$ rad/s.' },
          { label: 'Step 4: Phase lag below, at and above resonance', text: 'From $\\tan\\theta = -\\gamma\\omega/(\\omega_0^2 - \\omega^2)$: at $\\omega = 16$, $\\theta = -5°$; at $\\omega = 20$, $\\theta = -90°$; at $\\omega = 24$, $\\theta = -174°$.' },
          { label: 'Step 5: Interpretation', text: 'Across the peak the displacement slips progressively from in step to opposed, passing exact quadrature at resonance — where the force always pushes on a mass that is a quarter-cycle behind it, the condition for maximum power transfer.' },
        ],
        result: '$Q = 25$; peak amplitude $0.10$ m; half-power at $20 \\pm 0.40$ rad/s; phase $-5° \\to -90° \\to -174°$.',
      },
      {
        title: 'A series RLC circuit at resonance',
        problem: 'A series circuit has $L = 0.10$ H, $C = 10\\ \\mu$F and $R = 10\\ \\Omega$. Find the resonant frequency, the damping rate, the quality factor and the impedance seen by the generator at resonance. (The electrical twin of the lecture’s Table 23-1.)',
        steps: [
          { label: 'Step 1: Resonant frequency', text: '$\\omega_0 = 1/\\sqrt{LC} = 1/\\sqrt{(0.10)(10 \\times 10^{-6})} = 1/\\sqrt{10^{-6}} = 1000$ rad/s, i.e. $f_0 = \\omega_0/2\\pi = 159$ Hz.' },
          { label: 'Step 2: Damping', text: '$\\gamma = R/L = 10/0.10 = 100$ s⁻¹, so the resonance width is $\\Delta\\omega = 100$ rad/s.' },
          { label: 'Step 3: Quality factor', text: '$Q = \\omega_0 L/R = 1000 \\times 0.10/10 = 10$ — the same number as $\\omega_0/\\gamma$, exactly as the mechanical-electrical dictionary demands.' },
          { label: 'Step 4: Impedance at resonance', text: 'At $\\omega = \\omega_0$ the reactances cancel: $i\\omega_0 L = +100i$ Ω and $1/i\\omega_0 C = -100i$ Ω, leaving $\\hat{Z} = R = 10$ Ω purely resistive — the circuit looks like its resistor alone.' },
          { label: 'Step 5: Off resonance', text: 'At $\\omega = 1100$ rad/s, $\\omega L = 110$ Ω while $1/\\omega C = 91$ Ω, so $\\hat{Z} = 10 + 19i$ Ω: inductive, with the current lagging the voltage.' },
        ],
        result: '$\\omega_0 = 1000$ rad/s (159 Hz), $\\gamma = 100$ s⁻¹, $Q = 10$; at resonance $\\hat{Z} = 10$ Ω real.',
      },
      {
        title: 'The sharpest resonance ever measured',
        problem: 'A nuclear gamma-ray transition has $E_0 = 100{,}000$ eV with natural width $\\gamma \\approx 10^{-5}$ eV. Find the quality factor and the source speed needed to scan the line by the Doppler effect — Mössbauer’s Nobel-prize experiment, quoted by Feynman.',
        steps: [
          { label: 'Step 1: Quality factor', text: '$Q = E_0/\\gamma = 10^{5}/10^{-5} = 10^{10}$ — when measured, the largest $Q$ of any oscillator that had ever been measured.' },
          { label: 'Step 2: Why speed is the knob', text: 'The line is so narrow that retuning the source directly is hopeless; moving it relative to the absorber adds a Doppler shift $\\Delta E/E_0 = v/c$, turning a velocity into a frequency scan.' },
          { label: 'Step 3: The numbers', text: 'One full linewidth requires $$v = c\\,\\frac{\\gamma}{E_0} = 3 \\times 10^{10}\\ \\text{cm/s} \\times 10^{-10} = 3\\ \\text{cm/s}$$ — a few centimetres per second, the delicate velocity axis of the published curve.' },
          { label: 'Step 4: Perspective', text: 'On the scale of that figure, zero frequency would lie about $10^{10}$ cm to the left — clean off the page. The resonance is a needle in the electromagnetic spectrum, and its sharpness is why the effect became a precision tool.' },
        ],
        result: '$Q = 10^{10}$; the entire line is scanned with source speeds of a few cm/s.',
      },
    ],
    keyTakeaways: [
      'The driven damped oscillator is solved in one line by complex algebra: $\\hat{x} = \\hat{F}/m(\\omega_0^2 - \\omega^2 + i\\gamma\\omega)$.',
      'The amplitude peaks at $\\omega_0$ with a finite height set by friction; the phase lag runs from $0$ through $-90°$ to $-180°$.',
      'The half-power width is $\\Delta\\omega = \\gamma$ and $Q = \\omega_0/\\gamma$ — two numbers that summarize the resonator.',
      'The series RLC circuit is the same equation with $\\omega_0^2 = 1/LC$, $\\gamma = R/L$ and impedance $\\hat{Z} = R + i\\omega L + 1/i\\omega C$.',
      'The dictionary $x \\leftrightarrow q$, $m \\leftrightarrow L$, $c \\leftrightarrow R$, $k \\leftrightarrow 1/C$ solves mechanical and electrical problems together.',
      'Nature wears the resonance curve everywhere: atmospheric tides (12.42 h drive, 10 h 20 min natural period from Krakatoa), rock-salt lattices in the infrared, precessing atomic magnets, nuclear levels with $Q$ up to $10^{10}$.',
      'In quantum systems the resonance axis is energy, $E = h\\nu$ — and a very sharp resonance is indistinguishable from a particle.',
    ],
    quiz: [
      {
        q: 'Exactly at resonance ($\\omega = \\omega_0$), the phase lag of the displacement behind the driving force is:',
        options: ['$0°$ — in step with the force', `$45°$`, '$-90°$ — a quarter cycle behind', '$-180°$ — fully opposed'],
        answer: 2,
        explanation: 'From $\\tan\\theta = -\\gamma\\omega/(\\omega_0^2 - \\omega^2)$ the denominator vanishes at $\\omega = \\omega_0$, so $\\theta = -90°$ exactly. The force then always acts on a mass moving a quarter-cycle behind it — maximum power transfer.',
      },
      {
        q: 'A resonance with $Q = 1000$ has a width, as a fraction of its resonant frequency, of about:',
        options: ['One thousandth of the frequency scale', 'One percent', 'One part in a million', 'The full scale — Q measures height, not width'],
        answer: 0,
        explanation: 'The full width at half maximum is $\\Delta\\omega = \\gamma = \\omega_0/Q$: a thousandth of the centre frequency. Higher $Q$ always means a narrower, sharper resonance.',
      },
      {
        q: 'The resonant frequency of a series RLC circuit is:',
        options: [`$\\omega_0 = LC$`, `$\\omega_0 = \\sqrt{LC}$`, `$\\omega_0 = 1/\\sqrt{LC}$`, `$\\omega_0 = R/L$`],
        answer: 2,
        explanation: 'The dictionary gives $\\omega_0^2 = k/m = (1/C)/L = 1/LC$, so $\\omega_0 = 1/\\sqrt{LC}$ and the period is $t_0 = 2\\pi\\sqrt{LC}$ — the electrical twin of $2\\pi\\sqrt{m/k}$.',
      },
      {
        q: 'At resonance, the impedance of a series RLC circuit is:',
        options: ['Purely imaginary and maximum', 'Purely real and equal to $R$', 'Zero — the circuit short-circuits', 'Equal to $R + i\\omega_0 L$'],
        answer: 1,
        explanation: 'At $\\omega = \\omega_0$ the inductive and capacitive reactances cancel exactly, $i\\omega_0 L + 1/i\\omega_0 C = 0$, leaving only the resistance — the circuit behaves as if it were the resistor alone.',
      },
      {
        q: 'How did the 1883 Krakatoa explosion confirm the resonance analysis of the atmospheric tides?',
        options: ['It changed the moon’s orbital period, shifting the tide', 'It set the atmosphere ringing at its natural period — about 10 hours 20 minutes — matching the resonance frequency inferred from the tidal response', 'It silenced the tides for a year', 'It showed that the tides are gravitational, not resonant'],
        answer: 1,
        explanation: 'The tide data at 12.42 hours gave one point (plus phase) on the resonance curve, from which $\\omega_0$ and $\\gamma$ could be inferred; the volcano supplied the independent check by exciting the free oscillation at the same period.',
      },
    ],
  },

  // ------------------------------------------------------------------ 6.4
  {
    sectionId: 'hall-ch15-s19',
    readingTime: 9,
    intro: 'What happens the moment the drive is switched off? The steady state collapses and the oscillator is left to its own devices: it rings down at very nearly its natural frequency, wrapped in a dying exponential envelope. Feynman first guesses the decay from energy bookkeeping so natural it turns out to be essentially exact, then derives it; and the chapter closes with the physicist’s broadest lesson — linear systems answer any force as a superposition of exponentials, and the complete response is always the steady state plus a transient.',
    objectives: [
      'Use the mean-square theorem to compute average power and stored energy from complex amplitudes',
      'Define Q as energy stored versus energy dissipated and reconcile it with Q = ω₀/γ',
      'Derive the damped free oscillation and its frequency ω_γ = √(ω₀² − γ²/4)',
      'Describe the overdamped regime and the transition from ringing to creeping decay',
      'State the superposition principle and assemble the complete response as transient plus steady state',
    ],
    concepts: [
      {
        term: 'Mean squares, not squares of means',
        kind: 'method',
        statement: 'If a physical quantity is the real part of $\\hat{A}e^{i\\omega t}$ with $\\hat{A} = A_0e^{i\\Delta}$, its true square is $A_0^2\\cos^2(\\omega t + \\Delta)$, and the average over many cycles is $$\\langle A^2 \\rangle = \\tfrac{1}{2}A_0^2 = \\tfrac{1}{2}|\\hat{A}|^2.$$',
        detail: 'The trap: one may not square the complex number and take the real part — the real part of the square of a complex number involves the imaginary part as well. Energy questions force a brief exit from complex notation; once out, the average of cosine squared does the work.',
      },
      {
        term: 'Power, storage and loss',
        kind: 'law',
        statement: 'The power delivered by the driving force splits exactly: $P = F\\,dx/dt = \\frac{d}{dt}(\\text{stored energy}) + \\gamma m (dx/dt)^2$, so averaged over cycles $$\\langle P \\rangle = \\gamma m\\left\\langle (dx/dt)^2 \\right\\rangle = \\tfrac{1}{2}\\gamma m\\omega^2 x_0^2,$$ all of it ultimately burned in friction.',
        detail: 'The stored energy — kinetic plus spring potential — averages to $\\langle E \\rangle = \\tfrac{1}{4}m(\\omega^2 + \\omega_0^2)x_0^2$. In the electrical translation the loss is Joule heating, $\\langle P \\rangle = \\langle I^2 \\rangle R = \\tfrac{1}{2}I_0^2 R$ — the formula that returns with the ac power of Chapter 13.',
      },
      {
        term: 'Q as a bookkeeping of energy',
        kind: 'definition',
        statement: 'The quality factor is $2\\pi$ times the mean stored energy divided by the work done per cycle: $$Q = \\frac{\\omega^2 + \\omega_0^2}{2\\gamma\\omega} \\longrightarrow \\frac{\\omega_0}{\\gamma}$$ at resonance; a good oscillator stores a great deal while losing little.',
        detail: 'Definitions of $Q$ differ slightly away from resonance, but when $Q$ is large — the only regime where the number is worth quoting — all definitions agree. Electrically, $Q = \\omega L/R$ at resonance. Feynman’s working example: if $Q/2\\pi = 1000$, each cycle dissipates one part in a thousand of the stored energy.',
      },
      {
        term: 'The transient',
        kind: 'definition',
        statement: 'A **transient** is any solution of the unforced equation — the motion left over when the driving stops and the system is not simply at rest; the complete motion of a driven system is always **steady state plus transient**.',
        detail: 'The forced solution of Section 6.3 is what the oscillator settles into only if started exactly right; any other start adds a transient that dies away, leaving the steady state. In the lecture’s demonstration a switch closes 60 times per second so the oscilloscope paints the same decaying trace over and over.',
      },
      {
        term: 'Energy decay by guesswork',
        kind: 'insight',
        statement: 'A high-Q oscillator loses a fixed fraction of its energy each cycle, so $dE/dt = -\\omega E/Q$, giving $$E = E_0e^{-\\gamma t}, \\qquad \\gamma = \\omega_0/Q;$$ since energy goes as amplitude squared, the amplitude envelope decays at half the energy rate, $e^{-\\gamma t/2}$.',
        detail: 'Feynman’s guess is the definition of exponential decay: in each radian the system loses a fraction $1/Q$ of its stored energy, so in time $dt$ it loses the fraction $\\omega\\,dt/Q$. The exact solution confirms the guess — with one small correction, the frequency.',
      },
      {
        term: 'The damped oscillation, exactly',
        kind: 'theorem',
        statement: 'Trying $x = Ae^{i\\alpha t}$ in the unforced equation gives $\\alpha = i\\gamma/2 \\pm \\sqrt{\\omega_0^2 - \\gamma^2/4}$, and the real solution is $$x = e^{-\\gamma t/2}\\left(Ae^{i\\omega_\\gamma t} + A^{*}e^{-i\\omega_\\gamma t}\\right), \\qquad \\omega_\\gamma = \\sqrt{\\omega_0^2 - \\gamma^2/4}.$$',
        detail: 'The guessed envelope was right; the only correction is that the free frequency is $\\omega_\\gamma$, slightly below $\\omega_0$. With no driving force the mathematics no longer knows we intend to take real parts, so it offers the conjugate solution too — only their combination, with $B = A^{*}$, is real. Given initial data, $$x = e^{-\\gamma t/2}\\left[x_0\\cos\\omega_\\gamma t + \\frac{v_0 + \\gamma x_0/2}{\\omega_\\gamma}\\sin\\omega_\\gamma t\\right].$$',
      },
      {
        term: 'Overdamping',
        kind: 'insight',
        statement: 'When $\\gamma/2$ exceeds $\\omega_0$ the square root turns imaginary and the two solutions become pure decaying exponentials, with rates $\\gamma/2 \\pm \\sqrt{\\gamma^2/4 - \\omega_0^2}$: the ringing dies and only creeping decay remains.',
        detail: 'The square root can never exceed $\\gamma/2$ — even with $\\omega_0 = 0$ it just equals it — so both exponents are negative: adding resistance can never make the circuit explode, thank goodness. The oscilloscope sequence of Figs. 24-3 through 24-6 shows it: each increase of $R$ kills the oscillation faster, until at most a single overswing, then none, survives.',
      },
      {
        term: 'Superposition and linear systems',
        kind: 'law',
        statement: 'If $x_1$ and $x_2$ solve the unforced equation, so does $x_1 + x_2$; the free motion of any linear system is a **superposition of pure exponentials** $e^{i\\alpha t}$, and the complete driven response is **steady state plus transient**.',
        detail: 'This is the linearity met in Section 6.1, now doing real work. The intimate relation between sinusoids and exponentials — Euler’s jewel of Section 6.2 — appears physically as the smooth change from oscillatory to exponential behaviour when a parameter crosses its critical value. Linear systems throughout physics and engineering — circuits, servomechanisms, vibrating structures, quantum amplitudes — are all solved by this one program.',
      },
    ],
    examples: [
      {
        title: 'Decay bookkeeping by Q',
        problem: 'Feynman supposes an oscillator with $Q/2\\pi = 1000$. Trace the energy and amplitude decay by his guess-and-check method.',
        steps: [
          { label: 'Step 1: Loss per cycle', text: '$Q = 2\\pi \\times$ (stored energy)/(work per cycle), so $Q/2\\pi = 1000$ means each cycle dissipates one part in a thousand of the stored energy.' },
          { label: 'Step 2: Convert to a rate', text: 'In time $dt$ the phase advances $\\omega\\,dt$ radians and the system loses the fraction $\\omega\\,dt/Q$ of $E$: $$\\frac{dE}{dt} = -\\frac{\\omega E}{Q}$$ — reasonable for large $Q$, and exact in the limit.' },
          { label: 'Step 3: Integrate', text: '$E = E_0e^{-\\omega_0 t/Q} = E_0e^{-\\gamma t}$ with $\\gamma = \\omega_0/Q$. The energy decays exponentially at rate $\\gamma$.' },
          { label: 'Step 4: Halve the rate for the amplitude', text: 'Energy is proportional to amplitude squared, so the envelope falls half as fast: $$x = A_0e^{-\\gamma t/2}\\cos\\omega_0 t$$ — the guess that the exact solution then confirms, with $\\omega_0$ corrected to $\\omega_\\gamma$.' },
        ],
        result: '$E = E_0e^{-\\gamma t}$; amplitude envelope $e^{-\\gamma t/2}$; one part in a thousand of the energy lost per cycle.',
      },
      {
        title: 'A released oscillator',
        problem: 'An oscillator with $\\omega_0 = 10$ rad/s and $\\gamma = 2.0$ s⁻¹ is released from $x_0 = 0.050$ m with zero velocity. Find its subsequent motion and its per-cycle loss. (Numbers illustrative of the lecture’s exact solution.)',
        steps: [
          { label: 'Step 1: Check the regime', text: '$\\gamma/2 = 1.0 < \\omega_0 = 10$, so the motion is underdamped — a ringing decay with $Q = \\omega_0/\\gamma = 5$.' },
          { label: 'Step 2: Free frequency', text: '$\\omega_\\gamma = \\sqrt{\\omega_0^2 - \\gamma^2/4} = \\sqrt{100 - 1} = 9.95$ rad/s, barely below $\\omega_0$ — as expected for a modest $Q$.' },
          { label: 'Step 3: Insert the initial conditions', text: 'With $v_0 = 0$, $$x = e^{-t}\\left[0.050\\cos 9.95t + \\frac{0.050}{9.95}\\sin 9.95t\\right] = e^{-t}\\left[0.050\\cos 9.95t + 0.0050\\sin 9.95t\\right]$$ in metres.' },
          { label: 'Step 4: Envelope and loss per cycle', text: 'The amplitude is pinched by $e^{-t}$. One period is $2\\pi/9.95 = 0.63$ s, over which the envelope falls to $e^{-0.315} = 0.73$ — about 27 percent of the amplitude (half of that in energy) gone per cycle.' },
          { label: 'Step 5: Watch the small term', text: 'The $0.0050$-m sine term is the vestige of the starting condition; it decays with everything else and never grows — guaranteed by the negative real parts of the exact roots.' },
        ],
        result: '$x = e^{-t}[0.050\\cos 9.95t + 0.0050\\sin 9.95t]$ m; the envelope decays 27 percent per cycle.',
      },
      {
        title: 'From ringing to creeping: the oscilloscope circuit',
        problem: 'An LCR circuit has $L = 1.0$ H and $C = 100\\ \\mu$F, with $R$ adjustable. Describe the transient as $R$ is raised through the critical value — the situation photographed in Figs. 24-3 to 24-6.',
        steps: [
          { label: 'Step 1: Natural frequency and damping', text: '$\\omega_0 = 1/\\sqrt{LC} = 1/\\sqrt{10^{-4}} = 100$ rad/s, and $\\gamma = R/L$ grows with the resistance.' },
          { label: 'Step 2: Critical resistance', text: 'Oscillation dies when $\\gamma/2 = \\omega_0$, that is $R = 2L\\omega_0 = 2(1.0)(100) = 200\\ \\Omega$.' },
          { label: 'Step 3: Well below critical (R = 20 Ω)', text: '$\\gamma = 20$ s⁻¹ and $\\omega_\\gamma = \\sqrt{10000 - 100} = 99.5$ rad/s: a high-Q ring with envelope $e^{-10t}$ — many oscillations visible on the screen (Figs. 24-3 and 24-4).' },
          { label: 'Step 4: Above critical (R = 400 Ω)', text: '$\\gamma = 400$ s⁻¹ and the roots are real: rates $200 \\pm \\sqrt{40000 - 10000} = 200 \\pm 173$, i.e. $373$ and $26.8$ s⁻¹. The response is a difference of two dying exponentials — at most a single overswing (Figs. 24-5 and 24-6).' },
          { label: 'Step 5: Why no explosion', text: 'The square root $\\sqrt{\\gamma^2/4 - \\omega_0^2}$ is always less than $\\gamma/2$, so both exponents stay negative: more resistance can only slow the decay, never reverse it — exactly as the oscilloscope confirms.' },
        ],
        result: '$R < 200\\ \\Omega$ rings at about $100$ rad/s under an $e^{-\\gamma t/2}$ envelope; at $R = 400\\ \\Omega$ the motion creeps as two exponentials of rates $26.8$ and $373$ s⁻¹.',
      },
    ],
    keyTakeaways: [
      '$\\langle A^2 \\rangle = \\tfrac{1}{2}A_0^2$ converts complex amplitudes into average energies — never square a complex number and take its real part.',
      'Average power goes entirely into friction: $\\langle P \\rangle = \\tfrac{1}{2}\\gamma m\\omega^2 x_0^2$, electrically $\\langle P \\rangle = \\tfrac{1}{2}I_0^2 R$ (Joule heating).',
      '$Q = 2\\pi \\times$ (stored energy)/(work per cycle) reduces to $\\omega_0/\\gamma$ at resonance.',
      'The unforced oscillator rings at $\\omega_\\gamma = \\sqrt{\\omega_0^2 - \\gamma^2/4}$ inside an envelope $e^{-\\gamma t/2}$; the energy decays as $e^{-\\gamma t}$.',
      'Beyond $\\gamma = 2\\omega_0$ the oscillation disappears into two pure exponentials — resistance can never make the response grow.',
      'Linear systems superpose: complete response = steady state + transient, both built from exponentials $e^{i\\alpha t}$ — the program that solves oscillators, circuits and servosystems alike.',
    ],
    quiz: [
      {
        q: 'The energy of a freely decaying oscillator goes as $e^{-\\gamma t}$. The amplitude envelope therefore goes as:',
        options: [`$e^{-\\gamma t}$`, `$e^{-\\gamma t/2}$`, `$e^{-2\\gamma t}$`, `$e^{-\\gamma^2 t}$`],
        answer: 1,
        explanation: 'Energy is proportional to amplitude squared, so the amplitude needs only half the exponential rate to produce the energy decay: the envelope is $e^{-\\gamma t/2}$ — the factor in the exact solution.',
      },
      {
        q: 'An oscillator with $Q/2\\pi = 1000$ loses what fraction of its stored energy per cycle?',
        options: ['One part in $2\\pi$', 'One part in 1000', 'One part in $\\pi$', 'The whole stored energy — Q counts cycles to extinction'],
        answer: 1,
        explanation: 'Work per cycle equals stored energy times $2\\pi/Q$; with $Q/2\\pi = 1000$ that is one part in a thousand per cycle — Feynman’s starting point for the decay guess $dE/dt = -\\omega E/Q$.',
      },
      {
        q: 'The free oscillation frequency of a damped oscillator is:',
        options: ['Exactly $\\omega_0$', `$\\sqrt{\\omega_0^2 - \\gamma^2/4}$`, `$\\sqrt{\\omega_0^2 + \\gamma^2/4}$`, `$\\gamma/2$`],
        answer: 1,
        explanation: 'Substituting $x = Ae^{i\\alpha t}$ gives $\\alpha = i\\gamma/2 \\pm \\sqrt{\\omega_0^2 - \\gamma^2/4}$: the real frequency is $\\omega_\\gamma = \\sqrt{\\omega_0^2 - \\gamma^2/4}$, slightly below the natural frequency — the only correction to the energy-guessed solution.',
      },
      {
        q: 'When the damping exceeds the critical value $\\gamma = 2\\omega_0$, the free solutions become:',
        options: ['Two decaying exponentials with no oscillation', 'A faster oscillation with growing amplitude', 'A single exponential with rate $\\gamma$', 'A linear ramp in time'],
        answer: 0,
        explanation: 'The square root turns imaginary, giving two real negative rates $\\gamma/2 \\pm \\sqrt{\\gamma^2/4 - \\omega_0^2}$. The response is a sum of two dying exponentials — the oscilloscope shows the ringing vanish into a single overswing and then pure creep.',
      },
      {
        q: 'The complete response of a driven linear oscillator is:',
        options: ['The steady state alone once the drive has acted for any time at all', 'The transient alone, since energy decays', 'The steady state plus a transient that depends on how the motion was started', 'A resonance curve'],
        answer: 2,
        explanation: 'Only if the motion is started exactly right does the transient vanish; in general the driven solution settles onto the steady state as the transient dies away exponentially. Superposition of the two pieces — both exponentials at heart — is the general solution method for every linear system.',
      },
    ],
  },
]

export const physCh6Formulas: FormulaEntry[] = [
  {
    chapterId: 'hall-ch15',
    section: '15.16',
    name: 'Harmonic oscillator solution',
    formula: 'x = A cos(ω₀t + φ),  ω₀ = √(k/m)',
    note: 'the equation fixes ω₀; initial conditions fix A and φ',
    latex: 'x = A\\cos(\\omega_0 t + \\varphi), \\quad \\omega_0 = \\sqrt{k/m}',
  },
  {
    chapterId: 'hall-ch15',
    section: '15.16',
    name: 'Period of the oscillator',
    formula: 't₀ = 2π√(m/k)',
    note: 'independent of amplitude — scale invariance of linear equations',
    latex: 't_0 = \\frac{2\\pi}{\\omega_0} = 2\\pi\\sqrt{m/k}',
  },
  {
    chapterId: 'hall-ch15',
    section: '15.16',
    name: 'Oscillator energy',
    formula: 'E = ½mω₀²a² = ½ka²',
    note: 'energy grows as amplitude squared; averages split half kinetic, half potential',
    latex: 'E = \\tfrac{1}{2}m\\omega_0^2 a^2 = \\tfrac{1}{2}ka^2',
  },
  {
    chapterId: 'hall-ch15',
    section: '15.17',
    name: 'Euler formula',
    formula: 'exp(iθ) = cos θ + i sin θ',
    note: 'the most remarkable formula in mathematics — our jewel',
    latex: 'e^{i\\theta} = \\cos\\theta + i\\sin\\theta',
  },
  {
    chapterId: 'hall-ch15',
    section: '15.18',
    name: 'Driven damped response',
    formula: 'x = F / m(ω₀² − ω² + iγω)',
    note: 'complex amplitudes; one fraction carries amplitude and phase',
    latex: '\\hat{x} = \\frac{\\hat{F}}{m(\\omega_0^2 - \\omega^2 + i\\gamma\\omega)}',
  },
  {
    chapterId: 'hall-ch15',
    section: '15.18',
    name: 'Resonance amplitude',
    formula: 'ρ² = 1 / m²[(ω₀² − ω²)² + γ²ω²]',
    note: 'peak at ω₀ of height 1/m²γ²ω₀² — friction sets the ceiling',
    latex: '\\rho^2 = \\frac{1}{m^2\\left[(\\omega_0^2 - \\omega^2)^2 + \\gamma^2\\omega^2\\right]}',
  },
  {
    chapterId: 'hall-ch15',
    section: '15.18',
    name: 'Quality factor',
    formula: 'Q = ω₀/γ = ω₀L/R',
    note: 'resonance width Δω = γ; Q = 1000 means a thousandth of the scale',
    latex: 'Q = \\frac{\\omega_0}{\\gamma} = \\frac{\\omega_0 L}{R}',
  },
  {
    chapterId: 'hall-ch15',
    section: '15.19',
    name: 'Damped free oscillation',
    formula: 'x = A₀·exp(−γt/2)·cos(ωt),  ω = √(ω₀² − γ²/4)',
    note: 'energy decays as exp(−γt); amplitude at half that rate',
    latex: 'x = A_0\\,e^{-\\gamma t/2}\\cos\\omega_\\gamma t, \\quad \\omega_\\gamma = \\sqrt{\\omega_0^2 - \\gamma^2/4}',
  },
]
