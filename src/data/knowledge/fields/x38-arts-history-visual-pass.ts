import type { KnowledgeTopic } from '../types'

/**
 * Content pass X38-A (2026-10-25): Art History + Drawing & Painting + Sculpture & Craft.
 * 7 new topics for the split Arts & Culture discipline books.
 * Dedup honored: caves/Mediterranean (arth-caves-to-cathedrals), Western movements
 * (arth-renaissance-to-modern), basic drawing (Learning to See), color (Color Theory)
 * are cross-referenced, never re-taught.
 */

export const x38ArtsHistoryVisualPassTopics: KnowledgeTopic[] = [
    {
      id: 'arth-world-art-traditions',
      title: 'World Art Traditions: China, India, Islam and Africa',
      domain: 'Arts & Culture',
      field: 'Art History',
      branch: 'World Art Traditions',
      tier: 'intermediate',
      concepts: [
        'Chinese landscape painting and the active void',
        'Calligraphy as the scholar\'s supreme art',
        'Indian temple sculpture and Mughal miniatures',
        'Aniconism and the arts of pattern',
        'African sculpture, masks and masquerade',
        'Ukiyo-e and the shaping of European art',
      ],
      words: 1593,
      readMins: 8,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'The Library\'s two earlier Art History surveys — From Caves to Cathedrals and Renaissance to Modernism — follow one thread: the ancient Mediterranean and its European heirs. Yet for most of recorded history most art was made elsewhere, under systems with different priorities. This lesson travels four of them — China\'s ink landscapes, India\'s temple and court art, the Islamic arts of pattern, and Africa\'s sculpture and masquerade — and follows a fifth thread, the Japanese woodblock print, as it loops back to change European painting itself.',
        },
        {
          kind: 'para',
          text: 'The first thing to notice is that each tradition ranks its media differently. In China the highest art was not painting but calligraphy; in the Islamic world, writing and ornament carried the grandest buildings; in much of Africa the mask mattered less as an object than as the performance it served. These are not imperfect versions of a Western standard but complete visual languages, each with its own theory, training and market — and modern movements borrowed from every one of them.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Walk through any large museum\'s permanent collection and you are walking through all of these traditions at once. Knowing what a handscroll, a temple frieze, an arabesque and a masquerade were for separates seeing a room of attractive objects from reading a room of documents — and modern European art\'s debt here is written all over the nineteenth century.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'East Asia: The Brush and the Floating World' },
        {
          kind: 'para',
          text: 'Chinese landscape painting — shan shui, literally mountain-water — treats nature as the great subject and the brushstroke as the unit of meaning. Painters worked in ink and pale color on silk or paper — hanging scrolls, album leaves, and above all the handscroll, read right to left as it unrolled an arm\'s length at a time — a journey measured in minutes, not glimpsed in a second. In the Song dynasty (960–1279), masters like Fan Kuan set travelers as tiny figures beneath cliffs that fill the picture; Guo Xi described the three distances a scroll must orchestrate — up at peaks, into ravines, level across a plain. Voids do much of the work: mist and empty paper stand for water, atmosphere and the quieted mind.',
        },
        {
          kind: 'para',
          text: 'The ideal painter was not a professional but a scholar. Calligraphy ranked above painting because writing was thought to record the movements of the soul most directly — nothing stands between the hand and the character — and the two arts shared brush, ink and standards. Wang Xizhi\'s Orchid Pavilion Preface of 353, a masterpiece of running script, survives only in later copies treasured like relics. Scholars cultivated the Four Arts — qin zither, go, calligraphy and painting — as one discipline, and a literatus\'s painting accumulated poems, colophons and red seals from every later owner, growing richer with time.',
        },
        {
          kind: 'para',
          text: 'Japan inherited this brush culture and, in the Edo period (1603–1868), aimed it at city pleasure. Ukiyo-e — pictures of the floating world — were woodblock prints of actors, beauties and landscapes, made by a workshop team: a publisher commissioned a designer like Hokusai or Hiroshige, a carver cut each color\'s block, and a printer rubbed the impressions. Cheap enough to buy by the sheet, prints were the first genuinely mass visual medium, and Hokusai\'s Great Wave (from Thirty-six Views of Mount Fuji) and Hiroshige\'s One Hundred Famous Views of Edo carried the design language to its peak: flat color, daring crops, weather as the subject.',
        },
        {
          kind: 'para',
          text: 'When prints reached Europe in quantity after the 1850s — some as packing for imported ceramics — painters were electrified, a craze collectors named Japonisme. Van Gogh copied two Hiroshige sheets directly in 1887; Monet collected prints and painted his wife in a kimono; Degas borrowed the cropped diagonals; Toulouse-Lautrec\'s posters are unthinkable without them. The European turn toward flatness, everyday subjects and asymmetrical design was in part a Japanese lesson.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Identify the format: a horizontal scroll of ink on silk means private, slow viewing — unroll it mentally a forearm\'s length at a time, from the right.',
            'Read in sequence: enter at the right through a low foreground, travel left along the watercourse, and rest at each village or temple planted along the route.',
            'Track the voids: where ink stops, mist, water and sky begin; emptiness is active, pacing the journey and silencing the peaks.',
            'Look for words and seals: inscriptions and collectors\' red impressions record who owned and pondered the scroll — its biography, written on its face.',
            'State the purpose: not a picture of a place but a cultivated journey for a scholarly viewer — the landscape equivalent of music, meant to unfold over time.',
          ],
        },
        { kind: 'heading', text: 'Gods, Patterns and Masks' },
        {
          kind: 'para',
          text: 'In India, sculpture was architecture: temple walls carry dense carving — gods with many arms, celestial dancers, loving couples, narrative friezes — from plinth to tower tip, and the images are not later decoration but the temple\'s reason for being, since worship centers on darshan, seeing the deity\'s image and being seen by it. The Ganges\' descent relief at Mamallapuram, the towers of Khajuraho and the Sun Temple at Konark are canonical. In the Chola south, bronzes reached unsurpassed refinement: Shiva as Nataraja, Lord of the Dance, balanced in a ring of fire — creation\'s drum in one hand, dissolution\'s flame in the other — cast by lost-wax so the god could process through the streets.',
        },
        {
          kind: 'para',
          text: 'At the Mughal court in the north, painting became the prestige art. Akbar gathered Persian masters and Indian painters into an atelier illustrating manuscripts in a blended style — Persian refinement, Indian color, later European perspective from imported engravings. Under Jahangir the painters turned to close natural observation, Mansur recording birds and flowers with near-scientific care. These miniatures in opaque watercolor on burnished paper were books: held, paged, read aloud from.',
        },
        {
          kind: 'para',
          text: 'The Islamic world built its grandeur in pattern. Religious settings avoided figural imagery — a reluctance rooted in tradition and practice rather than one scriptural sentence — so the energies that elsewhere went into icons went into calligraphy, geometry and the arabesque. Monumental Qur\'anic scripts, interlace drawn with compass and straightedge, and the endlessly branching vine imply infinity, suited to a conception of God without limit. The Dome of the Rock mosaics in Jerusalem and the Alhambra\'s tile courts in Granada are the canonical ensembles, and the same language carried through carpets, metalwork and books. Figuration never vanished — Persian court books teem with princes and feasts — but the mosque\'s language was writing and pattern.',
        },
        {
          kind: 'para',
          text: 'Sub-Saharan Africa made sculpture do spiritual and social work that European collectors were slow to see. In the kingdom of Benin (present-day Nigeria), hereditary guilds cast brass plaques and commemorative heads of the oba by lost-wax, recording court ritual; a British punitive expedition looted the royal treasury in 1897, and those works now anchor restitution debates in Western museums. The Bamum kingdom in the Cameroon Grassfields produced beaded thrones and commemorative figures for its court. Yoruba carvers made doors, veranda posts, epa masks and the twin figures commissioned when a twin died, to be fed and cared for as a living child. Ife\'s naturalistic heads show African naturalism flourishing centuries before sustained European contact.',
        },
        {
          kind: 'para',
          text: 'One principle reframes everything: the African mask is incomplete on the wall. Masks belong to masquerade — costume, music, dance, audience at once — an art of time, closer to theater than sculpture. Yoruba aesthetics prize a quality often translated as coolness: composure, smoothness, the self in command. Reading African sculpture as failed realism, as earlier collectors did, misses the point; these are achieved styles, theorized within their own cultures.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Shan shui', def: 'Chinese mountain-water landscape painting in ink and pale color on paper or silk.' },
            { term: 'Literati', def: 'Scholar-amateur painters who practiced the Four Arts and treated painting as self-cultivation.' },
            { term: 'Ukiyo-e', def: 'Japanese woodblock prints of the floating world — actors, beauties, landscapes — made by workshop teams.' },
            { term: 'Aniconism', def: 'The avoidance of figural imagery, especially in Islamic religious contexts.' },
            { term: 'Nataraja', def: 'Shiva as Lord of the Dance, the canonical Chola bronze within a ring of fire.' },
            { term: 'Masquerade', def: 'The full masked performance — costume, music, dance, audience — of which the mask is one part.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'The questions below sample all five traditions; answer from the lesson text rather than general impression.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'In the traditional Chinese hierarchy of the scholar\'s arts, the highest-ranked art was:',
              options: ['Landscape painting', 'Calligraphy', 'Carved jade', 'Buddhist sculpture'],
              answer: 1,
              explain: 'Writing was thought to record the movements of the soul most directly; painting borrowed its brush standards and ranked second.',
            },
            {
              q: 'The avoidance of figural imagery in Islamic religious settings chiefly explains the flowering of:',
              options: ['Monumental figural fresco', 'Portraiture in mosques', 'Calligraphy, geometric pattern and arabesque', 'Easel landscape painting'],
              answer: 2,
              explain: 'The energies of religious art went into writing and ornament — media that imply infinity rather than depict creatures.',
            },
            {
              q: 'The brass plaques of the Benin kingdom were produced by:',
              options: ['Hammered sheet metal', 'Mold-pressed clay', 'Imported European foundries', 'Lost-wax casting by hereditary guilds'],
              answer: 3,
              explain: 'Cast by the cire perdue process in guild workshops attached to the royal court.',
            },
            {
              q: 'Van Gogh\'s 1887 painted copies after Hiroshige are classic evidence of:',
              options: ['Japonisme — the European passion for ukiyo-e prints', 'Chinese literati influence on France', 'The Mughal atelier\'s reach', 'Dutch trade in Persian miniatures'],
              answer: 0,
              explain: 'Japanese woodblock prints reached France in quantity after the 1850s and reshaped Impressionist and Post-Impressionist design.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Pair this survey with From Caves to Cathedrals and Renaissance to Modernism to complete the global map, then read How Art Historians See for the method that makes comparisons rigorous. Hands-on readers can pick up the brush in the Drawing & Painting lessons.',
          tone: 'path',
        },
      ],
    },
    {
      id: 'arth-historians-craft',
      title: 'How Art Historians See: Formal Analysis and Iconography',
      domain: 'Arts & Culture',
      field: 'Art History',
      branch: "The Historian's Craft",
      tier: 'core',
      concepts: [
        'Describe before you interpret',
        'Wolfflin and formal comparison',
        'Panofsky\'s three rungs of reading',
        'Patronage and the period eye',
        'Style, periods and hostile names',
        'Connoisseurship, attribution and sources',
      ],
      words: 1455,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Standing in front of a painting, most people ask one question — do I like it? — and stop there. Art history begins one step earlier and asks a chain of answerable questions first: what is it made of, how is it put together, what does it depict, who paid for it, when and where was it made, and is the name on the label the hand that actually made it? This lesson assembles the working method — formal analysis, iconography, patronage, style, connoisseurship and source criticism — that professionals apply to everything from cave walls to Biennial installations.',
        },
        {
          kind: 'para',
          text: 'The method matters because the alternative is guesswork dressed as taste. The two earlier surveys in this series, From Caves to Cathedrals and Renaissance to Modernism, told stories; this lesson shows the machinery that keeps such stories accountable. Every claim an art historian makes must survive a rendezvous with the object and the documents — and the habit of describing before interpreting will sharpen how you look at everything, including photographs, films and interfaces.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Formal analysis and iconography are portable skills: they apply to a Renaissance altarpiece, a Buddhist cave temple, a film still or a logo. Learning to say precisely what is in front of you — and to check an interpretation against evidence — is the closest thing art history has to a laboratory discipline.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Formal Analysis: Describe Before You Interpret' },
        {
          kind: 'para',
          text: 'Formal analysis is disciplined description. You inventory the elements of the work — line (its direction, character and speed), color (hue, value and saturation, for which the Color Theory lesson supplies the vocabulary), shape and mass, the treatment of space, light, texture, scale and composition — and then characterize how they behave together. The Swiss historian Heinrich Wolfflin demonstrated the power of the approach by comparing Renaissance and Baroque painting in paired terms such as linear versus painterly: whether a form is grasped by its contour or by patches of light and shade. His point survives: how a period handles edges and surfaces is its visual fingerprint.',
        },
        {
          kind: 'para',
          text: 'Scale belongs inside the description, not beneath it. A fresco cycle engulfing the walls of a chapel, a panel miniature held in two hands, and a canvas hung at eye level are three different bodily experiences, and the artist worked for the one available. The discipline throughout is to separate observation from judgment: first say what is there. Interpretation built on an unexamined inventory collapses the moment somebody actually looks.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Gather the physical facts from the label and the frame: medium, support, dimensions, date if given — these are data, not interpretation.',
            'Describe the composition: where the masses sit, what the eye meets first, which paths it travels, what the edge crops, and how light is distributed.',
            'Characterize the handling: line quality, brushwork, opacity, palette range and surface texture; compare edges and surfaces the way Wolfflin taught.',
            'Inventory the depicted content: figures, attributes, setting, inscriptions — everything that can be named without yet explaining it.',
            'Only now interpret, on a leash: every claim must point back to something observed in the earlier steps; if a reading needs an invisible fact, file it as a hypothesis, not a finding.',
          ],
        },
        { kind: 'heading', text: 'From Symbols to Society' },
        {
          kind: 'para',
          text: 'Iconography is the discipline of reading depicted content. Its classic ladder, set out by Erwin Panofsky, has three rungs: you first name what anyone can see (a bearded man seated at a table); then identify the story or concept by convention (the halo, the bread and the gathered apostles make it the Last Supper); finally read the deeper cultural assumptions the image takes for granted. The workhorse of the second rung is the attribute — the object that identifies a figure, like Peter\'s keys, Catherine\'s wheel, or the lily that marks an Annunciation. Dutch vanitas still lifes encode a whole moral arithmetic in skulls, snuffed candles and hourglasses. The standing caution: not every object is a symbol. A dictionary of symbols applied without checking period usage produces confident nonsense.',
        },
        {
          kind: 'para',
          text: 'Who paid? Patronage and social context explain more of a work\'s appearance than any artist\'s biography. Fifteenth-century Italian contracts specified costly ultramarine by weight and billed it separately to the client, which is why some Madonnas wear brilliant blue and others do not; churches, guilds, rulers and, later, dealers and collectors each shape what gets made. The historian Michael Baxandall called the shared visual habits of a culture its period eye — merchants fluent in gauging barrels judged painted volumes with the same trained skill. Art is made for someone, and the someone is in the picture.',
        },
        {
          kind: 'para',
          text: 'Style is the recurring, recognizable handwriting of a person, workshop, region or period — and periodization, the slicing of that flow into named eras, is a historian\'s convenience with a checkered past. Many of the names were insults: Italian writers, Giorgio Vasari among them, used Gothic to mean barbaric; a mocking critic\'s phrase after Monet\'s Impression, Sunrise gave the Impressionists their name; Baroque probably descends from the Portuguese word for an irregular pearl. The names stick because they are useful, but the objects do not know they are in a period, and styles overlap, return and vary by region far more than any timeline admits.',
        },
        {
          kind: 'para',
          text: 'Connoisseurship is the attribution of works to hands. Its modern founder, the Italian physician Giovanni Morelli, argued that an artist\'s identity hides not in the heroics of the center but in the unconsidered details — the curve of an earlobe, the drawing of a fingernail — the way a signature hides in habits. Today attribution is a team sport: X-radiographs reveal pentimenti, the artist\'s changes buried under the surface; infrared reflectography exposes underdrawing on panels; pigment analysis catches anachronisms, since a color synthesized in the nineteenth century cannot honestly appear in a fifteenth-century painting; and dendrochronology dates the tree rings of a wooden support itself. Provenance — the documented chain of ownership — closes the case, and the catalogue raisonné, a complete scholarly listing of an artist\'s accepted works, is the tribunal of record.',
        },
        {
          kind: 'para',
          text: 'All of this runs on sources, and the historian\'s first question is what kind. Primary sources — contracts, payment records, inventories, letters like Vincent van Gogh\'s to his brother Theo, treatises like Cennino Cennini\'s craftsman\'s handbook from around 1400, and the objects themselves — carry the residue of the moment. Secondary sources — monographs, museum catalogues, surveys like this one — are arguments about it. Both must be read critically: Vasari\'s Lives of the Artists, the founding history of the discipline, is also a gallery of gossip, and his tale of Giotto drawing a perfect circle for a pope is legend, not evidence. Asking who is telling you this, and why, is the discipline\'s spine.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Formal analysis', def: 'Disciplined description of line, color, space, scale and composition before any interpretation.' },
            { term: 'Iconography', def: 'The study of depicted subjects and their conventional meanings.' },
            { term: 'Attribute', def: 'An object conventionally attached to a figure that identifies them, such as Peter\'s keys.' },
            { term: 'Period eye', def: 'Michael Baxandall\'s term for the shared visual skills and habits a culture brings to pictures.' },
            { term: 'Pentimento', def: 'A trace of the artist\'s earlier composition, visible through or beneath the final paint layer.' },
            { term: 'Provenance', def: 'The documented history of a work\'s ownership, from the maker to the present.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Each question below tests a step of the method rather than a memorized fact; try answering before reading the options.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'What must come first in formal analysis?',
              options: ['A judgment of quality or beauty', 'Research into the artist\'s biography', 'A neutral inventory of what is visibly there', 'Comparison with the artist\'s most famous works'],
              answer: 2,
              explain: 'Describe before you interpret; judgment built on an unexamined inventory collapses on contact with the object.',
            },
            {
              q: 'A haloed figure carrying keys and accompanied by a rooster is identifiable through:',
              options: ['Connoisseurship', 'Patronage records', 'Dendrochronology', 'Iconographic attributes'],
              answer: 3,
              explain: 'Attributes are the conventional objects that identify figures; the keys and the rooster mark the Apostle Peter.',
            },
            {
              q: 'Infrared reflectography of a panel painting is most likely to reveal:',
              options: ['The patron\'s name', 'The underdrawing beneath the paint', 'The age of the frame', 'Later varnish restorations'],
              answer: 1,
              explain: 'Infrared light passes through paint and records carbon underdrawing, exposing workshop practice and changes of mind.',
            },
            {
              q: 'A pigment first manufactured in the nineteenth century, found in a supposed fifteenth-century panel, is:',
              options: ['Evidence of forgery or later repainting', 'Proof of lost Renaissance technology', 'A sign the work is a period copy', 'Irrelevant to attribution'],
              answer: 0,
              explain: 'Materials have invention dates; an anachronistic pigment is classic technical evidence against an early origin.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Take the method straight into World Art Traditions and Contemporary Art and test it on objects the textbook cannot settle for you. A pocket gallery notebook — one page per work, description first, interpretation second — builds the habit faster than any further reading.',
          tone: 'path',
        },
      ],
    },
    {
      id: 'arth-contemporary-art',
      title: 'Contemporary Art: From Pop to Pixels',
      domain: 'Arts & Culture',
      field: 'Art History',
      branch: 'The Contemporary Scene',
      tier: 'intermediate',
      concepts: [
        'Pop and the collapsed high/low divide',
        'Judd\'s specific objects',
        'The idea as machine (LeWitt)',
        'Installation: art you occupy',
        'Street art to auction house',
        'Digital art and the biennial circuit',
      ],
      words: 1508,
      readMins: 8,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'The story told in Renaissance to Modernism ends with modernism\'s own interrogation — abstraction, the readymade, the question of what counts as art at all. This lesson picks up the thread after the Second World War, when a rebuilt and newly consumerist world answered that question with a shrug and a soup can. Contemporary art is best defined not by a style but by a set of pressures: mass media, the market, global travel and, lately, computation. What unites Pop, minimalism, conceptual art, installation, performance, street art and digital work is that each moves the artwork one more step away from the handmade object and toward something else — a commodity, an idea, an event, a network.',
        },
        {
          kind: 'para',
          text: 'Because the field is alive, the survey below will age; its methods will not. For every movement, the same three questions apply: what did it reject, what did it propose, and where did its logic lead? The reading habits of How Art Historians See — describe first, interpret on a leash — matter most precisely with art that dares you to dismiss it.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'This is the art of your own lifetime: it hangs in the museums you can visit, sets auction-house headlines, and argues daily with the platforms you scroll. Understanding why a stack of steel boxes or a purely digital image can be art is media literacy for the twenty-first century, not trivia.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Pop, Minimalism and the Idea as Art' },
        {
          kind: 'para',
          text: 'Pop art answered abstract expressionism\'s agonized soul with the supermarket. Richard Hamilton\'s 1956 collage — its full title asking what makes today\'s homes so different, so appealing — is the movement\'s thesis statement: a bodybuilder and a pin-up in a living room of branded goods. Andy Warhol painted Campbell\'s soup cans in 1962 and moved to silkscreen, the printing method of commerce, so that his hand all but disappeared and the image could repeat with the numbness of a shelf; Roy Lichtenstein enlarged comic-book panels, printing dots and all, to easel size. The gesture cut both ways: consumer imagery became high art, and high art admitted it shared genes with advertising.',
        },
        {
          kind: 'para',
          text: 'Minimalism stripped in the opposite direction. Donald Judd called his objects specific — neither painting nor sculpture, just volumes in real space: boxes of industrial metal, rows of identical units, Carl Andre\'s floor plates meant to be stood on. There is no composition to decode and no gesture to admire; the work is what it is, and its true subject is your body walking around it in a room. Serial repetition — one unit, then the next — replaced composition with order, and the factory replaced the studio, since the artist specified and industry executed.',
        },
        {
          kind: 'para',
          text: 'Conceptual art took the final step: the idea outranks the object. Sol LeWitt\'s 1967 formulation is the movement\'s slogan — the idea becomes a machine that makes the art — and his wall drawings exist as instructions, executable by strangers decades later. Joseph Kosuth exhibited a chair, a photograph of the chair and the dictionary entry for chair, letting the triangulation do the work. Lucy Lippard named the result the dematerialization of the art object: certificates, proposals and texts became the residue an artwork leaves. Whatever one thinks of the trade, its logic runs in a straight line to instruction-based and generative art — anywhere the plan precedes the execution.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Look before you read: give the work a full minute — materials, scale, placement, sound, smell — before touching the wall text.',
            'Identify the medium honestly: is this an object, an image, a performance, the document of an action, or a system that produces things? The category is half the content.',
            'Ask what the work does rather than what it shows: does it consume your time, stage your body, broker an exchange, or stage an absence?',
            'Find the historical echo — readymade, Pop imagery, minimal object, conceptual instruction, performance — because few works are without ancestry.',
            'Now read the label and the essay, and hold them accountable: do they describe a work you have actually seen, or one the writer wishes existed?',
            'Give time-based works their due: video, performance and rooms meant to be occupied unfold; skimming them without killing them is impossible.',
          ],
        },
        { kind: 'heading', text: 'From the Street to the Server' },
        {
          kind: 'para',
          text: 'Installation and performance relocate the artwork from the wall to your experience. Allan Kaprow\'s late-1950s happenings scattered scripted events through galleries; Marina Abramovic sat silent at a table in 2010 while visitors took turns sitting opposite her, one at a time, for the length of the exhibition; Olafur Eliasson filled the Tate Modern\'s Turbine Hall with a glowing artificial sun and mist in 2003; Yayoi Kusama\'s mirrored rooms multiply a single viewer into a glittering crowd. The visitor completes the piece — it literally does not exist as art without a body present, which is why documentation can only report such works, never be them.',
        },
        {
          kind: 'para',
          text: 'Street art began as writing. New York subway graffiti of the 1970s — a tag, then a whole car — built a calligraphy of the ignored, and when a newspaper profiled the Manhattan teenager who signed TAKI 183, the city learned the authors\' names. Keith Haring drew chalk images on blank advertising panels; Jean-Michel Basquiat carried the energy of his SAMO graffiti partnership onto canvas and into the gallery; Banksy\'s stencils kept the illegal venue while the market bid anyway — most pointedly when a framed canvas shredded itself at Sotheby\'s the moment it sold in 2018. The arc from felony to auction lot is not simply a sellout story; it is the culture arguing with itself about who owns public space.',
        },
        {
          kind: 'para',
          text: 'Digital art is older than the web. Nam June Paik was bending television signals into abstractions in the 1960s and foresaw an electronic superhighway; Vera Molnar wrote programs that made images from simple rules — conceptual art\'s instructions discovering their native executor in the computer. Net art of the 1990s lived in browsers; platforms and files brought the market online in 2021, when a collage of five thousand daily images by the artist Beeple sold at auction for roughly sixty-nine million dollars as a blockchain token of ownership. The sale reopened art\'s oldest questions — originality, edition, proof of possession — with new instruments, and machine-learning image systems now press the same questions further.',
        },
        {
          kind: 'para',
          text: 'The circuit that stages all of this is global. The Venice Biennale, running since 1895, gave the format its name and its national pavilions; Sao Paulo followed in 1951, and Kassel\'s Documenta, founded in 1955, became the field\'s heavyweight survey. Since the 1990s the map has widened to cities from Gwangju to Sharjah to Dakar, and the curator has become an author in their own right — Harald Szeemann\'s 1969 exhibition When Attitudes Become Form demonstrated that an exhibition, not just an object, can be a work. The biennial\'s gift is access at scale; its cost is a sameness of crate-friendly art — the critique every biennial now hears, and deserves.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Pop art', def: '1950s–60s movement that lifted commercial imagery and technique into fine art.' },
            { term: 'Minimalism', def: 'Reduction to simple industrial volumes whose real subject is the viewer\'s bodily encounter.' },
            { term: 'Conceptual art', def: 'Art in which the idea, instruction or proposition outranks its physical execution.' },
            { term: 'Installation', def: 'A work assembled for a specific space, meant to be entered and occupied rather than viewed.' },
            { term: 'Performance art', def: 'A live, time-based art event in which the artist\'s action is the work.' },
            { term: 'Biennial', def: 'A recurring large-scale international exhibition, named for its two-year cycle.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Answer from the lesson, then check yourself — several options are designed to sound reasonable without being what the text actually claims.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The phrase the idea becomes a machine that makes the art is:',
              options: ['Warhol\'s defense of silkscreen', 'Judd\'s definition of specific objects', 'Hamilton\'s Pop thesis', 'Sol LeWitt\'s definition of conceptual art'],
              answer: 3,
              explain: 'LeWitt\'s 1967 formulation made the idea primary and execution secondary — conceptual art\'s founding slogan.',
            },
            {
              q: 'According to the lesson, minimalism\'s real subject is:',
              options: ['Pure emotion', 'Commercial packaging', 'The viewer\'s body in the room with the volumes', 'Art-historical quotation'],
              answer: 2,
              explain: 'With composition and gesture removed, what remains is the encounter between the object and the person walking around it.',
            },
            {
              q: 'The Banksy canvas that shredded itself at Sotheby\'s in 2018 exemplifies:',
              options: ['Street art\'s separation from the market', 'Street art\'s entanglement with the market, staged as irony', 'Conceptual art\'s refusal of objects', 'Minimalist seriality'],
              answer: 1,
              explain: 'The work kept its illegal-venue identity while performing inside the auction house — the entanglement itself made visible.',
            },
            {
              q: 'Vera Molnar\'s programmed plotter drawings matter to this history because they:',
              options: ['Were the first artworks sold as blockchain tokens', 'Restored the prestige of hand drawing', 'Were commissioned by Documenta', 'Gave conceptual art\'s instructions a native medium in computation'],
              answer: 3,
              explain: 'Simple rules executed by machine are the direct ancestor of generative and software art.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Revisit How Art Historians See with a contemporary exhibition in mind, and read the Visual Design and Photography lessons for the commercial images Pop absorbed. If making is your goal, the Drawing & Painting path starts the craft that all of this presumes.',
          tone: 'path',
        },
      ],
    },
    {
      id: 'drawing-figure-gesture',
      title: 'Figure Drawing: Gesture, Proportion and Anatomy',
      domain: 'Arts & Culture',
      field: 'Drawing & Painting',
      branch: 'Drawing Foundations',
      tier: 'intermediate',
      concepts: [
        'Gesture: the pose\'s verb',
        'The line of action',
        'Big three masses and landmarks',
        'Head-unit proportion canons',
        'Light logic on the form',
        'Foreshortening as overlap',
      ],
      words: 1442,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Learning to See, the first Drawing & Painting lesson, trained the eye on line, shape and perspective using the still world. The human figure is that curriculum\'s summit and its stress test: it moves, breathes, foreshortens and turns through a full three hundred sixty degrees, and it comes with a built-in detector for wrongness — every viewer is an instant expert on how a body should look. Figure drawing is therefore taught as two skills fused together: gesture, which captures what a pose is doing in seconds, and construction, which builds what the body actually is, solid by solid.',
        },
        {
          kind: 'para',
          text: 'A third component, anatomy, sits between the two — but it is anatomy for artists, not for surgeons. You need the skeleton\'s logic and the major muscle groups\' straps and bulges, where they attach and what they squeeze, not Latin completeness. And you need the proportion canons, the accumulated shortcuts for how big a head is against a body, held loosely, because they are style choices rather than laws.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Figure training is the backbone of animation, illustration, comics, fashion and concept art — every industry that draws people hires for exactly this skill. It is also the fastest general upgrade to any drawing practice, because the figure forgives nothing: work at it seriously for a season and objects, animals and scenes improve for free.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Gesture: The Thirty-Second Drawing' },
        {
          kind: 'para',
          text: 'A gesture drawing is the quickest true statement about a pose — its action, weight and intention — made in thirty seconds to two minutes. It is not an outline and not a mannequin; it is the pose\'s verb. The central tool is the line of action: one imaginary stroke through the body, from head to weighted foot, that carries the whole curve of the movement — drawn first, drawn long, and obeyed. The teacher Kimon Nicolaides systematized this study in the 1940s, assigning timed poses by the thousand; the count, not any single sheet, is the point. Thirty-second drawings are supposed to fail. They are press-ups for attention.',
        },
        {
          kind: 'para',
          text: 'Technique follows attitude. Draw from the shoulder, keep the implement moving, and feel the pose in your own body before committing — your mirror neurons are a drawing tool. Capture the three big tilts — head, ribcage, pelvis — before anything else, and sacrifice every detail without grief. Watch for weight: drop an imaginary plumb line from the pit of the neck and see which foot falls under it. A believable figure is always negotiating with gravity, and the classical term for the most elegant negotiation — shoulders counter-angled to hips, one leg loaded — is contrapposto, the weight-shift stance the Greeks invented and the Renaissance revived.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Warm up: ten thirty-second gestures, line of action only, one long stroke per drawing; no erasing, no detail, no regret.',
            'Five one-minute drawings: add the three tilts — head, ribcage, pelvis — and the direction of each limb as a single curve.',
            'Three five-minute structural studies: egg for the ribcage, box for the pelvis, cylinders for the limbs; check the plumb line and the loaded leg.',
            'Two fifteen-minute value studies under one fixed light: squint, find the light side and shadow side of each major form, and place the core shadow and cast shadow before any halftone.',
            'One twenty-minute long pose with deliberate foreshortening — a knee or foot aimed at you — solved with overlap and compression, not avoidance.',
            'Five-minute review: mark the strongest sheet, write one sentence on why, and date the stack; progress lives in the pile, not in any single drawing.',
          ],
        },
        { kind: 'heading', text: 'Construction, Proportion, Practice' },
        {
          kind: 'para',
          text: 'Construction draws the body as solids before surfaces. The big three masses — skull, ribcage, pelvis — are the architecture: a ball with a jaw, an egg, a bucket, joined by a flexible spine and carrying the limbs\' cylinders. Landmarks make the masses placeable under skin: the clavicles like a coat-hanger across the chest, the sternum, the iliac crests of the pelvis, the kneecaps. Muscles are learned as straps that wrap and squeeze these solids — the pectoral fan, the paired calf, the sheets along the spine — a working set of a couple of dozen groups, each memorable for what it does, since a muscle\'s shape in a pose follows from its job.',
        },
        {
          kind: 'para',
          text: 'Proportion canons measure the body in heads. The classical ideal runs about eight heads tall; the living average is nearer seven and a half; a child is five or six, which is why enlarged heads read as young. Useful checks: the body\'s midpoint sits at the pubic bone; the eye line falls halfway up the head; the open hand spans the height of the face; the wrists hang near the midpoint of the whole figure. Leonardo\'s Vitruvian Man is the canon\'s most famous drawing, and older traditions chose different ones — Egyptian workshops laid figures out on grids of fists. Hold all of them loosely: they are tuning forks for checking a drawing, never templates to trace over the model in front of you.',
        },
        {
          kind: 'para',
          text: 'Value is what makes constructed forms turn in light. The sequence — highlight, halftones, core shadow at the form\'s turning edge, reflected light inside the shadow, cast shadow thrown beyond it — is covered for color in the Color Theory lesson; in figure drawing it runs in graphite and charcoal. Squint until the model becomes three or four big values, and block those shapes before any detail. A belly, a thigh or a cheek is a sphere in disguise, and viewers read correct light logic as roundness even when they cannot say why.',
        },
        {
          kind: 'para',
          text: 'Foreshortening is perspective applied to the body. A limb aimed at your eye compresses into a stack of overlapping shapes, and the correct response is to draw the shapes you actually see, not the length you know the limb to be. Overlap is the master tool — the nearer form bites into the farther one — with compression, taper and ellipse close behind. Cross-contours, lines drawn around a form as if the form were a potato being wrapped in string, state which way it swells. When in doubt, measure: hold the pencil at arm\'s length, read a limb\'s angle against the vertical, compare one seen length against the head you have already drawn, and trust the reading over the belief.',
        },
        {
          kind: 'para',
          text: 'Structured practice beats heroic sessions. A workable rhythm: gestures daily, a long pose weekly, one slow master copy each month — a Raphael red-chalk study or any drawing you admire, copied to absorb its decisions — and a pocket sketchbook for hands, feet and strangers on trains. You are your own always-available model for heads and hands, and a mirror doubles your studio. Count poses in the hundreds; the hundredth attempt at a foreshortened forearm is where the first honest one tends to appear.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Gesture drawing', def: 'A rapid study, thirty seconds to two minutes, capturing a pose\'s action and weight.' },
            { term: 'Line of action', def: 'The single imaginary curve running through a pose that carries its whole movement.' },
            { term: 'Contrapposto', def: 'The classical weight-shift stance: hips and shoulders counter-angled around the loaded leg.' },
            { term: 'Constructive anatomy', def: 'Simplified artistic anatomy — masses, landmarks and major muscle straps — used to build figures.' },
            { term: 'Foreshortening', def: 'Perspective applied to the body: forms pointing at the eye overlap and compress.' },
            { term: 'Core shadow', def: 'The darkest band on a form, where its surface turns away from the light.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'The questions below check the two halves of the skill — capturing and building — plus the safety rails that keep practice honest.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'A thirty-second study exists chiefly to capture:',
              options: ['An accurate outline', 'Facial likeness', 'Finished shading', 'The pose\'s action and weight'],
              answer: 3,
              explain: 'Gesture is the pose\'s verb; outline and detail are exactly what must be sacrificed.',
            },
            {
              q: 'The big three masses of constructive anatomy are:',
              options: ['Head, ribcage, pelvis', 'Arms, torso, legs', 'Skull, spine, hands', 'Chest, abdomen, thighs'],
              answer: 0,
              explain: 'Skull, ribcage and pelvis are the architecture; everything else is cylinders, straps and connections.',
            },
            {
              q: 'In the classical proportion canon, the body\'s midpoint falls at:',
              options: ['The navel', 'The sternum', 'The pubic bone', 'The knees'],
              answer: 2,
              explain: 'Measured in heads, the figure splits roughly in half at the pubic bone — a fast check on leg length.',
            },
            {
              q: 'A forearm pointing directly at the viewer should be drawn mainly with:',
              options: ['Its full known length', 'A lighter, fainter line', 'An orthogonal grid', 'Overlapping compressed shapes and wrapping cross-contours'],
              answer: 3,
              explain: 'Foreshortening is solved by overlap and compression — drawing the shapes seen, not the length known.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Turn these drawings into paint with Painting Media: Watercolor, Oil and Acrylic, or rebuild the figure in clay with Sculpture Fundamentals. For the historical payoff, the Art History lessons show Michelangelo-class draftsmen using exactly these canons.',
          tone: 'path',
        },
      ],
    },
    {
      id: 'painting-media-techniques',
      title: 'Painting Media: Watercolor, Oil and Acrylic',
      domain: 'Arts & Culture',
      field: 'Drawing & Painting',
      branch: 'Painting Media & Technique',
      tier: 'core',
      concepts: [
        'Pigment plus binder defines the medium',
        'Watercolor: reserve the white',
        'Oil: oxidation and open edges',
        'Fat over lean',
        'Acrylic speed and mediums',
        'Solvents, pigments and rag safety',
      ],
      words: 1439,
      readMins: 7,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Color Theory explained why combinations work; this lesson is about the vehicle that carries them. Paint is pigment — ground colored matter — suspended in a binder, and the binder is the medium\'s whole personality. Gum arabic makes watercolor: transparent, re-wettable, obedient to water. Linseed oil makes oil paint: slow, buttery, capable of layers upon layers. Acrylic polymer makes acrylic paint: fast, waterproof when dry, and content to imitate either of its elders. The same pigment in three binders is three different arts.',
        },
        {
          kind: 'para',
          text: 'Because the binder decides drying, opacity and repairability, it quietly decides your process: watercolor plans its whites and works light to dark, oil piles rich layers over lean and reworks for days, and acrylic does everything in between at the cost of never coming back once it sets. Medium chemistry sounds like a constraint; in practice it is the reason each medium has a look nothing else can fake. This lesson covers the behavior of the three vehicles, the craft moves of each, and the studio habits that keep the practice safe.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Nearly every painting mishap — cracking glazes, muddy watercolors, rags that smolder in a bin — is a binder problem, not a talent problem. A weekend of medium knowledge prevents years of mysterious failures, and choosing a medium honestly, by temperament and available time, is the first real decision of a painting life.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'How the Three Vehicles Behave' },
        {
          kind: 'para',
          text: 'Watercolor\'s gum arabic holds pigment in a film so transparent that the paper glows through it, which makes the white of the sheet the only white you will ever have — it must be reserved, planned, masked; a white is an act of planning, not of paint. The paint re-dissolves in water forever, so lifting and blending stay possible, and blooms — the cauliflower edges where wet paint creeps into damp paint — are both hazard and signature effect. Oil\'s linseed oil does not evaporate at all; it combines with oxygen and polymerizes into a tough, slightly flexible film, from the outside in, over days. That slowness is the medium\'s gift: edges stay open, glazes can be planned, and mistakes can be scraped back tomorrow. Acrylic\'s polymer particles sit in water until the water leaves and the particles fuse; the film is waterproof within minutes to an hour, and after that it is permanent.',
        },
        {
          kind: 'para',
          text: 'The craft of watercolor is the management of wetness. Flat, graded and variegated washes are the medium\'s scales; wet-into-wet softens edges into fog, wet-on-dry snaps them crisp, and the timing interval between the two is where the medium\'s weather happens. Layering is glazing: thin, transparent passages over completely dry ones, building depth without mud — which comes from stirring layers together rather than adding to them. Paper is a collaborator, not a surface: thin sheets buckle, heavy two-hundred-plus-GSM stock holds a wash, cold-press texture glows, hot-press suits fine detail, and masking fluid reserves the whites the plan nearly forgot.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Tone and draw: on a primed canvas, fix the composition in lean paint — pigment thinned with solvent — as a thin imprimatura; this layer dries fastest and hardest.',
            'Block in the big shapes, still thin: establish the value architecture with solvent-thinned color, keeping every layer matte and stingy with oil.',
            'Build the middle passages: as layers stack, add more medium to each mixture — it literally gets fatter — so every new film dries more slowly and stays more flexible than the films beneath it.',
            'Place the lights thick: highlights and texture go on last and fattest, often straight from the tube, as impasto ridges that catch raking light.',
            'Glaze after full drying: transparent, oil-rich color over the set painting adjusts temperature and unifies — the layered logic of fifteenth-century Netherlandish panels, and the reason old glazes still glow.',
          ],
        },
        { kind: 'heading', text: 'Oil Craft, Acrylic Craft, Tools and Safety' },
        {
          kind: 'para',
          text: 'Oil\'s first law is fat over lean: each successive layer must be at least as oil-rich as the one below, because an oil-poor layer on top dries harder and faster than the soft film beneath it and cracks as that film keeps moving. Alla prima painting sidesteps the rule by finishing wet-into-wet in one session; indirect painting embraces it with underpainting, body layers and final glazes, plus scumbling — dragging dry, broken light paint over a darker passage — for shimmer. Mediums tune the machine: linseed and stand oil for flow and gloss, alkyds for speed, and solvents — odorless mineral spirits rather than raw turpentine — for thinning and cleanup. Rembrandt built his late surfaces from translucency and thick lead-white ridges; Van Gogh dragged impasto in strokes that are nearly sculpture.',
        },
        {
          kind: 'para',
          text: 'Acrylic is the diplomat of the family. Thinned to a wash it behaves like ink or watercolor on almost any paper; cut with gel it piles like slow oil, holding knife marks and ridges. Retarder buys back working time; molding paste carves; the paint sticks to nearly anything — canvas, panel, paper, board, stone — and cleans up with water. The tax is speed itself: blending windows close in minutes, and a dried passage cannot be lifted, only painted over. That is also a freedom, because nothing on the canvas stays precious.',
        },
        {
          kind: 'para',
          text: 'Grounds come first, because they are half the painting: traditional gesso — chalk in animal glue — on panels, modern acrylic gesso on cotton or linen canvas, panels for razor detail, and toned grounds for mid-value starts. Brushes divide by temperament: stiff hog bristle pushes oil, soft synthetic or sable carries watercolor, and the shapes — flat, bright, filbert, round, rigger — each make a different family of marks. The palette knife mixes without waste and paints where a brush would collapse; palettes run from seasoned wood to disposable paper, with glass the easiest to scrape clean. Buy fewer, better tools: one good filbert outlives a dozen novelty brushes.',
        },
        {
          kind: 'para',
          text: 'Safety is binder chemistry again. Solvents want ventilation — work near moving air, cap the jars, and keep food out of the studio. Some pigments are genuinely toxic — lead white, cadmiums, cobalts — so never point a brush with your lips, and never sand dry paint without a mask and extraction. The quietest hazard is the most mundane: linseed-oil-soaked rags oxidize with the release of heat and, bunched in a bin, can ignite hours after you leave; spread them flat to dry hard, or seal them under water in a metal can before disposal. Water media carry none of these burdens — which is why acrylic is the schoolroom medium.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Binder', def: 'The glue that carries pigment: gum arabic, linseed oil, or acrylic polymer.' },
            { term: 'Wash', def: 'A broad, thin layer of watercolor — flat, graded, or variegated.' },
            { term: 'Fat over lean', def: 'The oil-painting rule that each layer must be at least as oil-rich as the one beneath it.' },
            { term: 'Glazing', def: 'Applying a transparent layer of color over a dried layer to modify it.' },
            { term: 'Impasto', def: 'Paint applied thick enough to hold its own texture and catch light.' },
            { term: 'Ground', def: 'The prepared surface a painting sits on — gessoed panel or canvas.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Each question targets a fact about the vehicles rather than a preference among them; answer from the chemistry.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Oil paint hardens chiefly by:',
              options: ['Evaporation of its water content', 'Cooling of a melted binder', 'Oxidation — the oil combines with air and polymerizes', 'Ultraviolet curing'],
              answer: 2,
              explain: 'Linseed oil does not evaporate; it takes up oxygen and polymerizes into a solid film, from the surface inward.',
            },
            {
              q: 'The fat-over-lean rule exists chiefly to prevent:',
              options: ['Muddy mixtures', 'Glazes drying too glossy', 'Canvas rot', 'Cracking, as a hard upper film splits over a still-moving lower one'],
              answer: 3,
              explain: 'Lean layers dry harder and faster; placed on top of soft, slow fat layers, they crack as the film beneath keeps shifting.',
            },
            {
              q: 'In watercolor, the brightest whites are normally:',
              options: ['The untouched paper, reserved in advance', 'Titanium white painted on last', 'A body of gouache', 'A wash of diluted white ink'],
              answer: 0,
              explain: 'Gum arabic\'s film is transparent, so the paper is the only true white — and it must be planned, not painted.',
            },
            {
              q: 'Oil-soaked rags bunched together in a bin are dangerous because:',
              options: ['They stain the floor permanently', 'The oxidizing oil releases heat and can self-ignite', 'Solvent fumes dissolve the palette', 'They attract damp and mold'],
              answer: 1,
              explain: 'Linseed oil\'s oxidation is exothermic; trapped heat in a folded rag can reach ignition hours later. Lay rags flat or seal them under water.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Bring the figure from Figure Drawing into whichever vehicle suits your tempo, then move into three dimensions with Sculpture Fundamentals. World Art Traditions shows these same media in other centuries — Chinese ink, Mughal gouache, ukiyo-e blocks — deepening every choice made at the palette.',
          tone: 'path',
        },
      ],
    },
    {
      id: 'sculpture-fundamentals',
      title: 'Sculpture Fundamentals: Modeling, Carving and Casting',
      domain: 'Arts & Culture',
      field: 'Sculpture & Craft',
      branch: 'Sculpture Fundamentals',
      tier: 'core',
      concepts: [
        'Four operations: carve, model, cast, construct',
        'Chisel sequence, general to specific',
        'The armature problem',
        'Lost-wax casting step by step',
        'Relief versus sculpture in the round',
        'Scale, pedestal and viewpoint',
      ],
      words: 1501,
      readMins: 8,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'A drawing is a window: it constructs the illusion of depth on a flat plane. Sculpture is the thing itself — mass in your space, with a back, a bottom and a silhouette that changes every step you take. That difference drives everything in this lesson. The sculptor chooses among four operations: carving, which subtracts; modeling, which adds; casting, which multiplies; and constructing, which assembles. Each material and method wants different forms — stone rewards mass and closed silhouettes, clay rewards flow and change, bronze rewards the leaps that marble cannot risk, and welded steel rewards open drawing in space.',
        },
        {
          kind: 'para',
          text: 'The Ceramics and Craft lesson treats clay at full depth; this one surveys the fundamentals of all sculptural process — the logic of subtractive and additive thinking, the armature, the chisels, the mold and the casting chain, and the choice between relief and the round. Read it as a field guide to every sculpture you will ever stand in front of: once you can recognize tool marks and casting seams, you can see how the thing was made, and seeing how it was made is most of seeing what it is.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Sculpture is the most public and the most physical of the arts — temples, monuments, plazas and graves. It is also the most unforgiving in one direction: a drawing can be erased, but a chisel blow taken from marble cannot be given back. Understanding process turns a museum hall from a parade of objects into a visible record of decisions, risk and labor.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Subtractive and Additive: Carving and Modeling' },
        {
          kind: 'para',
          text: 'Carving is an argument with a block that the carver can only lose ground in, and the method is strict sequence, general to specific: the point chisel with mallet (or a pneumatic hammer) busts the block down toward the rough mass; the toothed claw chisel rakes the surfaces closer to the form; the flat chisel smooths and defines; rasps, rifflers and abrasives finish. Whether to polish or to leave the tool texture showing is a final aesthetic choice — the modern direct carvers, following Brancusi, kept their chisel marks as an honesty about process. Michelangelo\'s unfinished figures, half-emerged from their marble, show the method frozen in action: working from the front inward, releasing the form rather than building it.',
        },
        {
          kind: 'para',
          text: 'Stone and wood each discipline the hand. Softer stones — soapstone, alabaster — forgive learners; limestone sits in the middle; marble resists and rewards. Wood carves with the grain, never against it, and punishes ignorance with splits; the classic European carving woods are close-grained limes and basswoods (Tilman Riemenschneider\'s limewood altarpieces are the standard), large trunks are hollowed or laminated to prevent checking, and the wood\'s own figure — the grain pattern itself — is often allowed to speak in the finished surface.',
        },
        {
          kind: 'para',
          text: 'Modeling is the additive opposite: clay built up, pushed around, cut away and rebuilt — the most forgiving of all processes. Its structural problem is gravity. Any standing figure needs an armature: a wire, rod or pipe skeleton roughed to the pose and anchored to a stand, carrying weight that wet clay cannot. Clay meant for the kiln must be hollowed or vented so trapped air and moisture do not burst it; clay meant only as a model — like wax or oil-based plasteline, which never dries — is usually destined for casting, the next link in the chain.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Model a maquette: a small clay or wax study, at a scale you can hold and revise cheaply, fixing the pose, proportions and spirit of the piece.',
            'Mold the maquette — a flexible rubber skin backed by a rigid mother mold — and cast a wax positive from it; the wax can be cleaned, thinned and refined to become the true final surface.',
            'Sprue the wax: attach a network of wax rods that will become channels for metal and exits for air, then seal the whole tree inside an investment of plaster-and-silica or modern ceramic shell.',
            'Burn out: kiln the invested mold until the wax melts and runs out entirely — the wax is lost, leaving a negative void with its channel system intact.',
            'Pour molten bronze into the still-hot void, let it freeze solid, then break the investment away and cut off the sprues.',
            'Chase the casting — file, tool and blend the metal — then apply a chemical patina, accelerated with heat, and wax it: the colored skin that protects the bronze.',
          ],
        },
        { kind: 'heading', text: 'Molds, Relief and the Walking Eye' },
        {
          kind: 'para',
          text: 'Casting is multiplication. A single original yields a mold, and the mold yields any number of positives in plaster, cement, resin or metal — bronze above all, strong enough to be cast thin, which is why outflung arms and mid-air action belong to bronze and not to stone, and why numbered editions are legitimate. Lost-wax is ancient and nearly universal: Mesopotamia, Egypt, the Ife and Benin casters of West Africa (see World Art Traditions), and the Renaissance foundries all ran versions of the same chain. Before three-dimensional scanning, sculptors scaled maquettes up with the pointing machine and calipers — locating points in space on the small model and transferring them to the block, one measured point at a time.',
        },
        {
          kind: 'para',
          text: 'Relief is sculpture that stays a picture: form raised from, and attached to, a background plane. Low relief keeps the rise shallow and depends on subtle stepping, as on coins and the Parthenon frieze; high relief rounds far enough for deep undercutting; sunken relief, the Egyptian variant, cuts the image down into the surface so it lives by shadow; and Donatello\'s celebrated flattened relief compressed whole landscapes into barely an inch of stone using purely pictorial means. Relief fixes the viewpoint at one frontal station point. Sculpture in the round abandons that privilege: its silhouette rearranges every few steps, and its negative space — the hole an arm frames — becomes as active as the mass itself.',
        },
        {
          kind: 'para',
          text: 'Scale is meaning. A hand-held figure solicits intimacy; a colossus manufactures awe and, usually, civic power; and the pedestal is not furniture but a viewing instrument, deciding the height and distance of the eye. Rodin argued that his Burghers of Calais should stand at street level, on no pedestal at all, so that citizens could meet the condemned men eye to eye. The classic textbook pair is the two Davids: Michelangelo\'s marble, composed in the moment before action, frontal and ideal, rewards the single measured view; Bernini\'s, caught mid-swing with the body torqued, places the visitor roughly where Goliath stood and rewards the walk around. Construction — the fourth operation — joined the family with twentieth-century welding, when Julio Gonzalez and Picasso began drawing in forged space, and assemblage made the found object itself sculptural.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Armature', def: 'The internal skeleton of wire or rod that supports a modeled figure.' },
            { term: 'Maquette', def: 'A small preliminary model used to fix pose, proportion and idea before scaling up.' },
            { term: 'Lost-wax casting', def: 'Casting by investing a wax model, melting the wax out, and pouring metal into the void.' },
            { term: 'Relief', def: 'Sculpture raised from a background plane — low, high, or sunken — with a fixed viewpoint.' },
            { term: 'In the round', def: 'Freestanding sculpture meant to be walked around, with silhouettes that change with every step.' },
            { term: 'Patina', def: 'The chemical or natural surface coloration of a metal sculpture, protective as well as expressive.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'The quiz below tests the order of operations and the reasoning behind them — the two things a sculptor cannot fake.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'The correct carving sequence, rough to fine, is:',
              options: ['Flat chisel, then point, then tooth chisel, then rasp', 'Point chisel, then tooth chisel, then flat chisel, then rasp', 'Rasp, then tooth chisel, then point chisel', 'Tooth chisel, then point chisel, then flat chisel'],
              answer: 1,
              explain: 'General to specific: the point roughs out mass, the claw rakes toward form, the flat defines, abrasives finish.',
            },
            {
              q: 'In lost-wax casting, the wax is:',
              options: ['The final core of the sculpture', 'A polishing agent applied at the end', 'The model and its channels, melted out and replaced by metal', 'The material of the outer mold'],
              answer: 2,
              explain: 'The wax — both model and sprue network — is burned out of the investment, leaving the void that bronze fills: hence lost.',
            },
            {
              q: 'Sunken relief, cutting the image into the surface itself, is especially associated with:',
              options: ['Baroque Italy', 'Gothic France', 'Benin brasswork', 'Ancient Egypt'],
              answer: 3,
              explain: 'Egyptian sculptors cut images down into walls so they registered by shadow under strong sun.',
            },
            {
              q: 'The lesson explains Bernini\'s David versus Michelangelo\'s chiefly as a difference of:',
              options: ['The monetary value of the materials', 'The moment chosen and the viewpoints demanded of the visitor', 'Their religious subject matter', 'Their scale'],
              answer: 1,
              explain: 'Michelangelo composes the moment before action for a frontal view; Bernini torques mid-action and makes the circling visitor part of the scene.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Continue into Ceramics and Craft for clay, kiln and glaze at full depth, and read World Art Traditions and From Caves to Cathedrals to watch these same processes carry meaning across history. Figure Drawing pairs naturally — the modeling eye and the constructing hand train each other.',
          tone: 'path',
        },
      ],
    },
    {
      id: 'craft-ceramics',
      title: 'Ceramics and Craft: Clay, Glaze and the Kiln',
      domain: 'Arts & Culture',
      field: 'Sculpture & Craft',
      branch: 'Craft Traditions',
      tier: 'core',
      concepts: [
        'Earthenware, stoneware, porcelain',
        'Pinch, coil, slab and wheel',
        'Centering: the wheel\'s gate skill',
        'Bisque, then glaze fire',
        'Silica, flux and alumina',
        'Reduction firing and heat work',
      ],
      words: 1555,
      readMins: 8,
      addedOn: '2026-10-25',
      blocks: [
        {
          kind: 'para',
          text: 'Fired clay is one of humanity\'s oldest technologies — fired figurines survive from the last ice age, older than agriculture, metals or writing — and it is still the most democratic: the raw material is essentially mud. Ceramics is the craft of shaping that mud and then, in the kiln, changing its chemistry permanently: heat drives out water and, at higher temperatures, begins vitrification, the partial fusing of the body into something dense, hard and stone-like. No other art has a comparable moment of total commitment — once the kiln cools, what happened in the kiln happened.',
        },
        {
          kind: 'para',
          text: 'This lesson walks the potter\'s full chain — clay bodies, handbuilding and wheel, firing cycles and kiln atmospheres, and the three-ingredient logic of glaze — and then looks across cultures at what fired clay has meant. It follows directly on Sculpture Fundamentals, which introduced modeling and armatures; clay is that process, plus fire.',
        },
        {
          kind: 'callout',
          title: 'Why this matters',
          text: 'Ceramics sits exactly on the fault line between art and craft, and every culture has answered the question differently — Chinese imperial kilns, Greek vase painters, Japanese tea masters, the Arts and Crafts revival. Studying it means studying both chemistry and civilization at once, and the kiln, which no eye can see into, makes every firing a genuine experiment.',
          tone: 'insight',
        },
        { kind: 'heading', text: 'Bodies, Building and the Wheel' },
        {
          kind: 'para',
          text: 'The first decision is the clay body. Earthenware, fired low, remains porous and terra-cotta warm — humanity\'s default pottery. Stoneware, fired higher, vitrifies enough to ring when struck and to hold water even unglazed; it is the workhorse of durable ware. Porcelain, built on kaolin and fired highest of all, goes white and, thinned, translucent at the wall — demanding, unforgiving and, historically, guarded by China for centuries. Every body shrinks as it dries and shrinks again in firing, takes additions poorly unless they are scored and slipped into place, and rewards wedging — the spiral kneading that evens moisture and drives out the air bubbles that would otherwise burst as steam in the kiln.',
        },
        {
          kind: 'para',
          text: 'Humanity made pots for millennia before the wheel, with three techniques that still carry the field. Pinch: a thumb into a ball of clay, the wall rotated and thinned between the fingers — every potter\'s first pot. Coil: ropes of clay stacked, pressed and blended, stroke by stroke — the technique of Pueblo potters in the American Southwest, who build large jars with no wheel at all, and of village potters across West Africa. Slab: sheets rolled and joined — soft slabs draped over molds for curve, leather-hard slabs cut and assembled for architecture. All joining obeys one commandment: score both surfaces, wet them with slip, press. Drying passes through stages — plastic, then leather-hard, when a pot can be trimmed, carved and handle-attached, then bone-dry greenware, fragile as a cracker and ready for the kiln.',
        },
        {
          kind: 'para',
          text: 'The potter\'s wheel is a machine for making clay lie symmetrically about an axis, and centering is its gate skill — physics explains the difficulty, since any asymmetry in a spinning mass is amplified into wobble until the clay is pressed truly to the axis. Then the sequence: open the center, pull the walls in passes, collar the form inward where wanted, and dry the pot to leather-hard for trimming — cutting the foot ring and attaching a pulled handle. A wheel-thrown cylinder with even walls is the beginner\'s honest trophy; every round form descends from it.',
        },
        {
          kind: 'example',
          title: 'Worked Example',
          steps: [
            'Wedged clay weighed out — a few hundred grams for a mug — seated on the wheel head and centered under both hands until it runs dead true.',
            'Opened and pulled into a cylinder of even wall thickness; wire-cut free, dried under plastic to slow it, then air-dried to leather-hard.',
            'Trimmed: pot inverted on the wheel, the foot ring cut and the base cleaned; a handle pulled from a wedge of clay and attached at leather-hard with scored, slipped joints.',
            'Bone dry — a day or days, depending on the air — then bisque-fired: a first, lower firing that leaves the ware porous enough to drink glaze but strong enough to handle.',
            'Glaze applied — dipped or poured — after waxing the foot so it cannot weld itself to the kiln shelf; the porous bisque drinks the wet glaze into an even coat.',
            'Glaze-fired to the body\'s maturity; after cooling the foot is stoned smooth, and the mug is at last a functional object, glaze fused to clay permanently.',
          ],
        },
        { kind: 'heading', text: 'Fire, Chemistry and Tradition' },
        {
          kind: 'para',
          text: 'The kiln does not simply get hot; it does heat work — the combined effect of temperature and time — which is why potters read firing not by a thermometer alone but by pyrometric cones, slender clay pyramids formulated to bend when the work is done. The standard chain is bisque, then glaze fire at the body\'s maturity. Atmosphere matters as much as heat: an electric kiln fires in oxidation, while fuel kilns can fire in reduction — burners starved of air so the flame strips oxygen from the glaze\'s metal oxides — the trick behind copper reds and the jade green of celadon. Beyond the standard lie the firing cultures: raku, pulled glowing into combustibles (a Japanese tea-ware tradition the West turned into performance); wood firing, where flying ash melts into glaze over days; and pit firing, whose smoke-clouds are the oldest decoration there is.',
        },
        {
          kind: 'para',
          text: 'Glaze is a glass engineered to melt onto and grip a clay body, and its recipe logic is three ingredients. Silica is the glass itself, but it needs enormous heat to melt alone, so fluxes (feldspar, limestone, wood ash) lower the melting point and alumina stiffens the melt so it stays on the pot instead of running onto the shelf: too little and the glaze pours, too much and it goes matte. Colorants ride on this chassis — iron for celadons and honey browns, copper for green or, in reduction, red; cobalt for blue; chrome with tin for pinks. The classic faults are readable chemistry: crazing, a network of fine cracks, means glaze and body shrink at different rates; shivering, glaze chipping off, is the mismatch reversed; pinholes and crawling report trapped gases and surface tension. Every serious potter keeps test tiles — glaze is chemistry learned by fired example.',
        },
        {
          kind: 'para',
          text: 'The cultures, briefly, because they are the deepest lesson. China made porcelain an imperial industry at Jingdezhen, a city of kilns; Korea answered with the inlaid celadons of the Gory court. Japan let the tea ceremony overturn finish itself: rough, asymmetrical, wood-fired tea bowls became treasures — the aesthetic of the humble and incomplete — and the twentieth-century mingei movement led by Yanagi Soetsu made anonymous folk craft a subject of reverence. Greek black-figure and red-figure vases were painting in refined slip, fixed by a brilliant three-phase firing of oxidation, reduction and re-oxidation that turned one slip black and left the other red. The Islamic world invented lusterware, a metallic film refired over the glaze, and tiled its architecture (see World Art Traditions). In the American Southwest, Maria and Julian Martinez developed black-on-black ware, and the studio potter Bernard Leach, heir to William Morris\'s Arts and Crafts, carried hand-made ware back to the industrial kitchen. Fired clay is where civilizations leave their ordinary fingerprints — every one of these traditions is also a dinner service.',
        },
        { kind: 'heading', text: 'Key Terms' },
        {
          kind: 'terms',
          items: [
            { term: 'Clay body', def: 'A blend of clays and minerals — earthenware, stoneware or porcelain — with its own firing range.' },
            { term: 'Wedging', def: 'Spiral kneading that homogenizes clay and removes trapped air before working.' },
            { term: 'Bisque', def: 'The first, lower firing that leaves ware strong yet porous, ready to absorb glaze.' },
            { term: 'Pyrometric cone', def: 'A slender clay pyramid formulated to bend at a given heat work, used to read a kiln.' },
            { term: 'Reduction firing', def: 'A fuel-kiln atmosphere starved of oxygen, which strips oxygen from glaze colorants.' },
            { term: 'Vitrification', def: 'The partial fusing of a clay body into a dense, glassy, stone-like structure at high temperature.' },
          ],
        },
        { kind: 'heading', text: 'Check Your Understanding' },
        {
          kind: 'para',
          text: 'Answer from the chain of process — body, build, fire, glaze, fire again — and from the three-ingredient logic of the glaze itself.',
        },
        {
          kind: 'quiz',
          items: [
            {
              q: 'Which clay body fires highest and turns white and, when thin, translucent?',
              options: ['Earthenware', 'Stoneware', 'Terra cotta', 'Porcelain'],
              answer: 3,
              explain: 'Porcelain, built on kaolin, matures at the top of the firing range and transmits light through a thin wall.',
            },
            {
              q: 'Bisque firing, before glazing, exists mainly to:',
              options: ['Melt the glaze onto the pot', 'Give ware strength while leaving it porous enough to take glaze', 'Fully vitrify the body', 'Burn out the grog'],
              answer: 1,
              explain: 'After bisque, ware handles without breaking yet still drinks water — exactly what even glaze application needs.',
            },
            {
              q: 'In a reduction atmosphere, copper colorants in glaze characteristically turn:',
              options: ['Blue', 'Green', 'Red', 'Black'],
              answer: 2,
              explain: 'The starved flame pulls oxygen from the copper oxide, producing the celebrated reduction reds of Chinese and later traditions.',
            },
            {
              q: 'In glaze chemistry, alumina\'s job is to:',
              options: ['Form the glass itself', 'Lower silica\'s melting point', 'Supply the color', 'Stiffen the melt so the glaze stays on the pot'],
              answer: 3,
              explain: 'Silica is the glass, flux melts it, and alumina stabilizes — too little and the glaze runs, too much and it goes matte.',
            },
          ],
        },
        {
          kind: 'callout',
          title: 'Where to go next',
          text: 'Return to Sculpture Fundamentals for form in the round, and to World Art Traditions for the cultures sampled in the last section. If you can get near a kiln at all, wedge real clay: the hands learn in one evening what reading takes a chapter to say.',
          tone: 'path',
        },
      ],
    },
  ];
