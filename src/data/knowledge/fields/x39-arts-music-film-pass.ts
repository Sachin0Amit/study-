import type { KnowledgeTopic } from '../types'

/**
 * Expansion pass X39 (2026-10-25): the arts & culture split — agent B,
 * MUSIC + FILM lessons. Owns seven topics across the new discipline books:
 *
 *  Music Theory & Practice — Melody & Form; Ear Training.
 *  Music History & Appreciation — Western Classical; World Traditions.
 *  Film & Cinema — Screenwriting & Story; Film History & Movements; Sound & Score.
 *
 * DEDUP (cross-verified before authoring — these lessons are NOT re-explained,
 * only briefly cross-referenced in prose):
 *  - Diatonic harmony and cadence mechanics → 'Harmony: Why Chords Sound Like Home'.
 *  - Meter and the notation of musical time → 'Rhythm and Meter'.
 *  - Mixing fundamentals → 'Music Production: DAWs, Recording and the Basics of Mixing'
 *    (film-specific dramaturgy of the mix only, here).
 *  - Editing / montage → 'Montage and the Kuleshov Effect'.
 *  - Shots, camera movement, light → 'Cinematography: Shots, Camera Movement and Light'.
 *  - Three-act story structure → 'Three Acts, Save the Cat' (English book);
 *    the screenwriting lesson stays deliberately scene-level and defers to it.
 */

export const x39ArtsMusicFilmPassTopics: KnowledgeTopic[] = [
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
    id: 'music-history-classical',
    title: 'A Listener\'s Map of Western Classical Music',
    domain: 'Arts & Culture',
    field: 'Music History & Appreciation',
    branch: 'Western Classical',
    tier: 'core',
    concepts: [
      'Plainchant and medieval polyphony',
      'Renaissance imitative counterpoint',
      'Baroque concerto, opera, and continuo',
      'Sonata form and the Classical symphony',
      'Romantic orchestration and chromaticism',
      'Atonality and minimalism',
    ],
    words: 1387,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Classical music is not one style but five centuries of styles stacked under a single museum label, and new listeners usually drown not from disliking the music but from missing the signage. This lesson is the signage. It walks the main rooms of Western concert music in order — medieval chant, Renaissance polyphony, the Baroque of Bach and Handel, the Classical clarity of Haydn and Mozart, the Romantic century, and the twentieth century\'s deliberate breakups — with the audible tells of each era, so you can place what you hear.',
      },
      {
        kind: 'para',
        text: 'Era boundaries are fuzzier than the textbook names admit — Beethoven stood with one foot in Classicism and one in Romanticism, and every new style kept older techniques in its diet. The dates below are approximations of style, not walls. But the tells are real and learnable: which instruments you hear, how the voices stack, whether the harmony wanders or stays home, and how long the piece dares to be. Those four clues date most recordings to within a few decades.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The standard concert repertory spans an enormous range, and hearing which century — and which country — a piece comes from converts an intimidating blur into an explorable library. It also sharpens everything else you listen to, because film scores openly borrow from every room in this museum.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Western concert music begins in the medieval church. Plainchant — the Gregorian chant that legend attached to Pope Gregory I — is monophonic: one unaccompanied line, sung in Latin, flowing in free rhythm that follows the shape of the text rather than any meter. It is melody as speech, drifting where the words drift. From about the twelfth century, composers working in Paris began layering additional voices over chant — the first polyphony — and music acquired a vertical dimension.',
      },
      {
        kind: 'para',
        text: 'Renaissance polyphony, across the fifteenth and sixteenth centuries, braids several independent voices of equal importance, typically unaccompanied. Its signature texture is imitation: one voice states a melody and the others enter in turn with the same line at staggered pitches — the sound of Josquin des Prez and Palestrina, of cathedral choirs. The ideal is smoothness and balance: no voice is a soloist, and the words are set with care, the melodic contour sometimes rising literally where the text does.',
      },
      {
        kind: 'para',
        text: 'The Baroque, roughly 1600 to 1750, trades seamlessness for drama. A bass instrument plus a chord-playing keyboard — the basso continuo — underpins everything, and contrast becomes the engine: loud against soft, solo against ensemble. Around 1600, Italian circles seeking to revive Greek drama invented opera, and Monteverdi\'s Orfeo of 1607 demonstrated what music-theater could be. The concerto pits a soloist against the ensemble — Vivaldi\'s Four Seasons is the genre\'s postcard — while Bach perfected imitative counterpoint and Handel built oratorios of public grandeur.',
      },
      {
        kind: 'para',
        text: 'The Classical style, roughly 1750 to 1820, answers with clarity: balanced phrases, transparent textures, wit in place of awe. Its structural invention is sonata form — an exposition that presents themes, a development that pulls them apart and argues, a recapitulation that brings them home — the dramatic engine of symphonies and chamber works. Haydn wrote more than a hundred symphonies while essentially establishing the genre, Mozart perfected its conversation, and Beethoven then enlarged the orchestra and the music\'s personal stakes, becoming the bridge into the nineteenth century.',
      },
      {
        kind: 'para',
        text: 'Romanticism — the long nineteenth century — is Classical hardware pushed to emotional limits. Orchestras grow, melodies stretch long enough to sing, and harmony turns chromatic, wandering ever further from home before returning; the Harmony lesson covers the diatonic baseline being stretched here. Program music tells stories without words, virtuoso showmen like Paganini and Liszt make performance itself theatrical, nationalism feeds folk song into concert halls, and Wagner fuses music, poetry, and stagecraft into all-evening dramas studded with leitmotifs — brief recurring themes that tag characters and objects.',
      },
      {
        kind: 'para',
        text: 'The twentieth century dismantles each inherited certainty in turn. Schoenberg abandoned the home key entirely — atonality — and then organized all twelve pitches into his twelve-tone method, in which no note outranks another. Stravinsky made rhythm the scandal: the 1913 Paris premiere of The Rite of Spring, with its pounding, shifting accents, remains the most famous theatrical riot in music history. After mid-century, minimalism — Steve Reich, Philip Glass, Terry Riley — answered density with tiny cells repeated and gradually transformed. Today\'s composers browse every shelf freely.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Gather clues without judging: instruments first. A harpsichord points toward the Baroque; a large orchestra with harp and heavy brass points late Romantic or later; solo piano could be anything, so keep listening.',
          'Read the texture: one unaccompanied line suggests plainchant or deliberate archaism; equal imitative voices suggest the Renaissance; a clear melody over a supportive accompaniment suggests the Classical era; dense, saturated layering suggests Romantic or after.',
          'Track the harmony: does it settle on a home key, wander chromatically, or refuse a home altogether? Diatonic ease reads as pre-1800; persistent wandering reads nineteenth century; homelessness reads twentieth.',
          'Weigh form and length: tidy, repeated sections suit the Baroque and Classical rooms; a single unbroken half-hour argues for Romantic ambitions or twentieth-century experiment.',
          'Commit to a guess, then verify against a program note or description and replay the opening. Whichever clue misled you is the lesson — it teaches your defaults faster than a correct guess would.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'para',
        text: 'At concerts and in streaming queues the map pays for itself immediately. Knowing that an evening pairs a Baroque concerto with a Romantic symphony tells you the first will be lean and motoric and the second long-lined and saturated, so you can budget attention instead of being ambushed by length.',
      },
      {
        kind: 'para',
        text: 'Film scoring is this museum\'s most indebted tenant. Horror scores borrow the twentieth century\'s clusters and shrieks, costume dramas borrow strings-and-harp Romanticism, and period pieces borrow the harpsichord by the yard. Once you can hear the borrowing, you can hear the emotional instruction the score is quietly giving you.',
      },
      {
        kind: 'para',
        text: 'For players and singers, the map prevents the classic mistake of choosing repertoire two rooms beyond your technique, and it makes program-building logical: contrast eras deliberately and a recital tells a story of history; stay within one era and it makes a single, deeper point.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Plainchant', def: 'Medieval monophonic church song in Latin, in free rhythm that follows the text.' },
          { term: 'Polyphony', def: 'Music of several independent voices sounding together — the Renaissance\'s signature texture.' },
          { term: 'Basso continuo', def: 'The Baroque\'s continuous bass-and-chord foundation, played by keyboard plus a bass instrument.' },
          { term: 'Sonata form', def: 'Exposition, development, recapitulation — themes presented, argued, and brought home.' },
          { term: 'Program music', def: 'Instrumental music that depicts an extramusical story, scene, or idea.' },
          { term: 'Atonality', def: 'The abandonment of a central home pitch and key, pioneered by Schoenberg.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'Try each question cold. All four target the era-tells that let you navigate the repertory — instruments, texture, harmony, and form — rather than names and dates.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Opera was born:',
            options: ['In ancient Greece as sung tragedy', 'In Italy around 1600, as intellectuals tried to revive Greek drama', 'In France at the court of the Sun King', 'In Germany with Bach\'s Passions'],
            answer: 1,
            explain: 'Italian circles around 1600 pursued a revival of Greek-style sung drama; Monteverdi\'s Orfeo (1607) demonstrated its power.',
          },
          {
            q: 'The three main sections of sonata form, in order, are:',
            options: ['Recapitulation, exposition, development', 'Exposition, development, recapitulation', 'Development, exposition, coda', 'Exposition, coda, recapitulation'],
            answer: 1,
            explain: 'Themes are presented, then pulled apart and argued, then returned home — the engine of Classical symphonies.',
          },
          {
            q: 'Imitative entries of equal, unaccompanied voices are the signature texture of:',
            options: ['Renaissance polyphony', 'Baroque opera', 'The Romantic symphony', 'Minimalism'],
            answer: 0,
            explain: 'Renaissance sacred music braids equal voices in staggered imitation — smooth, balanced, and soloist-free.',
          },
          {
            q: 'Which statement best describes minimalism?',
            options: ['The total abandonment of rhythm', 'Tiny cells repeated with gradual, audible transformation', 'Very quiet music for tiny ensembles', 'The serial ordering of all twelve pitches'],
            answer: 1,
            explain: 'Minimalism — Reich, Glass, Riley — trades density for repetition and slow process; ordering all twelve pitches is Schoenberg\'s serialism.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Take the rooms one at a time: a chant album, one Vivaldi concerto, one Haydn symphony, one Romantic symphony, and one work each by Reich and Glass, logging the tells as you hear them. The Melody and Form lesson shows how the small forms inside these rooms are built; this map shows why the rooms are arranged as they are.',
      },
    ],
  },
  {
    id: 'music-world-traditions',
    title: 'World Music Traditions: Raga, Gamelan and Beyond',
    domain: 'Arts & Culture',
    field: 'Music History & Appreciation',
    branch: 'World Traditions',
    tier: 'intermediate',
    concepts: [
      'Raga and tala: the Indian framework',
      'Gamelan: gong cycles and interlocking',
      'West African polyrhythm and the griot',
      'Flamenco compás: the twelve-count cycle',
      'Maqam: pathways and quarter-tones',
      'Folk, court, and popular patronage',
    ],
    words: 1526,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'World music is a record-store bin, not a category: it gathers everything the Western concert and pop traditions are not, and so teaches nothing by itself. Taken one tradition at a time, however, the music usually filed there contains complete systems — theory, instruments, social roles, listening etiquette — as rigorous as any harmony textbook. This lesson introduces five of them: Indian raga, the Indonesian gamelan, West African ensemble drumming and the griot art, flamenco, and the Arabic maqam, closing with the patronage lens that sorts folk, court, and popular music everywhere.',
      },
      {
        kind: 'para',
        text: 'The honest way in is the ethnomusicologist\'s discipline: describe a music in its own terms before comparing it to anything. For each tradition the productive questions are the same four: What is the melodic system? What organizes time? Which instruments and voices carry it? And who performs for whom, in what context? Ask those four, and even a single unfamiliar track becomes legible.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Most of the people on earth hear music built on other logics than the Western ones — drone-based melody, cyclic time, interlocking parts. Meeting these systems on their own terms trains the ear out of its defaults, and it sharpens your hearing of Western music into the bargain.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Indian classical music — the Hindustani tradition of the north and the Carnatic of the south — runs on raga and tala. A raga is far more than a scale: it is a melodic framework with a prescribed ascent and descent, characteristic phrases, resting tones and avoided ones, and an intended aesthetic mood. Microtonal ornaments carry much of its identity, and a drone — the plucked strings of the tanpura — sounds throughout, so that every pitch is heard as a relationship to home. A tala is the rhythmic cycle framing performance: the common teental of sixteen counts, grouped 4+4+4+4, tracked on the fingers and articulated by the drums, inside which a performer stretches, delays, and resolves phrases with deliberate patience. By long tradition, many ragas carry associations with times of day and seasons.',
      },
      {
        kind: 'para',
        text: 'A gamelan is the bronze percussion orchestra of Java and Bali — tuned gongs, metallophones, and drums played as one communal instrument, often with voices above. Its two tuning systems, pelog and slendro, match no piano, and each ensemble is tuned as a set: its instruments belong together and do not travel between orchestras. Time is organized in cycles marked by the great gong, whose stroke is both punctuation and arrival, while faster layers interlock inside the slow skeleton — most vertiginously in the Balinese kotekan, where paired players divide a single line between them. Gamelan animates weddings, temple rites, and the all-night shadow-puppet theater.',
      },
      {
        kind: 'para',
        text: 'West African ensemble drumming is organized polyrhythmically: several patterns of different lengths and characters sound at once, none reducible to a single main beat, with a bell or rattle often laying down the timeline against which everyone else orients. Call-and-response structures run through the singing, drumming, and dancing alike. Alongside the drums stands the griot — jeli — tradition of the Mandé peoples: hereditary praise-singers, genealogists, and oral historians whose 21-string kora carries centuries of social memory. The Atlantic slave trade carried these principles to the Americas, where they seeded a family tree of popular music that circles the world today.',
      },
      {
        kind: 'para',
        text: 'Flamenco grew in Andalusia, in southern Spain — an art of cante (song), toque (guitar), and baile (dance), shaped historically by Romani performers and older Andalusian song families. Its engine is compás: the rhythmic cycle, most characteristically counted in twelve with accents that skip and cluster — commonly falling on 3, 6, 8, 10, and 12 in forms like the soleá and bulerías — producing the push-pull tension that performers stretch and withhold. The distinct form-families are called palos, each with its own compás, mood, and verse tradition; the improvisation lives inside the strictness.',
      },
      {
        kind: 'para',
        text: 'Across the Arab world and its neighbors stretches the maqam system: melodic modes assembled from small building blocks, each with a prescribed pathway — which tones to emphasize, how to ascend, where to linger before returning. Many maqamat use quarter-tones that fall between the piano\'s keys, so their colors have no equivalent in Western equal temperament. A taqsim, the improvised instrumental solo that opens a performance, is the maqam introduced in its own voice; the classical ideal is tarab — the state of enchantment a performance earns when it lands deeply enough that the room answers aloud.',
      },
      {
        kind: 'para',
        text: 'The patronage lens sorts traditions by who pays. Court and temple patronage — the gamelan of Javanese palaces, centuries of Indian court music — refined art music toward precision, virtuosity, and length. Village folk music values participation and function: work songs, dance tunes, and wedding music, where a wrong note matters less than everyone joining. Popular musics ride cities, radio, and recordings, and today\'s global fusions — from Afrobeat to K-pop\'s production lines — circle the world and feed traditions back into themselves. No category is pure, and traditional never means frozen: every living tradition borrows.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Choose one recording from a tradition you do not know — a raga performance, a gamelan piece, a kora song, a soleá — and give it one full listen with eyes closed before any analysis.',
          'Locate the time organization: is there a repeating cycle — the gong\'s stroke, the tala\'s return, the compás\'s twelve — or does the music flow without metered return? Count along until the cycle closes on you.',
          'Locate the pitch anchor: a drone (raga), a fixed ensemble tuning (gamelan), a home mode (maqam); then notice how melody behaves relative to it — ornamented around it, pathwayed through it, or floating free.',
          'Map the roles: who keeps the time skeleton, who ornaments, who leads, who answers? In interlocking and call-and-response textures, naming the parts is most of the understanding.',
          'Read one short, reliable paragraph about context — who performs this, for whom, when — and relisten once. The second listen, with cycle and roles named, is a different experience; that difference is the entire method.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'para',
        text: 'Musicians who play across traditions discover that the first barrier is assumption: expecting a downbeat every four counts when the cycle runs twelve or sixteen, or expecting chord changes when the ensemble runs on drone and mode. Naming your own defaults out loud is the fastest way past them.',
      },
      {
        kind: 'para',
        text: 'For listeners, the four questions become a game that works on nearly any unfamiliar track — which is to say, on most of the world\'s recorded music. Building playlists that pair, say, a taqsim with a raga teaches comparison better than any essay, provided each item is first heard on its own terms.',
      },
      {
        kind: 'para',
        text: 'The lens also enforces honesty about context. Music built for ritual, mourning, or trance changes meaning when it is cut into background playlists, and traditions have owners, lineages, and protocols. Curiosity plus context is the difference between study and tourism.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Raga', def: 'The Indian melodic framework: prescribed ascent and descent, characteristic phrases, and an intended mood, performed over a drone.' },
          { term: 'Tala', def: 'The cyclic rhythmic organization of Indian music, such as the sixteen-count teental.' },
          { term: 'Gamelan', def: 'The bronze percussion orchestra of Java and Bali, tuned as a set and organized in gong cycles.' },
          { term: 'Griot (jeli)', def: 'Hereditary West African oral historian and praise-singer, often playing the kora.' },
          { term: 'Compás', def: 'Flamenco\'s rhythmic cycle — commonly twelve counts with clustered, skipping accents.' },
          { term: 'Maqam', def: 'Arabic melodic mode with a prescribed pathway of emphasized tones, including quarter-tones.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'Answer cold, then check. Each question isolates one system-defining idea — the scope of a raga, the gong\'s function, the griot\'s office, and the shape of compás.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A raga differs from a scale mainly because it:',
            options: ['Uses only five notes', 'Prescribes characteristic phrases, resting tones, and an intended mood, not just pitches', 'Is always performed fast', 'Belongs to the gamelan tradition'],
            answer: 1,
            explain: 'A raga is a melodic personality — its ascent, descent, signature phrases, and mood — far beyond a bare pitch collection.',
          },
          {
            q: 'In gamelan music, the stroke of the great gong typically:',
            options: ['Signals a change of tuning', 'Marks the arrival that completes the rhythmic cycle', 'Introduces the singer only', 'Is omitted in temple performance'],
            answer: 1,
            explain: 'The great gong punctuates and closes the cycle — the arrival around which the faster interlocking layers are organized.',
          },
          {
            q: 'Griots are best described as:',
            options: ['Court dancers of Bali', 'Hereditary West African oral historians and praise-singers', 'Flamenco guitarists of Andalusia', 'Sufi devotional singers'],
            answer: 1,
            explain: 'The jeliw of the Mandé peoples carry genealogy, praise, and social memory — music as archive and as hereditary office.',
          },
          {
            q: 'Flamenco compás is characterized by:',
            options: ['A steady four-count march', 'Twelve-count cycles with clustered, skipping accents', 'An absence of meter', 'A 4+4+4+4 grouping identical to teental'],
            answer: 1,
            explain: 'Classic cycles such as soleá and bulerías count twelve with accents commonly on 3, 6, 8, 10, and 12 — the tension is in the uneven spacing.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Pick one tradition and go deep before sampling more — one full raga performance, one gamelan night, one kora recording — while reading the Rhythm and Meter lesson to sharpen your cycle-counting. Then return to the Western classical map and notice what it never told you it was missing.',
      },
    ],
  },
  {
    id: 'film-screenwriting-craft',
    title: 'Screenwriting: Character, Dialogue and the Scene',
    domain: 'Arts & Culture',
    field: 'Film & Cinema',
    branch: 'Screenwriting & Story',
    tier: 'core',
    concepts: [
      'The scene as unit of dramatic action',
      'Entering late and leaving early',
      'Want versus need',
      'Subtext and on-the-nose dialogue',
      'Sluglines, action lines, and format',
      'Rewriting and the table read',
    ],
    words: 1455,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'A screenplay is a strange document: ninety to one hundred and twenty pages, typed in a fixed format, describing a film that does not yet exist, written to be executed rather than admired. Its unit of construction is the scene; its raw materials are character, action, and dialogue. This core Film & Cinema lesson covers scene-level craft — what a scene must accomplish, the difference between what a character wants and what they need, the discipline of subtext, the laws of action lines and dialogue, format basics, and how rewriting actually works.',
      },
      {
        kind: 'para',
        text: 'The large-scale architecture — three acts, plot points, and the beats that organize a whole story — is owned by a companion lesson, Three Acts, Save the Cat, in the English library, and this lesson deliberately stays below it. The division reflects a truth of the trade: a script with sound structure and dead scenes still fails, because readers forgive a wobbly act map more slowly than a boring page. Structure gets you read; scene craft gets you remembered.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Screenwriting is the only major literary form written to be performed by a hundred collaborators, and the scene is where all of their work begins. Learning to build scenes that turn, write dialogue that plays, and distinguish want from need transfers directly to directing, editing, and pitching.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Treat the scene as the unit of dramatic action: one continuous time and place in which a character pursues an objective, meets resistance, and exits somewhere different. The working test is the turn — some value the scene controls, such as trust, power, hope, or safety, should shift by the end, even slightly. A scene in which nothing changes is a candidate for cutting, however well written. And the classic economy rule is enter late, leave early: begin where the conflict ignites — not with greetings and arrivals — and cut the instant the outcome lands, not the aftermath.',
      },
      {
        kind: 'para',
        text: 'Characters run on two engines. The want is concrete and external — win the case, reach the ship, get the job, find the money — and it drives the visible plot. The need is internal and usually invisible to the character: the capacity for trust, honesty, or humility they must acquire to become whole. Drama lives in the gap between the two, because a character chasing the wrong prize makes victories hollow and failures instructive. The strongest endings force want and need into open collision — one of them won, lost, or knowingly traded.',
      },
      {
        kind: 'para',
        text: 'People under pressure rarely say precisely what they mean, and dialogue works when the real fight runs beneath the surface of the words: the couple arguing about the dishes is arguing about the marriage. Dialogue that states its feelings outright is called on-the-nose, and it spends the tension instead of banking it. The revision move is displacement: turn the declaration into behavior, the accusation into irony, the grief into logistics. There is also a voice test worth running on every page — cover the character names, and if you cannot tell who is speaking, the voices are not yet differentiated.',
      },
      {
        kind: 'para',
        text: 'Action lines and dialogue obey different laws. Action lines are present tense, lean, and restricted to what a camera can see or an actor can do — never inner thoughts, which belong to the novel. Their cardinal virtue is white space. Dialogue is compressed speech: lines short enough to be spoken, rhythm and word choice carrying character, parentheticals reserved for the rare inflection an actor could not guess. The strongest scripts can play whole scenes with no dialogue at all — a fact the silent era proved and every great editor exploits, as the Montage lesson shows.',
      },
      {
        kind: 'para',
        text: 'Format is standardized for a reason: in Courier twelve-point, one page runs roughly one minute of screen time, so a reader physically feels the film\'s pacing. The slugline — interior or exterior, location, time of day — heads each scene; action follows beneath it; a character name in capitals sits above the dialogue block; and transitions appear rarely in a modern spec script. Format is not bureaucracy. It is a common meter that lets a stranger read at performance speed and judge length honestly.',
      },
      {
        kind: 'para',
        text: 'First drafts exist to be wrong; rewriting is the job. The read-aloud test catches what the eye forgives — a line that cannot survive the mouth was never a line. The table read, a cold reading by actors or friends around a table, is the cheapest diagnostic instrument in the trade: clunky dialogue exposes itself, dead scenes visibly sink, and the moments where listeners lean in reveal what the script is actually about. Take notes during the read; make changes after it.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Define the turn before drafting: in a two-page kitchen scene between siblings dividing their late mother\'s belongings, the controlling value is custody of memory — decide now whether the scene ends in closeness or rupture, and what tips it.',
          'Set the engines: the older sister wants the process finished tonight; the younger brother needs, without knowing it, to be asked to stay. Note that neither truth will be stated aloud.',
          'Draft entering late: open mid-argument over a specific object — the teapot, not the estate — and let the real subject surface only through what each sibling keeps, gives away, and quietly pockets.',
          'Run the subtext pass: convert every on-the-nose line into behavior or displaced talk — the accusation that he always leaves becomes her boxing the teapot for his suitcase, and him leaving it on the table.',
          'Table-read and trim: hear it cold, mark where the reader breathes wrong, cut the scene\'s first and last lines, then verify the turn lands — the teapot left on the table should now play, unmistakably, as the whole story.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'para',
        text: 'Short films train exactly this skill: with no room for architecture, a five-minute script lives or dies on one scene, one want, one turn. Writers who master the short scene carry the discipline upward into features, where a weak scene is simply harder to see.',
      },
      {
        kind: 'para',
        text: 'Scene literacy also upgrades watching. Pausing a film to ask what a scene\'s value is, where it entered, and what it turned converts viewing into apprenticeship — and it is the doorway to adaptation, because you learn to see which scene inside a short story is secretly the movie.',
      },
      {
        kind: 'para',
        text: 'Because the script is a working document for a hundred collaborators, clarity is a professional courtesy: an ambiguous action line wastes a crew\'s morning. Writing only what can be filmed, acted, and cut is not minimalism in this trade; it is manners.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Scene', def: 'One continuous unit of time and place in which a character pursues an objective toward a turn.' },
          { term: 'Turn', def: 'The shift in a scene\'s controlling value — trust, power, safety — by which drama advances.' },
          { term: 'Want versus need', def: 'A character\'s visible external goal versus the internal lesson they must learn.' },
          { term: 'Subtext', def: 'The meaning beneath the spoken lines — the real fight conducted through surface talk.' },
          { term: 'Slugline', def: 'The scene heading: interior or exterior, location, and time of day.' },
          { term: 'Table read', def: 'A cold reading of the script aloud, used to diagnose scenes before rewriting.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'Answer cold first. Each item tests a working rule — scene economy, motivation, subtext, or format — that you will apply in the very next scene you write.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Enter late, leave early advises the writer to:',
            options: ['Skip the climax', 'Open at the conflict\'s ignition and cut once the outcome lands', 'Write only short screenplays', 'Leave the scene\'s location unstated'],
            answer: 1,
            explain: 'Greetings, arrivals, and aftermaths are dead weight; the scene starts where it catches fire and ends once it turns.',
          },
          {
            q: 'A character\'s need is best described as:',
            options: ['Their concrete external goal', 'The internal capacity or lesson they must acquire', 'Whatever the antagonist denies them', 'The actor\'s chosen interpretation'],
            answer: 1,
            explain: 'The want is external and visible; the need is internal and usually unknown to the character — the drama lives in the gap.',
          },
          {
            q: 'On-the-nose dialogue is dialogue that:',
            options: ['States the subtext directly and deflates the tension', 'Is spoken too loudly', 'Belongs in the action lines', 'Rhymes deliberately'],
            answer: 0,
            explain: 'Naming the feeling outright spends it; displacement into behavior and irony keeps the charge running.',
          },
          {
            q: 'The one-page-per-minute convention of screenplay format exists mainly to:',
            options: ['Satisfy typewriter tradition', 'Let a reader physically feel the film\'s pacing and length', 'Prevent long speeches', 'Standardize binding margins'],
            answer: 1,
            explain: 'The fixed format is a timing instrument: ninety pages should read like ninety minutes.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Read Three Acts, Save the Cat in the English library for the macro structure this lesson deferred, and the Cinematography and Montage lessons for how written images and cuts get executed. Then write one two-page scene this week and put it through a table read.',
      },
    ],
  },
  {
    id: 'film-movements-history',
    title: 'Film Movements: Silent Cinema to New Waves',
    domain: 'Arts & Culture',
    field: 'Film & Cinema',
    branch: 'Film History & Movements',
    tier: 'intermediate',
    concepts: [
      'Silent comedy and German expressionism',
      'The studio system and vertical integration',
      'Italian neorealism',
      'The French New Wave and auteur theory',
      'Parallel cinemas of the world',
      'Blockbusters and the indie response',
    ],
    words: 1355,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Cinema is barely more than a century old, yet it has already accumulated strata like an old city: each generation dug foundations, and each rebellion built on top of them. This intermediate Film & Cinema lesson tours the major strata in order — silent comedy and German expressionism, the classical Hollywood studio system, Italian neorealism, the French New Wave, the parallel cinemas of the wider world, and the blockbuster-plus-indie settlement that followed. A movement, as used here, is a cluster of films sharing a period, an aesthetic, and a purpose.',
      },
      {
        kind: 'para',
        text: 'Movements make sense as history\'s teaching units because each visibly answered its moment: expressionism processed a lost war, neorealism filmed actual rubble, and the New Wave seized newly portable cameras. Watching for the answer underneath the style turns film history from trivia into pattern — and the pattern continues today, which is why contemporary directors can be read as descendants of one movement or another.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every film you stream descends from somewhere, and knowing the lineage changes what you see: why certain framings feel German, why grit reads as honesty, why scale reads as commerce. Film literacy is partly genealogy, and this lesson is the family tree.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The silent era, which ran to the late 1920s, was never actually silent — pianists and organists played every screening — and it perfected a physical, wordless grammar (the Montage lesson covers the Soviet editing theories of the same years). Silent comedy remains the era\'s most fluent export: Chaplin\'s Tramp and Keaton\'s deadpan acrobatics told complete stories without a word. In postwar Germany, expressionism turned the same visual freedom inward: The Cabinet of Dr. Caligari (1920) filled the frame with painted, distorted sets and hard shadows that externalize deranged minds — a look that later flowed into horror and film noir.',
      },
      {
        kind: 'para',
        text: 'Classical Hollywood, from the 1920s through the 1940s, ran as an industrial system. A handful of studios — MGM, Paramount, Warner Bros., Fox, and their peers — owned production, distribution, and exhibition outright; kept stars, directors, and writers on contract; and ran genre assembly lines with the smooth, invisible style of continuity filmmaking. Volume was enormous and craft was deep; the costs were uniformity and control, enforced in content by the Production Code. The system unraveled after 1948, when the Paramount decision forced the studios to divest their theater chains, just as television pulled the audience home.',
      },
      {
        kind: 'para',
        text: 'Italian neorealism answered the war by pointing cameras at it. Shoot in the actual streets, cast non-actors — factory workers, children — and treat the everyday as epic: Rossellini\'s Rome, Open City (1945), filmed while the city still bore its battle damage, and De Sica\'s Bicycle Thieves (1948), a father and son searching Rome for a stolen bicycle, made moral urgency out of plain daylight. Location shooting, untrained faces, and social stakes became permanent options in world cinema from that moment on.',
      },
      {
        kind: 'para',
        text: 'The French New Wave of the late 1950s and 1960s began in criticism. Young writers at the journal Cahiers du cinéma argued that the director, not the script or the studio, was a film\'s true author — the auteur position — and then picked up light cameras and proved it in the streets: Truffaut\'s The 400 Blows (1959), Godard\'s Breathless (1960) with its defiant jump cuts. The grammar of film became negotiable again; cinema looked at itself, at speed, and on location.',
      },
      {
        kind: 'para',
        text: 'Film history has many capitals, not one. Japan\'s golden age overlapped Hollywood\'s height: Kurosawa\'s Rashomon (1950), with its nested and contradictory witnesses, rewired world cinema\'s idea of narration. In India, Satyajit Ray\'s Apu Trilogy, beginning with Pather Panchali (1955), joined lyric poetry to neorealist means. Mexico, Egypt, and Nigeria built industries with their own stars and genres — and the world canon keeps widening as more of this history is restored, subtitled, and circulated.',
      },
      {
        kind: 'para',
        text: 'The 1970s split the screen in two. Jaws (1975) and Star Wars (1977) invented the wide-release summer event — a film as a national date — and the industry reorganized around franchises and marketing. The counter-movement matured in the American independent sector, which Sundance and the boom of the late 1980s and 1990s — Sex, Lies, and Videotape, Pulp Fiction — turned into a real parallel market for personal, low-budget cinema. Digital cameras then collapsed production costs outright, leaving today\'s landscape: spectacle and intimacy, festivals and streaming, the pendulum still swinging.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Date the artifact first: black-and-white or color, screen shape, the presence of synchronized dialogue, the grain of the stock. Even a rough decade bracket eliminates most rooms in the museum.',
          'Read production values: controlled lighting and built sets point to the studio system; grainy streets and natural light point to neorealism and its descendants; seamless digital scale points to the blockbuster era.',
          'Read performance: stylized, makeup-driven gesture suggests silent or expressionist work; unforced, non-professional naturalism suggests neorealism; casual, self-interrupting speech suggests New Wave descendants.',
          'Read the grammar: invisible continuity as default says classical Hollywood; deliberate jump cuts and direct address say New Wave inheritance; montage-built sequences point back to the 1920s.',
          'Name the movement, then test the guess against subject matter — who and what the film thinks matters. Where grammar and subject disagree, you have usually found a transitional work, and transitional works are the most interesting ones of all.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'para',
        text: 'Programming a themed film night — one silent comedy, one noir, one neorealist work, one New Wave title — teaches more than any single film can, because the movement emerges from contrast: you see each style most clearly at the moment it gives way to the next.',
      },
      {
        kind: 'para',
        text: 'Lineage-watching sharpens taste. The handheld urgency in a contemporary drama descends from the New Wave and from John Cassavetes; the distorted interiors of a modern horror film descend from Caligari. Directors quote movements the way novelists quote prose styles, and the quotations are the subtext.',
      },
      {
        kind: 'para',
        text: 'For anyone writing about film — reviews, video essays, study notes — movements are the load-bearing vocabulary. Neo-neorealist or studio-era polish compresses paragraphs of description into two words, provided the writer has genuinely watched the referents.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Studio system', def: 'The vertically integrated Hollywood order: studios owning production, distribution, and theaters, with contract talent.' },
          { term: 'Vertical integration', def: 'One company controlling production, distribution, and exhibition — the structural core of the studio era.' },
          { term: 'Neorealism', def: 'The postwar Italian movement: real locations, non-professional actors, everyday social stakes.' },
          { term: 'Auteur theory', def: 'The position that the director is a film\'s principal author, argued at Cahiers du cinéma.' },
          { term: 'New Wave', def: 'The French movement of critics turned directors who remade film grammar with speed and self-awareness.' },
          { term: 'Blockbuster', def: 'The wide-release, heavily marketed event film, born with Jaws and Star Wars.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'Answer cold. Each item tests one load-bearing fact — where a movement arose, what it controlled, or how you would recognize it on sight.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The Cabinet of Dr. Caligari (1920) is the emblem of:',
            options: ['French impressionism', 'German expressionism', 'Italian neorealism', 'Soviet montage'],
            answer: 1,
            explain: 'Its painted, distorted sets and hard shadows externalize disturbed psychology — expressionism\'s visual manifesto.',
          },
          {
            q: 'The 1948 Paramount decision changed Hollywood by:',
            options: ['Creating the ratings system', 'Forcing the studios to sell their theater chains', 'Legalizing synchronized sound', 'Founding the festival circuit'],
            answer: 1,
            explain: 'Ending vertical integration broke the studio system\'s structural core; the ratings system arrived decades later.',
          },
          {
            q: 'Neorealism is best summarized as:',
            options: ['Built sets with non-actor extras', 'Real locations, non-professional actors, everyday social stakes', 'Big-budget escapism after the war', 'Critics turned directors with light cameras'],
            answer: 1,
            explain: 'Rome, Open City and Bicycle Thieves filmed the actual postwar world, with workers and children as leads — the last option describes the New Wave.',
          },
          {
            q: 'The auteur position holds that:',
            options: ['Producers are a film\'s true authors', 'The director is a film\'s principal author', 'Scripts should be improvised', 'Studios should own the theaters'],
            answer: 1,
            explain: 'Argued at Cahiers du cinéma, it licensed those critics to pick up cameras — and it still anchors how canons and careers are read.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Watch one emblem per movement — a Keaton short, Caligari, Bicycle Thieves, Breathless, Rashomon, Jaws — alongside the Montage and Cinematography lessons, which explain the grammar underneath. Then trace a contemporary favorite backwards until you find its grandparents.',
      },
    ],
  },
  {
    id: 'film-sound-design',
    title: 'Sound Design: The Invisible Half of Cinema',
    domain: 'Arts & Culture',
    field: 'Film & Cinema',
    branch: 'Sound & Score',
    tier: 'core',
    concepts: [
      'Diegetic versus non-diegetic sound',
      'Foley and ADR',
      'The dialogue-effects-music hierarchy',
      'Expressive silence',
      'Mixing and dynamic range',
      'Sound perspective and point of audition',
    ],
    words: 1427,
    readMins: 7,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Everyone has heard a film; almost no one has watched one with the sound off and felt anything. That asymmetry is this lesson\'s premise: the soundtrack is cinema\'s invisible half, shaping belief, attention, and fear while the picture takes the credit. This core Film & Cinema lesson covers the working vocabulary of film sound — the diegetic and non-diegetic layers, foley and ADR, the hierarchy of voice, effects, and music, the expressive use of silence, mixing and loudness, and sound perspective.',
      },
      {
        kind: 'para',
        text: 'Sound reached the movies late — synchronized dialogue arrived commercially at the end of the 1920s — and it arrived as an engineering problem before it became an art. It became an art the moment makers stopped treating sound as a servant of the image and started treating it as an independent dramatic channel: something that can contradict the picture, precede it, and outlast it.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Audiences forgive soft focus and a shaky camera long before they forgive inaudible dialogue or a mix that exhausts them. Sound is where low-budget work most betrays itself and where masterpieces do their quietest work — and hearing it changes how you make and watch everything.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The first cut runs between what belongs to the story\'s world and what does not. Diegetic sound has a source inside the fiction: spoken dialogue, footsteps, a radio playing in the kitchen. Non-diegetic sound comes from outside it: the score, a narrator\'s commentary. The boundary is dramatic territory, not paperwork — filmmakers cross it deliberately, as when music that seemed to be score turns out to be playing on a character\'s radio, or when room tone fades to signal that we have moved inside someone\'s head. The theorist Michel Chion borrowed the term acousmatic — a sound heard whose source is withheld — to explain why the unseen voice holds such power.',
      },
      {
        kind: 'para',
        text: 'Much of what you hear was performed after the shoot. Foley — named for Jack Foley, who ran the craft at Universal in the early sound era — is the art of performing sound effects in sync with picture: footsteps, cloth rustles, door handles, and stage-managed punches, created on a stage with props while watching the film. ADR, additional dialogue replacement, re-records lines in a studio, matched to the mouth — rescuing speech drowned by wind or engines, adjusting a performance, or changing a line outright. Location sound is a starting draft; the finished track is built.',
      },
      {
        kind: 'para',
        text: 'The track has a working hierarchy, and dialogue sits at the top: audiences will forgive an out-of-focus face but not a lost syllable. Beneath it, sound effects build the world — continuous ambiences for rooms and streets, spot effects for the actions that need punctuation. Music enters last and carries what neither speech nor noise can: emotion and the sense of time passing. When all three fight over the same moment, the story loses; mixing is largely the art of deciding which layer yields. Walter Murch, credited as sound designer on Apocalypse Now (1979), helped make that judgment a named craft.',
      },
      {
        kind: 'para',
        text: 'Silence, used precisely, is sound design\'s loudest tool. Cutting the score and ambience at the moment of danger makes a whole theater lean forward; a scene that drops to a single dry voice feels more naked than any close-up. Silence can be the subject as well as the technique — the vacuum of space, the aftermath of an explosion, a character\'s deafness — where the missing information is the information. Across a whole film, the rhythm of sound against quiet is itself an instrument.',
      },
      {
        kind: 'para',
        text: 'Mixing is the discipline of balancing the layers: dialogue anchored and intelligible, effects placed around it, music rising and ducking in obedience to speech. Cinema mixes exploit loudness contrast — a whisper against a roar is the grammar — but small speakers and late-night viewing compress that contrast away, producing the modern household complaint: explosions that rattle the walls wrapped around dialogue nobody can parse. The Music Production lesson covers the fundamentals of mixing; the point specific to film is dramaturgical — every fader move is a storytelling decision.',
      },
      {
        kind: 'para',
        text: 'Sound perspective keeps the track believable: a distant camera hears distant acoustics, and a close-up hears breath and cloth, with reverberation and tone matched to shot distance the way lighting is matched to mood (the Cinematography lesson covers the visual half). More powerful still is the point of audition — whose ears the track belongs to. Inside a character\'s head, the world can muffle and the pulse can rise; and the famous shower scene in Psycho (1960) achieves its stabbing violence with shrieking violins — an orchestra doing a sound effect\'s job.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Read the scene and inventory the diegetic needs: every source the world implies — rain on glass, a refrigerator hum, the second character\'s footsteps — listed before any artistic decision, because believability is the budget everything else spends.',
          'Choose the point of audition: whose ears? For a woman alone hearing a knock at night, the room\'s hum may swell and the knock arrive too loud — distance and tone following her attention rather than the camera\'s framing.',
          'Build the bed and the spots: lay a continuous ambience under the scene, then place foley spots for the actions that matter, letting unnecessary sounds drop out rather than crowd the mix.',
          'Place music last, and consider withholding it: bring in a low pulse after the knock, or score nothing at all and let one moment — the deadbolt turning — play completely dry and close.',
          'Check the mix at low volume on small speakers: if any syllable of dialogue is unclear, everything yields to it; if the scene\'s one silence no longer reads, the ambience is masking it. Fix, then confirm the perspective still agrees with the edit.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'para',
        text: 'For small crews the lesson is preventive: record location dialogue as if it were the only thing that matters, because it is; capture a full minute of clean room tone on every set; and do foley in a closet with one decent microphone rather than buying anything.',
      },
      {
        kind: 'para',
        text: 'For viewers and critics, sound is the freshest territory. Asking who the track belongs to, where the score knows things the characters do not, and what the film\'s silences cost produces observations almost nobody else at the table has.',
      },
      {
        kind: 'para',
        text: 'The hierarchy — voice first, world second, emotion third — transfers intact to podcasts, games, and video essays; and expressive silence is the single cheapest production value in any medium.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Diegetic sound', def: 'Sound whose source belongs to the story world: dialogue, footsteps, an on-screen radio.' },
          { term: 'Foley', def: 'Effects performed in sync with picture — footsteps, cloth, props — named for Jack Foley.' },
          { term: 'ADR', def: 'Additional dialogue replacement: re-recording lines in a studio, matched to the picture.' },
          { term: 'Ambience', def: 'The continuous background sound of a location — the bed beneath the events.' },
          { term: 'Point of audition', def: 'Whose ears the soundtrack represents — a character\'s, or the film\'s omniscient ear.' },
          { term: 'Dynamic range', def: 'The span between a mix\'s quietest and loudest moments, and how playback compresses it.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'Answer cold, then verify. Each question targets a distinction you can hear in tonight\'s viewing — source and layer, craft and naming, hierarchy and silence.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A radio playing in a character\'s kitchen is:',
            options: ['Non-diegetic sound', 'Diegetic sound', 'Foley', 'A leitmotif'],
            answer: 1,
            explain: 'Its source lives inside the story world — which is also why a character can switch it off, unlike the score.',
          },
          {
            q: 'Foley is:',
            options: ['A type of microphone', 'Effects performed in sync with picture, named for Jack Foley', 'Digital reverb', 'The score recorded after editing'],
            answer: 1,
            explain: 'Footsteps, cloth, and props are performed live to picture on a foley stage — a craft that took its name from its early master at Universal.',
          },
          {
            q: 'In the film sound hierarchy, intelligibility matters most for:',
            options: ['The music', 'The ambience', 'The dialogue', 'The spot effects'],
            answer: 2,
            explain: 'Audiences forgive visual flaws long before they forgive lost syllables — dialogue rides at the top of the mix.',
          },
          {
            q: 'Cutting score and ambience at a moment of tension works because:',
            options: ['It saves the mix budget', 'Sudden silence withdraws information and makes audiences lean in', 'Loudness rules forbid sustained scores', 'Silence masks dialogue errors'],
            answer: 1,
            explain: 'Silence is negative information — its arrival signals that something has changed, and attention floods toward the void.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Rewatch a favorite scene with your eyes closed, then with the sound off, and note what each half carries; read the Music Production lesson for mixing fundamentals and the Montage lesson for how cuts and sound cooperate. Then design one scene\'s track on paper from start to finish.',
      },
    ],
  },
]
