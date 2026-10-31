/**
 * Knowledge Universe — Nanotechnology — Chapter 01: The Small Frontier
 * 1 lesson · ~1,177 words
 * field: Nanotechnology
 * legacy sources: emerging-interdisciplinary.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [The Small Frontier]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 emer-nanotechnology-scale — Nanotechnology: Engineering at the Scale of Atoms
 */
import type { KnowledgeTopic } from '../../types'

export const nanotechnologyCh01: KnowledgeTopic[] = [
  {
    id: "emer-nanotechnology-scale",
    title: "Nanotechnology: Engineering at the Scale of Atoms",
    domain: "Emerging & Interdisciplinary",
    field: "Nanotechnology",
    branch: "The Small Frontier",
    tier: "intermediate",
    concepts: [
      "surface-to-volume explosion",
      "quantum confinement and quantum dots",
      "graphene and carbon nanotubes",
      "nanoparticles in medicine and sunscreen",
      "FinFETs and EUV lithography",
      "nanotoxicity and regulation",
    ],
    words: 1177,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "In 1959 Richard Feynman gave a lecture titled There's Plenty of Room at the Bottom, imagining machines building smaller machines until engineering reached the scale of atoms themselves. Sixty years on, that bottom is an industry: transistors with features measured in nanometres, cancer drugs sized to slip through tissues, sunscreens, coatings and battery electrodes all engineered between 1 and 100 nanometres. At that scale materials stop behaving like their bulk selves — and that discontinuity, not smallness for its own sake, is what nanotechnology is about.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "A nanometre is to a metre what a small marble is to the Earth. At that scale most of a material's atoms sit at the surface, and surface atoms are chemically hungry. Shrink a substance and you do not merely get less of it — you get a different material.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The master equation of the nanoscale is surface-to-volume ratio. Cut a cube in half and you expose two new faces: same volume, more surface. Keep cutting and the fraction of atoms living at the surface climbs steeply — a 5-nanometre gold particle keeps roughly half its atoms on the surface. Since catalysis, dissolution, melting and reactivity are all surface phenomena, a material divided into nanoscale pieces can be vastly more reactive than the same mass in bulk. Same chemistry, different geometry.",
      },
      {
        kind: "para",
        text: "Below a few nanometres, quantum mechanics visibly takes over. Electrons confined in a box the size of their own wavelength behave like standing waves, and shrinking the box raises their allowed energies. The result is quantum confinement: a cadmium selenide nanocrystal glows a color set not by its composition but by its size — small dots blue, larger dots red — the operating principle of quantum-dot displays. Bulk gold, famously yellow, turns wine-red in colloid because surface electrons oscillate differently around tiny particles.",
      },
      {
        kind: "para",
        text: "Carbon builds the strongest nanostructures. A carbon nanotube is a graphene sheet — one atom thick, a hexagonal chickenwire of carbon — rolled into a cylinder; graphene itself was first isolated in 2004 by Andre Geim and Konstantin Novoselov using ordinary sticky tape. Both carry extraordinary tensile strength and electrical conductivity, promised for lighter composites, transparent electrodes and better batteries. The honest caveats are cost, defect control and the difficulty of translating fiber properties into bulk materials — a gap of decades, slowly closing.",
      },
      {
        kind: "para",
        text: "Applications already in your cupboard are quieter but real. Titanium dioxide and zinc oxide nanoparticles coat skin in sunscreen, scattering ultraviolet while remaining small enough to look clear rather than white. In medicine the payload story is lipid nanoparticles — the fatty shells that carried mRNA vaccines into cells during the pandemic are nanoscale delivery vehicles, engineered to protect their cargo, evade the immune system and fuse with cell membranes. Targeting drugs by size and surface chemistry remains the field's central bet.",
      },
      {
        kind: "para",
        text: "Moore's law dragged the semiconductor industry into nanotechnology whether it wanted to go or not. Transistor gate lengths passed below 20 nanometres in the 2000s, where thin channels leak current and short-channel effects bite; the industry's answer was FinFET geometry — wrapping the gate around a raised fin of silicon — and now gate-all-around designs. The lithography that prints these patterns uses 13.5-nanometre extreme ultraviolet light, the most precise manufacturing in human history.",
      },
      {
        kind: "para",
        text: "Small size cuts both ways: what enters cells and crosses barriers can also be toxic. Some long, rigid carbon nanotubes behave like asbestos fibers in the lung, and the surface reactivity that makes nanoparticles potent catalysts can make them biologically aggressive. Regulators have responded narrowly — the European Union requires nano labeling on cosmetics and treats nanomaterials as potentially new substances — but exposure science and standardized measurement still lag the products already on shelves.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Surface-to-volume of a sphere",
        latex: "\\frac{S}{V} = \\frac{3}{r}",
        meaning: "A sphere's surface-to-volume ratio scales as one over the radius — halve the size, double the ratio.",
      },
      {
        kind: "formula",
        name: "Total area of a mass in nanospheres",
        latex: "A = \\frac{6m}{\\rho d}",
        meaning: "Mass m divided into spheres of diameter d and density rho presents total area inversely proportional to d: shrink particles tenfold and area grows tenfold.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: the total surface area of 1 gram of gold divided into 5-nanometre spheres, compared with the same gram as a single lump. Gold's density is 19.3 grams per cubic centimetre.",
          "Recall: A = 6m/(ρd); for the single lump, take the cube root of the volume to find the edge of an equivalent cube.",
          "Apply: d = 5 nm = 5 x 10⁻⁷ cm, so A = 6/(19.3 x 5 x 10⁻⁷) ≈ 622,000 cm² ≈ 62 m². As one cube the gram occupies 1/19.3 ≈ 0.052 cm³, edge ≈ 0.37 cm, area ≈ 0.83 cm².",
          "State the result: dividing a single gram into 5-nm spheres multiplies surface area by roughly 750,000 — from under a fingernail to a classroom floor. This is why nanoparticle gold catalyzes reactions the bulk metal ignores.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Quantum-dot displays sizing their color by nanocrystal diameter",
          "Supported gold nanoparticle catalysts running chemistry the bulk metal refuses",
          "Lipid nanoparticles delivering mRNA vaccines and gene therapies",
          "Nanostructured battery electrodes wrapping active material in thin conductive coats",
          "Graphene and nanotube composites lightening sports gear and conductive films",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Nano is a scale, not a technology — a sunscreen and a quantum computer share little beyond the word, and marketing exploits the gap. Toxicity does not scale down with size: fiber-like nanotubes demand asbestos-grade caution. And the gray-goo scenario of self-replicating nanobots remains science fiction — the real challenges are chemistry, manufacturing yield and safety, not robots.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Nanometre", def: "One billionth of a metre — the scale of molecules and transistor gates." },
          { term: "Surface-to-volume ratio", def: "Surface area per unit volume, rising steeply as objects shrink." },
          { term: "Quantum confinement", def: "Energy levels shifting with nanocrystal size, tuning optical properties." },
          { term: "Quantum dot", def: "Semiconductor nanocrystal whose glow color is set by its diameter." },
          { term: "Graphene", def: "A single-atom sheet of carbon in a hexagonal lattice." },
          { term: "Carbon nanotube", def: "Graphene rolled into a cylinder, with exceptional strength and conductivity." },
          { term: "Lipid nanoparticle", def: "Fatty nanoscale shell delivering cargo such as mRNA into cells." },
        ],
      },
      {
        kind: "quiz",
        items: [
          {
            q: "Shrinking a material makes it more chemically reactive because:",
            options: [
              "it gets hotter",
              "a growing fraction of its atoms sit at the surface, where reactions happen",
              "gravity acts more strongly",
              "it becomes radioactive",
            ],
            answer: 1,
            explain: "Reactions occur at surfaces; nanoscale geometry puts a large share of atoms on the outside.",
          },
          {
            q: "A quantum dot emits different colors depending on:",
            options: [
              "its composition only",
              "its size — smaller dots glow bluer",
              "the voltage applied to it",
              "the surrounding magnetic field",
            ],
            answer: 1,
            explain: "Quantum confinement raises electron energies as the crystal shrinks, shifting the emitted wavelength.",
          },
          {
            q: "One gram of gold divided into 5-nanometre spheres has roughly how much surface area?",
            options: ["0.8 cm²", "62 cm²", "62 m²", "6,200 m²"],
            answer: 2,
            explain: "A = 6m/(ρd) gives about 622,000 cm² — some 62 square metres, against under one square centimetre as a lump.",
          },
          {
            q: "Graphene was first isolated by:",
            options: [
              "growing it atom by atom in a furnace",
              "peeling layers from graphite with adhesive tape",
              "unrolling carbon nanotubes",
              "chemical vapor deposition on copper",
            ],
            answer: 1,
            explain: "Geim and Novoselov's 2004 Scotch-tape exfoliation of graphite won the 2010 Nobel Prize.",
          },
        ],
      },
    ],
  },
]
