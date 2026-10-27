#!/usr/bin/env python3
"""Build x64-library-org-pass.ts from the backed-up interrupted draft:
drop the econ lesson (duplicate of the pushed hum-eco-money-bretton-woods),
re-carve the cell-fate lesson against the pushed stem-cell lesson,
rewrite the header to document the adoption + parallel-session reconciliation."""
import io

SRC = '/home/z/my-project/tmp/draft-backup/x60-library-org-pass.ts'
DST = '/home/z/my-project/src/data/knowledge/fields/x64-library-org-pass.ts'

src = io.open(SRC, encoding='utf-8').read()

# 1. drop the econ topic block (from its object open to the next topic open)
start = src.index("  {\n    id: 'hist-gold-standard-depression',")
end = src.index("  {\n    id: 'urb-heat-island-design',")
src = src[:start] + src[end:]

# 2. replace header + export name
export_at = src.index('export const x60LibraryOrgDeepeningTopics')
body = src[export_at + len('export const x60LibraryOrgDeepeningTopics'):]
header = '''import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X64 pass (2026-10-27): LIBRARY-ORG-20261027-1 — the Library        */
/*  Organization Loop's thin-book deepening rotation (Job 474103).     */
/*                                                                     */
/*  PROVENANCE: adopted from an interrupted draft of this same job     */
/*  found uncommitted in the working tree after a sandbox crash (its   */
/*  six topics read end-to-end and re-verified before adoption).       */
/*  Before adoption the branch was fast-forwarded to origin/main,      */
/*  where a PARALLEL session had already pushed its own X60            */
/*  thin-book pass covering the SAME six books from different angles   */
/*  (stem cells/regeneration, genetic circuits, Bretton Woods money,   */
/*  transit mobility, ethnographic fieldwork, algorithmic feeds).      */
/*  Reconciliation:                                                    */
/*  - hist-gold-standard-depression was DROPPED: the pushed            */
/*    hum-eco-money-bretton-woods already owns the gold-standard       */
/*    spine (price-specie-flow, the 1925 parity mistake, Eichengreen   */
/*    transmission, Bretton Woods design) — keeping both would         */
/*    violate the zero-repetition rule, so the Economic History        */
/*    book gains nothing this pass.                                    */
/*  - bio-cell-fate-determinants was RE-CARVED: the pushed             */
/*    bio-dev-stem-cells-regeneration owns potency, iPSCs and          */
/*    organoids, so the reprogramming material and the organoid        */
/*    application line here now defer to that lesson instead of        */
/*    teaching them.                                                   */
/*  - synbio-directed-evolution, urb-heat-island-design,               */
/*    anth-bioarchaeology-bones and media-video-games-interactive      */
/*    verified non-overlapping with the pushed lessons.                */
/*                                                                     */
/*  This pass therefore adds the SECOND deepening lesson to five of    */
/*  the twelve books that sat at the 2ch/3ls floor (the parallel       */
/*  pass added the first). Structure audit on the merged state         */
/*  re-ran CLEAN on the hard minimums.                                 */
/*                                                                     */
/*  Sources read for grounding: Gilbert, Developmental Biology (open   */
/*  on NCBI Bookshelf) for specification modes, Driesch's isolation    */
/*  experiment, determination testing and Waddington's landscape;      */
/*  OpenStax Biology development chapter; the Sulston lineage work     */
/*  (Nobel 2002) for the C. elegans 959-cell census and EMS/P2         */
/*  induction; NobelPrize.org 2018 popular background + Chen & Arnold  */
/*  PNAS 1993 / Stemmer 1994 retrospectives for directed evolution;    */
/*  EPA Heat Island resources + Hoffman, Shandas & Pendleton 2020      */
/*  (108 cities, 94%, up to 7°C in formerly redlined areas) + the      */
/*  Ahmedabad Heat Action Plan 2013 evaluations for the urban heat     */
/*  lesson; Larsen's Bioarchaeology + the SCARF isotope panel report   */
/*  (δ15N +3-5‰ per trophic step, C3 vs C4 signatures) + NAGPRA        */
/*  statutory notes for the bones lesson; ESA 2024 Essential Facts     */
/*  (US $58.7B, mobile leading) + the MDA framework paper (Hunicke,    */
/*  LeBlanc, Zubek 2004) + the Atari burial excavation (Alamogordo     */
/*  2014) for the games lesson.                                        */
/*                                                                     */
/*  DEDUP CARVING (verified against EXCLUDED_TOPICS, coverage/         */
/*  COVERAGE.md, the six pushed parallel-pass lessons and greps of     */
/*  the live topic files):                                             */
/*  - bio-cell-fate-determinants owns the specification MODES:         */
/*    autonomous vs conditional vs syncytial, the Driesch isolation    */
/*    experiment, determination by transplantation, the C. elegans     */
/*    lineage/PAR polarity, Waddington's landscape and canalization,   */
/*    Drosophila transdetermination. It hands OFF morphogen-gradient   */
/*    chemistry to bio-developmental-biology, division mechanics to    */
/*    bio-cell-cycle-mitosis-checkpoints, gametogenesis to the         */
/*    reproduction lessons, and potency/iPSC/organoid medicine to      */
/*    bio-dev-stem-cells-regeneration. Greps: 'cytoplasmic             */
/*    determinant', 'asymmetric division', 'Waddington',               */
/*    'canalization' had zero live hits.                               */
/*  - synbio-directed-evolution owns lab evolution as an engineering   */
/*    method: genotype-landscape logic, library construction,          */
/*    screening/selection, the Chen & Arnold subtilisin lineage,       */
/*    Stemmer's DNA shuffling, industrial enzyme cases and the         */
/*    method's limits. It hands OFF parts/standardization to           */
/*    emer-synthetic-biology, circuit mechanics (toggle switch,        */
/*    repressilator) to emer-synbio-genetic-circuits, the DBTL         */
/*    process and artemisinin/minimal-genome cases to                  */
/*    bio-synbio-dbtl-practice, and recombinant-DNA organism           */
/*    engineering to the x14 heredity-biotech lesson. Greps:           */
/*    'error-prone PCR', 'saturation mutagenesis', 'DNA shuffling',    */
/*    'sitagliptin' had zero live hits.                                */
/*  - urb-heat-island-design owns urban thermal physics: albedo and    */
/*    thermal mass, the latent-vs-sensible split, canyon geometry      */
/*    and sky-view factors, anthropogenic heat, measured magnitudes    */
/*    and the design menu. It hands OFF zoning and the design          */
/*    process to env-urban-planning-design, agglomeration to           */
/*    soc-urbanization-cities, redlining's HISTORY to                  */
/*    urb-housing-segregation (taking only its climatic CONSEQUENCE)   */
/*    and transit/mobility to urb-urban-mobility-transit. Greps:       */
/*    'heat island', 'cool roof', 'sky view', 'evapotranspiration',    */
/*    'Heat Action Plan' had zero live hits.                           */
/*  - anth-bioarchaeology-bones owns the human skeleton as archive:    */
/*    demographic profiling, stress markers, pathology, stable-        */
/*    isotope diet and mobility, and the NAGPRA ethics layer. It       */
/*    hands OFF survey/excavation/radiocarbon/formation processes      */
/*    to anth-archaeology-methods and ethnographic fieldwork to        */
/*    anth-fieldwork-ethnography. Greps: 'bioarchaeology', 'enamel     */
/*    hypoplasia', 'criba orbitalia', 'porotic hyperostosis',          */
/*    'Harris line' had zero live hits.                                */
/*  - media-video-games-interactive owns the interactive medium: its   */
/*    industrial history (Spacewar! to the 1983 crash to the NES       */
/*    revival), the MDA design vocabulary, interactivity as the        */
/*    defining difference, the free-to-play business layer and the     */
/*    state of effects research. It hands OFF framing/theory to        */
/*    soc-media-communication, regulation to                           */
/*    gp-mass-media-society-responsibility, recommender systems and    */
/*    feed design to media-algorithmic-feed, and the digitization      */
/*    frame to dl-bits-koans-digital-world. Greps: 'loot box',         */
/*    'esports', 'MDA framework' had zero live hits.                   */
/* ------------------------------------------------------------------ */

export const x64LibraryOrgPassTopics: KnowledgeTopic[] = ['''
src = header + body

# 3. re-carve bio-cell-fate-determinants against the pushed stem-cell lesson
reps = [
  ("Cell-fate decisions are the operating system beneath stem-cell medicine, cloning and cancer. Every protocol that coaxes a lab-grown cell toward a therapy is an attempt to steer this decision machinery on purpose; every tumor that dedifferentiates is the same machinery failing in the opposite direction. The 2012 Nobel to Gurdon and Yamanaka rewarded the proof that the decisions are reversible — the landscape can be climbed as well as descended.",
   "Cell-fate decisions are the operating system beneath stem-cell medicine, cloning and cancer. Every protocol that coaxes a lab-grown cell toward a therapy is an attempt to steer this decision machinery on purpose; every tumor that dedifferentiates is the same machinery failing in the opposite direction. That the decisions are also reversible — that the landscape can be climbed as well as descended — is the proof the regeneration and stem-cell lesson celebrates; this lesson establishes the machinery being steered."),
  ("Yet the landscape is not a one-way slide. Drosophila imaginal discs cultured for many generations sometimes switch valley — leg tissue transdetermining toward wing, a decision repeatable enough to map. John Gurdon showed in 1962 that a nucleus from an adult frog\\'s intestinal epithelium, injected into an enucleated egg, could support a swimming tadpole: the differentiated nucleus still held the whole program, exactly as Driesch\\'s regulative result implied for cytoplasm but now proven for genomes. And in 2006 Shinya Yamanaka reverted mouse fibroblasts to an embryonic-like stem state with just four transcription factors — Oct4, Sox2, Klf4 and c-Myc — creating induced pluripotent stem cells. Fate, it turns out, is a matter of position on the landscape, and position can be changed.",
   "Yet the landscape is not a one-way slide. Drosophila imaginal discs cultured for many generations sometimes switch valley — leg tissue transdetermining toward wing, a decision repeatable enough to map. And the deeper reversal — rolling a differentiated cell back up the hill to a stem-like state, the somatic-nucleus-transfer result that founded cloning and the reprogramming that followed — is the regeneration lesson\\'s subject; what it confirms here is the landscape logic itself: fate is a matter of position on the landscape, and position can be changed."),
  ("'Organoids are fate decisions run in three dimensions: intestinal, brain and kidney organoids self-pattern by the same conditional-signaling logic the embryo uses.',",
   "'Lab-grown organoids — the regeneration lesson takes them up in detail — self-pattern in three dimensions by the same conditional-signaling logic this lesson describes.',"),
]
for old, new in reps:
    assert old in src, 'missing carve target: ' + old[:60]
    src = src.replace(old, new, 1)

io.open(DST, 'w', encoding='utf-8').write(src)
print('written', DST)
print('topics:', src.count("    id: '"))
