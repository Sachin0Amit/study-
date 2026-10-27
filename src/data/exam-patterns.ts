// ============================================================================
// Exam pattern intelligence — marking schemes, paper structure, weightage and
// strategy for every competitive-exam book in the library.
// Data verified against research/jee-syllabus.md, research/sat-drdo-syllabus.md
// and research/engg-gate-syllabus.md (transcribed from official sources: NTA,
// jeeadv.ac.in, College Board, DRDO RAC, IIT Guwahati GATE).
// ============================================================================

export interface ExamPatternStat {
  label: string
  value: string
  hint?: string
}

export interface ExamMarkingRule {
  situation: string
  marks: string
  tone: 'correct' | 'wrong' | 'unattempted'
}

export interface ExamWeightRow {
  name: string
  detail: string
  weight: number // 0–100, drives the bar width
}

export interface ExamPattern {
  bookId: string
  examName: string
  authority: string
  patternLine: string
  stats: ExamPatternStat[]
  marking: ExamMarkingRule[]
  markingNote?: string
  weightage: ExamWeightRow[]
  strategy: string[]
  timeline: string
  website?: { label: string; url: string }
}

// ---------- JEE (Main) 2026 — Paper 1 (B.E./B.Tech) ----------
const jeeMainPattern = (bookId: string): ExamPattern => ({
  bookId,
  examName: 'JEE (Main) Paper 1 — B.E./B.Tech',
  authority: 'National Testing Agency (NTA)',
  patternLine: '75 questions · 300 marks · 3 hours · +4/−1 · two sessions, best score counts',
  stats: [
    { label: 'Mode', value: 'CBT', hint: 'Computer Based Test' },
    { label: 'Duration', value: '3 hours', hint: '180 minutes' },
    { label: 'Questions', value: '75', hint: '25 per subject · all compulsory' },
    { label: 'Total marks', value: '300', hint: '100 per subject · 4 marks each' },
    { label: 'Sessions', value: '2 / year', hint: 'January & April — best of two' },
    { label: 'Languages', value: '13', hint: 'English, Hindi + 11 regional' },
  ],
  marking: [
    { situation: 'Correct answer (MCQ or numerical)', marks: '+4', tone: 'correct' },
    { situation: 'Incorrect answer (MCQ or numerical)', marks: '−1', tone: 'wrong' },
    { situation: 'Unattempted', marks: '0', tone: 'unattempted' },
  ],
  markingNote:
    'Each subject: Section A — 20 MCQs + Section B — 5 numerical-value questions. Optional Section-B questions were discontinued from 2025: all 75 are now compulsory. Scoring uses normalised percentile across shifts.',
  weightage: [
    { name: 'Physics', detail: '25 questions · 100 marks · Units 1–20 of this book', weight: 33 },
    { name: 'Chemistry', detail: '25 questions · 100 marks · Physical + Inorganic + Organic', weight: 33 },
    { name: 'Mathematics', detail: '25 questions · 100 marks · 14 official units', weight: 33 },
  ],
  strategy: [
    '75 questions in 180 minutes ≈ 2.4 min per question — train with a timer; NCERT-line questions in Chemistry are the fastest 25 marks on the paper.',
    'With negative marking on every question, a 90% attempt at 80% accuracy beats a 100% attempt at 65% — skip only when you can eliminate fewer than two options.',
    'Section B numerical questions have no options to eliminate: practise computing to the final digit (rounded to the given decimals), not just setting up the formula.',
    'Two sessions (Jan & Apr) mean two shots at the percentile — appear in both; the better normalised NTA score is used for ranking.',
    'Weightage is stable year-over-year: mechanics + electromagnetism dominate Physics, GOC + coordination dominate Chemistry, calculus + coordinate geometry dominate Maths — front-load the high-frequency units.',
  ],
  timeline: 'Session 1 — January 2026 · Session 2 — April 2026 · Registration opens ~Nov 2025 and ~Feb 2026',
  website: { label: 'jeemain.nta.nic.in', url: 'https://jeemain.nta.nic.in/' },
})

// ---------- JEE (Advanced) 2026 ----------
const jeeAdvPattern = (bookId: string): ExamPattern => ({
  bookId,
  examName: 'JEE (Advanced) — Papers 1 & 2',
  authority: 'IIT Roorkee · Joint Admission Board',
  patternLine: 'Two compulsory papers on the same day · 3 h each · partial marking · 360 marks combined',
  stats: [
    { label: 'Papers', value: '2', hint: 'Both compulsory, same day' },
    { label: 'Duration', value: '3 h each', hint: '09:00–12:00 & 14:30–17:30' },
    { label: 'Questions (2026)', value: '102', hint: 'Paper 1: 48 · Paper 2: 54' },
    { label: 'Total marks', value: '360', hint: '180 marks per paper' },
    { label: 'Mode', value: 'CBT', hint: 'English & Hindi' },
    { label: 'Attempts', value: '2', hint: 'In 2 consecutive years' },
  ],
  marking: [
    { situation: 'Single-correct MCQ right', marks: '+3', tone: 'correct' },
    { situation: 'Single-correct MCQ wrong', marks: '−1', tone: 'wrong' },
    { situation: 'Multi-correct: all options chosen right', marks: '+4', tone: 'correct' },
    { situation: 'Multi-correct: partial (3 of 4 correct chosen)', marks: '+3', tone: 'correct' },
    { situation: 'Multi-correct: otherwise', marks: '−1', tone: 'wrong' },
    { situation: 'Numerical answer (NAT)', marks: '+4 / 0', tone: 'unattempted' },
    { situation: 'Unattempted', marks: '0', tone: 'unattempted' },
  ],
  markingNote:
    'Partial marking rewards caution: if you are sure of 3 options in a one-or-more-correct question, marking only those earns +3 with zero risk — a wrong extra option forfeits everything. NAT questions carry no negative marking. Exact section mixes change slightly every year; the 2026 pattern is shown.',
  weightage: [
    { name: 'Paper 1', detail: '48 Q · 180 marks — 4 MCQ + 4 multi-correct + 4 NAT + 4 match-list per subject', weight: 50 },
    { name: 'Paper 2', detail: '54 Q · 180 marks — 4 MCQ + 5 multi-correct + 5 NAT + 2 linked-comprehension stems per subject', weight: 50 },
  ],
  strategy: [
    'Only the top ~2,50,000 JEE (Main) qualifiers may sit Advanced — prepare for depth, not speed: ~3.5 minutes per question versus Main’s 2.4.',
    'Master the partial-marking discipline: in multi-correct questions, mark only options you can defend; three confident options (+3) outscore four guessed (+0 if wrong).',
    'NAT questions are your safest scoring zone (no negative marking) — practise exact numerical answers, especially in Physics and Physical Chemistry.',
    'Match-list and paragraph questions test multi-concept linking — practise them as their own drill, not as ordinary MCQs.',
    'Both papers count equally; a weak morning paper is recoverable in the afternoon — never mentally abandon Paper 2.',
    'Class XII ≥75% (65% reserved) or top-20 percentile is required for the rank list — keep board exam prep aligned.',
  ],
  timeline: 'Typically late May / early June 2026 (after JEE Main results) · Registration opens within ~1 week of Main results',
  website: { label: 'jeeadv.ac.in', url: 'https://jeeadv.ac.in/' },
})

// ---------- Digital SAT ----------
const satPattern = (bookId: string, subject: 'math' | 'rw'): ExamPattern =>
  subject === 'math'
    ? {
        bookId,
        examName: 'Digital SAT — Math Section',
        authority: 'College Board',
        patternLine: '44 questions · 70 minutes · module-adaptive · 200–800 scale · calculator throughout',
        stats: [
          { label: 'Mode', value: 'Digital', hint: 'Bluebook app · laptop/iPad' },
          { label: 'Duration', value: '70 min', hint: '2 modules × 35 min' },
          { label: 'Questions', value: '44', hint: '22 per module · ~75% MCQ + ~25% free-response' },
          { label: 'Section score', value: '200–800', hint: 'Total with R&W: 400–1600' },
          { label: 'Calculator', value: 'Allowed', hint: 'Built-in Desmos graphing + formula sheet' },
          { label: 'Adaptive', value: 'MST', hint: 'Module 2 difficulty follows Module 1' },
        ],
        marking: [
          { situation: 'Correct answer', marks: '+1 raw', tone: 'correct' },
          { situation: 'Incorrect answer', marks: '0', tone: 'unattempted' },
          { situation: 'Skipped question', marks: '0', tone: 'unattempted' },
        ],
        markingNote:
          'No negative marking anywhere on the SAT — never leave a question blank in the final minute. Raw questions convert to the 200–800 scale through equating. Benchmark: Math 530 = college-ready.',
        weightage: [
          { name: 'Algebra', detail: '~35% · 13–15 questions · linear equations, systems, inequalities', weight: 35 },
          { name: 'Advanced Math', detail: '~35% · 13–15 questions · nonlinear functions, quadratics, exponentials', weight: 35 },
          { name: 'Problem Solving & Data Analysis', detail: '~15% · 5–7 questions · ratios, percentages, statistics, margins of error', weight: 15 },
          { name: 'Geometry & Trigonometry', detail: '~15% · 5–7 questions · area, volume, angles, circles, radians', weight: 15 },
        ],
        strategy: [
          'Learn Desmos cold — it solves systems, finds intersections, fits regressions and evaluates functions faster than algebra on many items; the exam is designed around it.',
          '~30% of questions are embedded in science/social-science contexts — practise translating word problems into equations before computing.',
          'Module 1 performance steers Module 2 difficulty: aim for a clean first module, since the harder second module offers the score ceiling.',
          'Student-produced-response (~25%): grid exact values; mixed numbers, π and repeating decimals have special gridding rules worth drilling once.',
          'Answer every question — with no penalty for wrong answers, an educated guess is strictly better than a blank.',
        ],
        timeline: '~7 US dates + ~6 international dates per school year + school-day administrations · scores in days, not weeks',
        website: { label: 'satsuite.collegeboard.org', url: 'https://satsuite.collegeboard.org/sat' },
      }
    : {
        bookId,
        examName: 'Digital SAT — Reading & Writing Section',
        authority: 'College Board',
        patternLine: '54 questions · 64 minutes · one short passage per question · 200–800 scale',
        stats: [
          { label: 'Mode', value: 'Digital', hint: 'Bluebook app · laptop/iPad' },
          { label: 'Duration', value: '64 min', hint: '2 modules × 32 min' },
          { label: 'Questions', value: '54', hint: '27 per module · 1 question per passage' },
          { label: 'Passage length', value: '25–150 words', hint: 'Literature, history, humanities, science' },
          { label: 'Section score', value: '200–800', hint: 'Total with Math: 400–1600' },
          { label: 'Question types', value: '4-option MCQ', hint: 'All discrete — no long shared passages' },
        ],
        marking: [
          { situation: 'Correct answer', marks: '+1 raw', tone: 'correct' },
          { situation: 'Incorrect answer', marks: '0', tone: 'unattempted' },
          { situation: 'Skipped question', marks: '0', tone: 'unattempted' },
        ],
        markingNote:
          'No negative marking — answer everything. Benchmark: R&W 480 = college-ready. Questions within each module run easiest → hardest, so plan pacing checkpoints mid-module.',
        weightage: [
          { name: 'Craft & Structure', detail: '~28% · 14–16 questions · words in context, text structure, purpose, cross-text links', weight: 28 },
          { name: 'Information & Ideas', detail: '~26% · 13–15 questions · main idea, detail, inference, command of evidence', weight: 26 },
          { name: 'Standard English Conventions', detail: '~26% · 11–15 questions · boundaries, agreement, punctuation, tense', weight: 26 },
          { name: 'Expression of Ideas', detail: '~20% · 8–12 questions · transitions, synthesis, rhetoric, concision', weight: 20 },
        ],
        strategy: [
          'One question per bite-size passage changes the game: read the question stem first, then hunt the passage for exactly that information.',
          'Rhetorical-synthesis questions (combining bullet points into one sentence) reward elimination: three options misquote or drop a bullet — find the faithful one.',
          'Grammar questions are rule-lookup, not style: sentence boundaries, subject–verb agreement and punctuation each map to a fixed checklist.',
          'Pace to finish each 27-question module: ~70 seconds per question with a 2-minute buffer; flag and return rather than stall.',
          'Vocabulary-in-context is tested at medium-hard level via Tier-2 academic words — read widely and note nuanced word senses, not just definitions.',
        ],
        timeline: '~7 US dates + ~6 international dates per school year + school-day administrations · scores in days, not weeks',
        website: { label: 'satsuite.collegeboard.org', url: 'https://satsuite.collegeboard.org/sat' },
      }

// ---------- DRDO Scientist B — Tier I ----------
const drdoTier1Pattern = (bookId: string): ExamPattern => ({
  bookId,
  examName: 'DRDO Scientist ‘B’ — Tier I Screening',
  authority: 'DRDO Recruitment & Assessment Centre (RAC)',
  patternLine: '100-mark objective screening · 5 sections · 0.25 negative · qualifying only (not for final merit)',
  stats: [
    { label: 'Stage', value: 'Tier I', hint: 'Screening — shortlists for Tier II' },
    { label: 'Marks', value: '100', hint: '5 sections × ~20 questions' },
    { label: 'Duration', value: '~2 hours', hint: 'Objective (CBT/written per advertisement)' },
    { label: 'Negative marking', value: '−0.25', hint: 'Per wrong answer' },
    { label: 'Qualifying', value: '40% UR', hint: '35% SC/OBC · 30% EWS/PwD' },
    { label: 'Final merit', value: 'Tier II + PI', hint: 'Tier I is qualifying only' },
  ],
  marking: [
    { situation: 'Correct answer', marks: '+1', tone: 'correct' },
    { situation: 'Wrong answer', marks: '−0.25', tone: 'wrong' },
    { situation: 'Unattempted', marks: '0', tone: 'unattempted' },
  ],
  markingNote:
    'Tier I is screening in nature — the score only decides who advances to Tier II (descriptive) and personal interview. Final merit in the legacy route: 80% Tier-II (descriptive) + 20% interview.',
  weightage: [
    { name: 'Quantitative Aptitude & Numerical Ability', detail: '~20 questions — percentages, ratios, averages, time–speed–distance, number system', weight: 20 },
    { name: 'Reasoning & Problem Solving', detail: '~20 questions — series, coding–decoding, seating, syllogisms, puzzles', weight: 20 },
    { name: 'General Awareness (defence/S&T focus)', detail: '~20 questions — DRDO missions, labs, missile programmes, current affairs', weight: 20 },
    { name: 'English Language', detail: '~20 questions — grammar, vocabulary, comprehension', weight: 20 },
    { name: 'General Science', detail: '~20 questions — physics, chemistry, biology at 10+2 level', weight: 20 },
  ],
  strategy: [
    'Defence-S&T current affairs is the differentiator: memorise DRDO’s 50+ labs, flagship programmes (Agni, Prithvi, BrahMos, Akash, Tejas, Arjun, K-15, Astra) and their sponsoring labs.',
    'With −0.25 per wrong answer, the expected-value rule says: guess when you can eliminate ≥2 options, skip pure 1-in-4 guesses.',
    'Quant and Reasoning are SSC-CGL-tier — drilling previous-year SSC and DRDO papers covers ~80% of the patterns.',
    'Aim just past the qualifying line comfortably (45–50%) and invest the real prep hours in the Tier II discipline paper — that is where merit is decided.',
    'Track rac.gov.in and drdo.gov.in: advertisements are sporadic (sometimes multi-year gaps) with short 3–4 week windows; apply the day the ad opens.',
  ],
  timeline: 'Per RAC advertisement cycle — no fixed annual calendar · watch rac.gov.in for Advt + Tier I date',
  website: { label: 'rac.gov.in', url: 'https://rac.gov.in/' },
})

// ---------- DRDO Tier II — discipline papers ----------
const drdoTier2Pattern = (bookId: string, discipline: string): ExamPattern => ({
  bookId,
  examName: `DRDO Tier II — ${discipline} Descriptive Paper`,
  authority: 'DRDO Recruitment & Assessment Centre (RAC)',
  patternLine: '75-mark descriptive paper · 60 marks discipline + 15 marks research aptitude · followed by interview',
  stats: [
    { label: 'Stage', value: 'Tier II', hint: 'Descriptive — counts for final merit' },
    { label: 'Marks', value: '75', hint: '60 discipline + 15 research aptitude' },
    { label: 'Duration', value: '~3 hours', hint: 'Pen-and-paper descriptive' },
    { label: 'Final merit', value: '80/20', hint: '80% Tier II + 20% interview' },
    { label: 'Interview bar', value: '70% UR', hint: '60% EWS/OBC/SC/ST/PwD' },
    { label: 'Syllabus depth', value: 'ESE-Mains', hint: 'UPSC Engineering Services level' },
  ],
  marking: [
    { situation: 'Discipline questions (descriptive)', marks: '60', tone: 'correct' },
    { situation: 'Research aptitude section', marks: '15', tone: 'correct' },
    { situation: 'Personal interview (final gate)', marks: '20%', tone: 'unattempted' },
  ],
  markingNote:
    'Some recent advertisements (e.g., Advt 140) replaced the 75-mark Tier II with two 300-mark descriptive papers (3 h each) at UPSC ESE-Mains depth; the current route (Advt 156, 2025) shortlists on GATE score alone, then interview — final merit 80% GATE + 20% interview. Always check the specific advertisement you apply under.',
  weightage: [
    { name: `Engineering discipline — ${discipline}`, detail: '60 marks · descriptive answers at UPSC ESE-Mains depth · this book is that syllabus', weight: 80 },
    { name: 'Research Aptitude', detail: '15 marks · S&T priorities of the nation, research aptitude, quant & reasoning', weight: 20 },
  ],
  strategy: [
    'Descriptive answers score on structure: definition → diagram → derivation/working → result → application; practise writing full answers by hand within 8–10 minutes each.',
    'The discipline syllabus mirrors UPSC ESE (Mains) — solving ESE previous-year descriptive papers is the highest-yield drill.',
    'The 15-mark research-aptitude section rewards knowing national S&T priorities: DRDO’s technology clusters, Atmanirbhar Bharat missions, defence export targets and flagship programmes.',
    'Interview (70% UR qualifying) probes projects, fundamentals and motivation for defence research — prepare 2–3 deep dives into your own strongest subjects.',
    'Keep a valid GATE score: in current cycles it is either the shortlisting gate or a fallback route to the interview stage.',
  ],
  timeline: 'Tier II typically 2–3 months after Tier I · interview calls within ~6 weeks of Tier II results',
  website: { label: 'rac.gov.in', url: 'https://rac.gov.in/' },
})

// ---------- GATE CS 2026 ----------
const gatePattern = (bookId: string): ExamPattern => ({
  bookId,
  examName: 'GATE 2026 — CS & IT Paper',
  authority: 'IIT Guwahati (organizing institute)',
  patternLine: '65 questions · 100 marks · 3 hours · negative only on MCQs · score valid 3 years',
  stats: [
    { label: 'Mode', value: 'CBT', hint: 'Computer Based Test' },
    { label: 'Duration', value: '3 hours', hint: '180 minutes' },
    { label: 'Questions', value: '65', hint: '10 GA + 55 subject (incl. Engg Maths)' },
    { label: 'Total marks', value: '100', hint: 'GA 15 + Engg Maths 13 + Core 72' },
    { label: 'Question types', value: 'MCQ/MSQ/NAT', hint: '1-mark and 2-mark questions' },
    { label: 'Score validity', value: '3 years', hint: 'For M.Tech/PSU recruitment' },
  ],
  marking: [
    { situation: 'Wrong 1-mark MCQ', marks: '−1/3', tone: 'wrong' },
    { situation: 'Wrong 2-mark MCQ', marks: '−2/3', tone: 'wrong' },
    { situation: 'MSQ / NAT wrong', marks: '0', tone: 'unattempted' },
    { situation: 'Correct answer', marks: '+1 / +2', tone: 'correct' },
  ],
  markingNote:
    'Negative marking applies ONLY to single-answer MCQs. Multiple-select (MSQ) and numerical-answer (NAT) questions carry no negative marking and no partial marking — attempt them aggressively.',
  weightage: [
    { name: 'General Aptitude', detail: '15 marks · 10 questions (5×1 + 5×2) — verbal, quantitative, analytical, spatial', weight: 15 },
    { name: 'Engineering Mathematics', detail: '13 marks · discrete maths, linear algebra, calculus, probability', weight: 13 },
    { name: 'Core CS', detail: '72 marks · Programming & DS ~10–13 (highest), then Algorithms, COA, Databases, OS, Networks, TOC, Compiler, Digital Logic', weight: 72 },
  ],
  strategy: [
    'Programming & Data Structures is the highest-weightage core area (~10–13 marks) — trees, heaps, graphs and recursion questions are near-guaranteed.',
    'No negative marking on NAT/MSQ: never leave these blank; a numeric guess within range has positive expected value.',
    'GA (15 marks) is the cheapest score on the paper — basic verbal/quant practice yields 12+/15; treat it as a subject, not an afterthought.',
    '2-mark questions dominate the back half of the paper — plan to reach question ~40 with ~50 minutes still on the clock.',
    'Virtual calculator only: practise GATE’s on-screen calculator from day one; physical calculator habits slow you down badly on numerical problems.',
    'GATE score unlocks M.Tech admissions at IISc/IITs AND PSU jobs (IOCL, BHEL, NTPC…) simultaneously — the same score, twice the payoff.',
  ],
  timeline: 'Exam weekends in February 2026 · Results mid-March · Scorecards downloadable ~21 March',
  website: { label: 'gate2026.iitg.ac.in', url: 'https://gate2026.iitg.ac.in/' },
})

// ---------- University semester exams (engineering branches) ----------
const enggSemPattern = (bookId: string, branch: string): ExamPattern => ({
  bookId,
  examName: `${branch} — University Semester Exams`,
  authority: 'AKTU / VTU / AICTE model curriculum',
  patternLine: 'Semester-end theory papers · 3 hours · unit-wise choice · internals carry 30–40% of the grade',
  stats: [
    { label: 'Mode', value: 'Pen & paper', hint: 'Written theory papers' },
    { label: 'Duration', value: '3 hours', hint: 'Per theory paper' },
    { label: 'Semester cycle', value: '8 semesters', hint: '4 years · ~6 subjects/sem' },
    { label: 'End-sem weight', value: '60–70%', hint: 'Internal assessment: 30–40%' },
    { label: 'Paper format', value: '5 units', hint: 'Answer 1 full question per unit' },
    { label: 'Pass marks', value: '~35–40%', hint: 'Per subject + aggregate criteria' },
  ],
  marking: [
    { situation: 'Full question answered (per unit)', marks: '12–14', tone: 'correct' },
    { situation: 'Internal choice within unit', marks: 'either/or', tone: 'unattempted' },
    { situation: 'Skipped unit', marks: '0', tone: 'wrong' },
  ],
  markingNote:
    'Each unit typically offers an internal choice (attempt 1 of 2 questions). Prepare 3–4 of 5 units thoroughly plus one backup unit — that covers every slot on the paper.',
  weightage: [
    { name: 'End-semester theory', detail: '3-hour written paper · 5 units · usually 60–70% of the subject grade', weight: 65 },
    { name: 'Internal assessment', detail: 'MSTs, class tests, assignments, attendance — 30–40%, collected continuously', weight: 35 },
  ],
  strategy: [
    'Universities publish unit-wise question papers going back years — 60–70% of each paper reappears as reworded versions of previous questions; solve at least the last 5 years per subject.',
    'Answer structure scores marks: definition → labelled diagram → derivation with stated assumptions → numerical example → conclusion. Diagrams alone can carry 20–30% of the marks.',
    'Internals (30–40%) are the cheapest grade points you will ever earn — two MSTs, assignments and attendance; never concede them before the end-sem.',
    'For derivation-heavy subjects (EMFT, control systems, thermodynamics), memorise the starting law, the assumptions and the final result; examiners award step marks for a correct skeleton.',
    'Lab vivas reuse theory fundamentals — one solid pass through the lab manual before viva is typically worth a full letter grade.',
    'Prioritise core subjects (DBMS, OS, DSA for CSE; analog, digital, signals for ECE; machines, power systems for EE; thermo, SOM, TOM for ME) — they back GATE, DRDO and every campus interview later.',
  ],
  timeline: 'Odd semester exams: Dec–Jan · Even semester exams: May–Jun · Results ~6–8 weeks after exams',
})

// ---------- Registry ----------
const PATTERNS: Record<string, ExamPattern> = {
  'jeemain-physics-2026': jeeMainPattern('jeemain-physics-2026'),
  'jeemain-chemistry-2026': jeeMainPattern('jeemain-chemistry-2026'),
  'jeemain-maths-2026': jeeMainPattern('jeemain-maths-2026'),
  'jeeadv-physics-2026': jeeAdvPattern('jeeadv-physics-2026'),
  'jeeadv-chemistry-2026': jeeAdvPattern('jeeadv-chemistry-2026'),
  'jeeadv-maths-2026': jeeAdvPattern('jeeadv-maths-2026'),
  'sat-math-2026': satPattern('sat-math-2026', 'math'),
  'sat-rw-2026': satPattern('sat-rw-2026', 'rw'),
  'drdo-tier1': drdoTier1Pattern('drdo-tier1'),
  'drdo-cse': drdoTier2Pattern('drdo-cse', 'Computer Science & Engineering'),
  'drdo-ece': drdoTier2Pattern('drdo-ece', 'Electronics & Communication'),
  'drdo-ee': drdoTier2Pattern('drdo-ee', 'Electrical Engineering'),
  'drdo-me': drdoTier2Pattern('drdo-me', 'Mechanical Engineering'),
  'gate-cs-2026': gatePattern('gate-cs-2026'),
  'engg-cse': enggSemPattern('engg-cse', 'CSE'),
  'engg-ece': enggSemPattern('engg-ece', 'ECE'),
  'engg-ee': enggSemPattern('engg-ee', 'EE'),
  'engg-me': enggSemPattern('engg-me', 'ME'),
}

export function getExamPattern(bookId: string): ExamPattern | undefined {
  return PATTERNS[bookId]
}
