import type { CuratedExam } from './types'

/**
 * Japan exams — curated official syllabi.
 *
 * Source: JASSO (Japan Student Services Organization) EJU pages —
 * Guidelines for 2026 EJU (subjects, scores, format) and the EJU syllabus
 * pages for Mathematics (topics 1-20, Course 1 = 1-7, Course 2 = 1-20) and
 * Japan and the World (sections I-III), both as applied from the 2026 EJU
 * 1st Session. Science topics follow the JASSO Physics/Chemistry/Biology
 * syllabus scope (Japanese high-school curriculum level).
 */

export const JAPAN_EXAMS: CuratedExam[] = [
  {
    id: 'eju',
    name: 'EJU',
    fullName: 'Examination for Japanese University Admission for International Students',
    aliases: ['eju exam', 'japanese university admission exam', 'ryugaku shiken', 'jasso eju'],
    region: 'Japan',
    category: 'University admission (international students)',
    popularity: 58,
    syllabusVerified: '2026-10-22',
    website: 'https://www.jasso.go.jp/en/ryugaku/eju/examinee/syllabus/index.html',
    overview: {
      conductor: 'JASSO (Japan Student Services Organization)',
      level: 'International students seeking undergraduate admission to Japanese universities',
      stages: ['Two sessions per year (June and November) — Japanese universities use EJU scores for admission screening'],
      papers: ['Japanese as a Foreign Language (125 min)', 'Science — choose 2 of Physics, Chemistry, Biology (80 min)', 'Japan and the World (80 min)', 'Mathematics — Course 1 or Course 2 (80 min)'],
      duration: 'Per-subject sittings in one day; candidates take the subjects their target university requires',
      marking: 'Scaled scores: Japanese 0-400 + Writing 0-50; Science 0-200; Japan and the World 0-200; Mathematics 0-200',
      negativeMarking: 'None (multiple-choice marking with scaled scoring)',
      questionTypes: ['MCQ (4 options) for all subjects except the Japanese writing section'],
      notes:
        'Examinees may not take both the Science test and the Japan and the World test. Mathematics Course 1 (liberal-arts programmes) covers topics 1-7 of the official list; Course 2 (science programmes) covers topics 1-20. The revised syllabus applies from the 2026 EJU 1st Session. Japanese as a Foreign Language is administered in Japanese only; other subjects are available in Japanese or English.',
    },
    sources: [
      { title: 'JASSO — Guidelines for 2026 EJU', url: 'https://www.jasso.go.jp/en/ryugaku/eju/about/eju_guide/2026.html', host: 'jasso.go.jp' },
      { title: 'JASSO — EJU Syllabus index', url: 'https://www.jasso.go.jp/en/ryugaku/eju/examinee/syllabus/index.html', host: 'jasso.go.jp' },
      { title: 'JASSO — EJU Syllabus for Mathematics (2026 1st Session)', url: 'https://www.jasso.go.jp/en/ryugaku/eju/examinee/syllabus/mathematics.html', host: 'jasso.go.jp' },
      { title: 'JASSO — EJU Syllabus for Japan and the World (2026 1st Session)', url: 'https://www.jasso.go.jp/en/ryugaku/eju/examinee/syllabus/japan_theworld.html', host: 'jasso.go.jp' },
    ],
    subjects: [
      {
        name: 'Japanese as a Foreign Language',
        weightage: 40,
        units: [
          {
            name: 'Academic Japanese',
            topics: [
              { name: 'Writing (short essay)', subtopics: ['Composing a structured essay of about 400-500 characters on a given topic'] },
              { name: 'Reading comprehension', subtopics: ['Reading academic and everyday texts — gist, detail and information location'] },
              { name: 'Listening and Listening-Reading Comprehension', subtopics: ['Following lectures and conversations, combining audio with written material'] },
            ],
          },
        ],
      },
      {
        name: 'Science',
        weightage: 20,
        units: [
          {
            name: 'Physics (Science test option)',
            topics: [
              { name: 'Motion and force', subtopics: ['Projectile and circular motion, momentum and its conservation', 'Forces, friction and simple harmonic motion'] },
              { name: 'Work, energy and heat', subtopics: ['Work, mechanical energy and its conservation', 'Temperature, heat and the behaviour of gases'] },
              { name: 'Waves: sound and light', subtopics: ['Wave properties, reflection, refraction, interference and diffraction'] },
              { name: 'Electricity and magnetism', subtopics: ['Electric fields, D.C. circuits and capacitance', 'Magnetic fields, electromagnetic induction and alternating current'] },
              { name: 'Atoms and radiation', subtopics: ['Radioactive decay, nuclear reactions and elementary particles'] },
            ],
          },
          {
            name: 'Chemistry (Science test option)',
            topics: [
              { name: 'Composition of matter and stoichiometry', subtopics: ['Atoms, molecules and ions, amount of substance and calculations'] },
              { name: 'Atomic structure and the periodic table', subtopics: ['Electron configuration, periodic trends, groups of elements'] },
              { name: 'Chemical bonds and states of matter', subtopics: ['Ionic, covalent and metallic bonding', 'Gas laws, solutions, concentration and colligative properties'] },
              { name: 'Chemical reactions: rates, heat and equilibrium', subtopics: ['Reaction rates and catalysis, exothermic and endothermic changes', 'Chemical equilibrium and Le Chatelier shifts'] },
              { name: 'Acids, bases, salts and redox', subtopics: ['Neutralisation and titration, pH of aqueous solutions', 'Oxidation-reduction, electrochemical cells and electrolysis'] },
              { name: 'Organic compounds', subtopics: ['Hydrocarbons and functional groups, isomerism, characteristic reactions'] },
            ],
          },
          {
            name: 'Biology (Science test option)',
            topics: [
              { name: 'Cells and their function', subtopics: ['Cell structure and organelles, cell division — mitosis and meiosis'] },
              { name: 'Reproduction and development', subtopics: ['Sexual reproduction, gamete formation, embryonic development'] },
              { name: 'Genes and protein synthesis', subtopics: ['DNA structure, transcription and translation, genetic variation'] },
              { name: 'Homeostasis: nervous, hormonal and immune systems', subtopics: ['Nerve conduction and reflexes, hormone action', 'Body-fluid regulation, immunity and defence'] },
              { name: 'Ecosystems', subtopics: ['Energy flow, material cycles, populations and communities'] },
            ],
          },
        ],
      },
      {
        name: 'Japan and the World',
        weightage: 20,
        units: [
          {
            name: 'Politics, Economy, Society',
            topics: [
              { name: 'Democratic government and Japan\'s system of government', subtopics: ['Principles of democracy and political systems around the world', 'Diet, cabinet and courts; the Constitution of Japan and fundamental human rights', 'Elections, political parties and local autonomy'] },
              { name: 'International politics and law', subtopics: ['The United Nations, changes in the structure of international relations, regional conflicts', 'Territorial issues, migration and refugees, nuclear disarmament, international law'] },
              { name: 'The market economy and economic agents', subtopics: ['Market mechanisms, market efficiency and market failure', 'Households, firms and government; the development of capitalism and economic theories'] },
              { name: 'The national economy, finance and public finance', subtopics: ['System of National Accounts, economic growth, price levels, nominal and real values', 'Central banking and monetary policy, fiscal policy, revenue and expenditure', 'Social security, ageing populations and declining birth rates'] },
              { name: 'Japan\'s economic history, industries and the international economy', subtopics: ['Postwar reforms and the period of rapid economic growth', 'Industrial structure, agriculture and small and medium-sized enterprises', 'Foreign exchange, trade, balance of payments, regional economic integration, globalisation'] },
              { name: 'Contemporary society: environment, law, labour and information', subtopics: ['Pollution, global environmental issues, resources and energy', 'Private law and contracts, consumer protection, labour rights and working conditions', 'ICT developments, media literacy, biotechnology, human rights, poverty and sustainability'] },
            ],
          },
          {
            name: 'Geography',
            topics: [
              { name: 'Thinking geographically about the modern world', subtopics: ['Maps, distances, standard time, GIS technology', 'Climate, topography, vegetation and soils; lifestyles, cultures and religions', 'Population, urban and rural settlement, traffic and telecommunication, global issues'] },
              { name: 'Regions of the modern world', subtopics: ['Basic aspects of regional geography; land and the environment in Japan, disaster prevention'] },
            ],
          },
          {
            name: 'History',
            topics: [
              { name: 'Modernization and its impact', subtopics: ['Industrial Revolution and the establishment of capitalism', 'American War of Independence, French Revolution, Congress of Vienna and the restructuring of Europe', 'Imperialism and colonization, Japan in a changing Asia'] },
              { name: 'The two world wars and their impact', subtopics: ['World War I and the Russian Revolution, the Versailles system', 'The Great Depression, World War II and the postwar international order', 'Decolonization in Asia and Africa, the Cold War, the rise of the Third World, oil crises'] },
              { name: 'The post-Cold War world', subtopics: ['Globalization and its repercussions, ethnic and regional conflicts'] },
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
            name: 'Course 1 (liberal-arts programmes) — topics 1 to 7',
            topics: [
              { name: 'Numbers and expressions', subtopics: ['Calculation of expressions, factorization, real numbers and square roots', 'Linear inequalities and absolute values'] },
              { name: 'Sets and propositions', subtopics: ['Sets, propositions and conditions'] },
              { name: 'Quadratic functions', subtopics: ['Graphs, maximum and minimum values, determination of quadratic functions', 'Quadratic equations and inequalities via graphs'] },
              { name: 'Figures and measurements', subtopics: ['Trigonometric ratios — sine, cosine, tangent', 'Law of sines and law of cosines, measurement of figures including solids'] },
              { name: 'Number of possible outcomes and probability', subtopics: ['Counting principles, permutations and combinations', 'Probability, independent trials, binomial and conditional probability, expected value'] },
              { name: 'Properties of integers', subtopics: ['Divisors and multiples, primes and prime factorization', 'Euclidean algorithm, linear Diophantine equations, base-n notation'] },
              { name: 'Properties of figures', subtopics: ['Triangle properties — side ratios, five centres, Ceva and Menelaus theorems', 'Circle properties — inscribed quadrilaterals, power of a point, relative position of two circles; figures in space'] },
            ],
          },
          {
            name: 'Course 2 additions — topics 8 to 20',
            topics: [
              { name: 'Various expressions', subtopics: ['Division of polynomials, fractional expressions, binomial theorem, identities and proofs', 'Higher-degree equations, roots and coefficients, remainder and factor theorems'] },
              { name: 'Figures and equations', subtopics: ['Points, lines and circles in coordinates, distance from a point to a line', 'Locus and regions defined by inequalities'] },
              { name: 'Exponential and logarithmic functions', subtopics: ['Exponential functions and graphs, properties of logarithms, common logarithms'] },
              { name: 'Trigonometric functions', subtopics: ['General angle and radians, graphs and basic properties', 'Addition theorems and their applications'] },
              { name: 'Sequences of numbers', subtopics: ['Arithmetic and geometric progressions, difference sequences, various sequences', 'Recurrence relations and mathematical induction'] },
              { name: 'Probability distributions', subtopics: ['Random variables, expected value, variance and standard deviation', 'Covariance, correlation coefficient, sums of random variables'] },
              { name: 'Vectors', subtopics: ['Plane vectors — operations, components, inner products', 'Position vectors, vector equations, space coordinates and spatial vectors'] },
              { name: 'Complex plane', subtopics: ['Polar form, De Moivre theorem, complex numbers and figures'] },
              { name: 'Equations and curves', subtopics: ['Parabolas, ellipses and hyperbolas; parameterization, polar coordinates'] },
              { name: 'Functions and limits', subtopics: ['Rational and irrational functions, inverse and composite functions', 'Limits of sequences and functions, sums of infinite series, continuity'] },
              { name: 'Differential calculus', subtopics: ['Derivatives and their rules, derivatives of trigonometric, exponential and logarithmic functions', 'Tangents, increase and decrease, maxima and minima, velocity and acceleration, approximate expressions'] },
              { name: 'Integral calculus', subtopics: ['Indefinite and definite integrals, substitution and integration by parts', 'Applications — area, volume, length of a curve'] },
            ],
          },
        ],
      },
    ],
  },
]
