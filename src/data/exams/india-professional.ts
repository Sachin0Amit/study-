import type { CuratedExam } from './types'

/**
 * India professional-course entrance exams — curated official syllabi.
 *
 * Sources: Consortium of National Law Universities (CLAT UG pattern and
 * syllabus), ICAI (CA Foundation scheme of papers and detailed syllabus).
 */

export const INDIA_PROFESSIONAL_EXAMS: CuratedExam[] = [
  {
    id: 'clat',
    name: 'CLAT',
    fullName: 'Common Law Admission Test (Undergraduate)',
    aliases: ['common law admission test', 'clat ug', 'clat exam'],
    region: 'India',
    category: 'Law entrance',
    popularity: 83,
    syllabusVerified: '2026-10-20',
    website: 'https://consortiumofnlus.ac.in',
    overview: {
      conductor: 'Consortium of National Law Universities',
      level: 'Class 12 → 5-year integrated BA-LLB admission',
      duration: '2 h · 120 comprehension-based questions',
      marking: '120 marks; +1 correct / −0.25 incorrect',
      questionTypes: ['Comprehension-passage MCQs'],
      notes: 'The whole paper is passage-based since 2020; each section gives 400-450 word passages.',
    },
    sources: [
      { title: 'CLAT UG — exam pattern and syllabus', url: 'https://consortiumofnlus.ac.in', host: 'consortiumofnlus.ac.in' },
    ],
    subjects: [
      {
        name: 'English Language',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Reading Comprehension Passages',
            topics: [
              { name: 'Inference Questions', subtopics: ['Drawing conclusions from passage evidence', 'Distinguishing stated facts from inferences', 'Author-implied meanings'] },
              { name: 'Tone and Attitude', subtopics: ['Identifying positive, negative and neutral tone', 'Tone clues in word choice', 'Author attitude toward people and ideas'] },
              { name: 'Main Idea and Title', subtopics: ['Finding the central theme', 'Choosing the most fitting title', 'One-line summary of the passage'] },
              { name: 'Vocabulary in Context', subtopics: ['Meaning of a word as used in the passage', 'Synonyms and antonyms in context', 'Working out unfamiliar words from clues'] },
            ],
          },
          {
            name: 'Grammar and Vocabulary in Passages',
            topics: [
              { name: 'Sentence Correction Within Passages', subtopics: ['Spotting errors embedded in passage text', 'Subject-verb agreement and tense checks', 'Picking the grammatically correct option'] },
              { name: 'Prepositions and Articles in Context', subtopics: ['Correct preposition usage', 'Definite and indefinite articles', 'Commonly confused pairs'] },
              { name: 'Idioms and Foreign Phrases', subtopics: ['Common idioms and their meanings', 'Latin and French expressions in legal English', 'Using idioms in context'] },
            ],
          },
        ],
      },
      {
        name: 'Current Affairs including General Knowledge',
        units: [
          {
            name: 'Static GK through Passages',
            topics: [
              { name: 'Important Historical Events', subtopics: ['Major events in Indian and world history', 'Milestones of the independence movement', 'Dates, sequences and causes'] },
              { name: 'Art and Culture', subtopics: ['Classical and folk art forms', 'Music, dance and theatre traditions', 'Festivals, monuments and heritage sites'] },
              { name: 'Legal History Milestones', subtopics: ['Making of the Indian Constitution', 'Landmark acts and laws in Indian history', 'Evolution of courts and key cases'] },
            ],
          },
          {
            name: 'Contemporary Events',
            topics: [
              { name: 'National and International Affairs', subtopics: ['Current events in India and abroad', 'Government schemes and policies', 'Summits, treaties and agreements'] },
              { name: 'Awards and Honours', subtopics: ['National awards and honours', 'International prizes such as the Nobel', 'Sports and film awards'] },
              { name: 'Sports', subtopics: ['Major tournaments and championships', 'Recent results and records', 'Players and teams in the news'] },
              { name: 'Science and Technology', subtopics: ['Space missions and launches', 'New technologies and innovations', 'Developments in medicine and computing'] },
              { name: 'Books and Authors', subtopics: ['Recent notable books', 'Famous authors and their works', 'Award-winning writing'] },
            ],
          },
        ],
      },
      {
        name: 'Legal Reasoning',
        units: [
          {
            name: 'Principle-Fact Application',
            topics: [
              {
                name: 'Applying Given Legal Principles to Fact Situations',
                subtopics: [
                  'Reading the principle stated with the passage',
                  'Mapping the facts onto the principle',
                  'Choosing the conclusion the principle supports',
                  'Avoiding use of outside legal knowledge',
                ],
              },
              {
                name: 'Inferring Rules from Passages',
                subtopics: ['Deriving the rule the passage sets out', 'Applying inferred rules to new fact patterns', 'Testing which facts engage the rule'],
              },
            ],
          },
          {
            name: 'Legal Knowledge in Passages',
            topics: [
              { name: 'Constitutional Fundamentals', subtopics: ['Fundamental rights and duties', 'Structure of government and judiciary', 'Key amendments and constitutional bodies'] },
              { name: 'Legal Maxims and Terms', subtopics: ['Frequently tested Latin maxims', 'Everyday legal vocabulary', 'Applying maxims to short scenarios'] },
              { name: 'Recent Judgments and Legal News', subtopics: ['Landmark recent decisions of the Supreme Court', 'Important legal developments and legislation', 'Legal current affairs from passages'] },
              { name: 'Public Interest Litigation Basics', subtopics: ['Meaning and purpose of PIL', 'Who may file and how', 'Landmark PIL cases'] },
            ],
          },
        ],
      },
      {
        name: 'Logical Reasoning',
        mappedSubjectId: 'aptitude',
        units: [
          {
            name: 'Argument Analysis',
            topics: [
              { name: 'Premises and Conclusions', subtopics: ['Separating premises from the conclusion', 'Spotting the main point', 'Unstated supporting ideas'] },
              { name: 'Assumptions', subtopics: ['Necessary assumptions behind arguments', 'Testing assumptions by negation', 'Bridging the evidence-conclusion gap'] },
              { name: 'Strength and Weakness of Arguments', subtopics: ['Judging argument quality', 'What strengthens or weakens a position', 'Finding reasoning gaps'] },
            ],
          },
          {
            name: 'Analytical Reasoning',
            topics: [
              { name: 'Analogies', subtopics: ['Completing word analogies', 'Mapping relationships between word pairs', 'Number and letter analogies'] },
              { name: 'Series and Sequences', subtopics: ['Number series patterns', 'Letter and symbol series', 'Missing-term problems'] },
              { name: 'Logical Consistency', subtopics: ['Consistency of statements with a passage', 'Identifying logically sound conclusions', 'Course-of-action reasoning'] },
              { name: 'Syllogisms', subtopics: ['Drawing valid conclusions from statements', 'Venn-diagram method', 'Definite versus possible conclusions'] },
            ],
          },
        ],
      },
      {
        name: 'Quantitative Techniques',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Data Interpretation through Passages',
            topics: [
              { name: 'Tables', subtopics: ['Reading dense multi-row tables', 'Comparisons across rows and columns', 'Percentage change from table data'] },
              { name: 'Charts and Graphs', subtopics: ['Bar charts and line graphs', 'Pie charts and percentage shares', 'Mixed-diagram sets'] },
              { name: 'Caselets', subtopics: ['Extracting data from paragraph caselets', 'Setting up quick calculations from text', 'Multi-step caselet problems'] },
            ],
          },
          {
            name: 'Arithmetic',
            topics: [
              { name: 'Percentages', subtopics: ['Percentage change and successive change', 'Percentage-based word problems', 'Quick estimation under time pressure'] },
              { name: 'Ratios and Proportions', subtopics: ['Simplifying and comparing ratios', 'Dividing amounts in a given ratio', 'Direct and inverse proportion'] },
              { name: 'Averages', subtopics: ['Simple and weighted averages', 'Averages of combined groups', 'Change when values are added or removed'] },
              { name: 'Profit and Loss', subtopics: ['Cost price, selling price and markup', 'Discount and successive discounts', 'Profit and loss percentages'] },
              { name: 'Time-Speed-Distance', subtopics: ['Average speed and relative speed', 'Trains and crossing problems', 'Boats and streams'] },
              { name: 'Basic Algebra', subtopics: ['Linear equations from word problems', 'Simple quadratic equations', 'Algebraic manipulation in applied settings'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ca-foundation',
    name: 'CA Foundation',
    fullName: 'Chartered Accountancy Foundation Course Examination',
    aliases: ['ca foundation exam', 'icai ca foundation', 'chartered accountant foundation'],
    region: 'India',
    category: 'Professional qualification',
    popularity: 82,
    syllabusVerified: '2026-10-20',
    website: 'https://www.icai.org',
    overview: {
      conductor: 'ICAI (Institute of Chartered Accountants of India)',
      level: 'Class 12 → CA course entry',
      papers: ['Paper 1: Accounting', 'Paper 2: Business Laws', 'Paper 3: Quantitative Aptitude', 'Paper 4: Business Economics'],
      duration: 'Papers 1-3: 2 h each · Paper 4: 2 h',
      marking: 'Papers 1&2 objective +1/−0.25; Papers 3&4 subjective',
      questionTypes: ['MCQ (objective papers)', 'Descriptive (subjective papers)'],
      notes: 'Four papers: Accounting; Business Laws; Quantitative Aptitude; Business Economics.',
    },
    sources: [
      { title: 'CA Foundation — scheme of papers and syllabus', url: 'https://www.icai.org', host: 'icai.org' },
    ],
    subjects: [
      {
        name: 'Accounting',
        units: [
          {
            name: 'Theoretical Framework',
            topics: [
              { name: 'Accounting Concepts and Principles', subtopics: ['Entity, money measurement and going concern', 'Accrual, matching and conservatism', 'Consistency, materiality and dual aspect'] },
              { name: 'Accounting Standards Overview', subtopics: ['Why standardisation is needed', 'Role of the ICAI in setting standards', 'Overview of Ind AS'] },
              { name: 'Cash vs Accrual', subtopics: ['Recording under the cash basis', 'Recording under the accrual basis', 'Which basis accounts follow and why'] },
            ],
          },
          {
            name: 'Accounting Process',
            topics: [
              { name: 'Journal Entries and Ledgers', subtopics: ['Rules of debit and credit', 'Journalising transactions', 'Posting to ledger accounts'] },
              { name: 'Trial Balance', subtopics: ['Preparing a trial balance', 'Locating errors', 'Suspense account use'] },
              { name: 'Rectification of Errors', subtopics: ['Errors of omission, commission and principle', 'One-sided and two-sided rectification', 'Effect of rectification on profit'] },
              { name: 'Depreciation and Provisions', subtopics: ['Straight line and written down value methods', 'Accounting entries for depreciation', 'Provisions and reserves distinguished'] },
              { name: 'Bank Reconciliation', subtopics: ['Why cash book and pass book differ', 'Preparing a bank reconciliation statement', 'Amended cash book approach'] },
            ],
          },
          {
            name: 'Final Accounts',
            topics: [
              { name: 'Preparation of Financial Statements', subtopics: ['Trading account and profit and loss account', 'Balance sheet', 'Manufacturing account basics'] },
              { name: 'Adjustments', subtopics: ['Closing stock and outstanding expenses', 'Prepaid expenses and accrued income', 'Depreciation and provision for doubtful debts'] },
              { name: 'Partnership Accounts Basics', subtopics: ['Profit and loss appropriation account', 'Interest on capital and drawings', 'Partner salary and commission'] },
            ],
          },
          {
            name: 'Special Transactions',
            topics: [
              { name: 'Bills of Exchange', subtopics: ['Parties and terms of a bill', 'Entries in the books of drawer and drawee', 'Dishonour, renewal and retirement'] },
              { name: 'Consignment', subtopics: ['Consignor and consignee accounts', 'Valuation of consignment stock', 'Ordinary and del credere commission'] },
              { name: 'Joint Venture', subtopics: ['Joint venture versus partnership', 'Methods of maintaining venture accounts', 'Settlement between co-venturers'] },
              { name: 'Sale on Approval', subtopics: ['Meaning of sale on approval', 'Ownership transfer on approval', 'Accounting treatment and returns'] },
            ],
          },
          {
            name: 'Company Accounts',
            topics: [
              { name: 'Issue of Shares and Debentures', subtopics: ['Types of shares and share capital', 'Entries for issue at par and at a premium', 'Issue of debentures basics'] },
              { name: 'Forfeiture Basics', subtopics: ['Entries for forfeiture of shares', 'Reissue of forfeited shares', 'Effect on share capital'] },
            ],
          },
          {
            name: 'Not-for-Profit Accounts',
            topics: [
              { name: 'Receipts and Payments', subtopics: ['Nature of the receipts and payments account', 'Preparing it from the cash book', 'Excluding non-cash items'] },
              { name: 'Income and Expenditure', subtopics: ['Converting receipts and payments to income and expenditure', 'Treatment of subscriptions and entrance fees', 'Computing surplus or deficit'] },
            ],
          },
        ],
      },
      {
        name: 'Business Laws',
        units: [
          {
            name: 'The Indian Regulatory Framework',
            topics: [
              { name: 'Types of Business Entities', subtopics: ['Sole proprietorship, partnership, LLP and company', 'Features of each form of organisation', 'Choosing a business form'] },
              { name: 'Key Regulators', subtopics: ['Ministry of Corporate Affairs and Registrars of Companies', 'SEBI and RBI overviews', 'How regulators shape business conduct'] },
            ],
          },
          {
            name: 'The Indian Contract Act 1872',
            topics: [
              { name: 'Nature of Contract', subtopics: ['Meaning and essentials of a contract', 'Agreement versus contract', 'Valid, void and voidable contracts'] },
              { name: 'Offer and Acceptance', subtopics: ['Proposal and its types', 'Communication and revocation of offers', 'Rules of valid acceptance', 'Invitation to offer distinguished'] },
              { name: 'Consideration', subtopics: ['Essentials of valid consideration', 'Exceptions to the no-consideration rule', 'Past, present and future consideration'] },
              { name: 'Capacity', subtopics: ['Who is competent to contract', 'Agreements by minors', 'Persons of unsound mind and disqualified persons'] },
              { name: 'Free Consent', subtopics: ['Coercion and undue influence', 'Fraud and misrepresentation', 'Mistake and its effects'] },
              { name: 'Legality', subtopics: ['Lawful object and lawful consideration', 'Agreements opposed to public policy', 'Agreements expressly declared void'] },
              { name: 'Discharge of Contract', subtopics: ['Performance and time of performance', 'Discharge by agreement and novation', 'Frustration and impossibility', 'Discharge by lapse of time'] },
              { name: 'Breach and Remedies', subtopics: ['Anticipatory and actual breach', 'Damages and their types', 'Specific performance and injunction', 'Quantum meruit'] },
              { name: 'Contingent and Quasi-Contracts', subtopics: ['Contingent contracts and wagering', 'Quasi-contractual obligations', 'Certain relations resembling contracts'] },
            ],
          },
          {
            name: 'The Sale of Goods Act 1930',
            topics: [
              { name: 'Formation of Contract of Sale', subtopics: ['Sale versus agreement to sell', 'Goods: existing, future and contingent', 'Price and its fixation'] },
              { name: 'Conditions and Warranties', subtopics: ['Condition distinguished from warranty', 'Implied conditions and warranties', 'Caveat emptor and its exceptions'] },
              { name: 'Transfer of Ownership', subtopics: ['Rules for passing of property', 'Risk following ownership', 'Sale by a non-owner'] },
              { name: 'Unpaid Seller', subtopics: ['Who is an unpaid seller', 'Rights against the goods: lien, stoppage and resale', 'Rights against the buyer'] },
            ],
          },
          {
            name: 'The Indian Partnership Act 1932',
            topics: [
              { name: 'Nature of Partnership', subtopics: ['Definition and essentials', 'Partnership, firm and partner distinguished', 'Mutual agency as the test'] },
              { name: 'Rights and Duties', subtopics: ['Rights of partners inter se', 'Duties and implied authority', 'Minor admitted to the benefits of partnership'] },
              { name: 'Registration', subtopics: ['Procedure for registration', 'Consequences of non-registration', 'Effect of registration'] },
              { name: 'Dissolution', subtopics: ['Dissolution by agreement, notice and court', 'Dissolution on happening of certain events', 'Settlement of accounts'] },
            ],
          },
          {
            name: 'The Limited Liability Partnership Act 2008',
            topics: [
              { name: 'LLP Nature and Incorporation', subtopics: ['Nature and salient features', 'Incorporation and the LLP agreement', 'Separate legal personality'] },
              { name: 'LLP versus Partnership and Company', subtopics: ['Liability of partners compared', 'Key structural differences', 'Where an LLP fits'] },
            ],
          },
          {
            name: 'The Companies Act 2013',
            topics: [
              { name: 'Company Types', subtopics: ['Company as a separate legal person', 'Liability-based classification', 'Private, public and one person companies'] },
              { name: 'Incorporation Basics', subtopics: ['Steps in incorporation', 'Memorandum and articles of association', 'Effect of incorporation'] },
              { name: 'Shares and Debentures Overview', subtopics: ['Kinds of share capital', 'Debentures versus shares', 'Issue basics'] },
            ],
          },
        ],
      },
      {
        name: 'Quantitative Aptitude',
        mappedSubjectId: 'aptitude',
        units: [
          {
            name: 'Business Mathematics',
            topics: [
              { name: 'Ratio and Proportion', subtopics: ['Simple and compound ratios', 'Dividing amounts in a ratio', 'Direct and inverse variation'] },
              { name: 'Indices and Logarithms', subtopics: ['Laws of indices', 'Laws of logarithms', 'Solving exponential equations'] },
              { name: 'Equations', subtopics: ['Linear equations in one and two variables', 'Quadratic equations and roots', 'Forming equations from word problems'] },
              { name: 'Time Value of Money', subtopics: ['Simple and compound interest', 'Effective rate of interest', 'Present value and future value', 'Annuity basics'] },
              { name: 'Permutations and Combinations', subtopics: ['Fundamental principle of counting', 'Arrangements and selections', 'Factorial notation and applications'] },
              { name: 'Sets and Relations', subtopics: ['Types of sets and operations', 'Venn diagram applications', 'Relations and functions basics'] },
            ],
          },
          {
            name: 'Logical Reasoning',
            topics: [
              { name: 'Number Series', subtopics: ['Missing-term patterns', 'Odd one out in series', 'Difference, multiple and square patterns'] },
              { name: 'Direction Tests', subtopics: ['Cardinal directions and turns', 'Distance and displacement questions', 'Sketching the route'] },
              { name: 'Seating Arrangements', subtopics: ['Linear arrangements', 'Circular and square table arrangements', 'Clue-based puzzle sets'] },
              { name: 'Blood Relations', subtopics: ['Family tree notation', 'Coded relations', 'Pointing-to-person problems'] },
              { name: 'Syllogisms', subtopics: ['Statements and conclusions', 'Venn-diagram method', 'Definite versus possible conclusions'] },
            ],
          },
          {
            name: 'Statistics',
            topics: [
              { name: 'Central Tendency', subtopics: ['Mean, median and mode', 'Weighted and combined averages', 'Partition values: quartiles and percentiles'] },
              { name: 'Dispersion', subtopics: ['Range and quartile deviation', 'Mean deviation and standard deviation', 'Coefficient of variation'] },
              { name: 'Probability', subtopics: ['Addition and multiplication rules', 'Conditional probability and independence', 'Simple applied problems'] },
              { name: 'Theoretical Distributions', subtopics: ['Binomial distribution', 'Poisson distribution', 'Normal distribution and its properties'] },
              { name: 'Correlation and Regression', subtopics: ['Scatter diagrams and correlation', 'Karl Pearson coefficient', 'Regression lines and estimation'] },
              { name: 'Index Numbers', subtopics: ['Simple and weighted index numbers', 'Cost of living index', 'Uses and limitations'] },
            ],
          },
        ],
      },
      {
        name: 'Business Economics',
        units: [
          {
            name: 'Nature and Scope of Economics',
            topics: [
              { name: 'Micro vs Macro', subtopics: ['Meaning of microeconomics', 'Meaning of macroeconomics', 'Comparative concerns and examples'] },
              { name: 'Economic Systems', subtopics: ['Capitalist, socialist and mixed economies', 'Role of the government in each', 'Merits and demerits'] },
            ],
          },
          {
            name: 'Demand and Supply',
            topics: [
              { name: 'Law of Demand', subtopics: ['Demand schedule and demand curve', 'Why the curve slopes downward', 'Movement along versus shift of demand', 'Exceptions to the law'] },
              { name: 'Elasticity', subtopics: ['Price elasticity of demand', 'Income and cross elasticity', 'Elasticity and total revenue'] },
              { name: 'Market Equilibrium', subtopics: ['Law of supply and supply curve', 'Equilibrium price and quantity', 'Effects of shifts in demand and supply'] },
            ],
          },
          {
            name: 'Production and Cost',
            topics: [
              { name: 'Production Function', subtopics: ['Factors of production', 'Short run and long run', 'Law of variable proportions'] },
              { name: 'Laws of Returns', subtopics: ['Increasing, constant and diminishing returns', 'Returns to scale'] },
              { name: 'Cost Concepts', subtopics: ['Fixed and variable costs', 'Average and marginal costs', 'Economies and diseconomies of scale'] },
            ],
          },
          {
            name: 'Price Determination',
            topics: [
              { name: 'Meaning and Classification of Markets', subtopics: ['What constitutes a market', 'Bases of classification', 'Perfect versus imperfect competition'] },
              {
                name: 'Pricing across Market Structures',
                subtopics: ['Perfect competition pricing', 'Monopoly and price discrimination', 'Monopolistic competition and product differentiation', 'Oligopoly behaviour'],
              },
            ],
          },
          {
            name: 'Business Cycles',
            topics: [
              { name: 'Meaning and Phases of Business Cycles', subtopics: ['Definition and features', 'Expansion, boom, recession and trough', 'Recovery and turning points'] },
              { name: 'Causes and Impact of Business Cycles', subtopics: ['Internal and external causes', 'Impact on output, jobs and prices', 'Policy responses overview'] },
            ],
          },
          {
            name: 'Money and Banking',
            topics: [
              { name: 'Functions of Money', subtopics: ['Barter and its drawbacks', 'Primary and secondary functions of money', 'Evolution of money'] },
              { name: 'Commercial and Central Banks', subtopics: ['Functions of commercial banks', 'Credit creation basics', 'Central bank and monetary policy tools'] },
            ],
          },
          {
            name: 'International Trade',
            topics: [
              { name: 'Balance of Payments', subtopics: ['Current and capital accounts', 'Meaning of deficit and surplus', 'Causes of disequilibrium'] },
              { name: 'Exchange Rates', subtopics: ['Meaning of an exchange rate', 'Depreciation and appreciation', 'Fixed and floating regimes'] },
            ],
          },
          {
            name: 'Public Finance',
            topics: [
              { name: 'Taxation Basics', subtopics: ['Direct and indirect taxes', 'Progressive, regressive and proportional taxes', 'Canons of taxation'] },
              { name: 'Fiscal Policy', subtopics: ['Objectives of fiscal policy', 'Budgets, deficits and their financing', 'Fiscal versus monetary policy'] },
            ],
          },
        ],
      },
    ],
  },
]
