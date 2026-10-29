import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

const CHECKS = [
  {
    file: '/home/z/my-project/public/diagrams/procrastination-zombie-loop-sketch.jpg',
    desc: 'a circular habit-loop diagram with cue at top, arrows through pain/anticipatory discomfort, routine: escape, reward: relief, a belief arc closing the circle, and a kitchen-timer Pomodoro breaking the loop with margin note "process, not product"',
  },
  {
    file: '/home/z/my-project/public/diagrams/time-management-planning-stack-sketch.jpg',
    desc: 'a three-tier planning stack: top tier labeled "term map", middle tier labeled "weekly plan", bottom tier labeled "daily task list" with a frog doodle, a down arrow labeled "decompose" and an up arrow labeled "review actuals", margin note "frog first"',
  },
];

async function main() {
  const zai = await ZAI.create();
  for (const c of CHECKS) {
    const b64 = fs.readFileSync(c.file).toString('base64');
    const res = await zai.chat.completions.createVision({
      messages: [
        {
          role: 'user',
          content: [
            {
              type: 'text',
              text: `This should be a hand-drawn notebook sketch of ${c.desc}. Grade it: 1) are the handwritten words legible and correctly spelled (list any garbled words)? 2) does the layout match? End with exactly one line: VERDICT: PASS or VERDICT: FAIL.`,
            },
            { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${b64}` } },
          ],
        },
      ],
      thinking: { type: 'disabled' },
    });
    console.log(`=== ${c.file.split('/').pop()} ===`);
    console.log(res.choices[0].message.content);
  }
}
main().catch((e) => { console.error(e.message); process.exit(1); });
