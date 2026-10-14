import type { SectionContent } from "../library"

// ============================================================================
// CLRS — Introduction to Algorithms, 3rd Edition (Cormen, Leiserson, Rivest
// & Stein, MIT Press 2009). Chapter 33: Computational Geometry (33.1 – 33.4).
// Master study content.
// ============================================================================

export const clrsCh33Content: SectionContent[] = [
  // ---------------------------------------------------------------- 33.1
  {
    sectionId: "clrs-ch33-s1",
    readingTime: 6,
    intro: "Computational geometry replaces geometric intuition with exact integer arithmetic. The central tool is the cross product: two subtractions and two multiplications decide whether a directed turn goes left, right, or straight — no angles, no slopes, no division, and therefore no numerical fragility. This section builds the orientation test and assembles it into the constant-time decision problem of whether two line segments intersect.",
    objectives: [
      "Compute cross products and interpret their sign as counterclockwise, clockwise, or collinear",
      "Decide segment intersection with four orientation tests plus the on-segment check",
      "Explain why cross-product tests are exact on integer inputs, unlike slope- and angle-based tests"
    ],
    concepts: [
      {
        term: "The cross product",
        kind: "definition",
        statement: "For points $p_1 = (x_1, y_1)$ and $p_2 = (x_2, y_2)$, viewed as vectors from the origin, the **cross product** is the scalar $$p_1 \\times p_2 = x_1 y_2 - x_2 y_1.$$ If $p_1 \\times p_2 > 0$ then $p_2$ is counterclockwise from $p_1$ about the origin; if $< 0$, clockwise; if $= 0$, the two vectors are collinear with the origin. Its magnitude $|p_1 \\times p_2|$ is the area of the parallelogram they span — that is, twice the area of the triangle $(0,0), p_1, p_2$.",
        detail: "Anchor example: $(1,0) \\times (0,1) = 1 > 0$ — the positive $y$-axis is a counterclockwise quarter turn from the positive $x$-axis, which fixes the sign convention."
      },
      {
        term: "Orientation of an ordered triple",
        kind: "theorem",
        statement: "The direction test $$\\text{Direction}(p_0, p_1, p_2) = (p_1 - p_0) \\times (p_2 - p_0)$$ classifies the turn $p_0 \\to p_1 \\to p_2$: **positive** means counterclockwise ($p_2$ lies to the left of the directed line $p_0 p_1$), **negative** means clockwise ($p_2$ to the right), and **zero** means the three points are collinear. Subtracting $p_0$ translates both vectors without changing their cross product, so orientation is translation-invariant; and $|\\text{Direction}|$ is twice the signed area of triangle $p_0 p_1 p_2$.",
        detail: "For example, $\\text{Direction}((0,0), (4,0), (2,3)) = 4 \\cdot 3 - 0 \\cdot 2 = 12 > 0$: $(2,3)$ sits to the left of the eastward ray, and the triangle has area $6$."
      },
      {
        term: "The on-segment test",
        kind: "method",
        statement: "A zero direction only says that $p_2$ lies on the **infinite line** through $p_0$ and $p_1$ — it may lie far outside the segment. ON-SEGMENT($p_0, p_1, p_2$), called only when the three points are collinear, checks the bounding box: $$\\min(x_0, x_1) \\le x_2 \\le \\max(x_0, x_1) \\quad\\text{and}\\quad \\min(y_0, y_1) \\le y_2 \\le \\max(y_0, y_1).$$ Both inequalities must hold for $p_2$ to lie on the closed segment $p_0 p_1$.",
        detail: "This is the branch of the decision procedure that catches touching endpoints and collinear overlaps — the degenerate cases the sign test alone cannot distinguish."
      },
      {
        term: "SEGMENTS-INTERSECT",
        kind: "method",
        statement: "To decide whether the segment $p_1 p_2$ intersects the segment $p_3 p_4$, compute four orientations: $d_1 = \\text{Direction}(p_3, p_4, p_1)$, $d_2 = \\text{Direction}(p_3, p_4, p_2)$, $d_3 = \\text{Direction}(p_1, p_2, p_3)$, $d_4 = \\text{Direction}(p_1, p_2, p_4)$. **Proper crossing:** $d_1 d_2 < 0$ and $d_3 d_4 < 0$ (each segment strictly straddles the other's line). **Touching:** if any $d_i = 0$, the corresponding point is collinear with the other segment — test it with ON-SEGMENT (e.g. $d_1 = 0$ and $p_1$ on segment $p_3 p_4$ means they intersect at $p_1$). **Otherwise** the segments are disjoint. Four cross products — eight multiplications, exact on integers.",
        detail: "Slope-based tests need case analysis for vertical segments and introduce rounding error under floating point; the cross product formulation has neither defect, which is why every algorithm in this chapter is phrased with it."
      },
      {
        term: "Area as half the cross product",
        kind: "insight",
        statement: "For vectors $u,v$, $|u \\times v|/2$ is the area of the triangle they span; sign is orientation (positive: counterclockwise turn). SEGMENTS-INTERSECT needs only signs and the on-segment bounding check, never the area value, which is why integer arithmetic stays exact.",
        detail: "Robustness: slopes need division ($\\Delta y/\\Delta x$) and angles need trigonometry, both rounding on integers; cross products use $2$ multiplies and a subtract, exact in $O(\\log C)$ bits for coordinates bounded by $C$.",
      },
    ],
    examples: [
      {
        title: "Two segment-intersection decisions",
        problem: "(a) Do the segments $p_1 p_2$ from $(0,0)$ to $(4,4)$ and $p_3 p_4$ from $(0,4)$ to $(4,0)$ intersect? (b) What if instead $p_3 = (5,1)$ and $p_4 = (7,3)$?",
        steps: [
          { label: "Step 1: Four orientations for (a)", text: "$d_1 = \\text{Direction}(p_3, p_4, p_1) = (4,-4) \\times (0,-4) = 4(-4) - (-4)(0) = -16$. $d_2 = (4,-4) \\times (4,0) = 4 \\cdot 0 - (-4) \\cdot 4 = +16$. $d_3 = \\text{Direction}(p_1, p_2, p_3) = (4,4) \\times (0,4) = 16$. $d_4 = (4,4) \\times (4,0) = -16$." },
          { label: "Step 2: The verdict for (a)", text: "$d_1 d_2 = (-16)(16) < 0$ and $d_3 d_4 = (16)(-16) < 0$: each pair of endpoints straddles the other segment, so the segments properly intersect. Indeed the lines $y = x$ and $y = 4 - x$ meet at $(2,2)$, which lies on both segments — a pure crossing, no endpoint touching." },
          { label: "Step 3: Four orientations for (b)", text: "With $p_3 = (5,1)$, $p_4 = (7,3)$: $d_1 = (2,2) \\times (-5,-1) = 2(-1) - 2(-5) = 8$ and $d_2 = (2,2) \\times (-1,3) = 2 \\cdot 3 - 2(-1) = 8$. Both positive: $p_1$ and $p_2$ lie on the same (left) side of the line through $p_3 p_4$." },
          { label: "Step 4: The verdict for (b)", text: "$d_1 d_2 = 64 > 0$ already fails the straddle condition — and symmetrically $d_3 = \\text{Direction}(p_1,p_2,p_3) = (4,4) \\times (5,1) = -16$, $d_4 = (4,4) \\times (7,3) = -16$, so $d_3 d_4 = 256 > 0$. No product of opposite signs, no zero directions, no endpoint on the other segment: the segments are disjoint, with $p_3 p_4$ passing above the diagonal." },
          { label: "Step 5: The cost", text: "Each decision used exactly four cross products — eight multiplications and a handful of additions and subtractions on the integer inputs, exact in every digit." }
        ],
        result: "(a) Yes — a proper crossing at $(2,2)$. (b) No — both endpoints of each segment lie strictly on the same side of the other's line."
      },
      {
        title: "Collinear overlap versus touch",
        problem: "Segments $p_1p_2 = (0,0)-(4,0)$, $p_3p_4 = (2,0)-(6,0)$ (overlap) versus $p_3p_4 = (4,0)-(6,0)$ (touch). Decide with cross products.",
        steps: [
          { label: "Directions", text: "All cross products $0$ (collinear): $d_1 = (p_4-p_3)\\times(p_1-p_3) = 0$, similarly $d_2 = d_3 = d_4 = 0$." },
          { label: "On-segment (overlap)", text: "$p_3 = (2,0)$ on $p_1p_2$ ($0 \\le 2 \\le 4$ both axes) ✓: INTERSECT true (proper overlap $2..4$)." },
          { label: "On-segment (touch)", text: "$p_3 = (4,0)$ on $p_1p_2$ at the endpoint ✓: INTERSECT true (endpoint touch counts). Shift to $(5,0)-(6,0)$: no endpoint on the other: false." },
          { label: "Straddle case", text: "Non-collinear needs $d_1,d_2$ opposite signs and $d_3,d_4$ opposite: straddling replaces on-segment." },
        ],
        result: "Overlap and endpoint touch both intersect (on-segment ✓); disjoint collinear $(5,0)-(6,0)$ does not.",
      },
    ],
    keyTakeaways: [
      "$u \\times v = u_x v_y - u_y v_x$: positive = left/counterclockwise turn, negative = right/clockwise, zero = collinear; the magnitude is twice the triangle area.",
      "Segments intersect properly iff each endpoint pair straddles the other segment ($d_1 d_2 < 0$ and $d_3 d_4 < 0$); zero directions route to the bounding-box on-segment check.",
      "Four cross products = eight integer multiplications, division-free and exact — the primitive every algorithm in this chapter is built on."
    ],
    quiz: [
      {
        q: "For $p_1 = (3,1)$ and $p_2 = (2,5)$, the cross product $p_1 \\times p_2$ equals 13. What does the sign say?",
        options: ["$p_2$ is clockwise from $p_1$", "$p_2$ is counterclockwise from $p_1$", "the vectors are perpendicular", "the two points coincide"],
        answer: 1,
        explanation: "$p_1 \\times p_2 = 3 \\cdot 5 - 2 \\cdot 1 = 13 > 0$, and a positive cross product means $p_2$ lies counterclockwise from $p_1$ about the origin."
      },
      {
        q: "$\\text{Direction}(p_0, p_1, p_2)$ returns 0. It follows that:",
        options: ["the three points are collinear and $p_2$ lies between $p_0$ and $p_1$", "the three points are collinear, but $p_2$ may still lie outside the segment $p_0 p_1$", "the segments $p_0 p_1$ and $p_1 p_2$ intersect", "the triangle $p_0 p_1 p_2$ has area 2"],
        answer: 1,
        explanation: "Zero cross product only pins $p_2$ to the infinite line through $p_0$ and $p_1$; deciding whether it lies on the segment requires the bounding-box ON-SEGMENT check."
      },
      {
        q: "Two segments properly cross (no endpoint touching the other segment) exactly when:",
        options: ["$d_1 d_2 < 0$ and $d_3 d_4 < 0$", "$d_1 d_2 < 0$ or $d_3 d_4 < 0$", "$d_1 d_2 \\le 0$ and $d_3 d_4 \\le 0$", "at least one of $d_1, d_2, d_3, d_4$ is zero"],
        answer: 0,
        explanation: "Each segment must strictly straddle the line of the other — both products strictly negative. Weak inequalities admit the touching cases handled by ON-SEGMENT, and a single product is one-sided evidence only."
      },
      {
        q: "The triangle with vertices $(0,0)$, $(4,0)$, $(2,3)$ has a direction cross product of magnitude 12. Its area is:",
        options: ["12", "6", "24", "3"],
        answer: 1,
        explanation: "The cross product magnitude is the parallelogram area — twice the triangle area — so the triangle covers $12/2 = 6$ (indeed $\\tfrac{1}{2} \\cdot 4 \\cdot 3 = 6$)."
      }
    ]
  },

  // ---------------------------------------------------------------- 33.2
  {
    sectionId: "clrs-ch33-s2",
    readingTime: 7,
    intro: "Deciding whether ANY pair among $n$ segments intersects looks inherently quadratic — until the sweep line arrives. Sort all $2n$ endpoints and sweep left to right, maintaining the segments currently crossed by the line in a red-black tree ordered top to bottom. Between events, non-intersecting segments never swap vertical order, so the only pairs that can matter are those adjacent in this order — and the algorithm tests exactly those, at $O(\\lg n)$ cost per event, for $O(n \\lg n)$ total.",
    objectives: [
      "Describe the sweep-line total order and why it can only change at an intersection",
      "Apply the insertion and deletion neighbor tests that drive ANY-SEGMENTS-INTERSECT",
      "Prove the adjacency invariant and derive the $O(n \\lg n)$ running time"
    ],
    concepts: [
      {
        term: "The sweep and its total order",
        kind: "method",
        statement: "Sort the $2n$ endpoints lexicographically — by $x$, breaking ties by $y$ — and process them as events. At any position between events, the segments crossed by the (vertical) sweep line are totally ordered by the $y$-coordinate of their intersection with it: one segment is **below** another. If no two segments intersect, this order is fixed between events, because a change of vertical order at some $x$ would itself be an intersection point. The sweep visits each endpoint once, in $O(n \\lg n)$ for the sort.",
        detail: "Ties at equal $x$ are exactly why the sort key is the pair $(x, y)$: they fix a deterministic order for segments starting or ending on the same vertical line, including vertical segments."
      },
      {
        term: "The red-black tree of active segments",
        kind: "method",
        statement: "ANY-SEGMENTS-INTERSECT maintains the active segments in a red-black tree keyed by the sweep order. At a **left endpoint**: insert the segment and test it against its new tree-predecessor and tree-successor. At a **right endpoint**: the deleted segment's predecessor and successor become adjacent — test that pair — then delete. Return TRUE at the first positive test; if the sweep finishes, return FALSE. Each test is the $O(1)$ cross-product decision of 33.1.",
        detail: "The tree gives INSERT, DELETE, and neighbor queries in $O(\\lg n)$ each; a sorted array would force $\\Theta(n)$ shifts per event and lose the bound."
      },
      {
        term: "The adjacency invariant",
        kind: "theorem",
        statement: "If any two of the segments intersect, then some pair of segments adjacent in the sweep order at some event intersects — and the algorithm tests exactly those pairs. **Proof sketch (general position):** among all intersecting pairs, take the one whose leftmost intersection point $p$ is leftmost, breaking ties by lowest $y$; say segments $s$ and $s'$ cross at $p$. Just to the left of $p$, both are active. If a third active segment $t$ lay between them in the order, then since $s$ and $s'$ meet at $p$ while $t$ avoids $p$ (general position), $t$ must cross $s$ or $s'$ strictly left of $p$ — contradicting the choice of $p$. So $s$ and $s'$ are adjacent just left of $p$. They became adjacent at some earlier event — either when the later one was inserted (tested against its neighbor) or when a segment between them was deleted (its two new neighbors were tested) — and both tests would have found them.",
        detail: "Degenerate cases (shared endpoints, three segments through one point) are absorbed by the endpoint-sort conventions; the book's argument extends with the same skeleton."
      },
      {
        term: "The O(n lg n) bound",
        kind: "theorem",
        statement: "ANY-SEGMENTS-INTERSECT runs in $O(n \\lg n)$ time: the endpoint sort is $O(n \\lg n)$, there are $2n$ events, each performing $O(1)$ red-black tree operations at $O(\\lg n)$ apiece and $O(1)$ constant-time segment tests — $O(1)$ tests per event, not per pair. It is correct: TRUE iff some pair of closed segments intersects, including endpoint touching.",
        detail: "The same sweep with a small extension reports ALL $k$ intersections in $O((n + k) \\lg n)$ — the basis of the Bentley–Ottmann algorithm."
      },
      {
        term: "Event queue order",
        kind: "notation",
        statement: "Events are the $2n$ endpoints sorted by $x$ (ties by $y$, left before right): $O(n \\lg n)$ sort dominates. The sweep processes left to right; insertions/deletions at events cost $O(\\lg n)$ in the red-black active order, giving $O(n \\lg n)$ total.",
        detail: "No two events share $x$ is the textbook simplification (perturb or tie-break); without it vertical segments need the $y$-tie rule. Intersections themselves are not events here (unlike full arrangement sweep): the algorithm stops at the first one found.",
      },
    ],
    examples: [
      {
        title: "A sweep that finds the crossing before it happens",
        problem: "Run ANY-SEGMENTS-INTERSECT on three segments: $s_1$ from $(0,0)$ to $(8,8)$, $s_2$ from $(2,6)$ to $(6,2)$, and $m$ from $(2,5)$ to $(3,4)$.",
        steps: [
          { label: "Event (0,0): insert s1", text: "The left endpoint of $s_1$ (the line $y = x$). The tree is empty, so $s_1$ has no predecessor or successor: no test is made." },
          { label: "Event (2,5): insert m", text: "At $x = 2$ the sweep crosses $s_1$ at $y = 2$ and the new segment $m$ (on $y = 7 - x$) at $y = 5$, so the order is $s_1$ below $m$. Insert $m$; its predecessor is $s_1$: test $m \\times s_1$ — their lines would meet at $x = 3.5$, outside $m$'s span $[2,3]$, so no intersection." },
          { label: "Event (2,6): insert s2", text: "The tie at $x = 2$ is broken by $y$: $(2,5)$ was processed before $(2,6)$. Now the sweep order is $s_1$ (at $y = 2$), $m$ (at $y = 5$), $s_2$ (at $y = 6$). $s_2$'s predecessor is $m$: test $s_2 \\times m$ — the lines $y = 8 - x$ and $y = 7 - x$ are parallel, never meeting. No successor yet." },
          { label: "Event (3,4): delete m", text: "The right endpoint of $m$. Before deleting, test the two neighbors that are about to become adjacent: $s_1 \\times s_2$. Their lines $y = x$ and $y = 8 - x$ meet at $(4,4)$, and $x = 4$ lies inside both spans $[0,8]$ and $[2,6]$: they intersect — return TRUE." },
          { label: "The punchline", text: "The crossing itself sits at $x = 4$, but the algorithm answered TRUE at the event $x = 3$ — one unit BEFORE the crossing exists geometrically. The order structure (a segment between them vanished) exposed the intersection; no intersection point is ever an event." }
        ],
        result: "TRUE, detected at the fourth event: deleting $m$ makes $s_1$ and $s_2$ adjacent, and their test finds the crossing at $(4,4)$."
      },
      {
        title: "Neighbour test that catches nothing",
        problem: "Segments $a: (0,0)-(4,4)$, $b: (0,4)-(4,0)$ cross at $(2,2)$; $c: (5,0)-(5,4)$ far right. Show which neighbour test fires.",
        steps: [
          { label: "Events", text: "Order by $x$: $a_L(0,0)$, $b_L(0,4)$, $a_R(4,4)$, $b_R(4,0)$, $c_L(5,0)$, $c_R(5,4)$ (ties at $0$ by $y$)." },
          { label: "Insert $a$", text: "Active $[a]$: no neighbours." },
          { label: "Insert $b$", text: "Active $[a,b]$ or $[b,a]$ by $y$ at $x = 0^+$: neighbours $(a,b)$ tested: SEGMENTS-INTERSECT true: return TRUE before $c$ is ever inserted." },
          { label: "Had no crossing", text: "Without $a$-$b$ crossing, each insertion/deletion would test at most $2$ neighbours ($O(1)$ segment tests) for $2n$ events: $O(n \\lg n)$ with no false negatives by the adjacency invariant." },
        ],
        result: "Neighbour pair $(a,b)$ tested at $b$'s insertion, crossing found: sweep tests $O(n)$ neighbour pairs, not $\\binom{n}{2}$.",
      },
    ],
    keyTakeaways: [
      "Sweep the $2n$ sorted endpoints; the red-black tree of active segments keeps the top-to-bottom order with $O(\\lg n)$ updates.",
      "Only neighbors are ever tested — on insertion (new segment vs predecessor and successor) and on deletion (the two segments that become adjacent).",
      "Adjacency invariant: the leftmost intersecting pair is adjacent just before it crosses, so it cannot escape a neighbor test — total $O(n \\lg n)$."
    ],
    quiz: [
      {
        q: "In the worked example, the crossing point $(4,4)$ is geometrically at $x = 4$. The algorithm reported TRUE at:",
        options: ["exactly $x = 4$, the crossing itself", "the event $x = 3$, strictly before the crossing", "$x = 6$, when the first right endpoint of the pair is processed", "it cannot report until the sweep ends"],
        answer: 1,
        explanation: "Deleting $m$ at its right endpoint $(3,4)$ makes $s_1$ and $s_2$ adjacent in the order, and the deletion's neighbor test finds their intersection — one unit before the segments actually meet."
      },
      {
        q: "Which pairs of segments does ANY-SEGMENTS-INTERSECT actually test?",
        options: ["all $\\Theta(n^2)$ pairs, but each with the fast cross-product test", "each newly inserted segment against its current predecessor and successor, plus the two neighbors of each deleted segment", "only pairs whose $x$-ranges overlap", "only pairs that share an endpoint"],
        answer: 1,
        explanation: "The adjacency invariant limits attention to neighbors in the sweep order: $O(1)$ tests per event, $2n$ events — never the quadratic pair set."
      },
      {
        q: "Between two consecutive events, the vertical order of the active segments cannot change because:",
        options: ["the red-black tree rebalances and restores it", "two segments that swapped vertical order would have to intersect — an event in itself", "the segments are sorted by length at preprocessing time", "the sweep line moves continuously"],
        answer: 1,
        explanation: "A swap of order at some $x$ means the two segments pass through a common point: an intersection. If none exists, the order is stable between events, which is exactly why the event set (endpoints) suffices."
      },
      {
        q: "The total running time of ANY-SEGMENTS-INTERSECT on $n$ segments is:",
        options: ["$O(n^2)$", "$O(n)$", "$O(n \\lg n)$", "$O(n \\lg^2 n)$"],
        answer: 2,
        explanation: "Sorting the $2n$ endpoints plus $2n$ events, each with $O(1)$ tree operations at $O(\\lg n)$ and constant-time tests, gives $O(n \\lg n)$."
      }
    ]
  },

  // ---------------------------------------------------------------- 33.3
  {
    sectionId: "clrs-ch33-s3",
    readingTime: 8,
    intro: "The convex hull is the tightest rubber band around a point set — the smallest convex polygon containing it. Graham scan finds it in $O(n \\lg n)$: anchor at the lowest point (guaranteed to be a hull vertex), sort the rest by polar angle, then walk the angular order once, popping every point that makes a nonleft turn. The stack always holds the hull of the points processed so far, and although the pop loop can fire repeatedly, each point is pushed once and popped at most once — the same amortized economy that made KMP linear.",
    objectives: [
      "Define CH(Q) as the intersection of convex sets and identify which points are hull vertices",
      "Run Graham scan by hand, including the pops and the collinear case",
      "Compare $O(n \\lg n)$ Graham scan with the output-sensitive $O(nh)$ Jarvis march"
    ],
    concepts: [
      {
        term: "The convex hull",
        kind: "definition",
        statement: "The **convex hull** $\\text{CH}(Q)$ of a set $Q$ of points is the intersection of all convex sets containing $Q$ — itself convex, and the smallest such set. For finite $Q$ it is a convex polygon whose vertices, the **extreme points**, belong to $Q$; every other point of $Q$ lies inside or on the boundary. A point of $Q$ is a hull vertex exactly when it is not a convex combination of the other points.",
        detail: "Hulls serve as bounding containers in collision detection, graphics culling, and statistics (outlier detection via peeling); most such pipelines need only the hull, not the whole cloud."
      },
      {
        term: "GRAHAM-SCAN",
        kind: "method",
        statement: "Step 1 — pick $p_0$: the point of $Q$ with the lowest $y$-coordinate, ties broken by lowest $x$; it is certainly a hull vertex, and every other point lies at polar angle in $[0°, 180°)$ from it, making the sort well defined. Step 2 — sort the remaining points by polar angle about $p_0$ (ties by distance: keep the farthest). Step 3 — scan: push $p_0$, then the first two sorted points; for each later point $p_i$: **while** the turn from NEXT-TO-TOP($S$) to TOP($S$) to $p_i$ is a nonleft turn — clockwise or collinear — pop the stack; then push $p_i$. At the end the stack holds the hull vertices in counterclockwise order.",
        detail: "The pop test is exactly the 33.1 orientation: a positive cross product is a left turn (keep); zero or negative pops."
      },
      {
        term: "The stack invariant",
        kind: "theorem",
        statement: "At the start of each loop iteration, the stack $S$ contains exactly the vertices of $\\text{CH}(\\{p_0, p_1, \\ldots, p_{i-1}\\})$ in counterclockwise order. Hence at termination $S$ is the hull of the whole set. **Running time:** $O(n \\lg n)$, dominated by the sort. The scan itself is $O(n)$ amortized: each point is pushed exactly once and popped at most once, so the while loop executes at most $n$ pops over the entire run — the same two-counter argument as KMP's fallback chain.",
        detail: "The invariant is maintained because popping removes exactly the points that lie inside the hull of the prefix enlarged by $p_i$: a nonleft turn certifies the top of the stack is not extreme anymore."
      },
      {
        term: "Jarvis march (gift wrapping)",
        kind: "method",
        statement: "Start at any hull vertex ($p_0$ again works). Repeatedly **wrap**: from the current hull vertex with the current direction, the next hull vertex is the point of $Q$ that is most clockwise (equivalently, the winner of the orientation test against all candidates). Each wrap is a linear scan over the $n$ points and produces one hull edge, so the total is $O(nh)$ for a hull with $h$ vertices.",
        detail: "Output sensitivity: $O(nh)$ beats $O(n \\lg n)$ precisely when $h = o(\\lg n)$ — a cloud of points inside a triangle has $h = 3$ and Jarvis runs in $\\Theta(n)$. When points lie on a circle ($h \\approx n$), Graham scan wins."
      },
      {
        term: "Lowest-then-leftmost anchor $p_0$",
        kind: "method",
        statement: "Pick $p_0$ as lowest $y$ (then lowest $x$ on ties): $p_0$ is always a hull vertex, and every other point lies strictly above the horizontal through $p_0$ (or right on it), so polar-angle sort around $p_0$ is well defined in $(-\\pi/2, \\pi/2]$ with no $\\pi$ wrap.",
        detail: "Ties on the ray from $p_0$ keep only the farthest (closer points cannot be hull vertices unless all are collinear, when the two extremes survive). $p_0$ needs no stack test: it is pushed unconditionally.",
      },
    ],
    figures: [
      {
        caption: "Graham scan on nine points. Left: with the anchor $p_0 = (0,0)$ (lowest $y$, then lowest $x$), the other eight points are visited in polar-angle order 0°, 18.4°, 21.8°, 33.7°, 36.9°, 45°, 63.4°, 90°. Right: the moment the scan processes $(6,4)$ with stack $\\langle (0,0), (6,0), (5,2) \\rangle$: the turn at $(5,2)$ is clockwise — the cross product is $-4$ — so $(5,2)$ is popped and $(6,4)$ pushed; later $(4,3)$ and $(2,2)$ pop as well, and the surviving stack is the hull $(0,0), (6,0), (6,4), (3,6), (0,4)$.",
        svg: '<svg viewBox="0 0 720 400" width="100%" role="img" aria-label="Graham scan on nine points: the polar-angle sort about the anchor, then the pop of a clockwise-turning point"><text x="40" y="22" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="600" fill="currentColor">1 · sort by polar angle about p0</text><line x1="40" y1="330" x2="280" y2="330" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/><line x1="40" y1="330" x2="160" y2="290" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/><line x1="40" y1="330" x2="240" y2="250" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/><line x1="40" y1="330" x2="280" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/><line x1="40" y1="330" x2="200" y2="210" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/><line x1="40" y1="330" x2="120" y2="250" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/><line x1="40" y1="330" x2="160" y2="90" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/><line x1="40" y1="330" x2="40" y2="170" stroke="currentColor" stroke-width="1" stroke-dasharray="3 4" opacity="0.5"/><circle cx="280" cy="330" r="4" fill="currentColor"/><circle cx="160" cy="290" r="4" fill="currentColor"/><circle cx="240" cy="250" r="4" fill="currentColor"/><circle cx="280" cy="170" r="4" fill="currentColor"/><circle cx="200" cy="210" r="4" fill="currentColor"/><circle cx="120" cy="250" r="4" fill="currentColor"/><circle cx="160" cy="90" r="4" fill="currentColor"/><circle cx="40" cy="170" r="4" fill="currentColor"/><circle cx="40" cy="330" r="5.5" fill="#10b981"/><text x="40" y="350" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="700" fill="#10b981">p0</text><circle cx="296" cy="330" r="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="0.9"/><text x="296" y="333.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="700" fill="currentColor">1</text><circle cx="174" cy="297" r="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="0.9"/><text x="174" y="300.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="700" fill="currentColor">2</text><circle cx="254" cy="256" r="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="0.9"/><text x="254" y="259.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="700" fill="currentColor">3</text><circle cx="293" cy="176" r="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="0.9"/><text x="293" y="179.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="700" fill="currentColor">4</text><circle cx="213" cy="217" r="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="0.9"/><text x="213" y="220.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="700" fill="currentColor">5</text><circle cx="132" cy="240" r="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="0.9"/><text x="132" y="243.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="700" fill="currentColor">6</text><circle cx="172" cy="82" r="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="0.9"/><text x="172" y="85.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="700" fill="currentColor">7</text><circle cx="52" cy="160" r="8" fill="currentColor" fill-opacity="0.08" stroke="currentColor" stroke-width="0.9"/><text x="52" y="163.5" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" font-weight="700" fill="currentColor">8</text><text x="40" y="364" font-family="ui-sans-serif, system-ui" font-size="10" opacity="0.75" fill="currentColor">angular order: 0°, 18.4°, 21.8°, 33.7°, 36.9°, 45°, 63.4°, 90°</text><text x="380" y="22" font-family="ui-sans-serif, system-ui" font-size="12.5" font-weight="600" fill="currentColor">2 · the scan pops (5,2) on a clockwise turn</text><text x="380" y="42" font-family="ui-sans-serif, system-ui" font-size="9.5" opacity="0.7" fill="currentColor">faded = not yet processed · ✕ = already popped · dashed = the proposed edge</text><polygon points="380,330 620,330 620,170 500,90 380,170" fill="currentColor" fill-opacity="0.04" stroke="currentColor" stroke-width="1.2" opacity="0.3"/><text x="400" y="300" font-family="ui-sans-serif, system-ui" font-size="10" opacity="0.45" fill="currentColor">CH(Q)</text><polyline points="380,330 620,330 580,250" fill="none" stroke="currentColor" stroke-width="2.2"/><line x1="580" y1="250" x2="620" y2="170" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="5 4"/><circle cx="580" cy="250" r="7" fill="none" stroke="#ef4444" stroke-width="2"/><text x="566" y="230" text-anchor="end" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="700" fill="#ef4444">cross = −4 → pop</text><circle cx="380" cy="330" r="5.5" fill="#10b981"/><text x="380" y="350" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="11" font-weight="700" fill="#10b981">p0</text><circle cx="620" cy="330" r="4.5" fill="currentColor"/><text x="620" y="350" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="currentColor">(6,0)</text><circle cx="580" cy="250" r="4.5" fill="#ef4444"/><text x="600" y="254" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="#ef4444">(5,2)</text><circle cx="620" cy="170" r="4.5" fill="#f59e0b"/><text x="634" y="174" font-family="ui-sans-serif, system-ui" font-size="9.5" fill="#f59e0b">(6,4)</text><line x1="494" y1="284" x2="506" y2="296" stroke="#ef4444" stroke-width="1.6" opacity="0.55"/><line x1="494" y1="296" x2="506" y2="284" stroke="#ef4444" stroke-width="1.6" opacity="0.55"/><text x="500" y="310" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="9.5" opacity="0.55" fill="currentColor">(3,1)</text><circle cx="540" cy="210" r="4" fill="currentColor" opacity="0.3"/><circle cx="460" cy="250" r="4" fill="currentColor" opacity="0.3"/><circle cx="500" cy="90" r="4" fill="currentColor" opacity="0.3"/><circle cx="380" cy="170" r="4" fill="currentColor" opacity="0.3"/><text x="360" y="378" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">left: the angular sort about p0 · right: the stack is (0,0), (6,0), (5,2) and the next point is (6,4) — the turn at (5,2) is clockwise, so (5,2) is popped</text><text x="360" y="394" text-anchor="middle" font-family="ui-sans-serif, system-ui" font-size="10" fill="currentColor">later (4,3) and (2,2) are also popped; the surviving stack is the hull (0,0), (6,0), (6,4), (3,6), (0,4)</text></svg>',
        afterConcept: 2
      }
    ],
    examples: [
      {
        title: "Graham scan on nine points, four pops",
        problem: "Run Graham scan on $Q = \\{(0,0), (6,0), (3,1), (5,2), (6,4), (4,3), (2,2), (3,6), (0,4)\\}$, tracking the stack through every push and pop.",
        steps: [
          { label: "Step 1: Anchor and sort", text: "$p_0 = (0,0)$ (lowest $y$, and it also has the lowest $x$ among the bottom row, ahead of $(6,0)$). The polar-angle order of the rest: $(6,0)$ at 0°, $(3,1)$ at $\\arctan(1/3) \\approx 18.4°$, $(5,2)$ at $\\arctan(2/5) \\approx 21.8°$, $(6,4)$ at $\\arctan(2/3) \\approx 33.7°$, $(4,3)$ at $\\arctan(3/4) \\approx 36.9°$, $(2,2)$ at 45°, $(3,6)$ at $\\arctan(2) \\approx 63.4°$, $(0,4)$ at 90°." },
          { label: "Step 2: First pop — (3,1)", text: "Push $p_0, (6,0), (3,1)$. Processing $(5,2)$: the turn $(6,0) \\to (3,1) \\to (5,2)$ has cross product $(-3,1) \\times (-1,2) = -6 + 1 = -5 < 0$ — clockwise, so pop $(3,1)$. Now the turn $(0,0) \\to (6,0) \\to (5,2)$ has cross $6 \\cdot 2 - 0 \\cdot 5 = 12 > 0$: push $(5,2)$. Stack: $(0,0), (6,0), (5,2)$." },
          { label: "Step 3: Second pop — (5,2)", text: "Processing $(6,4)$: the turn $(6,0) \\to (5,2) \\to (6,4)$ has cross $(-1,2) \\times (0,4) = -4 < 0$ — the step drawn in the figure — so pop $(5,2)$; the turn $(0,0) \\to (6,0) \\to (6,4)$ has cross $24 > 0$, push $(6,4)$. Stack: $(0,0), (6,0), (6,4)$." },
          { label: "Step 4: A collinear pop — (4,3)", text: "Processing $(4,3)$: left turn (cross $= 8$), push. Processing $(2,2)$: the turn $(6,4) \\to (4,3) \\to (2,2)$ has cross $(-2,-1) \\times (-4,-2) = 4 - 4 = 0$ — the three points are collinear (all on $y = x/2 + 1$), and collinear counts as a nonleft turn, so pop $(4,3)$; then $(0,0) \\to (6,0) \\to (2,2)$ is a left turn (cross 16) and $(2,2)$ is pushed." },
          { label: "Step 5: Third pop — (2,2), then the finish", text: "Processing $(3,6)$: the turn $(6,4) \\to (2,2) \\to (3,6)$ has cross $(-4,-2) \\times (-3,2) = -8 - 6 = -14 < 0$, pop $(2,2)$; push $(3,6)$. Finally $(0,4)$ makes a left turn at $(3,6)$ (cross $12 > 0$) and is pushed. Stack: $(0,0), (6,0), (6,4), (3,6), (0,4)$." },
          { label: "Step 6: Audit", text: "Nine pushes, four pops — the four interior points $(3,1), (5,2), (4,3), (2,2)$ each spent exactly one pop, the defining amortized economy. The five survivors, in counterclockwise order, are the hull; every popped point fails the convex-combination test (e.g. $(2,2) = \\tfrac{1}{2}(0,0) + \\tfrac{1}{2}(4,4)$-style mixtures of hull points)." }
        ],
        result: "CH(Q) = the polygon $(0,0), (6,0), (6,4), (3,6), (0,4)$ — five vertices found with 9 pushes and at most 4 pops after an $O(n \\lg n)$ angular sort."
      },
      {
        title: "Collinear points on the hull edge",
        problem: "Points $(0,0) = p_0$, $(1,0)$, $(2,0)$, $(1,1)$. Run GRAHAM-SCAN's sort and pop rule.",
        steps: [
          { label: "Sort", text: "Angles from $p_0$: $(1,0),(2,0)$ angle $0$ (tie: farther $(2,0)$ kept, $(1,0)$ discarded); $(1,1)$ angle $45^\\circ$. Order: $p_0,(2,0),(1,1)$." },
          { label: "Walk", text: "Push $p_0,(2,0)$; consider $(1,1)$: turn $p_0 \\to (2,0) \\to (1,1)$ is left ($cross = 2 > 0$): push: stack $p_0,(2,0),(1,1)$." },
          { label: "Close", text: "Hull $p_0,(2,0),(1,1)$: $(1,0)$ correctly absent (interior to edge $p_0-(2,0)$). Had all four been collinear, scan would keep only $p_0$ and $(2,0)$." },
          { label: "Jarvis contrast", text: "Jarvis march from $p_0$ would also step to $(2,0)$ (most counterclockwise among collinear), then wrap in $h = 2$ steps if collinear: output-sensitive $O(nh)$." },
        ],
        result: "Hull $(0,0),(2,0),(1,1)$: collinear $(1,0)$ discarded by the farthest-wins tie rule; left-turn test keeps the stack convex.",
      },
    ],
    keyTakeaways: [
      "CH(Q) is the intersection of all convex sets containing Q — a polygon whose extreme-point vertices all come from Q.",
      "Graham scan: anchor at the lowest point, sort by polar angle, pop every nonleft turn; the stack is always the hull of the points so far, and the scan is O(n) amortized.",
      "The $O(n \\lg n)$ total is dominated by the sort; Jarvis march trades it for $O(nh)$, which wins exactly when the hull has few vertices ($h = o(\\lg n)$)."
    ],
    quiz: [
      {
        q: "Graham scan anchors at the point with the lowest $y$-coordinate (ties by lowest $x$) because:",
        options: ["it minimizes the total sort time", "it is guaranteed to be a hull vertex, and all other points then lie at polar angles in a half-plane $[0°, 180°)$, so the angular order is well defined", "it makes the hull come out clockwise", "it guarantees all angular gaps are equal"],
        answer: 1,
        explanation: "The bottommost point is extreme, and from it every other point of Q sits in the closed upper half-plane — no angle exceeds 180°, so sorting by angle needs no wraparound case analysis."
      },
      {
        q: "In the worked example, why was $(4,3)$ popped when $(2,2)$ arrived?",
        options: ["its turn was clockwise — the cross product was negative", "its turn was collinear — cross product zero, and collinear counts as a nonleft turn", "it had the largest polar angle so far", "it was the closest point to the anchor"],
        answer: 1,
        explanation: "$(6,4), (4,3), (2,2)$ all lie on one line: the cross product is exactly 0. Graham scan pops on nonleft turns — clockwise OR collinear — so middle points of collinear runs are removed and only the extremes survive."
      },
      {
        q: "The total running time of Graham scan is $O(n \\lg n)$ because:",
        options: ["the scan loop may execute $\\Theta(n^2)$ times in the worst case", "each point is pushed once and popped at most once, so the scan is $O(n)$ and the angular sort dominates", "the polar angles can be computed in $O(\\lg n)$ each", "the hull has at most $\\lg n$ vertices"],
        answer: 1,
        explanation: "The two-counter argument caps total pops by total pushes; the sort is the bottleneck. (Sorting by angle via arctangent needs care with precision — CLRS compares with cross products instead.)"
      },
      {
        q: "Jarvis march is preferable to Graham scan exactly when:",
        options: ["all points lie on the hull", "the points are already sorted by $x$", "the hull has few vertices — $h = o(\\lg n)$ so $O(nh) < O(n \\lg n)$", "memory is severely limited"],
        answer: 2,
        explanation: "Jarvis costs one linear scan per hull edge: $O(nh)$. That beats $O(n \\lg n)$ only for small hulls; when $h \\approx n$ (points on a circle) it degrades to $O(n^2)$."
      }
    ]
  },

  // ---------------------------------------------------------------- 33.4
  {
    sectionId: "clrs-ch33-s4",
    readingTime: 7,
    intro: "The closest pair of points seems to demand $\\Theta(n^2)$ comparisons — every pair against every pair. Divide and conquer cuts it to $O(n \\lg n)$: split the points at the median $x$, recurse on both halves, and only the pairs straddling the dividing line can still beat the half-minimum $\\delta$; those points lie in a strip of width $2\\delta$. A packing argument then shows each strip point must be compared with at most its 7 successors in $y$-order, making the combine step linear.",
    objectives: [
      "Set up the divide, the recursion, and the minimum $\\delta$ of the two halves",
      "Prove the strip's width and the 7-neighbor bound via the packing argument",
      "Solve the recurrence and explain why $O(n \\lg n)$ is optimal in the algebraic decision-tree model"
    ],
    concepts: [
      {
        term: "The divide",
        kind: "method",
        statement: "Presort the points by $x$-coordinate once, $O(n \\lg n)$. Each recursive step splits at the median $x$ into a left half $Q_L$ and a right half $Q_R$ of $n/2$ points, recurses to obtain $\\delta_L$ and $\\delta_R$, and sets $\\delta = \\min(\\delta_L, \\delta_R)$. Any pair with both points in the same half already has distance $\\ge \\delta$, so only cross pairs remain. To keep the combine step $O(n)$, the recursion also maintains the points of each half sorted by $y$, obtained by **merging** the two children's $y$-lists rather than re-sorting.",
        detail: "Re-sorting by $y$ at every level would give $O(n \\lg^2 n)$; the merge keeps every level linear, which is what the master theorem needs."
      },
      {
        term: "The strip",
        kind: "definition",
        statement: "The **strip** is the set of input points within distance $\\delta$ of the dividing vertical line: $|x - x_{\\text{mid}}| < \\delta$, a band of total width $2\\delta$. Any pair achieving distance below $\\delta$ must have both points in the strip — one on each side, since a same-side pair is at distance $\\ge \\delta$. The combine step scans the strip points in $y$-order and, for each point $p$, compares $p$ with the following strip points only while their $y$-coordinate is within $\\delta$.",
        detail: "The strip typically contains far fewer than $n$ points; its size is data-dependent, but the argument below never needs it to be small — only the local packing matters."
      },
      {
        term: "The packing lemma — why 7 suffice",
        kind: "theorem",
        statement: "Fix a strip point $p$. Every strip point $q$ with $d(p, q) < \\delta$ lies in the $2\\delta \\times \\delta$ rectangle whose vertical sides are the strip boundaries and whose height is $\\delta$ centered on $p$. That rectangle splits into two $\\delta \\times \\delta$ squares, one per side of the line; within each square all points come from the same half, where pairwise distances are $\\ge \\delta$. A $\\delta \\times \\delta$ square contains **at most 4** such points — 5 points would force two into the same $\\delta/2 \\times \\delta/2$ quadrant at distance $\\le \\delta/\\sqrt{2} < \\delta$ (pigeonhole). So the rectangle holds at most 8 points including $p$: all candidates are among the **next 7 points in $y$-order**, and the whole strip scan is $O(n)$.",
        detail: "The number 7 is not tight — 5 suffices with a finer cut — but 7 is the clean bound the rectangle argument yields, and constant is all that matters."
      },
      {
        term: "The recurrence and its optimality",
        kind: "theorem",
        statement: "The running time satisfies $T(n) = 2T(n/2) + O(n)$ — two recursive calls plus a linear combine (strip scan and $y$-merge) — which the master theorem (case 2: $a = 2$, $b = 2$, $f(n) = \\Theta(n) = \\Theta(n^{\\log_2 2})$) resolves to $T(n) = \\Theta(n \\lg n)$. This is optimal in the algebraic decision-tree model: the element-uniqueness problem (do any two of $n$ reals coincide?) reduces to closest pair by placing the reals on the $x$-axis — the minimum distance is 0 iff some element repeats — and element uniqueness has an $\\Omega(n \\lg n)$ lower bound there.",
        detail: "So no exact algorithm that compares coordinates algebraically can beat $n \\lg n$ in general; linear expected time is possible only against random distributions (grid hashing), outside the worst-case model."
      },
      {
        term: "Presorting by $x$ and $y$",
        kind: "method",
        statement: "Sort once by $x$ (divide) and once by $y$ (strip order): recursion passes the $y$-sorted subarray filtered in $O(n)$ per level (merge-style), so total presort $O(n \\lg n)$ plus $O(n \\lg n)$ divide-and-conquer gives $O(n \\lg n)$ overall with no $O(n \\lg^2 n)$ log factor.",
        detail: "Naive per-level $y$-sort would cost $O(n \\lg n)$ per level ($O(n \\lg^2 n)$ total); the linear filter (stable partition of $Y$ by midline) is what keeps the combine linear and the recurrence $T(n) = 2T(n/2)+O(n)$.",
      },
    ],
    examples: [
      {
        title: "Closest pair across the dividing line",
        problem: "Find the closest pair among $P = \\{(0,0), (0,4), (2,2), (3,3), (5,0), (5,4)\\}$ by the divide-and-conquer method.",
        steps: [
          { label: "Step 1: Split at the median x", text: "The $x$-sorted points split evenly between $(2,2)$ and $(3,3)$: the dividing line is $x = 2.5$. Left half $Q_L = \\{(0,0), (0,4), (2,2)\\}$, right half $Q_R = \\{(3,3), (5,0), (5,4)\\}$." },
          { label: "Step 2: Recurse", text: "In $Q_L$ the distances are $d((0,0),(0,4)) = 4$, $d((0,0),(2,2)) = \\sqrt{8} \\approx 2.83$, $d((0,4),(2,2)) = \\sqrt{8}$, so $\\delta_L = 2\\sqrt{2} \\approx 2.83$. In $Q_R$: $d((3,3),(5,0)) = \\sqrt{13} \\approx 3.61$, $d((3,3),(5,4)) = \\sqrt{5} \\approx 2.24$, $d((5,0),(5,4)) = 4$, so $\\delta_R = \\sqrt{5} \\approx 2.24$. Hence $\\delta = \\min(\\delta_L, \\delta_R) = \\sqrt{5} \\approx 2.236$." },
          { label: "Step 3: Build the strip", text: "Points with $|x - 2.5| < 2.236$, i.e. $0.264 < x < 4.736$: only $(2,2)$ and $(3,3)$ qualify — the pairs $(0,0)/(0,4)$ and $(5,0)/(5,4)$ sit outside the band on their sides." },
          { label: "Step 4: Scan the strip in y-order", text: "The strip in increasing $y$: $(2,2)$, then $(3,3)$. Their distance is $\\sqrt{(3-2)^2 + (3-2)^2} = \\sqrt{2} \\approx 1.414 < \\delta$ — a new champion. Since only two strip points exist, the 7-neighbor cap is far from binding; the packing lemma guarantees it never could be exceeded by genuine candidates." },
          { label: "Step 5: Verify against the brute force", text: "Checking all 15 pairs confirms: the minimum is $\\sqrt{2}$, achieved uniquely by $\\{(2,2), (3,3)\\}$. Note the winner straddles the dividing line — a same-side scan would never have found it; the strip exists precisely for this case." }
        ],
        result: "The closest pair is $(2,2)$ and $(3,3)$ at distance $\\sqrt{2} \\approx 1.414$, found by the strip scan with $\\delta = \\sqrt{5}$ descending from the two recursive halves."
      },
      {
        title: "Seven neighbours suffice on the strip",
        problem: "Strip with $\\delta = 1$ (half-minimum), points $y$-sorted $0, 0.5, 1.0, \\ldots$. Why check only $7$ ahead from $y = 0$?",
        steps: [
          { label: "Packing", text: "Halves left/right each have min distance $\\delta = 1$: $1 \\times 1$ squares hold at most $4$ points each? Precisely $\\delta/2 \\times \\delta/2$ sub-squares hold $1$ point: $2\\delta \\times \\delta$ strip window holds $\\le 8$, so $7$ successors suffice." },
          { label: "Check", text: "From $y = 0$, compare $y = 0.5, 1.0$ ($\\le \\delta$ in $y$? $1.0$ is boundary): farther points differ in $y$ by $> \\delta$, hence distance $> \\delta$ regardless of $x$." },
          { label: "Linear combine", text: "Each strip point does $\\le 7$ distance tests: $O(n)$ combine, recurrence $T(n) = 2T(n/2)+O(n) = O(n \\lg n)$." },
          { label: "Optimality", text: "Algebraic-decision-tree $\\Omega(n \\lg n)$ lower bound ( sorting reduces to closest pair) makes this optimal up to constants." },
        ],
        result: "$7$ successors per point, $O(n)$ strip scan: packing lemma turns quadratic strip into linear combine.",
      },
    ],
    keyTakeaways: [
      "Split at the median $x$, recurse, take $\\delta = \\min(\\delta_L, \\delta_R)$; only strip pairs can beat $\\delta$, and maintaining $y$-lists by merging keeps the combine linear.",
      "Each strip point needs comparison with at most its 7 successors in $y$-order: the $2\\delta \\times \\delta$ rectangle packs at most 8 points, four per $\\delta \\times \\delta$ half.",
      "$T(n) = 2T(n/2) + O(n) = \\Theta(n \\lg n)$ — and element uniqueness reduces to closest pair, so this is optimal among algebraic decision-tree algorithms."
    ],
    quiz: [
      {
        q: "The strip extends only $\\delta$ to each side of the dividing line because:",
        options: ["wider strips would exceed the recursion depth", "any pair closer than $\\delta$ with both points on one side is impossible — same-side pairs are at distance $\\ge \\delta$ — so a beating pair must straddle, putting both points within $\\delta$ of the line", "the $y$-sorted list would otherwise be too long", "points farther than $\\delta$ from the line cannot be compared in constant time"],
        answer: 1,
        explanation: "Within each half the recursive minimum is already $\\ge \\delta$, so a sub-$\\delta$ pair needs one point per half — and each point of such a pair lies within $\\delta$ of the boundary."
      },
      {
        q: "Each point of the strip is compared only against the next 7 points in $y$-order because:",
        options: ["7 is an empirical constant that works well", "the $2\\delta \\times \\delta$ rectangle around it holds at most 8 points: each $\\delta \\times \\delta$ half contains at most 4 points that are pairwise $\\ge \\delta$ apart", "the strip never contains more than 8 points in total", "the $y$-sort puts candidates in blocks of 8"],
        answer: 1,
        explanation: "Pigeonhole on the four $\\delta/2 \\times \\delta/2$ quadrants of a half-square: 5 points would force two within $\\delta/\\sqrt{2} < \\delta$, contradicting the half's minimum. Two half-squares give at most 8 points, so 7 possible partners."
      },
      {
        q: "The recurrence $T(n) = 2T(n/2) + O(n)$ solves to $O(n \\lg n)$. What goes wrong if each level re-sorts the strip by $y$ instead of merging pre-sorted lists?",
        options: ["the algorithm becomes incorrect for even $n$", "the combine cost rises to $O(n \\lg n)$ per level, giving $O(n \\lg^2 n)$ overall", "the recursion no longer splits evenly", "nothing — sorting and merging cost the same"],
        answer: 1,
        explanation: "An extra $\\lg n$ factor inside each of the $\\lg n$ levels: $2T(n/2) + O(n \\lg n)$ solves to $O(n \\lg^2 n)$. Merging the children's $y$-lists restores a linear combine."
      },
      {
        q: "Why is $\\Omega(n \\lg n)$ a barrier for closest pair in the algebraic decision-tree model?",
        options: ["because the median must be found by sorting", "because element uniqueness reduces to it: put the reals on the x-axis and the minimum distance is 0 iff a duplicate exists", "because the strip scan is inherently linear", "it is not — an $O(n)$ worst-case algorithm exists"],
        answer: 1,
        explanation: "Element uniqueness carries an $\\Omega(n \\lg n)$ decision-tree lower bound, and the reduction preserves it — so worst-case exact closest-pair cannot be done in $o(n \\lg n)$ with algebraic comparisons."
      }
    ]
  }
]
