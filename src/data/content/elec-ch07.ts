import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// THE ELECTRONICS MASTER LIBRARY — Chapter 7: Second-Order RLC Circuits
// Sources: Nilsson & Riedel, "Electric Circuits" 12e, ch. 8 (pp. 298–343);
// Hughes, "Electrical & Electronic Technology" 12e, ch. 8 (transients, energy).
// All worked-example numbers are the books' own and have been recomputed.
// Math is LaTeX, rendered by KaTeX via the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const elecCh7Content: SectionContent[] = [
  // ------------------------------------------------------------------ 7.1
  {
    sectionId: 'elec-ch7-s1',
    readingTime: 11,
    intro: 'A circuit that stores energy in two places at once — a capacitor’s electric field and an inductor’s magnetic field — answers with a second-order differential equation, and its voltage no longer simply slides down an exponential ramp. This section follows Nilsson’s source-free parallel RLC as the energy initially trapped in $L$ and $C$ is released through $R$, and shows how one dimensionless comparison, $\\alpha^{2}$ versus $\\omega_{0}^{2}$, decides whether the voltage decays sluggishly, rings, or sits exactly on the boundary between the two.',
    objectives: [
      'Derive the second-order differential equation of the source-free parallel RLC circuit from KCL',
      'Compute the neper frequency $\\alpha$, the resonant radian frequency $\\omega_{0}$ and the characteristic roots $s_{1}$ and $s_{2}$',
      'Classify a circuit as overdamped, underdamped or critically damped and write the matching response form',
      'Determine the constants $A_{1}$, $A_{2}$, $B_{1}$, $B_{2}$, $D_{1}$, $D_{2}$ from the initial capacitor voltage and inductor current',
      'Explain the physical origin of ringing as energy trading between the inductor and the capacitor',
    ],
    concepts: [
      {
        term: 'Natural response of the parallel RLC circuit',
        kind: 'law',
        statement: 'The source-free parallel RLC circuit of Fig. 8.1 (Nilsson) obeys a **second-order homogeneous differential equation** in the common node voltage, $$\\frac{d^{2}v}{dt^{2}} + \\frac{1}{RC}\\frac{dv}{dt} + \\frac{v}{LC} = 0,$$ derived by writing KCL at the top node, $i_{R} + i_{L} + i_{C} = 0$, and substituting $v/R$, $\\tfrac{1}{L}\\int v\\,d\\tau + I_{0}$ and $C\\,dv/dt$ for the three branch currents.',
        detail: 'Order counts energy stores: one independent energy-storage element gave the first-order exponentials of Chapter 6, and two give a second-order equation whose solution needs two initial conditions — the capacitor voltage $V_{0}$ and the inductor current $I_{0}$. Differentiating the KCL integral equation once removes the integral and $I_{0}$, leaving the homogeneous equation above.',
      },
      {
        term: 'Characteristic equation',
        kind: 'definition',
        statement: 'Substituting the trial solution $v = Ae^{st}$ into the ODE forces every solution to satisfy the **characteristic equation** $$s^{2} + \\frac{1}{RC}s + \\frac{1}{LC} = 0,$$ whose two roots $s_{1}$ and $s_{2}$ determine the mathematical character of $v(t)$.',
        detail: 'Because $e^{st} \\neq 0$ for finite $st$, the bracketed polynomial in $s$ must vanish; $A = 0$ is rejected because it would imply zero stored energy. Both $v = A_{1}e^{s_{1}t}$ and $v = A_{2}e^{s_{2}t}$ satisfy the ODE, and because the equation is linear and homogeneous their sum $v = A_{1}e^{s_{1}t} + A_{2}e^{s_{2}t}$ is also a solution. Nilsson also writes the characteristic equation compactly as $s^{2} + 2\\alpha s + \\omega_{0}^{2} = 0$.',
      },
      {
        term: 'Neper frequency (parallel RLC)',
        kind: 'definition',
        statement: 'The **neper frequency** of the parallel RLC circuit is $$\\alpha = \\frac{1}{2RC},$$ measured in radians per second. It sets the rate at which the response envelope decays and is also called the damping factor or damping coefficient.',
        detail: 'The name comes from the dimensionless exponent of $e$: since the exponent of $e$ must be dimensionless, $s$, $\\alpha$ and $\\omega_{0}$ all carry the dimension of inverse time. Note the structural difference from the series form: in the parallel circuit it is the resistor that appears in the denominator, so larger $R$ means less damping — as $R \\to \\infty$ the loss $p = v^{2}/R$ vanishes and $\\alpha \\to 0$.',
      },
      {
        term: 'Resonant radian frequency',
        kind: 'definition',
        statement: 'The **resonant radian frequency** $$\\omega_{0} = \\frac{1}{\\sqrt{LC}}$$ is identical for the parallel and the series RLC circuit — only the neper frequency differs between the two topologies.',
        detail: 'This is the frequency at which the circuit would oscillate forever if the resistor were removed entirely. It depends only on the two energy-storage elements, not on how they are connected to the dissipative element.',
      },
      {
        term: 'The three damping regimes',
        kind: 'insight',
        statement: 'Comparing $\\omega_{0}^{2}$ with $\\alpha^{2}$ classifies the natural response: if $\\omega_{0}^{2} < \\alpha^{2}$ both roots are **real and distinct** and the voltage is overdamped; if $\\omega_{0}^{2} > \\alpha^{2}$ the roots are **complex conjugates** and the voltage is underdamped; if $\\omega_{0}^{2} = \\alpha^{2}$ the roots are **real and equal** and the voltage is critically damped.',
        detail: 'Damping describes how the dissipative element $R$ shapes the approach to the final (here zero) value. An overdamped response approaches without ringing but sluggishly; an underdamped response overshoots and rings about the final value with decaying swings; the critically damped response sits on the verge of oscillating. The boundary is razor thin — exact equality of two quantities built from physical component values — which is why practical designs rarely rely on it.',
      },
      {
        term: 'Overdamped natural response',
        kind: 'theorem',
        statement: 'For real, distinct roots the voltage is the sum of two exponentials, $$v(t) = A_{1}e^{s_{1}t} + A_{2}e^{s_{2}t}, \\quad t \\geq 0,$$ with $s_{1} = -\\alpha + \\sqrt{\\alpha^{2} - \\omega_{0}^{2}}$ and $s_{2} = -\\alpha - \\sqrt{\\alpha^{2} - \\omega_{0}^{2}}$.',
        detail: 'The constants follow from two simultaneous equations: the initial value $v(0^{+}) = A_{1} + A_{2} = V_{0}$, and the initial slope obtained from the capacitor relation $i_{C} = C\\,dv/dt$ combined with KCL at $t = 0^{+}$, which gives $i_{C}(0^{+}) = -V_{0}/R - I_{0}$ and hence $A_{1}s_{1} + A_{2}s_{2} = \\tfrac{1}{C}\\left(-\\tfrac{V_{0}}{R} - I_{0}\\right)$.',
      },
      {
        term: 'Underdamped natural response and the damped radian frequency',
        kind: 'theorem',
        statement: 'For complex roots the exponential pair recombines, via Euler’s identity, into a decaying oscillation, $$v(t) = B_{1}e^{-\\alpha t}\\cos\\omega_{d}t + B_{2}e^{-\\alpha t}\\sin\\omega_{d}t, \\quad t \\geq 0,$$ where the **damped radian frequency** is $$\\omega_{d} = \\sqrt{\\omega_{0}^{2} - \\alpha^{2}}.$$ The constants obey $B_{1} = V_{0}$ and $-\\alpha B_{1} + \\omega_{d}B_{2} = \\tfrac{1}{C}\\left(-\\tfrac{V_{0}}{R} - I_{0}\\right)$.',
        detail: 'Writing the roots as $s_{1} = -\\alpha + j\\omega_{d}$ and $s_{2} = -\\alpha - j\\omega_{d}$ and expanding $e^{\\pm j\\omega_{d}t}$ with Euler’s identity shows the sum collapses to real cosine and sine terms; $B_{1} = A_{1} + A_{2}$ and $B_{2} = j(A_{1} - A_{2})$ are real because $A_{1}$ and $A_{2}$ are complex conjugates. The oscillation rate is fixed by $\\omega_{d}$ while the envelope decays at the rate set by $\\alpha$ — hence damped radian frequency.',
      },
      {
        term: 'Critically damped natural response',
        kind: 'theorem',
        statement: 'When $\\omega_{0}^{2} = \\alpha^{2}$ the repeated root $s_{1} = s_{2} = -\\alpha = -1/2RC$ makes the plain two-exponential form collapse to a single constant, so the solution must take the form $$v(t) = D_{1}t e^{-\\alpha t} + D_{2}e^{-\\alpha t}, \\quad t \\geq 0,$$ with $D_{2} = V_{0}$ and $D_{1} - \\alpha D_{2} = \\tfrac{1}{C}\\left(-\\tfrac{V_{0}}{R} - I_{0}\\right)$.',
        detail: 'One constant $A_{0}e^{-\\alpha t}$ cannot satisfy two independent initial conditions ($V_{0}$ and $I_{0}$), which is why the linear-times-exponential term $t e^{-\\alpha t}$ must appear; the justification belongs to a differential equations course. Critically damped systems are rare in practice because $\\omega_{0}$ must equal $\\alpha$ exactly — component tolerances make the exact equality almost impossible to hold.',
      },
      {
        term: 'Ringing as energy exchange',
        kind: 'insight',
        statement: 'The underdamped circuit **oscillates because it has two kinds of energy storage**: current in $L$ (energy $\\tfrac{1}{2}LI^{2}$, Hughes section 8.10) and voltage on $C$ (energy $\\tfrac{1}{2}CV^{2}$). The energy sloshes back and forth between the two stores while the resistor bleeds off a little each pass — the mechanical analogue is a mass on a spring.',
        detail: 'As $R \\to \\infty$ the dissipation $p = v^{2}/R \\to 0$, so $\\alpha \\to 0$ and $\\omega_{d} \\to \\omega_{0}$: the oscillation becomes sustained. In Nilsson’s Example 8.4, letting $R$ grow to infinity turns the response into $v(t) = 98\\sin 1000t$ V — a pure sinusoid at $\\omega_{0} = 1000$ rad/s with no decay. Design-wise you face a choice: an underdamped response reaches the final value fastest but overshoots; an overdamped response never exceeds the final value but is slow. Pick the regime that matches which risk you can tolerate.',
      },
    ],
    examples: [
      {
        title: 'One circuit, three regimes — the roots of the characteristic equation',
        problem: 'A parallel RLC circuit has $L = 50$ mH and $C = 0.2\\,\\text{µF}$. Find the roots of the characteristic equation when $R = 200\\,\\Omega$, classify the response, then repeat for $R = 312.5\\,\\Omega$, and finally find the $R$ that makes the response critically damped. (Nilsson Example 8.1.)',
        steps: [
          { label: 'Step 1: Compute α and ω₀ for R = 200 Ω', text: '$\\alpha = \\frac{1}{2RC} = \\frac{1}{2(200)(0.2 \\times 10^{-6})} = 12{,}500$ rad/s, and $\\omega_{0}^{2} = \\frac{1}{LC} = \\frac{1}{(50 \\times 10^{-3})(0.2 \\times 10^{-6})} = 10^{8}\\ \\text{rad}^{2}/\\text{s}^{2}$, so $\\omega_{0} = 10{,}000$ rad/s.' },
          { label: 'Step 2: Evaluate the roots', text: '$s_{1} = -\\alpha + \\sqrt{\\alpha^{2} - \\omega_{0}^{2}} = -12{,}500 + \\sqrt{(12{,}500)^{2} - 10^{8}} = -12{,}500 + 7500 = -5000$ rad/s, and $s_{2} = -12{,}500 - 7500 = -20{,}000$ rad/s.' },
          { label: 'Step 3: Classify', text: 'Since $\\omega_{0}^{2} = 10^{8} < \\alpha^{2} = 1.5625 \\times 10^{8}$, both roots are real and distinct — the voltage response is overdamped.' },
          { label: 'Step 4: Lower the damping — R = 312.5 Ω', text: 'Now $\\alpha = \\frac{1}{2RC} = \\frac{1}{2(312.5)(0.2 \\times 10^{-6})} = 8000$ rad/s while $\\omega_{0}^{2}$ stays at $10^{8}$. The discriminant goes negative: $s_{1,2} = -8000 \\pm \\sqrt{(8000)^{2} - 10^{8}} = -8000 \\pm j6000$ rad/s.' },
          { label: 'Step 5: Classify again', text: 'Now $\\omega_{0}^{2} > \\alpha^{2}$: the roots are complex conjugates and the response is underdamped, ringing at $\\omega_{d} = 6000$ rad/s under the envelope $e^{-8000t}$.' },
          { label: 'Step 6: Critical damping', text: 'Set $\\alpha = \\omega_{0} = 10^{4}$ rad/s and solve for the resistance: $R = \\frac{1}{2\\alpha C} = \\frac{1}{2(10^{4})(0.2 \\times 10^{-6})} = 250\\ \\Omega$ — between the two values above, exactly on the boundary.' },
        ],
        result: 'The same $L$ and $C$ straddle all three regimes purely through $R$: $250\\,\\Omega$ is the critical value; $200\\,\\Omega$ (smaller $R$, more damping) is overdamped with $s_{1} = -5000$, $s_{2} = -20{,}000$ rad/s; $312.5\\,\\Omega$ is underdamped with $s_{1,2} = -8000 \\pm j6000$ rad/s.',
      },
      {
        title: 'The overdamped natural response with stored energy',
        problem: 'In the parallel RLC circuit with $R = 200\\,\\Omega$, $L = 50$ mH and $C = 0.2\\,\\text{µF}$, the initial conditions are $v(0^{+}) = 12$ V and $i_{L}(0^{+}) = 30$ mA. Find $v(t)$ for $t \\geq 0$ and the three branch currents. (Nilsson Examples 8.2 and 8.3.)',
        steps: [
          { label: 'Step 1: Reuse the roots', text: 'From the previous example, $\\alpha = 12{,}500$ rad/s, $\\omega_{0}^{2} = 10^{8}$ and the response is overdamped with $s_{1} = -5000$ rad/s, $s_{2} = -20{,}000$ rad/s, so $v(t) = A_{1}e^{-5000t} + A_{2}e^{-20{,}000t}$.' },
          { label: 'Step 2: Write the two initial-condition equations', text: 'At $t = 0^{+}$: $A_{1} + A_{2} = V_{0} = 12$. And $s_{1}A_{1} + s_{2}A_{2} = \\frac{1}{C}\\left(-\\frac{V_{0}}{R} - I_{0}\\right) = \\frac{1}{0.2 \\times 10^{-6}}\\left(-\\frac{12}{200} - 0.03\\right) = -450{,}000$ V/s.' },
          { label: 'Step 3: Solve for the constants', text: 'Substituting $A_{1} = 12 - A_{2}$ into $-5000A_{1} - 20{,}000A_{2} = -450{,}000$ gives $A_{2} = 26$ V and $A_{1} = -14$ V.' },
          { label: 'Step 4: Write the voltage', text: '$$v(t) = \\left(-14e^{-5000t} + 26e^{-20{,}000t}\\right)\\ \\text{V}, \\quad t \\geq 0.$$ The slow root ($-5000$) carries a negative coefficient, so the curve starts at 12 V, dips, and returns to zero without ever ringing.' },
          { label: 'Step 5: Branch currents from the voltage', text: 'Ohm’s law gives $i_{R} = v/200 = \\left(-70e^{-5000t} + 130e^{-20{,}000t}\\right)$ mA. Differentiating, $i_{C} = C\\,dv/dt = \\left(14e^{-5000t} - 104e^{-20{,}000t}\\right)$ mA, and KCL gives $i_{L} = -i_{R} - i_{C} = \\left(56e^{-5000t} - 26e^{-20{,}000t}\\right)$ mA — which correctly reproduces $i_{L}(0^{+}) = 30$ mA.' },
        ],
        result: '$v(t) = (-14e^{-5000t} + 26e^{-20{,}000t})$ V; $i_{R}(0^{+}) = 60$ mA flows out while the capacitor and inductor exchange the initial $\\tfrac{1}{2}CV_{0}^{2} = 14.4$ µJ and $\\tfrac{1}{2}LI_{0}^{2} = 22.5$ µJ until all of it is dissipated in $R$.',
      },
      {
        title: 'Underdamped, then critically damped — one circuit tuned two ways',
        problem: 'A parallel RLC circuit has $R = 20$ kΩ, $L = 8$ H and $C = 125$ nF, with $V_{0} = 0$ and $I_{0} = -12.25$ mA. Find $v(t)$; then find the value of $R$ that makes the same circuit critically damped and compute the new $v(t)$. (Nilsson Examples 8.4 and 8.5.)',
        steps: [
          { label: 'Step 1: Frequencies', text: '$\\alpha = \\frac{1}{2RC} = \\frac{1}{2(20{,}000)(125 \\times 10^{-9})} = 200$ rad/s and $\\omega_{0}^{2} = \\frac{1}{LC} = \\frac{1}{8(125 \\times 10^{-9})} = 10^{6}\\ \\text{rad}^{2}/\\text{s}^{2}$, so $\\alpha^{2} \\ll \\omega_{0}^{2}$: strongly underdamped.' },
          { label: 'Step 2: Damped frequency and constants', text: '$\\omega_{d} = \\sqrt{10^{6} - (200)^{2}} = \\sqrt{999{,}600} = 979.80$ rad/s. The initial-value equation gives $B_{1} = V_{0} = 0$; the slope equation gives $-\\alpha B_{1} + \\omega_{d}B_{2} = \\frac{1}{125 \\times 10^{-9}}\\left(0 + 12.25 \\times 10^{-3}\\right) = 98{,}000$, so $B_{2} = 98{,}000 / 979.80 = 100$ V.' },
          { label: 'Step 3: The ringing voltage', text: '$$v(t) = 100e^{-200t}\\sin 979.80t\\ \\text{V}, \\quad t \\geq 0.$$ A pure damped sine: it rings at about 979.8 rad/s under an envelope that decays with time constant $1/\\alpha = 5$ ms.' },
          { label: 'Step 4: Retune for critical damping', text: 'Critical damping needs $\\alpha = \\omega_{0} = 1000$ rad/s, hence $R = \\frac{1}{2\\alpha C} = \\frac{1}{2(1000)(125 \\times 10^{-9})} = 4000\\ \\Omega$.' },
          { label: 'Step 5: Critically damped constants', text: 'With $D_{2} = V_{0} = 0$ and $D_{1} - \\alpha D_{2} = \\tfrac{1}{C}(0 + 12.25 \\times 10^{-3}) = 98{,}000$, we get $D_{1} = 98{,}000$ V/s and $D_{2} = 0$.' },
          { label: 'Step 6: The boundary response', text: '$$v(t) = 98{,}000\\,t\\,e^{-1000t}\\ \\text{V}, \\quad t \\geq 0.$$ The response rises smoothly to a single peak of about 36 V at $t = 1$ ms and then decays — no oscillation, no overshoot, the fastest decay the circuit can manage without ringing.' },
        ],
        result: 'With $R = 20$ kΩ: $v = 100e^{-200t}\\sin 979.80t$ V (underdamped). With $R = 4$ kΩ: $v = 98{,}000t e^{-1000t}$ V (critically damped). Same $L$, $C$ and initial energy — only the damping was changed.',
      },
    ],
    keyTakeaways: [
      'Two independent energy stores make the circuit second order: the parallel RLC satisfies $\\frac{d^{2}v}{dt^{2}} + \\frac{1}{RC}\\frac{dv}{dt} + \\frac{v}{LC} = 0$ with characteristic equation $s^{2} + \\frac{1}{RC}s + \\frac{1}{LC} = 0$.',
      'For the parallel RLC, $\\alpha = 1/2RC$ and $\\omega_{0} = 1/\\sqrt{LC}$; the roots are always $s_{1,2} = -\\alpha \\pm \\sqrt{\\alpha^{2} - \\omega_{0}^{2}}$.',
      'Overdamped ($\\omega_{0}^{2} < \\alpha^{2}$): $v = A_{1}e^{s_{1}t} + A_{2}e^{s_{2}t}$; underdamped ($\\omega_{0}^{2} > \\alpha^{2}$): $v = B_{1}e^{-\\alpha t}\\cos\\omega_{d}t + B_{2}e^{-\\alpha t}\\sin\\omega_{d}t$ with $\\omega_{d} = \\sqrt{\\omega_{0}^{2} - \\alpha^{2}}$; critically damped ($\\omega_{0}^{2} = \\alpha^{2}$): $v = D_{1}t e^{-\\alpha t} + D_{2}e^{-\\alpha t}$.',
      'The two constants always come from the same pair of facts: the initial capacitor voltage $V_{0}$ and the initial inductor current $I_{0}$, the latter entering through $\\frac{dv(0^{+})}{dt} = \\frac{1}{C}\\left(-\\frac{V_{0}}{R} - I_{0}\\right)$.',
      'Ringing is physical, not mathematical decoration: energy trades between $\\tfrac{1}{2}Li^{2}$ and $\\tfrac{1}{2}Cv^{2}$ while $R$ dissipates it; with no loss, $\\alpha = 0$ and the circuit oscillates forever at $\\omega_{0}$.',
      'Design rule of thumb: underdamped is fastest to reach the final value but overshoots; overdamped never overshoots but is sluggish; critical damping is a mathematical boundary too precise to design for.',
    ],
    quiz: [
      {
        q: 'A parallel RLC circuit has $\\alpha = 8000$ rad/s and $\\omega_{0} = 10{,}000$ rad/s. The voltage response is:',
        options: ['Overdamped, with two real distinct roots', 'Underdamped, ringing at $\\omega_{d} = 6000$ rad/s', 'Critically damped with a repeated root at $-8000$ rad/s', 'Undamped, oscillating at $10{,}000$ rad/s'],
        answer: 1,
        explanation: 'Since $\\omega_{0}^{2} = 10^{8} > \\alpha^{2} = 6.4 \\times 10^{7}$, the roots are complex conjugates and the response is underdamped, oscillating at $\\omega_{d} = \\sqrt{10^{8} - 6.4 \\times 10^{7}} = 6000$ rad/s under the envelope $e^{-8000t}$.',
      },
      {
        q: 'For a parallel RLC circuit with $R = 250\\,\\Omega$, $L = 50$ mH and $C = 0.2\\,\\text{µF}$, the neper frequency $\\alpha$ is:',
        options: ['12,500 rad/s', '10,000 rad/s', '5,000 rad/s', '20,000 rad/s'],
        answer: 1,
        explanation: '$\\alpha = \\frac{1}{2RC} = \\frac{1}{2(250)(0.2 \\times 10^{-6})} = 10{,}000$ rad/s. This also equals $\\omega_{0} = 1/\\sqrt{LC} = 10{,}000$ rad/s, so this particular $R$ is the critical-damping value for the $L$–$C$ pair of Example 8.1.',
      },
      {
        q: 'Why does the critically damped case need the term $D_{1}t e^{-\\alpha t}$ instead of just two exponentials?',
        options: ['Because the roots are complex conjugates', 'Because the two roots coincide, leaving only one constant — which cannot satisfy both initial conditions', 'Because the inductor current is always zero', 'Because the resistor dissipates the energy instantaneously'],
        answer: 1,
        explanation: 'With $s_{1} = s_{2} = -\\alpha$, the two-exponential sum degenerates to $(A_{1} + A_{2})e^{-\\alpha t}$ — a single constant. Two independent initial conditions ($V_{0}$ and $I_{0}$) require two independent constants, and the linear-times-exponential term supplies the second one.',
      },
      {
        q: 'In a source-free parallel RLC circuit with initial capacitor voltage $V_{0}$ and initial inductor current $I_{0}$ (both defined with the passive reference convention of Nilsson’s Fig. 8.5), the initial rate of change of the node voltage is:',
        options: [`$\\frac{dv(0^{+})}{dt} = \\frac{1}{C}\\left(\\frac{V_{0}}{R} + I_{0}\\right)$`, `$\\frac{dv(0^{+})}{dt} = \\frac{1}{C}\\left(-\\frac{V_{0}}{R} - I_{0}\\right)$`, `$\\frac{dv(0^{+})}{dt} = -\\frac{V_{0}}{RC}$`, `$\\frac{dv(0^{+})}{dt} = \\frac{I_{0}}{C}$`],
        answer: 1,
        explanation: 'KCL at $t = 0^{+}$ gives $i_{C}(0^{+}) = -i_{R} - i_{L} = -V_{0}/R - I_{0}$, and $i_{C} = C\\,dv/dt$. This is exactly the second equation used to pin down the response constants in every damping regime.',
      },
      {
        q: 'As the parallel resistance $R$ is made larger and larger, the natural response of a parallel RLC circuit:',
        options: ['Becomes more heavily damped and decays faster', 'Rings for a shorter time', 'Approaches a sustained oscillation at $\\omega_{0}$ because the damping $\\alpha = 1/2RC$ vanishes', 'Becomes overdamped regardless of $L$ and $C$'],
        answer: 2,
        explanation: 'The dissipated power $p = v^{2}/R$ shrinks as $R$ grows, so $\\alpha = 1/2RC \\to 0$ and $\\omega_{d} \\to \\omega_{0}$: less and less energy is lost per cycle until the oscillation is essentially sustained — the lossless LC limit.',
      },
      // PYQ-pattern: GATE 2021 — parallel RLC damping regime (rephrased, values changed)
      {
        q: 'A source-free parallel RLC network has R = 100 Ω, L = 10 mH and C = 1 μF. The damping regime of the natural response is:',
        options: ['Overdamped, since $\\alpha > \\omega_{0}$', 'Underdamped, since $\\alpha < \\omega_{0}$', 'Critically damped, since $\\alpha = \\omega_{0}$', 'Undamped, since R is finite'],
        answer: 1,
        explanation: 'Step 1 — Given: parallel $R = 100$ Ω, $L = 10$ mH, $C = 1$ μF. Step 2 — Governing pair: neper frequency $\\alpha = \\frac{1}{2RC}$ and resonant frequency $\\omega_{0} = \\frac{1}{\\sqrt{LC}}$; ordering decides the regime. Step 3 — Algebra: $\\alpha = \\frac{1}{2 \\times 100 \\times 10^{-6}} = 5000$ per s; $\\omega_{0} = \\frac{1}{\\sqrt{10^{-2} \\times 10^{-6}}} = 10000$ rad per s; hence $\\alpha < \\omega_{0}$. Step 4 — Sanity check: roots $-\\alpha \\pm j\\sqrt{\\omega_{0}^{2} - \\alpha^{2}}$ are complex with negative real part, so a decaying ring is expected rather than a creep. Step 5 — Distractor analysis: overdamped reverses the inequality, critical damping needs exact equality, and finite $R$ guarantees decay rather than sustained oscillation. Step 6 — Conclude: the response is underdamped.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.2
  {
    sectionId: 'elec-ch7-s2',
    readingTime: 11,
    intro: 'Forcing the RLC circuit with a step adds a constant to the right-hand side of the differential equation — and one new constraint: a nonzero final value. Nilsson solves the parallel form for the inductor current and the series form for the capacitor voltage, and the beautiful part is that the machinery barely changes: new $\\alpha$ for the series case, same $\\omega_{0}$, same three damping regimes, same two simultaneous equations. The chapter ends with the same circuit driven to 90 percent of its final value three different ways, so you can see speed trade against overshoot in hard numbers.',
    objectives: [
      'Explain why the parallel RLC step response is solved for the inductor current and the series form for the capacitor voltage',
      'Compute the series neper frequency $\\alpha = R/2L$ and contrast it with the parallel value',
      'Write the step-response forms for overdamped, underdamped and critically damped circuits in both topologies',
      'Determine the primed constants from the initial conditions and the final value',
      'Compare the three damping regimes against a concrete design specification',
    ],
    concepts: [
      {
        term: 'Step response — the three constraints',
        kind: 'method',
        statement: 'A step-driven RLC circuit must satisfy **three** constraints: the initial capacitor voltage $V_{0}$, the initial inductor current $I_{0}$, and the **final value** imposed by the dc source that exists for $t \\geq 0$.',
        detail: 'In the parallel circuit of Fig. 8.11, as $t \\to \\infty$ the capacitor is an open circuit and the inductor a short circuit that shunts the resistor, so the only nonzero final quantity is the inductor current, $I_{f} = I$ — which is why the parallel step response is built around $i_{L}$. Dually, in the series circuit of Fig. 8.16 the capacitor is an open circuit at $t \\to \\infty$, so $v_{C}$ is the quantity with the nonzero final value, $V_{f} = V$.',
      },
      {
        term: 'Step-response forms (parallel RLC)',
        kind: 'law',
        statement: 'The inductor current of the step-driven parallel RLC circuit is the final value plus a natural-form term: $$i_{L} = I_{f} + A_{1}^{\\prime}e^{s_{1}t} + A_{2}^{\\prime}e^{s_{2}t} \\ \\text{(overdamped)},$$ $$i_{L} = I_{f} + B_{1}^{\\prime}e^{-\\alpha t}\\cos\\omega_{d}t + B_{2}^{\\prime}e^{-\\alpha t}\\sin\\omega_{d}t \\ \\text{(underdamped)},$$ $$i_{L} = I_{f} + D_{1}^{\\prime}t e^{-\\alpha t} + D_{2}^{\\prime}e^{-\\alpha t} \\ \\text{(critically damped)}.$$ The primed constants are found exactly like the unprimed ones — from two simultaneous equations built on $i_{L}(0^{+}) = I_{0}$ and $\\frac{di_{L}(0^{+})}{dt} = V_{0}/L$.',
        detail: 'The second equation is remarkably simple: since $v = L\\,di_{L}/dt$ and the inductor and capacitor are in parallel, the initial inductor voltage is just $V_{0}$. For the overdamped case the equations read $I_{f} + A_{1}^{\\prime} + A_{2}^{\\prime} = I_{0}$ and $s_{1}A_{1}^{\\prime} + s_{2}A_{2}^{\\prime} = V_{0}/L$, with analogous pairs for the other regimes (Nilsson Table 8.3).',
      },
      {
        term: 'Series RLC natural response',
        kind: 'law',
        statement: 'Summing voltages around the series loop of Fig. 8.15 and differentiating once gives $$\\frac{d^{2}i}{dt^{2}} + \\frac{R}{L}\\frac{di}{dt} + \\frac{i}{LC} = 0,$$ with characteristic equation $s^{2} + \\frac{R}{L}s + \\frac{1}{LC} = 0$ — the same form as the parallel equation with $1/RC$ replaced by $R/L$.',
        detail: 'Because both circuits are described by equations of identical form, everything from Section 7.1 transfers; only the quantity solved for changes. In the series natural response it is the current that is common to all components, so we solve for $i(t)$ and recover any element voltage afterwards. The initial slope comes from KVL: $v_{L}(0^{+}) = -RI_{0} - V_{0}$, so $\\frac{di(0^{+})}{dt} = \\frac{-RI_{0} - V_{0}}{L}$.',
      },
      {
        term: 'Neper frequency (series RLC)',
        kind: 'definition',
        statement: 'The **neper frequency of the series RLC circuit** is $$\\alpha = \\frac{R}{2L},$$ while $\\omega_{0} = 1/\\sqrt{LC}$ is unchanged from the parallel form.',
        detail: 'This is the key structural difference between the two topologies — a genuine duality. In the parallel circuit damping falls as $R$ grows; in the series circuit damping grows with $R$. The resonant frequency, belonging to the lossless $L$–$C$ pair alone, is the same in both.',
      },
      {
        term: 'Series RLC natural-response forms',
        kind: 'theorem',
        statement: 'The current in the source-free series RLC circuit takes one of three forms according to the sign of $\\alpha^{2} - \\omega_{0}^{2}$: $$i(t) = A_{1}e^{s_{1}t} + A_{2}e^{s_{2}t}, \\quad i(t) = B_{1}e^{-\\alpha t}\\cos\\omega_{d}t + B_{2}e^{-\\alpha t}\\sin\\omega_{d}t, \\quad \\text{or} \\quad i(t) = D_{1}t e^{-\\alpha t} + D_{2}e^{-\\alpha t},$$ with $A_{1} + A_{2} = I_{0}$ and $s_{1}A_{1} + s_{2}A_{2} = \\frac{-RI_{0} - V_{0}}{L}$ in the overdamped case.',
        detail: 'The underdamped and critically damped constant pairs satisfy $B_{1} = I_{0}$, $-\\alpha B_{1} + \\omega_{d}B_{2} = (-RI_{0} - V_{0})/L$, and $D_{2} = I_{0}$, $D_{1} - \\alpha D_{2} = (-RI_{0} - V_{0})/L$ respectively (Nilsson Table 8.4).',
      },
      {
        term: 'Series RLC step response',
        kind: 'law',
        statement: 'For the series circuit driven by a dc voltage $V$, the capacitor voltage is $$v_{C} = V_{f} + A_{1}^{\\prime}e^{s_{1}t} + A_{2}^{\\prime}e^{s_{2}t} \\quad \\text{(overdamped, and analogously for the other regimes)},$$ where $V_{f} = V$ and the constants obey $V_{f} + A_{1}^{\\prime} + A_{2}^{\\prime} = V_{0}$ and $s_{1}A_{1}^{\\prime} + s_{2}A_{2}^{\\prime} = I_{0}/C$.',
        detail: 'The second equation is the dual of the parallel case: $i = C\\,dv_{C}/dt$, and the current is common to all series elements, so the initial slope of the capacitor voltage is set by the initial loop current. The ODE for $v_{C}$, $\\frac{d^{2}v_{C}}{dt^{2}} + \\frac{R}{L}\\frac{dv_{C}}{dt} + \\frac{v_{C}}{LC} = \\frac{V}{LC}$, has exactly the same form as the parallel equation for $i_{L}$ (Nilsson Eq. 8.34 versus 8.23).',
      },
      {
        term: 'Choosing the regime for a design',
        kind: 'insight',
        statement: 'When speed matters most, specify an **underdamped** response — it reaches the target soonest but overshoots; when the final value must never be exceeded (for example to protect components), specify an **overdamped** response and accept the slower rise.',
        detail: 'In Nilsson’s Example 8.9 the same parallel circuit is built with $R = 400$, $500$ and $625\\,\\Omega$; the times to reach 90 percent of the 24 mA final value are $t_{od} = 130$ µs (overdamped), $t_{cd} = 97$ µs (critically damped) and $t_{ud} = 74$ µs (underdamped). Only the underdamped build overshoots 24 mA; the critically damped build also works but depends on hitting exact component values, so the overdamped choice is the robust one.',
      },
    ],
    examples: [
      {
        title: 'One step response, three resistor values',
        problem: 'A dc current source of $24$ mA is applied at $t = 0$ to a parallel RLC circuit with $L = 25$ mH and $C = 25$ nF and no initial stored energy. Find $i_{L}(t)$ for $R = 400\\,\\Omega$, $R = 625\\,\\Omega$ and $R = 500\\,\\Omega$. (Nilsson Examples 8.6–8.8.)',
        steps: [
          { label: 'Step 1: Initial and final values', text: 'Zero initial energy means $V_{0} = 0$ and $I_{0} = 0$. As $t \\to \\infty$ the inductor shorts the resistor, so all the source current ends up in the inductor: $I_{f} = 24$ mA for every value of $R$.' },
          { label: 'Step 2: Frequencies', text: 'With $R = 400\\,\\Omega$: $\\alpha = \\frac{1}{2RC} = \\frac{1}{2(400)(25 \\times 10^{-9})} = 50{,}000$ rad/s and $\\omega_{0} = \\frac{1}{\\sqrt{(0.025)(25 \\times 10^{-9})}} = 40{,}000$ rad/s. Since $\\alpha > \\omega_{0}$, the response is overdamped.' },
          { label: 'Step 3: Overdamped solution', text: 'The roots are $s_{1} = -50{,}000 + 30{,}000 = -20{,}000$ and $s_{2} = -80{,}000$ rad/s. The equations $0.024 + A_{1}^{\\prime} + A_{2}^{\\prime} = 0$ and $-20{,}000A_{1}^{\\prime} - 80{,}000A_{2}^{\\prime} = 0$ give $A_{1}^{\\prime} = -32$ mA, $A_{2}^{\\prime} = 8$ mA, so $$i_{L}(t) = \\left(24 - 32e^{-20{,}000t} + 8e^{-80{,}000t}\\right)\\ \\text{mA}.$$' },
          { label: 'Step 4: Underdamped solution for R = 625 Ω', text: 'Now $\\alpha = \\frac{1}{2(625)(25 \\times 10^{-9})} = 32{,}000$ rad/s while $\\omega_{0}$ stays $40{,}000$ rad/s, so $\\omega_{d} = \\sqrt{40{,}000^{2} - 32{,}000^{2}} = 24{,}000$ rad/s. The equations $0.024 + B_{1}^{\\prime} = 0$ and $-32{,}000B_{1}^{\\prime} + 24{,}000B_{2}^{\\prime} = 0$ give $B_{1}^{\\prime} = -24$ mA and $B_{2}^{\\prime} = -32$ mA: $$i_{L}(t) = \\left(24 - 24e^{-32{,}000t}\\cos 24{,}000t - 32e^{-32{,}000t}\\sin 24{,}000t\\right)\\ \\text{mA}.$$' },
          { label: 'Step 5: Critically damped solution for R = 500 Ω', text: 'Here $\\alpha = \\frac{1}{2(500)(25 \\times 10^{-9})} = 40{,}000$ rad/s $= \\omega_{0}$ exactly. With $0.024 + D_{2}^{\\prime} = 0$ and $D_{1}^{\\prime} - 40{,}000D_{2}^{\\prime} = 0$: $D_{2}^{\\prime} = -24$ mA and $D_{1}^{\\prime} = -960{,}000$ mA/s, so $$i_{L}(t) = \\left(24 - 960{,}000t e^{-40{,}000t} - 24e^{-40{,}000t}\\right)\\ \\text{mA}.$$' },
          { label: 'Step 6: Compare against the specification', text: 'Reading the 21.6 mA level (90 percent of 24 mA) from the three curves gives $t_{od} = 130$ µs, $t_{cd} = 97$ µs and $t_{ud} = 74$ µs. Underdamped is fastest but overshoots; overdamped never exceeds the final value; critically damped needs $R$ exact to the ohm.' },
        ],
        result: 'Three legal answers for one specification: overdamped $i_{L} = 24 - 32e^{-20{,}000t} + 8e^{-80{,}000t}$ mA; underdamped $i_{L} = 24 - 24e^{-32{,}000t}\\cos 24{,}000t - 32e^{-32{,}000t}\\sin 24{,}000t$ mA; critically damped $i_{L} = 24 - 960{,}000t e^{-40{,}000t} - 24e^{-40{,}000t}$ mA.',
      },
      {
        title: 'Natural response of a series RLC — a charged capacitor discharges through a coil',
        problem: 'A $0.1\\,\\text{µF}$ capacitor charged to $100$ V is discharged at $t = 0$ through a series combination of a $100$ mH inductor and a $560\\,\\Omega$ resistor. Find $i(t)$ and $v_{C}(t)$ for $t \\geq 0$. (Nilsson Example 8.11.)',
        steps: [
          { label: 'Step 1: Initial conditions', text: 'Before the switch closes the loop current is zero, so $I_{0} = 0$; the capacitor holds $V_{0} = 100$ V.' },
          { label: 'Step 2: Series frequencies', text: 'Now $\\alpha = \\frac{R}{2L} = \\frac{560}{2(0.1)} = 2800$ rad/s and $\\omega_{0}^{2} = \\frac{1}{LC} = \\frac{1}{(0.1)(0.1 \\times 10^{-6})} = 10^{8}\\ \\text{rad}^{2}/\\text{s}^{2}$, so $\\omega_{0} = 10{,}000$ rad/s $> \\alpha$: underdamped, with $\\omega_{d} = \\sqrt{10^{8} - 2800^{2}} = 9600$ rad/s.' },
          { label: 'Step 3: Constants for the current', text: 'The initial-value equation gives $B_{1} = I_{0} = 0$. The slope equation gives $-\\alpha B_{1} + \\omega_{d}B_{2} = \\frac{-RI_{0} - V_{0}}{L} = \\frac{-100}{0.1} = -1000$, so $B_{2} = -1000/9600 = -0.1042$ A.' },
          { label: 'Step 4: Write the current', text: '$$i(t) = -0.1042e^{-2800t}\\sin 9600t\\ \\text{A}, \\quad t \\geq 0.$$ The current is a damped sine: the capacitor drives current through the coil, the coil returns the favor a half-cycle later, and the resistor takes a small toll each pass.' },
          { label: 'Step 5: Recover the capacitor voltage', text: 'Using $v_{C} = -Ri + L\\,di/dt$ (equivalently the integral relation), the voltage is $$v_{C}(t) = (100\\cos 9600t + 29.17\\sin 9600t)e^{-2800t}\\ \\text{V}, \\quad t \\geq 0,$$ which correctly starts at $100$ V with zero initial current.' },
        ],
        result: '$i(t) = -0.1042e^{-2800t}\\sin 9600t$ A and $v_{C}(t) = (100\\cos 9600t + 29.17\\sin 9600t)e^{-2800t}$ V — a ringing discharge at $\\omega_{d} = 9600$ rad/s decaying with time constant $1/2800 \\approx 357$ µs.',
      },
      {
        title: 'Step response of a series RLC — charging a capacitor through a coil',
        problem: 'No energy is stored in the $100$ mH inductor or the $0.4\\,\\text{µF}$ capacitor of a series RLC circuit when a $48$ V dc source is switched in through $R = 1250\\,\\Omega$. Find $v_{C}(t)$ for $t \\geq 0$. (Nilsson Example 8.12.)',
        steps: [
          { label: 'Step 1: The three constraints', text: 'From the statement, $V_{0} = 0$ and $I_{0} = 0$; as $t \\to \\infty$ no current flows, so the capacitor must support the entire supply: $V_{f} = 48$ V.' },
          { label: 'Step 2: Frequencies and roots', text: '$\\alpha = \\frac{R}{2L} = \\frac{1250}{0.2} = 6250$ rad/s and $\\omega_{0}^{2} = \\frac{1}{(0.1)(0.4 \\times 10^{-6})} = 25 \\times 10^{6}$, so $\\omega_{0} = 5000$ rad/s. Since $\\alpha > \\omega_{0}$, the response is overdamped and $s_{1} = -6250 + 3750 = -2500$, $s_{2} = -10{,}000$ rad/s.' },
          { label: 'Step 3: The simultaneous equations', text: 'The final- and initial-value equations are $48 + A_{1}^{\\prime} + A_{2}^{\\prime} = 0$ and $s_{1}A_{1}^{\\prime} + s_{2}A_{2}^{\\prime} = I_{0}/C = 0$, i.e. $-2500A_{1}^{\\prime} - 10{,}000A_{2}^{\\prime} = 0$.' },
          { label: 'Step 4: Solve and write the answer', text: 'Substituting $A_{1}^{\\prime} = -4A_{2}^{\\prime}$ into the first equation gives $A_{2}^{\\prime} = 16$ V and $A_{1}^{\\prime} = -64$ V: $$v_{C}(t) = \\left(48 - 64e^{-2500t} + 16e^{-10{,}000t}\\right)\\ \\text{V}, \\quad t \\geq 0.$$' },
          { label: 'Step 5: Sanity checks', text: 'At $t = 0$: $48 - 64 + 16 = 0 = V_{0}$. The derivative at $t = 0$ is $(-64)(-2500) + (16)(-10{,}000) = 160{,}000 - 160{,}000 = 0$, consistent with $I_{0} = 0$ since $i = C\\,dv_{C}/dt$. At $t \\to \\infty$ both exponentials die and $v_{C} \\to 48$ V.' },
        ],
        result: '$v_{C}(t) = 48 - 64e^{-2500t} + 16e^{-10{,}000t}$ V — an overdamped charge that rises monotonically to 48 V, dominated at long times by the slow root at $-2500$ rad/s.',
      },
    ],
    keyTakeaways: [
      'A step input adds a third constraint — the final value — so the parallel response is written for $i_{L}$ (final value $I$) and the series response for $v_{C}$ (final value $V$).',
      'Series RLC: $\\alpha = R/2L$ and $\\omega_{0} = 1/\\sqrt{LC}$; parallel RLC: $\\alpha = 1/2RC$ and the same $\\omega_{0}$. Damping grows with $R$ in series but shrinks with $R$ in parallel — a perfect duality.',
      'Every step response is final value plus natural form: $i_{L} = I_{f} +$ (over-, under- or critically damped terms); $v_{C} = V_{f} +$ (same three forms).',
      'Parallel step constants come from $I_{f} + (\\text{constants summing to } I_{0})$ and a slope equation ending in $V_{0}/L$; series step constants from the $V_{0}$ equation and a slope equation ending in $I_{0}/C$.',
      'Series natural-response constants obey $A_{1} + A_{2} = I_{0}$ and $s_{1}A_{1} + s_{2}A_{2} = (-RI_{0} - V_{0})/L$.',
      'Measured to 90 percent of a 24 mA final value: overdamped 130 µs, critically damped 97 µs, underdamped 74 µs — speed is bought with overshoot (Example 8.9).',
    ],
    quiz: [
      {
        q: 'A series RLC circuit has $R = 560\\,\\Omega$ and $L = 100$ mH. Its neper frequency is:',
        options: ['2800 rad/s', '5600 rad/s', '1400 rad/s', '$\\frac{1}{2RC}$ rad/s'],
        answer: 0,
        explanation: 'For the series topology $\\alpha = R/2L = 560/0.2 = 2800$ rad/s. The $1/2RC$ form belongs to the parallel circuit — mixing the two is the classic error this chapter is designed to cure.',
      },
      {
        q: 'A dc current source of $I$ amperes drives a parallel RLC circuit. After a very long time, the inductor current is:',
        options: ['$I_{f} = 0$, because the inductor acts as an open circuit', '$I_{f} = I$, because the inductor acts as a short circuit that shunts the resistor', '$I_{f} = I/2$, shared equally with the resistor', '$I_{f} = IR$, by Ohm’s law'],
        answer: 1,
        explanation: 'As $t \\to \\infty$ the capacitor carries no current (open circuit) and the inductor sustains any constant current with zero voltage (short circuit). The inductor therefore shunts the resistor and carries the entire source current — this is why the parallel step response is solved for $i_{L}$.',
      },
      {
        q: 'In the step response of a series RLC circuit, the equation that pins the initial slope of $v_{C}$ is:',
        options: [`$s_{1}A_{1}^{\\prime} + s_{2}A_{2}^{\\prime} = V_{0}/L$`, `$s_{1}A_{1}^{\\prime} + s_{2}A_{2}^{\\prime} = I_{0}/C$`, `$s_{1}A_{1}^{\\prime} + s_{2}A_{2}^{\\prime} = -RI_{0} - V_{0}$`, `$A_{1}^{\\prime} + A_{2}^{\\prime} = V_{f}$`],
        answer: 1,
        explanation: 'Since $i = C\\,dv_{C}/dt$ and the loop current is common to all elements, the initial slope of the capacitor voltage is $i(0^{+})/C = I_{0}/C$. The $V_{0}/L$ version belongs to the parallel circuit’s $i_{L}$, where the inductor voltage equals the capacitor voltage $V_{0}$.',
      },
      {
        q: 'A parallel RLC circuit with $L = 25$ mH and $C = 25$ nF is driven by a 24 mA dc source. Which resistor gives a critically damped step response?',
        options: ['400 Ω', '625 Ω', '500 Ω', '250 Ω'],
        answer: 2,
        explanation: 'Critical damping needs $\\alpha = \\omega_{0} = 1/\\sqrt{LC} = 40{,}000$ rad/s, so $R = 1/(2\\alpha C) = 1/(2 \\times 40{,}000 \\times 25 \\times 10^{-9}) = 500\\,\\Omega$ — the value used in Nilsson’s Example 8.8.',
      },
      {
        q: 'In the current-rise curves of Example 8.9 (final value 24 mA), which statement is correct?',
        options: ['The overdamped response reaches 90 percent fastest', 'The underdamped response is fastest to 90 percent but is the only one that overshoots 24 mA', 'The critically damped response overshoots by exactly 5 percent', 'All three responses overshoot equally'],
        answer: 1,
        explanation: 'The measured times to 21.6 mA are 74 µs (underdamped), 97 µs (critically damped) and 130 µs (overdamped). Speed comes from the overshoot: only the underdamped curve exceeds the final value; the other two rise monotonically.',
      },
      // PYQ-pattern: DRDO 2017 — series RLC step final value and regime (rephrased, values changed)
      {
        q: 'A series RLC circuit with R = 400 Ω, L = 0.10 H and C = 10 μF is driven by a 20 V step, starting relaxed. Which pair correctly describes the response?',
        options: ['Overdamped with capacitor voltage settling at 20 V', 'Underdamped with capacitor voltage settling at 10 V', 'Critically damped with inductor current settling at 2 A', 'Overdamped with capacitor voltage settling at 0 V'],
        answer: 0,
        explanation: 'Step 1 — Given: series $R = 400$ Ω, $L = 0.10$ H, $C = 10$ μF, step $20$ V, zero initial energy. Step 2 — Governing pair: series $\\alpha = \\frac{R}{2L}$ and $\\omega_{0} = \\frac{1}{\\sqrt{LC}}$; the capacitor becomes an open circuit at steady state. Step 3 — Algebra: $\\alpha = \\frac{400}{0.20} = 2000$ per s; $\\omega_{0} = \\frac{1}{\\sqrt{10^{-6}}} = 1000$ rad per s; $\\alpha > \\omega_{0}$ gives distinct real roots, and $v_{C}(\\infty) = 20$ V with $i(\\infty) = 0$. Step 4 — Sanity check: overdamped creep with no overshoot suits the large resistance, final inductor current must vanish through the open capacitor, and units match throughout. Step 5 — Distractor analysis: underdamped reverses the inequality, nonzero steady current violates the open, and zero final voltage forgets the step. Step 6 — Conclude: overdamped settling at 20 V.',
      },
    ],
  },

  // ------------------------------------------------------------------ 7.3
  {
    sectionId: 'elec-ch7-s3',
    readingTime: 10,
    intro: 'Strip away the topology and every second-order circuit tells the same story: a forced part that the source demands, plus a natural part the circuit itself contributes, glued together by two initial conditions and a final value. This section assembles the universal two-root recipe, then stress-tests it on a step response that begins with stored energy, on a circuit with no RLC in sight — two cascaded integrating amplifiers — and on the lossless LC oscillator that a computer’s clock generator could be built from.',
    objectives: [
      'Structure any second-order response as forced component plus natural component',
      'Apply the six-step recipe for natural, step and complete responses of second-order circuits',
      'Solve a step response that begins with nonzero initial energy',
      'Show that cascaded integrating amplifiers are second-order circuits and analyze them',
      'Derive the undamped LC response and connect it to the clock-generator application',
    ],
    concepts: [
      {
        term: 'Complete response = natural + forced',
        kind: 'law',
        statement: 'The solution of a second-order differential equation with a constant forcing function is the **forced response plus a response of the same form as the natural response**: $$i = I_{f} + \\left(\\text{function of the same form as the natural response}\\right),$$ and likewise $v = V_{f} + (\\dots)$ for a voltage.',
        detail: 'The forced (steady-state) part is whatever the source leaves behind as $t \\to \\infty$; the natural part carries the two roots of the characteristic equation and exists even when the source is zero. In Chapter 6 the same decomposition produced $x = X_{f} + (X_{0} - X_{f})e^{-t/\\tau}$ for first-order circuits; here the natural part simply has two roots and two constants instead of one.',
      },
      {
        term: 'The universal two-root recipe',
        kind: 'method',
        statement: 'Every natural, step or complete response of a two-energy-storage circuit follows six steps: (1) find $V_{0}$, $I_{0}$ and the final value $X_{f}$ from the circuit; (2) compute $\\alpha$ and $\\omega_{0}$; (3) compare $\\alpha^{2}$ with $\\omega_{0}^{2}$ and pick the response form; (4) compute the roots $s_{1}$, $s_{2}$ or $\\omega_{d}$; (5) solve the two simultaneous constant equations; (6) write the result and verify it against the initial and final values.',
        detail: 'This recipe is Analysis Methods 8.3–8.6 of Nilsson collapsed into one: for the parallel circuit use $\\alpha = 1/2RC$ and solve for $i_{L}$ or $v$; for the series circuit use $\\alpha = R/2L$ and solve for $i$ or $v_{C}$. Steps 1 and 6 are where most errors are caught — always check that your formula reproduces $V_{0}$, $I_{0}$ and the final value.',
      },
      {
        term: 'Initial-energy step response (complete response)',
        kind: 'insight',
        statement: 'When the source is applied to a circuit that **already stores energy**, the three constraints do not simplify: $V_{0} \\neq 0$, $I_{0} \\neq 0$ and $I_{f} \\neq 0$ all appear in the constants, and the result is a genuine complete response.',
        detail: 'Nothing in the recipe changes — the final value merely shifts the anchor of the natural terms. In Example 8.10 the same critically damped circuit of Example 8.8 is restarted with $V_{0} = 50$ V and $I_{0} = 29$ mA; the constants become $D_{2}^{\\prime} = +5$ mA (not $-24$ mA) precisely because the initial current now exceeds the final current.',
      },
      {
        term: 'Cascaded integrating amplifiers are second-order circuits',
        kind: 'insight',
        statement: 'Two ideal integrating amplifiers in cascade obey a second-order differential equation, $$\\frac{d^{2}v_{o}}{dt^{2}} = \\frac{v_{g}}{R_{1}C_{1}R_{2}C_{2}},$$ because each stage contributes one integration — order counts energy stores or integrators, whichever you prefer to count.',
        detail: 'With feedback resistors $R_{1}$, $R_{2}$ placed across the feedback capacitors to prevent saturation, the equation gains damping and restoring terms, $\\frac{d^{2}v_{o}}{dt^{2}} + \\left(\\frac{1}{\\tau_{1}} + \\frac{1}{\\tau_{2}}\\right)\\frac{dv_{o}}{dt} + \\frac{v_{o}}{\\tau_{1}\\tau_{2}} = \\frac{v_{g}}{R_{a}C_{1}R_{b}C_{2}}$ with $\\tau_{1} = R_{1}C_{1}$, $\\tau_{2} = R_{2}C_{2}$, whose characteristic roots are simply $s_{1} = -1/\\tau_{1}$ and $s_{2} = -1/\\tau_{2}$. The chapter’s whole apparatus — roots, damping, final value — applies unchanged.',
      },
      {
        term: 'The undamped LC oscillator',
        kind: 'theorem',
        statement: 'With $R = 0$ the series loop has $\\alpha = 0$, so the response is underdamped with $\\omega_{d} = \\omega_{0}$ and no decay: for the clock-generator circuit of Nilsson’s Practical Perspective, $$i(t) = \\frac{V_{s}}{R_{s}}\\cos\\omega_{0}t, \\qquad v_{o}(t) = \\frac{V_{s}}{\\omega_{0}R_{s}C}\\sin\\omega_{0}t.$$',
        detail: 'The switch first establishes the inductor current $I_{0} = V_{s}/R_{s}$ with $V_{0} = 0$; when it flips, that current coasts through the LC loop forever, transferring energy between $\\tfrac{1}{2}LI^{2}$ and $\\tfrac{1}{2}Cv^{2}$ with zero loss. Choosing $L$ and $C$ selects the clock frequency $f = \\omega_{0}/2\\pi$ — though real inductors and capacitors carry small resistances, which is exactly why computers use quartz-crystal oscillators instead.',
      },
      {
        term: 'Verification by endpoint checks',
        kind: 'method',
        statement: 'A second-order response formula must reproduce **four** anchor facts before you trust it: $v(0^{+}) = V_{0}$, the initial slope implied by $I_{0}$, the value $i_{L}(0^{+}) = I_{0}$ (or $v_{C}(0^{+}) = V_{0}$), and the final value as $t \\to \\infty$.',
        detail: 'Nilsson ends Example 8.10 by checking that $v(0) = -2.2 \\times 10^{6}(0)(1) + 50(1) = 50$ V, exactly the stated initial capacitor voltage. Endpoints are cheap to evaluate and catch sign errors in the constants — the single most common mistake in this chapter.',
      },
    ],
    examples: [
      {
        title: 'A complete response — step input arriving on stored energy',
        problem: 'The parallel RLC circuit of Example 8.8 ($R = 500\\,\\Omega$, $L = 25$ mH, $C = 25$ nF, critically damped) is driven by the 24 mA dc source, but this time the circuit already stores energy when the source appears: the initial inductor current is $29$ mA and the initial capacitor voltage is $50$ V. Find $i_{L}(t)$ and $v(t)$ for $t \\geq 0$. (Nilsson Example 8.10.)',
        steps: [
          { label: 'Step 1: The three constraints', text: 'From the statement: $V_{0} = 50$ V, $I_{0} = 29$ mA and — unchanged from Example 8.8 — $I_{f} = 24$ mA, with $\\alpha = \\omega_{0} = 40{,}000$ rad/s (critically damped).' },
          { label: 'Step 2: Write the form', text: 'Because the circuit is critically damped, $i_{L} = I_{f} + D_{1}^{\\prime}t e^{-\\alpha t} + D_{2}^{\\prime}e^{-\\alpha t}$.' },
          { label: 'Step 3: The two constant equations', text: 'The initial-value equation is $I_{f} + D_{2}^{\\prime} = I_{0}$, so $0.024 + D_{2}^{\\prime} = 0.029$ and $D_{2}^{\\prime} = 5$ mA. The slope equation is $D_{1}^{\\prime} - \\alpha D_{2}^{\\prime} = V_{0}/L = 50/0.025 = 2000$ A/s, so $D_{1}^{\\prime} = 2000 + (40{,}000)(0.005) = 2200$ A/s $= 2.2 \\times 10^{6}$ mA/s.' },
          { label: 'Step 4: Write the current', text: '$$i_{L}(t) = \\left(24 + 2.2 \\times 10^{6}\\,t\\,e^{-40{,}000t} + 5e^{-40{,}000t}\\right)\\ \\text{mA}, \\quad t \\geq 0.$$ At $t = 0$ this gives $24 + 5 = 29$ mA, matching the initial current, and it decays to 24 mA.' },
          { label: 'Step 5: The voltage from the inductor relation', text: 'Differentiating and multiplying by $L = 0.025$ H: $$v(t) = L\\frac{di_{L}}{dt} = \\left(-2.2 \\times 10^{6}\\,t\\,e^{-40{,}000t} + 50e^{-40{,}000t}\\right)\\ \\text{V}, \\quad t \\geq 0.$$' },
          { label: 'Step 6: Verify the endpoint', text: 'At $t = 0$: $v(0) = -2.2 \\times 10^{6}(0)(1) + 50(1) = 50$ V — exactly the given initial capacitor voltage, confirming the signs of both constants.' },
        ],
        result: '$i_{L}(t) = 24 + 2.2 \\times 10^{6}t e^{-40{,}000t} + 5e^{-40{,}000t}$ mA and $v(t) = -2.2 \\times 10^{6}t e^{-40{,}000t} + 50e^{-40{,}000t}$ V: the stored energy and the step interleave into one smooth approach to the new steady state.',
      },
      {
        title: 'A second-order circuit with no inductor — two cascaded integrating amplifiers',
        problem: 'Two cascaded integrating amplifiers have $R_{a} = 100$ kΩ, $R_{1} = 500$ kΩ, $C_{1} = 0.1\\,\\text{µF}$, $R_{b} = 25$ kΩ, $R_{2} = 100$ kΩ and $C_{2} = 1\\,\\text{µF}$, with feedback resistors preventing saturation, and ±6 V supplies. The input $v_{g}$ jumps from 0 to 250 mV at $t = 0$ with no energy in the feedback capacitors. Find the governing equation and $v_{o}(t)$. (Nilsson Example 8.14.)',
        steps: [
          { label: 'Step 1: Time constants and the ODE', text: '$\\tau_{1} = R_{1}C_{1} = (500 \\times 10^{3})(0.1 \\times 10^{-6}) = 0.05$ s and $\\tau_{2} = R_{2}C_{2} = (100 \\times 10^{3})(1 \\times 10^{-6}) = 0.10$ s. The output obeys $\\frac{d^{2}v_{o}}{dt^{2}} + \\left(\\frac{1}{\\tau_{1}} + \\frac{1}{\\tau_{2}}\\right)\\frac{dv_{o}}{dt} + \\frac{v_{o}}{\\tau_{1}\\tau_{2}} = \\frac{v_{g}}{R_{a}C_{1}R_{b}C_{2}}$, which here is $\\frac{d^{2}v_{o}}{dt^{2}} + 30\\frac{dv_{o}}{dt} + 200v_{o} = 1000$.' },
          { label: 'Step 2: Roots and final value', text: 'The characteristic equation $s^{2} + 30s + 200 = 0$ factors as $(s + 10)(s + 20)$, so $s_{1} = -20$ and $s_{2} = -10$ rad/s. As $t \\to \\infty$ the capacitors are open circuits and each stage is a plain inverting amplifier: $v_{o}(\\infty) = (250 \\times 10^{-3})\\left(-\\frac{500}{100}\\right)\\left(-\\frac{100}{25}\\right) = 5$ V.' },
          { label: 'Step 3: Constants from zero initial energy', text: 'With $v_{o} = 5 + A_{1}^{\\prime}e^{-10t} + A_{2}^{\\prime}e^{-20t}$, the conditions $v_{o}(0) = 0$ and $\\frac{dv_{o}(0)}{dt} = 0$ (no initial charge anywhere) give $5 + A_{1}^{\\prime} + A_{2}^{\\prime} = 0$ and $-10A_{1}^{\\prime} - 20A_{2}^{\\prime} = 0$, so $A_{1}^{\\prime} = -10$ V and $A_{2}^{\\prime} = 5$ V.' },
          { label: 'Step 4: The output', text: '$$v_{o}(t) = \\left(5 - 10e^{-10t} + 5e^{-20t}\\right)\\ \\text{V}, \\quad t \\geq 0.$$ At $t = 0$: $5 - 10 + 5 = 0$; the derivative is $100 - 100 = 0$; and as $t \\to \\infty$, $v_{o} \\to 5$ V.' },
          { label: 'Step 5: Check for saturation', text: 'The final output of 5 V is below the ±6 V supply, and the intermediate first-stage output settles at $(250 \\times 10^{-3})(-5) = -1.25$ V, also within range — neither op amp saturates, so the linear solution is valid for all $t$.' },
          { label: 'Step 6: The intermediate node', text: 'The first stage is a first-order circuit (one capacitor) with time constant $\\tau_{1}$: $v_{o1} = -1.25 + 1.25e^{-20t}$ V, exactly the Chapter 6 recipe applied to the inner node.' },
        ],
        result: '$\\frac{d^{2}v_{o}}{dt^{2}} + 30\\frac{dv_{o}}{dt} + 200v_{o} = 1000$ with roots $-20$ and $-10$ rad/s; $v_{o}(t) = 5 - 10e^{-10t} + 5e^{-20t}$ V and $v_{o1}(t) = -1.25 + 1.25e^{-20t}$ V. Two integrators behave exactly like a second-order circuit.',
      },
    ],
    keyTakeaways: [
      'Every complete second-order response is a final (forced) value plus natural-form terms: $x = X_{f} + A_{1}e^{s_{1}t} + A_{2}e^{s_{2}t}$ (or the underdamped or critically damped equivalent).',
      'The universal recipe: initial conditions and final value, then $\\alpha$ and $\\omega_{0}$, then classify, then roots, then the two constant equations, then write and verify.',
      'Stored energy at the moment a source appears does not change the method — it only changes the constants, because $V_{0}$, $I_{0}$ and $X_{f}$ are now all nonzero.',
      'Circuits with two integrators — like cascaded integrating amplifiers — are second-order even with no L or C in the signal path; their feedback-resistor version has roots $-1/\\tau_{1}$ and $-1/\\tau_{2}$.',
      'The lossless LC loop gives $i = (V_{s}/R_{s})\\cos\\omega_{0}t$ and $v_{o} = \\frac{V_{s}}{\\omega_{0}R_{s}C}\\sin\\omega_{0}t$ — an undamped sinusoid whose frequency $\\omega_{0} = 1/\\sqrt{LC}$ you choose by component selection.',
      'Always verify a finished formula at both ends of time: it must reproduce $V_{0}$, $I_{0}$ and the final value; endpoint checks catch sign errors for free.',
    ],
    quiz: [
      {
        q: 'The complete response of a second-order circuit driven by a constant source is structured as:',
        options: ['Only the natural response, since the source is dc', 'The final value plus terms of the same form as the natural response', 'The sum of two forced responses', 'A single exponential with time constant $1/\\alpha$'],
        answer: 1,
        explanation: 'Solving the ODE with a constant on the right-hand side gives a particular (forced) solution — the final value — plus the general solution of the homogeneous equation, which is the natural form with its two roots and two constants.',
      },
      {
        q: 'In Example 8.10 the initial conditions are $V_{0} = 50$ V and $I_{0} = 29$ mA while the source demands $I_{f} = 24$ mA. The constant $D_{2}^{\\prime}$ equals:',
        options: ['$-24$ mA, as in the zero-energy case', `$+5$ mA, because $I_{f} + D_{2}^{\\prime} = I_{0}$`, '$+29$ mA', '$-5$ mA, because the initial voltage is large'],
        answer: 1,
        explanation: 'The initial-value equation is $I_{f} + D_{2}^{\\prime} = I_{0}$, so $D_{2}^{\\prime} = 29 - 24 = +5$ mA. The stored energy raises the initial current above the final value, flipping the sign relative to the zero-energy build-up of Example 8.8.',
      },
      {
        q: 'Why does a cascade of two ideal integrating amplifiers qualify as a second-order circuit?',
        options: ['Because op amps contain internal inductors', 'Because each integrator contributes one energy store', 'Because each stage integrates once, so two stages give a second-order differential equation', 'Because its output is always a sinusoid'],
        answer: 2,
        explanation: 'The first stage gives $\\frac{dv_{o1}}{dt} = -\\frac{v_{g}}{R_{1}C_{1}}$ and the second $\\frac{dv_{o}}{dt} = -\\frac{v_{o1}}{R_{2}C_{2}}$; eliminating $v_{o1}$ yields $\\frac{d^{2}v_{o}}{dt^{2}} = \\frac{v_{g}}{R_{1}C_{1}R_{2}C_{2}}$ — a second-order equation. Order tracks integrations (or independent energy stores), not the presence of an inductor.',
      },
      {
        q: 'For the undamped series LC loop of the clock-generator Practical Perspective ($R = 0$ after switching), the current is:',
        options: ['A decaying exponential with $\\tau = L/R$', 'A damped sine at $\\omega_{d} = \\sqrt{\\omega_{0}^{2} - \\alpha^{2}}$ with $\\alpha = R/2L > 0$', 'A sustained cosine $i(t) = \\frac{V_{s}}{R_{s}}\\cos\\omega_{0}t$ at exactly $\\omega_{0} = 1/\\sqrt{LC}$', 'Zero, because there is no resistor to complete the loop'],
        answer: 2,
        explanation: 'With $R = 0$, $\\alpha = 0$ and $\\omega_{d} = \\omega_{0}$: the initial inductor current $V_{s}/R_{s}$ coasts around the loop forever, giving $i = (V_{s}/R_{s})\\cos\\omega_{0}t$ and a sinusoidal capacitor voltage — the basis of an LC clock oscillator, limited in practice by the small real resistances of the components.',
      },
    ],
  },
]

export const elecCh7Formulas: FormulaEntry[] = [
  {
    chapterId: 'elec-ch7',
    section: '7.1',
    name: 'Neper frequency — parallel RLC',
    formula: 'α = 1/2RC',
    note: 'damping (envelope decay) rate of the parallel form',
    latex: '\\alpha = \\frac{1}{2RC}',
  },
  {
    chapterId: 'elec-ch7',
    section: '7.1',
    name: 'Neper frequency — series RLC',
    formula: 'α = R/2L',
    note: 'the series dual: damping grows with R here',
    latex: '\\alpha = \\frac{R}{2L}',
  },
  {
    chapterId: 'elec-ch7',
    section: '7.1',
    name: 'Resonant radian frequency',
    formula: 'ω₀ = 1/√(LC)',
    note: 'same for parallel and series; the lossless oscillation rate',
    latex: '\\omega_{0} = \\frac{1}{\\sqrt{LC}}',
  },
  {
    chapterId: 'elec-ch7',
    section: '7.1',
    name: 'Damped radian frequency',
    formula: 'ω_d = √(ω₀² − α²)',
    note: 'ringing frequency of the underdamped response',
    latex: '\\omega_{d} = \\sqrt{\\omega_{0}^{2} - \\alpha^{2}}',
  },
  {
    chapterId: 'elec-ch7',
    section: '7.1',
    name: 'Characteristic roots',
    formula: 's₁,₂ = −α ± √(α² − ω₀²)',
    note: 'roots of s² + 2αs + ω₀² = 0 for either topology',
    latex: 's_{1,2} = -\\alpha \\pm \\sqrt{\\alpha^{2} - \\omega_{0}^{2}}',
  },
  {
    chapterId: 'elec-ch7',
    section: '7.1',
    name: 'Overdamped natural response',
    formula: 'v(t) = A₁·exp(s₁t) + A₂·exp(s₂t)',
    note: 'real distinct roots (ω₀² < α²); two exponentials',
    latex: 'v(t) = A_{1}e^{s_{1}t} + A_{2}e^{s_{2}t}',
  },
  {
    chapterId: 'elec-ch7',
    section: '7.1',
    name: 'Underdamped natural response',
    formula: 'v(t) = exp(−αt)·(B₁cos ωd t + B₂sin ωd t)',
    note: 'complex roots (ω₀² > α²); a damped oscillation',
    latex: 'v(t) = B_{1}e^{-\\alpha t}\\cos\\omega_{d}t + B_{2}e^{-\\alpha t}\\sin\\omega_{d}t',
  },
  {
    chapterId: 'elec-ch7',
    section: '7.1',
    name: 'Critically damped natural response',
    formula: 'v(t) = exp(−αt)·(D₁t + D₂)',
    note: 'repeated root (ω₀² = α²); verge of oscillation',
    latex: 'v(t) = D_{1}t\\,e^{-\\alpha t} + D_{2}e^{-\\alpha t}',
  },
  {
    chapterId: 'elec-ch7',
    section: '7.3',
    name: 'Complete (step) response',
    formula: 'x(t) = X_f + natural-form terms',
    note: 'forced final value plus the two-root natural part',
    latex: 'x(t) = X_{f} + A_{1}e^{s_{1}t} + A_{2}e^{s_{2}t}',
  },
]
