# Knowledge Universe — source tree

Every lesson in the Knowledge Universe lives here, arranged **field-wise →
subject-wise → chapter-wise**, mirroring exactly what the Library renders.

```
src/data/knowledge/
  index.ts                     public exports (consumed by serialize-content.ts)
  types.ts                     the KnowledgeTopic / block contracts
  subject-taxonomy.ts          canonical subjects + chapter match rules
  dedup.ts                     topics already explained elsewhere (filtered)
  subjects/
    <subject-key>/             ONE folder per canonical subject book
      index.ts                 the subject's topics (book TOC order)
      <nn>-<chapter>.ts        one file per chapter — the lessons themselves
  domains/
    <nn>-<field>.ts            18 field files — assemble each field's topics
                               from the subject books via domain routing
```

## How the pieces fit

- A **lesson** is a `KnowledgeTopic` object (id, title, field, branch, blocks…).
- Its **subject** is decided by `subject-taxonomy.ts`: the subject whose
  `ownFields` contains the topic's `field` (fallback: whose chapter
  `branches` contain the topic's `branch`).
- Its **chapter** is the subject's chapter whose `fields`/`branches` match.
- Its **field** (domain) is the topic's `domain` string — the domain files
  in `domains/` pull each subject's topics into the right field shelf.

## Adding a lesson (checklist)

1. Pick the subject book folder in `subjects/`; pick (or create) the chapter
   file `<nn>-<chapter-slug>.ts`. New chapter? Register it in
   `subject-taxonomy.ts` (with `fields`/`branches` match rules) and add the
   file to the subject's `index.ts`.
2. Author the lesson in the house format (see any chapter file). Ids are
   kebab-case, globally unique, stable forever.
3. Check `dedup.ts` + `coverage/COVERAGE.md` first — never duplicate a topic
   that another Library book already teaches.
4. Run the pipeline:
   ```bash
   bun run scripts/serialize-content.ts
   bun run coverage
   bun run scripts/build-knowledge-index.ts
   bun run scripts/exam-coverage-audit.ts   # must stay 2967/2967 = 100%
   ```

## Provenance

This tree was generated on 2026-11-02 by `scripts/reorganize-knowledge-fields.ts`
from the legacy flat pass files (`fields/x…-pass.ts`, 87 files) with a
verified guarantee: every lesson's source text moved verbatim, and the
serialized registries (`knowledge-meta.json`) came out byte-identical.
