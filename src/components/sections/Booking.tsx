import Cal from '@calcom/embed-react'
import { BookButton } from '@/components/BookButton'
import {
  calConfig,
  calLink,
  defaultBookingSlug,
  formatCHF,
  priceForHours,
  session,
} from '@/config/booking'
import { useI18n } from '@/i18n'

export function Booking({ dark }: { dark: boolean }) {
  const { t } = useI18n()
  const theme = dark ? 'dark' : 'light'

  return (
    <section id="booking" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t('booking.title')}</h2>
        <p className="mt-1 text-muted-foreground">
          {t('booking.subtitle', { price: formatCHF(session.hourlyCHF) })}
        </p>
      </div>

      {/* Quick-book by duration — all open the same session, preset 1/2/3 h. */}
      <div className="mb-8 flex flex-wrap gap-3" data-testid="duration-options">
        {session.durationsHours.map((h) => (
          <BookButton
            key={h}
            slug={session.slug}
            durationHours={h}
            variant={h === session.defaultDurationHours ? 'default' : 'outline'}
          >
            {t('booking.hours', { h })} · {formatCHF(priceForHours(h))}
          </BookButton>
        ))}
      </div>

      <div
        data-testid="booking-embed"
        className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
      >
        <Cal
          /* Re-mount on theme change so the embed picks up light/dark. */
          key={theme}
          calLink={calLink(defaultBookingSlug)}
          style={{ width: '100%', height: '640px', overflow: 'auto' }}
          config={{ ...calConfig(session.defaultDurationHours), theme }}
        />
      </div>
    </section>
  )
}
