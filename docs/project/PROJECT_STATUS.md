# PROJECT STATUS — StudyVerse

**Snapshot date:** 2026-11-01 (regenerated at each execution — see WORKLOG.md for deltas)

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
| Knowledge University domains / books / chapters / topics | 18 / 104 / 360 / 723 |
| Knowledge words (sum of topic word counts) | ≈1,156,000 |
| Topic tiers | 399 core · 270 intermediate · 52 advanced |
| Curated exams / official syllabus entries | 59 / 2,967 |
| Exam regions covered | India, USA, UK, Global, Europe, Australia, Canada, Singapore, Japan, China, South America |
| Syllabus-entry mapping (audit) | 2,967 / 2,967 = 100%, 0 unmapped |
| User source files inventoried | 20 (3 unique documents + 2 screenshots after dedupe) |

## Writing program state (from MASTER-SYLLABUS.md §7 ledger)

- ku-cell-molecular-biology: **COMPLETE** (4 ch · 18 lessons)
- ku-zoology: 5 ch · 11 lessons (Comparative Physiology, Digestion & Metabolism, Reproduction & Life Cycles authored)
- ku-biochemistry: Ch1 + Ch2 **COMPLETE** (11 lessons — incl. §1.8 nucleotide chemistry 2,895w; §2.2 isotopes/centrifugation 2,510w and §2.3 structural methods 2,287w with figure plates); Ch3 Metabolism 4/5 — §3.1 glycolysis 3,500w, §3.2 citric-acid cycle 3,500w, §3.3 oxidative phosphorylation 3,500w (takeover-certified) and §3.4 carbohydrate & lipid traffic 3,500w — all word-exact with figure plates, derivations and worked-example ledgers; §3.5 next
- 13-subject Life Sciences cluster in progress (107 → 168 lesson target), then the
  aptitude trio (Quantitative Aptitude, Logical Reasoning, General Awareness —
  first 2 chapters of each seeded), then remaining §4 subjects.

## Systems health

| System | State |
|---|---|
| Content pipeline (serialize → coverage → index → audit) | ✅ green, 2,967/2,967 = 100% mapped (masters 2,413 · ku 554) |
| lint / tsc | ✅ clean / 0 errors under src/ (new scripts clean) |
| Dev server (:3000) | ✅ running (watchdog auto-recovers OOM restarts ~90 s) |
| Hourly master loop (cron 492782) | ✅ live — prompt re-pointed to PROJECT_MASTER_PLAN workflow |
| 15-min webDevReview loop | ✅ live |
| Registries (docs/project/registries/) | ✅ 5 registries + prerequisite graph (721 nodes · 520 sequence edges · 12 verified declared edges · validation PASS) |
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
- The 4 GB sandbox occasionally OOM-restarts the dev server; the watchdog
  recovers it. Browser verification must poll patiently and close when done.
