/**
 * Knowledge Universe — Management & Leadership — Chapter 01: Organisations & People
 * 2 lessons · ~3,880 words
 * field: Management
 * legacy sources: x26-banking-management-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Management]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 bus-management-organisational-behaviour — Management and Organisational Behaviour: Functions, Motivation and Leadership
 *   01.2 bus-communication-governance-ethics — Business Communication, Corporate Governance and Ethics: The Institutional Layer
 */
import type { KnowledgeTopic } from '../../types'

export const managementLeadershipCh01: KnowledgeTopic[] = [
  {
    id: 'bus-management-organisational-behaviour',
    title: 'Management and Organisational Behaviour: Functions, Motivation and Leadership',
    domain: 'Business & Economics',
    field: 'Management',
    branch: 'Organisational Behaviour',
    tier: 'core',
    concepts: [
      'Management functions: planning, organising, staffing, directing, controlling',
      'Taylor\'s scientific management and the one best way',
      'Fayol\'s fourteen principles of administration',
      'Maslow\'s hierarchy and Herzberg\'s two factors',
      'McGregor\'s Theory X and Theory Y',
      'Leadership styles: autocratic, democratic, laissez-faire',
    ],
    words: 1971,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'Management is the craft of getting things done through people, and organisational behaviour is the study of those people — what moves them, how they group, why leaders work or fail. Exam syllabi organise the field into a stable canon: the definition and functions of management, the two founding giants (Taylor on the shop floor, Fayol in the administrative office), the motivation theories that dominate multiple-choice sections (Maslow, Herzberg, McGregor, with a nod to modern expectancy thinking), and the leadership-style taxonomy. This lesson walks the canon in order, because each layer builds on the last: functions describe what managers do, the founding principles describe how they first systematised it, motivation theories explain the people they direct, and leadership styles describe the doing of direction itself.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Management questions are classification questions in disguise. A scenario names a manager doing four things — which function is the fifth? A firm starts paying bonuses for output and restructuring jobs — Taylor, Fayol or Herzberg? A supervisor assumes workers avoid responsibility — which Theory? The examiner hands you behaviour and asks for the label. That is good news: the canon is small, the labels are few, and the distinctions between them (Fayol\'s universal principles versus Taylor\'s scientific methods; hygiene factors that prevent dissatisfaction versus motivators that create satisfaction) are sharp enough to test. Learn the distinctions and the questions answer themselves.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Functions of management', def: 'The standard decomposition of managerial work: planning (deciding goals and actions in advance), organising (assigning tasks, grouping, authority), staffing (filling and keeping the roles), directing/leading (guiding, motivating, communicating, supervising) and controlling (measuring performance against standards and correcting). Management is pervasive — it happens at every level and in every organisation.' },
          { term: 'Scientific management (Taylor)', def: 'F.W. Taylor\'s programme (The Principles of Scientific Management, 1911) for the shop floor: replace rule-of-thumb with the scientifically derived "one best way" via time and motion studies, scientifically select and train workers, standardise tools and methods, and tie pay to output (differential piece rates). Cooperation between "scientifically selected" workers and managers replaces conflict over effort.' },
          { term: 'Administrative principles (Fayol)', def: 'Henri Fayol\'s fourteen principles of general administration — division of work; authority and responsibility; discipline; unity of command; unity of direction; subordination of individual interest; remuneration; centralisation; scalar chain (with the gang plank for lateral shortcuts); order; equity; stability of tenure; initiative; esprit de corps — plus the claim that managing is a universal, teachable activity: to forecast and plan, to organise, to command, to coordinate and to control.' },
          { term: 'Maslow\'s hierarchy of needs', def: 'Abraham Maslow\'s five-level ladder — physiological, safety, social/belonging, esteem, self-actualisation — where lower, prepotent needs dominate behaviour until reasonably satisfied, after which the next level motivates. Managerial translation: match incentives to the level the employee currently occupies.' },
          { term: 'Herzberg\'s two-factor theory', def: 'Frederick Herzberg\'s finding that the factors preventing dissatisfaction (hygiene: pay, policy, conditions, supervision, job security) are different from the factors creating satisfaction (motivators: achievement, recognition, the work itself, responsibility, growth). Removing hygiene complaints buys calm, not motivation; motivators are what energise.' },
          { term: 'Theory X and Theory Y', def: 'Douglas McGregor\'s pair of managerial assumption sets: X assumes the average person dislikes work, avoids responsibility and must be coerced and closely supervised; Y assumes work is natural, people exercise self-direction toward commitments, and seek responsibility — so participation, delegation and job enrichment outperform command and control.' },
        ],
      },
      {
        kind: 'para',
        text: 'The functions give management its grammar. Planning decides in advance what is to be done, how and by when — and because the future is uncertain, planning is called the primary function from which the others flow. Organising then converts the plan into a structure: departments, reporting lines, authority matching responsibility. Staffing fills the structure — recruitment, selection, placement, training — and directing puts the structure into motion through leadership, communication, motivation and supervision. Controlling closes the loop by comparing performance with standards and feeding corrections back into the next plan. Levels sit on top of the grammar: top management sets objectives and policy, middle management interprets policy into departmental plans, and supervisory (operational) management runs day-to-day execution — the same five functions, different horizons. Whether management is a science (systematic knowledge, principles), an art (personal skill applied to situations) or a profession (a growing — but not yet fully licensed — body of knowledge) is the standing debate question; the accepted answer is "all three, to degrees".',
      },
      {
        kind: 'para',
        text: 'The founders systematised different rooms of the same house. Taylor worked at the bench: his scientific management attacked soldiering — deliberate slow work — with time and motion studies that found the one best way, standardised tools, scientifically selected and trained workers, and paid differential piece rates so that above-standard output earned above-standard pay. Its legacy is work study, industrial engineering and the incentive scheme; its criticism is the treatment of the worker as a machine attachment. Fayol managed from the office: a mining-company CEO, he claimed administration was a universal, teachable skill and stated fourteen principles — including the two examiners love: unity of command (one subordinate, one boss) and the scalar chain with its gang plank, the sanctioned lateral bridge between two managers who would otherwise route a message up one chain and down the other. The neat contrast: Taylor asked how work should be done at the worker–machine interface; Fayol asked how the whole undertaking should be administered.',
      },
      {
        kind: 'para',
        text: 'Motivation theory is where organisational behaviour earns its separate name. Maslow arranged human needs in a prepotent ladder — a hungry worker (physiological) is not yet reachable by esteem incentives — and managers draw the practical lesson: diagnose the occupied level and aim the incentive there. Herzberg then split the toolbox: his interviews found that the things that made people miserable (pay, policy, supervision, conditions) were not the mirror image of the things that made work satisfying (achievement, recognition, growth, the work itself) — hygiene and motivation are different axes, which is why a pay rise can end a complaint without creating engagement, and why job enrichment (adding responsibility and growth) is the motivator-side move. McGregor reframed both as consequences of managerial assumptions: the Theory X supervisor who assumes laziness builds coercion, gets compliance, and never tests the alternative; the Theory Y manager builds conditions for self-direction and is at least not wrong about the people Maslow and Herzberg describe. Modern additions — McClelland\'s needs for achievement, affiliation and power, and Vroom\'s expectancy view (motivation = expectancy × instrumentality × valence) — sharpen the picture for higher-level questions without displacing the classic trio.',
      },
      {
        kind: 'para',
        text: 'Leadership is the directing function made personal. The style taxonomy is the exam staple: autocratic leadership centralises decisions and issues instructions (fast, useful in crisis, corrosive to initiative), democratic leadership decides with the group (slower, stronger commitment and better decisions when knowledge is distributed), and laissez-faire leadership delegates and intervenes minimally (works with expert, self-directed teams, drifts otherwise). Beyond styles sit three lenses worth naming: trait theory (leaders are born with qualities — discredited as sufficient, but not silent), behavioural theory (what leaders do — task orientation versus people orientation, the Blake–Mouton grid\'s two axes), and situational theory (the style must fit maturity and context — Fiedler, Hersey–Blanchard). Teams complete the picture: high-performing teams trade individual glory for shared goals, clear norms and mutual accountability, and a manager\'s job — in the OpenStax formulation that runs the modern course — is to plan the work, organise the structure, lead the people and control the results, all four verbs at once.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Diagnose a Motivation Failure with the Right Theory',
        steps: [
          'Scenario: a support team is paid well, has a modern office and friendly supervisors — yet performs flatly, with high "satisfied enough" attendance and zero initiative.',
          'Screen hygiene first (Herzberg): pay, policy, conditions, supervision — all fine; complaints are low. Hygiene explains the absence of dissatisfaction, not the absence of drive.',
          'Check the motivator side: the work is repetitive, recognition is rare, responsibility is fixed, growth is invisible. The motivator axis is empty — engagement cannot come from better hygiene.',
          'Prescribe: enrich jobs (own the customer end-to-end), add recognition tied to achievement, create visible growth paths — motivator-side moves.',
          'Cross-check with McGregor: the current regime assumes employees need only comfort (a soft-X drift). A Y-style redesign invites self-direction; Maslow would read the same case as employees parked on satisfied lower levels, unmoved because esteem and self-actualisation paths are closed.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Comparing performance against standards and correcting deviations is which management function?',
          options: ['Planning', 'Organising', 'Directing', 'Controlling'],
          answer: 3,
          explain: 'Controlling closes the management loop: set standards, measure, compare, correct — feeding the corrections into the next cycle of planning.',
        },
        {
          q: 'The "gang plank" that permits two managers at the same level to communicate directly, bypassing the scalar chain, belongs to…',
          options: ['Taylor\'s scientific management', 'Fayol\'s administrative principles', 'Maslow\'s hierarchy', 'Herzberg\'s two-factor theory'],
          answer: 1,
          explain: 'Fayol\'s scalar-chain principle comes with the gang plank — the sanctioned lateral bridge that preserves hierarchy while avoiding the slow up-and-down route.',
        },
        {
          q: 'A firm improves pay, lighting and supervision, and complaints stop — but output stays flat. Herzberg would say…',
          options: ['motivators were added', 'hygiene factors improved; motivators untouched', 'Theory X assumptions were validated', 'Maslow\'s safety needs were activated'],
          answer: 1,
          explain: 'Hygiene improvements end dissatisfaction but do not create satisfaction; engagement needs the motivator axis — achievement, recognition, responsibility, growth.',
        },
        {
          q: 'A manager who believes employees naturally avoid work and must be coerced holds which assumption set?',
          options: ['Theory Y', 'Theory X', 'Theory Z', 'Expectancy theory'],
          answer: 1,
          explain: 'Theory X assumes dislike of work and avoidance of responsibility, justifying coercion and close supervision; Theory Y assumes self-direction toward accepted goals.',
        },
        {
          q: 'Which pairing correctly matches founder to arena?',
          options: ['Taylor: administrative principles; Fayol: shop-floor efficiency', 'Taylor: shop-floor scientific methods; Fayol: universal administrative principles', 'Both worked on motivation ladders', 'Fayol founded time and motion studies'],
          answer: 1,
          explain: 'Taylor systematised the worker–machine interface (time studies, one best way, differential piece rates); Fayol systematised general administration (fourteen principles, unity of command, scalar chain).',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Merging Taylor and Fayol — one is scientific management of the shop floor, the other administrative principles of the whole enterprise; unity of command and the gang plank are Fayol\'s, differential piece rates are Taylor\'s. Reading Maslow as a strict staircase that everyone climbs identically — the levels are prepotent tendencies, not universal schedules, and the theory was never meant as a pay-design tool. Calling a pay rise a motivator — in Herzberg\'s language pay is hygiene; it buys the absence of dissatisfaction. Swapping Theory labels — X is the coercive assumption set, Y the self-direction one. And naming laissez-faire as "no leadership" — it is delegated leadership, which succeeds only with expert, self-directed teams and fails by drift otherwise.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none. Follow with the communication-governance-ethics lesson (the directing function\'s information layer and the institutional frame) and the cost-concepts and business-cycles lessons for the quantitative side of running firms. Primary reading: OpenStax, Principles of Management (openstax.org, CC BY — book page read: ch.1 "Managing and Performing" for the leading/planning/organizing/controlling approach, ch.3 "The History of Management" for Taylor and Fayol, ch.13 "Leadership", ch.14 "Work Motivation for Performance" for Maslow, Herzberg and McGregor, ch.15 "Managing Teams", ch.17 "Organizational Planning and Controlling"); NCERT Business Studies Class XII, chapters "Nature and Significance of Management" and "Directing" for the Indian-curriculum phrasing of the same canon.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Five functions: planning → organising → staffing → directing → controlling; pervasive across levels; science + art + proto-profession.',
        'Taylor (1911): one best way, time and motion studies, scientific selection, differential piece rates — the shop floor.',
        'Fayol: fourteen principles — unity of command, scalar chain with gang plank, equity, esprit de corps — the whole administration.',
        'Maslow: physiological → safety → social → esteem → self-actualisation; aim incentives at the occupied level.',
        'Herzberg: hygiene (pay, policy, conditions) prevents dissatisfaction; motivators (achievement, recognition, growth) create it. McGregor: X assumes coercion works, Y assumes self-direction works.',
        'Leadership styles: autocratic (fast, crisis), democratic (commitment, distributed knowledge), laissez-faire (expert teams); situational fit beats trait folklore.',
      ] },
    ],
  },
  {
    id: 'bus-communication-governance-ethics',
    title: 'Business Communication, Corporate Governance and Ethics: The Institutional Layer',
    domain: 'Business & Economics',
    field: 'Management',
    branch: 'Communication, Governance & Ethics',
    tier: 'core',
    concepts: [
      'The communication process: sender, encoding, channel, decoding, feedback',
      'Barriers: semantic, psychological, organisational',
      'Corporate governance and the board of directors',
      'Business ethics and corporate social responsibility',
      'Conflict management and workplace stress',
      'HR basics: recruitment, appraisal and training',
    ],
    words: 1909,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'Institutions run on three invisible systems: the information system that moves meaning between people, the governance system that keeps power accountable, and the ethical system that decides what the organisation will and will not do. This lesson covers all three plus the people machinery that staffs them. It completes the management picture begun in the functions-and-motivation lesson: there the subject was what managers do and why employees act; here it is how organisations talk, who watches the watchers, and how the HR pipeline fills every role in between. The syllabus packages these as "communication, governance and ethics", and the exam emphasis falls on process vocabulary, barrier classification, governance mechanisms and the taxonomy of social responsibility.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'This territory rewards precise vocabulary. The communication process has named parts — encoding, channel, decoding, feedback, noise — and barriers come in three labelled families (semantic, psychological, organisational); governance has named mechanisms (board, audit committee, independent directors); responsibility has named layers (economic, legal, ethical, discretionary). Questions hand you a scenario — a rumour warping as it travels, a board approving related-party deals, a company funding a school — and ask for the label. Knowing that communication is complete only when feedback confirms decoding, that governance exists because ownership and control are separated, and that CSR in India has a statutory quota shape turns soft-sounding topics into answerable ones.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Communication process', def: 'Sender → encoding (ideas into symbols) → message → channel (formal or informal; vertical, horizontal or diagonal) → decoding (symbols back into meaning) → receiver → feedback, with noise distorting at every stage. Communication succeeds only when feedback confirms that the decoded meaning matches the intended one.' },
          { term: 'Communication barriers', def: 'Three families: semantic (wrong words, technical jargon, language differences, ambiguous symbols), psychological (premature evaluation, lack of attention, loss by transmission and poor retention, distrust) and organisational (rigid rules, status and hierarchical distance, complex structure, information overload). Remedies match the family: clarity and feedback against semantics, active listening and empathy against psychology, flatter channels and clear policy against organisational.' },
          { term: 'Corporate governance', def: 'The system by which companies are directed and controlled — the board of directors elected by shareholders, its committees (audit, nomination, remuneration), independent directors who bring outside judgement, disclosure norms and auditor oversight. The driver is the separation of ownership from control: shareholders own, professional managers run, governance aligns the two.' },
          { term: 'Business ethics', def: 'The moral principles — honesty, fairness, integrity, law-abidingness, concern for stakeholders — that govern business conduct, sourced from law (the minimum), organisational values, personal conscience and social norms. An ethical dilemma arises when two legitimate values conflict: profit versus disclosure, loyalty versus transparency.' },
          { term: 'Corporate social responsibility (CSR)', def: 'Responsibility beyond profit and law toward employees, consumers, community and environment — classically layered as economic, legal, ethical and discretionary (Carroll). In India it has a statutory form: Section 135 of the Companies Act 2013 requires qualifying companies to spend two percent of average net profit on scheduled activities.' },
          { term: 'HR cycle', def: 'Recruitment (internal promotion and transfers versus external advertising, campus and agencies), selection (tests, interviews, reference checks), placement and orientation, training (on-the-job: apprenticeship, internship, job rotation; off-the-job: classroom, vestibule, simulations) and appraisal (traditional top-down ratings versus modern 360-degree feedback), feeding compensation and promotion.' },
        ],
      },
      {
        kind: 'para',
        text: 'The communication process is worth rehearsing slowly because every barrier question hangs on it. A sender has an idea, encodes it into words or symbols, transmits the message through a channel — a letter, a meeting, a dashboard, the grapevine — the receiver decodes, and feedback travels back to close the loop. Meaning lives in people, not in the message: the same "ASAP" decodes as urgency to one reader and as routine to another. Formal channels run vertical (upward and downward), horizontal (between peers) and diagonal (across functions); informal channels — the grapevine — move faster than any memo and carry morale as much as information, which is why good managers feed rather than fight them. Digital workplace tools change the speed, not the anatomy: a mis-threaded email is still a message that skipped feedback.',
      },
      {
        kind: 'para',
        text: 'Barriers explain why loops fail, and the three-family taxonomy organises the fixes. Semantic barriers are problems of language itself — jargon that excludes, badly chosen words, translated ambiguity — cured by plain language, defined terms and confirming feedback. Psychological barriers live inside the participants: premature evaluation (judging before decoding), inattention, distrust between levels, and the mechanical losses of transmission and retention — cured by active listening, empathy and a culture where bad news can travel upward. Organisational barriers are structural: rigid rules about who may tell whom, long chains that shrink the signal, status distance that filters bad news, and overload when everyone copies everyone — cured by deliberate channel design, flatter access, and information discipline. Examiners present a vignette; your first task is always to place it in one family before reaching for the remedy.',
      },
      {
        kind: 'para',
        text: 'Governance exists because of a structural fact: in the modern company, owners and managers are different people. Shareholders elect a board of directors to hire, supervise and (when needed) dismiss the executives who run the firm day to day. The board\'s toolkit — audit committees that own financial integrity, independent directors with no management ties, remuneration and nomination committees, external auditors, and disclosure regimes — is designed to make managers accountable between annual meetings. India\'s institutional story runs from the CII code (1996-98) through the Kumar Mangalam Birla committee (1999-2000), which made audit committees and a minimum share of independent directors compulsory for listed companies, to SEBI\'s Listing Obligations and Disclosure Requirements regulations (2015) and the Companies Act 2013, which codified directors\' duties. Governance failures — inflated accounts, related-party favours, auditors asleep — are the standard current-affairs hooks; the mechanism vocabulary above is how you analyse them.',
      },
      {
        kind: 'para',
        text: 'Ethics and social responsibility are the normative layer over all of it. Business ethics names the principles — integrity, fairness, transparency, law-abidingness — and their sources: law sets the floor, organisational and professional codes shape judgement, personal conscience decides the hard cases. Carroll\'s four layers arrange responsibility: economic (be profitable), legal (obey the law), ethical (do what is right beyond the law) and discretionary/philanthropic (voluntary contribution). India converts the discretionary into the statutory: Section 135 of the Companies Act 2013 obliges companies above thresholds — net worth, turnover or profit — to spend two percent of average three-year net profit on CSR activities listed in Schedule VII: education, health, environment, rural development and more. Alongside sit the people systems: conflict (task conflict can sharpen decisions; relationship conflict corrodes teams; resolution runs through negotiation, mediation and clear procedures), stress (job demands versus control and support; managed by redesign, Employee Assistance Programmes and workload honesty), and the HR cycle that recruits, selects, trains and appraises the people who inherit all these systems — with 360-degree appraisal as the modern answer to one-boss bias.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Three Vignettes, Three Labels',
        steps: [
          'Vignette 1: a finance head\'s email of dense jargon is misread by new joins; two weeks of errors follow before anyone asks. Family: semantic — jargon and no feedback loop. Fix: plain-language templates plus read-back confirmation.',
          'Vignette 2: a listed company books sales that never happened; the auditor signs off; the audit committee never meets. Label: governance failure — the control layer (audit committee, independent directors, auditor scepticism) did not operate. Fix under LODR norms: independent audit committee with real meetings and whistleblower access.',
          'Vignette 3: a profitable manufacturer funds a district school and a skill centre and reports the spend. Label: CSR — in India, Section 135 / Schedule VII territory; classify the layer as ethical-to-philanthropic, note the statutory two-percent rule.',
          'Cross-check: same company, a manager suppressing a safety complaint to hit targets — that is an ethical dilemma (profit versus duty of care), not a governance mechanism failure; it is cured by codes, protection for whistleblowers and tone at the top.',
          'Lesson: place the vignette first (communication barrier, governance mechanism, ethical dilemma, CSR), then apply the family\'s remedy — labels before fixes.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Communication is complete only when…',
          options: ['the message is transmitted', 'the receiver decodes it', 'feedback confirms the intended meaning', 'the channel is formal'],
          answer: 2,
          explain: 'Transmission and decoding are necessary but not sufficient; feedback that confirms the decoded meaning matches the intended one is what completes the process.',
        },
        {
          q: 'An employee filters bad news because the boss dislikes it. Which barrier family?',
          options: ['Semantic', 'Psychological', 'Organisational', 'Mechanical'],
          answer: 1,
          explain: 'Fear, distrust and premature evaluation are psychological barriers; organisational barriers are structural (rules, status, chain length) and semantic ones are about language itself.',
        },
        {
          q: 'The core problem corporate governance exists to solve is…',
          options: ['the separation of ownership from control', 'the shortage of skilled managers', 'excessive government regulation', 'the high cost of capital'],
          answer: 0,
          explain: 'Shareholders own; professional managers control. Boards, committees, independent directors, auditors and disclosure align the two — that alignment problem is governance.',
        },
        {
          q: 'Under Section 135 of the Companies Act 2013, qualifying Indian companies must spend on CSR…',
          options: ['1% of average net profit', '2% of average net profit', '5% of annual turnover', 'a voluntary amount set by the board'],
          answer: 1,
          explain: 'The Act requires two percent of average net profit (three preceding years) on Schedule VII activities for companies above the net-worth, turnover or profit thresholds.',
        },
        {
          q: 'Appraisal that collects feedback from supervisors, peers, subordinates and customers is called…',
          options: ['traditional rating', '360-degree appraisal', 'vestibule training', 'management by objectives'],
          answer: 1,
          explain: '360-degree appraisal triangulates multiple rater perspectives, correcting the one-boss bias of traditional top-down ratings.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Calling communication complete at transmission — without confirming feedback it is only broadcasting. Misfiling barriers: jargon is semantic, fear is psychological, status distance is organisational — the remedies differ, so misfiling costs the fix marks too. Treating ethics and law as the same floor — legality is the minimum, ethics runs beyond it; a legal action can still be unethical. Reciting CSR as pure philanthropy — in India it is partly statutory (Section 135), which changes both the motive and the accounting. Confusing governance with management — boards direct and oversee, managers run; mixing them erases the accountability chain the whole apparatus exists to enforce. And reading the grapevine as enemy radio — it is a formal system\'s shadow that carries morale; feed it true information rather than banning it.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the management-functions lesson for where directing and staffing sit. Follow with the business-correspondence lesson to convert communication theory into writing formats, and the companies-act lesson in law for the statutory side of boards. Primary reading: OpenStax, Business Ethics (openstax.org, CC BY — stakeholder theory, corporate governance and the CSR layers); Business Communication for Success (Open Textbook Library / LibreTexts — communication process, channel choice, professional conventions); NCERT Business Studies Class XII, "Directing" (communication process and barriers) and "Staffing" (recruitment, training, appraisal); Companies Act 2013 Section 135 with Schedule VII and SEBI LODR 2015 for the governance mechanism list.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Process: sender → encode → channel → decode → receiver → feedback; noise at every stage; feedback completes it.',
        'Barriers in three families — semantic (language), psychological (fear, inattention, premature evaluation), organisational (rules, status, overload) — each with its own remedy.',
        'Governance: ownership separated from control; board + audit committee + independent directors + auditors + disclosure (India: Birla committee 1999-2000 → LODR 2015, Companies Act 2013).',
        'Ethics: law is the floor, not the ceiling; Carroll layers — economic, legal, ethical, discretionary.',
        'CSR in India: Section 135 — two percent of average net profit for qualifying companies, Schedule VII activities.',
        'People systems: conflict and stress management; HR cycle — recruit (internal/external), select, train (on/off the job), appraise (360-degree).',
      ] },
    ],
  },
]
