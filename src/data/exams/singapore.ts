import type { CuratedExam } from './types'

/**
 * Singapore exams — curated official syllabi.
 *
 * Source: Singapore Examinations and Assessment Board (SEAB) 2026 GCE
 * A-Level syllabus list (seab.gov.sg). Local-subject content below follows
 * the H2 syllabus section titles for Mathematics (9758), Physics (9749),
 * Chemistry (9729), Biology (9744) and Economics (9560). H1 General Paper
 * and Mother-Tongue/literature subjects are deliberately excluded (they
 * test language skills the library does not teach).
 */

export const SINGAPORE_EXAMS: CuratedExam[] = [
  {
    id: 'sg-gce-a-level',
    name: 'GCE A-Level (SG)',
    fullName: 'Singapore-Cambridge GCE Advanced Level (H2 subjects)',
    aliases: ['singapore a level', 'gce a level singapore', 'h2 mathematics', 'h2 physics', 'h2 chemistry', 'h2 biology', 'h2 economics', 'seab a level'],
    region: 'Singapore',
    category: 'School-leaving subject exam',
    popularity: 66,
    syllabusVerified: '2026-10-22',
    website: 'https://www.seab.gov.sg/gce-a-level/a-level-syllabuses-examined-for-school-candidates-2026',
    overview: {
      conductor: 'SEAB with the Singapore MOE and Cambridge International Education',
      level: 'Junior college (Years 12-13) → university admission',
      stages: ['Two-year course → H1/H2/H3 subject examinations in a single sitting each year'],
      papers: ['H2 subjects: two or three written papers each (some with practical or case-study components)'],
      duration: 'Per-subject written papers at end of course',
      marking: 'Grades A-U per subject; university admission points computed from H1+H2 profile',
      questionTypes: ['Structured written questions', 'Data-response and case-study questions (Economics)', 'Practical papers (sciences)'],
      notes:
        'Content below follows the five most-taken H2 local-subject syllabuses by their official section titles. H1 General Paper, Mother Tongue and literature subjects are excluded because they examine language and textual skills outside the library scope.',
    },
    sources: [
      { title: 'SEAB — 2026 GCE A-Level syllabuses examined for school candidates', url: 'https://www.seab.gov.sg/gce-a-level/a-level-syllabuses-examined-for-school-candidates-2026', host: 'seab.gov.sg' },
      { title: 'Singapore Examinations and Assessment Board', url: 'https://www.seab.gov.sg', host: 'seab.gov.sg' },
    ],
    subjects: [
      {
        name: 'H2 Mathematics',
        mappedSubjectId: 'mathematics',
        weightage: 20,
        units: [
          {
            name: 'Functions and Graphs',
            topics: [
              { name: 'Functions: inverse, composite and transformations', subtopics: ['Domain, range and inverse functions', 'Composite functions, graph transformations, restricting domains'] },
              { name: 'Graphs and inequalities', subtopics: ['Curve sketching including rational functions', 'Inequalities and the modulus function'] },
            ],
          },
          {
            name: 'Sequences and Series',
            topics: [
              { name: 'Arithmetic and geometric progressions', subtopics: ['nth-term and sum formulae', 'Sum to infinity, real-life modelling with sequences'] },
            ],
          },
          {
            name: 'Vectors',
            topics: [
              { name: 'Vectors in two and three dimensions', subtopics: ['Scalar and vector products, vector equations of lines and planes', 'Angles between lines and planes, points-to-line distance'] },
            ],
          },
          {
            name: 'Introduction to Complex Numbers',
            topics: [
              { name: 'Complex numbers in Cartesian, polar and exponential form', subtopics: ['Argand diagrams, modulus and argument', 'De Moivre theorem and loci in the complex plane'] },
            ],
          },
          {
            name: 'Calculus',
            topics: [
              { name: 'Differentiation and its applications', subtopics: ['Chain, product and quotient rules, implicit and parametric differentiation', 'Maclaurin series, maxima and minima, related rates'] },
              { name: 'Integration and its applications', subtopics: ['Techniques of integration, definite integrals', 'Areas, volumes of revolution, differential equations'] },
            ],
          },
          {
            name: 'Probability and Statistics',
            topics: [
              { name: 'Probability and discrete random variables', subtopics: ['Probability rules, conditional probability', 'Expectation and variance of discrete random variables'] },
              { name: 'Binomial, normal and sampling distributions', subtopics: ['Binomial and normal distributions', 'Sampling, unbiased estimators, central limit theorem'] },
              { name: 'Hypothesis testing and correlation', subtopics: ['Hypothesis tests on means and proportions', 'Linear regression, correlation coefficient'] },
            ],
          },
        ],
      },
      {
        name: 'H2 Physics',
        mappedSubjectId: 'physics',
        weightage: 20,
        units: [
          {
            name: 'Measurements',
            topics: [
              { name: 'Physical quantities, SI units and errors', subtopics: ['Base and derived units, homogeneity of equations', 'Random and systematic errors, uncertainty propagation'] },
              { name: 'Kinematics and dynamics', subtopics: ['Equations of motion, projectile motion', 'Newton laws, free-body diagrams, momentum and impulse'] },
            ],
          },
          {
            name: 'Newtonian Mechanics',
            topics: [
              { name: 'Forces, moments and equilibrium', subtopics: ['Types of forces, turning effects, centre of gravity'] },
              { name: 'Work, energy and power; circular motion', subtopics: ['Conservation of energy, efficiency', 'Angular velocity, centripetal force and acceleration'] },
              { name: 'Gravitational field', subtopics: ['Newton law of gravitation, field strength and potential', 'Satellite motion, geostationary orbits'] },
            ],
          },
          {
            name: 'Thermal Physics',
            topics: [
              { name: 'Temperature, specific heat and latent heat', subtopics: ['Thermal equilibrium, heat capacity calculations'] },
              { name: 'First law of thermodynamics and gas laws', subtopics: ['Internal energy, ideal gas equation and kinetic model'] },
            ],
          },
          {
            name: 'Waves',
            topics: [
              { name: 'Progressive waves, superposition and standing waves', subtopics: ['Wave properties, Doppler effect basics', 'Interference, diffraction, two-source patterns'] },
            ],
          },
          {
            name: 'Electricity and Magnetism',
            topics: [
              { name: 'Electric fields and current of electricity', subtopics: ['Coulomb law, field strength and potential', 'Current, potential difference, resistance and electromotive force'] },
              { name: 'D.C. circuits, electromagnetism and induction', subtopics: ['Circuit analysis with Kirchhoff laws', 'Magnetic fields, force on currents, electromagnetic induction, alternating currents'] },
              { name: 'Quantum physics and nuclear physics', subtopics: ['Photoelectric effect, energy levels and line spectra', 'Radioactivity, nuclear processes, mass-energy equivalence'] },
            ],
          },
        ],
      },
      {
        name: 'H2 Chemistry',
        mappedSubjectId: 'chemistry',
        weightage: 20,
        units: [
          {
            name: 'Physical Chemistry',
            topics: [
              { name: 'Atomic structure and chemical bonding', subtopics: ['Electronic configuration, ionisation energies', 'Ionic, covalent and metallic bonding, intermolecular forces, shapes of molecules'] },
              { name: 'The gaseous state and chemical energetics', subtopics: ['Ideal gas behaviour and deviations', 'Enthalpy changes, Hess law, bond energies, entropy and Gibbs free energy'] },
              { name: 'Reaction kinetics and chemical equilibria', subtopics: ['Rate equations, orders of reaction, activation energy and catalysis', 'Equilibrium constants, Le Chatelier principle'] },
              { name: 'Ionic equilibria and electrochemistry', subtopics: ['pH, acid-base equilibria, buffers, solubility product', 'Redox, standard electrode potentials, electrolysis, voltaic cells'] },
            ],
          },
          {
            name: 'Inorganic Chemistry',
            topics: [
              { name: 'Periodicity and group chemistry', subtopics: ['Period 3 oxides and chlorides, Group 2 and Group 17 trends', 'Transition elements, complex ions, catalysis'] },
              { name: 'Nitrogen and sulfur chemistry', subtopics: ['Ammonia, fertilisers, sulfuric acid manufacture'] },
            ],
          },
          {
            name: 'Organic Chemistry',
            topics: [
              { name: 'Introduction to carbon compounds', subtopics: ['Nomenclature, isomerism, reaction mechanisms — free-radical substitution, electrophilic addition, nucleophilic substitution'] },
              { name: 'Hydroxy, carbonyl and nitrogen compounds', subtopics: ['Alcohols, halogen derivatives, carbonyls, carboxylic acids and derivatives', 'Amines, amino acids, proteins and their reactions'] },
              { name: 'Analysis and synthesis', subtopics: ['Distinguishing tests, spectroscopic identification basics', 'Multi-step synthesis routes'] },
            ],
          },
        ],
      },
      {
        name: 'H2 Biology',
        weightage: 20,
        units: [
          {
            name: 'Cells and Biomolecules',
            topics: [
              { name: 'Cell structure, membranes and transport', subtopics: ['Ultrastructure of prokaryotic and eukaryotic cells', 'Fluid mosaic model, diffusion, osmosis, active transport'] },
              { name: 'Biomolecules and enzymes', subtopics: ['Carbohydrates, lipids, proteins, nucleic acids', 'Enzyme structure, catalysis and inhibition'] },
            ],
          },
          {
            name: 'DNA, Genomics and Inheritance',
            topics: [
              { name: 'DNA, replication and protein synthesis', subtopics: ['DNA structure and replication, transcription and translation', 'Gene mutation, genomic applications'] },
              { name: 'Genetics, inheritance and evolution', subtopics: ['Mendelian genetics, dihybrid crosses, linkage', 'Biological evolution and speciation evidence'] },
            ],
          },
          {
            name: 'Energy and Regulation',
            topics: [
              { name: 'Photosynthesis and cellular respiration', subtopics: ['Light and dark reactions, chloroplast structure', 'Glycolysis, Krebs cycle, oxidative phosphorylation'] },
              { name: 'Nervous and hormonal control', subtopics: ['Neurones, action potentials, synapses', 'Endocrine signalling, homeostasis in plants and animals'] },
            ],
          },
          {
            name: 'Diseases, Immunity and Ecology',
            topics: [
              { name: 'Infectious diseases and immunity', subtopics: ['Cholera, malaria, tuberculosis, HIV/AIDS', 'Immune response, vaccination, antibiotic resistance'] },
              { name: 'Ecology and biodiversity', subtopics: ['Ecosystem energy flow, nutrient cycles, populations', 'Biodiversity, conservation and sustainability'] },
            ],
          },
        ],
      },
      {
        name: 'H2 Economics',
        weightage: 20,
        units: [
          {
            name: 'Microeconomics',
            topics: [
              { name: 'The central economic problem', subtopics: ['Scarcity, choice and opportunity cost, production possibility curve'] },
              { name: 'Markets', subtopics: ['Demand and supply, price elasticity, market equilibrium and interventions'] },
              { name: 'Market failure and government intervention', subtopics: ['Externalities, public goods, information gaps, equity vs efficiency'] },
            ],
          },
          {
            name: 'Macroeconomics',
            topics: [
              { name: 'National income and aggregate demand-supply analysis', subtopics: ['Measuring national income, AD-AS analysis of output and price levels'] },
              { name: 'Macroeconomic aims, issues and policies', subtopics: ['Growth, unemployment, inflation, balance of payments', 'Fiscal, monetary and supply-side policies in a small open economy'] },
              { name: 'International trade and globalisation', subtopics: ['Comparative advantage, protectionism, exchange rates, globalisation impacts'] },
            ],
          },
        ],
      },
    ],
  },
]
