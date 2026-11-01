# PROJECT MASTER PLAN — StudyVerse

**Governing specification:** `upload/Pasted Content_1793528602847.txt` — "STUDYVERSE — UNIVERSAL
MASTER AUTONOMOUS AGENT PROMPT" (user-installed 2026-11-02; supersedes the older
"INFINITE LEARNING UNIVERSE" prompt, which is retained in upload/ as history).
This plan translates that specification onto this repository's actual architecture.
Where the spec suggests structures that already exist here in another form, the
existing system is kept and referenced — never duplicated (spec PART 10/14).

---

## 1. Mission

Transform StudyVerse into a continuously expanding, academically rigorous global
knowledge engine: every major discipline, from absolute beginner (L0) to research
frontier (L6), with worldwide examination traceability, dependency-aware teaching,
version-tracked sources, and scheduled autonomous execution.

## 2. The two content universes

| Universe | What it is | Authoring surface | Registry |
|---|---|---|---|
| **Masters Library** | 140 subjects · 36 textbooks (Halliday, Young, CLRS, Mano…) · 898 chapters · 4,702 sections | `src/data/content/*.ts` + `src/data/library-parts/**` | `coverage/coverage.json` (built by `scripts/build-coverage.ts`) |
| **Knowledge University (ku-)** | 18 domains · 104 books · 338 chapters · 719 topics · 1.11M words (399 core / 268 intermediate / 52 advanced) | `src/data/knowledge/subjects/<subject-key>/<nn>-<chapter>.ts` (canonical since the field-wise reorg) | `docs/project/registries/TOPIC_REGISTRY.json` + `SUBJECT_REGISTRY.json` |

Both render in the app Library. The exam engine maps official syllabus entries to
BOTH universes (masters chapters + ku lessons).

## 3. Five mandatory improvements → standing workstreams (spec PART 2)

| # | Workstream | System | Status |
|---|---|---|---|
| 2.1 | **Library-to-Repository traceability** | `scripts/source-inventory.ts` → `docs/project/SOURCE_INVENTORY.json`; every user-provided source (upload/), every generated asset (public/diagrams) with dedupe groups, VLM-verified image classifications, incorporation status | ✅ built 2026-11-02 |
| 2.2 | **Global examination coverage** | 59 curated exams (`src/data/exams/**`, official sources + `syllabusVerified` dates) → `scripts/build-project-registries.ts` → `EXAMINATION_REGISTRY.json` + `COVERAGE_REPORT.json` (per-exam syllabus-entry coverage, machine-readable) | ✅ built 2026-11-02 |
| 2.3 | **Dependency-aware teaching** | `scripts/build-prerequisite-graph.ts` → `PREREQUISITE_GRAPH.json`: chapter-sequence edges, lesson order, tier ladder, derivation-level prerequisite resolution, cycle detection | ✅ built 2026-11-02 |
| 2.4 | **Research freshness & version tracking** | `RESEARCH_VERSION_LOG.json` (source documents, syllabus verification dates, supersessions) + per-exam `syllabusVerified` + per-topic `addedOn` | ✅ built 2026-11-02 |
| 2.5 | **Scheduled execution & persistent resumption** | `RESUME_POINTER.json` + hourly cron "StudyVerse Master Loop" (job 492782, re-pointed to this plan) + 15-min webDevReview loop | ✅ live |

## 4. Learning levels (spec PART 5)

Knowledge topics carry `tier`: `core` (≈L0–L2) → `intermediate` (≈L3–L4) → `advanced`
(≈L5–L6). The prerequisite graph records the tier ladder per subject so future
level-expansion (finer L0–L6 tags) has a base to build on.

## 5. Content pipeline (invariant — must stay green after every change)

```
bun scripts/serialize-content.ts      # subjects tree → content.json
bun scripts/build-coverage.ts         # library registry
bun scripts/build-knowledge-index.ts  # exam→knowledge index
bun scripts/exam-coverage-audit.ts    # MUST print 2967+/2967+ = 100%, 0 unmapped
bun scripts/count-topic-words-exact.ts <topic-id>   # declared == actual EXACTLY
bun run lint && bunx tsc --noEmit     # clean
```

Registries rebuild: `bun scripts/source-inventory.ts && bun scripts/build-project-registries.ts && bun scripts/build-prerequisite-graph.ts`

## 6. Quality rules (spec PART 6/7/8/15 — enforced)

- Depth bar: **NO upper word limit** (user directive 2026-11-02 — as elaborative as
  teaching requires, floor 2,000 words/lesson), textbook style per
  `docs/project/TEXTBOOK-QUALITY-DIRECTIVE.md`, worked examples with full arithmetic,
  named researchers/dates, SVG figure plates, derivations, 6–10-question quizzes with
  explanations (full charter: `docs/syllabus/MASTER-SYLLABUS.md` §0).
- **Dedup before authoring** (spec PART 8): grep the tree for distinctive terms,
  inspect every hit, CARVE against the owning lesson — cite, never re-teach.
- Lesson text never contains exam names.
- Word counts: `declared == actual` strict; `readMins = round(words/200)`.
- Never fabricate syllabi, books, ISBNs, or sources. Mark unavailable as unavailable.
- No exam is "fully covered" because its subjects exist — coverage is measured per
  official syllabus entry (that is what COVERAGE_REPORT.json records).

## 7. Writing program

`docs/syllabus/MASTER-SYLLABUS.md` remains the curriculum program: §4 subject order,
§5 subject→exam map, §6 syllabus trees, §7 append-only progress ledger. The hourly
master loop advances it one bounded unit per run.

## 8. Scheduled execution (spec PART 2.5)

| Job | Cadence | Purpose |
|---|---|---|
| StudyVerse Master Loop (492782) | hourly | Reads RESUME_POINTER.json → executes the next highest-priority unit (writing program / registry refresh / gap audit) → validates → updates pointer + ledger → commits & pushes |
| webDevReview | every 15 min | QA via agent-browser, bug-fix priority, then autonomous feature/styling increments |

Concurrency protocol: both jobs work in this repo. Every run starts with
`git status` / `git log` — commit or honestly stash uncommitted work found, never
mix lines, never `bun run build`.

## 9. File map of this memory (spec PART 14)

| File | Role |
|---|---|
| `PROJECT_MASTER_PLAN.md` | this document — the governing plan |
| `PROJECT_STATUS.md` | current phase + corpus snapshot (regenerated each execution) |
| `WORKLOG.md` | append-only execution log |
| `DISCOVERY_BACKLOG.md` | prioritized backlog with justifications |
| `RESUME_POINTER.json` | the exact resume state — read FIRST by every execution |
| `RESEARCH_VERSION_LOG.json` | source-document versions, verification dates, supersessions |
| `SOURCE_INVENTORY.json` | every user source + generated asset, traceability chain |
| `registries/SUBJECT_REGISTRY.json` | both universes' subjects with counts |
| `registries/TOPIC_REGISTRY.json` | every knowledge topic (stable ids) |
| `registries/EXAMINATION_REGISTRY.json` | every curated exam with coverage stats |
| `registries/TEXTBOOK_REGISTRY.json` | every library book |
| `registries/COVERAGE_REPORT.json` | per-exam syllabus-entry coverage (the gap finder) |
| `registries/PREREQUISITE_GRAPH.json` | dependency graph + validation report |

## 10. Execution report duty (spec PART 17)

Every execution (manual or scheduled) appends to `WORKLOG.md` and updates
`RESUME_POINTER.json`, then reports: summary / repository changes / research
evidence / QA results / coverage delta / remaining work / resume info. Honest
numbers only — never exaggerate progress.
