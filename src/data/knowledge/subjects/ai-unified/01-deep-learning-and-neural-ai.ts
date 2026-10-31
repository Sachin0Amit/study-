/**
 * Knowledge Universe — AI, Machine Learning & Data Science — Chapter 01: Deep Learning & Neural AI
 * 4 lessons · ~4,524 words
 * fields: Brain-Inspired Computing, Machine Learning
 * legacy sources: computing-ai.ts, emerging-interdisciplinary.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Machine Learning, Brain-Inspired Computing]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 cs-backpropagation-neural-network-learning — Backpropagation: How Neural Networks Learn
 *   01.2 cs-transformer-attention — Transformers and Attention: How Modern AI Reads
 *   01.3 emer-neuromorphic-computing — Neuromorphic Computing: Brains in Silicon
 *   01.4 em-brain-computer-interfaces — Brain-Computer Interfaces: Reading and Writing to the Brain
 */
import type { KnowledgeTopic } from '../../types'

export const aiUnifiedCh01: KnowledgeTopic[] = [
  {
    id: 'cs-backpropagation-neural-network-learning',
    title: 'Backpropagation: How Neural Networks Learn',
    domain: 'Computing & AI',
    field: 'Machine Learning',
    branch: 'Deep Learning',
    tier: 'advanced',
    concepts: [
      'Loss functions',
      'Computational graphs',
      'The chain rule',
      'The backward pass',
      'Vanishing and exploding gradients',
      'Optimisers and automatic differentiation',
    ],
    words: 900,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Backpropagation is the bookkeeping trick that makes deep learning possible: it computes the gradient of a loss with respect to every weight using one forward pass and one backward sweep. The mathematics is just the chain rule, applied over a computational graph so the full gradient costs about as much as two forward passes. Popularised by Rumelhart, Hinton and Williams in 1986, it now runs inside PyTorch, TensorFlow and JAX whenever training touches a weight.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every fine-tune and retrain is backpropagation moving billions of weights downhill on a loss. Understanding it explains why learning rates, activations and depth interact as they do.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Training scores how wrong a prediction is — mean squared error for regression, cross-entropy for classification — and the loss is a scalar over every weight. Its gradient points toward steepest increase, so learning steps the other way.',
      },
      {
        kind: 'para',
        text: 'A network is a composition of simple operations — matrix multiplies, additions, activations — forming a graph from inputs to loss. Each node needs only a local derivative; the graph composes them, which is why frameworks differentiate arbitrary user code.',
      },
      {
        kind: 'para',
        text: 'For composed functions, derivatives multiply along paths: the loss\u2019s sensitivity to an early weight is the product of local derivatives along every path from weight to loss, and contributions add where paths branch.',
      },
      {
        kind: 'para',
        text: 'The backward pass runs the graph in reverse: each layer receives the gradient of the loss with respect to its output, multiplies by its local derivative and passes the result backward, reusing cached activations — avoiding recomputation of exponentially many paths.',
      },
      {
        kind: 'para',
        text: 'Gradients are products of many factors, so small factors kill the signal before early layers and large ones blow it up. Sigmoid derivatives never exceed 0.25, so twenty such layers shrink gradients by more than a trillionfold — hence ReLU, careful initialisation, normalisation and residual connections.',
      },
      {
        kind: 'para',
        text: 'Gradients say which way is uphill; optimisers choose the step. SGD subtracts a learning rate times the gradient; Adam rescales each parameter using running statistics. What frameworks run is reverse-mode automatic differentiation — one sweep yielding every partial, for ten weights or ten billion.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Chain rule through a layer',
        latex: '\\frac{\\partial L}{\\partial w} = \\frac{\\partial L}{\\partial a}\\,\\frac{\\partial a}{\\partial z}\\,\\frac{\\partial z}{\\partial w}',
        meaning: 'Loss sensitivity to a weight is the product of local derivatives along the path from weight to loss.',
      },
      {
        kind: 'formula',
        name: 'Sigmoid derivative',
        latex: "\\sigma'(z) = \\sigma(z)\\,(1 - \\sigma(z))",
        meaning: "The sigmoid's slope never exceeds 0.25 — the classic source of vanishing gradients in deep stacks.",
      },
      {
        kind: 'formula',
        name: 'Gradient descent update',
        latex: 'w \\leftarrow w - \\eta\\,\\frac{\\partial L}{\\partial w}',
        meaning: 'Step each weight against its gradient, scaled by the learning rate η.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify: the gradient for x → z = wx → a = σ(z) → L = ½(a − y)², with x = 1, w = 0.5, target y = 1.',
          'Recall the governing idea: multiply local derivatives along the path — dL/da, then σ′(z), then ∂z/∂w = x.',
          'Apply them: a = σ(0.5) ≈ 0.6225, so dL/da = −0.3775 and σ′(z) ≈ 0.2350, giving dL/dw ≈ −0.0887.',
          'State the result: with learning rate 0.5 the weight rises to about 0.544 — the negative gradient pushes the prediction toward the target 1.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Autograd engines in PyTorch, TensorFlow and JAX that differentiate user code',
          'Fine-tuning pretrained models with updates to chosen layers',
          'Gradient checkpointing, which recomputes activations to fit giant models in memory',
          'Adversarial examples, which backpropagate to inputs instead of weights',
          'Scientific machine learning, differentiating simulators for sensitivity analysis',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: "A negative gradient means increase the weight — forgetting the minus sign trains the model to be maximally wrong. Frameworks accumulate gradients across batches, so forgetting to zero them sums stale history. And backprop finds gradients, not minima: zero gradient can mean a saddle point or a poor local basin.",
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Loss function', def: 'The scalar measure of prediction error that training minimises.' },
          { term: 'Computational graph', def: 'The network as primitive operations whose derivatives compose.' },
          { term: 'Backward pass', def: 'Reverse traversal of the graph, propagating gradients from loss to weights.' },
          { term: 'Learning rate', def: 'The step size scaling each gradient update.' },
          { term: 'Vanishing gradient', def: 'Exponential shrinkage of gradients through many small factors.' },
          { term: 'Reverse-mode autodiff', def: 'One backward sweep yielding every input gradient of a scalar output.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: "Backpropagation's core mathematical tool is:",
            options: [
              'numerical differentiation by finite differences',
              'the chain rule applied over a computational graph',
              'matrix inversion of the Hessian',
              'linear programming',
            ],
            answer: 1,
            explain: 'It multiplies local derivatives along graph paths, reusing cached activations.',
          },
          {
            q: 'Deep stacks of sigmoid units tend to produce vanishing gradients because:',
            options: [
              'sigmoids output only positive values',
              'each sigmoid derivative is at most 0.25',
              'the chain rule forbids products beyond ten layers',
              'losses are always cross-entropy',
            ],
            answer: 1,
            explain: 'Products of factors bounded by 0.25 shrink geometrically with depth, starving early layers.',
          },
          {
            q: 'Reverse-mode automatic differentiation is preferred for network training because:',
            options: [
              "one backward sweep yields the scalar loss's gradient with respect to all weights",
              'it never needs a forward pass',
              'it is exact while finite differences are approximate',
              'it avoids matrix multiplication',
            ],
            answer: 0,
            explain: 'A single sweep, costing about as much as the forward pass, yields every parameter gradient at once.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Multivariable calculus and basic linear algebra are prerequisites. Follow with optimisers and regularisation, then transformer training, where memory-efficient variants dominate.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Score predictions with a loss; gradients point uphill, so step against them.',
          'Networks are computational graphs; backprop is the chain rule run in reverse.',
          'Cached activations make the backward pass cost about the same as the forward.',
          "Sigmoid derivatives ≤ 0.25 explain vanishing gradients; ReLU and residuals fix them.",
          'One reverse sweep yields every weight gradient — reverse-mode autodiff at scale.',
        ],
      },
    ],
  },
  {
    id: 'cs-transformer-attention',
    title: 'Transformers and Attention: How Modern AI Reads',
    domain: 'Computing & AI',
    field: 'Machine Learning',
    branch: 'Deep Learning',
    tier: 'advanced',
    concepts: [
      'The sequential bottleneck',
      'Self-attention as a soft lookup',
      'Queries, keys and values',
      'Scaled dot-product attention',
      'Multi-head attention',
      'Positional encoding and the token pipeline',
    ],
    words: 1188,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: "Read a sentence and your eyes dart backwards and forwards — 'it' grabs its noun, a verb collects its subject, with no respect for order of encounter. The transformer, introduced by Vaswani and colleagues in 2017, gives machines that freedom. Instead of chewing text one word at a time like a recurrent network, it lets every word look at every other word at once and decide what matters. That single mechanism — attention — now sits under the large models behind translation, search, code and conversation.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: "Every headline model of recent years — the chat assistants, the code completers, the protein-structure predictors — stands on this architecture. Attention is why scale became useful: it trains in parallel, it moves information across long distances in a single step, and it keeps working as sequences grow.",
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Recurrent networks process text left to right, compressing everything already read into one running hidden state. By word fifty, the details of word two have been squeezed through dozens of nonlinear updates — gradients fade, information leaks. Worse, the computation is inherently serial: hardware built to do thousands of things at once must wait for step n to finish before step n+1 can begin. Training billion-parameter language models that way would take geological time.',
      },
      {
        kind: 'para',
        text: "Attention instead treats each word as querying a database. A dictionary lookup is hard — one key matches, one value returns. Attention is soft: the query is compared against every key, each comparison becomes a weight, and the result is a blend of all the values. In 'the animal did not cross the street because it was tired', the word 'it' queries the sentence and 'animal' lights up — pointing, made differentiable.",
      },
      {
        kind: 'para',
        text: 'Each input token is embedded into a vector and then projected three times by learned matrices, becoming a query, a key and a value. The query asks what the token is looking for; the key advertises what it offers; the value carries what it passes along if selected. Nobody writes these roles by hand — the network invents its own matching scheme from raw text and gradients alone.',
      },
      {
        kind: 'para',
        text: 'The query is dot-multiplied against every key, the products are divided by the square root of the key dimension, and a softmax turns them into weights that sum to one; the output is the weighted average of the values. The square root matters: dot products of random d-dimensional vectors have variance d, so without scaling, large dimensions produce huge logits and a saturated softmax — near one-hot weights with vanishing gradients.',
      },
      {
        kind: 'para',
        text: 'One attention pattern captures one way of relating words — syntax, coreference, position, topic. So the transformer runs many in parallel: h heads, each with smaller learned projections, each free to specialise in a different relationship. Their outputs are concatenated and mixed by a final linear layer. Eight heads of dimension 64 cost roughly what one head of dimension 512 costs, yet see far more structure.',
      },
      {
        kind: 'para',
        text: "Attention is a set operation: shuffle the input words and the outputs shuffle with them, because nothing in the mechanism knows order. Position is injected by adding a positional encoding to each token embedding — fixed sinusoids in the original paper, learned vectors in most successors. The complete block then alternates attention with a small feed-forward network, wrapped in residual connections and layer normalisation, stacked a few dozen times deep.",
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Scaled dot-product attention',
        latex: '\\text{Attention}(Q, K, V) = \\mathrm{softmax}\\left(\\frac{QK^{\\top}}{\\sqrt{d_k}}\\right)V',
        meaning: 'Each query attends to all keys; the softmax weights then mix the corresponding values.',
      },
      {
        kind: 'formula',
        name: 'Why the square root',
        latex: '\\mathrm{Var}(q \\cdot k) = d_k',
        meaning: 'Dot products grow with dimension; dividing logits by √d_k keeps the softmax responsive instead of saturated.',
      },
      {
        kind: 'formula',
        name: 'Multi-head projection',
        latex: '\\text{head}_i = \\text{Attention}(QW_i^Q,\\; KW_i^K,\\; VW_i^V)',
        meaning: 'Every head learns its own projections, so different heads can specialise in different relationships.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the attention output for one query against two keys, given dot products q·k1 = 4 and q·k2 = 0 with key dimension d_k = 4, and values v1 and v2.',
          'Recall the governing idea: scale each dot product by 1/√d_k, softmax the results into weights, and take the weighted average of the values.',
          'Apply: √d_k = 2, so the logits are 4/2 = 2 and 0/2 = 0; softmax gives e²/(e² + 1) ≈ 0.881 for the first key and 1/(e² + 1) ≈ 0.119 for the second.',
          'State the result: the output is 0.88·v1 + 0.12·v2 — nearly a hard lookup, yet still a smooth, differentiable one, so learning keeps flowing.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Large language models — attention layers stacked dozens deep over hundreds of billions of parameters',
          'Machine translation and document summarisation across hundreds of languages',
          'Protein-structure prediction, where residues attend to sequence and structural partners',
          'Vision transformers that treat an image as a grid of patches attending to one another',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: "The folk tale that attention 'just looks everything up' hides the work: the projections and feed-forward layers carry most of the representational load. Cost grows with the square of sequence length, so feeding whole books into full attention is ruinous. And attention alone has no sense of order — drop the positional encoding and a transformer will read a shuffled sentence without complaint.",
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Self-attention', def: 'A layer where every position computes its output as a weighted blend of all positions in the same sequence.' },
          { term: 'Query, key, value', def: 'The three learned projections of each token: what it seeks, what it advertises, and what it passes on.' },
          { term: 'Softmax', def: 'The normalising function that turns arbitrary scores into positive weights summing to one.' },
          { term: 'Multi-head attention', def: 'Several attention computations in parallel with separate projections, combined at the end.' },
          { term: 'Positional encoding', def: 'Signals added to embeddings so permutation-invariant attention can perceive order.' },
          { term: 'Token', def: 'A chunk of text — word, subword or character — mapped to a vector before the model sees it.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In self-attention, dot products are divided by √d_k because:',
            options: [
              'it normalises the weights to sum to one',
              'raw dot products grow with dimension and saturate the softmax',
              'it makes the computation faster',
              'keys are required to be unit vectors',
            ],
            answer: 1,
            explain: 'Logit variance grows with d_k; unscaled, the softmax collapses toward one-hot weights and gradients vanish.',
          },
          {
            q: 'A transformer with no positional encoding would:',
            options: [
              'fail to train at all',
              'produce the same output for a sentence and its shuffle',
              'only read text backwards',
              'confuse queries with keys',
            ],
            answer: 1,
            explain: 'Attention is permutation-equivariant — order must be injected through positional information.',
          },
          {
            q: 'The cost of full self-attention grows with sequence length n as:',
            options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(1)'],
            answer: 2,
            explain: 'Every query scores against every key, making an n × n matrix — the force behind sparse and sliding-window variants.',
          },
          {
            q: 'Multi-head attention beats a single head of the same total size because:',
            options: [
              'it reduces the parameter count',
              'several heads can learn different relationships in parallel',
              'it removes the need for positional encodings',
              'each head sees a longer sequence',
            ],
            answer: 1,
            explain: 'Splitting the budget across heads lets one layer capture syntax, coreference and positional patterns at once.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Backpropagation and gradient descent are prerequisites — these blocks train like any other network. Follow with training at scale: optimisers, data curation and scaling laws. Then the engineering of inference: key-value caches, quantisation, and the attention variants built for million-token contexts.',
        tone: 'path',
      },
    ],
  },
  {
    id: 'emer-neuromorphic-computing',
    title: 'Neuromorphic Computing: Brains in Silicon',
    domain: 'Emerging & Interdisciplinary',
    field: 'Brain-Inspired Computing',
    branch: 'Hardware Frontiers',
    tier: 'advanced',
    concepts: [
      'The efficiency gap',
      'Spikes and event-driven computation',
      'Leaky integrate-and-fire neurons',
      'Learning by timing: STDP',
      'Co-locating memory and computation',
      'Real chips, open questions',
    ],
    words: 1147,
    readMins: 6,
    addedOn: '2026-10-17',
    blocks: [
      {
        kind: 'para',
        text: 'The human brain runs on roughly twenty watts — a dim lightbulb — out-recognising server racks that draw megawatts, using neurons a thousandfold slower than transistors. The secret is not speed but style: brains signal with sparse spikes, store memory in the same elements that process it, and touch only the information that matters. Neuromorphic computing builds that style into silicon — chips whose neurons fire events at each other, asynchronously, with no clock at all — and bets that architecture, not scale, closes the efficiency gap.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'As the energy bill of AI becomes a strategic problem, event-driven hardware promises order-of-magnitude gains for always-on sensing at the edge — vision that watches for microwatts, audio that listens for milliwatts. It is also a serious bet on a different way of computing, and bets like that are worth understanding before they pay off.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A conventional processor separates memory from logic, so a single multiply may spend a thousand times more energy moving its operands than doing the arithmetic — the von Neumann bottleneck in its modern form. The brain commits no such crime: a synapse stores its weight and performs the multiply at the same place, the moment a spike arrives. Neuromorphic engineering\u2019s first move is to stop paying the data-movement tax.',
      },
      {
        kind: 'para',
        text: 'Biological neurons are silent almost always, speaking in millisecond pulses only when something happens — and information rides in which neurons fire, and when, rather than in continuously varying numbers. A neuromorphic chip inherits the discipline: a neuron that never fires consumes essentially nothing, and computation happens only where and when spikes travel. On-chip networks route each spike as an address event, like a letter delivered on arrival.',
      },
      {
        kind: 'para',
        text: 'The workhorse silicon neuron is a capacitor with a leak. Incoming spikes charge its membrane potential, which constantly decays toward rest; crossing a threshold emits one output spike and resets — the leaky integrate-and-fire model, a differential equation simple enough for a handful of transistors in analogue. Threshold, leak and refractory period capture a surprising share of real neuronal arithmetic, at picojoules per event.',
      },
      {
        kind: 'para',
        text: 'How would such a network learn without backpropagation\u2019s global error signal? Biology\u2019s local rule: if a presynaptic spike arrives just before the postsynaptic neuron fires, strengthen that synapse; just after, weaken it. Spike-timing-dependent plasticity needs no labels and no loss function — merely cause preceding effect — and it sculpts sequence detectors and receptive fields in silicon much as it is believed to in cortex.',
      },
      {
        kind: 'para',
        text: 'Neuromorphic architectures dissolve the bottleneck by scattering memory across the chip: each synapse sits beside the neuron it feeds, weight and computation in one place. Emerging devices push further — memristor crossbars store conductance weights and perform the multiply-accumulate of an incoming spike in a single physical step, mixing Ohm\u2019s law with Kirchhoff\u2019s current law instead of clock cycles.',
      },
      {
        kind: 'para',
        text: 'The silicon is real: research chips with a million spiking neurons and a hundred million synapses run sensory workloads at milliwatts, and commercial spiking cores now ship in edge devices. The honest caveat is training — converting conventional networks to spikes costs accuracy, and native spiking training algorithms remain young. The efficiency is measured; the question still open is how much of deep learning\u2019s competence the style can carry.',
      },
      { kind: 'heading', text: 'The Mathematics' },
      {
        kind: 'formula',
        name: 'Leaky integrate-and-fire neuron',
        latex: '\\tau_m\\frac{dV}{dt} = -(V - V_{rest}) + R\\,I(t)',
        meaning: 'The membrane charges toward its input and leaks toward rest; a spike fires when V crosses threshold, then resets.',
      },
      {
        kind: 'formula',
        name: 'Energy of a synaptic event',
        latex: 'E = \\tfrac{1}{2}\\,C\\,V^{2}',
        meaning: 'Energy to move voltage V onto capacitance C — why tiny analogue swings on tiny nodes are the efficiency path.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: how long a leaky integrate-and-fire neuron with τ_m = 20 ms, rest at 0 mV and a steady input driving the membrane toward 12 mV takes to reach a 10 mV threshold.',
          'Recall the governing idea: under constant input the membrane charges exponentially toward its steady value, V(t) = V∞(1 − e^(−t/τ_m)).',
          'Apply: solve 10 = 12(1 − e^(−t/20)), so e^(−t/20) = 1/6 and t = 20·ln 6 ≈ 20 × 1.79 ≈ 35.8 ms per spike cycle.',
          'State the result: the neuron fires roughly every 36 ms — about 28 spikes per second — so a downstream consumer reading only spikes handles under thirty events a second instead of a continuous megahertz stream.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Always-on vision and audio at milliwatt budgets — wake words, gesture sensing, obstacle avoidance',
          'Edge sensors and implants where replacing a battery means surgery',
          'Robotics control with event cameras that transmit only changes in the scene',
          'Large-scale simulations used to test theories of how brains compute',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: "A trained deep network does not magically run on spiking hardware — conversion costs accuracy, and native training algorithms remain young. Benchmark comparisons are treacherous: energy per inference depends on workload, sparsity and precision settings that vary between papers. And no clock means no free synchrony — debugging an asynchronous machine is its own discipline.",
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Spike', def: 'A brief all-or-nothing pulse — the unit of communication in spiking systems.' },
          { term: 'Leaky integrate-and-fire', def: 'A neuron model that integrates input on a decaying membrane potential and fires at threshold.' },
          { term: 'STDP', def: 'Spike-timing-dependent plasticity — synapses strengthen or weaken based on the order of pre and post spikes.' },
          { term: 'Von Neumann bottleneck', def: 'The energy and latency cost of shuttling data between memory and processor.' },
          { term: 'Memristor', def: 'A resistance-switching device that can store a weight and compute with it in place.' },
          { term: 'Address-event representation', def: 'An asynchronous signalling scheme where a spike\u2019s identity is broadcast on arrival.' },
          { term: 'Spiking neural network', def: 'A network of spiking neurons, usually run asynchronously on neuromorphic hardware.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The energy sin of conventional architectures that neuromorphic designs target is:',
            options: [
              'using silicon instead of carbon',
              'moving data between memory and processing elements',
              'cooling the chips with fans',
              'writing software in low-level languages',
            ],
            answer: 1,
            explain: 'Operand movement can cost orders of magnitude more energy than the arithmetic itself.',
          },
          {
            q: 'A leaky integrate-and-fire neuron emits a spike when:',
            options: [
              'the clock ticks',
              'all synapses fire simultaneously',
              'the membrane potential crosses its threshold',
              'its input exceeds a fixed frequency',
            ],
            answer: 2,
            explain: 'Charge accumulates, leaks, and fires — crossing the threshold is the trigger.',
          },
          {
            q: 'Under STDP, a synapse strengthens when:',
            options: [
              'the postsynaptic neuron fires first',
              'the presynaptic spike arrives just before the postsynaptic firing',
              'both neurons stay silent',
              'the learning rate is zero',
            ],
            answer: 1,
            explain: 'Cause preceding effect: the presynaptic input that helped trigger the output gets the credit.',
          },
          {
            q: 'Because computation is event-driven, an idle neuromorphic neuron:',
            options: [
              'still burns full power',
              'must be reset every second',
              'blocks the neurons sharing its row',
              'consumes essentially nothing until a spike arrives',
            ],
            answer: 3,
            explain: 'No spikes, no switching, no static switching losses — sparsity translates directly into energy.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'A grasp of RC circuits and basic differential equations covers the physics; curiosity covers the rest. Follow with the neuroscience that inspires it — how real neurons encode information — then quantisation and efficient inference on conventional hardware, the competitor these designs must beat.',
        tone: 'path',
      },
    ],
  },
  {
    id: "em-brain-computer-interfaces",
    title: "Brain-Computer Interfaces: Reading and Writing to the Brain",
    domain: "Emerging & Interdisciplinary",
    field: "Brain-Inspired Computing",
    branch: "Merging Minds and Machines",
    tier: "advanced",
    concepts: [
      "The recording ladder: EEG, ECoG, intracortical arrays",
      "The invasiveness-fidelity tradeoff",
      "Decoding intention from neural populations",
      "Closed-loop operation and mutual adaptation",
      "Communication: spelling, handwriting, speech",
      "Movement restoration and epilepsy applications",
      "Neuroethics: privacy, consent, agency",
    ],
    words: 1298,
    readMins: 6,
    addedOn: "2026-10-18",
    blocks: [
      {
        kind: "para",
        text: "In 2012 a woman paralyzed for fifteen years used her thoughts alone to pick up a bottle of coffee and drink it — a robotic arm steered by an array of electrodes reading her motor cortex. A brain-computer interface (BCI) is a device that reads neural activity, decodes it into an output, and, increasingly, writes signals back in. This lesson covers the interface itself — recording, decoding, the closed loop, ethics — while the prosthetics lesson covers the limbs on the far end and the neuromorphic lesson the chips.",
      },
      {
        kind: "callout",
        title: "Why this matters",
        text: "For people with paralysis, ALS, or locked-in syndrome, BCIs are the difference between silence and speech, stillness and action. The same technology raises the sharpest privacy question in engineering — recording from the organ of thought — which is why neurorights entered law before most people noticed.",
        tone: "insight",
      },
      { kind: "heading", text: "Core Concepts" },
      {
        kind: "para",
        text: "Recording comes on a ladder of invasiveness. EEG, scalp electrodes outside the skull, is safe and cheap but reads the smeared sum of millions of neurons through bone — centimeter resolution at best. ECoG, electrode mats laid directly on the cortical surface, requires opening the skull but earns far cleaner signals; it grew out of epilepsy monitoring, where patients already carried such arrays. Intracortical arrays — the Utah array, a bed of about a hundred needle electrodes a few millimeters long — sit inside the cortex and listen to individual neurons. Each rung buys bandwidth with invasiveness: fidelity, surgical risk, and longevity trade against each other.",
      },
      {
        kind: "para",
        text: "The signal becomes output through decoding. Raw recordings become features — spike counts, local field potentials, band powers — and a decoder, from linear filters to recurrent networks, maps them to cursor velocity, letter selections, or arm trajectories. The crucial discovery is that intention survives paralysis: motor cortex still represents attempted movement decades after injury, so the circuits that once commanded a hand can command a machine. Decoders improve with training data, users with practice — each calibration a negotiation.",
      },
      {
        kind: "para",
        text: "Closed loop changes everything. An open loop publishes its guesses; a closed loop feeds them back, and the brain's own plasticity — the rewiring of the neuroplasticity lesson — does half the engineering: users report the cursor beginning to feel like a body part. Writing back is also real: intracortical microstimulation through the same arrays can evoke sensations of touch, so experimental prosthetic hands feel pressure, and implanted stimulators quiet seizures before they bloom.",
      },
      {
        kind: "para",
        text: "Communication is the flagship clinical result. P300 spellers, the oldest BCIs, let users pick letters from a flashing grid by attention alone; the brain's novelty response gives the choice away. Invasive systems leapt forward when attempted handwriting proved decodable — a 2021 trial reached about 90 characters per minute — and 2023 trials decoded attempted speech at roughly 60 to 80 words per minute for participants unable to speak. Movement restoration pairs decoding with stimulation of the patient's own paralyzed muscles — the user's arm, not a robot, moves.",
      },
      {
        kind: "para",
        text: "The hard problems are biological and practical. Electrode sites scar over — gliosis — and signals fade within months to years, so arrays must outlast a lifetime; power and data must cross the skull wirelessly without cooking tissue; decoders must stay stable while the neurons they hear shift; and someone must maintain the system for a patient who cannot. Trials remain small — a few dozen participants across research consortia and the first implanted commercial devices of the mid-2020s, not a consumer product.",
      },
      {
        kind: "para",
        text: "Neuroethics runs ahead of the engineering. Mental privacy: neural data is uniquely intimate, and Chile's 2021 neurorights law is the first legal attempt to fence it off. Informed consent is tangled when participants communicate at a few words per minute. Agency asks whose action a decoded movement is — the user's, the decoder's, or both. Equity asks who gets access; security asks what happens when a networked interface is attacked. None of this is hypothetical; all of it is being negotiated in ethics boards and regulators now.",
      },
      { kind: "heading", text: "Key Formulas" },
      {
        kind: "formula",
        name: "Information transfer rate",
        latex: "B = \\log_2 N + p\\log_2 p + (1-p)\\log_2\\frac{1-p}{N-1}",
        meaning: "Bits per selection among N equally likely targets at accuracy p; multiply by selections per minute for the ITR — the honest speedometer of a BCI.",
      },
      {
        kind: "example",
        title: "Worked Example",
        steps: [
          "Identify what is asked: the information rate of an EEG speller with a 6-by-6 grid (36 targets), one selection every 15 seconds, and 95 percent accuracy.",
          "Recall the formula: bits per selection equal log2 of N, minus the accuracy correction terms.",
          "Apply: log2(36) is about 5.17; at p = 0.95 the correction is 0.95·log2(0.95) + 0.05·log2(0.05/35), roughly -0.07 - 0.47, so B is about 4.6 bits per selection.",
          "State the result: at four selections per minute the system delivers roughly 18 bits per minute — about one letter every 15 seconds. The same arithmetic shows why invasive speech decoding at 60-plus words per minute is another universe: orders of magnitude more bits across the skull.",
        ],
      },
      { kind: "heading", text: "Applications in the Real World" },
      {
        kind: "list",
        items: [
          "Restored communication for paralysis and ALS: spelling, handwriting, and now speech decoding at conversational-adjacent speeds.",
          "Movement restoration combining cortical decoding with stimulation of the patient's own muscles.",
          "Responsive neurostimulation implants that detect and head off seizures in drug-resistant epilepsy.",
          "ECoG mapping in epilepsy surgery that doubles as research on speech and movement encoding.",
          "Deep-brain stimulation — the oldest clinically established brain interface — for Parkinson's, dystonia, and treatment-resistant depression trials.",
        ],
      },
      {
        kind: "callout",
        title: "Common Pitfalls",
        text: "BCIs are not telepathy: they decode a constrained vocabulary of trained signals — cursor directions, attempted words — not thoughts at large. Consumer EEG headbands that score your 'focus' are entertainment-grade signal, not mind reading. Invasiveness is a real and continuing tradeoff, not a solved engineering detail. And dramatic trial results come from tiny populations in expert labs; cables, calibration, and caregiver maintenance decide daily life with a BCI.",
        tone: "warn",
      },
      { kind: "heading", text: "Key Terms" },
      {
        kind: "terms",
        items: [
          { term: "EEG", def: "Scalp recording of summed cortical activity — non-invasive, noisy, centimeter-scale." },
          { term: "ECoG", def: "Electrocorticography — electrodes on the cortical surface, cleaner signals, requires craniotomy." },
          { term: "Utah array", def: "The classic intracortical implant: about a hundred needle electrodes recording single neurons." },
          { term: "Decoder", def: "The algorithm mapping neural features to outputs — from linear filters to recurrent networks." },
          { term: "Closed-loop BCI", def: "A system whose outputs are fed back to the user, letting plasticity and correction cooperate." },
          { term: "Gliosis", def: "Scarring around implanted electrodes that progressively silences their signals." },
          { term: "Neurorights", def: "The proposed legal protections for mental privacy and cognitive liberty." },
        ],
      },
      { kind: "heading", text: "Check Yourself" },
      {
        kind: "quiz",
        items: [
          {
            q: "The core tradeoff along the recording ladder is:",
            options: ["price versus fashion", "signal fidelity versus invasiveness and device longevity", "wireless versus wired headphones", "brain size"],
            answer: 1,
            explain: "EEG buys safety with noise; intracortical arrays buy single-neuron detail with surgery and scarring risk.",
          },
          {
            q: "Closed-loop BCIs outperform open-loop ones because:",
            options: ["they use bigger computers", "feedback lets the user correct errors while brain plasticity adapts to the decoder", "they skip calibration entirely", "the skull conducts better"],
            answer: 1,
            explain: "User and decoder train each other — the biological half of the engineering, as the plasticity lesson explains.",
          },
          {
            q: "The 2021 handwriting result mattered because:",
            options: ["handwriting is faster than speech", "attempted handwriting decoded at about 90 characters per minute — far beyond prior spellers", "it removed the need for surgery", "it worked with any EEG cap"],
            answer: 1,
            explain: "The brain's handwriting dynamics are richly encoded in motor cortex, giving decoders far more signal per attempt.",
          },
          {
            q: "Information transfer rate exists to:",
            options: ["measure network latency", "combine selection count and accuracy into an honest speedometer for BCIs", "price the device", "count neurons recorded"],
            answer: 1,
            explain: "Bits per minute is comparable across spellers, cursors, and speech systems — accuracy alone flatters slow systems.",
          },
        ],
      },
      {
        kind: "callout",
        title: "Where to go next",
        text: "Prerequisites: the action-potential and synapse lessons for the signals being read, and the neuroplasticity lesson for the adaptation that closes the loop. Continue with the prosthetics and bionics lesson for the limbs on the other end, the neuromorphic computing lesson for brain-inspired hardware, and the brain-map lesson for the cortex these arrays inhabit.",
        tone: "path",
      },
    ],
  },
]
