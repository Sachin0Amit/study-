/* ------------------------------------------------------------------ */
/*  Subject taxonomy — the canonical SUBJECT-WISE classification      */
/*                                                                     */
/*  USER RULE (verbatim intent): "Make all the things in the Library   */
/*  subject-wise, not field-wise. If it is maths it should be a        */
/*  single book of maths — whether IIT maths, GATE maths or            */
/*  engineering maths — inside which chapters group the topics: if it  */
/*  is integration, then ALL integration content sits in that          */
/*  chapter. Do this for every subject."                               */
/*                                                                     */
/*  USER RULE 2 (2026-10-25, verbatim intent): "Art history should     */
/*  have separate book. Visual art has separate book. Music has        */
/*  separate book. Film animation have separate books, and so on.      */
/*  And each separate book have multiple chapters, multiple lessons    */
/*  inside it. Do this for all of the fields and subject."             */
/*                                                                     */
/*  USER RULE 3 (2026-10-25, verbatim intent): "do these things for    */
/*  biology — the chapter can become separate books, it has such       */
/*  chapters." Biology follows Arts & Culture: each discipline-grade   */
/*  chapter (Cell & Molecular Biology, Biochemistry, Genetics,         */
/*  Evolution, Botany, Zoology, Ecology, Microbiology & Immunology,    */
/*  Human Anatomy & Physiology, Developmental Biology, Marine          */
/*  Biology, Bioinformatics & Genomics, Synthetic Biology) is its own  */
/*  book in the Life Sciences shelf.                                   */
/*                                                                     */
/*  USER RULE 4 (2026-10-25, verbatim intent): "do such type of       */
/*  things all subjects." The Biology pattern now applies to every     */
/*  remaining multi-discipline volume: Law (7 books), Economics (5),   */
/*  History (5), Political Science (4), Business & Management (4),    */
/*  Environmental Science (3) + Urban Studies, Everyday Life Skills    */
/*  (6), Civil Engineering (4), Accounting (2), Medicine & Treatment  */
/*  (3). Single disciplines with sub-areas stay one book (Mathematics, */
/*  Sociology, Linguistics, Finance & Banking) unless their chapters   */
/*  are themselves discipline-grade.                                   */
/*                                                                     */
/*  Every knowledge topic is assigned to ONE canonical subject via     */
/*  its field (ownFields). Inside a subject, topics are grouped into   */
/*  canonical chapters (matched by field OR branch, with a             */
/*  branch-name fallback). Subjects marked `mergeInto` do NOT create   */
/*  a new Library subject — their chapters are appended to the         */
/*  existing curated master book (e.g. the Mathematics Master          */
/*  Library), so the user sees exactly ONE book per subject.           */
/*                                                                     */
/*  Topics themselves never move ids: sections stay `ku-<topicId>`,    */
/*  so progress tracking, the exam-coverage matcher and content.json   */
/*  are unaffected by this presentation-layer regrouping.              */
/* ------------------------------------------------------------------ */

export interface TaxonomyChapter {
  /** canonical chapter title the user sees inside the book */
  name: string
  /** match topics by their knowledge field (any domain) */
  fields?: string[]
  /** match topics by their branch (scoped to this subject) */
  branches?: string[]
}

export interface TaxonomySubject {
  /** kebab-case key — subject id becomes `ku-<key>` */
  key: string
  name: string
  /** Library catalog group (Foundations / Natural Sciences / …) */
  group: string
  icon: string
  accent: string
  tagline: string
  /** one-line description used on the subject card */
  blurb: string
  /** fields owned by this subject (disjoint across subjects); empty for branch-routed subjects */
  ownFields?: string[]
  /** when set, chapters append to this curated book instead of a new subject */
  mergeInto?: { subjectId: string; bookId: string }
  chapters: TaxonomyChapter[]
}

export const SUBJECT_TAXONOMY: TaxonomySubject[] = [
  /* ================================================================ */
  /*  MERGES into the curated master books — one book per subject      */
  /* ================================================================ */

  {
    key: 'mathematics-unified',
    name: 'Mathematics',
    group: 'Foundations',
    icon: 'sigma',
    accent: '#10b981',
    tagline: 'Every branch of mathematics, one volume',
    blurb: 'All mathematics in the Library — from elementary algebra and numeracy through calculus, discrete structures and statistics.',
    ownFields: [
      'Algebra', 'Applied & Finite Mathematics', 'Calculus', 'Discrete Mathematics',
      'Everyday Math & Numeracy', 'Foundations', 'Geometry & Measurement', 'Linear Algebra',
      'Mathematics', 'Number Theory', 'Probability & Statistics', 'Set Theory & Logic',
    ],
    mergeInto: { subjectId: 'mathematics', bookId: 'math-master' },
    chapters: [
      { name: 'Sets, Logic & Mathematical Foundations', fields: ['Foundations', 'Set Theory & Logic'] },
      { name: 'Algebra', fields: ['Algebra'] },
      { name: 'Number Theory', fields: ['Number Theory'] },
      { name: 'Calculus', fields: ['Calculus'] },
      { name: 'Linear Algebra', fields: ['Linear Algebra'] },
      { name: 'Geometry & Measurement', fields: ['Geometry & Measurement'] },
      { name: 'Discrete Mathematics', fields: ['Discrete Mathematics'] },
      { name: 'Probability & Statistics', fields: ['Probability & Statistics', 'Mathematics'] },
      { name: 'Applied Mathematics & Numeracy', fields: ['Applied & Finite Mathematics', 'Everyday Math & Numeracy'] },
    ],
  },
  {
    key: 'physics-unified',
    name: 'Physics',
    group: 'Foundations',
    icon: 'atom',
    accent: '#f59e0b',
    tagline: 'The unified physics curriculum',
    blurb: 'Physics extensions — nonlinear science, complexity and the physics of everyday phenomena.',
    ownFields: ['Physics', 'Physics of Complexity', 'Physics of Everyday Phenomena', 'Photonics', 'Systems Science'],
    mergeInto: { subjectId: 'physics', bookId: 'phys-master' },
    chapters: [
      { name: 'Physics — Extension Topics', fields: ['Physics'] },
      { name: 'Nonlinear Science & Complexity', fields: ['Physics of Complexity', 'Systems Science'] },
      { name: 'Physics of Everyday Phenomena', fields: ['Physics of Everyday Phenomena'] },
      { name: 'Photonics', fields: ['Photonics'] },
    ],
  },
  {
    key: 'chemistry-unified',
    name: 'Chemistry',
    group: 'Foundations',
    icon: 'hexagon',
    accent: '#22d3ee',
    tagline: 'Molecules, mechanisms and applications',
    blurb: 'Applied and analytical chemistry extensions to the core physical–organic–inorganic volume.',
    ownFields: ['Chemistry'],
    mergeInto: { subjectId: 'chemistry', bookId: 'chem-complete' },
    chapters: [{ name: 'Applied & Analytical Chemistry', fields: ['Chemistry'] }],
  },
  {
    key: 'english-unified',
    name: 'English & Comprehension',
    group: 'Foundations',
    icon: 'type',
    accent: '#f472b6',
    tagline: 'Read deeply, write precisely',
    blurb: 'Reading strategy, academic English, writing, grammar and creative writing — every verbal skill in one volume.',
    ownFields: [
      'Academic English Skills', 'Academic Reading', 'Academic Writing', 'Creative Writing',
      'Grammar & Mechanics', 'Professional Writing', 'Reading & Literacy', 'Reading Skills',
      'Reading Strategy', 'Speaking & Listening',
    ],
    mergeInto: { subjectId: 'english', bookId: 'english-complete' },
    chapters: [
      { name: 'Reading Skills & Strategies', fields: ['Reading & Literacy', 'Reading Strategy', 'Academic Reading', 'Reading Skills'] },
      { name: 'Academic English Skills', fields: ['Academic English Skills'] },
      { name: 'Writing, Grammar & Composition', fields: ['Academic Writing', 'Professional Writing', 'Grammar & Mechanics'] },
      { name: 'Speaking & Listening', fields: ['Speaking & Listening'] },
      { name: 'Creative Writing', fields: ['Creative Writing'] },
    ],
  },
  {
    key: 'aptitude-unified',
    name: 'Aptitude & Reasoning',
    group: 'Foundations',
    icon: 'brain',
    accent: '#a3e635',
    tagline: 'Sharpen every kind of thinking',
    blurb: 'Verbal, logical and nonverbal reasoning, situational judgement and decision strategy.',
    ownFields: [
      'Logical Reasoning', 'Logic and Reasoning', 'Nonverbal Reasoning',
      'Professional & Interpersonal Skills', 'Verbal Reasoning',
    ],
    mergeInto: { subjectId: 'aptitude', bookId: 'aptitude-complete' },
    chapters: [
      { name: 'Verbal, Logical & Nonverbal Reasoning', fields: ['Verbal Reasoning', 'Logical Reasoning', 'Nonverbal Reasoning', 'Logic and Reasoning'] },
      { name: 'Situational Judgement', fields: ['Professional & Interpersonal Skills'] },
      { name: 'Games & Decision Strategy', fields: ['Games & Strategy'] },
    ],
  },
  {
    key: 'java-unified',
    name: 'Java Programming',
    group: 'Programming & Software',
    icon: 'package',
    accent: '#dc2626',
    tagline: 'Objects, streams and enterprise craft',
    blurb: 'Java in practice — objects, arrays and boolean logic.',
    ownFields: ['Programming'],
    mergeInto: { subjectId: 'programming-java', bookId: 'java-complete' },
    chapters: [{ name: 'Java in Practice', fields: ['Programming'] }],
  },
  {
    key: 'dsa-unified',
    name: 'Data Structures & Algorithms',
    group: 'Computing Systems',
    icon: 'network',
    accent: '#8b5cf6',
    tagline: 'Structures that scale',
    blurb: 'Hash tables and collision resolution.',
    ownFields: ['Data Structures & Algorithms'],
    mergeInto: { subjectId: 'dsa', bookId: 'dsa-complete' },
    chapters: [{ name: 'Hashing & Data Structures', fields: ['Data Structures & Algorithms'] }],
  },
  {
    key: 'ai-unified',
    name: 'AI, Machine Learning & Data Science',
    group: 'Programming & Software',
    icon: 'bot',
    accent: '#06b6d4',
    tagline: 'From neurons to transformers',
    blurb: 'Deep learning, neural computation and brain-inspired hardware.',
    ownFields: ['Machine Learning', 'Brain-Inspired Computing'],
    mergeInto: { subjectId: 'ai-data-science', bookId: 'ai-complete' },
    chapters: [{ name: 'Deep Learning & Neural AI', fields: ['Machine Learning', 'Brain-Inspired Computing'] }],
  },
  {
    key: 'cybersecurity-unified',
    name: 'Cybersecurity',
    group: 'Computing Systems',
    icon: 'lock',
    accent: '#ef4444',
    tagline: 'Secrets and trust',
    blurb: 'Cryptography and distributed trust systems.',
    ownFields: ['Cybersecurity', 'Distributed Systems'],
    mergeInto: { subjectId: 'cybersecurity', bookId: 'cybersecurity-complete' },
    chapters: [{ name: 'Cryptography & Distributed Trust', fields: ['Cybersecurity', 'Distributed Systems'] }],
  },
  {
    key: 'os-unified',
    name: 'Operating Systems',
    group: 'Computing Systems',
    icon: 'hard-drive',
    accent: '#64748b',
    tagline: 'The illusion of many machines',
    blurb: 'Operating systems in practice.',
    ownFields: ['Systems & Infrastructure'],
    mergeInto: { subjectId: 'operating-systems', bookId: 'os-complete' },
    chapters: [{ name: 'Operating Systems in Practice', fields: ['Systems & Infrastructure'] }],
  },
  {
    key: 'power-unified',
    name: 'Power Systems',
    group: 'Electrical & Power',
    icon: 'plug',
    accent: '#facc15',
    tagline: 'The grid, explained',
    blurb: 'Three-phase power and grid fundamentals.',
    ownFields: ['Electrical & Electronics Engineering'],
    mergeInto: { subjectId: 'power-systems', bookId: 'power-complete' },
    chapters: [{ name: 'Power Systems', fields: ['Electrical & Electronics Engineering'] }],
  },
  {
    key: 'control-unified',
    name: 'Control & Instrumentation',
    group: 'Electrical & Power',
    icon: 'gauge',
    accent: '#0ea5e9',
    tagline: 'Feedback that holds',
    blurb: 'Feedback control and PID tuning.',
    ownFields: ['Mechanical Engineering'],
    mergeInto: { subjectId: 'control-instrumentation', bookId: 'control-complete' },
    chapters: [{ name: 'Feedback Control Systems', fields: ['Mechanical Engineering'] }],
  },
  {
    key: 'solids-unified',
    name: 'Mechanics of Solids & Materials',
    group: 'Mechanical & Energy',
    icon: 'gem',
    accent: '#57534e',
    tagline: 'Why stuff is strong',
    blurb: 'Materials science — mechanical behavior, failure and fracture.',
    ownFields: ['Materials Science'],
    mergeInto: { subjectId: 'solids-materials', bookId: 'solids-complete' },
    chapters: [{ name: 'Materials Science', fields: ['Materials Science'] }],
  },
  {
    key: 'manufacturing-unified',
    name: 'Manufacturing & Industrial Systems',
    group: 'Mechanical & Energy',
    icon: 'factory',
    accent: '#334155',
    tagline: 'Made at scale',
    blurb: 'Digital manufacturing, metrology and production technology.',
    ownFields: ['Manufacturing Engineering', 'Manufacturing & Materials'],
    mergeInto: { subjectId: 'manufacturing-industrial', bookId: 'manufacturing-complete' },
    chapters: [{ name: 'Digital Manufacturing & Metrology', fields: ['Manufacturing Engineering', 'Manufacturing & Materials'] }],
  },
  {
    key: 'communication-unified',
    name: 'Communication Systems',
    group: 'Electronics & Communication',
    icon: 'radio',
    accent: '#14b8a6',
    tagline: 'Signals across distance',
    blurb: 'Telecommunications and satellite positioning.',
    ownFields: ['Telecommunications'],
    mergeInto: { subjectId: 'communication-systems', bookId: 'communication-complete' },
    chapters: [{ name: 'Satellite Positioning & Telecommunications', fields: ['Telecommunications'] }],
  },
  {
    key: 'visual-unified',
    name: 'Visual Computing',
    group: 'Computing Systems',
    icon: 'frame',
    accent: '#d946ef',
    tagline: 'Pixels and presence',
    blurb: 'Extended reality — rendered worlds.',
    ownFields: ['Extended Reality'],
    mergeInto: { subjectId: 'visual-computing', bookId: 'visual-complete' },
    chapters: [{ name: 'Extended Reality', fields: ['Extended Reality'] }],
  },

  /* ================================================================ */
  /*  OWN subjects — one unified book each                             */
  /* ================================================================ */

  {
    key: 'study-skills',
    name: 'Study Skills & Learning Science',
    group: 'Foundations',
    icon: 'brain',
    accent: '#f59e0b',
    tagline: 'Retain more, study less',
    blurb: 'How learning actually works — memory, spaced repetition, metacognition, deliberate practice and exam-day execution.',
    ownFields: ['Study Skills & Memory', 'Skill Acquisition'],
    chapters: [
      { name: 'The Science of Learning', branches: ['Learning Science'] },
      { name: 'Study Systems', branches: ['Study Systems'] },
      { name: 'Practice, Performance & Expertise', fields: ['Skill Acquisition'], branches: ['Performing'] },
    ],
  },
  {
    key: 'computer-literacy',
    name: 'Computer & Digital Literacy',
    group: 'Foundations',
    icon: 'computer',
    accent: '#0ea5e9',
    tagline: 'Computing, plainly',
    blurb: 'Computational thinking, ICT fundamentals and digital citizenship.',
    ownFields: ['Computer Science', 'ICT & Digital Literacy', 'Digital Literacy'],
    chapters: [
      { name: 'Computing Fundamentals', fields: ['Computer Science'] },
      { name: 'ICT & Digital Literacy', fields: ['ICT & Digital Literacy', 'Digital Literacy'] },
    ],
  },
  {
    /* USER RULE 3 (2026-10-25, verbatim intent): "do these things for     */
    /* biology — the chapters can become separate books, it has such      */
    /* chapters." Biology is therefore split exactly like Arts & Culture: */
    /* every discipline-grade chapter becomes its own book.               */
    key: 'cell-molecular-biology',
    name: 'Cell & Molecular Biology',
    group: 'Life Sciences',
    icon: 'microscope',
    accent: '#14b8a6',
    tagline: 'The unit of life, read to the letter',
    blurb: 'Cells, membranes, signaling and the molecular biology of the gene — DNA, RNA, protein and their regulation.',
    ownFields: ['Cell & Molecular Biology'],
    chapters: [
      { name: 'The Cell: Structure & Signaling', branches: ['Cell Biology', 'Cell Signaling'] },
      { name: 'Molecular Biology of the Gene', branches: ['Molecular Genetics', 'Gene Regulation'] },
      { name: 'Bioenergetics', branches: ['Bioenergetics'] },
    ],
  },
  {
    key: 'biochemistry',
    name: 'Biochemistry',
    group: 'Life Sciences',
    icon: 'flask-conical',
    accent: '#f59e0b',
    tagline: 'The chemistry that runs cells',
    blurb: 'The molecules of life and the reactions that power them — proteins, enzymes, metabolism and the laboratory methods that reveal them.',
    ownFields: ['Biochemistry'],
    chapters: [
      { name: 'Molecules of Life', branches: ['Molecules of Life'] },
      { name: 'Laboratory Methods', branches: ['Laboratory Methods'] },
    ],
  },
  {
    key: 'genetics-heredity',
    name: 'Genetics & Heredity',
    group: 'Life Sciences',
    icon: 'dna',
    accent: '#34d399',
    tagline: 'How traits travel and vary',
    blurb: 'From Mendel\'s laws and chromosomes to biotechnology, genomics and the genetics of populations.',
    ownFields: ['Genetics & Heredity'],
    chapters: [
      { name: 'Classical & Transmission Genetics', branches: ['Classical Genetics', 'Transmission Genetics'] },
      { name: 'Molecular Genetics & Genomics', branches: ['Molecular Genetics', 'Genomics'] },
      { name: 'Genes in Populations', branches: ['Population Genetics', 'Genes in Populations'] },
      { name: 'Biotechnology', branches: ['Biotechnology'] },
    ],
  },
  {
    key: 'evolutionary-biology',
    name: 'Evolutionary Biology',
    group: 'Life Sciences',
    icon: 'git-branch',
    accent: '#f97316',
    tagline: 'Descent with modification',
    blurb: 'Natural selection, speciation, human evolution and the classification of life\'s diversity.',
    ownFields: ['Evolutionary Biology', 'Diversity & Classification'],
    chapters: [
      { name: 'Evolution & Speciation', branches: ['Evolution', 'Speciation'] },
      { name: 'Human Evolution', branches: ['Human Evolution'] },
      { name: 'Diversity & Systematics', branches: ['Systematics', 'Botany'] },
    ],
  },
  {
    key: 'botany',
    name: 'Botany',
    group: 'Life Sciences',
    icon: 'sprout',
    accent: '#22c55e',
    tagline: 'The lives of plants',
    blurb: 'Plant form, photosynthesis, transport, reproduction and the diversity of the plant body.',
    ownFields: ['Botany'],
    chapters: [
      { name: 'The Plant Body', branches: ['Plant Morphology & Anatomy'] },
      { name: 'Plant Physiology', branches: ['Plant Biochemistry', 'Beyond Photosynthesis'] },
      { name: 'Reproduction & Life Cycles', branches: ['Plant Reproduction'] },
    ],
  },
  {
    key: 'zoology',
    name: 'Zoology',
    group: 'Life Sciences',
    icon: 'paw-print',
    accent: '#b45309',
    tagline: 'The animal kingdom, up close',
    blurb: 'Animal diversity, tissues, body plans and how animals sense and behave in the world.',
    ownFields: ['Zoology', 'Animal Biology', 'Animal Behavior'],
    chapters: [
      { name: 'Animal Diversity & Form', branches: ['Animal Diversity', 'Histology'] },
      { name: 'Senses & Behavior', branches: ['Sensory Worlds', 'Minds in the Wild'] },
    ],
  },
  {
    key: 'ecology-conservation',
    name: 'Ecology & Conservation',
    group: 'Life Sciences',
    icon: 'leaf',
    accent: '#65a30d',
    tagline: 'Who lives where, and why',
    blurb: 'Organisms and environments, populations, communities, ecosystems, energy flow, biodiversity and restoration.',
    ownFields: ['Ecology', 'Conservation Biology', 'Biology'],
    chapters: [
      { name: 'Organisms & the Environment', fields: ['Biology'], branches: ['Ecology — Organisms and Environment'] },
      { name: 'Populations & Communities', branches: ['Community Ecology'] },
      { name: 'Ecosystems, Energy & Biomes', branches: ['Ecosystem Science'] },
      { name: 'Conservation & Restoration', branches: ['Ecology', 'Restoration'] },
    ],
  },
  {
    key: 'microbiology-immunology',
    name: 'Microbiology & Immunology',
    group: 'Life Sciences',
    icon: 'bug',
    accent: '#06b6d4',
    tagline: 'The invisible majority',
    blurb: 'Bacteria, viruses, fungi, the microbiome, antibiotics and resistance — and the immune system that keeps them in check.',
    ownFields: ['Microbiology & Disease', 'Immunology'],
    chapters: [
      { name: 'The Microbial World', branches: ['Microbes and Infection'] },
      { name: 'Immunology', branches: ['Biomedical Science'] },
    ],
  },
  {
    key: 'human-anatomy-physiology',
    name: 'Human Anatomy & Physiology',
    group: 'Life Sciences',
    icon: 'heart-pulse',
    accent: '#ef4444',
    tagline: 'The body, system by system',
    blurb: 'The eleven organ systems of the human body — circulation, respiration, digestion, nerves, hormones, senses, movement and reproduction.',
    ownFields: ['Anatomy & Physiology', 'Human Physiology'],
    chapters: [
      { name: 'Body Systems', branches: ['Human Body Systems'] },
      { name: 'Reproduction & Development', branches: ['Reproductive Biology'] },
      { name: 'When Systems Fail', branches: ['Disorder Technologies'] },
    ],
  },
  {
    key: 'developmental-biology',
    name: 'Developmental Biology',
    group: 'Life Sciences',
    icon: 'egg',
    accent: '#ec4899',
    tagline: 'From one cell to a body',
    blurb: 'How a fertilized egg builds an organism — the model organisms, genes and cell behaviors that sculpt the embryo.',
    ownFields: ['Developmental Biology'],
    chapters: [
      { name: 'Building the Body', branches: ['Growth & Form'] },
      { name: 'Mechanisms & Model Organisms', branches: ['Developmental Mechanisms'] },
    ],
  },
  {
    key: 'marine-biology',
    name: 'Marine Biology',
    group: 'Life Sciences',
    icon: 'fish',
    accent: '#0ea5e9',
    tagline: 'Life in the blue',
    blurb: 'Ocean zones and habitats, plankton and larvae, coral reefs, deep sea, fisheries and aquaculture.',
    ownFields: ['Marine Biology'],
    chapters: [
      { name: 'The Blue Realm', branches: ['The Blue Realm'] },
      { name: 'Plankton, Larvae & Recruitment', branches: ['Plankton & Larval Ecology'] },
      { name: 'Fisheries & Ocean Conservation', branches: ['Fisheries & Conservation'] },
    ],
  },
  {
    key: 'bioinformatics-genomics',
    name: 'Bioinformatics & Genomics',
    group: 'Life Sciences',
    icon: 'binary',
    accent: '#8b5cf6',
    tagline: 'Biology as data',
    blurb: 'Algorithms, databases and structures for reading genomes — alignment, assembly, phylogenetics and protein-structure prediction.',
    ownFields: ['Bioinformatics'],
    chapters: [
      { name: 'Reading Genomes with Code', branches: ['Computational Biology'] },
      { name: 'Phylogenetics', branches: ['Phylogenetics'] },
      { name: 'Databases & Structure Prediction', branches: ['Data & Structures'] },
    ],
  },
  {
    key: 'synthetic-biology',
    name: 'Synthetic Biology',
    group: 'Life Sciences',
    icon: 'component',
    accent: '#d946ef',
    tagline: 'Life, engineered',
    blurb: 'Designing and building biological systems — parts, circuits, chassis, the design-build-test-learn cycle, applications, biosafety and ethics.',
    ownFields: ['Synthetic Biology'],
    chapters: [
      { name: 'Programming Living Cells', branches: ['Bioengineering'] },
      { name: 'Applications & Responsible Innovation', branches: ['Applications & Ethics'] },
    ],
  },
  {
    key: 'neuroscience',
    name: 'Neuroscience',
    group: 'Natural Sciences',
    icon: 'brain',
    accent: '#8b5cf6',
    tagline: 'Signals of the mind',
    blurb: 'From action potentials to brain systems — how neurons compute and experience rewires them.',
    ownFields: ['Neuroscience'],
    chapters: [
      { name: 'Cellular Neurophysiology', branches: ['Cellular Neurophysiology'] },
      { name: 'Systems Neuroscience', branches: ['Systems Neuroscience'] },
      { name: 'Neuroanatomy', branches: ['Neuroanatomy'] },
      { name: 'Plasticity', branches: ['Plasticity'] },
    ],
  },
  {
    key: 'astronomy',
    name: 'Astronomy & Space Science',
    group: 'Natural Sciences',
    icon: 'telescope',
    accent: '#6366f1',
    tagline: 'The lives of stars',
    blurb: 'Stars, planets, galaxies, exoplanets and the search for life beyond Earth.',
    ownFields: ['Astronomy & Space Science'],
    chapters: [
      { name: 'Astrophysics', branches: ['Astrophysics'] },
      { name: 'Exploring the Cosmos', branches: ['Exploring the Cosmos'] },
      { name: 'Beyond the Milky Way', branches: ['Beyond the Milky Way'] },
    ],
  },
  {
    key: 'earth-sciences',
    name: 'Earth & Atmospheric Sciences',
    group: 'Natural Sciences',
    icon: 'mountain',
    accent: '#b45309',
    tagline: 'The planet underfoot and overhead',
    blurb: 'Plate tectonics, rocks, deep time, weather and the atmosphere at work.',
    ownFields: ['Geology & Earth Science', 'Meteorology'],
    chapters: [
      { name: 'Dynamic Earth', fields: ['Geology & Earth Science'] },
      { name: 'Weather & Atmosphere', fields: ['Meteorology'] },
    ],
  },
  /* ================================================================ */
  /*  ENVIRONMENTAL SCIENCE split (USER RULE 4) — 3 books + Urban      */
  /*  Studies (Urban Planning leaves with Urban Sociology)             */
  /* ================================================================ */

  {
    key: 'earth-climate-science',
    name: 'Earth & Climate Science',
    group: 'Natural Sciences',
    icon: 'globe',
    accent: '#0ea5e9',
    tagline: 'The planet as a system',
    blurb: 'Earth systems — oceans, water and rock — and the science of climate and climate change.',
    ownFields: ['Earth Systems', 'Climate Science'],
    chapters: [
      { name: 'Earth Systems: Oceans, Water & Rock', fields: ['Earth Systems'] },
      { name: 'Climate Science & Change', fields: ['Climate Science'] },
    ],
  },
  {
    key: 'environmental-policy-circularity',
    name: 'Environmental Policy & Circularity',
    group: 'Natural Sciences',
    icon: 'recycle',
    accent: '#16a34a',
    tagline: 'From rules to reuse',
    blurb: 'Environmental policy and governance, waste systems and the circular economy of materials.',
    ownFields: ['Environmental Policy', 'Waste & Circularity'],
    chapters: [
      { name: 'Environmental Policy & Governance', fields: ['Environmental Policy'] },
      { name: 'Waste, Materials & the Circular Economy', fields: ['Waste & Circularity'] },
    ],
  },
  {
    key: 'environmental-health-food',
    name: 'Environmental Health & Food Systems',
    group: 'Natural Sciences',
    icon: 'sprout',
    accent: '#84cc16',
    tagline: 'Environment, health and harvest',
    blurb: 'Pollution and environmental health, agriculture and the food systems that feed the world.',
    ownFields: ['Pollution & Environmental Health', 'Agriculture & Food Systems'],
    chapters: [
      { name: 'Pollution & Environmental Health', fields: ['Pollution & Environmental Health'] },
      { name: 'Agriculture & Food Systems', fields: ['Agriculture & Food Systems'] },
    ],
  },
  {
    key: 'energy',
    name: 'Energy & Sustainability',
    group: 'Natural Sciences',
    icon: 'battery-charging',
    accent: '#facc15',
    tagline: 'Clean power, real engineering',
    blurb: 'The energy transition, solar, wind — grids, storage and the atom.',
    ownFields: ['Energy & Sustainability', 'Energy Systems', 'Nuclear Technology'],
    /* X51 fix: the field-matched 'Renewable Energy' chapter swallowed all
       three lessons into one chapter; branch-based declarations give each
       technology its own chapter in pedagogical order (USER RULE 5). */
    chapters: [
      { name: 'The Energy Transition', branches: ['Energy Policy'] },
      { name: 'Solar Power', branches: ['Solar Power'] },
      { name: 'Wind Power', branches: ['Wind Power'] },
      { name: 'Energy Systems & Grids', fields: ['Energy Systems'] },
      { name: 'Nuclear Energy', fields: ['Nuclear Technology'] },
    ],
  },
  /* ================================================================ */
  /*  MEDICINE & TREATMENT split (USER RULE 4) — 3 books               */
  /* ================================================================ */

  {
    key: 'clinical-medicine',
    name: 'Clinical Medicine',
    group: 'Medicine & Health',
    icon: 'stethoscope',
    accent: '#e11d48',
    tagline: 'Disease, understood',
    blurb: 'How disease works — cancer, chronic and metabolic disease, the senses and organs, pain, bones and joints.',
    chapters: [
      { name: 'Chronic & Metabolic Disease', branches: ['Chronic Disease'] },
      { name: 'Cancer', branches: ['Cancer'] },
      { name: 'Senses & Organs', branches: ['Senses & Organs'] },
      { name: 'Pain, Bones & Joints', branches: ['Pain', 'Bones & Joints'] },
    ],
  },
  {
    key: 'medical-technology',
    name: 'Medical Technology',
    group: 'Medicine & Health',
    icon: 'activity',
    accent: '#0891b2',
    tagline: 'Machines that see within',
    blurb: 'Biomedical imaging — MRI, ultrasound and CT — and the prosthetics and bionics that restore function.',
    ownFields: ['Medical Technology'],
    chapters: [
      { name: 'Biomedical Imaging', branches: ['Biomedical Imaging', 'Machines That See Within'] },
      { name: 'Prosthetics & Human–Machine Interfaces', branches: ['Human-Machine Interfaces'] },
    ],
  },
  {
    key: 'medicines-emergency-care',
    name: 'Medicines, First Aid & Reproductive Health',
    group: 'Medicine & Health',
    icon: 'pill',
    accent: '#f97316',
    tagline: 'From molecule to bedside',
    blurb: 'How medicines work and how doctors reason, first aid and resuscitation, and sexual & reproductive health.',
    ownFields: ['Medicine & Pharmacology', 'First Aid & Emergency Care', 'Sexual & Reproductive Health'],
    chapters: [
      { name: 'Pharmacology & Clinical Reasoning', fields: ['Medicine & Pharmacology'] },
      { name: 'First Aid & Resuscitation', fields: ['First Aid & Emergency Care'] },
      { name: 'Sexual & Reproductive Health', fields: ['Sexual & Reproductive Health'] },
    ],
  },
  {
    key: 'public-health',
    name: 'Public Health',
    group: 'Medicine & Health',
    icon: 'activity',
    accent: '#f43f5e',
    tagline: 'Health of populations',
    blurb: 'Epidemiology, immunization and the science of health behavior — keeping whole communities well.',
    ownFields: ['Public Health'],
    chapters: [
      { name: 'Epidemiology', branches: ['Epidemiology'] },
      { name: 'Immunization & Health Behavior', branches: ['Immunization Science', 'Health Behavior'] },
      { name: 'Health Equity & Systems', branches: ['Health Equity', 'Health Systems'] },
    ],
  },
  {
    key: 'health-nutrition-fitness',
    name: 'Health, Nutrition & Fitness',
    group: 'Medicine & Health',
    icon: 'heart-pulse',
    accent: '#16a34a',
    tagline: 'Fuel, movement, recovery',
    blurb: 'What to eat, how the body adapts to training, why sleep matters and the science of aging well.',
    ownFields: ['Nutrition', 'Exercise & Fitness', 'Sleep Science', 'Health & Longevity'],
    chapters: [
      { name: 'Nutrition Science', fields: ['Nutrition'] },
      { name: 'Exercise & Fitness', fields: ['Exercise & Fitness'] },
      { name: 'Sleep, Aging & Longevity', fields: ['Sleep Science', 'Health & Longevity'] },
    ],
  },
  {
    key: 'mental-health',
    name: 'Mental Health',
    group: 'Medicine & Health',
    icon: 'brain',
    accent: '#d946ef',
    tagline: 'The mind, kept well',
    blurb: 'Mood and anxiety, how therapy works and the biology that links stress, hormones and mind.',
    ownFields: ['Mental Health'],
    chapters: [
      { name: 'Mood & Anxiety', branches: ['Mood and Anxiety'] },
      { name: 'Mind & Therapy', branches: ['Mind & Therapy'] },
      { name: 'Mind–Body Science', branches: ['Psychoneuroendocrinology'] },
    ],
  },
  /* ================================================================ */
  /*  HISTORY split (USER RULE 4) — 5 books. Branch edits steer the     */
  /*  China/modern/democracy/Indian-period topics (ids unchanged).     */
  /* ================================================================ */

  {
    key: 'ancient-early-modern-history',
    name: 'Ancient & Early Modern History',
    group: 'Humanities & Social Sciences',
    icon: 'scroll-text',
    accent: '#b45309',
    tagline: 'From first cities to the Renaissance',
    blurb: 'The first civilizations, the classical Greco-Roman world, and the themes and transitions of the pre-modern globe.',
    chapters: [
      { name: 'The Ancient World', branches: ['The Ancient World'] },
      { name: 'Themes in Early Modern World History', branches: ['World History'] },
    ],
  },
  {
    key: 'modern-world-history',
    name: 'Modern World History',
    group: 'Humanities & Social Sciences',
    icon: 'hourglass',
    accent: '#d97706',
    tagline: 'The age of revolutions and world wars',
    blurb: 'Revolutions, democracy and rights, the world wars, decolonization and the twentieth-century world order.',
    chapters: [
      { name: 'Democracy, Rights & Revolution', branches: ['Democracy & Rights'] },
      { name: 'War, Decolonization & the Twentieth Century', branches: ['The Modern Age'] },
    ],
  },
  {
    key: 'economic-history',
    name: 'Economic History',
    group: 'Humanities & Social Sciences',
    icon: 'chart-line',
    accent: '#ca8a04',
    tagline: 'How economies became modern',
    blurb: 'Trade routes, exchange networks, the Industrial Revolution and the great divergence between economies.',
    chapters: [
      { name: 'Trade, Exchange & Industrialization', branches: ['Economic History'] },
      { name: 'The Great Divergence', branches: ['Global Divergence'] },
    ],
  },
  {
    key: 'indian-history',
    name: 'Indian History',
    group: 'Humanities & Social Sciences',
    icon: 'map',
    accent: '#ea580c',
    tagline: 'A civilization in the longue durée',
    blurb: 'Ancient and medieval India, its thinkers and travellers, colonialism and the freedom struggle.',
    chapters: [
      { name: 'Ancient & Medieval India', branches: ['Ancient & Medieval India'] },
      { name: 'Colonial India & the Freedom Struggle', branches: ['Colonial & Modern India'] },
    ],
  },
  {
    key: 'east-asian-history',
    name: 'East Asian History',
    group: 'Humanities & Social Sciences',
    icon: 'landmark',
    accent: '#dc2626',
    tagline: 'China and Japan enter the modern world',
    blurb: 'China\u2019s century of aggression and salvation, the People\u2019s Republic, and Japan\u2019s modern industrialization.',
    chapters: [
      { name: 'China: Aggression, Salvation & Revolution', fields: ['World History'] },
      { name: 'Japan\u2019s Modern Industrialization', branches: ['East Asian History'] },
    ],
  },
  {
    key: 'philosophy',
    name: 'Philosophy',
    group: 'Humanities & Social Sciences',
    icon: 'lightbulb',
    accent: '#a16207',
    tagline: 'The examined life',
    blurb: 'Epistemology, ethics, philosophy of mind, political philosophy and the history of ideas.',
    ownFields: ['Philosophy'],
    chapters: [
      { name: 'Epistemology & Philosophy of Science', branches: ['Epistemology', 'Knowledge & Science'] },
      { name: 'Ethics & Value Theory', branches: ['Ethics & Value', 'Virtue Ethics'] },
      { name: 'Philosophy of Mind', branches: ['Philosophy of Mind', 'Mind & Existence'] },
      { name: 'Political Philosophy & Legitimacy', branches: ['Power & Legitimacy'] },
      { name: 'Intellectual History', branches: ['Intellectual History'] },
    ],
  },
  {
    key: 'religion-mythology',
    name: 'Religious Studies & Mythology',
    group: 'Humanities & Social Sciences',
    icon: 'church',
    accent: '#7c3aed',
    tagline: 'The great traditions, compared',
    blurb: 'Eastern and Western religious traditions and the comparative study of myth.',
    ownFields: ['Religious Studies', 'Comparative Mythology'],
    chapters: [
      { name: 'Eastern Traditions', branches: ['Eastern Traditions'] },
      { name: 'Western Traditions', branches: ['Western Traditions'] },
      { name: 'Comparative Mythology', fields: ['Comparative Mythology'] },
    ],
  },
  {
    key: 'psychology',
    name: 'Psychology',
    group: 'Humanities & Social Sciences',
    icon: 'brain',
    accent: '#d946ef',
    tagline: 'The studied mind',
    blurb: 'Cognition, development, social and interpersonal psychology, personality and clinical perspectives.',
    ownFields: ['Psychology'],
    chapters: [
      { name: 'Cognitive & Behavioral Psychology', branches: ['Cognitive Psychology', 'Behavioral Science'] },
      { name: 'Developmental Psychology', branches: ['Developmental Psychology'] },
      { name: 'Social & Interpersonal Psychology', branches: ['Social Psychology', 'Interpersonal Relations'] },
      { name: 'Personality & Individual Differences', branches: ['Personality', 'Individual Differences'] },
      { name: 'Stress & Clinical Psychology', branches: ['Stress and Clinical Psychology'] },
    ],
  },
  {
    key: 'sociology',
    name: 'Sociology',
    group: 'Humanities & Social Sciences',
    icon: 'users',
    accent: '#f472b6',
    tagline: 'Society as a system',
    blurb: 'Classical theory, social structure and institutions, culture, collective dynamics and the city.',
    ownFields: ['Sociology'],
    chapters: [
      { name: 'Classical Theory', branches: ['Classical Theory'] },
      { name: 'Social Structure & Institutions', branches: ['Social Structure', 'Social Institutions'] },
      { name: 'Culture', branches: ['Culture'] },
      { name: 'Collective Dynamics & Networks', branches: ['Collective Dynamics', 'Social Networks'] },
      { name: 'Social Control', branches: ['Social Control'] },
    ],
  },
  {
    /* USER RULE 4: Urban content unified across domains — Urban    */
    /* Planning (ex-Environmental Science) joins Urban Sociology.   */
    key: 'urban-studies',
    name: 'Urban Studies',
    group: 'Humanities & Social Sciences',
    icon: 'map-pin',
    accent: '#0f766e',
    tagline: 'The city, planned and lived',
    blurb: 'The built environment and urban planning, urban society and how cities change.',
    ownFields: ['Urban Planning', 'Urban Sociology'],
    chapters: [
      { name: 'The Built Environment', fields: ['Urban Planning'] },
      { name: 'Urban Society & Change', fields: ['Urban Sociology'] },
    ],
  },
  {
    key: 'anthropology',
    name: 'Anthropology',
    group: 'Humanities & Social Sciences',
    icon: 'users',
    accent: '#c2410c',
    tagline: 'What makes us human',
    blurb: 'Cultural anthropology and archaeology.',
    ownFields: ['Anthropology'],
    chapters: [
      { name: 'Cultural Anthropology', branches: ['Cultural Anthropology'] },
      { name: 'Archaeology', branches: ['Archaeology'] },
    ],
  },
  /* ================================================================ */
  /*  POLITICAL SCIENCE split (USER RULE 4) — 4 books, branch-routed   */
  /* ================================================================ */

  {
    key: 'political-theory',
    name: 'Political Theory',
    group: 'Humanities & Social Sciences',
    icon: 'lightbulb',
    accent: '#dc2626',
    tagline: 'Ideas about power and justice',
    blurb: 'Political ideologies — individualism, collectivism, liberalism, citizenship — and the canon of political thought.',
    chapters: [
      { name: 'Political Ideologies', branches: ['Political Ideologies'] },
      { name: 'History of Political Thought', branches: ['History of Political Thought'] },
    ],
  },
  {
    key: 'comparative-indian-politics',
    name: 'Comparative Politics & Indian Polity',
    group: 'Humanities & Social Sciences',
    icon: 'landmark',
    accent: '#f59e0b',
    tagline: 'Governments, compared',
    blurb: 'Regimes and democratic government across countries, and the constitution and politics of India.',
    chapters: [
      { name: 'Comparative Politics', branches: ['Comparative Politics'] },
      { name: 'Indian Polity', branches: ['Indian Polity'] },
    ],
  },
  {
    key: 'international-relations',
    name: 'International Relations & Security',
    group: 'Humanities & Social Sciences',
    icon: 'globe',
    accent: '#b91c1c',
    tagline: 'The world order and its guardians',
    blurb: 'IR theory and the contemporary world order, foreign policy and security, and the organization of armed forces.',
    chapters: [
      { name: 'International Relations', branches: ['International Relations'] },
      { name: 'Foreign Policy & Security', branches: ['Foreign Policy and Security'] },
      { name: 'Defence & the Armed Forces', branches: ['Organisation of the Armed Forces'] },
    ],
  },
  {
    key: 'public-policy-administration',
    name: 'Public Policy & Administration',
    group: 'Humanities & Social Sciences',
    icon: 'scroll-text',
    accent: '#92400e',
    tagline: 'How the state gets things done',
    blurb: 'Governance and public administration, the policy cycle, and the rational-choice science of institutional design.',
    chapters: [
      { name: 'Governance & Public Administration', branches: ['Governance and Public Administration'] },
      { name: 'The Policy Cycle', branches: ['The Policy Machine'] },
      { name: 'Rational Choice & Institutional Design', branches: ['Rational Choice Theory', 'Public Choice', 'Institutional Design'] },
    ],
  },
  {
    key: 'geography',
    name: 'Geography',
    group: 'Humanities & Social Sciences',
    icon: 'map-pin',
    accent: '#059669',
    tagline: 'Where people live, and why',
    blurb: 'Physical geography and human geography — population, settlement, development and landscapes.',
    ownFields: ['Geography', 'Human Geography'],
    chapters: [
      { name: 'Physical Geography', fields: ['Geography'] },
      { name: 'Human Geography', fields: ['Human Geography'] },
    ],
  },
  {
    key: 'education',
    name: 'Education',
    group: 'Humanities & Social Sciences',
    icon: 'graduation-cap',
    accent: '#0891b2',
    tagline: 'How teaching works',
    blurb: 'Pedagogy, higher education and learning systems.',
    ownFields: ['Education'],
    chapters: [
      { name: 'Teaching & Pedagogy', branches: ['Teaching & Pedagogy'] },
      { name: 'Higher Education', branches: ['Higher Education'] },
      { name: 'Learning Systems', branches: ['Learning Systems'] },
    ],
  },
  {
    key: 'media-communication',
    name: 'Media & Communication',
    group: 'Humanities & Social Sciences',
    icon: 'radio',
    accent: '#db2777',
    tagline: 'Who frames your world',
    blurb: 'Media and society, and the attention economy.',
    ownFields: ['Mass Media and Society', 'Media & Communication'],
    chapters: [
      { name: 'Media & Society', fields: ['Mass Media and Society'] },
      { name: 'The Attention Economy', fields: ['Media & Communication'] },
    ],
  },
  {
    key: 'research-methods',
    name: 'Research Methods',
    group: 'Humanities & Social Sciences',
    icon: 'flask-conical',
    accent: '#14b8a6',
    tagline: 'How we know',
    blurb: 'Research methodology and experimental design — hypotheses, controls and the theory ladder.',
    ownFields: ['Research Methods', 'Science & Inquiry Skills'],
    chapters: [
      { name: 'Research Methodology', branches: ['Research Methodology', 'How We Know'] },
      { name: 'Experimental Design', fields: ['Science & Inquiry Skills'] },
    ],
  },
  /* ================================================================ */
  /*  ECONOMICS split (USER RULE 4) — 5 books; foundations and          */
  /*  behavioral economics live as chapters inside Microeconomics      */
  /* ================================================================ */

  {
    key: 'microeconomics',
    name: 'Microeconomics',
    group: 'Commerce, Economics & Business',
    icon: 'chart-line',
    accent: '#65a30d',
    tagline: 'The logic of markets',
    blurb: 'The economic way of thinking, consumers and producers, prices and market structure, market failures, welfare and behavioral economics.',
    ownFields: ['Foundations of Economics', 'Microeconomics', 'Behavioral Economics'],
    chapters: [
      { name: 'The Economic Way of Thinking', fields: ['Foundations of Economics'] },
      { name: 'How Markets Work', branches: ['Price Theory', 'Market Structure'] },
      { name: 'Consumers, Producers & Welfare', branches: ['Consumer and Producer Theory', 'Welfare Economics'] },
      { name: 'When Markets Fail', branches: ['When Markets Fail'] },
      { name: 'Behavioral Economics', fields: ['Behavioral Economics'] },
    ],
  },
  {
    key: 'macroeconomics',
    name: 'Macroeconomics',
    group: 'Commerce, Economics & Business',
    icon: 'trending',
    accent: '#0d9488',
    tagline: 'The economy as a whole',
    blurb: 'National income and output, the vital signs, money and monetary policy, fiscal policy and the open economy.',
    ownFields: ['Macroeconomics'],
    chapters: [
      { name: 'National Income & the Vital Signs', branches: ['National Income & Output', 'The Vital Signs'] },
      { name: 'Money & Monetary Policy', branches: ['Monetary Economics', 'Monetary Policy'] },
      { name: 'Fiscal Policy', branches: ['Fiscal Policy'] },
      { name: 'The Open Economy', branches: ['Open Economy'] },
    ],
  },
  {
    key: 'international-trade',
    name: 'International Trade',
    group: 'Commerce, Economics & Business',
    icon: 'globe',
    accent: '#0891b2',
    tagline: 'Why nations trade',
    blurb: 'Trade theory, trade policy, regional integration and foreign direct investment.',
    ownFields: ['International Trade'],
    chapters: [
      { name: 'Trade Theory', branches: ['Trade Theory'] },
      { name: 'Trade Policy', branches: ['Trade Policy'] },
      { name: 'Regional Integration & FDI', branches: ['FDI and Economic Integration', 'Regional Integration'] },
    ],
  },
  {
    key: 'development-economics',
    name: 'Development & Political Economy',
    group: 'Commerce, Economics & Business',
    icon: 'sprout',
    accent: '#16a34a',
    tagline: 'Why some places grow rich',
    blurb: 'Poverty and labour, India and comparative development, and the political economy of growth.',
    ownFields: ['Development Economics', 'Political Economy'],
    chapters: [
      { name: 'Poverty, Labour & Development', branches: ['Poverty & Labour'] },
      { name: 'India & Comparative Development', branches: ['India & Comparative Development'] },
      { name: 'Political Economy', fields: ['Political Economy'] },
    ],
  },
  {
    key: 'business-economics',
    name: 'Business Economics',
    group: 'Commerce, Economics & Business',
    icon: 'briefcase',
    accent: '#b45309',
    tagline: 'Economics for the firm',
    blurb: 'Costs and production, business cycles for managers, and the public finance that frames business decisions.',
    ownFields: ['Business Economics'],
    chapters: [
      { name: 'Costs & Production', branches: ['Costs & Production'] },
      { name: 'Business Cycles', branches: ['Business Cycles'] },
      { name: 'Public Finance', branches: ['Public Finance'] },
    ],
  },
  /* ================================================================ */
  /*  ACCOUNTING & AUDITING split (USER RULE 4) — 2 books              */
  /* ================================================================ */

  {
    key: 'financial-accounting',
    name: 'Financial Accounting',
    group: 'Commerce, Economics & Business',
    icon: 'receipt',
    accent: '#0d9488',
    tagline: 'The language of business',
    blurb: 'The full accounting cycle — double entry, the ledger, cash control, fixed assets, special transactions and computerized systems.',
    chapters: [
      { name: 'The Accounting Cycle & the Ledger', branches: ['Accounting Cycle', 'The Ledger'] },
      { name: 'Cash, Assets & Controls', branches: ['Cash Control', 'Fixed Assets'] },
      { name: 'Special Transactions & Computerized Systems', branches: ['Special Transactions', 'Computerized Accounting'] },
    ],
  },
  {
    key: 'advanced-accounting-auditing',
    name: 'Advanced Accounting & Auditing',
    group: 'Commerce, Economics & Business',
    icon: 'calculator',
    accent: '#115e59',
    tagline: 'From partnership to the audit',
    blurb: 'Partnership and company accounts, reading financial statements, and the independent financial audit.',
    ownFields: ['Auditing & Assurance'],
    chapters: [
      { name: 'Partnership Accounts', branches: ['Partnership Accounts'] },
      { name: 'Company Accounts & Financial Statements', branches: ['Company Accounts', 'Reading Statements'] },
      { name: 'Auditing & Assurance', fields: ['Auditing & Assurance'] },
    ],
  },
  {
    key: 'finance-banking',
    name: 'Finance & Banking',
    group: 'Commerce, Economics & Business',
    icon: 'calculator',
    accent: '#16a34a',
    tagline: 'Money across time',
    blurb: 'Money and banking first, then markets, valuation, corporate finance and personal finance.',
    ownFields: ['Banking & Finance', 'Finance & Investment', 'Personal Finance'],
    chapters: [
      { name: 'Money, Banking, Risk & Insurance', branches: ['Money & Markets', 'Risk & Insurance'], fields: ['Banking & Finance'] },
      { name: 'Markets & Instruments', branches: ['Markets & Instruments'] },
      { name: 'Valuation Basics', branches: ['Valuation Basics'] },
      { name: 'Corporate Finance', branches: ['Corporate Finance'] },
      { name: 'Personal Finance', fields: ['Personal Finance'] },
    ],
  },
  /* ================================================================ */
  /*  BUSINESS & MANAGEMENT split (USER RULE 4) — 4 books              */
  /* ================================================================ */

  {
    key: 'management-leadership',
    name: 'Management & Leadership',
    group: 'Commerce, Economics & Business',
    icon: 'users',
    accent: '#b45309',
    tagline: 'Getting work done through people',
    blurb: 'Organisations and behaviour, managing people, leadership, deals and decisions.',
    ownFields: ['Management', 'Management & Leadership'],
    chapters: [
      { name: 'Organisations & People', fields: ['Management'] },
      { name: 'Leadership, Deals & Decisions', fields: ['Management & Leadership'] },
    ],
  },
  {
    key: 'marketing',
    name: 'Marketing',
    group: 'Commerce, Economics & Business',
    icon: 'megaphone',
    accent: '#db2777',
    tagline: 'Creating customers',
    blurb: 'Marketing foundations, and pricing, channels and promotion.',
    ownFields: ['Marketing'],
    chapters: [
      { name: 'Marketing Foundations', branches: ['Marketing Foundations'] },
      { name: 'Pricing, Channels & Promotion', branches: ['Pricing, Channels and Promotion'] },
    ],
  },
  {
    key: 'operations-strategy',
    name: 'Operations, Strategy & Supply Chain',
    group: 'Commerce, Economics & Business',
    icon: 'cog',
    accent: '#4d7c0f',
    tagline: 'Running and steering the firm',
    blurb: 'Operations and supply chain, strategy and strategic interaction, and the economics of technology.',
    ownFields: ['Operations & Supply Chain', 'Strategy'],
    chapters: [
      { name: 'Operations & Supply Chain', fields: ['Operations & Supply Chain'] },
      { name: 'Strategy & Strategic Interaction', fields: ['Strategy'] },
    ],
  },
  {
    key: 'entrepreneurship-business-environment',
    name: 'Entrepreneurship & the Business Environment',
    group: 'Commerce, Economics & Business',
    icon: 'rocket',
    accent: '#ea580c',
    tagline: 'From idea to institution',
    blurb: 'Building and financing ventures, the business environment, and the regulatory framework that governs firms.',
    ownFields: ['Entrepreneurship', 'Business Environment', 'Business Regulation'],
    chapters: [
      { name: 'Building & Financing Ventures', fields: ['Entrepreneurship'] },
      { name: 'Business Environment & Regulation', fields: ['Business Environment', 'Business Regulation'] },
    ],
  },
  /* ================================================================ */
  /*  LAW split (USER RULE 4) — 7 books in the Law & Justice shelf.    */
  /*  Private Law's corporate branch joins the Business Law volume.    */
  /* ================================================================ */

  {
    key: 'legal-systems-method',
    name: 'Legal Systems & Method',
    group: 'Law & Justice',
    icon: 'library',
    accent: '#a16207',
    tagline: 'How law thinks',
    blurb: 'Legal reasoning, courts and precedent, and the comparative history of the world\u2019s legal systems.',
    ownFields: ['Legal Method', 'Legal History'],
    chapters: [
      { name: 'Legal Reasoning', branches: ['Legal Reasoning'] },
      { name: 'Courts, Precedent & the Legal Machine', branches: ['Courts, Precedent & Legal News'] },
      { name: 'Comparative Legal Systems & Legal History', fields: ['Legal History'] },
    ],
  },
  {
    key: 'constitutional-law',
    name: 'Constitutional Law',
    group: 'Law & Justice',
    icon: 'landmark',
    accent: '#b45309',
    tagline: 'The rules about the rules',
    blurb: 'Constitutions, structural principles and the architecture of state power.',
    ownFields: ['Constitutional Law'],
    chapters: [
      { name: 'Structural Principles', branches: ['Structural Principles'] },
      { name: 'Constitutional Law in Practice', branches: ['Constitutional Law'] },
    ],
  },
  {
    key: 'private-law',
    name: 'Private Law: Contracts, Torts & Family',
    group: 'Law & Justice',
    icon: 'scale',
    accent: '#92400e',
    tagline: 'Between citizens',
    blurb: 'Contract law — formation, consent and validity — plus tort and family law.',
    ownFields: ['Contract Law'],
    chapters: [
      { name: 'Contract Law', branches: ['Contract Law', 'Indian Contract Act 1872', 'Consent & Validity'] },
      { name: 'Tort Law', branches: ['Tort Law'] },
      { name: 'Family Law', branches: ['Family Law'] },
    ],
  },
  {
    key: 'business-corporate-law',
    name: 'Business & Corporate Law',
    group: 'Law & Justice',
    icon: 'briefcase',
    accent: '#0d9488',
    tagline: 'The law of commerce',
    blurb: 'Sale of goods, partnership and LLP law, and company law — the legal spine of business.',
    ownFields: ['Business Law'],
    chapters: [
      { name: 'Sale of Goods & Commercial Transactions', branches: ['Sale of Goods Act 1930'] },
      { name: 'Partnership & LLP', branches: ['Partnership Act 1932', 'LLP Act 2008'] },
      { name: 'Company Law', branches: ['Companies Act 2013', 'Corporate Law'] },
    ],
  },
  {
    key: 'criminal-justice',
    name: 'Criminal Law & Justice',
    group: 'Law & Justice',
    icon: 'scale',
    accent: '#dc2626',
    tagline: 'Crime and its machinery',
    blurb: 'Criminology, the legal machine of criminal justice, and criminal litigation.',
    ownFields: ['Criminal Justice'],
    chapters: [
      { name: 'Criminology', branches: ['Criminology'] },
      { name: 'The Legal Machine', branches: ['The Legal Machine'] },
      { name: 'Criminal Litigation', branches: ['Litigation'] },
    ],
  },
  {
    key: 'international-law',
    name: 'International Law',
    group: 'Law & Justice',
    icon: 'globe',
    accent: '#0369a1',
    tagline: 'Law among states',
    blurb: 'Treaty law, human rights law, and the courts and organizations that order the world.',
    ownFields: ['International Law'],
    chapters: [
      { name: 'Treaty Law', branches: ['Treaty Law'] },
      { name: 'Human Rights Law', branches: ['Human Rights Law'] },
      { name: 'Courts, Organizations & the Law of the Sea', branches: ['Institutions & Dispute Settlement'] },
    ],
  },
  {
    key: 'regulatory-workplace-law',
    name: 'Regulatory & Workplace Law',
    group: 'Law & Justice',
    icon: 'receipt',
    accent: '#7c2d12',
    tagline: 'The law of everyday life',
    blurb: 'Tax and administrative law, employment and the workplace, and intellectual property & media law.',
    ownFields: ['Employment Law', 'Intellectual Property & Media Law', 'Tax & Administrative Law'],
    chapters: [
      { name: 'Tax & Administrative Law', fields: ['Tax & Administrative Law'] },
      { name: 'Employment Law & the Workplace', fields: ['Employment Law'] },
      { name: 'IP & Media Law', fields: ['Intellectual Property & Media Law'] },
    ],
  },
  {
    key: 'literature',
    name: 'Literature',
    group: 'Languages & Literature',
    icon: 'library',
    accent: '#f472b6',
    tagline: 'The books that shaped us',
    blurb: 'World literature — the great tradition, reading the world, literary awards and the craft of criticism.',
    ownFields: ['Literary Craft', 'World Literature'],
    chapters: [
      { name: 'The Great Tradition', branches: ['The Great Tradition'] },
      { name: 'Reading the World', branches: ['Reading the World'] },
      { name: 'Literary Awards & the Canon', branches: ['Literary Awards & Author-Work Mapping'] },
      { name: 'Literary Craft & Criticism', fields: ['Literary Craft'] },
    ],
  },
  {
    key: 'linguistics',
    name: 'Linguistics',
    group: 'Languages & Literature',
    icon: 'binary',
    accent: '#7c3aed',
    tagline: 'The architecture of language',
    blurb: 'The science of language, phonetics and phonology, language in society and how brains acquire language.',
    ownFields: ['Language Acquisition Science', 'Linguistics', 'Phonetics & Phonology', 'Sociolinguistics'],
    chapters: [
      { name: 'The Science of Language', fields: ['Linguistics'] },
      { name: 'Phonetics & Phonology', fields: ['Phonetics & Phonology'] },
      { name: 'Language in Society', fields: ['Sociolinguistics'] },
      { name: 'Language Acquisition', fields: ['Language Acquisition Science'] },
    ],
  },
  {
    key: 'spanish',
    name: 'Spanish',
    group: 'Languages & Literature',
    icon: 'languages',
    accent: '#f97316',
    tagline: 'Two verbs for to be',
    blurb: 'Spanish verbs — morphology, semantics and practical usage.',
    ownFields: ['Spanish'],
    chapters: [],
  },
  {
    key: 'japanese',
    name: 'Japanese',
    group: 'Languages & Literature',
    icon: 'languages',
    accent: '#e11d48',
    tagline: 'Three scripts, one language',
    blurb: 'The writing system, sentence structure and verbs & politeness.',
    ownFields: ['Japanese'],
    chapters: [],
  },
  {
    key: 'french',
    name: 'French',
    group: 'Languages & Literature',
    icon: 'languages',
    accent: '#3b82f6',
    tagline: 'Say it like the French',
    blurb: 'Foundations, the verb system, and reading the francophone world.',
    ownFields: ['French'],
    /* X49 sequencing: declared pedagogical order — Foundations →
       Verbs → Reading & Culture (USER RULE 5). */
    chapters: [
      { name: 'French Foundations', branches: ['French Foundations'] },
      { name: 'French Verbs', branches: ['French Verbs'] },
      { name: 'French Reading & Culture', branches: ['French Reading & Culture'] },
    ],
  },
  {
    key: 'german',
    name: 'German',
    group: 'Languages & Literature',
    icon: 'languages',
    accent: '#334155',
    tagline: 'The logic of German',
    blurb: 'Foundations, the verb system and the canon from Luther to the Nobel list.',
    ownFields: ['German'],
    /* X51: declared pedagogical order — foundations, then verbs, then
       literature (USER RULE 5). */
    chapters: [
      { name: 'German Foundations', branches: ['German Foundations'] },
      { name: 'German Verbs', branches: ['German Verbs'] },
      { name: 'German Literature', branches: ['German Literature'] },
    ],
  },
  {
    key: 'hindi',
    name: 'Hindi',
    group: 'Languages & Literature',
    icon: 'languages',
    accent: '#ea580c',
    tagline: 'Devanagari, decoded',
    blurb: 'Foundations, the grammar workshop and the literature from Kabir to the Nayi Kahani.',
    ownFields: ['Hindi'],
    /* X49 sequencing: declared pedagogical order — Foundations →
       Grammar → Literature (USER RULE 5). */
    chapters: [
      { name: 'Hindi Foundations', branches: ['Hindi Foundations'] },
      { name: 'Hindi Grammar', branches: ['Hindi Grammar'] },
      { name: 'Hindi Literature', branches: ['Hindi Literature'] },
    ],
  },
  {
    key: 'arabic',
    name: 'Arabic',
    group: 'Languages & Literature',
    icon: 'languages',
    accent: '#15803d',
    tagline: 'The calligraphic tradition',
    blurb: 'Foundations, the grammar workshop and the literary canon — from the Mu‘allaqāt to the Nobel novel.',
    ownFields: ['Arabic'],
    /* X49 sequencing: declared pedagogical order — Foundations →
       Grammar → Literature (USER RULE 5). */
    chapters: [
      { name: 'Arabic Foundations', branches: ['Arabic Foundations'] },
      { name: 'Arabic Grammar', branches: ['Arabic Grammar'] },
      { name: 'Arabic Literature & Culture', branches: ['Arabic Literature & Culture'] },
    ],
  },
  {
    key: 'korean',
    name: 'Korean',
    group: 'Languages & Literature',
    icon: 'languages',
    accent: '#6366f1',
    tagline: 'Hangul, the smart script',
    blurb: 'Foundations, the particle-and-ending workshop and the canon from sijo to the Nobel.',
    ownFields: ['Korean'],
    /* X49 sequencing: declared pedagogical order — Foundations →
       Grammar → Literature (USER RULE 5). */
    chapters: [
      { name: 'Korean Foundations', branches: ['Korean Foundations'] },
      { name: 'Korean Grammar', branches: ['Korean Grammar'] },
      { name: 'Korean Literature & Culture', branches: ['Korean Literature & Culture'] },
    ],
  },
  {
    key: 'russian',
    name: 'Russian',
    group: 'Languages & Literature',
    icon: 'languages',
    accent: '#b91c1c',
    tagline: 'Cases and Cyrillic',
    blurb: 'Foundations, the declension workshop and the Golden Age canon to the Nobel lineage.',
    ownFields: ['Russian'],
    /* X49 sequencing: declared pedagogical order — Foundations →
       Grammar → Literature (USER RULE 5). */
    chapters: [
      { name: 'Russian Foundations', branches: ['Russian Foundations'] },
      { name: 'Russian Grammar', branches: ['Russian Grammar'] },
      { name: 'Russian Literature', branches: ['Russian Literature'] },
    ],
  },
  {
    key: 'mandarin',
    name: 'Mandarin Chinese',
    group: 'Languages & Literature',
    icon: 'languages',
    accent: '#dc2626',
    tagline: 'Tones, strokes and characters',
    blurb: 'Foundations, the grammar engine and the classical canon.',
    ownFields: ['Mandarin Chinese'],
    /* X51: the grammar engine sits between foundations and the classical
       canon (USER RULE 5). */
    chapters: [
      { name: 'Mandarin Foundations', branches: ['Mandarin Foundations'] },
      { name: 'Mandarin Grammar', branches: ['Mandarin Grammar'] },
      { name: 'Classical Canon & Recitation', branches: ['Classical Canon & Recitation'] },
    ],
  },
  {
    key: 'art-history',
    name: 'Art History',
    group: 'Arts & Culture',
    icon: 'frame',
    accent: '#f59e0b',
    tagline: 'Five millennia of seeing',
    blurb: 'How humans have made images and objects — from caves and pyramids through the Renaissance to the contemporary gallery.',
    ownFields: ['Art History'],
    chapters: [
      { name: 'Foundations & the Ancient World', branches: ['Foundations'] },
      { name: 'Renaissance to Modernism', branches: ['The Modern Tradition'] },
      { name: 'World Art Traditions', branches: ['World Art Traditions'] },
      { name: "The Historian's Craft", branches: ["The Historian's Craft"] },
      { name: 'The Contemporary Scene', branches: ['The Contemporary Scene'] },
    ],
  },
  {
    key: 'visual-arts',
    name: 'Visual Arts',
    group: 'Arts & Culture',
    icon: 'palette',
    accent: '#ec4899',
    tagline: 'Made by hand, seen by eye',
    blurb: 'Drawing, painting, photography, sculpture and craft — the studio disciplines of making images and objects.',
    ownFields: ['Drawing & Painting', 'Photography', 'Sculpture & Craft'],
    chapters: [
      { name: 'Drawing & Painting', fields: ['Drawing & Painting'] },
      { name: 'Photography', fields: ['Photography'] },
      { name: 'Sculpture & Craft', fields: ['Sculpture & Craft'] },
    ],
  },
  {
    key: 'music',
    name: 'Music',
    group: 'Arts & Culture',
    icon: 'music',
    accent: '#a855f7',
    tagline: 'Organized sound, end to end',
    blurb: 'Theory and harmony, rhythm, melody, ear training, studio production and the great listening traditions of the world.',
    ownFields: ['Music Theory & Practice', 'Music Production', 'Music History & Appreciation'],
    chapters: [
      { name: 'Theory & Musicianship', fields: ['Music Theory & Practice'] },
      { name: 'History & Appreciation', fields: ['Music History & Appreciation'] },
      { name: 'Music Production', fields: ['Music Production'] },
    ],
  },
  {
    key: 'film-cinema',
    name: 'Film & Cinema',
    group: 'Arts & Culture',
    icon: 'film',
    accent: '#ef4444',
    tagline: 'The twenty-four frames per second art',
    blurb: 'Cinematography, editing, screenwriting, film history and sound — how movies are built, shot and cut.',
    ownFields: ['Film & Cinema'],
    chapters: [
      { name: 'Screenwriting & Story', branches: ['Screenwriting & Story'] },
      { name: 'Cinematography & Light', branches: ['Cinematography'] },
      { name: 'Editing & Montage', branches: ['Editing Theory'] },
      { name: 'Sound & Score', branches: ['Sound & Score'] },
      { name: 'Film History & Movements', branches: ['Film History & Movements'] },
    ],
  },
  {
    key: 'animation',
    name: 'Animation',
    group: 'Arts & Culture',
    icon: 'clapperboard',
    accent: '#f97316',
    tagline: 'Bringing drawings to life',
    blurb: 'The principles of motion, storyboarding, stop-motion, the digital 3D pipeline and the grammar of comics.',
    ownFields: ['Animation & Sequential Art'],
    chapters: [
      { name: 'Principles of Animation', branches: ['Principles of Animation', 'Moving Pictures'] },
      { name: 'Storyboarding & Pre-Production', branches: ['Storyboarding & Pre-Production'] },
      { name: 'Stop-Motion & Hybrid Techniques', branches: ['Stop-Motion & Hybrid'] },
      { name: 'Digital & 3D Production', branches: ['Digital & 3D'] },
      { name: 'Comics & Sequential Art', branches: ['Comics & Sequential Art', 'The Page'] },
    ],
  },
  {
    key: 'design',
    name: 'Design',
    group: 'Arts & Culture',
    icon: 'pen-tool',
    accent: '#0d9488',
    tagline: 'Intention made visible',
    blurb: 'Design foundations and color, typography and layout, interaction and UX, and fashion as a design language.',
    ownFields: ['Visual Design', 'Fashion & Identity'],
    chapters: [
      { name: 'Design Foundations', branches: ['Design Foundations'] },
      { name: 'Typography & Layout', branches: ['Typography & Layout', 'Type & Letters'] },
      { name: 'Interaction & UX', branches: ['Interaction & UX'] },
      { name: 'Fashion & Identity', fields: ['Fashion & Identity'] },
    ],
  },
  {
    key: 'performing-arts',
    name: 'Performing Arts',
    group: 'Arts & Culture',
    icon: 'drama',
    accent: '#d946ef',
    tagline: 'The live arts',
    blurb: 'Acting, improvisation and ensemble, stagecraft and production, and the world\u2019s dance forms and choreography.',
    ownFields: ['Theater & Performance', 'Dance'],
    chapters: [
      { name: 'Acting & Performance', branches: ['Acting & Performance'] },
      { name: 'Stagecraft & Production', branches: ['Stagecraft & Production', 'Stage & Performance'] },
      { name: 'Dance Forms & History', branches: ['Dance Forms & History', 'Movement Traditions'] },
      { name: 'Choreography & Composition', branches: ['Choreography & Composition'] },
      { name: 'Opera & Musical Theater', branches: ['Words & Music'] },
    ],
  },
  {
    key: 'architecture',
    name: 'Architecture',
    group: 'Arts & Culture',
    icon: 'landmark',
    accent: '#b45309',
    tagline: 'The art we live inside',
    blurb: 'The history of building from pyramids to glass towers, how structures stand up, and how architects actually work.',
    ownFields: ['Architecture'],
    chapters: [
      { name: 'History of Architecture', branches: ['History of Architecture', 'Built Form'] },
      { name: 'Structures & Materials', branches: ['Structures & Materials'] },
      { name: 'Design & Practice', branches: ['Design & Practice'] },
    ],
  },
  /* ================================================================ */
  /*  CIVIL ENGINEERING split (USER RULE 4) — 4 books. Fields 'Civil    */
  /*  Engineering' and 'Civil & Structural Engineering' route by        */
  /*  branch; the pipeline stays with Chemical Engineering.             */
  /* ================================================================ */

  {
    key: 'structural-seismic-engineering',
    name: 'Structural & Seismic Engineering',
    group: 'Applied Engineering & Technology',
    icon: 'frame',
    accent: '#f59e0b',
    tagline: 'Standing on math',
    blurb: 'Structural analysis and design in steel and concrete, and engineering for earthquakes.',
    chapters: [
      { name: 'Structural Analysis & Design', branches: ['Structural Engineering'] },
      { name: 'Seismic Design', branches: ['Seismic Design'] },
    ],
  },
  {
    key: 'water-environmental-engineering',
    name: 'Water & Environmental Engineering',
    group: 'Applied Engineering & Technology',
    icon: 'droplets',
    accent: '#0369a1',
    tagline: 'Water, engineered',
    blurb: 'Water resources and dams, water and wastewater treatment, and environmental engineering.',
    ownFields: ['Water Technology'],
    chapters: [
      { name: 'Water Resources & Dams', branches: ['Water Resources Engineering', 'Water Infrastructure'] },
      { name: 'Water & Wastewater Treatment', fields: ['Water Technology'] },
      { name: 'Environmental Engineering', branches: ['Environmental Engineering'] },
    ],
  },
  {
    key: 'transportation-engineering',
    name: 'Transportation Engineering',
    group: 'Applied Engineering & Technology',
    icon: 'route',
    accent: '#ea580c',
    tagline: 'The geometry of movement',
    blurb: 'Highway and traffic engineering — flow, capacity and geometric design — and railway transport infrastructure.',
    ownFields: ['Railway Engineering'],
    chapters: [
      { name: 'Highways, Traffic & Geometric Design', branches: ['Transportation Engineering'] },
      { name: 'Railways & Transport Infrastructure', fields: ['Railway Engineering'] },
    ],
  },
  {
    key: 'construction-geomatics',
    name: 'Construction, Geomatics & Underground Engineering',
    group: 'Applied Engineering & Technology',
    icon: 'hard-hat',
    accent: '#a16207',
    tagline: 'Measuring, building, digging',
    blurb: 'Geomatics and surveying, tunnels and underground engineering, and how buildings work.',
    ownFields: ['Construction & the Built Environment'],
    chapters: [
      { name: 'Geomatics & Surveying', branches: ['Geomatics Engineering'] },
      { name: 'Tunnels & Underground Engineering', branches: ['Underground Engineering'] },
      { name: 'How Buildings Work', fields: ['Construction & the Built Environment'] },
    ],
  },
  {
    key: 'aerospace-aviation',
    name: 'Aerospace & Aviation',
    group: 'Applied Engineering & Technology',
    icon: 'rocket',
    accent: '#6366f1',
    tagline: 'Why flight works',
    blurb: 'Aerodynamics, rotorcraft and VTOL, and the organized sky.',
    ownFields: ['Aerospace Engineering', 'Aviation & Flight'],
    chapters: [
      { name: 'Aerodynamics', branches: ['Aerodynamics'] },
      { name: 'Rotorcraft & VTOL', branches: ['Rotorcraft and VTOL'] },
      { name: 'Aviation & Flight', fields: ['Aviation & Flight'] },
    ],
  },
  {
    key: 'chemical-engineering',
    name: 'Chemical Engineering',
    group: 'Applied Engineering & Technology',
    icon: 'flask-round',
    accent: '#0d9488',
    tagline: 'Reactions at scale',
    blurb: 'Reactors, separation processes and pipeline transport.',
    ownFields: ['Chemical Engineering'],
    chapters: [
      { name: 'Process Engineering', branches: ['Process Engineering'] },
      { name: 'Pipeline Transport', branches: ['Transport Infrastructure'] },
    ],
  },
  {
    key: 'naval-architecture',
    name: 'Naval Architecture & Marine Engineering',
    group: 'Applied Engineering & Technology',
    icon: 'ship',
    accent: '#0369a1',
    tagline: 'Why ships stay up',
    blurb: 'Buoyancy and stability, hull structures, and the design-propulsion spiral.',
    ownFields: ['Naval Architecture'],
    /* X51: declared pedagogical order — float/stability first, then
       structures, then design/propulsion (USER RULE 5). */
    chapters: [
      { name: 'Marine Engineering', branches: ['Marine Engineering'] },
      { name: 'Ship Structures', branches: ['Ship Structures'] },
      { name: 'Ship Design & Propulsion', branches: ['Ship Design & Propulsion'] },
    ],
  },
  {
    key: 'nanotechnology',
    name: 'Nanotechnology',
    group: 'Applied Engineering & Technology',
    icon: 'atom',
    accent: '#a855f7',
    tagline: 'Engineering at atomic scale',
    blurb: 'The small frontier — its physics, its making-and-seeing tools, its medicine and clean tech.',
    ownFields: ['Nanotechnology'],
    /* X51: declared pedagogical order — scale physics first, then the
       fabrication/characterization craft, then applications (USER RULE 5). */
    chapters: [
      { name: 'The Small Frontier', branches: ['The Small Frontier'] },
      { name: 'Making & Seeing the Nanoworld', branches: ['Making & Seeing the Nanoworld'] },
      { name: 'Nanomedicine & Clean Tech', branches: ['Nanomedicine & Clean Tech'] },
    ],
  },
  {
    key: 'quantum-information',
    name: 'Quantum Information',
    group: 'Applied Engineering & Technology',
    icon: 'atom',
    accent: '#8b5cf6',
    tagline: 'Qubits and beyond',
    blurb: 'Qubits and gates, algorithms and hardware — and the quantum sensing that started it all.',
    ownFields: ['Quantum Information'],
    /* X51: restructured — the sensing lesson now owns a correctly-named
       chapter; computation and algorithms/hardware follow (USER RULE 5). */
    chapters: [
      { name: 'Quantum Sensing & Metrology', branches: ['Beyond Computing'] },
      { name: 'Quantum Computation', branches: ['Quantum Computation'] },
      { name: 'Algorithms & Hardware', branches: ['Algorithms & Hardware'] },
    ],
  },
  {
    key: 'computational-science',
    name: 'Computational Science & Simulation',
    group: 'Applied Engineering & Technology',
    icon: 'cpu',
    accent: '#0891b2',
    tagline: 'Models of the future',
    blurb: 'The numerical engine, digital twins and the modeled Earth system.',
    ownFields: ['Computational Science'],
    /* X51: the shared numerical machinery sits first, then the two
       application chapters (USER RULE 5). */
    chapters: [
      { name: 'Numerical Methods', branches: ['Numerical Methods'] },
      { name: 'Simulating Reality', branches: ['Simulating Reality'] },
      { name: 'Earth System Modeling', branches: ['Earth System Modeling'] },
    ],
  },
  /* ================================================================ */
  /*  EVERYDAY LIFE SKILLS split (USER RULE 4) — 6 books               */
  /* ================================================================ */

  {
    key: 'cooking-food-science',
    name: 'Cooking & Food Science',
    group: 'Everyday Life Skills',
    icon: 'utensils',
    accent: '#f97316',
    tagline: 'The kitchen, understood',
    blurb: 'Kitchen chemistry, flavor and food safety.',
    ownFields: ['Cooking & Food Science'],
    chapters: [
      { name: 'Kitchen Chemistry & Flavor', branches: ['Kitchen Chemistry', 'Flavor'] },
      { name: 'Food Safety', branches: ['Food Safety'] },
    ],
  },
  {
    key: 'home-repair-machines',
    name: 'Home Repair & Everyday Machines',
    group: 'Everyday Life Skills',
    icon: 'wrench',
    accent: '#0d9488',
    tagline: 'Fix it yourself',
    blurb: 'Around the house — repairs and maintenance — and the machines of daily life.',
    ownFields: ['Home & Repair', 'Everyday Machines'],
    chapters: [
      { name: 'Around the House', fields: ['Home & Repair'] },
      { name: 'Machines of Daily Life', fields: ['Everyday Machines'] },
    ],
  },
  {
    key: 'cars-navigation-outdoors',
    name: 'Cars, Navigation & the Outdoors',
    group: 'Everyday Life Skills',
    icon: 'car',
    accent: '#334155',
    tagline: 'Get there and get back',
    blurb: 'Wheels and ownership, and navigation and outdoor skills.',
    ownFields: ['Car & Driving', 'Navigation & Outdoors'],
    chapters: [
      { name: 'Wheels & Ownership', fields: ['Car & Driving'] },
      { name: 'Navigation & the Outdoors', fields: ['Navigation & Outdoors'] },
    ],
  },
  {
    key: 'garden-growing',
    name: 'Garden & Growing',
    group: 'Everyday Life Skills',
    icon: 'sprout',
    accent: '#16a34a',
    tagline: 'Grow more plants',
    blurb: 'Growing things — soil, water, light — and propagation: making more plants from the plants you have.',
    ownFields: ['Garden & Growing'],
    chapters: [
      { name: 'Growing Things', branches: ['Growing Things'] },
      { name: 'Propagation: Making More Plants', branches: ['Propagation'] },
    ],
  },
  {
    key: 'practical-skills-readiness',
    name: 'Practical Skills & Readiness',
    group: 'Everyday Life Skills',
    icon: 'hand',
    accent: '#9333ea',
    tagline: 'Life, handled',
    blurb: 'Cloth and mending, household chemistry, animal companions, safety and readiness.',
    ownFields: ['Practical Skills'],
    chapters: [
      { name: 'Cloth, Mending & Household Chemistry', branches: ['Cloth & Mending', 'Household Chemistry'] },
      { name: 'Animals, Safety & Readiness', branches: ['Animal Companions', 'Safety & Readiness'] },
    ],
  },
  {
    key: 'career-communication',
    name: 'Career & Communication',
    group: 'Everyday Life Skills',
    icon: 'megaphone',
    accent: '#db2777',
    tagline: 'Say it, get hired',
    blurb: 'Speaking and presence, getting hired, and working smarter.',
    ownFields: ['Career & Communication'],
    chapters: [
      { name: 'Speaking & Presence', branches: ['Speaking & Presence'] },
      { name: 'Getting Hired & Working Smarter', branches: ['Getting Hired', 'Working Smarter'] },
    ],
  },
]
