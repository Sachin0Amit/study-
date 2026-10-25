import type { CuratedExam } from './types'

/**
 * Canada — Alberta Diploma Examinations, curated official syllabi.
 *
 * Sources: Alberta Education diploma-exam pages and the Alberta Programs of
 * Study on new LearnAlberta (curriculum.learnalberta.ca), read this pass:
 * the Diploma Exams Overview page (course list, 30/70 weighting, digital
 * platform, central marking), the Social Studies 30-1 Program of Studies
 * (SST3771 — the four Related Issues and their outcomes, read in full), the
 * Biology 30 Program of Studies (SCN3230 — the four units), the Chemistry 30
 * Program of Studies (SCN3796 — the four units), the English Language Arts
 * (10-12) Program of Studies pages (the five general outcomes), and the
 * Mathematics 30-1 outcome structure (AB.SO.30-1 strands) cross-verified
 * against the Mathematics 30-1 Information Bulletin. Physics 30 unit
 * structure cross-verified against the Physics 20-30 Program of Studies
 * listing (Momentum and Impulse / Forces and Fields / Electromagnetic
 * Radiation / Atomic Physics). The Alberta Diploma Exam history and
 * part-structure verified via the Alberta Diploma Exam summary pages.
 *
 * Scope: the six highest-enrolment 30-1 diploma-exam courses (English
 * Language Arts 30-1, Mathematics 30-1, Biology 30, Chemistry 30, Physics 30,
 * Social Studies 30-1). The 30-2 equivalents, Science 30, French-language
 * courses and Français/French Language Arts are excluded as outside the
 * library's teaching scope (matching the Australia file's exclusion note).
 */

export const CANADA_EXAMS: CuratedExam[] = [
  {
    id: 'alberta-diploma',
    name: 'Alberta Diploma Exams',
    fullName: 'Alberta Diploma Examinations',
    aliases: [
      'alberta diploma',
      'diploma exam alberta',
      'alberta 30-1',
      'alberta diploma exam',
      'bio 30',
      'chem 30',
      'physics 30',
      'math 30-1',
      'ela 30-1',
      'social 30-1',
      'canada diploma',
    ],
    region: 'Canada',
    category: 'School-leaving subject exam',
    popularity: 52,
    syllabusVerified: '2026-10-25',
    website: 'https://www.alberta.ca/diploma-exams-overview',
    overview: {
      conductor: 'Alberta Education (Provincial Assessment)',
      level: 'Grade 12 (30-level courses) → blended course mark for the Alberta High School Diploma and university admission',
      stages: ['Course work (70% of final mark)', 'Diploma examination (30% of final mark since September 2023)'],
      papers: [
        'Part A — written response: English Language Arts 30-1 and Social Studies 30-1 (and a written-response component in Mathematics 30-1)',
        'Part B — machine-scorable multiple choice for all courses',
      ],
      duration: 'Five sittings a year (November, January, April, June, August); all students may take up to double the listed writing time',
      marking: 'Written assignments marked centrally by qualified teachers with school identity removed; results on myPass about three weeks after writing; blended finals of 48-49% are raised to 50%',
      questionTypes: ['Multiple choice (Part B)', 'Written response: critical/analytical essays and source analysis (Part A)', 'Numerical response (sciences and mathematics)'],
      notes:
        'Content follows the six highest-enrolment 30-1 diploma courses by their official Program of Studies unit names and outcomes. Diploma exams moved to Alberta Education\'s digital assessment platform; all diploma exams except the English ELA exams are also offered in French. The sciences and mathematics exams are multiple-choice (plus numerical response), so the curriculum topics below are assessed as concept questions — the humanities courses carry the Part A written essays.',
    },
    sources: [
      { title: 'Alberta Education — Diploma exams overview', url: 'https://www.alberta.ca/diploma-exams-overview', host: 'alberta.ca' },
      { title: 'LearnAlberta — Social Studies 30-1 Program of Studies (SST3771)', url: 'https://curriculum.learnalberta.ca/curriculum/en/pos/SSSGEN_HS/SST3771', host: 'curriculum.learnalberta.ca' },
      { title: 'LearnAlberta — Biology 30 Program of Studies (SCN3230)', url: 'https://curriculum.learnalberta.ca/curriculum/en/pos/SCIBIO_20_30/SCN3230', host: 'curriculum.learnalberta.ca' },
      { title: 'LearnAlberta — Chemistry 30 Program of Studies (SCN3796)', url: 'https://curriculum.learnalberta.ca/curriculum/en/pos/scicem_20_30/scn3796', host: 'curriculum.learnalberta.ca' },
      { title: 'LearnAlberta — English Language Arts (10-12) Program of Studies', url: 'https://curriculum.learnalberta.ca/curriculum/en/pos/LANENG_HS', host: 'curriculum.learnalberta.ca' },
      { title: 'LearnAlberta — Mathematics 30-1 (MAT3791) Program of Studies', url: 'https://curriculum.learnalberta.ca/curriculum/en/pos/MAT_HS/MAT3791', host: 'curriculum.learnalberta.ca' },
      { title: 'LearnAlberta — Physics (20, 30) Program of Studies', url: 'https://curriculum.learnalberta.ca/curriculum/en/pos/SCIPHY_20_30', host: 'curriculum.learnalberta.ca' },
    ],
    subjects: [
      {
        name: 'Biology 30',
        mappedSubjectId: 'ku-life-sciences-biology',
        units: [
          {
            name: 'Unit A: Nervous and Endocrine Systems',
            topics: [
              {
                name: 'The nervous system: neurons, impulses and the brain',
                subtopics: ['neuron structure and myelin', 'action potential and the sodium-potassium pump', 'synapses and neurotransmitters', 'central and peripheral nervous systems', 'brain regions and the spinal cord', 'reflex arcs and nerve impulse propagation'],
              },
              {
                name: 'The endocrine system and hormonal regulation',
                subtopics: ['glands and their hormones', 'negative and positive feedback loops', 'homeostasis of blood sugar and body temperature', 'the pituitary as master gland', 'hormone-receptor specificity'],
              },
            ],
          },
          {
            name: 'Unit B: Reproduction and Development',
            topics: [
              {
                name: 'Human reproductive systems and reproductive hormones',
                subtopics: ['male and female reproductive anatomy', 'spermatogenesis and oogenesis', 'the menstrual cycle and its hormonal control', 'testosterone, estrogen and progesterone'],
              },
              {
                name: 'Development: fertilization, embryogenesis and reproductive technologies',
                subtopics: ['fertilization and cleavage', 'implantation and the placenta', 'embryonic and fetal development', 'parturition and lactation', 'fertility treatments and contraception technologies'],
              },
            ],
          },
          {
            name: 'Unit C: Cell Division, Genetics and Molecular Biology',
            topics: [
              {
                name: 'Mitosis, meiosis and the cell cycle',
                subtopics: ['phases of mitosis', 'crossing over and independent assortment in meiosis', 'spermatogenesis versus oogenesis in gamete formation', 'cell-cycle control and checkpoints'],
              },
              {
                name: 'Classical genetics: Mendel, probability and inheritance patterns',
                subtopics: ['monohybrid and dihybrid crosses', 'dominance, incomplete dominance and codominance', 'multiple alleles and sex linkage', 'pedigrees and probability'],
              },
              {
                name: 'Molecular genetics: DNA replication, protein synthesis and mutations',
                subtopics: ['DNA structure and replication', 'transcription and RNA processing', 'translation and the genetic code', 'point mutations and their consequences', 'biotechnology: restriction enzymes and gel electrophoresis'],
              },
            ],
          },
          {
            name: 'Unit D: Population and Community Dynamics',
            topics: [
              {
                name: 'Hardy-Weinberg equilibrium and allele frequencies',
                subtopics: ['the Hardy-Weinberg equation', 'conditions for genetic equilibrium', 'genetic drift and gene flow', 'calculating allele and genotype frequencies'],
              },
              {
                name: 'Population growth, communities and speciation',
                subtopics: ['growth models and carrying capacity', 'population interactions and community structure', 'reproductive isolating mechanisms', 'gradualism and punctuated equilibrium'],
              },
            ],
          },
        ],
      },
      {
        name: 'Chemistry 30',
        mappedSubjectId: 'chemistry',
        units: [
          {
            name: 'Unit A: Thermochemical Changes',
            topics: [
              {
                name: 'Enthalpy changes and calorimetry',
                subtopics: ['exothermic and endothermic reactions', 'measuring energy change in calorimeters', 'enthalpy of reaction, solution and combustion', 'heating and cooling curves'],
              },
              {
                name: 'Hess\'s law, bond enthalpies and energy sources',
                subtopics: ['Hess\'s law of heat summation', 'bond dissociation energy estimates', 'standard molar enthalpies of formation', 'fossil fuels, alternative energy and fuel efficiency'],
              },
            ],
          },
          {
            name: 'Unit B: Electrochemical Changes',
            topics: [
              {
                name: 'Oxidation-reduction reactions',
                subtopics: ['oxidation numbers and half-reactions', 'balancing redox equations', 'strong, weak and nonelectrolytes in solution', 'the activity series and spontaneity'],
              },
              {
                name: 'Electrochemical cells: galvanic, electrolytic and corrosion',
                subtopics: ['standard reduction potentials and cell EMF', 'galvanic cells and salt bridges', 'electrolytic cells and Faraday\'s law', 'corrosion and its prevention', 'batteries and fuel cells'],
              },
            ],
          },
          {
            name: 'Unit C: Chemical Changes of Organic Compounds',
            topics: [
              {
                name: 'Organic families and nomenclature',
                subtopics: ['alkanes, alkenes and alkynes', 'alcohols, aldehydes, ketones, carboxylic acids and esters', 'aromatic compounds', 'structural, geometric and stereoisomers'],
              },
              {
                name: 'Reactions of organic compounds and polymers',
                subtopics: ['addition and substitution reactions', 'oxidation and reduction of organics', 'esterification and condensation', 'addition and condensation polymerization'],
              },
            ],
          },
          {
            name: 'Unit D: Chemical Equilibrium Focusing on Acid-Base Systems',
            topics: [
              {
                name: 'Dynamic equilibrium and Le Châtelier\'s principle',
                subtopics: ['reversible reactions and Keq', 'equilibrium calculations and ICE tables', 'Le Châtelier\'s principle: concentration, pressure and temperature shifts', 'solubility equilibria and Ksp'],
              },
              {
                name: 'Acid-base systems: strength, indicators, titration and buffers',
                subtopics: ['Brønsted-Lowry acids and bases', 'Ka, Kb, Kw and pH calculations', 'titration curves and indicators', 'buffer systems', 'acid deposition and environmental chemistry'],
              },
            ],
          },
        ],
      },
      {
        name: 'Physics 30',
        mappedSubjectId: 'physics',
        units: [
          {
            name: 'Unit A: Momentum and Impulse',
            topics: [
              {
                name: 'Momentum, impulse and conservation of momentum',
                subtopics: ['momentum as a vector', 'impulse-momentum theorem', 'elastic and inelastic collisions', 'two-dimensional collisions', 'centre of mass'],
              },
            ],
          },
          {
            name: 'Unit B: Forces and Fields',
            topics: [
              {
                name: 'Electric and gravitational fields',
                subtopics: ['Coulomb\'s law and field strength', 'electric potential and potential energy', 'Newton\'s law of universal gravitation', 'field lines and equipotentials', 'uniform fields between plates'],
              },
              {
                name: 'Magnetic fields and electromagnetic induction',
                subtopics: ['magnetic forces on moving charges', 'magnetic field of a current', 'Faraday\'s law and Lenz\'s law', 'generators and transformers'],
              },
            ],
          },
          {
            name: 'Unit C: Electromagnetic Radiation',
            topics: [
              {
                name: 'Electromagnetic waves and the double-slit experiment',
                subtopics: ['the electromagnetic spectrum', 'Young\'s double-slit interference', 'diffraction gratings', 'path difference and interference maxima'],
              },
              {
                name: 'Photons and the photoelectric effect',
                subtopics: ['the photoelectric effect and its threshold frequency', 'photon energy E = hf', 'Compton scattering', 'wave-particle duality and de Broglie wavelength'],
              },
            ],
          },
          {
            name: 'Unit D: Atomic Physics',
            topics: [
              {
                name: 'Atomic models, spectra and the Bohr atom',
                subtopics: ['Rutherford scattering and the nuclear atom', 'atomic emission and absorption spectra', 'Bohr model energy levels', 'energy-level diagrams and photon emission'],
              },
              {
                name: 'Radioactivity, nuclear reactions and fission-fusion energy',
                subtopics: ['alpha, beta and gamma decay', 'half-life and decay series', 'nuclear binding energy and mass-energy equivalence', 'fission and fusion processes'],
              },
            ],
          },
        ],
      },
      {
        name: 'Mathematics 30-1',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Transformations and Functions',
            topics: [
              {
                name: 'Transformations of functions',
                subtopics: ['translations, reflections and stretches', 'horizontal and vertical asymptotes', 'inverse of a function', 'composition of functions'],
              },
              {
                name: 'Radical and polynomial functions',
                subtopics: ['domains and ranges of radical functions', 'solving radical equations', 'polynomial functions and their graphs', 'modelling with polynomial functions'],
              },
              {
                name: 'Exponential and logarithmic functions',
                subtopics: ['exponential growth and decay', 'logarithms as inverses of exponentials', 'laws of logarithms', 'solving exponential and logarithmic equations', 'log-scale data and applications'],
              },
            ],
          },
          {
            name: 'Trigonometry',
            topics: [
              {
                name: 'Angles, the unit circle and trigonometric graphs',
                subtopics: ['angles in standard position, degrees and radians', 'coterminal and reference angles', 'the unit circle and exact values', 'amplitude, period and phase shift of sinusoidal functions', 'modelling with trigonometric functions'],
              },
              {
                name: 'Trigonometric equations and identities',
                subtopics: ['solving trigonometric equations graphically and algebraically', 'the Pythagorean identities', 'sum and difference identities', 'general solutions'],
              },
            ],
          },
          {
            name: 'Permutations, Combinations and the Binomial Theorem',
            topics: [
              {
                name: 'Permutations and combinations',
                subtopics: ['the fundamental counting principle', 'factorial notation', 'permutations with and without repetition', 'combinations and path-counting problems'],
              },
              {
                name: 'The binomial theorem and Pascal\'s triangle',
                subtopics: ['expanding binomials with Pascal\'s triangle', 'the binomial theorem and term generalization', 'applications to probability'],
              },
            ],
          },
        ],
      },
      {
        name: 'English Language Arts 30-1',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'General Outcome 1: Explore Thoughts, Ideas, Feelings and Experiences',
            topics: [
              {
                name: 'Discovering and exploring ideas through language',
                subtopics: ['personal responses to texts', 'exploring human experiences and moral dilemmas in literature', 'developing themes for own writing'],
              },
            ],
          },
          {
            name: 'General Outcome 2: Comprehend and Respond Personally, Critically and Creatively',
            topics: [
              {
                name: 'Comprehending and responding to literary texts',
                subtopics: ['Shakespearean drama and the modern novel', 'poetry and the short story', 'theme, character and craft analysis', 'critical/analytical response to literary texts'],
              },
              {
                name: 'Responding to visual and multimedia texts',
                subtopics: ['visual communication and film study', 'media literacy and authorial intent'],
              },
            ],
          },
          {
            name: 'General Outcome 3: Manage Ideas and Information',
            topics: [
              {
                name: 'Inquiry, research and source evaluation',
                subtopics: ['planning and focusing research', 'evaluating credibility of sources', 'synthesizing information and documenting it'],
              },
            ],
          },
          {
            name: 'General Outcome 4: Create Oral, Print, Visual and Multimedia Texts',
            topics: [
              {
                name: 'The personal response and the critical/analytical essay',
                subtopics: ['Part A exam formats', 'thesis, evidence and integrated quotation', 'clarity and artistry of communication', 'revision and editing strategies'],
              },
            ],
          },
          {
            name: 'General Outcome 5: Respect, Support and Collaborate with Others',
            topics: [
              {
                name: 'Collaboration, peer feedback and group inquiry',
                subtopics: ['structured discussion and seminar', 'peer review of drafts', 'building on others\' ideas'],
              },
            ],
          },
        ],
      },
      {
        name: 'Social Studies 30-1',
        units: [
          {
            name: 'Related Issue 1: To What Extent Should Ideology Be the Foundation of Identity?',
            topics: [
              {
                name: 'Characteristics and themes of ideology',
                subtopics: ['what an ideology is: beliefs, values and collectives', 'factors shaping individual and collective beliefs', 'identity shaped by and shaping ideology'],
              },
              {
                name: 'Individualism and collectivism as foundations of ideology',
                subtopics: ['principles of individualism: private property, competition, rule of law, self-interest', 'principles of collectivism: common good, collective responsibility, cooperation', 'the dynamic between individualism and the common good in contemporary societies'],
              },
            ],
          },
          {
            name: 'Related Issue 2: To What Extent Is Resistance to Liberalism Justified?',
            topics: [
              {
                name: 'Classical liberalism and its nineteenth-century impacts',
                subtopics: ['origins of classical liberal thought', 'Aboriginal contributions to the development of liberalism', 'laissez-faire capitalism, industrialization and its discontents'],
              },
              {
                name: 'Modern liberalism and ideologies that rejected it',
                subtopics: ['the evolution of modern liberalism as a response to classical liberalism', 'ideological systems that rejected liberalism: communism and fascism', 'the Cold War as ideological conflict', 'alternative thought challenging modern liberalism today'],
              },
            ],
          },
          {
            name: 'Related Issue 3: To What Extent Are the Principles of Liberalism Viable?',
            topics: [
              {
                name: 'Political and economic systems through a liberal lens',
                subtopics: ['the spectrum of political and economic systems', 'liberal democracies reflecting illiberal thought and practice', 'why government practice may not reflect liberal principles', 'economic equality and the will of the people'],
              },
            ],
          },
          {
            name: 'Related Issue 4: To What Extent Should My Actions as a Citizen Be Shaped by an Ideology?',
            topics: [
              {
                name: 'Citizenship: rights, roles and responsibilities',
                subtopics: ['individual and collective rights in liberal democracies', 'rights, roles and responsibilities in times of conflict', 'active and responsible citizenship', 'ideology shaping responses to contemporary issues', 'individual and collective leadership on local, national and global issues'],
              },
            ],
          },
        ],
      },
    ],
  },
]
