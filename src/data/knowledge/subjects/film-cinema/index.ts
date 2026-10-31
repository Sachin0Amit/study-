/**
 * Knowledge Universe — subject book: Film & Cinema (film-cinema)
 * group: Arts & Culture · 5 chapters · 5 lessons
 *
 * One folder per canonical subject (mirrors the Library book); one file
 * per chapter. New chapters: create <nn>-<chapter-slug>.ts, add it to the
 * array below, and (for a new field/branch) declare it in
 * ../subject-taxonomy.ts so the bridge groups it correctly.
 *
 * Table of contents:
 *   01 Screenwriting & Story — 1 lesson
 *   02 Cinematography & Light — 1 lesson
 *   03 Editing & Montage — 1 lesson
 *   04 Sound & Score — 1 lesson
 *   05 Film History & Movements — 1 lesson
 */
import type { KnowledgeTopic } from '../../types'
import { filmCinemaCh01 } from './01-screenwriting-and-story'
import { filmCinemaCh02 } from './02-cinematography-and-light'
import { filmCinemaCh03 } from './03-editing-and-montage'
import { filmCinemaCh04 } from './04-sound-and-score'
import { filmCinemaCh05 } from './05-film-history-and-movements'

export const filmCinemaTopics: KnowledgeTopic[] = [
  ...filmCinemaCh01,
  ...filmCinemaCh02,
  ...filmCinemaCh03,
  ...filmCinemaCh04,
  ...filmCinemaCh05,
]
