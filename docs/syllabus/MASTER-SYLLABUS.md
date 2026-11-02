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
   - **textbook-style continuous teaching** per `docs/project/TEXTBOOK-QUALITY-DIRECTIVE.md` —
     situation openings, background, gradual development, definitions built up and explained
     word by word AFTER intuition (NEVER the "directly definition + insight" notes pattern);
   - **NO upper word limit** (user directive 2026-11-02, supersedes the former 2,000–3,500
     range; reaffirmed later the same day: no target range either) — as elaborative as
     genuine teaching requires, whether that honestly lands at 2,300 or 9,000 words;
     never truncate theory, examples, derivations or figures to fit a count; never pad.
     New lessons may land at 1,300–2,800 on the first pass and are deepened on later passes;
   - worked examples with full arithmetic ("show every step");
   - named researchers/dates/origins where the discipline has them (Brahmagupta 628 CE, Ramanujan,
     Metropolis 1953…);
   - a figure plate (hand-drawn SVG, labels matching the prose terms verbatim) where a visual helps;
   - a derivation block for every formula-bearing topic;
   - **exercise set with NO question bound** (user directive 2026-11-02, directive §14):
     minimum 6 questions, no upper limit — as many as genuine mastery requires — WITH
     explanations for every answer (and why each wrong option fails), at least half
     quantitative/method from the lesson's own worked examples, mixing question types
     (single-correct, numerical-value, multiple-correct style, assertion–reason,
     linked-comprehension stems, precedence/sign traps);
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
3. **Depth** — every lesson ≥ 2,000 words (interim floor while climbing: none below 1,300);
   **no upper limit** — as elaborative as the topic genuinely requires, in textbook style
   per `docs/project/TEXTBOOK-QUALITY-DIRECTIVE.md`.
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

Order (updated 2026-11-02 per the user's directive: *"begin with life science field"*):
**A. the Life Sciences field — 13 subjects in §6's ladder order** (Cell & Molecular Biology →
Biochemistry → Genetics & Heredity → Human Anatomy & Physiology → Botany → Zoology → Evolutionary
Biology → Microbiology & Immunology → Ecology & Conservation → Developmental Biology → Marine
Biology → Bioinformatics & Genomics → Synthetic Biology), then **B. the three aptitude-family
subjects (§2.1 → §2.2 → §2.3)** — QA resumes at Ch1 §1.6 Surds & Indices after its pause, then
**C. the remaining ~88 ku-subjects in knowledge-meta.json order**, each to the §3 bar. Tracks
(math-master, phys-master, chem-complete, english-complete …) keep their own maintenance loops;
this program's Chapter-completeness research step feeds them targets when their subjects come up.

---

## 5. The Subject → Exam Map (full library scan, 2026-11-02)

Every subject currently in the Library, and — per the user's mandate — **the exams that ask it**.
Source: the 59-exam curated corpus in `src/data/exams/` (hand-curated from official syllabus pages;
see each exam's `sources` for the official pages used). Region key: 🇮🇳 India · 🇺🇸 US · 🇬🇧 UK ·
🌍 Global · 🇦🇺 Australia · 🇨🇦 Canada · 🇸🇬 Singapore · 🇯🇵 Japan · 🇨🇳 China · 🇧🇷 South America.
The exam↔topic ROUTING lives only in `src/data/exams/` + `topic-aliases.ts` (product rule: no exam
names in lesson text).

### 5.1 Foundations
| Library subject | Asked in |
|---|---|
| Study Skills & Learning Science | (no exam tests it directly — the meta-subject that speeds every other line) |
| Computer & Digital Literacy | IBPS PO 🇮🇳 (computer aptitude) · SSC CGL 🇮🇳 · UGC NET 🇮🇳 (paper I) · RBI Grade B 🇮🇳 |

### 5.2 Aptitude & Test Preparation
| Library subject | Asked in |
|---|---|
| Quantitative Aptitude | GATE (CSE/ECE/ME/EE/CE) 🇮🇳 · GMAT 🌍 + the quantitative layers of CAT 🇮🇳 · SAT 🇺🇸 · GRE 🌍 · ACT 🇺🇸 · UPSC Prelims 🇮🇳 · SSC CGL 🇮🇳 · IBPS PO 🇮🇳 · CUET 🇮🇳 · NDA/CDS 🇮🇳 · RBI Grade B 🇮🇳 |
| Logical Reasoning | UPSC Prelims 🇮🇳 · CAT 🇮🇳 · SSC CGL 🇮🇳 · CUET 🇮🇳 · IBPS PO 🇮🇳 · BITSAT 🇮🇳 · CLAT 🇮🇳 · UCAT 🇬🇧 · UGC NET 🇮🇳 · VITEEE 🇮🇳 · RBI Grade B 🇮🇳 + abstract-reasoning layers of GRE 🌍 · GMAT 🌍 · LSAT 🇺🇸 |
| General Awareness | SSC CGL 🇮🇳 (general awareness) · IBPS PO 🇮🇳 (general/economy/banking awareness) · RBI Grade B 🇮🇳 · UPSC Prelims 🇮🇳 (GS paper I) · CDS 🇮🇳 (general knowledge) · CLAT 🇮🇳 (current affairs + GK) |

### 5.3 Life Sciences
| Library subject | Asked in |
|---|---|
| Cell & Molecular Biology · Biochemistry · Genetics & Heredity · Human Anatomy & Physiology · Botany · Zoology · Ecology & Conservation · Evolutionary Biology | **NEET 🇮🇳** (the whole biology paper) · **CUET 🇮🇳** (biology) · **BITSAT 🇮🇳** · **KCET 🇮🇳 · MHT CET 🇮🇳 · VITEEE 🇮🇳 · WBJEE 🇮🇳** (biology option) · **AP Biology 🇺🇸 · A-Level Biology 🇬🇧 · IB Biology 🌍 · GCE A-Level H2 Biology 🇸🇬** · VCE/QCE/NSW HSC/Alberta Diploma 🇦🇺🇨🇦 (biology) · Gaokao 🇨🇳 (biology elective) · **MCAT 🇺🇸** (biological & biochemical foundations of living systems; psychological/social foundations pull Psychology + Sociology too) · ENEM 🇧🇷 (nature sciences) · EJU 🇯🇵 (science option) |
| Marine Biology · Developmental Biology · Microbiology & Immunology | NEET 🇮🇳 + A-Level/IB/AP Biology 🌍 pull their chapters (human reproduction & development, microbes & disease); Marine Biology serves the biodiversity/environment layers |
| Bioinformatics & Genomics · Synthetic Biology | university-entrance interviews + the genomics/biotech tools layers of NEET 🇮🇳 & AP/IB Biology 🌍 (modern-biology applications sections) — not directly examined as named subjects, they are the modern-biology context the exams point at |

### 5.4 Natural Sciences
| Library subject | Asked in |
|---|---|
| Physics (phys-master) | NEET · JEE Main · JEE Advanced · CUET · BITSAT · KCET · MHT CET · WBJEE · VITEEE 🇮🇳 · AP Physics 1 · A-Level Physics · IB Physics · GCE A-Level 🇸🇬 · VCE/QCE/NSW HSC/Alberta 🇦🇺🇨🇦 · Gaokao 🇨🇳 · MCAT (physics layer) |
| Chemistry (chem-complete) | the same 19-exam set as Physics (19 mapped exams incl. NEET/JEE both tiers/IB/AP/A-Level/Gaokao) |
| Mathematics (math-master) | JEE Main · JEE Advanced · SAT · ACT · CAT · SSC CGL · GRE · GATE (all papers) · CUET · IBPS PO · BITSAT · NDA · CLAT · GMAT · CA Foundation · A-Level Maths · AP Calculus AB/BC · AP Statistics · GCSE Maths · IB Math AA · GCE A-Level 🇸🇬 · KCET · VITEEE · VCE ×3 · QCE ×3 · WBJEE · EJU · NSW HSC ×2 · RBI Grade B · MHT CET · Alberta · Gaokao (44 mapped exam-subject pairs — the most-tested subject in the corpus) |
| Neuroscience | VCE 🇦🇺 · QCE 🇦🇺 (psychology/biology intersection) + MCAT 🇺🇸 behavior layers |
| Astronomy & Space Science · Earth & Atmospheric Sciences · Earth & Climate Science | UPSC Prelims 🇮🇳 GS · NDA/CDS 🇮🇳 general science · EJU 🇯🇵 science option · general-science layers of ACT 🇺🇸 — and the geography papers' physical layer (CUET/Gaokao geography) |
| Environmental Policy & Circularity · Environmental Health & Food Systems · Energy & Sustainability | UPSC Prelims 🇮🇳 (environment in GS) · ENEM 🇧🇷 (nature sciences + human sciences intersection) · GATE CE 🇮🇳 (environmental engineering layers) |

### 5.5 Medicine & Health
| Library subject | Asked in |
|---|---|
| Clinical Medicine · Medical Technology | NEET 🇮🇳 (its whole purpose) · MCAT 🇺🇸 · UCAT 🇬🇧 (decision layers) — the vocational depth beyond the entrance exams |
| Public Health · Health, Nutrition & Fitness · Mental Health | UPSC Prelims 🇮🇳 GS · CUET 🇮🇳 (physical education/nutrition) · VCE/QCE 🇦🇺 health & human development |
| Medicines, First Aid & Reproductive Health | NEET 🇮🇳 biology layers · NDA/CDS 🇮🇳 first-aid practicals |

### 5.6 Humanities & Social Sciences
| Library subject | Asked in |
|---|---|
| Indian History · Ancient & Early Modern History · Modern World History · Economic History | CUET 🇮🇳 (history) · UPSC Prelims 🇮🇳 GS I · CDS 🇮🇳 · Gaokao 🇨🇳 (history elective) · ENEM 🇧🇷 (human sciences) |
| Geography | CUET 🇮🇳 · Gaokao 🇨🇳 (geography elective) · UPSC Prelims 🇮🇳 GS I |
| Political Theory · Comparative Politics & Indian Polity | CUET 🇮🇳 (political science) · UGC NET 🇮🇳 (paper II code 02) · UPSC Prelims 🇮🇳 · Gaokao 🇨🇳 (politics elective) |
| Psychology | CUET 🇮🇳 · VCE 🇦🇺 · QCE 🇦🇺 · MCAT 🇺🇸 (behavioral foundations) |
| Philosophy · Religious Studies · Sociology · Anthropology · Urban Studies · Media & Communication · Education · Research Methods | UPSC Prelims 🇮🇳 GS layers · UGC NET 🇮🇳 (paper I reasoning/comprehension/diology layers) · CLAT 🇮🇳 comprehension passages — the deep context the comprehension papers draw from |
| International Relations & Security · Public Policy & Administration | UPSC Prelims 🇮🇳 GS II layers · RBI Grade B 🇮🇳 (economic & social issues paper) |

### 5.7 Commerce, Economics & Business
| Library subject | Asked in |
|---|---|
| Microeconomics · Macroeconomics · Economics cluster | CUET 🇮🇳 (economics) · A-Level Economics 🇬🇧 · IB Economics 🌍 · GCE A-Level H2 Economics 🇸🇬 · RBI Grade B 🇮🇳 · ENEM 🇧🇷 (human sciences) |
| Financial Accounting · Advanced Accounting & Auditing | CUET 🇮🇳 (accountancy) · CA Foundation 🇮🇳 (accounting) |
| Finance & Banking | RBI Grade B 🇮🇳 (finance & management paper) · IBPS PO 🇮🇳 (banking awareness) |
| Business Economics · Management & Leadership · Marketing · Operations & Entrepreneurship cluster | CA Foundation 🇮🇳 (business economics + business laws) · UGC NET 🇮🇳 (commerce paper II code 08) · CAT 🇮🇳 (business-context passages) |

### 5.8 Law & Justice
| Library subject | Asked in |
|---|---|
| Legal Systems & Method · all law books | **CLAT 🇮🇳** (legal reasoning) · **LSAT 🇺🇸** · A-Level Law 🇬🇸 layers · UGC NET 🇮🇳 law paper |

### 5.9 Languages & Literature
| Library subject | Asked in |
|---|---|
| English (english-complete) | **33 mapped exam-subject pairs** — SAT · CAT · SSC CGL · GRE · CUET · IBPS PO · BITSAT · IELTS ×4 · CLAT · GMAT · TOEFL ×4 · MCAT · ACT ×2 · CDS · LSAT ×2 · UCAT · VITEEE · VCE · QCE · NSW HSC · RBI Grade B ×2 · Alberta · Gaokao |
| Literature · Linguistics | CUET 🇮🇳 · UGC NET 🇮🇳 (paper I comprehension) — the reading depth beneath every verbal paper |
| Spanish · Japanese · French · German · Hindi · Arabic · Korean · Russian · Mandarin Chinese | EJU 🇯🇵 (Japanese as a foreign language) · Gaokao 🇨🇳 (语文 Chinese) · IELTS/TOEFL 🌍 (the L2 testing genre) · CUET 🇮🇳 language papers |

### 5.10 Arts & Culture
| Library subject | Asked in |
|---|---|
| Art History · Visual Arts · Music · Film · Animation · Design · Performing Arts · Architecture | UPSC Prelims 🇮🇳 GS I (art & culture) · CLAT 🇮🇳 GK · NID/NIFT-style 🇮🇳 aptitude layers (design) — the cultural-literacy layer of every GK paper |

### 5.11 Applied Engineering & Technology
| Library subject | Asked in |
|---|---|
| Structural & Seismic · Water & Environmental · Transportation · Construction/Geomatics (GATE CE cluster) | **GATE CE 🇮🇳** (mechanics-graphics layers) |
| Aerospace & Aviation · Chemical Engineering · Naval Architecture · Nanotechnology · Quantum Information · Computational Science | GATE 🇮🇳 discipline papers (AE/CH/NA/PH layers) + the advanced-technology awareness layers of UPSC 🇮🇳 & RBI Grade B 🇮🇳 |
| Programming & Software (C/C++ · Java · Web) + Computing Systems cluster | **GATE CSE 🇮🇳** (DSA + aptitude) · **AP CSA 🇺🇸** · CUET 🇮🇳 (programming-java) |
| Electronics & Communication cluster (incl. Signals & Systems) | **GATE ECE 🇮🇳** (signals-systems + aptitude) |
| Electrical & Power cluster (incl. Electric Circuits) | **GATE EE 🇮🇳** (electric-circuits + aptitude) |
| Mechanical & Energy cluster (incl. Thermal-Fluids) | **GATE ME 🇮🇳** (thermal-fluids + aptitude) |

### 5.12 Everyday Life Skills
| Library subject | Asked in |
|---|---|
| Cooking & Food Science · Home Repair · Cars & Outdoors · Garden & Growing · Practical Skills · Career & Communication | not directly examined — the everyday layer that GK papers sample (first aid, food, safety) and the employability layer campus tests probe |

**Reading of the scan (what it orders next):** the three most-tested clusters in the corpus are
**Mathematics (44 pairs) · English (33 pairs) · Chemistry/Physics (19 pairs each)** — all four are
hand-authored deep books already near the bar. The biggest **exam-driven under-supply** is the
**biology cluster** (NEET + CUET + BITSAT + KCET + MHT-CET + VITEEE + WBJEE + AP/A-Level/IB/H2 +
VCE/QCE/NSW/Alberta + Gaokao + MCAT + ENEM + EJU — 15+ exams whose biology papers map to the
Life Sciences subjects) — which is exactly why the user's directive to begin with the Life Sciences
field is the correct next move: it is the highest-exam-demand cluster with the thinnest current
depth (107 lessons across 13 subjects vs. the physics/chemistry standard).

---

## 6. Life Sciences Field — Syllabus Trees (the first cluster, 2026-11-02)

The ladder order and the full chapter→lesson trees. Carving is explicit: **Biochemistry owns the
molecule-level reaction chemistry; Cell & Molecular Biology owns the cell-level integration;
Botany owns the plant-specific physiology; Human A&P owns the human organ depth; Genetics owns
heredity & population genetics; Evolution owns the diversity survey & evolutionary narrative;
Ecology owns the ecosystem layer; Bioinformatics owns the computational method.** Depth bar per
§0 Charter (NO upper word limit — as elaborative as teaching requires, floor 2,000 words/lesson;
textbook style, worked examples, figures, quizzes with explanations).

### 6.1 Cell & Molecular Biology — `ku-cell-molecular-biology` (THE ANCHOR — starts now)
Group: Life Sciences · field: `Cell & Molecular Biology` · current: 4 ch / 18 lessons

| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | Foundations: Life, Microscopy & the Cell (`Cell Foundations`) | 1.1 What Is Life? The Five Signatures ✍️ ✓ · 1.2 Seeing the Invisible: Microscopy from Hooke to Cryo-EM ✍️ ✓ · 1.3 The Two Architectures: Prokaryotes, Eukaryotes & the Size Limit ✍️ ✓ (3) |
| 2 | The Cell: Structure & Signaling (`Cell Biology`, `Cell Signaling`) | 2.1 The Cell and Its Biomolecules ✓ · 2.2 The Organelle Atlas: Nucleus to Peroxisome ✍️ ✓ · 2.3 The Cytoskeleton and Cell Motility ✓ · 2.4 Cell Signaling ✓ · 2.5 The Cell Cycle ✓ (5) |
| 3 | Molecular Biology of the Gene (`Molecular Genetics`, `Gene Regulation`) | 3.1 DNA: The Molecule of Heredity ✓ · 3.2 Transcription ✓ · 3.3 The Genetic Code and Translation ✓ · 3.4 Mutations and Repair ✓ · 3.5 Gene Regulation ✓ · 3.6 Chromatin and the Nucleosome ✓ · 3.7 Viruses & Mobile Genetic Elements ✍️ ✓ (7) |
| 4 | Bioenergetics (`Bioenergetics`) | 4.1 Cellular Respiration ✓ · 4.2 Fermentation & Metabolic Integration ✍️ ✓ · 4.3 Photosynthesis: The Cell-Level View ✍️ ✓ (3) |

**Total target: 4 chapters · 18 lessons — COMPLETE (18/18).**

### 6.2 Biochemistry — `ku-biochemistry` · current: 3 ch / 16 lessons
| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | Molecules of Life (`Molecules of Life`) | 1.1–1.7 ✓ · 1.8 Nucleotides & Nucleic-Acid Chemistry ✓ (8) |
| 2 | Laboratory Methods (`Laboratory Methods`) | 2.1 The Biochemist's Toolbox ✓ · 2.2 Isotopes, Fractionation & Centrifugation ✓ · 2.3 Structural Methods: X-Ray, NMR, Cryo-EM for Molecules ✓ (3) |
| 3 | Metabolic Pathways in Depth (`Metabolism`) | 3.1 Glycolysis Step by Step ✓ · 3.2 The Citric-Acid Cycle ✓ · 3.3 Oxidative Phosphorylation & Chemiosmosis ✓ · 3.4 Carbohydrate & Lipid Traffic ✓ · 3.5 Nitrogen Metabolism & the Urea Cycle ✓ (carve: Cell-Bio 4.1 keeps the integrative overview, §3.5 goes reaction-by-reaction) (5) |

**Total target: 3 chapters · 16 lessons — COMPLETE (16/16).**
**MASTERSYLLABUS-DONE check PASSED 2026-11-02 (master loop job 494898): 16/16 lessons word-exact (count-topic-words-exact, 0 flagged — incl. fixing bio-biochemistry-metabolism declared 1,244→1,217 actual), all quizzes present, 16 figure blocks across 3 chapters; ceiling-trim re-expansion flags (§3.1/§3.2/§3.4) remain owned by the textbook-quality loop's queue.**

### 6.3 Genetics & Heredity — `ku-genetics-heredity` · current: 5 ch / 19 lessons (gap audit 2026-11-02: 6 NEW lessons + 11 thin-lesson deepenings remain — see §7)
| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | Classical & Transmission Genetics | 1.1–1.7 ✓ (7) |
| 2 | Cytogenetics & Allelic Analysis | 2.1–2.2 ✓ · 2.3 Chromosome Mutations: Deletions to Inversions ✓ (3) |
| 3 | Molecular Genetics & Genomics | 3.1–3.4 ✓ (4) |
| 4 | Genes in Populations | 4.1–4.3 ✓ · 4.4 Selection Models & Fitness Arithmetic (NEW) (4) |
| 5 | Biotechnology | 5.1–5.2 ✓ · 5.3 Genomics in Medicine: Testing, Counselling, Ethics (NEW) (3) |
| 6 | Quantitative Genetics (`Quantitative Genetics`) | 6.1 Polygenic Traits & the Bell Curve (NEW) · 6.2 Heritability & the Breeder's Equation (NEW) · 6.3 QTL Mapping in Practice (NEW) (3) |

**Total target: 6 chapters · 24 lessons.**

### 6.4 Human Anatomy & Physiology — `ku-human-anatomy-physiology` · current: 3 ch / 11 lessons
| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | Body Systems | 1.1–1.9 ✓ · 1.10 Blood: The Fluid Tissue (NEW) · 1.11 Skin, Hair & Nails: The Barrier Organ (NEW) (11) |
| 2 | Reproduction & Development | 2.1 ✓ · 2.2 Pregnancy, Birth & Lactation (NEW) · 2.3 Development Through Life: Aging (NEW, carve: embryology mechanism stays in Developmental Biology) (3) |
| 3 | When Systems Fail | 3.1 ✓ · 3.2 Metabolic Disease: Diabetes (NEW) · 3.3 The Cardiovascular Risk Story (NEW) (3) |

**Total target: 3 chapters · 17 lessons.**

### 6.5 Botany — `ku-botany` · current: 3 ch / 8 lessons
| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | The Plant Body | 1.1 ✓ · 1.2 Tissues Under the Microscope (NEW) · 1.3 Roots, Stems & Leaves: The Organ Toolkit (NEW) (3) |
| 2 | Plant Physiology | 2.1–2.5 ✓ (5) |
| 3 | Reproduction & Life Cycles | 3.1–3.2 ✓ · 3.3 Plant Hormones & Growth Responses (NEW) · 3.4 Photoperiodism & Flowering (NEW) (4) |
| 4 | Plant Ecology & Adaptations (`Plant Ecology`) | 4.1 Defenses: Thorns, Toxins & Recruits (NEW) · 4.2 Plant–Pollinator Systems (NEW) (2) — carve: the plant-KINGDOM survey stays in Evolutionary Biology 3.2 |

**Total target: 4 chapters · 14 lessons.**

### 6.6 Zoology — `ku-zoology` · current: 2 ch / 5 lessons
| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | Animal Diversity & Form | 1.1–1.2 ✓ · 1.3 Invertebrates I: Sponges to Molluscs (NEW) · 1.4 Invertebrates II: Arthropods & Echinoderms (NEW) · 1.5 Vertebrates: Fish to Mammals (NEW) (5) |
| 2 | Senses & Behavior | 2.1–2.3 ✓ (3) |
| 3 | Comparative Physiology (`Comparative Physiology`) | 3.1 Gas Exchange Across Phyla (NEW) · 3.2 Circulation: Open, Closed & Two-Chambered to Four (NEW) · 3.3 Osmoregulation & Excretion: From Flame Cells to Nephrons (NEW) — carve: the HUMAN depth stays in Human A&P (3) |

**Total target: 3 chapters · 11 lessons.**

### 6.7 Evolutionary Biology — `ku-evolutionary-biology` · current: 3 ch / 9 lessons
| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | Evolution & Speciation | 1.1–1.5 ✓ · 1.6 Kin Selection & the Social Contract (NEW) (6) |
| 2 | Human Evolution | 2.1 ✓ · 2.2 The Genus Homo & the Migration Story (NEW) (2) |
| 3 | Diversity & Systematics | 3.1–3.3 ✓ · 3.4 The Fossil Record & Deep Time (NEW) · 3.5 Coevolution: Arms Races and Mutualisms (NEW) (5) |

**Total target: 3 chapters · 13 lessons.**

### 6.8 Microbiology & Immunology — `ku-microbiology-immunology` · current: 2 ch / 8 lessons
| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | The Microbial World | 1.1–1.5 ✓ · 1.6 Archaea, Protists & Fungi: The Rest of the Tree (NEW) · 1.7 Growing & Counting Microbes (NEW) (7) |
| 2 | Immunology | 2.1–2.3 ✓ · 2.4 Adaptive Immunity in Depth: B Cells, T Cells & Antibodies (NEW) · 2.5 Vaccines & Immune Memory (NEW) (5) |
| 3 | Applied Microbiology (`Applied Microbiology`) | 3.1 Industrial Fermentation (NEW) · 3.2 Water, Food & Household Microbiology (NEW) (2) |

**Total target: 3 chapters · 14 lessons.**

### 6.9 Ecology & Conservation — `ku-ecology-conservation` · current: 4 ch / 12 lessons
| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | Organisms & the Environment | 1.1 ✓ · 1.2 Behavioral Ecology: Foraging & Mating Systems (NEW) (2) |
| 2 | Populations & Communities | 2.1–2.3 ✓ · 2.4 Ecological Succession (NEW) (4) |
| 3 | Ecosystems, Energy & Biomes | 3.1–3.4 ✓ · 3.5 Biogeochemical Cycles: Carbon, Nitrogen, Phosphorus (NEW — verify carve vs Earth & Climate Science at authoring time) (5) |
| 4 | Conservation & Restoration | 4.1–4.4 ✓ (4) |

**Total target: 4 chapters · 15 lessons.**

### 6.10 Developmental Biology — `ku-developmental-biology` · current: 5 ch / 5 lessons
| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | Building the Body | 1.1 ✓ · 1.2 Fertilization: The Meeting of Gametes (NEW) · 1.3 Cleavage, Gastrulation & the Body Plan (NEW) (3) |
| 2 | Cell Fate & Determination | 2.1 ✓ · 2.2 Pattern Formation: Gradients, Hox & the Body's Coordinates (NEW) (2) |
| 3 | Mechanisms & Model Organisms | 3.1–3.2 ✓ (2) |
| 4 | Growth, Renewal & Regeneration | 4.1 ✓ · 4.2 Aging: The Slow Failure of Maintenance (NEW) (2) |
| 5 | Evo-Devo | 5.1 ✓ (1) |

**Total target: 5 chapters · 10 lessons.**

### 6.11 Marine Biology — `ku-marine-biology` · current: 4 ch / 4 lessons
| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | The Blue Realm | 1.1 ✓ · 1.2 The Physical Ocean: Light, Pressure, Salt & Currents (NEW) (2) |
| 2 | Coastal Habitats & Communities | 2.1 ✓ · 2.2 Coral Reefs in Depth (NEW) (2) |
| 3 | Plankton, Larvae & Recruitment | 3.1 ✓ · 3.2 The Deep Sea & Polar Oceans (NEW) (2) |
| 4 | Fisheries & Ocean Conservation | 4.1 ✓ (1) |

**Total target: 4 chapters · 7 lessons.**

### 6.12 Bioinformatics & Genomics — `ku-bioinformatics-genomics` · current: 4 ch / 4 lessons
| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | Reading Genomes with Code | 1.1 ✓ · 1.2 Sequence Alignment: The Core Algorithm (NEW) (2) |
| 2 | Sequencing & Assembly | 2.1 ✓ (1) |
| 3 | Phylogenetics | 3.1 ✓ (1) |
| 4 | Databases & Structure Prediction | 4.1 ✓ (1) |

**Total target: 4 chapters · 5 lessons.**

### 6.13 Synthetic Biology — `ku-synthetic-biology` · current: 3 ch / 4 lessons
| Ch | Chapter (branch) | Lessons (target ≥) |
|----|------------------|--------------------|
| 1 | Programming Living Cells | 1.1–1.2 ✓ (2) |
| 2 | Genetic Circuits & Toolkits | 2.1 ✓ · 2.2 Chassis Organisms & Minimal Genomes (NEW) (2) |
| 3 | Applications & Responsible Innovation | 3.1–3.2 ✓ (2) |

**Total target: 3 chapters · 6 lessons.**

**Life Sciences field total: from 107 → 168 lessons across 13 subjects.** The ✍️ lessons in 6.1
are authored in this same session (the field's opening increment); every other NEW lesson is the
standing queue, one subject at a time, per §4 order.

---

## 7. Progress Ledger (append-only — newest last)

| Date (IST) | Subject | What happened | State |
|---|---|---|---|
| 2026-11-01 | Program | Master syllabus created; 3 subjects registered (taxonomy + field file + wiring); QA Ch1 lessons 1.1–1.4 authored; pipeline 100%; pushed | ku-quantitative-aptitude IN PROGRESS (Ch1 §1.5 next) |
| 2026-11-01 | ku-quantitative-aptitude | Ch1 §1.5 qa-fractions-decimals-comparison authored (2,924w, 2 figures, 5-step nines-law derivation, quiz 8 w/ explanations, worked example 4-fraction ordering); carve vs fnd-percentage-ratio-mental-math documented; audit 2967/2967 = 100%; pushed | QA Ch1 §1.1–§1.5 live — §1.6 Surds & Indices next |
| 2026-11-01 | Retirement + gap-fill | Combined 'Aptitude, Reasoning & General Awareness' stub book retired per user order (subject 'aptitude', book 'aptitude-complete', merged/aptitude.ts deleted; prose preserved, serialize filters orphans; exam mappedSubjectId hints re-pointed). Retirement exposed 24 unmapped exam topics → 11 gap lessons authored across the three split subjects: QA §12.1 tables-caselets (2,297w) + §13.1 quantity-comparison (2,390w); LR §3.1 analogies-classification (2,257w), §5.3 ordering-ranking (2,055w), §6.1 seating-arrangements (2,462w), §7.1 clock-calendar (2,044w), §8.2 paper-folding-figure-matrix (2,101w); GA §2.6 history-landmark-events (2,028w), §7.1 art-culture-heritage (1,922w), §7.2 awards-sports-persons (1,921w), §8.1 current-affairs-engine (2,099w). 21 verified TOPIC_ALIASES added (incl. gaokao 'political life' genre-fix); Static GK chapter renamed to include Culture; auditor IDS + declared words exact. Audit 2967/2967 = 100% restored | First 2 chapters of each split subject now seeded; QA Ch1 §1.6 Surds & Indices next per working order |
| 2026-11-02 | Field-wise reorganization | **Whole knowledge source tree arranged field-wise → subject-wise → chapter-wise per user order.** Legacy flat pass files (fields/ — 87 files incl. 71 cryptic x-pass artifacts) replaced by: subjects/<subject-key>/<nn>-<chapter>.ts (119 subject folders · 366 chapter files, one per canonical Library book chapter) + domains/<nn>-<field>.ts (18 field assembly files) + README.md map + attic/ (x17-cuet-gap superseded draft preserved, 3 revivable lessons documented). Migration by scripts/reorganize-knowledge-fields.ts with a template-literal-safe verbatim mover; verified by scripts/verify-knowledge-reorg.ts: 696/696 topics deep-equal, 113 bridge-exact subject buckets identical, stats identical, content.json byte-identical; knowledge-meta.json differs only in 24 books' `sources` strings (fields now alphabetized — deterministic via knowledge-universe.ts sort fix). Bridge determinism hardening: sourceAreas sorted so serialized output is layout-independent. Audit 2967/2967 = 100% maintained. count-topic-words-exact.ts rewritten to walk the new tree dynamically; audit-concept-alignment.ts glob re-pointed; 19 historical one-shot codemods retired (git history preserves them) | Tree is now the canonical authoring surface — new lessons go straight into subjects/<book>/<chapter>.ts; QA Ch1 §1.6 Surds & Indices next per working order |
| 2026-11-02 | Housekeeping | Unnecessary files removed per user order: 53 retired one-shot scripts (round14 generators, scrapers, probe/dump/vlm-check/validate/fix/rebuild/x60 families, executed migrations consolidate + subject-wise + reorganize-knowledge-fields + its snapshot verifier, migration-id-map.json artifact, dated counters, tmp- helpers, superseded python structure audits — git history preserves all) + 5 stale unreferenced QA screenshots (coverage/*.png). scripts/ now holds only the standing toolbox: pipeline (serialize-content, build-coverage, build-knowledge-index, exam-coverage-audit, count-topic-words-exact, audit-concept-alignment) + standing audits (verify-counts, words-truth, validate-library, gap-audit, dedupe-knowledge, inventory, subject-depth-stats, subjectdepth-dump-book, lessonbook-ch1-order, library-book-toc, library-org-audit, library-structure-audit, library-discipline-spread) + dev ops (dev-start.sh, dev-watchdog.sh). Tree re-verified clean: 119 subject folders all with index.ts; 366 chapter files all nn-numbered; 18 domain files; attic tidy. knowledge/README.md provenance updated. Audit 2967/2967 = 100% maintained | scripts/ is a clean standing toolbox; QA Ch1 §1.6 Surds & Indices next per working order |
| 2026-11-02 | Library discoverability fix + program re-order | **User bug report: "Quantitative Aptitude, Logical Reasoning, General Awareness as separate books i cant see this in library" — root-caused (all three render, but at y≈9,550px in the 7th of 17 groups, under ~50 cards: a discoverability failure, not a data failure) and fixed: live subject search + 17 group quick-jump chips added to the Library catalog (sticky bar under the app header), browser-verified ("aptitude" → exactly the 3 books; "Life Sciences" chip → 13 subjects; mobile 390 no overflow; console clean).** per the user's new mandate the program is re-scanned and re-ordered: §5 added — the full subject→exam map (all 104 ku-subjects + tracks vs the 59-exam corpus; mathematics 44 / english 33 / chemistry-physics 19 pairs are the deep books; the biology cluster is the biggest exam-driven under-supply at 107 lessons across 13 subjects); §6 added — complete Life Sciences syllabus trees (13 subjects, 107 → 168 lesson target); §4 order updated: **Life Sciences field FIRST** (user directive), aptitude trio resumes after. Opening increment authored: Cell & Molecular Biology new Ch1 Foundations (3 lessons) | Life Sciences cluster IN PROGRESS — ku-cell-molecular-biology Ch1 §1.1–§1.3 authored; §2.2 Organelle Atlas next |
| 2026-11-02 | ku-cell-molecular-biology | Ch2 §2.2 bio-organelle-atlas authored (2,718w verified, secretory-pathway figure, pH-gradient formula, 4-defect diagnosis worked example, quiz 8 w/ explanations); Ch2 reordered to the §6.1 tree (biomolecules → atlas → cytoskeleton → signaling → cycle); exam names scrubbed from biomolecules lesson text; pipeline 104/356/665 → audit 2967/2967 = 100%; lint/tsc clean; lesson QA'd in browser; pushed 57b1fb3 | Cell-Bio Ch2 complete (5/5); next: §3.7 Viruses & Mobile Genetic Elements, then §4.2–§4.3 → MASTERSYLLABUS-DONE check, then ku-biochemistry |
| 2026-11-02 | ku-cell-molecular-biology | Ch3 §3.7 bio-viruses-mobile-genetic-elements authored (4,179w verified exact, 8 concepts/8 paras aligned): Baltimore seven-class map, lambda lytic/lysogenic switch (CI/Cro at OR1-OR3, PRM/PR, RecA co-protease flip) with two-panel SVG figure, RT three-activity chemistry + LTR/integrase provirus, McClintock transposons + RAG1/2 domestication, LINE-1 target-primed reverse transcription + Alu + ERV/syncytin, mobile ecosystem (plasmids/integrons/CRISPR origin/MER41 enhancers), border-of-life (viroids, HDV satellite, prions, giant viruses); MOI Poisson formula + 2 worked examples (MOI arithmetic; three-drug quasispecies jackpot math); zero-repetition carving documented vs micro cycle lesson / immunology / CRISPR / resistance lessons. Pipeline 104/356/666 → coverage 140/895/4,686 → index 701 topics/1,104k words → audit 2967/2967 = 100%; tsc clean, lint clean; lesson browser-verified (TOC §3.7, figure, examples, quiz feedback, console clean) | Cell-Bio Ch3 complete (7/7); next: Ch4 §4.2 Fermentation & Metabolic Integration, then §4.3 Photosynthesis: The Cell-Level View → subject DONE check, then ku-biochemistry |
| 2026-11-02 | ku-cell-molecular-biology | **SUBJECT COMPLETE (18/18).** Ch4 §4.2 bio-fermentation-metabolic-integration (3,952w exact): redox ledger of NAD+ recycling, LDH isozymes + Cori cycle interest arithmetic + Brooks lactate shuttle, ethanol relay (TPP pyruvate decarboxylase, Zn-ADH) + hepatic NADH jam, fermentation portfolio (propionic/Swiss cheese, mixed-acid MR-VP, butanediol, ABE Clostridium, methanogenesis + syntrophy), acetyl-CoA hub (3 fuels → 3 fates), Atkinson energy charge + PFK-2/FBPase-2 F-2,6-BP insulin-glucagon switch + AMPK, anaplerosis + fats-to-glucose dead-end (glycerol/propionate doors), fed/fasted organ division + ketone bridge (DKA mechanism); hub SVG figure + EC formula + 2 worked examples. Ch4 §4.3 bio-photosynthesis-cell-level (4,087w exact, advanced tier): chloroplast topology (grana/lamellae PSII/PSI segregation), antenna + special pairs + Emerson-Arnold 2,500-chlorophyll arithmetic, full Z-scheme (Pheo→QA/QB→PQ→b6f→PC→Fd→FNR), Mn4CaO5 Kok S-states (3rd-flash signature) + proton budget, linear vs cyclic flow ATP:NADPH 1.5-vs-1.35 audit, Calvin thioredoxin light-switch + RuBisCO oxygenase + three-organelle photorespiration relay, cpDNA/TOC-TIC/FtsZ + maternal inheritance, NPQ xanthophyll cycle + state transitions + retrograde signalling; Z-scheme SVG + photon-bill formula + 2 worked examples. Pipeline 104/356/668 → coverage 140/895/4,688 → index 703 topics/1,112k words → audit 2967/2967 = 100%; tsc + lint clean; words-exact 3/3; §6.1 tree marks updated to ✓ | **ku-cell-molecular-biology COMPLETE (4 ch · 18 lessons, 11,540 words of new theory this program)**; MASTERSYLLABUS-DONE check passed; next subject per §4 order: ku-biochemistry §1.8 Nucleotides & Nucleic-Acid Chemistry |
| 2026-11-02 | Salvage reconciliation | Two authoring lines reconciled: the 10:00 scheduled-loop run committed the in-flight session's work (516778a), found origin/main had advanced through the canonical subjects/ tree (reorg + trio retirement + Cell-Bio completion), reset to it (diverged line preserved on branch backup-loop-20261101) and ported the session's 17 unique lessons verbatim into subjects/ (Zoology +3ch/+6ls — Comparative Physiology, Digestion & Metabolism, Reproduction & Life Cycles; Botany +2 vascular-ultrastructure/water-ledger; Marine +2 fish-locomotion/mammal-diving; Bioinformatics +2 genome-assembly/single-cell-spatial; Synthetic Biology +2 CRISPRi-a-toolkit/metabolic-engineering; DevBio +2 Turing-patterns/evo-devo-toolkit; Philosophy +1 pramanas) — commit 5a7a2ac. Reconciliation follow-up (this commit): (1) removed duplicate `import type { KnowledgeTopic }` lines the salvage header-inserter left in the three new Zoology chapter files (tsc had 6 errors → 0); (2) prisma client regenerated (typingResult model, tsc 3 → 0); (3) **alias-first mapping precedence** in curated-exam-map.ts — an authored TOPIC_ALIASES entry is a human-verified mapping and now outranks every fuzzy guess; fixes the verified false positive "Indian logic: means of knowledge" → Differentiation Rules (clamped 0.4), which now maps to ku-phil-pramana-means-of-knowledge at 0.9 via the new alias; (4) pipeline re-verified: 104/359/681, coverage 140/898/4,701, index 716 topics/1,134k words, audit 2967/2967 = 100% 0 unmapped; lint clean; tsc 0 under src/ | Lines merged; hourly loop continues with ku-biochemistry §1.8 per §4 order |
| 2026-11-02 | ku-biochemistry | Ch1 §1.8 bioc-nucleotides-nucleic-acid-chemistry authored by the scheduled loop (word-exact corrected to 2,895w / readMins 14 in the reconcile pass): nucleotide monomer chemistry (pentose numbering, N-glycosidic bond, phosphoanhydride vs phosphoester), ATP charge-transfer energetics, cAMP/ADPR cyclization chemistry, salvage vs de novo synthesis + Lesch-Nyhan arithmetic, Chargaff as compositional fact, Tm/GC relation, AZT chain-termination reference; carved against the molecular-biology DNA lesson, virology, cell-signaling and toolbox lessons | Biochemistry Ch1 complete; pipeline 2967/2967 = 100% maintained |
| 2026-11-02 | ku-biochemistry | **Ch2 LABORATORY METHODS COMPLETE (3/3, 6,600 words).** The hourly loop certified the two lessons the 15-min webDevReview job had authored (commit 35b15a0) but left failing charter bar: declared≠actual counts (§2.2 2,334 vs 2,417; §2.3 2,358 vs 2,197) and no figure plates. Loop work: added the two missing SVG plates (§2.2 fractionation-ladder + rate-zonal/isopycnic gradient figure after concept 6; §2.3 three-methods crystallography/NMR/cryo-EM pipeline figure after concept 5), re-counted word-exact — §2.2 bioc-isotopes-centrifugation 2,510w/13min, §2.3 bioc-structural-methods 2,287w/11min (declared == actual EXACTLY); carving re-verified by dedup greps (isopycnic / rate-zonal / Bragg appear ONLY in this file; vitrif- hits in visual-arts + cell-bio are different senses already carved in the scoping callouts); file header refreshed (3 lessons · ~6,600 words: 1,803 + 2,510 + 2,287). §6.2 tree marks updated. Pipeline 719 topics/1,142k words → audit 2967/2967 = 100% 0 unmapped; lint clean; tsc 0 under src/; both lessons browser-verified (figures render, quiz answered → "Correct. RCF = 1.118 × 10⁻⁵ × 8 × 15,000² ≈ 20,100 g" feedback, console clean, browser closed) | Ch1 + Ch2 = 11/11 lessons live; next per §6.2 tree: Ch3 Metabolic Pathways in Depth — §3.1 Glycolysis Step by Step |
| 2026-11-02 ~22:30 | ku-biochemistry | Ch3 §3.1 bioc-glycolysis-step-by-step authored (3,500w exact / readMins 18 — landed precisely on the 3,500 charter ceiling after trims from a 3,860 first draft; new chapter file subjects/biochemistry/03-metabolism.ts, branch `Metabolism` declared in subject-taxonomy, index.ts wired to 3 ch · 12 lessons): ten-reaction walk with mechanisms (GAPDH Cys-149 thiohemiacetal→thioester→phosphorolysis; class-I Schiff-base vs class-II Zn aldolase; PGM phosphohistidine relay through bound 2,3-BPG; enolase E1cB + 2 Mg²⁺; TPI Knowles diffusion-limit 2×10⁸ M⁻¹s⁻¹), derivation of the two substrate-level pushes from canonical hydrolysis energies (PEP −61.9, 1,3-BPG −49.4 vs ATP 30.5 → PGK −18.9, PK −31.4) and the full ten-step standard ledger (+2.1 preparatory; −37.4 per triose ×2 → −72.7 kJ/mol overall; cellular ≈ −96 in erythrocytes per Chandel 2021, NAD+/NADH ≈ 1,000), two-panel SVG (ten-step two-phase ladder with stations + standard free-energy profile, afterConcept 4), worked examples (ATP ledger 7/32 ≈ 22%; arsenate/fluoride/iodoacetate three-poison diagnostic patterns), regulation (three stations, PFK-1 valve, feed-forward PK, glucokinase Km buffer, Pasteur effect), Rapoport–Luebering shunt + PK-deficiency anaemia, 8-question quiz ≥4 quantitative. Carving by dedup greps (enolase/arsenate/Harden–Young/Rapoport/iodoacetate/thiohemiacetal unique to this file): Cell-Bio respiration lesson keeps the ten-step SURVEY + gas arithmetic; fermentation lesson keeps pyruvate fates/NAD+ relay/F2,6BP switch; bioc-enzymes-kinetics keeps allosteric theory — all cited, not re-taught. Numbers verified against fetched sources (Wikipedia/Lehninger table, Chandel CSH Perspect Biol 2021, PEP/1,3-BPG hydrolysis tables, Harden–Young ester + Nobel 1929, Meyerhof Nobel 1922 via Chandel). Pipeline 720 topics/1,145k words → audit 2967/2967 = 100% 0 unmapped; registries + prerequisite graph rebuilt (PASS, 0 cycles); lint clean, tsc 0 under src/; browser QA: lesson renders, SVG figure renders, quiz answer → Correct feedback, console clean, browser closed | Ch3 1/5 — next §3.2 The Citric-Acid Cycle |
| 2026-11-01 ~18:45 IST (clock-corrected) | ku-biochemistry | Ch3 §3.2 bioc-citric-acid-cycle authored (3,500w exact / readMins 18 — on the charter ceiling after trims from a 3,546 first pass; appended to subjects/biochemistry/03-metabolism.ts, index.ts TOC refreshed, Ch3 now 2 lessons · 7,000 words): PDH gateway at machine level (Reed's 30 E1 / 60 E2 / 12 E3 architecture, 1.4-nm swinging lipoyl arm, five cofactors → vitamins B1/B5/B2/B3, PDK/PDP covalent throttle with Ca²⁺/insulin, arsenite bite), discovery history (Szent-Györgyi 1935 pigeon-muscle C4 catalysis + Nobel 1937, Martius & Knoop 1937, Krebs & Johnson 1937 Enzymologia with malonate + Nobel 1953 shared with Lipmann's 1945 CoA, catalytic-wheel logic), eight steps reaction-by-reaction (citrate synthase induced fit + citryl-CoA thioester pull + sub-μM OAA; aconitase [4Fe–4S] + cis-aconitate; IDH oxalosuccinate rate-limiter; α-KGDH the PDH twin; succinyl-CoA synthetase GTP via His-P relay; SDH covalent FAD + 3 Fe–S clusters = complex II + malonate/Quastel 1927; fumarase anti addition near diffusion limit; MDH +29.7 pulled by step-1 OAA drain + matrix NAD+/NADH ≈ hundredfold more reduced than cytosol), three control stations summary; two-panel SVG (eight-node wheel with C-counts/ΔG°′/outflows + PDH nanomachine, afterConcept 4); derivation grouping the eight standard values → −86.6 pulls + 43.0 climbs − 6.7 ripples = −50.3 kJ/mol per turn, −100.6 per glucose; worked examples (per-glucose carrier harvest 3×2.5+1.5+1=10/turn → 20/32 = 62.5% of a glucose's ATP-equivalents with full arithmetic; carbon audit 2+4=6 CO2 + Ogston 1948 prochirality labeling riddle; malonate/fluoroacetate–lethal synthesis–Peters 1952/arsenite three-poison fingerprints), anaplerosis pointer (Kornberg 1965; integration lesson owns mechanics), 5 applications (CS activity as mitochondrial-density marker, IDH1/2 → 2-hydroxyglutarate oncometabolite Dang 2009, gifblaar/1080 toxicology, cytosolic aconitase iron meter, dimercaprol), 6 pitfalls, 8 key terms, 8-question quiz ≥4 quantitative. Carving by dedup greps (Ogston/malonate/citryl/fluorocitrate/oxalosuccinate/cis-aconitate/2-hydroxyglutarate/lethal synthesis unique to this file): Cell-Bio respiration keeps the survey + ATP audit + FADH2-discount chain logic; fermentation-integration keeps hub/anaplerosis/ketogenesis; Ch1 keeps vitamin logic; §3.1 keeps substrate-level phosphorylation + His-relay concept — all cited. Numbers verified against fetched sources (Wikipedia cycle + PDH articles: eukaryotic 30/60/12+E3BP, Kornberg 1965 Angew Chem 4:558; ΔG°′ table −32.2/+13.3/−20.9/−33.5/−2.9/0.0/−3.8/+29.7). Pipeline 721 topics/1,149k words (tiers 399 core · 270 intermediate · 52 advanced) → audit 2967/2967 = 100% 0 unmapped; registries + prerequisite graph rebuilt (721 nodes · 520 sequence edges, 0 cycles, PASS); lint clean, tsc 0 under src/ (11 pre-existing scripts/examples/skills errors only); browser QA: library search → Biochemistry card 13 lessons, chapter TOC shows §3.2, lesson + figure render, quiz Q1 → "Correct. Pulls −86.6, climbs +43.0, ripples −6.7: total −50.3 per turn.", console clean, browser closed | Ch3 2/5 — next §3.3 Oxidative Phosphorylation & Chemiosmosis |
| 2026-11-01 ~21:00 IST | ku-biochemistry | **Ch3 §3.3 bioc-oxidative-phosphorylation-chemiosmosis certified (takeover).** The 22:30(+08) scheduled run authored the lesson but was cut off before commit/memory — the 23:30(+08) loop found the full lesson + regenerated pipeline data uncommitted in the tree, verified it against the charter, and committed it honestly (5f39191). Lesson: 3,500w EXACT / readMins 18 (count-script OK); 7-question quiz ≥4 quantitative (proton counts, P/O arithmetic, cyanide/oligomycin fingerprints, Q-cycle balance, shuttle cost, Boyer binding-change); two-panel SVG (chain-as-dam with complex proton counts + poison dots; c8-ring ATP-synthase turbine with O/L/T β-cycle); discovery history (Keilin 1925 cytochromes + MacMunn 1884, Belitzer & Tsybakova 1939, Slater's chemical-coupling dead end, Mitchell 1961 two-page Nature + Nobel 1978, Jagendorf & Uribe 1966 acid-bath ATP, Racker & Stoeckenius 1974 bacteriorhodopsin co-reconstitution, Walker 1994 crystal + Boyer binding-change, Nobel 1997); derivation of Δp ≈ 200 mV ≈ four-fifths Δψ from first principles, 10 H+/NADH vs 6 H+/FADH2 → P/O 2.5/1.5 at 4 H+/ATP; worked examples incl. the end-to-end proton ledger with the ATP4−/ADP3− antiport's one-proton fare; shuttles (glycerol-3-P vs malate-aspartate), respiratory control (Chance & Williams), uncouplers/DNP + brown-fat thermogenin, ROS leak, poison map. Carving (dedup-greps + scoping callout): Cell-Bio respiration keeps the chain survey + 30–32 ATP audit + gas arithmetic; energy-economy overview keeps ATP currency chemistry; §3.2 keeps the FADH2-discount setup this lesson cashes; photosynthesis lessons own the chloroplast twin. Certification evidence: full pipeline re-run serialize/coverage/index → 722 topics/1,152k words → audit 2967/2967 = 100% 0 unmapped; lesson shape verified (types.ts quiz shape, figure viewBox, no exam names — "Example" grep hits are the Worked-Example headings only) | Ch3 3/5 — next §3.4 Carbohydrate & Lipid Traffic |
| 2026-11-01 ~21:55 IST | ku-biochemistry | Ch3 §3.4 bioc-carbohydrate-lipid-traffic authored (3,500w EXACT / readMins 18 — landed exactly on the charter ceiling after five trim passes from a 4,189-word first draft; appended to subjects/biochemistry/03-metabolism.ts, index.ts wired 3 ch · 15 lessons, knowledge-meta description auto-updated): liver traffic map (glycogen granule ↔ G6P hub ↔ blood via G6Pase, PPP lane, acetyl-CoA junction), granule machine (Cori & Cori phosphorolysis 1936–37 → G1P; PLP-as-wrench mechanism; glycogenin primer Whelan; synthase/branching enzyme; Sutherland cAMP→PKA→Fischer & Krebs phosphorylase kinase 1955/Nobel 1992 cascade; PP1 insulin arm; Ca²⁺-calmodulin muscle input; transferase+α-1,6-glucosidase debranching; GSD fingerprints von Gierke 1929/Cori III/Hers VI 1959/McArdle V 1951 flat-lactate second wind/Pompe lysosomal), gluconeogenesis (Utter & Keech PC 1960 biotin + acetyl-CoA allostery, PEPCK GTP, FBPase-1, G6Pase ER door; lactate door's NADH self-supply) with the six-bond bill DERIVED step-by-step (2 ATP PC + 2 GTP PEPCK + 2 ATP reversed-PGK = 6 + 2 NADH, hydrolytic bypasses free), PPP (Warburg's Zwischenferment early-1930s G6PD, Horecker 1950s non-oxidative arm, transketolase TPP/transaldolase carbon shuffle 3×C5→2×C6+C3, worked carbon ledger → standard G6P+12 NADP+→6 CO2+12 NADPH equation, G6PD favism/Heinz bodies + Luzzatto 1969 malaria balance), β-oxidation (Knoop 1904 phenyl-tag two-carbon clue, activation toll ATP→AMP = 2 bonds, carnitine tollgate Fritz 1955 + McGarry & Foster 1978 CPT-I/malonyl-CoA brake, four-station spiral FAD→hydratase→NAD+→thiolysis, per-turn 1.5+2.5+10, peroxisomal VLCFA pre-shave, MCAD deficiency + tandem-MS acylcarnitine newborn screening) with the stearate-120 ledger derived (8×1.5+8×2.5+9×10−2, density 6.7 vs glucose 5.0), synthesis mirror workshop (Wakil malonyl-CoA, ACC biotin/citrate/palmitoyl-CoA/AMPK, Vagelos ACP 1964 phosphopantetheine arm, Lynen-lineage stations, citrate-shuttle malic-enzyme rebate) with the 14-NADPH bill derived (8 ME + 6 PPP), malonyl-CoA traffic light synthesis-vs-CPT-I regulation; two-panel SVG (traffic map + four-station spiral, afterConcept 5); 4 worked examples (branch tax 30,000-residue arithmetic incl. 30,000-ATP granule saving + 180,000-bond gluconeogenesis counterfactual; PPP carbon ledger; stearate ledger; NADPH bill), 5 applications (tandem-MS screening, McArdle second-wind, cornstarch therapy, G6PD counselling, metformin→AMPK→ACC), 6 pitfalls, 8 key terms, 8-question quiz ≥4 quantitative. Carving by dedup greps (glycogenin/UDP-glucose/von Gierke/McArdle/transketolase/G6PD/PEPCK/acetyl-CoA carboxylase/glucose-6-phosphatase/malic enzyme/citrate shuttle/acyl-CoA synthetase/Heinz unique to this file; fructokinase hits were phosphofructokinase substrates; carnitine/malonyl/pentose/thiolase/palmitate/glycogen-phosphorylase hits inspected = Ch1 molecule surveys, cell-bio 04.2 one-clause mentions, cell-bio 02 cascade example, or already-carved senses) — integration chapter keeps fed/fasted strategy/Cori arithmetic/F2,6BP/AMPK/ketone bridge (its "six ATP" claim is DERIVED here, cited), Ch1 keeps palmitate-106 survey + carnitine molecule, §3.1–§3.3 own the three combustion lessons. Research verified via web (Knoop 1904, Fritz carnitine, McGarry & Foster 1978 JBC 253:4128, Utter & Keech 1960 via Wallace IUBMB 2010). Pipeline 723 topics/1,156k words → audit 2967/2967 = 100% 0 unmapped; lint clean, tsc 0 under src/ (fixed one tone-literal TS error pre-pipeline); browser QA: Biochemistry card 15 lessons, Ch3 TOC shows §3.4, lesson + figure render, quiz Q1 → "Correct. 2 ATP (PC) + 2 GTP (PEPCK) + 2 ATP (reversed PGK) = 6…", fresh load 0 console errors, 390px overflow 0, browser closed | Ch3 4/5 — next §3.5 Nitrogen Metabolism & the Urea Cycle |
| 2026-11-01 ~23:35 IST | ku-biochemistry | **Ch3 §3.5 bioc-nitrogen-metabolism-urea-cycle authored — SUBJECT COMPLETE.** Master loop job 493829 (no-ceiling payload). Concurrency sweep: git log/status clean at 2f3f7ad (NO-CEILING-1), no foreign work, origin unchanged. Bounded unit per RESUME_POINTER: §3.5 Nitrogen Metabolism & the Urea Cycle, written BORN textbook-quality under the NO-CEILING charter — 6,389 words EXACT (count-topic-words-exact: declared == actual, readMins 32; zero trims, zero padding — genuine teaching length: the first lesson authored without the old 3,500 ceiling). Situation opening (trout/sparrow/mammal three-strategy frame), amino-acid pool + nitrogen-balance arithmetic (0.8 g/kg → 56 g/day → 9 g N), ammonia chemistry (pKa 9.25 → 98.6% NH4+ at pH 7.4) + three toxicity doors (α-KG drain, astrocyte glutamine osmotic swelling, neurotransmitter drift), comparative excretion (ammonotelic/ureotelic/uricotelic + sealed-egg argument) with Wöhler 1828, transamination with full PLP Schiff-base/PMP algebra (Braunstein & Kritzmann 1937, Snell), GDH with the S445L hyperinsulinism–hyperammonemia syndrome (GTP brake, ADP activator), glutamine + alanine ferries (synthetase-vs-synthase suffix rule), the urea cycle station-by-station with the four-bond bill DERIVED (CPS-I 2 + ASS 2 = 4 ≈ "3 ATP", fumarate→MDH refund 2.5 → net ≈ 1.5) and the Krebs-bicycle interlock, NAG/CPS-I feed-forward + carglumic acid, the seven hyperammonemia fingerprints (NAGS/CPS-I/OTC with orotate-up logic/ASS/ASL trichorrhexis/ARG1/ORNT1+citrin), the scavenger ledger (benzoate→hippurate 1 N, phenylbutyrate→phenylacetylglutamine 2 N), lactulose NH4+-trapping therapy, creatine–creatinine (AGAT kidney → GAMT liver → SAM → 1.5%/day creatinine → eGFR), PLP amine messengers; two-panel SVG (nitrogen traffic map + two-door cycle with matrix/cytosol bands and the refund bridge, afterConcept 5); 2 worked examples (100 g protein → 34 g urea + 70 kJ disposal tax; hyperammonemia fingerprint read-out); 8-question quiz ≥4 quantitative; 9 key terms; 6 applications; pitfalls. Carve by dedup greps (carbamoyl/ornithine/citrulline/argininosuccinate/GDH/NAG/urease/creatine/creatinine/deaminat/transamin/encephalopathy/ammonia/urea — all inspected): Ch1 survey keeps carbon-skeleton sorting + one-paragraph overview; Ch1 amino-acids owns ornithine/citrulline identities; enzymes lesson owns ping-pong + CK isozymes; cell-bio 04.2 owns hub/fed-fasted/"nitrogen tax"; lab-methods owns Sumner urease; medtech owns panels/eGFR; zoology owns ruminant recycling; marine-biology owns shark urea ballast; mental-health/immunology own GABA/histamine — all cited in scoping + study path. Research verified via web (chemistryviews Krebs biography: Oct 26/Nov 15 1931, Jan 14 1932 titration 1:20, June 12 1932 submission, Z. physiol. Chem. 210:33–66; StatPearls/Orphanet OTC; Häberle 2011 NAGS/carglumic; Klassa 2025 JIMD scavengers; Grimaldi 2017 S445L; da Silva 2009 creatine; Rose 2013 astrocyte GS). Pipeline: serialize (2,913 live/557 filtered) → coverage (140/899/4,709) → index 724 topics/1,168k words → audit 2967/2967 = 100% 0 unmapped; registries + prerequisite graph rebuilt (724 nodes · 523 edges, 0 cycles, PASS); lint clean; tsc 0 under src/ (11 pre-existing scripts errors); browser QA: Biochemistry card Ch3 "5 complete lessons", chapter TOC §3.5, lesson + figure render (aria-label verified), quiz Q1 → "Correct." + explanation, fresh-load console 0 errors, 390px scrollWidth 390 == clientWidth 390, browser closed. §6.2 marked ✓ + COMPLETE (16/16) | **ku-biochemistry COMPLETE (3 ch · 16 lessons)** — MASTERSYLLABUS-DONE check to run next, then next Life Sciences subject per §4 (ku-genetics-heredity gaps per §6.3) |
| 2026-11-02 ~08:25 IST | ku-genetics-heredity | **DONE CHECK + GAP AUDIT + first new lesson (master loop job 494898, fired 07:17 IST).** Context: user reported "scheduled task hit failure" — root cause was the sandbox rollback, already hard-fixed by RECOVERY-20261102-1 (5cb71ac); this was the first clean post-recovery run (STEP-0 sync 0/0 at 5cb71ac). (1) **ku-biochemistry MASTERSYLLABUS-DONE check PASSED**: 16/16 lessons word-exact via count-topic-words-exact — one flaw found and fixed (bio-biochemistry-metabolism declared 1,244 vs actual 1,217 → declared corrected); recorded in §6.2. (2) **§6.3 gap audit recorded**: 18/24 lessons present, all declared==actual (0 flagged); 6 NEW lessons missing (§2.3 ✓ this run, §4.4 Selection Models, §5.3 Genomics in Medicine, Ch6 Quantitative Genetics ×3); 11 lessons below the 2,000-word floor (thinnest: mendel 975 · crispr 1,169 · population-genetics 1,261) queued for no-ceiling deepening; **zero figure plates subject-wide** — figure gap flagged for the queue. (3) **Ch2 §2.3 bio-structural-chromosome-mutations authored — 5,821 words EXACT / readMins 29** (born textbook-quality, NO ceiling — second no-ceiling lesson, zero trims): Missouri 1930s semisterile-maize opening; two-break rule + three misrepair routes; ISCN notation reading; deletions (Bridges 1917 Deficiency/Notch, pseudodominance, deletion mapping, haploinsufficiency 2.2-cited, contiguous-gene syndromes cri-du-chat Lejeune 1963 5p15.2/.3 + Williams 7q11.23 ELN + 22q11.2 TBX1 via LCR-NAHR, array-CGH rung 3.1-cited); DMD reading-frame worked example (mod-3 arithmetic, Duchenne vs Becker, rule ~90%); duplications (Sturtevant 1925 Bar unequal crossing-over Genetics 10:117, L.V. Morgan 1931, Bridges 1936 16A cytology, NAHR engine distinguished from 2.2's non-allelic non-complementation, opsin diversification cited); inversions (para/peri loop mechanics, Figure 1 two-panel SVG, semisterility DERIVED V = 1 − f/2 with f=0.8→0.6 worked consequence, Sturtevant & Beadle 1936, recombination suppressor, inv(9) 1-3% benign, PEV white-mottled Muller 1930 chromatin-bridge); balancers (CyO stock arithmetic worked example: m/CyO × m/CyO → all Curly adults; 2:1 variant); translocations (quadrivalent Figure 2 SVG, alternate vs adjacent-1/2, ≈half gametes unbalanced crossover-independent, Philadelphia history Nowell & Hungerford 1960 Science 132:1497 243-word abstract + Rowley 1973 Nature 243:290-293 with BCR-ABL/imatinib carved to 3.4, Robertsonian rob(14;21) 45-chromosome carriers 10-15%/1-3% sex-asymmetric risk, McClintock 1941 bridge-breakage-fusion with Ac/Ds biography carved to cell-molecular, human chr-2 fusion cited to evolution, PEV position effects); 12 terms; 6 applications; 6 pitfalls; 8-question quiz ≥4 quantitative (Q1 V=1−f/2 arithmetic, Q3 CyO ratio, Q5 ISCN reading, Q6 rob risk). Carve evidence in file header (all dedup greps inspected; polytene/semisterility/BFB/PEV/NAHR/Nowell/Rowley/Sturtevant-1925/contiguous-gene/Williams/22q11.2/DMD all fresh). Research verified via web (haematologica Nowell-Hungerford history; Rowley 1973 Nature; NLM Profiles McClintock Missouri 1936-41; StudyRare cri-du-chat 5p15.2/.3 10-15% translocation-inherited; inv(9) 1-3% JARG 2019; DMD reading-frame rule ~90%/94% JCN 2017; Williams 1:8,000-12,000 ELN; Sturtevant 1925 Genetics 10). Pipeline: serialize 2,914 live → coverage 140/899/4,710 → index 725 topics/1,174k words → audit 2967/2967 = 100% 0 unmapped; registries + prerequisite graph rebuilt (725 nodes · 524 edges, 0 cycles, PASS); lint clean; tsc 0 under src/ (also un-blocked 3 pre-existing src/app/api/typing errors by regenerating the Prisma client the rollback had wiped). Browser QA: dev server repeatedly reaped by the memory watchdog after compiles — QA passed on a warm-cache retry (new standing script scripts/qa-retry.sh): lesson renders full (116 SVGs, 50k chars), Ch2 shows "3 complete lessons", book shows 19 lessons, quiz Q1 → "Correct. V = 1 − f/2 with f = 0.8 gives V = 0.6…", fresh-load console 0 errors, 390px scrollWidth 390 == clientWidth 390, browser closed | **ku-genetics-heredity 5 ch · 19/24 lessons** — next NEW per tree order: §4.4 Selection Models & Fitness Arithmetic, then §5.3, then Ch6 ×3; thin-lesson deepenings + figure gap queued |
