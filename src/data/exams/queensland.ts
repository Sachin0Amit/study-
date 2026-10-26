import type { CuratedExam } from './types'

/**
 * Australia — Queensland QCE, curated official syllabi.
 *
 * Source: Queensland Curriculum and Assessment Authority (QCAA) senior
 * syllabus materials (qcaa.qld.edu.au), read this pass: the QCAA Physics
 * senior subject page (Physics General senior syllabus 2025 v1.3 — unit
 * names and internal-assessment structure confirmed on-page), the QCAA
 * Chemistry senior subject page (Chemistry General senior syllabus 2025
 * v1.3 — same), the official General Mathematics 2025 v1.3 syllabus
 * document (Unit 3 name and topic list from the QCAA-hosted syllabus),
 * the official English 2025 v1.3 General senior syllabus (unit names
 * Perspectives and texts / Texts and culture / Textual connections /
 * Close study of literary texts), and QCAA-dot-point-derived topic
 * breakdowns cross-checked across current QCE study resources for the
 * remaining subjects' Unit 3-4 topic and subject-matter structure
 * (Physics: Gravity and motion / Electromagnetism / Special relativity /
 * Quantum theory / The Standard Model with QCAA dot-point numbering;
 * Psychology Unit 3 Individual thinking — Brain function, Sensation and
 * perception, Memory, Learning — and Unit 4 The influence of others —
 * Social psychology, Interpersonal processes, Attitudes, Cross-cultural
 * psychology; Specialist Mathematics Units 3-4 topic list; Mathematical
 * Methods Further calculus / Further functions and statistics).
 *
 * Scope: the eight highest-enrolment QCE General subjects, curated at
 * Units 3 and 4 — the units the QCAA external examinations assess each
 * October-November, contributing 50% of the subject result that QTAC
 * scales into the ATAR. Units 1 and 2 enter the map only where Units 3-4
 * subject matter assumes them. English as an Additional Language,
 * Literature, Essential (Applied) Mathematics, humanities and language
 * General subjects are excluded as outside the library's teaching scope
 * (matching the VCE and NSW HSC files' exclusion notes).
 *
 * Assessment structure (QCAA subject pages + syllabuses): science
 * General subjects IA1 data test 10% + IA2 student experiment 20% +
 * IA3 research investigation 20% + external examination 50%; mathematics
 * and English General subjects combine school-based internal assessment
 * (50%) with the QCAA-set external examination (50%).
 */

export const QUEENSLAND_EXAMS: CuratedExam[] = [
  {
    id: 'qce',
    name: 'QCE',
    fullName: 'Queensland Certificate of Education',
    aliases: [
      'qce',
      'queensland certificate of education',
      'qcaa exam',
      'australia qce',
      'qce atar',
      'queensland atar',
      'qce exam',
    ],
    region: 'Australia',
    category: 'School-leaving subject exam',
    popularity: 59,
    syllabusVerified: '2026-10-26',
    website: 'https://www.qcaa.qld.edu.au',
    overview: {
      conductor: 'Queensland Curriculum and Assessment Authority (QCAA)',
      level: 'Years 11-12 → subject result → ATAR via QTAC',
      stages: [
        'Units 1 and 2 (school-assessed)',
        'Units 3 and 4 (internal assessment + QCAA external examinations)',
      ],
      papers: [
        'One written external examination per General subject in October-November',
      ],
      duration: 'External written examinations in October-November',
      marking:
        'School-based internal assessment 50% + QCAA external examination 50% for each General subject (science subjects: data test 10%, student experiment 20%, research investigation 20%, external exam 50%); subject results reported relative to the state cohort and scaled by QTAC into the ATAR',
      questionTypes: [
        'Multiple choice',
        'Short response',
        'Extended response',
        'Problem-solving and modelling tasks (mathematics)',
        'Analytical and creative writing (English)',
      ],
      notes:
        'Content follows the eight highest-enrolment General subjects at Units 3 and 4 by their official unit, topic and subject-matter names from the current QCAA senior syllabuses (Physics 2025 v1.3, Chemistry 2025 v1.3, Biology 2025 v1.3, Psychology 2025 v1.3, Mathematical Methods 2025, Specialist Mathematics 2025, General Mathematics 2025 v1.3, English 2025 v1.3). Each science subject also carries internal data-test and student-experiment assessment; its methodology is taught in the corresponding Knowledge-University research-methods lessons.',
    },
    sources: [
      {
        title: 'QCAA — Physics General senior syllabus 2025 (subject page + syllabus)',
        url: 'https://www.qcaa.qld.edu.au/senior/senior-subjects/sciences/physics',
        host: 'qcaa.qld.edu.au',
      },
      {
        title: 'QCAA — Chemistry General senior syllabus 2025 (subject page + syllabus)',
        url: 'https://www.qcaa.qld.edu.au/senior/senior-subjects/sciences/chemistry',
        host: 'qcaa.qld.edu.au',
      },
      {
        title: 'QCAA — General Mathematics 2025 v1.3 General senior syllabus (PDF)',
        url: 'https://www.qcaa.qld.edu.au/downloads/senior-qce/syllabuses/snr_maths_general_25_syll.pdf',
        host: 'qcaa.qld.edu.au',
      },
      {
        title: 'QCAA — English 2025 v1.3 General senior syllabus (PDF)',
        url: 'https://www.qcaa.qld.edu.au/downloads/senior-qce/syllabuses/snr_english_25_syll.pdf',
        host: 'qcaa.qld.edu.au',
      },
      {
        title: 'QCAA — Psychology 2025 v1.3 General senior syllabus (PDF)',
        url: 'https://www.qcaa.qld.edu.au/downloads/senior-qce/syllabuses/snr_psychology_25_syll.pdf',
        host: 'qcaa.qld.edu.au',
      },
      {
        title: 'QCAA — Senior subjects hub (Mathematical Methods, Specialist Mathematics, Biology)',
        url: 'https://www.qcaa.qld.edu.au/senior/senior-subjects',
        host: 'qcaa.qld.edu.au',
      },
    ],
    subjects: [
      // ---------------------------------------------------------- English --
      {
        name: 'English',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Unit 3: Textual connections',
            topics: [
              {
                name: 'Connecting and comparing texts',
                subtopics: [
                  'Analysing ideas, attitudes, values and beliefs across paired texts',
                  'How perspectives and representations are shaped by contexts',
                  'Cultural assumptions in texts and their readings',
                  'Sustained analytical response with integrated evidence and metalanguage',
                ],
              },
              {
                name: 'Creating texts for purposes and audiences',
                subtopics: [
                  'Imaginative, persuasive and reflective modes of writing',
                  'Sustaining voice, style and cohesion in written texts',
                  'Written statement of intention explaining authorial choices',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Close study of literary texts',
            topics: [
              {
                name: 'Sustained analysis of literary texts',
                subtopics: [
                  'Literary language features, text structures and stylistic choices',
                  'Sustaining perspective, style and cohesion across an extended analysis',
                  'Characterisation, themes and the influence of context',
                  'Extended analytical essay response to a literary text',
                ],
              },
              {
                name: 'Creative response to a literary text',
                subtopics: [
                  'Imaginative transformation of a literary text from a new perspective',
                  'Deliberate reuse of literary devices in creative writing',
                ],
              },
            ],
          },
        ],
      },
      // ------------------------------------------------- General Maths ----
      {
        name: 'General Mathematics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Unit 3: Bivariate data and time series analysis, sequences and Earth geometry',
            topics: [
              {
                name: 'Bivariate data',
                subtopics: [
                  'Identifying variables and constructing scatterplots',
                  'Association, correlation and causation',
                  'Fitting a line of best fit and interpreting residuals',
                ],
              },
              {
                name: 'Time series analysis',
                subtopics: [
                  'Describing and interpreting patterns over time',
                  'Smoothing techniques and trend lines',
                  'Seasonal adjustment and forecasting',
                ],
              },
              {
                name: 'Sequences and change',
                subtopics: [
                  'Arithmetic and geometric sequences',
                  'Recurrence relations for growth and decay',
                  'Modelling linear and non-linear change',
                ],
              },
              {
                name: 'Earth geometry: locations and time zones',
                subtopics: [
                  'Locations on the Earth: latitude and longitude',
                  'Distances on the Earth and great-circle routes',
                  'Time zones and their calculations',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Loans, investments, annuities, graphs and networks',
            topics: [
              {
                name: 'Loans, investments and annuities',
                subtopics: [
                  'Compound interest loans and investments',
                  'Recurrence relations for reducing-balance loans',
                  'Annuities and perpetuities; amortisation tables',
                ],
              },
              {
                name: 'Graphs and networks',
                subtopics: [
                  'Networks, vertices, edges and pathways',
                  'Eulerian trails and circuits',
                  'Trees, minimum spanning trees, Prim and Kruskal algorithms',
                  'Networks and decision mathematics: shortest paths (Dijkstra), critical path analysis, flow and matching problems',
                ],
              },
            ],
          },
        ],
      },
      // -------------------------------------------- Mathematical Methods --
      {
        name: 'Mathematical Methods',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Unit 3: Further calculus',
            topics: [
              {
                name: 'Differentiation of exponential, logarithmic and trigonometric functions',
                subtopics: [
                  'Product, quotient and chain rules applied further',
                  'Second derivatives, curve sketching and optimisation',
                  'Rates of change and related rates',
                ],
              },
              {
                name: 'Integrals and introduction to integration',
                subtopics: [
                  'Antidifferentiation as the reverse of differentiation',
                  'Definite integrals and the fundamental theorem of calculus',
                  'Displacement from velocity and acceleration functions',
                ],
              },
              {
                name: 'Discrete random variables and binomial distributions',
                subtopics: [
                  'Probability distributions of discrete random variables',
                  'Bernoulli trials and the binomial distribution',
                  'Mean and variance of binomial models',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Further functions and statistics',
            topics: [
              {
                name: 'Further integration',
                subtopics: [
                  'Integration techniques including substitution',
                  'Estimating areas using sums of rectangles',
                  'Applications of integration to areas and contexts',
                ],
              },
              {
                name: 'Trigonometry',
                subtopics: [
                  'Sine rule including the ambiguous case',
                  'Cosine rule and area of a triangle',
                  'Modelling in two and three dimensions: bearings and angles of elevation',
                ],
              },
              {
                name: 'Continuous random variables and the normal distribution',
                subtopics: [
                  'Probability density functions',
                  'The normal distribution and standardised scores',
                  'Calculating probabilities and quantiles',
                ],
              },
              {
                name: 'Sampling and interval estimates for proportions',
                subtopics: [
                  'Random sampling and sample proportions',
                  'Distribution of sample proportions',
                  'Confidence intervals and margin of error',
                ],
              },
            ],
          },
        ],
      },
      // ------------------------------------------- Specialist Mathematics --
      {
        name: 'Specialist Mathematics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Unit 3: Further complex numbers, proof, vectors and matrices',
            topics: [
              {
                name: 'Further complex numbers',
                subtopics: [
                  'Cartesian and polar forms; modulus and argument',
                  "De Moivre's theorem",
                  'Roots of complex numbers',
                ],
              },
              {
                name: 'Mathematical induction and trigonometric proofs',
                subtopics: [
                  'Proof by mathematical induction',
                  'Trigonometric identities and proofs',
                ],
              },
              {
                name: 'Vectors in two and three dimensions',
                subtopics: [
                  'Vector algebra, scalar and vector products',
                  'Projections and components of vectors',
                  'Geometric applications of vectors',
                ],
              },
              {
                name: 'Vector calculus',
                subtopics: [
                  'Position vectors as functions of time',
                  'Differentiation of vector functions',
                  'Motion along a curve',
                ],
              },
              {
                name: 'Further matrices',
                subtopics: [
                  'Matrix algebra and inverse matrices',
                  'Matrices as transformations',
                  'Solving systems of linear equations with matrices',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Further calculus and statistical inference',
            topics: [
              {
                name: 'Integration techniques',
                subtopics: [
                  'Integration by substitution and parts',
                  'Partial fractions and trigonometric integrals',
                ],
              },
              {
                name: 'Applications of integral calculus',
                subtopics: [
                  'Areas between curves',
                  'Volumes of revolution',
                ],
              },
              {
                name: 'Rates of change and differential equations',
                subtopics: [
                  'Separable differential equations',
                  'Exponential growth and decay models',
                  'Logistic models',
                ],
              },
              {
                name: 'Modelling motion',
                subtopics: [
                  'Kinematics: displacement, velocity and acceleration',
                  'Projectile motion under gravity',
                  'Forced motion and resisted motion',
                ],
              },
              {
                name: 'Statistical inference',
                subtopics: [
                  'Sample means and the central limit theorem',
                  'Confidence intervals for means',
                  'Hypothesis testing fundamentals',
                ],
              },
            ],
          },
        ],
      },
      // -------------------------------------------------------- Biology ---
      {
        name: 'Biology',
        mappedSubjectId: 'ku-life-sciences-biology',
        units: [
          {
            name: 'Unit 3: Biodiversity and the interconnectedness of life',
            topics: [
              {
                name: 'Biodiversity and populations',
                subtopics: [
                  'Species richness and evenness; Simpson\u2019s diversity index',
                  'Stratified sampling and percentage cover/frequency',
                  'Classifying species: Linnaean taxonomy and molecular evidence',
                  'Environmental factors limiting species distribution',
                ],
              },
              {
                name: 'Functioning ecosystems and succession',
                subtopics: [
                  'Energy flow through trophic levels; biomass and energy pyramids',
                  'Cycling of matter: water, carbon and nitrogen',
                  'Ecological niches, keystone species and species interactions',
                  'Population dynamics: carrying capacity, growth rates, mark-recapture',
                  'Primary and secondary ecological succession',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Heredity and continuity of life',
            topics: [
              {
                name: 'DNA, genes and the continuity of life',
                subtopics: [
                  'DNA structure, replication and gene expression',
                  'Mutation and its effects on proteins',
                  'Meiosis, crossing over and genetic variation',
                  'Mendelian inheritance: monohybrid and dihybrid crosses, sex linkage',
                  'Biotechnology: recombinant DNA, PCR, gel electrophoresis, DNA profiling',
                ],
              },
              {
                name: 'Continuity of life on Earth',
                subtopics: [
                  'Evolution by natural selection and supporting evidence',
                  'Microevolution: mutation, gene flow, drift, Hardy-Weinberg equilibrium',
                  'Speciation modes and isolating mechanisms',
                  'Macroevolution: divergent, convergent and co-evolution',
                  'Fossil record, phylogenetics and molecular clocks',
                ],
              },
            ],
          },
        ],
      },
      // ------------------------------------------------------ Chemistry ---
      {
        name: 'Chemistry',
        mappedSubjectId: 'chemistry',
        units: [
          {
            name: 'Unit 3: Equilibrium, acids and redox reactions',
            topics: [
              {
                name: 'Chemical equilibrium systems',
                subtopics: [
                  'Dynamic equilibrium and reversible reactions',
                  "Le Chatelier's principle and collision theory",
                  'Equilibrium constants and reaction quotients',
                  'Br\u00f8nsted-Lowry acids and bases; pH calculations; Ka and Kb',
                  'Buffers, indicators and volumetric analysis',
                ],
              },
              {
                name: 'Oxidation and reduction',
                subtopics: [
                  'Redox half-equations and oxidation numbers',
                  'Galvanic cells and standard electrode potentials',
                  'Electrochemical series and predicting reactions',
                  'Electrolytic cells and electrolysis',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Structure, synthesis and design',
            topics: [
              {
                name: 'Properties and structure of organic materials',
                subtopics: [
                  'Organic nomenclature and homologous series',
                  'Physical property trends across organic families',
                  'Organic reactions and reaction pathways',
                  'Structure-function relationships in organic materials',
                  'Analytical techniques: IR, mass spectrometry, NMR',
                ],
              },
              {
                name: 'Chemical synthesis and design',
                subtopics: [
                  'Designing chemical synthesis pathways',
                  'Green chemistry principles and atom economy',
                  'Macromolecules: polymers, proteins and carbohydrates',
                  'Molecular manufacturing considerations',
                ],
              },
            ],
          },
        ],
      },
      // -------------------------------------------------------- Physics ---
      {
        name: 'Physics',
        mappedSubjectId: 'physics',
        units: [
          {
            name: 'Unit 3: Gravity and electromagnetism',
            topics: [
              {
                name: 'Gravity and motion',
                subtopics: [
                  'Vectors and forces on inclined planes',
                  'Projectile motion without drag',
                  'Uniform circular motion and centripetal force',
                  'Gravity, orbital mechanics and Kepler\u2019s laws',
                ],
              },
              {
                name: 'Electromagnetism',
                subtopics: [
                  'Electrostatics: Coulomb\u2019s law, electric fields and potential',
                  'Magnetic fields and forces on charges and currents',
                  'Electromagnetic induction: Faraday\u2019s and Lenz\u2019s laws',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Revolutions in modern physics',
            topics: [
              {
                name: 'Special relativity',
                subtopics: [
                  'Einstein\u2019s postulates and simultaneity',
                  'Time dilation and length contraction',
                  'Mass-energy equivalence',
                ],
              },
              {
                name: 'Quantum theory',
                subtopics: [
                  'Blackbody radiation and Wien\u2019s law',
                  'The photoelectric effect and work function',
                  'Atomic line spectra and energy levels',
                  'Wave-particle duality and the de Broglie wavelength',
                ],
              },
              {
                name: 'The Standard Model',
                subtopics: [
                  'Fundamental particles: quarks, leptons and bosons',
                  'Fundamental forces and particle interactions',
                  'Conservation laws in particle interactions',
                ],
              },
            ],
          },
        ],
      },
      // ------------------------------------------------------ Psychology --
      {
        name: 'Psychology',
        mappedSubjectId: 'ku-psychology',
        units: [
          {
            name: 'Unit 3: Individual thinking',
            topics: [
              {
                name: 'Brain function',
                subtopics: [
                  'Central and peripheral nervous systems; spinal reflexes',
                  'Localisation and distribution of function across the cerebral cortex',
                  'Broca\u2019s area, Wernicke\u2019s area and language processing',
                  'Limbic system, prefrontal cortex and emotion',
                  'Neurotransmission: action potentials and synaptic transmission',
                  'Excitatory and inhibitory neurotransmitters (glutamate, GABA)',
                  'Neurotransmitter interference: Parkinson\u2019s and Alzheimer\u2019s diseases',
                ],
              },
              {
                name: 'Sensation and perception',
                subtopics: [
                  'Seeing and hearing: reception, transduction, transmission, processing',
                  'Perceptual set: past experience, context, motivation, emotion',
                  'Visual perception principles: Gestalt, depth cues, constancies',
                  'Cultural influences on perception',
                  'Visual illusions and the fallibility of perception',
                ],
              },
              {
                name: 'Memory',
                subtopics: [
                  'Multi-store model: sensory, short-term and long-term memory',
                  'Working memory model: central executive, phonological loop, sketchpad, buffer',
                  'Levels of processing and encoding in long-term memory',
                  'Implicit and explicit memory; hippocampus, amygdala, cerebellum roles',
                  'Recall, recognition and relearning; encoding and retrieval failure',
                  'Memory strategies: spacing, chunking, elaborative rehearsal, method of loci',
                ],
              },
              {
                name: 'Learning',
                subtopics: [
                  'Classical conditioning: UCS, UCR, NS, CS, CR; Little Albert',
                  'Stimulus generalisation and discrimination; extinction and spontaneous recovery',
                  'Operant conditioning: reinforcement and punishment; the Skinner box',
                  'Social learning theory: modelling and vicarious conditioning',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: The influence of others',
            topics: [
              {
                name: 'Social psychology',
                subtopics: [
                  'Socialisation: primary and secondary',
                  'Conformity: Asch\u2019s (1955) research',
                  'Obedience: Milgram\u2019s (1963) research',
                  'Status, roles and power: Haney, Banks and Zimbardo (1973)',
                ],
              },
              {
                name: 'Interpersonal processes',
                subtopics: [
                  'Prosocial behaviour and its determinants',
                  'Bystander intervention: Latan\u00e9 and Darley\u2019s (1969) decision model',
                  'Diffusion of responsibility and the bystander effect',
                ],
              },
              {
                name: 'Attitudes',
                subtopics: [
                  'The tri-component model: affective, behavioural and cognitive components',
                  'Explicit and implicit attitudes',
                  'Stereotype priming and behaviour (Bargh, Chen and Burrows, 1996)',
                ],
              },
              {
                name: 'Cross-cultural psychology',
                subtopics: [
                  'Four elements of cross-cultural psychology',
                  'Individualism and collectivism; cultural norms and values',
                  'Acculturation and cultural contact',
                  'Cultural diversity and social cohesion',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]
