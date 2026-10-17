import type { SectionContent } from '../library';

// Top-up content: 6 ML sections + 4 software engineering sections.

export const mlSeTopupContent: SectionContent[] = [
  // ── 1. Classification Algorithms ──────────────────────────────────────────
  {
    sectionId: "cse-e-ml-s2",
    readingTime: 10,
    intro: "Classifiers carve up the input space in different ways: trees ask greedy questions, naive Bayes multiplies probabilities, kNN defers all work to prediction time, and SVMs search for the widest separating street. This section tours each family and works an entropy-based split calculation end to end. The formulas are small enough to evaluate by hand, which is exactly what exam-style problems ask you to do.",
    objectives: [
      "Explain how decision trees use entropy and information gain to choose splits",
      "Compute information gain for a candidate attribute from raw counts",
      "Compare the inductive biases of naive Bayes, kNN, and support vector machines",
    ],
    concepts: [
      {
        term: "Decision tree",
        kind: "definition",
        statement: "A classifier that recursively partitions the feature space with axis-aligned tests, predicting the majority class of each leaf region.",
        detail: "Trees are built top-down with a greedy split criterion such as information gain or Gini impurity. They are interpretable and handle mixed feature types, but fully grown trees overfit and small data changes can restructure the whole tree, so pruning or depth limits are standard practice.",
      },
      {
        term: "Entropy and information gain",
        kind: "notation",
        statement: "Entropy $H(S) = -\\sum_{i} p_i \\log_2 p_i$ measures class impurity in bits; the gain of attribute $A$ is $Gain(S, A) = H(S) - \\sum_{v} \\frac{|S_v|}{|S|} H(S_v)$.",
        detail: "A balanced two-class set has entropy 1 bit and a pure set has entropy 0. The induction algorithm scores every candidate attribute and picks the largest gain. Gain ratio divides gain by the split's intrinsic information to stop many-valued attributes (like IDs) from looking artificially good.",
      },
      {
        term: "Naive Bayes classifier",
        kind: "method",
        statement: "Applies Bayes rule with the conditional independence assumption: $P(y \\mid x_1, \\dots, x_n) \\propto P(y) \\prod_{i} P(x_i \\mid y)$, predicting the class with the largest posterior.",
        detail: "Training is just counting frequencies, which makes it fast and surprisingly strong on text and other high-dimensional data. The independence assumption is usually violated, yet the arg max decision is often still correct. Laplace smoothing adds pseudocounts so unseen feature values do not zero out the product.",
      },
      {
        term: "k-nearest neighbors",
        kind: "method",
        statement: "Classifies a point by majority vote among its $k$ closest training points under a distance metric, typically Euclidean.",
        detail: "kNN is a lazy learner: it stores the data and does all computation at prediction time, so queries are expensive on large datasets. Small $k$ follows noise (high variance) while large $k$ over-smooths the boundary (high bias), and feature scaling matters because distances mix dimensions.",
      },
      {
        term: "Support vector machine",
        kind: "definition",
        statement: "An SVM learns the separating hyperplane $w^T x + b = 0$ that maximizes the margin $2 / \\lVert w \\rVert$ between the two classes.",
        detail: "Only the training points closest to the boundary — the support vectors — determine the solution; moving any other point changes nothing. The dual formulation replaces inner products with kernels, giving nonlinear boundaries without ever materializing the high-dimensional feature space.",
      },
      {
        term: "The kernel trick",
        kind: "insight",
        statement: "A kernel replaces the inner product $\\langle \\phi(x), \\phi(z) \\rangle$ with a similarity function $K(x, z)$, so a linear learner in a rich feature space costs only one kernel evaluation.",
        detail: "A polynomial or RBF kernel implicitly maps inputs to a space where classes become linearly separable, which is why an SVM can draw curved boundaries in the original space while its optimization stays convex. The choice of kernel and its hyperparameters is where the modeling lives.",
      },
    ],
    examples: [
      {
        title: "Choosing the Root Split with Information Gain",
        problem: "A dataset of 10 labeled samples has 5 positive and 5 negative labels. Candidate attribute A splits the data into: A = yes gives 4 positive / 1 negative (5 samples); A = no gives 1 positive / 4 negative (5 samples). Candidate attribute B splits it into: B = yes gives 3 positive / 2 negative; B = no gives 2 positive / 3 negative. Which attribute should root the tree?",
        steps: [
          {
            label: "Parent entropy",
            text: "The labels are balanced 5/5, so $H(S) = -\\log_2 0.5 - \\log_2 0.5 = 1$ bit — maximal impurity for two classes.",
          },
          {
            label: "Children of attribute A",
            text: "A = yes is 4/1: $H = -(0.8 \\log_2 0.8 + 0.2 \\log_2 0.2) \\approx 0.722$ bits. A = no is symmetric, also 0.722 bits.",
          },
          {
            label: "Gain of A",
            text: "Weighted child entropy $= 0.5 \\times 0.722 + 0.5 \\times 0.722 = 0.722$, so $Gain(A) = 1 - 0.722 = 0.278$ bits.",
          },
          {
            label: "Gain of B",
            text: "Each B child is a 3/2 split with entropy 0.971 bits; the weighted average stays 0.971, so $Gain(B) = 1 - 0.971 = 0.029$ bits.",
          },
          {
            label: "Decision",
            text: "A buys roughly ten times more impurity reduction (0.278 vs 0.029 bits), so the greedy algorithm roots the tree on A.",
          },
        ],
        result: "Split on A — information gain 0.278 bits versus 0.029 bits for B",
      },
    ],
    keyTakeaways: [
      "Trees split on the attribute with the largest information gain: the entropy drop weighted by child sizes.",
      "Naive Bayes trades a false independence assumption for speed in high dimensions; kNN trades training cost for expensive predictions.",
      "An SVM's boundary depends only on the support vectors; kernels buy nonlinearity without giving up convexity.",
    ],
    quiz: [
      {
        q: "A trained linear SVM uses 500 training points, of which only 12 lie on or inside the margin. If you delete the other 488 points and retrain with the same setup, what happens to the decision boundary?",
        options: [
          "It collapses because too few points remain",
          "It stays essentially the same, since only support vectors define it",
          "It rotates 90 degrees to compensate",
          "It becomes the naive Bayes decision rule",
        ],
        answer: 1,
        explanation: "The SVM solution is determined by the support vectors — the points with nonzero dual coefficients. The other points satisfy their margin constraints strictly and can be removed without changing the optimum. The distractors invent mechanisms that do not exist.",
      },
      {
        q: "A kNN classifier with k = 1 scores 100% on training data but only 70% on held-out data. Which change most directly attacks the problem?",
        options: [
          "Set k = 1 but retrain on more features",
          "Increase k to smooth the decision boundary",
          "Switch from Euclidean to Manhattan distance",
          "Duplicate every training point",
        ],
        answer: 1,
        explanation: "k = 1 memorizes every noisy point, so the boundary tracks noise — a variance problem. Raising k averages over neighborhoods and smooths the boundary. Distance choice is secondary here, and duplicating points changes nothing for k = 1.",
      },
      {
        q: "Naive Bayes is called naive because it assumes which of the following?",
        options: [
          "Class priors are uniform",
          "Features are equally informative",
          "Feature values are independent of each other given the class",
          "The data is linearly separable",
        ],
        answer: 2,
        explanation: "The model factorizes the likelihood into per-feature terms conditioned on the class — conditional independence. Priors need not be uniform, features need not be equally informative, and no separability is assumed.",
      },
      {
        q: "A set of 12 samples has 8 positive and 4 negative labels. An attribute splits it into 6 samples with 5 positive / 1 negative and 6 samples with 3 positive / 3 negative. What is the information gain (in bits)?",
        options: [
          "0.093",
          "0.187",
          "0.918",
          "0.412",
        ],
        answer: 0,
        explanation: "Parent entropy H(2/3) ≈ 0.918. Children: H(5/6) ≈ 0.650 and H(1/2) = 1.000, weighted equally gives 0.825. Gain = 0.918 − 0.825 ≈ 0.093. The 0.918 option is the parent entropy itself, and 0.187 double-counts the difference.",
      },
      {
        q: "Which statement about decision tree induction is correct?",
        options: [
          "Splits are chosen to minimize training accuracy",
          "Trees always find the globally optimal partition of the feature space",
          "Entropy must be computed with the natural log for trees to work",
          "Each split is chosen greedily by maximizing impurity reduction, without lookahead",
        ],
        answer: 3,
        explanation: "Top-down induction is greedy: the best attribute is picked at each node with no backtracking, so the result can be suboptimal. The log base only rescales entropy; base 2 gives bits.",
      },
    ],
  },

  // ── 2. Neural Networks ────────────────────────────────────────────────────
  {
    sectionId: "cse-e-ml-s3",
    readingTime: 10,
    intro: "A single perceptron is a weighted vote — strong enough for AND and OR, helpless on XOR. Stacking nonlinear layers removes that ceiling, and backpropagation makes training tractable by applying the chain rule layer by layer. A small numeric forward pass below shows the machinery concretely.",
    objectives: [
      "Explain why a single perceptron cannot represent XOR and how an MLP overcomes the limit",
      "Trace a forward pass through a small network with sigmoid activations",
      "Describe how backpropagation uses the chain rule to assign error credit to every weight",
    ],
    concepts: [
      {
        term: "Perceptron",
        kind: "definition",
        statement: "A linear threshold unit: it computes $z = w^T x + b$ and thresholds it, implementing a half-space decision rule.",
        detail: "The perceptron convergence theorem guarantees it learns any linearly separable dataset in finitely many updates. Its failure on XOR — where no single line separates the four points — famously stalled early neural network research until multilayer networks arrived.",
      },
      {
        term: "Multilayer perceptron (MLP)",
        kind: "definition",
        statement: "Layers of units $a^{(l)} = \\sigma(W^{(l)} a^{(l-1)} + b^{(l)})$ with nonlinear $\\sigma$; the output layer maps the last hidden layer to predictions.",
        detail: "With enough hidden units an MLP can approximate any continuous function on a compact set to arbitrary accuracy (universal approximation). Depth buys efficiency: compositional functions need far fewer units when expressed in layers rather than one wide slab.",
      },
      {
        term: "Activation functions",
        kind: "definition",
        statement: "Elementwise nonlinearities applied to each unit's pre-activation, such as sigmoid $\\sigma(z) = 1/(1 + e^{-z})$, tanh, or ReLU $\\max(0, z)$.",
        detail: "Without a nonlinearity, composing linear layers collapses into one big linear map and depth adds no power. Sigmoid and tanh saturate at their tails, which shrinks gradients; ReLU keeps a constant gradient for positive inputs and is the modern default.",
      },
      {
        term: "Backpropagation",
        kind: "method",
        statement: "Computes $\\partial L / \\partial w$ for every weight by applying the chain rule backward: errors $\\delta^{(l)} = (W^{(l+1)})^T \\delta^{(l+1)} \\odot \\sigma'(z^{(l)})$ flow from the loss back through the layers.",
        detail: "Backprop is dynamic programming on the chain rule: each layer reuses the layer above's delta instead of recomputing all paths to it. Combined with gradient descent it costs about the same as a forward pass, rather than one pass per weight.",
      },
      {
        term: "Loss functions",
        kind: "definition",
        statement: "The training objective: mean squared error $L = \\frac{1}{n} \\sum_i (y_i - \\hat{y}_i)^2$ for regression, cross-entropy $L = -\\sum_i y_i \\log \\hat{y}_i$ for classification.",
        detail: "Cross-entropy paired with a sigmoid or softmax output yields the clean gradient $\\hat{y} - y$, avoiding the saturating sigmoid derivative that plagues MSE in classification. The loss must be differentiable (at least almost everywhere) for gradient training to work.",
      },
      {
        term: "Gradient descent and the learning rate",
        kind: "method",
        statement: "Weights are updated iteratively: $w \\leftarrow w - \\eta \\nabla_w L$, where $\\eta$ is the learning rate.",
        detail: "Too large $\\eta$ overshoots and diverges; too small crawls and stalls on plateaus. Stochastic and mini-batch variants estimate the gradient from samples, trading exactness for cheap, noisy updates that often escape shallow local minima.",
      },
    ],
    examples: [
      {
        title: "Two-Layer Forward Pass by Hand",
        problem: "A network has one hidden neuron with weights $w_1 = 0.5$, $w_2 = 0.3$ and bias $b_1 = 0.1$ with sigmoid activation, followed by one output neuron with weight $w_3 = 1.5$ and bias $b_2 = -0.5$, also sigmoid. Compute the output for input $x = (2, -1)$.",
        steps: [
          {
            label: "Hidden pre-activation",
            text: "$z_1 = 0.5 \\times 2 + 0.3 \\times (-1) + 0.1 = 1.0 - 0.3 + 0.1 = 0.8$.",
          },
          {
            label: "Hidden activation",
            text: "$a_1 = \\sigma(0.8) = 1 / (1 + e^{-0.8}) \\approx 1 / 1.449 \\approx 0.690$.",
          },
          {
            label: "Output pre-activation",
            text: "$z_2 = 1.5 \\times 0.690 - 0.5 \\approx 0.535$.",
          },
          {
            label: "Output activation",
            text: "$\\hat{y} = \\sigma(0.535) = 1 / (1 + e^{-0.535}) \\approx 1 / 1.586 \\approx 0.631$.",
          },
        ],
        result: "ŷ ≈ 0.631",
      },
    ],
    keyTakeaways: [
      "Composing linear layers without nonlinearities stays linear — the activation is what gives depth its power.",
      "Backpropagation is the chain rule organized as dynamic programming, so gradients cost about the same as a forward pass.",
      "Saturation of sigmoid and tanh units dries up gradients; ReLU's constant positive slope made deep networks practical.",
    ],
    quiz: [
      {
        q: "Why can a single perceptron not compute XOR?",
        options: [
          "XOR requires at least three output units",
          "XOR's four points are not linearly separable, and a perceptron draws one straight line",
          "Perceptrons cannot take binary inputs",
          "XOR needs a recurrent connection",
        ],
        answer: 1,
        explanation: "A perceptron implements a half-space, and any line leaves at least one XOR point on the wrong side. Two hidden units can carve XOR into two linearly separable subproblems, so an MLP with one hidden layer suffices.",
      },
      {
        q: "What happens if you remove all activation functions from a 10-layer network (linear weights only)?",
        options: [
          "It becomes a 10-times-more-expressive nonlinear model",
          "It can no longer produce any output",
          "It collapses to a single linear transformation of the input",
          "Training becomes impossible because gradients vanish exactly",
        ],
        answer: 2,
        explanation: "Products of linear maps are linear: W10 · … · W1 is one effective matrix. Outputs still exist and gradients do not vanish identically — the model simply loses all the power depth was supposed to add.",
      },
      {
        q: "Backpropagation computes the gradient of the loss with respect to each weight by...",
        options: [
          "Finite differences, perturbing one weight at a time",
          "Applying the chain rule backward from the loss, reusing each layer's error signal",
          "Random sampling of weight subsets",
          "Solving the normal equations for the network",
        ],
        answer: 1,
        explanation: "Backprop is the chain rule arranged so shared sub-expressions (the deltas) are computed once per layer. Finite differences would need one forward pass per weight — exactly the cost backpropagation exists to avoid.",
      },
      {
        q: "A neuron has weights (0.5, -0.5), bias 0, and a sigmoid activation. What is its output for input (2, 2)?",
        options: [
          "0.50",
          "0.73",
          "0.27",
          "1.00",
        ],
        answer: 0,
        explanation: "z = 0.5·2 + (−0.5)·2 + 0 = 0, and σ(0) = 0.5. Symmetric weights on a symmetric input cancel; the other values would require a nonzero pre-activation.",
      },
      {
        q: "Deep networks largely replaced sigmoid hidden units with ReLU because...",
        options: [
          "ReLU outputs are always between 0 and 1",
          "ReLU's gradient is a nonzero constant for positive inputs, so it does not saturate",
          "ReLU makes the loss convex",
          "ReLU removes the need for biases",
        ],
        answer: 1,
        explanation: "Sigmoid derivatives peak at 0.25 and vanish in the tails, so stacked layers multiply vanishing factors. ReLU passes gradient 1 for z > 0, which combats vanishing gradients; the loss stays nonconvex and biases remain useful.",
      },
    ],
  },

  // ── 3. Clustering, PCA & Evaluation ───────────────────────────────────────
  {
    sectionId: "cse-e-ml-s4",
    readingTime: 10,
    intro: "Unsupervised learning has no labels to lean on, so evaluation shifts to internal geometry and careful downstream metrics. K-means partitions by distance, PCA compresses by variance, and precision, recall, and F1 quantify classifier quality from raw counts. This section ties the threads together with numbers you can check by hand.",
    objectives: [
      "Run k-means by hand through its assignment and update steps",
      "Compute silhouette, precision, recall, and F1 from raw counts",
      "Explain why PCA's principal directions are eigenvectors of the covariance matrix",
    ],
    concepts: [
      {
        term: "K-means clustering",
        kind: "method",
        statement: "Minimizes within-cluster scatter $J = \\sum_{i=1}^{k} \\sum_{x \\in C_i} \\lVert x - \\mu_i \\rVert^2$ by alternating between assigning points to the nearest centroid and recomputing centroids as cluster means.",
        detail: "Each half-step strictly decreases $J$, so the loop converges — but only to a local optimum that depends on initialization, hence restarts or k-means++. The user must choose $k$ (elbow or silhouette), and Euclidean clusters come out convex, so rings and moons defeat it.",
      },
      {
        term: "Silhouette coefficient",
        kind: "notation",
        statement: "For point $i$: $s(i) = \\frac{b(i) - a(i)}{\\max(a(i), b(i))}$, where $a(i)$ is the mean distance to its own cluster and $b(i)$ the mean distance to the nearest other cluster.",
        detail: "Values lie in $[-1, 1]$: near +1 means the point sits snug inside its cluster, near 0 means it is on a boundary, and negative means it is probably assigned to the wrong cluster. The average silhouette across points is a standard internal criterion for choosing $k$.",
      },
      {
        term: "Principal component analysis (PCA)",
        kind: "method",
        statement: "Projects data onto the eigenvectors of the covariance matrix with the largest eigenvalues; the first principal component is the direction of maximum variance.",
        detail: "Centering the data first is essential. Eigenvalue $\\lambda_j$ equals the variance captured along eigenvector $v_j$, so keeping the top $m$ eigenvectors is the best rank-$m$ linear compression in squared-error terms. PCA is unsupervised — high-variance directions need not be class-discriminative.",
      },
      {
        term: "Confusion matrix counts",
        kind: "notation",
        statement: "TP = true positives, FP = negatives predicted positive, FN = positives predicted negative, TN = true negatives — the four outcomes of binary classification.",
        detail: "Every standard metric is a ratio of these counts, which is why you should always read them off the matrix. The positive class is whatever you declare it to be (spam, disease, defect), and swapping classes trades the roles of precision and recall.",
      },
      {
        term: "Precision, recall, and F1",
        kind: "definition",
        statement: "Precision $= TP / (TP + FP)$ — of the flagged, how many were right. Recall $= TP / (TP + FN)$ — of the real cases, how many were found. $F1 = 2PR / (P + R)$.",
        detail: "F1 is the harmonic mean, dominated by the smaller of the two, so you cannot buy a high F1 with one strong component. Raising the decision threshold trades recall for precision; the F-beta family lets you weight one side heavier.",
      },
      {
        term: "Eigen-decomposition of the covariance matrix",
        kind: "insight",
        statement: "The covariance matrix is symmetric positive semi-definite, so its eigenvectors are orthogonal and its eigenvalues are non-negative variances along those axes.",
        detail: "Orthogonality is what makes principal components uncorrelated — projecting onto them decorrelates the data. The trace of the covariance equals total variance equals the sum of eigenvalues, which is exactly how explained-variance ratios are computed.",
      },
    ],
    examples: [
      {
        title: "Precision, Recall, and F1 from a Confusion Matrix",
        problem: "A spam classifier evaluated on 100 emails produces TP = 40, FP = 10, FN = 20, TN = 30. Compute precision, recall, F1, and accuracy.",
        steps: [
          {
            label: "Precision",
            text: "$P = TP / (TP + FP) = 40 / 50 = 0.80$ — of the flagged emails, 80% truly were spam.",
          },
          {
            label: "Recall",
            text: "$R = TP / (TP + FN) = 40 / 60 \\approx 0.667$ — two-thirds of the real spam was caught.",
          },
          {
            label: "F1",
            text: "$F_1 = 2PR / (P + R) = 2(0.80)(0.667) / 1.467 \\approx 0.727$ — pulled toward the weaker side.",
          },
          {
            label: "Accuracy",
            text: "$(TP + TN) / 100 = 70 / 100 = 0.70$, which hides the 20 missed spams that F1 exposes.",
          },
        ],
        result: "P = 0.80, R ≈ 0.667, F1 ≈ 0.727, accuracy = 0.70",
      },
      {
        title: "Finding the First Principal Component",
        problem: "A centered 2D dataset has a covariance matrix with 2 on the diagonal and 1 off the diagonal. Find the first principal component and the variance it explains.",
        steps: [
          {
            label: "Set up the eigenproblem",
            text: "Solve $\\det(C - \\lambda I) = (2 - \\lambda)^2 - 1 = 0$ for the covariance matrix $C$.",
          },
          {
            label: "Solve for eigenvalues",
            text: "$(2 - \\lambda)^2 = 1$ gives $\\lambda = 3$ or $\\lambda = 1$; total variance $= 3 + 1 = 4$.",
          },
          {
            label: "First eigenvector",
            text: "For $\\lambda = 3$: $(C - 3I)v = 0$ gives $-v_1 + v_2 = 0$, so $v \\propto (1, 1)$, normalized to $(1, 1) / \\sqrt{2}$.",
          },
          {
            label: "Explained variance",
            text: "The first component carries $3 / (3 + 1) = 75\\%$ of the variance; projecting onto $(1,1)/\\sqrt{2}$ compresses the data with least squared loss.",
          },
        ],
        result: "PC1 = (1, 1)/√2 with eigenvalue 3 — 75% variance explained",
      },
    ],
    keyTakeaways: [
      "K-means alternates nearest-centroid assignment with mean recomputation and converges only to a local optimum; choose k with the silhouette or elbow.",
      "Precision answers 'of the flagged, how many were right'; recall answers 'of the real cases, how many were found'; F1 is their harmonic mean.",
      "PCA keeps the top-eigenvalue eigenvectors of the centered covariance matrix — an orthogonal basis ordered by explained variance.",
    ],
    quiz: [
      {
        q: "You run k-means 10 times on the same data and get noticeably different clusterings. The most likely explanation is that...",
        options: [
          "k-means has a bug unless results are identical",
          "The algorithm converged to different local optima from different initializations",
          "Euclidean distance is undefined for this data",
          "The value of k was too small",
        ],
        answer: 1,
        explanation: "k-means only guarantees convergence to a local minimum of J, and which one depends on the starting centroids — which is exactly why restarts or k-means++ initialization are standard practice.",
      },
      {
        q: "A point has silhouette s = −0.4. What does that mean?",
        options: [
          "It is deep inside its own cluster",
          "It is on average closer to a neighboring cluster than to its own — likely misassigned",
          "It is exactly on a cluster boundary",
          "The value is impossible",
        ],
        answer: 1,
        explanation: "A negative silhouette means b(i) < a(i): the point's average distance to its own cluster exceeds the distance to the nearest other cluster. s = 0 is the boundary case and +1 is snug; values must lie in [−1, 1].",
      },
      {
        q: "PCA is applied to centered data with covariance eigenvalues 5, 3, and 0.2. Keeping the first two components explains what fraction of the variance?",
        options: [
          "About 61% — the first component alone",
          "About 80%",
          "About 97%",
          "About 37%",
        ],
        answer: 2,
        explanation: "Total variance = 5 + 3 + 0.2 = 8.2, so the first two components give 8 / 8.2 ≈ 97.6%. The 61% figure is what keeping only the first component would give; the others match no partial sum.",
      },
      {
        q: "A classifier produces TP = 30, FP = 20, FN = 10. What are precision and F1?",
        options: [
          "P = 0.60, F1 ≈ 0.67",
          "P = 0.75, F1 ≈ 0.71",
          "P = 0.60, F1 = 0.75",
          "P = 0.67, F1 = 0.60",
        ],
        answer: 0,
        explanation: "Precision = 30/50 = 0.60; recall = 30/40 = 0.75; F1 = 2(0.60)(0.75)/1.35 = 0.9/1.35 ≈ 0.67. The 0.75 figure is recall, not precision, and F1 is dragged toward the weaker side.",
      },
      {
        q: "A dataset has 99% negatives. A trivial classifier that always predicts negative scores 99% accuracy. Which measurement exposes its uselessness?",
        options: [
          "Training loss on the majority class",
          "Its model size",
          "Its runtime per prediction",
          "Recall on the positive class, which is 0",
        ],
        answer: 3,
        explanation: "The all-negative rule never flags a positive: TP = 0, so recall = 0 and precision is zero or undefined — F1 collapses. Accuracy hides this under class imbalance, which is exactly why precision and recall reporting matters.",
      },
    ],
  },

  // ── 4. Ensembles & Bayesian Learning ──────────────────────────────────────
  {
    sectionId: "cse-e-ml-s5",
    readingTime: 10,
    intro: "Ensembles win by combining many weak, diverse learners: bagging averages variance away, while boosting reweights training toward the hard cases. Bayesian learning supplies the probability machinery underneath, from naive Bayes to posterior updating. Both come with crisp formulas you can evaluate by hand.",
    objectives: [
      "Explain why bagging reduces variance while boosting reduces bias",
      "Carry out one full round of AdaBoost weight updates numerically",
      "Apply Bayes rule to turn a prior and a likelihood into a posterior",
    ],
    concepts: [
      {
        term: "Bagging (bootstrap aggregating)",
        kind: "method",
        statement: "Train the same learner on $B$ bootstrap resamples of the data and average (or majority-vote) the predictions: $\\hat{f}(x) = \\frac{1}{B} \\sum_b \\hat{f}^{(b)}(x)$.",
        detail: "Bootstrap sampling decorrelates the base models by feeding each a different perturbed dataset. Averaging $B$ roughly independent, equally noisy models shrinks prediction variance by about a factor of $B$ while leaving bias unchanged — which is why high-variance, low-bias learners like deep trees are the classic base model.",
      },
      {
        term: "Random forest",
        kind: "method",
        statement: "Bagged decision trees plus random feature subsets: at each split, only a random sample of features (classically about $\\sqrt{d}$) may be considered.",
        detail: "The extra randomness attacks the one failure mode bagging cannot fix — correlated trees making the same mistakes. Out-of-bag samples give a free validation estimate, and per-split feature sampling keeps individual trees weak enough to disagree usefully.",
      },
      {
        term: "Boosting (AdaBoost)",
        kind: "method",
        statement: "Builds an additive model $F_T(x) = \\sum_t \\alpha_t h_t(x)$ sequentially: each new weak learner focuses on the examples the current ensemble gets wrong.",
        detail: "Each round reweights the training set, fits a weak learner (often a depth-1 stump), and adds it with weight proportional to its accuracy. Because later learners chase errors, boosting drives bias down; but it eagerly fits hard examples, so label noise can drag it into overfitting.",
      },
      {
        term: "AdaBoost weight update",
        kind: "law",
        statement: "With weighted round error $\\epsilon_t$, the learner weight is $\\alpha_t = \\frac{1}{2} \\ln \\frac{1 - \\epsilon_t}{\\epsilon_t}$ and example weights update as $w_i \\leftarrow w_i \\, e^{-\\alpha_t y_i h_t(x_i)}$, then renormalize.",
        detail: "Misclassified points ($y_i h_t(x_i) = -1$) are multiplied by $e^{+\\alpha_t} > 1$ and grow; correct points shrink by $e^{-\\alpha_t}$. A learner with $\\epsilon_t = 0.5$ is coin-flip useless and gets $\\alpha_t = 0$; the classic algorithm stops or reweights when error reaches 0.5.",
      },
      {
        term: "Bayes rule",
        kind: "theorem",
        statement: "$P(A \\mid B) = \\frac{P(B \\mid A) P(A)}{P(B)}$ — the posterior is the likelihood times the prior, divided by the evidence.",
        detail: "It is the bookkeeping identity for flipping conditional probabilities. With rare events, a highly accurate test can still yield a small posterior: the false-positive population of the healthy majority can outweigh the true positives of the rare condition.",
      },
      {
        term: "Bias-variance view of ensembles",
        kind: "insight",
        statement: "Averaging independent models cancels uncorrelated errors (variance falls); sequentially correcting errors removes systematic mistakes (bias falls).",
        detail: "Bagging is the variance weapon — combine strong, unstable learners. Boosting is the bias weapon — combine weak, stable learners in an adaptive order. This is also why bagging parallelizes trivially while boosting is inherently sequential.",
      },
    ],
    examples: [
      {
        title: "One Round of AdaBoost Weight Updating",
        problem: "Round 1 of boosting runs on 10 samples with uniform weights 0.1 each. The weak learner misclassifies 2 samples. Update the weights for round 2.",
        steps: [
          {
            label: "Round error",
            text: "2 of 10 equally weighted samples are wrong: $\\epsilon_1 = 2 \\times 0.1 = 0.2$.",
          },
          {
            label: "Learner weight",
            text: "$\\alpha_1 = 0.5 \\ln(0.8 / 0.2) = 0.5 \\ln 4 \\approx 0.693$.",
          },
          {
            label: "Up-weight the wrong",
            text: "Misclassified weights multiply by $e^{\\alpha_1} = e^{0.5 \\ln 4} = \\sqrt{4} = 2$: each goes $0.1 \\to 0.2$.",
          },
          {
            label: "Down-weight the right",
            text: "Correctly classified weights multiply by $e^{-\\alpha_1} = 0.5$: each goes $0.1 \\to 0.05$.",
          },
          {
            label: "Normalize",
            text: "Sum $= 2(0.2) + 8(0.05) = 0.8$; divide through: misclassified $\\to 0.25$ each, correct $\\to 0.0625$ each.",
          },
        ],
        result: "Misclassified weights end at 0.25 vs 0.0625 — a 4:1 focus ratio for round 2",
      },
      {
        title: "Bayes Rule with a Rare Disease",
        problem: "A disease has 1% prevalence. A test has 99% sensitivity (P(positive | disease) = 0.99) and a 5% false-positive rate. If a random person tests positive, what is the probability they have the disease?",
        steps: [
          {
            label: "True-positive mass",
            text: "$P(+ \\mid D) P(D) = 0.99 \\times 0.01 = 0.0099$.",
          },
          {
            label: "False-positive mass",
            text: "$P(+ \\mid \\neg D) P(\\neg D) = 0.05 \\times 0.99 = 0.0495$.",
          },
          {
            label: "Total evidence",
            text: "$P(+) = 0.0099 + 0.0495 = 0.0594$.",
          },
          {
            label: "Posterior",
            text: "$P(D \\mid +) = 0.0099 / 0.0594 = 1/6 \\approx 0.167$ — the 99% sensitivity is outweighed by the 99% healthy population.",
          },
        ],
        result: "P(disease | positive) ≈ 0.167 (about 17%)",
      },
    ],
    keyTakeaways: [
      "Bagging leaves bias alone but cuts variance roughly like 1/B for decorrelated models; random forests force that decorrelation with random feature subsets.",
      "In AdaBoost, misclassified weights grow by a factor of e^{alpha_t} each round, and alpha_t = 0.5·ln((1−e)/e) weights the learner in the final vote.",
      "Bayes rule turns priors and likelihoods into posteriors — with rare conditions, even highly accurate tests yield surprisingly low posteriors.",
    ],
    quiz: [
      {
        q: "Which ensemble construction most directly reduces the variance of the final predictor?",
        options: [
          "Boosting, by reweighting hard examples",
          "Bagging with bootstrap resamples and averaged predictions",
          "Increasing the learning rate of a single network",
          "Pruning a single decision tree",
        ],
        answer: 1,
        explanation: "Averaging over bootstrap samples cancels uncorrelated errors, shrinking variance while bias is untouched. Boosting targets bias; the other two are single-model tweaks with no averaging effect.",
      },
      {
        q: "Random forests improve on plain bagged trees primarily by...",
        options: [
          "Restricting each split to a random feature subset, which decorrelates the trees",
          "Growing much deeper trees",
          "Using a validation set to pick the best single tree",
          "Weighting trees by their training accuracy",
        ],
        answer: 0,
        explanation: "Bagged trees stay correlated because dominant features get chosen everywhere; random feature subsets force different trees to explore different structure, which is what makes the average effective.",
      },
      {
        q: "In an AdaBoost round the weighted error is e = 0.3. What is the learner weight alpha?",
        options: [
          "0.30",
          "0.42",
          "0.85",
          "0.15",
        ],
        answer: 1,
        explanation: "α = ½ ln(0.7/0.3) = ½ ln(2.33) ≈ 0.42. The 0.85 distractor forgets the ½ factor, and 0.30 just echoes the error.",
      },
      {
        q: "A spam filter: P(spam) = 0.4, P(word | spam) = 0.9, P(word | not spam) = 0.1. Given the word appears, what is P(spam | word)?",
        options: [
          "0.50",
          "0.90",
          "0.64",
          "0.86",
        ],
        answer: 3,
        explanation: "Numerator 0.9 × 0.4 = 0.36; evidence 0.36 + 0.1 × 0.6 = 0.42; posterior = 0.36/0.42 ≈ 0.86. The 0.90 option ignores the prior and the false-positive mass; 0.50 would require equal priors and symmetric likelihoods.",
      },
      {
        q: "Label noise flips a few training labels. Which ensemble is more likely to overfit those mislabeled points, and why?",
        options: [
          "Bagging, because bootstrap samples concentrate on them",
          "Boosting, because it exponentially reweights hard (including mislabeled) examples each round",
          "Both equally, since they are both ensembles",
          "Neither can fit mislabeled points",
        ],
        answer: 1,
        explanation: "AdaBoost treats persistently misclassified points as the most important ones and keeps inflating their weights — genuine noise gets chased forever. Bagging's resampling dilutes noise instead of focusing it.",
      },
    ],
  },

  // ── 5. Classification & Clustering Practice ───────────────────────────────
  {
    sectionId: "cse-e-ml-s6",
    readingTime: 9,
    intro: "Choosing a model is itself a skill: you need a trustworthy estimate of future performance before the future arrives. This section covers the telltale signs of overfitting, the mechanics of k-fold cross-validation, and how to run a disciplined model-selection experiment. The worked example selects a kNN hyperparameter from CV scores.",
    objectives: [
      "Diagnose overfitting and underfitting from train and validation curves",
      "Explain how k-fold cross-validation spends data efficiently and where it can mislead",
      "Select a model and hyperparameters using validation evidence rather than training accuracy",
    ],
    concepts: [
      {
        term: "Model selection",
        kind: "method",
        statement: "Choosing among algorithms and hyperparameters using held-out or cross-validated performance, never the training metric alone.",
        detail: "The core discipline: any score used to make a choice has been optimized against and is therefore optimistic; a final untouched test set (or nested cross-validation) is needed for an honest estimate. Selection compares candidate configurations; assessment reports the chosen one's expected error.",
      },
      {
        term: "Overfitting",
        kind: "definition",
        statement: "The model captures noise and idiosyncrasies of the training set: training error keeps falling while validation error rises, opening a generalization gap.",
        detail: "Classic signs: a large train-validation gap, wild coefficients or boundaries, and performance that degrades as capacity grows past a point. Cures include more data, regularization, lower capacity, early stopping, and ensembling. The opposite failure, underfitting, shows both errors high and close together.",
      },
      {
        term: "K-fold cross-validation",
        kind: "method",
        statement: "Split the data into $k$ folds; train on $k-1$ folds and validate on the held-out fold, rotating so every example is validated exactly once, then average the $k$ scores.",
        detail: "Each model trains on about $(k-1)/k$ of the data, so folds are reused and scores share training data — the estimate has lower bias than a single split but the fold scores are not independent. Leave-one-out (k = n) maximizes training data per fold but is expensive and returns highly correlated fold scores.",
      },
      {
        term: "Bias-variance tradeoff",
        kind: "insight",
        statement: "With squared loss, expected test error decomposes into bias² + variance + irreducible noise; capacity buys bias reduction at the price of variance.",
        detail: "Underfitting means high bias and low variance; overfitting means low bias and high variance. Regularization moves you along this frontier rather than escaping it — the art is stopping at the validation minimum, not the training minimum.",
      },
      {
        term: "Stratification and data hygiene",
        kind: "method",
        statement: "Stratified folds preserve class proportions in every train and validation split; all preprocessing must be fit inside each fold to avoid leakage.",
        detail: "With a 5% positive class, plain random folds can leave a validation fold nearly empty of positives. Leakage — fitting scalers, imputers, or feature selection on the full dataset before splitting — quietly inflates CV scores because validation information seeps into training.",
      },
    ],
    examples: [
      {
        title: "Selecting k in kNN with 5-Fold Cross-Validation",
        problem: "5-fold CV accuracies for kNN on the same data: k = 1 gives [0.70, 0.72, 0.68, 0.71, 0.69]; k = 5 gives [0.78, 0.80, 0.76, 0.79, 0.77]; k = 20 gives [0.75, 0.74, 0.76, 0.75, 0.75]. Training accuracy for k = 1 is 1.00. Which k should be selected?",
        steps: [
          {
            label: "Average the folds",
            text: "k = 1: mean 0.70; k = 5: mean 0.78; k = 20: mean 0.75.",
          },
          {
            label: "Flag the overfit candidate",
            text: "k = 1 hits 1.00 on training data but 0.70 in CV — a 0.30 gap, the classic variance signature of memorization.",
          },
          {
            label: "Flag the over-smoothed candidate",
            text: "k = 20 drops to 0.75: the neighborhood is now so large it blends classes together, so bias is creeping up.",
          },
          {
            label: "Select",
            text: "k = 5 maximizes CV accuracy; report it as the choice and reserve a final untouched test set for the honest number.",
          },
        ],
        result: "Choose k = 5 (mean CV accuracy 0.78)",
      },
    ],
    keyTakeaways: [
      "A big train-validation gap flags overfitting; both errors high and close together flags underfitting.",
      "K-fold CV reuses data across folds — great for selection, but fold scores are correlated and the winner's CV score is optimistic.",
      "Hyperparameters are chosen on validation or CV evidence; the test set is spent exactly once, at the end.",
    ],
    quiz: [
      {
        q: "Training accuracy is 0.99 and validation accuracy is 0.71, and the gap grows with more training. Diagnosis?",
        options: [
          "Underfitting — the model is too simple",
          "Overfitting — the model memorizes the training data including its noise",
          "The validation set is too large",
          "This is healthy behavior for a good model",
        ],
        answer: 1,
        explanation: "Near-perfect training performance with mediocre validation performance is the signature of memorization. Underfitting would show both accuracies low and close; the fix here is regularization or more data, not more capacity.",
      },
      {
        q: "In 5-fold cross-validation with 500 examples, how many examples are in each validation fold, and how often is each example used for validation?",
        options: [
          "100 per fold, exactly once",
          "250 per fold, twice",
          "100 per fold, five times",
          "500 per fold, once",
        ],
        answer: 0,
        explanation: "500/5 = 100 held out per round; the rotation guarantees each example lands in the validation fold exactly once across the five rounds.",
      },
      {
        q: "Compared with 10-fold CV, leave-one-out CV typically has...",
        options: [
          "Higher bias and lower cost",
          "No difference in expectation",
          "Lower bias but higher variance and much higher cost",
          "Lower variance because it uses more folds",
        ],
        answer: 2,
        explanation: "LOOCV trains on nearly all the data, so its estimate is less pessimistic (lower bias), but each fold's model is nearly identical, making fold scores highly correlated (higher variance), and it needs n full trainings.",
      },
      {
        q: "A dataset has 3% positives. Which cross-validation setup is most appropriate for a classifier?",
        options: [
          "Plain 10-fold CV — randomness will handle it",
          "Stratified k-fold so every fold keeps about 3% positives",
          "A single 50/50 train/test split",
          "LOOCV, because rare classes need maximum training data",
        ],
        answer: 1,
        explanation: "Stratification guarantees each validation fold carries the class mix; unstratified folds can randomly contain almost no positives, making fold scores meaningless. A single split wastes data and is noisier still.",
      },
    ],
  },

  // ── 6. Dimensionality Reduction & Regression ──────────────────────────────
  {
    sectionId: "cse-e-ml-s7",
    readingTime: 10,
    intro: "Regression fits real-valued outputs by minimizing squared error, and its geometry — projections, norms, eigenvectors — is the same geometry behind dimensionality reduction. This section derives the least-squares solution, works it on three data points, and connects ridge, lasso, and SVD to PCA. The through-line: penalize complexity to buy generalization.",
    objectives: [
      "Derive and compute the ordinary least-squares solution on real numbers",
      "Contrast ridge (L2) and lasso (L1) penalties and their effects on coefficients",
      "Explain how the SVD of centered data recovers PCA's directions and variances",
    ],
    concepts: [
      {
        term: "Ordinary least squares",
        kind: "method",
        statement: "Minimizes $\\lVert y - Xw \\rVert^2$ over weights $w$; the normal equations $X^T X w = X^T y$ give the closed form $\\hat{w} = (X^T X)^{-1} X^T y$ when $X^T X$ is invertible.",
        detail: "Geometrically, $X \\hat{w}$ is the orthogonal projection of $y$ onto the column space of $X$. The solution is unique exactly when the features are linearly independent; collinear features make $X^T X$ singular, and the minimal-norm solution is selected via the pseudo-inverse.",
      },
      {
        term: "Ridge regression (L2)",
        kind: "method",
        statement: "Minimizes $\\lVert y - Xw \\rVert^2 + \\lambda \\lVert w \\rVert_2^2$, shrinking the OLS solution to $\\hat{w} = (X^T X + \\lambda I)^{-1} X^T y$.",
        detail: "The penalty makes the system invertible even under collinearity and pulls coefficients toward zero without ever setting them exactly to zero. Cross-validation picks $\\lambda$; as it approaches 0 ridge returns OLS, and as it grows the estimate approaches zero — a continuous bias-for-variance trade.",
      },
      {
        term: "Lasso (L1)",
        kind: "method",
        statement: "Minimizes $\\lVert y - Xw \\rVert^2 + \\lambda \\lVert w \\rVert_1$, which drives some coefficients exactly to zero, performing feature selection.",
        detail: "The L1 ball has corners on the axes, so the constrained least-squares solution often lands exactly on a sparse point — unlike the round L2 ball, which only grazes smoothly. Prefer lasso when few features are believed to matter; ridge usually wins for dense weak signals and prediction stability.",
      },
      {
        term: "Singular value decomposition",
        kind: "notation",
        statement: "$X = U \\Sigma V^T$ factors any matrix into orthonormal $U$, a diagonal $\\Sigma$ of singular values, and orthonormal $V^T$.",
        detail: "For centered data, the right singular vectors (columns of $V$) are the principal directions, and the singular values satisfy $\\sigma_j^2 = (n-1) \\lambda_j$ with covariance eigenvalues $\\lambda_j$. Truncating to the top $m$ singular values gives the best rank-$m$ approximation of $X$ — PCA and low-rank modeling are the same computation.",
      },
      {
        term: "Eigenvalues and eigenvectors",
        kind: "definition",
        statement: "For a square matrix $A$, $Av = \\lambda v$ means the direction $v$ is only scaled, never rotated, by $A$; $\\lambda$ is the eigenvalue.",
        detail: "Symmetric matrices have real eigenvalues and orthogonal eigenvectors — the covariance matrix is symmetric, which is why principal directions form an orthonormal basis. The spectral theorem behind this is the reason PCA decorrelates features.",
      },
      {
        term: "Regularization as complexity control",
        kind: "insight",
        statement: "Penalties shrink the effective capacity of a model: they restrict $w$ to a ball around the origin, deliberately trading bias for variance.",
        detail: "The same idea appears as weight decay in neural networks, shrinkage priors in Bayesian regression, and cost-complexity pruning in trees. What changes is the geometry — L2 balls, L1 diamonds, tree penalties — and therefore what kind of simplicity you get.",
      },
    ],
    examples: [
      {
        title: "Least Squares on Three Points",
        problem: "Fit the line y = a + bx by ordinary least squares to the points (0, 1), (1, 3), and (2, 3).",
        steps: [
          {
            label: "Accumulate sums",
            text: "$n = 3$, $\\sum x = 3$, $\\sum y = 7$, $\\sum xy = 0 + 3 + 6 = 9$, $\\sum x^2 = 0 + 1 + 4 = 5$.",
          },
          {
            label: "Slope",
            text: "$b = (n \\sum xy - \\sum x \\sum y) / (n \\sum x^2 - (\\sum x)^2) = (27 - 21) / (15 - 9) = 1$.",
          },
          {
            label: "Intercept",
            text: "$a = (\\sum y - b \\sum x) / n = (7 - 3) / 3 \\approx 1.333$.",
          },
          {
            label: "Fit and residuals",
            text: "$\\hat{y} = 1.333 + x$; residuals are $(-0.333, 0.667, -0.333)$, so $SSE \\approx 0.667$.",
          },
        ],
        result: "ŷ = 1.333 + 1.0·x with SSE ≈ 0.667",
      },
      {
        title: "Ridge Shrinks the OLS Estimate",
        problem: "A single data point (x, y) = (1, 3) means OLS would fit w = 3. Ridge minimizes J(w) = (3 − w)² + 2w². What is the ridge estimate, and what happens as the penalty changes?",
        steps: [
          {
            label: "Objective",
            text: "$J(w) = (3 - w)^2 + 2w^2$ — squared error plus the $\\lambda = 2$ penalty.",
          },
          {
            label: "Derivative",
            text: "$dJ/dw = -2(3 - w) + 4w = 6w - 6$.",
          },
          {
            label: "Solve",
            text: "$w = 1$; OLS alone gives $w = 3$, so the penalty shrank the estimate by two-thirds.",
          },
          {
            label: "Limits",
            text: "As $\\lambda \\to 0$, $w \\to 3$ (OLS); as $\\lambda \\to \\infty$, $w \\to 0$ — ridge interpolates between fit and simplicity.",
          },
        ],
        result: "w = 1.0 — the L2 penalty shrinks the OLS estimate from 3 toward 0",
      },
    ],
    keyTakeaways: [
      "OLS solves the normal equations and is unique only when features are linearly independent; ridge's λI repairs exactly that failure.",
      "L1 corners make lasso sparse (feature selection); L2 smoothness keeps ridge dense but stabilizes collinear data.",
      "The SVD of centered data is PCA in disguise: V holds the directions, the squared singular values scale the variances, and truncation is the compression.",
    ],
    quiz: [
      {
        q: "You need a linear model that automatically discards irrelevant features by zeroing their coefficients. Which penalty do you choose?",
        options: [
          "L2 (ridge)",
          "L1 (lasso)",
          "No penalty — OLS already zeroes irrelevant features",
          "Both penalties equally",
        ],
        answer: 1,
        explanation: "The L1 diamond's corners sit on the axes, so solutions frequently have exact zeros. Ridge shrinks everything smoothly but keeps all features, and plain OLS gives small nonzero coefficients to irrelevant features.",
      },
      {
        q: "The matrix X^T X is nearly singular because two features are almost collinear. What does ridge regression do about it?",
        options: [
          "Adds λI, conditioning the system and shrinking coefficients",
          "Drops one of the collinear features automatically",
          "Sets both coefficients to exactly zero",
          "Nothing — ridge ignores feature correlation",
        ],
        answer: 0,
        explanation: "X^T X + λI has eigenvalues bounded below by λ, so the inverse exists and the coefficients stabilize. Dropping features is lasso-like behavior under special conditions; exact zeroing is not an L2 property.",
      },
      {
        q: "For centered data X = U Σ V^T, the principal component directions are...",
        options: [
          "The columns of U",
          "The columns of V",
          "The singular values themselves",
          "The row means of X",
        ],
        answer: 1,
        explanation: "V's columns are the right singular vectors, identical to the covariance eigenvectors. U's columns span the row space of the scores, and singular values are scalars, not directions.",
      },
      {
        q: "One data point (x, y) = (1, 3). OLS would fit w = 3. Ridge minimizes (3 − w)² + 2w². What is the ridge estimate?",
        options: [
          "3.0",
          "1.0",
          "1.5",
          "0.75",
        ],
        answer: 1,
        explanation: "dJ/dw = −2(3 − w) + 4w = 6w − 6 = 0 gives w = 1: the penalty pulls the fit toward zero. The 1.5 option is what λ = 1 would give, and 3.0 ignores the penalty entirely.",
      },
      {
        q: "Why does truncating the SVD to the largest m singular values give the same result as PCA with m components?",
        options: [
          "Both algorithms are randomized with the same seed",
          "SVD also centers the data automatically",
          "They only coincide when m equals the number of features",
          "PCA's eigenproblem on X^T X is solved exactly by V and the squared singular values, so both optimize the same rank-m projection",
        ],
        answer: 3,
        explanation: "X^T X = V Σ² V^T, so the right singular vectors are the eigenvectors and the squared singular values are the eigenvalues — the two procedures compute the identical subspace. Centering must be done before either method, and the equivalence holds for any m.",
      },
    ],
  },

  // ── 7. Requirements Engineering ───────────────────────────────────────────
  {
    sectionId: "cse-e-sweng-s2",
    readingTime: 9,
    intro: "Requirements engineering turns vague stakeholder wishes into precise, testable statements of what the system must do and how well it must do it. Its disciplines — elicitation, specification of functional and non-functional needs, and traceability — are where project failures are quietly born or prevented. The craft is making every requirement verifiable and every decision traceable.",
    objectives: [
      "Distinguish functional from non-functional requirements and write both verifiably",
      "Choose elicitation techniques for different stakeholder and uncertainty situations",
      "Use a traceability matrix to detect orphan requirements and untested behavior",
    ],
    concepts: [
      {
        term: "Functional requirement",
        kind: "definition",
        statement: "A statement of what the system shall do — a service, input, output, or behavior — typically written as 'The system shall X'.",
        detail: "Examples: 'The system shall export a report as PDF' or 'The system shall reject passwords shorter than 12 characters'. Functional requirements define the problem's verbs; each should be atomic, unambiguous, and independently testable.",
      },
      {
        term: "Non-functional requirement (NFR)",
        kind: "definition",
        statement: "A constraint on how well the system performs its functions: performance, security, usability, reliability, scalability, maintainability, portability.",
        detail: "The fatal mistake is writing NFRs as adjectives — 'fast', 'secure', 'user-friendly' — which can neither pass nor fail a test. A good NFR binds a metric, a threshold, and a condition, such as 95% of search requests completing within 300 ms under 500 concurrent users. NFRs often conflict (security vs usability) and need explicit prioritization.",
      },
      {
        term: "Elicitation techniques",
        kind: "method",
        statement: "Structured ways to surface requirements: interviews, workshops, observation, document analysis, prototyping, and surveys.",
        detail: "Stakeholders describe what they think they do; observation captures what they actually do — the gap is where hidden requirements live. Prototypes and storyboards are the cheapest way to resolve ambiguity early because they force concrete reactions instead of abstract opinions. Quality attributes need targeted questioning, since nobody volunteers that the system must stay maintainable.",
      },
      {
        term: "Requirements traceability",
        kind: "definition",
        statement: "Recorded links from each requirement forward to design elements, code, and tests (forward traceability) and backward to their stakeholder origin (backward traceability).",
        detail: "The traceability matrix makes three audits mechanical: does every requirement have a design and a test; does every test trace to a requirement (no gold-plating); does every implemented feature trace to a requirement (no scope creep). When a requirement changes, the matrix lists exactly which artifacts to revisit — that is impact analysis.",
      },
      {
        term: "Validation vs verification of requirements",
        kind: "insight",
        statement: "Validation asks 'are we building the right system' (does it meet stakeholder intent); verification asks 'are we building the system right' (does it match the specification).",
        detail: "A perfectly implemented spec that solves the wrong problem verifies green and validates red. Reviews, prototypes, and acceptance-criteria walkthroughs validate; formal checks and test tracing verify. Ambiguity — such as 'up to 50 users' — is the enemy of both.",
      },
      {
        term: "User stories and acceptance criteria",
        kind: "method",
        statement: "Agile requirement units of the form 'As a role, I want a capability, so that I get a benefit', made testable by given/when/then acceptance criteria.",
        detail: "Stories deliberately defer detail to conversation — the card is a promise to talk, not a contract. Acceptance criteria turn the story into pass/fail checks the product owner agrees to; a story without them is not ready for implementation.",
      },
    ],
    examples: [
      {
        title: "Turning Vague Requirements into Verifiable Ones",
        problem: "A stakeholder submits three requirements: 'The system shall respond quickly to searches', 'Passwords must be secure', and 'Users shall reset a forgotten password via email'. Rewrite them so each can pass or fail a test.",
        steps: [
          {
            label: "Classify each statement",
            text: "Password reset is a behavior — functional. Response speed and password security are quality constraints — non-functional.",
          },
          {
            label: "Make latency measurable",
            text: "'95% of search requests complete within 300 ms, measured at 500 concurrent users on production-equivalent hardware.'",
          },
          {
            label: "Make security operational",
            text: "'Passwords are at least 12 characters, screened against a known-breach list, and stored as salted memory-hard hashes; accounts lock after 5 failed attempts in 15 minutes.'",
          },
          {
            label: "Make the functional one atomic",
            text: "'The system shall email a single-use reset link that expires after 15 minutes; a used or expired link is rejected.'",
          },
        ],
        result: "One atomic functional requirement plus two measurable NFRs, each with a pass/fail threshold",
      },
      {
        title: "Spotting an Orphan Test with a Traceability Matrix",
        problem: "A traceability matrix links requirements to modules and tests: R1 (login) maps to M1 (auth service) and tests T1, T2. R2 (password reset) maps to M2 (email service) and test T3. Test T4 exercises email retry after timeout but traces to no requirement. What should the team do?",
        steps: [
          {
            label: "Audit the requirement rows",
            text: "Every requirement has a module and at least one test — no orphan requirements on that axis.",
          },
          {
            label: "Audit the test columns",
            text: "T4 traces to nothing: it is an orphan test, and M2's failure-handling behavior exists only as test code.",
          },
          {
            label: "Interpret",
            text: "Either a real requirement is missing (notifications must be reliable) or the team is gold-plating beyond agreed scope.",
          },
          {
            label: "Decide",
            text: "If retries matter, add R3 'The system shall retry failed notification emails up to 3 times' and link T4 to it; otherwise delete T4.",
          },
        ],
        result: "T4 is an orphan test — add requirement R3 or drop the test",
      },
    ],
    keyTakeaways: [
      "Functional means what the system does; non-functional means how well — and only measurable NFRs can be tested.",
      "Observation and prototyping surface the requirements stakeholders cannot articulate in interviews.",
      "A traceability matrix turns coverage, scope-creep, and change-impact questions into table lookups.",
    ],
    quiz: [
      {
        q: "'The system shall complete a funds transfer within 2 seconds at the 99th percentile.' This is best classified as...",
        options: [
          "A functional requirement",
          "A non-functional requirement (performance)",
          "A user story",
          "An acceptance test",
        ],
        answer: 1,
        explanation: "It constrains how well a transfer performs, not what a transfer is — the behavior (transfer funds) stays functional. It is testable precisely because metric, threshold, and percentile are pinned.",
      },
      {
        q: "Why must 'The system shall be easy to use' be rewritten before it can serve as a requirement?",
        options: [
          "It is not measurable, so no test can pass or fail it",
          "It is too short",
          "Usability is a design decision, not a requirement",
          "Only functional requirements belong in specifications",
        ],
        answer: 0,
        explanation: "Requirements need acceptance criteria, and 'easy' has no threshold. Rewrite with a metric, for example 90% of new users completing checkout in under 3 minutes without assistance. Usability can absolutely be a requirement — just a quantified one.",
      },
      {
        q: "During elicitation, users describe a tidy daily process, but watching them work reveals a spreadsheet full of workarounds. What does this gap signal?",
        options: [
          "The users are unreliable and should be excluded",
          "Hidden requirements the stated process omits — capture and prioritize them",
          "The observation method failed",
          "A documentation task only",
        ],
        answer: 1,
        explanation: "Divergence between stated and observed practice is the classic marker of tacit requirements; observation exists to find exactly this. The workarounds encode real constraints the new system must handle or replace.",
      },
      {
        q: "In a traceability matrix, a test case exists that links to no requirement. What does this indicate?",
        options: [
          "The test is unrunnable",
          "Gold-plating — work not requested by any stakeholder requirement",
          "A missing stakeholder",
          "The matrix was filled out incorrectly",
        ],
        answer: 1,
        explanation: "Tests without requirement parents mean someone built behavior nobody asked for — scope creep or gold-plating. The fix is to either justify it with a (possibly missing) requirement or remove the behavior.",
      },
      {
        q: "A team builds exactly to specification, passes every specified test, and the customer still rejects the result. Which requirements-engineering failure is this?",
        options: [
          "Verification without validation — the spec was implemented right but was the wrong spec",
          "A missing traceability matrix",
          "Ambiguous test cases",
          "Over-budget NFRs",
        ],
        answer: 0,
        explanation: "Building the system right (verification) succeeded while building the right system (validation) failed — elicitation missed the true stakeholder needs. This is why prototypes and early customer walkthroughs are part of requirements validation.",
      },
    ],
  },

  // ── 8. System Design & UML ────────────────────────────────────────────────
  {
    sectionId: "cse-e-sweng-s3",
    readingTime: 9,
    intro: "Design turns requirements into structure, and UML gives that structure a shared visual language: class diagrams for static relationships, sequence diagrams for message flow over time, and state diagrams for event-driven behavior. Underneath the notation sit two criteria that decide whether a design survives change: cohesion high, coupling low. This section reads the diagrams and applies the criteria.",
    objectives: [
      "Read and construct class, sequence, and state machine diagrams for a small system",
      "Judge a design using cohesion and coupling criteria",
      "Refactor a low-cohesion, high-coupling module into focused services",
    ],
    concepts: [
      {
        term: "Class diagram",
        kind: "notation",
        statement: "Static structure: boxes with name, attribute, and operation compartments, connected by associations carrying multiplicities (1, 0..1, 1..*, *), plus generalization arrows for is-a and diamonds for whole-part relationships.",
        detail: "Composition (filled diamond) binds the part's lifetime to the whole — delete the order and its line items die; aggregation (hollow diamond) is a looser whole-part link. Multiplicity at an association end counts how many objects at that end relate to one object at the other: an Order has 1..* OrderLines, each Line referring to exactly 1 Product.",
      },
      {
        term: "Sequence diagram",
        kind: "notation",
        statement: "Time-ordered interactions: vertical lifelines for objects, horizontal messages drawn left to right in chronological order, with activations and dashed returns.",
        detail: "It answers 'who talks to whom, in what order' for one scenario — ideal for verifying a use case's flow or an API contract. Solid arrows with filled heads are synchronous calls, open heads are asynchronous messages, and alt/opt/loop frames encode conditionals and repetition.",
      },
      {
        term: "State machine diagram",
        kind: "notation",
        statement: "Event-driven behavior of one object: states as rounded boxes, transitions labeled event [guard] / action, with an initial pseudostate and a final state.",
        detail: "Use it when an object's response depends on its history — an Order that ignores 'ship' while pending but accepts it while paid. Guards such as [stock > 0] gate transitions, and actions run on transitions or on state entry and exit. Missing and unreachable states are this diagram's classic defects.",
      },
      {
        term: "Cohesion",
        kind: "definition",
        statement: "The degree to which a module's elements serve a single purpose; high cohesion means one module, one mind-sized responsibility.",
        detail: "A class that validates, charges, emails, and updates inventory has low cohesion — its name cannot say what it does. High cohesion concentrates change: a change to notification logic touches only the notifier. Functional cohesion, where elements cooperate toward one function, is the strongest kind.",
      },
      {
        term: "Coupling",
        kind: "definition",
        statement: "The degree of interdependence between modules; low coupling means a module can be understood and changed without touching its neighbors.",
        detail: "Coupling spreads through concrete types, global state, and wide interfaces; it is reduced by narrow interfaces, dependency injection, and depending on abstractions. Low coupling does not mean no communication — it means few, explicit, contract-based touchpoints.",
      },
      {
        term: "Information hiding",
        kind: "insight",
        statement: "Each module should hide a design decision behind a stable interface, exposing what clients need and nothing more.",
        detail: "This is the mechanism behind low coupling: if a database choice or algorithm is invisible behind an interface, swapping it is a local change. Design-to-interface plus dependency injection operationalizes it — callers name the abstraction, and wiring supplies the implementation.",
      },
    ],
    examples: [
      {
        title: "Refactoring a God Class for Cohesion and Coupling",
        problem: "An OrderManager class validates orders, charges credit cards, sends confirmation emails, and updates inventory. It directly instantiates PaymentGateway, SmtpClient, and InventoryDatabase; six other modules call OrderManager for all four jobs. Diagnose the design flaws and restructure.",
        steps: [
          {
            label: "Diagnose cohesion",
            text: "Four unrelated responsibilities in one class — low cohesion; its name cannot describe its purpose.",
          },
          {
            label: "Diagnose coupling",
            text: "Concrete dependencies created inside the class plus six modules routed through one god object — high, hidden coupling.",
          },
          {
            label: "Split by responsibility",
            text: "Create OrderValidator, PaymentService, NotificationService, and InventoryService — one purpose each (high cohesion).",
          },
          {
            label: "Invert the dependencies",
            text: "Each service exposes a narrow interface and receives its collaborators from outside; callers depend on the abstractions.",
          },
          {
            label: "Verify the fix",
            text: "A change to email formatting now touches NotificationService alone, and swapping payment providers touches one wiring point.",
          },
        ],
        result: "Four single-purpose services behind narrow interfaces — change becomes local",
      },
    ],
    keyTakeaways: [
      "Class diagrams capture static structure, sequence diagrams capture time-ordered message flow, and state machines capture event-driven lifecycles.",
      "High cohesion concentrates responsibility; low coupling isolates change — together they make modification local instead of viral.",
      "Depend on narrow abstractions and inject implementations; that is how information hiding is engineered in practice.",
    ],
    quiz: [
      {
        q: "You need to model how a browser, web server, and payment gateway exchange messages during checkout, in chronological order. Which diagram fits best?",
        options: [
          "A class diagram",
          "A sequence diagram",
          "A state machine diagram",
          "A use-case diagram",
        ],
        answer: 1,
        explanation: "Sequence diagrams show lifelines and time-ordered messages between objects — exactly an interaction protocol. Class diagrams are static, and state machines model one object's internal lifecycle.",
      },
      {
        q: "An Order object accepts a 'ship' event only when it is in the 'paid' state and ignores it in 'pending'. Which model captures this most directly?",
        options: [
          "A class diagram with a ship() operation",
          "A sequence diagram with an alt fragment",
          "A state machine diagram with states and guarded event transitions",
          "A use-case diagram",
        ],
        answer: 2,
        explanation: "History-dependent responses to events are the definition of stateful behavior — states plus event and guard transitions. An alt fragment could show one scenario's branching, but not the object's full lifecycle.",
      },
      {
        q: "In a class diagram, an association from Order to OrderLine reads: 1 Order relates to 1..* OrderLines; each OrderLine belongs to exactly 1 Order. What does the 1..* end express?",
        options: [
          "An Order may exist with no lines",
          "OrderLine is a subclass of Order",
          "Every Order has at least one and possibly many OrderLines",
          "The association is transient",
        ],
        answer: 2,
        explanation: "Multiplicity at the OrderLine end counts lines per Order: one-or-more. Zero-or-many (*) would allow empty orders, and subclassing is a generalization arrow, not an association end.",
      },
      {
        q: "A module named ReportManager generates reports, emails them, archives PDFs, and logs audit events. What design smell is loudest?",
        options: [
          "High coupling to the email server",
          "Low cohesion — four unrelated responsibilities in one module",
          "Excessive commenting",
          "Missing UML documentation",
        ],
        answer: 1,
        explanation: "One name cannot cover four purposes: that is low cohesion by definition. Coupling may also be poor, but the module's own mixed responsibility is the primary smell — split by responsibility first, then fix dependencies.",
      },
      {
        q: "Why is low coupling valued so highly in design?",
        options: [
          "It reduces the number of features the product needs",
          "It eliminates the need for testing",
          "It guarantees better runtime performance",
          "It makes changes local: few, explicit interfaces mean modifications do not cascade through the system",
        ],
        answer: 3,
        explanation: "Low coupling bounds the blast radius of a change and lets modules evolve independently behind stable contracts. It says nothing about feature count, testing, or raw speed — those are separate concerns.",
      },
    ],
  },

  // ── 9. Software Testing ───────────────────────────────────────────────────
  {
    sectionId: "cse-e-sweng-s4",
    readingTime: 9,
    intro: "Testing is structured sampling of behavior: levels place tests at unit, integration, system, and acceptance scope, while black-box and white-box techniques decide which cases to generate from specifications or code. Coverage metrics turn 'did we test enough' into counting. The subtle part — worked below — is that covering every statement can still leave branches and paths unexercised.",
    objectives: [
      "Place tests correctly across unit, integration, system, and acceptance levels",
      "Design black-box and white-box test cases from specifications and code",
      "Distinguish statement, branch, and path coverage on a concrete function",
    ],
    concepts: [
      {
        term: "Test levels",
        kind: "definition",
        statement: "Unit tests exercise one module in isolation; integration tests verify interfaces between modules; system tests check the assembled product against requirements; acceptance tests confirm stakeholder readiness.",
        detail: "Each level catches what the others cannot: units catch logic errors cheaply, integration catches contract mismatches like wrong formats or orderings, system catches emergent and non-functional failures, and acceptance catches a built-right-but-wrong product. Fix cost rises steeply with level — hence the push to find defects low.",
      },
      {
        term: "Black-box testing",
        kind: "method",
        statement: "Test cases derive from the specification, not the code: inputs and expected outputs are chosen with no knowledge of internal structure.",
        detail: "Core techniques are equivalence partitioning — one representative per class of inputs that should behave alike — and boundary value analysis, testing the edges (0, max, min, off-by-one) because that is where bugs cluster. Black-box can find missing behavior: the code cannot be tested for what it never implemented.",
      },
      {
        term: "White-box testing",
        kind: "method",
        statement: "Test cases derive from the code's structure — control flow, conditions, data flow — aiming to exercise branches, paths, and definition-use chains.",
        detail: "Its strength is proving the existing logic is executed; its blind spot is omission, since it cannot detect behavior the code never had. Typical criteria are statement, branch, condition, and path coverage, with tooling that instruments code to measure what the suite actually reached.",
      },
      {
        term: "Statement coverage",
        kind: "notation",
        statement: "The fraction of executable statements executed by the test suite; 100% means every statement ran at least once.",
        detail: "It is the weakest structural criterion: a statement can run under conditions that never test its alternatives, and unexercised else-branches stay dark. Satisfying it is a floor, not a goal — it subsumes nothing but itself.",
      },
      {
        term: "Branch coverage",
        kind: "notation",
        statement: "The fraction of decision outcomes exercised: each if, while, or case must be evaluated both true and false at least once.",
        detail: "Branch coverage subsumes statement coverage — taking both edges of every decision forces every statement to run. It still misses condition interactions: a decision like (a && b) can show both outcomes while a is always false, masking bugs in how b is used; condition and modified-condition criteria target that gap.",
      },
      {
        term: "Regression testing",
        kind: "definition",
        statement: "Re-running existing tests after changes to confirm that unchanged behavior stays unchanged.",
        detail: "Every fix risks breaking a neighbor, and the regression suite is the safety net that makes refactoring and continuous integration possible. Selection is the practical problem: run everything (safe, slow) or prioritize by code proximity and failure history (fast, riskier).",
      },
    ],
    examples: [
      {
        title: "Statement Coverage Is Not Branch Coverage",
        problem: "A method computes a label from two independent checks: it sets sign = 'neg' when a < 0 (otherwise 'nonneg'), then sets grade = 'pass' when score >= 60 (otherwise 'fail'). Test T1 runs the method with a = -5 and score = 70. What does T1 cover, and what is still missing?",
        steps: [
          {
            label: "Trace T1",
            text: "Both conditions are true; every statement — both default assignments, both conditions, both then-arms — executes: 6 of 6 statements = 100% statement coverage.",
          },
          {
            label: "Count branch outcomes",
            text: "Only the true edges run; the two false edges never do: 2 of 4 outcomes = 50% branch coverage.",
          },
          {
            label: "Add T2",
            text: "Running with a = 3 and score = 50 takes both false edges, lifting branch coverage to 100%.",
          },
          {
            label: "What remains dark",
            text: "The mixed paths (true/false and false/true) never execute — path coverage is still 50%, so any interaction between the two checks goes untested.",
          },
        ],
        result: "T1 alone: 100% statement, 50% branch; T1 + T2: 100% branch, 50% path",
      },
    ],
    keyTakeaways: [
      "Unit, integration, system, and acceptance levels target defects at successively larger scope; finding them low is cheapest.",
      "Black-box designs cases from the spec (equivalence classes, boundaries); white-box designs them from the code's structure.",
      "Branch coverage subsumes statement coverage; 100% statement coverage can coexist with 50% branch coverage.",
    ],
    quiz: [
      {
        q: "Defects like 'module A sends XML but module B expects JSON' are targeted by which test level?",
        options: [
          "Unit testing",
          "Integration testing",
          "Acceptance testing",
          "Smoke testing",
        ],
        answer: 1,
        explanation: "Interface-contract mismatches appear only when modules meet — that is integration testing's specific quarry. Unit tests mock the neighbor, and acceptance tests check stakeholder value, not inter-module formats.",
      },
      {
        q: "A suite achieves 100% statement coverage on a module. Which claim follows?",
        options: [
          "Every branch outcome was tested",
          "The module is correct",
          "Every statement executed at least once, but some branch outcomes may be untested",
          "All paths through the module were executed",
        ],
        answer: 2,
        explanation: "Statement coverage only promises execution: one test can run every statement without ever taking an else edge. Branch coverage is strictly stronger, and path coverage stronger still — and none of them prove correctness.",
      },
      {
        q: "A specification says the system accepts quantities 1 to 100. Which black-box test set is most appropriate?",
        options: [
          "Test 50 only",
          "Test 0, 1, 2, 99, 100, 101",
          "Test every value from 1 to 100",
          "Test 1 and 100 only",
        ],
        answer: 1,
        explanation: "Equivalence classes are invalid (< 1), valid (1 to 100), and invalid (> 100); boundaries are where off-by-one bugs live: 0, 1, 100, 101 (2 and 99 add inner checks). Testing all 100 values wastes the effort that partitioning saves.",
      },
      {
        q: "White-box testing alone cannot find which class of defect?",
        options: [
          "An untaken else branch",
          "A loop that iterates one time too few",
          "A feature the specification demands but the code never implemented",
          "A condition that inverts a flag",
        ],
        answer: 2,
        explanation: "White-box measures the code that exists; missing functionality leaves no structure to cover — only specification-derived (black-box) cases can expose absence. The other three are all visible in control flow.",
      },
      {
        q: "A method contains two independent if-statements, each with two outcomes. What is the minimum number of test cases for full branch coverage?",
        options: [
          "1",
          "2",
          "3",
          "4",
        ],
        answer: 1,
        explanation: "One test making both conditions true takes both then-edges; a second making both false takes both else-edges — 4 branch outcomes in 2 tests. Full path coverage, however, needs all four combinations (TT, TF, FT, FF), that is, 4 tests.",
      },
    ],
  },

  // ── 10. Project Management & Quality ──────────────────────────────────────
  {
    sectionId: "cse-e-sweng-s5",
    readingTime: 10,
    intro: "Project management chooses a lifecycle to fit requirements volatility, estimates effort with models like COCOMO, and manages risk as a scored, prioritized list. Quality attributes — reliability, maintainability, security, performance — are the product-side NFRs made operational. This section works a COCOMO estimate and a risk ranking on real numbers.",
    objectives: [
      "Choose between plan-driven and agile lifecycles from requirement stability and context",
      "Compute effort, schedule, and staffing with basic COCOMO",
      "Rank risks by probability-times-impact exposure and name quality attributes precisely",
    ],
    concepts: [
      {
        term: "Waterfall (plan-driven) lifecycle",
        kind: "definition",
        statement: "Sequential phases — requirements, design, implementation, verification, maintenance — each completing before the next begins, with documents as phase gates.",
        detail: "It works when requirements are stable and well understood, the domain is safety- or contract-critical, and rework is expensive relative to upfront analysis. Its weakness is late feedback: the customer sees working software only at the end, so a wrong early decision surfaces at maximum cost.",
      },
      {
        term: "Agile lifecycle",
        kind: "definition",
        statement: "Iterative, incremental delivery in short timeboxes: each iteration produces a potentially shippable increment, and feedback reprioritizes the backlog.",
        detail: "Agile trades predictability of plan for adaptability to learning; it shines when requirements evolve or the product is novel. The cost is discipline: without continuous integration, testing, and an empowered product owner, technical debt accumulates silently and velocity decays.",
      },
      {
        term: "COCOMO effort estimation",
        kind: "method",
        statement: "Basic organic mode: $E = 2.4 \\, (KLOC)^{1.05}$ person-months and schedule $T = 2.5 \\, E^{0.38}$ months; average staff is $E / T$.",
        detail: "KLOC is estimated size in thousands of delivered source lines, and the exponent above 1 says effort grows superlinearly with size because of communication overhead. Intermediate and detailed modes multiply by cost drivers — product complexity, personnel capability, tool support. The outputs are calibration, not prophecy: re-estimate as size knowledge improves.",
      },
      {
        term: "Risk management",
        kind: "method",
        statement: "Identify risks, assess each as exposure = probability × impact, prioritize by exposure, plan mitigations with triggers, and monitor.",
        detail: "A risk matrix plots probability against impact, and the top-right corner demands active mitigation (reduce probability), contingency (reduce impact), or both. Risks are future-tense and uncertain — the payment API may ship late — unlike issues, which have already happened. Untreated top risks silently become the schedule's hidden buffer.",
      },
      {
        term: "Quality attributes",
        kind: "definition",
        statement: "Measurable properties of the running system and its codebase: performance, reliability, availability, security, usability, maintainability, portability.",
        detail: "External attributes (performance, usability) are visible to users at runtime; internal attributes (maintainability, testability, modularity) show up as the cost of change. They conflict — caching versus freshness, security versus usability — so architectures must trade them explicitly, using tactics like redundancy for reliability or authentication layers for security.",
      },
      {
        term: "Technical debt",
        kind: "insight",
        statement: "The accumulated future cost of shortcuts taken under schedule pressure: ship the quick fix now, pay interest as slower change later.",
        detail: "Debt can be strategic — a deliberate prototype loan to learn fast — or reckless, like shipping with no tests into a tangled module. The interest is real: every change to a debt-laden area costs more, and velocity decays until the principal is repaid by refactoring. That is why refactoring time must be budgeted, not begged for.",
      },
    ],
    examples: [
      {
        title: "A Basic COCOMO Estimate",
        problem: "A basic COCOMO organic-mode project is estimated at 10 KLOC. Estimate effort, schedule, and average team size using E = 2.4 × (KLOC)^1.05 person-months and T = 2.5 × E^0.38 months.",
        steps: [
          {
            label: "Effort",
            text: "$E = 2.4 \\times 10^{1.05} \\approx 2.4 \\times 11.22 \\approx 26.9$ person-months.",
          },
          {
            label: "Schedule",
            text: "$T = 2.5 \\times 26.9^{0.38} \\approx 2.5 \\times 3.49 \\approx 8.7$ months.",
          },
          {
            label: "Average staff",
            text: "$E / T \\approx 26.9 / 8.7 \\approx 3.1$ people.",
          },
          {
            label: "Sanity-check",
            text: "Re-estimate when the size estimate firms up: if scope creeps to 20 KLOC, effort roughly doubles to about 56 person-months.",
          },
        ],
        result: "≈ 27 person-months, ≈ 8.7 months of schedule, ≈ 3 people average",
      },
      {
        title: "Ranking Risks by Exposure",
        problem: "Three identified risks: R1 'a key developer leaves' (probability 0.3, impact 4 on a 1–5 scale), R2 'the third-party payment API ships late' (probability 0.5, impact 4), R3 'the UI framework deprecates a widget we use' (probability 0.6, impact 1). Rank them and propose responses.",
        steps: [
          {
            label: "Score each risk",
            text: "Exposure = probability × impact: R1 = 0.3 × 4 = 1.2; R2 = 0.5 × 4 = 2.0; R3 = 0.6 × 1 = 0.6.",
          },
          {
            label: "Rank",
            text: "R2 (2.0) > R1 (1.2) > R3 (0.6) — R2 sits top-right in the risk matrix even though R3 is the most likely.",
          },
          {
            label: "Mitigate R2",
            text: "Reduce probability and impact: early integration spike, a sandboxed mock, contract tests, and a fallback provider behind an interface.",
          },
          {
            label: "Mitigate R1, accept R3",
            text: "R1: cross-training, pairing rotation, documented handover. R3: cheap to monitor — wrap the widget and accept the residual risk.",
          },
        ],
        result: "Priority R2 (2.0) > R1 (1.2) > R3 (0.6): mitigate the top two, accept-and-monitor R3",
      },
    ],
    keyTakeaways: [
      "Waterfall fits stable, contract-driven scope; agile fits evolving scope — both demand disciplined engineering either way.",
      "Basic COCOMO organic mode: E = 2.4·(KLOC)^1.05 person-months, T = 2.5·E^0.38 months, staff = E/T; treat the outputs as calibrated ranges.",
      "Risk exposure = probability × impact drives priority, and quality attributes conflict, so they must be traded deliberately.",
    ],
    quiz: [
      {
        q: "Using basic COCOMO in organic mode, the effort for a 20 KLOC project is closest to...",
        options: [
          "24 person-months",
          "48 person-months",
          "56 person-months",
          "20 person-months",
        ],
        answer: 2,
        explanation: "E = 2.4 × 20^1.05 ≈ 2.4 × 23.2 ≈ 56 person-months. The 48 figure forgets the superlinear exponent (2.4 × 20 = 48), and 24 roughly halves the correct value.",
      },
      {
        q: "A regulated medical device with fixed, documented requirements and formal certification. Which lifecycle is the better default?",
        options: [
          "Agile Scrum with two-week sprints",
          "Plan-driven (waterfall-style) with document gates and formal reviews",
          "No lifecycle — code and fix",
          "Any lifecycle, since the choice does not affect certification",
        ],
        answer: 1,
        explanation: "Stable requirements plus certification evidence argue for plan-driven: traceable documents and staged verification map directly to regulatory review. Agile is possible with heavy tailoring, but plan-driven is the natural default here.",
      },
      {
        q: "Risk R has probability 0.5 and impact 4 on a 1–5 scale; risk S has probability 0.1 and impact 5. Which has higher exposure and should be mitigated first?",
        options: [
          "S, because its impact is maximal",
          "They are equal since both involve a 5",
          "Cannot be compared — probability and impact are incommensurable",
          "R, because exposure 2.0 beats 0.5",
        ],
        answer: 3,
        explanation: "Exposure multiplies: R = 0.5 × 4 = 2.0 versus S = 0.1 × 5 = 0.5, so R dominates despite S's worse worst case. Prioritizing by worst-case impact alone chases rare catastrophes while likely ones bleed the project.",
      },
      {
        q: "Maintainability is classified as which kind of quality attribute?",
        options: [
          "External, visible to end users at runtime",
          "A functional requirement",
          "A project risk",
          "Internal, affecting the cost of change rather than runtime behavior",
        ],
        answer: 3,
        explanation: "Maintainability is internal: users never see it directly, but developers pay it on every change. Performance and usability are external and visible; functionality is what the system does, not how changeable it is.",
      },
      {
        q: "A team skips writing tests to hit a deadline. In quality-management terms, what have they created?",
        options: [
          "A risk trigger",
          "Technical debt — a shortcut whose interest is slower future change",
          "A quality gate",
          "Scope creep",
        ],
        answer: 1,
        explanation: "Deliberate shortcuts that borrow from the future are technical debt, and the interest arrives as regressions and slower feature work. Repayment is refactoring plus test backfill, best done in budgeted slices.",
      },
    ],
  },
];
