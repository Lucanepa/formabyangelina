import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('hero renders', async ({ page }) => {
  const hero = page.getByTestId('hero')
  await expect(hero).toBeVisible()
  await expect(hero.getByRole('heading', { level: 1 })).toContainText('Forma by Angelina')
})

test('all four service cards render', async ({ page }) => {
  const cards = page.locator('[data-testid^="service-card-"]')
  await expect(cards).toHaveCount(4)
})

test('offers 1 and 2 hour booking options', async ({ page }) => {
  const options = page.getByTestId('duration-options').locator('button')
  await expect(options).toHaveCount(2)
  await expect(options.nth(0)).toContainText('CHF 100')
  await expect(options.nth(1)).toContainText('CHF 200')
})

test('booking embed mounts', async ({ page }) => {
  const embed = page.getByTestId('booking-embed')
  await embed.scrollIntoViewIfNeeded()
  await expect(embed).toBeVisible()
  // Cal.com injects an <iframe> into the embed container once mounted.
  await expect(embed.locator('iframe')).toHaveCount(1, { timeout: 15_000 })
})
