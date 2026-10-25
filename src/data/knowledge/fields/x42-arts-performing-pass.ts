import type { KnowledgeTopic } from '../types'

/**
 * Expansion pass X42 (2026-10-25): the Performing Arts pass
 * (ARTS-SPLIT-20261025-E). The arts-content audit found ZERO topics in
 * Theater & Performance and Dance; this pass seeds both fields with 5
 * lessons, ~1,400 words each:
 *
 *   1. theater-acting-craft (Acting & Performance, core) — objectives,
 *      actioning with verbs, obstacles, given circumstances, listening,
 *      voice/body/presence training, and the major craft traditions.
 *   2. theater-improv (Acting & Performance, core) — yes-and, offers and
 *      blocking, status play, ensemble trust, short-form vs long-form,
 *      applied improv, failure as fuel.
 *   3. theater-stagecraft (Stagecraft & Production, core) — stage
 *      geometries, flats and platforms, lighting instruments and cues,
 *      sound reinforcement, the production team, safety culture.
 *   4. dance-world-forms (Dance Forms & History, core) — ballet's
 *      codification, India's classical dances, folk and social dance,
 *      the modern rebellion, hip-hop and street styles, dance as
 *      cultural document.
 *   5. dance-choreography (Choreography & Composition, intermediate) —
 *      motif and development, space/time/dynamics, structures, from
 *      improvisation to set material, rehearsal craft.
 *
 *  DEDUP carve-outs (per worklog guardrails):
 *  - 'Rhythm and Meter: How Music Organizes Time' (Music) already owns
 *    meter, beats and grouping. The choreography lesson cross-references
 *    it for counting instead of re-teaching it.
 *  - 'Music Production' (music-production-daw) already owns the mixing
 *    chain. The stagecraft lesson references it for sound engineering
 *    and covers only theatrical deployment and cue integration.
 */

export const x42ArtsPerformingPassTopics: KnowledgeTopic[] = [
    // ------------------------------------------------------------------
    {
      id: 'theater-acting-craft',
      title: 'Acting: Objectives, Obstacles and Presence',
      domain: 'Arts & Culture',
      field: 'Theater & Performance',
      branch: 'Acting & Performance',
      tier: 'core',
      concepts: [
        'Playing an objective the character wants right now',
        'Actioning lines with playable transitive verbs',
        'The obstacle as the engine of drama',
        'Given circumstances frame the imaginary world',
        'Listening and responding truthfully on stage',
        'Voice, body and presence training',
      ],
      words: 1556,
      readMins: 8,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Acting looks effortless from the third row, which is exactly why the craft behind it is so often misunderstood. Good acting is not the display of feeling; it is the pursuit of a goal under pressure, inside imaginary circumstances the actor must make real enough to live in. This Theater & Performance lesson covers the working vocabulary of the craft — objectives, actions, obstacles and given circumstances — together with the listening skills, the vocal and physical training, and the major traditions that shape how an actor approaches a role.',
        },
        {
          kind: 'para',
          text: 'A useful way into any scene is to notice that something is wrong and someone is trying to fix it. The character wants something now, from the other person on stage, and something stands in the way. The actor\'s task is not to demonstrate wanting but to actually do something about it, moment by moment, adjusting whenever the other person responds. Nearly every acting tradition of the past century, whatever else it emphasizes, circles back to this small engine: want, obstacle, attempt. What separates the traditions is how they train the actor to stay truthful inside that engine.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'The actor\'s instrument is the actor\'s own body, voice and attention, so craft training compounds into everything else a person does. Playing an objective instead of indicating an emotion improves auditions and rehearsals, yes — but it also sharpens public speaking, teaching, negotiating, and any conversation that rewards genuine responsiveness.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Playing an Action' },
        {
          kind: 'para',
          text: 'An objective is what the character wants right now, phrased so the actor can pursue it: not \'to be sad\' but \'to make my father finally listen\'. The test of a well-phrased objective is that it points at another person, that it can be attempted within the scene, and that success or failure is visible. When the objective is playable in this way, emotion stops being something the actor fakes and becomes a consequence of pursuing — and losing — the want. Audiences consistently read intention more clearly than they read manufactured feeling.',
        },
        {
          kind: 'para',
          text: 'Actioning is the practice of breaking a scene into beats and attaching a transitive verb to each one: to threaten, to coax, to confess, to plead, to wound, to charm. Verbs are actable in a way adjectives never are. You can do something to someone with \'to ridicule\'; you can do nothing at all with \'to be bitter\'. Verbs also keep the actor\'s attention on the partner rather than on self-display, and they survive the moment when the director changes the blocking, the scene partner changes the rhythm, or the line gets cut in rehearsal. The verb is the portable unit of acting.',
        },
        {
          kind: 'para',
          text: 'The obstacle is whatever resists the objective, and it is the engine of drama. Remove the obstacle and the character simply gets what they want; the scene is over in a line. The resistance may be the other character\'s opposing objective, the pressure of circumstances, the clock, or the character\'s own fear — and usually it is several of these at once. Difficulty forces choice, choice reveals character, and the collision of two opposing objectives is what an audience experiences as conflict. When a scene feels flat, the classic diagnosis is not that the actors lack feeling but that nobody is really opposed.',
        },
        {
          kind: 'para',
          text: 'Given circumstances are the facts of the play\'s world: where and when we are, who is related to whom, what has just happened, what the rules of this society are. The actor invents nothing that contradicts the facts but fills the gaps with specific, personal detail — the temperature of the room, the history behind a handshake, why this particular door matters. Konstantin Stanislavski, whose system organized this vocabulary a century ago, paired the circumstances with the famous magic if: given this world, what would I do? Specificity is the difference between imagining a situation and being caught inside one.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Take a beat from a family play: a grown daughter has just told her widowed father that she is moving abroad, and he has gone silent.',
            'Harvest the given circumstances from the script: only child, small town, mother gone two years, a job offer already accepted, a train leaving this evening.',
            'Phrase the daughter\'s objective in playable terms — not \'to be brave\' but \'to make him bless the move before the train leaves\'.',
            'Action the lines with transitive verbs: to reassure, to remind him of her mother\'s hopes, to dare him to argue, to apologize for the timing.',
            'Locate the obstacle: his silence is itself a counter-objective — to keep her here — and it must be strong enough to genuinely resist her.',
            'Play it live: listen to each actual response and let the verbs change when he finally speaks; the scene\'s ending belongs to that exchange, not to a plan made in advance.',
          ],
        },
        { kind: 'heading', text: 'Listening, Voice and the Traditions' },
        {
          kind: 'para',
          text: 'Acting is reacting, and reacting begins with listening. The cheapest imitation of listening is waiting: holding a relaxed face while silently reciting the next line. The real thing changes you — a phrase lands differently because of how it was said, and your answer comes out different in turn. Sanford Meisner, the American teacher whose exercises still anchor much actor training, built an entire drill around this: two actors repeat a simple observation back and forth — you are smiling at me, I am smiling at you — allowing tone, timing and impulse to shift the meaning until something true and unscripted happens between them. The exercise is not about the words; it is a gym for responsiveness.',
        },
        {
          kind: 'para',
          text: 'The major traditions are best understood as complementary approaches rather than competing teams. Stanislavski\'s system, developed through decades of teaching and writing at the Moscow Art Theatre, organized the actor\'s work around objectives, circumstances and the coordination of psyche and body, and it seeded nearly all Western training that followed. Meisner pushed toward instinctive, partner-driven behavior. Other lineages emphasize script analysis and the actor\'s imagination; others again, guided physical action and psychological gesture. Physical theater — from Jacques Lecoq\'s movement pedagogy to mask work, clowning, ensemble devised work and Viewpoints composition — starts from the body, space and rhythm rather than psychology, and demonstrates that meaning can be carried by architecture and tempo alone. Working actors borrow across all of these; the craft is larger than any school.',
        },
        {
          kind: 'para',
          text: 'Voice and body training keeps the instrument available. Voice work begins with breath — supported low, released freely — and continues through resonance, range and articulation; the classic handbooks by Cicely Berry, Kristin Linklater and Patsy Rodenburg remain standards in drama programs. Body work builds alignment, flexibility and strength so that a character\'s physical life can be chosen rather than defaulted to. Presence, finally, is mostly a matter of attention: an actor genuinely occupied with the partner and the problem reads as magnetic, while an actor occupied with self reads as vacant, however loud the performance. A disciplined warm-up — breath, sound, spine, stretch, and a minute of quiet focus before the entrance — is the professional routine that makes presence repeatable eight shows a week.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Objective', def: 'What the character wants right now, from a specific person, phrased so it can be attempted and failed.' },
            { term: 'Actioning', def: 'Choosing a transitive verb for each beat or line, so the actor does something to the partner instead of displaying a state.' },
            { term: 'Obstacle', def: 'The force that resists the objective — another person, the circumstances, the clock, or the self.' },
            { term: 'Given circumstances', def: 'The complete set of facts about the play\'s world that the script supplies and the actor must honor.' },
            { term: 'Repetition exercise', def: 'Meisner\'s partner drill: repeating an observation back and forth until honest impulse overrides the words.' },
            { term: 'Presence', def: 'The outward-directed, absorbed attention that makes an actor watchable before a word is spoken.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Work through these without looking back; each explanation names the idea it tests.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'A well-phrased objective is best described as:',
              options: ['A feeling the character should display for the audience', 'Something the character wants now, from someone, and can genuinely attempt', 'A summary of the play\'s plot', 'A physical position held on stage'],
              answer: 1,
              explain: 'Playable objectives point at a person and can be attempted — which is what lets emotion follow rather than lead.',
            },
            {
              q: 'Actioning a line means selecting:',
              options: ['The emotion behind the words', 'Where to stand while saying it', 'A transitive verb — something to do to the other person', 'The historical period of the play'],
              answer: 2,
              explain: 'Verbs are doable and partner-directed; adjectives like bitter name states, not actions.',
            },
            {
              q: 'If a scene feels flat, the classic diagnosis given here is:',
              options: ['The actors lack talent', 'Nobody in the scene is genuinely opposed — the obstacle is missing', 'The lighting is wrong', 'The play is too old for modern audiences'],
              answer: 1,
              explain: 'Without resistance there is no struggle to watch; conflict is the collision of opposing objectives.',
            },
            {
              q: 'Meisner\'s repetition exercise chiefly trains:',
              options: ['Memorization under pressure', 'Vocal projection to the back row', 'Genuine listening and impulse-driven response', 'Choreographed stage movement'],
              answer: 2,
              explain: 'The words are deliberately trivial so that tone, timing and truthful reaction become the content.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Practice with a partner: take any two-line exchange and action it five different ways, watching how the scene changes. The Library\'s improvisation lesson builds the same listening muscle at speed, the stagecraft lesson explains the room you will perform in, and the dance lessons show how movement itself becomes codified vocabulary.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'theater-improv',
      title: 'Improvisation: Yes-And and the Ensemble',
      domain: 'Arts & Culture',
      field: 'Theater & Performance',
      branch: 'Acting & Performance',
      tier: 'core',
      concepts: [
        'Yes-and: accept the offer, then add to it',
        'Blocking as the number-one scene killer',
        'Status play through body and tone',
        'Ensemble trust and making partners look good',
        'Short-form games versus long-form formats',
        'Applied improv beyond comedy — and failure as fuel',
      ],
      words: 1482,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Improvisation is theater made in the moment: no script, no rehearsal, a suggestion from the audience, and off you go. To a spectator it can look like magic; to a practitioner it is a set of trainable skills — acceptance, attention, generosity and narrative instinct — drilled until they fire at conversational speed. This Theater & Performance lesson covers the grammar of improvised scene work: the yes-and principle, offers and blocking, status play, ensemble trust, the two great formats, and the surprising usefulness of improv far from any comedy club.',
        },
        {
          kind: 'para',
          text: 'The core insight reverses the habits of ordinary conversation. In daily life people correct, deflect and compete for the floor; on the improv stage the winning move is to accept whatever your partner offers and build on it. That single discipline, practiced under pressure, produces collaboration fluid enough that two strangers can create a coherent world in ninety seconds. It also explains why improv training has spread into offices, classrooms and hospitals: the skills are social skills, sharpened until they become reflexes.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Yes-and is a transferable technology for collaboration. Any group that must generate ideas without killing them prematurely — designers, engineers, teachers, clinicians — can borrow the improv rulebook: accept, add, make your partner look good, and treat mistakes as raw material rather than disasters.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'The Grammar of the Scene' },
        {
          kind: 'para',
          text: 'An offer is anything that establishes reality: a line of dialogue, a gesture, a mimed object, a relationship implied by a tone of voice. The first skill of improv is noticing offers — most failed scenes die not from bad ideas but from unheard ones. Accepting means behaving as if the offer were true and then using it: if your partner squints into the distance and says the lighthouse has gone dark, you look at the lighthouse, not at your shoes. Skilled improvisers treat every detail as a gift, and spend their attention answering the question the scene is silently asking: where are we, and what is about to happen?',
        },
        {
          kind: 'para',
          text: 'Yes-and has two halves, and both must arrive. The yes is not literal agreement with content — you may hate that the lighthouse went dark — but acceptance of the offered reality. The and is the contribution: your partner establishes a dark lighthouse, you add that the supply boat comes tonight and the keeper has not slept in two days. Denying, ignoring or contradicting an offer is called blocking, and it is the most reliable way to kill a scene: each block collapses the world the pair was building, forcing them to start over from nothing. A waffle — yes, but — is only blocking wearing a polite mask. An old Chicago teaching metaphor says it plainly: don\'t bring a cabin, bring a plank, and trust the house to get built.',
        },
        {
          kind: 'para',
          text: 'The British-Canadian teacher Keith Johnstone, whose writings reshaped modern improv, observed that scenes often run on status transactions — moment-to-moment shifts in relative rank expressed through the body. Held eye contact, stillness, unhurried speech and taking up space read high; dropped gaze, fidgeting, apologetic exits and self-touching read low. Skilled players choose and adjust status deliberately: a waiter who slowly rises over a scene while a tycoon crumbles is playing a status arc, and an audience will find it magnetic or hilarious with no plot at all. Status work also explains why some two-person scenes crackle — the players are trading rank like a rally in tennis.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'A scene opens: one player mimes stirring a pot and says, \'Nearly ready, Captain.\' Read the offer — a kitchen, a rank, an occasion.',
            'Accept and add rather than question: \'Thank you. The crew hasn\'t eaten since we lost the compass\' accepts the ship and adds a predicament.',
            'Advance by stating the next fact instead of asking open questions, which quietly offload the work of invention onto your partner.',
            'Watch status: let the Captain drop rank by admitting fear — a lowered-status confession from authority is a gift the scene can build on.',
            'Find the game — the pattern worth repeating — and play it a third time to confirm it; then let the pattern break to give the scene its ending.',
          ],
        },
        { kind: 'heading', text: 'Ensemble, Formats and Failure' },
        {
          kind: 'para',
          text: 'Improv of any sustained quality rests on trust: physical trust, because games and lifts put bodies in one another\'s hands, and creative trust, because the rules only work if everyone believes the scene matters more than personal credit. Ensembles drill together for months, and their warm-ups are as much about group attunement as readiness — passing claps around a circle until the circle behaves like a single nervous system. The governing maxim is to make your partner look good: any player can win any moment by sacrificing for the scene, and an ensemble that internalizes this stops performing next to each other and starts performing with each other.',
        },
        {
          kind: 'para',
          text: 'The two great formats differ in architecture. Short-form is a set of discrete games with built-in rules and time limits — guessing quirks, rhyming games, retelling a story in ever fewer words — built for variety bills and television, where the format itself supplies the fun. Long-form takes a single suggestion and spins it into an extended, interwoven piece of twenty to forty-five minutes; the best-known structure, the Harold, developed in Chicago in the 1980s, alternates scenes and group games across recurring beats so that characters and ideas return transformed. Other long-form shapes hold a single location for the whole show, or hang scenes off one performer\'s monologues. The skills are shared; only the container changes.',
        },
        {
          kind: 'para',
          text: 'Improv beyond comedy is now a field of its own. Applied improv uses the same exercises — paired yes-and, status walks, storytelling circles — to train listening, collaboration and confidence in workplaces, schools and care settings, and facilitators adapt the form for everything from language learning to communication coaching. The premise is straightforward: if acceptance, attention and generosity can be rehearsed in a scene, they can be rehearsed anywhere, and a room that laughs together tends to risk more together. Improv also teaches a healthier relationship with error than most professional cultures manage, which is the subject of the last section.',
        },
        {
          kind: 'para',
          text: 'Failure as fuel is improv\'s deepest habit. Players are trained to celebrate their own flops openly — a bow, a grin, a mock toast — so the cost of risk stays low and the supply of attempts stays high. The audience forgives almost anything except timidity: a bold choice that dies gets applause, while a safe choice that merely works gets nothing. The advice attributed to the Chicago teacher Del Close, to dare to be dull, makes the same point from the other side — reaching for brilliance is the surest way to freeze, while playing simply and truthfully is how scenes catch fire. Rehearsed risk-taking, in the end, is the transferable curriculum.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Offer', def: 'Any detail — spoken, physical or implied — that establishes something about the reality of the scene.' },
            { term: 'Yes-and', def: 'The paired discipline of accepting a partner\'s offered reality and contributing a new detail to it.' },
            { term: 'Blocking', def: 'Denying, ignoring or contradicting an offer, collapsing the shared reality a scene needs to survive.' },
            { term: 'Status', def: 'Relative rank played moment to moment through eye contact, stillness, use of space and tone.' },
            { term: 'Short-form', def: 'Discrete improv games with built-in rules and time limits, built for variety shows and television.' },
            { term: 'Long-form', def: 'Extended improvisation, often twenty to forty-five minutes, weaving a single suggestion into recurring beats.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Answer from memory first; each explanation cites the section that settles it.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Blocking a scene means:',
              options: ['Adding a second character', 'Denying, ignoring or contradicting an offer already made', 'Standing where the audience cannot see you', 'Choosing a high-status posture'],
              answer: 1,
              explain: 'Blocks collapse the shared reality, forcing the scene to rebuild from nothing — which is why they kill momentum.',
            },
            {
              q: 'The two halves of yes-and are:',
              options: ['Agreeing with the content and speaking louder', 'Accepting the offered reality, then contributing a new detail', 'Asking questions and answering them', 'Planning the scene, then executing the plan'],
              answer: 1,
              explain: 'Yes validates the partner\'s reality; and hands back something playable in return.',
            },
            {
              q: 'Johnstone\'s status work argues that scenes gain texture from:',
              options: ['The players\' real-world reputations', 'Played shifts in relative rank, expressed in body and tone', 'Costume and prop changes', 'Audience suggestions'],
              answer: 1,
              explain: 'Rank traded like a rally charges scenes with no plot machinery at all.',
            },
            {
              q: 'Short-form and long-form improv differ chiefly in:',
              options: ['Whether comedy is permitted', 'Country of origin', 'Architecture: discrete timed games versus extended interwoven pieces', 'Whether the audience supplies suggestions'],
              answer: 2,
              explain: 'Both formats can be funny or serious; the difference is the container, not the content.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Run one two-minute scene tonight under the plank rule: every line must accept and add. The acting lesson gives improvised scenes a spine through objectives; stagecraft explains the rooms improv moves into; and the Library\'s lesson on rhythm and meter explains the musical timing your instincts are already tracking.',
          tone: 'path',
        },
      ],
    },
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
    // ------------------------------------------------------------------
    {
      id: 'dance-world-forms',
      title: 'World Dance Forms: Classical, Folk and Street',
      domain: 'Arts & Culture',
      field: 'Dance',
      branch: 'Dance Forms & History',
      tier: 'core',
      concepts: [
        'Ballet: codified vocabulary and royal origins',
        'India\'s classical dances: footwork, mudras, expression',
        'Folk and social dance as community glue',
        'The modern and contemporary rebellion',
        'Hip-hop, street styles and the battle culture',
        'Reading dance as a cultural document',
      ],
      words: 1435,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Dance is the art humanity practiced first and codified longest. Before writing, groups moved together — in lines for war and harvest, in circles for worship and weddings — and the way a people moves still records what it values: hierarchy or community, courtship or combat, devotion or defiance. This Dance lesson tours the world\'s major dance families — the classical forms, folk and social dance, the modern rebellion, and the street styles — and reads each as a document written by the culture that made it.',
        },
        {
          kind: 'para',
          text: 'One thread runs through the whole tour: codification. Some traditions freeze their vocabulary into named, teachable units — ballet\'s French terms, the gesture languages of India\'s classical dances — which buys precision and centuries of transmission. Others keep a loose grammar and prize the individual voice inside it, as the freestyle street forms do. Neither path is more rigorous; they simply spend rigor differently, and both produce dancers whose training visibly shapes the body. Watching for that training is the fastest way to start reading any dance you meet.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Dance history is a record of power, belief and resistance written in the one archive everyone carries: the moving body. Knowing the families of dance turns a performance into a primary source, and explains why communities fight to keep their dances alive.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Classical Codification: Ballet and India\'s Classical Dances' },
        {
          kind: 'para',
          text: 'Ballet is the textbook case of codification. It took shape at the French court — Louis XIV, a dancing king, chartered a royal academy of dance in 1661 — and its vocabulary is still French everywhere it is practiced: plié, tendu, arabesque, pirouette, pas de deux. The training builds a vertical, turned-out, gravity-defying body. The Romantic era of the nineteenth century added pointe work and the cult of the sylph; the Russian imperial stage produced the full-evening story ballets, with choreography by Marius Petipa set to Tchaikovsky\'s scores, that remain repertory staples today. In the twentieth century the Ballets Russes shattered the academic style and exported its experiments, and George Balanchine\'s neoclassicism in America stripped away story in favor of speed, geometry and music made visible. A major company today performs all these layers at once.',
        },
        {
          kind: 'para',
          text: 'India\'s classical dances are a family of recognized forms — among them Bharatanatyam, Kathak, Kathakali, Odissi, Kuchipudi, Manipuri, Mohiniyattam and Sattriya — each rooted in a region, yet sharing principles recorded centuries ago in the Natya Shastra, the ancient Sanskrit treatise on drama, music and dance. The shared frame distinguishes pure dance, rhythmic footwork and pattern pursued for their own beauty, from expressive dance, where meaning travels through gesture and face. Mudras are the codified hand gestures: a vocabulary of single- and double-hand signs that can name a river, a flower, an emotion or a deity. Footwork is percussion — Kathak\'s intricate heel-and-toe patterns ring out through ankle bells against rhythmic cycles — while abhinaya, the disciplined art of facial expression, lets a solo dancer narrate an epic without a word. These forms are taught today both in traditional lineages and in university departments.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Pick any dance you can watch twice — a stage excerpt, a wedding clip, a battle video — and give it one honest pass purely as a spectator.',
            'Ask who dances and where: temple courtyard, village square, club floor, competition stage. Setting predicts a great deal of the form.',
            'Ask what the body values: lifted verticality and display, grounded weight and rhythm, isolation and speed, or release and flow.',
            'Identify the vocabulary: named codified steps, gestures with fixed meanings, or freestyle inside a shared grammar.',
            'Find the function: worship, courtship, community bonding, competition, resistance — dances form where people need them.',
            'State your reading in one sentence — what this dance preserves about the people who made it — then check it against the history.',
          ],
        },
        { kind: 'heading', text: 'Folk, Modern and Street' },
        {
          kind: 'para',
          text: 'Folk and social dance are community glue. The village chains and circles of the Balkans and the British Isles, the celebratory rounds of Jewish and Greek weddings, the longways sets of American square dances — these are dances built so that everyone can join, with steps simple enough to teach in one evening and patterns forgiving enough to absorb a stranger. Couple dances, from the waltz that scandalized the nineteenth century to the tango of Buenos Aires, chart the changing rules of intimacy in public. The function is the point: the event — harvest, wedding, coming of age — matters more than any individual performance, and the dance outlives its dancers precisely because the group, not the soloist, is the unit of memory.',
        },
        {
          kind: 'para',
          text: 'Modern dance began as a rebellion against ballet\'s corsetry and plots. Isadora Duncan danced barefoot to argue for movement as natural expression; Martha Graham built an entire technique on contraction and release — the breath made visible in the torso; Doris Humphrey organized choreography around falling and recovering; Merce Cunningham freed dance from musical meter and embraced chance procedures in composing. Their heirs in contemporary dance mix release-based training, contact improvisation and cross-disciplinary experiment so freely that the labels blur. What survives from the rebellion is the founding permission: form follows the idea, and any movement can belong to dance if the choreographer can make it mean.',
        },
        {
          kind: 'para',
          text: 'Hip-hop and the street styles grew from the block parties of the 1970s Bronx, where the elements traveled together — the DJ, the MC, the dancer, the writer. Breaking built its grammar of toprock, floorwork, power moves and freezes; locking and popping came out of California; house dance rose in the clubs of Chicago and New York; krump emerged from Los Angeles; vogue from the Harlem ballroom scene. The cypher and the battle are the organizing frames — competition by display, respect earned inside the circle — and crews supply identity and training. Street forms have since crossed to global stages and screens, with breaking even reaching the Olympic Games in 2024, while the communities that made them keep the local practices, and the arguments about their roots, very much alive.',
        },
        {
          kind: 'para',
          text: 'Read as documents, dances carry history where paper could not. Capoeira, developed among enslaved Africans in Brazil, disguised combat training as a game of dance to music. Hula carried Hawaiian genealogy and story through chant and gesture through decades of suppression. Gumboot dance turned the boots and chains of South African mine labor into rhythm and coded communication. The Māori haka issues challenge and grief in the same stance. Where language was banned or unwritten, the body remembered — which is why reviving a dance is so often an act of cultural repair, and why borrowing one without its context is a matter communities take seriously.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Codification', def: 'Fixing a dance vocabulary into named, teachable units that can travel across generations.' },
            { term: 'Pointe work', def: 'Dancing on the tips of fully extended feet, developed in the Romantic ballet era.' },
            { term: 'Mudra', def: 'A codified hand gesture in Indian classical dance, carrying a fixed meaning.' },
            { term: 'Social dance', def: 'Participatory dance whose purpose is the event and the group rather than display.' },
            { term: 'Contraction and release', def: 'Martha Graham\'s core technique: the torso\'s breath-driven fold and unfold, made visible.' },
            { term: 'Breaking', def: 'The hip-hop dance form of toprock, floorwork, power moves and freezes, born in the 1970s Bronx.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Each question draws on one section of the tour; answer before scrolling back.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Ballet\'s vocabulary was codified principally at:',
              options: ['The 1970s Bronx party scene', 'The French court, where a dancing king chartered an academy in 1661', 'The Soviet ballet schools', 'Renaissance Florence alone'],
              answer: 1,
              explain: 'Louis XIV\'s royal academy fixed the French terms the world still uses in the studio.',
            },
            {
              q: 'A mudra is:',
              options: ['A rhythmic footwork cycle', 'A codified hand gesture with a fixed meaning', 'An ankle bell', 'A battle formation'],
              answer: 1,
              explain: 'Mudras are the gesture vocabulary through which Indian classical dancers speak.',
            },
            {
              q: 'The modern dance pioneers are best described as:',
              options: ['Perfecters of pointe technique', 'Rebels against ballet\'s formalities, seeking freer and more personal movement', 'Exporters of folk dance to royal courts', 'The inventors of couple dancing'],
              answer: 1,
              explain: 'From Duncan\'s barefoot naturalism to Graham\'s contraction, modern dance was a break, not a refinement.',
            },
            {
              q: 'Which thread runs through capoeira, hula and gumboot dance?',
              options: ['All are Olympic sports', 'All encode history in the body where writing was barred or absent', 'All began as court entertainment', 'All use pointe shoes'],
              answer: 1,
              explain: 'Each preserved memory — combat, genealogy, labor codes — in movement when documents could not.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Watch one classical excerpt and one street battle back to back, and describe the training each body shows. The Library\'s choreography lesson explains how such vocabularies are composed into pieces, and the lesson on rhythm and meter unpacks what every dancer counts.',
          tone: 'path',
        },
      ],
    },
    // ------------------------------------------------------------------
    {
      id: 'dance-choreography',
      title: 'Choreography: Composing Movement in Space and Time',
      domain: 'Arts & Culture',
      field: 'Dance',
      branch: 'Choreography & Composition',
      tier: 'intermediate',
      concepts: [
        'Motif and development as the composer\'s method',
        'Space: levels, pathways and formations',
        'Time: tempo, duration and rhythmic play',
        'Dynamics: energy, weight and flow',
        'Structural shapes from ABA to narrative',
        'From improvisation to set material — and the rehearsal craft',
      ],
      words: 1480,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'A choreographer does with movement what a composer does with sound: decides what moves, where, when and with what force, so that an audience feels form without ever seeing a blueprint. A dance is built from three raw materials — space, time and dynamics — organized through motif and development into a structure that can hold attention for three minutes or a full evening. This Dance lesson covers those elements, the standard structural shapes, the passage from improvisation to set material, and the rehearsal craft of refining work with the dancers in the room.',
        },
        {
          kind: 'para',
          text: 'The word choreography literally means dance-writing, and the metaphor is exact. Phrases behave like sentences; a motif behaves like a theme; a finished piece behaves like a score in which repetition itself is meaning. The discipline is therefore double. First, invent material worth repeating — movement specific enough to be recognized when it returns. Second, organize repetition so that it deepens rather than dulls — change one thing, keep the rest, and the audience leans in. Composition, applied to bodies in a room, is still composition.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Choreographic thinking — generate, vary, arrange, edit — is general creative training. The same tools that turn four counts of movement into a three-minute trio turn a sketch into a painting or an idea into an essay, which is why choreography rewards study by makers of every kind.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Motif and the Elements' },
        {
          kind: 'para',
          text: 'A motif is a short, memorable movement phrase — the seed of the piece. Development is the set of operations that grow the seed. Repetition confirms it. Retrograde runs it backward from its final position to its first. Inversion turns it upside-down or mirrors it. Augmentation stretches it bigger and slower; diminution compresses it. Fragmentation isolates one cell and recombines the pieces. Orchestration assigns the motif to different bodies — layered in unison, offset in canon, spread across levels. Development is how four seconds of movement becomes four minutes of dance without exhausting the viewer: the material is recognized on its return, and recognition is the pleasure.',
        },
        {
          kind: 'para',
          text: 'Space is the first element. Levels divide the vertical world into high, middle and low — jumping, standing, floor. Pathways carve the floor — straight, zigzag, curved, diagonal — and the same phrase reads differently on each of them. Formations redistribute mass and attention: a line focuses forward, a circle encloses, a wedge advances, a scatter dissolves. The stage itself is a grammar, its areas named from the raked stages of the past, when the back of the stage literally rose — which is why moving toward the audience is still called downstage. Facings — where the bodies point — and the negative space between them count for as much as any step.',
        },
        {
          kind: 'para',
          text: 'Time is the second element: tempo, duration, rhythm and meter. Dancers count phrases — very often in eights — against the music\'s meter, and the Library\'s lesson on rhythm and meter explains that machinery of beats and grouping, so this lesson sticks to deploying it. Canons offset a phrase in time so bodies overlap like echoes. Stillness becomes a durational choice with real tension. Acceleration accumulates toward a climax, and much contemporary work ignores the count entirely, timing by breath and task instead. What matters is that time is composed, not merely obeyed: the choreographer chooses the relationship to the clock, whether metronomic or weather-like.',
        },
        {
          kind: 'para',
          text: 'Dynamics is the third element: energy, weight and flow. The classic movement qualities — sustained, percussive, swinging, vibratory, suspending, collapsing — describe how force is released over time. Laban\'s effort analysis systematizes the same territory: weight strong or light, time sudden or sustained, space direct or indirect, flow bound or free. Dynamics is why two dancers can perform identical steps and produce utterly different dances: the geometry matches, but the force signature does not. Assigning dynamics deliberately — this section floats, this one stabs — is often the moment a sequence of steps becomes choreography.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Seed: invent a four-count motif with a clear shape — a spiral descent ending in a bound reach, say — simple enough to recognize on second viewing.',
            'List the developments: retrograde the whole phrase, invert the spiral so it ascends, augment the reach, fragment the descent into three stops.',
            'Map the elements: give the motif high and low levels, first a diagonal pathway then a circular one; mark the dynamics percussive at first appearance, sustained at the return.',
            'Structure: choose ABA — A states the motif in unison, B contrasts with new or inverted material, A returns transformed, perhaps in canon.',
            'Compose the transitions so energy carries across the joints — a lift out of the floor can hand the audience from B back to A without a seam.',
            'Rehearse and cut: teach, clean, then ruthlessly remove whatever does not read from twenty rows back; the back row is the final editor.',
          ],
        },
        { kind: 'heading', text: 'Structure, Setting and Rehearsal' },
        {
          kind: 'para',
          text: 'Structural shapes are the audience\'s subconscious map. ABA — statement, departure, return — is the workhorse of the repertoire. Rondo alternates a recurring section with fresh ones. Theme and variations keeps a recognizable phrase and re-dresses it each time. Narrative structure — setup, complication, resolution — organizes evening-length story ballets and contemporary dance-theater alike, while abstract organization runs on contrast, accumulation and climax with no plot at all. Chance procedures and task-based scores generate other logics entirely. Choose the structure early, because it decides what the ending means: in ABA the return is a homecoming; in a rondo it is a refrain the audience greets like an old friend.',
        },
        {
          kind: 'para',
          text: 'Most contemporary choreography passes through improvisation. The choreographer — often together with the dancers — improvises under structured constraints: tasks, images, scores, restrictions such as one body part leading the travel. The material is captured on video, reviewed, selected, and then fixed by repetition until it is exactly reproducible; that fixed repertoire is called set material. Some works keep windows of structured improvisation inside the set frame, trusting the performers to make real-time decisions inside agreed rules. The editing eye matters as much as the generating one: choreography is curation of one\'s own movement, and the cutting-room floor is where most pieces are actually made.',
        },
        {
          kind: 'para',
          text: 'Rehearsal is a craft of its own. Teaching material means demonstrating it full-out, marking it small for spacing, and naming counts so the whole room shares one clock. Cleaning means naming the problem precisely — the arm arrives before the weight shift beats another vague run-through — because vague notes produce vague fixes. Rotate the session\'s focus: detail days, run days, stamina days, video-review days. Spacing and technical rehearsals then move the work from studio to stage, adapting to sightlines, light and the sudden absence of mirrors. Partnering progresses in stages for safety — spotting, progressive loading, mats — and the register of the room is part of the craft: many contemporary processes credit dancers as co-creators, so clarity, consent and care are choreographic tools, not courtesies.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Motif', def: 'A short movement phrase treated as the seed of a piece, recognized each time it returns.' },
            { term: 'Retrograde', def: 'Performing a phrase backward, from its final position to its first.' },
            { term: 'Canon', def: 'Offsetting a phrase in time so dancers perform it in overlapping succession, like a round in music.' },
            { term: 'ABA form', def: 'Ternary structure: statement, contrasting departure, and a return — often transformed — of the opening.' },
            { term: 'Pathway', def: 'The trace a movement carves on the floor: straight, curved, zigzag or diagonal.' },
            { term: 'Marking', def: 'Performing material at reduced size and energy to map spacing and counts without full effort.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Answer these before revisiting the sections; each explanation names the idea it tests.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Retrograding a phrase means:',
              options: ['Repeating it more loudly', 'Performing it backward from its last position to its first', 'Slowing it down', 'Doubling the number of dancers'],
              answer: 1,
              explain: 'Retrograde reverses the order of the phrase itself — one of the basic development operations.',
            },
            {
              q: 'Which is NOT one of the three raw elements named in the lesson?',
              options: ['Space', 'Time', 'Dynamics', 'Costume'],
              answer: 3,
              explain: 'Space, time and dynamics are the materials; costume is designed around them, not one of them.',
            },
            {
              q: 'In ABA form, the final A section is:',
              options: ['An entirely new section', 'A return — often transformed — of the opening material', 'The climax by definition', 'The intermission'],
              answer: 1,
              explain: 'The return is what makes the form meaningful; audiences feel the homecoming even when the material has changed.',
            },
            {
              q: 'Marking is:',
              options: ['Writing a movement score', 'Performing at reduced energy and size while mapping spacing and counts', 'Fixing material permanently', 'Improvising without rules'],
              answer: 1,
              explain: 'Marking lets the room rehearse traffic and timing without paying the full physical cost.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Take one everyday gesture — closing a door, checking a phone — and develop it three ways tonight. The Library\'s world dance forms lesson supplies vocabularies worth borrowing, the lesson on rhythm and meter deepens the counting, and any piece you can watch twice becomes a textbook the moment you ask what changed.',
          tone: 'path',
        },
      ],
    },
]
