import type { CuratedExam } from './types'

/**
 * China exams — curated official syllabi.
 *
 * Source: Ministry of Education of the PRC general senior-secondary
 * curriculum standards (2017 edition, 2020 revision) that the National
 * College Entrance Examination (Gaokao) assesses, and the national exam
 * structure under the 3+1+2 selection model used by most provinces since
 * the 2021-2024 exam cycles: three unified subjects (Chinese, Mathematics,
 * Foreign Language, 150 points each) plus one preferred subject chosen
 * from Physics or History (100 points) and two from Chemistry, Biology,
 * Politics and Geography (100 points, grade-converted). Total 750 points.
 * Topic lists follow the compulsory and elective course modules of the
 * national curriculum standards.
 */

export const CHINA_EXAMS: CuratedExam[] = [
  {
    id: 'gaokao',
    name: 'Gaokao',
    fullName: 'National College Entrance Examination (普通高等学校招生全国统一考试)',
    aliases: ['gaokao exam', 'chinese college entrance exam', 'national college entrance examination', '普通高考', '高考'],
    region: 'China',
    category: 'University admission',
    popularity: 50,
    syllabusVerified: '2026-10-23',
    website: 'https://www.neea.edu.cn',
    overview: {
      conductor: 'Ministry of Education of the People\'s Republic of China with provincial examination authorities',
      level: 'Senior-secondary students seeking undergraduate admission to Chinese universities',
      stages: ['One national sitting per year (7-9 June, some provinces to 10 June)', 'Most provinces use the 3+1+2 model: 3 unified subjects + 1 preferred (Physics or History) + 2 electives (grade-converted)', 'Some provinces retain the 3+3 model with three electives chosen from six'],
      papers: ['Chinese (150 min, 150 points)', 'Mathematics (120 min, 150 points)', 'Foreign Language — usually English, with listening (120 min, 150 points)', 'Preferred subject: Physics or History (75-90 min, 100 points)', 'Two electives: Chemistry, Biology, Politics, Geography (75 min each, 100 points each, grade-converted)'],
      duration: 'Two to four exam days per province; each subject sits separately',
      marking: 'Total 750 points: unified subjects marked directly; electives grade-converted within the province',
      negativeMarking: 'None',
      questionTypes: ['Multiple-choice (single and multiple-response)', 'Fill-in (language use, mathematics)', 'Constructed response (mathematics, sciences, history, politics, geography)', 'Essay (Chinese; English writing)'],
      notes:
        'The exam assesses the national senior-secondary curriculum standards (2017 edition, 2020 revision). Mathematics offers a non-calculus track in provinces using the old liberal-arts/science split, but the current curriculum is unified with elective modules. Foreign Language candidates may sit English, Russian, Japanese, French, German or Spanish — English is by far the most common. Provincial papers (Beijing, Shanghai, Tianjin) differ in format but share the national syllabus scope.',
    },
    sources: [
      { title: 'Ministry of Education of the PRC — general senior-secondary curriculum standards (2017 edition, 2020 revision)', url: 'http://www.moe.gov.cn', host: 'moe.gov.cn' },
      { title: 'National Education Examinations Authority — national examination portals', url: 'https://www.neea.edu.cn', host: 'neea.edu.cn' },
      { title: 'Ministry of Education — Gaokao work notices and evaluation system documentation', url: 'http://www.moe.gov.cn/jyb_xxgk/moe_1777/', host: 'moe.gov.cn' },
    ],
    subjects: [
      {
        name: 'Chinese (语文)',
        weightage: 20,
        units: [
          {
            name: 'Modern Text Reading',
            topics: [
              { name: 'Argumentative and expository texts (论述类文本)', subtopics: ['Comprehension, argument structure, inference and evaluation of claims'] },
              { name: 'Literary texts (文学类文本)', subtopics: ['Fiction and prose — imagery, character, narrative technique, theme and style'] },
              { name: 'Practical texts (实用类文本)', subtopics: ['News, reports and popular-science passages — information extraction and comparison across materials'] },
            ],
          },
          {
            name: 'Classical Chinese Reading',
            topics: [
              { name: 'Classical prose (文言文阅读)', subtopics: ['Word meanings, function words, sentence translation, paragraph breaking and text comprehension'] },
              { name: 'Classical poetry (古代诗歌鉴赏)', subtopics: ['Imagery, mood and emotion, technique appreciation and comparison of works'] },
              { name: 'Set-text recitation (名篇名句默写)', subtopics: ['Prescribed passages from the curriculum — accurate written recall'] },
            ],
          },
          {
            name: 'Language Use',
            topics: [
              { name: 'Words, idioms and sentences', subtopics: ['Correct word and idiom choice, sentence grammar (病句 diagnosis), coherent expression and register'] },
              { name: 'Applied language tasks', subtopics: ['Compression and expansion, sentence restructuring, politeness and appropriateness (得体)'] },
            ],
          },
          {
            name: 'Writing',
            topics: [
              { name: 'Essay (写作)', subtopics: ['Argument-driven composition of at least 800 characters — structure, evidence, language quality'] },
            ],
          },
        ],
      },
      {
        name: 'Mathematics',
        mappedSubjectId: 'mathematics',
        weightage: 20,
        units: [
          {
            name: 'Sets, Logic and Functions',
            topics: [
              { name: 'Sets and common logical terms', subtopics: ['Set operations, sufficient and necessary conditions, quantifiers'] },
              { name: 'Function concepts and properties', subtopics: ['Domain, range, monotonicity, parity, periodicity; graph transformations'] },
              { name: 'Power, exponential and logarithmic functions', subtopics: ['Graphs and properties, zero points, function models and applications'] },
            ],
          },
          {
            name: 'Trigonometry and Vectors',
            topics: [
              { name: 'Trigonometric functions and identities', subtopics: ['Graphs and properties, addition and double-angle formulae, function y = A sin(ωx + φ)'] },
              { name: 'Solving triangles', subtopics: ['Law of sines and cosines, triangle area and applied measurement problems'] },
              { name: 'Plane vectors', subtopics: ['Vector operations, dot product, coordinate representation and applications'] },
            ],
          },
          {
            name: 'Sequences',
            topics: [
              { name: 'Arithmetic and geometric sequences', subtopics: ['General terms, sums, recursive relations, common methods for sums and proof'] },
            ],
          },
          {
            name: 'Solid Geometry',
            topics: [
              { name: 'Space geometry and vectors', subtopics: ['Lines and planes — parallelism and perpendicularity; volumes and surface areas; space-vector method'] },
            ],
          },
          {
            name: 'Analytic Geometry',
            topics: [
              { name: 'Lines and circles', subtopics: ['Line equations, positional relations, circle equations, tangent and chord problems'] },
              { name: 'Conic sections', subtopics: ['Ellipse, hyperbola and parabola — equations, properties, focal chords and locus problems'] },
            ],
          },
          {
            name: 'Probability and Statistics',
            topics: [
              { name: 'Statistics', subtopics: ['Sampling, frequency distributions, percentile, mean and variance, regression and 2×2 independence tests'] },
              { name: 'Counting and probability', subtopics: ['Permutations and combinations, classical and geometric probability, conditional probability, binomial and normal distributions'] },
            ],
          },
          {
            name: 'Calculus and Other Topics',
            topics: [
              { name: 'Derivatives and their applications', subtopics: ['Derivative meaning, rules, monotonicity and extrema, tangents, optimisation'] },
              { name: 'Complex numbers and reasoning', subtopics: ['Complex arithmetic and geometry, deductive and analogical reasoning'] },
            ],
          },
        ],
      },
      {
        name: 'Foreign Language (English)',
        mappedSubjectId: 'english',
        weightage: 20,
        units: [
          {
            name: 'Listening and Reading',
            topics: [
              { name: 'Listening', subtopics: ['Short and long conversations and monologues — detail, gist, inference (30 marks in national papers)'] },
              { name: 'Reading comprehension', subtopics: ['Four passages — detail, inference, main idea, vocabulary in context, best-title and insertion questions'] },
              { name: 'Gap filling (七选五)', subtopics: ['Restoring five removed sentences in a passage — cohesion and discourse logic'] },
            ],
          },
          {
            name: 'Language Knowledge',
            topics: [
              { name: 'Cloze (完形填空)', subtopics: ['Fifteen to twenty blanks over a narrative or reflective text — vocabulary, collocation, context'] },
              { name: 'Grammar fill (语法填空)', subtopics: ['Supplying correct word forms and function words in a 200-word passage — tense, voice, clauses, non-finite verbs'] },
            ],
          },
          {
            name: 'Writing',
            topics: [
              { name: 'Applied writing (应用文)', subtopics: ['Letters, notices and invitations of about 80 words in register'] },
              { name: 'Continuation writing (读后续写)', subtopics: ['Continuing a story of about 150 words with coherent plot and language (provinces using the new format)'] },
            ],
          },
        ],
      },
      {
        name: 'Physics (preferred subject)',
        mappedSubjectId: 'physics',
        weightage: 13,
        units: [
          {
            name: 'Mechanics',
            topics: [
              { name: 'Kinematics and Newton\'s laws', subtopics: ['Straight-line motion, graphs, interaction forces, laws of motion and their applications'] },
              { name: 'Circular motion and gravitation', subtopics: ['Uniform circular motion, universal gravitation, satellites and weightlessness'] },
              { name: 'Work, energy and momentum', subtopics: ['Work and power, kinetic and potential energy, conservation laws, collisions and momentum'] },
              { name: 'Vibrations and waves', subtopics: ['Simple harmonic motion, wave propagation, superposition, Doppler effect'] },
            ],
          },
          {
            name: 'Thermal Physics',
            topics: [
              { name: 'Kinetic theory and gas laws', subtopics: ['Molecular model, internal energy, ideal-gas law, first law of thermodynamics'] },
            ],
          },
          {
            name: 'Electromagnetism',
            topics: [
              { name: 'Electrostatics', subtopics: ['Coulomb\'s law, electric field and potential, capacitors'] },
              { name: 'D.C. circuits', subtopics: ['Ohm\'s law, series-parallel networks, electromotive force, experimental circuits'] },
              { name: 'Magnetic fields and electromagnetic induction', subtopics: ['Lorentz force, Ampere force, Faraday\'s law, Lenz\'s law, AC generation and transformers'] },
            ],
          },
          {
            name: 'Optics and Modern Physics',
            topics: [
              { name: 'Geometric and physical optics', subtopics: ['Refraction, total internal reflection, interference, diffraction, polarisation'] },
              { name: 'Modern physics', subtopics: ['Photoelectric effect, atomic models and spectra, radioactivity, nuclear reactions, mass-energy'] },
            ],
          },
        ],
      },
      {
        name: 'History (preferred subject)',
        weightage: 13,
        units: [
          {
            name: 'Ancient and Medieval World',
            topics: [
              { name: 'Ancient China', subtopics: ['Early states, Qin-Han unification, Sui-Tang institutions, Song-Yuan economy and culture, Ming-Qing society'] },
              { name: 'Ancient Greece, Rome and the origins of humanism', subtopics: ['Polis democracy, Roman law, Renaissance, Reformation and Enlightenment'] },
            ],
          },
          {
            name: 'Early Modern and Modern World',
            topics: [
              { name: 'Global connections and revolution', subtopics: ['Age of exploration, bourgeois revolutions, Industrial Revolution, capitalism\'s expansion'] },
              { name: 'The twentieth century', subtopics: ['World wars, Russian Revolution, interwar crises, Cold War order and multipolarisation, economic globalisation'] },
            ],
          },
          {
            name: 'Modern and Contemporary China',
            topics: [
              { name: 'Aggression and national salvation (1840-1949)', subtopics: ['Opium Wars to the War of Resistance, reform movements and the democratic revolution'] },
              { name: 'The People\'s Republic since 1949', subtopics: ['Socialist transformation, reform and opening-up, foreign relations, science, education and social life'] },
            ],
          },
        ],
      },
      {
        name: 'Chemistry (elective subject)',
        mappedSubjectId: 'chemistry',
        weightage: 9,
        units: [
          {
            name: 'Foundations and Physical Chemistry',
            topics: [
              { name: 'Stoichiometry and matter classification', subtopics: ['Amount of substance, gas volumes, solution concentration, colloids'] },
              { name: 'Atomic structure and the periodic law', subtopics: ['Electron configuration, periodicity, bonding types, molecular and crystal structure'] },
              { name: 'Reaction rates and equilibrium', subtopics: ['Rate factors, reversible reactions, equilibrium constants, Le Chatelier shifts, ionic equilibrium, pH, hydrolysis, solubility product'] },
              { name: 'Electrochemistry and thermochemistry', subtopics: ['Galvanic and electrolytic cells, enthalpy, Hess\'s law, energy from reactions'] },
            ],
          },
          {
            name: 'Descriptive and Organic Chemistry',
            topics: [
              { name: 'Elements and their compounds', subtopics: ['Metal and non-metal families, industrial processes, environmental chemistry'] },
              { name: 'Organic chemistry basics', subtopics: ['Hydrocarbons and functional groups, isomerism, named reactions, polymers, synthesis routes'] },
              { name: 'Chemical experiments', subtopics: ['Apparatus, separation and purification, qualitative tests, quantitative titrations, safety'] },
            ],
          },
        ],
      },
      {
        name: 'Biology (elective subject)',
        weightage: 9,
        units: [
          {
            name: 'Cell Biology',
            topics: [
              { name: 'Molecular composition and cell structure', subtopics: ['Water, inorganic salts, carbohydrates, lipids, proteins, nucleic acids; organelles and membranes'] },
              { name: 'Cell metabolism', subtopics: ['Enzymes and ATP, respiration, photosynthesis, transport across membranes'] },
              { name: 'Cell division and differentiation', subtopics: ['Mitosis and meiosis, senescence, apoptosis, cancer, stem cells'] },
            ],
          },
          {
            name: 'Genetics and Evolution',
            topics: [
              { name: 'Heredity', subtopics: ['Mendel\'s laws, sex linkage, DNA as genetic material, replication, transcription and translation, gene regulation and mutation'] },
              { name: 'Variation and evolution', subtopics: ['Chromosomal variation, hybridisation and breeding, modern evolutionary theory, speciation, biodiversity'] },
            ],
          },
          {
            name: 'Physiology and Ecology',
            topics: [
              { name: 'Homeostasis and regulation', subtopics: ['Internal environment, nervous and hormonal regulation, immunity, plant hormones'] },
              { name: 'Ecology', subtopics: ['Populations and communities, ecosystems, energy flow and material cycles, conservation and sustainability'] },
            ],
          },
        ],
      },
      {
        name: 'Politics (elective subject)',
        weightage: 9,
        units: [
          {
            name: 'Economics and Society',
            topics: [
              { name: 'Economic life', subtopics: ['Basic economic system, market economy and macro regulation, new development philosophy, high-quality development, fiscal and tax basics'] },
              { name: 'Social and legal life', subtopics: ['Civil code fundamentals, employment and entrepreneurship, family and marriage, dispute resolution and litigation'] },
            ],
          },
          {
            name: 'Politics, Culture and Philosophy',
            topics: [
              { name: 'Political life', subtopics: ['People\'s democracy, people\'s congresses, government duties, political parties and consultation, ethnic and religious policy, international community and diplomacy'] },
              { name: 'Cultural life', subtopics: ['Culture and society, transmission and exchange of Chinese culture, cultural confidence and innovation'] },
              { name: 'Philosophy', subtopics: ['Materialism and consciousness, epistemology, dialectics — unity of opposites, quantitative-qualitative change, negation of the negation, historical materialism'] },
            ],
          },
        ],
      },
      {
        name: 'Geography (elective subject)',
        weightage: 9,
        units: [
          {
            name: 'Physical Geography',
            topics: [
              { name: 'Earth in space and maps', subtopics: ['Earth movement and its effects, map reading, projections and scale'] },
              { name: 'Atmosphere, water and landforms', subtopics: ['Atmospheric circulation and weather, climate types, water cycle and ocean currents, river and coastal landforms, geological processes'] },
              { name: 'Natural environment synthesis', subtopics: ['Vertical and horizontal zonation, environment integrity and difference, natural hazards'] },
            ],
          },
          {
            name: 'Human and Regional Geography',
            topics: [
              { name: 'Human geography', subtopics: ['Population and migration, urbanisation and settlement, agriculture, industry and services, transport and globalisation'] },
              { name: 'Regional development and sustainability', subtopics: ['Regional analysis, resource exploitation and land management, environmental governance, national resource security, geographic information technology'] },
            ],
          },
        ],
      },
    ],
  },
]
