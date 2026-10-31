/**
 * Knowledge Universe — Arabic — Chapter 01: Arabic Foundations
 * 1 lesson · ~1,298 words
 * field: Arabic
 * legacy sources: languages-literature.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Arabic Foundations]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 lang-arabic-foundations — Arabic Foundations: Roots, Script and Diglossia
 */
import type { KnowledgeTopic } from '../../types'

export const arabicCh01: KnowledgeTopic[] = [
  {
    id: "lang-arabic-foundations",
    title: "Arabic Foundations: Roots, Script and Diglossia",
    domain: "Languages & World Literature",
    field: "Arabic",
    branch: "Arabic Foundations",
    tier: "core",
    concepts: [
      "The triliteral root system",
      "Patterns: reusable word moulds",
      "The script: right to left, connected",
      "Short vowels left unwritten",
      "Sun and moon letters",
      "Diglossia: the standard and the dialects",
    ],
    words: 1280,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Arabic builds its vocabulary on an idea most languages never use: the root. Three consonants carry a core meaning, and patterns — fixed moulds of vowels and affixes — sculpt them into words. Kitāb, maktab, maktaba and kātib are all one root, K-T-B, “writing”, in four different jobs. Add a script that runs right to left and mostly writes consonants, plus a formal standard living beside a family of spoken dialects, and you have the three ideas that organise everything else about the language.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        tone: "insight",
        text: "Arabic gives roughly four hundred million people their first language across more than twenty countries, is one of the UN’s six official languages, and is the liturgical language of the Quran’s nearly two billion Muslims. And its root system is the most elegant word-engine among major languages: learn one root honestly, and a dozen words arrive pre-assembled.",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Take the triliteral root K-T-B, whose meaning core is writing. Kataba means “he wrote” — the bare past verb. Kitāb is “book”, the result of writing. Maktab is “office, desk” — literally the place where writing happens. Maktaba is “library, bookshop”, the place with a lot of it. Kātib is “writer, clerk”, the person who does it, and maktūb, “written”, also means “letter” and by extension “fate”. The root itself never appears alone — only slotted into patterns, which is why Arabic dictionaries are organised by root: you look up maktaba under K-T-B.",
      },
      { kind: "formula", name: "Root + pattern word formation", latex: "\\text{K-T-B} \\;\\text{+}\\; \\text{maCCaC} \\;\\longrightarrow\\; \\text{maktab}", meaning: "A triliteral root slots into a pattern: the root supplies the meaning core (“write”), the pattern supplies the category and shape (maCCaC, a noun of place), and the composite is a word — maktab, “place of writing”. Swap the root, keep the mould: D-R-S gives madrasa, “school”." },
      {
        kind: "para",
        text: "The script runs right to left, in a cursive that joins letters inside words — each letter has up to four shapes depending on position, but they are variations on one skeleton, learned once. There are 28 letters, no capitals, and three long vowels that are written (ā, ū, ī) — but the three short vowels, a, i and u, are normally left off the page entirely. The skeleton كتب might read kataba, “he wrote”, or kutiba, “it was written”. Diacritics called harakāt supply the vowels where they matter most — the Quran, children’s books, learner texts — but ordinary print expects the reader to fill them in from grammar and context, exactly as English readers choose the pronunciation of “read”.",
      },
      {
        kind: "para",
        text: "The definite article is al-, welded onto its word. Before the “sun” letters — t, n, r, s, sh, z and their kin — the l assimilates to the following sound: الشمس ash-shams, “the sun”, is pronounced with sh-sh, no l at all. “Moon” letters keep it: القمر al-qamar, “the moon”. The rule is automatic once the ear knows it, and it explains why transliterations swing between al-, as-, ar- and ash-.",
      },
      {
        kind: "para",
        text: "Charles Ferguson named diglossia in 1959, and Arabic was his exhibit A: a formal standard — Modern Standard Arabic, descended from Classical Arabic — coexists with a family of natively spoken vernaculars. The standard rules news, literature, formal speech and the Quran; Egyptian Arabic (Cairo’s film industry made it the most widely understood), Levantine, Gulf and Maghrebi rule the street and the kitchen. Children grow up speaking a dialect and meet the standard at school as a written register. The practical strategy: Modern Standard Arabic for reading and news, one dialect — usually Egyptian or Levantine — for speaking, and no illusions that one “Arabic” covers both.",
      },
      {
        kind: "para",
        text: "Grammar opens gently: there is no present-tense “to be” — البيت كبير (al-bayt kabīr), “the house big”, means “the house is big” — and possession is a chain, the iḍāfa: بيت الرجل (bayt al-rajul), “house of-the-man”, is “the man’s house”. The sounds include a family English lacks: خ kh as in Bach, a breathy ḥ, the pharyngeal ع ʿayn — a voiced squeeze deep in the throat — غ gh like a French r, a deep ق q, and the “emphatic” ṭ, ṣ and ḍ that darken neighbouring vowels. First phrases: السلام عليكم (as-salāmu ʿalaykum), “peace be upon you”, answered وعليكم السلام (wa ʿalaykumu s-salām); شكرا (shukran), thanks; من فضلك (min faḍlik), please; كم؟ (kam?), how much?; لا أفهم (lā afham), I don’t understand.",
      },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: given the root D-R-S, “study”, predict the words for lesson, school and teacher — then check the logic against the K-T-B family.",
        "Recall the governing ideas: roots never surface alone; patterns are reusable moulds; maCCaC names the place of the action.",
        "Apply it: dars, “lesson”, from the simple noun pattern; madrasa, “school”, from the place pattern — where studying happens; mudarris, “teacher”, from the pattern naming the one who makes the action happen.",
        "State the result: all three are filed under D-R-S in the dictionary, and madrasa sits in the same mould as maktaba — the pattern transferred, the root supplied new meaning. One root learned, a classroom of words received.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Travel across twenty-plus countries: greetings and numbers in the standard plus one dialect carry the day.",
        "Media: newspapers and satellite news run on Modern Standard Arabic — the written register is uniform from Rabat to Muscat.",
        "Quranic study: the classical register, fully vowel-marked, is the tradition’s core discipline.",
        "Vocabulary arithmetic: every new word reinforces the dozens of relatives sharing its root.",
        "Cross-linguistic credit: Arabic loanwords — algebra, algorithm, alcohol — are already in your English.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        tone: "warn",
        text: "Do not expect the short vowels on the page — supplying them is the reader’s job. Do not read left to right; the habit is deeper than you think. Do not assume one Arabic: the standard-only learner is silent in a Cairo café, and the dialect-only learner cannot read a newspaper. Do not treat the root as a word — it never stands alone. And do not pronounce the article of ash-shams as “al-shams” — the assimilation is not optional.",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "root", def: "A usually three-consonant skeleton carrying a meaning core, like K-T-B, “write”." },
        { term: "pattern", def: "A fixed mould of vowels and affixes that turns a root into a word of a given category." },
        { term: "diglossia", def: "The coexistence of a formal standard and native vernaculars with distinct social jobs." },
        { term: "abjad", def: "A script writing consonants, with vowels mostly left to the reader." },
        { term: "ḥarakāt", def: "Optional diacritics marking short vowels, used in the Quran and learner texts." },
        { term: "sun and moon letters", def: "Letter classes deciding whether the article al- assimilates (ash-shams) or stays (al-qamar)." },
        { term: "iḍāfa", def: "The possessive chain “X of Y”, as in bayt al-rajul, “the man’s house”." },
      ] },
      { kind: "heading", text: "Check Yourself" },
      { kind: "quiz", items: [
        {
          q: "Maktab and maktaba are both filed in the dictionary under…",
          options: ["M", "the root K-T-B", "the pattern maCCaC", "separate unrelated entries"],
          answer: 1,
          explain: "Root, not first letter: Arabic dictionaries are organised by consonant skeleton.",
        },
        {
          q: "In ordinary printed Arabic, the short vowels are…",
          options: ["always written", "normally unwritten, supplied by the reader", "written only at word ends", "written in red ink"],
          answer: 1,
          explain: "Harakāt appear in the Quran and learner texts; ordinary print leaves the vowels to grammar and context.",
        },
        {
          q: "الشمس (ash-shams, “the sun”) shows that…",
          options: ["sh is a moon letter", "the article’s l assimilates before sun letters", "Arabic has no article", "shams is plural"],
          answer: 1,
          explain: "Sun letters assimilate the l of al-; moon letters like q leave it standing.",
        },
        {
          q: "Diglossia in Arabic means…",
          options: ["two alphabets", "a formal standard for written life alongside natively spoken dialects", "men and women speak differently", "poetry versus prose registers"],
          answer: 1,
          explain: "Ferguson’s term: Modern Standard Arabic and the vernaculars divide the labour of daily life.",
        },
      ] },
      {
        kind: "callout",
        title: "Where to go next",
        tone: "path",
        text: "Prerequisites: none — start here for Arabic. Follow with the letter forms in their four positions, then verb patterns in past and present. The writing-systems lesson classifies Arabic’s script among the world’s systems, and the Hindi lesson shows a script built on the opposite principle.",
      },
    ],
  },
]
