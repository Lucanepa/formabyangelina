import { useState } from 'react'
import { ArrowRight, Clock, MapPin, Moon, Sparkles, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Logo } from '@/components/Logo'

const sessions = [
  {
    name: 'Reformer flow',
    level: 'All levels',
    duration: '50 min',
    price: 'CHF 45',
    spots: '2 spots left',
    spotVariant: 'warning' as const,
    blurb: 'A grounded, body-led hour focused on alignment, breath and slow control on the reformer.',
  },
  {
    name: 'Mat & breath',
    level: 'Beginner friendly',
    duration: '45 min',
    price: 'CHF 35',
    spots: 'Open',
    spotVariant: 'success' as const,
    blurb: 'Mobility, core and breathwork on the mat — a calm reset for body and mind.',
  },
  {
    name: 'Private session',
    level: '1:1',
    duration: '60 min',
    price: 'CHF 120',
    spots: 'By request',
    spotVariant: 'secondary' as const,
    blurb: 'A session shaped entirely around you — recovery, technique or a focused goal.',
  },
]

const schedule = [
  { day: 'Mon', time: '09:00', name: 'Reformer flow' },
  { day: 'Tue', time: '18:30', name: 'Mat & breath' },
  { day: 'Thu', time: '07:30', name: 'Reformer flow' },
  { day: 'Sat', time: '10:00', name: 'Mat & breath' },
]

function useDarkMode() {
  const [dark, setDark] = useState(false)
  const toggle = () => {
    setDark((d) => {
      const next = !d
      document.documentElement.classList.toggle('dark', next)
      return next
    })
  }
  return { dark, toggle }
}

export default function App() {
  const { dark, toggle } = useDarkMode()

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="#" aria-label="Forma by Angelina" className="flex items-center">
            <Logo className="h-9 w-auto text-foreground" />
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground sm:flex">
            <a href="#sessions" className="transition-colors hover:text-foreground">Sessions</a>
            <a href="#schedule" className="transition-colors hover:text-foreground">Schedule</a>
            <a href="#book" className="transition-colors hover:text-foreground">Studio</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" aria-label="Toggle theme" onClick={toggle}>
              {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
            </Button>
            <Button asChild>
              <a href="#book">Book a session</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-5xl px-5 pt-16 pb-12 sm:pt-24">
        <Badge variant="secondary" className="mb-5 gap-1.5">
          <Sparkles className="size-3.5" /> Movement studio · Zürich
        </Badge>
        <h1 className="max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl">
          Move with intention.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-muted-foreground">
          Forma is a grounded, body-led practice — reformer, mat and breath.
          Slow, deliberate movement to help you feel strong, mobile and at home in your body.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button size="lg" asChild>
            <a href="#book" className="gap-2">Book a session <ArrowRight className="size-4" /></a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#schedule">View this week</a>
          </Button>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5">
        <Separator />
      </div>

      {/* Sessions */}
      <section id="sessions" className="mx-auto max-w-5xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Sessions</h2>
            <p className="mt-1 text-muted-foreground">Find the practice that fits where your body is today.</p>
          </div>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sessions.map((s) => (
            <Card key={s.name} className="flex flex-col rounded-xl shadow-sm">
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle>{s.name}</CardTitle>
                  <Badge variant={s.spotVariant}>{s.spots}</Badge>
                </div>
                <CardDescription className="flex items-center gap-3 pt-1">
                  <span className="flex items-center gap-1"><Clock className="size-3.5" /> {s.duration}</span>
                  <span>·</span>
                  <span>{s.level}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 text-sm text-muted-foreground">{s.blurb}</CardContent>
              <CardFooter className="items-center justify-between">
                <span className="text-lg font-semibold">{s.price}</span>
                <Button variant="outline" asChild>
                  <a href="#book">Book</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Schedule */}
      <section id="schedule" className="bg-card/60">
        <div className="mx-auto max-w-5xl px-5 py-16">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">This week</h2>
          <p className="mt-1 text-muted-foreground">A rolling weekly rhythm. Drop in or book ahead.</p>
          <div className="mt-8 divide-y divide-border rounded-xl border border-border bg-card">
            {schedule.map((slot) => (
              <div key={`${slot.day}-${slot.time}`} className="flex items-center gap-4 px-5 py-4">
                <Badge variant="brand" className="w-12 justify-center">{slot.day}</Badge>
                <span className="font-medium tabular-nums">{slot.time}</span>
                <span className="text-muted-foreground">{slot.name}</span>
                <Button variant="ghost" size="sm" className="ml-auto" asChild>
                  <a href="#book">Reserve</a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section id="book" className="mx-auto max-w-5xl px-5 py-20">
        <Card className="overflow-hidden rounded-2xl border-border bg-primary text-primary-foreground shadow-card-lg">
          <CardContent className="flex flex-col items-start gap-6 p-10 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ready to begin?</h2>
              <p className="mt-2 max-w-md text-primary-foreground/85">
                Book your first session and let's find a practice that meets your body where it is.
              </p>
            </div>
            <Button size="lg" variant="secondary" asChild>
              <a href="mailto:hello@formabyangelina.ch" className="gap-2">
                Book a session <ArrowRight className="size-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-10 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <Logo className="h-7 w-auto text-foreground" />
          <span className="flex items-center gap-1.5"><MapPin className="size-3.5" /> Zürich · by appointment</span>
          <span>© {new Date().getFullYear()} Forma by Angelina</span>
        </div>
      </footer>
    </div>
  )
}
