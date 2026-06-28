import { Button } from '@/components/ui/button'
import { LogoLockup } from '@/components/Logo'
import { ThemeToggle } from '@/components/ThemeToggle'
import { LanguageToggle } from '@/components/LanguageToggle'
import { useT } from '@/i18n'

export function SiteHeader({ dark, onToggleTheme }: { dark: boolean; onToggleTheme: () => void }) {
  const t = useT()
  return (
    <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
        <a href="#top" aria-label="Forma by Angelina" className="flex items-center">
          <LogoLockup className="h-12 w-auto text-foreground" />
        </a>

        <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
          <a href="#services" className="transition-colors hover:text-foreground">
            {t('nav.services')}
          </a>
          <a href="#about" className="transition-colors hover:text-foreground">
            {t('nav.about')}
          </a>
          <a href="#booking" className="transition-colors hover:text-foreground">
            {t('nav.booking')}
          </a>
          <a href="#packages" className="transition-colors hover:text-foreground">
            {t('nav.packages')}
          </a>
        </nav>

        <div className="flex items-center gap-1.5">
          <LanguageToggle />
          <ThemeToggle dark={dark} onToggle={onToggleTheme} />
          <Button asChild className="ml-1">
            <a href="#booking">{t('nav.book')}</a>
          </Button>
        </div>
      </div>
    </header>
  )
}
