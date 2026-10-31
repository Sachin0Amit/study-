/**
 * Knowledge Universe — Nanotechnology — Chapter 05: Nanomedicine & Clean Tech
 * 1 lesson · ~1,021 words
 * field: Nanotechnology
 * legacy sources: x51-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Nanomedicine & Clean Tech]
 *
 * Lessons (snapshot at reorganization):
 *   05.1 nano-medicine-clean-tech — Nanomedicine and Clean Technology
 */
import type { KnowledgeTopic } from '../../types'

export const nanotechnologyCh05: KnowledgeTopic[] = [
  {
    id: 'nano-medicine-clean-tech',
    title: 'Nanomedicine and Clean Technology',
    domain: 'Emerging & Interdisciplinary',
    field: 'Nanotechnology',
    branch: 'Nanomedicine & Clean Tech',
    tier: 'core' as const,
    concepts: [
      'Liposomes: Doxil and the first approved nanodrug',
      'The EPR effect and active targeting',
      'Gold nanoparticles: plasmon diagnostics and therapy',
      'Magnetic nanoparticles: MRI contrast and hyperthermia',
      'Environmental cleanup: zero-valent iron and photocatalysis',
      'Nanofiltration, catalysis and energy materials',
      'Standards and responsible development',
    ],
    words: 1021,
    readMins: 5,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The scale lesson of this book noted nanoparticles in sunscreen and medicine as passing examples. This lesson gives the platforms their due: drug delivery is nanotechnology\u2019s deepest clinical win, gold and iron-oxide particles run diagnostics and therapy, and the same surface-area physics powers environmental cleanup and catalysis — with a regulatory apparatus now mature enough to have standards committees of its own.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The most-prescribed chemotherapies now ship inside lipid nanoparticles, and the mRNA vaccines of 2020-2021 were delivered in lipid nanoparticles too — the same platform logic at pandemic scale. Meanwhile the diagnostic test strip you may have used during that pandemic works because of gold nanoparticles. This is not the future of the field; it is its installed base.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Drug delivery begins with the liposome — a spherical bilayer of phospholipids enclosing an aqueous core, first described by Bangham in 1965. Load doxorubicin inside, coat the surface with PEG polymer ("stealth" that hides it from immune scavenging), and you have Doxil, approved in 1995 as the first FDA-approved nanodrug: same molecule, radically different pharmacokinetics, less cardiac toxicity, longer circulation. Polymeric nanoparticles, dendrimers and — in a different regulatory class — the lipid nanoparticles that delivered mRNA vaccines all share the architecture: a carrier nanometres to hundreds of nanometres wide that changes where a drug goes and when it is released.',
      },
      {
        kind: 'para',
        text: 'Targeting has two gears. Passive: the enhanced permeability and retention (EPR) effect — tumor vessels are leaky and lymphatic drainage poor, so circulating nanoparticles of the right size accumulate in tumor tissue more than healthy tissue. Active: conjugate antibodies or ligands to the particle surface so it binds chosen receptors. The honest literature notes the translation gap: EPR measured in mice generalizes imperfectly to heterogeneous human tumors, which is why delivery platforms still outperform targeting promises in the clinic.',
      },
      {
        kind: 'para',
        text: 'Gold nanoparticles carry two superpowers. Their surface plasmon resonance — collective electron oscillation — turns them ruby red and makes them superb light-scattering labels: the colored line in a lateral-flow test strip (pregnancy, COVID antigen, malaria) is gold nanoparticles catching tagged antibodies. The same plasmon converts near-infrared light to local heat, enabling photothermal tumor ablation in preclinical work. Iron-oxide nanoparticles take the magnetic road: superparamagnetic iron oxide is an MRI contrast agent and, under an alternating field, a magnetic hyperthermia heat source.',
      },
      {
        kind: 'para',
        text: 'The environment runs on the same physics. Nanoscale zero-valent iron injected into contaminated groundwater reduces chlorinated solvents in place — a remediation technology in field use since the 1990s. Titanium dioxide photocatalysis under UV breaks organic pollutants and makes self-cleaning glass and air-purifying surfaces. Nanofiltration membranes — pore engineering at the nanometre — desalinate and separate at lower pressure than reverse osmosis. And heterogeneous catalysis is surface chemistry by definition: the catalytic converter\u2019s platinum-group nanoparticles and new battery electrodes (nanostructured silicon anodes that survive swelling) are the energy-side payoff of high surface area.',
      },
      {
        kind: 'para',
        text: 'Stewardship closes the loop. The scale lesson introduced nanotoxicology and regulation; the mature frame now includes dedicated standards work (ISO technical committee 229 for nanotechnologies), FDA platform guidance that evaluates the delivered product rather than the buzzword, and lifecycle thinking — what happens to engineered particles at end of life matters as much as what they do in service. Responsible development here is not a slogan but a batch-record discipline: characterize, document, and track the material from synthesis to disposal.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Question: why does a PEGylated liposomal doxorubicin dose hurt the heart less than the free drug?',
          'Track the pharmacokinetics: PEG extends circulation time and the liposome cannot freely diffuse through healthy cardiac capillaries.',
          'Add the EPR gear: leaky tumor vasculature accumulates the carrier where the drug is needed.',
          'Conclude: same molecule, re-routed exposure — the toxicity falls because the delivery platform changed where the chemistry happens, which is the entire promise of nanomedicine in one vial.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Oncology: Doxil/pegylated liposomal doxorubicin and albumin-bound paclitaxel (nab-paclitaxel) are standard-of-care nanoformulations.',
        'Vaccines: lipid nanoparticle delivery made mRNA vaccines stable, cold-chain-shippable and effective.',
        'Diagnostics: lateral-flow strips — the world\u2019s most-produced biosensor — are gold-nanoparticle assays.',
        'Groundwater remediation: zero-valent iron injections treat solvent plumes in place.',
        'Energy: nanostructured catalysts and electrodes move surface-area physics into converters, fuel cells and batteries.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, "nano is automatically better" — the platform must beat the free drug on pharmacokinetics, not on scale rhetoric. Second, over-reading the EPR effect from mice to humans: heterogeneity rules. Third, expecting every promising nanodrug to reach market — formulation, scale-up and immunogenicity kill most candidates between bench and approval. Fourth, treating remediation claims as magic: zero-valent iron works on reducible contaminants, not everything in the plume. Fifth, forgetting that gold\u2019s red color is physics (plasmon), not dye — the test strip\u2019s line is a nano-optical effect.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'liposome', def: 'A phospholipid bilayer vesicle carrying drugs in its core — the first approved nanodrug platform (Doxil, 1995).' },
        { term: 'EPR effect', def: 'Enhanced permeability and retention — leaky tumor vasculature accumulates circulating nanoparticles.' },
        { term: 'PEGylation', def: 'Surface polymer coating that hides particles from immune clearance and extends circulation.' },
        { term: 'surface plasmon resonance', def: 'Collective electron oscillation in gold nanoparticles — the physics behind test-strip color and photothermal heating.' },
        { term: 'zero-valent iron', def: 'Nanoscale metallic iron used for in-situ groundwater reduction of chlorinated solvents.' },
        { term: 'photocatalysis', def: 'Light-driven catalysis on semiconductors like TiO2 — self-cleaning and pollutant-breaking surfaces.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Doxil (1995) mattered because the liposomal formulation…',
          options: ['made doxorubicin stronger', 'changed where the drug accumulates, reducing cardiac toxicity', 'replaced chemotherapy', 'was cheaper to synthesize'],
          answer: 1,
          explain: 'Same molecule, re-routed: the carrier\u2019s pharmacokinetics are the therapy.',
        },
        {
          q: 'The colored line in a lateral-flow test strip comes from…',
          options: ['a pH indicator', 'gold nanoparticles\u2019 plasmon scattering', 'magnetic beads', 'fluorescent proteins'],
          answer: 1,
          explain: 'Gold nanoparticles accumulate at the test line and their plasmon resonance reads red.',
        },
        {
          q: 'The EPR effect describes…',
          options: ['immune clearance of particles', 'leaky tumor vessels accumulating circulating nanoparticles', 'drug binding to plasma proteins', 'particle aggregation in storage'],
          answer: 1,
          explain: 'Passive targeting: leaky vasculature and poor lymphatic drainage concentrate the carrier in tumors.',
        },
        {
          q: 'Nanoscale zero-valent iron cleans groundwater by…',
          options: ['filtering particles mechanically', 'chemically reducing chlorinated solvents in place', 'magnetically attracting metals only', 'raising the water\u2019s pH'],
          answer: 1,
          explain: 'Metallic iron donates electrons, dechlorinating solvents in situ — field-used remediation since the 1990s.',
        },
      ] },
    ],
  },
]
