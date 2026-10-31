/**
 * Knowledge Universe — Neuroscience — Chapter 03: Neuroanatomy
 * 1 lesson · ~1,299 words
 * field: Neuroscience
 * legacy sources: life-sciences.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Neuroanatomy]
 *
 * Lessons (snapshot at reorganization):
 *   03.1 neuro-brain-regions-map — The Brain, Mapped: A Guided Tour from Stem to Cortex
 */
import type { KnowledgeTopic } from '../../types'

export const neuroscienceCh03: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: "neuro-brain-regions-map",
    title: "The Brain, Mapped: A Guided Tour from Stem to Cortex",
    domain: "Life Sciences",
    field: "Neuroscience",
    branch: "Neuroanatomy",
    tier: "core",
    concepts: [
      "Hindbrain, midbrain, forebrain organization",
      "Medulla, pons, and cerebellum",
      "Thalamus and hypothalamus",
      "The four cerebral lobes",
      "Basal ganglia and action selection",
      "Limbic structures: hippocampus and amygdala",
      "White-matter tracts and the lesion method",
    ],
    words: 1299,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "The brain is not homogeneous gray mush but a village of specialized districts: 86 billion neurons arranged in structures with real addresses and real jobs. This tour climbs from stem to cortex, visiting each district's function and the evidence — stroke deficits and imaging — that assigned it.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "Every neurological exam is a geography test: a clot, bleed, or tumor is located by the functions it steals long before any scan confirms it. Brain-region literacy also inoculates you against imaging-news hype, where a blob on a scan becomes a 'center for' something.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Orientation first. The brainstem is the stalk where spinal cord becomes skull-protected wiring: basic life support lives here, and damage high in the stem is why brainstem death equals brain death. Gray matter (cell bodies) does the computing; white matter (myelinated axons) is the cabling, white because myelin is fatty. The cortex is the folded outer sheet, its ridges and grooves tripling surface area inside a fixed skull. The brain organizes into hindbrain, midbrain, and forebrain, and the tour follows that order.",
      },
      {
        kind: "para",
        text: "The hindbrain runs the body's autopilot. The medulla oblongata breathes, beats the heart, and manages swallowing and vomiting reflexes — a stroke here, smaller than a fingertip, is fatal. The pons is a relay and arousal station linking cerebellum and cortex. Behind them sits the cerebellum, 'little brain', holding over half the brain's neurons in a densely folded fist: a timing and error-correction machine comparing intended with actual movement, smoothing gait, balance, and speech — and, modern imaging adds, contributing to language and thought. Alcohol's staggering gait is cerebellar arithmetic degraded.",
      },
      {
        kind: "para",
        text: "The midbrain, small but busy, routes reflexes — the superior colliculi jerk your eyes toward motion, the inferior ones orient to sound — and houses the substantia nigra, the dopamine-supplying stripe whose degeneration produces Parkinson's disease. Above it, in the forebrain's diencephalon, the thalamus is the cortex's gatekeeper: nearly all sensory traffic except smell relays through it, not passively but as an attention filter deciding what deserves awareness. Beneath it, the hypothalamus is the body's thermostat, hunger meter, and hormone chief — its pituitary command is covered in the endocrine lesson.",
      },
      {
        kind: "para",
        text: "The cerebral cortex divides into four lobes per hemisphere. The frontal lobe holds the motor strip and everything executive: planning, impulse control, working memory — Phineas Gage, who survived an iron rod through his frontal lobes in 1848 and lost his character but not his intelligence, is the founding lesion study. The parietal lobe maps touch and space, its right-side damage famously causing neglect, where patients shave only the left half of their face. The temporal lobe processes sound and, in the left hemisphere, language comprehension; deep inside it lies the hippocampus, which converts experience into memory. The occipital lobe is vision. Broca's area produces speech; Wernicke's comprehends it.",
      },
      {
        kind: "para",
        text: "Buried beneath the cortex, three systems do the quiet work. The basal ganglia gate actions — facilitating wanted movements, suppressing unwanted ones, dopamine tuning the gate; their failure is Parkinson's (rigidity) or Huntington's disease (unwanted movements). The limbic system binds memory to emotion: the hippocampus forms new memories, the amygdala tags threat and salience, the cingulate mediates conflict and pain's emotional edge. White matter ties it together: the corpus callosum is the 200-million-fiber bridge between hemispheres, the arcuate fasciculus links Broca's and Wernicke's areas, and the internal capsule funnels nearly all motor and sensory fibers — a favorite, devastating target of small strokes.",
      },
      {
        kind: "para",
        text: "How do we know? The lesion method — damage accidentally inflicted taught neuroscience most of this map. H.M., whose hippocampi were removed in 1953 to stop seizures, could no longer form conscious memories yet retained skills he could not recall learning — the founding split between declarative and procedural memory. Split-brain patients, callosum severed to halt seizures, revealed hemisphere specialization in Sperry's Nobel-winning experiments. Modern tools refine rather than replace them: fMRI reads oxygen use, not thoughts; TMS disrupts a region briefly to test its necessity; connectomics maps the wiring itself.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: where in the brain a sudden event occurred, given that a patient speaks in effortful, broken phrases, understands speech normally, and has weakness of the right lower face and right hand.",
          "Recall the geography: effortful but meaningful speech with intact comprehension is Broca's-area aphasia; unilateral weakness on the right means left-hemisphere motor pathways; the face and hand occupy adjacent motor-strip territory.",
          "Apply: all findings converge on the left inferior frontal and adjacent motor regions — the territory of the left middle cerebral artery, whose anterior branches feed Broca's area and the face-hand motor strip.",
          "State the result: a left middle-cerebral-artery stroke, exactly the classic presentation — which is why neurologists can often name the vessel before the scan is ordered.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Stroke triage (FAST: face droop, arm weakness, speech change, time to call) is bedside geography — each sign points to a region, and thrombolysis is time-critical.",
          "Deep-brain stimulation implants electrodes in the subthalamic nucleus or globus pallidus to steady Parkinson's tremor and rigidity.",
          "Neurosurgical planning maps language and motor areas per patient, since their exact positions vary, to spare them while removing tumors.",
          "Epilepsy surgery localizes seizure onset by region and sometimes severs the callosum, trading seizures for a quieter interhemispheric life.",
          "Reading imaging news critically — 'lighting up' means oxygen demand, not a module for love or sarcasm.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "Phrenology is the ancestor of the 'brain center' fallacy: functions are distributed and networked, and a lesion teaches what a region contributes, not that it alone performs. The left-brain/right-brain personality split is pop fiction — lateralization is real but relative, and both hemispheres do almost everything. Bigger is not smarter; brains fold and wire, not bloat. And remember the map is statistical: your Broca's area sits within a centimeter or two of the textbook's, which is why surgery maps each patient individually.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "Brainstem", def: "The medulla-pons-midbrain stalk running life support and cabling between brain and spinal cord." },
          { term: "Cerebellum", def: "The hindbrain's error-correction machine for movement timing, balance, and coordination." },
          { term: "Thalamus", def: "The forebrain's relay and attention gate for nearly all sensory traffic to cortex." },
          { term: "Basal ganglia", def: "Subcortical nuclei that select and gate actions, tuned by dopamine." },
          { term: "Limbic system", def: "The hippocampus-amygdala-cingulate circuitry binding memory and emotion." },
          { term: "Corpus callosum", def: "The 200-million-fiber white-matter bridge between the hemispheres." },
          { term: "Lesion method", def: "Inferring function from the deficits that follow damage to a region." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "Damage smaller than a fingertip in the medulla can be fatal because it:",
            options: ["stores all memories", "runs breathing and heart rate", "generates language", "controls vision"],
            answer: 1,
            explain: "The medulla is the autopilot; strokes here shut down the functions that do not pause for injury.",
          },
          {
            q: "Patient H.M. taught neuroscience that:",
            options: ["memory is a single system", "the hippocampus forms new conscious memories while procedural learning can survive without it", "the frontal lobe stores skills", "language recovers fully after any lesion"],
            answer: 1,
            explain: "He could learn mirror-drawing yet never recall doing it — declarative and procedural memory divide.",
          },
          {
            q: "Split-brain experiments showed that:",
            options: ["the hemispheres have no specialization", "cutting the callosum silences the right hemisphere", "each hemisphere processes differently, revealed when they can no longer share information", "personality doubles"],
            answer: 2,
            explain: "With the cable cut, each hemisphere could be tested separately — the basis of Sperry's Nobel work.",
          },
          {
            q: "A patient with right face and hand weakness plus effortful, grammatical speech with intact comprehension most likely has a lesion in:",
            options: ["the right frontal lobe", "the left middle cerebral artery territory", "the cerebellum", "the occipital lobe"],
            answer: 1,
            explain: "Left motor signs plus Broca's aphasia converge on the left MCA's territory.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "This is anatomy, not philosophy of mind: continue with the synapse and plasticity lessons for how the districts compute and rewire, the endocrine lesson for the hypothalamus-pituitary axis, and the Social Sciences memory topics for the psychology this hardware carries. Imaging literacy grows from here.",
        tone: "path",
      },
    ],
  },
]
