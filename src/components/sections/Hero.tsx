import { ArrowRight, Sparkle } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { useT } from '@/i18n'

export function Hero() {
  const t = useT()
  return (
    <section className="mx-auto max-w-5xl px-5 pt-16 pb-12 sm:pt-24" data-testid="hero">
      <Badge variant="secondary" className="mb-5 gap-1.5">
        <Sparkle className="size-3.5" weight="fill" /> {t('hero.eyebrow')}
      </Badge>
      <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
        {t('hero.title')}
      </h1>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">{t('hero.tagline')}</p>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Button size="lg" asChild>
          <a href="#booking" className="gap-2">
            {t('hero.cta')} <ArrowRight className="size-4" weight="bold" />
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#services">{t('nav.services')}</a>
        </Button>
      </div>
    </section>
  )
}
