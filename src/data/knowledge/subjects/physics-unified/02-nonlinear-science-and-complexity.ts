/**
 * Knowledge Universe — Physics — Chapter 02: Nonlinear Science & Complexity
 * 3 lessons · ~3,502 words
 * fields: Physics of Complexity, Systems Science
 * legacy sources: emerging-interdisciplinary.ts, physical-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Physics of Complexity, Systems Science]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 phys-chaos-nonlinear-dynamics — Chaos: When Simple Rules Make Wild Behavior
 *   02.2 phys-fractals-geometry-nature — Fractals: The Geometry of Nature
 *   02.3 emer-systems-thinking-feedback-loops — Systems Thinking: Feedback Loops Everywhere
 */
import type { KnowledgeTopic } from '../../types'

export const physicsUnifiedCh02: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'phys-chaos-nonlinear-dynamics',
    title: 'Chaos: When Simple Rules Make Wild Behavior',
    domain: 'Physical Sciences',
    field: 'Physics of Complexity',
    branch: 'Nonlinear Science',
    tier: 'advanced',
    concepts: [
      'Sensitivity to initial conditions',
      'The logistic map and period doubling',
      'Strange attractors and the Lorenz butterfly',
      'Fractal dimension of attractors',
      'Deterministic yet unpredictable',
      'Lyapunov exponents and prediction horizons',
      'Chaos in the weather forecast',
    ],
    words: 1249,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'In 1961 the meteorologist Edward Lorenz restarted a weather simulation by typing 0.506 into the machine in place of the stored 0.506127. That rounding — one part in four thousand — sent the forecast into a completely different future within a simulated month. Lorenz had discovered chaos: deterministic systems whose long-term behavior is effectively unpredictable because infinitesimal errors grow exponentially. Half a century later chaos is recognized as the rule rather than the exception in nature — weather, hearts, populations, planets — and this advanced lesson explains why simple rules make wild behavior, what strange attractors are, and where the wall of predictability stands.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Chaos sets hard physical limits on forecasting. Knowing the rules is not the same as knowing the future: weather forecasts, ecological models and medicine all budget for the day when errors overtake the answer.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A linear system obeys proportionality: double the input and the output doubles, so small errors stay small. Chaos requires nonlinearity — terms like x squared, or drag that switches sign with velocity — so the fate of a perturbation depends on the state it lands in. Trajectories are stretched in some directions and folded in others, multiplying any initial uncertainty exponentially. Two starting points a billionth apart separate as though chosen at random, yet a computer given exact arithmetic reproduces the orbit perfectly: chaotic systems are deterministic and unpredictable at once.',
      },
      {
        kind: 'para',
        text: 'The cleanest laboratory is the logistic map, a one-line model of a population x between 0 and 1 growing at rate r. For small r the population settles to a steady value. Past r = 3 the steady state loses stability and the population alternates between two values; raising r further splits them into four, then eight, then sixteen — period doubling, with the gaps between thresholds shrinking toward Feigenbaum\'s constant 4.669. Beyond r of about 3.5699 the sequence never repeats: full chaos, out of a single multiplication.',
      },
      {
        kind: 'para',
        text: 'Lorenz himself truncated the equations of fluid convection to three variables and found the famous butterfly: two lobes that the trajectory circles in unpredictable order, switching sides at erratic intervals. The orbit never closes and never crosses itself, yet it never leaves its confines. Such an object — a set of fractional dimension that traps trajectories while forever reshuffling them — is a strange attractor, and it is the geometric signature of chaos.',
      },
      {
        kind: 'para',
        text: 'What makes an attractor strange is geometry that survives magnification. Slice the Lorenz attractor and the cross-section is a dust of ever-smaller intervals; measure its scaling and it fills slightly more than a surface — dimension about 2.06, above an ordinary sheet. Fractal dimension quantifies how efficiently the attractor spreads through state space, and it explains why chaotic systems mix like fluids: an arbitrarily thin sheet of initial conditions gets folded until it textures an entire region.',
      },
      {
        kind: 'para',
        text: 'The Lyapunov exponent λ rates how fast neighbors separate: an initial error δ grows as δ times e to the power λt. Chaos means λ is positive, and that buys a prediction horizon — once the error reaches order one, the forecast is spent, so the horizon scales as ln(1/δ) divided by λ. Better instruments extend it only logarithmically: a thousandfold improvement in initial data adds just a few more error-doubling times. Weather has a Lyapunov-driven ceiling near two weeks, which is why modern forecasts run ensembles of perturbed starts and speak in probabilities.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Logistic map',
        latex: 'x_{n+1} = r\\,x_n\\,(1 - x_n)',
        meaning: 'Population x (between 0 and 1) one generation on; the growth parameter r carries the system from steady state through period doubling into chaos past about 3.5699.',
      },
      {
        kind: 'formula',
        name: 'Exponential divergence',
        latex: '\\delta(t) \\approx \\delta_0\\, e^{\\lambda t}',
        meaning: 'Growth of a tiny initial separation δ0 in a chaotic system; a positive Lyapunov exponent λ defines the prediction horizon.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how fast two nearly identical starting populations separate under the logistic map at r = 3.9.',
          'Set up: iterate x(n+1) = 3.9 x(n) (1 - x(n)) from x = 0.200 and, in parallel, from 0.201 — a starting difference of one part in 200.',
          'Iterate: after one step the runs read 0.624 versus 0.626; after three steps 0.303 versus 0.311; after six steps 0.958 versus 0.970.',
          'Measure the spread: the gap has grown from 0.001 to about 0.012 — a tenfold amplification in six iterations, roughly a factor of 1.65 per step, consistent with the map\'s Lyapunov exponent of about 0.5.',
          'Extrapolate and state the result: at that rate the 0.001 head start swells to order one in about fourteen iterations, so past fifteen steps the runs share nothing — extra precision buys a few more predictable iterations, never certainty.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Ensemble weather forecasts run dozens of slightly perturbed initial conditions and report probabilities rather than a single future',
          'Fisheries and pest managers keep harvested populations away from parameter ranges where the dynamics turn chaotic',
          'Cardiologists read heart-rate variability for healthy chaos, since overly regular rhythms can precede sudden cardiac arrest',
          'Engineers study chaotic lasers and circuits for spread-spectrum and encrypted communication links',
          'Mission designers exploit chaotic three-body trajectories to coast spacecraft between orbits on minimal fuel',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Chaos is not randomness: the rules are fixed, and with infinite precision the future is decided — only our knowledge decays. The butterfly effect does not mean one flap causes a tornado; it means small uncertainties grow until their origins no longer matter. And an irregular-looking signal is not automatically chaotic — a positive Lyapunov exponent, not an eyeball, settles the question.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Chaos', def: 'Deterministic dynamics with exponential sensitivity to initial conditions, making long-term prediction impossible in practice.' },
          { term: 'Sensitivity to initial conditions', def: 'The property that arbitrarily small differences in starting state grow exponentially with time.' },
          { term: 'Logistic map', def: 'The one-parameter iteration x(n+1) = r x(n) (1 - x(n)), the simplest system that walks the full road to chaos.' },
          { term: 'Period doubling', def: 'The cascade of cycle lengths 1, 2, 4, 8 ... as a control parameter increases.' },
          { term: 'Strange attractor', def: 'A fractal set in state space on which chaotic trajectories wander forever without closing or crossing.' },
          { term: 'Lyapunov exponent', def: 'The rate λ at which neighboring trajectories separate; λ > 0 is the mathematical signature of chaos.' },
          { term: 'Feigenbaum constant', def: 'The universal ratio 4.669... by which successive period-doubling thresholds converge, across unrelated systems.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Chaotic systems are best described as:',
            options: ['Random processes with no underlying rules', 'Deterministic systems where tiny errors grow exponentially', 'Systems that always settle to a fixed point', 'Systems too complicated for any equation'],
            answer: 1,
            explain: 'The rules are fully deterministic; unpredictability comes from the exponential amplification of unavoidable measurement error.',
          },
          {
            q: 'As the growth parameter r rises, the logistic map undergoes:',
            options: ['Immediate randomness at r = 2', 'A smooth slide into noise', 'Nothing; it is always stable', 'Period doubling — cycles of 2, 4, 8 ... — before chaos near r = 3.5699'],
            answer: 3,
            explain: 'A fixed point gives way to a 2-cycle at r = 3, then 4, 8, 16 ..., converging on chaos beyond about 3.5699.',
          },
          {
            q: 'A strange attractor is strange because it:',
            options: ['Repels all trajectories that approach it', 'Is a fractal of non-integer dimension that traps trajectories in endless reshuffling', 'Appears only in quantum mechanics', 'Moves through ordinary space over time'],
            answer: 1,
            explain: 'The attracting set has structure at every magnification — the Lorenz attractor measures about 2.06 dimensions.',
          },
          {
            q: 'Improving initial measurements a thousandfold extends a chaotic forecast by:',
            options: ['A thousandfold', 'Nothing at all', 'Only a modest, logarithmic amount — a few error-doubling times', 'Exactly one Lyapunov exponent'],
            answer: 2,
            explain: 'The horizon grows as ln(1/δ) divided by λ, so linear gains in precision buy only logarithmic gains in prediction time.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'phys-fractals-geometry-nature',
    title: 'Fractals: The Geometry of Nature',
    domain: 'Physical Sciences',
    field: 'Physics of Complexity',
    branch: 'Nonlinear Science',
    tier: 'intermediate',
    concepts: [
      'Self-similarity across scales',
      'The coastline paradox',
      'Fractal dimension D',
      'The Mandelbrot set',
      'Fractals in lungs, rivers and broccoli',
      'From antennas to CGI terrain',
    ],
    words: 1240,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Clouds are not spheres, mountains are not cones, coastlines are not circles — so began Benoit Mandelbrot\'s 1975 manifesto for a geometry of roughness. Classical geometry deals in smooth ideal forms; nature is crinkled, branched and pitted at every scale you examine it. Mandelbrot named the mathematics of such shapes fractals and showed they could be measured and generated. This intermediate lesson builds the idea of self-similarity, quantifies it as fractal dimension, tours the Mandelbrot set and nature\'s fractals from lungs to river deltas, and follows the applications that took roughness from curiosity to industry.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Fractal dimension is a number you can measure on anything rough, and it works: it quantifies coastlines and watersheds, diagnoses texture in medical images, compresses pictures and shapes the antenna in your pocket. Roughness, it turns out, has laws.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Zoom into a fern and the branchlets look like the frond; zoom a cloud and puffs beget smaller puffs. Self-similarity — detail that reproduces the whole at different scales — is the defining fractal property. It also breaks the ruler. In the 1950s Lewis Fry Richardson noticed that published lengths of national borders disagreed wildly, because surveyors had walked them with rulers of different lengths: shorter rulers trace more crinkle. Mandelbrot\'s famous 1967 paper, How Long Is the Coast of Britain?, argued the question has no single answer — measured length depends on the ruler, and that dependence itself measures roughness.',
      },
      {
        kind: 'para',
        text: 'The measure is fractal dimension. Cover a shape with N smaller copies of itself, each shrunk by a factor s, and the three obey N = s to the power D. A smooth line doubles in length when the ruler halves (D = 1); a filled square needs four copies at half size (D = 2). Between those integers live fractals: Britain\'s west coast measures about D = 1.25, Norway\'s fjord-cut coast near 1.52. Dimension becomes a dial from smooth to space-filling.',
      },
      {
        kind: 'para',
        text: 'Pure mathematics supplies the extremes. The Koch snowflake, built by replacing the middle third of every line segment with a triangular bump, needs 4 copies shrunk by 3: D = log 4 / log 3 ≈ 1.26, and its length genuinely diverges as the construction continues. The Sierpinski triangle drills a plane down toward dimension 1.58. And iterating the simple complex map z → z² + c, coloring each starting value c by whether the orbit escapes, draws the Mandelbrot set — its boundary is infinitely detailed under magnification and has dimension 2, a line so crinkled it fills area. No simpler equation produces structure so inexhaustible.',
      },
      {
        kind: 'para',
        text: 'Nature\'s fractals are statistical and finite-ranged, but the fit is real. A lung packs a gas-exchange surface of some 70 square meters into a chest by branching through roughly 23 generations, giving its surface a dimension near 3; rivers, lightning, blood vessels and Romanesco broccoli repeat branching rules across scales; fracture surfaces, mountain skylines and clouds all carry a measurable D. Evolution keeps selecting fractal packing: maximum interface — feeding, breathing, draining — from minimum material.',
      },
      {
        kind: 'para',
        text: 'Engineers adopted the geometry. Fractal antennas — metal traces bent into patterns that repeat across scales — resonate over many frequency bands within a centimeter of space and now live in nearly every phone. Computer graphics synthesizes terrain and vegetation by stochastic subdivision; image compression once exploited self-similarity; medicine reads fractal texture in bone scans and tumor margins. In physics itself, percolation clusters, diffusion-limited aggregates and Brownian paths are all fractal — the natural geometry of disordered matter.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Fractal dimension from scaling',
        latex: 'N = s^{D}, \\qquad D = \\frac{\\log N}{\\log s}',
        meaning: 'A shape that reassembles from N copies of itself shrunk by factor s has dimension D — between 1 (smooth curve) and 2 (filled region) for a coastline.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the fractal dimension of a coastline from ruler-counting data.',
          'Recall the rule: cover the coast with rulers of length ℓ and count the segments N; shrinking the ruler by a factor s multiplies the count by s to the power D, so D = log N / log s.',
          'Apply: a 200-kilometer ruler traces the coast in 10 segments (length 2,000 km); a 100-kilometer ruler needs 24; a 50-kilometer ruler needs 57. Halving the ruler multiplies the count by about 2.4, so D = log 2.4 / log 2 ≈ 1.26.',
          'Check consistency: the next halving gives 57/24 = 2.375, hence D = log 2.375 / log 2 ≈ 1.25 — the dimension is stable across scales, the signature of fractality.',
          'State the result: D ≈ 1.26, and the practical consequence: measured length grows without limit as the ruler shrinks — the question of a coast\'s exact length has no scale-free answer.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Fractal antennas pack multiband reception into phones, vehicles and small satellites',
          'Film and game studios build terrain, clouds and vegetation from fractal subdivision',
          'Medical imaging measures the fractal texture of bone, vessels and tumors as diagnostic clues',
          'Hydrologists use drainage-network scaling to model floods and erosion',
          'Percolation and aggregation models describe disordered materials with fractal statistics',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Not everything jagged is fractal — genuine fractality needs detail persisting across a whole range of scales, and natural objects cut off at molecular and planetary ends. Fractal dimension is a summary statistic, not a fingerprint: different shapes can share one D. And the infinite coastline is a statement about rulers, not about matter — at atomic scale the question stops being geometric.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Self-similarity', def: 'The property of looking like oneself at different magnifications, exactly or statistically.' },
          { term: 'Fractal dimension', def: 'The scaling exponent D linking copy count to shrink factor; a dial from smooth line (1) to filled plane (2).' },
          { term: 'Coastline paradox', def: 'The finding that a coast\'s measured length grows as the measuring ruler shrinks, so no single length exists.' },
          { term: 'Mandelbrot set', def: 'The set of complex numbers c whose iterated orbits under z → z² + c stay bounded; its boundary is a fractal of dimension 2.' },
          { term: 'Iterated map', def: 'A rule applied repeatedly to its own output, the engine that generates fractal structure.' },
          { term: 'Box-counting dimension', def: 'D estimated by counting how the number of covering boxes scales with box size.' },
          { term: 'Percolation cluster', def: 'The fractal network formed at the threshold where random connections first span a system.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The coastline paradox states that:',
            options: ['Coastlines are infinitely long in a material sense', 'Measured length grows as the measuring stick shrinks, so no single length exists', 'Coastlines are perfect circles at large scale', 'Rulers expand near water'],
            answer: 1,
            explain: 'Each shorter ruler traces more crinkle; the length diverges as a limit, which is why scale must be stated.',
          },
          {
            q: 'A shape reassembles from 4 copies of itself shrunk by a factor of 3. Its fractal dimension is:',
            options: ['D = 3/4', 'D = 4 + 3 = 7', 'D = log 4 / log 3 ≈ 1.26', 'D = 0'],
            answer: 2,
            explain: 'N = s^D gives D = log 4 / log 3 — the Koch snowflake dimension.',
          },
          {
            q: 'Natural fractals like lungs differ from mathematical fractals because they are:',
            options: ['Not rough at all', 'Statistically self-similar over a finite range of scales', 'Exactly self-similar at every scale', 'Forbidden by thermodynamics'],
            answer: 1,
            explain: 'Branching repeats across many but not all scales, and randomness makes the similarity statistical rather than exact.',
          },
          {
            q: 'Which is NOT a genuine fractal application?',
            options: ['Multiband antennas in phones', 'Procedural terrain in computer graphics', 'Fractal texture analysis in medical images', 'Quoting a country\'s border as one exact length'],
            answer: 3,
            explain: 'A single exact length is precisely what fractality denies — the number depends on the ruler used.',
          },
        ],
      },
    ],
  },
  {
    id: 'emer-systems-thinking-feedback-loops',
    title: 'Systems Thinking: Feedback Loops Everywhere',
    domain: 'Emerging & Interdisciplinary',
    field: 'Systems Science',
    branch: 'Complexity',
    tier: 'intermediate',
    concepts: [
      'Stocks and flows',
      'Reinforcing (amplifying) feedback loops',
      'Balancing (goal-seeking) feedback loops',
      'Delays: the cause of overshoot and oscillation',
      'Emergence: patterns no part contains',
      'Leverage points and system boundaries',
    ],
    words: 1013,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'A city adds buses, yet service gets worse; a thermostat fights a radiator that overshoots; a price war reignites from one temporary discount. Systems science insists these are not separate puzzles but the same anatomy: stocks, flows, feedback loops, and delays. This intermediate topic from the Complexity branch of Emerging & Interdisciplinary fields lays out that anatomy — plus Donella Meadows\' map of leverage points, where pushing on a system actually works. It is the closest thing science has to X-ray vision for organizations, markets, epidemics, and habits.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Policy disasters and personal burnout share a cause: fixing events instead of structure. Systems literacy explains why some interventions — a rule change, a new information flow — transform outcomes while others just push harder on a parameter nobody responds to.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A stock is an accumulation — water in a tub, inventory in a warehouse, carbon in the atmosphere — filled and drained by flows. Because stocks change only gradually, they give systems memory and inertia: today\'s atmospheric carbon reflects a century of flows, which is why climate responds like a supertanker, not a speedboat.',
      },
      {
        kind: 'para',
        text: 'Reinforcing feedback amplifies change: more of X produces more of X. Compound interest, epidemics, viral product loops, and arms races share this shape, as do vicious spirals like poverty limiting education limiting income. Small early differences compound into dominance.',
      },
      {
        kind: 'para',
        text: 'Balancing feedback seeks a goal: a thermostat, hunger, a fever, market arbitrage. The loop compares actual against target and applies correcting pressure — powerful, but only as wise as the goal it serves. Stable does not mean good: a poverty trap and a comfortable status quo are both defended equilibria.',
      },
      {
        kind: 'para',
        text: 'When feedback arrives late, systems overshoot: you turn the shower knob, nothing happens, you turn it more, and scalding water arrives ten seconds later. Supply chains replay this daily as the bullwhip effect — small retail swings amplifying into factory whiplash — and the classic business-school beer game shows smart players oscillating a simple inventory purely from delay.',
      },
      {
        kind: 'para',
        text: 'Traffic jams without accidents, ant colonies without architects, prices without committees: system-level patterns arise from local rules interacting, and no individual part contains the pattern. This is why studying components in isolation keeps missing phenomena that exist only in the interactions.',
      },
      {
        kind: 'para',
        text: 'Donella Meadows ranked places to intervene in a system: parameters like tax rates and buffer sizes sit shallow; information flows and rules run deeper; goals and paradigms deepest of all. Her counterintuitive finding — everyone pushes parameters, which change the least — pairs with another discipline: make your system boundary a conscious, revisable choice, because where you draw the edge determines every conclusion you reach.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Stock accumulation',
        latex: '\\frac{dS}{dt} = \\text{inflow} - \\text{outflow}',
        meaning: 'A stock changes only through its flows — the bathtub law: the level moves when inflow and outflow differ.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: a city\'s buses run chronically late; the transit authority keeps adding vehicles, and lateness persists. Why, and what actually works?',
          'Recall the governing structures: reinforcing feedback — a late bus collects more waiting passengers, falls further behind, and then meets even more passengers — plus delayed corrective response.',
          'Apply: model passengers waiting at stops as a stock feeding the bunching loop. Adding buses dilutes average passenger load but leaves the loop intact, and schedule pressure keeps fighting it.',
          'State the result: break the loop instead of feeding it — hold early buses at control points to keep spacing even, managing headway rather than rigid schedules; this is exactly how real transit systems control bunching.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Epidemic response: cut contacts and infectious duration rather than debating the virus\'s nature.',
          'Business: map how KPIs interact before optimizing one number into a local optimum.',
          'Climate policy: attack flow imbalances early, because stock inertia guarantees lagged consequences.',
          'Personal habits: redesign the cue–routine–reward loop instead of treating willpower as a parameter.',
          'Urban planning: added road capacity often refills with traffic — induced demand at work.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Event thinking is the default error — asking who caused this about what structure produced. Ignoring delays makes you overcorrect, like the shower-scalding novice. And beware the leverage trap: pushing parameters harder — more buses, bigger budgets, steeper penalties — while the loop structure itself is the problem is how institutions burn money for decades.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Stock', def: 'An accumulation — bathtub level, inventory, debt — changed only by flows.' },
          { term: 'Flow', def: 'A rate filling or draining a stock over time.' },
          { term: 'Reinforcing loop', def: 'Feedback that amplifies change — growth spirals, runaways, compounding.' },
          { term: 'Balancing loop', def: 'Goal-seeking feedback that corrects deviations toward a target.' },
          { term: 'Delay', def: 'The lag between action and its feedback; the mother of overshoot.' },
          { term: 'Emergence', def: 'System-level pattern arising from local interactions, absent from any part.' },
          { term: 'Leverage point', def: 'A place in system structure where small change yields large behavioral change.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A thermostat maintaining temperature is an example of:',
            options: ['A reinforcing loop', 'A balancing loop', 'Emergence', 'A stock with no flows'],
            answer: 1,
            explain: 'It compares actual to goal and applies correcting pressure — the definition of goal-seeking feedback.',
          },
          {
            q: 'Bus bunching — a late bus getting later — is driven by:',
            options: ['A balancing loop', 'A reinforcing loop of accumulating passengers', 'Random driver behavior', 'Insufficient fuel stocks'],
            answer: 1,
            explain: 'Lateness increases passenger loads, which increases lateness: amplifying feedback.',
          },
          {
            q: 'Overshoot and oscillation in supply chains most directly come from:',
            options: ['Greedy managers', 'Delays between action and feedback', 'Too many stocks', 'Emergence of new markets'],
            answer: 1,
            explain: 'The bullwhip effect arises when orders respond to delayed signals, amplifying each correction.',
          },
          {
            q: 'According to Meadows\' leverage-point hierarchy, the deepest interventions are:',
            options: ['Adjusting parameters like tax rates', 'Buffer sizes', 'Information flows', 'Goals and paradigms of the system'],
            answer: 3,
            explain: 'Paradigms and goals sit deepest; parameters — where most effort goes — sit shallowest.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'No math prerequisites — bathtub logic and diagrams suffice. Next: causal loop diagramming practice, then system dynamics simulation with stock–flow models, then complexity science proper: networks and agent-based models.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Stocks change only through flows, and stocks carry the memory.',
          'Reinforcing loops amplify; balancing loops seek goals.',
          'Delays cause overshoot and oscillation.',
          'Emergence: patterns exist only in interactions, not in parts.',
          'Push goals, rules, and information flows — not parameters.',
        ],
      },
    ],
  },
]
