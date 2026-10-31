/**
 * Knowledge Universe — Developmental Biology — Chapter 04: Growth, Renewal & Regeneration
 * 1 lesson · ~1,644 words
 * field: Developmental Biology
 * legacy sources: x60-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Growth, Renewal & Regeneration]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 bio-dev-stem-cells-regeneration — Stem Cells and Regeneration: The Body’s Repair Kit and Its Missing Manuals
 */
import type { KnowledgeTopic } from '../../types'

export const developmentalBiologyCh04: KnowledgeTopic[] = [
  {
    id: 'bio-dev-stem-cells-regeneration',
    title: 'Stem Cells and Regeneration: The Body’s Repair Kit and Its Missing Manuals',
    domain: 'Life Sciences',
    field: 'Developmental Biology',
    branch: 'Growth, Renewal & Regeneration',
    tier: 'advanced',
    concepts: [
      'Potency: totipotent, pluripotent, multipotent, unipotent',
      'The stem-cell niche and asymmetric renewal',
      'Planarian neoblasts: whole-body regeneration',
      'The axolotl blastema: lineage restriction and positional memory',
      'Compensatory regeneration: liver and zebrafish heart',
      'Scarring as the mammalian trade-off',
      'iPSCs: reprogramming and the 2012 Nobel',
      'Organoids: stem cells building mini-organs',
    ],
    words: 1644,
    readMins: 8,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'The first chapter of this book followed a single cell through the frantic construction project of embryogenesis — cleavage, gastrulation, organogenesis — and stopped at birth. But bodies are never finished. Your gut lining replaces itself every few days, your blood every few months, your skin continually, and a starfish, a salamander, or a sliced flatworm can rebuild entire limbs and organs in adulthood. The final chapter of developmental biology is therefore about maintenance and repair: the stem cells that keep tissues young, the regenerative programs some animals run and mammals abandoned, and the laboratory tricks that borrow from both. This lesson fills the promise made in the overview — that regeneration limits and stem-cell medicine are their own story.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Regenerative medicine stakes its future on this biology: bone-marrow transplants already save blood-cancer patients with donor stem cells, reprogrammed cells now model diseases that cannot be biopsied, and understanding why a salamander regrows a limb while an amputated human arm scars shut defines the frontier — spinal cord, heart muscle, and pancreas are all waiting.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A stem cell is defined by two powers: self-renewal (making another stem cell) and potency (making specialized descendants). Potency forms a ladder. The zygote and its first few daughters are totipotent — able to make every cell INCLUDING the placenta. Cells of the inner cell mass are pluripotent — every tissue of the body, but not extra-embryonic membranes; these are the embryonic stem cells James Thomson isolated from human embryos in 1998. Most adult tissues hold multipotent reserves: hematopoietic stem cells in marrow make all blood lineages, satellite cells tend muscle, intestinal crypts house the Lgr5-positive columnar cells that Mark Barker and Hans Clevers identified in 2007. At the bottom sit unipotent founders like spermatogonia, which make only sperm but do so for decades.',
      },
      {
        kind: 'para',
        text: 'Stem cells never act alone. In 1978 Ray Schofield proposed the niche: the local microenvironment that instructs a stem cell to stay a stem cell. The intestinal crypt is the textbook case — Wnt signals from surrounding support cells tell Lgr5 cells to divide, while differentiated daughters march up the villus, shed into the lumen within about five days. The gut epithelium you are wearing today was built this week. The niche explains why stem cells transplanted without their context misbehave, why cancers hijack niche signals (colorectal tumors almost always carry Wnt-pathway mutations), and why aging tissues fail — the niche stiffens and signals fade.',
      },
      {
        kind: 'para',
        text: 'For whole-body regeneration, no animal beats the planarian flatworm, which puzzled naturalists as far back as 1814. Scattered through its body are neoblasts — about a fifth to a quarter of all its cells, the only known pluripotent adult stem cells in the animal kingdom. In 2011 Daniel Wagner, Wang and Peter Reddien showed the decisive experiment: lethally irradiated planarians die, but a SINGLE clonogenic neoblast transplanted into one can rescue it, repopulating every lineage. Planarians also solve the positional puzzle — after cutting, they must decide head versus tail. Wnt/beta-catenin signaling draws the line: high activity builds a tail, suppressed activity builds a head, and toggling the pathway makes two-headed or two-tailed animals. T. H. Morgan studied exactly these tricks around 1900, grew skeptical, and left the field to found genetics instead.',
      },
      {
        kind: 'para',
        text: 'The salamander limb is the vertebrate dream. After amputation, epidermal cells seal the stump into a wound epidermis whose apical cap secretes growth factors; beneath it, mature cells re-enter the cell cycle and aggregate into the blastema — once imagined as a bag of embryonic stem cells, now known by lineage tracing (Kragl and colleagues, 2009) to be lineage-RESTRICTED: dermal fibroblasts rebuild cartilage, tendon and dermis, muscle makes muscle, Schwann cells make neurons. The blastema is a Self-Organizing patch that remembers where it came from: proximal and distal blastemas carry different Hox codes, and when grafted together they intercalate the missing positions between them. Regrowth also depends on nerves, which supply growth factors such as nAG. Why can a human not do this? The mammalian answer is speed: fibroblast-driven scarring closes wounds in days to block infection and bleeding, at the price of rebuilding nothing — a trade-off a long-lived, cancer-prone animal may simply have bought.',
      },
      {
        kind: 'para',
        text: 'Mammals are not hopeless — they regenerate selectively by compensatory hyperplasia. Remove two-thirds of a rat liver and the remainder restores full mass within about ten days (the 1931 Higgins–Anderson partial hepatectomy), not from stem cells but from quiescent hepatocytes re-entering the cell cycle in a wave of perfectly tuned proliferation. The zebrafish heart regenerates up to a fifth of its muscle after resection (Poss, Wilson and Keating, 2002), and even the neonatal mouse heart regenerates for about its first week of life (Porrello and colleagues, 2011) before the window slams shut and infarcts heal into permanent fibrotic scar. These natural experiments mark exactly what adult human cardiac medicine would need to reopen.',
      },
      {
        kind: 'para',
        text: 'The laboratory shortcut around all of it arrived in 2006. Shinya Yamanaka screened twenty-four candidate transcription factors and found that just four — Oct4, Sox2, Klf4 and c-Myc — could rewind a skin fibroblast to an embryonic-stem-like state. These induced pluripotent stem cells (iPSCs) earned Yamanaka the 2012 Nobel Prize alongside John Gurdon, whose 1962 nuclear-transfer frog cloning proved the same principle with technology instead of genes: an adult nucleus still holds a complete program. iPSCs now power patient-specific disease models, drug screens and — carefully — cell therapies, starting with the 2014 autologous retinal-pigment graft in Japan. The same niche logic, harnessed in a gel, lets a single Lgr5 gut stem cell grow into a hollow, folding intestinal organoid (Sato and colleagues, 2009), the founding act of organoid medicine.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Exponential renewal',
        latex: 'N(t) = N_0\\,2^{t/T_d}',
        meaning: 'A stem-cell population (or a clonally expanding organoid) doubling every T_d: one crypt cell dividing daily for a week yields a 2^7 = 128-fold expansion. The same arithmetic, unchecked, is why potency must be niched and why cancers, which steal this program, grow exponentially.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how many usable iPSC lines come from one typical reprogramming run.',
          'Plate 40,000 skin fibroblasts and deliver the four Yamanaka factors; reprogramming efficiency is roughly 0.05%, so about 40,000 × 0.0005 = 20 colonies emerge.',
          'Quality-gate the colonies: karyotyping rejects 4 for chromosomal abnormalities, pluripotency markers (OCT4, NANOG, SSEA-4) confirm 12 of the remaining 16.',
          'Expand the 3 cleanest clones for banking; one slows during scale-up, leaving 2 stable patient-specific lines.',
          'Interpret: the pipeline converts one biopsy into two disease-in-a-dish lines — and shows why the field reports efficiency, karyotype and marker data rather than colony counts alone.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Bone-marrow transplantation — medicine\u2019s original stem-cell therapy, since 1968 — is donor hematopoietic rescue after marrow-lethal chemotherapy',
          'Corneal limbal grafts and cultured epidermal sheets (a gene-corrected autograft rebuilt nearly the whole skin of a boy with junctional epidermolysis bullosa in 2017)',
          'iPSC disease models: cardiomyocytes from a long-QT patient beat in a dish, letting drug candidates be screened against the actual mutation',
          'Organoid drug testing: cystic fibrosis rectal organoids predict patient response to CFTR modulators before prescription',
          'Axolotl and planarian research programs mining gene-expression atlases for the regeneration rules mammals lost',
          'Cosmetics and pharma alike coin \u201cstem-cell\u201d claims — consumer literacy in this lesson\u2019s biology is the antidote',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not picture adult stem cells as universal spare parts — most are multipotent prisoners of their niche. Do not call the blastema a stem-cell blob: its cells are lineage-restricted veterans with positional memory. iPSCs are not embryonic stem cells either — residual epigenetic memory and reprogramming mutations complicate comparisons. And scars are not simple failures; they are the fast patch evolution chose, which is why \u201cjust regenerate it\u201d is harder than it sounds.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Potency', def: 'The range of fates a stem cell can produce: totipotent (everything incl. placenta), pluripotent (all body tissues), multipotent, unipotent.' },
          { term: 'Niche', def: 'The local microenvironment of signals (e.g. Wnt in the crypt) that keeps a stem cell renewing and directs its output.' },
          { term: 'Neoblast', def: 'The planarian\u2019s pluripotent adult stem cell — about a fifth of all its cells; a single clonogenic neoblast can rescue an irradiated worm.' },
          { term: 'Blastema', def: 'The accumulation of lineage-restricted, positionally coded progenitors beneath the wound epidermis of a regenerating salamander limb.' },
          { term: 'Compensatory regeneration', def: 'Mass restoration by existing differentiated cells re-entering the cycle, as in liver hyperplasia — no stem cells involved.' },
          { term: 'iPSC', def: 'Induced pluripotent stem cell: a differentiated cell rewound by the Yamanaka factors to an embryonic-like state.' },
          { term: 'Organoid', def: 'A self-organizing mini-organ grown from stem cells in a gel, e.g. a gut organoid from one Lgr5+ cell.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Cells of the inner cell mass are pluripotent, which means they can make:',
            options: [
              'every cell of the body plus the placenta',
              'every tissue of the embryonic body but not the extra-embryonic membranes',
              'only blood lineages',
              'only cells of the same germ layer',
            ],
            answer: 1,
            explain: 'Totipotency (zygote, first divisions) includes placenta; the inner cell mass is the pluripotent source of embryonic stem cells.',
          },
          {
            q: 'Lineage tracing of the axolotl blastema showed that it is:',
            options: [
              'a uniform population of pluripotent stem cells',
              'composed of lineage-restricted progenitors — dermis makes cartilage and tendon, muscle makes muscle',
              'built entirely from circulating blood cells',
              'formed only from nerve cells',
            ],
            answer: 1,
            explain: 'Kragl et al. (2009): each blastema cell respects its heritage; the regeneration meme of a blank-slate blob is wrong.',
          },
          {
            q: 'The human liver\u2019s regenerative power rests mainly on:',
            options: [
              'a dedicated liver stem cell that rebuilds lobules',
              'quiescent hepatocytes re-entering the cell cycle in compensatory hyperplasia',
              'scarring that converts to liver tissue',
              'transplanted iPSCs',
            ],
            answer: 1,
            explain: 'After partial hepatectomy, existing hepatocytes proliferate to restore mass — stem-cell-based repair only appears under extreme injury.',
          },
          {
            q: 'The 2012 Nobel-winning reprogramming experiment showed that:',
            options: [
              'four transcription factors can rewind a differentiated cell to a pluripotent state',
              'adult cells cannot change fate',
              'only eggs can reprogram genomes',
              'embryos must be destroyed to obtain stem cells',
            ],
            answer: 0,
            explain: 'Yamanaka\u2019s Oct4/Sox2/Klf4/c-Myc cocktail created iPSCs, completing the program Gurdon\u2019s nuclear transfer had begun in 1962.',
          },
        ],
      },
    ],
  },
]
