import type { CuratedExam } from './types'

/**
 * Australia — Western Australia WACE, curated official syllabi.
 *
 * Source: School Curriculum and Standards Authority (SCSA) senior-secondary
 * syllabus materials (senior-secondary.scsa.wa.edu.au). The SCSA subject
 * pages are Cloudflare-gated to scripted fetches, so the Year 12 (Units 3-4)
 * unit names, topic lists and examination structures below were verified
 * this pass through two independent syllabus-indexed course guides that
 * quote the official SCSA documents page-for-page — the ATARIS WACE Year 12
 * course guides (atar.is/courses/wace/year-12/{physics,chemistry,biology,
 * human-biology,mathematics-methods,mathematics-applications,
 * mathematics-specialist}, each listing "What you'll study" Unit 3/Unit 4
 * topic names, the calculator-free/calculator-assumed split for mathematics
 * papers and the section weightings for science papers, plus links to the
 * current SCSA syllabus, formula sheets and past examinations) and the
 * AusGrader SCSA Physics course overview (ausgrader.com/scsa-physics: Unit 3
 * "Gravity and relativity" — Newton's laws and the gravitational field model
 * applied to circular motion including banked curves and satellite motion,
 * plus relativity; Unit 4 "Electromagnetism and modern physics" — DC motors,
 * DC and AC generators, transformers and AC power distribution, the
 * production of electromagnetic waves, then the quantum theory of light and
 * matter, the quantum theory of the atom and the Big Bang theory; the 2025
 * paper's section layout: short response 30% 12 questions 50 minutes,
 * problem-solving 50% 6 questions 90 minutes, comprehension 20% 2 questions
 * 40 minutes). The Human Biology unit names were additionally cross-checked
 * against Excel Academics' WACE Human Biology exam breakdown (Unit 3
 * "Homeostasis and disease"; Unit 4 "Human variation and evolution") and the
 * Biology unit names against the SCSA Biology ATAR course description
 * ("Unit 3 Continuity of species ... Unit 4 Surviving in a changing
 * environment").
 *
 * Scope: the seven highest-enrolment WACE ATAR courses with complete
 * unit-topic verification this pass — Physics, Chemistry, Biology, Human
 * Biology, Mathematics Applications, Mathematics Methods and Mathematics
 * Specialist — curated at Units 3 and 4, the units the SCSA ATAR course
 * examinations sample each November, contributing 50% of the combined mark
 * that TISC scales into the ATAR. English ATAR (the single
 * highest-enrolment course) is deliberately deferred to a follow-up pass:
 * its official unit names could not be verified first-hand within this
 * pass's research budget, and the registry does not ship unverified
 * syllabus names. Humanities and language ATAR courses are likewise outside
 * the library's teaching scope (matching the NSW HSC, VCE and QCE files'
 * exclusion notes).
 *
 * Assessment structure (ATARIS guides + AusGrader): science ATAR
 * examinations run 10 minutes reading + 3 hours working in three sections —
 * multiple-choice 30% (30 questions, 40 minutes), short answer 50%
 * (90 minutes) and extended answer 20% (50 minutes, one question per unit);
 * physics splits short response 30% / problem-solving 50% / comprehension
 * 20% instead; mathematics ATAR examinations split into a calculator-free
 * Section One 35% (50 minutes) and a calculator-assumed Section Two 65%
 * (100 minutes), with the official formula sheet supplied. School-based
 * assessment is 50% of the final combined mark; TISC scales course marks
 * into the ATAR.
 */

export const WESTERN_AUSTRALIA_EXAMS: CuratedExam[] = [
  {
    id: 'wace',
    name: 'WACE',
    fullName: 'Western Australian Certificate of Education',
    aliases: [
      'wace',
      'western australian certificate of education',
      'wace atar',
      'western australia atar',
      'wa atar',
      'scsa exam',
      'wace exam',
      'atar course examination',
    ],
    region: 'Australia',
    category: 'School-leaving subject exam',
    popularity: 57,
    syllabusVerified: '2026-10-27',
    website: 'https://senior-secondary.scsa.wa.edu.au',
    overview: {
      conductor: 'School Curriculum and Standards Authority (SCSA)',
      level: 'Years 11-12 → school + examination mark → ATAR via TISC',
      stages: [
        'Units 1 and 2 (Year 11, school-assessed)',
        'Units 3 and 4 (Year 12, school assessment + SCSA ATAR course examination)',
      ],
      papers: [
        'One ATAR course examination per subject in October-November',
        'Mathematics papers: calculator-free Section One + calculator-assumed Section Two',
      ],
      duration: 'ATAR course examinations in October-November; 3 hours working + 10 minutes reading per science paper; mathematics papers 50 minutes calculator-free + 100 minutes calculator-assumed',
      marking:
        'School-based assessment 50% + SCSA-set ATAR course examination 50% combined per course; the combined mark is statistically moderated and scaled by TISC into the ATAR',
      questionTypes: [
        'Multiple choice (science papers)',
        'Short response',
        'Problem-solving / extended answer',
        'Comprehension and data analysis (physics)',
      ],
      notes:
        'Content follows the seven highest-enrolment WACE ATAR courses at Units 3 and 4 by their official unit and topic names from the current SCSA syllabuses (Physics, Chemistry, Biology, Human Biology, Mathematics Applications, Mathematics Methods, Mathematics Specialist). Science examinations supply the Physics Formulae and Data booklet or the Chemistry Data booklet; mathematics examinations supply the official formula sheet. English ATAR is deferred to a follow-up pass pending first-hand verification of its unit names.',
    },
    sources: [
      {
        title: 'SCSA — Physics ATAR course page (Year 12 syllabus, assessment outline)',
        url: 'https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/science/physics',
        host: 'senior-secondary.scsa.wa.edu.au',
      },
      {
        title: 'SCSA — Chemistry ATAR course page',
        url: 'https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/science/chemistry',
        host: 'senior-secondary.scsa.wa.edu.au',
      },
      {
        title: 'SCSA — Biology ATAR course page',
        url: 'https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/science/biology',
        host: 'senior-secondary.scsa.wa.edu.au',
      },
      {
        title: 'SCSA — Human Biology ATAR course page',
        url: 'https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/science/human-biology',
        host: 'senior-secondary.scsa.wa.edu.au',
      },
      {
        title: 'SCSA — Mathematics Methods ATAR course page',
        url: 'https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-methods',
        host: 'senior-secondary.scsa.wa.edu.au',
      },
      {
        title: 'SCSA — Mathematics Applications ATAR course page',
        url: 'https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-applications',
        host: 'senior-secondary.scsa.wa.edu.au',
      },
      {
        title: 'SCSA — Mathematics Specialist ATAR course page',
        url: 'https://senior-secondary.scsa.wa.edu.au/syllabus-and-support-materials/mathematics/mathematics-specialist',
        host: 'senior-secondary.scsa.wa.edu.au',
      },
      {
        title: 'ATARIS — WACE Year 12 course guides (Unit 3/4 topic lists, exam formats, syllabus links)',
        url: 'https://atar.is/courses/wace/year-12/physics',
        host: 'atar.is',
      },
      {
        title: 'AusGrader — SCSA Physics course overview (unit content walk-through + 2025 paper layout)',
        url: 'https://www.ausgrader.com/scsa-physics',
        host: 'ausgrader.com',
      },
      {
        title: 'Excel Academics — WACE Human Biology exam breakdown',
        url: 'https://excelacademics.com.au/blog/how-to-ace-wace-scsa-human-biology-full-exam-breakdown',
        host: 'excelacademics.com.au',
      },
      {
        title: 'TISC — ATAR scaling and university admission in Western Australia',
        url: 'https://www.tisc.edu.au',
        host: 'tisc.edu.au',
      },
    ],
    subjects: [
      // ----------------------------------------------------------- Physics --
      {
        name: 'Physics',
        mappedSubjectId: 'physics',
        units: [
          {
            name: 'Unit 3: Gravity and relativity',
            topics: [
              {
                name: 'Static equilibrium and centre of mass',
                subtopics: [
                  'Translational equilibrium: vector sum of forces equals zero',
                  'Rotational equilibrium: sum of torques equals zero, τ = rF sinθ',
                  'Centre of mass and centre of gravity of extended bodies',
                  'Beam and ladder problems with multiple contact forces',
                  'Stability, base of support and toppling conditions',
                ],
              },
              {
                name: 'Motion and forces in two dimensions',
                subtopics: [
                  'Projectile motion: independent horizontal and vertical components',
                  'Uniform circular motion: centripetal acceleration a = v²/r',
                  'Motion on horizontal and vertical circles (tension and normal forces)',
                  'Banked curves and the role of friction on curved roads',
                  'Conical pendulum and resolved-force analysis',
                ],
              },
              {
                name: 'Gravitational fields and orbital motion',
                subtopics: [
                  "Newton's law of universal gravitation F = Gm₁m₂/r²",
                  'Gravitational field strength g = GM/r² and field-line models',
                  'Orbital speed, period and energy for circular orbits',
                  "Kepler's laws of planetary motion",
                  'Low-orbit, polar and geostationary satellites',
                  'Work and energy changes when moving between orbits',
                ],
              },
              {
                name: 'Special relativity and relativistic motion',
                subtopics: [
                  "Einstein's postulates and the constancy of the speed of light",
                  'Time dilation and length contraction with the Lorentz factor γ',
                  'Relativistic momentum and the impossibility of reaching c',
                  'Rest energy E = mc² and mass-energy in nuclear reactions',
                  'Experimental evidence: muon lifetimes and particle accelerators',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Electromagnetism and modern physics',
            topics: [
              {
                name: 'Electromagnetism, generators, and transformers',
                subtopics: [
                  'Magnetic force on current-carrying conductors F = BIL sinθ',
                  'DC motors: torque, split-ring commutator and back emf',
                  "Faraday's law of electromagnetic induction and Lenz's law",
                  'DC and AC generators, peak and rms voltage',
                  'Transformers and the Vp/Vs = Np/Ns relationship',
                  'AC power distribution and transmission line losses',
                ],
              },
              {
                name: 'Electromagnetic waves and wave-particle duality',
                subtopics: [
                  'Production of electromagnetic waves by accelerating charges',
                  'Photoelectric effect and the photon model E = hf',
                  'Threshold frequency, work function and stopping voltage',
                  'Photon momentum p = h/λ and radiation pressure',
                  'de Broglie wavelength and electron diffraction evidence',
                ],
              },
              {
                name: 'Quantum theory, atomic spectra, and models',
                subtopics: [
                  'Emission and absorption spectra of atomic hydrogen',
                  'Bohr model: quantised energy levels and E = hf transitions',
                  'Limitations of the Bohr model and spectral series predictions',
                  'The quantum model of the atom: orbitals and probability',
                ],
              },
              {
                name: 'The Standard Model and particle physics',
                subtopics: [
                  'Fundamental particles: quarks, leptons and force carriers',
                  'The four fundamental interactions and their exchange particles',
                  'Classifying particles by charge, baryon and lepton number',
                  'Particle accelerators and cosmic rays as discovery tools',
                  "Big Bang cosmology: Hubble's law, redshift and the cosmic microwave background",
                ],
              },
            ],
          },
        ],
      },

      // --------------------------------------------------------- Chemistry --
      {
        name: 'Chemistry',
        mappedSubjectId: 'chemistry',
        units: [
          {
            name: 'Unit 3: Equilibrium, acids and bases, and redox reactions',
            topics: [
              {
                name: 'Equilibrium systems',
                subtopics: [
                  'Dynamic equilibrium and the reversibility of reactions',
                  'Collision theory applied to competing forward and reverse rates',
                  "Le Châtelier's principle: concentration, pressure/volume and temperature changes",
                  'Equilibrium constants K and reaction quotient Q calculations',
                  'Effect of catalysts on equilibrium position',
                  'Industrial equilibria: the Haber process and compromise conditions',
                ],
              },
              {
                name: 'Acids and bases',
                subtopics: [
                  'Arrhenius and Brønsted-Lowry models of acids and bases',
                  'Conjugate acid-base pairs and amphiprotic species',
                  'Strong versus weak acids and bases, Ka and Kb',
                  'The self-ionisation of water, Kw, and pH/pOH calculations',
                  'Titration curves, equivalence points and indicator selection',
                  'Buffer solutions and their mode of action',
                ],
              },
              {
                name: 'Oxidation and reduction',
                subtopics: [
                  'Oxidation numbers and identifying redox reactions',
                  'Balancing half-equations in acidic and basic media',
                  'Oxidising and reducing agents and relative strength',
                  'Standard reduction potentials and predicting spontaneity',
                  'Corrosion of iron and its prevention (sacrificial anodes, galvanising)',
                ],
              },
              {
                name: 'Electrochemical cells',
                subtopics: [
                  'Galvanic cells: electrode polarity, salt bridges and cell diagrams',
                  'Calculating cell potentials from standard reduction potentials',
                  'Electrolytic cells and molten versus aqueous electrolytes',
                  'Faraday\'s laws and electrolysis stoichiometry',
                  'Applications: electroplating, rechargeable cells and fuel cells',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Organic chemistry and chemical synthesis',
            topics: [
              {
                name: 'Organic structure',
                subtopics: [
                  'Hydrocarbon families: alkanes, alkenes and alkynes',
                  'Structural formulae, skeletal structures and nomenclature',
                  'Structural isomerism and its effect on physical properties',
                  'Intermolecular force trends across homologous series',
                ],
              },
              {
                name: 'Functional groups',
                subtopics: [
                  'Haloalkanes, alcohols, aldehydes and ketones',
                  'Carboxylic acids, esters, amines and amides',
                  'Primary, secondary and tertiary classification of alcohols and haloalkanes',
                  'Nomenclature, boiling-point trends and solubility of functionalised compounds',
                ],
              },
              {
                name: 'Reaction pathways',
                subtopics: [
                  'Substitution reactions of alkanes and haloalkanes',
                  'Addition reactions of alkenes, including Markovnikov outcomes',
                  'Oxidation of alcohols and esterification (condensation)',
                  'Addition and condensation polymerisation',
                  'Designing multi-step synthesis pathways with conditions and catalysts',
                ],
              },
              {
                name: 'Chemical analysis and synthesis',
                subtopics: [
                  'Chromatographic separation: paper, TLC, column, HPLC and GC',
                  'Spectroscopic identification: infrared, mass spectrometry and NMR',
                  'Interpreting spectra to deduce molecular structures',
                  'Percentage yield, atom economy and purity in synthesis design',
                  'Green chemistry principles in industrial synthesis',
                ],
              },
            ],
          },
        ],
      },

      // ----------------------------------------------------------- Biology --
      {
        name: 'Biology',
        mappedSubjectId: 'ku-life-sciences-biology',
        units: [
          {
            name: 'Unit 3: Continuity of species',
            topics: [
              {
                name: 'DNA and gene expression',
                subtopics: [
                  'DNA structure, replication and the genetic code',
                  'Transcription, translation and protein synthesis',
                  'Gene regulation, including epigenetic factors',
                  'Point and frameshift mutations, mutagens and repair',
                  'Genotype, phenotype and the environment\'s role in expression',
                ],
              },
              {
                name: 'Inheritance and variation',
                subtopics: [
                  'Meiosis, crossing over and independent assortment as variation sources',
                  'Monohybrid and dihybrid crosses with test crosses',
                  'Codominance, incomplete dominance, multiple alleles and sex linkage',
                  'Pedigree analysis and probability in inheritance',
                  'Gene linkage and recombination frequencies',
                ],
              },
              {
                name: 'Evolutionary mechanisms',
                subtopics: [
                  'Natural selection: stabilising, directional and disruptive patterns',
                  'Mutations, allele frequency change and selection pressure',
                  'Founder effect, genetic bottlenecks and small populations',
                  'Speciation: allopatric and sympatric mechanisms',
                  'Evidence for evolution: fossils, biogeography and comparative anatomy',
                ],
              },
              {
                name: 'Population genetics',
                subtopics: [
                  'The Hardy-Weinberg principle and its five conditions',
                  'Calculating allele and genotype frequencies in populations',
                  'Genetic drift and gene flow between populations',
                  'Using population-genetic models to test for evolutionary change',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Surviving in a changing environment',
            topics: [
              {
                name: 'Homeostatic regulation',
                subtopics: [
                  'Negative feedback loops and set points',
                  'Thermoregulation: vasomotor, sweating, shivering and metabolic responses',
                  'Osmoregulation: ADH, aldosterone and kidney function',
                  'Blood glucose regulation by insulin and glucagon',
                  'Endocrine signalling: glands, hormones and target-cell receptors',
                ],
              },
              {
                name: 'Pathogens and transmission',
                subtopics: [
                  'Pathogen types: prions, viruses, bacteria, protozoa, fungi and macroparasites',
                  'Cellular structure and reproduction of bacteria versus viruses',
                  'Transmission modes: direct, vector-borne, droplet and fomite',
                  'Virulence factors and host susceptibility',
                  'First-line and second-line defence barriers',
                ],
              },
              {
                name: 'Immune responses',
                subtopics: [
                  'Innate versus adaptive immunity',
                  'B and T lymphocytes, clonal selection and antibody action',
                  'Cell-mediated versus humoral response',
                  'Active, passive, natural and artificial immunity',
                  'Vaccination programs and herd immunity',
                ],
              },
              {
                name: 'Epidemiology and control',
                subtopics: [
                  'Incidence, prevalence and epidemiological study designs',
                  'Cohort and case-control studies and their limitations',
                  'Antibiotic resistance as an evolutionary case study',
                  'Disease control strategies: quarantine, contact tracing and sanitation',
                  'Evaluating public health interventions with data',
                ],
              },
            ],
          },
        ],
      },

      // ------------------------------------------------------ Human Biology --
      {
        name: 'Human Biology',
        mappedSubjectId: 'ku-human-anatomy-physiology',
        units: [
          {
            name: 'Unit 3: Homeostasis and disease',
            topics: [
              {
                name: 'Nervous coordination',
                subtopics: [
                  'Neuron structure, myelination and the action potential',
                  'Synapses, neurotransmitters and signal integration',
                  'Central versus peripheral nervous system organisation',
                  'Reflex arcs and their protective role',
                  'Brain regions governing homeostasis: hypothalamus and medulla oblongata',
                  'Nervous system disorders and their treatments',
                ],
              },
              {
                name: 'Endocrine regulation',
                subtopics: [
                  'Endocrine glands, hormones and target-cell specificity',
                  'The hypothalamus-pituitary axis as master control',
                  'Comparing endocrine and nervous signalling speed and duration',
                  'Effects of hormone deficiency and excess (diabetes, thyroid disorders)',
                ],
              },
              {
                name: 'Homeostasis',
                subtopics: [
                  'The internal environment and negative feedback control',
                  'Thermoregulation: vasodilation, sweating, shivering and thyroid response',
                  'Fluid and electrolyte balance: ADH and the kidney',
                  'Blood glucose regulation: insulin, glucagon and glycogen stores',
                  'Carbon dioxide regulation through breathing rate and pH buffers',
                  'Disruptions of homeostasis: heat stroke, hypothermia, dehydration',
                ],
              },
              {
                name: 'Disease and immunity',
                subtopics: [
                  'Classifying disease: infectious, genetic, nutritional and degenerative',
                  'Bacteria versus viruses: structure, reproduction and treatment differences',
                  'Pathogen transmission pathways and infection cycles',
                  'Innate defences and the adaptive immune response',
                  'Antibodies, lymphocytes and memory cells',
                  'Vaccination, antibiotics and the rise of resistance',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Human variation and evolution',
            topics: [
              {
                name: 'Human genetic variation',
                subtopics: [
                  'Mutation sources: spontaneous, induced and mutagens',
                  'How mutations persist and spread in populations',
                  'Monogenic versus polygenic traits in humans',
                  'Gene-environment interaction in human characteristics',
                  'Genetic screening and counselling considerations',
                ],
              },
              {
                name: 'Population genetics',
                subtopics: [
                  'Allele frequencies and the Hardy-Weinberg model in human populations',
                  'Genetic drift, founder effects and isolated human communities',
                  'Gene flow through migration and admixture',
                  'Natural selection acting on human traits',
                ],
              },
              {
                name: 'Evolutionary evidence',
                subtopics: [
                  'The fossil record and transitional forms',
                  'Radiometric dating of fossils and strata',
                  'Comparative anatomy: homologous, analogous and vestigial structures',
                  'Molecular evidence: DNA and protein sequence comparison',
                  'Biogeography and human dispersal patterns',
                ],
              },
              {
                name: 'Hominin evolution',
                subtopics: [
                  'Primate ancestry and the hominin lineage',
                  'Bipedalism as a defining adaptation',
                  'Australopithecus through Homo: habilis, erectus and sapiens',
                  'The Out of Africa model and Neanderthal admixture',
                  'Cultural and technological evolution alongside biological change',
                ],
              },
            ],
          },
        ],
      },

      // -------------------------------------------------- Mathematics Methods --
      {
        name: 'Mathematics Methods',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Unit 3: Differential calculus, integral calculus and discrete random variables',
            topics: [
              {
                name: 'Differential calculus',
                subtopics: [
                  'Second derivatives, concavity and points of inflection',
                  'Chain, product and quotient rules on harder function types',
                  'Related rates of change problems',
                  'Optimisation using stationary points and second-derivative tests',
                  'Exponential growth and decay models with applications',
                ],
              },
              {
                name: 'Integral calculus',
                subtopics: [
                  'Antiderivatives and the family of curves',
                  'Definite integrals and the fundamental theorem of calculus',
                  'Areas under curves and between two curves',
                  'Trapezoidal rule for approximate integration',
                  'Applications: displacement from velocity, total change',
                ],
              },
              {
                name: 'Discrete random variables',
                subtopics: [
                  'Probability distributions of discrete random variables',
                  'Expected value, variance and standard deviation',
                  'Bernoulli trials and the Bernoulli distribution',
                  'Binomial distribution: mean np and variance np(1-p)',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: The logarithmic function, continuous random variables and interval estimates',
            topics: [
              {
                name: 'The logarithmic function',
                subtopics: [
                  'Natural logarithm properties and laws',
                  'Derivatives of logarithmic and exponential functions',
                  'Integrals involving eˣ and 1/x forms',
                  'Solving equations with logarithms and exponentials',
                  'Logarithmic models in real contexts',
                ],
              },
              {
                name: 'Continuous random variables and the normal distribution',
                subtopics: [
                  'Probability density functions and areas as probabilities',
                  'Mean, variance, median and percentiles of continuous distributions',
                  'Standard normal distribution and z-scores',
                  'Normal probability calculations with and without technology',
                ],
              },
              {
                name: 'Interval estimates for proportions',
                subtopics: [
                  'Sample proportions as random variables',
                  'Standard error of a sample proportion',
                  'Confidence intervals for population proportions',
                  'Margin of error and the effect of sample size',
                  'Interpreting and communicating confidence intervals',
                ],
              },
            ],
          },
        ],
      },

      // ---------------------------------------------- Mathematics Applications --
      {
        name: 'Mathematics Applications',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Unit 3: Bivariate data, sequences and networks',
            topics: [
              {
                name: 'Bivariate data analysis',
                subtopics: [
                  'Scatterplots, direction and strength of association',
                  'Correlation versus causation and confounding variables',
                  'Least-squares line of best fit and its interpretation',
                  'Interpolation versus extrapolation and their dangers',
                  'Residual analysis to assess linearity',
                  'Pearson correlation coefficient r',
                ],
              },
              {
                name: 'Growth and decay in sequences',
                subtopics: [
                  'Arithmetic and geometric sequences and their recursive rules',
                  'Simple and compound interest as sequence models',
                  'Nominal versus effective interest rates',
                  'Exponential growth and decay with e',
                  'First-order recurrence relations in finance and population contexts',
                ],
              },
              {
                name: 'Graphs and networks',
                subtopics: [
                  'Network terminology: vertices, edges, degree, paths and cycles',
                  'Adjacency matrices and their interpretation',
                  'Eulerian trails and circuits',
                  'Spanning trees and minimum spanning trees (Prim and Kruskal)',
                  'Planarity and map colouring applications',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Time series, finance and decision mathematics',
            topics: [
              {
                name: 'Time series analysis',
                subtopics: [
                  'Plotting time series and describing trend, seasonality and irregular variation',
                  'Moving means and smoothing',
                  'Seasonal indices and deseasonalising data',
                  'Fitting trend lines and forecasting future values',
                ],
              },
              {
                name: 'Loans, investments and annuities',
                subtopics: [
                  'Reducing-balance loans and amortisation tables',
                  'Annuities and perpetuities as recurrence relations',
                  'Comparing investment options with effective rates',
                  'Using technology (financial solvers) for loan and annuity problems',
                ],
              },
              {
                name: 'Networks and decision mathematics',
                subtopics: [
                  'Shortest paths through networks (Dijkstra\'s algorithm)',
                  'Critical path analysis: EST, LST and float',
                  'Scheduling activities and identifying the critical path',
                  'Directed networks for one-way systems and task dependencies',
                ],
              },
            ],
          },
        ],
      },

      // ---------------------------------------------- Mathematics Specialist --
      {
        name: 'Mathematics Specialist',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Unit 3: Complex numbers, graph sketching and three-dimensional vectors',
            topics: [
              {
                name: 'Complex numbers',
                subtopics: [
                  'Cartesian and polar forms, modulus and argument',
                  'Argand diagrams and geometric interpretation',
                  "De Moivre's theorem and powers of complex numbers",
                  'Roots of unity and roots of complex numbers',
                  'Factorising polynomials over the complex field',
                ],
              },
              {
                name: 'Functions and graph sketching',
                subtopics: [
                  'Rational functions, asymptotes and discontinuities',
                  'Modulus function graphs, equations and inequalities',
                  'Sketching sums, products and quotients of functions',
                  'Transformations: dilations, reflections and translations',
                  'Sketching regions defined by inequalities',
                ],
              },
              {
                name: 'Vectors in three dimensions',
                subtopics: [
                  'Vector algebra and coordinate representation in 3D',
                  'Dot product, angle between vectors and perpendicularity',
                  'Vector projections and vector components',
                  'Vector equations of lines in space',
                  'Applications to displacement, velocity and force problems',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Integration, differential equations and statistical inference',
            topics: [
              {
                name: 'Integration and applications',
                subtopics: [
                  'Integration by substitution, by parts and with partial fractions',
                  'Areas and volumes of revolution',
                  'Applications to kinematics and work',
                  'Improper integrals as limits',
                ],
              },
              {
                name: 'Rates and differential equations',
                subtopics: [
                  'Implicit differentiation and related rates',
                  'Separable differential equations',
                  'Exponential growth, decay and Newton\'s law of cooling models',
                  'Slope fields and qualitative solution behaviour',
                  'Numerical approximation with Euler\'s method',
                ],
              },
              {
                name: 'Statistical inference',
                subtopics: [
                  'Distribution of sample means and the central limit theorem',
                  'Confidence intervals for population means',
                  'p-values and the logic of significance testing',
                  'Comparing two-sample means in practice',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]
