import {
  Barbell,
  ForkKnife,
  FlowerLotus,
  HandHeart,
  type Icon,
} from '@phosphor-icons/react'

/**
 * Booking + pricing — the single source of truth.
 *
 * There is exactly one bookable Cal.com event: a "session" charged at CHF 100
 * per hour, bookable in 1-, 2- or 3-hour blocks. The four services below are
 * descriptive focuses for that session (training, nutrition, yoga, physio) —
 * every "Book" funnels to the same event.
 *
 * TODO(angelina): create the `session` event type in Cal.com as a
 * multiple-duration event (60 / 120 / 180 min), with the Stripe app pricing it
 * at CHF 100 per hour, and confirm the slug below matches.
 */
export const calcom = {
  /** Cal.com handle → cal.com/formabyangelina */
  username: 'formabyangelina',
  /** Cal embed layout. 'month_view' | 'week_view' | 'column_view'. */
  layout: 'month_view',
} as const

/** The one bookable event: a session at CHF 100/hour, in 1–3 hour blocks. */
export const session = {
  /** Cal.com event-type slug → cal.com/formabyangelina/session */
  slug: 'session',
  /** Hourly rate in CHF (charged via Cal.com's Stripe app). */
  hourlyCHF: 100,
  /** Bookable lengths, in whole hours. */
  durationsHours: [1, 2, 3] as const,
  /** Pre-selected length when opening the booker. */
  defaultDurationHours: 1,
} as const

export type ServiceId =
  | 'personal-training'
  | 'nutrition-coaching'
  | 'yoga'
  | 'physio-fascia'

export interface Service {
  id: ServiceId
  /** i18n key prefix under `services.<key>` for title + description. */
  i18nKey: string
  icon: Icon
}

/** Descriptive focuses for a session — all book the single `session` event. */
export const services: Service[] = [
  { id: 'personal-training', i18nKey: 'personalTraining', icon: Barbell },
  { id: 'nutrition-coaching', i18nKey: 'nutrition', icon: ForkKnife },
  { id: 'yoga', i18nKey: 'yoga', icon: FlowerLotus },
  { id: 'physio-fascia', i18nKey: 'physioFascia', icon: HandHeart },
]

/** The event shown in the inline booking embed. */
export const defaultBookingSlug = session.slug

/** Price in CHF for a given number of hours (CHF 100 × hours). */
export function priceForHours(hours: number): number {
  return session.hourlyCHF * hours
}

/** Build a Cal.com link (`<username>/<slug>`) for an event slug. */
export function calLink(slug: string): string {
  return `${calcom.username}/${slug}`
}

/** Cal embed config; optionally pre-select a duration (in whole hours). */
export function calConfig(durationHours?: number) {
  return {
    layout: calcom.layout,
    ...(durationHours ? { duration: String(durationHours * 60) } : {}),
  }
}

/** Format a CHF price the Swiss way, e.g. `CHF 100`. */
export function formatCHF(amount: number): string {
  return `CHF ${amount.toLocaleString('de-CH')}`
}
