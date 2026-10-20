import { db } from '../src/lib/db'
async function main() {
  const d1 = await db.focusSession.deleteMany({ where: { deviceId: 'qa-x11d-test' } })
  const d2 = await db.focusSession.deleteMany({
    where: { deviceId: 'dev-nkuiea70mvgevazt', taskTitle: { in: ['CSV export QA', 'QA export row'] } },
  })
  console.log('deleted:', d1.count + d2.count)
}
main().catch((e) => { console.error(e); process.exit(1) })
