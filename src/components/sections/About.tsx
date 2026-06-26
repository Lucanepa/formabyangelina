import { useT } from '@/i18n'

export function About() {
  const t = useT()
  return (
    <section id="about" className="scroll-mt-20 bg-card/60">
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-16 md:grid-cols-2 md:items-center">
        {/* TODO: replace with a real photo of Angelina (e.g. /about.jpg) */}
        <div
          className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-muted"
          role="img"
          aria-label={t('about.imageAlt')}
        >
          <div className="grid h-full place-items-center text-sm text-muted-foreground">
            TODO: Bild / photo
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t('about.title')}</h2>
          {/* TODO: replace bio with real copy (see i18n about.bio) */}
          <p className="mt-4 max-w-prose text-muted-foreground">{t('about.bio')}</p>
        </div>
      </div>
    </section>
  )
}
