/**
 * Knowledge Universe — Control & Instrumentation — Chapter 01: Feedback Control Systems
 * 1 lesson · ~997 words
 * field: Mechanical Engineering
 * legacy sources: engineering.ts
 *
 * Auto-organized by scripts/reorganize-knowledge-fields.ts (2026-11-02);
 * edit freely — append new lessons to this array, then run:
 *   bun run scripts/serialize-content.ts
 *
 * Taxonomy match: fields [Mechanical Engineering]
 *
 * Lessons (snapshot at reorganization):
 *   01.1 eng-feedback-control-pid-tuning — Feedback Control and PID Tuning
 */
import type { KnowledgeTopic } from '../../types'

export const controlUnifiedCh01: KnowledgeTopic[] = [
  {
    id: 'eng-feedback-control-pid-tuning',
    title: 'Feedback Control and PID Tuning',
    domain: 'Engineering',
    field: 'Mechanical Engineering',
    branch: 'Control Systems',
    tier: 'intermediate',
    concepts: [
      'open-loop versus closed-loop control',
      'error as the driving signal',
      'proportional, integral and derivative action',
      'steady-state offset and integral windup',
      'stability and oscillation',
      'tuning by the Ziegler–Nichols method',
    ],
    words: 997,
    readMins: 5,
    addedOn: '2026-10-16',
    blocks: [
      {
        kind: 'para',
        text: 'A cruise control that ignores the road and a thermostat that only turns fully on or fully off both fail in instructive ways. Feedback control closes the loop: the controller measures the output, compares it against the setpoint, and acts on the difference. The PID controller — proportional, integral, derivative — is the workhorse that emerges from that idea, running everything from drones and refineries to the temperature of your fridge.',
      },
      {
        kind: 'callout',
        title: 'Why this matters',
        text: 'Almost every engineered system that must hold a value under disturbance — speed, temperature, pressure, position — relies on feedback. Understanding PID gives you the vocabulary to diagnose oscillating, sluggish or drifting systems in the wild.',
        tone: 'insight',
      },
      { kind: 'heading', text: 'Core Concepts' },
      {
        kind: 'para',
        text: 'Open-loop control applies a pre-computed input and hopes the world cooperates; closed-loop control measures the result and corrects continuously. The gap between the setpoint and the measurement, called the error, is the single signal a PID controller needs to compute its next move.',
      },
      {
        kind: 'para',
        text: 'The proportional term reacts to the present error, producing an output that grows with how far off you are. Pure proportional control is fast but usually leaves a residual steady-state offset, because some error must remain to keep pushing the output at all.',
      },
      {
        kind: 'para',
        text: 'The integral term accumulates past error over time, which is exactly what kills steady-state offset: as long as any error persists, the accumulator keeps growing and keeps pushing. The price is sluggishness and a failure mode called integral windup, where the accumulated term grows enormous during a long saturation and then overshoots badly.',
      },
      {
        kind: 'para',
        text: 'The derivative term anticipates the future by reacting to the rate of change of the error. It dampens fast approaches — braking before you reach the target rather than after — but it amplifies sensor noise, which is why real controllers filter the derivative or leave the gain at zero.',
      },
      {
        kind: 'para',
        text: 'Stability is the non-negotiable property. Excessive gains, or lag between actuator and sensor, can turn correction into oscillation that grows instead of decaying. The art of tuning is trading rise time, overshoot and settling time against each other.',
      },
      {
        kind: 'para',
        text: 'Ziegler–Nichols tuning gives a systematic starting recipe: raise proportional gain until the loop oscillates steadily, note that ultimate gain and oscillation period, then set the three PID gains from fixed fractions of those values. It is aggressive by design — engineers usually detune it for production hardware.',
      },
      { kind: 'heading', text: 'Key Formulas' },
      {
        kind: 'formula',
        name: 'PID control law',
        latex: 'u(t) = K_p e(t) + K_i \\int_0^t e(\\tau)\\,d\\tau + K_d \\frac{de(t)}{dt}',
        meaning: 'Controller output is the sum of proportional, integral and derivative actions on the error signal.',
      },
      {
        kind: 'formula',
        name: 'Ziegler–Nichols (some-overshoot variant)',
        latex: 'K_p = 0.33\\,K_u, \\quad T_i = 0.5\\,T_u, \\quad T_d = 0.33\\,T_u',
        meaning: 'Classic starting gains derived from the ultimate gain and oscillation period found experimentally.',
      },
      {
        kind: 'example',
        title: 'Worked Example',
        steps: [
          'Identify what is asked: a drone must hover at 10 m but oscillates around the altitude after gusts — diagnose the likely term to adjust.',
          'Recall the governing idea: sustained oscillation after a disturbance means the loop is over-aggressive in correction; derivative action adds damping, and excessive proportional gain adds energy at the resonant frequency.',
          'Apply it to the specifics: reduce the proportional gain slightly and raise the derivative gain so the controller brakes as altitude error shrinks, rather than adding energy at the natural frequency.',
          'State the result: the overshoot decays within two or three cycles instead of ringing on — the classic P-down, D-up fix for hover loops.',
        ],
      },
      { kind: 'heading', text: 'Applications in the Real World' },
      {
        kind: 'list',
        items: [
          'Cruise control and lane-keeping in modern vehicles — nested loops steering against disturbances',
          'Chemical plants and refineries — thousands of PID loops holding flow, temperature and pressure simultaneously',
          'Quadcopter flight controllers — cascaded angle, rate and altitude loops running at hundreds of hertz',
          'HVAC and refrigeration — compressor and valve control tuned to avoid short-cycling',
          '3D printers — hot-end and bed temperature loops holding a degree of accuracy',
        ],
      },
      {
        kind: 'callout',
        title: 'Common Pitfalls',
        text: 'Do not add integral action to fix noise — the accumulator will chase the noise and the loop will drift. Do not forget anti-windup on any loop whose actuator can saturate; a valve that is fully open cannot correct further, and the wound-up integrator guarantees a massive overshoot when it finally unwinds.',
        tone: 'warn',
      },
      { kind: 'heading', text: 'Key Terms' },
      {
        kind: 'terms',
        items: [
          { term: 'Setpoint', def: 'The target value the control loop is trying to hold.' },
          { term: 'Error', def: 'The difference between setpoint and measured output at a given instant.' },
          { term: 'Steady-state offset', def: 'The small permanent error left by pure proportional control.' },
          { term: 'Integral windup', def: 'Excessive accumulation of integral action during actuator saturation.' },
          { term: 'Ultimate gain', def: 'The proportional gain at which the loop first sustains steady oscillation.' },
          { term: 'Settling time', def: 'Time for the output to stay within a band around the setpoint after a change.' },
        ],
      },
      { kind: 'heading', text: 'Check Your Understanding' },
      {
        kind: 'quiz',
        items: [
          {
            q: 'Which PID term eliminates steady-state offset?',
            options: ['Proportional', 'Integral', 'Derivative', 'Feedforward'],
            answer: 1,
            explain: 'The integral accumulates any persistent error until it is driven to zero — proportional alone leaves an offset and derivative acts only on change.',
          },
          {
            q: 'A loop oscillates with growing amplitude. The system is:',
            options: ['Stable', 'Marginally stable', 'Unstable', 'Overdamped'],
            answer: 2,
            explain: 'Growing oscillations mean each correction adds energy — the defining signature of an unstable closed loop.',
          },
          {
            q: 'Why is derivative action often filtered or disabled on noisy sensors?',
            options: [
              'It causes steady-state offset',
              'It amplifies high-frequency noise',
              'It slows the loop response',
              'It interferes with the integral term',
            ],
            answer: 1,
            explain: 'Differentiation of a noisy signal produces large spurious outputs, so the derivative of noise dominates the true trend.',
          },
          {
            q: 'In Ziegler–Nichols tuning, the ultimate gain is:',
            options: [
              'The gain that makes the loop settle fastest',
              'The gain at which the loop sustains steady oscillation',
              'The integral gain after tuning',
              'Half the derivative gain',
            ],
            answer: 1,
            explain: 'You raise proportional gain until neutral stability — persistent constant-amplitude oscillation — and use that gain and period to compute the PID settings.',
          },
        ],
      },
      {
        kind: 'callout',
        title: 'Study Path',
        text: 'Comfort with first-order differential equations makes the mathematics transparent. Next: Laplace-domain analysis, then pole placement, and finally state-space control — each level buys you insight into loops PID cannot tame.',
        tone: 'path',
      },
      { kind: 'heading', text: 'Five-Minute Recap' },
      {
        kind: 'list',
        ordered: true,
        items: [
          'Closed-loop control corrects continuously using the error signal.',
          'Proportional acts on now, integral on the past, derivative on the future.',
          'Integral kills offset but brings windup risk; derivative damps but amplifies noise.',
          'Stability trumps speed — an oscillating loop is a broken loop.',
          'Ziegler–Nichols converts an experiment into starting gains, then you detune for production.',
        ],
      },
    ],
  },
]
