/**
 * Knowledge Universe — Philosophy — Chapter 04: Political Philosophy & Legitimacy
 * 1 lesson · ~1,248 words
 * field: Philosophy
 * legacy sources: humanities.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Power & Legitimacy]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 hum-political-philosophy-contract — Political Philosophy: From Plato to Rawls
 */
import type { KnowledgeTopic } from '../../types'

export const philosophyCh04: KnowledgeTopic[] = [
  {
    id: "hum-political-philosophy-contract",
    title: "Political Philosophy: From Plato to Rawls",
    domain: "Humanities",
    field: "Philosophy",
    branch: "Power & Legitimacy",
    tier: "intermediate",
    concepts: [
      "Plato's Republic and philosopher-kings",
      "Hobbes: obedience for security",
      "Locke: consent, trust and revolution",
      "Rousseau: the general will",
      "Mill's harm principle",
      "Rawls's veil of ignorance",
      "Nozick's entitlement reply",
    ],
    words: 1248,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "Why should anyone obey the state? Political philosophy begins from that question, and its most durable answer is a story: imagine people without government, then ask what they would rationally agree to. From Plato's philosopher-kings to Rawls's veil of ignorance, this lesson follows the arguments about legitimacy, liberty and justice — normative theory about who may rule and why. The mechanics of constitutions are covered elsewhere; here we ask what makes them rightful.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Every political controversy — lockdowns, taxation, speech rules, borders — reopens these arguments. Knowing the tradition lets you hear a press conference correctly: a harm-principle claim, a consent claim and a general-will claim are different moves, and they fail for different reasons.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Plato's Republic (c. 375 BCE) sets the agenda. Challenged by Glaucon's Ring of Gyges — would you stay just if you could act unseen? — Plato answers that justice is intrinsic to a well-ordered soul, modeled in the city: a state is just when rulers, guardians and producers each do their own work. Rule therefore belongs to philosophers, those who know the Form of the Good — knowledge, not consent, legitimates power. Aristotle's Politics (c. 330 BCE) replies that man is by nature a political animal: the polis exists for living well, and constitutions are judged by whether they serve the common good or a faction.",
      },
      {
        kind: "para",
        text: "Thomas Hobbes's Leviathan (1651), written as the English Civil War burned, restarts the argument from fear. Strip away government and you get a state of nature that is a war of every man against every man, where life is solitary, poor, nasty, brutish and short. Rational individuals therefore covenant: each transfers rights to a sovereign in exchange for security — and because covenants barely bind amid war, the sovereign's power must be undivided. Legitimacy is a trade: obedience for peace.",
      },
      {
        kind: "para",
        text: "John Locke's Second Treatise of Government (1689) softens the picture: in the state of nature people already hold rights to life, liberty and property under natural law; government is a trust created by consent to remedy inconveniences — and a trustee who violates it may be overthrown, the argument the American Declaration would echo. Jean-Jacques Rousseau's The Social Contract (1762) radicalizes consent: man is born free and everywhere in chains. Each alienates all rights to the whole community and obeys only the general will — the common good each citizen wills as sovereign — not the mere will of all, the sum of private interests. Popular sovereignty is born.",
      },
      {
        kind: "para",
        text: "John Stuart Mill's On Liberty (1859) turns from legitimacy to limits. His one very simple principle: the only purpose for which power can be rightfully exercised over anyone against his will is to prevent harm to others. Self-regarding conduct is immune even from paternalism, on grounds that run from the fallibility of inquirers — silencing opinion assumes infallibility — to the value of individuality as a constituent of well-being; and majorities, Mill warned, tyrannize as effectively as kings.",
      },
      {
        kind: "para",
        text: "John Rawls's A Theory of Justice (1971) re-founded the contract for the modern welfare state. Imagine an original position behind a veil of ignorance: parties choosing society's basic rules know nothing of their class, talents, race or generation. Rationally cautious, they would secure equal basic liberties for all, plus the difference principle: inequalities are allowed only when they benefit the least advantaged. Robert Nozick's Anarchy, State, and Utopia (1974) answered for the libertarians: justice is historical, not patterned. His Wilt Chamberlain example — fans freely pay to watch the star, and a once-just distribution becomes unequal — shows that maintaining any pattern, Rawls's included, requires constantly overriding voluntary choices; taxation of earnings, on his strongest formulation, is on a par with forced labor.",
      },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: is strongly progressive taxation just?",
        "Run Rawls's test: behind the veil, parties do not know whether they will be born rich or poor, talented or not; unable to gamble with others' stakes, they insure themselves by tolerating inequality only when it improves the worst-off — the difference principle licenses progressive taxation.",
        "Run Nozick's test: begin from a just baseline and let voluntary transactions run — basketball fans freely pay to see Chamberlain, who becomes rich; each step was just, so confiscating his earnings re-violates liberty.",
        "Diagnose the clash: for Rawls, justice is a property of the basic structure assessed by a patterned principle; for Nozick, a property of histories of acquisition and transfer.",
        "State the result: the dispute is not economic but conceptual — what kind of fact makes a distribution just — and both sides claim the contract tradition, which shows the tradition does not settle it.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Public health: lockdown and vaccine policies contest the harm principle's boundary — whose risk counts as harm to others?",
        "Technology governance: platform moderation and surveillance replay Mill on majority tyranny and Locke on trust and rebellion.",
        "Algorithmic fairness: designers use veil-of-ignorance-style reasoning to choose fairness metrics for lending and policing.",
        "Tax and welfare: the difference principle is cited, and contested, in debates on basic income and inheritance taxes.",
        "Constitutional law: rights jurisprudence trades explicitly in harm-principle reasoning, from speech exceptions to public-order limits.",
      ] },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "The social contract is a thought experiment, not history — no signing occurred, and its force is rational, not genealogical. Do not mix state-of-nature accounts: Hobbes's war, Locke's inconvenience and Rousseau's chains are different premises yielding different states. The general will is not the majority's opinion — Rousseau conceded majorities can err about it, a dangerous ambiguity. Rawls's principles govern the basic structure only, not every transaction; and Mill's principle depends on a contested notion of harm — offense is not automatically harm.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "state of nature", def: "The hypothetical pre-political condition used to test what government is for." },
        { term: "social contract", def: "The agreement story by which rational persons authorize government — legitimacy as rational consent." },
        { term: "general will", def: "Rousseau's common good willed by citizens as sovereign; distinct from the will of all, the sum of interests." },
        { term: "harm principle", def: "Mill's limit on power: coercion is justified only to prevent harm to others." },
        { term: "veil of ignorance", def: "Rawls's device: choose social rules knowing nothing of your own place, talents or conception of the good." },
        { term: "difference principle", def: "Inequalities are just only if they work to the greatest benefit of the least advantaged." },
        { term: "entitlement theory", def: "Nozick's historical principle: justice in acquisition, transfer and rectification — not patterned distribution." },
      ] },
      { kind: "heading", text: "Check Your Understanding" },
      { kind: "quiz", items: [
        {
          q: "In Hobbes's state of nature, life is…",
          options: ["a pastoral idyll", "solitary, poor, nasty, brutish and short", "governed by natural rights", "regulated by the general will"],
          answer: 1,
          explain: "Without a common power there is war of all against all; the covenant trades liberty for survival.",
        },
        {
          q: "Rousseau's general will differs from the will of all because it…",
          options: ["counts every vote", "aims at the common good rather than the sum of private interests", "belongs to the monarch", "is discovered by the market"],
          answer: 1,
          explain: "The general will targets the common interest; the will of all aggregates whatever each private will happens to want.",
        },
        {
          q: "Mill's harm principle permits coercion only to…",
          options: ["improve the person's own character", "prevent harm to others", "enforce the general will", "maintain Rawls's pattern"],
          answer: 1,
          explain: "Self-regarding conduct is immune, even from benevolent majorities — fallibility and individuality are the grounds.",
        },
        {
          q: "Nozick's Wilt Chamberlain example is designed to show that…",
          options: ["athletes are overpaid", "maintaining a patterned distribution requires continual interference with voluntary choices", "the veil of ignorance is biased", "all taxation is always theft"],
          answer: 1,
          explain: "Voluntary transactions wreck any pattern; if each holding was just, re-imposing the pattern is unjust coercion.",
        },
      ] },
    ],
  },
]
