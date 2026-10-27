import type { SectionContent } from '../library'

// ============================================================================
// Digital SAT Math — lesson content for all 19 skill sections of the College
// Board four-domain structure (bookId 'math-master'). Complete coverage:
// the full Algebra domain (5 skills), all 3 Advanced Math skills, all 7
// Problem Solving and Data Analysis skills, and all 4 Geometry and
// Trigonometry skills. Written to the Digital SAT specifications: 44 questions
// in two adaptive modules, ~75% four-option MCQ + ~25% student-produced
// response, Desmos calculator + reference sheet available on every item.
// Domain weights: Algebra ~35%, Advanced Math ~35%, PS&DA ~15%, G&T ~15%.
// ============================================================================

export const satMathContent: SectionContent[] = [
  // ---------------------------------------------------------------- 1.1
  {
    sectionId: 'math-sk1-s1',
    readingTime: 8,
    prerequisites: [
      'Combining like terms and the distributive property',
      'Order of operations with integers and fractions',
    ],
    intro: 'Algebra is the biggest slice of the Math assessment — about 35% of all 44 questions — and one-variable linear equations are where it starts. Every item here rewards fluency: solve fast, solve accurately, and know instantly when an equation has no solution or infinitely many. The built-in Desmos calculator can do much of the arithmetic, but reading equation structure is what the test is really buying.',
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
        detail: 'the assessment items test the definition itself: "If $x = 4$ is a solution of $3x + k = 14$, what is $k$?" — substitute and solve ($k = 2$). Substitution is also the fastest error check on student-produced response items, where no answer choices exist to lean on.',
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
        detail: 'The parameter version is a the assessment staple: "For what value of $k$ does $kx + 12 = 3x + 2k + 6$ have infinitely many solutions?" Match the $x$-coefficients ($k = 3$) and the constants ($12 = 2k + 6$, so $k = 3$); the two conditions agree, so $k = 3$.',
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
    sectionId: 'math-sk1-s2',
    readingTime: 9,
    prerequisites: [
      'Solving one-variable linear equations (Section 1.1)',
      'Plotting ordered pairs in the $xy$-plane',
    ],
    intro: 'Two-variable linear equations are the assessment\'s bridge between algebra and graphs. You will compute slope, read intercepts, spot parallel and perpendicular pairs, and translate a real relationship — cost, distance, temperature — into $Ax + By = C$ or $y = mx + b$. Desmos makes every one of these visual, and the fastest test-takers graph first and compute second.',
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
        detail: 'A favorite the assessment stem hands you $6x + 3y = 12$ and asks for the slope — rearrange to $y = -2x + 4$ instead of misreading the coefficients. Questions like "what is $y$ when $x = 2$?" need no rearranging at all: substitute directly into the standard form.',
      },
      {
        term: 'Slope',
        kind: 'definition',
        statement: 'The **slope** between points $(x_1, y_1)$ and $(x_2, y_2)$ is $m = \\frac{y_2 - y_1}{x_2 - x_1}$ — change in output over change in input.',
        detail: 'Consistency is everything: subtract in the same order top and bottom. The classic slope trap flips one order, turning the true $m = \\frac{7 - 3}{2 - 9} = -\\frac{4}{7}$ into the false $+\\frac{4}{7}$. In context, slope is a rate with units — dollars per hour, miles per gallon — and the assessment answer choices include the inverted unit rate as bait.',
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
        detail: 'Perpendicular to $y = \\frac{2}{3}x + 5$ needs slope $-\\frac{3}{2}$, not $-\\frac{2}{3}$. Horizontal lines ($m = 0$) and vertical lines ($x = a$, undefined slope) are perpendicular to each other — an the assessment favorite in disguise.',
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
    sectionId: 'math-sk1-s3',
    readingTime: 9,
    prerequisites: [
      'Two-variable linear equations and slope (Section 1.2)',
      'Evaluating expressions by substitution',
    ],
    intro: 'Linear functions package everything from Section 1.2 into $f(x) = mx + b$ — the assessment\'s favorite modeling vehicle. Expect items that hand you a table, a graph, or two input–output pairs and ask you to rebuild the function or predict a value. Desmos turns a table into a fitted line in seconds, which makes checking your algebra nearly free.',
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
        detail: 'Two the assessment reads: "find $f(3)$" is evaluation (plug in), while "if $f(x) = 45$, find $x$" is equation-solving (output known, hunt the input). Never read $f(x)$ as multiplication — $f(3)$ is not $f \\cdot 3$.',
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
        detail: 'Read the units aloud: dollars per year, miles per hour, degrees per minute. the assessment traps include quoting the rate with flipped units or reading $b$ as the rate — always ask "what happens at input zero?"',
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
    sectionId: 'math-sk1-s4',
    readingTime: 10,
    prerequisites: [
      'Slope and $y$-intercept (Section 1.2)',
      'Solving one-variable linear equations (Section 1.1)',
    ],
    intro: 'Two equations, two unknowns — the assessment tests systems three ways: solve them, build them from a story about tickets and budgets, and classify them as one solution, no solution, or infinitely many. Desmos is at its absolute best here: graph both lines, tap the intersection, done. The assessment knows that, so it also writes structure questions where comparing slopes beats graphing.',
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
        detail: 'the assessment verification trick: substitute the pair into both equations. If it fails either one, eliminate the choice — this kills most options on "which ordered pair is a solution" items before any real solving begins.',
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
        detail: 'Put both equations in $y = mx + b$ form and compare $m$ first, then $b$. A system like $2x + y = 3$ and $4x + 2y = k$ collapses to infinitely many when $k = 6$ and to no solution for any other $k$ — the parameter twist the assessment loves.',
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
    sectionId: 'math-sk1-s5',
    readingTime: 9,
    prerequisites: [
      'Solving linear equations (Section 1.1)',
      'Graphing lines in slope-intercept form (Section 1.2)',
    ],
    intro: 'Inequalities power the assessment\'s budget and constraint stories: "at most 20 dollars", "no fewer than 4 items". The solving moves mirror equations with one landmine — the sign flip — and two-variable versions become shaded regions you must draw and read. Desmos graphs any inequality and shades its region automatically, which makes it a superb checking tool on test day.',
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
        detail: 'the assessment items ask "which ordered pair is a solution of..." — substitute, do not graph. Use $(0, 0)$ as your shading test point whenever it is not on the boundary; its arithmetic is the fastest available.',
      },
      {
        term: 'Constraints in context',
        kind: 'insight',
        statement: '"At most" is $\\le$ and "at least" is $\\ge$: budgets cap spending, minimums force counts — and **item-count problems need whole-number solutions** inside the region.',
        detail: 'If hot dogs cost $3$ dollars and sodas $2$ dollars on an $18$-dollar budget, $3h + 2s \\le 18$ — but $h$ and $s$ must be nonnegative integers, so the answers are scattered lattice points, not a smooth region. the assessment traps include offering a fractional vertex as an item count.',
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
    sectionId: 'math-sk2-s1',
    readingTime: 9,
    prerequisites: [
      'Distributive property and combining like terms',
      'Exponent laws: $x^a x^b = x^{a+b}$ and $(x^a)^b = x^{ab}$',
    ],
    intro: 'Advanced Math ties Algebra as the heaviest the assessment domain at roughly 35% of the section, and it opens with equivalent expressions. The stem is always some version of "which expression is equivalent to..." and the choices are engineered to punish sign slips and half-finished factoring. Structure-matching plus one smart number to plug in settles almost every item in under thirty seconds.',
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
        detail: 'The assessment flip side: if two answer choices disagree when you plug in $x = 2$, at most one of them is right, so plugging in eliminates even though it cannot prove. Keep a second value (like $x = -1$) as a tiebreaker when two choices survive.',
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
        detail: '"Factor completely" is the assessment phrase that kills $3(x^2 - 9)$ as a final answer — it must continue to $3(x - 3)(x + 3)$. Factored form exposes zeros instantly, which is exactly why later questions prefer it.',
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
    sectionId: 'math-sk2-s2',
    readingTime: 10,
    prerequisites: [
      'Factoring quadratics (Section 2.1)',
      'Solving linear equations (Section 1.1)',
      'Graphing lines in Desmos',
    ],
    intro: 'This is the assessment\'s nonlinear workhorse: quadratics solved three ways, absolute value and radical equations with extraneous solutions lurking, and systems where a line meets a parabola. Every technique here doubles as a Desmos technique — graph both sides and read intersections — but the test deliberately includes items where algebra is faster, so you need both gears. Watch especially for discriminant and parameter items that ask only how many solutions exist.',
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
        detail: 'Factoring is fastest when it works; the formula never fails. Completing the square is how the assessment tests vertex form: $x^2 + 6x = 7$ becomes $(x + 3)^2 = 16$, so $x = 1$ or $x = -7$.',
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
    sectionId: 'math-sk2-s3',
    readingTime: 11,
    prerequisites: [
      'Linear functions and function notation (Section 1.3)',
      'Factoring quadratics (Section 2.1)',
    ],
    intro: 'Nonlinear functions are the assessment\'s second 35% domain in miniature: quadratics with vertices to optimize, exponentials with growth factors to interpret, polynomials with end behavior to read. The questions are less about cranking algebra and more about what each parameter means — and Desmos sliders make every parameter visible. Learn to read $a$, $b$, $h$, and $k$ like words.',
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
        detail: 'From standard form, get $h = -\\frac{b}{2a}$, then evaluate to get $k$. The assessment asks "for what $x$ is the value greatest?" — that is just $x = h$. Mind the $(x - h)$ sign trap: the vertex of $(x + 3)^2 + 7$ is $(-3, 7)$, not $(3, 7)$.',
      },
      {
        term: 'Exponential functions',
        kind: 'definition',
        statement: 'In $f(x) = a \\cdot b^x$, **$a$ is the initial value** (at $x = 0$) and **$b$ is the growth factor per unit**: $b = 1 + r$ for growth at rate $r$, $b = 1 - r$ for decay.',
        detail: '$V(t) = 3{,}200(0.85)^t$ loses $15\\%$ per year because $0.85 = 1 - 0.15$. The graph has horizontal asymptote $y = 0$ and never touches it. the assessment trap: a linear option like $1{,}200 + 1.07t$ next to the exponential $1{,}200(1.07)^t$ — check whether the change is by equal amounts or equal factors.',
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
        detail: 'For $g(x) = \\frac{5}{x - 4}$, $x = 4$ is excluded from the domain; for $h(x) = \\sqrt{x - 3}$, the domain is $x \\ge 3$. the assessment stems phrase this as "for which input is the function undefined" — scan denominators and radicals first.',
      },
      {
        term: 'Composition',
        kind: 'method',
        statement: '$f(g(x))$ means **apply $g$ first**, then feed that output to $f$: for $f(x) = x^2$ and $g(x) = x + 1$, $f(g(2)) = f(3) = 9$.',
        detail: 'The assessment keeps the inner function constant or linear — expressions like $f(x + 3)$ or $f(2x)$. Work from the inside out and write the intermediate value. In Desmos, define $f(x)$ and $g(x)$ on separate lines, then type $f(g(2))$ to verify.',
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
    sectionId: 'math-sk3-s1',
    readingTime: 8,
    prerequisites: [
      'Fraction arithmetic and simplifying',
      'Solving linear equations (Section 1.1)',
    ],
    intro: 'Problem Solving and Data Analysis is worth about 15% of the assessment, and it opens with the most practical math on the test: ratios, unit rates, conversions, and proportional reasoning set in science and daily-life contexts. This strand rewards one habit above all others — write the units. A wrong answer here almost always has wrong units underneath it.',
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
        detail: 'If adults to children is $3 : 5$, then children are $\\frac{5}{8}$ of the total people, not $\\frac{5}{3}$ of adults. the assessment answer choices always include the wrong fraction — decide whether the stem asks for a part, the other part, or the whole before computing.',
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
        detail: 'Comparing unit rates settles best-buy and fastest-runner questions: convert each option to a rate per single unit before choosing. The assessment inverts rates among the choices — miles per hour disguised as hours per mile — so label the units as you compute.',
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
    sectionId: 'math-sk4-s1',
    readingTime: 9,
    prerequisites: [
      'Evaluating expressions with $\\pi$ and exponents',
      'Powers of powers: $(x^a)^b = x^{ab}$',
    ],
    intro: 'Geometry and Trigonometry is the final domain of the Math assessment at roughly 15%, and it starts kindly: the reference sheet hands you most area and volume formulas, so the test spends its energy on traps — diameters where you need radii, scale factors that square and cube, and composite shapes that must be decomposed. Desmos evaluates anything with $\\pi$ instantly, which turns these items into careful reading exercises.',
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
        detail: 'A 12-by-8 meter garden with a circular fountain of radius 2 meters has grass area $96 - 4\\pi$ square meters. the assessment choices include the rounded decimal to catch students who approximate early; leave $\\pi$ symbolic until the final step.',
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
        detail: 'The assessment\'s favorite version: "all dimensions are doubled" — new area is $4$ times, new volume is $8$ times. Watch the reverse direction too: halving the radius divides a sphere\'s volume by $8$.',
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
  // ---------------------------------------------------------------- 3.2
  {
    sectionId: 'math-sk3-s2',
    readingTime: 9,
    prerequisites: [
      'Fraction–decimal–percent conversions',
      'Solving linear equations (Section 1.1)',
    ],
    intro: 'Percent items dominate the assessment\'s in-context word problems — discounts, taxes, tips, interest, and percent change — and roughly 30% of the whole 44-question section is dressed in real-world scenarios like these. The Problem Solving and Data Analysis domain holds about 15% of the questions, so expect one or two percent items in each 35-minute adaptive module. Every percent item is really one question in disguise: which number is the **base**? Desmos does the arithmetic, and guessing carries no penalty, so an educated guess on a percent item is always worth making.',
    objectives: [
      'Compute a percent of a number and recover the whole when a percent and a part are known',
      'Calculate percent increase and decrease using the original value as the base',
      'Chain percent changes through growth factors, multiplying $1 + r$ or $1 - r$',
      'Solve discount, tax, tip, and interest problems in context',
    ],
    concepts: [
      {
        term: 'Percent means per hundred',
        kind: 'definition',
        statement: 'A **percent** is a fraction with denominator $100$: $p\\% = \\frac{p}{100}$, and **"of" means multiply** — $15\\%$ of $60$ is $0.15 \\times 60 = 9$.',
        detail: 'Convert fluently in both directions: $0.35 = 35\\%$ and $\\frac{3}{4} = 75\\%$. Desmos computes any of this instantly, so the test\'s real work is deciding *what* to multiply, not *how*.',
      },
      {
        term: 'Part, whole, percent',
        kind: 'method',
        statement: 'Every percent problem is the equation $\\text{part} = \\text{percent} \\times \\text{whole}$ — the **whole is the number the percent is taken "of"**, the base the percent acts on.',
        detail: '"What is $30\\%$ of $\\$80$" gives part $= 0.30 \\times 80 = \\$24$. Flip it when the whole is unknown: "$12$ is $40\\%$ of what number" gives $0.40w = 12$, so $w = 30$. Misreading which number is the base is the most common percent error on the assessment.',
      },
      {
        term: 'Percent change',
        kind: 'theorem',
        statement: 'Percent change is $\\frac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%$ — the **original value is always the base**: a rise from $40$ to $50$ is a $25\\%$ increase, not $20\\%$.',
        detail: 'The $20\\%$ distractor divides by the new value $50$, and it is always planted among the choices. A fall from $250$ to $200$ is $-\\frac{50}{250} = -20\\%$. Watch the follow-up trap: a $25\\%$ increase then a $25\\%$ decrease does **not** return to the start.',
      },
      {
        term: 'Growth factors',
        kind: 'insight',
        statement: 'A percent change is a multiplication: increasing by $r\\%$ multiplies by the growth factor $1 + \\frac{r}{100}$, decreasing multiplies by $1 - \\frac{r}{100}$ — so $1.05$ means $+5\\%$ and $0.85$ means $-15\\%$.',
        detail: 'This is the bridge to exponential models: $P(t) = 900(1.04)^t$ grows $4\\%$ per period. Read factors backward on the test — an option like $(0.96)^t$ describes $4\\%$ *decay*, the classic flip for growth stems.',
      },
      {
        term: 'Chaining changes',
        kind: 'method',
        statement: 'Successive percent changes **multiply, never add**: $+10\\%$ then $+10\\%$ is $(1.10)(1.10) = 1.21$, a $21\\%$ total increase; $+20\\%$ then $-20\\%$ is $(1.20)(0.80) = 0.96$, a net $4\\%$ **decrease**.',
        detail: 'Order does not matter to the final value, but adding the percents is always wrong. Discount-then-tax chains multiply in sequence: an $\\$80$ item at $25\\%$ off with $8\\%$ sales tax costs $80 \\times 0.75 \\times 1.08 = \\$64.80$ — the tax applies to the *discounted* price, not the sticker price.',
      },
    ],
    examples: [
      {
        title: 'A jacket: discount, then tax',
        problem: 'A jacket is priced at $\\$80$. The store takes $25\\%$ off, and then $8\\%$ sales tax is applied to the discounted price. What is the final cost?',
        steps: [
          { label: 'Step 1', text: '```text\n80 * 0.75 = 60 ; then 60 * 1.08 = 64.80\n```\nApply the discount with a factor: $80 \\times (1 - 0.25) = 80 \\times 0.75 = \\$60$.' },
          { label: 'Step 2', text: 'Tax acts on the discounted price: $60 \\times (1 + 0.08) = 60 \\times 1.08$.' },
          { label: 'Step 3', text: 'Multiply: $60 \\times 1.08 = \\$64.80$.' },
          { label: 'Step 4', text: 'Check the chain: one combined factor $(0.75)(1.08) = 0.81$ gives $80 \\times 0.81 = \\$64.80$ directly.' },
        ],
        result: '$\\$64.80$',
      },
      {
        title: 'A bakery\'s percent increase (spotting the base)',
        problem: 'A bakery\'s weekly sales rise from $\\$2{,}400$ to $\\$3{,}000$. What is the percent increase?',
        steps: [
          { label: 'Step 1', text: '```text\nchange = 3000 - 2400 = 600 ; base = ORIGINAL 2400\n```\nThe change is $3{,}000 - 2{,}400 = 600$ dollars.' },
          { label: 'Step 2', text: 'Percent change divides by the **original** value: $\\frac{600}{2{,}400}$.' },
          { label: 'Step 3', text: 'Simplify: $\\frac{600}{2{,}400} = 0.25 = 25\\%$.' },
          { label: 'Step 4', text: 'The tempting wrong answer $20\\%$ comes from dividing by $3{,}000$ — the new value. When "percent increase" appears, the base is where you started.' },
        ],
        result: 'A $25\\%$ increase.',
      },
      {
        title: 'Recovering the original price',
        problem: 'After a $15\\%$ discount, a guitar costs $\\$340$. What was its original price?',
        steps: [
          { label: 'Step 1', text: '```text\n0.85p = 340 => p = 340/0.85\n```\nA $15\\%$ discount leaves $85\\%$ of the original price $p$: $0.85p = 340$.' },
          { label: 'Step 2', text: 'Divide both sides by $0.85$: $p = \\frac{340}{0.85}$.' },
          { label: 'Step 3', text: 'Compute: $p = 400$, so the original price was $\\$400$.' },
          { label: 'Step 4', text: 'Check backward: $15\\%$ of $400$ is $60$, and $400 - 60 = 340$. ✓ The trap $\\$391$ comes from *adding* $15\\%$ of $340$ to $340$.' },
        ],
        result: '$\\$400$',
      },
    ],
    keyTakeaways: [
      'The base is the number after "of" — and for percent change, always the **original** value; the new-value divisor is the planted distractor.',
      'Convert percents to decimals and multiply: growth factor $1.05$ means $+5\\%$ and $0.85$ means $-15\\%$.',
      'Chain percent changes by multiplying factors, never by adding percents: $+20\\%$ then $-20\\%$ nets a $4\\%$ loss.',
      'Discounts apply before tax: final price $= \\text{original} \\times (1 - d) \\times (1 + t)$.',
      'Recover an original by dividing, not adding: $\\text{original} = \\frac{\\text{new}}{1 - \\text{rate}}$.',
    ],
    quiz: [
      {
        q: 'The price of a stock rises from $\\$40$ to $\\$50$. What is the percent increase?',
        options: ['$20\\%$', '$25\\%$', '$10\\%$', '$80\\%$'],
        answer: 1,
        explanation: 'Step 1: The change is $50 - 40 = 10$ dollars. Step 2: The base is the original price, $40$. Step 3: $\\frac{10}{40} = 0.25 = 25\\%$. Step 4: $20\\%$ divides by the new value $50$ — the wrong base, and it is always among the choices.',
      },
      // SAT-pattern: decay factor from a percent decrease
      {
        q: 'A savings account holds $\\$500$ and loses $12\\%$ of its value each year. Which expression gives its value after $t$ years?',
        options: ['$500(0.12)^t$', '$500(0.88)^t$', '$500(1.12)^t$', '$500 - 12t$'],
        answer: 1,
        explanation: 'Step 1: Losing $12\\%$ means keeping $100 - 12 = 88$ percent. Step 2: The yearly factor is $0.88$. Step 3: Compounding repeats the factor: $500(0.88)^t$. Step 4: $(1.12)^t$ models $12\\%$ growth, $(0.12)^t$ shrinks toward zero, and $500 - 12t$ is linear decay — three classic flips.',
      },
      {
        q: 'A video has 300 views. Over the next two weeks its view count rises $20\\%$ and then falls $20\\%$. How many views does it have at the end?',
        options: ['$300$', '$288$', '$312$', '$276$'],
        answer: 1,
        explanation: 'Step 1: After the rise: $300 \\times 1.20 = 360$. Step 2: After the fall: $360 \\times 0.80 = 288$. Step 3: The net factor is $(1.2)(0.8) = 0.96$, a $4\\%$ loss. Step 4: The answer $300$ assumes the changes cancel — percent changes never do.',
      },
      {
        q: 'After a $30\\%$ discount, a tablet costs $\\$84$. What was the original price?',
        options: ['$\\$109.20$', '$\\$120.00$', '$\\$92.40$', '$\\$114.80$'],
        answer: 1,
        explanation: 'Step 1: A $30\\%$ discount leaves $70\\%$ of the original price $p$: $0.70p = 84$. Step 2: Divide: $p = \\frac{84}{0.70} = 120$. Step 3: Check: $30\\%$ of $120$ is $36$, and $120 - 36 = 84$. ✓ Step 4: $\\$109.20$ is the trap of adding $30\\%$ *of $84$* back onto $84$.',
      },
    ],
  },
  // ---------------------------------------------------------------- 3.3
  {
    sectionId: 'math-sk3-s3',
    readingTime: 10,
    prerequisites: [
      'Computing averages of small number lists',
      'Reading data from tables',
    ],
    intro: 'The assessment\'s data items hand you a histogram, dot plot, box plot, or frequency table and ask what the distribution says — its center, its spread, its outliers. These 5–7 Problem Solving and Data Analysis questions are among the fastest points on the test if you know which measure the stem is quietly asking for. Desmos has built-in functions like `mean()` and `median()`, but with small lists mental math is often quicker. There is no penalty for guessing, so even a distribution you find confusing is worth an attempt.',
    objectives: [
      'Compute and interpret the mean, median, and mode of a data set',
      'Choose the appropriate measure of center for skewed data or data with outliers',
      'Use range, interquartile range, and standard deviation to compare spread',
      'Predict how a uniform shift or an outlier changes each measure',
    ],
    concepts: [
      {
        term: 'Measures of center',
        kind: 'definition',
        statement: 'The **mean** is $\\frac{\\text{sum of values}}{\\text{count}}$, the **median** is the middle value of the **sorted** list, and the **mode** is the most frequent value.',
        detail: 'For $2, 4, 6, 8, 20$: the mean is $\\frac{40}{5} = 8$ and the median is $6$ — the huge value $20$ drags the mean above most of the data. For an even count, the median averages the two middle values: $1, 3, 5, 9$ has median $\\frac{3 + 5}{2} = 4$.',
      },
      {
        term: 'Which measure of center?',
        kind: 'insight',
        statement: 'The **mean follows outliers and skew**; the **median resists them** — heavily skewed data (incomes, house prices) is summarized by its median.',
        detail: 'the assessment stems phrase it as "which is most affected by the outlier" or "which best describes a typical value". The mean changes when *any* value changes; the median moves only when the middle of the sorted list moves.',
      },
      {
        term: 'Measures of spread',
        kind: 'definition',
        statement: 'The **range** is $\\text{max} - \\text{min}$; the **interquartile range (IQR)** is $Q_3 - Q_1$, the width of the middle fifty percent; **standard deviation** measures the typical distance from the mean.',
        detail: 'Two classes can share a mean of $80$ yet have wildly different standard deviations — one clustered near $80$, one scattered from $50$ to $100$. The range collapses if a single outlier moves, which is why the IQR is the outlier-resistant spread measure and the standard deviation the outlier-sensitive one.',
      },
      {
        term: 'Box plots',
        kind: 'method',
        statement: 'A **box plot** displays the five-number summary — min, $Q_1$, median, $Q_3$, max: the box spans the IQR, whiskers reach the extremes, and outliers plot as separate points.',
        detail: 'Compare centers with the median line inside the box and spreads with box length. The assessment loves side-by-side box plots: "Class A\'s median is higher, but Class B\'s IQR is wider" is a complete answer template. Dot plots show every point, so frequencies can be counted directly.',
      },
      {
        term: 'Shift and scale',
        kind: 'theorem',
        statement: 'Adding the same constant to every value **shifts the mean and median** by that constant and **leaves the range, IQR, and standard deviation unchanged**; multiplying every value scales all of them.',
        detail: 'Adding $5$ points to every quiz score moves the mean from $72$ to $77$ but keeps the spread identical, because distances between values did not change. Multiplying by $3$ triples the mean and the standard deviation. This transformation item appears in both directions on the test.',
      },
      {
        term: 'Median from frequency tables',
        kind: 'method',
        statement: 'To find the median of $n$ tabulated values, locate position $\\frac{n + 1}{2}$ in the **cumulative frequency**, then read off the value in that row.',
        detail: 'For $3$ students reading $1$ book, $4$ reading $2$, $5$ reading $3$, and $3$ reading $4$: $n = 15$, so the median is the 8th value; cumulative counts $3, 7, 12, 15$ place the 8th in the "$3$ books" row. Do not average the two middle *categories* — expand the table first.',
      },
    ],
    examples: [
      {
        title: 'An outlier pulls the mean, not the median',
        problem: 'Five students scored $4$, $8$, $10$, $12$, and $16$ points on a quiz. A sixth student scores $70$. What are the mean and median before and after?',
        steps: [
          { label: 'Step 1', text: '```text\nbefore: mean 50/5 = 10, median 10\nafter: mean 120/6 = 20, median (10+12)/2 = 11\n```\nBefore: the mean is $\\frac{4 + 8 + 10 + 12 + 16}{5} = 10$ and the median — the middle of the sorted list — is also $10$.' },
          { label: 'Step 2', text: 'Add the outlier: the new sum is $120$, so the new mean is $\\frac{120}{6} = 20$.' },
          { label: 'Step 3', text: 'The sorted list $4, 8, 10, 12, 16, 70$ has two middle values, so the new median is $\\frac{10 + 12}{2} = 11$.' },
          { label: 'Step 4', text: 'The mean jumped $10$ points while the median moved $1$ — exactly why skewed data is reported with the median.' },
        ],
        result: 'Mean: $10 \\to 20$; median: $10 \\to 11$.',
      },
      {
        title: 'A median from a frequency table',
        problem: 'Fifteen students report how many books they read last year: $3$ read one book, $4$ read two, $5$ read three, and $3$ read four. What is the median number of books read?',
        steps: [
          { label: 'Step 1', text: '```text\nn = 15 ; median = 8th value ; cumulative: 3, 7, 12, 15\n```\nWith $n = 15$ values, the median is the $\\frac{15 + 1}{2} = 8$th value in the sorted list.' },
          { label: 'Step 2', text: 'Build cumulative frequencies: one book covers positions $1$–$3$, two books positions $4$–$7$, three books positions $8$–$12$.' },
          { label: 'Step 3', text: 'The 8th value falls in the "three books" row, so the median is $3$.' },
          { label: 'Step 4', text: 'Note the mean is $\\frac{3 + 8 + 15 + 12}{15} = \\frac{38}{15} \\approx 2.5$ — different from the median, as usual for a distribution with a longer right tail.' },
        ],
        result: 'The median is $3$ books.',
      },
      {
        title: 'Every score plus five',
        problem: 'A class\'s 25 quiz scores have mean $72$, median $74$, IQR $16$, and standard deviation $8$. The teacher adds $5$ points to every score. What are the new values?',
        steps: [
          { label: 'Step 1', text: '```text\n+5 shifts center, not spread: mean 77, median 79, IQR 16, SD 8\n```\nAdding $5$ raises every value by $5$, so every location measure shifts up by $5$: the mean becomes $77$ and the median $79$.' },
          { label: 'Step 2', text: 'Distances between values are untouched: $Q_3 - Q_1$ is still $16$.' },
          { label: 'Step 3', text: 'Each deviation from the mean is unchanged — every value and the mean both rose by $5$ — so the standard deviation stays $8$.' },
          { label: 'Step 4', text: 'Contrast: if the teacher had *multiplied* every score by $2$, all four statistics would double.' },
        ],
        result: 'Mean $77$, median $79$, IQR $16$, standard deviation $8$.',
      },
    ],
    keyTakeaways: [
      'Mean $=$ sum divided by count; median $=$ middle of the **sorted** list; mode $=$ most frequent — know all three computations cold.',
      'Outliers and skew drag the mean while the median resists: house prices and incomes are median questions in disguise.',
      'Range is $\\text{max} - \\text{min}$; IQR $= Q_3 - Q_1$ survives outliers; standard deviation is the typical distance from the mean.',
      'Box plots expose the five-number summary — compare centers with the median line and spread with box length.',
      'Adding a constant shifts the mean and median only; multiplying scales everything — spread never changes under a pure shift.',
    ],
    quiz: [
      {
        q: 'The data set $2, 4, 6, 8, 20$ has which mean?',
        options: ['$6$', '$8$', '$9$', '$40$'],
        answer: 1,
        explanation: 'Step 1: Sum the values: $2 + 4 + 6 + 8 + 20 = 40$. Step 2: Divide by the count: $\\frac{40}{5} = 8$. Step 3: The mean is $8$. Step 4: $6$ is the median — confusing mean and median is the designed trap; $40$ is the sum itself.',
      },
      {
        q: 'Each of the 25 quiz scores in a class is increased by 5 points. Which statement is true?',
        options: ['The mean and median increase by 5, and the standard deviation is unchanged', 'The mean, median, and standard deviation all increase by 5', 'Only the mean increases by 5', 'The standard deviation increases by 5, but the median is unchanged'],
        answer: 0,
        explanation: 'Step 1: Every value shifts up by $5$, so the mean and median each rise by $5$. Step 2: Spread measures depend on distances *between* values, which are unchanged. Step 3: So the IQR and standard deviation stay the same. Step 4: Options claiming the standard deviation rises mistake a shift for a stretch.',
      },
      // SAT-pattern: median from a frequency table
      {
        q: 'Fifteen students report daily screen time in hours: 2 report $0$, 5 report $1$, 6 report $2$, and 2 report $3$. What is the median?',
        options: ['$1$', '$2$', '$1.5$', '$2.5$'],
        answer: 1,
        explanation: 'Step 1: $n = 15$, so the median is the 8th value of the sorted data. Step 2: Cumulative frequencies: $0$ covers positions 1–2, $1$ covers 3–7, $2$ covers 8–13. Step 3: The 8th value is $2$ hours. Step 4: $1.5$ averages the two middle *categories* of the value list $\\{0, 1, 2, 3\\}$ — the frequency table must be expanded first.',
      },
      {
        q: 'A town\'s house prices include eleven modest homes and one mansion priced far above the rest. Which measure best describes a typical price?',
        options: ['The mean, because it uses every value', 'The median, because it is unaffected by the extreme price', 'The range, because it measures variability', 'The mode, because it is the most common price'],
        answer: 1,
        explanation: 'Step 1: The mansion is an extreme outlier on the high end. Step 2: The mean is pulled strongly toward the outlier and overstates a typical price. Step 3: The median depends only on the middle position of the sorted list, so the extreme value barely moves it. Step 4: Range and mode describe spread and frequency, not a typical value.',
      },
    ],
  },
  // ---------------------------------------------------------------- 3.4
  {
    sectionId: 'math-sk3-s4',
    readingTime: 10,
    prerequisites: [
      'Interpreting slope as a rate (Section 1.2)',
      'Exponential versus linear growth (Section 2.3)',
    ],
    intro: 'Scatterplot items are the assessment\'s "read the data" questions: describe the association, use a line of best fit, and judge whether a linear, quadratic, or exponential model matches the pattern. These appear among the 5–7 Problem Solving and Data Analysis questions, and about 30% of the whole section is in-context material like this — science labs, commute times, plant growth. Desmos fits a line of best fit instantly from a table (`y1 ~ m x1 + b`), which is the fastest way to check a fit the test hands you. As everywhere on the test, there is no penalty for guessing, so a reasonable interpretation beats a blank.',
    objectives: [
      'Describe the association a scatterplot shows — form, direction, strength, and outliers',
      'Interpret the slope and intercept of a line of best fit in context and use it to predict values',
      'Distinguish interpolation from extrapolation and judge when predictions are unreliable',
      'Choose among linear, quadratic, and exponential models using differences and ratios',
    ],
    concepts: [
      {
        term: 'Anatomy of an association',
        kind: 'definition',
        statement: 'Describe a scatterplot by **form** (linear or curved), **direction** (positive: both rise together; negative: one rises as the other falls), and **strength** (how tightly points hug the pattern), plus any **outlier** standing apart.',
        detail: 'A stem shows a cloud of points and asks which description fits. Watch curved clouds — a parabolic arc is a strong but *nonlinear* association, and "strong negative linear" is the trap for a tight falling curve.',
      },
      {
        term: 'Line of best fit',
        kind: 'definition',
        statement: 'The **line of best fit** $\\hat{y} = mx + b$ summarizes a linear trend: the slope $m$ is the **predicted change in $y$ per one-unit change in $x$**, and $b$ is the predicted value at $x = 0$.',
        detail: 'Predictions from the line are estimates, not data points — residual scatter means individual points sit above and below it. In Desmos, enter the data as a table and type `y1 ~ m x1 + b` to get the fitted line and its parameters in seconds.',
      },
      {
        term: 'Interpolation versus extrapolation',
        kind: 'insight',
        statement: '**Interpolation** predicts inside the observed $x$-range and is trustworthy; **extrapolation** predicts beyond it and is risky — the trend may not continue.',
        detail: 'Data collected for $x$ between $5$ and $15$ supports predictions near $x = 10$, not claims about $x = 50$. the assessment items phrase this as "for which prediction is the model most appropriate?" — choose the input inside (or nearest) the data range.',
      },
      {
        term: 'Choosing a model',
        kind: 'method',
        statement: 'Match the pattern: **constant first differences** $\\Rightarrow$ linear $y = mx + b$; **constant successive ratios** $\\Rightarrow$ exponential $y = a \\cdot b^x$; a symmetric parabolic bend $\\Rightarrow$ quadratic.',
        detail: 'For outputs $3, 6, 12, 24$: the differences $3, 6, 12$ grow, but the ratios are all $2$ — exponential. For $3, 6, 9, 12$: the differences are all $3$ — linear. Plugging a data point into each candidate answer choice settles model-matching items quickly.',
      },
      {
        term: 'Interpreting models in context',
        kind: 'insight',
        statement: 'In context the slope carries **units** — minutes per mile, dollars per year — and the intercept is the predicted value at input zero, which may or may not be meaningful.',
        detail: 'For a commute model $\\hat{y} = 1.8x + 12$, each extra mile adds about $1.8$ minutes and the fixed part is $12$ minutes. If $x = 0$ is impossible in context (a negative age, a zero-mile trip), the intercept is just a mathematical anchor — the assessment items ask which interpretation is *reasonable*.',
      },
    ],
    examples: [
      {
        title: 'Predicting with a best-fit line',
        problem: 'For 12 subway stations, the line of best fit relating distance $x$, in miles, from downtown to ridership $y$, in hundreds, is $\\hat{y} = 1.8x + 12$. Interpret the slope and predict ridership for a station 5 miles out.',
        steps: [
          { label: 'Step 1', text: '```text\ny-hat = 1.8x + 12 ; slope 1.8 hundreds per mile ; x = 5\n```\nThe slope $1.8$ means each additional mile from downtown predicts about $1.8$ hundred — $180$ — more riders.' },
          { label: 'Step 2', text: 'The intercept $12$ predicts $1{,}200$ riders at distance zero — the downtown station itself.' },
          { label: 'Step 3', text: 'Substitute $x = 5$: $\\hat{y} = 1.8(5) + 12 = 9 + 12 = 21$ hundred riders.' },
          { label: 'Step 4', text: 'Because $5$ miles lies inside the observed range of the $12$ stations, this is interpolation — a reasonable use of the model.' },
        ],
        result: 'About $2{,}100$ riders predicted at 5 miles; each extra mile adds about $180$ riders.',
      },
      {
        title: 'Which model fits the data?',
        problem: 'A culture\'s bacteria count $y$ after $t$ hours is $(2, 80)$, $(3, 160)$, $(4, 320)$, $(5, 640)$. Is the pattern linear, quadratic, or exponential, and what equation fits?',
        steps: [
          { label: 'Step 1', text: '```text\nx:     2    3    4    5\ny:     80   160  320  640\ndiffs: 80, 160, 320 (not constant)\n```\nTest differences first: $160 - 80 = 80$, $320 - 160 = 160$, $640 - 320 = 320$ — the differences themselves double, so the pattern is not linear.' },
          { label: 'Step 2', text: 'Test ratios: $\\frac{160}{80} = 2$, $\\frac{320}{160} = 2$, $\\frac{640}{320} = 2$ — each hour the count doubles.' },
          { label: 'Step 3', text: 'Constant ratios mean exponential: $y = a \\cdot 2^t$ with $a = 20$, because $20 \\cdot 2^2 = 80$.' },
          { label: 'Step 4', text: 'Check the remaining points: $20 \\cdot 2^3 = 160$ ✓ and $20 \\cdot 2^5 = 640$ ✓.' },
        ],
        result: 'Exponential: $y = 20 \\cdot 2^t$ (doubling every hour).',
      },
      {
        title: 'Describing an association',
        problem: 'A scatterplot shows daily study time $x$ versus quiz errors $y$ for 20 students: the points drift downward in a loose band, but one student at $(5, 18)$ sits far above the rest. Describe the association.',
        steps: [
          { label: 'Step 1', text: '```text\nform: roughly linear ; direction: negative ; outlier at (5, 18)\n```\nForm: the band of points is roughly straight, so the form is linear.' },
          { label: 'Step 2', text: 'Direction: as study time increases, errors tend to decrease — a negative association.' },
          { label: 'Step 3', text: 'Strength: the wide, loose band indicates a weak-to-moderate linear association, not a tight one.' },
          { label: 'Step 4', text: 'The point $(5, 18)$ breaks the pattern — an outlier that weakens the fit; note it explicitly rather than forcing the line through it.' },
        ],
        result: 'A weak-to-moderate negative linear association with one outlier at $(5, 18)$.',
      },
    ],
    keyTakeaways: [
      'Describe associations by form, direction, and strength — and name outliers explicitly; curved form is still an association, just not a linear one.',
      'Best-fit slope is the predicted change per unit of $x$, with units; the intercept is the prediction at $x = 0$, meaningful only if zero is a real input.',
      'Interpolate confidently inside the data range; extrapolate only with a stated justification — beyond the data the model is a guess.',
      'Constant differences mean linear; constant ratios mean exponential; a symmetric bend means quadratic.',
      'Check a candidate model by substituting a data point — one substitution kills three answer choices.',
    ],
    quiz: [
      {
        q: 'The line of best fit for a set of data is $\\hat{y} = 0.8x + 12$. What is the predicted value of $y$ when $x = 10$?',
        options: ['$20$', '$8$', '$12.8$', '$28$'],
        answer: 0,
        explanation: 'Step 1: Substitute $x = 10$: $\\hat{y} = 0.8(10) + 12$. Step 2: Compute: $8 + 12 = 20$. Step 3: The prediction is $20$. Step 4: $8$ forgets the intercept, $12.8$ mis-adds $0.8 + 12$, and $28$ doubles the slope term.',
      },
      // SAT-pattern: model type from differences versus ratios
      {
        q: 'Data points are $(2, 5)$, $(3, 10)$, $(4, 20)$, and $(5, 40)$. Which type of model best fits the data?',
        options: ['$\\text{Linear}$', '$\\text{Exponential}$', '$\\text{Quadratic}$', '$\\text{No model fits}$'],
        answer: 1,
        explanation: 'Step 1: Differences: $5, 10, 20$ — not constant, so not linear. Step 2: Ratios: $\\frac{10}{5} = 2$, $\\frac{20}{10} = 2$, $\\frac{40}{20} = 2$ — constant. Step 3: Equal successive ratios are the signature of exponential growth. Step 4: The data fits $y = 5 \\cdot 2^{x - 2}$, doubling each step.',
      },
      {
        q: 'A scatterplot of temperature versus ice cream sales shows points rising tightly along a straight line. Which describes the association?',
        options: ['A strong positive linear association', 'A weak negative linear association', 'A strong negative nonlinear association', 'No association'],
        answer: 0,
        explanation: 'Step 1: Both variables rise together, so the direction is positive. Step 2: The points hug a straight line, so the form is linear and the strength strong. Step 3: Combine: a strong positive linear association. Step 4: "Weak" contradicts the tight band, and "negative" contradicts the shared rise.',
      },
      {
        q: 'A best-fit line is built from data with $x$-values between 3 and 12. For which input is the line\'s prediction most clearly an extrapolation?',
        options: ['$x = 7$', '$x = 12$', '$x = 20$', '$x = 3$'],
        answer: 2,
        explanation: 'Step 1: Extrapolation means predicting outside the observed range. Step 2: The observed range is $3 \\le x \\le 12$. Step 3: Inputs $7$, $12$, and $3$ all lie inside or on the edge of the range. Step 4: $x = 20$ lies beyond it, so that prediction is the extrapolation.',
      },
    ],
  },
  // ---------------------------------------------------------------- 3.5
  {
    sectionId: 'math-sk3-s5',
    readingTime: 9,
    prerequisites: [
      'Fraction arithmetic',
      'Reading two-way tables',
    ],
    intro: 'Probability items count things: outcomes from lists, two-way tables, area models, and everyday scenarios. The assessment keeps the numbers small but the reasoning sharp — conditional probability and "at least one" questions separate careful counters from lucky guessers. These items sit inside the 5–7 Problem Solving and Data Analysis questions, and many arrive as survey or quality-control word problems, part of the roughly 30% of the 44 questions set in context. Desmos can evaluate the fraction arithmetic, but setting up the right fraction is the whole game — and with no penalty for guessing, an answer between $0$ and $1$ is always worth entering.',
    objectives: [
      'Compute the probability of an event from counts, lists, and descriptions',
      'Use the complement rule to answer "at least one" questions efficiently',
      'Multiply probabilities for independent events, with and without replacement',
      'Compute and interpret conditional probability from two-way tables',
    ],
    concepts: [
      {
        term: 'Probability of an event',
        kind: 'definition',
        statement: 'For equally likely outcomes, $P(\\text{event}) = \\frac{\\text{favorable outcomes}}{\\text{total outcomes}}$, always a number between $0$ and $1$.',
        detail: 'Probability $0$ means impossible and $1$ means certain. When a stem describes a jar of marbles, build the count first: $12$ marbles of which $4$ are blue gives $P(\\text{blue}) = \\frac{4}{12} = \\frac{1}{3}$. The assessment plants the complement $\\frac{2}{3}$ among the choices for "not blue".',
      },
      {
        term: 'The complement rule',
        kind: 'theorem',
        statement: '$P(\\text{not } A) = 1 - P(A)$, and "at least one" questions are complement questions: $P(\\text{at least one}) = 1 - P(\\text{none})$.',
        detail: 'Rolling a die twice, the probability of at least one six is $1 - \\left(\\frac{5}{6}\\right)^2 = 1 - \\frac{25}{36} = \\frac{11}{36}$. Enumerating "at least one" directly double-counts the double-six; subtracting one clean probability is one line.',
      },
      {
        term: 'Independent events',
        kind: 'theorem',
        statement: 'Events are **independent** when one outcome does not change the probability of the other; then $P(A \\text{ and } B) = P(A) \\times P(B)$.',
        detail: 'With replacement keeps draws independent; without replacement does not — after a red leaves the jar, both the count of reds and the total drop by one. For $4$ red and $6$ blue, two blues without replacement: $\\frac{6}{10} \\times \\frac{5}{9} = \\frac{1}{3}$, versus $0.36$ with replacement.',
      },
      {
        term: 'Conditional probability',
        kind: 'method',
        statement: '$P(A \\mid B) = \\frac{P(A \\text{ and } B)}{P(B)}$ — the probability of $A$ **given** that $B$ already happened, computed by restricting the world to $B$.',
        detail: '"Given that a student walks to school, what is the probability they own a bike?" discards every non-walker before dividing. The joint count goes on top, the *given* group\'s total on the bottom — never the grand total, and never the other marginal.',
      },
      {
        term: 'Reading two-way tables',
        kind: 'method',
        statement: 'A two-way table cross-tabulates two categorical variables: **cells are joint counts**, row and column totals are marginals, and conditional questions divide a cell by its row or column total.',
        detail: 'Re-read the "given" phrase to pick the denominator: "given breakfast" means the breakfast row total; "given passing" means the passing column total. The assessment always offers the wrong-denominator result as a choice, so verify which marginal the question restricts to.',
      },
    ],
    examples: [
      {
        title: 'Conditional probability from a two-way table',
        problem: 'Two hundred students were surveyed about eating breakfast and passing a fitness test: $72$ ate breakfast and passed, $18$ ate breakfast and failed, $60$ skipped breakfast and passed, and $50$ skipped and failed. Given that a student eats breakfast, what is the probability the student passes?',
        steps: [
          { label: 'Step 1', text: '```text\n            pass   fail   total\nbreakfast    72     18     90\nskip         60     50    110\n```\nArrange the counts in a two-way table; row totals: $72 + 18 = 90$ breakfast eaters and $60 + 50 = 110$ skippers.' },
          { label: 'Step 2', text: '"Given that a student eats breakfast" restricts attention to the $90$ students in the first row.' },
          { label: 'Step 3', text: 'Of those $90$, exactly $72$ passed: $P(\\text{pass} \\mid \\text{breakfast}) = \\frac{72}{90} = \\frac{4}{5}$.' },
          { label: 'Step 4', text: 'The wrong denominators $\\frac{72}{132}$ (all who passed) and $\\frac{72}{200}$ (everyone) produce the classic planted distractors $0.545$ and $0.36$.' },
        ],
        result: '$\\frac{4}{5} = 0.8$',
      },
      {
        title: 'With replacement versus without',
        problem: 'A jar holds $4$ red and $6$ blue marbles. Two marbles are drawn. What is the probability both are red (a) with replacement, and (b) without replacement?',
        steps: [
          { label: 'Step 1', text: '```text\nwith:    (4/10)(4/10) = 0.16\nwithout: (4/10)(3/9)  = 2/15\n```\n(a) With replacement, the draws are independent: $P(RR) = \\frac{4}{10} \\times \\frac{4}{10} = 0.16$.' },
          { label: 'Step 2', text: '(b) Without replacement, the first red leaves $3$ red among $9$ remaining marbles.' },
          { label: 'Step 3', text: 'Multiply the new fractions: $P(RR) = \\frac{4}{10} \\times \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15} \\approx 0.133$.' },
          { label: 'Step 4', text: 'Removing a red makes a second red *less* likely — without replacement always changes the second draw, so the two answers differ.' },
        ],
        result: '(a) $0.16$; (b) $\\frac{2}{15}$.',
      },
      {
        title: 'At least one, via the complement',
        problem: 'A fair six-sided die is rolled twice. What is the probability of rolling at least one six?',
        steps: [
          { label: 'Step 1', text: '```text\nP(no six) = (5/6)(5/6) ; P(at least one) = 1 - 25/36\n```\n"At least one" is the complement of "none", so compute $P(\\text{no six in two rolls})$ first.' },
          { label: 'Step 2', text: 'Each roll misses six with probability $\\frac{5}{6}$, and rolls are independent: $\\left(\\frac{5}{6}\\right)^2 = \\frac{25}{36}$.' },
          { label: 'Step 3', text: 'Subtract from 1: $1 - \\frac{25}{36} = \\frac{11}{36}$.' },
          { label: 'Step 4', text: 'Listing the winning pairs — $(6, \\cdot)$ and $(\\cdot, 6)$ minus the double-counted $(6, 6)$ — confirms $\\frac{11}{36}$: that double-count is exactly the error the complement route avoids.' },
        ],
        result: '$\\frac{11}{36}$',
      },
    ],
    keyTakeaways: [
      'Probability is favorable over total, strictly between $0$ and $1$ — build the count table before touching fractions.',
      '"At least one" means compute $1 - P(\\text{none})$; direct enumeration double-counts shared cases.',
      'Independent events multiply: $P(A \\text{ and } B) = P(A)P(B)$; without replacement breaks independence because the second denominator shrinks.',
      'Conditional probability narrows the world: $P(A \\mid B) = \\frac{\\text{joint}}{\\text{total of the given group}}$ — the given group sets the denominator.',
      'Read two-way tables twice; the assessment plants the wrong-marginal answer among the choices.',
    ],
    quiz: [
      {
        q: 'A jar holds $6$ red, $4$ blue, and $2$ green marbles. If one is drawn at random, what is $P(\\text{not blue})$?',
        options: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{1}{2}$', '$\\frac{1}{6}$'],
        answer: 1,
        explanation: 'Step 1: Total marbles: $6 + 4 + 2 = 12$. Step 2: Not-blue marbles: $6 + 2 = 8$. Step 3: $P = \\frac{8}{12} = \\frac{2}{3}$. Step 4: $\\frac{1}{3}$ is the complement $P(\\text{blue})$ — the classic swap.',
      },
      // SAT-pattern: conditional probability, wrong-marginal distractors
      {
        q: 'Of 250 students, 40 walk to school and own a bike, 60 walk and do not own a bike, 70 do not walk and own a bike, and 80 do neither. Given that a student walks to school, what is the probability the student owns a bike?',
        options: ['$0.40$', '$0.36$', '$0.16$', '$0.60$'],
        answer: 0,
        explanation: 'Step 1: The "given" is walking, so the denominator is the walking total: $40 + 60 = 100$. Step 2: The favorable joint count is $40$ (walk and bike). Step 3: $P(\\text{bike} \\mid \\text{walk}) = \\frac{40}{100} = 0.40$. Step 4: $0.36$ divides by the bike owners ($110$) — wrong marginal — and $0.16$ divides by all $250$ students.',
      },
      {
        q: 'A bag holds $5$ apples and $3$ oranges. One fruit is drawn, replaced, and a second is drawn. What is the probability both are oranges?',
        options: ['$\\frac{9}{64}$', '$\\frac{3}{8}$', '$\\frac{9}{16}$', '$\\frac{15}{64}$'],
        answer: 0,
        explanation: 'Step 1: With replacement, the draws are independent. Step 2: Each draw is orange with probability $\\frac{3}{8}$. Step 3: Multiply: $\\frac{3}{8} \\times \\frac{3}{8} = \\frac{9}{64}$. Step 4: $\\frac{3}{8}$ is the single-draw probability, and $\\frac{9}{16}$ squares $\\frac{3}{4}$ — both planted for misreads.',
      },
      {
        q: 'A box holds $6$ blue pens and $4$ red pens. Two pens are drawn without replacement. What is the probability both are blue?',
        options: ['$\\frac{1}{3}$', '$\\frac{9}{25}$', '$\\frac{3}{5}$', '$\\frac{1}{9}$'],
        answer: 0,
        explanation: 'Step 1: First blue: $\\frac{6}{10} = \\frac{3}{5}$. Step 2: Without replacement, $5$ blue pens remain among $9$: $\\frac{5}{9}$. Step 3: Multiply: $\\frac{6}{10} \\times \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3}$. Step 4: $\\frac{9}{25}$ treats the draws as with replacement — the classic independence slip.',
      },
    ],
  },
  // ---------------------------------------------------------------- 3.6
  {
    sectionId: 'math-sk3-s6',
    readingTime: 8,
    prerequisites: [
      'Percentages (Section 3.2)',
      'Random sampling vocabulary',
    ],
    intro: 'The inference items are the assessment\'s statistics-literacy questions: a poll reports a sample proportion with a margin of error, and the test asks what can — and cannot — be concluded. The numbers stay friendly; the reasoning is the point. Expect one or two of these among the 5–7 Problem Solving and Data Analysis questions, phrased as word problems about surveys of voters, shoppers, or students — part of the roughly 30% of the section that is in context. Read every option slowly, and remember there is no penalty for guessing: an unsure inference answer should still be entered.',
    objectives: [
      'Use a sample mean or sample proportion to estimate the corresponding population value',
      'Build and interpret the interval estimate ± margin of error',
      'Explain how sample size controls margin of error — larger samples, smaller margins',
      'Judge which claims a reported interval does and does not support',
    ],
    concepts: [
      {
        term: 'Statistics estimate parameters',
        kind: 'definition',
        statement: 'A **sample statistic** — the sample mean $\\bar{x}$ or sample proportion $\\hat{p}$ — estimates the matching **population parameter**: the true mean or proportion of the whole group.',
        detail: 'Polling 500 voters and finding $62\\%$ support does not mean exactly $62\\%$ of *all* voters agree: random samples land near the truth but not on it. Estimation language — "approximately", "likely near" — is what the assessment rewards; "exactly" is the planted overclaim.',
      },
      {
        term: 'Margin of error',
        kind: 'definition',
        statement: 'A **margin of error (MOE)** extends the estimate to a plausible range: $\\text{estimate} \\pm \\text{MOE}$ is the interval the true population value most likely lives in.',
        detail: 'An estimate of $0.62$ with MOE $0.04$ supports "the true proportion is between $0.58$ and $0.66$". Values outside the interval are possible but unlikely — the interval is a net, not a wall. Stems ask which claim is "supported by the data"; the interval statement is that claim.',
      },
      {
        term: 'Sample size and MOE',
        kind: 'theorem',
        statement: 'A **larger sample size produces a smaller margin of error** — the margin shrinks roughly like $\\frac{1}{\\sqrt{n}}$, so **quadrupling the sample halves the margin**.',
        detail: 'Going from $400$ to $1{,}600$ respondents cuts a $5\\%$ margin to about $2.5\\%$. The assessment does not require the formula — only the direction (larger samples, smaller margins) and the quadruple-to-halve fact, which is the quantitative version the test uses.',
      },
      {
        term: 'Comparing claims and groups',
        kind: 'insight',
        statement: 'If two intervals **overlap**, the data show no clear difference between the groups; a claim lying **outside** the interval is not supported by the data.',
        detail: 'City A estimates $38\\% \\pm 3\\%$ (interval $35\\%$–$41\\%$) and City B $41\\% \\pm 2.5\\%$ ($38.5\\%$–$43.5\\%$): the overlap means "City B is higher" is not established. A candidate polling $47\\% \\pm 4\\%$ has an interval crossing $50\\%$, so "a majority supports" fails too.',
      },
      {
        term: 'The randomness requirement',
        kind: 'insight',
        statement: 'Margin-of-error logic assumes the sample was drawn **at random** from the population — a biased or volunteer sample is not repaired by being large.',
        detail: 'A mall-intercept survey of $10{,}000$ shoppers only describes mall shoppers, and a self-selected online poll describes only people who vote in online polls. On the test, "increase the sample size" fixes only the margin — never the bias — of a non-random sample.',
      },
    ],
    examples: [
      {
        title: 'A majority claim',
        problem: 'A random sample of $1{,}500$ voters finds $55\\%$ supporting a ballot measure, with a $3\\%$ margin of error. Is the claim that a majority of all voters support the measure justified?',
        steps: [
          { label: 'Step 1', text: '```text\ninterval: 55 - 3 = 52 ; 55 + 3 = 58\n```\nBuild the interval: $55\\% \\pm 3\\%$ runs from $52\\%$ to $58\\%$.' },
          { label: 'Step 2', text: 'A majority means more than $50\\%$ support.' },
          { label: 'Step 3', text: 'The entire interval sits above $50\\%$, so values at or below $50\\%$ are implausible given this data.' },
          { label: 'Step 4', text: 'Because the sample was random, the claim is supported: the data are consistent only with majority support. If the interval had straddled $50\\%$, the claim would fail.' },
        ],
        result: 'Yes — the interval $52\\%$ to $58\\%$ lies entirely above $50\\%$.',
      },
      {
        title: 'Shrinking the margin',
        problem: 'A researcher\'s estimate carries a $4\\%$ margin of error with a sample of $400$ people. She wants the margin down to $2\\%$. What must happen to the sample size?',
        steps: [
          { label: 'Step 1', text: '```text\nMOE scales like 1/sqrt(n) ; halve MOE => sqrt(n) doubles => n * 4\n```\nThe margin of error scales like $\\frac{1}{\\sqrt{n}}$: halving the margin requires $\\sqrt{n}$ to double.' },
          { label: 'Step 2', text: 'If $\\sqrt{n}$ doubles, $n$ must quadruple: $400 \\times 4 = 1{,}600$.' },
          { label: 'Step 3', text: 'Check the direction: more data narrows the plausible range — $1{,}600$ responses give about a $2\\%$ margin.' },
          { label: 'Step 4', text: 'Doubling the sample only to $800$ would shrink the margin by a factor of about $\\frac{1}{\\sqrt{2}}$, leaving roughly $2.8\\%$ — not enough.' },
        ],
        result: 'The sample must be roughly quadrupled, to about $1{,}600$.',
      },
      {
        title: 'Comparing two cities',
        problem: 'A random sample in City A estimates $38\\%$ of residents bike to work (MOE $3\\%$); an independent random sample in City B estimates $41\\%$ (MOE $2.5\\%$). Does the data show that City B has a higher biking rate?',
        steps: [
          { label: 'Step 1', text: '```text\nA: 35 to 41 ; B: 38.5 to 43.5 ; overlap => no clear difference\n```\nCity A\'s interval: $38 - 3 = 35$ to $38 + 3 = 41$ percent.' },
          { label: 'Step 2', text: 'City B\'s interval: $41 - 2.5 = 38.5$ to $41 + 2.5 = 43.5$ percent.' },
          { label: 'Step 3', text: 'The intervals overlap between $38.5\\%$ and $41\\%$ — plausible rates exist that the two cities share.' },
          { label: 'Step 4', text: 'Since "A higher", "B higher", and "equal" are all consistent with the data, no clear difference is established; a reporter claiming City B leads is overstating.' },
        ],
        result: 'No — the overlapping intervals do not establish a difference.',
      },
    ],
    keyTakeaways: [
      'A random sample\'s statistic estimates — never pinpoints — the population value; "exactly" is an overclaim.',
      'Estimate $\\pm$ margin of error gives the plausible interval; judge claims against the whole interval, not the point estimate.',
      'Bigger random samples mean smaller margins; quadrupling the sample roughly halves the margin.',
      'Overlapping intervals mean no detectable difference between groups; claims must clear the whole interval.',
      'The margin-of-error story assumes random sampling — size does not cure bias.',
    ],
    quiz: [
      {
        q: 'A survey estimates $62\\%$ of households own a pet, with a $4\\%$ margin of error. Which interval is the plausible range for the true percentage?',
        options: ['$58\\%$ to $66\\%$', '$62\\%$ to $66\\%$', '$56\\%$ to $68\\%$', '$58\\%$ to $62\\%$'],
        answer: 0,
        explanation: 'Step 1: Subtract and add the margin to the estimate: $62 - 4 = 58$ and $62 + 4 = 66$. Step 2: The interval is $58\\%$ to $66\\%$, symmetric about the estimate. Step 3: Options adding the margin to only one side misread how intervals work. Step 4: $56\\%$ to $68\\%$ uses a $6$-point margin — a misread of the arithmetic.',
      },
      // SAT-pattern: what reduces margin of error
      {
        q: 'A poll\'s margin of error is $5\\%$. Which change would most likely reduce it?',
        options: ['Increasing the number of people surveyed', 'Decreasing the number of people surveyed', 'Reporting results as decimals instead of percents', 'Asking a more complicated question'],
        answer: 0,
        explanation: 'Step 1: Margin of error reflects how much a random sample\'s estimate can wander from the truth. Step 2: Larger random samples wander less: the margin shrinks as sample size grows. Step 3: Decreasing the sample does the reverse and makes the margin larger. Step 4: Format and wording changes do nothing to the underlying sampling variability.',
      },
      {
        q: 'A researcher quadruples the sample size from 400 to 1,600 respondents. The margin of error will most likely...',
        options: ['be cut to about half', 'be cut to about one quarter', 'stay the same', 'double'],
        answer: 0,
        explanation: 'Step 1: The margin scales like $\\frac{1}{\\sqrt{n}}$. Step 2: Quadrupling $n$ multiplies $\\sqrt{n}$ by $2$. Step 3: The margin divides by $2$: $5\\%$ becomes about $2.5\\%$. Step 4: Cutting to one quarter would require sixteen times the sample, not four.',
      },
      {
        q: 'A candidate is supported by $47\\%$ of a random sample of voters, with a $4\\%$ margin of error. Which claim is best supported by the data?',
        options: ['The true percentage of supporters is likely between $43\\%$ and $51\\%$', 'A majority of all voters support the candidate', 'Exactly $47\\%$ of all voters support the candidate', 'More than $51\\%$ of voters support the candidate'],
        answer: 0,
        explanation: 'Step 1: Build the interval: $47 \\pm 4$ gives $43\\%$ to $51\\%$. Step 2: Because the interval crosses $50\\%$, a majority claim is not established. Step 3: "Exactly $47\\%$" overclaims the precision the margin explicitly denies. Step 4: The supported claim is the interval statement itself.',
      },
    ],
  },
  // ---------------------------------------------------------------- 3.7
  {
    sectionId: 'math-sk3-s7',
    readingTime: 9,
    prerequisites: [
      'Reading study descriptions',
      'Random sampling and random assignment vocabulary',
    ],
    intro: 'The final Problem Solving and Data Analysis skill is verbal-mathematical: given a study description, decide whether it supports a causal claim, which population it describes, and what lurking variable it missed. The assessment body tests this heavily because it is the statistics skill everyday life demands — every headline is a study summary. These items are multiple-choice word problems, part of the roughly 30% of the 44 questions set in context, and they read like short reading-comprehension passages. Two of the four options are usually obviously wrong, so a careful read of the study design earns the point — and with no penalty for guessing, never leave one blank.',
    objectives: [
      'Distinguish observational studies from controlled experiments and identify each from its description',
      'Explain why random assignment — and not random sampling — is what licenses a causal conclusion',
      'Identify confounding variables that undermine a causal reading of an association',
      'Determine the population a random-sample result generalizes to',
    ],
    concepts: [
      {
        term: 'Observational study versus experiment',
        kind: 'definition',
        statement: 'An **observational study** measures people as they are; a **controlled experiment** actively assigns treatments to groups — only the experiment can isolate the effect of the treatment.',
        detail: '"Researchers surveyed coffee drinkers" is observational; "researchers randomly assigned volunteers to drink coffee or a placebo" is an experiment. The verb is the tell: *assign* signals an experiment, while *survey*, *record*, and *observe* signal observation.',
      },
      {
        term: 'Random assignment versus random sampling',
        kind: 'theorem',
        statement: '**Random assignment** of treatments controls confounding and supports **causal** conclusions; **random sampling** from a population supports **generalizing** to that population — they answer different questions.',
        detail: 'A volunteer experiment proves the drug caused the change — but only in volunteers. A random sample of a school proves the association holds schoolwide — but not that anything caused anything. The strongest design does both, and the assessment items ask which ingredient a study has.',
      },
      {
        term: 'Confounding variables',
        kind: 'definition',
        statement: 'A **confounding variable** is a third factor tied to both the suspected cause and the outcome, offering an alternative explanation for the association.',
        detail: 'Breakfast eaters score higher — but breakfast eaters may also sleep more, and sleep lifts scores too. A confounder must track *both* variables: favorite color predicts neither breakfast nor grades, so it is not a confounder. Spotting the dual-linked variable is the tested skill.',
      },
      {
        term: 'Association is not causation',
        kind: 'insight',
        statement: 'A strong association in observational data is real information, but **causation requires an experiment**: "linked", "associated", and "tends to" are valid conclusions; "causes", "leads to", and "because of" are not.',
        detail: 'Cities with more gyms have lower obesity — maybe gyms help, or maybe health-conscious cities build gyms, or wealth drives both. The assessment\'s correct answers hedge with association language while the causal options overclaim.',
      },
      {
        term: 'The population you can generalize to',
        kind: 'insight',
        statement: 'A random sample justifies conclusions about **the population it was drawn from — and nothing larger**: a random sample of one high school describes that high school, not the state.',
        detail: 'Match the sampling frame to the claim: sampling from the district\'s enrollment list supports district claims; sampling the students present in the gym supports only gym-goers. Larger populations need samples drawn from those populations.',
      },
    ],
    examples: [
      {
        title: 'Classify two studies',
        problem: 'Study A: researchers randomly assign 200 volunteers to take vitamin C or a placebo and compare cold rates. Study B: researchers survey 2,000 adults and find those taking vitamin C report fewer colds. Which supports a causal conclusion?',
        steps: [
          { label: 'Step 1', text: '```text\nA: random assignment => experiment => causation OK\nB: survey, self-selected => observational => association only\n```\nStudy A assigns the treatment: volunteers cannot choose their group, so the vitamin is the only systematic difference between groups.' },
          { label: 'Step 2', text: 'That random assignment controls for confounders like "already health-conscious", which spread evenly across the two groups instead of stacking in one.' },
          { label: 'Step 3', text: 'Study B observes self-chosen habits — health-conscious people may simply be more likely to choose vitamins (confounding).' },
          { label: 'Step 4', text: 'Conclusion: Study A supports "vitamin C reduces colds" among volunteers; Study B supports only "vitamin C takers report fewer colds".' },
        ],
        result: 'Study A, the randomized experiment, supports the causal claim.',
      },
      {
        title: 'Repairing a flawed design',
        problem: 'A company wants to know whether its new study app improves quiz scores. A first design gives the app to all volunteers and compares their scores to other students\'. What is the flaw, and what design fixes it?',
        steps: [
          { label: 'Step 1', text: '```text\nflaw: volunteers differ in motivation ; fix: random assignment\n```\nThe flaw: students who volunteer for a study app are likely more motivated, and motivation itself raises scores — a confounder.' },
          { label: 'Step 2', text: 'The comparison group also differs systematically, so any gain could belong to motivation, not the app.' },
          { label: 'Step 3', text: 'Fix: recruit a pool of students, then randomly assign half to the app and half to a standard alternative, keeping everything else equal.' },
          { label: 'Step 4', text: 'Random assignment spreads motivation evenly across groups, so a remaining score difference is attributable to the app.' },
        ],
        result: 'Confounded self-selection; random assignment repairs it.',
      },
      {
        title: 'Spot the confounder',
        problem: 'A study finds that students who eat breakfast have higher average test scores than students who skip it. A newspaper reports "eating breakfast causes higher test scores". What is a plausible confounding variable?',
        steps: [
          { label: 'Step 1', text: '```text\nneed a third factor linked to BOTH breakfast and scores\n```\nA confounder must influence or track both variables — not merely correlate with one.' },
          { label: 'Step 2', text: 'Regular sleep schedules lead students to wake in time for breakfast *and* improve alertness on tests.' },
          { label: 'Step 3', text: 'Household income could play the same dual role: supporting both breakfast habits and study conditions.' },
          { label: 'Step 4', text: 'Because these alternatives explain the association without breakfast doing any causal work, the newspaper\'s causal wording overstates an observational study.' },
        ],
        result: 'Sleep regularity (or household income) confounds the association.',
      },
    ],
    keyTakeaways: [
      'Observational studies observe; experiments assign treatments — only assignments license the word "causes".',
      'Random assignment supports causation; random sampling supports generalization — know which one a stem contains.',
      'A confounder must be linked to both the suspected cause and the outcome — test each candidate on both links.',
      'The valid conclusion from observational data is an association: "linked", "associated", "tend to".',
      'Generalize only to the population actually sampled — one school\'s random sample describes that school.',
    ],
    quiz: [
      {
        q: 'Which study provides the strongest evidence that a new note-taking method causes higher scores?',
        options: ['Two hundred students are randomly assigned to use the new method or their usual method, and their scores are compared', 'A survey finds that students who already use the method report higher scores', 'Students who volunteer to try the method are compared with students who decline', 'Scores are compared before and after the method was introduced schoolwide'],
        answer: 0,
        explanation: 'Step 1: A causal claim needs a controlled experiment with random assignment. Step 2: Only the first option assigns the method randomly, so group differences reduce to the method itself. Step 3: The survey and volunteer designs let self-selection and motivation confound the result. Step 4: The before-and-after design allows other time-varying factors — a new teacher, a new semester — to explain the change.',
      },
      // SAT-pattern: identify the confounding variable
      {
        q: 'Students who eat breakfast have a higher average GPA than students who skip it. Which of the following is a confounding variable?',
        options: ['Breakfast eaters tend to keep more regular sleep schedules, which also raises GPA', 'The survey was conducted during the fall semester', 'GPA is reported on a 4.0 scale', 'Some students eat breakfast at home and others at school'],
        answer: 0,
        explanation: 'Step 1: A confounder must be linked to both breakfast habits and GPA. Step 2: Regular sleep encourages waking in time for breakfast and independently improves grades — both links satisfied. Step 3: Semester timing, the GPA scale, and breakfast location do not plausibly drive both variables. Step 4: With sleep as an alternative explanation, the association cannot be read causally.',
      },
      {
        q: 'A researcher randomly samples 500 students from a district\'s enrollment list. Random sampling allows the researcher to...',
        options: ['generalize the results to all students in the district', 'conclude that any observed difference was caused by the treatment', 'eliminate all sampling variability', 'draw conclusions about all students in the country'],
        answer: 0,
        explanation: 'Step 1: Random sampling makes the sample representative of the frame it was drawn from: district enrollees. Step 2: Causation requires random assignment, which no sampling scheme provides. Step 3: Sampling variability shrinks with larger samples but never disappears. Step 4: Nothing in a district sample supports national claims — the population must match the frame.',
      },
      {
        q: 'A city with many libraries has a high average income. An analyst concludes that libraries increase income. Which conclusion is actually supported?',
        options: ['Library count and average income are associated, but causation is not established', 'Libraries cause higher income', 'Higher income causes cities to build fewer libraries', 'The analysis proves libraries are unnecessary'],
        answer: 0,
        explanation: 'Step 1: The data is observational — no treatments were assigned. Step 2: Wealthier cities may build more libraries, or a third factor like education level could drive both. Step 3: So only an association is supported: the two variables move together. Step 4: Both causal directions, and any policy conclusion, go beyond what an observational association can show.',
      },
    ],
  },
  // ---------------------------------------------------------------- 4.2
  {
    sectionId: 'math-sk4-s2',
    readingTime: 10,
    prerequisites: [
      'Solving linear equations (Section 1.1)',
      'Basic angle vocabulary: acute, obtuse, supplementary',
    ],
    intro: 'Lines, angles, and triangles form the classic half of the Geometry and Trigonometry domain — about 15% of the assessment\'s 44 questions, spread across both adaptive modules. The items reward pattern recognition over heavy computation: spot the transversal, spot the similar triangles, and the answer falls out in a step or two. Desmos cannot label an angle for you, so this strand runs on memorized theorems, and roughly 30% of the section arrives as in-context stories about ramps, shadows, and bridges. There is no penalty for guessing, so an angle diagram is never worth skipping.',
    objectives: [
      'Apply the triangle sum and exterior angle theorems to find unknown angles',
      'Identify angle pairs formed by parallel lines and a transversal, including algebra-based items',
      'Establish congruence with SSS, SAS, and ASA, and similarity with AA',
      'Use similarity ratios to solve for unknown side lengths in context',
    ],
    concepts: [
      {
        term: 'Triangle sum and exterior angles',
        kind: 'theorem',
        statement: 'A triangle\'s interior angles sum to $180^{\\circ}$; an **exterior angle** equals the sum of the two **remote interior angles** — with remote interiors $35^{\\circ}$ and $65^{\\circ}$, the exterior angle is $100^{\\circ}$.',
        detail: 'Algebra version: angles $2x, 3x, 4x$ sum to $180^{\\circ}$, so $x = 20^{\\circ}$ and the largest angle is $80^{\\circ}$. The exterior-angle shortcut beats extending the side and using the linear pair — one equation instead of two.',
      },
      {
        term: 'Parallel lines and transversals',
        kind: 'theorem',
        statement: 'When a transversal cuts parallel lines: **corresponding and alternate interior (and exterior) angles are equal; same-side interior angles sum to $180^{\\circ}$** — and vertical angles are always equal, parallel or not.',
        detail: 'Given one $65^{\\circ}$ angle, its same-side interior partner is $115^{\\circ}$, and every other angle in the diagram is one of those two measures. the assessment items hide the parallel lines among three or four lines — mark the arrowheads first, then classify pair by pair.',
      },
      {
        term: 'Congruence criteria',
        kind: 'theorem',
        statement: 'Triangles are congruent given three pairs of equal sides (**SSS**), two sides with the included angle (**SAS**), or two angles with the included side (**ASA**) — congruent triangles have **all** corresponding parts equal.',
        detail: '**AAA fails for congruence** — matching angles guarantee only similarity, and **SSA fails entirely** because two different triangles fit the same data. The assessment lists the criteria as options and asks which applies; for AAA-matching triangles the answer is always "similar, not necessarily congruent".',
      },
      {
        term: 'Similarity and AA',
        kind: 'theorem',
        statement: 'Two pairs of equal angles (**AA**) make triangles **similar**: all angles match and corresponding sides are proportional — a scale factor changes **lengths, never angles**.',
        detail: 'Doubling a triangle\'s sides doubles its perimeter but leaves every angle measure identical — that invariance is why angle facts survive scaling. Side proportionality converts directly to equations: if $\\frac{AB}{DE} = \\frac{BC}{EF}$ with $AB = 4$, $DE = 6$, $BC = 10$, then $EF = 15$.',
      },
      {
        term: 'Using similarity ratios',
        kind: 'method',
        statement: 'Match corresponding parts — same position relative to the equal angles — then set up a **part-to-part proportion** and cross-multiply: heights compare as shadows compare.',
        detail: 'A $1.8$-meter person casting a $2.4$-meter shadow next to a tree casting a $12$-meter shadow gives $\\frac{h}{12} = \\frac{1.8}{2.4}$, so $h = 9$ meters. The two traps: matching a side to a non-corresponding side, and mixing part-to-part with part-to-whole ratios.',
      },
    ],
    examples: [
      {
        title: 'A transversal item with algebra',
        problem: 'Two parallel lines are cut by a transversal. Two same-side interior angles measure $(2x + 10)^{\\circ}$ and $(3x + 20)^{\\circ}$. Find $x$ and both angles.',
        steps: [
          { label: 'Step 1', text: '```text\nsame-side interior: (2x + 10) + (3x + 20) = 180\n```\nSame-side interior angles between parallel lines are supplementary.' },
          { label: 'Step 2', text: 'Add and solve: $5x + 30 = 180$, so $5x = 150$ and $x = 30$.' },
          { label: 'Step 3', text: 'The angles: $2(30) + 10 = 70^{\\circ}$ and $3(30) + 20 = 110^{\\circ}$.' },
          { label: 'Step 4', text: 'Check: $70 + 110 = 180$ ✓ — and every angle in the diagram is now known, since each is vertical, corresponding, or alternate to one of these two.' },
        ],
        result: '$x = 30$; the angles are $70^{\\circ}$ and $110^{\\circ}$.',
      },
      {
        title: 'A tree from its shadow',
        problem: 'A person $1.8$ meters tall casts a $2.4$-meter shadow while a nearby tree casts a $12$-meter shadow. How tall is the tree?',
        steps: [
          { label: 'Step 1', text: '```text\nsimilar triangles (AA: sun rays) ; h/12 = 1.8/2.4\n```\nThe sun\'s rays make equal angles with person and tree, and both stand vertical — AA similarity between the two height–shadow right triangles.' },
          { label: 'Step 2', text: 'Height corresponds to height, shadow to shadow: $\\frac{h}{12} = \\frac{1.8}{2.4}$.' },
          { label: 'Step 3', text: 'Cross-multiply: $h = \\frac{1.8 \\times 12}{2.4} = \\frac{21.6}{2.4} = 9$ meters.' },
          { label: 'Step 4', text: 'Sanity check: the tree\'s shadow is $5$ times the person\'s, so the tree is $5 \\times 1.8 = 9$ meters tall — the scale factor confirms the proportion. ✓' },
        ],
        result: 'The tree is $9$ meters tall.',
      },
      {
        title: 'Exterior angle with algebra',
        problem: 'In a triangle, two remote interior angles measure $35^{\\circ}$ and $(4x)^{\\circ}$, and the exterior angle at the third vertex measures $(5x + 10)^{\\circ}$. Find $x$.',
        steps: [
          { label: 'Step 1', text: '```text\n35 + 4x = 5x + 10 ; (exterior = remote sum)\n```\nThe exterior angle equals the sum of the remote interior angles: $35 + 4x = 5x + 10$.' },
          { label: 'Step 2', text: 'Subtract $4x$: $35 = x + 10$.' },
          { label: 'Step 3', text: 'Solve: $x = 25$, making the remote angles $35^{\\circ}$ and $100^{\\circ}$.' },
          { label: 'Step 4', text: 'Verify: the exterior angle is $5(25) + 10 = 135^{\\circ}$, and $35 + 100 = 135$ ✓ — the third interior angle is $45^{\\circ}$, keeping the triangle sum at $180^{\\circ}$.' },
        ],
        result: '$x = 25$',
      },
    ],
    keyTakeaways: [
      'Interior angles sum to $180^{\\circ}$; an exterior angle equals the sum of the two remote interiors — one equation replaces two.',
      'Parallel lines plus a transversal: corresponding and alternate angles match, same-side interior angles supplement, and vertical angles always match.',
      'Congruence needs SSS, SAS, or ASA — AAA gives similarity only, and SSA gives nothing.',
      'AA similarity makes corresponding sides proportional: match parts carefully, then cross-multiply.',
      'Scale factors change lengths, never angle measures — every scaled copy keeps its angles.',
    ],
    quiz: [
      {
        q: 'A triangle\'s angles measure $2x^{\\circ}$, $3x^{\\circ}$, and $4x^{\\circ}$. What is the value of $x$?',
        options: ['$15$', '$20$', '$30$', '$36$'],
        answer: 1,
        explanation: 'Step 1: The angles sum to $180^{\\circ}$: $2x + 3x + 4x = 180$. Step 2: Combine: $9x = 180$. Step 3: $x = 20$. Step 4: $30$ comes from $\\frac{180}{6}$, miscounting the number of angle units — the actual angles are $40^{\\circ}$, $60^{\\circ}$, and $80^{\\circ}$.',
      },
      // SAT-pattern: same-side interior versus alternate interior
      {
        q: 'Two parallel lines are cut by a transversal. One angle measures $65^{\\circ}$. What is the measure of a same-side interior angle?',
        options: ['$65^{\\circ}$', '$115^{\\circ}$', '$25^{\\circ}$', '$90^{\\circ}$'],
        answer: 1,
        explanation: 'Step 1: Same-side interior angles between parallel lines are supplementary. Step 2: $180 - 65 = 115$. Step 3: The same-side interior partner is $115^{\\circ}$. Step 4: $65^{\\circ}$ is the measure of the *alternate interior and corresponding* partners — the classic pair-type mixup.',
      },
      {
        q: 'Triangles $ABC$ and $DEF$ are similar, with $\\frac{AB}{DE} = \\frac{BC}{EF}$. If $AB = 4$, $DE = 6$, and $BC = 10$, what is $EF$?',
        options: ['$12$', '$15$', '$8$', '$18$'],
        answer: 1,
        explanation: 'Step 1: Set up the proportion: $\\frac{4}{6} = \\frac{10}{EF}$. Step 2: Cross-multiply: $4 \\cdot EF = 60$. Step 3: $EF = 15$. Step 4: $12$ adds the $2$-unit difference $6 - 4$ to $10$ — similarity scales by the ratio $\\frac{6}{4}$, not by adding differences.',
      },
      {
        q: 'Which criterion is sufficient to conclude that two triangles are congruent?',
        options: ['$\\text{SSS}$', '$\\text{AAA}$', '$\\text{SSA}$', 'Two equal angles'],
        answer: 0,
        explanation: 'Step 1: The congruence criteria are SSS, SAS, and ASA (with AAS). Step 2: AAA forces equal angles but leaves size free — that is similarity. Step 3: SSA is famously ambiguous: two non-congruent triangles can share the same SSA data. Step 4: Two equal angles alone is only partial AA — also just similarity.',
      },
    ],
  },
  // ---------------------------------------------------------------- 4.3
  {
    sectionId: 'math-sk4-s3',
    readingTime: 11,
    prerequisites: [
      'Pythagorean theorem basics',
      'Solving proportions (Section 3.1)',
      'Simplifying radicals (Section 2.1)',
    ],
    intro: 'Right-triangle trigonometry is the most technical strand of the Geometry and Trigonometry domain — about 15% of the assessment, with the special-triangle ratios printed on the reference sheet. Desmos computes `sin(35)` or `arctan(0.7)` on every question, so the work shifts to setting up the correct ratio. Expect the classic 3-4-5 triples, the 45–45–90 and 30–60–90 patterns, degree–radian conversion, and the sine–cosine complement swap. Items are ordered easiest to hardest within each 35-minute module, and a memorized triple is what keeps the hard ones fast — with no penalty for guessing, a partial setup still deserves an answer.',
    objectives: [
      'Apply the Pythagorean theorem and recognize common triples and their multiples',
      'Use the 45–45–90 and 30–60–90 special right triangle ratios to find sides quickly',
      'Solve for sides and angles with sine, cosine, and tangent, including inverse trig',
      'Relate sine and cosine of complementary angles and convert between degrees and radians',
    ],
    concepts: [
      {
        term: 'Pythagorean theorem',
        kind: 'theorem',
        statement: 'For legs $a, b$ and hypotenuse $c$: $a^2 + b^2 = c^2$ — and the triples $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$, $7$-$24$-$25$ and their multiples $(6, 8, 10)$, $(9, 12, 15)$, $(10, 24, 26)$ appear verbatim on the test.',
        detail: 'Legs $9$ and $12$ give hypotenuse $15$ on sight — a scaled 3-4-5. The hypotenuse is always the longest side and sits opposite the right angle; plugging a leg into $c$\'s slot is the sign error. The theorem also tests right angles in reverse: sides $6, 8, 11$ cannot form a right triangle since $36 + 64 \\ne 121$.',
      },
      {
        term: 'Special right triangles',
        kind: 'theorem',
        statement: 'In a **45–45–90** triangle the legs are $x$ and the hypotenuse is $x\\sqrt{2}$; in a **30–60–90** triangle the short leg (opposite $30^{\\circ}$) is $x$, the long leg is $x\\sqrt{3}$, and the hypotenuse is $2x$.',
        detail: 'Hypotenuse $12$ in a 30-60-90 makes the short leg $6$ and the long leg $6\\sqrt{3}$. These ratios come from slicing a square or an equilateral triangle in half — the reference sheet gives the ratios, but identifying which side is *short* is on you.',
      },
      {
        term: 'Trig ratios',
        kind: 'method',
        statement: '**SOH CAH TOA**: $\\sin\\theta = \\frac{\\text{opposite}}{\\text{hypotenuse}}$, $\\cos\\theta = \\frac{\\text{adjacent}}{\\text{hypotenuse}}$, $\\tan\\theta = \\frac{\\text{opposite}}{\\text{adjacent}}$ — the hypotenuse never changes, but opposite and adjacent depend on the chosen angle.',
        detail: 'A kite string of $60$ meters at a $40^{\\circ}$ angle has height $60\\sin(40^{\\circ}) \\approx 38.6$ meters — type `60sin(40)` in Desmos in degree mode. For unknown angles use inverses: `arctan(3/4)` returns about $36.9^{\\circ}$. Label opposite and adjacent at the angle *before* writing the ratio.',
      },
      {
        term: 'Complementary angles',
        kind: 'theorem',
        statement: 'Sine and cosine swap under complement: $\\sin(x) = \\cos(90^{\\circ} - x)$ — so $\\sin(20^{\\circ}) = \\cos(70^{\\circ})$, and each is the other\'s complement partner.',
        detail: 'In one right triangle the two acute angles are complements, and the side opposite one is adjacent to the other — the swap is built into the triangle. the assessment stems ask "which expression equals $\\sin(20^{\\circ})$" and plant $\\cos(20^{\\circ})$ and $\\sin(70^{\\circ})$ beside the correct $\\cos(70^{\\circ})$.',
      },
      {
        term: 'Degrees, radians, and the unit circle',
        kind: 'notation',
        statement: '$\\pi \\text{ radians} = 180^{\\circ}$, so an angle of $\\theta$ degrees becomes $\\theta \\cdot \\frac{\\pi}{180}$ radians; a unit-circle point at angle $\\theta$ is $(\\cos\\theta, \\sin\\theta)$.',
        detail: 'Convert $135^{\\circ}$: $135 \\cdot \\frac{\\pi}{180} = \\frac{3\\pi}{4}$. In quadrant II cosine is negative and sine positive — the point at $\\frac{3\\pi}{4}$ is $\\left(-\\frac{\\sqrt{2}}{2}, \\frac{\\sqrt{2}}{2}\\right)$. Desmos accepts either unit, so the test asks you to choose correctly, not to compute painfully.',
      },
    ],
    examples: [
      {
        title: 'A ladder against a wall',
        problem: 'A $13$-foot ladder leans against a wall with its base $5$ feet from the wall. How high up the wall does the ladder reach?',
        steps: [
          { label: 'Step 1', text: '```text\n5-12-13 triple: 5^2 + h^2 = 13^2\n```\nThe ladder, wall, and ground form a right triangle with hypotenuse $13$ (the ladder) and one leg $5$.' },
          { label: 'Step 2', text: 'Pythagorean theorem: $5^2 + h^2 = 13^2$, so $25 + h^2 = 169$.' },
          { label: 'Step 3', text: 'Subtract: $h^2 = 144$, so $h = 12$ feet.' },
          { label: 'Step 4', text: 'Recognize the $5$-$12$-$13$ triple — no arithmetic needed on test day once the family is memorized; any multiple like $10$-$24$-$26$ works the same way.' },
        ],
        result: 'The ladder reaches $12$ feet up the wall.',
      },
      {
        title: 'The height of an equilateral triangle',
        problem: 'An equilateral triangle has side length $6$. What are its height and its area?',
        steps: [
          { label: 'Step 1', text: '```text\n30-60-90: half-base 3 (short leg) ; height = 3*sqrt(3)\n```\nDrop the altitude: it bisects the base into $3$ and $3$ and creates a 30-60-90 triangle with short leg $3$.' },
          { label: 'Step 2', text: 'The altitude is the long leg: $3\\sqrt{3}$.' },
          { label: 'Step 3', text: 'Area: $\\frac{1}{2} \\cdot \\text{base} \\cdot \\text{height} = \\frac{1}{2} \\cdot 6 \\cdot 3\\sqrt{3} = 9\\sqrt{3}$.' },
          { label: 'Step 4', text: 'Check with the Pythagorean theorem: $3^2 + h^2 = 6^2$ gives $h^2 = 27$ and $h = 3\\sqrt{3}$ ✓ — the special triangle and the theorem agree.' },
        ],
        result: 'Height $3\\sqrt{3}$; area $9\\sqrt{3}$.',
      },
      {
        title: 'A kite string at an angle',
        problem: 'A kite string $60$ meters long makes a $40^{\\circ}$ angle with the ground. How high is the kite above the ground?',
        steps: [
          { label: 'Step 1', text: '```text\nsin(40) = height/60 ; height = 60*sin(40)\n```\nThe string is the hypotenuse; the height is the side **opposite** the $40^{\\circ}$ ground angle.' },
          { label: 'Step 2', text: 'Opposite over hypotenuse is sine: $\\sin(40^{\\circ}) = \\frac{h}{60}$.' },
          { label: 'Step 3', text: 'Solve: $h = 60\\sin(40^{\\circ})$; Desmos in degree mode gives $h \\approx 38.6$ meters.' },
          { label: 'Step 4', text: 'The cosine would give the ground distance $60\\cos(40^{\\circ}) \\approx 46$ meters — choosing the wrong ratio is the built-in trap, so label opposite and adjacent first.' },
        ],
        result: 'About $38.6$ meters high.',
      },
    ],
    keyTakeaways: [
      'Pythagorean theorem $a^2 + b^2 = c^2$ with the hypotenuse opposite the right angle; memorize $3$-$4$-$5$, $5$-$12$-$13$, $8$-$15$-$17$ and their multiples.',
      '45–45–90: legs $x$, hypotenuse $x\\sqrt{2}$; 30–60–90: short leg $x$, long leg $x\\sqrt{3}$, hypotenuse $2x$.',
      'SOH CAH TOA — label opposite and adjacent at the chosen angle before writing any ratio; use inverses to find angles.',
      'Complements swap sine and cosine: $\\sin(x) = \\cos(90^{\\circ} - x)$.',
      'Multiply by $\\frac{\\pi}{180}$ to go from degrees to radians; unit-circle points are $(\\cos\\theta, \\sin\\theta)$ with signs by quadrant.',
    ],
    quiz: [
      {
        q: 'A right triangle has legs of length $9$ and $12$. What is the length of the hypotenuse?',
        options: ['$15$', '$21$', '$13$', '$15\\sqrt{2}$'],
        answer: 0,
        explanation: 'Step 1: Apply $a^2 + b^2 = c^2$: $81 + 144 = c^2$. Step 2: $c^2 = 225$, so $c = 15$. Step 3: Recognize the scaled triple: $9$-$12$-$15$ is $3$ times $3$-$4$-$5$. Step 4: $21$ adds the legs — the hypotenuse is shorter than that sum, never equal to it.',
      },
      {
        q: '$\\sin(20^{\\circ})$ is equal to which of the following?',
        options: ['$\\cos(20^{\\circ})$', '$\\cos(70^{\\circ})$', '$\\sin(70^{\\circ})$', '$\\tan(70^{\\circ})$'],
        answer: 1,
        explanation: 'Step 1: Complementary angles swap sine and cosine: $\\sin(x) = \\cos(90^{\\circ} - x)$. Step 2: With $x = 20^{\\circ}$, the complement is $70^{\\circ}$. Step 3: So $\\sin(20^{\\circ}) = \\cos(70^{\\circ})$. Step 4: $\\cos(20^{\\circ}) = \\sin(70^{\\circ})$ — the same identity in reverse, planted as the mirror trap.',
      },
      // SAT-pattern: 30-60-90 side ratios
      {
        q: 'The hypotenuse of a 30-60-90 triangle is $12$. What is the length of the longer leg?',
        options: ['$6\\sqrt{3}$', '$6$', '$12\\sqrt{3}$', '$4\\sqrt{3}$'],
        answer: 0,
        explanation: 'Step 1: In a 30-60-90 triangle the hypotenuse $2x$ is twice the short leg, so $x = 6$. Step 2: The long leg is $x\\sqrt{3}$. Step 3: So the long leg is $6\\sqrt{3}$. Step 4: $12\\sqrt{3}$ multiplies the *hypotenuse* by $\\sqrt{3}$ — the most common special-triangle slip.',
      },
      {
        q: 'What is $135^{\\circ}$ expressed in radians?',
        options: ['$\\frac{3\\pi}{4}$', '$\\frac{2\\pi}{3}$', '$\\frac{5\\pi}{6}$', '$\\frac{7\\pi}{6}$'],
        answer: 0,
        explanation: 'Step 1: Multiply by the conversion factor: $135 \\cdot \\frac{\\pi}{180}$. Step 2: Simplify: $\\frac{135\\pi}{180} = \\frac{3\\pi}{4}$. Step 3: Check: $\\frac{3\\pi}{4}$ is $\\frac{3}{4}$ of $\\pi$, and $\\frac{3}{4}$ of $180^{\\circ}$ is $135^{\\circ}$. ✓ Step 4: $\\frac{5\\pi}{6}$ is $150^{\\circ}$ and $\\frac{2\\pi}{3}$ is $120^{\\circ}$ — nearby angles planted as distractors.',
      },
    ],
  },
  // ---------------------------------------------------------------- 4.4
  {
    sectionId: 'math-sk4-s4',
    readingTime: 10,
    prerequisites: [
      'Distance and midpoint ideas from the coordinate plane',
      'Completing the square (Section 2.2)',
      'Area and circumference of circles (Section 4.1)',
    ],
    intro: 'Circles close out the Math assessment with three flavors: vocabulary-driven angle items, arc-and-sector computations, and circle equations in the coordinate plane. As the last skill of the Geometry and Trigonometry domain — about 15% of the 44 questions — it leans on the distance formula and completing the square, both already in your toolkit from earlier domains. Desmos graphs a general-form circle directly and marks its center, which makes it a superb checker; the most planted trap is reporting the radius as $25$ instead of $5$. Circle-equation items tend to sit late in each adaptive module where questions are hardest, so bank time early — and never leave one blank, since guessing is penalty-free.',
    objectives: [
      'Use circle vocabulary — radius, diameter, chord, tangent, secant — and the tangent–radius perpendicularity',
      'Relate central angles, inscribed angles, and arc measures; compute arc length and sector area',
      'Convert between general and standard form using completing the square, then read off center and radius',
      'Apply the distance formula to test points on a circle and find a circle through given points',
    ],
    concepts: [
      {
        term: 'Circle anatomy',
        kind: 'definition',
        statement: 'A **circle** is all points at distance $r$ (the **radius**) from the center; the **diameter** is $2r$, a **chord** joins two circle points, a **secant** crosses through two, and a **tangent** touches exactly one — and a **tangent is perpendicular to the radius** at the point of tangency.',
        detail: 'That right angle is the hidden workhorse: tangent–radius creates right triangles, Pythagorean opportunities, and a $90^{\\circ}$ angle in otherwise unmarked diagrams. the assessment items also rely on the diameter being the longest chord and on the two tangent segments from an external point having equal lengths.',
      },
      {
        term: 'Central and inscribed angles',
        kind: 'theorem',
        statement: 'A **central** angle equals its arc; an **inscribed** angle is **half** the arc it intercepts — an arc of $80^{\\circ}$ gives central angle $80^{\\circ}$ and any inscribed angle on that arc $40^{\\circ}$.',
        detail: 'Diameter corollary: an angle inscribed in a semicircle is $90^{\\circ}$, because a $180^{\\circ}$ arc halves to $90^{\\circ}$. The classic errors are reporting the arc as the inscribed angle or doubling the arc into the central angle — anchor on "inscribed is half".',
      },
      {
        term: 'Arc length and sector area',
        kind: 'method',
        statement: 'Arc length is the **same fraction of the circumference** as the arc measure is of $360^{\\circ}$: $\\text{arc} = \\frac{\\theta}{360^{\\circ}} \\cdot 2\\pi r$, and sector area $= \\frac{\\theta}{360^{\\circ}} \\cdot \\pi r^2$; in radians, $s = r\\theta$ and $A = \\frac{1}{2}r^2\\theta$.',
        detail: 'A $60^{\\circ}$ sector of a radius-$6$ circle: arc $\\frac{1}{6} \\cdot 12\\pi = 2\\pi$ and sector $\\frac{1}{6} \\cdot 36\\pi = 6\\pi$. Reduce the fraction $\\frac{\\theta}{360}$ first — the arithmetic shrinks and the un-reduced distractors miss.',
      },
      {
        term: 'Standard form of a circle',
        kind: 'method',
        statement: '**Standard form** $(x - h)^2 + (y - k)^2 = r^2$ has center $(h, k)$ and radius $r$ — note the **sign flip**: $(x + 3)^2$ means $h = -3$, and the right side is $r$ *squared*, so $49$ means $r = 7$.',
        detail: 'From a general equation like $x^2 + y^2 - 6x + 4y - 12 = 0$, complete the square twice to reach $(x - 3)^2 + (y + 2)^2 = 25$: center $(3, -2)$, radius $5$. Desmos graphs the general form directly — type it in and click the center to check your algebra.',
      },
      {
        term: 'The distance formula is a circle test',
        kind: 'theorem',
        statement: '$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ is the Pythagorean theorem in coordinates — a point lies on the circle exactly when its distance to the center equals $r$.',
        detail: 'Is $(4, 4)$ on $(x - 1)^2 + y^2 = 25$? Compute $(4 - 1)^2 + 4^2 = 9 + 16 = 25$ ✓ — yes, without ever finding the center. Recognize hidden triples: a center $(-2, 3)$ and point $(10, 8)$ differ by $(12, 5)$, so the radius is $13$.',
      },
    ],
    examples: [
      {
        title: 'Completing the square, twice',
        problem: 'The circle $x^2 + y^2 - 6x + 4y - 12 = 0$ is graphed in the $xy$-plane. What are its center and radius?',
        steps: [
          { label: 'Step 1', text: '```text\ngroup x and y ; move constant: x^2-6x + y^2+4y = 12\n```\nMove the constant right and group: $(x^2 - 6x) + (y^2 + 4y) = 12$.' },
          { label: 'Step 2', text: 'Complete each square: $x^2 - 6x + 9 = (x - 3)^2$ and $y^2 + 4y + 4 = (y + 2)^2$, adding $9 + 4 = 13$ to the left.' },
          { label: 'Step 3', text: 'Balance: $(x - 3)^2 + (y + 2)^2 = 12 + 13 = 25$.' },
          { label: 'Step 4', text: 'Read off: center $(3, -2)$ and radius $\\sqrt{25} = 5$ — reporting radius $25$ is the trap, since the right side is squared. Graph in Desmos to confirm.' },
        ],
        result: 'Center $(3, -2)$, radius $5$.',
      },
      {
        title: 'Arc and sector together',
        problem: 'A sector of a circle with radius $6$ has central angle $60^{\\circ}$. What are its arc length and area?',
        steps: [
          { label: 'Step 1', text: '```text\nfraction = 60/360 = 1/6 ; C = 12pi ; A = 36pi\n```\nThe fraction of the circle is $\\frac{60}{360} = \\frac{1}{6}$.' },
          { label: 'Step 2', text: 'Circumference: $2\\pi r = 12\\pi$, so the arc is $\\frac{1}{6} \\cdot 12\\pi = 2\\pi$.' },
          { label: 'Step 3', text: 'Whole area: $\\pi r^2 = 36\\pi$, so the sector is $\\frac{1}{6} \\cdot 36\\pi = 6\\pi$.' },
          { label: 'Step 4', text: 'In radians the angle is $\\frac{\\pi}{3}$: arc $r\\theta = 6 \\cdot \\frac{\\pi}{3} = 2\\pi$ ✓ and area $\\frac{1}{2}r^2\\theta = 18 \\cdot \\frac{\\pi}{3} = 6\\pi$ ✓ — both routes agree.' },
        ],
        result: 'Arc length $2\\pi$; sector area $6\\pi$.',
      },
      {
        title: 'An inscribed angle',
        problem: 'In circle $O$, the central angle $\\angle AOB$ measures $100^{\\circ}$. What is the measure of an inscribed angle $\\angle APB$ whose vertex $P$ lies on the circle and intercepts the same arc $\\widehat{AB}$?',
        steps: [
          { label: 'Step 1', text: '```text\narc AB = central angle = 100 deg\n```\nThe arc $\\widehat{AB}$ carries the same measure as the central angle that cuts it off: $100^{\\circ}$.' },
          { label: 'Step 2', text: 'An inscribed angle intercepting that arc is half of it: $\\frac{100^{\\circ}}{2}$.' },
          { label: 'Step 3', text: 'So $\\angle APB = 50^{\\circ}$, regardless of where $P$ sits on the major arc — every inscribed position gives the same measure.' },
          { label: 'Step 4', text: 'The planted distractors are $100^{\\circ}$ (copying the arc) and $200^{\\circ}$ (doubling it); anchor on "inscribed is half".' },
        ],
        result: '$50^{\\circ}$',
      },
    ],
    keyTakeaways: [
      'A tangent is perpendicular to the radius at the point of tangency — hunt for that right angle in every circle diagram.',
      'Central angle $=$ arc measure; inscribed angle $=$ half the intercepted arc; an angle in a semicircle is $90^{\\circ}$.',
      'Arc and sector scale by $\\frac{\\theta}{360^{\\circ}}$ of the full circumference and area; in radians, $s = r\\theta$ and $A = \\frac{1}{2}r^2\\theta$.',
      'Standard form $(x - h)^2 + (y - k)^2 = r^2$: center $(h, k)$ with sign flips, radius $\\sqrt{\\text{right side}}$ — $49$ means radius $7$.',
      'Test circle membership with the distance formula — or substitute into standard form directly; hidden 5-12-13 and 3-4-5 triples make centers and radii integers.',
    ],
    quiz: [
      {
        q: 'The graph of $(x + 3)^2 + (y - 2)^2 = 49$ is a circle. What are its center and radius?',
        options: ['Center $(-3, 2)$, radius $7$', 'Center $(3, -2)$, radius $7$', 'Center $(-3, 2)$, radius $49$', 'Center $(3, -2)$, radius $49$'],
        answer: 0,
        explanation: 'Step 1: Match $(x - h)^2 + (y - k)^2 = r^2$. Step 2: $(x + 3)^2 = (x - (-3))^2$ gives $h = -3$, and $(y - 2)^2$ gives $k = 2$. Step 3: The right side is $r^2 = 49$, so $r = 7$. Step 4: Both traps appear: flipped signs and radius $49$ — the squared-radius misread is the most common circle error.',
      },
      // SAT-pattern: radius versus diameter in an arc computation
      {
        q: 'A circle has diameter $12$. What is the length of a $120^{\\circ}$ arc?',
        options: ['$4\\pi$', '$8\\pi$', '$12\\pi$', '$2\\pi$'],
        answer: 0,
        explanation: 'Step 1: The arc fraction is $\\frac{120}{360} = \\frac{1}{3}$. Step 2: The radius is half the diameter: $r = 6$, so the circumference is $2\\pi(6) = 12\\pi$. Step 3: Arc length: $\\frac{1}{3} \\cdot 12\\pi = 4\\pi$. Step 4: $8\\pi$ comes from treating the diameter as the radius — the classic radius-versus-diameter slip; $12\\pi$ is the full circumference.',
      },
      {
        q: 'In a circle, arc $\\widehat{AB}$ measures $70^{\\circ}$. What is the measure of an inscribed angle that intercepts $\\widehat{AB}$?',
        options: ['$35^{\\circ}$', '$70^{\\circ}$', '$140^{\\circ}$', '$110^{\\circ}$'],
        answer: 0,
        explanation: 'Step 1: The intercepted arc is $70^{\\circ}$. Step 2: An inscribed angle is half its intercepted arc. Step 3: $\\frac{70}{2} = 35^{\\circ}$. Step 4: $70^{\\circ}$ copies the arc and $140^{\\circ}$ doubles it — both violate the half rule.',
      },
      {
        q: 'Which point lies on the circle $(x - 1)^2 + y^2 = 25$?',
        options: ['$(4, 4)$', '$(5, 1)$', '$(3, 3)$', '$(6, 3)$'],
        answer: 0,
        explanation: 'Step 1: Substitute each point into the left side. Step 2: $(4, 4)$: $(4 - 1)^2 + 4^2 = 9 + 16 = 25$ ✓. Step 3: $(5, 1)$: $16 + 1 = 17$; $(3, 3)$: $4 + 9 = 13$; $(6, 3)$: $25 + 9 = 34$ — all fail. Step 4: Only $(4, 4)$ satisfies the equation, sitting exactly $5$ units from the center $(1, 0)$.',
      },
    ],
  },
]
