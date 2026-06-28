import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { services, calcom, formatCHF } from '@/config/booking'
import { useT } from '@/i18n'

export function Services() {
  const t = useT()
  return (
    <section id="services" className="mx-auto max-w-5xl scroll-mt-20 px-5 py-16">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t('services.title')}</h2>
        <p className="mt-1 text-muted-foreground">{t('services.subtitle')}</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2" data-testid="services">
        {services.map((s) => {
          const Icon = s.icon
          return (
            <Card
              key={s.id}
              data-testid={`service-card-${s.id}`}
              className="flex flex-col rounded-xl shadow-card"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent text-accent-foreground">
                    <Icon className="size-5" weight="duotone" />
                  </span>
                  <CardTitle>{t(`services.${s.i18nKey}.title`)}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1 text-sm text-muted-foreground">
                {t(`services.${s.i18nKey}.description`)}
              </CardContent>
              <CardFooter className="items-center justify-between">
                <span className="text-sm font-medium">
                  {formatCHF(calcom.hourlyCHF)}{' '}
                  <span className="text-muted-foreground">{t('services.perHour')}</span>
                </span>
                <Button variant="outline" asChild>
                  <a href="#booking">{t('services.book')}</a>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
