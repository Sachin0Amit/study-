'use client'

/**
 * X11G — Weekly share card (canvas-rendered PNG, zero deps).
 *
 * Renders the trailing 7 days of focus history as a story-format
 * (1080×1350) card — dark StudyVerse theme, big total-hours hero, stat
 * chips, a 7-day mini bar chart with the daily-goal line, and top
 * subjects — then downloads it as a PNG. All drawing is hand-rolled
 * Canvas 2D: no external canvas libs, no screenshot hacks.
 */

export interface WeeklyCardData {
  /** Monday-anchored labels for the 7 trailing days */
  weekLabel: string // e.g. "Oct 14 – 20, 2026"
  totalMinutes: number
  pomodoros: number
  goalDays: number // days that hit the daily goal
  bestDayMinutes: number
  streakDays: number
  goalMin: number // daily goal in minutes (for the chart line)
  /** per-day minutes, oldest → newest (7 entries) */
  days: { label: string; minutes: number }[]
  topSubjects: { subject: string; minutes: number }[]
}

const W = 1080
const H = 1350

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
): void {
  ctx.beginPath()
  ctx.moveTo(x + r, y)
  ctx.arcTo(x + w, y, x + w, y + h, r)
  ctx.arcTo(x + w, y + h, x, y + h, r)
  ctx.arcTo(x, y + h, x, y, r)
  ctx.arcTo(x, y, x + w, y, r)
  ctx.closePath()
}

function fmtHours(min: number): string {
  const h = Math.floor(min / 60)
  const m = min % 60
  if (h === 0) return `${m}m`
  return m === 0 ? `${h}h` : `${h}h ${m}m`
}

const ACCENTS = ['#34d399', '#fbbf24', '#38bdf8', '#fb7185', '#a78bfa']

export function drawWeeklyShareCard(data: WeeklyCardData): HTMLCanvasElement {
  const canvas = document.createElement('canvas')
  canvas.width = W
  canvas.height = H
  const ctx = canvas.getContext('2d')
  if (!ctx) return canvas

  const font = (weight: number, size: number) =>
    `${weight} ${size}px system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`

  /* ---- background ---------------------------------------------------- */
  const bg = ctx.createLinearGradient(0, 0, 0, H)
  bg.addColorStop(0, '#0b1210')
  bg.addColorStop(0.55, '#0a0f0e')
  bg.addColorStop(1, '#0c1310')
  ctx.fillStyle = bg
  ctx.fillRect(0, 0, W, H)

  // emerald aurora glows
  const glow1 = ctx.createRadialGradient(140, 120, 40, 140, 120, 700)
  glow1.addColorStop(0, 'rgba(52,211,153,0.16)')
  glow1.addColorStop(1, 'rgba(52,211,153,0)')
  ctx.fillStyle = glow1
  ctx.fillRect(0, 0, W, H * 0.6)
  const glow2 = ctx.createRadialGradient(W - 80, H - 160, 40, W - 80, H - 160, 620)
  glow2.addColorStop(0, 'rgba(251,191,36,0.07)')
  glow2.addColorStop(1, 'rgba(251,191,36,0)')
  ctx.fillStyle = glow2
  ctx.fillRect(0, H * 0.5, W, H * 0.5)

  // faint dot texture
  ctx.fillStyle = 'rgba(255,255,255,0.028)'
  for (let y = 40; y < H; y += 44) {
    for (let x = 40; x < W; x += 44) {
      ctx.beginPath()
      ctx.arc(x, y, 1.6, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  /* ---- brand header --------------------------------------------------- */
  // logo mark: rounded emerald square + 4-point star
  ctx.save()
  ctx.shadowColor = 'rgba(52,211,153,0.45)'
  ctx.shadowBlur = 26
  ctx.fillStyle = '#10b981'
  roundRect(ctx, 72, 72, 74, 74, 20)
  ctx.fill()
  ctx.restore()
  ctx.fillStyle = '#ecfdf5'
  ctx.beginPath()
  const cx = 72 + 37
  const cy = 72 + 37
  ctx.moveTo(cx, cy - 22)
  ctx.quadraticCurveTo(cx + 5, cy - 5, cx + 22, cy)
  ctx.quadraticCurveTo(cx + 5, cy + 5, cx, cy + 22)
  ctx.quadraticCurveTo(cx - 5, cy + 5, cx - 22, cy)
  ctx.quadraticCurveTo(cx - 5, cy - 5, cx, cy - 22)
  ctx.closePath()
  ctx.fill()

  ctx.fillStyle = '#f4f4f5'
  ctx.font = font(800, 44)
  ctx.textBaseline = 'middle'
  ctx.fillText('StudyVerse', 170, 100)
  ctx.fillStyle = 'rgba(167,243,208,0.9)'
  ctx.font = font(700, 22)
  ctx.fillText('F O C U S   H Q', 172, 140)

  // week pill, right side
  const weekTxt = data.weekLabel
  ctx.font = font(700, 24)
  const wpw = ctx.measureText(weekTxt).width + 56
  ctx.strokeStyle = 'rgba(52,211,153,0.35)'
  ctx.lineWidth = 2
  roundRect(ctx, W - 72 - wpw, 84, wpw, 52, 26)
  ctx.stroke()
  ctx.fillStyle = 'rgba(167,243,208,0.95)'
  ctx.fillText(weekTxt, W - 72 - wpw + 28, 111)

  /* ---- hero ----------------------------------------------------------- */
  ctx.fillStyle = 'rgba(244,244,245,0.62)'
  ctx.font = font(700, 34)
  ctx.fillText('This week I studied', 72, 268)

  const hero = fmtHours(data.totalMinutes)
  ctx.save()
  ctx.shadowColor = 'rgba(52,211,153,0.35)'
  ctx.shadowBlur = 34
  ctx.fillStyle = '#34d399'
  ctx.font = font(900, 172)
  ctx.fillText(hero, 66, 396)
  ctx.restore()

  ctx.fillStyle = 'rgba(244,244,245,0.45)'
  ctx.font = font(600, 26)
  ctx.fillText('of pomodoro deep work', 74, 486)

  /* ---- stat chips ------------------------------------------------------ */
  const chips: { label: string; value: string }[] = [
    { label: 'pomodoros', value: `🍅 ${data.pomodoros}` },
    { label: 'goal days', value: `🎯 ${data.goalDays}/7` },
    { label: 'best day', value: `🔥 ${fmtHours(data.bestDayMinutes)}` },
    { label: 'streak', value: `⚡ ${data.streakDays}d` },
  ]
  const chipY = 560
  const chipH = 128
  const gap = 18
  const chipW = (W - 144 - gap * 3) / 4
  chips.forEach((c, i) => {
    const x = 72 + i * (chipW + gap)
    ctx.fillStyle = 'rgba(255,255,255,0.045)'
    roundRect(ctx, x, chipY, chipW, chipH, 24)
    ctx.fill()
    ctx.strokeStyle = 'rgba(255,255,255,0.07)'
    ctx.lineWidth = 2
    roundRect(ctx, x, chipY, chipW, chipH, 24)
    ctx.stroke()
    ctx.fillStyle = '#f4f4f5'
    ctx.font = font(800, 40)
    ctx.fillText(c.value, x + 24, chipY + 46)
    ctx.fillStyle = 'rgba(244,244,245,0.5)'
    ctx.font = font(600, 22)
    ctx.fillText(c.label, x + 24, chipY + 92)
  })

  /* ---- 7-day bar chart -------------------------------------------------- */
  const chartY = 760
  const chartH = 300
  ctx.fillStyle = 'rgba(244,244,245,0.62)'
  ctx.font = font(700, 30)
  ctx.fillText('Day by day', 72, chartY - 34)

  const chartX = 72
  const chartW = W - 144
  const barAreaBottom = chartY + chartH - 46
  const maxMin = Math.max(data.goalMin * 1.15, ...data.days.map((d) => d.minutes), 30)
  const barW = (chartW - 6 * 22) / 7

  // horizontal guide lines
  ctx.strokeStyle = 'rgba(255,255,255,0.06)'
  ctx.lineWidth = 2
  for (let g = 1; g <= 3; g++) {
    const gy = barAreaBottom - (chartH - 70) * (g / 4)
    ctx.beginPath()
    ctx.moveTo(chartX, gy)
    ctx.lineTo(chartX + chartW, gy)
    ctx.stroke()
  }

  data.days.forEach((d, i) => {
    const x = chartX + i * (barW + 22)
    const hFrac = d.minutes / maxMin
    const barH = Math.max(d.minutes > 0 ? 12 : 4, (chartH - 70) * hFrac)
    const hitGoal = d.minutes >= data.goalMin && data.goalMin > 0
    // bar
    const barGrad = ctx.createLinearGradient(x, barAreaBottom - barH, x, barAreaBottom)
    if (d.minutes === 0) {
      ctx.fillStyle = 'rgba(255,255,255,0.07)'
    } else if (hitGoal) {
      barGrad.addColorStop(0, '#34d399')
      barGrad.addColorStop(1, 'rgba(52,211,153,0.25)')
      ctx.fillStyle = barGrad
    } else {
      barGrad.addColorStop(0, 'rgba(52,211,153,0.75)')
      barGrad.addColorStop(1, 'rgba(52,211,153,0.12)')
      ctx.fillStyle = barGrad
    }
    roundRect(ctx, x, barAreaBottom - barH, barW, barH, 10)
    ctx.fill()
    // value label
    if (d.minutes > 0) {
      ctx.fillStyle = hitGoal ? '#a7f3d0' : 'rgba(244,244,245,0.75)'
      ctx.font = font(700, 24)
      const txt = fmtHours(d.minutes)
      ctx.fillText(txt, x + barW / 2 - ctx.measureText(txt).width / 2, barAreaBottom - barH - 20)
    }
    // day label
    ctx.fillStyle = 'rgba(244,244,245,0.45)'
    ctx.font = font(700, 24)
    ctx.fillText(d.label, x + barW / 2 - ctx.measureText(d.label).width / 2, barAreaBottom + 34)
  })

  // daily-goal dashed line
  if (data.goalMin > 0) {
    const gy = barAreaBottom - (chartH - 70) * (Math.min(data.goalMin, maxMin) / maxMin)
    ctx.save()
    ctx.setLineDash([12, 10])
    ctx.strokeStyle = 'rgba(251,191,36,0.55)'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(chartX, gy)
    ctx.lineTo(chartX + chartW, gy)
    ctx.stroke()
    ctx.restore()
    ctx.fillStyle = 'rgba(251,191,36,0.8)'
    ctx.font = font(700, 21)
    ctx.fillText(`daily goal · ${fmtHours(data.goalMin)}`, chartX + chartW - 236, gy - 14)
  }

  /* ---- top subjects ----------------------------------------------------- */
  const subjY = 1150
  ctx.fillStyle = 'rgba(244,244,245,0.62)'
  ctx.font = font(700, 30)
  ctx.fillText('Where the time went', 72, subjY - 34)

  const rows = data.topSubjects.slice(0, 3)
  const maxSubj = Math.max(1, ...rows.map((r) => r.minutes))
  rows.forEach((r, i) => {
    const y = subjY + i * 64
    ctx.fillStyle = ACCENTS[i % ACCENTS.length]
    ctx.beginPath()
    ctx.arc(86, y, 9, 0, Math.PI * 2)
    ctx.fill()
    ctx.fillStyle = 'rgba(244,244,245,0.9)'
    ctx.font = font(700, 27)
    ctx.fillText(r.subject.slice(0, 26), 110, y + 1)
    const minsTxt = fmtHours(r.minutes)
    ctx.fillStyle = 'rgba(244,244,245,0.55)'
    ctx.font = font(700, 25)
    ctx.fillText(minsTxt, W - 72 - ctx.measureText(minsTxt).width, y + 1)
  })
  if (rows.length === 0) {
    ctx.fillStyle = 'rgba(244,244,245,0.4)'
    ctx.font = font(600, 26)
    ctx.fillText('No subjects logged this week — the timer knows, once you run a block.', 86, subjY + 8)
  }

  /* ---- footer ----------------------------------------------------------- */
  ctx.strokeStyle = 'rgba(255,255,255,0.08)'
  ctx.lineWidth = 2
  ctx.beginPath()
  ctx.moveTo(72, H - 96)
  ctx.lineTo(W - 72, H - 96)
  ctx.stroke()
  ctx.fillStyle = 'rgba(244,244,245,0.42)'
  ctx.font = font(700, 23)
  // pick the longest footer line that still clears the right-side motto
  const motto = 'KEEP THE STREAK ALIVE'
  ctx.font = font(800, 23)
  const mottoW = ctx.measureText(motto).width
  const mottoX = W - 72 - mottoW
  ctx.font = font(700, 23)
  const footerLefts = [
    'studyverse · pomodoro · to-dos · honest analytics',
    'studyverse · pomodoro · honest analytics',
    'studyverse · focus hq',
  ]
  const footerLeft = footerLefts.find((s) => 72 + ctx.measureText(s).width + 28 < mottoX) ?? 'studyverse'
  ctx.fillText(footerLeft, 72, H - 56)
  ctx.fillStyle = 'rgba(52,211,153,0.6)'
  ctx.font = font(800, 23)
  ctx.fillText(motto, mottoX, H - 56)

  return canvas
}

/** draw + download the card as a PNG */
export function downloadWeeklyShareCard(data: WeeklyCardData): boolean {
  try {
    const canvas = drawWeeklyShareCard(data)
    canvas.toBlob(
      (blob) => {
        if (!blob) return
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `studyverse-week-${new Date().toISOString().slice(0, 10)}.png`
        document.body.appendChild(a)
        a.click()
        a.remove()
        setTimeout(() => URL.revokeObjectURL(url), 4000)
      },
      'image/png',
      0.92
    )
    return true
  } catch {
    return false
  }
}
