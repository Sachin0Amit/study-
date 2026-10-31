/**
 * Knowledge Universe — Logical Reasoning — Chapter 07: Non-Verbal & Abstract Reasoning
 * 2 lessons · ~3,468 words
 * fields: Logical Reasoning, Nonverbal Reasoning
 * legacy sources: aptitude.ts, x21-skills-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Figural Patterns, Nonverbal Reasoning]
 *
 * Lessons (snapshot at reorganization):
 *   07.1 fnd-visual-pattern-rules — Nonverbal Reasoning: Shape Attributes, Series and Rule Detection
 *   07.2 lr-paper-folding-figure-matrix — Paper Folding, Cutting and the Figure Matrix: Non-Verbal Reasoning at Speed
 */
import type { KnowledgeTopic } from '../../types'

export const logicalReasoningCh07: KnowledgeTopic[] = [
  {
    id: 'fnd-visual-pattern-rules',
    title: 'Nonverbal Reasoning: Shape Attributes, Series and Rule Detection',
    domain: 'Foundation Learning',
    field: 'Nonverbal Reasoning',
    branch: 'Figural Patterns',
    tier: 'intermediate',
    concepts: [
      'The attribute inventory: shape, count, rotation, shading, size, position',
      'Series: what changes, what stays',
      'Analogies: A is to B as C is to —',
      'Odd-one-out and rule detection',
      'Figure formation and decomposition',
      'Tracking two features at once',
      'Systematic elimination over intuition',
    ],
    words: 1367,
    readMins: 7,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Nonverbal reasoning strips language out of logic and leaves pure pattern: a row of figures obeying a hidden rule, one figure breaking it, or a matrix whose missing cell the rule determines. The method that beats these items is not an eye for patterns but a checklist: inventory the attributes each figure can vary — shape family, element count, rotation, shading, size, position — then track which attribute changes and how between consecutive frames. Every rule a test uses is some combination of those six attributes changing, staying, or trading off, so a systematic scan finds in seconds what intuition finds by luck. This lesson builds the inventory, the three item formats, and the two-feature tracking habit that separates fast solvers from flatterers.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Figural items are the purest measure of controlled comparison on any reasoning paper: no vocabulary, no prior knowledge, just rule-finding under time. The inventory method also generalises — it is the same disciplined attribute-scanning that powers debugging, diagram reading and data checking in every technical job.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Attribute inventory', def: 'The six axes every figure can vary along: shape family (which forms appear), count (how many of each), rotation (orientation and its step), shading (filled, empty, hatched, colour), size (large, small, growing), position (arrangement, overlap, distance). Scan in this fixed order every time — a fixed order beats a smart glance because it cannot be skipped by panic.' },
          { term: 'Series items', def: 'Four or five frames evolve; find the next. The rule is a per-attribute schedule: count increases by one, rotation advances 45 degrees clockwise, shading alternates. Read each attribute across the row separately — series rules are almost always one or two attributes changing while the rest stay fixed.' },
          { term: 'Analogy items', def: 'A is to B as C is to —: the first pair demonstrates the transformation; apply the SAME transformation to C. The discipline is naming the transformation explicitly ("rotate 90 degrees, add a dot") before looking at options; options are built to contain each single-step half of the transformation, so partial matches abound.' },
          { term: 'Rule detection and odd-one-out', def: 'One frame violates the rule the others share. Find the rule first from the majority — what four frames hold constant — then test the fifth against it. Scanning for the constant is faster than scanning for the difference: violations hide, constants advertise.' },
          { term: 'Figure formation', def: 'Which combination of pieces assembles into the target shape — mentally decompose the target (a notch here, a diagonal there) and match parts, watching for mirrored pieces that look right but fit wrong. Dissect the target\u2019s outline first; the outline\u2019s corners tell you which candidate edges must meet.' },
          { term: 'Two-feature tracking', def: 'Most medium and hard items vary two attributes at once, often in opposite directions (count rises while size falls). Holding two schedules in mind is the trained skill: name both aloud ("plus one arrow, minus one square"), and check the answer satisfies BOTH, because every option satisfies one.' },
        ],
      },
      {
        kind: 'para',
        text: 'Time discipline is part of the method. First pass on any item: one full inventory scan, then commit to the best-supported rule; if no rule emerges within the scan, eliminate options that fail the strongest single attribute (count is usually decisive) and choose among survivors. Marking a hard item and moving on is correct strategy — figural sets are dense and evenly weighted, so three easy items beat one stubborn matrix. The trained habit is trusting the inventory over the impression: an option that "looks right" but violates one named attribute is wrong, and an option that looks odd but satisfies every schedule is right.',
      },
      { kind: 'heading', text: 'Worked Example' },
      {
        kind: 'example',
        title: 'A two-feature series, decoded',
        steps: [
          'Frames: (1) one large filled triangle pointing up; (2) two medium filled triangles, the leading one pointing up; (3) three small filled triangles, the leading one pointing up; (4) four small empty triangles, leading one pointing up.',
          'Inventory scan — count: 1, 2, 3, 4 → next has five. Size: large, medium, small, small → suspects: size stopped mattering; not the rule. Shading: filled, filled, filled, empty → suspect a switch at the end.',
          'Re-scan shading against count: the number of EMPTY triangles is 0, 0, 1, 2 → next has three empty (and two filled, since five total). The size anomaly was a distractor; the real second feature is cumulative emptying.',
          'Rotation: leading triangle points up in every frame → constant, ignore.',
          'Answer requirement: five small triangles, three empty and two filled, leading triangle up. Options that show five filled triangles fail the empty-count schedule; options with four fail the count schedule.',
          'The habit generalises: when one schedule seems to break, re-scan the odd attribute as a CUMULATIVE quantity rather than a per-frame state — that single reinterpretation unlocks most "impossible" series.',
        ],
      },
      {
        kind: 'para',
        text: 'Odd-one-out items reward the same inventory run against the majority. Four frames share a rule — interior cross present, rotation multiples of 60 degrees, two elements — and the fifth breaks exactly one attribute. Find the constant set first, and prefer the simplest rule that fits all four: with count, rotation and shading all available, the common rule is usually one attribute, and the violation is one attribute. When two frames both look odd, widen the rule: a rule covering four frames that brands two as violators is mis-stated — recheck rotation steps and cumulative counts before trusting either candidate.',
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A series shows a square rotating 90 degrees clockwise each frame. The fifth frame\u2019s orientation is:',
            options: [
              'same as the first — the cycle resets after four',
              'rotated 450 degrees — continue past the cycle',
              'rotated 90 degrees counter-clockwise',
              'depends on shading',
            ],
            answer: 0,
            explain: 'Rotation is modular: 90-degree steps over four frames return to the start, so frame five matches frame one. Options built on linear rotation past 360 ignore the cycle.',
          },
          {
            q: 'In an analogy item, A to B adds one circle and doubles the shading stripes. C has two circles. The correct D must:',
            options: [
              'add one circle only',
              'double the stripes only',
              'have three circles AND doubled stripes',
              'match whichever option looks most like B',
            ],
            answer: 2,
            explain: 'The transformation has two components; the analogy applies BOTH to C: two circles become three, and the stripe count doubles. Options honouring one component are the standard distractors.',
          },
          {
            q: 'Five frames share: even element count, top-right rotation, no shading. A candidate odd-one-out differs in shading but fits count and rotation. You should:',
            options: [
              'confirm it as the odd one — any single violation suffices',
              'recheck: a rule violation must also be consistent with the others being regular',
              'reject it — shading is not in the inventory',
              'pick the largest frame instead',
            ],
            answer: 0,
            explain: 'Odd-one-out needs exactly one attribute violating the majority rule; the shading frame fits every other attribute, so it is the violator. Option 2\u2019s worry applies when TWO frames look odd.',
          },
          {
            q: 'The core reason for scanning attributes in a fixed order is:',
            options: [
              'fixed order is faster for easy items only',
              'it prevents attribute-blindness under time pressure — every axis gets checked',
              'test-setters order rules by difficulty',
              'it avoids the need to track two features',
            ],
            answer: 1,
            explain: 'Panic narrows attention to one salient attribute; a fixed scan guarantees the second feature is seen — and hard items hide in exactly that second feature.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The classic losses: fixing on the first attribute that changes and ignoring the second schedule — the standard hard-item trap; treating rotation as linear past a completed cycle; reading mirrored pieces as fitting in formation items; and impression-based elimination, where an option "looks right" while violating one named attribute. Against all of these the defence is the same: name the schedules out loud, check the answer against BOTH, and never let appearance overrule an attribute you have explicitly tracked.',
      },
      { kind: 'heading', text: 'Study Path' },
      {
        kind: 'list',
        items: [
          'Before: Experimental Design — the same controlled-comparison instinct in scientific form.',
          'Next: mathematics sequences and series — the numeric twin of figural series.',
          'Revision cue: invent a five-frame series varying two attributes, then solve it a day later from cold.',
        ],
      },
      { kind: 'heading', text: 'Key Takeaways' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Inventory six attributes in a fixed order: shape, count, rotation, shading, size, position.',
          'Series rules are per-attribute schedules; re-scan breaking attributes as cumulative counts.',
          'Analogies require naming the full transformation and applying every component.',
          'Odd-one-out: find the majority rule first, then the single violating attribute.',
          'Hard items hide in the second feature — track two schedules and check both.',
        ],
      },
    ],
  },
  // ================================================================
  // LOGICAL REASONING — Ch8 Non-Verbal & Abstract Reasoning
  // §8.2 — paper folding/cutting, figure matrices, mirror and water
  // images, embedded figures.
  // Carve: ku-fnd-visual-pattern-rules OWNS figural series, shape
  // attributes and rule detection generally. This lesson owns the
  // FOLD/CUT simulation, the matrix format, and mirror/water image
  // letter-survival mechanics — none of which that lesson touches.
  // ================================================================
  {
    id: 'lr-paper-folding-figure-matrix',
    title: 'Paper Folding, Cutting and the Figure Matrix: Non-Verbal Reasoning at Speed',
    domain: 'Aptitude & Test Preparation',
    field: 'Logical Reasoning',
    branch: 'Figural Patterns',
    tier: 'core',
    concepts: [
      'the fold trace: a punch passes through every layer above it',
      'the unfold cascade: mirror across fold lines, last fold first',
      'rotation-proof cut tracking: corner, edge and centre holes',
      'the figure matrix: row rule and column rule, tracked as two features',
      'mirror images: the vertical axis and the surviving letters',
      'water images: the horizontal axis and its own survivors',
      'embedded figures and figure completion',
    ],
    words: 2101,
    readMins: 11,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'A square sheet is folded twice, a hole is punched through the stack, and the question shows the folded state: where will the holes appear when the paper is unfolded? This family — paper folding and cutting, figure matrices, mirror and water images, embedded figures — is the non-verbal backbone of school-entrance screens, defence-academy selection batteries and employability suites, precisely because it needs no language and no formulas: only the discipline of simulating, on paper or in the mind\u2019s eye, transformations that follow exact rules. The good news is that every transformation in the family is reversible, and reversing them in the right order is a learnable procedure, not a talent.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Non-verbal items are usually massed at the end of reasoning sections in blocks of ten to twenty, at twenty to thirty seconds each for the prepared — the fastest consistent marks on the paper. They are also the items where unprepared candidates lose the most time, because guessing feels almost defensible on figures. It is not: the simulation rules below turn every item in the family into a checkable computation.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The fold trace is rule one: a punch passes through EVERY layer of paper stacked above and below it, so a hole in the folded state fans out into as many holes as there were layers over the punch point. Fold a square once (two layers), punch once — the unfolded sheet shows TWO holes, symmetric across the fold line. Fold twice (four layers where the quarters stack), punch once — FOUR holes, mirrored across both fold lines. The counting is not decoration; options regularly include the one-hole and two-hole versions of a four-hole answer, and layer-counting eliminates them before any geometry begins.',
      },
      {
        kind: 'para',
        text: 'The unfold cascade is rule two: unfold in REVERSE order of folding — the last fold made is the first fold opened — and at each opening, mirror every existing hole across the fold line that opens. The mirror is exact: a hole one unit from the fold reflects to one unit on the other side, on the perpendicular from the hole to the line. Two folds, punched once: open the last fold (two holes mirrored across it), then open the first fold (both holes mirrored again, giving four, in the full pattern of the original fold geometry). Executing the cascade in the wrong order is the family\u2019s signature error — the hole count comes out right while the geometry lands wrong, which is precisely the distractor the options carry.',
      },
      {
        kind: 'figure',
        caption: 'The unfold cascade: punch one hole through the twice-folded sheet (4 layers); open the last fold first, mirroring the hole across it, then open the first fold, mirroring both — four holes, one per layer, arranged by the fold-line mirrors.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Unfold cascade with mirrored holes">
  <style>.d{font-family:Georgia,serif;font-size:13px;fill:#52525b}.b{font-family:Georgia,serif;font-size:14px;font-weight:bold;fill:#3f3f46}.sq{fill:#fafafa;stroke:#8a8a93;stroke-width:1.8}.fld{stroke:#0f766e;stroke-width:2;stroke-dasharray:6 4}.h{fill:#e11d48}.ar{stroke:#e11d48;stroke-width:2.2;fill:none}</style>
  <text class="b" x="30" y="26">Folded state (4 layers)</text>
  <rect class="sq" x="60" y="46" width="90" height="90"/>
  <circle class="h" cx="105" cy="91" r="6"/>
  <path class="ar" d="M 175 91 l 45 0" marker-end="url(#ma)"/>
  <text class="d" x="182" y="82">open last fold</text>
  <text class="b" x="245" y="26">After first opening (2 holes)</text>
  <rect class="sq" x="280" y="46" width="180" height="90"/>
  <line x1="370" y1="46" x2="370" y2="136" stroke="#0f766e" stroke-width="2" stroke-dasharray="6 4"/>
  <circle class="h" cx="335" cy="91" r="6"/><circle class="h" cx="405" cy="91" r="6"/>
  <path class="ar" d="M 480 91 l 45 0" marker-end="url(#ma)"/>
  <text class="d" x="486" y="82">open first fold</text>
  <text class="b" x="550" y="26">Fully unfolded (4 holes)</text>
  <rect class="sq" x="585" y="46" width="180" height="180"/>
  <line x1="585" y1="136" x2="765" y2="136" stroke="#0f766e" stroke-width="2" stroke-dasharray="6 4"/>
  <line x1="675" y1="46" x2="675" y2="226" stroke="#0f766e" stroke-width="2" stroke-dasharray="6 4"/>
  <circle class="h" cx="640" cy="81" r="6"/><circle class="h" cx="710" cy="81" r="6"/><circle class="h" cx="640" cy="191" r="6"/><circle class="h" cx="710" cy="191" r="6"/>
  <text class="d" x="30" y="260">Hole count = layer count; hole positions = the punch mirrored across each fold line, last fold first.</text>
  <defs><marker id="ma" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="#e11d48"/></marker></defs>
</svg>`,
      },
      {
        kind: 'para',
        text: 'Rotation-proof cut tracking handles cuts that are not simple holes: corner notches, edge slits, half-moons. The rule is unchanged — every cut mirrors across each fold line as it opens — but the orientation of the cut must be tracked, because a notch cut into a folded edge opens into a shape whose mirror completes it (half-circles become full circles, half-arrows become double-headed or reversed arrows). The discipline: label the cut\u2019s orientation relative to the fold line (parallel or perpendicular; which side the material was removed from), and mirror THAT orientation across. Options test orientation far more than position — the wrong-option shapes are almost always correctly counted, wrongly rotated.',
      },
      {
        kind: 'para',
        text: 'The figure matrix is the two-dimensional generalization of series: a 3×3 grid of figures with one cell missing, where the rows obey one rule and the columns another (or both obey the same rule — read the first two rows to find out). The method is two-feature tracking, straight from the figural-pattern toolkit: choose two features — element count and shading, rotation and position, outer shape and inner shape — and track each separately down each row and across each column. A feature that changes by +1 down each row and another that alternates across columns pins the missing cell exactly. The matrix discipline is never to describe the missing figure as a whole (“a dark triangle with two dots, sort of”); it is to compute each feature\u2019s value from the row rule and the column rule, then assemble the figure from the computed features.',
      },
      {
        kind: 'para',
        text: 'Mirror images flip across a VERTICAL axis: left becomes right, top stays top. For letter and word items the survival list is the tool — letters that look unchanged in a vertical mirror: A, H, I, M, O, T, U, V, W, X, Y (vertically symmetric), so a word like “MOM” or “AWAY” mirrors into a recognizably orderly shape while “BED” visibly breaks (B, E and D each flip into non-letters). Clock-face and time-notation mirrors have their own classic: a mirror-clock reading of h:m corresponds to the actual time 11:60 − h:m (i.e., 12:00 minus the shown time) — so a mirror showing 3:40 means the true time is 8:20. The check: mirror time + true time = 12:00 (on a 12-hour face).',
      },
      {
        kind: 'para',
        text: 'Water images flip across a HORIZONTAL axis: top becomes bottom, left stays left — the reflection in still water. The letter-survival list changes accordingly: B, C, D, E, H, I, K, O, X survive a water flip (horizontally symmetric), while A, M, T, U, V, W, Y break. The classic confusions between the two formats are the point: candidates mirror left-right when the water-flip was asked. Anchor each format to its axis — mirror = vertical axis like a mirror on the wall; water = horizontal axis like a lake surface — and read the item\u2019s instruction word every single time, because setters alternate them within a single block of ten.',
      },
      {
        kind: 'para',
        text: 'Embedded figures ask which one of five option figures is hidden inside a complex composite; completion items show a figure with a missing quadrant to be chosen. The embedded-figure craft is tracing, not staring: pick a distinctive fragment of the composite (a rare angle, a double curve, an odd junction) and trace its continuation through the noise, checking each option against the fragment rather than the whole. Completion craft: the two axes of symmetry (or the two diagonals) of the master figure transfer the known quadrants into the missing one — rotate or reflect the known quadrant across the symmetry line and read off what must appear. Both formats reward treating figures as constructions with rules, never as pictures to be admired.',
      },
      {
        kind: 'example',
        title: 'Worked example — one fold-and-punch, one matrix',
        steps: [
          'Fold item: a square is folded along its vertical midline (left half over right), then along its horizontal midline (top over bottom). One hole is punched through the folded corner nearest the centre of the original square. Where are the holes on unfolding?',
          'Layer count: two folds → four layers at the punch point → four holes guaranteed. Options with one or two holes die here.',
          'Cascade: the LAST fold (horizontal) opens first — mirror the punch across the horizontal midline: two holes stacked vertically. Then the first fold (vertical) opens — mirror BOTH holes across the vertical midline: four holes in a 2×2 block, centred on the original square\u2019s centre.',
          'Verdict: four holes at the four positions around the centre, each the same distance from it — the pattern of the punch and its three fold-mirrors.',
          'Matrix item: a 3×3 grid where each row shows a shape containing 1, 2, 3 small squares (growing left to right) and each column rotates the shape by 90° clockwise from the column above. Missing cell: row 3 (3 squares), column 3 (rotation 3 × 90° = 270°). Assemble from the two computed features — never from a holistic “vibe” of the figure.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Opening folds in the wrong order produces a correctly counted, wrongly placed pattern — the designed near-miss of the family. Mirror-versus-water confusion flips left-right when top-bottom was asked: anchor to the axis (wall mirror = vertical; lake = horizontal). In matrices, describing the missing figure holistically instead of computing feature values invites the “looks right” distractor. And in embedded figures, the option matching the composite\u2019s GENERAL look while distorting one junction is the trap — trace the distinctive fragment, not the silhouette.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Fold trace', def: 'A punch passes through every layer: hole count on unfolding = layer count at the punch.' },
          { term: 'Unfold cascade', def: 'Unfold in reverse fold order, mirroring every existing hole across each fold line as it opens.' },
          { term: 'Rotation-proof tracking', def: 'Tracking a cut\u2019s orientation relative to the fold line, so mirrors restore shape (half-cuts completing) correctly.' },
          { term: 'Figure matrix', def: 'A 3×3 grid with row rules and column rules; the missing cell is computed feature-by-feature, never guessed whole.' },
          { term: 'Two-feature tracking', def: 'Following two independent features (count, shading, rotation, position) through rows and columns to pin the missing figure.' },
          { term: 'Mirror image', def: 'Reflection across a vertical axis (left↔right); surviving letters A, H, I, M, O, T, U, V, W, X, Y.' },
          { term: 'Water image', def: 'Reflection across a horizontal axis (top↔bottom); surviving letters B, C, D, E, H, I, K, O, X.' },
          { term: 'Mirror-clock rule', def: 'Mirror time + true time = 12:00 on a 12-hour face: a mirror showing 3:40 means 8:20.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A square is folded twice and a single hole is punched through all layers. The unfolded sheet shows:',
            options: ['1 hole', '2 holes', '4 holes', '8 holes'],
            answer: 2,
            explain: 'Two folds stack four layers at the punch, and the punch passes through every layer: four holes. Counting layers first eliminates the one- and two-hole distractors before any geometry starts.',
          },
          {
            q: 'In the unfold cascade, the folds are opened:',
            options: ['In the order they were made', 'In reverse order of folding, last first', 'All at once', 'From the outside in, regardless of order'],
            answer: 1,
            explain: 'Physical unfolding reverses the folding sequence: the last fold made opens first, and each opening mirrors all existing holes across its line. Wrong order = right count, wrong geometry — the family\u2019s signature near-miss.',
          },
          {
            q: 'A mirror shows a clock reading 3:40. The actual time is:',
            options: ['8:20', '9:20', '3:40', '6:50'],
            answer: 0,
            explain: 'Mirror time + true time = 12:00: 11:60 − 3:40 = 8:20. The check line is worth memorizing — it turns every mirror-clock item into a subtraction.',
          },
          {
            q: 'Which word looks the SAME in a vertical mirror?',
            options: ['BED', 'MOM', 'POT', 'DAW'],
            answer: 1,
            explain: 'M, O are vertically symmetric letters (with A, H, I, T, U, V, W, X, Y), so MOM mirrors into itself. B, E, D, P, T (in the vertical sense) break — BED is the classic textbook example of a mirror-breaking word.',
          },
          {
            q: 'A water image flips a figure across:',
            options: ['A vertical axis', 'A horizontal axis', 'Both axes', 'Neither axis'],
            answer: 1,
            explain: 'Water = the lake surface = horizontal axis: top becomes bottom, left stays left. The wall-mirror (vertical axis) is the perennially confused sibling — read the instruction word every time.',
          },
          {
            q: 'In a 3×3 figure matrix, rows add one element per cell and columns rotate the figure 90° clockwise. The missing bottom-right cell is computed as:',
            options: ['The figure that “looks like” its row', 'Element count from the row rule, rotation from the column rule, assembled', 'A copy of the top-left cell rotated', 'Any symmetric figure'],
            answer: 1,
            explain: 'Two-feature tracking: the row fixes the element count (3 for the last row), the column fixes the rotation (270° for the third column); the answer is the assembled figure from both computed values. Holistic matching is exactly how the “looks right” distractor claims victims.',
          },
          {
            q: 'A notch cut into a FOLDED edge unfolds into:',
            options: ['The same notch', 'A mirrored shape completed across the fold line (e.g., half-circle → full circle)', 'Two separate notches far apart', 'Nothing — edge cuts vanish'],
            answer: 1,
            explain: 'The mirror of the cut completes it across the fold line: half-shapes cut at a folded edge open into whole shapes. Tracking the cut\u2019s orientation relative to the fold — not just its position — is what makes the geometry land.',
          },
          {
            q: 'In embedded-figure items, the reliable method is:',
            options: ['Match the overall silhouette of the composite', 'Trace a distinctive fragment (odd junction, rare angle) through the composite', 'Choose the simplest option', 'Count elements in every option'],
            answer: 1,
            explain: 'Options copy the composite\u2019s general look while distorting one junction; only tracing a distinctive fragment through the noise catches the distortion. Silhouette-matching is the trap the format is built around.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'The attribute-inventory and rule-detection groundwork for all figural work lives in the shape-attributes lesson of this subject\u2019s nonverbal family — read it first if you have not. The symmetry mathematics under mirror and water images (reflection groups, letter isometries) belongs to the Mathematics Master Library\u2019s geometry chapters; the fold-and-punch structure is a physical cousin of the permutation machinery in the counting chapters. Within this book, this lesson completes the nonverbal ladder: series, then attributes, then folds and matrices.',
        tone: 'path',
      },
    ],
  },
]
