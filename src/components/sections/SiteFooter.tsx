import { MapPin } from '@phosphor-icons/react'
import { LogoLockup } from '@/components/Logo'
import { useT } from '@/i18n'

export function SiteFooter() {
  const t = useT()
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid gap-10 px-5 py-12 sm:grid-cols-2 max-w-5xl">
        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-foreground">{t('footer.contactTitle')}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" /> {t('footer.location')}
            </li>
            <li>
              <a
                href="#booking"
                className="rounded-sm font-medium text-foreground underline-offset-4 transition-colors hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {t('nav.book')}
              </a>
            </li>
          </ul>
        </div>

        {/* Legal notice / Impressum */}
        <div>
          <h3 className="text-sm font-semibold text-foreground">{t('footer.legalTitle')}</h3>
          <p className="mt-3 max-w-prose text-sm text-muted-foreground">{t('footer.legal')}</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground">
        <LogoLockup className="h-10 w-auto text-foreground" />
        <span>
          © {year} Forma by Angelina. {t('footer.rights')}
        </span>
      </div>
    </footer>
  )
}
