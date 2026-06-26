import Cal from '@calcom/embed-react'
import { calLink, calcom, defaultBookingSlug } from '@/config/booking'
import { useI18n } from '@/i18n'

export function Booking({ dark }: { dark: boolean }) {
  const { t } = useI18n()
  return (
    <section id="booking" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t('booking.title')}</h2>
        <p className="mt-1 text-muted-foreground">{t('booking.subtitle')}</p>
      </div>

      <div
        data-testid="booking-embed"
        className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
      >
        <Cal
          /* Re-mount on theme change so the embed picks up light/dark. */
          key={dark ? 'dark' : 'light'}
          calLink={calLink(defaultBookingSlug)}
          style={{ width: '100%', height: '640px', overflow: 'auto' }}
          config={{ layout: calcom.layout, theme: dark ? 'dark' : 'light' }}
        />
      </div>
    </section>
  )
}
