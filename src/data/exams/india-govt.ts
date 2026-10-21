import type { CuratedExam } from './types'

/**
 * India government / public-sector recruitment exams — curated official
 * syllabi.
 *
 * Sources: UPSC (upsc.gov.in — Civil Services and NDA notifications),
 * SSC (ssc.gov.in — CGL notice of examination), IBPS (ibps.in — PO
 * notification). Weightages appear only where officially published;
 * UPSC's syllabus is topical, not chapter-wise.
 */

export const INDIA_GOVT_EXAMS: CuratedExam[] = [
  {
    id: 'upsc-prelims',
    name: 'UPSC Prelims',
    fullName: 'UPSC Civil Services Preliminary Examination',
    aliases: ['upsc', 'civil services prelims', 'upsc cse', 'ias prelims'],
    region: 'India',
    category: 'Civil services',
    popularity: 95,
    syllabusVerified: '2026-10-20',
    website: 'https://upsc.gov.in',
    overview: {
      conductor: 'Union Public Service Commission',
      level: 'Graduate → civil services (IAS, IPS, IFS and other Group A/B services)',
      stages: ['Prelims (objective) → Mains (written) → Interview'],
      papers: ['General Studies Paper I — 100 questions, 200 marks (merit-ranking)', 'General Studies Paper II (CSAT) — 80 questions, 200 marks (qualifying)'],
      duration: 'GS Paper I: 2 h · CSAT: 2 h',
      marking: 'GS Paper I: +2/−0.66 per question (200 marks); CSAT qualifying 33%',
      negativeMarking: 'One-third of the question\'s marks deducted per wrong answer (−0.66 in GS I, −0.83 in CSAT)',
      questionTypes: ['MCQ (4 options)'],
      notes: 'GS Paper I decides the cut; CSAT is qualifying. Syllabus is topical, not chapter-wise.',
    },
    sources: [
      { title: 'UPSC Civil Services Examination — notification and syllabus', url: 'https://upsc.gov.in/examinations/active-examinations', host: 'upsc.gov.in' },
    ],
    subjects: [
      {
        name: 'General Studies Paper I',
        units: [
          {
            name: 'History of India and Indian National Movement',
            topics: [
              { name: 'Ancient India (Indus Valley to the Guptas)', subtopics: ['Harappan civilization', 'Vedic age and Mahajanapadas', 'Mauryan and Gupta empires'] },
              { name: 'Medieval India', subtopics: ['Delhi Sultanate', 'Mughal Empire', 'Bhakti and Sufi movements'] },
              { name: 'Modern Indian History (1757–1947)', subtopics: ['Colonial expansion after Plassey', 'Socio-religious reform movements', 'Revolt of 1857 and its aftermath'] },
              { name: 'Freedom Struggle and Its Leaders', subtopics: ['Non-Cooperation, Civil Disobedience and Quit India', 'Revolutionary and peasant movements', 'Personalities and their contributions'] },
              { name: 'Art and Culture', subtopics: ['Classical dances and music', 'Architecture and painting schools', 'Literature, fairs and festivals'] },
            ],
          },
          {
            name: 'Geography',
            topics: [
              { name: 'Physical Geography of India and the World', subtopics: ['Landforms and geomorphic processes', 'Climate and ocean systems'] },
              { name: 'Indian Geography (Rivers, Soil, Climate)', subtopics: ['River systems', 'Soil types and distribution', 'Monsoon mechanism'] },
              { name: 'Human and Economic Geography', subtopics: ['Population distribution and migration', 'Agriculture, minerals and industries'] },
              { name: 'Map-Based Questions', subtopics: ['Locating places and physical features', 'Places in the news'] },
            ],
          },
          {
            name: 'Indian Polity and Governance',
            topics: [
              { name: 'Constitution and Its Features', subtopics: ['Making of the Constitution', 'Preamble and basic features', 'Federal structure'] },
              { name: 'Fundamental Rights and Duties', subtopics: ['Fundamental Rights', 'Directive Principles and Fundamental Duties'] },
              { name: 'Parliament and Judiciary', subtopics: ['Executive and legislature', 'Judiciary and judicial review'] },
              { name: 'Federalism and Local Government', subtopics: ['Centre-state relations', 'Panchayati Raj and municipalities'] },
              { name: 'Non-Constitutional Bodies', subtopics: ['Statutory bodies', 'NITI Aayog and executive bodies', 'Regulatory bodies'] },
            ],
          },
          {
            name: 'Economy and Social Development',
            topics: [
              { name: 'Macroeconomics Basics', subtopics: ['GDP, inflation and growth', 'Monetary and fiscal policy basics'] },
              { name: 'Indian Economy and Planning', subtopics: ['Planning history and the shift to NITI Aayog', 'Budget and taxation'] },
              { name: 'Poverty and Inclusion', subtopics: ['Poverty estimation', 'Employment and inclusive growth'] },
              { name: 'Demographics and Social Sector', subtopics: ['Census and population trends', 'Health and education indicators'] },
            ],
          },
          {
            name: 'Environment and Ecology',
            topics: [
              { name: 'Ecosystems and Biodiversity', subtopics: ['Ecosystem structure and function', 'Biodiversity hotspots and species'] },
              { name: 'Environmental Laws and Policies', subtopics: ['Key environmental acts', 'International conventions'] },
              { name: 'Climate Change', subtopics: ['Global warming: causes and impacts', 'IPCC reports and global negotiations'] },
              { name: 'Species and Conservation', subtopics: ['IUCN statuses', 'Protected areas and conservation programmes'] },
            ],
          },
          {
            name: 'General Science',
            topics: [
              { name: 'Biology Basics', subtopics: ['Cells and human physiology', 'Genetics and plant biology'] },
              { name: 'Chemistry Basics', subtopics: ['Everyday chemistry', 'Acids, bases and materials'] },
              { name: 'Physics Basics', subtopics: ['Motion, energy and electricity', 'Light, sound and everyday phenomena'] },
              { name: 'Science and Technology Current Developments', subtopics: ['Space and defence technology', 'Biotechnology and new developments'] },
            ],
          },
          {
            name: 'Current Events of National and International Importance',
            topics: [
              { name: 'Government Schemes and Policies', subtopics: ['Central sector and centrally sponsored schemes', 'Recent policy decisions'] },
              { name: 'Awards and Persons in News', subtopics: ['National and international awards', 'Appointments and notable personalities'] },
              { name: 'International Relations and Summits', subtopics: ['Summits and groupings', 'India\'s bilateral and multilateral relations'] },
              { name: 'Sports and Places in News', subtopics: ['Tournaments and results', 'Geography in the news'] },
            ],
          },
        ],
      },
      {
        name: 'General Studies Paper II (CSAT)',
        mappedSubjectId: 'aptitude',
        units: [
          {
            name: 'Comprehension',
            topics: [
              { name: 'Passage Comprehension', subtopics: ['Reading and analysing passages', 'Main idea and detail questions'] },
              { name: 'Inference from Passages', subtopics: ['Drawing inferences', 'Identifying assumptions and implications'] },
            ],
          },
          {
            name: 'Interpersonal Skills Including Communication',
            topics: [
              { name: 'Communication Skills', subtopics: ['Verbal and non-verbal communication', 'Barriers to effective communication'] },
              { name: 'Interpersonal Skills', subtopics: ['Empathy and listening', 'Working with others'] },
            ],
          },
          {
            name: 'Logical Reasoning and Analytical Ability',
            topics: [
              { name: 'Syllogisms', subtopics: ['Statement-conclusion deduction using Venn diagrams'] },
              { name: 'Blood Relations', subtopics: ['Family tree reasoning'] },
              { name: 'Direction Sense', subtopics: ['Direction and distance puzzles'] },
              { name: 'Seating Arrangement', subtopics: ['Linear and circular arrangements'] },
              { name: 'Puzzles', subtopics: ['Scheduling and grouping puzzles', 'Multi-variable constraint solving'] },
              { name: 'Assumption and Inference', subtopics: ['Statement-based assumption questions', 'Course-of-action and inference questions'] },
            ],
          },
          {
            name: 'Decision Making and Problem Solving',
            topics: [
              { name: 'Decision Making', subtopics: ['Administrative and situational decisions', 'Weighing options under constraints'] },
              { name: 'Problem Solving', subtopics: ['Structured approaches to problems'] },
            ],
          },
          {
            name: 'General Mental Ability',
            topics: [
              { name: 'Number Series', subtopics: ['Finding missing terms in series'] },
              { name: 'Coding-Decoding', subtopics: ['Letter and number coding'] },
              { name: 'Calendar and Clock', subtopics: ['Calendar calculations', 'Clock angle problems'] },
              { name: 'Ranking', subtopics: ['Rank and position problems'] },
            ],
          },
          {
            name: 'Basic Numeracy',
            topics: [
              { name: 'Arithmetic', subtopics: ['Fundamental operations', 'Numbers and their relations, orders of magnitude'] },
              { name: 'Percentages', subtopics: ['Percentage change and applications'] },
              { name: 'Ratio', subtopics: ['Ratio and proportion problems'] },
              { name: 'Averages', subtopics: ['Simple and weighted averages'] },
              { name: 'Time-Speed-Distance', subtopics: ['Speed, distance and time problems'] },
              { name: 'Data Interpretation', subtopics: ['Numbers-based interpretation in arithmetic problems'] },
            ],
          },
          {
            name: 'Data Interpretation',
            topics: [
              { name: 'Tables and Charts', subtopics: ['Reading data tables', 'Interpreting charts'] },
              { name: 'Graphs', subtopics: ['Bar and line graphs', 'Data sufficiency judgments'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ssc-cgl',
    name: 'SSC CGL',
    fullName: 'Staff Selection Commission — Combined Graduate Level Examination',
    aliases: ['ssc', 'combined graduate level', 'ssc cgl tier 1'],
    region: 'India',
    category: 'Government recruitment',
    popularity: 89,
    syllabusVerified: '2026-10-20',
    website: 'https://ssc.gov.in',
    overview: {
      conductor: 'Staff Selection Commission',
      level: 'Graduate → Group B and C posts in central government departments',
      stages: ['Tier 1 (computer-based) → Tier 2 (computer-based, merit)'],
      papers: ['Tier 1 — four equal sections of 50 marks', 'Tier 2 — Paper 1 compulsory (merit); optional papers for specific posts'],
      duration: 'Tier 1: 1 h · Tier 2: 2 h 15 min per paper',
      marking: 'Tier 1: 200 marks +2/−0.5',
      negativeMarking: 'Tier 1: −0.5 per wrong answer; Tier 2 Paper 1: −1 per wrong answer',
      questionTypes: ['MCQ (4 options)'],
      notes: 'Tier 1 qualifying-focused; Tier 2 decides merit (Paper 1 compulsory).',
    },
    sources: [
      { title: 'SSC CGL — notice of examination and syllabus', url: 'https://ssc.gov.in', host: 'ssc.gov.in' },
    ],
    subjects: [
      {
        name: 'General Intelligence and Reasoning',
        mappedSubjectId: 'aptitude',
        units: [
          {
            name: 'Verbal Reasoning',
            topics: [
              { name: 'Analogies', subtopics: ['Semantic, symbolic and number analogies', 'Figural analogies'] },
              { name: 'Classification', subtopics: ['Odd one out among words, numbers and figures'] },
              { name: 'Series', subtopics: ['Number series', 'Alphabet and semantic series', 'Figural series'] },
              { name: 'Coding-Decoding', subtopics: ['Letter and number coding'] },
              { name: 'Blood Relations', subtopics: ['Family relationship reasoning'] },
              { name: 'Direction and Distance', subtopics: ['Direction sense problems'] },
            ],
          },
          {
            name: 'Analytical Reasoning',
            topics: [
              { name: 'Syllogism', subtopics: ['Statement-conclusion deduction'] },
              { name: 'Venn Diagrams', subtopics: ['Set-based problem solving'] },
              { name: 'Missing Numbers', subtopics: ['Missing numbers in figures and matrices'] },
              { name: 'Critical Thinking', subtopics: ['Problem solving', 'Word building and numerical operations'] },
            ],
          },
          {
            name: 'Non-Verbal Reasoning',
            topics: [
              { name: 'Figural Series and Analogy', subtopics: ['Pattern folding and completion', 'Figural analogy and classification'] },
              { name: 'Space Orientation', subtopics: ['Punched hole/pattern folding and unfolding', 'Embedded figures'] },
            ],
          },
        ],
      },
      {
        name: 'General Awareness',
        units: [
          {
            name: 'Current Affairs',
            topics: [
              { name: 'Recent Events', subtopics: ['National affairs', 'International affairs'] },
              { name: 'Awards, Sports and Persons in News', subtopics: ['Awards and honours', 'Sports events and personalities'] },
            ],
          },
          {
            name: 'History and Culture',
            topics: [
              { name: 'Ancient and Medieval India', subtopics: ['Major dynasties and developments', 'Bhakti and Sufi traditions'] },
              { name: 'Modern India', subtopics: ['Freedom struggle and independence'] },
              { name: 'Art and Culture', subtopics: ['Dances, music and theatre', 'Monuments, fairs and festivals'] },
            ],
          },
          {
            name: 'Geography',
            topics: [
              { name: 'Indian Geography', subtopics: ['Physical and political features', 'Rivers, climate and soil'] },
              { name: 'World Geography', subtopics: ['Countries, capitals and physical features'] },
            ],
          },
          {
            name: 'Polity and Economy',
            topics: [
              { name: 'Indian Polity', subtopics: ['Constitution and government structure', 'Rights, duties and panchayati raj'] },
              { name: 'Economy', subtopics: ['Basics of the Indian economy', 'Budget and economic terms in the news'] },
            ],
          },
          {
            name: 'General Science and Static GK',
            topics: [
              { name: 'General Science', subtopics: ['Biology basics', 'Chemistry basics', 'Physics basics'] },
              { name: 'Static GK', subtopics: ['Books and authors', 'Important days and organisations'] },
            ],
          },
        ],
      },
      {
        name: 'Quantitative Aptitude',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Arithmetic',
            topics: [
              { name: 'Number Systems', subtopics: ['Computation of whole numbers', 'Decimals, fractions and relationships between numbers', 'LCM and HCF'] },
              { name: 'Percentages', subtopics: ['Percentage change and applications'] },
              { name: 'Ratio and Proportion', subtopics: ['Ratio, proportion and partnership', 'Mixtures and alligation'] },
              { name: 'Averages', subtopics: ['Simple and weighted averages'] },
              { name: 'Interest', subtopics: ['Simple and compound interest'] },
              { name: 'Profit and Loss', subtopics: ['Cost price, selling price and discount'] },
              { name: 'Time and Work', subtopics: ['Work and wages', 'Pipes and cisterns'] },
              { name: 'Time, Speed and Distance', subtopics: ['Trains and relative speed', 'Boats and streams'] },
            ],
          },
          {
            name: 'Algebra',
            topics: [
              { name: 'Basic Identities and Surds', subtopics: ['School-algebra identities', 'Elementary surds (simple problems)'] },
              { name: 'Equations and Graphs', subtopics: ['Linear equations in one and two variables', 'Graphs of linear equations'] },
            ],
          },
          {
            name: 'Geometry and Mensuration',
            topics: [
              { name: 'Geometry', subtopics: ['Triangles and their centres, congruence and similarity', 'Circles: chords and tangents'] },
              { name: 'Mensuration', subtopics: ['Areas of triangles, quadrilaterals and circles', 'Surface areas and volumes of standard solids'] },
              { name: 'Trigonometry', subtopics: ['Ratios, identities and complementary angles', 'Heights and distances'] },
            ],
          },
          {
            name: 'Data Interpretation',
            topics: [
              { name: 'Tables and Graphs', subtopics: ['Reading frequency tables and histograms', 'Interpreting bar graphs and line graphs'] },
              { name: 'Bar Diagrams and Pie Charts', subtopics: ['Share calculations from bar diagrams', 'Sector interpretation from pie charts'] },
            ],
          },
        ],
      },
      {
        name: 'English Comprehension',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Grammar and Usage',
            topics: [
              { name: 'Grammar', subtopics: ['Spot the error', 'Fill in the blanks', 'Sentence improvement'] },
              { name: 'Voice and Narration', subtopics: ['Active and passive voice', 'Direct and indirect speech'] },
              { name: 'Spelling', subtopics: ['Detecting misspelt words'] },
            ],
          },
          {
            name: 'Vocabulary',
            topics: [
              { name: 'Synonyms and Antonyms', subtopics: ['Choosing synonyms', 'Choosing antonyms', 'Homonyms in context'] },
              { name: 'Idioms and Phrases', subtopics: ['Meanings of idioms and phrases'] },
              { name: 'One-Word Substitution', subtopics: ['Single-word equivalents'] },
            ],
          },
          {
            name: 'Comprehension and Composition',
            topics: [
              { name: 'Reading Comprehension', subtopics: ['Passage-based questions'] },
              { name: 'Cloze Test', subtopics: ['Cloze passage completion'] },
              { name: 'Para Jumbles', subtopics: ['Shuffling of sentence parts', 'Shuffling of sentences in a passage'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ibps-po',
    name: 'IBPS PO',
    fullName: 'Institute of Banking Personnel Selection — Probationary Officers',
    aliases: ['bank po', 'ibps exam', 'po exam'],
    region: 'India',
    category: 'Banking recruitment',
    popularity: 86,
    syllabusVerified: '2026-10-20',
    website: 'https://www.ibps.in',
    overview: {
      conductor: 'IBPS',
      level: 'Graduate → probationary officer / management trainee in public sector banks',
      stages: ['Prelims → Mains → Interview'],
      papers: ['Prelims — English Language, Quantitative Aptitude, Reasoning Ability', 'Mains — Reasoning and Computer Aptitude, Data Analysis and Interpretation, General/Economy/Banking Awareness, English (plus descriptive letter and essay)'],
      duration: 'Prelims 1 h · Mains 3 h 30 min',
      marking: '+1 correct / −0.25 incorrect (prelims)',
      negativeMarking: 'One-fourth of the marks deducted per wrong answer',
      questionTypes: ['MCQ (5 options)'],
      notes: 'Prelims qualifying; Mains + interview decide merit.',
    },
    sources: [
      { title: 'IBPS PO — notification and exam pattern', url: 'https://www.ibps.in', host: 'ibps.in' },
    ],
    subjects: [
      {
        name: 'English Language',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Reading Comprehension and Cloze',
            topics: [
              { name: 'Reading Comprehension', subtopics: ['Story-based and economy-based passages', 'Inference and vocabulary questions from passages'] },
              { name: 'Cloze Test', subtopics: ['Fill-in-the-blank passage completion'] },
            ],
          },
          {
            name: 'Grammar and Usage',
            topics: [
              { name: 'Error Spotting', subtopics: ['Identifying grammatical errors in sentences'] },
              { name: 'Fill in the Blanks', subtopics: ['Single and double blank questions'] },
            ],
          },
          {
            name: 'Vocabulary and Structure',
            topics: [
              { name: 'Vocabulary', subtopics: ['Word usage and collocations', 'Phrasal verbs and connectors'] },
              { name: 'Para Jumbles', subtopics: ['Reordering sentences into coherent paragraphs'] },
            ],
          },
        ],
      },
      {
        name: 'Quantitative Aptitude',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Number-Based Topics',
            topics: [
              { name: 'Number Series', subtopics: ['Wrong-number and missing-number series'] },
              { name: 'Simplification and Approximation', subtopics: ['BODMAS-based simplification', 'Approximation techniques'] },
              { name: 'Quadratic Equations', subtopics: ['Comparing quantities from paired equations'] },
            ],
          },
          {
            name: 'Arithmetic',
            topics: [
              { name: 'Percentages, Ratio and Ages', subtopics: ['Percentages and profit-loss', 'Ratio, partnership and problem on ages'] },
              { name: 'Interest', subtopics: ['Simple and compound interest'] },
              { name: 'Time, Work and Speed', subtopics: ['Time and work', 'Time, speed and distance'] },
              { name: 'Probability and Misc', subtopics: ['Basic probability', 'Permutations, mensuration and other misc topics'] },
            ],
          },
          {
            name: 'Data Interpretation',
            topics: [
              { name: 'Tables and Caselets', subtopics: ['Tabular data sets', 'Caselet-based sets'] },
              { name: 'Charts and Graphs', subtopics: ['Pie charts', 'Bar graphs and line graphs'] },
            ],
          },
        ],
      },
      {
        name: 'Reasoning Ability',
        mappedSubjectId: 'aptitude',
        units: [
          {
            name: 'Puzzles and Seating Arrangements',
            topics: [
              { name: 'Seating Arrangements', subtopics: ['Linear seating', 'Circular and square seating'] },
              { name: 'Puzzles', subtopics: ['Floor and box puzzles', 'Scheduling and category puzzles'] },
            ],
          },
          {
            name: 'Logical Reasoning',
            topics: [
              { name: 'Syllogism', subtopics: ['Statement-conclusion deduction'] },
              { name: 'Inequality', subtopics: ['Direct inequality', 'Coded inequality'] },
              { name: 'Blood Relations and Direction Sense', subtopics: ['Family relation puzzles', 'Direction and distance problems'] },
              { name: 'Order and Ranking', subtopics: ['Rank, position and comparison puzzles'] },
            ],
          },
          {
            name: 'Coding and Machine Input',
            topics: [
              { name: 'Coding-Decoding', subtopics: ['Letter, number and symbol coding'] },
              { name: 'Input-Output', subtopics: ['Machine input-output steps and logic'] },
            ],
          },
        ],
      },
      {
        name: 'General/Economy/Banking Awareness',
        units: [
          {
            name: 'Banking Awareness',
            topics: [
              { name: 'RBI and Banking Structure', subtopics: ['Role and functions of the RBI', 'Types of banks and banking products'] },
              { name: 'Monetary Policy', subtopics: ['Repo rate and policy tools', 'Money market basics'] },
              { name: 'Financial Markets', subtopics: ['Capital market instruments', 'Regulators: SEBI, IRDAI'] },
            ],
          },
          {
            name: 'General Awareness',
            topics: [
              { name: 'Government Schemes', subtopics: ['Financial inclusion and social security schemes'] },
              { name: 'Current Affairs', subtopics: ['Banking and economy news', 'National and international events'] },
              { name: 'Static Awareness', subtopics: ['Currencies, capitals and headquarters', 'Important days and firsts in banking'] },
            ],
          },
        ],
      },
      {
        name: 'Computer Aptitude',
        units: [
          {
            name: 'Computer Fundamentals',
            topics: [
              { name: 'Computer Fundamentals', subtopics: ['Generations and history of computers', 'Memory and operating-system basics'] },
              { name: 'Hardware and Software', subtopics: ['Input, output and storage devices', 'Types of software'] },
            ],
          },
          {
            name: 'Internet and Applications',
            topics: [
              { name: 'Internet and Networking', subtopics: ['Internet basics and browsers', 'Network types and protocols'] },
              { name: 'MS Office', subtopics: ['Word, Excel and PowerPoint basics'] },
            ],
          },
          {
            name: 'Cyber Security',
            topics: [
              { name: 'Security Basics', subtopics: ['Viruses, malware and phishing', 'Firewalls and security tools'] },
              { name: 'Safe Computing Practices', subtopics: ['Passwords and authentication', 'Safe internet and banking practices'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'nda',
    name: 'NDA',
    fullName: 'National Defence Academy Examination',
    aliases: ['national defence academy', 'nda exam'],
    region: 'India',
    category: 'Defence services',
    popularity: 84,
    syllabusVerified: '2026-10-20',
    website: 'https://upsc.gov.in',
    overview: {
      conductor: 'UPSC',
      level: '10+2 → National Defence Academy (Army, Navy and Air Force wings)',
      stages: ['Written exam → SSB interview (5 days) → Medical board'],
      papers: ['Mathematics (300 marks)', 'General Ability Test (600 marks)'],
      duration: 'Mathematics 2.5 h · GAT 2.5 h',
      marking: 'Maths 300 marks; GAT 600 marks; −0.33 negative',
      negativeMarking: 'One-third of the question\'s marks deducted per wrong answer',
      questionTypes: ['MCQ (4 options)'],
      notes:
        'Conducted twice a year (NDA I and II). Clearing the written exam is followed by the 5-day SSB interview and a medical board before the final merit list.',
    },
    sources: [
      { title: 'NDA & NA examination — notification and syllabus', url: 'https://upsc.gov.in/examinations/active-examinations', host: 'upsc.gov.in' },
    ],
    subjects: [
      {
        name: 'Mathematics',
        mappedSubjectId: 'mathematics',
        weightage: 33,
        units: [
          {
            name: 'Algebra',
            topics: [
              { name: 'Sets, Relations and Number Systems', subtopics: ['Set operations and Venn diagrams', 'De Morgan laws and Cartesian product', 'Binary system and conversion'] },
              { name: 'Complex Numbers', subtopics: ['Basic properties, modulus and argument', 'Cube roots of unity'] },
              { name: 'Progressions', subtopics: ['Arithmetic, geometric and harmonic progressions'] },
              { name: 'Quadratic Equations and Inequations', subtopics: ['Quadratics with real coefficients', 'Linear inequations in two variables by graphs'] },
              { name: 'Permutation, Combination and Binomial Theorem', subtopics: ['Counting principles', 'Binomial theorem and applications'] },
              { name: 'Logarithms', subtopics: ['Laws of logarithms', 'Applications'] },
            ],
          },
          {
            name: 'Matrices and Determinants',
            topics: [
              { name: 'Matrices', subtopics: ['Types and operations', 'Adjoint and inverse'] },
              { name: 'Determinants', subtopics: ['Properties of determinants', 'Cramer\'s rule and applications to linear equations'] },
            ],
          },
          {
            name: 'Trigonometry',
            topics: [
              { name: 'Angles, Ratios and Identities', subtopics: ['Degrees and radians', 'Trigonometric identities', 'Sum and difference formulae, multiple and sub-multiple angles'] },
              { name: 'Inverse Trigonometric Functions', subtopics: ['Principal values and properties'] },
              { name: 'Applications', subtopics: ['Height and distance problems', 'Properties of triangles'] },
            ],
          },
          {
            name: 'Analytical Geometry of Two and Three Dimensions',
            topics: [
              { name: 'Straight Lines', subtopics: ['Rectangular Cartesian coordinates', 'Equation of a line in various forms', 'Angle between two lines and distance of a point from a line'] },
              { name: 'Circles', subtopics: ['Equation of a circle in various forms'] },
              { name: 'Conic Sections', subtopics: ['Parabola, ellipse and hyperbola: standard forms', 'Eccentricity and axis of a conic'] },
              { name: 'Three-Dimensional Geometry', subtopics: ['Distance between two points; direction cosines and ratios', 'Equation of a plane and a line', 'Angle between lines and planes', 'Equation of a sphere'] },
            ],
          },
          {
            name: 'Differential Calculus',
            topics: [
              { name: 'Functions', subtopics: ['Domain, range and graph of real-valued functions', 'Composite, one-one, onto and inverse functions'] },
              { name: 'Limits and Continuity', subtopics: ['Notion of limit and standard limits', 'Continuity and algebra of continuous functions'] },
              { name: 'Differentiation', subtopics: ['Geometrical and physical interpretation of a derivative', 'Sum, product, quotient and chain rules', 'Second-order derivatives'] },
              { name: 'Applications of Derivatives', subtopics: ['Increasing and decreasing functions', 'Maxima and minima problems'] },
            ],
          },
          {
            name: 'Integral Calculus and Differential Equations',
            topics: [
              { name: 'Integration', subtopics: ['Integration as the inverse of differentiation', 'Substitution and integration by parts', 'Standard integrals: algebraic, trigonometric, exponential, hyperbolic'] },
              { name: 'Definite Integrals and Areas', subtopics: ['Evaluation of definite integrals', 'Areas of plane regions bounded by curves'] },
              { name: 'Differential Equations', subtopics: ['Order and degree; formation of equations', 'General and particular solutions', 'First-order first-degree equations of various types', 'Growth and decay applications'] },
            ],
          },
          {
            name: 'Vector Algebra',
            topics: [
              { name: 'Vector Basics', subtopics: ['Magnitude and direction of a vector', 'Unit and null vectors; addition and scalar multiplication'] },
              { name: 'Products of Vectors', subtopics: ['Scalar (dot) product', 'Vector (cross) product'] },
              { name: 'Applications', subtopics: ['Work done by a force', 'Moment of a force and geometrical problems'] },
            ],
          },
          {
            name: 'Statistics and Probability',
            topics: [
              { name: 'Statistics', subtopics: ['Classification of data and frequency distributions', 'Graphical representation: histogram, pie chart, frequency polygon', 'Mean, median and mode', 'Variance and standard deviation', 'Correlation and regression'] },
              { name: 'Probability', subtopics: ['Random experiments, sample space and events', 'Union, intersection and complementary events', 'Classical and statistical definitions of probability', 'Conditional probability and Bayes theorem', 'Random variables and the binomial distribution'] },
            ],
          },
        ],
      },
      {
        name: 'General Ability Test',
        weightage: 67,
        units: [
          {
            name: 'English',
            topics: [
              { name: 'Grammar and Usage', subtopics: ['Grammar rules and correct usage', 'Spotting errors and sentence improvement'] },
              { name: 'Vocabulary', subtopics: ['Synonyms and antonyms', 'Words in context'] },
              { name: 'Comprehension', subtopics: ['Passage-based questions'] },
              { name: 'Cohesion', subtopics: ['Cohesion in extended texts'] },
            ],
          },
          {
            name: 'Physics',
            topics: [
              { name: 'Matter and Measurement', subtopics: ['Physical properties and states of matter', 'Mass, weight, volume, density and specific gravity', 'Archimedes\' principle and pressure barometer'] },
              { name: 'Motion and Forces', subtopics: ['Velocity and acceleration', 'Newton\'s laws, force and momentum; parallelogram of forces', 'Work, power and energy', 'Gravitation; stability and equilibrium of bodies'] },
              { name: 'Heat and Sound', subtopics: ['Effects of heat; measurement of temperature', 'Change of state and latent heat; modes of heat transfer', 'Sound waves and simple musical instruments'] },
              { name: 'Light and Magnetism', subtopics: ['Rectilinear propagation, reflection and refraction', 'Spherical mirrors, lenses and the human eye', 'Magnets and the earth as a magnet'] },
              { name: 'Electricity', subtopics: ['Static and current electricity; Ohm\'s law and simple circuits', 'Heating, lighting and magnetic effects of current', 'Measurement of power; primary and secondary cells; X-rays'] },
              { name: 'Everyday Physics', subtopics: ['Simple pendulum, pulleys, levers and siphon', 'Common devices: pressure cooker, thermos flask, periscope, telescope, mariner\'s compass, lightning conductors'] },
            ],
          },
          {
            name: 'Chemistry',
            topics: [
              { name: 'Basics of Matter and Reactions', subtopics: ['Physical and chemical changes', 'Elements, mixtures and compounds', 'Symbols, formulae and simple equations; laws of chemical combination'] },
              { name: 'Air, Water and Common Gases', subtopics: ['Properties of air and water', 'Preparation and properties of hydrogen, oxygen, nitrogen and carbon dioxide', 'Oxidation and reduction'] },
              { name: 'Acids, Bases and Salts', subtopics: ['Common acids, bases and salts and their uses'] },
              { name: 'Carbon and Materials', subtopics: ['Different forms of carbon', 'Natural and artificial fertilizers', 'Materials: soap, glass, ink, paper, cement, paints, safety matches and gunpowder'] },
              { name: 'Atomic Structure Basics', subtopics: ['Elementary structure of the atom', 'Atomic equivalent, molecular weights and valency'] },
            ],
          },
          {
            name: 'General Science',
            topics: [
              { name: 'Living and Non-Living', subtopics: ['Difference between the living and non-living'] },
              { name: 'Basis of Life', subtopics: ['Cells, protoplasm and tissues'] },
              { name: 'Growth and Reproduction', subtopics: ['Growth and reproduction in plants and animals'] },
              { name: 'Human Body and Health', subtopics: ['Elementary knowledge of the body and its important organs', 'Common epidemics, their causes and prevention'] },
              { name: 'Food and Nutrition', subtopics: ['Food as the source of energy', 'Constituents of food and a balanced diet'] },
              { name: 'The Solar System', subtopics: ['Meteors and comets', 'Eclipses'] },
            ],
          },
          {
            name: 'History and Freedom Movement',
            topics: [
              { name: 'Survey of Indian History', subtopics: ['Broad survey with emphasis on culture and civilisation'] },
              { name: 'Freedom Movement in India', subtopics: ['Rise of nationalism and key phases of the movement'] },
              { name: 'Constitution and Administration', subtopics: ['Elementary study of the Indian Constitution and administration'] },
              { name: 'Planning and Rural Development', subtopics: ['Elementary knowledge of the Five Year Plans', 'Panchayati Raj, co-operatives and community development', 'Bhoodan, Sarvodaya, national integration and the welfare state', 'Basic teachings of Mahatma Gandhi'] },
            ],
          },
          {
            name: 'Geography',
            topics: [
              { name: 'The Earth', subtopics: ['Shape, size and origin of the earth', 'Latitudes, longitudes and the concept of time; international date line', 'Movements of the earth and their effects'] },
              { name: 'Landforms and Processes', subtopics: ['Rocks and their classification', 'Weathering (mechanical and chemical), earthquakes and volcanoes'] },
              { name: 'Oceans and Atmosphere', subtopics: ['Ocean currents and tides', 'Composition of the atmosphere; temperature and pressure', 'Winds, cyclones and anti-cyclones; humidity, condensation and precipitation; climate types'] },
              { name: 'World Regional Geography', subtopics: ['Major natural regions of the world'] },
              { name: 'Geography of India', subtopics: ['Climate and natural vegetation', 'Mineral, power, agricultural and industrial distribution', 'Sea ports; main sea, land and air routes; imports and exports'] },
            ],
          },
          {
            name: 'Current Events',
            topics: [
              { name: 'Recent Events in India', subtopics: ['Important events in India in recent years'] },
              { name: 'Important World Events', subtopics: ['Current important world events'] },
              { name: 'Prominent Personalities', subtopics: ['Indian and international personalities', 'Personalities connected with cultural activities and sports'] },
            ],
          },
        ],
      },
    ],
  },
]
