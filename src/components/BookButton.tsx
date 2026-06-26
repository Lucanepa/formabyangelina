import { Button, type ButtonProps } from '@/components/ui/button'
import { calLink, calConfig } from '@/config/booking'

interface BookButtonProps extends ButtonProps {
  /** Cal.com event slug to open in a modal. */
  slug: string
  /** Optionally pre-select a duration, in whole hours. */
  durationHours?: number
}

/**
 * Opens a Cal.com event in a modal. Relies on the Cal embed script being
 * loaded once (see `useCalcom`), which binds clicks on `[data-cal-link]`.
 */
export function BookButton({ slug, durationHours, children, ...props }: BookButtonProps) {
  return (
    <Button
      data-cal-link={calLink(slug)}
      data-cal-config={JSON.stringify(calConfig(durationHours))}
      {...props}
    >
      {children}
    </Button>
  )
}
