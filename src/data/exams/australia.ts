import type { CuratedExam } from './types'

/**
 * Australia — NSW HSC, curated official syllabi.
 *
 * Source: NSW Education Standards Authority (NESA) syllabus pages
 * (nsw.gov.au/education-and-training/nesa/curriculum/...): Physics,
 * Chemistry and Biology Stage 6 Syllabuses (2017) and the Mathematics
 * Advanced and Mathematics Standard Stage 6 Syllabuses (2017), each read
 * this pass for their Year 11 + Year 12 topic and focus-area structure;
 * the English Advanced module structure verified via NESA's HSC Standards
 * pages (Paper 2 modules) and the Stage 6 English prescriptions structure.
 *
 * Scope: the six highest-enrolment ATAR courses (English Advanced,
 * Mathematics Advanced, Mathematics Standard 2, Biology, Chemistry,
 * Physics). The 2017 syllabuses govern HSC examinations through 2026; the
 * rewritten 2024 syllabuses (new Mathematics areas, add Sequences and
 * Series) first-examine in 2027. Extension maths, Investigating Science,
 * humanities and language courses are excluded as outside the library's
 * teaching scope (matching the Singapore file's exclusion note).
 */

export const AUSTRALIA_EXAMS: CuratedExam[] = [
  {
    id: 'nsw-hsc',
    name: 'NSW HSC',
    fullName: 'Higher School Certificate (New South Wales)',
    aliases: ['hsc', 'nsw hsc', 'hsc nsw', 'australia hsc', 'atar nsw', 'higher school certificate'],
    region: 'Australia',
    category: 'School-leaving subject exam',
    popularity: 58,
    syllabusVerified: '2026-10-25',
    website: 'https://www.nsw.gov.au/education-and-training/nesa',
    overview: {
      conductor: 'NSW Education Standards Authority (NESA)',
      level: 'Years 11-12 (Stage 6) → ATAR for university admission',
      stages: ['Year 11 (Preliminary) course', 'Year 12 (HSC) course → external written examinations'],
      papers: ['Per-subject written papers (English two papers; sciences and mathematics one paper each)'],
      duration: 'Per-subject written examinations in October-November',
      marking: 'HSC marks reported against performance bands (Band 1-6); ATAR computed by UAC from the scaled aggregate',
      questionTypes: ['Multiple choice', 'Short response', 'Extended response / essays', 'Show-that working and solutions (mathematics)'],
      notes:
        'Content follows the six highest-enrolment ATAR courses by their official topic and focus-area names from the 2017 NESA syllabuses (which govern HSC examinations through 2026; the 2024 syllabuses first-examine 2027). Year 11 focus areas are included where the HSC examination assumes them as assumed knowledge.',
    },
    sources: [
      { title: 'NESA — Physics Stage 6 Syllabus (2017)', url: 'https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/physics-stage-6-2017', host: 'nsw.gov.au' },
      { title: 'NESA — Chemistry Stage 6 Syllabus (2017)', url: 'https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/chemistry-stage-6-2017', host: 'nsw.gov.au' },
      { title: 'NESA — Biology Stage 6 Syllabus (2017)', url: 'https://www.nsw.gov.au/education-and-training/nesa/curriculum/science/biology-stage-6-2017', host: 'nsw.gov.au' },
      { title: 'NESA — Mathematics Advanced Stage 6 Syllabus (2017)', url: 'https://www.nsw.gov.au/education-and-training/nesa/curriculum/mathematics/mathematics-advanced-stage-6-2017', host: 'nsw.gov.au' },
      { title: 'NESA — Mathematics Standard Stage 6 Syllabus (2017)', url: 'https://www.nsw.gov.au/education-and-training/nesa/curriculum/mathematics/mathematics-standard-stage-6-2017', host: 'nsw.gov.au' },
      { title: 'NESA — HSC Standards: English Advanced Paper 2 modules', url: 'https://www.nsw.gov.au/education-and-training/nesa/curriculum/hsc-standards/english-advanced/paper-2-section-iii-module-c-craft-of-writing', host: 'nsw.gov.au' },
    ],
    subjects: [
      {
        name: 'English Advanced',
        mappedSubjectId: 'english',
        weightage: 17,
        units: [
          {
            name: 'Texts and Human Experiences (Common Module)',
            topics: [
              { name: 'Representing human experiences in texts', subtopics: ['Individual and collective human experiences in prescribed and related texts', 'Emotions, attitudes and ideas conveyed in texts', 'How language forms and features shape meaning and invite responses'] },
              { name: 'Analysing and responding to texts', subtopics: ['Short-answer analysis of unseen texts', 'Extended response on the prescribed text', 'Selecting textual evidence and analysing its effect'] },
            ],
          },
          {
            name: 'Module A: Textual Conversations',
            topics: [
              { name: 'Paired-text comparative study', subtopics: ['Intertextual connections between a prescribed pair of texts', 'Resonances and dissonances between contextual values', 'How meaning is reshaped when texts are read together'] },
            ],
          },
          {
            name: 'Module B: Critical Study of Literature',
            topics: [
              { name: 'Close critical study of a single text', subtopics: ['Construction, content and language of the prescribed text', 'Ideas and characteristics valued in different contexts', 'Informed personal evaluation and critical response'] },
            ],
          },
          {
            name: 'Module C: The Craft of Writing',
            topics: [
              { name: 'Writing as a deliberate craft', subtopics: ['Imaginative, discursive, persuasive and informative modes', 'Adapting form, register and stylistic features to purpose and audience', 'Reflective statement justifying compositional choices'] },
            ],
          },
        ],
      },
      {
        name: 'Mathematics Advanced',
        mappedSubjectId: 'mathematics',
        weightage: 17,
        units: [
          {
            name: 'Functions',
            topics: [
              { name: 'Working with Functions', subtopics: ['Function notation, mappings, domain and range', 'Linear, quadratic and cubic function graphs and their transformations'] },
              { name: 'Graphing Techniques', subtopics: ['Transformations and translations of graphs', 'Curve sketching including reciprocal and further functions'] },
            ],
          },
          {
            name: 'Trigonometric Functions',
            topics: [
              { name: 'Trigonometry and Measure of Angles', subtopics: ['Radian measure, arc length and sector area', 'Trigonometric ratios, the sine and cosine rules'] },
              { name: 'Trigonometric Functions and Identities', subtopics: ['Graphs of sine, cosine and tangent functions', 'Trigonometric identities and equations'] },
              { name: 'Trigonometric Functions and Graphs', subtopics: ['Transformations of trigonometric graphs', 'Modelling periodic phenomena'] },
            ],
          },
          {
            name: 'Calculus',
            topics: [
              { name: 'Introduction to Differentiation', subtopics: ['Derivative as gradient and rate of change', 'Differentiation of polynomials and tangent problems'] },
              { name: 'Differential Calculus', subtopics: ['Product, quotient and chain rules', 'Applications: stationary points, motion and optimisation'] },
              { name: 'The Second Derivative', subtopics: ['Concavity and points of inflection', 'Curve sketching with second-derivative information'] },
              { name: 'Integral Calculus', subtopics: ['Antiderivatives and definite integrals', 'Areas under curves and applications'] },
            ],
          },
          {
            name: 'Exponential and Logarithmic Functions',
            topics: [
              { name: 'Logarithms and Exponentials', subtopics: ['Exponential growth and decay models', 'Logarithm laws, graphs and solving equations'] },
            ],
          },
          {
            name: 'Statistical Analysis',
            topics: [
              { name: 'Probability and Discrete Probability Distributions', subtopics: ['Venn diagrams, tree diagrams and conditional probability', 'Discrete random variables and expected value'] },
              { name: 'Descriptive Statistics and Bivariate Data Analysis', subtopics: ['Data displays, measures of centre and spread', 'Scatterplots, correlation and least-squares regression'] },
              { name: 'Random Variables', subtopics: ['Continuous random variables', 'Probability density functions and the uniform distribution'] },
            ],
          },
          {
            name: 'Financial Mathematics',
            topics: [
              { name: 'Modelling Financial Situations', subtopics: ['Arithmetic and geometric series in finance', 'Annuities, reducing-balance loans and investment models'] },
            ],
          },
        ],
      },
      {
        name: 'Mathematics Standard 2',
        mappedSubjectId: 'mathematics',
        weightage: 17,
        units: [
          {
            name: 'Algebra',
            topics: [
              { name: 'Formulae and Equations', subtopics: ['Substitution and changing the subject', 'Linear equations and problem solving'] },
              { name: 'Linear Relationships', subtopics: ['Graphing linear relationships', 'Direct variation modelling'] },
              { name: 'Types of Relationships', subtopics: ['Simultaneous linear equations', 'Non-linear relationships and their graphs'] },
            ],
          },
          {
            name: 'Measurement',
            topics: [
              { name: 'Applications of Measurement', subtopics: ['Perimeter, area, volume and surface area', 'Units of measurement and accuracy'] },
              { name: 'Working with Time', subtopics: ['Durations, timetables and schedules', 'Time zones and Australian coordinates'] },
              { name: 'Non-right-angled Trigonometry', subtopics: ['Sine rule, cosine rule and area formula', 'Bearings and real applications'] },
              { name: 'Rates and Ratios', subtopics: ['Ratios, rates and scale drawings', 'Consumption and flow rates'] },
            ],
          },
          {
            name: 'Financial Mathematics',
            topics: [
              { name: 'Money Matters', subtopics: ['Wages, salaries, leave and deductions', 'Budgeting and taxation'] },
              { name: 'Investments and Loans', subtopics: ['Simple and compound interest', 'Loan repayments, fees and comparisons'] },
              { name: 'Annuities', subtopics: ['Future and present value of annuities', 'Annuity tables and applications'] },
            ],
          },
          {
            name: 'Statistical Analysis',
            topics: [
              { name: 'Data Analysis', subtopics: ['Classifying, displaying and comparing data', 'Quartiles, interquartile range and outliers'] },
              { name: 'Relative Frequency and Probability', subtopics: ['Experimental probability and relative frequency', 'Two-way tables, Venn diagrams and expected outcomes'] },
              { name: 'Bivariate Data Analysis', subtopics: ['Scatterplots and correlation strength', 'Line of best fit, interpolation and extrapolation'] },
              { name: 'The Normal Distribution', subtopics: ['z-scores and standardised comparisons', 'The empirical rule and calculating proportions'] },
            ],
          },
          {
            name: 'Networks',
            topics: [
              { name: 'Network Concepts', subtopics: ['Vertices, edges, degree, walks, paths and cycles', 'Trees, minimum spanning trees and shortest paths'] },
              { name: 'Critical Path Analysis', subtopics: ['Activity networks, earliest and latest start times', 'Float and identifying the critical path'] },
            ],
          },
        ],
      },
      {
        name: 'Biology',
        mappedSubjectId: 'ku-life-sciences-biology',
        weightage: 17,
        units: [
          {
            name: 'Module 5: Heredity',
            topics: [
              { name: 'Reproduction', subtopics: ['Sexual and asexual reproduction in plants and animals', 'Fertilisation mechanisms and reproductive continuity'] },
              { name: 'Cell Replication', subtopics: ['Mitosis and its importance', 'Meiosis and DNA replication'] },
              { name: 'DNA and Polypeptide Synthesis', subtopics: ['DNA structure, genes and the genetic code', 'Transcription and translation', 'Polypeptide structure and function'] },
              { name: 'Genetic Variation', subtopics: ['Mutation, recombination and crossing over as variation sources', 'Polyploidy and its effects'] },
              { name: 'Inheritance Patterns in a Population', subtopics: ['Dominance, segregation and independent assortment', 'Punnett squares, pedigrees and allele frequencies', 'Modelling inheritance in populations'] },
            ],
          },
          {
            name: 'Module 6: Genetic Change',
            topics: [
              { name: 'Mutation', subtopics: ['Types of mutations and their effects', 'Mutagens and mutation rates'] },
              { name: 'Biotechnology', subtopics: ['Artificial selection and cloning techniques', 'Social, ethical and economic uses of biotechnology'] },
              { name: 'Genetic Technologies', subtopics: ['Recombinant DNA and transgenic organisms', 'Gene sequencing and the impact on biodiversity'] },
            ],
          },
          {
            name: 'Module 7: Infectious Disease',
            topics: [
              { name: 'Causes of Infectious Disease', subtopics: ['Pathogen types: prions, viruses, bacteria, protozoa, fungi, macroparasites', "Koch's postulates and Pasteur's experiments"] },
              { name: 'Responses to Pathogens', subtopics: ['Plant and animal defence responses to pathogens'] },
              { name: 'Immunity', subtopics: ['Innate and adaptive immune responses', 'Phagocytes, lymphocytes, antibodies, active and passive immunity'] },
              { name: 'Prevention, Treatment and Control', subtopics: ['Vaccination programs, hygiene and quarantine', 'Antibiotics, antivirals and public health strategies'] },
            ],
          },
          {
            name: 'Module 8: Non-infectious Disease and Disorders',
            topics: [
              { name: 'Homeostasis', subtopics: ['Negative feedback: thermoregulation and osmoregulation', 'Nervous and endocrine coordination of balance'] },
              { name: 'Causes and Effects', subtopics: ['Genetic and environmental causes of non-infectious disease', 'Nutritional and metabolic disorders'] },
              { name: 'Epidemiology', subtopics: ['Study designs and measures of disease frequency', 'Evaluating epidemiological evidence for causation'] },
              { name: 'Prevention', subtopics: ['Education programs, lifestyle change and screening'] },
              { name: 'Technologies and Disorders', subtopics: ['Hearing and vision disorders and their technologies', 'Kidney failure: dialysis and transplants'] },
            ],
          },
        ],
      },
      {
        name: 'Chemistry',
        mappedSubjectId: 'chemistry',
        weightage: 17,
        units: [
          {
            name: 'Module 5: Equilibrium and Acid Reactions',
            topics: [
              { name: 'Static and Dynamic Equilibrium', subtopics: ['Reversible reactions and collision theory', 'Static versus dynamic equilibrium in open and closed systems'] },
              { name: 'Factors that Affect Equilibrium', subtopics: ["Le Chatelier's principle: concentration, pressure and temperature", 'Industrial compromise: the Haber process'] },
              { name: 'Equilibrium Constants', subtopics: ['Keq expressions and ICE-table calculations', 'Solubility products and Ksp'] },
              { name: 'Solution Equilibria', subtopics: ['Saturated solutions and solubility curves', 'Predicting precipitation with Ksp'] },
            ],
          },
          {
            name: 'Module 6: Acid/Base Reactions',
            topics: [
              { name: 'Properties of Acids and Bases', subtopics: ['Arrhenius and Brønsted-Lowry models', 'Conjugate pairs, amphiprotic species and polyprotic acids'] },
              { name: 'Using Brønsted-Lowry Theory', subtopics: ['pH, Ka and Kb, strength versus concentration', 'Indicators and titration curves'] },
              { name: 'Quantitative Analysis', subtopics: ['Standard solutions and titration calculations', 'Conductometric analysis'] },
            ],
          },
          {
            name: 'Module 7: Organic Chemistry',
            topics: [
              { name: 'Nomenclature', subtopics: ['IUPAC naming of hydrocarbons and functionalised compounds'] },
              { name: 'Products of Reactions Involving Hydrocarbons', subtopics: ['Addition, substitution and combustion reactions', 'Cracking and polymer feedstocks'] },
              { name: 'Products of Reactions Involving Alcohols', subtopics: ['Oxidation, dehydration and substitution of alcohols', 'Esterification and reflux'] },
              { name: 'Reactions of Organic Acids and Bases', subtopics: ['Carboxylic acids and amines', 'Ester and amide formation'] },
              { name: 'Polymers', subtopics: ['Addition and condensation polymerisation', 'Structure-property relationships and biopolymers'] },
            ],
          },
          {
            name: 'Module 8: Applying Chemical Ideas',
            topics: [
              { name: 'Analysis of Inorganic Substances', subtopics: ['Cation and anion identification tests', 'Gravimetric and colourimetric analysis'] },
              { name: 'Analysis of Organic Substances', subtopics: ['Chromatographic separation and purity', 'Spectroscopy for structure determination'] },
              { name: 'Chemical Synthesis and Design', subtopics: ['Designing synthesis routes, yield and purity', 'Monitoring environmental contaminants'] },
            ],
          },
        ],
      },
      {
        name: 'Physics',
        mappedSubjectId: 'physics',
        weightage: 15,
        units: [
          {
            name: 'Module 5: Advanced Mechanics',
            topics: [
              { name: 'Projectile Motion', subtopics: ['Independence of horizontal and vertical motion', 'Launch angle, range and trajectory analysis'] },
              { name: 'Circular Motion', subtopics: ['Uniform circular motion and centripetal force', 'Conical pendulum and banked tracks'] },
              { name: 'Motion in Gravitational Fields', subtopics: ["Newton's law of gravitation and field strength", "Orbital motion, Kepler's laws and total energy", 'Escape velocity'] },
            ],
          },
          {
            name: 'Module 6: Electromagnetism',
            topics: [
              { name: 'Charged Particles, Conductors and Electric and Magnetic Fields', subtopics: ['Fields around point charges and current-carrying conductors', 'Forces on charges and acceleration in fields'] },
              { name: 'The Motor Effect', subtopics: ['Force on current-carrying conductors', 'Torque on current loops'] },
              { name: 'Electromagnetic Induction', subtopics: ["Magnetic flux, Faraday's and Lenz's laws", 'Induced emf and transformers'] },
              { name: 'Applications of the Motor Effect', subtopics: ['DC motors and back emf', 'AC induction motors'] },
            ],
          },
          {
            name: 'Module 7: The Nature of Light',
            topics: [
              { name: 'Electromagnetic Spectrum', subtopics: ["Maxwell's theory and the wave speed", 'Spectroscopy, stellar classification and the H-R diagram'] },
              { name: 'Light: Wave Model', subtopics: ["Young's double-slit experiment, interference and diffraction", "Polarisation and Malus' law"] },
              { name: 'Light: Quantum Model', subtopics: ['Black-body radiation and Planck\'s hypothesis', 'The photoelectric effect and photon momentum'] },
              { name: 'Light and Special Relativity', subtopics: ['Postulates, time dilation and length contraction', 'Relativity of simultaneity and mass-energy equivalence'] },
            ],
          },
          {
            name: 'Module 8: From the Universe to the Atom',
            topics: [
              { name: 'Origins of the Elements', subtopics: ['Big Bang cosmology and its evidence', 'Stellar nucleosynthesis and the life cycle of stars'] },
              { name: 'Structure of the Atom', subtopics: ['Cathode-ray experiments and the plum-pudding model', 'Rutherford\'s scattering and the nuclear model'] },
              { name: 'Quantum Mechanical Nature of the Atom', subtopics: ['Bohr model and the hydrogen spectrum', 'de Broglie waves and the wave-mechanical model'] },
              { name: 'Properties of the Nucleus', subtopics: ['Radioactive decay and half-life', 'Binding energy, mass defect, fission and fusion'] },
              { name: 'Deep Inside the Atom', subtopics: ['The Standard Model: quarks, leptons and mediators', 'Particle accelerators and conservation laws'] },
            ],
          },
        ],
      },
    ],
  },
]
