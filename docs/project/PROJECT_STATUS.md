# PROJECT STATUS — StudyVerse

**Snapshot date:** 2026-11-02 (regenerated at each execution — see WORKLOG.md for deltas)

## Current phase

**Phase B — systems-complete, writing program in motion.**
The master-spec audit (2026-11-02) installed the five mandatory improvement
systems (traceability, examination coverage, prerequisite graph, version
tracking, scheduled resumption). The hourly master loop now advances the
Life Sciences writing program per `docs/syllabus/MASTER-SYLLABUS.md` §4/§6.

## Corpus snapshot (measured, not estimated)

| Metric | Count |
|---|---|
| Masters Library subjects / books / chapters / sections | 140 / 36 / 899 / 4,708 |
| Knowledge University domains / books / chapters / topics | 18 / 104 / 360 / 725 |
| Knowledge words (sum of topic word counts) | ≈1,174,000 |
| Topic tiers | 399 core · 270 intermediate · 52 advanced |
| Curated exams / official syllabus entries | 59 / 2,967 |
| Exam regions covered | India, USA, UK, Global, Europe, Australia, Canada, Singapore, Japan, China, South America |
| Syllabus-entry mapping (audit) | 2,967 / 2,967 = 100%, 0 unmapped |
| User source files inventoried | 20 (3 unique documents + 2 screenshots after dedupe) |

## Writing program state (from MASTER-SYLLABUS.md §7 ledger)

**Pedagogical quality program (2026-11-02, textbook directive):** a second scheduled loop
now rewrites weak LIVE lessons to textbook standard — mathematics-unified first (audit:
28 topics, 6 dedup-excluded, 22 live, previously zero figures subject-wide), then every
subject to the end of the library. Governing spec `docs/project/TEXTBOOK-QUALITY-DIRECTIVE.md`;
queue + run log in `docs/project/TEXTBOOK_REWRITE_LEDGER.md`. First unit done:
§76.1 Percentage, Ratio & Mental Math 883 → 2,811 words (figure plate + derived
successive-changes formula + 3 worked examples + 8-question quiz).

- ku-cell-molecular-biology: **COMPLETE** (4 ch · 18 lessons)
- ku-zoology: 5 ch · 11 lessons (Comparative Physiology, Digestion & Metabolism, Reproduction & Life Cycles authored)
- ku-biochemistry: **COMPLETE — MASTERSYLLABUS-DONE check PASSED 2026-11-02** (3 ch · 16 lessons, all word-exact incl. §3.5 nitrogen metabolism & the urea cycle 6,389w, the first NO-CEILING lesson)
- ku-genetics-heredity: 5 ch · **19 of 24** lessons (§6.3 gap audit 2026-11-02; Ch2 §2.3 Chromosome Mutations: Deletions to Inversions authored 5,821w no-ceiling; remaining NEW: §4.4 Selection Models, §5.3 Genomics in Medicine, new Ch6 Quantitative Genetics ×3; then 11 thin lessons < 2,000 floor + zero-figure gap to fill)
- 13-subject Life Sciences cluster in progress (107 → 168 lesson target), then the
  aptitude trio (Quantitative Aptitude, Logical Reasoning, General Awareness —
  first 2 chapters of each seeded), then remaining §4 subjects.

## Systems health

| System | State |
|---|---|
| Content pipeline (serialize → coverage → index → audit) | ✅ green, 2,967/2,967 = 100% mapped (masters 2,413 · ku 554) |
| lint / tsc | ✅ clean / 0 errors under src/ (new scripts clean) |
| Dev server (:3000) | ✅ running (watchdog auto-recovers OOM restarts ~90 s) |
| Hourly master loop (cron 494898, recreated after the 2026-11-02 rollback incident with STEP 0 anti-stale sync) | ✅ live — first firing completed 2026-11-02 ~08:25 IST |
| 15-min webDevReview loop | ✅ live |
| Registries (docs/project/registries/) | ✅ 5 registries + prerequisite graph (725 nodes · 524 sequence edges · validation PASS) |
| Source inventory | ✅ 58 records: 20 user files (4 unique after md5 dedupe) + 38 diagram assets (22 referenced) — 0 pending inspection |

## Known limitations (honest)

- Syllabus-entry "mapped" ≠ "taught at exam depth": mapping confirms a lesson
  genuinely teaching the entry exists; depth is the writing program's ongoing work
  (that is what the tier ladder + word counts track).
- Derivation-level prerequisites: 46 phrases → 12 verified cross-topic edges
  (4 ku + 8 masters, all curated/exact), 25 classified lesson-internal, **9
  unresolved** — the honest missing-prerequisite queue in
  PREREQUISITE_GRAPH.json (backlog item 5 adds author-declared topic-level
  prerequisites going forward).
- The 4 GB sandbox OOM-reaps the dev server after heavy compiles (observed 2026-11-02:
  repeated reaping mid-QA). Standing workaround: scripts/qa-retry.sh (restart →
  curl-warm route → browse immediately → retry until full render → close browser).
  After any sandbox rollback also run `bunx prisma generate` (the generated client
  is wiped; TypingResult errors under src/app/api/typing are the tell).
