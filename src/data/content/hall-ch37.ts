import type { SectionContent } from '../library'

// ============================================================================
// Halliday–Resnick–Walker, Fundamentals of Physics 11e Extended — Chapter 37
// Relativity — sections 37-1 … 37-6 (ids hall-ch37-s1 … hall-ch37-s6)
// Core: the two postulates, relativity of simultaneity, time dilation
// Δt = γΔt₀, length contraction L = L₀/γ, the Lorentz transformation,
// velocity addition, the relativistic Doppler shift, and p = γmv with
// E = γmc², E² = (pc)² + (mc²)².
// ============================================================================

export const hallCh37Content: SectionContent[] = [
  // ------------------------------------------------------------------ 37-1
  {
    sectionId: 'hall-ch37-s1',
    readingTime: 7,
    intro: "Einstein's 1905 insight was not that everything is relative — it was that one thing is absolute: the speed of light, measured the same by every uniformly moving observer. From that single postulate, plus the old relativity principle of mechanics, the strangeness cascades: events simultaneous for one observer are not simultaneous for another, and a moving clock ticks slow. This section builds the light clock and extracts the factor γ that runs the whole chapter.",
    objectives: [
      'State the two postulates of special relativity and explain the lightning–train argument for the relativity of simultaneity',
      "Distinguish proper time from dilated time and derive $\\Delta t = \\gamma\\Delta t_0$ from the light clock",
      'Apply time dilation to real decays and fast particles, computing $\\gamma = 1/\\sqrt{1-\\beta^2}$',
    ],
    concepts: [
      {
        term: 'The two postulates',
        kind: 'law',
        statement: '**(1) The relativity principle: the laws of physics are identical in every inertial (non-accelerating) reference frame — no experiment can detect uniform motion. (2) The speed of light: light travels in vacuum at $c$ for every inertial observer, regardless of the motion of the source.** Together they force a rebuilding of space and time themselves.',
        detail: 'Postulate 2 is the revolutionary one: chase a light beam at 0.9c and it still recedes from you at exactly c.',
      },
      {
        term: 'Relativity of simultaneity',
        kind: 'insight',
        statement: "**Events that are simultaneous but spatially separated in one frame are not simultaneous in a frame moving relative to it.** Einstein's train argument: lightning strikes both ends of a moving train; the onboard observer, moving toward the front flash, sees it first. There is no universal 'now'.",
        detail: 'Simultaneity can only fail for separated events: one observer, one clock, one place is safe. That is exactly what proper time exploits.',
      },
      {
        term: 'Time dilation',
        kind: 'law',
        statement: '**If two events occur at the same place in some frame, the time between them measured there is the proper time $\\Delta t_0$, and every other frame measures longer:** $$\\Delta t = \\gamma\\Delta t_0, \\qquad \\gamma = \\frac{1}{\\sqrt{1-\\beta^2}}, \\quad \\beta = \\frac{v}{c}.$$ Moving clocks run slow; $\\gamma \\geq 1$ always.',
      },
      {
        term: 'Why measurement, not appearance',
        kind: 'method',
        statement: '**Each frame must assign a time to a distant event by reading a clock sitting next to that event, with all its clocks synchronized.** The light clock — a photon bouncing between two mirrors — makes the calculation honest: at rest the round trip is $\\Delta t_0 = 2D/c$; from a frame where the clock rushes past, the photon travels a longer diagonal, and light\'s fixed speed forces a longer elapsed time.',
        detail: 'The effect is symmetric: each inertial observer finds the other\'s clocks slow — no frame is privileged, none is wrong.',
      },
      {
        term: "Simultaneity and Time Dilation: solution protocol",
        kind: "method",
        statement: "**Solve Simultaneity and Time Dilation problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the two postulates with $\\gamma$ running time dilation and length contraction; the working equation is $\\Delta t = \\gamma\\Delta t_0$, $L = L_0/\\gamma$, $\\gamma = 1/\\sqrt{1-\\beta^2}$, $E = \\gamma mc^2$; every substitution must carry its units so the final unit (dimensionless $\\gamma$ and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\gamma \\approx 1.01$ at $0.14c$, $7.1$ at $0.99c$; electron $E_0 = 511\\ \\text{keV}$; inertial frames with $v < c$; proper time/length need the co-moving/rest frame.",
      },
    ],
    figures: [
      {
        caption: 'The light clock. Left: in the clock\'s rest frame the photon bounces a distance $D$ each way and the round trip takes proper time $\\Delta t_0 = 2D/c$. Right: from a frame where the clock moves at $v$, the same emission and return events are connected by diagonals of length $c\\Delta t/2$, so $(c\\Delta t/2)^2 = D^2 + (v\\Delta t/2)^2$ and $\\Delta t = \\gamma\\Delta t_0$.',
        svg: `<svg viewBox="0 0 720 340" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two views of a light clock: at rest the photon bounces straight up and down, while in a frame where the clock moves the photon traces a longer diagonal zigzag"><defs><marker id="lcA" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs><text x="165" y="30" text-anchor="middle" font-size="15" fill="currentColor" font-weight="600">clock at rest (proper time)</text><rect x="80" y="52" width="170" height="12" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-width="1.8"/><rect x="80" y="258" width="170" height="12" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-width="1.8"/><line x1="165" y1="66" x2="165" y2="256" stroke="currentColor" stroke-width="2" stroke-dasharray="7 6" marker-end="url(#lcA)" marker-start="url(#lcA)"/><circle cx="165" cy="150" r="6" fill="currentColor"/><line x1="118" y1="64" x2="118" y2="258" stroke="currentColor" stroke-width="1.4" stroke-dasharray="3 4" opacity="0.7"/><text x="104" y="160" text-anchor="end" font-size="15" fill="currentColor">D</text><text x="192" y="128" font-size="14" fill="currentColor" opacity="0.9">photon: 2D at speed c</text><text x="165" y="308" text-anchor="middle" font-size="15" fill="currentColor">Δt<tspan dy="3" font-size="11">0</tspan><tspan dy="-3" font-size="15"> = 2D/c</tspan></text><line x1="330" y1="150" x2="372" y2="150" stroke="currentColor" stroke-width="1.6" marker-end="url(#lcA)"/><text x="351" y="140" text-anchor="middle" font-size="14" fill="currentColor">v</text><text x="560" y="30" text-anchor="middle" font-size="15" fill="currentColor" font-weight="600">same clock moving at speed v</text><rect x="340" y="52" width="130" height="12" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4" opacity="0.6"/><rect x="460" y="52" width="130" height="12" fill="currentColor" fill-opacity="0.28" stroke="currentColor" stroke-width="1.8"/><rect x="340" y="258" width="130" height="12" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4" opacity="0.6"/><rect x="580" y="258" width="130" height="12" fill="currentColor" fill-opacity="0.10" stroke="currentColor" stroke-width="1.3" stroke-dasharray="5 4" opacity="0.6"/><line x1="405" y1="258" x2="525" y2="64" stroke="currentColor" stroke-width="2.2" marker-end="url(#lcA)"/><line x1="525" y1="64" x2="645" y2="258" stroke="currentColor" stroke-width="2.2" marker-end="url(#lcA)"/><circle cx="525" cy="64" r="6" fill="currentColor"/><circle cx="405" cy="258" r="5" fill="currentColor" fill-opacity="0.55"/><circle cx="645" cy="258" r="5" fill="currentColor" fill-opacity="0.55"/><line x1="525" y1="64" x2="525" y2="258" stroke="currentColor" stroke-width="1.3" stroke-dasharray="4 4" opacity="0.7"/><text x="538" y="164" font-size="15" fill="currentColor">D</text><text x="429" y="44" font-size="14" fill="currentColor" opacity="0.85">vΔt/2</text><text x="594" y="286" font-size="14" fill="currentColor" opacity="0.85">vΔt/2</text><text x="459" y="150" text-anchor="middle" font-size="14" fill="currentColor" opacity="0.9">cΔt/2</text><text x="594" y="150" text-anchor="middle" font-size="14" fill="currentColor" opacity="0.9">cΔt/2</text><text x="560" y="308" text-anchor="middle" font-size="15" fill="currentColor">(cΔt/2)² = D² + (vΔt/2)²</text><text x="560" y="330" text-anchor="middle" font-size="14" fill="currentColor" opacity="0.8">so Δt = γΔt<tspan dy="3" font-size="11">0</tspan></text></svg>`,
        afterConcept: 3,
      },
    ],
    examples: [
      {
        title: 'The muon that should have died',
        problem: 'A muon is created 4.6 km above the ground, racing downward at $v = 0.990c$. Its proper lifetime is 2.20 µs. Classically it should travel only 0.65 km — so why does it reach the ground?',
        steps: [
          { label: 'Lorentz factor', text: '$\\gamma = 1/\\sqrt{1-0.990^2} = 1/\\sqrt{0.0199} = 7.09$.' },
          { label: 'Dilated lifetime', text: 'In the ground frame the muon lives $\\Delta t = \\gamma\\Delta t_0 = 7.09 \\times 2.20 = 15.6$ µs.' },
          { label: 'Distance traveled', text: '$d = v\\Delta t = 0.990(3.00\\times10^{8})(15.6\\times10^{-6}) = 4.6\\times10^{3}$ m.' },
          { label: 'Contrast', text: 'Without dilation the muon would manage only $0.990(3.00\\times10^{8})(2.20\\times10^{-6}) = 653$ m and would decay long before the ground.' },
        ],
        result: 'Dilated lifetime 15.6 µs carries the muon 4.6 km — exactly the atmosphere it needed. Cosmic-ray muons reach sea level for precisely this reason.',
      },
      {
        title: "Simultaneity and Time Dilation: $\\gamma$ check",
        problem: "A muon moves at $v = 0.7c$. Compute $\\gamma = 1/\\sqrt{1-\\beta^2}$ and the dilated lifetime if $\\Delta t_0 = 2.20\\ \\mu\\text{s}$.",
        steps: [
          { label: "Beta squared", text: "$\\beta^2 = 0.7^2 = 0.49$; $1-\\beta^2 = 0.51$." },
          { label: "Gamma", text: "$\\gamma = 1/\\sqrt{0.51} = 1.4$." },
          { label: "Dilated", text: "$\\Delta t = 1.4\\times 2.20 = 3.08\\ \\mu\\text{s}$." },
        ],
        result: "$\\gamma \\approx 1.4$; $\\Delta t \\approx 3.08\\ \\mu\\text{s}$.",
      },
    ],
    keyTakeaways: [
      'The speed of light is the same for all inertial observers; that single postulate overthrows absolute simultaneity.',
      'Proper time (same place, one clock) is the shortest interval: every moving observer measures $\\Delta t = \\gamma\\Delta t_0$.',
      'Time dilation is measured daily in particle decay, and it is symmetric between inertial frames.',
    ],
    quiz: [
      {
        q: 'The proper time between two events is:',
        options: ['the interval measured in the frame where they occur at the same place — the shortest any clock measures', 'the interval measured in the frame where they are farthest apart', 'whatever the laboratory clock happens to read', 'the longest interval any inertial observer can measure'],
        answer: 0,
        explanation: 'Since $\\Delta t = \\gamma\\Delta t_0$ with $\\gamma \\geq 1$, every other frame measures a longer interval than the proper one.',
      },
      {
        q: 'A particle moves at $\\beta = 0.600$. The Lorentz factor is:',
        options: [`$\\gamma = 1.25$`, `$\\gamma = 1.67$`, `$\\gamma = 0.80$`, `$\\gamma = 2.0$`],
        answer: 0,
        explanation: '$\\gamma = 1/\\sqrt{1-0.36} = 1/0.80 = 1.25$.',
      },
      {
        q: 'A clock moves past you at 0.80c. Compared with your identical clock, it ticks:',
        options: ['slow by the factor 1.67', 'fast by the factor 1.67', 'slow by exactly 20%', 'at the same rate'],
        answer: 0,
        explanation: '$\\gamma = 1/\\sqrt{1-0.64} = 1.67$: you see one tick of the moving clock take 1.67 of your seconds.',
      },
    ],
  },
  // ------------------------------------------------------------------ 37-2
  {
    sectionId: 'hall-ch37-s2',
    readingTime: 6,
    intro: "If moving clocks run slow, then moving distances must read short — because speed is distance over time, and the speed of light is fixed for everyone. Length contraction is time dilation's twin: the length of an object measured in a frame where it moves is always less than its proper length, and only along the direction of motion. The two effects are two readings of one geometry.",
    objectives: [
      'Define proper length and apply $L = L_0/\\gamma$ along the direction of motion',
      'Explain why measuring a moving length requires simultaneous positions of both ends',
      'Reconcile the muon\'s account of the atmosphere with the ground observer\'s account',
    ],
    concepts: [
      {
        term: 'Length contraction',
        kind: 'law',
        statement: '**The length of an object measured in a frame where it moves with speed $v$ along its length is** $$L = \\frac{L_0}{\\gamma},$$ where $L_0$ is the proper length measured in the object\'s rest frame. Transverse dimensions are unchanged.',
      },
      {
        term: 'Proper length',
        kind: 'definition',
        statement: '**The proper length of an object is its length in the frame in which it is at rest — measured, as any length must be, by locating both endpoints at the same time in that frame.** It is the longest length any observer will assign.',
      },
      {
        term: 'Simultaneity hides inside',
        kind: 'insight',
        statement: '**To measure a moving object\'s length you must record where its front and back are at the same instant of your time.** Those two recordings are separated events, and frames disagree on their time order — which is precisely why the frames disagree about the length. Contraction is physics, not perspective or an optical illusion.',
      },
      {
        term: 'The muon revisited',
        kind: 'insight',
        statement: '**Each observer\'s story is complete and they agree on the outcome.** The ground observer: the muon\'s clock runs slow, so it survives the full 4.6 km of atmosphere. The muon: my clock is fine — the atmosphere is contracted to $4.6\\ \\text{km}/\\gamma = 650$ m, a distance I cross in one lifetime. Same events, same detections, different divisions of space and time.',
      },
      {
        term: "The Relativity of Length: solution protocol",
        kind: "method",
        statement: "**Solve The Relativity of Length problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the two postulates with $\\gamma$ running time dilation and length contraction; the working equation is $\\Delta t = \\gamma\\Delta t_0$, $L = L_0/\\gamma$, $\\gamma = 1/\\sqrt{1-\\beta^2}$, $E = \\gamma mc^2$; every substitution must carry its units so the final unit (dimensionless $\\gamma$ and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\gamma \\approx 1.01$ at $0.14c$, $7.1$ at $0.99c$; electron $E_0 = 511\\ \\text{keV}$; inertial frames with $v < c$; proper time/length need the co-moving/rest frame.",
      },
    ],
    examples: [
      {
        title: "The atmosphere, from the muon's seat",
        problem: 'For the muon of the previous section ($v = 0.990c$, $\\gamma = 7.09$), how thick is the 4.6 km atmosphere, and how long does the trip take in the muon\'s own frame?',
        steps: [
          { label: 'Contracted height', text: '$L = L_0/\\gamma = 4600/7.09 = 650$ m.' },
          { label: 'Travel time, muon frame', text: '$t = L/v = 650/[(0.990)(3.00\\times10^{8})] = 2.19\\ \\mu$s.' },
          { label: 'Check', text: 'That is the muon\'s proper lifetime, 2.20 µs — the trip takes (almost exactly) one lifetime, no dilation needed in this frame.' },
          { label: 'Consistency', text: 'The ground frame got $15.6\\ \\mu$s for the same two events (creation, arrival): $15.6 = 7.09 \\times 2.19$, as $\\Delta t = \\gamma\\Delta t_0$ demands.' },
        ],
        result: 'Atmosphere 650 m, transit time 2.19 µs — the muon survives because for it the mountain is short, not because its clock is slow.',
      },
      {
        title: "The Relativity of Length: $\\gamma$ check",
        problem: "A muon moves at $v = 0.8c$. Compute $\\gamma = 1/\\sqrt{1-\\beta^2}$ and the dilated lifetime if $\\Delta t_0 = 2.20\\ \\mu\\text{s}$.",
        steps: [
          { label: "Beta squared", text: "$\\beta^2 = 0.8^2 = 0.64$; $1-\\beta^2 = 0.36$." },
          { label: "Gamma", text: "$\\gamma = 1/\\sqrt{0.36} = 1.67$." },
          { label: "Dilated", text: "$\\Delta t = 1.67\\times 2.20 = 3.67\\ \\mu\\text{s}$." },
        ],
        result: "$\\gamma \\approx 1.67$; $\\Delta t \\approx 3.67\\ \\mu\\text{s}$.",
      },
    ],
    keyTakeaways: [
      '$L = L_0/\\gamma$ along the motion only; proper length (rest frame) is the longest.',
      'Length measurement is simultaneity in disguise — that is where the contraction enters.',
      'Muon paradox resolved: the ground blames dilated time, the muon blames contracted atmosphere; both compute the same detections.',
    ],
    quiz: [
      {
        q: "A rod's proper length is 2.0 m. It moves parallel to itself at $\\beta = 0.60$. Its measured length is:",
        options: ['1.6 m', '2.5 m', '1.2 m', '2.0 m'],
        answer: 0,
        explanation: '$L = L_0/\\gamma = 2.0/1.25 = 1.6$ m.',
      },
      {
        q: 'Length contraction occurs:',
        options: ['only along the direction of motion', 'in all directions equally', 'only perpendicular to the motion', 'only for objects made of metal'],
        answer: 0,
        explanation: 'Transverse lengths are untouched — only the direction of relative motion contracts.',
      },
      {
        q: 'To measure the length of a passing object, an observer must:',
        options: ['locate its two ends at the same time in the observer\'s frame', 'time how long it takes to pass a single point', 'subtract its speed from its age', 'use the proper length and divide by two'],
        answer: 0,
        explanation: 'A moving length is defined by simultaneous end-positions; frames disagreeing on simultaneity then disagree on the length.',
      },
    ],
  },
  // ------------------------------------------------------------------ 37-3
  {
    sectionId: 'hall-ch37-s3',
    readingTime: 7,
    intro: "The Lorentz transformation is the dictionary between two inertial frames's coordinates of the same event. Galileo's dictionary, $x' = x - vt$ and $t' = t$, quietly assumed a universal time; Einstein's keeps the speed of light the same for both speakers. The result is four short equations from which time dilation, length contraction, and the failure of simultaneity can all be read off directly — plus a brand-new invariant that neither space nor time alone provides.",
    objectives: [
      'Write the Lorentz transformation and its inverse, and verify it reduces to the Galilean form for $v \\ll c$',
      'Transform the coordinates of an event between frames, including the relativity-of-simultaneity term $-vx/c^2$',
      'Use the invariant interval $c^2t^2 - x^2$ to classify event separations',
    ],
    concepts: [
      {
        term: 'The transformation',
        kind: 'law',
        statement: "**Frame $S'$ moves at speed $v$ along $+x$ of frame $S$. An event with coordinates $(x, t)$ in $S$ has in $S'$:** $$x' = \\gamma(x - vt), \\qquad y' = y, \\qquad z' = z, \\qquad t' = \\gamma\\left(t - \\frac{vx}{c^2}\\right).$$ The inverse transformation swaps the sign of $v$.",
        detail: 'The $vx/c^2$ term is the relativity of simultaneity in algebraic form: two events with $\\Delta t = 0$ but $\\Delta x \\neq 0$ get $\\Delta t\' = -\\gamma v\\Delta x/c^2 \\neq 0$.',
      },
      {
        term: 'How it is forced',
        kind: 'method',
        statement: '**Assume the map is linear (homogeneous space and time) and demand that a light pulse satisfy $x = ct$ in $S$ and $x\' = ct\'$ in $S\\\'$.** Matching coefficients in the two straight-line equations leaves exactly one free parameter, and identifying it with the relative velocity fixes $\\gamma = 1/\\sqrt{1-v^2/c^2}$.',
      },
      {
        term: 'Invariant interval',
        kind: 'theorem',
        statement: '**For any two events, the quantity $c^2t^2 - x^2$ (more generally $c^2\\Delta t^2 - \\Delta x^2$) has the same value in every inertial frame.** Timelike separations (positive) can be crossed by a slower-than-light signal; spacelike ones (negative) cannot — no cause can connect them. The proper time along a worldline is the invariant measure of its length.',
      },
      {
        term: 'Galilean limit',
        kind: 'insight',
        statement: '**For $v \\ll c$, the factor $\\gamma \\to 1$ and $vx/c^2 \\to 0$: the Lorentz transformation collapses to $x\' = x - vt$, $t\' = t$ — textbook Galileo.** Newtonian mechanics lives in this limit, which is why it was never caught misbehaving until electromagnetism insisted on exact $c$.',
      },
      {
        term: "The Lorentz Transformation: solution protocol",
        kind: "method",
        statement: "**Solve The Lorentz Transformation problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the two postulates with $\\gamma$ running time dilation and length contraction; the working equation is $\\Delta t = \\gamma\\Delta t_0$, $L = L_0/\\gamma$, $\\gamma = 1/\\sqrt{1-\\beta^2}$, $E = \\gamma mc^2$; every substitution must carry its units so the final unit (dimensionless $\\gamma$ and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\gamma \\approx 1.01$ at $0.14c$, $7.1$ at $0.99c$; electron $E_0 = 511\\ \\text{keV}$; inertial frames with $v < c$; proper time/length need the co-moving/rest frame.",
      },
    ],
    examples: [
      {
        title: 'Transforming an event',
        problem: "Frame $S'$ moves at $v = 0.800c$ along $+x$ of frame $S$, so $\\gamma = 1.667$. An event occurs at $x = 1.00\\times10^{9}$ m at $t = 3.00$ s in $S$. Find its coordinates in $S'$ and check the invariant.",
        steps: [
          { label: 'Position', text: "$x' = \\gamma(x - vt) = 1.667[(1.00\\times10^{9}) - (0.800)(3.00\\times10^{8})(3.00)] = 1.667(2.80\\times10^{8}) = 4.67\\times10^{8}$ m." },
          { label: 'Time', text: "$t' = \\gamma(t - vx/c^2) = 1.667[3.00 - (0.800)(1.00\\times10^{9})/(3.00\\times10^{8})] = 1.667(0.333) = 0.556$ s." },
          { label: 'Invariant check', text: '$c^2t^2 - x^2 = 9.00\\times10^{16}(9.00) - 1.00\\times10^{18} = -1.90\\times10^{17}\\ \\text{m}^2$.' },
          { label: 'Other side', text: "$c^2t'^2 - x'^2 = 9.00\\times10^{16}(0.309) - 2.18\\times10^{17} = -1.90\\times10^{17}\\ \\text{m}^2$ — identical: the interval is spacelike and frame-independent." },
        ],
        result: "$(x', t') = (4.67\\times10^{8}$ m, $0.556$ s), and the interval $-1.90\\times10^{17}\\ \\text{m}^2$ agrees in both frames.",
      },
      {
        title: "The Lorentz Transformation: $\\gamma$ check",
        problem: "A muon moves at $v = 0.9c$. Compute $\\gamma = 1/\\sqrt{1-\\beta^2}$ and the dilated lifetime if $\\Delta t_0 = 2.20\\ \\mu\\text{s}$.",
        steps: [
          { label: "Beta squared", text: "$\\beta^2 = 0.9^2 = 0.81$; $1-\\beta^2 = 0.19$." },
          { label: "Gamma", text: "$\\gamma = 1/\\sqrt{0.19} = 2.29$." },
          { label: "Dilated", text: "$\\Delta t = 2.29\\times 2.20 = 5.05\\ \\mu\\text{s}$." },
        ],
        result: "$\\gamma \\approx 2.29$; $\\Delta t \\approx 5.05\\ \\mu\\text{s}$.",
      },
    ],
    keyTakeaways: [
      '$x\' = \\gamma(x - vt)$, $t\' = \\gamma(t - vx/c^2)$: the $vx/c^2$ term is quantified relativity of simultaneity.',
      'The interval $c^2t^2 - x^2$ is invariant — the geometrical heart of spacetime.',
      'Galilean transformation is recovered exactly when $v \\ll c$.',
    ],
    quiz: [
      {
        q: 'The inverse Lorentz transformation follows from the forward one by:',
        options: ['exchanging the roles of the frames — replacing $v$ with $-v$', 'dividing every term by $\\gamma$', 'negating $x$ and $t$', 'using length contraction instead of time dilation'],
        answer: 0,
        explanation: 'If $S\'$ sees $S$ moving at $-v$, symmetry gives $x = \\gamma(x\' + vt\')$ and $t = \\gamma(t\' + vx\'/c^2)$.',
      },
      {
        q: 'Two events are simultaneous in frame $S$ ($\\Delta t = 0$) and separated by $\\Delta x > 0$. In $S\'$, moving along $+x$:',
        options: ['$\\Delta t\' = -\\gamma v \\Delta x/c^2$ — the rear event happens first', '$\\Delta t\' = 0$ as well', '$\\Delta t\' = +\\gamma v \\Delta x/c^2$ — the front event happens first', 'the events cannot be located at all'],
        answer: 0,
        explanation: 'Substitute into the time equation; the observer riding toward the front event encounters it earlier.',
      },
      {
        q: 'The quantity that has the same value in all inertial frames is:',
        options: [`$x^2 + y^2 + z^2$`, `$c^2t^2 - x^2$`, `$t$`, `$x - vt$`],
        answer: 1,
        explanation: 'The spacetime interval mixes time and space so that both frames agree — on light cones it is exactly 0.',
      },
    ],
  },
  // ------------------------------------------------------------------ 37-4
  {
    sectionId: 'hall-ch37-s4',
    readingTime: 6,
    intro: "Velocities do not add the way Galileo promised. If a spaceship at 0.8c fires a probe forward at 0.6c, the probe's ground speed is not 1.4c — it is 0.946c. The replacement rule is the velocity-addition formula, one fraction deep, and it carries the entire content of the postulates: velocities can press toward c but never reach or exceed it, and light itself comes out exactly c for everyone.",
    objectives: [
      'Apply $u = (u\' + v)/(1 + u\'v/c^2)$ for collinear velocities, forward and backward',
      'Show that light emerges at $c$ in every frame and that massive objects can never reach $c$',
      'Recognize where the $c^2$ denominator comes from — simultaneity plus time dilation',
    ],
    concepts: [
      {
        term: 'Velocity addition',
        kind: 'law',
        statement: "**An object moving at $u'$ along $x'$ of frame $S'$, with $S'$ moving at $v$ along $x$ of $S$, has $x$-velocity** $$u = \\frac{u' + v}{1 + u'v/c^2}.$$ Only the component of velocity along the relative motion uses this simple form; transverse components mix in $\\gamma$ as well.",
      },
      {
        term: 'Light comes out light',
        kind: 'insight',
        statement: '**Put $u\' = c$: the formula returns $u = (c + v)/(1 + v/c) = c$ exactly.** No matter how the emitter moves, the beam\'s speed is $c$ — postulate 2 reborn as arithmetic. And for any $u\' < c$ and $v < c$, the result is also below $c$: **c is an unreachable asymptote for matter.**',
      },
      {
        term: 'Why not just add',
        kind: 'insight',
        statement: '**Velocity is distance over time, and both numerator and denominator are now frame-dependent in different ways.** Deriving the rule from the Lorentz transformation — dividing $dx\'$ by $dt\'$ — the simultaneity term $v\\,dx/c^2$ is exactly what shaves the answer below the Galilean sum.',
        detail: 'Einstein\'s favorite early check: light racing through flowing water moves at $c/n + v(1 - 1/n^2)$, the Fresnel drag coefficient that Fizeau had measured in 1851 — the new kinematics explained an old unexplained number.',
      },
      {
        term: "The Relativity of Velocities: solution protocol",
        kind: "method",
        statement: "**Solve The Relativity of Velocities problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the two postulates with $\\gamma$ running time dilation and length contraction; the working equation is $\\Delta t = \\gamma\\Delta t_0$, $L = L_0/\\gamma$, $\\gamma = 1/\\sqrt{1-\\beta^2}$, $E = \\gamma mc^2$; every substitution must carry its units so the final unit (dimensionless $\\gamma$ and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\gamma \\approx 1.01$ at $0.14c$, $7.1$ at $0.99c$; electron $E_0 = 511\\ \\text{keV}$; inertial frames with $v < c$; proper time/length need the co-moving/rest frame.",
      },
      {
        term: "The Relativity of Velocities: scales and validity",
        kind: "insight",
        statement: "**The Relativity of Velocities lives at $\\gamma \\approx 1.01$ at $0.14c$, $7.1$ at $0.99c$; electron $E_0 = 511\\ \\text{keV}$ and the textbook model holds while inertial frames with $v < c$; proper time/length need the co-moving/rest frame.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a The Relativity of Velocities calculation gives seconds when dimensionless $\\gamma$ and $\\text{eV}$ demands meters, or a value orders of magnitude beyond $\\gamma \\approx 1.01$ at $0.14c$, $7.1$ at $0.99c$; electron $E_0 = 511\\ \\text{keV}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'Probe forward and backward',
        problem: "A rocket passes Earth at $v = 0.800c$. It launches a probe at $u' = 0.600c$ relative to itself, first forward, then backward. What speeds does Earth measure?",
        steps: [
          { label: 'Forward probe', text: "$u = (u' + v)/(1 + u'v/c^2) = (0.600 + 0.800)c/(1 + 0.480) = 1.400c/1.480 = 0.946c$." },
          { label: 'Backward probe', text: "Now $u' = -0.600c$: $u = (0.800 - 0.600)c/(1 - 0.480) = 0.200c/0.520 = 0.385c$ — still forward, but barely." },
          { label: 'Sanity check', text: 'Neither answer exceeds $c$; the Galilean sums $1.4c$ and $0.2c$ bracket the truth but miss the relativity of time.' },
          { label: 'Light check', text: 'Had the rocket fired a laser, $u\' = c$: $u = (c + 0.8c)/(1 + 0.8) = c$, as demanded.' },
        ],
        result: 'Forward probe: 0.946c. Backward probe: 0.385c. Light: exactly c.',
      },
      {
        title: "The Relativity of Velocities: $\\gamma$ check",
        problem: "A muon moves at $v = 0.6c$. Compute $\\gamma = 1/\\sqrt{1-\\beta^2}$ and the dilated lifetime if $\\Delta t_0 = 2.20\\ \\mu\\text{s}$.",
        steps: [
          { label: "Beta squared", text: "$\\beta^2 = 0.6^2 = 0.36$; $1-\\beta^2 = 0.64$." },
          { label: "Gamma", text: "$\\gamma = 1/\\sqrt{0.64} = 1.25$." },
          { label: "Dilated", text: "$\\Delta t = 1.25\\times 2.20 = 2.75\\ \\mu\\text{s}$." },
        ],
        result: "$\\gamma \\approx 1.25$; $\\Delta t \\approx 2.75\\ \\mu\\text{s}$.",
      },
    ],
    keyTakeaways: [
      "$u = (u' + v)/(1 + u'v/c^2)$ replaces Galileo's sum whenever speeds are relativistic.",
      'The formula keeps every result at or below $c$, and outputs exactly $c$ for light — postulate 2 as algebra.',
      'The $u\'v/c^2$ denominator is the Lorentz transformation\'s simultaneity term surfacing in a rate.',
    ],
    quiz: [
      {
        q: 'Rocket at 0.8c launches a probe forward at 0.6c relative to the rocket. Ground speed:',
        options: [`$0.946c$`, `$1.4c$`, `$0.99c$`, `$0.68c$`],
        answer: 0,
        explanation: '$u = (0.6 + 0.8)/(1 + 0.48)\\,c = 1.4/1.48\\,c = 0.946c$.',
      },
      {
        q: 'When both $u\'$ and $v$ are tiny compared with $c$, the addition formula becomes:',
        options: ["$u \\approx u' + v$ — the Galilean rule", "$u \\approx u'v/c^2$", "$u \\approx u' - v$", 'the formula does not apply'],
        answer: 0,
        explanation: 'The denominator $1 + u\'v/c^2 \\approx 1$, recovering everyday velocity addition.',
      },
      {
        q: 'The formula guarantees no material object reaches $c$ from below because:',
        options: ['the denominator grows toward $1 + v/c$, keeping the ratio below $c$', 'energy becomes negative near $c$', 'the numerator saturates at $c$', 'mass turns imaginary at low speed'],
        answer: 0,
        explanation: "For any $u' < c$ and $v < c$, algebra gives $u < c$ — the hyperbolic geometry of spacetime has no rim to cross.",
      },
    ],
  },
  // ------------------------------------------------------------------ 37-5
  {
    sectionId: 'hall-ch37-s5',
    readingTime: 6,
    intro: "Sound's Doppler shift needs a medium and splits into moving-source and moving-observer cases; light's cannot — there is no aether, and only relative motion exists. The relativistic Doppler formula blends a classical-style shift with time dilation into one square root, and it is the yardstick of the universe: every redshift ever measured, from a police radar to a quasar at the edge of the observable universe, runs on this section's formula.",
    objectives: [
      'Apply the relativistic Doppler formulas for receding and approaching sources',
      'Define astronomical redshift $z$ and compute recession speeds from observed spectra',
      'Explain why light\'s Doppler shift, unlike sound\'s, depends only on relative motion',
    ],
    concepts: [
      {
        term: 'Doppler shift for light',
        kind: 'law',
        statement: '**A source receding at $\\beta = v/c$ emits proper frequency $f_0$; the observer receives** $$f = f_0\\sqrt{\\frac{1-\\beta}{1+\\beta}}, \\qquad \\text{equivalently} \\quad \\lambda = \\lambda_0\\sqrt{\\frac{1+\\beta}{1-\\beta}}.$$ For approach, flip the signs: blueshift.',
        detail: 'Recession ($\\beta > 0$) always reddens: $f < f_0$ and $\\lambda > \\lambda_0$. The shift is symmetric in the two frames only after accounting for time dilation.',
      },
      {
        term: 'No medium, only relative motion',
        kind: 'insight',
        statement: '**Because light has no medium, the shift depends on the relative speed alone — there is no separate source-moving and observer-moving case.** The formula already contains time dilation; a naive classical shift would miss it (the transverse shift $f = f_0/\\gamma$ for purely sideways motion is pure dilation).',
      },
      {
        term: 'Astronomical redshift',
        kind: 'definition',
        statement: '**Cosmologists report $z = (\\lambda - \\lambda_0)/\\lambda_0$, so that $\\lambda/\\lambda_0 = 1 + z = \\sqrt{(1+\\beta)/(1-\\beta)}$.** Inverting: $\\beta = [(1+z)^2 - 1]/[(1+z)^2 + 1]$. Hubble\'s law — redshift growing with distance — is this formula plus the expansion of space.',
        detail: 'Galaxies at $z = 1$ recede at $\\beta = 0.600$; quasars beyond $z = 7$ recede faster than $0.96c$.',
      },
      {
        term: "Doppler Effect for Light: solution protocol",
        kind: "method",
        statement: "**Solve Doppler Effect for Light problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the two postulates with $\\gamma$ running time dilation and length contraction; the working equation is $\\Delta t = \\gamma\\Delta t_0$, $L = L_0/\\gamma$, $\\gamma = 1/\\sqrt{1-\\beta^2}$, $E = \\gamma mc^2$; every substitution must carry its units so the final unit (dimensionless $\\gamma$ and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\gamma \\approx 1.01$ at $0.14c$, $7.1$ at $0.99c$; electron $E_0 = 511\\ \\text{keV}$; inertial frames with $v < c$; proper time/length need the co-moving/rest frame.",
      },
      {
        term: "Doppler Effect for Light: scales and validity",
        kind: "insight",
        statement: "**Doppler Effect for Light lives at $\\gamma \\approx 1.01$ at $0.14c$, $7.1$ at $0.99c$; electron $E_0 = 511\\ \\text{keV}$ and the textbook model holds while inertial frames with $v < c$; proper time/length need the co-moving/rest frame.** Outside that window the formulas above need their next-order corrections, but inside it they predict numbers to the significant figures you carry.",
        detail: "Use this as a plausibility filter: if a Doppler Effect for Light calculation gives seconds when dimensionless $\\gamma$ and $\\text{eV}$ demands meters, or a value orders of magnitude beyond $\\gamma \\approx 1.01$ at $0.14c$, $7.1$ at $0.99c$; electron $E_0 = 511\\ \\text{keV}$, recheck the setup before trusting the arithmetic.",
      },
    ],
    examples: [
      {
        title: 'How fast is that galaxy running?',
        problem: "The hydrogen Hα line, rest wavelength 656.3 nm, arrives from a distant galaxy at 725.6 nm. How fast does the galaxy recede, and what is its redshift?",
        steps: [
          { label: 'Wavelength ratio', text: '$\\lambda/\\lambda_0 = 725.6/656.3 = 1.106$.' },
          { label: 'Solve for β', text: 'Square: $(1+\\beta)/(1-\\beta) = 1.223$. Then $1+\\beta = 1.223(1-\\beta)$ gives $\\beta = 0.223/2.223 = 0.100$.' },
          { label: 'Redshift', text: '$z = 1.106 - 1 = 0.106$.' },
          { label: 'Frequency view', text: 'Check: $f/f_0 = \\sqrt{(1-0.1)/(1+0.1)} = 0.9045$, and indeed $1/1.106 = 0.904$.' },
        ],
        result: 'The galaxy recedes at 0.100c (30 000 km/s) with redshift z = 0.106 — its visible Hα has slid into the near infrared.',
      },
      {
        title: "Doppler Effect for Light: $\\gamma$ check",
        problem: "A muon moves at $v = 0.7c$. Compute $\\gamma = 1/\\sqrt{1-\\beta^2}$ and the dilated lifetime if $\\Delta t_0 = 2.20\\ \\mu\\text{s}$.",
        steps: [
          { label: "Beta squared", text: "$\\beta^2 = 0.7^2 = 0.49$; $1-\\beta^2 = 0.51$." },
          { label: "Gamma", text: "$\\gamma = 1/\\sqrt{0.51} = 1.4$." },
          { label: "Dilated", text: "$\\Delta t = 1.4\\times 2.20 = 3.08\\ \\mu\\text{s}$." },
        ],
        result: "$\\gamma \\approx 1.4$; $\\Delta t \\approx 3.08\\ \\mu\\text{s}$.",
      },
    ],
    keyTakeaways: [
      'Recession reddens light by $\\lambda/\\lambda_0 = \\sqrt{(1+\\beta)/(1-\\beta)}$; approach blueshifts with signs flipped.',
      'Only relative motion matters — light has no medium, and time dilation is already inside the square root.',
      'Redshift $z$ is astronomy\'s speedometer: $z = 0.106$ means $\\beta = 0.100$.',
    ],
    quiz: [
      {
        q: 'A source recedes at speed $\\beta c$. The observed frequency is:',
        options: [`$f = f_0\\sqrt{(1-\\beta)/(1+\\beta)}$`, `$f = f_0\\sqrt{(1+\\beta)/(1-\\beta)}$`, `$f = f_0(1-\\beta)$`, `$f = f_0\\gamma$`],
        answer: 0,
        explanation: 'Recession stretches the wavelength, so frequency falls by the reciprocal square-root factor.',
      },
      {
        q: 'Light from a galaxy shows $\\lambda_{\\text{obs}} = 1.10\\,\\lambda_{\\text{rest}}$. The recession speed is about:',
        options: [`$0.095c$`, `$0.30c$`, `$0.55c$`, `$0.90c$`],
        answer: 0,
        explanation: '$(1.10)^2 = (1+\\beta)/(1-\\beta)$ gives $\\beta = 0.21/2.21 = 0.095$.',
      },
      {
        q: 'Unlike the sound Doppler effect, the light Doppler effect:',
        options: ['depends only on the relative speed of source and observer', 'depends on motion relative to the medium', 'has no blueshift case', 'is always second order in $v/c$'],
        answer: 0,
        explanation: 'With no medium, only relative motion is meaningful — time dilation makes even the distinction source-vs-observer moot.',
      },
    ],
  },
  // ------------------------------------------------------------------ 37-6
  {
    sectionId: 'hall-ch37-s6',
    readingTime: 7,
    intro: "Relativity rebuilds momentum and energy, not just rulers and clocks. Momentum must grow faster than $mv$ for collisions between fast particles to balance in every frame, and once it does, energy demands a new look: every mass carries rest energy $mc^2$, kinetic energy diverges as speeds approach $c$, and the pair lock together in $E^2 = (pc)^2 + (mc^2)^2$ — the formula that runs every particle accelerator and every nuclear reaction in the universe.",
    objectives: [
      'Compute relativistic momentum $p = \\gamma mv$ and energy $E = \\gamma mc^2$, with $K = (\\gamma - 1)mc^2$',
      'Use $E^2 = (pc)^2 + (mc^2)^2$ and read it for massive particles and photons',
      'Explain why $mc^2$ is called rest energy and how inelastic collisions convert mass',
    ],
    concepts: [
      {
        term: 'Relativistic momentum',
        kind: 'law',
        statement: '**The momentum that keeps Newton\'s law $\\vec F = d\\vec p/dt$ valid in every inertial frame is** $$\\vec p = \\gamma m \\vec v = \\frac{m\\vec v}{\\sqrt{1-\\beta^2}}.$$ As $v \\to c$, $p \\to \\infty$: no finite force, acting for any finite time, can push a massive particle to the speed of light.',
        detail: 'In 11e the mass $m$ is the invariant rest mass — the Lorentz factor carries all the velocity dependence.',
      },
      {
        term: 'Rest energy and kinetic energy',
        kind: 'law',
        statement: '**Total energy $E = \\gamma mc^2$ splits into rest energy plus kinetic energy:** $$E = mc^2 + K, \\qquad K = (\\gamma - 1)mc^2.$$ Rest energy is real, withdrawable energy: electron–positron annihilation, nuclear fission and fusion all settle their books with $\\Delta E = \\Delta m\\,c^2$.',
        detail: 'Newton\'s $K = \\frac{1}{2}mv^2$ is the small-$\\beta$ expansion of this $K$; the two differ measurably above a few percent of $c$.',
      },
      {
        term: 'The energy–momentum relation',
        kind: 'theorem',
        statement: '**Every particle obeys** $$E^2 = (pc)^2 + (mc^2)^2.$$ For a particle at rest, $E = mc^2$; for a massless particle, $E = pc$ — the photon\'s bill. Momentum is conveniently measured in energy-over-$c$ units (MeV/$c$), which makes this identity dimensionally self-checking.',
      },
      {
        term: 'Mass in collisions',
        kind: 'insight',
        statement: '**Relativistic collisions conserve total $E$ and $\\vec p$ — but not Newtonian kinetic energy or the sum of rest masses.** When a proton and antiproton annihilate into mesons, or a nucleus fissions, the books balance only if rest energy is counted: the mass defect times $c^2$ leaves as kinetic energy and photons.',
      },
      {
        term: "Momentum and Energy: solution protocol",
        kind: "method",
        statement: "**Solve Momentum and Energy problems by (1) naming the governing principle, (2) writing its equation, (3) substituting numbers with units.** Here the principle is the two postulates with $\\gamma$ running time dilation and length contraction; the working equation is $\\Delta t = \\gamma\\Delta t_0$, $L = L_0/\\gamma$, $\\gamma = 1/\\sqrt{1-\\beta^2}$, $E = \\gamma mc^2$; every substitution must carry its units so the final unit (dimensionless $\\gamma$ and $\\text{eV}$) emerges naturally.",
        detail: "HRW 11e tactic: draw the free-body or field sketch first, list knowns with units, solve symbolically and only then substitute numbers. Check the answer against $\\gamma \\approx 1.01$ at $0.14c$, $7.1$ at $0.99c$; electron $E_0 = 511\\ \\text{keV}$; inertial frames with $v < c$; proper time/length need the co-moving/rest frame.",
      },
    ],
    examples: [
      {
        title: 'An electron at 0.999c',
        problem: 'An electron ($mc^2 = 0.511$ MeV) is accelerated to $v = 0.999c$. Find $\\gamma$, its total energy, kinetic energy and momentum, and compare $K$ with the Newtonian value.',
        steps: [
          { label: 'Lorentz factor', text: '$\\gamma = 1/\\sqrt{1 - 0.998} = 22.4$.' },
          { label: 'Energies', text: '$E = \\gamma mc^2 = 22.4 \\times 0.511 = 11.4$ MeV; $K = (\\gamma - 1)mc^2 = 21.4 \\times 0.511 = 10.9$ MeV.' },
          { label: 'Momentum', text: '$pc = \\sqrt{E^2 - (mc^2)^2} = \\sqrt{(11.4)^2 - (0.511)^2} = 11.4$ MeV, so $p = 11.4$ MeV/$c$.' },
          { label: 'Newtonian comparison', text: '$\\frac{1}{2}mc^2\\beta^2 = 0.256$ MeV — the relativistic kinetic energy is 43 times larger. At 99.9% of $c$, classical mechanics is not even a rough guide.' },
        ],
        result: 'γ = 22.4, E = 11.4 MeV, K = 10.9 MeV, p = 11.4 MeV/c — versus a Newtonian K of only 0.26 MeV.',
      },
      {
        title: "Momentum and Energy: $\\gamma$ check",
        problem: "A muon moves at $v = 0.8c$. Compute $\\gamma = 1/\\sqrt{1-\\beta^2}$ and the dilated lifetime if $\\Delta t_0 = 2.20\\ \\mu\\text{s}$.",
        steps: [
          { label: "Beta squared", text: "$\\beta^2 = 0.8^2 = 0.64$; $1-\\beta^2 = 0.36$." },
          { label: "Gamma", text: "$\\gamma = 1/\\sqrt{0.36} = 1.67$." },
          { label: "Dilated", text: "$\\Delta t = 1.67\\times 2.20 = 3.67\\ \\mu\\text{s}$." },
        ],
        result: "$\\gamma \\approx 1.67$; $\\Delta t \\approx 3.67\\ \\mu\\text{s}$.",
      },
    ],
    keyTakeaways: [
      '$p = \\gamma mv$ and $E = \\gamma mc^2$ replace Newtonian momentum and energy; $K = (\\gamma-1)mc^2$.',
      '$E^2 = (pc)^2 + (mc^2)^2$ connects the two and gives photons $E = pc$.',
      'Mass is convertible energy: inelastic processes balance $E$ and $p$ by changing rest mass.',
    ],
    quiz: [
      {
        q: 'As $v \\to c$, the momentum $p = \\gamma mv$ of a massive particle:',
        options: ['grows without bound — $c$ is unreachable', 'approaches $mc$', 'approaches $mc^2$', 'stays finite and equals $mv$'],
        answer: 0,
        explanation: '$\\gamma \\to \\infty$: each further acceleration buys less speed but ever more momentum.',
      },
      {
        q: 'The correct relation among total energy $E$, rest energy $E_0 = mc^2$ and momentum is:',
        options: [`$E^2 = (pc)^2 + E_0^2$`, `$E = pc + mc^2$`, `$E^2 - (pc)^2 = 2E_0^2$`, `$E = K + p$`],
        answer: 0,
        explanation: 'The invariant: subtract $(pc)^2$ from $E^2$ in any frame and you get the rest energy squared.',
      },
      {
        q: 'A proton ($mc^2 = 938$ MeV) has kinetic energy 938 MeV. Its Lorentz factor is:',
        options: [`$\\gamma = 2$`, `$\\gamma = 1.41$`, `$\\gamma = 4$`, `$\\gamma = 1$`],
        answer: 0,
        explanation: '$K = (\\gamma-1)mc^2 = mc^2$ forces $\\gamma = 2$ (total energy twice rest energy).',
      },
    ],
  },
]
