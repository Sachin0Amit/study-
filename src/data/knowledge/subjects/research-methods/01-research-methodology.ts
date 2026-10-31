/**
 * Knowledge Universe — Research Methods — Chapter 01: Research Methodology
 * 3 lessons · ~5,084 words
 * field: Research Methods
 * legacy sources: social-sciences.ts, x31-ugc-net-paper1-pass.ts, x70-library-org-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Research Methodology, How We Know]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 res-survey-instrument-design — Survey and Questionnaire Design: Asking Questions That Measure
 *   01.2 res-research-methodology-hypothesis-sampling — Research Methodology: From Question to Sampling to Ethics
 *   01.3 soc-research-methods-toolkit — Social Research Methods: The Toolkit
 */
import type { KnowledgeTopic } from '../../types'

export const researchMethodsCh01: KnowledgeTopic[] = [
  {
  id: 'res-survey-instrument-design',
  title: 'Survey and Questionnaire Design: Asking Questions That Measure',
  domain: 'Social Sciences',
  field: 'Research Methods',
  branch: 'Research Methodology',
  tier: 'core',
  concepts: [
    'The questionnaire is an instrument',
    'Wording: where questions go wrong',
    'Answer formats: from open text to Likert scales',
    'Response biases and question order',
    'Mode effects and sensitive questions',
    'Pretesting and Total Survey Error',
  ],
  words: 1785,
  readMins: 9,
  addedOn: '2026-10-29',
  blocks: [
    {
      kind: 'para',
      text: 'A survey turns opinions, behaviours and self-reports into data, and it does so through one fragile component: the question. This lesson is about that component as an instrument — how wording, format, order and administration mode each leave fingerprints on the numbers. It is deliberately the companion to the sampling lesson: that one owns how to select who answers (and what the 1936 Literary Digest fiasco taught about selection); this one owns what to ask and how, because a perfectly representative sample answering badly-worded questions still yields beautifully precise nonsense.',
    },
    {
      kind: 'callout',
      title: 'Why this matters',
      text: 'Most of what societies know about themselves — labour statistics, health behaviour, customer satisfaction, public opinion — arrives by survey, and most survey cost is invisible: nobody sees the questions that were never asked, the respondents who silently answered "agree" to everything, or the order effect that manufactured a majority. Instrument literacy is therefore not a specialist skill. Product teams, journalists, clinicians and citizens all read survey claims weekly, and the difference between a measured opinion and a measuring artefact is exactly the toolkit in this lesson.',
      tone: 'insight',
    },
    { kind: 'heading', text: 'Core Concepts' },
    {
      kind: 'para',
      text: 'The questionnaire is an instrument. Measurement people distinguish the construct (what you want to know — say, financial anxiety) from the indicators (the actual questions — say, agreement with "I worry about money weekly"). A questionnaire is the calibrated link between them, and like any instrument it can be valid or invalid, reliable or noisy, sensitive or blunt. The design discipline runs forward from construct to items and backward from analysis plan: before writing a single question, the designer states what conclusion the data must support and which statistic will carry it, because a question whose answers cannot feed the planned analysis was wasted at birth.',
    },
    {
      kind: 'para',
      text: 'Wording: where questions go wrong. The classic failure modes have names because they recur. Double-barreled questions ask two things at once ("Was the course interesting and useful?" — a respondent cannot love the topic and hate the grading and answer honestly). Loaded or leading questions presume an answer ("Do you agree the library\'s outdated hours should be extended?" — outdated is doing the work). Double negatives tangle ("Do you disagree that exams are not unfair?"). Ambiguous quantifiers ("often", "several", "recently") mean different frequencies to different respondents. And jargon imports class bias: "integer" and "product" exclude readers that "whole number" and "item" do not. Each defect has the same cure: one idea per question, neutral stems, concrete wording, and frequencies spelled out ("more than once a week") rather than adverbised.',
    },
    {
      kind: 'para',
      text: 'Answer formats: from open text to Likert scales. Open questions yield richness but cost coding labour and invite interpretation at the analysis stage; closed questions yield clean data at the price of the designer\'s imagination being the ceiling. The workhorse closed format is the Likert scale — Rensis Likert\'s 1932 technique of offering graded agreement options (strongly agree to strongly disagree) around a statement. Design choices are consequential even here: an odd number of points gives a neutral midpoint; an even number forces a side ("forced choice"); labelling every point or only the poles changes how people answer. Rating (independent scores) and ranking (forced order) answer different questions — ranks force trade-offs that ratings allow everyone to escape. And a "don\'t know" option is not decoration: adding or removing it measurably changes distributions, so it is a design decision with a stated reason, never a default.',
    },
    {
      kind: 'para',
      text: 'Response biases and question order. Respondents are not laboratory balances. Acquiescence (yea-saying) inflates agreement across the board, especially among lower-literacy or lower-effort respondents; the standard defences are balanced items phrased both ways and attentive attention checks. Social desirability pulls answers toward the respectable — reported voting, hand-washing and reading all run high; self-administered modes and careful item wording reduce it. Satisficing — Krosnick\'s term for offering minimal acceptable effort — shows up as straight-lining down long grids; shorter instruments and randomised item order are the countermeasures. Order effects are the subtlest: earlier questions create context for later ones. Howard Schuman and Stanley Presser\'s classic split-ballot experiments (Questions and Answers in Attitude Surveys, 1981) showed support for spending can swing by double digits depending only on whether the word "welfare" or the phrase "assistance to the poor" carries the question — and general questions asked before specific ones produce different totals than the reverse. The funnel technique exploits this deliberately: broad first, then narrow.',
    },
    {
      kind: 'para',
      text: 'Mode effects and sensitive questions. How a question reaches a respondent changes the answer. Face-to-face interviews build rapport and completion but maximise interviewer effects and social desirability; telephone compresses scales (people avoid extremes when speaking); mail and online self-administration lower desirability pressure but depend on literacy and invite straight-lining on grids. Sensitive questions — income, drug use, sexual behaviour — are the sharpest case: research practice moves them late in the instrument, softens them with neutral preambles, and prefers self-administered computer modes precisely because no human hears the answer. Cross-cultural work adds translation: the standard is forward translation plus independent back-translation, with discrepancies reconciled — a questionnaire is not "the same survey in Spanish" because a phrase is translated; it is the same survey only if the back-translated version still measures the construct.',
    },
    {
      kind: 'para',
      text: 'Pretesting and Total Survey Error. Survey methodology organises all the ways a survey can go wrong into the Total Survey Error frame: coverage error (the frame misses part of the population), sampling error (the sample misses the frame — the sampling lesson\'s territory), nonresponse error (the missing differ from the answering), measurement error (questions mean different things to different people — this lesson\'s territory), and processing error (coding, entry, weighting). Pretesting attacks measurement error before fielding: expert review checks the logic, and cognitive interviewing — asking pilot respondents to think aloud as they answer — exposes what a question actually means inside their heads, which is routinely not what the designer intended. A pilot run with the planned analysis follows, because the pilot\'s job is to break the instrument cheaply. The rule of practice is blunt: pretest or perish — every untested question is a hypothesis wearing a uniform.',
    },
    {
      kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: diagnose and rewrite three defective items, then design the split-ballot test that would prove a wording effect.',
        'Item one — "Was the library\'s new seating area interesting and useful?" — is double-barreled; rewrite as two items: "How satisfied are you with the new seating area for group study?" and separately for quiet study, each on a labelled five-point scale.',
        'Item two — "Do you agree the outdated borrowing policy should be reformed?" — is loaded; rewrite neutrally: "The borrowing policy should be reformed: strongly disagree, disagree, neither agree nor disagree, agree, strongly agree."',
        'Item three — "How often do you exercise?" — has an ambiguous quantifier; rewrite with explicit bands: "never", "less than once a week", "1-2 times a week", "3-5 times", "daily or nearly so".',
        'Design the proof: randomly assign respondents to form A ("welfare spending") or form B ("assistance to the poor"), same scale, same position. Suppose n = 500 per arm with 52% versus 38% support: the difference is 14 points, and the standard error of the difference is √(0.52×0.48/500 + 0.38×0.62/500) ≈ 3.1 points — a 14-point gap is roughly 4.5 standard errors, far beyond sampling noise, so the wording itself moved the number. That is a measurement error demonstrated in the field.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Official statistics: labour-force surveys, census instruments and health interviews are the largest survey operations on earth — their design documents are public masterclasses in this lesson\'s craft.',
        'Product and UX research: every "how satisfied are you" modal is a survey instrument; the double-barreled and leading-question defects are epidemic in software.',
        'Health measurement: patient-reported outcome scales (pain, mood, function) are validated questionnaires, built with cognitive interviewing and psychometric testing before deployment.',
        'Journalism and public discourse: reading a poll competently means asking who was sampled (the other lesson) and what exactly was asked, in what order, in which mode (this one).',
        'Academic scale development: psychology and education build multi-item scales where item writing, piloting and reliability analysis are inseparable stages of the same pipeline.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'A big sample cannot rescue bad questions — it just measures the wrong thing with great precision. Treat Likert items as ordinal, not interval: averaging "strongly agree = 5" is a modelling assumption to state, not a truth. Long grids breed satisficing and straight-lining; fatigue is a design defect, not a respondent vice. Do not add or drop "don\'t know" options casually — it changes distributions. In cross-language work, a forward translation without back-translation is a hope, not a validation. And remember the division of labour with the sampling lesson: weighting and selection fix representativeness, never measurement — no weight can repair a question respondents could not understand.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'double-barreled question', def: 'One question asking two things, making any single answer a compromise.' },
        { term: 'Likert scale', def: 'Graded agreement options around a statement, from Likert\'s 1932 technique.' },
        { term: 'acquiescence bias', def: 'The tendency to agree regardless of content, inflating agreement across items.' },
        { term: 'social desirability bias', def: 'Answers pulled toward the respectable; strongest in interviewer-administered modes.' },
        { term: 'question-order effect', def: 'Earlier questions changing the meaning or totals of later ones.' },
        { term: 'funnel technique', def: 'Sequencing broad questions before specific ones to control context.' },
        { term: 'cognitive interviewing', def: 'Pretesting by having respondents think aloud, exposing what questions actually mean to them.' },
        { term: 'Total Survey Error', def: 'The frame covering coverage, sampling, nonresponse, measurement and processing error.' },
        { term: 'satisficing', def: 'Minimal-effort answering — straight-lining grids, skipping comprehension.' },
      ] },
      { kind: 'heading', text: 'Check Your Understanding' },
      { kind: 'quiz', items: [
        {
          q: '"Was the workshop engaging and well-organised?" is defective because it is…',
          options: ['too long', 'double-barreled — two questions in one', 'open-ended', 'socially desirable'],
          answer: 1,
          explain: 'A respondent who found it engaging but badly organised has no honest single answer; split it into two items.',
        },
        {
          q: 'A split-ballot experiment randomly assigns "welfare spending" versus "assistance to the poor" wording and finds a 14-point gap at about 4.5 standard errors. The sound conclusion is that…',
          options: ['the public is inconsistent', 'the difference exceeds sampling noise, so wording itself moved the measurement', 'one group lied', 'the sample was too small'],
          answer: 1,
          explain: 'Random assignment makes the two arms statistically comparable, so a gap far beyond the standard error of the difference is a genuine wording (measurement) effect.',
        },
        {
          q: 'Sensitive questions are best handled by…',
          options: ['placing them first to get them over with', 'self-administered modes late in the instrument with neutral wording', 'asking the interviewer to guess', 'doubling the sample size'],
          answer: 1,
          explain: 'Self-administration removes the social audience that drives desirability bias, and late placement benefits from established rapport without contaminating earlier answers.',
        },
        {
          q: 'Cognitive interviewing during pretesting exists to…',
          options: ['increase the sample size cheaply', 'reveal what questions actually mean inside respondents\' heads', 'measure acquiescence', 'replace the pilot study'],
          answer: 1,
          explain: 'Think-aloud protocols expose misreadings and unintended interpretations while they are still cheap to fix — measurement-error inspection before fielding.',
        },
      ] },
    ],
  },
  {
    id: 'res-research-methodology-hypothesis-sampling',
    title: 'Research Methodology: From Question to Sampling to Ethics',
    domain: 'Social Sciences',
    field: 'Research Methods',
    branch: 'Research Methodology',
    tier: 'intermediate',
    concepts: [
      'Research: meaning, types and characteristics',
      'Positivism and post-positivism',
      'The seven steps of research',
      'Hypotheses, variables and operational definitions',
      'Research designs: experimental, descriptive, historical',
      'Probability and non-probability sampling',
      'Measurement scales and levels of data',
      'Reliability and validity',
      'Type I and Type II errors',
      'Research ethics: consent, fabrication, falsification, plagiarism',
      'ICT in research: databases, reference managers, plagiarism detection',
      'Thesis structure and citation styles',
    ],
    words: 2051,
    readMins: 10,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'Research aptitude is the one skill every postgraduate qualification tests, and UGC NET Paper 1 devotes a full unit to it — typically five to six questions. The exam does not ask for statistics; it asks whether you understand how knowledge claims are made honestly: how a vague curiosity becomes a researchable problem, how a sample can stand for a population, how a claim earns the word "valid", and how the whole enterprise can be corrupted by fabrication, falsification or plagiarism. Those four skills — problem formulation, sampling logic, quality criteria, ethics — are exactly what this lesson drills.',
      },
      {
        kind: 'para',
        text: 'The intellectual frame matters more than any single definition. Modern methodology inherited two stances: positivism, which holds that the social world can be studied with the objective, law-seeking tools of natural science, and post-positivism, its more modest successor, which accepts that all observation is theory-laden and that findings are provisional and probabilistic rather than proven. Almost every multiple-choice question about "the scientific approach" is secretly testing whether you know that a post-positivist treats a hypothesis as something to be refuted if possible, not decorated into truth.',
      },
      { kind: 'heading', text: 'What research is, and its main types' },
      {
        kind: 'para',
        text: 'Research is a systematic, controlled and self-correcting inquiry into a question — systematic because it follows an explicit method, self-correcting because its claims are open to challenge and revision. Its characteristics are the ones every textbook lists: objectivity, verifiability, generalisability, and cumulativeness (new work builds on old). The type vocabulary is the exam\u2019s favourite. Basic (pure) research aims at theory and understanding for its own sake; applied research aims at solving a concrete problem. Quantitative research measures with numbers and tests hypotheses statistically; qualitative research explores meanings through interviews, observation and texts. Exploratory studies map new territory, descriptive studies portray a situation as it is, and explanatory (causal) studies test why variables move together.',
      },
      {
        kind: 'para',
        text: 'The method families follow from those aims. Experimental research manipulates one variable (the independent variable) and observes its effect on another (the dependent variable) under controlled conditions, with random assignment to experimental and control groups — the only design that licenses strong causal language. Descriptive research — surveys, case studies, correlational work — observes without manipulating, so it can describe and associate but not cleanly prove cause. Historical research reconstructs the past from primary sources (documents, artefacts, records) and secondary sources (interpretations), with source criticism as its special skill. Qualitative designs add ethnography, grounded theory and phenomenology, each with its own toolkit of interviews and participant observation.',
      },
      { kind: 'heading', text: 'The steps of research' },
      {
        kind: 'para',
        text: 'The canonical sequence runs: identify the research problem; review the literature; formulate hypotheses (where the design allows); prepare the research design; collect data; analyse and interpret the data; generalise and report. Each step disciplines the next. A good problem statement is specific, feasible and consequential — not "what is education?" but "does class size affect reading scores in municipal primary schools?". The literature review positions the problem: what is known, what is contested, what gap remains. A hypothesis then converts the problem into a testable claim — a statement about the expected relation between variables that data can support or reject.',
      },
      {
        kind: 'para',
        text: 'Three vocabulary items around hypotheses earn marks reliably. The null hypothesis (H\u2080) states "no difference, no relationship"; the alternative hypothesis (H\u2081) is the researcher\u2019s claim. Variables must be operationally defined — translated from a concept into the exact procedure that measures it: "academic achievement" becomes "score on this 40-item test this term", so that any two researchers can replicate the measurement. And a variable\u2019s role matters: the independent variable is manipulated or treated as the presumed cause, the dependent variable is the measured outcome, while extraneous (confounding) variables are the uninvited third parties that designs must control for, through randomisation, matching, or statistical adjustment.',
      },
      { kind: 'heading', text: 'Sampling: how a part can speak for the whole' },
      {
        kind: 'para',
        text: 'Studying every member of a population is usually impossible, so research studies a sample and argues back to the population — an argument that is only as good as the sampling procedure. Probability sampling gives every population element a known, non-zero chance of selection, which makes statistical generalisation legitimate. Its four standard forms: simple random sampling selects purely by lot (random number tables); systematic sampling selects every k-th element from a random start; stratified sampling divides the population into meaningful strata (say, urban and rural) and samples within each, guaranteeing representation; cluster sampling samples naturally occurring groups (schools, villages) and can go multi-stage, trading some precision for enormous practicality.',
      },
      {
        kind: 'para',
        text: 'Non-probability sampling skips the known-chance guarantee and with it the licence to generalise statistically — but it is often the only feasible option. Convenience sampling takes whoever is at hand; purposive (judgemental) sampling hand-picks information-rich cases; snowball sampling asks each respondent to nominate the next, standard for hard-to-reach populations; quota sampling fills pre-set category quotas without randomisation. The exam\u2019s classic traps: calling convenience sampling "random" because it feels casual, or forgetting that bias in selection — not small size alone — is what corrupts a sample.',
      },
      {
        kind: 'example',
        title: 'Worked Example — choosing a design (Bhattacherjee, ch. 8\u201310 pattern)',
        steps: [
          'Problem: does a new remedial reading app improve reading scores of Class 6 students in one district?',
          'Design: true experiment if schools can be randomised — assign 20 schools to app use, 20 to usual teaching (control); otherwise a quasi-experiment or a pre-test/post-test descriptive comparison, and say so honestly.',
          'Sampling: population = district\u2019s Class 6 students. Stratify by block, randomly sample schools within strata (probability sampling), then sample classrooms.',
          'Measurement: operationalise "reading ability" as the standardised test score; the scale is interval-like; check test-retest reliability on a pilot and content validity with subject experts.',
          'Analysis: compare mean gains between groups with a t-test; a p-value below 0.05 rejects the null hypothesis — while acknowledging a 5 per cent Type I error risk.',
          'Ethics: parental informed consent, no coercion, data anonymised, results reported whether or not the app wins.',
        ],
      },
      { kind: 'heading', text: 'Measurement, reliability and validity' },
      {
        kind: 'para',
        text: 'Data come in four measurement scales, in rising order of power: nominal (categories — gender, blood group), ordinal (ordered categories — satisfaction ranks), interval (equal intervals, arbitrary zero — temperature in \u00b0C), and ratio (equal intervals with a true zero — weight, income). The scale decides which statistics are legitimate; you may average incomes but not blood groups. Quality has two pillars. Reliability is consistency: would the instrument give the same reading again (test-retest), across raters (inter-rater), or across its own halves (split-half, Cronbach\u2019s alpha)? Validity is truthfulness: does it measure what it claims to measure — content validity (coverage of the domain), criterion validity (agreement with an external standard), construct validity (does it really capture the theoretical concept)? An instrument can be reliable without being valid — a bathroom scale that always reads three kilos heavy is perfectly consistent and perfectly wrong — but a valid measure cannot be wildly unreliable.',
      },
      {
        kind: 'para',
        text: 'Error language completes the picture. A Type I error rejects a true null hypothesis — crying wolf; its tolerated risk is alpha (\u03b1), conventionally 0.05. A Type II error fails to reject a false null hypothesis — missing the effect; its risk is beta (\u03b2), and statistical power is 1 \u2212 \u03b2. Researchers shrink Type I risk by choosing stricter alpha, and shrink Type II risk by enlarging samples or sharpening instruments. Exam questions love the pairing: which error did the committee commit when it approved an ineffective drug, or rejected an effective one?',
      },
      { kind: 'heading', text: 'Ethics, ICT and the writing phase' },
      {
        kind: 'para',
        text: 'Research ethics has three layers the exam expects. Participant protection: informed consent, voluntary participation, no harm, confidentiality and anonymity, debriefing after any necessary deception — the standards that grew out of documented historical abuses and are now policed by ethics committees and institutional review boards. Integrity of the record: fabrication (inventing data), falsification (manipulating data or results) and plagiarism (presenting others\u2019 words or ideas without attribution) are the cardinal sins; UGC regulations require plagiarism screening of theses and prescribe penalties graded by severity. And honest reporting: negative results belong in the record too, and authorship must reflect real contribution.',
      },
      {
        kind: 'para',
        text: 'ICT has rewoven every step. Literature search runs through databases and online libraries — Scopus and Web of Science internationally, Shodhganga (Indian theses repository) and Shodhgangotri (research proposals), the e-resources consortia (INFLIBNET\u2019s e-Shodh Sindhu) nationally. Reference managers (Zotero, Mendeley, EndNote) store, format and insert citations; plagiarism-detection tools (Turnitin, URKUND/Ouriginal) compare drafts against corpora; spreadsheets and statistical packages (SPSS, R) carry the analysis; online surveys widen reach. None of these replace judgement — a garbage query returns garbage — but the modern researcher who cannot operate them is functionally illiterate.',
      },
      {
        kind: 'para',
        text: 'The writing phase has fixed conventions. A thesis runs: title page, abstract, introduction (problem, questions, significance), literature review, methodology, results, discussion, conclusion, references, appendices; a research article condenses the same skeleton, often under the IMRAD headings (Introduction, Methods, Results and Discussion). Citation styles differ by discipline — APA (author-date, social sciences), MLA (author-page, humanities), Chicago (notes-bibliography or author-date) — but all serve the same two duties: crediting sources and letting readers find them. Marks follow small, checkable disciplines: every in-text citation has a reference entry, every claim has a source or is flagged as the author\u2019s own inference.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A researcher divides a city\u2019s schools into government and private strata and then randomly samples within each. Which sampling method is this?',
            options: ['Simple random sampling', 'Stratified random sampling', 'Systematic sampling', 'Convenience sampling'],
            answer: 1,
            explain: 'The population was first divided into meaningful strata and random selection happened within each — the definition of stratified sampling; it guarantees each stratum is represented.',
          },
          {
            q: 'A bathroom scale consistently shows every object as 3 kg heavier than it is. The scale is:',
            options: ['unreliable and invalid', 'reliable but not valid', 'valid but unreliable', 'both reliable and valid'],
            answer: 1,
            explain: 'Consistency across uses is reliability, and the scale has it; agreement with the true value is validity, and it lacks that. Reliable-but-invalid is the classic pairing.',
          },
          {
            q: 'A study concludes a new drug works when in fact it does not. The researchers committed:',
            options: ['a Type II error', 'a Type I error', 'a sampling bias', 'a validity failure'],
            answer: 1,
            explain: 'They rejected a true null hypothesis (the drug is ineffective) — that is a Type I error, the risk priced into the significance level alpha.',
          },
          {
            q: 'Inventing datasets that were never collected is, by UGC\u2019s taxonomy:',
            options: ['plagiarism', 'falsification', 'fabrication', 'sloppy reporting only'],
            answer: 2,
            explain: 'Fabrication = making up data; falsification = manipulating real data; plagiarism = unattributed borrowing. The three are distinct cardinal sins of research integrity.',
          },
          {
            q: 'Which pairing of citation style and convention is correct?',
            options: [
              'MLA — author-date in parentheses',
              'APA — author and page number',
              'APA — author-date; MLA — author and page',
              'Chicago never uses footnotes',
            ],
            answer: 2,
            explain: 'APA uses author-date (social sciences); MLA uses author-page (humanities); Chicago offers notes-bibliography and author-date variants.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling any haphazard selection "random sampling" — randomness is a property of the selection procedure, not of apparent arbitrariness. Swapping reliability and validity definitions, the most common one-mark loss. Writing a hypothesis as a question instead of a testable statement. Claiming causation from a correlational (descriptive) study. Mixing up Type I and Type II errors — anchor with "Type I = cried wolf, rejected a true null". Forgetting that operational definition is about the measuring procedure, not the concept\u2019s dictionary meaning. And treating plagiarism detection as optional: UGC regulations make screening mandatory for thesis submission.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: basic descriptive statistics (mean, standard deviation) and the Logical Reasoning unit\u2019s inductive/deductive distinction. This lesson feeds the Data Interpretation unit (measurement scales reappear there) and any future empirical work you do. Primary reading: Anol Bhattacherjee, "Social Science Research: Principles, Methods, and Practices" (scholarcommons.usf.edu, CC BY-NC-SA) — chapters on research design, measurement and sampling; OpenStax Psychology 2e ch.2 "Psychological Research" (openstax.org, CC BY) for the experiment-vs-observation contrast and ethics standards.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Research is systematic, controlled, self-correcting inquiry; basic research seeks understanding, applied research seeks solutions.',
        'Steps: problem \u2192 literature \u2192 hypothesis \u2192 design \u2192 data \u2192 analysis \u2192 generalisation and report.',
        'Experimental designs manipulate and control (causal claims); descriptive and historical designs observe and reconstruct.',
        'Probability sampling (random, systematic, stratified, cluster) licenses generalisation; convenience, purposive, snowball and quota do not.',
        'Scales run nominal \u2192 ordinal \u2192 interval \u2192 ratio; reliability is consistency, validity is truthfulness.',
        'Type I rejects a true null; Type II accepts a false one; power = 1 \u2212 \u03b2.',
        'Ethics: consent, no harm, confidentiality — and never fabricate, falsify or plagiarise.',
      ] },
    ],
  },
  {
    id: "soc-research-methods-toolkit",
    title: "Social Research Methods: The Toolkit",
    domain: "Social Sciences",
    field: "Research Methods",
    branch: "How We Know",
    tier: "intermediate",
    concepts: [
      "Probability sampling and the 1936 poll",
      "Randomized experiments, lab to field",
      "Correlation, confounders, counterfactuals",
      "Validity and reliability",
      "Campbell's law and reactive measures",
      "Interviews and ethnography",
      "Replication and reform",
    ],
    words: 1248,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      { kind: "para", text: "Every claim in the social sciences rests on a method — a way of observing people that is better or worse at reaching the truth. A survey, an experiment and a year spent inside a community answer different questions, and picking the wrong tool is how research goes wrong before any arithmetic begins. This lesson tours the toolkit: sampling, causal inference, measurement, checking. You apply it whenever a headline begins “a study shows”." },
      { kind: "callout", title: "Why this matters", tone: "insight", text: "The same “study shows” can rest on ten self-selected respondents or a randomized trial of a million people, and the headline will not tell you which. One minute of design literacy — who was sampled, what was compared, what was measured — grades the evidence. A/B tests, customer surveys and program evaluations are this same toolkit at work." },
      { kind: "heading", text: "Core Concepts" },
      { kind: "para", text: "Surveys count answers, and they work only if the sample speaks for the population — a matter of selection, not size. In 1936 the Literary Digest mailed ten million ballots, got 2.4 million back, and called the American election for Alf Landon; George Gallup, polling tens of thousands chosen at random, correctly called Franklin Roosevelt. Its frame of subscribers and telephone owners skewed wealthy in a depression. Probability sampling, where every population member has a known chance of selection, lets a thousand people stand in for a million; a self-selected million can be worse than nothing, and nonresponse does the same damage." },
      { kind: "formula", name: "Margin of error (95 per cent)", latex: "\\text{MoE} \\approx \\frac{1}{\\sqrt{n}}", meaning: "For a simple random sample of n people, the 95 per cent margin of error on a proportion is roughly one over the square root of n: about three points at n of 1,000 and one point at 10,000 — four times the sample buys only half the accuracy." },
      { kind: "para", text: "Experiments settle causation by construction. Ronald Fisher's 1920s agricultural trials at Rothamsted showed that randomly assigning fertilizer to plots balances every other influence, known and unknown, on average. The method scales: Alan Gerber and Donald Green ran field experiments showing get-out-the-vote mailings barely move turnout, and Abhijit Banerjee, Esther Duflo and Michael Kremer randomized textbooks, deworming and microcredit across the developing world, work honored by the 2019 Nobel memorial prize. Robert LaLonde's 1986 warning still stands: statistical fixes applied to non-randomized job-training data badly missed the answer a real experiment had already produced." },
      { kind: "para", text: "Outside experiments, correlation is easy and causation is hard. Ice cream sales track drownings because summer drives both — a confounder, a third variable moving the presumed cause and the effect together. The counterfactual definition sharpens it: a cause changes the outcome relative to what would otherwise have happened, and “otherwise” is the road not taken. Since the 1990s the “credibility revolution” of Joshua Angrist and Jörn-Steffen Pischke has built substitutes for randomization: natural experiments, difference-in-differences comparisons, and regression discontinuity at an arbitrary cutoff. Each buys a slice of the experimental answer at the price of stated assumptions." },
      { kind: "para", text: "Before any design matters, the measure must mean something. Validity asks whether you captured the concept you named — is years of schooling the same as education? Reliability asks whether it repeats consistently across occasions and raters. Social measures are fragile: they react to being used. Donald Campbell's law warns that the more a quantitative indicator drives decisions, the more pressure distorts it — teach to the test and the test stops measuring learning. Serious researchers triangulate, measuring one concept several ways." },
      { kind: "para", text: "Numbers are one way of knowing. Structured interviews standardize questions so answers can be compared; semi-structured ones trade comparability for depth. Ethnography goes furthest: William Foote Whyte lived four years in Boston's Cornerville district for Street Corner Society (1943), learning the corner-gang and racketeer politics no questionnaire would surface. Glaser and Strauss's grounded theory codified building categories from fieldwork. Qualitative samples are purposive — chosen for information, not representativeness — and their product is often the hypothesis an experiment later tests." },
      { kind: "para", text: "The final tool is checking. The Open Science Collaboration's 2015 project repeated one hundred published psychology experiments and recovered the original effect in roughly a third. The causes were structural: small samples, flexible analysis — p-hacking, rerunning tests until something clears the 0.05 bar — and journals that publish only surprises, leaving failures in file drawers. The reforms follow the diagnosis: preregistration, registered reports, larger samples, open data. When you read a study, check which of these it did." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: estimate what share of a town's 40,000 adults support a protected bike lane, to within about three percentage points.",
        "Choose the design: a probability-sample survey — the question is descriptive, not causal, so no experiment is needed.",
        "Size it: three points of margin needs about n = 1/(0.03)² ≈ 1,100 completed interviews; at 30 per cent nonresponse, invite some 1,600 randomly drawn adults.",
        "Write and pilot the item: neutral wording, options rotated to blunt order effects, piloted on twenty residents.",
        "Report with uncertainty: 52 per cent yes means 52 ± 3, spanning 49 to 55 — a close call, not a mandate. The claim you refuse to make is itself a finding.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Election polling and aggregation, where sampling frames and turnout models make or break forecasts.",
        "Product A/B testing — randomized experiments on millions of users.",
        "Program evaluation: testing job training, tutoring or deworming before scaling it.",
        "Market research on new products, where opt-in panels are the standing cautionary tale.",
        "Journalism and everyday judgment: grading each “study shows” by its design, not its headline.",
      ] },
      { kind: "callout", title: "Common Pitfalls", tone: "warn", text: "A big sample does not rescue a biased one — the Digest's millions lost to Gallup's thousands, and opt-in panels lose the same way. Random assignment is not random sampling: experiments prove causation for their participants, not representativeness for the country. Significance is not importance, and p-hacked significance is barely information. Wording, order and social desirability move answers by real points. And qualitative depth does not generalize: Cornerville explains a mechanism; it does not estimate a national average." },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "probability sample", def: "A sample drawn so every population member has a known, nonzero chance of selection." },
        { term: "confounder", def: "A third variable that influences both cause and effect, manufacturing spurious association." },
        { term: "counterfactual", def: "The outcome that would have occurred without the cause — what randomization approximates." },
        { term: "random assignment", def: "Allocating subjects to conditions by chance, balancing confounders between groups on average." },
        { term: "validity", def: "The degree to which a measure captures the concept it claims to capture." },
        { term: "reliability", def: "The consistency of a measure across occasions, raters or items." },
        { term: "p-hacking", def: "Trying analyses until a result clears the significance threshold, inflating false positives." },
      ] },
      { kind: "quiz", items: [
        {
          q: "The Literary Digest's 1936 failure, despite 2.4 million responses, illustrates that…",
          options: ["sample size guarantees accuracy", "selection and nonresponse bias can defeat any sample size", "mail surveys are always wrong", "elections cannot be forecast"],
          answer: 1,
          explain: "Its frame skewed wealthy and respondents self-selected; selection, not size, drives accuracy.",
        },
        {
          q: "Random assignment strengthens causal claims mainly because it…",
          options: ["makes the sample representative of the population", "balances confounders, observed and unobserved, between groups on average", "shrinks the margin of error", "eliminates measurement error"],
          answer: 1,
          explain: "Chance assignment creates groups alike in every respect but treatment, so outcome differences are the treatment's work.",
        },
        {
          q: "Ice cream sales correlate with drownings because summer drives both. Summer is a…",
          options: ["mediator", "counterfactual", "confounder", "placebo effect"],
          answer: 2,
          explain: "A confounder causes both correlated variables, producing association without direct causation.",
        },
        {
          q: "To halve a survey's margin of error you must…",
          options: ["double the sample", "quadruple the sample", "triple the sample", "ask better questions"],
          answer: 1,
          explain: "Error shrinks with the square root of n: half the error needs four times the people.",
        },
      ] },
    ],
  },
]
