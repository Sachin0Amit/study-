import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// The Feynman Lectures on Physics (New Millennium Edition) — Master Library
// Chapter 9: The Special Theory of Relativity (Feynman Vol. I, Lectures 15–17, 34)
// Merged into 4 master sections; all worked-example numbers are Feynman’s own.
// Math is LaTeX, rendered by KaTeX through the RichText $...$ / $$...$$ pipeline.
// ============================================================================

export const physCh9Content: SectionContent[] = [
  // ------------------------------------------------------------------ 9.1
  {
    sectionId: 'phys-ch9-s1',
    readingTime: 11,
    intro: 'For over two hundred years Newton’s equations of motion were believed to describe nature exactly — and the first time an error was found, the correction was found with it, by Einstein in 1905. The error is tiny: a satellite circling the earth at 5 mi/sec has its mass wrong by only about one part in a few billion. But the road to that correction runs through the most famous null experiment in physics, and it forces us to rebuild our ideas of space and time themselves.',
    objectives: [
      'State the principle of relativity in Newton’s and Poincaré’s words and explain why Maxwell’s electrodynamics appeared to violate it',
      'Trace the Michelson–Morley analysis: compute both round-trip times with the momentum and Pythagorean arguments, and interpret the null result',
      'Reproduce the light-clock derivation of time dilation and apply it to the muon lifetime at nine-tenths of the speed of light',
      'Write the Lorentz transformation and extract from it the Lorentz contraction and the failure of simultaneity at a distance',
      'Compute relativistic mass changes and recognize when the Newtonian approximation suffices',
    ],
    concepts: [
      {
        term: 'The principle of relativity',
        kind: 'definition',
        statement: 'The motions of bodies included in a given space are the same among themselves whether that space is at rest or moves uniformly forward in a straight line — **no experiment performed entirely inside a uniformly moving system can reveal its speed**.',
        detail: 'Newton himself stated this as a corollary to his laws. Poincaré restated it in 1904: we have not, nor can we possibly have, any means of discerning whether or not we are carried along in uniform translation. For Moe moving at speed $u$ along $x$ past Joe, the Galilean transformation $x\' = x - ut$, $y\' = y$, $z\' = z$, $t\' = t$ leaves Newton’s laws unchanged in form — mechanics can never detect uniform motion. The principle was used for centuries (Huygens derived billiard collisions with it, as we did for momentum conservation in Chapter 3).',
      },
      {
        term: 'Why Maxwell broke the Galilean peace',
        kind: 'insight',
        statement: 'Maxwell’s equations of the electromagnetic field **do not keep their form** under the Galilean substitution, and one of their consequences is that light travels at the same speed $c = 186{,}000$ mi/sec regardless of the motion of its source.',
        detail: 'Differentiate $x\' = x - ut$ and you get $dx\'/dt = dx/dt - u$: a car going 100,000 mi/sec should therefore see light from behind pass it at only 86,000 mi/sec, and measuring that would reveal the car’s absolute velocity. A long series of experiments built on this idea — determining the earth’s velocity through the hypothetical “ether” — all failed. Something was wrong with the equations of physics; the question was what. Lorentz noticed that Maxwell’s equations keep their form under a strange substitution, and Einstein (following Poincaré) proposed that it is the laws of mechanics, not electrodynamics, that must be changed.',
      },
      {
        term: 'The Michelson–Morley experiment',
        kind: 'method',
        statement: 'A half-silvered plate $B$ splits light onto two equal perpendicular arms of length $L$; with the apparatus drifting through the ether at speed $u$, the round trips take $$t_1 + t_2 = \\frac{2L/c}{1 - u^2/c^2}$$ along the motion but $$2t_3 = \\frac{2L/c}{\\sqrt{1 - u^2/c^2}}$$ across it, so rotating the apparatus 90 degrees should shift the interference fringes.',
        detail: 'Michelson and Morley aligned the arm $BE$ with the earth’s orbital motion, about 18 mi/sec, at certain times of day and year; the apparatus was amply sensitive to such an effect. The result was null — the velocity of the earth through the ether could not be detected. It took eighteen years (until Einstein) for the negative result to be finally explained.',
      },
      {
        term: 'The Lorentz contraction',
        kind: 'law',
        statement: 'A body moving with speed $u$ parallel to its own length contracts to $$L_\\parallel = L_0\\sqrt{1 - u^2/c^2},$$ while lengths perpendicular to the motion are unchanged.',
        detail: 'With the longitudinal arm shortened this way, the two Michelson–Morley times become exactly equal. The hypothesis looked artificial — invented precisely to explain away the difficulty — and many other ether-wind experiments kept producing new compensating phenomena. Then Poincaré saw the way out: a complete conspiracy is itself a law of nature. There is no way, by any experiment, to determine absolute velocity. Transverse lengths cannot change: two passing observers could mark each other’s $y$-meter sticks, and by symmetry the marks must agree — otherwise one of them would know who was “really” moving.',
      },
      {
        term: 'Time dilation and the light clock',
        kind: 'theorem',
        statement: 'A clock moving at speed $u$ appears to run slow by the factor $\\sqrt{1 - u^2/c^2}$: when the ship clock records 1 second aboard, the outside observer sees $1/\\sqrt{1 - u^2/c^2}$ seconds elapse.',
        detail: 'Feynman’s clock is a rod with a mirror at each end, light bouncing between them and clicking at each return. Seen from outside, the light follows a zigzag: while the light crosses, the rod advances in proportion to $u$, the light path in proportion to $c$, and the effective crossing rate is the vertical component $\\sqrt{c^2 - u^2}$. The zigzag path is longer, so the clicks are further apart. And the argument is universal: if any other clock (wheels and gears, radioactive decay) disagreed with the light clock, the mismatch itself would measure the ship’s speed — which the principle of relativity forbids. Everything aboard — pulse, thought processes, the time to light a cigar — slows in the same proportion. Time itself runs slow.',
      },
      {
        term: 'The muon lifetime',
        kind: 'insight',
        statement: 'Muons disintegrate spontaneously after an average lifetime of $2.2 \\times 10^{-6}$ s, yet muons created some 10 kilometers up in cosmic rays are found in laboratories at sea level — because from our viewpoint their internal clocks run slow by $1/\\sqrt{1 - u^2/c^2}$.',
        detail: 'Even at the speed of light a muon could travel only about 600 meters in one lifetime. Different muons move at various speeds, some very close to $c$; their apparent lives stretch enough to cross the atmosphere, and measurements of lifetimes at different velocities agree closely with the formula. This is the practical power of the principle of relativity: we can predict the behavior of a machine (the muon) whose internal workings we do not understand at all.',
      },
      {
        term: 'The Lorentz transformation',
        kind: 'law',
        statement: 'The coordinate replacement that keeps the laws of physics the same in uniformly moving systems is $$x\' = \\frac{x - ut}{\\sqrt{1 - u^2/c^2}}, \\qquad y\' = y, \\qquad z\' = z, \\qquad t\' = \\frac{t - ux/c^2}{\\sqrt{1 - u^2/c^2}}.$$',
        detail: 'The $ux/c^2$ term in the time equation is the failure of simultaneity at a distance: two events simultaneous for Moe at separated points $x_1$ and $x_2$ differ for Joe by $u(x_1 - x_2)/c^2$ (up to the square-root factor). Moe synchronizes ship clocks by a light flash from the midpoint; Joe, watching the ship go by, notes the rear clock advancing to meet the signal while the front clock runs away from it — so the rear clock was lit first, even though Moe swears the flashes arrived together. The transformation also preserves the combination $x^2 + y^2 + z^2 - c^2t^2$, the seed of the four-vector idea that Chapter 14 develops for fields.',
      },
      {
        term: 'Relativistic mass',
        kind: 'law',
        statement: 'The mass of a body increases with velocity: $$m = \\frac{m_0}{\\sqrt{1 - v^2/c^2}},$$ and Newton’s law $F = d(mv)/dt$ survives with this single correction.',
        detail: 'For a satellite at 5 mi/sec, $v/c = 5/186{,}000$ and the mass correction is only one part in two to three billion. But to deflect the high-speed electrons in the Caltech synchrotron, the magnetic field must be 2000 times stronger than Newton’s laws predict — the electrons’ mass is 2000 times its rest value, as great as a proton’s. The binomial expansion $m \\approx m_0(1 + \\tfrac{1}{2}v^2/c^2 + \\tfrac{3}{8}v^4/c^4 + \\cdots)$ shows that the mass increase of a warm gas is just its kinetic energy divided by $c^2$ — the doorway to $E = mc^2$.',
      },
    ],
    examples: [
      {
        title: 'The Michelson–Morley arms, worked with c and u',
        problem: 'An interferometer has two equal arms of length $L$, one aimed along the earth’s orbital motion ($u \\approx 18$ mi/sec, about $10^{-4}c$). Compute the round-trip time for each arm and state what was expected.',
        steps: [
          { label: 'Step 1: Parallel arm, outbound', text: 'While the light chases the receding mirror, the apparatus advances $ut_1$: $ct_1 = L + ut_1$, so $t_1 = L/(c - u)$ — the light effectively closes on the mirror at $c - u$.' },
          { label: 'Step 2: Parallel arm, return', text: 'Now the plate $B$ advances to meet the light: $ct_2 = L - ut_2$, so $t_2 = L/(c + u)$.' },
          { label: 'Step 3: Parallel total', text: `$$t_1 + t_2 = L\\!\\left(\\frac{1}{c-u} + \\frac{1}{c+u}\\right) = \\frac{2Lc}{c^2 - u^2} = \\frac{2L/c}{1 - u^2/c^2}.$$` },
          { label: 'Step 4: Transverse arm', text: 'The light runs along the hypotenuse of a right triangle with legs $L$ and $ut_3$: $(ct_3)^2 = L^2 + (ut_3)^2$, so $t_3 = L/\\sqrt{c^2 - u^2}$ and the round trip is $2t_3 = (2L/c)/\\sqrt{1 - u^2/c^2}$.' },
          { label: 'Step 5: Compare', text: 'The numerators are the at-rest time $2L/c$; the denominators differ at order $u^2/c^2 \\approx 10^{-8}$. With $u = 18$ mi/sec the difference is tiny but well within the apparatus’s sensitivity — yet no fringe shift was ever seen.' },
        ],
        result: 'The two arms should disagree in the second decimal of $u^2/c^2$; the null result is the experimental foundation on which the Lorentz contraction and the time transformation stand.',
      },
      {
        title: 'The muon that crosses the atmosphere',
        problem: 'A cosmic-ray muon has a proper mean lifetime of $2.2 \\times 10^{-6}$ s and is born 10 km above the ground. Show that Newtonian kinematics strands it, and compute the dilated lifetime at $v = 0.9c$ and the speed needed to reach sea level.',
        steps: [
          { label: 'Step 1: Newtonian reach', text: 'In one lifetime even at $c$: $d = (3 \\times 10^{8}\\ \\text{m/s})(2.2 \\times 10^{-6}\\ \\text{s}) = 660$ m — the atmosphere is 10 km deep, so without dilation muons could never arrive.' },
          { label: 'Step 2: The dilation factor at 0.9c', text: 'Feynman’s prediction: the lifetime becomes $(2.2 \\times 10^{-6})/\\sqrt{1 - 9^2/10^2}$ seconds. Here $\\sqrt{1 - 0.81} = \\sqrt{0.19} \\approx 0.436$.' },
          { label: 'Step 3: Dilated lifetime', text: '$t = 2.2 \\times 10^{-6}/0.436 \\approx 5.0 \\times 10^{-6}$ s — about 2.3 proper lifetimes, roughly 1.4 km of travel at $0.9c$.' },
          { label: 'Step 4: What it takes to land', text: 'To cover 10 km at $v \\approx c$ needs a stretch factor $\\gamma \\approx 10{,}000/660 \\approx 15$, i.e. $v \\approx 0.998c$ — and cosmic-ray muons at the top of the atmosphere do come in that fast, which is why they are found in laboratories down here.' },
          { label: 'Step 5: The check', text: 'Average lifetimes have been measured quite accurately for muons of different velocities, and the values agree closely with the $1/\\sqrt{1 - u^2/c^2}$ formula.' },
        ],
        result: 'At $0.9c$ the muon lives about $5\\ \\mu$s instead of $2.2\\ \\mu$s; reaching the ground from 10 km requires $\\gamma \\approx 15$ ($v \\approx 0.998c$). Time dilation is an experimental fact, measured particle by particle.',
      },
      {
        title: 'Einstein’s derivation of the mass formula from E = mc²',
        problem: 'Assume with Einstein that the energy of a body is always $E = mc^2$. Starting from $dE/dt = \\mathbf{F}\\cdot\\mathbf{v}$ and $\\mathbf{F} = d(m\\mathbf{v})/dt$, show that $m = m_0/\\sqrt{1 - v^2/c^2}$.',
        steps: [
          { label: 'Step 1: Set up the energy equation', text: 'With $E = mc^2$ and work feeding energy: $\\dfrac{d(mc^2)}{dt} = v\\,\\dfrac{d(mv)}{dt}$.' },
          { label: 'Step 2: Multiply by 2m', text: 'The trick that clears the derivatives: $c^2(2m)\\dfrac{dm}{dt} = 2mv\\dfrac{d(mv)}{dt}$, which is $\\dfrac{d(m^2c^2)}{dt} = \\dfrac{d(m^2v^2)}{dt}$.' },
          { label: 'Step 3: Integrate', text: 'If the derivatives of two quantities are equal, the quantities differ only by a constant: $m^2c^2 = m^2v^2 + C$.' },
          { label: 'Step 4: Fix the constant', text: 'The identity must hold at $v = 0$, where $m = m_0$: $C = m_0^2c^2$.' },
          { label: 'Step 5: Solve', text: '$m^2(1 - v^2/c^2) = m_0^2$, so $m = m_0/\\sqrt{1 - v^2/c^2}$ — the formula we had merely assumed at the start of the chapter is forced by mass–energy equivalence.' },
        ],
        result: 'Multiplying the series expansion by $c^2$ gives $mc^2 = m_0c^2 + \\tfrac{1}{2}m_0v^2 + \\cdots$: the old kinetic energy sits on top of a new intrinsic rest energy $m_0c^2$, later verified directly when an electron and a positron annihilate at rest into two gamma rays of energy $m_0c^2$ each.',
      },
    ],
    keyTakeaways: [
      'No experiment inside a uniformly moving system reveals its speed; Poincaré’s “complete conspiracy” against ether-drift measurements is itself a law of nature.',
      'The Michelson–Morley null result follows if the longitudinal arm contracts by $\\sqrt{1 - u^2/c^2}$ and moving clocks run slow by the reciprocal factor — but only Einstein made these consequences of a new space-time.',
      'The light clock makes time dilation a matter of geometry: the zigzag light path is longer, and no clock of any construction can disagree without revealing absolute motion.',
      'Muons with proper lifetime $2.2 \\times 10^{-6}$ s reach the ground from 10 km because their clocks run slow by $\\gamma = 1/\\sqrt{1 - u^2/c^2}$.',
      'The Lorentz transformation mixes space and time; the $ux/c^2$ term destroys absolute simultaneity — events simultaneous in one frame differ by $u(x_1 - x_2)/c^2$ in another.',
      'Mass rises as $m = m_0/\\sqrt{1 - v^2/c^2}$: one part in billions for a satellite, 2000-fold for synchrotron electrons — and $E = mc^2$ with rest energy $m_0c^2$ is its flip side.',
    ],
    quiz: [
      {
        q: 'Michelson and Morley aligned one arm of their interferometer along the earth’s orbital motion (about 18 mi/sec). What did they observe?',
        options: [
          'A fringe shift showing the earth moves at 18 mi/sec through the ether',
          'A fringe shift showing the ether is dragged along with the earth',
          'No shift at all — the velocity of the earth through the ether could not be detected',
          'A shift only when the apparatus was rotated by exactly 45 degrees',
        ],
        answer: 2,
        explanation: 'The apparatus was amply sensitive to the expected effect, but the result was null. It took eighteen years before the negative result was finally explained, by Einstein.',
      },
      {
        q: 'In the moving light clock, why does the light take longer between clicks as judged by the outside observer?',
        options: [
          'The light itself slows down to $\\sqrt{c^2 - u^2}$ in the moving frame',
          'The light still travels at $c$ but follows a longer zigzag diagonal path across the moving rod',
          'The rod contracts, so the light has less distance to cover but the mirror recoils',
          'The mirrors absorb energy from the light on each bounce',
        ],
        answer: 1,
        explanation: 'The vertical rate of progress is $\\sqrt{c^2 - u^2}$ because the diagonal light path has length $c$ while the rod advances at $u$. The same Pythagorean argument produced the square roots of the Michelson–Morley analysis.',
      },
      {
        q: 'A muon moving at $9/10$ the speed of light has a proper lifetime of $2.2 \\times 10^{-6}$ s. Its apparent lifetime to us is:',
        options: [
          '$2.2 \\times 10^{-6}$ s — lifetimes are unaffected by motion',
          '$(2.2 \\times 10^{-6})\\sqrt{1 - 81/100} \\approx 0.96 \\times 10^{-6}$ s',
          '$(2.2 \\times 10^{-6})/\\sqrt{1 - 81/100} \\approx 5.0 \\times 10^{-6}$ s',
          '$2.2 \\times 10^{-6} \\times (10/9)$ s',
        ],
        answer: 2,
        explanation: 'The lifetime is stretched by $1/\\sqrt{1 - v^2/c^2}$; with $v = 0.9c$ the square root is $\\sqrt{0.19} \\approx 0.436$, giving about $5\\ \\mu$s. Measured values for muons of different speeds agree closely with this formula.',
      },
      {
        q: 'According to the Lorentz contraction hypothesis, what happens to the arms of the moving Michelson–Morley apparatus?',
        options: [
          'Both arms shrink equally by the factor $\\sqrt{1 - u^2/c^2}$',
          'Only the arm parallel to the motion shrinks; the transverse arm is unchanged',
          'Both arms stretch by $1/\\sqrt{1 - u^2/c^2}$',
          'Nothing shrinks — instead the light slows down along the motion',
        ],
        answer: 1,
        explanation: 'Transverse lengths cannot change (else passing observers could mark each other’s sticks and detect absolute motion), so only the arm along the motion contracts, making the two round-trip times equal.',
      },
      {
        q: 'Satellites orbit the earth at about 5 mi/sec. Roughly how large is the relativistic correction to their mass?',
        options: [
          'About one percent',
          'About one part in a thousand',
          'About one part in two to three billion',
          'Completely negligible — zero to all measurable accuracy',
        ],
        answer: 2,
        explanation: 'With $v/c = 5/186{,}000$, the correction $\\tfrac{1}{2}v^2/c^2$ is of order $10^{-10}$ — nearly impossible to observe directly, which is why the law was discovered theoretically before experimentally.',
      },
    ],
  },

  // ------------------------------------------------------------------ 9.2
  {
    sectionId: 'hall-ch37-s23',
    readingTime: 10,
    intro: 'Once the Lorentz transformation replaces Galileo’s, even the humble arithmetic of “how fast is it going relative to me?” changes: half of $c$ plus half of $c$ is only four-fifths of $c$. This section follows Feynman through the collision arguments that force the momentum law $p = \\gamma m_0 v$, show that energy itself has inertia, and end at the two most useful formulas in relativistic particle physics: $E^2 - p^2c^2 = m_0^2c^4$ and $E = pc$ for the photon.',
    objectives: [
      'Add velocities relativistically and explain why $c$ is an unreachable invariant limit',
      'Reconstruct Feynman’s collision argument that the momentum coefficient must be $m = m_0/\\sqrt{1 - v^2/c^2}$',
      'Explain why two equal objects that stick together must form a body heavier than $2m_0$, and what this means for the conservation laws',
      'Apply $E = \\gamma m_0 c^2$, the invariant $E^2 - p^2 c^2 = m_0^2 c^4$, and $pc = Ev/c$ to accelerator and annihilation problems',
      'Quantify mass–energy conversion in fission and in the electron–positron experiment',
    ],
    concepts: [
      {
        term: 'Relativity and the philosophers',
        kind: 'insight',
        statement: 'Whether a thing is measurable is not to be decided a priori by thought alone, but by experiment — and it is only uniform straight-line motion that cannot be detected without looking outside.',
        detail: 'The “cocktail-party philosophers” who say “all is relative” are answering a triviality; those who say “obviously one cannot measure velocity without looking outside” are claiming something experiment must decide. Give them a concrete case — light going 186,000 mi/sec inside a car that itself goes 100,000 mi/sec still goes 186,000 mi/sec past the ground observer — and the obviousness evaporates. Meanwhile rotation IS detectable without looking outside: a Foucault pendulum or the centrifugal flinging in a rotating room reveals it. The utility for physicists: even long-verified laws may be wrong (Newton’s were), strange ideas need only agree with experiment, and studying the transformations that leave laws unchanged is a powerful way to find new ones.',
      },
      {
        term: 'Relativistic addition of velocities',
        kind: 'law',
        statement: 'An object moving at $v_x\'$ inside a ship that moves at $u$ has ground-frame velocity $$v_x = \\frac{u + v_x\'}{1 + uv_x\'/c^2}$$ — the “sum” of two velocities is always corrected by the denominator $1 + uv/c^2$.',
        detail: 'Substituting $x\' = v_x\'t\'$ into the inverse Lorentz transformation and dividing distance by time, the square roots cancel and this law drops out. If the object inside is light itself, $v_x\' = c$ gives $v = (u + c)/(1 + u/c) = c$: the theory was built to do exactly this, and it had better work. Low velocities add the old way because $uv/c^2$ is then negligible.',
      },
      {
        term: 'Transverse velocities shrink',
        kind: 'law',
        statement: 'A sidewise velocity measured from the ground is reduced: $$v_y = v_y\'\\sqrt{1 - u^2/c^2}$$ when the ship moves along $x$ at $u$.',
        detail: 'The elegant proof needs no algebra: put a light clock and a “particle clock” side by side in the ship, the particle bouncing at exactly $1/n$ the speed of light so that every $n$-th light click coincides with a particle click. Coincidences are coincidences in any frame, so the same ratio must hold in the ground frame — and the light’s vertical rate is down by $\\sqrt{1 - u^2/c^2}$. This is the transformation we need for Feynman’s collision proof of the mass law below.',
      },
      {
        term: 'Why Newtonian momentum fails',
        kind: 'theorem',
        statement: 'If momentum is written $\\mathbf{p} = m_v\\mathbf{v}$ with the coefficient an unknown function of speed, the principle of relativity applied to one elastic collision between equal particles forces $$\\frac{m_w}{m_v} = \\sqrt{1 - u^2/c^2}$$ and, in the limit of slow vertical motion, $$m_u = \\frac{m_0}{\\sqrt{1 - u^2/c^2}}.$$',
        detail: 'Two equal particles collide elastically and depart with equal speeds at some angle; viewed from a car riding along with the horizontal motion, particle 1 goes straight up and down at speed $w$ while particle 2 flies past obliquely. Momentum conservation in the vertical direction reads $2m_w w = 2m_v w\\sqrt{1 - u^2/c^2}$ (the oblique particle’s vertical speed is the shrunken transverse velocity). No assumption about the force law enters — only conservation of momentum and energy plus the relativity of the two views.',
      },
      {
        term: 'Energy has inertia',
        kind: 'insight',
        statement: 'Two equal objects moving oppositely at speed $w$ that collide and stick form a stationary body of mass $M_0 = 2m_w$ — **greater than the sum of the rest masses**, the excess being exactly the kinetic energy brought in, divided by $c^2$.',
        detail: 'Viewed from an elevator drifting past at a tiny speed $u$, momentum conservation on the vertical components gives $M_0 = 2m_w$ directly. In Newtonian mechanics “perfectly inelastic” collisions could still conserve mass; in relativity they cannot — the composite remembers the energy of the collision. Nature obliges: a K-meson disintegrates into two pions by the same law $M_0 = 2m_w$, and it is pointless to ask “which part of the K is which pion,” since it also decays into three. We therefore give up separating a particle’s energy into rest energy of parts, kinetic and potential energy, and simply say: total energy = mass in motion times $c^2$.',
      },
      {
        term: 'Total energy and kinetic energy',
        kind: 'law',
        statement: 'The total energy of a particle is $E = \\gamma m_0 c^2$, and the work done by forces on it produces $$\\Delta T = (m - m_0)c^2 = \\frac{m_0c^2}{\\sqrt{1 - v^2/c^2}} - m_0c^2,$$ which for slow speeds reduces to the Newtonian $\\tfrac{1}{2}m_0v^2$.',
        detail: 'A mass $M$ measured at rest that fissions into two equal fast pieces of rest mass $m_0$ liberates $E = (M - 2m_0)c^2$ when the pieces are stopped — the formula used to estimate fission energy about six months before the first test, from the known masses of uranium and its fragments (iodine, xenon and neighbors). Einstein was publicly named the “father” of the bomb for being able to compute ahead of time how much energy a given process would release; the newspapers, not the physics, were at fault. Even chemistry fits: weighing carbon dioxide against carbon and oxygen would in principle reveal the heat of formation, but the mass differences are too small to measure.',
      },
      {
        term: 'The invariant relation',
        kind: 'theorem',
        statement: 'Velocity, momentum and total energy are linked by $$E^2 - p^2c^2 = m_0^2c^4 \\qquad\\text{and}\\qquad pc = \\frac{Ev}{c}.$$ The first combination is the same in every coordinate system.',
        detail: 'These relations, easily proved, are what actually get used in practice — the mass-velocity formula itself is rarely pulled out. In units with $c = 1$ they read $E^2 - p^2 = m_0^2$ and $p = Ev$, the form in which Chapter 9.3 will recognize $E$ and $\\mathbf{p}$ as the time and space parts of a single four-vector. They are the working tools of every accelerator calculation.',
      },
      {
        term: 'The photon: zero rest mass',
        kind: 'law',
        statement: 'A photon carries energy $E = h\\nu$ and momentum $p = h/\\lambda$; since $\\nu = c/\\lambda$, necessarily $$E = pc,$$ which is the statement that its rest mass is zero.',
        detail: 'What happens when a zero-rest-mass particle stops? It never stops — it always goes at the speed $c$, and it can (and does) have energy even with no rest mass, by perpetually moving at $c$. A general particle satisfies $p = Ev/c^2$; setting $v = c$ reproduces $p = E/c$. An electron and a positron coming together at rest annihilate into two gamma rays, each measured with energy $m_0c^2$ — the direct experimental determination of the energy belonging to rest mass, and a preview of the quantum machinery of Chapter 15.',
      },
    ],
    examples: [
      {
        title: 'Half and half makes four-fifths',
        problem: 'Inside a spaceship an object is fired forward at half the speed of light while the ship itself travels at half the speed of light. How fast does the object move relative to the ground?',
        steps: [
          { label: 'Step 1: Newton would say', text: 'Galilean addition gives $\\tfrac{1}{2}c + \\tfrac{1}{2}c = c$ — suspiciously exactly the speed of light, and anything faster is forbidden.' },
          { label: 'Step 2: Apply the relativistic law', text: 'With $u = c/2$ and $v_x\' = c/2$: $$v_x = \\frac{\\tfrac{1}{2}c + \\tfrac{1}{2}c}{1 + \\tfrac{1}{4}} = \\frac{c}{5/4} = \\tfrac{4}{5}c.$$' },
          { label: 'Step 3: Interpret', text: 'In relativity, “half” and “half” does not make “one” — it makes only four-fifths. Low velocities add the familiar way because $uv/c^2$ is then effectively zero.' },
          { label: 'Step 4: The limiting case', text: 'If the object inside is light ($v_x\' = c$): $v_x = (u + c)/(1 + u/c) = c$. Light goes at $c$ for every observer — the design requirement that started the whole theory.' },
        ],
        result: 'The object moves at $0.8c$, not $c$; and light emitted inside the same ship still passes the ground observer at exactly $c$.',
      },
      {
        title: 'The Caltech synchrotron: racing light against electrons',
        problem: 'The synchrotron electrons are deflected with a magnetic field 2000 times stronger than Newton’s laws would need — their mass is 2000 times $m_0$. How close to $c$ do they run, and by how much would light beat them over the 700 feet to Bridge Lab?',
        steps: [
          { label: 'Step 1: Translate the mass ratio', text: '$m/m_0 = 2000$ means $1/\\sqrt{1 - v^2/c^2} = 2000$, so $1 - v^2/c^2 = 1/4{,}000{,}000$.' },
          { label: 'Step 2: Extract the speed deficit', text: 'With $v/c = \\sqrt{1 - 2.5 \\times 10^{-7}} \\approx 1 - 1.25 \\times 10^{-7}$, the electrons differ from light by one part in eight million.' },
          { label: 'Step 3: The race', text: 'Over $D = 700$ ft, light gains $D(1 - v/c) \\approx 700 \\times 1.25 \\times 10^{-7}$ ft $= 8.75 \\times 10^{-5}$ ft, i.e. about $10^{-3}$ inch.' },
          { label: 'Step 4: Interpret', text: 'A thousandth of an inch is about a quarter of the thickness of a piece of paper — light wins, but barely. (In air, visible light actually loses to gamma rays and even to the electrons, because of the refractive index.)' },
        ],
        result: 'A 2000-fold mass increase puts $v$ within one part in $8 \\times 10^6$ of $c$; over 700 feet the light leads by roughly a thousandth of an inch. Enormous momentum, barely any extra speed.',
      },
      {
        title: 'The fission ledger: from mass defect to kilotons',
        problem: 'A 20-kiloton atomic bomb converts its reacting material entirely to energy. Estimate the mass lost, and check the arithmetic against the electron–positron annihilation experiment.',
        steps: [
          { label: 'Step 1: Energy of 20 kilotons', text: 'One kiloton of TNT releases about $4.2 \\times 10^{12}$ J, so $W \\approx 20 \\times 4.2 \\times 10^{12} = 8.4 \\times 10^{13}$ J.' },
          { label: 'Step 2: Convert to mass', text: '$\\Delta m = W/c^2 = 8.4 \\times 10^{13} / 9 \\times 10^{16} \\approx 9.3 \\times 10^{-4}$ kg — the dirt after the explosion is lighter by about 1 gram.' },
          { label: 'Step 3: The general bookkeeping', text: 'For fission: a nucleus of measured mass $M$ splits (nearly in half) into fragments of known rest mass $m_0$; when stopped, each fragment deposits $(m_w - m_0)c^2$, so the total liberated energy is $E = (M - 2m_0)c^2$ — computable ahead of time from a table of masses.' },
          { label: 'Step 4: The clean test', text: 'An electron and a positron at rest ($m_0$ each) annihilate into two gamma rays of measured energy $m_0c^2$ each — a direct determination of the energy associated with rest mass, with no fragments or approximations.' },
        ],
        result: 'Twenty kilotons corresponds to roughly 1 gram of mass: $\\Delta E = \\Delta(m c^2)$ in action. Einstein’s role was telling us ahead of time how much energy a given process would release — the release itself is physics, not personality.',
      },
    ],
    keyTakeaways: [
      'Velocities combine as $v = (u + v\')/(1 + uv\'/c^2)$: half plus half is four-fifths, and light inside any moving ship still goes at $c$.',
      'Transverse velocities shrink by $\\sqrt{1 - u^2/c^2}$ — the fact that powers the collision proof of $m = m_0/\\sqrt{1 - v^2/c^2}$.',
      'Momentum $p = \\gamma m_0 v$ grows without bound while $v$ saturates just below $c$: a steady force piles up momentum, not speed.',
      'Two objects that collide and stick weigh more than $2m_0$ by exactly the kinetic energy brought in ($M_0 = 2m_w$) — energy has inertia, and strictly inelastic collisions do not exist in relativity.',
      'The invariant $E^2 - p^2c^2 = m_0^2c^4$ with $pc = Ev/c$ are the working formulas of particle physics; $E = \\gamma m_0 c^2$ shifts the energy origin to include rest energy.',
      'Fission energy is bookkeeping on a mass table, $E = (M - 2m_0)c^2$; a 20-kiloton release is about 1 gram of mass.',
      'The photon has $m_0 = 0$ and $E = pc$: it has energy by never stopping, at exactly $c$.',
    ],
    quiz: [
      {
        q: 'An object inside a spaceship moves at $c/2$ relative to the ship, and the ship moves at $c/2$ relative to the ground. The object’s speed relative to the ground is:',
        options: [`$c$`, `$0.8c$`, `$0.96c$`, `$0.75c$`],
        answer: 1,
        explanation: 'The relativistic law gives $v = (c/2 + c/2)/(1 + 1/4) = c/(5/4) = 4c/5$. In relativity, “half and half” makes only four-fifths.',
      },
      {
        q: 'Two identical objects moving oppositely at speed $w$ collide and stick. The mass of the stationary composite is:',
        options: [
          'Exactly $2m_0$, the sum of the rest masses',
          '$2m_w$, greater than $2m_0$ — the excess is the kinetic energy brought in',
          'Less than $2m_0$, since energy was radiated away',
          'Undefined, because inelastic collisions are forbidden in relativity',
        ],
        answer: 1,
        explanation: 'Viewed from a slowly passing elevator, vertical momentum conservation forces $M_0 = 2m_w$. The composite must be heavier than its parts’ rest masses even though it is at rest — energy has inertia.',
      },
      {
        q: 'For a photon, the relation between energy and momentum is:',
        options: [
          `$E = pc$, because its rest mass is zero and it moves at $c$`,
          '$E = \\tfrac{1}{2}pc$, because it has no rest energy',
          '$E = mc^2$ with the ordinary rest mass of the electron',
          '$E = p^2/2m$ as for any free particle',
        ],
        answer: 0,
        explanation: 'With $E = h\\nu$, $p = h/\\lambda$ and $\\nu = c/\\lambda$, the photon must satisfy $E = pc$. A zero-rest-mass particle never stops; it carries energy by perpetually moving at $c$.',
      },
      {
        q: 'The Caltech synchrotron needs deflecting fields 2000 times stronger than Newton predicts. The electrons’ speed differs from $c$ by:',
        options: [
          'One part in 2000',
          'One part in 8,000,000',
          'One part in 4,000,000',
          'Half the speed of light',
        ],
        answer: 1,
        explanation: '$m = 2000m_0$ means $1 - v^2/c^2 = 1/4{,}000{,}000$, so $v/c \\approx 1 - 1.25 \\times 10^{-7}$: one part in eight million. Over 700 feet, light beats them by about a thousandth of an inch.',
      },
      {
        q: 'Which pair of relations is Feynman’s recommended working toolkit for relativistic energy problems?',
        options: [
          `$E = mc^2$ and $F = ma$`,
          `$E^2 - p^2c^2 = m_0^2c^4$ and $pc = Ev/c$`,
          `$p = mv$ and $E = \\tfrac{1}{2}mv^2$`,
          '$E = m_0c^2$ and $p = mv$ only',
        ],
        answer: 1,
        explanation: 'The mass-velocity formula itself is rarely used; the invariant $E^2 - p^2c^2 = m_0^2c^4$ (same in every frame) together with $pc = Ev/c$ solves most accelerator problems directly.',
      },
    ],
  },

  // ------------------------------------------------------------------ 9.3
  {
    sectionId: 'phys-ch9-s3',
    readingTime: 10,
    intro: 'Minkowski’s prophecy closes Feynman’s lecture: “Space of itself, and time of itself will sink into mere shadows, and only a kind of union between them shall survive.” This section builds that union. Space and time mix in the Lorentz transformation exactly as width and depth mix when you walk around an object — and once the geometry is taken seriously, “moving clocks run slow” stops being a mechanical trick and becomes a fact about angles in a four-dimensional world.',
    objectives: [
      'Explain the width–depth analogy and identify events, world lines and the light cone in a space-time diagram',
      'Compute the invariant interval and classify separations as time-like, space-like or light-like',
      'Map the three regions around an event: affective past, affective future, and the unobservable “elsewhere”',
      'Transform energy and momentum as a four-vector and use $E^2 - p^2 = m_0^2$ in $c = 1$ units',
      'Resolve the twin paradox with the acceleration asymmetry and the muon-in-a-circle experiment',
    ],
    concepts: [
      {
        term: 'Space-time, events and world lines',
        kind: 'definition',
        statement: 'Space-time is the four-dimensional geometry in which a **point** $(x, y, z, t)$ is an **event** and a permanent particle is a **line**; a disintegrating particle is a forked line, and light is a line of fixed slope.',
        detail: 'Feynman’s analogy: an object has an “apparent width” and an “apparent depth,” but these are not fundamental — step aside and they mix by the rotation formulas of Chapter 3. If we could never walk around objects, width and depth would seem utterly different in character. We are in exactly that position with space and time: our brains never recalibrate $x$ and $t$ because we have never moved at anything near $c$. Plot $x$ horizontally and $t$ vertically: a particle at rest is a vertical line, a drifting particle a slanted one, and light a line at a fixed slope.',
      },
      {
        term: 'The interval',
        kind: 'theorem',
        statement: 'The combination $$c^2t\'^2 - x\'^2 - y\'^2 - z\'^2 = c^2t^2 - x^2 - y^2 - z^2$$ is the same in every uniformly moving coordinate system — the space-time analog of the distance preserved by rotations.',
        detail: 'Nature is telling us time and space should be measured in the same units: one second of time is $3 \\times 10^{8}$ meters — the distance light goes in a second. One meter of time is the time light takes to go one meter, about 3.3 billionths of a second. With $c = 1$ the Lorentz transformation reads $x\' = (x - ut)/\\sqrt{1 - u^2}$, $t\' = (t - ux)/\\sqrt{1 - u^2}$, and the invariant is $t^2 - x^2 - y^2 - z^2$ — much easier to remember, with the $c$’s restored afterwards by dimensional analysis. Note the sign difference from ordinary geometry: the transformation is a “rotation” in space and time, but not an ordinary one, which is why the moving observer’s axes tilt symmetrically about the light line rather than rotating rigidly.',
      },
      {
        term: 'Time-like, space-like and the light cone',
        kind: 'definition',
        statement: 'Separations with positive interval-squared are **time-like**; negative (imaginary interval) are **space-like**; the boundary — the **light cone** at 45 degrees in a space-time diagram — is the locus of zero interval, the paths of light rays.',
        detail: 'That the interval is zero for every light path immediately re-proves the invariance of the speed of light: the interval is the same in all frames, zero in one means zero in all. Time-like separations admit a frame in which the two events happen at the same place; space-like separations admit a frame in which they happen at the same time. The classification is a property of the pair of events, not of any observer.',
      },
      {
        term: 'Past, present and future: the three regions',
        kind: 'insight',
        statement: 'Around any event $O$, the light cone divides space-time into the **affective past** (events that can have influenced $O$), the **affective future** (events $O$ can influence), and the **elsewhere** — region 1, which can neither affect us now nor be affected by us now.',
        detail: 'A particle or signal slower than light can reach $O$ from the affective past, and we can “hit” the affective future by shooting bullets at less than $c$. But if the sun explodes “right now,” we learn of it only eight minutes later; looking at Alpha Centauri we see it as it was four years ago, and what it is doing “now” is a notion of our mind — it depends on the coordinate system, and no experiment can define it. There are no fortune tellers who can even tell us the present at any reasonable distance: the “elsewhere” is unobservable now in principle, not merely in practice.',
      },
      {
        term: 'Proper time: the clock on the world line',
        kind: 'insight',
        statement: 'For two time-like separated events on a particle’s path, the invariant $c^2\\tau^2 = c^2t^2 - x^2 - y^2 - z^2$ defines the **proper time** $\\tau$ — the reading of the clock that travels between them; “moving clocks run slow” is the geometric statement that a tilted world line accumulates less proper time between the same events.',
        detail: 'This is why the slowing of clocks is geometry, not mechanics: the interval between two events is fixed, and how it splits into “space covered” and “time elapsed” depends on the world line taken. A clock carried along any time-like path ticks off the interval along that path. No machinery of the clock is involved — which is why the argument of Section 9.1 needed no knowledge of what makes muons decay.',
      },
      {
        term: 'The four-vector momentum',
        kind: 'law',
        statement: 'The four quantities $(p_x, p_y, p_z, E)$ transform exactly like $(x, y, z, t)$: $$p_x\' = \\frac{p_x - uE}{\\sqrt{1 - u^2}}, \\quad p_y\' = p_y, \\quad p_z\' = p_z, \\quad E\' = \\frac{E - up_x}{\\sqrt{1 - u^2}}$$ in $c = 1$ units — with $E^2 - p^2 = m_0^2$ as its invariant “length.”',
        detail: 'In these units energy and mass are the same thing (an electron rest mass is quoted as $0.511 \\times 10^{6}$ eV), and momentum is mass times velocity. The derivation is a direct substitution of the velocity transformation into $E = m_0/\\sqrt{1 - v^2}$, $p = m_0v/\\sqrt{1 - v^2}$ — and the $E$ and $p_x$ results match the $t\'$ and $x\'$ formulas term for term. The lesson for conservation laws: three-momentum conservation alone is like writing only two components of a vector equation — incomplete. Relativity demands the fourth (time) component, and the fourth component is the conservation of energy. Notation $p_\\mu$, with $\\mu = t, x, y, z$; four-vectors add component by component.',
      },
      {
        term: 'The twin paradox resolved',
        kind: 'insight',
        statement: 'Paul flies away at high speed and returns younger than Peter — and this is right, not a paradox: **the one who has felt the accelerations, who saw things jam against the walls, is the one who was moving**.',
        detail: 'The apparent symmetry (“from Paul’s view, Peter was moving”) breaks at the turnaround: rockets fired, things jammed up against one wall — Peter felt nothing. The muon provides the clean experimental corroboration: muons made in the laboratory and driven in a curve by a magnet last exactly as much longer as they do when moving in a straight line at the same speed, so even circular motion dilates the clock. One could compare a muon left standing with one that went around a complete circle, and surely the circling one would last longer. As with the blocks of Chapter 4, the bookkeeping is only strange, not contradictory.',
      },
      {
        term: 'The photon in space-time',
        kind: 'insight',
        statement: 'A photon’s energy and momentum transform by the same four-vector rule, so different observers see different frequencies — this is the Doppler effect, computable directly from the momentum transformation with $E = h\\nu$.',
        detail: 'Since $E^2 - p^2 = m_0^2 = 0$ for the photon, all observers agree it moves at $c$ while disagreeing about its energy. Section 9.4 works this out with the wave four-vector $(\\omega, k_x, k_y, k_z)$, which parallels $(t, x, y, z)$ in the same way the momentum four-vector does — one more hint that quantum theory and relativity would have to agree, as Chapter 15 confirms with $p_\\mu = \\hbar k_\\mu$.',
      },
    ],
    examples: [
      {
        title: 'The sun explodes “right now”',
        problem: 'The sun is $1.5 \\times 10^{11}$ m away (about 500 light-seconds). Classify the space-time separation between “the sun explodes at this instant” and “you, reading this sentence at the same instant.”',
        steps: [
          { label: 'Step 1: Set up the interval', text: 'With $\\Delta x = 1.5 \\times 10^{11}$ m and $\\Delta t = 0$ in your frame, the interval-squared is $c^2\\Delta t^2 - \\Delta x^2 = -(1.5 \\times 10^{11})^2$ — negative, hence space-like.' },
          { label: 'Step 2: Interpret', text: 'The explosion sits in region 1, the “elsewhere”: it can neither affect you now nor be affected by you now, because nothing outruns light.' },
          { label: 'Step 3: Light delay', text: 'The news arrives 500 seconds later — eight minutes. Only at that later event does the separation from you become light-like; after that, time-like.' },
          { label: 'Step 4: Scale up', text: 'For Alpha Centauri the delay is four years: we see it as it was four years ago, and what it is doing “now” depends on the coordinate system — simultaneity at a distance is simply not a physical thing.' },
        ],
        result: 'The separation is space-like; “now” at the sun is a notion of our mind, undefinable by any experiment — a conclusion of geometry, not of optics.',
      },
      {
        title: 'A twin trip at 0.6c',
        problem: 'Paul leaves earth at $v = 0.6c$, coasts to a distant star, turns around sharply, and returns at the same speed. Peter waits at home. If Peter ages 10 years during the trip, how much does Paul age?',
        steps: [
          { label: 'Step 1: The dilation factor', text: 'At $v = 0.6c$: $\\gamma = 1/\\sqrt{1 - 0.36} = 1/0.8 = 1.25$.' },
          { label: 'Step 2: Split the trip', text: 'Each leg lasts 5 years of Peter-time; along a leg of proper duration $\\tau$, Peter measures $\\gamma\\tau$, so each leg costs Paul $5/1.25 = 4$ years.' },
          { label: 'Step 3: Total', text: 'Paul ages $2 \\times 4 = 8$ years to Peter’s 10 — he returns two years younger, and he is the one with the gray-traveler’s tale of the rockets firing at the turnaround.' },
          { label: 'Step 4: Why no symmetry', text: 'Peter’s world line is one straight vertical line; Paul’s is a bent path to the same two events. The one who felt the accelerations is the one who was moving — and laboratory muons driven in circles by magnets confirm that accelerated, circular motion dilates clocks identically.' },
        ],
        result: 'Paul ages 8 years, Peter 10. The asymmetry is absolute (accelerometers settle it), and muon storage rings verify the arithmetic.',
      },
      {
        title: 'Boosting the electron’s four-momentum',
        problem: 'An electron at rest has energy $E = m_0c^2 = 0.511$ MeV and zero momentum. Find its energy, momentum and speed in a frame where $\\gamma = 2$.',
        steps: [
          { label: 'Step 1: Energy scales with $\\gamma$', text: '$E = \\gamma m_0c^2 = 2 \\times 0.511 = 1.022$ MeV.' },
          { label: 'Step 2: Momentum from the invariant', text: '$pc = \\sqrt{E^2 - m_0^2c^4} = \\sqrt{2^2 - 1^2}\\,m_0c^2 = \\sqrt{3} \\times 0.511 \\approx 0.885$ MeV.' },
          { label: 'Step 3: Velocity from $pc = Ev/c$', text: 'Dividing by $E$: $v/c = pc/E = 0.885/1.022 \\approx 0.866$ — the familiar $\\sqrt{3}/2$ for $\\gamma = 2$.' },
          { label: 'Step 4: Consistency check', text: 'The four-vector transformation guarantees every other frame computes the same $E^2 - p^2c^2 = (0.511)^2$ — the invariant rest energy of the electron.' },
        ],
        result: 'At $\\gamma = 2$ the electron carries $E = 1.022$ MeV and $pc \\approx 0.885$ MeV at $v \\approx 0.866c$; the mass never appears as a velocity-dependent fudge factor, only as the invariant length of the energy–momentum four-vector.',
      },
    ],
    keyTakeaways: [
      'Events, world lines and the light cone make dynamics geometric: a particle is a line in space-time, a decay a fork, light a line of fixed slope.',
      'The interval $c^2t^2 - x^2 - y^2 - z^2$ is invariant under Lorentz transformations, as distance is under rotations; measure time in meters (3.3 billionths of a second per meter) and the $c$’s disappear.',
      'The light cone splits space-time into affective past, affective future and an unobservable elsewhere — “now” at a distance is coordinate-dependent, not physical.',
      'Proper time is the clock reading along a world line; less proper time accumulates on the tilted, bent path — which is why the traveling twin ages less.',
      'Energy is the time component of the four-vector $(p_x, p_y, p_z, E)$; momentum conservation without energy conservation would be a vector equation missing a component.',
      'The twin paradox is resolved by the acceleration asymmetry, and muons driven in circles by magnets confirm time dilation under circular motion.',
      'For the photon the four-vector has zero length: all observers agree it moves at $c$ and disagree about its energy — the Doppler effect, derived again with waves in Section 9.4.',
    ],
    quiz: [
      {
        q: 'Two events have interval-squared $c^2\\Delta t^2 - \\Delta x^2 < 0$. Their separation is:',
        options: [
          'Time-like — a frame exists in which they occur at the same place',
          'Space-like — a frame exists in which they occur at the same time',
          'Light-like — they lie on each other’s light cone',
          'Undefined, because the interval is not invariant',
        ],
        answer: 1,
        explanation: 'A negative (imaginary) interval is space-like: no signal slower than light can connect the events, and some observer finds them simultaneous. Feynman calls such intervals “more like space than like time.”',
      },
      {
        q: 'Which region of space-time around an event $O$ contains events that $O$ can influence?',
        options: [
          'The affective past (inside the past light cone)',
          'The elsewhere (outside the light cone)',
          'The affective future (inside the future light cone)',
          'The light cone itself only',
        ],
        answer: 2,
        explanation: 'We can “hit” anything in the affective future by sending particles or signals at speeds below $c$. The affective past can influence $O$; the elsewhere can do neither — nothing outruns light.',
      },
      {
        q: 'In the four-vector formed from momentum and energy, which quantity plays the role of the time component?',
        options: [
          'The momentum $p_x$ along the motion',
          'The total energy $E$',
          'The rest mass $m_0$',
          'The kinetic energy $E - m_0c^2$',
        ],
        answer: 1,
        explanation: 'Under a boost, $E\' = (E - up_x)/\\sqrt{1 - u^2}$ exactly as $t\' = (t - ux)/\\sqrt{1 - u^2}$: energy transforms like time, and its conservation is the time component of momentum conservation.',
      },
      {
        q: 'How long is “one second” when space and time are measured in the same units?',
        options: [
          '186,000 meters',
          '$3 \\times 10^{8}$ meters — the distance light travels in one second',
          '3.3 billionths of a meter',
          'One second cannot be expressed as a distance',
        ],
        answer: 1,
        explanation: 'With $c = 1$, a second of time is $3 \\times 10^{8}$ m of distance; conversely a meter of time is about $3.3$ billionths of a second. This is why Feynman drops the $c$’s — they are only a conversion of units.',
      },
      {
        q: 'What settles the twin paradox — which twin is “really” moving?',
        options: [
          'Nothing — the situation is perfectly symmetric and the ages must agree',
          'The traveling twin is younger because he felt the accelerations at the turnaround',
          'The stay-at-home twin is younger because he was “at rest in the universe”',
          'Whichever twin fires the rockets after the reunion',
        ],
        answer: 1,
        explanation: 'To compare, the traveler must come back — and the one who comes back is the one who was moving: rockets fired, things jammed against a wall. Muons driven in circles by magnets last longer too, exactly as when moving straight.',
      },
    ],
  },

  // ------------------------------------------------------------------ 9.4
  {
    sectionId: 'hall-ch37-s24',
    readingTime: 10,
    intro: 'This is the last chapter of the classical theory of light: everything here concerns radiation from sources that move — fast. A single geometric recipe (translate the motion of the charge backwards at the speed of light and differentiate twice) explains synchrotron light, the Crab nebula’s polarized glow, bremsstrahlung, the Doppler effect and even radiation pressure, with the Lorentz transformation of Chapter 9.1 quietly doing the bookkeeping underneath.',
    objectives: [
      'Construct the apparent-motion diagram of a moving charge and read the radiated field off its curvature',
      'Explain why synchrotron radiation comes in sharp pulses and estimate its frequency range',
      'Apply the momentum rule $p = qBR$ to compute accelerator orbit radii',
      'Derive the relativistic Doppler formula three ways and compute frequency shifts at $0.6c$',
      'State the four-vector transformation of $\\omega$ and $k$, the aberration of starlight, and the momentum of light',
    ],
    concepts: [
      {
        term: 'The field of a moving charge',
        kind: 'law',
        statement: 'Far from any moving charge, $$\\mathbf{E} = -\\frac{q}{4\\pi\\epsilon_0 c^2 R_0}\\,\\frac{d^2\\mathbf{e}_{R\'} }{dt^2}, \\qquad \\mathbf{B} = -\\frac{\\mathbf{e}_{R\'} \\times \\mathbf{E}}{c},$$ where $\\mathbf{e}_{R\'}$ points toward the **retarded** — apparent — position of the charge.',
        detail: 'The unit vector does not aim at where the charge is, but at where it seems to be, information traveling only at the finite speed $c$. Only the transverse coordinates $x\' = x(\\tau)$, $y\' = y(\\tau)$ matter at large distance, and the observer time $t$ is related to the source time $\\tau$ by $t = \\tau + R_0/c + z(\\tau)/c$. This last term — the extra retardation when the charge moves along the line of sight — is the only change needed to make all the earlier radiation formulas valid for arbitrary speed.',
      },
      {
        term: 'The apparent-motion construction',
        kind: 'method',
        statement: 'To find the field of a moving charge: take its actual motion and **translate it backwards at the speed $c$**; the resulting curve of $x\'(t)$ and $y\'(t)$ has an acceleration whose components, times $-q/4\\pi\\epsilon_0c^2R_0$, are the field components observed.',
        detail: 'Because $ct = c\\tau + z(\\tau)$, one literally plots the source motion while sweeping it away at speed $c$ — a purely geometric solution, exact as the original formula. A slowly oscillating charge swept away becomes a gentle cosine wave (the radiation of Chapter 8 re-derived); a charge circling at nearly $c$ becomes a curve with knife-edge cusps.',
      },
      {
        term: 'Synchrotron radiation',
        kind: 'definition',
        statement: 'A charge moving in a circle at very nearly $c$ traces a **curtate cycloid** in the apparent-motion diagram; near each cusp the second derivative is enormous, so the field arrives as **one sharp pulse per revolution period $T_0$**, beamed in a narrow cone along the direction of motion.',
        detail: 'For the Caltech machine the radius extension needed to reach speed $c$ is only one part in eight million of the radius, so the time scale near the cusp is compressed by roughly $(8 \\times 10^6)$ — twice (the acceleration involves a second derivative). Naively the wavelength would shrink by $64 \\times 10^{12}$ from the 20-meter orbital wavelength into the x-ray region; the honest calculation (including the whole neighborhood of the cusp, not just its tip) gives the three-halves power of that factor, still far into the ultraviolet and beyond. The light is polarized with $\\mathbf{E}$ perpendicular to the magnetic field — a diagnostic we use below on the Crab nebula.',
      },
      {
        term: 'The momentum rule p = qBR',
        kind: 'law',
        statement: 'A particle of charge $q$ and momentum $p$ in a uniform magnetic field $B$ circles at radius $R$ with $$p = qBR, \\qquad\\text{or}\\qquad pc(\\text{eV}) = 3\\times 10^{8}\\,(q/q_e)\\,BR$$ in mks units.',
        detail: 'The force $q\\mathbf{v} \\times \\mathbf{B}$ is perpendicular to $\\mathbf{v}$, so speed and energy stay constant while the momentum vector turns; matching the turning rate to the orbital rate gives $p = qBR$ and $\\omega = qvB/p$. This is the standard way to measure a fast particle’s momentum: bend it and photograph the track. Units: one weber/m² equals $10^{4}$ gauss; iron electromagnets top out near $1.5 \\times 10^{4}$ gauss, superconducting windings now exceed $10^{5}$ gauss, and the earth’s field is a few tenths of a gauss at the equator.',
      },
      {
        term: 'Cosmic synchrotron radiation',
        kind: 'insight',
        statement: 'The Crab nebula — the 1054 supernova recorded by Chinese and Japanese astronomers — emits a **continuous, strongly polarized** spectrum from its center: electrons spiraling in interstellar magnetic fields, radiating by exactly the synchrotron mechanism.',
        detail: 'The outer filaments glow at natural atomic frequencies (the red is nitrogen); the central fuzzy patch has no special frequencies at all, yet it is transparent, not lit-up dust. Photographed through polarizers at right angles, the two pictures differ — where one is bright and the other black, the electric field is fully polarized, mapping the direction of the local magnetic field. The electrons have kept their enormous energy for 900 years since the explosion; how, says Feynman, is still not thoroughly understood. Radiation from charges is treated classically throughout; the quantum view returns in Chapter 15.',
      },
      {
        term: 'Bremsstrahlung',
        kind: 'definition',
        statement: 'A fast electron passing near a nucleus is deflected; because it approaches at nearly $c$, the backward-translated motion compresses the kink into a **very sharp curvature**, and the electron spits radiation forward along its direction of motion.',
        detail: 'The compression is in proportion to $c - v$: for $1 - v/c \\ll 1$ the field in the forward direction is enormous. This “braking radiation” is why synchrotrons are used less to make high-energy electrons than to make energetic photons: pass the electrons through a solid tungsten target and let bremsstrahlung manufacture gamma rays.',
      },
      {
        term: 'The relativistic Doppler effect',
        kind: 'theorem',
        statement: 'A source moving toward the observer at speed $v$ emits its natural frequency $\\omega_0$ slowed by time dilation to $\\omega_1 = \\omega_0\\sqrt{1 - v^2/c^2}$, and the wavefronts arrive compressed, so $$\\omega = \\frac{\\omega_0\\sqrt{1 - v^2/c^2}}{1 - v/c}.$$',
        detail: 'Three derivations agree. (1) Compression: oscillations of frequency $\\omega_1$ squeezed into the interval $(1 - v/c)\\Delta\\tau$ give $\\omega = \\omega_1/(1 - v/c)$. (2) Moving observer: the man sweeping through wavefronts counts $\\omega_0 + k_0v$ radians per second, corrected by his slow clock: $\\omega = (\\omega_0 + k_0v)/\\sqrt{1 - v^2/c^2}$. (3) Lorentz transformation of the wave phase, below. Approaching light appears more violet, receding light more red. The equality of the source-moving and observer-moving results is itself a proof of time dilation — without the square roots they would disagree.',
      },
      {
        term: 'The $\\omega$, $k$ four-vector',
        kind: 'law',
        statement: 'Frequency and wave number transform together as a four-vector: $$\\omega\' = \\frac{\\omega + kv}{\\sqrt{1 - v^2/c^2}}, \\qquad k\' = \\frac{k + \\omega v/c^2}{\\sqrt{1 - v^2/c^2}},$$ with $\\mathbf{k} = 2\\pi\\hat{\\mathbf{e}}/\\lambda$ the wave vector in three dimensions.',
        detail: 'The phase $\\omega t - k_x x - k_y y - k_z z$ must be an invariant — everyone agrees where the nodes of the wave are (field zero is field zero for all), and the phase is exactly the four-vector dot product $k_\\mu x^\\mu$. Applying the transformation to oblique directions yields **aberration**: a telescope must tilt forward by $\\tan\\theta = (v/c)/\\sqrt{1 - v^2/c^2}$, equivalent to $\\sin\\theta = v/c$ — observable because the tilt reverses six months apart as the earth goes around the sun.',
      },
      {
        term: 'The momentum of light',
        kind: 'law',
        statement: 'When light is absorbed, the momentum delivered per second equals the energy absorbed per second divided by $c$: $$\\langle F \\rangle = \\frac{1}{c}\\frac{dW}{dt},$$ and reflection at normal incidence doubles the force.',
        detail: 'The mechanism: the electric field drives a charge up and down, and while it moves, the magnetic force $q\\mathbf{v} \\times \\mathbf{B}$ pushes it along the beam — with $B = E/c$, the push is $1/c$ times the work rate, whatever the oscillator. Symmetrically, an atom emitting energy $W$ recoils with $p = W/c$. In the quantum picture $W = \\hbar\\omega$ and $p = \\hbar k$ — and the identical constant in both is why quantum theory and relativity are consistent; the relations are the de Broglie rules, valid for all particles, not just photons.',
      },
    ],
    examples: [
      {
        title: 'Bending a billion-volt electron',
        problem: 'The synchrotron runs at 1 billion electron volts ($pc = 10^{9}$ eV) with a guiding field of 10,000 gauss. Compute the orbit radius and check against the actual Caltech machine.',
        steps: [
          { label: 'Step 1: Assemble the rule', text: 'In mks units, $pc(\\text{eV}) = 3\\times 10^{8}(q/q_e)BR$; here $q = q_e$, and 10,000 gauss is 1 weber/m².' },
          { label: 'Step 2: Solve for R', text: '$R = \\dfrac{pc}{3 \\times 10^{8} B} = \\dfrac{10^{9}}{3 \\times 10^{8} \\times 1} \\approx 3.3$ meters.' },
          { label: 'Step 3: Neglect the rest energy honestly', text: 'The total energy is $W = \\sqrt{p^2c^2 + m^2c^4}$; since the electron rest energy is only $0.511 \\times 10^{6}$ eV, at $10^{9}$ eV we have $W \\approx pc$, and the speed differs from $c$ by one part in eight million.' },
          { label: 'Step 4: Compare with the machine', text: 'The actual Caltech synchrotron has radius 3.7 meters, a somewhat larger field, and 1.5 billion electron volts — the same idea at slightly grander scale.' },
        ],
        result: 'A 1-GeV electron in a 1-weber/m² field needs $R \\approx 3.3$ m — which is why synchrotrons look the way they do.',
      },
      {
        title: 'Doppler at 0.6c, checked two ways',
        problem: 'An atom radiating its natural frequency $\\omega_0$ approaches the observer at $0.6c$. Compute the observed frequency from the source formula, then check with the observer-moving formula.',
        steps: [
          { label: 'Step 1: Time dilation of the source', text: 'The moving atom’s clock runs slow: $\\omega_1 = \\omega_0\\sqrt{1 - 0.36} = 0.8\\,\\omega_0$.' },
          { label: 'Step 2: Compression of the wavefronts', text: 'The source chases its own light, so the oscillations arrive squeezed by $1/(1 - v/c) = 1/0.4 = 2.5$.' },
          { label: 'Step 3: Combine', text: '$\\omega = 0.8 \\times 2.5\\,\\omega_0 = 2\\omega_0$ — a full octave blueshift.' },
          { label: 'Step 4: The other derivation', text: 'For an observer moving at $0.6c$ toward a stationary source: $\\omega = \\omega_0(1 + 0.6)/0.8 = 2\\omega_0$. The two experiments must give the same answer — and do only because of the time-dilation square roots, which is one way to prove that relativity requires time dilation.' },
        ],
        result: 'Both routes give $\\omega = 2\\omega_0$ at $v = 0.6c$; the equality of the source-moving and observer-moving results is forced by the principle of relativity.',
      },
      {
        title: 'The push of absorbed light',
        problem: 'A beam delivers 100 watts to a perfectly absorbing surface. Find the radiation-pressure force, and compare with the force on a perfect mirror.',
        steps: [
          { label: 'Step 1: The magnetic secret', text: 'The electric field shakes the charges in the surface; while a charge moves with velocity $v$, the magnetic force $qvB$ — with $B = E/c$ — pushes it along the beam.' },
          { label: 'Step 2: Average and interpret', text: 'Averaged over the oscillation, $\\langle F \\rangle = \\langle qvE \\rangle/c$, and $qvE$ is exactly the rate $dW/dt$ at which the electric field does work on the charge — so $\\langle F\\rangle = \\frac{1}{c}\\frac{dW}{dt}$, independent of the oscillator’s details.' },
          { label: 'Step 3: Insert the power', text: 'With $dW/dt = 100$ W: $F = 100/(3 \\times 10^{8}) \\approx 3.3 \\times 10^{-7}$ N.' },
          { label: 'Step 4: The mirror', text: 'Reflection reverses the momentum of the light, so the force doubles to about $6.7 \\times 10^{-7}$ N; likewise an atom emitting energy $W$ recoils with $p = W/c$.' },
        ],
        result: 'Absorbing 100 W costs $3.3 \\times 10^{-7}$ N of radiation pressure — tiny, but exactly the momentum bookkeeping demanded by $p = E/c$, and the same rule that in quantum dress reads $p = \\hbar k$.',
      },
    ],
    keyTakeaways: [
      'The far field of a charge is set by the second derivative of the unit vector toward its retarded position: translate the motion backwards at $c$ and differentiate twice.',
      'Synchrotron radiation comes as one sharp pulse per revolution, beamed along the motion; the cusp compression pushes the wavelength from 20-meter radio waves toward the ultraviolet and x-rays.',
      'A particle’s momentum is read from its orbit: $p = qBR$, or $pc(\\text{eV}) = 3 \\times 10^{8}(q/q_e)BR$ — 1 GeV in 10,000 gauss needs $R \\approx 3.3$ m.',
      'The Crab nebula’s central light is continuous and polarized — electrons spiraling in interstellar magnetic fields, a synchrotron in the sky since 1054.',
      'Doppler shifts combine source time-dilation and wavefront compression: $\\omega = \\omega_0\\sqrt{1 - v^2/c^2}/(1 - v/c)$, and the observer-moving version agrees only if time dilation is real.',
      'Frequency and wave number form a four-vector, which yields aberration ($\\sin\\theta = v/c$) and the invariance of the wave phase.',
      'Light carries momentum $p = E/c$; absorption presses with $F = (1/c)(dW/dt)$, reflection doubles it, and in quanta $W = \\hbar\\omega$, $p = \\hbar k$.',
    ],
    quiz: [
      {
        q: 'The field of a moving charge points toward which position of the charge?',
        options: [
          'Its instantaneous position at the observation time',
          'Its retarded (apparent) position — where it seems to be, light-delayed',
          'Its future position, extrapolated at speed $c$',
          'The center of its orbit',
        ],
        answer: 1,
        explanation: 'The unit vector $\\mathbf{e}_{R\'}$ in the field formula aims at the retarded position: information from the charge travels to the observer only at the finite speed $c$.',
      },
      {
        q: 'Why is synchrotron radiation concentrated in sharp pulses rather than a smooth sinusoid?',
        options: [
          'Because the electrons collide with each other once per turn',
          'Because the backward-translated motion develops near-cusps whose second derivatives are enormous',
          'Because the magnetic field switches off periodically',
          'Because the vacuum pipe absorbs the smooth parts of the wave',
        ],
        answer: 1,
        explanation: 'A charge circling at nearly $c$ traces a curtate cycloid in the apparent-motion diagram; near the cusp the curvature — hence the second derivative, hence the field — is enormous, one sharp pulse per period $T_0$.',
      },
      {
        q: 'An electron with $pc = 10^{9}$ eV circulates in a 1 weber/m² field (10,000 gauss). Its orbit radius is about:',
        options: ['0.33 m', '3.3 m', '33 m', '330 m'],
        answer: 1,
        explanation: 'From $pc(\\text{eV}) = 3\\times 10^{8}BR$: $R = 10^{9}/(3\\times 10^{8} \\times 1) \\approx 3.3$ m — the size scale of the Caltech synchrotron (3.7 m, 1.5 GeV in practice).',
      },
      {
        q: 'A source approaches at $0.6c$. Its observed frequency is $\\omega_0\\sqrt{1 - v^2/c^2}/(1 - v/c)$, which evaluates to:',
        options: [`$1.25\\,\\omega_0$`, `$2\\,\\omega_0$`, `$0.5\\,\\omega_0$`, `$2.5\\,\\omega_0$`],
        answer: 1,
        explanation: 'The time-dilation factor is $0.8$ and the compression factor is $1/0.4 = 2.5$; their product is $2\\omega_0$. Without the time-dilation root, the two ways of deriving Doppler would disagree — relativity demands it.',
      },
      {
        q: 'Light delivering energy at rate $dW/dt$ to a perfectly absorbing surface exerts a force:',
        options: [
          `$\\frac{1}{c}\\frac{dW}{dt}$ — momentum is energy divided by $c$`,
          '$\\frac{2}{c}\\frac{dW}{dt}$ — the same as for a mirror',
          '$c\\,\\frac{dW}{dt}$, since light moves so fast',
          'Zero — light has no rest mass and therefore no momentum',
        ],
        answer: 0,
        explanation: 'The magnetic part of the light wave pushes the driven charge along the beam, delivering momentum at exactly $1/c$ times the energy rate; a mirror reverses the light’s momentum and feels twice the force.',
      },
    ],
  },
]

export const physCh9Formulas: FormulaEntry[] = [
  {
    chapterId: 'hall-ch37',
    section: '36.23',
    name: 'Relativistic momentum',
    formula: 'p = γm₀v',
    latex: '\\mathbf{p} = \\frac{m_0\\mathbf{v}}{\\sqrt{1 - v^2/c^2}} = \\gamma m_0\\mathbf{v}',
    note: 'momentum grows without bound while v saturates below c',
  },
  {
    chapterId: 'hall-ch37',
    section: '36.23',
    name: 'Total energy',
    formula: 'E = γm₀c², ΔT = (γ − 1)m₀c²',
    latex: 'E = \\gamma m_0c^2, \\qquad \\Delta T = (\\gamma - 1)m_0c^2',
    note: 'rest energy m₀c² plus kinetic; E = pc for photons (m₀ = 0)',
  },
  {
    chapterId: 'hall-ch37',
    section: '36.23',
    name: 'Invariant energy–momentum relation',
    formula: 'E² − p²c² = m₀²c⁴',
    latex: 'E^2 - p^2c^2 = m_0^2c^4, \\qquad pc = \\frac{Ev}{c}',
    note: 'same in every frame; the working formula of accelerator physics',
  },
  {
    chapterId: 'hall-ch37',
    section: '36.23',
    name: 'Relativistic velocity addition',
    formula: 'v = (u + v′)/(1 + uv′/c²)',
    latex: "v = \\frac{u + v'}{1 + uv'/c^2}",
    note: 'half of c plus half of c gives only 4c/5; light stays at c',
  },
  {
    chapterId: 'hall-ch37',
    section: '36.24',
    name: 'Relativistic Doppler effect',
    formula: 'ω = ω₀√(1 − v²/c²)/(1 − v/c)',
    latex: '\\omega = \\omega_0\\,\\frac{\\sqrt{1 - v^2/c^2}}{1 - v/c}',
    note: 'time dilation times wavefront compression; blueshift approaching',
  },
]
