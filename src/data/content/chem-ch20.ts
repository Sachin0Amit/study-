import type { SectionContent } from '../library'

// ============================================================================
// chem-complete — Chapter 20: Reaction Dynamics and Surfaces (Atkins Foci 18-19)
// Sections 20.1 - 20.4. Master study content in Atkins language.
// Math is LaTeX rendered by KaTeX via the RichText $...$ pipeline.
// ============================================================================

export const chemCh20Content: SectionContent[] = [
  // ---------------------------------------------------------------- 20.1
  {
    sectionId: 'chem-ch20-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Collision theory to steric factors and cross sections',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Collision density and the energetic fraction',
            body: 'Count binary encounters from kinetic theory cross sections and relative speeds to get the collision density, then keep only the fraction with energy above the barrier. The rate constant becomes $k = PZ\\exp(-E_a/RT)$ where $Z$ carries diameters and reduced mass while $P$ discounts badly aimed hits. Small $P$ values for complex organics versus near unity for atoms show orientation matters as much as energy, a split that transition state theory later refines with entropy.'
          },
          {
            kind: 'theorem',
            heading: 'Steric versus energetic control diagnosed by prefactors',
            body: 'The **prefactor theorem** states that abnormally small Arrhenius prefactors signal orientational or entropic bottlenecks rather than high barriers. Gas phase atom recombinations hit collision numbers directly, while bulky cycloadditions fall orders below despite modest $E_a$ because only precise alignments react. Molecular beam scattering confirms the picture by resolving angular distributions that count successful geometries state by state.'
          },
          {
            kind: 'application',
            heading: 'From smog chemistry to combustion modeling',
            body: 'Atmospheric models use collision parameters for ozone destroying cycles where radical recombination rates decide lifetimes, and engine simulations chain thousands of such steps into ignition delays. Pressure falloff curves mark where unimolecular steps switch from activation to reaction control, guiding Lindemann Hinshelwood fitting in current kinetics databases. The graduate skill is translating a tabulated $A$ factor and $E_a$ pair into a mechanistic verdict about geometry versus energy.'
          }
        ]
      }
    ],
    readingTime: 9,
    intro: 'Collision theory pictures reaction as energetic encounters with the right orientation, turning gas-kinetic collision rates into chemical rates. A steric factor discounts badly aimed hits while the Boltzmann factor keeps only the hot tail. This section quantifies collisions exactly as Atkins Topic 18A develops them.',
    objectives: [
      'Write the collision-density and relative-speed expressions for a gas pair',
      'Separate steric and energetic requirements in the rate constant',
      'Estimate rates and activation energies from collision parameters'
    ],
    concepts: [
      {
        term: 'Collision density in a gas',
        kind: 'definition',
        statement: 'The **collision density** `Z-AB` counts encounters per volume per time, scaling as $Z_{AB} \\propto \\sigma \\langle v_{rel} \\rangle N_{A}N_{B}$ with cross section $\\sigma = \\pi d^{2}$ and mean relative speed $\\langle v_{rel} \\rangle = (8kT /\\pi\\mu)^{1/2}$.',
        detail: 'Reduced mass $\\mu$ and collision diameter $d$ come from the pair; pressure raises $N_{A}N_{B}$ quadratically. This is the encounter ceiling no bimolecular rate can exceed.'
      },
      {
        term: 'Energy requirement along line of centres',
        kind: 'law',
        statement: 'Only the **line-of-centres energy** `Ea` above $E_{a}$ reacts, contributing the fraction $e^{-E_{a} /RT}$ of collisions, so glancing blows waste even large total energies.',
        detail: 'Activation energy here is directional kinetic energy, not internal excitation. The exponential tail is why rates climb steeply with temperature.'
      },
      {
        term: 'Steric factor for orientation',
        kind: 'law',
        statement: 'The **steric factor** `P` multiplies the rate as $k = P\\sigma\\langle v_{rel} \\rangle N_{A}e^{-E_{a} /RT}$, dropping to $10^{-1}$ for bent approaches and $10^{-5}$ for demanding alignments.',
        detail: 'Bulky substituents and strict attack angles shrink $P$; harpoon electron-jump systems boost effective $\\sigma$ far beyond geometric size. $P$ absorbs all orientational ignorance.'
      },
      {
        term: 'RRK treatment of unimolecular decay',
        kind: 'theorem',
        statement: 'Energized molecules share energy over $s$ oscillators so the **RRK ratio** `RRK` $k_{b}(E)/k_{b} = (1-E^{*}/E)^{s-1}$ falls steeply when the critical energy $E^{*}$ nears the total $E$.',
        detail: 'Big molecules with many $s$ hold energy away from the breaking bond and decay slowly. Five-atom nonlinear frames with $s = 9$ illustrate the fall quantitatively.'
      },
      {
        term: 'Limits of the collision picture',
        kind: 'insight',
        statement: 'Collision theory fixes **encounter physics** `limits` well but hides bond reshaping inside $P$ and $E_{a}$, which is why transition-state theory must take over for entropy and structure effects.',
        detail: 'Solution diffusion caps encounters below gas values, and cage re-encounters complicate counting. Treat $P$ as fitted, not predicted, in complex systems.'
      }
    ],
    figures: [
      {
        caption: 'Steric requirement: head-on approach along the line of centres reacts while glancing contact wastes its energy, weighted by $P$.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Collision diagram contrasting reactive head-on and unreactive glancing approaches"><circle cx="200" cy="180" r="45" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="320" cy="180" r="45" fill="none" stroke="currentColor" stroke-width="3"/><line x1="120" y1="180" x2="155" y2="180" stroke="currentColor" stroke-width="2.5"/><polygon points="155,180 145,175 145,185" fill="currentColor"/><line x1="400" y1="180" x2="365" y2="180" stroke="currentColor" stroke-width="2.5"/><polygon points="365,180 375,175 375,185" fill="currentColor"/><text x="260" y="280" text-anchor="middle" font-size="14" fill="currentColor">head-on: reacts</text><circle cx="520" cy="120" r="40" fill="none" stroke="currentColor" stroke-width="3"/><circle cx="600" cy="200" r="40" fill="none" stroke="currentColor" stroke-width="3" stroke-dasharray="6 4"/><line x1="450" y1="100" x2="480" y2="110" stroke="currentColor" stroke-width="2"/><polygon points="480,110 470,108 472,118" fill="currentColor"/><text x="540" y="280" text-anchor="middle" font-size="14" fill="currentColor">glancing: misses</text><rect x="60" y="40" width="200" height="36" rx="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="160" y="63" text-anchor="middle" font-size="13" fill="currentColor">fraction P aimed right</text></svg>`,
        afterConcept: 3
      }
    ],
    examples: [
      {
        title: 'Collision rate constant for a simple pair',
        problem: 'Estimate $k$ at $300$ K for $d = 0.4$ nm, $\\mu = 3.0 \\times 10^{-26}$ kg, $P = 0.1$ and $E_{a} = 20$ kJ mol$^{-1}$.',
        steps: [
          { label: 'Step 1', text: 'Compute $\\langle v_{rel} \\rangle = (8kT /\\pi\\mu)^{1/2} \\approx 594$ m s$^{-1}$ and $\\sigma = \\pi d^{2} \\approx 5.03 \\times 10^{-19}$ m$^{2}$:\n```text\nsigma = pi d^2\nv-rel = sqrt(8 kT / pi mu)\nA-factor = P sigma v-rel NA\n```\nThe pre-exponential is the encounter rate per concentration.' },
          { label: 'Step 2', text: 'Form $A = P\\sigma\\langle v_{rel} \\rangle N_{A} \\approx 1.8 \\times 10^{7}$ m$^{3}$ mol$^{-1}$ s$^{-1}$.' },
          { label: 'Step 3', text: 'Attach $e^{-E_{a} /RT} = e^{-8.03} \\approx 3.3 \\times 10^{-4}$ to get $k \\approx 5.9 \\times 10^{3}$ m$^{3}$ mol$^{-1}$ s$^{-1}$.' }
        ],
        result: '$k \\approx 5.9 \\times 10^{3}$ m$^{3}$ mol$^{-1}$ s$^{-1}$ ($5.9 \\times 10^{6}$ L mol$^{-1}$ s$^{-1}$).'
      },
      {
        title: 'RRK slowdown in a five-atom molecule',
        problem: 'With $k_{b}(E)/k_{b} = 3.0 \\times 10^{-5}$ for a nonlinear five-atom energized molecule, find $E^{*}/E$.',
        steps: [
          { label: 'Step 1', text: 'Count oscillators $s = 3N-6 = 9$ for $N = 5$ nonlinear.' },
          { label: 'Step 2', text: 'Invert $(1-E^{*}/E)^{8} = 3.0 \\times 10^{-5}$ to $1-E^{*}/E = (3.0 \\times 10^{-5})^{1/8}$.' },
          { label: 'Step 3', text: 'Evaluate near $0.325$, so $E^{*}/E \\approx 0.675$: most energy sits elsewhere.' }
        ],
        result: '$E^{*}/E \\approx 0.68$, showing strong energy dilution over nine modes.'
      }
    ],
    keyTakeaways: [
      '$Z_{AB} \\propto \\sigma\\langle v_{rel} \\rangle N_{A}N_{B}$ with $\\langle v_{rel} \\rangle = (8kT /\\pi\\mu)^{1/2}$ caps encounters.',
      'Only line-of-centres energy above $E_{a}$ counts, giving $e^{-E_{a} /RT}$.',
      '$P$ discounts orientation from unity down to $10^{-5}$.',
      'RRK ratio $(1-E^{*}/E)^{s-1}$ slows big-molecule decay.'
    ],
    quiz: [
      {
        q: 'Doubling both reactant concentrations changes $Z_{AB}$ by:',
        options: ['No change', 'Doubling', 'Four times', 'Halving'],
        answer: 2,
        explanation: 'Step 1: Read $Z_{AB} \\propto N_{A}N_{B}$. Step 2: Double each factor. Step 3: Multiply to four times the encounters.'
      },
      // PYQ-pattern: steric versus energetic split drill
      {
        q: 'A tiny $P$ with normal $E_{a}$ means:',
        options: ['Orientation-demanding but energetically fine reaction', 'Diffusion-controlled reaction', 'Zero activation energy', 'Energetically blocked reaction'],
        answer: 0,
        explanation: 'Step 1: Separate $P$ from the exponential. Step 2: Keep the Boltzmann tail intact. Step 3: Blame geometry, not energy.'
      },
      {
        q: 'Harpoon reactions exceed geometric rates because:',
        options: ['Temperature is irrelevant', 'Electrons jump early, enlarging effective $\\sigma$', 'They break energy conservation', 'Steric factors exceed unity always'],
        answer: 1,
        explanation: 'Step 1: Picture electron transfer at long range. Step 2: Pull ions together by Coulomb force. Step 3: Harvest a cross section beyond $\\pi d^{2}$.'
      },
      {
        q: 'RRK decay slows for larger $s$ since:',
        options: ['Activation energy vanishes', 'Collisions stop', 'Energy concentrates faster', 'Energy dilutes over more modes away from the breaking bond'],
        answer: 3,
        explanation: 'Step 1: Share fixed $E$ over $s$ oscillators. Step 2: Starve the critical mode statistically. Step 3: Drop $(1-E^{*}/E)^{s-1}$ steeply.'
      }
    ]
  },
  // ---------------------------------------------------------------- 20.2
  {
    sectionId: 'chem-ch20-s2',
    readingTime: 10,
    intro: 'Transition-state theory replaces collisions with a quasi-equilibrium between reactants and the activated complex, then counts how fast the complex crosses the barrier. One universal frequency times the crossing equilibrium gives the Eyring equation. This section derives it and reads activation entropy exactly as Atkins Topic 18C does.',
    objectives: [
      'Write the Eyring equation from activated-complex equilibrium',
      'Split activation free energy into enthalpy and entropy of activation',
      'Predict kinetic isotope effects from zero-point changes at the barrier'
    ],
    concepts: [
      {
        term: 'Activated complex quasi-equilibrium',
        kind: 'definition',
        statement: 'Reactants hold **quasi-equilibrium** `complex` $A + B \\rightleftharpoons C^{\\ddagger}$ with constant $K^{\\ddagger}$, so $[C^{\\ddagger}] = K^{\\ddagger}[A][B]$ up to the $RT/p^{\\ominus}$ standard-state factor for gases.',
        detail: 'The complex sits at the potential saddle, kept in thermal balance with reactants while leaking to products. Femtochemistry now watches such lifetimes directly.'
      },
      {
        term: 'Universal crossing frequency',
        kind: 'theorem',
        statement: 'Barrier crossing runs at **$kT/h$** `crossing` rate $k^{\\ddagger} = \\kappa kT/h$, giving the Eyring form $k_{r} = \\kappa(kT/h)K^{\\ddagger}$ with transmission coefficient $\\kappa$ near unity.',
        detail: 'One vibrational period sets the attempt rate; recrossing and tunnelling fold into $\\kappa$. At $300$ K the ceiling frequency is about $6 \\times 10^{12}$ s$^{-1}$.'
      },
      {
        term: 'Eyring activation parameters',
        kind: 'law',
        statement: 'Writing $K^{\\ddagger}$ thermodynamically gives **Eyring parameters** `activation` $k_{r} = \\kappa(kT/h)e^{\\Delta^{\\ddagger}S/R}e^{-\\Delta^{\\ddagger}H /RT}$, read from Eyring plots of $\\ln(k_{r}/T)$ against $1/T$.',
        detail: 'Negative $\\Delta^{\\ddagger}S$ flags associative ordering; positive flags dissociative loosening. Ion-charge reactions add the electrostatic work term to $\\Delta^{\\ddagger}G$.'
      },
      {
        term: 'Primary kinetic isotope effect',
        kind: 'law',
        statement: 'Lighter isotopes react faster by **zero-point loss** `isotope` at the barrier, with $k_{H}/k_{D}$ up to about $7$ at $298$ K from $C$-$H$ versus $C$-$D$ stretching, collapsing toward unity when hot.',
        detail: 'The bond being broken loses its stretch at the transition state, keeping only transverse modes. Secondary effects from rehybridization run much smaller.'
      },
      {
        term: 'Tunnelling corrections for hydrogen',
        kind: 'insight',
        statement: 'Protons **tunnel through** `tunnelling` thin barriers below the classical threshold, inflating $k_{H}/k_{D}$ beyond $7$ and curving Arrhenius plots at low temperature.',
        detail: 'Deuterium tunnels far worse by heavier mass in $\\kappa = (2m(V_{0}-E))^{1/2}/\\hbar$. Cryogenic transfers may proceed almost entirely by tunnelling.'
      }
    ],
    figures: [
      {
        caption: 'Reaction coordinate: reactants climb $\\Delta^{\\ddagger}H$ to the activated complex, entropy of activation deciding the width of the pass.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Reaction coordinate diagram with activation barrier and thermodynamic labels"><line x1="70" y1="300" x2="660" y2="300" stroke="currentColor" stroke-width="2"/><text x="350" y="330" text-anchor="middle" font-size="14" fill="currentColor">reaction coordinate</text><path d="M90,260 C200,260 240,120 360,120 C480,120 520,240 630,240" fill="none" stroke="currentColor" stroke-width="3"/><line x1="90" y1="260" x2="170" y2="260" stroke="currentColor" stroke-width="2.5"/><text x="120" y="250" font-size="13" fill="currentColor">R</text><circle cx="360" cy="120" r="6" fill="currentColor"/><text x="360" y="100" text-anchor="middle" font-size="13" fill="currentColor">C‡ top</text><line x1="550" y1="240" x2="630" y2="240" stroke="currentColor" stroke-width="2.5"/><text x="600" y="230" font-size="13" fill="currentColor">P</text><line x1="200" y1="260" x2="200" y2="120" stroke="currentColor" stroke-width="1.6"/><polygon points="200,120 195,130 205,130" fill="currentColor"/><polygon points="200,260 195,250 205,250" fill="currentColor"/><text x="150" y="190" font-size="13" fill="currentColor">barrier</text></svg>`,
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: 'Eyring rate from activation parameters',
        problem: 'With $\\Delta^{\\ddagger}H = 50$ kJ mol$^{-1}$ and $\\Delta^{\\ddagger}S = -40$ J mol$^{-1}$ K$^{-1}$ at $298$ K and $\\kappa = 1$, estimate $k_{r}$.',
        steps: [
          { label: 'Step 1', text: 'Form $kT/h = 1.381 \\times 10^{-23} \\times 298 /(6.626 \\times 10^{-34}) \\approx 6.2 \\times 10^{12}$ s$^{-1}$:\n```text\nfreq = kT / h ~ 6.2e12 s-1\nS-term = exp(-40 / R)\nH-term = exp(-50000 / RT)\n```\nEntropy penalizes, enthalpy gates.' },
          { label: 'Step 2', text: 'Evaluate $e^{\\Delta^{\\ddagger}S/R} = e^{-4.81} \\approx 8.1 \\times 10^{-3}$ and $e^{-\\Delta^{\\ddagger}H /RT} = e^{-20.2} \\approx 1.7 \\times 10^{-9}$.' },
          { label: 'Step 3', text: 'Multiply to $k_{r} \\approx 8.5 \\times 10^{1}$ s$^{-1}$ for a first-order crossing.' }
        ],
        result: '$k_{r} \\approx 85$ s$^{-1}$, entropy-ordered and enthalpy-gated.'
      },
      {
        title: 'Estimating a primary isotope effect',
        problem: 'A $C$-$H$ stretch at $3000$ cm$^{-1}$ breaks fully at the barrier. Estimate $k_{H}/k_{D}$ at $298$ K.',
        steps: [
          { label: 'Step 1', text: 'Zero-point per stretch is $\\tfrac{1}{2}hc\\tilde{\\nu}$: $H$ keeps $17.9$ kJ mol$^{-1}$, $D$ with $\\tilde{\\nu} /\\sqrt{2}$ keeps $12.7$ kJ mol$^{-1}$.' },
          { label: 'Step 2', text: 'Barrier wipes the stretch, so $\\Delta\\Delta^{\\ddagger}H \\approx 5.2$ kJ mol$^{-1}$ favouring $H$.' },
          { label: 'Step 3', text: 'Exponentiate $e^{5200 /(RT)} \\approx 8$, the classic ceiling near $7$.' }
        ],
        result: '$k_{H}/k_{D} \\approx 8$ classically; larger values diagnose tunnelling.'
      }
    ],
    keyTakeaways: [
      '$[C^{\\ddagger}] = K^{\\ddagger}[A][B]$ sets quasi-equilibrium at the saddle.',
      '$k_{r} = \\kappa(kT/h)K^{\\ddagger}$ crosses at the universal frequency.',
      'Eyring plots read $\\Delta^{\\ddagger}H$ from slope and $\\Delta^{\\ddagger}S$ from intercept.',
      'Primary $k_{H}/k_{D}$ near $7$ marks zero-point loss; excess marks tunnelling.'
    ],
    quiz: [
      {
        q: 'The Eyring pre-factor $kT/h$ is:',
        options: ['A fitted steric factor', 'The universal barrier-crossing frequency', 'The equilibrium constant', 'A diffusion coefficient'],
        answer: 1,
        explanation: 'Step 1: Divide thermal energy by Planck constant. Step 2: Get attempts per second near $10^{13}$. Step 3: Multiply by $K^{\\ddagger}$ for the rate.'
      },
      // PYQ-pattern: activation entropy reading drill
      {
        q: 'Large negative $\\Delta^{\\ddagger}S$ suggests:',
        options: ['Associative ordering at the transition state', 'Tunnelling dominance', 'Zero barrier', 'Dissociative loosening'],
        answer: 0,
        explanation: 'Step 1: Link entropy to disorder change. Step 2: Order the complex below reactants. Step 3: Assign an associative mechanism.'
      },
      {
        q: 'Eyring plots graph $\\ln(k_{r}/T)$ against $1/T$ to read:',
        options: ['Molar mass', 'Solvent viscosity', 'Only the rate order', '$\\Delta^{\\ddagger}H$ from slope and $\\Delta^{\\ddagger}S$ from intercept'],
        answer: 3,
        explanation: 'Step 1: Linearize the Eyring exponential. Step 2: Match slope to $-\\Delta^{\\ddagger}H/R$. Step 3: Match intercept to $\\ln(k/h) + \\Delta^{\\ddagger}S/R$.'
      },
      {
        q: '$k_{H}/k_{D} = 25$ at room temperature implies:',
        options: ['Heavier isotope always faster', 'Normal zero-point effect only', 'Hydrogen tunnelling through the barrier', 'Broken thermometry'],
        answer: 2,
        explanation: 'Step 1: Recall the classical ceiling near $7$. Step 2: Note $25$ overshoots it badly. Step 3: Invoke proton tunnelling inflation.'
      }
    ]
  },
  // ---------------------------------------------------------------- 20.3
  {
    sectionId: 'chem-ch20-s3',
    readingTime: 8,
    intro: 'State-to-state dynamics follows bonds as they break and form across potential-energy surfaces, revealing where energy sits and how it flows. Attractive versus repulsive release decides vibrational against translational excitation. This section tours surfaces, Polanyi rules and molecular-beam evidence as Atkins Topic 18D presents them.',
    objectives: [
      'Sketch collinear surfaces and locate early versus late barriers',
      'Apply Polanyi rules to place energy for fastest reaction',
      'Cite beam and spectroscopic evidence for state-resolved dynamics'
    ],
    concepts: [
      {
        term: 'Potential-energy surfaces and saddles',
        kind: 'definition',
        statement: 'The **reaction surface** `PES` plots electronic energy over nuclear geometry, with the minimum-energy path threading the lowest saddle that transition-state theory crowns as $C^{\\ddagger}$.',
        detail: 'Collinear $A + BC$ elbows show approach then departure valleys. Contour spacing reads force strength along each coordinate.'
      },
      {
        term: 'Attractive versus repulsive release',
        kind: 'law',
        statement: 'Early barriers dump energy into **attractive release** `attractive` exciting product vibration, while late barriers dump into **repulsive release** `repulsive` driving product translation.',
        detail: '$F + H_{2}$ with its early saddle makes hot $HF$ vibration; $H + Cl_{2}$-style late saddles kick fragments apart translationally. Chemiluminescence maps the vibrational share.'
      },
      {
        term: 'Polanyi rules for energy placement',
        kind: 'law',
        statement: 'The **Polanyi rules** `Polanyi` put vibrational energy into early-barrier reactions and translational energy into late-barrier reactions for maximum rate gain.',
        detail: 'Pumping the coordinate that moves at the saddle climbs the barrier most efficiently. Mismatched energy sits spectator and wastes excitation.'
      },
      {
        term: 'Molecular-beam state resolution',
        kind: 'method',
        statement: 'Crossed **molecular beams** `beams` with laser probing measure angle- and state-resolved scattering, directly imaging forward stripping versus backward rebound mechanisms.',
        detail: 'Velocity-map imaging records the product sphere slice by slice. Resonances appear as sharp structure in the excitation function.'
      },
      {
        term: 'Harpoon electron-jump mechanism',
        kind: 'insight',
        statement: 'Alkali plus halogen **harpooning** `harpoon` throws the electron at long range, and Coulomb capture reels the ions together across an avoided crossing of covalent and ionic surfaces.',
        detail: 'Cross sections balloon beyond geometric size, explaining huge alkali-halogen rates. Chemiluminescent $Na^{*}$ emission traces the ionic surface decay.'
      }
    ],
    figures: [
      {
        caption: 'Collinear elbow surface: reactants enter along $r_{BC}$, cross the saddle, and exit along $r_{AB}$ with early-barrier geometry shown.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Potential energy elbow surface with reactants valley saddle and products valley"><path d="M120,300 L120,140 L300,140 C360,140 360,200 420,200 L600,200" fill="none" stroke="currentColor" stroke-width="2.5"/><path d="M120,320 L120,160 L320,160 C380,160 380,220 440,220 L600,220" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M120,280 L120,120 L280,120 C340,120 340,180 400,180 L600,180" fill="none" stroke="currentColor" stroke-width="1.4"/><circle cx="360" cy="170" r="6" fill="currentColor"/><text x="360" y="150" text-anchor="middle" font-size="13" fill="currentColor">saddle</text><text x="140" y="330" font-size="13" fill="currentColor">A + BC valley</text><text x="500" y="250" font-size="13" fill="currentColor">AB + C valley</text><line x1="200" y1="140" x2="200" y2="300" stroke="currentColor" stroke-width="1.4" stroke-dasharray="5 4"/><text x="205" y="230" font-size="12" fill="currentColor">early barrier line</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Early versus late energy disposal',
        problem: 'Predict product excitation for an early-barrier exothermic reaction releasing $150$ kJ mol$^{-1}$.',
        steps: [
          { label: 'Step 1', text: 'Place the saddle in the entrance valley before bond stretch:\n```text\nearly saddle -> attractive release\nenergy -> new-bond vibration\nlate saddle -> repulsive release\nenergy -> translation\n```\nGeometry at the top decides disposal.' },
          { label: 'Step 2', text: 'Route most of $150$ kJ mol$^{-1}$ into product vibration, leaving translation cool.' },
          { label: 'Step 3', text: 'Confirm by infrared chemiluminescence showing inverted vibrational populations.' }
        ],
        result: 'Hot product vibration with cool translation marks the early barrier.'
      },
      {
        title: 'Beam evidence for rebound dynamics',
        problem: 'Backward-scattered products dominate a crossed-beam study. Name the mechanism and the surface feature.',
        steps: [
          { label: 'Step 1', text: 'Backward scattering means head-on recoil: the rebound mechanism.' },
          { label: 'Step 2', text: 'Assign a late, repulsive wall that kicks products back along the approach line.' },
          { label: 'Step 3', text: 'Contrast forward stripping from grazing harpoon capture at large impact parameters.' }
        ],
        result: 'Rebound scattering from a late repulsive surface feature.'
      }
    ],
    keyTakeaways: [
      'Minimum-energy paths cross the lowest saddle crowned as $C^{\\ddagger}$.',
      'Early barriers vibrate products; late barriers translate them.',
      'Polanyi rules match excitation to the saddle coordinate.',
      'Beams image stripping versus rebound state by state.'
    ],
    quiz: [
      {
        q: 'An early barrier dumps released energy mainly into:',
        options: ['Product translation', 'Product vibration', 'Rotation of spectators', 'Electronic excitation always'],
        answer: 1,
        explanation: 'Step 1: Locate the saddle before bond extension. Step 2: Release along the new-bond coordinate. Step 3: Vibrate the fresh product hot.'
      },
      // PYQ-pattern: Polanyi rule application drill
      {
        q: 'To speed a late-barrier reaction, add energy as:',
        options: ['Relative translation along the approach', 'Product rotation', 'Solvent heat', 'Reactant vibration'],
        answer: 0,
        explanation: 'Step 1: Find motion at the late saddle. Step 2: Push along the approach coordinate. Step 3: Climb the barrier instead of spectating.'
      },
      {
        q: 'Forward-scattered products in beams indicate:',
        options: ['No reaction at all', 'Isotropic complex decay', 'Rebound at small impact parameter', 'Stripping at large impact parameter'],
        answer: 3,
        explanation: 'Step 1: Track grazing trajectories past each other. Step 2: Snatch atoms at long range. Step 3: Continue forward as stripped products.'
      },
      {
        q: 'Harpoon cross sections exceed geometric ones because:',
        options: ['Products attract detectors', 'Atoms swell when hot', 'Long-range electron jump plus Coulomb capture', 'Beams misalign'],
        answer: 2,
        explanation: 'Step 1: Jump the electron at crossing radius. Step 2: Reel ions inward by Coulomb pull. Step 3: React from beyond contact distance.'
      }
    ]
  },
  // ---------------------------------------------------------------- 20.4
  {
    sectionId: 'chem-ch20-s4',
    readingTime: 10,
    intro: 'Heterogeneous catalysis happens on occupied surface sites, so adsorption isotherms feed directly into rate laws. The Langmuir-Hinshelwood path reacts two adsorbed partners while the Eley-Rideal path strikes one from the gas. This section derives both limits exactly as Atkins Topics 19B and 19C teach them.',
    objectives: [
      'Fit coverage data to the Langmuir isotherm and extract capacity plus binding constant',
      'Derive Langmuir-Hinshelwood and Eley-Rideal rate laws with pressure limits',
      'Read volcano plots and poisoning signatures for catalyst choice'
    ],
    concepts: [
      {
        term: 'Langmuir isotherm and its linearization',
        kind: 'law',
        statement: 'Single-site adsorption gives **Langmuir coverage** `Langmuir` $\\theta = \\alpha p /(1 + \\alpha p)$, linearized as $p/V = p/V_{\\infty} + 1 /(\\alpha V_{\\infty})$ to read capacity $V_{\\infty}$ and binding $\\alpha$.',
        detail: '$CO$ on charcoal at $273$ K fits with $V_{\\infty} = 111$ cm$^{3}$ and $\\alpha = 7.51 \\times 10^{-3}$ kPa$^{-1}$. Dissociative $H_{2}$ instead gives $(\\alpha p)^{1/2}$ dependence.'
      },
      {
        term: 'Langmuir-Hinshelwood rate law',
        kind: 'theorem',
        statement: 'Two adsorbed partners give the **LH rate** `LH` $v = k_{r}\\theta_{A}\\theta_{B}$, expanding with isotherms to $v = k_{r}\\alpha_{A}p_{A}\\alpha_{B}p_{B} /(1 + \\alpha_{A}p_{A} + \\alpha_{B}p_{B})^{2}$ for competing sites.',
        detail: 'Catalytic $CO$ oxidation follows this encounter route on the surface. Shared denominator squared marks site competition between $A$ and $B$.'
      },
      {
        term: 'Pressure limits from first to zeroth order',
        kind: 'law',
        statement: 'Low pressure gives **first-order** `order` $v \\approx k_{r}\\alpha p$ while saturation gives **zeroth-order** $v \\approx k_{r}$, as phosphine on tungsten shows across its pressure ramp.',
        detail: 'Empty surface responds linearly; full surface cannot go faster with more gas. Mixed orders diagnose which partner saturates first.'
      },
      {
        term: 'Eley-Rideal alternative path',
        kind: 'definition',
        statement: 'Gas molecules striking adsorbates give the **ER rate** `ER` $v = k_{r}\\theta_{A}p_{B} = k_{r}\\alpha_{A}p_{A}p_{B} /(1 + \\alpha_{A}p_{A})$, first order in gas $B$ at all pressures.',
        detail: 'Hydrogenation steps with weakly adsorbing $H_{2}$ often fit $ER$. Pressure dependence separates $ER$ from $LH$ cleanly in the saturated regime.'
      },
      {
        term: 'Volcano plots and poisoning',
        kind: 'insight',
        statement: 'Intermediate **binding strength** `volcano` maximizes rate at the volcano summit, with $d$-block middles winning, while sulfur blocks sites and coking buries them, each cutting active $\\theta$.',
        detail: 'Too weak fails to activate; too strong immobilizes and poisons by itself. Promoters tune $\\alpha$ toward the summit without changing the mechanism.'
      }
    ],
    figures: [
      {
        caption: 'Langmuir curve $\\theta = \\alpha p /(1 + \\alpha p)$: linear first-order rise bending to zeroth-order saturation at full coverage.',
        svg: `<svg viewBox="0 0 720 360" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Langmuir adsorption isotherm rising linearly then saturating"><line x1="90" y1="300" x2="650" y2="300" stroke="currentColor" stroke-width="2"/><line x1="90" y1="300" x2="90" y2="60" stroke="currentColor" stroke-width="2"/><text x="630" y="325" font-size="14" fill="currentColor">p</text><text x="60" y="70" font-size="14" fill="currentColor">theta</text><path d="M90,300 C200,260 300,150 600,110" fill="none" stroke="currentColor" stroke-width="3"/><line x1="90" y1="300" x2="250" y2="232" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><text x="160" y="225" font-size="12" fill="currentColor">first order</text><line x1="450" y1="118" x2="620" y2="118" stroke="currentColor" stroke-width="1.6" stroke-dasharray="6 4"/><text x="470" y="108" font-size="12" fill="currentColor">zeroth order</text><circle cx="330" cy="170" r="5" fill="currentColor"/><text x="335" y="195" font-size="12" fill="currentColor">knee: alpha p = 1</text></svg>`,
        afterConcept: 1
      }
    ],
    examples: [
      {
        title: 'Fitting CO on charcoal to Langmuir',
        problem: 'Adsorption volumes rise $10.2$, $18.6$, $25.5$ cm$^{3}$ at $13.3$, $26.7$, $40.0$ kPa. Confirm Langmuir form and find $V_{\\infty}$ and $\\alpha$.',
        steps: [
          { label: 'Step 1', text: 'Plot $p/V$ against $p$:\n```text\np/V: 1.30, 1.44, 1.57 ... linear\nslope = 1/V-inf, intercept = 1/(alpha V-inf)\n```\nStraight line confirms single-site Langmuir.' },
          { label: 'Step 2', text: 'Read slope $9.04 \\times 10^{-3}$ cm$^{-3}$ so $V_{\\infty} = 111$ cm$^{3}$.' },
          { label: 'Step 3', text: 'Read intercept $1.20$ kPa cm$^{-3}$ so $\\alpha = 1 /(1.20 \\times 111) \\approx 7.5 \\times 10^{-3}$ kPa$^{-1}$.' }
        ],
        result: '$V_{\\infty} = 111$ cm$^{3}$ with $\\alpha \\approx 7.5 \\times 10^{-3}$ kPa$^{-1}$.'
      },
      {
        title: 'LH orders for CO oxidation',
        problem: 'For $2CO + O_{2} \\to 2CO_{2}$ by LH with $O_{2}$ dissociative and $CO$ molecular on shared sites, state the low- and high-pressure limits.',
        steps: [
          { label: 'Step 1', text: 'Write $v = k_{r}\\theta_{CO}\\theta_{O}$ with $\\theta_{O} \\propto (\\alpha_{O_{2}}p_{O_{2}})^{1/2} /D$ and $\\theta_{CO} \\propto \\alpha_{CO}p_{CO} /D$ over the shared denominator $D$.' },
          { label: 'Step 2', text: 'Low pressure: $D \\approx 1$, first order in $CO$ and half order in $O_{2}$.' },
          { label: 'Step 3', text: 'Saturated $CO$: $D \\approx \\alpha_{CO}p_{CO}$, rate falls as $p_{CO}^{-1}$ while rising with $p_{O_{2}}^{1/2}$, the self-poisoning signature.' }
        ],
        result: 'First and half orders dilute; $CO$ inhibition at saturation proves LH competition.'
      }
    ],
    keyTakeaways: [
      '$\\theta = \\alpha p /(1 + \\alpha p)$ linearizes as $p/V$ against $p$.',
      '$v = k_{r}\\theta_{A}\\theta_{B}$ with site competition marks LH.',
      'Dilute means first order; saturated means zeroth order.',
      'Summit binding wins volcanoes; blockers cut active $\\theta$.'
    ],
    quiz: [
      {
        q: 'Langmuir $p/V$ versus $p$ linearity confirms:',
        options: ['Multilayer BET stacking', 'Single-site monolayer without interactions', 'Bulk dissolution', 'Irreversible chemisorption always'],
        answer: 1,
        explanation: 'Step 1: Derive $p/V = p/V_{\\infty} + 1 /(\\alpha V_{\\infty})$. Step 2: Match slope and intercept to data. Step 3: Accept equivalent independent sites.'
      },
      // PYQ-pattern: LH versus ER distinction drill
      {
        q: 'Saturated-$A$ LH rate on raising $p_{A}$ further:',
        options: ['Stays flat or falls by self-blocking', 'Turns explosive', 'Goes negative', 'Rises linearly forever'],
        answer: 0,
        explanation: 'Step 1: Fill denominator with $\\alpha_{A}p_{A}$. Step 2: Starve $B$ of sites. Step 3: Flatten or invert the $A$ dependence.'
      },
      {
        q: 'ER kinetics stay first order in gas $B$ because:',
        options: ['$\\theta_{B}$ is always unity', 'Gas pressure is constant', '$B$ never adsorbs in the ER step', 'Surfaces saturate instantly'],
        answer: 2,
        explanation: 'Step 1: Write $v = k_{r}\\theta_{A}p_{B}$. Step 2: Keep $p_{B}$ outside any isotherm. Step 3: Hold unit order in $B$ at all pressures.'
      },
      {
        q: 'Volcano summits sit mid-d-block since binding there is:',
        options: ['Irrelevant to rate', 'Weakest possible', 'Strongest possible', 'Intermediate: activating yet mobile'],
        answer: 3,
        explanation: 'Step 1: Weaken the left slope by poor activation. Step 2: Freeze the right slope by overbinding. Step 3: Peak where molecules stick and still migrate.'
      }
    ]
  }
]
