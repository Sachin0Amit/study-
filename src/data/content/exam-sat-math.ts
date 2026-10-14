import type { SectionContent } from '../library'

// ============================================================================
// Digital SAT Math — lesson content for the first 10 skill sections of the
// College Board four-domain structure (bookId 'sat-math-2026'). Covers the
// full Algebra domain (5 skills), the first 3 Advanced Math skills, the first
// Problem Solving and Data Analysis skill, and the first Geometry and
// Trigonometry skill. Written to the Digital SAT specifications: 44 questions
// in two adaptive modules, ~75% four-option MCQ + ~25% student-produced
// response, Desmos calculator + reference sheet available on every item.
// Domain weights: Algebra ~35%, Advanced Math ~35%, PS&DA ~15%, G&T ~15%.
// ============================================================================

export const satMathContent: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: 'sat-math-d1-s1',
    readingTime: 8,
    prerequisites: [
      'Combining like terms and the distributive property',
      'Order of operations with integers and fractions',
    ],
    intro: 'Algebra is the biggest slice of SAT Math — about 35% of all 44 questions — and one-variable linear equations are where it starts. Every item here rewards fluency: solve fast, solve accurately, and know instantly when an equation has no solution or infinitely many. The built-in Desmos calculator can do much of the arithmetic, but reading equation structure is what the test is really buying.',
    objectives: [
      'Solve multistep linear equations fluently, including ones with parentheses, fractions, and variables on both sides',
      'Create a linear equation from a word context and interpret its solution in that context',
      'Recognize when a linear equation has no solution or infinitely many solutions by comparing structure',
      'Choose strategically among algebra, Desmos graphing, and plugging in answer choices',
    ],
    concepts: [
      {
        term: 'What a solution is',
        kind: 'definition',
        statement: 'A **solution** of an equation is a value of the variable that makes the statement true: substituting $x = 3$ into $2x + 1 = 7$ gives $7 = 7$.',
        detail: 'SAT items test the definition itself: "If $x = 4$ is a solution of $3x + k = 14$, what is $k$?" — substitute and solve ($k = 2$). Substitution is also the fastest error check on student-produced response items, where no answer choices exist to lean on.',
      },
      {
        term: 'The solving routine',
        kind: 'method',
        statement: 'Move in this order: **distribute, collect like terms, isolate the variable** with inverse operations, keeping both sides balanced — $2(x - 3) + 4 = 10$ becomes $2x - 6 + 4 = 10$, then $2x = 12$, then $x = 6$.',
        detail: 'Fractions clear instantly when you multiply every term by the common denominator: $\\frac{x}{3} + \\frac{x}{4} = 7$ becomes $4x + 3x = 84$ after multiplying by $12$, so $x = 12$. In Desmos you can instead graph $y = \\frac{x}{3} + \\frac{x}{4}$ with $y = 7$ and read the intersection.',
      },
      {
        term: 'No solution',
        kind: 'theorem',
        statement: 'If the variable terms cancel and leave a **false number statement**, the equation has **no solution**: $3(x + 2) = 3x + 5$ reduces to $6 = 5$.',
        detail: 'Distribute first to see it: $3x + 6 = 3x + 5$ gives $6 = 5$, never true. For "which equation has no solution" stems, compare the $x$-coefficients — equal coefficients with unequal constants means no solution. Graphing both sides in Desmos shows two parallel lines that never meet.',
      },
      {
        term: 'Infinitely many solutions',
        kind: 'theorem',
        statement: 'If everything cancels to a **true statement** such as $4 = 4$, every value of $x$ works: the equation is an **identity**, like $2(x + 3) = 2x + 6$.',
        detail: 'The parameter version is a SAT staple: "For what value of $k$ does $kx + 12 = 3x + 2k + 6$ have infinitely many solutions?" Match the $x$-coefficients ($k = 3$) and the constants ($12 = 2k + 6$, so $k = 3$); the two conditions agree, so $k = 3$.',
      },
      {
        term: 'Strategic solving',
        kind: 'insight',
        statement: 'Before grinding algebra, scan the format: **graph both sides in Desmos** for a solve-item, or **plug the answer choices** back in — test whether a candidate $x = 4$ balances $3x + 2 = 14$ before doing any algebra.',
        detail: 'Student-produced response ("grid-in") items leave you no choices, so algebra or Desmos must finish them. Practicing all three routes — algebra, graphing, back-solving — across separate sessions is deliberate distributed practice: it keeps each method fast instead of over-fitting to one.',
      },
    ],
    examples: [
      {
        title: 'A tank fills (student-produced response style)',
        problem: 'A storage tank already contains 200 gallons of water. Water is pumped in at a constant rate of 15 gallons per minute. How many minutes does it take for the tank to hold 725 gallons?',
        steps: [
          { label: 'Step 1', text: '```text\nm = minutes ; amount = 200 + 15m ; set equal to 725\n```\nLet $m$ be minutes pumped. The tank holds the initial amount plus rate times time: $200 + 15m = 725$.' },
          { label: 'Step 2', text: 'Subtract 200 from both sides to isolate the variable term: $15m = 525$.' },
          { label: 'Step 3', text: 'Divide by 15: $m = \\frac{525}{15} = 35$.' },
          { label: 'Step 4', text: 'Check in context: $200 + 15(35) = 200 + 525 = 725$ gallons. The answer $35$ is a clean grid-in value.' },
        ],
        result: '$m = 35$ minutes.',
      },
      {
        title: 'Designing an identity',
        problem: 'For what value of $k$ does the equation $kx + 12 = 3x + 2k + 6$ have infinitely many solutions?',
        steps: [
          { label: 'Step 1', text: '```text\ncollect: (k - 3)x = 2k - 6 ; identity => both sides zero\n```\nGather $x$-terms on the left and constants on the right: $kx - 3x = 2k + 6 - 12$, that is $(k - 3)x = 2k - 6$.' },
          { label: 'Step 2', text: 'For every $x$ to satisfy the equation, the $x$-coefficient must be zero: $k - 3 = 0$, so $k = 3$.' },
          { label: 'Step 3', text: 'The constant side must then also vanish: $2k - 6 = 0$ gives $k = 3$ — consistent, not conflicting.' },
          { label: 'Step 4', text: 'With $k = 3$ the equation reads $3x + 12 = 3x + 12$, true for every real $x$.' },
        ],
        result: '$k = 3$.',
      },
    ],
    keyTakeaways: [
      'A solution makes the equation true — substitution is the universal check and often the fastest route on parameter items.',
      'Clear fractions by multiplying through by the common denominator, distribute carefully, and keep both sides balanced.',
      'Cancel and compare structure: false number statement means no solution; true number statement means infinitely many.',
      'Rotate methods — algebra, Desmos graphing, back-solving — in distributed practice so each stays sharp for the format the item demands.',
    ],
    quiz: [
      {
        q: 'Which of the following equations has no solution?',
        options: ['$2(x + 5) = 2x + 10$', '$2(x + 5) = 2x + 5$', '$2(x + 5) = x + 10$', '$2(x - 5) = x - 10$'],
        answer: 1,
        explanation: 'Step 1: Expand each left side. Step 2: Choice A gives $2x + 10 = 2x + 10$ — an identity with infinitely many solutions. Step 3: Choice B gives $2x + 10 = 2x + 5$, which reduces to $10 = 5$, a false statement, so no value of $x$ works. Step 4: Choices C and D each reduce to $x = 0$, a single solution.',
      },
      // SAT-pattern: solve from context, fixed fee + per-unit rate
      {
        q: 'A phone plan costs $\\$35$ per month plus $\\$0.10$ per minute of talk time. One month\'s bill is $\\$52.50$. How many minutes were used?',
        options: ['$525$', '$170$', '$175$', '$185$'],
        answer: 2,
        explanation: 'Step 1: Model the bill: $35 + 0.10m = 52.50$. Step 2: Subtract the fixed fee: $0.10m = 17.50$. Step 3: Divide by $0.10$: $m = 175$. Step 4: Check: $35 + 17.50 = 52.50$. The trap $525$ comes from dividing the whole bill by $0.10$ and forgetting the fee.',
      },
      {
        q: 'How many solutions does $3(x - 4) + 2x = 5x - 12$ have?',
        options: ['$\\text{Zero}$', '$\\text{Exactly one}$', '$\\text{Exactly two}$', '$\\text{Infinitely many}$'],
        answer: 3,
        explanation: 'Step 1: Distribute: $3x - 12 + 2x = 5x - 12$. Step 2: Combine like terms: $5x - 12 = 5x - 12$. Step 3: The two sides are identical, so every $x$ satisfies the equation. Step 4: That is the signature of infinitely many solutions.',
      },
      {
        q: 'If $7 - 2(x + 1) = 4x + 9$, what is the value of $x$?',
        options: ['$-\\frac{2}{3}$', '$\\frac{2}{3}$', '$-\\frac{3}{2}$', '$\\frac{3}{2}$'],
        answer: 0,
        explanation: 'Step 1: Distribute the negative carefully: $7 - 2x - 2 = 4x + 9$. Step 2: Simplify the left side: $5 - 2x = 4x + 9$. Step 3: Collect: $-4 = 6x$, so $x = -\\frac{2}{3}$. Step 4: The answer $\\frac{2}{3}$ is the sign slip from dropping the negative when dividing.',
      },
    ],
  },
  // ---------------------------------------------------------------- 1.2
  {
    sectionId: 'sat-math-d1-s2',
    readingTime: 9,
    prerequisites: [
      'Solving one-variable linear equations (Section 1.1)',
      'Plotting ordered pairs in the $xy$-plane',
    ],
    intro: 'Two-variable linear equations are the SAT\'s bridge between algebra and graphs. You will compute slope, read intercepts, spot parallel and perpendicular pairs, and translate a real relationship — cost, distance, temperature — into $Ax + By = C$ or $y = mx + b$. Desmos makes every one of these visual, and the fastest test-takers graph first and compute second.',
    objectives: [
      'Switch between standard form $Ax + By = C$ and slope-intercept form $y = mx + b$',
      'Compute and interpret slope and $x$- and $y$-intercepts from two points, a table, or a graph',
      'Use slopes to identify parallel and perpendicular lines',
      'Model a linear relationship in context and evaluate it',
    ],
    concepts: [
      {
        term: 'Standard form',
        kind: 'definition',
        statement: '**Standard form** is $Ax + By = C$; solving for $y$ exposes the slope-intercept view with slope $-\\frac{A}{B}$ and $y$-intercept $\\frac{C}{B}$.',
        detail: 'A favorite SAT stem hands you $6x + 3y = 12$ and asks for the slope — rearrange to $y = -2x + 4$ instead of misreading the coefficients. Questions like "what is $y$ when $x = 2$?" need no rearranging at all: substitute directly into the standard form.',
      },
      {
        term: 'Slope',
        kind: 'definition',
        statement: 'The **slope** between points $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\frac{y_2 - y_1}{x_2 - x_1}$ — change in output over change in input.',
        detail: 'Consistency is everything: subtract in the same order top and bottom. The classic slope trap flips one order, turning the true $m = \\frac{7 - 3}{2 - 9} = -\\frac{4}{7}$ into the false $+\\frac{4}{7}$. In context, slope is a rate with units — dollars per hour, miles per gallon — and SAT answer choices include the inverted unit rate as bait.',
      },
      {
        term: 'Intercepts',
        kind: 'method',
        statement: 'The **$y$-intercept** is where $x = 0$ — the starting amount in context; the **$x$-intercept** is where $y = 0$ — when the quantity reaches zero.',
        detail: 'Compute the $x$-intercept of $y = \\frac{3}{4}x - 9$ by solving $0 = \\frac{3}{4}x - 9$, which gives $x = 12$. Graph-style stories hide these: "at what time did the tank empty?" is an $x$-intercept question wearing a narrative.',
      },
      {
        term: 'Parallel and perpendicular',
        kind: 'theorem',
        statement: '**Parallel** lines share slope: $m_1 = m_2$. **Perpendicular** lines have slopes multiplying to $-1$: $m_1 m_2 = -1$, so flip the fraction and change the sign.',
        detail: 'Perpendicular to $y = \\frac{2}{3}x + 5$ needs slope $-\\frac{3}{2}$, not $-\\frac{2}{3}$. Horizontal lines ($m = 0$) and vertical lines ($x = a$, undefined slope) are perpendicular to each other — an SAT favorite in disguise.',
      },
      {
        term: 'Modeling with two variables',
        kind: 'insight',
        statement: 'Translate stories directly into $y = mx + b$: **$m$ is the per-unit rate, $b$ is the fixed starting value** — then evaluate or extrapolate with the model.',
        detail: 'Two data points determine a linear model. In Desmos, enter the points in a table and type $y_1 \\sim m x_1 + b$ to fit the line instantly — a smart on-screen check of paper-and-pencil work.',
      },
    ],
    examples: [
      {
        title: 'Pricing a print job',
        problem: 'A copy shop charges a one-time setup fee plus a per-page rate. An order of 30 pages costs $\\$9.50$, and an order of 70 pages costs $\\$17.50$. What is the total cost of a 120-page order?',
        steps: [
          { label: 'Step 1', text: '```text\npoints (30, 9.50) and (70, 17.50) ; slope = per-page rate\n```\nTreat the orders as points on a line with $x$ = pages and $y$ = dollars: $(30, 9.50)$ and $(70, 17.50)$.' },
          { label: 'Step 2', text: 'Slope is the per-page rate: $m = \\frac{17.50 - 9.50}{70 - 30} = \\frac{8}{40} = 0.20$ dollars per page.' },
          { label: 'Step 3', text: 'Use one point to find the setup fee: $9.50 = 0.20(30) + b$, so $b = 3.50$. The model is $y = 0.20x + 3.50$.' },
          { label: 'Step 4', text: 'Evaluate: $y = 0.20(120) + 3.50 = 24.00 + 3.50 = 27.50$.' },
        ],
        result: 'A 120-page order costs $\\$27.50$ (setup fee $\\$3.50$ plus $\\$0.20$ per page).',
      },
      {
        title: 'A perpendicular line through a point',
        problem: 'Line $\\ell$ is perpendicular to the line $y = \\frac{2}{3}x + 5$ and passes through the point $(6, 1)$. What is the equation of line $\\ell$?',
        steps: [
          { label: 'Step 1', text: '```text\nperpendicular slope = -3/2 ; then y = (-3/2)x + b\n```\nThe given slope is $\\frac{2}{3}$, so the perpendicular slope is its negative reciprocal: $-\\frac{3}{2}$.' },
          { label: 'Step 2', text: 'Start with $y = -\\frac{3}{2}x + b$ and substitute the known point: $1 = -\\frac{3}{2}(6) + b$.' },
          { label: 'Step 3', text: 'Simplify: $1 = -9 + b$, so $b = 10$.' },
          { label: 'Step 4', text: 'Graph both lines in Desmos to confirm they meet once, at $(6, 1)$, at a right angle.' },
        ],
        result: '$y = -\\frac{3}{2}x + 10$',
      },
    ],
    keyTakeaways: [
      'Standard form hides the slope — solve for $y$ to expose $m = -\\frac{A}{B}$ and $b = \\frac{C}{B}$.',
      'Slope is $\\frac{\\Delta y}{\\Delta x}$ with consistent subtraction order; in context it carries units and is the per-unit rate.',
      'Parallel means equal slopes; perpendicular means slopes multiply to $-1$ — flip the fraction and negate.',
      'Two context points determine a linear model: the slope is the rate, the $y$-intercept is the starting value.',
    ],
    quiz: [
      {
        q: 'What is the slope of the line with equation $6x + 3y = 12$?',
        options: ['$6$', '$-2$', '$2$', '$-\\frac{1}{2}$'],
        answer: 1,
        explanation: 'Step 1: Solve for $y$: $3y = -6x + 12$. Step 2: Divide by 3: $y = -2x + 4$. Step 3: The coefficient of $x$ is the slope, $-2$. Step 4: Reading $-A = -6$ as the slope is the trap — you must divide by $B$.',
      },
      // SAT-pattern: parallel line through a point, then evaluate
      {
        q: 'A line parallel to $y = 5x - 3$ passes through $(3, 8)$. What is the value of $y$ when $x = 4$?',
        options: ['$17$', '$15$', '$13$', '$27$'],
        answer: 2,
        explanation: 'Step 1: Parallel lines share slope, so $m = 5$. Step 2: Substitute the point: $8 = 5(3) + b$, so $b = -7$. Step 3: The line is $y = 5x - 7$. Step 4: At $x = 4$: $y = 20 - 7 = 13$.',
      },
      {
        q: 'Which of the following lines is perpendicular to $y = \\frac{3}{4}x + 2$?',
        options: ['$y = -\\frac{4}{3}x + 1$', '$y = \\frac{4}{3}x - 1$', '$y = -\\frac{3}{4}x + 2$', '$y = \\frac{3}{4}x + 5$'],
        answer: 0,
        explanation: 'Step 1: Perpendicular slopes multiply to $-1$. Step 2: The reciprocal of $\\frac{3}{4}$ is $\\frac{4}{3}$; negate it to get $-\\frac{4}{3}$. Step 3: Only the first choice carries slope $-\\frac{4}{3}$. Step 4: Choice C is the negative, not the negative reciprocal — the most-picked wrong answer.',
      },
      {
        q: 'The cost $C$, in dollars, of ordering $n$ team jerseys is modeled by $C = 12n + 75$. What does the $C$-intercept represent?',
        options: ['The cost of each additional jersey', 'The number of jerseys ordered', 'The total cost of 12 jerseys', 'The one-time design fee charged regardless of how many jerseys are ordered'],
        answer: 3,
        explanation: 'Step 1: The $C$-intercept is the value of $C$ when $n = 0$. Step 2: Substituting gives $C = 75$ — the cost of ordering zero jerseys. Step 3: That is the fixed design fee paid no matter the order size. Step 4: The slope $12$, not the intercept, is the per-jersey cost.',
      },
    ],
  },
  // ---------------------------------------------------------------- 1.3
  {
    sectionId: 'sat-math-d1-s3',
    readingTime: 9,
    prerequisites: [
      'Two-variable linear equations and slope (Section 1.2)',
      'Evaluating expressions by substitution',
    ],
    intro: 'Linear functions package everything from Section 1.2 into $f(x) = mx + b$ — the SAT\'s favorite modeling vehicle. Expect items that hand you a table, a graph, or two input–output pairs and ask you to rebuild the function or predict a value. Desmos turns a table into a fitted line in seconds, which makes checking your algebra nearly free.',
    objectives: [
      'Evaluate, interpret, and build linear functions in $f(x)$ notation',
      'Recover $m$ and $b$ from a table, a graph, or input–output pairs',
      'Interpret slope as a constant rate of change and the intercept as an initial value in context',
      'Solve $f(x) = c$ for the input and interpret input/output pairs in a model',
    ],
    concepts: [
      {
        term: 'Function notation',
        kind: 'notation',
        statement: '$f(x)$ is the **output** of the function at input $x$: the statement $f(4) = 9$ means input $4$ produces output $9$, i.e. the point $(4, 9)$ on the graph.',
        detail: 'Two SAT reads: "find $f(3)$" is evaluation (plug in), while "if $f(x) = 45$, find $x$" is equation-solving (output known, hunt the input). Never read $f(x)$ as multiplication — $f(3)$ is not $f \\cdot 3$.',
      },
      {
        term: 'Linear function model',
        kind: 'definition',
        statement: 'A **linear function** $f(x) = mx + b$ changes at a constant rate: equal increments of input produce equal increments of output — the defining table signature.',
        detail: 'First differences of a linear table are constant: if outputs go $12, 9, 6, 3$ as inputs go $1, 2, 3, 4$, the rate is $-3$ per unit, so $m = -3$. Unequal first differences immediately rule out a linear model.',
      },
      {
        term: 'Rate of change in context',
        kind: 'insight',
        statement: 'In a model like $V(t) = -600t + 8{,}500$, **$m$ is the rate** — value falling $600$ dollars per year — and **$b$ is the initial value** at $t = 0$.',
        detail: 'Read the units aloud: dollars per year, miles per hour, degrees per minute. SAT traps include quoting the rate with flipped units or reading $b$ as the rate — always ask "what happens at input zero?"',
      },
      {
        term: 'Connecting representations',
        kind: 'method',
        statement: 'A line, a table, and an equation are **three views of one function**: every point $(a, f(a))$ satisfies $y = mx + b$, and slope computed from any two views must agree.',
        detail: 'When matching graphs to equations, anchor on one point (usually the $y$-intercept) plus the sign of the slope — that eliminates three of four choices. In Desmos, type the table then $y_1 \\sim m x_1 + b$ to fit the line and read $m$ and $b$ directly.',
      },
      {
        term: 'Solving with functions',
        kind: 'method',
        statement: 'To find when the output reaches a target $c$, **solve $f(x) = c$**: undo the function\'s operations in reverse order.',
        detail: 'For $f(x) = 45 - 2x$ reaching $31$: $45 - 2x = 31$ gives $x = 7$. Graphically this is where the horizontal line $y = c$ crosses the graph — Desmos shows it instantly and often beats algebra on grid-in items.',
      },
    ],
    examples: [
      {
        title: 'Depreciating equipment',
        problem: 'The value $V$, in dollars, of a piece of equipment $t$ years after purchase is modeled by $V(t) = 8{,}500 - 600t$. What is the equipment\'s value after 2 years, and after how many years does the value reach $5{,}500$ dollars?',
        steps: [
          { label: 'Step 1', text: '```text\nV(t) = 8500 - 600t ; \"V(t) = 5500\" means solve for t\n```\nPart (a) is evaluation: $V(2) = 8{,}500 - 600(2) = 8{,}500 - 1{,}200 = 7{,}300$ dollars.' },
          { label: 'Step 2', text: 'Part (b) is solving: set $8{,}500 - 600t = 5{,}500$.' },
          { label: 'Step 3', text: 'Subtract: $-600t = -3{,}000$, so $t = 5$.' },
          { label: 'Step 4', text: 'Interpret via the slope: value drops $600$ dollars per year, and losing $3{,}000$ dollars takes exactly $\\frac{3{,}000}{600} = 5$ years — the algebra and the story agree.' },
        ],
        result: 'After 2 years: $7{,}300$ dollars. The value reaches $5{,}500$ dollars after 5 years.',
      },
      {
        title: 'Rebuilding a function from a table',
        problem: 'A linear function $f$ satisfies $f(0) = 5$, $f(2) = 1$, $f(4) = -3$, and $f(6) = -7$. Find an equation for $f(x)$ and evaluate $f(10)$.',
        steps: [
          { label: 'Step 1', text: '```text\nrate = (1 - 5)/(2 - 0) = -2 per unit ; f(0) = 5 gives b\n```\nCompute the rate: from $x = 0$ to $x = 2$ the output changes $1 - 5 = -4$ over an input change of $2$, and every step repeats the same pattern.' },
          { label: 'Step 2', text: 'The slope is $m = \\frac{-4}{2} = -2$ per unit of $x$ — constant first differences confirm linearity.' },
          { label: 'Step 3', text: 'The pair $f(0) = 5$ hands you the intercept: $b = 5$. So $f(x) = -2x + 5$.' },
          { label: 'Step 4', text: 'Evaluate: $f(10) = -2(10) + 5 = -15$. Desmos check: enter the four pairs in a table, type $y_1 \\sim m x_1 + b$, and it returns $m = -2$, $b = 5$.' },
        ],
        result: '$f(x) = -2x + 5$, so $f(10) = -15$.',
      },
    ],
    keyTakeaways: [
      '$f(a)$ is the output at input $a$ — the point $(a, f(a))$ lies on the graph; $f$ is not a factor to multiply.',
      'Constant first differences in a table mean linear; the ratio $\\frac{\\Delta \\text{output}}{\\Delta \\text{input}}$ is the slope.',
      'In context: slope is the per-unit rate with units, and the intercept is the starting value at input $0$.',
      '"If $f(x) = c$, find $x$" means solve the equation — or find where $y = c$ crosses the graph in Desmos.',
    ],
    quiz: [
      {
        q: 'If $f(x) = 7 - 2x$, what is $f(-3)$?',
        options: ['$13$', '$1$', '$-1$', '$-13$'],
        answer: 0,
        explanation: 'Step 1: Substitute $x = -3$. Step 2: $f(-3) = 7 - 2(-3)$. Step 3: $= 7 + 6 = 13$. Step 4: The answer $-13$ comes from also negating the $7$.',
      },
      {
        q: 'The graph of a linear function $f$ passes through $(0, 4)$ and $(3, 13)$. What is $f(-2)$?',
        options: ['$10$', '$-2$', '$2$', '$-10$'],
        answer: 1,
        explanation: 'Step 1: Slope $m = \\frac{13 - 4}{3 - 0} = 3$. Step 2: The point $(0, 4)$ is the $y$-intercept, so $f(x) = 3x + 4$. Step 3: Evaluate: $f(-2) = -6 + 4 = -2$. Step 4: The answer $2$ is $f(+2)$ — the input\'s sign matters.',
      },
      // SAT-pattern: interpret slope as rate in a population model
      {
        q: 'The function $P(t) = 95t + 1{,}200$ models a town\'s population $t$ years after 2020. What does the number $95$ mean in this model?',
        options: ['The population in the year 2020', 'The increase in population each year', 'The number of years since 2020', 'The total population after $t$ years'],
        answer: 1,
        explanation: 'Step 1: The structure is $P = (\\text{rate}) \\cdot t + (\\text{initial})$. Step 2: The coefficient of $t$ is the yearly change — $95$ more residents per year. Step 3: The constant $1{,}200$ is the year-2020 population. Step 4: The total after $t$ years is $P(t)$ itself, not the number $95$.',
      },
      {
        q: 'For a linear function $f$, $f(-1) = 4$ and $f(5) = 22$. What is $f(2)$?',
        options: ['$10$', '$16$', '$13$', '$12$'],
        answer: 2,
        explanation: 'Step 1: Slope $m = \\frac{22 - 4}{5 - (-1)} = \\frac{18}{6} = 3$. Step 2: Use $f(-1) = 4$: $4 = 3(-1) + b$, so $b = 7$. Step 3: Then $f(x) = 3x + 7$. Step 4: $f(2) = 6 + 7 = 13$.',
      },
    ],
  },
  // ---------------------------------------------------------------- 1.4
  {
    sectionId: 'sat-math-d1-s4',
    readingTime: 10,
    prerequisites: [
      'Slope and $y$-intercept (Section 1.2)',
      'Solving one-variable linear equations (Section 1.1)',
    ],
    intro: 'Two equations, two unknowns — the SAT tests systems three ways: solve them, build them from a story about tickets and budgets, and classify them as one solution, no solution, or infinitely many. Desmos is at its absolute best here: graph both lines, tap the intersection, done. The exam knows that, so it also writes structure questions where comparing slopes beats graphing.',
    objectives: [
      'Solve systems by substitution, elimination, and Desmos graphing, choosing the fastest route',
      'Classify a system as one solution, no solution, or infinitely many solutions using slopes and intercepts',
      'Create and solve a system from a real-world context and interpret the solution',
      'Handle systems with a parameter, such as finding $k$ for a required solution count',
    ],
    concepts: [
      {
        term: 'What a solution is',
        kind: 'definition',
        statement: 'A **solution** of a system is an ordered pair $(x, y)$ satisfying **both** equations — graphically, the intersection point of the two lines.',
        detail: 'SAT verification trick: substitute the pair into both equations. If it fails either one, eliminate the choice — this kills most options on "which ordered pair is a solution" items before any real solving begins.',
      },
      {
        term: 'Substitution and elimination',
        kind: 'method',
        statement: '**Substitution** shines when one equation is already solved for a variable ($y = 3x + 1$); **elimination** shines when adding the (possibly scaled) equations cancels a variable.',
        detail: 'To eliminate $y$ in $2x + 3y = 12$ and $5x - 3y = 9$, just add — the $+3y$ and $-3y$ cancel to give $7x = 21$. Choose the route by looking at the equations for five seconds before committing.',
      },
      {
        term: 'Classifying systems',
        kind: 'theorem',
        statement: '**Different slopes** mean exactly one solution; **same slope, different intercepts** (parallel lines) mean no solution; **identical equations in disguise** mean infinitely many.',
        detail: 'Put both equations in $y = mx + b$ form and compare $m$ first, then $b$. A system like $2x + y = 3$ and $4x + 2y = k$ collapses to infinitely many when $k = 6$ and to no solution for any other $k$ — the parameter twist the SAT loves.',
      },
      {
        term: 'Building systems from context',
        kind: 'method',
        statement: 'Two unknowns need **two stories**: typically a total-count equation ($a + s = 230$) and a total-value equation ($8a + 5s = 1{,}540$).',
        detail: 'Define variables with units ("$a$ = adult tickets sold"), then translate each sentence into an equation. The check step — substituting back into both equations — catches nearly every setup slip.',
      },
      {
        term: 'Desmos first',
        kind: 'insight',
        statement: 'For any "solve the system" item, **graph both equations and click the intersection** — ten seconds, zero algebra errors; for "no solution / infinitely many" stems, comparing slopes and intercepts is faster than graphing.',
        detail: 'Student-produced response systems work in Desmos too — the intersection coordinates can be read straight off the graph. Keep substitution sharp anyway: alternating methods across practice sessions is distributed practice that keeps both routes fast.',
      },
    ],
    examples: [
      {
        title: 'Ticket sales',
        problem: 'A school play sells adult tickets for $\\$8$ and student tickets for $\\$5$. A total of 230 tickets are sold for $\\$1{,}540$. How many adult tickets are sold?',
        steps: [
          { label: 'Step 1', text: '```text\na + s = 230 ; 8a + 5s = 1540\n```\nDefine $a$ = adult tickets and $s$ = student tickets. The system pairs a count equation with a value equation.' },
          { label: 'Step 2', text: 'Substitute $s = 230 - a$ into the value equation: $8a + 5(230 - a) = 1{,}540$.' },
          { label: 'Step 3', text: 'Solve: $8a + 1{,}150 - 5a = 1{,}540$, so $3a = 390$ and $a = 130$.' },
          { label: 'Step 4', text: 'Then $s = 100$. Check both equations: $130 + 100 = 230$ and $8(130) + 5(100) = 1{,}040 + 500 = 1{,}540$.' },
        ],
        result: '130 adult tickets (and 100 student tickets) were sold.',
      },
      {
        title: 'Tuning a system for infinite solutions',
        problem: 'The system $3x - 5y = 7$ and $6x + ky = 14$ has infinitely many solutions. What is the value of $k$?',
        steps: [
          { label: 'Step 1', text: '```text\ncompare 6x + ky = 14 with 2*(3x - 5y = 7)\n```\nInfinitely many solutions means both equations describe the same line — one is a multiple of the other.' },
          { label: 'Step 2', text: 'Compare the $x$-coefficients: $6 = 2 \\cdot 3$, so the second equation must be $2$ times the first.' },
          { label: 'Step 3', text: 'The constants agree ($14 = 2 \\cdot 7$), and the $y$-coefficients must satisfy $k = 2 \\cdot (-5) = -10$.' },
          { label: 'Step 4', text: 'Check by scaling: multiplying $3x - 5y = 7$ by $2$ gives exactly $6x - 10y = 14$.' },
        ],
        result: '$k = -10$',
      },
    ],
    keyTakeaways: [
      'A system\'s solution is the intersection point — verify candidates in both equations before choosing.',
      'Substitution when a variable is isolated; elimination when coefficients align; Desmos for speed on solve-items.',
      'Classify by slopes: different slopes give one solution; equal slopes with different intercepts give none; identical lines give infinitely many.',
      'Context systems pair a total-count equation with a total-value equation — then check the pair against both.',
    ],
    quiz: [
      {
        q: 'If $x + y = 14$ and $x - y = 4$, what is the value of $x$?',
        options: ['$5$', '$10$', '$7$', '$9$'],
        answer: 3,
        explanation: 'Step 1: Add the equations: the $y$-terms cancel and $2x = 18$. Step 2: So $x = 9$. Step 3: Then $y = 5$ from the first equation. Step 4: The pair $(9, 5)$ checks in both: $14$ and $4$. ✓',
      },
      // SAT-pattern: parameter k selects the solution count
      {
        q: 'The system $2x + y = 3$ and $4x + 2y = k$ has infinitely many solutions. What is the value of $k$?',
        options: ['$6$', '$3$', '$2$', '$12$'],
        answer: 0,
        explanation: 'Step 1: Multiply the first equation by 2: $4x + 2y = 6$. Step 2: For infinitely many solutions the second equation must match this line exactly. Step 3: So $k = 6$. Step 4: Any other $k$ gives parallel distinct lines — no solution at all.',
      },
      {
        q: 'Two notebooks and three pens cost $\\$12$. Four notebooks and three pens cost $\\$21$. What is the cost of one notebook?',
        options: ['$\\$1.00$', '$\\$4.50$', '$\\$6.00$', '$\\$9.00$'],
        answer: 1,
        explanation: 'Step 1: Subtract the first purchase from the second: two extra notebooks cost $21 - 12 = 9$ dollars. Step 2: So one notebook costs $4.50$ dollars. Step 3: Back-substitute: $2(4.50) + 3p = 12$ gives $3p = 3$, so $p = 1$. Step 4: Check the second equation: $4(4.50) + 3(1) = 21$. ✓',
      },
      {
        q: 'The system $y = 4x - 3$ and $2y - 8x = c$ has no solution. Which statement about $c$ is true?',
        options: ['$c = -6$ only', '$c = 6$ only', 'Any value except $-6$', 'Any real value'],
        answer: 2,
        explanation: 'Step 1: Solve the second equation for $y$: $2y = 8x + c$, so $y = 4x + \\frac{c}{2}$. Step 2: Both slopes are $4$, so the lines are parallel — no solution exactly when the intercepts differ. Step 3: The first line\'s intercept is $-3$, so we need $\\frac{c}{2} \\ne -3$, that is, $c \\ne -6$. Step 4: If $c = -6$ the lines coincide and there are infinitely many solutions instead.',
      },
    ],
  },
  // ---------------------------------------------------------------- 1.5
  {
    sectionId: 'sat-math-d1-s5',
    readingTime: 9,
    prerequisites: [
      'Solving linear equations (Section 1.1)',
      'Graphing lines in slope-intercept form (Section 1.2)',
    ],
    intro: 'Inequalities power the SAT\'s budget and constraint stories: "at most 20 dollars", "no fewer than 4 items". The solving moves mirror equations with one landmine — the sign flip — and two-variable versions become shaded regions you must draw and read. Desmos graphs any inequality and shades its region automatically, which makes it a superb checking tool on test day.',
    objectives: [
      'Solve one-variable linear inequalities and flip the symbol correctly when multiplying or dividing by a negative',
      'Graph the solution region of a two-variable inequality, using solid versus dashed boundaries correctly',
      'Test whether an ordered pair satisfies an inequality or a system of inequalities',
      'Translate constraint language — at most, at least, no more than — into inequalities and integer answers',
    ],
    concepts: [
      {
        term: 'The flip rule',
        kind: 'law',
        statement: 'Multiplying or dividing an inequality by a **negative number reverses the symbol**: from $-4x < 12$ follows $x > -3$, not $x < -3$.',
        detail: 'The flip changes only the direction, not the numbers — which is exactly why it is the most common inequality error. Distributing a negative (as in $7 - 3(x + 1) \\le 2(x - 5)$) buries the flip inside the algebra; re-derive each step rather than pattern-match.',
      },
      {
        term: 'Boundary lines',
        kind: 'method',
        statement: 'For $y \\le mx + b$ draw a **solid** line and shade below; for $y < mx + b$ draw a **dashed** line — points on a dashed boundary are not solutions.',
        detail: 'Solid belongs to $\\le$ and $\\ge$ (boundary included); dashed to $<$ and $>$. "Shade below" is reliable only once $y$ is isolated: $3x - y \\ge 7$ must first become $y \\le 3x - 7$, or you can test a point like $(0, 0)$ to pick the side.',
      },
      {
        term: 'Testing points',
        kind: 'method',
        statement: 'A point **solves** a two-variable inequality if substituting makes it true — $(2, -3)$ solves $3x - y \\ge 7$ because $6 + 3 = 9 \\ge 7$.',
        detail: 'SAT items ask "which ordered pair is a solution of..." — substitute, do not graph. Use $(0, 0)$ as your shading test point whenever it is not on the boundary; its arithmetic is the fastest available.',
      },
      {
        term: 'Constraints in context',
        kind: 'insight',
        statement: '"At most" is $\\le$ and "at least" is $\\ge$: budgets cap spending, minimums force counts — and **item-count problems need whole-number solutions** inside the region.',
        detail: 'If hot dogs cost $3$ dollars and sodas $2$ dollars on an $18$-dollar budget, $3h + 2s \\le 18$ — but $h$ and $s$ must be nonnegative integers, so the answers are scattered lattice points, not a smooth region. SAT traps include offering a fractional vertex as an item count.',
      },
      {
        term: 'Systems of inequalities',
        kind: 'theorem',
        statement: 'A **system** of inequalities has as its solution the overlap of the shaded regions: a point must satisfy **every** inequality at once.',
        detail: 'Graph both in Desmos and read the double-shaded wedge. Feasible-region questions ("which purchase is possible?") are point-testing in disguise — the ordered pair that survives all constraints is the answer.',
      },
    ],
    examples: [
      {
        title: 'Solving with a buried flip',
        problem: 'Solve $7 - 3(x + 1) \\le 2(x - 5)$ and describe the solution.',
        steps: [
          { label: 'Step 1', text: '```text\n7 - 3x - 3 <= 2x - 10 ; collect x on the positive side\n```\nDistribute both sides: $7 - 3x - 3 \\le 2x - 10$, which simplifies to $4 - 3x \\le 2x - 10$.' },
          { label: 'Step 2', text: 'Collect the variable terms on the right — the positive side — to dodge the flip entirely: $4 + 10 \\le 2x + 3x$, so $14 \\le 5x$.' },
          { label: 'Step 3', text: 'Divide by the positive $5$: $\\frac{14}{5} \\le x$, equivalently $x \\ge 2.8$.' },
          { label: 'Step 4', text: 'Check a sample value, $x = 3$: left side $7 - 3(4) = -5$, right side $2(-2) = -4$, and $-5 \\le -4$. ✓' },
        ],
        result: '$x \\ge \\frac{14}{5} = 2.8$',
      },
      {
        title: 'A concession-stand budget',
        problem: 'Hot dogs sell for $\\$3$ and sodas for $\\$2$. Elena has $\\$18$ and wants at least 4 items in total. Is the combination of 4 hot dogs and 3 sodas possible? What about 2 hot dogs and 5 sodas?',
        steps: [
          { label: 'Step 1', text: '```text\n3h + 2s <= 18 ; h + s >= 4 ; h, s whole numbers\n```\nTranslate with $h$ = hot dogs and $s$ = sodas: the budget gives $3h + 2s \\le 18$ and the item minimum gives $h + s \\ge 4$.' },
          { label: 'Step 2', text: 'Test $(4, 3)$: cost $3(4) + 2(3) = 18 \\le 18$ ✓ and count $7 \\ge 4$ ✓ — possible, and it uses the entire budget.' },
          { label: 'Step 3', text: 'Test $(2, 5)$: cost $3(2) + 2(5) = 16 \\le 18$ ✓ and count $7 \\ge 4$ ✓ — also possible, leaving $2$ dollars unspent.' },
          { label: 'Step 4', text: 'Graph both inequalities in Desmos: the buyable combinations are the lattice points in the double-shaded region — both tested pairs sit inside it.' },
        ],
        result: 'Both combinations are possible; $(4, 3)$ exactly exhausts the $\\$18$ budget.',
      },
    ],
    keyTakeaways: [
      'Flip the inequality symbol when multiplying or dividing by a negative — or dodge the flip by collecting variables on the positive side.',
      'Solid boundary means included ($\\le, \\ge$); dashed means excluded ($<, >$). Shade below only after isolating $y$.',
      'Test candidate points by substitution; $(0, 0)$ is the fastest shading check when it is off the boundary.',
      'Context constraints often demand whole-number answers — a fractional vertex is not a valid item count.',
    ],
    quiz: [
      {
        q: 'Which ordered pair is a solution of $3x - y \\ge 7$?',
        options: ['$(2, -3)$', '$(3, 4)$', '$(4, 6)$', '$(5, 9)$'],
        answer: 0,
        explanation: 'Step 1: Substitute each pair into $3x - y$. Step 2: $(2, -3)$: $6 + 3 = 9 \\ge 7$ ✓. Step 3: $(3, 4)$: $5$; $(4, 6)$: $6$; $(5, 9)$: $6$ — all fail. Step 4: Only $(2, -3)$ satisfies the inequality.',
      },
      {
        q: 'What is the solution of $-4x + 6 < 18$?',
        options: ['$x < -3$', '$x > -3$', '$x < 3$', '$x > 3$'],
        answer: 1,
        explanation: 'Step 1: Subtract 6: $-4x < 12$. Step 2: Divide by $-4$ and flip the symbol: $x > -3$. Step 3: Test $x = 0$: $6 < 18$ ✓. Step 4: Forgetting the flip gives $x < -3$, but $x = -5$ makes the left side $26$, and $26 < 18$ is false.',
      },
      {
        q: 'The graph of $y < \\frac{1}{2}x - 2$ in the $xy$-plane is best described as which of the following?',
        options: ['A solid boundary line with the region above it shaded', 'A solid boundary line with the region below it shaded', 'A dashed boundary line with the region above it shaded', 'A dashed boundary line with the region below it shaded'],
        answer: 3,
        explanation: 'Step 1: The symbol $<$ is strict, so the boundary $y = \\frac{1}{2}x - 2$ is dashed. Step 2: With $y$ isolated, "less than" shades below the line. Step 3: Test $(0, 0)$: $0 < -2$ is false, so the origin is outside the region — consistent with shading below. Step 4: Solid lines belong to $\\le$ or $\\ge$ only.',
      },
      // SAT-pattern: point-test a budget constraint
      {
        q: 'A club can spend at most $\\$200$ on $t$ tables that cost $\\$25$ each and $c$ chairs that cost $\\$10$ each. Which ordered pair $(t, c)$ satisfies $25t + 10c \\le 200$?',
        options: ['$(4, 10)$', '$(5, 9)$', '$(6, 6)$', '$(8, 4)$'],
        answer: 0,
        explanation: 'Step 1: Evaluate each pair in $25t + 10c$. Step 2: $(4, 10)$: $100 + 100 = 200 \\le 200$ ✓. Step 3: $(5, 9)$: $125 + 90 = 215$ — over budget. Step 4: $(6, 6)$: $210$ and $(8, 4)$: $240$ — both over budget.',
      },
    ],
  },
  // ---------------------------------------------------------------- 2.1
  {
    sectionId: 'sat-math-d2-s1',
    readingTime: 9,
    prerequisites: [
      'Distributive property and combining like terms',
      'Exponent laws: $x^a x^b = x^{a+b}$ and $(x^a)^b = x^{ab}$',
    ],
    intro: 'Advanced Math ties Algebra as the heaviest SAT domain at roughly 35% of the section, and it opens with equivalent expressions. The stem is always some version of "which expression is equivalent to..." and the choices are engineered to punish sign slips and half-finished factoring. Structure-matching plus one smart number to plug in settles almost every item in under thirty seconds.',
    objectives: [
      'Expand and simplify polynomial expressions by distributing and combining like terms',
      'Factor out GCFs, factor quadratics, and apply difference-of-squares and perfect-square patterns',
      'Convert fluently between rational exponents and radical form',
      'Verify equivalence quickly by picking a convenient value for the variable',
    ],
    concepts: [
      {
        term: 'Equivalence means every input',
        kind: 'definition',
        statement: 'Two expressions are **equivalent** when they give equal outputs for **every** value of the variable — matching at one value is evidence, not proof.',
        detail: 'The SAT flip side: if two answer choices disagree when you plug in $x = 2$, at most one of them is right, so plugging in eliminates even though it cannot prove. Keep a second value (like $x = -1$) as a tiebreaker when two choices survive.',
      },
      {
        term: 'Expansion toolkit',
        kind: 'method',
        statement: 'Multiply every term by every term — $(2x + 3)(x - 5) = 2x^2 - 10x + 3x - 15 = 2x^2 - 7x - 15$ — then **combine like terms**.',
        detail: 'The classic expansion trap is the squared binomial: $(a + b)^2 = a^2 + 2ab + b^2$, never $a^2 + b^2$. On $(x + 5)^2 - (x - 2)^2$, the difference-of-squares shortcut $(A - B)(A + B)$ does half the work for you.',
      },
      {
        term: 'Factoring toolkit',
        kind: 'method',
        statement: 'Factor in order: **GCF first**, then patterns — difference of squares $a^2 - b^2 = (a + b)(a - b)$, perfect squares $a^2 \\pm 2ab + b^2$, and trinomials $x^2 + bx + c = (x + p)(x + q)$ with $pq = c$ and $p + q = b$.',
        detail: '"Factor completely" is the SAT phrase that kills $3(x^2 - 9)$ as a final answer — it must continue to $3(x - 3)(x + 3)$. Factored form exposes zeros instantly, which is exactly why later questions prefer it.',
      },
      {
        term: 'Rational exponents',
        kind: 'notation',
        statement: '$x^{a/b} = \\sqrt[b]{x^a}$: the **denominator of the exponent is the root**, the numerator is the power — so $x^{2/3} = \\sqrt[3]{x^2}$ and $\\sqrt{x} \\cdot \\sqrt[3]{x} = x^{1/2 + 1/3} = x^{5/6}$.',
        detail: 'Rewrite radicals as exponents before combining, then let the exponent laws work. Keep bases identical: $x^{1/2}y^{1/3}$ cannot compress into a single power because the bases differ.',
      },
      {
        term: 'Pick-a-number strategy',
        kind: 'insight',
        statement: 'For "equivalent to" multiple choice, **substitute a small value like $x = 2$** into the target and each choice; discard every mismatch.',
        detail: 'Avoid $x = 1$ and $x = 0$ — they make too many expressions agree ($x^2$ and $x$ both equal $1$). This converts algebra into arithmetic, which Desmos can finish with a quick table of values for $f(x)$ and $g(x)$ side by side.',
      },
    ],
    examples: [
      {
        title: 'Expand and subtract',
        problem: 'Which expression is equivalent to $(2x + 3)(x - 5) - x(x + 2)$?',
        steps: [
          { label: 'Step 1', text: '```text\n(2x + 3)(x - 5) = 2x^2 - 7x - 15 ; subtract x^2 + 2x\n```\nExpand the product: $(2x + 3)(x - 5) = 2x^2 - 10x + 3x - 15 = 2x^2 - 7x - 15$.' },
          { label: 'Step 2', text: 'Expand the subtracted piece: $x(x + 2) = x^2 + 2x$, so the full expression is $2x^2 - 7x - 15 - (x^2 + 2x)$.' },
          { label: 'Step 3', text: 'Distribute the minus to both terms, then combine: $(2x^2 - x^2) + (-7x - 2x) - 15 = x^2 - 9x - 15$.' },
          { label: 'Step 4', text: 'Verify with $x = 1$: the original gives $(5)(-4) - (1)(3) = -20 - 3 = -23$, and $1 - 9 - 15 = -23$. ✓' },
        ],
        result: '$x^2 - 9x - 15$',
      },
      {
        title: 'One radical instead of two',
        problem: 'Write $\\sqrt{x} \\cdot \\sqrt[3]{x}$ as a single radical.',
        steps: [
          { label: 'Step 1', text: '```text\nx^(1/2) * x^(1/3) = x^(5/6) = 6th root of x^5\n```\nConvert to rational exponents: $\\sqrt{x} \\cdot \\sqrt[3]{x} = x^{1/2} \\cdot x^{1/3}$.' },
          { label: 'Step 2', text: 'Add the exponents on the common base: $\\frac{1}{2} + \\frac{1}{3} = \\frac{3}{6} + \\frac{2}{6} = \\frac{5}{6}$, giving $x^{5/6}$.' },
          { label: 'Step 3', text: 'Convert back: the denominator $6$ is the root and the numerator $5$ is the power, so $x^{5/6} = \\sqrt[6]{x^5}$.' },
          { label: 'Step 4', text: 'Check with $x = 64$: $\\sqrt{64} \\cdot \\sqrt[3]{64} = 8 \\cdot 4 = 32$, and $64^{5/6} = (2^6)^{5/6} = 2^5 = 32$. ✓' },
        ],
        result: '$\\sqrt[6]{x^5}$',
      },
    ],
    keyTakeaways: [
      'Equivalent means equal for every input — test with a picked number to eliminate choices, never to prove.',
      'Expand term by term; guard the squared-binomial trap $(a + b)^2 = a^2 + 2ab + b^2$ and the distributed minus sign.',
      'Factor the GCF first; "factor completely" demands patterns like $3(x - 3)(x + 3)$, not $3(x^2 - 9)$.',
      'Rational exponents: denominator is the root, numerator is the power — convert radicals to exponents to combine them.',
    ],
    quiz: [
      {
        q: 'Which expression is equivalent to $(x + 5)^2 - (x - 2)^2$?',
        options: ['$14x + 21$', '$14x + 29$', '$x^2 + 14x + 21$', '$6x + 27$'],
        answer: 0,
        explanation: 'Step 1: Use difference of squares: $(x + 5)^2 - (x - 2)^2 = [(x + 5) - (x - 2)][(x + 5) + (x - 2)]$. Step 2: The first bracket is $7$ and the second is $2x + 3$. Step 3: Product: $7(2x + 3) = 14x + 21$. Step 4: Expanding both squares gives $x^2 + 10x + 25 - (x^2 - 4x + 4) = 14x + 21$ — choice B is the sign slip on $-4x$.',
      },
      {
        q: 'Which is the complete factorization of $3x^2 - 27$?',
        options: ['$3(x - 3)^2$', '$3(x^2 - 9)$', '$(3x - 9)(x + 3)$', '$3(x - 3)(x + 3)$'],
        answer: 3,
        explanation: 'Step 1: Pull the GCF: $3(x^2 - 9)$. Step 2: $x^2 - 9$ is a difference of squares: $(x - 3)(x + 3)$. Step 3: Together: $3(x - 3)(x + 3)$. Step 4: Choice B stops halfway — "completely" rules it out — and choice C leaves a common factor inside the binomials.',
      },
      {
        q: 'Which expression is equivalent to $\\sqrt[3]{x^4}$?',
        options: ['$x^{3/4}$', '$x^{4/3}$', '$4x^{1/3}$', '$\\frac{1}{3}x^4$'],
        answer: 1,
        explanation: 'Step 1: A cube root is the exponent $\\frac{1}{3}$, so $\\sqrt[3]{x^4} = (x^4)^{1/3}$. Step 2: Multiply the exponents: $4 \\cdot \\frac{1}{3} = \\frac{4}{3}$. Step 3: The equivalent form is $x^{4/3}$. Step 4: $x^{3/4}$ swaps power and root — the most common reversal.',
      },
      {
        q: 'Which expression is equivalent to $x(x + 3) + 2(x + 3)$?',
        options: ['$x^2 + 3x + 6$', '$(x + 2)(x + 3)$', '$(x + 3)(x - 2)$', '$x^2 + 5x + 3$'],
        answer: 1,
        explanation: 'Step 1: Spot the shared binomial factor $(x + 3)$ in both terms. Step 2: Factor it out: $(x + 3)(x + 2)$. Step 3: Expanding the factored form gives $x^2 + 5x + 6$, which matches the original expansion. Step 4: Choice A misses the $+2x$ term — it expands $x(x + 3) + 6$ instead.',
      },
    ],
  },
  // ---------------------------------------------------------------- 2.2
  {
    sectionId: 'sat-math-d2-s2',
    readingTime: 10,
    prerequisites: [
      'Factoring quadratics (Section 2.1)',
      'Solving linear equations (Section 1.1)',
      'Graphing lines in Desmos',
    ],
    intro: 'This is the SAT\'s nonlinear workhorse: quadratics solved three ways, absolute value and radical equations with extraneous solutions lurking, and systems where a line meets a parabola. Every technique here doubles as a Desmos technique — graph both sides and read intersections — but the test deliberately includes items where algebra is faster, so you need both gears. Watch especially for discriminant and parameter items that ask only how many solutions exist.',
    objectives: [
      'Solve quadratic equations by factoring, the quadratic formula, and completing the square',
      'Use the discriminant to count real solutions and find parameter values giving exactly one solution',
      'Solve absolute value, rational, and radical equations while checking for extraneous solutions',
      'Solve linear–quadratic systems by substitution and match solutions to intersection points',
    ],
    concepts: [
      {
        term: 'Three routes to the roots',
        kind: 'method',
        statement: 'Set the quadratic equal to zero, then: **factor and use zero product** ($x^2 - 7x + 10 = 0 \\Rightarrow x = 2, 5$), apply the **quadratic formula** $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$, or **complete the square** to reveal vertex form.',
        detail: 'Factoring is fastest when it works; the formula never fails. Completing the square is how the SAT tests vertex form: $x^2 + 6x = 7$ becomes $(x + 3)^2 = 16$, so $x = 1$ or $x = -7$.',
      },
      {
        term: 'The discriminant',
        kind: 'theorem',
        statement: 'For $ax^2 + bx + c = 0$, the discriminant $\\Delta = b^2 - 4ac$ **counts real solutions**: $\\Delta > 0$ gives two, $\\Delta = 0$ gives exactly one, $\\Delta < 0$ gives none.',
        detail: 'Typical stem: "For what value of $k$ does $x^2 + kx + 9 = 0$ have exactly one real solution?" Set $k^2 - 36 = 0$, giving $k = 6$ or $k = -6$ — forgetting the negative root is the built-in trap. Graphically, $\\Delta = 0$ means the parabola is tangent to the $x$-axis.',
      },
      {
        term: 'Extraneous solutions',
        kind: 'insight',
        statement: 'Squaring both sides or clearing denominators can create values that **fail the original equation** — radical equations can gain roots, rational equations reject zeros of denominators.',
        detail: 'For $\\sqrt{2x + 3} = x$: squaring gives $x^2 - 2x - 3 = 0$, so $x = 3$ or $x = -1$ — but $x = -1$ makes the right side negative while the radical is nonnegative, so only $x = 3$ survives. Checking is not optional; graphing both sides in Desmos catches extraneous roots automatically because graphs never lie.',
      },
      {
        term: 'Nonlinear systems',
        kind: 'method',
        statement: 'In a linear–quadratic system, **substitute** the linear expression for $y$ into the quadratic; the resulting one-variable quadratic counts the intersections — two, one, or none.',
        detail: 'Solutions are ordered pairs: after finding the $x$-values, substitute back for $y$. Reporting only $x$-coordinates is a classic lost-point error. In Desmos, graph both equations and click each intersection to read full pairs.',
      },
      {
        term: 'Absolute value equations',
        kind: 'method',
        statement: 'Split into two cases — $|X| = c$ means $X = c$ **or** $X = -c$ when $c \\ge 0$; if $c < 0$ there is **no solution** because absolute value is never negative.',
        detail: 'A stem like $|2x - 5| = 11$ splits into $2x - 5 = 11$ and $2x - 5 = -11$, giving $x = 8$ and $x = -3$. Items of the form $|X| = (\\text{negative})$ are instant no-solutions — a free point if you read before you solve.',
      },
    ],
    examples: [
      {
        title: 'A projectile at a height (two answers)',
        problem: 'The height $h$, in feet, of a ball $t$ seconds after it is thrown is modeled by $h(t) = -16t^2 + 40t + 5$. At what times is the ball 21 feet above the ground?',
        steps: [
          { label: 'Step 1', text: '```text\n-16t^2 + 40t - 16 = 0 ; divide by -8 first\n```\nSet the model equal to 21: $-16t^2 + 40t + 5 = 21$, so $-16t^2 + 40t - 16 = 0$.' },
          { label: 'Step 2', text: 'Divide both sides by $-8$ to simplify: $2t^2 - 5t + 2 = 0$.' },
          { label: 'Step 3', text: 'Factor: $(2t - 1)(t - 2) = 0$, so $t = \\frac{1}{2}$ or $t = 2$.' },
          { label: 'Step 4', text: 'Both are valid: the ball passes 21 feet rising at $t = 0.5$ seconds and again falling at $t = 2$ seconds — quadratic motion questions often expect both times.' },
        ],
        result: '$t = 0.5$ seconds or $t = 2$ seconds.',
      },
      {
        title: 'One real solution only',
        problem: 'For what value of $k$ does the equation $x^2 + kx + 9 = 0$ have exactly one real solution?',
        steps: [
          { label: 'Step 1', text: '```text\none real solution => discriminant = 0 : k^2 - 36 = 0\n```\nExactly one real solution means the discriminant is zero: $b^2 - 4ac = 0$ with $a = 1$, $b = k$, $c = 9$.' },
          { label: 'Step 2', text: 'Substitute: $k^2 - 4(1)(9) = k^2 - 36 = 0$.' },
          { label: 'Step 3', text: 'Solve: $k^2 = 36$, so $k = 6$ or $k = -6$ — both values work.' },
          { label: 'Step 4', text: 'Check $k = -6$: $x^2 - 6x + 9 = (x - 3)^2 = 0$ has the single solution $x = 3$. Each sign of $k$ makes the parabola tangent to the $x$-axis.' },
        ],
        result: '$k = 6$ or $k = -6$',
      },
    ],
    keyTakeaways: [
      'A quadratic must equal zero before factoring; the quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$ never fails.',
      'Discriminant $b^2 - 4ac$: positive gives two real roots, zero gives one, negative gives none — parameter items often have two valid $k$ values.',
      'Radical and rational equations demand a check in the original equation — extraneous roots are planted on purpose.',
      'Nonlinear system solutions are ordered pairs; the number of real roots of the substituted quadratic equals the number of intersections.',
    ],
    quiz: [
      {
        q: 'What are the solutions of $x^2 - 7x + 10 = 0$?',
        options: ['$-2$ and $-5$', '$2$ and $-5$', '$-2$ and $5$', '$2$ and $5$'],
        answer: 3,
        explanation: 'Step 1: Factor: $(x - 2)(x - 5) = 0$. Step 2: Zero product property: $x = 2$ or $x = 5$. Step 3: Both check: $4 - 14 + 10 = 0$ and $25 - 35 + 10 = 0$. Step 4: The negative pairs come from mis-factoring $x^2 + 7x + 10$.',
      },
      // SAT-pattern: discriminant parameter
      {
        q: 'The equation $x^2 + 6x + c = 0$ has exactly one real solution. What is $c$?',
        options: ['$3$', '$9$', '$36$', '$6$'],
        answer: 1,
        explanation: 'Step 1: One real solution forces the discriminant to zero: $36 - 4c = 0$. Step 2: Solve: $4c = 36$. Step 3: $c = 9$. Step 4: Check: $x^2 + 6x + 9 = (x + 3)^2 = 0$ has the single root $x = -3$. ✓',
      },
      {
        q: 'What is the solution set of $\\sqrt{2x + 3} = x$?',
        options: ['$-1$ and $3$', '$-1$ only', '$3$ only', 'No solution'],
        answer: 2,
        explanation: 'Step 1: Square both sides: $2x + 3 = x^2$. Step 2: Rearrange and factor: $x^2 - 2x - 3 = (x - 3)(x + 1) = 0$, so $x = 3$ or $x = -1$. Step 3: Check $x = 3$: $\\sqrt{9} = 3$ ✓. Check $x = -1$: $\\sqrt{1} = 1 \\ne -1$ — extraneous. Step 4: Only $x = 3$ solves the original equation.',
      },
      {
        q: 'Which ordered pair is a solution of the system $y = x^2 - 2$ and $y = x + 4$?',
        options: ['$(3, 7)$', '$(3, 11)$', '$(-2, -6)$', '$(0, 4)$'],
        answer: 0,
        explanation: 'Step 1: Substitute $y = x + 4$ into the first equation: $x + 4 = x^2 - 2$. Step 2: Rearrange: $x^2 - x - 6 = (x - 3)(x + 2) = 0$, so $x = 3$ or $x = -2$. Step 3: Pair each $x$ with $y = x + 4$: $(3, 7)$ and $(-2, 2)$. Step 4: Check $(3, 7)$: $9 - 2 = 7$ ✓ and $3 + 4 = 7$ ✓ — the other options fail at least one equation.',
      },
    ],
  },
  // ---------------------------------------------------------------- 2.3
  {
    sectionId: 'sat-math-d2-s3',
    readingTime: 11,
    prerequisites: [
      'Linear functions and function notation (Section 1.3)',
      'Factoring quadratics (Section 2.1)',
    ],
    intro: 'Nonlinear functions are the SAT\'s second 35% domain in miniature: quadratics with vertices to optimize, exponentials with growth factors to interpret, polynomials with end behavior to read. The questions are less about cranking algebra and more about what each parameter means — and Desmos sliders make every parameter visible. Learn to read $a$, $b$, $h$, and $k$ like words.',
    objectives: [
      'Connect vertex form $f(x) = a(x - h)^2 + k$ to maxima, minima, and zeros of a quadratic',
      'Interpret exponential functions: initial value, growth factor, percent change, and asymptote',
      'Read polynomial graphs: zeros with multiplicity and end behavior',
      'Work with core function concepts: domain and range, notation, and composition with linear expressions',
    ],
    concepts: [
      {
        term: 'Vertex form of a quadratic',
        kind: 'definition',
        statement: '$f(x) = a(x - h)^2 + k$ has **vertex $(h, k)$**: $a > 0$ opens upward with minimum $k$, $a < 0$ opens downward with maximum $k$, and the axis of symmetry is $x = h$.',
        detail: 'From standard form, get $h = -\\frac{b}{2a}$, then evaluate to get $k$. The SAT asks "for what $x$ is the value greatest?" — that is just $x = h$. Mind the $(x - h)$ sign trap: the vertex of $(x + 3)^2 + 7$ is $(-3, 7)$, not $(3, 7)$.',
      },
      {
        term: 'Exponential functions',
        kind: 'definition',
        statement: 'In $f(x) = a \\cdot b^x$, **$a$ is the initial value** (at $x = 0$) and **$b$ is the growth factor per unit**: $b = 1 + r$ for growth at rate $r$, $b = 1 - r$ for decay.',
        detail: '$V(t) = 3{,}200(0.85)^t$ loses $15\\%$ per year because $0.85 = 1 - 0.15$. The graph has horizontal asymptote $y = 0$ and never touches it. SAT trap: a linear option like $1{,}200 + 1.07t$ next to the exponential $1{,}200(1.07)^t$ — check whether the change is by equal amounts or equal factors.',
      },
      {
        term: 'Zeros and multiplicity',
        kind: 'theorem',
        statement: 'In a factored polynomial each factor $(x - c)$ contributes a **zero at $c$**; **odd multiplicity crosses** the $x$-axis while **even multiplicity touches and turns**.',
        detail: '$f(x) = (x - 1)^2(x + 3)$ has a bounce at $x = 1$ (multiplicity 2) and a crossing at $x = -3$ (multiplicity 1). End behavior follows the leading term: with negative leading coefficient and odd degree, the graph falls to the right.',
      },
      {
        term: 'Domain and range',
        kind: 'definition',
        statement: '**Domain** is the set of allowed inputs — blocked by division by zero and even roots of negatives; **range** is the set of outputs actually produced.',
        detail: 'For $g(x) = \\frac{5}{x - 4}$, $x = 4$ is excluded from the domain; for $h(x) = \\sqrt{x - 3}$, the domain is $x \\ge 3$. SAT stems phrase this as "for which input is the function undefined" — scan denominators and radicals first.',
      },
      {
        term: 'Composition',
        kind: 'method',
        statement: '$f(g(x))$ means **apply $g$ first**, then feed that output to $f$: for $f(x) = x^2$ and $g(x) = x + 1$, $f(g(2)) = f(3) = 9$.',
        detail: 'The SAT keeps the inner function constant or linear — expressions like $f(x + 3)$ or $f(2x)$. Work from the inside out and write the intermediate value. In Desmos, define $f(x)$ and $g(x)$ on separate lines, then type $f(g(2))$ to verify.',
      },
    ],
    examples: [
      {
        title: 'Maximum height of a projectile',
        problem: 'A kicked ball\'s height is $h(t) = -16t^2 + 64t + 10$ feet, $t$ seconds after the kick. What is the maximum height, and when does it occur?',
        steps: [
          { label: 'Step 1', text: '```text\nvertex t = -b/(2a) = -64/(-32) = 2 ; then h(2)\n```\nIdentify $a = -16 < 0$: the parabola opens downward, so the vertex is a maximum.' },
          { label: 'Step 2', text: 'The maximizing time is $t = -\\frac{b}{2a} = -\\frac{64}{2(-16)} = 2$ seconds.' },
          { label: 'Step 3', text: 'Evaluate: $h(2) = -16(4) + 64(2) + 10 = -64 + 128 + 10 = 74$ feet.' },
          { label: 'Step 4', text: 'In Desmos, graph $y = -16x^2 + 64x + 10$ and click the vertex to read $(2, 74)$ as a check.' },
        ],
        result: 'Maximum height $74$ feet, reached at $t = 2$ seconds.',
      },
      {
        title: 'Reading a depreciation model',
        problem: 'The value $V$, in dollars, of a car $t$ years after purchase is modeled by $V(t) = 3{,}200(0.85)^t$. What is the car\'s value after 2 years, and what percent of its value does it lose each year?',
        steps: [
          { label: 'Step 1', text: '```text\n0.85 = 1 - 0.15 => 15% yearly loss ; V(2) = 3200(0.85)^2\n```\nInterpret the factor: $0.85 = 1 - 0.15$, so the car keeps $85\\%$ of its value each year — a $15\\%$ yearly loss.' },
          { label: 'Step 2', text: 'Evaluate: $V(2) = 3{,}200(0.85)^2 = 3{,}200(0.7225)$.' },
          { label: 'Step 3', text: 'Compute: $V(2) = 2{,}312$ dollars.' },
          { label: 'Step 4', text: 'Note the structure: the base stays constant while the exponent counts years — equal multiplicative change is the signature of exponential decay.' },
        ],
        result: 'After 2 years the car is worth $\\$2{,}312$; it loses $15\\%$ of its value each year.',
      },
    ],
    keyTakeaways: [
      'Vertex form $a(x - h)^2 + k$: vertex $(h, k)$, minimum if $a > 0$, maximum if $a < 0$; from standard form use $h = -\\frac{b}{2a}$.',
      'Exponential $f(x) = a \\cdot b^x$: $a$ is the initial value, $b$ the factor per unit — $1.05$ means $+5\\%$ and $0.85$ means $-15\\%$.',
      'Factored form exposes zeros; even multiplicity bounces off the axis, odd multiplicity crosses it.',
      'Domain blocks division by zero and even roots of negatives; composition works inside-out.',
    ],
    quiz: [
      {
        q: 'What is the vertex of the graph of $f(x) = (x - 3)^2 + 7$?',
        options: ['$(-3, 7)$', '$(7, 3)$', '$(3, 7)$', '$(3, -7)$'],
        answer: 2,
        explanation: 'Step 1: Match to $a(x - h)^2 + k$ with $h = 3$ and $k = 7$. Step 2: The vertex is $(h, k) = (3, 7)$. Step 3: The $x - 3$ inside means a shift of $+3$, not $-3$. Step 4: Since $a = 1 > 0$, that vertex is a minimum.',
      },
      {
        q: 'If $f(x) = 5(2)^x$, what is $f(3)$?',
        options: ['$30$', '$40$', '$125$', '$8$'],
        answer: 1,
        explanation: 'Step 1: Substitute $x = 3$ into the exponent: $f(3) = 5 \\cdot 2^3$. Step 2: Compute the power: $2^3 = 8$. Step 3: Multiply: $5 \\cdot 8 = 40$. Step 4: The distractor $125$ is $5^3$ — using the wrong base.',
      },
      // SAT-pattern: percent change to growth factor
      {
        q: 'A population of $1{,}200$ grows $7\\%$ each year. Which expression models the population $t$ years later?',
        options: ['$1{,}200(0.07)^t$', '$1{,}200 + 1.07t$', '$1{,}200(0.93)^t$', '$1{,}200(1.07)^t$'],
        answer: 3,
        explanation: 'Step 1: Growth of $7\\%$ per year means multiplying by $1 + 0.07 = 1.07$ each year. Step 2: Compounding repeats the factor: $1{,}200(1.07)^t$. Step 3: $(0.07)^t$ shrinks toward zero and $(0.93)^t$ models $7\\%$ decay. Step 4: $1{,}200 + 1.07t$ adds a fixed $1.07$ per year — linear, not percent, growth.',
      },
      {
        q: 'The graph of $f(x) = (x - 1)^2(x + 3)$ crosses the $x$-axis at which of the following?',
        options: ['$x = 1$ only', '$x = -3$ only', 'Both $x = 1$ and $x = -3$', 'Neither $x = 1$ nor $x = -3$'],
        answer: 1,
        explanation: 'Step 1: The zeros come from each factor: $x = 1$ and $x = -3$. Step 2: At $x = 1$ the factor is squared — even multiplicity — so the graph touches the axis and turns around. Step 3: At $x = -3$ the factor appears once — odd multiplicity — so the graph crosses. Step 4: Only $x = -3$ is a crossing zero.',
      },
    ],
  },
  // ---------------------------------------------------------------- 3.1
  {
    sectionId: 'sat-math-d3-s1',
    readingTime: 8,
    prerequisites: [
      'Fraction arithmetic and simplifying',
      'Solving linear equations (Section 1.1)',
    ],
    intro: 'Problem Solving and Data Analysis is worth about 15% of the SAT, and it opens with the most practical math on the test: ratios, unit rates, conversions, and proportional reasoning set in science and daily-life contexts. This strand rewards one habit above all others — write the units. A wrong answer here almost always has wrong units underneath it.',
    objectives: [
      'Set up and solve proportions, including part-to-part and part-to-whole ratios',
      'Compute unit rates and use them to compare quantities',
      'Convert units with chained conversion factors, including derived units like speed and density',
      'Distinguish proportional relationships ($y = kx$) from linear ones with a nonzero intercept',
    ],
    concepts: [
      {
        term: 'Ratio language',
        kind: 'definition',
        statement: 'A ratio $a : b$ compares two quantities; the fraction it represents depends on the question — **part-to-part** $\\frac{a}{b}$ versus **part-to-whole** $\\frac{a}{a + b}$.',
        detail: 'If adults to children is $3 : 5$, then children are $\\frac{5}{8}$ of the total people, not $\\frac{5}{3}$ of adults. SAT answer choices always include the wrong fraction — decide whether the stem asks for a part, the other part, or the whole before computing.',
      },
      {
        term: 'Proportions',
        kind: 'method',
        statement: 'Equal ratios form a **proportion**: $\\frac{a}{b} = \\frac{c}{d}$ implies $ad = bc$ — cross-multiply, then solve the resulting linear equation.',
        detail: 'Keep matched quantities in matched positions (miles over hours on both sides). A quick sanity check: if the answer is larger than it should sensibly be, the proportion was set up inverted.',
      },
      {
        term: 'Unit rates',
        kind: 'definition',
        statement: 'A **unit rate** is the value of one quantity per **one** unit of the other: miles per gallon is $\\frac{\\text{miles}}{\\text{gallons}}$ — "per" means divide.',
        detail: 'Comparing unit rates settles best-buy and fastest-runner questions: convert each option to a rate per single unit before choosing. The SAT inverts rates among the choices — miles per hour disguised as hours per mile — so label the units as you compute.',
      },
      {
        term: 'Unit conversion chains',
        kind: 'method',
        statement: 'Multiply by **conversion factors equal to 1** so unwanted units cancel: $72\\ \\text{km/h} = 72 \\cdot \\frac{1000\\ \\text{m}}{1\\ \\text{km}} \\cdot \\frac{1\\ \\text{h}}{3600\\ \\text{s}} = 20\\ \\text{m/s}$.',
        detail: 'Place each factor so the unit you are leaving cancels. Derived units convert the same way — $2.7\\ \\text{g/cm}^3$ becomes $2{,}700\\ \\text{kg/m}^3$ after converting grams to kilograms and cubic centimeters to cubic meters. Type the whole chain as one fraction in Desmos and let it do the arithmetic while you track the units.',
      },
      {
        term: 'Proportional versus merely linear',
        kind: 'insight',
        statement: 'A **proportional relationship** is $y = kx$: constant ratio and a graph through the origin. A linear model with nonzero intercept, $y = mx + b$ with $b \\ne 0$, is **not** proportional.',
        detail: 'Test: does doubling the input double the output? For $y = 2.5x$, yes; for $y = 2.5x + 10$, no. Scale drawings are proportional — a scale of $\\frac{1}{2}$ inch to 25 miles makes every measured length multiply by the same $50$-miles-per-inch factor.',
      },
    ],
    examples: [
      {
        title: 'Reading a scale drawing',
        problem: 'On a map, the scale is $\\frac{1}{2}$ inch to 25 miles. Two cities are $3\\frac{1}{2}$ inches apart on the map. What is the actual distance?',
        steps: [
          { label: 'Step 1', text: '```text\n(0.5 in)/(25 mi) = (3.5 in)/(d mi) ; cross-multiply\n```\nMatch units across the proportion: $\\frac{0.5 \\text{ in}}{25 \\text{ mi}} = \\frac{3.5 \\text{ in}}{d \\text{ mi}}$.' },
          { label: 'Step 2', text: 'Cross-multiply: $0.5d = 25 \\cdot 3.5 = 87.5$.' },
          { label: 'Step 3', text: 'Solve: $d = 175$ miles. Equivalently, the unit rate is $50$ miles per inch and $3.5 \\times 50 = 175$.' },
          { label: 'Step 4', text: 'Sanity check: $3.5$ inches is seven half-inches, each worth $25$ miles, and $7 \\times 25 = 175$. ✓' },
        ],
        result: '175 miles.',
      },
      {
        title: 'Density, a derived unit',
        problem: 'A metal block has mass 540 grams and volume 200 cubic centimeters. What is the block\'s density in $\\text{kg/m}^3$?',
        steps: [
          { label: 'Step 1', text: '```text\ndensity = mass/volume = 540/200 = 2.7 g per cm^3\n```\nDensity is mass per unit volume: $\\rho = \\frac{540\\ \\text{g}}{200\\ \\text{cm}^3} = 2.7\\ \\text{g/cm}^3$.' },
          { label: 'Step 2', text: 'Convert grams to kilograms: $2.7\\ \\text{g} = 0.0027\\ \\text{kg}$, giving $0.0027\\ \\text{kg/cm}^3$.' },
          { label: 'Step 3', text: 'Convert cubic centimeters to cubic meters: $1\\ \\text{m}^3 = 1{,}000{,}000\\ \\text{cm}^3$, so $\\rho = \\frac{0.0027}{10^{-6}} = 2{,}700\\ \\text{kg/m}^3$.' },
          { label: 'Step 4', text: 'Check the shortcut: converting $\\text{g/cm}^3$ to $\\text{kg/m}^3$ always multiplies by $1{,}000$, and $2.7 \\times 1{,}000 = 2{,}700$. ✓' },
        ],
        result: '$2{,}700\\ \\text{kg/m}^3$ (that is, $2.7\\ \\text{g/cm}^3$).',
      },
    ],
    keyTakeaways: [
      'Name the ratio before computing — part-to-part, part-to-whole, or whole-to-part; the wrong fraction is always among the choices.',
      'Cross-multiply proportions with matched units; unit rates come from division, and "per" always means divide.',
      'Convert units by chained factors equal to 1, canceling as you go; $\\text{g/cm}^3 \\to \\text{kg/m}^3$ multiplies by $1{,}000$.',
      'Proportional means $y = kx$ through the origin — doubling the input doubles the output; otherwise the model is merely linear.',
    ],
    quiz: [
      {
        q: 'The ratio of adults to children at a fair is $3 : 5$. If 240 people attend, how many are children?',
        options: ['$96$', '$150$', '$90$', '$144$'],
        answer: 1,
        explanation: 'Step 1: The parts are $3 + 5 = 8$ equal parts. Step 2: Each part is $\\frac{240}{8} = 30$ people. Step 3: Children are $5$ parts: $5 \\times 30 = 150$. Step 4: $90$ is the adult count ($3$ parts) and $96$ is $\\frac{2}{5}$ of the total — a part-to-part slip.',
      },
      {
        q: 'A car travels 210 miles on 7 gallons of fuel. What is the car\'s fuel efficiency?',
        options: ['$30$ miles per gallon', '$\\frac{1}{30}$ mile per gallon', '$30$ gallons per mile', '$1{,}470$ miles per gallon'],
        answer: 0,
        explanation: 'Step 1: Efficiency is distance per unit of fuel: miles divided by gallons. Step 2: $\\frac{210}{7} = 30$. Step 3: The rate is $30$ miles per gallon. Step 4: Multiplying instead of dividing gives $1{,}470$, and flipping the units gives gallons per mile.',
      },
      {
        q: 'A runner covers 1 kilometer every 6 minutes. What is the runner\'s speed in kilometers per hour?',
        options: ['$6$', '$60$', '$10$', '$0.6$'],
        answer: 2,
        explanation: 'Step 1: Sixty minutes holds $\\frac{60}{6} = 10$ six-minute blocks. Step 2: Each block covers $1$ kilometer. Step 3: So the runner covers $10$ kilometers per hour. Step 4: The trap $0.6$ comes from dividing in the wrong direction.',
      },
      // SAT-pattern: proportion in a recipe context
      {
        q: 'A recipe serving 4 requires 3 cups of rice. How many cups are needed for 10 servings?',
        options: ['$7$', '$8$', '$13.3$', '$7.5$'],
        answer: 3,
        explanation: 'Step 1: Set the proportion with servings matched: $\\frac{4}{3} = \\frac{10}{x}$. Step 2: Cross-multiply: $4x = 30$. Step 3: $x = 7.5$ cups. Step 4: Scaling the per-serving rate also works: $\\frac{3}{4} \\times 10 = 7.5$; the distractor $13.3$ comes from inverting the initial ratio.',
      },
    ],
  },
  // ---------------------------------------------------------------- 4.1
  {
    sectionId: 'sat-math-d4-s1',
    readingTime: 9,
    prerequisites: [
      'Evaluating expressions with $\\pi$ and exponents',
      'Powers of powers: $(x^a)^b = x^{ab}$',
    ],
    intro: 'Geometry and Trigonometry is the final domain of SAT Math at roughly 15%, and it starts kindly: the reference sheet hands you most area and volume formulas, so the test spends its energy on traps — diameters where you need radii, scale factors that square and cube, and composite shapes that must be decomposed. Desmos evaluates anything with $\\pi$ instantly, which turns these items into careful reading exercises.',
    objectives: [
      'Use the reference sheet formulas for triangles, rectangles, and circles — and know what the sheet leaves out',
      'Decompose composite figures into standard shapes, including subtracting holes',
      'Compute surface area and volume of prisms, cylinders, pyramids, cones, and spheres',
      'Apply scale factors: lengths scale by $k$, areas by $k^2$, volumes by $k^3$',
    ],
    concepts: [
      {
        term: 'The reference sheet',
        kind: 'notation',
        statement: 'Provided: $A = \\pi r^2$, $A = bh$, $A = \\frac{1}{2}bh$, $C = 2\\pi r$, and volumes $V = lwh$, $V = \\pi r^2 h$, $V = \\frac{1}{3}Bh$, $V = \\frac{4}{3}\\pi r^3$ — **not provided**: the trapezoid formula $A = \\frac{1}{2}(b_1 + b_2)h$.',
        detail: 'Memorize the trapezoid area and the strategy of building surface area by adding faces. Note that $B$ in the pyramid and cone formulas is the **area of the base**, not a length — a deliberate notation trap.',
      },
      {
        term: 'Composite figures',
        kind: 'method',
        statement: 'Break the shape into rectangles, triangles, and circles — **add the pieces, subtract the holes** — and keep $\\pi$ exact unless the stem asks for a decimal.',
        detail: 'A 12-by-8 meter garden with a circular fountain of radius 2 meters has grass area $96 - 4\\pi$ square meters. SAT choices include the rounded decimal to catch students who approximate early; leave $\\pi$ symbolic until the final step.',
      },
      {
        term: 'Volume families',
        kind: 'theorem',
        statement: 'A cone is **one-third** of the cylinder with the same base and height; a pyramid is one-third of its prism: $V = \\frac{1}{3}\\pi r^2 h$ and $V = \\frac{1}{3}Bh$.',
        detail: 'Comparison items are common: doubling the height doubles every volume formula, but doubling the **radius** multiplies a cylinder\'s volume by $4$ and a sphere\'s by $8$, because $r$ enters as $r^2$ or $r^3$. Height is always linear; radius never is.',
      },
      {
        term: 'Scale factors',
        kind: 'theorem',
        statement: 'Similar figures scale lengths by $k$, so **areas scale by $k^2$** and **volumes scale by $k^3$** — a 3-by-5 rectangle enlarged by factor 4 has area $15 \\times 16 = 240$, not $15 \\times 4$.',
        detail: 'The SAT\'s favorite version: "all dimensions are doubled" — new area is $4$ times, new volume is $8$ times. Watch the reverse direction too: halving the radius divides a sphere\'s volume by $8$.',
      },
      {
        term: 'Unit discipline',
        kind: 'insight',
        statement: 'Area units are **squared** and volume units are **cubed**, so converting between them applies the conversion factor that many times: $1\\ \\text{m}^3 = 1{,}000$ liters.',
        detail: 'A tank 2 m by 3 m by 0.5 m holds $3\\ \\text{m}^3 = 3{,}000$ liters. Diameter-versus-radius is the single most productive trap in this domain — when a stem gives the diameter, your first move is to halve it.',
      },
    ],
    examples: [
      {
        title: 'Grass around a fountain',
        problem: 'A rectangular garden measures 12 meters by 8 meters and contains a circular fountain of radius 2 meters. What is the area of the garden that is grass?',
        steps: [
          { label: 'Step 1', text: '```text\ngrass = 12*8 - pi*2^2\n```\nGarden area: $A = 12 \\times 8 = 96$ square meters.' },
          { label: 'Step 2', text: 'Fountain area: $A = \\pi r^2 = \\pi(2)^2 = 4\\pi$ square meters.' },
          { label: 'Step 3', text: 'Subtract the hole: grass area $= 96 - 4\\pi$ square meters.' },
          { label: 'Step 4', text: 'Keep $\\pi$ exact; evaluate in Desmos ($\\approx 83.43$) only if the answer choices are decimal.' },
        ],
        result: '$96 - 4\\pi$ square meters.',
      },
      {
        title: 'Doubling a candle\'s radius',
        problem: 'A company makes spherical candles with radius 3 centimeters. A new design has radius 6 centimeters. How many times as much wax does the new design require?',
        steps: [
          { label: 'Step 1', text: '```text\nratio = (6/3)^3 = 8 ; the (4/3)pi cancels\n```\nWrite both volumes with the sphere formula: $V_{\\text{old}} = \\frac{4}{3}\\pi(3)^3$ and $V_{\\text{new}} = \\frac{4}{3}\\pi(6)^3$.' },
          { label: 'Step 2', text: 'Form the ratio: $\\frac{V_{\\text{new}}}{V_{\\text{old}}} = \\frac{6^3}{3^3}$ — the constants $\\frac{4}{3}\\pi$ cancel.' },
          { label: 'Step 3', text: 'Compute the ratio of cubes: $\\frac{216}{27} = 8$.' },
          { label: 'Step 4', text: 'Interpret via scaling: volume grows with the cube of the scale factor, and doubling every length multiplies volume by $2^3 = 8$ — no formulas needed once you see the scaling.' },
        ],
        result: 'The new candle needs $8$ times as much wax.',
      },
    ],
    keyTakeaways: [
      'The reference sheet covers circle, rectangle, and triangle areas plus prism, cylinder, cone, sphere, and pyramid volumes — memorize the trapezoid formula yourself.',
      'Composite area = add pieces, subtract holes; keep $\\pi$ exact until the answer demands a decimal.',
      'Radius enters squared (circle, cylinder) or cubed (sphere); height is always linear — know which dimension the stem doubled.',
      'Scale factor $k$: lengths scale by $k$, areas by $k^2$, volumes by $k^3$ — "all dimensions doubled" means $4\\times$ area and $8\\times$ volume.',
    ],
    quiz: [
      {
        q: 'A circle has diameter 10 units. What is its area?',
        options: ['$100\\pi$', '$25\\pi$', '$10\\pi$', '$50\\pi$'],
        answer: 1,
        explanation: 'Step 1: The area formula needs the radius: $r = \\frac{10}{2} = 5$. Step 2: $A = \\pi r^2 = \\pi(25)$. Step 3: The area is $25\\pi$ square units. Step 4: $100\\pi$ comes from squaring the diameter — the most common error on this item type.',
      },
      {
        q: 'A cylinder and a cone have the same radius $r$ and the same height $h$. The cone\'s volume is what fraction of the cylinder\'s?',
        options: ['$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$', '$3$ times as much'],
        answer: 0,
        explanation: 'Step 1: Cylinder volume: $\\pi r^2 h$. Step 2: Cone volume: $\\frac{1}{3}\\pi r^2 h$. Step 3: The ratio is $\\frac{1}{3}$ — the shared $\\pi r^2 h$ cancels. Step 4: The factor $\\frac{1}{3}$ is exactly the reference sheet coefficient for cones and pyramids.',
      },
      {
        q: 'A 3-by-5 rectangle is enlarged so that each side is 4 times as long. What is the area of the enlarged rectangle?',
        options: ['$60$', '$16$', '$480$', '$240$'],
        answer: 3,
        explanation: 'Step 1: New dimensions: $12$ by $20$. Step 2: New area: $12 \\times 20 = 240$. Step 3: Check with scaling: original area $15$ multiplied by $k^2 = 16$ gives $240$. Step 4: $60$ scales the area by $k = 4$ instead of $k^2 = 16$ — the built-in trap.',
      },
      // SAT-pattern: volume with a unit conversion
      {
        q: 'A rectangular tank measures 2 m by 3 m by 0.5 m. How many liters of water does it hold when full? ($1\\ \\text{m}^3 = 1{,}000$ liters)',
        options: ['$3$', '$300$', '$3{,}000$', '$30{,}000$'],
        answer: 2,
        explanation: 'Step 1: Volume: $2 \\times 3 \\times 0.5 = 3$ cubic meters. Step 2: Convert: each cubic meter is $1{,}000$ liters. Step 3: $3 \\times 1{,}000 = 3{,}000$ liters. Step 4: $30{,}000$ would convert a volume of $30\\ \\text{m}^3$ — a misplaced decimal.',
      },
    ],
  },
]
