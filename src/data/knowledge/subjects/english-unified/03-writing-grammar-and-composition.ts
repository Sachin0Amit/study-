/**
 * Knowledge Universe — English & Comprehension — Chapter 03: Writing, Grammar & Composition
 * 4 lessons · ~6,883 words
 * fields: Academic Writing, Grammar & Mechanics, Professional Writing
 * legacy sources: x16-exam-skills.ts, x21-skills-pass.ts, x26-banking-management-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Academic Writing, Professional Writing, Grammar & Mechanics]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 eng-business-correspondence — Business Correspondence: Formal Letters, Memos, Email and the Précis
 *   03.2 eng-punctuation-mechanics — Punctuation Mechanics: Commas, Semicolons, Apostrophes and Dashes
 *   03.3 eng-argument-essay-writing — The Argument Essay: Thesis, Evidence and Counterargument
 *   03.4 eng-cohesion-lexical-accuracy — Coherence, Cohesion and Lexical Resource: Writing That Reads Smoothly
 */
import type { KnowledgeTopic } from '../../types'

export const englishUnifiedCh03: KnowledgeTopic[] = [
  {
    id: 'eng-business-correspondence',
    title: 'Business Correspondence: Formal Letters, Memos, Email and the Précis',
    domain: 'Languages & World Literature',
    field: 'Professional Writing',
    branch: 'Correspondence & Précis',
    tier: 'core',
    concepts: [
      'Formal letter anatomy: block layout, salutation, close',
      'Register: formal, courteous, concrete',
      'Complaint, enquiry and application letters',
      'Memos, circulars and notices',
      'Email etiquette for institutional contexts',
      'The précis: one-third rule, own words, title',
    ],
    words: 1970,
    readMins: 10,
    addedOn: '2026-10-23',
    blocks: [
      {
        kind: 'para',
        text: 'Correspondence is writing that has to work without you in the room. A letter to a bank, a memo to a department, an email to a customer, a précis for a briefing file — each must carry facts, tone and a requested action to a reader who will skim it, act on it or file it. Examiners test this genre twice: as formats (layout, salutation, close, subject line) and as judgement (register, structure, escalation). This lesson covers the four instruments and the register that governs them all, with banking-desk examples throughout — the single most common institutional setting these papers use. The essay-writing and cohesion lessons own argument and flow; here the unit of work is the one-page document that must produce a response.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Correspondence marks are the most mechanical marks on any writing paper — and the most commonly thrown away. The layout of a formal letter, the "Yours faithfully versus Yours sincerely" rule, the one-subject memo discipline and the one-third précis ratio are all checkable in seconds, yet scripts lose marks every year on exactly these. The same conventions rule professional life: a complaint letter that states facts, evidence and remedy gets resolved; one that vents gets filed. Learn the formats once and both the exam and the actual correspondence desk pay you back.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Formal letter anatomy', def: 'Sender\'s address, date, receiver\'s name/address, subject line, salutation, body, complimentary close, signature block. The body runs purpose → particulars → action requested: what you want, the facts that justify it, and exactly what the reader should do, with dates and account or reference numbers concrete.' },
          { term: 'Faithfully vs sincerely', def: 'Address the reader by name ("Dear Ms Rao") and close "Yours sincerely"; address the office ("Dear Sir or Madam") and close "Yours faithfully". The close mirrors the salutation — the single most-tested convention in letter formats.' },
          { term: 'Register', def: 'The formality level of vocabulary and grammar. Formal register: no contractions, no slang or idioms, no emotive language, measured modals ("I would be grateful if you could…"), complete sentences, concrete nouns. Courtesy is strategic: firmness about the remedy, politeness about the person.' },
          { term: 'Memo and circular', def: 'Internal one-page instruments. A memo has a header block — To, From, Date, Subject — no salutation, one topic, and an explicit action line with a deadline. A circular broadcasts one announcement to many readers; a notice posts an event with time, place and authority. All three prize brevity and scannability.' },
          { term: 'Email etiquette', def: 'A subject line that names the topic, a greeting and sign-off even in short notes, one topic per email, paragraphs that survive a two-second skim, attachments named and mentioned in the text, cc reserved for people who need to know, reply-all restraint, and no typing in capitals — the written equivalent of shouting.' },
          { term: 'Précis', def: 'A faithful condensation of a passage to roughly one-third of its length, in the précis-writer\'s own words, keeping the argument and dropping examples, repetition and digression, written in the third person, with a title. The test is whether a reader of the précis alone would leave with the passage\'s claims and none of its padding.' },
        ],
      },
      {
        kind: 'para',
        text: 'The formal letter is the genre\'s backbone, and its layout is a convention you simply own. Top left: the sender\'s address (no name above your own address in the block style), then the date; below, the receiver\'s name, designation and address; then a subject line that names the business in a phrase — "Request for stop-payment on cheque no. 441207" — because the subject line is how the letter gets routed and retrieved. The salutation mirrors your knowledge of the reader: "Dear Sir or Madam" when unknown (closing "Yours faithfully"), "Dear Ms Rao" when named (closing "Yours sincerely"). The first paragraph states the purpose in one sentence; the middle paragraphs carry the particulars — dates, amounts, reference numbers, what happened, what you have already tried; the final paragraph states the action sought and a courteous deadline. Sign, then print your name below. Every part exists because someone downstream files, routes or acts on it.',
      },
      {
        kind: 'para',
        text: 'Three letter types cover most exam and desk situations. The enquiry letter asks: it frames the question precisely, states what you already know, and closes with the specific information requested and the response channel. The complaint letter escalates politely: facts first (date, time, place, transaction reference), then the problem\'s effect, then the remedy sought — refund, correction, replacement — then a deadline and the escalation path if it passes ("I shall refer the matter to the Banking Ombudsman under the RBI Integrated Ombudsman Scheme if unresolved within thirty days"). Never insult; the reader is rarely the person who caused the problem. The application letter sells: the position and its source in the first line, the fit in the second paragraph (two or three proof-points drawn from the advertisement\'s own language), availability, and a request for interview. All three share the register rules: formal, concrete, courteous — and all three end with an unmistakable ask.',
      },
      {
        kind: 'para',
        text: 'Internal instruments trade ceremony for speed. The memo strips to a header — To, From, Date, Subject — and a body that does one job: announce, explain, request. Its discipline is the one-topic rule and the action line ("Please send the Q2 figures to me by Thursday, 5 p.m."); anything that needs discussion is a meeting, not a memo. Circulars broadcast one announcement to many — an office holiday, a policy change — written once for simultaneous reading, with dates and authority named. Notices post events for a public board: heading, date, body with the five Ws, signature of the authority. Email then carries all of it at internet speed, which is precisely why its conventions matter more, not less: the subject line is the envelope, the greeting and sign-off are the clothes, the two-second-skim paragraph structure is the body language, and reply-all restraint is the office citizenship test. An email that says what its attachment is, asks exactly one question, and names its deadline replaces three phone calls.',
      },
      {
        kind: 'para',
        text: 'The précis is the odd instrument of the family — an act of reading as much as writing — and it has its own discipline. Read the passage thrice: once for sense, once to mark the argument\'s skeleton (thesis, moves, conclusion), once to choose your own words. Compress to about one-third — the ratio is tested — by deleting examples, illustrations, repetition, rhetorical questions and digressions, and by folding lists into categories. Keep the third person and your own words: lifted phrases read as failure to understand. Preserve proportion (the passage spends most words on its main claim; so should you) and add a title — a phrase that names the argument. The mark scheme in banking and administrative papers scores content (all main points, nothing invented), organisation (logical, linked), language (accurate, own words) and the one-third discipline; a précis that is merely a copy with words crossed out scores none of them.',
      },
      {
        kind: 'example',
        title: 'Worked Example — A Complaint Letter That Gets a Refund',
        steps: [
          'Collect the facts before writing: ATM ID, branch, date and time (14 October 2026, 11:42 a.m.), amount debited (2,000) without cash dispensed, transaction reference number from the slip or alert, account number.',
          'Lay out the letter: sender address, date, the Branch Manager\'s designation and branch address, subject line "Complaint regarding ATM debit without cash dispensation — A/c no. 0123…".',
          'Open with purpose: "I wish to report a failed ATM transaction in which my account was debited but no cash was dispensed."',
          'Paragraph of particulars: the machine, the time, the amount, the reference number, the fact that the card was returned and no alert credit followed — the evidence trail.',
          'State the remedy and the clock: "I request reversal of the erroneous debit within the prescribed timeline; failing which I shall escalate to the Banking Ombudsman under the Reserve Bank\'s Integrated Ombudsman Scheme, 2021." Close "Yours faithfully" — the salutation was "Dear Sir or Madam".',
          'Précis check on any draft: facts kept, adjectives deleted, third person if summarising the episode for a file, title "Failed ATM Transaction and Refund Request" — one-third length.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Your letter begins "Dear Sir or Madam". The correct complimentary close is…',
          options: ['Yours sincerely', 'Yours faithfully', 'Best regards', 'Thanking you'],
          answer: 1,
          explain: 'Unnamed recipient ("Dear Sir or Madam") pairs with "Yours faithfully"; a named recipient ("Dear Ms Rao") pairs with "Yours sincerely".',
        },
        {
          q: 'What does the subject line of a business letter most directly enable?',
          options: ['polite tone', 'routing and retrieval of the letter', 'proof of posting', 'the writer\'s credibility'],
          answer: 1,
          explain: 'The subject line names the business in a phrase so that the letter can be routed to the right desk and retrieved later — which is why it should carry reference numbers.',
        },
        {
          q: 'The correct one-topic discipline for a memo requires all of the following EXCEPT…',
          options: ['a To/From/Date/Subject header', 'a salutation like "Dear Sir"', 'an explicit action line with a deadline', 'a single subject'],
          answer: 1,
          explain: 'Memos drop the salutation — the header block replaces it; they keep one topic and end in a clear action line.',
        },
        {
          q: 'A précis of a 300-word passage should be roughly…',
          options: ['150 words with a title', '100 words, in the writer\'s own words, with a title', '75 words, in the original\'s best phrases', 'the full argument re-copied with examples removed'],
          answer: 1,
          explain: 'The tested ratio is one-third — 100 words for 300 — in the writer\'s own words and in the third person, with a title, keeping claims and dropping examples and digressions.',
        },
        {
          q: 'In a complaint letter about a failed ATM transaction, the escalation line citing the RBI Integrated Ombudsman Scheme serves to…',
          options: ['insult the branch into acting', 'state the consequence of missing the remedy deadline', 'prove the writer\'s legal training', 'replace the need for evidence'],
          answer: 1,
          explain: 'Escalation is stated as a consequence — polite, factual, dated — not as a threat; the evidence trail (reference numbers, dates) still does the real work.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Pairing "Dear Sir or Madam" with "Yours sincerely" — the close mirrors the salutation, and this is the most-tested convention on the paper. Writing complaints in anger: emotive language converts a fixable error into a defensive reader; facts, references and a deadline do the work. Letting memos grow salutations and second topics — the header replaces the salutation and the one-topic rule is the point. Treating email as casual by default — institutional email keeps greeting, sign-off, subject discipline and reply-all restraint. Breaking the précis ratio (a "summary" of 250 words from 300), lifting the original\'s phrases, inventing claims the passage never made, or forgetting the title — each is a named mark-scheme deduction. And burying the ask: every letter, memo and email must end with an unmistakable action for a named reader by a stated time.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: none — though the punctuation-mechanics lesson polishes the surface of everything written here. Follow with the argument-essay lesson for the long-form descriptive paper and the cohesion lesson for paragraph-level flow. Primary reading: Business Communication for Success (Open Textbook Library / LibreTexts — the communication process, channel choice, and professional letter/memo conventions read directly); RBI Integrated Ombudsman Scheme 2021 complaint-route pages (cms.rbi.org.in) for the banking escalation path used in the worked example; NCERT/CBSE functional-writing conventions for the block-layout letter and précis mark schemes used in Indian descriptive papers.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Letter anatomy: sender address, date, receiver, subject line (routes the letter), salutation, purpose → particulars → action, close, signature.',
        'Close mirrors salutation: named reader → "Yours sincerely"; office → "Yours faithfully".',
        'Register: no contractions, no slang, no emotives; concrete nouns and reference numbers; firm on remedy, courteous on people.',
        'Three letters: enquiry (asks precisely), complaint (facts → effect → remedy → deadline → escalation), application (position-source → fit → availability).',
        'Internal instruments: memo (To/From/Date/Subject, one topic, action line), circular (one announcement to many), notice (five Ws, authority).',
        'Email: subject names the topic, greeting/sign-off always, one question, attachment named, reply-all restraint. Précis: one-third, own words, third person, titled, proportion kept.',
      ] },
    ],
  },
  {
    id: 'eng-punctuation-mechanics',
    title: 'Punctuation Mechanics: Commas, Semicolons, Apostrophes and Dashes',
    domain: 'Languages & World Literature',
    field: 'Grammar & Mechanics',
    branch: 'Punctuation',
    tier: 'core',
    concepts: [
      'Commas: lists, clauses, appositives',
      'Comma splices and how to fix them',
      'Semicolons join independent clauses',
      'Colons announce what follows',
      'Apostrophes: possession versus contraction',
      'Its versus it\u2019s, whose versus who\u2019s',
      'Dashes for interruption, parentheses for aside',
      'Unnecessary punctuation as an error class',
    ],
    words: 1326,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Punctuation is not decoration; it is the traffic system of a sentence. Every mark either separates things that must not blur together — items in a list, clauses with different jobs — or signals the relationship between them: cause, aside, possession, omission. Standardised English tests treat the marks as a closed set of rules with predictable distractors, which makes mechanics one of the highest-yield skills on the paper: a handful of distinctions, tested over and over, with no ambiguity once the underlying grammar is visible. This lesson builds that grammar-first view: find the clause boundary or the possessor first, then choose the mark.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Mechanics questions are the most mechanical points on an English or writing section — literally. The tested rules are finite, the wrong options recur (the comma splice, the possessive its, the colon after an incomplete clause), and every rule here transfers to every essay you will ever write. There is no other topic with this ratio of learnable rules to marks available.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Independent clause', def: 'A group of words with a subject and a verb that can stand alone as a sentence. Every comma and semicolon rule is stated against this unit: what separates two of them, what cannot, and what a comma is allowed to do inside one.' },
          { term: 'Comma splice', def: 'Two independent clauses joined by only a comma — "The results were clear, the study ended early." Fix by period, semicolon, or a coordinating conjunction after the comma. Tests present this constantly, dressed as style; it is a grammar error with three legal repairs.' },
          { term: 'Semicolon', def: 'Joins two closely related independent clauses without a conjunction, or separates complex list items that already contain commas. Neither side may be a fragment: if what follows the semicolon cannot stand alone, the mark is wrong.' },
          { term: 'Colon', def: 'Announces: a list, an explanation, a quotation — but only after a complete independent clause. "The trial had one flaw: no control group." Compare the wrong "The flaw was: no control group", where the clause before the colon is incomplete.' },
          { term: 'Apostrophe', def: 'Marks possession (the study\u2019s findings) or omission in a contraction (doesn\u2019t). Never marks a simple plural. Pronouns have their own possessive forms without apostrophes — its, whose, their — so "the team lost it\u2019s lead" doubles an error: wrong word and wrong logic.' },
          { term: 'Parenthesis and dash', def: 'Parentheses tuck away an aside the sentence survives without; dashes punch it into view and can also set off an abrupt turn. On tests the choice between dash pair and parenthesis pair usually turns on emphasis, but both marks must come in pairs when both sides are removable.' },
          { term: 'Unnecessary punctuation', def: 'A tested error class of its own: a comma between subject and verb, between verb and object, or after a coordinating conjunction joining clauses. The mark is wrong because no grammatical boundary exists at that point — no rule licenses inserting one.' },
        ],
      },
      {
        kind: 'para',
        text: 'The comma rules compress into four questions. Is it a list? Use commas between items, and note that a comma before the final and is the serial comma — a house-style choice, not a tested error either way, unless the list items themselves would blur. Is it two independent clauses? Then a comma alone is illegal; it needs a conjunction or must yield to a semicolon. Does the clause open the sentence? An introductory phrase or subordinate clause takes a comma before the main clause begins. Is it extra information? An appositive or non-essential modifier takes a comma pair — and the pair is the test: if the sentence loses nothing when the between-commas material is lifted out, the commas belong there; if lifting it breaks the meaning, the clause is essential and takes no commas.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'Four sentences, four decisions',
        steps: [
          '"The experiment failed the sample was contaminated." Two independent clauses, no mark: a fused sentence. Legal repairs — semicolon ("failed; the sample"), comma plus conjunction ("failed, because the sample..." making the second part subordinate), or a period. A bare comma remains illegal.',
          '"The study which took three years was published." The modifier is non-essential — the study is identified without it — so it needs a comma pair: "The study, which took three years, was published." No commas would only be right if the clause were essential: "Any study which takes three years deserves funding."',
          '"The lab published its findings; it\u2019s clear the samples were its\u2019." First its: correct possessive pronoun. Second it\u2019s: contraction of it is, correct in place. Third: wrong — possessive pronouns never take apostrophes.',
          '"The report had one recommendation: retrain every analyst." Colon legal — a complete clause precedes it. Compare "The recommendation was: retrain..." — the preceding verb phrase is not an independent clause, so the colon fails.',
        ],
      },
      {
        kind: 'para',
        text: 'Test strategy leans on one habit: locate the grammatical joints before reading the options. Find the subjects and verbs; mark the clause boundaries; decide whether a modifier is essential. With the joints mapped, most mechanics questions collapse — three of four options violate a rule you can name, and the correct answer follows from the boundary, not from ear. Read-aloud checks catch rhythm but not rules: tests deliberately include options that sound smooth and violate a boundary, and options that sound stiff and are correct.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which sentence is punctuated correctly?',
            options: [
              'The trial ended early, the data was inconclusive.',
              'The trial ended early; the data was inconclusive.',
              'The trial ended early; and the data was inconclusive.',
              'The trial, ended early; the data was inconclusive.',
            ],
            answer: 1,
            explain: 'Two independent clauses: the semicolon joins them legally. Option 1 is a comma splice; option 3 puts a conjunction after a semicolon with no second list item to justify it; option 4 splits a subject from its verb.',
          },
          {
            q: 'Where does a colon belong: "The design had one weakness ( ) no control group."?',
            options: [
              'after "design", replacing "had"',
              'between "weakness" and "no control group"',
              'after "one" only',
              'nowhere — this sentence cannot take a colon',
            ],
            answer: 1,
            explain: 'The clause "The design had one weakness" is complete, so a colon can announce the appositive explanation. No other position follows a complete clause.',
          },
          {
            q: 'Which pair uses apostrophes correctly?',
            options: [
              "The committee published it's report; who's responsible is unclear.",
              "The committee published its report; who's responsible is unclear.",
              "The committee published its' report; whose responsible is unclear.",
              "The committee published it's report; whose responsible is unclear.",
            ],
            answer: 1,
            explain: 'Its is the possessive pronoun; who\u2019s is the contraction of who is. The possessive forms its and whose never take apostrophes.',
          },
          {
            q: '"My supervisor who studied in Nairobi reviewed the draft." The error is:',
            options: [
              'a missing pair of commas, if the clause is non-essential',
              'a missing semicolon before "reviewed"',
              'a missing colon after "supervisor"',
              'no error — the sentence is correct as written',
            ],
            answer: 0,
            explain: 'If the writer has only one supervisor, the clause is extra information and needs a comma pair. With several supervisors, the clause identifies which one and takes no commas — the essential/non-essential test decides.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The recurring traps: trusting rhythm over clause structure — splice-heavy prose sounds natural in speech; apostrophising every plural ending in s; using a colon after an incomplete clause; and deleting only one dash or parenthesis of a pair, leaving an unbalanced aside. Also beware the "correct but unnecessary" distractor: a mark can be wrong not because it breaks a rule but because no boundary exists for it to mark.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: any reading-strategy lesson — mechanics questions reward the same slow, structural reading.',
          'Next: Paired Passages and Authorial Choices — the reading half of the same sections.',
          'Revision cue: take any paragraph and name the job of every mark; the ones you cannot justify are your gap list.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Find the clause boundaries first; the marks follow from the grammar.',
          'Comma splices are illegal — repair with semicolon, conjunction or period.',
          'Colons need a complete clause before them; semicolons need one on each side.',
          'Apostrophes mark possession or omission, never plain plurals; its and whose are already possessive.',
          'Unnecessary punctuation is an error class: no boundary, no mark.',
        ],
      },
    ],
  },
  {
    id: 'eng-argument-essay-writing',
    title: 'The Argument Essay: Thesis, Evidence and Counterargument',
    domain: 'Languages & World Literature',
    field: 'Academic Writing',
    branch: 'Exam Essays',
    tier: 'core',
    concepts: [
      'Thesis: the one-sentence claim everything serves',
      'Essay architecture: stance, roadmap, body, verdict',
      'Evidence: examples, data and reasoning from first principles',
      'Counterargument and rebuttal: the strongest-opposition move',
      'Paragraph roles and the point-proof-comment cycle',
      'Rubric self-scoring: task response and development',
      'Timed drafting: the plan-first protocol',
      'Short-form argument: the discussion-post answer',
    ],
    words: 1889,
    readMins: 9,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Forty minutes, at least 250 words, and a question designed so that no answer is ever simply right: that is IELTS Writing Task 2, and it is the purest form of a family of exam tasks that also includes the TOEFL Academic Discussion post (about ten minutes and one hundred words, answering a professor\'s question while reacting to classmates) and the GRE\'s thirty-minute Analyze an Issue essay — the task ETS kept when it retired "Analyze an Argument" in September 2023. Every variant rewards the same underlying competence: take a position, defend it with organized evidence, acknowledge the strongest objection, and land the reader somewhere deliberate. This lesson builds that competence as a repeatable procedure — how to convert a prompt into a thesis in ninety seconds, how to architect the essay before writing it, how paragraphs carry arguments, and how to self-score against the official rubrics the examiners use.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The argument essay is the highest-leverage single task on these exams: one IELTS Task 2 essay is worth twice the marks of Task 1, the TOEFL discussion post is a fifth of the entire writing score, and the GRE essay is a standalone section reported to admissions committees. Beyond exams, the same move set — claim, support, concede, rebut — is what law-school memos, funding applications and engineering design justifications are made of. Writing under a clock merely removes the illusion that thinking and drafting can be separated.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Thesis', def: 'One sentence stating your actual position on the prompt — specific enough that a reasonable person could disagree with it. "Education is important" is not a thesis; "Free university tuition helps the economy overall, but only when places are limited by merit rather than wealth" is.' },
          { term: 'Concession', def: 'An explicit admission that the opposing side has a real point. Conceding a minor point costs nothing and buys credibility for the rebuttal that follows.' },
          { term: 'Rebuttal', def: 'The move that explains why your position survives the concession — usually by weighing: the opposing point is real but smaller, rarer, or addressable.' },
          { term: 'Roadmap', def: 'A sentence or clause signalling the essay\'s plan — "I will argue X for two reasons, before addressing the strongest objection" — which examiners reward under Coherence and Cohesion.' },
        ],
      },
      {
        kind: 'para',
        text: 'Everything begins with the ninety-second prompt conversion. Exam prompts almost always contain two or three contestable terms — "free", "merit", "helps" — and a question type that tells you the shape of the answer. "To what extent do you agree" wants a calibrated stance, not a yes/no. "Discuss both views and give your own opinion" is legally obliged by its own wording to cover both sides before stating yours. The professional habit is to underline the two or three load-bearing words, decide your position on them, and write the thesis as a single sentence that answers the exact question asked. Writers who skip this step commonly produce essays that are fluent and off-prompt — the fastest route to a Task Response penalty in the IELTS band descriptors, which explicitly reward "addresses all parts of the task" and penalize positions that drift from the question.',
      },
      {
        kind: 'para',
        text: 'Architecture comes next, and the counterintuitive rule is that the thinking happens before the prose. A four-paragraph default handles nearly every prompt: an introduction that rephrases the question and lands the thesis; body paragraph one carrying your strongest reason with its evidence; body paragraph two carrying either the second reason or the counterargument-plus-rebuttal, depending on which the prompt demands; and a conclusion that restates the position in fresh words and states what follows from it. For "discuss both views" prompts the middle expands to two paragraphs — one per view — before the verdict paragraph gives your own opinion. Planning time is not lost time: five minutes spent listing the thesis, the two body-paragraph topics and one concrete example each routinely saves ten minutes of mid-essay stalling, because the writer never has to decide what comes next while simultaneously managing grammar.',
      },
      {
        kind: 'para',
        text: 'Within each body paragraph, the point-proof-comment cycle does the carrying. The point is the paragraph\'s topic sentence — a claim, in your words. The proof is the evidence: a concrete example, a statistic you actually remember, or reasoning from a principle the reader already accepts. The comment is the sentence that explains how the proof supports the point — the step examiners call "development" and novice writers skip, assuming the example speaks for itself. It never does. "For instance, students in Germany pay almost no tuition" is not an argument; "For instance, students in Germany pay almost no tuition, yet German universities maintain international rankings — evidence that removing fees does not by itself degrade quality" is. The comment sentence is where the writer\'s thinking becomes visible, and it is the single most reliable marker distinguishing band-7-plus IELTS essays from band-6 work.',
      },
      {
        kind: 'para',
        text: 'Evidence under exam conditions deserves honest treatment: you will not remember true statistics, and examiners do not fact-check specifics — but invented precision reads as fragile. The robust forms are generic-but-real examples ("public universities in several European countries", "studies of childhood vaccination programmes"), reasoning from shared principles (incentives, fairness, long-term versus short-term effects), and hypotheticals clearly flagged as such ("consider a student from a low-income district..."). What weakens an essay is stacking three thin examples instead of developing one, or citing numbers so specific they invite skepticism. One example explored to its consequences beats three listed and abandoned — depth is what the "extended and supported" language of the band descriptors is scoring.',
      },
      {
        kind: 'para',
        text: 'The counterargument move deserves its own rehearsal because it separates confident writers from defensive ones. The pattern is four beats: name the objection fairly ("Critics argue that free tuition mainly benefits the middle class, who would attend university anyway"); concede its truth ("This is partly fair — subsidy does flow to families who could pay"); rebut by weighing ("but the alternative — means-tested fees — creates its own disincentives and administrative cost, and the fair-access gains outweigh the leak"); and tie back to the thesis. Note what the pattern avoids: straw-manning the opposition, conceding everything, or "rebutting" by merely repeating your earlier paragraph. Rebuttals weigh, they do not shout. Practised once per practice essay, the move becomes available automatically in the exam hall — and it directly feeds the GRE issue rubric, whose top scores go to essays that "address possible objections" as a matter of course.',
      },
      {
        kind: 'para',
        text: 'Timing and self-scoring close the loop. A workable clock for IELTS Task 2 is five minutes planning, thirty drafting, five editing — with the editing pass spent on thesis visibility, paragraph openings and verb-tense slips rather than rewording half the essay. For the TOEFL discussion post the whole cycle compresses to ten minutes: ninety seconds reading the professor\'s prompt and one classmate\'s post, a minute deciding a position that adds something new rather than echoing the thread, and the rest drafting roughly a hundred words that state a stance, give one reason with brief support, and respond explicitly to the classmate you quoted. Self-scoring then uses the real criteria: IELTS publishes its four band descriptors (Task Response, Coherence and Cohesion, Lexical Resource, Grammatical Range and Accuracy — the middle two get their own lessons in this field), the GRE issue rubric rewards quality of reasoning over position taken, and the TOEFL writing rubric scores relevant content and elaboration. Grading your own practice essays against the published descriptors, brutally, is the fastest known way to move a band.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Prompt to Outline in Five Minutes',
        steps: [
          'Prompt: "Some people believe university education should be free for everyone. Others think students should pay, because personal benefit justifies personal cost. Discuss both views and give your own opinion."',
          'Contestable terms underlined: "free", "everyone", "personal benefit". Question type: discuss-both-views, so both sides must get a full paragraph before my verdict.',
          'Thesis drafted: "Universities should be publicly funded at the point of use, because the benefits spill well beyond the individual graduate — but means-tested contribution after graduation is a defensible compromise."',
          'Outline: intro with thesis; body 1 — the free case (access, graduate-tax effect, comparisons with public schooling); body 2 — the paying case (personal return, capacity funding); body 3 — rebuttal weighing both (graduate-contribution schemes as synthesis); conclusion restating the calibrated position.',
          'Clock: 5 minutes planning produced all five paragraph topics and one example each (German tuition, UK loan system, graduate taxes) — drafting now has no decisions left to make.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'The fastest route to a low Task Response score is an essay that is…',
          options: ['under 250 words', 'fluent and well-written but not answering the question asked', 'written in simple sentences', 'lacking examples'],
          answer: 1,
          explain: 'The band descriptors reward essays that address all parts of the task; drifting from the prompt fails it regardless of prose quality.',
        },
        {
          q: 'The "comment" in the point-proof-comment cycle exists to…',
          options: ['add another example', 'show how the evidence supports the claim — the development examiners score', 'introduce the counterargument', 'restate the thesis'],
          answer: 1,
          explain: 'Evidence never speaks for itself; the explaining sentence is where development becomes visible.',
        },
        {
          q: 'A strong rebuttal characteristically…',
          options: ['denies the objection has any merit', 'concedes the point fully and moves on', 'weighs the objection against your case and shows it is smaller, rarer or addressable', 'repeats your first body paragraph'],
          answer: 2,
          explain: 'Rebuttals weigh rather than deny — fair concession plus proportion is what earns top reasoning marks.',
        },
        {
          q: 'For the TOEFL Academic Discussion post, the highest-value opening move is…',
          options: ['summarizing the professor\'s lecture at length', 'taking a clear position that adds something new to the thread, then supporting it', 'agreeing with the most detailed classmate', 'listing three unrelated reasons'],
          answer: 1,
          explain: 'The rubric rewards relevant, elaborated contribution to the discussion — echo posts score lower than additive ones.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Writing before planning, which guarantees mid-essay stalling and structural drift. Answering the question you wish had been asked instead of the one printed. Listing three thin examples instead of developing one. Straw-manning the opposing view — examiners read fairness as maturity. Saving the opinion for the conclusion in a prompt that demands it throughout ("give your own opinion" means the essay is yours from the first paragraph). And treating the word count as a floor to pad to rather than a scope to fill with developed ideas — padding shows.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the Library\'s critical-reasoning lesson — analysing arguments is the mirror image of writing them, and its premise-conclusion anatomy makes your own essays sturdier. Follow-ons: the cohesion-and-lexical-resource lesson for the sentence-level craft this lesson assumes, the skimming-and-scanning lesson for the reading half of these exams, and the long-turn speaking lesson for the same argument skills performed aloud.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Convert the prompt in ninety seconds: underline contestable terms, match the question type, draft a one-sentence thesis that answers exactly what is asked.',
        'Plan five minutes before drafting: thesis, body-paragraph topics, one concrete example per paragraph — no decisions left for mid-essay.',
        'Default architecture: introduction with thesis, two or three body paragraphs, conclusion in fresh words; "discuss both views" adds a paragraph per view.',
        'Run the point-proof-comment cycle in every body paragraph; the comment sentence is scored development.',
        'Prefer one developed example to three abandoned ones; keep evidence generic-but-real and flag hypotheticals.',
        'Rehearse the four-beat counterargument: name fairly, concede partly, rebut by weighing, tie back to thesis.',
        'Use a fixed clock (5-30-5 for IELTS Task 2; roughly 1.5-8-0.5 for the TOEFL post) and self-score against the published band descriptors.',
      ] },
    ],
  },
  {
    id: 'eng-cohesion-lexical-accuracy',
    title: 'Coherence, Cohesion and Lexical Resource: Writing That Reads Smoothly',
    domain: 'Languages & World Literature',
    field: 'Academic Writing',
    branch: 'Style and Editing',
    tier: 'core',
    concepts: [
      'Coherence: the logic a reader can follow',
      'Cohesion: the words that stitch sentences together',
      'Topic sentences and the given-new contract',
      'Reference chains, substitution and ellipsis',
      'Conjunctions that signal the logical move',
      'Lexical resource: range, collocation and paraphrase',
      'Grammatical range and accuracy: variety under control',
      'The three-minute editing pass',
    ],
    words: 1698,
    readMins: 8,
    addedOn: '2026-10-21',
    blocks: [
      {
        kind: 'para',
        text: 'Two of the four IELTS Writing band descriptors are named Coherence and Cohesion and Lexical Resource and Grammatical Range and Accuracy, and the same qualities hide inside every other essay or discussion-post rubric under plainer names — organization, word choice, sentence control. They are also the three qualities most candidates believe they cannot improve in the final weeks, because they feel like talent. They are not: each decomposes into a small set of learnable devices. Coherence is whether the reader can reconstruct your logic; cohesion is the mechanical stitching — pronouns, connectors, repeated key nouns — that lets them; lexical resource is the range and precision of vocabulary; grammatical range and accuracy is the spread of sentence shapes executed without slips. This lesson takes the four apart and rebuilds them as concrete moves with a three-minute editing pass at the end.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'These descriptors together are worth half of the IELTS writing band and roughly half of the TOEFL discussion-post rubric — but their reach is far wider. Every email that gets answered, every report that gets acted on and every essay that earns its marks runs on the same machinery: a reader who never has to ask "what is this paragraph about?" or "what does this sentence connect back to?". The devices here are small, free and transferable to every language you write in.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Coherence', def: 'The invisible quality: information arranged so the reader always knows what is being discussed and why. Coherence is achieved by paragraph planning and logical order, and cohesion merely makes it visible on the surface.' },
          { term: 'Cohesive device', def: 'Any word or pattern that ties one sentence to the next: reference pronouns (this, these, such), substitution (one, do so), ellipsis (deliberate omission), conjunctions (however, therefore) and lexical chains (repeating or varying key nouns).' },
          { term: 'Given-new contract', def: 'The sentence-level rhythm of fluent prose: begin with information the reader already holds (the "given"), end with the new point. New information then becomes the given of the next sentence — prose that obeys this flows without effort.' },
          { term: 'Collocation', def: 'Words that native usage pairs: "heavy rain" not "strong rain", "reach a decision" not "arrive a decision". Lexical resource scores reward collocations precisely because they are the fingerprint of real exposure to a language.' },
        ],
      },
      {
        kind: 'para',
        text: 'Start with the unit that carries both descriptors at once: the paragraph. A competent exam paragraph opens with a topic sentence that announces the paragraph\'s claim in plain words, develops it through two to four sentences of support, and closes either by drawing the implication or handing to the next topic. The topic sentence is not decoration — it is the reader\'s handle on everything beneath it. Underneath, the given-new contract governs sentence order: "Vocational training has one decisive advantage. That advantage is speed: a plumbing certificate takes two years, a physics degree six." The second sentence opens with "that advantage" — the given — and spends the rest of the sentence delivering the new point. Compare the disorienting alternative: "Speed is one decisive advantage of vocational training, since a plumbing certificate takes two years and a physics degree six." Same words, wrong order; the reader must jump backward to find what "speed" is doing. Essay writers who obey given-new get coherence credited without ever using a fancy connector.',
      },
      {
        kind: 'para',
        text: 'Cohesion then supplies the visible thread, and its devices sort into a short taxonomy worth memorizing. Reference: pronouns and demonstratives point back — "these costs", "such a policy", "this" standing for a whole preceding sentence. Substitution and ellipsis: "more people cycle than do so" and "some cities invest; others do not" — the omitted verb is still heard. Conjunctions: the logical-signalling layer, best learned as a signal-to-meaning table — "however, nevertheless, on the other hand" announce contrast; "therefore, consequently, as a result" announce consequence; "for instance, specifically" announce support; "admittedly, granted" announce concession; "moreover, in addition" announce accumulation. The scorer is watching whether the connector matches the actual logical move: a "furthermore" pasted onto a contrast reads as a mechanical chain, which is exactly what the band descriptors mean by cohesion that is "used mechanically". The final device, lexical chaining, is the most underestimated: key nouns return in varied dress — "tuition fees ... the policy ... free education" — keeping the topic visible without robotic repetition.',
      },
      {
        kind: 'para',
        text: 'Lexical resource is scored on three axes: range (enough different words to avoid strain), precision (the right word, including collocations) and paraphrase (restating prompt language in your own words). The paraphrase axis matters most immediately, because the first sentence of any exam essay must rephrase the question — copying it verbatim is penalized as memorized language. Practical technique: build three-word variation ladders for the prompt\'s key nouns before drafting ("students ... learners ... graduates"; "free tuition ... publicly funded places ... removing fees"). Precision grows from collocation study, not from exotic vocabulary: examiners consistently reward accurate ordinary words ("implement a policy", "pose a risk") over misused impressive ones ("utilize" bolted onto every sentence is a known band-6 signature). A useful discipline is the one-per-paragraph rule: allow yourself exactly one ambitious word choice per paragraph, check it, and keep the rest clean — ambitious vocabulary that misfires costs more than plain vocabulary that never slips.',
      },
      {
        kind: 'para',
        text: 'Grammatical range and accuracy is the most misunderstood descriptor because candidates read "range" as "long sentences". What the descriptors actually reward is a spread of sentence types — simple, compound, complex, and the inverted or participle-opened sentence used sparingly — each executed accurately. One controlled complex sentence per paragraph ("Because graduates earn more over a lifetime, the public investment repays itself") does more for the score than a three-line sentence with a broken clause. Accuracy, meanwhile, is dominated by a short list of high-frequency errors: subject-verb agreement after long subjects, article choice, tense consistency in the past, and comma splices. The professional response is not to write less but to keep an error inventory — the same three or four mistakes in every essay you write — and aim the final editing pass straight at them.',
      },
      {
        kind: 'para',
        text: 'That editing pass is the lesson\'s payoff move, and it fits in three minutes. Minute one: read only the first sentence of every paragraph — do they announce the argument? Is the thesis still visible? Minute two: scan for your personal error inventory (agreement, articles, tense) and comma splices. Minute three: check connectors — no two paragraphs should open with the same linker, and every "however" should genuinely mark a contrast. Deliberately not rewording: wholesale rephrasing in the last minutes manufactures fresh errors faster than it fixes old ones. The pass is targeted, short and unglamorous, and it routinely moves essays half a band because the descriptors for cohesion and accuracy are precisely what it touches.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Rewriting a Choppy Paragraph',
        steps: [
          'Before: "Free tuition is good. Students do not have debt. Students study harder. Government spends money. Government has less money for hospitals." Five sentences, zero connections — the reader assembles the logic alone.',
          'Step 1 — order by logic: benefit to students first, cost to the state second. Step 2 — stitch: reference pronouns, one contrast connector, one consequence connector.',
          'After: "Free tuition removes the debt that shapes graduates\' early careers, and for that reason alone students can choose fields for interest rather than salary. Many also study more effectively without paid work competing for their hours. The state, however, pays directly: every subsidized place is money unavailable for hospitals or schools. The question, therefore, is not whether the cost exists but whether the benefits outrun it."',
          'Tally: reference ("that", "for that reason"), contrast ("however"), consequence ("therefore"), lexical chain ("free tuition ... subsidized place ... the cost"), given-new flow sentence to sentence — every descriptor touched in four sentences.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Coherence and cohesion are related but distinct because…',
          options: ['cohesion is the visible stitching, coherence the underlying logical order', 'coherence means correct grammar', 'cohesion only applies to conclusions', 'they are two names for vocabulary range'],
          answer: 0,
          explain: 'Plan the logic (coherence), then make it visible with reference, conjunctions and lexical chains (cohesion).',
        },
        {
          q: 'The given-new contract says sentences flow best when they…',
          options: ['always begin with the newest idea', 'open with known information and end with the new point', 'avoid all pronouns', 'are uniformly short'],
          answer: 1,
          explain: 'Ending on the new point lets it become the given of the next sentence — the engine of fluent prose.',
        },
        {
          q: 'In lexical resource, examiners consistently reward…',
          options: ['rare vocabulary used imprecisely', 'accurate ordinary collocations and clean paraphrase over misused "impressive" words', 'repeating the prompt verbatim', 'idioms in every paragraph'],
          answer: 1,
          explain: 'Precision and collocation carry the score; misfired ambitious words are the classic band-6 signature.',
        },
        {
          q: 'The three-minute editing pass deliberately does NOT…',
          options: ['check paragraph openings', 'target your personal error inventory', 'verify connectors match the logical move', 'reword the whole essay'],
          answer: 3,
          explain: 'Wholesale rewording manufactures fresh errors; the pass is targeted at structure, known errors and linkers.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Connector stuffing — a "furthermore" before every sentence scores as mechanical cohesion. Pronouns with no clear ancestor ("this causes problems" — what does "this" stand for?). One idea per paragraph abandoned after a single sentence, starving development. Memorized introduction templates copied onto prompts they do not fit. Treating "range" as licence for multi-clause monsters, which multiply agreement errors. And skipping the error inventory: almost every writer repeats the same three mistakes, and not knowing yours makes the editing pass blind.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the argument-essay lesson in this field, which produces the drafts this lesson polishes. Follow-ons: the skimming-and-scanning lesson for the reading side of timed exams, and the critical-reasoning lesson — its paragraph-level anatomy of claims is what your topic sentences are modelling from the writing side.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Every paragraph: plain topic sentence, two to four support sentences, closing implication or handover.',
        'Obey given-new: open with what the reader holds, end with the new point.',
        'Cohesive toolkit: reference, substitution, ellipsis, matching conjunctions, lexical chains.',
        'Learn conjunctions as a signal-to-meaning table and let each one mark a real logical move.',
        'Lexical resource = range, collocation, paraphrase; build variation ladders for prompt nouns; one ambitious word per paragraph.',
        'Grammar range = a spread of sentence types executed cleanly; keep a personal error inventory.',
        'Edit three minutes: paragraph openings, then error inventory, then connectors — never wholesale rewording.',
      ] },
    ],
  },
]
