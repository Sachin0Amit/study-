#!/usr/bin/env python3
"""Register the X60 library-org deepening pass in its four domain files."""
import io, sys

BASE = '/home/z/my-project/src/data/knowledge/fields/'

JOBS = [
    # (file, anchor-import-line, import-to-add, spread-text)
    ('life-sciences.ts',
     "import { x57CrossverifyTopics } from './x57-crossverify-pass'",
     "import { x60LibraryOrgDeepeningTopics } from './x60-library-org-pass'",
     """    // X60 library-org deepening pass (2026-10-27): the Developmental
    // Biology book sat at the 2ch/3ls floor; this lesson deepens it into a
    // new Cell Fate & Determination chapter (declared Ch2 in subject-
    // taxonomy, foundations-first between Building the Body and Mechanisms
    // & Model Organisms). Carved against bio-developmental-biology (which
    // OWNS gradients/Hox/gastrulation/organizer — Bicoid and Spemann stay
    // there), bio-cell-cycle-mitosis-checkpoints (division mechanics) and
    // the reproduction lessons (gametogenesis); the X57 misfolding lesson
    // keeps prion chemistry. Greps: 'cytoplasmic determinant',
    // 'asymmetric division', 'Waddington', 'canalization' had zero live
    // hits. This lesson OWNS specification MODES (autonomous/conditional/
    // syncytial), the Driesch isolation experiment, determination by
    // transplantation, the C. elegans 959-cell lineage/PAR polarity and
    // Waddington's epigenetic landscape with its reprogramming sequel.
    ...x60LibraryOrgDeepeningTopics.filter((t) => t.domain === 'Life Sciences'),
"""),
    ('emerging-interdisciplinary.ts',
     "import { x59LibraryOrgBacklogPassTopics } from './x59-library-org-pass'",
     "import { x60LibraryOrgDeepeningTopics } from './x60-library-org-pass'",
     """    // X60 library-org deepening pass (2026-10-27): lands in the
    // Programming Living Cells chapter after the intro (branch
    // Bioengineering). Carved against emer-synthetic-biology (which OWNS
    // parts/standardization and the toggle/repressilator circuits),
    // bio-synbio-dbtl-practice (which OWNS the DBTL process and the
    // artemisinin/minimal-genome cases) and x14 heredity-biotech (which
    // OWNS recombinant-DNA organism engineering). Greps: 'error-prone
    // PCR', 'saturation mutagenesis', 'DNA shuffling', 'sitagliptin' had
    // zero live hits. This lesson OWNS lab evolution as an engineering
    // method: genotype-landscape logic, library construction,
    // screening/selection, the Chen & Arnold 1993 subtilisin lineage,
    // Stemmer's DNA shuffling and the industrial enzyme cases.
    ...x60LibraryOrgDeepeningTopics.filter((t) => t.domain === 'Emerging & Interdisciplinary'),
"""),
    ('humanities.ts',
     "import { x58LibraryOrgDeepeningPassTopics } from './x58-library-org-pass'",
     "import { x60LibraryOrgDeepeningTopics } from './x60-library-org-pass'",
     """    // X60 library-org deepening pass (2026-10-27): the Economic History
    // book sat at the 2ch/3ls floor; this lesson opens its new Money &
    // Financial Crises chapter (declared Ch3 in subject-taxonomy, after
    // Trade/Industrialization and The Great Divergence). Carved against
    // x30's hist-twentieth-century (which OWNS the interwar story's
    // POLITICAL consequences), the international-relations lesson (which
    // names Kindleberger's argument in one paragraph), the finance book's
    // money-and-banking lesson (which OWNS the DOMESTIC bank-run
    // microeconomics, Diamond-Dybvig and deposit insurance) and
    // hum-postwar-settlement (which OWNS the postwar institutions).
    // Greps: 'price-specie', 'gold bloc', 'debt-deflation',
    // 'Creditanstalt' had zero live hits. This lesson OWNS the MONETARY
    // MECHANICS: mint parity, the rules of the game, the asymmetric
    // 1925-28 restoration, deflationary transmission across countries,
    // the leave-gold-recover evidence and the Bretton Woods design lesson.
    ...x60LibraryOrgDeepeningTopics.filter((t) => t.domain === 'Humanities'),
"""),
    ('social-sciences.ts',
     "import { x56VcePassTopics } from './x56-vce-pass'",
     "import { x60LibraryOrgDeepeningTopics } from './x60-library-org-pass'",
     """    // X60 library-org deepening pass (2026-10-27): three thin-book
    // deepenings. urb-heat-island-design lands in The Built Environment
    // (field Urban Planning) — carved against env-urban-planning (which
    // OWNS zoning and the design process), soc-urbanization-cities
    // (agglomeration economics) and urb-housing-segregation (which OWNS
    // redlining's HISTORY; this lesson takes its climatic CONSEQUENCE and
    // defers the history there). Greps: 'heat island', 'cool roof', 'sky
    // view', 'evapotranspiration' had zero live hits — it OWNS urban
    // thermal physics: albedo/thermal mass, latent-vs-sensible, canyon
    // geometry, anthropogenic heat, magnitudes and the design menu.
    // anth-bioarchaeology-bones lands in Archaeology — carved against
    // anth-archaeology-methods (which OWNS survey/excavation, radiocarbon
    // and dendrochronology, formation processes and taphonomy). Greps:
    // 'bioarchaeology', 'enamel hypoplasia', 'criba orbitalia', 'Harris
    // line' had zero live hits — it OWNS the skeleton as archive:
    // demographic profiling, stress markers, isotope diet and mobility,
    // and the NAGPRA ethics layer. media-video-games-interactive lands in
    // The Attention Economy — carved against soc-media-communication
    // (which OWNS attention economics and filter bubbles) and
    // gp-mass-media-society-responsibility (which OWNS regulation/watchdog
    // duties). Greps: 'video game', 'loot box', 'esports', 'MDA framework'
    // had zero live hits — it OWNS the interactive medium: industrial
    // history from Spacewar! to the 1983 crash to the NES revival, the MDA
    // vocabulary, free-to-play economics and the state of effects research.
    ...x60LibraryOrgDeepeningTopics.filter((t) => t.domain === 'Social Sciences'),
"""),
]

for fname, anchor, imp, spread in JOBS:
    path = BASE + fname
    src = io.open(path, encoding='utf-8').read()
    filter_sig = spread.strip().splitlines()[-1].strip()
    if filter_sig in src:
        print(f"{fname}: spread already present, skipping file")
        continue
    if imp in src:
        print(f"{fname}: import already present, skipping import insert")
    else:
        assert anchor in src, f"{fname}: import anchor not found"
        src = src.replace(anchor, anchor + '\n' + imp, 1)
    # insert spread before the final topics-array close "  ],\n}" at EOF
    tail = src.rstrip()
    assert tail.endswith('  ],\n}'), f"{fname}: unexpected EOF tail"
    body = tail[: -len('  ],\n}')].rstrip('\n')
    src = body + '\n\n' + spread + '  ],\n}\n'
    io.open(path, 'w', encoding='utf-8').write(src)
    print(f"{fname}: registered")
print('done')
