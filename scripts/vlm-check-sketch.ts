/**
 * VLM legibility check for a generated notebook sketch.
 * Usage: bun scripts/vlm-check-sketch.ts <image-path>
 */
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'

async function main() {
  const path = process.argv[2]
  if (!path) {
    console.error('usage: bun scripts/vlm-check-sketch.ts <image-path>')
    process.exit(1)
  }
  const zai = await ZAI.create()
  const b64 = fs.readFileSync(path).toString('base64')
  const res = await zai.chat.completions.createVision({
    messages: [
      {
        role: 'user',
        content: [
          {
            type: 'text',
            text: 'This is supposed to be a hand-drawn notebook sketch of a house floor plan memory palace with six numbered loci (soap on doormat, mangoes on coat hook, detergent in hallway, eggs in umbrella stand, bananas on counter, milk carton in sink) and dashed route arrows. Briefly: (1) is it legible and coherent (no mangled text, no impossible geometry, no garbled limbs/letters)? (2) does it read as an authentic hand-drawn pen sketch? Answer with "LEGIBLE" or "GARBLED" plus one short line of reasoning.',
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
