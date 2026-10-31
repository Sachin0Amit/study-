# StudyVerse Master Syllabus — Full-Library Gap-Fill Authoring Program

> **Status: ACTIVE PROGRAM** — created 2026-11-01 (IST) per the user's mandate.
> **Mandate (verbatim intent):** "Make a syllabus file… write all the syllabus theory… create a book very
> advanced from basic to maximum high level, no limitation, but start from the absolute basics, step-wise,
> climbing the ladder. If any subject is missing in the library, write it. If any chapter is missing in any
> subject, write it. If any lesson is missing in any chapter of any subject, write it. Be as detailed as
> physics, mathematics and chemistry. It should cover all exams' syllabi — chapters, topics, subtopics —
> all things. If a subject is not exam-related, still make it as a subject — vast enough and deep enough to
> teach the person all things related to that subject, whether cracking any exam or otherwise. Writing
> things subject-wise. Create a scheduled task to finish one subject at a time. No word limits."

---

## 0. Program Charter (the rules every run obeys)

1. **One subject at a time.** A subject is finished — truly finished — before the next begins.
   "Finished" means: every chapter in its syllabus tree below exists, every chapter has its lessons,
   every lesson meets the depth bar.
2. **The ladder principle.** Every book starts at absolute zero (no assumed background beyond school
   literacy) and climbs step-wise to maximum level. Foundations → mechanics → applications → mastery.
   No rung skipped; every rung written.
3. **The depth bar (physics/math/chemistry standard).** A finished lesson has:
   - 2,000–3,500 words (new lessons land at 1,300–2,800 and are deepened on later passes);
   - worked examples with full arithmetic ("show every step");
   - named researchers/dates/origins where the discipline has them (Brahmagupta 628 CE, Ramanujan,
     Metropolis 1953…);
   - a figure plate (hand-drawn SVG, labels matching the prose terms verbatim) where a visual helps;
   - a derivation block for every formula-bearing topic;
   - quiz of 6–10 questions WITH explanations, at least half quantitative/method from the lesson's own
     worked example;
   - key-terms table; pitfalls callout; applications.
4. **Zero repetition (hard).** Before writing any lesson: check `coverage/COVERAGE.md`,
   `src/data/knowledge/dedup.ts`, and grep live topics. Carve against neighbours and write the carving
   into the pass-file header + registration comment.
5. **No exam names in lesson-facing text.** The exam↔topic mapping lives in `src/data/exams/` +
   `topic-aliases.ts` only. Lessons speak of "aptitude tests", "screening tests", "admission tests".
6. **Honest word counts.** Every topic id goes into `scripts/count-topic-words-exact.ts` IDS;
   declared == actual (±25). `readMins = round(words/200)`.
7. **Registration checklist for every new book:** `subject-taxonomy.ts` declaration (group, ownFields,
   chapters in pedagogical order) → domain field file in `src/data/knowledge/fields/` → wire in
   `src/data/knowledge/index.ts` KNOWLEDGE_DOMAIN_FILES → (if a new domain string) DOMAIN_SECTIONS
   entry in `knowledge-universe.ts` → word-auditor IDS → pipeline.
8. **Pipeline after any content change (in order):**
   `bun run scripts/serialize-content.ts` → `bun run coverage` → `bun run scripts/build-knowledge-index.ts`
   → `bun run scripts/exam-coverage-audit.ts` (must stay 100% or improve).
9. **Verify before commit:** `bun run lint` clean; `bunx tsc --noEmit` zero errors under `src/`;
   dev :3000 = 200; agent-browser QA on one touched lesson (renders, quiz feedback, console clean,
   mobile 390px no overflow). Then commit + push (transient inline PAT only) + append worklog.
10. **Never:** change existing topic ids, delete prose, run `bun run build`, persist credentials,
    commit tmp-books artifacts.

---

## 1. Program Mechanics

- **Driver:** the scheduled task "StudyVerse Master-Syllabus Subject-by-Subject Loop" (cron, one
  trigger every 2 hours). Each run: fetch → read this file's Progress Ledger → work the current
  subject → pipeline → verify → commit → push → append ledger + worklog.
- **Session work continues the same ledger** — interactive sessions and scheduled runs share one
  append-only progress state, newest entry last.
- **Per-subject working order:** (a) run the gap audit for that subject; (b) write missing CHAPTERS
  first (taxonomy declaration at the right pedagogical position); (c) fill missing lessons of existing
  chapters; (d) deepen thin lessons to the bar; (e) enrich quizzes/figures/derivations; (f) declare
  the subject DONE in the ledger with audit numbers.
- **Research rule:** before authoring a subject, do deep research — the most popular book TOCs
  (publisher sites, Google, GitHub open books), official exam syllabi of every exam that tests it,
  and reference works. Record sources in the pass-file header. (2026-10 research base for the three
  aptitude-family subjects: the 39-exam syllabus corpus — 19 Indian + 20 global — listed in §2.)

---

## 2. The Three New Subjects (syllabus trees — the first cluster of this program)

Synthesized from the 39-exam corpus (Indian: civil-services aptitude paper, graduate/metro/insurance
recruitment, management entrances, law entrances, central-university general test, defence academy
screening, IT-campus tests, employability tests, teaching-eligibility reasoning+DI, insurance AO;
Global: US graduate/campus admissions, UK law, medicine aptitude, thinking-skills assessment, EU
selection office, occupational psychometrics (numerical/inductive/deductive/critical-thinking suites),
abstract-matrices batteries, Chinese civil-service aptitude, Japanese hiring batteries, Korean
college-entrance scholastic, German university aptitude, Canadian public-service, Australian
public-service/defence). Product rule: no exam name ever appears in lesson text.

### 2.1 Quantitative Aptitude — `ku-quantitative-aptitude`
Group: **Aptitude & Test Preparation** · field: `Quantitative Aptitude`
Carves against: the Mathematics Master Library (concept depth — algebra lessons, quadratics,
modulus/log inequalities, mensuration, chart reading, statistics suite), `every-probability-everyday-decisions`,
tournament-fixture arithmetic, and the arithmetic lessons of Everyday Math & Numeracy.
**Carving principle: the Mathematics books teach WHY (concept, proof, derivation); this book teaches
HOW FAST (pattern recognition, short-cuts, formats, timing, traps).**

| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | Number System Foundations (`Arithmetic Foundations`) | 1.1 Place Value & the Number Families · 1.2 Divisibility Rules & Digit Sums · 1.3 Factors, HCF & LCM · 1.4 Remainders & Cyclicity · 1.5 Fractions, Decimals & Comparison Short-Cuts · 1.6 Surds & Indices · 1.7 Squares, Cubes & Estimation (7) |
| 2 | Percentages (`Commercial Arithmetic: Percentages`) | 2.1 Percentage Foundations · 2.2 Change, Successive Change & Reversal · 2.3 Multiplying Factors & the Base Trap (3) |
| 3 | Profit, Loss & Discount (`Commercial Arithmetic: Profit & Loss`) | 3.1 Cost, Selling & Marked Price · 3.2 Discounts & Successive Discounts · 3.3 Dishonest Dealers, Weights & Partnership Basics (3) |
| 4 | Interest & Growth (`Commercial Arithmetic: Interest`) | 4.1 Simple Interest · 4.2 Compound Interest & Effective Rates · 4.3 Instalments & Growth/Decay (3) |
| 5 | Ratio, Proportion, Averages & Mixtures (`Commercial Arithmetic: Ratio & Mixtures`) | 5.1 Ratio & Proportion · 5.2 Averages & Weighted Means · 5.3 Mixtures & Alligation (3) |
| 6 | Time & Work (`Rates: Work`) | 6.1 Work Rates & Combined Labour · 6.2 Pipes & Cisterns · 6.3 Efficiency, Wages & Alternate Days (3) |
| 7 | Time, Speed & Distance (`Rates: Motion`) | 7.1 Speed & Average Speed · 7.2 Trains & Relative Speed · 7.3 Boats & Streams · 7.4 Races & Circular Tracks (4) |
| 8 | Algebra for Tests (`Algebra for Tests`) | 8.1 Words → Equations · 8.2 Linear Systems & Ages · 8.3 Quadratics Fast · 8.4 Inequalities & Ranges · 8.5 Identities & Smart Substitution · 8.6 Exponents & Logarithms · 8.7 Progressions & Series (7) |
| 9 | Geometry & Mensuration for Tests (`Geometry & Mensuration for Tests`) | 9.1 Lines, Angles & Triangles · 9.2 Circles · 9.3 Polygons & Quadrilaterals · 9.4 Solids · 9.5 Coordinate Geometry Basics · 9.6 Trigonometry & Heights/Depths (6) |
| 10 | Permutations & Combinations (`Counting`) | 10.1 Counting Principles · 10.2 Arrangements (Permutations) · 10.3 Selections (Combinations) (3) |
| 11 | Probability for Tests (`Counting`) | 11.1 Probability Foundations · 11.2 Rules, Complements & Conditionals (2) |
| 12 | Statistics & Data Interpretation (`Data Interpretation`) | 12.1 Central Tendency Rapid Methods · 12.2 Dispersion Basics · 12.3 Table DI · 12.4 Chart DI · 12.5 Caselets & Multi-Source DI (5) |
| 13 | Data Sufficiency & Quantity Comparison (`Data Sufficiency`) | 13.1 The Sufficiency Framework · 13.2 Quantity-Comparison Formats (2) |
| 14 | Calculation Mastery & Test Strategy (`Test Strategy`) | 14.1 Speed Arithmetic & Verification · 14.2 Number Puzzles & Missing Numbers · 14.3 The Aptitude Meta-Game (3) |

**Total target: 14 chapters · 56 lessons.**

### 2.2 Logical Reasoning — `ku-logical-reasoning`
Group: **Aptitude & Test Preparation**
Owns fields: `Logical Reasoning`, `Logic and Reasoning`, `Verbal Reasoning`, `Nonverbal Reasoning`,
`Professional & Interpersonal Skills`, `Games & Strategy` (the eight legacy lessons migrate in by
field routing: coded inequalities, induction/deduction, three verbal-reasoning lessons, figural
patterns, situational judgement, everyday decision probability).
Carves against: Philosophy (formal logic depth), Psychology (cognitive-bias science), Mathematics
(set theory & logic foundations), English & Comprehension (reading strategy — this book takes only
the argument-analysis layer).

| Ch | Chapter (branches) | Lessons (target ≥) |
|----|--------------------|--------------------|
| 1 | Foundations of Logical Thinking (`Evaluating Arguments`, `Logic Foundations`) | 1.1 Statements, Arguments & Validity · 1.2 Induction vs Deduction (legacy pol-logic-induction-deduction-square lands here) · 1.3 The Reasoner's Error Catalog (2 new + 1 legacy) |
| 2 | Deduction: Syllogisms & Coded Logic (`Syllogisms`, `Coded Inequalities`) | 2.1 Categorical Syllogisms & Venn Method · 2.2 Possibility Cases & Either-Or · 2.3 Coded Inequalities (legacy) (3) |
| 3 | Series, Analogies & Classification (`Series & Patterns`) | 3.1 Number Series · 3.2 Letter & Alpha-Numeric Series · 3.3 Analogies · 3.4 Classification & Odd-One-Out (4) |
| 4 | Coding–Decoding & Symbol Operations (`Coding & Symbols`) | 4.1 Letter Coding · 4.2 Number & Substitution Coding · 4.3 Symbolic Mathematical Operations (3) |
| 5 | Relations, Directions & Ordering (`Relations & Ordering`) | 5.1 Blood Relations · 5.2 Direction Sense · 5.3 Ordering, Ranking & Comparisons (3) |
| 6 | Arrangements & Puzzles (`Arrangements & Puzzles`) | 6.1 Linear Arrangements · 6.2 Circular & Square Arrangements · 6.3 Scheduling & Distribution Puzzles · 6.4 Grid & Multi-Variable Puzzles (4) |
| 7 | Clocks, Calendars & Mathematical Logic (`Mathematical Logic`) | 7.1 Clocks · 7.2 Calendars · 7.3 Missing Numbers & Math Logic (3) |
| 8 | Non-Verbal & Abstract Reasoning (`Figural Patterns`, `Nonverbal Reasoning`) | 8.1 Figure Series & Completion (legacy figural patterns lands here) · 8.2 Analogy & Classification of Figures · 8.3 Paper Folding & Cutting · 8.4 Mirror & Water Images · 8.5 Embedded Figures & Counting (5) |
| 9 | Critical Reasoning (`Critical Reasoning`, `Passage Judgements`, `Principle Application`) | 9.1 Argument Structure & Assumptions · 9.2 Strengthen, Weaken & Evaluate · 9.3 Inference & Paradox · 9.4 Flaws, Parallels & Principles (legacy trio lands here) (7 total with legacy) |
| 10 | Decision Making & Judgement (`Situational Judgement`, `Decision Math`) | 10.1 Situational Judgement Tests (legacy) · 10.2 Decision Trees & Expected Value (legacy probability-decisions lands here) · 10.3 Games & Strategy Logic (3) |

**Total target: 10 chapters · 37 lessons (8 legacy migrate + 29 new).**

### 2.3 General Awareness — `ku-general-awareness`
Group: **Aptitude & Test Preparation** · field: `General Awareness`
Carves against: the deep subject books (Indian History, Ancient–Early-Modern History, Constitutional
Law, Comparative Indian Politics, Geography, Macroeconomics, Finance & Banking, Computer Literacy,
astronomy, climate science, ecology, art history). **Carving principle: the deep books teach
understanding; this book teaches the rapid-recall awareness layer — the evergreen fact base, the
one-line formats, and the memory method — and points to the deep book for each theme.**
EVERGREEN RULE: no fact that rots inside a year without a "verify current" flag; current-affairs
method is taught as METHOD, not as news.

| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | The General Awareness Method (`GA Method`) | 1.1 What Awareness Tests Actually Test · 1.2 The Static ↔ Current Linking Method · 1.3 Memory Systems for Facts (3) |
| 2 | Indian History Essentials (`History Essentials`) | 2.1 Ancient India One-Layer · 2.2 Medieval India One-Layer · 2.3 Modern India & the Freedom Struggle (3) |
| 3 | Polity & Constitution Essentials (`Polity Essentials`) | 3.1 The Constitution's Frame · 3.2 Rights, Duties & Directive Principles · 3.3 Parliament, Executive & Judiciary · 3.4 Federalism, Panchayati & Amendments (4) |
| 4 | Geography Essentials (`Geography Essentials`) | 4.1 India: Physical · 4.2 India: Economic & Human · 4.3 World: Physical One-Layer · 4.4 Maps, Capitals & Quick Facts (4) |
| 5 | Economy & Banking Awareness (`Economy Essentials`) | 5.1 Budget & National Accounts Vocabulary · 5.2 Money, RBI & Banking Products · 5.3 Markets, Inflation & Growth Basics (3) |
| 6 | Science & Technology Awareness (`Science Awareness`) | 6.1 Everyday Science One-Layer · 6.2 Space Programme Awareness · 6.3 Defence & Security Technology · 6.4 Computing & AI Awareness (4) |
| 7 | Environment & Ecology Awareness (`Environment Essentials`) | 7.1 Ecology Facts That Repeat · 7.2 Treaties, Bodies & Reports (2) |
| 8 | Static GK: Awards, Sports, Books & Organizations (`Static GK`) | 8.1 Awards & Honours · 8.2 Sports & Trophies · 8.3 Books, Authors & Quotations · 8.4 Organizations, Days & Symbols (4) |
| 9 | The Current-Affairs Engine (`Current Affairs`) | 9.1 The 12-Month Framework · 9.2 Appointments, Obituaries, Summits & Reports — the Formats (2) |

**Total target: 9 chapters · 29 lessons.**

---

## 3. Existing-Subject Gap Protocol (the other 101 subjects)

For every existing subject, "finished" is defined by the same bar as physics/math/chemistry:

1. **Chapter completeness** — the subject's chapter set must mirror the most popular book(s) of the
   discipline (research pass per subject: top-selling textbook TOC + official exam syllabi where
   relevant). Missing chapters get declared at the right pedagogical position.
2. **Lesson completeness** — every chapter's topic list covered; no syllabus topic without a lesson.
3. **Depth** — every lesson ≥ 2,000 words (interim floor while climbing: none below 1,300).
4. **Questions** — every lesson quiz ≥ 6 with explanations; worked examples present.
5. **Figures/derivations** — where the discipline warrants (math/science/engineering: derivation
   blocks; everything: figure plates where a visual helps).
6. **Exam weave** — for exam-facing subjects, syllabus-style worked examples and question styles
   woven in (no exam names).

**Working order (after the three new subjects):** knowledge-meta.json book order (1 → 101), each
subject audited by `scripts/gap-audit.ts`, gaps fixed chapter-first, then lesson-first, then depth.
Books already at the bar are marked DONE in the ledger without rework.

---

## 4. Subject Registry & Schedule Order

Order: **A. the three new subjects (2.1 → 2.2 → 2.3)**, then **B. the 101 existing subjects in
knowledge-meta.json order** (ku-study-skills first … ku-career-communication last), each to the §3
bar. Tracks (math-master, phys-master, chem-complete, aptitude-complete course books,
english-complete …) keep their own maintenance loops; this program's Chapter-completeness research
step feeds them targets when their subjects come up.

---

## 5. Progress Ledger (append-only — newest last)

| Date (IST) | Subject | What happened | State |
|---|---|---|---|
| 2026-11-01 | Program | Master syllabus created; 3 subjects registered (taxonomy + field file + wiring); QA Ch1 lessons 1.1–1.4 authored; pipeline 100%; pushed | ku-quantitative-aptitude IN PROGRESS (Ch1 §1.5 next) |
| 2026-11-01 | ku-quantitative-aptitude | Ch1 §1.5 qa-fractions-decimals-comparison authored (2,924w, 2 figures, 5-step nines-law derivation, quiz 8 w/ explanations, worked example 4-fraction ordering); carve vs fnd-percentage-ratio-mental-math documented; audit 2967/2967 = 100%; pushed | QA Ch1 §1.1–§1.5 live — §1.6 Surds & Indices next |
| 2026-11-01 | Retirement + gap-fill | Combined 'Aptitude, Reasoning & General Awareness' stub book retired per user order (subject 'aptitude', book 'aptitude-complete', merged/aptitude.ts deleted; prose preserved, serialize filters orphans; exam mappedSubjectId hints re-pointed). Retirement exposed 24 unmapped exam topics → 11 gap lessons authored across the three split subjects: QA §12.1 tables-caselets (2,297w) + §13.1 quantity-comparison (2,390w); LR §3.1 analogies-classification (2,257w), §5.3 ordering-ranking (2,055w), §6.1 seating-arrangements (2,462w), §7.1 clock-calendar (2,044w), §8.2 paper-folding-figure-matrix (2,101w); GA §2.6 history-landmark-events (2,028w), §7.1 art-culture-heritage (1,922w), §7.2 awards-sports-persons (1,921w), §8.1 current-affairs-engine (2,099w). 21 verified TOPIC_ALIASES added (incl. gaokao 'political life' genre-fix); Static GK chapter renamed to include Culture; auditor IDS + declared words exact. Audit 2967/2967 = 100% restored | First 2 chapters of each split subject now seeded; QA Ch1 §1.6 Surds & Indices next per working order |
| 2026-11-02 | Field-wise reorganization | **Whole knowledge source tree arranged field-wise → subject-wise → chapter-wise per user order.** Legacy flat pass files (fields/ — 87 files incl. 71 cryptic x-pass artifacts) replaced by: subjects/<subject-key>/<nn>-<chapter>.ts (119 subject folders · 366 chapter files, one per canonical Library book chapter) + domains/<nn>-<field>.ts (18 field assembly files) + README.md map + attic/ (x17-cuet-gap superseded draft preserved, 3 revivable lessons documented). Migration by scripts/reorganize-knowledge-fields.ts with a template-literal-safe verbatim mover; verified by scripts/verify-knowledge-reorg.ts: 696/696 topics deep-equal, 113 bridge-exact subject buckets identical, stats identical, content.json byte-identical; knowledge-meta.json differs only in 24 books' `sources` strings (fields now alphabetized — deterministic via knowledge-universe.ts sort fix). Bridge determinism hardening: sourceAreas sorted so serialized output is layout-independent. Audit 2967/2967 = 100% maintained. count-topic-words-exact.ts rewritten to walk the new tree dynamically; audit-concept-alignment.ts glob re-pointed; 19 historical one-shot codemods retired (git history preserves them) | Tree is now the canonical authoring surface — new lessons go straight into subjects/<book>/<chapter>.ts; QA Ch1 §1.6 Surds & Indices next per working order |
