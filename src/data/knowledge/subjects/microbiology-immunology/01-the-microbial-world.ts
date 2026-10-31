/**
 * Knowledge Universe — Microbiology & Immunology — Chapter 01: The Microbial World
 * 5 lessons · ~6,977 words
 * field: Microbiology & Disease
 * legacy sources: life-sciences.ts, x79-crossverify-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Microbes and Infection]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 bio-microbe-bacteria-viruses-fungi — Bacteria, Viruses, Fungi: A Field Guide to the Microbial World
 *   01.2 bio-virus-replication-cycle — How Viruses Multiply: From Attachment to Burst
 *   01.3 bio-pathogen-virulence-toxins — How Microbes Cause Disease: Adhesion, Invasion, Toxins
 *   01.4 bio-microbe-antibiotic-resistance — Antibiotics and the Rise of Resistance
 *   01.5 bio-microbe-microbiome — The Microbiome: Your Trillion Tenants
 */
import type { KnowledgeTopic } from '../../types'

export const microbiologyImmunologyCh01: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'bio-microbe-bacteria-viruses-fungi',
    title: 'Bacteria, Viruses, Fungi: A Field Guide to the Microbial World',
    domain: 'Life Sciences',
    field: 'Microbiology & Disease',
    branch: 'Microbes and Infection',
    tier: 'core',
    concepts: [
      'Bacteria: independent single cells',
      'Viruses: hijackers in a coat',
      'Fungi: recyclers with chitin walls',
      'A size ladder for the invisible',
      'Three ways to cause disease',
    ],
    words: 903,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Your body carries more microbial cells than it has human ones, and the world beyond carries more still. The three great kinds of microbe — bacteria, viruses, and fungi — differ from one another more deeply than you differ from a mushroom, and those differences decide everything about the diseases they cause and the drugs that fight them. This field guide covers what each is made of, how each multiplies, and how each makes you sick.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Which kind of microbe is causing an illness decides nearly everything about treatment: antibiotics touch only bacteria, antivirals only viruses, antifungals only fungi. Most "stomach flu" is viral — demanding antibiotics for it buys side effects and resistance while touching nothing responsible.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A bacterium is a complete, self-sufficient cell a few micrometers long: DNA floating free in the cytoplasm, ribosomes building protein, and a tough wall of peptidoglycan holding shape. Most divide by binary fission — copy the DNA, split in two — and some manage a division every 20 minutes, letting a single cell found a colony of millions before nightfall. Thousands of species inhabit your body; only a handful are pathogens.',
      },
      {
        kind: 'para',
        text: 'A virus is not a cell at all: a stretch of DNA or RNA folded into a protein coat, sometimes wrapped in a stolen membrane, a few dozen nanometers across. It has no metabolism and cannot reproduce alone. Instead it injects its genome into a living cell and reprograms the host\'s ribosomes into building virus parts, which assemble and burst out — usually killing the cell. Influenza, measles, and SARS-CoV-2 all run this racket.',
      },
      {
        kind: 'para',
        text: 'Fungi are eukaryotes with chitin-reinforced walls — closer kin to you than to any bacterium. They grow as budding yeasts or as thread-like hyphae that push through soil or skin, digest food outside their bodies, and spread by hardy spores. Many are indispensable — bread, beer, and penicillin — while a few cause trouble: Candida yeasts flare when immunity dips, and dermatophytes cause the itchy ringworms of skin and nail.',
      },
      {
        kind: 'para',
        text: 'Scale keeps the field guide organized. Viruses are far smaller than bacteria — a tenth to a twentieth across, and thousands of times lighter — so a single bacterial cell can host an entire viral factory; bacteria are about a tenth the size of your cells; yeasts approach your own cells in size. That is why a surgical mask blocks virus-laden droplets, but only the immune system clears viruses already inside cells.',
      },
      {
        kind: 'para',
        text: 'Each kind sickens in its own way. Bacteria release toxins — cholera\'s flood of diarrhea, tetanus\'s rigid spasms — or inflame tissue directly; viruses kill cells and provoke immune responses whose side effects feel like the illness itself; fungi colonize surface tissue and provoke irritation. The mechanism predicts the cure: antibacterials sabotage bacterial-only machinery, antivirals block stages of the viral life cycle, and antifungals attack fungal targets like the chitin wall.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how fast a food-contaminating bacterium can multiply from a few cells.',
          'Recall the governing idea: binary fission doubles the population every generation time.',
          'Apply: Salmonella dividing every 30 minutes gains ten doublings in five hours — 10 cells become about 10,000 — and twenty doublings by ten hours carry the colony past ten million.',
          'State the result: exponential growth turns a contaminated crumb into an infectious dose overnight — the arithmetic behind every refrigeration rule ever written.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'The Gram stain, unchanged since 1884, still sorts bacteria into wall types that predict antibiotic response.',
          'Antivirals against HIV and influenza target viral enzymes that human cells lack.',
          'Yogurt, bread, beer, cheese, and penicillin are all microbial biotechnology.',
          'Culture plates and PCR assays name the microbe and reveal which drugs it fears.',
          'Hospital sterilization targets endospores that survive boiling and shrug off disinfectants.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Antibiotics do nothing to viruses and never have — a virus has no wall, no bacterial ribosome, nothing for the drug to grip. Nor are microbes villains by default: the overwhelming majority are harmless or essential, and most infections are decided as much by the host\'s immune response as by the microbe. Finally, viruses sit outside biology\'s formal definition of life — not quite object, not quite organism.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Binary fission', def: 'Bacterial reproduction — DNA copied, cell split in two.' },
          { term: 'Peptidoglycan', def: 'The cross-linked sugar-protein mesh of bacterial walls, penicillin\'s target.' },
          { term: 'Capsid', def: 'The protein coat enclosing a viral genome.' },
          { term: 'Obligate intracellular parasite', def: 'An agent that can reproduce only inside a host cell — every virus, by definition.' },
          { term: 'Hypha', def: 'A fungal filament; masses of them form a mycelium.' },
          { term: 'Endospore', def: 'A dormant, near-indestructible bacterial survival capsule.' },
          { term: 'Toxin', def: 'A bacterial poison that does damage apart from the organism itself.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which microbe cannot reproduce outside a living host cell?',
            options: ['Bacterium', 'Yeast', 'Fungus', 'Virus'],
            answer: 3,
            explain: 'A virus is an obligate intracellular parasite — no metabolism, no reproduction without hijacking a cell.',
          },
          {
            q: 'Bacterial cell walls are built mainly of:',
            options: ['chitin', 'cellulose', 'peptidoglycan', 'keratin'],
            answer: 2,
            explain: 'Peptidoglycan is unique to bacteria — which is exactly what penicillin attacks.',
          },
          {
            q: 'A bacterium dividing every 20 minutes grows from one cell to over a thousand in about:',
            options: ['20 minutes', '1 hour', '3.5 hours', 'a full day'],
            answer: 2,
            explain: 'Ten doublings take 200 minutes — just over three hours — and two to the tenth is 1,024.',
          },
          {
            q: 'Ringworm, despite the name, is caused by:',
            options: ['a fungus', 'a roundworm', 'a bacterium', 'a virus'],
            answer: 0,
            explain: 'Dermatophyte fungi — the misnomer stuck centuries before anyone could see the cause.',
          },
        ],
      },
    ],
  },
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
  // ------------------------------------------------------------------
  {
    id: 'bio-microbe-antibiotic-resistance',
    title: 'Antibiotics and the Rise of Resistance',
    domain: 'Life Sciences',
    field: 'Microbiology & Disease',
    branch: 'Microbes and Infection',
    tier: 'intermediate',
    concepts: [
      'What antibiotics actually attack',
      'Selection in fast-forward',
      'The resistance toolbox',
      'Genes that travel: plasmids',
      'Stewardship: keeping the drugs working',
    ],
    words: 957,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'In 1943 a rose thorn could kill; by 1960 penicillin had made such deaths a rarity. That shield is leaking. Bacteria resistant to our best drugs now collect in hospitals, farms, and waterways, and every careless prescription runs an evolutionary experiment with the stakes counted in lives. This topic covers how antibiotics work, how resistance evolves and spreads, and what stewardship — in clinics, on farms, and at the pharmacy counter — actually requires.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The World Health Organization ranks antimicrobial resistance among the top ten threats to global health, with projections near ten million extra deaths a year by mid-century if trends hold. It is the clearest example of evolution happening on a human timescale — with human fingerprints all over the selection pressure.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Antibiotics work by attacking machinery that bacteria have and you do not. Penicillins and their relatives block the cross-linking of peptidoglycan, so walls burst as the cell grows; tetracyclines jam the bacterial ribosome; fluoroquinolones corrupt bacterial DNA enzymes. Human cells share none of these targets — which is why the drugs can cure without killing you, and why they have nothing at all to grip on a virus.',
      },
      {
        kind: 'para',
        text: 'Every large bacterial population already contains mutants — one in a million, one in a hundred million — that shrug off a given drug by sheer luck of mutation. The antibiotic kills their rivals, and the survivors inherit the infection: natural selection, the principle from the evolution lesson, compressed into days inside a single patient. An under-dosed or abandoned course gives the hardy minority extra rounds to multiply.',
      },
      {
        kind: 'para',
        text: 'Resistance has a toolbox. Enzymes like beta-lactamase chemically shred penicillin\'s ring; efflux pumps expel drugs before they act; target molecules mutate shape so the drug no longer fits; biofilms shelter whole communities behind slime. Some mechanisms cost the bacterium little to carry, so they persist even after the drug disappears — resistance, once selected, does not conveniently evaporate.',
      },
      {
        kind: 'para',
        text: 'The alarming part is horizontal gene transfer: bacteria pass DNA around, even across species. A resistance gene riding a plasmid — a small ring of DNA — can move from harmless gut flora into a pathogen in a single conjugation event. Genes travel, not just lineages: that is how resistance born in farm animals surfaces in hospital superbugs, and why one hospital\'s problem becomes every hospital\'s problem.',
      },
      {
        kind: 'para',
        text: 'Stewardship means keeping the drugs working: prescribe only for bacterial infections, narrow the drug once the laboratory names the culprit, complete the prescribed course, and never demand antibiotics for colds or flu. The One Health frame adds the farm — roughly two-thirds of the world\'s antibiotic tonnage feeds animals, a vast selection tank with pipes running straight into human medicine.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: why a standard amoxicillin course can end in a resistant rebound infection.',
          'Recall the governing idea: antibiotics impose selection — susceptible cells die, and pre-existing resistant variants inherit the field.',
          'Apply: in a bacterial population of a billion cells, resistance already present at one in a million means about a thousand resistant cells stand ready; the drug clears the rest, and doubling every half hour, the survivors rebuild a billion within roughly ten hours.',
          'State the result: the rebound infection is fully resistant — selected, not created, by the drug — and every cell inheriting the plasmid carries the same shield into the next patient.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'MRSA — methicillin-resistant Staph aureus — remains the classic hospital superbug, fought with hygiene plus last-line drugs.',
          'Rapid diagnostics name the pathogen in hours, letting doctors narrow broad-spectrum therapy early.',
          'New beta-lactamase inhibitors are paired with old penicillins to outflank the shredding enzymes.',
          'EU rules now ban routine antibiotic growth promotion in livestock to shrink the selection tank.',
          'Drug development incentives — push funding and pull prizes — aim to refill a thinning pipeline.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Resistance develops in bacteria, not in patients: "I\'ve become resistant to amoxicillin" confuses the target of selection. Stopping a course early usually selects the hardiest minority — the opposite of the folk advice that finishing breeds immunity in you. And resistance rarely reverses on its own: remove the drug and the genes often persist at low cost, waiting for the next round.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Antibiotic', def: 'A drug that kills or slows bacteria by targeting machinery human cells lack.' },
          { term: 'Beta-lactamase', def: 'A bacterial enzyme that destroys penicillin-family drugs.' },
          { term: 'Efflux pump', def: 'A molecular bouncer ejecting drugs from the bacterial cell.' },
          { term: 'Plasmid', def: 'A transferable DNA ring that can carry resistance between bacteria.' },
          { term: 'Horizontal gene transfer', def: 'Movement of genes between organisms, not just down lineages.' },
          { term: 'Stewardship', def: 'Coordinated practice — right drug, right dose, right duration — to preserve antibiotic effectiveness.' },
          { term: 'MRSA', def: 'Methicillin-resistant Staphylococcus aureus, the emblematic resistant pathogen.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Penicillin kills bacteria by:',
            options: ['blocking bacterial ribosomes', 'preventing peptidoglycan cell-wall cross-linking so cells burst', 'cutting DNA strands', 'puncturing human cell membranes'],
            answer: 1,
            explain: 'Weakened walls rupture as the bacterium grows — a target human cells simply do not have.',
          },
          {
            q: 'Resistance can leap between bacterial species mainly because:',
            options: ['bacteria inherit it only from parents', 'viruses deliver it by design', 'resistance genes on plasmids move horizontally between species', 'patients develop resistance themselves'],
            answer: 2,
            explain: 'Plasmid transfer moves genes across species boundaries — even between harmless and pathogenic bacteria.',
          },
          {
            q: 'Antibiotics fail against colds because:',
            options: ['cold viruses mutate too fast for any drug', 'colds are allergic reactions', 'pills cannot reach the nose', 'viruses have none of the bacterial machinery the drugs attack'],
            answer: 3,
            explain: 'No wall, no bacterial ribosome — nothing for the drug to grip. The mismatch is structural, not dose-related.',
          },
          {
            q: 'A course stopped too early tends to:',
            options: ['kill every last bacterium', 'select for the hardiest resistant minority', 'strengthen the patient\'s immunity', 'have no evolutionary consequence'],
            answer: 1,
            explain: 'The most susceptible cells die first; stopping then leaves the toughest ones alive to repopulate.',
          },
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'bio-microbe-microbiome',
    title: 'The Microbiome: Your Trillion Tenants',
    domain: 'Life Sciences',
    field: 'Microbiology & Disease',
    branch: 'Microbes and Infection',
    tier: 'intermediate',
    concepts: [
      'Who lives where: the census',
      'Services rendered: fiber, vitamins, defense',
      'How the tenancy is set',
      'Dysbiosis: when balance breaks',
      'Fecal transplants and engineering the flora',
    ],
    words: 883,
    readMins: 4,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'You are outnumbered in your own body. Roughly 38 trillion bacterial cells ride along — about as many as your own cells — with the overwhelming majority packed into the colon. Far from passive passengers, they digest food you cannot, manufacture vitamins, train your immune system, and defend their territory against invaders. This topic tours the microbiome: who lives where, what they do for you, what reshuffles the community, and what medicine is learning to do about it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'A disturbed community — dysbiosis — now links to conditions from recurrent C. difficile colitis to allergies, inflammatory bowel disease, and obesity. Fecal transplants cure repeat C. difficile at rates no single antibiotic matches, which is why clinicians have begun treating the microbiome as an organ in its own right.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The residents are mostly bacteria — dominated by the phyla Firmicutes and Bacteroidetes — plus archaea, fungi, and viruses. Each body site keeps its own climate: oily skin, an acidic stomach home to a mere handful of hardy species, and the oxygen-poor colon, the metropolis. Your genome is fixed; the microbiome shifts measurably with every change of diet — a garden replanted by each meal.',
      },
      {
        kind: 'para',
        text: 'The rent is paid in chemistry. Gut bacteria ferment fiber your enzymes cannot touch into short-chain fatty acids — especially butyrate, the preferred fuel of colon cells and a calming signal to the immune system. They synthesize vitamin K and several B vitamins, and by filling every niche they crowd out arriving pathogens. Breast milk even carries specialized sugars the baby cannot digest: food shipped for the tenants.',
      },
      {
        kind: 'para',
        text: 'The founding community arrives at birth — vaginal microbes for most babies, skin microbes by cesarean — and antibiotics, diet, and environment reshuffle it for life. High-fiber diets feed the fermenters; processed, low-fiber diets starve them. Each antibiotic course is clear-cut logging in a rainforest that may not fully regrow: repeated courses can thin the community\'s diversity, in some cases permanently.',
      },
      {
        kind: 'para',
        text: 'When diversity collapses, trouble follows. The clearest case: antibiotics wipe out the fiber-fermenters, and toxin-producing Clostridioides difficile explodes into life-threatening colitis. Weaker but replicated links extend to inflammatory bowel disease, allergies, obesity, and mood, where the gut-brain axis runs chemical traffic in both directions — serotonin\'s building blocks among the freight.',
      },
      {
        kind: 'para',
        text: 'The bluntest therapeutic tool is the fecal microbiota transplant: filtered stool from a screened donor, delivered by capsule or colonoscope, restoring an entire working ecosystem in a single dose. It cures roughly 85-90 percent of recurrent C. difficile — far beyond any single drug. Next in the pipeline: rationally defined microbe cocktails and engineered strains that dispense drugs or consume toxins.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: what actually happens to the fiber in a bowl of beans.',
          'Recall the governing idea: gut bacteria ferment fiber that human enzymes cannot break.',
          'Apply: species like Bifidobacterium split the complex carbohydrates into short-chain fatty acids; butyrate is burned on the spot by colon cells, while acetate and propionate enter the circulation and influence liver metabolism and appetite signaling.',
          'State the result: an "indigestible" carbohydrate becomes fuel, colon-cell nourishment, and metabolic signaling — fiber is nutrition for two organisms at once, you and your tenants.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Fecal microbiota transplantation is approved therapy for recurrent C. difficile infection.',
          'Probiotic yogurts deliver live cultures; prebiotic fibers feed the ones already there.',
          'Newborn vitamin K shots bridge the gap until the colon flora establishes itself.',
          'Germ-free mice and gut-on-chip models let researchers test microbes one species at a time.',
          'Personalized nutrition projects predict glucose responses from an individual\'s microbiome.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The word "probiotic" on a label promises little: most commercial strains are transient visitors that rarely colonize, and the right strain for one condition is wrong for another. Correlation is not causation — many microbiome-disease links remain associations still under investigation. And a healthy microbiome means diverse and stable, not merely numerous: quality of the community, not headcount, is what counts.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Microbiome', def: 'The full community of microbes inhabiting a body site, plus their genes.' },
          { term: 'Commensal', def: 'An organism living on or in a host without harming it.' },
          { term: 'Short-chain fatty acid', def: 'Fatty acids like butyrate made by bacterial fermentation of fiber.' },
          { term: 'Prebiotic', def: 'A fiber or compound that feeds existing beneficial microbes.' },
          { term: 'Probiotic', def: 'Live microorganisms consumed with intent to improve the community.' },
          { term: 'Dysbiosis', def: 'A harmful imbalance or diversity loss in the microbiome.' },
          { term: 'Fecal microbiota transplant', def: 'Transfer of a donor\'s stool community to restore a patient\'s flora.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Most of the body\'s microbial residents live in the:',
            options: ['stomach', 'bloodstream', 'colon', 'skin'],
            answer: 2,
            explain: 'The oxygen-poor colon is the metropolis — dark, fibrous, and densely populated.',
          },
          {
            q: 'Butyrate is produced when gut bacteria:',
            options: ['ferment fiber humans cannot digest', 'break down stomach acid', 'consume red blood cells', 'process vitamin D'],
            answer: 0,
            explain: 'Fermentation of dietary fiber yields short-chain fatty acids — the colon cells\' main fuel.',
          },
          {
            q: 'Fecal microbiota transplantation is most clearly curative for:',
            options: ['the common cold', 'type 1 diabetes', 'influenza', 'recurrent C. difficile infection'],
            answer: 3,
            explain: 'Restoring the whole ecosystem beats the pathogen in a way single drugs cannot — an approved therapy for repeat cases.',
          },
          {
            q: 'A prebiotic differs from a probiotic in that it is:',
            options: ['live bacteria', 'fiber that feeds the microbes already present', 'a killed virus', 'an antibiotic for the gut'],
            answer: 1,
            explain: 'Prebiotics are the food; probiotics are the organisms — the meal versus the guests.',
          },
        ],
      },
    ],
  },
]
