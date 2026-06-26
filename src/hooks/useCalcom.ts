import { useEffect } from 'react'
import { getCalApi } from '@calcom/embed-react'

/**
 * Loads the Cal.com embed script once and configures the popup UI. Buttons with
 * `data-cal-link="<username>/<slug>"` open that event in a modal automatically.
 * Theme is kept in sync with the site's light/dark mode.
 */
export function useCalcom(dark: boolean) {
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const cal = await getCalApi()
      if (cancelled) return
      cal('ui', {
        theme: dark ? 'dark' : 'light',
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
    return () => {
      cancelled = true
    }
  }, [dark])
}
