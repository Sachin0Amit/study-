# DISCOVERY BACKLOG — StudyVerse

Prioritized per governing spec PART 12 (academic importance → affected subjects →
exam relevance → prerequisite importance → implementation cost). Updated each
execution; items move to WORKLOG.md when done. Priority: P0 blocker · P1 core ·
P2 high-value · P3 expansion.

## P1 — Writing program (the standing queue)

| # | Item | Why | Status |
|---|---|---|---|
| 1 | ku-biochemistry completion (Ch1 done; Ch2–Ch4 laboratory methods, metabolism, regulation) | §4 order; biggest exam-driven under-supply cluster (Life Sciences 107→168 target) | IN PROGRESS |
| 2 | Remaining Life Sciences subjects per §6 trees (Botany, Genetics, Microbiology, Physiology, Marine, DevBio, Evolution, Ecology, Bioinformatics, Synthetic Bio, Marine…) | 13-subject cluster, exam-mapped | QUEUED |
| 3 | Aptitude trio completion (QA/LR/GA — first 2 chapters of each seeded) | UPSC/SSC/CAT/CUET demand; trio split left gaps | QUEUED |
| 4 | Remaining §4 subjects (mathematics 44-lesson book, english 33, chemistry/physics pairs) | Deep books with the most exam surface | QUEUED |

## P1 — System increments

| # | Item | Why | Status |
|---|---|---|---|
| 5 | Topic-level `prerequisites` field on KnowledgeTopic (author-declared, validated against registry ids by build-prerequisite-graph) | Spec PART 2.3: lessons must not silently assume absent prerequisites; derivation-level edges alone are partial | PROPOSED |
| 6 | Surface prerequisite chain + coverage stats in the app UI (lesson "before this lesson" panel; exam coverage badges) | Spec PART 2.3/9 visibility for learners | PROPOSED |
| 7 | L0–L6 fine-grained level tags (currently tier core/intermediate/advanced ≈ L0–L2/L3–L4/L5–L6) | Spec PART 5 ladder | PROPOSED |

## P2 — Research & expansion

| # | Item | Why | Status |
|---|---|---|---|
| 8 | New-region exam discovery (Europe national systems, Middle East, Africa, Latin America beyond Brazil) | Spec PART 2.2 "explore where relevant"; currently 10 regions + Global | PROPOSED |
| 9 | Textbook comparison layer for the deep books (shared concepts / unique chapters / rigor differences per spec PART 4) | Consolidated-curriculum justification, currently implicit | PROPOSED |
| 10 | Assessment coverage tracking (practice-question counts per syllabus entry, not just lesson mapping) | Spec PART 9 distinguishes content vs assessment coverage | PROPOSED |
| 11 | Ongoing: review `syllabusVerified` dates older than 12 months against official pages | Spec PART 2.4 freshness | RECURRING |

## P3 — Later

| # | Item | Why |
|---|---|---|
| 12 | Research-frontier expansion pass on advanced-tier topics (L6 material: open problems, seminal papers) | Spec PART 5 L6 |
| 13 | Interdisciplinary connection map (cross-subject edges beyond prerequisites) | Spec PART 3 "connections with other disciplines" |
| 14 | Public API route exposing registries (machine-readable /api/project/registries) once stable | Ecosystem |

## Done (moved from above)

- 2026-11-02: PART-14 memory systems, source inventory, registries, coverage
  report, prerequisite graph, cron re-pointing (this execution — see WORKLOG.md).
