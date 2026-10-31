/**
 * Knowledge Universe — Astronomy & Space Science — Chapter 01: Astrophysics
 * 1 lesson · ~1,295 words
 * field: Astronomy & Space Science
 * legacy sources: physical-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Astrophysics]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 phys-astronomy-stellar-lifecycle — How Stars Are Born, Live and Die
 */
import type { KnowledgeTopic } from '../../types'

export const astronomyCh01: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'phys-astronomy-stellar-lifecycle',
    title: 'How Stars Are Born, Live and Die',
    domain: 'Physical Sciences',
    field: 'Astronomy & Space Science',
    branch: 'Astrophysics',
    tier: 'intermediate',
    concepts: [
      'Molecular clouds and protostars',
      'Hydrostatic equilibrium',
      'The main sequence',
      'Red giants and the dead end of iron',
      'White dwarfs and the Chandrasekhar limit',
      'Core collapse: neutron stars and black holes',
      'Stellar recycling',
    ],
    words: 1295,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Stars are not permanent ornaments; they are machines with fuel gauges, and a single number set at birth — mass — writes nearly the whole biography. Inside cold molecular clouds, gravity and pressure negotiate for hundreds of thousands of years until fusion ignites; then follows a long main-sequence adulthood, an inflated old age, and an ending that ranges from a slow fade as a white dwarf to a supernova brighter than a galaxy. Every heavy atom in your body was minted inside one of them.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The stardust claim is literal chemistry: the carbon in your cells and the iron in your blood were assembled in stellar interiors and scattered by dying stars. Stellar lifetimes also date the universe — the oldest clusters push thirteen billion years — and the hunt for exoplanets leans on stellar models to weigh, age, and place every world it finds.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Stars are born in the cold, dense pockets of giant molecular clouds, where temperatures near ten kelvin let gravity get a grip. A clump that gathers past a critical mass collapses under its own weight, spinning faster and flattening as it shrinks. The glowing heart of this collapse, a protostar, shines on gravitational contraction alone, still swaddled in dust, typically taking a few hundred thousand years to reach the temperature where fusion can begin.',
      },
      {
        kind: 'para',
        text: 'A settled star is a truce. Gravity pulls every layer inward; the pressure of hot gas and radiation pushes outward; and at each depth the two balance exactly — hydrostatic equilibrium. It is a dynamic, self-correcting truce: compress the core slightly and it heats and pushes back harder, like a thermostat. This self-regulation, more than any other single principle, dictates how a star responds as its fuel chemistry shifts deep inside.',
      },
      {
        kind: 'para',
        text: 'Ignition of hydrogen fusion opens the longest chapter: the main sequence, the stable, ten-billion-year adulthood of a Sun-like star, converting core hydrogen into helium. Mass sets the pace brutally — luminosity scales roughly as mass to the third-and-a-half power — so the brightest stars are also the most short-lived. A ten-solar-mass star burns through its fuel about three thousand times faster than the Sun and exits after tens of millions of years.',
      },
      {
        kind: 'para',
        text: 'When core hydrogen runs out, the core contracts while the envelope swells — the star becomes a red giant, hundreds of times wider, cooler at its surface, hotter at its center. Helium ignites, fusing to carbon and oxygen; in stars above roughly eight solar masses the ashes keep burning in onion-like shells until an iron core accumulates. Iron is fusion\u2019s dead end: every step beyond it absorbs energy rather than releasing any, so the pressure bill comes due.',
      },
      {
        kind: 'para',
        text: 'A Sun-like star sheds its outer layers as a shimmering planetary nebula and leaves its carbon-oxygen core bare — a white dwarf, an Earth-sized ember of degenerate matter that fuses nothing ever again. Electron pressure alone holds it up, and that support has a ceiling near 1.4 solar masses, the Chandrasekhar limit. A white dwarf pushed past the ceiling — by stealing mass from a companion — collapses and detonates as a Type Ia supernova of dependable brightness.',
      },
      {
        kind: 'para',
        text: 'A massive star\u2019s iron core, unable to pay its gravitational bill, collapses in under a second; the rebound and a burst of neutrinos blast the star apart as a core-collapse supernova, briefly rivaling a galaxy in light. The remnant depends on mass: a core below a few solar masses halts as a neutron star — city-sized, with a sugar cube of it outweighing a mountain range — while anything heavier collapses into a black hole, detectable by gravity\u2019s signature alone.',
      },
      {
        kind: 'para',
        text: 'Supernovae and the gentler winds of aging stars seed the galaxy with carbon, oxygen, silicon, and iron — planetary raw material. Neutron-star mergers, heard in gravitational waves since 2017, forge much of the gold and platinum. The next molecular cloud inherits the enrichment, so each stellar generation forms with more heavy ingredients than the last: the galaxy compounds its own chemistry, and planets are the dividend.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Mass–luminosity relation',
        latex: 'L \\propto M^{3.5}',
        meaning: 'On the main sequence, ten times the mass means roughly three thousand times the luminosity.',
      },
      {
        kind: 'formula',
        name: 'Main-sequence lifetime',
        latex: 't_{\\text{MS}} \\propto \\frac{M}{L} \\propto M^{-2.5}',
        meaning: 'Fuel over burn rate: a ten-solar-mass star lives about one three-hundredth of the Sun\u2019s ten billion years.',
      },
      {
        kind: 'formula',
        name: 'Chandrasekhar limit',
        latex: 'M_{\\text{Ch}} \\approx 1.4\\, M_{\\odot}',
        meaning: 'The maximum mass electron degeneracy can support in a white dwarf; beyond it lies collapse or detonation.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how long a ten-solar-mass main-sequence star shines, compared with the Sun\u2019s ten-billion-year career.',
          'Recall the governing idea: lifetime scales as fuel over burn rate, t ∝ M/L, and the main sequence sets L ∝ M^3.5.',
          'Apply: t ∝ 10 / 10^3.5 ≈ 1/316 of the solar span; multiplying by ten billion years gives about 3 × 10⁷ years — some thirty million.',
          'State the result: the heavyweight burns out in thirty million years, a cosmic blink, which is why the most massive stars are rare, young, and found only in star-forming regions — and why their ashes mark where new stars are being made.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'The carbon, oxygen, and iron in your body were fused in stellar interiors; supernova remnants are the delivery mechanism.',
          'Dating star clusters by where their brightest survivors leave the main sequence anchors cosmic chronology near 13.8 billion years.',
          'Type Ia supernovae, standardized by the Chandrasekhar limit, revealed the universe\u2019s accelerating expansion.',
          'Exoplanet science begins with the star: planet radii, ages, and habitable-zone bounds are all stellar-physics outputs.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The most common myth is that the Sun will explode — at one solar mass it is fated for a quiet white-dwarf retirement via red giant and planetary nebula. Burning misleads: stars fuse nuclei, they do not combust. And fate tracks birth mass, not age — a red giant is elderly but will never detonate unless it gains mass from a companion; the dramatic endings belong exclusively to the massive.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Protostar', def: 'A collapsing cloud fragment glowing from gravitational contraction, before fusion ignites.' },
          { term: 'Hydrostatic equilibrium', def: 'The exact balance of inward gravity and outward pressure that structures a star.' },
          { term: 'Main sequence', def: 'The long, stable hydrogen-burning phase of stellar life on the Hertzsprung–Russell diagram.' },
          { term: 'Red giant', def: 'A swollen late-stage star with a compact core and a vast, cool envelope.' },
          { term: 'Supernova', def: 'The explosive death of a massive star, forging and scattering heavy elements.' },
          { term: 'Neutron star', def: 'A city-sized remnant held up by neutron degeneracy pressure, denser than an atomic nucleus.' },
          { term: 'Chandrasekhar limit', def: 'The 1.4-solar-mass ceiling beyond which a white dwarf cannot hold itself up.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The single property that most determines a star\u2019s entire life story is its:',
            options: ['Surface color', 'Mass at birth', 'Distance from Earth', 'Apparent brightness'],
            answer: 1,
            explain: 'Mass sets luminosity, lifetime, and ending — the biography is written at birth.',
          },
          {
            q: 'The Sun will end its life as:',
            options: ['A supernova', 'A neutron star', 'A white dwarf, after a red-giant phase', 'A black hole'],
            answer: 2,
            explain: 'One solar mass is far too light for core collapse; it will shed its envelope and retire as a white dwarf.',
          },
          {
            q: 'A ten-solar-mass star, compared with the Sun:',
            options: ['Lives about 30 million years — roughly one three-hundredth as long', 'Lives ten times longer', 'Lives the same span', 'Never fuses hydrogen'],
            answer: 0,
            explain: 'With L ∝ M^3.5, its fuel is spent thousands of times faster than the Sun burns its own.',
          },
          {
            q: 'An iron core collapses because:',
            options: ['Fusing iron absorbs energy rather than releasing it, so pressure support vanishes', 'Iron blocks radiation', 'Iron converts to antimatter', 'The core spins too fast'],
            answer: 0,
            explain: 'Fusion beyond iron is endothermic — it drains the energy whose pressure was holding gravity back.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: gravity, energy conservation, and the nuclear binding-energy curve. Continue with nucleosynthesis in detail, the Hertzsprung–Russell diagram, and compact-object physics — or pivot to cosmology, where stellar clocks and standard candles anchor the timeline of the universe.',
        tone: 'path',
      },
    ],
  },
]
