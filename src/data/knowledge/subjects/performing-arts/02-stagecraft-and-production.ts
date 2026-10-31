/**
 * Knowledge Universe — Performing Arts — Chapter 02: Stagecraft & Production
 * 2 lessons · ~2,807 words
 * field: Theater & Performance
 * legacy sources: arts-culture.ts, x42-arts-performing-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Stagecraft & Production, Stage & Performance]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 theater-stagecraft — Stagecraft: Sets, Lights, Sound and the Crew
 *   02.2 art-theater-stagecraft-space-blocking — Theater and Stagecraft: The Space, the Blocking, the Show
 */
import type { KnowledgeTopic } from '../../types'

export const performingArtsCh02: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'theater-stagecraft',
    title: 'Stagecraft: Sets, Lights, Sound and the Crew',
    domain: 'Arts & Culture',
    field: 'Theater & Performance',
    branch: 'Stagecraft & Production',
    tier: 'core',
    concepts: [
      'Stage geometries: proscenium, thrust, arena, black box',
      'Flats and platforms as the bones of scenery',
      'Lighting instruments, color and cue-based control',
      'Sound reinforcement and effects in the theater',
      'The production team from director to run crew',
      'Safety culture backstage',
    ],
    words: 1509,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Before an actor says a line, a hundred decisions have already shaped the room: where the audience sits, what the walls are made of, where the light can come from, who stands where to make it all happen on cue. Audiences experience this as atmosphere; crews experience it as systems. Stagecraft is the discipline of making places for stories out of lumber, cable, light and schedules — and of running those places safely, show after show. This Theater & Performance lesson covers the geometries of stages, the basics of scenery, lighting and sound practice, the people who run a production, and the safety culture underneath all of it.',
      },
      {
        kind: 'para',
        text: 'Theater is unusual among the arts in that its stage is rebuilt for every production, and the first design decision is always the room itself. Stage geometry fixes where the audience sits, where actors enter and exit, and what can be hidden from view; everything downstream inherits from it — the shape of the scenery, the angles available to light, even where loudspeakers can live. Choosing a configuration is therefore not a technical afterthought but a statement about the relationship the production wants between story and spectator.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Almost nothing on a stage is where it is by accident. Learning to read the geometry, the light plot and the crew structure turns theater from a mystery into a system you can join — and theater is one of the few arts that will happily hand a newcomer a wrench on day one.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Reading the Room: Four Geometries' },
      {
        kind: 'para',
        text: 'The proscenium stage is the picture frame: an arch separates a lit stage from a darkened house, wings at the sides and a fly loft above hide the machinery, and the audience watches a composed picture through the opening. It is the geometry of spectacle and illusion — everything that must not be seen is simply kept out of the frame. The thrust stage pushes a platform out into the house so the audience sits on three sides. This is the shape of the Elizabethan playhouse, and it trades illusion for presence: actors manage multiple sightlines, scenery must read from every angle, and no spectator is ever far from the action.',
      },
      {
        kind: 'para',
        text: 'The arena stage, or theater-in-the-round, surrounds the performers completely; entrances cut through the aisles, and with nowhere to hide, design shifts from scenery to floors, light and sound — a staged world made of nothing but bodies and atmosphere. The black box is the opposite commitment: a flexible empty room, reconfigured for each production — end-on this month, in-the-round the next, a narrow corridor the month after. It is the laboratory geometry of modern theater, cheap to rework and honest about its own machinery. Each geometry is a trade; none is an advance over another.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Brief: stage a four-actor conversational comedy with a small crew and budget. Read the script first for scale and traffic — many short scenes, one recurring room.',
          'Choose the thrust configuration for intimacy: in a talk-driven play, closeness beats spectacle.',
          'Design scenery as low, sculptural pieces that read from three sides; keep entrances at the corners where sightlines cross least.',
          'Plot light from steep frontal angles so faces stay lit from every seat, and brief performers never to stare down one side of the house.',
          'Place loudspeakers high and central so reinforced voices stay attached to the actors who speak them.',
          'Work the calendar backward from opening: build week, lighting hang and focus, cue writing, then technical rehearsals where the cues meet the actors.',
        ],
      },
      { kind: 'heading', text: 'Building, Lighting, Sounding — and Who Runs It' },
      {
        kind: 'para',
        text: 'Scenery construction starts with flats and platforms. A flat is a lightweight frame of vertical stiles and horizontal rails faced with thin plywood or stretched fabric; joined together and braced, flats become walls, and scenic paint turns them into marble, brick or mist. Platforms are framed decks raised on rated legs — the floors of stairs, porches and towers — and their load limits are engineering facts, not suggestions. Around the hard scenery hang soft goods: legs and borders that mask the wings and the fly loft, scrims that can veil or reveal, and the tall curved cyclorama whose blank surface catches colored light like a sky.',
      },
      {
        kind: 'para',
        text: 'Theatrical lighting is built from a short list of instruments. The ellipsoidal reflector spotlight throws a sharp, shutter-shaped pool for area light and pattern projection — templates called gobos carve leaves, windows or abstract texture out of the beam. The Fresnel softens edges into washes; PAR cans throw inexpensive punch; LED fixtures and moving lights, now standard, put color and motion under console control. Color comes from gel filters in front of conventional lamps, or from mixed emitters inside LEDs. Design lives in cues: recorded states of level, color and position, sequenced by a board operator on the stage manager\'s calls. Classic practice divides the stage into acting areas and crosses a warm and a cool direction over each, so that every seat sees a modeled, three-dimensional face.',
      },
      {
        kind: 'para',
        text: 'Sound in the theater does two jobs: reinforcement and storytelling. Reinforcement carries voices to the last row through body microphones, a mix position out front and loudspeakers placed to keep the sound attached to its source; storytelling covers effects and underscore, run from playback software and fired as cues exactly like lights. The aims are intelligibility and immersion, and the engineering chain behind them — microphones, mixing, processing, loudspeakers — is the province of the Library\'s Music Production lesson. What the stage adds is integration: a cue that arrives on the half-word, from the right place in the room, under the discipline of a cue light.',
      },
      {
        kind: 'para',
        text: 'The production team is a working hierarchy. The producer raises and guards resources. The director holds the unifying artistic voice and approves the designs. The designers — set, costumes, lighting, sound — translate concept into buildable, wearable, focusable plans. The technical director realizes the scenery on budget and safely, with a master electrician to hang and maintain the rig. At the center runs the stage manager: keeper of the prompt book, clock of the rehearsal room, and during performance the person who calls every cue — standby lights twelve, lights twelve, go — supported by assistants and the run crew who execute scenery changes in the dark. Weekly production meetings are where the departments discover their conflicts while those conflicts are still cheap to fix.',
      },
      {
        kind: 'para',
        text: 'Safety culture is the part of stagecraft that never appears in a review and decides whether there is a show. The working rules are concrete: hard hats under overhead rigging, gloves and closed shoes at load-in, rated capacities respected on platforms and rigging points, ladder discipline, flame-retardant treatment of scenery and soft goods, hearing protection near amplified systems, and an absolute rule against walking under a moving load. Stage combat gets a fight call before every performance; fly systems are operated only by trained hands. Most importantly, stop authority belongs to everyone — the newest intern may call a halt, and the culture that honors that call is the culture that keeps its crews.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Proscenium', def: 'The picture-frame stage: an arch separating a lit stage from a darkened, watching house.' },
          { term: 'Thrust', def: 'A stage projecting into the house so the audience surrounds the action on three sides.' },
          { term: 'Flat', def: 'A lightweight framed scenery panel, faced in plywood or fabric, joined with others to form walls.' },
          { term: 'Gel', def: 'A colored filter placed in front of a lighting instrument to change the color of its beam.' },
          { term: 'Cue', def: 'A recorded instruction — for lights, sound, scenery or performers — fired at a precise moment in the run.' },
          { term: 'Stage manager', def: 'The person who runs rehearsals, keeps the prompt book, and calls every cue in performance.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'para',
        text: 'These questions mirror real load-in conversations; answer before peeking at the explanations.',
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which geometry places the audience on all four sides of the action?',
            options: ['Proscenium', 'Thrust', 'Arena', 'Black box'],
            answer: 2,
            explain: 'Arena — theater-in-the-round — surrounds the performers; hiding places vanish and design shifts to floor, light and sound.',
          },
          {
            q: 'A flat is:',
            options: ['A missed cue', 'A lightweight framed panel used to build scenic walls', 'A colored lighting filter', 'The area beneath a trap door'],
            answer: 1,
            explain: 'Stiles, rails and a thin facing — flats are the basic unit of hard scenery, painted to become anything.',
          },
          {
            q: 'During a performance, the person who calls the cues is:',
            options: ['The director', 'The stage manager', 'The producer', 'The master electrician'],
            answer: 1,
            explain: 'The stage manager keeps the prompt book and issues the standby-and-go sequence that runs the show.',
          },
          {
            q: 'The lesson\'s non-negotiable backstage rule is:',
            options: ['Never speak in the wings', 'Anyone may call stop, and the call is honored', 'Only electricians may touch cable', 'Crew wear black at all times'],
            answer: 1,
            explain: 'Stop authority at every level — newest intern included — is the heart of theater safety culture.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Volunteer for one build day; a weekend of pushing flats and coiling cable teaches more than a chapter can. Follow the Library\'s acting and improvisation lessons for the people this machinery serves, and the Music Production lesson when the sound console starts calling to you.',
        tone: 'path',
      },
    ],
  },
  {
    id: "art-theater-stagecraft-space-blocking",
    title: "Theater and Stagecraft: The Space, the Blocking, the Show",
    domain: "Arts & Culture",
    field: "Theater & Performance",
    branch: "Stage & Performance",
    tier: "core",
    concepts: [
      "Four stage shapes, four contracts with the audience",
      "Stage geography: the nine playing areas",
      "Stage pictures: composition with living bodies",
      "Blocking: movement with motivation",
      "Focus, levels and sightlines",
      "The rehearsal arc from table work to tech week",
    ],
    words: 1298,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "A play is a story that lives in space: every night the actors rebuild it with their bodies, and the craft of arranging those bodies is stagecraft. This core Theater & Performance topic covers the shapes stages come in, the map of playing areas every director uses, the art of composing stage pictures, and the rehearsal process that carries a script from first read to opening night. Learn it and watching theater changes — you start reading the geometry of a scene the way photographers read a frame.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Staging is meaning made visible: who stands where, who moves, who holds still — audiences read power, intimacy and intention from geometry before a word lands. The same literacy sharpens presentations, classrooms and any room where people watch people.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Every stage is a contract about attention. The proscenium arch frames the action like a picture — the audience sits on one side, watching through an invisible fourth wall. A thrust stage pushes the playing space into the crowd on three sides; theater-in-the-round surrounds it, so no actor can face everyone at once and directors stage in constant rotation. The black box is a convertible room, its seating rebuilt for every show. Each shape changes sightlines, entrances, and how intimate a whisper can be.",
      },
      {
        kind: "para",
        text: "Directors and actors navigate by a grid of nine playing areas — downstage, center and upstage crossed with left, center and right — all named from the actor's point of view, so stage left is the audience's right. Up and down are fossils of the raked stages of earlier centuries, built sloping upward away from the audience so the back rows could see; upstage still reads as distant, private or powerful, downstage as intimate and public. The rule of strength: the farther down and center, the more an area dominates — down center is where confessions, coronations and punchlines go.",
      },
      {
        kind: "para",
        text: "Freeze any moment of a well-staged scene and it should compose like a photograph — bodies arranged on the same thirds and balance logic the photography lesson teaches, plus a dimension cameras lack: height. Levels are a director's first tool; a character on the stairs, one kneeling, one standing creates instant hierarchy and visual interest. Triangular arrangements feel stable and classical, diagonals feel dynamic, a straight line across the stage feels formal or trapped. A picture that muddles — three actors bunched stage right, dead space everywhere — reads as noise even when the text is brilliant.",
      },
      {
        kind: "para",
        text: "Blocking is the scored movement of a production: every cross, turn, sit and exit. Good blocking is motivated — a character moves because she wants something, not because the director feared stillness. Actors cheat out, angling slightly toward the audience even in conversation, so faces stay available. The eye follows motion: whoever moves owns the moment, which makes stillness a power move — a figure who freezes while others bustle draws every eye in the house. Distance between two bodies is a statement the audience measures without knowing it.",
      },
      {
        kind: "para",
        text: "A scene can only play as fast as the audience can see it. Directors check sightlines from the house's worst seats, refuse actors long upstage backs, and stage conversations in open shapes — a natural two-person chat becomes a shallow V so both faces read. Sharing and taking focus is choreography: when the point of a line belongs to the listener, the speaker gives — a step back, a dropped voice — and the receiver takes. Companies that skip this craft produce mumble-shaped blur at the back rows.",
      },
      {
        kind: "para",
        text: "A production matures through a predictable arc. Table work: the company reads, researches and agrees what the play is about. Blocking rehearsals set the score; working rehearsals deepen intent; runs stitch scenes into acts — then the cast goes off-book and discoveries get messy before they settle. Tech week adds lights, sound and scenery with painstaking cue-to-cue stops. Dress rehearsals simulate performance; previews let an audience teach the artists what they made. Opening night is not the finish line — it is the first night the show belongs to itself, and casts keep adjusting throughout a run.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: stage a two-person confrontation — a daughter demanding the truth from her father — on a proscenium stage, making the power shift legible.",
          "Recall the governing ideas: area strength increases toward down center; levels add hierarchy; movement must be motivated; the final picture is what the audience keeps.",
          "Apply: open with the father upstage right behind his desk, the strongest territory, and the daughter down left. As her questions land, block her slow advance upstage — ground gained is power gained — and let him sink into the chair at the turn. He confesses seated; she ends standing beside him, downstage of the desk, in the stronger plane.",
          "State the result: the geometry performs the argument — territory transfers from father to daughter without a stage direction saying so, and the closing picture reads from the last row.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "School and community directors stage readable scenes without professional budgets.",
          "Actors self-direct audition monologues: one motivated move beats five nervous ones.",
          "Public speakers arrange podium, screen and movement to hold a ballroom.",
          "Improvisers and workshop facilitators manage circles, chairs and focus in real time.",
          "Theatergoers read staging choices as authorship, not accident.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The classic sins: traffic-cop staging, where actors are moved for pictures alone and the scene smells of choreography; backs to the audience during crucial lines; upstaging — an actor drifting upstage of the speaker and stealing the frame, the practice the word was coined for; and park-and-bark blocking that plants bodies for whole scenes. Over-staging comedy is just as fatal: it needs clean pictures, but a punchline blocked away from the house dies unlaughed.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Proscenium", def: "The framed picture stage; the audience watches one side through the arch." },
          { term: "Thrust", def: "A stage surrounded on three sides, demanding rotating, out-facing staging." },
          { term: "Blocking", def: "The scored movement and positions of actors through a scene." },
          { term: "Stage left", def: "The actor's left when facing the audience — the house's right; always named from the stage." },
          { term: "Upstage", def: "The area farthest from the audience; reads as distant, private or powerful." },
          { term: "Stage picture", def: "The composed arrangement of bodies at any frozen moment; readable like a photograph." },
          { term: "Tech week", def: "The production period adding lights, sound and cues, just before performances." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Stage left is named from:",
            options: ["The audience's left-hand seats", "The actor's left when facing the audience", "The director's seat at stage right", "The leftmost aisle in the house"],
            answer: 1,
            explain: "Directions serve the performer: stage left is the actor's left facing the house, which the audience sees on its right.",
          },
          {
            q: "Downstage earned its name because:",
            options: ["It sits lower — a fossil of raked stages sloping toward the audience", "It delivers the downbeat of musical numbers", "It is the darkest area under stage lights", "Directors write stage maps from the top down"],
            answer: 0,
            explain: "Stages were raked upward away from the house so back rows could see, so the near, lower edge was literally down — and strongest.",
          },
          {
            q: "The strongest playing area on a proscenium stage is generally:",
            options: ["Upstage right", "Down center", "The wings", "Up center"],
            answer: 1,
            explain: "Proximity plus centrality give down center the most pull — the home of confessions, coronations and punchlines.",
          },
          {
            q: "In blocking, a motivated cross means the actor moves:",
            options: ["Exactly on the beat of the music", "Because the character wants something in that moment", "In a straight line only", "Only when another actor exits"],
            answer: 1,
            explain: "Movement tracks desire; unmotivated traffic reads as choreography and breaks the fiction.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "No prerequisites — you already own a body and a room. Natural next steps: the dance and opera lessons in this domain for movement and sung staging, then the cinematography lesson, whose frame logic mirrors the stage picture.",
        tone: "path",
      },
    ],
  },
]
