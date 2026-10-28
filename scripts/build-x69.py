#!/usr/bin/env python3
"""Build x69-library-org-convergence.ts from the saved x60 file:
keep 4 unique lessons, drop 2 near-duplicates, re-carve 2 overlaps."""
import re

src = open("/tmp/my-x60.ts").read()

# --- extract topic objects by id ---
def extract(tid):
    i = src.find("  {\n    id: '" + tid + "'")
    assert i >= 0, tid
    # find matching close: next "\n  },\n" at depth 0 — use brace counting from 'i'
    depth = 0
    j = i
    while True:
        c = src[j]
        if c == "{":
            depth += 1
        elif c == "}":
            depth -= 1
            if depth == 0:
                break
        j += 1
    return src[i : j + 1]

keep = [
    "bio-dev-evo-devo",
    "bio-marine-coastal-habitats",
    "emer-bioinformatics-sequencing-assembly",
    "env-nuclear-fission-fusion",
]
topics = {t: extract(t) for t in keep}

# ---------- re-carve lesson 3: compress the three chemistry paras into one bridge ----------
t = topics["emer-bioinformatics-sequencing-assembly"]

sanger_start = t.find("The first generation is Frederick Sanger")
reseq_start = t.find("When a good reference exists")
assert 0 < sanger_start < reseq_start

bridge = (
    "The instrument tour — Sanger's chain-termination chemistry, Illumina's "
    "sequencing-by-synthesis with reversible terminators, and the single-molecule long reads of "
    "Pacific Biosciences and Oxford Nanopore — is told in the genome-project lesson; what matters "
    "for assembly is what each chemistry leaves behind. Sanger-era capillary runs delivered long "
    "(roughly 800-1,000 base) reads but one at a time; second-generation flow-cells parallelized the "
    "same termination idea into hundreds of millions of 50-300-base reads whose errors are almost "
    "all substitutions, each base carrying a quality score on the Q scale (Q30 = one error per "
    "thousand); long reads reach tens of kilobases to megabases, paying for length with higher raw "
    "error rates that random-error consensus passes wash out — and nanopore's portability put "
    "sequencing in the field during the 2015 Ebola outbreak. Read length, throughput and error "
    "profile are the three numbers every assembler is designed around, and the trade between them "
    "explains the entire algorithmic history that follows."
)
t = t[:sanger_start] + bridge + "\"," + t[reseq_start - 2 :]

# update concepts list for lesson 3
old_concepts3 = re.search(r"concepts: \[[^\]]+\],", t).group(0)
new_concepts3 = """concepts: [
      'reads, not chromosomes: why assembly exists',
      'three chemistry generations in one paragraph: read length, throughput, error profile',
      'assembly as a graph problem: OLC versus de Bruijn k-mer graphs',
      'repeats: the ambiguity that read length resolves',
      'coverage depth C = NL/G and the Lander\\u2013Waterman view',
      'N50 and what makes an assembly honest',
      'mapping with the Burrows\\u2013Wheeler transform; variant calling; T2T and pangenomes',
    ],"""
t = t.replace(old_concepts3, new_concepts3, 1)
topics["emer-bioinformatics-sequencing-assembly"] = t

# ---------- re-carve lesson 5: bridge the physics, keep the energy system ----------
t = topics["env-nuclear-fission-fusion"]

chain_start = t.find("A chain reaction is a self-sustaining accounting problem")
anatomy_start = t.find("Reactor anatomy is organized around the neutron budget")
safety_start = t.find("Safety is engineered as defense in depth")
assert 0 < chain_start < anatomy_start < safety_start

bridge5 = (
    "The neutron physics inside the vessel — why slow neutrons split U-235 efficiently, how "
    "moderator, control rods and a stalk of delayed neutrons hold the multiplication factor k at "
    "exactly 1, and why decay heat demands cooling even after shutdown — is the reactor-physics "
    "lesson's territory. This lesson takes the machine as given and follows the energy system "
    "outward: the plants, the accidents, the waste, the economics and the fusion horizon. The one "
    "physics number worth carrying is energy density: one kilogram of U-235, completely fissioned, "
    "releases about 8 \\u00d7 10\\u00b9\\u00b3 joules — roughly 24 gigawatt-hours thermal, the energy of well "
    "over three thousand tonnes of coal — the claim behind every economic and waste argument that "
    "follows."
)
t = t[:chain_start] + bridge5 + '",' + t[safety_start - 2 :]

# trim the control-rod teaching clause in the anatomy paragraph
t = t.replace(
    "Control rods of neutron-absorbing boron or cadmium slide in and out to hold k exactly at 1, backed by soluble poisons in the water itself. The coolant",
    "The neutron budget is trimmed by control rods and soluble poisons — the reactor-physics lesson's machinery. The coolant",
)
# update concepts for lesson 5
old_concepts5 = re.search(r"concepts: \[[^\]]+\],", t).group(0)
new_concepts5 = """concepts: [
      'energy density: 24 GWh from a kilogram of U-235',
      'plant anatomy: fuel, pressure vessel, containment',
      'pressurized versus boiling light-water reactors',
      'defense in depth and the three accident histories',
      'the fuel cycle and deep geological repositories',
      'small modular reactors and Gen-IV designs',
      'fusion: D\\u2013T reactions, ITER and NIF ignition',
    ],"""
t = t.replace(old_concepts5, new_concepts5, 1)
topics["env-nuclear-fission-fusion"] = t

# ---------- assemble x69 file ----------
header = """import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X69 pass (2026-10-28): LIBRARY-ORG-20261028-3 — Library            */
/*  Organization Loop convergence resolution. This session's           */
/*  six-lesson deepening pass (authored from the same clean audit:      */
/*  101 books all >=2ch/>=3ls, twenty books at the 3-lesson floor)      */
/*  was rebased onto origin/main and re-carved against the parallel     */
/*  session's merged X60-X67 + X68 passes, following the X67/X68        */
/*  merge-carve precedent.                                              */
/*                                                                     */
/*  DROPPED as near-duplicates of already-merged ownership (2):         */
/*  - emer-directed-evolution vs ku-synbio-directed-evolution (their    */
/*    x64 pass owns directed evolution inside the Synthetic Biology     */
/*    book: libraries, screening vs selection, the Arnold landmarks,    */
/*    phage display).                                                   */
/*  - hist-money-credit-crises vs ku-hum-eco-money-bretton-woods        */
/*    (their x67 pass owns the gold standard -> Bretton Woods -> 1971   */
/*    arc inside the Economic History book) and vs                      */
/*    ku-hum-money-credit-financial-revolutions (their x68 owns the     */
/*    finance layer: bills of exchange, Medici, VOC, BoE 1694, the      */
/*    1720 bubbles).                                                    */
/*                                                                     */
/*  RE-CARVED against newly enriched neighbours (2 kept):               */
/*  - emer-bioinformatics-sequencing-assembly: x14-heredity-biotech's   */
/*    HGP lesson now owns the instrument tour (Sanger/Illumina/PacBio/  */
/*    nanopore chemistry + cost curve), so the three chemistry          */
/*    paragraphs were compressed into one bridge and this lesson OWNS   */
/*    the computational pipeline: coverage arithmetic, de Bruijn        */
/*    assembly, N50, BWT mapping, variant calling, T2T + pangenomes.    */
/*  - env-nuclear-fission-fusion: tech-nuclear-fission-reactors owns    */
/*    the reactor physics (moderation, delayed neutrons, reactivity,    */
/*    control-rod mechanics, decay heat), so the chain-reaction and     */
/*    control-rod teaching was bridged to one paragraph and this        */
/*    lesson OWNS the energy-system layer: energy density arithmetic,   */
/*    plant anatomy, the three accident histories, fuel cycle and       */
/*    Onkalo, SMR/fleet economics, fusion status (ITER + NIF).          */
/*                                                                     */
/*  KEPT uniquely-owned lessons (4, +6,514 verified words):             */
/*  - bio-dev-evo-devo (Developmental Biology +1 chapter 'Evo-Devo:     */
/*    How Development Evolves'): the parallel session added Cell Fate   */
/*    and Stem Cells & Regeneration chapters but left the evolutionary  */
/*    layer untouched. Carved against bio-developmental-biology         */
/*    (gastrulation/organizer/Bicoid/Hox basics),                      */
/*    bio-dev-model-organisms (the screens) and their new               */
/*    bio-cell-fate-determinants + bio-dev-stem-cells-regeneration.     */
/*    'deep homology'/'heterochrony'/'paedomorphosis'/'2R hypothesis'   */
/*    had zero live hits.                                               */
/*  - bio-marine-coastal-habitats (Marine Biology +1 chapter 'Coastal   */
/*    Habitats & Communities'): their marine book untouched. Carved     */
/*    against bio-marine-biology-oceans (depth zonation/vents/coral     */
/*    symbiosis), env's otter cascade + acidification, the ecology      */
/*    lesson's Pisaster experiment, and the botany root lesson that     */
/*    owns pneumatophore ANATOMY (this lesson owns mangrove ECOSYSTEM   */
/*    function). 'Connell'/'Chthamalus'/'bioerosion' had zero hits.     */
/*  - emer-bioinformatics-sequencing-assembly (Bioinformatics &         */
/*    Genomics +1 chapter 'Sequencing & Assembly'): their bioinfo book  */
/*    untouched; 'N50'/'de Bruijn'/'Burrows' had zero live hits in      */
/*    this book's field.                                                */
/*  - env-nuclear-fission-fusion (Energy & Sustainability +1 lesson in  */
/*    the pre-declared Nuclear Energy chapter): their energy book       */
/*    untouched; 'Onkalo'/'void coefficient'/'NIF' had zero hits.       */
/*                                                                     */
/*  Sources: as in the original pass — Gilbert & Barone (NCBI           */
/*  Bookshelf) + Carroll, Endless Forms Most Beautiful + Chan et al.    */
/*  2010; Connell 1961 + Darwin 1842 + Enewetak drilling; NHGRI +       */
/*  Lander & Waterman 1988 + Nurk et al. 2022 + Liao et al. 2023;       */
/*  IAEA/WNA + UNSCEAR + ITER.org + LLNL NIF announcement.              */
/* ------------------------------------------------------------------ */

export const x69LibraryOrgConvergenceTopics: KnowledgeTopic[] = [
"""

body = ",\n".join(topics[t].rstrip().rstrip(",") for t in keep)
out = header + "\n" + body + ",\n]\n"
open("src/data/knowledge/fields/x69-library-org-convergence.ts", "w").write(out)
print("x69 written with", len(keep), "topics")
