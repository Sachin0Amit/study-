/**
 * Knowledge Universe — Art History — Chapter 04: The Historian's Craft
 * 1 lesson · ~1,455 words
 * field: Art History
 * legacy sources: x38-arts-history-visual-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [The Historian's Craft]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 arth-historians-craft — How Art Historians See: Formal Analysis and Iconography
 */
import type { KnowledgeTopic } from '../../types'

export const artHistoryCh04: KnowledgeTopic[] = [
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
]
