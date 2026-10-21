'use client'

import { useSyncExternalStore } from 'react'
import {
  getFocusEngineSnapshot,
  getFocusSettingsSnapshot,
  subscribeFocusEngine,
  subscribeFocusSettings,
} from './focus'

/**
 * X11F — Ambient Soundscape engine.
 *
 * A fully synthesized ambient-sound mixer for deep-focus sessions — the
 * YeolPumeto-style "background sounds" pillar, but with ZERO audio files:
 * every layer is generated live with the Web Audio API (noise buffers,
 * filters, LFOs and scheduled transient events).
 *
 * Layers:
 *   rain       — pink-noise bed + randomized high droplet transients
 *   brown      — deep brown-noise rumble (classic "brown noise for focus")
 *   waves      — brown noise swells (two phase-shifted slow LFOs)
 *   cafe       — band-passed murmur (speech band) + occasional cup clink
 *   fire       — low crackle bed + random snap bursts
 *
 * The engine lives at module level (like the focus timer engine) so audio
 * keeps playing while the user switches views. State persists to
 * localStorage under 'sv-soundscape'.
 */

export type SoundLayerId = 'rain' | 'brown' | 'waves' | 'cafe' | 'fire'

export interface SoundLayerMeta {
  id: SoundLayerId
  name: string
  emoji: string
  /** short description shown under the name */
  hint: string
}

export const SOUND_LAYERS: SoundLayerMeta[] = [
  { id: 'rain', name: 'Rain', emoji: '🌧️', hint: 'steady drizzle with droplets' },
  { id: 'brown', name: 'Deep hum', emoji: '🌊', hint: 'brown noise — the classic' },
  { id: 'waves', name: 'Waves', emoji: '🏖️', hint: 'slow ocean swells' },
  { id: 'cafe', name: 'Café murmur', emoji: '☕', hint: 'distant chatter + clinks' },
  { id: 'fire', name: 'Fireplace', emoji: '🔥', hint: 'warm crackle bed' },
]

export interface SoundscapeState {
  master: number // 0..1 master volume (0 mutes everything)
  layers: Record<SoundLayerId, number> // per-layer volume 0..1 (0 = off)
}

const STORAGE_KEY = 'sv-soundscape'

const DEFAULT_STATE: SoundscapeState = {
  master: 0.6,
  layers: { rain: 0, brown: 0, waves: 0, cafe: 0, fire: 0 },
}

/* ------------------------------------------------------------------ */
/*  Module-level engine state                                          */
/* ------------------------------------------------------------------ */

let state: SoundscapeState = { master: 0.6, layers: { ...DEFAULT_STATE.layers } }
let ctx: AudioContext | null = null
let masterGain: GainNode | null = null
const layerNodes = new Map<
  SoundLayerId,
  { gain: GainNode; stop: () => void }
>()
const listeners = new Set<() => void>()
let loaded = false

/* ---- persistence ---------------------------------------------------- */

function loadPersisted(): void {
  if (loaded || typeof window === 'undefined') return
  loaded = true
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return
    const parsed = JSON.parse(raw) as Partial<SoundscapeState>
    const layers = { ...DEFAULT_STATE.layers }
    if (parsed.layers) {
      for (const meta of SOUND_LAYERS) {
        const v = Number(parsed.layers[meta.id])
        if (Number.isFinite(v)) layers[meta.id] = Math.min(1, Math.max(0, v))
      }
    }
    const master = Number(parsed.master)
    state = {
      master: Number.isFinite(master) ? Math.min(1, Math.max(0, master)) : 0.6,
      layers,
    }
  } catch {
    /* corrupted — keep defaults */
  }
}

function persist(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    /* storage unavailable — session-only sound */
  }
}

function notify(): void {
  for (const fn of listeners) fn()
}

/* ------------------------------------------------------------------ */
/*  X11G — focus ducking (auto-pause ambience outside focus blocks)    */
/* ------------------------------------------------------------------ */

/**
 * When the "Auto-pause ambience" ritual setting is on, the whole mix
 * fades to silence whenever the timer is NOT inside a running focus
 * block (breaks, pauses, idle). The user's saved levels are untouched —
 * ducking is a separate multiplier on the master gain, so a new focus
 * block restores the room instantly and smoothly.
 */
let ducked = false

function applyDuck(on: boolean): void {
  if (ducked === on) return
  ducked = on
  // no AudioContext exists before the first user gesture — the duck factor
  // is a plain multiplier read on every sync, so it applies on next sync
  if (ctx) syncLayers()
  notify()
}

function evalDuck(): void {
  if (!getFocusSettingsSnapshot().scapeAutoPause) {
    applyDuck(false)
    return
  }
  const s = getFocusEngineSnapshot()
  applyDuck(!(s.running && s.kind === 'focus'))
}

if (typeof window !== 'undefined') {
  subscribeFocusEngine(evalDuck)
  subscribeFocusSettings(evalDuck)
  evalDuck()
}

/** true while the mix is silenced by the auto-pause ritual */
export function isSoundscapeDucked(): boolean {
  return ducked
}

/* ------------------------------------------------------------------ */
/*  Noise synthesis                                                    */
/* ------------------------------------------------------------------ */

function makeWhiteBuffer(ac: AudioContext, seconds = 2): AudioBuffer {
  const len = Math.floor(ac.sampleRate * seconds)
  const buf = ac.createBuffer(1, len, ac.sampleRate)
  const data = buf.getChannelData(0)
  for (let i = 0; i < len; i++) data[i] = Math.random() * 2 - 1
  return buf
}

/** pink noise via Paul Kellet's refined filter */
function makePinkBuffer(ac: AudioContext, seconds = 2): AudioBuffer {
  const len = Math.floor(ac.sampleRate * seconds)
  const buf = ac.createBuffer(1, len, ac.sampleRate)
  const data = buf.getChannelData(0)
  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0
  for (let i = 0; i < len; i++) {
    const white = Math.random() * 2 - 1
    b0 = 0.99886 * b0 + white * 0.0555179
    b1 = 0.99332 * b1 + white * 0.0750759
    b2 = 0.969 * b2 + white * 0.153852
    b3 = 0.8665 * b3 + white * 0.3104856
    b4 = 0.55 * b4 + white * 0.5329522
    b5 = -0.7616 * b5 - white * 0.016898
    data[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11
    b6 = white * 0.115926
  }
  return buf
}

/** brown noise — integrated white, warm and deep */
function makeBrownBuffer(ac: AudioContext, seconds = 2): AudioBuffer {
  const len = Math.floor(ac.sampleRate * seconds)
  const buf = ac.createBuffer(1, len, ac.sampleRate)
  const data = buf.getChannelData(0)
  let last = 0
  for (let i = 0; i < len; i++) {
    const white = Math.random() * 2 - 1
    last = (last + 0.02 * white) / 1.02
    data[i] = Math.min(1, Math.max(-1, last * 3.5))
  }
  return buf
}

function loopSource(ac: AudioContext, buf: AudioBuffer): AudioBufferSourceNode {
  const src = ac.createBufferSource()
  src.buffer = buf
  src.loop = true
  return src
}

/* ------------------------------------------------------------------ */
/*  Layer builders — each returns { gain, stop }                       */
/* ------------------------------------------------------------------ */

type LayerFactory = (ac: AudioContext, out: AudioNode) => { gain: GainNode; stop: () => void }

const buildRain: LayerFactory = (ac, out) => {
  const gain = ac.createGain()
  gain.gain.value = 0
  // bed: pink noise, gently low-passed
  const bed = loopSource(ac, makePinkBuffer(ac))
  const lp = ac.createBiquadFilter()
  lp.type = 'lowpass'
  lp.frequency.value = 1400
  bed.connect(lp).connect(gain)
  bed.start()
  // droplets: sparse high-frequency blips scheduled forever
  let alive = true
  const droplet = () => {
    if (!alive || !ctx) return
    const t = ac.currentTime
    const osc = ac.createOscillator()
    const g = ac.createGain()
    const hp = ac.createBiquadFilter()
    hp.type = 'highpass'
    hp.frequency.value = 3000
    osc.type = 'sine'
    osc.frequency.setValueAtTime(2600 + Math.random() * 3500, t)
    osc.frequency.exponentialRampToValueAtTime(1200 + Math.random() * 800, t + 0.05)
    g.gain.setValueAtTime(0.0001, t)
    g.gain.linearRampToValueAtTime(0.05 + Math.random() * 0.05, t + 0.004)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.06)
    osc.connect(hp).connect(g).connect(gain)
    osc.start(t)
    osc.stop(t + 0.08)
  }
  const tick = () => {
    if (!alive) return
    if (Math.random() < 0.5) droplet()
    setTimeout(tick, 90 + Math.random() * 220)
  }
  setTimeout(tick, 200)
  return {
    gain,
    stop: () => {
      alive = false
      try { bed.stop() } catch { /* already stopped */ }
    },
  }
}

const buildBrown: LayerFactory = (ac, out) => {
  const gain = ac.createGain()
  gain.gain.value = 0
  const src = loopSource(ac, makeBrownBuffer(ac))
  const lp = ac.createBiquadFilter()
  lp.type = 'lowpass'
  lp.frequency.value = 500
  src.connect(lp).connect(gain)
  src.start()
  return { gain, stop: () => { try { src.stop() } catch { /* noop */ } } }
}

const buildWaves: LayerFactory = (ac, out) => {
  const gain = ac.createGain()
  gain.gain.value = 0
  const src = loopSource(ac, makeBrownBuffer(ac))
  const lp = ac.createBiquadFilter()
  lp.type = 'lowpass'
  lp.frequency.value = 900
  const swellGain = ac.createGain()
  swellGain.gain.value = 0.45
  src.connect(lp).connect(swellGain).connect(gain)
  // two phase-shifted slow swells → believable surf rhythm
  const lfo1 = ac.createOscillator()
  const lfoG1 = ac.createGain()
  lfo1.type = 'sine'
  lfo1.frequency.value = 0.075
  lfoG1.gain.value = 0.4
  lfo1.connect(lfoG1).connect(swellGain.gain)
  lfo1.start()
  const lfo2 = ac.createOscillator()
  const lfoG2 = ac.createGain()
  lfo2.type = 'sine'
  lfo2.frequency.value = 0.052
  lfoG2.gain.value = 0.18
  lfo2.connect(lfoG2).connect(swellGain.gain)
  lfo2.start()
  src.start()
  return {
    gain,
    stop: () => {
      try { src.stop(); lfo1.stop(); lfo2.stop() } catch { /* noop */ }
    },
  }
}

const buildCafe: LayerFactory = (ac, out) => {
  const gain = ac.createGain()
  gain.gain.value = 0
  // murmur: band-passed brown noise in the speech band, slowly wandering
  const src = loopSource(ac, makeBrownBuffer(ac))
  const bp = ac.createBiquadFilter()
  bp.type = 'bandpass'
  bp.frequency.value = 450
  bp.Q.value = 0.7
  const murmurGain = ac.createGain()
  murmurGain.gain.value = 0.5
  src.connect(bp).connect(murmurGain).connect(gain)
  // slow amplitude wander — a room that breathes
  const lfo = ac.createOscillator()
  const lfoG = ac.createGain()
  lfo.type = 'sine'
  lfo.frequency.value = 0.09
  lfoG.gain.value = 0.22
  lfo.connect(lfoG).connect(murmurGain.gain)
  lfo.start()
  // filter frequency drift
  const drift = ac.createOscillator()
  const driftG = ac.createGain()
  drift.type = 'sine'
  drift.frequency.value = 0.031
  driftG.gain.value = 140
  drift.connect(driftG).connect(bp.frequency)
  drift.start()
  src.start()
  // occasional cup clink: short high damped ping
  let alive = true
  const clink = () => {
    if (!alive || !ctx) return
    const t = ac.currentTime
    const osc = ac.createOscillator()
    const g = ac.createGain()
    osc.type = 'triangle'
    osc.frequency.value = 1800 + Math.random() * 1400
    g.gain.setValueAtTime(0.0001, t)
    g.gain.linearRampToValueAtTime(0.03 + Math.random() * 0.03, t + 0.003)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.18)
    osc.connect(g).connect(gain)
    osc.start(t)
    osc.stop(t + 0.2)
  }
  const tick = () => {
    if (!alive) return
    if (Math.random() < 0.16) clink()
    setTimeout(tick, 1800 + Math.random() * 4200)
  }
  setTimeout(tick, 3000)
  return {
    gain,
    stop: () => {
      alive = false
      try { src.stop(); lfo.stop(); drift.stop() } catch { /* noop */ }
    },
  }
}

const buildFire: LayerFactory = (ac, out) => {
  const gain = ac.createGain()
  gain.gain.value = 0
  // warm low bed
  const bed = loopSource(ac, makeBrownBuffer(ac))
  const lp = ac.createBiquadFilter()
  lp.type = 'lowpass'
  lp.frequency.value = 700
  const bedGain = ac.createGain()
  bedGain.gain.value = 0.5
  bed.connect(lp).connect(bedGain).connect(gain)
  bed.start()
  // crackle: short decaying noise bursts, log-random spacing
  let alive = true
  const crackle = (loud: number) => {
    if (!alive || !ctx) return
    const t = ac.currentTime
    const len = Math.floor(ac.sampleRate * 0.05)
    const buf = ac.createBuffer(1, len, ac.sampleRate)
    const data = buf.getChannelData(0)
    for (let i = 0; i < len; i++) {
      const decay = Math.exp(-i / (ac.sampleRate * 0.006))
      data[i] = (Math.random() * 2 - 1) * decay
    }
    const src = ac.createBufferSource()
    src.buffer = buf
    const hp = ac.createBiquadFilter()
    hp.type = 'highpass'
    hp.frequency.value = 1500
    const g = ac.createGain()
    g.gain.value = loud
    src.connect(hp).connect(g).connect(gain)
    src.start(t)
  }
  const tick = () => {
    if (!alive) return
    if (Math.random() < 0.55) crackle(0.05 + Math.random() * 0.12)
    if (Math.random() < 0.07) crackle(0.25) // occasional loud snap
    setTimeout(tick, 120 + Math.random() * 500)
  }
  setTimeout(tick, 500)
  return {
    gain,
    stop: () => {
      alive = false
      try { bed.stop() } catch { /* noop */ }
    },
  }
}

const FACTORIES: Record<SoundLayerId, LayerFactory> = {
  rain: buildRain,
  brown: buildBrown,
  waves: buildWaves,
  cafe: buildCafe,
  fire: buildFire,
}

/* ------------------------------------------------------------------ */
/*  Engine control                                                     */
/* ------------------------------------------------------------------ */

function ensureContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  try {
    const Ctor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
    if (!Ctor) return null
    if (!ctx) {
      ctx = new Ctor()
      masterGain = ctx.createGain()
      masterGain.gain.value = 0 // fade in under the master control
      masterGain.connect(ctx.destination)
    }
    void ctx.resume?.()
    return ctx
  } catch {
    return null
  }
}

function layerActive(id: SoundLayerId): boolean {
  return state.layers[id] > 0 && state.master > 0
}

/** rebuild the active layer set — cheap (at most 5 nodes) and idempotent */
function syncLayers(): void {
  const ac = ensureContext()
  if (!ac || !masterGain) return
  const now = ac.currentTime

  // start newly-active layers / refresh volumes of running ones
  for (const meta of SOUND_LAYERS) {
    const want = layerActive(meta.id)
    const existing = layerNodes.get(meta.id)
    if (want && existing) {
      existing.gain.gain.setTargetAtTime(state.layers[meta.id], now, 0.1)
    } else if (want && !existing) {
      try {
        const built = FACTORIES[meta.id](ac, masterGain)
        built.gain.connect(masterGain)
        built.gain.gain.setTargetAtTime(state.layers[meta.id], now, 0.25)
        layerNodes.set(meta.id, built)
      } catch {
        /* layer failed to build — skip silently */
      }
    }
  }

  // fade out + stop inactive layers
  for (const [id, nodes] of layerNodes) {
    if (!layerActive(id)) {
      nodes.gain.gain.setTargetAtTime(0, now, 0.2)
      layerNodes.delete(id)
      // let the fade finish before releasing the nodes
      setTimeout(() => nodes.stop(), 900)
    }
  }

  // master volume (always driven, so mute/unmute fades smoothly) —
  // the X11G duck multiplier silences the room outside focus blocks
  masterGain.gain.setTargetAtTime(state.master * (ducked ? 0 : 1), now, 0.15)
}

/* ---- public API ----------------------------------------------------- */

export function getSoundscapeState(): SoundscapeState {
  loadPersisted()
  return state
}

export function setLayerVolume(id: SoundLayerId, volume: number): void {
  loadPersisted()
  const v = Math.min(1, Math.max(0, volume))
  state = { ...state, layers: { ...state.layers, [id]: v } }
  persist()
  syncLayers()
  notify()
}

export function toggleLayer(id: SoundLayerId): void {
  loadPersisted()
  const on = state.layers[id] > 0
  // if master is muted, unmute on first toggle so the button "works"
  const master = state.master <= 0 && !on ? 0.6 : state.master
  state = { master, layers: { ...state.layers, [id]: on ? 0 : 0.55 } }
  persist()
  syncLayers()
  notify()
}

export function setMasterVolume(volume: number): void {
  loadPersisted()
  state = { ...state, master: Math.min(1, Math.max(0, volume)) }
  persist()
  syncLayers()
  notify()
}

/** true when at least one layer is audible */
export function soundscapePlaying(): boolean {
  loadPersisted()
  return state.master > 0 && SOUND_LAYERS.some((m) => state.layers[m.id] > 0)
}

/** master mute/unmute that remembers the previous level */
export function toggleMaster(): void {
  loadPersisted()
  if (state.master > 0) {
    state = { ...state, master: 0 }
  } else {
    // if nothing is on, turning the master on also starts a gentle rain
    const anyOn = SOUND_LAYERS.some((m) => state.layers[m.id] > 0)
    state = {
      master: 0.6,
      layers: anyOn ? state.layers : { ...state.layers, rain: 0.55 },
    }
  }
  persist()
  syncLayers()
  notify()
}

/** apply a named preset mix */
export function applyPreset(preset: 'off' | 'rain' | 'deep' | 'coffee' | 'bonfire'): void {
  loadPersisted()
  const layers = { ...DEFAULT_STATE.layers }
  if (preset === 'rain') layers.rain = 0.55
  if (preset === 'deep') layers.brown = 0.5
  if (preset === 'coffee') {
    layers.cafe = 0.5
    layers.rain = 0.3
  }
  if (preset === 'bonfire') {
    layers.fire = 0.55
    layers.rain = 0.2
  }
  state = { master: preset === 'off' ? 0 : 0.6, layers }
  persist()
  syncLayers()
  notify()
}

export function subscribeSoundscape(fn: () => void): () => void {
  listeners.add(fn)
  return () => listeners.delete(fn)
}

/* ---- React binding --------------------------------------------------- */

export function useSoundscape(): SoundscapeState {
  return useSyncExternalStore(subscribeSoundscape, getSoundscapeState)
}

/** X11G — React binding for the auto-pause duck state ("room silenced") */
export function useSoundscapeDucked(): boolean {
  return useSyncExternalStore(subscribeSoundscape, isSoundscapeDucked, () => false)
}
