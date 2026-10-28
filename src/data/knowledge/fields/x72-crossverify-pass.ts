import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X72 pass (2026-10-29): CROSSVERIFY-20261029-1 convergence          */
/*  resolution keeps — Genetics & Heredity vs Deyholos, Harrington,    */
/*  Locke, Canham & Kang, Open Genetics Lectures, Fall 2017            */
/*  (University of Alberta, CC BY-NC 3.0; author-released full-text    */
/*  PDF from the UAlberta Borealis Dataverse, doi:10.7939/DVN/XMUPO6,  */
/*  145,791 words extracted; chapters 13, 16-20, 23, 26-31, 33,        */
/*  35-38, 40-41 read in full — ~66,000 words).                        */
/*                                                                     */
/*  CONVERGENCE: the 03:25 parallel run (job 474167) had already       */
/*  merged four genetics passes (X60 LibreTexts intro-to-genetics,     */
/*  X61 Griffiths IGA 8e, X66 Nickle & Barrette-Ng Online Open         */
/*  Genetics) plus the X71 keeps, so per the X67/X68/X69 merge-carve   */
/*  precedent this pass retains ONLY content with zero live hits on    */
/*  origin/main:                                                       */
/*                                                                     */
/*  1. bio-cancer-genetics-oncogenes — the book's ch41 topic (clonal   */
/*     evolution, oncogenes as gain-of-function via point mutation /   */
/*     amplification / translocation incl. the Philadelphia BCR-ABL    */
/*     fusion, two-hit tumor suppressors RB1/p53/BRCA1-2, mutagens     */
/*     and carcinogens, imatinib/Gleevec as the textbook's targeted-   */
/*     therapy precedent, retinoblastoma two-hit worked example,       */
/*     4-question quiz with explanations). Zero factual corrections    */
/*     were needed across the nine pre-existing lessons (segregation   */
/*     ratios, RF ceiling and centimorgan definition, Hardy-Weinberg   */
/*     conditions and carrier arithmetic, epistasis ratios with the    */
/*     hypostatic term, insulin A/B chain figures, EcoRI/pBR322/PCR    */
/*     specifics all agree with the book).                             */
/*                                                                     */
/*  DEDUP CARVING (verified by git grep on origin/main):               */
/*  - 'Philadelphia', 'two-hit', 'Knudson', 'retinoblastoma',           */
/*    'BCR-ABL' had ZERO live hits; 'imatinib' appeared only inside    */
/*    health-understanding-cancer (Clinical Medicine), which OWNS the  */
/*    clinical course — incidence, staging/TNM, metastasis, treatment  */
/*    from the patient's viewpoint — and names oncogenes/tumour        */
/*    suppressors once among seven concepts without teaching the       */
/*    mechanism.                                                       */
/*  - Carved against x60's bio-chromosome-number-structure (which OWNS */
/*    the four structural rearrangements as cytogenetics — this lesson */
/*    owns the translocation-creates-oncogene mechanism),              */
/*    bio-cell-cycle-mitosis-checkpoints (owns checkpoint machinery;   */
/*    this lesson treats checkpoint-gene loss as a cancer mechanism)   */
/*    and bio-mutations-dna-repair (owns letter-level DNA damage).     */
/*  - Book-sourced enrichments re-applied onto origin/main (they had   */
/*    zero live hits there): bio-meiosis-linkage-inheritance kept its  */
/*    merged cis/trans+ceiling enrichment (X66) — NOT duplicated here; */
/*    bio-beyond-mendel-extensions +reciprocal crosses, pseudoautosomal*/
/*    regions, SHOX copy number, TDF/SRY (book ch20) applied in place; */
/*    bio-crispr-gene-editing +adaptation/crRNA-biogenesis/interference*/
/*    lifecycle, spacer-vs-protospacer, PAM self-tolerance (book ch40  */
/*    sec 8) applied in place; cosmid capacity aligned 35-45 -> 30-45  */
/*    kb (book ch29) in bio-biotechnology-rdna-processes.              */
/* ------------------------------------------------------------------ */

export const x72CrossverifyPassTopics: KnowledgeTopic[] = [
  {
    id: 'bio-cancer-genetics-oncogenes',
    title: 'Cancer Genetics: Oncogenes, Tumor Suppressors and Targeted Therapy',
    domain: 'Life Sciences',
    field: 'Genetics & Heredity',
    branch: 'Molecular Genetics',
    tier: 'advanced',
    concepts: [
      'Cancer as clonal evolution driven by accumulated mutations',
      'Oncogenes: proto-oncogenes turned gain-of-function',
      'Tumor suppressor genes and the two-hit rule',
      'Chromosome translocations that manufacture cancer genes',
      'Mutagens and carcinogens as the raw feedstock',
      'Gleevec: rationally designed targeted therapy',
    ],
    words: 1538,
    readMins: 8,
    addedOn: '2026-10-29',
    blocks: [
      {
        kind: 'para',
        text: 'Every cancer begins as a genetics problem inside a single cell. The meiosis lesson tracked mutations passed through the germline; this lesson follows mutations that arise in somatic cells and are never inherited at all — yet they rewrite the cell\u2019s own control circuitry so thoroughly that its descendants take over the body. Cancer genetics is the bookkeeping of that rebellion: which genes, in which order, and why the same handful of pathways keeps showing up in tumors of wildly different tissues. The clinical picture — staging, metastasis, treatment — belongs to the medicine lesson; this one is the mechanism underneath it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Cancer is a leading cause of death worldwide, and every modern therapy that works rationally — from HER2 antibodies in breast cancer to the imatinib pill that turned chronic myeloid leukemia from a fatal disease into a daily tablet — was designed backward from a genetic mechanism. Reading a tumor report today means reading its genes.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The first organizing idea is clonal evolution. A tumor is a population descended from one original mutant cell, and its growth is Darwinian: each additional mutation that speeds division or dodges death lets that lineage outgrow its neighbors, so the strongest variants accumulate. That is why cancer is overwhelmingly a disease of aging tissues — the mutational baggage must be collected over years of cell divisions, and why the body\u2019s normal failure modes matter: a cell that slips past the G1 checkpoint with damaged DNA, the cell-cycle lesson\u2019s central warning, is the seed of the whole process. Cancers are classified by the tissue they arise from — carcinomas from epithelium, sarcomas from connective tissue, leukemias and lymphomas from blood-forming cells — but the genetic logic underneath the classification is shared.',
      },
      {
        kind: 'para',
        text: 'The second idea is the oncogene. A proto-oncogene is a normal gene that pushes cell division forward — a growth factor, a growth-factor receptor, a signal transducer such as RAS, or a transcription factor such as MYC. Cancer can hijack one in three characteristic ways. A point mutation can make the protein hyperactive and unregulated — RAS genes are locked into their GTP-bound ON state in a large share of human tumors. Gene amplification can overproduce the protein — HER2 copies multiply in some breast cancers. And a chromosome rearrangement can weld two genes together: a reciprocal translocation between chromosome 9 and chromosome 22, visible in karyotypes as the shortened Philadelphia chromosome, fuses BCR with ABL to build a constitutively firing kinase that drives chronic myeloid leukemia. All three routes are gain-of-function, and all three behave dominantly at the cellular level: one altered copy is enough, because a hyperactive accelerator cannot be turned down by the good copy on the other homolog.',
      },
      {
        kind: 'para',
        text: 'The third idea is the mirror image: tumor suppressor genes, the brakes. Their cancer-causing mutations are losses of function, and they behave recessively at the cellular level — one working copy usually suffices, which is why both copies must be knocked out before the brake fails. Alfred Knudson drew the consequence in his two-hit hypothesis for retinoblastoma, the childhood eye tumor: children who inherit one defective RB1 allele need only one further somatic hit in any retinal cell, so their tumors appear early and often in both eyes, while children born with two good copies need two independent hits in the same cell line — vastly rarer — so their tumors are rare, late, and unilateral. The RB1 protein gates the G1-to-S transition, and p53 — the guardian of the genome — halts division or triggers apoptosis when DNA is damaged, which is why TP53 is the single most frequently mutated gene in human cancer. BRCA1 and BRCA2 are DNA-repair genes: inheriting one defective copy does not cause cancer by itself but stacks the two-hit deck, the logic behind genetic testing for breast and ovarian cancer risk.',
      },
      {
        kind: 'para',
        text: 'Where does the damage come from? From mutagens and carcinogens — the agents that create the somatic mutations the two classes of genes collect. The letter-level chemistry (tautomeric shifts, deamination, oxidative lesions) is the mutation-and-repair lesson\u2019s territory; cancer genetics cares about the exposure-to-consequence chain. Tobacco smoke carries a cocktail of DNA-adduct-forming chemicals that explains its fingerprint of mutations in lung tumors; ultraviolet light dimerizes adjacent pyrimidines in skin; aflatoxin from mold-contaminated grain prefersentially mutates TP53 in liver. Because the hits accumulate in somatic tissue over a lifetime, exposure control — the largest share of preventable-cancer public health — is population genetics applied to mutation rates.',
      },
      {
        kind: 'example',
        title: 'Worked Example: Reading a Two-Hit Risk',
        steps: [
          'Model the retinoblastoma gene: RB1/RB1 is healthy; one lost copy (RB1/−) leaves the brake partly working; two lost copies (−/−) in the same retinal cell-line release the tumor.',
          'Hereditary case: the child is born RB1/− in every cell. Each of the roughly one million retinal cells needs exactly one further hit to finish the job — so multiple independent tumors are likely, appearing early, often bilateral.',
          'Sporadic case: both hits must land in the same cell lineage by chance during childhood — two rare events multiplied, so the tumor is rare, appears later, and is unilateral.',
          'Read the clinic backward: bilateral or multifocal disease in an infant implies a germline first hit, which changes counseling — the parents, and later the child, face a 50 percent chance of passing the predisposing allele to each offspring.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Targeted therapy designed from the mechanism: imatinib (Gleevec) was built to sit in the BCR-ABL fusion kinase\u2019s ATP-binding pocket and jam it — the textbook\u2019s poster child for genetic research leading to a cancer treatment, and the reason chronic myeloid leukemia became a manageable chronic disease.',
          'Resistance monitoring: imatinib\u2019s patients relapse when the kinase mutates inside the drug\u2019s binding pocket — the same selection logic the antibiotic-resistance lesson documents in bacteria, answered with second-generation inhibitors.',
          'Hereditary cancer clinics: two-hit logic plus BRCA1/2 testing turns family histories into surveillance and prevention decisions.',
          'Karyotyping and FISH find the Philadelphia chromosome and HER2 amplification directly — cytogenetics doing diagnostic work in the oncology ward.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Oncogenes and tumor suppressors behave in opposite ways: gain-of-function is dominant in the cell, loss-of-function is recessive — memorizing the names without the directions is the classic exam error. Inheriting a predisposing allele is not inheriting cancer: penetrance is incomplete, and the second hit is still a matter of chance. And a tumor\u2019s mutations are somatic — the patient\u2019s children inherit nothing from them unless the change sits in the germline.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Proto-oncogene', def: 'A normal gene that promotes cell growth and division; the raw material an oncogene is made from.' },
          { term: 'Oncogene', def: 'A hyperactive or recombined version of a proto-oncogene — growth signaling stuck ON, dominant at the cellular level.' },
          { term: 'Tumor suppressor gene', def: 'A gene whose product restrains division or maintains the genome; cancer requires losing both copies.' },
          { term: 'Two-hit hypothesis', def: 'Knudson\u2019s model: both alleles of a suppressor must be inactivated in one cell lineage for the brake to fail.' },
          { term: 'Philadelphia chromosome', def: 'The shortened chromosome 22 created by a 9;22 translocation, carrying the BCR-ABL fusion kinase of chronic myeloid leukemia.' },
          { term: 'Mutagen / carcinogen', def: 'An agent that damages DNA / an agent that promotes cancer — overlapping sets whose exposure history shapes a tumor\u2019s mutations.' },
          { term: 'Targeted therapy', def: 'A drug designed against a specific cancer mechanism, such as imatinib against the BCR-ABL kinase.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A single altered copy of RAS is enough to push a cell toward cancer, while both copies of TP53 must be lost. The reason is that RAS acts as:',
            options: [
              'a gain-of-function oncogene, dominant at the cellular level',
              'a loss-of-function tumor suppressor',
              'a gene on the X chromosome',
              'a gene repaired by BRCA1',
            ],
            answer: 0,
            explain: 'A hyperactive accelerator cannot be dialed down by the normal copy — gain-of-function is dominant. TP53 must lose both copies: loss-of-function is recessive in the cell.',
          },
          {
            q: 'A child with retinoblastoma has tumors in both eyes diagnosed at six months. The most likely genetic situation is:',
            options: [
              'two somatic hits landed in the same cell by pure chance',
              'an inherited germline RB1 mutation, so every cell is one hit short',
              'exposure to a mutagen during pregnancy',
              'an oncogenic amplification of MYC',
            ],
            answer: 1,
            explain: 'Early, bilateral, multifocal disease is the hereditary (one-hit-short) pattern of the two-hit hypothesis; the sporadic two-hit path is rare, late, and unilateral.',
          },
          {
            q: 'The Philadelphia chromosome arises from:',
            options: [
              'nondisjunction of chromosome 21',
              'a reciprocal translocation between chromosomes 9 and 22 that fuses BCR with ABL',
              'deletion of both TP53 copies',
              'amplification of the HER2 gene',
            ],
            answer: 1,
            explain: 'A structural rearrangement — not a number change — welds two genes into a constitutive kinase; the fusion protein is the target of imatinib.',
          },
          {
            q: 'Patients treated with imatinib can relapse when:',
            options: [
              'the tumor amplifies the TP53 gene',
              'mutations alter the BCR-ABL kinase pocket so the drug no longer binds',
              'the Philadelphia chromosome spontaneously disappears',
              'germline resistance alleles spread through the population',
            ],
            answer: 1,
            explain: 'Selection in the tumor for kinase variants that survive the drug mirrors antibiotic resistance — the mechanism, not the drug, decides the escape route.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The cell-cycle lesson owns the checkpoint machinery these genes police; the mutation-and-repair lesson owns the chemical damage they accumulate; the medicine lesson carries the clinical course — staging, metastasis, and treatment from the patient\u2019s side. The CRISPR lesson is where targeted editing of disease genes is heading next.',
        tone: 'path',
      },
    ],
  },
]
