/**
 * Knowledge Universe — Computational Science & Simulation — Chapter 01: Numerical Methods
 * 3 lessons · ~4,774 words
 * field: Computational Science
 * legacy sources: x51-library-org-pass.ts, x59-library-org-pass.ts, x61-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Numerical Methods]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 compsci-numerical-methods — Numerical Methods: The Engine Under Every Simulation
 *   01.2 compsci-monte-carlo-mcmc — Monte Carlo, MCMC and Quantified Uncertainty
 *   01.3 compsci-hpc-parallel-scaling — High-Performance Computing: Parallelism, Scaling and the Exascale Era
 */
import type { KnowledgeTopic } from '../../types'

export const computationalScienceCh01: KnowledgeTopic[] = [
  {
    id: 'compsci-numerical-methods',
    title: 'Numerical Methods: The Engine Under Every Simulation',
    domain: 'Emerging & Interdisciplinary',
    field: 'Computational Science',
    branch: 'Numerical Methods',
    tier: 'core' as const,
    concepts: [
      'Discretization: turning calculus into arithmetic',
      'Finite differences from Taylor series',
      'Explicit Euler to RK4: the integrator ladder',
      'Stability and the CFL condition',
      'Stiff systems: why implicit methods exist',
      'Monte Carlo: error falls as 1/√N in any dimension',
      'Verification, validation and floating-point reality',
    ],
    words: 1223,
    readMins: 6,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The digital-twins lesson of this book showed live sensor-model coupling; the climate-models lesson showed an Earth grid solving equations. This lesson opens the machinery both of them run on — the shared numerical engine underneath every simulation in science and engineering: how calculus becomes arithmetic, when that arithmetic stays stable, and how you know whether to believe the answer.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Almost no differential equation of practical interest has a closed-form solution — the ones in textbooks are chosen BECAUSE they solve. Everything else, from wing design to epidemic curves to the pricing of an option, runs through the numerical methods this lesson teaches. The engine has exactly four failure modes (inaccuracy, instability, stiffness, unverified answers), and every one of them has crashed a real project.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Discretization is the founding move: replace the continuum with a grid and derivatives with differences. The Taylor series gives the recipe — a forward difference (u(x+h) − u(x))/h approximates u′ with error O(h); the central difference (u(x+h) − u(x−h))/2h reaches O(h²) for the same grid cost, which is why production codes use central schemes wherever they can. Truncation error (the math you dropped) fights round-off error (the floating-point arithmetic you keep) — shrinking h reduces one and inflates the other, so accuracy has a floor, not a horizon. And floating point itself is finite: 0.1 + 0.2 does not equal 0.3 in binary, and summing a million small numbers in the wrong order loses real physics to rounding.',
      },
      {
        kind: 'para',
        text: 'For time evolution, the integrator ladder. Explicit Euler advances u(n+1) = u(n) + h·f(u(n)) — one evaluation per step, O(h) accurate, and notoriously unstable for anything oscillatory or decaying fast. The improved Euler (Heun) averages two slopes; the classical Runge-Kutta RK4 weights four slope evaluations per step for O(h⁴) accuracy — the workhorse of general-purpose simulation. Adaptive step-size control runs RK pairs, estimates local error, and shrinks h exactly where the solution bends — which is how modern ODE solvers feel effortless.',
      },
      {
        kind: 'para',
        text: 'Stability is where simulations die loudly. Explicit schemes on spatial grids obey the CFL condition — information must not cross more than one cell per step, giving Δt ≤ C·Δx/v — so a 10× finer grid forces a 10× smaller time step and 100× the work. Worse is stiffness: systems mixing fast and slow dynamics (chemistry plus diffusion; circuits plus thermal drift) force explicit methods to march at the FAST timescale even when only the slow behavior matters. Implicit methods (backward Euler, and the BDF family in every serious ODE package) evaluate f at the NEW time — requiring a nonlinear solve per step — and buy unconditional stability for the cost; stiff problems are exactly where implicit wins and explicit explodes.',
      },
      {
        kind: 'para',
        text: 'Monte Carlo is the other great engine: estimate an expectation by random sampling — mean of N draws, and the error shrinks as 1/√N no matter how many dimensions the integral lives in. That dimension-independence is the escape hatch from the curse of dimensionality that traps grid methods (a 100-point grid in 20 dimensions is 10⁴⁰ cells — but 10⁴ Monte Carlo samples work the same in 20 dimensions as in 1). The price is the square root: one more digit of accuracy costs 100× the samples, which is why variance-reduction tricks (antithetic variates, control variates, importance sampling) are half of practical Monte Carlo practice — and why finance, particle transport and Bayesian statistics all run on this engine.',
      },
      {
        kind: 'para',
        text: 'Trust comes from verification and validation, and they are different. Verification asks "did we solve the equations right" — grid-convergence studies (halve Δx and Δt; the answer should approach a limit at the scheme\u2019s known order), manufactured solutions, code-to-code checks. Validation asks "did we solve the right equations" — compare against experiment, with uncertainty quantification on both sides. A simulation without a convergence study is a picture, not a result; a result without error bars is an opinion. This discipline — and its open-textbook form, Chasnov\u2019s Numerical Methods for Engineers — is what separates computational science from computer graphics.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Task: integrate Newton\u2019s cooling law du/dt = −k(u − T_room) with u(0) = 90°C, k = 0.1/min, T_room = 20°C.',
          'Explicit Euler with h = 1 min: each step loses 10% of the gap — u(1) = 90 − 0.1·(90−20) = 83. The exact solution: 90·e^(−0.1) ≈ 83.8.',
          'Refine h = 0.25: the Euler sequence hugs the exponential curve; the error at t = 10 drops about 4× — O(h) in action.',
          'Switch to RK4: error becomes invisible at engineering precision — and the lesson generalizes: integrator order, not step-size heroics, is what you buy with complexity.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Weather and climate: the CFL condition is literally why forecast models run at fixed time steps on global grids.',
        'Engineering solvers: every CFD and structural package ships implicit schemes for exactly the stiffness reasons this lesson gives.',
        'Quantitative finance: Monte Carlo prices derivatives in hundreds of dimensions where grids cannot exist.',
        'Epidemiology and pharma: compartment models (SIR-family) are RK4-integrated; pharmacokinetics is stiff and solved implicitly.',
        'Machine learning training: gradient descent is explicit Euler on the parameter trajectory — step size is stability, not philosophy.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, trusting a single-resolution run: no convergence study, no result — a finer grid may be converging anywhere. Second, assuming smaller h is always better: round-off has a floor, and beyond it you pay compute to add error. Third, running explicit schemes on stiff systems — the timestep collapses or the solution explodes; go implicit. Fourth, quoting Monte Carlo error as "random": it is a law (√N) — 100× the samples buys exactly one digit. Fifth, confusing verification with validation: passing the convergence study says nothing about whether the equations describe reality. Sixth, forgetting floating point: accumulate in the right order and never test reals for exact equality.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'finite difference', def: 'Derivatives replaced by grid-point differences — forward O(h), central O(h²).' },
        { term: 'RK4', def: 'The classical fourth-order Runge-Kutta integrator — four slope evaluations per step, the general-purpose workhorse.' },
        { term: 'CFL condition', def: 'Δt ≤ C·Δx/v — the stability law that couples time step to grid size for explicit schemes.' },
        { term: 'stiffness', def: 'Mixed fast-slow dynamics forcing explicit methods to the fast timescale — the case for implicit solvers.' },
        { term: 'Monte Carlo', def: 'Expectation estimation by random sampling — error √N-independent of dimension, 1/√N in accuracy.' },
        { term: 'verification / validation', def: 'Solving the equations right / solving the right equations — the two gates every simulation must pass.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Why do production codes prefer central differences over forward ones?',
          options: ['They are easier to code', 'O(h²) accuracy at the same grid cost', 'They never go unstable', 'They avoid floating point'],
          answer: 1,
          explain: 'The symmetric stencil buys second-order accuracy for free.',
        },
        {
          q: 'Halving Δx on an explicit scheme forces…',
          options: ['a 2× smaller Δt by CFL — 4× the work', 'a larger Δt', 'no change', 'implicit methods automatically'],
          answer: 0,
          explain: 'CFL ties Δt to Δx: fine grids pay twice — in space and in time.',
        },
        {
          q: 'A chemistry-plus-diffusion model explodes under explicit stepping. The standard fix is…',
          options: ['smaller cells', 'an implicit solver for the stiff system', 'more samples', 'a Monte Carlo rewrite'],
          answer: 1,
          explain: 'Stiffness is the textbook case for implicit methods — unconditional stability at a per-step solve cost.',
        },
        {
          q: 'To gain one more digit of Monte Carlo accuracy you need roughly…',
          options: ['2× the samples', '10× the samples', '100× the samples', '10,000× the samples'],
          answer: 2,
          explain: 'Error falls as 1/√N — each digit costs a hundredfold.',
        },
      ] },
    ],
  },
  {
    id: 'compsci-monte-carlo-mcmc',
    title: 'Monte Carlo, MCMC and Quantified Uncertainty',
    domain: 'Emerging & Interdisciplinary',
    field: 'Computational Science',
    branch: 'Numerical Methods',
    tier: 'intermediate',
    concepts: [
      'estimating expectations by sampling: the π prototype',
      'inverse-transform and rejection sampling',
      'Metropolis–Hastings: Markov chains with a target distribution',
      'burn-in, autocorrelation and effective sample size',
      'variance reduction: control, antithetic, importance',
      'quasi-Monte Carlo and low-discrepancy sequences',
      'uncertainty quantification and Sobol-style sensitivity',
    ],
    words: 1733,
    readMins: 9,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The numerical-methods lesson of this book established the Monte Carlo convergence law — error falls as 1/√N regardless of dimension — and named the variance-reduction family in one breath. This lesson opens the toolkit that law governs: where random samples actually come from, what to do when you cannot sample directly, and how the whole apparatus turns "uncertainty" from a shrug into an interval. The origin story sets the tone: Stanisław Ulam, recovering from illness in 1946, wondered about the odds of winning a game of solitaire — combinatorics hopelessly tangled, but a hundred played games would estimate it directly. With John von Neumann on the ENIAC, the doodle became a method for neutron transport; the name (Metropolis\'s, after the Monaco casino) stuck because the method is, at bottom, systematic gambling with the house edge in your favour.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Whenever a model is too tangled to solve and too high-dimensional to grid — derivative pricing, particle transport, Bayesian statistics, chip timing, reliability — Monte Carlo is the default engine. And its deeper export is cultural: reporting a number WITH its uncertainty band is now the standard of quantitative honesty across science and engineering, and sampling is how the band is computed.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The prototype is estimating π, and it is worth doing once by hand. Throw N points uniformly into the unit square; the fraction landing inside the quarter-circle of radius 1 estimates π/4. With N = 10,000 you get π ≈ 3.14 give or take about 0.02 — and the give-or-take follows the 1/√N law the numerical lesson proved: each extra digit of accuracy costs one hundred times the samples. The generalization is the whole method: ANY expectation E[f(X)] is estimated by averaging f over N random draws, and integration is the special case where f is an indicator. Dimension does not appear anywhere in the error rate — the escape hatch from the curse of dimensionality that traps grid methods (the numerical lesson\'s 100-point grid in 20 dimensions, 10⁴⁰ cells, versus 10⁴ samples working identically in 20 or in 1).',
      },
      {
        kind: 'para',
        text: 'The first practical question is where the draws come from — computers make PSEUDO-random numbers, deterministic sequences that pass statistical tests (the Mersenne Twister is the workhorse), and the seed that starts them is a reproducibility FEATURE: identical seed, identical "random" experiment, which is how variance-reduction tricks and regression tests work. Transformation then does the rest. Inverse-transform sampling draws u uniform on (0,1) and applies the inverse CDF: u → −ln(u)/λ gives exponential inter-arrival times exactly. Box–Muller converts two uniforms into a Gaussian pair. When the inverse CDF is intractable, rejection sampling samples an easy envelope distribution and accepts each candidate with probability equal to the ratio of target to envelope — exact, if occasionally wasteful. These three cover an enormous fraction of practical simulation.',
      },
      {
        kind: 'para',
        text: 'The hard case — and the one that changed statistics — is sampling a distribution known only UP TO A CONSTANT: Bayesian posteriors π(θ) ∝ likelihood × prior, where the normalizing integral is itself intractable. Neither inverse transform nor rejection applies cleanly. The 1953 answer (Metropolis, the Rosenbluths, the Tellers and von Neumann, on the MANIAC, simulating a hard-sphere gas) and its 1970 generalization (Hastings) is Markov chain Monte Carlo: build a random walk whose long-run stationary distribution IS the target. The Metropolis–Hastings recipe: from current θ, propose θ′ from a simple distribution q; accept with probability min(1, [π(θ′)q(θ|θ′)] / [π(θ)q(θ′|θ)]) — for a symmetric random-walk proposal, just the ratio of target densities. Accepted: move. Rejected: stay. The magic is that the accept ratio involves only the UNKNOWN-constant π, because the constant cancels. Run long enough and the chain\'s samples trace the posterior wherever it lives in any dimension.',
      },
      {
        kind: 'para',
        text: 'MCMC samples are NOT independent, and the discipline lives in its diagnostics. Early samples remember the starting point — discard the burn-in. Successive samples are autocorrelated — the chain needs several steps to furnish one effectively independent draw, so the effective sample size is far below N and the honest 1/√N law applies to THAT number. Convergence is judged, never assumed: trace plots for visual drift, the Gelman–Rubin R̂ statistic across chains started from dispersed points, effective-sample-size estimators for the autocorrelation tax. The 1990s transformation — Gibbs sampling, then Hamiltonian/NUTS samplers, wrapped in engines like Stan and PyMC — made full Bayesian data analysis routine across science; every credible interval in a modern Bayesian paper is MCMC output.',
      },
      {
        kind: 'para',
        text: 'Variance reduction is where engineering enters — the family the numerical lesson named, now unpacked. Control variates: average f together with a correlated variable g whose expectation you KNOW analytically; subtract the estimated error of g and the noise in f partly cancels (pricing with a control whose Black-Scholes value is exact is the textbook case). Antithetic variates: pair each draw with its "opposite" (u and 1−u, or −x with x); for symmetric problems the pairs average to below-half variance at double sample cost — usually a win. Importance sampling: draw from a distorted distribution q that visits the region you care about (the tail) more often, and reweight by p/q; rare-event simulation — a 1-in-10⁶ loss event, unobservable in a million naive draws — becomes tractable because q makes the rare common and the weights pay for it. Quasi-Monte Carlo abandons randomness partly: low-discrepancy sequences (Sobol, Halton) fill space more evenly than chance, with errors shrinking near N⁻¹ for smooth integrands — the finance industry\'s favourite upgrade.',
      },
      {
        kind: 'para',
        text: 'Uncertainty quantification (UQ) is the assembly of all this into engineering practice — the delivery on the digital-twins chapter\'s promise that uncertainty be a "first-class output". The discipline distinguishes aleatory uncertainty (physical scatter: manufacturing tolerances, weather) from epistemic uncertainty (model ignorance: parameters not yet measured), propagates input distributions THROUGH the model by Monte Carlo, and reports outputs as distributions — a bridge design gets a failure PROBABILITY, not a factor of safety alone. Sensibility then asks WHERE the output variance comes from: Sobol indices apportion output variance to each input (and their interactions) by resampling designs — variance-based sensitivity analysis. The climate chapter\'s ensembles are exactly this logic applied to initial conditions and parameterizations (that lesson owns the climate specifics); structural engineers run tolerance stack-ups the same way; nuclear transport codes — the method\'s birthplace — still license reactors on it. The shared habit: never quote a point estimate without its band.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Monte Carlo estimator and its error',
        latex: '\\hat{\\mu}_{N} = \\frac{1}{N}\\sum_{i=1}^{N} f(X_{i}),\\qquad \\sigma_{\\hat{\\mu}} = \\frac{\\sigma_{f}}{\\sqrt{N}}',
        meaning: 'The average of N samples estimates the expectation; the standard error shrinks as 1/√N — dimension-free (the numerical lesson\'s law, in use).',
      },
      {
        kind: 'formula',
        name: 'Metropolis–Hastings acceptance',
        latex: '\\alpha(\\theta \\to \\theta\') = \\min\\!\\left(1,\\; \\frac{\\pi(\\theta\')\\,q(\\theta|\\theta\')}{\\pi(\\theta)\\,q(\\theta\'|\\theta)}\\right)',
        meaning: 'Accept a proposal with this probability and the chain\'s stationary distribution is the (unnormalized) target π — the engine inside modern Bayesian computation.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: one Metropolis step for a standard-normal target π(θ) ∝ exp(−θ²/2), currently at θ = 1.0, proposing θ′ = 1.4.',
          'The random-walk proposal is symmetric, so q terms cancel: acceptance = min(1, π(1.4)/π(1.0)).',
          'Compute the ratio: exp(−(1.4² − 1.0²)/2) = exp(−0.48) ≈ 0.62.',
          'Draw u uniform on (0,1); suppose u = 0.55 < 0.62 — accept, so the chain moves to 1.4. Had u exceeded 0.62, the chain would stay at 1.0 for this step (still a valid sample of the chain).',
          'Interpret: uphill moves (toward the bulk of the density at 0) are always accepted; downhill moves are accepted probabilistically — the asymmetry that lets the chain explore the whole distribution without collapsing onto the mode.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Bayesian engines (Stan, PyMC): every credible interval in modern applied statistics is MCMC output',
          'Rare-event risk in banking and insurance: importance sampling for tail losses beyond naive reach',
          'Neutron and radiation transport (the MCNP lineage): reactor shielding and dosimetry',
          'Derivative pricing and risk (control variates + quasi-MC are the industry standard)',
          'Reliability engineering: tolerance stack-ups and failure probabilities from propagated input distributions',
          'Sobol-index sensitivity studies steering which experiments and calibrations are worth funding',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'MCMC samples are correlated: quoting 1/√N on the RAW count overstates your precision — use the effective sample size. Never skip burn-in, and never read convergence off one chain. The 1/√N law assumes finite variance — heavy-tailed payoffs break it, which is why risk simulation must first check the tails. And keep the epistemic/aleatory distinction: a tight interval on the wrong model is still wrong. Finally, "random" does not mean "arbitrary": the estimator is a law, the diagnostics are its audit.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Monte Carlo estimator', def: 'An expectation estimated as the average of N random samples, with standard error σ/√N.' },
          { term: 'Inverse-transform sampling', def: 'Drawing from a distribution by applying the inverse CDF to a uniform variate.' },
          { term: 'Rejection sampling', def: 'Sampling an envelope distribution and accepting candidates in proportion to the target/envelope ratio.' },
          { term: 'Markov chain Monte Carlo', def: 'Building a random walk whose stationary distribution is the target — sampling from unnormalized densities.' },
          { term: 'Metropolis–Hastings', def: 'The accept/reject rule that defines such chains; symmetric proposals reduce it to the density ratio.' },
          { term: 'Effective sample size', def: 'The autocorrelation-corrected number of independent-equivalent draws in an MCMC run.' },
          { term: 'Importance sampling', def: 'Sampling a distorted distribution and reweighting — the standard tool for rare events.' },
          { term: 'Sobol index', def: 'The fraction of output variance attributable to one input (or interaction) — variance-based sensitivity.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Monte Carlo beats grid integration in high dimensions because:',
            options: [
              'it is faster per arithmetic operation',
              'its 1/√N error rate is independent of dimension, while grids explode combinatorially',
              'random numbers are more accurate',
              'it avoids floating point',
            ],
            answer: 1,
            explain: 'The error law has no dimension factor — 10⁴ samples behave the same in 20 dimensions as in 1.',
          },
          {
            q: 'Metropolis–Hastings can sample Bayesian posteriors because:',
            options: [
              'it integrates the posterior numerically first',
              'the acceptance ratio uses only density RATIOS, so the unknown normalizing constant cancels',
              'priors are always uniform',
              'it draws directly from the likelihood',
            ],
            answer: 1,
            explain: 'The chain needs π up to a constant — exactly what unnormalized posteriors provide.',
          },
          {
            q: 'A chain\'s effective sample size is smaller than its nominal N because:',
            options: [
              'computers round numbers',
              'successive MCMC samples are autocorrelated — the chain needs several steps per independent-equivalent draw',
              'burn-in removes most samples',
              'the target is non-normal',
            ],
            answer: 1,
            explain: 'Correlation taxes the information per draw; the honest 1/√N law applies to the effective, not nominal, count.',
          },
          {
            q: 'Importance sampling makes rare-event simulation tractable by:',
            options: [
              'running the model faster',
              'sampling a distorted distribution that visits the rare region often, then reweighting by the probability ratio',
              'ignoring the tail',
              'increasing the risk threshold',
            ],
            answer: 1,
            explain: 'The weights restore the correct expectation while the sampling effort concentrates where the probability mass of INTEREST is.',
          },
        ],
      },
    ],
  },
  {
    id: 'compsci-hpc-parallel-scaling',
    title: 'High-Performance Computing: Parallelism, Scaling and the Exascale Era',
    domain: 'Emerging & Interdisciplinary',
    field: 'Computational Science',
    branch: 'Numerical Methods',
    tier: 'core' as const,
    concepts: [
      'Why one core stopped being enough',
      'Amdahl\u2019s law: the serial fraction that bounds speedup',
      'Gustafson\u2019s answer: scale the problem, not the patience',
      'The machine stack: MPI, OpenMP, GPUs and domain decomposition',
      'The roofline model: memory bandwidth as the real ceiling',
      'Exascale: Frontier, El Capitan and the cost of moving data',
    ],
    words: 1818,
    readMins: 9,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'The numerical-methods lesson of this chapter owns the mathematics of simulation — discretization, stability, the slow 1/√N convergence that Monte Carlo fights. But the biggest simulations in science are not limited by mathematics; they are limited by MACHINES, and machines stopped getting faster the simple way twenty years ago. Single-processor clock speeds plateaued in the mid-2000s when the power wall ended the gigahertz race, and the industry pivoted to the only resource it could still multiply: cores. Since then, scientific computing has been the art of spreading one calculation across thousands of processors without letting coordination eat the gains. This lesson is that art\u2019s rulebook — the two scaling laws, the machine stack, the memory-bound reality, and the exascale machines that embody all of it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every lesson in this book runs on the machinery of this one: the Monte Carlo ensembles, the digital twins, the climate model\u2019s ensemble spreads — all are parallel workloads whose feasibility is decided by the laws here. The gap between a code that scales and one that does not is the gap between a forecast that runs overnight and one that never finishes; between a national lab\u2019s exascale machine earning its electricity bill and an expensive space heater. The vocabulary — strong scaling, roofline, halo exchange — is the daily language of computational science as it is actually practiced.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Gene Amdahl stated the pessimist\u2019s law in 1967, and it has governed every parallelization plan since. If a fraction p of a program\u2019s work can run in parallel and the rest is irreducibly serial, then with N processors the speedup is S = 1/((1 − p) + p/N). The serial fraction does not shrink with N — it LOOMS. At p = 0.95, a hundred processors deliver S = 1/(0.05 + 0.0095) ≈ 16.8×, and as N grows without bound the speedup saturates at 1/(1 − p) = 20×. Buy a thousand processors for a program that is 95 percent parallel and you collect twenty-fold at best: the last five percent, usually input, output, coordination or an unparallelized kernel, becomes the entire cost center. Amdahl\u2019s law is why profiling — finding the serial fraction — precedes every serious parallelization effort, and why "just add more nodes" is not a strategy but a budget error.',
      },
      {
        kind: 'para',
        text: 'John Gustafson\u2019s 1988 answer reframed the question — and scientific computing has run on the reframe ever since. Amdahl fixed the problem size and asked how much faster; Gustafson fixed the TIME and asked how much bigger. Let the serial fraction be α of the parallel machine\u2019s runtime, and scale the problem with the machine: the scaled speedup becomes S = N − α(N − 1), which for α = 0.1 and N = 100 gives about 90× — near-linear. The reason is honest: scientists do not want the same computation faster, they want the same runtime spent on a BETTER computation — finer grid, longer simulation, more ensemble members, higher resolution. This is the distinction between strong scaling (same problem, more processors — Amdahl\u2019s regime, which saturates) and weak scaling (problem grows with the machine — Gustafson\u2019s regime, which can stay flat). Climate ensembles and lattice calculations are built weak; a single storm\u2019s nowcast must be strong. Knowing which regime your problem lives in decides everything about how you spend a machine.',
      },
      {
        kind: 'para',
        text: 'The machine stack has three standard layers. Between nodes — separate computers with separate memories — programs communicate through MPI, the Message Passing Interface standard (1994): processes exchange explicit messages, and the canonical pattern is domain decomposition, the simulation grid sliced into pieces, one per process, with each process exchanging halo or ghost cells — the boundary layers its neighbors need — after every timestep. Within a node\u2019s shared memory, OpenMP (1997) directives sprinkle parallel loops across threads without message passing. And beneath both sits the accelerator: the GPU, a thousands-wide bank of simple lanes executing the same instruction on different data — SIMT — fed through CUDA-style frameworks since 2007, delivering the memory bandwidth and floating-point throughput that matrix-dominated workloads crave. Production codes are hybrids: MPI across nodes, OpenMP or GPU kernels within, and the craft is choosing what runs where so that communication — the tax Amdahl warned about — stays under the compute.',
      },
      {
        kind: 'para',
        text: 'The roofline model is the performance engineer\u2019s map, published by Williams, Waterman and Patterson in 2009. A kernel\u2019s arithmetic intensity is its ratio of floating-point operations to bytes moved from memory. Plot attainable performance against that intensity on log axes: the ceiling is min(peak FLOPS, intensity × memory bandwidth) — a roofline with a sloping left side (memory-bound: bandwidth-limited) and a flat right side (compute-bound: peak-limited), meeting at the ridge point where intensity × bandwidth = peak. The model explains the most common performance shock in scientific computing: a naive matrix or stencil code with intensity near 0.25 FLOP/byte on a modern machine achieves a few percent of peak — the hardware is starving, not computing. Optimization is then reading the map: cache-blocking and fusion raise intensity; vectorization and GPU offload push toward the flat roof; and the first diagnostic is always where the kernel sits relative to the ridge.',
      },
      {
        kind: 'para',
        text: 'Exascale arrived in this decade. The TOP500 list — ranked since 1993 on the LINPACK benchmark — crowned Frontier at Oak Ridge the first exascale machine in June 2022, sustaining over 1.1 exaFLOPS (10¹⁸ floating-point operations per second), and El Capitan at Lawrence Livermore passed it in November 2024 at about 1.74 exaFLOPS, both built on AMD CPU+GPU nodes. The honest headline numbers, though, are power and movement: these machines draw tens of megawatts — a small town\u2019s electricity — and the Green500 list exists because performance per watt now ranks alongside raw FLOPS. Deeper still: moving a byte costs orders of magnitude more energy than a floating-point operation, which is why the roofline is really an energy map, why communication-avoiding algorithms are a research field, and why mixed precision — 16-bit arithmetic where AI tolerates it, 64-bit where conservation laws demand it — has become standard practice on the biggest machines.',
      },
      {
        kind: 'para',
        text: 'The craft closes the loop with this book. Monte Carlo ensembles are embarrassingly parallel — independent walks need no communication — which is why the Monte Carlo lesson\u2019s uncertainty quantification scales beautifully and why ensemble weather and climate forecasting was the first great beneficiary of many-core machines. Digital twins invert the budget: they must run FASTER than reality, a real-time constraint that forces model reduction, not just more hardware. Domain decomposition is the climate model\u2019s daily bread — every atmospheric code on Earth is a halo-exchange program. And the numerical-methods lesson\u2019s stability limits (the CFL condition) reappear as parallel constraints: finer decomposed grids demand smaller timesteps, so weak scaling buys resolution at a hidden time-stepping price. Parallel computing does not repeal the mathematics of simulation; it prices it.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Amdahl and Gustafson on the Same Machine',
        steps: [
          'Setup: N = 100 processors; the program is 90% parallel (p = 0.9, α = 0.1).',
          'Amdahl (same problem): S = 1/(0.1 + 0.9/100) = 1/0.109 ≈ 9.2×. Adding processors forever saturates at 1/0.1 = 10×.',
          'Gustafson (scaled problem, same runtime): S = 100 − 0.1 × 99 ≈ 90.1× — the machine now runs a grid ten times finer per dimension (100³ work) in the same wall-clock time.',
          'The lesson: same code, same machine, two honest answers to two different questions. State which question you are asking before you rent the supercomputer.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Weather and climate: ensemble forecasting and Earth-system models are the canonical weak-scaling workloads — the reason national weather services are supercomputing centers.',
        'CFD and engineering: aircraft, turbines and vehicles are designed in halo-exchanged domain-decomposition codes before any metal is cut.',
        'AI training: large-model training is extreme-scale weak scaling across GPU fabrics — the same MPI-and-broadcast machinery with tensor payloads.',
        'Drug discovery and materials: docking screens and first-principles materials searches parallelize over candidates, riding the embarrassingly-parallel easy case.',
        'Digital twins and national infrastructure: real-time fusion of simulation with sensor streams — the computational-science frontier this book\u2019s Simulating Reality chapter opens.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, extrapolating core counts past Amdahl: the serial fraction bounds strong scaling no matter what the procurement says — measure it before you promise it. Second, ignoring communication: halo exchanges and all-reduces grow as domains shrink, and at scale the boundary work can exceed the interior science. Third, trusting peak FLOPS: the roofline says most naive kernels live a few percent of peak; benchmark with the real data shapes. Fourth, assuming GPUs fix everything: transfer overhead to and from accelerator memory can erase the speedup for memory-bound or branchy code. Fifth, forgetting the timestep trap: decomposition refines grids, refined grids trip CFL limits, smaller timesteps undo the scaling — parallel efficiency and numerical stability negotiate through the same grid. Sixth, mixing precision casually: 16-bit arithmetic is a performance tool with numerical consequences, not a default.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Amdahl\u2019s law', def: 'Speedup S = 1/((1−p) + p/N) — the serial fraction bounds strong scaling at 1/(1−p) however many processors you buy.' },
        { term: 'Gustafson\u2019s law', def: 'Scaled speedup S = N − α(N−1): grow the problem with the machine and near-linear gains return.' },
        { term: 'Strong vs weak scaling', def: 'Same problem faster (saturates) versus bigger problem in the same time (can stay flat) — the first question of every HPC plan.' },
        { term: 'Domain decomposition', def: 'Slicing the grid across processes with halo/ghost-cell exchanges each step — MPI\u2019s canonical pattern.' },
        { term: 'Roofline model', def: 'Attainable performance = min(peak FLOPS, arithmetic intensity × bandwidth); kernels sit memory-bound left or compute-bound right of the ridge.' },
        { term: 'Exascale', def: 'Machines sustaining beyond 10¹⁸ FLOPS — Frontier (2022) first, El Capitan (2024) at ~1.74 EF/s — priced in megawatts and data movement.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A program is 90% parallel. With unlimited processors, its maximum speedup is…',
          options: ['90×', '10×', 'Unbounded', 'About 45×'],
          answer: 1,
          explain: 'Amdahl\u2019s ceiling is 1/(1−p) = 1/0.1 = 10× — the ten percent serial fraction becomes the entire runtime as N grows.',
        },
        {
          q: 'Weak scaling means…',
          options: ['the problem size grows with the processor count, holding runtime roughly constant', 'the code runs slower on more cores', 'only weak processors are used', 'the problem shrinks to fit one node'],
          answer: 0,
          explain: 'Gustafson\u2019s regime: more processors buy a bigger, better-resolved problem in the same wall-clock time — near-linear by design.',
        },
        {
          q: 'A kernel\u2019s arithmetic intensity sits well left of the roofline ridge point. Its performance is limited by…',
          options: ['peak FLOPS', 'memory bandwidth', 'core count', 'floating-point precision'],
          answer: 1,
          explain: 'Left of the ridge the machine is memory-bound: intensity × bandwidth caps performance far below peak — the fix is cache-blocking, fusion, vectorization.',
        },
        {
          q: 'Why do halo exchanges grow more expensive as a fixed grid is split across more and more processes?',
          options: ['Messages travel farther physically', 'Surface-to-volume ratio worsens: boundary cells grow relative to interior work', 'MPI slows down at scale', 'Timesteps get longer'],
          answer: 1,
          explain: 'Each split adds boundary and removes interior: communication grows while useful work per process shrinks — the strong-scaling tax Amdahl\u2019s law charges in practice.',
        },
      ] },
    ],
  },
]
