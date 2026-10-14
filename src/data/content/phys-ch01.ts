import type { SectionContent } from '../library'
import type { FormulaEntry } from '../formulas'

// ============================================================================
// Feynman Lectures on Physics (New Millennium Edition), Volume I
// Master Physics Library — Chapter 1: Atoms, Matter and the Viewpoint of Physics
// Source: Lectures I-1, I-2, I-3 and I-5.
// Master study content. All numbers and stories are Feynman's own.
// Math is LaTeX, rendered by KaTeX via the RichText pipeline.
// ============================================================================

export const physCh1Content: SectionContent[] = [
  // ------------------------------------------------------------------ 1.1
  {
    sectionId: 'phys-ch1-s1',
    depth: [
      {
        tier: 'masters',
        title: 'Kinetic theory from first principles',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Pressure from bombardment',
            body: 'Feynman says pressure is the averaged force of molecular bombardment; here is the average done honestly. Put $N$ molecules of mass $m$ in a cubical box of side $L$ and watch one molecule whose velocity component along $x$ is $v_x$. It strikes the right wall, rebounds with that component reversed, and returns every $2L/v_x$ seconds, each visit handing the wall momentum $2mv_x$. Force is momentum per visit times visits per second, so this molecule contributes $2mv_x\\cdot v_x/2L = mv_x^{2}/L$. Summing over all molecules and dividing by the wall area $L^{2}$ gives $$P = \\frac{m}{L^{3}}\\sum_{i}v_{ix}^{2} = nm\\langle v_x^{2}\\rangle.$$ Isotropy — no direction is special in the crowd — makes $\\langle v_x^{2}\\rangle = \\tfrac{1}{3}\\langle v^{2}\\rangle$, so $$P = \\tfrac{1}{3}nm\\langle v^{2}\\rangle.$$ Multiplying by the volume: $PV = \\tfrac{2}{3}N\\langle K\\rangle$ — the pressure is two-thirds of the kinetic-energy density. Setting this beside the measured gas law $PV = Nk_BT$ forces $\\langle K\\rangle = \\tfrac{3}{2}k_BT$, which is exactly the theorem to be proved next.',
          },
          {
            kind: 'theorem',
            heading: 'Equipartition',
            body: 'In thermal equilibrium at temperature $T$, every independent quadratic term in the energy — a velocity component, a rotational term, a vibration — carries the same mean energy, $$\\left\\langle\\tfrac{1}{2}mv_x^{2}\\right\\rangle = \\tfrac{1}{2}k_BT,$$ whatever its mass or frequency. For the steam of this section the three translational terms give $\\langle K\\rangle = \\tfrac{3}{2}k_BT$ per molecule; a diatomic molecule with two rotations and one vibration owns more quadratic terms and so a larger heat capacity. Nothing in the statement knows about collisions or molecular shape — only that the thermal reservoir feeds every quadratic channel equally, which is why the jiggling picture survives from gases to crystals. The proof needs nothing but the Boltzmann factor and one Gaussian integral.',
          },
          {
            kind: 'proof',
            body: 'The Maxwell factor for one component is $e^{-\\beta mv_x^{2}/2}$ with $\\beta = 1/k_BT$, so $$\\langle v_x^{2}\\rangle = \\frac{\\int_{-\\infty}^{\\infty}v_x^{2}\\,e^{-\\beta mv_x^{2}/2}\\,dv_x}{\\int_{-\\infty}^{\\infty}e^{-\\beta mv_x^{2}/2}\\,dv_x}.$$ With $a = m/2k_BT$ the two Gaussian integrals are $\\int e^{-ax^{2}}dx = \\sqrt{\\pi/a}$ and $\\int x^{2}e^{-ax^{2}}dx = \\tfrac{\\sqrt{\\pi}}{2}a^{-3/2}$, and their ratio is $1/2a = k_BT/m$. Multiplying by $\\tfrac{1}{2}m$ gives $\\langle\\tfrac{1}{2}mv_x^{2}\\rangle = \\tfrac{1}{2}k_BT$. The identical one-line computation applies to any quadratic variable $q$ with energy $cq^{2}$, because $q$ enters the exponent in exactly this way: each quadratic channel holds $\\tfrac{1}{2}k_BT$ of the jiggling, and counting the channels is all that distinguishes one substance’s heat capacity from another’s.',
          },
          {
            kind: 'derivation',
            heading: 'The Maxwell–Boltzmann distribution',
            body: 'Two innocent demands fix the whole distribution of speeds. First, equilibrium in a still box cannot care about direction: the distribution $f(\\vec v)$ must be a function of $v^{2}$ only. Second, the components are independent — no physics correlates $v_x$ with $v_y$ — so $f$ must factor into a product of one-component functions. A function of $v_x^{2}+v_y^{2}+v_z^{2}$ that factorizes must be an exponential, $f \\propto e^{-mv^{2}/2k_BT}$, and equipartition fixes its width. Projecting onto the speed with the volume element $4\\pi v^{2}\\,dv$ and normalizing gives the **Maxwell–Boltzmann law**: $$P(v)\\,dv = 4\\pi v^{2}\\left(\\frac{m}{2\\pi k_BT}\\right)^{3/2}e^{-mv^{2}/2k_BT}\\,dv.$$ Three speeds tag along: most probable $\\sqrt{2k_BT/m}$, mean $\\sqrt{8k_BT/\\pi m}$, rms $\\sqrt{3k_BT/m}$. The fast tail of the Gaussian is this section’s escape hatch — evaporation is exactly the rare molecule whose accumulated speed beats the attraction of its neighbors.',
          },
          {
            kind: 'example',
            heading: 'The mean free path of air',
            body: 'How far does a molecule fly between hits? A molecule of diameter $d$ sweeping along collides with anything whose center comes within $d$, so it sweeps a cylinder of cross-section $\\sigma = \\pi d^{2}$; because the targets move too, the relative speed averages $\\sqrt{2}\\,\\langle v\\rangle$, and with number density $n$ the collision rate is $\\sqrt{2}\\,n\\sigma\\langle v\\rangle$. The **mean free path** is therefore $$\\ell = \\frac{1}{\\sqrt{2}\\,n\\sigma}.$$ Put in the numbers for room air: $n \\approx 2.5\\times10^{19}\\ \\text{cm}^{-3}$ and $d \\approx 3.7\\times10^{-8}$ cm give $\\ell \\approx 7\\times10^{-6}$ cm — about seventy nanometers, two hundred molecular diameters. At thermal speeds near $500$ m/s that is one collision every $10^{-10}$ s: the magnified crowd is busy beyond imagining, yet each molecule flies freely across two hundred of its own diameters — which is why a smell crosses a still room in hours rather than milliseconds, though its molecules fly at the speed of a rifle bullet.',
          },
          {
            kind: 'derivation',
            heading: 'The van der Waals correction',
            body: 'Feynman promised that the true interatomic forces add only “a slight decrease from attraction and a slight increase from the finite molecular volume.” Van der Waals made both corrections quantitative in one equation. Attraction: a molecule bound for the wall is tugged back by the crowd it leaves behind, and the tug scales as density times density, so the measured pressure falls below the kinetic one by $a(N/V)^{2}$. Excluded volume: a hard sphere of diameter $d$ bars others from a region totaling four times the molecules’ own volume, so $V$ becomes $V - Nb$: $$\\left(P + a\\frac{N^{2}}{V^{2}}\\right)(V - Nb) = Nk_BT.$$ Below the critical temperature $T_c = 8a/27bk_B$ — with $a$ and $b$ reckoned per molecule — the isotherms loop, and the equation describes liquid and gas as two densities on one curve, the first equation of state to do so. From measured critical constants one reads off $a$ and $b$, and $b$ is a direct measurement of atomic size: the angstrom falls out of steam tables.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Atoms made visible — and countable',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Einstein’s law of Brownian motion',
            body: 'A colloid grain is hammered by uncountably many molecular impacts each second; in 1905 Einstein proved that the hammering obeys a law sharp enough to count the hammerers. A sphere of radius $a$ in a liquid of viscosity $\\eta$ at temperature $T$ spreads by diffusion: $$\\langle x^{2}\\rangle = 2Dt,\\qquad D = \\frac{k_BT}{6\\pi\\eta a}.$$ The hotter the bath, the wider the walk; the bigger and stickier the grain, the tighter — the section’s push ball made mathematical, its jitter growing as the square root of time. The drag coefficient $6\\pi\\eta a$ is the same one Stokes computed for a sphere pulled steadily through syrup, so the formula welds fluctuation to dissipation in a single expression. And because $D$ contains $k_B = R/N_A$, watching one grain long enough measures **Avogadro’s number**: the atomic hypothesis, put on a stopwatch.',
          },
          {
            kind: 'proof',
            body: 'Langevin (1908) wrote Newton’s second law for the grain with the only two forces that act on it — Stokes drag and a random molecular hammering $\\xi(t)$ of zero mean: $$m\\dot v = -\\gamma v + \\xi(t),\\qquad \\gamma = 6\\pi\\eta a.$$ Multiply by $x$, use $x\\dot v = \\frac{d}{dt}(xv) - v^{2}$, and average: the hammering term dies, since $\\langle x\\xi\\rangle = 0$, and equipartition supplies $\\langle v^{2}\\rangle = k_BT/m$. What survives is an equation for the spread itself, $$\\frac{d^{2}}{dt^{2}}\\langle x^{2}\\rangle + \\frac{\\gamma}{m}\\frac{d}{dt}\\langle x^{2}\\rangle = \\frac{2k_BT}{m}.$$ Its solution relaxes within $m/\\gamma$ — microseconds for a colloidal grain — to $\\langle x^{2}\\rangle = 2(k_BT/\\gamma)t$: Einstein’s law recovered. The drag and the hammering are the same molecules wearing two masks — the **fluctuation–dissipation theorem** in its first costume, hiding in the soup.',
          },
          {
            kind: 'application',
            heading: 'Perrin’s count of atoms',
            body: 'Jean Perrin turned Einstein’s formula into a census of the invisible. Through 1908 and 1909 he prepared emulsions of gamboge grains — resin spheres of uniform, measurable radius suspended in water — and tracked their mean-square drift and their settling with height under the microscope: the push-ball experiment of this section done with a micrometer. Every run returned $N_A$ from the jitter, and grains of different sizes, in different liquids, at different temperatures, even including their rotational diffusion, all agreed within a few percent of the modern $6.02\\times10^{23}$. The skeptics of the atomic hypothesis — Ostwald had wanted atoms treated as mere bookkeeping devices — conceded; Perrin collected the 1926 Nobel Prize, and the atomic hypothesis passed from inspired sentence to measured fact. It remains physics’ cleanest demonstration that a good sentence, pressed hard enough, weighs something.',
          },
          {
            kind: 'application',
            heading: 'Atoms, written one by one',
            body: 'The section concedes that atoms cannot be seen even with an electron microscope; the research frontier answered by feeling them instead. The scanning tunneling microscope reads the trickle of electrons tunneling between a sharp tip and a surface — a current that changes by an order of magnitude across one atomic diameter — and the same tip, pushed gently, drags atoms along the surface. Eigler and Schweizer (1989) moved thirty-five xenon atoms across nickel one at a time and spelled IBM; laboratories today place single dopant atoms in silicon as qubit prototypes. The trapping direction is just as literal: single ions held in electromagnetic bottles and cooled by laser light (Nobel 1989 to Dehmelt and Paul; 2012 to Wineland and Haroche) tick as clocks and can be watched one at a time. And a trapped ion cooled to its quantum ground state still jiggles, over a zero-point spread fixed by $\\hbar$ — the section’s minimum motion surviving at absolute zero in its purest form.',
          },
          {
            kind: 'application',
            heading: 'Plenty of room at the bottom',
            body: 'On 29 December 1959 Feynman gave the after-dinner talk that became the founding document of nanotechnology: “There’s Plenty of Room at the Bottom.” His question was this chapter’s, run in reverse: why not write the Encyclopedia Britannica on the head of a pin, store a library in a dust speck, build machines that make still smaller machines — given that “the principles of physics, as far as I can see, do not speak against the possibility of maneuvering things atom by atom”? He offered a thousand dollars for a working motor in a 1/64-inch cube, and lost within the year to William McLellan, who built one with tweezers under a microscope — proving only that the prize was set too low. Every prediction in the talk has since been overtaken by fact. The talk’s real point is this chapter’s moral: information and machinery bottom out at atoms, and at that scale there is plenty of room.',
          },
        ],
      },
    ],
    readingTime: 10,
    prerequisites: [
      'Classical mechanics: Newton’s second law ($F = \\Delta p / \\Delta t$) and momentum conservation',
      'Elastic collisions and particle kinetic energy ($K = \\frac{1}{2}mv^2$)',
      'Spatial isotropy and basic statistics of molecular velocity components',
    ],
    intro: 'Feynman opens the Lectures with a thought experiment: if a cataclysm destroyed all scientific knowledge, what single sentence should survive to the next generations? His answer — all things are made of atoms — is the seed from which this whole section grows. We follow one drop of water through successive magnifications until the atomic world appears, then use nothing but that world to explain ice, steam, pressure, evaporation, dissolved salt and the smell of violets.',
    objectives: [
      'State the atomic hypothesis and explain why Feynman judges it the most information-dense sentence in science',
      'Describe water, ice and steam in terms of jiggling, molecular attraction and crystalline order',
      'Explain gas pressure, evaporative cooling and compression heating as consequences of atomic motion',
      'Trace the dissolution of salt to electrical attraction between ions and oriented water molecules',
      'Recount the scale stories — the magnified drop, the angstrom, the apple grown to the size of the earth — and the direct evidence for atoms',
    ],
    concepts: [
      {
        term: 'The atomic hypothesis',
        kind: 'law',
        statement: 'If all of scientific knowledge were destroyed and only one sentence passed on, it should be the atomic hypothesis: **all things are made of atoms** — little particles that move around in perpetual motion, attracting each other when they are a little distance apart, but repelling upon being squeezed into one another.',
        detail: 'That one sentence, with a little imagination and thinking, contains an enormous amount of information about the world. Feynman extends the claim to biology: the most important hypothesis in all of biology is that everything animals do, atoms do — nothing that living things do lies outside the laws of physics. A pile of atoms that is not repeated from one to the other might have all the possibilities you see before you in the mirror.',
      },
      {
        term: 'Experiment as the sole judge',
        kind: 'method',
        statement: '**The test of all knowledge is experiment**; experiment is the sole judge of scientific “truth.” But experiment supplies only hints — imagination is needed to create from those hints the great generalizations, and then new experiments to check whether the guess was right.',
        detail: 'This division of labor produces theoretical physicists, who imagine, deduce and guess at new laws but do not experiment, and experimental physicists, who also imagine, deduce and guess. Because we do not yet know all the basic laws, everything we know is only some kind of approximation: things must be learned only to be unlearned again or, more likely, to be corrected. A spinning top was once proof that mass is constant; relativity showed that mass increases with velocity — imperceptibly below a hundred miles a second (constant to within one part in a million), but the philosophical picture changes completely.',
      },
      {
        term: 'The scale of atoms',
        kind: 'definition',
        statement: 'Atoms have radii of $1$ to $2\\times 10^{-8}$ cm; the length $10^{-8}$ cm is called the **angstrom** ($\\AA$). If an apple is magnified to the size of the earth, the atoms in the apple are approximately the size of the original apple.',
        detail: 'A water drop a quarter of an inch on the side, magnified two thousand times, is roughly forty feet across — a large room, still smooth water with football-shaped paramecia swimming in it (that is biology’s department). Magnified two thousand times again it is about fifteen miles of teeming, crowd-like motion, and a final factor of two hundred fifty — one billion in all — shows the jiggling molecules themselves: oxygen and hydrogen blobs, each oxygen carrying two hydrogens.',
      },
      {
        term: 'Heat as jiggling',
        kind: 'definition',
        statement: 'The jiggling motion of the particles **is what we represent as heat**: raising the temperature increases the motion, until the pull between molecules can no longer hold them together and they fly apart — that is how steam is manufactured out of water.',
        detail: 'Water keeps its volume because of molecular attraction, and it flows because the attraction still lets molecules trade places. In the picture of steam the molecules are separated and free; at ordinary atmospheric pressure a patch the size of the drawing would usually contain none at all. The steam picture is otherwise faithful: the hydrogen atoms make an angle of $105^{\\circ}30^{\\prime}$ (drawn schematically as $120^{\\circ}$), and the oxygen–hydrogen center distance is $0.957$ Å — “so we know this molecule very well.”',
      },
      {
        term: 'Ice: crystalline order and the melting anomaly',
        kind: 'insight',
        statement: 'In a solid the atoms are locked into a **crystalline array** with a definite place for every atom — the position of atoms on one side of the crystal is determined by atoms millions of atoms away on the other side. Ice’s pattern has a hexagonal symmetry: turned $60^{\\circ}$ about an axis it returns to itself, which is why snowflakes are six-sided.',
        detail: 'The atoms are not standing still — they vibrate in place, and melting is shaking out of position. Because the ice structure is an open one with many holes, those holes fill in when the organization breaks down and **ice shrinks when it melts**; water and type metal are the exceptions among simple substances, which otherwise expand on melting. Even at absolute zero a minimum jiggling remains; helium alone never freezes at ordinary pressure, because its minimum motion keeps it liquid unless great pressure forces the atoms together.',
      },
      {
        term: 'Pressure from bombardment',
        kind: 'law',
        statement: 'Gas pressure is the averaged **jittery force of molecular bombardment** on the walls: double the density at the same speed (temperature) and the pressure doubles; raise the temperature and the atoms hit both harder and more often, so the pressure increases.',
        detail: 'The force is proportional to the area — more piston, more collisions in the same proportion. At low densities, pressure is proportional to density to an excellent approximation; the true interatomic forces add only a slight decrease from attraction and a slight increase from the finite molecular volume. Compress a gas slowly and every atom rebounds from the advancing piston with more speed — like a ping-pong ball struck by a forward-moving paddle — so slow compression heats a gas and slow expansion cools it.',
      },
      {
        term: 'Evaporation and dynamic equilibrium',
        kind: 'definition',
        statement: 'The surface of water is a two-way traffic: molecules leave when hit harder than usual, and vapor molecules return and stick. **Equilibrium** means the rate of leaving just matches the rate of returning — “in the long run nothing happens,” yet everything continues to happen, molecule by molecule.',
        detail: 'Blow the moist air away and the return traffic is cut while the departure rate — set by the jiggling of the water — is unchanged: the water evaporates, hence “turn on the fan.” A molecule needs an accidental extra accumulation of energy to break away, so those that leave are the energetic ones and the liquid left behind cools — blow on soup to cool it. A returning molecule is speeded by the sudden attraction and generates heat; in equilibrium the two exactly cancel. Air also dissolves in the water, and releasing the pressure lets it bubble out — “very bad for divers.”',
      },
      {
        term: 'Ions, dissolution and the limits of “molecule”',
        kind: 'definition',
        statement: 'Common salt is not made of atoms but of **ions** — chlorine atoms with an extra electron and sodium atoms missing one — held by electrical attraction in a cubic pattern. In water, the negative oxygen ends of the molecules gather around the positive sodium ions and the hydrogen ends around the negative chlorine ions until the ions jiggle loose.',
        detail: 'A still picture cannot show whether the salt is dissolving or crystallizing: the process is dynamic, just like evaporation, and the direction is set by whether the water holds less or more salt than the equilibrium amount. The concept of a molecule is itself only approximate — clear for water, where three atoms are actually stuck together, but absent for solid salt, which is just an arrangement of ions with no natural grouping into “molecules of salt.”',
      },
      {
        term: 'The evidence for atoms',
        kind: 'insight',
        statement: 'Atoms cannot be seen even with an electron microscope, but the hypothesis is confirmed because “one after the other results come out the way we predict.” The direct witnesses are **Brownian motion** — a visible colloid particle jiggling under the inequalities of molecular bombardment, like a push ball pushed by many people — and the structures of crystals, whose face angles agree with x-ray analysis within seconds of arc.',
        detail: 'The atomic hypothesis works so well that it anchors the rest of the Lectures: if water can form waves, foam and rushing noises from nothing but little blobs, then an arrangement of atoms that never repeats — always different from place to place, continually changing — can plausibly walk and talk.',
      },
    ],
    figures: [
      {
        caption: "Feynman’s view of matter at atomic scale: a water molecule with an oxygen center and two hydrogens bound at 105.5°; an ice crystal with hexagonal ring symmetry that explains its open density; and steam gas where thermal jiggling overcomes molecular attraction.",
        svg: `<svg viewBox="0 0 720 280" width="100%" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Feynman water molecule geometry and three states of matter"><g transform="translate(60, 40)"><circle cx="90" cy="110" r="42" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="90" y="116" font-family="system-ui, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">O</text><circle cx="55" cy="55" r="22" fill="none" stroke="currentColor" stroke-width="2"/><text x="55" y="61" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">H</text><circle cx="125" cy="55" r="22" fill="none" stroke="currentColor" stroke-width="2"/><text x="125" y="61" font-family="system-ui, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="currentColor">H</text><path d="M 72 75 L 85 92" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/><path d="M 108 75 L 95 92" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/><path d="M 78 88 A 20 20 0 0 1 102 88" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="90" y="80" font-family="system-ui, sans-serif" font-size="10" font-weight="600" text-anchor="middle" fill="currentColor">105.5°</text><text x="90" y="180" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" text-anchor="middle" fill="currentColor">H₂O Molecule (d ≈ 0.96 Å)</text></g><line x1="280" y1="30" x2="280" y2="250" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/><g transform="translate(320, 40)"><polygon points="90,40 140,70 140,130 90,160 40,130 40,70" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="90" cy="40" r="10" fill="currentColor"/><circle cx="140" cy="70" r="10" fill="currentColor"/><circle cx="140" cy="130" r="10" fill="currentColor"/><circle cx="90" cy="160" r="10" fill="currentColor"/><circle cx="40" cy="130" r="10" fill="currentColor"/><circle cx="40" cy="70" r="10" fill="currentColor"/><text x="90" y="105" font-family="system-ui, sans-serif" font-size="10" font-style="italic" text-anchor="middle" fill="currentColor">open ring</text><text x="90" y="195" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" text-anchor="middle" fill="currentColor">Ice Crystal (Hexagonal Lattice)</text></g><line x1="500" y1="30" x2="500" y2="250" stroke="currentColor" stroke-width="1" stroke-dasharray="4 4"/><g transform="translate(540, 40)"><rect x="15" y="30" width="140" height="135" rx="4" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="45" cy="65" r="8" fill="currentColor"/><line x1="45" y1="65" x2="70" y2="50" stroke="currentColor" stroke-width="1.2"/><circle cx="115" cy="80" r="8" fill="currentColor"/><line x1="115" y1="80" x2="90" y2="105" stroke="currentColor" stroke-width="1.2"/><circle cx="60" cy="130" r="8" fill="currentColor"/><line x1="60" y1="130" x2="85" y2="140" stroke="currentColor" stroke-width="1.2"/><text x="85" y="195" font-family="system-ui, sans-serif" font-size="11.5" font-weight="600" text-anchor="middle" fill="currentColor">Steam Gas (Free Jiggling)</text></g></svg>`,
        afterConcept: 4,
      },
    ],
    derivations: [
      {
        title: 'Kinetic Pressure from Molecular Bombardment',
        statement: 'For an ideal gas of $N$ point particles each of mass $m$ in volume $V$, the macroscopic pressure is given by $P = \\frac{1}{3}nm\\langle v^2\\rangle$, where $n = N/V$ is the number density and $\\langle v^2\\rangle$ is the mean-square velocity.',
        prerequisites: [
          'Newtonian impulse theorem: $F = \\frac{\\Delta p}{\\Delta t}$',
          'Elastic reflection at boundary wall: $\\Delta p_x = 2mv_x$',
          'Spatial velocity isotropy: $\\langle v_x^2\\rangle = \\langle v_y^2\\rangle = \\langle v_z^2\\rangle = \\frac{1}{3}\\langle v^2\\rangle$',
        ],
        steps: [
          {
            label: 'Step 1: Momentum transfer in single-particle elastic collision',
            formula: `$$\\Delta p_x = p_{x,\\text{final}} - p_{x,\\text{initial}} = (-mv_x) - (mv_x) = -2mv_x$$`,
            explanation: 'Consider a cubical vessel of side $L$ with a rigid wall parallel to the $yz$-plane at $x = L$. When a gas particle of mass $m$ and velocity $(v_x, v_y, v_z)$ undergoes an ideal specular elastic collision with the wall, its parallel velocity components are unaffected, while its normal velocity component reverses ($v_x \\to -v_x$). By Newton\\\'s third law, the momentum delivered to the wall per bounce is $+2mv_x$.',
          },
          {
            label: 'Step 2: Collision frequency and round-trip period',
            formula: `$$\\Delta t = \\frac{2L}{v_x} \\implies f_{\\text{coll}} = \\frac{1}{\\Delta t} = \\frac{v_x}{2L}$$`,
            explanation: 'Between successive collisions with the chosen wall, the particle must traverse the container to the opposite wall at $x = 0$ and return, covering a round-trip distance of $2L$ along the $x$-axis. Assuming ballistic motion between collisions (valid in the kinetic regime where the mean free path exceeds collision duration), the round-trip flight time is $\\Delta t = 2L/v_x$.',
          },
          {
            label: 'Step 3: Time-averaged force exerted by one particle',
            formula: `$$\\bar{F}_{x,i} = \\frac{\\Delta p}{\\Delta t} = \\frac{2mv_{ix}}{2L/v_{ix}} = \\frac{m v_{ix}^2}{L}$$`,
            explanation: 'By Newton\\\'s second law, the average force exerted on the wall by particle $i$ over time is the momentum transferred per cycle divided by the flight period. Notice that the force scales with the square of the normal velocity: faster particles not only hit harder with more momentum ($2mv_{ix}$), but also hit more frequently ($v_{ix}/2L$).',
          },
          {
            label: 'Step 4: Total pressure from all $N$ particles',
            formula: `$$P = \\frac{F_{\\text{total}}}{A} = \\frac{1}{L^2}\\sum_{i=1}^{N}\\frac{m v_{ix}^2}{L} = \\frac{m}{L^3}\\sum_{i=1}^{N}v_{ix}^2 = \\frac{Nm}{V}\\langle v_x^2\\rangle = nm\\langle v_x^2\\rangle$$`,
            explanation: 'The container volume is $V = L^3$ and the wall surface area is $A = L^2$. Summing the average forces of all $N$ particles across the container and dividing by $A$ transforms the discrete summation into the statistical ensemble average $\\langle v_x^2\\rangle = \\frac{1}{N}\\sum_{i=1}^N v_{ix}^2$, with number density $n = N/V$.',
          },
          {
            label: 'Step 5: Invoking spatial velocity isotropy',
            formula: `$$\\langle v^2\\rangle = \\langle v_x^2\\rangle + \\langle v_y^2\\rangle + \\langle v_z^2\\rangle = 3\\langle v_x^2\\rangle \\implies \\langle v_x^2\\rangle = \\frac{1}{3}\\langle v^2\\rangle$$`,
            explanation: 'In thermal equilibrium with no net bulk drift, the molecular motion is completely isotropic in three-dimensional space. The gas particles do not prefer the $x$, $y$, or $z$ axis. Therefore, the average kinetic energy along each spatial degree of freedom must be identical: $\\langle v_x^2\\rangle = \\langle v_y^2\\rangle = \\langle v_z^2\\rangle$. Substituting this into the total mean-square speed gives $\\langle v_x^2\\rangle = \\frac{1}{3}\\langle v^2\\rangle$.',
          },
        ],
        result: 'Substituting the isotropy relation yields the fundamental equation of kinetic theory: $$P = \\frac{1}{3}nm\\langle v^2\\rangle = \\frac{2}{3}n\\left(\\frac{1}{2}m\\langle v^2\\rangle\\right) = \\frac{2}{3}\\frac{U_{\\text{kin}}}{V}$$ Macroscopic gas pressure is exactly two-thirds of the internal translational kinetic energy density. Equating this to the ideal gas law $PV = N k_B T$ directly proves the Equipartition Theorem: $\\langle K\\rangle = \\frac{1}{2}m\\langle v^2\\rangle = \\frac{3}{2}k_B T$, demonstrating that temperature is purely a direct measure of average molecular kinetic energy.',
      },
    ],
    examples: [
      {
        title: 'Magnifying a drop of water a billion times',
        problem: 'A drop of water a quarter of an inch on the side looks perfectly smooth and continuous. What appears at each stage of magnification, and what finally shows?',
        steps: [
          { label: 'Step 1: Two thousand times', text: 'Magnified two thousand times, the drop is roughly forty feet across — the size of a large room. The water is still smooth, but here and there football-shaped things swim back and forth: paramecia, with their wiggling cilia. Interesting, but biology — we pass on.' },
          { label: 'Step 2: Two thousand times again', text: 'A second factor of two thousand stretches the drop to about fifteen miles. The smooth appearance is gone: the water looks like a crowd at a football game seen from a very great distance — a teeming of particles in every direction.' },
          { label: 'Step 3: Two hundred fifty times more', text: 'The final magnification brings the total to one billion. Now we see the picture itself: two kinds of blobs — oxygen (black) and hydrogen (white) — each oxygen with two hydrogens tied to it (a molecule), jiggling and bouncing, turning and twisting around one another, “glued together” by their mutual attractions yet unable to squeeze through each other.' },
          { label: 'Step 4: Read off the scale', text: 'The atoms are $1$ to $2\\times 10^{-8}$ cm in radius — one or two angstroms. Memory hook: if an apple is magnified to the size of the earth, the atoms in the apple are approximately the size of the original apple.' },
        ],
        result: 'A billion-fold magnification turns “smooth water” into a swarm of jiggling molecules about an angstrom across, held together by attractions that fail only when heat wins.',
      },
      {
        title: 'Dissolving or crystallizing?',
        problem: 'A crystal of salt sits in water. Looking at the atomic picture, can we tell whether the salt is dissolving or crystallizing out?',
        steps: [
          { label: 'Step 1: What the crystal is', text: 'Salt is an organized arrangement of ions: chlorine ions (an extra electron) and sodium ions (one electron missing), stuck together by electrical attraction in a cubic pattern.' },
          { label: 'Step 2: What the water does', text: 'The hydrogen ends of the water molecules prefer to sit near the chlorine ion and the oxygen ends near the sodium ion, because opposites attract electrically. These attractions work ions loose from the crystal.' },
          { label: 'Step 3: Traffic in both directions', text: 'While some ions leave the crystal, others rejoin it. The picture alone cannot tell which way the net flow goes — the process is dynamic, exactly as in evaporation.' },
          { label: 'Step 4: Equilibrium decides', text: 'If there is almost no salt in the water, more atoms leave than return: the salt dissolves. If there is too much, more return than leave: the salt crystallizes. Raising the temperature increases both rates, and it is genuinely hard to predict which wins — most substances dissolve more with heat, but some dissolve less.' },
        ],
        result: 'Dissolution is a dynamic equilibrium: the direction is set by comparing the actual amount of dissolved salt with the equilibrium amount, not by any one-way “dissolving force.”',
      },
      {
        title: 'Why blowing on soup cools it',
        problem: 'A covered glass of water sits unchanged for twenty years. Why does nothing appear to happen — and why does blowing across hot soup cool it?',
        steps: [
          { label: 'Step 1: The hidden traffic', text: 'From time to time a molecule at the surface is hit a little harder than usual and gets knocked away; from time to time one of the vapor molecules comes flying down and gets stuck. To our crude eyes nothing changes, but seen a billion times magnified the surface is busy in both directions.' },
          { label: 'Step 2: Equilibrium', text: 'In the covered glass, just as many molecules are leaving as coming back. That is why the water level never drops — “in the long run nothing happens.”' },
          { label: 'Step 3: Break the symmetry', text: 'Take the top off and blow the moist air away. The departure rate — set by the jiggling of the water — is unchanged, but the return traffic is greatly reduced because there are far fewer water molecules above. More go out than come in: net evaporation.' },
          { label: 'Step 4: The cooling', text: 'A molecule needs an accidental extra accumulation of energy to break away from its neighbors’ attractions. Since those that leave have more energy than the average, the ones left behind have less average motion — the liquid cools as it evaporates.' },
        ],
        result: 'Blowing removes the returning vapor, and the escaping molecules are the energetic ones — so the soup cools. Evaporation is refrigeration at the molecular level.',
      },
    ],
    keyTakeaways: [
      'All things are made of atoms — little particles in perpetual motion, attracting at a little distance and repelling when squeezed. That is the one sentence Feynman would rescue from a cataclysm.',
      'Atoms are 1–2 angstroms in radius; an apple magnified to the size of the earth would have atoms the size of the original apple.',
      'Heat is jiggling: more temperature is more motion, boiling is flying apart, ice is order with in-place vibration, and helium alone stays liquid at absolute zero.',
      'Ice’s hexagonal crystal symmetry explains six-sided snowflakes, and its open, holey structure explains why ice shrinks when it melts.',
      'Gas pressure is averaged bombardment — proportional to density at fixed temperature, and increased by heating because atoms hit both harder and more often.',
      'Evaporation, dissolution and crystallization are dynamic equilibria: the visible “nothing happening” is equal two-way molecular traffic.',
      'The evidence for atoms is the success of the hypothesis plus direct witnesses — the Brownian jiggling of visible particles and crystal face angles matching x-ray structures within seconds of arc.',
    ],
    quiz: [
      {
        q: 'If a cataclysm destroyed all scientific knowledge and one sentence could be passed on, Feynman says it should state that:',
        options: [
          'energy is conserved in all natural phenomena',
          'all things are made of atoms — particles in perpetual motion, attracting at a little distance, repelling when squeezed',
          'the laws of nature are the same for all observers',
          'light travels at a finite speed in every direction',
        ],
        answer: 1,
        explanation: 'The atomic hypothesis carries, in Feynman’s judgment, the most information about the world in the fewest words — with a little imagination, ice, steam, heat, chemistry and biology all fall out of that single sentence.',
      },
      {
        q: 'A drop of water a quarter of an inch across is magnified two thousand times. How big is it, and what is seen?',
        options: [
          'About forty feet across — still smooth water, with paramecia swimming in it',
          'About fifteen miles across — jiggling molecules are directly visible',
          'About a foot across — nothing new is visible at this magnification',
          'About forty feet across — individual atoms are visible as sharp-edged spheres',
        ],
        answer: 0,
        explanation: 'Two thousand times brings the quarter-inch drop to roughly forty feet — a large room of still-smooth water where paramecia swim. It takes a second factor of two thousand (to about fifteen miles) before the teeming appears, and a billion in all before molecules show.',
      },
      {
        q: 'Why does blowing on hot soup cool it?',
        options: [
          'The moving air carries heat away by convection only',
          'Blowing compresses the surface, and compression cools the liquid',
          'Blowing removes vapor molecules, and the escaping molecules are the energetic ones, so the liquid left behind is colder',
          'The breath is colder than the soup and mixes into it',
        ],
        answer: 2,
        explanation: 'The rate of leaving is set by the jiggling of the water; blowing replaces moist air with dry air, cutting the return traffic. And since a molecule needs extra energy to break free, the departures are the above-average ones — the remainder cools. Feynman’s own words: “hence, blow on soup to cool it!”',
      },
      {
        q: 'Why are snowflakes six-sided?',
        options: [
          'Because water molecules themselves have six sides',
          'Because the ice crystal has a hexagonal symmetry — turned $60^{\\circ}$ about an axis, the arrangement returns to itself',
          'Because six water molecules always stick together as a unit',
          'Because falling through air abrades the crystal into a hexagon',
        ],
        answer: 1,
        explanation: 'The schematic ice structure (right in its qualitative features, though drawn in two dimensions) has hexagonal symmetry: rotating it by $60^{\\circ}$ leaves it unchanged, and the real crystal shows the same symmetry on its faces.',
      },
      {
        q: 'A piston is slowly pushed into a cylinder of gas. What happens to the atoms, and to the temperature?',
        options: [
          'The atoms are pushed closer but their speeds are unchanged',
          'The atoms rebound from the moving piston with more speed, so the gas heats up',
          'The atoms rebound with less speed, so the gas cools',
          'Nothing can be said without knowing the gas pressure',
        ],
        answer: 1,
        explanation: 'An atom bouncing from a forward-moving paddle comes off faster than it struck — like Feynman’s ping-pong ball. Every atom in the vessel picks up speed, so slow compression raises the temperature, and slow expansion lowers it.',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.2
  {
    sectionId: 'phys-ch1-s2',
    depth: [
      {
        tier: 'masters',
        title: 'From pairwise forces to quantum rules',
        blocks: [
          {
            kind: 'derivation',
            heading: 'The Lennard-Jones potential',
            body: 'Feynman’s one sentence — attract a little distance apart, repel when squeezed — becomes a curve between two closed-shell atoms, the **Lennard-Jones potential**: $$U(r) = 4\\varepsilon\\left[\\left(\\frac{\\sigma}{r}\\right)^{12} - \\left(\\frac{\\sigma}{r}\\right)^{6}\\right].$$ The attractive tail is genuinely electrical: an instant’s charge fluctuation in one atom polarizes its neighbor, and the correlated pair of dipoles lowers the energy as $-C_6/r^{6}$ — the **London dispersion force**, the residue left when this section’s plus-and-minus cancellation has done its best. The repulsive wall is the Pauli principle: overlapping filled electron states must be promoted to empty levels, and the cost climbs steeply, conventionally as $r^{-12}$. The minimum sits at $r_m = 2^{1/6}\\sigma$ with depth $\\varepsilon$ — about ten meV for argon, or $\\varepsilon/k_B$ near 120 kelvin. Whether $\\varepsilon$ beats $k_BT$ decides everything: gas when heat wins, liquid or crystal when the well wins — the ice–water–steam story of the previous page compressed into two numbers.',
          },
          {
            kind: 'derivation',
            heading: 'The virial expansion',
            body: 'The ideal gas law holds because at low density molecules rarely meet; the systematic correction counts the meetings. Expanding the partition function in powers of the density leaves only pairs at first order, and the pressure becomes $$\\frac{PV}{Nk_BT} = 1 + \\frac{B_2(T)}{V/N} + \\frac{B_3(T)}{(V/N)^{2}} + \\cdots.$$ The **second virial coefficient** averages the pair interaction through the Mayer function $f(r) = e^{-U(r)/k_BT} - 1$: $$B_2(T) = -2\\pi N_A\\int_0^{\\infty}\\left(e^{-U(r)/k_BT} - 1\\right)r^{2}\\,dr.$$ Hard spheres alone give positive $B_2$ — van der Waals’s excluded volume — while the attractive well drives it negative at low temperature. Where the two cancel, at the **Boyle temperature** $T_B$ with $B_2(T_B) = 0$, the gas behaves ideally over a range of pressures. Feynman’s “slight decrease from attraction and a slight increase from the finite molecular volume” is thus not folklore but the first two terms of an expansion that is rigorous in the dilute gas and knows exactly where the gas itself ends.',
          },
          {
            kind: 'para',
            body: 'Trace an isotherm of the van der Waals equation — or better, watch the free energy as a function of volume — and the states of matter become valleys in an energy landscape. Above the critical temperature there is a single valley: squeeze smoothly and vapor thickens into liquid with no boundary to cross and no meniscus anywhere. Below it there are two valleys, dense and rare, separated by a hill, and the system settles into whichever sits deeper; latent heat is the energy released moving from one valley floor to the other. Add crystalline order and a third valley appears — open and holey in water’s hexagonal case, which is the previous page’s explanation of floating ice as a property of one particular minimum. Which valley wins is the competition between $\\varepsilon$ and $k_BT$ run over $10^{23}$ molecules: the phase transitions of the everyday world are this section’s two forces plus statistics, nothing more.',
          },
          {
            kind: 'derivation',
            heading: 'Debye–Hückel screening',
            body: 'Dissolved salt gives water something a plasma has: mobile ions. Around any ion, opposites crowd in and likes are pushed away, so the potential must obey Poisson’s equation with a Boltzmann-weighted charge density — the Poisson–Boltzmann equation, which for small potentials linearizes to $$\\nabla^{2}\\phi = \\kappa^{2}\\phi,\\qquad \\kappa^{2} = \\frac{2n_0e^{2}}{\\epsilon k_BT},$$ for a monovalent salt with $n_0$ ions of each sign and $\\epsilon$ the permittivity of water. The solution dresses the bare Coulomb field in an exponential: $$\\phi(r) = \\frac{q\\,e^{-\\kappa r}}{4\\pi\\epsilon r}.$$ Beyond the **Debye length** $\\kappa^{-1}$ an ion’s charge is invisible — this section’s near-cancellation, re-created on the fly by the medium. In physiological brine $\\kappa^{-1} \\approx 0.8$ nm: a protein in blood sees the salt as an electric fog about one atom thick. Debye and Hückel (1923) built from this the first quantitative theory of strong electrolytes, and the same screening idea now runs from semiconductor physics to the quark–gluon plasma.',
          },
          {
            kind: 'derivation',
            heading: 'The ultraviolet catastrophe, computed',
            body: 'Equipartition was too successful: applied honestly to radiation, it kills classical physics. Count the standing-wave modes of a cavity — $8\\pi\\nu^{2}/c^{3}$ per unit volume per unit frequency — and give each its quadratic share $k_BT$: the **Rayleigh–Jeans spectrum** $$\\rho(\\nu) = \\frac{8\\pi k_BT\\,\\nu^{2}}{c^{3}}$$ grows without bound as $\\nu$ climbs, so the energy in any oven should be infinite — every fire an x-ray bomb. Planck’s 1900 fix: matter can exchange energy with a mode of frequency $\\nu$ only in lumps $E = h\\nu$. The mode’s mean energy becomes $$\\langle E\\rangle = \\frac{h\\nu}{e^{h\\nu/k_BT} - 1},$$ and the spectrum is finite, peaking at $h\\nu \\approx 2.8\\,k_BT$ — red-hot iron glowing red, not white. In the limit $h\\nu \\ll k_BT$ the exponential opens and $\\langle E\\rangle \\to k_BT$: equipartition returns mode by mode, which is the **correspondence principle** — quantum mechanics hands back the classical answer exactly where the classical answer was right, and only there.',
          },
          {
            kind: 'para',
            body: 'Ask what atoms are made of and quantum mechanics answers twice. Integer-spin particles are **bosons**: their wavefunctions are symmetric, any number may occupy the same state, and at low temperature they do — photons line up coherently in a laser, and cooled atoms collapse into a single **Bose–Einstein condensate**, the macroscopic quantum state in which liquid helium’s perpetual minimum motion organizes itself into superfluidity: the jiggling that never freezes, made coherent. Half-integer-spin particles are **fermions**: antisymmetric wavefunctions forbid two in the same state — the **Pauli exclusion principle** — so electrons fill an atom’s shells rung by rung, and this section’s ninety-two kinds of atoms are exclusion’s staircase; in a white dwarf the same principle holds the star up against its own gravity. Both statistics melt into Maxwell–Boltzmann when $n\\lambda_T^{3} \\ll 1$, with $\\lambda_T = h/\\sqrt{2\\pi mk_BT}$ the thermal wavelength: the classical gas of this chapter is simply the hot, dilute limit of both quantum answers — which is why the question stayed hidden so long.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'The greatest success and its open questions',
        blocks: [
          {
            kind: 'application',
            heading: 'QED tested to twelve digits',
            body: 'Feynman calls quantum electrodynamics our greatest success; the modern scorecard earns the phrase. His diagrams, with Schwinger’s and Tomonaga’s (Nobel 1965), renormalized the theory: the electron’s mass and charge go in by hand, and everything else comes out. Take the electron’s magnetic moment, expanded in powers of $\\alpha = e^{2}/4\\pi\\epsilon_0\\hbar c \\approx 1/137$: theory now predicts $g/2 = 1.001\\,159\\,652\\,180\\,59$, and the Harvard experiment that held a single electron in a Penning trap (2008) measured $1.001\\,159\\,652\\,180\\,73$ — agreement to about a part in $10^{12}$, the most precisely verified prediction in physics. The infinities that made the 1930s theory sick were tamed by renormalization, Feynman’s bookkeeping of which infinities cancel which. Meanwhile the same comparison for the muon shows a small stubborn mismatch — the **muon anomaly** — the most-watched crack through which physics beyond the greatest success might still be entering.',
          },
          {
            kind: 'para',
            body: 'The zoo of thirty particles that this section sorts by strangeness resolved within a decade. Gell-Mann and Zweig (1964) built the baryons and mesons from **quarks**; the force between them became QCD, whose coupling — alone among the forces — weakens at short distance (**asymptotic freedom**, Nobel 2004), which is why high-energy collisions leave legible jets rather than mush. The electromagnetic and weak entries of the table merged into one electroweak theory (Glashow, Salam, Weinberg; Nobel 1979); its predicted $W$ and $Z$ particles were found at CERN in 1983, and its final ingredient, the **Higgs boson**, in 2012 — the last blank in the particle scorecard filled in. The coupling ladder now reads: $\\alpha \\approx 1/137$ for electromagnetism, the strong coupling running from near unity down to about $0.1$, the weak scale set by the Fermi constant, gravity’s dimensionless strength $10^{-38}$ between two protons. Still outside: neutrino masses, dark matter, dark energy, and any quantum theory of gravity — the wires left hanging.',
          },
          {
            kind: 'open',
            heading: 'The measurement problem',
            body: 'Quantum mechanics predicts probabilities magnificently and says nothing about how a single outcome happens — and this section’s “no internal wheels” turns out to be a theorem, not an embarrassment. **Bell’s theorem** (1964) proves that no theory of local hidden machinery can reproduce the correlations quantum mechanics predicts between distant measurements; the loophole-free experiments of 2015 and the long campaign of Aspect, Clauser and Zeilinger (Nobel 2022) closed every escape route. Decoherence explains why superpositions die exponentially fast in a warm, noisy room — a cat is not even approximately alive-and-dead for a femtosecond — but not why one branch of the outcome occurs rather than another. Everett’s many-worlds, Bohm’s pilot waves, and objective-collapse theories such as GRW answer differently, and so far all make the same predictions wherever tested. The rules of the chess game are known to twelve digits; what a move is remains, strictly, unknown.',
          },
        ],
      },
    ],
    readingTime: 10,
    intro: 'Before 1920 the world was a stage of Euclidean space, absolute time, particles and two forces; after 1920 the stage became curved space-time, the rules became quantum-mechanical, and light, radio and x-rays merged into a single spectrum of electromagnetic waves. Feynman tells the story through his chess analogy — we are spectators guessing the rules — and ends with the particle table of the era and its honest confession of ignorance.',
    objectives: [
      'Explain the chess-game analogy and the three ways that guessed rules are checked against nature',
      'Reconstruct the world picture of physics before 1920: space, time, particles, the two known forces, and ninety-two kinds of atoms',
      'Show how electrical attraction and repulsion bind matter while canceling almost perfectly at a distance',
      'Trace the electromagnetic spectrum from power-line frequencies to cosmic-ray gamma rays',
      'Summarize what quantum mechanics changed — uncertainty and statistical prediction — and survey the particle zoo of the early 1960s',
    ],
    concepts: [
      {
        term: 'The chess-game analogy',
        kind: 'insight',
        statement: 'Nature is like a great **chess game played by the gods**, with us as observers who do not know the rules; the rules of the game are what we mean by fundamental physics. Even knowing every rule, we could not follow most of the play — the situations are too complicated and our minds are limited.',
        detail: 'If we watch long enough, we may catch on to a few of the rules. Physics limits itself to finding them — and even that is unfinished: “every once in a while something like castling is going on that we still do not understand.” The most interesting phenomena are in the places where the rules do not work.',
      },
      {
        term: 'Three ways to check the rules',
        kind: 'method',
        statement: 'Guessed rules are checked: (1) in **simple situations** where nature (or our arrangement of her) has so few parts that exact prediction is possible; (2) through **less specific rules derived from them** — a bishop moves only on diagonals, so it must always remain on its own color; (3) by **rough approximation** — “gathering pieces around the king” without following every move.',
        detail: 'The bishop on the red square works excellently for a long time — until suddenly it appears on a black square, because meanwhile it was captured and a pawn queened into a new bishop. That is exactly how physics discovers new rules: the failure of a derived regularity is the signal that something new (like castling) was going on.',
      },
      {
        term: 'Amalgamation',
        kind: 'definition',
        statement: 'The aim of basic theoretical physics is **amalgamation**: to see all of nature as different aspects of one set of phenomena. Heat and mechanics merged (heat is atomic motion); electricity, magnetism and light merged into the electromagnetic field; the properties of substances and the behavior of atomic particles merged into the quantum mechanics of chemistry.',
        detail: 'The process never finishes: “we were amalgamating very well, when all of a sudden x-rays were found. Then we amalgamated some more, and mesons were found.” At any stage the picture looks rather messy — a great deal is unified, but there are always wires hanging out in all directions.',
      },
      {
        term: 'The world picture of 1920',
        kind: 'insight',
        statement: 'Before 1920 the “stage” was the three-dimensional space of Euclid, with things changing in a medium called time; the elements were particles with **inertia**, and the forces were two: a complicated short-range interatomic interaction, and a smooth, quiet, inverse-square attraction called gravitation.',
        detail: 'There were considered to be ninety-two different kinds of atoms, named for their chemical properties. From this picture a gas is a myriad of moving particles: pressure is their collisions with the walls, wind is their average drift, heat is their random internal motion, and sound is a wave of excess density rushing through them. The seashore scene — water, waves, foam, sound, clouds, sand, rocks, animals — reduces to particles and these few rules.',
      },
      {
        term: 'Electrical forces and near-cancellation',
        kind: 'definition',
        statement: 'The electrical force is inverse-square like gravity but enormously stronger, and it comes in two kinds of charge: **likes repel, unlikes attract**. A close pair of plus and minus nearly cancels at a distance, so atoms feel almost no force until they come close enough to “see inside” each other and rearrange their charges — then the interaction is very strong.',
        detail: 'Feynman’s yardstick: two grains of sand a millimeter across, thirty meters apart, would attract with a force of three million tons if the charges did not balance. All things, ourselves included, are fine-grained, enormously strongly interacting mixtures of plus and minus in intimate combination; rubbing off a tiny excess of minuses (usually the easier sign) is enough to produce every everyday electrical effect, while barely changing the object’s weight or size.',
      },
      {
        term: 'Nucleus, protons, neutrons and electrons',
        kind: 'definition',
        statement: 'Each atom has a massive, positively charged **nucleus** surrounded by very light, negative **electrons**; the nucleus itself contains protons (charged) and neutrons (neutral) of nearly equal weight. The chemical properties depend only on the number of electrons — element six is carbon, element eight is oxygen.',
        detail: 'The negative particles of the ordinary world of matter are all electrons, very light compared with the protons and neutrons that make nuclei. The list of elements could simply have been called 1, 2, 3, 4, 5, and so on — chemistry depends only on that number — but the elements were named before the numbering was discovered.',
      },
      {
        term: 'The electromagnetic field and spectrum',
        kind: 'definition',
        statement: 'The modern view of electrical interaction is two rules: **charges make a field, and charges in fields feel forces**. When a charge is shaken, the influence arrives with a delay and falls off more slowly than inverse-square — the field carries waves, and these waves, distinguished only by frequency, make up the electromagnetic spectrum.',
        detail: 'The spectrum runs from electrical disturbances near $10^2$ cycles per second, through radio broadcast ($5\\times 10^5$ to $10^6$), FM and TV ($10^8$), radar ($10^{10}$), visible light ($5\\times 10^{14}$ to $10^{15}$ — red through violet, infrared below and ultraviolet above), x-rays ($10^{18}$), nuclear gamma rays ($10^{21}$), synchrotron-made gamma rays ($10^{24}$) and cosmic rays ($10^{27}$). The water analogy: pushing a cork moves only nearby water, but jiggling a cork sends waves to the far side of the pool. Nothing above about $10^{12}$ cycles per second has been detected directly as a frequency — higher frequencies are deduced from particle energies through quantum mechanics.',
      },
      {
        term: 'Quantum mechanics changes the rules',
        kind: 'law',
        statement: 'Just after 1920, quantum mechanics showed that on the atomic scale the rules of inertia and force — **Newton’s laws — are wrong**: a particle has no definite location and speed at once; the product of the uncertainties is bounded, $\\Delta x\\,\\Delta p \\ge \\hbar/2$; and it is fundamentally impossible to predict exactly what will happen in any circumstance — only statistical averages exist.',
        detail: 'There are no “internal wheels” hiding the answer. Philosophers had claimed that identical conditions must always produce identical results — “this is simply not true.” Nor must an experiment in Stockholm give the same result as in Quito: a pendulum on a universal joint precesses in Stockholm but not in Quito, and science survives both facts. Einstein changed the stage first to space-time, then to curved space-time for gravitation.',
      },
      {
        term: 'The particle zoo and the four interactions',
        kind: 'definition',
        statement: 'By the early 1960s about thirty particles were known, grouped as **baryons** (neutron 939 MeV, proton 938, the $\\Lambda$ at 1115, the $\\Sigma$ triplet, the $\\Xi$ doublet), **mesons** (pions at 139.6 and 135.0 MeV, the $K$ doublet, the $\\omega$ at 780) and **leptons** (electron 0.510 MeV, muon 105.6 — 206 electron masses — and two kinds of neutrinos), classified by charge and by the Gell-Mann–Nishijima “strangeness,” conserved in strong reactions.',
        detail: 'Yukawa predicted that nuclear forces imply particles of two or three hundred electron masses; the muon of the right mass turned out to be the wrong particle, and the pion (1947–48) was right. Four interactions order the scene by strength: photon-to-charge about $10^{-2}$ (law known — quantum electrodynamics), gravity-to-all-energy about $10^{-40}$ (law known), weak decays about $10^{-5}$ (law partly known), and mesons-to-baryons about $1$ (law unknown, some rules known). One MeV is $1.783\\times 10^{-27}$ gram.',
      },
    ],
    examples: [
      {
        title: 'How strong is electricity?',
        problem: 'To appreciate how completely the electric charges in ordinary matter cancel, Feynman asks: what force would act between two grains of sand if the cancellation were removed?',
        steps: [
          { label: 'Step 1: Set up the comparison', text: 'Take two grains of sand, each a millimeter across, thirty meters apart. Suppose everything attracted everything else, as in gravity, with no repulsion of likes — that is, with no cancellation of the electrical forces.' },
          { label: 'Step 2: The number', text: 'The force between the two grains would be three million tons. That is the electrical attraction that the balancing of plus against minus hides from us at every moment.' },
          { label: 'Step 3: The consequence for matter', text: 'Because all the plusses and minuses normally come together in the most intimate combination possible, only a tiny accidental excess or deficit of charge produces observable electrical effects — usually easier to rub off minuses than plusses.' },
          { label: 'Step 4: Why we never see the difference', text: 'So few particles are involved in charging an object that its weight and size hardly change: you cannot see the difference between a charged and an uncharged thing.' },
        ],
        result: 'Three million tons between two sand grains thirty meters apart: matter is exactly neutral because electricity is so strong, and only the tiniest imbalance is ever visible.',
      },
      {
        title: 'Touring the electromagnetic spectrum',
        problem: 'Shake a charged comb back and forth faster and faster. What phenomena appear, and what single number distinguishes them all?',
        steps: [
          { label: 'Step 1: Slow shaking', text: 'At about one hundred cycles per second you have the ordinary “pickup” from currents in the walls of a building; a charged scrap of paper follows the comb, with a slight delay when the shaking is fast.' },
          { label: 'Step 2: Onto the air', text: 'At 500 to 1000 kilocycles per second you are “on the air” — radio broadcast frequencies, which of course have nothing to do with the air, since radio works through vacuum.' },
          { label: 'Step 3: Up through the chart', text: 'FM and TV near $10^8$ cycles per second; short waves and radar near $10^{10}$; then, from $5\\times 10^{14}$ to $10^{15}$, the shaking comb would appear to the eye as red, blue or violet light. Below that band is infrared; above it, ultraviolet.' },
          { label: 'Step 4: Into the nucleus', text: 'At $10^{18}$ cycles per second the waves are x-rays — “nothing but very high-frequency light”; gamma rays from nuclei follow at $10^{21}$; the synchrotron at Caltech makes $10^{24}$; and waves in cosmic rays oscillate a thousand times faster still, beyond our control.' },
        ],
        result: 'The whole spectrum is one phenomenon: the only thing really different from one wave to another is the number of oscillations per second.',
      },
      {
        title: 'Why atoms are as big as they are',
        problem: 'Electrons attract protons electrically. Why do electrons not sit on top of nuclei and neutralize them — and why, if the nucleus holds nearly all the weight, is the atom huge?',
        steps: [
          { label: 'Step 1: The sizes', text: 'An atom has a diameter of about $10^{-8}$ cm; its nucleus only about $10^{-13}$ cm. Magnify an atom to the size of a large room and the nucleus is a bare speck you could just about make out with the eye — yet nearly all the weight of the atom sits in that infinitesimal speck.' },
          { label: 'Step 2: Apply the uncertainty principle', text: 'If an electron were confined to the nucleus, its position would be known precisely, and the uncertainty principle would then require a very large — but uncertain — momentum, that is, a very large kinetic energy.' },
          { label: 'Step 3: The consequence', text: 'With that kinetic energy the electron would break away from the nucleus. It cannot stay in.' },
          { label: 'Step 4: The compromise', text: 'The electrons “make a compromise”: they leave themselves a little room for this uncertainty and jiggle with a certain amount of minimum motion — the same minimum jiggle that keeps atoms vibrating in a crystal even at absolute zero.' },
        ],
        result: 'Atoms are big because the uncertainty principle forbids rest: the atomic size is the compromise between electrical attraction and the kinetic energy that confinement demands.',
      },
    ],
    keyTakeaways: [
      'Physics is the spectator’s attempt to infer the rules of the gods’ chess game; the rules are checked in simple situations, through derived regularities (the bishop on its color), and by rough approximation.',
      'The 1920 picture: Euclidean space, separate time, inertial particles, ninety-two elements, complicated short-range electrical forces plus smooth inverse-square gravitation.',
      'Electricity is inverse-square like gravity but vastly stronger, with likes repelling — so matter is a nearly exact balance of plus and minus, interacting strongly only at close range.',
      'Fields replace action at a distance: charges make fields, charges in fields feel forces, and shaken charges radiate waves spanning radio to cosmic-ray gamma rays.',
      'Quantum mechanics after 1920: no definite position and velocity together ($\\Delta x\\,\\Delta p \\ge \\hbar/2$), and only statistical prediction — with no hidden machinery to restore determinism.',
      'Quantum electrodynamics — photons coupled to all charges — is physics’ greatest success, deriving all electrical, mechanical and chemical laws outside the nucleus from two inserted numbers: the electron’s mass and charge.',
      'Inside the nucleus the picture was honest confusion: Yukawa’s pion, the accidental muon, thirty-odd particles sorted by strangeness, and four interactions whose laws are known less and less as they get stronger.',
    ],
    quiz: [
      {
        q: 'In the chess-game analogy, “the rules of the game” correspond to:',
        options: [
          'the complete solution of every physical problem',
          'fundamental physics — while most actual situations are too complicated to follow move by move',
          'the rules of mathematics, which govern all calculation',
          'the laws of chemistry, which are derived from physics',
        ],
        answer: 1,
        explanation: 'We are observers of a game whose rules we do not know; even knowing every rule would not let us follow the play — the situations are too complicated and our minds limited. The rules themselves are what we call fundamental physics.',
      },
      {
        q: 'A bishop is always seen on red squares for years, then suddenly appears on a black one. In physics this corresponds to:',
        options: [
          'an experimental error — the derived rule was never valid',
          'the discovery of a new rule (the old one failed where new physics entered), like castling or a pawn queening into a new bishop',
          'the bishop changing color by moving diagonally many times',
          'proof that chess, unlike nature, is deterministic',
        ],
        answer: 1,
        explanation: 'A less specific rule derived from the true rules works for a long time — until a situation arises that involves a rule we had not yet found. The failure is exactly how new rules are discovered: the interesting phenomena are where the rules do not work.',
      },
      {
        q: 'Two grains of sand, a millimeter across, thirty meters apart, would attract with a force of three million tons if:',
        options: [
          'they were made of uranium instead of silicon',
          'gravitation between them were a trillion times stronger',
          'there were no cancellation — if likes did not repel, so all their charges attracted',
          'they were magnetized',
        ],
        answer: 2,
        explanation: 'Feynman’s yardstick for the strength of electricity: it is the exact balancing of plus against minus in ordinary matter that reduces the force to (almost) nothing; without cancellation the attraction between the two grains would be three million tons.',
      },
      {
        q: 'Yukawa argued that the nuclear force implies a new particle. What happened when a particle of the right mass appeared in cosmic rays?',
        options: [
          'It was the pion, and everything was immediately explained',
          'It turned out to be the wrong particle — the muon; the pion was found later (1947–48)',
          'It proved the nuclear force is electrical in origin',
          'It was absorbed into the periodic table as a new element',
        ],
        answer: 1,
        explanation: 'The muon had roughly the predicted mass (206 electron masses) but was not Yukawa’s particle — “it was called a $\\mu$-meson... but it later turned out to be the wrong particle.” The pion, found in 1947–48, satisfied the criterion.',
      },
      {
        q: 'What does Feynman identify as our greatest success in physics so far?',
        options: [
          'The theory of gravitation',
          'The statistical mechanics of heat',
          'Quantum electrodynamics — the quantum-correct theory of light and matter',
          'The Mendeleev-style classification of the new particles',
        ],
        answer: 2,
        explanation: 'Out of quantum electrodynamics come all known electrical, mechanical and chemical laws outside the nucleus — billiard balls, wires in magnetic fields, the color of neon signs, the density of salt, the reaction of hydrogen and oxygen — from two numbers put in: the electron’s mass and its charge.',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.3
  {
    sectionId: 'phys-ch1-s3',
    depth: [
      {
        tier: 'masters',
        title: 'Life and stars by the Boltzmann factor',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Activation energy made quantitative',
            body: 'The energy hill between two similar substances is a potential-energy surface along the reaction coordinate, and its saddle top is the **transition state**. Eyring’s transition-state theory (1935) prices the crossing. The probability of gathering the energy to reach the saddle is governed by the Boltzmann factor $e^{-\\Delta G^{\\ddagger}/k_BT}$, and crossing attempts arrive at the natural thermal frequency $k_BT/h$, so the rate is $$k = \\frac{k_BT}{h}\\,e^{-\\Delta G^{\\ddagger}/k_BT}.$$ At blood heat $k_BT \\approx 4\\times10^{-21}$ J, so a barrier of thirty $k_BT$ slows the trillion-a-second attempts to about one per second at each site — the kinetic meaning of “most biochemical reactions do not occur.” Enzymes do not push molecules uphill; they bind the transition state and lower $\\Delta G^{\\ddagger}$, converting a no into a yes. And because the enzyme lowers the barrier symmetrically, the equilibrium ratio is untouched: an enzyme that cared which way the reaction ran would violate detailed balance — one of the laws of physics, exactly as this section warns.',
          },
          {
            kind: 'para',
            body: 'Complementarity is thermodynamics, and the helix is a zipper. Each stacked base pair contributes a binding free energy of order one $k_BT$, so a double helix of $N$ pairs pits $N$ such terms against entropy: the balance tips within a few kelvin, giving a sharp **melting temperature**. Zimm and Bragg (1959) added the statistics that make it sharp: nucleating a bubble in the helix costs extra free energy at its frayed ends, so opening is cooperative — once a bubble starts, it runs — and the transition acquires the steepness of a true phase transition. The melting temperature rises with the stronger pairing of G against C (three hydrogen bonds to A–T’s two) and with salt, whose ions screen the mutual repulsion of the two negatively charged backbones. Molecular biology runs the cycle deliberately: heat past the melting point to separate, cool to anneal, repeat — the polymerase chain reaction is an engineered melting transition, and every round of templating is this section’s complementarity doing thermodynamic work.',
          },
          {
            kind: 'derivation',
            heading: 'The mass defect',
            body: 'This section says the stars’ energy is the nuclear burning of hydrogen into helium; the arithmetic deserves one honest pass. Fuse four hydrogen atoms into one helium-4 atom and weigh both sides in atomic mass units: four hydrogens come to $4\\times1.007825 = 4.031300$ u, helium-4 to $4.002603$ u. The difference $$\\Delta m = 0.028697\\ \\text{u} \\approx 26.7\\ \\text{MeV}$$ is about $0.7\\%$ of the fuel, released per helium nucleus as radiation and neutrinos — sunshine is the missing mass, paid out through $E = \\Delta m c^{2}$. Running the sun’s measured luminosity of $3.8\\times10^{26}$ W backward: it fuses some six hundred million tonnes of hydrogen into helium every second, of which roughly four million tonnes become pure energy. The sun loses weight as it shines; over ten billion years it will convert less than a thousandth of itself this way — which is why the light is rationed, and why there was time for geology and biology to be lit by it.',
          },
          {
            kind: 'derivation',
            heading: 'Gamow’s tunnel and the sun’s slow fire',
            body: 'Why does the sun not burn out in a flash? At its center $k_BT \\approx 1.3$ keV — yet two protons must come within a few fermis of each other, where their Coulomb barrier stands near $1.4$ MeV, a thousand times the available heat. Classically no proton ever climbs that wall; quantum mechanically they tunnel through it. Gamow (1928) computed the leakage: the penetration probability falls as $e^{-2\\pi Z_1Z_2\\alpha c/v}$, so savagely velocity-dependent that fusion draws only from the fastest sliver of the Maxwell distribution of the previous level. And the very first step of the chain — two protons becoming a deuteron, which requires one proton to turn into a neutron — can proceed only through the **weak interaction**, with its slow clock. Tunneling plus weakness sets the sun’s ten-billion-year simmer; a star whose first step ran at strong-force speed would flash like a bomb. The slowness of the sun is not an imperfection — it is the reason there was time for anything at all.',
          },
          {
            kind: 'para',
            body: 'The spectroscope reads the tunes of the atoms; Einstein (1917) derived the rules they obey. A line of frequency $\\nu$ is a transition between two states, $h\\nu = E_2 - E_1$, and three processes move atoms between them: spontaneous emission at rate $A_{21}$, absorption at $B_{12}$, and stimulated emission at $B_{21}$. Demanding that a gas of such atoms reach thermal equilibrium with Planck’s spectrum fixes all three rates in terms of one: $$\\frac{A_{21}}{B_{21}} = \\frac{8\\pi h\\nu^{3}}{c^{3}},\\qquad B_{12} = B_{21}$$ for equal degeneracies — the **Einstein relations**, with no adjustable constants. Line ratios then become thermometers, because the Boltzmann populations of the excited levels depend on temperature, so a stellar spectrum hands the astronomer the temperature, composition and velocity of the gas that emitted it. And the third process — one photon passing an excited atom and recruiting a second, phase-matched photon — is the one the laser runs on.',
          },
          {
            kind: 'para',
            body: 'The one unsolved problem has numbers attached to it. The **Reynolds number** $\\mathrm{Re} = \\rho vL/\\mu$ — inertia over viscosity — decides the character of a flow, and pipe flow turns turbulent above a few thousand. In 1941 Kolmogorov argued by dimensional analysis that turbulent energy enters at the large scale, cascades through self-similar eddies at a rate set by that scale alone, and dies by viscosity where the local Reynolds number falls to one; the predicted spectrum of the cascade, $$E(k) \\propto k^{-5/3},$$ is confirmed from wind tunnels to the gas between the stars. What fails is closure: averaging the Navier–Stokes equations over small scales generates new unknown fluxes at every order, so the weather is not merely uncomputed but uncomputable in any naive sense — which is why the Clay Institute still lists the existence and smoothness of the Navier–Stokes solutions among its million-dollar problems. Wet water in a pipe keeps its secret.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Molecular machines and nonequilibrium physics',
        blocks: [
          {
            kind: 'theorem',
            heading: 'Jarzynski equality',
            body: 'Equilibrium thermodynamics prices a change of state by its endpoints: reversible work equals the free-energy difference $\\Delta F$, and real work can only exceed it. In 1997 Jarzynski proved that even violently irreversible work still knows the price. For any process connecting the same two states, repeated on a single molecule as many times as one pleases, $$\\left\\langle e^{-W/k_BT}\\right\\rangle = e^{-\\Delta F/k_BT},$$ the average running over the thermal noise itself. Rare runs that seem to violate the second law — work below $\\Delta F$ — are weighted exponentially, and they are exactly what restores the equality; the second law returns as Jensen’s inequality, $\\langle W\\rangle \\ge \\Delta F$. Crooks (1999) sharpened the statement: the probability of doing work $W$ forward divided by that of $-W$ backward is $e^{(W - \\Delta F)/k_BT}$, so dissipated work measures, microscopically, the arrow of time. Feynman’s ratchet-and-pawl analysis (Volume I, Chapter 46) — can thermal noise be rectified into free work? — was this subject’s founding thought experiment, and his no is the flip side of these yes-theorems.',
          },
          {
            kind: 'application',
            heading: 'Single molecules put to work',
            body: 'Optical tweezers — Ashkin’s Nobel 2018 — trap a dielectric bead in focused light with piconewton forces and sub-nanometer readout, and molecular biology now grips its own machinery with them. Tie one RNA hairpin between two beads, pull it apart and let it refold, hundreds of times, recording the fluctuating work of each pull: Collin, Ritort, Smith, Tinoco and Bustamante (2005) recovered the equilibrium folding free energy from those irreversible pulls, verifying Crooks’ relation run by run on one molecule. The experiment is Perrin’s table moved inside the cell — the 1905 Einstein–Brownian program become biophysics, one molecule at a time, where thermal noise is not a nuisance but the motor’s fuel. A kinesin motor really does walk: eight-nanometer steps against five piconewtons, about ten $k_BT$ of work paid for by one ATP molecule’s chemical free energy, rectified by a protein that is itself jiggling at this section’s million-times-a-second pace.',
          },
          {
            kind: 'application',
            heading: 'Active matter',
            body: '“Everything animals do, atoms do” — and a young physics discipline now studies the doing. **Active matter** collects particles that burn local fuel to keep moving: motor proteins cross-linking a cell’s skeleton, swimming bacteria, shaken grains, flying birds. Burning fuel breaks detailed balance, so the statistics is not Boltzmann’s: with no free energy to minimize, order appears as a purely mechanical fact. Bacteria confined to a small disk spontaneously rotate as one; dense suspensions swim into turbulence-like states with no inertia to blame; the cell’s own cortex stiffens and divides because thousands of motors walk it. The theory frontier is precisely the nonequilibrium one — defining entropy production for a single driven trajectory, taming the fluctuations of small driven systems, and writing the phase-transition theory of things that never stop moving. It is the physics of every cell in the reader’s body, an active gel continuously rebuilt by motors walking on Feynman’s thermal noise — the newest chapter of the atomic hypothesis.',
          },
          {
            kind: 'open',
            heading: 'The protein-folding problem',
            body: 'Of hemoglobin’s thousand-odd atoms this section admits: “we cannot see anything from the pattern.” That admission is still the frontier. Anfinsen (Nobel 1972) showed that a protein’s amino-acid sequence encodes its fold — the native structure is the free-energy minimum — but **Levinthal’s paradox** marks the mystery: a chain has vastly more conformations than there are femtoseconds in the age of the universe, so folding cannot be blind search; it must funnel through a biased energy landscape whose full theory remains unwritten. AlphaFold (2021; half of the 2024 chemistry Nobel to Hassabis and Jumper) predicts structures from sequence with atomic accuracy, solving the engineering while the physics is still argued: how exactly does the funnel guide the chain, what governs the misfolded states behind prion and Alzheimer’s disease, and why do whole classes of proteins stay deliberately, functionally unfolded? Whether prediction counts as understanding is the newest form of Feynman’s lament about the pattern.',
          },
        ],
      },
    ],
    readingTime: 9,
    intro: 'Physics, says Feynman, is the present-day equivalent of natural philosophy — the trunk from which the other sciences grew. This section walks the branches: chemistry reduced to physics in principle, the machinery of nerves and muscles, enzymes and the Krebs cycle, the DNA blueprint, the spectroscope’s discovery that stars are made of the same atoms as the earth — and the honest list of what physics still cannot do, with turbulent water at the top of it.',
    objectives: [
      'Explain why theoretical chemistry is physics “in principle,” and what the chess analogy teaches about that qualification',
      'Describe the nerve impulse and muscle contraction in terms of ion pumps, membranes and acetylcholine',
      'Explain activation energy and the enzyme’s role as a molecular machine that routes reactions around the barrier',
      'Recount the structure of DNA, its complementary base pairing, and how it replicates and directs protein synthesis',
      'Summarize how physics serves astronomy, geology and psychology — and identify the unsolved problems that cross all fields',
    ],
    concepts: [
      {
        term: 'Physics as natural philosophy',
        kind: 'definition',
        statement: 'Physics is the **most fundamental and all-inclusive** of the sciences — the present-day equivalent of what used to be called natural philosophy, from which most modern sciences arose. Mathematics is not a science in this sense: the test of its validity is not experiment.',
        detail: '“If a thing is not a science, it is not necessarily bad. For example, love is not a science.” The definition of science is experiment — and Feynman pointedly excludes psychoanalysis from science for that reason: it has not been checked carefully by experiment, with no count of the cases where it works and where it fails.',
      },
      {
        term: 'Chemistry: reduced in principle',
        kind: 'insight',
        statement: 'All the rules of chemistry — Mendeleev’s periodic chart and the rules of combination — were ultimately explained **in principle** by quantum mechanics, so theoretical chemistry is in fact physics. But knowing the rules of chess is not the same as playing well: predicting precisely what happens in a given reaction remains very difficult.',
        detail: 'Statistical mechanics, developed jointly by physics and chemistry, answers the problem of astronomical numbers of jiggling atoms that no computer and no mind could track individually. Inorganic chemistry is now reduced essentially to physical chemistry (rates and mechanisms) and quantum chemistry; organic chemistry — the analysis and synthesis of biological substances — shades through biochemistry into molecular biology.',
      },
      {
        term: 'The nerve impulse',
        kind: 'insight',
        statement: 'A nerve is a very fine tube whose complex, very thin wall pumps ions — positive outside, negative inside — **like a capacitor**. If the membrane “discharges” at one place, the electrical influence makes neighboring points permeable too, and a **wave of penetrability** runs down the fiber like a long row of falling dominoes.',
        detail: 'A domino row transmits only one message until it is set up again: after each impulse the slow pumps move the ions back out, restoring the charge for the next signal. The electrical effects can be picked up with instruments, and the physics of electricity has had a great deal of influence on understanding the phenomenon.',
      },
      {
        term: 'Muscle contraction',
        kind: 'insight',
        statement: 'When an impulse reaches the end of a nerve, little packets of a chemical — **acetylcholine**, five or ten molecules at a time — are shot off at the endplate and make the muscle fiber contract. A muscle is a great number of fibers containing myosin and actomyosin, but the machinery by which the chemical reaction changes the muscle’s dimensions was not known.',
        detail: 'Feynman marks the border honestly: these are physical phenomena — circulation, pressure, pumps, nerves — and yet even understanding them fully would not explain life itself, since plants live and work with neither nerves nor muscles.',
      },
      {
        term: 'Enzymes and activation energy',
        kind: 'definition',
        statement: 'Most biochemical reactions do not occur because an **energy barrier** — an activation-energy hill — stands between two similar substances. Enzymes are very large molecules (all enzymes are proteins) that hold the smaller molecules “just right,” opening a route around the hill so the reaction proceeds easily.',
        detail: 'The enzyme itself is unchanged, like a machine in a factory: it lets atoms go from one place to another, then does it again. Special units carry hydrogen between reactions; the transformation from GDP to GTP is the cell’s energy payoff — muscle fiber in water with GTP and the right enzymes will contract. An enzyme cannot care which direction the reaction goes, for if it did it would violate one of the laws of physics.',
      },
      {
        term: 'Proteins: twenty amino acids',
        kind: 'definition',
        statement: 'All enzymes are proteins, and every protein is a **chain of amino acids** — twenty different kinds, joined through a CO–NH backbone. Each contributes a feature: a sulfur atom that ties the chain into loops, big groups that take up space, or proline, an imino acid that puts a kink in the chain.',
        detail: 'Since 1960 the exact spatial arrangement of certain small proteins is known: the first was hemoglobin, with some fifty-six or sixty amino acids in a row, and over a thousand atoms located — more nearly two thousand counting hydrogens. “One of the sad aspects of this discovery is that we cannot see anything from the pattern”: understanding why it works is the next problem.',
      },
      {
        term: 'DNA: the blueprint and the code',
        kind: 'law',
        statement: 'The information for making enzymes is carried by **DNA** — a pair of chains twisted upon each other, each with a backbone of sugar and phosphate groups, linked by cross-links of only four kinds: adenine, thymine, cytosine and guanine. Only certain pairs can sit opposite each other — A against B and C against D — so each half-chain determines its complement.',
        detail: 'To reproduce, the chain splits down the middle and each half assembles its complement from loose units: a half reading BAADC builds ABBCD, and two identical molecules exist where there was one. Copies (RNA) go to the ribosomes, where proteins are made — but in 1961 the code was unread: knowing the lineup A, B, C, C, A, no one could say what protein it specifies. Isotopes — carbon-12 versus carbon-13, or radioactive carbon-14 — provide the “green marks” that trace each atom through the cell’s economy.',
      },
      {
        term: 'Astronomy: the same atoms',
        kind: 'insight',
        statement: 'The most remarkable discovery in all of astronomy is that **the stars are made of atoms of the same kind as those on the earth**. Atoms liberate light of definite frequencies — like the timbre of a musical instrument — and a spectroscope reads the very tunes of the atoms in the stars.',
        detail: 'Helium was discovered on the sun (whence its name) and technetium in certain cool stars, before either was found on earth. We understand the distribution of matter inside the sun better than inside the earth: the stars’ energy is the nuclear burning of hydrogen into helium, and the isotope proportions in “the cold, dead ember which we are” record the stellar furnace in which our stuff was cooked and the novae that spat it out.',
      },
      {
        term: 'The historical question and turbulence',
        kind: 'insight',
        statement: 'The sister sciences pose the **historical question** — “how did it get that way?” — which physics, whose laws (so far as we know) do not change with time, does not. And one physical problem, over a hundred years old, remains unsolved across all the fields: **turbulent flow** — “actual, wet water running through a pipe.”',
        detail: 'We cannot analyze the weather, follow stellar convection past its onset, or compute the pressure needed to push water through a pipe at high speed; slow or viscous flow is textbook material, wet water is not. Psychology adds the memory problem — what changes in the nervous system when a fact is learned? — and the section closes on the glass of wine: if our small minds divide this universe into physics, biology, geology, astronomy, psychology — “remember that nature does not know it!”',
      },
    ],
    examples: [
      {
        title: 'The nerve impulse as a traveling discharge',
        problem: 'You step on a sharp stone. How does the information travel from your leg up to your brain, in the picture the biologists had assembled?',
        steps: [
          { label: 'Step 1: The charged membrane', text: 'A nerve is a very fine tube with a complex wall that is very thin. Through this wall the cell pumps ions, so that there are positive ions on the outside and negative ions on the inside — the membrane is charged like a capacitor.' },
          { label: 'Step 2: A local discharge', text: 'If some ions move through the wall at one place, the electric voltage is reduced there. That electrical influence is felt by the ions in the neighborhood, and it changes the membrane so that it lets ions through at neighboring points also.' },
          { label: 'Step 3: The wave', text: 'Each newly permeable stretch affects the next, and a wave of “penetrability” runs down the fiber — analogous to a long row of vertical dominoes: pushing the end one over pushes the next, and so on down the line.' },
          { label: 'Step 4: Resetting the dominoes', text: 'A domino row transmits only one message unless the dominoes are set up again. The nerve’s pumps slowly push the ions back out, restoring the charge and preparing the fiber for the next impulse.' },
        ],
        result: 'A nerve impulse is a self-propagating wave of membrane discharge — an electrical event instruments can detect — followed by a slower chemical recharging.',
      },
      {
        title: 'Replication by complementarity',
        problem: 'Every atom certainly does not grow bigger and divide in half — so how does a DNA molecule make a copy of itself?',
        steps: [
          { label: 'Step 1: The double chain', text: 'DNA is a pair of chains twisted upon each other, each with a sugar–phosphate backbone, joined by cross-links of four kinds. Call them A, B, C and D (adenine, thymine, cytosine, guanine).' },
          { label: 'Step 2: The pairing rule', text: 'Only certain pairs can sit opposite each other — A with B and C with D — because only those fit together and have a strong energy of interaction. C will not fit with A; B will not fit with C.' },
          { label: 'Step 3: Split', text: 'During cell division the chain splits down the middle, one half ultimately going to each new cell. Suppose one half reads BAADC and so on.' },
          { label: 'Step 4: Rebuild', text: 'The cell’s manufacturing department supplies loose phosphate, sugar, and A, B, C, D units; the only ones that can attach to the split chain are the complements. Each half-chain assembles its partner — ABBCD and so on — and two identical double molecules exist where there was one.' },
        ],
        result: 'Complementarity, not growth-and-division: each half of the DNA molecule is a template that reconstructs the other half.',
      },
      {
        title: 'Labeling atoms to trace the cell’s economy',
        problem: 'The Krebs cycle — the respiratory cycle of the cell — was mapped at enormous effort. What physical tool made it possible to watch one particular carbon atom wander through the chart?',
        steps: [
          { label: 'Step 1: The isotope idea', text: 'The chemical properties of atoms are determined by the number of electrons, not by the mass of the nucleus. Carbon always has six protons, but it may have six or seven neutrons: carbon-12 and carbon-13 are chemically identical, yet different in weight and in nuclear properties.' },
          { label: 'Step 2: Green marks', text: 'Introduce carbon dioxide carrying such a mark into the cycle, then measure where the mark stands after three seconds, after ten seconds, and so on — tracing the course of the reactions step by step.' },
          { label: 'Step 3: Radioactive sensitivity', text: 'Radioactive isotopes such as carbon-14 provide a still more sensitive means of tracing very small quantities, extending the method far below what weighing or chemistry could detect.' },
          { label: 'Step 4: The payoff', text: 'With the labeled atoms the whole traffic through the cycle was mapped — the chart Feynman reproduces covers perhaps a percent of the reactions occurring in cells, each controlled by its own enzyme.' },
        ],
        result: 'Isotopes turned biochemistry into a spectator sport: the same chemistry, a different mass — and the atom leaves a visible trail through the cycle.',
      },
    ],
    keyTakeaways: [
      'Theoretical chemistry is physics in principle — quantum mechanics explains Mendeleev’s chart — but predicting real reactions is like knowing the rules of chess without playing well.',
      'Statistical mechanics was physics and chemistry’s joint answer to the impossibility of tracking astronomical numbers of jiggling atoms.',
      'A nerve impulse is a wave of membrane discharge — dominoes of ion permeability — followed by slow pumping that resets the fiber.',
      'Enzymes are protein machines that route reactions around activation-energy hills; the GDP-to-GTP transformation is the cell’s energy currency, and an enzyme cannot favor a direction without violating physics.',
      'DNA’s complementary pairing (A with B, C with D) makes heredity a problem of geometry rather than vital force — replication is templating.',
      'Stars are made of the same atoms as the earth, read from their spectra; the elements, including ours, were cooked in stars and spit out in novae and supernovae.',
      'Turbulence remains unsolved after more than a century, and the historical questions of the sister sciences have no counterpart in physics as we know it.',
    ],
    quiz: [
      {
        q: 'In what sense is theoretical chemistry “in fact physics”?',
        options: [
          'Chemists use apparatus designed by physicists',
          'All the rules of chemistry are explained in principle by quantum mechanics — though predicting actual reactions remains as hard as playing chess knowing only the rules',
          'Chemistry has been absorbed into physics departmentally',
          'Chemical reactions do not involve atoms',
        ],
        answer: 1,
        explanation: 'The periodic chart and the rules of combination follow from quantum mechanics — the reduction is genuine but “in principle”: knowing the rules of the game is one thing, playing it well is another.',
      },
      {
        q: 'After a nerve impulse has passed down a fiber, what makes a second impulse possible?',
        options: [
          'The wave reflects back from the brain',
          'Processes in the membrane slowly pump the ions out again, restoring the charged, dominoes-standing state',
          'New ions are created by the electrical activity',
          'Nothing — each nerve fiber fires only once',
        ],
        answer: 1,
        explanation: 'The impulse is like a row of falling dominoes: it transmits one message unless it is set up again. The cell’s pumps slowly move the ions back through the membrane, recharging the “capacitor” for the next signal.',
      },
      {
        q: 'Which cross-link pairs are possible in DNA, and why does that matter for replication?',
        options: [
          'Any base can pair with any other, so the chain is flexible',
          'Only A with B and C with D fit — so each half-chain determines its complement, and a split chain rebuilds its partner from loose units',
          'Only A with A and C with C pair, so each chain copies itself directly',
          'The pairs change with temperature, allowing adaptation',
        ],
        answer: 1,
        explanation: 'Only certain pairs sit opposite each other, with a strong energy of interaction — C will not fit with A. So when the double chain splits, the only units that attach to a half reading BAADC are the complements ABBCD: templated replication.',
      },
      {
        q: 'Which two chemical elements were discovered on stars before they were discovered on the earth?',
        options: [
          'Hydrogen and helium',
          'Helium (on the sun) and technetium (in certain cool stars)',
          'Carbon and oxygen',
          'Neon and argon',
        ],
        answer: 1,
        explanation: 'The spectroscope reads the definite frequencies of the atoms’ light — “the very tunes of the atoms.” Helium was found on the sun (whence its name) and technetium in cool stars, both before being found on earth.',
      },
      {
        q: 'Feynman names one physical problem, more than a hundred years old, that nobody has been able to analyze satisfactorily and that blocks the sister sciences. It is:',
        options: [
          'the motion of the planets',
          'the analysis of turbulent flow — such as the pressure needed to push wet water through a pipe at high speed',
          'the structure of the atomic nucleus',
          'the origin of the chemical elements',
        ],
        answer: 1,
        explanation: 'Turbulence defeats the weather, stellar convection, and even the simplest case: how much pressure pushes a given amount of water through a long pipe. Slow or honey-like flow is in the textbooks — “what we really cannot do is deal with actual, wet water running through a pipe.”',
      },
    ],
  },

  // ------------------------------------------------------------------ 1.4
  {
    sectionId: 'phys-ch1-s4',
    depth: [
      {
        tier: 'masters',
        title: 'The machinery of measurement, upgraded',
        blocks: [
          {
            kind: 'derivation',
            heading: 'Why decay is exponential',
            body: 'Radioactivity obeys $(1/2)^{t/T}$, and the reason is amnesia: a nucleus that has waited ten thousand years is not tired — in the next second it has exactly the same small chance $\\lambda$ of going as a freshly made one. Decay is memoryless, so of the $N$ nuclei present at time $t$, a fraction $\\lambda\\,dt$ fires in the next instant: $dN = -\\lambda N\\,dt$, which integrates to $$N(t) = N_0e^{-\\lambda t},\\qquad T_{1/2} = \\frac{\\ln 2}{\\lambda}.$$ The quantum-mechanical origin is Wigner–Weisskopf theory: a quasi-stationary state leaks into the continuum at a rate set by the transition matrix element, constant in time. The clock dies of statistics, not chemistry: after $n$ half-lives a fraction $2^{-n}$ remains, and twenty half-lives leaves one part in a million — when the count rate sinks to the laboratory background, the method ends. That is the real meaning of this section’s “twenty half-lives can be measured”: carbon-14’s hundred-thousand-year reach is a counting limit.',
          },
          {
            kind: 'derivation',
            heading: 'Rutherford’s cross-section',
            body: 'The beam-attenuation method of this section becomes exact with a formula. An alpha particle of charge $Z_1e$ and energy $E$, aimed with impact parameter $b$ past a nucleus of charge $Z_2e$, follows a hyperbola and leaves deflected through $\\theta$ with $$b = \\frac{Z_1Z_2k_e e^{2}}{2E}\\cot\\frac{\\theta}{2},\\qquad k_e = \\frac{1}{4\\pi\\epsilon_0}.$$ Converting impact parameters into solid angles gives the **Rutherford cross-section**: $$\\frac{d\\sigma}{d\\Omega} = \\left(\\frac{Z_1Z_2k_e e^{2}}{4E}\\right)^{2}\\frac{1}{\\sin^{4}(\\theta/2)}.$$ Glancing blows are common; but one alpha in eight thousand came essentially straight back — Rutherford said it was like firing a shell at tissue paper and having it return — and backward scattering means a head-on approach to within $Z_1Z_2k_ee^{2}/E$ of the center: tens of fermis for the polonium alphas on gold. The atom’s heart was thereby bounded near $10^{-14}$ m, and where the formula later fails — at alpha energies high enough to touch the nuclear surface — the failure itself maps the radius.',
          },
          {
            kind: 'para',
            body: 'This section names Norman Ramsey’s hydrogen clock at Harvard; the idea beneath it won the 1989 Nobel Prize. A clock is an atom interrogated by an oscillator, and interrogation takes time: a single long pulse of duration $T$ can resolve the resonance only to a bandwidth of order $1/T$. Ramsey’s trick was to split the pulse into two short ones separated by a free flight through time $T$: the atom samples the oscillator’s phase at entry and at exit, the two samplings interfere, and the resonance fringes come out only $1/2T$ wide — as sharp as if the atom had been held for the whole time. The cesium fountain clocks that define the second launch atoms up through a microwave cavity and let them fall through again; the hydrogen maser, storing the atom’s coherence in a coated bulb, keeps time to a part in $10^{15}$ over a day. The oscillator chain of this chapter — pendulum to electronics to atoms — ends in interference made to count.',
          },
          {
            kind: 'para',
            body: 'The ladder’s rungs, with their exchange rates made explicit. Triangulation trades angle for distance, and a parallax of one arcsecond at the baseline of the earth’s orbit defines the **parsec**: $3.086\\times10^{16}$ m. Gaia’s parallaxes for nearly two billion stars now weld the bottom rungs to pure geometry. Brightness takes over from there: inverse-square dimming, written as the **distance modulus** $$m - M = 5\\log_{10}\\left(\\frac{d}{10\\ \\text{pc}}\\right),$$ turns a star’s apparent magnitude $m$ and calibrated absolute magnitude $M$ into distance. Cepheid variables supply the calibration through Leavitt’s period–luminosity law, and type Ia supernovae carry the ladder into cosmology. Every rung is cross-checked against its neighbors — parallax against Cepheids, Cepheids against supernovae — and the whole edifice exists to be audited: how a single miscalibrated rung poisons everything above it is precisely today’s problem, taken up in the research tier below.',
          },
          {
            kind: 'remark',
            body: 'The time–energy uncertainty of this section is not only a limit; it is a working scale. A state that lives for $\\tau$ is smeared in energy by $\\Delta E \\approx \\hbar/2\\tau$, so every spectral line has a natural width, and short-lived means broad. The neutral pion of this section’s example, with $\\tau$ near $10^{-16}$ s, carries a width $\\Gamma = \\hbar/\\tau \\approx 6.6$ eV — printed as a slightly fuzzy mass. The $10^{-24}$-second resonances of the particle tables are hundreds of MeV wide, which is why they are called broad: the briefest things in nature are also the fuzziest, their masses quoted as ranges rather than numbers. Precision in time and precision in energy trade against each other exactly as $\\Delta t \\ge \\hbar/2\\Delta E$ promises — and the exchange rate is measured in any spectroscopy laboratory.',
          },
        ],
      },
      {
        tier: 'phd',
        title: 'Measurement at the frontier',
        blocks: [
          {
            kind: 'application',
            heading: 'Clocks at eighteen digits',
            body: 'The oscillator chain of this chapter — pendulum to electronics to atoms — has run past its own end. The second is defined by 9,192,631,770 swings of the cesium-133 hyperfine resonance; fountain clocks realize it to about a part in $10^{16}$, and optical clocks — counting on transitions of strontium, ytterbium or a single trapped aluminum ion, at hundreds of terahertz — reach below one part in $10^{18}$. At that level a clock runs measurably fast by being lifted: the gravitational redshift amounts to a fraction $gh/c^{2}$, about $10^{-18}$ for one centimeter of height, so comparing two optical clocks is now a way of measuring elevation — chronometric leveling. Since 2019 the rest of the SI rides on defined constants: $c$ fixes the meter, $h$ the kilogram, $e$ the ampere, $k_B$ the kelvin, $N_A$ the mole. Galileo’s pulse has become the quietest, most reproducible instrument on the planet, and the next redefinition of the second will be optical.',
          },
          {
            kind: 'application',
            heading: 'Gravitational-wave rulers',
            body: 'The large end of this section’s measuring is $10^{26}$ m; the frontier of the small is now $10^{-18}$ m — of distance change. LIGO’s interferometers send laser light down two perpendicular 4-km arms; a passing gravitational wave strains space by $h \\sim 10^{-21}$, changing each arm by $hL \\approx 4\\times10^{-18}$ m — a few thousandths of a proton’s diameter, sensed as interference when the returning beams recombine. The photons themselves set a quantum limit — shot noise — and LIGO beats it by injecting **squeezed light**, trading uncertainty out of the phase that carries the signal and into amplitude where it does no harm. The first detection (2015: two black holes of roughly thirty solar masses merging a billion light-years away) opened a channel on the universe, and every chirp is a self-calibrating **standard siren** — the wave’s shape fixes its absolute loudness, so the distance comes out directly — extending this section’s ladder by a rung made of spacetime itself.',
          },
          {
            kind: 'open',
            heading: 'The Hubble tension',
            body: 'The distance ladder is presently in productive crisis. Measured rung by rung — parallax, Cepheids, supernovae — the local expansion rate comes out near $H_0 \\approx 73$ km/s/Mpc (the SH0ES collaboration); inferred from the microwave ripples of the early universe, evolved forward through the standard cosmology (the Planck satellite), it comes out at $67.4$ km/s/Mpc. The disagreement has held near five standard deviations for years, surviving every cross-check applied to it. Either a rung is subtly broken — Cepheid calibration, stellar crowding, dust, supernova populations — or the mismatch is the first quantitative message from physics beyond the standard model: early dark energy, extra relativistic species, and interacting dark matter each leave a different fingerprint in the gap. The James Webb telescope is re-auditing the Cepheid rung, and standard sirens from gravitational waves are measuring the expansion rate independently. The ladder built to ask “how far?” is now asking “which physics?”',
          },
        ],
      },
    ],
    readingTime: 10,
    intro: '“Where?” and “when?” are the questions basic to all physics, and this section is about the “when” — and then the “where.” From Galileo timing a ball down a trough with his own pulse, to electronic oscillators at a trillionth of a second; from carbon-14 dating to the uranium clock that fixed the earth at four and a half billion years; and from triangulating Sputnik to the most distant galaxies at $10^{26}$ meters: this is how physics measures time and distance.',
    objectives: [
      'Recount Galileo’s inclined-plane experiment and the law $D \\propto t^{2}$ it established',
      'Explain the operational definition of time through periodic events and the calibration chain from the day down to $10^{-12}$-second oscillators',
      'Apply the half-life relation to radioactive dating, from carbon-14 to the age of the earth',
      'Trace the distance ladder from triangulation and radar to the color–brightness method and $10^{26}$ meters',
      'Compute nuclear radii from cross-section attenuation data',
    ],
    concepts: [
      {
        term: 'Quantitative observation: Galileo’s law of fall',
        kind: 'method',
        statement: 'Physics became quantitative with Galileo, who rolled a ball down an inclined trough and — lacking any clock — **counted his pulse**, marking where the ball was at each beat. The marks fall at distances proportional to $1, 4, 9, 16, \\dots$: the distance is proportional to the square of the time, $$D \\propto t^{2}.$$',
        detail: 'Until Galileo the study of motion had been philosophical, based on arguments thought up in one’s head and taken as proven since Aristotle. The way to measure distance was well known; what was new was measuring how far in how long a time. The study of motion — basic to all physics — is the business of answering “where?” and “when?”',
      },
      {
        term: 'Time as measured periodicity',
        kind: 'definition',
        statement: 'Time cannot be defined in the dictionary sense — “Webster defines ‘a time’ as ‘a period,’ and the latter as ‘a time’” — so physics takes the operational route: **time is what a periodic event measures**. A day seems periodic; comparing it with an hourglass turned over at each emptying tests one regularity against another.',
        detail: 'Counting hourglass turnings from morning to morning gives different numbers per “day” — until we count from noon to noon (noon being the instant the sun is highest), when the counts agree. We have not proved either device “really” periodic; we have found that one regularity fits another, and that is all a working definition of time needs.',
      },
      {
        term: 'The calibration chain for short times',
        kind: 'method',
        statement: 'Short times are measured by a **chain of oscillators, each ten times faster than the last, each calibrated by counting its swings against the slower one**. A pendulum swinging 3600 times per hour (with 24 such hours per day) defines the second; electronic oscillators — electrical currents swinging to and fro — reach periods of about $10^{-12}$ second.',
        detail: 'The day has been divided into about $10^{5}$ parts by the pendulum clock, and the second into $10^{12}$ parts by electronics. The oscilloscope, which plots current against time on a fluorescent screen, serves as a microscope for short times. Lasers promise still shorter periods, but had not yet been calibrated by the counting method when the Lectures were given.',
      },
      {
        term: 'Times from distance and speed',
        kind: 'method',
        statement: 'Below about $10^{-12}$ second, time is measured differently: **by the distance something travels divided by its speed**. A $\\pi^0$-meson, known to be traveling nearly at the speed of light, goes on average about $10^{-7}$ meter in a photographic emulsion before disintegrating — so it lived for only about $10^{-16}$ second.',
        detail: 'This is a somewhat different definition of “time,” trusted so long as no inconsistencies appear in our understanding. The strange resonances of Chapter 2 live only about $10^{-24}$ second — roughly the time light takes to cross the nucleus of hydrogen, the smallest known object. Whether still smaller times have any meaning is left as an open question “which you will be asking and perhaps answering in the next twenty or thirty years.”',
      },
      {
        term: 'Radioactive dating',
        kind: 'law',
        statement: 'Radioactivity decreases by the same fraction for successive equal increases in age: after $t/T$ half-lives the fraction remaining is $(1/2)^{t/T}$. If an object contained amount $A$ of an isotope when formed and contains $B$ now, its age $t$ satisfies $$\\left(\\frac{1}{2}\\right)^{t/T} = \\frac{B}{A}.$$',
        detail: 'Carbon-14, replenished continuously in the air by cosmic rays, has a half-life $T$ of 5000 years; some twenty half-lives can be measured, so organic objects up to about 100,000 years old can be dated. Uranium (half-life about $10^{9}$ years) disintegrates into lead; since lead and uranium separate chemically in a forming rock, comparing the fractions today gives the rock’s age. Averaged over the oceans and the earth, the method fixes the age of the earth at about 4.5 billion years — the same as the meteorites — and the universe began, Feynman reports, ten or twelve billion years ago.',
      },
      {
        term: 'Standards of time',
        kind: 'insight',
        statement: 'The earth’s rotation — long the basic standard, with the second defined as $1/86{,}400$ of an average day — is **not exactly periodic** when measured against better clocks: some days are longer, some shorter, and the average period slowly increases as the centuries pass. Atomic clocks, based on atomic vibrations insensitive to temperature and external effects, keep time to one part in $10^{9}$ or better.',
        detail: 'The best clocks are the ones that agree with each other. There is the story of the Swiss boy who wanted all the clocks in his town to ring noon at the same time — everyone agreed it was a marvelous idea so long as all the other clocks rang noon when his did! Norman Ramsey’s hydrogen-atom clock at Harvard was expected to be a hundred times more accurate still, and the unit of time was expected soon to be defined by an atomic standard.',
      },
      {
        term: 'The distance ladder',
        kind: 'method',
        statement: 'Distance starts from counting units, but great distances come from **triangulation**: the first Sputnik was found by it to be roughly $5\\times 10^{5}$ meters high; the moon is $4\\times 10^{8}$ meters away; the earth’s orbit provides the baseline for stellar parallax. Where triangulation fails, the **color–brightness relation** of stars and the comparison of galaxy sizes extend the ladder to $10^{26}$ meters.',
        detail: 'The sun’s distance was fixed by the relative positions of the planets plus one absolute measurement — classically triangulation on the asteroid Eros, recently radar bounced off Venus (the distance from the round-trip time, assuming the speed of light is the same everywhere between). Globular clusters concentrate toward the galactic center, about $3\\times 10^{20}$ meters — 30,000 light-years — away; a galaxy like our own, subtending a known angle, lies $3\\times 10^{23}$ meters — 30 million light-years — away; the most distant galaxies photographed at Palomar are about $10^{26}$ meters away, about halfway to the limit of the universe.',
      },
      {
        term: 'Cross-sections and short distances',
        kind: 'definition',
        statement: 'Below the wavelength of visible light (about $5\\times 10^{-7}$ meter) optical methods fail; electron micrographs reach $10^{-8}$ meter, and x-ray scattering from crystals locates atoms at about $10^{-10}$ meter. For nuclei, the convenient measure of size is the apparent area, the **cross-section** $\\sigma$, with $\\sigma = \\pi r^{2}$ for nearly spherical nuclei.',
        detail: 'A beam of high-energy particles through a thin slab is stopped or deflected only by nuclei; with $N$ atoms spread over area $A$, the fraction of the area covered is $N\\sigma/A$, and this equals the fraction of particles stopped. A centimeter of material contains about $10^{8}$ atomic layers, yet the nuclei are so small that hardly any lies behind another. The measured radii come out $1$ to $6\\times 10^{-15}$ meter — the unit $10^{-15}$ m is called the fermi.',
      },
      {
        term: 'The limits of measurement',
        kind: 'law',
        statement: 'Perfectly precise measurements are forbidden by the laws of nature: the error in a position measurement must be at least $$\\Delta x \\ge \\frac{\\hbar}{2\\,\\Delta p},$$ where $\\Delta p$ is the error in the momentum knowledge — and the relativity of space and time adds $$\\Delta t \\ge \\frac{\\hbar}{2\\,\\Delta E},$$ a minimum time error in terms of the energy knowledge.',
        detail: 'Both uncertainties are related to the wave nature of particles. Before that wall is even reached, ordinary measurement bends with the observer: two observers moving relative to each other measure different distances and time intervals for the same events — the subject of relativity. The meter itself has moved from an earth-fraction definition — $(\\pi/2)\\times 10^{-7}$ of the earth’s radius — to scratches on a bar in France, and was heading toward an agreed number of wavelengths of a chosen spectral line.',
      },
    ],
    examples: [
      {
        title: 'Dating with carbon-14',
        problem: 'A piece of wood contains radioactive carbon-14 with a half-life of $T = 5000$ years. How old is it, given the fraction of the original carbon-14 that remains?',
        steps: [
          { label: 'Step 1: The decay law', text: 'Radioactivity decreases to one-half in each half-life $T$, to one-quarter in another, and so on: after $t/T$ half-lives the fraction left is $(1/2)^{t/T}$. If the wood started with amount $A$ and now has $B$, solve $(1/2)^{t/T} = B/A$.' },
          { label: 'Step 2: Where the starting amount comes from', text: 'The carbon dioxide of the air always contains a certain small fraction of radioactive carbon-14, replenished by cosmic rays; a living thing therefore always contains that fraction of carbon-14 among its carbon. Measuring the total carbon content fixes the starting amount $A$.' },
          { label: 'Step 3: The reach of the method', text: 'Careful measurements can detect the remaining carbon-14 through about twenty half-lives — a factor $(1/2)^{20}$, about one part in a million. That sets the range of the method at roughly $20\\times 5000 = 100{,}000$ years for objects that grew that long ago.' },
          { label: 'Step 4: Older clocks', text: 'For still older things, isotopes with longer half-lives are used. Uranium has an isotope whose half-life is about $10^{9}$ years; when it disintegrates it becomes lead, and the two separate chemically in a forming rock. Comparing the uranium and lead fractions today — in rocks, and averaged over the oceans and the earth — gives the earth’s age as approximately 4.5 billion years.' },
        ],
        result: 'Carbon-14 dates organic remains back to about 100,000 years; the uranium–lead clock extends the scale to billions of years, fixing the earth at 4.5 billion — with the meteorites agreeing — and pointing to a universe ten to twelve billion years old.',
      },
      {
        title: 'The lifetime of the neutral pion',
        problem: 'No electronic oscillator is fast enough to time a particle that decays almost immediately after creation. How was the lifetime of the $\\pi^0$-meson measured?',
        steps: [
          { label: 'Step 1: Change the definition of time', text: 'Below $10^{-12}$ second, time is inferred from distance and speed — as with the headlights of a moving automobile: if we know where they were turned on and off and how fast the car moved, the time they were lit is the distance divided by the speed.' },
          { label: 'Step 2: The track', text: 'In a photographic emulsion in which $\\pi^0$-mesons had been created, one saw — through a microscope — minute tracks showing that each meson traveled on average about $10^{-7}$ meter before disintegrating.' },
          { label: 'Step 3: The speed', text: 'The mesons were known to be traveling at a certain speed nearly that of light — $3\\times 10^{8}$ meters per second.' },
          { label: 'Step 4: The lifetime', text: 'The time is the distance divided by the speed: $10^{-7}$ meter at nearly light speed gives a lifetime of about $10^{-16}$ second — a “time” obtained by a somewhat different definition, trusted so long as no inconsistency appears.' },
        ],
        result: 'The $\\pi^0$ lives about $10^{-16}$ second — measured not by counting oscillations but by geometry: distance traveled at a known speed.',
      },
      {
        title: 'The radius of a nucleus from a beam experiment',
        problem: 'How big is a nucleus, thousands of times too small to see with any microscope?',
        steps: [
          { label: 'Step 1: Shoot blind', text: 'Send a beam of high-energy particles through a thin slab of material. The particles plow right through the electron cloud and are stopped or deflected only if they hit the concentrated weight of a nucleus. The nucleus is too small to see, so we cannot aim at it — we must shoot blind and use probability.' },
          { label: 'Step 2: The covered area', text: 'With $N$ atoms spread over slab area $A$, each nucleus presenting a cross-sectional area $\\sigma$, the fraction of the picture covered by nuclear profiles is $N\\sigma/A$ — and this should equal the fraction of particles that do not get through, $(n_1 - n_2)/n_1$, where $n_1$ arrive and $n_2$ emerge.' },
          { label: 'Step 3: Solve for the size', text: 'Since nuclei are nearly spherical, $\\sigma = \\pi r^{2}$, so $\\pi r^{2} = (A/N)\\cdot(n_1 - n_2)/n_1$. The formula is right so long as the covered fraction is small — otherwise a correction is needed for nuclei partly hidden behind nuclei.' },
          { label: 'Step 4: The numbers', text: 'A piece of material one centimeter thick has about $10^{8}$ atomic layers, yet the nuclei are so small that there is little chance any nucleus lies behind another. The radii found this way are 1 to 6 fermi — $1$ to $6\\times 10^{-15}$ meter.' },
        ],
        result: 'Nuclear radii are 1–6 fermi, a hundred thousand times smaller than the atom: nearly all the weight of the atom in a bare speck at the center.',
      },
    ],
    keyTakeaways: [
      'Galileo’s pulse-timed ball gave $D \\propto t^{2}$ — quantitative observation is what makes physics physics.',
      'Time is defined operationally by periodic events, and every clock is trusted only as far as it agrees with other regularities.',
      'Short times come from chains of oscillators calibrated by counting (down to about $10^{-12}$ s), and below that from distance divided by speed — the $\\pi^0$ at $10^{-16}$ s.',
      'Radioactive dating is the law $(1/2)^{t/T} = B/A$: carbon-14 (5000-year half-life) reaches 100,000 years; uranium-to-lead fixes the earth at 4.5 billion years.',
      'The distance ladder runs triangulation, radar, stellar parallax, color–brightness, and galaxy-size comparison — from Sputnik’s $5\\times 10^{5}$ m to $10^{26}$ m at the edge of the observable universe.',
      'Short-distance measurement ends at the cross-section: attenuation of a beam gives $\\sigma = \\pi r^{2}$ and nuclear radii of 1–6 fermi.',
      'Nature forbids perfect measurement — $\\Delta x \\ge \\hbar/2\\Delta p$ and $\\Delta t \\ge \\hbar/2\\Delta E$ — and moving observers disagree about lengths and times alike.',
    ],
    quiz: [
      {
        q: 'Galileo rolled a ball down an inclined trough and marked its position at each pulse beat. The marks were at distances proportional to:',
        options: [
          '$1, 2, 3, 4$ — distance proportional to time',
          '$1, 4, 9, 16$ — distance proportional to the square of the time',
          '$1, 2, 4, 8$ — distance doubling each beat',
          '$1, 3, 6, 10$ — the triangular numbers',
        ],
        answer: 1,
        explanation: 'Marked at 1, 2, 3, 4 units of time from release, the distances from the start grow as $1, 4, 9, 16$: $D \\propto t^{2}$. The experiment was new not for measuring distance but for measuring how far in how long a time — with Galileo’s own pulse.',
      },
      {
        q: 'Why did counting hourglass turnings “from noon to noon” give the same number each day, when counting them morning-to-morning did not?',
        options: [
          'Because the hourglass sand flows faster in the afternoon',
          'Because noon is defined by the sun’s highest point, which removes the seasonal change in daylight length from the comparison',
          'Because the earth’s rotation is faster at noon',
          'Because morning counting was done with a different hourglass',
        ],
        answer: 1,
        explanation: 'Daylight stretches and shrinks with the seasons, so morning-to-morning counts vary; the noon-to-noon interval (noon = the instant the sun is highest) is regular. The lesson: one regularity fits another — that, not “absolute” periodicity, is what a time standard is.',
      },
      {
        q: 'Carbon-14 has a half-life of 5000 years, and about twenty half-lives can be measured. The reach of carbon dating is therefore about:',
        options: [
          '5,000 years',
          '20,000 years',
          '100,000 years',
          '4.5 billion years',
        ],
        answer: 2,
        explanation: 'Twenty half-lives at 5000 years each is $20\\times 5000 = 100{,}000$ years. Beyond that, isotopes with longer half-lives take over — uranium to lead, with a half-life near $10^{9}$ years, fixing the earth at about 4.5 billion years.',
      },
      {
        q: 'The distance from the earth to Venus was measured within recent years (as Feynman wrote) by an essentially new method:',
        options: [
          'triangulation with the earth’s orbit as baseline',
          'bouncing a radar signal off Venus and inferring the distance from the round-trip time and the wave speed',
          'comparing the color and brightness of Venus',
          'measuring the gravitational tug of Venus on the earth',
        ],
        answer: 1,
        explanation: 'The Jet Propulsion Laboratory measured the earth–Venus distance by direct radar: send the radio wave out, count the time until the reflected wave returns, and infer the distance, assuming the speed is the same everywhere in between — a new definition of inferred distance.',
      },
      {
        q: 'In the beam-attenuation method for nuclear sizes, the fraction of particles stopped, $(n_1 - n_2)/n_1$, equals:',
        options: [
          'the number of atomic layers in the slab',
          'the fraction of the slab’s area shadowed by nuclei, $N\\sigma/A$',
          'the density of the slab material',
          'the energy lost per collision',
        ],
        answer: 1,
        explanation: 'With $N$ nuclei spread over area $A$ each shadowing $\\sigma$, the covered fraction is $N\\sigma/A$ — and that is the probability of a hit. Setting it equal to the observed stopped fraction and using $\\sigma = \\pi r^{2}$ gives nuclear radii of 1–6 femti.',
      },
    ],
  },
]

// ============================================================================
// Chapter 1 formula sheet — the most useful relations and facts.
// `formula` is the Unicode fallback (search/export); `latex` is KaTeX.
// ============================================================================

export const physCh1Formulas: FormulaEntry[] = [
  {
    chapterId: 'phys-ch1',
    section: '1.1',
    name: 'Size of an atom',
    formula: 'r ≈ 1–2 Å = 10⁻⁸ cm',
    latex: 'r_{\\text{atom}} \\sim 1\\text{–}2\\ \\text{Å} = 10^{-8}\\ \\text{cm}',
    note: 'apple magnified to the earth: its atoms would be apple-sized',
  },
  {
    chapterId: 'phys-ch1',
    section: '1.1',
    name: 'The water molecule',
    formula: 'θ(HOH) = 105°30′, d(OH) = 0.957 Å',
    latex: '\\theta_{\\mathrm{HOH}} = 105^{\\circ}30^{\\prime},\\quad d_{\\mathrm{OH}} = 0.957\\ \\text{Å}',
    note: 'the one molecule whose geometry Feynman quotes exactly',
  },
  {
    chapterId: 'phys-ch1',
    section: '1.2',
    name: 'Visible light band',
    formula: 'f ≈ 5×10¹⁴ – 10¹⁵ Hz',
    latex: 'f \\approx 5\\times 10^{14}\\text{ to }10^{15}\\ \\text{Hz}',
    note: 'one spectrum, one number: only the frequency differs',
  },
  {
    chapterId: 'phys-ch1',
    section: '1.2',
    name: 'Atom versus nucleus',
    formula: 'atom ~10⁻⁸ cm; nucleus ~10⁻¹³ cm',
    latex: 'd_{\\text{atom}} \\sim 10^{-8}\\ \\text{cm},\\quad d_{\\text{nuc}} \\sim 10^{-13}\\ \\text{cm}',
    note: 'nearly all the weight sits in the speck — a factor 10⁵ of empty gap',
  },
  {
    chapterId: 'phys-ch1',
    section: '1.2',
    name: 'Meson mass unit',
    formula: '1 MeV = 1.783×10⁻²⁷ g',
    latex: '1\\ \\text{MeV} = 1.783\\times 10^{-27}\\ \\text{g}',
    note: 'the mass unit of the particle tables (historical in origin)',
  },
  {
    chapterId: 'phys-ch1',
    section: '1.4',
    name: 'Law of fall along an incline',
    formula: 'D ∝ t²',
    latex: 'D \\propto t^{2}',
    note: 'Galileo’s pulse-timed ball: marks at 1, 4, 9, 16',
  },
  {
    chapterId: 'phys-ch1',
    section: '1.4',
    name: 'Radioactive dating',
    formula: 'B/A = (½)ᵗ/ᵀ',
    latex: '\\frac{B}{A} = \\left(\\tfrac{1}{2}\\right)^{t/T}',
    note: 'half-life T: carbon-14 at 5000 yr, uranium near 10⁹ yr',
  },
  {
    chapterId: 'phys-ch1',
    section: '1.4',
    name: 'Nuclear radius from a beam',
    formula: 'σ = πr² = (A/N)·(n₁−n₂)/n₁',
    latex: '\\sigma = \\pi r^{2} = \\frac{A}{N}\\cdot\\frac{n_1 - n_2}{n_1}',
    note: 'stopped fraction = shadowed fraction; radii 1–6 fermi',
  },
]
