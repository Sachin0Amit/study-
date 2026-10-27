#!/usr/bin/env python3
"""Register the X64 library-org pass in its three domain files (idempotent)."""
import io

BASE = '/home/z/my-project/src/data/knowledge/fields/'
IMP = "import { x64LibraryOrgPassTopics } from './x64-library-org-pass'"
ANCHOR = "import { x60LibraryOrgThinBooksPassTopics } from './x60-library-org-pass'"

JOBS = [
    ('life-sciences.ts', """    // X64 library-org deepening pass (2026-10-27): second thin-book
    // lesson for Developmental Biology, in a new Cell Fate &
    // Determination chapter (declared Ch2 in subject-taxonomy,
    // foundations-first). Owns the specification MODES, the Driesch
    // isolation experiment, determination testing, the C. elegans
    // lineage and Waddington's landscape; defers gradients to
    // bio-developmental-biology and potency/iPSCs/organoids to
    // bio-dev-stem-cells-regeneration (X60). Full carving in the x64
    // pass header.
    ...x64LibraryOrgPassTopics.filter((t) => t.domain === 'Life Sciences'),
"""),
    ('emerging-interdisciplinary.ts', """    // X64 library-org deepening pass (2026-10-27): second thin-book
    // lesson for Synthetic Biology, landing in Programming Living Cells
    // (branch Bioengineering). Owns lab evolution as an engineering
    // method (error-prone PCR, screening vs selection, the Chen & Arnold
    // 1993 subtilisin lineage, Stemmer shuffling, sitagliptin); defers
    // circuit mechanics to emer-synbio-genetic-circuits (X60) and DBTL
    // cases to bio-synbio-dbtl-practice. Full carving in the x64 header.
    ...x64LibraryOrgPassTopics.filter((t) => t.domain === 'Emerging & Interdisciplinary'),
"""),
    ('social-sciences.ts', """    // X64 library-org deepening pass (2026-10-27): three second lessons —
    // urb-heat-island-design in The Built Environment (owns urban thermal
    // physics; defers mobility to urb-urban-mobility-transit, X60),
    // anth-bioarchaeology-bones in Archaeology (owns the skeleton as
    // archive; defers fieldwork to anth-fieldwork-ethnography, X60) and
    // media-video-games-interactive in The Attention Economy (owns the
    // interactive medium; defers recommender feeds to
    // media-algorithmic-feed, X60). Full carving in the x64 pass header.
    ...x64LibraryOrgPassTopics.filter((t) => t.domain === 'Social Sciences'),
"""),
]

for fname, spread in JOBS:
    path = BASE + fname
    src = io.open(path, encoding='utf-8').read()
    sig = spread.strip().splitlines()[-1].strip()
    if sig in src:
        print(f'{fname}: spread already present, skipping')
        continue
    if IMP not in src:
        assert ANCHOR in src, f'{fname}: anchor missing'
        src = src.replace(ANCHOR, ANCHOR + '\n' + IMP, 1)
    tail = src.rstrip()
    assert tail.endswith('  ],\n}'), f'{fname}: unexpected EOF tail'
    body = tail[: -len('  ],\n}')].rstrip('\n')
    src = body + '\n\n' + spread + '  ],\n}\n'
    io.open(path, 'w', encoding='utf-8').write(src)
    print(f'{fname}: registered')
print('done')
