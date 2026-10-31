/**
 * Knowledge Universe — Structural & Seismic Engineering — Chapter 03: Seismic Design
 * 1 lesson · ~1,298 words
 * field: Civil & Structural Engineering
 * legacy sources: engineering.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Seismic Design]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 eng-earthquake-engineering-design — Earthquake Engineering: Designing for Shaking Ground
 */
import type { KnowledgeTopic } from '../../types'

export const structuralSeismicEngineeringCh03: KnowledgeTopic[] = [
  {
    id: "eng-earthquake-engineering-design",
    title: "Earthquake Engineering: Designing for Shaking Ground",
    domain: "Engineering",
    field: "Civil & Structural Engineering",
    branch: "Seismic Design",
    tier: "intermediate",
    concepts: [
      "ground motion and the response spectrum",
      "inertia forces and seismic mass",
      "ductility through detailing",
      "capacity design: strong column, weak beam",
      "base isolation and dampers",
      "code philosophy: life safety, not invincibility",
    ],
    words: 1298,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Earthquakes do not kill people — buildings do. The shaking is survivable in the open; the fatalities come from structures that cannot take the motion. The proof is statistical: Japan's and Chile's magnitude-9 megathrusts killed hundreds; poorer-prepared regions have lost hundreds of thousands from comparable shaking. This lesson covers how engineers design for ground that moves: what a building feels during an earthquake, why ductility beats brute strength, the capacity-design philosophy, base isolation and damping, and the code bargain that aims at life safety rather than invincibility. The geology of faults has its own lesson; the statics of bridges another.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Seismic design is one of engineering's clearest cost-benefit stories: detailing decisions worth a few percent of construction cost decide whether an earthquake is a scare or a catastrophe.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "A structure never feels the fault — it feels its site. Rupture radiates seismic waves, and the soil between fault and foundation filters them: soft sediments can amplify bedrock motion several-fold. Engineers summarize this with the response spectrum: shake idealized oscillators of every period with a recorded motion and plot each one's peak response — it shows which periods get hit hardest. Every building has a natural period of roughly 0.1 seconds per storey. Resonance is the killer. In Mexico City in 1985, lakebed sediments amplified shaking from an earthquake 350 kilometres away, and mid-rises whose periods matched the soil's were destroyed while taller and shorter neighbours stood.",
      },
      {
        kind: "para",
        text: "The earthquake loads a building through inertia. The ground shifts suddenly beneath a structure that wants to stay put, so the building feels horizontal forces proportional to its mass and the site's spectral acceleration — force equals mass times that acceleration. That single insight drives seismic design's instincts: build light, avoid irregular forms, and treat heavy upper storeys as liabilities.",
      },
      {
        kind: "para",
        text: "Brute strength is the wrong goal. A strong but brittle structure fails suddenly; a structure designed to yield in chosen places dissipates the earthquake's energy through the work of bending — ductility. Reinforced concrete achieves it through detailing: closely spaced transverse bars confine the core so it deforms without crumbling, and reinforcement is anchored so joints hold. The governing philosophy is capacity design: decide in advance which members yield — usually the beams — and make everything around them strong enough to outlast it. Strong column, weak beam is the classic rule, because a beam hinging is a damaged building while a column hinging is a pancaked one. The fuse in an electrical panel does the same job: sacrifice a cheap part to save the system.",
      },
      {
        kind: "para",
        text: "Two technologies change the game outright. Base isolation sets the whole building on flexible lead-rubber bearings that shift its natural period away from the shaking's energetic range, cutting transmitted accelerations several-fold while the lead core dissipates energy. Where isolation is impractical, dampers do the work: viscous fluid dampers act like shock absorbers between floors, buckling-restrained braces yield in tension and compression, and tuned mass dampers — think of Taipei 101's 660-tonne golden sphere, installed mainly against wind — swing against the motion.",
      },
      {
        kind: "para",
        text: "Modern codes strike a two-level bargain. For moderate, frequent shaking the building should remain usable. For the rare maximum event, the target drops to collapse prevention: damage is expected, but the occupants walk out. Design forces are deliberately reduced below elastic demand by a response-modification factor that credits ductility, so a well-detailed frame may legally be designed for a fraction of the true inertial load — the earthquake spends its energy deforming the designed fuses instead. History is written into the rules: California banned unreinforced masonry schools after 1933 and targeted soft-storey apartments after 1994.",
      },
      {
        kind: "para",
        text: "The last lessons are unglamorous. Nonstructural elements — ceilings, partitions, cladding, equipment — cause half the injuries and most of the cost, and anchoring them is cheap. Soft storeys, the open ground floors of shops and garages, remain the classic collapse mode, and San Francisco is retrofitting them by the thousand. Retrofit itself is a spectrum, from bolting a house sill to its foundation to jacketing columns in steel. Performance-based design extends the logic: a hospital simply pays for a higher target than the code minimum.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Natural period of a structure",
        latex: "T = 2\\pi\\sqrt{\\frac{m}{k}}",
        meaning: "A stiffer or lighter structure oscillates faster; each storey adds roughly 0.1 seconds.",
      },
      {
        kind: "formula",
        name: "Code base shear",
        latex: "V = \\frac{S_a}{R}\\,W",
        meaning: "Design lateral force: spectral acceleration times seismic weight, divided by the response-modification factor that credits ductile detailing.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: the design base shear for a 10-storey building with seismic weight 60,000 kN on a site whose spectral acceleration at its 1-second period is 0.4 g, using a ductile moment frame with R = 8.",
          "Recall: the period is about 0.1 s per storey, so T = 1.0 s matches the spectrum; V = (Sa/R) x W.",
          "Apply: V = (0.4/8) x 60,000 = 3,000 kN — five percent of the building's weight. An elastically designed structure (R = 1) would need 24,000 kN, forty percent of W.",
          "State the result: ductility detailing buys an eightfold reduction in design force — paid for with confining steel, strong columns and joint details that let the frame yield without collapsing.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Base-isolated hospitals staying operational within hours of major earthquakes",
          "Taipei 101's tuned mass damper steadying one of the world's tallest towers",
          "San Francisco's mandatory soft-storey retrofit of thousands of apartments",
          "Chile's code record: the 2010 magnitude-8.8 quake felled few modern buildings",
          "Bridge retrofits — restrainer cables and seat extensions — learned from collapsed spans",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Strength is not safety: a stiff, strong, brittle building can be deadlier than a flexible, ductile one. Resonance is a site question — a uniform row of mid-rises on soft soil is a tuned experiment. Distrust 'earthquake-proof' claims; codes buy life safety, not zero damage. Unreinforced masonry and unanchored ceilings remain the deadliest inventory on Earth.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Response spectrum", def: "Peak response of oscillators of every natural period to a given ground motion." },
          { term: "Natural period", def: "A structure's preferred sway time, roughly one tenth of a second per storey." },
          { term: "Ductility", def: "Capacity to deform beyond yield while carrying load, dissipating energy." },
          { term: "Capacity design", def: "Choosing which members yield and over-strengthening all the others." },
          { term: "Base isolation", def: "Flexible bearing layer decoupling a building from ground motion." },
          { term: "Response-modification factor", def: "Code divisor crediting ductility with a lower design force." },
          { term: "Soft storey", def: "Weak open level — shops, parking — prone to collapse." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "The 1985 Mexico City earthquake was lethal at distance mainly because:",
            options: [
              "the epicentre was downtown",
              "soft lakebed sediments amplified shaking at periods matching mid-rise buildings",
              "buildings exceeded the height limit",
              "the shaking was purely vertical",
            ],
            answer: 1,
            explain: "Amplification plus resonance: structures whose natural periods matched the soil's took the damage while neighbours of other heights survived.",
          },
          {
            q: "The strong column, weak beam rule exists because:",
            options: [
              "beams are cheaper to replace",
              "beam yielding is a survivable mechanism while column yielding collapses floors",
              "columns carry no gravity load",
              "codes demand visual symmetry",
            ],
            answer: 1,
            explain: "A hinged beam absorbs energy as damage; a hinged column removes the support of everything above it.",
          },
          {
            q: "Base isolation protects a building mainly by:",
            options: [
              "strengthening every column",
              "shifting the building's period away from the shaking's energetic range",
              "adding mass at the roof",
              "anchoring it to bedrock with cables",
            ],
            answer: 1,
            explain: "The soft bearings lengthen the structure's period so the amplifying band of the spectrum is sidestepped entirely.",
          },
          {
            q: "With Sa = 0.4 g, R = 8 and W = 60,000 kN, the code design base shear is:",
            options: ["3,000 kN", "24,000 kN", "60,000 kN", "480,000 kN"],
            answer: 0,
            explain: "V = 0.4 x 60,000 / 8 = 3,000 kN — five percent of the weight, the discount that detailing pays for.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Why bridges stand covers the statics this lesson builds on, and the earthquakes-and-volcanoes lesson covers the hazard itself. Why materials fail pairs naturally here — ductile versus brittle is the whole game.",
        tone: "path",
      },
    ],
  },
]
