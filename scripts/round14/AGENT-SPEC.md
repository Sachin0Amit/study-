# Round 14 Content Agent Spec — CLRS / Halliday / Stroustrup books

You are writing textbook content files for the StudyVerse platform. Read this spec fully, then do your assigned chapters.

## Context (do this first, ~2 minutes)
1. `tail -80 /home/z/my-project/worklog.md` — what previous agents did.
2. Read your chapter + section structure in `src/data/library-parts/<clrs|halliday|cpp>.ts` — the `sectionId`s, titles and descriptions there are EXACTLY what your content must target. Do not invent different IDs.
3. Read ONE existing content file as the shape reference — `src/data/content/os-ch01.ts` (first ~200 lines) or `src/data/content/phys-ch01.ts`.

## What you write
One file per chapter: `src/data/content/<prefix>-ch<N>.ts` exporting
`export const <prefix>Ch<N>Content: SectionContent[]` (e.g. `clrsCh7Content`, `hallCh3Content`, `cppCh16Content`).

Each element is a `SectionContent` (import the type: `import type { SectionContent } from '../library'`):

```ts
{
  sectionId: '<exact id from parts file>',   // e.g. 'clrs-ch7-s1'
  readingTime: 5,                             // minutes 4–9
  intro: '2–4 sentences that motivate and frame the section',
  objectives: ['…', '…', '…'],                // exactly 3
  concepts: [                                 // 3–5 per section
    { term: 'Heap property', kind: 'definition', statement: '**Every parent dominates its children.** The formal statement…', detail: 'optional 1–2 more sentences' },
  ],
  figures: [                                  // OPTIONAL but wanted: ~1 per 2 sections
    { caption: 'Figure caption with $c = \\sqrt{a^2+b^2}$', svg: '<svg viewBox="0 0 400 200" …>…</svg>', afterConcept: 2 },
  ],
  examples: [                                 // 1–2 per section, real worked numbers
    { title: '…', problem: '…', steps: [{ label: 'Step', text: '…' }, …], result: '…' },
  ],
  keyTakeaways: ['…', '…', '…'],              // 3
  quiz: [                                      // 3–4 per section, 4 options each
    { q: '…', options: ['A', 'B', 'C', 'D'], answer: 0, explanation: 'why' },
  ],
  depth: [                                     // OPTIONAL: only for 1–2 flagship sections per agent
    { tier: 'masters', title: '…', blocks: [{ kind: 'theorem', heading: '…', body: '…' }] },
  ],
}
```

`Concept.kind` ∈ 'definition' | 'theorem' | 'law' | 'method' | 'notation' | 'insight'.
`DepthBlock.kind` ∈ 'para' | 'theorem' | 'proof' | 'derivation' | 'remark' | 'example' | 'application' | 'open'.

## Quality bar (the user's non-negotiables)
- **Real textbook theory**: definitions, theorems with their hypotheses, laws, worked derivations — the section must genuinely teach the book's material at exam depth. Write from your knowledge of this exact book (CLRS 3rd ed / Halliday-Resnick-Walker 11e / Stroustrup TC++PL 4th ed).
- **Math typesetting**: ALL math in `$...$` or `$$...$$` KaTeX (backslashes doubled in TS strings: `$\\sqrt{n}$`). NEVER a bare `^` or `_` outside math/code spans. Unicode superscripts (x², 10⁻³, γ) are fine outside math.
- **Figures**: authored inline SVG (viewBox-based, width 100%, strokes use `currentColor`, fills use `currentColor` with opacity). Draw the genuinely illuminating things: recursion trees, graph traversals, wavefronts, field lines, circuit topology, memory layouts. 1 SVG per ~2 sections minimum; more for geometry/wave/field chapters.
- **Worked examples with real numbers** — students must be able to verify the arithmetic.
- **Quiz questions must be answerable from the content** and discriminate (not all obviously A).
- Density budget: **~60–100 lines per section** in the file. A 4-section chapter ≈ 300–450 lines; a 8-section chapter ≈ 550–800 lines. Depth tier adds ~30–60 lines — include ONE masters tier for your single most flagship section (a genuinely graduate result: a full proof, a named theorem, a subtle analysis).

## Critical TS/ESLint gotchas (these broke previous rounds — avoid!)
1. Apostrophes inside single-quoted strings must be escaped (`Bézout\'s`), or use double quotes. Prefer double-quoted strings for prose with apostrophes.
2. Backslashes in LaTeX must be doubled: `'the $\\Omega(n \\lg n)$ bound'`.
3. No unused imports; `import type { SectionContent } from '../library'` is the only import you need.
4. Files must be valid TypeScript with no `any`-typed leaks — plain object literals, correctly typed.
5. SVG strings: single-line template literals or double-quoted strings; keep `<svg …>` attribute quoting consistent (double quotes inside single-quoted strings, or use template literals with backticks — careful with `${` in SVG (never appears)).
6. After writing ALL your files run:
   `cd /home/z/my-project && bunx tsc --noEmit 2>&1 | grep "^src/"`
   Fix every error that points at YOUR files until the grep is empty.
   Optionally: `bun scripts/validate-depth.mjs` (validates depth blocks + KaTeX project-wide).

## Do NOT
- Do NOT edit `src/data/content/index.ts`, `library.ts`, any library-parts file, or any other agent's file. The orchestrator wires imports.
- Do NOT restart or touch the dev server. Do NOT run `bun run build`.
- Do NOT create test files.

## Worklog (mandatory)
After finishing, APPEND to `/home/z/my-project/worklog.md` (never overwrite) a section starting with `---` followed by:
```
Task ID: <your id>
Agent: content-agent (<book>)
Task: <one line>

Work Log:
- <files written with section counts>
- <validation results>

Stage Summary:
- <what's covered, anything skipped and why>
```

## Return to orchestrator (keep under 150 words)
Files written, total sections, tsc clean?, figures count, depth tiers added, anything skipped.
