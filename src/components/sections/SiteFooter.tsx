import { EnvelopeSimple, InstagramLogo, MapPin, Phone } from '@phosphor-icons/react'
import { LogoLockup } from '@/components/Logo'
import { useT } from '@/i18n'

export function SiteFooter() {
  const t = useT()
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 sm:grid-cols-3">
        {/* Contact — TODO: real email, phone */}
        <div>
          <h3 className="text-sm font-semibold text-foreground">{t('footer.contactTitle')}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <MapPin className="size-4 shrink-0" /> {t('footer.location')}
            </li>
            <li className="flex items-center gap-2">
              <EnvelopeSimple className="size-4 shrink-0" />
              {/* TODO: real email */}
              <span>{t('footer.email')}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0" />
              {/* TODO: real phone */}
              <span>{t('footer.phone')}</span>
            </li>
          </ul>
        </div>

        {/* Socials — TODO: real handles/links */}
        <div>
          <h3 className="text-sm font-semibold text-foreground">{t('footer.socialTitle')}</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              {/* TODO: real Instagram URL */}
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <InstagramLogo className="size-4 shrink-0" /> Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Legal notice — TODO, required for Stripe/TWINT */}
        <div>
          <h3 className="text-sm font-semibold text-foreground">{t('footer.legalTitle')}</h3>
          <p className="mt-3 max-w-prose text-sm text-muted-foreground">{t('footer.legal')}</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-6 text-xs text-muted-foreground">
        <LogoLockup className="h-12 w-auto text-foreground" />
        <span>
          © {year} Forma by Angelina. {t('footer.rights')}
        </span>
      </div>
    </footer>
  )
}
