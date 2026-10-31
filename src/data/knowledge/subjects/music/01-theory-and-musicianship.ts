/**
 * Knowledge Universe — Music — Chapter 01: Theory & Musicianship
 * 6 lessons · ~7,561 words
 * field: Music Theory & Practice
 * legacy sources: arts-culture.ts, x39-arts-music-film-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Music Theory & Practice]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 music-melody-and-form — Melody and Form: Motifs, Themes and Structure
 *   01.2 music-ear-training — Ear Training and Sight-Singing
 *   01.3 art-harmony-chords-sound-like-home — Harmony: Why Chords Sound Like Home
 *   01.4 musi-rhythm-meter — Rhythm and Meter: How Music Organizes Time
 *   01.5 art-songwriting-verse-chorus-bridge — Songwriting: Verse, Chorus, Bridge and the Architecture of a Song
 *   01.6 art-jazz-improvisation-changes — Jazz Improvisation: Swing, Changes and Learning to Solo
 */
import type { KnowledgeTopic } from '../../types'

export const musicCh01: KnowledgeTopic[] = [
  {
    id: 'music-melody-and-form',
    title: 'Melody and Form: Motifs, Themes and Structure',
    domain: 'Arts & Culture',
    field: 'Music Theory & Practice',
    branch: 'Melody & Form',
    tier: 'core',
    concepts: [
      'Motifs and thematic development',
      'Phrase structure and the period',
      'Cadences as musical punctuation',
      'Binary and ternary form',
      'Theme and variations',
      'Strophic versus through-composed',
    ],
    words: 1406,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Ask someone to sing you a piece of music and they will offer the melody — not the chord progression, not the drum groove, but the tune. Melody is the part of music that behaves like a name: portable, memorable, hummed in showers and handed between strangers. Yet most listeners never examine how tunes are built. This core Music Theory & Practice lesson covers the craft of the single line — how tiny motifs grow into themes — and the larger question of form: how composers organize repetition and contrast so a piece feels like a journey rather than a wander.',
      },
      {
        kind: 'para',
        text: 'Two companion lessons own the ground on either side. Harmony: Why Chords Sound Like Home explains what chords do beneath a tune, and Rhythm and Meter explains how time is measured; melody and form sit between them, the horizontal thread of pitch and the architecture of whole sections. Form is not paperwork. It is the reason a listener can feel the chorus coming back, sense that the middle section is visiting somewhere else, and know when a piece has truly ended rather than merely stopped.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Melody is what audiences remember; form is what keeps them oriented. Writers who control both can hold attention for thirty seconds or thirty minutes, and every song that ever lodged in your head is a case study in motif development wearing different clothes.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The motif is melody\'s smallest useful unit — often just three to five notes with a distinctive contour. Beethoven\'s Fifth Symphony opens with the most famous motif in Western music: three short notes and a long one, a rhythmic fingerprint recognizable in total darkness. A motif earns its keep through development. Repetition plants it in memory; a sequence restates it from a new starting pitch; inversion flips its contour upside down; augmentation stretches it in time; fragmentation takes a bite of it and lets that bite drive new music. Development is how a small idea pays for a long piece.',
      },
      {
        kind: 'para',
        text: 'Grown to full size, the motif becomes a theme — a complete melodic statement on which a piece stakes its identity. A theme need not be complicated. The Ode to Joy from Beethoven\'s Ninth moves mostly by step within a narrow range, which is exactly why a massed crowd can sing it; distinctiveness and singability usually pull in opposite directions, and a composer chooses the balance the piece demands.',
      },
      {
        kind: 'para',
        text: 'Melodies arrive in phrases — musical sentences that arch toward a resting point. The classic unit is the period: an antecedent phrase that asks, ending on an open, unresolved cadence, and a consequent that answers, closing more firmly. Cadences work as punctuation: a half cadence is a comma, a perfect cadence a full stop, a deceptive cadence a raised eyebrow. The chord mechanics of these arrivals belong to the Harmony lesson; what matters here is their pacing. Phrases breathe, and listeners track the breathing even when they cannot name it.',
      },
      {
        kind: 'para',
        text: 'Sections assemble from phrases. Binary form (AB) presents one section, then a contrasting second that often wanders to a related key before closing — the design of Baroque keyboard dances, each half marked to be repeated. Ternary form (ABA) states a section, departs, and returns: the shape of the da capo aria and of countless nocturnes and pop songs. The return is the point. Departure makes home sound different the second time, and that changed homecoming is the whole trick of ABA.',
      },
      {
        kind: 'para',
        text: 'Two further designs complete the basic kit. In theme and variations, a stated theme returns again and again, transformed — ornamented, shifted from major to minor, re-cut in rhythm, thickened in texture — while remaining recognizable; Mozart\'s set on the tune now known as Twinkle, Twinkle, Little Star is the textbook case. Strophic form sets every verse of a text to the same music, the shape of hymns and ballads, while through-composed music never repeats, following a poem moment by moment — Schubert\'s Erlkönig chases its story without looking back. A modern verse-chorus song is a working hybrid of all these instincts.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Set the task: grow a bare four-note motif — three rising steps and an upward leap — into a short binary piece for a melody instrument, roughly sixteen bars, with a clear question, answer, and return.',
          'Grow the motif: state it, repeat it to plant it, then sequence it up a step for momentum, closing the phrase on an open, comma-like cadence after four bars — the antecedent.',
          'Answer: begin the consequent with the same rhythm but resolve the line downward by step to the tonic, ending with a firm full-stop cadence; the two phrases together form the eight-bar A section.',
          'Contrast: open the B section by inverting the motif — downward steps, a downward leap — and fragmenting it to its first two notes passed between registers; wander toward a nearby key, then circle back toward the opening gesture.',
          'Test the form by ear: play or sing the result as a stranger would hear it. A should feel like a room you know, B like a corridor away from it, and the return like coming home with the lights on; if any boundary is unclear, sharpen the cadences that mark it.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'para',
        text: 'Songwriters use this kit daily, usually without naming it. A verse-chorus song is a ternary instinct in modern clothes, a bridge is a B section, and a hook is a motif with a job. The vocabulary earns its keep in collaboration: telling a co-writer the bridge should behave like the departure in ternary form — setting up the final chorus by leaving — says in one sentence what paragraphs of humming cannot.',
      },
      {
        kind: 'para',
        text: 'Performers use form as a memory map. A pianist facing a long sonata does not memorize pages; she memorizes chunks whose boundaries are marked by cadences — an exposition, a development, a return. Form analysis turns an ocean into a list of rooms, and it makes rehearsal efficient, because a returning theme needs one deep learning rather than four shallow ones.',
      },
      {
        kind: 'para',
        text: 'For listeners, form awareness upgrades attention. Feeling a return coming, or catching the moment the variations finally restore the naked theme, converts passive hearing into participation — the difference between watching a landscape and reading it. Once you can hear the architecture, whole genres, from symphonies to concept albums, open their doors.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Motif', def: 'The smallest memorable melodic unit, often three to five notes, identified by rhythm or contour.' },
          { term: 'Theme', def: 'A complete melodic statement, usually grown from a motif, on which a piece stakes its identity.' },
          { term: 'Antecedent and consequent', def: 'Paired phrases: the first ends open and questioning, the second answers and closes.' },
          { term: 'Sequence', def: 'Restating a motif or phrase from a new starting pitch while keeping its shape.' },
          { term: 'Binary form', def: 'A two-section design (AB), each half usually repeated, typical of Baroque dances.' },
          { term: 'Through-composed', def: 'Music that continuously generates new material instead of repeating sections.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'Answer before reading the explanations — retrieval is the point. Each question targets one load-bearing idea: motif development, phrase pairing, or the behavior of the standard forms.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Restating a motif beginning a step higher, with the same shape, is called:',
            options: ['Inversion', 'Sequence', 'Retrograde', 'Augmentation'],
            answer: 1,
            explain: 'A sequence moves the motif\'s shape to a new starting pitch; inversion would flip its contour, and augmentation would stretch it in time.',
          },
          {
            q: 'In a classic period, the antecedent phrase typically ends with:',
            options: ['A firm, closing cadence', 'An open, unresolved cadence', 'A long silence', 'A change of key signature'],
            answer: 1,
            explain: 'The antecedent asks — it pauses on a weaker arrival so the consequent can answer with a full stop.',
          },
          {
            q: 'A song that uses exactly the same music for every verse is in:',
            options: ['Binary form', 'Strophic form', 'Theme and variations', 'Through-composed form'],
            answer: 1,
            explain: 'Strophic form repeats one stretch of music verse after verse — the default of hymns and folk ballads.',
          },
          {
            q: 'In theme and variations, what must survive every transformation?',
            options: ['The original key', 'The original rhythm', 'The theme\'s recognizable identity', 'The original tempo'],
            answer: 2,
            explain: 'Variations may change key, rhythm, tempo, and texture; the moment the theme stops being recognizable, the form collapses.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Pair this lesson with Harmony: Why Chords Sound Like Home and Rhythm and Meter so line, chord, and time form one picture, then listen to a short theme-and-variations set with a pencil, marking each return. How sonata form stretched these small designs into symphonies belongs to the Western classical history lesson later in this book.',
      },
    ],
  },
  {
    id: 'music-ear-training',
    title: 'Ear Training and Sight-Singing',
    domain: 'Arts & Culture',
    field: 'Music Theory & Practice',
    branch: 'Ear Training',
    tier: 'intermediate',
    concepts: [
      'Interval recognition with anchor songs',
      'Movable-do solfège and sight-singing',
      'Rhythmic dictation: pulse, meter, placement',
      'Melodic dictation step by step',
      'Chord-quality recognition by ear',
      'Transcription as daily practice',
    ],
    words: 1475,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Most people can recognize thousands of faces but cannot name the distance between two notes they have just heard. Ear training closes that gap: it is the deliberate practice of connecting sound to name and name to sound, in both directions. This intermediate Music Theory & Practice lesson covers interval recognition, solfège and sight-singing, the stepwise craft of rhythmic and melodic dictation, chord-quality recognition, and transcription as a daily habit — the skills that turn written music into imagined sound and heard music into notation.',
      },
      {
        kind: 'para',
        text: 'Ear training behaves more like language acquisition than like theory study. A child amasses a spoken vocabulary years before grammar class; a musician amasses an inner listening vocabulary — intervals, chord colors, common progressions — that later makes theory feel like description rather than decree. Because the skill is perceptual, it grows only through frequent small contact: ten focused minutes a day outperform a weekend marathon, and every method below assumes that rhythm of practice.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Ear training is the bridge between paper and music. It lets you learn songs from recordings, write down what you imagine, sing what you read, and hear your own mistakes before anyone points them out — and it turns chords and keys from symbols on a page into sensations you can name.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Intervals are learned by anchoring them in music you already carry in your head. Attach each distance to the opening of a tune you know cold: the looming two-note shark theme from Jaws makes a rising minor second; the bridal march\'s first jump is a perfect fourth; the opening of Twinkle, Twinkle outlines a perfect fifth; the leap that begins Somewhere over the rainbow spans an octave. Anchor songs convert abstract distance into remembered music. You need separate anchors for ascending, descending, and played-together versions, because recognition does not transfer automatically between directions.',
      },
      {
        kind: 'para',
        text: 'Solfège assigns each scale degree a syllable — do, re, mi, fa, sol, la, ti — and in the movable-do system do is always the tonic of the key, whatever the key is. The payoff is that syllables encode function: ti always pulls upward toward do, and fa always leans on its neighbor, in every key alike. Fixed-do systems, common in parts of Europe and Latin America, treat the syllables as permanent note names — a different tool, not a wrong one. For sight-singing the routine is constant: scan the key and time signature, find do, notice the starting syllable and the highest note, hear the first phrase inwardly, then sing it at a slow, honest pulse.',
      },
      {
        kind: 'para',
        text: 'Rhythmic dictation fails when you grab at note values too early; the disciplined sequence runs the other way. First establish the underlying pulse by conducting or tapping. Next determine the meter — do the accents group in twos, threes, or fours? Then count how many measures the excerpt spans. Only afterwards mark where attacks fall relative to each beat, and notate subdivisions last. The Rhythm and Meter lesson owns the notation system itself; the skill trained here is the listening protocol that makes the notation possible.',
      },
      {
        kind: 'para',
        text: 'Melodic dictation is built from the same patience. Establish the key by finding the note that feels like home — hum along until the hum settles. Sketch the contour on paper before touching pitches: simple arrows that rise and fall, which alone are worth half the answer. Then fill in intervals bar by bar, using solfège and your anchors, looping short segments rather than replaying the whole. Finish by singing your answer from the page; if it matches your memory of the original, it is right, regardless of how uncertain it felt while writing.',
      },
      {
        kind: 'para',
        text: 'Chord-quality recognition begins with a single comparison: keep the root still and swap the middle note. The shift between major\'s brightness and minor\'s shadow is the third alone — sing root, third, fifth as a broken chord to make each quality explicit. Diminished triads sound stacked and uneasy; augmented triads sound tilted, like a question that refuses to land. Once the qualities are secure in isolation, practice naming them inside short progressions. The Harmony lesson covers what chords do within a key; here the task is simply to name what the ear meets.',
      },
      {
        kind: 'para',
        text: 'Transcription is where the separate skills become one daily practice. Take four to eight bars of anything — a pop hook, a bass line, a film theme — slow it down, loop it, write it, and verify against the recording. Keep a notebook and date every entry; the pages become a visible record of a listening vocabulary growing. Ten minutes of transcription trains interval recognition, chord quality, rhythm, and notation fluency in a single exercise, which is why working musicians treat it as the compound interest of musicianship.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Choose the material: a four-bar melodic phrase from a recording you enjoy, at a tempo slow enough to hum comfortably, loaded into any player that can loop and slow without changing pitch.',
          'Find home: hum along until your hum settles on the resting note; check the opening and closing chords against that note to confirm the tonic, and mark the key at the top of your staff paper.',
          'Capture the rhythm first: clap the phrase, count the pulse, decide the meter, and sketch where the attacks land relative to the beats across the four bars.',
          'Fill in pitches: draw the contour in arrows, then convert arrows to intervals using solfège and anchor songs, bar by bar, looping each bar as often as needed.',
          'Verify and reconcile: sing the transcription start to finish, play it if an instrument is at hand, compare against the record, and fix disagreements — every mismatch is information about your anchors, so note it in the margin.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'para',
        text: 'In rehearsal, ears save time. A musician who can dictate a part from a demo, transcribe a bass line for a missing bandmate, or hear that the backing vocal sits a third above rather than a second is functioning as the group\'s stenographer and editor at once — quietly the most valuable person in the room.',
      },
      {
        kind: 'para',
        text: 'Ear training also frees you from paper dependence. Musicians who learn repertoire from recordings — the norm in folk, jazz, and most popular traditions worldwide — are running melodic dictation in real time; the formal method simply makes the folk process reliable, repeatable, and fast.',
      },
      {
        kind: 'para',
        text: 'Finally, the ear polices the player. Singers use interval awareness to check the leap they always clip; guitarists hear that a voicing clashes before anyone explains why. Ear training converts vague dissatisfaction — something sounded off — into a located, fixable fact.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Interval', def: 'The distance in pitch between two notes, named by size and quality: third, fifth, octave.' },
          { term: 'Anchor song', def: 'A familiar tune whose opening matches a specific interval, used as a recognition cue.' },
          { term: 'Movable do', def: 'Solfège in which do is the tonic of the current key, so syllables encode scale-degree function.' },
          { term: 'Dictation', def: 'Writing down music from hearing it alone — the benchmark test of the trained ear.' },
          { term: 'Chord quality', def: 'Whether a chord is major, minor, diminished, or augmented — carried chiefly by the third.' },
          { term: 'Transcription', def: 'Learning music from a recording by ear and committing it to notation or memory.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'Work through the questions before reading the explanations, and keep the bar high: recognizing a correct answer is not the same as producing one, and production is the skill being trained.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In movable-do solfège, the syllable do always represents:',
            options: ['The note middle C', 'The tonic of whatever key the music is in', 'The loudest note of the phrase', 'The first note of every melody'],
            answer: 1,
            explain: 'Movable do anchors the system to the key: do is home, which is why ti pulls toward it in every key alike.',
          },
          {
            q: 'The correct FIRST step in rhythmic dictation is:',
            options: ['Notate the subdivisions', 'Identify the shortest note value', 'Establish the pulse and the meter', 'Draw the final barline'],
            answer: 2,
            explain: 'Pulse and meter come first; attacks are placed relative to the beat, and subdivisions are the last layer added.',
          },
          {
            q: 'The essential difference between a major and a minor triad on the same root is:',
            options: ['The fifth', 'The third', 'The root', 'The doubling'],
            answer: 1,
            explain: 'Raising or lowering the third alone flips the quality — which is why quality drills begin there.',
          },
          {
            q: 'Daily transcription is emphasized because it:',
            options: ['Replaces the need for theory', 'Trains intervals, rhythm, chords, and notation in one exercise', 'Is the only practice conservatories permit', 'Works only with jazz recordings'],
            answer: 1,
            explain: 'Transcription is the compound exercise of ear training — several skills taxed together, which is why it outperforms isolated drills.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Drill intervals and dictation in small daily doses while reading the Harmony lesson for a theoretical map and the Rhythm and Meter lesson for notation fundamentals. Then test yourself the honest way: transcribe one song a week entirely by ear, notebook dated, and watch the pages accumulate.',
      },
    ],
  },
  {
    id: 'art-harmony-chords-sound-like-home',
    title: 'Harmony: Why Chords Sound Like Home',
    domain: 'Arts & Culture',
    field: 'Music Theory & Practice',
    branch: 'Diatonic Harmony',
    tier: 'core',
    concepts: [
      'Triads: stacking thirds',
      'Roman numerals and chord function',
      'Tonic, subdominant, dominant',
      'Consonance, dissonance, and the overtone series',
      'The V–I cadence and the leading tone',
      'Inversions and the Circle of Fifths',
    ],
    words: 1102,
    readMins: 6,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'A chord feels like home because of a chain of physical and learned effects: simple frequency ratios, the pull of a half step, and the grammar of tension and release. This core Arts & Culture topic in Music Theory & Practice introduces diatonic harmony — triads built from a scale, the jobs of tonic, subdominant, and dominant chords, and why the V–I cadence has ended songs for four centuries. Learn these ideas and chord charts turn from crossword puzzles into sentences.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Harmony literacy lets you write songs on purpose, transpose for a singer in real time, and hear structure in the music you already love. Every anthem, jingle, and film score that ever moved you leans on this same small toolkit.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Pick a note in a scale and skip every other one — root, third, fifth — and you have a triad, the atom of Western harmony. In C major that yields C–E–G (major), D–F–A (minor), and B–D–F (diminished); stacking one more third adds a seventh and a deeper color.',
      },
      {
        kind: 'para',
        text: 'Numbering chords by scale degree — I, ii, iii, IV, V, vi, vii° in major — describes what a chord does rather than how it is spelled: uppercase for major, lowercase for minor, a small circle for diminished. Say I–V–vi–IV to musicians anywhere and they can play it in any key without further discussion.',
      },
      {
        kind: 'para',
        text: 'Tonic (I, vi) is rest, the home base of a key. Subdominant (IV, ii) moves you away from home, and dominant (V, vii°) is the point of maximum tension straining to resolve — most songs are simply the story of leaving and returning.',
      },
      {
        kind: 'para',
        text: 'Every pitched note hides a ladder of overtones at whole-number ratios, and intervals matching simple ratios sound stable: the octave at 2:1, the fifth at 3:2, the major third at 5:4. Rougher ratios sound restless — the tritone was nicknamed the devil\'s interval — and restlessness is precisely what makes resolution satisfying.',
      },
      {
        kind: 'para',
        text: 'Dominant to tonic is the authentic cadence, harmony\'s full stop, powered by the leading tone: the seventh scale degree sits a half step below the tonic and pulls upward. Add a seventh to the dominant chord (V7) and its internal tritone sharpens the drive into the tonic.',
      },
      {
        kind: 'para',
        text: 'A C major triad with C, E, or G in the bass is still C major — root position, first, or second inversion — and the bass choice shapes how smoothly chords connect. The Circle of Fifths maps keys a fifth apart, and traveling it by falling fourths is the engine under countless pop progressions.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Equal temperament frequency',
        latex: 'f(n) = f_0 \\cdot 2^{n/12}',
        meaning: 'The note n semitones above a reference pitch f₀ (A4 = 440 Hz); twelve equal steps land exactly on the octave, at the cost of slightly tempering the pure ratios.',
      },
      {
        kind: 'formula',
        name: 'Just (pure) major triad ratios',
        latex: '4{:}5{:}6',
        meaning: 'Root, third, and fifth in simple whole-number ratios drawn from the overtone series — the sound equal temperament approximates.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: a melody in D major ends with the notes C♯ moving to D — which chords should carry those final two moments so the ending sounds conclusive?',
          'Recall the governing ideas: in D major, D = I, G = IV, A = V; the authentic cadence V–I resolves the leading tone C♯ upward into the tonic D.',
          'Apply: harmonize the C♯ with the A major triad (A–C♯–E), which contains the leading tone, and let the final D sit on the D major triad; using A7 (adding the note G) increases the pull.',
          'State the result: V7 → I — the tritone collapses inward, the leading tone resolves up, and the listener feels the arrival as inevitable.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Songwriters choose progressions deliberately instead of hunting blindly for the right chords.',
          'Reading a lead sheet and transposing on demand becomes routine at rehearsals and auditions.',
          'Ear training: identifying cadences in film scores, anthems, and ads turns listening into a game.',
          'Accompanying singers smoothly with inversions rather than jumping between root positions.',
          'Analyzing favorite songs reveals borrowed chords and modulations you can reuse.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Equating minor with sad and major with happy misses context — voice leading, tempo, and arrangement move mood as much as chord quality. Memorizing Roman numerals without hearing their functions produces theorists who cannot play; sound every progression. And assuming chords must stay inside the key ignores centuries of borrowing: secondary dominants and the borrowed minor-four live just outside the fence.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Triad', def: 'Three notes — root, third, fifth — stacked in thirds; the basic unit of Western harmony.' },
          { term: 'Leading tone', def: 'The seventh scale degree, a half step below the tonic, with a magnetic upward pull.' },
          { term: 'Authentic cadence', def: 'The V–I progression, harmony\'s strongest sense of arrival.' },
          { term: 'Inversion', def: 'Which triad member sits in the bass: root position, first, or second.' },
          { term: 'Diatonic', def: 'Belonging to the notes of a single key or scale.' },
          { term: 'Voice leading', def: 'How individual parts move from chord to chord; smooth motion is the craft.' },
          { term: 'Circle of fifths', def: 'The map of keys arranged a fifth apart, showing closely related tonalities.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In the key of C major, the V chord is:',
            options: ['G major', 'D minor', 'F major', 'B diminished'],
            answer: 0,
            explain: 'Built on the fifth degree G, the dominant triad is G–B–D, with B as the leading tone.',
          },
          {
            q: 'The leading tone most wants to:',
            options: ['Resolve up a half step to the tonic', 'Fall a fifth to the dominant', 'Resolve down to the mediant', 'Stay exactly where it is'],
            answer: 0,
            explain: 'Its half-step proximity to the tonic gives it a strong upward pull — the engine of cadences.',
          },
          {
            q: 'The strongest reason V pulls toward I is:',
            options: ['Habit from centuries of convention only', 'The leading tone resolving up plus, in V7, a dissonant tritone collapsing inward', 'The bass note always descending', 'Fifths being louder than other intervals'],
            answer: 1,
            explain: 'Melodic and harmonic tension — the half-step pull and the tritone\'s restlessness — creates the drive home.',
          },
          {
            q: 'A C major triad voiced with E in the bass is:',
            options: ['Second inversion', 'First inversion (C/E)', 'Root position', 'The relative minor'],
            answer: 1,
            explain: 'With the third in the bass, the chord is in first inversion — written C/E.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: note names and what a scale is — piano or guitar helps but is not required. Next: seventh chords and jazz voicings, then modulation and borrowed chords, then basic counterpoint.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Triads stack root–third–fifth from a scale.',
          'Roman numerals describe function: I home, IV departure, V tension.',
          'Simple ratios (2:1, 3:2, 5:4) sound consonant; rough ones yearn to resolve.',
          'V–I is the full stop; the leading tone resolves up by a half step.',
          'Inversions change the bass, not the chord; the Circle of Fifths maps the keys.',
        ],
      },
    ],
  },
  {
    id: 'musi-rhythm-meter',
    title: 'Rhythm and Meter: How Music Organizes Time',
    domain: 'Arts & Culture',
    field: 'Music Theory & Practice',
    branch: 'Rhythm and Meter',
    tier: 'core',
    concepts: [
      'Pulse and tempo: the beat you tap',
      'Note values: a family of halves',
      'Measures and time signatures',
      'Simple versus compound meter',
      'Syncopation: accenting the offbeat',
      'Subdivision: the inner clock',
    ],
    words: 1054,
    readMins: 5,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Ask a musician what makes music move and the answer is not the notes — it is when they happen. Rhythm is the organization of time: a pulse you could tap, grouped into measures, subdivided into faster values, and accented in patterns that make you nod on beats two and four. This core Music Theory & Practice topic covers beat and tempo, how note values fill the bar, simple versus compound meter, and syncopation — the deliberate offense against the grid that gives funk, jazz and reggae their pull.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'The harmony lesson organized pitch; this is the other axis. Rhythm literacy lets you program a drum beat, read a chart, hear why a waltz sways while a march strides, and play along with anything on the radio without guessing.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The beat is the steady pulse you would clap to, and tempo measures its speed in beats per minute. At 60 BPM a beat lasts exactly one second; a dance track sits near 120, a ballad near 70, drum-and-bass near 170. The beat is the grid; the rhythm is the pattern of longer and shorter durations played against it. Walking pace, it turns out, is a surprisingly good guide to popular tempo.',
      },
      {
        kind: 'para',
        text: 'Note values halve as they shrink: a whole note equals two halves, a half equals two quarters, a quarter equals two eighths, an eighth equals two sixteenths. A dot adds half the value again, so a dotted quarter equals three eighth notes. Rests are durations of silence and count as rhythm too — the gap before a downbeat can hit harder than a drum.',
      },
      {
        kind: 'para',
        text: 'Beats are grouped into measures by recurring accents, and the time signature stamps each bar\'s contents: the top number counts the beats, the bottom names which note value gets one beat. Four-four — four quarter-note beats — is so common it is simply called common time; three-four drives the waltz\'s ONE-two-three lilt; two-four marches. The barline is not decoration: it tells the player where the accents renew.',
      },
      {
        kind: 'para',
        text: 'Simple meters divide each beat into two: in 4/4 an eighth-note pair fits inside every beat. Compound meters divide into three: 6/8 holds six eighths, but they group 3+3 into two big dotted-quarter beats, which is why 6/8 swings while 3/4 marches — the same six eighths under a different accent map. Irregular meters like 5/4 (Take Five) and 7/8 splice the two feelings together, one bar at a time.',
      },
      {
        kind: 'para',
        text: 'Syncopation accents the weak beats or the offbeats — the "ands" between the numbers. A rock backbeat syncopates European expectations by making the snare hit two and four; funk pushes notes just ahead of the beat; reggae guitar skips the downbeat entirely and lands on the off. Against the steady grid, every displaced accent registers as tension, and the return to the downbeat resolves it.',
      },
      {
        kind: 'para',
        text: 'Musicians survive all of this with subdivision: counting the smallest relevant value underneath the surface. Sixteenth notes in 4/4 count one-e-and-a, two-e-and-a; a 6/8 player feels two beats, each with three. Counting aloud with a metronome is the drill, and it is why drummers can hear a bandmate rushing or dragging by a few milliseconds per beat.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how many sixteenth-note strokes fill one bar of 4/4, and how far apart do they fall at 120 BPM?',
          'Recall the governing idea: 4/4 means four quarter-note beats, each divisible into four sixteenths; at 120 BPM one beat lasts half a second.',
          'Apply: 4 beats × 4 sixteenths = 16 strokes per bar, each lasting 0.5 ÷ 4 = 0.125 s — 125 milliseconds apart.',
          'State the result: the 16-step grid of nearly every drum machine, at the default spacing of dance music — which is exactly why 120 BPM became the genre\'s home key of tempo.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Drummers count subdivisions aloud — one-e-and-a — and rehearse fills against a metronome.',
          'Dancers identify meter by feel: waltz in threes, salsa in eights, quickstep in fours.',
          'Beatmakers program 16-step sequencers, direct descendants of the TR-808 drum machine\'s step buttons.',
          'Composers reach for irregular meters — Money in 7/4, Take Five in 5/4 — when four feels too square.',
          'Notation software quantizes recorded performances to the nearest sixteenth, cleaning up human timing.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The most common confusion is tempo with rhythm — a fast song can carry sparse rhythms and a slow one dense filigree. Reading 6/8 as six beats makes its swing impossible to feel; it is two. Syncopation memorized as note positions rather than felt against the pulse sounds mechanical. And rests are not rest: silence on a downbeat is a rhythmic event, not an absence.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Beat', def: 'The steady pulse of a piece — the unit you would tap your foot to.' },
          { term: 'Tempo', def: 'The speed of the beat, measured in beats per minute.' },
          { term: 'Measure (bar)', def: 'A group of beats delimited by recurring accent; one written slice of the grid.' },
          { term: 'Time signature', def: 'Two stacked numbers: beats per measure over which note value equals one beat.' },
          { term: 'Compound meter', def: 'A meter whose beats divide into three equal parts, such as 6/8.' },
          { term: 'Syncopation', def: 'Accenting weak beats or offbeats to work against the established grid.' },
          { term: 'Subdivision', def: 'Counting the smaller note values that fit inside each beat.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In 6/8 time the listener normally feels:',
            options: ['Six beats per bar', 'Two beats, each split into three', 'Three beats, each split into two', 'Eight beats per bar'],
            answer: 1,
            explain: 'The six eighths group 3+3 into two dotted-quarter beats — the compound-meter signature feel.',
          },
          {
            q: 'At a tempo of 120 BPM, one quarter-note beat lasts:',
            options: ['0.25 s', '0.5 s', '1 s', '2 s'],
            answer: 1,
            explain: '120 beats per minute is two beats per second, so each beat is half a second.',
          },
          {
            q: 'A dotted quarter note is worth:',
            options: ['Two eighths', 'Three eighths', 'Four sixteenths', 'Half a beat in every meter'],
            answer: 1,
            explain: 'The dot adds half the value: a quarter plus an eighth, totaling three eighth notes.',
          },
          {
            q: 'Syncopation is best described as:',
            options: ['Playing louder overall', 'Accenting weak beats or offbeats against the grid', 'Changing tempo mid-song', 'Playing in compound meter'],
            answer: 1,
            explain: 'Displacing accents away from strong beats creates tension the downbeat then resolves.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Pairs with the harmony lesson, which handles the pitch axis. Natural next steps: reading drum notation, polyrhythms such as 3 against 4, and the production lesson, where these grids become step sequencers.',
        tone: 'path',
      },
    ],
  },
  {
    id: "art-songwriting-verse-chorus-bridge",
    title: "Songwriting: Verse, Chorus, Bridge and the Architecture of a Song",
    domain: "Arts & Culture",
    field: "Music Theory & Practice",
    branch: "Song Architecture",
    tier: "intermediate",
    concepts: [
      "Sections as rooms with jobs",
      "Verse accrues, chorus distills",
      "Pre-chorus lift and bridge departure",
      "Contrast on at least one axis",
      "Prosody: words and music agreeing",
      "Hooks and title placement",
      "The rewrite is the write",
    ],
    words: 1226,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "The harmony lesson supplied chords; the rhythm lesson supplied time. This intermediate Music Theory & Practice topic supplies the architecture those materials live in: the modern song's section map — verse, pre-chorus, chorus, bridge — and the craft of making each section earn its minutes. Songs are small buildings: rooms with distinct jobs, connected by doors of contrast, and a chorus as the room everyone remembers. Learn the plan and a three-minute song stops being a vibe and becomes a design.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Song architecture is why some choruses feel inevitable: they arrive on schedule, having been lifted toward. The same structure underwrites ads, hymns, TV themes and playground chants — the most repeated texts on earth are built on this map.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The default pop layout: intro, verse, pre-chorus, chorus, verse, pre-chorus, chorus, bridge, chorus, outro — the chorus returning three times by design. Each section has a job description. Verses accrue: same melody, new words, the story's detail and forward motion. The chorus distills: the emotional headline, the title, the thing you wake up humming. The pre-chorus builds the stairs — lyric and melody rising into the hook. The bridge departs so the return refreshes. An intro frames; an outro exits gracefully or fades on the hook.",
      },
      {
        kind: "para",
        text: "Sections must differ, or the song is one long verse. Contrast can live on any axis: melodic range (the chorus lifts above the verse's talking register), rhythmic density (verses converse, choruses chant), harmonic rhythm (chords changing twice as fast under the chorus), texture (drop the drums in verse two, add a pad), or lyric density (verses wordy, chorus repeated and plain). One axis changed is enough for identity; two is a strong chorus. If your verse and chorus sit in the same range with the same rhythm, listeners cannot find the chorus — and neither can you, humming it back.",
      },
      {
        kind: "para",
        text: "Prosody is the fit between words and music: stressed syllables landing on strong beats, phrase lengths breathing naturally, melody contour agreeing with meaning — rising for questions, falling for resolve. The rhythm lesson's grid is the referee: if you must sing a word with the accent in the wrong place, the melody is fighting the language. Bad prosody usually comes from rhyme-first writing, which forces inverted, shopworn phrasing. Write the title line the way you would say it, then build music that agrees.",
      },
      {
        kind: "para",
        text: "A hook is anything built to be repeated and remembered: a melodic hook, a lyric hook (the title line), a rhythmic groove, a production signature. Placement exploits memory's primacy and recency — the title lands in the first line or the last line of the chorus, or both. Hooks survive the sing-it-back-after-one-listen test, which is why writers workshop choruses on friends without warning. Repetition with variation keeps a hook alive: same words, new delivery each time, or the last chorus ad-libbed over.",
      },
      {
        kind: "para",
        text: "The bridge is the third thing — a deliberate departure after two verse-chorus cycles, usually eight bars. Departure means new harmony (the relative minor, a chord borrowed from outside the key, as the harmony lesson's fence allows), a new melody shape, and often a lyrical perspective shift: second person, a confession, a flashback. The craft is the return: end the bridge on dominant tension — or slam straight into the downbeat — so the final chorus lands as release. The key-change-up-a-step lift is powerful and notorious; use it like hot sauce.",
      },
      {
        kind: "para",
        text: "Start anywhere: a title, a groove, a chord loop, a hummed melody over a beat. Top-line writers sing over finished tracks; band writers jam; poets convert. Draft the title and chorus first if you can — the song's argument — then write verses that aim at it. Then rewrite: cut the second verse's weakest line, sharpen every rhyme's consonants, test the bridge by skipping it. A song is not written; it is rewritten into existence.",
      },
      { kind: "heading", text: "The Mathematics" },
      {
        kind: "formula",
        name: "The section clock",
        latex: "N_{bars} = \\frac{t \\times BPM}{4}",
        meaning: "In 4/4, a song of t minutes holds this many bars: a 3-minute song at 120 BPM spans 90 bars, so an 8-bar chorus at that tempo lasts 16 seconds.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: a song stuck as verse-chorus-verse-chorus needs a bridge, and the final chorus must land harder than the second.",
          "Recall the governing ideas: the bridge departs on a new axis and engineers the return; contrast refreshes; the title hooks.",
          "Apply: keep the band but change the map — drop to the relative minor, sink the melody to its lowest range, and switch lyric to direct address. Run eight bars, end on the dominant with a bar of near-silence, then hit the final chorus a cappella on the downbeat before the band rejoins, ad-libs stacked on the second pass.",
          "State the result: the departure makes the familiar chorus sound new, and the half-second of silence loads the downbeat like a spring.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Top-liners write melody and lyric over producers' finished beats, chorus-first.",
          "Open-mic and worship songwriters structure sets around bridges as emotional pivots.",
          "Ad writers compress the whole map — hook in five seconds, chorus in fifteen.",
          "Playlist-era artists front-load choruses to survive the skip button.",
          "Cover bands transpose and rearrange while keeping the section jobs intact.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The common failures: a chorus arriving too late — patience is a budget, and streaming spends it in thirty seconds; verse and chorus in the same range and rhythm, so the song never takes off; a bridge that is merely a different song bolted on with no return logic; rhymes that force word order nobody would ever say; and three ideas stuffed into one song — a chorus can only be about one thing, and it has to be the title.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Verse", def: "The accruing section — same music, advancing words; the song's narration." },
          { term: "Chorus", def: "The distillation — title, hook and emotional headline, built to repeat." },
          { term: "Pre-chorus", def: "The lift — rising material that builds tension into the chorus." },
          { term: "Bridge", def: "The departure — a contrasting section before the final chorus, engineered to return." },
          { term: "Hook", def: "Any built-to-repeat element — melodic, lyrical, rhythmic — that survives one listen." },
          { term: "Prosody", def: "The agreement of stress, contour and phrasing between words and music." },
          { term: "Harmonic rhythm", def: "How fast chords change; accelerating it is a classic chorus lift." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "The title of a modern song most often lands in:",
            options: ["The intro", "The chorus — first or last line", "The bridge", "The outro"],
            answer: 1,
            explain: "Primacy and recency: the chorus carries the hook, at its start or its finish.",
          },
          {
            q: "A bridge's core job is to:",
            options: ["Shorten the song", "Depart and contrast, making the chorus's return land fresh", "Give the vocalist a rest", "Change the key permanently"],
            answer: 1,
            explain: "After two cycles the material is spent; the bridge spends new currency so the return pays again.",
          },
          {
            q: "Prosody is:",
            options: ["Rhyming every line", "The fit between stressed syllables and musical stress", "Singing quietly", "Using metaphors"],
            answer: 1,
            explain: "Words and music must agree on accent, contour and phrasing — or the melody fights the language.",
          },
          {
            q: "A 3-minute song at 120 BPM in 4/4 spans about:",
            options: ["45 bars", "60 bars", "90 bars", "120 bars"],
            answer: 2,
            explain: "360 beats at four beats per bar is 90 bars — the section clock every arranger runs.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Prerequisites: comfort with the harmony and rhythm lessons. Natural next steps: the jazz improvisation lesson for melodic invention, the production lesson for demoing your work, and — for words — the story-structure lesson's scene logic.",
        tone: "path",
      },
    ],
  },
  {
    id: "art-jazz-improvisation-changes",
    title: "Jazz Improvisation: Swing, Changes and Learning to Solo",
    domain: "Arts & Culture",
    field: "Music Theory & Practice",
    branch: "Improvisation",
    tier: "intermediate",
    concepts: [
      "Prepared spontaneity: vocabulary plus grammar",
      "Swing eighths and the backbeat accent",
      "The lead sheet and the memorized form",
      "Guide tones: 3rds and 7ths",
      "ii-V-I through every key",
      "Transcription as the master teacher",
    ],
    words: 1298,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A jazz solo sounds like it was invented on the spot, and it was — the way a good conversation is. Nobody plans sentences word by word; fluency comes from years of absorbed vocabulary, and jazz improvisation is exactly that: a language learned by ear, practiced in patterns, spoken in real time over moving harmony. This intermediate Music Theory & Practice topic covers swing feel, reading the changes, the ii-V-I cell at the heart of the repertoire, the guide tones that connect chords, and the practice loop that builds improvisers.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Improvisation is not talent leaking out — it is preparation meeting a moment. The same skill powers blues-rock solos, gospel runs, hip-hop cadences and jam-band exploration, and it is trainable: transcribe, imitate, transform.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The jazz lineage runs from New Orleans through swing-era big bands to bebop's small-group velocity, then outward to modal, free and fusion experiments. Its core ritual is stable: the group states a tune's melody (the head), then each player solos over the tune's chord progression for one or more choruses — a chorus is one full pass through the form — then the head returns. The form is the arena: usually a 12-bar blues or a 32-bar AABA standard. Everything a soloist plays negotiates that moving floor.",
      },
      {
        kind: "para",
        text: "Notation calls the eighth notes even; jazz plays them long-short, closer to triplet feel than to equal pairs, with accents landing on beats two and four and the ride cymbal patterning the time. The ratio flexes with tempo — broad and loping on ballads, nearly straight at very fast tempos — which is why swing cannot be learned from paper: you absorb it by listening and playing along until your eighths stop sounding like a typewriter. Students who skip this stage sound fluent in vocabulary with a broken accent.",
      },
      {
        kind: "para",
        text: "The changes are the chord progression, printed on a lead sheet as a melody line with symbols — Dm7, G7, Cmaj7. Playing the changes means your line implies each harmony as it passes: landing chord tones on strong beats, and above all targeting the 3rd and 7th — the guide tones — because they define a chord's quality and voice-lead smoothly from chord to chord: Dm7's C and F collapse into G7's B and F by a half step. Chord-scale thinking maps palettes over each symbol — Dorian over ii, Mixolydian over V — as vocabulary, never as the solo itself.",
      },
      {
        kind: "para",
        text: "One cell powers most of the repertoire: supertonic to dominant to tonic, Dm7-G7-Cmaj7 in C — the harmony lesson's functions with jazz extensions added. Roots fall by fifth, which is why the circle of fifths is the practice map: run ii-V-I through all twelve keys and you have rehearsed the openings of hundreds of standards. The minor version — half-diminished into an altered dominant — is its shadow twin, essential for the bridges you will play. The fluency target: any ii-V in any key, starting from any note, without thinking.",
      },
      {
        kind: "para",
        text: "Strong solos are stories composed in real time, not scale demonstrations. Begin sparse and motivic — a two- or three-note cell is plenty — then develop it: transpose, invert, augment, answer it. Quote the head's melody; listeners love recognition. Increase density toward the peak of a chorus, then breathe: rests are structural, not absence. End phrases by landing guide tones on bar lines, and let your final chorus resolve home before handing the floor to the next soloist. Trading fours — four-bar handoffs around the band — is the conversational drill that sharpens it overnight.",
      },
      {
        kind: "para",
        text: "The sequence that builds improvisers: choose one tune. Learn the head by ear. Transcribe one chorus of a master's solo on it — slow the recording, learn every note and fingering, then play it with the recording. Analyze what the master played against the changes: which guide tones, which enclosures, which blues notes. Then transform: take one of their licks through all twelve keys and into your own next solo. Play-along records and apps supply the rhythm section; jam sessions supply the fear — the final teacher.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Twelve-bar blues form",
        latex: "I \\,|\\, I \\,|\\, I \\,|\\, I \\,|\\, IV \\,|\\, IV \\,|\\, I \\,|\\, I \\,|\\, V \\,|\\, IV \\,|\\, I \\,|\\, V",
        meaning: "The blues chorus: three four-bar phrases — statement, answer a fourth higher, resolution with turnaround; the final V sends you back in for another chorus.",
      },
      {
        kind: "formula",
        name: "Swing eighth ratio",
        latex: "2{:}1",
        meaning: "Long-short eighths approximating triplet feel, flexible by tempo; the notated even values are a convention the player bends.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: construct a two-bar line over Dm7 moving to G7 that connects smoothly and resolves into Cmaj7.",
          "Recall the governing ideas: guide tones define and connect — Dm7's F and C, G7's B and F; lines end by landing a chord tone on the next downbeat; chromatic approaches add tension that resolves.",
          "Apply: outline the Dm7 arpeggio upward (D-F-A-C) across beats one and two, then walk F-E-Eb chromatically down into G7's third, B, arriving exactly on the bar line. From B, step down A-G and land G7's seventh, F, on beat three; approach the next downbeat's E — the 3rd of Cmaj7 — from a half step above.",
          "State the result: every chord's signature notes arrive on the strong beats, the chromatic walk bends time toward resolution, and the line ends inside C major — bebop's basic grammar in miniature.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "School jazz-band soloists survive the changes by targeting guide tones at bar lines.",
          "Blues and rock players borrow the form and vocabulary — solos over the 12-bar grid.",
          "Gospel and worship musicians improvise over the same functional movement, ear-first.",
          "Hip-hop producers sample jazz, so players who know changes hear the borrowings.",
          "Ear training for every musician: transcription transfers to all styles.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The beginner tells: running one scale over everything — technically in key, harmonically nowhere; playing licks as furniture instead of vocabulary to be transformed; ignoring recordings, since jazz is an aural tradition the page only approximates; mechanical even eighths that kill the swing; and soloing at full density from bar one — no rests, no development, no story. Also: never practice a pattern outside the form — context is what makes it music.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Swing eighths", def: "The long-short, triplet-adjacent feel that replaces even eighth notes in jazz time." },
          { term: "Changes", def: "The chord progression of a tune — the terrain a solo negotiates." },
          { term: "Lead sheet", def: "A chart of melody and chord symbols — the jazz musician's map." },
          { term: "Guide tones", def: "The 3rd and 7th of each chord — its defining tones and smoothest connectors." },
          { term: "ii-V-I", def: "Jazz's master progression: supertonic to dominant to tonic, roots falling by fifths." },
          { term: "Chorus", def: "One complete pass through the tune's form — the unit of solo space." },
          { term: "Transcription", def: "Learning a recorded solo by ear, note for note — the tradition's core training." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Guide tones are the:",
            options: ["Root and fifth", "Third and seventh", "Ninth and thirteenth", "Melody notes only"],
            answer: 1,
            explain: "The 3rd and 7th define a chord's quality and voice-lead by half steps and common tones.",
          },
          {
            q: "In a 12-bar blues in C, bar five moves to:",
            options: ["F7 (the IV chord)", "G7 (the V chord)", "C7 (the I chord)", "A7 (the VI chord)"],
            answer: 0,
            explain: "The second four-bar phrase lifts to the subdominant — F7 in the key of C.",
          },
          {
            q: "Swing eighths are played:",
            options: ["Perfectly even", "Long-short, near triplet feel", "Short-long only on ballads", "As sixteenth notes"],
            answer: 1,
            explain: "The long-short subdivision, flexing with tempo, is the feel's signature — absorbed by ear.",
          },
          {
            q: "A ii-V-I's roots move:",
            options: ["By whole steps", "Upward by thirds", "Downward by fifths", "By chromatic steps"],
            answer: 2,
            explain: "D to G to C: each root falls a fifth, which is why the circle of fifths is the practice map.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Prerequisites: the harmony and rhythm lessons, plus an instrument or voice. Natural next steps: one full transcribed solo, the production lesson to record yourself, and the songwriting lesson to build the forms you will improvise over.",
        tone: "path",
      },
    ],
  },
]
