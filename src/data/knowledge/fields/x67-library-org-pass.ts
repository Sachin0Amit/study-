import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X67 pass (2026-10-28): LIBRARY-ORG-20261028-1 — thinnest-book      */
/*  deepening for the Library Organization Loop (Job 474103).          */
/*                                                                     */
/*  RENUMBERED x60→x67 + MERGE-CARVED: an earlier session's parallel   */
/*  run (LIBRARY-ORG-20261026-5, commit aaf5da2) consumed the x60-x66  */
/*  file range and had ALREADY deepened three of this run's six books. */
/*  Per the zero-repetition rule the merge resolution:                 */
/*   - DROPS this pass's dev-stem-cells-organoids-regeneration lesson  */
/*     — the parallel run's bio-dev-stem-cells-regeneration (their x60)*/
/*     already owns the developmental-biology book's stem-cell/        */
/*     regeneration story (potency ladder, niche, neoblasts, blastema, */
/*     iPSCs, organoids), and keeping both would duplicate a book.     */
/*   - KEEPS synbio-directed-evolution-proteins: zero overlap with     */
/*     their emer-synbio-genetic-circuits (toggle switches,            */
/*     repressilator, retroactivity, quorum sensing) — that lesson     */
/*     wires circuits; this one evolves molecules. Both chapters now   */
/*     sit in the synbio book: intro → Genetic Circuits & Toolkits →   */
/*     Engineering by Evolution → Applications.                        */
/*   - KEEPS media-propaganda-persuasion: zero overlap with their      */
/*     media-algorithmic-feed (recommenders, engagement optimization,  */
/*     DSA) — that lesson owns the MACHINE ROOM; this one owns the     */
/*     persuasion canon (Creel, Bernays, IPA devices, misinformation   */
/*     taxonomy, illusory truth, prebunking).                          */
/*   - KEEPS four lessons untouched by the parallel runs (media,       */
/*     structural, garden, career — details below).                    */
/*                                                                     */
/*  The structure audit re-ran CLEAN on the minimums (101 books, every */
/*  one >=2ch/>=3ls — the payload backlog was already cleared by X59), */
/*  so this run deepens books sitting exactly at the 2ch/3ls minimum,  */
/*  +1 lesson each, across four shelves (4 lessons kept post-merge):   */
/*   - ku-media-communication    +1 chapter "Persuasion &              */
/*                                 Misinformation" (+1 lesson)         */
/*   - ku-structural-seismic-eng +1 chapter "Ground & Foundations"     */
/*                                 inserted as Ch2 (+1 lesson)         */
/*   - ku-garden-growing         +1 chapter "Plant Health" (+1 lesson) */
/*   - ku-career-communication   +1 lesson in Getting Hired & Working  */
/*                                 Smarter                             */
/*                                                                     */
/*  Sources read for grounding: Library of                             */
/*  Congress WWI Creel Committee records + the Institute for           */
/*  Propaganda Analysis's 1937 device list + Bernays' "Propaganda"     */
/*  (1928, public domain) + Hasher 1977 illusory-truth + Cambridge     */
/*  inoculation/prebunking 2022 (persuasion); Terzaghi's effective-    */
/*  stress framework via ASCE/Karl Terzaghi memorial literature + USGS */
/*  liquefaction pages (Niigata & Anchorage 1964) + NIST/NEHRP site-   */
/*  class tables (foundations); UC Statewide IPM Program (ipm.ucanr.  */
/*  edu) + RHS pest and disease guides + FAO IPM training manuals      */
/*  (plant health); Harvard/MIT/University career-services public      */
/*  resume guides + the Ladders 2018 eye-tracking study + Granovetter  */
/*  "The Strength of Weak Ties" (cross-referenced, not re-taught)      */
/*  (job search).                                                      */
/*                                                                     */
/*  DEDUP CARVING (verified against live topics by grep):              */
/*  - MERGE CARVE (2026-10-28): the parallel session's runs (x60 thin  */
/*    books, x61 loop, x64 rotation) already own three of this run's   */
/*    original six targets: bio-dev-stem-cells-regeneration owns the   */
/*    developmental-biology stem-cell/regeneration story (this pass's  */
/*    duplicate dev lesson DROPPED, chapter withdrawn), and            */
/*    synbio-directed-evolution (x64, 1,722w — error-prone PCR,        */
/*    saturation, shuffling, Chen & Arnold 1993 subtilisin,            */
/*    sitagliptin, phage display, 2018 Nobel) OWNS directed evolution  */
/*    (this pass's near-identical synbio lesson DROPPED, its chapter   */
/*    declaration withdrawn). 'emer-synbio-genetic-circuits' owns      */
/*    toggle/repressilator/quorum/noise; 'media-algorithmic-feed' owns */
/*    recommenders/persuasive-design/DSA — no overlap with the         */
/*    persuasion history/devices canon kept below.                     */
/*  - media-propaganda-persuasion: carved against the mass-media       */
/*    lesson (which OWNS watchdog/regulation and mentions deepfakes in */
/*    ONE clause — mechanics taught here) and the journalism-craft     */
/*    lesson (which OWNS verification craft — 'lateral reading' is     */
/*    owned by a digital-literacy lesson, referenced only). 'Bernays'  */
/*    0, 'Creel' 0, 'illusory truth' 0, 'bandwagon' only one political */
/*    aside. This lesson OWNS the persuasion canon: Creel Committee,   */
/*    IPA devices, misinformation/disinformation/malinformation,       */
/*    illusory truth, prebunking.                                      */
/*  - civ-foundations-geotechnical: carved against the earthquake      */
/*    lesson (which OWNS the response spectrum and the Mexico City     */
/*    1985 soil-amplification case — referenced only) and the          */
/*    structural-analysis lesson (owns determinacy/trusses/diagrams).  */
/*    'Terzaghi' 0, 'bearing capacity' one incidental hit, 'soil       */
/*    mechanics' 0, 'liquefaction' one incidental hit, 'retaining      */
/*    wall' 0. This lesson OWNS ground engineering: effective stress,  */
/*    settlement, bearing capacity, foundation types, site classes,    */
/*    Niigata/Anchorage liquefaction, ground improvement.              */
/*  - grow-pests-diseases-ipm: carved against the botany plant-defense */
/*    lesson (which OWNS the SCIENCE of immunity) and the              */
/*    biotech lesson in x14 (which OWNS the Bt cry-gene mechanism —    */
/*    Bt sprays mentioned here, mechanism cross-referenced). 'IPM' 0,  */
/*    'companion planting' 0, 'crop rotation' 0, 'ladybird' 0,         */
/*    'lacewing' 0, 'row cover' 0. This lesson OWNS the garden         */
/*    PRACTICE: diagnosis, the disease triangle, the IPM ladder,       */
/*    biological control, least-toxic chemistry.                       */
/*  - career-resume-networking-applications: fills the interview       */
/*    lesson's EXPLICIT forward reference ("the resume and networking  */
/*    skills extend this branch in future passes"). Carved against the */
/*    sociology social-network lesson (which OWNS Granovetter/weak     */
/*    ties — cross-referenced, not re-taught) and the digital-literacy */
/*    footprint lesson (owns online privacy). 'cover letter' 0,        */
/*    'LinkedIn' 0, 'informational interview' 0, 'hidden job market'   */
/*    0. This lesson OWNS the application toolkit: resume mechanics,   */
/*    ATS, quantified bullets, cover letters, networking practice,     */
/*    reference hygiene.                                               */
/* ------------------------------------------------------------------ */

export const x67LibraryOrgDeepeningPassTopics: KnowledgeTopic[] = [
  {
    id: 'media-propaganda-persuasion',
    title: 'Propaganda and Persuasion: The Manufacture of Belief',
    domain: 'Social Sciences',
    field: 'Media Literacy',
    branch: 'Propaganda & Misinformation',
    tier: 'core' as const,
    concepts: [
      'Propaganda is technique before it is content',
      'The Creel Committee: persuasion mobilized as an industry',
      'Bernays and the engineering of consent',
      'The IPA’s seven devices: a field guide that still works',
      'Misinformation, disinformation, malinformation — intent is the axis',
      'The illusory truth effect: repetition breeds belief',
      'Prebunking and inoculation: training the immune system first',
    ],
    words: 1596,
    readMins: 8,
    addedOn: '2026-10-28',
    blocks: [
      {
        kind: 'para',
        text: 'This book has studied media as an industry and an economy; this chapter studies media as an instrument. Persuasion is a technology with a history, a literature and — unusually for a technology — a field guide written in 1937 that still names the moves in your feed today. The mass-media lesson described the watchdog duties that legitimate journalism owes the public; here is the other side of the ledger: the organized techniques built to make audiences believe, feel and buy without noticing the machinery. Propaganda is not a genre of lie. It is the systematic selection and presentation of true, half-true and false material to steer belief — which is why detecting it requires knowing the devices, not just fact-checking individual claims.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every citizen now runs a personal broadcast network and a targeted-advertising department, and so does every government, brand and troll farm. The persuasion techniques invented for WWI posters and 1920s press releases scale perfectly to algorithmic feeds — repetition is cheaper than ever, and the illusory-truth effect means frequency alone does part of the work. Media literacy here is not a school subject but an immune system, and inoculation research shows it can be trained.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Persuasion goes industrial. The United States entered World War I in April 1917 with a deeply divided public; within a week Woodrow Wilson created the Committee on Public Information under journalist George Creel — the first modern ministry of information in an open society. Its output: some 75,000 "Four Minute Men" delivering standardized talking points in cinemas, a volunteer corps of artists producing thousands of posters (Uncle Sam pointing, by James Montgomery Flagg, came from this machinery), pamphlets in multiple languages, and a voluntary censorship regime that persuaded the press to self-police. Creel called it expression, not censorship — the honest reading is that it demonstrated modern messaging: coordinated narrative, emotional imagery, saturation repetition. The infrastructure was dismantled after the war; the playbook was not.',
      },
      {
        kind: 'para',
        text: 'The engineering of consent. Edward Bernays — Freud’s twice-connected nephew — worked on the CPI, then commercialized its lessons. His 1928 book "Propaganda" opened with the claim, shocking in print then and disturbing now, that "the conscious and intelligent manipulation of the organized habits and opinions of the masses is an important element in democratic society." His stunts are textbook: the 1929 "Torches of Freedom" march, which paid debutantes to smoke Lucky Strikes down Fifth Avenue and rebranded cigarettes as feminism, and the bacon-and-eggs breakfast campaign, which sold a client’s product by promoting the underlying meal. Walter Lippmann’s "Public Opinion" (1922) supplied the theory beneath both eras: real society is too big and complex to know directly, so people respond to "pictures in their heads" — stereotypes — which skilled communicators can paint. Bernays and Lippmann are the twin founders: one the analyst, one the operator.',
      },
      {
        kind: 'para',
        text: 'The seven devices. In 1937, alarmed by fascism’s messaging, the Institute for Propaganda Analysis published a field guide of seven devices — the canon every later taxonomy extends. Name-calling: attach an emotional label, skip the evidence ("groomers", "puppets"). Glittering generalities: attach virtue-words with no fixed meaning ("freedom", "the people", "innovation"). Transfer: borrow authority by adjacency — flags, scientists in lab coats, stock photos of judges. Testimonial: rent a trusted voice — celebrities, "doctors recommend". Plain folks: perform ordinariness — the leader in the diner, the brand "like you". Card stacking: build the case from selected facts — true statements, dishonest selection. Bandwagon: everyone is already doing it — join or lose. The devices persist because they exploit how attention and memory work, not because audiences are stupid; every ad campaign, press release and influencer post you scroll past uses at least two.',
      },
      {
        kind: 'para',
        text: 'Sorting the FUD. Contemporary analysis draws a three-way distinction on one axis — intent — with falseness as the other. Misinformation is false content shared without deceptive intent (the misread headline, the outdated chart passed along sincerely). Disinformation is false or manipulated content created and spread with intent to deceive — the category covering state troll campaigns and fabricated quotes. Malinformation is genuine information deployed to harm — the leak, the doxx, the out-of-context real video. The distinction matters because the defenses differ: misinformation responds to correction, disinformation to platform and policy pressure (the mass-media lesson’s regulation models), malinformation to privacy and security practice. The 2016–present era added industrial scale: coordinated inauthentic behaviour (networks of accounts run as one), astroturfing (fake grassroots), cheapfakes (real clips deceptively trimmed) and generative deepfakes, which moved fabrication from expensive studios to free phone apps.',
      },
      {
        kind: 'para',
        text: 'Why brains are vulnerable. The illusory truth effect — demonstrated by Hasher, Goldstein and Toppino in 1977 and replicated hundreds of times since — is the core vulnerability: repeated statements are judged more credible than novel ones, even when people knew better, even when the repetition is days apart. Repetition is a fluency signal, and fluency leaks into truth. Add confirmation bias (evidence we like gets less scrutiny), availability (vivid, recent cases inflate perceived frequency) and identity-protective cognition (beliefs that signal tribe membership resist factual correction), and the persuasion toolbox stops looking like cheating and starts looking like exploiting documented defaults. This is also why debunking alone underperforms: by the time the correction arrives, repetition has done its work and the correction itself repeats the false claim.',
      },
      {
        kind: 'para',
        text: 'Inoculation. If exposure persuades, pre-exposure can immunize: William McGuire’s inoculation theory (1961) showed that people warned about a weakened form of a manipulative argument resist the full-strength version later. The modern revival is prebunking — short games and explainers that teach the devices (name-calling, false dilemmas, scapegoating) before the feed delivers them. A 2022 Cambridge randomised study with over 21,000 participants across five videos ("Bad News", "Go Viral!") found measurable gains in recognizing manipulation techniques across the political spectrum — the rare media-literacy intervention with effect sizes to match its ambitions. Complement it with the verification craft the journalism lesson teaches — checking claims against independent sources before sharing — and the defense stack is complete: recognize the devices, verify the claims, refuse the amplification.',
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Elections: the devices name what campaign ads and troll farms do — card stacking in attack ads, plain-folks photo-ops, bandwagon "momentum" narratives; several countries now run prebunking campaigns ahead of votes.',
        'Public health: anti-vaccine messaging runs on testimonial (recovered anecdotes), transfer (white coats in "documentaries") and false balance; inoculation-style prebunking has been deployed against it (the "Go Viral!" game targeted COVID misinformation).',
        'Marketing: astroturf reviews, testimonial influencer deals, bandwagon "best-selling" labels — the same seven devices, with FTC disclosure rules as the counterweight.',
        'Security: recognizing coordinated inauthentic behaviour (synchronized posting, recycled avatars, catchphrase clusters) is now part of election-security and corporate-security tradecraft.',
        'Everyday feed hygiene: pause before sharing emotionally satisfying content, check who benefits, and remember that repetition — including repetition of the correction — is doing persuasive work.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, equating propaganda with lies: card stacking can be built entirely from true statements — selection is the technique. Second, using "propaganda" only for the other side: the IPA built its guide precisely because persuasion is partisan-blind; your own tribe’s memes use the devices most effectively against you. Third, debunking by repeating the myth in the headline — the correction amplifies the claim it corrects; lead with the fact. Fourth, believing media literacy means cynicism: the remedy for bad persuasion is scrutiny, not universal distrust — cynics are easier targets, not harder ones, because they discount all sources equally. Fifth, treating deepfakes as the main threat: the cheapfakes — real clips deceptively trimmed, retitled, recycled from last year — outnumber and outperform the synthetic ones, and need no technology at all.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Creel Committee', def: 'The Committee on Public Information (1917) — the first mass-persuasion apparatus of an open democracy; its playbook outlived it.' },
        { term: 'engineering of consent', def: 'Bernays’ phrase for the organized manipulation of public opinion — the professional practice he founded and named in print.' },
        { term: 'card stacking', def: 'The IPA device of selective truth — building a persuasive case from chosen facts while omitting the rest.' },
        { term: 'bandwagon', def: 'The device that persuades by claimed momentum — everyone is already on board, so join.' },
        { term: 'misinformation vs disinformation', def: 'False content without deceptive intent versus with intent — the axis that decides the appropriate response.' },
        { term: 'illusory truth effect', def: 'Repeated statements are rated more true than novel ones — repetition itself is a persuasion technique.' },
        { term: 'prebunking', def: 'Inoculation-theory practice: teach the manipulation techniques in weakened form before exposure, measurably improving resistance.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The Institute for Propaganda Analysis’s "card stacking" means…',
          options: ['lying outright about the facts', 'selectively presenting true facts to build a misleading case', 'printing cards for campaign events', 'citing academic studies'],
          answer: 1,
          explain: 'Card stacking is the dishonest selection of true statements — which is why fact-checking single claims does not expose it.',
        },
        {
          q: 'A sincere friend shares an outdated statistic believing it true. That is…',
          options: ['disinformation', 'misinformation', 'malinformation', 'propaganda by definition'],
          answer: 1,
          explain: 'No deceptive intent — misinformation. Disinformation requires intent to deceive; the same false claim produced by a troll farm would be disinformation.',
        },
        {
          q: 'The illusory truth effect explains why propaganda relies on…',
          options: ['logical rigor', 'repetition — repeated statements feel more credible', 'long citations', 'rare, untraceable outlets'],
          answer: 1,
          explain: 'Fluency from repetition leaks into judged truth, even against prior knowledge — frequency alone does persuasive work.',
        },
        {
          q: 'Prebunking works because…',
          options: ['it debunks every false claim faster than it spreads', 'a weakened dose of a manipulation technique, understood in advance, builds resistance to the full-strength version', 'it filters feeds automatically', 'cynical audiences believe nothing'],
          answer: 1,
          explain: 'McGuire’s inoculation logic, validated at scale by the 2022 Cambridge studies: teach the devices before exposure, and recognition transfers.',
        },
      ] },
    ],
  },
  {
    id: 'civ-foundations-geotechnical',
    title: 'Foundations and Ground Engineering: What Every Structure Stands On',
    domain: 'Engineering',
    field: 'Civil Engineering',
    branch: 'Geotechnical Engineering',
    tier: 'intermediate' as const,
    concepts: [
      'Soil is a three-phase material: solids, water, air',
      'Terzaghi’s effective stress σ′ = σ − u runs everything',
      'Consolidation: clay settles slowly, sand immediately',
      'Bearing capacity and the two failure modes',
      'Shallow footings versus deep piles',
      'Site investigation: the SPT and the soil profile',
      'Liquefaction and seismic ground improvement',
    ],
    words: 1765,
    readMins: 9,
    addedOn: '2026-10-28',
    blocks: [
      {
        kind: 'para',
        text: 'The structural chapters of this book analysed beams, columns and frames — idealized members with known properties. Everything they carry eventually reaches the ground, and the ground is the one structural material the engineer did not choose, cannot order to specification, and can only characterize by digging. Geotechnical engineering is the discipline that reads the ground, and its master variable was published by Karl Terzaghi — the field’s founder — in 1925: effective stress, the stress carried by the soil skeleton after pore-water pressure is subtracted. The previous chapter’s seismic design borrowed soil-amplification facts to explain site effects; this chapter builds the ground itself, from classification to bearing capacity to the liquefaction phenomenon that turns sand into a fluid in seconds.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'More structural failures trace to the ground than to the structure: differential settlement cracks buildings long before any yield line forms, and the deadliest seismic killers — liquefaction, lateral spreading, site amplification — are soil behaviours, not building behaviours. Every tall tower, bridge pier and levee spends a meaningful share of its budget on what the ground requires, and the Leaning Tower of Pisa remains the world’s most famous lesson in what happens when that share is underweighted.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The three-phase material. Soil is a skeleton of mineral particles with water and air in the voids between — which makes it unlike steel or concrete in a fundamental way: its behaviour depends on what fills the pores. The phase relationships give the language: void ratio (void volume over solids volume), degree of saturation, water content (weigh a wet sample, oven-dry it, weigh again). Clays are plastic because their flat, charged mineral plates (kaolinite, montmorillonite) interact electrochemically with adsorbed water — the Atterberg limits (liquid limit, plastic limit) quantify where a soil stops flowing and starts behaving plastically, and the plasticity index becomes the classifier’s first fork: gravels and sands (cohesionless) versus silts and clays (cohesive). Sand crushes and rearranges; clay creeps, swells and holds water for years. The same building behaves differently on each.',
      },
      {
        kind: 'para',
        text: 'Effective stress. Terzaghi’s insight, σ′ = σ − u — total stress minus pore-water pressure — explains half of geotechnical phenomenology in one line. Load carried by the water does nothing to the skeleton; load carried by the particle contacts does everything: strength and stiffness follow effective stress. It is why a drained sand is strong, why a saturated loose sand under cyclic shaking can momentarily lose all effective stress and flow like a liquid (liquefaction — the pore pressure rises until u approaches σ), and why pumping groundwater from a delta city, which drains pore pressure into the skeleton, consolidates the clay beneath — Mexico City, Jakarta and Bangkok are all sinking for this exact reason. The principle converts a soil problem into a hydraulics problem, and it is why water is the villain of every geotechnical report.',
      },
      {
        kind: 'para',
        text: 'Settlement and consolidation. Foundations rarely fail by bearing; they settle. Immediate (elastic) settlement happens as loads compress the soil skeleton at once — dominant in sands and gravels, drained almost instantly. Consolidation is clay’s slow story: loading raises pore pressure in the low-permeability clay, and the excess pressure drains out over months to decades while the skeleton compresses — the oedometer test measures the coefficient of consolidation, and Terzaghi’s one-dimensional consolidation theory predicts the time-settlement curve. Differential settlement — one corner dropping more than another — is the cracking mechanism: a uniform 50 millimetres is absorbed; 50 millimetres across a 20-metre façade is a diagnosis. The design levers: spread loads wider (rafts), preload and surcharge, wick drains to speed consolidation, or go deep.',
      },
      {
        kind: 'para',
        text: 'Bearing capacity. The classic check: can the ground under a footing resist shear failure? Terzaghi’s 1943 bearing-capacity equation — the archetype of a whole family — sums three terms: a width term (wider footings mobilize more ground), a depth term (surcharge above the base helps), and a cohesion term, each scaled by bearing-capacity factors that explode as friction angle rises. Two failure modes bound reality: general shear (dense soils — a well-defined wedge heaves the ground surface) and local/punching shear (loose soils — the footing just pushes down with no dramatic wedge). The safety factor applied to bearing capacity is large — around three — because soil parameters are uncertain in a way steel properties never are: the same site can vary across a single building footprint.',
      },
      {
        kind: 'para',
        text: 'Shallow or deep. Shallow foundations (spread footings under columns, strip footings under walls, rafts spanning the whole footprint) transfer load near the surface and are the default when competent soil sits within a few metres. Deep foundations go below the bad ground: driven or bored piles transfer load either to a firm stratum at depth (end-bearing) or along the shaft–soil interface by friction — and group behaviour matters, because closely spaced piles overlap their pressure bulbs and the group can settle more than the single-pile sum predicts. Pisa is the permanent case study: its foundation sits on soft clayey marine deposits, the south side has carried slightly more stress for eight centuries, and the tower’s famous tilt is differential settlement — the 1990s intervention excavated soil on the north side to reduce the lean by about 45 centimetres while keeping the tourist-attracting tilt.',
      },
      {
        kind: 'para',
        text: 'Reading the ground. You cannot design what you have not characterized. Site investigation begins with boreholes and the standard penetration test (SPT) — drop a 63.5-kilogram hammer 760 millimetres, count the blows to drive a sampler 300 millimetres; the N-value correlates with density, friction angle and, critically in seismic zones, liquefaction resistance — plus cone penetration tests (CPT) for continuous profiles, lab testing of recovered samples, and groundwater observation. The seismic design chapter’s site classes are built from this investigation: the average shear-wave velocity in the top 30 metres (Vs30) sorts sites A through F, and soft-soil sites get the long-period spectra that destroyed distant mid-rises in Mexico City. The boring log is the least glamorous document in engineering and the one that decides the foundation budget.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Question: a 2-metre square spread footing carries 1,200 kN on a sand with friction angle 35 degrees, unit weight 18 kN/m³, bearing-capacity factor Nq ≈ 33, Nγ ≈ 34, base at 1.5 m. Is the ground adequate?',
          'Compute the terms (ignore cohesion in sand; use Terzaghi’s form): net bearing capacity ≈ q·Nq·(correction) + 0.5·γ·B·Nγ. Roughly: (18×1.5)×33 ≈ 891 kPa plus 0.5×18×2×34 ≈ 612 kPa — order 1,500 kPa gross, before shape and depth corrections.',
          'Compare demand: 1,200 kN over 4 m² = 300 kPa. Against an allowable capacity of roughly 1,500/3 ≈ 500 kPa, the footing passes on bearing — margin is comfortable.',
          'Check settlement — the real limiter on sand: estimate using elastic or SPT-based methods; if predicted settlement exceeds the 25-millimetre typical limit, widen the footing (spreads the pressure bulb) or deepen it.',
          'Lesson: bearing capacity rarely governs on sand — serviceability (settlement) does. The worked check that matters is often the second one.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Seismic practice: liquefaction screening (SPT/CPT-based trigger curves), stone columns and compaction grouting to densify loose sands, and the Niigata 1964 images — apartment blocks tipped intact as their underlying sand lost strength — remain the field’s icon.',
        'Anchorage 1964: the Turnagain Heights slide — sensitive clay losing strength under cyclic loading — took an entire residential bench into the sea; landslide and lateral-spreading hazard mapping now precedes zoning in seismically active coasts.',
        'Deep foundations: skyscrapers in soft basins (Shanghai, Mexico City) stand on basements and piles tens of metres deep; the deepest bored piles reach rock under Kuala Lumpur’s Petronas Towers.',
        'Ground improvement: wick drains and preloading for port expansions, dynamic compaction for reclaimed land, jet grouting under existing structures — the toolkit that lets weak ground host modern infrastructure.',
        'Water control: dewatering, cut-off walls and the effective-stress logic behind them keep excavations dry and levees (and their Dutch ancestors) standing.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, treating soil as a weak concrete: it is a particulate, water-filled, history-dependent material — parameters vary across a site and tests sample a pitiful volume fraction. Second, ignoring groundwater: most geotechnical surprises are water surprises — buoyancy on basements, softening on wet clay, pore pressure under cyclic load. Third, checking bearing and forgetting settlement: most "failures" are serviceability cracks, not bearing blowouts. Fourth, extrapolating one boring log across a site: differential settlement begins with differential information. Fifth, trusting loose sand under seismic load because static design passed — liquefaction is a dynamic effective-stress event the static check never sees, which is exactly why the seismic chapter and this one are companions, not alternatives.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'effective stress (σ′)', def: 'Total stress minus pore-water pressure — the skeleton stress that controls soil strength and stiffness (Terzaghi 1925).' },
        { term: 'consolidation', def: 'The slow, drainage-controlled compression of saturated clay as excess pore pressure dissipates — settlement on a timescale of months to decades.' },
        { term: 'bearing capacity', def: 'The ground pressure at which soil beneath a foundation fails in shear; checked with a safety factor around three against uncertain parameters.' },
        { term: 'pile', def: 'A deep foundation element transferring load to depth by end-bearing on firm strata or by friction along the shaft.' },
        { term: 'standard penetration test (SPT)', def: 'The standard borehole test counting hammer blows to drive a sampler — the field’s cheapest strength and liquefaction indicator.' },
        { term: 'liquefaction', def: 'Cyclic loading (usually seismic) raising pore pressure until saturated loose sand loses effective stress and behaves as a heavy fluid.' },
        { term: 'Vs30', def: 'Average shear-wave velocity in the top 30 metres — the site-class parameter that sets the seismic design spectrum.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Terzaghi’s effective stress is…',
          options: ['total stress plus pore pressure', 'total stress minus pore-water pressure', 'the stress in the water alone', 'unit weight times depth always'],
          answer: 1,
          explain: 'σ′ = σ − u: only the skeleton carries strength-giving stress — water pressure carries load that does nothing to the particles.',
        },
        {
          q: 'Clay settles more slowly than sand under load mainly because clay…',
          options: ['is lighter', 'has much lower permeability, so excess pore pressure drains out over months to years', 'has no particles', 'cannot bear any load'],
          answer: 1,
          explain: 'Consolidation is a drainage problem: low-permeability clay delays pore-pressure dissipation, and settlement follows the drainage clock.',
        },
        {
          q: 'Liquefaction occurs when…',
          options: ['dry sand is blown by wind', 'cyclic shaking raises pore pressure in saturated loose sand until effective stress vanishes', 'clay is over-consolidated', 'the water table drops'],
          answer: 1,
          explain: 'Shaking rearranges the loose skeleton, water pressure spikes, the skeleton loses contact — the sand flows. Niigata 1964 is the icon.',
        },
        {
          q: 'On a competent sand, the check that usually governs footing design is…',
          options: ['bearing capacity', 'settlement (serviceability)', 'soil chemistry', 'pile group efficiency'],
          answer: 1,
          explain: 'Bearing margins are comfortable; the 25-millimetre settlement limit usually sizes the footing — serviceability, not failure.',
        },
      ] },
    ],
  },
  {
    id: 'grow-pests-diseases-ipm',
    title: 'Pests, Diseases and IPM: Protecting the Garden Without Poisoning It',
    domain: 'Everyday Knowledge',
    field: 'Garden & Growing',
    branch: 'Plant Health',
    tier: 'core' as const,
    concepts: [
      'Diagnosis first: signs versus symptoms, biotic versus abiotic',
      'The disease triangle: host, pathogen, environment',
      'Chewing pests versus sucking pests — two damage signatures',
      'The IPM ladder: cultural, physical, biological, chemical last',
      'Biological control: predators, parasitoids and microbial allies',
      'Least-toxic chemistry: soaps, oils and the resistance problem',
    ],
    words: 1742,
    readMins: 9,
    addedOn: '2026-10-28',
    blocks: [
      {
        kind: 'para',
        text: 'This book has covered growing things and making more of them; this chapter covers keeping them alive. Every garden loses something every season — chewed leaves, mildewed squash, a sap-sucked tomato — and the difference between a thriving garden and a chemical treadmill is rarely access to stronger products. It is diagnosis and sequence: knowing what is actually attacking the plant, and working through the interventions in the order that solves the problem without manufacturing a worse one. The framework gardeners borrow from professional agriculture is Integrated Pest Management (IPM) — developed for cotton and alfalfa in the late 1950s, now the standard from FAO programs to school gardens — and its core discipline is exactly the opposite of the spray-first reflex: scout, identify, decide on a threshold, act with the least-disruptive effective tool, and re-check.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Gardens are the smallest ecosystems most people will ever manage, and they teach the principles that govern farms and forests: broad-spectrum poisons kill the ladybirds as readily as the aphids, and the aphids — faster breeders — return first, now without enemies. That dynamic, pest resurgence, is the recurring lesson of a century of insecticide use. A gardener who learns to work with predators instead of against them is running a miniature of modern agricultural policy in a few square metres.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Diagnosis before treatment. The first skill is telling the suspects apart. Biotic problems are living: insects, mites, fungi, bacteria, viruses — they spread, progress and target specific plants. Abiotic problems are environmental: drought, waterlogging, nutrient deficiency, herbicide drift, frost — they hit uniformly, often across plant species, and show patterns matching their cause (the whole bed near the sprayed verge, the pot against the reflecting wall). Within the living causes, distinguish signs (the pest itself — frass, webbing, the fungus’s spores, the bacterial ooze) from symptoms (the plant’s response — wilting, chlorosis, lesions, distortion). Chewing pests leave holes and missing margins; sucking pests (aphids, whiteflies, scale, spider mites) leave stippled, curled, sticky leaves — the stickiness is honeydew, and its black coating (sooty mould) is a signature. Most failed treatments are misdiagnoses: spraying a fungicide at a nutrient deficiency, or an insecticide at mites that a miticide would have needed.',
      },
      {
        kind: 'para',
        text: 'The disease triangle. Plant disease requires three aligned factors: a susceptible host, a virulent pathogen, and a favourable environment — remove any one and the disease cannot run. This is why cultural controls work. Resistant cultivars attack the host corner; crop rotation attacks the pathogen corner by starving it of its host for seasons long enough to break its cycle (tomato pathogens in the soil, potatoes repeated on the same bed, the classic failures); and the environment corner is where gardeners hold the most power — overhead watering leaves foliage wet overnight and hands powdery mildew its favourite climate, while soil-level watering and spacing for airflow change the microclimate the pathogen needs. Sanitation removes overwintering refuges: infected leaves do not compost back into next year’s epidemic, tools are wiped between plants, and diseased material leaves the garden rather than recycling in place.',
      },
      {
        kind: 'para',
        text: 'Scout and threshold. IPM replaces the calendar spray with a decision: act when the damage or pest count crosses a threshold — the point where the harm outweighs the cost and risk of acting, or where tolerable cosmetic damage becomes real loss. A few aphids on one leaf tip is a ladybird lunch, not an emergency; aphids on every growing point of a seedling are a threat. Scouting is a habit, not an event: walk the garden twice a week, check leaf undersides (where most pests actually live), look at new growth first, and keep notes — the second season of a garden is dramatically easier because the first season’s notes name its recurring problems and their timing.',
      },
      {
        kind: 'para',
        text: 'The ladder. IPM orders its tools from least to most disruptive. Cultural controls come first: rotate, choose resistant varieties, water at soil level, feed appropriately (lush over-fertilized growth is aphid candy), prune for airflow, clean up at season’s end. Physical and mechanical controls next: floating row covers exclude cabbage moths and carrot fly entirely (remove them when pollination is needed); collars stop cutworms; copper tape slows slugs; handpicking works at garden scale for hornworms and potato beetles; yellow sticky cards monitor and thin whiteflies and fungus gnats. Biological control third: the garden’s own predators and purchased allies. Chemical controls last, and at garden scale that means the least-toxic ladder before any synthetic: insecticidal soap (works on soft-bodied insects on contact, not on eggs), horticultural and neem oils (smother scale and mites, deter feeding), Bt spray for caterpillars — the same bacterial toxin the biotechnology lesson covers in its engineered-crop form, used here under the bacterium’s own schedule — and only then, with everything else failed, a targeted product aimed at the specific pest, never a broad-spectrum "all-purpose" spray by default.',
      },
      {
        kind: 'para',
        text: 'The biology that does the work for you. A garden managed with some tolerance becomes self-defending: ladybird beetles eat thousands of aphids across a lifetime; lacewing larvae ("aphid lions") are hungrier still; parasitoid wasps lay eggs in aphids, turning them into brown "mummies" that release the next wasp generation. The gardener’s job is habitat: flowers with open nectar (dill, alyssum, calendula) feed adult predators, a shallow water source helps, and — crucially — not spraying when spray is unnecessary. Microbial allies extend the roster: Bacillus thuringiensis for caterpillars, entomopathogenic nematodes for soil-dwelling grubs, Trichoderma fungi against root rots. The biotechnology lesson explains how Bt’s crystal toxin works and why resistance management (refuges) matters at field scale; at garden scale the rule is simpler — target sprays at the caterpillar that is actually eating, not at the garden in general.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Question: the courgette leaves show pale stippling, and some leaf undersides have fine webbing. Diagnose and build the plan.',
          'Diagnose: stippling plus webbing on leaf undersides in hot dry weather points to spider mites — sucking pests, not a disease; check with a hand lens or the tap-and-paper test (tap a leaf over white paper; moving specks = mites).',
          'Cultural first: mites flare on drought-stressed plants in dusty, dry air — water consistently and rinse foliage in the morning so leaves dry by evening (mildew discipline, not overhead-overnight).',
          'Physical/biological next: spray water under leaves to knock populations back; release or attract predatory mites and lacewings; hold off on any broad-spectrum insecticide — it kills the predators and the mites rebound harder (resurgence).',
          'Least-toxic chemical if threshold crossed: horticultural oil or insecticidal soap on undersides, repeated per label (they kill on contact, not eggs), rotating modes to avoid resistance.',
          'Re-check in five to seven days and record the episode in the garden journal — the timing and trigger become next season’s early-warning.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Home gardens: the scouting-and-threshold habit plus row covers and predator habitat resolves most vegetable-patch problems without anything beyond soap and oil.',
        'Agriculture: IPM is the global standard — FAO farmer-field-school programs, EU directive requirements and most national extension services train it; the pesticide-reduction targets now written into EU farm policy are IPM targets.',
        'Public health: the same logic runs mosquito control — source reduction (draining containers), biological agents (Bacillus thuringiensis israelensis in water), targeted adulticiding only above thresholds.',
        'Greenhouses: commercial growers release parasitoid wasps and predatory mites on schedules — biological control is a routine purchased service, not an ideal.',
        'Policy literacy: understanding resurgence and resistance explains why agricultural chemicals rotate, why refuges are mandated next to Bt crops, and why "spray more" is never the answer to a failed spray.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, treating symptoms without diagnosis: "bugs" get blamed for what is underwatering or herbicide drift, and the spray solves nothing. Second, spraying the garden rather than the pest: broad-spectrum insecticides are resurgence machines — they reset the predator community while the fast-breeding pests return first. Third, ignoring the disease triangle: a fungicide-resistant rose in the same damp, crowded corner will need spraying forever; move the watering, open the airflow, and the disease pressure falls with it. Fourth, dosing by mood rather than label: soap and oil are least-toxic, not non-toxic — wrong concentration burns leaves, and spraying in full sun compounds the damage; oils and soaps kill on contact only, so misses survive. Fifth, expecting eradication: IPM manages populations below thresholds — a garden with some aphids and some ladybirds is a working system, not a failing one.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Integrated Pest Management (IPM)', def: 'The decision framework — scout, identify, threshold, least-disruptive tool first — born in 1950s field crops and now the global standard.' },
        { term: 'disease triangle', def: 'Host × pathogen × environment: disease needs all three, so removing any one prevents it.' },
        { term: 'honeydew', def: 'The sticky sugary waste of sucking pests (aphids, scale, whitefly) — its sooty-mould coating is a diagnostic signature.' },
        { term: 'threshold', def: 'The pest level at which action beats tolerance — IPM’s replacement for the calendar spray.' },
        { term: 'resurgence', def: 'The rebound of a pest after broad-spectrum spraying kills its natural enemies — the classic argument for biological control.' },
        { term: 'parasitoid', def: 'An insect whose larvae develop inside a host (aphid mummies are parasitoid work) — the biological control workhorse.' },
        { term: 'Bt spray', def: 'Bacillus thuringiensis applied as an organic caterpillar control — the natural version of the toxin engineered into Bt crops.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Sticky, curled leaves with a black film, but no holes, suggest…',
          options: ['a chewing caterpillar', 'sucking pests such as aphids or scale producing honeydew', 'nitrogen deficiency', 'a viral wilt'],
          answer: 1,
          explain: 'Honeydew and sooty mould are the sucking-pest signature; chewing insects remove tissue and leave holes or margins.',
        },
        {
          q: 'The disease triangle says tomato blight can be prevented by…',
          options: ['spraying weekly regardless of disease', 'any one of resistant varieties, rotation/sanitation, or drier foliage — removing one corner breaks the triangle', 'fertilizing more', 'watering overhead every evening'],
          answer: 1,
          explain: 'Disease needs a susceptible host, a pathogen and a favourable environment — remove one and the cycle cannot run.',
        },
        {
          q: 'Spraying a broad-spectrum insecticide against a small aphid colony often ends with…',
          options: ['permanent aphid elimination', 'resurgence — aphids breed back faster than their newly killed predators', 'more ladybirds', 'an end to all garden pests'],
          answer: 1,
          explain: 'The spray resets the predator community; fast-breeding pests return first without enemies — resurgence is the textbook outcome.',
        },
        {
          q: 'The correct IPM order of tools is…',
          options: ['chemical first for speed', 'cultural → physical → biological → least-toxic chemical last', 'biological only, never anything else', 'all tools at once'],
          answer: 1,
          explain: 'IPM escalates from rotation/variety/watering through exclusion and predators to targeted, least-toxic chemistry — used at threshold, not on schedule.',
        },
      ] },
    ],
  },
  {
    id: 'career-resume-networking-applications',
    title: 'Resumes, Cover Letters and the Hidden Job Market',
    domain: 'Everyday Knowledge',
    field: 'Career & Communication',
    branch: 'Getting Hired',
    tier: 'core' as const,
    concepts: [
      'The resume is a marketing document, not an autobiography',
      'Quantified bullets: action verb, task, number, outcome',
      'The ATS reality: mirror the posting’s language',
      'Cover letters: three paragraphs that earn the read',
      'The hidden job market: referrals beat portals',
      'Informational interviews and weak ties',
      'References and follow-up: the loop closed properly',
    ],
    words: 1865,
    readMins: 9,
    addedOn: '2026-10-28',
    blocks: [
      {
        kind: 'para',
        text: 'The interview lesson covered the room where hiring is decided; this lesson covers the machinery that gets you into the room — and the machinery is less meritocratic than most candidates assume. Applications are screened, often by software before any human reads them; a large share of openings are filled through referrals before they are advertised at all; and the documents that represent you are skimmed, not studied. None of this is cynicism — it is the mechanics of matching at scale, and every part of it rewards preparation differently than most people prepare. The interview lesson ended by promising that resume and networking skills extend this branch; this is that extension: the complete application toolkit, from the self-inventory that starts a search to the thank-you note that ends an interview loop.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Most candidates lose jobs before the interview stage for reasons that are entirely fixable: a resume formatted for human eyes but unreadable by the software that filters them, generic applications that mirror nothing in the posting, and a job search conducted entirely through application portals while the hiring manager’s colleague is asking their network for referrals. The gap between a tailored application and a generic one is hours per week — and it is the highest-paid hours available, because they compound across every application.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The resume’s actual job. A resume has one function: to earn a screening yes — a conversation, not a biography. The eye-tracking research (the Ladders study, replicated across formats) found recruiters spend on the order of six to seven seconds on a first pass, scanning name, current title, most recent roles and dates; the document must survive that scan and plant the hooks a second look will follow. Format accordingly: reverse-chronological order as the default (recruiters read it fastest; functional "skills-first" formats raise suspicion precisely because they hide chronology), one page for early careers and two maximum beyond, clean single-column layout (the two-column designs that look striking to humans scramble the parsers), and consistent, machine-readable text — no critical information inside images, headers, footers or tables, because the software reading the file may not see them at all.',
      },
      {
        kind: 'para',
        text: 'Bullets that work. The unit of a modern resume is not the duty list but the quantified achievement: action verb, task, number, outcome. "Responsible for social media" says nothing; "Grew the clinic’s Instagram from 400 to 5,000 followers in 11 months, generating 30+ appointment requests per month" is evidence — it claims, measures and implies transferable skill. Numbers need not be revenue: counts (documents processed, tickets resolved), rates (per week), percentages (error reduction), scale (team size, budget), and before/after states all work; where the number is confidential or unknown, a magnitude ("in a 12-person team", "for a 40,000-student university") still beats vagueness. Trim the duties that anyone in the role had, keep the deltas that you specifically caused, and check every verb — "led", "built", "reduced", "negotiated" carry weight; "assisted with", "involved in" and "helped" donate your credit to committees.',
      },
      {
        kind: 'para',
        text: 'The ATS reality. Most mid-size and large employers filter applications through an applicant tracking system (ATS) that parses the resume into fields and ranks it against the posting — by keywords and, in some stacks, by model-based semantic matching. The practical consequence is keyword mirroring: read the posting, note the exact phrases ("project management", "SQL", "stakeholder communication", the certification names), and ensure the true ones appear in your resume in natural sentences — because the system, and the human after it, looks for their words, not your synonyms. Honesty is both ethics and strategy: claimed skills get probed at interview and verified by background checks, and an ATS pass earns only an interview the candidate cannot survive. Tailoring per application is where the leverage is: the same five bullet points re-aimed at each posting’s stated priorities outperform a perfect generic resume every time.',
      },
      {
        kind: 'para',
        text: 'The cover letter, revived by brevity. The letter’s job is the one the resume cannot do: connect your specific evidence to this specific role and employer. Three paragraphs suffice. The hook: why this role, this employer — one sentence of genuine specificity beats a paragraph of enthusiasm. The evidence: the two or three resume items that map to the posting’s top requirements, with the numbers already quantified, framed as "what I would bring". The fit and close: practicalities (location, notice period) and a confident ask. Address it to a person where findable; match the posting’s register; and never restate the resume line by line — the letter’s whole value is the connective reasoning the resume cannot carry.',
      },
      {
        kind: 'para',
        text: 'The hidden job market. A large share of hires — survey estimates commonly run 30 to 50 percent, higher in senior roles — begin as referrals, internal moves or direct outreach rather than portal applications; the portal is where those jobs end up only after the network has been exhausted. The sociology lesson owns the theory: Granovetter’s weak ties — acquaintances, not close friends — carry most job information, because close circles know what you know. The practice: identify target organizations, find second-degree connections there, and ask for information, not jobs — the informational interview: fifteen to twenty minutes about their work, ending with "who else would you suggest I speak to?" The ask-for-information framing works because it is small, flattering and safe; the pipeline it opens works because when a role appears, the manager’s colleague already knows your name. Maintain the network between searches — the give-first habit (share articles, congratulate moves, answer questions in your domain) builds the account you withdraw from when searching.',
      },
      {
        kind: 'para',
        text: 'The professional surface. The LinkedIn profile is the living resume: recruiters search it by keyword, so the headline and About section should carry the search terms you want to be found under, and the Experience entries can run longer and more narrative than the resume allows. Consistency matters — dates and titles that contradict the resume raise the first doubt. Beyond the profile: for technical fields, a portfolio (GitHub with readable commit history, a personal site, writing samples) does the showing that claiming cannot; for design fields, a curated portfolio of four to six pieces with process notes beats a hundred. And close every loop: ask references’ permission before listing them, give them the posting and your talking points so they can help rather than improvise, send the post-interview thank-you within a day (the interview lesson’s follow-up rule), and keep application records — where, when, whom — because "following up" only works if you know whom to follow up with.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Question: convert "Responsible for the student society’s annual fundraiser" into a resume bullet that survives a six-second scan.',
          'Inventory the facts: how much raised, compared with what baseline; how many volunteers; what you personally decided or changed; what happened next year.',
          'Draft with the formula — action verb, task, number, outcome: "Led a 12-person committee to run the annual fundraiser, growing proceeds 40% (2,800 to 3,900) through corporate sponsorship outreach I initiated."',
          'Tighten: cut the passive and the committee framing you did not own — keep only claims you can defend in interview (the sponsorship outreach was yours; the ticketing upgrade was shared — say so if asked).',
          'Mirror the target posting: if the role asks for "stakeholder engagement" and "partnership development", those exact phrases should frame this bullet in that application — same truth, targeted language.',
        ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Entry-level searches: one master resume with quantified bullets, tailored per posting; ATS-friendly single-column format; a three-paragraph letter; five outreach messages per week to second-degree contacts.',
        'Career changes: the functional temptation is real but risky — the better play is reverse-chronological bullets re-aimed at the new field’s vocabulary, with the cover letter carrying the why-I-am-switching narrative.',
        'Senior roles: the network dominates (referral share rises with seniority); executive search runs on reputations and informational conversations years before vacancies post.',
        'Contract and freelance markets: the portfolio and profile are the resume; testimonials function as quantified bullets; the pipeline is continuous outreach, not applications.',
        'Ongoing hygiene: update the resume and profile quarterly while employed — recalls are fuzzy after two years, and the emergency version should never be written during the emergency.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'First, the duty-list resume: "responsible for" bullets claim nothing checkable — convert every entry to at least one quantified outcome. Second, the beautiful-but-unparseable template: columns, text boxes and graphics flatter humans and blind parsers; format for the software, style it with whitespace. Third, keyword stuffing: strings of white-text or sidebar keywords get caught by humans and models alike; mirror language you can defend. Fourth, networking as begging: asking strangers for jobs fails; asking for information builds relationships that produce referrals later — and never let a contact become a name you only message when you need something. Fifth, lying on the resume: background checks verify dates, titles and degrees routinely, and the discovery voids offers already made — the honest tailored version wins more slowly and actually. Sixth, skipping the thank-you: the loop is closed by the candidate who follows up, and it is the cheapest differentiator in the entire process.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'ATS (applicant tracking system)', def: 'The software that parses and ranks applications before human review — the reason resumes must be machine-readable and keyword-mirrored.' },
        { term: 'quantified bullet', def: 'Action verb + task + number + outcome — the resume unit that claims, measures and implies transferable skill.' },
        { term: 'keyword mirroring', def: 'Using the posting’s exact terms in your true claims, so the filter and the reader both find their own language.' },
        { term: 'hidden job market', def: 'The share of roles filled via referrals and direct outreach before (or instead of) public advertising.' },
        { term: 'informational interview', def: 'A short conversation requested to learn about someone’s work — the ask that opens pipelines without asking for jobs.' },
        { term: 'weak tie', def: 'An acquaintance rather than a close friend — the tie type that carries most job information (Granovetter; theory owned by the sociology lesson).' },
        { term: 'master resume', def: 'The maintained long-form inventory of everything done and quantified, from which tailored one-page versions are cut per application.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The strongest resume bullet unit is…',
          options: ['a duty list of responsibilities', 'action verb + task + number + outcome', 'a paragraph of self-description', 'a skills bar chart'],
          answer: 1,
          explain: 'Quantified achievements claim, measure and imply transferable skill — duties claim nothing checkable.',
        },
        {
          q: 'Why must a resume be single-column, image-free, plain-text-friendly?',
          options: ['it prints better', 'ATS parsers may not read information inside tables, headers, images or multi-column layouts', 'it uses less paper', 'recruiters dislike design'],
          answer: 1,
          explain: 'The first reader is software; content it cannot parse simply does not exist — including your degree if it lives in a header.',
        },
        {
          q: 'The informational interview asks for…',
          options: ['a job opening', 'information about the person’s work and advice on entering the field', 'a referral bonus', 'a reference letter immediately'],
          answer: 1,
          explain: 'The small, safe ask builds the relationship that later produces referrals — asking for a job on first contact closes the door the meeting was meant to open.',
        },
        {
          q: 'The "hidden job market" refers to…',
          options: ['illegal hiring', 'roles filled through referrals and direct outreach before public advertising', 'jobs posted on obscure websites', 'temp positions'],
          answer: 1,
          explain: 'A large share of hires — more at senior levels — never reach the portals; networks hear first, which is why the network is maintained between searches.',
        },
      ] },
    ],
  },
]
