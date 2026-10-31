/**
 * Knowledge Universe — Astronomy & Space Science — Chapter 03: Beyond the Milky Way
 * 1 lesson · ~1,245 words
 * field: Astronomy & Space Science
 * legacy sources: physical-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Beyond the Milky Way]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 astro-galaxies-milky-way — Galaxies: Island Universes
 */
import type { KnowledgeTopic } from '../../types'

export const astronomyCh03: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'astro-galaxies-milky-way',
    title: 'Galaxies: Island Universes',
    domain: 'Physical Sciences',
    field: 'Astronomy & Space Science',
    branch: 'Beyond the Milky Way',
    tier: 'intermediate',
    concepts: [
      'Mapping the Milky Way from inside',
      'Hubble tuning-fork galaxy types',
      'Flat rotation curves and dark matter',
      'Supermassive black holes and active nuclei',
      'Collisions and galactic mergers',
      'Groups, clusters and the cosmic web',
    ],
    words: 1245,
    readMins: 6,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Until the 1920s astronomers argued over whether the Milky Way was the entire universe or merely one of countless island universes. In 1924 Edwin Hubble settled it by finding Cepheid variable stars in the Andromeda Nebula, proving it lay far beyond our stars. Galaxies — gravitationally bound collections of stars, gas, dust and dark matter — turned out to be the universe\'s building blocks, numbering in the hundreds of billions. This intermediate lesson tours the Milky Way from inside, classifies galaxy types, and follows the orbital evidence that most of their mass is invisible.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Galaxies are where stars and planets happen on the grandest scale. Reading their structure, rotation and collisions is how astronomers weigh unseen matter and predict our galaxy\'s future — including its scheduled merger with Andromeda.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The Milky Way is a barred spiral roughly 100,000 light-years across holding a few hundred billion stars. Seen edge-on it shows a central bar and bulge of old red stars, a thin disk with gaseous spiral arms where new stars form, and a sparse halo of globular clusters. The Sun sits two-thirds of the way out, orbiting at about 220 kilometers per second and completing a lap — one galactic year — every 230 million years. At the exact center waits Sagittarius A*, a black hole of four million solar masses, pinned down by stars whipping around it — work honored with the 2020 Nobel Prize.',
      },
      {
        kind: 'para',
        text: 'Hubble sorted galaxy shapes into his tuning-fork diagram. On the handle sit ellipticals, labeled E0 (round) to E7 (elongated) — smooth swarms of old stars with little gas and almost no star formation. The tines hold ordinary and barred spirals, classed Sa to Sc as arms loosen; lenticulars sit at the junction. Irregulars like the Magellanic Clouds fall off the diagram, often gas-rich and bursting with starbirth. The fork classifies appearance, which tracks each galaxy\'s star-formation history — not its ancestry.',
      },
      {
        kind: 'para',
        text: 'If a galaxy\'s mass followed its light, orbital speeds should fall with distance the way planets slow down far from the Sun. In the 1970s Vera Rubin and Kent Ford measured hydrogen gas in dozens of spirals and found rotation curves stubbornly flat: speeds near 200 kilometers per second all the way out to the faintest visible edge. Gravity there requires far more mass than the starlight accounts for, and the mismatch keeps growing with radius. The conclusion — dark halos outweighing the visible stars several times — now holds for essentially every galaxy measured.',
      },
      {
        kind: 'para',
        text: 'Nearly every large galaxy\'s heart hosts a supermassive black hole, and its mass tracks the galactic bulge — the M-sigma relation — hinting that holes and galaxies grew together. Feed such a hole a stream of gas and friction lights it up as an active galactic nucleus; the most extreme cases, quasars, outshine their entire host galaxies from a region smaller than the solar system and can fire jets thousands of light-years long. Our own Sagittarius A* is currently quiet.',
      },
      {
        kind: 'para',
        text: 'Galaxies collide. Because stars are minuscule next to the spaces between them, individual stars almost never touch — but interstellar gas clouds do, crashing, collapsing and igniting starbursts while tides stretch out luminous bridges and tails, as in the ongoing Antennae merger. In about 4.5 billion years the Milky Way and Andromeda will braid into a single elliptical galaxy, the Sun likely surviving on a new orbit. Galaxies also gather: our Local Group of roughly 80 galaxies sits on the outskirts of the Laniakea Supercluster, one node in the cosmic web of filaments and voids.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Circular orbital speed',
        latex: 'v = \\sqrt{GM/r}',
        meaning: 'Speed expected at radius r around enclosed mass M — the Keplerian decline that flat rotation curves refuse to show, revealing extra invisible mass.',
      },
      {
        kind: 'formula',
        name: 'Mass from a rotation curve',
        latex: 'M = \\frac{r v^{2}}{G}',
        meaning: 'Mass enclosed within radius r, from orbital speed v — the working tool for weighing galaxies and their dark halos.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the mass of the Milky Way enclosed within the Sun\'s orbit, from the Sun\'s galactic speed and distance.',
          'Gather data: the Sun orbits at v = 220 km/s (2.2 × 10^5 m/s) at a radius of 8,000 parsecs, about 2.5 × 10^20 meters.',
          'Apply M = rv²/G: (2.5 × 10^20 × (2.2 × 10^5)²) / (6.67 × 10^-11) = (2.5 × 10^20 × 4.84 × 10^10) / 6.67 × 10^-11 ≈ 1.8 × 10^41 kg.',
          'Convert to stars: dividing by the Sun\'s mass of 2.0 × 10^30 kg gives about 9 × 10^10 — roughly 90 billion solar masses inside the Sun\'s orbit.',
          'Interpret: star counts fall well short of that, and the flat curve far beyond the Sun keeps adding mass — the fingerprint of a dark halo outweighing the visible stars several times.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Gaia\'s billion-star motion survey maps the Milky Way\'s spiral arms, stellar streams and past mergers',
          'Rotation curves and gravitational lensing turn galaxies into dark-matter detectors',
          'ALMA and JWST observe colliding galaxies and dusty starbursts to test assembly models',
          'Event Horizon Telescope images of M87* and Sagittarius A* probe how central black holes feed',
          'Galaxy redshift surveys chart the cosmic web',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The tuning fork is a classification, not a life story — galaxies do not age from spiral to elliptical, and mergers scramble types. Dark matter is not merely dim stars or dust — microlensing surveys and light-element budgets rule ordinary matter out. And the coming Milky Way-Andromeda merger will be gravitational drama, not a crash scene: expect rearranged orbits, not stellar collisions.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Galaxy', def: 'A gravitationally bound system of stars, gas, dust and dark matter, from dwarfs of millions of stars to giants of trillions.' },
          { term: 'Barred spiral', def: 'A spiral galaxy whose arms unwind from an elongated stellar bar; the Milky Way is one.' },
          { term: 'Rotation curve', def: 'A plot of orbital speed versus radius across a galaxy; flat curves are the classic dark-matter signature.' },
          { term: 'Dark matter halo', def: 'The extended, invisible mass envelope that dominates a galaxy\'s gravity.' },
          { term: 'Supermassive black hole', def: 'A black hole of millions to billions of solar masses anchoring a galactic center.' },
          { term: 'Active galactic nucleus', def: 'A central engine — a feeding supermassive black hole — outshining its galaxy in a tiny volume.' },
          { term: 'Cosmic web', def: 'The large-scale pattern of galaxy walls, filaments and voids spanning the universe.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Hubble ended the island-universes debate by:',
            options: ['Proving the Milky Way was unique', 'Counting stars with the naked eye', 'Finding Cepheid variables in Andromeda far beyond our galaxy', 'Detecting dark matter directly'],
            answer: 2,
            explain: 'Cepheids are standard candles; their faintness placed Andromeda far outside the Milky Way, making it a separate galaxy.',
          },
          {
            q: 'A flat rotation curve at large radius means:',
            options: ['Orbital speeds fall as 1/r, like planets', 'Enclosed mass keeps rising far beyond the starlight', 'The galaxy is losing its stars', 'The central black hole dominates everywhere'],
            answer: 1,
            explain: 'Constant v in M = rv²/G forces M to grow linearly with r, long after the visible disk fades — hence dark halos.',
          },
          {
            q: 'In Hubble\'s tuning fork, elliptical galaxies are distinguished by:',
            options: ['Tight spiral arms', 'Roundness, from E0 to E7, and old stars with little gas', 'Large radio jets', 'Blue color from young stars'],
            answer: 1,
            explain: 'Ellipticals are smooth, gas-poor swarms of old stars; the E-number grades their apparent flattening.',
          },
          {
            q: 'When the Milky Way merges with Andromeda, individual stars will:',
            options: ['Frequently collide head-on', 'All fall into the central black holes', 'Almost never collide — the spaces between them dwarf the stars', 'Burn up in intergalactic gas'],
            answer: 2,
            explain: 'Stellar diameters are tiny compared with their separations; mergers reshape orbits and ignite gas, not star-on-star crashes.',
          },
        ],
      },
    ],
  },
]
