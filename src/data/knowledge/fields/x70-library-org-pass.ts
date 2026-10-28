import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X70 pass (2026-10-29): LIBRARY-ORG-20261029-1 — thinnest-book      */
/*  deepening, round five. Structure audit ran CLEAN on the minimums   */
/*  (101 books, all >=2ch/>=3ls; twenty books at the 3-lesson floor),  */
/*  so per the loop's standing mandate this pass deepens the three     */
/*  thinnest books NOT already owned by the X67/X68/X69 convergence:   */
/*                                                                     */
/*  1. Religious Studies & Mythology (3ls) +1 chapter 'Sacred Texts    */
/*     & Canon' (Ch3, between Western Traditions and Comparative       */
/*     Mythology) + rel-scripture-canon-interpretation — OWNS the      */
/*     cross-tradition textual machinery (oral-to-written, canon       */
/*     formation, translation, interpretation schools, textual         */
/*     criticism). Carved against rel-eastern-traditions and           */
/*     rel-abrahamic-faiths, which own the traditions' CONTENT (Vedic  */
/*     hymns, Torah, Quran as practice and belief); the comparative-   */
/*     mythology lesson owns narrative PATTERN study (Campbell/Propp/  */
/*     Raglan). 'canon formation', 'textual criticism', 'midrash' and  */
/*     'Septuagint' had zero live-topic hits before writing.           */
/*  2. Education (3ls) +1 lesson in Teaching & Pedagogy:               */
/*     edu-curriculum-backward-design — OWNS curriculum DESIGN         */
/*     doctrine (Tyler rationale, backward design, Bloom-as-alignment, */
/*     hidden/null curriculum, constructive alignment). Carved against */
/*     soc-education-pedagogy (owns delivery EVIDENCE: cognitive load, */
/*     direct instruction, Bloom's 2-sigma problem, mastery+feedback)  */
/*     and edu-teaching-aptitude-learner-evaluation (owns teaching     */
/*     levels, evaluation types, CBCS/grading) and ku-edu-higher-      */
/*     education-system-india (owns Indian regulators/NEP/GER).        */
/*     'Tyler rationale', 'backward design' (curriculum sense — the    */
/*     health-wellness hit is the epidemiologic sense), 'null          */
/*     curriculum' and 'constructive alignment' had zero live hits.    */
/*  3. Research Methods (3ls) +1 lesson in Research Methodology:       */
/*     res-survey-instrument-design — OWNS instrument craft (wording   */
/*     pitfalls, Likert formats, response biases and question order,   */
/*     mode effects, pretesting, Total Survey Error's measurement      */
/*     arm). Carved against soc-research-methods-toolkit (owns         */
/*     SAMPLING error: the 1936 selection story, margin arithmetic,    */
/*     Campbell's law) and res-research-methodology-hypothesis-        */
/*     sampling (owns operational definitions, measurement LEVELS,     */
/*     reliability/validity theory). 'Likert', 'acquiescence',         */
/*     'double-barreled', 'question order' and 'Total Survey Error'    */
/*     had zero live hits before writing.                              */
/*                                                                     */
/*  Sources: Ninian Smart's dimensional framework (The Religious       */
/*  Experience of Mankind); standard intro texts — Britannica entries  */
/*  on canon/scripture; Bruce Metzger, The Text of the New Testament   */
/*  (Oxford); Schuman & Presser, Questions and Answers in Attitude     */
/*  Surveys (1981); Groves et al., Survey Methodology (2nd ed.);       */
/*  Wiggins & McTighe, Understanding by Design (2nd ed., ASCD);        */
/*  Tyler, Basic Principles of Curriculum and Instruction (1949);      */
/*  Jackson, Life in Classrooms (1968); Eisner, The Educational        */
/*  Imagination; Biggs, constructive alignment (HE 32, 1996).          */
/*  No exam names in any user-visible text.                            */
/* ------------------------------------------------------------------ */

export const x70LibraryOrgPassTopics: KnowledgeTopic[] = [
  {
    id: 'rel-scripture-canon-interpretation',
    title: 'Scripture, Canon and Interpretation: How Traditions Make and Read Holy Texts',
    domain: 'Humanities',
    field: 'Religious Studies',
    branch: 'Sacred Texts',
    tier: 'core',
    concepts: [
      'From oral performance to written text',
      'Canon: how a community closes its shelf',
      'Translation is interpretation',
      'The interpreter\'s toolkit: from midrash to historical criticism',
      'Where authority sits: text, institution, community',
      'Reading scripture as a scholar',
    ],
    words: 1965,
    readMins: 10,
    addedOn: '2026-10-29',
    blocks: [
      {
        kind: 'para',
        text: 'Every large tradition is also a text tradition: hymns memorised before they were written, letters copied before they were canonised, commentaries composed before the printed page. This lesson studies the machinery those traditions share — how speech becomes scripture, how a community decides which books count, what happens when the words cross languages, and how readers argue over meaning. The stance throughout is descriptive scholarship in the comparative vein of the previous chapters: we examine what communities actually did, in the way a textual historian would, without adjudicating any tradition\'s truth claims.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Roughly five billion people belong to communities whose disputes — about law, science, gender, education — are frequently arguments about what a sacred text means and whose reading counts. You cannot follow those arguments, or write honestly about them, without the vocabulary this lesson provides: canon, translation, exegesis, textual criticism. The machinery also turns out to be general: any field that transmits authoritative texts — law, literature, history — reuses the same tools of copying, editing, canonisation and interpretation that the traditions refined first.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'From oral performance to written text. Most scriptures were sung or recited long before they were inscribed. The Vedic hymns were transmitted orally for perhaps a millennium, guarded by graded recitation practices (pada-patha and ghana-patha, word-by-word and permutated chanting) that acted as a checksum against error; the earliest surviving Vedic manuscripts come many centuries after composition. The Quran calls itself a recitation and remains, for many Muslims, fully itself only when recited — its standard written codex was fixed under the caliph Uthman around 650 CE, yet trained reciters continued to authorise the text by voice. The New Testament began as letters and sayings circulated in assemblies before being copied into codices; the Hebrew Bible preserves the marks of oral delivery in its poetic parallelism. Writing does not simply record oral tradition; it freezes one performance among many and thereby creates a new object that communities must then manage.',
      },
      {
        kind: 'para',
        text: 'Canon: how a community closes its shelf. A canon is the list of books a community treats as normative, and every canon has a history of inclusion and exclusion. The Hebrew Bible settled in three divisions — Torah, Prophets, Writings — with the core fixed for Jewish communities by roughly the end of the first century CE even as debate over the Writings continued. The Christian New Testament grew from Paul\'s letters, the earliest documents (mid-first century), and the gospels (roughly 70-100 CE); Athanasius\' thirty-ninth festal letter of 367 CE is the first known list to name exactly the twenty-seven books later ratified at regional councils at Hippo and Carthage around the turn of the fifth century. Buddhist councils compiled the Tipitaka, the "three baskets", while different Mahayana communities added sutras of their own. The Confucian canon — Five Classics, then Zhu Xi\'s Four Books — became the examination syllabus of a state for half a millennium. Canon formation is therefore less a moment than a process: authorship, circulation, usage in worship, and institutional decision converge on a shelf that later generations then treat as sealed.',
      },
      {
        kind: 'para',
        text: 'Translation is interpretation. The moment words cross a language, choices are made. The Septuagint, the Greek translation of Hebrew scripture produced for Alexandria\'s Jewish community from the third century BCE, already reads some passages differently from the Hebrew — and early Christians quoted it, shaping Christian theology in Greek categories. Jerome\'s Latin Vulgate (late fourth century) served the western church for a thousand years; Martin Luther\'s German Bible (1522-1534) did more than translate — it welded a dialect into a national literary language and put the text, unmediated, into lay hands. In Islam, rendering the Quran has historically been treated as commentary (tafsir) rather than replacement: translations serve as aids, while the Arabic recitation remains the scripture. Every translation decides what a phrase means before the reader ever meets it — which is why serious study compares translations rather than trusting one.',
      },
      {
        kind: 'para',
        text: 'The interpreter\'s toolkit: from midrash to historical criticism. Communities built formal ways to read past the surface. Rabbinic tradition distinguishes peshat, the plain sense, from derash, the homiletic sense pursued through midrashic probing of oddities in the text — Rashi\'s eleventh-century commentary models the discipline of leading with the plain sense. Medieval Christian readers developed the fourfold sense — literal, allegorical, moral, anagogical — summarised in the couplet "the letter teaches events, allegory what you shall believe, morality teaches what you shall do, anagogy what mark you shall be aiming at". Islamic scholarship produced tafsir, verse-by-verse exegesis disciplined by hadith, the reports of the Prophet\'s words and deeds graded by chains of transmission. The modern historical-critical method added a different move: treat the text as an artefact with a composition history. Source criticism separated the Pentateuch\'s parallel narrative strands (the documentary hypothesis, crystallised by Julius Wellhausen in 1878); form and redaction criticism traced units of tradition and the editors who shaped them. The methods disagree with the devotional readings on many conclusions, but they share one discipline: claims about meaning must be argued from evidence.',
      },
      {
        kind: 'para',
        text: 'Where authority sits: text, institution, community. Every tradition must answer: who speaks for the text? The Protestant reformers\' answer — sola scriptura, scripture alone, each reader with the text — was itself a claim against an institution, the Catholic magisterium, which holds that scripture is read rightly only within the church\'s living teaching authority. Rabbinic Judaism pairs the written Torah with the oral Torah, the interpretive tradition whose authority is exercised by rabbis in argument. Sunni Islam pairs the Quran with the sunnah as mediated by hadith scholarship; Shia Islam adds living interpretive authority in its scholarly hierarchy. Sikhism took a radical step in 1708, when the tenth Guru closed the human line by installing the scripture itself, Guru Granth Sahib, as the eternal guru — the text is the teacher. And Confucianism shows authority migrating to the state: the canon was authoritative partly because the examinations made it the gateway to office. Authority, once again, is not a property of the book alone but of the community\'s machinery around it.',
      },
      {
        kind: 'para',
        text: 'Reading scripture as a scholar. Textual criticism reconstructs the earliest attainable text from the surviving copies, because every hand-copied text drifts. The discipline\'s evidence base is enormous — nearly six thousand Greek manuscripts of the New Testament, plus ancient translations — and its reasoning is public: prefer the older witness, prefer the reading that best explains how the others arose (the harder reading is often the survivor of copying, not the smoother one), and classify scribal errors by their mechanics. The Dead Sea Scrolls, found from 1947 near Qumran, pushed the Hebrew textual evidence a thousand years earlier than the oldest complete manuscript (the Leningrad Codex of 1008 CE) and showed that the ancient texts had been remarkably — though not perfectly — stable. Scholars print uncertain passages in brackets rather than hiding the doubt: the bracket is the discipline\'s signature of honesty.',
      },
      {
        kind: 'example', title: 'Worked Example', steps: [
          'Identify what is asked: how does a textual critic decide between rival readings of a passage — in this case the ending of the Gospel of Mark, where ancient witnesses disagree?',
          'Gather the evidence: the two oldest complete codices, Sinaiticus and Vaticanus (both fourth century), end at Mark 16:8; most later manuscripts continue with verses 16:9-20, the resurrection appearances.',
          'Classify the variant: the longer ending\'s style and vocabulary differ from the rest of the gospel, and several early church writers show awareness that copies circulated in both forms — evidence that the longer text entered circulation later.',
          'Apply the canons of criticism: the older witnesses outrank the numerous but late ones; a reading that explains the rivals (a scribe or community supplying a conclusion) is more likely its origin than the reverse.',
          'State the result: critical editions print verses 9-20, but in brackets with a note — the text is transmitted, the doubt is disclosed. The same machinery (witnesses, error classes, published reasoning) underwrites every scholarly edition of every ancient text.',
        ] },
        { kind: 'heading', text: 'Applications in the Real World' },
        { kind: 'list', items: [
          'Law and public policy: constitutional courts routinely interpret scripture-adjacent questions — personal-law codes, oaths, religious education — and the arguments turn on exactly this lesson\'s machinery of canon, translation and authority.',
          'Digital humanities: complete manuscripts (Codex Sinaiticus, the Dead Sea Scrolls) are now online, so the evidence once guarded by a handful of libraries is public — and so is the argument.',
          'Literature: Milton, Tagore, Toni Morrison and countless others assume scriptural literacy; the canons this lesson tracks are also the west\'s and Asia\'s master intertexts.',
          'Software engineering\'s version-control culture — canonical repositories, diffing witnesses, trusted maintainers — is this lesson\'s machinery in modern dress, which is why the concepts transfer so easily.',
          'Interfaith and journalism literacy: reporting on a tradition\'s "what the text actually says" controversy without canon-and-translation awareness reliably produces error.',
        ] },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Do not equate "religion of the book" with religion as book: Islam stresses recitation over inscription, and the Vedas were guarded orally for a millennium with written copies arriving late — textuality has different centres in different traditions. Canon did not drop from the sky at one council; it accreted through use, and lists varied for centuries. Fundamentalist literalism is a modern movement, not the default of tradition: Augustine read Genesis non-literally in the fifth century, and peshat-versus-derash debates are old news. And do not mistake translation for transparency — every version you read is already an interpretation, which is why scholars compare them.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        { kind: 'terms', items: [
          { term: 'canon', def: 'The closed list of writings a community treats as normative scripture.' },
          { term: 'Septuagint', def: 'The Greek translation of Hebrew scripture made in Alexandria from the third century BCE; the early church\'s usual Bible.' },
          { term: 'midrash', def: 'Rabbinic interpretation that probes the text\'s oddities to draw out legal and homiletic meaning.' },
          { term: 'tafsir', def: 'The Islamic discipline of Quranic exegesis, disciplined by hadith and language science.' },
          { term: 'hadith', def: 'Reports of the Prophet\'s words and deeds, graded by the reliability of their transmission chains.' },
          { term: 'sola scriptura', def: 'The Reformation principle that scripture alone carries final religious authority.' },
          { term: 'documentary hypothesis', def: 'The source-critical theory that the Pentateuch weaves parallel narrative strands with distinct styles and concerns.' },
          { term: 'textual criticism', def: 'The reconstruction of the earliest attainable text from surviving copies by classifying variants and scribal errors.' },
        ] },
        { kind: 'heading', text: 'Check Your Understanding' },
        { kind: 'quiz', items: [
          {
            q: 'The first known list to name exactly the twenty-seven books of the New Testament is…',
            options: ['the Council of Nicaea\'s canon decree', 'Athanasius\' festal letter of 367 CE', 'Jerome\'s Vulgate preface', 'the Muratorian fragment'],
            answer: 1,
            explain: 'Athanasius\' 367 letter lists the twenty-seven; regional councils at Hippo and Carthage ratified the set shortly after. Nicaea discussed doctrine, not a canon list.',
          },
          {
            q: 'In Islamic practice, a translation of the Quran is traditionally regarded as…',
            options: ['a full substitute for the Arabic text', 'a commentary aid, with the Arabic recitation remaining the scripture', 'heretical in all circumstances', 'valid only if authorised by a caliph'],
            answer: 1,
            explain: 'Translations function as tafsir — aids to understanding — while the Arabic recitation itself remains the scripture, which is why memorisation and recitation stay central.',
          },
          {
            q: 'Why do textual critics often prefer the "harder" reading among manuscript variants?',
            options: ['Harder readings are always older', 'Scribes tend to smooth and harmonise, so a difficult reading better explains how the smoother rivals arose', 'Difficulty proves divine origin', 'Harder readings are shorter'],
            answer: 1,
            explain: 'Copying drifts toward the easy and familiar, so the awkward reading is less likely to have been invented — the canons of criticism reason from how scribes actually err.',
          },
          {
            q: 'Sikhism treats its scripture as the final guru, an authority move that is best described as…',
            options: ['replacing the text with a living teacher', 'locating permanent interpretive authority in the text itself', 'abolishing all interpretive tradition', 'subordinating the text to the state'],
            answer: 1,
            explain: 'In 1708 the human guru line closed and Guru Granth Sahib was installed as the eternal guru — the community\'s authority question was answered by enthroning the book itself.',
          },
        ] },
      ],
    },
  {
    id: 'edu-curriculum-backward-design',
    title: 'Curriculum: Tyler, Backward Design and the Hidden Syllabus',
    domain: 'Social Sciences',
    field: 'Education',
    branch: 'Teaching & Pedagogy',
    tier: 'core',
    concepts: [
      'Planned, enacted, learned — and hidden',
      'The Tyler rationale: four questions',
      'Backward design: outcomes, evidence, then instruction',
      'Bloom\'s taxonomy as an alignment tool',
      'The hidden and the null curriculum',
      'Standards, outcome-based education and constructive alignment',
    ],
    words: 1707,
    readMins: 9,
    addedOn: '2026-10-29',
    blocks: [
      {
        kind: 'para',
        text: 'Teaching assumes a curriculum, yet the word hides four different things: the document administrators write, the lessons teachers actually deliver, the learning students actually take away, and the norms nobody wrote down at all. This lesson is about designing the first well enough to influence the second and third — and about being honest about the fourth. It belongs beside the pedagogy lesson, which asks which delivery methods have evidence behind them; here the question is upstream of method: what should be learned, in what order, and how would anyone know?',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every syllabus you have ever received, every national framework, every course-outcome statement printed in a handbook is the product of the machinery this lesson unpacks. Knowing it converts you from a consumer of curricula to a critic and designer of them — the difference between complaining that a course is a list of topics and being able to say precisely why: its outcomes are vague, its assessments test recall of the list, and nothing checks that the two connect. These are also the terms in which teachers, accreditation reviews and education ministries actually argue.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Planned, enacted, learned — and hidden. Curriculum scholars distinguish the planned curriculum (the intended outcomes and content), the enacted or taught curriculum (what happens in real classrooms, always shaped by time, materials and teacher beliefs), and the learned curriculum (what students actually carry out, measurable only indirectly). The gaps between them are the central fact of curriculum studies: a plan is a hypothesis about learning, not learning itself. A fifth layer, the assessed curriculum — whatever tests actually reward — often quietly overrides the rest, which is why assessment design is treated below as a design activity in its own right rather than an afterthought.',
      },
      {
        kind: 'para',
        text: 'The Tyler rationale: four questions. Ralph Tyler\'s slim 1949 booklet, Basic Principles of Curriculum and Instruction, organised a century of curriculum talk into four questions that still structure most syllabus documents: What purposes should the school seek? What experiences are likely to attain them? How can these experiences be organised effectively? How can we determine whether the purposes are being attained? Tyler\'s lasting contribution is the insistence that purposes, experiences and evaluation must form one coherent chain — a test that should assess what the purposes named. His shadow is equally real: his framework rewards clear, checkable objectives, and critics argue it narrows education to whatever fits a behavioural sentence. Both lessons — coherence and narrowing — are part of the rationale\'s legacy.',
      },
      {
        kind: 'para',
        text: 'Backward design: outcomes, evidence, then instruction. Grant Wiggins and Jay McTighe\'s Understanding by Design (1998; 2nd ed. 2005) turned Tyler\'s chain into a design procedure run in reverse of habit. Stage one: decide what learners should understand and be able to do — not topics to cover but big ideas and the essential questions that give them meaning. Stage two: decide what evidence would show the understanding — the assessment tasks, before any teaching is planned. Stage three, and only third: plan the instruction. The inversion is the point. Designers ordinarily start from favourite activities or the textbook\'s table of contents and bolt tests on at the end; backward design makes the evidence the organising idea, so every activity earns its place by serving the outcomes the assessment names. Done honestly, this is not teaching to the test — it is authoring the test you would be proud to be taught to.',
      },
      {
        kind: 'para',
        text: 'Bloom\'s taxonomy as an alignment tool. The taxonomy Benjamin Bloom\'s committee published in 1956, revised by Anderson and Krathwohl in 2001, orders cognitive objectives from remembering and understanding through applying and analysing to evaluating and creating. Its curriculum use is prosaic and powerful: verbs. An outcome that says "students will understand photosynthesis" cannot be assessed because "understand" hides the level; rewriting it as "predict the outcome of this biomass experiment and justify the prediction" selects the analyse level, dictates the kind of evidence acceptable, and rules out a pure-recall quiz as adequate. Alignment is the practice of making outcome verb, learning activity and assessment task agree — and misalignment, more than bad teaching, is the most common reason students feel ambushed by exams.',
      },
      {
        kind: 'para',
        text: 'The hidden and the null curriculum. Philip Jackson coined "hidden curriculum" in Life in Classrooms (1968) for what schooling teaches without listing: to wait, to queue, to value grades, to associate learning with being evaluated by a stranger. John Dewey had noted the phenomenon decades earlier as the schools\' collaterally moulded character; sociologists since have tracked its heavier versions — whose names appear in examples, whose histories do not. Lawrence Eisner added the null curriculum (The Educational Imagination, 1979): the intellectual options schools never present at all, which teach by omission that those questions do not matter. Both concepts are diagnostic tools, not villains: every curriculum hides and omits something, so the design question is whether the hidden and null content is chosen or merely accidental.',
      },
      {
        kind: 'para',
        text: 'Standards, outcome-based education and constructive alignment. The late twentieth century rebuilt curriculum on explicit standards: statements of what learners at each level should know and do, from national frameworks to professional accreditation attributes. Outcome-based education (William Spady popularised the term in the 1990s) pushed the logic to its limit — begin with the exit outcomes and work everything backwards — and drew the standard criticisms: standards name content, not pedagogy, and a pile of outcomes is not a course. John Biggs\' constructive alignment (1996) supplied the university-scale synthesis: intended learning outcomes, teaching activities and assessment tasks must all point at the same verb-level, because students study what is assessed. The family resemblance to backward design is exact and deliberate — the same coherence chain, scaled from one unit to a whole degree programme.',
      },
      {
        kind: 'example', title: 'Worked Example', steps: [
          'Identify what is asked: design a three-week unit on photosynthesis by backward design, stating each stage\'s output.',
          'Stage one — desired results: the big idea is that a plant\'s mass is built mostly from air and water, not soil, powered by light; the essential question is "where does a tree\'s weight actually come from?"',
          'Stage two — acceptable evidence: students explain Jan van Helmont\'s seventeenth-century willow experiment (a willow grew to roughly 75 kg in five years while the soil lost only a couple of ounces — which variable did van Helmont miss?), predict the biomass result for a sealed-jar seedling experiment, and justify which interpretation the evidence supports.',
          'Stage three — learning plan: open with the van Helmont puzzle to force the mass-bookkeeping question, run the seedling measurement across the three weeks, and close with students writing the explanation the Stage-two task names.',
          'Check alignment: the essential question, the experiments and the final task all target the same analyse-level verb ("predict and justify") — no activity remains that is not evidence for the outcome.',
        ] },
        { kind: 'heading', text: 'Applications in the Real World' },
        { kind: 'list', items: [
          'Teacher training: lesson-plan templates in most education programmes are Tyler-and-backward-design artefacts — objectives, evidence, activities, in that order.',
          'National and state frameworks: syllabus documents translate public goals into standards; reading one critically means asking which evidence would show each standard met.',
          'Accreditation: engineering and business programmes are audited against graduate-attribute outcomes — constructive alignment at institutional scale.',
          'Online course design: MOOC and course-platform authoring tools encode the same chain (outcome statements, auto-graded evidence, sequenced activities), making design errors highly repeatable unless named.',
          'Textbook and assessment publishing: chapter sequencing and item banks are built backward from claimed outcomes; the coverage-versus-depth trade is a live business decision, not an abstraction.',
        ] },
        {
          kind: 'callout',
          title: 'Common Pitfalls',
          text: 'Backward design is not teaching to the test: the designer authors the evidence stage, and a well-designed assessment demands the understanding itself rather than a proxy. Standards are not pedagogy — a standard says what, not how, and treating it as a lesson plan produces list-driven courses. The hidden curriculum is not always bad but is always present; pretending otherwise does not make it disappear, it just makes it unexamined. Beware the coverage myth: racing through the document\'s list of topics guarantees breadth on paper and depth nowhere — planning time is a budget to spend on the big ideas, not a constraint to apologise for. Finally, do not confuse the curriculum with the textbook\'s table of contents; the book is one enactment of somebody else\'s design, not the design itself.',
          tone: 'warn',
        },
        { kind: 'heading', text: 'Key Terms' },
        { kind: 'terms', items: [
          { term: 'planned curriculum', def: 'The intended outcomes and content as written in documents and frameworks.' },
          { term: 'enacted curriculum', def: 'What is actually taught, shaped by time, materials and teacher decision.' },
          { term: 'Tyler rationale', def: 'The four-question curriculum logic — purposes, experiences, organisation, evaluation — from Tyler\'s 1949 booklet.' },
          { term: 'backward design', def: 'Wiggins and McTighe\'s sequence: outcomes first, assessment evidence second, instruction third.' },
          { term: 'essential question', def: 'An open, recurring question that gives a unit\'s facts meaning and direction.' },
          { term: 'hidden curriculum', def: 'The unwritten norms schooling teaches — Jackson\'s 1968 term.' },
          { term: 'null curriculum', def: 'Eisner\'s term for what schools never present, teaching importance by omission.' },
          { term: 'constructive alignment', def: 'Biggs\' principle that outcomes, activities and assessments must share one verb-level.' },
        ] },
        { kind: 'heading', text: 'Check Your Understanding' },
        { kind: 'quiz', items: [
          {
            q: 'In backward design, assessment is planned…',
            options: ['after the activities, to check they worked', 'before instruction, as the evidence of the stated outcomes', 'by the students themselves', 'only at the end of the course'],
            answer: 1,
            explain: 'Stage two precedes stage three: the evidence that would show the understanding is designed before any activity, so activities must justify themselves against it.',
          },
          {
            q: 'An outcome reading "students will understand photosynthesis" is weak mainly because…',
            options: ['photosynthesis is unimportant', '"understand" hides the cognitive level, so no evidence can settle it', 'students cannot spell it', 'it is too narrow'],
            answer: 1,
            explain: 'Alignment requires a verb that names a level (predict, justify, model); "understand" can be claimed by any quiz and refused by none.',
          },
          {
            q: 'Eisner\'s "null curriculum" refers to…',
            options: ['curricula cancelled for budget reasons', 'the intellectual options never presented, teaching importance by omission', 'empty classroom periods', 'test items worth zero marks'],
            answer: 1,
            explain: 'What a curriculum systematically leaves out teaches students that those questions do not matter — omission is itself a message.',
          },
          {
            q: 'The most accurate statement about the hidden curriculum is that it…',
            options: ['can be eliminated by better planning', 'exists only in authoritarian schools', 'is present in every school, so designers must examine rather than deny it', 'refers to unofficial tutoring'],
            answer: 2,
            explain: 'Jackson\'s point is universality: queueing, grading and evaluation norms teach wherever schooling happens — the design question is whether the lessons are chosen.',
          },
        ] },
      ],
    },
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
]
