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
 * Everything bookable lives here so the site, the CTAs and the prices can be
 * changed in one place. The CHF prices are also the amounts you set on each
 * Cal.com event type's Stripe app (see README → "Payment setup").
 *
 * TODO(angelina): confirm each event slug + price once the Cal.com event
 * types exist (the username is set).
 */
export const calcom = {
  /** Cal.com handle → cal.com/formabyangelina */
  username: 'formabyangelina',
  /** Cal embed layout. 'month_view' | 'week_view' | 'column_view'. */
  layout: 'month_view',
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
  /** Cal.com event-type slug → cal.com/<username>/<slug>. */
  slug: string
  /** Price in CHF, charged via Cal.com's Stripe app on this event type. */
  priceCHF: number
  /** Session length in minutes (display only). */
  durationMin: number
  icon: Icon
}

export const services: Service[] = [
  {
    id: 'personal-training',
    i18nKey: 'personalTraining',
    slug: 'pt-60', // TODO: confirm event slug in Cal.com
    priceCHF: 120, // TODO: confirm price
    durationMin: 60,
    icon: Barbell,
  },
  {
    id: 'nutrition-coaching',
    i18nKey: 'nutrition',
    slug: 'nutrition-60', // TODO: confirm event slug in Cal.com
    priceCHF: 110, // TODO: confirm price
    durationMin: 60,
    icon: ForkKnife,
  },
  {
    id: 'yoga',
    i18nKey: 'yoga',
    slug: 'yoga-60', // TODO: confirm event slug in Cal.com
    priceCHF: 90, // TODO: confirm price
    durationMin: 60,
    icon: FlowerLotus,
  },
  {
    id: 'physio-fascia',
    i18nKey: 'physioFascia',
    slug: 'physio-60', // TODO: confirm event slug in Cal.com
    priceCHF: 140, // TODO: confirm price
    durationMin: 60,
    icon: HandHeart,
  },
]

/** The event shown in the inline booking embed by default. */
export const defaultBookingSlug = services[0].slug

/** Build a Cal.com link (`<username>/<slug>`) for an event slug. */
export function calLink(slug: string): string {
  return `${calcom.username}/${slug}`
}

/** Format a CHF price the Swiss way, e.g. `CHF 120`. */
export function formatCHF(amount: number): string {
  return `CHF ${amount.toLocaleString('de-CH')}`
}
