import type { KnowledgeTopic } from '../types'

/** Expansion pass X31 (2026-10-24): the new-exam pass. With the audit at
 *  2423/2427 (100%) after X30, this pass adds two new curated exams — UGC NET
 *  (Paper 1 + Commerce + Political Science) and MHT-CET — and seeds the
 *  UGC NET Paper 1 units the library did not yet own with five honest,
 *  textbook-grounded lessons. Each candidate was cross-checked against the
 *  dedup ledger (src/data/knowledge/dedup.ts), coverage.json and greps of all
 *  field files before authoring:
 *  1. res-research-methodology-hypothesis-sampling — the 'Research Aptitude'
 *     unit: research types, steps, hypothesis and variables, sampling,
 *     measurement scales, reliability/validity, ethics, ICT in research,
 *     thesis writing and citation styles. Zero overlap: econ-foundations-
 *     methodology owns economic methodology, not the generic research cycle.
 *  2. edu-teaching-aptitude-learner-evaluation — the 'Teaching Aptitude'
 *     unit: concept and levels of teaching, learner characteristics, methods
 *     in higher learning, support systems and evaluation systems. Zero
 *     overlap: no education-domain lesson existed in any field file.
 *  3. edu-higher-education-system-india — the 'Higher Education System'
 *     unit: ancient seats of learning, post-independence evolution, HEI
 *     types, regulators, ODL, NEP 2020. Zero overlap; carved against
 *     pol-india-since-independence (owns politics, not universities).
 *  4. ict-computers-internet-digital-initiatives — the 'ICT' unit: computing
 *     basics and abbreviations, internet/intranet/e-mail/conferencing,
 *     India's higher-education digital initiatives and e-governance. Carved
 *     against cs-computing-thinking-digital-society (owns computational
 *     thinking and digital society debates, not the ICT operational layer).
 *  5. env-people-environment-sustainable-development — the 'People,
 *     Development and Environment' unit: human-environment interaction,
 *     pollution and health, MDGs/SDGs, resources, disasters, EPA 1986 and
 *     the global agreements. Carved against env-climate-feedbacks-sensitivity
 *     (owns climate sensitivity physics) and geo-regional-development-
 *     sustainability (owns regional development geography): this lesson is
 *     the policy-and-health survey neither provides.
 *  Sources read while writing (legally open):
 *  - UGC, official NET syllabi (ugcnetonline.in, updated syllabi applicable
 *    from June 2019 UGC-NET onwards) — the ten Paper 1 unit structures used
 *    verbatim as lesson spines.
 *  - Anol Bhattacherjee, 'Social Science Research: Principles, Methods, and
 *    Practices' (scholarcommons.usf.edu, CC BY-NC-SA) — research design
 *    taxonomy, sampling (probability and non-probability), measurement
 *    scales (nominal-ordinal-interval-ratio), reliability and validity
 *    types, and the ethics framing (fabrication, falsification, plagiarism).
 *  - OpenStax, Psychology 2e ch.2 'Psychological Research' (openstax.org,
 *    CC BY) — theory-to-hypothesis flow, operational definitions,
 *    test-retest and inter-rater reliability, informed consent and
 *    debriefing; ch.6 'Learning' — classical/operant/observational learning
 *    underpinning teaching methods.
 *  - OpenStax, Biology 2e ch.47 'Conservation Biology and Biodiversity' and
 *    United Nations SDG material (sdgs.un.org) — sustainable development
 *    framing, MDG-to-SDG transition (8 goals/2015 to 17 goals/169 targets/
 *    2030), pollutant-health links.
 *  - NEP 2020, Ministry of Education (education.gov.in, public document) —
 *    GER target of 50 per cent by 2035, Academic Bank of Credits, HECI
 *    proposal, curricular flexibility.
 *  - SWAYAM (swayam.gov.in) and Ministry of Education digital-initiative
 *    pages — the four-quadrant MOOC model, SWAYAM PRABHA DTH channels,
 *    DIKSHA, National Digital Library, e-PG Pathshala, National Academic
 *    Depository.
 *  - Wikipedia, 'Information and communication technology' — the
 *    ICT-as-extension-of-IT definition and the convergence framing.
 *  - LibreTexts, Environmental Science and Chemistry of the Environment
 *    modules (chem.libretexts.org, CC BY-NC-SA) — criteria pollutants,
 *    Montreal/Kyoto/Paris mechanics; WHO ambient-air-quality burden framing.
 */
export const x31UgcNetPaper1PassTopics: KnowledgeTopic[] = [
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
    id: 'edu-teaching-aptitude-learner-evaluation',
    title: 'Teaching Aptitude: Levels, Methods, Support Systems and Evaluation',
    domain: 'Social Sciences',
    field: 'Education',
    branch: 'Teaching & Pedagogy',
    tier: 'core',
    concepts: [
      'Teaching: concept, objectives and characteristics',
      'Levels of teaching: memory, understanding, reflective',
      "Learner's characteristics",
      'Factors affecting teaching',
      'Teacher-centred and learner-centred methods',
      'Offline versus online teaching',
      'Teaching support systems: traditional, modern, ICT-based',
      'Formative, summative and diagnostic evaluation',
      'Choice-based credit system and grading',
      'Learning theory behind the methods',
    ],
    words: 1519,
    readMins: 8,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'UGC NET certifies people to teach in colleges and universities, so its Paper 1 opens with the craft itself: what teaching is, how its levels rise from recall to reflection, which methods suit which learners, what tools support the act, and how learning is evaluated. The unit typically yields five to six questions, and they are vocabulary-disciplined: the examiner wants the exact pairing of term and meaning — formative with "during", summative with "after", diagnostic with "why is this learner stuck". Loose synonyms score nothing. This lesson fixes each term to its place in the teaching cycle.',
      },
      {
        kind: 'para',
        text: 'Teaching, formally, is a purposive, planned interaction between teacher and learner intended to produce learning — a triad of teacher, learner and content mediated by method and environment. Its characteristics distinguish it from mere telling: it is goal-directed, interactive, diagnostic (it continually reads the learner) and reflective at its best. Its objectives span the cognitive (knowledge, understanding, application), the affective (attitudes, values) and the psychomotor (skills) — the three domains Benjamin Bloom\u2019s committee systematised, with the cognitive domain ranked from remembering through understanding, applying, analysing and evaluating to creating.',
      },
      { kind: 'heading', text: 'The three levels of teaching' },
      {
        kind: 'para',
        text: 'The exam\u2019s signature framework orders teaching by the depth of processing it demands. At the memory level — the lowest — the learner retains and reproduces material as given: dates, formulae, definitions. Herbart\u2019s classical steps (preparation, presentation, association, generalisation, application) describe this stage\u2019s drill logic, and the teacher\u2019s role is information-giver. At the understanding level, the learner grasps relations: why a formula works, how two events connect; explanation, comparison and illustration are the moves, and Morrison\u2019s mastery model (with its cycle of presentation, assimilation, organisation, recitation and application) belongs here. At the reflective level — the highest — the learner confronts a problem, weighs evidence, hypothesises and tests, arriving at insight that transfers to new situations; the Socratic question and the open inquiry project live here, echoing John Dewey\u2019s "we learn by reflecting on our experience".',
      },
      {
        kind: 'para',
        text: 'Two anchors keep the levels straight: scope and learner autonomy increase upward, and the levels are cumulative — reflective teaching presupposes understanding, and understanding presupposes memory. Exam items reverse the labels ("which level did the teacher reach by asking students to design an experiment?") or attach the wrong theorist to the wrong level, so fix the pairings: Herbart with the memory level\u2019s steps, Morrison with understanding, Dewey and Hunt with the reflective ideal.',
      },
      { kind: 'heading', text: "Learner's characteristics and factors affecting teaching" },
      {
        kind: 'para',
        text: "Learner's characteristics are the qualities a learner brings to the task, conventionally grouped four ways: academic (prior knowledge, study skills, aptitude for the subject), social (family background, peer norms, socio-economic context), emotional (motivation, anxiety, self-concept) and cognitive (attention, memory, reasoning, learning style). Adolescent learners need identity-safe classrooms and concrete-to-abstract bridges; adult learners — andragogy, Malcolm Knowles\u2019s term — bring experience, self-direction and problem-centred expectations, so the teacher becomes facilitator rather than authority. Teaching that ignores the profile fails politely: brilliant content pitched at the wrong level is noise.",
      },
      {
        kind: 'para',
        text: 'The factors affecting teaching form the standard checklist: the teacher (mastery, communication skill, enthusiasm, bias), the learner (the characteristics just listed), the support material and instructional facilities (text, media, laboratory, library), the learning environment (physical comfort, psychological safety), the institution ( timetables, class size, culture, leadership) and the method itself. Questions often ask you to classify a quoted scenario into the right factor bucket; the trick is to separate what the teacher brings, what the learner brings, what the institution supplies and what the method contributes.',
      },
      { kind: 'heading', text: 'Methods of teaching in higher learning' },
      {
        kind: 'para',
        text: 'Methods divide by who does the intellectual work. Teacher-centred methods put structure and content flow in the teacher\u2019s hands: the lecture transmits organised knowledge efficiently to large groups (its weaknesses are passivity and the forgetting curve); the demonstration shows a procedure or phenomenon live (science labs, clinical skills); the tutorial drills a small group through questions and feedback. Learner-centred methods shift the work to students: the discussion (seminar-style, guided debate), the seminar (a student presents, peers critique), the workshop (structured hands-on production), the project (long-horizon inquiry producing an artefact), role play and simulation (rehearsing real-world interaction in a safe frame — moot courts, management games, OSCEs in medical education). Modern rubrics also split along the offline/online axis: offline is synchronous and place-bound; online ranges from live video classes to the fully asynchronous MOOC.',
      },
      {
        kind: 'para',
        text: 'Choosing among them is matching method to objective and audience. Lectures suit dense foundational content for novices; discussions and seminars suit analytical objectives where articulation is part of the learning; projects suit synthesis and transfer; simulations suit skills too costly or risky to practise live. Learning theory explains the orderings: classical conditioning (Pavlov) shows how cues acquire meaning, operant conditioning (Skinner) how reinforcement shapes practice-based skills, and observational learning (Bandura) why demonstration plus guided imitation works — the mechanism under every apprenticeship and video tutorial. OpenStax Psychology\u2019s learning chapter is the clean source for the trio.',
      },
      { kind: 'heading', text: 'Support systems and evaluation systems' },
      {
        kind: 'para',
        text: 'Teaching support systems come in three generations the exam expects verbatim. Traditional: chalk-talk, textbooks, charts, models, field trips. Modern: projectors, audio-visual media, language labs, television. ICT-based: learning management systems, smart classrooms, digital repositories, MOOC platforms (SWAYAM), video-conferencing, simulations and virtual labs. The generations coexist; the question is usually classification or a best-fit ("a remote learner needs which support?"). Evaluation systems likewise have fixed vocabulary. By timing and purpose: diagnostic evaluation (before — locating prior gaps), formative evaluation (during — feedback that shapes ongoing teaching; think weekly quizzes and drafts), and summative evaluation (after — certifying achievement; the end-term exam). By scale: continuous internal assessment, semester end-examinations, and the choice-based credit system (CBCS) with its core, elective and ability-enhancement courses, credits and letter grades or grade points (CGPA) — the architecture Indian universities adopted nationally after UGC\u2019s 2015-16 model regulations and which NEP 2020 reaffirms with multiple entry-exit points.',
      },
      {
        kind: 'para',
        text: 'Evaluation vocabulary extends to the instruments and their qualities. Objective items (MCQ, true-false, matching) sample broadly and score mechanically; short and long essay questions probe organisation and depth but sample narrowly and score subjectively — hence rubrics, blueprints (a table mapping questions to objectives and content weight) and moderation. Good evaluation is valid (measures the taught objective), reliable (stable across scorers and sittings), and fair (free of irrelevant barriers). Quantitative evaluation yields numbers and grades; qualitative evaluation yields descriptive judgements — portfolios, narratives, peer review — and the mature teacher triangulates both.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A teacher poses a real community problem and students formulate and test hypotheses over two weeks. Which level of teaching is this?',
            options: ['Memory level', 'Understanding level', 'Reflective level', 'Conditioning level'],
            answer: 2,
            explain: 'Problem-centred inquiry with student-generated hypotheses is the reflective level — the highest, associated with Dewey — where learners construct and test ideas.',
          },
          {
            q: 'A weekly low-stakes quiz used by the teacher to adjust next week\u2019s lesson plan is:',
            options: ['summative evaluation', 'formative evaluation', 'diagnostic evaluation', 'norm-referenced certification'],
            answer: 1,
            explain: 'Formative evaluation happens during instruction and feeds back into teaching; diagnostic precedes it (locating gaps), summative concludes it.',
          },
          {
            q: 'Which method is LEAST teacher-centred?',
            options: ['Lecture to 200 students', 'Live demonstration of a titration', 'A student-run seminar with peer critique', 'A guided tutorial for five students'],
            answer: 2,
            explain: 'The seminar hands content-production and critique to students — learner-centred; lecture, demonstration and tutorial remain teacher-orchestrated.',
          },
          {
            q: 'Knowles\u2019s andragogy implies that for adult learners a teacher should primarily:',
            options: [
              'enforce strict discipline and homework',
              'act as facilitator linking content to learners\u2019 experience',
              'avoid any structure since adults resist it',
              'teach only through conditioning drills',
            ],
            answer: 1,
            explain: 'Adults are self-directed, experienced and problem-centred; the effective teacher facilitates, connects to experience and shares control — not structureless, but negotiated.',
          },
          {
            q: 'SWAYAM course delivery is explicitly organised into:',
            options: ['two quadrants: video and text', 'three quadrants: video, text, tests', 'four quadrants: video, reading material, self-assessment, discussion forum', 'five graded levels'],
            answer: 2,
            explain: 'SWAYAM\u2019s four quadrants are video lectures, specially prepared reading material, self-assessment tests, and an online discussion forum — the official pedagogic frame.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Swapping formative and summative — anchor with "formative formats, summative certifies". Calling a seminar "teacher-centred" because a syllabus assigns it. Confusing diagnostic (before, finds gaps) with formative (during, gives feedback). Attributing Herbart\u2019s steps to Morrison or the reflective level to Bloom\u2019s psychomotor domain. Listing MOOCs under "traditional" support systems in classification items. And assuming online teaching is automatically learner-centred — a 90-minute streamed lecture is lecture, whatever the channel.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — this is a foundations lesson. It pairs naturally with edu-higher-education-system-india (the institutions that host these methods) and edu lessons on assessment in any teacher-training syllabus. Primary reading: UGC NET official Paper 1 syllabus, Teaching Aptitude unit (ugcnetonline.in); OpenStax Psychology 2e ch.6 "Learning" (openstax.org, CC BY) for the conditioning and observational-learning mechanics cited here.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Teaching is purposive, planned interaction producing learning across cognitive, affective and psychomotor domains.',
        'Levels rise memory \u2192 understanding \u2192 reflective (Herbart, Morrison, Dewey respectively).',
        'Learner characteristics: academic, social, emotional, cognitive; adults need facilitation (andragogy).',
        'Teacher-centred: lecture, demonstration, tutorial. Learner-centred: discussion, seminar, workshop, project, role play, simulation.',
        'Support systems: traditional \u2192 modern \u2192 ICT-based (LMS, smart classrooms, MOOCs).',
        'Evaluation: diagnostic (before), formative (during), summative (after); CBCS organises credits and grades.',
        'Good evaluation is valid, reliable and fair; rubrics and blueprints discipline subjectivity.',
      ] },
    ],
  },
  {
    id: 'edu-higher-education-system-india',
    title: "India's Higher Education System: From Nalanda to NEP 2020",
    domain: 'Social Sciences',
    field: 'Education',
    branch: 'Higher Education',
    tier: 'intermediate',
    concepts: [
      'Institutions of higher learning in ancient India',
      'Post-independence evolution: UGC, IITs, IIMs, AIIMS',
      'Types of higher education institutions',
      'Regulators: UGC, AICTE, NAAC, NBA, NTA',
      'Oriental, conventional and non-conventional learning',
      'Open and distance learning: IGNOU, correspondence',
      'Professional, technical and skill-based education',
      'Value education and environmental education',
      'National Education Policy 2020',
      'Gross Enrolment Ratio and AISHE data',
    ],
    words: 1892,
    readMins: 9,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'The Higher Education System unit closes UGC NET Paper 1, and it is the most India-specific of the ten: five to six questions on institutions, regulators, policy milestones and dates. The material is factual but shallow memorisation fails because the facts interlock — NAAC grades institutions, UGC funds them, NEP 2020 proposes to merge the regulators, and the Academic Bank of Credits reorganises the degree itself. This lesson builds the system layer by layer: the ancient precedents, the post-1947 construction, the institutional zoo, the regulators, the open-learning stream, and the 2020 reform agenda that is currently reshaping all of it.',
      },
      { kind: 'heading', text: 'Institutions of higher learning in ancient India' },
      {
        kind: 'para',
        text: 'India\u2019s higher-learning tradition long predates the modern university, and the exam keeps returning to four names. Takshashila (Taxila, in present-day Pakistan), flourishing from roughly the sixth century BCE, is regarded as one of the world\u2019s earliest seats of higher learning — a collection of teachers rather than a single organised campus, famed for medicine (Charaka studied there), grammar (Panini) and statecraft (Kautilya\u2019s tradition). Nalanda, founded in the fifth century CE (conventionally 427 CE, under the Gupta emperor Kumaragupta I) in Bihar, was the organised counterpart: a residential monastic university with thousands of teachers and students, a vast library, entrance examination, and curricula spanning Buddhist philosophy, logic, grammar, medicine and astronomy; it drew scholars from across Asia — Xuanzang (Hiuen Tsang) being the famous Chinese pilgrim-student — and was destroyed around 1193 by Bakhtiyar Khilji\u2019s forces. Vikramashila (founded about 783 CE by the Pala king Dharmapala) specialised in tantric Buddhist scholarship and logic; Vallabhi in present-day Gujarat was a respected centre of Hinayana Buddhist and secular studies.',
      },
      {
        kind: 'para',
        text: 'What made these institutions "higher" by their own lights was method as much as content: oral transmission anchored in memorised texts, debate (vada and the formal adversarial discussion) as the engine of validation, and guru-kula residential intimacy. The exam asks for the standard pairings — oldest = Takshashila; largest organised residential university = Nalanda; Pala-era tantric centre = Vikramashila — and occasionally the UNESCO angle: Nalanda was inscribed as a World Heritage Site in 2016, and the modern Nalanda University Act (2010) revived the name as an international institution.',
      },
      { kind: 'heading', text: 'Post-independence evolution' },
      {
        kind: 'para',
        text: 'Independent India inherited a colonial university system (Calcutta, Bombay and Madras universities from 1857, then the affiliating model) and rebuilt it deliberately. The Radhakrishnan Commission (University Education Commission, 1948-49) set the agenda — rural universities, specialised centres, higher pay for academics. The University Grants Commission, begun in 1945-46 to oversee the central universities and formally inaugurated in 1953, became a statutory body through the UGC Act, 1956 — the date the exam wants — as the national coordinator and funder of university education. Landmark institutions followed: the first Indian Institute of Technology at Kharagpur in 1951 (IIT Act 1961 brought the family under central law), All India Institute of Medical Sciences (AIIMS) in New Delhi by an Act of 1956, and the first two Indian Institutes of Management, Calcutta and Ahmedabad, in 1961. Scientific research gained its own councils — CSIR (Council of Scientific and Industrial Research, reorganised 1942 and expanded after independence), ICAR (agricultural, 1929/1965 reorganisation), ICMR (medical, 1949) — so that research bodies and universities grew as parallel, sometimes awkwardly separate, tracks.',
      },
      {
        kind: 'para',
        text: 'The expansion story is told through the Gross Enrolment Ratio (GER) — enrolment in the 18-23 age band as a percentage of that cohort. From a few lakh students at independence, the system grew to roughly 4.3 crore (43 million) students by AISHE 2021-22, with GER around 28.4 per cent (about 32 for men, 28 for women — the gap has nearly closed; state variation runs from double digits to over 50 in Tamil Nadu and Kerala). The All India Survey on Higher Education (AISHE), run annually since 2010-11, is the official data source and a favourite exam fact-source: number of universities (1,100+), colleges (42,000+), standalone institutions, and the private-state-central split of enrolment.',
      },
      { kind: 'heading', text: 'The institutional zoo and the regulators' },
      {
        kind: 'para',
        text: 'Higher education institutions (HEIs) classify by funding and degree power. Universities: central (established by Act of Parliament), state (state Acts), deemed-to-be universities (Section 3 of the UGC Act — an institution granted university status for excellence, such as the IISc Bangalore under its own Deemed status) and private universities (state Acts under UGC Section 22(f) recognition). Colleges — the bulk of the system — affiliate to a university for degree-granting; some earn autonomy (autonomous colleges design their own curricula within the affiliating degree). The degrees themselves follow UGC\u2019s specified nomenclature. Regulation splits by domain: UGC for general university education; AICTE (All India Council for Technical Education, statutory by the 1987 Act after starting in 1945) for engineering, management, pharmacy, architecture, hotel management and applied arts; the Bar Council of India for law, NMC (formerly MCI) for medicine, NCTE for teacher education, the Nursing and Pharmacy Councils for their professions; NTA (National Testing Agency, 2017) conducts the entrance and eligibility examinations including UGC NET itself.',
      },
      {
        kind: 'para',
        text: 'Quality assurance has two arms. NAAC (National Assessment and Accreditation Council, set up by UGC in 1994, Bangalore) grades institutions A++ to C through its criteria-based peer review; NBA (National Board of Accreditation, 1994, autonomous under AICTE) accredits programmes — the engineering degree tier that feeds the Washington Accord — with outcomes-based criteria. Every public HEI also lives under a funding-and-data regime (UGC development grants, AISHE reporting). The exam\u2019s trick items: NAAC accredits institutions while NBA accredits programmes; AICTE regulates technical education but does not grant degrees; and deemed universities remain universities — they are not colleges.',
      },
      { kind: 'heading', text: 'Oriental, conventional and non-conventional learning; ODL and skills' },
      {
        kind: 'para',
        text: 'The syllabus\u2019s three-way split sorts programmes by origin and mode. Oriental learning covers the classical-language and traditional-knowledge streams — Sanskrit, Pali, Prakrit, Persian, Arabic, and the Sanskrit traditional subjects (jyotisha, vyakarana, mimansa and the rest) taught in pathshalas, madrasas, tols and modern institutions like the Sanskrit universities. Conventional learning is the standard campus degree stream: arts, science, commerce and their professional extensions, in the affiliating-university pattern. Non-conventional learning covers everything that departs from the campus-resident model — correspondence courses, open and distance learning (ODL), online programmes, weekend and part-time modes. The flagships of ODL are IGNOU (Indira Gandhi National Open University, established 1985, among the world\u2019s largest open universities) and the state open universities, governed by the UGC (Open and Distance Learning Programmes and Online Programmes) Regulations; the Distance Education Bureau (DEB) within UGC is the ODL regulator, and the Correspondence-stream diploma of the 1960s-70s is its ancestor.',
      },
      {
        kind: 'para',
        text: 'Professional, technical and skill-based education runs on parallel tracks: degrees (B.Tech, MBBS, LLB) under their councils; diplomas under AICTE and state boards; and the skills stream recast by the National Skills Qualifications Framework (NSQF, 2013) with its ten levels and credit-mapped vocational certificates, now coordinated by NCVET (National Council for Vocational Education and Training, 2018) as the umbrella regulator. Value education — the deliberate cultivation of ethical, social and civic values in curricula — and environmental education (the compulsory environmental studies course, mandated nationally by the Supreme Court\u2019s M.C. Mehta ruling of 1991 and now embedded in UGC curricula) cut across all three streams and appear as their own syllabus line.',
      },
      { kind: 'heading', text: 'NEP 2020 and the reform agenda' },
      {
        kind: 'para',
        text: 'The National Education Policy 2020 — India\u2019s third national education policy, replacing the 1986/1992 policy — is the exam\u2019s live topic. Its higher-education targets and instruments: raise the GER in higher education to 50 per cent by 2035; move to a holistic, multidisciplinary, flexible undergraduate degree of three or four years with multiple entry and exit points (certificate, diploma, degree, degree-with-research); create the Academic Bank of Credits (ABC) so credits earned anywhere are stored and transferable; establish a Higher Education Commission of India (HECI) with four verticals — NHERC (regulation), NAC (accreditation, meta-accrediting), HEGC (funding and grants), GEC (standard-setting) — replacing the multi-body regime while keeping the professional councils as standard-setters (the Medical and Nursing fields keep separate regulation under the policy\u2019s note); phase out the affiliating-college model in favour of autonomous degree-granting colleges clustered with universities; create MERUs (Multidisciplinary Education and Research Universities) at IIT/IIM standards; and internationalise (foreign-campus provisions, NIRF-visible rankings). The policy also renamed the Ministry of Human Resource Development as the Ministry of Education and set the 5+3+3+4 school structure — a favourite cross-check question.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which pairing of ancient institution and fact is correct?',
            options: [
              'Vikramashila — founded by Kumaragupta I in 427 CE',
              'Nalanda — Gupta-era residential university destroyed around 1193',
              'Takshashila — Pala-era tantric centre',
              'Vallabhi — oldest, sixth century BCE',
            ],
            answer: 1,
            explain: 'Nalanda was the organised Gupta-era residential university (c. 427 CE, Kumaragupta I) destroyed around 1193. Takshashila is the oldest (c. 6th century BCE); Vikramashila is the Pala tantric centre; Vallabhi was in Gujarat.',
          },
          {
            q: 'The University Grants Commission became a statutory body in:',
            options: ['1945', '1953', '1956', '1987'],
            answer: 2,
            explain: 'UGC was set up in 1945-46 for the central universities, inaugurated 1953, and made statutory by the UGC Act, 1956 — the exam date.',
          },
          {
            q: 'NAAC and NBA differ because NAAC accredits:',
            options: [
              'programmes while NBA accredits institutions',
              'institutions while NBA accredits programmes',
              'only private universities',
              'only technical institutions',
            ],
            answer: 1,
            explain: 'NAAC (1994, under UGC) grades whole institutions; NBA accredits specific programmes with outcomes-based criteria — the classic distinction item.',
          },
          {
            q: 'IGNOU, established in 1985, matters to this syllabus as the flagship of:',
            options: ['oriental learning', 'conventional learning', 'open and distance learning', 'technical education under AICTE'],
            answer: 2,
            explain: 'IGNOU is the national open university — the anchor of the non-conventional ODL stream, regulated by UGC\u2019s Distance Education Bureau.',
          },
          {
            q: 'NEP 2020\u2019s higher-education target is a Gross Enrolment Ratio of 50 per cent by 2035, and its regulatory proposal is:',
            options: [
              'MERU — replacing UGC immediately',
              'HECI — a single commission with four verticals',
              'NCVET — absorbing AICTE',
              'a new MHRD',
            ],
            answer: 1,
            explain: 'NEP 2020 proposes the Higher Education Commission of India with NHERC, NAC, HEGC and GEC verticals; MERUs are new institutions, NCVET governs vocational training, and MHRD was renamed Ministry of Education.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Dating UGC to 1953 (inauguration) instead of the statutory year 1956. Swapping Takshashila and Nalanda claims — Takshashila is oldest and teacher-clustered; Nalanda is the organised residential university. Saying NAAC accredits programmes. Calling deemed universities "colleges". Attributing the 1986 policy\u2019s 5+3+3+4 structure to NEP 2020 (it is 10+2 there) or mis-citing the GER baseline (AISHE 2021-22 puts it near 28 per cent, not 50 — that is the 2035 target). And forgetting that AICTE regulates but never awards degrees.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none. Pairs with edu-teaching-aptitude-learner-evaluation (the methods these institutions deliver) and pol-india-since-independence (the political economy around them). Primary reading: National Education Policy 2020 (education.gov.in, public document) for every NEP fact used here; UGC and AISHE official pages (ugc.gov.in, aishe.gov.in) for the institutional counts; the Nalanda Archaeological Site UNESCO entry (whc.unesco.org) for the ancient-institution facts.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Ancient seats: Takshashila (oldest, c. 6th c. BCE), Nalanda (c. 427 CE, residential, destroyed c. 1193), Vikramashila (Pala, tantric), Vallabhi (Gujarat).',
        'Post-1947: Radhakrishnan Commission 1948-49; UGC statutory 1956; IIT Kharagpur 1951; AIIMS 1956; IIMs 1961.',
        'HEIs: central/state/deemed/private universities, affiliating and autonomous colleges; AISHE counts 42,000+ colleges, GER \u2248 28 per cent (2021-22).',
        'Regulators: UGC (general), AICTE (technical, 1987 Act), NAAC (institutions), NBA (programmes), NTA (tests).',
        'Streams: oriental (classical languages), conventional (campus degrees), non-conventional (ODL — IGNOU 1985, DEB).',
        'Skills: NSQF levels, NCVET (2018); value and environmental education run across streams (EVS compulsory since the 1991 ruling).',
        'NEP 2020: GER 50 per cent by 2035, ABC credits, 4-year UG with exits, HECI four verticals, MERUs.',
      ] },
    ],
  },
  {
    id: 'ict-computers-internet-digital-initiatives',
    title: 'ICT: From Abbreviations to India\u2019s Digital Higher-Education Initiatives',
    domain: 'Computing & AI',
    field: 'ICT & Digital Literacy',
    branch: 'ICT Basics',
    tier: 'core',
    concepts: [
      'ICT versus information technology',
      'Hardware, software and storage basics',
      'Common abbreviations and terminology',
      'Internet versus intranet',
      'E-mail mechanics and etiquette',
      'Audio- and video-conferencing',
      'SWAYAM and the four-quadrant model',
      'SWAYAM PRABHA, NPTEL, DIKSHA, NDL, e-PG Pathshala, NAD',
      'E-governance models',
      'ICT in research workflow',
    ],
    words: 1428,
    readMins: 7,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'The ICT unit tests operational literacy: the abbreviations a teacher meets daily, the difference between an intranet and the internet, the etiquette of e-mail and conferencing, and — India-specific — the alphabet soup of national digital-education platforms. Five or so questions per paper, most of them one-mark classification items. The risk is over-familiarity: candidates mix up SWAYAM (courses) with SWAYAM PRABHA (TV channels) or DIKSHA (school teachers) with the National Digital Library (all readers). This lesson separates the platforms, then wires the underlying computing vocabulary.',
      },
      {
        kind: 'para',
        text: 'Definition first. Information and communication technology (ICT) is the extension of information technology (IT) that stresses unified communications and the convergence of telephony, broadcast media, audio-visual systems and computer networks — IT handles information (compute and store), ICT adds the communication layer that moves it. For a teacher or researcher the practical scope is: devices and their parts, networks and protocols, the services that ride them (web, mail, conferencing, cloud), and the institutional platforms that deliver education and governance.',
      },
      { kind: 'heading', text: 'Hardware, software and the abbreviation lexicon' },
      {
        kind: 'para',
        text: 'Hardware basics the unit assumes: the CPU (central processing unit — the arithmetic and control core, with ALU and control unit inside), memory in two roles — RAM (random access memory, volatile working memory) and ROM (read-only memory, non-volatile firmware) — plus input/output devices and external storage. Storage runs HDD (magnetic) \u2192 SSD (flash) \u2192 optical and USB media; capacity units climb bit \u2192 byte (8 bits) \u2192 KB \u2192 MB \u2192 GB \u2192 TB. Software splits into system software (operating systems — Windows, Linux, Android; drivers, utilities) and application software (browsers, office suites, LMS); open-source licences make software free to use, modify and redistribute, proprietary licences do not.',
      },
      {
        kind: 'para',
        text: 'The recurring abbreviation set: HTTP/HTTPS (web transfer protocols — the S is TLS-encrypted), FTP (file transfer), TCP/IP (the internet\u2019s core transport/internetworking protocols), URL (uniform resource locator — the web address), WWW (the hypertext service on the internet), DNS (the domain-name system translating names to IP addresses), ISP (internet service provider), LAN/WAN/MAN (local, wide, metropolitan area networks), Wi-Fi (wireless LAN standard family), Bluetooth (short-range pairing), VPN (virtual private network), HTML (page markup), PDF (portable document format), OTP (one-time password), ICT\u2019s own institutional acronyms (below). File-size and speed arithmetic — a 2 GB file over a 10 Mbps link — occasionally appears as an aptitude item.',
      },
      { kind: 'heading', text: 'Internet, intranet, e-mail and conferencing' },
      {
        kind: 'para',
        text: 'The internet is the global public network of networks speaking TCP/IP; the intranet is an organisation\u2019s private version of the same technology, firewalled for members only, often carrying the institution\u2019s portals, policies and internal applications. (An extranet extends an intranet selectively to partners.) The web is not the internet — it is one service (hypertext over HTTP) among many (e-mail, DNS, file transfer). Browsers render pages; search engines index them (search tips: exact phrases in quotes, site: filters, evaluating sources — authority, currency, provenance — which doubles as the research unit\u2019s skill). Cloud computing delivers storage and computation over the network (SaaS/PaaS/IaaS in ascending flexibility); the practical teaching examples are Google Drive-type storage, shared documents and hosted LMS platforms.',
      },
      {
        kind: 'para',
        text: 'E-mail runs client-to-server-to-server via SMTP (sending) and IMAP or POP3 (retrieval). Mechanics worth marks: To (primary recipients), Cc (carbon copy — visible), Bcc (blind copy — hidden from other recipients), subject discipline, attachments (size limits, compression), and the reply/reply-all decision. Etiquette is examinable: concise subject lines, plain professional tone, no shouting in capitals, minimal reply-all, attachment named properly, and privacy — never expose others\u2019 addresses by mass-Cc. Audio- and video-conferencing are synchronous many-point communication over the network: the underlying standards (Voice over IP; H.323/SIP historically), the platform features (screen share, breakout rooms, recording, chat, mute control), and their classroom role — flipped and blended learning, remote lectures, virtual labs and viva. Asynchronous alternatives (recorded lectures, forums) trade immediacy for access across time zones and bandwidths.',
      },
      { kind: 'heading', text: 'Digital initiatives in Indian higher education' },
      {
        kind: 'para',
        text: 'The national platforms the unit names, separated by function. SWAYAM (Study Webs of Active Learning for Young Aspiring Minds, launched 2017) is the national MOOC platform delivering free courses from Class 9 to post-graduation in four quadrants — video lectures, reading material, self-assessment tests, discussion forum — with certification through proctored exams and credit transfer permitted up to 40 per cent of a programme per UGC (Credit Framework for Online Learning Courses) rules. SWAYAM PRABHA is the companion group of DTH television channels (the 34-channel network under the PM eVIDYA umbrella of one-class-one-channel) for learners without bandwidth. NPTEL (National Programme on Technology Enhanced Learning, from 2003, IITs + IISc) is the engineering-and-science content engine whose courses feed SWAYAM. DIKSHA (Digital Infrastructure for Knowledge Sharing, 2017) is the school-teacher-and-student platform of the school-education ministry — QR-coded "energised textbooks" and teacher training. e-PG Pathshala hosts postgraduate e-texts and e-content across subjects; the National Digital Library of India (NDLI, IIT Kharagpur) aggregates e-books and resources across all levels; the National Academic Depository (NAD) stores digital academic awards (degrees, marksheets); Shodhganga is the ETD repository for Indian PhD theses, Shodhgangotri for research proposals; Virtual Labs run remote experiments; e-Yantra supports embedded-systems education; and the Academic Bank of Credits (ABC) under NEP 2020 stores credit records for transfer. Memory hook: SWAYAM teaches, PRABHA broadcasts, NPTEL engineers, DIKSHA schools, e-PG postgraduates, NDLI libraries, NAD deposits, Shodhganga archives theses.',
      },
      {
        kind: 'para',
        text: 'ICT and governance (e-governance) closes the unit. The service models are G2C (government to citizen — certificates, tax filing), G2B (business — licensing, tenders), G2G (inter-agency), G2E (employee); the delivery pillars are the Digital India programme (2015), Aadhaar-based authentication, UPI payments, and portal one-stop shops (National Scholarship Portal, e-Pathshala, SWAYAM\u2019s own exam registration). Benefits the exam lists: transparency, reduced discretion and queueing, audit trails, inclusion through vernacular interfaces; risks: the digital divide (access, bandwidth, literacy, gender gap), data privacy, and cybersecurity hygiene — strong passwords, two-factor authentication, phishing awareness — which also belongs to every teacher\u2019s professional responsibility.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A university\u2019s internal portal, reachable only on campus credentials, running web technology behind a firewall, is best described as:',
            options: ['the internet', 'an intranet', 'an extranet', 'a VPN service'],
            answer: 1,
            explain: 'Private web technology restricted to an organisation\u2019s members is an intranet; an extranet would extend selected access to outside partners.',
          },
          {
            q: 'Which platform is the national MOOC system whose courses follow the four-quadrant model?',
            options: ['DIKSHA', 'SWAYAM', 'SWAYAM PRABHA', 'e-PG Pathshala'],
            answer: 1,
            explain: 'SWAYAM delivers courses in four quadrants (video, reading, self-assessment, discussion); SWAYAM PRABHA is its DTH television counterpart, DIKSHA serves school education, e-PG Pathshala hosts PG e-content.',
          },
          {
            q: 'In an e-mail, the field that hides recipients from one another is:',
            options: ['To', 'Cc', 'Bcc', 'Subject'],
            answer: 2,
            explain: 'Bcc (blind carbon copy) conceals the list; Cc recipients are visible to all.',
          },
          {
            q: 'The protocols for sending and retrieving e-mail are, respectively:',
            options: ['HTTP and HTML', 'SMTP and IMAP (or POP3)', 'FTP and TCP', 'DNS and URL'],
            answer: 1,
            explain: 'SMTP moves mail out; IMAP/POP3 retrieve it. HTTP/HTML belong to the web, FTP to file transfer.',
          },
          {
            q: 'Shodhganga is the national repository for:',
            options: ['school textbooks', 'Indian PhD theses (electronic theses and dissertations)', 'DTH lecture channels', 'vocational course credits'],
            answer: 1,
            explain: 'Shodhganga (INFLIBNET) archives Indian doctoral theses; Shodhgangotri holds research proposals; credits live in the ABC; channels are SWAYAM PRABHA.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Treating the web and the internet as synonyms — the web is one service on the internet. Swapping SWAYAM (online courses) and SWAYAM PRABHA (TV channels). Putting DIKSHA (school education) where SWAYAM (higher education) belongs. Saying intranet when an organisation-wide public-facing portal is meant, or VPN when only a firewall-protected internal network is described. Mixing RAM (volatile) and ROM (permanent). And forgetting the 40 per cent credit-transfer cap for SWAYAM courses — the number shows up in statement-style items.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — foundations level. This lesson pairs with res-research-methodology-hypothesis-sampling (the ICT-in-research workflow) and edu-higher-education-system-india (NEP 2020\u2019s ABC and digital architecture). Primary reading: Wikipedia, "Information and communication technology" (definition and convergence framing); SWAYAM official pages (swayam.gov.in — the four quadrants and credit framework); Ministry of Education digital-initiative pages (education.gov.in) for SWAYAM PRABHA, DIKSHA, NDLI, NAD and e-PG Pathshala descriptions.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'ICT = IT plus the communication layer; convergence of computing, telecom and broadcast.',
        'RAM is volatile working memory; ROM permanent; storage climbs KB \u2192 MB \u2192 GB \u2192 TB.',
        'Internet is the global TCP/IP network; intranet is private; the web is HTTP hypertext, one service among many.',
        'Mail: SMTP sends, IMAP/POP3 retrieve; Bcc hides recipients; etiquette is professional brevity.',
        'Conferencing is synchronous (VoIP, screen-share, breakout rooms); recorded media serve asynchronous learning.',
        'Platforms: SWAYAM (MOOCs, four quadrants, 40 per cent credit cap), PRABHA (TV), NPTEL (IIT content), DIKSHA (schools), NDLI (library), e-PG Pathshala (PG texts), NAD (awards), Shodhganga (theses).',
        'E-governance: G2C/G2B/G2G/G2E; benefits transparency and access; risks the digital divide and privacy.',
      ] },
    ],
  },
  {
    id: 'env-people-environment-sustainable-development',
    title: 'People, Development and Environment: Pollution, SDGs and Global Agreements',
    domain: 'Environment & Sustainability',
    field: 'Environmental Policy',
    branch: 'Development & Environment',
    tier: 'intermediate',
    concepts: [
      'Human and environment interaction',
      'Carrying capacity and ecological footprint',
      'Air, water, soil and noise pollution',
      'Pollutants and human-health outcomes',
      'MDGs to SDGs transition',
      'Natural and energy resources',
      'Natural hazards and disaster mitigation',
      'Environment (Protection) Act 1986',
      'Montreal, Kyoto and Paris agreements',
      'Sustainable development definition',
    ],
    words: 1913,
    readMins: 10,
    addedOn: '2026-10-24',
    blocks: [
      { kind: 'heading', text: 'Why this matters' },
      {
        kind: 'para',
        text: 'The People, Development and Environment unit is UGC NET Paper 1\u2019s largest applied unit — routinely five to seven questions — and the one where policy literacy pays most: the goals (MDGs \u2192 SDGs), the laws (Environment Protection Act 1986), the treaties (Montreal, Kyoto, Paris) and the health effects of the classic pollutants. The facts are stable enough to bank permanently, which is why the unit rewards preparation: the seventeen SDGs will not be renumbered before your exam, and the 1986 Act will not be re-enacted. This lesson assembles the whole chain — interaction, damage, goals, resources, disasters, law — in exam order.',
      },
      { kind: 'heading', text: 'Human and environment interaction' },
      {
        kind: 'para',
        text: 'Humans interact with the environment in two directions: we draw resources (renewable — solar, wind, hydro, biomass, soil, forests, water cycling on human timescales; non-renewable — coal, oil, gas, nuclear fuels, mineral ores accumulated over geological time) and we return wastes. The pressure becomes a problem at scale. Carrying capacity is the population an environment can support indefinitely without degradation; the ecological footprint measures the biologically productive area a population needs to absorb its consumption and wastes — humanity now uses the equivalent of more than one Earth, the textbook definition of overshoot. The IPAT identity (Impact = Population \u00d7 Affluence \u00d7 Technology) organises the drivers: more people, higher consumption per person, dirtier or cleaner technologies. Development itself was redefined by the Brundtland Report (Our Common Future, 1987): sustainable development "meets the needs of the present without compromising the ability of future generations to meet their own needs" — intergenerational equity as the core idea.',
      },
      { kind: 'heading', text: 'Environmental issues and pollutant health effects' },
      {
        kind: 'para',
        text: 'Pollution is classified by medium. Air pollution\u2019s classic (criteria) pollutants: particulate matter PM10 and especially PM2.5 (fine particles penetrating deep into lungs and blood), sulphur dioxide (SO\u2082 — fossil-fuel combustion; acid rain precursor), nitrogen oxides (NO\u2093 — vehicles; smog and acid rain), carbon monoxide (CO — binds haemoglobin, displacing oxygen), ground-level ozone (O\u2083 — photochemical smog, a respiratory irritant) and lead (neurotoxic, phased out of petrol). Health effects run from aggravated asthma and reduced lung function through chronic obstructive pulmonary disease, ischaemic heart disease and stroke to lung cancer; the World Health Organization attributes roughly seven million premature deaths a year to combined ambient and household air pollution — the single biggest environmental health risk. Indoor air (chulha smoke, kerosene lamps) remains a large household-level killer in developing regions.',
      },
      {
        kind: 'para',
        text: 'Water pollution carries biological and chemical loads: sewage-borne pathogens cause diarrhoeal disease (a leading child killer), while arsenic and fluoride contamination of groundwater (the Gangetic plain\u2019s arsenic crisis) causes chronic poisoning; eutrophication — nutrient runoff feeding algal blooms that strip dissolved oxygen — kills aquatic life. Soil pollution accumulates pesticides (organochlorines like DDT bio-magnify up food chains), heavy metals (cadmium, lead, mercury) and e-waste residues. Noise pollution above roughly 80-85 dB damages hearing and raises stress. Climate change sits above the local list as the global issue: greenhouse gases (CO\u2082, methane, nitrous oxide) trap outgoing radiation; consequences include warming, sea-level rise, glacier melt, and intensified extremes — and biodiversity loss (species extinction rates far above background) compounds it, which is why conservation biology treats both as one crisis (OpenStax Biology 2e\u2019s conservation chapter is the clean source).',
      },
      { kind: 'heading', text: 'From MDGs to SDGs' },
      {
        kind: 'para',
        text: 'The development goal architecture changed at 2015, and the transition is a favourite exam item. The Millennium Development Goals (MDGs) ran 2000-2015: eight goals, 21 targets, aimed at extreme poverty, primary education, gender equality, child and maternal health, HIV/malaria, environmental sustainability and global partnership — criticised as too narrow, too "developing-country", and set without broad consultation. The Sustainable Development Goals (SDGs) run 2016-2030 under the UN\u2019s 2030 Agenda: seventeen goals and 169 targets, universal (binding all countries, rich and poor), indivisible and integrated — the "5 Ps" frame them: People, Planet, Prosperity, Peace, Partnership. Goal 1 ends poverty; Goal 4 quality education; Goal 5 gender equality; Goal 13 climate action; Goal 7 affordable clean energy; Goal 6 clean water and sanitation — and the exam\u2019s standard check is matching a quoted goal to its number, so learn the canonical list in order: no poverty; zero hunger; good health and well-being; quality education; gender equality; clean water and sanitation; affordable and clean energy; decent work and economic growth; industry, innovation and infrastructure; reduced inequalities; sustainable cities and communities; responsible consumption and production; climate action; life below water; life on land; peace, justice and strong institutions; partnerships for the goals.',
      },
      { kind: 'heading', text: 'Hazards, disasters and mitigation' },
      {
        kind: 'para',
        text: 'A natural hazard is a threatening natural event; a disaster is a hazard that overwhelms a community\u2019s capacity to cope — vulnerability converts one into the other. The exam\u2019s Indian-heavy list: earthquakes (sudden crust slip along faults; zones graded II-V in India, with Zone V the highest risk — the Himalayan belt), floods (the most frequent Indian disaster; monsoon excess, embankment failures), cyclones (Bay of Bengal and Arabian Sea; storm surge does the coastal killing; names assigned by regional panel countries), droughts (slow-onset, meteorological/agricultural/hydrological) and landslides (himalayan and Western Ghats slopes), plus industrial (Bhopal 1984 — the gas leak that reshaped Indian environmental law) and pandemic events as human-made-adjacent categories. Mitigation follows the Sendai Framework for Disaster Risk Reduction (2015-2030), which shifts priority from post-event response to prevention: risk assessment, building codes and retrofitting, early warning (the IMD cyclone-warning chain has cut Indian cyclone deaths dramatically), land-use planning, community preparedness, and the National Disaster Management Authority (NDMA, chaired by the Prime Minister, under the Disaster Management Act 2005) with state authorities below it.',
      },
      { kind: 'heading', text: 'India\u2019s law and the global agreements' },
      {
        kind: 'para',
        text: 'India\u2019s framework law is the Environment (Protection) Act, 1986 — enacted in the direct aftermath of the Bhopal gas tragedy as an "umbrella" law giving the central government power to take measures, set standards, restrict industrial siting and handle hazardous substances; it spawned the Environment (Protection) Rules, the coastal regulation zone notifications, environmental impact assessment requirements, and — in 2010 — the National Green Tribunal (NGT) for fast environmental adjudication. Its ancestors are the Water Act 1974 and Air Act 1981 (creating the Pollution Control Boards), and the Wildlife Protection Act 1972 and Forest Conservation Act 1980 run alongside. Policy instruments add the National Action Plan on Climate Change (NAPCC, 2008) with its eight missions.',
      },
      {
        kind: 'para',
        text: 'The global timeline is five dates with their instruments: Stockholm Conference 1972 (first world environment conference; birth of UNEP and of India\u2019s environmental bureaucracy), Montreal Protocol 1987 (phasing out ozone-depleting CFCs — the treaty universally ratified and the only one on track to restore what it protects; the ozone hole is healing on schedule), Rio Earth Summit 1992 (Agenda 21, the Rio Declaration, and the UN Framework Convention on Climate Change — UNFCCC), Kyoto Protocol 1997 (binding emission targets for developed "Annex I" countries only, in force 2005, first commitment period 2008-2012; the US never ratified, Canada withdrew), and the Paris Agreement 2015 (COP21; all parties submit nationally determined contributions — NDCs; the collective aim: hold warming well below 2\u00b0C above pre-industrial levels, pursuing 1.5\u00b0C; India\u2019s NDC pledged 45 per cent emissions-intensity reduction by 2030 against 2005 and 50 per cent cumulative electric power from non-fossil sources by 2030 — the updated 2022 figures; the original 2015 pledge was 33-35 per cent and 40 per cent, so read statement items carefully for which version they quote). Carbon pricing (taxes and cap-and-trade), the CDM (clean development mechanism under Kyoto) and REDD+ (forest carbon) are the market instruments the unit names.',
      },
      {
        kind: 'example',
        title: 'Worked Example — matching a scenario to the right instrument',
        steps: [
          'Scenario: a state pollution board wants to penalise a factory discharging effluent above permitted limits into a river.',
          'Statute: the Water (Prevention and Control of Pollution) Act, 1974 — the board\u2019s founding act — with consent conditions; appeals escalate to the NGT (2010).',
          'If the pollutant is air-borne instead, the Air (Prevention and Control of Pollution) Act, 1981 applies.',
          'If the central government must set a new national standard for a hazardous substance, the umbrella Environment (Protection) Act, 1986 supplies the power.',
          'If the factory emits greenhouse gases, no domestic cap applies directly — the relevant frame is India\u2019s NDC under the Paris Agreement and NAPCC missions.',
          'Lesson: match medium \u2192 statute \u2192 adjudicator; treaty items quote goals and dates, not factory scenarios.',
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The Sustainable Development Goals consist of:',
            options: ['8 goals, 21 targets, 2000-2015', '17 goals, 169 targets, 2016-2030', '10 goals, 100 targets, 2015-2025', '17 goals, 203 targets, 2030-2050'],
            answer: 1,
            explain: 'SDGs: 17 goals and 169 targets under the 2030 Agenda, universal across countries; the 8-goal set was the MDGs (2000-2015).',
          },
          {
            q: 'Which pollutant-health pairing is correct?',
            options: [
              'CO — binds haemoglobin reducing oxygen delivery',
              'PM2.5 — mainly a skin disease agent',
              'Ozone — central-nervous-system toxin from leaded petrol',
              'SO\u2082 — chiefly a hearing-damage pollutant',
            ],
            answer: 0,
            explain: 'Carbon monoxide binds haemoglobin; PM2.5 penetrates lungs and blood (cardio-respiratory disease); ground-level ozone is a respiratory irritant; hearing damage is noise\u2019s effect; lead is the neurotoxin.',
          },
          {
            q: 'The treaty that phases out ozone-depleting substances and is universally ratified is:',
            options: ['Kyoto Protocol (1997)', 'Montreal Protocol (1987)', 'Paris Agreement (2015)', 'Stockholm Declaration (1972)'],
            answer: 1,
            explain: 'Montreal phased out CFCs and is the first universally ratified treaty in UN history; Kyoto targets greenhouse gases, Paris sets NDCs, Stockholm was the declaration that started the process.',
          },
          {
            q: "India's Environment (Protection) Act was enacted in 1986 largely in response to:",
            options: ['the Stockholm Conference', 'the Bhopal gas tragedy', 'the Rio Earth Summit', 'the Kyoto Protocol'],
            answer: 1,
            explain: 'The 1984 Bhopal gas leak exposed gaps in hazardous-substance regulation; the 1986 umbrella Act filled them. Stockholm (1972) inspired the earlier Water/Air Acts\u2019 era.',
          },
          {
            q: 'Under the Paris Agreement, each country\u2019s pledged contribution is called a:',
            options: ['common but differentiated obligation', 'nationally determined contribution', 'Annex I target', 'clean development mechanism'],
            answer: 1,
            explain: 'Paris runs on nationally determined contributions (NDCs) — voluntary pledges reviewed collectively; Annex I targets and CDM belong to Kyoto\u2019s architecture.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Swapping MDG and SDG arithmetic — 8 goals/2000-2015 versus 17 goals/169 targets/2016-2030. Misplacing treaty dates: Montreal 1987 (ozone), Kyoto 1997 (GHG, Annex I only), Paris 2015 (NDCs, all countries). Citing "carbon monoxide destroys ozone" or "PM2.5 causes skin disease" — respiratory and cardiovascular harms are the PM pathway. Dating the EPA 1986 to Rio (1992) instead of Bhopal (1984). Saying carrying capacity when footprint is asked — one is a property of the environment, the other of a population\u2019s demand. And in mitigation items, forgetting NDMA (2005 Act) is India\u2019s apex body while Sendai (2015-2030) is the global framework.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none. The unit feeds the Comprehension passages (environmental prose is a favourite) and any Geography/Sociology course on development. Primary reading: United Nations SDG pages (sdgs.un.org — goal list, targets, 2030 Agenda); OpenStax Biology 2e ch.47 "Conservation Biology and Biodiversity" (openstax.org, CC BY) for the biodiversity and pollution framing; India\u2019s Environment (Protection) Act 1986 text (indiacode.nic.in) and the UNFCCC Paris Agreement page for the treaty mechanics.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Interaction: renewable vs non-renewable resources; carrying capacity is environmental, footprint is demand; IPAT = Population \u00d7 Affluence \u00d7 Technology.',
        'Sustainable development (Brundtland 1987): present needs without compromising future generations.',
        'Air pollutants: PM2.5 (cardio-respiratory), SO\u2082/NO\u2093 (acid rain, smog), CO (haemoglobin), O\u2083 (irritant), lead (neurotoxin); WHO \u2248 7 million premature deaths a year from air pollution.',
        'Water: pathogens, arsenic/fluoride, eutrophication; soil: pesticides, heavy metals, e-waste; noise \u2265 80-85 dB harms hearing.',
        'MDGs 8 (2000-2015) \u2192 SDGs 17 goals, 169 targets (2016-2030), universal, 5 Ps.',
        'Disasters: hazard + vulnerability = disaster; NDMA (2005) apex in India; Sendai 2015-2030 for prevention.',
        'Law and treaties: Water 1974, Air 1981, EPA 1986 (Bhopal), NGT 2010; Stockholm 1972, Montreal 1987, Rio 1992, Kyoto 1997, Paris 2015.',
      ] },
    ],
  },
]
