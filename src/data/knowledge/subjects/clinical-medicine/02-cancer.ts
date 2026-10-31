/**
 * Knowledge Universe — Clinical Medicine — Chapter 02: Cancer
 * 1 lesson · ~1,540 words
 * field: Disease & Treatment
 * legacy sources: health-wellness.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Cancer]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 health-understanding-cancer — Understanding Cancer: From Mutation to Metastasis
 */
import type { KnowledgeTopic } from '../../types'

export const clinicalMedicineCh02: KnowledgeTopic[] = [
  {
    id: 'health-understanding-cancer',
    title: 'Understanding Cancer: From Mutation to Metastasis',
    domain: 'Health & Wellness',
    field: 'Disease & Treatment',
    branch: 'Cancer',
    tier: 'intermediate',
    concepts: [
      'Cancer as a disease of accumulated mutations',
      'Oncogenes and tumor suppressor genes',
      'The hallmarks of a cancer cell',
      'Why tumors stay invisible for years',
      'Metastasis: how cancer travels',
      'Staging with the TNM system',
      'Surgery, chemotherapy, radiation, targeted and immune therapy',
    ],
    words: 1540,
    readMins: 8,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Cancer is not one disease but a family of more than a hundred, all sharing a single origin story: one cell that stops obeying the rules of the cooperative. In a body of thirty trillion cells, division, repair, and self-destruction are tightly governed; cancer is what happens when a cell collects mutations that unlock uncontrolled growth. Oncology, the discipline behind this Disease & Treatment topic, has turned that story from fatalism into engineering. The numbers now show it: in high-income countries roughly one in two people will face a cancer diagnosis in their lifetime, and more than half survive it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Cancer remains a leading cause of death worldwide — about one in six of all deaths — yet survival has climbed decade over decade. Understanding the mechanism dissolves both the mystery and the doom: why screening works, why treatments differ so much between patients, and why "caught early" carries so much weight.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Every time a cell divides it must copy three billion DNA letters, and across the trillions of divisions in a lifetime, errors are inevitable. Most are repaired or harmless; a rare cell gathers the wrong combination — mutations that speed division, ignore restraints, or refuse to die — and every descendant inherits them. Mutations come from chance, from carcinogens like tobacco smoke and ultraviolet light, from viruses such as HPV, or from the lottery of inheritance: BRCA1 and BRCA2 variants, passed through families, account for a small minority of cases but a large share of inherited risk.',
      },
      {
        kind: 'para',
        text: 'The key genes fall into two families. Oncogenes are accelerators: growth-promoting genes that, mutated into a permanently active state, drive division — a single damaged copy suffices. Tumor suppressor genes are brakes: p53, the "guardian of the genome," pauses division for repairs or orders a damaged cell to self-destruct, so both copies must fail before the brake releases. Cancer is genuinely multistep — typically several distinct mutations accumulating over years — which is why risk climbs steeply with age and why cancer is a process, not an event.',
      },
      {
        kind: 'para',
        text: 'The mutations converge on a shared playbook, famously catalogued as the hallmarks of cancer. The malignant cell grows without external orders, ignores the signals that say stop, disables its own suicide program, and switches on telomerase so its chromosomes never shorten and division never times out. It recruits new blood vessels to feed itself, digs through surrounding tissue, and — crucially — hides from immune patrols. Each hallmark is also a vulnerability: a process the cell now depends on, which a drug or a retrained immune system can attack.',
      },
      {
        kind: 'para',
        text: 'Tumor growth is quietly exponential at first: one cell becomes two, four, eight. Thirty doublings produce about a billion cells — roughly one cubic centimeter, close to the smallest lump a scan can reliably find. Doubling times range from weeks for aggressive lymphomas to years for many prostate and breast tumors, which is why a cancer "discovered suddenly" has usually been developing for a decade or more. That long invisible window is the entire opportunity screening exploits: find it at twenty-nine doublings and it is smaller, contained, and far more curable.',
      },
      {
        kind: 'para',
        text: 'Metastasis — spread to distant organs — is what makes cancer lethal: most cancer deaths involve disease beyond the original site. The sequence is brutal and inefficient: tumor cells push into nearby tissue, squeeze into blood or lymph vessels, survive circulation, lodge in a distant capillary bed, and colonize. The lodging is selective — the "seed and soil" idea — which is why different cancers favor different destinations: bowel cancer to the liver, breast cancer to bone, lung cancer to the brain. Once established, the colonies are every bit the parent\'s equal in malignancy.',
      },
      {
        kind: 'para',
        text: 'Oncologists describe a cancer\'s extent with the TNM system: the size and depth of the Tumor, involvement of lymph Nodes, and presence of distant Metastasis, condensed into stages 0 through IV. Broadly, early stage means localized and often curable by surgery alone; stage IV means established spread and shifts the goal toward long-term control. Stage at diagnosis is among the strongest predictors of survival, which is precisely why screening, staging scans, and prompt workups dominate cancer medicine.',
      },
      {
        kind: 'para',
        text: 'Treatment now spans five broad tools, usually in combination. Surgery physically removes localized disease and remains the single best shot at cure when cancer is contained. Radiation therapy aims high-energy beams to shatter DNA in a mapped target while sparing healthy tissue as much as physics allows. Chemotherapy poisons division itself — systemically, which is why fast-dividing marrow, hair roots, and gut lining share the side effects. Targeted therapy exploits a tumor\'s specific mutation: imatinib blocks the aberrant protein made by the Philadelphia chromosome, converting chronic myeloid leukemia into a disease managed with a daily tablet. Immunotherapy removes the brakes with checkpoint inhibitors, or re-engineers T cells outright, so the immune system — whose patrols were introduced in the Life Sciences immunology lesson — does the killing. Which tools, in what order, is decided by tumor type, stage, and increasingly by the tumor\'s own molecular profile.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Exponential tumor growth',
        latex: 'N(t) = N_0 \\cdot 2^{\\,t/T_d}',
        meaning: 'A tumor doubles its cell count every doubling time Td; from one cell, thirty doublings reach about a billion cells — one cubic centimeter, near the threshold of detection.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how long does a tumor with a 60-day doubling time take to grow from a single cell to detectable size — and why does that justify screening?',
          'Recall the governing idea: growth is exponential in doublings, and reliable detection begins near thirty doublings — about one billion cells and one cubic centimeter.',
          'Apply: thirty doublings at sixty days each is 1,800 days, roughly five years of silent growth. Ten further doublings would multiply the burden a thousandfold, from one billion cells toward a trillion; catching the tumor at doubling twenty-five instead of thirty-five means treating a far smaller, better-contained disease.',
          'State the result: the same arithmetic that makes cancer frightening — silent years of doubling — is what makes screening valuable: colonoscopy programs find pre-cancerous polyps inside the decade-long window before malignancy and remove them before cancer begins.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Screening programs — cervical HPV and Pap tests, mammography, colonoscopy and stool tests — are built to catch tumors during their long silent phase.',
          'HPV vaccination prevents cancers at the source, immunizing against the viruses behind most cervical and many throat cancers.',
          'Genetic profiling of tumors now matches patients to targeted drugs and immunotherapies instead of one-size-fits-all chemotherapy.',
          'Staging scans and biopsy results drive the surgery-first versus drug-first decision for every new diagnosis.',
          'Palliative care runs alongside active treatment, managing symptoms and quality of life at every stage — not only at the end.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The most damaging misconception is that cancer is automatically a death sentence: five-year survival now exceeds 70 percent for many common cancers when caught early, and childhood acute lymphoblastic leukemia has climbed from about 10 percent survival in the 1960s to roughly 90 percent today. Two more: biopsies do not meaningfully "release" cancer — the fear delays diagnosis far more than any procedure spreads disease — and no diet starves a tumor: while healthy weight genuinely lowers the risk of several cancers, internet fasting cures do not shrink established ones.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Oncogene', def: 'A growth-promoting gene that drives division when mutated into a permanently active state.' },
          { term: 'Tumor suppressor gene', def: 'A braking gene, such as p53, that must fail on both copies before control is lost.' },
          { term: 'Metastasis', def: 'Spread of cancer from its origin to distant organs; the cause of most cancer deaths.' },
          { term: 'Angiogenesis', def: 'A tumor\'s recruitment of new blood vessels to supply itself.' },
          { term: 'TNM staging', def: 'Describing a cancer\'s extent by tumor size, node involvement, and metastasis presence.' },
          { term: 'Chemotherapy', def: 'Systemic drugs that kill rapidly dividing cells, cancerous and healthy alike.' },
          { term: 'Checkpoint inhibitor', def: 'An immunotherapy that releases molecular brakes on T cells so they attack tumors.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Most cancer deaths are ultimately caused by:',
            options: ['the original tumor pressing on nearby tissue', 'metastatic spread to distant vital organs', 'the side effects of chemotherapy', 'immune system overreaction'],
            answer: 1,
            explain: 'Localized tumors are often curable; it is established distant spread that turns cancer lethal.',
          },
          {
            q: 'A tumor suppressor gene behaves like:',
            options: ['an accelerator with one stuck-on copy', 'a brake that must fail on both copies before control is lost', 'a fuel line feeding the tumor', 'a blood vessel the tumor grows along'],
            answer: 1,
            explain: 'Both copies of a suppressor like p53 must be damaged before the division brake releases.',
          },
          {
            q: 'Chemotherapy causes hair loss, nausea and infection risk because:',
            options: ['the drugs bind receptors in hair and stomach directly', 'hair roots, gut lining and marrow divide fast and share the vulnerability', 'tumors pump toxins into those tissues', 'the drugs lower oxygen delivery everywhere'],
            answer: 1,
            explain: 'Chemotherapy attacks division itself, so every fast-renewing healthy tissue pays the same toll.',
          },
          {
            q: 'Roughly how many doublings does it take a tumor to reach one billion cells — near the detectable size?',
            options: ['Ten', 'Twenty', 'Thirty', 'A thousand'],
            answer: 2,
            explain: 'Thirty doublings — exponential growth\'s quiet head start before anything shows on a scan.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Best read alongside the Life Sciences lessons on the immune system (for immunotherapy\'s machinery) and cell biology. Next steps: how screening tests are evaluated, inherited cancer risk and genetic counseling, and how clinical trials measure survival.',
        tone: 'path',
      },
    ],
  },
]
