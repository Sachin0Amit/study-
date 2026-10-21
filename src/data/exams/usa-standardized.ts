import type { CuratedExam } from './types'

/**
 * USA / global standardized aptitude tests — curated official syllabi.
 *
 * Sources: College Board (SAT digital test specifications), ACT.org,
 * ETS (GRE & TOEFL), GMAC (GMAT Focus Edition), IELTS.org.
 */

export const USA_STANDARDIZED_EXAMS: CuratedExam[] = [
  {
    id: 'sat',
    name: 'SAT',
    fullName: 'Scholastic Assessment Test (Digital, Adaptive)',
    aliases: ['scholastic assessment test', 'digital sat', 'sat reasoning', 'college board sat'],
    region: 'United States',
    category: 'Undergraduate admission aptitude',
    popularity: 96,
    syllabusVerified: '2026-10-20',
    website: 'https://sats.collegeboard.org',
    overview: {
      conductor: 'College Board (via Bluebird/Bluebook app)',
      level: 'High-school → undergraduate admission (US & international)',
      stages: ['Single digital adaptive stage (module 1 → module 2 per section)'],
      papers: ['Reading & Writing', 'Math'],
      duration: '2 h 14 min total (RW 64 min · Math 70 min)',
      marking: '400–1600 total; each section 200–800',
      negativeMarking: 'None',
      questionTypes: ['Multiple-choice (4 options)', 'Student-produced responses (math grid-in)'],
      notes:
        'Digital adaptive: module 2 difficulty adapts to module 1 performance. Calculator allowed throughout Math (Desmos built in).',
    },
    sources: [
      {
        title: 'SAT Suite of Assessments — test specifications',
        url: 'https://sats.collegeboard.org/digital',
        host: 'collegeboard.org',
      },
    ],
    subjects: [
      {
        name: 'Reading & Writing',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Craft and Structure',
            topics: [
              {
                name: 'Words in Context',
                subtopics: [
                  'Interpreting the meaning of words and phrases in context',
                  'Vocabulary in context: everyday-academic and cross-domain words',
                  'Analyzing word choice for rhetorical effect',
                ],
              },
              {
                name: 'Text Structure and Purpose',
                subtopics: [
                  'Identifying the main purpose of a passage',
                  'Analyzing how a text is organized',
                  'Understanding relationships between parts of a text',
                ],
              },
              {
                name: 'Cross-Text Connections',
                subtopics: [
                  'Comparing perspectives across two related passages',
                  'Integrating information from paired texts',
                ],
              },
            ],
          },
          {
            name: 'Information and Ideas',
            topics: [
              {
                name: 'Central Ideas and Details',
                subtopics: [
                  'Identifying central claims and theses',
                  'Locating supporting evidence and details',
                  'Summarizing passages faithfully',
                ],
              },
              {
                name: 'Command of Evidence',
                subtopics: [
                  'Evaluating textual evidence for claims',
                  'Quantitative evidence: interpreting tables, graphs and charts',
                  'Choosing evidence that supports or weakens a claim',
                ],
              },
              {
                name: 'Inferences',
                subtopics: [
                  'Drawing logical inferences from texts',
                  'Completing sentences and passages coherently',
                ],
              },
            ],
          },
          {
            name: 'Standard English Conventions',
            topics: [
              {
                name: 'Boundaries',
                subtopics: [
                  'Sentence structure: clauses, fragments, run-ons',
                  'Punctuation: commas, semicolons, colons, dashes',
                  'Linking ideas with transitions and conjunctions',
                ],
              },
              {
                name: 'Form, Structure and Sense',
                subtopics: [
                  'Verb tense, mood and agreement',
                  'Pronoun-antecedent agreement and clarity',
                  'Modifier placement and parallelism',
                ],
              },
            ],
          },
          {
            name: 'Expression of Ideas',
            topics: [
              {
                name: 'Rhetorical Synthesis',
                subtopics: [
                  'Accomplishing a rhetorical goal with given information',
                  'Combining sentences for concision and effect',
                ],
              },
              {
                name: 'Transitions',
                subtopics: [
                  'Selecting logical transitions between sentences and paragraphs',
                ],
              },
            ],
          },
        ],
      },
      {
        name: 'Math',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Algebra',
            weightage: 35,
            topics: [
              {
                name: 'Linear Equations in One Variable',
                subtopics: ['Solving linear equations', 'Equations with rational coefficients', 'Word problems leading to linear equations'],
              },
              {
                name: 'Linear Functions',
                subtopics: ['Slope-intercept and point-slope forms', 'Interpreting slope and intercepts', 'Graphing linear functions'],
              },
              {
                name: 'Systems of Two Linear Equations',
                subtopics: ['Substitution and elimination', 'No-solution and infinite-solution cases', 'System word problems'],
              },
              {
                name: 'Linear Inequalities',
                subtopics: ['Solving and graphing inequalities', 'Systems of inequalities', 'Interpreting solution regions'],
              },
            ],
          },
          {
            name: 'Advanced Math',
            weightage: 35,
            topics: [
              {
                name: 'Equivalent Expressions',
                subtopics: ['Factoring quadratics', 'Completing the square', 'Operations with polynomials and rationals'],
              },
              {
                name: 'Nonlinear Functions',
                subtopics: ['Quadratic functions and their graphs', 'Exponential growth and decay', 'Radical and piecewise functions'],
              },
              {
                name: 'Nonlinear Equations in One Variable',
                subtopics: ['Solving quadratics (factoring, formula)', 'Equations with radicals and rationals', 'Extraneous solutions'],
              },
              {
                name: 'Systems of Equations in Two Variables',
                subtopics: ['Linear–quadratic systems', 'Solving by substitution and graphing'],
              },
            ],
          },
          {
            name: 'Problem Solving and Data Analysis',
            weightage: 15,
            topics: [
              {
                name: 'Ratios, Rates and Proportions',
                subtopics: ['Unit rates and conversions', 'Ratio reasoning in context'],
              },
              {
                name: 'Percentages',
                subtopics: ['Percent change', 'Percent increase/decrease word problems'],
              },
              {
                name: 'One-Variable Data: Distributions',
                subtopics: ['Measures of center and spread', 'Outliers and distribution shape'],
              },
              {
                name: 'Two-Variable Data: Models and Scatterplots',
                subtopics: ['Line of best fit', 'Interpreting slopes of fit lines', 'Linear, quadratic and exponential models'],
              },
              {
                name: 'Probability and Conditional Probability',
                subtopics: ['Simple probability', 'Conditional probability from tables', 'Independence'],
              },
              {
                name: 'Evaluating Statistical Claims',
                subtopics: ['Population parameters vs estimates', 'Margin of error basics', 'Correlation vs causation'],
              },
            ],
          },
          {
            name: 'Geometry and Trigonometry',
            weightage: 15,
            topics: [
              {
                name: 'Area and Volume',
                subtopics: ['Triangles, circles and composite areas', 'Prisms, cylinders, cones, spheres'],
              },
              {
                name: 'Lines, Angles and Triangles',
                subtopics: ['Parallel lines and transversals', 'Triangle properties and congruence', 'Similar triangles'],
              },
              {
                name: 'Right Triangles and Trigonometry',
                subtopics: ['Pythagorean theorem', 'Sine, cosine, tangent ratios', 'Special right triangles'],
              },
              {
                name: 'Circles',
                subtopics: ['Central and inscribed angles', 'Arc length and sector area', 'Circle equations', 'Tangents and chords'],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'act',
    name: 'ACT',
    fullName: 'American College Testing',
    aliases: ['american college testing', 'act test'],
    region: 'United States',
    category: 'Undergraduate admission aptitude',
    popularity: 78,
    syllabusVerified: '2026-10-20',
    website: 'https://www.act.org',
    overview: {
      conductor: 'ACT, Inc.',
      level: 'High-school → undergraduate admission (US)',
      stages: ['Single stage (optional Writing essay)'],
      papers: ['English', 'Math', 'Reading', 'Science', 'Writing (optional)'],
      duration: '2 h 55 min without Writing; 3 h 35 min with',
      marking: 'Composite 1–36 (average of four sections)',
      negativeMarking: 'None',
      questionTypes: ['Multiple-choice (4 options)', 'Optional essay'],
      notes:
        'The Enhanced ACT (rolling out 2025) shortens the test and makes it adaptive in some digital forms; the Science section becomes optional for online testers.',
    },
    sources: [
      { title: 'ACT test overview', url: 'https://www.act.org/content/act/en/products-and-services/the-act.html', host: 'act.org' },
    ],
    subjects: [
      {
        name: 'English',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Usage and Mechanics',
            topics: [
              { name: 'Grammar and Usage', subtopics: ['Subject-verb agreement', 'Verb forms and tense', 'Pronoun usage', 'Modifiers and comparisons'] },
              { name: 'Sentence Structure', subtopics: ['Fragments and run-ons', 'Coordination and subordination', 'Parallel structure'] },
              { name: 'Punctuation', subtopics: ['Commas', 'Semicolons and colons', 'Apostrophes', 'Dashes and parentheses'] },
            ],
          },
          {
            name: 'Rhetorical Skills',
            topics: [
              { name: 'Strategy', subtopics: ['Adding and deleting sentences', 'Purpose and audience', 'Word choice'] },
              { name: 'Organization', subtopics: ['Sentence and paragraph order', 'Transitions'] },
              { name: 'Style', subtopics: ['Concision', 'Tone and clarity', 'Avoiding redundancy'] },
            ],
          },
        ],
      },
      {
        name: 'Mathematics',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Number and Quantity',
            topics: [
              { name: 'Real and Complex Numbers', subtopics: ['Integer and rational operations', 'Complex number arithmetic', 'Matrices (basic operations)'] },
            ],
          },
          {
            name: 'Algebra',
            topics: [
              { name: 'Expressions and Equations', subtopics: ['Solving linear and quadratic equations', 'Absolute value equations', 'Systems of equations'] },
              { name: 'Functions', subtopics: ['Function notation and composition', 'Linear and quadratic models', 'Exponential and logarithmic functions', 'Piecewise functions'] },
            ],
          },
          {
            name: 'Geometry',
            topics: [
              { name: 'Plane Geometry', subtopics: ['Triangles and congruence', 'Circles and their properties', 'Perimeter, area, angle relationships'] },
              { name: 'Coordinate Geometry', subtopics: ['Slope and distance', 'Midpoint', 'Conics basics (parabola, circle)'] },
              { name: 'Solid Geometry', subtopics: ['Volume and surface area of solids'] },
            ],
          },
          {
            name: 'Statistics and Probability',
            topics: [
              { name: 'Data Analysis', subtopics: ['Mean, median, mode', 'Range and spread', 'Interpreting tables and graphs'] },
              { name: 'Probability', subtopics: ['Simple and compound events', 'Counting techniques'] },
            ],
          },
          {
            name: 'Trigonometry',
            topics: [
              { name: 'Right-Triangle Trigonometry', subtopics: ['SOH-CAH-TOA', 'Special angles', 'Applications'] },
              { name: 'Trigonometric Identities and Graphs', subtopics: ['Basic identities', 'Graphs of sine and cosine', 'Radians'] },
            ],
          },
        ],
      },
      {
        name: 'Reading',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Key Ideas and Details',
            topics: [
              { name: 'Main Idea and Theme', subtopics: ['Identifying central ideas', 'Summarization'] },
              { name: 'Supporting Details', subtopics: ['Locating and interpreting details', 'Sequencing events'] },
              { name: 'Comparing Perspectives', subtopics: ['Understanding character viewpoints', 'Comparing texts'] },
            ],
          },
          {
            name: 'Craft and Structure',
            topics: [
              { name: 'Word Meanings in Context', subtopics: ['Vocabulary in context', 'Figurative language'] },
              { name: 'Authorial Choices', subtopics: ['Structure and purpose', 'Tone and voice', 'Narrative perspective'] },
            ],
          },
          {
            name: 'Integration of Knowledge',
            topics: [
              { name: 'Claim-Evidence Analysis', subtopics: ['Evaluating arguments', 'Distinguishing fact from opinion'] },
            ],
          },
        ],
      },
      {
        name: 'Science',
        units: [
          {
            name: 'Interpretation of Data',
            topics: [
              { name: 'Scientific Tables and Graphs', subtopics: ['Reading graphs and scatterplots', 'Interpolation and extrapolation', 'Trends and patterns in data'] },
              { name: 'Measurement and Units', subtopics: ['Unit conversions', 'Precision and significant figures in context'] },
            ],
          },
          {
            name: 'Scientific Investigation',
            topics: [
              { name: 'Experimental Design', subtopics: ['Variables and controls', 'Comparing experiments', 'Extending procedures'] },
            ],
          },
          {
            name: 'Evaluation of Models and Results',
            topics: [
              { name: 'Hypotheses and Theories', subtopics: ['Assumptions in models', 'Consistency with data', 'Alternative explanations'] },
            ],
          },
          {
            name: 'Scientific Background Knowledge',
            topics: [
              { name: 'Biology', subtopics: ['Cell basics', 'Genetics and heredity', 'Ecosystems'] },
              { name: 'Chemistry', subtopics: ['Elements and the periodic table', 'Bonding and reactions', 'Acids and bases'] },
              { name: 'Physics', subtopics: ['Forces and motion', 'Energy', 'Electricity basics'] },
              { name: 'Earth and Space Science', subtopics: ['Plate tectonics', 'Weather and climate', 'Solar system'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'gre',
    name: 'GRE',
    fullName: 'Graduate Record Examinations (shortened GRE)',
    aliases: ['graduate record examination', 'gre general test', 'gre revised'],
    region: 'Global',
    category: 'Graduate admission aptitude',
    popularity: 88,
    syllabusVerified: '2026-10-20',
    website: 'https://www.ets.org/gre',
    overview: {
      conductor: 'ETS (Educational Testing Service)',
      level: 'Undergraduate → graduate/PG admission worldwide',
      stages: ['Single stage (shortened since Sep 2023)'],
      papers: ['Verbal Reasoning', 'Quantitative Reasoning', 'Analytical Writing'],
      duration: '1 h 58 min total (AW 30 min · V 2×~12 min · Q 2×~21-26 min)',
      marking: 'V 130–170 · Q 130–170 · AW 0–6',
      negativeMarking: 'None',
      questionTypes: ['Multiple-choice (1 or more answers)', 'Numeric entry', 'Quantitative comparison', 'Select-in-passage', 'Analyze an issue essay'],
      notes: 'Section-adaptive. Calculator provided on Quant. No vocabulary out of context — words tested in context.',
    },
    sources: [
      { title: 'GRE test content and structure', url: 'https://www.ets.org/gre/revised_general/about', host: 'ets.org' },
    ],
    subjects: [
      {
        name: 'Verbal Reasoning',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Reading Comprehension',
            topics: [
              { name: 'Main Ideas and Structure', subtopics: ['Primary purpose', 'Relationships between ideas', 'Text organization'] },
              { name: 'Inference and Application', subtopics: ['Drawing inferences', 'Applying information to new contexts'] },
              { name: 'Author Perspective and Tone', subtopics: ['Author attitude', 'Rhetorical strategies'] },
              { name: 'Select-in-Passage Questions', subtopics: ['Highlighting specific sentences as answers'] },
            ],
          },
          {
            name: 'Text Completion',
            topics: [
              { name: 'Single-Blank Completions', subtopics: ['Vocabulary in context', 'Logical sentence flow'] },
              { name: 'Multi-Blank Completions', subtopics: ['Sentence relationships', 'Shift words and contrast', 'Coherence across blanks'] },
            ],
          },
          {
            name: 'Sentence Equivalence',
            topics: [
              { name: 'Synonym Pairs in Context', subtopics: ['Choosing two words completing the sentence with the same meaning'] },
            ],
          },
        ],
      },
      {
        name: 'Quantitative Reasoning',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Arithmetic',
            topics: [
              { name: 'Number Properties and Operations', subtopics: ['Integers, fractions, decimals', 'Exponents and roots', 'Ratio, proportion and percent'] },
              { name: 'Number Line and Estimation', subtopics: ['Ordering and absolute value', 'Rounding and estimation'] },
            ],
          },
          {
            name: 'Algebra',
            topics: [
              { name: 'Expressions and Equations', subtopics: ['Simplifying expressions', 'Linear and quadratic equations', 'Simultaneous equations'] },
              { name: 'Inequalities', subtopics: ['Linear inequalities', 'Quadratic inequalities', 'Absolute value inequalities'] },
              { name: 'Functions', subtopics: ['Notation, domain, range', 'Graphs of functions', 'Function composition'] },
              { name: 'Word Problems', subtopics: ['Rate and work', 'Mixture and interest', 'Sets and Venn reasoning'] },
              { name: 'Sequences', subtopics: ['Arithmetic and geometric sequences', 'Series sums'] },
            ],
          },
          {
            name: 'Geometry',
            topics: [
              { name: 'Lines, Angles and Triangles', subtopics: ['Angle rules', 'Triangle congruence and similarity', 'Pythagorean theorem'] },
              { name: 'Circles and Polygons', subtopics: ['Circumference, area, arcs', 'Interior/exterior angles of polygons'] },
              { name: 'Three-Dimensional Figures', subtopics: ['Volume and surface area'] },
              { name: 'Coordinate Geometry', subtopics: ['Slope, distance, midpoint', 'Line equations', 'Graphs of conic basics'] },
            ],
          },
          {
            name: 'Data Analysis',
            topics: [
              { name: 'Descriptive Statistics', subtopics: ['Mean, median, mode, range', 'Standard deviation and quartiles'] },
              { name: 'Data Interpretation', subtopics: ['Tables, bar/line graphs, scatterplots', 'Reading charts under time'] },
              { name: 'Counting and Probability', subtopics: ['Permutations and combinations', 'Simple and compound probability', 'Events (independent/mutually exclusive)'] },
              { name: 'Data Distributions', subtopics: ['Frequency distributions', 'Normal distribution basics'] },
            ],
          },
          {
            name: 'Quantitative Comparison Strategies',
            topics: [
              { name: 'Quantity A vs Quantity B', subtopics: ['Matching wits with quantities', 'Plugging numbers and edge cases', 'When information is insufficient'] },
            ],
          },
        ],
      },
      {
        name: 'Analytical Writing',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Analyze an Issue',
            topics: [
              { name: 'Argument Construction', subtopics: ['Position and thesis', 'Reasons and evidence', 'Counterexamples and concessions'] },
              { name: 'Essay Structure', subtopics: ['Introduction and conclusion', 'Paragraph cohesion', 'Transitions'] },
              { name: 'Language and Clarity', subtopics: ['Precise wording', 'Sentence variety', 'Grammar control'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'gmat',
    name: 'GMAT',
    fullName: 'Graduate Management Admission Test (Focus Edition)',
    aliases: ['gmat focus', 'graduate management admission test'],
    region: 'Global',
    category: 'MBA admission aptitude',
    popularity: 82,
    syllabusVerified: '2026-10-20',
    website: 'https://www.mba.com',
    overview: {
      conductor: 'GMAC (Graduate Management Admission Council)',
      level: 'Undergraduate → MBA / business-school admission',
      stages: ['Single stage — section order is selectable'],
      papers: ['Quantitative Reasoning', 'Verbal Reasoning', 'Data Insights'],
      duration: '2 h 15 min',
      marking: '205–805 total; section subscores + percentile',
      negativeMarking: 'None',
      questionTypes: ['Problem solving', 'Data sufficiency', 'Reading comprehension', 'Critical reasoning', 'Data-sufficiency-style DI items', 'Table/graph/two-part analysis'],
      notes: 'Focus Edition replaced the classic GMAT in Feb 2024: no AWA, no sentence correction, new Data Insights section. Question-level adaptive.',
    },
    sources: [
      { title: 'GMAT Focus Edition structure', url: 'https://www.mba.com/exams/gmat-focus-edition', host: 'mba.com' },
    ],
    subjects: [
      {
        name: 'Quantitative Reasoning',
        mappedSubjectId: 'mathematics',
        units: [
          {
            name: 'Arithmetic',
            topics: [
              { name: 'Number Properties', subtopics: ['Integers, factors, multiples', 'Even/odd and positive/negative rules', 'Fractions, decimals, percents'] },
              { name: 'Ratio and Proportion', subtopics: ['Rates and work', 'Mixtures', 'Scale problems'] },
              { name: 'Powers and Roots', subtopics: ['Exponent laws', 'Radicals and estimation'] },
            ],
          },
          {
            name: 'Algebra',
            topics: [
              { name: 'Equations and Inequalities', subtopics: ['Linear and quadratic equations', 'Simultaneous equations', 'Inequalities and absolute value'] },
              { name: 'Functions and Expressions', subtopics: ['Algebraic manipulation', 'Function notation', 'Symbolic operations'] },
            ],
          },
          {
            name: 'Word Problems',
            topics: [
              { name: 'Applied Problem Solving', subtopics: ['Interest, profit and loss', 'Sets and overlapping groups', 'Statistics in context'] },
            ],
          },
          {
            name: 'Geometry',
            topics: [
              { name: 'Geometry Fundamentals', subtopics: ['Angles, triangles, circles', 'Areas and volumes', 'Coordinate geometry basics'] },
            ],
          },
          {
            name: 'Data Sufficiency',
            topics: [
              { name: 'Sufficiency Logic', subtopics: ['Statement (1)/(2) evaluation', 'Combining statements', 'Avoiding over-computation'] },
            ],
          },
        ],
      },
      {
        name: 'Verbal Reasoning',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Reading Comprehension',
            topics: [
              { name: ' Passage Analysis', subtopics: ['Main idea and supporting ideas', 'Inference', 'Application', 'Logical structure', 'Style and tone'] },
            ],
          },
          {
            name: 'Critical Reasoning',
            topics: [
              { name: 'Argument Structure', subtopics: ['Premises, conclusion, assumptions'] },
              { name: 'Strengthen and Weaken', subtopics: ['Identifying evidence gaps', 'Evaluating additional information'] },
              { name: 'Evaluation and Assumptions', subtopics: ['Assumption identification', 'Paradox resolution', 'Inference from arguments'] },
            ],
          },
        ],
      },
      {
        name: 'Data Insights',
        mappedSubjectId: 'aptitude',
        units: [
          {
            name: 'Data Interpretation',
            topics: [
              { name: 'Tables and Graphs', subtopics: ['Sorting and reading tables', 'Multi-source chart reading'] },
              { name: 'Numerical Reasoning with Data', subtopics: ['Percent change and growth', 'Comparisons across datasets'] },
            ],
          },
          {
            name: 'Two-Part Analysis',
            topics: [
              { name: 'Paired-Solution Problems', subtopics: ['Quant two-part items', 'Verbal/logic two-part items'] },
            ],
          },
          {
            name: 'Integrated Reasoning Item Types',
            topics: [
              { name: 'Multi-Source Reasoning', subtopics: ['Synthesizing information from tabs', 'Identifying relevant data'] },
              { name: 'Graphics Interpretation', subtopics: ['Reading scatterplots, bar charts, bubble charts', 'Trend and slope interpretation'] },
              { name: 'Table Analysis', subtopics: ['Sorting to verify statements', 'Conditional statements from tables'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'toefl',
    name: 'TOEFL',
    fullName: 'Test of English as a Foreign Language (TOEFL iBT)',
    aliases: ['toefl ibt', 'test of english as a foreign language'],
    region: 'Global',
    category: 'English language proficiency',
    popularity: 80,
    syllabusVerified: '2026-10-20',
    website: 'https://www.ets.org/toefl',
    overview: {
      conductor: 'ETS',
      level: 'Non-native English speakers → university admission / visas',
      stages: ['Single stage'],
      papers: ['Reading', 'Listening', 'Speaking', 'Writing'],
      duration: '≈ 1 h 56 min (shortened format since July 2023)',
      marking: '0–30 per section; 0–120 total',
      negativeMarking: 'None',
      questionTypes: ['Multiple-choice', 'Insert-a-sentence', 'Summarize/summarize & speak tasks', 'Integrated writing', 'Academic discussion task'],
      notes: 'MyBest scores accepted by many institutions. AI speaking scoring with human quality checks.',
    },
    sources: [
      { title: 'TOEFL iBT test content', url: 'https://www.ets.org/toefl/test-takers/ibt/about/content', host: 'ets.org' },
    ],
    subjects: [
      {
        name: 'Reading',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Reading Comprehension Skills',
            topics: [
              { name: 'Vocabulary and Reference', subtopics: ['Word meaning in context', 'Pronoun reference'] },
              { name: 'Sentence Simplification', subtopics: ['Choosing simplified restatements'] },
              { name: 'Insert Text Questions', subtopics: ['Placing a sentence in a passage'] },
              { name: 'Factual and Negative Factual Information', subtopics: ['Detail retrieval', 'EXCEPT/NOT questions'] },
              { name: 'Inference and Rhetorical Purpose', subtopics: ['Drawing inferences', 'Why the author mentions X'] },
              { name: 'Summary and Fill-in-a-Table', subtopics: ['Selecting major ideas', 'Organizing information'] },
            ],
          },
        ],
      },
      {
        name: 'Listening',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Listening Comprehension Skills',
            topics: [
              { name: 'Main Idea and Purpose', subtopics: ['Gist of conversations and lectures'] },
              { name: 'Detail and Function', subtopics: ['Supporting details', 'Purpose of examples'] },
              { name: 'Attitude and Organization', subtopics: ['Speaker attitude', 'Lecture structure and digressions'] },
              { name: 'Connecting Information', subtopics: ['Inferences', 'Predictions and categorization'] },
            ],
          },
        ],
      },
      {
        name: 'Speaking',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Independent and Integrated Speaking',
            topics: [
              { name: 'Personal Preference Task', subtopics: ['Expressing and supporting an opinion (15–45 s prep/speak)'] },
              { name: 'Campus Situation Summary', subtopics: ['Reading + listening → spoken summary'] },
              { name: 'Academic Course Summary', subtopics: ['Lecture concept → spoken explanation with examples'] },
            ],
          },
        ],
      },
      {
        name: 'Writing',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Integrated Writing',
            topics: [
              { name: 'Reading–Listening–Writing Task', subtopics: ['Contrasting a lecture with a passage', 'Note-taking strategies', 'Objective reporting language'] },
            ],
          },
          {
            name: 'Academic Discussion',
            topics: [
              { name: 'Discussion Post Response', subtopics: ['Adding a relevant post to a class discussion', 'Position + reasons + examples', '10-minute writing'] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ielts',
    name: 'IELTS',
    fullName: 'International English Language Testing System (Academic)',
    aliases: ['ielts academic', 'international english language testing system', 'ielts general'],
    region: 'Global',
    category: 'English language proficiency',
    popularity: 84,
    syllabusVerified: '2026-10-20',
    website: 'https://ielts.org',
    overview: {
      conductor: 'British Council, IDP: IELTS Australia, Cambridge Assessment English',
      level: 'Non-native English speakers → study / migration / work',
      stages: ['Single stage (Academic or General Training)'],
      papers: ['Listening', 'Reading', 'Writing', 'Speaking'],
      duration: '2 h 40 min (+ speaking up to 14 min)',
      marking: 'Band 0–9 per skill; overall band = average',
      negativeMarking: 'None',
      questionTypes: ['Multiple choice', 'Matching', 'Plan/map/diagram labelling', 'Form/note/table completion', 'Short answers', 'Essays and reports'],
      notes: 'Academic Reading/Writing differ from General Training. Speaking is a face-to-face interview.',
    },
    sources: [
      { title: 'IELTS test format', url: 'https://ielts.org/take-a-test/how-is-ielts-scored', host: 'ielts.org' },
    ],
    subjects: [
      {
        name: 'Listening',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Listening Skills',
            topics: [
              { name: 'Understanding Main Ideas and Details', subtopics: ['Section 1: everyday social conversation', 'Section 2: everyday social monologue', 'Section 3: academic discussion', 'Section 4: academic lecture'] },
              { name: 'Task Types', subtopics: ['Form/note/table completion', 'Multiple choice', 'Matching', 'Map/plan labelling', 'Sentence completion'] },
              { name: 'Spelling and Grammar in Answers', subtopics: ['Word limits', 'Plurals and spelling accuracy'] },
            ],
          },
        ],
      },
      {
        name: 'Academic Reading',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Reading Skills',
            topics: [
              { name: 'Skimming and Scanning', subtopics: ['Global comprehension', 'Locating specific information'] },
              { name: 'Task Types', subtopics: ['True/False/Not Given', 'Yes/No/Not Given (writer views)', 'Headings matching', 'Paragraph information matching', 'Summary completion', 'Diagram label completion'] },
              { name: 'Vocabulary and Paraphrase', subtopics: ['Synonym recognition', 'Dealing with unknown words'] },
            ],
          },
        ],
      },
      {
        name: 'Academic Writing',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Task 1 — Report Writing',
            topics: [
              { name: 'Describing Visual Data', subtopics: ['Line graphs, bar charts, pie charts, tables', 'Processes and maps', 'Trend language and comparisons', 'Overview writing'] },
            ],
          },
          {
            name: 'Task 2 — Essay Writing',
            topics: [
              { name: 'Argument Essays', subtopics: ['Opinion (agree/disagree)', 'Discussion (both views)', 'Advantages/disadvantages', 'Problem-solution', 'Two-part questions'] },
              { name: 'Coherence and Cohesion', subtopics: ['Paragraphing', 'Linking devices'] },
              { name: 'Lexical Resource', subtopics: ['Range and accuracy of vocabulary', 'Topic-specific collocations'] },
              { name: 'Grammatical Range and Accuracy', subtopics: ['Complex sentences', 'Tense control', 'Error density'] },
            ],
          },
        ],
      },
      {
        name: 'Speaking',
        mappedSubjectId: 'english',
        units: [
          {
            name: 'Speaking Skills',
            topics: [
              { name: 'Part 1: Introduction and Interview', subtopics: ['Familiar topics: home, work, studies, interests'] },
              { name: 'Part 2: Long Turn', subtopics: ['Cue-card monologue', '1-minute notes, 2-minute talk'] },
              { name: 'Part 3: Discussion', subtopics: ['Abstract issues related to Part 2', 'Justifying opinions'] },
              { name: 'Fluency, Coherence and Pronunciation', subtopics: ['Speech rate and pausing', 'Connected speech and intonation'] },
            ],
          },
        ],
      },
    ],
  },
]
