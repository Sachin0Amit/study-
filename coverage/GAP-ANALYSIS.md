# StudyVerse Content Gap Analysis — 2026-10-18 (pre-expansion)

> **Purpose.** The user mandate: *"expand content depth, increase chapters and
> lessons — but before that, analyse what is already there, with no repetition
> of the same thing."* This document is that analysis. It was produced by
> auditing the FULL live registry (`bun run coverage` → 164 subjects · 752
> chapters · 4,280 sections) plus every Knowledge-Universe field file, and
> grep-verifying each candidate new topic against `coverage/COVERAGE.md` and
> the master subject section lists.

## 1. What exists today (the inventory)

Full machine-generated inventory: `coverage/INVENTORY-FULL.md` (every chapter +
section title, grouped by library section). Summary by group:

| Library section | Subjects | Chapters | Sections (lessons) |
|---|---|---|---|
| Foundations | 5 | 170 | 1778 |
| Programming & Software | 6 | 135 | 753 |
| Computing Systems | 8 | 124 | 573 |
| Electronics & Communication | 7 | 46 | 420 |
| Mechanical & Energy | 7 | 40 | 277 |
| Electrical & Power | 4 | 25 | 235 |
| Life Sciences (KU) | 13 | 19 | 25 |
| Languages & World Literature (KU) | 15 | 22 | 25 |
| Social Sciences (KU) | 10 | 23 | 23 |
| Everyday Knowledge (KU) | 8 | 17 | 22 |
| Humanities (KU) | 5 | 16 | 21 |
| Arts & Culture (KU) | 13 | 21 | 21 |
| Business & Economics (KU) | 11 | 19 | 20 |
| Health & Wellness (KU) | 10 | 17 | 19 |
| Physical Sciences (KU) | 5 | 7 | 14 |
| Environment & Sustainability (KU) | 9 | 12 | 12 |
| Law & Governance (KU) | 7 | 12 | 12 |
| Technology & Applied Science (KU) | 6 | 9 | 10 |
| Foundation Learning (KU) | 4 | 6 | 8 |
| Emerging & Interdisciplinary (KU) | 7 | 7 | 7 |
| Engineering Science (KU) | 4 | 5 | 5 |

**Diagnosis.** The six master groups are deep (1778 → 235 lessons each). The
fifteen Knowledge-Universe groups are WIDE (164 subjects) but SHALLOW: most
subjects hold only 1–3 lessons. The thinnest master subjects are English
(15 sections), Mechanics & Graphics (22), Aptitude (26), Electromagnetics (34),
Solids & Materials (36).

## 2. Candidates REJECTED during analysis (already covered — zero-repetition rule)

These were considered and **cut** because grep proved they already exist:

- Enzymes / protein structure / nucleic acids → Chemistry master `chem-ch10`
  (Biomolecules: Carbohydrates & Proteins, Vitamins, Nucleic Acids) and `chem-ch43`.
- Refrigeration / HVAC → master `me-e-rac` (7 sections) + `tf-exergy`.
- Blockchain / crypto → master `cse-e-blockchain` (4 sections) + `cs-blockchain-consensus`.
- Radar → master `ece-e-microwave-radar`. Sonar/ultrasound imaging → tech-applied
  "Seeing Inside: Ultrasound, X-Ray and CT".
- Telescopes (optics) → physics master `hall-ch34` (Microscopes and Telescopes) +
  `coletta-ch25`.
- Vibrations → master `me-e-tom2` (Gyroscopes & Vibrations; Vibrations).
- Tribology → master `md-tribology` (6 sections).
- Human rights → law-governance "Human Rights After 1948" (exists).
- International treaties → law-governance "How International Treaties Actually Work".
- Tax law → law-governance "Tax Law: Brackets, Deductions and Audits".
- Mandarin / more language foundations → languages-literature already carries
  Spanish, Japanese, French, Mandarin, German, Hindi, Arabic, Korean, Russian.
- Poetry prosody/meter science → phonetics "Prosody: The Melody of Speech" +
  literary devices (poetry FORMS are still missing — see below).
- Vibration/spectroscopy, personality-as-"big data", demography-as-geography —
  adjacent-but-distinct cases resolved case-by-case below.

## 3. Expansion plan of record (verified non-overlapping)

### Track A — Master subject deepening (+8 chapters, +28 lessons)

| Agent | Subject | New chapters | New sections |
|---|---|---|---|
| M1 | English & Comprehension (15→25 sec) | Ch6 Advanced Grammar & Usage (4), Ch7 Vocabulary Architecture (3), Ch8 Reading & Writing at Length (3) | 10 |
| M2 | Electromagnetics (34→42 sec) | Ch4 EMC & EMI (4), Ch5 Computational Electromagnetics (4) | 8 |
| M3 | Solids & Materials (36→42) + Mech & Graphics (22→26) | Composites (3), FEM for Solids (3); Analytical Mechanics: Lagrange & Hamilton (4) | 10 |

### Track B — Knowledge-Universe lesson deepening (+66 topics = 66 new lessons)

| Agent | File(s) | New topics |
|---|---|---|
| K1 | life-sciences (+8), emerging-interdisciplinary (+3) | Food Webs & Trophic Cascades; Biomes; The Synapse; Neuroplasticity; Endocrine System; Brain Anatomy; Autoimmunity & Allergy; Cell Cycle & Mitosis · Space Settlement; Digital Twins; Brain–Computer Interfaces |
| K2 | health-wellness (+5), social-sciences (+6) | Aerobic Fitness (VO₂ max); Skin Health; Bone Health & Osteoporosis; Hearing & Ear Health; Pregnancy & Childbirth · Big Five Personality; Intelligence & IQ; Social Networks; Crime & Deviance; Demographic Transition; Conformity & Obedience |
| K3 | environment (+6), engineering (+6) | Solar Energy; Wind Energy; Plastics; Recycling Systems; Water Pollution; Extreme Weather Attribution · Earthquake Engineering; Tunnels; Dams; Separation Processes; Additive Manufacturing; Pipelines |
| K4 | humanities (+5), physical-sciences (+4) | The Cold War; Islamic Golden Age; Aesthetics; Norse Mythology; Age of Revolutions · Space Weather; Earth's Interior; Physics of Sports; Timbre & Harmonics |
| K5 | everyday-practical (+5), business-economics (+4), foundation-learning (+3) | Coffee & Tea Science; Budgeting; Buying a Home; Home Fermentation; Digital Privacy · Stocks & Bonds; Growth & Development Economics; Labor Markets; Auctions & Market Design · Habits & Motivation; Metacognition; Reading Research Papers |
| K6 | law-governance (+3), languages-literature (+4), arts-culture (+4) | Substantive Criminal Law; IHL: Rules of War; Legal Reasoning (IRAC) · The Novel; Translation; Sign Languages; Conlangs · Comedy Craft; Video Game Design; Poetry Forms; Street Art |

### Track C — Advancement

- **A1: Review Mode** — spaced-repetition flashcards (SM-2) generated from every
  lesson's quiz + key concepts, with a Review hub, due-today queue, session
  player and streak stats. First repetition-system feature in the app; pairs
  with the existing "Spaced Repetition and the Forgetting Curve" lesson.

**Projected totals after this pass:** ~172 subjects · ~760 chapters · ~4,374
sections (4,280 + 66 KU + 28 master). Coverage registry is regenerated after
the pass; this document stays as the audit trail of what was checked.

## 4. Ground-truth discovery — the stub layer (2026-10-18)

`public/data/content.json` carries only **2,461 live lessons** for 4,280
catalog sections → **1,819 sections are title-only stubs** (chapter/section
metadata with no authored SectionContent). Consequences for the zero-repetition
audit:

- `mfg-additive` (master AM chapter, 6 sections) and `mech-modeling-s5`
  (Digital Twins section) are STUBS — titles only, nothing explained.
  The new KU lessons `eng-additive-manufacturing-3d-printing` and
  `em-digital-twins-mirror-worlds` are therefore the only REAL lessons on
  those subjects. **Kept.** Future work that fills these master stubs must
  merge/dedup against the KU lessons (or convert the stubs to pointers).
- Lagrange/Hamiltonian grep hits are Lagrange multipliers (calculus),
  Lagrange interpolation (numerics) and the Hamiltonian matrix (QM) — NOT
  analytical mechanics. The planned mech-graphics chapter is safe.
- Re-verified with correct regex (earlier `\|` greps were grep-ism false
  negatives): game design, food webs/trophic, Big Five/personality, space
  weather/solar wind, word roots, brain–computer interfaces, sign languages,
  conlangs — all confirmed NOT covered anywhere.
- The stub layer itself is the largest future depth target: filling
  high-value stub sections (especially in the engineering masters) is the
  natural next expansion frontier after this pass.
