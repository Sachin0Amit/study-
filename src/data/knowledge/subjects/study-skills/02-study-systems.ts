/**
 * Knowledge Universe — Study Skills & Learning Science — Chapter 02: Study Systems
 * 5 lessons · ~13,744 words
 * field: Study Skills & Memory
 * legacy sources: foundation-learning.ts, x36-learning-science-pass.ts, x52-crossverify-pass.ts, x53-crossverify-pass.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: branches [Study Systems]
 *
 * Lessons (snapshot at reorganization):
 *   02.1 fnd-habits-behavior-design — Habits and Behavior Design: Automating the Studying
 *   02.2 study-time-management — Time Management for Students: Owning the Study Week
 *   02.3 study-stress-wellbeing — Stress, Well-being and Sustainable Study
 *   02.4 study-procrastination-zombies — Procrastination and the Zombie Habits: Rewriting the Cue
 *   02.5 study-note-taking-systems — Note-Taking Systems Compared: Cornell, Outlines and Zettelkasten
 */
import type { KnowledgeTopic } from '../../types'

export const studySkillsCh02: KnowledgeTopic[] = [
  // ------------------------------------------------------------------
  {
    id: 'fnd-habits-behavior-design',
    title: 'Habits and Behavior Design: Automating the Studying',
    domain: 'Foundation Learning',
    field: 'Study Skills & Memory',
    branch: 'Study Systems',
    tier: 'core',
    concepts: [
      'Habits: cue-triggered automaticity',
      'The 43% share: authoring the automatic',
      'Initiation, learning and stability phases',
      'The 66-day median and the 18–254 range',
      'Rewards that cement the link',
      'Implementation intentions: if–then plans',
      'Friction and context design',
      'Lapse recovery: never miss twice',
      'The habit loop: cue, routine, reward',
      'Dopamine and the prediction error',
      'Breaking unwanted habits: monitoring and substitution',
    ],
    words: 2999,
    readMins: 15,
    addedOn: '2026-10-25',
    blocks: [
      {
        kind: 'para',
        text: 'Every learner has met the intention–behavior gap: you decide on Sunday to review notes daily, and by Thursday the plan is a guilt archive. The research language for it is blunt — even strong intentions are a weak predictor of what people actually do, because deciding and doing are run by different machinery. Behavior design closes the gap not by wanting harder but by outsourcing the starting: choosing cues, contexts and if–then plans so the right action begins before motivation is consulted.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Every technique in this library — spaced repetition, active recall, interleaving — presumes you actually show up, again and again, for months. The showing up is its own skill, and it has its own science. A study habit that runs on cues rather than willpower is the infrastructure under everything else in this domain.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'A habit, in the research definition, is an action triggered automatically in response to contextual cues that have been associated with its performance. Automaticity is the point: once initiation transfers to external cues — the time, the place, the preceding event — the behavior no longer depends on conscious attention or motivational states. That is the strategic prize, and it is why habits persist even after the motivation that started them has long dissipated: the cue fires and the routine runs, the way you reach for a seatbelt without a debate.',
      },
      {
        kind: 'para',
        text: 'How much of daily life runs on this machinery? Diary research by Wendy Wood and colleagues put the share at roughly forty per cent: about 43% of everyday actions were performed almost daily and usually in the same context — repeated, cue-triggered, barely thought about. That share is the strategic point for a student: whichever study system you run, most of its showings-up will be habit-driven whether you designed them or not. Behavior design is the decision to author that forty per cent deliberately — choosing which actions become automatic — instead of inheriting whatever the environment happened to train.',
      },
      {
        kind: 'para',
        text: 'Habit formation has three phases. Initiation: select one small behavior and one consistent context — the when-and-where decision, which is itself the design act. Learning: repeat the behavior in that same context; through associative learning the context and the action fuse, each repetition strengthening the link. Stability: the habit is formed and now maintains itself with minimal effort — the behavior has become, as participants in the classic study put it, second nature, something they felt strange not doing.',
      },
      {
        kind: 'para',
        text: 'How long does the learning phase take? The best-known real-world study — Lally and colleagues, volunteers installing one new daily behavior each — measured daily self-reported automaticity and watched it rise fast, then decelerate, then plateau. The average plateau arrived around 66 days. The honest fine print: that figure is a median over the subset of participants whose data fit the model, and individual estimates ranged from 18 to 254 days — a fourteenfold spread. Behavior type mattered too: drinking a glass of water plateaued near 59 days, eating behaviors near 65, exercise near 91. So treat "66 days" as a planning midpoint, not a deadline — and as a reason to distrust any product promising a habit in a week.',
      },
      {
        kind: 'figure',
        caption:
          'The automaticity curve the Lally study actually measured: daily repetitions in the same context drive self-rated automaticity up steeply at first, then decelerating, until the behavior plateaus — the stability phase where the habit runs itself. The median plateau arrived near 66 days, but individual estimates ranged from 18 to 254 days, and behavior type shifted the midpoint (drinking water near 59, exercise near 91). Read it as a planning curve, not a countdown: the question is never “am I at day 66?” but “which phase am I in?”',
        afterConcept: 4,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Automaticity rises fast then plateaus: median 66 days, individual range 18 to 254 days">
  <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
    <path d="M84 54 Q82 220 86 392"/>
    <path d="M82 388 Q300 392 540 387 Q700 391 834 386"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.5" stroke-linecap="round">
    <path d="M89 56 Q87 220 91 390"/>
    <path d="M79 393 Q300 397 540 392 Q700 396 831 391"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" fill="currentColor">
    <text x="32" y="224" font-size="15" font-style="italic" text-anchor="middle" transform="rotate(-90 32 224)">Automaticity (self-rated)</text>
    <text x="836" y="448" font-size="15" font-style="italic" text-anchor="end">Days of daily repetitions in the same context</text>
    <g font-size="11.5" fill="#8a8a93" text-anchor="middle">
      <text x="86" y="380">0</text><text x="237" y="380">62</text><text x="388" y="380">125</text><text x="539" y="380">188</text><text x="690" y="380">250</text>
    </g>
  </g>
  <!-- individual-range band 18..254 days -->
  <rect x="112" y="70" width="578" height="316" fill="#059669" opacity="0.05"/>
  <g stroke="#8a8a93" stroke-width="1.4" stroke-dasharray="5 5" opacity="0.75">
    <line x1="112" y1="62" x2="112" y2="388"/>
    <line x1="690" y1="62" x2="690" y2="388"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93" text-anchor="middle">
    <text x="112" y="52">18 days — fastest</text>
    <text x="664" y="52">254 days — slowest</text>
  </g>
  <!-- median marker -->
  <line x1="229" y1="62" x2="229" y2="388" stroke="#d97706" stroke-width="2" stroke-dasharray="7 6" opacity="0.9"/>
  <text x="237" y="86" font-family="Georgia, 'Times New Roman', serif" font-size="13.5" font-style="italic" fill="#d97706">~66-day median plateau</text>
  <!-- the automaticity curve: steep rise, decelerate, plateau -->
  <g fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round" opacity="0.97">
    <path d="M88 396 C 110 330 128 258 148 214 C 166 176 186 152 210 140 C 250 121 300 118 360 116 C 470 113 600 112 700 112 C 740 112 780 112 812 113"/>
  </g>
  <g fill="none" stroke="#059669" stroke-width="1" opacity="0.45" stroke-linecap="round">
    <path d="M92 399 C 114 333 132 261 152 218 C 170 180 190 156 214 144 C 254 125 304 122 364 120 C 474 117 604 116 704 116 C 744 116 782 116 810 117"/>
  </g>
  <!-- phase brackets -->
  <g fill="none" stroke="#8a8a93" stroke-width="1.6" stroke-linecap="round">
    <path d="M90 404 L90 412 L150 412 L150 404"/>
    <path d="M150 404 L150 412 L228 412 L228 404"/>
    <path d="M228 404 L228 412 L700 412 L700 404"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="currentColor" text-anchor="middle">
    <text x="120" y="430">initiation</text>
    <text x="189" y="430">learning</text>
    <text x="464" y="430">stability — the habit runs itself</text>
  </g>
  <!-- curve label -->
  <text x="470" y="170" font-family="Georgia, 'Times New Roman', serif" font-size="14" font-style="italic" fill="currentColor">rise, decelerate, plateau</text>
</svg>`
      },
      {
        kind: 'para',
        text: 'What cements the link during the learning phase is the reward that follows the routine. Habits consolidate when performance is followed by something the brain registers as worth repeating — the checked box, the streak, the small relief of a finished set. The research caution is on extrinsic payoffs: the meta-analysis by Deci, Koestner and Ryan found tangible rewards can undermine intrinsic motivation for interesting tasks, and when the payment stops the behavior often collapses with it. Keep the reward small, immediate and attached to the act — the calendar cross from the worked example — and let the growing automaticity itself become the payoff: the habit that costs nothing to start is its own best reward.',
      },
      {
        kind: 'para',
        text: 'The sharpest tool in behavior design is the implementation intention — a plan in the literal form: if situation Y arises, then I will do action Z. "If I pour my morning coffee, then I will work through ten flashcards at the kitchen table." The meta-analytic evidence summarized by Gollwitzer and Sheeran shows these plans reliably raise goal attainment, and the mechanism is exactly the habit mechanism: the plan forges a strong associative link between a concrete cue and a concrete action, so that encountering the cue triggers the action strategically rather than leaving it to deliberation. Physiological studies even find reduced activity in brain regions for effortful control — the if–then plan hands the start of the action to the environment.',
      },
      {
        kind: 'para',
        text: 'Around that core, design the field. Friction: make the desired behavior the path of least resistance — bag packed the night before, flashcard app on the home screen, textbook already open on the desk; and add friction to rivals by putting the phone in another room. Context consistency: the same time and place is the training signal, and the Lally study found participants who skipped repetitions showed poorer automaticity growth. Cue stacking: bolt the new behavior onto an existing stable one — after I close my laptop at lunch, I do one mixed problem set — so an already-automatic routine becomes the cue for the new one.',
      },
      {
        kind: 'para',
        text: 'Lapses are data, not verdicts. In the Lally study a single missed opportunity barely registered — automaticity dipped by less than half a point on a 0–42 scale and recovered quickly. What kills habits is not the missed day but the cascade after it: one skip becomes a week, and the context link decays. The practical rule is never miss twice. A second miss in the same slot is the signal to shrink the behavior until it fits the worst day — ten flashcards become two — because protecting the cue–context link matters more than the session volume. Deliberate practice owns the quality of what you do in the session; this lesson only owns the automation of arriving.',
      },
      {
        kind: 'para',
        text: 'Where does the automaticity come from? The working template is the habit loop — cue, routine, reward — popularized by Charles Duhigg\'s The Power of Habit (2012) and grounded in basal-ganglia research, notably Ann Graybiel\'s tracing of habit circuits into the dorsolateral striatum at MIT. The loop explains a clinical oddity: the amnesic patient Eugene Pauly, studied in Larry Squire\'s laboratory, could not describe his own morning, yet walked his neighborhood daily — habit learning survived when memory could not file a day. Sharper still in the lab: Knowlton, Mangels and Squire (1996) gave amnesic patients a weather-prediction task built on cue–outcome associations; they learned it gradually and well, while basal-ganglia patients failed it. For the designer: choose the cue, script the routine, guarantee a small reward — the three beats the learning phase will fuse.',
      },
      {
        kind: 'figure',
        caption:
          'The habit loop, and where the dopamine goes. Left: the three-beat loop — cue, routine, reward — that the learning phase fuses into one unit. Right: before learning, dopamine fires at the reward; after learning, it fires at the cue, and an omitted predicted reward produces a dip — the prediction error.',
        afterConcept: 9,
        sketchImage: '/diagrams/habit-loop-prediction-sketch.jpg',
        sketchCaption: 'notebook plate — the habit loop and the dopamine shift',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="The habit loop: cue, routine, reward — and the dopamine response shifting from reward to cue after learning">
  <!-- LEFT PANEL: the habit loop -->
  <g fill="none" stroke="#8a8a93" stroke-width="1.2" stroke-dasharray="4 5" opacity="0.6" stroke-linecap="round">
    <path d="M208 96 Q400 66 508 176"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif">
    <!-- wobbly nodes -->
    <g fill="none" stroke-width="2.4" stroke-linecap="round">
      <path d="M118 62 Q190 55 262 61 Q269 78 263 95 Q190 103 119 96 Q111 79 118 62 Z" stroke="#d97706"/>
      <path d="M420 152 Q492 145 564 151 Q571 168 565 185 Q492 193 421 186 Q413 169 420 152 Z" stroke="#e11d48"/>
      <path d="M118 262 Q190 255 262 261 Q269 278 263 295 Q190 303 119 296 Q111 279 118 262 Z" stroke="#059669"/>
    </g>
    <g font-size="16" fill="currentColor" text-anchor="middle">
      <text x="190" y="85">cue</text>
      <text x="492" y="175">routine</text>
      <text x="190" y="285">reward</text>
    </g>
    <!-- loop arrows -->
    <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round">
      <path d="M258 74 Q390 62 448 138"/>
      <path d="M438 132 L448 138 L447 124"/>
      <path d="M448 196 Q400 268 266 282"/>
      <path d="M277 274 L266 282 L279 288"/>
      <path d="M158 258 Q120 180 148 106"/>
      <path d="M140 116 L148 106 L155 118"/>
    </g>
    <!-- loop center label -->
    <text x="330" y="185" font-size="17" font-style="italic" fill="currentColor" text-anchor="middle">the habit loop</text>
    <text x="330" y="208" font-size="12.5" fill="#8a8a93" text-anchor="middle">the learning phase fuses the three beats</text>
    <!-- panel divider -->
    <path d="M614 42 Q618 225 615 424" stroke="#8a8a93" stroke-width="1.4" stroke-dasharray="6 6" opacity="0.55" fill="none" stroke-linecap="round"/>
    <!-- RIGHT PANEL: dopamine shifts -->
    <text x="742" y="52" font-size="15" font-style="italic" fill="currentColor" text-anchor="middle">where the dopamine goes</text>
    <!-- before learning -->
    <text x="668" y="86" font-size="13" fill="#8a8a93" text-anchor="middle">before learning</text>
    <g fill="none" stroke="#8a8a93" stroke-width="2" stroke-linecap="round">
      <path d="M640 138 Q760 141 866 137"/>
    </g>
    <text x="672" y="158" font-size="12.5" fill="currentColor" text-anchor="middle">cue</text>
    <text x="836" y="158" font-size="12.5" fill="currentColor" text-anchor="middle">reward</text>
    <g fill="none" stroke="#e11d48" stroke-width="2.6" stroke-linecap="round">
      <path d="M668 137 Q672 136 675 131 Q678 100 681 131 Q684 136 688 137"/>
    </g>
    <text x="790" y="102" font-size="12.5" fill="#e11d48" text-anchor="middle">dopamine fires at the reward</text>
    <!-- after learning -->
    <text x="668" y="204" font-size="13" fill="#8a8a93" text-anchor="middle">after learning</text>
    <g fill="none" stroke="#8a8a93" stroke-width="2" stroke-linecap="round">
      <path d="M640 256 Q760 259 866 255"/>
    </g>
    <text x="672" y="276" font-size="12.5" fill="currentColor" text-anchor="middle">cue</text>
    <text x="836" y="276" font-size="12.5" fill="currentColor" text-anchor="middle">reward</text>
    <g fill="none" stroke="#059669" stroke-width="2.6" stroke-linecap="round">
      <path d="M660 255 Q664 254 667 249 Q670 214 673 249 Q676 254 680 255"/>
    </g>
    <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round">
      <circle cx="836" cy="248" r="6"/>
    </g>
    <text x="762" y="222" font-size="12.5" fill="#059669" text-anchor="middle">dopamine fires at the cue</text>
    <text x="800" y="300" font-size="12.5" fill="#8a8a93" text-anchor="middle">predicted reward: no spike</text>
    <text x="800" y="318" font-size="12.5" fill="#8a8a93" text-anchor="middle">(a dip if omitted) — the prediction error</text>
    <!-- footer note -->
    <text x="440" y="440" font-size="13" font-style="italic" fill="#8a8a93" text-anchor="middle">the shift is why a small reliable reward trains the cue, not just the session</text>
  </g>
</svg>`
      },
      {
        kind: 'para',
        text: 'The reward beat has its own neuroscience, and it explains why cues grip. Wolfram Schultz, with Peter Dayan and Read Montague (Science, 1997), recorded dopamine neurons in monkeys learning that a light predicts juice: at first the neurons fire at the unexpected reward; once the prediction is learned, the burst shifts to the cue; if the predicted reward is omitted, firing dips below baseline — the prediction error. A reliable small reward works by making the cue itself something to look forward to — which is why the calendar cross trains the evening slot, not only the session. Dark mirror: Ferster and Skinner\'s schedules of reinforcement (1957) showed variable-ratio payoff — reward on an unpredictable fraction of attempts — is the most extinction-resistant schedule, and it is the phone\'s design pattern; pull-to-refresh and badges are slot machines. Keep your habit\'s reward small, predictable and self-administered.',
      },
      {
        kind: 'para',
        text: 'What about habits you did not choose — the late-night phone crawl that eats a study slot? The design logic runs in reverse, and the evidence favors two moves over willpower. The first is monitoring: Quinn, Pascoe, Wood and Neal (2010) found that simply watching the unwanted habit — marking each occurrence — measurably improved control. The second is substitution: keep the cue, swap the routine, keep the reward — the golden rule Duhigg drew from recovery programs. Suppression leans on the effortful-control machinery habits exist to spare, and it collapses under load. Raise friction on the old routine, lower it on the substitute, and let the loop run the new way.',
      },
      {
        kind: 'figure',
        caption:
          'The repair kit for an unwanted habit. Keep the cue, keep the reward, swap the routine — substitution, not suppression. Raise friction on the old routine, lower it on the new, and keep a monitoring tally of every occurrence (Quinn, Pascoe, Wood and Neal, 2010).',
        afterConcept: 11,
        sketchImage: '/diagrams/keep-cue-swap-routine-sketch.jpg',
        sketchCaption: 'notebook plate — keep the cue, swap the routine, tally every occurrence',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 450" role="img" aria-label="The repair kit: keep the cue, swap the routine, keep the reward — with a monitoring tally and raised friction on the old routine">
  <g font-family="Georgia, 'Times New Roman', serif">
    <!-- OLD LOOP (left) -->
    <text x="200" y="52" font-size="15" font-style="italic" fill="#e11d48" text-anchor="middle">the old loop</text>
    <g fill="none" stroke-width="2.4" stroke-linecap="round">
      <path d="M132 76 Q196 69 260 75 Q267 92 261 109 Q196 117 133 110 Q125 93 132 76 Z" stroke="#d97706"/>
      <path d="M120 250 Q192 243 264 249 Q271 266 265 283 Q192 291 121 284 Q113 267 120 250 Z" stroke="#e11d48"/>
      <path d="M132 386 Q196 379 260 385 Q267 402 261 419 Q196 427 133 420 Q125 403 132 386 Z" stroke="#059669"/>
    </g>
    <g font-size="15" fill="currentColor" text-anchor="middle">
      <text x="196" y="99">cue</text>
      <text x="192" y="273">old routine</text>
      <text x="196" y="409">reward</text>
    </g>
    <!-- old loop arrows -->
    <g fill="none" stroke="#8a8a93" stroke-width="2" stroke-linecap="round">
      <path d="M176 112 Q150 170 168 240"/>
      <path d="M160 230 L168 240 L175 228"/>
      <path d="M196 286 Q196 330 196 376"/>
      <path d="M189 366 L196 376 L203 366"/>
    </g>
    <!-- friction wall in front of old routine -->
    <g fill="none" stroke="#e11d48" stroke-width="2.2" stroke-linecap="round">
      <path d="M238 214 L306 210 M240 228 L308 224 M242 242 L310 238"/>
      <path d="M252 212 L252 240 M276 211 L276 240 M298 210 L298 238"/>
    </g>
    <text x="352" y="232" font-size="12.5" fill="#e11d48" text-anchor="middle">raise friction</text>
    <!-- center swap arrow -->
    <g fill="none" stroke="#059669" stroke-width="2.6" stroke-linecap="round">
      <path d="M352 316 Q440 306 522 314"/>
      <path d="M508 306 L522 314 L509 322"/>
    </g>
    <text x="440" y="296" font-size="14" font-style="italic" fill="#059669" text-anchor="middle">keep the cue, swap the routine</text>
    <text x="440" y="345" font-size="12.5" fill="#8a8a93" text-anchor="middle">the reward stays the same</text>
    <!-- NEW LOOP (right) -->
    <text x="672" y="52" font-size="15" font-style="italic" fill="#059669" text-anchor="middle">the substitution</text>
    <g fill="none" stroke-width="2.4" stroke-linecap="round">
      <path d="M604 76 Q668 69 732 75 Q739 92 733 109 Q668 117 605 110 Q597 93 604 76 Z" stroke="#d97706"/>
      <path d="M596 250 Q664 243 732 249 Q739 266 733 283 Q664 291 597 284 Q589 267 596 250 Z" stroke="#059669"/>
      <path d="M604 386 Q668 379 732 385 Q739 402 733 419 Q668 427 605 420 Q597 403 604 386 Z" stroke="#059669"/>
    </g>
    <g font-size="15" fill="currentColor" text-anchor="middle">
      <text x="668" y="99">cue</text>
      <text x="664" y="273">new routine</text>
      <text x="668" y="409">same reward</text>
    </g>
    <g fill="none" stroke="#8a8a93" stroke-width="2" stroke-linecap="round">
      <path d="M648 112 Q622 170 640 240"/>
      <path d="M632 230 L640 240 L647 228"/>
      <path d="M668 286 Q668 330 668 376"/>
      <path d="M661 366 L668 376 L675 366"/>
    </g>
    <!-- monitoring tally (bottom center strip) -->
    <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round">
      <path d="M330 384 Q346 382 362 383 M380 382 Q396 380 412 382 M430 381 Q446 379 462 381 M480 380 Q496 378 512 380"/>
      <path d="M522 378 L508 388"/>
    </g>
    <text x="440" y="418" font-size="12.5" fill="#8a8a93" text-anchor="middle">monitoring tally — note each occurrence</text>
  </g>
</svg>`
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: build a durable daily review habit for a student who already has good materials but studies only when motivated.',
          'Recall the governing idea: pick one small behavior, one consistent context, and bind them with an if–then plan; design friction; expect a plateau in weeks-to-months, not days.',
          'Apply: set "If I finish dinner and clear my plate, then I will sit at the desk and run ten active-recall cards." Deck opens on the tablet that lives on the desk; phone charges in the hallway overnight; a wall calendar gets one cross per completed evening.',
          'State the result: the cue (dinner cleanup), the context (desk, evening) and the tiny first action are now one associative unit. Automaticity builds on its own curve — expect it to feel effortful for weeks, easier by two months, strange to skip by three. One missed night changes nothing; two in a row triggers the shrink-to-two-cards rule.',
        ],
      },
      {
        kind: 'derivation',
        title: 'Why the rule is “never miss twice”: the cascade arithmetic',
        statement:
          'Derivation of the lapse rule from a simple reliability model — with independent daily miss probability, “never miss” is statistically inhuman, while two-miss cascades are common enough to need a named rule.',
        prerequisites: ['Independent daily attempts', 'Recursion and geometric decay'],
        steps: [
          {
            label: 'Step 1: The perfect month is a lottery win',
            formula: '$$P(\\text{perfect month}) = p^{30}, \\quad p = 0.8 \\Rightarrow 0.8^{30} \\approx 0.0012$$',
            explanation:
              'A good student shows up about 80% of days. Thirty consecutive perfect days then have probability 0.8 to the 30th ≈ 0.12% — one month in eight hundred. A rule demanding perfection is a rule you will break.',
          },
          {
            label: 'Step 2: Define the no-cascade probability',
            formula: '$$f(n) = p\\,f(n-1) + p\\,(1-p)\\,f(n-2), \\quad f(0) = f(1) = 1$$',
            explanation:
              'Let f(n) be the probability that n days contain no two consecutive misses. Day one: a success (p) leaves f(n−1) clean days; a miss forces day two to succeed (p) and leaves f(n−2).',
          },
          {
            label: 'Step 3: Walk the week',
            formula: '$$f(2)=0.96,\\ f(3)=0.93,\\ f(4)=0.90,\\ f(5)=0.87,\\ f(6)=0.84,\\ f(7)=0.81$$',
            explanation:
              'Feeding p = 0.8 through the recurrence: the chance of a cascade-free week is about 0.81 — roughly a 19% chance of at least one two-miss cascade, every week.',
          },
          {
            label: 'Step 4: The long run decays slowly',
            formula: '$$f(n) \\approx C\\,r^{n}, \\quad r = \\tfrac{p + \\sqrt{p^{2}+4p(1-p)}}{2} \\approx 0.966 \\Rightarrow f(30) \\approx 0.36$$',
            explanation:
              'The recurrence decays geometrically at rate r ≈ 0.966, so f(30) ≈ 0.36 — about a 64% chance of at least one cascade per month. At human reliability, cascades are the norm.',
          },
          {
            label: 'Step 5: Read the rule off the arithmetic',
            explanation:
              'One miss is noise — the Lally study measured it, under half a point of automaticity. What compounds is the second day: the rule that survives is not “never miss” (0.12% feasible) but “never miss twice” — shrink the behavior until it fits the worst day.',
          },
        ],
        result:
          'At 80% daily reliability a perfect month is a 1-in-800 event, while a two-miss cascade lands most weeks (≈19%) and most months (≈64%) — so the design rule is never miss twice, not never miss.',
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Clinicians use habit-based advice — one behavior, one context, repeated — because it survives after motivation fades.',
          'Language learners bind daily deck reviews to breakfast or a commute segment, the same seat or carriage every day.',
          'Writers and coders stack a fixed opening ritual — same desk, same playlist — so starting costs nothing.',
          'Athletes build recovery habits (stretching, sleep windows) onto existing cues like showering or packing the bag.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The first failure is vague plans: "study more" binds to no cue and therefore to nothing. If–then means if a concrete situation, then a concrete action. The second is starting too big — an hour of review per evening is a project, not a habit; automate the smallest version first and scale after the plateau. The third is context drift: six different times and places in a week is six habits worth of learning with none finished. And the fourth is catastrophizing lapses — one miss is noise; the rule is never miss twice, not never miss.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Intention–behavior gap', def: 'The substantial gap between even strong intentions and what people actually do.' },
          { term: 'Habit', def: 'An action triggered automatically in response to contextual cues previously associated with it.' },
          { term: 'Automaticity', def: 'The quality of running without conscious attention or motivational effort.' },
          { term: 'Implementation intention', def: 'A pre-made if–then plan linking a concrete situation to a concrete action.' },
          { term: 'Context consistency', def: 'Repeating the behavior in the same time and place so the cue–action link strengthens.' },
          { term: 'Friction design', def: 'Lowering steps and effort for the desired behavior while raising them for rivals.' },
          { term: 'Never miss twice', def: 'The lapse rule: one miss is noise; two consecutive misses trigger shrinking the behavior.' },
          { term: 'Cue stacking', def: 'Bolting a new behavior onto an existing stable habit so the old routine becomes the new cue.' },
          { term: 'Stability phase', def: 'The plateau region where the habit maintains itself with minimal effort — strange not to do.' },
          { term: 'Habit loop', def: 'The three-beat template — cue, routine, reward — that the learning phase fuses into one associative unit.' },
          { term: 'Prediction error', def: 'The dopamine response when reality differs from prediction; after learning it fires at the cue rather than the reward.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'The defining feature of a habit, in the research definition, is that the action is:',
            options: ['Enjoyable every time', 'Triggered automatically by contextual cues', 'Planned the night before', 'Rewarding to others'],
            answer: 1,
            explain: 'Habits are cue-triggered automaticity — initiation has been handed to the environment, not to motivation.',
          },
          {
            q: 'The famous 66-day figure from the Lally study is best read as:',
            options: ['A universal deadline for every habit', 'A median plateau with enormous individual range, 18 to 254 days', 'The time motivation lasts', 'A marketing claim with no data behind it'],
            answer: 1,
            explain: 'It is a median over modeled participants; behavior type and individual spread make it a midpoint, not a promise.',
          },
          {
            q: 'An implementation intention works because it:',
            options: ['Increases willpower through repetition', 'Forges a direct associative link between a concrete cue and a concrete action', 'Makes goals more ambitious', 'Replaces the need for sleep'],
            answer: 1,
            explain: 'The if–then format hands triggering to the situation, which is exactly how habits form — studies even show reduced effortful-control activity.',
          },
          {
            q: 'According to the study, a single missed day:',
            options: ['Resets the habit formation clock', 'Barely dented automaticity and recovered quickly', 'Destroyed the habit permanently', 'Improved automaticity'],
            answer: 1,
            explain: 'One omission moved the automaticity rating by under half a point; cascades of misses, not single lapses, are what kill habits.',
          },
          {
            q: 'Roughly what share of everyday actions runs on habit-like automaticity, per the diary research?',
            options: ['About 5%', 'About 20%', 'About 43%', 'About 90%'],
            answer: 2,
            explain: 'Wood and colleagues\' diaries: about 43% of daily actions were performed almost daily in the same context — behavior design means authoring that share deliberately.',
          },
          {
            q: 'The research caution on extrinsic rewards for a study habit is that:',
            options: ['They always speed habit formation', 'Tangible payoffs can undermine intrinsic motivation, so the behavior may collapse when they stop', 'Rewards are irrelevant to habits', 'Only punishments build durable habits'],
            answer: 1,
            explain: 'The Deci, Koestner and Ryan meta-analysis is the caution; keep rewards small, immediate and attached to the act — the calendar cross, not a payment scheme.',
          },
          {
            q: 'After missing two evenings in a row, the lesson\'s rule says:',
            options: ['Double the next session to catch up', 'Shrink the behavior until it fits the worst day — ten cards become two', 'Restart the habit from day one', 'Switch to a different habit'],
            answer: 1,
            explain: 'Protect the cue–context link; volume is recoverable, the link is what decays — exactly the worked example\'s shrink-to-two-cards rule.',
          },
          {
            q: 'In Schultz\'s recordings, once a monkey has learned that a light predicts juice, the dopamine burst:',
            options: ['Disappears entirely', 'Shifts to the cue, and an omitted predicted reward produces a dip', 'Stays at the reward and grows larger', 'Fires randomly throughout the task'],
            answer: 1,
            explain: 'The prediction error shifts to the predictor: fire at the cue, none at a fully predicted reward, a dip when it is omitted.',
          },
          {
            q: 'With a daily show-up probability of p = 0.8, the cascade arithmetic says a two-miss cascade in a week has probability about:',
            options: ['2%', '19%', '64%', '96%'],
            answer: 1,
            explain: 'The no-cascade probability after 7 days is f(7) ≈ 0.81, so the cascade risk is 1 − 0.81 ≈ 19% per week (≈64% per month) — hence the rule: never miss twice.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'With arrival automated, point the session at the real engines: active recall and spaced repetition for content, interleaving for the mix. Deliberate practice owns raising the quality of what the habit repeats, and the time-management lesson handles planning the day around it.',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'study-time-management',
    title: 'Time Management for Students: Owning the Study Week',
    domain: 'Foundation Learning',
    field: 'Study Skills & Memory',
    branch: 'Study Systems',
    tier: 'core',
    concepts: [
      'The study week is a working week',
      'Planning backwards from deadlines',
      'Timeboxing the week',
      'The planning-fallacy numbers',
      'Estimation error and buffers',
      'Prioritising: important before urgent',
      'Procrastination and getting started',
      'The weekly review',
    ],
    words: 2719,
    readMins: 14,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'Ask university lecturers what separates the students who do well and the answers converge on one word. "The key factor is time," one tells Cottrell in the opening chapter of The Study Skills Handbook: "if they put in the hours, and use the time well, they tend to do well." Higher education quietly converts every student into a knowledge worker: a full-time course is the equivalent of a 35–40-hour working week, most of it self-directed, with no supervisor watching the clock. Time management as a student is therefore not an administrative nicety — it is the operating system on which every other technique in this book runs. This lesson builds that system: the term map, the weekly plan, the daily list, honest estimation, prioritisation, and the war against procrastination.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Cottrell\'s independent-study audit lists the recurring risks in plain language: underestimating how long study tasks take, forgetting deadlines, wasting study time, and — the mirror image — spending all your time in study with no rest at all. Every one of those is a planning failure, not a character flaw. The students who "just seem organised" are running a small, repeatable planning loop; this lesson is that loop.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'First, accept the arithmetic: the study week is a working week. Higher-level study differs from school in exactly this respect — the assumption is that you have the maturity to manage your own time, and as Cottrell notes, time itself seems to operate differently: nothing is organized for you. A full-time course demands around 35–40 hours between classes, labs and independent study; a part-time or distance course demands the same discipline across fewer, more fragile hours. The first planning act is therefore budgeting, not scheduling: deciding what your week can actually hold, including the non-study life that must also live there. Cottrell\'s phrase for the target is a balanced menu of activity — study, rest, social life, work — because a week that ignores rest fails in week three, not week one.',
      },
      {
        kind: 'para',
        text: 'Second, plan backwards from deadlines. The unit of academic time is the term, and its hard edges are the deadlines and exam dates printed in course handbooks on day one. Backward planning converts them into workable pieces: take the deadline, list the stages a task really needs (understand the brief, gather sources, plan, draft, revise, proofread), give each stage its own earlier deadline, and subtract. A 3,000-word essay due Friday of week 8 becomes a source-gathering deadline in week 6, a plan in week 7, a draft early week 8. The term map is the one-page calendar where all these backward chains live; the weekly plan distributes the current week\'s segments across known free hours; the daily task list names today\'s two or three concrete moves. Barbara Oakley\'s study rules make the daily version blunt: keep a task list, and eat your frogs first — do the hardest, most avoided item first, while willpower is fresh, instead of reorganising your notes all morning to avoid it.',
      },
      {
        kind: 'para',
        text: 'The weekly plan earns its keep through timeboxing — giving each block of the week a named job before the week starts. Cal Newport’s Deep Work (2016) runs the professional version: every minute of the day is assigned a block, and when reality breaks the plan, the plan is re-cut, not abandoned — a broken block is estimation data, not a verdict on the system. Students run the same loop at term scale with the three instruments this lesson already owns: the term map holds the deadlines, the weekly plan assigns them to real hours, and the daily list names today’s blocks. The measurable payoff sits in perception as much as in hours: Macan and colleagues (1990) found that students’ perceived control of time — not raw hours studied — predicted both academic performance and lower stress, and Britton and Tesser (1991) found that time-management attitudes predicted students’ cumulative grades.',
      },
      {
        kind: 'para',
        text: 'Third, estimate honestly — then add a buffer. Human beings are systematically optimistic about task duration; psychologists call it the planning fallacy, and Cottrell\'s risk table names the student version: underestimating how long study tasks take. Reading that "should" take an hour takes three once you actually engage with it; the problem set budgeted for an evening eats the weekend. Two fixes compound. Track actuals: note, for a fortnight, how long common tasks really took you, and use those numbers, not your intentions, for future plans. And budget buffers at the plan level — no week scheduled to 100% survives contact with reality; aim for roughly 70–80% committed time so that overruns, illness and opportunities have somewhere to land without wrecking everything downstream.',
      },
      {
        kind: 'para',
        text: 'The planning fallacy has a canonical number. Buehler, Griffin and Ross (1994) asked 37 honors students to predict when they would finish their theses: best guesses averaged 33.9 days and worst-case guesses 48.6 — yet the actual average was 55.5 days, worse than their own worst cases, and fewer than a third (29.7 percent) finished by even their best-guess date. The mechanism is the inside view: a plan is a description of things going right, so a scenario-based estimate contains no surprises. The repair is the outside view: ignore the story of this task and consult the record of how long tasks like it actually took — which is exactly what tracking actuals builds. The same authors found that merely knowing about the fallacy did not fix it; only the discipline of consulting the record moved the estimate.',
      },
      {
        kind: 'para',
        text: 'Fourth, prioritise by importance, not by noise. Coursework divides into work that builds your grade and understanding over the term (the important: understanding this week\'s core concepts, starting assignments early, keeping up with problem sets) and work that merely shouts loudest (the urgent-but-trivial: formatting, inbox zero, colour-coding). The student-specific rule is simple: before starting anything, ask "does this move a deadline, an exam topic, or my understanding — and by how much?" then let the answer order the day. Protect your best hours for the important: most people get one or two windows a day of genuinely fresh cognition, and spending them on email is a quiet catastrophe. Frogs first is also a priority rule: the task you keep avoiding is usually either the most valuable or the most feared, and both deserve the morning.',
      },
      {
        kind: 'figure',
        caption:
          'The planning stack. The term map holds every deadline with its backward-planned stages; the weekly plan distributes this week’s segments across known free hours at roughly 70–80% committed time; the daily task list names today’s two or three concrete moves, frog first. Arrows run down (decompose) and up (the weekly review returns actuals to the map).',
        sketchImage: '/diagrams/time-management-planning-stack-sketch.jpg',
        sketchCaption:
          'Student Laboratory Notebook: hand-drawn three-tier planning stack — term map on top, weekly plan in the middle, daily task list at the bottom, a down arrow labeled decompose and an up arrow labeled review actuals, margin note: “frog first.”',
        afterConcept: 4,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Planning stack: term map with backward-planned deadlines on top, weekly plan at 70 to 80 percent committed in the middle, daily task list with frog first at the bottom; a decompose arrow runs down and a review actuals arrow runs up.">
  <!-- tier 1: term map -->
  <path d="M210 62 Q208 92 214 122 L670 122 Q676 92 672 60 Q440 54 210 62" fill="#e11d48" opacity="0.10"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="440" y="90" text-anchor="middle" font-size="16.5" fill="currentColor" font-weight="bold">term map</text>
    <text x="440" y="112" text-anchor="middle" font-size="12.5" fill="#8a8a93">every deadline + backward-planned stages, one page</text>
  </g>
  <!-- tier 2: weekly plan -->
  <path d="M240 196 Q238 226 244 256 L640 256 Q646 226 642 194 Q440 188 240 196" fill="#d97706" opacity="0.10"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="440" y="224" text-anchor="middle" font-size="16.5" fill="currentColor" font-weight="bold">weekly plan</text>
    <text x="440" y="246" text-anchor="middle" font-size="12.5" fill="#8a8a93">this week’s segments on known free hours — 70–80% committed</text>
  </g>
  <!-- tier 3: daily task list -->
  <path d="M270 330 Q268 360 274 390 L610 390 Q616 360 612 328 Q440 322 270 330" fill="#059669" opacity="0.10"/>
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="440" y="358" text-anchor="middle" font-size="16.5" fill="currentColor" font-weight="bold">daily task list</text>
    <text x="440" y="380" text-anchor="middle" font-size="12.5" fill="#8a8a93">today’s two or three concrete moves — frog first</text>
  </g>
  <!-- decompose arrows down -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round">
    <path d="M242 132 Q210 158 236 186"/>
    <path d="M272 266 Q240 292 266 320"/>
  </g>
  <path d="M236 186 l-2 -12 M236 186 l11 5" fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M266 320 l-2 -12 M266 320 l11 5" fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#8a8a93">
    <text x="168" y="164">decompose</text>
    <text x="196" y="298">decompose</text>
  </g>
  <!-- review arrows up -->
  <g fill="none" stroke="#d97706" stroke-width="2.2" stroke-dasharray="7 6" stroke-linecap="round">
    <path d="M650 320 Q682 294 656 266"/>
    <path d="M620 186 Q652 160 626 132"/>
  </g>
  <path d="M626 132 l2 12 M626 132 l-11 -5" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round"/>
  <path d="M656 266 l2 12 M656 266 l-11 -5" fill="none" stroke="#d97706" stroke-width="2.2" stroke-linecap="round"/>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" font-style="italic" fill="#d97706">
    <text x="688" y="298">review actuals</text>
    <text x="660" y="164">weekly review</text>
  </g>
  <text x="440" y="438" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93">plans flow down; records flow back up — the loop that keeps estimates honest</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'Fifth, understand procrastination for what it is: not laziness but emotion regulation — the task triggers aversion (boredom, confusion, fear of doing it badly), and escaping the feeling feels better than doing the work. Every trick that helps follows from that diagnosis. Shrink the start: commit to five minutes on the smallest concrete piece, because starting, not finishing, is the hard part — the "Swiss cheese" trick of poking holes in a feared task. Separate deciding from doing: planning when you\'ll start (right after lunch, at the library) beats deciding while sitting. Lower the stakes of the first attempt: a bad first draft is the plan. And for the recurring version — the same avoidance every week — the habits lesson owns the machinery: implementation intentions ("if it\'s 9am, I open the problem set") and context design turn starting into the default. What this lesson refuses to do is moralise: procrastination is a design problem, and design is fixable.',
      },
      {
        kind: 'para',
        text: 'Sixth, close the loop with a weekly review. Twenty minutes each week — Sunday evening works — to check plan against actual: what got done, what slipped and why, what deadlines moved closer, what next week actually holds. The review is where estimation gets calibrated (those tracked actuals feed forward), where the term map gets corrected, and where the small slips get caught before they compound into the crisis Cottrell calls "letting things slip: falling behind, losing a sense of what you are supposed to do." It is also the natural home of the metacognition lesson\'s predict-then-check habit, applied to time instead of test scores.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a lab report worth 25% is due in 21 days; your week holds 20 study hours across five days, and you have been avoiding it for a week.',
          'Recall the governing ideas: plan backwards from the deadline with real stages; estimate from actuals plus buffer; frog first; start small.',
          'Apply: stages — re-read the brief and rubric (1h), skim two model reports (1h), analyse the data (4h), draft results and discussion (5h), intro and methods (3h), revise against the rubric (2h), proofread and format (2h). Place them on the term map with each stage\'s own deadline, then load this week\'s plan at ~75%: the data analysis gets two protected morning sessions (frogs first), and today\'s list starts with "open the dataset and produce one graph" — a five-minute entry point.',
          'State the result: a 21-day fear has become seven small, scheduled, buffered moves; the review next Sunday will compare hours planned to hours spent and correct the next task\'s estimate.',
        ],
      },
      {
        kind: 'derivation',
        title: 'Why plans break: the buffer arithmetic',
        statement:
          'The 70–80% rule is not a style tip — it falls out of the planning-fallacy multiplier. A page of algebra shows how much of a week can honestly be scheduled.',
        prerequisites: ['Percentages and ratios', 'Buehler’s thesis study: predicted 33.9 days, actual 55.5'],
        steps: [
          {
            label: 'Step 1: Name the optimism multiplier',
            formula: '$$m = \\frac{\\text{actual}}{\\text{estimated}} = \\frac{55.5}{33.9} \\approx 1.64$$',
            explanation:
              'For the untracked thesis tasks, reality took about 1.64 times the best-guess estimate. Every untracked task in the plan carries a version of this multiplier.',
          },
          {
            label: 'Step 2: Apply it to a scheduled week',
            formula: '$$\\text{required} = m \\times f \\times A \\le A \\quad\\Rightarrow\\quad f \\le \\frac{1}{m} \\approx 0.61$$',
            explanation:
              'A week of available hours A, scheduled at fraction f, overruns the moment the multiplied requirement exceeds A. Filled entirely with 1.64-times tasks, the survivable schedule is f ≤ 0.61 — scheduling 100% guarantees failure.',
          },
          {
            label: 'Step 3: Tracking shrinks the multiplier',
            formula: '$$m_{\\text{tracked}} \\approx 1.1$$',
            explanation:
              'Tasks repeated weekly with recorded actuals converge toward their estimate: the scenario error was the unknown, and the record removed it.',
          },
          {
            label: 'Step 4: Blend and schedule',
            formula: '$$\\bar{m} \\approx 1.3 \\quad\\Rightarrow\\quad f^{*} = \\frac{1}{\\bar{m}} \\approx 0.75$$',
            explanation:
              'A realistic week mixes tracked (m ≈ 1.1) and untracked (m ≈ 1.6) work. At a blended m ≈ 1.3 the survivable schedule is about 0.75 — the lesson’s 70–80% band, now with its derivation.',
          },
        ],
        result:
          'Schedule every hour and a 1.3-average multiplier breaks the plan by midweek; schedule 70–80% and the buffer absorbs the error. Slack is not softness — it is the expected value of your estimation error, paid forward.',
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Coursework seasons: a one-page term map with every deadline, backward-planned stage by stage, replaces the end-of-term emergency that used to consume reading week.',
          'Revision periods: the same loop schedules spaced review sessions across weeks — the spaced-repetition lesson owns the intervals; this lesson owns finding room for them.',
          'Placement and job years: backward planning from application deadlines, with tracked actuals, is precisely the project management employers later pay for.',
          'Distance and part-time study: with no timetable imposed, the weekly plan is the whole structure — budget first, then protect the hours like meetings.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'The big three. Over-scheduling: a plan with zero slack collapses at its first surprise — schedule 70–80% and let the buffer absorb life. Planning as procrastination: rebuilding the task list, the app and the colour scheme is avoidance in a productivity costume; if the plan is good enough, start. And ignoring rest: a "disciplined" week with no exercise, social time or sleep is borrowing from week three at compound interest — the well-being lesson explains why the loan always comes due.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Term map', def: 'A one-page calendar of all deadlines and exams for the term, each with backward-planned stage deadlines.' },
          { term: 'Backward planning', def: 'Starting from the deadline and assigning each required stage its own earlier date.' },
          { term: 'Planning fallacy', def: 'The systematic underestimation of how long tasks will take; countered with tracked actuals and buffers.' },
          { term: 'Task list', def: 'The daily list of concrete moves; Oakley’s rule — do the hardest item first.' },
          { term: 'Frog first', def: 'Doing the most avoided, usually most valuable task at the start of the day while willpower is fresh.' },
          { term: 'Weekly review', def: 'A fixed weekly session checking plan against actual, recalibrating estimates and updating the term map.' },
          { term: 'Timeboxing', def: 'Assigning every block of the week a named job in advance; broken blocks are re-cut, not abandoned.' },
          { term: 'Outside view', def: 'Estimating from the record of similar tasks — your tracked actuals — instead of the story of this one.' },
          { term: 'Perceived control of time', def: 'The felt sense that your hours are yours to direct; Macan’s 1990 finding tied it to grades and lower stress.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'A full-time course demands roughly:',
            options: ['20 hours a week, all in class', '35–40 hours across classes and independent study', '60 hours of lectures only', 'Whatever mood allows'],
            answer: 1,
            explain: 'Cottrell’s benchmark: a full-time course is the equivalent of a working week, with independent study as its core.',
          },
          {
            q: 'Backward planning from a deadline means:',
            options: ['Starting with the easiest task', 'Listing the stages, giving each its own earlier deadline, and subtracting from the due date', 'Working only the night before', 'Copying a friend\'s schedule'],
            answer: 1,
            explain: 'Deadlines become workable when every stage — gather, plan, draft, revise — gets its own earlier date on the term map.',
          },
          {
            q: 'The planning fallacy shows up in student life as:',
            options: ['Finishing everything early', 'Systematically underestimating how long study tasks take', 'Preferring exams to coursework', 'Scheduling too much rest'],
            answer: 1,
            explain: 'Cottrell names it in her risk table; the fixes are tracked actuals and a 20–30% buffer of unscheduled time.',
          },
          {
            q: 'The most evidence-aligned first move against a task you keep avoiding is:',
            options: ['Wait for motivation', 'Commit five minutes to its smallest concrete piece', 'Reorganise your entire note system', 'Do easier tasks until it disappears'],
            answer: 1,
            explain: 'Procrastination is emotion regulation; shrinking the start past the aversion threshold gets you into the task, where motivation follows progress.',
          },
          {
            q: 'In Buehler, Griffin and Ross’s thesis study, best-guess estimates averaged 33.9 days and worst-case guesses 48.6. The actual average completion was:',
            options: ['30.1 days — better than predicted', '33.9 days — right on the best guess', '48.6 days — exactly the worst case', '55.5 days — worse than their own worst-case estimates'],
            answer: 3,
            explain: 'Reality beat the worst case: 55.5 days, with only 29.7 percent finishing by their best-guess date. A plan describes things going right — so plan from tracked actuals, not scenarios.',
          },
          {
            q: 'Macan and colleagues (1990) found the time-management factor that best predicted student outcomes was:',
            options: ['Total hours spent studying', 'Perceived control of time', 'Number of planning apps used', 'Earliest waking hour'],
            answer: 1,
            explain: 'Perceived control of time — not raw hours — tracked grades and lower stress, which is why the weekly plan and its review matter more than marathon sessions.',
          },
          {
            q: 'Your week holds 20 study hours, all scheduled with untracked tasks running a 1.64× optimism multiplier. The arithmetic says:',
            options: ['The plan survives if you concentrate', 'You finish 12 hours in and coast', 'Required hours are 1.64 × 20 ≈ 33 — about a third of the plan dies', 'The multiplier only applies to essays'],
            answer: 2,
            explain: 'Required = m × f × A = 1.64 × 20 ≈ 33 hours against 20 available. Survivable scheduling for untracked work is f ≤ 1/m ≈ 0.61 — hence the 70–80% band for blended weeks.',
          },
          {
            q: 'In the weekly timeboxing system, when reality breaks a planned block the correct move is:',
            options: ['Abandon the plan for the week', 'Re-cut the remaining blocks — the break is estimation data, not a verdict', 'Double tomorrow’s load as punishment', 'Switch to cramming'],
            answer: 1,
            explain: 'Newport’s rule: every minute is a block and broken blocks are re-drawn; the weekly review then feeds the corrected estimates forward.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'The habits lesson turns whatever you plan into an automatic default; the exam-strategy lesson owns the exam-day half of time — minutes per mark. For general productivity systems beyond study, the career book\'s time-management lesson picks up where this one hands off.',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'study-stress-wellbeing',
    title: 'Stress, Well-being and Sustainable Study',
    domain: 'Foundation Learning',
    field: 'Study Skills & Memory',
    branch: 'Study Systems',
    tier: 'core',
    concepts: [
      'Stress as load versus resources',
      'The balanced menu of activity',
      'Burnout signals and early response',
      'Recovery assets: exercise, sleep, people, pauses',
      'Help-seeking as a study skill',
      'Incomplete recovery: the effort–recovery model',
      'The four recovery experiences',
      'The term-scale load–output curve',
    ],
    words: 2918,
    readMins: 15,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'Cottrell gives stress and well-being a full chapter in a study skills handbook — between time management and collaborative study — and the placement is the argument: managing your energy across a term is a success skill of the same rank as managing your time. Her self-evaluation asks students directly whether they can "identify and manage anxieties" and recognises "the importance of well-being and stress management to my overall success." The reasoning is mechanical, not sentimental: memory consolidates in sleep, attention collapses under overload, and the retrieval machinery this book trains everywhere else runs on a body that has to be kept in working order. This lesson is the maintenance manual: what study stress actually is, how to design a workload that survives a term, how to spot burnout early, and how to recover.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Stress mismanagement is the silent tax on every technique in this book. Spaced repetition scheduled into a three-week sprint with no rest fails on week two; the sharpest exam playbook collapses if panic owns the room; a perfect weekly plan dies when the planner burns out. Well-being is not a soft add-on to study strategy — it is the hardware the strategy runs on.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Stress, in the working definition, is what happens when the load a term places on you exceeds the resources you have to meet it — and both sides of that ratio are movable. The load side includes deadlines, difficulty, uncertainty and conflict; the resource side includes time, skills, sleep, money, social support and the belief (the self-efficacy lesson\'s territory) that your effort changes outcomes. Some arousal is useful: the sharpened focus before a presentation or test is the fuel the exam-strategy lesson teaches you to relabel. The problem is chronic overload — weeks of unremitting demand with no recovery — and that is a design problem, which means it yields to design. Cottrell\'s opening chapter names the risk precisely: "spending all your time in study, rather than in a balanced menu of activity" is listed as a failure mode, not a virtue.',
      },
      {
        kind: 'para',
        text: 'The balanced menu of activity is the design answer. A sustainable student week mixes four food groups — study, rest, social life and (for many) paid work — and the planning lesson\'s 70–80% rule is partly a well-being rule: unscheduled time is not waste, it is the shock absorber that stops one bad deadline from cascading. Work-rest cycles matter at every scale. Within a day, focused blocks with real pauses between them (the pause is when consolidation finishes — the spaced-repetition lesson owns that science) beat one grey marathon. Across a week, at least one genuinely off-duty day keeps the system from ratcheting tighter. Across a term, alternating push weeks with recovery weeks matches how workload actually arrives. None of this is self-indulgence; it is interval training for cognition.',
      },
      {
        kind: 'para',
        text: 'Burnout — the endpoint of chronic overload — announces itself early if you listen. The classic triad is exhaustion that sleep doesn\'t fix, cynicism or detachment from work you used to care about, and falling output despite rising effort: assignments taking longer, reading not landing, small tasks feeling enormous. In students it also wears disguises: scroll-marathons that masquerade as rest, "I\'ll rest after exams" deferrals that never arrive, and the quiet dropout from friends and exercise exactly when both are most needed. The early response is triage, not heroics: cut scope (negotiate extensions before deadlines collapse, not after), restore the non-negotiables first (sleep, food, movement), and shrink the horizon — plan only this week. If two weeks of triage don\'t move the needle, that is information, which brings us to the last concept.',
      },
      {
        kind: 'para',
        text: 'The recovery assets are boringly consistent across the research and Cottrell\'s chapter alike. Exercise is the most reliable mood and anxiety regulator available without prescription — even a brisk walk between sessions measurably lowers arousal. Sleep is the memory system\'s write-to-disk window (its consolidation role is owned by the spaced-repetition lesson; here it is simply non-negotiable infrastructure, and the exam-strategy lesson\'s ban on all-nighters applies all term). Social contact is not a luxury: talking with friends is one of the best-evidenced buffers against study stress, which is why the independent-study risk table lists "put time aside to relax, rest, socialise and enjoy yourself" as a task, not a reward. And small pauses — a few minutes of walking, stretching or daylight between sessions — return more focus than they cost. Caffeine and all-nighters belong on the liabilities page.',
      },
      {
        kind: 'para',
        text: 'Help-seeking is a skill, and Cottrell\'s self-evaluation treats it as one: "I ask for help if I really need it." The failure pattern is well documented — students wait until crisis, then present a problem six weeks old that was solvable in week one. The repair is mechanical: know your routes before you need them (tutor office hours, student services, counselling, academic skills centres, peer groups), and treat early contact as cheap maintenance rather than admission of failure. Universities, Cottrell notes, provide the opportunities and the services; using them is part of being an active agent of your own success — the same principle that opens this book, applied to your own operating condition. A ten-minute conversation with a tutor about an overload that is still manageable beats a formal appeal about one that wasn\'t.',
      },
      {
        kind: 'para',
        text: 'Why does the load–resources ratio move the wrong way under pressure? The effort–recovery model of Meijman and Mulder (1998) gives the mechanism: effort consumes capacity and produces acute load reactions — fatigue, narrowed attention, low mood; recovery, any episode when the demands drop, reverses them. The model\'s warning is about residue: when recovery is incomplete, the leftover strain — the unfinished worry, the sleep debt, the unspent energy — carries into the next effort block, so each week starts from a lower floor. The behavioral cycle has a physiological twin, the cumulative wear of a stress response that never fully switches off; the health book\'s cortisol lesson owns that machinery. For a student the takeaway is scheduling-shaped: rest is not the absence of work, it is the half of the cycle that makes the other half work — and "I\'ll rest after exams" is a plan to run the first half only, for twelve consecutive weeks.',
      },
      {
        kind: 'figure',
        caption:
          'The effort–recovery cycle drawn across three weeks. Each effort block consumes capacity; each recovery block restores it. Week one: recovery completes the cycle. Week two: incomplete recovery leaves residue — the next week starts lower. Week three: recovery is skipped, and the floor keeps dropping — accumulated strain, the behavioral road to the burnout triad.',
        afterConcept: 6,
        sketchImage: '/diagrams/effort-recovery-strain-sketch.jpg',
        sketchCaption: 'notebook plate — effort, recovery, and the strain that stacks when recovery is skipped',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 440" role="img" aria-label="Effort and recovery across three weeks: full recovery restores capacity, incomplete recovery leaves residue, skipped recovery lets accumulated strain stack">
  <g font-family="Georgia, 'Times New Roman', serif">
    <!-- full-capacity baseline -->
    <path d="M84 108 Q450 104 828 109" fill="none" stroke="#8a8a93" stroke-width="1.6" stroke-dasharray="7 6" stroke-linecap="round" opacity="0.8"/>
    <text x="120" y="96" font-size="12.5" fill="#8a8a93" font-style="italic">full capacity</text>
    <!-- capacity line: effort drops, recovery restores -->
    <g fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round" opacity="0.97">
      <path d="M90 112 C 140 180 170 240 202 296 C 250 260 292 180 330 124 C 360 180 400 250 438 302 C 474 280 522 220 566 176 C 596 220 636 280 672 322 C 710 316 762 300 812 288"/>
    </g>
    <g fill="none" stroke="#059669" stroke-width="1" stroke-linecap="round" opacity="0.4">
      <path d="M94 116 C 144 184 174 244 206 300 C 254 264 296 184 334 128 C 364 184 404 254 442 306 C 478 284 526 224 570 180 C 600 224 640 284 676 326 C 714 320 766 304 816 292"/>
    </g>
    <!-- week separators -->
    <g stroke="#8a8a93" stroke-width="1.3" stroke-dasharray="3 5" opacity="0.55" fill="none" stroke-linecap="round">
      <path d="M330 118 Q332 220 330 372"/>
      <path d="M566 172 Q568 260 566 372"/>
    </g>
    <!-- effort / recovery brackets -->
    <g fill="none" stroke="#e11d48" stroke-width="2" stroke-linecap="round">
      <path d="M96 356 L96 364 L198 364 L198 356"/>
      <path d="M362 356 L362 364 L434 364 L434 356"/>
      <path d="M598 356 L598 364 L668 364 L668 356"/>
    </g>
    <g font-size="12.5" fill="#e11d48" text-anchor="middle">
      <text x="147" y="384">effort</text>
      <text x="398" y="384">effort</text>
      <text x="633" y="384">effort</text>
    </g>
    <g fill="none" stroke="#d97706" stroke-width="2" stroke-linecap="round">
      <path d="M246 356 L246 364 L322 364 L322 356"/>
      <path d="M482 356 L482 364 L558 364 L558 356"/>
    </g>
    <g font-size="12.5" fill="#d97706" text-anchor="middle">
      <text x="284" y="384">recovery</text>
      <text x="520" y="384">recovery</text>
    </g>
    <!-- annotations -->
    <text x="212" y="140" font-size="13" font-style="italic" fill="#059669">recovery completes the cycle</text>
    <text x="560" y="242" font-size="13" font-style="italic" fill="#d97706" text-anchor="end">incomplete recovery — residue</text>
    <g fill="none" stroke="#e11d48" stroke-width="1.6" stroke-linecap="round">
      <path d="M742 250 Q760 262 778 282"/>
      <path d="M766 278 L778 282 L772 270"/>
    </g>
    <text x="744" y="240" font-size="13" font-style="italic" fill="#e11d48" text-anchor="middle">accumulated strain</text>
    <!-- x label -->
    <text x="828" y="420" font-size="14" font-style="italic" text-anchor="end" fill="currentColor">three weeks of the term</text>
  </g>
</svg>`
      },
      {
        kind: 'para',
        text: 'What counts as recovery, precisely? Sonnentag and Fritz\'s Recovery Experience Questionnaire (2007) gives the design vocabulary: four recovery experiences. Psychological detachment — mentally switching off, not thinking about study during off-hours — is the strongest single predictor of next-day well-being in the diary studies: evening detachment predicts next-morning mood and energy, and low detachment predicts next-morning fatigue. Relaxation: low-activation pleasant states — walks, music, unhurried meals. Mastery: challenging, absorbing activity outside study — an instrument, a language, a climbing route — builds competence and positive affect in a world with no grades, which is exactly why it works. Control: deciding for yourself how the free time goes. The awkward finding is the recovery paradox (Sonnentag and Fritz, 2015): the people who most need recovery are least able to detach, because depleted self-regulation fuels rumination — and a student in deadline pressure is the textbook case. That is precisely why recovery gets scheduled like deadlines instead of hoped for after them.',
      },
      {
        kind: 'para',
        text: 'Put the two models together and the weekly load–output curve appears: an inverted-U at term scale. On the left is under-load: drift — too few effective hours, material uncovered, guilt accruing faster than learning. In the middle is the sustainable zone: the planning lesson\'s 70–80% rule is this zone expressed as a budget, and a calm 30-hour week can tie a frantic 50-hour one. On the right is chronic overload: each extra hour buys less and costs more, because it is spent out of the recovery budget — output falls even as hours rise, the curve that ends at the burnout triad. The day-scale version of the same shape — arousal and performance on exam morning — is owned by the exam-strategy lesson, relabeled racing heart included; this lesson owns the week. The derivation below prices the right side of the curve in output points, and the figure draws it.',
      },
      {
        kind: 'figure',
        caption:
          'The term-scale load–output curve. Weekly output peaks inside the sustainable zone — the 70–80% rule drawn as a curve; the left slope is under-load: drift, the right slope is chronic overload: falling output as hours rise. Dashed markers show the derivation\'s symmetry — 30 and 50 effective hours tie at 96 — while the 70-hour push lands at 64.',
        afterConcept: 8,
        sketchImage: '/diagrams/load-output-curve-sketch.jpg',
        sketchCaption: 'notebook plate — the weekly load–output curve and its sustainable zone',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 450" role="img" aria-label="The load-output curve: output peaks at the sustainable load, drift on the left, falling output under chronic overload">
  <g font-family="Georgia, 'Times New Roman', serif">
    <!-- axes -->
    <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
      <path d="M96 60 Q92 240 96 386"/>
      <path d="M94 382 Q470 385 842 381"/>
    </g>
    <!-- zone tints -->
    <rect x="100" y="66" width="274" height="312" fill="#d97706" opacity="0.06"/>
    <rect x="374" y="66" width="182" height="312" fill="#059669" opacity="0.08"/>
    <rect x="556" y="66" width="284" height="312" fill="#e11d48" opacity="0.06"/>
    <g font-size="12.5" text-anchor="middle">
      <text x="234" y="86" fill="#d97706" font-style="italic">under-load: drift</text>
      <text x="465" y="86" fill="#059669" font-style="italic">the sustainable zone</text>
      <text x="700" y="86" fill="#e11d48" font-style="italic">chronic overload: falling output</text>
    </g>
    <!-- the curve P(h)=100-0.04(h-40)^2, h in [10,70] -->
    <g fill="none" stroke="#059669" stroke-width="3" stroke-linecap="round" opacity="0.97">
      <path d="M187 350 C 260 250 330 130 465 92 C 600 130 668 250 741 350"/>
    </g>
    <g fill="none" stroke="#059669" stroke-width="1" stroke-linecap="round" opacity="0.4">
      <path d="M191 354 C 264 254 334 134 465 96 C 604 134 672 254 745 354"/>
    </g>
    <!-- symmetry markers 30 & 50 -->
    <g stroke="#8a8a93" stroke-width="1.5" stroke-dasharray="5 5" opacity="0.8" fill="none" stroke-linecap="round">
      <path d="M374 121 L374 378"/>
      <path d="M556 121 L556 378"/>
    </g>
    <g fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round">
      <circle cx="374" cy="121" r="5"/>
      <circle cx="556" cy="121" r="5"/>
    </g>
    <text x="465" y="150" font-size="13" font-style="italic" fill="currentColor" text-anchor="middle">P(30) = P(50) = 96 — symmetry about h*</text>
    <!-- 70-hour marker -->
    <g fill="none" stroke="#e11d48" stroke-width="2.4" stroke-linecap="round">
      <circle cx="739" cy="350" r="5"/>
    </g>
    <text x="700" y="330" font-size="13" font-style="italic" fill="#e11d48" text-anchor="end">the 70-hour push: P = 64</text>
    <!-- h* marker -->
    <g stroke="#059669" stroke-width="1.6" stroke-dasharray="6 5" opacity="0.85" fill="none" stroke-linecap="round">
      <path d="M465 96 L465 378"/>
    </g>
    <text x="465" y="404" font-size="13" fill="#059669" text-anchor="middle" font-style="italic">h* — the sustainable load (the 70–80% rule)</text>
    <!-- axis labels -->
    <text x="842" y="430" font-size="14" font-style="italic" text-anchor="end" fill="currentColor">weekly study load (effective hours)</text>
    <text x="40" y="230" font-size="14" font-style="italic" text-anchor="middle" fill="currentColor" transform="rotate(-90 40 230)">weekly output</text>
  </g>
</svg>`
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: four weeks into revision season, a student is sleeping 5 hours, has stopped exercising, works 12-hour days with falling output, and has declined two invitations from friends.',
          'Recall the governing ideas: load versus resources; the menu has four food groups; burnout triad = exhaustion + cynicism + falling output; restore non-negotiables first.',
          'Apply: diagnose — this is the triad forming, not laziness. Triage the load: cut the bottom-value revision topics (calibration data says two are already solid), negotiate one extension, cancel the 1am finish. Restore the floor: sleep 7+ hours (alarm on bedtime, not just waking), one 20-minute walk daily, one social meal this week. Shrink the horizon: plan only the coming week at 75% load, with spaced short sessions instead of 12-hour blocks. Book one check-in: tutor or student services, framed as load management, not crisis.',
          'State the result: the same revision content now runs on a body that can consolidate it; output typically recovers within a week, and the weekly review now includes a standing well-being line: sleep, movement, people — checked like deadlines.',
        ],
      },
      {
        kind: 'derivation',
        title: 'Why more hours can mean less output: the load–output curve',
        statement:
          'A quadratic model of weekly output P as a function of weekly study load h — the term-scale curve drawn as an equation — locates the optimum and prices the overload in output points.',
        prerequisites: ['Quadratics and their vertex', 'Symmetry about a maximum'],
        steps: [
          {
            label: 'Step 1: Model the curve',
            formula: '$$P(h) = P_{\\max} - k\\,(h - h^{*})^{2}$$',
            explanation:
              'Output peaks at the sustainable load h* and falls on both sides: fewer hours leave material uncovered, more hours begin to eat the recovery that output runs on. The constant k sets how sharply overload bites.',
          },
          {
            label: 'Step 2: Locate the optimum',
            formula: '$$\\frac{dP}{dh} = -2k\\,(h - h^{*}) = 0 \\;\\Rightarrow\\; h = h^{*}$$',
            explanation:
              'The vertex is the optimum: at h* one more hour gains nothing on the left side and begins to cost recovery on the right. This is the model home of the planning lesson\'s 70–80% rule.',
          },
          {
            label: 'Step 3: Worked numbers',
            formula: '$$P(h) = 100 - 0.04\\,(h-40)^{2} \\;\\Rightarrow\\; P(40)=100,\\ P(50)=96,\\ P(60)=84,\\ P(70)=64$$',
            explanation:
              'Take h* = 40 effective hours and k = 0.04. Pushing from 40 to 70 hours — a 75% load increase — yields P = 100 − 0.04·(30)² = 64: thirty-six output points below the peak.',
          },
          {
            label: 'Step 4: Same output, two loads',
            formula: '$$P(30) = 100 - 0.04\\,(10)^{2} = 96 = P(50)$$',
            explanation:
              'The curve is symmetric about h*: a calm 30-hour week can tie a frantic 50-hour week — and banks twenty extra hours of recovery on the side. Only one of them leaves the effort–recovery cycle paid up.',
          },
          {
            label: 'Step 5: Read the right side honestly',
            explanation:
              'Beyond h*, every extra hour subtracts output — effort without recovery is the incomplete-recovery loop drawn as a line. The planner\'s job is not to maximize hours but to sit just inside the sustainable zone: h*, or a little below it.',
          },
        ],
        result:
          'With P(h) = 100 − 0.04(h − 40)², output peaks at the sustainable 40-hour load; a 70-hour push produces 64 (−36 points), and a 30-hour week ties a 50-hour week at 96 — the arithmetic behind planning to the sustainable zone instead of to exhaustion.',
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Exam seasons: the well-being floor (sleep, food, movement, one social contact daily) is scheduled into the revision plan first; content fills the space that remains.',
          'Thesis and project years: the long, unsupervised middle is burnout country — fixed weekly reviews, a standing exercise slot and regular supervisor contact act as guardrails.',
          'Part-time workers: combining a job with study doubles the load side of the ratio; the menu design and early help-seeking become the difference between surviving and sinking.',
          'Group projects: workload renegotiation ("I can\'t take the extra section this week") is help-seeking applied early, before resentment and missed deadlines do the talking.',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Wearing exhaustion as a badge: "I\'ll sleep after finals" is the exact arithmetic the exam-strategy lesson already ruled against, run for a whole term. All-or-nothing rest: an evening of doom-scrolling is not recovery, and a total collapse is not a schedule — real rest is scheduled, active and short. And isolating under pressure: dropping friends and exercise in exam season removes the two cheapest stress buffers precisely when the load is highest.',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Load–resources model', def: 'Stress as the gap between a term’s demands and the time, skills, sleep and support available to meet them.' },
          { term: 'Balanced menu of activity', def: 'Cottrell’s term for a week that mixes study with rest, social life and work — sustainability by design.' },
          { term: 'Burnout', def: 'Chronic-overload endpoint: exhaustion sleep doesn’t fix, detachment from work, and falling output despite rising effort.' },
          { term: 'Recovery asset', def: 'A reliable restorer of capacity — exercise, sleep, social contact, pauses between sessions.' },
          { term: 'Help-seeking', def: 'Using tutors, services and peers early, while problems are still cheap to solve; a skill, not a confession.' },
          { term: 'Effort–recovery model', def: 'Meijman and Mulder’s cycle: effort consumes capacity, recovery restores it; incomplete recovery lets residue stack across weeks.' },
          { term: 'Psychological detachment', def: 'Mentally switching off during off-hours — no study thoughts; the strongest single predictor of next-day well-being.' },
          { term: 'Recovery experiences', def: 'Sonnentag and Fritz’s four: psychological detachment, relaxation, mastery, control — the design vocabulary for off-hours.' },
          { term: 'Load–output curve', def: 'The term-scale inverted-U: weekly output peaks at the sustainable load and falls on both sides; overloading ends at the burnout triad.' },
        ],
      },
      { kind: 'heading', text: 'Check Yourself' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'In the working model this lesson uses, stress is best described as:',
            options: ['A fixed personality trait', 'The gap when a term’s load exceeds your resources to meet it', 'Always harmful and to be eliminated', 'A sign of low intelligence'],
            answer: 1,
            explain: 'Both sides are movable — design the load down and build resources up; moderate arousal is even useful.',
          },
          {
            q: 'Which combination best describes the burnout warning triad?',
            options: ['Energy, focus, steady output', 'Exhaustion that rest doesn’t fix, detachment, falling output', 'Nervousness before one exam', 'Temporary boredom with one course'],
            answer: 1,
            explain: 'The classic triad — plus student disguises like scroll-marathons and dropped friendships — signals chronic overload, not laziness.',
          },
          {
            q: 'The best-evidenced recovery assets for a stressed student are:',
            options: ['All-nighters and energy drinks', 'Exercise, sleep, social contact and real pauses', 'Total isolation until exams end', 'Increasing study hours to regain control'],
            answer: 1,
            explain: 'Boring but robust: movement, sleep, people and pauses restore the capacity the work runs on.',
          },
          {
            q: 'Cottrell’s self-evaluation treats asking for help as:',
            options: ['A last resort after failure', 'A skill to use early, before problems become crises', 'Only for academic probation cases', 'A sign you should change courses'],
            answer: 1,
            explain: 'Early contact is cheap maintenance — the active-agent principle applied to your own operating condition.',
          },
          {
            q: 'In Sonnentag and Fritz’s four recovery experiences, which one means doing something challenging and absorbing that is NOT study — an instrument, a language, a climbing route?',
            options: ['Psychological detachment', 'Relaxation', 'Mastery', 'Control'],
            answer: 2,
            explain: 'Mastery builds competence and positive affect outside the grade world; detachment means not thinking about study, relaxation means low activation, control means choosing for yourself.',
          },
          {
            q: 'In the effort–recovery model, strain accumulates across weeks when:',
            options: ['Effort is high for a single day', 'Recovery between effort episodes is incomplete, so residue carries into the next block', 'The material is intellectually difficult', 'Every week is perfectly balanced'],
            answer: 1,
            explain: 'Incomplete recovery leaves residue — sleep debt, unfinished worry — that lowers the floor of the next week; the health book’s cortisol lesson owns the physiological twin.',
          },
          {
            q: 'With P(h) = 100 − 0.04(h − 40)², a student at the 40-hour optimum considers pushing to 70 hours. The model prices that push at:',
            options: ['P = 96 — barely a loss', 'P = 84', 'P = 64 — thirty-six points below the peak', 'P = 100 — no loss, more hours always help'],
            answer: 2,
            explain: 'P(70) = 100 − 0.04·(30)² = 64: the 75% load increase costs a third of the output, because the extra hours are spent out of the recovery budget.',
          },
          {
            q: 'The load–output curve shows two weeks tying at 96. Which pair — and what is the honest difference between them?',
            options: ['20 and 60 hours — no difference at all', '30 and 50 hours — equal output, but the 30-hour week banks twenty hours of recovery', '40 and 70 hours — the 70-hour week wins', '10 and 70 hours — both minimal'],
            answer: 1,
            explain: 'Symmetry about h* = 40: P(30) = P(50) = 96. Same output, very different recovery bills — the quiet argument for the left side of the sustainable zone.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'The exam-strategy lesson owns arousal on the day itself; the time-management lesson designs the week so overload never accumulates; the habits lesson automates the floor — sleep, movement, pauses — so well-being stops depending on daily willpower. For stress theory and clinical coping, the psychology book’s stress lesson picks up where this practical manual ends.',
      },
    ],
  },
  // ------------------------------------------------------------------
  {
    id: 'study-procrastination-zombies',
    title: 'Procrastination and the Zombie Habits: Rewriting the Cue',
    domain: 'Foundation Learning',
    field: 'Study Skills & Memory',
    branch: 'Study Systems',
    tier: 'core',
    concepts: [
      'Procrastination is anticipation-avoidance',
      'Bricks and mortar: why cramming fails',
      'The keystone habit',
      'Zombie anatomy: cue, routine, reward, belief',
      'Deadlines as precommitment',
      'Process, not product',
      'The evidence: 691 correlations',
      'Willpower economics',
      'Mental contrasting',
      'The Pomodoro as cue-rewiring',
    ],
    words: 2855,
    readMins: 14,
    addedOn: '2026-10-26',
    blocks: [
      {
        kind: 'para',
        text: 'A student sits down at ten on a Saturday morning, coffee in hand, meaning to spend a solid day on mathematics. She looks at the textbook. A subtle ouch — the brain\'s pain centers light up at the graphs and the strange symbols. She shifts her eyes to the laptop instead, where a little dollop of pleasure waits, and two hours later the mathematics has not started. A Mind for Numbers devotes three chapters to this pattern, and its starting point is medical, not moral: brain-imaging studies of people who fear mathematics show the pain activating when they merely contemplate working on it — and disappearing once they actually begin. Procrastination is not a character flaw. It is the avoidance of anticipated discomfort, and it has a known anatomy that can be rewritten.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'Learning mathematics and science works like laying bricks: brief study sessions place the bricks, and time in between lets the mortar dry. Cramming stacks wet bricks in one night and produces the faint, fragmented neural patterns that dissolve within days. Procrastination is therefore not a scheduling quirk but a direct attack on the learning mechanism itself — and because it degrades everything downstream, Oakley calls it the single "keystone" bad habit: change this one, and a cascade of other improvements follows.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The mechanism deserves precision. The discomfort that triggers avoidance is anticipatory: dread of the task, not the task. Rita Emmett\'s line is the field\'s honest summary — the dread of doing a task uses up more time and energy than doing the task itself. Each escape delivers a small relief, and relief is reinforcing: the brain learns that looking away feels better, so the looking-away becomes automatic. Meanwhile the avoided subject grows more frightening, confidence drains, and procrastinators end up reporting higher stress, worse health and lower grades — the habit feeding the very discomfort that launched it. Some students even convert it into identity or pride ("I crammed it in one night"), which is the loop wearing a costume.',
      },
      {
        kind: 'para',
        text: 'The numbers back the diagnosis. Piers Steel’s 2007 meta-analysis in Psychological Bulletin swept 691 correlations and found the strongest predictors of procrastination are exactly this anatomy: task aversiveness (the ouch), impulsiveness (the escape), low self-efficacy, and the self-control and organization facets of conscientiousness — while popular suspects such as neuroticism and sensation-seeking turned out weak. Prevalence follows: about one adult in five identifies as a chronic procrastinator (Harriott and Ferrari, 1996), and university rates run far higher. The costs are not symmetric in time, either. Tice and Baumeister (1997) tracked students across a semester: procrastinators reported less stress and illness early on — the short-term relief is real — but by term’s end they reported more stress and more illness, the bill arriving exactly when the deadlines did. Procrastination is a loan with a schedule.',
      },
      {
        kind: 'para',
        text: 'Why not simply try harder? Because willpower is expensive. Oakley\'s rule is blunt: do not spray willpower around like cheap air freshener. Willpower uses heavy neural resources and runs out; the entire strategy of this lesson is to spend it at exactly one place — the moment of reaction to a cue — and let redesigned habit machinery carry everything after. Habits, her friendly "zombies", are the routine, cue-triggered responses your brain falls into. You do not fight the zombie. You rewrite its programming.',
      },
      {
        kind: 'para',
        text: 'Every habit, procrastination included, has four parts, and the rewrite targets each. The cue is what launches the zombie: location, time of day, how you feel, a reaction to other people, or the thing that just happened — the laptop opening, the phone buzzing, the textbook on the desk at the wrong hour. The routine is what the zombie does once launched; this is the pressure point, the only place where active effort is applied — have a plan and rehearse it: phone in another room, library seat, timer on. The reward is what the habit actually pays out; procrastination pays in relief and small pleasures, so the rewrite must supply its own — a latte, guilt-free web time after the timer, the felt pride of a crossed-off block. Only when the brain starts expecting the new reward does rewiring take hold, a process sometimes called learned industriousness: work itself gradually becomes rewarding. And the belief is the fourth part — the conviction that the new system will carry you on the bad days. Belief is fed by community (classmates who run the same system) and by evidence (a wall calendar of finished blocks).',
      },
      {
        kind: 'para',
        text: 'The fix has numbers too. Dan Ariely and Klaus Wertenbroch (2002) let a class set its own paper deadlines: students who precommitted to evenly spaced due dates beat those who left everything to the end — though the best grades of all belonged to students given externally spaced deadlines, and a late penalty shrank the lateness that remained. Self-control helps; structure helps more. The if-then plans owned by the habits lesson passed a procrastination-specific test as well: Owens and colleagues (2008) found that students who formed implementation intentions were nearly eight times more likely to show up for the appointment they were avoiding, and in Gollwitzer and Brandstätter’s studies difficult goals were roughly three times likelier to be completed once furnished with if-then plans. Precommitment is not a personality trait; it is machinery you can bolt on tonight.',
      },
      {
        kind: 'figure',
        caption:
          'The zombie loop and its rewrite. Clockwise: a cue launches the loop, the anticipatory discomfort flashes, the routine escapes it, the reward pays relief — and the belief that the loop works deepens the track. The rewrite spends willpower at exactly one point: the routine is shrunk to one Pomodoro, committed to process (25 minutes), not product (finish the assignment), and the loop begins paying work instead of escape.',
        sketchImage: '/diagrams/procrastination-zombie-loop-sketch.jpg',
        sketchCaption:
          'Student Laboratory Notebook: hand-drawn circular habit-loop diagram — cue at the top, pain marked anticipatory discomfort, routine: escape, reward: relief, belief arc closing the circle, and a kitchen-timer Pomodoro breaking the loop with a margin note: “process, not product.”',
        afterConcept: 4,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="Circular habit loop: cue launches the loop, anticipatory discomfort flashes, routine escapes, reward pays relief, belief closes the circle; a Pomodoro wedge breaks the loop by committing to process, not product.">
  <!-- wobbly loop circle -->
  <g fill="none" stroke="#8a8a93" stroke-width="2.2" stroke-linecap="round" opacity="0.8">
    <path d="M300 84 Q120 130 106 240 Q96 350 300 398 Q506 350 496 240 Q486 132 300 84"/>
  </g>
  <g fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.45" stroke-linecap="round">
    <path d="M302 78 Q116 126 100 240 Q90 356 300 404 Q512 354 502 240 Q492 128 302 78"/>
  </g>
  <!-- clockwise arrows -->
  <g fill="none" stroke="#8a8a93" stroke-width="2" stroke-linecap="round">
    <path d="M180 118 l-12 10 M180 118 l2 15"/>
    <path d="M102 300 l-2 15 M102 300 l12 8"/>
    <path d="M420 366 l12 -9 M420 366 l-3 -15"/>
    <path d="M497 180 l3 -15 M497 180 l-13 -7"/>
  </g>
  <!-- nodes -->
  <g font-family="Georgia, 'Times New Roman', serif" text-anchor="middle">
    <text x="300" y="66" font-size="16" fill="currentColor" font-weight="bold">cue</text>
    <text x="300" y="84" font-size="12" fill="#8a8a93">the phone buzzes, the book opens</text>
    <text x="594" y="196" font-size="15" fill="#e11d48">anticipatory discomfort</text>
    <text x="594" y="214" font-size="12" fill="#8a8a93">a subtle ouch — then it fades</text>
    <text x="594" y="292" font-size="15" fill="currentColor" font-weight="bold">routine: escape</text>
    <text x="594" y="310" font-size="12" fill="#8a8a93">laptop, feed, another shelf of notes</text>
    <text x="300" y="432" font-size="15" fill="#059669" font-weight="bold">reward: relief</text>
    <text x="300" y="450" font-size="12" fill="#8a8a93">a small dollop of pleasure, twice</text>
    <text x="30" y="240" font-size="15" fill="currentColor" text-anchor="start" transform="rotate(-90 30 240)">belief: the loop works</text>
  </g>
  <text x="300" y="248" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="13" font-style="italic" fill="#8a8a93">the zombie loop</text>
  <!-- the rewrite wedge -->
  <path d="M212 300 Q300 250 392 300" fill="none" stroke="#d97706" stroke-width="2.4" stroke-dasharray="8 7" stroke-linecap="round"/>
  <path d="M392 300 l-12 -1 M392 300 l-6 -11" fill="none" stroke="#d97706" stroke-width="2.4" stroke-linecap="round"/>
  <g font-family="Georgia, 'Times New Roman', serif" text-anchor="middle">
    <text x="300" y="288" font-size="14" fill="#d97706" font-weight="bold">the rewrite: one Pomodoro</text>
    <text x="300" y="305" font-size="12.5" fill="#d97706">process, not product — 25 minutes, then a real reward</text>
  </g>
  <!-- willpower note -->
  <g font-family="Georgia, 'Times New Roman', serif">
    <text x="676" y="98" font-size="13.5" fill="currentColor">willpower is spent once:</text>
    <text x="676" y="116" font-size="13.5" fill="currentColor">at the reaction to the cue</text>
    <path d="M672 130 Q640 168 596 186" fill="none" stroke="#8a8a93" stroke-width="1.6" stroke-dasharray="4 6" stroke-linecap="round"/>
  </g>
  <text x="452" y="466" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#8a8a93">cue → discomfort → escape → relief → belief — rewritten at the only point effort is cheap</text>
</svg>`,
      },
      {
        kind: 'para',
        text: 'One reframing makes the whole machine easier to operate: focus on process, not product. Product is the outcome — five finished problems, the completed essay — and product is precisely what triggers the anticipatory pain. Process is the flow of time and the habits attached to it: twenty-five minutes on problem sets after dinner, in the same chair, every day. The zombie brain loves a process, because it can march mindlessly along a time commitment; it panics at a product, because products demand judgment. So the commitment you make is "I will sit and work for twenty-five minutes", never "I will finish the assignment". Finishing happens to people who reliably sit.',
      },
      {
        kind: 'para',
        text: 'The Pomodoro technique — twenty-five distraction-free minutes, then a genuine reward — is the default tool because it bundles the whole rewrite: it removes the damaging cues for half an hour, supplies a tiny process goal, and pays the reward that rewires the expectation. Two practical notes from the book: eat something before starting hard tasks (the willpower moment at the cue is easier with fuel on board), and make the first block the easiest task of the day (an early win makes the second block cheaper). For the recurring, calendar-level version of avoidance — which tasks to delay and which to attack in what order across a whole term — the time-management lesson owns that layer; this lesson owns the moment the hand reaches for the phone.',
      },
      {
        kind: 'para',
        text: 'When motivation itself is the missing ingredient, Oakley prescribes mental contrasting: picture concretely where you want this studying to take you — the degree, the job, the life you can actually afford — and deliberately contrast it with where you sit now. Not as punishment, but as directional signal: the gap between image and reality is the fuel. Students who post one picture of the target in the workspace and look at it when motivation lags are running this technique. It pairs naturally with the belief component: the picture is the promise, the wall calendar of completed blocks is the evidence, and together they keep the system alive after the novelty dies.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: the Saturday-morning student from the intro — laptop, couch, two hours lost to surfing before mathematics starts. Diagnose the zombie and rewrite it.',
        'Recall the governing ideas: the cue launches the routine; willpower is spent only at the reaction to the cue; the new routine needs its own reward and a belief to survive setbacks.',
        'Apply: change the cue first — Saturday study happens at the library after breakfast, phone in the bag, laptop opened only to the problem set. The routine: one Pomodoro on the easiest pending problem (an early win), then a second on the confusing section, notes taken on exactly where confusion sits. The reward: the good coffee from the place next door plus twenty minutes of guilt-free browsing. The belief: a study partner meets at the same hour, and each finished block gets a cross on a visible calendar.',
        'State the result: the zombie is not fought head-on — its cue (couch + open laptop + morning boredom) is removed, its routine replaced at the single point willpower was needed, and the new loop pays its own reward while the calendar and the partner hold the belief.',
      ] },
      {
        kind: 'derivation',
        title: 'The arithmetic of delay: temporal motivation theory',
        statement:
          'Steel and König (2006) compress the 691-correlation evidence into one equation — motivation as a function of expectancy, value, impulsiveness and delay. Two homework tasks show why delay is toxic and what the Pomodoro actually buys.',
        prerequisites: ['Percentages and ratios', 'The four-part habit anatomy'],
        steps: [
          {
            label: 'Step 1: The equation',
            formula: '$$M = \\frac{E \\times V}{1 + I \\times D}$$',
            explanation:
              'Motivation M rises with expectancy E (can I succeed?) and value V (does it matter?), and falls with impulsiveness I (how fast do I discount?) and delay D (how far away is the payoff?).',
          },
          {
            label: 'Step 2: A task feeding an exam tomorrow',
            formula: '$$M_{\\text{tomorrow}} = \\frac{0.9 \\times 10}{1 + 0.5 \\times 1} = 6.0$$',
            explanation:
              'Take E = 0.9, V = 10, I = 0.5, D = 1 day. Motivation is high: 6.0 on this dial. The work feels almost self-starting.',
          },
          {
            label: 'Step 3: The same task, four weeks out',
            formula: '$$M_{\\text{month\\ out}} = \\frac{0.9 \\times 10}{1 + 0.5 \\times 30} \\approx 0.56$$',
            explanation:
              'Identical task, D = 30 days: motivation collapses to 0.56 — roughly eleven times lower. Nothing about the task changed; only the delay did.',
          },
          {
            label: 'Step 4: What impulsiveness does',
            formula: '$$M_{I=2} = \\frac{9}{1 + 2 \\times 30} \\approx 0.15$$',
            explanation:
              'For an impulsive student (I = 2) the distant task scores 0.15 — the payoff is discounted so steeply that no version of it competes with the phone.',
          },
          {
            label: 'Step 5: The two levers',
            formula: '$$D_{\\text{stage}} \\ll D_{\\text{exam}} \\;\\Rightarrow\\; M \\uparrow$$',
            explanation:
              'Shrink the delay: a stage due tomorrow (backward planning) or a 25-minute Pomodoro puts D at its floor, where the 1+ term is nearly 1 and motivation survives. That is the equation behind process, not product.',
          },
        ],
        result:
          'Temporal motivation theory explains the Saturday-morning paralysis arithmetically: at I = 0.5 the same mathematics task scores 6.0 with a one-day delay and 0.56 with a month one. The exam date cannot move — but backward planning and Pomodoros move D, and D is the denominator.',
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Programmers rewire the after-lunch cue: opening the code editor before the feed, instead of the feed before the editor.',
        'Writers commit to a process — thirty minutes each morning at the same desk — and let word counts take care of themselves.',
        'Athletes and coaches build pre-session rituals so that starting practice never requires a motivation debate.',
        'Clinicians give habit-based advice — one behaviour, one context, repeated — precisely because it survives after motivation fades.',
        'Returning learners use mental contrasting to convert a mid-career identity ("not a maths person") into a destination picture worth sitting for.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Spending willpower everywhere except the cue — fighting urges all day instead of removing the phone from the room. Running the routine with no reward, then concluding the method failed when the rewiring never started. Changing everything at once, which collapses at the first bad week — rewrite one zombie at a time. And the planning trap: reorganising the task list, the app and the colour scheme is avoidance in a productivity costume. The final pitfall is moral: one missed day is noise (the habits lesson\'s never-miss-twice rule applies); treating it as proof you are "a procrastinator" hands the identity back to the zombie.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'Procrastination', def: 'Avoidance of anticipated discomfort — dread of the task rather than the task itself.' },
        { term: 'Anticipatory aversion', def: 'The pain-centre response to contemplating a task, which typically vanishes once work begins.' },
        { term: 'Keystone habit', def: 'A habit that influences many other areas of life; Oakley names procrastination the keystone bad habit.' },
        { term: 'Cue', def: 'The trigger that launches a habitual routine: location, time, feeling, people, or a preceding event.' },
        { term: 'Routine', def: 'The habitual response itself; the one place willpower is productively spent — on the reaction to the cue.' },
        { term: 'Reward', def: 'The payoff a habit pays out; a new reward is required before the brain rewires an old loop.' },
        { term: 'Learned industriousness', def: 'The process by which work itself, reliably rewarded, becomes satisfying.' },
        { term: 'Process versus product', def: 'Committing to flows of time and habit rather than outcomes, because outcomes trigger the pain.' },
        { term: 'Mental contrasting', def: 'Deliberately contrasting a vivid picture of the target with the current reality to fuel effort.' },
        { term: 'Temporal motivation theory', def: 'Steel and König’s equation M = (E × V) / (1 + I × D): motivation rises with expectancy and value, falls with impulsiveness and delay.' },
        { term: 'Precommitment', def: 'Locking a future choice in advance — self-imposed deadlines, if-then plans — so the escape is not on the menu.' },
        { term: 'Hyperbolic discounting', def: 'The steep, impulse-driven devaluation of delayed payoffs that the delay term of the equation models.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Brain imaging of people who fear mathematics found that the pain response:',
          options: ['Occurs throughout the work', 'Appears when contemplating the task and fades once they begin', 'Never occurs', 'Is caused by the teacher, not the task'],
          answer: 1,
          explain: 'The discomfort is anticipatory — which is why starting, not sustaining, is the hard part, and why five-minute starts work.',
        },
        {
          q: 'According to the lesson, willpower should be spent:',
          options: ['Continuously, to build it like a muscle', 'Only at the moment of reaction to the cue', 'Never — willpower is useless', 'On rewards only'],
          answer: 1,
          explain: 'Willpower is a costly resource; the rewrite strategy spends it at exactly one point — the routine\'s launch — and lets design carry the rest.',
        },
        {
          q: 'Focusing on process rather than product works because:',
          options: ['Products are unimportant', 'The brain readily marches along time-and-habit commitments while outcomes trigger anticipatory pain', 'Processes require no attention', 'Products take longer than processes'],
          answer: 1,
          explain: '"Twenty-five minutes on problem sets" recruits the zombie machinery; "finish all five problems" triggers the pain that starts the avoidance loop.',
        },
        {
          q: 'Mental contrasting involves:',
          options: ['Imagining only your future success in detail', 'Contrasting a vivid image of your target with your current reality', 'Comparing yourself with classmates', 'Memorising your grades across terms'],
          answer: 1,
          explain: 'The contrast — target picture against present situation — is the fuel; the image alone is daydreaming, and the gap is the point.',
        },
        {
          q: 'In Steel’s 2007 meta-analysis of 691 correlations, the strongest predictors of procrastination included:',
          options: ['Neuroticism and sensation seeking', 'Task aversiveness, impulsiveness, low self-efficacy and disorganization', 'Intelligence and class attendance', 'Age and gender'],
          answer: 1,
          explain: 'Task aversiveness, task delay, self-efficacy, impulsiveness and the conscientiousness facets (self-control, distractibility, organization) were strong; neuroticism, rebelliousness and sensation-seeking were weak.',
        },
        {
          q: 'Tice and Baumeister’s semester-long study (1997) found procrastinators reported:',
          options: ['Uniformly higher stress all term', 'Less stress and illness early but more of both late in the term', 'No difference at any point', 'More illness early and less late'],
          answer: 1,
          explain: 'The short-term relief is real — and so is the bill: by term’s end procrastinators carried more stress and more illness, exactly when the deadlines landed.',
        },
        {
          q: 'In Ariely and Wertenbroch’s deadline study, the best paper grades went to:',
          options: ['Students with no deadlines at all', 'Students who self-imposed evenly spaced deadlines', 'Students given externally spaced deadlines', 'All groups did equally well'],
          answer: 2,
          explain: 'Self-imposed spacing helped students beat their own procrastination, but externally imposed spacing produced the best performance — structure beats willpower, and a late penalty shrank the remaining lateness.',
        },
        {
          q: 'Two tasks both have E = 0.9 and V = 10, with I = 0.5. Task A pays off in 1 day, Task B in 30 days. Under M = EV/(1 + ID):',
          options: ['Both have equal motivation', 'A ≈ 6.0 and B ≈ 0.56 — over ten times more motivation for the near task', 'A ≈ 0.56 and B ≈ 6.0', 'B wins because delay builds anticipation'],
          answer: 1,
          explain: 'A: 9/(1 + 0.5) = 6.0; B: 9/(1 + 15) = 0.56. The delay sits in the denominator — exactly why backward planning and Pomodoros shrink D.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'This lesson owns the procrastination mechanism and the four-part rewrite. The habit-formation science underneath — automaticity curves, implementation intentions, never-miss-twice — is the habits lesson; the term-level calendar that decides what deserves your blocks is the time-management lesson; and what to actually do inside a focused block is the active-recall and focused/diffuse-modes material. For the stress that avoidance manufactures at scale, continue to the well-being lesson.',
      },
    ],
  },
  {
    id: 'study-note-taking-systems',
    title: 'Note-Taking Systems Compared: Cornell, Outlines and Zettelkasten',
    domain: 'Foundation Learning',
    field: 'Study Skills & Memory',
    branch: 'Study Systems',
    tier: 'core',
    concepts: [
      'Notes encode; they do not just record',
      'Cornell: the page as a testing machine',
      'The 24-hour conversion: notes into a retrieval pipeline',
      'Outlines: hierarchy in real time',
      'Mind maps: structure you can see',
      'Live triage: writing at the speed of listening',
      'Zettelkasten: notes that network',
      'Matching the system to the task',
      'The honest limits: the longhand effect under replication',
      'Notes as living documents: prune, rewrite, link',
    ],
    words: 2253,
    readMins: 11,
    addedOn: '2026-10-18',
    blocks: [
      {
        kind: 'para',
        text: 'Note-taking feels like transcription and is actually manufacturing. The evidence is blunt: students who rephrase ideas in their own words while writing them learn more than students who copy the lecturer\'s phrasing verbatim, even when the copiers\' notes are more complete. Notes serve two masters — encoding, the thinking you do while writing, and storage, the record you review later — and every system trades between them. Cornell notes, outlines, mind maps and the Zettelkasten aim that trade differently; knowing when each wins is the skill.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        tone: 'insight',
        text: 'The format of your notes decides, before you ever revise, whether revision will be re-reading (weak) or self-testing (strong). A well-built page generates its own practice questions; a poorly built one generates highlighting, which is re-reading in costume. Ten minutes spent choosing a system deliberately repays itself across every course, job and project you will ever take.',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'The encoding hypothesis says the benefit of notes is largely written during the lecture, not after it: selecting, compressing and rephrasing force the brain to process meaning. Mueller and Oppenheimer\'s 2014 experiments found longhand note-takers outperforming laptop users on conceptual questions — keyboards invite transcription, and transcription bypasses summarisation. Storage matters too, but it is the servant: notes you never revisit are paper with ink on it. The review side — spacing and retrieval — has its own lessons in this section; this topic builds the asset worth reviewing.',
      },
      {
        kind: 'para',
        text: 'Walter Pauk\'s Cornell method, published in 1949, turns one page into a testing machine. Rule the page into three zones: a narrow cue column on the left, a wide note area on the right, a summary strip along the bottom. During the lecture, notes go right, in your own words, abbreviated. Within a day, distil the cue column — the questions and keywords those notes answer. Then cover the notes and answer your own cues; the summary strip forces one-sentence synthesis. The page is a deck of flashcards that wrote itself.',
      },
      {
        kind: 'figure',
        caption:
          'The Cornell page as Pauk designed it: a narrow cue column on the left, a wide note area on the right, a summary strip along the bottom. Live notes go right, in your own words and abbreviated; within 24 hours the cues are distilled — the questions those notes answer; then cover the note area and answer the cues from memory, and let the summary strip force a one-sentence synthesis. Every zone is a working part: the page is a self-test that wrote itself.',
        afterConcept: 2,
        sketchImage: '/diagrams/study-note-taking-systems-sketch.jpg',
        sketchCaption:
          'Student Laboratory Notebook: the Cornell page ruled into its three working zones — the narrow cue column on the left holding question cues, the wide note area on the right filled with compressed notes in your own words, the summary strip along the bottom holding a one-sentence synthesis; a curved arrow annotates \u201cwithin 24 hours: distill the cues\u201d and a shaded wedge marks \u201ccover the notes, answer the cues.\u201d',
        svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 470" role="img" aria-label="The Cornell page: cue column left, note area right, summary strip bottom">
  <rect x="120" y="60" width="640" height="330" fill="#059669" opacity="0.04"/>
  <rect x="120" y="60" width="640" height="330" fill="none" stroke="#8a8a93" stroke-width="2.4" stroke-linecap="round"/>
  <rect x="116" y="56" width="648" height="338" fill="none" stroke="#8a8a93" stroke-width="1" opacity="0.5"/>
  <!-- dividers -->
  <g stroke="#8a8a93" stroke-width="2" stroke-linecap="round">
    <path d="M320 62 Q318 220 322 386"/>
    <path d="M122 320 Q440 316 756 322"/>
  </g>
  <g stroke="#8a8a93" stroke-width="1" opacity="0.5">
    <path d="M324 64 Q322 220 326 384"/>
    <path d="M124 324 Q440 320 754 326"/>
  </g>
  <!-- cue column tint + scribbles -->
  <rect x="122" y="62" width="196" height="256" fill="#d97706" opacity="0.07"/>
  <g stroke="#d97706" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.85">
    <path d="M140 92 L296 90"/>
    <path d="M140 122 L270 121"/>
    <path d="M140 152 L292 154"/>
    <path d="M140 182 L252 181"/>
    <path d="M140 212 L286 184"/>
    <path d="M140 242 L276 241"/>
    <path d="M140 272 L298 273"/>
  </g>
  <!-- note area scribbles -->
  <g stroke="#8a8a93" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.8">
    <path d="M342 92 L736 90"/>
    <path d="M342 112 L700 111"/>
    <path d="M342 132 L742 133"/>
    <path d="M342 162 L664 161"/>
    <path d="M366 172 L690 171"/>
    <path d="M342 202 L724 203"/>
    <path d="M342 222 L596 221"/>
    <path d="M342 252 L738 253"/>
    <path d="M342 272 L640 271"/>
    <path d="M342 292 L706 293"/>
  </g>
  <!-- summary strip tint -->
  <rect x="122" y="324" width="636" height="64" fill="#e11d48" opacity="0.05"/>
  <g stroke="#8a8a93" stroke-width="1.6" stroke-linecap="round" fill="none" opacity="0.8">
    <path d="M140 352 L600 350"/>
  </g>
  <!-- labels -->
  <g font-family="Georgia, 'Times New Roman', serif" font-style="italic">
    <text x="220" y="412" font-size="14" fill="#d97706" text-anchor="middle">cue column</text>
    <text x="220" y="432" font-size="12" fill="#8a8a93" text-anchor="middle">questions the notes answer</text>
    <text x="540" y="412" font-size="14" fill="currentColor" text-anchor="middle">note area</text>
    <text x="540" y="432" font-size="12" fill="#8a8a93" text-anchor="middle">your own words, abbreviated — live</text>
    <text x="770" y="356" font-size="13" fill="#e11d48" text-anchor="start">summary strip —</text>
    <text x="770" y="376" font-size="12" fill="#8a8a93" text-anchor="start">one-sentence</text>
    <text x="770" y="394" font-size="12" fill="#8a8a93" text-anchor="start">synthesis</text>
  </g>
  <!-- workflow arrows -->
  <g fill="none" stroke="#059669" stroke-width="1.6" stroke-dasharray="4 4" stroke-linecap="round">
    <path d="M320 96 C 300 80 260 76 232 84"/>
    <path d="M540 300 C 520 296 500 292 486 288"/>
  </g>
  <g font-family="Georgia, 'Times New Roman', serif" font-size="12.5" fill="#059669">
    <text x="60" y="76">within 24 hours:</text>
    <text x="60" y="94">distill the cues</text>
    <text x="356" y="286">cover the notes, answer the cues</text>
  </g>
</svg>`
      },
      {
        kind: 'para',
        text: 'Cornell earns its keep only after the lecture, and the conversion has a clock on it. Within twenty-four hours — while the lecture still has shape in memory — distill the cue column: the questions those notes answer, written as questions, because cues drafted a week later are guesses. From there the page plugs into the scheduling machinery the spaced repetition lesson owns: first cover-and-test within a day, again inside the week, then at expanding intervals, with every missed cue marked for the next round. The exam-facing version maps cues against the syllabus and past papers: a cue the question style never asks can wait; a cue that keeps failing is a drill target. The note page becomes one station in a retrieval pipeline rather than a static archive.',
      },
      {
        kind: 'para',
        text: 'Outlining records hierarchy: main point, sub-point, evidence, indented beneath. It suits material that arrives already structured — textbook chapters, well-signposted lectures, legal judgments — and it trains a single powerful question of every sentence: at what level does this live? Its weakness is speed under fire: a fast lecturer outruns tidy indentation, and relationships that are not trees — two causes feeding one effect — get flattened. Outlines excel as the format for reorganising material you already partly understand.',
      },
      {
        kind: 'para',
        text: 'Mind maps put the topic in the centre and radiate branches outward, refusing linearity. They surface connections and gaps, which makes them strong for brainstorming, revision overviews and subjects whose structure you do not yet know — the map discovers it. They are weak for dense sequential argument and anything you must quote precisely, and they scale badly on paper: past a few dozen nodes the picture becomes soup. Best used as the frontispiece to a denser system, not the system.',
      },
      {
        kind: 'para',
        text: 'Live lectures add a triage problem the systems above assume away: a lecturer speaks at roughly three hundred words a minute and you write at about seventy-five. The fix is to write structure, not sentences — the skeleton of the argument, abbreviations, arrows — and to leave deliberate gaps whenever attention falls behind, marking a “?” where something was missed instead of inventing plausible filler. The gap is an honest debt the post-lecture pass collects: the textbook, a classmate or the recording settles it within the day, and the cue conversion doubles as the checklist that nothing was left unsettled. Students who fabricate during the lecture encode the fabrication; the blank-with-a-question-mark costs one moment of honesty and buys a correctable note.',
      },
      {
        kind: 'para',
        text: 'The Zettelkasten is a personal wiki on paper slips. Sociologist Niklas Luhmann filled his with about ninety thousand index cards and credited it for some seventy books: each card holds one atomic idea, written in his own words, linked to the cards it touches. Notes stop being filed documents and become a network that generates arguments — follow the links and find structure you did not plan. Modern tools digitise the principle: atomic notes, own words, dense linking. The cost is overhead; the payoff compounds only after a few hundred notes.',
      },
      {
        kind: 'para',
        text: 'Choose by task. Live lectures with exams ahead: Cornell, because the cue column converts notes into retrieval practice. Well-structured reading or meetings: outlines, which mirror the source\'s architecture. New, tangled territory: a mind map to discover the shape. A research project or thesis: a Zettelkasten, which accumulates rather than archives. And the rule that outranks all systems: notes are commitments to future retrieval — any format that makes you revisit and self-test beats a more beautiful format that does not.',
      },
      {
        kind: 'para',
        text: 'One honest limit belongs on the record. Mueller and Oppenheimer\'s 2014 result — longhand beats laptops on conceptual questions — has not replicated cleanly. Urry and colleagues\' 2021 direct replication, using full-scene lecture videos, found no reliable longhand advantage on conceptual learning, and the meta-analysis by Morehead, Dunlosky and Rawson (2019) finds the written-notes edge modest and inconsistent across designs. The stable finding underneath the noise is the one this lesson opened with: what pays is generative processing — selecting, compressing, rephrasing in your own words — and the instrument matters mainly through whether it invites that. A laptop user who paraphrases ruthlessly beats a longhand user who transcribes. The prescription survives every study: whichever tool you hold, write fewer, denser, more rephrased words — then test yourself on them.',
      },
      {
        kind: 'para',
        text: 'Finally, treat notes as living documents rather than a museum. The weekly review — the same ritual the time-management lesson builds — is where notes get maintained: prune the dead ones, rewrite the bloated ones (rewriting is encoding again, for free), and settle any “?” gaps the live pass left. Link across courses where ideas genuinely touch — statistics informs psychology, thermodynamics informs chemistry — because the Zettelkasten principle scales down: even a handful of cross-course links turns isolated subjects into one connected picture. And retire ruthlessly: a note that has answered its cue three reviews in a row has done its job, because the knowledge now lives in you — which was the point all along.',
      },
      { kind: 'example', title: 'Worked Example', steps: [
        'Identify what is asked: a fifty-minute lecture on the Marshall Plan with an exam six weeks away — which system, applied how, produces exam-ready material?',
        'Recall the governing ideas: encoding favours rephrasing; Cornell\'s cue column converts notes into self-tests; spaced repetition schedules the reviews.',
        'Apply: take notes live in the right column — causes, mechanisms, objections, compressed into your own words. That evening, write six cue questions (“Why did Stalin refuse participation?”). Weekly until the exam, cover the notes, answer cues from memory, check, and mark failures for spaced re-testing.',
        'State the result: the page became a self-testing instrument — revision was retrieval practice all along, and the six-week gap worked for you instead of against you.',
      ] },
      { kind: 'heading', text: 'Applications in the Real World' },
      { kind: 'list', items: [
        'Lecture courses: Cornell pages with cue questions written within 24 hours, converted to weekly cover-and-test practice.',
        'Textbook study: outline while reading, then fold each level into the summary strip of a Cornell-style master page.',
        'Research and thesis writing: Zettelkasten notes accumulate linked arguments, so chapters assemble from clusters rather than blank pages.',
        'Meetings and podcasts: Cornell-lite — decisions on the left, reasons on the right, a one-line summary as the action list.',
        'Software: Obsidian and Logseq implement the Zettelkasten; Anki imports your cue questions directly into spaced repetition.',
      ] },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        tone: 'warn',
        text: 'Trap one is transcription — writing everything down and processing nothing; if your notes read like the lecturer\'s script, the learning did not happen. Trap two is decoration: colour-coding, highlighting and elaborate headings that feel like work but are re-reading in costume. Trap three is Zettelkasten procrastination — configuring the tool instead of writing notes, which is a hobby, not a system. And the quiet killer is never reviewing: one summary strip written and one cue column answered weekly is worth ten unused notebooks.',
      },
      { kind: 'heading', text: 'Key Terms' },
      { kind: 'terms', items: [
        { term: 'encoding effect', def: 'The learning that occurs while rephrasing and compressing material into notes.' },
        { term: 'external memory', def: 'The storage function of notes — the record consulted after the fact.' },
        { term: 'cue column', def: 'The Cornell left margin holding the questions and keywords the notes answer.' },
        { term: 'outline', def: 'A hierarchical note format recording levels: main point, support, detail.' },
        { term: 'mind map', def: 'A radial diagram placing a central topic in the middle with branches for sub-ideas.' },
        { term: 'Zettelkasten', def: 'A slip-box or digital system of atomic, densely linked notes in one\'s own words.' },
        { term: 'atomic note', def: 'A Zettelkasten unit: one idea per note, phrased for reuse and linking.' },
        { term: 'cue conversion', def: 'Distilling the day\'s notes into cue questions within 24 hours so the page becomes a self-test.' },
        { term: 'generative processing', def: 'Selecting, compressing and rephrasing in your own words — the encoding work that pays regardless of pen or keyboard.' },
        { term: 'living documents', def: 'Notes maintained weekly — pruned, rewritten, cross-linked and retired once their cues are mastered.' },
      ] },
      { kind: 'heading', text: 'Check Yourself' },
      { kind: 'quiz', items: [
        {
          q: 'Longhand note-takers outperformed laptop users on conceptual questions mainly because…',
          options: ['handwriting is slower, forcing selection and summarisation', 'laptops distract with notifications', 'typed notes cannot be printed', 'handwriting improves spelling'],
          answer: 0,
          explain: 'Transcription is easy on a keyboard; the constraint of pen and paper enforces rephrasing — the encoding effect.',
        },
        {
          q: 'The immediate purpose of the Cornell cue column is…',
          options: ['storing fuller lecture phrasing', 'generating self-test questions answerable with the notes covered', 'recording attendance', 'grading the notes'],
          answer: 1,
          explain: 'Cover the note area, answer the cues from memory — the page doubles as retrieval practice.',
        },
        {
          q: 'A Zettelkasten differs from ordinary files chiefly in that its notes are…',
          options: ['longer and more complete', 'sorted by subject into folders', 'atomic, in your own words, and densely linked', 'shared publicly as they are written'],
          answer: 2,
          explain: 'One idea per slip, self-written, cross-linked — the network, not the filing, generates arguments.',
        },
        {
          q: 'For a fast, well-structured textbook chapter, the best-fit default is…',
          options: ['a mind map', 'an outline mirroring the source hierarchy', 'verbatim transcription', 'no notes — just re-reading three times'],
          answer: 1,
          explain: 'Structured sources arrive as trees, and outlines are tree-shaped; maps suit unknown structure, not known structure.',
        },
        {
          q: 'When should the Cornell cue column be written, and why?',
          options: ['A week later, once the material has settled', 'Within 24 hours, while the lecture still has shape in memory', 'Never — the lecturer provides the cues', 'Only during the final revision week'],
          answer: 1,
          explain: 'Cues drafted a week later are guesses; the conversion has a clock on it, and only after it does the page plug into the spaced schedule.',
        },
        {
          q: 'When the lecturer outruns your pen, the tactic is to:',
          options: ['write faster in full sentences', 'invent plausible filler so the page stays complete', 'leave a marked “?” gap and settle it from the textbook or recording the same day', 'stop taking notes entirely'],
          answer: 2,
          explain: 'Fabricated notes encode fabrication; the marked gap is honest debt the post-lecture pass collects — and the cue conversion checks nothing was left unsettled.',
        },
        {
          q: 'For revising unknown, tangled territory, the best-fit format is:',
          options: ['a mind map, to discover the shape', 'verbatim transcription', 'a Zettelkasten from day one', 'highlighting only'],
          answer: 0,
          explain: 'Maps surface connections and gaps when structure is unknown — the map discovers it; outlines mirror structure you already know.',
        },
        {
          q: 'The 2014 longhand-over-laptop finding, after Urry\'s 2021 direct replication and the 2019 meta-analysis, is best summarized as…',
          options: ['disproven — handwriting never mattered', 'ironclad — always take longhand notes', 'mixed — the durable rule is generative processing: rephrase, compress, then self-test, on any instrument', 'relevant only to psychology courses'],
          answer: 2,
          explain: 'The 2014 conceptual advantage did not replicate cleanly (Urry 2021; Morehead 2019 finds a modest, inconsistent edge) — what survives is the processing, not the pen.',
        },
      ] },
      {
        kind: 'callout',
        title: 'Where to go next',
        tone: 'path',
        text: 'Prerequisites: the study-skills base built by the spaced repetition, active recall and SQ3R lessons — this system is built to feed them, so read those first if you are new. Natural next steps: argument mapping for analytical reading, and deliberate practice for skills whose “notes” are drills rather than sentences.',
      },
    ],
  },
]
