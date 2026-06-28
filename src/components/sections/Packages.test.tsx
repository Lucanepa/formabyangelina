import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Packages } from './Packages'
import { I18nProvider } from '@/i18n'
import { packages, formatCHF } from '@/config/booking'

function renderPackages() {
  return render(
    <I18nProvider>
      <Packages />
    </I18nProvider>,
  )
}

describe('Packages', () => {
  it('renders a card per configured package', () => {
    renderPackages()
    expect(screen.getAllByTestId(/^package-card-/)).toHaveLength(packages.length)
  })

  it('shows the 5- and 10-session tiers with totals', () => {
    renderPackages()
    expect(screen.getByText('5 Sessions')).toBeInTheDocument()
    expect(screen.getByText('10 Sessions')).toBeInTheDocument()
    expect(screen.getByText(formatCHF(500))).toBeInTheDocument()
    expect(screen.getByText(formatCHF(1000))).toBeInTheDocument()
  })

  it('disables Buy until a Stripe payment link is set', () => {
    renderPackages()
    // No paymentUrl configured yet → buttons are disabled "coming soon".
    const buttons = screen.getAllByRole('button', { name: 'Bald verfügbar' })
    expect(buttons).toHaveLength(packages.length)
    for (const btn of buttons) expect(btn).toBeDisabled()
  })
})
