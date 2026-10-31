/**
 * Knowledge Universe — Microbiology & Immunology — Chapter 02: Immunology
 * 3 lessons · ~4,787 words
 * field: Immunology
 * legacy sources: life-sciences.ts, x79-crossverify-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Biomedical Science]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 bio-immune-system — The Immune System: Innate to Adaptive Defense
 *   02.2 bio-innate-defenses-complement — Innate Immunity in Depth: TLRs, Complement, Interferons
 *   02.3 imm-autoimmunity-allergy — Autoimmunity and Allergy: When the Defense Misfires
 */
import type { KnowledgeTopic } from '../../types'

export const microbiologyImmunologyCh02: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'bio-immune-system',
    title: 'The Immune System: Innate to Adaptive Defense',
    domain: 'Life Sciences',
    field: 'Immunology',
    branch: 'Biomedical Science',
    tier: 'intermediate',
    concepts: [
      'Barrier defenses: skin, acid, and mucus',
      'Innate immunity: fast, generic, memoryless',
      'Inflammation and phagocytes',
      'B cells, antibodies, and clonal selection',
      'T cells and cell-mediated defense',
      'Immunological memory and vaccination',
      'Tolerance and its failures',
    ],
    words: 1402,
    readMins: 7,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'Your body runs an open-border policy — food, air, cuts, kisses — and still keeps some thirty trillion of its own cells under protection. The immune system manages this with a two-tier defense: an innate rapid-response force that fires on anything generic and dangerous, and an adaptive arm that learns specific enemies and remembers them for decades. This topic walks that defense from skin to antibody, and ends with the engineering built on it — vaccines, monoclonal drugs, and transplants.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Vaccination has saved more lives than any other medical technology, and the immune system is its engine. Allergies, autoimmunity, transplant rejection, cancer immunotherapy, and a fast-growing slice of the pharmacology cabinet all become legible once you can tell innate from adaptive, and recognition from memory.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Defense begins with architecture. Skin — a dead, keratinized layer hostile to microbes — plus mucous linings, stomach acid, lysozyme in tears, and the mucus escalator that sweeps airways clean stop most invaders before any cell responds. These barriers explain why burns and catheters, both breaches of the wall, carry such infection risk. The unglamorous first line quietly does most of the work.',
      },
      {
        kind: 'para',
        text: 'Past the barriers waits the innate system: minutes to hours, no specific target, no memory, identical on first and hundredth encounter. Its cells recognize conserved danger motifs — bacterial cell-wall sugars, viral nucleic acids, the stress flags of damaged cells — with hardwired receptors. Neutrophils and macrophages devour; natural killer cells execute infected cells; complement punctures membranes. Speed and breadth are its strengths; refinement is not its job.',
      },
      {
        kind: 'para',
        text: 'Injured cells broadcast alarms — histamine, cytokines — that dilate vessels and make them leaky: redness, warmth, swelling. Neutrophils arrive within minutes, monocytes follow and become macrophages, and both engulf debris and pathogens, then display fragments of the enemy on their surfaces like trophies for the next tier. Inflammation is not a malfunction but triage: recruit, contain, and report, at the cost we experience as symptoms.',
      },
      {
        kind: 'para',
        text: 'The adaptive arm is slow on first meeting, taking days, but surgical and permanent. B cells carry receptors assembled by randomly shuffling gene segments; when one matches an antigen and receives helper approval, it explodes into a clone of plasma cells that pour out millions of soluble copies of that receptor — antibodies — which neutralize, coat, and tag pathogens for destruction. Diversity is designed-in randomness, a lottery with millions of tickets drawn per infection.',
      },
      {
        kind: 'para',
        text: 'Antibody classes: the same grip, different jobs. Every antibody keeps the antigen-binding arms it won in the lottery; what class switching changes is the tail — the constant region that decides where the molecule travels and whom it summons. IgM is the first responder, assembled as a five-unit star with ten binding sites that grips weakly but teams brilliantly — the complement cascade\'s best activator. IgG is the blood\'s workhorse, roughly three-quarters of serum antibody: it crosses the placenta to arm a newborn, opsonizes bacteria for phagocytes, and carries the memory response. IgA works the mucosal borders as a two-unit dimer — tears, saliva, milk, and the gut lining, where it neutralizes invaders without summoning inflammation. IgE is the parasite specialist gone restless: it arms mast cells, and in a world short of parasitic worms its misfires are allergy. IgD stays mostly on the B-cell surface as a receptor. The classes interconvert without touching the binding site — one B cell, one antigen, many tailored weapons.',
      },
      {
        kind: 'para',
        text: 'Not every enemy floats free: viruses hide inside cells, and tumors are self gone wrong. Cytotoxic T cells patrol what cells display on their MHC molecules — fragments of the proteins being made inside — and kill any cell flashing foreign or abnormal content. Helper T cells are the system\u2019s sergeants, licensing B cells and activating macrophages; HIV\u2019s devastation traces precisely to this lynchpin. Cell-mediated immunity is defense against the enemy within.',
      },
      {
        kind: 'para',
        text: 'After an infection clears, most effector cells die, but memory B and T cells persist — sometimes for a lifetime. Reinfection now meets a force pre-primed to respond within hours at high potency, which is why chickenpox strikes once. Vaccination is the deliberate rehearsal: present a safe mimic — attenuated virus, protein subunit, or messenger-RNA instructions — and let the system build the memory without paying the disease\u2019s price.',
      },
      {
        kind: 'para',
        text: 'The most dangerous targets of all are the body\u2019s own tissues, so the system is educated against friendly fire: self-reactive cells are deleted in the bone marrow and thymus, and regulatory cells police the rest. Failure of tolerance produces autoimmunity — type 1 diabetes, rheumatoid arthritis, multiple sclerosis. Misaimed responses to harmless outsiders produce allergy; absent responses produce immunodeficiency. Immunity is a tuned instrument, not a volume knob.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Combinatorial receptor diversity',
        latex: 'N \\approx N_V \\times N_D \\times N_J',
        meaning: 'Independently chosen V, D, and J gene segments multiply — then heavy chains pair with light chains — to build millions of distinct receptors before junctional variation even counts.',
      },
      {
        kind: 'formula',
        name: 'Clonal expansion',
        latex: 'N(t) = N_0 \\times 2^{t/d}',
        meaning: 'A stimulated B cell doubling with period d yields tens of thousands of descendants in a week, and a primary response recruits many founders at once.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how many distinct antibodies the immune repertoire can assemble from about 45 V, 23 D, and 6 J heavy-chain segments and 40 V and 5 J light-chain segments.',
          'Recall the governing idea: combinatorial diversity — independently chosen segments multiply, and every heavy chain can pair with any light chain.',
          'Apply: heavy chains offer 45 × 23 × 6 ≈ 6,200 combinations and light chains 40 × 5 = 200; pairing them yields 6,200 × 200 ≈ 1.24 million receptors, before junctional splicing variability multiplies the count further.',
          'State the result: over a million distinct antibodies from segment shuffling alone, and well over a hundred million once joining variation is counted — a pre-built library vaster than the antigens the world can present.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Vaccines from smallpox to messenger-RNA platforms generate memory without disease; smallpox was eradicated by exactly this trick.',
          'Monoclonal antibodies — single-clone proteins manufactured as drugs — treat cancers, autoimmune disease, and migraine.',
          'Transplant medicine walks the self/nonself line, calming rejection with immunosuppressants balanced against infection risk.',
          'CAR-T therapy reprograms a patient\u2019s own T cells to recognize their leukemia — the adaptive arm, edited.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Antibiotics do nothing against viruses — they cannot touch what antiviral immunity fights. The phrase boosted immunity is folk-model language: the goal is regulation, not maximum force, and allergy and autoimmunity are immunity with the gain turned up. Fever, finally, is a defense and a signal, not the enemy itself — it aids adaptive responses even as it warns.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Antigen', def: 'A molecular fragment the immune system can specifically recognize.' },
          { term: 'Antibody', def: 'A soluble B-cell receptor that binds one antigen, tagging it for neutralization or destruction.' },
          { term: 'Phagocyte', def: 'A cell — neutrophil or macrophage — that engulfs debris and pathogens.' },
          { term: 'MHC molecule', def: 'The surface display case cells use to show internal protein fragments to T cells.' },
          { term: 'Memory cell', def: 'A long-lived B or T clone enabling rapid, potent secondary responses.' },
          { term: 'Tolerance', def: 'Active non-reactivity to self; its failure causes autoimmunity.' },
          { term: 'Herd immunity', def: 'Population protection that emerges when enough immune individuals break transmission chains.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which arm responds within minutes to a fresh wound, with no memory of any past encounter?',
            options: ['Adaptive immunity', 'Innate immunity', 'The thymus', 'Antibody-secreting plasma cells'],
            answer: 1,
            explain: 'Innate cells fire on generic danger motifs immediately; the adaptive response needs days to ramp up on first meeting.',
          },
          {
            q: 'Antibodies are secreted by:',
            options: ['Cytotoxic T cells', 'Plasma cells, the effector descendants of activated B cells', 'Macrophages', 'Red blood cells'],
            answer: 1,
            explain: 'Activated B cells clone into plasma cells, each pouring out soluble versions of its receptor.',
          },
          {
            q: 'Vaccination works because it:',
            options: ['Kills pathogens directly', 'Builds memory B and T cells through a safe antigen rehearsal', 'Permanently raises inflammation', 'Replaces the innate system'],
            answer: 1,
            explain: 'A harmless mimic primes the same clonal expansion and memory a real infection would, minus the disease.',
          },
          {
            q: 'Autoimmune disease is best described as:',
            options: ['An infection by bacteria that mimic the body', 'A failure of tolerance — the immune system attacking the body\u2019s own tissues', 'An allergic response to pollen', 'An immunodeficiency'],
            answer: 1,
            explain: 'The mechanisms that normally delete or police self-reactive cells have failed in a specific tissue.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: cell structure, proteins, and basic genetics — the receptor-shuffling story rewards it. Continue with the hypersensitivity classes, tumor immunology and checkpoint inhibitors, and vaccinology. The action-potential and CRISPR lessons pair naturally for seeing biology\u2019s information systems at work.',
        tone: 'path',
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
  // ------------------------------------------------------------------
  {
    id: "imm-autoimmunity-allergy",
    title: "Autoimmunity and Allergy: When the Defense Misfires",
    domain: "Life Sciences",
    field: "Immunology",
    branch: "Biomedical Science",
    tier: "intermediate",
    concepts: [
      "Central and peripheral self-tolerance",
      "How tolerance breaks: mimicry and regulation failure",
      "Autoantibody, T-cell, and immune-complex damage",
      "Type 1 diabetes, multiple sclerosis, lupus",
      "The IgE-mast cell allergy pathway",
      "Hypersensitivity types I through IV",
      "Anaphylaxis and epinephrine",
    ],
    words: 1297,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "The immune system's hardest job is not killing pathogens; it is sparing the self. Building on the innate and adaptive defenses of the immune-system lesson, this topic covers what happens when that discrimination fails: the friendly fire of autoimmunity, and allergy — a defense aimed at harmless things. The first attacks self, the second harmless things — both rising in the modern world for reasons still argued.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Autoimmune disease affects roughly one person in ten, allergy far more, and both are increasing. Mechanism-based drugs — from anti-TNF agents to anti-IgE — have transformed these conditions, which makes understanding the misfire directly practical for patients and families.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Self-tolerance is built in two layers. Central tolerance, in the bone marrow for B cells and the thymus for T cells, deletes receptors that strongly recognize self before they graduate. The gene AIRE makes thymus cells display thousands of the body's proteins for this inspection; when it fails, a rare syndrome attacks multiple organs in childhood. Peripheral tolerance mops up what central screening misses: T cells that recognize self weakly are rendered anergic, suppressed by regulatory T cells, or fenced out of immune-privileged sites like the eye.",
      },
      {
        kind: "para",
        text: "Tolerance breaks by identifiable routes. Molecular mimicry is the classic: a pathogen segment resembling a self protein means antibodies or T cells trained on the invader attack the look-alike — rheumatic fever after strep throat works exactly this way, and mimicry is a leading model for multiple sclerosis. Bystander activation recruits sleeping self-reactive cells during an infection's inflammation. And regulatory failure — too few or dysfunctional Tregs — lets low-level self-reactivity, which everyone has some of, climb into disease. Genetic loading matters: particular HLA variants raise risk several-fold, which is why autoimmune diseases run in families without obeying simple inheritance.",
      },
      {
        kind: "para",
        text: "The damage arrives by three mechanisms. Autoantibodies strike directly, as in myasthenia gravis, where antibodies against acetylcholine receptors weaken muscle contraction. T cells kill tissue directly: in type 1 diabetes, CD8 cells destroy the insulin-producing beta cells (management belongs to the diabetes lesson). And immune complexes — antibody clumps with antigen — lodge in small vessels and inflame them, which is how lupus scars kidneys. In multiple sclerosis, T cells attack brain and spinal-cord myelin, producing relapses and often progressive disability.",
      },
      {
        kind: "para",
        text: "Allergy is a different misfire: an IgE response to a harmless antigen — pollen, peanut protein, cat dander. The first exposure sensitizes quietly: B cells class-switch to IgE, which arms mast cells by binding their surface receptors. On re-exposure, antigen cross-links the bound IgE, and the mast cell detonates, releasing histamine and other mediators within minutes: itch, wheal, sneeze, wheeze. Why IgE exists at all is best answered by parasites — the armament clears worms; their modern absence, plus reduced childhood microbial exposure, is a leading explanation for the allergy epidemic.",
      },
      {
        kind: "para",
        text: "The four-type hypersensitivity taxonomy organizes the misfires by mechanism and clock. Type I is the immediate IgE-mast cell reaction: minutes. Type II is cytotoxic antibody against cells: transfusion reactions, some drug reactions. Type III is immune-complex deposition: serum sickness, lupus nephritis. Type IV is delayed, T-cell mediated — poison ivy dermatitis, nickel rash, and the tuberculin skin test all peak a day or two after exposure. The clock is the diagnostic clue: hives in minutes and a rash in two days are different immunologies.",
      },
      {
        kind: "para",
        text: "Anaphylaxis is type I at system scale: widespread mast-cell activation drops blood pressure and swells airways, killing within minutes to hours, sometimes returning in a second wave hours later. Epinephrine is the antidote because it directly reverses both — constricting vessels and relaxing airway muscle — and autoinjectors exist because minutes matter. Treatment follows mechanism: antihistamines block the receptor, corticosteroids dampen inflammation broadly, allergy shots retrain the response from IgE toward blocking IgG, and biologics intercept single molecules — omalizumab mops up IgE, anti-TNF tames rheumatoid arthritis.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: classify four reactions by hypersensitivity type from timing and findings — hives and throat tightness ten minutes after penicillin; an itchy rash two days after a new watch; fever and joint pain twelve days after horse-serum injection; destruction of transfused red cells.",
          "Recall the taxonomy: type I is IgE and minutes; type II is antibody against cells; type III is immune complex with a one-to-two-week lag; type IV is delayed T cells.",
          "Apply: the penicillin reaction is IgE-mediated (I); the watch-band rash is nickel contact dermatitis, a T-cell response peaking at 48 hours (IV); the serum reaction with its delayed onset is immune-complex disease (III); the transfused cells being destroyed are antibody-targeted cells (II).",
          "State the result: I, IV, III, II — with the payoff that each type implies its treatment: epinephrine and avoidance for I, topical steroids and a different watch for IV, switching off the antigen and driver for the others.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Epinephrine autoinjectors and anaphylaxis action plans are standard care for food and venom allergy — and biphasic reactions justify observation.",
          "Allergen immunotherapy retrains IgE responses over years, the only treatment that changes the disease rather than its symptoms.",
          "Biologics — anti-TNF, anti-IL-17, anti-IL-5, anti-IgE — target single mediators, converting severe autoimmune and allergic disease into manageable chronic conditions.",
          "Teplizumab can delay type 1 diabetes onset by years when given early in high-risk relatives — the first disease-modifying autoimmunity drug of its kind.",
          "Autoantibody panels (ANA, anti-TG, anti-acetylcholine receptor) turn mechanism into diagnosis, often before tissue damage is advanced.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Allergy is not a strong immune system — it is a misdirected one; autoimmunity is not the same thing as allergy at all. Celiac disease is not wheat allergy: it is T-cell-mediated immunity against a modified self protein. IgG food-intolerance tests sold to consumers lack validation — IgG marks exposure, not disease. Autoimmune flares are unpredictable, not evidence of weak immunity or of anything the patient did. And autoimmune diseases cluster — failing one gland justifies screening for the next.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Self-tolerance", def: "The immune system's non-response to the body's own antigens — central deletion plus peripheral control." },
          { term: "Molecular mimicry", def: "Immunity trained on a pathogen cross-reacting with a similar self protein." },
          { term: "Autoantibody", def: "An antibody targeting the body's own molecules; measurable and often diagnostic." },
          { term: "IgE", def: "The antibody class that arms mast cells; superb against worms, the engine of allergy." },
          { term: "Mast cell", def: "A tissue sentinel loaded with histamine granules, detonated by cross-linked IgE." },
          { term: "Hypersensitivity", def: "Immune damage classified into types I-IV by mechanism and timing." },
          { term: "Anaphylaxis", def: "Systemic, life-threatening type I reaction; reversed by epinephrine." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "The AIRE gene prevents autoimmunity by:",
            options: ["killing all B cells", "making thymus cells display the body's proteins so self-reactive T cells are deleted", "producing IgE", "sealing the blood-brain barrier"],
            answer: 1,
            explain: "Central tolerance needs self-proteins shown in the thymus; without AIRE's display, self-reactive T cells graduate.",
          },
          {
            q: "Rheumatic fever after strep throat is the textbook case of:",
            options: ["immune-complex disease", "molecular mimicry — antibodies to strep attacking similar heart and joint tissue", "type IV hypersensitivity", "Treg overactivity"],
            answer: 1,
            explain: "The pathogen's proteins resemble self proteins, so the trained response hits both.",
          },
          {
            q: "Mast cells release histamine when:",
            options: ["they meet IgE in blood", "allergen cross-links IgE already bound to their surface", "complement touches them", "T cells instruct them"],
            answer: 1,
            explain: "Sensitization arms the cells in advance; only bridging of the bound IgE by antigen triggers detonation on re-exposure.",
          },
          {
            q: "Epinephrine is the anaphylaxis antidote because it:",
            options: ["destroys IgE", "blocks histamine receptors", "constricts vessels and opens airways directly, reversing both lethal effects", "calms T cells"],
            answer: 2,
            explain: "It addresses the physiology — pressure and breathing — immediately, which is why autoinjectors exist.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Prerequisite: the immune-system lesson for innate and adaptive basics. Continue with the microbiome lesson for the hygiene and old-friends story behind rising allergy, the Health & Wellness diabetes lesson for living with type 1, and the synapse lesson for myasthenia's target — this is education, not diagnosis.",
        tone: "path",
      },
    ],
  },
]
