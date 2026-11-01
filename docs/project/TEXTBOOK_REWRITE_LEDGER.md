# TEXTBOOK REWRITE LEDGER — pedagogical quality program

**Governing directive:** `docs/project/TEXTBOOK-QUALITY-DIRECTIVE.md` (read first, every run).
**Scope:** start at the FIRST subject of the Library (mathematics) and proceed subject by
subject until the end of the library. One bounded rewrite unit per run (one lesson), or
one audit unit (classify the next unaudited subject) when no audit exists yet.
**Resume rule:** work strictly down the CURRENT SUBJECT QUEUE below; when empty, audit
the next subject in Library order and build its queue. Never repeat a ✅ row.

## Classification rubric (directive §15/§16)

| Grade | Meaning | Operational test (measurable) |
|---|---|---|
| A | Proper textbook quality | ≥2,000 words (no upper limit — as long as teaching requires), figure plate(s), derivation where formula-based, ≥2 worked examples, 6–10 quiz questions with explanations |
| B | Understandable, missing detail | 1,750–2,000 words OR missing figure/derivation but otherwise coherent |
| C | Mostly definitions/bullets | 1,000–1,750 words, no figure, single example, compressed concept-list structure |
| D | Incomplete/confusing | <1,000 words, or fails the anti-AI-notes test outright |
| E | Placeholder/unusable | stub, wrong, or empty |

**CRITICAL pre-flight (learned 2026-11-02):** before choosing any rewrite target, check
`src/data/knowledge/dedup.ts` EXCLUDED_TOPICS. Excluded topics are NOT user-visible
(the bridge filters them out of content.json) — rewriting them improves nothing the
student sees. Only LIVE topics belong in the queue. Maintain excluded-topic source files
when touched, but never spend a bounded unit on them.

## Quality gates for every rewrite (all must pass)

1. Word count exact: `bun scripts/count-topic-words-exact.ts <id>` — declared == actual, **NO upper limit** (user directive 2026-11-02: as elaborative as the topic genuinely requires, typically 2,500–6,000+ words; floor 2,000; never truncate substance to fit a count; never pad), readMins = round(words/200).
2. Dedup greps BEFORE writing: `rg -il "<distinctive term>" src/data/knowledge/subjects/` — inspect every hit, carve (cite, never re-teach), record evidence.
3. Lesson text contains NO exam names. Topic `id` and `title` UNCHANGED (stable forever — mappings, links, progress depend on them).
4. Structure: situation-opening → background → gradual development → formal definition → figure (explained in prose) → derivation for key formulas → ≥2 worked examples (house style "Identify what is asked … State the result") → applications → pitfalls → study path → terms → 6–10 quiz questions with explanations → recap.
5. Pipeline: serialize → coverage → index → audit = 2967+/2967+ = 100%, 0 unmapped.
6. `bun run lint` clean; `bunx tsc --noEmit` 0 errors under src/.
7. Browser QA: lesson renders (intro, figure, derivation, examples), answer one quiz question → Correct, fresh load 0 console errors, 390px no overflow, CLOSE the browser.

## CURRENT SUBJECT: mathematics-unified (Library book math-master, subject mathematics)

Audit 2026-11-02: 28 topics in the folder, **6 are EXCLUDED** (derivative-as-limit,
bayes-theorem, eigenvalues, prime-numbers, infinity-countability, graph-theory-bridges —
covered by curated Stewart/Rosen chapters per dedup.ts). **22 LIVE.** Zero figures and
zero derivations anywhere in the subject before this program started.

### Queue (live topics only; priority = severity, then tier core>intermediate>advanced, then ascending words)

**NO-CEILING RULE (user directive 2026-11-02):** rewrites are UNLIMITED in length — write
as elaborative as genuine teaching requires. Lessons known to have been TRIMMED under the
former 3,500-word charter ceiling must be RE-EXPANDED to restore the cut substance:

| Topic id | Trim history | Re-expansion status |
|---|---|---|
| math-algebra-notation-manipulation (§71.1) | 4,264 → 3,496 (three trim passes, 2026-11-01) | queued as row 3b below |
| bioc-glycolysis-step-by-step (§3.1) | 3,860 → 3,500 | biochemistry audit must include re-expansion |
| bioc-citric-acid-cycle (§3.2) | 3,546 → 3,500 | biochemistry audit must include re-expansion |
| bioc-carbohydrate-lipid-traffic (§3.4) | 4,189 → 3,500 (five trim passes) | biochemistry audit must include re-expansion |
| math-derivative-as-limit (excluded source) | n/a — 3,416 authored under old ceiling | maintain only; no unit spent (stays excluded) |

All future rewrites, audits and new lessons are born under the no-ceiling charter.

| # | Topic id (§ in book) | Words | Tier | Grade | Status |
|---|---|---|---|---|---|
| 1 | fnd-percentage-ratio-mental-math (§76.1) | 883→**2,811** | core | D | ✅ 2026-11-02 rewritten (see log) |
| 2 | math-algebra-notation-manipulation (§71.1) | 1,409→**3,496** | core | C→A | ✅ 2026-11-01 rewritten (see log) |
| 3 | math-quadratics-completing-square (§71.2) | 1,471 | core | C | next |
| 3b | math-algebra-notation-manipulation (§71.1) re-expansion | 3,496 | core | A− (ceiling-trimmed) | queued — restore the ~768 words cut under the former 3,500 ceiling (worked-example depth / pitfall reasoning), unlimited length |
| 4 | math-earth-geometry (§73.2) | 1,338 | intermediate | C | queued |
| 5 | calc-linearization-differentials (§72.2) | 1,530 | intermediate | C | queued |
| 6 | stats-sampling-central-limit (§74.6) | 1,619 | intermediate | C | queued |
| 7 | math-graphical-linear-programming (§76.2) | 1,624 | intermediate | C | queued |
| 8 | math-reading-data-charts (§74.3) | 1,690 | core | C | queued |
| 9 | stats-correlation-regression (§74.8) | 1,691 | intermediate | C | queued |
| 10 | math-cumulative-frequency-box-plots (§74.2) | 1,706 | core | C | queued |
| 11 | calc-concavity-second-derivative-test (§72.3) | 1,718 | intermediate | C | queued |
| 12 | calc-removing-discontinuities (§72.1) | 1,728 | intermediate | C+ | queued |
| 13 | stats-confidence-hypothesis-testing (§74.7) | 1,745 | advanced | C+ | queued |
| 14 | stats-time-series-trend-seasonality (§74.1) | 1,767 | core | C+ | queued |
| 15 | stats-descriptive-distributions (§74.5) | 1,783 | core | C+ | queued |
| 16 | math-formulating-real-life-problems (§76.3) | 1,901 | core | B− | queued |
| 17 | math-games-tournaments-tactics (§75.1) | 1,955 | core | B− | queued |
| 18 | math-measurement-areas-volumes (§73.1) | 2,012 | core | B | queued |
| 19 | math-modulus-logarithm-inequalities (§71.3) | 2,047 | advanced | B | queued |
| 20 | math-sphere-three-dimensions (§73.3) | 2,047 | advanced | B | queued |
| 21 | calc-definite-integral-properties (§72.4) | 2,050 | advanced | B | queued |
| 22 | math-sets-logic-foundations (§70.1) | 2,051 | core | B | queued |

(Excluded-source maintenance, not in queue: math-derivative-as-limit was rewritten to
3,416w textbook standard on 2026-11-02 and STAYS EXCLUDED — its teaching is owned by the
curated Stewart Ch 15; the rewrite is kept as maintained source. Do not un-exclude
without a full dedup review against Ch 15 §2.1/§2.7.)

When this queue is empty → audit the next subject in Library order (physics-unified),
classify its live topics, build its queue here.

## Run log

| Date (IST) | Unit | What happened | Next |
|---|---|---|---|
| 2026-11-02 | Program install + first unit | Directive installed as docs/project/TEXTBOOK-QUALITY-DIRECTIVE.md; this ledger created with the full mathematics-unified audit (28 topics, 6 excluded, 22 live, zero figures subject-wide). Rewrote queue #1 fnd-percentage-ratio-mental-math (§76.1) 883 → 2,811 words exact/14 min: shop-window situation opening, Fibonacci Liber Abaci 1202 + per-cento history, swap trick, 10%-anchor ladder, two-panel SVG figure (percent triangle + anchor ladder on an 84.60 bill), successive-changes formula DERIVED (a+b+ab/100 from binomial multipliers), 3 worked examples (jacket −24.4% honest net; two raises 18.8%; ratio share 720 in 2:3:4), 8-question quiz (6 quantitative) all verified, pitfalls (base error, points-vs-percent, decimal slips), estimation brackets. Carve: percentages/ratios/mental-math unowned elsewhere (rg verified); interest compounding left to the interest lesson. Also rewrote excluded-source math-derivative-as-limit 983 → 3,416 words exact/17 min (secant→tangent two-panel SVG, Zeno→Merton 1330s→Galileo 1638→Newton 1665-6→Leibniz 1675/1684→Lagrange 1797→Cauchy 1821→Weierstrass history, x²-from-definition derivation, √x conjugate + |x| corner + falling-ball 19.6 m/s examples, differentiability⟹continuity proof, 8-question quiz) — stays excluded per dedup (Stewart Ch 15 owns it). Pipeline 723 topics/1,160k words, audit 2967/2967 = 100% 0 unmapped; lint clean, tsc 0 under src/; browser QA: §76.1 renders (figure + derivation + examples), quiz → Correct, fresh load 0 console errors, 390px no overflow, browser closed. | Queue #2: math-algebra-notation-manipulation |
| 2026-11-01 ~22:55 IST | Queue #2: math-algebra-notation-manipulation (§71.1) | Rewrote in place (same file 02-algebra.ts, id/title unchanged) 1,409 → 3,496 words EXACT/17 min via count-topic-words-exact (declared == actual after three trim passes from a 4,264 first draft to respect the 3,500 ceiling). Pre-flight: NOT in dedup.ts EXCLUDED_TOPICS; carve evidence — "difference of squares"/"factorise"/"expand the brackets"/"algebraic fraction" unique to this file; "like terms" also hit only as a USED rung in quantitative-aptitude/03 (cited in applications callout, not re-taught); "distributive law" hit in 07-applied mental-math as a forward promise "the laws algebra will formalise later" — this rewrite is that formalisation and says so; "highest common factor" number-theory owned by qa-number-system (cited, letters-extension taught here); biochemistry "the subject of" hit = prose false positive. New lesson shape: Baghdad 820 CE situation opening (al-Khwarizmi rhetorical algebra "a square and ten roots equal thirty-nine dirhams", al-jabr/algorithm etymology, Viète 1591, Descartes 1637, Recorde 1557 equals sign); background from mental-arithmetic laws; anatomy (terms/coefficient/degree/like terms); three laws formalised; expanding single+double brackets; two-panel SVG figure (anatomy labels + area model of (x+3)(x+2), afterConcept 2, both explained in prose); derivation of (a+b)² = a² + 2ab + b² in 4 steps with area reading; factorising in fixed order (HCF → difference of squares → perfect square → factor-pair, sum-of-squares impossibility noted); rearranging formulae (reverse order, symmetric operations, factor-the-target-out ax−bx = c); identity vs equation with "show that" discipline; 3 worked examples house style (all-four-commands 3x(2x−5)−2x(x−4)+7x → 4x²; x⁴−16 factorised fully to (x−2)(x+2)(x²+4) with double difference-of-squares; tank S = 2πr²+2πrh rearranged to h and computed 1,848 cm², r 14 cm, π 22/7 → h = 7 cm with substitution check); applications callout (kinematics/code/spreadsheets/quantity-comparison rung one carve); pitfalls (sign travel, first-term-only, (a+b)² ≠ a²+b², 3x² vs (3x)², show-that category error); study path with carve cross-references (quadratics next, number-system HCF, mental-arithmetic laws) preserving the OpenStax Intermediate Algebra 2e source ref; 8 key terms; 7-question quiz (5 quantitative) with why-wrong explanations; 7-item recap. No exam names anywhere (rg verified). Pipeline: serialize (2,912 live/557 filtered) → coverage (140/899/4,708) → index 723 topics/1,162k → audit 2967/2967 = 100% 0 unmapped; lint clean; tsc 0 errors under src/. Browser QA at 390px: §71.1 renders new Baghdad intro + figure plate + derivation + all 3 worked examples + terms + recap; quiz Q1 answered → Correct feedback with explanation shown; fresh load 0 console errors; no horizontal overflow (scrollWidth 390 == clientWidth 390); browser closed. Chapter header refreshed to ~7,014 words. | Queue #3: math-quadratics-completing-square |
