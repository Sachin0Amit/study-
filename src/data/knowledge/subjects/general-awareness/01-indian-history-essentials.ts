/**
 * Knowledge Universe — General Awareness — Chapter 01: Indian History Essentials
 * 1 lesson · ~2,028 words
 * field: General Awareness
 * legacy sources: aptitude.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [History Essentials]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 ga-history-landmark-events — Landmark Events in Indian and World History: The Recall Ladder
 */
import type { KnowledgeTopic } from '../../types'

export const generalAwarenessCh01: KnowledgeTopic[] = [
  // ================================================================
  // GENERAL AWARENESS — Ch2 Indian History Essentials
  // §2.6 — landmark events at the recall layer (the recall ladder
  // for static history: dates, sequences, causes).
  // Carve: the Indian History deep books own the NARRATIVE and the
  // historiography (causation debates, sources, interpretations).
  // This lesson owns the rapid-recall evergreen map — the event
  // pegs, chains and cause→event→consequence triples that
  // awareness sections examine. Greps 'landmark events', 'recall
  // ladder': zero knowledge hits.
  // ================================================================
  {
    id: 'ga-history-landmark-events',
    title: 'Landmark Events in Indian and World History: The Recall Ladder',
    domain: 'Aptitude & Test Preparation',
    field: 'General Awareness',
    branch: 'History Essentials',
    tier: 'core',
    concepts: [
      'the period scaffold: ancient, medieval, modern, independence, post-independence',
      'the independence-movement milestone chain as one connected story',
      'world-history landmark clusters: revolutions, world wars, decolonization',
      'cause, event, consequence: storing events as triples instead of lone dates',
      'century-pegging and the two-digit year compression',
      'frequently probed landmarks: firsts, founders, battles and acts',
      'post-independence milestones: the republic\u2019s own landmark run',
      'the depth pointer: where the narrative version lives',
    ],
    words: 2028,
    readMins: 10,
    addedOn: '2026-11-01',
    blocks: [
      {
        kind: 'para',
        text: 'General-awareness sections do not examine history as historians know it — they examine it as a recall map: which battle, which year, which first, in what order. Law-entrance general-knowledge papers, defence-academy ability tests, recruitment screenings and civil-services preliminary papers all draw from the same evergreen pool of roughly two hundred landmark events, and candidates lose marks not because they never read the material but because they store it as scattered dates instead of a connected structure. This lesson builds the structure: a period scaffold, one connected chain for the independence movement, the world-history clusters, and a storage format — the cause-event-consequence triple — that makes every peg answer three questions instead of one.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'History questions in awareness sections are the purest recall marks on the paper: no reasoning, no elimination — you either hold the peg or you do not. They are also the cheapest marks to secure permanently, because the landmark pool is stable across years: the same two hundred events, re-asked in rotation. An evening invested in the ladder below pays for every screening test you will ever sit.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The period scaffold is the filing cabinet: ancient India (Harappan cities in their mature phase around 2600\u20131900 BCE \u2014 Mohenjo-daro, Harappa, Dholavira; Vedic culture; the Mauryan empire founded by Chandragupta around 322 BCE and reaching its peak under Ashoka, whose Kalinga war of 261 BCE turned him to dhamma; the Gupta era from about 320 CE, the classical golden age of mathematics and art), medieval India (the Delhi Sultanate from 1206 under Qutb al-Din Aibak; the Mughal empire opened by Babur at the first battle of Panipat, 1526; Akbar\u2019s long reign 1556\u20131005; the Taj Mahal begun under Shah Jahan around 1632), modern India (colonial trade becoming rule \u2014 Plassey, 1757, Clive\u2019s victory over Siraj-ud-Daulah; the revolt of 1857; the rise of the national movement), the independence era, and the republic (Constitution in force 26 January 1950). Every new fact you learn files into one shelf of this cabinet \u2014 and retrieval doubles when the shelf is explicit.',
      },
      {
        kind: 'para',
        text: 'The independence-movement chain deserves its own connected treatment, because it is the single most-probed span in Indian awareness papers, and because its events cause one another \u2014 remembering the chain replaces remembering the dates. The Indian National Congress is founded (1885, on Hume\u2019s initiative, first session under W. C. Bonnerjee). Curzon partitions Bengal (1905) \u2014 the Swadeshi and Boycott response is born, and the Muslim League follows (1906). The Rowlatt Act and the Jallianwala Bagh massacre (1919) turn constitutional protest into mass anger; Gandhi answers with Non-Cooperation (1920\u201322), withdrawn after Chauri Chaura. The Simon Commission (1928, all-white, \u201cSimon Go Back\u201d) and the Purna Swaraj resolution (1929, Lahore, under Jawaharlal Nehru) set the stage for the Dandi March and Civil Disobedience (1930). The Government of India Act (1935) reshapes provincial politics; the Quit India movement (1942, \u201cDo or Die\u201d) is the final mass surge; Independence and Partition arrive in 1947; the Republic completes the story on 26 January 1950 \u2014 a date chosen to honour Purna Swaraj day. Learn the chain as a causal story told aloud in ninety seconds; the dates ride along for free.',
      },
      {
        kind: 'figure',
        caption: 'The independence-movement chain: each event provokes the next — partition of Bengal breeds Swadeshi, Rowlatt breeds Non-Cooperation, Simon breeds Purna Swaraj, which breeds Dandi and Quit India, ending in Independence and the Republic.',
        afterConcept: 2,
        svg: `<svg viewBox="0 0 820 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chained timeline of the Indian independence movement">
  <style>.y{font-family:Georgia,serif;font-size:13px;font-weight:bold;fill:#e11d48}.e{font-family:Georgia,serif;font-size:12px;fill:#3f3f46}.lnk{stroke:#8a8a93;stroke-width:2;fill:none}</style>
  <line x1="40" y1="270" x2="790" y2="270" stroke="#8a8a93" stroke-width="2.4"/>
  ${[[40,'1885','Congress founded'],[160,'1905','Bengal partition; Swadeshi'],[290,'1919','Rowlatt; Jallianwala Bagh'],[420,'1920','Non-Cooperation'],[540,'1930','Dandi March; Civil Disobedience'],[660,'1942','Quit India'],[760,'1947','Independence + Republic 1950']].map(([x,y,t],i) => '<circle cx="' + x + '" cy="270" r="6" fill="#3f3f46"/><text class="y" x="' + x + '" y="' + (240 - (i%2)*40) + '" text-anchor="middle">' + y + '</text><text class="e" x="' + x + '" y="' + (258 - (i%2)*40) + '" text-anchor="middle">' + t + '</text>').join('')}
  <text class="e" x="410" y="300" text-anchor="middle">each event provokes the next — learn the chain, and the dates ride along</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'World-history landmarks cluster, and clusters are easier to recall than isolated items. The revolutions: French (1789, liberty-equality-fraternity, the Bastille) and Russian (1917, the Bolsheviks under Lenin). The world wars: the first 1914\u201318 (assassination at Sarajevo the trigger; Treaty of Versailles the settlement that planted the second), the second 1939\u201345 (German invasion of Poland the trigger; the United Nations, 1945, the institutional response). The Cold-War arc: the Berlin Wall built 1961 and fallen 1989, the Soviet Union dissolved 1991. Decolonization runs through it all: Asia and Africa\u2019s independence wave crests in 1947\u20131960, with India the largest single case. Store clusters as clusters \u2014 four dates and one story \u2014 and any question about any member retrieves the whole structure.',
      },
      {
        kind: 'para',
        text: 'The cause-event-consequence triple is the storage format that answers three question types per peg. Plassey (1757): cause \u2014 the East India Company\u2019s trade ambitions colliding with Siraj-ud-Daulah\u2019s resistance; event \u2014 Clive\u2019s army defeats him, aided by the Mir Jafar defection; consequence \u2014 Company revenue rights over Bengal, the foundation of Company rule in India. Kalinga (261 BCE): cause \u2014 Mauryan expansion under Ashoka; event \u2014 a bloody victory; consequence \u2014 Ashoka\u2019s remorse, dhamma, and the edicts that spread it. When a question asks \u201cwhy\u201d, \u201cwhen\u201d or \u201cwhat followed\u201d, the triple answers it \u2014 and building the triple during study is itself the encoding that makes recall stick.',
      },
      {
        kind: 'para',
        text: 'Century-pegging is the compression trick that halves the memorization: file each event by century with a two-digit year, and the scaffold carries the rest. Ancient: the 3rd century BCE belongs to the Mauryas (322, 261); the 4th century CE to the Guptas (320). Medieval: the 13th to the Sultanate (1206), the 16th to the Mughals (1526, 1556\u2013105). Modern: the 18th to Plassey (1757), the 19th to the revolt (1857) and the Congress (1885), the 20th to the movement\u2019s chain (1905\u20131947) and the Republic (1950). Practise recall in this order \u2014 century first, then the two-digit year \u2014 and the map becomes self-checking: a claim that the Congress was founded in 1785 fails the century test instantly.',
      },
      {
        kind: 'para',
        text: 'The frequently probed landmarks concentrate on four patterns: firsts (first President, first Indian in space, first university), founders (who founded the Sultanate, the Congress, the Mughal line), battles (Panipat\u2019s three \u2014 1526, 1556, 1761 \u2014 Plassey, Buxar 1764, Kalinga) and acts (the Regulating Act 1773, the Government of India Acts of 1858, 1909, 1919 and 1935 \u2014 the constitutional staircase to 1947). Build a one-page sheet per pattern; these four sheets, plus the chain and the clusters, are the working core of history awareness. Anything beyond them is narrative depth \u2014 valuable, and exactly where the deep books take over.',
      },
      {
        kind: 'para',
        text: 'Post-independence milestones complete the ladder, and the papers sample them steadily. The first general election (1951\u201352, the world\u2019s largest democratic exercise at the time) and the first President; the States Reorganisation Act (1956) redrawing the map on linguistic lines; the green revolution (late 1960s) and the bank nationalizations (1969); the atomic tests (1974, \u201cSmiling Buddha\u201d, and 1998) and the space programme\u2019s rise from the first satellite (1975) to the lunar and orbital missions of the 2000s and 2020s; the economic liberalization of 1991, the single most consequential economic landmark of the republic; and the constitutional amendments that recur in polity papers (the 42nd and 44th, 1976 and 1978, the mini-constitution and its correction). File these on the republic shelf beside the 1950 commencement \u2014 they are to post-independence questions what the movement chain is to the freedom struggle.',
      },
      {
        kind: 'example',
        title: 'Worked example — reading a question off the ladder',
        steps: [
          'The item: \u201cThe Non-Cooperation Movement was launched in response to which event?\u201d Options: the Partition of Bengal; the Rowlatt Act and Jallianwala Bagh; the Simon Commission; the Dandi March.',
          'Locate the span on the scaffold: Non-Cooperation is an independence-era event (20th century, movement chain).',
          'Walk the chain aloud: 1905 partition \u2192 Swadeshi \u2192 1919 Rowlatt and Jallianwala \u2192 1920 Non-Cooperation \u2192 1922 Chauri Chaura withdrawal \u2192 1928 Simon \u2192 1930 Dandi.',
          'The chain answers directly: Non-Cooperation (1920) follows the 1919 provocation \u2014 the Rowlatt Act and the Jallianwala Bagh massacre. The Simon Commission provokes the 1929 Purna Swaraj response; the Dandi March is a decade after Non-Cooperation began \u2014 both distractors sit at the wrong links.',
          'Note what made this a five-second item: not rote date recall, but chain position. Every \u201cin response to which event\u201d question in this syllabus is a chain-adjacency question.',
        ],
      },
      {
        kind: 'callout',
        title: 'Traps that cost real marks',
        text: 'Adjacent-link confusion is the history trap: setters pair each movement with the provocation of a NEIGHBOURING movement (Non-Cooperation \u2192 Simon Commission; Civil Disobedience \u2192 Rowlatt) because unstructured memory cannot order them. The three-Panipat confusion (1526 Babur, 1556 Akbar\u2019s forces, 1761 Abdali) punishes single-date storage. The century slip (1885 Congress read as 1858 or 1919 read as 1909) dies instantly under century-pegging. And the Republic trap \u2014 15 August 1947 (independence) versus 26 January 1950 (republic) \u2014 appears in some disguise on nearly every paper.',
        tone: 'warn',
      },
      {
        kind: 'terms',
        items: [
          { term: 'Period scaffold', def: 'The five-shelf filing cabinet \u2014 ancient, medieval, modern, independence, republic \u2014 into which every historical fact files.' },
          { term: 'Movement chain', def: 'The causal sequence 1885 \u2192 1905 \u2192 1919 \u2192 1920 \u2192 1930 \u2192 1942 \u2192 1947 \u2192 1950, stored as one story.' },
          { term: 'Landmark clusters', def: 'World-history groups stored together \u2014 revolutions, world wars, Cold-War arc, decolonization wave.' },
          { term: 'Cause-event-consequence triple', def: 'The storage unit that answers why-, when- and what-followed questions from one peg.' },
          { term: 'Century-pegging', def: 'Filing by century with a two-digit year, making the map self-checking against gross date errors.' },
          { term: 'Four patterns', def: 'Firsts, founders, battles and acts \u2014 the concentration points of history questions in awareness sections.' },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The Indian National Congress was founded in:',
            options: ['1857', '1885', '1905', '1919'],
            answer: 1,
            explain: '1885, on A. O. Hume\u2019s initiative, first session presided over by W. C. Bonnerjee. Century-pegging guards it: the 19th century holds the revolt (1857) and the Congress (1885); the movement\u2019s provocations belong to the 20th.',
          },
          {
            q: 'The Dandi March of 1930 was part of which movement?',
            options: ['Non-Cooperation', 'Civil Disobedience', 'Quit India', 'Swadeshi'],
            answer: 1,
            explain: 'The march to Dandi, breaking the salt law, opened the Civil Disobedience movement (1930). Chain position: it follows the Purna Swaraj resolution of 1929 \u2014 a decade after Non-Cooperation began and twelve years before Quit India.',
          },
          {
            q: 'Which battle transferred Bengal\u2019s revenues to the East India Company and began Company rule?',
            options: ['Buxar (1764)', 'Panipat (1526)', 'Plassey (1757)', 'Kalinga (261 BCE)'],
            answer: 2,
            explain: 'Plassey, 1757: Clive defeated Siraj-ud-Daulah (the Mir Jafar defection deciding it), and the Company gained revenue rights over Bengal \u2014 the triple\u2019s consequence leg. Buxar (1764) then formalized Diwani rights over Bengal, Bihar and Orissa.',
          },
          {
            q: 'The Quit India movement\u2019s call \u201cDo or Die\u201d was given in:',
            options: ['1920', '1930', '1942', '1947'],
            answer: 2,
            explain: 'August 1942, the final mass surge before independence, launched as the Cripps Mission talks collapsed. Chain neighbours: Government of India Act 1935 before it, Independence and Partition 1947 after it.',
          },
          {
            q: 'India\u2019s Constitution came into force on 26 January 1950 because that date commemorates:',
            options: ['Independence Day 1947', 'The Purna Swaraj declaration day of 1930', 'The Dandi March', 'The first Congress session'],
            answer: 1,
            explain: 'The Lahore session (December 1929) resolved Purna Swaraj, and 26 January 1930 was observed as Independence Day; the Constitution\u2019s commencement date honours it. 15 August 1947 is a different landmark entirely \u2014 the most-presented confusion pair in this syllabus.',
          },
          {
            q: 'The first battle of Panipat (1526) is associated with:',
            options: ['Akbar', 'Babur founding the Mughal empire', 'Abdali\u2019s victory', 'Sher Shah'],
            answer: 1,
            explain: 'Babur defeated Ibrahim Lodi at Panipat in 1526, founding the Mughal line; the second Panipat (1556) secured Akbar\u2019s succession; the third (1761) was Abdali\u2019s victory over the Marathas. Three battles, one place \u2014 store as a set.',
          },
          {
            q: 'Which of these is the correct cause-event-consequence reading of the Russian Revolution cluster?',
            options: ['1789 \u2194 French Revolution', '1917 \u2194 Bolshevik revolution under Lenin', '1945 \u2194 United Nations founding', '1989 \u2194 Berlin Wall falls'],
            answer: 1,
            explain: 'Cluster storage: revolutions = 1789 (French) and 1917 (Russian, Bolshevik); world wars = 1914\u201318 and 1939\u201345; the UN (1945) answers the second war; the Wall (1989) and the USSR\u2019s dissolution (1991) close the Cold War arc.',
          },
          {
            q: 'The Government of India Act that introduced provincial autonomy and reshaped the politics of the late 1930s was passed in:',
            options: ['1919', '1935', '1909', '1858'],
            answer: 1,
            explain: 'The 1935 Act \u2014 the last and largest of the constitutional staircase (1773 Regulating, 1858 Crown rule, 1909 Morley-Minto, 1919 Montagu-Chelmford, 1935) \u2014 which the Constitution of 1950 then replaced. Acts stored as a staircase answer every \u201cwhich act\u201d question by position.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'This lesson owns the recall map only. The narrative versions \u2014 what the freedom struggle meant, how Mauryan administration worked, why the revolt of 1857 failed \u2014 live in the Indian History and World History subjects of the Library, which this subject deliberately points to rather than duplicates. Within General Awareness, continue to Indian Art, Culture and Heritage (\u00a77), then the static-GK honours map, then the current-affairs engine that binds the evergreen layers to the news.',
        tone: 'path',
      },
    ],
  },
]
