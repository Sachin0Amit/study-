import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X79 pass (2026-10-30): CROSSVERIFY-20261030-3 — Microbiology &     */
/*  Immunology (book #10 in knowledge-meta order, first subject not    */
/*  yet marked done).                                                  */
/*                                                                     */
/*  BOOK LADDER (internet-research run — no legitimate free full PDF   */
/*  of the commercial bestsellers exists): the world's three best-     */
/*  selling microbiology texts were ranked and their OFFICIAL          */
/*  publisher materials read — Tortora/Case/Bair/Weber/Funke,          */
/*  "Microbiology: An Introduction", 14th ed. (Pearson, 2023; official */
/*  Pearson title sheet: immunology chapters 17-19, mRNA-vaccine       */
/*  updates); Madigan/Bender/Buckley/Sattley/Stahl, "Brock Biology of  */
/*  Microorganisms", 16th ed. Global Edition (Pearson, 2021; OFFICIAL  */
/*  section-level TOC PDF — units 6-7 give the exact scope: ch. 5      */
/*  Viruses and Their Multiplication, ch. 25 Microbial Infection and   */
/*  Pathogenesis, ch. 26 Innate Immunity, ch. 27 Adaptive Immunity,    */
/*  ch. 28 Immune Disorders and Antimicrobial Therapy, ch. 29          */
/*  Diagnosing Infectious Diseases, ch. 30 Epidemiology); Willey/      */
/*  Sandman/Wood, "Prescott's Microbiology", 11th ed. (McGraw-Hill,    */
/*  2020; official sample-chapter PDF). Baron S. (ed.), "Medical       */
/*  Microbiology", 4th ed. (UTMB Galveston, 1996) — the standard       */
/*  medical text — was confirmed as full text on NCBI Bookshelf        */
/*  (NBK7627) and its chapter metadata pulled via the NCBI             */
/*  E-utilities API (esearch/esummary, db=books) after the Bookshelf   */
/*  web UI raised an interactive reCAPTCHA that blocked both curl and  */
/*  the headless browser. Pirate mirrors of Tortora/Brock/Prescott     */
/*  surfaced by search were rejected on sight (no legitimate full      */
/*  PDFs exist). Facts in the new lessons were verified against the    */
/*  official materials above plus open-authority sources (CDC/WHO      */
/*  primers, PMC open-access literature, Nobel Prize registries).      */
/*                                                                     */
/*  COVERAGE cross-check vs Brock 16e in-scope chapters:               */
/*   - Ch5 (viruses) -> field guide covers WHAT viruses are;           */
/*     MISSING: the replication cycle itself -> NEW lesson             */
/*     bio-virus-replication-cycle (5.1-5.7 scope: virion anatomy,     */
/*     five-step cycle, T4 lytic model + one-step growth, temperate    */
/*     phages/lysogeny, eukaryote RNA/retrovirus playbooks).           */
/*   - Ch25 (pathogenesis) -> MISSING wholesale (adherence,            */
/*     pathogenicity vs virulence, ID50, enzymes, AB exotoxins,        */
/*     superantigens, endotoxin) -> NEW lesson                         */
/*     bio-pathogen-virulence-toxins. Koch's postulates had ZERO live  */
/*     hits (grep: only relativity 'postulates').                      */
/*   - Ch26 (innate) -> overview lesson owns barriers/inflammation/    */
/*     adaptive arm; MISSING the machine room: PRRs/TLRs (ZERO live    */
/*     hits), complement cascade (ZERO real hits — x56 'complementary' */
/*     false positives), interferons (ZERO hits), opsonization (ZERO   */
/*     hits) -> NEW lesson bio-innate-defenses-complement.             */
/*   - Ch27 (adaptive) -> covered by bio-immune-system; ENRICHED in    */
/*     place with the antibody isotypes + class switching para that    */
/*     Brock 27.3 scope expects (isotypes had no live owner).          */
/*   - Ch28 (disorders/antimicrobials) -> allergy/hypersensitivity/    */
/*     autoimmunity owned by the existing four-type hypersensitivity   */
/*     lesson (life-sciences); antibacterial drug classes + resistance */
/*     owned by bio-microbe-antibiotic-resistance. NOT duplicated.     */
/*   - Ch29 (diagnosis) -> ELISA/PCR/rapid tests owned by the          */
/*     biotechnology book's molecular-diagnostics lesson (x14).        */
/*     NOT duplicated here.                                            */
/*   - Ch30 (epidemiology) -> transmission/R_t/herd immunity owned by  */
/*     the health & social-science lessons. NOT duplicated here.       */
/*                                                                     */
/*  VERDICTS on existing lessons (all four read in full): no factual   */
/*  corrections required — peptidoglycan/binary-fission/chitin/capsid  */
/*  framing, 38-trillion microbiome census (Sender/Fuchs/Milo 2016),   */
/*  FMT 85-90% for recurrent C. difficile, V(D)J arithmetic 45x23x6 x  */
/*  40x5 = 1.24M, WHO top-ten AMR framing, ~2/3 livestock antibiotic   */
/*  share, and the O'Neill 10-million-deaths-by-2050 projection all    */
/*  match the authoritative sources. The book was thin, not wrong —    */
/*  three wholesale gaps filled, one lesson deepened.                  */
/*                                                                     */
/*  CARVING (documented per lesson below): CRISPR spacer memory ->     */
/*  bio-crispr-gene-editing; plasmid HGT mechanics ->                  */
/*  bio-microbe-antibiotic-resistance; viroids/prions taxonomy ->      */
/*  bio-classification-five-kingdoms; ELISA/diagnostics -> biotech     */
/*  x14; epidemiology/transmission -> health lessons; hypersensitivity */
/*  classes -> existing allergy lesson; biofilms get the deep cut in   */
/*  the resistance lesson — the virulence lesson owns adhesion and     */
/*  toxins. All three ids grep-verified absent before writing.         */
/* ------------------------------------------------------------------ */

export const x79CrossverifyMicrobiologyTopics: KnowledgeTopic[] = [
  {
    id: 'bio-virus-replication-cycle',
    title: 'How Viruses Multiply: From Attachment to Burst',
    domain: 'Life Sciences',
    field: 'Microbiology & Disease',
    branch: 'Microbes and Infection',
    tier: 'intermediate',
    concepts: [
      'Virion anatomy: capsids and envelopes',
      'The five steps of the replication cycle',
      'Bacteriophage T4: the lytic clock',
      'Temperate phages and lysogenic conversion',
      'The eukaryote playbooks: RNA viruses and retroviruses',
      'Why the cycle decides the antiviral',
    ],
    words: 2050,
    readMins: 10,
    addedOn: '2026-10-30',
    blocks: [
      {
        kind: 'para',
        text: 'The field guide answered what a virus is — a genome in a coat, inert until it meets a cell. This lesson answers the question that follows: what exactly happens once it does? Multiplication is the whole of virology\'s drama, because a virus can neither grow nor divide; every copy of every virus on Earth was assembled inside a living cell by hijacked machinery. Walking one full cycle — attachment, penetration, biosynthesis, maturation, release — explains why phages clock their kills to the minute, why some infections go dormant inside DNA, why retroviruses need an enzyme nobody thought existed, and why each step of the cycle is a different antiviral target. (Core scope cross-checked against Madigan et al., Brock Biology of Microorganisms, 16th ed., chapter 5, official Pearson TOC; Tortora et al., Microbiology: An Introduction, 14th ed., virus chapters; facts verified against NCBI Bookshelf metadata for Baron, Medical Microbiology, 4th ed. and CDC primers.)',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every antiviral on the pharmacy shelf is an attack on one step of this cycle — attachment blockers, fusion inhibitors, reverse-transcriptase inhibitors, release inhibitors — and every emerging-virus headline (SARS-CoV-2, mpox, H5N1) is a claim about how a particular virion enters, copies, and exits. Read the cycle once and the whole pharmacology of antivirals stops being a list and becomes a map.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Virion anatomy: capsids and envelopes. The infectious particle is built to survive the trip between cells. Its genome — DNA or RNA, single- or double-stranded, but never both — sits inside a capsid, a coat of protein subunits that self-assembles with crystalline regularity into one of two great shapes: a helix (tobacco mosaic virus\'s rigid rod) or an icosahedron (the twenty-sided soccer-ball geometry of poliovirus and adenovirus). Many animal viruses wrap this nucleocapsid in an envelope, a bit of host membrane stolen as the virus exits, studded with viral glycoproteins that do the door-knocking on the next cell. The envelope is both a key and a weakness: it lets influenza and HIV slide past cell membranes smoothly, but it dissolves in soap, alcohol and drying — which is exactly why enveloped viruses like influenza and SARS-CoV-2 spread by droplets while naked, envelope-less viruses like norovirus and poliovirus survive on doorknobs for weeks and shrug off hand sanitizer.',
      },
      {
        kind: 'para',
        text: 'The five steps of the replication cycle. Bacteriophage work gave biology the canonical choreography, and every virus runs some version of it. Attachment: a viral surface protein binds a specific receptor on the host — the lock-and-key fit that decides a virus\'s host range, and why phages are species- and even strain-specific. Penetration: the genome gets in, the capsid mostly does not — phages inject like a syringe after T-even tails contract, animal viruses enter whole by membrane fusion or endocytosis and then uncoat. Biosynthesis: the genome reprograms the cell; viral nucleic acids are replicated and viral proteins are made on host ribosomes. Maturation: parts self-assemble into hundreds of new virions. Release: the cell ruptures (lysis) or the virus buds out, wearing a piece of membrane as its envelope. The cycle is the reason viruses were once called "filterable agents of contagion": between cycles they are objects, inside cells they are instructions.',
      },
      {
        kind: 'para',
        text: 'Bacteriophage T4: the lytic clock. The E. coli phage T4 is the model lytic virus — a 169-kilobase double-stranded DNA genome in an icosahedral head riding a contractile tail. Timing its kill required a clever experiment: Ellis and Delbrück\'s one-step growth curve (1939), which synchronized thousands of infections at once and then counted infectious particles over time. The result was a rhythm every virologist now memorizes. During the eclipse period (roughly the first 12 minutes for T4) no infectious virions exist inside the cell — the genome is naked, busy being replicated and transcribed. At about 25 minutes the latent period ends and infective progeny appear; minutes later the cell lyses and releases its burst of new phages — burst sizes of roughly 50 to 300 are typical for T4. Lysis is deliberate sabotage: a phage-encoded enzyme, lysozyme, chews the cell wall from within at the programmed moment.',
      },
      {
        kind: 'para',
        text: 'Temperate phages and lysogenic conversion. Lysis is not the only exit. Temperate phages such as lambda, infecting E. coli, can choose the lysogenic pathway: instead of hijacking the cell, the phage genome integrates into the host chromosome as a prophage and rides along silently, copied into every descendant for generations. Lambda\'s choice is a genuine molecular decision — crowding and cell health are polled — and the dormant prophage also grants superinfection immunity, blocking other lambda phages from entering. The medical punchline is lysogenic conversion: the prophage contributes traits that transform the bacterium\'s phenotype. The toxin gene of Corynebacterium diphtheriae sits on a prophage; so does the cholera toxin of Vibrio cholerae (carried by the filamentous phage CTXφ) and the Shiga toxin of the most dangerous E. coli O157 strains. The bacteria that make these diseases are, in a real sense, phage-infected cells — a bacterium cured of its prophage loses its disease-causing power. (CRISPR, the bacterial counter-memory against phages, is the crispr lesson\'s story.)',
      },
      {
        kind: 'para',
        text: 'The eukaryote playbooks: RNA viruses and retroviruses. Animal viruses add variations the phage model does not show. Entry is whole-virion — enveloped viruses fuse their envelope with the plasma membrane (HIV) or are swallowed into endosomes (influenza), while naked viruses trigger their own endocytosis. Where the genome replicates depends on its chemistry: most RNA viruses do all their work in the cytoplasm, but a positive-strand RNA genome like SARS-CoV-2\'s can be translated immediately on arrival, first making the replication enzymes that then build the negative-strand template factory. Negative-strand viruses (influenza, rabies) must first carry in their own RNA-dependent RNA polymerase, because no cell can read negative RNA. The deepest twist belongs to the retroviruses: HIV carries reverse transcriptase, the enzyme Temin and Baltimore discovered in 1970, which copies viral RNA into DNA for permanent integration into the host genome — the provirus strategy that makes HIV infection lifelong. Baltimore\'s 1971 classification sorts all viruses into seven classes by exactly these genome-to-mRNA routes.',
      },
      {
        kind: 'para',
        text: 'Why the cycle decides the antiviral. Each step is a different target, and the best antivirals are step-specific. Attachment: entry inhibitors block HIV\'s gp120 from engaging CCR5. Penetration and uncoating: amantadine-class drugs once blocked influenza\'s M2 ion channel uncoating step. Biosynthesis: reverse-transcriptase inhibitors (AZT and its descendants, nucleoside analogues that terminate the growing DNA chain) corner the retrovirus; polymerase and protease inhibitors starve SARS-CoV-2\'s cytoplasmic factory — nirmatrelvir jams the viral main protease that cuts its polyproteins. Release: neuraminidase inhibitors like oseltamivir stop influenza from clipping itself free of sialic acid, caging new virions on the cell surface. This step logic also explains the failures: an antibiotic has no step of this cycle to attack, and a drug aimed at the replication machinery of an RNA virus must dodge the mutation storm those polymerases generate — resistance is the cycle\'s shadow.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Burst size is not eclipse timing: the eclipse period is the stretch when no infectious virion exists inside the infected cell, while the latent period ends when the first infective progeny appear — mixing them up reverses the clock. Lysogeny is not viral hibernation in the cytoplasm: the prophage is integrated into the chromosome and replicated as DNA, not stored as a particle. "Positive-strand RNA" does not always mean "ready mRNA": it can be translated immediately, which is precisely the definition — but the viral polymerases for negative strands must arrive in the virion. And antibiotics remain irrelevant at every step: no stage of a viral cycle offers bacterial machinery to sabotage.',
        tone: 'warn',
      },
      {
        kind: 'example',
        title: 'Worked Example — The One-Step Growth Arithmetic',
        steps: [
          'Recall the clock: T4\'s latent period is about 25 minutes, and one lytic burst releases on the order of 100 phages (50-300 typical).',
          'Cycle one: a single T4 infecting one E. coli at time zero releases about 100 phages at minute 25.',
          'Cycle two: at full density those 100 find fresh host cells and burst by about minute 50 — 100 × 100 = 10,000 phages.',
          'Cycle three: by about minute 75, 10,000 bursts become 10,000 × 100 = 1,000,000 — a million-fold increase inside seventy-five minutes.',
          'This is why a bacteriophage culture can lyse to clarity overnight, why early bacterial growth curves "crash" when phages arrive, and why the one-step growth experiment needed synchronized infection to see the discrete steps at all.',
        ],
      },
      { kind: 'heading', text: 'Applications' },
      {
        kind: 'list',
        items: [
          'Antiviral design is cycle mapping: each approved class — entry, fusion, uncoating, polymerase, protease, integrase, release inhibitors — names the step it arrests.',
          'Phage therapy revisits the lytic clock against antibiotic-resistant bacteria; the choice of strictly lytic phages (never temperate ones) is a direct consequence of lysogeny biology.',
          'Toxoid vaccines for diphtheria exist because lysogenic conversion puts the toxin gene on a prophage — disarm the toxin, and the phage-armed bacterium loses its tooth.',
          'Diagnostic choice follows genome chemistry: RT-PCR for RNA viruses, culture and plaque assay for phage work, antigen tests for the proteins the biosynthesis step makes.',
          'Epidemic control exploits the envelope: soap, alcohol and bleach wreck enveloped viruses but leave naked norovirus intact — which is why norovirus outbreaks demand bleach protocols.',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: 'Capsid', def: 'The protein coat surrounding a viral genome, self-assembled from identical subunits into helical or icosahedral symmetry.' },
          { term: 'Envelope', def: 'A host-derived membrane layer around some virions, carrying viral glycoproteins; dissolvable by soap and alcohol.' },
          { term: 'Eclipse period', def: 'The early phase of infection during which no infectious virion exists inside the cell — genome and parts only.' },
          { term: 'Latent period', def: 'The time from infection to first appearance of new infective extracellular progeny (about 25 minutes for T4).' },
          { term: 'Burst size', def: 'The number of virions released per lysed cell — typically 50-300 for T4.' },
          { term: 'Prophage', def: 'A temperate phage genome integrated into the host chromosome and replicated with it during lysogeny.' },
          { term: 'Lysogenic conversion', def: 'A phenotype change conferred on the host bacterium by prophage genes — diphtheria, cholera and Shiga toxins all ride prophages.' },
          { term: 'Reverse transcriptase', def: 'The RNA-dependent DNA polymerase carried by retroviruses, converting their RNA genome into DNA for integration (Temin & Baltimore, 1970).' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'During the eclipse period of a T4 infection, inside the infected cell you would find:',
            options: [
              'no viral material at all',
              'complete virions waiting to be released',
              'viral DNA and proteins, but no assembled infectious virions',
              'prophage DNA integrated into the chromosome',
            ],
            answer: 2,
            explain: 'The eclipse period is defined by the absence of infectious virions inside the cell — the genome is being replicated and the parts are being made, but assembly has not caught up. The latent period ends when the first infective progeny exist.',
          },
          {
            q: 'A lysogenized Corynebacterium diphtheriae that is cured of its prophage will:',
            options: [
              'multiply faster',
              'lose the ability to make diphtheria toxin',
              'become resistant to all phages',
              'switch to the lytic cycle immediately',
            ],
            answer: 1,
            explain: 'The toxin gene is carried on the prophage — lysogenic conversion is the prophage\'s contribution to the host phenotype, so losing the prophage strips the toxin and the disease-causing power with it.',
          },
          {
            q: 'SARS-CoV-2 and influenza are both enveloped RNA viruses, yet SARS-CoV-2 can start making protein immediately on entry while influenza cannot. The reason is:',
            options: [
              'influenza has no genes',
              'SARS-CoV-2\'s genome is positive-strand RNA that ribosomes read directly; influenza\'s negative-strand genome must first be copied by a polymerase the virion carries in',
              'influenza replicates in the nucleus and is therefore slower to translate',
              'SARS-CoV-2 has a DNA intermediate',
            ],
            answer: 1,
            explain: 'Positive-strand RNA genomes are mRNA-equivalent and translatable on arrival; negative-strand genomes require a packaged RNA-dependent RNA polymerase before any protein can be made. (Influenza does replicate in the nucleus, but the immediate constraint is its negative-sense genome.)',
          },
          {
            q: 'Oseltamivir (Tamiflu) shortens influenza by attacking which step of the cycle?',
            options: ['attachment to ACE2', 'release of new virions from the cell surface', 'uncoating in the endosome', 'integration of the provirus'],
            answer: 1,
            explain: 'Neuraminidase inhibitors block the enzyme influenza uses to clip its new virions free of sialic acid on the cell — caging the burst. Attachment is ACE2-based for SARS-CoV-2, not influenza; integration belongs to retroviruses.',
          },
          {
            q: 'Why does hand sanitizer fail against norovirus while it works well against influenza?',
            options: [
              'norovirus mutates faster',
              'norovirus is a naked virus with no envelope for the alcohol to dissolve',
              'norovirus hides inside stomach acid',
              'influenza is a bacterium',
            ],
            answer: 1,
            explain: 'Alcohol disrupts lipid membranes; the enveloped influenza virion dissolves, while the envelope-less norovirus capsid survives. That structural fact drives the bleach-based protocols for norovirus outbreaks.',
          },
        ],
      },
    ],
  },
  {
    id: 'bio-pathogen-virulence-toxins',
    title: 'How Microbes Cause Disease: Adhesion, Invasion, Toxins',
    domain: 'Life Sciences',
    field: 'Microbiology & Disease',
    branch: 'Microbes and Infection',
    tier: 'intermediate',
    concepts: [
      'Portals of entry and the disease ledger',
      'Adhesion: the first handshake',
      'Pathogenicity, virulence and the ID50',
      "Koch's postulates and their limits",
      'Enzymes as invasion tools',
      'Exotoxins, endotoxin and superantigens',
    ],
    words: 2195,
    readMins: 11,
    addedOn: '2026-10-30',
    blocks: [
      {
        kind: 'para',
        text: 'The field guide maps the microbes; the replication lesson shows how viruses multiply. This lesson takes up the question between them and the drug cabinet: what, mechanically, makes a microbe a pathogen? Virulence is not a property of being a "germ" — it is an inventory of tools: adherence molecules that grip, enzymes that cut a path through tissue, toxins that sabotage cells at femtogram precision, and molecular camouflage that stalls the immune response. Every tool here was discovered in a textbook-versus-patient collision — why diphtheria kills a cell it never even enters, why a hundred Shigella can fell an adult while a hundred thousand Salmonella are needed, why tampons once caused toxic shock. This is the pathogenesis lesson that the antibiotic-resistance and immune lessons both lean on. (Core scope cross-checked against Madigan et al., Brock Biology of Microorganisms, 16th ed., chapter 25, official Pearson TOC; Tortora et al., Microbiology: An Introduction, 14th ed., chapters 14-15; facts verified against NCBI Bookshelf metadata for Baron, Medical Microbiology, 4th ed. and CDC primers.)',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Pathogenesis is the bridge discipline: it explains the Gram stain\'s clinical weight (LPS lives in the outer membrane), the design of toxoid vaccines, the sepsis protocols in every ICU, and why the same bacterium is harmless in one body site and lethal in another. It also teaches the discipline\'s central humility — pathogenicity is a property of the partnership between microbe, dose, portal and host, not of the microbe alone.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Portals of entry and the disease ledger. Pathogens enter through four main doors: mucous membranes of the respiratory tract (the busiest — influenza, tuberculosis, measles), the gastrointestinal tract (cholera, typhoid, polio — which must survive stomach acid first), the genitourinary tract (gonorrhea, chlamydia, HIV), and breaches of the skin — wounds, bites, needles (tetanus, rabies, malaria via mosquito). Some microbes are portal-loyal: Streptococcus pneumoniae causes pneumonia in the lung but rarely disease elsewhere; others are portal-versatile. Where a microbe lands partly decides what disease it causes, which is why "the same bacterium" can be a bronchitis nuisance in one place and a meningitis emergency in another — the route is part of the recipe.',
      },
      {
        kind: 'para',
        text: 'Adhesion: the first handshake. A pathogen that cannot grip gets washed away — by mucus flow, urine, tears, the ciliary escalator. Adhesion is therefore the first virulence factor: adhesins, surface molecules on fimbriae (pili), glycocalyces or the microbial cell wall itself, bind specific receptors on host tissue. E. coli strains that cause traveler\'s diarrhea carry fimbrial adhesins that grip intestinal cells; the uropathogenic strains grip bladder epithelium instead. Neisseria gonorrhoeae swaps its fimbrial type at high frequency, renewing the grip and dodging antibodies built against the last one. Attached communities mature into biofilms — dental plaque and catheter films are adhesion made architectural — and the resistance lesson owns biofilm persistence; here the point is the grip itself, because without it nothing downstream matters.',
      },
      {
        kind: 'para',
        text: 'Pathogenicity, virulence and the ID50. Pathogenicity is the capacity to cause disease; virulence is its intensity, measured — in the lab — as the dose that produces the effect in a defined fraction of hosts. The ID50 is the dose that infects 50 percent of a test population; the LD50, the dose that kills it. The numbers are shockingly uneven, and dose-response is dose-gated: for Shigella dysenteriae, as few as 10-100 cells can cause dysentery, while a non-typhoidal Salmonella typically needs hundreds of thousands — the difference is partly survival chemistry (Shigella tolerates stomach acid) and partly tool kit. Stomach acid is the great gatekeeper: Vibrio cholerae\'s ID50 collapses from millions to a few thousand when the acid is neutralized by antacids. Dose, portal and host defenses set the bar that a microbe\'s tools must clear.',
      },
      {
        kind: 'para',
        text: 'Koch\'s postulates and their limits. The 1870s-1880s work of Robert Koch with Bacillus anthracis and Mycobacterium tuberculosis gave microbiology its causality test: the suspected agent must be found in every case, isolated and grown in pure culture, cause the disease when inoculated into a healthy host, and be re-isolated from that host. The postulates built the golden age of medical microbiology — but they bend at the edges, and the exceptions teach as much as the rules. Some pathogens have never been cultured (Mycobacterium leprae, the leprosy bacillus, grows only in armadillos and mice); Typhoid Mary Mallon carried Salmonella typhi for decades while staying healthy — asymptomatic carriers break "found in every case"; and ethics forbids the human inoculation step, which is why volunteers and animal models matter. HIV was accepted as the cause of AIDS through modified postulates — a lesson in how a great framework flexes without breaking.',
      },
      {
        kind: 'para',
        text: 'Enzymes as invasion tools. Once attached, many bacteria secrete enzymes that open the terrain. Hyaluronidase digests hyaluronic acid, the cement between cells — the classic "spreading factor" that lets streptococci fan out from a wound. Collagenase dissolves collagen fibers; gas gangrene clostridia use it to tunnel through muscle. Coagulase is double-edged subterfuge: Staphylococcus aureus uses it to clot fibrin around itself, a shield from phagocytes — then staphylokinase dissolves the clot to let the colony escape. Neisseria and Haemophilus secrete IgA protease, cutting the antibody class that guards mucous surfaces. Each enzyme is a virulence factor because each maps to a host defense; the inventory of tools is a mirror of the barriers it faces.',
      },
      {
        kind: 'para',
        text: 'Exotoxins: precision weapons. Exotoxins are proteins, mostly secreted by living Gram-positive bacteria (though Gram-negatives make them too), often encoded on plasmids or prophages, and — the gift to medicine — convertible into toxoids: chemically inactivated vaccines. The most elegant design is the A-B toxin: a B subunit binds a specific receptor and threads the A subunit in; A does the chemistry. Diphtheria toxin\'s A fragment ADP-ribosylates elongation factor 2, freezing all protein synthesis in one stroke — a single molecule can kill a cell. Tetanus and botulinum toxins are sister proteases of the SNARE machinery that neurotransmission runs on: tetanospasmin blocks inhibitory interneurons and produces rigid spastic paralysis; botulinum blocks acetylcholine release at the neuromuscular junction and produces flaccid paralysis — the same molecular scissors, aimed at different neurons, producing opposite catastrophes. Cholera\'s A subunit locks the Gs signaling protein in its on-state, flooding intestinal cells with cAMP; chloride pours out, water follows, and the patient loses liters per day. Botulinum toxin is among the most potent natural poisons known — lethal doses sit in the nanogram-per-kilogram range — yet the same molecule, dosed in picograms, is Botox and a treatment for muscle spasm.',
      },
      {
        kind: 'para',
        text: 'Superantigens and endotoxin. Two more weapons round the arsenal. Superantigens — Staphylococcus aureus toxic shock syndrome toxin-1 among them — cheat the T-cell system: instead of being processed into a specific antigen groove, they bridge MHC class II and the T-cell receptor sideways, outside the groove, activating every T cell bearing a matching Vβ segment. A normal antigen activates hundredths of a percent of the T-cell pool; a superantigen activates 5 to 30 percent at once — thousands of times more — and the cytokine flood that follows is the disease: fever, rash, shock. Toxic shock\'s 1980 tampon association was a superantigen story told through a change in absorbency that let toxin-producing staph colonize. Endotoxin, by contrast, is not secreted and not a protein: it is the lipid A portion of lipopolysaccharide, structural furniture of the Gram-negative outer membrane, released when those bacteria die. It survives autoclaving, cannot be made into a toxoid, and in the bloodstream triggers macrophages to dump interleukin-1 and tumor necrosis factor — the pyrogen cascade behind chills, fever, vasodilating shock and disseminated intravascular coagulation. Gram-negative sepsis is, in a real sense, the immune response to endotoxin running past its brakes.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Exotoxin versus endotoxin is the exam-grade discriminator: protein versus lipopolysaccharide; secreted versus structural; Gram-positive-predominant versus Gram-negative-only; heat-labile and toxoidable versus heat-stable and not. ID50 is the dose that infects half the population, not the one that kills — LD50 is the lethal measure. Virulence genes travel on plasmids and prophages (the resistance lesson owns the transfer mechanics — here they are named, not explained). And "pathogen" is not a species label: E. coli K-12 is a bench citizen while E. coli O157:H7 carries Shiga toxin on a prophage — strain, not species, decides.',
        tone: 'warn',
      },
      {
        kind: 'example',
        title: 'Worked Example — Reading an ID50 Like a Clinician',
        steps: [
          'Set the comparison: Shigella dysenteriae has an ID50 on the order of 10-100 organisms; a non-typhoidal Salmonella, roughly 10^5-10^6.',
          'Compute the gap: Salmonella needs about 10,000 to 100,000 times more cells to infect half of a population than Shigella does.',
          'Locate the gatekeeper: both must survive ~pH 2 stomach acid; Shigella\'s acid tolerance plus its cell-to-cell spread route clears the gate at tiny doses.',
          'Add the modifier: neutralizing gastric acid with antacids drops Vibrio cholerae\'s required dose from hundreds of millions to thousands — portal chemistry moves the threshold.',
          'The clinical translation: infectious dose, not identity alone, shapes outbreak behavior — a waterborne dose in the millions is routine for cholera, while person-to-person shigellosis spreads on the hands of a single carrier because ten cells suffice.',
        ],
      },
      { kind: 'heading', text: 'Applications' },
      {
        kind: 'list',
        items: [
          'Toxoid vaccines (diphtheria, tetanus) immunize against the A-B toxins themselves — the bacterium may colonize, but its precision weapon is pre-neutralized.',
          'Antitoxins and antibody therapy target the B subunit\'s grip; botulinum immune globulin is a clinical reality because binding, not chemistry, is the entry ticket.',
          'The Gram stain\'s clinical weight is endotoxin logic: Gram-negative bloodstream infection carries sepsis risk precisely because lipid A rides the outer membrane.',
          'Catheter and implant design now target adhesion and biofilm formation — anti-fouling surfaces attack the first handshake instead of the established colony.',
          'Superantigen biology explains toxic shock prevention: absorbency standards, wound hygiene and early decontamination all cut the colonization that feeds the cytokine flood.',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: 'Pathogenicity', def: 'The capacity of a microbe to cause disease; virulence is the degree or intensity of that capacity.' },
          { term: 'Adhesin', def: 'A surface molecule (often on fimbriae) that binds host receptors — the first virulence factor, without which nothing follows.' },
          { term: 'ID50', def: 'The dose of a pathogen that infects 50 percent of a test population; the LD50 is the dose that kills it.' },
          { term: "Koch's postulates", def: 'The four-step causality test linking a microbe to a disease — with documented limits: unculturables, asymptomatic carriers, ethical bounds.' },
          { term: 'A-B toxin', def: 'A two-part exotoxin: B subunits bind host receptors, the A subunit enters and performs the damaging chemistry.' },
          { term: 'Toxoid', def: 'A chemically inactivated exotoxin used as a vaccine — possible for protein toxins, impossible for endotoxin.' },
          { term: 'Superantigen', def: 'A toxin that bridges MHC II and TCR outside the antigen groove, activating 5-30 percent of the T-cell pool and causing cytokine storm.' },
          { term: 'Endotoxin (lipid A)', def: 'The lipid anchor of Gram-negative LPS; released on cell death, heat-stable, pyrogenic, and the driver of septic shock.' },
          { term: 'Spreading factor', def: 'Enzymes like hyaluronidase that dissolve host connective tissue, opening routes for invasion.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Diphtheria toxin must first bind and enter its target cell, but the step that makes it lethal is:',
            options: [
              'it perforates the cell membrane like a hemolysin',
              'a single A fragment ADP-ribosylates elongation factor 2, halting all protein synthesis',
              'it binds acetylcholine receptors at the neuromuscular junction',
              'it acts as a superantigen on T cells',
            ],
            answer: 1,
            explain: 'Diphtheria is the classic A-B toxin: the A fragment inactivates EF-2 by ADP-ribosylation, and a single molecule can arrest translation — catalytic lethality, not membrane damage (hemolysins) or neurotransmitter blockade (tetanus/botulinum) or T-cell overactivation (superantigens).',
          },
          {
            q: 'Tetanus and botulinum toxins both cleave SNARE proteins, yet one causes rigid paralysis and the other flaccid. The difference is:',
            options: [
              'different chemical substrates',
              'they target different neurons — tetanospasmin blocks inhibitory interneurons, botulinum blocks acetylcholine release at the neuromuscular junction',
              'only botulinum enters cells',
              'tetanus toxin is a superantigen',
            ],
            answer: 1,
            explain: 'Same molecular scissors family, different wiring diagrams: silencing inhibitory neurons produces unopposed contraction (spastic); silencing the motor output itself produces relaxation (flaccid).',
          },
          {
            q: 'An ID50 of 10-100 for Shigella versus 10^5-10^6 for Salmonella mainly reflects:',
            options: [
              'Shigella is larger and therefore more infective',
              'acid tolerance and spread strategy — Shigella survives stomach acid in tiny numbers and passes cell to cell',
              'Salmonella is not a pathogen',
              'antibiotics select for Shigella',
            ],
            answer: 1,
            explain: 'Infectious dose is threshold arithmetic set by survival chemistry and spread mechanics; Shigella\'s acid tolerance and direct cell-to-cell invasion let a few hundred cells found an infection where Salmonella needs hundreds of thousands.',
          },
          {
            q: 'Why can endotoxin never be converted into a toxoid vaccine?',
            options: [
              'it is too small',
              'it is not a protein — it is the lipid A portion of LPS, and its toxicity survives the inactivation chemistry that works on protein toxins',
              'it mutates too fast',
              'it only exists inside cells',
            ],
            answer: 1,
            explain: 'Toxoids are inactivated protein toxins; endotoxin is a heat-stable structural lipid of the Gram-negative outer membrane. Its danger is structural, so the toxoid strategy — disarm the protein, keep the shape — does not apply.',
          },
          {
            q: 'Toxic shock syndrome toxin-1 produces fever and shock because it:',
            options: [
              'perforates blood vessel walls',
              'bridges MHC II and TCR nonspecifically, activating 5-30 percent of all T cells at once — a cytokine storm',
              'blocks protein synthesis in macrophages',
              'directly triggers the hypothalamic thermostat',
            ],
            answer: 1,
            explain: 'Superantigens bypass antigen specificity entirely — the sideways MHC-Vβ bridge activates thousands of times more T cells than a normal antigen, and the interleukin/TNF flood they release is the shock. The hypothalamus is downstream, not the trigger.',
          },
        ],
      },
    ],
  },
  {
    id: 'bio-innate-defenses-complement',
    title: 'Innate Immunity in Depth: TLRs, Complement, Interferons',
    domain: 'Life Sciences',
    field: 'Immunology',
    branch: 'Biomedical Science',
    tier: 'intermediate',
    concepts: [
      'PAMPs and pattern-recognition receptors',
      'Toll-like receptors: the alarm wiring',
      'Phagocytosis, opsonization and the respiratory burst',
      'The complement cascade: three routes, one hub',
      'The membrane attack complex and its regulation',
      'Interferons and the antiviral state',
    ],
    words: 2088,
    readMins: 10,
    addedOn: '2026-10-30',
    blocks: [
      {
        kind: 'para',
        text: 'The immune-system overview gave the map: barriers, then the fast generic arm, then the slow learning arm. This lesson opens the innate arm\'s machine room — the actual molecular machinery that fires within minutes to hours. Three machines run the show. Pattern-recognition receptors smell the chemistry that microbes share and your cells lack. The complement cascade turns that smell into holes, handles and alarms through a self-amplifying protein chain. And the interferon system makes virus-infected cells warn their neighbors before dying, putting the whole neighborhood on antiviral alert. Together they buy the days that adaptive immunity needs to learn — and when they overshoot, they produce sepsis, the immune system\'s own friendly-fire catastrophe. (Core scope cross-checked against Madigan et al., Brock Biology of Microorganisms, 16th ed., chapter 26, official Pearson TOC; Tortora et al., Microbiology: An Introduction, 14th ed., chapter 16; facts verified against NCBI Bookshelf metadata for Baron, Medical Microbiology, 4th ed., Nobel Prize registries and CDC primers.)',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'This machinery is where immunology meets everyday medicine: fever management, sepsis protocols, the complement-deficiency workup behind recurrent infections, anti-C5 drugs for rare blood disorders, and vaccine adjuvants that deliberately push these same pattern receptors. It is also the layer most exams probe: PAMP versus antigen, C3b versus C5a, interferon versus antibody — the discriminations this lesson makes sharp.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'PAMPs and pattern-recognition receptors. Innate immunity\'s trick is knowing what cannot be you. Microbes carry molecular patterns their lifestyles force on them — lipopolysaccharide of Gram-negative walls, peptidoglycan fragments, bacterial and viral DNA with unmethylated CpG motifs, double-stranded RNA that appears during viral replication, fungal beta-glucans, flagellin. These pathogen-associated molecular patterns (PAMPs) are the targets; the sensors are pattern-recognition receptors (PRRs) — hardwired, germline-encoded, present before any exposure. The contrast with adaptive immunity is exact: antigen receptors are randomly assembled and personalized; PRRs are inherited and universal. The logic was proven across kingdoms — the Toll receptor discovered in fruit-fly development (1996) turned out to be the fly\'s fungal-defense trigger, and the human Toll-like receptor family followed, work recognized by the 2011 Nobel Prize to Beutler and Hoffmann alongside Steinman\'s dendritic-cell discovery.',
      },
      {
        kind: 'para',
        text: 'Toll-like receptors: the alarm wiring. Humans carry ten TLRs, and their station map is the design principle: some sit on the cell surface to intercept extracellular signatures — TLR4 reads LPS with an escort team (LBP delivers it, CD14 hands it over, MD2 presents it), TLR5 reads flagellin, TLR2/TLR1 read lipoteichoic acids of Gram-positive walls; others sit in endosome walls to intercept what should never be there — TLR3 reads double-stranded RNA, TLR7/8 read single-stranded RNA, TLR9 reads unmethylated CpG DNA. Engagement from any station converges on the same master switch, the transcription factor NF-κB, which enters the nucleus and switches on the cytokine genes — interleukin-1, interleukin-6, tumor necrosis factor — that produce fever, vessel leakiness, and the recruitment of more phagocytes. TLR biology even explains a therapeutic trick: some vaccine adjuvants are purified TLR agonists (MPL, a detoxified LPS derivative, rides in several approved vaccines) because alarming the innate arm is exactly what turns a weak antigen into a memorable one.',
      },
      {
        kind: 'para',
        text: 'Phagocytosis, opsonization and the respiratory burst. Neutrophils — half to seventy percent of circulating white cells — and macrophages execute in five beats: chemotaxis up the cytokine gradient, adherence, ingestion (the membrane wraps into a phagosome), fusion with lysosomes into a phagolysosome, and digestion. Digestion has a turbocharger: the respiratory burst, an NADPH oxidase that pumps reactive oxygen species — superoxide, hypochlorous acid (household bleach\'s active cousin) — into the vacuole. The genetic proof is chronic granulomatous disease: children whose NADPH oxidase fails survive the engulfing but not the killing, and infections abscess into granulomas. Efficiency depends on grip, and here the complement system and antibodies act as opsonins — coat proteins that turn a slippery pathogen into something a phagocyte receptor can seize. The defensive countermeasures pathogens evolve mirror the machinery: polysaccharide capsules hide surface C3b (the pneumococcus\'s whole strategy), catalase decomposes the burst\'s hydrogen peroxide, and survivors like Mycobacterium tuberculosis simply ride inside the macrophage, blocking phagosome-lysosome fusion.',
      },
      {
        kind: 'para',
        text: 'The complement cascade: three routes, one hub. Complement is a chain of ~30 plasma proteins that activate one another in sequence, each step converting an inactive zymogen into a protease that cuts the next — a cascade where every stage amplifies the last. Three routes feed it. The classical pathway begins when C1q binds antibody already locked onto a pathogen — adaptive help loaned to innate speed. The lectin pathway begins when mannose-binding lectin grips the unusual mannose arrays bacteria display. The alternative pathway needs no trigger at all: C3 hydrolyzes spontaneously at a trickle (tickover), and any surface lacking regulators lets the fragments build. All three converge on one hub — C3 convertase, the enzyme that cleaves C3 into two weapons: C3b, which opsonizes the invader for phagocytes and chains onward, and C3a, an anaphylatoxin that inflames. The classical and lectin routes then build C5 convertase, cutting C5 into C5a (a potent chemoattractant and anaphylatoxin) and C5b, the seed of the membrane attack complex.',
      },
      {
        kind: 'para',
        text: 'The membrane attack complex and its regulation. C5b recruits C6, C7, C8 and a ring of C9 molecules that polymerize into a pore punched clean through the membrane — the membrane attack complex (MAC), lysis for Gram-negative bacteria whose outer membranes cannot shed the insult. The host protects itself from its own cascade twice over: regulators in plasma (Factor H and Factor I dismantle accidental C3b; C1-inhibitor throttles C1) and regulators on our own cell membranes — CD59 caps the C9 ring before it completes, and the inherited absence of the anchor that holds CD55/CD59 on red cells produces paroxysmal nocturnal hemoglobinuria, the rare anemia in which complement eats the patient\'s own erythrocytes at night. The clinical counterweight is eculizumab, an anti-C5 antibody that quiets the terminal pathway — complement pharmacology is real pharmacology. (Classical, lectin and alternative all converge at C3; learn the hub, and the cascade collapses into one diagram.)',
      },
      {
        kind: 'para',
        text: 'Interferons and the antiviral state. Complement and phagocytes are near-useless against an enemy already inside your cells. The solution is a warning broadcast: interferon, discovered by Isaacs and Lindenmann in 1957 as the factor that made cells "interfere" with viral growth. A cell detecting viral RNA through its own sensors (RIG-I-like receptors, TLR3) secretes type I interferons (IFN-α and IFN-β); the signal binds IFNAR on neighboring cells and through JAK-STAT signaling switches on the interferon-stimulated genes — the antiviral state. The neighborhood now runs tripwire chemistry: PKR halts protein synthesis on any double-stranded RNA, OAS/RNase L shreds viral RNA, Mx proteins cage viral machinery — a cell-wide lockdown that costs the tissue some function and costs the virus everything. Natural killer cells complete the screen: they survey MHC class I display and kill cells that have gone quiet ("missing-self" recognition — many viruses downregulate MHC I to dodge T cells, and NK cells execute exactly those). Interferon itself was hepatitis C\'s standard therapy for a generation before direct-acting antivirals arrived.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: '"The classical pathway needs antibody" is true — but the lectin and alternative pathways do not, which is why complement still guards the antibody-free hours of a first infection. PAMPs are not poisons: they are ordinary microbial chemistry recognized as foreign because your cells do not make it. Fever is a regulated setpoint change run through PGE2 and the hypothalamus, not a runaway thermostat failure — and it is a defense (iron sequestration, accelerated immune kinetics), so antipyretics are a comfort decision, not an automatic duty. And innate "nonspecificity" is a simplification: PRRs are exquisitely specific for patterns — they just never improve with practice, which is the actual dividing line from adaptive immunity.',
        tone: 'warn',
      },
      {
        kind: 'example',
        title: 'Worked Example — The Fever Thermostat Arithmetic',
        steps: [
          'Set the event: endotoxin triggers macrophage IL-1/TNF; the prostaglandin PGE2 raises the hypothalamic setpoint from 37.0°C to 39.0°C — the body now defends a higher target.',
          'Apply the metabolic cost: core metabolic rate rises roughly 10-13 percent per degree Celsius, so the two-degree climb costs about 20-25 percent more fuel — why chronic fevers (tuberculosis) waste weight.',
          'Track the defenses recruited: the liver sequesters iron (hepcidin rises), starving bacteria of an essential nutrient; immune-cell kinetics accelerate.',
          'Locate the lever: aspirin and ibuprofen block the cyclooxygenase that makes PGE2 — resetting the thermostat, not cooling the body from outside; sponging only reaches the skin.',
          'Draw the clinical line: the concern threshold is not the setpoint itself but the trajectory — fevers climbing past ~40°C, or febrile illness in infants, demand treatment and workup; ordinary 38-39°C fevers in adults are the machinery working.',
        ],
      },
      { kind: 'heading', text: 'Applications' },
      {
        kind: 'list',
        items: [
          'Sepsis medicine is innate-immunity management: the same TLR-NF-κB and complement machinery that saved the tissue floods it when brakes fail — fluid resuscitation, source control, and drugs quieting the cascade.',
          'Eculizumab (anti-C5) converts paroxysmal nocturnal hemoglobinuria and atypical hemolytic-uremic syndrome from progressive disease to manageable ones.',
          'Vaccine adjuvants are applied PRR biology — MPL (a detoxified TLR4 agonist) in approved vaccines deliberately rings the innate bell to license adaptive memory.',
          'Chronic granulomatous disease management (prophylactic antibiotics, interferon-gamma) is designed directly around the broken respiratory burst.',
          'Antiviral history ran through interferon: recombinant IFN-α treated hepatitis C for decades before direct-acting antivirals replaced it — molecular warning turned into prescription.',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: 'PAMP', def: 'Pathogen-associated molecular pattern — microbial chemistry (LPS, dsRNA, CpG DNA, beta-glucan) that mammalian cells do not make.' },
          { term: 'PRR / TLR', def: 'Germline-encoded pattern-recognition receptors; the ten human Toll-like receptors read PAMPs at the surface or in endosomes.' },
          { term: 'NF-κB', def: 'The master transcription factor TLR signaling converges on, switching on the cytokine genes behind inflammation and fever.' },
          { term: 'Opsonization', def: 'Coating a pathogen with C3b or IgG so phagocyte receptors can grip it — the grease for every engulfment.' },
          { term: 'Respiratory burst', def: 'The NADPH-oxidase-driven flood of reactive oxygen species that turns the phagolysosome into a kill chamber.' },
          { term: 'C3 convertase', def: 'The cascade hub enzyme, built by all three pathways, that cleaves C3 into opsonizing C3b and inflammatory C3a.' },
          { term: 'Membrane attack complex (MAC)', def: 'The C5b-C9 pore that polymerizes through bacterial outer membranes and lyses the cell.' },
          { term: 'Anaphylatoxin', def: 'C3a and C5a — complement fragments that inflame, recruit phagocytes, and at system scale can drop blood pressure.' },
          { term: 'Antiviral state', def: 'The interferon-induced condition of neighboring cells (PKR, OAS/RNase L, Mx armed) that locks down viral replication on arrival.' },
          { term: 'Missing-self', def: 'Natural killer cells kill cells whose MHC class I display has gone quiet — the evasion move many viruses force.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'TLR4 responds to LPS, TLR3 to double-stranded RNA, TLR9 to unmethylated CpG DNA. What all three engagements share is:',
            options: [
              'they each directly punch holes in the pathogen',
              'they converge on NF-κB, switching on cytokine genes',
              'they all sit on the cell surface',
              'they assemble antigen receptors randomly',
            ],
            answer: 1,
            explain: 'Every TLR routes into the NF-κB master switch — that convergence is why different alarms produce one coordinated inflammatory response. TLR3/7/8/9 sit in endosomes, not the surface; random receptor assembly is the adaptive arm\'s trick.',
          },
          {
            q: 'In the complement cascade, the three pathways — classical, lectin, alternative — converge on:',
            options: ['C1q', 'mannose-binding lectin', 'C3 convertase', 'Factor H'],
            answer: 2,
            explain: 'C1q starts the classical route and MBL the lectin route, but all three build a C3 convertase — the hub that makes C3b (opsonin) and C3a (anaphylatoxin). Factor H is a regulator that shuts the cascade down, not a converging trigger.',
          },
          {
            q: 'A child suffers recurrent abscesses: phagocytes engulf Staphylococcus normally but fail to kill it. The likeliest defect is:',
            options: [
              'missing C1q',
              'a broken NADPH oxidase — no respiratory burst, no kill',
              'no TLR4',
              'absent IgG',
            ],
            answer: 1,
            explain: 'Chronic granulomatous disease is the textbook signature: engulfment succeeds, digestion fails because the oxidative kill machinery (NADPH oxidase → ROS) is genetically absent.',
          },
          {
            q: 'A virus-infected cell saves its neighbors by:',
            options: [
              'releasing complement C3b onto them',
              'secreting type I interferon, which puts nearby cells into the antiviral state',
              'transferring antibodies through gap junctions',
              'raising the hypothalamic setpoint locally',
            ],
            answer: 1,
            explain: 'Interferon-α/β binds IFNAR on neighbors and via JAK-STAT arms PKR, OAS/RNase L and Mx — the neighborhood is locked down before the virus arrives. Complement acts extracellularly; antibodies come days later; fever is systemic, not local.',
          },
          {
            q: 'Many viruses downregulate MHC class I to escape cytotoxic T cells — and get killed anyway. By whom, and why?',
            options: [
              'neutrophils, which smell the absence',
              'natural killer cells, which interpret a missing MHC I display as "missing self" and execute the cell',
              'complement, which lyses cells without MHC I',
              'B cells, which rebuild the display',
            ],
            answer: 1,
            explain: 'NK cells survey MHC I through inhibitory receptors; a cell that goes quiet loses the inhibitory handshake — missing-self recognition (Kärre) — and dies. The evasion move for T cells is the execution trigger for NK.',
          },
        ],
      },
    ],
  },
]
