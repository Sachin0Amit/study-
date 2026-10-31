# Attic — superseded drafts (never wired)

Files here are authored-but-unpublished lesson drafts kept for future
gap-filling. They are **not imported anywhere** and are excluded from the
serialize pipeline on purpose.

| File | Why it is here | Revivable lessons |
| --- | --- | --- |
| `x17-cuet-gap-superseded.ts` | X17 CUET-gap draft; two of its five topics have live twins with the same ids (X18 pass / X17 exam-syllabus), so the file can never be wired as-is | `hist-india-through-sources`, `hist-peasants-zamindars-towns`, `pol-world-order-cold-war` |

## Reviving a draft

1. Rename the topic ids (the old ones may collide with live lessons).
2. Re-carve the prose against the current live neighbours (zero-repetition
   rule — check `../dedup.ts` and `coverage/COVERAGE.md`).
3. Append the lesson to the matching chapter file under `../subjects/`.
4. Run the pipeline:

   ```bash
   bun run scripts/serialize-content.ts
   bun run coverage
   bun run scripts/build-knowledge-index.ts
   bun run scripts/exam-coverage-audit.ts   # must stay 2967/2967 = 100%
   ```

**Never** import attic files from live code.
