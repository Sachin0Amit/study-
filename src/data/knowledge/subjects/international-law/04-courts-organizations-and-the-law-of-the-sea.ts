/**
 * Knowledge Universe — International Law — Chapter 04: Courts, Organizations & the Law of the Sea
 * 1 lesson · ~1,698 words
 * field: International Law
 * legacy sources: x48-all-subjects-split-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Institutions & Dispute Settlement]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 law-international-order-courts — Courts, Organizations and the Law of the Sea: How International Order Is Built
 */
import type { KnowledgeTopic } from '../../types'

export const internationalLawCh04: KnowledgeTopic[] = [
  {
    id: 'law-international-order-courts',
    title: 'Courts, Organizations and the Law of the Sea: How International Order Is Built',
    domain: 'Law & Governance',
    field: 'International Law',
    branch: 'Institutions & Dispute Settlement',
    tier: 'intermediate',
    concepts: [
      'The United Nations Charter system and its principal organs',
      'The International Court of Justice: composition, contentious and advisory jurisdiction',
      'Article 38 of the ICJ Statute: the classic list of sources',
      'The International Criminal Court vs the ICJ: individuals, not states',
      'The Rome Statute crimes and the complementarity principle',
      'UNCLOS maritime zones: territorial sea, contiguous zone, EEZ, continental shelf, high seas',
      'The Geneva Conventions and international humanitarian law',
    ],
    words: 1698,
    readMins: 8,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'International law has no world government, no global police and no legislature that can bind an unwilling great power. What it has instead is an architecture of courts, organizations and conventions — a system built mostly since 1945 in which states consent, in advance and in writing, to rules and to the bodies that interpret them. This lesson walks through that architecture: the United Nations system, the two great courts at The Hague, the law of the sea, and the humanitarian law of armed conflict. Knowing how these pieces fit together is what turns a list of treaties into a mental map of world order.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Headline events — a maritime standoff, a war-crimes warrant, a judgment on a border dispute — are unreadable without this machinery. Every dispute between states that reaches a courtroom passes through one of the institutions in this lesson, and their jurisdictional tricks (consent, complementarity, zone boundaries) decide who can sue whom, and win.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'The Charter System' },
      {
        kind: 'para',
        text: 'The United Nations was founded by the Charter of 1945, a treaty that functions as the constitution of the organized world order. Its six principal organs include the General Assembly, where every member state has one vote; the Security Council, whose fifteen members include five permanent ones wielding the veto and whose decisions on peace and security are the only UN outputs that are formally binding on all members; the Secretariat; the Economic and Social Council; the Trusteeship Council, now dormant; and the International Court of Justice, the principal judicial organ. The Charter\'s core principles — sovereign equality of members, prohibition on the use of force except in self-defence or with Council authorization, and non-intervention — are the background rules against which everything else in this lesson is read.',
      },
      {
        kind: 'para',
        text: 'Around the principal organs orbits a wider family: specialized agencies like the World Health Organization and the International Labour Organization, treaty bodies that monitor compliance with human-rights conventions, and the international financial institutions. None of these can legislate for the world. What they can do is pool state consent into standing institutions, so that cooperation does not have to be reinvented for every crisis.',
      },
      { kind: 'heading', text: 'The International Court of Justice' },
      {
        kind: 'para',
        text: 'The ICJ sits at the Peace Palace in The Hague, with fifteen judges elected for nine-year terms by the General Assembly and Security Council voting separately. Its jurisdiction is the part everyone trips over: the court is not a supreme court of the world, because states must consent to be sued. Consent can be given in advance, by a declaration under Article 36(2) of the ICJ Statute accepting the court\'s compulsory jurisdiction — dozens of states have made such declarations, many with sweeping reservations — or case by case through a special agreement, or through a compromissory clause in a treaty. Once jurisdiction attaches, the judgment is final and binding on the parties, and Article 94 of the Charter says the Security Council may step in if a party fails to comply — which is why compliance, in practice, runs on reciprocity and reputation more than enforcement.',
      },
      {
        kind: 'para',
        text: 'The court also issues advisory opinions when authorized UN organs ask — the General Assembly and the specialized agencies, never private parties. Advisory opinions are formally non-binding yet often settle the law\'s direction on questions from the legality of nuclear weapons to the consequences of separation walls.',
      },
      {
        kind: 'para',
        text: 'What law does the ICJ apply? Article 38 of its Statute gives the classic formulation: international conventions; international custom, as evidence of a general practice accepted as law; the general principles of law recognized by civilized nations; and, as subsidiary means, judicial decisions and the teachings of the most highly qualified publicists. Generations of students have memorized this list because it is the working definition of international law itself.',
      },
      { kind: 'heading', text: 'The International Criminal Court' },
      {
        kind: 'para',
        text: 'The ICC answers a different question. The ICJ adjudicates disputes between states; the ICC, created by the Rome Statute of 1998 and in force since 2002, prosecutes individuals for the gravest international crimes: genocide, war crimes, crimes against humanity and the crime of aggression. Its jurisdiction is not universal — it covers crimes committed on the territory or by nationals of states parties, or situations referred by the Security Council, or by a state accepting jurisdiction ad hoc — and it is governed by complementarity: the court may act only when national courts are unwilling or genuinely unable to prosecute. That principle makes the ICC a court of last resort, designed to complement, not replace, national systems.',
      },
      {
        kind: 'para',
        text: 'Keep the two Hagues apart with one sentence: the ICJ is states versus states about legal rights; the ICC is prosecutors versus individuals about criminal guilt. Mixing them up is the single most common error in introductions to international law.',
      },
      { kind: 'heading', text: 'The Law of the Sea' },
      {
        kind: 'para',
        text: 'The United Nations Convention on the Law of the Sea, adopted in 1982 and in force since 1994, is the constitution of the oceans, and it divides the sea into zones with surgical precision. The territorial sea extends up to twelve nautical miles from the baselines: there the coastal state exercises sovereignty, subject only to the right of innocent passage for foreign ships. Beyond it, the contiguous zone runs to twenty-four nautical miles, where the state may enforce customs, fiscal, immigration and sanitary laws. The exclusive economic zone reaches two hundred nautical miles, giving the state sovereign rights over living and non-living resources — fisheries, oil, gas — but not full sovereignty; navigation and overflight remain free. The continental shelf, the natural prolongation of the landmass, may extend beyond the economic zone up to defined limits, carrying seabed resource rights. Everything beyond national jurisdiction is the high seas, open to all; the mineral riches of the international seabed are managed as the common heritage of humankind by the International Seabed Authority, and disputes find a dedicated tribunal, ITLOS, in Hamburg alongside the ICJ.',
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Three slips recur. First, treating the EEZ as territory: a coastal state owns the fish and the oil, not the water column\'s ships and aircraft. Second, assuming the ICC can prosecute any atrocity anywhere: jurisdiction needs a state-party link or a Security Council referral. Third, expecting ICJ judgments to be self-executing: enforcement runs through the Security Council, where a veto can stop it cold.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'International Humanitarian Law' },
      {
        kind: 'para',
        text: 'The oldest layer of the modern system is the law of war. The Geneva Conventions of 1949 — four treaties ratified by every state on Earth — protect the wounded and sick in land and sea warfare, prisoners of war, and civilians in occupied and enemy territory. Their Additional Protocols of 1977 extended protection to wars of national liberation and to civilian objects, and tightened the rules on means and methods of warfare. The guardian of this body of law is the International Committee of the Red Cross, the Swiss-based organization whose mandate to visit detainees and protect victims is written into the conventions themselves. The distinction between Hague law — the conduct of hostilities, targeting, weapons — and Geneva law — the protection of victims — organizes the whole field.',
      },
      {
        kind: 'example',
        title: 'Worked Example — A Maritime Incident, Zoned',
        steps: [
          'Set up: a foreign fishing fleet is arrested 150 nautical miles off a coastal state, and its flag state protests.',
          'Locate the zone: 150 nm from baselines is inside the 200-nm exclusive economic zone but outside the 12-nm territorial sea.',
          'Apply the regime: in the EEZ the coastal state has sovereign rights over living resources and may board, inspect and arrest vessels violating its fisheries laws.',
          'Check the counter-argument: had the arrest occurred beyond 200 nm, on the high seas, the default rule is exclusive flag-state jurisdiction and the arrest would be unlawful.',
          'Conclude: the zone map decides the case before any court is seized of it — which is why maritime disputes are argued in nautical miles first and legal principles second.',
        ],
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'International Court of Justice', def: 'The UN\'s principal judicial organ; decides disputes between consenting states and issues advisory opinions.' },
          { term: 'Article 38, ICJ Statute', def: 'The classic enumeration of the sources of international law: treaties, custom, general principles, and subsidiary means.' },
          { term: 'complementarity', def: 'The Rome Statute principle that the ICC prosecutes only where national courts are unwilling or unable to do so genuinely.' },
          { term: 'exclusive economic zone', def: 'The 200-nm zone in which a coastal state holds sovereign rights over resources but not sovereignty over shipping and flight.' },
          { term: 'Geneva Conventions', def: 'The four 1949 treaties protecting war victims — wounded, shipwrecked, prisoners of war and civilians.' },
          { term: 'kinship of the system', def: 'A memory hook: Charter (rules), ICJ (states), ICC (individuals), UNCLOS (zones), Geneva (war) — five pillars of order.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A state is sued before the ICJ without ever having consented to its jurisdiction. What is the likely outcome?',
            options: [
              'The court proceeds because UN membership implies consent',
              'The court dismisses the case for want of jurisdiction',
              'The Security Council must first vote to compel the state',
              'The case is transferred automatically to the ICC',
            ],
            answer: 1,
            explain: 'The ICJ\'s jurisdiction rests on state consent — by declaration, special agreement or treaty clause. No consent, no case.',
          },
          {
            q: 'Which institution prosecutes an individual commander for crimes against humanity?',
            options: ['The ICJ', 'The Security Council', 'The ICC', 'The International Seabed Authority'],
            answer: 2,
            explain: 'The ICC, under the Rome Statute, holds individuals criminally responsible; the ICJ handles only disputes between states.',
          },
          {
            q: 'At 180 nautical miles from a coastal state\'s baselines, a foreign warship is sailing. The coastal state may:',
            options: [
              'Expel it, since the area is sovereign territory',
              'Regulate its fisheries but not stop its passage',
              'Do nothing — the area is high seas',
              'Try its captain before the ICC',
            ],
            answer: 1,
            explain: 'Inside the EEZ the state holds resource rights only; navigation, including warships, remains free beyond the twelve-mile territorial sea.',
          },
          {
            q: 'The complementarity principle means that the ICC:',
            options: [
              'shares cases with the ICJ',
              'acts only when national courts are unwilling or unable',
              'needs a unanimous Security Council vote',
              'applies only to non-member states',
            ],
            answer: 1,
            explain: 'Complementarity makes the ICC a court of last resort: genuine national proceedings foreclose ICC action on the same conduct.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: the treaty-law lesson, for the lifecycle of the conventions this lesson\'s institutions administer. Follow with human rights law for the treaty-body machinery, and with the international relations lessons for the political science of why states comply.',
        tone: 'path',
      },
    ],
  },
]
