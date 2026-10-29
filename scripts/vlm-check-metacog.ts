import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
async function main() {
  const zai = await (ZAI as any).create();
  const b64 = fs.readFileSync('./public/diagrams/fnd-metacognition-calibration-sketch.jpg').toString('base64');
  const res = await zai.chat.completions.createVision({
    messages: [{
      role: 'user',
      content: [
        { type: 'text', text: 'This should be a hand-drawn notebook sketch of a calibration plot: x-axis "Confidence", y-axis "Actual performance", dashed diagonal labelled perfect calibration, a curve below it labelled overconfidence, a prediction-gap arrow, one point above the diagonal labelled underestimated. Is it severely garbled (nonsense letters, mangled labels, broken layout)? Answer PASS or FAIL with one short reason.' },
        { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${b64}` } },
      ],
    }],
  });
  console.log(res.choices[0].message.content);
}
main().catch(e => { console.error('VLM check error:', e.message); process.exit(1); });
