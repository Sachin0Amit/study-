const wc = (s: string) => s.split(/\s+/).filter(Boolean).length
function blockWords(b: any): number {
  let n = 0
  if (typeof b.text === 'string') n += wc(b.text)
  if (typeof b.title === 'string' && b.kind === 'callout') n += wc(b.title)
  if (typeof b.name === 'string') n += wc(b.name)
  if (typeof b.meaning === 'string') n += wc(b.meaning)
  if (typeof b.title === 'string' && b.kind === 'example') n += wc(b.title)
  for (const s of b.steps || []) n += wc(s)
  for (const it of b.items || []) {
    if (typeof it === 'string') n += wc(it)
    else n += wc(it.term || '') + wc(it.def || '') + wc(it.q || '') + wc(it.explain || '') + (it.options || []).reduce((a: number, o: string) => a + wc(o), 0)
  }
  return n
}
async function main() {
  const mod = await import('../src/data/knowledge/fields/x65-crossverify-pass')
  for (const t of (mod as any).x65CrossverifyBotanyPassTopics) {
    const actual = (t.blocks || []).reduce((a: number, b: any) => a + blockWords(b), 0)
    const mins = Math.round(actual / 200)
    console.log(`${t.id}: actual=${actual} declared=${t.words} readMins(${mins}) declared=${t.readMins}`)
  }
}
main()
