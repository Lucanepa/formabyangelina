import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { I18nProvider } from '@/i18n'
import { services } from '@/config/booking'

function renderServices() {
  return render(
    <I18nProvider>
      <Services />
    </I18nProvider>,
  )
}

describe('Services', () => {
  it('renders all four service cards', () => {
    renderServices()
    const cards = screen.getAllByTestId(/^service-card-/)
    expect(cards).toHaveLength(4)
    expect(cards).toHaveLength(services.length)
  })

  it('renders the four service names (German default)', () => {
    renderServices()
    expect(screen.getByText('Personal Training')).toBeInTheDocument()
    expect(screen.getByText('Ernährungscoaching')).toBeInTheDocument()
    expect(screen.getByText('Yoga')).toBeInTheDocument()
    expect(screen.getByText('Physiotherapie & Faszien-Release')).toBeInTheDocument()
  })

  it('every Book link points to the booking section', () => {
    renderServices()
    const bookLinks = screen.getAllByRole('link', { name: 'Buchen' })
    expect(bookLinks).toHaveLength(4)
    for (const link of bookLinks) {
      expect(link).toHaveAttribute('href', '#booking')
    }
  })
})
