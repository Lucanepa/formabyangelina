import { Check } from '@phosphor-icons/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { packages, perSessionCHF, formatCHF } from '@/config/booking'
import { useT } from '@/i18n'

export function Packages() {
  const t = useT()
  return (
    <section id="packages" className="scroll-mt-20 bg-card/60">
      <div className="mx-auto max-w-5xl px-5 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{t('packages.title')}</h2>
          <p className="mt-1 text-muted-foreground">{t('packages.subtitle')}</p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2" data-testid="packages">
          {packages.map((pkg) => (
            <Card
              key={pkg.sessions}
              data-testid={`package-card-${pkg.sessions}`}
              className="flex flex-col rounded-xl shadow-card"
            >
              <CardHeader>
                <CardTitle>{t('packages.sessions', { n: pkg.sessions })}</CardTitle>
                <CardDescription className="pt-1">
                  {t('packages.perSession', { price: perSessionCHF(pkg) })}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-1 items-end">
                <span className="text-2xl font-semibold">{formatCHF(pkg.priceCHF)}</span>
              </CardContent>
              <CardFooter>
                {pkg.paymentUrl ? (
                  <Button asChild className="w-full">
                    <a href={pkg.paymentUrl} target="_blank" rel="noreferrer">
                      <Check className="size-4" weight="bold" /> {t('packages.buy')}
                    </a>
                  </Button>
                ) : (
                  <Button className="w-full" disabled aria-label={t('packages.soon')}>
                    {t('packages.soon')}
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="mt-6 max-w-prose text-sm text-muted-foreground">{t('packages.note')}</p>
      </div>
    </section>
  )
}
