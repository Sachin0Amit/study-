/**
 * Knowledge Universe — Nanotechnology — Chapter 02: Confinement & Controlled Growth
 * 2 lessons · ~3,207 words
 * field: Nanotechnology
 * legacy sources: x59-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Confinement & Controlled Growth]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 nano-confinement-brus — Quantum Confinement: Tuning Matter with Size
 *   02.2 nano-nucleation-growth-assembly — Nucleation, Growth and Self-Assembly
 */
import type { KnowledgeTopic } from '../../types'

export const nanotechnologyCh02: KnowledgeTopic[] = [
  {
    id: 'nano-confinement-brus',
    title: 'Quantum Confinement: Tuning Matter with Size',
    domain: 'Emerging & Interdisciplinary',
    field: 'Nanotechnology',
    branch: 'Confinement & Controlled Growth',
    tier: 'intermediate',
    concepts: [
      'the exciton and its Bohr radius',
      'the Brus equation: confinement versus Coulomb terms',
      'size-tuned band gaps in CdSe nanocrystals',
      'melting-point depression at the nanoscale',
      'localized surface plasmon resonance in metals',
      'surface atom fraction and under-coordination',
      'passivation and why surfaces trap carriers',
    ],
    words: 1559,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The first chapter of this book announced, in a single line, that quantum confinement "recolors matter". This chapter does the arithmetic behind that line — and the arithmetic is the whole point, because it is one of the few places in technology where a purely quantum-mechanical statement ("the wavefunction knows how big the box is") sets the price of a product. Shrink a semiconductor crystal below a critical size and its band gap widens on demand; shrink a metal cluster and its melting point collapses; shrink gold and it turns ruby-red without a trace of new chemistry. Size itself becomes the tuning knob, complementary to composition — the chemist\'s old question "which element?" gains a second axis: "how big?"',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Quantum dots won the 2023 Nobel Prize in Chemistry (Bawendi, Brus and Ekimov) for exactly the physics in this lesson, and they now emit the red and green pixels of premium displays, tag molecules in biology labs, and sharpen medical imaging. Understanding the Brus equation is understanding why a factory can dial a colour by dialling a temperature and a growth time.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Start with the exciton. Absorb a photon in a semiconductor and you promote an electron from the valence band to the conduction band, leaving a hole behind. The electron, negatively charged, is still Coulomb-attracted to the positive hole: the bound pair orbits its common centre like a tiny hydrogen atom — the exciton — with a characteristic size, the exciton Bohr radius, which is a material constant. For cadmium selenide it is about 5.6 nanometres. Now the defining question of this lesson: what happens when the CRYSTAL is smaller than the exciton? The pair cannot orbit at its natural radius; the wavefunction is squeezed against the crystal boundary. Squeezing a wavefunction raises its kinetic energy — the same particle-in-a-box logic that first-year physics teaches — and a wider electron-hole separation of energies is precisely a wider band gap.',
      },
      {
        kind: 'para',
        text: 'Louis Brus wrote the quantitative form at Bell Labs in 1984, and it remains the field\'s teaching equation. Two terms compete as the radius R shrinks. The confinement term grows as 1/R²: kinetic energy of squeezing, dominated by the reduced mass μ of the electron-hole pair. The Coulomb term grows as −1/R: the electron and hole, forced closer, attract each other more strongly, which LOWERS the energy. Because 1/R² eventually beats 1/R, confinement wins at small sizes — every nanometre you shave off adds gap faster. The crystal\'s dielectric screening (the ε in the denominator) weakens the Coulomb term in a good insulator, which is why semiconductor dots confine so dramatically.',
      },
      {
        kind: 'para',
        text: 'The consequences are visual and immediate. Bulk cadmium selenide has a band gap of 1.74 electron-volts: it absorbs the visible and glows in the near infrared. Draw the same compound into 2-nanometre spheres and the gap widens by more than an electron-volt, into the blue-green; grow them to 6 nanometres and the emission slides to red. One chemical composition, a rainbow of colours, sorted simply by size — the demonstration that made quantum dots famous, and the manufacturing spec that display makers buy: grow the dots a little longer for red pixels, a little shorter for green, and nothing about the chemistry changes.',
      },
      {
        kind: 'para',
        text: 'Confinement is the electronic story; thermodynamics writes a parallel one at the surface. A bulk crystal hides most of its atoms inside; a nanocrystal wears a large fraction of them on its surface, under-coordinated — fewer bonding neighbours than their lattice sites assume. Those surface atoms cost energy, and the crystal can shed some of it by melting: the smaller the particle, the lower the melting point. Predicted by Pawlow in 1909 and visible directly in electron microscopes since the 1960s, the effect is dramatic in gold: bulk melting at 1,064 °C falls by hundreds of degrees once particles drop below about 10 nanometres, and below roughly 1.5 nanometres gold clusters can melt near room temperature. High-resolution TEM studies of individual 2–20 nm gold particles confirm the melt begins at the surface and eats inward. The same under-coordination that lowers melting raises chemical reactivity — the reason nanoscale catalysts work, and, in the next lesson, the reason they do not last.',
      },
      {
        kind: 'para',
        text: 'Metals confine differently. Their conduction electrons are unbound, so there is no exciton to squeeze; instead, the electron sea can slosh collectively against the positive lattice — a plasmon. Confine the metal to a particle smaller than the light\'s wavelength and the sloshing becomes a resonance at a particular colour: the localized surface plasmon resonance. It is why medieval ruby glass and Faraday\'s 1857 gold colloids are red — the gold itself is unchanged, its electron sea simply resonating to blue-green light and letting red pass. Tune size and shape and the resonance tunes: nanorods shift it into the infrared. The applications chapter of this book builds diagnostics and photothermal therapy on exactly this resonance; the physics is here.',
      },
      {
        kind: 'para',
        text: 'One consequence of the surface story cuts against the fun: dangling bonds. A real nanocrystal\'s surface is littered with broken bonds that create trap states mid-gap — carriers fall in and emit nothing, or non-radiatively. The fix is passivation: organic ligands (next lesson\'s cast) chemically cap the surface, and better still a wider-gap shell of a second semiconductor is grown over the core, physically pushing the carriers away from the traps. A bare cadmium selenide dot luminesces feebly; a shell-passivated one can convert most absorbed photons into photons out. The lesson of the equation and the lesson of the surface meet here: size tunes the gap, and chemistry protects it.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'The Brus equation',
        latex: 'E_{g}(R) = E_{g,bulk} + \\frac{h^{2}}{8\\mu R^{2}} - \\frac{1.8\\,e^{2}}{4\\pi\\varepsilon_{0}\\varepsilon_{r} R}',
        meaning: 'Band gap of a spherical nanocrystal of radius R: bulk gap, plus particle-in-a-box confinement (1/R², reduced mass μ), minus the screened electron-hole Coulomb attraction (1/R).',
      },
      {
        kind: 'formula',
        name: 'Melting-point depression (Gibbs–Thomson form)',
        latex: '\\Delta T_{m} \\propto -\\frac{\\gamma_{sl}}{\\rho\\, L\\, R}',
        meaning: 'The melting point falls in proportion to the surface-energy cost divided by particle radius — surface atoms melt first.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the band gap of a 2.5 nm-radius (R = 2.5 × 10⁻⁹ m) CdSe quantum dot, using the Brus equation.',
          'Constants: bulk gap 1.74 eV; reduced mass μ ≈ 0.1 mₑ; dielectric constant εr ≈ 9.5; the combination e²/(4πε₀) = 1.44 eV·nm.',
          'Confinement term: h²/8μR² = (6.63 × 10⁻³⁴)² / [8 × (0.1 × 9.11 × 10⁻³¹) × (2.5 × 10⁻⁹)²] ≈ 9.6 × 10⁻²⁰ J ≈ 0.60 eV.',
          'Coulomb term: 1.8 × 1.44 eV·nm / (9.5 × 2.5 nm) ≈ 0.11 eV.',
          'Add up: E_g ≈ 1.74 + 0.60 − 0.11 ≈ 2.2 eV — green light near 560 nm, versus the bulk material\'s near-infrared 1.74 eV. The same crystal, one size smaller, glows visibly bluer: the tunable rainbow in one line of algebra.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'QLED display pixels: size-selected dots emitting narrow, saturated red and green',
          'Fluorescent biological labels outshining organic dyes by brightness and photostability',
          'Single-photon sources for quantum communication, seeded by confinement-engineered emission',
          'Photocatalysts and quantum-dot solar films where the gap is tuned to the spectrum',
          'Thermochromic and anti-counterfeiting inks whose colour is a size certificate',
          'Catalyst design guided by melting-point depression: sintering limits set by size',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Quantum dots are not "just small particles" — chemically identical bulk and nanoscale samples differ only through confinement and surface effects, which is the entire point. Do not confuse plasmon resonance (collective electron oscillation, metals) with exciton confinement (bound electron-hole pairs, semiconductors): different physics, different materials. And never forget the traps: an unpassivated surface converts your carefully tuned gap into heat.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Exciton', def: 'The bound electron-hole pair formed by light absorption; its Bohr radius sets the confinement threshold.' },
          { term: 'Exciton Bohr radius', def: 'Natural exciton size in a bulk crystal — about 5.6 nm in CdSe.' },
          { term: 'Brus equation', def: 'The effective-mass formula for a nanocrystal band gap: bulk gap plus confinement minus Coulomb terms.' },
          { term: 'Melting-point depression', def: 'The fall of melting temperature with particle size, driven by under-coordinated surface atoms (Pawlow, 1909).' },
          { term: 'Localized surface plasmon resonance', def: 'Collective oscillation of a metal nanoparticle\'s electron sea at a size- and shape-tuned optical frequency.' },
          { term: 'Passivation', def: 'Capping surface dangling bonds with ligands or a wider-gap shell to prevent carrier trapping.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In the Brus equation, the term that grows fastest as the dot shrinks is:',
            options: [
              'the Coulomb attraction (1/R)',
              'the kinetic confinement term (1/R²)',
              'the bulk band gap',
              'the dielectric screening',
            ],
            answer: 1,
            explain: 'The particle-in-a-box term scales as 1/R² and dominates at small radii — the reason smaller dots have wider gaps and bluer emission.',
          },
          {
            q: 'A 2 nm CdSe dot glows blue-green while a 6 nm dot glows red because:',
            options: [
              'the larger dot contains different elements',
              'the smaller dot\'s band gap is widened by quantum confinement',
              'the larger dot is hotter',
              'light scatters differently off big particles',
            ],
            answer: 1,
            explain: 'Same chemistry; the confinement energy raises the gap as size falls, shifting emission across the visible.',
          },
          {
            q: 'Gold nanoparticles melt far below 1,064 °C because:',
            options: [
              'quantum confinement widens the gap',
              'a large fraction of atoms sit on under-coordinated surfaces that cost less to mobilize',
              'gold becomes magnetic',
              'the electron sea boils off',
            ],
            answer: 1,
            explain: 'Surface energy drives melting-point depression — predicted by Pawlow in 1909 and seen surface-first in modern TEM studies.',
          },
          {
            q: 'The ruby colour of a gold colloid arises from:',
            options: [
              'quantum confinement of excitons',
              'localized surface plasmon resonance of the electron sea',
              'iron impurities',
              'Rayleigh scattering by dust',
            ],
            answer: 1,
            explain: 'Metal nanoparticles support a collective electron resonance that absorbs blue-green light and transmits red — the same physics behind SERS and photothermal therapy.',
          },
        ],
      },
    ],
  },
  {
    id: 'nano-nucleation-growth-assembly',
    title: 'Nucleation, Growth and Self-Assembly',
    domain: 'Emerging & Interdisciplinary',
    field: 'Nanotechnology',
    branch: 'Confinement & Controlled Growth',
    tier: 'intermediate',
    concepts: [
      'supersaturation and the nucleation barrier',
      'the LaMer model: burst nucleation, then growth',
      'hot-injection synthesis with TOP/TOPO ligands',
      'Ostwald ripening and size focusing',
      'ligands: caps, surfactants and passivation in one',
      'core-shell architectures',
      'DNA origami and block-copolymer self-assembly',
      'the lotus effect and gecko adhesion',
    ],
    words: 1648,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The making-and-seeing chapter of this book mapped the toolbox: top-down lithography, bottom-up chemistry, and the microscopes that check the results. This lesson is the recipe book the toolbox presupposes — how a chemist actually persuades matter to build nanocrystals of a chosen size, narrowly enough distributed that a display factory will buy them. The unifying idea is control of a competition: atoms want to aggregate (surface energy says so), but the path they take from dissolved ions to finished crystal passes through bottlenecks, and whoever controls the bottlenecks controls the size. Every technique in the modern nanoparticle catalogue is a way of gating nucleation and growth.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The previous lesson showed that size IS the product: a nanometre of mean diameter shifts colour, catalytic activity and melting point. Manufacturing monodisperse particles — spreads of a few per cent — is what turned quantum confinement from a physics curiosity into pixels, inks and medical agents. The economics of the whole field rest on the chemistry here.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Begin at the bottleneck: nucleation. Tiny clusters are almost all surface, and surface costs energy, so a embryo of a few atoms is thermodynamically uphill — it must be fed by supersaturation, a monomer concentration far above equilibrium. Classical nucleation theory balances the bulk energy gained against the surface energy paid, giving a critical radius below which clusters redissolve and above which they grow. Raising supersaturation lowers the barrier — gently at first, then all at once. The practical consequence, formalized by LaMer in 1950 for sulfur sols, is the strategy every colloidal synthesis follows: raise monomer concentration fast to a value where the barrier collapses, let a BURST of nuclei form, and let the burst itself drain monomer back below the nucleation threshold — no new nuclei, only growth on the existing ones. One burst, one size class: that is how a distribution narrows without a sieve.',
      },
      {
        kind: 'para',
        text: 'The benchmark implementation is hot-injection, the 1993 method of Murray, Norris and Bawendi at MIT that made monodisperse cadmium selenide routine. Precursor solutions (cadmium and selenium species in the coordinating solvent trioctylphosphine) are injected at room temperature into a vigorously stirred flask of hot trioctylphosphine oxide near 300 °C. The temperature shock drives the precursor reaction to supersaturation in milliseconds — the burst — and then growth proceeds on the existing seeds at a pace set by temperature and time. Quench when the target size is reached (the previous lesson\'s colour chart is literally the flask\'s progress bar). The 2023 Nobel recognition of this chemistry is also an economics lesson: a synthetic trick from a single lab became the manufacturing standard for display-grade material.',
      },
      {
        kind: 'para',
        text: 'Growth, once seeded, has its own physics. The solubility of a particle depends on its curvature — small, sharply curved particles dissolve more readily than large flat ones (the Gibbs–Thomson relation the confinement lesson used for melting applies here to solubility). Left alone, a polydisperse batch therefore drifts: the small dissolve and feed the large, the mean grows and the spread narrows in relative terms. This is Ostwald ripening, and it is both tool and enemy: useful for annealing a distribution, ruinous for catalysts, whose finely divided active phase slowly coarsens in service. Chemists exploit and then arrest it — stop the growth at the target moment, then freeze the population in place.',
      },
      {
        kind: 'para',
        text: 'The freezing is done by ligands, and the ligand deserves its own paragraph because it does three jobs at once. It CAPS the crystal, binding surface atoms and setting the growth rate facet by facet — shape control (rods, platelets, cubes) is ligand chemistry. It SUSPENDS the crystal, an organic brush providing steric repulsion so particles do not weld together in the flask or the ink. And it PASSIVATES, satisfying dangling bonds so the surface traps of the previous lesson empty out and luminescence survives. Grow a wider-gap shell over the core — cadmium selenide inside zinc sulfide, say — and passivation becomes geometric: carriers are fenced away from the surface entirely, and quantum yields climb past the display threshold. Ligand exchange afterwards swaps the brush for water-loving or conductive variants, moving dots between solvents and devices.',
      },
      {
        kind: 'para',
        text: 'A final polish closes the distribution: size-selective precipitation. Add a poor solvent to the dispersion; the largest particles (least ligand coverage per atom, weakest suspension) aggregate first and are spun down; redissolve and repeat. A few cycles sharpen a batch from ±10% to a few per cent — enough for the Brus colour to hold across the batch. It is centrifugation doing what distillation does for liquids, and it was the everyday workhorse of the pre-display era.',
      },
      {
        kind: 'para',
        text: 'Beyond single particles lies self-assembly: building ORDER from pre-made parts using forces no lithograph can match for parallelism. DNA origami, Rothemund\'s 2006 demonstration, folds a long single strand with hundreds of short "staple" strands into a designed two- or three-dimensional shape a hundred nanometres across — programmable matter in the literal sense, now the breadboard of nanophotonics and drug-delivery research. Block copolymers phase-separate into periodic 10–50 nm domains; annealed films of them template dense patterns beyond lithography\'s comfortable range (directed self-assembly in chip fabs). Colloidal crystals assemble spheres into opal lattices whose collective optical properties differ from any single particle\'s. The forces are old acquaintances — van der Waals attraction, electrostatic repulsion, capillary action at drying fronts, depletion forces from polymers — but the design language is new: encode the structure in the parts, then let thermodynamics do the assembly.',
      },
      {
        kind: 'para',
        text: 'Biology, as usual, ran the pilot programme. The lotus leaf stays clean because micrometre papillae dressed in wax crystals hold water on a cushion of air: droplets roll and collect dust — superhydrophobic self-cleaning, measured by Barthlott and Neinhuis in 1997 and now a coatings industry. The gecko climbs glass on millions of keratin setae whose contact areas add up to useful adhesion through nothing more than van der Waals forces — Autumn and colleagues pinned the mechanism in 2000, and dry-adhesive tapes followed. Both are lessons in the third leg of nanoscale engineering: not confining electrons (chapter\'s first lesson) nor growing crystals (this lesson\'s start) but sculpting SURFACES whose texture, at the right length scales, rewrites wetting and adhesion.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Gibbs–Thomson (Kelvin) solubility',
        latex: '\\ln\\frac{c(r)}{c_{\\infty}} = \\frac{2\\gamma V_{m}}{RT\\,r}',
        meaning: 'Smaller, more curved particles are more soluble — the thermodynamic engine of Ostwald ripening and of size focusing.',
      },
      {
        kind: 'formula',
        name: 'Critical nucleation radius',
        latex: 'r^{*} = \\frac{2\\gamma V_{m}}{RT \\ln S}',
        meaning: 'Supersaturation S sets the barrier: embryos smaller than r* redissolve; bursts occur when S drives r* down to molecular dimensions.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how much more soluble a 2 nm particle is than a 5 nm particle of the same solid (γ = 1 J/m², molar volume Vm = 3 × 10⁻⁵ m³/mol) at 300 °C.',
          'Apply the Gibbs–Thomson ratio: ln(c₂/c₅) = (2γVm/RT)(1/r₂ − 1/r₅).',
          'Compute the prefactor: 2 × 1 × 3 × 10⁻⁵ / (8.31 × 573) ≈ 1.26 × 10⁻⁸ m.',
          'Compute the bracket: 1/(2 × 10⁻⁹) − 1/(5 × 10⁻⁹) = 3 × 10⁸ m⁻¹. Product: ln(c₂/c₅) ≈ 3.8, so c₂/c₅ ≈ 45.',
          'Interpret: during ripening the 2 nm particles carry nearly fifty times the dissolved feedstock of their 5 nm neighbours — the small dissolve, the large grow, and the distribution marches upward until the ligand quench stops it.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Display-grade quantum-dot production: hot-injection or thermal-growth lines with ±5% size control',
          'Catalyst longevity engineering: ripening rates set operating temperatures and support choices',
          'Directed self-assembly patterning as a complement to EUV lithography in chip fabrication',
          'DNA-origami breadboards for single-molecule biophysics and nanophotonic antennas',
          'Superhydrophobic coatings for textiles, glass and anti-icing surfaces modelled on the lotus leaf',
          'Drug-delivery formulation where ligand choice decides circulation time and uptake',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not confuse aggregation (particles sticking — a colloid problem) with Ostwald ripening (atoms transferring — a thermodynamic one); the fixes differ. Do not assume smaller is always better: unpassivated small particles trap carriers and sinter fast. And beware scaling hot-injection naively to production volumes — injection heat transfer and mixing decide the burst, and a poorly mixed tonne-scale flask makes a polydisperse mess.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Supersaturation', def: 'Monomer concentration above equilibrium — the driving force that pays for new surface during nucleation.' },
          { term: 'LaMer model', def: 'Burst nucleation followed by growth on existing seeds: the size-narrowing strategy of all monodisperse syntheses.' },
          { term: 'Hot-injection', def: 'Rapid injection of cold precursors into hot coordinating solvent, spiking supersaturation for a synchronized nucleation burst (Murray–Norris–Bawendi, 1993).' },
          { term: 'Ostwald ripening', def: 'Growth of larger particles at the expense of smaller, driven by curvature-dependent solubility.' },
          { term: 'Ligand', def: 'Surface-binding molecule doing triple duty: growth capping, steric suspension and electronic passivation.' },
          { term: 'Core-shell structure', def: 'A wider-gap semiconductor shell grown over a nanocrystal core to fence carriers away from surface traps.' },
          { term: 'DNA origami', def: 'Programmable folding of a long DNA strand by staple strands into designed nanostructures (Rothemund, 2006).' },
          { term: 'Superhydrophobic', def: 'Water-repelling surface texture with contact angles above 150° — the lotus effect.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The LaMer strategy narrows size distribution by:',
            options: [
              'filtering out large particles',
              'one synchronized burst of nuclei, after which monomer drops below the nucleation threshold and only growth proceeds',
              'growing crystals slowly at equilibrium',
              'adding more precursor continuously',
            ],
            answer: 1,
            explain: 'Separating nucleation in TIME from growth gives one size class; continuous nucleation would spread it.',
          },
          {
            q: 'Ostwald ripening occurs because:',
            options: [
              'large particles are magnetic',
              'smaller, more curved particles are more soluble and dissolve to feed larger ones',
              'ligands detach at high temperature',
              'solvent evaporates',
            ],
            answer: 1,
            explain: 'The Gibbs–Thomson relation makes solubility increase with curvature — the small feed the large until arrested.',
          },
          {
            q: 'In core-shell nanocrystals the shell\'s job is to:',
            options: [
              'make the dot larger for redder colour',
              'fence carriers away from surface trap states, raising luminescence yield',
              'add magnetism',
              'reduce cost',
            ],
            answer: 1,
            explain: 'A wider-gap shell passivates geometrically — the main reason display dots shine brightly.',
          },
          {
            q: 'The gecko sticks to glass by:',
            options: [
              'suction cups',
              'millions of setae whose summed van der Waals contacts provide large dry adhesion',
              'electrostatic charging',
              'glue glands',
            ],
            answer: 1,
            explain: 'Autumn et al. (2000) measured the adhesion as van der Waals-dominated — texture, not secretion, does the work.',
          },
        ],
      },
    ],
  },
]
