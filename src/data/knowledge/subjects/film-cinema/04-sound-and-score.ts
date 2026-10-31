/**
 * Knowledge Universe — Film & Cinema — Chapter 04: Sound & Score
 * 1 lesson · ~1,427 words
 * field: Film & Cinema
 * legacy sources: x39-arts-music-film-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Sound & Score]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 film-sound-design — Sound Design: The Invisible Half of Cinema
 */
import type { KnowledgeTopic } from '../../types'

export const filmCinemaCh04: KnowledgeTopic[] = [
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
