/**
 * Knowledge Universe — Neuroscience — Chapter 04: Plasticity
 * 1 lesson · ~1,291 words
 * field: Neuroscience
 * legacy sources: life-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Plasticity]
 *
 * Lessons (snapshot at reorganization):
 *   04.1 neuro-neuroplasticity-brain-rewires — Neuroplasticity: How Experience Rewires the Brain
 */
import type { KnowledgeTopic } from '../../types'

export const neuroscienceCh04: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: "neuro-neuroplasticity-brain-rewires",
    title: "Neuroplasticity: How Experience Rewires the Brain",
    domain: "Life Sciences",
    field: "Neuroscience",
    branch: "Plasticity",
    tier: "intermediate",
    concepts: [
      "Hebb's rule: fire together, wire together",
      "LTP and LTD at the synapse",
      "NMDA receptors as coincidence detectors",
      "Critical periods and their windows",
      "Cortical remapping: phantom limbs and practice",
      "Stroke recovery and constraint-induced therapy",
      "The adult neurogenesis debate",
    ],
    words: 1299,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "The adult brain is not hardwired. Maps shift, synapses strengthen and wither, and territory is reassigned by use — the brain is a living circuit board that re-solders itself according to its own traffic. This lesson covers the mechanisms of that rewiring — Hebb's 1949 rule through modern rehabilitation — and the honest state of the adult-neurogenesis debate.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Every kind of learning, stroke rehabilitation, addiction, tinnitus, and phantom-limb therapy is plasticity operating for good or ill. Knowing the rules of rewiring tells you why practice works, why timing in childhood matters so much, and why recovery after brain injury is a training problem.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "The founding rule is Hebb's: when one neuron repeatedly takes part in firing another, the connection between them strengthens — cells that fire together, wire together. The synaptic machine implementing it was found in 1973, when Bliss and Lømo discovered long-term potentiation (LTP) in the hippocampus: a brief high-frequency burst left synapses stronger for hours to weeks. Its mirror, long-term depression (LTD), weakens synapses after slow, uncorrelated activity. Together they give memory a physical substrate.",
      },
      {
        kind: "para",
        text: "The trigger is molecular coincidence detection. NMDA-type glutamate receptors — introduced among the receptor types in the synapse lesson — open only when two things happen at once: glutamate is bound, and the postsynaptic membrane is already depolarized enough to expel the magnesium plug blocking the channel. Only genuinely correlated input passes both tests, and the calcium that then floods in switches on kinases that insert more AMPA receptors and even grow new dendritic spines. Correlation becomes structure; structure becomes memory.",
      },
      {
        kind: "para",
        text: "Left alone, Hebbian learning would run away — strong synapses would strengthen forever. The brain counterweights it with homeostatic plasticity: synaptic scaling rescales all of a neuron's synapses up or down to keep firing rates in a useful range, and dendritic spines appear and vanish constantly, only the used ones persisting for months. Plasticity is regulated, not free — which is why consolidation needs sleep and spacing, not just repetition.",
      },
      {
        kind: "para",
        text: "Some windows are special. During critical periods, the cortex is exquisitely moldable and then stabilizes — Hubel and Wiesel showed that sewing shut one kitten's eye during the visual critical period let the other eye permanently colonize the binocular cortex; the deprived eye never recovered, a finding that won the 1981 Nobel Prize and put a deadline on treating children's amblyopia. Perfect pitch and native-accent phonemes show similar windows — not absolute cliffs, but gradients that steepen with age.",
      },
      {
        kind: "para",
        text: "In adults, the clearest demonstration is remapping: string players' hand representations in somatosensory cortex enlarge, and Braille readers' finger maps grow with reading hours. After amputation, the cortex serving the missing hand does not go silent — face and arm representations invade it, and because the wiring is crossed, touching the cheek can be felt in the phantom hand. Ramachandran's mirror box exploits this: watching a reflected intact hand 'open' the phantom one can unlearn its clenched, painful posture (the Health & Wellness pain lesson covers what this means for pain itself).",
      },
      {
        kind: "para",
        text: "The same logic drives stroke rehabilitation. Tissue around a dead zone can take over lost functions, but only if it is pushed — which is why constraint-induced movement therapy restrains the good arm and forces use of the weak one, converting idle peri-infarct territory back into a controller. Intensity and repetition are the active ingredients, and the same competition that recovers function can also hurt: untrained, the brain learns non-use.",
      },
      {
        kind: "para",
        text: "Do adults grow new neurons? Birds famously do — canary song nuclei swell each season — and rodent studies have long documented new neurons in the hippocampal dentate gyrus, boosted by exercise via BDNF. In humans the debate is live: one careful 2018 study found new neurons vanish after childhood; equally careful groups disagree. The honest position: adult neurogenesis, if real in humans, is narrow and modest — plasticity of connections, not new parts, does most adult learning.",
      },
      {
        kind: "formula",
        name: "Hebbian weight update",
        latex: "\\Delta w = \\eta \\cdot x \\cdot y",
        meaning: "The change in synaptic strength is a learning rate times presynaptic activity times postsynaptic activity — unbounded alone, which is why homeostatic scaling must rein it in.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: why repeated pairing can strengthen a synapse without limit in the toy rule, and what stops that in real brains.",
          "Recall the rule: delta w = eta times pre times post, with pre and post activity rates between 0 and 1.",
          "Apply: with eta = 0.05 and both cells active (1.0), each paired firing adds 0.05; 100 co-activations add 5.0 to the weight — unbounded linear growth.",
          "State the result: real neurons prevent this runaway with synaptic scaling, spine turnover, and metaplastic thresholds — which is why cramming saturates and stalls: spaced practice, letting consolidation act between sessions, beats massed repetition.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Amblyopia is patched in early childhood while the critical period is open; delayed, the window closes on treatment.",
          "Cochlear implants work best implanted young, while auditory cortex is still moldable to a machine's signal.",
          "Constraint-induced therapy and intensive, repetitive rehabilitation drive stroke recovery of both movement and speech.",
          "Mirror-box and graded-motor-imagery treatments retrain phantom-limb pain through remapped circuits.",
          "Addiction treatment avoids cue-triggered relapse because learned circuits persist — context matters as much as chemistry.",
          "Aerobic exercise raises BDNF and is among the best-evidenced levers on hippocampal plasticity.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Plasticity is not 'rewire your brain in ten days' — it is competitive, regulated, and effortful, and adult brains trade speed of change for stability. Critical periods close gradually, not absolutely. LTP in a hippocampal slice is a mechanism, not a whole memory. And the adult-neurogenesis question is genuinely unsettled — anyone selling new neurons in a bottle is selling the debate, not the science.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Hebbian plasticity", def: "Strengthening of connections between neurons that repeatedly fire together." },
          { term: "LTP", def: "Long-term potentiation — a lasting strengthening of synapses after high-frequency activity." },
          { term: "LTD", def: "Long-term depression — a lasting weakening after low-frequency or uncorrelated activity." },
          { term: "NMDA receptor", def: "A glutamate receptor that opens only for coincident transmitter and depolarization — the coincidence detector." },
          { term: "Critical period", def: "A developmental window of heightened plasticity, after which change is far harder." },
          { term: "Synaptic scaling", def: "Homeostatic rescaling of a neuron's synapses to keep firing rates stable." },
          { term: "Cortical remapping", def: "Reassignment of cortical territory by use, loss, or training." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "An NMDA receptor opens only when:",
            options: ["glutamate alone binds it", "the membrane is depolarized alone", "glutamate binds and the postsynaptic membrane is already depolarized", "calcium falls outside the cell"],
            answer: 2,
            explain: "The magnesium plug leaves only under depolarization, so the channel demands correlated pre and post activity — coincidence detection.",
          },
          {
            q: "A mirror box eases phantom-limb pain by:",
            options: ["anesthetizing the stump", "giving the remapped cortex visual feedback that lets the phantom unclench", "strengthening the face map further", "blocking NMDA receptors"],
            answer: 1,
            explain: "The pain partly lives in the remapped circuitry replaying a posture; the reflection supplies the missing feedback to retrain it.",
          },
          {
            q: "Constraint-induced movement therapy after stroke works because:",
            options: ["the weak arm is electrically stimulated", "forcing use of the weak arm claims peri-infarct territory that non-use would surrender", "the good arm regrows neurons", "critical periods reopen in adults"],
            answer: 1,
            explain: "Plasticity is competitive: territory follows demand, and intensive use of the affected limb redirects it.",
          },
          {
            q: "The honest state of adult human neurogenesis is:",
            options: ["proven absent everywhere", "proven throughout the cortex", "a live debate, centered on the hippocampus, with modest effects at best", "fully settled since the 1990s"],
            answer: 2,
            explain: "Rodent hippocampal neurogenesis is solid; the human data conflict, and connection plasticity — not new parts — does most adult learning.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Prerequisites: the synapse lesson for receptors and the action-potential lesson for signaling. Continue with the brain-map lesson for where remapping happens, the developmental-biology lesson for how the young brain is built, and Foundation Learning's practice-science topics for the study schedules this biology underwrites.",
        tone: "path",
      },
    ],
  },
]
