import { useState } from 'react'
import Cal from '@calcom/embed-react'
import { Button } from '@/components/ui/button'
import {
  bookingOptions,
  calConfig,
  calLink,
  calcom,
  defaultBookingOption,
  formatCHF,
} from '@/config/booking'
import { useI18n } from '@/i18n'

export function Booking({ dark }: { dark: boolean }) {
  const { t } = useI18n()
  const theme = dark ? 'dark' : 'light'
  const [hours, setHours] = useState(defaultBookingOption.hours)
  const selected = bookingOptions.find((o) => o.hours === hours) ?? defaultBookingOption

  return (
    <section id="booking" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t('booking.title')}</h2>
        <p className="mt-1 text-muted-foreground">
          {t('booking.subtitle', { price: formatCHF(calcom.hourlyCHF) })}
        </p>
      </div>

      {/* Pick a duration — switches which event is embedded below. */}
      <div
        className="mb-8 flex flex-wrap gap-3"
        data-testid="duration-options"
        role="group"
        aria-label={t('booking.title')}
      >
        {bookingOptions.map((o) => (
          <Button
            key={o.hours}
            variant={o.hours === hours ? 'default' : 'outline'}
            aria-pressed={o.hours === hours}
            onClick={() => setHours(o.hours)}
          >
            {t('booking.hours', { h: o.hours })} · {formatCHF(o.priceCHF)}
          </Button>
        ))}
      </div>

      <div
        data-testid="booking-embed"
        className="overflow-hidden rounded-2xl border border-border bg-card shadow-card"
      >
        <Cal
          /* Re-mount when the chosen event or theme changes. */
          key={`${selected.slug}-${theme}`}
          calOrigin={calcom.origin}
          embedJsUrl={calcom.embedJsUrl}
          calLink={calLink(selected.slug)}
          style={{ width: '100%', height: '640px', overflow: 'auto' }}
          config={calConfig(theme)}
        />
      </div>
    </section>
  )
}
