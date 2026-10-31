/**
 * Knowledge Universe — Synthetic Biology — Chapter 02: Genetic Circuits & Toolkits
 * 1 lesson · ~1,518 words
 * field: Synthetic Biology
 * legacy sources: x60-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Genetic Circuits & Toolkits]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 emer-synbio-genetic-circuits — Genetic Circuits: Engineering Logic from Repressors
 */
import type { KnowledgeTopic } from '../../types'

export const syntheticBiologyCh02: KnowledgeTopic[] = [
  {
    id: 'emer-synbio-genetic-circuits',
    title: 'Genetic Circuits: Engineering Logic from Repressors',
    domain: 'Emerging & Interdisciplinary',
    field: 'Synthetic Biology',
    branch: 'Genetic Circuits & Toolkits',
    tier: 'advanced',
    concepts: [
      'Circuit anatomy: input, logic, output',
      'The toggle switch: mutual repression and bistability',
      'The repressilator: delayed negative feedback',
      'Logic gates, cascades and NOR universality',
      'Load, retroactivity and insulation',
      'Quorum sensing: the wire between cells',
      'Intrinsic versus extrinsic noise',
      'Characterization and automatic design (Cello)',
    ],
    words: 1518,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The opening lesson of this book introduced the parts list — promoters, ribosome-binding sites, coding sequences, terminators — and named the two founding devices in passing: switches that remember and oscillators that tick. This lesson takes those devices apart. Genetic circuit engineering began in earnest in the year 2000, when two landmark papers showed that cells could host human-designed dynamics: a memory element and a clock, both built from nothing but repressors and their DNA targets. Everything a circuit does is still chemistry — transcription factor meets binding site — but composed deliberately, that chemistry computes, remembers, oscillates and communicates.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Circuits are the programming layer of biotechnology: cancer-hunting bacteria that pulse drug release on a quorum clock, yeast factories whose production genes switch on only in the fermentation tank, biosensors that report arsenic in groundwater. Reading a circuit diagram is about to matter the way reading a schematic does.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A circuit is a graph of regulation drawn over DNA. Inputs arrive as inducers or environmental signals that set promoter activity; logic happens wherever a regulator binds or blocks a promoter; outputs are gene products — reporters, enzymes, therapeutic payloads. The transfer function of a repressible promoter follows a Hill curve: the fraction of promoters unblocked is 1/(1 + (R/K)^n), where R is repressor concentration, K the half-repression constant and n the cooperativity. n determines how switch-like the promoter is; the founding devices both quietly depended on getting n above one. Note the economic asymmetry that makes repression the default logic family: NOT gates are free — a repressor IS a NOT — while AND and OR must be engineered.',
      },
      {
        kind: 'para',
        text: 'The toggle switch of Gardner, Cantor and Collins (Nature 2000) wires two repressors — classically TetR and LacI — so that each gene\u2019s product blocks the other\u2019s promoter. Mutual negative feedback is a double negative: the system has two stable states, ON for gene one and OFF for gene two, and vice versa, separated by an unstable ridge. Two chemical pulses flip the bit: an IPTG pulse disables TetR and latches the cell into LacI-ON; aTc does the reverse. Crucially the device shows hysteresis — once latched, each state persists long after its inducing pulse is gone, because the state that is currently winning actively represses the loser. That is memory made of protein, and the paper\u2019s design rules are permanent engineering lore: cooperativity steepens the switch, and balanced promoter strengths keep both basins wide enough to matter.',
      },
      {
        kind: 'para',
        text: 'The repressilator of Elowitz and Leibler (Nature 2000, same volume) chains three repressors in a ring — TetR represses cI, cI represses LacI, LacI represses TetR. Negative feedback with an odd number of nodes, plus enough delay from transcription and translation, destabilizes the steady state into a limit cycle: the three proteins rise and fall in turn, read out by green fluorescent protein carrying a degradation tag so the signal can keep pace. The first prototype oscillated with a period near three cell divisions but with punishing cell-to-cell variability — a lesson as valuable as the device. Oscillators taught the field that noise is a design material: plasmid copy number, protein half-lives and ribosome-binding-site strengths all tune amplitude and reliability, and later versions made the clock robust by exactly these knobs.',
      },
      {
        kind: 'para',
        text: 'Logic scales awkwardly in cells, and the reasons are physical. A downstream promoter LOADS its upstream regulator — thousands of binding sites sequester protein molecules, retroactively changing the upstream module\u2019s behavior (the retroactivity problem formalized by Del Vecchio and colleagues in 2008). The fixes are impedance matching, borrowed from electronics: insulate modules with orthogonal machinery such as the T7 polymerase, which ignores the host\u2019s promoters; buffer with decoy sites or riboregulators; or route signals through small molecules instead of proteins. Composability also improved by compiler: Nielsen and colleagues\u2019 Cello (Science 2016) takes a Boolean truth table and lays out, simulates and scores DNA designs automatically, with on the order of eighty percent of compiler-built circuits working first try — imperfect, but comparable to early electronic design automation.',
      },
      {
        kind: 'para',
        text: 'Cells also talk to each other, and quorum sensing is the wire. The classic LuxI/LuxR system: LuxI synthesizes a small acyl-homoserine-lactone that diffuses freely across membranes; LuxR binds it and activates quorum-dependent promoters. The molecule is a broadcast signal whose concentration reports population density, so circuits wired through it become population-level programs. The dramatic proof is the synchronized lysis circuit of Danino and colleagues (2015): engineered bacteria grow in a tumor, the quorum signal rises, a lysis gene pops the cells open to release drug, the surviving population regrows, and the cycle repeats as a clockwork dosing rhythm. Biological timing without a single silicon part.',
      },
      {
        kind: 'para',
        text: 'Finally, the field\u2019s measurement conscience. In 2002 Elowitz, Levine, Siggia and Swain ran two spectrally distinct fluorescent proteins from identical promoters in the same cell: cyan and yellow flickered together when global factors (ribosomes, metabolites) fluctuated — extrinsic noise — but diverged from the randomness of each promoter\u2019s own bursts — intrinsic noise. Decomposing variability into these two parts made \u201cnoisy\u201d a quantitative, designable property. The same rigor pressed on standards: promoter \u201cstrength\u201d numbers are only comparable within matched strains, plasmids and media, which is why the iGEM community fights for calibration protocols and datasheets — the unglamorous infrastructure that lets anyone else\u2019s circuit work in your chassis.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Repressor transfer function',
        latex: 'f(R) = \\frac{1}{1 + (R/K)^{n}}',
        meaning: 'Fraction of promoters derepressed at repressor level R, with half-repression constant K and Hill coefficient n. Cooperativity turns a gradual dimmer into a switch — the precondition for bistable memory.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how sharply a promoter shuts off at ten times its half-repression repressor level, for n = 1 versus n = 3.',
          'Apply f = 1/(1 + (R/K)^n) with R/K = 10.',
          'For n = 1: f = 1/(1 + 10) ≈ 0.091 — the \u201coff\u201d state still leaks about nine percent.',
          'For n = 3: f = 1/(1 + 1000) ≈ 0.001 — a thousand-fold cleaner off state.',
          'Interpret: cooperativity is not cosmetic. A leaky repressor blurs logic levels and destabilizes memory; this arithmetic is why toggle designs chose cooperative promoters, and why leakiness heads every datasheet.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Synchronized lysis bacterial therapeutics that dose anti-cancer payloads on a quorum clock',
          'Biosensor circuits for arsenic, nitrate and inflammation markers wired from native sensor promoters to reporters',
          'Dynamic metabolic control: circuits that divert flux from growth to product only after the tank is full',
          'Synthetic consortia — producer and consumer strains coupled through quorum signals for division of labor',
          'Cello-style automatic design pipelines now standard in industrial circuit engineering',
          'Two-colour noise assays as the quality control behind every serious promoter characterization campaign',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not compose genetic gates like TTL chips: loading, resource competition and growth feedback bend every transfer function when modules meet. Do not forget that protein half-life is part of your design — oscillators die without degradation tags and toggles slow with stable parts. And never trust a promoter strength number from someone else\u2019s strain, plasmid copy or media recipe: uncalibrated parts are the field\u2019s most reliable source of irreproducibility.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Bistability', def: 'Two stable expression states coexisting in one genotype — the basis of cellular memory in the toggle switch.' },
          { term: 'Hysteresis', def: 'State-dependence of the switching threshold: once latched, a toggle stays put after the inducing pulse is withdrawn.' },
          { term: 'Repressilator', def: 'A ring of three repressors whose delayed negative feedback produces a genetic clock.' },
          { term: 'Retroactivity', def: 'The backward effect of a downstream module\u2019s binding sites on the behavior of the upstream module driving it.' },
          { term: 'Insulation', def: 'Decoupling modules with orthogonal machinery or buffering so composed circuits behave like their parts.' },
          { term: 'Quorum sensing', def: 'Communication via diffusable autoinducers (e.g. AHL) that lets circuits coordinate across a population.' },
          { term: 'Intrinsic vs extrinsic noise', def: 'Fluctuations from a promoter\u2019s own stochastic bursting versus global factors shared by every gene — separated by the two-colour experiment.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The toggle switch remembers its last instruction because:',
            options: [
              'DNA is chemically stable',
              'each state actively represses the other, so both basins persist after the pulse — hysteresis',
              'the plasmid never replicates',
              'inducers bind permanently',
            ],
            answer: 1,
            explain: 'Mutual repression creates two self-sustaining basins; the winning state keeps the loser off, which is memory.',
          },
          {
            q: 'The original repressilator oscillated unreliably because:',
            options: [
              'GFP is too bright',
              'noise from low copy number and untuned part strengths swamped the clock — variability became the lesson',
              'repressors cannot bind DNA in bacteria',
              'cells refused to divide',
            ],
            answer: 1,
            explain: 'The 2000 device worked but cell-to-cell variation dominated; tuning degradation tags, RBS and copy number became the standard fix.',
          },
          {
            q: 'Retroactivity is a problem because:',
            options: [
              'promoters bind their own DNA',
              'a downstream module\u2019s binding sites sequester the upstream regulator, changing the upstream module\u2019s dynamics after composition',
              'signals travel backward through membranes',
              'plasmids replicate in reverse',
            ],
            answer: 1,
            explain: 'Loading is the genetic cousin of impedance mismatch — hence insulation with orthogonal polymerases, decoys and riboregulators.',
          },
          {
            q: 'Quorum sensing is described as a \u201cwire\u201d because:',
            options: [
              'it physically connects adjacent cells',
              'a diffusable signal carries state between cells, letting circuits act at population level',
              'it conducts electrons',
              'it requires plasmid conjugation',
            ],
            answer: 1,
            explain: 'AHL and kin diffuse across membranes, so any circuit wired through them coordinates whole colonies — synchronized lysis being the flagship.',
          },
        ],
      },
    ],
  },
]
