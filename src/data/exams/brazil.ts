import type { CuratedExam } from './types'

/**
 * Brazil exams — curated official syllabi.
 *
 * Source: INEP/MEC official ENEM pages (gov.br/inep) — the four knowledge
 * areas and the 45-question-per-area structure are from the official ENEM
 * page and Edital INEP nº 64, de 21 de maio de 2026 (MEC Normas), which
 * fixes two days starting 13h30, four objective tests of 45 questions plus
 * one dissertative-argumentative essay in Portuguese. The topic breakdown
 * per area follows the INEP Matriz de Referência ability clusters as
 * operationalised in the study-topic canon (Brasil Escola's ENEM 2026 study
 * breakdown) — literature movements, Brazilian history eras, geography
 * themes, philosophy/sociology canon and the per-science topic lists.
 */

export const BRAZIL_EXAMS: CuratedExam[] = [
  {
    id: 'enem',
    name: 'ENEM',
    fullName: 'Exame Nacional do Ensino Médio',
    aliases: [
      'enem brasil',
      'exame nacional do ensino medio',
      'brazil national high school exam',
      'enem exam',
    ],
    region: 'South America',
    category: 'Secondary completion & university admission',
    popularity: 74,
    syllabusVerified: '2026-10-27',
    website: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem',
    overview: {
      conductor: 'INEP (Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira), Ministry of Education',
      level: 'Completion of Brazilian upper-secondary (ensino médio) and university admission',
      stages: [
        'Two consecutive Sundays in November — Day 1: Linguagens 45 + Ciências Humanas 45 + Redação (5h30); Day 2: Ciências da Natureza 45 + Matemática 45 (5h)',
        'Scores used by Sisu (public universities), Prouni and Fies (private-sector scholarships and loans), plus ensino médio certification',
      ],
      papers: [
        'Linguagens, Códigos e suas Tecnologias — 45 questions',
        'Ciências Humanas e suas Tecnologias — 45 questions',
        'Ciências da Natureza e suas Tecnologias — 45 questions',
        'Matemática e suas Tecnologias — 45 questions',
        'Redação — one dissertative-argumentative essay (up to 30 lines) on a social problem-situation',
      ],
      duration: '5h30 (Day 1, includes the essay) and 5h (Day 2), gates open 12h00, tests start 13h30',
      marking: 'TRI (Item Response Theory) scaled scores per area, 0-1000; essay marked 0-1000 on five competencies (0-200 each)',
      negativeMarking: 'None',
      questionTypes: ['Multiple choice (5 options) for all 180 objective questions; one extended-response essay'],
      notes:
        'Candidates choose English or Spanish for the foreign-language items inside Linguagens. The essay demands formal written Portuguese, a clear thesis, at least two developed arguments and a concrete intervention proposal (with agent, means, detail and purpose) — a missing proposal caps the score at 800. 180 MCQs total, the largest national exam by registrations in the world.',
    },
    sources: [
      { title: 'INEP — ENEM official page (four areas, essay, structure)', url: 'https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enem', host: 'gov.br' },
      { title: 'Edital INEP nº 64, de 21 de maio de 2026 (MEC Normas) — exam structure 2026', url: 'https://mecnormas.mec.gov.br/pesquisa/detalhar/11900', host: 'mecnormas.mec.gov.br' },
      { title: 'INEP — Matriz de Referência ENEM (competências e habilidades)', url: 'https://download.inep.gov.br/enem/outros_documentos/enem_matriz_referencia.pdf', host: 'download.inep.gov.br' },
      { title: 'Brasil Escola — ENEM 2026: what to study, per area', url: 'https://vestibular.brasilescola.uol.com.br/enem/o-que-estudar-para-o-enem-2026.htm', host: 'vestibular.brasilescola.uol.com.br' },
    ],
    subjects: [
      {
        name: 'Linguagens, Códigos e suas Tecnologias',
        weightage: 25,
        units: [
          {
            name: 'Portuguese Language and Reading',
            topics: [
              { name: 'Reading interpretation and textual genres', subtopics: ['Verbal, non-verbal and multimodal texts', 'Text genres and their social functions', 'Journalistic and advertising texts'] },
              { name: 'Language functions and figures of speech', subtopics: ['Functions of language (referential, emotive, conative, metalinguistic, phatic, poetic)', 'Figures of speech: metaphor, metonymy, hyperbole, irony', 'Semantics and word meaning in context'] },
              { name: 'Linguistic variation and intertextuality', subtopics: ['Regional, social and register variation', 'Intertextuality and parody', 'Language ideology and prejudice'] },
            ],
          },
          {
            name: 'Literature',
            topics: [
              { name: 'Classical and colonial literature: Trovadorismo, Barroco and Arcadismo', subtopics: ['Medieval troubadour lyric and Galician-Portuguese canon', 'Baroque cultism and conceptism, Gregório de Matos and Padre Antônio Vieira', 'Arcadian neoclassicism and pastoral poetry, Cláudio Manuel da Costa and Tomás Antônio Gonzaga'] },
              { name: 'Romanticism and Realism in Brazil', subtopics: ['Brazilian Romanticism: nationalism and Indianism, José de Alencar and Gonçalves Dias', 'Realism and Naturalism: Machado de Assis, the ironic novel and the urban critique', 'Parnassianism and Symbolism'] },
              { name: 'Modernism and contemporary Brazilian literature', subtopics: ['Pre-Modernism and Euclides da Cunha', 'Modern Art Week 1922 and the modernist phase: Mário de Andrade, Oswald de Andrade, Manuel Bandeira', 'Generation of 1930-45: Drummond, Clarice Lispector, Guimarães Rosa; contemporary literature'] },
            ],
          },
          {
            name: 'Arts, Physical Education and Technologies',
            topics: [
              { name: 'Art movements and the Brazilian arts', subtopics: ['Art movements from the Renaissance to modernism', 'Brazilian art: Aleijadinho, Portinari, Tarsila do Amaral and anthropophagy', 'Popular music genres and the culture industry'] },
              { name: 'Sport as social practice and health', subtopics: ['Sport as social phenomenon', 'Physical activity, health and body culture'] },
              { name: 'Digital media and the information society', subtopics: ['Digital media, networks and the information society', 'Media literacy and misinformation'] },
              { name: 'Foreign language reading: English or Spanish', subtopics: ['Reading comprehension of authentic texts', 'Cognates and inference strategies'] },
            ],
          },
          {
            name: 'Redação (Essay)',
            topics: [
              { name: 'Dissertative-argumentative essay', subtopics: ['Thesis, argumentation and structured intervention proposal', 'The five INEP competencies and the 0-1000 rubric', 'Formal written Portuguese and cohesion'] },
            ],
          },
        ],
      },
      {
        name: 'Ciências Humanas e suas Tecnologias',
        weightage: 25,
        units: [
          {
            name: 'History of Brazil',
            topics: [
              { name: 'Colonial Brazil: sugar, slavery and the gold cycle', subtopics: ['Captaincies and the colonial administration', 'Sugar plantations, the Atlantic slave trade and resistance — quilombos', 'Bandeirantes, gold rush and Minas Gerais; the Inconfidência Mineira'] },
              { name: 'Empire and the formation of the Brazilian state', subtopics: ['Independence in 1822 in the Latin American context', 'Pedro I and Pedro II, coffee and the economy', 'Abolition: Lei Eusébio de Queirós, Lei do Ventre Livre and Lei Áurea; the fall of the monarchy'] },
              { name: 'Old Republic and the Era Vargas', subtopics: ['Republic of the Sword, café com leite politics and coronelismo', 'Revolt and tenentismo: Canudos, Contestado, 1930 revolution', 'Getúlio Vargas: labour laws, Estado Novo and industrialization'] },
              { name: 'Democracy, dictatorship and redemocratization', subtopics: ['Populist republic, JK and the developmental years', 'The 1964 military regime: institutional acts, censorship and repression', 'Diretas Já, the 1988 Constitution and Plano Real'] },
            ],
          },
          {
            name: 'General History',
            topics: [
              { name: 'Ancient Greece and Rome', subtopics: ['Athenian democracy and classical culture', 'Roman republic and empire, law and Christianity'] },
              { name: 'Medieval and early modern Europe', subtopics: ['Feudalism and the Church', 'Absolutism, the Protestant Reformation and the Counter-Reformation', 'Maritime expansion and the conquest of the Americas'] },
              { name: 'Revolutions: Enlightenment, French and Industrial', subtopics: ['Enlightenment thought and the Ancien Régime', 'The French Revolution 1789: estates, Terror and Napoleon', 'The Industrial Revolution and the making of capitalism'] },
              { name: 'The twentieth century: wars, ideologies and the Cold War', subtopics: ['World War I and the Russian Revolution', 'Totalitarian regimes: fascism and Nazism', 'World War II, the Cold War and decolonization', 'The Middle East: Israel and Palestine'] },
              { name: 'Latin America after independence', subtopics: ['Spanish American independence movements, Bolívar and San Martín', 'Latin American caudillismo, revolutions and US relations'] },
            ],
          },
          {
            name: 'Geography',
            topics: [
              { name: 'Cartography and physical geography', subtopics: ['Maps, projections and scale', 'Climate zones of Brazil and the world', 'Relief structures and geological time'] },
              { name: 'Brazilian biomes and environmental questions', subtopics: ['The six Brazilian biomes: Amazônia, Cerrado, Caatinga, Mata Atlântica, Pampa, Pantanal', 'Deforestation, conservation units and climate policy', 'Watersheds and water scarcity; energy sources and the Brazilian matrix'] },
              { name: 'Human geography and the global economy', subtopics: ['Urbanization and migration in Brazil', 'Agrarian structures and agrarian question', 'Globalization, trade blocs and the WTO', 'The rise of China and emerging economies'] },
            ],
          },
          {
            name: 'Philosophy',
            topics: [
              { name: 'Classical and medieval philosophy', subtopics: ['Pre-Socratics, Socrates, Plato and Aristotle', 'Medieval philosophy and faith-reason'] },
              { name: 'Modern philosophy', subtopics: ['Rationalism and empiricism: Descartes, Bacon and the scientific method', 'Enlightenment and critique: Kant and modern ethics'] },
              { name: 'Contemporary philosophy and ethics', subtopics: ['Alienation, existentialism and critical theory', 'Applied ethics: technology, environment and human rights'] },
            ],
          },
          {
            name: 'Sociology',
            topics: [
              { name: 'Classical sociology', subtopics: ['Comte and positivism', 'Marx, Durkheim and Weber: the founding triad'] },
              { name: 'Culture, society and social movements', subtopics: ['Material and immaterial culture, heritage', 'Social movements and citizenship in Brazil', 'Work, labour markets and the service economy'] },
              { name: 'Digital networks, media and inequality', subtopics: ['Digital networks, media and social life', 'Inequality, identity and contemporary thinkers'] },
            ],
          },
        ],
      },
      {
        name: 'Ciências da Natureza e suas Tecnologias',
        weightage: 25,
        units: [
          {
            name: 'Biology',
            topics: [
              { name: 'Cell biology and the chemistry of life', subtopics: ['Prokaryotic and eukaryotic cells, organelles', 'Cell membranes, transport and metabolism', 'Stem cells and cloning'] },
              { name: 'Human physiology and health', subtopics: ['Digestive, respiratory, circulatory, nervous, endocrine and reproductive systems', 'Immunology: vaccines, sera and immunity', 'Human parasitoses and public health'] },
              { name: 'Genetics and molecular biology', subtopics: ['Mendel\'s laws, blood groups and inheritance', 'DNA, RNA and protein synthesis', 'Biotechnology and genetic engineering'] },
              { name: 'Ecology and evolution', subtopics: ['Ecosystems, ecological relations and biogeochemical cycles', 'Natural selection and evolution', 'Pollution, biodiversity and conservation'] },
            ],
          },
          {
            name: 'Chemistry',
            topics: [
              { name: 'Matter, atoms and bonding', subtopics: ['Atomic models and the periodic table', 'Ionic, covalent and metallic bonds', 'Intermolecular forces and states of matter'] },
              { name: 'Reactions and calculations', subtopics: ['Stoichiometry and balancing', 'Solutions and concentration', 'Chemical kinetics and catalysis', 'Chemical equilibrium and Le Chatelier'] },
              { name: 'Thermochemistry, electrochemistry and organic chemistry', subtopics: ['Enthalpy and thermochemical equations', 'Oxidation-reduction, cells and electrolysis', 'Organic functions and reactions', 'Environmental chemistry: greenhouse effect, pollution, water treatment'] },
            ],
          },
          {
            name: 'Physics',
            topics: [
              { name: 'Mechanics', subtopics: ['Kinematics: uniform and accelerated motion', 'Newton\'s laws, forces and equilibrium', 'Work, energy and momentum', 'Hydrostatics: pressure, buoyancy and Pascal'] },
              { name: 'Thermal physics and waves', subtopics: ['Heat, temperature and thermodynamics', 'Wave phenomena, sound and acoustics', 'Optics: reflection, refraction and lenses'] },
              { name: 'Electricity, magnetism and modern physics', subtopics: ['Electrostatics and electric fields', 'DC circuits, Ohm\'s law and power', 'Magnetic force and electromagnetic induction', 'Relativity and quantum ideas in ENEM contexts'] },
            ],
          },
        ],
      },
      {
        name: 'Matemática e suas Tecnologias',
        weightage: 25,
        units: [
          {
            name: 'Numbers and Algebra',
            topics: [
              { name: 'Ratios, percentages and proportional reasoning', subtopics: ['Percentage change, rule of three and scales', 'Simple and compound interest, consumer finance'] },
              { name: 'Functions and equations', subtopics: ['First- and second-degree functions and equations', 'Exponential functions and growth', 'Systems and inequalities'] },
              { name: 'Sequences and patterns', subtopics: ['Arithmetic and geometric progressions', 'LCM, GCD and number theory basics'] },
            ],
          },
          {
            name: 'Geometry and Measurement',
            topics: [
              { name: 'Plane geometry', subtopics: ['Triangles, circles and quadrilaterals', 'Cartesian plane and analytic geometry', 'Trigonometric ratios and functions'] },
              { name: 'Solid geometry and measurement', subtopics: ['Areas and volumes of solids, cones and cylinders', 'Unit conversion and estimation'] },
            ],
          },
          {
            name: 'Data and Probability',
            topics: [
              { name: 'Statistics and data interpretation', subtopics: ['Reading graphs and tables in context', 'Mean, median, mode and spread'] },
              { name: 'Probability and combinatorics', subtopics: ['Counting principles, permutations and combinations', 'Probability of events and conditional reasoning'] },
            ],
          },
        ],
      },
    ],
  },
]
