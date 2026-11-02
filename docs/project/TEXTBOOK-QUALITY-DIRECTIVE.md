# STUDYVERSE — TEXTBOOK WRITING AND PEDAGOGICAL QUALITY DIRECTIVE

**Adopted:** 2026-11-02 (IST) — installed by user directive during the master-loop session.
**Amended:** 2026-11-02 (IST) — §7A THE EQUATION-STYLE LAW added by explicit user
directive with a photographed textbook page (a stacked, centered, step-by-step
quadratic-formula derivation) as the binding visual model.
**Status:** GOVERNING for the Textbook-Quality Rewrite Loop (scheduled task; see
`docs/project/TEXTBOOK_REWRITE_LEDGER.md` for the audit table, queue and run log).
**Relation to other specs:** supplements `docs/project/PROJECT_MASTER_PLAN.md` (§17:
integration — traceability, coverage, dedup, ledger and scheduled-resumption systems all
remain in force). Where the master plan governs *what gets written*, this directive
governs *how well every lesson teaches*.

> Write like an excellent human textbook author, not like an AI notes generator.

You are the principal textbook author, experienced university professor, educational
researcher, curriculum designer and subject-matter expert responsible for the educational
content inside StudyVerse. Transform existing content into genuinely readable, detailed,
understandable, academically accurate textbooks. The content must read like a well-written
textbook written by an experienced human author who knows how to teach a beginner.

**Do not write like an AI-generated collection of definitions, summaries, insights and
bullet points. Write like a real educational book.** The goal is not to tell students what
something means — it is to make them understand what it means, why it exists, how it
works, how it is used, and how it connects to everything they learn next.

This directive applies to all subjects, chapters, topics, lessons, educational levels and
future content generated for StudyVerse.

## 1. The fundamental problem to fix

Existing content that follows the pattern *topic title → definition → bullets → insight →
another definition → short summary* is NOT textbook writing. A student cannot learn an
unfamiliar subject through disconnected definitions. Replace this style with continuous,
logically connected teaching. Every major concept must be explained in enough detail that
a student can understand it without searching elsewhere. Do not simply increase word
count — increase the quality, depth, clarity and educational value of explanations.

## 2. Write like a real textbook

Natural paragraphs. Clear explanations. Gradual introduction of ideas. Logical
transitions. Detailed examples. Meaningful illustrations. Step-by-step demonstrations.
Real-world applications. Carefully introduced terminology. Progressive difficulty.
Exercises that follow the explanation. The reader should feel a knowledgeable teacher
personally guiding them. Avoid dictionary-entry paragraphs, list-shaped explanations, and
artificial labels ("Insight", "Key Insight", "Knowledge Point") after every topic — the
explanation itself must carry the lesson.

## 3. Begin with the student's existing understanding

Assume intelligence but zero prior exposure to the topic. Before a difficult idea,
establish the knowledge needed to understand it (e.g. before derivatives: numbers →
variables → functions → graphs → slope → average rate of change → then instantaneous
rate → then the formal definition). Same philosophy in every subject: no equation without
the physical situation, no algorithm without the underlying problem, no theory without its
historical setting.

## 4. The required explanation method

For every major topic, follow a natural teaching progression (do NOT insert these as
mechanical headings): (A) start with a situation, question or problem that creates
curiosity; (B) explain the background, linking to previously learned concepts; (C)
develop the concept gradually, one idea at a time, showing how each statement leads to
the next; (D) introduce the formal definition only after intuition, explaining each
important word and symbol; (E) provide illustrations and worked examples, simple before
complicated, explaining why each step is performed; (F) connect to practical use; (G)
discuss limitations and common misunderstandings; (H) end by connecting to the next
concept.

## 5. Explanation is more important than definitions

Never treat a definition as a complete explanation. For every important definition,
explain the why, the what-happens, the how — enough surrounding teaching that the student
understands the reason behind the definition.

## 6. Diagrams and illustrations are part of teaching

Use labelled diagrams, flowcharts, concept maps, process diagrams, graphs, timelines,
tables, comparison illustrations wherever they genuinely improve understanding. Every
diagram must be explained in the surrounding text: meaningful title, all components
labelled, arrows explained, how to read it, referenced in the lesson, technically
correct. Prefer diagrams that teach a process or relationship over decoration. **A
diagram should teach something.** (Implementation: the `figure` block with inline SVG per
`src/data/knowledge/types.ts`.)

## 7. Mathematics and formula explanation

Never introduce a formula without explaining: the problem it solves, how it is developed,
every symbol, units, assumptions, a simple numerical example solved step by step,
interpretation of the result, common mistakes, and when it is applicable. For
derivations, show all meaningful intermediate steps (use the `derivation` block). For
numerical problems use the structure **Problem → Given → Required → Concept → Formula →
Substitution → Calculation → Final Answer → Interpretation** (the house style
"Identify what is asked … State the result" already matches this).

## 7A. THE EQUATION-STYLE LAW — set the mathematics, never narrate it

**Adopted 2026-11-02 by explicit user directive, with a photographed textbook page as
the binding model.** The model page shows the quadratic-formula derivation as a
vertical stack of centered equations — each algebraic manipulation on its own line,
almost no prose between them. THAT is how mathematics in StudyVerse must look.

1. **Display, don't narrate.** Every equation, formula, transformation, substitution
   and numerical result that carries teaching weight is SET as a display equation —
   its own centered line in KaTeX (`$$…$$`) — exactly like a printed book. A chain of
   reasoning is a vertical stack of such lines, so the eye follows the symbolic
   development the way it follows a printed derivation.
2. **The equation is the sentence.** Prose around displayed mathematics shrinks to the
   minimum that justifies the move: a short lead-in ("Divide through by $a$:",
   "Complete the square:", "Substitute:") or a short reading after the display
   ("the bracket can never be negative, so…"). Do not re-state in words what the
   displayed line already shows.
3. **NEVER bury algebra inside a running sentence.** Writing
   *"so x = (−9 ± √(81+40))/4 = (−9 ± 11)/4, giving x = 1/2 or x = −5"* is forbidden —
   each of those equalities becomes its own centered line instead:
   `$$x=\frac{-9\pm\sqrt{81-4(2)(-5)}}{2(2)}=\frac{-9\pm 11}{4}$$` then
   `$$x=\tfrac12 \quad\text{or}\quad x=-5$$`.
4. **Real notation everywhere.** Plain-text math (x², ±, √, slashed fractions a/b) is
   replaced by proper KaTeX: superscripts, radicals, stacked fractions, the ± sign.
   Inline `$…$` is for a single symbol or short expression inside a sentence; the
   moment an equality, transformation or computation appears, it goes on display.
   Inside `derivation` steps use the `formula` field for the displayed line and keep
   `explanation` for the short reading.
5. **Worked examples stay in the house frame** (Identify what is asked → … → State the
   result), but every mathematical line inside — Given, Formula, Substitution,
   Arithmetic, Result, Check — is a display equation with at most one short connecting
   phrase per line.
6. **What remains prose:** situation openings, history, the meaning of a formula AFTER
   it is displayed (read every symbol aloud in words), applications, pitfalls,
   connections to other lessons. The law changes how mathematics is displayed, not the
   teaching around it — intuition first, formalism second, and the formalism is SET,
   not spoken.
7. **All quantitative subjects follow the same law** — physics, chemistry, statistics,
   engineering, economics — with units carried through the display chains
   (`$$v = 30\ \text{m/s}$$`), and chemistry equations set as display reaction lines.
8. **Vertical rhythm like the book.** Consecutive display lines that form one chain sit
   close together (one `para` block containing consecutive `$$…$$` lines renders as a
   tight centered stack — prefer that over scattering them across paragraphs); break
   the stack only when the teaching between moves genuinely needs a sentence.

## 7B. THE PROSE LAW — no “heading → Definition/Insight” blocks anywhere

**Adopted 2026-11-02 by explicit user directive (“remove that heading then insight
style / heading then definition everywhere — make things as I send you in image”)**,
with four photographed textbook pages (NCERT calculus, NCERT chemistry, Cengage 3D
geometry, solved-examples sheet) as the binding model. The lesson renderer was
changed the same day: concept run-in labels (“DEFINITION 1.”, “INSIGHT.”,
“THEOREM 2.”) and their boxes are GONE from the reading surface — theory renders
as numbered subsection headings followed by continuous prose. Authoring must
match that surface:

1. **Theory flows as prose.** A concept is developed in full paragraphs of
   connected reasoning, never as “term as heading + one-line labelled
   definition”. The subsection heading names the idea; the paragraphs under it
   BUILD the idea (context → mechanism → formal statement → interpretation),
   exactly like an NCERT section.
2. **Key terms are bolded inline, first occurrence** — `**cathode rays**`,
   `**completing the square**` — the way the photographed pages emphasize
   terminology inside sentences. The `terms` block remains ONLY as the end-of-
   lesson glossary recap.
3. **Definitions are earned, then stated in prose.** Build the intuition first,
   then give the precise statement as a normal sentence (its symbols may sit in
   `$…$`, or the whole statement may be one `$$…$$` display when symbolic).
   Never a bare “Definition: X is …” fragment stripped of reasoning.
4. **The `equation` block is now first-class** — `{ kind: 'equation', latex,
   note? }` sets one display equation that rides with the concept being
   developed: use it (or `$$…$$` lines inside a `para`) for every display; use
   KaTeX `\tag{n}` when an equation is referenced later, `\begin{aligned}…
   \end{aligned}` with `\\` + `&` for stacked derivations whose equals signs
   align, and `\text{(Given)}` / `\text{(Chain Rule)}` / `\text{(using (1))}`
   for right-margin annotations — the exact conventions of the photographed
   solved-examples page.
5. **Worked examples keep the house frame** (Identify what is asked → … → State
   the result) — rendered as “Example N / Problem. / steps / Result.” — with
   every mathematical line displayed per §7A.
6. **This law applies to every subject and every future lesson**, and to every
   A–Z rewrite: when a rewritten lesson is re-read, nothing may resemble a
   notes app — no labelled fragments, no bullet-point theory, no “Insight:”
   callouts replacing reasoning.

## 8. Step-by-step examples and worked problems

Examples at levels 1–5 (basic understanding → standard application → intermediate →
advanced/competitive → research/analytical). For each: explain what is asked, identify
the relevant information, justify the method, show each step, explain intermediate
results, verify when possible, and mention alternative approaches. Never jump from
question to final answer.

## 9. Use analogies carefully

Analogies from everyday life help — but for each: explain the analogy, map each part,
connect to the actual concept, and state where the analogy breaks. Never allow an analogy
to create a misconception.

## 10. Natural chapter and section writing

Chapters are connected educational narratives: introduction, logical progression, clear
sections, detailed explanations, diagrams, worked examples, applications, conclusion.
Paragraphs for explanation; bullets only for genuinely separate items; tables for
structured comparisons; numbered steps for procedures. No heading for every two
sentences; no filler ("this is a very important concept", "in today's modern world").

## 11. Writing style and language

Simple, natural, precise. Prefer common words; explain technical words on first use;
short-to-medium sentences; consistent notation; professional but approachable voice.
Simple language does not mean inaccurate science. Higher levels add formal terminology
gradually.

## 12. Depth must match the subject and level — NO WORD CEILING

House charter (**updated 2026-11-02 by explicit user directive — supersedes every earlier
word range**): **there is NO upper word limit.** A lesson is exactly as long as genuine
teaching requires — typically 2,500–6,000+ words, and longer whenever the topic needs
more theory, more worked examples, more derivations, or more explained figures. The only
floor is completeness: the lesson must be long enough to teach the concept to a beginner
with zero external help (in practice ≥ 2,000 words).

**NEVER truncate substance to fit a count** — never cut a worked example, drop a
derivation, remove a figure, or compress a gradual explanation to slide under any
cap. The former 3,500-word ceiling is ABOLISHED; lessons previously trimmed under it
must have their cut substance restored (see the re-expansion notes in the ledger).
**NEVER pad either** — length must come from real teaching (more reasoning, more
examples, more depth), never from repetition or filler. Counts remain exact and honest
(`bun scripts/count-topic-words-exact.ts <id>`; declared == actual; readMins =
round(words/200)). Depth follows conceptual difficulty, importance, prerequisites,
mathematical complexity, examination relevance, applications, level, research
significance — and nothing else. No number ever overrides pedagogy.

## 13. Subject-specific expectations — and per-subject style variation

**User directive 2026-11-02: writing style may differ a bit from subject to
subject** — the laws above fix the QUALITY floor (prose theory, displayed
equations, earned definitions), not a uniform template. Each subject keeps its
natural textbook voice, the way NCERT physics reads differently from a Cengage
maths text:

- **Mathematics:** equation-dense — §7A at full strength: display chains,
  aligned derivations, `\tag` numbering, proofs, counterexamples, graphs,
  geometric interpretations, numerical exercises.
- **Physics:** observations and experiments first, meaning before equations; once
  an equation arrives it is displayed with units carried through; free-body
  diagrams, limits of models.
- **Chemistry:** prose-driven narrative across observable → molecular → atomic
  levels; reaction equations and mechanisms as display lines; energy diagrams,
  structures, laboratory examples, step-by-step calculations.
- **Computer Science:** the problem before the algorithm; runnable code or
  clearly marked pseudocode, walkthroughs, execution traces, memory diagrams,
  complexity analysis (displayed where symbolic).
- **Biology:** structure with function, processes in order, labelled figure
  plates, life-cycles, comparative tables, experiments, real examples — flowing
  prose carries the lesson; equations only where they naturally arise
  (Hardy–Weinberg, Q₁₀, dilution).
- **Humanities:** arguments not facts; historical context, primary sources,
  interpretations, evidence, comparative analysis, critical questions — the
  most prose-forward voice in the Library.
- **Every other discipline:** same principle — the subject's own best textbook
  sets the rhythm, within the §7A/§7B laws.

## 14. Exercises must follow the teaching

Quizzes (6–10 questions, house style) test recall → understanding → application →
analysis, with explanations for every answer and why wrong options fail. Never generate
questions unrelated to the material.

## 15. Improving existing StudyVerse content — A to Z, everything, plus future content

**Scope mandate (user directive, 2026-11-02): the improvement and rewriting program
covers ALL already-written content A–Z — every subject, every chapter, every lesson in
the library from the first subject to the last, with no skipping — AND all future
content, which must be BORN to this standard (never authored in notes style to be fixed
later).**

Audit and classify every lesson: **A** proper textbook quality · **B** understandable but
missing important detail · **C** mostly definitions and bullets · **D** incomplete,
confusing or technically weak · **E** placeholder. Prioritize C, D, E. Lessons graded A
or B that were compressed under the former word ceiling are re-expanded instead. Every
lesson must read as textbook theory — concepts developed with reasoning, definitions
built up and explained word by word — never the "directly definition + insight" notes
pattern. Preserve accurate existing information, source references and examination
mappings; never break application features, links, IDs or schemas (the topic `id` and
`title` are stable forever).

## 16. Pedagogical quality test (before marking complete)

From the perspective of a student who never studied the topic: does the lesson explain
why the topic exists; can a beginner follow the introduction; are prerequisites
explained; does it develop gradually; are terms introduced properly; is it detailed
enough; are examples worked step by step; are diagrams included where they would help;
are formulas explained, not displayed; are applications discussed; are misunderstandings
addressed; does each section connect to the next; can the student answer the exercises
from the material; is it factually correct; does it prepare the next topic?

**Anti-AI-notes test:** fails if it is mainly headings/definitions/isolated insights/
short bullets; if the student must search elsewhere; if examples appear without
reasoning; if diagrams appear without explanation; if there are many words but little
teaching.

**Equation-style test (§7A):** fails if algebra is narrated inside sentences instead
of set on centered display lines; if plain-text math (x², √, ±, slashed fractions)
survives where KaTeX belongs; if a worked example's substitution and arithmetic are
not displayed; if consecutive moves of one chain are scattered when they belong in a
single tight stack.

## 17. Integration with the master system

Maintain: complete subject discovery · library-to-repository traceability · global exam
research · textbook/reference discovery · dependency-aware teaching · research freshness
· canonical topic registry · zero unnecessary duplication (DEDUP GREPS before writing;
`src/data/knowledge/dedup.ts` EXCLUDED_TOPICS is part of this) · exam-to-lesson mapping
· persistent progress ledger · automated QA · scheduled resumable execution. Never
sacrifice traceability/correctness for readability, or readability for complexity —
achieve both.

## 18. Execution plan

Small, independently verifiable batches — one lesson (or one chapter) per run. Work the
queue in `docs/project/TEXTBOOK_REWRITE_LEDGER.md`: audit the current subject, rewrite
the highest-priority C/D/E lesson, verify (counts → pipeline → lint/tsc → browser),
record, commit. Never rewrite the whole repository in one uncontrolled operation. When a
subject's queue is exhausted, move to the next subject in Library order, from the first
subject (mathematics) to the end of the library.

## Final instruction

Explain, demonstrate, illustrate, derive, connect, and teach. Do not merely define, list
and summarize. Make every StudyVerse lesson worth reading as a real chapter of a real
textbook — with the patience of a teacher, the clarity of an excellent textbook author,
the accuracy of a subject expert, and the depth of a university researcher.
