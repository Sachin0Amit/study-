/**
 * Knowledge Universe — Synthetic Biology — Chapter 01: Programming Living Cells
 * 2 lessons · ~2,995 words
 * field: Synthetic Biology
 * legacy sources: emerging-interdisciplinary.ts, x64-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Bioengineering]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 emer-synthetic-biology — Synthetic Biology: Programming Living Cells
 *   01.2 synbio-directed-evolution — Directed Evolution: Letting Selection Do the Designing
 */
import type { KnowledgeTopic } from '../../types'

export const syntheticBiologyCh01: KnowledgeTopic[] = [
  {
    id: 'emer-synthetic-biology',
    title: 'Synthetic Biology: Programming Living Cells',
    domain: 'Emerging & Interdisciplinary',
    field: 'Synthetic Biology',
    branch: 'Bioengineering',
    tier: 'advanced',
    concepts: [
      'DNA as a design medium',
      'Standard parts and modular assembly',
      'Circuits: switches and oscillators',
      'Modelling before building',
      'Chassis organisms and editing tools',
      'Applications, containment and safety',
    ],
    words: 1135,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Biology runs on code — three billion base pairs of it in every human cell — and for four billion years, only evolution could write it. Synthetic biology changes the author: genes are drafted in software, printed base-by-base by synthesis machines, and assembled into circuits that make cells glow, count, sense toxins or brew medicine. The discipline treats life as an engineering substrate — parts, standards, datasheets — and states its ambition without embarrassment: to make biology as easy to engineer as software.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'From yeast brewing antimalarial precursors to bacteria that detect inflammation in the gut, engineered biology is moving from demonstration to industry. Whether you aim to build it, regulate it or invest in it, reading a genetic circuit is becoming as practical as reading a schematic — and far more consequential.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Since the genetic code was cracked in the 1960s, DNA has been readable; with commercial synthesis machines, it became writable. A gene is at once a physical molecule and a string in a file — promoter, ribosome-binding site, coding sequence, terminator — that can be edited, ordered and composed like text. Design now begins in an editor, gets reviewed like code, and compiles into a living cell.',
      },
      {
        kind: 'para',
        text: "The founding wager was standardisation: DNA segments with defined functions and matching interfaces — BioBrick-style parts — that snap together into larger devices. Promoters turn an input signal into gene expression; reporters turn expression into something measurable; registries catalogue thousands of such parts with datasheets. Standardisation remains imperfect, since a promoter's strength depends on its genetic neighbourhood, but the direction is fixed: compose, test, reuse.",
      },
      {
        kind: 'para',
        text: 'Compose parts and behaviour appears. A toggle switch — two genes whose proteins repress each other — holds a bit of memory in a cell. A repressilator — three repressors chained in a ring — oscillates like a microscopic clock. Counters, logic gates and band-detect filters followed, and the circuit diagrams really do map onto DNA: the cell computes them with molecules, reliably enough to design against.',
      },
      {
        kind: 'para',
        text: 'Building cells is slow; simulating equations is cheap, so the discipline leans on mathematics. Circuit dynamics become ordinary differential equations — concentrations rising with production, falling with degradation — and culturing becomes exponential growth with a measured doubling time. A model will tell you an oscillator\u2019s period depends on protein decay rates you cannot tune, before you spend three weeks assembling a circuit that cannot possibly tick.',
      },
      {
        kind: 'para',
        text: 'A circuit needs a cell to run in — the chassis — traditionally a fast-growing, well-characterised laboratory strain. Genome editing rewires the chassis itself: delete competing pathways, integrate the circuit at a known genomic address, recode a stop codon across the whole genome to make the cell virus-resistant. The division of labour is now clean: editing tools modify DNA cheaply; synthetic biology decides what to write.',
      },
      {
        kind: 'para',
        text: "Engineered organisms already brew drug precursors, enzymes and materials, and 'living medicines' patrol the gut in clinical trials. The same power demands containment: auxotrophic strains depend on a nutrient absent from nature, kill switches trigger on chemical cues, and physical plus institutional barriers complete the defence. As with any powerful technology, the safety case must be designed — not assumed.",
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Exponential growth',
        latex: 'N(t) = N_0\\,e^{\\mu t}, \\qquad t_d = \\frac{\\ln 2}{\\mu}',
        meaning: 'Culture growth at rate μ, with doubling time t_d — the clock every fermentation and circuit must live by.',
      },
      {
        kind: 'formula',
        name: 'Hill response',
        latex: 'f(x) = \\frac{x^{n}}{K^{n} + x^{n}}',
        meaning: 'A promoter\u2019s output fraction as inducer x rises — n sets the switch\u2019s steepness, K its threshold.',
      },
      {
        kind: 'formula',
        name: 'Circuit dynamics',
        latex: '\\frac{d[x]}{dt} = \\alpha\\,f(x) - \\delta\\,[x]',
        meaning: 'Concentration of a circuit component: production rate minus first-order degradation.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the biomass of an engineered culture after 10 hours starting at 0.10 g/L with growth rate μ = 0.35 per hour, and the expression level of a promoter (Hill coefficient n = 2) induced at twice its constant K.',
          'Recall the governing idea: growth is exponential, N = N₀·e^(μt); a Hill promoter reaches x²/(K² + x²) of its maximum at inducer concentration x.',
          'Apply: N(10) = 0.10 × e^3.5 ≈ 0.10 × 33.1 ≈ 3.3 g/L. With x = 2K: f = (2K)²/(K² + (2K)²) = 4K²/5K² = 0.8.',
          'State the result: the culture reaches about 3.3 g/L and the circuit expresses at 80% of maximum — strong induction, since the steep n = 2 response approaches saturation beyond twice the threshold.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Microbial factories brewing drug precursors, fragrances and food proteins',
          'Biosensors that change colour in water contaminated with arsenic or pathogens',
          'Living therapeutics — engineered bacteria and immune cells that treat from inside the body',
          'Materials grown rather than made: spider-silk proteins and biodegradable plastics',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Context is the silent killer: identical parts behave differently in different genetic neighbourhoods and host strains, so copy-paste design disappoints. Burden is real — every circuit diverts ribosomes and energy from growth, and evolution will mutate your carefully engineered pathway out of existence given enough generations. Containment is not optional, and a model that said yes is not evidence.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Chassis', def: 'The host cell that runs an engineered genetic circuit.' },
          { term: 'Promoter', def: 'A DNA sequence where transcription starts — a circuit\u2019s input stage.' },
          { term: 'Repressor', def: 'A protein that blocks a promoter, implementing NOT logic in DNA.' },
          { term: 'Toggle switch', def: 'Two mutually repressing genes that hold a bistable memory state.' },
          { term: 'Inducer', def: 'A small molecule that switches a promoter on or off from outside.' },
          { term: 'Hill coefficient', def: 'Steepness of a response curve — how switch-like a promoter behaves.' },
          { term: 'Auxotrophy', def: 'Engineered dependence on a lab-supplied nutrient — a containment strategy.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A genetic toggle switch stores one bit of information using:',
            options: [
              'electric charge across the membrane',
              'two genes repressing each other in a bistable loop',
              'the thickness of the cell wall',
              'messenger RNA half-life alone',
            ],
            answer: 1,
            explain: 'Each gene silences the other, so whichever is on stays on — memory made of mutual inhibition.',
          },
          {
            q: 'In the Hill function f = xⁿ/(Kⁿ + xⁿ), raising n makes the promoter:',
            options: ['weaker', 'more switch-like', 'independent of inducer', 'faster to translate'],
            answer: 1,
            explain: 'A high Hill coefficient sharpens the response from graded ramp to near-binary switch.',
          },
          {
            q: 'An auxotrophic containment strain survives outside the laboratory:',
            options: [
              'easily, on any nutrient source',
              'never, because it cannot divide at all',
              'only if it finds the synthetic nutrient it depends on',
              'only in direct sunlight',
            ],
            answer: 2,
            explain: 'Deleting the ability to make an essential molecule ties survival to a lab-supplied nutrient absent from nature.',
          },
          {
            q: 'The repressilator demonstrated that:',
            options: [
              'cells resist all engineering',
              'gene circuits can generate oscillating behaviour',
              'DNA is just digital storage',
              'yeast is the only usable chassis',
            ],
            answer: 1,
            explain: 'Three repressors in a ring take turns switching on and off — a clock built from DNA.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: "The central dogma of molecular biology is the entry ticket, and the differential equations are friendly ones. Follow with CRISPR's mechanism in detail, metabolic engineering for production strains, and biosecurity — the policy layer that decides what gets built and by whom.",
        tone: 'path',
      },
    ],
  },
  {
    id: 'synbio-directed-evolution',
    title: 'Directed Evolution: Letting Selection Do the Designing',
    domain: 'Emerging & Interdisciplinary',
    field: 'Synthetic Biology',
    branch: 'Bioengineering',
    tier: 'intermediate',
    concepts: [
      'Rational design versus evolution when physics is unknown',
      'Error-prone PCR and saturation mutagenesis',
      'High-throughput screening and genetic selection',
      "Chen & Arnold's subtilisin E in organic solvent (1993)",
      'DNA shuffling and recombination of parents',
      'Industrial enzyme cases: sitagliptin, polymers, PCR',
      'Limits: local optima, epistasis and the screening bottleneck',
    ],
    words: 1860,
    readMins: 9,
    addedOn: '2026-10-27',
    blocks: [
      {
        kind: 'para',
        text: 'This book\'s first lesson framed biology as an engineering discipline: parts, devices, circuits you can compose on purpose. But composing on purpose requires knowing the physics well enough to calculate, and for most proteins nobody does. Enzyme catalysis involves thousands of weak interactions folded through a landscape no simulation fully captures; asking a designer to improve one by arithmetic is like asking a civil engineer to design a bridge in a country where gravity behaves differently in every valley. For such problems, synthetic biology borrows the oldest design algorithm on Earth: mutation, selection and inheritance — but run in glass, on human timescales, toward human-chosen goals. The method is directed evolution, and it is the quiet workhorse behind a startling share of the enzymes in industry and medicine.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The 2018 Nobel Prize in Chemistry went to Frances Arnold "for the directed evolution of enzymes" — the committee\'s citation treating evolution itself as an engineering technology. Half the prize went to Arnold; George Smith and Gregory Winter shared the other half for phage display, the selection technology that lets billions of antibody variants be screened for binding. Together those tools redesigned molecules that no one could design by hand: enzymes that work in solvents that boil protein, catalysts for drug manufacture that replaced entire chemistry steps, and antibodies now on pharmacy shelves.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The logic rests on the genotype-phenotype map. Every variant of a protein is a point in sequence space; its usefulness — stability, activity, selectivity — is its height on a fitness landscape over that space. Rational design tries to calculate where the peaks are; directed evolution walks the landscape instead: generate many mutants around the current point, measure them all, keep the best, repeat. No understanding of the underlying chemistry is required — only a way to make variation and a way to find the rare improvement. Natural evolution optimizes for reproductive fitness across four billion years; directed evolution optimizes for whatever the engineer screens for, across weeks. The design-evolution trade is thus a statement about knowledge: the less you can predict, the more you should search.',
      },
      {
        kind: 'para',
        text: 'Making variation is the easy half. Error-prone PCR copies a gene with a deliberately fumbled polymerase — adjusted magnesium, unbalanced nucleotide pools — sprinkling one to three random mutations per copy; a single run produces a library of thousands of subtly different enzymes. Saturation mutagenesis goes the other way, targeting one position (or a small "hotspot" cluster identified from structure or from a first round) and installing all twenty amino acids at each site, exhaustively. Recombination came third and changed the game: Stemmer\'s 1994 DNA shuffling chops a family of improved variants into fragments and reassembles them, letting successful mutations from different lineages combine — sexual reproduction for molecules. Landscape theory says why recombination matters: incremental rounds can strand a search on a local peak, and recombination is the jump between peaks.',
      },
      {
        kind: 'para',
        text: 'The hard half is finding the needle. Screening puts each variant in its own compartment — a well, a droplet, a colony — and measures it individually, tens of thousands at a time; fluorescence-activated cell sorting can push that to millions per day when the activity itself can be wired to a fluorescent readout. Selection goes further: it arranges things so that only cells carrying a useful variant survive or grow, letting biology do the counting for free. The maxim every practitioner repeats is that "you get what you screen for" — the assay, not the intention, defines the fitness function. A screen that measures binding rather than catalysis will return binders; a selection run in rich medium will evolve luxuries, not the stress tolerance you meant to improve.',
      },
      {
        kind: 'para',
        text: 'Evolution-in-a-glass predates the field\'s name. Sol Spiegelman demonstrated the raw idea in 1967: give Qβ replicase a tube of building blocks and the RNA it copies evolves on its own — becoming shorter and faster-replicating than its ancestor, the famous "Spiegelman\'s monster": Darwin without cells. The arithmetic explains how modern campaigns walk: the genetic code offers twenty amino acids, so fully randomizing n positions costs 20^n variants — five positions is already 3.2 million — which is why practitioners mutate a few positions per round and recombine lineages that improved by different routes. And the newest machinery tightens the loop itself: continuous-evolution systems (PACE and its relatives) couple mutation and selection in a single living flow rather than discrete flasks, compressing a campaign from months to days and reaching protein functions no batch protocol has time to find.',
      },
      {
        kind: 'para',
        text: 'The founding demonstration is worth reading closely. In 1993 Kevin Chen and Frances Arnold wanted subtilisin E, a protein-cutting bacterial enzyme, to work in dimethylformamide — an organic solvent in which proteins normally unfold and die; a practical goal, since many industrial substrates dissolve only in such solvents. Three rounds of error-prone PCR and screening later, the enzyme retained substantial activity in 60 percent DMF — a roughly 256-fold improvement over the wild type, accumulated through mutations nobody would have predicted from first principles: a few stabilizing core changes, some at the surface, one next to the active site. No structure was consulted at any step. The lesson Arnold drew became the field\'s charter: evolution is a better chemist than chemists, if you give it the right selection pressure.',
      },
      {
        kind: 'para',
        text: 'The industrial dividends compounded. Merck\'s sitagliptin process (a blockbuster diabetes drug) replaced a metal-catalyzed asymmetric hydrogenation — run under high pressure with a rhodium catalyst and a chiral ligand — with an engineered transaminase that sets the same chiral center in water at room temperature, with better yield and a far smaller waste stream; the enzyme took eleven rounds of directed evolution from an enzyme too weak to be useful. Thermostable polymerases for PCR, proteases and amylases for detergents, nitrile hydratases for acrylamide manufacture, isomerases for high-fructose corn syrup: all are evolution products. The current frontier pushes the method at environmental problems — variants of PETase, the bacterially discovered plastic-eating enzyme, have been evolved to depolymerize PET bottles at industrially interesting rates, and carbon-dioxide-fixing pathways are being evolved toward alternative fuels.',
      },
      {
        kind: 'para',
        text: 'The method has honest limits, and they shape where rational design still rules. Fitness landscapes are rugged: epistasis — one mutation\'s effect depending on another\'s presence — means the path matters, and a greedy climb can strand a lineage on a mediocre local optimum that recombination must rescue. Library size explodes combinatorially (ten positions, twenty choices each: ten trillion variants), so screening capacity, not creativity, is the bottleneck; smart libraries — smaller, structure-guided, history-informed — are the modern response. And selection pressure must be genuinely coupled to the goal: enzymes that "evolve" resistance to the assay\'s shortcut rather than improving the real activity are the field\'s standing cautionary tale. Directed evolution is not magic; it is search, and every search is only as good as its objective function.',
      },
      {
        kind: 'example',
        title: 'Arithmetic of a library screen',
        steps: [
          'Target: improve one enzyme position among 4 candidate hotspots, 20 amino acids each. A full saturation library is 20⁴ = 160,000 variants.',
          'A 96-well plate screened once per day covers ~400 variants per week — a year for one saturation round. FACS with a fluorescent activity reporter sorts ~10 million variants per day: the same round takes minutes.',
          'Error-prone PCR at ~1 mutation per gene gives ~1,500 distinct single mutants per round (a 1,000-base gene has ~3 alternatives per position); most are neutral or harmful — which is why the screen must find the rare few.',
          'Three rounds at 10-fold improvement each compounds to 10³ = 1,000-fold total — the arithmetic behind the 256-fold subtilisin result and why iterative rounds beat one heroic library.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Pharmaceutical catalysis: engineered transaminases and imine reductases now manufacture sitagliptin and other drugs with gram-scale waste replaced by kilogram-scale savings.',
          'Consumer enzymes: the proteases and lipases in every detergent aisle are evolution products, tuned for alkalinity, temperature and bleach stability.',
          'Molecular biology itself: the high-fidelity polymerases in PCR kits were evolved, not found — the tools of biotechnology are themselves engineered by evolution.',
          'Plastic recycling: evolved PETase and MHETase variants depolymerize consumer PET at temperatures near the polymer\'s glass transition, feeding chemical recycling loops.',
          'Antibodies: phage-display selection over billions of variants delivers the therapeutic binders behind multiple blockbusters — Smith and Winter\'s half of the 2018 prize.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Four mistakes recur. Calling the method "directed" tempts the thought that evolution has a direction: it has none — the engineer supplies the direction through the selection pressure, and a poorly chosen assay quietly redefines the goal. Treating the first improved variant as the final answer wastes the compounding of rounds; 256-fold came from three modest rounds, not one. Assuming more mutations mean faster progress — high mutation rates load the library with the deleterious majority and dilute the signal. And conflating directed evolution of an ENZYME with genetic modification of an ORGANISM: the product here is a molecule (often made in a contained microbe that never leaves the vat), a distinction that matters for regulation and public conversation alike.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'directed evolution', def: 'Iterative rounds of diversification, screening or selection and amplification, steering a molecule toward an engineer-defined goal.' },
          { term: 'error-prone PCR', def: 'Polymerase-chain-reaction conditions that add random point mutations across the copied gene, generating a mutant library.' },
          { term: 'saturation mutagenesis', def: 'Exhaustive substitution of all amino acids at chosen positions — a focused, complete library.' },
          { term: 'DNA shuffling', def: 'Fragmenting and reassembling a family of improved variants so their beneficial mutations recombine.' },
          { term: 'high-throughput screening', def: 'Assaying thousands to millions of variants individually, typically via fluorescence or droplet compartments.' },
          { term: 'epistasis', def: 'The dependence of one mutation\'s effect on the presence of another — the ruggedness of the fitness landscape.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Directed evolution is preferred over rational design when:',
            options: [
              'the protein is small',
              'the structure-function relationship is too complex to calculate, but variation and a measurable goal exist',
              'no assay for the desired activity exists',
              'the budget is unlimited',
            ],
            answer: 1,
            explain: 'Evolution walks the landscape without needing the physics; it requires a way to generate variants and a way to find the better ones — not understanding.',
          },
          {
            q: 'The Chen & Arnold subtilisin E experiment is celebrated because:',
            options: [
              'it was computed entirely from the crystal structure',
              'three rounds of random mutagenesis and screening gave ~256-fold solvent tolerance with no structural knowledge',
              'it created the first artificial enzyme from scratch',
              'it used DNA shuffling between species',
            ],
            answer: 1,
            explain: 'The 1993 result founded the field\'s charter: unpredictable mutations, found by screening, beat design for a problem no one could calculate.',
          },
          {
            q: '"You get what you screen for" warns that:',
            options: [
              'screens are always too slow',
              'the assay defines the fitness function, so variants optimize the assay rather than the intended goal',
              'libraries must be as large as possible',
              'evolution cannot be run in the laboratory',
            ],
            answer: 1,
            explain: 'Selection pressure is the steering wheel: a screen measuring the wrong thing delivers enzymes expert at the wrong thing.',
          },
          {
            q: 'DNA shuffling helps escape local optima because it:',
            options: [
              'raises the mutation rate above error-prone PCR',
              'recombines beneficial mutations from separate lineages, letting the search jump between peaks',
              'stabilizes the protein in organic solvent',
              'removes deleterious mutations from the population',
            ],
            answer: 1,
            explain: 'Recombination is the sexual-reproduction trick: combining wins from parallel climbs reaches fitness combinations that a single greedy path never visits.',
          },
        ],
      },
    ],
  },
]
