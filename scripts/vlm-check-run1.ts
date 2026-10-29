/* VLM check for the deliberate-practice sketch (SUBJECTDEPTH run 1) */
import ZAI from 'z-ai-web-dev-sdk'
import * as fs from 'fs'

async function main() {
  const zai = await ZAI.create()
  const b64 = fs.readFileSync('public/diagrams/deliberate-practice-sketch.jpg').toString('base64')
  const res = await zai.chat.completions.createVision({
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'This is supposed to be a hand-drawn notebook sketch of a practice-curve graph: time per trial on the vertical axis, accumulated practice hours on the horizontal, a falling power-law curve flattening into a labelled plateau, a dashed vertical line where deliberate practice re-steepens the curve, and a corner box with Berlin 1993 hours. Briefly: (1) is it legible and coherent (no mangled text, no impossible geometry)? (2) does it read as an authentic hand-drawn pen sketch? Answer with "LEGIBLE" or "GARBLED" plus one short line of reasoning.',
          },
          { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${b64}` } },
        ],
      },
    ],
  })
  console.log(res.choices[0]?.message?.content ?? 'NO RESPONSE')
}

main().catch((e) => {
  console.error('VLM check failed:', e?.message ?? e)
  process.exit(1)
})
