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
 * Bookings run on Cal.com's EU instance (cal.eu) under the handle
 * `formabyangelina`. There is one bookable session, charged at CHF 100 per
 * hour, offered in 1-, 2- and 3-hour lengths — each length is its own Cal.com
 * event type so Stripe charges the correct amount per duration. The four
 * services are descriptive focuses; all of them book the same session.
 *
 * TODO(angelina): create/confirm the event types in Cal.com — `coaching` (60m,
 * CHF 100), `coaching-120` (120m, CHF 200), `coaching-180` (180m, CHF 300) —
 * and make sure each is enabled and priced via the Stripe app.
 */
export const calcom = {
  /** Cal.com handle → www.cal.eu/formabyangelina */
  username: 'formabyangelina',
  /** EU instance origin where the booking pages render (NOT cal.com). */
  origin: 'https://www.cal.eu',
  /** Embed script for the EU instance. */
  embedJsUrl: 'https://www.cal.eu/embed/embed.js',
  /** Cal embed layout. 'month_view' | 'week_view' | 'column_view'. */
  layout: 'month_view',
  /** Hourly rate in CHF. */
  hourlyCHF: 100,
} as const

export interface BookingOption {
  /** Length in whole hours. */
  hours: number
  /** Cal.com event-type slug → www.cal.eu/formabyangelina/<slug>. */
  slug: string
  /** Price in CHF for this length (charged via Cal.com's Stripe app). */
  priceCHF: number
}

/** One Cal.com event type per length — keeps Stripe pricing correct. */
export const bookingOptions: BookingOption[] = [
  { hours: 1, slug: 'coaching', priceCHF: 100 },
  { hours: 2, slug: 'coaching-120', priceCHF: 200 },
  // TODO(angelina): create this 3-hour event type in Cal.com (180m, CHF 300).
  { hours: 3, slug: 'coaching-180', priceCHF: 300 },
]

export const defaultBookingOption = bookingOptions[0]
export const defaultBookingSlug = defaultBookingOption.slug

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

/** Descriptive focuses for a session — all book the same event. */
export const services: Service[] = [
  { id: 'personal-training', i18nKey: 'personalTraining', icon: Barbell },
  { id: 'nutrition-coaching', i18nKey: 'nutrition', icon: ForkKnife },
  { id: 'yoga', i18nKey: 'yoga', icon: FlowerLotus },
  { id: 'physio-fascia', i18nKey: 'physioFascia', icon: HandHeart },
]

/** Build a Cal.com link (`<username>/<slug>`) for an event slug. */
export function calLink(slug: string): string {
  return `${calcom.username}/${slug}`
}

/** Cal embed config; optionally pin the theme. */
export function calConfig(theme?: 'light' | 'dark') {
  return { layout: calcom.layout, ...(theme ? { theme } : {}) }
}

/** Format a CHF price the Swiss way, e.g. `CHF 100`. */
export function formatCHF(amount: number): string {
  return `CHF ${amount.toLocaleString('de-CH')}`
}
