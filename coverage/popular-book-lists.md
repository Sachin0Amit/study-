# Popular-Book Lists — Cengage + Foreign Authors (standing ledger)

Created by CENGAGE-20261026-1 per the user's directive: *"search for all of the cengage books of
physics, maths, chemistry etc., make list of all such books of cengage iit advanced or foreign
author etc. using filetype:pdf or other such method, download it and use its content — theory,
diagram, question with solution — add it to maths section keeping in mind of no repetition with
the same detailed and in depth as those books. Do it for all subjects and fields in similar
manner: make list of popular books and download."*

## The method (every future run follows this)

1. **List**: rank the genuinely most popular books for the subject (publisher catalog →
   retailer/community consensus). Persist the list here (append-only).
2. **Legitimate download**: prefer (a) publisher-released PDFs (catalog info-PDFs, sample
   chapters, open editions), (b) public-domain scans on archive.org, (c) openly-licensed
   (CC/OER) full texts, (d) GitHub public repos hosting genuinely free editions.
   **Refuse** pirated scans of in-copyright commercial books (fileshare/libgen-style mirrors
   or GitHub repos that merely mirror them) even when filetype:pdf finds them.
3. **Use the content**: cross-verify + enrich our Library at the book's own depth — theory,
   worked examples ("solved illustrations"), questions **with** solutions (house 4-option quiz
   with explanations). Zero repetition (check coverage/COVERAGE.md + dedup.ts + live grep).
4. **Delete the PDFs** at the end of the run; record everything in the worklog.

## Cengage JEE (Advanced) series — official catalog list (cengage.co.in, 4th Edition, 2026)

Physics — **B. M. Sharma** (6 volumes): Mechanics I · Mechanics II · Waves and
Thermodynamics · Electrostatics and Current Electricity · Magnetism and Electromagnetic
Induction · Optics and Modern Physics.

Mathematics — **G. Tewani** (5 volumes): Algebra · Trigonometry · Coordinate Geometry ·
Calculus · Vectors and 3D Geometry.
Official TOCs (from publisher book-information PDFs, downloaded this run):
- *Algebra*: Sets and Foundation of Functions · Inequalities, Modulus and Logarithm ·
  Theory of Equations · Complex Numbers · Progression and Series · Permutations and
  Combinations · Binomial Theorem · Statistics · Fundamental Concepts of Probability ·
  Conditional Probability and Random Value · Determinants · Matrices.
- *Trigonometry*: Trigonometric Functions · Trigonometric Ratios and Transformation
  Formulas · Trigonometric Equations · Rules and Centres of Triangle · Applications of
  Trigonometry in Real Life · Inverse Trigonometric Functions.
- *Coordinate Geometry*: Coordinate System · Straight Lines · Pair of Straight Lines ·
  Circle · Parabola · Ellipse · Hyperbola.
- *Calculus*: Relations and Functions · Limits of Functions · Differentiation · Continuity
  and Differentiability of Functions · Applications of Derivatives · Monotonicity and
  Extrema of Functions · Indefinite Integration · Definite Integration · Area Under
  Curves · Differential Equations.
- *Vectors and 3D Geometry*: Introduction to Three-dimensional Geometry · Introduction to
  Vectors · Products of Vectors · Line and Plane.

Chemistry — **K. S. Verma** (6 volumes): Inorganic Chemistry Part 1 & Part 2 (with
Balraju Karri) · Physical Chemistry Part 1 & Part 2 (with Vinay Kumar Garg) · Organic
Chemistry Part 1 & Part 2 (with Vinay Kumar Garg).

Signature pedagogy of the series (from the official info-PDF): Theory → Solved
Illustrations → Concept Application Exercises → Advanced Solved Problems → Exercises
graded by difficulty (single-correct, integer/numerical, multiple-correct, linked
comprehension, matrix match) → full Solutions → DPP booklet → solved PYQ/mock booklet.

Related Cengage test-prep lines (same catalog): JEE (Main + Advanced) A-to-Z series
(Physics/Mathematics/Chemistry, Parts 1–2 each) · 14 Years' chapterwise solutions (3
vols) · NEET Current Pattern (Physics/Chemistry) · NEET Spot-on (Physics C. P. Singh;
Physical Chemistry Seema Saini | K. S. Saini) · BITSAT & Foundation lines.

**Download status (checked this run):** full commercial volumes have **no legal free PDF**
(publisher sells print/eBook-institutional; GitHub repo search returned 0 results for the
series; all filetype:pdf full-copy hits are pirated → refused). The publisher's official
book-information PDFs for all five Tewani volumes were downloaded and used for
structure/TOC/pedagogy.

## Popular foreign-author & Indian-classic companions (per subject)

**Mathematics**: S. L. Loney — Plane Trigonometry (PD, archive.org) · The Elements of
Coordinate Geometry (PD) · Hall & Knight — Elementary Algebra / Higher Algebra (PD) ·
Joseph Edwards — A Treatise on the Integral Calculus vols I–II (PD, archive.org
`treatiseonintegr01edwauoft`; read in scope this run) · A Treatise on the Differential
Calculus · I. A. Maron — Problems in Calculus of One Variable (commercial; Mir) ·
G. N. Berman — Problem Book in Analysis · Barnard & Child — Higher Algebra ·
Charles Smith — An Elementary Treatise on Solid Geometry (PD, archive.org
`elementarytreati00smituoft`; read in scope this run) · George Chrystal — Introduction
to Algebra · Thomas/Stewart calculus lines (commercial) · NCERT Class 11–12 Mathematics +
Exemplar (official free PDFs, ncert.nic.in) · Paul's Online Math Notes (free, Lamar).

**Physics**: H. C. Verma — Concepts of Physics 1–2 · Irodov — Problems in General Physics
· Krotov — Aptitude Test Problems in Physics · Resnick–Halliday–Walker — Fundamentals of
Physics · Griffiths — Electrodynamics / Quantum Mechanics · Feynman Lectures (free online
official) · Kleppner–Kolenkov — Mechanics · NCERT + Exemplar (official free).

**Chemistry**: J. D. Lee — Concise Inorganic Chemistry · O. P. Tandon — Physical/Organic/
Inorganic · Morrison & Boyd — Organic Chemistry · Paula Bruice · Clayden et al. ·
P. W. Atkins — Physical Chemistry · R. C. Mukherjee — Modern Approach to Chemical
Calculations · P. Bahadur — Numerical Chemistry · NCERT + Exemplar (official free).

## Extension plan (all other subjects & fields)

Each future run picks the NEXT subject (Library book order as in the CROSSVERIFY loop),
builds/ranks its popular-book list here (append), applies the method above, and marks it
done in the worklog: `CENGAGE-DONE: <subject> — <books used / internet-research-only>`.

- **Mathematics** — DONE 2026-10-26 (CENGAGE-20261026-1: Tewani official info-PDFs ×5 +
  Edwards Integral Calculus vol I + Smith Solid Geometry; 3 lessons in x63-cengage-pass.ts).
- **Physics** — DONE 2026-10-27 (CENGAGE-20261027-2: B. M. Sharma 6-volume series scope
  from the official catalog TOC list persisted above; the cengage.co.in site has since
  restructured and the volume book-info PDFs are no longer reachable, Wayback has no
  snapshots; GitHub search: 1 personal repo mirroring the commercial volumes = pirated,
  REFUSED. Cross-verification basis instead: the two official syllabus PDFs —
  jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf (16pp) + the NTA national
  syllabus (17pp) — both downloaded, read in scope, deleted after coverage. Gap found:
  the Physics master book's Experimental Skills unit (its 7 sections were all briefs —
  the exact unit where the testing agency reserves numerical-value questions) → all 7
  sections written as full lessons in src/data/content/phys-experimental-a.ts +
  phys-experimental-b.ts with 13 authored SVG figure plates + 3 hand-drawn notebook
  sketches; every numerical hand-verified; carved against engineering-metrology
  (instrument design), fluids (Stokes theory), calorimetry and circuits chapters).
- **Chemistry** — DONE 2026-10-27 (CENGAGE-20261027-2: K. S. Verma 6-volume series scope
  from the catalog list; same no-legal-PDF status and same pirated-mirror refusal. Gap
  found: the Engineering Chemistry chapter (5 sections all briefs) → all 5 written as
  full lessons in src/data/content/chem-engineering.ts (water treatment/corrosion,
  polymers/fuels/lubricants, nanomaterials/green chemistry, a numerical workshop, and
  an applied case-study lesson) with 5 SVG plates + 1 notebook sketch; carved against
  the municipal water-treatment knowledge lesson (owns the process-train framing), the
  organic volume's polymer-basics section, the everyday-chemistry fuel survey, and the
  nanotechnology book (owns devices/carbon).
- Every other Library subject: rank its bestsellers (as the CROSSVERIFY loop already
  does), extend this ledger, one subject per run.
