import { useDarkMode } from '@/hooks/useDarkMode'
import { SiteHeader } from '@/components/sections/SiteHeader'
import { Hero } from '@/components/sections/Hero'
import { Services } from '@/components/sections/Services'
import { About } from '@/components/sections/About'
import { Booking } from '@/components/sections/Booking'
import { SiteFooter } from '@/components/sections/SiteFooter'

export default function App() {
  const { dark, toggle } = useDarkMode()

  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <SiteHeader dark={dark} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Services />
        <About />
        <Booking dark={dark} />
      </main>
      <SiteFooter />
    </div>
  )
}
