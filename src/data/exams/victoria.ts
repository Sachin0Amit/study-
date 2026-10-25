import type { CuratedExam } from './types'

/**
 * Australia — VCE (Victoria), curated official syllabi.
 *
 * Source: Victorian Curriculum and Assessment Authority (VCAA) study-design
 * pages and documents (vcaa.vic.edu.au), read this pass: the VCE English and
 * English as an Additional Language Study Design 2024-2027 (Units 1-2 from
 * 2023; Units 3-4 from 2024), the VCE Mathematics Study Design 2023-2027
 * (one document covering General Mathematics, Mathematical Methods,
 * Specialist Mathematics and Foundation Mathematics), the VCE Biology Study
 * Design 2022-2026, the VCE Chemistry Study Design 2023-2027 (Units 1-2
 * from 2023; Units 3-4 from 2024), the VCE Physics Study Design 2023-2027
 * (Units 1-2 from 2023; Units 3-4 from 2024) and the VCE Psychology Study
 * Design 2023-2027. Each official DOCX was downloaded from the VCAA
 * document host and its Units 3 and 4 areas of study, outcomes and key
 * knowledge bullet points read in full.
 *
 * Scope: the eight highest-enrolment VCE studies (English/EAL, General
 * Mathematics, Mathematical Methods, Specialist Mathematics, Biology,
 * Chemistry, Physics, Psychology), curated at Units 3 and 4 — the units
 * the VCAA external examinations in October-November assess, and the only
 * units that contribute to the study score used by VTAC for the ATAR.
 * Units 1 and 2 content enters the map only where a Units 3-4 key-knowledge
 * bullet assumes it. Foundation Mathematics, English Language, Literature,
 * humanities and language studies are excluded as outside the library's
 * teaching scope (matching the NSW HSC file's exclusion note).
 *
 * Assessment structure (VCAA assessment pages + study designs): English/EAL
 * School-assessed Coursework Unit 3 25% + Unit 4 25% + one written
 * examination 50%; Biology, Chemistry and Psychology 20% + 30% + 50%;
 * General Mathematics SAC 40% with Exam 1 (technology-free) 30% + Exam 2
 * (technology-active) 30%; Mathematical Methods and Specialist Mathematics
 * SAC 40% with Exam 1 20% + Exam 2 40%.
 */

export const VICTORIA_EXAMS: CuratedExam[] = [
  {
    id: 'vce',
    name: 'VCE',
    fullName: 'Victorian Certificate of Education',
    aliases: [
      'vce',
      'victoria vce',
      'vce victoria',
      'victorian certificate of education',
      'vcaa exam',
      'australia vce',
      'vce exam',
      'vce atar',
    ],
    region: 'Australia',
    category: 'School-leaving subject exam',
    popularity: 61,
    syllabusVerified: '2026-10-26',
    website: 'https://www.vcaa.vic.edu.au',
    overview: {
      conductor: 'Victorian Curriculum and Assessment Authority (VCAA)',
      level: 'Years 11-12 → study score → ATAR via VTAC',
      stages: ['Units 1 and 2 (school-assessed)', 'Units 3 and 4 (school-assessed coursework + VCAA external examinations)'],
      papers: ['Per-study written examinations (General Mathematics and Mathematical Methods two papers each: technology-free Exam 1 and technology-active Exam 2)'],
      duration: 'External written examinations in October-November (English opens the written-exam period)',
      marking: 'Unit 3 and 4 School-assessed Coursework statistically moderated against the examination; study score reported relative to the state cohort (mean 30), scaled by VTAC into the ATAR',
      questionTypes: ['Multiple choice', 'Short answer', 'Extended response', 'Analytical essays (English)', 'Scientific-poster-linked investigation questions (sciences)'],
      notes:
        'Content follows the eight highest-enrolment studies at Units 3 and 4 by their official area-of-study, outcome and key-knowledge names from the current VCAA study designs (English/EAL 2024-2027, Mathematics 2023-2027, Biology 2022-2026, Chemistry 2023-2027, Physics 2023-2027, Psychology 2023-2027). Each science study also carries a student-designed scientific investigation assessed as a scientific poster; its methodology is taught in the corresponding Knowledge-University research-methods lessons.',
    },
    sources: [
      { title: 'VCAA — VCE English and English as an Additional Language Study Design 2024-2027', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/english-and-english-additional-language/english-and-english-additional-language-eal', host: 'vcaa.vic.edu.au' },
      { title: 'VCAA — VCE Mathematics Study Design 2023-2027 (General, Methods, Specialist)', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/mathematical-methods/vce-mathematical-methods', host: 'vcaa.vic.edu.au' },
      { title: 'VCAA — VCE Biology Study Design 2022-2026', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/biology/biology', host: 'vcaa.vic.edu.au' },
      { title: 'VCAA — VCE Chemistry Study Design 2023-2027', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/chemistry/chemistry', host: 'vcaa.vic.edu.au' },
      { title: 'VCAA — VCE Physics Study Design 2023-2027', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/physics/physics', host: 'vcaa.vic.edu.au' },
      { title: 'VCAA — VCE Psychology Study Design 2023-2027', url: 'https://www.vcaa.vic.edu.au/curriculum/vce-curriculum/vce-study-designs/psychology/vce-psychology', host: 'vcaa.vic.edu.au' },
      { title: 'VCAA — VCE examination specifications, past examinations and reports', url: 'https://www.vcaa.vic.edu.au/assessment/vce-assessment/past-examinations/Pages/Index.aspx', host: 'vcaa.vic.edu.au' },
    ],
    subjects: [
      // ---------------------------------------------------------- English --
      {
        name: 'English and EAL',
        mappedSubjectId: 'english',
        weightage: 14,
        units: [
          {
            name: 'Unit 3: Reading and Creating Texts',
            topics: [
              {
                name: 'Reading and responding to texts',
                subtopics: [
                  'Analysing ideas, concerns and conflicts in a set text',
                  "Characters' motivations, tensions in relationships, settings and point of view",
                  'Vocabulary, text structures and language features and how they make meaning',
                  'Historical context and the social and cultural values of a text',
                  'Sustained analytical writing with metalanguage and integrated evidence',
                ],
              },
              {
                name: 'Creating texts: imaginative, persuasive and reflective writing',
                subtopics: [
                  'Imaginative, persuasive, informative and reflective modes of writing',
                  'Adapting vocabulary, text structures and language features for purpose, audience and context',
                  'Commentary reflecting on writing processes and authorial choices',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Reading and Analysing Argument',
            topics: [
              {
                name: 'Reading and responding to texts (Unit 4 study)',
                subtopics: [
                  'Analysing explicit and implicit ideas and values in a second set text',
                  'How texts position readers and are understood by different audiences',
                  'Refined analytical writing: planning, editing and refined essay structure',
                ],
              },
              {
                name: 'Analysing argument',
                subtopics: [
                  'Contention, supporting arguments, sequence and structure in media texts',
                  'Persuasive language techniques and their effects on intended audiences',
                  'The role of visuals in supporting and augmenting argument',
                  'Print, digital, audio and audio-visual text features',
                  'Developing and presenting a point-of-view text: rebuttal and respectful disagreement',
                ],
              },
            ],
          },
        ],
      },
      // ---------------------------------------------- Mathematical Methods --
      {
        name: 'Mathematical Methods',
        mappedSubjectId: 'mathematics',
        weightage: 13,
        units: [
          {
            name: 'Area of Study 1: Functions, Relations and Graphs',
            topics: [
              {
                name: 'Graphs of elementary functions and transformations',
                subtopics: [
                  'Polynomial, power, exponential, logarithmic and circular functions and their key features',
                  'Transformations f(x) to af(bx)+c and families of transformed functions',
                  'Modelling with piecewise (hybrid) functions',
                  'Sum, difference, product and composite functions',
                ],
              },
            ],
          },
          {
            name: 'Area of Study 2: Algebra, Number and Structure',
            topics: [
              {
                name: 'Equations, inverses and composition of functions',
                subtopics: [
                  'Polynomial equations with real coefficients and numerical solution methods',
                  'Inverse functions and solving equations with inverses',
                  'Composition of functions f(g(x))',
                  'Systems of simultaneous linear equations and their geometric interpretation',
                ],
              },
            ],
          },
          {
            name: 'Area of Study 3: Calculus',
            topics: [
              {
                name: 'Differentiation and its applications',
                subtopics: [
                  'Derivatives of polynomial, exponential, logarithmic and circular functions',
                  'Product, quotient and chain rules',
                  'Graph sketching: stationary points, points of inflection and concavity',
                  'Optimisation problems and interval endpoint maxima and minima',
                  'Rates of change and kinematics applications',
                ],
              },
              {
                name: 'Anti-differentiation and integration',
                subtopics: [
                  'Anti-derivatives and the fundamental theorem of calculus',
                  'Definite integrals, areas under curves and simple areas between curves',
                  'Trapezium rule approximation of definite integrals',
                  'Finding a function from a known rate of change with a boundary condition',
                  'Average value of a function',
                ],
              },
            ],
          },
          {
            name: 'Area of Study 4: Data Analysis, Probability and Statistics',
            topics: [
              {
                name: 'Discrete random variables and the binomial distribution',
                subtopics: [
                  'Probability mass functions, mean, variance and standard deviation',
                  'Bernoulli trials and the binomial distribution Bi(n, p)',
                  'Effect of parameter changes on probability distributions',
                ],
              },
              {
                name: 'Sample proportions and confidence intervals',
                subtopics: [
                  'Distribution of sample proportions',
                  'Confidence intervals for population proportions',
                  'Margin of error and interpretation in context',
                ],
              },
            ],
          },
        ],
      },
      // -------------------------------------------- Specialist Mathematics --
      {
        name: 'Specialist Mathematics',
        mappedSubjectId: 'mathematics',
        weightage: 11,
        units: [
          {
            name: 'Area of Study 1: Discrete Mathematics',
            topics: [
              {
                name: 'Logic and proof',
                subtopics: [
                  'Conjectures, connectives, quantifiers and counter-examples',
                  'Direct proof, proof by contraposition and proof by contradiction',
                  'Proof by mathematical induction',
                ],
              },
            ],
          },
          {
            name: 'Area of Study 2: Functions, Relations and Graphs',
            topics: [
              {
                name: 'Rational functions and partial fractions',
                subtopics: [
                  'Graphs of quotient functions and their asymptotic behaviour',
                  'Partial fraction decomposition of low-degree rational functions',
                  'Nature and location of stationary points and points of inflection',
                ],
              },
            ],
          },
          {
            name: 'Area of Study 3: Algebra, Number and Structure',
            topics: [
              {
                name: 'Complex numbers',
                subtopics: [
                  'Cartesian and polar forms, modulus and argument',
                  "De Moivre's theorem, powers and roots of complex numbers",
                  'Polynomial equations over C and the conjugate root theorem',
                  'Fundamental theorem of algebra (informal treatment)',
                ],
              },
            ],
          },
          {
            name: 'Area of Study 4: Calculus',
            topics: [
              {
                name: 'Differential equations and advanced calculus',
                subtopics: [
                  'Differentiation and integration of combinations of functions',
                  'Arc length, areas and volumes of solids of revolution',
                  'Differential equations and Eulers method',
                  'Kinematics: rectilinear motion with derivative forms for acceleration',
                ],
              },
            ],
          },
          {
            name: 'Area of Study 5: Space and Measurement',
            topics: [
              {
                name: 'Vectors',
                subtopics: [
                  'Vector arithmetic, linear dependence and independence',
                  'Vector, parametric and Cartesian equations of lines and planes',
                  'Vector calculus applied to motion in a plane and three dimensions',
                  'Geometric proofs using vectors',
                ],
              },
            ],
          },
          {
            name: 'Area of Study 6: Data Analysis, Probability and Statistics',
            topics: [
              {
                name: 'Statistical inference: hypothesis tests and confidence intervals',
                subtopics: [
                  'Hypothesis tests for proportions and means',
                  'Confidence intervals and margins of error',
                  'Type I and Type II errors',
                  'Simulation to approximate sampling distributions',
                ],
              },
            ],
          },
        ],
      },
      // ------------------------------------------------ General Mathematics --
      {
        name: 'General Mathematics',
        mappedSubjectId: 'mathematics',
        weightage: 13,
        units: [
          {
            name: 'Unit 3: Data Analysis, Probability and Statistics',
            topics: [
              {
                name: 'Investigating data distributions',
                subtopics: [
                  'Types of data, dot plots, stem plots, histograms and boxplots',
                  'Five-number summary, interquartile range and outlier fences',
                  'Normal model, the 68-95-99.7 rule and standardised z-scores',
                  'Logarithmic scales for data spanning orders of magnitude',
                ],
              },
              {
                name: 'Investigating associations between two variables: scatterplots, correlation and causation',
                subtopics: [
                  'Response and explanatory variables',
                  'Two-way frequency tables and segmented bar charts',
                  'Scatterplots: direction, form and strength of association',
                  'Pearson correlation coefficient r and the distinction from causation',
                ],
              },
              {
                name: 'Investigating and modelling linear associations',
                subtopics: [
                  'Least squares regression line and residuals',
                  'Interpolation, extrapolation and limitations',
                  'Data transformation and goodness of fit',
                ],
              },
              {
                name: 'Investigating and modelling time series: trend, seasonality and smoothing',
                subtopics: [
                  'Time series plots, trend lines and description over time',
                  'Seasonality, seasonal indices and deseasonalising data',
                  'Moving means and moving medians for smoothing',
                  'Forecasting and prediction from fitted trends',
                ],
              },
            ],
          },
          {
            name: 'Unit 3: Discrete Mathematics — Recursion and Financial Modelling',
            topics: [
              {
                name: 'Recursion and financial modelling: loans, annuities and depreciation',
                subtopics: [
                  'First-order linear recurrence relations for growth and decay',
                  'Simple and compound interest, nominal and effective interest rates',
                  'Reducing balance loans, amortisation tables and annuities',
                  'Perpetuities and annuity investments',
                  'Flat rate, unit cost and reducing balance depreciation of assets',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Discrete Mathematics — Matrices',
            topics: [
              {
                name: 'Matrices and their applications',
                subtopics: [
                  'Matrix order, types of matrices and elementary matrix operations',
                  'Inverse matrices, determinants and the invertibility condition',
                  'Transition matrices, steady state and population applications',
                  'Communication and dominance matrices',
                ],
              },
            ],
          },
          {
            name: 'Unit 4: Discrete Mathematics — Networks and Decision Mathematics',
            topics: [
              {
                name: 'Graphs, trails, paths and circuits',
                subtopics: [
                  'Vertices, edges, degree, isomorphic and connected graphs',
                  "Adjacency matrices and Euler's formula for planar graphs",
                  'Walks, trails, Eulerian trails and circuits',
                  'Hamiltonian paths and cycles',
                ],
              },
              {
                name: 'Minimum connector, shortest path and flow problems',
                subtopics: [
                  'Trees, spanning trees and minimum spanning trees',
                  "Prim's algorithm for minimum connectors",
                  "Dijkstra's algorithm for shortest paths",
                  'Minimum cut and maximum flow theorem',
                ],
              },
              {
                name: 'Scheduling and matching problems',
                subtopics: [
                  'Critical path analysis: earliest and latest start times and float',
                  'The Hungarian algorithm for the matching problem',
                ],
              },
            ],
          },
        ],
      },
      // ------------------------------------------------------------ Biology --
      {
        name: 'Biology',
        mappedSubjectId: 'ku-life-sciences-biology',
        weightage: 13,
        units: [
          {
            name: 'Unit 3 Area of Study 1: Nucleic Acids and Proteins',
            topics: [
              {
                name: 'Nucleic acids, the genetic code and gene expression',
                subtopics: [
                  'DNA structure and the three main forms of RNA',
                  'The universal, degenerate triplet genetic code',
                  'Transcription, RNA processing and translation by ribosomes',
                  'Exons, introns and the trp operon as gene regulation',
                  'Protein structure levels, the proteome and the secretory pathway',
                ],
              },
              {
                name: 'DNA manipulation techniques and applications',
                subtopics: [
                  'Polymerase, ligase and endonucleases used to manipulate DNA',
                  'CRISPR-Cas9 and the editing of an organisms genome',
                  'Polymerase chain reaction and gel electrophoresis for DNA profiling',
                  'Recombinant plasmids, transformed bacteria and transgenic crops',
                ],
              },
            ],
          },
          {
            name: 'Unit 3 Area of Study 2: Biochemical Pathways',
            topics: [
              {
                name: 'Enzymes, coenzymes and the regulation of biochemical pathways',
                subtopics: [
                  'Enzymes and coenzymes in metabolic pathways',
                  'Temperature, pH and competitive and non-competitive inhibitors',
                  'The general structure of pathways from reactant to product',
                ],
              },
              {
                name: 'Photosynthesis as a biochemical pathway',
                subtopics: [
                  'Light-dependent and light-independent stages in C3 plants',
                  'Rubisco and the C3, C4 and CAM adaptations',
                  'Factors affecting the rate of photosynthesis',
                ],
              },
              {
                name: 'Cellular respiration as a biochemical pathway',
                subtopics: [
                  'Glycolysis, the Krebs cycle and the electron transport chain',
                  'Anaerobic fermentation in animals and yeasts compared',
                  'Factors affecting the rate of cellular respiration',
                ],
              },
              {
                name: 'Biotechnological applications of biochemical pathways',
                subtopics: [
                  'CRISPR-Cas9 to improve photosynthetic efficiency and crop yields',
                  'Anaerobic fermentation of biomass for biofuel production',
                ],
              },
            ],
          },
          {
            name: 'Unit 4 Area of Study 1: Responding to Pathogens',
            topics: [
              {
                name: 'Responding to antigens',
                subtopics: [
                  'Physical, chemical and microbiota barriers in animals and plants',
                  'The innate immune response and the inflammatory steps',
                  'Antigen presentation, self and non-self antigens and allergens',
                ],
              },
              {
                name: 'Acquiring immunity',
                subtopics: [
                  'The lymphatic system and lymph nodes in immune response',
                  'B lymphocytes, antibodies, helper T and cytotoxic T cells',
                  'Natural and artificial, active and passive immunity',
                ],
              },
              {
                name: 'Disease challenges and strategies',
                subtopics: [
                  'Emerging and re-emerging pathogens in a globally connected world',
                  'Vaccination programs and herd immunity',
                  'Monoclonal antibodies and immunotherapy for autoimmune disease and cancer',
                ],
              },
            ],
          },
          {
            name: 'Unit 4 Area of Study 2: Species Relatedness and Change',
            topics: [
              {
                name: 'Genetic changes in populations over time',
                subtopics: [
                  'Selection pressures, genetic drift and gene flow',
                  'Selective breeding and manipulation of gene pools',
                  'Antibiotic resistance and viral antigenic drift and shift',
                ],
              },
              {
                name: 'Changes in species over time and their relatedness',
                subtopics: [
                  'Fossil record, transitional fossils, relative and absolute dating',
                  'Structural morphology and molecular homology as relatedness evidence',
                  'Phylogenetic trees and their interpretation',
                  'Allopatric and sympatric speciation examples',
                ],
              },
              {
                name: 'Human change over time: hominins and human migration',
                subtopics: [
                  'Shared characteristics of mammals, primates, hominoids and hominins',
                  'Trends in hominin evolution: brain size and limb structure',
                  'The contested human fossil record and interbreeding with Neanderthals',
                  'mtDNA and whole-genome evidence for human migration',
                ],
              },
            ],
          },
          {
            name: 'Unit 4 Area of Study 3: Scientific Inquiry',
            topics: [
              {
                name: 'Scientific investigation and the scientific poster',
                subtopics: [
                  'Investigation design: variables, methodology and method',
                  'Generating, organising and analysing primary data',
                  'Accuracy, precision, repeatability, reproducibility and validity',
                  'Conventions of science communication and poster presentation',
                ],
              },
            ],
          },
        ],
      },
      // ---------------------------------------------------------- Chemistry --
      {
        name: 'Chemistry',
        mappedSubjectId: 'chemistry',
        weightage: 13,
        units: [
          {
            name: 'Unit 3 Area of Study 1: Supplying Energy',
            topics: [
              {
                name: 'Carbon-based fuels',
                subtopics: [
                  'Fossil fuels and biofuels and their renewability',
                  'Carbohydrates, proteins and lipids as fuel sources in kJ per gram',
                  'Photosynthesis and cellular respiration as energy conversions',
                  'Complete and incomplete combustion and thermochemical equations',
                  'Exothermic and endothermic reactions and enthalpy profile diagrams',
                ],
              },
              {
                name: 'Measuring changes in chemical reactions',
                subtopics: [
                  'Stoichiometry, limiting reactants and greenhouse gas quantities',
                  'Solution calorimetry, calibration factor and heat loss',
                  'Specific heat capacity of water and energy transformation efficiency',
                  'Mass-mass and volume-volume stoichiometry at SLC',
                ],
              },
              {
                name: 'Primary galvanic cells and fuel cells',
                subtopics: [
                  'Oxidation numbers, half-equations and conjugate redox pairs',
                  'Design and operation of primary galvanic cells and electrode polarities',
                  'The electrochemical series and predicting redox reactions',
                  'Fuel cells, porous electrodes and Faradays laws',
                ],
              },
            ],
          },
          {
            name: 'Unit 3 Area of Study 2: Rate and Yield Optimisation',
            topics: [
              {
                name: 'Reaction rates and equilibrium systems',
                subtopics: [
                  'Collision theory and factors affecting reaction rate',
                  "Le Chatelier's principle and equilibrium expressions",
                  'Reaction quotient, equilibrium constant and yield optimisation',
                ],
              },
              {
                name: 'Electrolysis and secondary cells',
                subtopics: [
                  'Electrolytic cells, electroplating and anodising',
                  'Faradays laws applied to electrolytic production',
                  'Rechargeable secondary cells and their operation',
                ],
              },
            ],
          },
          {
            name: 'Unit 4 Area of Study 1: Organic Compounds and Synthesis',
            topics: [
              {
                name: 'Structure, nomenclature and properties of organic compounds',
                subtopics: [
                  'IUPAC systematic naming up to C8 with two functional groups',
                  'Haloalkanes, amines, alcohols, aldehydes, ketones, carboxylic acids and esters',
                  'Structural isomers and properties of organic families',
                ],
              },
              {
                name: 'Reactions and synthesis pathways',
                subtopics: [
                  'Esterification between an alcohol and a carboxylic acid',
                  'Designing reaction pathways for organic synthesis',
                  'Green chemistry principles and renewable feedstocks',
                  'Food metabolism: hydrolysis of carbohydrates and proteins',
                ],
              },
            ],
          },
          {
            name: 'Unit 4 Area of Study 2: Analysis and Medicines',
            topics: [
              {
                name: 'Laboratory analysis of organic compounds',
                subtopics: [
                  'Qualitative tests for functional groups',
                  'Redox titrations, volumetric analysis and back titrations',
                  'Distillation, solvent extraction and product purity',
                ],
              },
              {
                name: 'Instrumental analysis and medicines',
                subtopics: [
                  'HPLC, retention times and calibration curves',
                  'Mass spectrometry, infrared and NMR spectroscopy for structure determination',
                  'Medicines that bind enzyme active sites and inhibit their action',
                ],
              },
            ],
          },
          {
            name: 'Unit 4 Area of Study 3: Scientific Inquiry',
            topics: [
              {
                name: 'Scientific investigation and the scientific poster',
                subtopics: [
                  'Investigation design for synthesis or analysis of organic compounds',
                  'Generating and analysing primary data with accuracy and validity',
                  'Conventions of science communication and poster presentation',
                ],
              },
            ],
          },
        ],
      },
      // ------------------------------------------------------------ Physics --
      {
        name: 'Physics',
        mappedSubjectId: 'physics',
        weightage: 13,
        units: [
          {
            name: 'Unit 3 Area of Study 1: Motion in Two Dimensions',
            topics: [
              {
                name: 'Newtons laws and motion in one and two dimensions',
                subtopics: [
                  "Newton's three laws with coplanar forces along a line and in two dimensions",
                  'Uniform circular motion: banked tracks, strings and vertical circles',
                  'Projectile motion near Earths surface and air resistance',
                  'Impulse F t = m v and momentum conservation in collisions',
                  'Work, kinetic, elastic and gravitational potential energy',
                ],
              },
            ],
          },
          {
            name: 'Unit 3 Area of Study 2: Fields and Contactless Forces',
            topics: [
              {
                name: 'Gravitational, electric and magnetic field models',
                subtopics: [
                  'Field directions, shapes, dipoles and monopoles compared',
                  'Inverse square law fields of point masses and charges',
                  'Bar magnets, current-carrying wires, loops and solenoids',
                  'Potential energy changes for masses and charges in fields',
                ],
              },
              {
                name: 'Effects of fields and their applications',
                subtopics: [
                  'Accelerating charges: W = qV, E = V/d and F = qE',
                  'Magnetic force on moving charges F = qvB and circular paths',
                  'Satellite motion modelled as uniform circular motion',
                  'Simple DC motors, split ring commutators and torque',
                  'Particle accelerators and synchrotrons',
                ],
              },
            ],
          },
          {
            name: 'Unit 3 Area of Study 3: Electricity Generation',
            topics: [
              {
                name: 'Generation of electricity',
                subtopics: [
                  'Magnetic flux and induced emf in coils',
                  'AC alternators, DC generators and commutators versus slip rings',
                  'Photovoltaic cells and the inverter DC-to-AC conversion',
                ],
              },
              {
                name: 'Transmission of electricity',
                subtopics: [
                  'Sinusoidal AC voltages: peak-to-peak and root-mean-square values',
                  'Transformer action and the ideal transformer equations',
                  'Transmission losses across power lines',
                ],
              },
            ],
          },
          {
            name: 'Unit 4 Area of Study 1: Light, Matter and Relativity',
            topics: [
              {
                name: 'Light as a wave',
                subtopics: [
                  'Electromagnetic waves produced by accelerating charges',
                  'Standing waves and diffraction through gaps and around obstacles',
                  "Young's double slit experiment and interference path differences",
                ],
              },
              {
                name: 'Light as a particle and matter as waves',
                subtopics: [
                  'Photon energy E = hf and the photoelectric effect',
                  'Electron diffraction and the de Broglie wavelength',
                  'Photon and matter momentum p = h/lambda compared',
                  'Atomic absorption and emission line spectra',
                  'Single photon and electron double slit experiments',
                ],
              },
              {
                name: 'Einsteinian relativity and mass-energy',
                subtopics: [
                  "Einstein's two postulates and the Michelson-Morley null result",
                  'Proper time and proper length',
                  'Time dilation and length contraction with the Lorentz factor',
                  'Muons, GPS satellites and accelerator design as relativistic examples',
                  'Mass-energy equivalence in the Sun and particle accelerators',
                ],
              },
            ],
          },
          {
            name: 'Unit 4 Area of Study 2: Scientific Inquiry',
            topics: [
              {
                name: 'Scientific investigation and the scientific poster',
                subtopics: [
                  'Designing an investigation with one continuous independent variable',
                  'Generating and analysing primary data on fields, motion or light',
                  'Uncertainty, limitations and evaluation of methodology',
                  'Scientific poster structure and communication',
                ],
              },
            ],
          },
        ],
      },
      // --------------------------------------------------------- Psychology --
      {
        name: 'Psychology',
        mappedSubjectId: 'ku-psychology',
        weightage: 10,
        units: [
          {
            name: 'Unit 3 Area of Study 1: Nervous System and Stress',
            topics: [
              {
                name: 'Nervous system and neural transmission',
                subtopics: [
                  'Central and peripheral nervous systems and spinal reflexes',
                  'Neurotransmitters: glutamate and GABA as excitatory and inhibitory signals',
                  'Neuromodulators such as dopamine and serotonin',
                  'Synaptic plasticity: long-term potentiation and long-term depression',
                ],
              },
              {
                name: 'Stress as a psychobiological process',
                subtopics: [
                  'Internal and external stressors and the flight-or-fight-or-freeze response',
                  'Cortisol and the effects of chronic stress',
                  'The gut brain axis: microbiota, stress and the nervous system',
                  "Selye's General Adaptation Syndrome: alarm, resistance and exhaustion",
                  "Lazarus and Folkman's Transactional Model of Stress and Coping",
                  'Approach and avoidance coping strategies and coping flexibility',
                ],
              },
            ],
          },
          {
            name: 'Unit 3 Area of Study 2: Learning and Memory',
            topics: [
              {
                name: 'Behaviourist approaches: classical and operant conditioning',
                subtopics: [
                  'Classical conditioning as a three-phase process',
                  'Operant conditioning: antecedent, behaviour and consequence',
                  'Positive and negative reinforcement and punishment',
                ],
              },
              {
                name: 'Observational learning: attention, retention, reproduction, motivation and reinforcement',
                subtopics: [
                  'Bandura\'s Bobo doll experiments and vicarious reinforcement',
                  'Aboriginal and Torres Strait Islander ways of knowing and learning on Country',
                ],
              },
              {
                name: 'Memory and the multi-store model',
                subtopics: [
                  'The Atkinson-Shiffrin multi-store model of memory',
                  'Hippocampus, amygdala, neocortex, basal ganglia and cerebellum in memory',
                  'Episodic and semantic memory and constructing imagined futures',
                  'Mnemonics: method of loci, acronyms, acrostics and songlines',
                ],
              },
            ],
          },
          {
            name: 'Unit 4 Area of Study 1: Sleep',
            topics: [
              {
                name: 'Sleep as a psychological construct: REM and NREM sleep',
                subtopics: [
                  'REM and NREM sleep as a naturally occurring altered state of consciousness',
                  'Measurement: EEG, EMG, EOG, sleep diaries and video monitoring',
                ],
              },
              {
                name: 'Regulating sleep and sleep deprivation',
                subtopics: [
                  'Circadian and ultradian rhythms, the suprachiasmatic nucleus and melatonin',
                  'Sleep demands across the life span',
                  'Effects of partial and full sleep deprivation on affect, behaviour and cognition',
                  'Circadian rhythm disorders: DSPS, ASPD and shift work',
                  'Bright light therapy, sleep hygiene and zeitgebers',
                ],
              },
            ],
          },
          {
            name: 'Unit 4 Area of Study 2: Mental Wellbeing',
            topics: [
              {
                name: 'Mental wellbeing as a multidimensional construct',
                subtopics: [
                  'Levels of functioning, resilience and social and emotional wellbeing',
                  'Mental wellbeing as a fluctuating continuum',
                  'Cultural determinants and self-determination for Aboriginal and Torres Strait Islander peoples',
                ],
              },
              {
                name: 'Specific phobia: development and interventions',
                subtopics: [
                  'GABA dysfunction and long-term potentiation as biological contributors',
                  'Classical conditioning precipitation and operant perpetuation',
                  'Memory bias and catastrophic thinking as cognitive biases',
                  'Environmental triggers and stigma around seeking treatment',
                  'Benzodiazepines as GABA agonists and breathing retraining',
                  'CBT, systematic desensitisation and psychoeducation',
                ],
              },
            ],
          },
          {
            name: 'Unit 4 Area of Study 3: Scientific Inquiry',
            topics: [
              {
                name: 'Scientific investigation and research methods',
                subtopics: [
                  'Independent, dependent and controlled variables in psychological research',
                  'Accuracy, precision, repeatability, reproducibility and validity',
                  'Health, safety and ethical guidelines in psychological research',
                  'Organising, analysing and evaluating primary data',
                  'Conventions of scientific poster presentation',
                ],
              },
            ],
          },
        ],
      },
    ],
  },
]
