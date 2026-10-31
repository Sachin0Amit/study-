/**
 * Knowledge Universe — Mathematics — Chapter 06: Probability & Statistics
 * 8 lessons · ~12,979 words
 * fields: Mathematics, Probability & Statistics
 * legacy sources: mathematics.ts, x24-gap-closing-pass.ts, x56-vce-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Probability & Statistics, Mathematics]
 *
 * Lessons (snapshot at reorganization):
 *   06.1 stats-time-series-trend-seasonality — Time Series: Trend, Seasonality and Forecasting from Data Ordered in Time
 *   06.2 math-cumulative-frequency-box-plots — Quartiles, Cumulative Frequency and Box Plots
 *   06.3 math-reading-data-charts — Reading Data: Bar Charts, Line Graphs, Pie Charts and Combined Sources
 *   06.4 math-bayes-theorem — Bayes’ Theorem and Updating Beliefs
 *   06.5 stats-descriptive-distributions — Describing Data: Center, Spread and the Normal Distribution
 *   06.6 stats-sampling-central-limit — Sampling and the Central Limit Theorem
 *   06.7 stats-confidence-hypothesis-testing — Confidence Intervals and Hypothesis Testing
 *   06.8 stats-correlation-regression — Correlation and Linear Regression
 */
import type { KnowledgeTopic } from '../../types'

export const mathematicsUnifiedCh06: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'stats-time-series-trend-seasonality',
    title: 'Time Series: Trend, Seasonality and Forecasting from Data Ordered in Time',
    domain: 'Mathematics',
    field: 'Probability & Statistics',
    branch: 'Applied Statistics',
    tier: 'core',
    concepts: [
      'Time series: observations ordered and equally spaced in time',
      'Trend, seasonal, cyclical and irregular components',
      'Seasonal indices and deseasonalising a series',
      'Moving means and moving medians for smoothing',
      'Forecasting from fitted trends and seasonally adjusted values',
      'Extrapolation risk: when the past stops predicting',
    ],
    words: 1767,
    readMins: 9,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: "Almost every dataset a business, a hospital or a government owns is ordered in time: monthly sales, daily emergency presentations, quarterly inflation. Such data breaks the usual statistical assumption of independent observations — this month's sales resemble last month's — and so it needs its own toolkit. A time series is a set of observations recorded at successive, usually equally spaced points in time, and its analysis asks three questions: what is the series' long-run DIRECTION (trend), what regular WITHIN-YEAR pattern repeats (seasonality), and what can legitimately be predicted about the next period? The VCE General Mathematics data-analysis strand examines exactly this toolkit — plots, trends, seasonal indices, smoothing, forecasting — and this lesson builds it from first principles.",
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: "The regression lesson in this field fits lines through scattered POINTS; time series analysis fits structure through ORDERED history, and the difference in care required is enormous. Read any news story about 'record temperatures', 'seasonal hiring' or 'deseasonalised inflation' and you are watching this toolkit in use: the figure quoted is almost always a deseasonalised or smoothed value, not the raw one, because raw monthly numbers mislead systematically. Learning to see trend, seasonality and noise as SEPARATE components — and to recombine them honestly for forecasts — is one of the most immediately practical skills in applied statistics.",
      },
      { kind: 'heading', text: 'Reading the Series: Components and Plots' },
      {
        kind: 'para',
        text: "A time series plot puts TIME on the horizontal axis — always time, and the axis must be labelled with its units — and the observed value on the vertical, joining successive points with line segments so the sequence reads left to right. Four components hide inside the wiggle. The TREND is the long-run direction and rate: steady growth, decline or plateau, estimated by fitting a least-squares line to the whole series (or a segment of it). SEASONALITY is a regular pattern completed WITHIN each year — ice-cream sales peaking every January, electricity demand every evening — named 'seasonal' for the calendar even when the cycle is daily or weekly. CYCLES are longer multi-year swings without a fixed period, like economic booms and recessions. IRREGULAR variation is the residual noise — strikes, weather, chance. The classical decomposition expresses each observation as trend x seasonal x irregular (multiplicative model, appropriate when seasonal swings grow with the level of the series, as in most sales data) or trend + seasonal + irregular (additive model, when swings stay constant in size).",
      },
      {
        kind: 'para',
        text: "Two descriptive statistics pin down seasonality before any modelling. The seasonal INDEX for, say, March is the average level of March expressed as a fraction of the average level of the whole series — computed by taking each March's value, averaging them (in the simple version, over two or more years), and dividing by the series' overall mean. An index of 1.18 says March typically runs 18 per cent ABOVE average; 0.82 says 18 per cent below. Indices are usually normalised to average exactly 1 across the year. DESEASONALISING then divides each actual observation by its month's index, producing a seasonally adjusted series in which the calendar pattern has been removed — the number news reports quote precisely so that a strong June is not mistaken for a change in trend.",
      },
      { kind: 'heading', text: 'Smoothing: Moving Averages and Medians' },
      {
        kind: 'para',
        text: "Smoothing strips irregular variation so the eye can see trend and seasonality underneath. The moving MEAN of order k replaces each value with the average of itself and its neighbours — a 3-point moving mean averages each observation with the one before and after; a 7-point moving mean of DAILY data averages exactly one full week, which conveniently cancels day-of-week effects. Because each averaged value sits at the centre of its window, the smoothed series loses half a window at each end (a 3-point smoothing drops the first and last plotting positions). The moving MEDIAN does the same with the median and has one honest advantage: a single wild outlier drags a mean but barely moves a median, so median smoothing is the robust choice for series with spikes. In exam practice, smoothed values are tabulated against their centred plotting positions and the residual — actual minus smoothed — is the irregular component estimate.",
      },
      {
        kind: 'para',
        text: "Choosing the window length is a modelling decision: short windows track the series closely (less smoothing), long windows flatten aggressively and can distort genuine turning points. The convention worth remembering: to eliminate a KNOWN seasonal cycle, smooth over exactly one full cycle — 12 points for monthly data with annual seasonality, 4 for quarterly, 7 for daily-with-weekly. Smoothing over a shorter window leaves seasonal ripples in the smoothed series; smoothing over an unmatched window shifts peaks sideways.",
      },
      { kind: 'heading', text: 'Forecasting — and Its Limits' },
      {
        kind: 'para',
        text: "A forecast recombines the components forward in time. Fit a least-squares trend line t = a + bx to the (usually deseasonalised or smoothed) series, where x counts periods from the start; evaluate it at a future x; then reseasonalise by MULTIPLYING by the future month's seasonal index (in the multiplicative model the deseasonalised value = actual/index, so the forecast = trend x index). Worked example below. The honest closing chapter is extrapolation risk: a trend line is a description of PAST behaviour, and forecasts assume the trend and the seasonal pattern persist. Structural breaks — a pandemic, a new competitor, a policy change — violate that assumption instantly; the further ahead the forecast, the wider the honest uncertainty; and no time-series method can see a turning point before the data do. Professional practice therefore reports forecasts WITH their assumption and refreshes them as each new observation arrives.",
      },
      { kind: 'example', title: 'Worked Example', steps: [
        "Problem: monthly seafood revenue (in $1000s) shows a least-squares trend (deseasonalised) t = 42.0 + 0.5x, where x = number of months since January Year 1. February's seasonal index is 0.85. Forecast February of Year 3 and interpret.",
        "Count the period: February Year 3 is x = 25 (Jan Year 1 is x = 1, so Feb Year 3 is the 25th month).",
        "Trend value: t = 42.0 + 0.5 x 25 = 54.5 (thousand dollars), deseasonalised.",
        "Reseasonalise: forecast = 54.5 x 0.85 = 46.3, i.e. about $46,300.",
        "Interpret: February's index of 0.85 says the month typically runs 15 per cent below the annual average, so the trend's 54.5 is scaled DOWN — and note the two assumptions printed on any honest forecast: the linear trend persists and the seasonal pattern repeats.",
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Statistical agencies publish GDP, employment and inflation seasonally adjusted — the headline numbers are this lesson\'s deseasonalised series.',
        'Retail and utilities plan inventory and generation on seasonal indices: staffing for the December index, not the annual average.',
        'Epidemiology reads disease surveillance as time series — seasonal indices for influenza, smoothed curves to reveal outbreaks underneath weekly noise.',
        'Financial reporting distinguishes smoothed trend from raw volatility, and the moving median is the analyst\'s defence against one-off spikes.',
        'Every forecasting dashboard carries this lesson\'s caveat: the model extends the past; it does not predict breaks.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: "Four slips recur. Plotting the WRONG axis: time belongs on the horizontal axis, and segments join the points — a scatter without joining lines hides the sequence. Deseasonalising by MULTIPLYING by the index instead of dividing: adjustment divides (actual/index); only the forecast reseasonalises by multiplying. Off-centre smoothing: a 3-point moving mean loses the first and last plotting positions, and a 7-point daily window exists to cancel day-of-week effects — smoothing monthly data over 7 months leaves seasonal ripples behind. And quoting a forecast without its assumptions: trend persistence and seasonal stability are assumptions, not facts — the extrapolation caveat is part of the answer, not an apology.",
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Time series', def: 'Observations recorded at successive, equally spaced points in time and analysed in their order.' },
        { term: 'Trend', def: 'The long-run direction and rate of change of a series, estimated by a fitted line over time.' },
        { term: 'Seasonal index', def: 'A value expressing a particular month or quarter as a fraction of the overall average level; indices average to 1 across the year.' },
        { term: 'Deseasonalising', def: 'Dividing each observation by its seasonal index to remove the within-year pattern and reveal the underlying trend.' },
        { term: 'Moving mean / moving median', def: 'Smoothing by replacing each value with the mean (or robust median) of itself and its neighbours across a window of order k.' },
        { term: 'Two-sided moving average', def: 'A symmetric window centred on each plotting position — the reason smoothed series are shorter at both ends.' },
        { term: 'Forecast', def: 'A trend-line value evaluated at a future period, then reseasonalised by multiplying by that period\'s seasonal index.' },
        { term: 'Extrapolation risk', def: 'The assumption-laden nature of forecasting: trends and seasonal patterns describe the past and may break without warning.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A month has seasonal index 1.15. What does that mean?',
          options: ['the month is 15 per cent of the year', 'the month typically runs 15 per cent above the series average', 'the trend rose 15 per cent that month', '15 per cent of observations are outliers'],
          answer: 1,
          explain: 'A seasonal index expresses the month\'s average level as a fraction of the overall mean — 1.15 means 15 per cent above average, from the calendar pattern alone.',
        },
        {
          q: 'To deseasonalise an observation in a multiplicative model you:',
          options: ['subtract the index', 'divide the actual value by its seasonal index', 'multiply the actual value by its index', 'smooth it with a 12-point median'],
          answer: 1,
          explain: 'Actual = deseasonalised x index, so deseasonalising DIVIDES by the index; multiplication is the forecasting (reseasonalising) step.',
        },
        {
          q: 'Why smooth DAILY data with a 7-point moving mean?',
          options: ['seven is a convenient odd number', 'one full weekly cycle cancels day-of-week seasonality', 'it removes the trend entirely', 'it centres the data on weekends'],
          answer: 1,
          explain: 'A window equal to one full seasonal cycle cancels that seasonality — 7 points for weekly cycles, 12 for monthly-with-annual, 4 for quarterly.',
        },
        {
          q: 'A fitted trend line is used to forecast revenue for a period five years ahead. The most important caveat is:',
          options: ['the seasonal index may be computed wrongly', 'the forecast assumes the past trend and seasonal pattern persist — structural breaks break it', 'moving medians are always better', 'the intercept should be zero'],
          answer: 1,
          explain: 'Forecasting is extrapolation: the trend line describes past behaviour, and any structural change — new competitor, pandemic, policy — invalidates it. State the assumption.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where next',
        tone: 'insight',
        text: 'Grounding: VCE General Mathematics Study Design 2023-2027, Unit 3 Area of Study 1, topic "Investigating and modelling time series" (time series plots and trend; seasonality, seasonal indices and deseasonalising; smoothing with moving means and medians; forecasting) — read against OpenStax Introductory Statistics, the time-series sections of any applied statistics text. The correlation-and-regression lesson owns the least-squares fitting this lesson borrows; the descriptive-distributions lesson owns the centre-and-spread vocabulary; the confidence-and-hypothesis lesson owns the inference layer that full time-series modelling adds.',
      },
    ],
  },
  {
    id: 'math-cumulative-frequency-box-plots',
    title: 'Quartiles, Cumulative Frequency and Box Plots',
    domain: 'Mathematics',
    field: 'Mathematics',
    branch: 'Statistics — Describing Distributions',
    tier: 'core',
    concepts: [
      'Ordering data and the percentile index formula',
      'Quartiles from the lower and upper halves',
      'Cumulative frequency tables and the ogive',
      'The five-number summary',
      'Box plot anatomy and the interquartile range',
      'The 1.5 × IQR outlier fences',
      'Reading skewness from a box plot',
      'Comparing two distributions',
    ],
    words: 1706,
    readMins: 9,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'A single average hides most of what a data set can tell you. The tools of this lesson — quartiles, the cumulative frequency curve, the five-number summary and the box plot — exist to expose the rest: how the data spread, where the middle half sits, how the two halves skew, and which points deserve suspicion. They are also the standard bridge between raw numbers and honest claims: before any inference is drawn, an examiner wants evidence that you can describe a distribution graphically and numerically, and that you know the difference between a value in the 90th percentile and a score of 90 percent. This lesson builds that toolkit exactly once, from ordering the data to fencing off outliers.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Everything here follows one move: put the data in order. Quartiles, percentiles, the ogive and the box plot are all different views of the same ordered list, so the skills stack instead of multiplying. Learn the median-of-halves rule for quartiles, learn to read three positions off an ogive, learn the five values that draw a box — and you can answer construction questions, interpretation questions and comparison questions with the same three facts.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Percentile', def: 'The value below which a given percentage of the ordered data falls. The 90th percentile means 90 percent of scores are at or below yours — it is a position, not a mark. Universities use percentiles to compare applicants; the 75th-percentile SAT cut-off translates into a specific score only through the score distribution.' },
          { term: 'Quartile', def: 'One of the three values Q1, Q2, Q3 that cut ordered data into four equal parts; Q2 is the median. About one quarter of the data falls at or below Q1, one half at or below Q2, three quarters at or below Q3.' },
          { term: 'Interquartile range (IQR)', def: 'The spread of the middle 50 percent of the data: IQR = Q3 − Q1. Because it ignores the tails, it is a resistant measure of spread — unaffected by extreme values — and the base unit for outlier tests.' },
          { term: 'Five-number summary', def: 'Minimum, Q1, median, Q3, maximum: the five ordered values from which a box plot is constructed. Two distributions with equal means can still differ hugely in their five-number summaries — which is the point of computing one.' },
          { term: 'Ogive (cumulative frequency curve)', def: 'The graph of running totals: cumulative frequency plotted against the upper boundary of each class. Reading across at n/4, n/2 and 3n/4 and then down gives Q1, the median and Q3 — the curve is a quartile-reading machine.' },
          { term: 'Potential outlier', def: 'A value more than 1.5 × IQR below Q1 or above Q3. It requires further investigation — it may be an error, an abnormality, or the most interesting data point in the set.' },
        ],
      },
      {
        kind: 'para',
        text: 'Quartiles by the median-of-halves rule. Order the data; find the median. For a data set of 14 observations, the median is the mean of the 7th and 8th values. Then split: Q1 is the middle value of the lower half (the first 7 values), Q3 the middle of the upper half (the last 7). The OpenStax worked set — 1; 1; 2; 2; 4; 6; 6.8; 7.2; 8; 8.3; 9; 10; 10; 11.5 — gives median 7, Q1 = 2, Q3 = 9, so the middle half of the data lies between 2 and 9. For percentiles beyond the quartiles, use the index formula: compute i = (k/100)(n + 1) for the kth percentile of n values; if i is an integer, the percentile is the ith ordered value, and if not, average the values at the two nearest positions. For 29 ages, the 70th percentile is the 21st value (i = 0.70 × 30 = 21), while the 83rd sits between the 24th and 25th, averaging 71 and 72 to give 71.5.',
      },
      {
        kind: 'formula',
        name: 'IQR and outlier fences',
        latex: 'IQR = Q_3 - Q_1,\\qquad \\text{lower fence} = Q_1 - 1.5\\times IQR,\\qquad \\text{upper fence} = Q_3 + 1.5\\times IQR',
        meaning: 'The interquartile range measures the spread of the middle 50 percent of ordered data. Values beyond the two fences are flagged as potential outliers — the rule box plots use to draw whiskers to the last non-flagged value and plot dots beyond.',
      },
      {
        kind: 'para',
        text: 'Cumulative frequency and the ogive. Build a table whose final column adds the class frequencies as you go: each row’s cumulative value answers “how many observations are at most this class boundary?”. Plot those running totals against the upper class boundaries and join with a smooth curve — the ogive. Three horizontal reads then return the summary values: across from n/2, down to the x-axis for the median; across from n/4 and 3n/4 for Q1 and Q3. The same table also answers direct questions — how many scored below 60, what proportion cleared 80 — which is why cumulative frequency is the practical form of the percentile idea for grouped data. With unequal class widths, plot against boundaries (not midpoints) and keep the running total honest; the curve, not the table’s raw frequencies, is what you read.',
      },
      {
        kind: 'para',
        text: 'The box plot draws the five-number summary. A box spans Q1 to Q3 — the middle 50 percent of the data — with a line at the median; whiskers run from the box ends to the smallest and largest values (or to the last values inside the outlier fences, with dots marking flagged extremes). What the picture encodes is concentration and skew: a median line off-centre inside the box signals skew, whisker lengths expose tail heaviness, and the box’s height is the IQR made visible. Two box plots on a common scale make comparison immediate: the OpenStax day-class and night-class test scores share similar medians (74.5 versus 81) but wildly different boxes (IQR 26.5 versus 11) — the day class varies far more, whatever its average.',
      },
      {
        kind: 'example',
        title: 'Worked Example — Five Numbers, Two Fences, One Verdict',
        steps: [
          'Day class scores (ordered, 20 values) give five-number summary: min 32, Q1 56, median 74.5, Q3 82.5, max 99. Night class: min 25.5, Q1 78, median 81, Q3 89, max 98.',
          'IQRs: day = 82.5 − 56 = 26.5; night = 89 − 78 = 11. The day class’s middle half is more than twice as wide.',
          'Day fences: 56 − 1.5 × 26.5 = 16.25 and 82.5 + 1.5 × 26.5 = 122.25. No score lies outside, so no outliers.',
          'Night fences: 78 − 1.5 × 11 = 61.5 and 89 + 1.5 × 11 = 105.5. The scores 45 and 25.5 fall below 61.5 — two potential outliers to investigate.',
          'Verdict: similar centres, very different spreads; the night class is tightly packed with two low stragglers, the day class broadly spread. That is a complete comparison in five numbers and two fences.',
          'The same test on 13 house prices (median 488,800; Q1 308,750; Q3 649,000; IQR 340,250; upper fence 1,159,375) flags the 5,500,000 listing as a potential outlier — real-estate data’s classic long right tail.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'For the 14-observation set 1; 1; 2; 2; 4; 6; 6.8; 7.2; 8; 8.3; 9; 10; 10; 11.5, the first quartile is…',
          options: ['2', '4', '6.8', '9'],
          answer: 0,
          explain: 'The median is 7 (mean of the 7th and 8th values); the lower half is 1; 1; 2; 2; 4; 6; 6.8, whose middle value is 2. So Q1 = 2.',
        },
        {
          q: 'Scoring in the 90th percentile on an exam means…',
          options: ['you answered 90 percent of questions correctly', '90 percent of scores are at or below yours', 'you scored 90 more than the mean', 'your score is 90 percent of the maximum'],
          answer: 1,
          explain: 'Percentiles are positions in the ordered distribution, not percentages of correct answers — a weak exam with low scores could still put a modest mark in the 90th percentile.',
        },
        {
          q: 'A value is flagged as a potential outlier when it lies…',
          options: ['outside the box of a box plot', 'beyond Q3 + 1.5 × IQR or below Q1 − 1.5 × IQR', 'more than 2 standard deviations from the mean', 'outside the whiskers of any chart'],
          answer: 1,
          explain: 'The 1.5 × IQR fences define potential outliers; whiskers extend only to the last values inside the fences, with dots beyond — the standard box-plot convention.',
        },
        {
          q: 'To read the median and quartiles from an ogive, you…',
          options: ['read vertically at n/2, n/4 and 3n/4 cumulative frequency', 'read the tallest bar', 'divide the range by four', 'read the upper class boundaries directly'],
          answer: 0,
          explain: 'The ogive plots cumulative totals, so horizontal lines at n/4, n/2 and 3n/4 intersect the curve at x-values equal to Q1, the median and Q3.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Reading a percentile as a mark: the 90th percentile is a position in the ordered data, not 90 percent correct. Ignoring convention clashes: calculators, software and exam boards use slightly different quartile rules — the median-of-halves method is the taught standard, so know which one your syllabus examines and stay consistent. Flagging every extreme dot as an error: the 1.5 × IQR rule marks values for investigation, not deletion — the most interesting datum is often the outlier. Believing the whiskers hold “the other half” of the data: the box already holds the middle half; whiskers reach to extremes, tails included. And building the ogive from midpoints or raw frequencies instead of upper boundaries and running totals — the curve then answers questions it was never drawn to answer.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: measures of centre and spread (mean, median, range, standard deviation) from the descriptive-statistics chapters of the master statistics volume. Follow with the normal distribution, where percentiles reappear as z-scores, and the charts-reading lesson for the graphical side of data handling. Primary reading: OpenStax, Introductory Statistics 2e, sections 2.3 “Measures of the Location of the Data” and 2.4 “Box Plots” (openstax.org, CC BY-NC-SA) — the source of both worked data sets used here.',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Order the data once: quartiles, percentiles, the ogive and the box plot are four views of the same ordered list.',
        'Median-of-halves gives Q1 and Q3; the index formula i = (k/100)(n + 1) locates any percentile, averaging adjacent values when i is not an integer.',
        'IQR = Q3 − Q1 measures the middle 50 percent and is resistant to extremes.',
        'Ogive: cumulative frequency against upper class boundaries; read n/4, n/2, 3n/4 across and down for Q1, median, Q3.',
        'Box plot = five-number summary: box spans Q1–Q3, line at median, whiskers to extremes (or fence-adjacent values, dots beyond).',
        'Outlier fences: Q1 − 1.5 × IQR and Q3 + 1.5 × IQR — flag, investigate, never auto-delete.',
      ] },
    ],
  },
  {
    id: 'math-reading-data-charts',
    title: 'Reading Data: Bar Charts, Line Graphs, Pie Charts and Combined Sources',
    domain: 'Mathematics',
    field: 'Mathematics',
    branch: 'Data Interpretation',
    tier: 'core',
    concepts: [
      'Bar charts: comparison across categories',
      'Line graphs: trend, slope and rate of change',
      'Pie charts: shares, sector angles and totals',
      'Histograms versus bar charts',
      'Frequency polygons and time series',
      'Percentage change and share arithmetic',
      'Reading several sources together',
      'Misleading axes and scales',
    ],
    words: 1690,
    readMins: 8,
    addedOn: '2026-10-22',
    blocks: [
      {
        kind: 'para',
        text: 'Most numerical claims now arrive as pictures: a bar chart in a report, a line graph of prices, a pie chart of budget shares, a dashboard joining three tables and two trends. Data interpretation is the skill of getting the numbers back out of the picture correctly — reading what is plotted, against what scale, in what units — and then computing exactly what was asked, which is often not the number on the page but a change, a share, a ratio or a comparison derived from several sources at once. This lesson covers the standard chart families and the arithmetic each invites, then the discipline of reading multiple sources together, and finally the visual tricks that make honest data lie.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Interpretation questions rarely test calculation difficulty; they test precision of reading. The marks are lost in the first ten seconds — reading the wrong axis, missing that one table is in thousands and the other in millions, comparing a percentage to a percentage point, or treating a pie share of one year as a share of another year’s larger total. Build a fixed reading ritual — title, units, axes, legend, source, note — and the arithmetic that follows is the easy part.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'terms',
        items: [
          { term: 'Frequency and relative frequency', def: 'How often a category or class occurs, and that count as a fraction of the total. Bar charts display either; the relative form lets two data sets of different sizes be compared on one axis.' },
          { term: 'Sector angle', def: 'The angle a pie slice occupies: share × 360°. A quarter is 90°, an eighth is 45° — computing the angle is the fastest way to check whether a drawn pie is even drawn honestly, and exam questions ask for angles as often as for percentages.' },
          { term: 'Time series', def: 'Data recorded in time order and best shown as a line graph: the horizontal axis is time, and the slope between two points is the rate of change — steeper means faster, downward means decline, flat means stable.' },
          { term: 'Grouped and stacked bars', def: 'Grouped bars put two or more series side by side within each category for direct comparison; stacked bars place them on top of one another to show composition of a total. Reading a stacked chart for a middle segment means subtracting — the segment’s height, not its top edge, is its value.' },
          { term: 'Percentage change', def: '(new − old) ÷ old × 100. It is signed and always taken on the old value. A rise from 50 to 75 is a 50 percent increase; a fall from 75 back to 50 is a 33.3 percent decrease — the asymmetry that exam questions exploit.' },
          { term: 'Frequency polygon', def: 'A line graph joining the midpoints of histogram bars — the same distribution drawn for comparison of several data sets on one set of axes, and the form OpenStax uses to bridge histograms and line graphs.' },
        ],
      },
      {
        kind: 'para',
        text: 'Bar charts compare categories. The vertical axis carries the counts (with units!), the horizontal the categories, and the bars’ heights — read against gridlines, not eyeballed — are the data. Two reading habits pay for themselves: first, check whether the categories are ordered by value or by something else (alphabetical, chronological); a chart may be sorted to make a point, and the tallest bar is not always adjacent to the second-tallest. Second, for grouped bars, fix which colour or shade is which series before reading any number; for stacked bars, remember the middle segments must be recovered by subtraction — the top of a segment is cumulative, the segment is a difference. Horizontal bar charts do the same job with long category labels; nothing about the arithmetic changes.',
      },
      {
        kind: 'para',
        text: 'Line graphs show change. With time on the horizontal axis, the graph’s slope between two points is the rate of change between them, so questions about “when did it grow fastest” are slope questions — steepest segment, not largest value. Extrapolation beyond the plotted range is assumption, not reading; interpolation between points is legitimate only as far as the sampling justifies. When two lines share an axis, check the units and the baseline before comparing slopes — a truncated axis (starting at 90 rather than 0) exaggerates slopes and is the most common honest-looking distortion in published charts. Frequency polygons and time-series graphs are line graphs too, with the same slope discipline; the only new idea is that the polygon’s vertices are class midpoints.',
      },
      {
        kind: 'para',
        text: 'Pie charts show shares of one total. Every slice is a fraction of the whole, so a pie without a stated total is half-invisible: 25 percent of what? The arithmetic the chart invites is angle-and-share conversion — a sector of 54° is 54/360 = 15 percent; a share of 18 percent of 2,400 units is 432 units — and comparison caution: slices from two different pies (different years, different totals) cannot be compared by angle alone, because the underlying totals moved. Pie charts hide small differences and degrade past five or six categories, which is why they attract both exam questions and criticism; when precise comparison among many categories is the point, a bar chart is the honest tool.',
      },
      {
        kind: 'para',
        text: 'Histograms are not bar charts. A histogram groups a continuous variable into class intervals and the bars touch, because the scale is numeric and continuous — whereas bar-chart categories are discrete and separated. With unequal class widths, honest reading requires frequency density (frequency ÷ class width): the area of each bar, not its height, carries the count, and a naive height read on a stretched final bin is the classic error. The rest of the toolkit is the multi-source discipline: real questions join a table to a chart to a paragraph, often in different units. Convert everything to one unit first (thousands to millions; percentages to fractions), locate the raw numbers each source supplies, and compute only the derived quantity asked — a growth rate from two rows of a table, a share from one chart applied to a total from another, a difference between two slices across years.',
      },
      {
        kind: 'example',
        title: 'Worked Example — One Table, Two Charts, Three Questions',
        steps: [
          'The setup: a table gives Company A’s sales as 2.40 lakh units in year 1 and 3.00 lakh in year 2; Company B’s pie chart for year 2 shows a 96° sector labelled “B”, with the note “market total year 2 = 20.0 lakh units”.',
          'Growth question: A’s percentage change = (3.00 − 2.40)/2.40 × 100 = 25 percent. Always divide by the old value.',
          'Share question: B’s sector 96° → share = 96/360 = 26.67 percent of the year-2 total → 0.2667 × 20.0 lakh ≈ 5.33 lakh units. The pie gave the angle; the note gave the total; both were needed.',
          'Cross-source question: B versus A in year 2 = 5.33 − 3.00 = 2.33 lakh units ahead — a comparison neither source alone could answer.',
          'Sensitivity check: if the note had read “thousands” instead of lakhs, every derived number scales by 10⁻² — the reason units are read before any arithmetic.',
        ],
      },
      { kind: 'heading', text: 'Test Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'A line graph of monthly revenue has its steepest upward segment between March and April. That means…',
          options: ['April had the highest revenue', 'revenue grew fastest (per month) in that interval', 'March was the lowest month', 'annual growth was highest that year'],
          answer: 1,
          explain: 'Slope is rate of change: the steepest segment is the fastest growth, which need not coincide with the highest value — a later, flatter segment can sit at a higher level.',
        },
        {
          q: 'A pie chart of a ₹4,000 crore budget shows a 63° sector. The sector represents…',
          options: ['₹630 crore', '₹700 crore', '₹1,260 crore', '₹2,520 crore'],
          answer: 1,
          explain: '63/360 = 17.5 percent of the total, and 0.175 × 4,000 = ₹700 crore — angle first, then share, then total.',
        },
        {
          q: 'Which statement about histograms is correct?',
          options: ['Bars are separated to show distinct categories', 'With unequal class widths, bar height alone misreads the distribution', 'The horizontal axis is categorical', 'They can only display percentages'],
          answer: 1,
          explain: 'Histogram bars touch over a continuous scale; with unequal widths, frequency density (area), not height, carries the count — the classic unequal-bin trap.',
        },
        {
          q: 'A price index rises from 200 to 210. The rise is…',
          options: ['10 percent', '5 percent', '10 percentage points and 5 percent', '5 percentage points and 5 percent'],
          answer: 2,
          explain: 'The absolute rise is 10 index points (percentage points); the relative rise is 10/200 = 5 percent. Conflating the two is the most common interpretation error in data reading.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Reading the wrong axis in two-axis charts — always match a series to its labelled scale before quoting any number. Assuming categories are sorted by value; many charts sort alphabetically or chronologically, so rank by reading, not by position. Adding percentages that belong to different totals — 30 percent of 2024’s sales and 25 percent of 2025’s do not sum to anything meaningful. Confusing percentage change with percentage-point change, the index error above. Extrapolating a trend line beyond its plotted range as if it were fact. Trusting a truncated y-axis (a “dramatic” rise starting at 95 percent) or a 3-D pie whose front slices are drawn larger by perspective. And forgetting the note under the table — the unit conversion line that decides whether every derived number is right by a factor of a hundred.',
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the percentage, ratio and mental-math lesson makes every conversion here instant. Follow with the quartiles-and-box-plots lesson for the distribution-summary half of data handling, and the critical-reasoning lesson for evaluating the claims built on these charts. Primary reading: OpenStax, Introductory Statistics 2e, sections 2.1 “Stem-and-Leaf Graphs (Stemplots), Line Graphs, and Bar Graphs” and 2.2 “Histograms, Frequency Polygons, and Time Series Graphs” (openstax.org, CC BY-NC-SA).',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      { kind: 'list', ordered: true, items: [
        'Reading ritual before any arithmetic: title, units, axes, legend, source, footnote.',
        'Bars compare categories (grouped = side-by-side series; stacked = composition, middle segments by subtraction); lines show change (slope = rate, not level).',
        'Pies show shares of one total: sector angle = share × 360°; never compare slices from different totals.',
        'Histograms handle continuous data with touching bars; unequal widths demand frequency density.',
        'Multi-source questions: convert to one unit, collect raw values from each source, compute only the asked derived quantity.',
        'Guard against truncated axes, 3-D distortion, percentage-point confusion and unlabelled totals.',
      ] },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'math-bayes-theorem',
    title: 'Bayes\u2019 Theorem and Updating Beliefs',
    domain: 'Mathematics',
    field: 'Probability & Statistics',
    branch: 'Bayesian Inference',
    tier: 'intermediate',
    concepts: [
      'Conditional probability',
      'Prior, likelihood, and posterior',
      'The theorem itself',
      'Base rates and false positives',
      'Sequential updating',
      'Odds and likelihood ratios',
    ],
    words: 978,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'Bayes\u2019 theorem is the calculus of changing your mind: it says exactly how evidence should revise a prior belief into a posterior. In Bayesian Inference it converts P(hypothesis given evidence) — what you want — from P(evidence given hypothesis) — what you usually have. The formula is one line of algebra; the discipline of using it honestly is what this topic builds.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Medical screening, spam filters, fault diagnosis, and much of modern machine learning run on this single rule. Mistaking an accurate test for a probable diagnosis causes real harm, and Bayes is the corrective lens.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Conditional probability P(A|B) is the probability of A given that B is known true, computed as the probability of both divided by the probability of B — a re-weighting of the sample space. Order matters: P(A|B) and P(B|A) are generally different numbers, and confusing them is the classic Bayes error.',
      },
      {
        kind: 'para',
        text: 'The prior is your belief before the evidence arrives; the likelihood is how probable the evidence is under each hypothesis; the posterior is the re-weighted belief afterward. Bayesian inference is nothing more than feeding that loop repeatedly as data arrives.',
      },
      {
        kind: 'para',
        text: 'The theorem itself reads: posterior equals likelihood times prior, divided by the total probability of the evidence, where the denominator sums that product across all hypotheses. It follows in three lines from the definition of conditional probability — the depth lies in the habit, not the proof.',
      },
      {
        kind: 'para',
        text: 'When a condition is rare, even a highly accurate test yields mostly false positives among positive results, because the large healthy population contributes many errors. This base-rate neglect explains why screening low-risk populations for rare diseases does more harm than good.',
      },
      {
        kind: 'para',
        text: 'Today\u2019s posterior becomes tomorrow\u2019s prior: with independent pieces of evidence you may update once per observation, and the evidence accumulates multiplicatively through likelihoods. That is the logic behind spam filters scoring one feature at a time.',
      },
      {
        kind: 'para',
        text: 'Divide the theorem for a hypothesis against its negation and the odds form appears: posterior odds equal prior odds times the likelihood ratio. A likelihood ratio of 9 turns even odds into 9-to-1, and working with log-likelihood ratios turns that multiplication into convenient addition.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Bayes\u2019 theorem',
        latex: 'P(H\\mid E) = \\frac{P(E\\mid H)\\,P(H)}{P(E)}',
        meaning: 'The posterior equals likelihood times prior, normalized by the total probability of the evidence.',
      },
      {
        kind: 'formula',
        name: 'Total probability',
        latex: 'P(E) = P(E\\mid H)P(H) + P(E\\mid H^c)P(H^c)',
        meaning: 'The evidence probability across all hypotheses — the normalizing denominator.',
      },
      {
        kind: 'formula',
        name: 'Odds form',
        latex: '\\frac{P(H\\mid E)}{P(H^c\\mid E)} = \\frac{P(H)}{P(H^c)}\\times\\frac{P(E\\mid H)}{P(E\\mid H^c)}',
        meaning: 'Posterior odds = prior odds × likelihood ratio: evidence multiplies odds.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the probability of disease given a positive test, when prevalence is 1 percent, sensitivity is 99 percent, and the false-positive rate is 5 percent.',
          'Recall the governing idea: Bayes\u2019 theorem with the total-probability denominator.',
          'Apply: P(positive) = 0.99 × 0.01 + 0.05 × 0.99 = 0.0099 + 0.0495 = 0.0594, so P(disease | positive) = 0.0099 / 0.0594 ≈ 0.167.',
          'State the result: about 17 percent — a positive result is still roughly five times more likely to be false than true, purely because the disease is rare; a second independent positive would push the probability above 80 percent.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Screening policy weighs the positive predictive value, not the sensitivity, before recommending wide testing.',
          'Spam filters multiply likelihood ratios of words and phrases to score incoming mail.',
          'A/B testing platforms update posterior conversion rates continuously as data streams in.',
          'Engineering fault diagnosis ranks candidate causes by posterior probability given the observed symptoms.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Nearly every misuse swaps the conditional: the probability of a positive test given disease is not the probability of disease given a positive test, and the two can differ by an order of magnitude. Guard also against double-counting evidence and against priors stated with false confidence — Bayes amplifies bad inputs as faithfully as good ones.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Prior', def: 'Probability assigned to a hypothesis before the evidence is seen.' },
          { term: 'Likelihood', def: 'Probability of the evidence under a given hypothesis.' },
          { term: 'Posterior', def: 'Updated probability of the hypothesis after the evidence.' },
          { term: 'Base rate', def: 'The unconditional frequency of the condition in the population.' },
          { term: 'Likelihood ratio', def: 'P(E|H) over P(E|not H) — the multiplicative boost evidence gives to odds.' },
          { term: 'False positive', def: 'A positive result for a condition that is actually absent.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A test with 99 percent sensitivity and a 5 percent false-positive rate is used in a population with 1 percent prevalence. Given a positive result, the chance of disease is roughly:',
            options: ['99 percent', '95 percent', '17 percent', '50 percent'],
            answer: 2,
            explain: 'False positives from the 99 percent healthy majority outnumber true positives about five to one, so the posterior is only about 0.167.',
          },
          {
            q: 'In Bayesian terms, the posterior is proportional to:',
            options: ['The prior divided by the likelihood', 'The likelihood times the prior', 'The evidence times the prior', 'The likelihood minus the prior'],
            answer: 1,
            explain: 'Bayes\u2019 theorem multiplies how well the hypothesis predicts the evidence by how plausible it was beforehand.',
          },
          {
            q: 'In the odds form of Bayes\u2019 rule, evidence acts by:',
            options: ['Adding to the prior odds', 'Multiplying the prior odds by a likelihood ratio', 'Replacing the prior entirely', 'Averaging with the prior'],
            answer: 1,
            explain: 'Each independent observation multiplies the current odds by its own likelihood ratio.',
          },
          {
            q: 'After observing evidence E₁ and updating, then observing E₂, a Bayesian treats the previous posterior as:',
            options: ['A likelihood', 'The new prior', 'Noise to be discarded', 'The normalizing constant'],
            answer: 1,
            explain: 'Sequential updating means each posterior from one step becomes the prior entering the next.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Prerequisites: basic probability, conditional probability, and counting. Move on to Bayesian networks, conjugate priors, and hypothesis testing, where the Bayesian and frequentist traditions meet — and argue. The Nernst-style habit of tracking what is given versus what is wanted pays off everywhere.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Bayes in one line: posterior ∝ likelihood × prior.',
          'P(A|B) does not equal P(B|A) — the cardinal distinction.',
          'Rare conditions make even accurate tests mostly wrong on positives.',
          'Posterior odds = prior odds × likelihood ratio.',
          'Today\u2019s posterior is tomorrow\u2019s prior: updating is a loop, not an event.',
        ],
      },
    ],
  },
  // ------------------------------------------------------------------
  // Classical statistics (authored from a close reading of OpenStax
  // Introductory Statistics, Illowsky & Dean): descriptive statistics,
  // sampling & the CLT, inference, and correlation/regression.
  // ------------------------------------------------------------------
  {
    id: 'stats-descriptive-distributions',
    title: 'Describing Data: Center, Spread and the Normal Distribution',
    domain: 'Mathematics',
    field: 'Probability & Statistics',
    branch: 'Descriptive Statistics',
    tier: 'core',
    concepts: [
      'Frequency tables, relative frequency, and histograms',
      'Mean, median, and mode as measures of center',
      'Skewness and the mean–median relationship',
      'Variance and standard deviation',
      'The normal distribution and its two parameters',
      'z-scores and the standard normal distribution',
      'The empirical (68–95–99.7) rule',
    ],
    words: 1783,
    readMins: 9,
    addedOn: '2026-10-19',
    blocks: [
      {
        kind: 'para',
        text: 'You have run the survey, weighed every sample, logged every reading — and now you are staring at a spreadsheet of raw numbers. Descriptive statistics is the craft of turning that pile into a picture and a handful of numbers that tell the truth: where the data cluster, how widely they scatter, and what shape they form. This topic builds both halves of the craft — graphical and numerical summaries — and then introduces the bell curve the rest of statistics leans on: the normal distribution.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Real decisions ride on these summaries: a median house price guides a purchase, a standard deviation decides whether a manufacturing process is in control, and a z-score tells a physician whether a lab result is alarming or ordinary. Every later topic — sampling, confidence intervals, regression — stands on the vocabulary built here.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Start by counting. A frequency table tallies how often each value — or each class interval — occurs, and dividing each count by the total gives the relative frequency, the share of the sample falling in that class. The histogram turns the table into contiguous bars whose heights are the frequencies, and it is the workhorse display for large data sets — as a rule of thumb, reach for one when you have a hundred or more values. From its silhouette you can read the three questions that matter: where the data center, how widely they scatter, and whether the shape is symmetric or lopsided. Building one involves honest judgment: use roughly five to fifteen classes, start the first boundary a small step below the smallest value so no observation sits on an edge, and pick a bar width to match. Stemplots, dot plots, and box plots are lighter cousins for smaller data sets.',
      },
      {
        kind: 'para',
        text: 'Three numbers compete to name the center. The mean adds every value and divides by the count — the balance point of the data, written x̄ for a sample and μ for a population. The median orders the data and takes the middle value, averaging the two middle values when the count is even. The mode is the most frequent value, and a tie makes the data bimodal. The mean uses every number, which makes it efficient but fragile — one runaway observation drags it along while the median barely notices — and the mode alone works for purely categorical data like colors or brands. That is why incomes and house prices are reported as medians: choosing a measure of center is a statement about the data, not a formality.',
      },
      {
        kind: 'para',
        text: 'Shape and center interact predictably. In a symmetric distribution the mean and median coincide. When a histogram stretches a long tail to the right, the mean is pulled toward the tail and typically rises above the median; a long left tail drags the mean below the median. Of the three measures, the mean feels skew the most and the mode the least. Reading this triangle off a histogram — mean chased by the tail, median standing firm — is one of the fastest honest diagnoses in statistics, and it matters later: for lopsided data, the median and quartiles summarize better than the mean and standard deviation.',
      },
      {
        kind: 'para',
        text: 'Two data sets can share a center and still behave nothing alike, so we also measure spread. Each observation contributes a deviation from the mean, but the deviations always sum to zero — the balance point guarantees it — so they are squared before being averaged. That average of squared deviations is the variance; its square root, back in the original units, is the standard deviation, the typical distance of data from the mean. A sample divides by n − 1 rather than n, a correction that makes s² a better estimate of the population variance. Any value can then be located by the relation value = mean + (number of standard deviations) × (standard deviation): a 7-minute wait at a shop averaging 5 minutes with s = 2 is exactly one standard deviation above average, while a 1-minute wait is two below.',
      },
      {
        kind: 'para',
        text: 'Many measurements — heights, exam scores, repeated instrument readings — pile into a single symmetric peak: the normal distribution, a continuous distribution fully described by two parameters, its mean μ (where it is centered) and standard deviation σ (how wide it stands). The total area under the curve is exactly 1, probability is area, and the tails approach the axis without ever touching it. The empirical rule makes the bell usable on sight: about 68% of values lie within one standard deviation of the mean, about 95% within two, and about 99.7% within three. To compare values from different normal distributions — heights in centimeters against test scores in points — convert each to a z-score, its distance from the mean in standard deviations. All z-scores live on one common ruler, the standard normal distribution Z ~ N(0, 1), with mean 0 and standard deviation 1, whose table gives the area to the left of any z; the area to the right is one minus the area to the left.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Sample standard deviation',
        latex: 's = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}',
        meaning: 'Square the deviations so they cannot cancel, average them over n − 1, and take the square root to return to the data\u2019s own units — the typical distance from the mean.',
      },
      {
        kind: 'formula',
        name: 'z-score',
        latex: 'z = \\frac{x - \\mu}{\\sigma}',
        meaning: 'How many standard deviations a value sits above (positive) or below (negative) its mean — the passport to the standard normal table.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: summarize the waiting times 2, 4, 4, 4, 5, 5, 7, and 9 minutes — center and spread — and then judge how unusual the 9-minute wait is.',
          'Recall the governing ideas: the mean divides the sum by n; the sample variance averages the squared deviations over n − 1; the standard deviation is its square root; a z-score counts standard deviations from the mean.',
          'Apply: the sum is 40, so x̄ = 5 minutes; the deviations are −3, −1, −1, −1, 0, 0, 2, and 4, whose squares total 32, giving s² = 32/7 ≈ 4.57 and s ≈ 2.14; the median is (4 + 5)/2 = 4.5.',
          'State the result: the 9-minute wait sits (9 − 5)/2.14 ≈ 1.9 standard deviations above the mean — high, but not shocking; had these data been normal, the empirical rule would leave only about 5% of waits more than two standard deviations from the mean in either direction.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Manufacturing monitors the standard deviation of fill weights and machined dimensions to keep processes inside tolerance.',
          'Finance calls the standard deviation of returns volatility — and prices risk with it directly.',
          'Pediatric medicine plots a child\u2019s height as a percentile, which is a z-score wearing a friendly name.',
          'Government statistics and real-estate listings quote median prices and incomes precisely because extreme values distort means.',
          'Testing services convert raw exam scores to standardized scores so different tests and years can be compared on one scale.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The most common abuse is quoting a mean for lopsided data: one multimillionaire lifts a town\u2019s mean income to a figure almost nobody earns, while the median stays honest. Remember that the empirical rule describes bell-shaped data only — applying 68–95–99.7 to a skewed histogram is guesswork. Keep the divisors straight (n − 1 for a sample, N for a whole population), and do not confuse the standard deviation of the data with the standard error of a mean — the latter belongs to our next topic.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Frequency', def: 'The number of times a value or class occurs in the data.' },
          { term: 'Relative frequency', def: 'A class frequency divided by the total number of observations.' },
          { term: 'Histogram', def: 'A graph of adjoining bars whose heights show class frequencies; displays shape, center, and spread at a glance.' },
          { term: 'Median', def: 'The middle value of ordered data — resistant to outliers, unlike the mean.' },
          { term: 'Variance', def: 'The average of squared deviations from the mean; its square root is the standard deviation.' },
          { term: 'Standard deviation', def: 'The typical distance between data values and their mean, in the data\u2019s own units.' },
          { term: 'z-score', def: 'The number of standard deviations a value lies above (positive) or below (negative) its mean.' },
          { term: 'Empirical rule', def: 'For bell-shaped data: about 68% of values within 1, 95% within 2, and 99.7% within 3 standard deviations of the mean.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A small town has 49 residents earning $30,000 a year and one earning $5,000,000. Which measure of center best describes a typical income?',
            options: ['The mean, because it uses every value', 'The median, because the outlier drags the mean far above what anyone typical earns', 'The mode, because it always works for money', 'Either — mean and median are always close'],
            answer: 1,
            explain: 'The mean works out to about $129,400, far above what all but one resident earns; the median of $30,000 resists the outlier.',
          },
          {
            q: 'By the empirical rule, roughly what share of bell-shaped data lies within two standard deviations of the mean?',
            options: ['50%', '68%', '95%', '99.7%'],
            answer: 2,
            explain: 'The 68–95–99.7 rule assigns about 95% to within two standard deviations; only about 5% falls farther out.',
          },
          {
            q: 'Exam scores are normal with mean 75 and standard deviation 5. The z-score of a score of 85 is:',
            options: ['2', '3', '10', '0.4'],
            answer: 0,
            explain: 'z = (85 − 75)/5 = 2 — two standard deviations above the mean, at about the 97.5th percentile.',
          },
          {
            q: 'A histogram shows a long right tail. You expect:',
            options: ['mean < median', 'mean = median', 'mean > median', 'the mode to exceed the mean'],
            answer: 2,
            explain: 'Right skew pulls the mean toward the long tail, so it typically exceeds the median, which in turn sits above the mode.',
          },
          {
            q: 'Why does the sample variance divide by n − 1 instead of n?',
            options: ['To make the variance smaller', 'It is a historical accident', 'Because the deviations sum to zero, only n − 1 of them vary freely, and the n − 1 divisor gives a better estimate of the population variance', 'So the standard deviation comes out an integer'],
            answer: 2,
            explain: 'The sample mean absorbs one degree of freedom; dividing by n − 1 corrects the average squared deviation into a sound estimate.',
          },
          {
            q: 'The standard normal distribution has:',
            options: ['mean 1 and standard deviation 0', 'mean 0 and standard deviation 1', 'mean 0 and standard deviation 0', 'mean μ and standard deviation σ'],
            answer: 1,
            explain: 'Converting to z-scores centers the distribution at 0 and measures each unit in standard deviations, giving Z ~ N(0, 1).',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: comfort with averages and reading graphs. Follow with Sampling and the Central Limit Theorem — why the bell curve appears even when the underlying data are not normal — and Confidence Intervals and Hypothesis Testing, which turn these summaries into decisions. For the probability machinery behind areas under curves, our Bayes\' Theorem topic is the companion read.',
        tone: 'path',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'stats-sampling-central-limit',
    title: 'Sampling and the Central Limit Theorem',
    domain: 'Mathematics',
    field: 'Probability & Statistics',
    branch: 'Inferential Statistics',
    tier: 'intermediate',
    concepts: [
      'Populations, samples, parameters, and statistics',
      'Sampling bias and critical evaluation of studies',
      'Random, stratified, cluster, and systematic sampling',
      'Sampling distributions of a statistic',
      'The central limit theorem for sample means',
      'The central limit theorem for sums',
      'Standard error and the law of large numbers',
    ],
    words: 1619,
    readMins: 8,
    addedOn: '2026-10-19',
    blocks: [
      {
        kind: 'para',
        text: 'A poll interviews 1,200 voters and claims to speak for a nation of millions. A factory tests 40 circuit boards and pronounces the whole batch sound. Both leaps are legitimate — when the mathematics of sampling backs them. This topic is that mathematics: how to draw samples that deserve to stand in for a population, what happens to a statistic as samples vary, and the central limit theorem, the result that lets normal-distribution tools work on almost any data at all.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Every claim of the form "researchers found…" or "voters prefer…" is a leap from sample to population, justified only by random sampling and quantified only by sampling distributions. This topic is the difference between reading the news critically and being read by it.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The population is the entire group under study — every voter, every battery, every fish in the lake. The sample is the subset actually observed, because examining the whole thing costs too much or is plainly impossible. A parameter is the fixed, usually unknown number describing the population (μ, σ, p); a statistic is the matching number computed from the sample (x̄, s, p′) and used to estimate it. The variable being measured is numerical — discrete if it comes from counting, continuous if from measuring — or categorical, and the data are its actual values. How accurately a statistic estimates its parameter depends entirely on how well the sample represents the population.',
      },
      {
        kind: 'para',
        text: 'Representation is engineered, not hoped for. In a simple random sample, every group of n members has the same chance of selection — the fair-lottery standard. A stratified sample first splits the population into strata (class year, region, income band) and draws a proportionate random sample from each, guaranteeing every subgroup its voice. A cluster sample randomly selects whole naturally occurring groups — classrooms, city blocks, clinics — and studies everyone inside them, trading some precision for large savings in cost. Systematic sampling takes every kth entry from an ordered list after a random start. And convenience sampling — surveying whoever happens to be at hand — is not random at all: a mall poll speaks for mall-goers, not the city.',
      },
      {
        kind: 'para',
        text: 'Bias enters through channels no formula repairs: self-selected respondents with strong opinions, questions worded to invite an answer, samples too small to stabilize, non-response that quietly changes who is being measured, and confounding factors entangled with the one under study. Distinguish the two error families. Sampling error — the gap between statistic and parameter caused by observing a sample at all — shrinks as samples grow. Nonsampling errors (a miscalibrated scale, a mis-keyed record, a leading question) do not. A bigger sample of the wrong people is just wrong with more confidence.',
      },
      {
        kind: 'para',
        text: 'Now the conceptual pivot. Draw a sample and compute its mean; draw another and compute again — the two means differ. The sampling distribution of the mean is the distribution of x̄ across all possible samples of a given size, and it has three disciplined features: its center is the population mean μ, its spread is smaller than the population\u2019s own, and its shape marches toward the normal curve as n grows. That spread has an exact name — the standard error of the mean, σ/√n — and it is the natural yardstick for how far a typical sample mean lands from the truth. The same idea attaches to any statistic: its variation from sample to sample is its sampling variability, measured by its standard error.',
      },
      {
        kind: 'para',
        text: 'The central limit theorem is why statistics works at all: whatever the shape of the parent population — flat, skewed, lumpy — for large enough samples the distribution of the sample mean is approximately normal with mean μ and standard deviation σ/√n. About 30 observations is the usual rule of thumb for "large enough," and fewer suffice when the population is already close to normal; a classroom dice game shows the effect, since single rolls land flat across the faces while averages of five or ten dice already pile into a bell. A companion version handles sums: the total of a sample is approximately normal with mean nμ and standard deviation √n·σ. Both embody the law of large numbers — as n grows the standard error shrinks toward zero, so the sample mean closes in on μ — and both turn questions about samples into ordinary z-score lookups on the standard normal curve.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Central limit theorem for means',
        latex: '\\bar{X} \\sim N\\!\\left(\\mu_X,\\ \\frac{\\sigma_X}{\\sqrt{n}}\\right)',
        meaning: 'For large n, sample means are approximately normal with the original mean and a standard deviation reduced by √n — that reduced spread is the standard error.',
      },
      {
        kind: 'formula',
        name: 'Central limit theorem for sums',
        latex: '\\Sigma X \\sim N\\!\\left(n\\mu_X,\\ \\sqrt{n}\\,\\sigma_X\\right)',
        meaning: 'Sample totals are approximately normal with mean nμ and standard deviation √n·σ — the companion result when the question is about totals rather than averages.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: the probability that the average lifetime of 64 batteries exceeds 504 hours, when individual lifetimes average 500 hours with standard deviation 20 hours and follow no particular distribution.',
          'Recall the governing idea: the question concerns a sample mean, so the central limit theorem applies — x̄ is approximately normal with mean 500 and standard error 20/√64 = 2.5 hours.',
          'Apply: the z-score of 504 is (504 − 500)/2.5 = 1.6; the standard normal table places about 0.945 of the area below 1.6, leaving 0.055 above it.',
          'State the result: about a 5.5% chance that 64 batteries average over 504 hours. Contrast the individual view — one battery exceeding 504 hours has z = (504 − 500)/20 = 0.2, an unremarkable 42% chance. Averaging tames randomness: the same four-hour margin is 8 standard errors wide for the mean but well within a single standard deviation for one battery.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Election polls interview 1,000–2,000 voters and report margins of error computed directly from the standard error.',
          'Quality control charts the means of hourly production samples, leaning on the CLT\u2019s normal shape to set control limits.',
          'Clinical trials compare average outcomes across treatment and control samples to separate real effects from noise.',
          'Auditors estimate the total error in thousands of accounts from a random sample of transactions — the CLT for sums.',
          'A/B tests average the behavior of thousands of users before declaring a website change a winner.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The classic misfire is applying the CLT to an individual value: the theorem describes sample means and sums, not single observations, whose probabilities come from the original distribution. Watch the square root — quadrupling the sample only halves the standard error, so precision is bought at a steep price. No sample size cures a biased scheme: a million self-selected respondents still speak only for themselves. And when sampling without replacement from a small population, the with-replacement mathematics behind the theorem needs a correction.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Population', def: 'The entire group — people, objects, or measurements — under study.' },
          { term: 'Sample', def: 'The subset of the population actually observed; the source of the data.' },
          { term: 'Simple random sample', def: 'A sample in which every group of the same size is equally likely to be chosen.' },
          { term: 'Stratified sample', def: 'Proportionate random samples drawn from each of the population\u2019s strata.' },
          { term: 'Cluster sample', def: 'Randomly chosen whole groups, with every member inside them studied.' },
          { term: 'Sampling distribution', def: 'The distribution of a statistic across all possible samples of one size.' },
          { term: 'Standard error', def: 'The standard deviation of a sampling distribution — σ/√n for sample means.' },
          { term: 'Central limit theorem', def: 'For large samples, sample means (and sums) are approximately normal whatever the population\u2019s shape.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A researcher surveys every fifth person entering a stadium after a randomly chosen start. This is:',
            options: ['Simple random sampling', 'Systematic sampling', 'Cluster sampling', 'Stratified sampling'],
            answer: 1,
            explain: 'Systematic sampling takes every kth entry from an ordered stream after a random starting point.',
          },
          {
            q: 'A population has mean 50 and standard deviation 12. For samples of size 36, the mean and standard error of x̄ are:',
            options: ['50 and 12', '50 and 2', '0.83 and 2', '50 and 0.33'],
            answer: 1,
            explain: 'The sampling distribution keeps the population mean but divides the spread by √36 = 6, giving 12/6 = 2.',
          },
          {
            q: 'The central limit theorem says that for large n, the distribution of the sample mean is approximately:',
            options: ['The same shape as the population', 'Uniform', 'Normal, regardless of the population\u2019s shape', 'Skewed to the right'],
            answer: 2,
            explain: 'Normality of x̄ emerges from averaging itself, whatever the parent distribution looks like — the theorem\u2019s whole point.',
          },
          {
            q: 'To guarantee each subgroup of a population appears in its correct proportion, use:',
            options: ['Convenience sampling', 'A larger sample', 'Stratified sampling', 'Cluster sampling'],
            answer: 2,
            explain: 'Strata are sampled proportionately by design; chance alone does not promise proportional representation.',
          },
          {
            q: 'Quadrupling the sample size does what to the standard error of the mean?',
            options: ['Halves it', 'Quarters it', 'Doubles it', 'Leaves it unchanged'],
            answer: 0,
            explain: 'The standard error is σ/√n, so n → 4n sends √n to 2√n and cuts the error to half its former size.',
          },
          {
            q: 'A researcher wants the probability that one randomly selected battery lasts over 504 hours. The central limit theorem:',
            options: ['Applies directly', 'Does not apply — the CLT governs sample means and sums, not individual values', 'Applies only if the population is normal', 'Applies provided n is greater than 30'],
            answer: 1,
            explain: 'Use the original distribution for a single observation; the CLT describes only the behavior of statistics such as x̄ and ΣX.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: the means and standard deviations of our Describing Data topic — they are the raw material here. Next: Confidence Intervals and Hypothesis Testing, where the standard error becomes a margin of error and a test statistic. If you have met Bayes\' Theorem in our Probability topic, note the division of labor: Bayes updates the probability of hypotheses given data, while the CLT predicts how statistics scatter across repeated samples — both feed modern data analysis.',
        tone: 'path',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'stats-confidence-hypothesis-testing',
    title: 'Confidence Intervals and Hypothesis Testing',
    domain: 'Mathematics',
    field: 'Probability & Statistics',
    branch: 'Inferential Statistics',
    tier: 'advanced',
    concepts: [
      'Point estimates and margins of error',
      'Confidence intervals for means and proportions',
      'The Student t-distribution and degrees of freedom',
      'Null and alternative hypotheses',
      'p-values and significance levels',
      'Type I and Type II errors, and the power of a test',
    ],
    words: 1745,
    readMins: 9,
    addedOn: '2026-10-19',
    blocks: [
      {
        kind: 'para',
        text: 'A single number — "the average fill is 252 ml" — invites false certainty. The honest sentence adds a range and a confidence level, and the honest decision adds a rule for when the data are too surprising to ignore. This topic builds both instruments: the confidence interval, which brackets a population parameter with a margin of error, and the hypothesis test, which weighs evidence against a default claim through p-values. Together they form the working core of inferential statistics.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Nearly every quantitative claim in science, medicine, and business is one of these tools in disguise. "Supports X by ±3 points" is a confidence interval; "statistically significant, p < 0.05" is a hypothesis test. Fluency here means you can both produce such statements and interrogate the ones aimed at you.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A confidence interval starts from a point estimate — the sample mean x̄ or sample proportion p′ — and builds a symmetric band around it: (estimate − error bound, estimate + error bound). For a mean with known population σ, the error bound is z_{α/2}·σ/√n: the confidence level CL = 1 − α is the central area of the sampling distribution captured, and z_{α/2} is the standard-normal value leaving α/2 in each tail — 1.645 for 90%, 1.96 for 95%, 2.326 for 98%. The interpretation demands care: a 95% level means that 95% of intervals constructed this way, across repeated sampling, capture the true parameter. Any single interval either contains the truth or does not — the probability speaks about the method, not about the one interval on your screen.',
      },
      {
        kind: 'para',
        text: 'The machinery exposes a three-way trade. Raising the confidence level widens the interval — more certainty, less precision. Enlarging the sample narrows it, but only at the √n rate: halving a margin of error quadruples the required sample. Solving the error-bound equation for n lets planners size a study in advance: n = (z·σ/EBM)², always rounded up — wanting a sample mean within two years of the true mean student age, with σ = 15 at 95% confidence, demands 217 students.',
      },
      {
        kind: 'para',
        text: 'In practice σ is rarely known, and substituting the sample standard deviation s adds uncertainty the normal curve ignores. The Student t-distribution is the remedy: bell-shaped but heavier in the tails, indexed by degrees of freedom n − 1 — one fewer than the sample size, because the deviations inside s are constrained to sum to zero — and indistinguishable from the normal curve once n grows large. It was derived by William Gosset, who published as "Student" while running small experiments on barley at the Guinness brewery. Proportions get their own error bound, z·√(p′q′/n) with q′ = 1 − p′, reliable when the counts of successes and failures both reach at least five; an election poll\u2019s "±3 percentage points" is exactly this quantity.',
      },
      {
        kind: 'para',
        text: 'A hypothesis test runs a court with two rival claims. The null hypothesis H0 is the default — no difference, no effect, status quo — and always carries the equality (=, ≤, or ≥). The alternative hypothesis Ha is what the researcher hopes to establish, never contains an equality, and its direction (<, >, or ≠) fixes the test as left-, right-, or two-tailed. The engine is a rarity argument: assume H0 is true, compute the probability that sampling luck alone would deliver results at least as extreme as yours — that probability is the p-value — and if it falls below the preset significance level α, chosen before the data and customarily 0.05, the outcome is too rare to blame on chance and H0 is rejected. A p-value above α means the data fail to provide sufficient evidence: the verdict is "not proven," never proof that H0 is true.',
      },
      {
        kind: 'para',
        text: 'Because the court decides under uncertainty, it can err two ways. A Type I error rejects a true null — convicting the innocent — and its probability is exactly α. A Type II error lets a false null stand — freeing the guilty — with probability β; the power of the test, 1 − β, is the chance of detecting an effect that is really there, and it grows with sample size. Which error wounds more depends on context: a smoke detector should tolerate false alarms but never miss a fire, while a spam filter may prefer the reverse. So α is chosen by consequence, not by habit.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Confidence interval for a mean (σ known)',
        latex: '\\left(\\bar{x} - z_{\\alpha/2}\\cdot\\frac{\\sigma}{\\sqrt{n}},\\ \\ \\bar{x} + z_{\\alpha/2}\\cdot\\frac{\\sigma}{\\sqrt{n}}\\right)',
        meaning: 'Point estimate ± margin of error; the bound z_{α/2}·σ/√n leaves α/2 probability in each tail so the central area equals the confidence level.',
      },
      {
        kind: 'formula',
        name: 'Test statistics for a mean',
        latex: 'z = \\frac{\\bar{x} - \\mu_0}{\\sigma/\\sqrt{n}} \\qquad\\qquad t = \\frac{\\bar{x} - \\mu_0}{s/\\sqrt{n}}',
        meaning: 'Standard errors between the sample mean and the null value; use z when σ is known, t with n − 1 degrees of freedom when s substitutes for σ.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a 95% confidence interval for the true mean fill of a coffee machine, and a decision on the labeled claim that the mean is 250 ml, from a sample of n = 36 cups with x̄ = 252 ml and known σ = 5 ml.',
          'Recall the governing ideas: with σ known the error bound is EBM = z_{α/2}·σ/√n with z_{0.025} = 1.96, and the test statistic z = (x̄ − μ0)/(σ/√n) counts standard errors between the sample mean and the null value.',
          'Apply, interval: the standard error is 5/√36 ≈ 0.833, so EBM = 1.96 × 0.833 ≈ 1.63 and the 95% interval is (252 − 1.63, 252 + 1.63) = (250.37, 253.63) ml.',
          'Apply, test: for H0: μ = 250 against Ha: μ ≠ 250, the statistic is z = (252 − 250)/0.833 = 2.4, and the two-tailed p-value is 2 × P(Z > 2.4) ≈ 0.016.',
          'State the result: the interval excludes 250 and the p-value falls below α = 0.05 — the two procedures agree, as they always must at matching levels: at the 5% level, the machine is overfilling by roughly 2 ml on average.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Election reporting: the margin of error attached to a poll is a confidence-interval statement in disguise.',
          'Clinical research: treatments advance on trials that reject the null hypothesis of "no better than placebo."',
          'Manufacturing: process means are bracketed with intervals, and drift outside them triggers recalibration.',
          'A/B testing: shipping decisions weigh p-values from conversion-rate experiments.',
          'Environmental regulation: agencies test whether average pollutant levels exceed legal limits rather than trusting single readings.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The most-repeated misread of a 95% interval is "there is a 95% probability the parameter lies in it" — the correct claim is about the long-run success rate of the method. Its twin is "we accept H0": failing to reject is not proof of the null. A p-value is the probability of data at least this extreme if the null is true — not the probability that the null is true, and not the size of the effect: a trivial difference turns statistically significant in a large enough sample. Choose α before seeing the data, use t rather than z when σ is unknown and the sample is small, and never test a hypothesis on the same data that suggested it.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Point estimate', def: 'The single sample statistic (x̄ or p′) that stands in for the unknown parameter.' },
          { term: 'Margin of error', def: 'The error bound added and subtracted around a point estimate; grows with confidence level, shrinks with sample size.' },
          { term: 'Confidence level', def: 'The long-run proportion of similarly constructed intervals that capture the true parameter.' },
          { term: 'Student t-distribution', def: 'A bell curve with heavier tails, used when s substitutes for σ, with n − 1 degrees of freedom.' },
          { term: 'Null hypothesis', def: 'The default claim containing an equality; rejected only when the evidence against it is strong. Its rival, the alternative hypothesis Ha, carries the <, >, or ≠.' },
          { term: 'p-value', def: 'The probability, computed assuming H0 is true, of results at least as extreme as those observed.' },
          { term: 'Type I error', def: 'Rejecting a true null hypothesis; its probability is the significance level α.' },
          { term: 'Type II error', def: 'Failing to reject a false null hypothesis; probability β, with 1 − β the power of the test.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A 95% confidence interval for a mean is (12.1, 14.7). The correct interpretation is:',
            options: ['There is a 95% chance the population mean is between 12.1 and 14.7', '95% of the data lie between 12.1 and 14.7', 'About 95% of intervals built this way from repeated samples would contain the true population mean', 'The sample mean has a 95% chance of being correct'],
            answer: 2,
            explain: 'Confidence describes the procedure\u2019s long-run success rate, not a probability attached to one computed interval.',
          },
          {
            q: 'A researcher raises the confidence level from 90% to 99% on the same data. The interval:',
            options: ['Becomes narrower', 'Becomes wider', 'Stays the same width', 'Centers on a different value'],
            answer: 1,
            explain: 'More confidence demands capturing more of the sampling distribution, so the error bound — and the interval — grow; the center stays at the point estimate.',
          },
          {
            q: 'A sample of 15 measurements has unknown population standard deviation. A confidence interval for the mean should use:',
            options: ['The normal distribution', 'The Student t-distribution with 14 degrees of freedom', 'The Student t-distribution with 15 degrees of freedom', 'The binomial distribution'],
            answer: 1,
            explain: 'When s stands in for σ, the t-distribution with df = n − 1 = 14 compensates for the extra uncertainty with heavier tails.',
          },
          {
            q: 'A test yields p = 0.03 with α = 0.05. The decision is:',
            options: ['Reject H0 — the result is statistically significant', 'Do not reject H0', 'Accept Ha as certainly true', 'Conclude H0 is true'],
            answer: 0,
            explain: 'With the p-value below α, data this extreme would be too rare under the null; reject H0 in favor of the alternative.',
          },
          {
            q: 'A Type I error occurs when:',
            options: ['A false null hypothesis is not rejected', 'A true null hypothesis is rejected', 'The sample size is too small', 'The p-value is large'],
            answer: 1,
            explain: 'Type I is the false alarm — rejecting a true null — and its probability is exactly α.',
          },
          {
            q: 'A poll reports 40% support "with a margin of error of ±3 percentage points." This is:',
            options: ['A hypothesis test', 'A confidence interval for a proportion', 'A measure of data spread', 'A p-value'],
            answer: 1,
            explain: 'Estimate ± margin of error is the confidence-interval form; for proportions the bound is z·√(p′q′/n).',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: Sampling and the Central Limit Theorem — every formula here is the standard error wearing a job badge. Follow with Correlation and Linear Regression, which tests relationships instead of single parameters, and see our Bayes\' Theorem topic for the Bayesian alternative that assigns probabilities to hypotheses directly.',
        tone: 'path',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'stats-correlation-regression',
    title: 'Correlation and Linear Regression',
    domain: 'Mathematics',
    field: 'Probability & Statistics',
    branch: 'Statistical Modeling',
    tier: 'intermediate',
    concepts: [
      'Scatter plots and bivariate data',
      'The correlation coefficient r',
      'Least-squares regression and residuals',
      'The coefficient of determination r²',
      'Testing the significance of r',
      'Interpolation versus extrapolation',
      'Outliers and influential points',
    ],
    words: 1691,
    readMins: 8,
    addedOn: '2026-10-19',
    blocks: [
      {
        kind: 'para',
        text: 'Does more practice mean more points? Does a longer lever lift more weight? When two numerical variables travel together, statistics needs a way to draw the line — literally. This topic builds the classical toolkit for bivariate data: the scatter plot to see a relationship, the correlation coefficient to measure it, the least-squares line to exploit it for prediction, and the warnings — outliers, extrapolation, and the seductive leap from correlation to causation — that keep the toolkit honest.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Regression is everywhere: colleges predict GPAs, insurers price risk, economists fit demand curves, and sports analytics projects player value. The AI and Data-Science subject in this library revisits regression as a machine-learning workhorse; this topic builds it the way statisticians do — from scatter plots and residuals upward — so you know exactly what the black box knows.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Bivariate data pair each observation of an explanatory variable x with a value of a response variable y, and the scatter plot simply graphs the pairs as points. Before any formula, the plot answers three questions. Direction: do high x values go with high y values (positive) or with low ones (negative)? Strength: how tightly do the points hug a straight line? Form: is the pattern linear, curved, or absent? A cloud with no tilt means no linear relationship — however strong some curved relationship may be hiding inside it — which is why the plot always comes first.',
      },
      {
        kind: 'para',
        text: 'The correlation coefficient r condenses the cloud into one number between −1 and 1. Its sign gives the direction and always matches the sign of any line fitted through the data; its magnitude gives the strength, with values near ±1 meaning the points cluster tightly around a line and r = 0 meaning no linear tilt at all. Perfect values of +1 or −1 occur only when every point lies exactly on a line. Two cautions travel with r: it measures only linear association, so a strong curved relationship can score zero, and it says nothing about causation — ice-cream sales and drownings correlate because summer drives both.',
      },
      {
        kind: 'para',
        text: 'To predict y from x, fit ŷ = a + bx. The method of least squares chooses the line that minimizes the sum of squared residuals — the vertical gaps y − ŷ between observed and predicted values, each gap positive when the point sits above the line and negative when it sits below. Calculus delivers the winners: the slope b = r·(sy/sx) and the intercept a = ȳ − b·x̄, so the line always passes through the point of means (x̄, ȳ). The slope translates into plain language: for each one-unit increase in x, y changes by b units on average. Prediction is trustworthy inside the observed range of x — interpolation — and becomes extrapolation outside it: a guess about territory the data never visited.',
      },
      {
        kind: 'para',
        text: 'Squaring r gives the coefficient of determination: the proportion — usually quoted as a percentage — of the variation in y explained by the regression on x, with the remainder living in the scatter of points about the line. An r² of 0.81 says 81% of the variation in the response follows the explanatory variable, and 19% is everything else the world does. Note the geometry hiding in the square: r = 0.9 and r = 0.5 sound like neighbors, but they explain 81% and 25% of the variation respectively — apparent small differences in r are large differences in explanation.',
      },
      {
        kind: 'para',
        text: 'A sample correlation carries uncertainty: the population coefficient ρ might be zero, the tilt of the sample mere luck. The significance test sets H0: ρ = 0 against Ha: ρ ≠ 0 and refers t = r√(n − 2)/√(1 − r²) to the t-distribution with n − 2 degrees of freedom; only a significant r licenses prediction from the line. The test also assumes the data deserve it: a genuinely linear trend in the population, y values scattered normally around the line with the same spread throughout, independent residuals, and a random sample. Then inspect the points themselves. A regression outlier lies more than two residual standard deviations above or below the fitted line, where the residual standard deviation is s = √(SSE/(n − 2)); an influential point sits far from the pack horizontally and can swing the slope alone — deleting it and refitting is the diagnostic. Removing a genuine error tightens the fit; removing an inconvenient truth is malpractice. Investigate before you delete.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'Least-squares regression line',
        latex: '\\hat{y} = a + bx, \\qquad b = r\\cdot\\frac{s_y}{s_x}, \\qquad a = \\bar{y} - b\\bar{x}',
        meaning: 'The line minimizing the sum of squared residuals; it passes through (x̄, ȳ), and its slope is the correlation scaled by the ratio of the standard deviations.',
      },
      {
        kind: 'formula',
        name: 'Significance test for r',
        latex: 't = \\frac{r\\sqrt{n-2}}{\\sqrt{1-r^2}} \\quad (\\text{df} = n - 2)',
        meaning: 'Tests H0: ρ = 0; a large |t| means the sample correlation is too far from zero to blame on chance, so the line may be used for prediction.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: fit a line predicting exam score from weekly study hours for five students — (2, 65), (4, 68), (6, 72), (8, 71), (10, 74) — and measure how well the line explains the scores.',
          'Recall the governing ideas: least squares minimizes the sum of squared residuals; the slope is the ratio of the cross-product of deviations to the squared x-deviations (equivalently r·sy/sx), and the intercept is ȳ − b·x̄.',
          'Apply: x̄ = 6 and ȳ = 70; the cross-products of deviations total 42 and the squared x-deviations total 40, so b = 42/40 = 1.05 and a = 70 − 1.05 × 6 = 63.7, giving ŷ = 63.7 + 1.05x with r ≈ 0.94.',
          'State the result: each additional study hour is associated with about one extra point on average; r² ≈ 0.88, so roughly 88% of the variation in scores tracks study time; a student studying 5 hours predicts ŷ = 63.7 + 1.05 × 5 ≈ 69 points — an interpolation, since 5 lies within the observed 2-to-10 range.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Real-estate appraisal adjusts a base price per square foot — a slope estimated by regressing sale prices on sizes of comparable homes.',
          'Epidemiology measures correlations between exposure and disease rates while resisting the leap to causation without controlled studies.',
          'Calibration laboratories fit instrument readings against known standards to build correction lines.',
          'Sports analytics projects player performance from measurable training and physical variables.',
          'Finance estimates a stock\u2019s beta — literally the slope of the stock\u2019s returns regressed on market returns.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'The cardinal sin is extrapolation: predicting for x values beyond the observed range silently assumes the trend continues where no data vouch for it — a line fitted to houses of 1,000–3,000 square feet says nothing about mansions. Second, correlation is not causation: a lurking variable can move both x and y, as summer weather moves both ice-cream sales and drownings. Third, a single influential point can manufacture or destroy a correlation — always plot the scatter before trusting r. And r = 0 clears the data only of a linear relationship: a perfect parabola also scores zero.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Scatter plot', def: 'A graph of paired (x, y) data; the first look at the direction, strength, and form of a relationship.' },
          { term: 'Correlation coefficient', def: 'A number r between −1 and 1 measuring the strength and direction of a linear association.' },
          { term: 'Least-squares line', def: 'The line ŷ = a + bx that minimizes the sum of squared vertical distances to the data.' },
          { term: 'Residual', def: 'The observed-minus-predicted value y − ŷ; the vertical miss of the line at each point.' },
          { term: 'Coefficient of determination', def: 'r², the share of the variation in y explained by the regression line.' },
          { term: 'Interpolation', def: 'Predicting for x inside the observed range, where the line is on home ground; beyond that range lies extrapolation, a far riskier enterprise.' },
          { term: 'Outlier (in regression)', def: 'A point lying more than two residual standard deviations from the fitted line.' },
          { term: 'Influential point', def: 'A point far from the others horizontally whose removal measurably changes the slope of the line.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A scatter plot shows points tightly clustered around a line rising from lower-left to upper-right. The correlation is closest to:',
            options: ['−0.9', '0', '0.9', 'Impossible to say without the data'],
            answer: 2,
            explain: 'A tight cloud on a rising line is a strong positive linear association: r near +1, hence near +0.9.',
          },
          {
            q: 'The residual for a data point is:',
            options: ['The horizontal distance to the line', 'y − ŷ, the vertical distance between observed and predicted values', 'The slope times x', 'Always positive'],
            answer: 1,
            explain: 'Residuals are vertical misses — positive above the line, negative below — and least squares makes their squares as small as possible.',
          },
          {
            q: 'A regression of test scores on study hours yields r² = 0.88. This means:',
            options: ['88% of students improved', 'The correlation is 0.44', 'About 88% of the variation in scores is explained by the regression on study hours', 'The predictions are 88% accurate'],
            answer: 2,
            explain: 'r² is the share of variation in the response variable explained by the fitted line through the explanatory variable.',
          },
          {
            q: 'Your study-hours data range from 2 to 10 hours. Which prediction is interpolation?',
            options: ['Predicting for 15 hours', 'Predicting for 1 hour', 'Predicting for 5 hours', 'Predicting for 100 hours'],
            answer: 2,
            explain: 'Only x = 5 lies inside the observed range; the others are extrapolations into unvisited territory.',
          },
          {
            q: 'A point that sits far from the other x values and dramatically changes the slope when removed is:',
            options: ['A residual', 'An influential point', 'A parameter', 'The coefficient of determination'],
            answer: 1,
            explain: 'Influence comes from horizontal distance from the pack; such points deserve investigation before they are trusted or deleted.',
          },
          {
            q: 'Ice-cream sales and drowning deaths rise together every summer. The best conclusion:',
            options: ['Ice cream causes drowning', 'Drowning causes ice-cream sales', 'A third variable — hot weather — likely drives both; correlation is not causation', 'The correlation must be zero'],
            answer: 2,
            explain: 'A confounding variable can create a real correlation with no direct causal link between x and y.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        text: 'Prerequisites: descriptive statistics (means, standard deviations, z-scores) and the hypothesis-testing logic of our Confidence Intervals topic — testing r is a t-test in disguise. Next: multiple regression with several explanatory variables, ANOVA for comparing several means, and the AI & Data-Science subject in this library, which scales the same least-squares idea into modern prediction engines.',
        tone: 'path',
      },
    ],
  },
]
