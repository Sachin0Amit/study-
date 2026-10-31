/**
 * Knowledge Universe — Psychology — Chapter 04: Personality & Individual Differences
 * 2 lessons · ~2,501 words
 * field: Psychology
 * legacy sources: social-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Personality, Individual Differences]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 psych-big-five-personality — The Big Five: A Field Guide to Human Personality
 *   04.2 psych-intelligence-iq-testing — Intelligence and IQ: What the Tests Actually Measure
 */
import type { KnowledgeTopic } from '../../types'

export const psychologyCh04: KnowledgeTopic[] = [
  {
    id: "psych-big-five-personality",
    title: "The Big Five: A Field Guide to Human Personality",
    domain: "Social Sciences",
    field: "Psychology",
    branch: "Personality",
    tier: "intermediate",
    concepts: [
      "The lexical hypothesis and the dictionary sweep",
      "OCEAN: five dimensions, not types",
      "Conscientiousness and openness as outcome predictors",
      "Rank-order stability rises with age",
      "The maturity principle",
      "Traits predict modestly but consistently",
      "Dimensional scores versus typologies",
    ],
    words: 1226,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      { kind: "para", text: "People differ, and they differ consistently: the friend who was organized at twelve is organized at fifty. Personality psychology is the study of these stable patterns — how to describe them, measure them, and know what they do. After a century of competing systems, the field converged on a finding so replicated it now anchors the discipline: five broad dimensions capture most of the stable variation in human personality. (Trait psychology is a different program from judgment biases and attitude change — this is who people are, not how they err.)" },
      { kind: "callout", title: "Why this matters", tone: "insight", text: "The Big Five predicts outcomes at a distance no rival framework approaches: longevity, divorce, job performance, mental-health risk — modestly but relentlessly, across decades and cultures. It is also the yardstick that exposes popular typologies: when a test disagrees with itself across five weeks, it is not measuring a trait." },
      { kind: "heading", text: "Core Concepts" },
      { kind: "para", text: "The route ran through the dictionary. The lexical hypothesis holds that anything important about human difference gets named, so in 1936 Gordon Allport and Henry Odbert swept English dictionaries for trait terms and emerged with about 4,500. Raymond Cattell factor-analyzed the list toward sixteen dimensions; later replications — Fiske, Tupes and Christal, Warren Norman — kept collapsing toward five. Paul Costa and Robert McCrae's 1985 NEO-PI-R gave the five names, items and a research industry. Factor analysis of different languages and samples kept landing on the same five: a convergence rare in psychology." },
      { kind: "para", text: "Two dimensions carry much of the predictive load. Conscientiousness — orderliness, self-discipline, dutifulness, deliberation — is the strongest non-cognitive predictor of school grades, job performance in most occupations, and even longevity: high scorers live years longer, partly through healthier behavior. Openness to experience — curiosity about ideas and art, appetite for novelty — predicts training success and creative achievement. The two sit loosely at odds in populations: fast-and-loose versus checked-and-thorough, each suited to different environments." },
      { kind: "para", text: "Extraversion is reward sensitivity: sociability, assertiveness, positive emotion — the dopamine-flavored dimension. Agreeableness is cooperation style: trust, compassion, modesty — low scorers compete, high scorers harmonize, and both strategies have niches. Neuroticism is threat sensitivity: the tendency toward anxiety, irritability and self-consciousness under stress, the personality variable closest to the anxiety-and-depression lesson's vulnerability factor. High neuroticism roughly doubles the risk of common mental disorders; it is the trait clinicians meet first." },
      { kind: "para", text: "Measurement is deliberately dull: many statements, rating scales, aggregation. Single items are noisy; thirty cancel the noise. The validity evidence is unusually rich — self-reports agree with friends' and spouses' ratings at correlations near .5, and spouse ratings predict some outcomes better than self-reports do. The structure replicates in dozens of languages, though in small-scale subsistence societies the factors fray, a live debate about how universal the five are versus products of literate, complex societies." },
      { kind: "para", text: "Traits are both stable and on the move. Rank-order stability — does your position among your peers hold? — rises from correlations around .3 in childhood to above .7 by the fifties. Mean levels drift systematically: on average people gain conscientiousness and agreeableness and shed neuroticism from adolescence through middle age, the maturity principle. Personality is not fixed at thirty, but it becomes increasingly set — and the competing claims that it is destiny fail in both directions." },
      { kind: "para", text: "What traits predict, they predict modestly: correlations of .1 to .3 with most outcomes, small per decision but compounding over hundreds of them. The person-situation debate — Walter Mischel's 1968 complaint that behavior correlates with traits at barely .30 — dissolved through aggregation and through if-then signatures: people are consistently shy with strangers and bold with friends. Beyond the five, the HEXACO model adds honesty-humility, and the dark triad — narcissism, Machiavellianism, psychopathy — maps onto low agreeableness with attitude. What the Big Five does not do is explain the traits: description is not cause." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: two job candidates bring identical skills, one high in conscientiousness with moderate extraversion, the other low C and high E — what does the model actually forecast?",
        "Recall the governing idea: conscientiousness is the strongest trait predictor of long-horizon performance; extraversion predicts interview warmth more than output reliability.",
        "Apply: expect steadier delivery and fewer missed deadlines from the high-C candidate — a correlation of roughly .2 to .3 with performance, modest but real — while the high-E candidate interviews warmer and may shine where sociability is the job itself.",
        "State the result: use traits as base rates, not verdicts — the model narrows the prior, and the probation period collects the evidence a questionnaire never will.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Personnel selection pairs conscientiousness and integrity testing with structured interviews — measurement over gut feel.",
        "Clinical practice uses the five-factor model to describe personality problems dimensionally, replacing checklists with extremity.",
        "Couple research finds neuroticism the strongest divorce predictor — and assortative mating on the traits everywhere.",
        "Self-development works by situation selection: choosing environments that fit traits beats remolding the traits.",
        "Longitudinal research adjusts for personality when estimating what programs and treatments actually change.",
      ] },
      { kind: "callout", title: "Common Pitfalls", tone: "warn", text: "The standard errors: treating typologies as science (the Myers-Briggs sorts continuous dimensions into either-or boxes, and half of retest-takers flip at least one letter within weeks); reading traits as destiny (they are base rates); using personality as an excuse (low conscientiousness describes a problem, it does not license it); judging someone's traits from their worst visible day (states masquerade as traits); and assuming one true self hides under the data. Traits describe the center of a distribution that variance still lives in." },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "lexical hypothesis", def: "The premise that important human differences get encoded in language — hence the dictionary sweep." },
        { term: "Big Five (OCEAN)", def: "The replicated five-dimension structure of stable personality variation." },
        { term: "rank-order stability", def: "How well your position among peers holds over time; it rises with age." },
        { term: "maturity principle", def: "The average drift toward more conscientiousness and agreeableness, less neuroticism, across adulthood." },
        { term: "personality coefficient", def: "Mischel's .30 ceiling for trait-behavior correlations, later dissolved by aggregation." },
        { term: "HEXACO", def: "The six-factor alternative adding honesty-humility to the standard five." },
        { term: "dark triad", def: "Narcissism, Machiavellianism and psychopathy — low-agreeableness variants with attitude." },
      ] },
      { kind: "heading", text: "Check Yourself" },
      { kind: "quiz", items: [
        {
          q: "The lexical hypothesis motivated which research move?",
          options: ["analyzing dreams for symbols", "searching dictionaries for trait adjectives", "twin studies of temperament", "factor analysis of job performance"],
          answer: 1,
          explain: "If important differences get named, the trait vocabulary is sitting in the dictionary — Allport and Odbert went and collected it.",
        },
        {
          q: "Which trait is the strongest personality predictor of longevity and job performance?",
          options: ["openness", "extraversion", "conscientiousness", "agreeableness"],
          answer: 2,
          explain: "Discipline and dutifulness compound: healthier behavior, fewer missed deadlines, years of life.",
        },
        {
          q: "The maturity principle describes how people, on average,",
          options: ["become more neurotic with age", "gain conscientiousness and agreeableness through adulthood", "stay fixed after thirty", "revert to adolescent traits in old age"],
          answer: 1,
          explain: "Mean levels drift — calmer, more dependable, more caring — even while rank order stays put.",
        },
        {
          q: "The core measurement flaw in type-based tests like the MBTI is:",
          options: ["too many dimensions", "dichotomizing continuous traits, inflating instability", "self-report itself", "too few items per type"],
          answer: 1,
          explain: "Cutting a continuous distribution at the midpoint makes near-half of people flip types on retake — the signal is in the score, not the box.",
        },
      ] },
      { kind: "callout", title: "Where to go next", tone: "path", text: "Pairs with the cognitive-biases and dissonance lessons — judgment and attitude change, the field's other programs. Follow with the intelligence lesson for cognitive individual differences, and the research-methods toolkit for reliability and validity. Next: personality disorders, HEXACO, and behavioral genetics." },
    ],
  },
  {
    id: "psych-intelligence-iq-testing",
    title: "Intelligence and IQ: What the Tests Actually Measure",
    domain: "Social Sciences",
    field: "Psychology",
    branch: "Individual Differences",
    tier: "intermediate",
    concepts: [
      "g and the positive manifold",
      "Deviation IQ: scores as positions, not quantities",
      "Reliability before validity",
      "The Flynn effect",
      "Heritability is not immutability",
      "Predictive bias versus score gaps",
      "Fluid and crystallized abilities",
    ],
    words: 1275,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      { kind: "para", text: "An IQ score is the most reliable and best-validated number psychology has ever produced — and the most misused. It began as a schoolteacher's tool for finding children who needed help, became a legal instrument of exclusion, and settled into its modern role: a strong but partial statistical predictor of school and work outcomes. Understanding what the tests measure, and what they cannot, is prerequisite to using them or defending against their use." },
      { kind: "callout", title: "Why this matters", tone: "insight", text: "Scores predict academic achievement at correlations near .5 — better than any other single psychological measure — and general mental ability is among the best single predictors of training success. The same numbers justified sterilization laws. An instrument this powerful and this compromised must be understood, not waved away." },
      { kind: "heading", text: "Core Concepts" },
      { kind: "para", text: "In 1904 Charles Spearman noticed that children's grades in dissimilar subjects all correlated positively — the positive manifold. Every cognitive test since shows it: people who do well at vocabulary tend, on average, to do well at matrices and memory span. Spearman attributed the shared variance to g, general intelligence, and tests differ mostly in how heavily they load on it — abstract reasoning most, rote memory least. Modern models split g into fluid ability, for novel problems, and crystallized, for accumulated knowledge, then fan into a dozen broad abilities." },
      { kind: "para", text: "A score is manufactured precision. Test makers norm items on representative thousands, so a raw score becomes a percentile against a population. And since the original mental-age arithmetic broke in adulthood, the Wechsler scales fixed deviation IQ: mean 100, standard deviation 15 — 68 percent of people between 85 and 115. Reliability runs above .9 (retake and expect your score within a few points) and validity against later achievement nears .5 — psychometric gold by any measurement standard, which is why armies, schools and clinics still buy it." },
      { kind: "para", text: "In the 1980s James Flynn found that raw scores had risen roughly three points per decade across the twentieth century in every country with records — the Flynn effect, large enough that tests must be renormed to keep the mean at 100. Explanations still compete: nutrition, schooling, increasingly cognitively demanding environments, test familiarity. Norway's conscript data sharpened the puzzle — brothers raised together show the same generational gains as unrelated men, pointing to environment rather than changing gene pools. In several Nordic countries the rise has now quietly reversed." },
      { kind: "para", text: "Within affluent populations, IQ differences run perhaps 50 percent heritable in childhood, rising toward 70 percent by adulthood — the counterintuitive Wilson effect, as people increasingly select environments that fit their inclinations. Two cautions govern everything. Heritability describes a population's variance, not an individual's fate. And heritable does not mean immutable: height is 90 percent heritable and still rose with nutrition. The Scarr-Rowe hypothesis adds that heritability shrinks under deprivation — poverty suppresses expression — so the same fraction means different things in different societies." },
      { kind: "para", text: "The history is the dark half. Alfred Binet built the first test explicitly to identify schoolchildren needing support, and warned against fixed readings of it. Henry Goddard's Ellis Island classifications mislabeled immigrants by language and culture; Lewis Terman's genetic confidence and the 1917 Army tests fed the eugenics movement, sterilization statutes and the 1924 immigration quotas. The technical question — do the tests underpredict minority performance? — has a mostly reassuring answer: predictive bias by group is small in modern instruments. Score gaps between groups are real, have narrowed, and their causes remain contested terrain." },
      { kind: "para", text: "Alternative structures sell better than they test. Howard Gardner's multiple intelligences are influential in education but weakly supported psychometrically — the abilities correlate, which is the very phenomenon g names. Sternberg's triarchic theory fares little better formally; emotional intelligence shows some incremental validity in its ability-based form. The honest summary: beyond g, specific aptitudes add real predictive value for specific outcomes — spatial ability for engineering, for instance — but no rival framework has displaced the general factor in a century of trying." },
      { kind: "formula", name: "Deviation IQ", latex: "\\mathrm{IQ} = 100 + 15z, \\qquad z = \\frac{\\mathrm{raw} - \\mu_{\\mathrm{peers}}}{\\sigma_{\\mathrm{peers}}}", meaning: "Your score is your raw performance expressed in standard deviations from the peer mean, rescaled so 100 is average and 15 is one step." },
      { kind: "example", title: "Worked Example", steps: [
        "Identify what is asked: a man scores 130 on a Wechsler test — what is that, concretely, and what is it not?",
        "Recall the governing idea: deviation IQ rescales standard deviations — 130 is exactly z = +2.",
        "Apply: the normal distribution puts z = +2 at about the 98th percentile — roughly one in fifty of his age peers scores higher. The old mental-age reading, a mind like a nineteen-year-old's, is meaningless because raw ability stops tracking age after the teens — which is precisely why the ratio formula was abandoned.",
        "State the result: 130 is a well-measured position in a distribution, predictive of training success — not a quantity of brain, a fixed ceiling, or a verdict on worth.",
      ] },
      { kind: "heading", text: "Applications in the Real World" },
      { kind: "list", items: [
        "Psychoeducational assessment uses cognitive batteries to diagnose learning disabilities and design support.",
        "Military placement runs on the ASVAB — the direct descendant of the 1917 Army tests.",
        "Serial cognitive testing tracks dementia, where the change matters more than the level.",
        "Personnel meta-analyses rank general mental ability among the best single predictors of training performance.",
        "Forensic cases still turn on IQ thresholds, execution eligibility included — numerology with stakes.",
      ] },
      { kind: "callout", title: "Common Pitfalls", tone: "warn", text: "The standing confusions: IQ as a substance you have an amount of (it is a relative position, and the Flynn effect proves positions move); heritability as immutability (see: height); the single score as complete description (narrow abilities matter for narrow outcomes); colloquial bias conflated with the technical test of underprediction; and ranking groups as if scores settled causes. The ratio-IQ hangover — an adult with the mind of a twelve-year-old — is a category error, not a measurement." },
      { kind: "heading", text: "Key Terms" },
      { kind: "terms", items: [
        { term: "g factor", def: "The shared variance behind the positive correlations among all cognitive tests." },
        { term: "positive manifold", def: "The finding that all mental tests correlate — the phenomenon g explains." },
        { term: "deviation IQ", def: "Score as standard deviations from the age-peer mean: mean 100, standard deviation 15." },
        { term: "Flynn effect", def: "The roughly three-point-per-decade rise in raw scores across the twentieth century." },
        { term: "heritability", def: "The fraction of population variance attributable to genetic difference — not individual fate." },
        { term: "Wilson effect", def: "The heritability of IQ rising from childhood into adulthood." },
        { term: "predictive bias", def: "The technical question of whether tests underpredict outcomes for a group." },
      ] },
      { kind: "heading", text: "Check Yourself" },
      { kind: "quiz", items: [
        {
          q: "The positive manifold refers to:",
          options: ["tests clustering by school subject", "all cognitive tests correlating positively", "left-right symmetry of the brain", "the normal curve of scores"],
          answer: 1,
          explain: "Vocabulary, matrices, memory span — everything correlates. g is the name for the shared variance.",
        },
        {
          q: "A deviation IQ of 115 means:",
          options: ["one standard deviation above the age mean", "15 percent above average", "a mental age of fifteen", "the 99th percentile"],
          answer: 0,
          explain: "The Wechsler rescaling makes 15 points one standard deviation — 115 is the 84th percentile.",
        },
        {
          q: "The Flynn effect is:",
          options: ["genetic selection for intelligence", "raw score gains of about three points per decade", "grade inflation", "growth in average head size"],
          answer: 1,
          explain: "Every country with records gained points across the twentieth century — the moving target tests must renorm against.",
        },
        {
          q: "Heritability is not immutability is best illustrated by:",
          options: ["identical twins' similarity", "height: 90 percent heritable, yet it rose with nutrition", "the reversal of the Flynn effect", "test-retest reliability"],
          answer: 1,
          explain: "A trait can be highly heritable in a population and still shift when the environment shifts — the two facts coexist.",
        },
      ] },
      { kind: "callout", title: "Where to go next", tone: "path", text: "Pairs with the research-methods toolkit — correlation, reliability, validity, norms — and the education lesson for what schools do with scores. The Big Five lesson covers the non-cognitive side of individual differences. Next: behavioral genetics, expertise and deliberate practice, and the history of eugenics." },
    ],
  },
]
