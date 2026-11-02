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
| math-algebra-notation-manipulation (§71.1) | 4,264 → 3,496 (three trim passes, 2026-11-01) | ✅ re-expanded 2026-11-02: 3,496 → 4,277 (see log, queue 3b) |
| bioc-glycolysis-step-by-step (§3.1) | 3,860 → 3,500 | biochemistry audit must include re-expansion |
| bioc-citric-acid-cycle (§3.2) | 3,546 → 3,500 | biochemistry audit must include re-expansion |
| bioc-carbohydrate-lipid-traffic (§3.4) | 4,189 → 3,500 (five trim passes) | biochemistry audit must include re-expansion |
| math-derivative-as-limit (excluded source) | n/a — 3,416 authored under old ceiling | maintain only; no unit spent (stays excluded) |

All future rewrites, audits and new lessons are born under the no-ceiling charter.

| # | Topic id (§ in book) | Words | Tier | Grade | Status |
|---|---|---|---|---|---|
| 1 | fnd-percentage-ratio-mental-math (§76.1) | 883→**2,811** | core | D | ✅ 2026-11-02 rewritten (see log) |
| 2 | math-algebra-notation-manipulation (§71.1) | 1,409→**3,496** | core | C→A | ✅ 2026-11-01 rewritten (see log) |
| 3 | math-quadratics-completing-square (§71.2) | 1,471→**5,071** | core | C→A | ✅ 2026-11-02 rewritten (see log) |
| 3b | math-algebra-notation-manipulation (§71.1) re-expansion | 3,496→**4,277** | core | A (equation-style) | ✅ 2026-11-02 re-expanded in place under the no-ceiling charter AND re-typeset to the §7A/§7B equation-style page (see log) |
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
| 2026-11-02 ~08:45 IST | Queue #3: math-quadratics-completing-square (§71.2) | Rewrote in place (same file 02-algebra.ts, id/title unchanged) 1,471 → 5,071 words EXACT/25 min via count-topic-words-exact (declared == actual; NO ceiling — zero trims, zero padding; first rewrite under the no-ceiling charter, 45% longer than the old ceiling would have allowed). Pre-flight: NOT in dedup.ts EXCLUDED_TOPICS; carve evidence — 'completing the square' hits elsewhere = one-line method ref in 04-geometry-and-measurement (sphere/circle centre recovery, §73.3 owns the 3-D use — cited in applications) + algebraic-comparison context in qa 03-data-sufficiency (cited in applications); 'quadratic formula'/'vertex form'/'discriminant' math-hits unique to this file; 'axis of symmetry'/'perfect square trinomial' zero hits; marine-biology 'discriminant' = false positive (fisheries statistics). New lesson shape: Old-Babylonian situation opening — BM 13901 problem 2 (c. 1800 BCE), 'I tore out my square's side from inside its area; 870 was left' → x² − x = 870 solved in the scribe's own four spoken moves (break 1 in half → square the half → append ¼ to 870 → equalside 29½ → tear out ½ → x = 30; check 900 − 30 = 870) — completing the square 37 centuries before the name; background (standard form a≠0, area/motion/revenue origins, (x+h)² identity + factorising rungs cited to §71.1); standard-form-first discipline; zero-product property + factorising; square-root property with ± and the x²=negative foreshadow; completing the square recipe + WHY (2h = b reading of (x+h)²) + Figure 1 two-panel SVG (gnomon half-strips + al-Khwarizmi's x²+10x=39 four-strip completion → (x+5)²=64 → x=3, cross-cited to §71.1's Baghdad opening without repeating it); add-to-BOTH-sides equation rule; a=1 division + Sridhara's 4a-multiply alternative (c. 870–930, rule survives in quotation per MacTutor); DERIVATION block: quadratic formula in 5 KaTeX steps (normalise → move constant → half-of-b/a completion → ± square root with Δ's first appearance → tidy), with history notes (Brahmagupta 628 CE rule-without-derivation per Brāhmasphuṭasiddhānta; Sylvester 1851 coined 'discriminant'; Cardano 1545 'dismissing mental tortures' at √(−15)); OpenStax 4-step formula rhythm + their 2x²+9x−5=(−9±11)/4 → 1/2, −5 worked example kept and attributed; discriminant trichotomy formula block + Figure 2 three-parabola SVG (two crossings / vertex-on-axis kiss / floating, axis of symmetry dashed); vertex form + why the turning point must sit at the square's zero + midpoint argument for −b/2a + root-sum −b/a; 4 worked examples house style (2x²−4x−3 by BOTH doors → (2±√10)/2 with numeric cross-check; projectile h=−5t²+30t+2 → lands ≈6.07 s, peaks 47 m at t=3 s — roots-vs-vertex contrast; 9x²−12x+4 Δ=0 → (3x−2)², repeated root 2/3 + 40 m fence A=x(40−2x) → vertex 10 m, 200 m² max); fastest-door decision rule (speed-layer carved to test-strategy material); applications callout (projectiles, revenue vertex pricing, parabolic dishes, sphere-centre forward cite, quantity-comparison sign study cite, stability discriminants); 8 pitfalls; 10 key terms; 8-question quiz (6 quantitative: ±7 discipline, complete-25, divide-by-a-first 2x²−8x+6→1,3, Δ=−56 no-real, (x−3)²=12 door choice, vertex (1,−5), peak 47 m, Δ=0 kiss); 7-item recap; OpenStax + Babylonian/al-Khwarizmi/Brahmagupta/Sridhara/Sylvester/Cardano sources in path; no exam names (rg verified). Pipeline: serialize (2,914 live) → coverage (140/899/4,710) → index 725 topics/1,178k → audit 2967/2967 = 100% 0 unmapped; lint clean; tsc 0 under src/. Browser QA via scripts/qa-retry.sh (memory-watchdog retries): full render attempt 3 (122 SVGs, 38.8k chars), quiz Q1 'x = ±7' → 'Correct. Square-root property: x = ±√49 = ±7…', fresh-load console 0 errors, 390px scrollWidth 390 == clientWidth 390, browser closed. Chapter header refreshed ~10,614 words. | Queue #3b: math-algebra-notation-manipulation re-expansion (restore ~768 ceiling-cut words, unlimited length) |
| 2026-11-02 ~12:55 IST | Queue #3b: math-algebra-notation-manipulation (§71.1) re-expansion — first rewrite under the STYLE LAWS + repair of the crashed 09:13 IST run | Three things happened this run. (1) BOOKKEEPING/REPAIR of the crashed 09:13 IST run (commit e4ccc2f, UUID message): it had re-typeset §71.2 (quadratics) to the equation-style page but died before honest counts — and its LaTeX was escape-mangled at source (single backslashes inside quoted TS strings: \t→TAB, \l/\s/\p/\D dropped their backslash, so KaTeX received "left(x - TAB rac{1}{2}") on 110 strings across paras/examples/terms/quiz. A standing codemod (scripts/fix-quadratics-latex-escaping.ts, 404 backslashes doubled, idempotent with lookbehind) + a new standing QA scanner (scripts/scan-latex-mangle.ts, whole-tree control-char/lost-backslash check) repaired it; scan also caught and fixed 2 mangled formula latex strings in bus-taxation-basics (03-public-finance.ts). §71.2 honest recount under the new counter: 5,071 → 5,129 words declared/26 min. (2) §71.1 RE-EXPANSION 3,496 → 4,277 words EXACT (declared == actual; readMins 21; no ceiling, zero trims, zero padding): restored the ceiling-cut worked-example depth (second anatomy read-through 7a³+½a²−a+4, second single-bracket expansion 2x(3x²−4x+7), systematic factor-pair hunt for x²+7x+12 with the prime x²+x+1 failure case, numeric verification of rearrangements v=20→t=8 with both-sides check, identity-verification walkthrough (a−b)(a+b)=a²−b²) AND NEW Worked Example 4 (substitution: E=½mv²+mgh at m=2, v=3, h=5 → 109 J, with the v=−3 sign-erasure test) + an 8th quiz question (3x² at x=−2 → 12, the precedence trap). (3) EQUATION-STYLE TYPESET of the whole lesson per directive §7A/§7B: every equation/transformation/substitution set as its own centered $$…$$ line (54 katex displays in the browser), identity (x+m)(x+n)=x²+(m+n)x+mn tagged \tag{1} and re-used by the factor-pair section, right-margin \text{(subtract u from both sides)}-style annotations, aligned equal-sign chains in the two-bracket expansion, **key terms bolded inline** (algebraic expression, terms, coefficient, variable, degree, like terms, commutative/associative laws, distributive law, expanding, factorising, highest common factor, difference of squares, perfect square, sum of squares, subject, equation, identity) — zero Definition/Insight labels anywhere, quiz + terms math converted to $…$ KaTeX. Carve evidence unchanged from 2026-11-01 (re-grepped: 'difference of squares'/'like terms' unique here; 'distributive law' 07-applied forward-cite; 'highest common factor' qa-01 owns numbers-only; 'perfect square' incidental hits; all cited in-lesson). Pipeline: serialize (2,914 live) → coverage (140/899/4,710) → index 725 topics/1,179k → audit 2967/2967 = 100% 0 unmapped; lint clean; tsc 0 errors under src/. Browser QA: §71.1 renders full equation-style page (Baghdad opening, 54 displays, figure plate, derivation, 4 worked examples incl. substitution), ZERO Definition/Insight labels, quiz Q1 → Correct feedback with explanation, fresh-load console 0 errors, 390px scrollWidth 390 == clientWidth 390, browser closed. Chapter header refreshed: 3 lessons · ~11,453 words. | Queue #4: math-earth-geometry (§73.2, 1,338 words, grade C) — first queue rewrite to author from scratch under the new laws |

