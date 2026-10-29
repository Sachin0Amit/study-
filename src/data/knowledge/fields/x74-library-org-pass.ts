import type { KnowledgeTopic } from '../types'

/* ------------------------------------------------------------------ */
/*  X74 pass (2026-10-29): LIBRARY-ORG-20261029-2 — the Library        */
/*  Organization Loop run that began on the stale Oct-26 sandbox base  */
/*  and converged with origin/main (merge-carve precedent, X67-X72).   */
/*                                                                     */
/*  WHAT HAPPENED: this sandbox audited a 2ch/3ls thin-books queue     */
/*  (developmental-biology, synthetic-biology, economic-history,       */
/*  media-communication, structural-seismic-engineering, garden-       */
/*  growing) and drafted six lessons — but the push revealed origin/   */
/*  main had already merged five library-org rounds (X60 round two     */
/*  through X70 round five) covering the SAME books with the SAME      */
/*  subjects: remote already owns cell fate + stem cells (bio-cell-    */
/*  fate-determinants, bio-dev-stem-cells-regeneration), directed      */
/*  evolution (synbio-directed-evolution), money/banking (hum-money-   */
/*  credit-financial-revolutions, hum-eco-money-bretton-woods),        */
/*  propaganda (media-propaganda-persuasion — identical topic id,      */
/*  ours dropped), garden IPM (grow-pests-diseases-ipm). Convergence   */
/*  is independent confirmation: the books genuinely needed those      */
/*  chapters. Per the merge-carve precedent this pass DROPPED the six  */
/*  drafted lessons and KEPT only the territory origin/main still      */
/*  lacks (git grep zero live hits):                                   */
/*                                                                     */
/*  1. eng-bridges-long-span (KEPT WHOLE, 1,744w): the span-form       */
/*     engineering origin/main never wrote — remote added Ground &     */
/*     Foundations to the structural book instead. 'tacoma',           */
/*     'aeroelastic', 'silver bridge', 'hyatt regency', 'i-35w',       */
/*     'fracture-critical', 'akashi', 'millau', 'quebec bridge',       */
/*     'forth bridge', 'russky' all ZERO hits on origin/main.          */
/*  2. Three convergence enrichments re-applied onto merged lessons,   */
/*     each a fragment absent from origin/main:                        */
/*     - synbio-directed-evolution (x64): + Spiegelman's monster 1967  */
/*       (evolution-in-a-tube before the field had a name), the 20^n   */
/*       library-arithmetic sentence and PACE continuous evolution     */
/*       ('spiegelman'/'pace-style' zero hits).                        */
/*     - media-propaganda-persuasion (x67): + Cialdini 1984 six        */
/*       principles, Dichter/Packard motivation research, Bentsen      */
/*       1985 astroturf coinage ('cialdini'/'dichter'/'bentsen' zero   */
/*       hits; astroturfing was name-checked without its origin).      */
/*     - hum-eco-money-bretton-woods (x60): + the deeper origins —     */
/*       Lydia electrum coinage ~600 BCE, Song jiaozi 1024 as the      */
/*       first government paper money, Yuan over-issuance as the       */
/*       first fiat-inflation lesson ('jiaozi' zero hits; Bagehot      */
/*       already owned by fin-banks-create-money — skipped).           */
/*                                                                     */
/*  Sources read for grounding (bridges): Petroski's Engineers of      */
/*  Dreams + FHWA bridge histories + Billah & Scanlan 1991 (Tacoma     */
/*  flutter, not resonance) + NTSB/NSPE Hyatt Regency records + the    */
/*  NBS Silver Bridge report lineage. All other facts were grounded    */
/*  in the original drafting pass (Chen & Arnold PNAS 1991/1993,       */
/*  Stemmer 1994, Lippmann 1922, Bernays 1928, IPA 1937-39, Cialdini   */
/*  1984, Britannica/Bank-of-England/IMF-archives monetary history).   */
/* ------------------------------------------------------------------ */

export const x74LibraryOrgConvergencePassTopics: KnowledgeTopic[] = [
  {
    id: 'eng-bridges-long-span',
    title: 'Bridges and Long-Span Structures: How Spans Grow',
    domain: 'Engineering',
    field: 'Civil & Structural Engineering',
    branch: 'Bridges & Long-Span Structures',
    tier: 'intermediate',
    concepts: [
      'the span-form family: beam, truss, arch, cantilever',
      'suspension bridges: cables in pure tension and the parabolic sag',
      'cable-stayed bridges and direct anchoring',
      'aeroelastic flutter: the Tacoma Narrows lesson',
      'redundancy, fracture-critical members and inspection culture',
      'change management: the Hyatt Regency case',
      'the long-span record chase',
    ],
    words: 1744,
    readMins: 9,
    addedOn: '2026-10-29',
    blocks: [
      {
        kind: 'para',
        text: 'The book\'s first chapter taught the fundamentals this subject runs on — loads, stress, buckling, safety factors — using a bridge as its narrative. This chapter goes back to the bridge itself and asks the engineer\'s question: given a gap to cross, what FORM should the structure take, and how has the achievable span grown from the Iron Bridge\'s 30 metres to nearly two kilometres? Every span form is a strategy for routing force into the ground along a material\'s favorite direction — and the history of long spans is the history of finding new materials for new strategies, punctuated by failures that rewrote the rules.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Bridges are the most concentrated trust in civil engineering: a structure you enter knowing that a hundred years of wind, traffic, ice and rust must not matter today. The discipline\'s inspection culture, redundancy rules and wind-testing requirements were all bought with collapsed bridges — knowing those stories is part of professional competence, not trivia.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The beam is the zeroth strategy: carry load in BENDING, which the fundamentals lesson showed concentrates tension on one face and compression on the other, with stress rising toward the supports. Beams are cheap and simple but inefficient — bending wastes the middle of a solid section, which is why deep plate girders and box girders put material in the flanges. Practical girder spans reach a few hundred metres at most (the Rio–Niterói box girder in Brazil spans 300 metres); beyond that, weight defeats bending. The TRUSS is the first refinement: triangulate the members so every element carries pure axial tension or compression — no bending anywhere — and the structure becomes light for its reach. The CANTILEVER version builds the truss out from each pier in balanced arms, meeting in the middle without falsework: the Firth of Forth Bridge (1890) demonstrated it at 521-metre main spans with a visible profligacy of steel, and Quebec Bridge (1917, 549 m) still holds the cantilever record — after its 1907 collapse during construction killed 75 men when a compression chord buckled, the era\'s hardest lesson in Euler\'s law.',
      },
      {
        kind: 'para',
        text: 'The ARCH is the ancient strategy: a curved member that converts load into pure COMPRESSION flowing down to the foundations. Stone loves compression, which is why Rome built aqueducts on arches that still stand; steel and concrete arches refined the geometry without changing the physics. Landmarks mark the material transitions — the cast-iron Iron Bridge at Coalbrookdale (1779, 30.6 m), the steel New River Gorge arch (1981, 518 m), and the Chaotianmen truss-arch in Chongqing (2009, 552 m), the longest. Arches push outward as well as down (the thrust must be resisted by good foundations or tied with tension members), and they hate foundations that move — but within their range they are the most beautiful expression of force finding its path.',
      },
      {
        kind: 'para',
        text: 'Beyond roughly half a kilometre, weight itself becomes the enemy, and the winning strategies hang the deck from cables — steel\'s native language of tension. The SUSPENSION bridge spins main cables between towers over saddles into massive anchorages; hangers carry the deck, and the cable settles into a PARABOLA under the deck\'s distributed weight. The shallow sag is a lever on tension: the flatter the cable, the harder it pulls, which is why long-span towers are so tall. The Brooklyn Bridge (1883, 486 m) proved wire-cable spinning with the Roeblings\' pneumatic caissons and their toll of "caisson disease"; the Golden Gate (1937, 1280 m) rode the deep-water elegance of the form; the Akashi Kaikyō Bridge (1998, 1991 m) holds the record, its construction surviving the 1995 Kobe earthquake underneath it. Cable-stayed bridges are the younger sibling: straight stays run from tower top DIRECTLY to the deck in fan or harp patterns, no main cable and no anchorages, deck compression balanced against stay tension — stiffer and cheaper in the mid-range (500 to 1,100 metres), with the Millau Viaduct (2004) stacking its deck 270 metres above the Tarn on towers up to 343 metres and the Russky Bridge (2010, 1104 m) holding the record.',
      },
      {
        kind: 'formula',
        name: 'Parabolic-cable horizontal tension',
        latex: 'H = \\frac{wL^{2}}{8d}',
        meaning: 'For a suspension span of length L with sag d under deck load w per metre, the cable\'s horizontal pull H grows with the SQUARE of span and inversely with sag — why long spans need tall towers (deep sag) and light decks.',
      },
      {
        kind: 'para',
        text: 'The most famous bridge failure taught aerodynamics. On November 7, 1940, the Tacoma Narrows Bridge — 853 metres, slender, cheap, stiffened by shallow plate girders — began twisting itself apart in a steady 19-metre-per-second wind and collapsed in front of cameras. The folk story says resonance; the engineering says AEROELASTIC FLUTTER: the wind-fed self-excited oscillation in which twisting and bending couple so the structure extracts energy from the flow that made it — Billah and Scanlan\'s 1991 analysis settled the distinction, and it matters because resonance needs a matching input frequency while flutter needs only wind and a flexible-enough deck. Post-Tacoma, every major bridge is wind-tunnel tested, and stiffening trusses or aerodynamic box decks are standard equipment — the failure that created a design discipline.',
      },
      {
        kind: 'para',
        text: 'Two more failures wrote modern rules. The Silver Bridge (Ohio River, December 15, 1967) fell with 46 people when a single corroded EYEBAR snapped — the bridge was NON-REDUNDANT: one critical link, no alternate load path, total collapse. The United States answered with the National Bridge Inspection Standards (1971) — the routine inspection regime that now governs every public bridge — and engineers learned to hunt FRACTURE-CRITICAL members, the single points of failure hiding in older designs (Minneapolis\' I-35W collapse in 2007 traced to an under-designed gusset plate loaded far beyond its day-one assumptions; 13 died). The Hyatt Regency walkway collapse (Kansas City, July 17, 1981) was not a bridge but it is the profession\'s ethics case: a contractor\'s "simplification" of the walkway hangers from single continuous rods to two stacked rods DOUBLED the load on the fourth-floor box-beam connection — a change never re-checked by the engineer of record; 114 people died in the deadliest structural failure in American history. Its lesson is procedural: changes to load paths are engineering decisions, and the engineer\'s stamp is the license and the liability.',
      },
      {
        kind: 'para',
        text: 'The record chase continues on known physics. Suspension spans creep upward with stronger steels and lighter composite decks; cable-stayed dominates the mid-range on economics; and the genuine frontier is no longer statics but maintenance — the great steel generations of the mid-twentieth century are aging into their second fifty years, which is why inspection robotics, sensor-instrumented decks and reliability-based re-rating now grow faster than span records. The form is settled; the stewardship is the living discipline.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the horizontal cable tension coefficient for a 1,280-metre suspension main span with a 144-metre sag.',
          'Recall the parabolic relation: H = wL²/(8d), with w the deck load per metre, L the span, d the sag.',
          'Apply: H = w × 1280² / (8 × 144) = w × 1,638,400 / 1,152 ≈ 1,422·w. Each kilonewton per metre of deck weight puts about 1.42 meganewtons of tension in each main cable.',
          'Interpret: this is the span-length lever — a shallower sag (say 96 metres) would push the coefficient to 2,133·w, a 50 percent tension increase for the same deck. Designers buy sag with tower height to keep cables, anchorages and towers affordable; the record chase is as much about managing H as about wind and steel.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'National bridge-inspection regimes (the 1971 US standards and international descendants) scheduling every public span',
          'Wind-tunnel and CFD testing of every new long-span deck — Tacoma\'s permanent legacy',
          'Fracture-critical member registries and redundancy retrofits on older truss and eyebar bridges',
          'Design-change review protocols and sealed drawings descended from the Hyatt Regency case in engineering-ethics curricula',
          'Sensor-instrumented bridges (strain, displacement, wind) feeding structural-health-monitoring dashboards',
          'The span-type choice itself: girder for short crossings, arch where foundations are rock, cable-stayed for the mid-range, suspension beyond a kilometre',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not retell Tacoma as "resonance" — the coupled bending-torsion FLUTTER mechanism is the correct engineering story and the one design rules target. Do not assume a bridge that stood for fifty years is safe for fifty more: fatigue and corrosion accumulate non-linearly, which is why inspection, not age, drives risk. And never treat a connection detail as trivial: Hyatt\'s "simple" rod change doubled a hidden load path — most modern collapses begin in details nobody re-checked, not in the global concept.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Cantilever bridge', def: 'A truss built out from piers in balanced arms meeting mid-span — Forth Bridge, Quebec Bridge.' },
          { term: 'Thrust line', def: 'The compression path an arch follows to deliver load to foundations.' },
          { term: 'Sag ratio', def: 'Cable dip divided by span; shallower sag raises tension sharply (H = wL²/8d).' },
          { term: 'Cable-stayed', def: 'Straight stays from tower top directly to deck — stiffer, no anchorages, mid-range spans.' },
          { term: 'Aeroelastic flutter', def: 'Wind-fed self-excited bending-torsion oscillation that ripped Tacoma Narrows apart in 1940.' },
          { term: 'Fracture-critical member', def: 'A non-redundant component whose single failure collapses the bridge — hunted since Silver Bridge.' },
          { term: 'National Bridge Inspection Standards', def: 'The 1971 US inspection regime created after the Silver Bridge collapse.' },
          { term: 'Engineer of record', def: 'The licensed engineer whose stamp owns a design and every later change to its load paths.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Doubling a suspension bridge\'s span while keeping the same sag ratio multiplies the cable tension coefficient by:',
            options: [
              '2 — tension scales linearly',
              '4 — H = wL²/8d grows with the square of span',
              '8',
              'it stays constant',
            ],
            answer: 1,
            explain: 'L² is why long spans fight weight so hard: every doubling quadruples the tension the cables, anchorages and towers must carry.',
          },
          {
            q: 'The Tacoma Narrows collapse is correctly explained by:',
            options: [
              'resonance with the wind\'s gust frequency',
              'aeroelastic flutter — wind-fed coupled bending-torsion oscillation',
              'steel fatigue in the main cables',
              'foundation scour',
            ],
            answer: 1,
            explain: 'Billah & Scanlan (1991) settled it: self-excited flutter extracts energy from steady wind; no resonant matching was needed.',
          },
          {
            q: 'The Silver Bridge collapse (1967) led directly to:',
            options: [
              'the first wind-tunnel codes',
              'national bridge-inspection standards and the hunt for fracture-critical, non-redundant members',
              'banning suspension bridges',
              'the Bubble Act of load paths',
            ],
            answer: 1,
            explain: 'One corroded eyebar — one load path, no redundancy — produced the 1971 US inspection regime still in force.',
          },
          {
            q: 'The Hyatt Regency walkway disaster (1981) is taught chiefly as a lesson in:',
            options: [
              'wind design',
              'concrete mix design',
              'change management: a connection "simplification" doubled a load path and was never re-checked',
              'cable sag arithmetic',
            ],
            answer: 2,
            explain: 'The single-to-double rod change put twice the load on the fourth-floor connection; 114 died — engineering change control is life safety.',
          },
        ],
      },
    ],
  },
]
