/**
 * Knowledge Universe — Mandarin Chinese — Chapter 03: Classical Canon & Recitation
 * 1 lesson · ~1,612 words
 * field: Mandarin Chinese
 * legacy sources: x34-final-orphan-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Classical Canon & Recitation]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 lang-classical-chinese-canon — The Classical Chinese Canon: Famous Lines and Exact Recall
 */
import type { KnowledgeTopic } from '../../types'

export const mandarinCh03: KnowledgeTopic[] = [
  {
    id: 'lang-classical-chinese-canon',
    title: 'The Classical Chinese Canon: Famous Lines and Exact Recall',
    domain: 'Languages & World Literature',
    field: 'Mandarin Chinese',
    branch: 'Classical Canon & Recitation',
    tier: 'intermediate',
    concepts: [
      'Set-text recitation: accurate written production, not recognition',
      'The prose canon: Xunzi, Han Yu, Su Shi',
      'The verse canon: Qu Yuan to Li Qingzhao',
      'Character-level traps: homophones, look-alikes, dropped particles',
      'Bidirectional context-chain recall',
      'The read-copy-recite-write practice cycle',
    ],
    words: 1612,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      { kind: 'heading', text: 'What recitation papers actually ask' },
      {
        kind: 'para',
        text:
          "The set-text recitation paper tests one skill with total strictness: producing a famous line from a canonical text, character-perfect, in written Chinese. The grading rule is unforgiving — a line with one wrong character, one added character or one dropped character scores nothing, however well the rest is written. This is why recitation rewards a different kind of study from reading comprehension. Comprehension forgives approximation; production punishes it. The paper's questions usually supply one half of a couplet or passage and ask for the other, so the unit of memory is not the text but the line-to-line join: given the previous line, produce the next, and sometimes the reverse.",
      },
      {
        kind: 'para',
        text:
          "Why these texts, and why by heart? The canon — Xunzi's essay on learning, Han Yu's defence of teachers, Su Shi's red-cliff rhapsody, the great Tang and Song poems — is the shared cultural memory that educated Chinese speakers quote to each other. A well-placed 名句 lands like a proverb: it compresses an argument into a line everyone recognises. Memorising the canon is therefore not an arbitrary hurdle; it is how a reader joins the conversation that has been running for two thousand years. And because the lines are fixed, the paper can test them with absolute objectivity — which is exactly what makes the character-level craft below worth mastering.",
      },
      { kind: 'heading', text: 'The prose canon' },
      {
        kind: 'para',
        text:
          "Start with Xunzi's 劝学 (Encouraging Learning), the classic argument that learning remakes people the way craft remakes material. Its most-quoted lines are the dye-vat image — 青，取之于蓝，而青于蓝；冰，水为之，而寒于水 (blue is drawn from the indigo plant yet bluer than the plant; ice is made of water yet colder than water) — the steps argument, 故不积跬步，无以至千里；不积小流，无以成江海 (without piling up half-steps you cannot reach a thousand li; without gathering small streams you cannot form river and sea) — and the carving couplet, 锲而舍之，朽木不折；锲而不舍，金石可镂 (carve and give up, rotten wood will not cut; carve and persist, metal and stone can be engraved). Note the trap in the last pair: 舍 (give up) and 镂 (engrave) are the two characters papers love to swap.",
      },
      {
        kind: 'para',
        text:
          "Han Yu's 师说 (On Teachers) opens with the definition every student eventually writes: 师者，所以传道受业解惑也 — a teacher is one who transmits the Way, passes on learning and untangles confusion. The character trap is built into the canonical text itself: it is 受业 with 受 (receive), not the modern-looking 授业 with 授 (bestow) — the received text uses 受, and this was verified character-by-character against the Wikisource edition during the writing of this lesson. Two more joins from the same essay recur constantly: 是故无贵无贱，无长无少，道之所存，师之所存也 (where the Way is, there the teacher is) and the compact 圣人无常师 (sages have no constant teacher).",
      },
      {
        kind: 'para',
        text:
          "Su Shi's 赤壁赋 (Rhapsody on the Red Cliff) owns the riverbank imagery: 清风徐来，水波不兴 (a clear breeze comes gently; the water barely ripples), 白露横江，水光接天 (white dew spans the river; water-light meets sky), and the great reflection on time, 逝者如斯，而未尝往也 (it flows away like this, yet has never gone). Close with the consolation passage, 惟江上之清风，与山间之明月 (only the clear breeze on the river and the bright moon between the hills), which the essay then spends lines claiming for anyone willing to receive them. The recitation traps here are the quiet particles — 之，而，也 — which are short, unstressed, and exactly what an unpracticed hand drops.",
      },
      { kind: 'heading', text: 'The verse canon' },
      {
        kind: 'para',
        text:
          "Qu Yuan's 离骚 (Li Sao) contributes the line that heads every anthology of perseverance: 路漫漫其修远兮，吾将上下而求索 (the road is long and far; I will search high and low) — the particle 兮 marks it as Chu-style verse and is the character most often dropped. Li Bai's 蜀道难 gives the refrain 蜀道之难，难于上青天 (hard is the road to Shu — harder than climbing the blue sky), and his 行路难 turns the same despair into resolve: 长风破浪会有时，直挂云帆济沧海 (a time will come to ride the long wind and break the waves; I will hoist straight sail and cross the vast sea — mind the 沧 in 济沧海, the dark-blue sea, not its homophone). Du Fu's 登高, the model seven-character regulated poem, supplies 无边落木萧萧下，不尽长江滚滚来 (boundless falling leaves rustle down; the endless Yangtze rolls on) — 萧萧 is the sound of leaves, not the river character 潇.",
      },
      {
        kind: 'para',
        text:
          "Bai Juyi's 琵琶行 owns the empathy line of the whole tradition: 同是天涯沦落人，相逢何必曾相识 (both of us drifters at the sky's edge; meeting, why need we have known each other before?), with the earlier portrait 千呼万唤始出来，犹抱琵琶半遮面 (a thousand calls, ten thousand summons, before she comes out, still holding the pipa half across her face). Li Shangyin's 锦瑟 opens with its riddle — 锦瑟无端五十弦，一弦一柱思华年 — and closes in the word papers adore: 只是当时已惘然 (only that then it was already 惘然, lost in bewilderment) — 惘, with the heart radical, not the look-alike. Li Yu's 虞美人 asks the question every paper asks: 问君能有几多愁？恰似一江春水向东流 (how much sorrow? just one river of spring water flowing east). Su Shi's 念奴娇·赤壁怀古 opens with 大江东去，浪淘尽，千古风流人物 (the great river runs east; its waves have washed away the heroes of a thousand ages), and Li Qingzhao's 声声慢 begins in the fourteen characters no one forgets once written correctly: 寻寻觅觅，冷冷清清，凄凄惨惨戚戚 (searching, seeking; cold, clear; grief upon grief upon sorrow).",
      },
      {
        kind: 'callout',
        title: 'The five traps that cost marks',
        tone: 'warn',
        text:
          "Homophone swaps: 沧海 not 仓海; 萧萧 not 潇潇 for falling leaves. Near-miss pairs: 受业 in 师说, not 授业. Dropped particles: 兮 in Li Sao, 也 and 而 in prose. Look-alikes: 惘然 with the heart radical. And character components: 镂 in 金石可镂 carries the metal radical. Every one of these is a full line lost to a single stroke.",
      },
      { kind: 'heading', text: 'The craft of exact recall' },
      {
        kind: 'para',
        text:
          "Exact recall is trainable, and the method is older than the papers: understand, then bind, then write. Understand first — a line memorised as sound is fragile, but a line memorised as an image (blue dye bluer than the plant; a river of sorrow flowing east) survives years. Bind next: practise the join in both directions, given the previous line produce the next, and given the next reproduce what came before, because papers set both forms. Then write: recognition is not production, and only handwriting from memory exposes the strokes your eye forgives. Finish each session by writing the full line unprompted and checking character by character against the text — the check is where the traps above get caught.",
      },
      {
        kind: 'para',
        text:
          "Space the practice. The forgetting curve is steepest in the first days, so a line learned on Monday must be rewritten Wednesday, next Monday, and a month out — four short sessions beat one long one. Group lines by trap type in review: one round of homophones (沧/仓，萧/潇，青/清), one of particles (兮，也，而，其), one of look-alikes (惘，镂，戚). And rehearse aloud with the meaning in mind: the fourteen characters of 声声慢's opening are almost impossible to mis-order once the triple rhythm of the reduplication is in the ear — 寻寻觅觅 (two), 冷冷清清 (two), 凄凄惨惨戚戚 (three) — sound, then silence, then sorrow.",
      },
      {
        kind: 'example',
        title: 'A recall card for the Encouraging Learning set',
        steps: [
          'Image: a vat of indigo — write 青，取之于蓝，而青于蓝 and underline the two 蓝 characters, one plant and one colour.',
          'Join: from dye to steps — 故不积跬步，无以至千里；不积小流，无以成江海; check the pair 跬/流 and the parallel 无以 twice.',
          'Join: from steps to carving — 锲而舍之，朽木不折；锲而不舍，金石可镂; circle 舍 and 镂 and note the metal radical.',
          'Cover the card, write all three lines from the images alone, then verify character by character — any wrong stroke sends the line back to the next session.',
        ],
      },
      {
        kind: 'terms',
        items: [
          { term: '名篇名句', def: "Famous passages and lines — the fixed canon from which recitation questions are drawn." },
          { term: '上句 / 下句', def: "The previous and following line of a couplet or passage; papers prompt one and ask for the other, in both directions." },
          { term: '兮', def: "The Chu-verse particle in Li Sao's lines; short, unstressed, and the character most often dropped in writing." },
          { term: '律诗', def: "The regulated verse form of eight lines; Du Fu's Climbing High is its model, and its parallel couplets are recitation favourites." },
          { term: '通假字', def: "A borrowed character in the received classical text — the reason Shishuo's 受业 keeps 受 where modern usage expects 授." },
        ],
      },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Complete the join from Xunzi: 故不积跬步，无以至千里；不积小流，＿＿＿',
            options: [
              '无以成江海',
              '无以至江海',
              '无以到江海',
              '不成江海',
            ],
            answer: 0,
            explain:
              'The parallel repeats 无以 in both halves — 无以至千里，无以成江海 — and the verb is 成 (form), matching the small streams that form river and sea.',
          },
          {
            q: 'In the canonical text of 师说, the opening definition 师者，所以传道＿＿解惑也 contains which characters?',
            options: [
              '授业 — the modern form with the bestow radical',
              '受业 — the received text uses 受',
              '授業 — the traditional-script form',
              '受業 in simplified script',
            ],
            answer: 1,
            explain:
              'The received text reads 传道受业解惑也 with 受 (receive); verified against the Wikisource edition, and it is the classic character trap of this passage.',
          },
          {
            q: '大江东去，浪淘尽，千古风流人物 opens which work, and who wrote it?',
            options: [
              '赤壁赋 — Su Shi',
              '念奴娇·赤壁怀古 — Su Shi',
              '虞美人 — Li Yu',
              '蜀道难 — Li Bai',
            ],
            answer: 1,
            explain:
              'The line opens Su Shi\'s ci poem Nian Nu Jiao: Meditation on the Past at Red Cliff; the rhapsody Fu on the Red Cliff begins instead with 清风徐来，水波不兴.',
          },
          {
            q: 'Which line is written with the correct characters?',
            options: [
              '无边落木潇潇下，不尽长江滚滚来',
              '长风破浪会有时，直挂云帆济仓海',
              '无边落木萧萧下，不尽长江滚滚来',
              '路曼曼其修远兮，吾将上下而求索',
            ],
            answer: 2,
            explain:
              'Falling leaves rustle 萧萧 (the plant-sound character), the sea of 济沧海 is 沧, and the standard curriculum form of Li Sao is 路漫漫其修远兮 — the other three each hide one wrong character.',
          },
        ],
      },
      { kind: 'heading', text: 'Key takeaways' },
      {
        kind: 'list',
        items: [
          'Recitation is production: one wrong, added or dropped character fails the line, so train the hand, not just the eye.',
          'Learn the joins both ways — previous line to next and next back to previous — because papers set both directions.',
          'Anchor every line to an image and a rhythm before memorising the characters; sound alone fades, meaning does not.',
          'Drill the five trap types separately: homophones, near-misses, dropped particles, look-alikes, and radical components.',
          'Space the practice across days and rewrite each line unprompted at every session — the character-by-character check is where marks are saved.',
        ],
      },
    ],
  },
]
