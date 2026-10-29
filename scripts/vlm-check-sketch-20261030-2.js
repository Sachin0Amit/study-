import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';

async function main() {
  const zai = await ZAI.create();
  const b64 = fs.readFileSync('/home/z/my-project/public/diagrams/strategy-gap-utility-sketch.jpg').toString('base64');
  const res = await zai.chat.completions.createVision({
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'This should be a hand-drawn notebook sketch of a two-panel chart. LEFT: two bars labeled "rereading" (84%) and "practice testing" (11%). RIGHT: a utility tier table with rows HIGH, MODERATE, LOW listing practice testing / distributed practice / interleaving / rereading / summarization / highlighting. Grade the image: 1) Are the handwritten words legible and correctly spelled (list any garbled words)? 2) Does the layout match the description? End your reply with exactly one line: VERDICT: PASS or VERDICT: FAIL.',
          },
          { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${b64}` } },
        ],
      },
    ],
    thinking: { type: 'disabled' },
  });
  console.log(res.choices[0].message.content);
}
main().catch((e) => { console.error(e.message); process.exit(1); });
