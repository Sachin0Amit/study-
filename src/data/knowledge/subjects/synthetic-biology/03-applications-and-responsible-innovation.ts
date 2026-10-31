/**
 * Knowledge Universe — Synthetic Biology — Chapter 03: Applications & Responsible Innovation
 * 2 lessons · ~2,996 words
 * field: Synthetic Biology
 * legacy sources: x47-bio-split-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Applications & Ethics]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 bio-synbio-dbtl-practice — Synthetic Biology in Practice: The Design–Build–Test–Learn Cycle
 *   03.2 bio-synbio-biosafety-ethics — Biosafety, Biosecurity and the Ethics of Engineering Life
 */
import type { KnowledgeTopic } from '../../types'

export const syntheticBiologyCh03: KnowledgeTopic[] = [
  {
    id: 'bio-synbio-dbtl-practice',
    title: 'Synthetic Biology in Practice: The Design–Build–Test–Learn Cycle',
    domain: 'Emerging & Interdisciplinary',
    field: 'Synthetic Biology',
    branch: 'Applications & Ethics',
    tier: 'intermediate',
    concepts: [
      'Engineering, applied to biology: specify, design, build, test, learn',
      'Design: computer-aided design tools and parts registries',
      'Build: DNA synthesis, standardized assembly and editing',
      'Test: sequencing, flow cytometry and high-throughput assays',
      'Learn: feeding measurements back into the model',
      'Case study: artemisinic acid in engineered yeast',
      'The minimal genome and the build-a-cell ambition',
      'Biofoundries, iGEM and cell-free systems',
    ],
    words: 1354,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'The founding lessons of synthetic biology describe its parts and circuits. This one describes its manners: the discipline’s claim to be engineering rather than artisanal genetics rests on a borrowed workflow — the design–build–test–learn cycle — executed over and over with the same rigor an aerospace firm brings to a new wing. Understanding that cycle, and where its steps still fail, is the difference between admiring synthetic biology and being able to work in it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The cycle is the organizing pattern behind every concrete success in the field — from yeast brewing an antimalarial drug to engineered probiotics in clinical trials — and behind the emerging biofoundry industry that industrializes the loop itself. It is also the interview question.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Cycle' },
      {
        kind: 'para',
        text: 'Begin with specification: state the intended behavior numerically — produce 25 grams per litre of a compound, fluoresce above a threshold when arsenic is present — because a target you cannot measure is a target you cannot iterate toward. Design is choosing DNA to meet the spec: selecting parts from registries, composing circuits with design software that checks part boundaries and simulates dynamics. Build is turning that design into physical DNA — ordering synthesized fragments, assembling them by standardized methods, editing chassis genomes — increasingly by robots, since the discipline learned that manual pipetting does not scale. Test measures what the construct actually does, by sequencing it (did you build what you designed?), and assaying behavior — flow cytometry for cell-by-cell responses, mass spectrometry for product titres. Learn closes the loop: comparing measurement to prediction, updating the models, and carrying the lesson into the next design. One turn of the cycle tells you little; the method is the iteration.',
      },
      {
        kind: 'para',
        text: 'Where the cycle breaks is itself well-charted knowledge. Biology’s version of manufacturing tolerance is context-dependence: a part that behaved one way in one genetic neighborhood behaves differently in another, so designs carry hidden unknowns that only testing reveals. Build errors, uneven plasmid copy numbers, and metabolic burden on the host all blur the mapping from design to behavior. This is why the field invests in measurement standards and why “learn” is not a formality — it is where most of the science actually lives.',
      },
      { kind: 'heading', text: 'Case Studies' },
      {
        kind: 'para',
        text: 'The field’s signature case is artemisinin, the plant-derived drug that is the backbone of malaria treatment. Its precursor, artemisinic acid, occurs naturally in sweet wormwood in vanishingly small amounts, making supply volatile. Starting in the early 2000s, Jay Keasling’s team progressively rebuilt the mevalonate pathway in yeast — stepwise adding, tuning and balancing enzymes so the cells funnelled their own carbon into the precursor — and industrial scale-up followed, with semi-synthetic artemisinin entering pharmaceutical production in the 2010s. The project mattered beyond malaria: it demonstrated that a ten-year, multi-institution, DBTL-iterated engineering effort could make biology produce a molecule it had never made, at industrial scale, reproducibly.',
      },
      {
        kind: 'para',
        text: 'A second case asked the question from the other end: what is the minimum a cell needs? In 2016, after two decades of transposon-mutagenesis design–build–test rounds, the J. Craig Venter Institute synthesized a genome of 473 genes — smaller than any known natural genome — and booted it inside a bacterium whose own DNA had been removed. The minimal cell grows and divides, though a third of its genes still have no known function: a humbling census of our ignorance. The build-a-cell ambition extends the project — designing life from first principles — and it doubles as a research instrument: by building, you find out which parts of your parts-list you never actually understood.',
      },
      {
        kind: 'para',
        text: 'The infrastructure around the cycle has itself become an industry. Biofoundries — facilities of robots, sequencers and software pipelines — sell iteration as a service, compressing design-to-data turnaround from months to weeks, and cloud labs let researchers execute protocols remotely. The iGEM competition has run the cycle as an educational sport since 2003: student teams receive a kit of standardized parts each summer, design and build projects, and defend them at a giant annual jamboree — the field’s talent pipeline and its culture of open, standardized parts in one institution. A different route to reliability removes the cell from cell-free systems: extracts containing the transcription and translation machinery run circuits on paper or in tubes, which cannot mutate, cannot escape as living things, and can be freeze-dried for field diagnostics.',
      },
      {
        kind: 'example',
        title: 'Worked Example — One Loop Around the Cycle',
        steps: [
          'Specify: a biosensor that fluoresces only when arsenic exceeds 10 parts per billion in drinking water.',
          'Design: an arsenic-responsive promoter fused to a fluorescent protein, plus a constitutive reference color for ratiometric readout; simulate expected dynamic range.',
          'Build: order the synthesized construct, assemble into a standard plasmid, transform into an E. coli chassis; sequence-verify three clones.',
          'Test: expose calibrated cultures to 0–100 ppb arsenic; read fluorescence ratios per cell by flow cytometry against the spec.',
          'Learn: the sensor responds but saturates at 5 ppb — promoter sensitivity is off-spec; the model’s promoter-copy-number assumption is revised, and the next design tunes the promoter variant. Iterate.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Medicine: engineered probiotics in clinical trials consume toxic metabolites in urea-cycle and PKU patients — living drugs built through the same loop.',
          'Materials: self-healing concrete and grown biofabricated leather come from circuit-bearing cells.',
          'Global health: freeze-dried cell-free diagnostics for field detection of pathogens and contaminants.',
          'Education and open science: iGEM’s parts registry — tens of thousands of standard parts — is a public commons any lab can draw from.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The DBTL cycle is not a synonym for “trial and error”: the specification and learning phases are what make it engineering, and projects that skip them rediscover them expensively. A second error is treating the minimal genome as the “simplest possible life”: it is the smallest genome consistent with that organism’s laboratory lifestyle, and its unexplained genes say more about our knowledge than about nature’s requirements.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'design–build–test–learn (DBTL)', def: 'The iterative engineering loop — specify behavior, design DNA, build and verify it, measure performance, update the model — that defines synthetic biology as a discipline.' },
          { term: 'biofoundry', def: 'An industrialized facility offering robotic DBTL iteration as a service.' },
          { term: 'minimal genome', def: 'A synthesized genome containing only genes needed for laboratory growth and division — 473 genes in the 2016 Venter Institute cell.' },
          { term: 'cell-free system', def: 'Transcription–translation machinery run without living cells; stable, non-replicating, and freeze-dryable for diagnostics.' },
          { term: 'iGEM', def: 'The international student competition that standardized parts, teams and open documentation for the field since 2003.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A team designs a circuit, builds it, tests it, and — finding it 10× too weak — simply tries a different random design. What did they skip?',
            options: ['Specification', 'The Learn phase — updating the model from measured failure', 'Build', 'Sequencing'],
            answer: 1,
            explain: 'Without analyzing why the first design missed, each new attempt is a coin flip; the Learn phase converts failure into a better prior for the next design.',
          },
          {
            q: 'The artemisinin project is historically important mainly because it demonstrated:',
            options: [
              'That yeast can photosynthesize',
              'That a long-horizon, iterative pathway-engineering effort could deliver an industrial-scale pharmaceutical product',
              'That malaria is caused by yeast',
              'That enzymes cannot be tuned',
            ],
            answer: 1,
            explain: 'The significance is process and scale: multi-gene pathway balancing, iterated over years, ending in real pharmaceutical production volume.',
          },
          {
            q: 'Cell-free synthetic biology systems are attractive for field diagnostics primarily because they:',
            options: [
              'Grow faster than cells',
              'Can be freeze-dried, cannot replicate or escape, and still express reporter circuits',
              'Contain minimal genomes',
              'Need no DNA',
            ],
            answer: 1,
            explain: 'Removing the living cell removes mutation, containment risk and cold-chain fragility — paper-based tests with cellular machinery but no cell.',
          },
          {
            q: 'Roughly a third of the 2016 minimal genome’s genes have no known function. The honest scientific reading:',
            options: [
              'The project failed',
              'Those genes are junk DNA',
              'Even the “simplest” viable life requires functions we have not yet identified — a map of our ignorance',
              'They are all regulatory RNAs',
            ],
            answer: 2,
            explain: 'The cell cannot live without them, so they are required but uncharacterized — the project’s most quoted lesson about the limits of biological knowledge.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Read after the programming-living-cells lesson (parts, circuits, chassis) and alongside the biotechnology applications lesson in Genetics, which surveys recombinant-DNA products. The companion lesson on biosafety and ethics completes the practice of the discipline.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'bio-synbio-biosafety-ethics',
    title: 'Biosafety, Biosecurity and the Ethics of Engineering Life',
    domain: 'Emerging & Interdisciplinary',
    field: 'Synthetic Biology',
    branch: 'Applications & Ethics',
    tier: 'intermediate',
    concepts: [
      'Asilomar 1975: science policing itself before the risks materialized',
      'Risk groups and biosafety levels 1 through 4',
      'The NIH Guidelines and institutional biosafety committees',
      'Physical versus biological containment: kill switches and auxotrophy',
      'Dual-use research of concern',
      'Gene drives: spreading edits through wild populations',
      'The Cartagena Protocol and international governance',
      'Ownership, patents and public trust',
    ],
    words: 1642,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Every enabling technology in this book eventually meets its governance question, and for engineered biology the question is unusually sharp: the same methods that let yeast brew medicine let anyone with modest training brew other things. The field’s answer is layered — laboratory rules, engineered safeguards, international agreements and professional ethics — and its history includes one episode that set the template for how emerging science regulates itself.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Safety knowledge is not peripheral to synthetic biology — it is admission-priced. Institutional safety committees, competition judges and regulators will all ask you to reason about risk classes and containment, and informed participation in public debates about engineered organisms requires knowing what the actual rules are.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'From Asilomar to the Rulebook' },
      {
        kind: 'para',
        text: 'In 1973, the first recombinant DNA molecule had just been made, and the biologists who made it were uneasy: splicing genes between species was unprecedented, and no one could say what such organisms might do. Rather than wait for a scandal, Paul Berg and colleagues called a halt — a voluntary deferral of certain experiments — and convened the 1975 Asilomar conference, where roughly 150 biologists, lawyers and physicians graded recombinant-DNA work by hazard and matched each grade to physical and biological containment. The summary statement published that year is a landmark: a discipline designing its own restrictions before regulators imposed them. Out of that process grew the NIH Guidelines for recombinant DNA research, periodically updated and now covering synthetic nucleic acids — the document that, in the United States, binds federally funded institutions and sets the template many countries follow. Its most important institution is local: the institutional biosafety committee, a committee at every research institution that reviews the riskiest classes of work before any of it begins.',
      },
      {
        kind: 'para',
        text: 'The risk vocabulary begins with risk groups, which classify organisms by the threat they pose to healthy adults: risk group 1 agents are harmless (laboratory E. coli strains), group 2 cause treatable disease (influenza, Staphylococcus aureus), group 3 cause serious potentially lethal disease (tuberculosis, SARS-CoV-2 as handled in many labs), and group 4 the deadliest with no reliable treatment (Ebola, Marburg). Biosafety levels 1 through 4 are the facility and practice standards matched to those groups: BSL-1 is open-bench teaching-lab work; BSL-2 adds training, restricted access and sealed containers for aerosol-generating work; BSL-3 adds directional airflow, respirator-grade protection and dedicated engineering for agents that spread through the air; BSL-4 is the spacesuit laboratory. The essential discipline is the pairing: a BSL-3 facility running group-2 work is overkill; a group-3 agent in a BSL-2 lab is the error the whole system exists to prevent.',
      },
      { kind: 'heading', text: 'Engineered Safeguards' },
      {
        kind: 'para',
        text: 'Physical containment (the facility) is half the design; the other half is biological containment built into the organism itself. The classic tools make the organism dependent on the laboratory: auxotrophy, a engineered dependence on a nutrient that exists only in the lab medium, and genetic circuits that kill the cell when a condition is absent — kill switches. Containment is also why chassis choice matters in practice: disabled strains of E. coli, yeast and the like have decades of laboratory co-evolution with the rulebook. The honest engineering admission is that no containment is absolute — mutations disable kill switches, and dependencies can be circumvented by evolution — so containment layers are stacked, defense in depth being the operative principle.',
      },
      {
        kind: 'para',
        text: 'A harder problem is work that is dangerous not by accident but by design. Dual-use research of concern is legitimate science whose results could be turned to harm — studies that make a pathogen more transmissible, or that reveal how to synthesize a toxin. The 2011–2012 debates over transmissible avian-influenza experiments forced the system to respond, and the current settlement includes research-funder review mechanisms and journals weighing publication of methods sections. The principles at stake are honest to state together: openness is the norm of science, but a results section is also an instruction manual; the line-drawing is genuinely hard, and where it sits is policy, not physics.',
      },
      {
        kind: 'para',
        text: 'The sharpest current case is the gene drive: a genetic construct engineered to spread through a wild population faster than Mendelian inheritance allows, so that an edit made in a few organisms eventually reaches every descendant. Proposals include rendering malaria-carrying mosquito populations harmless or eliminating invasive rodents from islands — high-value conservation and public-health goals that no other tool can reach. The same property is the risk: a drive, once released, is designed not to stay put, and reversing one requires another engineered drive. The National Academies’ 2016 review recommended staged, heavily monitored field testing — cage trials, then island trials — before any open release, and ecology-first environmental assessment. Gene drives make the Asilomar problem spatial: containment of a self-spreading heritable element is a different problem class than containment of a lab strain, and the governance is correspondingly cautious.',
      },
      {
        kind: 'para',
        text: 'Internationally, the Cartagena Protocol on Biosafety — a 2000 supplement to the Convention on Biological Diversity — governs transboundary movement of living modified organisms, requiring advance informed agreement before modified organisms are shipped across borders into countries that are parties. Export-oriented synthetic biology runs into it constantly, and the ongoing diplomatic arguments about whether gene-edited and synthetically-built organisms count as “modified” are live science-policy questions. Beyond treaties sit the quieter ethics: who owns engineered life — the patents on fundamental techniques have shaped the industry’s structure; who benefits — whether medicines and crops engineered at great cost reach the places that need them; and how the public’s trust is kept — a 2010s survey-worthy irony being that the field that gave us insulin and vaccines is publicly trusted less than its record warrants, making transparency not a courtesy but an operational requirement.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Reviewing a Field Trial',
        steps: [
          'Proposal: release mosquitoes carrying a self-limiting (non-drive) construct to suppress a dengue-carrying population in a suburb.',
          'Classify the agent: insect, no human pathogen — risk group 1; the environmental question, not pathogenesis, dominates.',
          'Check containment logic: a self-limiting construct declines in the wild population over generations — a built-in sunset, unlike a drive; verify the company’s field data from earlier trials.',
          'Weigh against alternatives: insecticide resistance makes spraying a fading tool; inaction preserves disease burden — the comparison, not perfection, is the standard.',
          'Governance: community consent and advance notice under national rules; post-release monitoring plan for the stated generations. Approve with monitoring — the layered-judgment shape of every real biosafety decision.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Institutional practice: every research university’s biosafety committee applies exactly this framework to proposals weekly — it is the profession’s license to operate.',
          'iGEM: the student competition runs its own safety committee and requires teams to answer a structured safety form before competing — the field’s culture transmitted through its pipeline.',
          'Public health: the Asilomar precedent of self-restraint is cited in debates on AI, nanotechnology and pathogen research as the model — and its limits — of scientific self-governance.',
          'Conservation: island eradications of invasive mammals and proposed drive-based interventions against malaria are the live test cases of ecological release governance.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Three confusions recur. Risk groups classify the organism; biosafety levels classify the facility and practice — they are matched, not the same thing. “Dual-use” does not mean “dangerous research”; it means legitimate research with a misuse shadow, which is why it is hard. And a gene drive is not just a powerful gene edit: its defining property is spread, so its risk profile is ecological and population-scale rather than laboratory-scale.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Asilomar conference (1975)', def: 'The meeting where biologists voluntarily graded recombinant-DNA hazards and set containment rules — the template for scientific self-governance.' },
          { term: 'risk group (1–4)', def: 'Hazard classification of a biological agent by the disease it causes in healthy adults and the availability of treatment.' },
          { term: 'biosafety level (BSL 1–4)', def: 'The facility-and-practice standard matched to a risk group, from open benches to spacesuit laboratories.' },
          { term: 'auxotrophy', def: 'Engineered dependence on a laboratory-supplied nutrient — a standard biological containment strategy.' },
          { term: 'dual-use research of concern', def: 'Legitimate research whose methods or results could enable harm, subject to funder and publication review.' },
          { term: 'gene drive', def: 'A construct engineered to spread through wild populations beyond Mendelian ratios; releases are governed by staged-testing frameworks.' },
          { term: 'Cartagena Protocol', def: 'The 2000 international agreement governing transboundary movement of living modified organisms.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A lab proposes working with a bacterium that causes treatable skin infections. Correct pairing?',
            options: [
              'Risk group 2 handled at BSL-2',
              'Risk group 3 handled at BSL-1',
              'Risk group 1 handled at BSL-4',
              'Risk group 4 handled at BSL-2',
            ],
            answer: 0,
            explain: 'Treatable disease in healthy adults is risk group 2, matched to BSL-2 practice: training, restricted access, containment for aerosol-generating steps.',
          },
          {
            q: 'What made Asilomar historically remarkable?',
            options: [
              'It was the first genetics conference',
              'Scientists paused their own risky work and designed containment rules before any harm occurred',
              'It banned recombinant DNA permanently',
              'It was convened by regulators against scientists’ wishes',
            ],
            answer: 1,
            explain: 'The precedent is self-restraint: the community graded its own hazards and matched them to controls, preempting external prohibition.',
          },
          {
            q: 'The defining property that puts gene drives in a governance class of their own is:',
            options: [
              'They use CRISPR',
              'They spread through wild populations by design, making containment-after-release effectively impossible',
              'They kill the organism immediately',
              'They work only in mosquitoes',
            ],
            answer: 1,
            explain: 'Drive inheritance exceeds Mendelian ratios precisely so the edit spreads — a deliberate, heritable, self-propagating release; hence staged testing and ecological assessment.',
          },
          {
            q: 'An auxotrophic chassis strain is safer outside the lab because:',
            options: [
              'It cannot photosynthesize',
              'It depends on a lab-only nutrient, so it cannot persist in the environment',
              'It is invisible to the immune system',
              'It contains no DNA',
            ],
            answer: 1,
            explain: 'Removing the ability to synthesize an essential metabolite ties survival to the flask — biological containment layered beneath physical containment.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'The final lesson of the synthetic-biology sequence: read after the circuits lesson and the DBTL practice lesson, which together explain what is being contained and why anyone would want to. The immunology lesson in Microbiology supplies the pathogen-hazard background.',
        tone: 'path',
      },
    ],
  },
]
