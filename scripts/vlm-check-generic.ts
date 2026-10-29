/**
 * Generic VLM legibility check for a generated notebook sketch.
 * Usage: bun scripts/vlm-check-generic.ts <image-path> <description>
 */
import ZAI from 'z-ai-web-dev-sdk'
import fs from 'fs'

async function main() {
  const path = process.argv[2]
  const desc = process.argv[3] ?? 'a hand-drawn diagram'
  if (!path) {
    console.error('usage: bun scripts/vlm-check-generic.ts <image-path> <description>')
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
            text: `This is supposed to be a hand-drawn notebook sketch of ${desc}. Briefly: (1) is it legible and coherent (no mangled text, no impossible geometry, no garbled letters)? (2) does it read as an authentic hand-drawn pen sketch? Answer with "LEGIBLE" or "GARBLED" plus one short line of reasoning.`,
          },
          { type: 'image_url', image_url: { url: `data:image/jpeg;base64,${b64}` } },
        ],
      },
    ],
  })
  console.log(res.choices[0]?.message?.content ?? 'NO RESPONSE')
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
